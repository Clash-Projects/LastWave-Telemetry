export class PrivacyModalComponent {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.id = 'privacyModal';
    this.element.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-200';
    this.render();
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public open(): void {
    this.element.classList.remove('opacity-0', 'pointer-events-none');
    this.element.classList.add('opacity-100');
  }

  public close(): void {
    this.element.classList.add('opacity-0', 'pointer-events-none');
    this.element.classList.remove('opacity-100');
  }

  private render(): void {
    this.element.innerHTML = `
      <div class="w-full max-w-lg rounded-2xl border border-white/20 bg-[#0D0D0D] p-6 shadow-2xl relative text-left">
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg border border-white/20 bg-elevated flex items-center justify-center shadow-glow-sm">
              <i data-lucide="shield-check" class="w-4 h-4 text-white"></i>
            </div>
            <div>
              <h2 class="text-base font-semibold text-white tracking-tight">Zero-Tracking Privacy Guarantee</h2>
              <p class="text-[11px] font-mono text-zinc-400">60-Second Ephemeral In-Memory Bucket Architecture</p>
            </div>
          </div>
          <button id="closePrivacyModal" class="w-7 h-7 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Architecture Specs -->
        <div class="py-4 space-y-3.5 text-xs text-zinc-300 leading-relaxed font-sans">
          <div class="p-3 rounded-lg border border-white/10 bg-[#141414]">
            <div class="flex items-center gap-2 font-mono text-[11px] text-white font-semibold mb-1">
              <i data-lucide="cpu" class="w-3.5 h-3.5"></i> 1. Socket Boundary IP Erasure
            </div>
            <p class="text-zinc-400">When your LastWave app reports a listening pulse, the HTTP handler immediately drops the TCP socket and connection metadata. <strong class="text-zinc-200">Zero IP addresses are ever stored or written to disk.</strong></p>
          </div>

          <div class="p-3 rounded-lg border border-white/10 bg-[#141414]">
            <div class="flex items-center gap-2 font-mono text-[11px] text-white font-semibold mb-1">
              <i data-lucide="hard-drive" class="w-3.5 h-3.5"></i> 2. Volatile RAM-Only Ephemeral Buckets
            </div>
            <p class="text-zinc-400">Listener counters and regional top charts exist solely in volatile RAM memory. If the telemetry daemon restarts, the entire state disappears. No databases, no persistent storage, no user profiles.</p>
          </div>

          <div class="p-3 rounded-lg border border-white/10 bg-[#141414]">
            <div class="flex items-center gap-2 font-mono text-[11px] text-white font-semibold mb-1">
              <i data-lucide="map" class="w-3.5 h-3.5"></i> 3. Coarse Geolocation Truncation
            </div>
            <p class="text-zinc-400">Coordinates shown on the global map are coarse regional centroids (e.g., <code class="text-white font-mono">19.1° N, 72.8° E</code> for Mumbai) rounded to prevent any physical identification.</p>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="pt-3 border-t border-white/10 flex items-center justify-between">
          <span class="text-[10px] font-mono text-zinc-500">100% AUDITABLE OPEN SOURCE</span>
          <a href="https://github.com/Clash-Projects/LastWave-native" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg border border-white/20 bg-white text-black font-semibold text-xs font-mono hover:bg-zinc-200 transition-colors">
            View Source
          </a>
        </div>
      </div>
    `;

    this.element.querySelector('#closePrivacyModal')?.addEventListener('click', () => this.close());
    this.element.addEventListener('click', (e) => {
      if (e.target === this.element) this.close();
    });
  }
}
