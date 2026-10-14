import { TelemetryState } from '../types/telemetry';

export const INITIAL_MOCK_DATA: TelemetryState = {
  globalKPIs: {
    activeListeners: 2470,
    streamsToday: 48910,
    peakConcurrent: 3120,
    activeRegions: 12
  },
  regions: [
    {
      id: 'in-bom',
      name: 'Mumbai, IN',
      country: 'India',
      countryCode: 'IN',
      lat: 19.0760,
      lng: 72.8777,
      coarseCoord: '19.1° N, 72.8° E',
      activeListeners: 248,
      topSongs: [
        { id: 'mb-01', rank: '01', title: 'Husn', artist: 'Anuv Jain', plays: 3840, share: 32, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'mb-02', rank: '02', title: 'Kahani Suno 2.0', artist: 'Kaifi Khalil', plays: 3120, share: 26, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'mb-03', rank: '03', title: 'Tu Hai Kahan', artist: 'AUR', plays: 2450, share: 20, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
        { id: 'mb-04', rank: '04', title: 'Faasle', artist: 'Aditya Rikhari', plays: 1980, share: 14, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' },
        { id: 'mb-05', rank: '05', title: 'Chuttamalle', artist: 'Anirudh Ravichander', plays: 1420, share: 8, cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'in-del',
      name: 'Delhi NCR, IN',
      country: 'India',
      countryCode: 'IN',
      lat: 28.6139,
      lng: 77.2090,
      coarseCoord: '28.6° N, 77.2° E',
      activeListeners: 312,
      topSongs: [
        { id: 'dl-01', rank: '01', title: 'Wavy', artist: 'Karan Aujla', plays: 4210, share: 34, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=120&auto=format&fit=crop&q=80' },
        { id: 'dl-02', rank: '02', title: 'Winning Speech', artist: 'Karan Aujla', plays: 3670, share: 28, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
        { id: 'dl-03', rank: '03', title: 'Softly', artist: 'Karan Aujla x Ikky', plays: 2890, share: 18, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'dl-04', rank: '04', title: 'Tauba Tauba', artist: 'Karan Aujla', plays: 2150, share: 12, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'dl-05', rank: '05', title: 'With You', artist: 'AP Dhillon', plays: 1780, share: 8, cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'in-blr',
      name: 'Bengaluru, IN',
      country: 'India',
      countryCode: 'IN',
      lat: 12.9716,
      lng: 77.5946,
      coarseCoord: '13.0° N, 77.6° E',
      activeListeners: 285,
      topSongs: [
        { id: 'bl-01', rank: '01', title: 'Illuminati', artist: 'Sushin Shyam', plays: 3950, share: 35, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
        { id: 'bl-02', rank: '02', title: 'Midnight City', artist: 'M83', plays: 3100, share: 25, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' },
        { id: 'bl-03', rank: '03', title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', plays: 2600, share: 20, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'bl-04', rank: '04', title: 'Aasa Kooda', artist: 'Sai Abhyankkar', plays: 1940, share: 12, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'bl-05', rank: '05', title: 'Sunflower', artist: 'Post Malone', plays: 1320, share: 8, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'in-hyd',
      name: 'Hyderabad, IN',
      country: 'India',
      countryCode: 'IN',
      lat: 17.3850,
      lng: 78.4867,
      coarseCoord: '17.4° N, 78.5° E',
      activeListeners: 192,
      topSongs: [
        { id: 'hy-01', rank: '01', title: 'Fear Song', artist: 'Anirudh Ravichander', plays: 2890, share: 33, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'hy-02', rank: '02', title: 'Kurchi Madathapetti', artist: 'Thaman S', plays: 2420, share: 27, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'hy-03', rank: '03', title: 'Sammohanuda', artist: 'Bheems Ceciroleo', plays: 1850, share: 18, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' },
        { id: 'hy-04', rank: '04', title: 'Hoyna Hoyna', artist: 'Anirudh Ravichander', plays: 1410, share: 13, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
        { id: 'hy-05', rank: '05', title: 'Naa Ready', artist: 'Anirudh Ravichander', plays: 1120, share: 9, cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'in-ccu',
      name: 'Kolkata, IN',
      country: 'India',
      countryCode: 'IN',
      lat: 22.5726,
      lng: 88.3639,
      coarseCoord: '22.6° N, 88.4° E',
      activeListeners: 146,
      topSongs: [
        { id: 'kl-01', rank: '01', title: 'Tumi Jaake Bhalobasho', artist: 'Iman Chakraborty', plays: 2100, share: 36, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
        { id: 'kl-02', rank: '02', title: 'Boba Tunnel', artist: 'Anupam Roy', plays: 1750, share: 26, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'kl-03', rank: '03', title: 'Mayabono Biharini', artist: 'Somlata Acharyya', plays: 1380, share: 18, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'kl-04', rank: '04', title: 'Alor Kolikaye', artist: 'Shreya Ghoshal', plays: 990, share: 12, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' },
        { id: 'kl-05', rank: '05', title: 'Aami Kolkatari', artist: 'Kavita K.', plays: 720, share: 8, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'uk-lon',
      name: 'London, UK',
      country: 'United Kingdom',
      countryCode: 'UK',
      lat: 51.5074,
      lng: -0.1278,
      coarseCoord: '51.5° N, 0.1° W',
      activeListeners: 224,
      topSongs: [
        { id: 'ln-01', rank: '01', title: 'Sprinter', artist: 'Dave & Central Cee', plays: 3410, share: 32, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
        { id: 'ln-02', rank: '02', title: 'Strangers', artist: 'Kenya Grace', plays: 2980, share: 25, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'ln-03', rank: '03', title: 'Prada', artist: 'cassö x RAYE', plays: 2560, share: 20, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'ln-04', rank: '04', title: 'Baddadan', artist: 'Chase & Status', plays: 1840, share: 13, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' },
        { id: 'ln-05', rank: '05', title: 'Greedy', artist: 'Tate McRae', plays: 1390, share: 10, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'de-ber',
      name: 'Berlin, DE',
      country: 'Germany',
      countryCode: 'DE',
      lat: 52.5200,
      lng: 13.4050,
      coarseCoord: '52.5° N, 13.4° E',
      activeListeners: 178,
      topSongs: [
        { id: 'br-01', rank: '01', title: 'Time to Move', artist: 'Klanglos', plays: 2750, share: 34, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'br-02', rank: '02', title: 'Komet', artist: 'Udo Lindenberg x Apache', plays: 2310, share: 26, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'br-03', rank: '03', title: 'Friesenjung', artist: 'Ski Aggu, Joost', plays: 1940, share: 20, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
        { id: 'br-04', rank: '04', title: '9 bis 9', artist: 'SIRA, Bausa', plays: 1420, share: 12, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
        { id: 'br-05', rank: '05', title: 'Tabu.', artist: 'Yung Yury', plays: 980, share: 8, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'jp-tyo',
      name: 'Tokyo, JP',
      country: 'Japan',
      countryCode: 'JP',
      lat: 35.6762,
      lng: 139.6503,
      coarseCoord: '35.7° N, 139.7° E',
      activeListeners: 265,
      topSongs: [
        { id: 'tk-01', rank: '01', title: 'Idol', artist: 'YOASOBI', plays: 4890, share: 38, cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=120&auto=format&fit=crop&q=80' },
        { id: 'tk-02', rank: '02', title: 'Bling-Bang-Bang-Born', artist: 'Creepy Nuts', plays: 4120, share: 28, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'tk-03', rank: '03', title: 'Specialz', artist: 'King Gnu', plays: 3200, share: 18, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'tk-04', rank: '04', title: 'Seven', artist: 'Jung Kook ft. Latto', plays: 1890, share: 10, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
        { id: 'tk-05', rank: '05', title: 'Night Dancer', artist: 'imase', plays: 1350, share: 6, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'us-nyc',
      name: 'New York, US',
      country: 'United States',
      countryCode: 'US',
      lat: 40.7128,
      lng: -74.0060,
      coarseCoord: '40.7° N, 74.0° W',
      activeListeners: 340,
      topSongs: [
        { id: 'ny-01', rank: '01', title: 'Not Like Us', artist: 'Kendrick Lamar', plays: 5120, share: 36, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
        { id: 'ny-02', rank: '02', title: 'Espresso', artist: 'Sabrina Carpenter', plays: 4210, share: 27, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'ny-03', rank: '03', title: 'Like That', artist: 'Future, Kendrick', plays: 3450, share: 19, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'ny-04', rank: '04', title: 'Million Dollar Baby', artist: 'Tommy Richman', plays: 2310, share: 11, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
        { id: 'ny-05', rank: '05', title: 'Cruel Summer', artist: 'Taylor Swift', plays: 1690, share: 7, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'br-sao',
      name: 'São Paulo, BR',
      country: 'Brazil',
      countryCode: 'BR',
      lat: -23.5505,
      lng: -46.6333,
      coarseCoord: '23.6° S, 46.6° W',
      activeListeners: 182,
      topSongs: [
        { id: 'sp-01', rank: '01', title: 'Haiku', artist: 'Veigh', plays: 2840, share: 35, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'sp-02', rank: '02', title: 'Novo Balanço', artist: 'Veigh', plays: 2320, share: 25, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'sp-03', rank: '03', title: "Let's Go 4", artist: 'DJ GBR, Mc IG', plays: 1980, share: 20, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
        { id: 'sp-04', rank: '04', title: 'Coração Cigano', artist: 'Luan Santana', plays: 1390, share: 12, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
        { id: 'sp-05', rank: '05', title: 'Pipoco', artist: 'Ana Castela', plays: 940, share: 8, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'au-syd',
      name: 'Sydney, AU',
      country: 'Australia',
      countryCode: 'AU',
      lat: -33.8688,
      lng: 151.2093,
      coarseCoord: '33.9° S, 151.2° E',
      activeListeners: 154,
      topSongs: [
        { id: 'sy-01', rank: '01', title: 'The Less I Know The Better', artist: 'Tame Impala', plays: 2610, share: 33, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'sy-02', rank: '02', title: 'Riptide', artist: 'Vance Joy', plays: 2180, share: 25, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'sy-03', rank: '03', title: 'Dance Monkey', artist: 'Tones And I', plays: 1820, share: 20, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
        { id: 'sy-04', rank: '04', title: 'Never Tear Us Apart', artist: 'INXS', plays: 1240, share: 13, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
        { id: 'sy-05', rank: '05', title: 'Stay', artist: 'The Kid LAROI, Bieber', plays: 910, share: 9, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: 'ca-tor',
      name: 'Toronto, CA',
      country: 'Canada',
      countryCode: 'CA',
      lat: 43.6532,
      lng: -79.3832,
      coarseCoord: '43.7° N, 79.4° W',
      activeListeners: 195,
      topSongs: [
        { id: 'tr-01', rank: '01', title: 'Blinding Lights', artist: 'The Weeknd', plays: 3120, share: 34, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
        { id: 'tr-02', rank: '02', title: 'One Dance', artist: 'Drake ft. Wizkid', plays: 2590, share: 26, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
        { id: 'tr-03', rank: '03', title: 'Save Your Tears', artist: 'The Weeknd', plays: 2080, share: 19, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
        { id: 'tr-04', rank: '04', title: "God's Plan", artist: 'Drake', plays: 1470, share: 12, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
        { id: 'tr-05', rank: '05', title: 'Stargazing', artist: 'Myles Smith', plays: 980, share: 9, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' }
      ]
    }
  ],
  globalTop10: {
    daily: [
      { rank: '01', id: 'g-01', title: 'Not Like Us', artist: 'Kendrick Lamar', plays: 48920, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
      { rank: '02', id: 'g-02', title: 'Espresso', artist: 'Sabrina Carpenter', plays: 42150, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
      { rank: '03', id: 'g-03', title: 'Husn', artist: 'Anuv Jain', plays: 39800, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
      { rank: '04', id: 'g-04', title: 'Bling-Bang-Bang-Born', artist: 'Creepy Nuts', plays: 36720, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
      { rank: '05', id: 'g-05', title: 'Sprinter', artist: 'Dave & Central Cee', plays: 33410, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' },
      { rank: '06', id: 'g-06', title: 'Illuminati', artist: 'Sushin Shyam', plays: 31200, cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=120&auto=format&fit=crop&q=80' },
      { rank: '07', id: 'g-07', title: 'Wavy', artist: 'Karan Aujla', plays: 29840, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=120&auto=format&fit=crop&q=80' },
      { rank: '08', id: 'g-08', title: 'Blinding Lights', artist: 'The Weeknd', plays: 27500, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
      { rank: '09', id: 'g-09', title: 'Million Dollar Baby', artist: 'Tommy Richman', plays: 24610, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
      { rank: '10', id: 'g-10', title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', plays: 22180, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' }
    ],
    weekly: [
      { rank: '01', id: 'w-01', title: 'Espresso', artist: 'Sabrina Carpenter', plays: 312800, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
      { rank: '02', id: 'w-02', title: 'Not Like Us', artist: 'Kendrick Lamar', plays: 298400, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
      { rank: '03', id: 'w-03', title: 'Million Dollar Baby', artist: 'Tommy Richman', plays: 245900, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
      { rank: '04', id: 'w-04', title: 'Husn', artist: 'Anuv Jain', plays: 220100, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' },
      { rank: '05', id: 'w-05', title: 'Bling-Bang-Bang-Born', artist: 'Creepy Nuts', plays: 198200, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
      { rank: '06', id: 'w-06', title: 'Sprinter', artist: 'Dave & Central Cee', plays: 184500, cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=120&auto=format&fit=crop&q=80' },
      { rank: '07', id: 'w-07', title: 'Blinding Lights', artist: 'The Weeknd', plays: 172900, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=120&auto=format&fit=crop&q=80' },
      { rank: '08', id: 'w-08', title: 'Wavy', artist: 'Karan Aujla', plays: 161400, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
      { rank: '09', id: 'w-09', title: 'Illuminati', artist: 'Sushin Shyam', plays: 153000, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
      { rank: '10', id: 'w-10', title: 'Cruel Summer', artist: 'Taylor Swift', plays: 142100, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' }
    ],
    monthly: [
      { rank: '01', id: 'm-01', title: 'Blinding Lights', artist: 'The Weeknd', plays: 1240000, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
      { rank: '02', id: 'm-02', title: 'Not Like Us', artist: 'Kendrick Lamar', plays: 1150000, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' },
      { rank: '03', id: 'm-03', title: 'Espresso', artist: 'Sabrina Carpenter', plays: 980000, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
      { rank: '04', id: 'm-04', title: 'Cruel Summer', artist: 'Taylor Swift', plays: 870000, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80' },
      { rank: '05', id: 'm-05', title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', plays: 810000, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&auto=format&fit=crop&q=80' },
      { rank: '06', id: 'm-06', title: 'Husn', artist: 'Anuv Jain', plays: 740000, cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=120&auto=format&fit=crop&q=80' },
      { rank: '07', id: 'm-07', title: 'Sprinter', artist: 'Dave & Central Cee', plays: 690000, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=120&auto=format&fit=crop&q=80' },
      { rank: '08', id: 'm-08', title: 'One Dance', artist: 'Drake ft. Wizkid', plays: 645000, cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&auto=format&fit=crop&q=80' },
      { rank: '09', id: 'm-09', title: 'Bling-Bang-Bang-Born', artist: 'Creepy Nuts', plays: 590000, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&auto=format&fit=crop&q=80' },
      { rank: '10', id: 'm-10', title: 'Midnight City', artist: 'M83', plays: 540000, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80' }
    ]
  }
};
