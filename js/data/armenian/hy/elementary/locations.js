(function() {
    const data = [
    {
        "word": "Գերմանիա",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Կանադա",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Մեքսիկա",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Եգիպտոս",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Թուրքիա",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Պորտուգալիա",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Հայաստան",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Վրաստան",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Բերլին",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Մադրիդ",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Տորոնտո",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ստամբուլ",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Լիսաբոն",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Երևան",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Թբիլիսի",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Կազան",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "hy";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
