// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_intermediate_places_008",
        "word": "Australia",
        "lang": "en",
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
        "id": "en_intermediate_places_009",
        "word": "Japan",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Japan",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "en_intermediate_places_010",
        "word": "China",
        "lang": "en",
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
        "id": "en_intermediate_places_011",
        "word": "Brazil",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Brazil",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "en_intermediate_places_012",
        "word": "India",
        "lang": "en",
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
        "id": "en_intermediate_places_013",
        "word": "Tokyo",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Tokyo",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "en_intermediate_places_014",
        "word": "Sydney",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Sydney",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "en_intermediate_places_015",
        "word": "Beijing",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Beijing",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "en_intermediate_places_016",
        "word": "Rio de Janeiro",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Rio de Janeiro",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "en_intermediate_places_017",
        "word": "Cairo",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "other",
        "definitions": [
            {
                "text": "Cairo",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "en_intermediate_places_018",
        "word": "Delhi",
        "lang": "en",
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
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
