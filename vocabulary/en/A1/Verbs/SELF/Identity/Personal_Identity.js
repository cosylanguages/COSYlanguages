(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-SEL-01",
        "word": "invite",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask someone to come to an event or place.",
                "examples": [
                    "They invited all their colleagues to the party."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "invited",
        "subtext": "invite someone / invite to dinner / invite to a party",
        "group": "regular",
        "transcription": "ˌɪnˈvaɪt",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "reject"
        ],
        "legacy_id": "A1-SELF-36",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-VERB-SEL-02",
        "word": "invite",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask someone to come to an event or place.",
                "examples": [
                    "They invited all their colleagues to the party."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "invited",
        "subtext": "invite someone / invite to dinner / invite to a party",
        "group": "regular",
        "transcription": "ˌɪnˈvaɪt",
        "auxiliary": "have",
        "v4": "inviting",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "reject"
        ],
        "legacy_id": "A1-SELF-37",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-VERB-SEL-03",
        "word": "share",
        "emoji": "🍕",
        "subtext": "share a room / share information / share an idea / share with",
        "form": "verb",
        "definitions": [
            {
                "text": "To give a part of something to others.",
                "examples": [
                    "Let's share the pizza.",
                    "I share a room with my brother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "shared",
        "group": "regular",
        "transcription": "ʃɛr",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "keep"
        ],
        "legacy_id": "A1-SELF-48",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-VERB-SEL-04",
        "word": "share",
        "emoji": "🍕",
        "subtext": "share a room / share information / share an idea / share with",
        "form": "verb",
        "definitions": [
            {
                "text": "To give a part of something to others.",
                "examples": [
                    "Let's share the pizza.",
                    "I share a room with my brother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "shared",
        "group": "regular",
        "transcription": "ʃɛr",
        "auxiliary": "have",
        "v4": "sharing",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "keep"
        ],
        "legacy_id": "A1-SELF-49",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-VERB-SEL-05",
        "word": "talk",
        "emoji": "💬",
        "subtext": "talk to / about, talk to someone / talk about / talk openly / talk for a long time",
        "form": "verb",
        "definitions": [
            {
                "text": "To communicate by speaking.",
                "examples": [
                    "He talks to his manager about the problem."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "talked",
        "group": "regular",
        "transcription": "tɔk",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "listen"
        ],
        "legacy_id": "A1-SELF-56",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-VERB-SEL-06",
        "word": "talk",
        "emoji": "💬",
        "subtext": "talk to / about, talk to someone / talk about / talk openly / talk for a long time",
        "form": "verb",
        "definitions": [
            {
                "text": "To communicate by speaking.",
                "examples": [
                    "He talks to his manager about the problem."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "talked",
        "group": "regular",
        "transcription": "tɔk",
        "synonyms": [
            "speak",
            "chat"
        ],
        "auxiliary": "have",
        "v4": "talking",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "listen"
        ],
        "legacy_id": "A1-SELF-57",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-VERB-SEL-07",
        "word": "together",
        "emoji": "👫",
        "form": "adverb",
        "definitions": [
            {
                "text": "With another person or group.",
                "examples": [
                    "We eat dinner together."
                ]
            }
        ],
        "subtext": "related to family life",
        "transcription": "təˈgɛðər",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gaduri"
        },
        "legacy_id": "A1-SELF-61",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-VERB-SEL-08",
        "word": "visit",
        "definitions": [
            {
                "text": "To go to see a person or place.",
                "examples": [
                    "She visits her parents every second weekend."
                ]
            }
        ],
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "visited",
        "emoji": "🏘️",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈvɪzɪt",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "A1-SELF-67",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Personal_Identity"
    },
    {
        "id": "A1-VERB-SEL-09",
        "word": "visit",
        "definitions": [
            {
                "text": "To go to see a person or place.",
                "examples": [
                    "She visits her parents every second weekend."
                ]
            }
        ],
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "visited",
        "emoji": "🏘️",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈvɪzɪt",
        "auxiliary": "have",
        "v4": "visiting",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "A1-SELF-68",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Identity",
        "pos_section": "Verbs",
        "sub_subcategory": "Personal_Identity"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
