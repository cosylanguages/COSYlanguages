(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-OTH-COM-001",
        "word": "across",
        "form": "preposition",
        "definitions": [
            {
                "text": "From one side to the other side of something.",
                "examples": [
                    "We walked across the street."
                ]
            }
        ],
        "subtext": "preposition of movement",
        "emoji": "\ud83c\udf09",
        "transcription": "\u0259\u02c8kr\u0252s",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-01",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-002",
        "word": "although",
        "form": "conjunction",
        "definitions": [
            {
                "text": "In spite of the fact that; even though.",
                "examples": [
                    "Although it was raining, we went for a walk."
                ]
            }
        ],
        "subtext": "concession connector",
        "emoji": "\ud83c\udf27\ufe0f",
        "transcription": "\u0254\u02d0l\u02c8\u00f0\u0259\u028a",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "synonyms": [
            "even though"
        ],
        "legacy_id": "A2-COMM-03",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-003",
        "word": "for",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to specify a period of time.",
                "examples": [
                    "I have lived here for five years."
                ]
            }
        ],
        "subtext": "duration with present perfect",
        "emoji": "\ud83d\udcc5",
        "transcription": "f\u0254\u02d0r",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "since"
        ],
        "legacy_id": "A2-COMM-23",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-004",
        "word": "however",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to introduce a statement that contrasts with something already said.",
                "examples": [
                    "The exam was hard. However, everyone passed."
                ]
            }
        ],
        "subtext": "contrast connector",
        "emoji": "\ud83d\udd04",
        "transcription": "ha\u028a\u02c8ev\u0259r",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "synonyms": [
            "but",
            "nevertheless"
        ],
        "legacy_id": "A2-COMM-25",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-005",
        "word": "into",
        "form": "preposition",
        "definitions": [
            {
                "text": "To the inside or middle of something.",
                "examples": [
                    "He walked into the room."
                ]
            }
        ],
        "subtext": "preposition of movement",
        "emoji": "\u27a1\ufe0f",
        "transcription": "\u02c8\u026antu\u02d0",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "out of"
        ],
        "legacy_id": "A2-COMM-28",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-006",
        "word": "many",
        "form": "determiner",
        "definitions": [
            {
                "text": "A large number of countable nouns.",
                "examples": [
                    "There are many books on the shelf."
                ]
            }
        ],
        "subtext": "quantifier for plural countable nouns",
        "emoji": "\ud83d\udd22",
        "transcription": "\u02c8meni",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "few"
        ],
        "legacy_id": "A2-COMM-32",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-007",
        "word": "much",
        "form": "determiner",
        "definitions": [
            {
                "text": "A large amount of uncountable noun.",
                "examples": [
                    "Do you have much free time?"
                ]
            }
        ],
        "subtext": "quantifier for uncountable nouns",
        "emoji": "\ud83d\udcca",
        "transcription": "m\u028ct\u0283",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "little"
        ],
        "legacy_id": "A2-COMM-34",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-008",
        "word": "out of",
        "form": "preposition",
        "definitions": [
            {
                "text": "From the inside of something to the outside.",
                "examples": [
                    "She ran out of the building."
                ]
            }
        ],
        "subtext": "preposition of movement",
        "emoji": "\ud83d\udeaa",
        "transcription": "a\u028at \u0259v",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "into"
        ],
        "legacy_id": "A2-COMM-36",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-009",
        "word": "since",
        "form": "preposition",
        "definitions": [
            {
                "text": "From a specific point in time in the past until now.",
                "examples": [
                    "She has worked here since 2018."
                ]
            }
        ],
        "subtext": "starting point with present perfect",
        "emoji": "\ud83d\udccd",
        "transcription": "s\u026ans",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "for"
        ],
        "legacy_id": "A2-COMM-47",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-010",
        "word": "so",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to express a result or decision.",
                "examples": [
                    "I was hungry, so I cooked dinner."
                ]
            }
        ],
        "subtext": "result connector",
        "emoji": "\ud83d\udc49",
        "transcription": "s\u0259\u028a",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-48",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-OTH-COM-011",
        "word": "through",
        "form": "preposition",
        "definitions": [
            {
                "text": "Moving in one side and out of the other side of an object or space.",
                "examples": [
                    "The train went through the tunnel."
                ]
            }
        ],
        "subtext": "preposition of movement",
        "emoji": "\ud83d\ude87",
        "transcription": "\u03b8ru\u02d0",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-53",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Other_POS",
        "sub_subcategory": "Language_Terms"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
