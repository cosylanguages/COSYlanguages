(function() {
    const data = [
    {
        "word": "Mexico City",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Amsterdam",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Vienna",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Prague",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Barcelona",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Venice",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Florence",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Dublin",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Edinburgh",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Los Angeles",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "San Francisco",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Washington DC",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Montreal",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Thailand",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "South Korea",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Sweden",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Norway",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Denmark",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Finland",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Poland",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ukraine",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Austria",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Switzerland",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Netherlands",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Belgium",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ireland",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "London",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "France",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Italy",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Russia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Greece",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "England",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Spain",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "USA",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "London",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Rome",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Moscow",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Athens",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
