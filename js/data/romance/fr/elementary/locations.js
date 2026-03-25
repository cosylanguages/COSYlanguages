(function() {
    const data = [
    {
        "word": "Lyon",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Nice",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Bordeaux",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Allemagne",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Canada",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mexique",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Égypte",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turquie",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Arménie",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Géorgie",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Berlin",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Madrid",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Toronto",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Istanbul",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Lisbonne",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Erevan",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tbilissi",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kazan",
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
