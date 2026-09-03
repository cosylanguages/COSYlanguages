(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-OTH-TIM-001",
        "word": "about",
        "form": "preposition",
        "definitions": [
            {
                "text": "On the subject of; or approximately.",
                "examples": [
                    "A book about animals.",
                    "It is about six o'clock."
                ]
            }
        ],
        "emoji": "\ud83d\udcd6",
        "transcription": "\u0259\u02c8ba\u028at",
        "subtext": "about",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-20",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-002",
        "word": "after",
        "form": "preposition",
        "definitions": [
            {
                "text": "At a later time; following.",
                "examples": [
                    "We have a meeting after lunch."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "emoji": "\u23ed\ufe0f",
        "transcription": "\u02c8\u00e6ft\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "before"
        ],
        "legacy_id": "A1-NUM-21",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-003",
        "word": "before",
        "form": "preposition",
        "definitions": [
            {
                "text": "At an earlier time; in front of.",
                "examples": [
                    "Wash your hands before dinner."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "emoji": "\u23ee\ufe0f",
        "transcription": "\u02ccbi\u02c8f\u0254r",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "after"
        ],
        "legacy_id": "A1-NUM-25",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-004",
        "word": "during",
        "form": "preposition",
        "definitions": [
            {
                "text": "From the beginning to the end of a particular period of time.",
                "examples": [
                    "I sleep during the night."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "emoji": "\u231b",
        "transcription": "\u02c8d\u028ar\u026a\u014b",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-29",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-005",
        "word": "for",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show purpose or destination.",
                "examples": [
                    "This gift is for you."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "emoji": "\ud83c\udf81",
        "transcription": "f\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-34",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-006",
        "word": "afterwards",
        "emoji": "\u23f3",
        "form": "adverb",
        "transcription": "\u02c8\u00e6ft\u0259rw\u0259rdz",
        "definitions": [
            {
                "text": "At a later or future time; subsequently.",
                "examples": [
                    "We ate dinner and went for a walk afterwards.",
                    "She rested afterwards."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-007",
        "word": "beforehand",
        "emoji": "\u231b",
        "form": "adverb",
        "transcription": "b\u026a\u02c8f\u0254\u02d0r\u02cch\u00e6nd",
        "definitions": [
            {
                "text": "Before an action or event takes place.",
                "examples": [
                    "Book your tickets beforehand.",
                    "Prepare notes beforehand."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-008",
        "word": "currently",
        "emoji": "\ud83d\udcc5",
        "form": "adverb",
        "transcription": "\u02c8k\u025c\u02d0r\u0259ntli",
        "definitions": [
            {
                "text": "At the present time.",
                "examples": [
                    "He is currently working in Madrid.",
                    "The system is currently unavailable."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-009",
        "word": "eventually",
        "emoji": "\ud83c\udfaf",
        "form": "adverb",
        "transcription": "\u026a\u02c8v\u025bn\u02a7u\u0259li",
        "definitions": [
            {
                "text": "In the end, especially after a long time.",
                "examples": [
                    "They eventually arrived home safe.",
                    "Hard work eventually pays off."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-010",
        "word": "finally",
        "emoji": "\ud83c\udfc1",
        "form": "adverb",
        "transcription": "\u02c8fa\u026an\u0259li",
        "definitions": [
            {
                "text": "After a long time; at last.",
                "examples": [
                    "The bus finally arrived.",
                    "She finally finished her final exam."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-011",
        "word": "immediately",
        "emoji": "\u26a1",
        "form": "adverb",
        "transcription": "\u026a\u02c8mi\u02d0di\u0259tli",
        "definitions": [
            {
                "text": "At once; instantly.",
                "examples": [
                    "Call an ambulance immediately.",
                    "She replied immediately to the email."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-012",
        "word": "initially",
        "emoji": "\ud83c\udfc1",
        "form": "adverb",
        "transcription": "\u026a\u02c8n\u026a\u0283\u0259li",
        "definitions": [
            {
                "text": "At first; at the beginning.",
                "examples": [
                    "Initially the task seemed difficult.",
                    "He was initially hesitant."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-013",
        "word": "meanwhile",
        "emoji": "\u23f1\ufe0f",
        "form": "adverb",
        "transcription": "\u02c8mi\u02d0n\u02ccwa\u026al",
        "definitions": [
            {
                "text": "In the intervening period of time.",
                "examples": [
                    "Cook the pasta; meanwhile chop vegetables.",
                    "He rested; meanwhile she worked."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-014",
        "word": "nowadays",
        "emoji": "\ud83d\udcc5",
        "form": "adverb",
        "transcription": "\u02c8na\u028a\u0259\u02ccde\u026az",
        "definitions": [
            {
                "text": "At the present time, in contrast to the past.",
                "examples": [
                    "Nowadays most people use smartphones.",
                    "Travel is faster nowadays."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-015",
        "word": "recently",
        "emoji": "\ud83d\udcc5",
        "form": "adverb",
        "transcription": "\u02c8ri\u02d0s\u0259ntli",
        "definitions": [
            {
                "text": "At a recent time; not long ago.",
                "examples": [
                    "I recently bought a new bicycle.",
                    "She moved to town recently."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-016",
        "word": "shortly",
        "emoji": "\u23f1\ufe0f",
        "form": "adverb",
        "transcription": "\u02c8\u0283\u0254\u02d0rtli",
        "definitions": [
            {
                "text": "In a short time; soon.",
                "examples": [
                    "The flight will land shortly.",
                    "She will join us shortly."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-017",
        "word": "afterward",
        "emoji": "\u23f3",
        "form": "adverb",
        "transcription": "\u02c8\u00e6ft\u0259rw\u0259rd",
        "definitions": [
            {
                "text": "At a later or future time.",
                "examples": [
                    "We ate lunch and walked afterward.",
                    "She rested afterward."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-018",
        "word": "constantly",
        "emoji": "\ud83d\udd04",
        "form": "adverb",
        "transcription": "\u02c8k\u0251\u02d0nst\u0259ntli",
        "definitions": [
            {
                "text": "Continuous or frequent occurrence.",
                "examples": [
                    "He constantly reads news.",
                    "She constantly strives to improve."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-019",
        "word": "daily",
        "emoji": "\ud83d\udcc5",
        "form": "adverb",
        "transcription": "\u02c8de\u026ali",
        "definitions": [
            {
                "text": "Every day or once a day.",
                "examples": [
                    "Exercise daily for good health.",
                    "The bus runs daily."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-020",
        "word": "frequently",
        "emoji": "\ud83d\udd01",
        "form": "adverb",
        "transcription": "\u02c8fri\u02d0kw\u0259ntli",
        "definitions": [
            {
                "text": "Regularly or on many occasions.",
                "examples": [
                    "Visit local library frequently.",
                    "He frequently travels for work."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-021",
        "word": "hourly",
        "emoji": "\u23f1\ufe0f",
        "form": "adverb",
        "transcription": "\u02c8ha\u028a\u0259rli",
        "definitions": [
            {
                "text": "Every hour or once an hour.",
                "examples": [
                    "Trains depart hourly.",
                    "Check updates hourly."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-022",
        "word": "monthly",
        "emoji": "\ud83d\uddd3\ufe0f",
        "form": "adverb",
        "transcription": "\u02c8m\u028cn\u03b8li",
        "definitions": [
            {
                "text": "Every month or once a month.",
                "examples": [
                    "Pay rent monthly.",
                    "A monthly magazine arrives."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-023",
        "word": "rarely",
        "emoji": "\ud83d\udd39",
        "form": "adverb",
        "transcription": "\u02c8r\u025brli",
        "definitions": [
            {
                "text": "Not often; seldom.",
                "examples": [
                    "He rarely eats fast food.",
                    "It rarely rains in summer."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-024",
        "word": "weekly",
        "emoji": "\ud83d\udcc5",
        "form": "adverb",
        "transcription": "\u02c8wi\u02d0kli",
        "definitions": [
            {
                "text": "Every week or once a week.",
                "examples": [
                    "We meet weekly on Monday.",
                    "The weekly market opens Saturday."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-025",
        "word": "annually",
        "emoji": "\ud83d\uddd3\ufe0f",
        "form": "adverb",
        "transcription": "\u02c8\u00e6nju\u0259li",
        "definitions": [
            {
                "text": "Once every year.",
                "examples": [
                    "The festival is celebrated annually.",
                    "Report financial earnings annually."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-026",
        "word": "occasionally",
        "emoji": "\ud83d\udd00",
        "form": "adverb",
        "transcription": "\u0259\u02c8ke\u026a\u0292\u0259n\u0259li",
        "definitions": [
            {
                "text": "At times; now and then.",
                "examples": [
                    "We occasionally eat out at restaurants.",
                    "Rain falls occasionally in spring."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-027",
        "word": "seldom",
        "emoji": "\ud83d\udd39",
        "form": "adverb",
        "transcription": "\u02c8s\u025bld\u0259m",
        "definitions": [
            {
                "text": "Not often; rarely.",
                "examples": [
                    "He seldom watches television.",
                    "She seldom arrives late."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-028",
        "word": "briefly",
        "emoji": "\u23f1\ufe0f",
        "form": "adverb",
        "transcription": "\u02c8bri\u02d0fli",
        "definitions": [
            {
                "text": "For a short time; fleetingly.",
                "examples": [
                    "He spoke briefly about his travel plans.",
                    "Pause briefly before answering."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-029",
        "word": "continuously",
        "emoji": "\ud83d\udd04",
        "form": "adverb",
        "transcription": "k\u0259n\u02c8t\u026anju\u0259sli",
        "definitions": [
            {
                "text": "Without interruption; constantly.",
                "examples": [
                    "Rain fell continuously through the night.",
                    "The motor operated continuously."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-030",
        "word": "gradually",
        "emoji": "\ud83d\udcc8",
        "form": "adverb",
        "transcription": "\u02c8\u0261r\u00e6\u02a4u\u0259li",
        "definitions": [
            {
                "text": "In a gradual way; slowly over time.",
                "examples": [
                    "Temperatures rose gradually in spring.",
                    "Her English improved gradually."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-031",
        "word": "instantly",
        "emoji": "\u26a1",
        "form": "adverb",
        "transcription": "\u02c8\u026anst\u0259ntli",
        "definitions": [
            {
                "text": "At once; immediately.",
                "examples": [
                    "The system responded instantly.",
                    "She recognized him instantly."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-OTH-TIM-032",
        "word": "permanently",
        "emoji": "\ud83d\udd12",
        "form": "adverb",
        "transcription": "\u02c8p\u025c\u02d0rm\u0259n\u0259ntli",
        "definitions": [
            {
                "text": "In a way that lasts indefinitely without change.",
                "examples": [
                    "They moved permanently to New Zealand.",
                    "The shop closed permanently."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Other_POS",
        "sub_subcategory": "Clocks_Periods"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
