(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-001",
        "word": "bounce",
        "emoji": "\ud83c\udfc0",
        "form": "verb",
        "subtext": "bounce a ball",
        "synonyms": [
            "rebound",
            "bouncing"
        ],
        "definitions": [
            {
                "text": "To move up or away after hitting a surface.",
                "examples": [
                    "The ball is bouncing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bounced",
        "v3": "bounced",
        "group": "regular",
        "transcription": "ba\u028ans",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "stop"
        ],
        "legacy_id": "A1-COMM-10",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    },
    {
        "id": "A1-VERB-COM-003",
        "word": "kick",
        "emoji": "\ud83e\uddb6",
        "form": "verb",
        "subtext": "kick a ball / kick hard",
        "synonyms": [
            "strike"
        ],
        "definitions": [
            {
                "text": "To hit something with your foot.",
                "examples": [
                    "Kick the ball!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kicked",
        "v3": "kicked",
        "group": "regular",
        "transcription": "k\u026ak",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "catch"
        ],
        "legacy_id": "A1-COMM-35",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    },
    {
        "id": "A1-VERB-COM-005",
        "word": "run",
        "emoji": "\ud83c\udfc3",
        "subtext": "run a race / run a business / run out of / run late",
        "form": "verb",
        "definitions": [
            {
                "text": "To move very fast on your legs.",
                "examples": [
                    "I run in the park.",
                    "He runs to catch the bus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ran",
        "v3": "run",
        "group": "irregular",
        "transcription": "r\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "A1-COMM-49",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    },
    {
        "id": "A1-VERB-COM-007",
        "word": "swim",
        "emoji": "\ud83c\udfca",
        "subtext": "swim across / swim laps / swim well",
        "synonyms": [
            "go swimming"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move through water using your arms and legs.",
                "examples": [
                    "I swim every morning.",
                    "Can you swim?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "swam",
        "v3": "swum",
        "group": "irregular",
        "transcription": "sw\u026am",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "sink"
        ],
        "legacy_id": "A1-COMM-60",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    },
    {
        "id": "A1-VERB-COM-009",
        "word": "throw",
        "emoji": "\u26be",
        "form": "verb",
        "subtext": "throw a ball / throw away",
        "synonyms": [
            "toss"
        ],
        "definitions": [
            {
                "text": "To make something move through the air by pushing it out of your hand.",
                "examples": [
                    "Can you throw the ball to me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "threw",
        "v3": "thrown",
        "group": "irregular",
        "transcription": "\u03b8ro\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "catch"
        ],
        "legacy_id": "A1-COMM-63",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    },
    {
        "id": "A1-VERB-COM-172",
        "word": "Feed",
        "emoji": "\ud83d\udcd6",
        "form": "verb",
        "subtext": "to give food to an animal or person.",
        "definitions": [
            {
                "text": "to give food to an animal or person.",
                "examples": [
                    "Volunteers feed stray cats in the park."
                ]
            }
        ],
        "transcription": "f\u02c8id",
        "lang": "en",
        "level": "starter",
        "theme": "leisure",
        "sub_theme": "athletic_sports",
        "antonyms": [
            "starve"
        ],
        "legacy_id": "EVENT-celebrate-international-homeless-animals-day",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
    if (typeof module !== "undefined" && module.exports) {
        module.exports = data;
    }
})();
