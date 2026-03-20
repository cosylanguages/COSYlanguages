(function() {
    const data = [
    {
        "word": "Alemania",
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
        "word": "Egipto",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turquía",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
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
        "word": "Berlín",
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
        "word": "Estambul",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Lisboa",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ereván",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tiflis",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kazán",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "es";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
