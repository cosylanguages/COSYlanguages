(function() {
    const data = [
    {
        "word": "Deutschland",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kanada",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mexiko",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ägypten",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Türkei",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Armenien",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Georgien",
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
        "word": "Lissabon",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Eriwan",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tiflis",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kasan",
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
