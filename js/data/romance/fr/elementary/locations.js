(function() {
    const data = [
    {
        "word": "Lyon",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Nice",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Bordeaux",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Allemagne",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Canada",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mexique",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Égypte",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turquie",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Arménie",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Géorgie",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Berlin",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Madrid",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Toronto",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Istanbul",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Lisbonne",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Erevan",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tbilissi",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kazan",
        "level": "elementary",
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
