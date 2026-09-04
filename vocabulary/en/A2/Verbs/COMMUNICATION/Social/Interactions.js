(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-COM-003",
        "word": "attach",
        "emoji": "📎",
        "form": "verb",
        "subtext": "join, connect, fasten",
        "synonyms": [
            "join",
            "connect",
            "fasten"
        ],
        "definitions": [
            {
                "text": "To fasten, join, or connect something.",
                "examples": [
                    "Please attach your CV to the email."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attached",
        "v3": "attached",
        "transcription": "əˈtætʃ",
        "group": "regular",
        "auxiliary": "have",
        "v4": "attaching",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-05",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-004",
        "word": "communicate",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "communicate with",
        "definitions": [
            {
                "text": "To share information with others by speaking, writing, etc.",
                "examples": [
                    "We communicate by email."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "communicated",
        "v3": "communicated",
        "transcription": "kəˈmjuːnɪkeɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "communicating",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "communicare",
            "origin_meaning": "to share, make common"
        },
        "legacy_id": "A2-COMM-08",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-005",
        "word": "connect",
        "emoji": "🔗",
        "form": "verb",
        "subtext": "connect to wifi / connect with people / connect dots",
        "definitions": [
            {
                "text": "To join or be joined with something else.",
                "examples": [
                    "Click here to connect to the internet.",
                    "The bridge connects the two islands."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "connected",
        "v3": "connected",
        "transcription": "kənˈnɛkt",
        "synonyms": [
            "join",
            "link"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "connecting",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-11",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-006",
        "word": "contact",
        "emoji": "📞",
        "form": "verb",
        "subtext": "contact someone / contact by email / contact us",
        "definitions": [
            {
                "text": "To get in touch with someone.",
                "examples": [
                    "I will contact you by the end of the week with an answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contacted",
        "v3": "contacted",
        "synonyms": [
            "call",
            "message"
        ],
        "transcription": "🇬🇧 ˈkɒntækt | 🇺🇸 ˈkɑːntækt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "contacting",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-12",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-007",
        "word": "log out",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "log in to a system / log out / log in with a password",
        "definitions": [
            {
                "text": "To connect to or disconnect from a computer system.",
                "examples": [
                    "Please log out of the system when you leave the office."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "logged out",
        "v3": "logged out",
        "transcription": "🇬🇧 lɒɡ aʊt | 🇺🇸 lɑːɡ aʊt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "log outing",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-31",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-008",
        "word": "record",
        "emoji": "⏺️",
        "form": "verb",
        "subtext": "record a video / record a song",
        "definitions": [
            {
                "text": "To store sounds or pictures using electronic equipment.",
                "examples": [
                    "She is recording a video of the party."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recorded",
        "v3": "recorded",
        "transcription": "ˈrɛkɔːrd",
        "synonyms": [
            "note",
            "save"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "recording",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-41",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-009",
        "word": "represent",
        "emoji": "👔",
        "form": "verb",
        "definitions": [
            {
                "text": "To speak or act for someone else.",
                "examples": [
                    "He represents the local community.",
                    "The lawyer represents the defendant."
                ]
            }
        ],
        "subtext": "stand for",
        "synonyms": [
            "stand for"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "represented",
        "v3": "represented",
        "transcription": "ˌrɛprɪˈzɛnt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "representing",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-42",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-011",
        "word": "vote",
        "emoji": "🗳️",
        "form": "verb",
        "subtext": "vote for / vote against",
        "definitions": [
            {
                "text": "To make an official choice in an election.",
                "examples": [
                    "I am going to vote for the green candidate."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "voted",
        "v3": "voted",
        "transcription": "voʊt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "voting",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "A2-COMM-56",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-029",
        "word": "accuse",
        "emoji": "👈",
        "form": "verb",
        "definitions": [
            {
                "text": "To charge someone with an offense or crime.",
                "examples": [
                    "He was falsely accused of taking the keys.",
                    "Do not accuse others without clear proof."
                ]
            }
        ],
        "subtext": "blame, charge",
        "synonyms": [
            "blame",
            "charge"
        ],
        "transcription": "əˈkjuːz",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-033",
        "word": "assure",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "To tell someone something positively to dispel any doubts.",
                "examples": [
                    "I assure you that everything will be fine.",
                    "The doctor assured us that he would recover."
                ]
            }
        ],
        "subtext": "reassure, promise",
        "synonyms": [
            "reassure",
            "promise"
        ],
        "transcription": "əˈʃʊə",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-034",
        "word": "beg",
        "emoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask someone earnestly or humbly for something.",
                "examples": [
                    "The lost child begged for help.",
                    "He begged his parents for a new bike."
                ]
            }
        ],
        "subtext": "plead, implore",
        "synonyms": [
            "plead",
            "implore"
        ],
        "transcription": "beɡ",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-036",
        "word": "boast",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "To talk with excessive pride and self-satisfaction.",
                "examples": [
                    "He boasted about winning the chess tournament.",
                    "The resort boasts three swimming pools."
                ]
            }
        ],
        "subtext": "brag, flaunt",
        "synonyms": [
            "brag",
            "flaunt"
        ],
        "transcription": "bəʊst",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    },
    {
        "id": "A2-VERB-COM-039",
        "word": "bow",
        "emoji": "🙇",
        "form": "verb",
        "definitions": [
            {
                "text": "To bend the head or upper body as a sign of respect.",
                "examples": [
                    "Performers bowed to the applauding audience.",
                    "Bow slightly when greeting elders in Japan."
                ]
            }
        ],
        "subtext": "bend, incline",
        "synonyms": [
            "bend",
            "incline"
        ],
        "transcription": "baʊ",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Interactions"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
