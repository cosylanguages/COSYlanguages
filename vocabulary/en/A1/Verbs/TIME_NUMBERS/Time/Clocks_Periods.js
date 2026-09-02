(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-TIM-007",
        "word": "every day",
        "emoji": "\ud83d\udd01",
        "form": "adverb",
        "definitions": [
            {
                "text": "On each day without exception.",
                "examples": [
                    "I drink coffee every day."
                ]
            }
        ],
        "subtext": "related to times day",
        "transcription": "\u02c8\u025bv\u0259ri de\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-33",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-VERB-TIM-008",
        "word": "sleep",
        "emoji": "\ud83d\ude34",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest with your eyes closed in a natural state of unconsciousness.",
                "examples": [
                    "He sleeps seven hours a night.",
                    "I sleep badly."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "slept",
        "group": "irregular",
        "transcription": "slip",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sl\u0113pan",
            "origin_meaning": "to sleep"
        },
        "antonyms": [
            "wake up"
        ],
        "legacy_id": "A1-NUM-47",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-VERB-TIM-009",
        "word": "sleep",
        "emoji": "\ud83d\ude34",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest with your eyes closed in a natural state of unconsciousness.",
                "examples": [
                    "He sleeps seven hours a night.",
                    "I sleep badly."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "slept",
        "group": "regular",
        "transcription": "slip",
        "synonyms": [
            "rest"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sl\u0113pan",
            "origin_meaning": "to sleep"
        },
        "antonyms": [
            "wake up"
        ],
        "legacy_id": "A1-NUM-48",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-VERB-TIM-010",
        "word": "today",
        "emoji": "\ud83d\udcc5",
        "form": "adverb",
        "subtext": "today's meeting, start today",
        "definitions": [
            {
                "text": "On this day; the current day.",
                "examples": [
                    "I have a meeting today at ten."
                ]
            }
        ],
        "transcription": "t\u0259\u02c8de\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "tomorrow"
        ],
        "legacy_id": "A1-NUM-52",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-VERB-TIM-011",
        "word": "tomorrow",
        "emoji": "\u23ed\ufe0f",
        "form": "adverb",
        "subtext": "tomorrow morning, see you tomorrow",
        "definitions": [
            {
                "text": "On the day after today.",
                "examples": [
                    "She has a doctor's appointment tomorrow."
                ]
            }
        ],
        "transcription": "t\u0259\u02c8m\u0251\u02ccro\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "yesterday"
        ],
        "legacy_id": "A1-NUM-53",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-VERB-TIM-012",
        "word": "tonight",
        "emoji": "\ud83c\udf19",
        "form": "adverb",
        "definitions": [
            {
                "text": "On this night.",
                "examples": [
                    "What are you doing tonight?"
                ]
            }
        ],
        "subtext": "related to times day",
        "transcription": "t\u0259\u02c8na\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "legacy_id": "A1-NUM-54",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
    },
    {
        "id": "A1-VERB-TIM-013",
        "word": "yesterday",
        "emoji": "\ud83d\udcc5",
        "form": "adverb",
        "definitions": [
            {
                "text": "On the day before today.",
                "examples": [
                    "I was at home yesterday."
                ]
            }
        ],
        "subtext": "related to times day",
        "transcription": "\u02c8j\u025bst\u0259r\u02ccde\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "tomorrow"
        ],
        "legacy_id": "A1-NUM-58",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
