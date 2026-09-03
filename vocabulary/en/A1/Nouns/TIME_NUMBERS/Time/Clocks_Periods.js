(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TIM-004",
        "word": "afternoon",
        "emoji": "\u2600\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "this afternoon, good afternoon",
        "definitions": [
            {
                "text": "The part of the day from noon until the evening.",
                "examples": [
                    "I finish work at five in the afternoon."
                ]
            }
        ],
        "transcription": "\u02cc\u00e6ft\u0259r\u02c8nun",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "evening"
        ],
        "legacy_id": "A1-NUM-22",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-005",
        "word": "day",
        "emoji": "\u2600\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "days",
        "definitions": [
            {
                "text": "A period of 24 hours.",
                "examples": [
                    "I work five days a week."
                ]
            }
        ],
        "subtext": "related to times day",
        "transcription": "de\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "dagaz"
        },
        "antonyms": [
            "night"
        ],
        "legacy_id": "A1-NUM-28",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-006",
        "word": "evening",
        "emoji": "\ud83c\udf06",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "this evening, good evening",
        "definitions": [
            {
                "text": "The part of the day after afternoon and before night.",
                "examples": [
                    "We eat dinner in the evening."
                ]
            }
        ],
        "transcription": "\u02c8ivn\u026a\u014b",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "morning"
        ],
        "legacy_id": "A1-NUM-32",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-007",
        "word": "hour",
        "emoji": "\u23f0",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hours",
        "definitions": [
            {
                "text": "A period of sixty minutes.",
                "examples": [
                    "I work eight hours a day."
                ]
            }
        ],
        "subtext": "related to telling time",
        "transcription": "a\u028a\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-35",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-008",
        "word": "minute",
        "emoji": "\u23f2\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "minutes",
        "definitions": [
            {
                "text": "A period of sixty seconds.",
                "examples": [
                    "Wait a minute, please."
                ]
            }
        ],
        "subtext": "related to telling time",
        "transcription": "\u02c8m\u026an\u0259t",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-40",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-009",
        "word": "morning",
        "emoji": "\ud83c\udf05",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "early morning, good morning",
        "definitions": [
            {
                "text": "The part of the day before 12 o'clock.",
                "examples": [
                    "I start work in the morning."
                ]
            }
        ],
        "transcription": "\u02c8m\u0254rn\u026a\u014b",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "evening"
        ],
        "legacy_id": "A1-NUM-42",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-010",
        "word": "night",
        "emoji": "\ud83c\udf19",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nights",
        "subtext": "good night, at night",
        "definitions": [
            {
                "text": "The period of darkness between evening and morning.",
                "examples": [
                    "I sleep eight hours every night."
                ]
            }
        ],
        "transcription": "na\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "nahts"
        },
        "antonyms": [
            "day"
        ],
        "legacy_id": "A1-NUM-44",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-011",
        "word": "second",
        "emoji": "\u23f1\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "seconds",
        "definitions": [
            {
                "text": "One of the sixty parts that a minute is divided into.",
                "examples": [
                    "The light changes every thirty seconds."
                ]
            }
        ],
        "subtext": "related to telling time",
        "transcription": "\u02c8s\u025bk\u0259nd",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-46",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-012",
        "word": "time",
        "emoji": "\u231a",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "what time is it?, spend time",
        "definitions": [
            {
                "text": "What is measured in minutes, hours, days, etc.",
                "examples": [
                    "What time is it?",
                    "I don't have much time."
                ]
            }
        ],
        "transcription": "ta\u026am",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "t\u012bm\u00f4"
        },
        "legacy_id": "A1-NUM-51",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-013",
        "word": "week",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "weeks",
        "subtext": "next week, last week",
        "definitions": [
            {
                "text": "A period of seven days.",
                "examples": [
                    "I work five days a week."
                ]
            }
        ],
        "transcription": "wik",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-55",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-014",
        "word": "weekend",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "weekends",
        "subtext": "at the weekend, on weekends",
        "definitions": [
            {
                "text": "Saturday and Sunday.",
                "examples": [
                    "I relax at the weekend."
                ]
            }
        ],
        "transcription": "\u02c8wi\u02cck\u026and",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-56",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-038",
        "word": "century",
        "emoji": "\ud83c\udfdb\ufe0f",
        "form": "noun",
        "transcription": "\u02c8s\u025bn\u02a7\u0259ri",
        "definitions": [
            {
                "text": "A period of one hundred years.",
                "examples": [
                    "The castle was built in the sixteenth century.",
                    "Technology advanced rapidly last century."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-039",
        "word": "moment",
        "emoji": "\u23f1\ufe0f",
        "form": "noun",
        "transcription": "\u02c8mo\u028am\u0259nt",
        "definitions": [
            {
                "text": "A very brief period of time.",
                "examples": [
                    "Just a moment, I will check.",
                    "She paused for a moment."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-040",
        "word": "noon",
        "emoji": "\u2600\ufe0f",
        "form": "noun",
        "transcription": "nu\u02d0n",
        "definitions": [
            {
                "text": "Twelve o'clock in the middle of the day.",
                "examples": [
                    "Let us meet for lunch at noon.",
                    "The sun is highest at noon."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-041",
        "word": "today",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "transcription": "t\u0259\u02c8de\u026a",
        "definitions": [
            {
                "text": "On or during the present day.",
                "examples": [
                    "What are your plans for today?",
                    "Today is sunny and warm."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-042",
        "word": "tomorrow",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "transcription": "t\u0259\u02c8m\u0251\u02d0ro\u028a",
        "definitions": [
            {
                "text": "On the day after today.",
                "examples": [
                    "See you tomorrow morning.",
                    "Tomorrow is a public holiday."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-043",
        "word": "tonight",
        "emoji": "\ud83c\udf03",
        "form": "noun",
        "transcription": "t\u0259\u02c8na\u026at",
        "definitions": [
            {
                "text": "On or during the present evening or night.",
                "examples": [
                    "Are you going out tonight?",
                    "Let us watch a movie tonight."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-NOUN-TIM-044",
        "word": "yesterday",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "transcription": "\u02c8j\u025bst\u0259r\u02ccde\u026a",
        "definitions": [
            {
                "text": "On the day before today.",
                "examples": [
                    "I saw him yesterday afternoon.",
                    "Yesterday was rainy and cold."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Clocks_Periods"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
