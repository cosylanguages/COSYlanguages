(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-HOME-01",
        "word": "clean",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
        "form": "verb",
        "definitions": [
            {
                "text": "To remove dirt from something.",
                "examples": [
                    "I clean the flat every Saturday. He cleans his desk every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "cleaned",
        "group": "regular",
        "transcription": "klin",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "dirty"
        ],
        "legacy_id": "en_starter_household_tasks_004",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-02",
        "word": "clean",
        "emoji": "✨",
        "form": "adjective",
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
        "definitions": [
            {
                "text": "Free from dirt.",
                "examples": [
                    "The flat is clean now.",
                    "Keep the workspace clean and tidy."
                ]
            }
        ],
        "comparative": "cleaner",
        "superlative": "the cleanest",
        "transcription": "klin",
        "synonyms": [
            "tidy",
            "neat"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "dirty"
        ],
        "legacy_id": "en_starter_household_tasks_001",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-03",
        "word": "clean",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
        "form": "verb",
        "definitions": [
            {
                "text": "To remove dirt from something.",
                "examples": [
                    "I clean the flat every Saturday. He cleans his desk every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "cleaned",
        "group": "regular",
        "transcription": "klin",
        "synonyms": [
            "wash",
            "tidy"
        ],
        "auxiliary": "have",
        "v4": "cleaning",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "dirty"
        ],
        "legacy_id": "en_starter_household_tasks_010",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-04",
        "word": "dirty",
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "comparative": "dirtier",
        "superlative": "the dirtiest",
        "emoji": "💩",
        "transcription": "ˈdərti",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "clean"
        ],
        "legacy_id": "en_starter_household_tasks_008",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-05",
        "word": "dirty",
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "comparative": "dirtier",
        "superlative": "the dirtiest",
        "emoji": "💩",
        "transcription": "ˈdərti",
        "synonyms": [
            "messy"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "clean"
        ],
        "legacy_id": "en_starter_household_tasks_002",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-06",
        "word": "fill",
        "emoji": "🫗",
        "form": "verb",
        "subtext": "fill a glass / fill in a form",
        "definitions": [
            {
                "text": "To make something full.",
                "examples": [
                    "Please fill the glass with water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "filled",
        "v3": "filled",
        "group": "regular",
        "transcription": "fɪl",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "empty"
        ],
        "legacy_id": "en_starter_household_tasks_007",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-07",
        "word": "fill",
        "emoji": "🫗",
        "form": "verb",
        "subtext": "fill a glass / fill in a form",
        "definitions": [
            {
                "text": "To make something full.",
                "examples": [
                    "Please fill the glass with water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "filled",
        "v3": "filled",
        "group": "regular",
        "transcription": "fɪl",
        "auxiliary": "have",
        "v4": "filling",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "empty"
        ],
        "legacy_id": "en_starter_household_tasks_013",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-08",
        "word": "fix",
        "emoji": "🛠️",
        "form": "verb",
        "subtext": "fix a problem / fix a computer",
        "synonyms": [
            "repair"
        ],
        "definitions": [
            {
                "text": "To repair something that is broken.",
                "examples": [
                    "Can you fix my phone?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fixed",
        "v3": "fixed",
        "group": "regular",
        "transcription": "fɪks",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "break"
        ],
        "legacy_id": "en_starter_household_tasks_006",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-09",
        "word": "fix",
        "emoji": "🛠️",
        "form": "verb",
        "subtext": "fix a problem / fix a computer",
        "synonyms": [
            "repair"
        ],
        "definitions": [
            {
                "text": "To repair something that is broken.",
                "examples": [
                    "Can you fix my phone?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fixed",
        "v3": "fixed",
        "group": "regular",
        "transcription": "fɪks",
        "auxiliary": "have",
        "v4": "fixing",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "break"
        ],
        "legacy_id": "en_starter_household_tasks_012",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-10",
        "word": "move",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
        "form": "verb",
        "definitions": [
            {
                "text": "To go to live or work in a different place.",
                "examples": [
                    "They moved to a larger flat when they had children."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "moved",
        "group": "regular",
        "transcription": "muv",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "stay"
        ],
        "legacy_id": "en_starter_household_tasks_003",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-11",
        "word": "move",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
        "form": "verb",
        "definitions": [
            {
                "text": "To go to live or work in a different place.",
                "examples": [
                    "They moved to a larger flat when they had children."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "moved",
        "group": "regular",
        "transcription": "muv",
        "auxiliary": "have",
        "v4": "moving",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "stay"
        ],
        "legacy_id": "en_starter_household_tasks_009",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-12",
        "word": "wash",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "To clean something with water.",
                "examples": [
                    "He washes his car every Sunday.",
                    "Wash your hands."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "washed",
        "v3": "washed",
        "group": "regular",
        "transcription": "wɑʃ",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "dirty"
        ],
        "legacy_id": "en_starter_household_tasks_005",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    },
    {
        "id": "A1-HOME-13",
        "word": "wash",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "To clean something with water.",
                "examples": [
                    "He washes his car every Sunday.",
                    "Wash your hands."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "washed",
        "v3": "washed",
        "group": "regular",
        "transcription": "wɑʃ",
        "synonyms": [
            "clean"
        ],
        "auxiliary": "have",
        "v4": "washing",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "dirty"
        ],
        "legacy_id": "en_starter_household_tasks_011",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household Actions"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
