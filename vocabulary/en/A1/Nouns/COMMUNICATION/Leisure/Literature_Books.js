(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-COM-023",
        "word": "story",
        "emoji": "📖",
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
        "transcription": "ˈstɔri",
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
        "id": "A1-NOUN-COM-086",
        "word": "article",
        "form": "noun",
        "transcription": "ˈɑːtɪkl",
        "emoji": "📰",
        "definitions": [
            {
                "text": "A piece of writing included in a newspaper or magazine.",
                "examples": [
                    "Read a news article.",
                    "An interesting article."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Literature_Books"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
