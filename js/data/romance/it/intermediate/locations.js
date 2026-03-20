(function() {
    const data = [
    {
        "word": "Toscana",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Australia",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Giappone",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Cina",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brasile",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "India",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tokyo",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sydney",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Pechino",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rio de Janeiro",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Il Cairo",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Delhi",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "it";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
