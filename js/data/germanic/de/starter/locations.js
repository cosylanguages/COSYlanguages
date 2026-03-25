(function() {
    const data = [
    {
        "word": "Frankreich",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Italien",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Russland",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Griechenland",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "England",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Spanien",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "USA",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Paris",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "London",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rom",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moskau",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Athen",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "New York",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "de";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
