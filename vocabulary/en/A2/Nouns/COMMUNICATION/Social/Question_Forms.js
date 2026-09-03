(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-NOUN-COM-051",
            "word": "opinion",
            "emoji": "💭",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A view or judgment formed about something.",
                            "examples": [
                                    "What is your opinion on this new book?",
                                    "In my opinion, the test was fair."
                            ]
                    }
            ],
            "subtext": "view, belief",
            "synonyms": [
                    "view",
                    "belief"
            ],
            "transcription": "əˈpɪnjən",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "communication",
            "domain": "COMMUNICATION",
            "subcategory": "Social",
            "pos_section": "Nouns",
            "sub_subcategory": "Question_Forms"
    },
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

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
