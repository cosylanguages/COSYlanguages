(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-COM-01",
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
        "emoji": "⏰",
        "transcription": "ɔːlˈredi",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-02",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-02",
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
        "emoji": "🤝",
        "transcription": "kʊd",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-15",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-03",
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
        "emoji": "✅",
        "transcription": "ɪˈnʌf",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-20",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "word": "extremely",
        "level": "elementary",
        "theme": "language",
        "emoji": "🔥",
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
        "transcription": "ɪkˈstriːmli",
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-COM-04",
        "legacy_id": "A2-COMM-21",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "word": "fairly",
        "level": "elementary",
        "theme": "language",
        "emoji": "⚖️",
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
        "transcription": "ˈfɛərli",
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-COM-05",
        "legacy_id": "A2-COMM-22",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-06",
        "word": "interrupt",
        "emoji": "🚫🗣️",
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
        "transcription": "ˌɪntəˈrʌpt",
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
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-07",
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
        "emoji": "⚡",
        "transcription": "dʒʌst",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-29",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-08",
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
        "emoji": "❗",
        "transcription": "mʌst",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-35",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "word": "partially",
        "level": "elementary",
        "theme": "language",
        "emoji": "🌓",
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
        "transcription": "ˈpɑːrʃəli",
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-COM-09",
        "legacy_id": "A2-COMM-37",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-10",
        "word": "request",
        "emoji": "📧",
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
        "transcription": "rɪˈkwɛst",
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
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-11",
        "word": "respond",
        "emoji": "💬",
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
        "transcription": "🇬🇧 rɪˈspɒnd | 🇺🇸 rɪˈspɑːnd",
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
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-12",
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
        "emoji": "💡",
        "transcription": "ʃʊd",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-46",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "word": "strongly",
        "level": "elementary",
        "theme": "language",
        "emoji": "💪",
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
        "transcription": "🇬🇧 ˈstrɒŋli | 🇺🇸 ˈstrɑːŋli",
        "language": "en",
        "lang": "en",
        "id": "A2-VERB-COM-13",
        "legacy_id": "A2-COMM-52",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-14",
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
        "emoji": "⚠️",
        "transcription": "tuː",
        "lang": "en",
        "level": "elementary",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "A2-COMM-54",
        "level_code": "A2",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Verbs",
        "sub_subcategory": "Language_Linguistics_Terms"
    },
    {
        "id": "A2-VERB-COM-15",
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
        "emoji": "⏳",
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
        "sub_subcategory": "Language_Linguistics_Terms"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
