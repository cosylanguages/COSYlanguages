(function() {
    const data = [
    {
        "word": "França",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Itália",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Rússia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Grécia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Inglaterra",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Espanha",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "EUA",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Roma",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Moscou",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Atenas",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Nova York",
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
