(function() {
    const data = [
    {
        "word": "Alamagn",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kanada",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mec'hiko",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Egipt",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Turkia",
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
        "word": "Jorjia",
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
    const lang = "br";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
