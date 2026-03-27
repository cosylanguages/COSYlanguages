(function() {
    const data = [
    {
        "word": "Alemania",
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
        "word": "Egipto",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Turquía",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Portugal",
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
        "word": "Berlín",
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
        "word": "Estambul",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Lisboa",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ereván",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Tiflis",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Kazán",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "es";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
