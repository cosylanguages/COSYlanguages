(function() {
    const data = [
    {
        "word": "Australia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Japón",
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
        "word": "India",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Tokio",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Sídney",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Pekín",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Río de Janeiro",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "El Cairo",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Delhi",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "es";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
