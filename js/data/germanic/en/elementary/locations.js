(function() {
    const data = [
    {
        "word": "Bangkok",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Dubai",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Singapore",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Seoul",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Budapest",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Zurich",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Geneva",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Mumbai",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Shanghai",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Hong Kong",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Argentina",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Chile",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Colombia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Peru",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "South Africa",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Nigeria",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Kenya",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Morocco",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Saudi Arabia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "UAE",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Israel",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Vietnam",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Indonesia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Philippines",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Manchester",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Liverpool",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Scotland",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Wales",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Germany",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Canada",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Mexico",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Egypt",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Turkey",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Portugal",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Armenia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Georgia",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Berlin",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Madrid",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Toronto",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Istanbul",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Lisbon",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Yerevan",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Tbilisi",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Kazan",
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
