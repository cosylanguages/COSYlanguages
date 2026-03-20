(function() {
    const data = {
    "ru": [
        {
            "word": "Санкт-Петербург",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Сочи",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Сибирь",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Урал",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Казань",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Франция",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Италия",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Россия",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Греция",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Англия",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Германия",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Испания",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "США",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Канада",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        },
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
            "word": "Китай",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Бразилия",
            "level": "intermediate",
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
            "word": "Турция",
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
            "word": "Индия",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Париж",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Лондон",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Рим",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Москва",
            "level": "starter",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Афины",
            "level": "starter",
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
            "word": "Нью-Йорк",
            "level": "starter",
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
            "word": "Торонто",
            "level": "elementary",
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
            "word": "Дели",
            "level": "intermediate",
            "theme": "places_countries_cities_A0"
        },
        {
            "word": "Казань",
            "level": "elementary",
            "theme": "places_countries_cities_A0"
        }
    ]
};
    if (window.vocabularyData) {
        for (let lang in data) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...data[lang]];
            }
        }
    }
    window.locationsData = { ...window.locationsData, ...data };
})();
