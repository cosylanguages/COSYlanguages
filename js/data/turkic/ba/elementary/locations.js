(function() {
    const data = [
    {
        "word": "Германия",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Канада",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Мексика",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Египет",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Төркиә",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Португалия",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Армения",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Грузия",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Берлин",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Мадрид",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Торонто",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Стамбул",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Лиссабон",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Ереван",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Тбилиси",
        "level": "elementary",
        "theme": "places_countries_cities_A0"
    },
    {
        "word": "Казан",
        "level": "elementary",
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
