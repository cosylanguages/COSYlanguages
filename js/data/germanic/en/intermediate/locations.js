(function() {
    const data = [
    {
        "word": "Australia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Japan",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "China",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Brazil",
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
        "word": "Beijing",
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
        "word": "Delhi",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
