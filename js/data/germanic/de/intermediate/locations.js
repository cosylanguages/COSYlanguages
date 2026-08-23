// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "de_intermediate_places_001",
        "word": "Australien",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_002",
        "word": "Japan",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_003",
        "word": "China",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_004",
        "word": "Brasilien",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_005",
        "word": "Indien",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_006",
        "word": "Tokio",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_007",
        "word": "Sydney",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_008",
        "word": "Peking",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_009",
        "word": "Rio de Janeiro",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_010",
        "word": "Kairo",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "de_intermediate_places_011",
        "word": "Delhi",
        "lang": "de",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "de";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
