(function() {
    const data = [
    {
        "word": "Australia",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japón",
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
        "word": "India",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tokio",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sídney",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Pekín",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Río de Janeiro",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "El Cairo",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Delhi",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "es";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
