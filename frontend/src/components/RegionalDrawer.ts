import { Region } from '../types/telemetry';

export class RegionalDrawerComponent {
  private element: HTMLElement;
  private onClose: () => void;

  constructor(onClose: () => void) {
    this.onClose = onClose;
    this.element = document.createElement('div');
    this.element.id = 'regionalDrawer';
    this.element.className = 'absolute bottom-16 left-4 right-4 sm:right-auto sm:w-[380px] rounded-xl border border-white/15 bg-surface/90 backdrop-blur-xl p-4 shadow-2xl z-20 transition-all duration-300 opacity-0 pointer-events-none translate-y-3';
    this.render();
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public show(region: Region): void {
    const nameEl = this.element.querySelector('#drawerRegionName');
    const pillEl = this.element.querySelector('#drawerListenerPill');
    const coordsEl = this.element.querySelector('#drawerCoords');
    const listEl = this.element.querySelector('#regionalSongsList');

    if (nameEl) nameEl.textContent = region.name;
    if (pillEl) pillEl.textContent = `${region.activeListeners} LIVE`;
    if (coordsEl) coordsEl.textContent = `${region.coarseCoord || region.coarse_coord} • Ephemeral Centroid`;

    if (listEl) {
      listEl.innerHTML = (region.topSongs || region.top_songs || []).map((song, idx) => `
        <div class="group flex items-center justify-between p-1.5 rounded-lg hover:bg-white/[0.06] transition-all">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="font-mono text-[11px] font-bold text-zinc-500 group-hover:text-white tabular-nums w-4 shrink-0">${song.rank || '0' + (idx + 1)}</span>
            <img src="${song.cover || song.cover_url}" alt="${song.title}" class="w-8 h-8 rounded-md object-cover monochrome-art shrink-0 border border-white/10" loading="lazy">
            <div class="min-w-0 pr-2">
              <p class="text-xs font-medium text-white truncate tracking-tight">${song.title}</p>
              <p class="text-[10px] text-zinc-400 truncate">${song.artist}</p>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="text-[10px] font-mono text-zinc-300 font-semibold tabular-nums">${song.plays.toLocaleString()}</span>
            <div class="w-14 h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
              <div class="h-full bg-white rounded-full transition-all duration-500" style="width: ${song.share || song.share_percent || 20}%"></div>
            </div>
          </div>
        </div>
      `).join('');
    }

    this.element.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
    this.element.classList.add('opacity-100', 'translate-y-0');
  }

  public hide(): void {
    this.element.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
    this.element.classList.remove('opacity-100', 'translate-y-0');
  }

  private render(): void {
    this.element.innerHTML = `
      <div class="flex items-start justify-between pb-3 border-b border-white/[0.08]">
        <div>
          <div class="flex items-center gap-2">
            <h3 id="drawerRegionName" class="text-sm font-semibold text-white tracking-tight"></h3>
            <span id="drawerListenerPill" class="text-[10px] font-mono font-semibold bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/20 tabular-nums"></span>
          </div>
          <p id="drawerCoords" class="text-[10px] font-mono text-zinc-500 mt-0.5 tabular-nums"></p>
        </div>
        <button id="closeDrawerBtn" class="w-6 h-6 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>

      <div class="mt-3">
        <div class="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-400 mb-2">
          <span>Top 5 in Region Today</span>
          <span class="text-zinc-500">Regional Share</span>
        </div>
        <div id="regionalSongsList" class="space-y-2 max-h-[190px] overflow-y-auto pr-1"></div>
      </div>
    `;

    this.element.querySelector('#closeDrawerBtn')?.addEventListener('click', () => {
      this.hide();
      this.onClose();
    });
  }
}
