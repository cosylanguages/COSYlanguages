(function() {
    const data = [
    {
        "word": "yo",
        "level": "starter",
        "theme": "people",
        "emoji": "🙋",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Primera persona del singular.",
                "examples": [
                    "Yo soy estudiante."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_003"
    },
    {
        "word": "tú",
        "level": "starter",
        "theme": "people",
        "emoji": "🫵",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Segunda persona del singular.",
                "examples": [
                    "¿Cómo estás tú?"
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_004"
    },
    {
        "word": "él",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Tercera persona del singular (masculino).",
                "examples": [
                    "Él es mi hermano."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_005"
    },
    {
        "word": "ella",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Tercera persona del singular (femenino).",
                "examples": [
                    "Ella es mi hermana."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_006"
    },
    {
        "word": "nosotros",
        "level": "starter",
        "theme": "people",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Primera persona del plural.",
                "examples": [
                    "Nosotros somos amigos."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_007"
    },
    {
        "word": "ellos",
        "level": "starter",
        "theme": "people",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Tercera persona del plural.",
                "examples": [
                    "Ellos trabajan juntos."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_008"
    },
    {
        "word": "mi",
        "level": "starter",
        "theme": "people",
        "emoji": "🙋",
        "form": "determiner",
        "definitions": [
            {
                "text": "Indica posesión (yo).",
                "examples": [
                    "Mi nombre es Juan."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_009"
    },
    {
        "word": "tu",
        "level": "starter",
        "theme": "people",
        "emoji": "🫵",
        "form": "determiner",
        "definitions": [
            {
                "text": "Indica posesión (tú).",
                "examples": [
                    "¿Es tu teléfono?"
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_010"
    },
    {
        "word": "siempre",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "adverb",
        "definitions": [
            {
                "text": "En todo momento.",
                "examples": [
                    "Siempre bebo café."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "periods",
        "id": "es_starter_time_003"
    },
    {
        "word": "nunca",
        "level": "starter",
        "theme": "time",
        "emoji": "❌",
        "form": "adverb",
        "definitions": [
            {
                "text": "En ningún momento.",
                "examples": [
                    "Nunca llego tarde."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "periods",
        "id": "es_starter_time_004"
    },
    {
        "word": "y",
        "level": "starter",
        "theme": "language",
        "emoji": "➕",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Une palabras o frases.",
                "examples": [
                    "Café y té."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "grammar_terms",
        "id": "es_starter_language_001"
    },
    {
        "word": "pero",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Indica contraste.",
                "examples": [
                    "Me gusta el café, pero no la leche."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "grammar_terms",
        "id": "es_starter_language_002"
    }
];
    const lang = "es";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
