(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-COM-056",
        "word": "answer",
        "emoji": "💬",
        "form": "noun",
        "definitions": [
            {
                "text": "A spoken or written reply to a question.",
                "examples": [
                    "She gave a quick answer to my question.",
                    "Check your answers at the back of the book."
                ]
            }
        ],
        "subtext": "reply, response",
        "synonyms": [
            "reply",
            "response"
        ],
        "transcription": "ˈɑːnsə",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Nouns",
        "sub_subcategory": "Question_Forms"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
