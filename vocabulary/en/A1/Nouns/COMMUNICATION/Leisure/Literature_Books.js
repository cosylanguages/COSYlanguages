(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-COM-023",
        "word": "story",
        "emoji": "\ud83d\udcd6",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stories",
        "definitions": [
            {
                "text": "A description of events that can be true or imaginary.",
                "examples": [
                    "Tell me a story.",
                    "I like stories about animals."
                ]
            }
        ],
        "subtext": "related to books reading",
        "transcription": "\u02c8st\u0254ri",
        "lang": "en",
        "level": "starter",
        "theme": "books_reading",
        "sub_theme": null,
        "legacy_id": "A1-COMM-59",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Literature_Books"
    },
    {
        "id": "A1-NOUN-COM-096",
        "word": "author",
        "emoji": "\u270d\ufe0f",
        "form": "noun",
        "transcription": "\u02c8\u0254\u02d0\u03b8\u0259r",
        "definitions": [
            {
                "text": "A writer of a book, article, or report.",
                "examples": [
                    "The author signed copies of her new book.",
                    "Who is your favorite author?"
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Literature_Books"
    },
    {
        "id": "A1-NOUN-COM-097",
        "word": "comic",
        "emoji": "\ud83d\uddde\ufe0f",
        "form": "noun",
        "transcription": "\u02c8k\u0251\u02d0m\u026ak",
        "definitions": [
            {
                "text": "A magazine containing story panels with illustrations.",
                "examples": [
                    "Children love reading superhero comics.",
                    "He bought a weekly comic book."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Literature_Books"
    },
    {
        "id": "A1-NOUN-COM-098",
        "word": "novel",
        "emoji": "\ud83d\udcda",
        "form": "noun",
        "transcription": "\u02c8n\u0251\u02d0v\u0259l",
        "definitions": [
            {
                "text": "A fictitious prose narrative of book length.",
                "examples": [
                    "She wrote a historic novel.",
                    "Read a mystery novel on the train."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Literature_Books"
    },
    {
        "id": "A1-NOUN-COM-099",
        "word": "poem",
        "emoji": "\ud83d\udcdc",
        "form": "noun",
        "transcription": "\u02c8po\u028a\u0259m",
        "definitions": [
            {
                "text": "A piece of writing expressing feelings in rhythmic lines.",
                "examples": [
                    "The pupil recited a short poem.",
                    "She wrote a poem about spring."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Literature_Books"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
