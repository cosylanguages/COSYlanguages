(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-TRA-027",
        "word": "drive",
        "emoji": "\ud83d\ude97",
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
        "transcription": "dra\u026av",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "A1-TRV-19",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Vehicles_Transit"
    },
    {
        "id": "A1-VERB-TRA-029",
        "word": "fly",
        "emoji": "\u2708\ufe0f",
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
        "transcription": "fla\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "land"
        ],
        "legacy_id": "A1-TRV-25",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Vehicles_Transit"
    },
    {
        "id": "A1-VERB-TRA-031",
        "word": "ride",
        "emoji": "\ud83d\udeb2",
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
        "transcription": "ra\u026ad",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "A1-TRV-42",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Vehicles_Transit"
    },
    {
        "id": "A1-VERB-TRA-033",
        "word": "take",
        "emoji": "\ud83d\udc5c",
        "subtext": "take the bus / take medicine / take a break / take time",
        "form": "verb",
        "transcription": "te\u026ak",
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
        "legacy_id": "A1-TRV-47",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Vehicles_Transit"
    },
    {
        "id": "A1-VERB-TRA-035",
        "word": "walk",
        "emoji": "\ud83d\udeb6",
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
        "transcription": "w\u0254k",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "run"
        ],
        "legacy_id": "A1-TRV-61",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Transport",
        "pos_section": "Verbs",
        "sub_subcategory": "Vehicles_Transit"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
