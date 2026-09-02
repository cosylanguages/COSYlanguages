(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-01",
        "word": "bounce",
        "emoji": "🏀",
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
        "transcription": "baʊns",
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
        "id": "A1-VERB-COM-02",
        "word": "bounce",
        "emoji": "🏀",
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
        "transcription": "baʊns",
        "auxiliary": "have",
        "v4": "bouncing",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "stop"
        ],
        "legacy_id": "A1-COMM-11",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    },
    {
        "id": "A1-VERB-COM-03",
        "word": "kick",
        "emoji": "🦶",
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
        "transcription": "kɪk",
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
        "id": "A1-VERB-COM-04",
        "word": "kick",
        "emoji": "🦶",
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
        "transcription": "kɪk",
        "auxiliary": "have",
        "v4": "kicking",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "catch"
        ],
        "legacy_id": "A1-COMM-36",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    },
    {
        "id": "A1-VERB-COM-05",
        "word": "run",
        "emoji": "🏃",
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
        "transcription": "rən",
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
        "id": "A1-VERB-COM-06",
        "word": "run",
        "emoji": "🏃",
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
        "group": "regular",
        "transcription": "rən",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ],
        "legacy_id": "A1-COMM-50",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    },
    {
        "id": "A1-VERB-COM-07",
        "word": "swim",
        "emoji": "🏊",
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
        "transcription": "swɪm",
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
        "id": "A1-VERB-COM-08",
        "word": "swim",
        "emoji": "🏊",
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
        "group": "regular",
        "transcription": "swɪm",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "sink"
        ],
        "legacy_id": "A1-COMM-61",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    },
    {
        "id": "A1-VERB-COM-09",
        "word": "throw",
        "emoji": "⚾",
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
        "transcription": "θroʊ",
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
        "id": "A1-VERB-COM-10",
        "word": "throw",
        "emoji": "⚾",
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
        "group": "regular",
        "transcription": "θroʊ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "catch"
        ],
        "legacy_id": "A1-COMM-64",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Verbs",
        "sub_subcategory": "Athletic_Sports"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
