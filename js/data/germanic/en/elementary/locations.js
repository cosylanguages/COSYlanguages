(function() {
    const data = [
    {
        "word": "Bangkok",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Dubai",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Singapore",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Seoul",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Budapest",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Zurich",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Geneva",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mumbai",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Shanghai",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Hong Kong",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Argentina",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Chile",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Colombia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Peru",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "South Africa",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Nigeria",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kenya",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Morocco",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Saudi Arabia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "UAE",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Israel",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Vietnam",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Indonesia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Philippines",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Manchester",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Liverpool",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Scotland",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Wales",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Germany",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Canada",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mexico",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Egypt",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turkey",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Armenia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Georgia",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Berlin",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Madrid",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Toronto",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Istanbul",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Lisbon",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Yerevan",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tbilisi",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kazan",
        "level": "elementary",
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
