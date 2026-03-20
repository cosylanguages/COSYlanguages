(function() {
    const data = [
    {
        "word": "Austrália",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japão",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "China",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brasil",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Índia",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tóquio",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sydney",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Pequim",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rio de Janeiro",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Cairo",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Deli",
        "level": "intermediate",
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
