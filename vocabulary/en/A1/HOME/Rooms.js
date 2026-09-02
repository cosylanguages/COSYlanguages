(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-HOME-01",
        "word": "balcony",
        "form": "noun",
        "transcription": "ˈbælkəni",
        "definitions": [
            {
                "text": "A platform outside an upper window of a building.",
                "examples": [
                    "We sat on the balcony in the morning."
                ]
            }
        ],
        "emoji": "🏙️",
        "lang": "en",
        "level": "a1",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Rooms"
    },
    {
        "id": "A1-HOME-02",
        "word": "office",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "offices",
        "subtext": "workplace, big office, work in an office",
        "definitions": [
            {
                "text": "A room or building where people work.",
                "examples": [
                    "He is in the office."
                ]
            }
        ],
        "transcription": "ˈɔfəs",
        "lang": "en",
        "level": "starter",
        "theme": "rooms_indoor_spaces",
        "sub_theme": null,
        "legacy_id": "en_starter_rooms_indoor_spaces_001",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Rooms"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
