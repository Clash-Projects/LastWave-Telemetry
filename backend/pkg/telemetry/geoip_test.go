package telemetry

import (
	"net/http"
	"testing"
)

func TestGeoResolverLoopback(t *testing.T) {
	resolver := NewGeoResolver()
	loc, ok := resolver.Resolve("127.0.0.1", nil)
	if !ok {
		t.Fatalf("expected loopback to resolve, got false")
	}
	if loc.City != "Prayagraj" {
		t.Errorf("expected default city Prayagraj for loopback, got %s", loc.City)
	}
}

func TestGeoResolverCloudflareHeaders(t *testing.T) {
	resolver := NewGeoResolver()
	headers := make(http.Header)
	headers.Set("CF-IPCity", "Tokyo")
	headers.Set("CF-IPCountry", "Japan")
	headers.Set("CF-IPLatitude", "35.6762")
	headers.Set("CF-IPLongitude", "139.6503")

	loc, ok := resolver.Resolve("203.0.113.1", headers)
	if !ok {
		t.Fatalf("expected cloudflare headers to resolve, got false")
	}
	if loc.City != "Tokyo" {
		t.Errorf("expected city Tokyo, got %s", loc.City)
	}
	if loc.Country != "Japan" {
		t.Errorf("expected country Japan, got %s", loc.Country)
	}
}

func TestGeoResolverPublicIP(t *testing.T) {
	resolver := NewGeoResolver()
	// Google Public DNS IP
	loc, ok := resolver.Resolve("8.8.8.8", nil)
	if !ok {
		t.Skip("skipping external network test if offline")
	}
	if loc.Country == "" {
		t.Errorf("expected non-empty country for 8.8.8.8")
	}
	if loc.Lat == 0 && loc.Lng == 0 {
		t.Errorf("expected non-zero coordinates for 8.8.8.8")
	}
}
