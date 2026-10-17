package telemetry

import (
	"bufio"
	"encoding/json"
	"fmt"
	"math"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"sync"
	"time"
)

// PlayRecord represents a persistent record of a single song stream pulse.
// CRITICAL PRIVACY ARCHITECTURE:
// Zero IP addresses or user identifiers are ever recorded to disk.
type PlayRecord struct {
	SongID   string `json:"id"`
	Title    string `json:"title"`
	Artist   string `json:"artist"`
	CoverURL string `json:"cover,omitempty"`
	PlayedAt int64  `json:"ts"` // Unix timestamp in seconds
}

// PersistentState holds high-level counters that survive service restarts.
type PersistentState struct {
	PeakConcurrent int    `json:"peak_concurrent"`
	LastDailyDate  string `json:"last_daily_date"` // UTC date "YYYY-MM-DD"
	StreamsToday   int    `json:"streams_today"`
}

// Store handles persistent file storage and multi-window aggregations.
type Store struct {
	mu             sync.RWMutex
	dataDir        string
	isMemory       bool
	logFile        *os.File
	statePath      string
	logPath        string
	plays          []PlayRecord
	peakConcurrent int
	streamsToday   int
	currentDay     string
}

// NewStore initializes the persistent telemetry store.
// If dataDir is ":memory:", it operates purely in RAM without writing to disk.
func NewStore(dataDir string) (*Store, error) {
	if dataDir == "" {
		dataDir = os.Getenv("DATA_DIR")
		if dataDir == "" {
			dataDir = "./data"
		}
	}

	todayStr := time.Now().UTC().Format("2006-01-02")
	store := &Store{
		dataDir:    dataDir,
		currentDay: todayStr,
		plays:      make([]PlayRecord, 0, 500),
	}

	if dataDir == ":memory:" {
		store.isMemory = true
		return store, nil
	}

	if err := os.MkdirAll(dataDir, 0755); err != nil {
		return nil, fmt.Errorf("failed to create data directory: %w", err)
	}

	store.statePath = filepath.Join(dataDir, "state.json")
	store.logPath = filepath.Join(dataDir, "plays.jsonl")

	// 1. Load persistent state if available
	if stateData, err := os.ReadFile(store.statePath); err == nil {
		var state PersistentState
		if err := json.Unmarshal(stateData, &state); err == nil {
			store.peakConcurrent = state.PeakConcurrent
			if state.LastDailyDate == todayStr {
				store.streamsToday = state.StreamsToday
			} else {
				// Rolled into a new UTC day
				store.streamsToday = 0
			}
		}
	}

	// 2. Load historical plays from plays.jsonl (keep up to 30 days)
	cutoff30d := time.Now().Add(-30 * 24 * time.Hour).Unix()
	todayPlayCount := 0

	if file, err := os.Open(store.logPath); err == nil {
		scanner := bufio.NewScanner(file)
		buf := make([]byte, 64*1024)
		scanner.Buffer(buf, 1024*1024)

		for scanner.Scan() {
			line := strings.TrimSpace(scanner.Text())
			if line == "" {
				continue
			}
			var rec PlayRecord
			if err := json.Unmarshal([]byte(line), &rec); err != nil {
				continue
			}
			// Only keep plays from the past 30 days
			if rec.PlayedAt >= cutoff30d {
				store.plays = append(store.plays, rec)
				// Count today's plays
				playDay := time.Unix(rec.PlayedAt, 0).UTC().Format("2006-01-02")
				if playDay == todayStr {
					todayPlayCount++
				}
			}
		}
		_ = file.Close()
	}

	// Ensure streamsToday reflects at least the loaded plays for today
	if todayPlayCount > store.streamsToday {
		store.streamsToday = todayPlayCount
	}

	// 3. Open append-only log file for incoming plays
	logFile, err := os.OpenFile(store.logPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
	if err != nil {
		return nil, fmt.Errorf("failed to open append log %s: %w", store.logPath, err)
	}
	store.logFile = logFile

	return store, nil
}

// RecordPlay stores an incoming stream event and updates daily stream counters.
func (s *Store) RecordPlay(songID, title, artist, coverURL string) PlayRecord {
	s.mu.Lock()
	defer s.mu.Unlock()

	// Normalize track data
	title = strings.TrimSpace(title)
	artist = strings.TrimSpace(artist)
	songID = strings.TrimSpace(songID)
	coverURL = strings.TrimSpace(coverURL)

	if songID == "" {
		if title != "" || artist != "" {
			songID = fmt.Sprintf("trk-%s-%s", slugify(title), slugify(artist))
		} else {
			songID = "trk-unknown"
		}
	}
	if title == "" {
		title = "Unknown Track"
	}
	if artist == "" {
		artist = "Unknown Artist"
	}

	now := time.Now()
	todayStr := now.UTC().Format("2006-01-02")

	// Daily rollover at midnight UTC
	if s.currentDay != todayStr {
		s.currentDay = todayStr
		s.streamsToday = 0
	}

	s.streamsToday++

	rec := PlayRecord{
		SongID:   songID,
		Title:    title,
		Artist:   artist,
		CoverURL: coverURL,
		PlayedAt: now.Unix(),
	}

	s.plays = append(s.plays, rec)

	// Persist to append-only log
	if s.logFile != nil {
		data, err := json.Marshal(rec)
		if err == nil {
			_, _ = s.logFile.Write(append(data, '\n'))
		}
	}

	return rec
}

// UpdateActiveListeners updates peak concurrent listeners if current count exceeds previous peak.
func (s *Store) UpdateActiveListeners(currentActive int) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if currentActive > s.peakConcurrent {
		s.peakConcurrent = currentActive
		s.saveStateLocked()
	}
}

