(function() {
    const data = [
    {
        "word": "Գերմանիա",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Կանադա",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Մեքսիկա",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Եգիպտոս",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Թուրքիա",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Պորտուգալիա",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Հայաստան",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Վրաստան",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Բերլին",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Մադրիդ",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Տորոնտո",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ստամբուլ",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Լիսաբոն",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Երևան",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Թբիլիսի",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Կազան",
        "level": "elementary",
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
