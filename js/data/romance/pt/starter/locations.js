(function() {
    const data = [
    {
        "word": "França",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Itália",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rússia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Grécia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Inglaterra",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Espanha",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "EUA",
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
        "word": "Roma",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moscou",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Atenas",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Nova York",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
