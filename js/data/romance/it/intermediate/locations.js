(function() {
    const data = [
    {
        "word": "Toscana",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Australia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Giappone",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Cina",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Brasile",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "India",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Tokyo",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Pechino",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Rio de Janeiro",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Il Cairo",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Delhi",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "it";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
