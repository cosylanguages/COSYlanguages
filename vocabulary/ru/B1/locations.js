// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_intermediate_places_001",
        "word": "Сибирь",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Сибирь",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_002",
        "word": "Урал",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Урал",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_003",
        "word": "Австралия",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Австралия",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_004",
        "word": "Япония",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Япония",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_005",
        "word": "Китай",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Китай",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_006",
        "word": "Бразилия",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Бразилия",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_007",
        "word": "Индия",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Индия",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_008",
        "word": "Токио",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Токио",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_009",
        "word": "Сидней",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Сидней",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_010",
        "word": "Пекин",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Пекин",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_011",
        "word": "Рио-де-Жанейро",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Рио-де-Жанейро",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_012",
        "word": "Каир",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Каир",
                "examples": []
            }
        ]
    },
    {
        "id": "ru_intermediate_places_013",
        "word": "Дели",
        "lang": "ru",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Дели",
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
