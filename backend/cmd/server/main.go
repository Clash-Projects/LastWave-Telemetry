package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"strings"
	"sync"
	"syscall"
	"time"

	"github.com/Clash-Projects/LastWave-Telemetry/backend/pkg/telemetry"
)

// IPRateLimiter tracks sliding window request timestamps per IP
type IPRateLimiter struct {
	mu      sync.Mutex
	history map[string][]time.Time
}

func NewIPRateLimiter() *IPRateLimiter {
	limiter := &IPRateLimiter{
		history: make(map[string][]time.Time),
	}
	// Background garbage collector to evict stale IPs every 2 minutes
	go func() {
		ticker := time.NewTicker(2 * time.Minute)
		for range ticker.C {
			limiter.mu.Lock()
			cutoff := time.Now().Add(-2 * time.Minute)
			for ip, times := range limiter.history {
				var valid []time.Time
				for _, t := range times {
					if t.After(cutoff) {
						valid = append(valid, t)
					}
				}
				if len(valid) == 0 {
					delete(limiter.history, ip)
				} else {
					limiter.history[ip] = valid
				}
			}
			limiter.mu.Unlock()
		}
	}()
	return limiter
}

// Allow permits up to maxReqs within window per IP
func (l *IPRateLimiter) Allow(ip string, maxReqs int, window time.Duration) bool {
	l.mu.Lock()
	defer l.mu.Unlock()

	now := time.Now()
	cutoff := now.Add(-window)

	var valid []time.Time
	for _, t := range l.history[ip] {
		if t.After(cutoff) {
			valid = append(valid, t)
		}
	}

	if len(valid) >= maxReqs {
		l.history[ip] = valid
		return false
	}

	valid = append(valid, now)
	l.history[ip] = valid
	return true
}

func enableCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		next(w, r)
	}
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	isProduction := os.Getenv("ENV") == "production"
	startTime := time.Now()
	bucket := telemetry.NewBucket(60 * time.Second)
	limiter := NewIPRateLimiter()
	geoResolver := telemetry.NewGeoResolver()

	// Background ticker for 60-second sync window
	ticker := time.NewTicker(60 * time.Second)
	stopTicker := make(chan struct{})
	go func() {
		for {
			select {
			case <-ticker.C:
				if isProduction {
					bucket.ResetWindow()
				} else {
					bucket.SimulateTick()
				}
			case <-stopTicker:
				ticker.Stop()
				return
			}
		}
	}()

	mux := http.NewServeMux()

	// 1. Live Map State Snapshot
	mux.HandleFunc("/api/live-map", enableCORS(func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		snapshot := bucket.GetSnapshot()
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(snapshot)
	}))

	// 2. Anonymous Stream Ping with Dynamic IP & Location Auto-Discovery
	mux.HandleFunc("/api/telemetry/ping", enableCORS(func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		clientIP := r.Header.Get("X-Forwarded-For")
		if clientIP == "" {
			clientIP = r.Header.Get("X-Real-IP")
		}
		if clientIP == "" {
			clientIP, _, _ = net.SplitHostPort(r.RemoteAddr)
		}
		if commaIdx := strings.Index(clientIP, ","); commaIdx != -1 {
			clientIP = strings.TrimSpace(clientIP[:commaIdx])
		}

		// Enforce Rate Limit: max 10 requests per rolling 60s window per IP
		if !limiter.Allow(clientIP, 10, 60*time.Second) {
			w.Header().Set("Retry-After", "10")
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusTooManyRequests)
			_ = json.NewEncoder(w).Encode(map[string]interface{}{
				"error":   "Rate limit exceeded",
				"message": "Maximum 10 telemetry requests per minute per IP",
			})
			return
		}

		// Payload guard: Max 2KB payload
		r.Body = http.MaxBytesReader(w, r.Body, 2048)

		var req telemetry.PingRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, "Invalid JSON payload or body exceeds 2KB", http.StatusBadRequest)
			return
		}

		if req.IP == "" && clientIP != "" {
			req.IP = clientIP
		}

		if req.Lat == 0 && req.Latitude != 0 {
			req.Lat = req.Latitude
		}
		if req.Lng == 0 && req.Longitude != 0 {
			req.Lng = req.Longitude
		}

		// Automatic Server-Side IP-to-Location Resolution:
		// If client does not specify city or coordinates, resolve automatically from clientIP
		if req.City == "" && req.Lat == 0 && req.Lng == 0 && clientIP != "" {
			if loc, ok := geoResolver.Resolve(clientIP, r.Header); ok {
				req.City = loc.City
				req.Country = loc.Country
				req.Lat = loc.Lat
				req.Lng = loc.Lng
			}
		}

		if req.Lat != 0 || req.Lng != 0 || req.City != "" {
			bucket.RecordDynamicIPPing(req.IP, req.City, req.Country, req.Lat, req.Lng, req.SongID, req.Title, req.Artist, req.CoverURL)
		} else {
			bucket.RecordPing(req.SongID, req.Title, req.Artist, req.RegionID, req.CoverURL)
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusAccepted)
		_ = json.NewEncoder(w).Encode(map[string]interface{}{
			"status":    "recorded_in_ram",
			"ephemeral": true,
			"city":      req.City,
			"country":   req.Country,
			"lat":       req.Lat,
			"lng":       req.Lng,
		})
	}))

	// 3. Instant Simulation Trigger (for UI demoing)
	mux.HandleFunc("/api/simulate-tick", enableCORS(func(w http.ResponseWriter, r *http.Request) {
		if isProduction {
			http.Error(w, "Simulation is disabled in production environment", http.StatusForbidden)
			return
		}

		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		bucket.SimulateTick()
		snapshot := bucket.GetSnapshot()

		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(snapshot)
	}))

	// 4. Health & Architecture Audit
	mux.HandleFunc("/api/health", enableCORS(func(w http.ResponseWriter, r *http.Request) {
		uptime := time.Since(startTime).Seconds()
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]interface{}{
			"service":        "lastwave-live-telemetry",
			"status":         "healthy",
			"architecture":   "ephemeral_ram_bucket_60s",
			"zero_ip_logs":   true,
			"uptime_seconds": uptime,
		})
	}))

	// 5. Static File Server (serves dashboard UI)
	staticDir := filepath.Join("..")
	fileServer := http.FileServer(http.Dir(staticDir))
	mux.Handle("/", fileServer)

	server := &http.Server{
		Addr:         ":" + port,
		Handler:      mux,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	// Graceful shutdown
	go func() {
		sigint := make(chan os.Signal, 1)
		signal.Notify(sigint, os.Interrupt, syscall.SIGTERM)
		<-sigint
		log.Println("[LastWave Live] Shutting down telemetry server...")
		close(stopTicker)
		_ = bucket.Close()
		_ = server.Close()
	}()

	fmt.Printf(`
╔══════════════════════════════════════════════════════════════════╗
║                    LASTWAVE // LIVE TELEMETRY                    ║
║          Anonymous • Zero-IP Logs • 60s Ephemeral RAM Bucket     ║
╠══════════════════════════════════════════════════════════════════╣
║  HTTP Server listening on: http://localhost:%s                 ║
║  Live Map API:             http://localhost:%s/api/live-map    ║
║  Health Check:             http://localhost:%s/api/health      ║
╚══════════════════════════════════════════════════════════════════╝
`, port, port, port)

	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatalf("Server error: %v", err)
	}
}
