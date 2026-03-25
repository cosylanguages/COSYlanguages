(function() {
    const data = [
    {
        "word": "Австралия",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Япония",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Кытай",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Бразилия",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Индия",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Токио",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Сидней",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Пекин",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Рио-де-Жанейро",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Каир",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Дөһли",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "tt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
