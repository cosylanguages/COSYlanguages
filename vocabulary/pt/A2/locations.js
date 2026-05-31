// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Alemanha",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Alemanha",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_002"
    },
    {
        "word": "Canadá",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Canadá",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_003"
    },
    {
        "word": "México",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "México",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_004"
    },
    {
        "word": "Egito",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Egito",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_005"
    },
    {
        "word": "Turquia",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Turquia",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_006"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Portugal",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_007"
    },
    {
        "word": "Armênia",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Armênia",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_008"
    },
    {
        "word": "Geórgia",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Geórgia",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_009"
    },
    {
        "word": "Berlim",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Berlim",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_010"
    },
    {
        "word": "Madrid",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Madrid",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_011"
    },
    {
        "word": "Toronto",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Toronto",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_012"
    },
    {
        "word": "Istambul",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Istambul",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_013"
    },
    {
        "word": "Lisboa",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Lisboa",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_014"
    },
    {
        "word": "Erevan",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Erevan",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_015"
    },
    {
        "word": "Tbilisi",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Tbilisi",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_016"
    },
    {
        "word": "Kazan",
        "level": "elementary",
        "theme": "places",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "other",
        "definitions": [
            {
                "text": "Kazan",
                "examples": []
            }
        ],
        "emoji": "🇵🇹",
        "id": "pt_elementary_places_017"
    }
];
    const lang = "pt";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
