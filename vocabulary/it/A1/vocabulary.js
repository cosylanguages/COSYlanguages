// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "problema",
        "level": "starter",
        "theme": "language",
        "article": "il",
        "gender": "masculine",
        "emoji": "❓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "problemi",
        "definitions": [
            {
                "text": "Una difficoltà.",
                "examples": [
                    "C'è un problema."
                ]
            }
        ],
        "partitive": "del",
        "transcription": "proˈblɛma",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_vocabulary_001",
        "lang": "it"
    },
    {
        "word": "dove",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "📍",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede di un luogo.",
                "examples": [
                    "Dove abiti?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈdove",
        "id": "it_starter_vocabulary_002",
        "lang": "it"
    },
    {
        "word": "quando",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "⏰",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Chiede del tempo.",
                "examples": [
                    "Quando vieni?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈkwando",
        "id": "it_starter_vocabulary_003",
        "lang": "it"
    },
    {
        "word": "sì",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "✅",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Affermazione.",
                "examples": [
                    "Sì, voglio bene."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈsi",
        "id": "it_starter_vocabulary_004",
        "lang": "it"
    },
    {
        "word": "no",
        "level": "starter",
        "theme": "language",
        "article": "",
        "gender": "",
        "emoji": "❌",
        "form": "adverb",
        "plural": "",
        "definitions": [
            {
                "text": "Negazione.",
                "examples": [
                    "No, grazie."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈnɔ",
        "id": "it_starter_vocabulary_005",
        "lang": "it"
    },
    {
        "word": "conversazione",
        "level": "starter",
        "theme": "language",
        "article": "la",
        "gender": "feminine",
        "emoji": "💬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "conversazioni",
        "definitions": [
            {
                "text": "Parlare insieme.",
                "examples": [
                    "Una conversazione interessante."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "konverzatˈtsjone",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_vocabulary_006",
        "lang": "it"
    },
    {
        "word": "anche",
        "level": "starter",
        "theme": "conjunctions_connectors",
        "article": "",
        "gender": "",
        "emoji": "➕",
        "form": "adjunction",
        "plural": "",
        "definitions": [
            {
                "text": "Pure.",
                "examples": [
                    "Anch'io."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "transcription": "ˈanche",
        "id": "it_starter_vocabulary_007",
        "lang": "it"
    },
    {
        "word": "domanda",
        "level": "starter",
        "theme": "language",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "domande",
        "definitions": [
            {
                "text": "Ciò che si chiede.",
                "examples": [
                    "Ho una domanda."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "ˈdomanda",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_vocabulary_008",
        "lang": "it"
    },
    {
        "word": "risposta",
        "level": "starter",
        "theme": "language",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "risposte",
        "definitions": [
            {
                "text": "Ciò che si dice dopo una domanda.",
                "examples": [
                    "La risposta è corretta."
                ]
            }
        ],
        "partitive": "della",
        "transcription": "risˈpɔsta",
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "id": "it_starter_vocabulary_009",
        "lang": "it"
    },
    {
        "word": "quanto",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "form": "adjective",
        "transcription": "ˈkwanto",
        "feminine": "quanta",
        "plural": "quanti",
        "femininePlural": "quante",
        "definitions": [
            {
                "text": "Usato per chiedere la quantità o il numero.",
                "examples": [
                    "Quanto costa?",
                    "Quanti anni hai?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "aggettivo interrogativo",
        "antonyms": [],
        "id": "it_starter_vocabulary_010",
        "lang": "it"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();