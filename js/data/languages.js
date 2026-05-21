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

window.SUPPORTED_LANGUAGES = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' }
];

window.COMING_SOON_LANGUAGES = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'hy', name: 'Հայերεν', flag: '🇦🇲' },
    { code: 'ka', name: 'ქართული', flag: '🇬🇪' },
    { code: 'tt', name: 'Татарча', flag: '🌱' },
    { code: 'ba', name: 'Башҡορτσα', flag: '🌱' },
    { code: 'br', name: 'Brezhoneg', flag: '🌱' }
];
