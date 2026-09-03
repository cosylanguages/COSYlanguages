(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-TIM-002",
        "word": "bottom",
        "emoji": "\u2b07\ufe0f",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The lowest part of something.",
                "examples": [
                    "Write your name at the bottom of the page."
                ]
            }
        ],
        "subtext": "related to size shape",
        "transcription": "\u02c8b\u0251t\u0259m",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "top"
        ],
        "legacy_id": "A1-NUM-07",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-NOUN-TIM-003",
        "word": "top",
        "emoji": "\ud83d\udd1d",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The highest part of something.",
                "examples": [
                    "The book is on the top shelf."
                ]
            }
        ],
        "subtext": "related to size shape",
        "transcription": "t\u0254p",
        "lang": "en",
        "level": "starter",
        "theme": "size_shape",
        "sub_theme": null,
        "antonyms": [
            "bottom"
        ],
        "legacy_id": "A1-NUM-74",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-NOUN-TIM-049",
        "word": "circle",
        "emoji": "\u26aa",
        "form": "noun",
        "transcription": "\u02c8s\u025c\u02d0rk\u0259l",
        "definitions": [
            {
                "text": "A round plane figure whose boundary consists of points equidistant from the center.",
                "examples": [
                    "Draw a small circle on the paper.",
                    "Children sat in a circle."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-NOUN-TIM-050",
        "word": "line",
        "emoji": "\ud83d\udccf",
        "form": "noun",
        "transcription": "la\u026an",
        "definitions": [
            {
                "text": "A long thin mark or band.",
                "examples": [
                    "Draw a straight line across the page.",
                    "Stand in line for tickets."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-NOUN-TIM-051",
        "word": "point",
        "emoji": "\ud83d\udccd",
        "form": "noun",
        "transcription": "p\u0254\u026ant",
        "definitions": [
            {
                "text": "A small dot or particular spot.",
                "examples": [
                    "He marked a point on the map.",
                    "What is the main point of this lesson?"
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-NOUN-TIM-052",
        "word": "shape",
        "emoji": "\ud83d\udd37",
        "form": "noun",
        "transcription": "\u0283e\u026ap",
        "definitions": [
            {
                "text": "The external form or outline of something.",
                "examples": [
                    "What shape is the mirror?",
                    "Cut the paper into circle shapes."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Shapes_Dimensions"
    },
    {
        "id": "A1-NOUN-TIM-053",
        "word": "triangle",
        "emoji": "\ud83d\udd3a",
        "form": "noun",
        "transcription": "\u02c8tra\u026a\u02cc\u00e6\u014b\u0261\u0259l",
        "definitions": [
            {
                "text": "A plane figure with three straight sides and three angles.",
                "examples": [
                    "Draw a triangle on the board.",
                    "A slice of pizza looks like a triangle."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "TIME_NUMBERS",
        "subcategory": "Numbers",
        "pos_section": "Nouns",
        "sub_subcategory": "Shapes_Dimensions"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
