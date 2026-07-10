// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Франция",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_001",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Франция' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Италия",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_002",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Италия' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Рәсәй",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_003",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Рәсәй' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Греция",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_004",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Греция' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Англия",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_005",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Англия' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Испания",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_006",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Испания' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "АКШ",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_007",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'АКШ' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Париж",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_008",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Париж' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Лондон",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_009",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Лондон' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Рим",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_010",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Рим' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Мәскәү",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_011",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Мәскәү' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Афина",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_012",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Афина' in ba.",
                "examples": []
            }
        ]
    },
    {
        "word": "Нью-Йорк",
        "level": "starter",
        "theme": "places",
        "id": "ba_starter_locations_013",
        "lang": "ba",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Нью-Йорк' in ba.",
                "examples": []
            }
        ]
    }
]
    const lang = "ba";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
