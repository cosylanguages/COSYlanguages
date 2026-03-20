(function() {
    const data = [
    {
        "word": "Alamagn",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kanada",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mec'hiko",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Egipt",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turkia",
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
        "word": "Jorjia",
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
    const lang = "br";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
