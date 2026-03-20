(function() {
    const data = [
    {
        "word": "Venezia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Milano",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Napoli",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Germania",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Canada",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Messico",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Egitto",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turchia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portogallo",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Armenia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Georgia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Berlino",
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
        "word": "Lisbona",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Yerevan",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tbilisi",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kazan",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "it";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
