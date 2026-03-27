(function() {
    const data = [
    {
        "word": "Venezia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Milano",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Napoli",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Germania",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Canada",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Messico",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Egitto",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Turchia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Portogallo",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Armenia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Georgia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Berlino",
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
        "word": "Lisbona",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Yerevan",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Tbilisi",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Kazan",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "it";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
