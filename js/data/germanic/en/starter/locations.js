(function() {
    const data = [
    {
        "word": "Mexico City",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Amsterdam",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Vienna",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Prague",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Barcelona",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Venice",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Florence",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Dublin",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Edinburgh",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Los Angeles",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "San Francisco",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Washington DC",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Montreal",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Thailand",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "South Korea",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sweden",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Norway",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Denmark",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Finland",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Poland",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ukraine",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Austria",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Switzerland",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Netherlands",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Belgium",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ireland",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "London",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "France",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Italy",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Russia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Greece",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "England",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Spain",
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
        "word": "Rome",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moscow",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Athens",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "New York",
        "level": "starter",
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
