(function() {
    const data = [
    {
        "word": "Австралия",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Япония",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ҡытай",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Бразилия",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Индия",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Токио",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Сидней",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Пекин",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Рио-де-Жанейро",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Каир",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Дели",
        "level": "intermediate",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "ba";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
