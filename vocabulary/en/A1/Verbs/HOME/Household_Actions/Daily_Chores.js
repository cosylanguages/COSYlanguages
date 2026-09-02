(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-HOM-007",
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
        "legacy_id": "A1-HOME-01",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-009",
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
        "legacy_id": "A1-HOME-06",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-011",
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
        "legacy_id": "A1-HOME-08",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-013",
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
        "legacy_id": "A1-HOME-10",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-015",
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
        "legacy_id": "A1-HOME-12",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-016",
        "word": "sweep",
        "form": "verb",
        "transcription": "swiːp",
        "emoji": "🧹",
        "definitions": [
            {
                "text": "Clean the floor with a broom.",
                "examples": [
                    "Sweep the kitchen floor.",
                    "She swept up the dust."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-017",
        "word": "tidy",
        "form": "verb",
        "transcription": "ˈtaɪdi",
        "emoji": "🧹",
        "definitions": [
            {
                "text": "Make neat and organized.",
                "examples": [
                    "Tidy your desk now.",
                    "He tidied his room."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-018",
        "word": "repair",
        "form": "verb",
        "transcription": "rɪˈpeə",
        "emoji": "🛠️",
        "definitions": [
            {
                "text": "Restore something broken to good condition.",
                "examples": [
                    "They repair old furniture.",
                    "Repair the window frame."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-019",
        "word": "build",
        "form": "verb",
        "transcription": "bɪld",
        "emoji": "🏗️",
        "definitions": [
            {
                "text": "Construct something by putting parts together.",
                "examples": [
                    "They build a new house.",
                    "Build a wooden bookshelf."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
