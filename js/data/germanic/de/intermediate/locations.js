(function() {
    const data = [
    {
        "word": "Australien",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Japan",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "China",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Brasilien",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Indien",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tokio",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Sydney",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Peking",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rio de Janeiro",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kairo",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Delhi",
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
