export interface Song {
  id: string;
  rank?: string;
  title: string;
  artist: string;
  plays: number;
  share?: number;
  share_percent?: number;
  cover?: string;
  cover_url?: string;
}

export interface Region {
  id: string;
  name: string;
  country: string;
  countryCode?: string;
  country_code?: string;
  lat: number;
  lng: number;
  coarseCoord?: string;
  coarse_coord?: string;
  activeListeners: number;
  active_listeners?: number;
  topSongs: Song[];
  top_songs?: Song[];
}

export interface GlobalKPIs {
  activeListeners: number;
  active_listeners?: number;
  streamsToday: number;
  streams_today?: number;
  peakConcurrent: number;
  peak_concurrent?: number;
  activeRegions: number;
  active_regions?: number;
}

export interface GlobalTop10Charts {
  daily: Song[];
  weekly: Song[];
  monthly: Song[];
}

export interface TelemetryState {
  globalKPIs: GlobalKPIs;
  regions: Region[];
  globalTop10: GlobalTop10Charts;
}
