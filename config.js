/* ============================================================
   CINETIME - CONFIGURAÇÕES EXTERNAS
   ============================================================ */

const CONFIG = {

  /* ==========================================================
     PARTILHADO
     ========================================================== */
  SHARED: {
    TMDB_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjA0NDI2YzRlOTFmODkxMTM4YmViMjExMDcxZWE5ZCIsIm5iZiI6MTc1OTc0MjMwMC4yMDYsInN1YiI6IjY4ZTM4OTVjOGQ1YTFmMjI2NTljYWU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V8O4-420NxK2wbRNryTVSTi-lrzfNDAsmSIaFFIlyfc',
    TMDB_KEY: 'e204426c4e91f891138beb211071ea9d',
    IMG: 'https://image.tmdb.org/t/p/w342',
    IMG_BIG: 'https://image.tmdb.org/t/p/w500',
    IMG_FULL: 'https://image.tmdb.org/t/p/w780',
    PROFILE: 'https://image.tmdb.org/t/p/w185',
    PROFILE_MD: 'https://image.tmdb.org/t/p/w300',
    PLACEHOLDER: 'data:image/svg+xml;utf8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="300" height="450" fill="#1e1e1e"/><text x="150" y="230" font-family="Arial" font-size="16" fill="#555" text-anchor="middle">No image</text></svg>'
    ),
    PLACEHOLDER_PERSON: 'data:image/svg+xml;utf8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" fill="#1e1e1e"/><text x="150" y="158" font-family="Arial" font-size="48" fill="#555" text-anchor="middle">?</text></svg>'
    ),
    API_IPTV: 'https://iptv-org.github.io/api',
    VIDSRC: 'https://vidsrc.sh',
    VIDSRC_EMBED: 'https://vidsrc.sh/embed',
    SITE_URL: 'https://ffortico.top/pub',
    PER_PAGE: 100
  },

  /* ==========================================================
     INDEX
     ========================================================== */
  INDEX: {
    PER_PAGE: 100,
    SHUFFLE_ALL_TAB: true,
    SKELETON_COUNT: 100,
    MAX_AVAILABILITY_JUMPS: 3,
  },

  /* ==========================================================
     PLAYER
     ========================================================== */
  PLAYER: {
    ADS: {
      enabled: true,
      pre: {
        skipAfter: 5,
        videos: [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        ]
      },
      mid: [
        {
          atSeconds: 60,
          skipAfter: 5,
          videos: [
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          ]
        },
        {
          atSeconds: 300,
          skipAfter: 5,
          videos: [
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
          ]
        }
      ],
      post: {
        skipAfter: 5,
        videos: [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        ]
      }
    },
    DEFAULT_SEASON: 1,
    DEFAULT_EPISODE: 1,
    SHOW_QUALITY_SELECTOR: true,
    SHOW_RELATED: true,
    RELATED_LIMIT: 12,
    CAST_LIMIT: 15,
  },

  /* ==========================================================
     DOWNLOAD
     ========================================================== */
  DOWNLOAD: {
    RELATED_LIMIT: 12,
    CAST_LIMIT: 15,
    WARN_COLLAPSE_BY_DEFAULT: true,
    BLOCK_UNLOAD: true,
  },

  /* ==========================================================
     GENRES
     ========================================================== */
  GENRES: {
    SKELETON_COUNT: 12,
    MAX_AVAILABILITY_JUMPS: 3,
    MIN_VOTE_COUNT: 50,
    AUTO_SELECT_FIRST_GENRE: true,
  },

  /* ==========================================================
     YEAR
     ========================================================== */
  YEAR: {
    MIN_YEAR: 1950,
    MAX_YEAR_OFFSET: 1,
    SKELETON_COUNT: 12,
    MAX_AVAILABILITY_JUMPS: 3,
    MIN_VOTE_COUNT: 20,
    QUICK_CHIPS_RANGE: 10,
  },

  /* ==========================================================
     RATING
     ========================================================== */
  RATING: {
    MIN_RATING: 1,
    MAX_RATING: 10,
    STEP: 0.5,
    DEFAULT_RATING: 7.0,
    SKELETON_COUNT: 12,
    MAX_AVAILABILITY_JUMPS: 3,
    MIN_VOTE_COUNT: 50,
    QUICK_CHIPS: [9.0, 8.5, 8.0, 7.5, 7.0, 6.0, 5.0],
  },

  /* ==========================================================
     PERSON
     ========================================================== */
  PERSON: {
    PEOPLE_PER_LOAD: 100,
    CREDITS_PER_PAGE: 100,
    POPULAR_PAGES: [1, 2, 3, 4, 5],
    MAX_AVAILABILITY_JUMPS: 3,
  },

  /* ==========================================================
     HELP
     ========================================================== */
  HELP: {
    FAQ_ENABLED: true,
    SHOW_TIP: true,
  },
};

/* ============================================================
   COMPATIBILIDADE COM O CÓDIGO ANTIGO (api.js, app.js)
   ------------------------------------------------------------
   O api.js e app.js esperam uma estrutura aninhada:
     CONFIG.TMDB.ACCESS_TOKEN
     CONFIG.TMDB.API_KEY
     CONFIG.TMDB.BASE_URL
     CONFIG.TMDB.IMAGE_BASE
     CONFIG.TMDB.POSTER_SIZE
     CONFIG.TMDB.BACKDROP_SIZE
     CONFIG.PLACEHOLDERS.POSTER
     CONFIG.PLACEHOLDERS.TV
     CONFIG.IPTV.BASE_URL
     CONFIG.ITEMS_PER_PAGE
   ============================================================ */
CONFIG.TMDB = {
  ACCESS_TOKEN: CONFIG.SHARED.TMDB_TOKEN,
  API_KEY: CONFIG.SHARED.TMDB_KEY,
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE: 'https://image.tmdb.org/t/p/',
  POSTER_SIZE: 'w342',
  BACKDROP_SIZE: 'w780',
};
CONFIG.PLACEHOLDERS = {
  POSTER: CONFIG.SHARED.PLACEHOLDER,
  TV: 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="170"><rect width="300" height="170" fill="#1e1e1e"/><text x="150" y="90" font-family="Arial" font-size="14" fill="#555" text-anchor="middle">No logo</text></svg>'
  ),
  PERSON: CONFIG.SHARED.PLACEHOLDER_PERSON,
};
CONFIG.IPTV = {
  BASE_URL: CONFIG.SHARED.API_IPTV,
};
CONFIG.ITEMS_PER_PAGE = CONFIG.SHARED.PER_PAGE;

/* ============================================================
   RESOLVER — devolve a config final duma página
   NOTA: não apaga CONFIG.* — só devolve um objeto separado
   ============================================================ */
CONFIG.for = function(pageKey) {
  const shared = this.SHARED;
  const page = this[pageKey] || {};
  const merged = { ...shared };

  for (const [k, v] of Object.entries(page)) {
    if (v !== null && v !== undefined && k !== 'ADS') {
      merged[k] = v;
    }
  }
  if (page.ADS) merged.ADS = page.ADS;

  merged.__PAGE__ = pageKey;
  return merged;
};