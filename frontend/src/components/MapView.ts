import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world-merc.js';
import 'jsvectormap/dist/jsvectormap.css';
import { Region } from '../types/telemetry';
import { RegionalDrawerComponent } from './RegionalDrawer';

export class MapViewComponent {
  private element: HTMLElement;
  private drawer: RegionalDrawerComponent;
  private regions: Region[] = [];
  private selectedRegionId: string | null = null;
  private vectorMap: any = null;

  constructor(drawer: RegionalDrawerComponent) {
    this.drawer = drawer;
    this.element = document.createElement('section');
    this.element.className = 'lg:col-span-8 flex flex-col h-[520px] lg:h-full rounded-2xl border border-white/[0.08] bg-surface/80 backdrop-blur-md relative overflow-hidden group/map shadow-glass';
    this.render();
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public initMap(): void {
    const container = this.element.querySelector('#vectorMapContainer') as HTMLElement;
    if (!container || this.vectorMap) return;

    const markers = this.regions.map(r => ({
      name: `${r.name} (${r.activeListeners} LIVE)`,
      coords: [r.lat, r.lng],
      regionId: r.id
    }));

    this.vectorMap = new (jsVectorMap as any)({
      selector: container,
      map: 'world_merc',
      backgroundColor: '#050505',
      zoomButtons: false,
      zoomOnScroll: true,
      regionStyle: {
        initial: {
          fill: '#131313',
          stroke: 'rgba(255, 255, 255, 0.12)',
          strokeWidth: 0.5,
          fillOpacity: 1
        },
        hover: {
          fill: '#1f1f1f',
          stroke: 'rgba(255, 255, 255, 0.35)',
          strokeWidth: 0.8,
          cursor: 'pointer'
        }
      },
      markers: markers,
      markerStyle: {
        initial: {
          r: 5.5,
          fill: '#FFFFFF',
          stroke: 'rgba(255, 255, 255, 0.45)',
          strokeWidth: 4,
          fillOpacity: 1
        },
        hover: {
          r: 7.5,
          fill: '#FFFFFF',
          stroke: 'rgba(255, 255, 255, 0.9)',
          strokeWidth: 6,
          cursor: 'pointer'
        }
      },
      onMarkerClick: (_: any, index: number) => {
        const clickedRegion = this.regions[index];
        if (clickedRegion) {
          this.selectRegion(clickedRegion.id);
        }
      }
    });

    this.setupZoomControls();
  }

  public updateRegions(regions: Region[]): void {
    this.regions = regions;
    const countEl = this.element.querySelector('#activeNodesCount');
    if (countEl) {
      countEl.textContent = `${regions.length} Live Clusters`;
    }

    this.renderQuickJumpPills();

    if (this.selectedRegionId && this.selectedRegionId !== 'all') {
      const activeReg = this.regions.find(r => r.id === this.selectedRegionId);
      if (activeReg) {
        this.drawer.show(activeReg);
      }
    }
  }

  public selectRegion(regionId: string): void {
    this.selectedRegionId = regionId;

    if (regionId === 'all') {
      if (this.vectorMap && typeof this.vectorMap.setFocus === 'function') {
        this.vectorMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      }
      this.drawer.hide();
      this.highlightPill('all');
      return;
    }

    const reg = this.regions.find(r => r.id === regionId);
    if (!reg) return;

    if (this.vectorMap && typeof this.vectorMap.setFocus === 'function') {
      this.vectorMap.setFocus({
        coords: [reg.lat, reg.lng],
        scale: 3.5,
        animate: true
      });
    }

    this.drawer.show(reg);
    this.highlightPill(regionId);
  }

  private renderQuickJumpPills(): void {
    const container = this.element.querySelector('#quickJumpPills');
    if (!container) return;

    container.innerHTML = this.regions.map(r => `
      <button data-region="${r.id}" class="quick-jump-btn shrink-0 px-2.5 py-1 rounded-md text-[11px] font-mono border border-white/[0.08] bg-elevated hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5">
        <span>${r.name.split(',')[0]}</span>
        <span class="text-[9px] text-zinc-500 tabular-nums">(${r.activeListeners})</span>
      </button>
    `).join('');

    this.element.querySelectorAll('.quick-jump-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-region');
        if (id) this.selectRegion(id);
      });
    });
  }

  private highlightPill(activeId: string): void {
    this.element.querySelectorAll('.quick-jump-btn').forEach(btn => {
      const id = btn.getAttribute('data-region');
      if (id === activeId) {
        btn.classList.add('border-white/30', 'bg-white/10', 'text-white', 'font-medium');
        btn.classList.remove('border-white/[0.08]', 'text-zinc-300');
      } else {
        btn.classList.remove('border-white/30', 'bg-white/10', 'text-white', 'font-medium');
        btn.classList.add('border-white/[0.08]', 'text-zinc-300');
      }
    });
  }

  private setupZoomControls(): void {
    this.element.querySelector('#zoomInBtn')?.addEventListener('click', () => {
      if (this.vectorMap && typeof this.vectorMap.zoomIn === 'function') {
        this.vectorMap.zoomIn();
      }
    });

    this.element.querySelector('#zoomOutBtn')?.addEventListener('click', () => {
      if (this.vectorMap && typeof this.vectorMap.zoomOut === 'function') {
        this.vectorMap.zoomOut();
      }
    });

    this.element.querySelector('#resetMapBtn')?.addEventListener('click', () => {
      if (this.vectorMap && typeof this.vectorMap.setFocus === 'function') {
        this.vectorMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      }
      this.drawer.hide();
    });
  }

  private render(): void {
    this.element.innerHTML = `
      <div class="h-11 border-b border-white/[0.08] px-4 flex items-center justify-between bg-surface/90 z-10 shrink-0">
        <div class="flex items-center gap-2">
          <i data-lucide="globe" class="w-3.5 h-3.5 text-zinc-400"></i>
          <span class="text-[11px] font-mono uppercase tracking-[0.15em] text-zinc-400 font-semibold">Global Telemetry Mesh</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5">
            <span class="inline-block w-2 h-2 rounded-full bg-white shadow-glow-sm"></span>
            <span id="activeNodesCount" class="text-[11px] font-mono text-zinc-400 tabular-nums">0 Live Clusters</span>
          </div>
          <span class="text-zinc-700">|</span>
          <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">Detailed Vector Mercator (Zero-API)</span>
        </div>
      </div>

      <div id="vectorMapContainer" class="flex-1 w-full h-full relative z-0"></div>

      <div class="absolute top-14 right-4 flex flex-col gap-1.5 z-20">
        <button id="zoomInBtn" class="w-8 h-8 rounded-lg bg-surface/90 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-md" title="Zoom In">
          <i data-lucide="plus" class="w-4 h-4"></i>
        </button>
        <button id="zoomOutBtn" class="w-8 h-8 rounded-lg bg-surface/90 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-md" title="Zoom Out">
          <i data-lucide="minus" class="w-4 h-4"></i>
        </button>
        <button id="resetMapBtn" class="w-8 h-8 rounded-lg bg-surface/90 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-md" title="Reset View">
          <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>

      <div class="absolute top-14 left-4 pointer-events-none z-10 flex items-center gap-2 bg-[#0D0D0D]/85 border border-white/10 rounded-md px-2.5 py-1 backdrop-blur-md">
        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        <span id="mapCoordsHud" class="text-[10px] font-mono text-zinc-400 tracking-wider">MERCATOR VECTOR • 100% OFFLINE</span>
      </div>

      <div class="h-12 border-t border-white/[0.08] px-3 flex items-center gap-1.5 bg-surface/90 backdrop-blur-md overflow-x-auto z-10 shrink-0 no-scrollbar">
        <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-500 shrink-0 px-2">QUICK JUMP:</span>
        <button data-region="all" class="quick-jump-btn shrink-0 px-2.5 py-1 rounded-md text-[11px] font-mono border border-white/20 bg-white/10 text-white font-medium hover:border-white/40 transition-all">
          Global View
        </button>
        <div id="quickJumpPills" class="flex items-center gap-1.5 shrink-0"></div>
      </div>
    `;

    this.element.appendChild(this.drawer.getElement());
  }
}
