(function() {
    const lang = "fr";
    const data = [
    {
        "word": "étudiant",
        "level": "starter",
        "theme": "school",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "étudiants",
        "definitions": [
            {
                "text": "Personne qui étudie.",
                "examples": [
                    "Je suis étudiant."
                ]
            }
        ],
        "transcription": "/e.ty.djɑ̃/",
        "lang": "fr",
        "id": "fr_starter_school_001"
    },
    {
        "word": "camarade de classe",
        "level": "starter",
        "theme": "school",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "camarades de classe",
        "definitions": [
            {
                "text": "Personne dans la même classe.",
                "examples": [
                    "Mon camarade de classe est sympa."
                ]
            }
        ],
        "transcription": "/ka.ma.ʁad də klas/",
        "lang": "fr",
        "id": "fr_starter_school_002"
    },
    {
        "word": "université",
        "level": "starter",
        "theme": "types_of_education",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "universités",
        "definitions": [
            {
                "text": "École d'enseignement supérieur.",
                "examples": [
                    "Je vais à l'université."
                ]
            }
        ],
        "transcription": "/y.ni.vɛʁ.si.te/",
        "lang": "fr",
        "id": "fr_starter_types_of_education_001"
    },
    {
        "word": "langue",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "langues",
        "definitions": [
            {
                "text": "Ce qu'on parle.",
                "examples": [
                    "Le français est une langue."
                ]
            }
        ],
        "transcription": "/lɑ̃ɡ/",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "lingua"
        },
        "lang": "fr",
        "id": "fr_starter_school_003"
    },
    {
        "word": "mot",
        "level": "starter",
        "theme": "school",
        "article": "le",
        "gender": "masculine",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mots",
        "definitions": [
            {
                "text": "Unité de langage.",
                "examples": [
                    "Un mot difficile."
                ]
            }
        ],
        "transcription": "/mo/",
        "lang": "fr",
        "id": "fr_starter_school_004"
    },
    {
        "word": "phrase",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "phrases",
        "definitions": [
            {
                "text": "Ensemble de mots.",
                "examples": [
                    "Fais une phrase."
                ]
            }
        ],
        "transcription": "/fʁaz/",
        "lang": "fr",
        "id": "fr_starter_school_005"
    },
    {
        "word": "erreur",
        "level": "starter",
        "theme": "school",
        "article": "l'",
        "gender": "feminine",
        "emoji": "❌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "erreurs",
        "definitions": [
            {
                "text": "Faute.",
                "examples": [
                    "Faire une erreur."
                ]
            }
        ],
        "transcription": "/e.ʁœʁ/",
        "lang": "fr",
        "id": "fr_starter_school_006"
    },
    {
        "word": "faute",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "⚠️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fautes",
        "definitions": [
            {
                "text": "Manquement à une règle.",
                "examples": [
                    "Une faute de français."
                ]
            }
        ],
        "transcription": "/fot/",
        "lang": "fr",
        "id": "fr_starter_school_007"
    },
    {
        "word": "mathématiques",
        "level": "starter",
        "theme": "school",
        "emoji": "🔢",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "gender": "feminine",
        "article": "les",
        "plural": "mathématiques",
        "definitions": [
            {
                "text": "L'étude des nombres, des quantités et des formes.",
                "examples": [
                    "Les mathématiques sont ma matière préférée.",
                    "Nous avons cours de maths à neuf heures."
                ]
            }
        ],
        "transcription": "matematik",
        "lang": "fr",
        "id": "fr_starter_school_008"
    },
    {
        "word": "histoire",
        "level": "starter",
        "theme": "school",
        "emoji": "📜",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "gender": "feminine",
        "article": "l'",
        "plural": "histoires",
        "definitions": [
            {
                "text": "L'étude des événements passés.",
                "examples": [
                    "Nous étudions l'histoire de France.",
                    "Il aime lire des livres d'histoire."
                ]
            }
        ],
        "transcription": "istwaʁ",
        "lang": "fr",
        "id": "fr_starter_school_009"
    },
    {
        "word": "science",
        "level": "starter",
        "theme": "school",
        "emoji": "🧪",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "gender": "feminine",
        "article": "la",
        "plural": "sciences",
        "definitions": [
            {
                "text": "L'étude de la nature et du monde physique.",
                "examples": [
                    "La science est très intéressante.",
                    "Aujourd'hui, nous faisons une expérience de science."
                ]
            }
        ],
        "transcription": "sjɑ̃s",
        "lang": "fr",
        "id": "fr_starter_school_010"
    },
    {
        "word": "géographie",
        "level": "starter",
        "theme": "school",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "gender": "feminine",
        "article": "la",
        "plural": "géographies",
        "definitions": [
            {
                "text": "L'étude des lieux et des relations entre les personnes et leurs environnements.",
                "examples": [
                    "Nous utilisons une carte pour le cours de géographie.",
                    "J'aime étudier la géographie du monde."
                ]
            }
        ],
        "transcription": "ʒeɔɡʁafi",
        "lang": "fr",
        "id": "fr_starter_school_011"
    },
    {
        "word": "règle",
        "level": "starter",
        "theme": "school_stationery",
        "emoji": "📏",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "feminine",
        "article": "la",
        "plural": "règles",
        "definitions": [
            {
                "text": "Un instrument utilisé pour mesurer ou tracer des lignes droites.",
                "examples": [
                    "J'utilise la règle pour dessiner une ligne.",
                    "Ma règle mesure trente centimètres."
                ]
            }
        ],
        "transcription": "ʁɛɡl",
        "lang": "fr",
        "id": "fr_starter_school_stationery_001"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
