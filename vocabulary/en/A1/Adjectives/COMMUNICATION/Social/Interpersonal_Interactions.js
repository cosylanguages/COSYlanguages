(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-COM-01",
        "word": "sorry",
        "translation": "sorry",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "🙇",
        "form": "adjective",
        "definitions": [
            {
                "text": "Used to apologize for something.",
                "examples": [
                    "I am sorry I am late."
                ]
            }
        ],
        "transcription": "ˈsɑri",
        "lang": "en",
        "legacy_id": "A1-COMM-85",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social",
        "pos_section": "Adjectives",
        "sub_subcategory": "Interpersonal_Interactions"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
