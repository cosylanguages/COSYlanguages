// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Auto",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fahrzeug mit vier Rädern.",
                "examples": [
                    "Wir fahren mit dem Auto nach Italien."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈaʊ̯to",
        "id": "de_starter_travel_001"
    },
    {
        "word": "Zug",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Verkehrsmittel auf Schienen.",
                "examples": [
                    "Der Zug fährt um neun Uhr ab."
                ]
            }
        ],
        "lang": "de",
        "transcription": "t͡suːk",
        "id": "de_starter_travel_002"
    },
    {
        "word": "Bus",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Großes öffentliches Fahrzeug.",
                "examples": [
                    "Der Bus hält an der Station."
                ]
            }
        ],
        "lang": "de",
        "transcription": "bʊs",
        "id": "de_starter_travel_003"
    },
    {
        "word": "Flugzeug",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Verkehrsmittel in der Luft.",
                "examples": [
                    "Das Flugzeug fliegt nach Spanien."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈfluːkˌt͡sɔɪ̯k",
        "id": "de_starter_travel_004"
    },
    {
        "word": "Reise",
        "level": "starter",
        "theme": "travel",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fahrt oder Flug an einen anderen Ort.",
                "examples": [
                    "Gute Reise!"
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈʁaɪ̯zə",
        "id": "de_starter_travel_005"
    },
    {
        "word": "Ticket",
        "level": "starter",
        "theme": "travel",
        "emoji": "🎟️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fahrkarte für Bus oder Zug.",
                "examples": [
                    "Ich kaufe ein Ticket am Schalter."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈtɪkət",
        "id": "de_starter_travel_006"
    },
    {
        "word": "Fahrkarte",
        "level": "starter",
        "theme": "travel",
        "emoji": "🎟️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Billett für Bus oder Bahn.",
                "examples": [
                    "Haben Sie Ihre Fahrkarte dabei?"
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈfaːɐ̯ˌkaʁtə",
        "id": "de_starter_travel_007"
    },
    {
        "word": "Koffer",
        "level": "starter",
        "theme": "travel",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Gepäckstück für Kleidung auf Reisen.",
                "examples": [
                    "Mein Koffer ist schwer."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈkɔfɐ",
        "id": "de_starter_travel_008"
    },
    {
        "word": "Urlaub",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Arbeitsfreie Zeit zur Erholung.",
                "examples": [
                    "Wir machen Urlaub in Spanien."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈuːɐ̯laʊ̯p",
        "id": "de_starter_travel_009"
    },
    {
        "word": "Pass",
        "level": "starter",
        "theme": "travel",
        "emoji": "🛂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Amtliches Dokument für Auslandsreisen.",
                "examples": [
                    "Zeigen Sie bitte Ihren Pass."
                ]
            }
        ],
        "lang": "de",
        "transcription": "pas",
        "id": "de_starter_travel_010"
    },
    {
        "word": "Haltestelle",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ort, an dem der Bus stoppt.",
                "examples": [
                    "Die Haltestelle ist gleich um die Ecke."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈhaltəˌʃtɛlə",
        "id": "de_starter_travel_011"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
