// TODO: verify level classification
(function() {
    const lang = "it";
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
        "lang": "it",
        "id": "it_starter_language_001"
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
        "lang": "it",
        "id": "it_starter_language_002"
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
        "lang": "it",
        "id": "it_starter_language_003"
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
        "lang": "it",
        "id": "it_starter_language_004"
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
        "lang": "it",
        "id": "it_starter_language_005"
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
        "lang": "it",
        "id": "it_starter_language_006"
    },
    {
        "word": "anche",
        "level": "starter",
        "theme": "language",
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
        "lang": "it",
        "id": "it_starter_language_007"
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
        "lang": "it",
        "id": "it_starter_language_008"
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
        "lang": "it",
        "id": "it_starter_language_009"
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
        "lang": "it",
        "id": "it_starter_language_010"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
