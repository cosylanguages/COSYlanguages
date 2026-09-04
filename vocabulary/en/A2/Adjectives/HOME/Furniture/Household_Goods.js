(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-HOM-002",
        "word": "broken",
        "emoji": "💔",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having been fractured or damaged.",
                "examples": [
                    "Replace the broken window glass.",
                    "He repaired the broken chair leg."
                ]
            }
        ],
        "subtext": "damaged, cracked",
        "synonyms": [
            "damaged",
            "cracked"
        ],
        "transcription": "ˈbrəʊkən",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "home",
        "domain": "HOME",
        "subcategory": "Furniture",
        "pos_section": "Adjectives",
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
