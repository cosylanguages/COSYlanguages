(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-FOO-016",
        "word": "cuisine",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "A style or method of cooking characteristic of a country.",
                "examples": [
                    "Italian cuisine is famous for pasta and pizza.",
                    "The restaurant serves spicy Asian cuisine."
                ]
            }
        ],
        "subtext": "cooking style",
        "synonyms": [
            "cooking style"
        ],
        "transcription": "kwɪˈziːn",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "food",
        "domain": "FOOD",
        "subcategory": "Meals",
        "pos_section": "Nouns",
        "sub_subcategory": "Prepared_Dishes"
    },
    {
        "id": "A2-NOUN-FOO-020",
        "word": "portion",
        "emoji": "🍽️",
        "form": "noun",
        "definitions": [
            {
                "text": "An amount of food served for one person.",
                "examples": [
                    "The restaurant serves generous portions.",
                    "Eat a small portion of cake."
                ]
            }
        ],
        "subtext": "serving, helping",
        "synonyms": [
            "serving",
            "helping"
        ],
        "transcription": "ˈpɔːʃn",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "food",
        "domain": "FOOD",
        "subcategory": "Meals",
        "pos_section": "Nouns",
        "sub_subcategory": "Prepared_Dishes"
    },
    {
        "id": "A2-NOUN-FOO-021",
        "word": "delicacy",
        "emoji": "🦪",
        "form": "noun",
        "definitions": [
            {
                "text": "A rare or expensive food that is considered desirable.",
                "examples": [
                    "Truffles are a famous local delicacy.",
                    "They offered us seafood delicacies."
                ]
            }
        ],
        "subtext": "specialty",
        "synonyms": [
            "specialty"
        ],
        "transcription": "ˈdelɪkəsi",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "food",
        "domain": "FOOD",
        "subcategory": "Meals",
        "pos_section": "Nouns",
        "sub_subcategory": "Prepared_Dishes"
    },
    {
        "id": "A2-NOUN-FOO-025",
        "word": "banquet",
        "emoji": "🕯️",
        "form": "noun",
        "definitions": [
            {
                "text": "A formal elaborate meal for many people.",
                "examples": [
                    "The company held an annual awards banquet.",
                    "Guests gathered for a grand banquet."
                ]
            }
        ],
        "subtext": "feast, formal dinner",
        "synonyms": [
            "feast",
            "formal dinner"
        ],
        "transcription": "ˈbæŋkwɪt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "food",
        "domain": "FOOD",
        "subcategory": "Meals",
        "pos_section": "Nouns",
        "sub_subcategory": "Prepared_Dishes"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
