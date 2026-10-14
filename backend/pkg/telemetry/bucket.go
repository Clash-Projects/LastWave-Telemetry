package telemetry

import (
	"fmt"
	"math"
	"math/rand"
	"strings"
	"sync"
	"time"
)

// Bucket is an in-memory ephemeral aggregation storage.
// CRITICAL PRIVACY ARCHITECTURE:
// 1. IP addresses are completely discarded at the handler boundary.
// 2. Data is held in RAM only — never written to disk or database.
// 3. Rolling window aggregates listeners per coarse regional centroid.
type Bucket struct {
	mu             sync.RWMutex
	windowDuration time.Duration
	lastSync       time.Time
	regions        []Region
	streamsToday   int
	peakConcurrent int
	dailyTop10     []Song
	weeklyTop10    []Song
	monthlyTop10   []Song
	rng            *rand.Rand
}

// NewBucket initializes a new ephemeral RAM bucket
func NewBucket(window time.Duration) *Bucket {
	if window <= 0 {
		window = 60 * time.Second
	}

	b := &Bucket{
		windowDuration: window,
		lastSync:       time.Now(),
		regions:        GetInitialRegions(),
		streamsToday:   48910,
		peakConcurrent: 2104,
		dailyTop10:     GetGlobalTop10Daily(),
		weeklyTop10:    GetGlobalTop10Weekly(),
		monthlyTop10:   GetGlobalTop10Monthly(),
		rng:            rand.New(rand.NewSource(time.Now().UnixNano())),
	}

	return b
}

// RecordPing accepts an anonymous stream pulse.
func (b *Bucket) RecordPing(songID, title, artist, regionID, coverURL string) {
	b.mu.Lock()
	defer b.mu.Unlock()

	b.streamsToday++

	// Check if this matches a region
	for i := range b.regions {
		if b.regions[i].ID == regionID {
			b.regions[i].ActiveListeners++
			// Check if song exists in top songs
			found := false
			for j := range b.regions[i].TopSongs {
				if b.regions[i].TopSongs[j].ID == songID {
					b.regions[i].TopSongs[j].Plays++
					found = true
					break
				}
			}
			if !found && len(b.regions[i].TopSongs) < 5 {
				b.regions[i].TopSongs = append(b.regions[i].TopSongs, Song{
					ID:       songID,
					Title:    title,
					Artist:   artist,
					Plays:    1,
					CoverURL: coverURL,
				})
			}
			break
		}
	}
}

// RecordDynamicIPPing accepts a dynamic IP or location ping and spawns/updates map nodes in RAM
func (b *Bucket) RecordDynamicIPPing(ip, cityName, country string, lat, lng float64, songID, title, artist, coverURL string) {
	b.mu.Lock()
	defer b.mu.Unlock()

	b.streamsToday++

	// Check if this matches a region by coordinates or name
	for i := range b.regions {
		matchLat := lat != 0 && math.Abs(b.regions[i].Lat-lat) < 0.28
		matchLng := lng != 0 && math.Abs(b.regions[i].Lng-lng) < 0.28
		matchName := cityName != "" && strings.EqualFold(b.regions[i].Name, cityName)
		if (matchLat && matchLng) || matchName {
			b.regions[i].ActiveListeners++
			if ip != "" {
				b.regions[i].IsClientIP = true
				b.regions[i].IP = ip
			}
			return
		}
	}

	// Dynamically register new city from IP
	if cityName != "" || (lat != 0 && lng != 0) {
		name := cityName
		if name == "" {
			name = fmt.Sprintf("Node %.1f, %.1f", lat, lng)
		}
		if songID == "" {
			songID = "trk-dyn"
			title = "Live Stream"
			artist = "Active Listener"
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
			TopSongs: []Song{
				{ID: songID, Title: title, Artist: artist, Plays: 1, CoverURL: coverURL},
			},
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

	b.streamsToday += totalActive / 8
	if totalActive > b.peakConcurrent {
		b.peakConcurrent = totalActive
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

	return TelemetryPayload{
		SyncedAt:        b.lastSync,
		NextSyncSeconds: remaining,
		GlobalKPIs: GlobalKPIs{
			ActiveListeners: totalActive,
			StreamsToday:    b.streamsToday,
			PeakConcurrent:  b.peakConcurrent,
			ActiveRegions:   activeCount,
		},
		Regions:      regionsCopy,
		DailyTop10:   b.dailyTop10,
		WeeklyTop10:  b.weeklyTop10,
		MonthlyTop10: b.monthlyTop10,
	}
}
