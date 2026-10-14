package telemetry

import "time"

// Song represents a track in telemetry counters
type Song struct {
	ID           string  `json:"id"`
	Title        string  `json:"title"`
	Artist       string  `json:"artist"`
	Plays        int     `json:"plays"`
	SharePercent float64 `json:"share_percent,omitempty"`
	CoverURL     string  `json:"cover_url,omitempty"`
}

// Region represents a coarse geographic listening cluster
type Region struct {
	ID              string  `json:"id"`
	Name            string  `json:"name"`
	Country         string  `json:"country"`
	CountryCode     string  `json:"country_code"`
	Lat             float64 `json:"lat"`
	Lng             float64 `json:"lng"`
	CoarseCoord     string  `json:"coarse_coord,omitempty"`
	ActiveListeners int     `json:"active_listeners"`
	Tier            int     `json:"tier,omitempty"`
	IsClientIP      bool    `json:"is_client_ip,omitempty"`
	IP              string  `json:"ip,omitempty"`
	TopSongs        []Song  `json:"top_songs"`
}

// GlobalKPIs represents real-time aggregate indicators
type GlobalKPIs struct {
	ActiveListeners int `json:"active_listeners"`
	StreamsToday    int `json:"streams_today"`
	PeakConcurrent  int `json:"peak_concurrent"`
	ActiveRegions   int `json:"active_regions"`
}

// TelemetryPayload represents the full state returned by /api/live-map
type TelemetryPayload struct {
	SyncedAt        time.Time  `json:"synced_at"`
	NextSyncSeconds int        `json:"next_sync_seconds"`
	GlobalKPIs      GlobalKPIs `json:"global_kpis"`
	Regions         []Region   `json:"regions"`
	DailyTop10      []Song     `json:"daily_top_10"`
	WeeklyTop10     []Song     `json:"weekly_top_10"`
	MonthlyTop10    []Song     `json:"monthly_top_10"`
}

// PingRequest represents an incoming anonymous playback tick from a client
type PingRequest struct {
	SongID   string  `json:"song_id"`
	Title    string  `json:"title"`
	Artist   string  `json:"artist"`
	RegionID string  `json:"region_id"`
	CoverURL  string  `json:"cover_url,omitempty"`
	Client    string  `json:"client,omitempty"` // "android", "desktop", etc.
	IP        string  `json:"ip,omitempty"`
	City      string  `json:"city,omitempty"`
	Country   string  `json:"country,omitempty"`
	Lat       float64 `json:"lat,omitempty"`
	Lng       float64 `json:"lng,omitempty"`
	Latitude  float64 `json:"latitude,omitempty"`
	Longitude float64 `json:"longitude,omitempty"`
}
