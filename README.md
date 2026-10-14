# LastWave Telemetry

High-throughput, privacy-first telemetry engine and real-time listening map for [LastWave Android](https://github.com/Clash-Projects/LastWave-native) and [LastWave Desktop](https://github.com/Clash-Projects/LastWave-Desktop).

---

## Overview

LastWave Live aggregates global playback heartbeats into volatile 60-second in-memory windows. It operates without persistent databases or disk-based logs, rendering live listening velocity across 500+ global metro centroids on a self-contained vector map.

### Client Ecosystem

LastWave Live ingests real-time telemetry across all official LastWave client implementations:

| Client | Platform | Repository | Stack |
| :--- | :--- | :--- | :--- |
| **LastWave Android** | Android 7.0+ (Phones, Tablets) | [Clash-Projects/LastWave-native](https://github.com/Clash-Projects/LastWave-native) | 100% Kotlin, Jetpack Compose, Media3 ExoPlayer |
| **LastWave Desktop** | Windows, macOS, Linux | [Clash-Projects/LastWave-Desktop](https://github.com/Clash-Projects/LastWave-Desktop) | Cross-platform desktop player |

### Key Capabilities

- **Zero-Persistence RAM Engine:** Telemetry is stored exclusively in thread-safe memory buffers. When the process restarts or the 60-second window expires, stale state clears automatically.
- **Privacy by Design:** Client IP addresses are erased at the network socket boundary. Locations are mapped to coarse regional centroids (~10km) to eliminate triangulation or physical tracking.
- **Built-in Abuse Protection:** Ingress endpoints enforce token-bucket rate limiting (10 requests/minute per IP) with strict 2KB payload bounds and dynamic node caps.
- **Zero-API Vector Map:** Standalone equirectangular SVG projection requiring no external map providers, third-party tile servers, or API keys.

### Ingress & Security Model

| Layer | Mechanism | Limit / Enforcement |
| :--- | :--- | :--- |
| **Network Ingress** | Ephemeral IP Hash | Client IPs are evaluated solely in RAM for rate-limiting and never logged to disk or exported in telemetry payloads |
| **Rate Limiter** | Sliding-Window Token Bucket | 10 requests / 60s per client IP (`429 Too Many Requests`) with automatic memory eviction |
| **Payload Guard** | `http.MaxBytesReader` | Strict 2KB ceiling (`400 Bad Request`) to reject oversized request floods |
| **RAM Quota** | Bounded Slice Buffer | Max 50 dynamic non-centroid client locations retained concurrently |
| **Data Eviction** | Ephemeral Rolling Window | Strict 60-second time horizon; stale telemetry self-evicts continuously |

---

## Quick Start

### 1. Run the Backend Server

The backend is a self-contained Go service that serves both the JSON telemetry API and the embedded web dashboard:

```bash
cd backend
go run ./cmd/server
```

Or build a standalone binary:

```bash
cd backend
go build -o server ./cmd/server
./server
```

Once running, access the dashboard at:
- **Web Interface:** `http://localhost:8080/`
- **Telemetry API:** `http://localhost:8080/api/live-map`
- **Health Check:** `http://localhost:8080/api/health`

### 2. Run Tests

```bash
cd backend
go test -v ./pkg/telemetry/...
```

---

## API Reference

### `GET /api/live-map`

Returns the active 60-second snapshot containing global KPIs, active listening hubs, and regional trending charts.

**Response (`200 OK`):**
```json
{
  "synced_at": "2026-10-14T20:55:00Z",
  "next_sync_seconds": 60,
  "global_kpis": {
    "active_listeners": 52195,
    "streams_today": 48910,
    "peak_concurrent": 2104,
    "active_regions": 215
  },
  "regions": [
    {
      "id": "in-bom",
      "name": "Mumbai",
      "country": "India",
      "lat": 19.076,
      "lng": 72.8777,
      "active_listeners": 8420,
      "top_songs": [
        {
          "rank": "01",
          "title": "Starboy",
          "artist": "The Weeknd",
          "plays": 1420
        }
      ]
    }
  ]
}
```

---

### `POST /api/telemetry/ping`

Ingests an anonymous playback heartbeat from a client (Android or Desktop).

- **Rate Limit:** 10 requests per minute per client IP (`429 Too Many Requests` on breach).
- **Payload Cap:** Max 2KB (`400 Bad Request` if exceeded).

**Request Body:**
```json
{
  "client": "desktop",
  "song_id": "trk-1049",
  "title": "Starboy",
  "artist": "The Weeknd",
  "city": "Mumbai",
  "country": "India",
  "lat": 19.076,
  "lng": 72.8777
}
```

**Response (`202 Accepted`):**
```json
{
  "status": "recorded_in_ram",
  "ephemeral": true,
  "city": "Mumbai"
}
```

---

### `GET /api/health`

Service health check and architecture audit endpoint.

**Response (`200 OK`):**
```json
{
  "service": "lastwave-live-telemetry",
  "status": "healthy",
  "architecture": "ephemeral_ram_bucket_60s",
  "zero_ip_logs": true,
  "uptime_seconds": 1240.5
}
```

---

## Configuration

The service can be configured via environment variables:

| Variable | Default | Description |
| :--- | :--- | :--- |
| `PORT` | `8080` | Port for the HTTP daemon |
| `ENV` | `development` | Set to `production` to disable simulation endpoints |

---

## Ecosystem Repositories

- **Android Client (Mobile):** [Clash-Projects/LastWave-native](https://github.com/Clash-Projects/LastWave-native)
- **Desktop Client:** [Clash-Projects/LastWave-Desktop](https://github.com/Clash-Projects/LastWave-Desktop)
- **Telemetry Server & Live Map:** [Clash-Projects/LastWave-Telemetry](https://github.com/Clash-Projects/LastWave-Telemetry)

---

## License

Part of the open-source LastWave ecosystem. Distributed under the MIT License.
