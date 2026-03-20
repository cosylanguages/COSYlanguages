(function() {
    const data = [
    {
        "word": "Francia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Italia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Russia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Grecia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Inghilterra",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Spagna",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "USA",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Parigi",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Londra",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Roma",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mosca",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Atene",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "New York",
        "level": "starter",
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
