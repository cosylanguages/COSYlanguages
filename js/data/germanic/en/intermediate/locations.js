(function() {
    const data = [
    {
        "word": "Australia",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japan",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "China",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brazil",
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
        "word": "Beijing",
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
        "word": "Delhi",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
