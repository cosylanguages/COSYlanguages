(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-SEL-01",
        "word": "dislike",
        "emoji": "👎",
        "subtext": "not like / dislike doing",
        "form": "verb",
        "definitions": [
            {
                "text": "To not like someone or something.",
                "examples": [
                    "I dislike loud music."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "disliked",
        "v3": "disliked",
        "group": "regular",
        "transcription": "dɪsˈlaɪk",
        "auxiliary": "have",
        "v4": "disliking",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "prefer"
        ],
        "legacy_id": "A1-SELF-06",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-02",
        "word": "enjoy",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "To take pleasure from something.",
                "examples": [
                    "She really enjoys working from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "enjoyed",
        "group": "regular",
        "transcription": "ˌɛnˈʤɔɪ",
        "auxiliary": "have",
        "v4": "enjoying",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "hate"
        ],
        "legacy_id": "A1-SELF-07",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-03",
        "word": "fight",
        "emoji": "⚔️",
        "form": "verb",
        "subtext": "fight for / a big fight",
        "synonyms": [
            "battle"
        ],
        "definitions": [
            {
                "text": "To use physical force to try to hurt someone or win something.",
                "examples": [
                    "The two boys are fighting."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fought",
        "v3": "fought",
        "group": "regular",
        "transcription": "faɪt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "make peace"
        ],
        "legacy_id": "A1-SELF-09",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-04",
        "word": "hate",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "form": "verb",
        "definitions": [
            {
                "text": "To strongly dislike.",
                "examples": [
                    "He hates commuting by bus.",
                    "She hates long meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "hated",
        "group": "regular",
        "transcription": "heɪt",
        "synonyms": [
            "dislike"
        ],
        "auxiliary": "have",
        "v4": "hating",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "love"
        ],
        "legacy_id": "A1-SELF-12",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-05",
        "word": "hope",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "To wish for something to happen.",
                "examples": [
                    "I hope to get a promotion this year.",
                    "She hopes for better pay."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "hoped",
        "group": "regular",
        "transcription": "hoʊp",
        "synonyms": [
            "wish"
        ],
        "auxiliary": "have",
        "v4": "hoping",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "fear"
        ],
        "legacy_id": "A1-SELF-13",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-06",
        "word": "laugh",
        "emoji": "😂",
        "form": "verb",
        "subtext": "laugh at / laugh together",
        "synonyms": [
            "chuckle"
        ],
        "definitions": [
            {
                "text": "To make sounds with your voice because you think something is funny.",
                "examples": [
                    "They were laughing at his joke."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "laughed",
        "v3": "laughed",
        "group": "regular",
        "transcription": "læf",
        "auxiliary": "have",
        "v4": "laughing",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "cry"
        ],
        "legacy_id": "A1-SELF-15",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-07",
        "word": "like",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To find something pleasant; to enjoy.",
                "examples": [
                    "I like my job.",
                    "She likes cooking.",
                    "He likes coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "liked",
        "group": "regular",
        "transcription": "laɪk",
        "synonyms": [
            "enjoy"
        ],
        "auxiliary": "have",
        "v4": "liking",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "legacy_id": "A1-SELF-16",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-08",
        "word": "love",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To have strong affection for; to enjoy greatly.",
                "examples": [
                    "She loves her job.",
                    "He loves travelling for work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "loved",
        "group": "regular",
        "transcription": "ləv",
        "synonyms": [
            "adore"
        ],
        "auxiliary": "have",
        "v4": "loving",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "hate"
        ],
        "legacy_id": "A1-SELF-17",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-09",
        "word": "need",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "To require something; to feel that something is necessary.",
                "examples": [
                    "I need a break.",
                    "She needs help.",
                    "We need more time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "needed",
        "group": "regular",
        "transcription": "nid",
        "synonyms": [
            "require"
        ],
        "auxiliary": "have",
        "v4": "needing",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "have"
        ],
        "legacy_id": "A1-SELF-19",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-10",
        "word": "want",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "To desire or wish for something.",
                "examples": [
                    "I want a coffee.",
                    "She wants a better job.",
                    "He wants to retire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "wanted",
        "group": "regular",
        "transcription": "wɔnt",
        "synonyms": [
            "desire"
        ],
        "auxiliary": "have",
        "v4": "wanting",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "refuse"
        ],
        "legacy_id": "A1-SELF-29",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    },
    {
        "id": "A1-VERB-SEL-11",
        "word": "worry",
        "emoji": "😟",
        "form": "verb",
        "subtext": "worry about / don't worry",
        "synonyms": [
            "fret"
        ],
        "definitions": [
            {
                "text": "To think about problems or unpleasant things that might happen.",
                "examples": [
                    "Don't worry, everything will be fine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "worried",
        "v3": "worried",
        "group": "regular",
        "transcription": "ˈwəri",
        "auxiliary": "have",
        "v4": "worrying",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "relax"
        ],
        "legacy_id": "A1-SELF-31",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Emotions",
        "pos_section": "Verbs",
        "sub_subcategory": "Feelings_States"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
