(function() {
    const data = [
    {
        "word": "Bretagne",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Australie",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Japon",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Chine",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Brésil",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Inde",
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
        "word": "Pékin",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Rio de Janeiro",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Le Caire",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Delhi",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "fr";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
