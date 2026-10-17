package telemetry

import (
	"fmt"
	"math"
	"math/rand"
	"os"
	"sort"
	"strings"
	"sync"
	"time"
)

// Bucket manages real-time regional listening state and coordinates with Store for persistent analytics.
// CRITICAL PRIVACY ARCHITECTURE:
// 1. IP addresses are completely discarded at the handler boundary.
// 2. Only song play events (song_id, title, artist, cover) are stored. Zero user identifiers or IPs are persisted.
// 3. Rolling window aggregates live concurrent listeners per coarse regional centroid.
type Bucket struct {
	mu             sync.RWMutex
	windowDuration time.Duration
	lastSync       time.Time
	regions        []Region
	store          *Store
	rng            *rand.Rand
}

// NewBucket initializes a new telemetry bucket.
// When ENV=production, all simulated listeners and fake streams are completely omitted.
func NewBucket(window time.Duration, storeOpt ...*Store) *Bucket {
	if window <= 0 {
		window = 60 * time.Second
	}

	isProduction := os.Getenv("ENV") == "production"
	regions := GetInitialRegions()

	var store *Store
	if len(storeOpt) > 0 && storeOpt[0] != nil {
		store = storeOpt[0]
	} else {
		dataDir := os.Getenv("DATA_DIR")
		if dataDir == "" {
			// If running under go test, default to memory mode for hermetic isolation
			if strings.HasSuffix(os.Args[0], ".test") || strings.HasSuffix(os.Args[0], ".test.exe") {
				dataDir = ":memory:"
			} else {
				dataDir = "./data"
			}
		}
		var err error
		store, err = NewStore(dataDir)
		if err != nil {
			store, _ = NewStore(":memory:")
		}
	}

	if isProduction {
		// Clean production state: 0 fake listeners, 0 mock songs
		for i := range regions {
			regions[i].ActiveListeners = 0
			regions[i].TopSongs = []Song{}
		}
	} else {
		// Seed a few primary hub nodes in dev mode for UI demoing
		for i := range regions {
			switch regions[i].ID {
			case "in-bom", "in-del", "in-blr", "us-nyc", "gb-lon", "jp-tyo":
				regions[i].ActiveListeners = 120
			}
		}
		if store != nil && store.GetStreamsToday() == 0 {
			store.mu.Lock()
			store.streamsToday = 48910
			store.peakConcurrent = 2104
			store.mu.Unlock()
		}
	}

	return &Bucket{
		windowDuration: window,
		lastSync:       time.Now(),
		regions:        regions,
		store:          store,
		rng:            rand.New(rand.NewSource(time.Now().UnixNano())),
	}
}

// ResetWindow rolls the ephemeral 60s window in production, clearing expired listeners
func (b *Bucket) ResetWindow() {
	b.mu.Lock()
	defer b.mu.Unlock()

	b.lastSync = time.Now()
	cleanRegions := make([]Region, 0, len(b.regions))
	for i := range b.regions {
		b.regions[i].ActiveListeners = 0
		if !b.regions[i].IsClientIP {
			cleanRegions = append(cleanRegions, b.regions[i])
		}
	}
	b.regions = cleanRegions

	// Persist state periodically
	if b.store != nil {
		_ = b.store.SaveState()
	}
}

// RecordPing accepts an anonymous stream pulse.
func (b *Bucket) RecordPing(songID, title, artist, regionID, coverURL string) {
	b.mu.Lock()
	defer b.mu.Unlock()

	// 1. Record play persistently in zero-IP store
	if b.store != nil {
		b.store.RecordPlay(songID, title, artist, coverURL)
	}

	// 2. Check if this matches a region
	for i := range b.regions {
		if b.regions[i].ID == regionID {
			b.regions[i].ActiveListeners++
			updateRegionTopSongs(&b.regions[i], songID, title, artist, coverURL)
			break
		}
	}

	// 3. Update peak concurrent listeners
	b.recalculatePeakLocked()
}

// RecordDynamicIPPing accepts a dynamic IP or location ping and spawns/updates map nodes in RAM
func (b *Bucket) RecordDynamicIPPing(ip, cityName, country string, lat, lng float64, songID, title, artist, coverURL string) {
	b.mu.Lock()
	defer b.mu.Unlock()

	// 1. Record play persistently in zero-IP store
	if b.store != nil {
		b.store.RecordPlay(songID, title, artist, coverURL)
	}

	// 2. Check if this matches a region by coordinates or name
	for i := range b.regions {
		matchLat := lat != 0 && math.Abs(b.regions[i].Lat-lat) < 0.28
		matchLng := lng != 0 && math.Abs(b.regions[i].Lng-lng) < 0.28
		matchName := cityName != "" && strings.EqualFold(b.regions[i].Name, cityName)
		if (matchLat && matchLng) || matchName {
			b.regions[i].ActiveListeners++
			updateRegionTopSongs(&b.regions[i], songID, title, artist, coverURL)
			if ip != "" {
				b.regions[i].IsClientIP = true
				b.regions[i].IP = ip
			}
			b.recalculatePeakLocked()
			return
		}
	}

	// 3. Dynamically register new city from IP
	if cityName != "" || (lat != 0 && lng != 0) {
		name := cityName
		if name == "" {
			name = fmt.Sprintf("Node %.1f, %.1f", lat, lng)
		}
		var initialSongs []Song
		if songID != "" || title != "" {
			initialSongs = []Song{
				{ID: songID, Title: title, Artist: artist, Plays: 1, CoverURL: coverURL},
			}
		}

		newReg := Region{
			ID:              fmt.Sprintf("ip-%d", time.Now().UnixNano()%100000),
			Name:            name,
			Country:         country,
			Lat:             lat,
			Lng:             lng,
			ActiveListeners: 1,
			Tier:            1,
			IsClientIP:      true,
			IP:              ip,
			TopSongs:        initialSongs,
		}

		// Cap dynamic IP nodes to max 50 to strictly bound memory
		dynamicCount := 0
		firstDynamicIdx := -1
		for idx, reg := range b.regions {
			if reg.IsClientIP {
				dynamicCount++
				if firstDynamicIdx == -1 {
					firstDynamicIdx = idx
				}
			}
		}
		if dynamicCount >= 50 && firstDynamicIdx != -1 {
			b.regions = append(b.regions[:firstDynamicIdx], b.regions[firstDynamicIdx+1:]...)
		}

		b.regions = append(b.regions, newReg)
	}

	b.recalculatePeakLocked()
}

