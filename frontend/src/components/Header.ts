export class HeaderComponent {
  private element: HTMLElement;
  private onSimulateSync: () => void;
  private onOpenPrivacy: () => void;

  constructor(onSimulateSync: () => void, onOpenPrivacy: () => void) {
    this.onSimulateSync = onSimulateSync;
    this.onOpenPrivacy = onOpenPrivacy;
    this.element = document.createElement('header');
    this.element.className = 'h-16 border-b border-white/[0.08] bg-surface/80 backdrop-blur-md px-4 lg:px-6 flex items-center justify-between z-30 shrink-0';
    this.render();
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public updateCountdown(seconds: number): void {
    const pill = this.element.querySelector('#countdownPill');
    if (pill) {
      pill.textContent = `NEXT SYNC IN: ${seconds}s`;
    }
  }

  private render(): void {
    this.element.innerHTML = `
      <!-- Brand & Live Indicator -->
      <div class="flex items-center gap-4 lg:gap-6">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg border border-white/20 bg-elevated flex items-center justify-center shadow-glow-sm">
            <i data-lucide="activity" class="w-4 h-4 text-white"></i>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-sm lg:text-base font-bold tracking-tight text-[#FAFAFA]">LastWave</span>
            <span class="text-xs font-mono font-medium text-zinc-500">//</span>
            <span class="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold">LIVE</span>
          </div>
        </div>

        <!-- Sync Status & Countdown Pill -->
        <div class="hidden sm:flex items-center gap-2 bg-[#121212] border border-white/[0.08] rounded-full px-3 py-1">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_8px_#FFF]"></span>
          </span>
          <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400">60s CYCLE</span>
          <span class="text-zinc-600 text-[10px]">•</span>
          <span id="countdownPill" class="text-[11px] font-mono font-semibold text-white tabular-nums tracking-wide">NEXT SYNC IN: 60s</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2.5 lg:gap-3">
        <!-- Simulate 60s Sync Button -->
        <button id="simulateSyncBtn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-elevated hover:bg-zinc-900 hover:border-white/25 active:scale-95 transition-all text-xs font-mono text-zinc-300 hover:text-white" title="Trigger immediate live bucket recalculation">
          <i data-lucide="refresh-cw" id="syncIcon" class="w-3.5 h-3.5 transition-transform"></i>
          <span class="hidden md:inline">Simulate Sync</span>
        </button>

        <!-- Zero-Tracking Privacy Badge Modal Trigger -->
        <button id="privacyBadgeBtn" class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-elevated hover:bg-zinc-900 hover:border-white/25 transition-all text-xs font-mono text-zinc-300 hover:text-white group">
          <i data-lucide="shield-check" class="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors"></i>
          <span class="hidden lg:inline text-[11px] tracking-wide">ZERO-IP • RAM ONLY</span>
          <span class="lg:hidden text-[11px]">PRIVACY</span>
        </button>

        <!-- GitHub Repository Link -->
        <a href="https://github.com/Clash-Projects/LastWave-native" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-elevated hover:bg-zinc-900 hover:border-white/25 transition-all text-xs font-mono text-zinc-300 hover:text-white">
          <i data-lucide="github" class="w-3.5 h-3.5"></i>
          <span class="hidden sm:inline">GitHub</span>
        </a>
      </div>
    `;

    const syncBtn = this.element.querySelector('#simulateSyncBtn');
    syncBtn?.addEventListener('click', () => {
      const icon = this.element.querySelector('#syncIcon');
      icon?.classList.add('rotate-180');
      setTimeout(() => icon?.classList.remove('rotate-180'), 600);
      this.onSimulateSync();
    });

    const privacyBtn = this.element.querySelector('#privacyBadgeBtn');
    privacyBtn?.addEventListener('click', () => {
      this.onOpenPrivacy();
    });
  }
}