// GetStreamsToday returns the stream count for the current UTC day.
func (s *Store) GetStreamsToday() int {
	s.mu.Lock()
	defer s.mu.Unlock()

	todayStr := time.Now().UTC().Format("2006-01-02")
	if s.currentDay != todayStr {
		s.currentDay = todayStr
		s.streamsToday = 0
	}
	return s.streamsToday
}

// GetPeakConcurrent returns the highest concurrent listener count seen.
func (s *Store) GetPeakConcurrent() int {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return s.peakConcurrent
}

// GetTopSongs calculates top songs played within the given rolling duration.
func (s *Store) GetTopSongs(window time.Duration, limit int) []Song {
	s.mu.RLock()
	defer s.mu.RUnlock()

	cutoff := time.Now().Add(-window).Unix()
	type accumulator struct {
		id       string
		title    string
		artist   string
		coverURL string
		plays    int
	}

	counts := make(map[string]*accumulator)
	totalPlays := 0

	for i := len(s.plays) - 1; i >= 0; i-- {
		p := s.plays[i]
		if p.PlayedAt < cutoff {
			continue
		}

		key := p.SongID
		if key == "" {
			key = p.Title + " - " + p.Artist
		}
		if key == "" || key == " - " {
			continue
		}

		totalPlays++
		if acc, ok := counts[key]; ok {
			acc.plays++
			if acc.coverURL == "" && p.CoverURL != "" {
				acc.coverURL = p.CoverURL
			}
		} else {
			counts[key] = &accumulator{
				id:       p.SongID,
				title:    p.Title,
				artist:   p.Artist,
				coverURL: p.CoverURL,
				plays:    1,
			}
		}
	}

	result := make([]Song, 0, len(counts))
	for _, acc := range counts {
		result = append(result, Song{
			ID:       acc.id,
			Title:    acc.title,
			Artist:   acc.artist,
			CoverURL: acc.coverURL,
			Plays:    acc.plays,
		})
	}

	// Sort descending by play count, tie-break by Title
	sort.Slice(result, func(i, j int) bool {
		if result[i].Plays == result[j].Plays {
			return result[i].Title < result[j].Title
		}
		return result[i].Plays > result[j].Plays
	})

	if limit > 0 && len(result) > limit {
		result = result[:limit]
	}

	// Compute percentage share
	if totalPlays > 0 {
		for i := range result {
			share := (float64(result[i].Plays) / float64(totalPlays)) * 100.0
			result[i].SharePercent = math.Round(share*10) / 10
		}
	}

	return result
}

// SaveState persists current state (streams today, peak concurrent) to state.json atomically.
func (s *Store) SaveState() error {
	s.mu.Lock()
	defer s.mu.Unlock()
	return s.saveStateLocked()
}

func (s *Store) saveStateLocked() error {
	if s.isMemory || s.statePath == "" {
		return nil
	}

	state := PersistentState{
		PeakConcurrent: s.peakConcurrent,
		LastDailyDate:  s.currentDay,
		StreamsToday:   s.streamsToday,
	}

	data, err := json.MarshalIndent(state, "", "  ")
	if err != nil {
		return err
	}

	tmpFile := s.statePath + ".tmp"
	if err := os.WriteFile(tmpFile, data, 0644); err != nil {
		return err
	}
	return os.Rename(tmpFile, s.statePath)
}

// CompactLog prunes plays older than 30 days and rewrites plays.jsonl atomically.
func (s *Store) CompactLog() error {
	s.mu.Lock()
	defer s.mu.Unlock()

	if s.isMemory || s.logFile == nil {
		return nil
	}

	cutoff := time.Now().Add(-30 * 24 * time.Hour).Unix()
	freshPlays := make([]PlayRecord, 0, len(s.plays))
	for _, p := range s.plays {
		if p.PlayedAt >= cutoff {
			freshPlays = append(freshPlays, p)
		}
	}
	s.plays = freshPlays

	// Flush and close current log
	_ = s.logFile.Sync()
	_ = s.logFile.Close()

	// Rewrite compacted log
	tmpLog := s.logPath + ".tmp"
	f, err := os.OpenFile(tmpLog, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0644)
	if err != nil {
		// Reopen original log
		s.logFile, _ = os.OpenFile(s.logPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
		return err
	}

	for _, p := range s.plays {
		data, err := json.Marshal(p)
		if err == nil {
			_, _ = f.Write(append(data, '\n'))
		}
	}
	_ = f.Close()

	_ = os.Rename(tmpLog, s.logPath)

	// Reopen append log
	s.logFile, err = os.OpenFile(s.logPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
	return err
}

// Close gracefully flushes data and closes log files.
func (s *Store) Close() error {
	s.mu.Lock()
	defer s.mu.Unlock()

	_ = s.saveStateLocked()

	if s.logFile != nil {
		_ = s.logFile.Sync()
		err := s.logFile.Close()
		s.logFile = nil
		return err
	}
	return nil
}

func slugify(s string) string {
	s = strings.ToLower(s)
	var b strings.Builder
	for _, r := range s {
		if (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') {
			b.WriteRune(r)
		} else if r == ' ' || r == '-' || r == '_' {
			b.WriteRune('-')
		}
	}
	res := strings.Trim(b.String(), "-")
	if len(res) > 30 {
		res = res[:30]
	}
	return res
}
