(function() {
    const data = [
    {
        "word": "Garten",
        "level": "starter",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A public garden or large green area in a city for everyone to use.",
                "examples": []
            }
        ],
        "id": "de_starter_vocabulary_001",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Arzt",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine Person, die Kranken hilft.",
                "examples": [
                    "Der Arzt arbeitet im Krankenhaus."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_002",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Fuß",
        "level": "starter",
        "theme": "body",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Teil des Körpers unten am Bein.",
                "examples": [
                    "Mein Fuß tut weh."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "fōts"
        },
        "id": "de_starter_vocabulary_003",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Lehrer",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine Person, die beim Lernen hilft.",
                "examples": [
                    "Der Lehrer ist im Klassenzimmer."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_004",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Pizza",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein flaches Brot mit Käse und Tomaten.",
                "examples": [
                    "Ich mag Pizza mit Käse."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "id": "de_starter_vocabulary_005",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Pasta",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Essen aus Mehl und Eiern.",
                "examples": [
                    "Wir essen heute Pasta."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "id": "de_starter_vocabulary_006",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Apfel",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine runde Frucht, rot oder grün.",
                "examples": [
                    "Der Apfel ist rot."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_007",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Brot",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Essen aus Mehl und Wasser.",
                "examples": [
                    "Ich kaufe jeden Morgen Brot."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "braudą"
        },
        "id": "de_starter_vocabulary_008",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Ei",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein ovales Objekt von einer Henne.",
                "examples": [
                    "Ein Ei zum Frühstück."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_009",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Milch",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine weiße Flüssigkeit von Kühen.",
                "examples": [
                    "Ich trinke kalte Milch."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "meluks"
        },
        "id": "de_starter_vocabulary_010",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Banane",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine lange gelbe Frucht.",
                "examples": [
                    "Die Banane ist gelb."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "id": "de_starter_vocabulary_011",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Kaffee",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein heißes braunes Getränk.",
                "examples": [
                    "Ich trinke Kaffee ohne Zucker."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_012",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Tee",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein heißes Getränk aus Blättern.",
                "examples": [
                    "Ein heißer Tee, bitte."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_013",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Wasser",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🚰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine klare Flüssigkeit zum Trinken.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "watōr"
        },
        "id": "de_starter_vocabulary_014",
        "lang": "de",
        "transcription": ""
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
                "text": "Ein Ort zum Lernen.",
                "examples": [
                    "Die Schule öffnet um acht."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "schola"
        },
        "id": "de_starter_vocabulary_015",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "T-Shirt",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Hemd mit kurzen Ärmeln.",
                "examples": [
                    "Ich trage ein blaues T-Shirt."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_016",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Hose",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Kleidungsstück für die Beine.",
                "examples": [
                    "Diese Hose ist neu."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "id": "de_starter_vocabulary_017",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Schuh",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Etwas für die Füße.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "skōhaz"
        },
        "id": "de_starter_vocabulary_018",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Hut",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Etwas für den Kopf.",
                "examples": [
                    "Sie trägt einen Sonnenhut."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_019",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Stuhl",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Möbelstück zum Sitzen.",
                "examples": [
                    "Setz dich auf diesen Stuhl."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "stōlaz"
        },
        "id": "de_starter_vocabulary_020",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Tisch",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Möbelstück mit vier Beinen.",
                "examples": [
                    "Das Buch liegt auf dem Tisch."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "tabula"
        },
        "id": "de_starter_vocabulary_021",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Bett",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🛏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Möbelstück zum Schlafen.",
                "examples": [
                    "Das Bett ist sehr groß."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "badją"
        },
        "id": "de_starter_vocabulary_022",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Schlüssel",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Objekt zum Öffnen von Türen.",
                "examples": [
                    "Ich habe meinen Schlüssel verloren."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_023",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Telefon",
        "level": "starter",
        "theme": "technology",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Gerät zum Sprechen.",
                "examples": [
                    "Mein Telefon funktioniert nicht."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_024",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Buch",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Viele Seiten zum Lesen.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "bōks"
        },
        "id": "de_starter_vocabulary_025",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Tasche",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "👜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Behälter zum Tragen.",
                "examples": [
                    "Ich trage meine Sachen in der Tasche."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "id": "de_starter_vocabulary_026",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Stift",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🖊️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Gegenstand zum Schreiben.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_027",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Katze",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein kleines Tier mit Fell.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "cattus"
        },
        "id": "de_starter_vocabulary_028",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Hund",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der beste Freund des Menschen.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "hundaz"
        },
        "id": "de_starter_vocabulary_029",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Hand",
        "level": "starter",
        "theme": "body",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Teil des Arms mit Fingern.",
                "examples": [
                    "Wasch deine Hände."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "handuz"
        },
        "id": "de_starter_vocabulary_030",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Bein",
        "level": "starter",
        "theme": "body",
        "emoji": "🦵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Teil des Körpers zum Laufen.",
                "examples": [
                    "Sie hat lange Beine."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_031",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Auge",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Teil des Körpers zum Sehen.",
                "examples": [
                    "Er hat grüne Augen."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "augô"
        },
        "id": "de_starter_vocabulary_032",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Nase",
        "level": "starter",
        "theme": "body",
        "emoji": "👃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Teil des Gesichts zum Riechen.",
                "examples": [
                    "Wir atmen durch die Nase."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "nasō"
        },
        "id": "de_starter_vocabulary_033",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Mund",
        "level": "starter",
        "theme": "body",
        "emoji": "👄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Teil des Gesichts zum Essen.",
                "examples": [
                    "Öffne den Mund."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "munþaz"
        },
        "id": "de_starter_vocabulary_034",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Ohr",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Teil des Körpers zum Hören.",
                "examples": [
                    "Wir hören mit den Ohren."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "auzon"
        },
        "id": "de_starter_vocabulary_035",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Mutter",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine Frau, die ein Elternteil ist.",
                "examples": [
                    "Die Frau liest die Zeitung."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "mōdēr"
        },
        "id": "de_starter_vocabulary_036",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Vater",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Mann, die ein Elternteil ist.",
                "examples": [
                    "Dieser Mann ist mein Onkel."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "fader"
        },
        "id": "de_starter_vocabulary_037",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Arbeit",
        "level": "starter",
        "theme": "jobs",
        "emoji": "💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine Arbeit; ein Ort zum Geldverdienen.",
                "examples": [
                    "Ich suche eine neue Arbeit."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "id": "de_starter_vocabulary_038",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Zuhause",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Ort, an dem man lebt.",
                "examples": [
                    "Ich komme spät nach Hause."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_039",
        "lang": "de",
        "transcription": ""
    },
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
                "text": "Ein Fahrzeug mit vier Rädern.",
                "examples": [
                    "Ich fahre ein rotes Auto."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_040",
        "lang": "de",
        "transcription": ""
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
                "text": "Ein großes Fahrzeug für viele Leute.",
                "examples": [
                    "Der Bus kommt bald."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_041",
        "lang": "de",
        "transcription": ""
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
                "text": "Ein Fahrzeug auf Schienen.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_042",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Geld",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Münzen oder Scheine.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_043",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Geschäft",
        "level": "starter",
        "theme": "places",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Ort zum Kaufen.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_044",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Familie",
        "level": "starter",
        "theme": "people",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine Gruppe von Verwandten.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine",
        "id": "de_starter_vocabulary_045",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Freund",
        "level": "starter",
        "theme": "people",
        "emoji": "👫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine Person, die man mag.",
                "examples": [
                    "Er ist mein bester Freund."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_046",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Tag",
        "level": "starter",
        "theme": "time",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Zeitraum von 24 Stunden.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "dagaz"
        },
        "id": "de_starter_vocabulary_047",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Woche",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein Zeitraum von sieben Tagen.",
                "examples": [
                    "Heute ist ein guter Tag."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "id": "de_starter_vocabulary_048",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Essen",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Dinge, die man isst.",
                "examples": [
                    "Das Mittagessen ist fertig."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_049",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Frühstück",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die erste Mahlzeit des Tages.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_050",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Mittagessen",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Mahlzeit am Mittag.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_051",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Abendessen",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Mahlzeit am Abend.",
                "examples": [
                    "Wir essen um acht zu Abend."
                ]
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_052",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Morgen",
        "level": "starter",
        "theme": "time",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zeit vor dem Mittag.",
                "examples": [
                    "Es ist kalt heute Morgen."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_053",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Abend",
        "level": "starter",
        "theme": "time",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zeit nach dem Nachmittag.",
                "examples": [
                    "Wir gehen heute Abend aus."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_054",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Nacht",
        "level": "starter",
        "theme": "time",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Die Zeit der Dunkelheit.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "nahts"
        },
        "id": "de_starter_vocabulary_055",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Heute",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "An diesem Tag.",
                "examples": []
            }
        ],
        "article": "heute",
        "gender": "neuter",
        "id": "de_starter_vocabulary_056",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Morgen",
        "level": "starter",
        "theme": "time",
        "emoji": "⏭️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Am Tag nach heute.",
                "examples": []
            }
        ],
        "article": "morgen",
        "gender": "neuter",
        "id": "de_starter_vocabulary_057",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Ehemann",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein verheirateter Mann.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_vocabulary_058",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Ehefrau",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Eine verheiratete Frau.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine",
        "id": "de_starter_vocabulary_059",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Kind",
        "level": "starter",
        "theme": "people",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ein junger Mensch.",
                "examples": []
            }
        ],
        "article": "das",
        "gender": "neuter",
        "id": "de_starter_vocabulary_060",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Sonne",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Der Stern, der Licht gibt.",
                "examples": []
            }
        ],
        "article": "die",
        "gender": "feminine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sunnō"
        },
        "id": "de_starter_vocabulary_061",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Regen",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Wasser, das aus Wolken fällt.",
                "examples": []
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "rigną"
        },
        "id": "de_starter_vocabulary_062",
        "lang": "de",
        "transcription": ""
    }
];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();