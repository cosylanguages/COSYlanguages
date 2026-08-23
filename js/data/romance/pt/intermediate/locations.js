// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "pt_intermediate_places_001",
        "word": "Austrália",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_002",
        "word": "Japão",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_003",
        "word": "China",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_004",
        "word": "Brasil",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_005",
        "word": "Índia",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_006",
        "word": "Tóquio",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_007",
        "word": "Sydney",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_008",
        "word": "Pequim",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_009",
        "word": "Rio de Janeiro",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_010",
        "word": "Cairo",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "pt_intermediate_places_011",
        "word": "Deli",
        "lang": "pt",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
