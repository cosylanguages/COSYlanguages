(function() {
    const data = [
    {
        "word": "Australia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japan",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "China",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brazil",
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
        "word": "Beijing",
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
        "word": "Delhi",
        "level": "baby",
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
