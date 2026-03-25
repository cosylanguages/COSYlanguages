(function() {
    const data = [
    {
        "word": "Toscana",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Australia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Giappone",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Cina",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brasile",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "India",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tokyo",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sydney",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Pechino",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rio de Janeiro",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Il Cairo",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Delhi",
        "level": "baby",
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
