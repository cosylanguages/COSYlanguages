(function() {
    const data = [
    {
        "word": "France",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Italie",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Russie",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Grèce",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Angleterre",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Espagne",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "États-Unis",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Paris",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Londres",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rome",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moscou",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Athènes",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "New York",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "fr";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
