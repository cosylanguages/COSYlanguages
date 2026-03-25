(function() {
    const data = [
    {
        "word": "Austrália",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japão",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "China",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brasil",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Índia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tóquio",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sydney",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Pequim",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rio de Janeiro",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Cairo",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Deli",
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
