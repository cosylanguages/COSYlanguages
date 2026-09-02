(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-TRV-01",
        "word": "airport",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "airports",
        "definitions": [
            {
                "text": "A place where planes land and take off.",
                "examples": [
                    "I am going to the airport now."
                ]
            }
        ],
        "subtext": "related to public transport",
        "transcription": "ˈɛrˌpɔrt",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_starter_public_transport_004",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-02",
        "word": "bicycle",
        "emoji": "🚲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bicycles",
        "subtext": "bike, ride a bicycle",
        "definitions": [
            {
                "text": "A vehicle with two wheels that you sit on and move by turning pedals.",
                "examples": [
                    "He goes to work by bicycle."
                ]
            }
        ],
        "transcription": "ˈbaɪsɪkəl",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_011",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-03",
        "word": "bike",
        "emoji": "🚲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bikes",
        "subtext": "bicycle, ride a bike",
        "definitions": [
            {
                "text": "A two-wheeled vehicle that you ride by pushing pedals.",
                "examples": [
                    "He cycles to work on his bike."
                ]
            }
        ],
        "transcription": "baɪk",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_005",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-04",
        "word": "boat",
        "emoji": "⛵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boats",
        "definitions": [
            {
                "text": "A vehicle used for traveling on water.",
                "examples": [
                    "We took a boat across the lake."
                ]
            }
        ],
        "subtext": "related to modes of transport",
        "transcription": "boʊt",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_006",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-05",
        "word": "book",
        "definitions": [
            {
                "text": "To reserve a place, ticket or service in advance.",
                "examples": [
                    "I always book hotels online."
                ]
            }
        ],
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "booked",
        "emoji": "📖",
        "form": "verb",
        "group": "regular",
        "transcription": "bʊk",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "bōks",
            "origin_meaning": "beech, book"
        },
        "antonyms": [
            "cancel"
        ],
        "legacy_id": "en_starter_travel_029",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-06",
        "word": "book",
        "definitions": [
            {
                "text": "To reserve a place, ticket or service in advance.",
                "examples": [
                    "I always book hotels online."
                ]
            }
        ],
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "booked",
        "emoji": "📖",
        "form": "verb",
        "group": "regular",
        "transcription": "bʊk",
        "auxiliary": "have",
        "v4": "booking",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "bōks",
            "origin_meaning": "beech, book"
        },
        "antonyms": [
            "cancel"
        ],
        "legacy_id": "en_starter_travel_036",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-07",
        "word": "bus",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "buses",
        "subtext": "take the bus, go by bus, bus stop",
        "definitions": [
            {
                "text": "A large vehicle that carries many people.",
                "examples": [
                    "I take the bus to work."
                ]
            }
        ],
        "transcription": "bəs",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_002",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-08",
        "word": "by",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show how someone travels or how something is done.",
                "examples": [
                    "I go to work by bus.",
                    "He is standing by the door."
                ]
            }
        ],
        "emoji": "🚌",
        "transcription": "baɪ",
        "subtext": "by",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_017",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-09",
        "word": "cancel",
        "definitions": [
            {
                "text": "To decide that something planned will not happen.",
                "examples": [
                    "She had to cancel her flight due to illness."
                ]
            }
        ],
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "cancelled",
        "emoji": "❌",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈkænsəl",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "book"
        ],
        "legacy_id": "en_starter_travel_031",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-10",
        "word": "cancel",
        "definitions": [
            {
                "text": "To decide that something planned will not happen.",
                "examples": [
                    "She had to cancel her flight due to illness."
                ]
            }
        ],
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "cancelled",
        "emoji": "❌",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈkænsəl",
        "auxiliary": "have",
        "v4": "canceling",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "book"
        ],
        "legacy_id": "en_starter_travel_038",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-11",
        "word": "car",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cars",
        "subtext": "drive a car, fast car",
        "definitions": [
            {
                "text": "A vehicle with four wheels and an engine.",
                "examples": [
                    "His car is red."
                ]
            }
        ],
        "transcription": "kɑr",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_001",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-12",
        "word": "catch",
        "emoji": "🧤",
        "form": "verb",
        "subtext": "catch a bus / catch a cold / catch a ball",
        "definitions": [
            {
                "text": "To take hold of something; to get on a bus or train.",
                "examples": [
                    "I need to catch the bus at eight."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "caught",
        "v3": "caught",
        "group": "irregular",
        "transcription": "kæʧ",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "throw"
        ],
        "legacy_id": "en_starter_public_transport_007",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-13",
        "word": "catch",
        "emoji": "🧤",
        "form": "verb",
        "subtext": "catch a bus / catch a cold / catch a ball",
        "definitions": [
            {
                "text": "To take hold of something; to get on a bus or train.",
                "examples": [
                    "I need to catch the bus at eight."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "caught",
        "v3": "caught",
        "group": "regular",
        "transcription": "kæʧ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "throw"
        ],
        "legacy_id": "en_starter_public_transport_010",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-14",
        "word": "close",
        "emoji": "📍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Near in space or time.",
                "examples": [
                    "The station is close to the hotel."
                ]
            }
        ],
        "subtext": "close to / very close",
        "synonyms": [
            "near"
        ],
        "comparative": "closer",
        "superlative": "the closest",
        "transcription": "kloʊz",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "far"
        ],
        "legacy_id": "en_starter_distance_006",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-15",
        "word": "close",
        "emoji": "📍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Near in space or time.",
                "examples": [
                    "The station is close to the hotel."
                ]
            }
        ],
        "subtext": "close to / very close",
        "synonyms": [
            "near"
        ],
        "comparative": "closer",
        "superlative": "the closest",
        "transcription": "kloʊz",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "far"
        ],
        "legacy_id": "en_starter_distance_003",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-16",
        "word": "come",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "form": "verb",
        "definitions": [
            {
                "text": "To move towards a place or person.",
                "examples": [
                    "He comes to the office at nine.",
                    "She comes home late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "come",
        "group": "irregular",
        "transcription": "kʌm",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "kwimaną"
        },
        "antonyms": [
            "go"
        ],
        "legacy_id": "en_starter_travel_026",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-17",
        "word": "come",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "form": "verb",
        "definitions": [
            {
                "text": "To move towards a place or person.",
                "examples": [
                    "He comes to the office at nine.",
                    "She comes home late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "come",
        "group": "regular",
        "transcription": "kʌm",
        "synonyms": [
            "arrive"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "kwimaną"
        },
        "antonyms": [
            "go"
        ],
        "legacy_id": "en_starter_travel_033",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-18",
        "word": "commute",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "commutes",
        "definitions": [
            {
                "text": "The journey to and from work each day.",
                "examples": [
                    "My commute takes one hour."
                ]
            }
        ],
        "subtext": "related to public transport",
        "transcription": "kəmˈjut",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_starter_public_transport_001",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-19",
        "word": "drive",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To operate a vehicle.",
                "examples": [
                    "She drives to work.",
                    "He drives a company car."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drove",
        "v3": "driven",
        "group": "irregular",
        "transcription": "draɪv",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "en_starter_modes_of_transport_014",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-20",
        "word": "drive",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To operate a vehicle.",
                "examples": [
                    "She drives to work.",
                    "He drives a company car."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drove",
        "v3": "driven",
        "group": "regular",
        "transcription": "draɪv",
        "synonyms": [
            "operate"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "en_starter_modes_of_transport_020",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-21",
        "word": "east",
        "emoji": "➡️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The direction where the sun rises.",
                "examples": [
                    "The sun rises in the east."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "ist",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "west"
        ],
        "legacy_id": "en_starter_directions_navigation_004",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-22",
        "word": "explore",
        "emoji": "🧭",
        "form": "verb",
        "transcription": "ɪkˈsplɔːr",
        "definitions": [
            {
                "text": "To travel through an unfamiliar area in order to learn about it.",
                "examples": [
                    "We love exploring new cities on foot.",
                    "They explored the historic district."
                ]
            }
        ],
        "v2": "explored",
        "v3": "explored",
        "v4": "exploring",
        "classification": "regular",
        "aspect": "action",
        "group": "regular",
        "subtext": "explore a city / explore ideas",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "en_starter_travel_039",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-23",
        "word": "far",
        "form": "adjective",
        "subtext": "far away / far from",
        "synonyms": [
            "distant"
        ],
        "definitions": [
            {
                "text": "A long way away in distance.",
                "examples": [
                    "Is it far from here?"
                ]
            }
        ],
        "comparative": "farther",
        "superlative": "the farthest",
        "emoji": "🔭",
        "transcription": "fɑr",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "close"
        ],
        "legacy_id": "en_starter_distance_005",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-24",
        "word": "far",
        "form": "adjective",
        "subtext": "far away / far from",
        "synonyms": [
            "distant"
        ],
        "definitions": [
            {
                "text": "A long way away in distance.",
                "examples": [
                    "Is it far from here?"
                ]
            }
        ],
        "comparative": "farther",
        "superlative": "the farthest",
        "emoji": "🔭",
        "transcription": "fɑr",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "close"
        ],
        "legacy_id": "en_starter_distance_002",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-25",
        "word": "fly",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
        "form": "verb",
        "definitions": [
            {
                "text": "To travel by plane.",
                "examples": [
                    "She flies to Paris for meetings.",
                    "He hates flying."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flew",
        "v3": "flown",
        "group": "irregular",
        "transcription": "flaɪ",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "land"
        ],
        "legacy_id": "en_starter_modes_of_transport_015",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-26",
        "word": "fly",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
        "form": "verb",
        "definitions": [
            {
                "text": "To travel by plane.",
                "examples": [
                    "She flies to Paris for meetings.",
                    "He hates flying."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flew",
        "v3": "flown",
        "group": "regular",
        "transcription": "flaɪ",
        "synonyms": [
            "travel by air"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "land"
        ],
        "legacy_id": "en_starter_modes_of_transport_021",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-27",
        "word": "go",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To move from one place to another.",
                "examples": [
                    "I go to work by bus.",
                    "She goes to the doctor."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "went",
        "v3": "gone",
        "group": "irregular",
        "transcription": "🇬🇧 ɡəʊ | 🇺🇸 ɡoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gangan",
            "origin_meaning": "to go"
        },
        "antonyms": [
            "come"
        ],
        "legacy_id": "en_starter_travel_025",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-28",
        "word": "go",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To move from one place to another.",
                "examples": [
                    "I go to work by bus.",
                    "She goes to the doctor."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "went",
        "v3": "gone",
        "group": "regular",
        "transcription": "🇬🇧 ɡəʊ | 🇺🇸 ɡoʊ",
        "synonyms": [
            "move"
        ],
        "auxiliary": "have",
        "tenses": {
            "present_simple": {
                "positive": [
                    "go",
                    "go",
                    "goes",
                    "go",
                    "go"
                ]
            }
        },
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gangan",
            "origin_meaning": "to go"
        },
        "antonyms": [
            "come"
        ],
        "legacy_id": "en_starter_travel_032",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-29",
        "word": "hotel",
        "emoji": "🏨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hotels",
        "definitions": [
            {
                "text": "A building where people pay to stay overnight.",
                "examples": [
                    "The hotel is near the station."
                ]
            }
        ],
        "subtext": "related to public transport",
        "transcription": "hoʊˈtɛl",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_starter_public_transport_002",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-30",
        "word": "miss",
        "definitions": [
            {
                "text": "To fail to catch a transport connection; or to feel sad about absence.",
                "examples": [
                    "He missed his train and had to wait an hour."
                ]
            }
        ],
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "missed",
        "emoji": "🏃‍♂️",
        "form": "verb",
        "group": "regular",
        "transcription": "mɪs",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "attend"
        ],
        "legacy_id": "en_starter_public_transport_006",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-31",
        "word": "miss",
        "definitions": [
            {
                "text": "To fail to catch a transport connection; or to feel sad about absence.",
                "examples": [
                    "He missed his train and had to wait an hour."
                ]
            }
        ],
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "missed",
        "emoji": "🏃‍♂️",
        "form": "verb",
        "group": "regular",
        "transcription": "mɪs",
        "auxiliary": "have",
        "v4": "missing",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "attend"
        ],
        "legacy_id": "en_starter_public_transport_009",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-32",
        "word": "motorbike",
        "emoji": "🏍️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "motorbikes",
        "definitions": [
            {
                "text": "A vehicle with two wheels and an engine.",
                "examples": [
                    "He goes to work on his motorbike."
                ]
            }
        ],
        "subtext": "related to modes of transport",
        "transcription": "ˈmoʊtərˌbaɪk",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_009",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-33",
        "word": "near",
        "form": "adjective",
        "subtext": "near here / near the station",
        "synonyms": [
            "close"
        ],
        "definitions": [
            {
                "text": "Not far away in distance.",
                "examples": [
                    "The station is near the office."
                ]
            }
        ],
        "comparative": "nearer",
        "superlative": "the nearest",
        "emoji": "📍",
        "transcription": "nɪr",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "far"
        ],
        "legacy_id": "en_starter_distance_004",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-34",
        "word": "near",
        "form": "adjective",
        "subtext": "near here / near the station",
        "synonyms": [
            "close"
        ],
        "definitions": [
            {
                "text": "Not far away in distance.",
                "examples": [
                    "The station is near the office."
                ]
            }
        ],
        "comparative": "nearer",
        "superlative": "the nearest",
        "emoji": "📍",
        "transcription": "nɪr",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "far"
        ],
        "legacy_id": "en_starter_distance_001",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-35",
        "word": "north",
        "emoji": "⬆️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The direction that is on your left when you face the sunrise.",
                "examples": [
                    "The city is in the north."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "nɔrθ",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "south"
        ],
        "legacy_id": "en_starter_directions_navigation_002",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-36",
        "word": "pack",
        "definitions": [
            {
                "text": "To put items into a bag or case for a journey.",
                "examples": [
                    "He packs his bag the night before a trip."
                ]
            }
        ],
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "packed",
        "emoji": "🎒",
        "form": "verb",
        "group": "regular",
        "transcription": "pæk",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "unpack"
        ],
        "legacy_id": "en_starter_travel_030",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-37",
        "word": "pack",
        "definitions": [
            {
                "text": "To put items into a bag or case for a journey.",
                "examples": [
                    "He packs his bag the night before a trip."
                ]
            }
        ],
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "packed",
        "emoji": "🎒",
        "form": "verb",
        "group": "regular",
        "transcription": "pæk",
        "auxiliary": "have",
        "v4": "packing",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "unpack"
        ],
        "legacy_id": "en_starter_travel_037",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-38",
        "word": "passport",
        "emoji": "🛂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "passports",
        "definitions": [
            {
                "text": "An official document you need to travel to other countries.",
                "examples": [
                    "Don't forget your passport."
                ]
            }
        ],
        "subtext": "related to travel vocabulary basics",
        "transcription": "ˈpæˌspɔrt",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_starter_travel_021",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-39",
        "word": "plane",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "planes",
        "subtext": "airplane, take a plane",
        "definitions": [
            {
                "text": "A vehicle with wings that flies through the air.",
                "examples": [
                    "The plane lands at nine o'clock."
                ]
            }
        ],
        "transcription": "pleɪn",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_004",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-40",
        "word": "return",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "To come or go back to a place.",
                "examples": [
                    "He returns from a trip on Friday.",
                    "She returned the call."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "returned",
        "group": "regular",
        "transcription": "rɪˈtərn",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "en_starter_travel_027",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-41",
        "word": "return",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "To come or go back to a place.",
                "examples": [
                    "He returns from a trip on Friday.",
                    "She returned the call."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "returned",
        "group": "regular",
        "transcription": "rɪˈtərn",
        "synonyms": [
            "come back"
        ],
        "auxiliary": "have",
        "v4": "returning",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "en_starter_travel_034",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-42",
        "word": "ride",
        "emoji": "🚲",
        "form": "verb",
        "subtext": "ride a bike / ride a horse",
        "definitions": [
            {
                "text": "To travel on a bike or horse.",
                "examples": [
                    "I ride my bike to work."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rode",
        "v3": "ridden",
        "group": "irregular",
        "transcription": "raɪd",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "en_starter_modes_of_transport_016",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-43",
        "word": "ride",
        "emoji": "🚲",
        "form": "verb",
        "subtext": "ride a bike / ride a horse",
        "definitions": [
            {
                "text": "To travel on a bike or horse.",
                "examples": [
                    "I ride my bike to work."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rode",
        "v3": "ridden",
        "group": "regular",
        "transcription": "raɪd",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "en_starter_modes_of_transport_022",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-44",
        "word": "scooter",
        "emoji": "🛴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "scooters",
        "definitions": [
            {
                "text": "A small vehicle with two wheels and a long handle.",
                "examples": [
                    "The boy is riding his scooter."
                ]
            }
        ],
        "subtext": "related to modes of transport",
        "transcription": "ˈskutər",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_008",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-45",
        "word": "south",
        "emoji": "⬇️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The direction that is on your right when you face the sunrise.",
                "examples": [
                    "We are driving south."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "saʊθ",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "north"
        ],
        "legacy_id": "en_starter_directions_navigation_003",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-46",
        "word": "suitcase",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "suitcases",
        "definitions": [
            {
                "text": "A large case that you use to carry your clothes and other things when you are traveling.",
                "examples": [
                    "I am packing my suitcase for the trip."
                ]
            }
        ],
        "subtext": "related to travel vocabulary basics",
        "transcription": "ˈsutˌkeɪs",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_starter_travel_024",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-47",
        "word": "take",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "form": "verb",
        "transcription": "teɪk",
        "definitions": [
            {
                "text": "To hold and move something; to use or consume.",
                "examples": [
                    "I take the bus to work.",
                    "She takes medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "taken",
        "group": "irregular",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "give"
        ],
        "legacy_id": "en_starter_modes_of_transport_012",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-48",
        "word": "take",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "form": "verb",
        "transcription": "teɪk",
        "definitions": [
            {
                "text": "To hold and move something; to use or consume.",
                "examples": [
                    "I take the bus to work.",
                    "She takes medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "taken",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "give"
        ],
        "legacy_id": "en_starter_modes_of_transport_018",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-49",
        "word": "taxi",
        "emoji": "🚕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "taxis",
        "definitions": [
            {
                "text": "A car with a driver that you pay to take you somewhere.",
                "examples": [
                    "Let's take a taxi."
                ]
            }
        ],
        "subtext": "related to modes of transport",
        "transcription": "ˈtæksi",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_007",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-50",
        "word": "ticket",
        "emoji": "🎫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tickets",
        "definitions": [
            {
                "text": "A piece of paper that shows you have paid for a journey.",
                "examples": [
                    "I need a train ticket."
                ]
            }
        ],
        "subtext": "related to travel vocabulary basics",
        "transcription": "ˈtɪkɪt",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_starter_travel_022",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-51",
        "word": "traffic",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "heavy traffic",
        "synonyms": [
            "cars",
            "vehicles"
        ],
        "definitions": [
            {
                "text": "The cars, trucks, and other vehicles using a road.",
                "examples": [
                    "The traffic is very heavy this morning."
                ]
            }
        ],
        "transcription": "ˈtræfɪk",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_starter_public_transport_005",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-52",
        "word": "train",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trains",
        "subtext": "take the train, by train, train station",
        "definitions": [
            {
                "text": "A vehicle that runs on rails.",
                "examples": [
                    "The train is fast."
                ]
            }
        ],
        "transcription": "treɪn",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_003",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-53",
        "word": "travel",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "To go from one place to another, especially far.",
                "examples": [
                    "She travels for work three times a month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "traveled",
        "group": "regular",
        "transcription": "ˈtrævəl",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "stay"
        ],
        "legacy_id": "en_starter_public_transport_003",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-54",
        "word": "travel",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "To go from one place to another, especially far.",
                "examples": [
                    "She travels for work three times a month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "traveled",
        "group": "regular",
        "transcription": "ˈtrævəl",
        "synonyms": [
            "journey"
        ],
        "auxiliary": "have",
        "v4": "traveling",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "stay"
        ],
        "legacy_id": "en_starter_public_transport_008",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-55",
        "word": "trip",
        "emoji": "🎒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trips",
        "definitions": [
            {
                "text": "A journey to a place and back again.",
                "examples": [
                    "How was your trip to London?"
                ]
            }
        ],
        "subtext": "related to travel vocabulary basics",
        "transcription": "trɪp",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_starter_travel_023",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-56",
        "word": "truck",
        "emoji": "🚚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trucks",
        "subtext": "related to modes of transport",
        "synonyms": [
            "🇬🇧 lorry"
        ],
        "definitions": [
            {
                "text": "A large, heavy vehicle with wheels used for carrying goods.",
                "examples": [
                    "The truck is carrying food to the supermarket."
                ]
            }
        ],
        "transcription": "trək",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "legacy_id": "en_starter_modes_of_transport_010",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-57",
        "word": "turn",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
        "form": "verb",
        "definitions": [
            {
                "text": "To move in a direction; to change state.",
                "examples": [
                    "Turn left at the office.",
                    "She turns off the light."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "turned",
        "group": "regular",
        "transcription": "tərn",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "straighten"
        ],
        "legacy_id": "en_starter_directions_navigation_006",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-58",
        "word": "turn",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
        "form": "verb",
        "definitions": [
            {
                "text": "To move in a direction; to change state.",
                "examples": [
                    "Turn left at the office.",
                    "She turns off the light."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "turned",
        "group": "regular",
        "transcription": "tərn",
        "auxiliary": "have",
        "v4": "turning",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "straighten"
        ],
        "legacy_id": "en_starter_directions_navigation_007",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-59",
        "word": "unpack",
        "emoji": "👜",
        "subtext": "unpack a suitcase",
        "form": "verb",
        "definitions": [
            {
                "text": "To take things out of a suitcase or bag.",
                "examples": [
                    "I need to unpack my things."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "unpacked",
        "v3": "unpacked",
        "group": "regular",
        "transcription": "ənˈpæk",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "pack"
        ],
        "legacy_id": "en_starter_travel_028",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-60",
        "word": "unpack",
        "emoji": "👜",
        "subtext": "unpack a suitcase",
        "form": "verb",
        "definitions": [
            {
                "text": "To take things out of a suitcase or bag.",
                "examples": [
                    "I need to unpack my things."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "unpacked",
        "v3": "unpacked",
        "group": "regular",
        "transcription": "ənˈpæk",
        "auxiliary": "have",
        "v4": "unpacking",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "pack"
        ],
        "legacy_id": "en_starter_travel_035",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-61",
        "word": "walk",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "form": "verb",
        "definitions": [
            {
                "text": "To move on foot at a normal pace.",
                "examples": [
                    "He walks to work every day.",
                    "She walks during her lunch break."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "walked",
        "group": "regular",
        "transcription": "wɔk",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "run"
        ],
        "legacy_id": "en_starter_modes_of_transport_013",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-62",
        "word": "walk",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "form": "verb",
        "definitions": [
            {
                "text": "To move on foot at a normal pace.",
                "examples": [
                    "He walks to work every day.",
                    "She walks during her lunch break."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "walked",
        "group": "regular",
        "transcription": "wɔk",
        "synonyms": [
            "go on foot"
        ],
        "auxiliary": "have",
        "v4": "walking",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "run"
        ],
        "legacy_id": "en_starter_modes_of_transport_019",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-63",
        "word": "way",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ways",
        "definitions": [
            {
                "text": "A route or road; a method of doing something.",
                "examples": [
                    "Which is the way to the station?",
                    "This is a good way to learn."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "weɪ",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "en_starter_directions_navigation_001",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    },
    {
        "id": "A1-TRV-64",
        "word": "west",
        "emoji": "⬅️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The direction where the sun sets.",
                "examples": [
                    "The sun sets in the west."
                ]
            }
        ],
        "subtext": "related to directions navigation",
        "transcription": "wɛst",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "east"
        ],
        "legacy_id": "en_starter_directions_navigation_005",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
