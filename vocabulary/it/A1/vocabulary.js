// TODO: verify level classification
(function() {
    const data = [
{
        "word": "problema",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "il",
        "gender": "masculine",
        "emoji": "❓",
        "form": "noun", "classification": "regular", "countability": "countable", "classification": "regular",
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
        "antonyms": []
    },
{
        "word": "dove",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "transcription": "ˈdove"
    },
{
        "word": "quando",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "transcription": "ˈkwando"
    },
{
        "word": "sì",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "transcription": "ˈsi"
    },
{
        "word": "no",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "transcription": "ˈnɔ"
    },
{
        "word": "conversazione",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💬",
        "form": "noun", "classification": "regular", "countability": "countable", "classification": "regular",
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
        "antonyms": []
    },
{
        "word": "anche",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "ˈanche"
    },
{
        "word": "domanda",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun", "classification": "regular", "countability": "countable", "classification": "regular",
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
        "antonyms": []
    },
{
        "word": "risposta",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "💡",
        "form": "noun", "classification": "regular", "countability": "countable", "classification": "regular",
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
        "antonyms": []
    },
{
        "word": "quanto",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "antonyms": []
    }
    ];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();