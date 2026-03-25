(function() {
    const data = [
    {
        "word": "Frañs",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Italia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rusia",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Gres",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Bro-Saoz",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Spagn",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Stadoù-Unanet",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Pariz",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Londrez",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Roma",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moskov",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Aten",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "New York",
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
