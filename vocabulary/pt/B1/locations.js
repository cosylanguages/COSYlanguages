// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Austrália",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Austrália",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_001"
    },
    {
        "word": "Japão",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Japão",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_002"
    },
    {
        "word": "China",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "China",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_003"
    },
    {
        "word": "Brasil",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Brasil",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_004"
    },
    {
        "word": "Índia",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Índia",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_005"
    },
    {
        "word": "Tóquio",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Tóquio",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_006"
    },
    {
        "word": "Sydney",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Sydney",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_007"
    },
    {
        "word": "Pequim",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Pequim",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_008"
    },
    {
        "word": "Rio de Janeiro",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Rio de Janeiro",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_009"
    },
    {
        "word": "Cairo",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Cairo",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_010"
    },
    {
        "word": "Deli",
        "level": "intermediate",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Deli",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_intermediate_places_011"
    }
];
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
