(function() {
    const data = [
    {
        "word": "Санкт-Петербург",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Сочи",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Казань",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Германия",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Канада",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Мексика",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Египет",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Турция",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Португалия",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Армения",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Грузия",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Берлин",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Мадрид",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Торонто",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Стамбул",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Лиссабон",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Ереван",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Тбилиси",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    },
    {
        "word": "Казань",
        "level": "starter",
        "theme": "places_countries_cities_A1"
    }
];
    const lang = "ru";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
