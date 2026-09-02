(function() {
    const lang = "en";
    const data = [
    {
        "id": "C2-NOUN-SCI-001",
        "word": "blockchain",
        "lang": "en",
        "level": "proficiency",
        "theme": "technology",
        "emoji": "\u26d3\ufe0f",
        "form": "noun",
        "classification": "regular",
        "plural": "blockchains",
        "definitions": [
            {
                "text": "A distributed, decentralized, public ledger that records transactions across many computers.",
                "examples": [
                    "The blockchain ensures that the record cannot be altered retroactively."
                ]
            }
        ],
        "transcription": "",
        "legacy_id": "C2-SCI-01",
        "level_code": "C2",
        "domain": "Science",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Computers_Engineering"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
