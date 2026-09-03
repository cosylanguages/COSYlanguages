(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-HOM-007",
        "word": "clean",
        "emoji": "\ud83e\uddf9",
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
        "emoji": "\ud83e\uded7",
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
        "transcription": "f\u026al",
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
        "emoji": "\ud83d\udee0\ufe0f",
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
        "transcription": "f\u026aks",
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
        "emoji": "\ud83d\udce6",
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
        "emoji": "\ud83e\uddfc",
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
        "transcription": "w\u0251\u0283",
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
        "word": "dust",
        "emoji": "\ud83e\uddf9",
        "form": "verb",
        "transcription": "d\u028cst",
        "definitions": [
            {
                "text": "Remove dust from the surface of.",
                "examples": [
                    "Dust the shelves once a week.",
                    "He dusted the wooden furniture."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-017",
        "word": "empty",
        "emoji": "\ud83d\uddd1\ufe0f",
        "form": "verb",
        "transcription": "\u02c8\u025bmpti",
        "definitions": [
            {
                "text": "Remove all contents from.",
                "examples": [
                    "Empty the wastebin into the trash.",
                    "She emptied her glass of water."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-018",
        "word": "iron",
        "emoji": "\ud83d\udc54",
        "form": "verb",
        "transcription": "\u02c8a\u026a\u0259rn",
        "definitions": [
            {
                "text": "Smooth clothes with a heated appliance.",
                "examples": [
                    "Iron your shirt before the meeting.",
                    "He irons his trousers every Sunday."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-019",
        "word": "mop",
        "emoji": "\ud83e\uddf9",
        "form": "verb",
        "transcription": "m\u0251\u02d0p",
        "definitions": [
            {
                "text": "Clean a floor with a sponge or cloth tool.",
                "examples": [
                    "Mop the kitchen floor after cooking.",
                    "She mopped up the spilled liquid."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-020",
        "word": "sweep",
        "emoji": "\ud83e\uddf9",
        "form": "verb",
        "transcription": "swi\u02d0p",
        "definitions": [
            {
                "text": "Clean an area by brushing away dirt.",
                "examples": [
                    "Sweep the hallway floor with a broom.",
                    "He swept the porch clean."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-021",
        "word": "tidy",
        "emoji": "\u2728",
        "form": "verb",
        "transcription": "\u02c8ta\u026adi",
        "definitions": [
            {
                "text": "Bring order and neatness to.",
                "examples": [
                    "Tidy up your toys before dinner.",
                    "She tidied her desk."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-VERB-HOM-022",
        "word": "wipe",
        "emoji": "\ud83e\uddfb",
        "form": "verb",
        "transcription": "wa\u026ap",
        "definitions": [
            {
                "text": "Clean or dry something by rubbing a cloth over it.",
                "examples": [
                    "Wipe the table after finishing lunch.",
                    "She wiped the counter with a cloth."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Verbs",
        "sub_subcategory": "Daily_Chores"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
