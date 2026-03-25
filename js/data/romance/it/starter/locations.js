(function() {
    const data = [
    {
        "word": "Francia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Italia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Russia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Grecia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Inghilterra",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Spagna",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "USA",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Parigi",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Londra",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Roma",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mosca",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Atene",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "New York",
        "level": "baby",
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
