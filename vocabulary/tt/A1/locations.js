// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Франция",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_001",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Франция' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Италия",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_002",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Италия' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Россия",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_003",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Россия' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Греция",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_004",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Греция' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Англия",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_005",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Англия' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Испания",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_006",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Испания' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "АКШ",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_007",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'АКШ' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Париж",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_008",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Париж' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Лондон",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_009",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Лондон' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Рим",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_010",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Рим' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Мәскәү",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_011",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Мәскәү' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Афина",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_012",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Афина' in tt.",
                "examples": []
            }
        ]
    },
    {
        "word": "Нью-Йорк",
        "level": "starter",
        "theme": "places",
        "id": "tt_starter_locations_013",
        "lang": "tt",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Нью-Йорк' in tt.",
                "examples": []
            }
        ]
    }
]
    const lang = "tt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
