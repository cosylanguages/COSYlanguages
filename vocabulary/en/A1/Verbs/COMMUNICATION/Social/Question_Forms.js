(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-COM-123",
        "word": "answer",
        "emoji": "\ud83d\udcde",
        "subtext": "answer a question / answer the phone / answer an email",
        "form": "verb",
        "definitions": [
            {
                "text": "To respond to a question or communication.",
                "examples": [
                    "He answers all emails quickly.",
                    "She answered the phone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "answered",
        "group": "regular",
        "transcription": "\u02c8\u00e6ns\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "ask"
        ],
        "legacy_id": "A1-COMM-08",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-124",
        "word": "answer",
        "emoji": "\ud83d\udcde",
        "subtext": "answer a question / answer the phone / answer an email",
        "form": "verb",
        "definitions": [
            {
                "text": "To respond to a question or communication.",
                "examples": [
                    "He answers all emails quickly.",
                    "She answered the phone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "answered",
        "group": "regular",
        "transcription": "\u02c8\u00e6ns\u0259r",
        "synonyms": [
            "reply"
        ],
        "auxiliary": "have",
        "v4": "answering",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "ask"
        ],
        "legacy_id": "A1-COMM-09",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-125",
        "word": "ask",
        "emoji": "\u2753",
        "subtext": "ask for / about, ask a question / ask for help / ask about / ask someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To put a question or make a request.",
                "examples": [
                    "She asks for feedback after every presentation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "asked",
        "group": "regular",
        "transcription": "\u00e6sk",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "answer"
        ],
        "legacy_id": "A1-COMM-11",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-126",
        "word": "ask",
        "emoji": "\u2753",
        "subtext": "ask for / about, ask a question / ask for help / ask about / ask someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To put a question or make a request.",
                "examples": [
                    "She asks for feedback after every presentation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "asked",
        "group": "regular",
        "transcription": "\u00e6sk",
        "synonyms": [
            "request"
        ],
        "auxiliary": "have",
        "v4": "asking",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "answer"
        ],
        "legacy_id": "A1-COMM-12",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-127",
        "word": "how",
        "emoji": "\u2699\ufe0f",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask about the way something is done or its state.",
                "examples": [
                    "How are you?",
                    "How do you spell your name?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "ha\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "A1-COMM-44",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-128",
        "word": "no",
        "emoji": "\u274c",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to give a negative answer.",
                "examples": [
                    "No, I am not a doctor."
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "no\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "A1-COMM-56",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-129",
        "word": "show",
        "emoji": "\ud83d\udcfd\ufe0f",
        "subtext": "show someone how / show a document / show interest",
        "form": "verb",
        "definitions": [
            {
                "text": "To let someone see or demonstrate something.",
                "examples": [
                    "Can you show me how the system works?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "showed",
        "v3": "shown",
        "group": "irregular",
        "transcription": "\u0283o\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "A1-COMM-80",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-130",
        "word": "show",
        "emoji": "\ud83d\udcfd\ufe0f",
        "subtext": "show someone how / show a document / show interest",
        "form": "verb",
        "definitions": [
            {
                "text": "To let someone see or demonstrate something.",
                "examples": [
                    "Can you show me how the system works?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "showed",
        "v3": "shown",
        "group": "regular",
        "transcription": "\u0283o\u028a",
        "synonyms": [
            "demonstrate"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "A1-COMM-81",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-131",
        "word": "tell",
        "emoji": "\ud83d\udde3\ufe0f",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
        "form": "verb",
        "definitions": [
            {
                "text": "To give information or instructions to someone.",
                "examples": [
                    "She tells the team about changes before they happen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "told",
        "v3": "told",
        "group": "irregular",
        "transcription": "t\u025bl",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "ask"
        ],
        "legacy_id": "A1-COMM-91",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-132",
        "word": "tell",
        "emoji": "\ud83d\udde3\ufe0f",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
        "form": "verb",
        "definitions": [
            {
                "text": "To give information or instructions to someone.",
                "examples": [
                    "She tells the team about changes before they happen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "told",
        "v3": "told",
        "group": "regular",
        "transcription": "t\u025bl",
        "synonyms": [
            "say",
            "inform"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "ask"
        ],
        "legacy_id": "A1-COMM-92",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-133",
        "word": "understand",
        "emoji": "\ud83d\udca1",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To grasp the meaning of something.",
                "examples": [
                    "I understand the contract.",
                    "She understands French."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "understood",
        "group": "irregular",
        "transcription": "\u02cc\u0259nd\u0259r\u02c8st\u00e6nd",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "misunderstand"
        ],
        "legacy_id": "A1-COMM-104",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-134",
        "word": "understand",
        "emoji": "\ud83d\udca1",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To grasp the meaning of something.",
                "examples": [
                    "I understand the contract.",
                    "She understands French."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "understood",
        "group": "regular",
        "transcription": "\u02cc\u0259nd\u0259r\u02c8st\u00e6nd",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "misunderstand"
        ],
        "legacy_id": "A1-COMM-105",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-135",
        "word": "when",
        "emoji": "\u23f0",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask about time.",
                "examples": [
                    "When is the meeting?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "w\u026an",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "A1-COMM-111",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-136",
        "word": "where",
        "emoji": "\ud83d\udccd",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask about a place or position.",
                "examples": [
                    "Where do you live?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "w\u025br",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "A1-COMM-112",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-137",
        "word": "why",
        "emoji": "\u2753",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask for a reason.",
                "examples": [
                    "Why are you late?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "wa\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "A1-COMM-116",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    },
    {
        "id": "A1-VERB-COM-138",
        "word": "yes",
        "emoji": "\u2705",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to give a positive answer.",
                "examples": [
                    "Yes, I am a student."
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "j\u025bs",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "A1-COMM-119",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Question_Forms"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
