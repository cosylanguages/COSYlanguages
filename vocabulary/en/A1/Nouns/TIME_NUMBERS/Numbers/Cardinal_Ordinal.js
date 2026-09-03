(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TIM-001",
        "word": "number",
        "emoji": "\ud83d\udd22",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "numbers",
        "definitions": [
            {
                "text": "A unit of a mathematical system used for counting.",
                "examples": [
                    "What is your phone number?"
                ]
            }
        ],
        "subtext": "related to numbers 0 9",
        "transcription": "\u02c8n\u0259mb\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "numbers",
        "sub_theme": null,
        "legacy_id": "A1-NUM-49",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-045",
        "word": "hundred",
        "emoji": "\ud83d\udcaf",
        "form": "noun",
        "transcription": "\u02c8h\u028cndr\u0259d",
        "definitions": [
            {
                "text": "The number equal to ten times ten; 100.",
                "examples": [
                    "One hundred cents equal one dollar.",
                    "More than a hundred people came."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-046",
        "word": "million",
        "emoji": "\ud83d\udd22",
        "form": "noun",
        "transcription": "\u02c8m\u026alj\u0259n",
        "definitions": [
            {
                "text": "The number equal to one thousand thousand; 1,000,000.",
                "examples": [
                    "Over a million people live in this city.",
                    "He won a million dollars."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-047",
        "word": "thousand",
        "emoji": "\ud83d\udd22",
        "form": "noun",
        "transcription": "\u02c8\u03b8a\u028az\u0259nd",
        "definitions": [
            {
                "text": "The number equal to ten hundred; 1,000.",
                "examples": [
                    "A thousand meters make one kilometer.",
                    "Five thousand fans cheered."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-048",
        "word": "zero",
        "emoji": "0\ufe0f\u20e3",
        "form": "noun",
        "transcription": "\u02c8z\u026aro\u028a",
        "definitions": [
            {
                "text": "The numerical digit 0.",
                "examples": [
                    "The score was zero to zero.",
                    "Water freezes at zero degrees Celsius."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
