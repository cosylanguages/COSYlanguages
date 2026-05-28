// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_intermediate_places_001",
        "word": "Australia",
        "form": "other",
        "definitions": [
            {
                "text": "Australia",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_002",
        "word": "Japan",
        "form": "other",
        "definitions": [
            {
                "text": "Japan",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_003",
        "word": "China",
        "form": "other",
        "definitions": [
            {
                "text": "China",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_004",
        "word": "Brazil",
        "form": "other",
        "definitions": [
            {
                "text": "Brazil",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_005",
        "word": "India",
        "form": "other",
        "definitions": [
            {
                "text": "India",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_006",
        "word": "Tokyo",
        "form": "other",
        "definitions": [
            {
                "text": "Tokyo",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_007",
        "word": "Sydney",
        "form": "other",
        "definitions": [
            {
                "text": "Sydney",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_008",
        "word": "Beijing",
        "form": "other",
        "definitions": [
            {
                "text": "Beijing",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_009",
        "word": "Rio de Janeiro",
        "form": "other",
        "definitions": [
            {
                "text": "Rio de Janeiro",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_010",
        "word": "Cairo",
        "form": "other",
        "definitions": [
            {
                "text": "Cairo",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_places_011",
        "word": "Delhi",
        "form": "other",
        "definitions": [
            {
                "text": "Delhi",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "sub_theme": null
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
