/**
 * LastWave Live - Global World Cities Database
 * Comprehensive geospatial dataset of 538+ global cities across all continents.
 * Featuring 181+ major Indian cities, 22+ Russian cities, 58+ US metros, and global capitals.
 * Live cities have activeListeners > 0; dormant/inactive cities have activeListeners = 0.
 * Inactive cities do NOT trigger live pulses or map nodes until listening activity begins.
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
    "activeListeners": 420,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-del",
    "name": "Delhi NCR",
    "country": "India",
    "lat": 28.6139,
    "lng": 77.209,
    "tier": 1,
    "activeListeners": 485,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-blr",
    "name": "Bengaluru",
    "country": "India",
    "lat": 12.9716,
    "lng": 77.5946,
    "tier": 1,
    "activeListeners": 390,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-hyd",
    "name": "Hyderabad",
    "country": "India",
    "lat": 17.385,
    "lng": 78.4867,
    "tier": 1,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-maa",
    "name": "Chennai",
    "country": "India",
    "lat": 13.0827,
    "lng": 80.2707,
    "tier": 1,
    "activeListeners": 280,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ccu",
    "name": "Kolkata",
    "country": "India",
    "lat": 22.5726,
    "lng": 88.3639,
    "tier": 1,
    "activeListeners": 250,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ami Je Tomar 3.0",
        "artist": "Pritam ft. Arijit Singh",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Boba Tunnel",
        "artist": "Anupam Roy",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/c4/88/33c48869-7c46-f642-e065-276f5fbf764f/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-pnq",
    "name": "Pune",
    "country": "India",
    "lat": 18.5204,
    "lng": 73.8567,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-amd",
    "name": "Ahmedabad",
    "country": "India",
    "lat": 23.0225,
    "lng": 72.5714,
    "tier": 1,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-jai",
    "name": "Jaipur",
    "country": "India",
    "lat": 26.9124,
    "lng": 75.7873,
    "tier": 1,
    "activeListeners": 260,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-lko",
    "name": "Lucknow",
    "country": "India",
    "lat": 26.8467,
    "lng": 80.9462,
    "tier": 1,
    "activeListeners": 270,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ixc",
    "name": "Chandigarh",
    "country": "India",
    "lat": 30.7333,
    "lng": 76.7794,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-cok",
    "name": "Kochi",
    "country": "India",
    "lat": 9.9312,
    "lng": 76.2673,
    "tier": 1,
    "activeListeners": 250,
    "topSongs": [
      {
        "rank": "01",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 4320,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Jaada",
        "artist": "Sushin Shyam",
        "plays": 3210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Armadham",
        "artist": "Sushin Shyam",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-idr",
    "name": "Indore",
    "country": "India",
    "lat": 22.7196,
    "lng": 75.8577,
    "tier": 1,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bho",
    "name": "Bhopal",
    "country": "India",
    "lat": 23.2599,
    "lng": 77.4126,
    "tier": 2,
    "activeListeners": 190,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-nag",
    "name": "Nagpur",
    "country": "India",
    "lat": 21.1458,
    "lng": 79.0882,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-pat",
    "name": "Patna",
    "country": "India",
    "lat": 25.5941,
    "lng": 85.1376,
    "tier": 1,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-cjb",
    "name": "Coimbatore",
    "country": "India",
    "lat": 11.0168,
    "lng": 76.9558,
    "tier": 2,
    "activeListeners": 175,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-vtg",
    "name": "Visakhapatnam",
    "country": "India",
    "lat": 17.6868,
    "lng": 83.2185,
    "tier": 2,
    "activeListeners": 185,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-gau",
    "name": "Guwahati",
    "country": "India",
    "lat": 26.1445,
    "lng": 91.7362,
    "tier": 2,
    "activeListeners": 170,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-vns",
    "name": "Varanasi",
    "country": "India",
    "lat": 25.3176,
    "lng": 82.9739,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-atq",
    "name": "Amritsar",
    "country": "India",
    "lat": 31.634,
    "lng": 74.8723,
    "tier": 2,
    "activeListeners": 190,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bbi",
    "name": "Bhubaneswar",
    "country": "India",
    "lat": 20.2961,
    "lng": 85.8245,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-agr",
    "name": "Agra",
    "country": "India",
    "lat": 27.1767,
    "lng": 78.0081,
    "tier": 2,
    "activeListeners": 160,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-stv",
    "name": "Surat",
    "country": "India",
    "lat": 21.1702,
    "lng": 72.8311,
    "tier": 1,
    "activeListeners": 260,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bdq",
    "name": "Vadodara",
    "country": "India",
    "lat": 22.3072,
    "lng": 73.1812,
    "tier": 2,
    "activeListeners": 170,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-nsk",
    "name": "Nashik",
    "country": "India",
    "lat": 19.9975,
    "lng": 73.7898,
    "tier": 2,
    "activeListeners": 140,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-myq",
    "name": "Mysore",
    "country": "India",
    "lat": 12.2958,
    "lng": 76.6394,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 710,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-trv",
    "name": "Thiruvananthapuram",
    "country": "India",
    "lat": 8.5241,
    "lng": 76.9366,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 4320,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Jaada",
        "artist": "Sushin Shyam",
        "plays": 3210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Armadham",
        "artist": "Sushin Shyam",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-sxr",
    "name": "Srinagar",
    "country": "India",
    "lat": 34.0837,
    "lng": 74.7973,
    "tier": 2,
    "activeListeners": 135,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-goa",
    "name": "Panaji (Goa)",
    "country": "India",
    "lat": 15.4909,
    "lng": 73.8278,
    "tier": 2,
    "activeListeners": 165,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ded",
    "name": "Dehradun",
    "country": "India",
    "lat": 30.3165,
    "lng": 78.0322,
    "tier": 2,
    "activeListeners": 145,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-rpr",
    "name": "Raipur",
    "country": "India",
    "lat": 21.2514,
    "lng": 81.6296,
    "tier": 2,
    "activeListeners": 150,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ixr",
    "name": "Ranchi",
    "country": "India",
    "lat": 23.3441,
    "lng": 85.3096,
    "tier": 2,
    "activeListeners": 165,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-slv",
    "name": "Shimla",
    "country": "India",
    "lat": 31.1048,
    "lng": 77.1734,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 640,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-vga",
    "name": "Vijayawada",
    "country": "India",
    "lat": 16.5062,
    "lng": 80.648,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 1040,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mdu",
    "name": "Madurai",
    "country": "India",
    "lat": 9.9252,
    "lng": 78.1198,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pk-khi",
    "name": "Karachi",
    "country": "Pakistan",
    "lat": 24.8607,
    "lng": 67.0011,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 3200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Pasoori",
        "artist": "Ali Sethi x Shae Gill",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/dc/13/26/dc132644-8cb5-1779-11c5-8422fe5699ce/196626577826.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pk-lhe",
    "name": "Lahore",
    "country": "Pakistan",
    "lat": 31.5204,
    "lng": 74.3587,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pk-isb",
    "name": "Islamabad",
    "country": "Pakistan",
    "lat": 33.6844,
    "lng": 73.0479,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Iraaday",
        "artist": "Abdul Hannan",
        "plays": 1800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/dc/13/26/dc132644-8cb5-1779-11c5-8422fe5699ce/196626577826.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "bd-dac",
    "name": "Dhaka",
    "country": "Bangladesh",
    "lat": 23.8103,
    "lng": 90.4125,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ghum",
        "artist": "Shironamhin",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "lk-cmb",
    "name": "Colombo",
    "country": "Sri Lanka",
    "lat": 6.9271,
    "lng": 79.8612,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Manike Mage Hithe",
        "artist": "Yohani",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "np-ktm",
    "name": "Kathmandu",
    "country": "Nepal",
    "lat": 27.7172,
    "lng": 85.324,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hataarindai Bataasindai",
        "artist": "Sajjan Raj Vaidya",
        "plays": 1450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-nyc",
    "name": "New York",
    "country": "United States",
    "lat": 40.7128,
    "lng": -74.006,
    "tier": 1,
    "activeListeners": 460,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 6100,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Empire State of Mind",
        "artist": "Jay-Z ft. Alicia Keys",
        "plays": 5400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 4950,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-lax",
    "name": "Los Angeles",
    "country": "United States",
    "lat": 34.0522,
    "lng": -118.2437,
    "tier": 1,
    "activeListeners": 440,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 7200,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Million Dollar Baby",
        "artist": "Tommy Richman",
        "plays": 4600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5c/e7/39/5ce73933-8f42-1095-e84b-0caec311f54b/24CRGIM43010.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-sfo",
    "name": "San Francisco",
    "country": "United States",
    "lat": 37.7749,
    "lng": -122.4194,
    "tier": 1,
    "activeListeners": 350,
    "topSongs": [
      {
        "rank": "01",
        "title": "Midnight City",
        "artist": "M83",
        "plays": 3200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Starboy",
        "artist": "The Weeknd ft. Daft Punk",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-sea",
    "name": "Seattle",
    "country": "United States",
    "lat": 47.6062,
    "lng": -122.3321,
    "tier": 2,
    "activeListeners": 330,
    "topSongs": [
      {
        "rank": "01",
        "title": "Good Luck, Babe!",
        "artist": "Chappell Roan",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-chi",
    "name": "Chicago",
    "country": "United States",
    "lat": 41.8781,
    "lng": -87.6298,
    "tier": 1,
    "activeListeners": 360,
    "topSongs": [
      {
        "rank": "01",
        "title": "Carnival",
        "artist": "Kanye West & Ty Dolla $ign",
        "plays": 3800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-mia",
    "name": "Miami",
    "country": "United States",
    "lat": 25.7617,
    "lng": -80.1918,
    "tier": 1,
    "activeListeners": 380,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor, Cris Mj",
        "plays": 4400,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "us-aus",
    "name": "Austin",
    "country": "United States",
    "lat": 30.2672,
    "lng": -97.7431,
    "tier": 2,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "A Bar Song (Tipsy)",
        "artist": "Shaboozey",
        "plays": 3600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-dfw",
    "name": "Dallas",
    "country": "United States",
    "lat": 32.7767,
    "lng": -96.797,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "I Had Some Help",
        "artist": "Post Malone ft. Morgan Wallen",
        "plays": 4100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-iah",
    "name": "Houston",
    "country": "United States",
    "lat": 29.7604,
    "lng": -95.3698,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Texas Hold 'Em",
        "artist": "Beyoncé",
        "plays": 4200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-atl",
    "name": "Atlanta",
    "country": "United States",
    "lat": 33.749,
    "lng": -84.388,
    "tier": 1,
    "activeListeners": 330,
    "topSongs": [
      {
        "rank": "01",
        "title": "Type Shit",
        "artist": "Future & Metro Boomin",
        "plays": 4500,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "us-bos",
    "name": "Boston",
    "country": "United States",
    "lat": 42.3601,
    "lng": -71.0589,
    "tier": 2,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Stick Season",
        "artist": "Noah Kahan",
        "plays": 3400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-den",
    "name": "Denver",
    "country": "United States",
    "lat": 39.7392,
    "lng": -104.9903,
    "tier": 2,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sunflower",
        "artist": "Post Malone ft. Swae Lee",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-phx",
    "name": "Phoenix",
    "country": "United States",
    "lat": 33.4484,
    "lng": -112.074,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Million Dollar Baby",
        "artist": "Tommy Richman",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5c/e7/39/5ce73933-8f42-1095-e84b-0caec311f54b/24CRGIM43010.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-phl",
    "name": "Philadelphia",
    "country": "United States",
    "lat": 39.9526,
    "lng": -75.1652,
    "tier": 2,
    "activeListeners": 250,
    "topSongs": [
      {
        "rank": "01",
        "title": "Dreams and Nightmares",
        "artist": "Meek Mill",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-las",
    "name": "Las Vegas",
    "country": "United States",
    "lat": 36.1699,
    "lng": -115.1398,
    "tier": 2,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-dtw",
    "name": "Detroit",
    "country": "United States",
    "lat": 42.3314,
    "lng": -83.0458,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Houdini",
        "artist": "Eminem",
        "plays": 3200,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "us-bna",
    "name": "Nashville",
    "country": "United States",
    "lat": 36.1627,
    "lng": -86.7816,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Last Night",
        "artist": "Morgan Wallen",
        "plays": 3900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-pdx",
    "name": "Portland",
    "country": "United States",
    "lat": 45.5152,
    "lng": -122.6784,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Birds of a Feather",
        "artist": "Billie Eilish",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-msp",
    "name": "Minneapolis",
    "country": "United States",
    "lat": 44.9778,
    "lng": -93.265,
    "tier": 3,
    "activeListeners": 190,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-was",
    "name": "Washington DC",
    "country": "United States",
    "lat": 38.9072,
    "lng": -77.0369,
    "tier": 1,
    "activeListeners": 320,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 3400,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "us-slc",
    "name": "Salt Lake City",
    "country": "United States",
    "lat": 40.7608,
    "lng": -111.891,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Believer",
        "artist": "Imagine Dragons",
        "plays": 1800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-msy",
    "name": "New Orleans",
    "country": "United States",
    "lat": 29.9511,
    "lng": -90.0715,
    "tier": 3,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Do Whatcha Wanna",
        "artist": "Rebirth Brass Band",
        "plays": 1600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-hnl",
    "name": "Honolulu",
    "country": "United States",
    "lat": 21.3069,
    "lng": -157.8583,
    "tier": 3,
    "activeListeners": 160,
    "topSongs": [
      {
        "rank": "01",
        "title": "Somewhere Over the Rainbow",
        "artist": "Israel Kamakawiwoʻole",
        "plays": 1950,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-anc",
    "name": "Anchorage",
    "country": "United States",
    "lat": 61.2181,
    "lng": -149.9003,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Northern Attitude",
        "artist": "Noah Kahan",
        "plays": 980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ca-yyz",
    "name": "Toronto",
    "country": "Canada",
    "lat": 43.6532,
    "lng": -79.3832,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "One Dance",
        "artist": "Drake ft. Wizkid",
        "plays": 4300,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 3900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ca-yvr",
    "name": "Vancouver",
    "country": "Canada",
    "lat": 49.2827,
    "lng": -123.1207,
    "tier": 2,
    "activeListeners": 320,
    "topSongs": [
      {
        "rank": "01",
        "title": "Starboy",
        "artist": "The Weeknd",
        "plays": 2950,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ca-yul",
    "name": "Montreal",
    "country": "Canada",
    "lat": 45.5017,
    "lng": -73.5673,
    "tier": 2,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Stromae",
        "artist": "Papaoutai",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ca-yyc",
    "name": "Calgary",
    "country": "Canada",
    "lat": 51.0447,
    "lng": -114.0719,
    "tier": 3,
    "activeListeners": 190,
    "topSongs": [
      {
        "rank": "01",
        "title": "A Bar Song (Tipsy)",
        "artist": "Shaboozey",
        "plays": 1850,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ca-yow",
    "name": "Ottawa",
    "country": "Canada",
    "lat": 45.4215,
    "lng": -75.6972,
    "tier": 3,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 1650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "mx-mex",
    "name": "Mexico City",
    "country": "Mexico",
    "lat": 19.4326,
    "lng": -99.1332,
    "tier": 1,
    "activeListeners": 420,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ella Baila Sola",
        "artist": "Eslabon Armado, Peso Pluma",
        "plays": 5400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Gata Only",
        "artist": "FloyyMenor, Cris Mj",
        "plays": 4800,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "mx-gdl",
    "name": "Guadalajara",
    "country": "Mexico",
    "lat": 20.6597,
    "lng": -103.3496,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Lady Gaga",
        "artist": "Peso Pluma, Gabito Ballesteros",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "mx-mty",
    "name": "Monterrey",
    "country": "Mexico",
    "lat": 25.6866,
    "lng": -100.3161,
    "tier": 2,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "QLONA",
        "artist": "KAROL G, Peso Pluma",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "mx-cun",
    "name": "Cancún",
    "country": "Mexico",
    "lat": 21.1619,
    "lng": -86.8515,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Pepas",
        "artist": "Farruko",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-lon",
    "name": "London",
    "country": "United Kingdom",
    "lat": 51.5074,
    "lng": -0.1278,
    "tier": 1,
    "activeListeners": 470,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sprinter",
        "artist": "Dave & Central Cee",
        "plays": 5200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/ce/14/27ce14e3-18c4-6dfe-f9a5-ca6e6d1c4982/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 4600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Prada",
        "artist": "cassö, RAYE, D-Block Europe",
        "plays": 3900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/b1/03/b8b1031c-3b95-ef25-d9fe-d183988b48b9/196871378377.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-man",
    "name": "Manchester",
    "country": "United Kingdom",
    "lat": 53.4808,
    "lng": -2.2426,
    "tier": 2,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sprinter",
        "artist": "Dave & Central Cee",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/ce/14/27ce14e3-18c4-6dfe-f9a5-ca6e6d1c4982/artwork.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-edi",
    "name": "Edinburgh",
    "country": "United Kingdom",
    "lat": 55.9533,
    "lng": -3.1883,
    "tier": 3,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Someone You Loved",
        "artist": "Lewis Capaldi",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fr-par",
    "name": "Paris",
    "country": "France",
    "lat": 48.8566,
    "lng": 2.3522,
    "tier": 1,
    "activeListeners": 440,
    "topSongs": [
      {
        "rank": "01",
        "title": "Imagine",
        "artist": "Carbonne",
        "plays": 4800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/13/27/90132717-36e6-912b-cba0-ecf4c65a045c/3617387346883.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Gata Only",
        "artist": "FloyyMenor, Cris Mj",
        "plays": 3600,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "fr-lys",
    "name": "Lyon",
    "country": "France",
    "lat": 45.764,
    "lng": 4.8357,
    "tier": 2,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "Imagine",
        "artist": "Carbonne",
        "plays": 2200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/13/27/90132717-36e6-912b-cba0-ecf4c65a045c/3617387346883.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fr-mrs",
    "name": "Marseille",
    "country": "France",
    "lat": 43.2965,
    "lng": 5.3698,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Bande Organisée",
        "artist": "Jul",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/13/27/90132717-36e6-912b-cba0-ecf4c65a045c/3617387346883.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-ber",
    "name": "Berlin",
    "country": "Germany",
    "lat": 52.52,
    "lng": 13.405,
    "tier": 1,
    "activeListeners": 380,
    "topSongs": [
      {
        "rank": "01",
        "title": "Zeit, dass sich was dreht",
        "artist": "$OHO BANI, Herbert Grönemeyer",
        "plays": 4600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6b/ff/4d/6bff4d3b-6385-d601-52fe-7f240fcb7dd9/198391090123.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Komet",
        "artist": "Udo Lindenberg x Apache 207",
        "plays": 3900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/b1/03/b8b1031c-3b95-ef25-d9fe-d183988b48b9/196871378377.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-muc",
    "name": "Munich",
    "country": "Germany",
    "lat": 48.1351,
    "lng": 11.582,
    "tier": 2,
    "activeListeners": 260,
    "topSongs": [
      {
        "rank": "01",
        "title": "Komet",
        "artist": "Udo Lindenberg x Apache 207",
        "plays": 2700,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/b1/03/b8b1031c-3b95-ef25-d9fe-d183988b48b9/196871378377.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-ham",
    "name": "Hamburg",
    "country": "Germany",
    "lat": 53.5511,
    "lng": 9.9937,
    "tier": 2,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "Zeit, dass sich was dreht",
        "artist": "$OHO BANI",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6b/ff/4d/6bff4d3b-6385-d601-52fe-7f240fcb7dd9/198391090123.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "nl-ams",
    "name": "Amsterdam",
    "country": "Netherlands",
    "lat": 52.3676,
    "lng": 4.9041,
    "tier": 1,
    "activeListeners": 330,
    "topSongs": [
      {
        "rank": "01",
        "title": "Europapa",
        "artist": "Joost",
        "plays": 5900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/71/6a/d0/716ad0c7-1a41-fa60-6421-2cf77a28e75e/8720967005488.png/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Midnight City",
        "artist": "M83",
        "plays": 3200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "es-mad",
    "name": "Madrid",
    "country": "Spain",
    "lat": 40.4168,
    "lng": -3.7038,
    "tier": 1,
    "activeListeners": 340,
    "topSongs": [
      {
        "rank": "01",
        "title": "Potra Salvaje",
        "artist": "Isabel Aaiún",
        "plays": 4800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/80/f4/bf/80f4bf54-8c85-2e6b-0774-7096d29482f3/198500276664.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "es-bcn",
    "name": "Barcelona",
    "country": "Spain",
    "lat": 41.3879,
    "lng": 2.1699,
    "tier": 2,
    "activeListeners": 370,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor, Cris Mj",
        "plays": 3800,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "it-rom",
    "name": "Rome",
    "country": "Italy",
    "lat": 41.9028,
    "lng": 12.4964,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sesso e Samba",
        "artist": "Tony Effe, Gaia",
        "plays": 4900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a4/09/b3/a409b307-eef4-7ca1-4f36-9a2c3a3286dc/24UM1IM29199.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-mil",
    "name": "Milan",
    "country": "Italy",
    "lat": 45.4642,
    "lng": 9.19,
    "tier": 1,
    "activeListeners": 360,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sesso e Samba",
        "artist": "Tony Effe, Gaia",
        "plays": 5200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a4/09/b3/a409b307-eef4-7ca1-4f36-9a2c3a3286dc/24UM1IM29199.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "se-sto",
    "name": "Stockholm",
    "country": "Sweden",
    "lat": 59.3293,
    "lng": 18.0686,
    "tier": 1,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Bangarang",
        "artist": "Skrillex",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "no-osl",
    "name": "Oslo",
    "country": "Norway",
    "lat": 59.9139,
    "lng": 10.7522,
    "tier": 2,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Faded",
        "artist": "Alan Walker",
        "plays": 2700,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "dk-cph",
    "name": "Copenhagen",
    "country": "Denmark",
    "lat": 55.6761,
    "lng": 12.5683,
    "tier": 2,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fi-hel",
    "name": "Helsinki",
    "country": "Finland",
    "lat": 60.1699,
    "lng": 24.9384,
    "tier": 2,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "Cha Cha Cha",
        "artist": "Käärijä",
        "plays": 3200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/71/6a/d0/716ad0c7-1a41-fa60-6421-2cf77a28e75e/8720967005488.png/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "at-vie",
    "name": "Vienna",
    "country": "Austria",
    "lat": 48.2082,
    "lng": 16.3738,
    "tier": 2,
    "activeListeners": 260,
    "topSongs": [
      {
        "rank": "01",
        "title": "Zeit, dass sich was dreht",
        "artist": "$OHO BANI",
        "plays": 2500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6b/ff/4d/6bff4d3b-6385-d601-52fe-7f240fcb7dd9/198391090123.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ch-zrh",
    "name": "Zurich",
    "country": "Switzerland",
    "lat": 47.3769,
    "lng": 8.5417,
    "tier": 2,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Starboy",
        "artist": "The Weeknd ft. Daft Punk",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pl-waw",
    "name": "Warsaw",
    "country": "Poland",
    "lat": 52.2297,
    "lng": 21.0122,
    "tier": 1,
    "activeListeners": 280,
    "topSongs": [
      {
        "rank": "01",
        "title": "Chyba że z Tobą",
        "artist": "MODELKI",
        "plays": 3600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cz-prg",
    "name": "Prague",
    "country": "Czech Republic",
    "lat": 50.0755,
    "lng": 14.4378,
    "tier": 2,
    "activeListeners": 260,
    "topSongs": [
      {
        "rank": "01",
        "title": "Midnight City",
        "artist": "M83",
        "plays": 2200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "hu-bud",
    "name": "Budapest",
    "country": "Hungary",
    "lat": 47.4979,
    "lng": 19.0402,
    "tier": 2,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "gr-ath",
    "name": "Athens",
    "country": "Greece",
    "lat": 37.9838,
    "lng": 23.7275,
    "tier": 2,
    "activeListeners": 250,
    "topSongs": [
      {
        "rank": "01",
        "title": "ZARI",
        "artist": "Marina Satti",
        "plays": 3400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/80/f4/bf/80f4bf54-8c85-2e6b-0774-7096d29482f3/198500276664.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pt-lis",
    "name": "Lisbon",
    "country": "Portugal",
    "lat": 38.7223,
    "lng": -9.1393,
    "tier": 2,
    "activeListeners": 280,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor, Cris Mj",
        "plays": 2800,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ie-dub",
    "name": "Dublin",
    "country": "Ireland",
    "lat": 53.3498,
    "lng": -6.2603,
    "tier": 2,
    "activeListeners": 280,
    "topSongs": [
      {
        "rank": "01",
        "title": "Take Me To Church",
        "artist": "Hozier",
        "plays": 3600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ro-otp",
    "name": "Bucharest",
    "country": "Romania",
    "lat": 44.4268,
    "lng": 26.1025,
    "tier": 2,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "Stereo Love",
        "artist": "Edward Maya & Vika Jigulina",
        "plays": 2700,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/b1/03/b8b1031c-3b95-ef25-d9fe-d183988b48b9/196871378377.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ua-iev",
    "name": "Kyiv",
    "country": "Ukraine",
    "lat": 50.4501,
    "lng": 30.5234,
    "tier": 2,
    "activeListeners": 270,
    "topSongs": [
      {
        "rank": "01",
        "title": "Stefania",
        "artist": "Kalush Orchestra",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-tyo",
    "name": "Tokyo",
    "country": "Japan",
    "lat": 35.6762,
    "lng": 139.6503,
    "tier": 1,
    "activeListeners": 490,
    "topSongs": [
      {
        "rank": "01",
        "title": "Bling-Bang-Bang-Born",
        "artist": "Creepy Nuts",
        "plays": 6800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/12/81/dc/1281dc28-48e6-5ff7-642d-6cf4d487d9e0/4547366660890.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Idol (アイドル)",
        "artist": "YOASOBI",
        "plays": 5900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/80/7b/72/807b72ba-c71d-a09c-e74c-42b7811df42f/4580789560410.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Specialz",
        "artist": "King Gnu",
        "plays": 4600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/b1/03/b8b1031c-3b95-ef25-d9fe-d183988b48b9/196871378377.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-osa",
    "name": "Osaka",
    "country": "Japan",
    "lat": 34.6937,
    "lng": 135.5023,
    "tier": 2,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Bling-Bang-Bang-Born",
        "artist": "Creepy Nuts",
        "plays": 4100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/12/81/dc/1281dc28-48e6-5ff7-642d-6cf4d487d9e0/4547366660890.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-uky",
    "name": "Kyoto",
    "country": "Japan",
    "lat": 35.0116,
    "lng": 135.7681,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Idol",
        "artist": "YOASOBI",
        "plays": 2300,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/80/7b/72/807b72ba-c71d-a09c-e74c-42b7811df42f/4580789560410.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "kr-sel",
    "name": "Seoul",
    "country": "South Korea",
    "lat": 37.5665,
    "lng": 126.978,
    "tier": 1,
    "activeListeners": 430,
    "topSongs": [
      {
        "rank": "01",
        "title": "Supernova",
        "artist": "aespa",
        "plays": 6400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Magnetic",
        "artist": "ILLIT",
        "plays": 5600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b8/1b/c2/b81bc260-2e45-1db3-70f7-15ae71b764bb/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "How Sweet",
        "artist": "NewJeans",
        "plays": 4900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d9/3d/bf/d93dbf5e-cfcf-db5b-ebdb-167812eb1034/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "kr-pus",
    "name": "Busan",
    "country": "South Korea",
    "lat": 35.1796,
    "lng": 129.0756,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Supernova",
        "artist": "aespa",
        "plays": 3200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "sg-sin",
    "name": "Singapore",
    "country": "Singapore",
    "lat": 1.3521,
    "lng": 103.8198,
    "tier": 1,
    "activeListeners": 360,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 4500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Magnetic",
        "artist": "ILLIT",
        "plays": 3900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b8/1b/c2/b81bc260-2e45-1db3-70f7-15ae71b764bb/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "th-bkk",
    "name": "Bangkok",
    "country": "Thailand",
    "lat": 13.7563,
    "lng": 100.5018,
    "tier": 1,
    "activeListeners": 370,
    "topSongs": [
      {
        "rank": "01",
        "title": "Rockstar",
        "artist": "LISA",
        "plays": 6200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "id-jkt",
    "name": "Jakarta",
    "country": "Indonesia",
    "lat": -6.2088,
    "lng": 106.8456,
    "tier": 1,
    "activeListeners": 390,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sialan",
        "artist": "Juicy Luicy ft. Adrian Khalif",
        "plays": 4900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "id-sub",
    "name": "Surabaya",
    "country": "Indonesia",
    "lat": -7.2575,
    "lng": 112.7521,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sialan",
        "artist": "Juicy Luicy",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "id-dps",
    "name": "Bali",
    "country": "Indonesia",
    "lat": -8.4095,
    "lng": 115.1889,
    "tier": 3,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Midnight City",
        "artist": "M83",
        "plays": 2700,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "my-kul",
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "lat": 3.139,
    "lng": 101.6869,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Alamak Raya Lagi!",
        "artist": "De Fam",
        "plays": 4100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ph-mnl",
    "name": "Manila",
    "country": "Philippines",
    "lat": 14.5995,
    "lng": 120.9842,
    "tier": 1,
    "activeListeners": 380,
    "topSongs": [
      {
        "rank": "01",
        "title": "Pantropiko",
        "artist": "BINI",
        "plays": 5800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d9/3d/bf/d93dbf5e-cfcf-db5b-ebdb-167812eb1034/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Salamin, Salamin",
        "artist": "BINI",
        "plays": 5200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b8/1b/c2/b81bc260-2e45-1db3-70f7-15ae71b764bb/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "vn-sgn",
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "lat": 10.8231,
    "lng": 106.6297,
    "tier": 1,
    "activeListeners": 320,
    "topSongs": [
      {
        "rank": "01",
        "title": "Cắt Đôi Nỗi Sầu",
        "artist": "Tăng Duy Tân",
        "plays": 4200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "vn-han",
    "name": "Hanoi",
    "country": "Vietnam",
    "lat": 21.0285,
    "lng": 105.8542,
    "tier": 2,
    "activeListeners": 260,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ngày Mai Người Ta Lấy Chồng",
        "artist": "Thành Đạt",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "hk-hkg",
    "name": "Hong Kong",
    "country": "Hong Kong",
    "lat": 22.3193,
    "lng": 114.1694,
    "tier": 1,
    "activeListeners": 320,
    "topSongs": [
      {
        "rank": "01",
        "title": "Dear My Friend,",
        "artist": "Keung To",
        "plays": 3800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/80/7b/72/807b72ba-c71d-a09c-e74c-42b7811df42f/4580789560410.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "tw-tpe",
    "name": "Taipei",
    "country": "Taiwan",
    "lat": 25.033,
    "lng": 121.5654,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Red Scarf",
        "artist": "WeiBird",
        "plays": 3900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/80/7b/72/807b72ba-c71d-a09c-e74c-42b7811df42f/4580789560410.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-sha",
    "name": "Shanghai",
    "country": "China",
    "lat": 31.2304,
    "lng": 121.4737,
    "tier": 1,
    "activeListeners": 450,
    "topSongs": [
      {
        "rank": "01",
        "title": "Lonely Warrior (孤勇者)",
        "artist": "Eason Chan",
        "plays": 5400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-pek",
    "name": "Beijing",
    "country": "China",
    "lat": 39.9042,
    "lng": 116.4074,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wu Ji (无羁)",
        "artist": "Xiao Zhan, Wang Yibo",
        "plays": 4800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-ctu",
    "name": "Chengdu",
    "country": "China",
    "lat": 30.5728,
    "lng": 104.0668,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Chengdu (成都)",
        "artist": "Zhao Lei",
        "plays": 3400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ae-dxb",
    "name": "Dubai",
    "country": "United Arab Emirates",
    "lat": 25.2048,
    "lng": 55.2708,
    "tier": 1,
    "activeListeners": 360,
    "topSongs": [
      {
        "rank": "01",
        "title": "Clandestina",
        "artist": "FILV, Edmofo",
        "plays": 3840,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Habibi",
        "artist": "Ricky Rich, Dardan",
        "plays": 3110,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9c/ec/94/9cec947c-8345-16d1-c6f7-0dd1d527a412/190296404016.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Calm Down",
        "artist": "Rema ft. Selena Gomez",
        "plays": 2470,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/ec/75/59ec75eb-42b0-bf6a-38c7-48013ca1b11e/24UM1IM36412.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ae-auh",
    "name": "Abu Dhabi",
    "country": "United Arab Emirates",
    "lat": 24.4539,
    "lng": 54.3773,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Habibi",
        "artist": "Ricky Rich",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9c/ec/94/9cec947c-8345-16d1-c6f7-0dd1d527a412/190296404016.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "sa-ruh",
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "lat": 24.7136,
    "lng": 46.6753,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Albi Ya Salva",
        "artist": "Mohamed Ramadan",
        "plays": 3900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "sa-jed",
    "name": "Jeddah",
    "country": "Saudi Arabia",
    "lat": 21.5433,
    "lng": 39.1728,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Clandestina",
        "artist": "FILV",
        "plays": 2400,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "qa-doh",
    "name": "Doha",
    "country": "Qatar",
    "lat": 25.2854,
    "lng": 51.531,
    "tier": 2,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hayya Hayya",
        "artist": "Cardona, Davido, Aisha",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/ec/75/59ec75eb-42b0-bf6a-38c7-48013ca1b11e/24UM1IM36412.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "tr-ist",
    "name": "Istanbul",
    "country": "Turkey",
    "lat": 41.0082,
    "lng": 28.9784,
    "tier": 1,
    "activeListeners": 410,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ateşe Düştüm",
        "artist": "Mert Demir",
        "plays": 4900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Antidepresan",
        "artist": "Mert Demir, Mabel Matiz",
        "plays": 4100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "eg-cai",
    "name": "Cairo",
    "country": "Egypt",
    "lat": 30.0444,
    "lng": 31.2357,
    "tier": 1,
    "activeListeners": 380,
    "topSongs": [
      {
        "rank": "01",
        "title": "El Bakht",
        "artist": "Wegz",
        "plays": 4500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ma-cas",
    "name": "Casablanca",
    "country": "Morocco",
    "lat": 33.5731,
    "lng": -7.5898,
    "tier": 2,
    "activeListeners": 250,
    "topSongs": [
      {
        "rank": "01",
        "title": "Msalem",
        "artist": "ElGrandeToto",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-sao",
    "name": "São Paulo",
    "country": "Brazil",
    "lat": -23.5505,
    "lng": -46.6333,
    "tier": 1,
    "activeListeners": 440,
    "topSongs": [
      {
        "rank": "01",
        "title": "Maliciosa",
        "artist": "Ludmilla",
        "plays": 5800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/4b/31/b04b3127-d0fa-3d14-36a8-bf2b9f333dc5/190296765094.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Coração Partido",
        "artist": "Menos É Mais",
        "plays": 4900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-rio",
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "lat": -22.9068,
    "lng": -43.1729,
    "tier": 1,
    "activeListeners": 320,
    "topSongs": [
      {
        "rank": "01",
        "title": "Maliciosa",
        "artist": "Ludmilla",
        "plays": 4600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/4b/31/b04b3127-d0fa-3d14-36a8-bf2b9f333dc5/190296765094.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ar-bue",
    "name": "Buenos Aires",
    "country": "Argentina",
    "lat": -34.6037,
    "lng": -58.3816,
    "tier": 1,
    "activeListeners": 360,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor, Cris Mj",
        "plays": 5100,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "HOLA PERDIDA",
        "artist": "Luck Ra, KHEA",
        "plays": 4200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "co-bog",
    "name": "Bogotá",
    "country": "Colombia",
    "lat": 4.711,
    "lng": -74.0721,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Luna",
        "artist": "Feid, ATL Jacob",
        "plays": 4900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "co-mde",
    "name": "Medellín",
    "country": "Colombia",
    "lat": 6.2442,
    "lng": -75.5812,
    "tier": 2,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Luna",
        "artist": "Feid",
        "plays": 4100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cl-scl",
    "name": "Santiago",
    "country": "Chile",
    "lat": -33.4489,
    "lng": -70.6693,
    "tier": 1,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor, Cris Mj",
        "plays": 6900,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "pe-lim",
    "name": "Lima",
    "country": "Peru",
    "lat": -12.0464,
    "lng": -77.0428,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor, Cris Mj",
        "plays": 4600,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ng-los",
    "name": "Lagos",
    "country": "Nigeria",
    "lat": 6.5244,
    "lng": 3.3792,
    "tier": 1,
    "activeListeners": 370,
    "topSongs": [
      {
        "rank": "01",
        "title": "Calm Down",
        "artist": "Rema",
        "plays": 5400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/ec/75/59ec75eb-42b0-bf6a-38c7-48013ca1b11e/24UM1IM36412.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "City Boys",
        "artist": "Burna Boy",
        "plays": 4800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "za-jnb",
    "name": "Johannesburg",
    "country": "South Africa",
    "lat": -26.2041,
    "lng": 28.0473,
    "tier": 1,
    "activeListeners": 320,
    "topSongs": [
      {
        "rank": "01",
        "title": "Water",
        "artist": "Tyla",
        "plays": 5900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/71/58/01/715801c8-2785-5eb7-e14b-fb022b46a0c5/196871501720.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Mnike",
        "artist": "Tyler ICU, Tumelo.za",
        "plays": 4200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "za-cpt",
    "name": "Cape Town",
    "country": "South Africa",
    "lat": -33.9249,
    "lng": 18.4241,
    "tier": 2,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Water",
        "artist": "Tyla",
        "plays": 4100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/71/58/01/715801c8-2785-5eb7-e14b-fb022b46a0c5/196871501720.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ke-nbo",
    "name": "Nairobi",
    "country": "Kenya",
    "lat": -1.2921,
    "lng": 36.8219,
    "tier": 1,
    "activeListeners": 280,
    "topSongs": [
      {
        "rank": "01",
        "title": "Kuna Kuna",
        "artist": "Vic West ft. Fathermoh",
        "plays": 3400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "gh-acc",
    "name": "Accra",
    "country": "Ghana",
    "lat": 5.6037,
    "lng": -0.187,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Kwaku the Hustler",
        "artist": "Black Sherif",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "au-syd",
    "name": "Sydney",
    "country": "Australia",
    "lat": -33.8688,
    "lng": 151.2093,
    "tier": 1,
    "activeListeners": 340,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 4800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 4200,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "au-mel",
    "name": "Melbourne",
    "country": "Australia",
    "lat": -37.8136,
    "lng": 144.9631,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Good Luck, Babe!",
        "artist": "Chappell Roan",
        "plays": 4100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "au-bne",
    "name": "Brisbane",
    "country": "Australia",
    "lat": -27.4698,
    "lng": 153.0251,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "A Bar Song (Tipsy)",
        "artist": "Shaboozey",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "au-per",
    "name": "Perth",
    "country": "Australia",
    "lat": -31.9505,
    "lng": 115.8605,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Million Dollar Baby",
        "artist": "Tommy Richman",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5c/e7/39/5ce73933-8f42-1095-e84b-0caec311f54b/24CRGIM43010.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "au-adl",
    "name": "Adelaide",
    "country": "Australia",
    "lat": -34.9285,
    "lng": 138.6007,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 1800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "au-cbr",
    "name": "Canberra",
    "country": "Australia",
    "lat": -35.2809,
    "lng": 149.13,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 1400,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "au-ool",
    "name": "Gold Coast",
    "country": "Australia",
    "lat": -28.0167,
    "lng": 153.4,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "A Bar Song (Tipsy)",
        "artist": "Shaboozey",
        "plays": 1500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "nz-wlg",
    "name": "Wellington",
    "country": "New Zealand",
    "lat": -41.2865,
    "lng": 174.7762,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 1450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "nz-chc",
    "name": "Christchurch",
    "country": "New Zealand",
    "lat": -43.5321,
    "lng": 172.6362,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Good Luck, Babe!",
        "artist": "Chappell Roan",
        "plays": 1200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fj-suv",
    "name": "Suva",
    "country": "Fiji",
    "lat": -18.1416,
    "lng": 178.4419,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Island Breeze",
        "artist": "Pacific Vibes",
        "plays": 800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-szx",
    "name": "Shenzhen",
    "country": "China",
    "lat": 22.5431,
    "lng": 114.0579,
    "tier": 1,
    "activeListeners": 360,
    "topSongs": [
      {
        "rank": "01",
        "title": "Lonely Warrior",
        "artist": "Eason Chan",
        "plays": 4800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-can",
    "name": "Guangzhou",
    "country": "China",
    "lat": 23.1291,
    "lng": 113.2644,
    "tier": 1,
    "activeListeners": 340,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wu Ji",
        "artist": "Xiao Zhan",
        "plays": 4600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-hgh",
    "name": "Hangzhou",
    "country": "China",
    "lat": 30.2741,
    "lng": 120.1551,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Chengdu",
        "artist": "Zhao Lei",
        "plays": 3200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-wuh",
    "name": "Wuhan",
    "country": "China",
    "lat": 30.5928,
    "lng": 114.3055,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Lonely Warrior",
        "artist": "Eason Chan",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-xiy",
    "name": "Xi'an",
    "country": "China",
    "lat": 34.3416,
    "lng": 108.9398,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wu Ji",
        "artist": "Wang Yibo",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-ckg",
    "name": "Chongqing",
    "country": "China",
    "lat": 29.563,
    "lng": 106.5516,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Chengdu",
        "artist": "Zhao Lei",
        "plays": 3900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-yok",
    "name": "Yokohama",
    "country": "Japan",
    "lat": 35.4437,
    "lng": 139.638,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Bling-Bang-Bang-Born",
        "artist": "Creepy Nuts",
        "plays": 3200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/12/81/dc/1281dc28-48e6-5ff7-642d-6cf4d487d9e0/4547366660890.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-ngo",
    "name": "Nagoya",
    "country": "Japan",
    "lat": 35.1815,
    "lng": 136.9066,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Idol",
        "artist": "YOASOBI",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/80/7b/72/807b72ba-c71d-a09c-e74c-42b7811df42f/4580789560410.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-cts",
    "name": "Sapporo",
    "country": "Japan",
    "lat": 43.0618,
    "lng": 141.3545,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Specialz",
        "artist": "King Gnu",
        "plays": 2200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/b1/03/b8b1031c-3b95-ef25-d9fe-d183988b48b9/196871378377.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-fuk",
    "name": "Fukuoka",
    "country": "Japan",
    "lat": 33.5904,
    "lng": 130.4017,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Idol",
        "artist": "YOASOBI",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/80/7b/72/807b72ba-c71d-a09c-e74c-42b7811df42f/4580789560410.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "kr-icn",
    "name": "Incheon",
    "country": "South Korea",
    "lat": 37.4563,
    "lng": 126.7052,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Supernova",
        "artist": "aespa",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "kr-tae",
    "name": "Daegu",
    "country": "South Korea",
    "lat": 35.8714,
    "lng": 128.6014,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Magnetic",
        "artist": "ILLIT",
        "plays": 2200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b8/1b/c2/b81bc260-2e45-1db3-70f7-15ae71b764bb/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "th-cnx",
    "name": "Chiang Mai",
    "country": "Thailand",
    "lat": 18.7883,
    "lng": 98.9853,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Rockstar",
        "artist": "LISA",
        "plays": 1900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "my-pen",
    "name": "Penang",
    "country": "Malaysia",
    "lat": 5.4141,
    "lng": 100.3288,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Alamak Raya Lagi!",
        "artist": "De Fam",
        "plays": 1850,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ph-ceb",
    "name": "Cebu City",
    "country": "Philippines",
    "lat": 10.3157,
    "lng": 123.8854,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Pantropiko",
        "artist": "BINI",
        "plays": 3400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d9/3d/bf/d93dbf5e-cfcf-db5b-ebdb-167812eb1034/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "vn-dad",
    "name": "Da Nang",
    "country": "Vietnam",
    "lat": 16.0544,
    "lng": 108.2022,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Cắt Đôi Nỗi Sầu",
        "artist": "Tăng Duy Tân",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/33/c7/8e33c7f8-bc9a-b472-88f5-6677f549925e/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-bhx",
    "name": "Birmingham",
    "country": "United Kingdom",
    "lat": 52.4862,
    "lng": -1.8904,
    "tier": 2,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sprinter",
        "artist": "Dave & Central Cee",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/ce/14/27ce14e3-18c4-6dfe-f9a5-ca6e6d1c4982/artwork.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-gla",
    "name": "Glasgow",
    "country": "United Kingdom",
    "lat": 55.8642,
    "lng": -4.2518,
    "tier": 2,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "Someone You Loved",
        "artist": "Lewis Capaldi",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-lpl",
    "name": "Liverpool",
    "country": "United Kingdom",
    "lat": 53.4084,
    "lng": -2.9916,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sprinter",
        "artist": "Dave",
        "plays": 1900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/ce/14/27ce14e3-18c4-6dfe-f9a5-ca6e6d1c4982/artwork.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-brs",
    "name": "Bristol",
    "country": "United Kingdom",
    "lat": 51.4545,
    "lng": -2.5879,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Prada",
        "artist": "cassö",
        "plays": 1800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/b1/03/b8b1031c-3b95-ef25-d9fe-d183988b48b9/196871378377.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-fra",
    "name": "Frankfurt",
    "country": "Germany",
    "lat": 50.1109,
    "lng": 8.6821,
    "tier": 2,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Komet",
        "artist": "Apache 207",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/b1/03/b8b1031c-3b95-ef25-d9fe-d183988b48b9/196871378377.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-cgn",
    "name": "Cologne",
    "country": "Germany",
    "lat": 50.9375,
    "lng": 6.9603,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Zeit, dass sich was dreht",
        "artist": "$OHO BANI",
        "plays": 2500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6b/ff/4d/6bff4d3b-6385-d601-52fe-7f240fcb7dd9/198391090123.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-str",
    "name": "Stuttgart",
    "country": "Germany",
    "lat": 48.7758,
    "lng": 9.1829,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Komet",
        "artist": "Apache 207",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/b1/03/b8b1031c-3b95-ef25-d9fe-d183988b48b9/196871378377.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fr-tls",
    "name": "Toulouse",
    "country": "France",
    "lat": 43.6047,
    "lng": 1.4442,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Imagine",
        "artist": "Carbonne",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/13/27/90132717-36e6-912b-cba0-ecf4c65a045c/3617387346883.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fr-nce",
    "name": "Nice",
    "country": "France",
    "lat": 43.7102,
    "lng": 7.262,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Bande Organisée",
        "artist": "Jul",
        "plays": 1950,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/13/27/90132717-36e6-912b-cba0-ecf4c65a045c/3617387346883.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-nap",
    "name": "Naples",
    "country": "Italy",
    "lat": 40.8518,
    "lng": 14.2681,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sesso e Samba",
        "artist": "Tony Effe, Gaia",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a4/09/b3/a409b307-eef4-7ca1-4f36-9a2c3a3286dc/24UM1IM29199.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-flr",
    "name": "Florence",
    "country": "Italy",
    "lat": 43.7696,
    "lng": 11.2558,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sesso e Samba",
        "artist": "Gaia",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a4/09/b3/a409b307-eef4-7ca1-4f36-9a2c3a3286dc/24UM1IM29199.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "es-vlc",
    "name": "Valencia",
    "country": "Spain",
    "lat": 39.4699,
    "lng": -0.3763,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Potra Salvaje",
        "artist": "Isabel Aaiún",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/80/f4/bf/80f4bf54-8c85-2e6b-0774-7096d29482f3/198500276664.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "es-svq",
    "name": "Seville",
    "country": "Spain",
    "lat": 37.3891,
    "lng": -5.9845,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "Cris Mj",
        "plays": 2300,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "be-bru",
    "name": "Brussels",
    "country": "Belgium",
    "lat": 50.8503,
    "lng": 4.3517,
    "tier": 2,
    "activeListeners": 270,
    "topSongs": [
      {
        "rank": "01",
        "title": "Papaoutai",
        "artist": "Stromae",
        "plays": 3200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ch-gva",
    "name": "Geneva",
    "country": "Switzerland",
    "lat": 46.2044,
    "lng": 6.1432,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Starboy",
        "artist": "The Weeknd",
        "plays": 2200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pt-opo",
    "name": "Porto",
    "country": "Portugal",
    "lat": 41.1579,
    "lng": -8.6291,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor",
        "plays": 2100,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "pl-krk",
    "name": "Krakow",
    "country": "Poland",
    "lat": 50.0647,
    "lng": 19.945,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Chyba że z Tobą",
        "artist": "MODELKI",
        "plays": 2300,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "kw-kwi",
    "name": "Kuwait City",
    "country": "Kuwait",
    "lat": 29.3759,
    "lng": 47.9774,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Albi Ya Salva",
        "artist": "Mohamed Ramadan",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "bh-bah",
    "name": "Manama",
    "country": "Bahrain",
    "lat": 26.2285,
    "lng": 50.586,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Habibi",
        "artist": "Ricky Rich",
        "plays": 1600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9c/ec/94/9cec947c-8345-16d1-c6f7-0dd1d527a412/190296404016.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "om-mct",
    "name": "Muscat",
    "country": "Oman",
    "lat": 23.588,
    "lng": 58.3829,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Clandestina",
        "artist": "FILV",
        "plays": 1750,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "lb-bey",
    "name": "Beirut",
    "country": "Lebanon",
    "lat": 33.8938,
    "lng": 35.5018,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Habibi",
        "artist": "Ricky Rich",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9c/ec/94/9cec947c-8345-16d1-c6f7-0dd1d527a412/190296404016.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jo-amm",
    "name": "Amman",
    "country": "Jordan",
    "lat": 31.9454,
    "lng": 35.9284,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "El Bakht",
        "artist": "Wegz",
        "plays": 2200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "az-bak",
    "name": "Baku",
    "country": "Azerbaijan",
    "lat": 40.4093,
    "lng": 49.8671,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Antidepresan",
        "artist": "Mabel Matiz",
        "plays": 1800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-sjc",
    "name": "San Jose",
    "country": "United States",
    "lat": 37.3382,
    "lng": -121.8863,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Midnight City",
        "artist": "M83",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cb/7b/a9/cb7ba903-b5f1-cc21-90db-7a81b7aa0997/724596951057.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-san",
    "name": "San Diego",
    "country": "United States",
    "lat": 32.7157,
    "lng": -117.1611,
    "tier": 2,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 2900,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "us-jax",
    "name": "Jacksonville",
    "country": "United States",
    "lat": 30.3322,
    "lng": -81.6557,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Last Night",
        "artist": "Morgan Wallen",
        "plays": 1900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-clt",
    "name": "Charlotte",
    "country": "United States",
    "lat": 35.2271,
    "lng": -80.8431,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "A Bar Song (Tipsy)",
        "artist": "Shaboozey",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-ind",
    "name": "Indianapolis",
    "country": "United States",
    "lat": 39.7684,
    "lng": -86.1581,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "I Had Some Help",
        "artist": "Post Malone",
        "plays": 1850,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-cmh",
    "name": "Columbus",
    "country": "United States",
    "lat": 39.9612,
    "lng": -82.9988,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 1800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-mci",
    "name": "Kansas City",
    "country": "United States",
    "lat": 39.0997,
    "lng": -94.5786,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Stick Season",
        "artist": "Noah Kahan",
        "plays": 1650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-cle",
    "name": "Cleveland",
    "country": "United States",
    "lat": 41.4993,
    "lng": -81.6944,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Sunflower",
        "artist": "Post Malone",
        "plays": 1600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-pit",
    "name": "Pittsburgh",
    "country": "United States",
    "lat": 40.4406,
    "lng": -79.9959,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Black and Yellow",
        "artist": "Wiz Khalifa",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-tpa",
    "name": "Tampa",
    "country": "United States",
    "lat": 27.9506,
    "lng": -82.4572,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 2300,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-mco",
    "name": "Orlando",
    "country": "United States",
    "lat": 28.5383,
    "lng": -81.3792,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Million Dollar Baby",
        "artist": "Tommy Richman",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5c/e7/39/5ce73933-8f42-1095-e84b-0caec311f54b/24CRGIM43010.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-stl",
    "name": "St. Louis",
    "country": "United States",
    "lat": 38.627,
    "lng": -90.1994,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Carnival",
        "artist": "Kanye West",
        "plays": 1700,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-bwi",
    "name": "Baltimore",
    "country": "United States",
    "lat": 39.2904,
    "lng": -76.6122,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 1950,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ca-yeg",
    "name": "Edmonton",
    "country": "Canada",
    "lat": 53.5461,
    "lng": -113.4938,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "One Dance",
        "artist": "Drake",
        "plays": 1600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ca-ywg",
    "name": "Winnipeg",
    "country": "Canada",
    "lat": 49.8951,
    "lng": -97.1384,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Stick Season",
        "artist": "Noah Kahan",
        "plays": 1400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ca-yqb",
    "name": "Quebec City",
    "country": "Canada",
    "lat": 46.8139,
    "lng": -71.208,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Papaoutai",
        "artist": "Stromae",
        "plays": 1500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "mx-pbc",
    "name": "Puebla",
    "country": "Mexico",
    "lat": 19.0414,
    "lng": -98.2063,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ella Baila Sola",
        "artist": "Peso Pluma",
        "plays": 1800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "mx-tij",
    "name": "Tijuana",
    "country": "Mexico",
    "lat": 32.5149,
    "lng": -117.0382,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor",
        "plays": 2500,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "br-bsb",
    "name": "Brasília",
    "country": "Brazil",
    "lat": -15.8267,
    "lng": -47.9218,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Maliciosa",
        "artist": "Ludmilla",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/4b/31/b04b3127-d0fa-3d14-36a8-bf2b9f333dc5/190296765094.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-ssa",
    "name": "Salvador",
    "country": "Brazil",
    "lat": -12.9777,
    "lng": -38.5016,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Coração Partido",
        "artist": "Menos É Mais",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-cnf",
    "name": "Belo Horizonte",
    "country": "Brazil",
    "lat": -19.9167,
    "lng": -43.9345,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Maliciosa",
        "artist": "Ludmilla",
        "plays": 2700,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/4b/31/b04b3127-d0fa-3d14-36a8-bf2b9f333dc5/190296765094.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-cwb",
    "name": "Curitiba",
    "country": "Brazil",
    "lat": -25.4284,
    "lng": -49.2733,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Coração Partido",
        "artist": "Menos É Mais",
        "plays": 2500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-poa",
    "name": "Porto Alegre",
    "country": "Brazil",
    "lat": -30.0346,
    "lng": -51.2177,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Maliciosa",
        "artist": "Ludmilla",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/4b/31/b04b3127-d0fa-3d14-36a8-bf2b9f333dc5/190296765094.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-rec",
    "name": "Recife",
    "country": "Brazil",
    "lat": -8.0476,
    "lng": -34.877,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Coração Partido",
        "artist": "Menos É Mais",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-mao",
    "name": "Manaus",
    "country": "Brazil",
    "lat": -3.119,
    "lng": -60.0217,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Maliciosa",
        "artist": "Ludmilla",
        "plays": 1900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/4b/31/b04b3127-d0fa-3d14-36a8-bf2b9f333dc5/190296765094.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ar-cor",
    "name": "Córdoba",
    "country": "Argentina",
    "lat": -31.4201,
    "lng": -64.1888,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "HOLA PERDIDA",
        "artist": "Luck Ra",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ar-ros",
    "name": "Rosario",
    "country": "Argentina",
    "lat": -32.9468,
    "lng": -60.6393,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "Cris Mj",
        "plays": 2300,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "co-clo",
    "name": "Cali",
    "country": "Colombia",
    "lat": 3.4516,
    "lng": -76.532,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Luna",
        "artist": "Feid",
        "plays": 2900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "co-baq",
    "name": "Barranquilla",
    "country": "Colombia",
    "lat": 10.9685,
    "lng": -74.7813,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Luna",
        "artist": "Feid",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pe-cuz",
    "name": "Cusco",
    "country": "Peru",
    "lat": -13.5319,
    "lng": -71.9675,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor",
        "plays": 1500,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ec-uio",
    "name": "Quito",
    "country": "Ecuador",
    "lat": -0.1807,
    "lng": -78.4678,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Luna",
        "artist": "Feid",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ec-gye",
    "name": "Guayaquil",
    "country": "Ecuador",
    "lat": -2.1894,
    "lng": -79.8891,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "Cris Mj",
        "plays": 2350,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ve-ccs",
    "name": "Caracas",
    "country": "Venezuela",
    "lat": 10.4806,
    "lng": -66.9036,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Luna",
        "artist": "Feid",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uy-mvd",
    "name": "Montevideo",
    "country": "Uruguay",
    "lat": -34.9011,
    "lng": -56.1645,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "HOLA PERDIDA",
        "artist": "Luck Ra",
        "plays": 2200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "py-asu",
    "name": "Asunción",
    "country": "Paraguay",
    "lat": -25.2637,
    "lng": -57.5759,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor",
        "plays": 1700,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "bo-lpz",
    "name": "La Paz",
    "country": "Bolivia",
    "lat": -16.4897,
    "lng": -68.1193,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gata Only",
        "artist": "FloyyMenor",
        "plays": 1800,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "pa-pty",
    "name": "Panama City",
    "country": "Panama",
    "lat": 8.9824,
    "lng": -79.5199,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Luna",
        "artist": "Feid",
        "plays": 2300,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cr-sjo",
    "name": "San José",
    "country": "Costa Rica",
    "lat": 9.9281,
    "lng": -84.0907,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Luna",
        "artist": "Feid",
        "plays": 1950,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pr-sju",
    "name": "San Juan",
    "country": "Puerto Rico",
    "lat": 18.4655,
    "lng": -66.1057,
    "tier": 1,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "MONACO",
        "artist": "Bad Bunny",
        "plays": 4900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/43/45/2b43453b-e854-c923-01ee-c3cf2c9545ce/197188730994.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "eg-aly",
    "name": "Alexandria",
    "country": "Egypt",
    "lat": 31.2001,
    "lng": 29.9187,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "El Bakht",
        "artist": "Wegz",
        "plays": 2700,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "za-dur",
    "name": "Durban",
    "country": "South Africa",
    "lat": -29.8587,
    "lng": 31.0218,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Water",
        "artist": "Tyla",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/71/58/01/715801c8-2785-5eb7-e14b-fb022b46a0c5/196871501720.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "za-pry",
    "name": "Pretoria",
    "country": "South Africa",
    "lat": -25.7479,
    "lng": 28.2293,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Mnike",
        "artist": "Tyler ICU",
        "plays": 2200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ng-abv",
    "name": "Abuja",
    "country": "Nigeria",
    "lat": 9.0765,
    "lng": 7.3986,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "City Boys",
        "artist": "Burna Boy",
        "plays": 2800,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ke-mba",
    "name": "Mombasa",
    "country": "Kenya",
    "lat": -4.0435,
    "lng": 39.6682,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Kuna Kuna",
        "artist": "Vic West",
        "plays": 1650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "et-add",
    "name": "Addis Ababa",
    "country": "Ethiopia",
    "lat": 9.032,
    "lng": 38.748,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Tizita",
        "artist": "Teddy Afro",
        "plays": 2400,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ma-rak",
    "name": "Marrakech",
    "country": "Morocco",
    "lat": 31.6295,
    "lng": -7.9811,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Msalem",
        "artist": "ElGrandeToto",
        "plays": 1950,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "tn-tun",
    "name": "Tunis",
    "country": "Tunisia",
    "lat": 36.8065,
    "lng": 10.1815,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Clandestina",
        "artist": "FILV",
        "plays": 2150,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "dz-alg",
    "name": "Algiers",
    "country": "Algeria",
    "lat": 36.7538,
    "lng": 3.0588,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Albi Ya Salva",
        "artist": "Mohamed Ramadan",
        "plays": 2200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "sn-dkr",
    "name": "Dakar",
    "country": "Senegal",
    "lat": 14.7167,
    "lng": -17.4677,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Calm Down",
        "artist": "Rema",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/ec/75/59ec75eb-42b0-bf6a-38c7-48013ca1b11e/24UM1IM36412.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ci-abj",
    "name": "Abidjan",
    "country": "Ivory Coast",
    "lat": 5.36,
    "lng": -4.0083,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Coup du Marteau",
        "artist": "Tam Sir",
        "plays": 2500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "tz-dar",
    "name": "Dar es Salaam",
    "country": "Tanzania",
    "lat": -6.7924,
    "lng": 39.2083,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Yatapita",
        "artist": "Diamond Platnumz",
        "plays": 2600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ug-ebb",
    "name": "Kampala",
    "country": "Uganda",
    "lat": 0.3476,
    "lng": 32.5825,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Kuna Kuna",
        "artist": "Vic West",
        "plays": 1900,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/71/e1/0d71e195-c342-e4cb-d1c7-d9a837434a32/6281130217887.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "rw-kgl",
    "name": "Kigali",
    "country": "Rwanda",
    "lat": -1.9706,
    "lng": 30.1044,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Calm Down",
        "artist": "Rema",
        "plays": 1600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/ec/75/59ec75eb-42b0-bf6a-38c7-48013ca1b11e/24UM1IM36412.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ao-lad",
    "name": "Luanda",
    "country": "Angola",
    "lat": -8.839,
    "lng": 13.2894,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Water",
        "artist": "Tyla",
        "plays": 2100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/71/58/01/715801c8-2785-5eb7-e14b-fb022b46a0c5/196871501720.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "zw-hre",
    "name": "Harare",
    "country": "Zimbabwe",
    "lat": -17.8252,
    "lng": 31.0335,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Jerusalema",
        "artist": "Master KG",
        "plays": 1750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a9/8e/78/a98e782c-0524-08e5-dd69-1543ba2f1d2b/190295179199.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-mow",
    "name": "Moscow",
    "country": "Russia",
    "lat": 55.7558,
    "lng": 37.6173,
    "tier": 1,
    "activeListeners": 410,
    "topSongs": [
      {
        "rank": "01",
        "title": "ASPHALT 8",
        "artist": "MACAN",
        "plays": 4890,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Царица",
        "artist": "ANNA ASTI",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "I Got Love",
        "artist": "Miyagi & Andy Panda",
        "plays": 3650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Где прошла ты",
        "artist": "Кравц & Гио Пика",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/ce/14/27ce14e3-18c4-6dfe-f9a5-ca6e6d1c4982/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "По барам",
        "artist": "ANNA ASTI",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-led",
    "name": "Saint Petersburg",
    "country": "Russia",
    "lat": 59.9343,
    "lng": 30.3351,
    "tier": 1,
    "activeListeners": 340,
    "topSongs": [
      {
        "rank": "01",
        "title": "Город под подошвой",
        "artist": "Oxxxymiron",
        "plays": 3950,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "I Got Love",
        "artist": "Miyagi & Andy Panda",
        "plays": 3200,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Minor",
        "artist": "Miyagi & Andy Panda",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "ASPHALT 8",
        "artist": "MACAN",
        "plays": 2100,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ru-ovb",
    "name": "Novosibirsk",
    "country": "Russia",
    "lat": 55.0084,
    "lng": 82.9357,
    "tier": 2,
    "activeListeners": 195,
    "topSongs": [
      {
        "rank": "01",
        "title": "ASPHALT 8",
        "artist": "MACAN",
        "plays": 2340,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Царица",
        "artist": "ANNA ASTI",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-svx",
    "name": "Yekaterinburg",
    "country": "Russia",
    "lat": 56.8389,
    "lng": 60.6057,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "I Got Love",
        "artist": "Miyagi & Andy Panda",
        "plays": 2210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-kzn",
    "name": "Kazan",
    "country": "Russia",
    "lat": 55.7887,
    "lng": 49.1221,
    "tier": 2,
    "activeListeners": 165,
    "topSongs": [
      {
        "rank": "01",
        "title": "Пыяла",
        "artist": "АИГЕЛ (AIGEL)",
        "plays": 3100,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-goj",
    "name": "Nizhny Novgorod",
    "country": "Russia",
    "lat": 56.3269,
    "lng": 44.0059,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "ASPHALT 8",
        "artist": "MACAN",
        "plays": 1540,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ru-kuf",
    "name": "Samara",
    "country": "Russia",
    "lat": 53.1959,
    "lng": 50.1002,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Где прошла ты",
        "artist": "Кравц & Гио Пика",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/ce/14/27ce14e3-18c4-6dfe-f9a5-ca6e6d1c4982/artwork.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-oms",
    "name": "Omsk",
    "country": "Russia",
    "lat": 54.9885,
    "lng": 73.3242,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Царица",
        "artist": "ANNA ASTI",
        "plays": 1380,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-cek",
    "name": "Chelyabinsk",
    "country": "Russia",
    "lat": 55.1644,
    "lng": 61.4368,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "ASPHALT 8",
        "artist": "MACAN",
        "plays": 1410,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ru-rov",
    "name": "Rostov-on-Don",
    "country": "Russia",
    "lat": 47.2357,
    "lng": 39.7015,
    "tier": 2,
    "activeListeners": 155,
    "topSongs": [
      {
        "rank": "01",
        "title": "Сансара",
        "artist": "Баста",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/ce/14/27ce14e3-18c4-6dfe-f9a5-ca6e6d1c4982/artwork.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-ufa",
    "name": "Ufa",
    "country": "Russia",
    "lat": 54.7388,
    "lng": 55.9721,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "I Got Love",
        "artist": "Miyagi & Andy Panda",
        "plays": 1390,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-kja",
    "name": "Krasnoyarsk",
    "country": "Russia",
    "lat": 56.0153,
    "lng": 92.8932,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "ASPHALT 8",
        "artist": "MACAN",
        "plays": 1290,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ru-vvo",
    "name": "Vladivostok",
    "country": "Russia",
    "lat": 43.1155,
    "lng": 131.8855,
    "tier": 2,
    "activeListeners": 140,
    "topSongs": [
      {
        "rank": "01",
        "title": "Владивосток 2000",
        "artist": "Мумий Тролль",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/ce/14/27ce14e3-18c4-6dfe-f9a5-ca6e6d1c4982/artwork.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-ikt",
    "name": "Irkutsk",
    "country": "Russia",
    "lat": 52.287,
    "lng": 104.305,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "I Got Love",
        "artist": "Miyagi & Andy Panda",
        "plays": 1150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-khv",
    "name": "Khabarovsk",
    "country": "Russia",
    "lat": 48.4827,
    "lng": 135.0838,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Царица",
        "artist": "ANNA ASTI",
        "plays": 1180,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-kgd",
    "name": "Kaliningrad",
    "country": "Russia",
    "lat": 54.7104,
    "lng": 20.4522,
    "tier": 2,
    "activeListeners": 120,
    "topSongs": [
      {
        "rank": "01",
        "title": "Город под подошвой",
        "artist": "Oxxxymiron",
        "plays": 1650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-aer",
    "name": "Sochi",
    "country": "Russia",
    "lat": 43.6028,
    "lng": 39.7342,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "ASPHALT 8",
        "artist": "MACAN",
        "plays": 1100,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ru-vog",
    "name": "Volgograd",
    "country": "Russia",
    "lat": 48.708,
    "lng": 44.5133,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Где прошла ты",
        "artist": "Кравц & Гио Пика",
        "plays": 1050,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/27/ce/14/27ce14e3-18c4-6dfe-f9a5-ca6e6d1c4982/artwork.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-vrn",
    "name": "Voronezh",
    "country": "Russia",
    "lat": 51.672,
    "lng": 39.1843,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "I Got Love",
        "artist": "Miyagi & Andy Panda",
        "plays": 1020,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-pee",
    "name": "Perm",
    "country": "Russia",
    "lat": 58.0105,
    "lng": 56.2502,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "ASPHALT 8",
        "artist": "MACAN",
        "plays": 980,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ru-yks",
    "name": "Yakutsk",
    "country": "Russia",
    "lat": 62.0355,
    "lng": 129.6755,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Северное Сияние",
        "artist": "Jeada",
        "plays": 890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ru-mmk",
    "name": "Murmansk",
    "country": "Russia",
    "lat": 68.9585,
    "lng": 33.0827,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "ASPHALT 8",
        "artist": "MACAN",
        "plays": 840,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "kz-ala",
    "name": "Almaty",
    "country": "Kazakhstan",
    "lat": 43.222,
    "lng": 76.8512,
    "tier": 1,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "It is my life",
        "artist": "De Lacure",
        "plays": 2500,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "kz-ast",
    "name": "Astana",
    "country": "Kazakhstan",
    "lat": 51.1694,
    "lng": 71.4491,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Pikachu",
        "artist": "MIA BOYKA",
        "plays": 1800,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "uz-tas",
    "name": "Tashkent",
    "country": "Uzbekistan",
    "lat": 41.2995,
    "lng": 69.2401,
    "tier": 1,
    "activeListeners": 195,
    "topSongs": [
      {
        "rank": "01",
        "title": "Yomgʻir",
        "artist": "Shohruhxon",
        "plays": 2200,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "uz-skd",
    "name": "Samarkand",
    "country": "Uzbekistan",
    "lat": 39.627,
    "lng": 66.975,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Yomgʻir",
        "artist": "Shohruhxon",
        "plays": 1200,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "kg-fru",
    "name": "Bishkek",
    "country": "Kyrgyzstan",
    "lat": 42.8746,
    "lng": 74.5698,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Суйуу балы",
        "artist": "Mirbek Atabekov",
        "plays": 1400,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ge-tbs",
    "name": "Tbilisi",
    "country": "Georgia",
    "lat": 41.7151,
    "lng": 44.8271,
    "tier": 2,
    "activeListeners": 150,
    "topSongs": [
      {
        "rank": "01",
        "title": "Suliko",
        "artist": "Mgzavrebi",
        "plays": 1900,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "am-evn",
    "name": "Yerevan",
    "country": "Armenia",
    "lat": 40.1792,
    "lng": 44.4991,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Qele Qele",
        "artist": "Sirusho",
        "plays": 1600,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "by-msq",
    "name": "Minsk",
    "country": "Belarus",
    "lat": 53.9045,
    "lng": 27.5615,
    "tier": 1,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Грустный дэнс",
        "artist": "Artik & Asti",
        "plays": 2600,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "rs-beg",
    "name": "Belgrade",
    "country": "Serbia",
    "lat": 44.7866,
    "lng": 20.4489,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Dam Dam Dam",
        "artist": "Tea Tairovic",
        "plays": 2100,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "hr-zag",
    "name": "Zagreb",
    "country": "Croatia",
    "lat": 45.815,
    "lng": 15.9819,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Rim Tim Tagi Dim",
        "artist": "Baby Lasagna",
        "plays": 2900,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "bg-sof",
    "name": "Sofia",
    "country": "Bulgaria",
    "lat": 42.6977,
    "lng": 23.3219,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Habibi",
        "artist": "Azis",
        "plays": 2200,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "sk-bts",
    "name": "Bratislava",
    "country": "Slovakia",
    "lat": 48.1486,
    "lng": 17.1077,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Nemožem dýchať",
        "artist": "Separ",
        "plays": 1700,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "lt-vno",
    "name": "Vilnius",
    "country": "Lithuania",
    "lat": 54.6872,
    "lng": 25.2797,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Luktelk",
        "artist": "Silvester Belt",
        "plays": 2300,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "lv-rix",
    "name": "Riga",
    "country": "Latvia",
    "lat": 56.9496,
    "lng": 24.1052,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hollow",
        "artist": "Dons",
        "plays": 1800,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ee-tll",
    "name": "Tallinn",
    "country": "Estonia",
    "lat": 59.437,
    "lng": 24.7536,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "(nendest) narkootikumidest",
        "artist": "5MIINUST x Puuluup",
        "plays": 2100,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "is-kef",
    "name": "Reykjavik",
    "country": "Iceland",
    "lat": 64.1466,
    "lng": -21.9426,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hoppípolla",
        "artist": "Sigur Rós",
        "plays": 1900,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "il-tlv",
    "name": "Tel Aviv",
    "country": "Israel",
    "lat": 32.0853,
    "lng": 34.7818,
    "tier": 1,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hurricane",
        "artist": "Eden Golan",
        "plays": 3100,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "il-jrs",
    "name": "Jerusalem",
    "country": "Israel",
    "lat": 31.7683,
    "lng": 35.2137,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Golden Boy",
        "artist": "Nadav Guedj",
        "plays": 1800,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "ir-thr",
    "name": "Tehran",
    "country": "Iran",
    "lat": 35.6892,
    "lng": 51.389,
    "tier": 1,
    "activeListeners": 270,
    "topSongs": [
      {
        "rank": "01",
        "title": "Baraye",
        "artist": "Shervin Hajipour",
        "plays": 3600,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "iq-bgw",
    "name": "Baghdad",
    "country": "Iraq",
    "lat": 33.3152,
    "lng": 44.3661,
    "tier": 1,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "Taal",
        "artist": "Ali Jassim",
        "plays": 2800,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "mn-uln",
    "name": "Ulaanbaatar",
    "country": "Mongolia",
    "lat": 47.8864,
    "lng": 106.9057,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Yuve Yuve Yu",
        "artist": "The HU",
        "plays": 2600,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "mm-rgn",
    "name": "Yangon",
    "country": "Myanmar",
    "lat": 16.8661,
    "lng": 96.1951,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "A May Chay",
        "artist": "Sai Sai Kham Leng",
        "plays": 1900,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "kh-pnh",
    "name": "Phnom Penh",
    "country": "Cambodia",
    "lat": 11.5564,
    "lng": 104.9282,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Time to Rise",
        "artist": "VannDa",
        "plays": 2800,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "do-sdq",
    "name": "Santo Domingo",
    "country": "Dominican Republic",
    "lat": 18.4861,
    "lng": -69.9312,
    "tier": 2,
    "activeListeners": 190,
    "topSongs": [
      {
        "rank": "01",
        "title": "El Motorista",
        "artist": "El Alfa",
        "plays": 2700,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "gt-gua",
    "name": "Guatemala City",
    "country": "Guatemala",
    "lat": 14.6349,
    "lng": -90.5069,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fuiste Tú",
        "artist": "Ricardo Arjona",
        "plays": 2200,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "cu-hav",
    "name": "Havana",
    "country": "Cuba",
    "lat": 23.1136,
    "lng": -82.3666,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Patria y Vida",
        "artist": "Yotuel",
        "plays": 2100,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "jm-kin",
    "name": "Kingston",
    "country": "Jamaica",
    "lat": 17.9712,
    "lng": -76.7936,
    "tier": 2,
    "activeListeners": 170,
    "topSongs": [
      {
        "rank": "01",
        "title": "Toast",
        "artist": "Koffee",
        "plays": 2900,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "cd-fih",
    "name": "Kinshasa",
    "country": "DR Congo",
    "lat": -4.4419,
    "lng": 15.2663,
    "tier": 1,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "Bloqué",
        "artist": "Fally Ipupa",
        "plays": 3200,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "cm-dla",
    "name": "Douala",
    "country": "Cameroon",
    "lat": 4.0511,
    "lng": 9.7679,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Coller la Petite",
        "artist": "Franko",
        "plays": 2000,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "zm-lun",
    "name": "Lusaka",
    "country": "Zambia",
    "lat": -15.3875,
    "lng": 28.3228,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Chanda Na Kay",
        "artist": "Bella",
        "plays": 1700,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "na-wdh",
    "name": "Windhoek",
    "country": "Namibia",
    "lat": -22.5609,
    "lng": 17.0658,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Water",
        "artist": "Tyla",
        "plays": 1600,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/71/58/01/715801c8-2785-5eb7-e14b-fb022b46a0c5/196871501720.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "mg-tnr",
    "name": "Antananarivo",
    "country": "Madagascar",
    "lat": -18.8792,
    "lng": 47.5079,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Malaso",
        "artist": "Wawa",
        "plays": 1500,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": "in-tna",
    "name": "Thane",
    "country": "India",
    "lat": 19.2183,
    "lng": 72.9781,
    "tier": 2,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-kld",
    "name": "Kalyan-Dombivli",
    "country": "India",
    "lat": 19.2403,
    "lng": 73.1305,
    "tier": 2,
    "activeListeners": 160,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-vsv",
    "name": "Vasai-Virar",
    "country": "India",
    "lat": 19.4259,
    "lng": 72.8225,
    "tier": 2,
    "activeListeners": 130,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-aur",
    "name": "Chhatrapati Sambhajinagar",
    "country": "India",
    "lat": 19.8762,
    "lng": 75.3433,
    "tier": 2,
    "activeListeners": 125,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-nvm",
    "name": "Navi Mumbai",
    "country": "India",
    "lat": 19.033,
    "lng": 73.0297,
    "tier": 2,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-slp",
    "name": "Solapur",
    "country": "India",
    "lat": 17.6599,
    "lng": 75.9064,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mrb",
    "name": "Mira-Bhayandar",
    "country": "India",
    "lat": 19.2813,
    "lng": 72.8561,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bwd",
    "name": "Bhiwandi",
    "country": "India",
    "lat": 19.2813,
    "lng": 73.0483,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-amr",
    "name": "Amravati",
    "country": "India",
    "lat": 20.9374,
    "lng": 77.7796,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-nde",
    "name": "Nanded",
    "country": "India",
    "lat": 19.1383,
    "lng": 77.321,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-klh",
    "name": "Kolhapur",
    "country": "India",
    "lat": 16.705,
    "lng": 74.2433,
    "tier": 2,
    "activeListeners": 110,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-akl",
    "name": "Akola",
    "country": "India",
    "lat": 20.7002,
    "lng": 77.0082,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-pnv",
    "name": "Panvel",
    "country": "India",
    "lat": 18.9894,
    "lng": 73.1175,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ulh",
    "name": "Ulhasnagar",
    "country": "India",
    "lat": 19.2215,
    "lng": 73.1645,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-sgl",
    "name": "Sangli",
    "country": "India",
    "lat": 16.8524,
    "lng": 74.5815,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mlg",
    "name": "Malegaon",
    "country": "India",
    "lat": 20.5579,
    "lng": 74.5287,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-jlg",
    "name": "Jalgaon",
    "country": "India",
    "lat": 21.0077,
    "lng": 75.5626,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ltr",
    "name": "Latur",
    "country": "India",
    "lat": 18.4088,
    "lng": 76.5604,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-dhl",
    "name": "Dhule",
    "country": "India",
    "lat": 20.9042,
    "lng": 74.7749,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-anr",
    "name": "Ahmednagar",
    "country": "India",
    "lat": 19.0952,
    "lng": 74.7496,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-chd",
    "name": "Chandrapur",
    "country": "India",
    "lat": 19.9615,
    "lng": 79.2961,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Gulabachi Kali",
        "artist": "Ajay-Atul",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Zingaat",
        "artist": "Ajay-Atul",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/10/d8/1b/10d81b24-b1c7-c50e-55c3-b09e25d2729a/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ndl",
    "name": "New Delhi",
    "country": "India",
    "lat": 28.6139,
    "lng": 77.209,
    "tier": 1,
    "activeListeners": 360,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ggn",
    "name": "Gurugram",
    "country": "India",
    "lat": 28.4595,
    "lng": 77.0266,
    "tier": 1,
    "activeListeners": 340,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-noid",
    "name": "Noida",
    "country": "India",
    "lat": 28.5355,
    "lng": 77.391,
    "tier": 2,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-fdb",
    "name": "Faridabad",
    "country": "India",
    "lat": 28.4089,
    "lng": 77.3178,
    "tier": 2,
    "activeListeners": 160,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-gzb",
    "name": "Ghaziabad",
    "country": "India",
    "lat": 28.6692,
    "lng": 77.4538,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-pnp",
    "name": "Panipat",
    "country": "India",
    "lat": 29.3909,
    "lng": 76.9635,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-amb",
    "name": "Ambala",
    "country": "India",
    "lat": 30.3782,
    "lng": 76.7767,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ymn",
    "name": "Yamunanagar",
    "country": "India",
    "lat": 30.129,
    "lng": 77.2674,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-rtk",
    "name": "Rohtak",
    "country": "India",
    "lat": 28.8955,
    "lng": 76.6066,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-hsr",
    "name": "Hisar",
    "country": "India",
    "lat": 29.1492,
    "lng": 75.7217,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-knl",
    "name": "Karnal",
    "country": "India",
    "lat": 29.6857,
    "lng": 76.9905,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-snp",
    "name": "Sonipat",
    "country": "India",
    "lat": 28.9931,
    "lng": 77.0151,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-pck",
    "name": "Panchkula",
    "country": "India",
    "lat": 30.6942,
    "lng": 76.8606,
    "tier": 3,
    "activeListeners": 110,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ldh",
    "name": "Ludhiana",
    "country": "India",
    "lat": 30.901,
    "lng": 75.8573,
    "tier": 2,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-jln",
    "name": "Jalandhar",
    "country": "India",
    "lat": 31.326,
    "lng": 75.5762,
    "tier": 2,
    "activeListeners": 165,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ptl",
    "name": "Patiala",
    "country": "India",
    "lat": 30.3398,
    "lng": 76.3869,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bti",
    "name": "Bathinda",
    "country": "India",
    "lat": 30.211,
    "lng": 74.9455,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-moh",
    "name": "Mohali",
    "country": "India",
    "lat": 30.7046,
    "lng": 76.7179,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-hsp",
    "name": "Hoshiarpur",
    "country": "India",
    "lat": 31.5273,
    "lng": 75.9149,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ptk",
    "name": "Pathankot",
    "country": "India",
    "lat": 32.2689,
    "lng": 75.6496,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Wavy",
        "artist": "Karan Aujla",
        "plays": 4210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Winning Speech",
        "artist": "Karan Aujla",
        "plays": 3670,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Softly",
        "artist": "Karan Aujla x Ikky",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Tauba Tauba",
        "artist": "Karan Aujla",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "With You",
        "artist": "AP Dhillon",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mys",
    "name": "Mysuru",
    "country": "India",
    "lat": 12.2958,
    "lng": 76.6394,
    "tier": 2,
    "activeListeners": 140,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-hbk",
    "name": "Hubballi-Dharwad",
    "country": "India",
    "lat": 15.3647,
    "lng": 75.124,
    "tier": 2,
    "activeListeners": 125,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ixe",
    "name": "Mangaluru",
    "country": "India",
    "lat": 12.9141,
    "lng": 74.856,
    "tier": 2,
    "activeListeners": 160,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ixg",
    "name": "Belagavi",
    "country": "India",
    "lat": 15.8497,
    "lng": 74.4977,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-gbg",
    "name": "Kalaburagi",
    "country": "India",
    "lat": 17.3297,
    "lng": 76.8343,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-dvg",
    "name": "Davanagere",
    "country": "India",
    "lat": 14.4644,
    "lng": 75.9218,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bly",
    "name": "Ballari",
    "country": "India",
    "lat": 15.1394,
    "lng": 76.9214,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-smg",
    "name": "Shivamogga",
    "country": "India",
    "lat": 13.9299,
    "lng": 75.5681,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-tmk",
    "name": "Tumakuru",
    "country": "India",
    "lat": 13.3379,
    "lng": 77.1173,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Singara Siriye",
        "artist": "Vijay Prakash",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Dwapaara",
        "artist": "Jaskaran Singh",
        "plays": 2750,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ixm",
    "name": "Madurai",
    "country": "India",
    "lat": 9.9252,
    "lng": 78.1198,
    "tier": 2,
    "activeListeners": 140,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-trz",
    "name": "Tiruchirappalli",
    "country": "India",
    "lat": 10.7905,
    "lng": 78.7047,
    "tier": 2,
    "activeListeners": 130,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-slm",
    "name": "Salem",
    "country": "India",
    "lat": 11.6643,
    "lng": 78.146,
    "tier": 2,
    "activeListeners": 115,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-tpr",
    "name": "Tiruppur",
    "country": "India",
    "lat": 11.1085,
    "lng": 77.3411,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-erd",
    "name": "Erode",
    "country": "India",
    "lat": 11.341,
    "lng": 77.7172,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-tnv",
    "name": "Tirunelveli",
    "country": "India",
    "lat": 8.7139,
    "lng": 77.7567,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-vlr",
    "name": "Vellore",
    "country": "India",
    "lat": 12.9165,
    "lng": 79.1325,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-tcr",
    "name": "Thoothukudi",
    "country": "India",
    "lat": 8.7642,
    "lng": 78.1348,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-dnd",
    "name": "Dindigul",
    "country": "India",
    "lat": 10.3673,
    "lng": 77.9803,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-tjr",
    "name": "Thanjavur",
    "country": "India",
    "lat": 10.787,
    "lng": 79.1378,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-pny",
    "name": "Puducherry",
    "country": "India",
    "lat": 11.9416,
    "lng": 79.8083,
    "tier": 2,
    "activeListeners": 120,
    "topSongs": [
      {
        "rank": "01",
        "title": "Hukum",
        "artist": "Anirudh Ravichander",
        "plays": 4120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/e8/cf/dfe8cfb4-a4b5-b778-e565-d603a110bb51/8903431940988_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Aasa Kooda",
        "artist": "Sai Abhyankkar",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Badass",
        "artist": "Anirudh Ravichander",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/8f/3b/be8f3b14-04ea-46b5-5555-d017b2b4e85d/8903431952875_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Naa Ready",
        "artist": "Anirudh Ravichander",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 1890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-wgl",
    "name": "Warangal",
    "country": "India",
    "lat": 17.9689,
    "lng": 79.5941,
    "tier": 2,
    "activeListeners": 120,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-nzb",
    "name": "Nizamabad",
    "country": "India",
    "lat": 18.6725,
    "lng": 78.0941,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-krm",
    "name": "Karimnagar",
    "country": "India",
    "lat": 18.4386,
    "lng": 79.1288,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-kmm",
    "name": "Khammam",
    "country": "India",
    "lat": 17.2473,
    "lng": 80.1514,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-vja",
    "name": "Vijayawada",
    "country": "India",
    "lat": 16.5062,
    "lng": 80.648,
    "tier": 2,
    "activeListeners": 160,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-gun",
    "name": "Guntur",
    "country": "India",
    "lat": 16.3067,
    "lng": 80.4365,
    "tier": 2,
    "activeListeners": 130,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-nel",
    "name": "Nellore",
    "country": "India",
    "lat": 14.4426,
    "lng": 79.9865,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-knl-ap",
    "name": "Kurnool",
    "country": "India",
    "lat": 15.8281,
    "lng": 78.0373,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-rjy",
    "name": "Rajahmundry",
    "country": "India",
    "lat": 17.0005,
    "lng": 81.804,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-tpt",
    "name": "Tirupati",
    "country": "India",
    "lat": 13.6288,
    "lng": 79.4192,
    "tier": 2,
    "activeListeners": 145,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-kkn",
    "name": "Kakinada",
    "country": "India",
    "lat": 16.9891,
    "lng": 82.2475,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-kdp",
    "name": "Kadapa",
    "country": "India",
    "lat": 14.4673,
    "lng": 78.8242,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-atp",
    "name": "Anantapur",
    "country": "India",
    "lat": 14.6819,
    "lng": 77.6006,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Fear Song",
        "artist": "Anirudh Ravichander",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kurchi Madathapetti",
        "artist": "Thaman S",
        "plays": 3410,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ff/e9/12/ffe9126b-d040-f90c-2df7-6baf1d00d1e6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Chuttamalle",
        "artist": "Anirudh Ravichander",
        "plays": 2980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Sammohanuda",
        "artist": "Bheems Ceciroleo",
        "plays": 2150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/90/64/f39064e2-bb47-d751-804d-37f0490527b7/8903431949714_cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Hoyna Hoyna",
        "artist": "Anirudh Ravichander",
        "plays": 1780,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/82/ee/7482eee5-9a94-25d0-e0a2-5c46d755ef0c/886447902318.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-raj",
    "name": "Rajkot",
    "country": "India",
    "lat": 22.3039,
    "lng": 70.8022,
    "tier": 2,
    "activeListeners": 150,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bva",
    "name": "Bhavnagar",
    "country": "India",
    "lat": 21.7645,
    "lng": 72.1519,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-jmn",
    "name": "Jamnagar",
    "country": "India",
    "lat": 22.4707,
    "lng": 70.0577,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-jnd",
    "name": "Junagadh",
    "country": "India",
    "lat": 21.5222,
    "lng": 70.4579,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-gnd",
    "name": "Gandhinagar",
    "country": "India",
    "lat": 23.2156,
    "lng": 72.6369,
    "tier": 2,
    "activeListeners": 130,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-and",
    "name": "Anand",
    "country": "India",
    "lat": 22.5645,
    "lng": 72.9289,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-nvs",
    "name": "Navsari",
    "country": "India",
    "lat": 20.95,
    "lng": 72.93,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bhj",
    "name": "Bhuj",
    "country": "India",
    "lat": 23.242,
    "lng": 69.6669,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Khalasi",
        "artist": "Aditya Gadhvi x Achint",
        "plays": 3890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Chogada",
        "artist": "Darshan Raval",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ef/0e/dc/ef0edc91-2a13-ce31-e17f-7dc7a77d1ca4/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-knp",
    "name": "Kanpur",
    "country": "India",
    "lat": 26.4499,
    "lng": 80.3319,
    "tier": 1,
    "activeListeners": 230,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ald",
    "name": "Prayagraj",
    "country": "India",
    "lat": 25.4358,
    "lng": 81.8463,
    "tier": 2,
    "activeListeners": 155,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mrt",
    "name": "Meerut",
    "country": "India",
    "lat": 28.9845,
    "lng": 77.7064,
    "tier": 2,
    "activeListeners": 140,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bly-up",
    "name": "Bareilly",
    "country": "India",
    "lat": 28.367,
    "lng": 79.4304,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-alg",
    "name": "Aligarh",
    "country": "India",
    "lat": 27.8974,
    "lng": 78.088,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mbd",
    "name": "Moradabad",
    "country": "India",
    "lat": 28.8351,
    "lng": 78.7747,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-gkp",
    "name": "Gorakhpur",
    "country": "India",
    "lat": 26.7606,
    "lng": 83.3732,
    "tier": 2,
    "activeListeners": 135,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-jhs",
    "name": "Jhansi",
    "country": "India",
    "lat": 25.4484,
    "lng": 78.5685,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mza",
    "name": "Muzaffarnagar",
    "country": "India",
    "lat": 29.4727,
    "lng": 77.7085,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mth",
    "name": "Mathura",
    "country": "India",
    "lat": 27.4924,
    "lng": 77.6737,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ayd",
    "name": "Ayodhya",
    "country": "India",
    "lat": 26.7922,
    "lng": 82.1998,
    "tier": 2,
    "activeListeners": 150,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-jdh",
    "name": "Jodhpur",
    "country": "India",
    "lat": 26.2389,
    "lng": 73.0243,
    "tier": 2,
    "activeListeners": 155,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-kot",
    "name": "Kota",
    "country": "India",
    "lat": 25.2138,
    "lng": 75.8648,
    "tier": 2,
    "activeListeners": 140,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bkn",
    "name": "Bikaner",
    "country": "India",
    "lat": 28.0229,
    "lng": 73.3119,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ajm",
    "name": "Ajmer",
    "country": "India",
    "lat": 26.4499,
    "lng": 74.6399,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-udr",
    "name": "Udaipur",
    "country": "India",
    "lat": 24.5854,
    "lng": 73.7125,
    "tier": 2,
    "activeListeners": 145,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bhw",
    "name": "Bhilwara",
    "country": "India",
    "lat": 25.3407,
    "lng": 74.6313,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-alw",
    "name": "Alwar",
    "country": "India",
    "lat": 27.553,
    "lng": 76.6346,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-jbp",
    "name": "Jabalpur",
    "country": "India",
    "lat": 23.1815,
    "lng": 79.9864,
    "tier": 2,
    "activeListeners": 130,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-gwl",
    "name": "Gwalior",
    "country": "India",
    "lat": 26.2183,
    "lng": 78.1828,
    "tier": 2,
    "activeListeners": 135,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ujn",
    "name": "Ujjain",
    "country": "India",
    "lat": 23.1765,
    "lng": 75.7885,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-sgr",
    "name": "Sagar",
    "country": "India",
    "lat": 23.8388,
    "lng": 78.7378,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-rtm",
    "name": "Ratlam",
    "country": "India",
    "lat": 23.3315,
    "lng": 75.0367,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-hwr",
    "name": "Howrah",
    "country": "India",
    "lat": 22.5958,
    "lng": 88.2636,
    "tier": 2,
    "activeListeners": 160,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ami Je Tomar 3.0",
        "artist": "Pritam ft. Arijit Singh",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Boba Tunnel",
        "artist": "Anupam Roy",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/c4/88/33c48869-7c46-f642-e065-276f5fbf764f/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-asn",
    "name": "Asansol",
    "country": "India",
    "lat": 23.6739,
    "lng": 86.9524,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ami Je Tomar 3.0",
        "artist": "Pritam ft. Arijit Singh",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Boba Tunnel",
        "artist": "Anupam Roy",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/c4/88/33c48869-7c46-f642-e065-276f5fbf764f/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-slg",
    "name": "Siliguri",
    "country": "India",
    "lat": 26.7271,
    "lng": 88.3953,
    "tier": 2,
    "activeListeners": 130,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ami Je Tomar 3.0",
        "artist": "Pritam ft. Arijit Singh",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Boba Tunnel",
        "artist": "Anupam Roy",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/c4/88/33c48869-7c46-f642-e065-276f5fbf764f/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-dgp",
    "name": "Durgapur",
    "country": "India",
    "lat": 23.5204,
    "lng": 87.3119,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ami Je Tomar 3.0",
        "artist": "Pritam ft. Arijit Singh",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Boba Tunnel",
        "artist": "Anupam Roy",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/c4/88/33c48869-7c46-f642-e065-276f5fbf764f/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-kgp",
    "name": "Kharagpur",
    "country": "India",
    "lat": 22.346,
    "lng": 87.232,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ami Je Tomar 3.0",
        "artist": "Pritam ft. Arijit Singh",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Boba Tunnel",
        "artist": "Anupam Roy",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/c4/88/33c48869-7c46-f642-e065-276f5fbf764f/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-djg",
    "name": "Darjeeling",
    "country": "India",
    "lat": 27.041,
    "lng": 88.2663,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ami Je Tomar 3.0",
        "artist": "Pritam ft. Arijit Singh",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Boba Tunnel",
        "artist": "Anupam Roy",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/c4/88/33c48869-7c46-f642-e065-276f5fbf764f/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ctk",
    "name": "Cuttack",
    "country": "India",
    "lat": 20.4625,
    "lng": 85.8828,
    "tier": 2,
    "activeListeners": 120,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-rkl",
    "name": "Rourkela",
    "country": "India",
    "lat": 22.2604,
    "lng": 84.8536,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-pri",
    "name": "Puri",
    "country": "India",
    "lat": 19.8135,
    "lng": 85.8312,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-sbp",
    "name": "Sambalpur",
    "country": "India",
    "lat": 21.4669,
    "lng": 83.9812,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-gay",
    "name": "Gaya",
    "country": "India",
    "lat": 24.7914,
    "lng": 85.0002,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bgp",
    "name": "Bhagalpur",
    "country": "India",
    "lat": 25.2425,
    "lng": 86.9842,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mfp",
    "name": "Muzaffarpur",
    "country": "India",
    "lat": 26.1209,
    "lng": 85.3647,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-prn",
    "name": "Purnia",
    "country": "India",
    "lat": 25.7771,
    "lng": 87.4753,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-dbg",
    "name": "Darbhanga",
    "country": "India",
    "lat": 26.1542,
    "lng": 85.8918,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-jsr",
    "name": "Jamshedpur",
    "country": "India",
    "lat": 22.8046,
    "lng": 86.2029,
    "tier": 2,
    "activeListeners": 150,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-dhn",
    "name": "Dhanbad",
    "country": "India",
    "lat": 23.7957,
    "lng": 86.4304,
    "tier": 2,
    "activeListeners": 135,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bkr",
    "name": "Bokaro",
    "country": "India",
    "lat": 23.6693,
    "lng": 86.1511,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ccj",
    "name": "Kozhikode",
    "country": "India",
    "lat": 11.2588,
    "lng": 75.7804,
    "tier": 2,
    "activeListeners": 155,
    "topSongs": [
      {
        "rank": "01",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 4320,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Jaada",
        "artist": "Sushin Shyam",
        "plays": 3210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Armadham",
        "artist": "Sushin Shyam",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-klm",
    "name": "Kollam",
    "country": "India",
    "lat": 8.8932,
    "lng": 76.6141,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 4320,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Jaada",
        "artist": "Sushin Shyam",
        "plays": 3210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Armadham",
        "artist": "Sushin Shyam",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-tcr-kl",
    "name": "Thrissur",
    "country": "India",
    "lat": 10.5276,
    "lng": 76.2144,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 4320,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Jaada",
        "artist": "Sushin Shyam",
        "plays": 3210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Armadham",
        "artist": "Sushin Shyam",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-cnn",
    "name": "Kannur",
    "country": "India",
    "lat": 11.8745,
    "lng": 75.3704,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 4320,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Jaada",
        "artist": "Sushin Shyam",
        "plays": 3210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Armadham",
        "artist": "Sushin Shyam",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-alp",
    "name": "Alappuzha",
    "country": "India",
    "lat": 9.4981,
    "lng": 76.3388,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 4320,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Jaada",
        "artist": "Sushin Shyam",
        "plays": 3210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Armadham",
        "artist": "Sushin Shyam",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-pgt",
    "name": "Palakkad",
    "country": "India",
    "lat": 10.7867,
    "lng": 76.6548,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Illuminati",
        "artist": "Sushin Shyam",
        "plays": 4320,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Jaada",
        "artist": "Sushin Shyam",
        "plays": 3210,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Armadham",
        "artist": "Sushin Shyam",
        "plays": 2890,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/4e/29/884e290c-29ed-25d5-7b25-243b89097220/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bli",
    "name": "Bhilai",
    "country": "India",
    "lat": 21.1938,
    "lng": 81.3509,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-bsp",
    "name": "Bilaspur",
    "country": "India",
    "lat": 22.0797,
    "lng": 82.1409,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-hdw",
    "name": "Haridwar",
    "country": "India",
    "lat": 29.9457,
    "lng": 78.1642,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-rsh",
    "name": "Rishikesh",
    "country": "India",
    "lat": 30.0869,
    "lng": 78.2676,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-sml",
    "name": "Shimla",
    "country": "India",
    "lat": 31.1048,
    "lng": 77.1734,
    "tier": 2,
    "activeListeners": 110,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-dhm",
    "name": "Dharamshala",
    "country": "India",
    "lat": 32.219,
    "lng": 76.3234,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-mnl",
    "name": "Manali",
    "country": "India",
    "lat": 32.2396,
    "lng": 77.1887,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ixj",
    "name": "Jammu",
    "country": "India",
    "lat": 32.7266,
    "lng": 74.857,
    "tier": 2,
    "activeListeners": 125,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-leh",
    "name": "Leh",
    "country": "India",
    "lat": 34.1526,
    "lng": 77.5771,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-shl",
    "name": "Shillong",
    "country": "India",
    "lat": 25.5788,
    "lng": 91.8933,
    "tier": 2,
    "activeListeners": 120,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-imp",
    "name": "Imphal",
    "country": "India",
    "lat": 24.817,
    "lng": 93.9368,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-agt",
    "name": "Agartala",
    "country": "India",
    "lat": 23.8315,
    "lng": 91.2868,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Ami Je Tomar 3.0",
        "artist": "Pritam ft. Arijit Singh",
        "plays": 3450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/28/7f/44287ffb-14ec-aa7c-87b6-ec6d819dbbf6/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Boba Tunnel",
        "artist": "Anupam Roy",
        "plays": 2650,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/c4/88/33c48869-7c46-f642-e065-276f5fbf764f/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-azl",
    "name": "Aizawl",
    "country": "India",
    "lat": 23.7271,
    "lng": 92.7176,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-khm",
    "name": "Kohima",
    "country": "India",
    "lat": 25.6751,
    "lng": 94.1086,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-gtk",
    "name": "Gangtok",
    "country": "India",
    "lat": 27.3314,
    "lng": 88.6138,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "in-ixz",
    "name": "Port Blair",
    "country": "India",
    "lat": 11.6234,
    "lng": 92.7265,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Husn",
        "artist": "Anuv Jain",
        "plays": 3840,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/a5/33/a5/a533a5db-c77f-6f32-a8a7-07c01e93bffe/24UM1IM11028.crop.jpg/600x600bb.jpg"
      },
      {
        "rank": "02",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "plays": 3120,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/44/a6/9f44a6ef-4438-1794-26ac-7f73d167afbf/artwork.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Tu Hai Kahan",
        "artist": "AUR",
        "plays": 2450,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg"
      },
      {
        "rank": "04",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "plays": 1980,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d5/29/29/d5292970-e6e4-1199-baed-22c8c9f60988/cover.jpg/600x600bb.jpg"
      },
      {
        "rank": "05",
        "title": "Pehle Bhi Main",
        "artist": "Vishal Mishra",
        "plays": 1420,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/95/9d/2b959dc6-b99b-4497-b2db-f0f5b9d3e5aa/cover.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-hou",
    "name": "Houston",
    "country": "United States",
    "lat": 29.7604,
    "lng": -95.3698,
    "tier": 1,
    "activeListeners": 310,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-sat",
    "name": "San Antonio",
    "country": "United States",
    "lat": 29.4241,
    "lng": -98.4936,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-dal",
    "name": "Dallas",
    "country": "United States",
    "lat": 32.7767,
    "lng": -96.797,
    "tier": 1,
    "activeListeners": 320,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-det",
    "name": "Detroit",
    "country": "United States",
    "lat": 42.3314,
    "lng": -83.0458,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-orl",
    "name": "Orlando",
    "country": "United States",
    "lat": 28.5383,
    "lng": -81.3792,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ca-tor",
    "name": "Toronto",
    "country": "Canada",
    "lat": 43.6532,
    "lng": -79.3832,
    "tier": 1,
    "activeListeners": 350,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ca-yhz",
    "name": "Halifax",
    "country": "Canada",
    "lat": 44.6488,
    "lng": -63.5752,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-liv",
    "name": "Liverpool",
    "country": "United Kingdom",
    "lat": 53.4084,
    "lng": -2.9916,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-lds",
    "name": "Leeds",
    "country": "United Kingdom",
    "lat": 53.8008,
    "lng": -1.5491,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-bfs",
    "name": "Belfast",
    "country": "United Kingdom",
    "lat": 54.5973,
    "lng": -5.9301,
    "tier": 2,
    "activeListeners": 160,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "uk-cwl",
    "name": "Cardiff",
    "country": "United Kingdom",
    "lat": 51.4816,
    "lng": -3.1791,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-trn",
    "name": "Turin",
    "country": "Italy",
    "lat": 45.0703,
    "lng": 7.6869,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "nl-rtm",
    "name": "Rotterdam",
    "country": "Netherlands",
    "lat": 51.9244,
    "lng": 4.4777,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "be-anr",
    "name": "Antwerp",
    "country": "Belgium",
    "lat": 51.2194,
    "lng": 4.4025,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "tr-ank",
    "name": "Ankara",
    "country": "Turkey",
    "lat": 39.9334,
    "lng": 32.8597,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-spk",
    "name": "Sapporo",
    "country": "Japan",
    "lat": 43.0618,
    "lng": 141.3545,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-bjs",
    "name": "Beijing",
    "country": "China",
    "lat": 39.9042,
    "lng": 116.4074,
    "tier": 1,
    "activeListeners": 410,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "nz-akl",
    "name": "Auckland",
    "country": "New Zealand",
    "lat": -36.8485,
    "lng": 174.7633,
    "tier": 1,
    "activeListeners": 230,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-for",
    "name": "Fortaleza",
    "country": "Brazil",
    "lat": -3.7319,
    "lng": -38.5267,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-okc",
    "name": "Oklahoma City",
    "country": "United States",
    "lat": 35.4676,
    "lng": -97.5164,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-elp",
    "name": "El Paso",
    "country": "United States",
    "lat": 31.7619,
    "lng": -106.485,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-sdf",
    "name": "Louisville",
    "country": "United States",
    "lat": 38.2527,
    "lng": -85.7585,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-mem",
    "name": "Memphis",
    "country": "United States",
    "lat": 35.1495,
    "lng": -90.049,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-mke",
    "name": "Milwaukee",
    "country": "United States",
    "lat": 43.0389,
    "lng": -87.9065,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-abq",
    "name": "Albuquerque",
    "country": "United States",
    "lat": 35.0844,
    "lng": -106.6504,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-tus",
    "name": "Tucson",
    "country": "United States",
    "lat": 32.2226,
    "lng": -110.9747,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-fat",
    "name": "Fresno",
    "country": "United States",
    "lat": 36.7468,
    "lng": -119.7726,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-smf",
    "name": "Sacramento",
    "country": "United States",
    "lat": 38.5816,
    "lng": -121.4944,
    "tier": 2,
    "activeListeners": 175,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-oma",
    "name": "Omaha",
    "country": "United States",
    "lat": 41.2565,
    "lng": -95.9345,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-rdu",
    "name": "Raleigh",
    "country": "United States",
    "lat": 35.7796,
    "lng": -78.6382,
    "tier": 2,
    "activeListeners": 185,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-lgb",
    "name": "Long Beach",
    "country": "United States",
    "lat": 33.7701,
    "lng": -118.1937,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-vab",
    "name": "Virginia Beach",
    "country": "United States",
    "lat": 36.8529,
    "lng": -75.978,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-oak",
    "name": "Oakland",
    "country": "United States",
    "lat": 37.8044,
    "lng": -122.2712,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-tul",
    "name": "Tulsa",
    "country": "United States",
    "lat": 36.154,
    "lng": -95.9928,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "us-cin",
    "name": "Cincinnati",
    "country": "United States",
    "lat": 39.1031,
    "lng": -84.512,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-ukb",
    "name": "Kobe",
    "country": "Japan",
    "lat": 34.6901,
    "lng": 135.1955,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-kyt",
    "name": "Kyoto",
    "country": "Japan",
    "lat": 35.0116,
    "lng": 135.7681,
    "tier": 2,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-kws",
    "name": "Kawasaki",
    "country": "Japan",
    "lat": 35.5308,
    "lng": 139.7029,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-stm",
    "name": "Saitama",
    "country": "Japan",
    "lat": 35.8617,
    "lng": 139.6455,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-hij",
    "name": "Hiroshima",
    "country": "Japan",
    "lat": 34.3853,
    "lng": 132.4553,
    "tier": 2,
    "activeListeners": 175,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-sdj",
    "name": "Sendai",
    "country": "Japan",
    "lat": 38.2682,
    "lng": 140.8694,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "jp-chb",
    "name": "Chiba",
    "country": "Japan",
    "lat": 35.6074,
    "lng": 140.1065,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-sia",
    "name": "Xi'an",
    "country": "China",
    "lat": 34.3416,
    "lng": 108.9398,
    "tier": 1,
    "activeListeners": 260,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-tsn",
    "name": "Tianjin",
    "country": "China",
    "lat": 39.3434,
    "lng": 117.3616,
    "tier": 1,
    "activeListeners": 290,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-nkg",
    "name": "Nanjing",
    "country": "China",
    "lat": 32.0603,
    "lng": 118.7969,
    "tier": 1,
    "activeListeners": 270,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-cgo",
    "name": "Zhengzhou",
    "country": "China",
    "lat": 34.7466,
    "lng": 113.6254,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-csx",
    "name": "Changsha",
    "country": "China",
    "lat": 28.2282,
    "lng": 112.9388,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-tao",
    "name": "Qingdao",
    "country": "China",
    "lat": 36.0671,
    "lng": 120.3826,
    "tier": 2,
    "activeListeners": 210,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-kmg",
    "name": "Kunming",
    "country": "China",
    "lat": 25.0406,
    "lng": 102.7129,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-xmn",
    "name": "Xiamen",
    "country": "China",
    "lat": 24.4798,
    "lng": 118.0894,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "cn-szh",
    "name": "Suzhou",
    "country": "China",
    "lat": 31.299,
    "lng": 120.5853,
    "tier": 1,
    "activeListeners": 280,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-dus",
    "name": "Düsseldorf",
    "country": "Germany",
    "lat": 51.2277,
    "lng": 6.7735,
    "tier": 2,
    "activeListeners": 220,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-lej",
    "name": "Leipzig",
    "country": "Germany",
    "lat": 51.3397,
    "lng": 12.3731,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-dtm",
    "name": "Dortmund",
    "country": "Germany",
    "lat": 51.5136,
    "lng": 7.4653,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-drs",
    "name": "Dresden",
    "country": "Germany",
    "lat": 51.0504,
    "lng": 13.7373,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-haj",
    "name": "Hannover",
    "country": "Germany",
    "lat": 52.3759,
    "lng": 9.732,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "de-nue",
    "name": "Nuremberg",
    "country": "Germany",
    "lat": 49.4521,
    "lng": 11.0767,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fr-nte",
    "name": "Nantes",
    "country": "France",
    "lat": 47.2184,
    "lng": -1.5536,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fr-mpl",
    "name": "Montpellier",
    "country": "France",
    "lat": 43.6108,
    "lng": 3.8767,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fr-sxb",
    "name": "Strasbourg",
    "country": "France",
    "lat": 48.5734,
    "lng": 7.7521,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fr-bod",
    "name": "Bordeaux",
    "country": "France",
    "lat": 44.8378,
    "lng": -0.5792,
    "tier": 2,
    "activeListeners": 185,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "fr-lil",
    "name": "Lille",
    "country": "France",
    "lat": 50.6292,
    "lng": 3.0573,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-blq",
    "name": "Bologna",
    "country": "Italy",
    "lat": 44.4949,
    "lng": 11.3426,
    "tier": 2,
    "activeListeners": 190,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-vce",
    "name": "Venice",
    "country": "Italy",
    "lat": 45.4408,
    "lng": 12.3155,
    "tier": 2,
    "activeListeners": 240,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-goa",
    "name": "Genoa",
    "country": "Italy",
    "lat": 44.4056,
    "lng": 8.9463,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-pmo",
    "name": "Palermo",
    "country": "Italy",
    "lat": 38.1157,
    "lng": 13.3615,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-bri",
    "name": "Bari",
    "country": "Italy",
    "lat": 41.1171,
    "lng": 16.8719,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "it-vrn",
    "name": "Verona",
    "country": "Italy",
    "lat": 45.4384,
    "lng": 10.9916,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "es-agp",
    "name": "Malaga",
    "country": "Spain",
    "lat": 36.7213,
    "lng": -4.4214,
    "tier": 2,
    "activeListeners": 195,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "es-bio",
    "name": "Bilbao",
    "country": "Spain",
    "lat": 43.263,
    "lng": -2.935,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "es-zaz",
    "name": "Zaragoza",
    "country": "Spain",
    "lat": 41.6488,
    "lng": -0.8891,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "es-pmi",
    "name": "Palma de Mallorca",
    "country": "Spain",
    "lat": 39.5696,
    "lng": 2.6502,
    "tier": 2,
    "activeListeners": 160,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "es-alc",
    "name": "Alicante",
    "country": "Spain",
    "lat": 38.3452,
    "lng": -0.481,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "au-hba",
    "name": "Hobart",
    "country": "Australia",
    "lat": -42.8821,
    "lng": 147.3272,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "au-drw",
    "name": "Darwin",
    "country": "Australia",
    "lat": -12.4634,
    "lng": 130.8456,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "tr-adb",
    "name": "Izmir",
    "country": "Turkey",
    "lat": 38.4237,
    "lng": 27.1428,
    "tier": 2,
    "activeListeners": 190,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "tr-yei",
    "name": "Bursa",
    "country": "Turkey",
    "lat": 40.1885,
    "lng": 29.061,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "tr-ayt",
    "name": "Antalya",
    "country": "Turkey",
    "lat": 36.8969,
    "lng": 30.7133,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "sa-med",
    "name": "Medina",
    "country": "Saudi Arabia",
    "lat": 24.5247,
    "lng": 39.5692,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "sa-dmm",
    "name": "Dammam",
    "country": "Saudi Arabia",
    "lat": 26.4207,
    "lng": 50.0888,
    "tier": 2,
    "activeListeners": 175,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pk-fsd",
    "name": "Faisalabad",
    "country": "Pakistan",
    "lat": 31.4504,
    "lng": 73.135,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pk-pew",
    "name": "Peshawar",
    "country": "Pakistan",
    "lat": 34.0151,
    "lng": 71.5249,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pk-mux",
    "name": "Multan",
    "country": "Pakistan",
    "lat": 30.1575,
    "lng": 71.5249,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "bd-cgp",
    "name": "Chittagong",
    "country": "Bangladesh",
    "lat": 22.3569,
    "lng": 91.7832,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "bd-syl",
    "name": "Sylhet",
    "country": "Bangladesh",
    "lat": 24.8949,
    "lng": 91.8687,
    "tier": 3,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "lk-kdy",
    "name": "Kandy",
    "country": "Sri Lanka",
    "lat": 7.2906,
    "lng": 80.6337,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "np-pkr",
    "name": "Pokhara",
    "country": "Nepal",
    "lat": 28.2096,
    "lng": 83.9856,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "mx-pue",
    "name": "Puebla",
    "country": "Mexico",
    "lat": 19.0414,
    "lng": -98.2063,
    "tier": 2,
    "activeListeners": 180,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-bel",
    "name": "Belém",
    "country": "Brazil",
    "lat": -1.4558,
    "lng": -48.4902,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "br-gyn",
    "name": "Goiânia",
    "country": "Brazil",
    "lat": -16.6869,
    "lng": -49.2648,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "ar-mdz",
    "name": "Mendoza",
    "country": "Argentina",
    "lat": -32.8895,
    "lng": -68.8458,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "co-ctg",
    "name": "Cartagena",
    "country": "Colombia",
    "lat": 10.391,
    "lng": -75.4794,
    "tier": 2,
    "activeListeners": 195,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  },
  {
    "id": "pe-aqp",
    "name": "Arequipa",
    "country": "Peru",
    "lat": -16.409,
    "lng": -71.5375,
    "tier": 2,
    "activeListeners": 0,
    "topSongs": [
      {
        "rank": "01",
        "title": "Not Like Us",
        "artist": "Kendrick Lamar",
        "plays": 48920,
        "cover": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
      },
      {
        "rank": "02",
        "title": "Espresso",
        "artist": "Sabrina Carpenter",
        "plays": 42150,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg"
      },
      {
        "rank": "03",
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "plays": 31500,
        "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _rootScope.WORLD_CITIES;
}
