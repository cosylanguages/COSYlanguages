/**
 * Central registry for all supported languages in the COSY ecosystem.
 * This is the single source of truth for language metadata.
 */

window.COSY_LANGUAGES = {
  en: {
    name: "English",
    native: "English",
    flag: "🇬🇧",
    active: true,
    family: "germanic"
  },
  fr: {
    name: "French",
    native: "Français",
    flag: "🇫🇷",
    active: true,
    family: "romance"
  },
  it: {
    name: "Italian",
    native: "Italiano",
    flag: "🇮🇹",
    active: true,
    family: "romance"
  },
  ru: {
    name: "Russian",
    native: "Русский",
    flag: "🇷🇺",
    active: true,
    family: "slavic"
  },
  el: {
    name: "Greek",
    native: "Ελληνικά",
    flag: "🇬🇷",
    active: true,
    family: "hellenic"
  },
  de: {
    name: "German",
    native: "Deutsch",
    flag: "🇩🇪",
    active: false,
    family: "germanic"
  },
  es: {
    name: "Spanish",
    native: "Español",
    flag: "🇪🇸",
    active: false,
    family: "romance"
  },
  pt: {
    name: "Portuguese",
    native: "Português",
    flag: "🇵🇹",
    active: false,
    family: "romance"
  },
  ka: {
    name: "Georgian",
    native: "ქართული",
    flag: "🇬🇪",
    active: false,
    family: "kartvelian"
  },
  hy: {
    name: "Armenian",
    native: "Հայερεν",
    flag: "🇦🇲",
    active: false,
    family: "armenian"
  },
  tt: {
    name: "Tatar",
    native: "Татарча",
    flag: "🇷🇺",
    active: false,
    family: "turkic"
  },
  ba: {
    name: "Bashkir",
    native: "Башҡортса",
    flag: "🇷🇺",
    active: false,
    family: "turkic"
  },
  br: {
    name: "Breton",
    native: "Brezhoneg",
    flag: "🇫🇷",
    active: false,
    family: "celtic"
  }
};

window.getLanguageMetadata = (code) => {
  return window.COSY_LANGUAGES[code] || null;
};
