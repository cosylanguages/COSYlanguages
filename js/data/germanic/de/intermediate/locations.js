(function() {
    const data = [
    {
        "word": "Australien",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Japan",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "China",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Brasilien",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Indien",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Tokio",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Peking",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Rio de Janeiro",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Kairo",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Delhi",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "de";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
