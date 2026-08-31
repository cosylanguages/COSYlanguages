// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "კომპიუტერი",
        "level": "starter",
        "theme": "technology",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "ელექტრონული მანქანა მუშაობისთვის.",
                "examples": [
                    "კომპიუტერთან მუშაობა."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_technology_001"
    },
    {
        "word": "ტელეფონი",
        "level": "starter",
        "theme": "technology",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "კომუნიკაციის მოწყობილობა.",
                "examples": [
                    "ტელეფონით დარეკვა."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_technology_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
