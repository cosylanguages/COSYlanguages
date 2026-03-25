(function() {
    const data = [
    {
        "word": "Alemania",
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
        "word": "Egipto",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turquía",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
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
        "word": "Berlín",
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
        "word": "Estambul",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Lisboa",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ereván",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tiflis",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kazán",
        "level": "baby",
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
