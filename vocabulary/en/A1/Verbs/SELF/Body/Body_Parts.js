(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-SEL-009",
        "word": "breathe",
        "emoji": "🫁",
        "form": "verb",
        "definitions": [
            {
                "text": "To take air into your lungs and send it out again.",
                "examples": [
                    "Breathe deeply."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "breathed",
        "v3": "breathed",
        "group": "regular",
        "subtext": "breathe",
        "synonyms": [
            "inhale",
            "exhale"
        ],
        "transcription": "brið",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-05",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Verbs",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-VERB-SEL-011",
        "word": "hear",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To perceive sound through the ears.",
                "examples": [
                    "I hear the alarm every morning.",
                    "Can you hear me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "heard",
        "v3": "heard",
        "group": "irregular",
        "transcription": "hir",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "hauzjan",
            "origin_meaning": "to hear"
        },
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "A1-SELF-17",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Verbs",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-VERB-SEL-013",
        "word": "look",
        "emoji": "👀",
        "subtext": "look at something / look for something / look at / for, look at / look for / look like / look happy",
        "form": "verb",
        "definitions": [
            {
                "text": "To direct your eyes toward something.",
                "examples": [
                    "Look at this photo.",
                    "He is looking for his keys."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "looked",
        "group": "regular",
        "transcription": "lʊk",
        "auxiliary": "have",
        "v4": "looking",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "A1-SELF-22",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Verbs",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-VERB-SEL-014",
        "word": "see",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To notice or perceive with the eyes.",
                "examples": [
                    "I see my doctor tomorrow.",
                    "She sees the problem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "saw",
        "v3": "seen",
        "group": "irregular",
        "transcription": "si",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sehwan",
            "origin_meaning": "to see"
        },
        "antonyms": [
            "blind"
        ],
        "legacy_id": "A1-SELF-26",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Verbs",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-VERB-SEL-016",
        "word": "smell",
        "emoji": "👃",
        "form": "verb",
        "subtext": "smell good / smell the flowers",
        "synonyms": [
            "scent"
        ],
        "definitions": [
            {
                "text": "To notice or recognize something using your nose.",
                "examples": [
                    "I can smell the coffee."
                ]
            }
        ],
        "classification": "both",
        "aspect": "both",
        "v2": "smelled / smelt",
        "v3": "smelled / smelt",
        "group": "both",
        "transcription": "smɛl",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "stink"
        ],
        "legacy_id": "A1-SELF-29",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Verbs",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-VERB-SEL-018",
        "word": "smile",
        "emoji": "😊",
        "subtext": "smile at someone / a big smile / smile broadly",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a happy expression with your mouth.",
                "examples": [
                    "She has a beautiful smile.",
                    "Smile for the camera."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "smiled",
        "group": "regular",
        "transcription": "smaɪl",
        "auxiliary": "have",
        "v4": "smiling",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "cry"
        ],
        "legacy_id": "A1-SELF-31",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Verbs",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-VERB-SEL-019",
        "word": "yawn",
        "emoji": "🥱",
        "form": "verb",
        "definitions": [
            {
                "text": "To open your mouth wide and take a deep breath because you are tired.",
                "examples": [
                    "She yawned during the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "yawned",
        "v3": "yawned",
        "group": "regular",
        "subtext": "yawn",
        "synonyms": [
            "feel sleepy"
        ],
        "transcription": "jɔn",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-38",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Verbs",
        "sub_subcategory": "Body_Parts"
    },
    {
        "id": "A1-VERB-SEL-055",
        "word": "shave",
        "form": "verb",
        "transcription": "ʃeɪv",
        "emoji": "🪒",
        "definitions": [
            {
                "text": "Remove hair from skin with a razor.",
                "examples": [
                    "He shaves every morning.",
                    "She shaved her legs."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Verbs",
        "sub_subcategory": "Body_Parts"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
