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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_places_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_jobs_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_body_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_jobs_002"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_002"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_003"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_004"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_005"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_006"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_007"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_008"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_009"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_010"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_places_002"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_clothes_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_clothes_002"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_clothes_003"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_clothes_004"
    },
    {
        "word": "Stuhl",
        "level": "starter",
        "theme": "furniture",
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_furniture_001"
    },
    {
        "word": "Tisch",
        "level": "starter",
        "theme": "furniture",
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_furniture_002"
    },
    {
        "word": "Bett",
        "level": "starter",
        "theme": "furniture",
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_furniture_003"
    },
    {
        "word": "Schlüssel",
        "level": "starter",
        "theme": "furniture",
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_furniture_004"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_technology_001"
    },
    {
        "word": "Buch",
        "level": "starter",
        "theme": "furniture",
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_furniture_005"
    },
    {
        "word": "Tasche",
        "level": "starter",
        "theme": "furniture",
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_furniture_006"
    },
    {
        "word": "Stift",
        "level": "starter",
        "theme": "furniture",
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_furniture_007"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_animals_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_animals_002"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_body_002"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_body_003"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_body_004"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_body_005"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_body_006"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_body_007"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_002"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_jobs_003"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_furniture_008"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_travel_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_travel_002"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_travel_003"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_shopping_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_places_003"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_003"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_004"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_time_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_time_002"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_011"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_012"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_013"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_food_drink_014"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_time_003"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_time_004"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_time_005"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_time_006"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_time_007"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_005"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_006"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_007"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_nature_001"
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
        "lang": "de",
        "transcription": "",
        "id": "de_starter_nature_002"
    }
];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();