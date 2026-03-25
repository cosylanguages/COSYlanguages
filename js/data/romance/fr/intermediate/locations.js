(function() {
    const data = [
    {
        "word": "Bretagne",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Australie",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japon",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Chine",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brésil",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Inde",
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
        "word": "Pékin",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rio de Janeiro",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Le Caire",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Delhi",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "fr";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
