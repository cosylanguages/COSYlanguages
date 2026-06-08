// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Alemania",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Alemania",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_002"
    },
    {
        "word": "Canadá",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Canadá",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_003"
    },
    {
        "word": "México",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "México",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_004"
    },
    {
        "word": "Egipto",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Egipto",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_005"
    },
    {
        "word": "Turquía",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Turquía",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_006"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Portugal",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_007"
    },
    {
        "word": "Armenia",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Armenia",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_008"
    },
    {
        "word": "Georgia",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Georgia",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_009"
    },
    {
        "word": "Berlín",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Berlín",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_010"
    },
    {
        "word": "Madrid",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Madrid",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_011"
    },
    {
        "word": "Toronto",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Toronto",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_012"
    },
    {
        "word": "Estambul",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Estambul",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_013"
    },
    {
        "word": "Lisboa",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Lisboa",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_014"
    },
    {
        "word": "Ereván",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Ereván",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_015"
    },
    {
        "word": "Tiflis",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Tiflis",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_016"
    },
    {
        "word": "Kazán",
        "level": "elementary",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "definitions": [
            {
                "text": "Kazán",
                "examples": []
            }
        ],
        "form": "other",
        "id": "es_elementary_places_017"
    }
];
    const lang = "es";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
