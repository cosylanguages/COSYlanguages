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
        "emoji": "📖",
        "transcription": "əˈbaʊt",
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
        "emoji": "⏭️",
        "transcription": "ˈæftər",
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
        "emoji": "⏮️",
        "transcription": "ˌbiˈfɔr",
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
        "emoji": "⌛",
        "transcription": "ˈdʊrɪŋ",
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
        "emoji": "🎁",
        "transcription": "fər",
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
        "id": "A1-OTH-TIM-007",
        "word": "beforehand",
        "emoji": "⌛",
        "form": "adverb",
        "transcription": "bɪˈfɔːrˌhænd",
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
        "emoji": "📅",
        "form": "adverb",
        "transcription": "ˈkɜːrəntli",
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
        "emoji": "🎯",
        "form": "adverb",
        "transcription": "ɪˈvɛnʧuəli",
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
        "emoji": "🏁",
        "form": "adverb",
        "transcription": "ˈfaɪnəli",
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
        "emoji": "⚡",
        "form": "adverb",
        "transcription": "ɪˈmiːdiətli",
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
        "emoji": "🏁",
        "form": "adverb",
        "transcription": "ɪˈnɪʃəli",
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
        "emoji": "⏱️",
        "form": "adverb",
        "transcription": "ˈmiːnˌwaɪl",
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
        "emoji": "📅",
        "form": "adverb",
        "transcription": "ˈnaʊəˌdeɪz",
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
        "emoji": "📅",
        "form": "adverb",
        "transcription": "ˈriːsəntli",
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
        "emoji": "⏱️",
        "form": "adverb",
        "transcription": "ˈʃɔːrtli",
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
        "emoji": "⏳",
        "form": "adverb",
        "transcription": "ˈæftərwərd",
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
        "emoji": "🔄",
        "form": "adverb",
        "transcription": "ˈkɑːnstəntli",
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
        "emoji": "📅",
        "form": "adverb",
        "transcription": "ˈdeɪli",
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
        "emoji": "🔁",
        "form": "adverb",
        "transcription": "ˈfriːkwəntli",
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
        "emoji": "⏱️",
        "form": "adverb",
        "transcription": "ˈhaʊərli",
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
        "emoji": "🗓️",
        "form": "adverb",
        "transcription": "ˈmʌnθli",
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
        "emoji": "🔹",
        "form": "adverb",
        "transcription": "ˈrɛrli",
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
        "emoji": "📅",
        "form": "adverb",
        "transcription": "ˈwiːkli",
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
        "emoji": "🗓️",
        "form": "adverb",
        "transcription": "ˈænjuəli",
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
        "emoji": "🔀",
        "form": "adverb",
        "transcription": "əˈkeɪʒənəli",
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
        "emoji": "🔹",
        "form": "adverb",
        "transcription": "ˈsɛldəm",
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
        "emoji": "⏱️",
        "form": "adverb",
        "transcription": "ˈbriːfli",
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
        "emoji": "🔄",
        "form": "adverb",
        "transcription": "kənˈtɪnjuəsli",
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
        "emoji": "📈",
        "form": "adverb",
        "transcription": "ˈɡræʤuəli",
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
        "emoji": "⚡",
        "form": "adverb",
        "transcription": "ˈɪnstəntli",
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
        "emoji": "🔒",
        "form": "adverb",
        "transcription": "ˈpɜːrmənəntli",
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
