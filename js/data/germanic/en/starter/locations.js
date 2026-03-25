(function() {
    const data = [
    {
        "word": "Mexico City",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Amsterdam",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Vienna",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Prague",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Barcelona",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Venice",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Florence",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Dublin",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Edinburgh",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Chicago",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Los Angeles",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "San Francisco",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Miami",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Washington DC",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Vancouver",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Montreal",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Melbourne",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Thailand",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "South Korea",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sweden",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Norway",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Denmark",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Finland",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Poland",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ukraine",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Austria",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Switzerland",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Netherlands",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Belgium",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ireland",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "London",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "France",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Italy",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Russia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Greece",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "England",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Spain",
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
        "word": "Rome",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moscow",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Athens",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "New York",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