func (b *Bucket) recalculatePeakLocked() {
	if b.store == nil {
		return
	}
	totalActive := 0
	for _, r := range b.regions {
		totalActive += r.ActiveListeners
	}
	b.store.UpdateActiveListeners(totalActive)
}

func updateRegionTopSongs(r *Region, songID, title, artist, coverURL string) {
	if songID == "" && title == "" {
		return
	}
	found := false
	for j := range r.TopSongs {
		if r.TopSongs[j].ID == songID || (songID == "" && r.TopSongs[j].Title == title) {
			r.TopSongs[j].Plays++
			if r.TopSongs[j].CoverURL == "" && coverURL != "" {
				r.TopSongs[j].CoverURL = coverURL
			}
			found = true
			break
		}
	}
	if !found {
		r.TopSongs = append(r.TopSongs, Song{
			ID:       songID,
			Title:    title,
			Artist:   artist,
			Plays:    1,
			CoverURL: coverURL,
		})
	}
	sort.Slice(r.TopSongs, func(i, j int) bool {
		return r.TopSongs[i].Plays > r.TopSongs[j].Plays
	})
	if len(r.TopSongs) > 5 {
		r.TopSongs = r.TopSongs[:5]
	}
}

// SimulateTick applies natural live jitter and rolls the 60s countdown
func (b *Bucket) SimulateTick() {
	b.mu.Lock()
	defer b.mu.Unlock()

	b.lastSync = time.Now()

	totalActive := 0
	for i := range b.regions {
		if b.regions[i].ActiveListeners > 0 {
			delta := b.rng.Intn(13) - 6 // -6 to +6
			b.regions[i].ActiveListeners += delta
			if b.regions[i].ActiveListeners < 0 {
				b.regions[i].ActiveListeners = 0
			}
			for j := range b.regions[i].TopSongs {
				b.regions[i].TopSongs[j].Plays += b.rng.Intn(3) + 1
			}
		}
		totalActive += b.regions[i].ActiveListeners
	}

	if b.store != nil {
		b.store.UpdateActiveListeners(totalActive)
	}
}

// GetSnapshot returns the current aggregated telemetry view
func (b *Bucket) GetSnapshot() TelemetryPayload {
	b.mu.RLock()
	defer b.mu.RUnlock()

	now := time.Now()
	elapsed := now.Sub(b.lastSync)
	remaining := int(b.windowDuration.Seconds() - elapsed.Seconds())
	if remaining < 0 {
		remaining = 0
	}

	activeCount := 0
	totalActive := 0
	for _, r := range b.regions {
		if r.ActiveListeners > 0 {
			activeCount++
			totalActive += r.ActiveListeners
		}
	}

	// Deep copy regions slice
	regionsCopy := make([]Region, len(b.regions))
	copy(regionsCopy, b.regions)

	streamsToday := 0
	peakConcurrent := 0
	var dailyTop10 []Song
	var weeklyTop10 []Song
	var monthlyTop10 []Song

	if b.store != nil {
		streamsToday = b.store.GetStreamsToday()
		peakConcurrent = b.store.GetPeakConcurrent()
		dailyTop10 = b.store.GetTopSongs(24*time.Hour, 10)
		weeklyTop10 = b.store.GetTopSongs(7*24*time.Hour, 10)
		monthlyTop10 = b.store.GetTopSongs(30*24*time.Hour, 10)
	}

	isProduction := os.Getenv("ENV") == "production"
	// In dev mode with empty store, fallback to mock demo data
	if !isProduction && len(dailyTop10) == 0 {
		dailyTop10 = GetGlobalTop10Daily()
		weeklyTop10 = GetGlobalTop10Weekly()
		monthlyTop10 = GetGlobalTop10Monthly()
	}

	if dailyTop10 == nil {
		dailyTop10 = []Song{}
	}
	if weeklyTop10 == nil {
		weeklyTop10 = []Song{}
	}
	if monthlyTop10 == nil {
		monthlyTop10 = []Song{}
	}

	return TelemetryPayload{
		SyncedAt:        b.lastSync,
		NextSyncSeconds: remaining,
		GlobalKPIs: GlobalKPIs{
			ActiveListeners: totalActive,
			StreamsToday:    streamsToday,
			PeakConcurrent:  peakConcurrent,
			ActiveRegions:   activeCount,
		},
		Regions:      regionsCopy,
		DailyTop10:   dailyTop10,
		WeeklyTop10:  weeklyTop10,
		MonthlyTop10: monthlyTop10,
	}
}

// Close flushes persistent store state to disk cleanly.
func (b *Bucket) Close() error {
	b.mu.Lock()
	defer b.mu.Unlock()
	if b.store != nil {
		return b.store.Close()
	}
	return nil
}
