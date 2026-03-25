(function() {
    const data = [
    {
        "word": "Санкт-Петербург",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Сочи",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Казань",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Германия",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Канада",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Мексика",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Египет",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Турция",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Португалия",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Армения",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Грузия",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Берлин",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Мадрид",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Торонто",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Стамбул",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Лиссабон",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ереван",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Тбилиси",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Казань",
        "level": "baby",
        "theme": "places_countries_cities_A0"
    }
];
    const lang = "ru";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
