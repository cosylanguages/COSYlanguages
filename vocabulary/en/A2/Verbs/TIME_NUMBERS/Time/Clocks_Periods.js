(function() {
    const lang = "en";
    const data = [
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
        "id": "A2-VERB-TIM-018",
        "legacy_id": "A2-NUM-05",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
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
        "id": "A2-VERB-TIM-019",
        "legacy_id": "A2-NUM-07",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
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
        "id": "A2-VERB-TIM-020",
        "legacy_id": "A2-NUM-10",
        "level_code": "A2",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Verbs",
        "sub_subcategory": "Clocks_Periods"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
