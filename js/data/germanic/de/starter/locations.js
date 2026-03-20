(function() {
    const data = [
    {
        "word": "Frankreich",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Italien",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Russland",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Griechenland",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "England",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Spanien",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "USA",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "London",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rom",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moskau",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Athen",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "New York",
        "level": "starter",
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
