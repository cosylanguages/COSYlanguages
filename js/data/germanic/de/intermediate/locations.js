(function() {
    const data = [
    {
        "word": "Australien",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japan",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "China",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brasilien",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Indien",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tokio",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sydney",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Peking",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rio de Janeiro",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kairo",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Delhi",
        "level": "intermediate",
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
