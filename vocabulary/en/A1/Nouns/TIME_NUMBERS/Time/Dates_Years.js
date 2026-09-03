(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TIM-015",
        "word": "calendar",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "calendars",
        "definitions": [
            {
                "text": "A table that shows the days, weeks, and months of a year.",
                "examples": [
                    "Check the calendar for the meeting date."
                ]
            }
        ],
        "subtext": "related to dates years",
        "synonyms": [
            "date planner"
        ],
        "transcription": "\u02c8k\u00e6l\u0259nd\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "dates_years",
        "sub_theme": null,
        "legacy_id": "A1-NUM-26",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Dates_Years"
    },
    {
        "id": "A1-NOUN-TIM-016",
        "word": "date",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dates",
        "subtext": "today's date, save the date",
        "definitions": [
            {
                "text": "A particular day of the month or year.",
                "examples": [
                    "What is the date today?"
                ]
            }
        ],
        "transcription": "de\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "dates_years",
        "sub_theme": null,
        "legacy_id": "A1-NUM-27",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Dates_Years"
    },
    {
        "id": "A1-NOUN-TIM-017",
        "word": "month",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "months",
        "definitions": [
            {
                "text": "One of the twelve periods that a year is divided into.",
                "examples": [
                    "January is the first month of the year."
                ]
            }
        ],
        "subtext": "related to dates years",
        "transcription": "m\u0259n\u03b8",
        "lang": "en",
        "level": "starter",
        "theme": "dates_years",
        "sub_theme": null,
        "legacy_id": "A1-NUM-41",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Dates_Years"
    },
    {
        "id": "A1-NOUN-TIM-018",
        "word": "year",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "years",
        "definitions": [
            {
                "text": "A period of twelve months.",
                "examples": [
                    "Happy New Year!"
                ]
            }
        ],
        "subtext": "related to dates years",
        "transcription": "j\u026ar",
        "lang": "en",
        "level": "starter",
        "theme": "dates_years",
        "sub_theme": null,
        "legacy_id": "A1-NUM-57",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Dates_Years"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
