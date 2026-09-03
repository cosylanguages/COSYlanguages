(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-NOUN-SEL-101",
            "word": "generation",
            "emoji": "👨‍👩‍👧‍👦",
            "form": "noun",
            "definitions": [
                    {
                            "text": "All of the people born and living at about the same time.",
                            "examples": [
                                    "Younger generations use digital devices naturally.",
                                    "The family business passed through three generations."
                            ]
                    }
            ],
            "subtext": "age group",
            "synonyms": [
                    "age group"
            ],
            "transcription": "ˌdʒenəˈreɪʃn",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "family",
            "domain": "SELF",
            "subcategory": "Family",
            "pos_section": "Nouns",
            "sub_subcategory": "Extended_Family"
    },
    {
            "id": "A2-NOUN-SEL-131",
            "word": "heir",
            "emoji": "👑",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A person legally entitled to the property or rank of another.",
                            "examples": [
                                    "Prince William is heir to the throne.",
                                    "She inherited the estate as sole heir."
                            ]
                    }
            ],
            "subtext": "successor, inheritor",
            "synonyms": [
                    "successor",
                    "inheritor"
            ],
            "transcription": "eə",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "family",
            "domain": "SELF",
            "subcategory": "Family",
            "pos_section": "Nouns",
            "sub_subcategory": "Extended_Family"
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
