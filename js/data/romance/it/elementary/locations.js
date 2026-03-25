(function() {
    const data = [
    {
        "word": "Venezia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Milano",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Napoli",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Germania",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Canada",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Messico",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Egitto",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turchia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portogallo",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Armenia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Georgia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Berlino",
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
        "word": "Lisbona",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Yerevan",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tbilisi",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kazan",
        "level": "baby",
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
