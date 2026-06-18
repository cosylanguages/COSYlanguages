// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "es_intermediate_places_001",
        "word": "Australia",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Australia",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_002",
        "word": "Japón",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Japón",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_003",
        "word": "China",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "China",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_004",
        "word": "Brasil",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Brasil",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_005",
        "word": "India",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "India",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_006",
        "word": "Tokio",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Tokio",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_007",
        "word": "Sídney",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Sídney",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_008",
        "word": "Pekín",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Pekín",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_009",
        "word": "Río de Janeiro",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Río de Janeiro",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_010",
        "word": "El Cairo",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "El Cairo",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "es_intermediate_places_011",
        "word": "Delhi",
        "lang": "es",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Delhi",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "es";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
