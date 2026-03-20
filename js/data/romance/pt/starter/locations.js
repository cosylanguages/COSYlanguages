(function() {
    const data = [
    {
        "word": "França",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Itália",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rússia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Grécia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Inglaterra",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Espanha",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "EUA",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Londres",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Roma",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moscou",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Atenas",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Nova York",
        "level": "starter",
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
