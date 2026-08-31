// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Buch",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Gedrucktes Werk zum Lesen.",
                "examples": [
                    "Ich lese ein gutes Deutschbuch."
                ]
            }
        ],
        "lang": "de",
        "transcription": "buːx",
        "id": "de_starter_school_001"
    },
    {
        "word": "Heft",
        "level": "starter",
        "theme": "school",
        "emoji": "📓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Papierseiten zum Schreiben.",
                "examples": [
                    "Schreibe die Übung ins Heft."
                ]
            }
        ],
        "lang": "de",
        "transcription": "hɛft",
        "id": "de_starter_school_002"
    },
    {
        "word": "Stift",
        "level": "starter",
        "theme": "school",
        "emoji": "🖊️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Schreibgerät mit Tinte oder Minen.",
                "examples": [
                    "Hast du einen Stift für mich?"
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃtɪft",
        "id": "de_starter_school_003"
    },
    {
        "word": "Bleistift",
        "level": "starter",
        "theme": "school",
        "emoji": "✏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Schreibstift mit Graphitmine.",
                "examples": [
                    "Ich zeichne mit dem Bleistift."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈblaɪ̯ˌʃtɪft",
        "id": "de_starter_school_004"
    },
    {
        "word": "Unterricht",
        "level": "starter",
        "theme": "school",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Lernzeit in der Schule.",
                "examples": [
                    "Der Deutschunterricht beginnt um neun Uhr."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈʊntɐˌʁɪçt",
        "id": "de_starter_school_005"
    },
    {
        "word": "Klasse",
        "level": "starter",
        "theme": "school",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Gruppe von Schülern.",
                "examples": [
                    "Unsere Klasse ist sehr nett."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈklasə",
        "id": "de_starter_school_006"
    },
    {
        "word": "Hausaufgabe",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Schularbeit für zu Hause.",
                "examples": [
                    "Ich mache meine Hausaufgaben."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈhaʊ̯sʔaʊ̯fˌɡaːbə",
        "id": "de_starter_school_007"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
