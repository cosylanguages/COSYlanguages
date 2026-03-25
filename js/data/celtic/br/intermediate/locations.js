(function() {
    const data = [
    {
        "word": "Aostralia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japan",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sina",
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
        "word": "Pekin",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rio de Janeiro",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kaero",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Delhi",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "br";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
