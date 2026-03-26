(function() {
    const data = [
    {
        "word": "Lyon",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Nice",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Bordeaux",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Allemagne",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Canada",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Mexique",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Égypte",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Turquie",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Portugal",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Arménie",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Géorgie",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Berlin",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Madrid",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Toronto",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Istanbul",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Lisbonne",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Erevan",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Tbilissi",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Kazan",
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
