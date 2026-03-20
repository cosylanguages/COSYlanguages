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
        "word": "Rusia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Grecia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Inglaterra",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "España",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "EE. UU.",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "París",
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
        "word": "Moscú",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Atenas",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Nueva York",
        "level": "starter",
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
