// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Australia",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Australia",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_001"
    },
    {
        "word": "Japón",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Japón",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_002"
    },
    {
        "word": "China",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "China",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_003"
    },
    {
        "word": "Brasil",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Brasil",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_004"
    },
    {
        "word": "India",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "India",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_005"
    },
    {
        "word": "Tokio",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Tokio",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_006"
    },
    {
        "word": "Sídney",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Sídney",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_007"
    },
    {
        "word": "Pekín",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Pekín",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_008"
    },
    {
        "word": "Río de Janeiro",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Río de Janeiro",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_009"
    },
    {
        "word": "El Cairo",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "El Cairo",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_010"
    },
    {
        "word": "Delhi",
        "level": "intermediate",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Delhi",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_intermediate_places_011"
    }
];
    const lang = "es";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
