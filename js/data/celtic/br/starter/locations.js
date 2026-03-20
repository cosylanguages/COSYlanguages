(function() {
    const data = [
    {
        "word": "Frañs",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Italia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Rusia",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Gres",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Bro-Saoz",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Spagn",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Stadoù-Unanet",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Pariz",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Londrez",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Roma",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Moskov",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Aten",
        "level": "starter",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "New York",
        "level": "starter",
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
