(function() {
    const data = [
    {
        "word": "Ավստրալիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ճապոնիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Չինաստան",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Բրազիլիա",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Հնդկաստան",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Տոկիո",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Սիդնեյ",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Պեկին",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ռիո դե Ժանեյրո",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Կահիրե",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Դելի",
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
