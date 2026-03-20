(function() {
    const data = [
    {
        "word": "Bretagne",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Australie",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japon",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Chine",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brésil",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Inde",
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
        "word": "Pékin",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rio de Janeiro",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Le Caire",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Delhi",
        "level": "intermediate",
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
