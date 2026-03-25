(function() {
    const data = [
    {
        "word": "Գերմանիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Կանադա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Մեքսիկա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Եգիպտոս",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Թուրքիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Պորտուգալիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Հայաստան",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Վրաստան",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Բերլին",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Մադրիդ",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Տորոնտո",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ստամբուլ",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Լիսաբոն",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Երևան",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Թբիլիսի",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Կազան",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "hy";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
