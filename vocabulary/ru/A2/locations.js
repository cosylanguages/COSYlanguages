// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_elementary_places_024",
        "word": "Санкт-Петербург",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Санкт-Петербург",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_025",
        "word": "Сочи",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Сочи",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_026",
        "word": "Казань",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Казань",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_027",
        "word": "Германия",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Германия",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_028",
        "word": "Канада",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Канада",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_029",
        "word": "Мексика",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Мексика",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_030",
        "word": "Египет",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Египет",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_031",
        "word": "Турция",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Турция",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_032",
        "word": "Португалия",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Португалия",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_033",
        "word": "Армения",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Армения",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_034",
        "word": "Грузия",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Грузия",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_035",
        "word": "Берлин",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Берлин",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_036",
        "word": "Мадрид",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Мадрид",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_037",
        "word": "Торонто",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Торонто",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_038",
        "word": "Стамбул",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Стамбул",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_039",
        "word": "Лиссабон",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Лиссабон",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_040",
        "word": "Ереван",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Ереван",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_elementary_places_041",
        "word": "Тбилиси",
        "lang": "ru",
        "level": "elementary",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Тбилиси",
                "examples": []
            }
        ]
    }
];
    const lang = "ru";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
