(function() {
    const data = [
    {
        "word": "Bangkok",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Dubai",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Singapore",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Seoul",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Budapest",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Zurich",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Geneva",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mumbai",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Shanghai",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Hong Kong",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Argentina",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Chile",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Colombia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Peru",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "South Africa",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Nigeria",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kenya",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Morocco",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Saudi Arabia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "UAE",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Israel",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Vietnam",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Indonesia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Philippines",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Manchester",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Liverpool",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Scotland",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Wales",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Germany",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Canada",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mexico",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Egypt",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turkey",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Armenia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Georgia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Berlin",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Madrid",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Toronto",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Istanbul",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Lisbon",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Yerevan",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tbilisi",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kazan",
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
