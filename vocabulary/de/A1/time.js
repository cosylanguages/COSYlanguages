// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Tag",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Zeitabschnitt von 24 Stunden.",
                "examples": [
                    "Heute ist ein schöner Tag."
                ]
            }
        ],
        "lang": "de",
        "transcription": "taːk",
        "id": "de_starter_time_001"
    },
    {
        "word": "Nacht",
        "level": "starter",
        "theme": "time",
        "emoji": "🌃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Dunkle Zeit zum Schlafen.",
                "examples": [
                    "Die Nacht ist ruhig."
                ]
            }
        ],
        "lang": "de",
        "transcription": "naxt",
        "id": "de_starter_time_002"
    },
    {
        "word": "heute",
        "level": "starter",
        "theme": "time",
        "emoji": "📆",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Der gegenwärtige Tag.",
                "examples": [
                    "Heute haben wir Deutschunterricht."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈhɔɪ̯tə",
        "id": "de_starter_time_003"
    },
    {
        "word": "morgen",
        "level": "starter",
        "theme": "time",
        "emoji": "➡️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Der Tag nach heute.",
                "examples": [
                    "Morgen fahre ich nach Berlin."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈmɔʁɡn̩",
        "id": "de_starter_time_004"
    },
    {
        "word": "gestern",
        "level": "starter",
        "theme": "time",
        "emoji": "⬅️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Der Tag vor heute.",
                "examples": [
                    "Gestern war das Wetter schön."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈɡɛstɐn",
        "id": "de_starter_time_005"
    },
    {
        "word": "Woche",
        "level": "starter",
        "theme": "time",
        "emoji": "🗓️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Zeitraum von sieben Tagen.",
                "examples": [
                    "Eine Woche hat sieben Tage."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈvɔxə",
        "id": "de_starter_time_006"
    },
    {
        "word": "Monat",
        "level": "starter",
        "theme": "time",
        "emoji": "🗓️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Zeitraum von etwa 30 Tagen.",
                "examples": [
                    "Der Januar ist der erste Monat."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈmoːnat",
        "id": "de_starter_time_007"
    },
    {
        "word": "Jahr",
        "level": "starter",
        "theme": "time",
        "emoji": "📆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Zeitraum von 12 Monaten.",
                "examples": [
                    "Ein Jahr hat 365 Tage."
                ]
            }
        ],
        "lang": "de",
        "transcription": "jaːɐ̯",
        "id": "de_starter_time_008"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
