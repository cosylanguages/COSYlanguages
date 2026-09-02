(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-TRA-01",
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
        "legacy_id": "A1-TRV-05",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-02",
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
        "legacy_id": "A1-TRV-06",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-03",
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
        "legacy_id": "A1-TRV-09",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-04",
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
        "legacy_id": "A1-TRV-10",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-05",
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
        "legacy_id": "A1-TRV-12",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-06",
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
        "legacy_id": "A1-TRV-13",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-07",
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
        "legacy_id": "A1-TRV-16",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-08",
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
        "legacy_id": "A1-TRV-17",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-09",
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
        "legacy_id": "A1-TRV-22",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-10",
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
        "legacy_id": "A1-TRV-27",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-11",
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
        "legacy_id": "A1-TRV-28",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-12",
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
        "legacy_id": "A1-TRV-30",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-13",
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
        "legacy_id": "A1-TRV-31",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-14",
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
        "legacy_id": "A1-TRV-36",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-15",
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
        "legacy_id": "A1-TRV-37",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-16",
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
        "legacy_id": "A1-TRV-40",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-17",
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
        "legacy_id": "A1-TRV-41",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-18",
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
        "legacy_id": "A1-TRV-53",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-19",
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
        "legacy_id": "A1-TRV-54",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-20",
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
        "legacy_id": "A1-TRV-57",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-21",
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
        "legacy_id": "A1-TRV-58",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-22",
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
        "legacy_id": "A1-TRV-59",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A1-VERB-TRA-23",
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
        "legacy_id": "A1-TRV-60",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
