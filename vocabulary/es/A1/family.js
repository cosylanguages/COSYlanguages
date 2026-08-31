// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "padre",
        "level": "starter",
        "theme": "family",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "El varón que tiene hijos.",
                "examples": [
                    "Mi padre trabaja en una oficina."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈpa.ðre",
        "id": "es_starter_family_001"
    },
    {
        "word": "madre",
        "level": "starter",
        "theme": "family",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "La mujer que tiene hijos.",
                "examples": [
                    "Mi madre prepara la comida."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈma.ðre",
        "id": "es_starter_family_002"
    },
    {
        "word": "hermano",
        "level": "starter",
        "theme": "family",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Hijo de los mismos padres.",
                "examples": [
                    "Tengo un hermano mayor."
                ]
            }
        ],
        "lang": "es",
        "transcription": "er.ˈma.no",
        "id": "es_starter_family_003"
    },
    {
        "word": "hermana",
        "level": "starter",
        "theme": "family",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Hija de los mismos padres.",
                "examples": [
                    "Mi hermana estudia en la escuela."
                ]
            }
        ],
        "lang": "es",
        "transcription": "er.ˈma.na",
        "id": "es_starter_family_004"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
