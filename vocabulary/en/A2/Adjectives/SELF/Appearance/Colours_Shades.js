(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-ADJ-SEL-159",
            "word": "black",
            "emoji": "🖤",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Of the darkest color, owing to the absence or complete absorption of light.",
                            "examples": [
                                    "He wore a black leather jacket.",
                                    "Coffee without milk is served black."
                            ]
                    }
            ],
            "subtext": "dark",
            "synonyms": [
                    "dark"
            ],
            "transcription": "blæk",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "identity",
            "domain": "SELF",
            "subcategory": "Appearance",
            "pos_section": "Adjectives",
            "sub_subcategory": "Colours_Shades"
    },
    {
            "id": "A2-ADJ-SEL-163",
            "word": "blue",
            "emoji": "💙",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Of a color intermediate between green and violet, as of the sky.",
                            "examples": [
                                    "The summer sky was clear blue.",
                                    "She wore a bright blue sweater."
                            ]
                    }
            ],
            "subtext": "azure, cobalt",
            "synonyms": [
                    "azure",
                    "cobalt"
            ],
            "transcription": "bluː",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "identity",
            "domain": "SELF",
            "subcategory": "Appearance",
            "pos_section": "Adjectives",
            "sub_subcategory": "Colours_Shades"
    },
    {
            "id": "A2-ADJ-SEL-168",
            "word": "brown",
            "emoji": "🤎",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Of a color produced by mixing red, yellow, and black.",
                            "examples": [
                                    "She bought a dark brown leather purse.",
                                    "The autumn leaves turned brown."
                            ]
                    }
            ],
            "subtext": "chestnut, hazel",
            "synonyms": [
                    "chestnut",
                    "hazel"
            ],
            "transcription": "braʊn",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "identity",
            "domain": "SELF",
            "subcategory": "Appearance",
            "pos_section": "Adjectives",
            "sub_subcategory": "Colours_Shades"
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
