(function() {
    const data = [
    {
        "word": "Alamagn",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Kanada",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Mec'hiko",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Egipt",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Turkia",
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
        "word": "Jorjia",
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
    const lang = "br";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
