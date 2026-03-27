(function() {
    const data = [
    {
        "word": "Deutschland",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Kanada",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Mexiko",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ägypten",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Türkei",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Portugal",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Armenien",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Georgien",
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
        "word": "Lissabon",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Eriwan",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Tiflis",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Kasan",
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
