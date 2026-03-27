(function() {
    const data = [
    {
        "word": "Австралия",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Япония",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Кытай",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Бразилия",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Индия",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Токио",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Сидней",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Пекин",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Рио-де-Жанейро",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Каир",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Дөһли",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "tt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
