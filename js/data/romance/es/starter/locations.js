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
        "word": "Rusia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Grecia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Inglaterra",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "España",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "EE. UU.",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "París",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Londres",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Roma",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moscú",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Atenas",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Nueva York",
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
