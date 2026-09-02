(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-01",
        "word": "be",
        "emoji": "👤",
        "subtext": "be tired / be happy / be at work / be ready",
        "form": "verb",
        "transcription": "biː",
        "definitions": [
            {
                "text": "To exist; to have a quality or state.",
                "examples": [
                    "I am tired.",
                    "She is a doctor.",
                    "We are late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "was / were",
        "v3": "been",
        "group": "regular",
        "auxiliary": "have",
        "tenses": {
            "present_simple": {
                "positive": [
                    "am",
                    "are",
                    "is",
                    "are",
                    "are"
                ]
            },
            "past_simple": {
                "positive": [
                    "was",
                    "were",
                    "was",
                    "were",
                    "were"
                ]
            }
        },
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "beun",
            "origin_meaning": "to be"
        },
        "antonyms": [
            "become"
        ],
        "legacy_id": "A1-COMM-14",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-02",
        "word": "collect",
        "emoji": "📦",
        "form": "verb",
        "subtext": "collect things / collect stamps",
        "definitions": [
            {
                "text": "To bring things together from different places.",
                "examples": [
                    "She collects stamps."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "collected",
        "v3": "collected",
        "group": "regular",
        "transcription": "kəˈlɛkt",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "scatter"
        ],
        "legacy_id": "A1-COMM-23",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-03",
        "word": "collect",
        "emoji": "📦",
        "form": "verb",
        "subtext": "collect things / collect stamps",
        "definitions": [
            {
                "text": "To bring things together from different places.",
                "examples": [
                    "She collects stamps."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "collected",
        "v3": "collected",
        "group": "regular",
        "transcription": "kəˈlɛkt",
        "auxiliary": "have",
        "v4": "collecting",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "scatter"
        ],
        "legacy_id": "A1-COMM-24",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-04",
        "word": "draw",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a picture with a pen or pencil.",
                "examples": [
                    "I like to draw birds.",
                    "Can you draw a map?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "drawn",
        "group": "irregular",
        "transcription": "drɔ",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A1-COMM-34",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-05",
        "word": "draw",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a picture with a pen or pencil.",
                "examples": [
                    "I like to draw birds.",
                    "Can you draw a map?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "drawn",
        "group": "regular",
        "transcription": "drɔ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A1-COMM-35",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-06",
        "word": "introduce",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
        "form": "verb",
        "definitions": [
            {
                "text": "To present someone to another person.",
                "examples": [
                    "She introduced herself at the start of the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "introduced",
        "group": "regular",
        "transcription": "ˌɪntrəˈdus",
        "auxiliary": "have",
        "v4": "introducing",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "A1-COMM-47",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-07",
        "word": "join",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "join a club / join us",
        "definitions": [
            {
                "text": "To become a member of a group or organization.",
                "examples": [
                    "I want to join the tennis club."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "joined",
        "v3": "joined",
        "group": "regular",
        "transcription": "ʤɔɪn",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "A1-COMM-48",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-08",
        "word": "join",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "join a club / join us",
        "definitions": [
            {
                "text": "To become a member of a group or organization.",
                "examples": [
                    "I want to join the tennis club."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "joined",
        "v3": "joined",
        "group": "regular",
        "transcription": "ʤɔɪn",
        "auxiliary": "have",
        "v4": "joining",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "A1-COMM-49",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-09",
        "word": "paint",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "paint a picture",
        "synonyms": [
            "color",
            "painting"
        ],
        "definitions": [
            {
                "text": "To make a picture using paint.",
                "examples": [
                    "I like to paint flowers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "painted",
        "v3": "painted",
        "group": "regular",
        "transcription": "peɪnt",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "erase"
        ],
        "legacy_id": "A1-COMM-61",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-10",
        "word": "paint",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "paint a picture",
        "synonyms": [
            "color",
            "painting"
        ],
        "definitions": [
            {
                "text": "To make a picture using paint.",
                "examples": [
                    "I like to paint flowers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "painted",
        "v3": "painted",
        "group": "regular",
        "transcription": "peɪnt",
        "auxiliary": "have",
        "v4": "painting",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "erase"
        ],
        "legacy_id": "A1-COMM-62",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-11",
        "word": "please",
        "translation": "please",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "🙏",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to be polite when asking for something.",
                "examples": [
                    "Can I have some water, please?"
                ]
            }
        ],
        "transcription": "pliz",
        "lang": "en",
        "legacy_id": "A1-COMM-65",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-12",
        "word": "say",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "To express something in words.",
                "examples": [
                    "She says hello every morning.",
                    "He says it is difficult."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "said",
        "v3": "said",
        "group": "regular",
        "transcription": "seɪ",
        "synonyms": [
            "tell",
            "state"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "listen"
        ],
        "legacy_id": "A1-COMM-76",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-13",
        "word": "speak",
        "emoji": "🗣️",
        "subtext": "speak to / with, speak to someone / speak English / speak clearly / speak at a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "To say words; to communicate verbally.",
                "examples": [
                    "He speaks French.",
                    "She speaks to her manager every day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "spoken",
        "group": "regular",
        "transcription": "spik",
        "synonyms": [
            "talk"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sprekaną"
        },
        "antonyms": [
            "be silent"
        ],
        "legacy_id": "A1-COMM-87",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-14",
        "word": "thank",
        "emoji": "🙏",
        "subtext": "thank someone / thank you for / many thanks",
        "form": "verb",
        "definitions": [
            {
                "text": "To express gratitude to someone.",
                "examples": [
                    "He thanked the team for their hard work on the project."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "thanked",
        "v3": "thanked",
        "group": "regular",
        "transcription": "θæŋk",
        "auxiliary": "have",
        "v4": "thanking",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "complain"
        ],
        "legacy_id": "A1-COMM-93",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-15",
        "word": "wave",
        "emoji": "👋",
        "form": "verb",
        "subtext": "wave at, wave goodbye / wave hello",
        "synonyms": [
            "greet"
        ],
        "definitions": [
            {
                "text": "To move your hand from side to side in the air to say hello or goodbye.",
                "examples": [
                    "Wave goodbye to your friend."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waved",
        "v3": "waved",
        "group": "regular",
        "transcription": "weɪv",
        "auxiliary": "have",
        "v4": "waving",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "A1-COMM-108",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-16",
        "word": "welcome",
        "emoji": "👋",
        "form": "verb",
        "subtext": "welcome someone / welcome home",
        "definitions": [
            {
                "text": "To greet someone who has just arrived at a place.",
                "examples": [
                    "We welcomed the guests at the door."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "welcomed",
        "v3": "welcomed",
        "group": "regular",
        "transcription": "ˈwɛlkəm",
        "auxiliary": "have",
        "v4": "welcoming",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "reject"
        ],
        "legacy_id": "A1-COMM-109",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    },
    {
        "id": "A1-VERB-COM-17",
        "word": "wish",
        "emoji": "🤞",
        "form": "verb",
        "subtext": "wish for / I wish",
        "definitions": [
            {
                "text": "To want something to happen or to be true even though it is unlikely.",
                "examples": [
                    "I wish it was summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wished",
        "v3": "wished",
        "group": "regular",
        "transcription": "wɪʃ",
        "auxiliary": "have",
        "v4": "wishing",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "fear"
        ],
        "legacy_id": "A1-COMM-117",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interpersonal_Interactions"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
