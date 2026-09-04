(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-HOM-002",
        "word": "bind",
        "emoji": "🪢",
        "form": "verb",
        "definitions": [
            {
                "text": "To tie or fasten tightly with a string, rope, or band.",
                "examples": [
                    "Bind the old newspapers together with twine.",
                    "A shared goal binds the team together."
                ]
            }
        ],
        "subtext": "tie, fasten",
        "synonyms": [
            "tie",
            "fasten"
        ],
        "transcription": "baɪnd",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "home",
        "domain": "HOME",
        "subcategory": "Furniture",
        "pos_section": "Verbs",
        "sub_subcategory": "Household_Goods"
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
