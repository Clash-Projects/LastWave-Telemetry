import { TelemetryService } from './services/api';
import { HeaderComponent } from './components/Header';
import { MapViewComponent } from './components/MapView';
import { RegionalDrawerComponent } from './components/RegionalDrawer';
import { SidebarComponent } from './components/Sidebar';
import { PrivacyModalComponent } from './components/PrivacyModal';
import { createIcons, icons } from 'lucide';

class App {
  private service: TelemetryService;
  private header: HeaderComponent;
  private drawer: RegionalDrawerComponent;
  private mapView: MapViewComponent;
  private sidebar: SidebarComponent;
  private privacyModal: PrivacyModalComponent;

  constructor() {
    this.service = new TelemetryService();

    // 1. Initialize Components
    this.privacyModal = new PrivacyModalComponent();
    this.drawer = new RegionalDrawerComponent(() => {
      this.mapView.selectRegion('all');
    });
    this.mapView = new MapViewComponent(this.drawer);
    this.sidebar = new SidebarComponent();
    this.header = new HeaderComponent(
      () => this.handleSimulateSync(),
      () => this.privacyModal.open()
    );

    // 2. Build DOM Layout
    const appEl = document.getElementById('app');
    if (!appEl) return;

    appEl.appendChild(this.header.getElement());

    const mainGrid = document.createElement('main');
    mainGrid.className = 'flex-1 p-3 lg:p-4 gap-4 grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:overflow-hidden';
    mainGrid.appendChild(this.mapView.getElement());
    mainGrid.appendChild(this.sidebar.getElement());
    appEl.appendChild(mainGrid);

    appEl.appendChild(this.privacyModal.getElement());

    // 3. Initialize Map & Icons
    this.mapView.initMap();
    this.refreshIcons();

    // 4. Initial Sync & Ticker
    this.updateUI();
    this.startTicker();

    // 5. Global Keyboard Handlers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.privacyModal.close();
        this.drawer.hide();
        this.mapView.selectRegion('all');
      }
    });
  }

  private refreshIcons(): void {
    createIcons({ icons });
  }

  private updateUI(): void {
    const state = this.service.getState();
    this.sidebar.updateKPIs(state.globalKPIs, state.regions.length);
    this.sidebar.updateCharts(state.globalTop10);
    this.mapView.updateRegions(state.regions);
    this.header.updateCountdown(this.service.getCountdown());
    this.refreshIcons();
  }

  private async handleSimulateSync(): Promise<void> {
    await this.service.fetchSnapshot(true);
    this.updateUI();
  }

  private startTicker(): void {
    setInterval(async () => {
      const remaining = this.service.decrementCountdown();
      this.header.updateCountdown(remaining);
      if (remaining === 60) {
        await this.service.fetchSnapshot(false);
        this.updateUI();
      }
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
