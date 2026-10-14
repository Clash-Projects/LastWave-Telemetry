/**
 * LastWave Live - Global World Cities Database (Clean Production Slate)
 * Geospatial dataset of 538+ global cities across all continents.
 * Realtime listener counts and songs are populated dynamically from live telemetry.
 */

const _rootScope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_rootScope.WORLD_CITIES = [
  {
    "id": "in-bom",
    "name": "Mumbai",
    "country": "India",
    "lat": 19.076,
    "lng": 72.8777,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-del",
    "name": "Delhi NCR",
    "country": "India",
    "lat": 28.6139,
    "lng": 77.209,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-blr",
    "name": "Bengaluru",
    "country": "India",
    "lat": 12.9716,
    "lng": 77.5946,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-hyd",
    "name": "Hyderabad",
    "country": "India",
    "lat": 17.385,
    "lng": 78.4867,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-maa",
    "name": "Chennai",
    "country": "India",
    "lat": 13.0827,
    "lng": 80.2707,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ccu",
    "name": "Kolkata",
    "country": "India",
    "lat": 22.5726,
    "lng": 88.3639,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-pnq",
    "name": "Pune",
    "country": "India",
    "lat": 18.5204,
    "lng": 73.8567,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-amd",
    "name": "Ahmedabad",
    "country": "India",
    "lat": 23.0225,
    "lng": 72.5714,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-jai",
    "name": "Jaipur",
    "country": "India",
    "lat": 26.9124,
    "lng": 75.7873,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-lko",
    "name": "Lucknow",
    "country": "India",
    "lat": 26.8467,
    "lng": 80.9462,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ixc",
    "name": "Chandigarh",
    "country": "India",
    "lat": 30.7333,
    "lng": 76.7794,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-cok",
    "name": "Kochi",
    "country": "India",
    "lat": 9.9312,
    "lng": 76.2673,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-idr",
    "name": "Indore",
    "country": "India",
    "lat": 22.7196,
    "lng": 75.8577,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bho",
    "name": "Bhopal",
    "country": "India",
    "lat": 23.2599,
    "lng": 77.4126,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-nag",
    "name": "Nagpur",
    "country": "India",
    "lat": 21.1458,
    "lng": 79.0882,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-pat",
    "name": "Patna",
    "country": "India",
    "lat": 25.5941,
    "lng": 85.1376,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-cjb",
    "name": "Coimbatore",
    "country": "India",
    "lat": 11.0168,
    "lng": 76.9558,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-vtg",
    "name": "Visakhapatnam",
    "country": "India",
    "lat": 17.6868,
    "lng": 83.2185,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-gau",
    "name": "Guwahati",
    "country": "India",
    "lat": 26.1445,
    "lng": 91.7362,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-vns",
    "name": "Varanasi",
    "country": "India",
    "lat": 25.3176,
    "lng": 82.9739,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-atq",
    "name": "Amritsar",
    "country": "India",
    "lat": 31.634,
    "lng": 74.8723,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bbi",
    "name": "Bhubaneswar",
    "country": "India",
    "lat": 20.2961,
    "lng": 85.8245,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-agr",
    "name": "Agra",
    "country": "India",
    "lat": 27.1767,
    "lng": 78.0081,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-stv",
    "name": "Surat",
    "country": "India",
    "lat": 21.1702,
    "lng": 72.8311,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bdq",
    "name": "Vadodara",
    "country": "India",
    "lat": 22.3072,
    "lng": 73.1812,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-nsk",
    "name": "Nashik",
    "country": "India",
    "lat": 19.9975,
    "lng": 73.7898,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-myq",
    "name": "Mysore",
    "country": "India",
    "lat": 12.2958,
    "lng": 76.6394,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-trv",
    "name": "Thiruvananthapuram",
    "country": "India",
    "lat": 8.5241,
    "lng": 76.9366,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-sxr",
    "name": "Srinagar",
    "country": "India",
    "lat": 34.0837,
    "lng": 74.7973,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-goa",
    "name": "Panaji (Goa)",
    "country": "India",
    "lat": 15.4909,
    "lng": 73.8278,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ded",
    "name": "Dehradun",
    "country": "India",
    "lat": 30.3165,
    "lng": 78.0322,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-rpr",
    "name": "Raipur",
    "country": "India",
    "lat": 21.2514,
    "lng": 81.6296,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ixr",
    "name": "Ranchi",
    "country": "India",
    "lat": 23.3441,
    "lng": 85.3096,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-slv",
    "name": "Shimla",
    "country": "India",
    "lat": 31.1048,
    "lng": 77.1734,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-vga",
    "name": "Vijayawada",
    "country": "India",
    "lat": 16.5062,
    "lng": 80.648,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mdu",
    "name": "Madurai",
    "country": "India",
    "lat": 9.9252,
    "lng": 78.1198,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pk-khi",
    "name": "Karachi",
    "country": "Pakistan",
    "lat": 24.8607,
    "lng": 67.0011,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pk-lhe",
    "name": "Lahore",
    "country": "Pakistan",
    "lat": 31.5204,
    "lng": 74.3587,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pk-isb",
    "name": "Islamabad",
    "country": "Pakistan",
    "lat": 33.6844,
    "lng": 73.0479,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "bd-dac",
    "name": "Dhaka",
    "country": "Bangladesh",
    "lat": 23.8103,
    "lng": 90.4125,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "lk-cmb",
    "name": "Colombo",
    "country": "Sri Lanka",
    "lat": 6.9271,
    "lng": 79.8612,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "np-ktm",
    "name": "Kathmandu",
    "country": "Nepal",
    "lat": 27.7172,
    "lng": 85.324,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-nyc",
    "name": "New York",
    "country": "United States",
    "lat": 40.7128,
    "lng": -74.006,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-lax",
    "name": "Los Angeles",
    "country": "United States",
    "lat": 34.0522,
    "lng": -118.2437,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-sfo",
    "name": "San Francisco",
    "country": "United States",
    "lat": 37.7749,
    "lng": -122.4194,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-sea",
    "name": "Seattle",
    "country": "United States",
    "lat": 47.6062,
    "lng": -122.3321,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-chi",
    "name": "Chicago",
    "country": "United States",
    "lat": 41.8781,
    "lng": -87.6298,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-mia",
    "name": "Miami",
    "country": "United States",
    "lat": 25.7617,
    "lng": -80.1918,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-aus",
    "name": "Austin",
    "country": "United States",
    "lat": 30.2672,
    "lng": -97.7431,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-dfw",
    "name": "Dallas",
    "country": "United States",
    "lat": 32.7767,
    "lng": -96.797,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-iah",
    "name": "Houston",
    "country": "United States",
    "lat": 29.7604,
    "lng": -95.3698,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-atl",
    "name": "Atlanta",
    "country": "United States",
    "lat": 33.749,
    "lng": -84.388,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-bos",
    "name": "Boston",
    "country": "United States",
    "lat": 42.3601,
    "lng": -71.0589,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-den",
    "name": "Denver",
    "country": "United States",
    "lat": 39.7392,
    "lng": -104.9903,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-phx",
    "name": "Phoenix",
    "country": "United States",
    "lat": 33.4484,
    "lng": -112.074,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-phl",
    "name": "Philadelphia",
    "country": "United States",
    "lat": 39.9526,
    "lng": -75.1652,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-las",
    "name": "Las Vegas",
    "country": "United States",
    "lat": 36.1699,
    "lng": -115.1398,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-dtw",
    "name": "Detroit",
    "country": "United States",
    "lat": 42.3314,
    "lng": -83.0458,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-bna",
    "name": "Nashville",
    "country": "United States",
    "lat": 36.1627,
    "lng": -86.7816,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-pdx",
    "name": "Portland",
    "country": "United States",
    "lat": 45.5152,
    "lng": -122.6784,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-msp",
    "name": "Minneapolis",
    "country": "United States",
    "lat": 44.9778,
    "lng": -93.265,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-was",
    "name": "Washington DC",
    "country": "United States",
    "lat": 38.9072,
    "lng": -77.0369,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-slc",
    "name": "Salt Lake City",
    "country": "United States",
    "lat": 40.7608,
    "lng": -111.891,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-msy",
    "name": "New Orleans",
    "country": "United States",
    "lat": 29.9511,
    "lng": -90.0715,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-hnl",
    "name": "Honolulu",
    "country": "United States",
    "lat": 21.3069,
    "lng": -157.8583,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-anc",
    "name": "Anchorage",
    "country": "United States",
    "lat": 61.2181,
    "lng": -149.9003,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-yyz",
    "name": "Toronto",
    "country": "Canada",
    "lat": 43.6532,
    "lng": -79.3832,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-yvr",
    "name": "Vancouver",
    "country": "Canada",
    "lat": 49.2827,
    "lng": -123.1207,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-yul",
    "name": "Montreal",
    "country": "Canada",
    "lat": 45.5017,
    "lng": -73.5673,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-yyc",
    "name": "Calgary",
    "country": "Canada",
    "lat": 51.0447,
    "lng": -114.0719,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-yow",
    "name": "Ottawa",
    "country": "Canada",
    "lat": 45.4215,
    "lng": -75.6972,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mx-mex",
    "name": "Mexico City",
    "country": "Mexico",
    "lat": 19.4326,
    "lng": -99.1332,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mx-gdl",
    "name": "Guadalajara",
    "country": "Mexico",
    "lat": 20.6597,
    "lng": -103.3496,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mx-mty",
    "name": "Monterrey",
    "country": "Mexico",
    "lat": 25.6866,
    "lng": -100.3161,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mx-cun",
    "name": "Cancún",
    "country": "Mexico",
    "lat": 21.1619,
    "lng": -86.8515,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-lon",
    "name": "London",
    "country": "United Kingdom",
    "lat": 51.5074,
    "lng": -0.1278,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-man",
    "name": "Manchester",
    "country": "United Kingdom",
    "lat": 53.4808,
    "lng": -2.2426,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-edi",
    "name": "Edinburgh",
    "country": "United Kingdom",
    "lat": 55.9533,
    "lng": -3.1883,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-par",
    "name": "Paris",
    "country": "France",
    "lat": 48.8566,
    "lng": 2.3522,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-lys",
    "name": "Lyon",
    "country": "France",
    "lat": 45.764,
    "lng": 4.8357,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-mrs",
    "name": "Marseille",
    "country": "France",
    "lat": 43.2965,
    "lng": 5.3698,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-ber",
    "name": "Berlin",
    "country": "Germany",
    "lat": 52.52,
    "lng": 13.405,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-muc",
    "name": "Munich",
    "country": "Germany",
    "lat": 48.1351,
    "lng": 11.582,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-ham",
    "name": "Hamburg",
    "country": "Germany",
    "lat": 53.5511,
    "lng": 9.9937,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "nl-ams",
    "name": "Amsterdam",
    "country": "Netherlands",
    "lat": 52.3676,
    "lng": 4.9041,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "es-mad",
    "name": "Madrid",
    "country": "Spain",
    "lat": 40.4168,
    "lng": -3.7038,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "es-bcn",
    "name": "Barcelona",
    "country": "Spain",
    "lat": 41.3879,
    "lng": 2.1699,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-rom",
    "name": "Rome",
    "country": "Italy",
    "lat": 41.9028,
    "lng": 12.4964,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-mil",
    "name": "Milan",
    "country": "Italy",
    "lat": 45.4642,
    "lng": 9.19,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "se-sto",
    "name": "Stockholm",
    "country": "Sweden",
    "lat": 59.3293,
    "lng": 18.0686,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "no-osl",
    "name": "Oslo",
    "country": "Norway",
    "lat": 59.9139,
    "lng": 10.7522,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "dk-cph",
    "name": "Copenhagen",
    "country": "Denmark",
    "lat": 55.6761,
    "lng": 12.5683,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fi-hel",
    "name": "Helsinki",
    "country": "Finland",
    "lat": 60.1699,
    "lng": 24.9384,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "at-vie",
    "name": "Vienna",
    "country": "Austria",
    "lat": 48.2082,
    "lng": 16.3738,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ch-zrh",
    "name": "Zurich",
    "country": "Switzerland",
    "lat": 47.3769,
    "lng": 8.5417,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pl-waw",
    "name": "Warsaw",
    "country": "Poland",
    "lat": 52.2297,
    "lng": 21.0122,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cz-prg",
    "name": "Prague",
    "country": "Czech Republic",
    "lat": 50.0755,
    "lng": 14.4378,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "hu-bud",
    "name": "Budapest",
    "country": "Hungary",
    "lat": 47.4979,
    "lng": 19.0402,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "gr-ath",
    "name": "Athens",
    "country": "Greece",
    "lat": 37.9838,
    "lng": 23.7275,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pt-lis",
    "name": "Lisbon",
    "country": "Portugal",
    "lat": 38.7223,
    "lng": -9.1393,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ie-dub",
    "name": "Dublin",
    "country": "Ireland",
    "lat": 53.3498,
    "lng": -6.2603,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ro-otp",
    "name": "Bucharest",
    "country": "Romania",
    "lat": 44.4268,
    "lng": 26.1025,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ua-iev",
    "name": "Kyiv",
    "country": "Ukraine",
    "lat": 50.4501,
    "lng": 30.5234,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-tyo",
    "name": "Tokyo",
    "country": "Japan",
    "lat": 35.6762,
    "lng": 139.6503,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-osa",
    "name": "Osaka",
    "country": "Japan",
    "lat": 34.6937,
    "lng": 135.5023,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-uky",
    "name": "Kyoto",
    "country": "Japan",
    "lat": 35.0116,
    "lng": 135.7681,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "kr-sel",
    "name": "Seoul",
    "country": "South Korea",
    "lat": 37.5665,
    "lng": 126.978,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "kr-pus",
    "name": "Busan",
    "country": "South Korea",
    "lat": 35.1796,
    "lng": 129.0756,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "sg-sin",
    "name": "Singapore",
    "country": "Singapore",
    "lat": 1.3521,
    "lng": 103.8198,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "th-bkk",
    "name": "Bangkok",
    "country": "Thailand",
    "lat": 13.7563,
    "lng": 100.5018,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "id-jkt",
    "name": "Jakarta",
    "country": "Indonesia",
    "lat": -6.2088,
    "lng": 106.8456,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "id-sub",
    "name": "Surabaya",
    "country": "Indonesia",
    "lat": -7.2575,
    "lng": 112.7521,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "id-dps",
    "name": "Bali",
    "country": "Indonesia",
    "lat": -8.4095,
    "lng": 115.1889,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "my-kul",
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "lat": 3.139,
    "lng": 101.6869,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ph-mnl",
    "name": "Manila",
    "country": "Philippines",
    "lat": 14.5995,
    "lng": 120.9842,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "vn-sgn",
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "lat": 10.8231,
    "lng": 106.6297,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "vn-han",
    "name": "Hanoi",
    "country": "Vietnam",
    "lat": 21.0285,
    "lng": 105.8542,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "hk-hkg",
    "name": "Hong Kong",
    "country": "Hong Kong",
    "lat": 22.3193,
    "lng": 114.1694,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "tw-tpe",
    "name": "Taipei",
    "country": "Taiwan",
    "lat": 25.033,
    "lng": 121.5654,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-sha",
    "name": "Shanghai",
    "country": "China",
    "lat": 31.2304,
    "lng": 121.4737,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-pek",
    "name": "Beijing",
    "country": "China",
    "lat": 39.9042,
    "lng": 116.4074,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-ctu",
    "name": "Chengdu",
    "country": "China",
    "lat": 30.5728,
    "lng": 104.0668,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ae-dxb",
    "name": "Dubai",
    "country": "United Arab Emirates",
    "lat": 25.2048,
    "lng": 55.2708,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ae-auh",
    "name": "Abu Dhabi",
    "country": "United Arab Emirates",
    "lat": 24.4539,
    "lng": 54.3773,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "sa-ruh",
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "lat": 24.7136,
    "lng": 46.6753,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "sa-jed",
    "name": "Jeddah",
    "country": "Saudi Arabia",
    "lat": 21.5433,
    "lng": 39.1728,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "qa-doh",
    "name": "Doha",
    "country": "Qatar",
    "lat": 25.2854,
    "lng": 51.531,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "tr-ist",
    "name": "Istanbul",
    "country": "Turkey",
    "lat": 41.0082,
    "lng": 28.9784,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "eg-cai",
    "name": "Cairo",
    "country": "Egypt",
    "lat": 30.0444,
    "lng": 31.2357,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ma-cas",
    "name": "Casablanca",
    "country": "Morocco",
    "lat": 33.5731,
    "lng": -7.5898,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-sao",
    "name": "São Paulo",
    "country": "Brazil",
    "lat": -23.5505,
    "lng": -46.6333,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-rio",
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "lat": -22.9068,
    "lng": -43.1729,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ar-bue",
    "name": "Buenos Aires",
    "country": "Argentina",
    "lat": -34.6037,
    "lng": -58.3816,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "co-bog",
    "name": "Bogotá",
    "country": "Colombia",
    "lat": 4.711,
    "lng": -74.0721,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "co-mde",
    "name": "Medellín",
    "country": "Colombia",
    "lat": 6.2442,
    "lng": -75.5812,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cl-scl",
    "name": "Santiago",
    "country": "Chile",
    "lat": -33.4489,
    "lng": -70.6693,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pe-lim",
    "name": "Lima",
    "country": "Peru",
    "lat": -12.0464,
    "lng": -77.0428,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ng-los",
    "name": "Lagos",
    "country": "Nigeria",
    "lat": 6.5244,
    "lng": 3.3792,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "za-jnb",
    "name": "Johannesburg",
    "country": "South Africa",
    "lat": -26.2041,
    "lng": 28.0473,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "za-cpt",
    "name": "Cape Town",
    "country": "South Africa",
    "lat": -33.9249,
    "lng": 18.4241,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ke-nbo",
    "name": "Nairobi",
    "country": "Kenya",
    "lat": -1.2921,
    "lng": 36.8219,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "gh-acc",
    "name": "Accra",
    "country": "Ghana",
    "lat": 5.6037,
    "lng": -0.187,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "au-syd",
    "name": "Sydney",
    "country": "Australia",
    "lat": -33.8688,
    "lng": 151.2093,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "au-mel",
    "name": "Melbourne",
    "country": "Australia",
    "lat": -37.8136,
    "lng": 144.9631,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "au-bne",
    "name": "Brisbane",
    "country": "Australia",
    "lat": -27.4698,
    "lng": 153.0251,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "au-per",
    "name": "Perth",
    "country": "Australia",
    "lat": -31.9505,
    "lng": 115.8605,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "au-adl",
    "name": "Adelaide",
    "country": "Australia",
    "lat": -34.9285,
    "lng": 138.6007,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "au-cbr",
    "name": "Canberra",
    "country": "Australia",
    "lat": -35.2809,
    "lng": 149.13,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "au-ool",
    "name": "Gold Coast",
    "country": "Australia",
    "lat": -28.0167,
    "lng": 153.4,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "nz-wlg",
    "name": "Wellington",
    "country": "New Zealand",
    "lat": -41.2865,
    "lng": 174.7762,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "nz-chc",
    "name": "Christchurch",
    "country": "New Zealand",
    "lat": -43.5321,
    "lng": 172.6362,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fj-suv",
    "name": "Suva",
    "country": "Fiji",
    "lat": -18.1416,
    "lng": 178.4419,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-szx",
    "name": "Shenzhen",
    "country": "China",
    "lat": 22.5431,
    "lng": 114.0579,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-can",
    "name": "Guangzhou",
    "country": "China",
    "lat": 23.1291,
    "lng": 113.2644,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-hgh",
    "name": "Hangzhou",
    "country": "China",
    "lat": 30.2741,
    "lng": 120.1551,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-wuh",
    "name": "Wuhan",
    "country": "China",
    "lat": 30.5928,
    "lng": 114.3055,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-xiy",
    "name": "Xi'an",
    "country": "China",
    "lat": 34.3416,
    "lng": 108.9398,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-ckg",
    "name": "Chongqing",
    "country": "China",
    "lat": 29.563,
    "lng": 106.5516,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-yok",
    "name": "Yokohama",
    "country": "Japan",
    "lat": 35.4437,
    "lng": 139.638,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-ngo",
    "name": "Nagoya",
    "country": "Japan",
    "lat": 35.1815,
    "lng": 136.9066,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-cts",
    "name": "Sapporo",
    "country": "Japan",
    "lat": 43.0618,
    "lng": 141.3545,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-fuk",
    "name": "Fukuoka",
    "country": "Japan",
    "lat": 33.5904,
    "lng": 130.4017,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "kr-icn",
    "name": "Incheon",
    "country": "South Korea",
    "lat": 37.4563,
    "lng": 126.7052,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "kr-tae",
    "name": "Daegu",
    "country": "South Korea",
    "lat": 35.8714,
    "lng": 128.6014,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "th-cnx",
    "name": "Chiang Mai",
    "country": "Thailand",
    "lat": 18.7883,
    "lng": 98.9853,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "my-pen",
    "name": "Penang",
    "country": "Malaysia",
    "lat": 5.4141,
    "lng": 100.3288,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ph-ceb",
    "name": "Cebu City",
    "country": "Philippines",
    "lat": 10.3157,
    "lng": 123.8854,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "vn-dad",
    "name": "Da Nang",
    "country": "Vietnam",
    "lat": 16.0544,
    "lng": 108.2022,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-bhx",
    "name": "Birmingham",
    "country": "United Kingdom",
    "lat": 52.4862,
    "lng": -1.8904,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-gla",
    "name": "Glasgow",
    "country": "United Kingdom",
    "lat": 55.8642,
    "lng": -4.2518,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-lpl",
    "name": "Liverpool",
    "country": "United Kingdom",
    "lat": 53.4084,
    "lng": -2.9916,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-brs",
    "name": "Bristol",
    "country": "United Kingdom",
    "lat": 51.4545,
    "lng": -2.5879,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-fra",
    "name": "Frankfurt",
    "country": "Germany",
    "lat": 50.1109,
    "lng": 8.6821,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-cgn",
    "name": "Cologne",
    "country": "Germany",
    "lat": 50.9375,
    "lng": 6.9603,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-str",
    "name": "Stuttgart",
    "country": "Germany",
    "lat": 48.7758,
    "lng": 9.1829,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-tls",
    "name": "Toulouse",
    "country": "France",
    "lat": 43.6047,
    "lng": 1.4442,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-nce",
    "name": "Nice",
    "country": "France",
    "lat": 43.7102,
    "lng": 7.262,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-nap",
    "name": "Naples",
    "country": "Italy",
    "lat": 40.8518,
    "lng": 14.2681,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-flr",
    "name": "Florence",
    "country": "Italy",
    "lat": 43.7696,
    "lng": 11.2558,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "es-vlc",
    "name": "Valencia",
    "country": "Spain",
    "lat": 39.4699,
    "lng": -0.3763,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "es-svq",
    "name": "Seville",
    "country": "Spain",
    "lat": 37.3891,
    "lng": -5.9845,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "be-bru",
    "name": "Brussels",
    "country": "Belgium",
    "lat": 50.8503,
    "lng": 4.3517,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ch-gva",
    "name": "Geneva",
    "country": "Switzerland",
    "lat": 46.2044,
    "lng": 6.1432,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pt-opo",
    "name": "Porto",
    "country": "Portugal",
    "lat": 41.1579,
    "lng": -8.6291,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pl-krk",
    "name": "Krakow",
    "country": "Poland",
    "lat": 50.0647,
    "lng": 19.945,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "kw-kwi",
    "name": "Kuwait City",
    "country": "Kuwait",
    "lat": 29.3759,
    "lng": 47.9774,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "bh-bah",
    "name": "Manama",
    "country": "Bahrain",
    "lat": 26.2285,
    "lng": 50.586,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "om-mct",
    "name": "Muscat",
    "country": "Oman",
    "lat": 23.588,
    "lng": 58.3829,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "lb-bey",
    "name": "Beirut",
    "country": "Lebanon",
    "lat": 33.8938,
    "lng": 35.5018,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jo-amm",
    "name": "Amman",
    "country": "Jordan",
    "lat": 31.9454,
    "lng": 35.9284,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "az-bak",
    "name": "Baku",
    "country": "Azerbaijan",
    "lat": 40.4093,
    "lng": 49.8671,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-sjc",
    "name": "San Jose",
    "country": "United States",
    "lat": 37.3382,
    "lng": -121.8863,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-san",
    "name": "San Diego",
    "country": "United States",
    "lat": 32.7157,
    "lng": -117.1611,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-jax",
    "name": "Jacksonville",
    "country": "United States",
    "lat": 30.3322,
    "lng": -81.6557,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-clt",
    "name": "Charlotte",
    "country": "United States",
    "lat": 35.2271,
    "lng": -80.8431,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-ind",
    "name": "Indianapolis",
    "country": "United States",
    "lat": 39.7684,
    "lng": -86.1581,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-cmh",
    "name": "Columbus",
    "country": "United States",
    "lat": 39.9612,
    "lng": -82.9988,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-mci",
    "name": "Kansas City",
    "country": "United States",
    "lat": 39.0997,
    "lng": -94.5786,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-cle",
    "name": "Cleveland",
    "country": "United States",
    "lat": 41.4993,
    "lng": -81.6944,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-pit",
    "name": "Pittsburgh",
    "country": "United States",
    "lat": 40.4406,
    "lng": -79.9959,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-tpa",
    "name": "Tampa",
    "country": "United States",
    "lat": 27.9506,
    "lng": -82.4572,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-mco",
    "name": "Orlando",
    "country": "United States",
    "lat": 28.5383,
    "lng": -81.3792,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-stl",
    "name": "St. Louis",
    "country": "United States",
    "lat": 38.627,
    "lng": -90.1994,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-bwi",
    "name": "Baltimore",
    "country": "United States",
    "lat": 39.2904,
    "lng": -76.6122,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-yeg",
    "name": "Edmonton",
    "country": "Canada",
    "lat": 53.5461,
    "lng": -113.4938,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-ywg",
    "name": "Winnipeg",
    "country": "Canada",
    "lat": 49.8951,
    "lng": -97.1384,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-yqb",
    "name": "Quebec City",
    "country": "Canada",
    "lat": 46.8139,
    "lng": -71.208,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mx-pbc",
    "name": "Puebla",
    "country": "Mexico",
    "lat": 19.0414,
    "lng": -98.2063,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mx-tij",
    "name": "Tijuana",
    "country": "Mexico",
    "lat": 32.5149,
    "lng": -117.0382,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-bsb",
    "name": "Brasília",
    "country": "Brazil",
    "lat": -15.8267,
    "lng": -47.9218,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-ssa",
    "name": "Salvador",
    "country": "Brazil",
    "lat": -12.9777,
    "lng": -38.5016,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-cnf",
    "name": "Belo Horizonte",
    "country": "Brazil",
    "lat": -19.9167,
    "lng": -43.9345,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-cwb",
    "name": "Curitiba",
    "country": "Brazil",
    "lat": -25.4284,
    "lng": -49.2733,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-poa",
    "name": "Porto Alegre",
    "country": "Brazil",
    "lat": -30.0346,
    "lng": -51.2177,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-rec",
    "name": "Recife",
    "country": "Brazil",
    "lat": -8.0476,
    "lng": -34.877,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-mao",
    "name": "Manaus",
    "country": "Brazil",
    "lat": -3.119,
    "lng": -60.0217,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ar-cor",
    "name": "Córdoba",
    "country": "Argentina",
    "lat": -31.4201,
    "lng": -64.1888,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ar-ros",
    "name": "Rosario",
    "country": "Argentina",
    "lat": -32.9468,
    "lng": -60.6393,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "co-clo",
    "name": "Cali",
    "country": "Colombia",
    "lat": 3.4516,
    "lng": -76.532,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "co-baq",
    "name": "Barranquilla",
    "country": "Colombia",
    "lat": 10.9685,
    "lng": -74.7813,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pe-cuz",
    "name": "Cusco",
    "country": "Peru",
    "lat": -13.5319,
    "lng": -71.9675,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ec-uio",
    "name": "Quito",
    "country": "Ecuador",
    "lat": -0.1807,
    "lng": -78.4678,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ec-gye",
    "name": "Guayaquil",
    "country": "Ecuador",
    "lat": -2.1894,
    "lng": -79.8891,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ve-ccs",
    "name": "Caracas",
    "country": "Venezuela",
    "lat": 10.4806,
    "lng": -66.9036,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uy-mvd",
    "name": "Montevideo",
    "country": "Uruguay",
    "lat": -34.9011,
    "lng": -56.1645,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "py-asu",
    "name": "Asunción",
    "country": "Paraguay",
    "lat": -25.2637,
    "lng": -57.5759,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "bo-lpz",
    "name": "La Paz",
    "country": "Bolivia",
    "lat": -16.4897,
    "lng": -68.1193,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pa-pty",
    "name": "Panama City",
    "country": "Panama",
    "lat": 8.9824,
    "lng": -79.5199,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cr-sjo",
    "name": "San José",
    "country": "Costa Rica",
    "lat": 9.9281,
    "lng": -84.0907,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pr-sju",
    "name": "San Juan",
    "country": "Puerto Rico",
    "lat": 18.4655,
    "lng": -66.1057,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "eg-aly",
    "name": "Alexandria",
    "country": "Egypt",
    "lat": 31.2001,
    "lng": 29.9187,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "za-dur",
    "name": "Durban",
    "country": "South Africa",
    "lat": -29.8587,
    "lng": 31.0218,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "za-pry",
    "name": "Pretoria",
    "country": "South Africa",
    "lat": -25.7479,
    "lng": 28.2293,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ng-abv",
    "name": "Abuja",
    "country": "Nigeria",
    "lat": 9.0765,
    "lng": 7.3986,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ke-mba",
    "name": "Mombasa",
    "country": "Kenya",
    "lat": -4.0435,
    "lng": 39.6682,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "et-add",
    "name": "Addis Ababa",
    "country": "Ethiopia",
    "lat": 9.032,
    "lng": 38.748,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ma-rak",
    "name": "Marrakech",
    "country": "Morocco",
    "lat": 31.6295,
    "lng": -7.9811,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "tn-tun",
    "name": "Tunis",
    "country": "Tunisia",
    "lat": 36.8065,
    "lng": 10.1815,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "dz-alg",
    "name": "Algiers",
    "country": "Algeria",
    "lat": 36.7538,
    "lng": 3.0588,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "sn-dkr",
    "name": "Dakar",
    "country": "Senegal",
    "lat": 14.7167,
    "lng": -17.4677,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ci-abj",
    "name": "Abidjan",
    "country": "Ivory Coast",
    "lat": 5.36,
    "lng": -4.0083,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "tz-dar",
    "name": "Dar es Salaam",
    "country": "Tanzania",
    "lat": -6.7924,
    "lng": 39.2083,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ug-ebb",
    "name": "Kampala",
    "country": "Uganda",
    "lat": 0.3476,
    "lng": 32.5825,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "rw-kgl",
    "name": "Kigali",
    "country": "Rwanda",
    "lat": -1.9706,
    "lng": 30.1044,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ao-lad",
    "name": "Luanda",
    "country": "Angola",
    "lat": -8.839,
    "lng": 13.2894,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "zw-hre",
    "name": "Harare",
    "country": "Zimbabwe",
    "lat": -17.8252,
    "lng": 31.0335,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-mow",
    "name": "Moscow",
    "country": "Russia",
    "lat": 55.7558,
    "lng": 37.6173,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-led",
    "name": "Saint Petersburg",
    "country": "Russia",
    "lat": 59.9343,
    "lng": 30.3351,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-ovb",
    "name": "Novosibirsk",
    "country": "Russia",
    "lat": 55.0084,
    "lng": 82.9357,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-svx",
    "name": "Yekaterinburg",
    "country": "Russia",
    "lat": 56.8389,
    "lng": 60.6057,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-kzn",
    "name": "Kazan",
    "country": "Russia",
    "lat": 55.7887,
    "lng": 49.1221,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-goj",
    "name": "Nizhny Novgorod",
    "country": "Russia",
    "lat": 56.3269,
    "lng": 44.0059,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-kuf",
    "name": "Samara",
    "country": "Russia",
    "lat": 53.1959,
    "lng": 50.1002,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-oms",
    "name": "Omsk",
    "country": "Russia",
    "lat": 54.9885,
    "lng": 73.3242,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-cek",
    "name": "Chelyabinsk",
    "country": "Russia",
    "lat": 55.1644,
    "lng": 61.4368,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-rov",
    "name": "Rostov-on-Don",
    "country": "Russia",
    "lat": 47.2357,
    "lng": 39.7015,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-ufa",
    "name": "Ufa",
    "country": "Russia",
    "lat": 54.7388,
    "lng": 55.9721,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-kja",
    "name": "Krasnoyarsk",
    "country": "Russia",
    "lat": 56.0153,
    "lng": 92.8932,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-vvo",
    "name": "Vladivostok",
    "country": "Russia",
    "lat": 43.1155,
    "lng": 131.8855,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-ikt",
    "name": "Irkutsk",
    "country": "Russia",
    "lat": 52.287,
    "lng": 104.305,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-khv",
    "name": "Khabarovsk",
    "country": "Russia",
    "lat": 48.4827,
    "lng": 135.0838,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-kgd",
    "name": "Kaliningrad",
    "country": "Russia",
    "lat": 54.7104,
    "lng": 20.4522,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-aer",
    "name": "Sochi",
    "country": "Russia",
    "lat": 43.6028,
    "lng": 39.7342,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-vog",
    "name": "Volgograd",
    "country": "Russia",
    "lat": 48.708,
    "lng": 44.5133,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-vrn",
    "name": "Voronezh",
    "country": "Russia",
    "lat": 51.672,
    "lng": 39.1843,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-pee",
    "name": "Perm",
    "country": "Russia",
    "lat": 58.0105,
    "lng": 56.2502,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-yks",
    "name": "Yakutsk",
    "country": "Russia",
    "lat": 62.0355,
    "lng": 129.6755,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ru-mmk",
    "name": "Murmansk",
    "country": "Russia",
    "lat": 68.9585,
    "lng": 33.0827,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "kz-ala",
    "name": "Almaty",
    "country": "Kazakhstan",
    "lat": 43.222,
    "lng": 76.8512,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "kz-ast",
    "name": "Astana",
    "country": "Kazakhstan",
    "lat": 51.1694,
    "lng": 71.4491,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uz-tas",
    "name": "Tashkent",
    "country": "Uzbekistan",
    "lat": 41.2995,
    "lng": 69.2401,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uz-skd",
    "name": "Samarkand",
    "country": "Uzbekistan",
    "lat": 39.627,
    "lng": 66.975,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "kg-fru",
    "name": "Bishkek",
    "country": "Kyrgyzstan",
    "lat": 42.8746,
    "lng": 74.5698,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ge-tbs",
    "name": "Tbilisi",
    "country": "Georgia",
    "lat": 41.7151,
    "lng": 44.8271,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "am-evn",
    "name": "Yerevan",
    "country": "Armenia",
    "lat": 40.1792,
    "lng": 44.4991,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "by-msq",
    "name": "Minsk",
    "country": "Belarus",
    "lat": 53.9045,
    "lng": 27.5615,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "rs-beg",
    "name": "Belgrade",
    "country": "Serbia",
    "lat": 44.7866,
    "lng": 20.4489,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "hr-zag",
    "name": "Zagreb",
    "country": "Croatia",
    "lat": 45.815,
    "lng": 15.9819,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "bg-sof",
    "name": "Sofia",
    "country": "Bulgaria",
    "lat": 42.6977,
    "lng": 23.3219,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "sk-bts",
    "name": "Bratislava",
    "country": "Slovakia",
    "lat": 48.1486,
    "lng": 17.1077,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "lt-vno",
    "name": "Vilnius",
    "country": "Lithuania",
    "lat": 54.6872,
    "lng": 25.2797,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "lv-rix",
    "name": "Riga",
    "country": "Latvia",
    "lat": 56.9496,
    "lng": 24.1052,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ee-tll",
    "name": "Tallinn",
    "country": "Estonia",
    "lat": 59.437,
    "lng": 24.7536,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "is-kef",
    "name": "Reykjavik",
    "country": "Iceland",
    "lat": 64.1466,
    "lng": -21.9426,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "il-tlv",
    "name": "Tel Aviv",
    "country": "Israel",
    "lat": 32.0853,
    "lng": 34.7818,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "il-jrs",
    "name": "Jerusalem",
    "country": "Israel",
    "lat": 31.7683,
    "lng": 35.2137,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ir-thr",
    "name": "Tehran",
    "country": "Iran",
    "lat": 35.6892,
    "lng": 51.389,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "iq-bgw",
    "name": "Baghdad",
    "country": "Iraq",
    "lat": 33.3152,
    "lng": 44.3661,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mn-uln",
    "name": "Ulaanbaatar",
    "country": "Mongolia",
    "lat": 47.8864,
    "lng": 106.9057,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mm-rgn",
    "name": "Yangon",
    "country": "Myanmar",
    "lat": 16.8661,
    "lng": 96.1951,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "kh-pnh",
    "name": "Phnom Penh",
    "country": "Cambodia",
    "lat": 11.5564,
    "lng": 104.9282,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "do-sdq",
    "name": "Santo Domingo",
    "country": "Dominican Republic",
    "lat": 18.4861,
    "lng": -69.9312,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "gt-gua",
    "name": "Guatemala City",
    "country": "Guatemala",
    "lat": 14.6349,
    "lng": -90.5069,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cu-hav",
    "name": "Havana",
    "country": "Cuba",
    "lat": 23.1136,
    "lng": -82.3666,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jm-kin",
    "name": "Kingston",
    "country": "Jamaica",
    "lat": 17.9712,
    "lng": -76.7936,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cd-fih",
    "name": "Kinshasa",
    "country": "DR Congo",
    "lat": -4.4419,
    "lng": 15.2663,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cm-dla",
    "name": "Douala",
    "country": "Cameroon",
    "lat": 4.0511,
    "lng": 9.7679,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "zm-lun",
    "name": "Lusaka",
    "country": "Zambia",
    "lat": -15.3875,
    "lng": 28.3228,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "na-wdh",
    "name": "Windhoek",
    "country": "Namibia",
    "lat": -22.5609,
    "lng": 17.0658,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mg-tnr",
    "name": "Antananarivo",
    "country": "Madagascar",
    "lat": -18.8792,
    "lng": 47.5079,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-tna",
    "name": "Thane",
    "country": "India",
    "lat": 19.2183,
    "lng": 72.9781,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-kld",
    "name": "Kalyan-Dombivli",
    "country": "India",
    "lat": 19.2403,
    "lng": 73.1305,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-vsv",
    "name": "Vasai-Virar",
    "country": "India",
    "lat": 19.4259,
    "lng": 72.8225,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-aur",
    "name": "Chhatrapati Sambhajinagar",
    "country": "India",
    "lat": 19.8762,
    "lng": 75.3433,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-nvm",
    "name": "Navi Mumbai",
    "country": "India",
    "lat": 19.033,
    "lng": 73.0297,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-slp",
    "name": "Solapur",
    "country": "India",
    "lat": 17.6599,
    "lng": 75.9064,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mrb",
    "name": "Mira-Bhayandar",
    "country": "India",
    "lat": 19.2813,
    "lng": 72.8561,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bwd",
    "name": "Bhiwandi",
    "country": "India",
    "lat": 19.2813,
    "lng": 73.0483,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-amr",
    "name": "Amravati",
    "country": "India",
    "lat": 20.9374,
    "lng": 77.7796,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-nde",
    "name": "Nanded",
    "country": "India",
    "lat": 19.1383,
    "lng": 77.321,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-klh",
    "name": "Kolhapur",
    "country": "India",
    "lat": 16.705,
    "lng": 74.2433,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-akl",
    "name": "Akola",
    "country": "India",
    "lat": 20.7002,
    "lng": 77.0082,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-pnv",
    "name": "Panvel",
    "country": "India",
    "lat": 18.9894,
    "lng": 73.1175,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ulh",
    "name": "Ulhasnagar",
    "country": "India",
    "lat": 19.2215,
    "lng": 73.1645,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-sgl",
    "name": "Sangli",
    "country": "India",
    "lat": 16.8524,
    "lng": 74.5815,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mlg",
    "name": "Malegaon",
    "country": "India",
    "lat": 20.5579,
    "lng": 74.5287,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-jlg",
    "name": "Jalgaon",
    "country": "India",
    "lat": 21.0077,
    "lng": 75.5626,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ltr",
    "name": "Latur",
    "country": "India",
    "lat": 18.4088,
    "lng": 76.5604,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-dhl",
    "name": "Dhule",
    "country": "India",
    "lat": 20.9042,
    "lng": 74.7749,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-anr",
    "name": "Ahmednagar",
    "country": "India",
    "lat": 19.0952,
    "lng": 74.7496,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-chd",
    "name": "Chandrapur",
    "country": "India",
    "lat": 19.9615,
    "lng": 79.2961,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ndl",
    "name": "New Delhi",
    "country": "India",
    "lat": 28.6139,
    "lng": 77.209,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ggn",
    "name": "Gurugram",
    "country": "India",
    "lat": 28.4595,
    "lng": 77.0266,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-noid",
    "name": "Noida",
    "country": "India",
    "lat": 28.5355,
    "lng": 77.391,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-fdb",
    "name": "Faridabad",
    "country": "India",
    "lat": 28.4089,
    "lng": 77.3178,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-gzb",
    "name": "Ghaziabad",
    "country": "India",
    "lat": 28.6692,
    "lng": 77.4538,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-pnp",
    "name": "Panipat",
    "country": "India",
    "lat": 29.3909,
    "lng": 76.9635,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-amb",
    "name": "Ambala",
    "country": "India",
    "lat": 30.3782,
    "lng": 76.7767,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ymn",
    "name": "Yamunanagar",
    "country": "India",
    "lat": 30.129,
    "lng": 77.2674,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-rtk",
    "name": "Rohtak",
    "country": "India",
    "lat": 28.8955,
    "lng": 76.6066,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-hsr",
    "name": "Hisar",
    "country": "India",
    "lat": 29.1492,
    "lng": 75.7217,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-knl",
    "name": "Karnal",
    "country": "India",
    "lat": 29.6857,
    "lng": 76.9905,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-snp",
    "name": "Sonipat",
    "country": "India",
    "lat": 28.9931,
    "lng": 77.0151,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-pck",
    "name": "Panchkula",
    "country": "India",
    "lat": 30.6942,
    "lng": 76.8606,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ldh",
    "name": "Ludhiana",
    "country": "India",
    "lat": 30.901,
    "lng": 75.8573,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-jln",
    "name": "Jalandhar",
    "country": "India",
    "lat": 31.326,
    "lng": 75.5762,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ptl",
    "name": "Patiala",
    "country": "India",
    "lat": 30.3398,
    "lng": 76.3869,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bti",
    "name": "Bathinda",
    "country": "India",
    "lat": 30.211,
    "lng": 74.9455,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-moh",
    "name": "Mohali",
    "country": "India",
    "lat": 30.7046,
    "lng": 76.7179,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-hsp",
    "name": "Hoshiarpur",
    "country": "India",
    "lat": 31.5273,
    "lng": 75.9149,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ptk",
    "name": "Pathankot",
    "country": "India",
    "lat": 32.2689,
    "lng": 75.6496,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mys",
    "name": "Mysuru",
    "country": "India",
    "lat": 12.2958,
    "lng": 76.6394,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-hbk",
    "name": "Hubballi-Dharwad",
    "country": "India",
    "lat": 15.3647,
    "lng": 75.124,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ixe",
    "name": "Mangaluru",
    "country": "India",
    "lat": 12.9141,
    "lng": 74.856,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ixg",
    "name": "Belagavi",
    "country": "India",
    "lat": 15.8497,
    "lng": 74.4977,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-gbg",
    "name": "Kalaburagi",
    "country": "India",
    "lat": 17.3297,
    "lng": 76.8343,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-dvg",
    "name": "Davanagere",
    "country": "India",
    "lat": 14.4644,
    "lng": 75.9218,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bly",
    "name": "Ballari",
    "country": "India",
    "lat": 15.1394,
    "lng": 76.9214,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-smg",
    "name": "Shivamogga",
    "country": "India",
    "lat": 13.9299,
    "lng": 75.5681,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-tmk",
    "name": "Tumakuru",
    "country": "India",
    "lat": 13.3379,
    "lng": 77.1173,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ixm",
    "name": "Madurai",
    "country": "India",
    "lat": 9.9252,
    "lng": 78.1198,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-trz",
    "name": "Tiruchirappalli",
    "country": "India",
    "lat": 10.7905,
    "lng": 78.7047,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-slm",
    "name": "Salem",
    "country": "India",
    "lat": 11.6643,
    "lng": 78.146,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-tpr",
    "name": "Tiruppur",
    "country": "India",
    "lat": 11.1085,
    "lng": 77.3411,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-erd",
    "name": "Erode",
    "country": "India",
    "lat": 11.341,
    "lng": 77.7172,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-tnv",
    "name": "Tirunelveli",
    "country": "India",
    "lat": 8.7139,
    "lng": 77.7567,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-vlr",
    "name": "Vellore",
    "country": "India",
    "lat": 12.9165,
    "lng": 79.1325,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-tcr",
    "name": "Thoothukudi",
    "country": "India",
    "lat": 8.7642,
    "lng": 78.1348,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-dnd",
    "name": "Dindigul",
    "country": "India",
    "lat": 10.3673,
    "lng": 77.9803,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-tjr",
    "name": "Thanjavur",
    "country": "India",
    "lat": 10.787,
    "lng": 79.1378,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-pny",
    "name": "Puducherry",
    "country": "India",
    "lat": 11.9416,
    "lng": 79.8083,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-wgl",
    "name": "Warangal",
    "country": "India",
    "lat": 17.9689,
    "lng": 79.5941,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-nzb",
    "name": "Nizamabad",
    "country": "India",
    "lat": 18.6725,
    "lng": 78.0941,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-krm",
    "name": "Karimnagar",
    "country": "India",
    "lat": 18.4386,
    "lng": 79.1288,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-kmm",
    "name": "Khammam",
    "country": "India",
    "lat": 17.2473,
    "lng": 80.1514,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-vja",
    "name": "Vijayawada",
    "country": "India",
    "lat": 16.5062,
    "lng": 80.648,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-gun",
    "name": "Guntur",
    "country": "India",
    "lat": 16.3067,
    "lng": 80.4365,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-nel",
    "name": "Nellore",
    "country": "India",
    "lat": 14.4426,
    "lng": 79.9865,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-knl-ap",
    "name": "Kurnool",
    "country": "India",
    "lat": 15.8281,
    "lng": 78.0373,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-rjy",
    "name": "Rajahmundry",
    "country": "India",
    "lat": 17.0005,
    "lng": 81.804,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-tpt",
    "name": "Tirupati",
    "country": "India",
    "lat": 13.6288,
    "lng": 79.4192,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-kkn",
    "name": "Kakinada",
    "country": "India",
    "lat": 16.9891,
    "lng": 82.2475,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-kdp",
    "name": "Kadapa",
    "country": "India",
    "lat": 14.4673,
    "lng": 78.8242,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-atp",
    "name": "Anantapur",
    "country": "India",
    "lat": 14.6819,
    "lng": 77.6006,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-raj",
    "name": "Rajkot",
    "country": "India",
    "lat": 22.3039,
    "lng": 70.8022,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bva",
    "name": "Bhavnagar",
    "country": "India",
    "lat": 21.7645,
    "lng": 72.1519,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-jmn",
    "name": "Jamnagar",
    "country": "India",
    "lat": 22.4707,
    "lng": 70.0577,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-jnd",
    "name": "Junagadh",
    "country": "India",
    "lat": 21.5222,
    "lng": 70.4579,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-gnd",
    "name": "Gandhinagar",
    "country": "India",
    "lat": 23.2156,
    "lng": 72.6369,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-and",
    "name": "Anand",
    "country": "India",
    "lat": 22.5645,
    "lng": 72.9289,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-nvs",
    "name": "Navsari",
    "country": "India",
    "lat": 20.95,
    "lng": 72.93,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bhj",
    "name": "Bhuj",
    "country": "India",
    "lat": 23.242,
    "lng": 69.6669,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-knp",
    "name": "Kanpur",
    "country": "India",
    "lat": 26.4499,
    "lng": 80.3319,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ald",
    "name": "Prayagraj",
    "country": "India",
    "lat": 25.4358,
    "lng": 81.8463,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mrt",
    "name": "Meerut",
    "country": "India",
    "lat": 28.9845,
    "lng": 77.7064,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bly-up",
    "name": "Bareilly",
    "country": "India",
    "lat": 28.367,
    "lng": 79.4304,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-alg",
    "name": "Aligarh",
    "country": "India",
    "lat": 27.8974,
    "lng": 78.088,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mbd",
    "name": "Moradabad",
    "country": "India",
    "lat": 28.8351,
    "lng": 78.7747,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-gkp",
    "name": "Gorakhpur",
    "country": "India",
    "lat": 26.7606,
    "lng": 83.3732,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-jhs",
    "name": "Jhansi",
    "country": "India",
    "lat": 25.4484,
    "lng": 78.5685,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mza",
    "name": "Muzaffarnagar",
    "country": "India",
    "lat": 29.4727,
    "lng": 77.7085,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mth",
    "name": "Mathura",
    "country": "India",
    "lat": 27.4924,
    "lng": 77.6737,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ayd",
    "name": "Ayodhya",
    "country": "India",
    "lat": 26.7922,
    "lng": 82.1998,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-jdh",
    "name": "Jodhpur",
    "country": "India",
    "lat": 26.2389,
    "lng": 73.0243,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-kot",
    "name": "Kota",
    "country": "India",
    "lat": 25.2138,
    "lng": 75.8648,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bkn",
    "name": "Bikaner",
    "country": "India",
    "lat": 28.0229,
    "lng": 73.3119,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ajm",
    "name": "Ajmer",
    "country": "India",
    "lat": 26.4499,
    "lng": 74.6399,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-udr",
    "name": "Udaipur",
    "country": "India",
    "lat": 24.5854,
    "lng": 73.7125,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bhw",
    "name": "Bhilwara",
    "country": "India",
    "lat": 25.3407,
    "lng": 74.6313,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-alw",
    "name": "Alwar",
    "country": "India",
    "lat": 27.553,
    "lng": 76.6346,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-jbp",
    "name": "Jabalpur",
    "country": "India",
    "lat": 23.1815,
    "lng": 79.9864,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-gwl",
    "name": "Gwalior",
    "country": "India",
    "lat": 26.2183,
    "lng": 78.1828,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ujn",
    "name": "Ujjain",
    "country": "India",
    "lat": 23.1765,
    "lng": 75.7885,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-sgr",
    "name": "Sagar",
    "country": "India",
    "lat": 23.8388,
    "lng": 78.7378,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-rtm",
    "name": "Ratlam",
    "country": "India",
    "lat": 23.3315,
    "lng": 75.0367,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-hwr",
    "name": "Howrah",
    "country": "India",
    "lat": 22.5958,
    "lng": 88.2636,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-asn",
    "name": "Asansol",
    "country": "India",
    "lat": 23.6739,
    "lng": 86.9524,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-slg",
    "name": "Siliguri",
    "country": "India",
    "lat": 26.7271,
    "lng": 88.3953,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-dgp",
    "name": "Durgapur",
    "country": "India",
    "lat": 23.5204,
    "lng": 87.3119,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-kgp",
    "name": "Kharagpur",
    "country": "India",
    "lat": 22.346,
    "lng": 87.232,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-djg",
    "name": "Darjeeling",
    "country": "India",
    "lat": 27.041,
    "lng": 88.2663,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ctk",
    "name": "Cuttack",
    "country": "India",
    "lat": 20.4625,
    "lng": 85.8828,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-rkl",
    "name": "Rourkela",
    "country": "India",
    "lat": 22.2604,
    "lng": 84.8536,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-pri",
    "name": "Puri",
    "country": "India",
    "lat": 19.8135,
    "lng": 85.8312,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-sbp",
    "name": "Sambalpur",
    "country": "India",
    "lat": 21.4669,
    "lng": 83.9812,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-gay",
    "name": "Gaya",
    "country": "India",
    "lat": 24.7914,
    "lng": 85.0002,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bgp",
    "name": "Bhagalpur",
    "country": "India",
    "lat": 25.2425,
    "lng": 86.9842,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mfp",
    "name": "Muzaffarpur",
    "country": "India",
    "lat": 26.1209,
    "lng": 85.3647,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-prn",
    "name": "Purnia",
    "country": "India",
    "lat": 25.7771,
    "lng": 87.4753,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-dbg",
    "name": "Darbhanga",
    "country": "India",
    "lat": 26.1542,
    "lng": 85.8918,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-jsr",
    "name": "Jamshedpur",
    "country": "India",
    "lat": 22.8046,
    "lng": 86.2029,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-dhn",
    "name": "Dhanbad",
    "country": "India",
    "lat": 23.7957,
    "lng": 86.4304,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bkr",
    "name": "Bokaro",
    "country": "India",
    "lat": 23.6693,
    "lng": 86.1511,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ccj",
    "name": "Kozhikode",
    "country": "India",
    "lat": 11.2588,
    "lng": 75.7804,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-klm",
    "name": "Kollam",
    "country": "India",
    "lat": 8.8932,
    "lng": 76.6141,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-tcr-kl",
    "name": "Thrissur",
    "country": "India",
    "lat": 10.5276,
    "lng": 76.2144,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-cnn",
    "name": "Kannur",
    "country": "India",
    "lat": 11.8745,
    "lng": 75.3704,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-alp",
    "name": "Alappuzha",
    "country": "India",
    "lat": 9.4981,
    "lng": 76.3388,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-pgt",
    "name": "Palakkad",
    "country": "India",
    "lat": 10.7867,
    "lng": 76.6548,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bli",
    "name": "Bhilai",
    "country": "India",
    "lat": 21.1938,
    "lng": 81.3509,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-bsp",
    "name": "Bilaspur",
    "country": "India",
    "lat": 22.0797,
    "lng": 82.1409,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-hdw",
    "name": "Haridwar",
    "country": "India",
    "lat": 29.9457,
    "lng": 78.1642,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-rsh",
    "name": "Rishikesh",
    "country": "India",
    "lat": 30.0869,
    "lng": 78.2676,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-sml",
    "name": "Shimla",
    "country": "India",
    "lat": 31.1048,
    "lng": 77.1734,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-dhm",
    "name": "Dharamshala",
    "country": "India",
    "lat": 32.219,
    "lng": 76.3234,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-mnl",
    "name": "Manali",
    "country": "India",
    "lat": 32.2396,
    "lng": 77.1887,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ixj",
    "name": "Jammu",
    "country": "India",
    "lat": 32.7266,
    "lng": 74.857,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-leh",
    "name": "Leh",
    "country": "India",
    "lat": 34.1526,
    "lng": 77.5771,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-shl",
    "name": "Shillong",
    "country": "India",
    "lat": 25.5788,
    "lng": 91.8933,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-imp",
    "name": "Imphal",
    "country": "India",
    "lat": 24.817,
    "lng": 93.9368,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-agt",
    "name": "Agartala",
    "country": "India",
    "lat": 23.8315,
    "lng": 91.2868,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-azl",
    "name": "Aizawl",
    "country": "India",
    "lat": 23.7271,
    "lng": 92.7176,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-khm",
    "name": "Kohima",
    "country": "India",
    "lat": 25.6751,
    "lng": 94.1086,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-gtk",
    "name": "Gangtok",
    "country": "India",
    "lat": 27.3314,
    "lng": 88.6138,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "in-ixz",
    "name": "Port Blair",
    "country": "India",
    "lat": 11.6234,
    "lng": 92.7265,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-hou",
    "name": "Houston",
    "country": "United States",
    "lat": 29.7604,
    "lng": -95.3698,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-sat",
    "name": "San Antonio",
    "country": "United States",
    "lat": 29.4241,
    "lng": -98.4936,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-dal",
    "name": "Dallas",
    "country": "United States",
    "lat": 32.7767,
    "lng": -96.797,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-det",
    "name": "Detroit",
    "country": "United States",
    "lat": 42.3314,
    "lng": -83.0458,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-orl",
    "name": "Orlando",
    "country": "United States",
    "lat": 28.5383,
    "lng": -81.3792,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-tor",
    "name": "Toronto",
    "country": "Canada",
    "lat": 43.6532,
    "lng": -79.3832,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ca-yhz",
    "name": "Halifax",
    "country": "Canada",
    "lat": 44.6488,
    "lng": -63.5752,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-liv",
    "name": "Liverpool",
    "country": "United Kingdom",
    "lat": 53.4084,
    "lng": -2.9916,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-lds",
    "name": "Leeds",
    "country": "United Kingdom",
    "lat": 53.8008,
    "lng": -1.5491,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-bfs",
    "name": "Belfast",
    "country": "United Kingdom",
    "lat": 54.5973,
    "lng": -5.9301,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "uk-cwl",
    "name": "Cardiff",
    "country": "United Kingdom",
    "lat": 51.4816,
    "lng": -3.1791,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-trn",
    "name": "Turin",
    "country": "Italy",
    "lat": 45.0703,
    "lng": 7.6869,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "nl-rtm",
    "name": "Rotterdam",
    "country": "Netherlands",
    "lat": 51.9244,
    "lng": 4.4777,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "be-anr",
    "name": "Antwerp",
    "country": "Belgium",
    "lat": 51.2194,
    "lng": 4.4025,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "tr-ank",
    "name": "Ankara",
    "country": "Turkey",
    "lat": 39.9334,
    "lng": 32.8597,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-spk",
    "name": "Sapporo",
    "country": "Japan",
    "lat": 43.0618,
    "lng": 141.3545,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-bjs",
    "name": "Beijing",
    "country": "China",
    "lat": 39.9042,
    "lng": 116.4074,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "nz-akl",
    "name": "Auckland",
    "country": "New Zealand",
    "lat": -36.8485,
    "lng": 174.7633,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-for",
    "name": "Fortaleza",
    "country": "Brazil",
    "lat": -3.7319,
    "lng": -38.5267,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-okc",
    "name": "Oklahoma City",
    "country": "United States",
    "lat": 35.4676,
    "lng": -97.5164,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-elp",
    "name": "El Paso",
    "country": "United States",
    "lat": 31.7619,
    "lng": -106.485,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-sdf",
    "name": "Louisville",
    "country": "United States",
    "lat": 38.2527,
    "lng": -85.7585,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-mem",
    "name": "Memphis",
    "country": "United States",
    "lat": 35.1495,
    "lng": -90.049,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-mke",
    "name": "Milwaukee",
    "country": "United States",
    "lat": 43.0389,
    "lng": -87.9065,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-abq",
    "name": "Albuquerque",
    "country": "United States",
    "lat": 35.0844,
    "lng": -106.6504,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-tus",
    "name": "Tucson",
    "country": "United States",
    "lat": 32.2226,
    "lng": -110.9747,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-fat",
    "name": "Fresno",
    "country": "United States",
    "lat": 36.7468,
    "lng": -119.7726,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-smf",
    "name": "Sacramento",
    "country": "United States",
    "lat": 38.5816,
    "lng": -121.4944,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-oma",
    "name": "Omaha",
    "country": "United States",
    "lat": 41.2565,
    "lng": -95.9345,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-rdu",
    "name": "Raleigh",
    "country": "United States",
    "lat": 35.7796,
    "lng": -78.6382,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-lgb",
    "name": "Long Beach",
    "country": "United States",
    "lat": 33.7701,
    "lng": -118.1937,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-vab",
    "name": "Virginia Beach",
    "country": "United States",
    "lat": 36.8529,
    "lng": -75.978,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-oak",
    "name": "Oakland",
    "country": "United States",
    "lat": 37.8044,
    "lng": -122.2712,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-tul",
    "name": "Tulsa",
    "country": "United States",
    "lat": 36.154,
    "lng": -95.9928,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "us-cin",
    "name": "Cincinnati",
    "country": "United States",
    "lat": 39.1031,
    "lng": -84.512,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-ukb",
    "name": "Kobe",
    "country": "Japan",
    "lat": 34.6901,
    "lng": 135.1955,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-kyt",
    "name": "Kyoto",
    "country": "Japan",
    "lat": 35.0116,
    "lng": 135.7681,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-kws",
    "name": "Kawasaki",
    "country": "Japan",
    "lat": 35.5308,
    "lng": 139.7029,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-stm",
    "name": "Saitama",
    "country": "Japan",
    "lat": 35.8617,
    "lng": 139.6455,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-hij",
    "name": "Hiroshima",
    "country": "Japan",
    "lat": 34.3853,
    "lng": 132.4553,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-sdj",
    "name": "Sendai",
    "country": "Japan",
    "lat": 38.2682,
    "lng": 140.8694,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "jp-chb",
    "name": "Chiba",
    "country": "Japan",
    "lat": 35.6074,
    "lng": 140.1065,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-sia",
    "name": "Xi'an",
    "country": "China",
    "lat": 34.3416,
    "lng": 108.9398,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-tsn",
    "name": "Tianjin",
    "country": "China",
    "lat": 39.3434,
    "lng": 117.3616,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-nkg",
    "name": "Nanjing",
    "country": "China",
    "lat": 32.0603,
    "lng": 118.7969,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-cgo",
    "name": "Zhengzhou",
    "country": "China",
    "lat": 34.7466,
    "lng": 113.6254,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-csx",
    "name": "Changsha",
    "country": "China",
    "lat": 28.2282,
    "lng": 112.9388,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-tao",
    "name": "Qingdao",
    "country": "China",
    "lat": 36.0671,
    "lng": 120.3826,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-kmg",
    "name": "Kunming",
    "country": "China",
    "lat": 25.0406,
    "lng": 102.7129,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-xmn",
    "name": "Xiamen",
    "country": "China",
    "lat": 24.4798,
    "lng": 118.0894,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "cn-szh",
    "name": "Suzhou",
    "country": "China",
    "lat": 31.299,
    "lng": 120.5853,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-dus",
    "name": "Düsseldorf",
    "country": "Germany",
    "lat": 51.2277,
    "lng": 6.7735,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-lej",
    "name": "Leipzig",
    "country": "Germany",
    "lat": 51.3397,
    "lng": 12.3731,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-dtm",
    "name": "Dortmund",
    "country": "Germany",
    "lat": 51.5136,
    "lng": 7.4653,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-drs",
    "name": "Dresden",
    "country": "Germany",
    "lat": 51.0504,
    "lng": 13.7373,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-haj",
    "name": "Hannover",
    "country": "Germany",
    "lat": 52.3759,
    "lng": 9.732,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "de-nue",
    "name": "Nuremberg",
    "country": "Germany",
    "lat": 49.4521,
    "lng": 11.0767,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-nte",
    "name": "Nantes",
    "country": "France",
    "lat": 47.2184,
    "lng": -1.5536,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-mpl",
    "name": "Montpellier",
    "country": "France",
    "lat": 43.6108,
    "lng": 3.8767,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-sxb",
    "name": "Strasbourg",
    "country": "France",
    "lat": 48.5734,
    "lng": 7.7521,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-bod",
    "name": "Bordeaux",
    "country": "France",
    "lat": 44.8378,
    "lng": -0.5792,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "fr-lil",
    "name": "Lille",
    "country": "France",
    "lat": 50.6292,
    "lng": 3.0573,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-blq",
    "name": "Bologna",
    "country": "Italy",
    "lat": 44.4949,
    "lng": 11.3426,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-vce",
    "name": "Venice",
    "country": "Italy",
    "lat": 45.4408,
    "lng": 12.3155,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-goa",
    "name": "Genoa",
    "country": "Italy",
    "lat": 44.4056,
    "lng": 8.9463,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-pmo",
    "name": "Palermo",
    "country": "Italy",
    "lat": 38.1157,
    "lng": 13.3615,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-bri",
    "name": "Bari",
    "country": "Italy",
    "lat": 41.1171,
    "lng": 16.8719,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "it-vrn",
    "name": "Verona",
    "country": "Italy",
    "lat": 45.4384,
    "lng": 10.9916,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "es-agp",
    "name": "Malaga",
    "country": "Spain",
    "lat": 36.7213,
    "lng": -4.4214,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "es-bio",
    "name": "Bilbao",
    "country": "Spain",
    "lat": 43.263,
    "lng": -2.935,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "es-zaz",
    "name": "Zaragoza",
    "country": "Spain",
    "lat": 41.6488,
    "lng": -0.8891,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "es-pmi",
    "name": "Palma de Mallorca",
    "country": "Spain",
    "lat": 39.5696,
    "lng": 2.6502,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "es-alc",
    "name": "Alicante",
    "country": "Spain",
    "lat": 38.3452,
    "lng": -0.481,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "au-hba",
    "name": "Hobart",
    "country": "Australia",
    "lat": -42.8821,
    "lng": 147.3272,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "au-drw",
    "name": "Darwin",
    "country": "Australia",
    "lat": -12.4634,
    "lng": 130.8456,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "tr-adb",
    "name": "Izmir",
    "country": "Turkey",
    "lat": 38.4237,
    "lng": 27.1428,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "tr-yei",
    "name": "Bursa",
    "country": "Turkey",
    "lat": 40.1885,
    "lng": 29.061,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "tr-ayt",
    "name": "Antalya",
    "country": "Turkey",
    "lat": 36.8969,
    "lng": 30.7133,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "sa-med",
    "name": "Medina",
    "country": "Saudi Arabia",
    "lat": 24.5247,
    "lng": 39.5692,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "sa-dmm",
    "name": "Dammam",
    "country": "Saudi Arabia",
    "lat": 26.4207,
    "lng": 50.0888,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pk-fsd",
    "name": "Faisalabad",
    "country": "Pakistan",
    "lat": 31.4504,
    "lng": 73.135,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pk-pew",
    "name": "Peshawar",
    "country": "Pakistan",
    "lat": 34.0151,
    "lng": 71.5249,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pk-mux",
    "name": "Multan",
    "country": "Pakistan",
    "lat": 30.1575,
    "lng": 71.5249,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "bd-cgp",
    "name": "Chittagong",
    "country": "Bangladesh",
    "lat": 22.3569,
    "lng": 91.7832,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "bd-syl",
    "name": "Sylhet",
    "country": "Bangladesh",
    "lat": 24.8949,
    "lng": 91.8687,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "lk-kdy",
    "name": "Kandy",
    "country": "Sri Lanka",
    "lat": 7.2906,
    "lng": 80.6337,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "np-pkr",
    "name": "Pokhara",
    "country": "Nepal",
    "lat": 28.2096,
    "lng": 83.9856,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "mx-pue",
    "name": "Puebla",
    "country": "Mexico",
    "lat": 19.0414,
    "lng": -98.2063,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-bel",
    "name": "Belém",
    "country": "Brazil",
    "lat": -1.4558,
    "lng": -48.4902,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "br-gyn",
    "name": "Goiânia",
    "country": "Brazil",
    "lat": -16.6869,
    "lng": -49.2648,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "ar-mdz",
    "name": "Mendoza",
    "country": "Argentina",
    "lat": -32.8895,
    "lng": -68.8458,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "co-ctg",
    "name": "Cartagena",
    "country": "Colombia",
    "lat": 10.391,
    "lng": -75.4794,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  },
  {
    "id": "pe-aqp",
    "name": "Arequipa",
    "country": "Peru",
    "lat": -16.409,
    "lng": -71.5375,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": []
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _rootScope.WORLD_CITIES;
}
