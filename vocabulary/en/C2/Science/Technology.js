(function() {
    const lang = "en";
    const data = [
    {
        "id": "C2-SCI-01",
        "word": "blockchain",
        "lang": "en",
        "level": "proficiency",
        "theme": "technology",
        "emoji": "⛓️",
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
        "legacy_id": "en_proficiency_technology_001",
        "level_code": "C2",
        "domain": "Science",
        "subcategory": "Technology"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
