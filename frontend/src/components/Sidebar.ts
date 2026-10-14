import { GlobalKPIs, GlobalTop10Charts, Song } from '../types/telemetry';

export class SidebarComponent {
  private element: HTMLElement;
  private currentTab: 'daily' | 'weekly' | 'monthly' = 'daily';
  private charts: GlobalTop10Charts = { daily: [], weekly: [], monthly: [] };

  constructor() {
    this.element = document.createElement('aside');
    this.element.className = 'lg:col-span-4 flex flex-col gap-4 min-h-0 lg:overflow-hidden';
    this.render();
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public updateKPIs(kpis: GlobalKPIs, regionCount: number): void {
    const actListeners = this.element.querySelector('#kpiActiveListeners');
    const streams = this.element.querySelector('#kpiStreamsToday');
    const peak = this.element.querySelector('#kpiPeakConcurrent');
    const regions = this.element.querySelector('#kpiActiveRegions');

    if (actListeners) actListeners.textContent = (kpis.activeListeners ?? kpis.active_listeners ?? 0).toLocaleString();
    if (streams) streams.textContent = (kpis.streamsToday ?? kpis.streams_today ?? 0).toLocaleString();
    if (peak) peak.textContent = (kpis.peakConcurrent ?? kpis.peak_concurrent ?? 0).toLocaleString();
    if (regions) regions.textContent = `${regionCount} Hubs`;
  }

  public updateCharts(charts: GlobalTop10Charts): void {
    this.charts = charts;
    this.renderChartList();
  }

  private renderChartList(): void {
    const listContainer = this.element.querySelector('#globalChartList');
    if (!listContainer) return;

    const songs: Song[] = this.charts[this.currentTab] || [];
    listContainer.innerHTML = songs.map((song, idx) => `
      <div class="group flex items-center justify-between p-2 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06] transition-all">
        <div class="flex items-center gap-3 min-w-0">
          <span class="font-mono text-xs font-bold text-zinc-500 group-hover:text-white tabular-nums w-5 shrink-0 text-center">${song.rank || ('0' + (idx + 1)).slice(-2)}</span>
          <img src="${song.cover || song.cover_url}" alt="${song.title}" class="w-10 h-10 rounded-lg object-cover monochrome-art shrink-0 border border-white/10 shadow-sm" loading="lazy">
          <div class="min-w-0 pr-2">
            <p class="text-xs font-semibold text-white truncate tracking-tight group-hover:underline underline-offset-2">${song.title}</p>
            <p class="text-[11px] text-zinc-400 truncate">${song.artist}</p>
          </div>
        </div>
        <div class="text-right shrink-0">
          <span class="text-xs font-mono text-zinc-200 font-semibold tabular-nums">${song.plays.toLocaleString()}</span>
          <span class="block text-[9px] font-mono text-zinc-500 uppercase tracking-wider">PLAYS</span>
        </div>
      </div>
    `).join('');
  }

  private setTab(tab: 'daily' | 'weekly' | 'monthly'): void {
    this.currentTab = tab;
    const btnDaily = this.element.querySelector('#tabDaily');
    const btnWeekly = this.element.querySelector('#tabWeekly');
    const btnMonthly = this.element.querySelector('#tabMonthly');

    [btnDaily, btnWeekly, btnMonthly].forEach(b => {
      b?.classList.remove('bg-white', 'text-black', 'font-semibold', 'shadow-sm');
      b?.classList.add('text-zinc-400');
    });

    const activeBtn = tab === 'daily' ? btnDaily : tab === 'weekly' ? btnWeekly : btnMonthly;
    activeBtn?.classList.add('bg-white', 'text-black', 'font-semibold', 'shadow-sm');
    activeBtn?.classList.remove('text-zinc-400');

    this.renderChartList();
  }

  private render(): void {
    this.element.innerHTML = `
      <!-- Top 4 KPI Micro-Cards (2x2 Grid) -->
      <div class="grid grid-cols-2 gap-3 shrink-0">
        <div class="rounded-xl border border-white/[0.08] bg-surface/80 hover:border-white/20 backdrop-blur-md p-3.5 transition-all group">
          <div class="flex items-center justify-between text-zinc-500 mb-1.5">
            <span class="text-[10px] font-mono uppercase tracking-[0.15em]">ACTIVE LISTENERS</span>
            <i data-lucide="users" class="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors"></i>
          </div>
          <div class="flex items-baseline justify-between">
            <span id="kpiActiveListeners" class="text-xl lg:text-2xl font-bold font-mono tracking-tight text-white tabular-nums">0</span>
            <span class="text-[10px] font-mono text-zinc-400 flex items-center gap-0.5">
              <i data-lucide="trending-up" class="w-3 h-3 text-white"></i> +4.2%
            </span>
          </div>
        </div>

        <div class="rounded-xl border border-white/[0.08] bg-surface/80 hover:border-white/20 backdrop-blur-md p-3.5 transition-all group">
          <div class="flex items-center justify-between text-zinc-500 mb-1.5">
            <span class="text-[10px] font-mono uppercase tracking-[0.15em]">STREAMS TODAY</span>
            <i data-lucide="play" class="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors"></i>
          </div>
          <div class="flex items-baseline justify-between">
            <span id="kpiStreamsToday" class="text-xl lg:text-2xl font-bold font-mono tracking-tight text-white tabular-nums">0</span>
            <span class="text-[10px] font-mono text-zinc-500">24h RAM</span>
          </div>
        </div>

        <div class="rounded-xl border border-white/[0.08] bg-surface/80 hover:border-white/20 backdrop-blur-md p-3.5 transition-all group">
          <div class="flex items-center justify-between text-zinc-500 mb-1.5">
            <span class="text-[10px] font-mono uppercase tracking-[0.15em]">PEAK CONCURRENT</span>
            <i data-lucide="zap" class="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors"></i>
          </div>
          <div class="flex items-baseline justify-between">
            <span id="kpiPeakConcurrent" class="text-xl lg:text-2xl font-bold font-mono tracking-tight text-white tabular-nums">0</span>
            <span class="text-[10px] font-mono text-zinc-500">HIGH</span>
          </div>
        </div>

        <div class="rounded-xl border border-white/[0.08] bg-surface/80 hover:border-white/20 backdrop-blur-md p-3.5 transition-all group">
          <div class="flex items-center justify-between text-zinc-500 mb-1.5">
            <span class="text-[10px] font-mono uppercase tracking-[0.15em]">ACTIVE REGIONS</span>
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors"></i>
          </div>
          <div class="flex items-baseline justify-between">
            <span id="kpiActiveRegions" class="text-xl lg:text-2xl font-bold font-mono tracking-tight text-white tabular-nums">0 Hubs</span>
            <span class="text-[10px] font-mono text-zinc-500">COARSE</span>
          </div>
        </div>
      </div>

      <!-- Global Top 10 Songs Card (Tabbed) -->
      <div class="flex-1 rounded-2xl border border-white/[0.08] bg-surface/80 backdrop-blur-md flex flex-col min-h-[380px] lg:min-h-0 overflow-hidden shadow-glass">
        <div class="p-4 border-b border-white/[0.08] flex items-center justify-between shrink-0">
          <div>
            <div class="flex items-center gap-2">
              <i data-lucide="disc" class="w-3.5 h-3.5 text-zinc-400"></i>
              <span class="text-[11px] font-mono uppercase tracking-[0.15em] text-zinc-400 font-semibold">Global Top 10</span>
            </div>
            <p class="text-[10px] font-mono text-zinc-500 mt-0.5">Aggregated playback telemetry</p>
          </div>

          <div class="flex bg-[#141414] p-0.5 rounded-lg border border-white/10 text-[10px] font-mono font-medium">
            <button id="tabDaily" class="chart-tab-btn px-2.5 py-1 rounded-md bg-white text-black font-semibold shadow-sm transition-all">
              DAILY
            </button>
            <button id="tabWeekly" class="chart-tab-btn px-2.5 py-1 rounded-md text-zinc-400 hover:text-white transition-all">
              WEEKLY
            </button>
            <button id="tabMonthly" class="chart-tab-btn px-2.5 py-1 rounded-md text-zinc-400 hover:text-white transition-all">
              MONTHLY
            </button>
          </div>
        </div>

        <div id="globalChartList" class="flex-1 overflow-y-auto divide-y divide-white/[0.04] p-2 space-y-0.5"></div>

        <div class="p-3 border-t border-white/[0.08] bg-surface/90 flex items-center justify-between text-[10px] font-mono text-zinc-500 shrink-0">
          <span>SOURCE: EPHEMERAL TELEMETRY</span>
          <span class="flex items-center gap-1 text-zinc-400">
            <i data-lucide="radio" class="w-3 h-3"></i> REAL-TIME
          </span>
        </div>
      </div>
    `;

    this.element.querySelector('#tabDaily')?.addEventListener('click', () => this.setTab('daily'));
    this.element.querySelector('#tabWeekly')?.addEventListener('click', () => this.setTab('weekly'));
    this.element.querySelector('#tabMonthly')?.addEventListener('click', () => this.setTab('monthly'));
  }
}
