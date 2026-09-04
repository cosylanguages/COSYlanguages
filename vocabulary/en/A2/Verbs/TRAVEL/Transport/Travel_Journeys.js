(function() {
    const lang = "en";
    const data = [
    {
        "word": "abroad",
        "level": "elementary",
        "theme": "travel",
        "emoji": "✈️",
        "form": "adverb",
        "transcription": "əˈbrɔːd",
        "definitions": [
            {
                "text": "In or to another country.",
                "examples": [
                    "They go abroad every summer."
                ]
            }
        ],
        "subtext": "travel abroad",
        "synonyms": [
            "overseas"
        ],
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-TRA-003",
        "legacy_id": "A2-TRV-01",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A2-VERB-TRA-004",
        "word": "arrange",
        "emoji": "🗓️",
        "form": "verb",
        "subtext": "plan, organize",
        "synonyms": [
            "plan",
            "organize"
        ],
        "definitions": [
            {
                "text": "To plan, prepare for, or organize something.",
                "examples": [
                    "I've arranged a meeting for ten o'clock."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arranged",
        "v3": "arranged",
        "transcription": "əˈreɪndʒ",
        "group": "regular",
        "auxiliary": "have",
        "v4": "arranging",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "arrangier",
            "origin_meaning": "put in a row, set in order"
        },
        "legacy_id": "A2-TRV-03",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A2-VERB-TRA-005",
        "word": "check in",
        "emoji": "🏢",
        "form": "verb",
        "v2": "checked in",
        "v3": "checked in",
        "definitions": [
            {
                "text": "To report your arrival at an airport or hotel.",
                "examples": [
                    "You need to check in two hours before the flight.",
                    "We checked in at the hotel at 3 pm."
                ]
            }
        ],
        "subtext": "register arrival",
        "synonyms": [
            "register arrival"
        ],
        "classification": "regular",
        "transcription": "tʃɛk ɪn",
        "group": "regular",
        "auxiliary": "have",
        "v4": "check ining",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A2-TRV-06",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A2-VERB-TRA-006",
        "word": "check out",
        "emoji": "🚪",
        "form": "verb",
        "v2": "checked out",
        "v3": "checked out",
        "definitions": [
            {
                "text": "To leave a hotel after paying the bill.",
                "examples": [
                    "We need to check out before 11 am.",
                    "They checked out of the hotel this morning."
                ]
            }
        ],
        "subtext": "register departure",
        "synonyms": [
            "register departure"
        ],
        "classification": "regular",
        "transcription": "tʃɛk aʊt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "check outing",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A2-TRV-07",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A2-VERB-TRA-008",
        "word": "overtake",
        "emoji": "🏎️",
        "form": "verb",
        "v2": "overtook",
        "v3": "overtaken",
        "definitions": [
            {
                "text": "To come from behind another vehicle and go past it.",
                "examples": [
                    "It's dangerous to overtake on a corner.",
                    "He overtook the slow truck."
                ]
            }
        ],
        "subtext": "pass",
        "synonyms": [
            "pass"
        ],
        "classification": "irregular",
        "transcription": "ˌoʊvərˈteɪk",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A2-TRV-21",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A2-VERB-TRA-009",
        "word": "reach",
        "emoji": "🏁",
        "form": "verb",
        "subtext": "reach the top, reach an agreement",
        "definitions": [
            {
                "text": "To arrive at a place or a level.",
                "examples": [
                    "We reached the hotel late at night."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reached",
        "v3": "reached",
        "transcription": "riːtʃ",
        "synonyms": [
            "arrive at"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "reaching",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A2-TRV-23",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A2-VERB-TRA-010",
        "word": "reserve",
        "emoji": "🛎️",
        "form": "verb",
        "subtext": "reserve a room / reserve a table / reserve a seat",
        "definitions": [
            {
                "text": "To keep something for a particular person or purpose.",
                "examples": [
                    "I'd like to reserve a table for two.",
                    "The seats are reserved for elderly passengers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reserved",
        "v3": "reserved",
        "transcription": "rɪˈzɜːrv",
        "synonyms": [
            "book"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "reserving",
        "lang": "en",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": null,
        "legacy_id": "A2-TRV-24",
        "level_code": "A2",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A2-VERB-TRA-011",
        "word": "navigate",
        "emoji": "🗺️",
        "form": "verb",
        "definitions": [
            {
                "text": "To plan and direct the course of a vehicle or journey.",
                "examples": [
                    "Use GPS to navigate through city streets.",
                    "She navigated the boat into the harbor."
                ]
            }
        ],
        "subtext": "guide, steer",
        "synonyms": [
            "guide",
            "steer"
        ],
        "transcription": "ˈnævɪɡeɪt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A2-VERB-TRA-017",
        "word": "accompany",
        "emoji": "👫",
        "form": "verb",
        "definitions": [
            {
                "text": "To go somewhere with someone as a companion.",
                "examples": [
                    "Her brother accompanied her to the airport.",
                    "Children must be accompanied by an adult."
                ]
            }
        ],
        "subtext": "escort, join",
        "synonyms": [
            "escort",
            "join"
        ],
        "transcription": "əˈkʌmpəni",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    },
    {
        "id": "A2-VERB-TRA-018",
        "word": "approach",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "To come near or nearer to someone or something in distance or time.",
                "examples": [
                    "The train approached the station slowly.",
                    "Summer is approaching quickly."
                ]
            }
        ],
        "subtext": "near, advance",
        "synonyms": [
            "near",
            "advance"
        ],
        "transcription": "əˈprəʊtʃ",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "travel",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Travel_Journeys"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
