(function() {
    const data = [
    {
        "word": "Ավստրալիա",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ճապոնիա",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Չինաստան",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Բրազիլիա",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Հնդկաստան",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Տոկիո",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Սիդնեյ",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Պեկին",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ռիո դե Ժանեյրո",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Կահիրե",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Դելի",
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
