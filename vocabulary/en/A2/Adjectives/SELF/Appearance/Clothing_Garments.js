(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-ADJ-SEL-001",
            "word": "loose",
            "emoji": "👕",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Not fitting closely; large.",
                            "examples": [
                                    "I prefer loose clothes in summer.",
                                    "The handle is loose."
                            ]
                    }
            ],
            "subtext": "baggy, not tight",
            "synonyms": [
                    "baggy",
                    "not tight"
            ],
            "comparative": "looser",
            "superlative": "the loosest",
            "transcription": "luːs",
            "lang": "en",
            "level": "elementary",
            "theme": "clothes",
            "sub_theme": null,
            "legacy_id": "A2-SELF-105",
            "level_code": "A2",
            "domain": "SELF",
            "subcategory": "Appearance",
            "pos_section": "Adjectives",
            "sub_subcategory": "Clothing_Garments"
    },
    {
            "id": "A2-ADJ-SEL-002",
            "word": "tight",
            "emoji": "👚",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Fitting very closely or too closely.",
                            "examples": [
                                    "These shoes are too tight.",
                                    "The dress is a bit tight around the waist."
                            ]
                    }
            ],
            "subtext": "close-fitting, small",
            "synonyms": [
                    "close-fitting",
                    "small"
            ],
            "comparative": "tighter",
            "superlative": "the tightest",
            "transcription": "taɪt",
            "lang": "en",
            "level": "elementary",
            "theme": "clothes",
            "sub_theme": null,
            "legacy_id": "A2-SELF-171",
            "level_code": "A2",
            "domain": "SELF",
            "subcategory": "Appearance",
            "pos_section": "Adjectives",
            "sub_subcategory": "Clothing_Garments"
    },
    {
            "id": "A2-ADJ-SEL-171",
            "word": "casual",
            "emoji": "👕",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Relaxed and unconcerned; informal.",
                            "examples": [
                                    "Wear casual clothes to the barbecue.",
                                    "They had a casual chat over coffee."
                            ]
                    }
            ],
            "subtext": "informal, relaxed",
            "synonyms": [
                    "informal",
                    "relaxed"
            ],
            "transcription": "ˈkæʒuəl",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "identity",
            "domain": "SELF",
            "subcategory": "Appearance",
            "pos_section": "Adjectives",
            "sub_subcategory": "Clothing_Garments"
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
