// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Lehrer",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👨‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Person, die an einer Schule unterrichtet.",
                "examples": [
                    "Der Lehrer erklärt die Aufgabe."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈleːʁɐ",
        "id": "de_starter_jobs_001"
    },
    {
        "word": "Arzt",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👨‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Person, die Kranke behandelt.",
                "examples": [
                    "Der Arzt untersucht den Patienten."
                ]
            }
        ],
        "lang": "de",
        "transcription": "aːɐ̯t͡st",
        "id": "de_starter_jobs_002"
    },
    {
        "word": "Koch",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👨‍🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Person, die beruflich kocht.",
                "examples": [
                    "Der Koch bereitet das Essen zu."
                ]
            }
        ],
        "lang": "de",
        "transcription": "kɔx",
        "id": "de_starter_jobs_003"
    },
    {
        "word": "Fahrer",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👨‍✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Person, die ein Fahrzeug lenkt.",
                "examples": [
                    "Der Fahrer steuert den Bus."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈfaːʁɐ",
        "id": "de_starter_jobs_004"
    },
    {
        "word": "Ingenieur",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fachmann für Technik und Konstruktion.",
                "examples": [
                    "Der Ingenieur baut Brücken."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɪnʒeˈnjøːɐ̯",
        "id": "de_starter_jobs_005"
    },
    {
        "word": "Student",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Person, die an einer Universität studiert.",
                "examples": [
                    "Der Student lernt in der Bibliothek."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃtuˈdɛnt",
        "id": "de_starter_jobs_006"
    },
    {
        "word": "Verkäufer",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🧑‍💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Person, die Waren in einem Geschäft verkauft.",
                "examples": [
                    "Der Verkäufer bedient die Kunden."
                ]
            }
        ],
        "lang": "de",
        "transcription": "fɛɐ̯ˈkɔɪ̯fɐ",
        "id": "de_starter_jobs_007"
    },
    {
        "word": "Kellner",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🧑‍🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Person, die Gäste im Restaurant bedient.",
                "examples": [
                    "Der Kellner bringt die Speisekarte."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈkɛlnɐ",
        "id": "de_starter_jobs_008"
    },
    {
        "word": "Polizist",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mitglied der Polizei.",
                "examples": [
                    "Der Polizist hilft im Verkehr."
                ]
            }
        ],
        "lang": "de",
        "transcription": "poliˈt͡sɪst",
        "id": "de_starter_jobs_009"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
