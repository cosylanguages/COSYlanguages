// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ba_intermediate_places_001",
        "word": "Австралия",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_002",
        "word": "Япония",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_003",
        "word": "Ҡытай",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_004",
        "word": "Бразилия",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_005",
        "word": "Индия",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_006",
        "word": "Токио",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_007",
        "word": "Сидней",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_008",
        "word": "Пекин",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_009",
        "word": "Рио-де-Жанейро",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_010",
        "word": "Каир",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "ba_intermediate_places_011",
        "word": "Дели",
        "lang": "ba",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "ba";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
