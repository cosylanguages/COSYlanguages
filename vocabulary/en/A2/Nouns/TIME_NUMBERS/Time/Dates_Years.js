(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-TIM-037",
        "word": "decade",
        "emoji": "🗓️",
        "form": "noun",
        "definitions": [
            {
                "text": "A period of ten years.",
                "examples": [
                    "Technology changed rapidly over the last decade.",
                    "She lived abroad for over a decade."
                ]
            }
        ],
        "subtext": "ten years",
        "synonyms": [
            "ten years"
        ],
        "transcription": "ˈdekeɪd",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Nouns",
        "sub_subcategory": "Dates_Years"
    },
    {
        "id": "A2-NOUN-TIM-039",
        "word": "millennium",
        "emoji": "⌛",
        "form": "noun",
        "definitions": [
            {
                "text": "A period of one thousand years.",
                "examples": [
                    "The city celebrated the new millennium.",
                    "Ancient ruins stood for a millennium."
                ]
            }
        ],
        "subtext": "thousand years",
        "synonyms": [
            "thousand years"
        ],
        "transcription": "mɪˈleniəm",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
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
