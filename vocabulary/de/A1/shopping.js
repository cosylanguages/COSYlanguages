// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Preis",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Geldbetrag für eine Ware.",
                "examples": [
                    "Wie hoch ist der Preis?"
                ]
            }
        ],
        "lang": "de",
        "transcription": "pʁaɪ̯s",
        "id": "de_starter_shopping_001"
    },
    {
        "word": "Geld",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💶",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Zahlungsmittel zum Einkaufen.",
                "examples": [
                    "Ich habe genug Geld dabei."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɡɛlt",
        "id": "de_starter_shopping_002"
    },
    {
        "word": "kaufen",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "form": "verb",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Ware gegen Geld erwerben.",
                "examples": [
                    "Ich kaufe Brot im Supermarkt."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈkaʊ̯fn̩",
        "id": "de_starter_shopping_003"
    },
    {
        "word": "bezahlen",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💳",
        "form": "verb",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Geld für etwas geben.",
                "examples": [
                    "Kann ich mit Karte bezahlen?"
                ]
            }
        ],
        "lang": "de",
        "transcription": "bəˈt͡saːln̩",
        "id": "de_starter_shopping_004"
    },
    {
        "word": "Supermarkt",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Großes Geschäft für Lebensmittel.",
                "examples": [
                    "Der Supermarkt ist nah."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈzuːpɐˌmaʁkt",
        "id": "de_starter_shopping_005"
    },
    {
        "word": "teuer",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💎",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Mit hohem Preis.",
                "examples": [
                    "Das Auto ist sehr teuer."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈtɔɪ̯ɐ",
        "id": "de_starter_shopping_006"
    },
    {
        "word": "billig",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Mit niedrigem Preis.",
                "examples": [
                    "Die Äpfel sind hier billig."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈbɪlɪç",
        "id": "de_starter_shopping_007"
    },
    {
        "word": "Kasse",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🧾",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ort zum Bezahlen im Geschäft.",
                "examples": [
                    "Bitte zahlen Sie an der Kasse."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈkasə",
        "id": "de_starter_shopping_008"
    },
    {
        "word": "Rechnung",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🧾",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Papier mit dem zu zahlenden Betrag.",
                "examples": [
                    "Die Rechnung, bitte!"
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈʁɛçnʊŋ",
        "id": "de_starter_shopping_009"
    },
    {
        "word": "Tasche",
        "level": "starter",
        "theme": "shopping",
        "emoji": "👜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Behälter für Einkäufe und Sachen.",
                "examples": [
                    "Ich trage die Einkäufe in der Tasche."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈtaʃə",
        "id": "de_starter_shopping_010"
    },
    {
        "word": "Markt",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🧺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Platz für den Verkauf frischer Waren.",
                "examples": [
                    "Ich kaufe Gemüse auf dem Markt."
                ]
            }
        ],
        "lang": "de",
        "transcription": "maʁkt",
        "id": "de_starter_shopping_011"
    },
    {
        "word": "Kunde",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Käufer im Geschäft.",
                "examples": [
                    "Der Kunde bezahlt an der Kasse."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈkʊndə",
        "id": "de_starter_shopping_012"
    },
    {
        "word": "Angebot",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Günstige Ware im Verkauf.",
                "examples": [
                    "Das Brot ist heute im Angebot."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈanɡəˌboːt",
        "id": "de_starter_shopping_013"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
