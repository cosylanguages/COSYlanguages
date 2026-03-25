(function() {
    const data = [
    {
        "word": "Alemanha",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Canadá",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "México",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Egito",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turquia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Armênia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Geórgia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Berlim",
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
        "word": "Istambul",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Lisboa",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Erevan",
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
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
