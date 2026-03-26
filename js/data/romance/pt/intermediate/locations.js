(function() {
    const data = [
    {
        "word": "Austrália",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Japão",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "China",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Brasil",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Índia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Tóquio",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Pequim",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Rio de Janeiro",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Cairo",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Deli",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
