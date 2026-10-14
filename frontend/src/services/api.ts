import { TelemetryState } from '../types/telemetry';
import { INITIAL_MOCK_DATA } from './mockData';

export class TelemetryService {
  private state: TelemetryState;
  private countdown: number = 60;

  constructor() {
    this.state = JSON.parse(JSON.stringify(INITIAL_MOCK_DATA));
  }

  public getState(): TelemetryState {
    return this.state;
  }

  public getCountdown(): number {
    return this.countdown;
  }

  public decrementCountdown(): number {
    this.countdown--;
    if (this.countdown <= 0) {
      this.countdown = 60;
    }
    return this.countdown;
  }

  public async fetchSnapshot(isManualSimulation: boolean = false): Promise<TelemetryState> {
    try {
      const endpoint = isManualSimulation ? '/api/simulate-tick' : '/api/live-map';
      const method = isManualSimulation ? 'POST' : 'GET';
      const response = await fetch(endpoint, { method });

      if (response.ok) {
        const data = await response.json();
        this.state = {
          globalKPIs: {
            activeListeners: data.global_kpis?.active_listeners ?? data.global_kpis?.activeListeners ?? 0,
            streamsToday: data.global_kpis?.streams_today ?? data.global_kpis?.streamsToday ?? 0,
            peakConcurrent: data.global_kpis?.peak_concurrent ?? data.global_kpis?.peakConcurrent ?? 0,
            activeRegions: data.global_kpis?.active_regions ?? data.global_kpis?.activeRegions ?? 0,
          },
          regions: (data.regions || []).map((r: any) => ({
            id: r.id,
            name: r.name,
            country: r.country,
            countryCode: r.country_code || r.countryCode,
            lat: r.lat,
            lng: r.lng,
            coarseCoord: r.coarse_coord || r.coarseCoord,
            activeListeners: r.active_listeners ?? r.activeListeners ?? 0,
            topSongs: (r.top_songs || r.topSongs || []).map((s: any, idx: number) => ({
              id: s.id,
              rank: s.rank || ('0' + (idx + 1)),
              title: s.title,
              artist: s.artist,
              plays: s.plays,
              share: s.share_percent ?? s.share ?? 20,
              cover: s.cover_url || s.cover,
            }))
          })),
          globalTop10: {
            daily: (data.daily_top_10 || []).map((s: any, idx: number) => ({
              id: s.id,
              rank: ('0' + (idx + 1)).slice(-2),
              title: s.title,
              artist: s.artist,
              plays: s.plays,
              cover: s.cover_url || s.cover,
            })),
            weekly: (data.weekly_top_10 || []).map((s: any, idx: number) => ({
              id: s.id,
              rank: ('0' + (idx + 1)).slice(-2),
              title: s.title,
              artist: s.artist,
              plays: s.plays,
              cover: s.cover_url || s.cover,
            })),
            monthly: (data.monthly_top_10 || []).map((s: any, idx: number) => ({
              id: s.id,
              rank: ('0' + (idx + 1)).slice(-2),
              title: s.title,
              artist: s.artist,
              plays: s.plays,
              cover: s.cover_url || s.cover,
            })),
          }
        };
        this.countdown = data.next_sync_seconds || 60;
        return this.state;
      }
    } catch {
      // Backend not running -> fallback to graceful local simulation
    }

    this.applyLocalJitter();
    return this.state;
  }

  private applyLocalJitter(): void {
    let total = 0;
    this.state.regions.forEach(r => {
      const jitter = Math.floor(Math.random() * 11) - 4;
      r.activeListeners = Math.max(25, r.activeListeners + jitter);
      total += r.activeListeners;

      r.topSongs.forEach(s => {
        s.plays += Math.floor(Math.random() * 4) + 1;
      });
    });

    this.state.globalKPIs.activeListeners = total;
    this.state.globalKPIs.streamsToday += Math.floor(total / 6);
    if (total > this.state.globalKPIs.peakConcurrent) {
      this.state.globalKPIs.peakConcurrent = total;
    }
    this.countdown = 60;
  }
}
