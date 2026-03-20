(function() {
    const data = [
    {
        "word": "Ավստրալիա",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ճապոնիա",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Չինաստան",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Բրազիլիա",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Հնդկաստան",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Տոկիո",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Սիդնեյ",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Պեկին",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ռիո դե Ժանեյրո",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Կահիրե",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Դելի",
        "level": "intermediate",
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
