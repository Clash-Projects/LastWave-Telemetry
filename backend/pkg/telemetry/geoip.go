package telemetry

import (
	"encoding/json"
	"fmt"
	"math"
	"net"
	"net/http"
	"strings"
	"sync"
	"time"
)

// GeoLocation represents a coarse regional geographic location
type GeoLocation struct {
	City      string  `json:"city"`
	Country   string  `json:"country"`
	Lat       float64 `json:"lat"`
	Lng       float64 `json:"lng"`
	FromCache bool    `json:"-"`
}

// GeoResolver provides in-memory cached IP-to-location resolution
type GeoResolver struct {
	mu     sync.RWMutex
	cache  map[string]GeoLocation
	client *http.Client
}

// NewGeoResolver creates a new in-memory GeoResolver
func NewGeoResolver() *GeoResolver {
	return &GeoResolver{
		cache: make(map[string]GeoLocation),
		client: &http.Client{
			Timeout: 2 * time.Second,
		},
	}
}

// Resolve automatically resolves a client IP to a coarse regional centroid
func (g *GeoResolver) Resolve(ip string, headers http.Header) (GeoLocation, bool) {
	ip = strings.TrimSpace(ip)
	if ip == "" {
		return GeoLocation{}, false
	}

	// 1. Fast in-memory RAM cache check
	g.mu.RLock()
	if loc, ok := g.cache[ip]; ok {
		g.mu.RUnlock()
		loc.FromCache = true
		return loc, true
	}
	g.mu.RUnlock()

	// 2. Cloudflare Geolocation Headers check (0ms overhead)
	if headers != nil {
		cfCity := headers.Get("CF-IPCity")
		cfCountry := headers.Get("CF-IPCountry")
		cfLat := headers.Get("CF-IPLatitude")
		cfLng := headers.Get("CF-IPLongitude")

		if cfCity != "" && cfLat != "" && cfLng != "" {
			var lat, lng float64
			_, _ = fmt.Sscanf(cfLat, "%f", &lat)
			_, _ = fmt.Sscanf(cfLng, "%f", &lng)
			if lat != 0 || lng != 0 {
				loc := GeoLocation{
					City:    cfCity,
					Country: cfCountry,
					Lat:     math.Round(lat*10) / 10, // ~10km coarse grid
					Lng:     math.Round(lng*10) / 10,
				}
				g.saveToCache(ip, loc)
				return loc, true
			}
		}
	}

	// 3. Local / Loopback / Private IP fallback
	parsedIP := net.ParseIP(ip)
	if parsedIP != nil && (parsedIP.IsLoopback() || parsedIP.IsPrivate() || parsedIP.IsUnspecified()) {
		loc := GeoLocation{
			City:    "Prayagraj",
			Country: "India",
			Lat:     25.4358,
			Lng:     81.8463,
		}
		g.saveToCache(ip, loc)
		return loc, true
	}

	// 4. Fast HTTP lookup via ip-api.com
	resp, err := g.client.Get(fmt.Sprintf("http://ip-api.com/json/%s?fields=status,country,city,lat,lon", ip))
	if err == nil && resp.StatusCode == http.StatusOK {
		defer resp.Body.Close()
		var apiResp struct {
			Status  string  `json:"status"`
			Country string  `json:"country"`
			City    string  `json:"city"`
			Lat     float64 `json:"lat"`
			Lon     float64 `json:"lon"`
		}
		if err := json.NewDecoder(resp.Body).Decode(&apiResp); err == nil && apiResp.Status == "success" {
			loc := GeoLocation{
				City:    apiResp.City,
				Country: apiResp.Country,
				Lat:     math.Round(apiResp.Lat*10) / 10,
				Lng:     math.Round(apiResp.Lon*10) / 10,
			}
			g.saveToCache(ip, loc)
			return loc, true
		}
	}

	// 5. Fallback lookup via ipwho.is
	resp2, err2 := g.client.Get(fmt.Sprintf("https://ipwho.is/%s", ip))
	if err2 == nil && resp2.StatusCode == http.StatusOK {
		defer resp2.Body.Close()
		var apiResp2 struct {
			Success   bool    `json:"success"`
			Country   string  `json:"country"`
			City      string  `json:"city"`
			Latitude  float64 `json:"latitude"`
			Longitude float64 `json:"longitude"`
		}
		if err := json.NewDecoder(resp2.Body).Decode(&apiResp2); err == nil && apiResp2.Success {
			loc := GeoLocation{
				City:    apiResp2.City,
				Country: apiResp2.Country,
				Lat:     math.Round(apiResp2.Latitude*10) / 10,
				Lng:     math.Round(apiResp2.Longitude*10) / 10,
			}
			g.saveToCache(ip, loc)
			return loc, true
		}
	}

	return GeoLocation{}, false
}

func (g *GeoResolver) saveToCache(ip string, loc GeoLocation) {
	g.mu.Lock()
	defer g.mu.Unlock()
	if len(g.cache) >= 20000 {
		// Evict an entry to bound memory
		for k := range g.cache {
			delete(g.cache, k)
			break
		}
	}
	g.cache[ip] = loc
}
