(function() {
    const data = [
    {
        "word": "Alemanha",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Canadá",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "México",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Egito",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turquia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Armênia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Geórgia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Berlim",
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
        "word": "Istambul",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Lisboa",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Erevan",
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
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
