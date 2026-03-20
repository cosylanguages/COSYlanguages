(function() {
    const data = [
    {
        "word": "Deutschland",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kanada",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Mexiko",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ägypten",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Türkei",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Armenien",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Georgien",
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
        "word": "Lissabon",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Eriwan",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Tiflis",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Kasan",
        "level": "elementary",
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
