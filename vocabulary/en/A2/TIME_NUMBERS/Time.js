(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NUM-01",
        "word": "brief",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Lasting only a short time or using only a few words.",
                "examples": [
                    "We had a brief meeting.",
                    "Please keep your comments brief."
                ]
            }
        ],
        "subtext": "short, quick, concise",
        "synonyms": [
            "short",
            "quick",
            "concise"
        ],
        "comparative": "briefer",
        "superlative": "the briefest",
        "transcription": "briːf",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "en_elementary_time_001",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "id": "A2-NUM-02",
        "word": "current",
        "emoji": "📍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happening or existing now.",
                "examples": [
                    "What is your current salary?"
                ]
            }
        ],
        "subtext": "current situation / current employer",
        "synonyms": [
            "currently"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈkɜːrənt",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "en_elementary_sequence_order_001",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "word": "eventually",
        "level": "elementary",
        "theme": "time",
        "emoji": "🏁",
        "form": "adverb",
        "definitions": [
            {
                "text": "In the end, especially after a long time.",
                "examples": [
                    "We eventually reached the hotel.",
                    "He eventually passed his driving test."
                ]
            }
        ],
        "subtext": "finally, in the end",
        "synonyms": [
            "finally",
            "in the end"
        ],
        "transcription": "ɪˈvɛntʃuəli",
        "language": "en",
        "lang": "en",
        "id": "A2-NUM-03",
        "legacy_id": "en_elementary_time_008",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "word": "finally",
        "level": "elementary",
        "theme": "time",
        "emoji": "🏁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to introduce the last point in a list; or after a long time.",
                "examples": [
                    "Finally, I'd like to thank my parents.",
                    "We finally reached the summit."
                ]
            }
        ],
        "subtext": "lastly, in the end",
        "synonyms": [
            "lastly",
            "in the end"
        ],
        "transcription": "ˈfaɪnəli",
        "language": "en",
        "lang": "en",
        "id": "A2-NUM-04",
        "legacy_id": "en_elementary_time_011",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "word": "firstly",
        "level": "elementary",
        "theme": "time",
        "emoji": "1️⃣",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to introduce the first point in a list.",
                "examples": [
                    "Firstly, we need to decide on a date.",
                    "Firstly, I'd like to thank you for coming."
                ]
            }
        ],
        "subtext": "first, to begin with",
        "synonyms": [
            "first",
            "to begin with"
        ],
        "transcription": "ˈfɜːrstli",
        "language": "en",
        "lang": "en",
        "id": "A2-NUM-05",
        "legacy_id": "en_elementary_time_009",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "id": "A2-NUM-06",
        "word": "future",
        "emoji": "🔮",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not yet happened; relating to a later time.",
                "examples": [
                    "What are your future plans for your career?"
                ]
            }
        ],
        "subtext": "future plans / in the future / future employer",
        "comparative": null,
        "superlative": null,
        "synonyms": [
            "upcoming"
        ],
        "transcription": "ˈfjuːtʃər",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "en_elementary_time_002",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "word": "lately",
        "level": "elementary",
        "theme": "time",
        "emoji": "🕒",
        "form": "adverb",
        "definitions": [
            {
                "text": "Recently.",
                "examples": [
                    "I haven't seen him lately.",
                    "Have you been busy lately?"
                ]
            }
        ],
        "subtext": "recently, in recent times",
        "synonyms": [
            "recently",
            "in recent times"
        ],
        "transcription": "ˈleɪtli",
        "language": "en",
        "lang": "en",
        "id": "A2-NUM-07",
        "legacy_id": "en_elementary_time_006",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "id": "A2-NUM-08",
        "word": "previous",
        "emoji": "🔙",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happening or existing before something or someone else.",
                "examples": [
                    "In my previous job, I worked in a bank."
                ]
            }
        ],
        "subtext": "previous job / previous week",
        "synonyms": [
            "former",
            "earlier"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈpriːviəs",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "en_elementary_time_003",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "id": "A2-NUM-09",
        "word": "recent",
        "emoji": "🕒",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having happened not long ago.",
                "examples": [
                    "Have you seen the recent changes to the policy?"
                ]
            }
        ],
        "subtext": "most recent / very recent / recent news",
        "comparative": "more recent",
        "superlative": "the most recent",
        "synonyms": [
            "new",
            "latest"
        ],
        "transcription": "ˈriːsnt",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "en_elementary_time_004",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "word": "secondly",
        "level": "elementary",
        "theme": "time",
        "emoji": "2️⃣",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to introduce the second point in a list.",
                "examples": [
                    "Secondly, we need to find a venue.",
                    "Secondly, the cost is too high."
                ]
            }
        ],
        "subtext": "second, furthermore",
        "synonyms": [
            "second",
            "furthermore"
        ],
        "transcription": "ˈsɛkəndli",
        "language": "en",
        "lang": "en",
        "id": "A2-NUM-10",
        "legacy_id": "en_elementary_time_010",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "word": "shortly",
        "level": "elementary",
        "theme": "time",
        "emoji": "⏱️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Soon; in a short time.",
                "examples": [
                    "The plane will be landing shortly.",
                    "He arrived shortly after five."
                ]
            }
        ],
        "subtext": "soon, in a moment",
        "synonyms": [
            "soon",
            "in a moment"
        ],
        "transcription": "ˈʃɔːrtli",
        "language": "en",
        "lang": "en",
        "id": "A2-NUM-11",
        "legacy_id": "en_elementary_time_007",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    },
    {
        "id": "A2-NUM-12",
        "word": "sudden",
        "emoji": "⚡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happening or done quickly and unexpectedly.",
                "examples": [
                    "There was a sudden change in the weather.",
                    "He made a sudden decision."
                ]
            }
        ],
        "subtext": "unexpected",
        "synonyms": [
            "unexpected"
        ],
        "comparative": "more sudden",
        "superlative": "the most sudden",
        "transcription": "ˈsʌdn",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "en_elementary_time_005",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
