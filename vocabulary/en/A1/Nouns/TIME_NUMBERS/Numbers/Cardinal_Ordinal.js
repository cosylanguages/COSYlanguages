(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TIM-001",
        "word": "number",
        "emoji": "🔢",
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
        "transcription": "ˈnəmbər",
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
        "id": "A1-NOUN-TIM-038",
        "word": "one",
        "form": "noun",
        "transcription": "wʌn",
        "emoji": "1️⃣",
        "definitions": [
            {
                "text": "The number 1.",
                "examples": [
                    "One step at a time.",
                    "Give me one book."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-039",
        "word": "two",
        "form": "noun",
        "transcription": "tuː",
        "emoji": "2️⃣",
        "definitions": [
            {
                "text": "The number 2.",
                "examples": [
                    "Two cups of tea.",
                    "I have two sisters."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-040",
        "word": "three",
        "form": "noun",
        "transcription": "θriː",
        "emoji": "3️⃣",
        "definitions": [
            {
                "text": "The number 3.",
                "examples": [
                    "Three meals a day.",
                    "Three boys played."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-041",
        "word": "four",
        "form": "noun",
        "transcription": "fɔː",
        "emoji": "4️⃣",
        "definitions": [
            {
                "text": "The number 4.",
                "examples": [
                    "Four seasons in a year.",
                    "A square has four sides."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-042",
        "word": "five",
        "form": "noun",
        "transcription": "faɪv",
        "emoji": "5️⃣",
        "definitions": [
            {
                "text": "The number 5.",
                "examples": [
                    "High five!",
                    "Five fingers on a hand."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-043",
        "word": "six",
        "form": "noun",
        "transcription": "sɪks",
        "emoji": "6️⃣",
        "definitions": [
            {
                "text": "The number 6.",
                "examples": [
                    "Six eggs in a box.",
                    "Wake up at six."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-044",
        "word": "seven",
        "form": "noun",
        "transcription": "ˈsevn",
        "emoji": "7️⃣",
        "definitions": [
            {
                "text": "The number 7.",
                "examples": [
                    "Seven days a week.",
                    "Lucky number seven."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-045",
        "word": "eight",
        "form": "noun",
        "transcription": "eɪt",
        "emoji": "8️⃣",
        "definitions": [
            {
                "text": "The number 8.",
                "examples": [
                    "Eight hours of sleep.",
                    "Eight legs on a spider."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-046",
        "word": "nine",
        "form": "noun",
        "transcription": "naɪn",
        "emoji": "9️⃣",
        "definitions": [
            {
                "text": "The number 9.",
                "examples": [
                    "Nine o'clock sharp.",
                    "Number nine bus."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    },
    {
        "id": "A1-NOUN-TIM-047",
        "word": "ten",
        "form": "noun",
        "transcription": "ten",
        "emoji": "🔟",
        "definitions": [
            {
                "text": "The number 10.",
                "examples": [
                    "Ten out of ten.",
                    "Ten toes."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Cardinal_Ordinal"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
