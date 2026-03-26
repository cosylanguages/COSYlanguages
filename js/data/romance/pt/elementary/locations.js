(function() {
    const data = [
    {
        "word": "Alemanha",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Canadá",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "México",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Egito",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Turquia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Portugal",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Armênia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Geórgia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Berlim",
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
        "word": "Istambul",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Lisboa",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Erevan",
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
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
