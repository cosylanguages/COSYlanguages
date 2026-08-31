// TODO: verify level classification
(function() {
    const lang = "de";
    const data = [
    {
        "word": "Haus",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Gebäude, in dem Menschen wohnen.",
                "examples": [
                    "Mein Haus steht am Park."
                ]
            }
        ],
        "lang": "de",
        "transcription": "haʊ̯s",
        "id": "de_starter_places_001"
    },
    {
        "word": "Stadt",
        "level": "starter",
        "theme": "places",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Große Siedlung mit vielen Gebäude.",
                "examples": [
                    "Berlin ist eine schöne Stadt."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʃtat",
        "id": "de_starter_places_002"
    },
    {
        "word": "Schule",
        "level": "starter",
        "theme": "places",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ort zum Lernen für Kinder.",
                "examples": [
                    "Die Kinder gehen in die Schule."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈʃuːlə",
        "id": "de_starter_places_003"
    },
    {
        "word": "Geschäft",
        "level": "starter",
        "theme": "places",
        "emoji": "🏪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ort zum Einkaufen.",
                "examples": [
                    "Das Geschäft schließt um acht Uhr."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ɡəˈʃɛft",
        "id": "de_starter_places_004"
    },
    {
        "word": "Krankenhaus",
        "level": "starter",
        "theme": "places",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Gebäude zur Behandlung von Kranken.",
                "examples": [
                    "Der Arzt arbeitet im Krankenhaus."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈkʁaŋkn̩ˌhaʊ̯s",
        "id": "de_starter_places_005"
    },
    {
        "word": "Park",
        "level": "starter",
        "theme": "places",
        "emoji": "🏞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Grüne Grünanlage in der Stadt.",
                "examples": [
                    "Wir spazieren im Park."
                ]
            }
        ],
        "lang": "de",
        "transcription": "paʁk",
        "id": "de_starter_places_006"
    },
    {
        "word": "Bahnhof",
        "level": "starter",
        "theme": "places",
        "emoji": "🚉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Haltestelle für Züge.",
                "examples": [
                    "Der Zug kommt am Bahnhof an."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈbaːnˌhoːf",
        "id": "de_starter_places_007"
    },
    {
        "word": "Bank",
        "level": "starter",
        "theme": "places",
        "emoji": "🏦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Finanzinstitut für Geldgeschäfte.",
                "examples": [
                    "Ich hebe Geld auf der Bank ab."
                ]
            }
        ],
        "lang": "de",
        "transcription": "baŋk",
        "id": "de_starter_places_008"
    },
    {
        "word": "Post",
        "level": "starter",
        "theme": "places",
        "emoji": "🏣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ort für Briefe und Pakete.",
                "examples": [
                    "Ich bringe das Paket zur Post."
                ]
            }
        ],
        "lang": "de",
        "transcription": "pɔst",
        "id": "de_starter_places_009"
    },
    {
        "word": "Restaurant",
        "level": "starter",
        "theme": "places",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ort zum Essen gehen.",
                "examples": [
                    "Wir essen heute im Restaurant."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ʁɛstoˈʁɑ̃ː",
        "id": "de_starter_places_010"
    },
    {
        "word": "Apotheke",
        "level": "starter",
        "theme": "places",
        "emoji": "💊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Geschäft für Medikamente.",
                "examples": [
                    "Ich kaufe Medizin in der Apotheke."
                ]
            }
        ],
        "lang": "de",
        "transcription": "apoˈteːkə",
        "id": "de_starter_places_011"
    },
    {
        "word": "Hotel",
        "level": "starter",
        "theme": "places",
        "emoji": "🏨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Unterkunft für Reisende.",
                "examples": [
                    "Wir übernachten im Hotel."
                ]
            }
        ],
        "lang": "de",
        "transcription": "hoˈtɛl",
        "id": "de_starter_places_012"
    },
    {
        "word": "Flughafen",
        "level": "starter",
        "theme": "places",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ort für Flugzeuge und Passagiere.",
                "examples": [
                    "Wir fahren zum Flughafen."
                ]
            }
        ],
        "lang": "de",
        "transcription": "ˈfluːkˌhaːfn̩",
        "id": "de_starter_places_013"
    },
    {
        "word": "Bäckerei",
        "level": "starter",
        "theme": "places",
        "emoji": "🥖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Geschäft für Brot und Kuchen.",
                "examples": [
                    "Ich kaufe Brötchen in der Bäckerei."
                ]
            }
        ],
        "lang": "de",
        "transcription": "bɛkəˈʁaɪ̯",
        "id": "de_starter_places_014"
    },
    {
        "word": "Büro",
        "level": "starter",
        "theme": "places",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Arbeitsraum mit Schreibtisch.",
                "examples": [
                    "Mein Büro ist im zweiten Stock."
                ]
            }
        ],
        "lang": "de",
        "transcription": "byˈʁoː",
        "id": "de_starter_places_015"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
