(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-COM-012",
        "word": "already",
        "form": "adverb",
        "definitions": [
            {
                "text": "Before now or before a specified time.",
                "examples": [
                    "I have already eaten breakfast."
                ]
            }
        ],
        "subtext": "present perfect time adverb",
        "emoji": "\u23f0",
        "transcription": "\u0254\u02d0l\u02c8redi",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-02",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-013",
        "word": "could",
        "form": "verb",
        "definitions": [
            {
                "text": "Used to express past ability or polite requests.",
                "examples": [
                    "When I was young, I could run fast.",
                    "Could you open the window?"
                ]
            }
        ],
        "subtext": "modal auxiliary for past ability and requests",
        "emoji": "\ud83e\udd1d",
        "transcription": "k\u028ad",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-15",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-014",
        "word": "enough",
        "form": "adverb",
        "definitions": [
            {
                "text": "As much or as many as needed or required.",
                "examples": [
                    "Is the room warm enough?"
                ]
            }
        ],
        "subtext": "sufficiency modifier",
        "emoji": "\u2705",
        "transcription": "\u026a\u02c8n\u028cf",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-20",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "word": "extremely",
        "level": "elementary",
        "theme": "language",
        "emoji": "\ud83d\udd25",
        "form": "adverb",
        "definitions": [
            {
                "text": "To a very great degree.",
                "examples": [
                    "The weather was extremely hot.",
                    "She is extremely talented."
                ]
            }
        ],
        "subtext": "very, incredibly",
        "synonyms": [
            "very",
            "incredibly"
        ],
        "transcription": "\u026ak\u02c8stri\u02d0mli",
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-COM-015",
        "legacy_id": "A2-COMM-21",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "word": "fairly",
        "level": "elementary",
        "theme": "language",
        "emoji": "\u2696\ufe0f",
        "form": "adverb",
        "definitions": [
            {
                "text": "More than average, but less than very.",
                "examples": [
                    "The exam was fairly difficult.",
                    "I know him fairly well."
                ]
            }
        ],
        "subtext": "quite, moderately",
        "synonyms": [
            "quite",
            "moderately"
        ],
        "transcription": "\u02c8f\u025b\u0259rli",
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-COM-016",
        "legacy_id": "A2-COMM-22",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-017",
        "word": "interrupt",
        "emoji": "\ud83d\udeab\ud83d\udde3\ufe0f",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop someone from speaking by saying or doing something.",
                "examples": [
                    "Please don't interrupt when I am speaking.",
                    "The rain interrupted the game."
                ]
            }
        ],
        "subtext": "stop",
        "synonyms": [
            "stop"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "interrupted",
        "v3": "interrupted",
        "transcription": "\u02cc\u026ant\u0259\u02c8r\u028cpt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "interrupting",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-27",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-018",
        "word": "just",
        "form": "adverb",
        "definitions": [
            {
                "text": "A very short time ago.",
                "examples": [
                    "I have just seen the news."
                ]
            }
        ],
        "subtext": "present perfect time adverb",
        "emoji": "\u26a1",
        "transcription": "d\u0292\u028cst",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-29",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-019",
        "word": "must",
        "form": "verb",
        "definitions": [
            {
                "text": "Used to express strong obligation or necessity.",
                "examples": [
                    "You must wear a seatbelt."
                ]
            }
        ],
        "subtext": "modal auxiliary for obligation",
        "emoji": "\u2757",
        "transcription": "m\u028cst",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-35",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "word": "partially",
        "level": "elementary",
        "theme": "language",
        "emoji": "\ud83c\udf13",
        "form": "adverb",
        "definitions": [
            {
                "text": "Not completely; to some extent.",
                "examples": [
                    "The project is only partially finished.",
                    "The road was partially blocked by a fallen tree."
                ]
            }
        ],
        "subtext": "partly, in part",
        "synonyms": [
            "partly",
            "in part"
        ],
        "transcription": "\u02c8p\u0251\u02d0r\u0283\u0259li",
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-COM-020",
        "legacy_id": "A2-COMM-37",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-021",
        "word": "request",
        "emoji": "\ud83d\udce7",
        "form": "verb",
        "definitions": [
            {
                "text": "To politely ask for something.",
                "examples": [
                    "They requested more information.",
                    "He requested a meeting with the manager."
                ]
            }
        ],
        "subtext": "ask for",
        "synonyms": [
            "ask for"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "requested",
        "v3": "requested",
        "transcription": "r\u026a\u02c8kw\u025bst",
        "group": "regular",
        "auxiliary": "have",
        "v4": "requesting",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-43",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-022",
        "word": "respond",
        "emoji": "\ud83d\udcac",
        "form": "verb",
        "definitions": [
            {
                "text": "To say or do something as an answer or reaction to something that has been said or done.",
                "examples": [
                    "I asked him a question but he didn't respond.",
                    "The government responded to the crisis quickly."
                ]
            }
        ],
        "subtext": "respond to an email / respond to someone",
        "synonyms": [
            "answer",
            "reply"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "responded",
        "v3": "responded",
        "transcription": "\ud83c\uddec\ud83c\udde7 r\u026a\u02c8sp\u0252nd | \ud83c\uddfa\ud83c\uddf8 r\u026a\u02c8sp\u0251\u02d0nd",
        "group": "regular",
        "auxiliary": "have",
        "v4": "responding",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-44",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-023",
        "word": "should",
        "form": "verb",
        "definitions": [
            {
                "text": "Used to give advice or make recommendations.",
                "examples": [
                    "You should drink more water."
                ]
            }
        ],
        "subtext": "modal auxiliary for advice",
        "emoji": "\ud83d\udca1",
        "transcription": "\u0283\u028ad",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-46",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "word": "strongly",
        "level": "elementary",
        "theme": "language",
        "emoji": "\ud83d\udcaa",
        "form": "adverb",
        "definitions": [
            {
                "text": "To a great degree or in a powerful way.",
                "examples": [
                    "I strongly disagree with your opinion.",
                    "He feels very strongly about the issue."
                ]
            }
        ],
        "subtext": "firmly, powerfully",
        "synonyms": [
            "firmly",
            "powerfully"
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02c8str\u0252\u014bli | \ud83c\uddfa\ud83c\uddf8 \u02c8str\u0251\u02d0\u014bli",
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-COM-024",
        "legacy_id": "A2-COMM-52",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-025",
        "word": "too",
        "form": "adverb",
        "definitions": [
            {
                "text": "More than is necessary, allowed, or desirable.",
                "examples": [
                    "This coffee is too hot to drink."
                ]
            }
        ],
        "subtext": "degree modifier",
        "emoji": "\u26a0\ufe0f",
        "transcription": "tu\u02d0",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-54",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    },
    {
        "id": "A2-VERB-COM-026",
        "word": "yet",
        "form": "adverb",
        "definitions": [
            {
                "text": "Until now (used in negative sentences and questions).",
                "examples": [
                    "Have you finished your homework yet?",
                    "I haven't called him yet."
                ]
            }
        ],
        "subtext": "present perfect time adverb",
        "emoji": "\u23f3",
        "transcription": "jet",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-59",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Terms"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
