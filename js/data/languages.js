/**
 * js/data/languages.js
 * Master language registry for COSYlanguages.
 */

window.TRANSLATION_MAP = {
    'en': 'js/data/germanic/en/translations.js',
    'fr': 'js/data/romance/fr/translations.js',
    'it': 'js/data/romance/it/translations.js',
    'ru': 'js/data/slavic/ru/translations.js',
    'el': 'js/data/hellenic/el/translations.js',
    'es': 'js/data/romance/es/translations.js',
    'de': 'js/data/germanic/de/translations.js',
    'pt': 'js/data/romance/pt/translations.js',
    'hy': 'js/data/armenian/hy/translations.js',
    'ka': 'js/data/kartvelian/ka/translations.js',
    'tt': 'js/data/turkic/tt/translations.js',
    'ba': 'js/data/turkic/ba/translations.js',
    'br': 'js/data/celtic/br/translations.js'
};

// Master language registry.
// status: 'active' = published on site | 'coming_soon' = data may exist but not yet published
// has_data: true = there are grammar/vocabulary/curriculum files in the repo for this language
// James controls when a language moves from coming_soon to active.

const COSY_LANGUAGES = [
  { code: 'en', name: 'English',    native: 'English',     status: 'active',       flag: '🇬🇧', has_cases: false, has_data: true  },
  { code: 'fr', name: 'French',     native: 'Français',    status: 'active',       flag: '🇫🇷', has_cases: false, has_data: true  },
  { code: 'it', name: 'Italian',    native: 'Italiano',    status: 'active',       flag: '🇮🇹', has_cases: false, has_data: true  },
  { code: 'ru', name: 'Russian',    native: 'Русский',     status: 'active',       flag: '🇷🇺', has_cases: true,  has_data: true  },
  { code: 'el', name: 'Greek',      native: 'Ελληνικά',    status: 'active',       flag: '🇬🇷', has_cases: true,  has_data: true  },
  { code: 'es', name: 'Spanish',    native: 'Español',     status: 'coming_soon',  flag: '🇪🇸', has_cases: false, has_data: true  },
  { code: 'de', name: 'German',     native: 'Deutsch',     status: 'coming_soon',  flag: '🇩🇪', has_cases: true,  has_data: true  },
  { code: 'pt', name: 'Portuguese', native: 'Português',   status: 'coming_soon',  flag: '🇵🇹', has_cases: false, has_data: true  },
  { code: 'hy', name: 'Armenian',   native: 'Հայերեն',     status: 'coming_soon',  flag: '🇦🇲', has_cases: true,  has_data: true  },
  { code: 'ka', name: 'Georgian',   native: 'ქართული',     status: 'coming_soon',  flag: '🇬🇪', has_cases: true,  has_data: true  },
  { code: 'tt', name: 'Tatar',      native: 'Татарча',     status: 'coming_soon',  flag: '🏴',  has_cases: true,  has_data: true  },
  { code: 'ba', name: 'Bashkir',    native: 'Башҡортса',   status: 'coming_soon',  flag: '🏴',  has_cases: true,  has_data: true  },
  { code: 'br', name: 'Breton',     native: 'Brezhoneg',   status: 'coming_soon',  flag: '🏴',  has_cases: false, has_data: true  },
];

// Helper: get only published languages
const COSY_ACTIVE_LANGUAGES = COSY_LANGUAGES.filter(l => l.status === 'active');

// Helper: get all languages that have data (active + coming-soon with content)
const COSY_LANGUAGES_WITH_DATA = COSY_LANGUAGES.filter(l => l.has_data);
