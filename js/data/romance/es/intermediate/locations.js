(function() {
    const data = [
    {
        "word": "Australia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japón",
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
        "word": "India",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tokio",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sídney",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Pekín",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Río de Janeiro",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "El Cairo",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Delhi",
        "level": "baby",
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
