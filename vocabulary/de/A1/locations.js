// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Frankreich",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_001",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Frankreich' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "Italien",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_002",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Italien' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "Russland",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_003",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Russland' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "Griechenland",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_004",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Griechenland' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "England",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_005",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'England' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "Spanien",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_006",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Spanien' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "USA",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_007",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'USA' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_008",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Paris' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "London",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_009",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'London' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "Rom",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_010",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Rom' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "Moskau",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_011",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Moskau' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "Athen",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_012",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'Athen' in de.",
                "examples": []
            }
        ]
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "places",
        "id": "de_starter_locations_013",
        "lang": "de",
        "form": "noun",
        "emoji": "✨",
        "transcription": "",
        "definitions": [
            {
                "text": "The word for 'New York' in de.",
                "examples": []
            }
        ]
    }
]
    const lang = "de";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
