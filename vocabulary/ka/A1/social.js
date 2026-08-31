// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "მეგობარი",
        "level": "starter",
        "theme": "social",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "ახლობელი ადამიანი.",
                "examples": [
                    "ჩემი საუკეთესო მეგობარი."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_social_001"
    },
    {
        "word": "დღესასწაული",
        "level": "starter",
        "theme": "social",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "სიხარულის საზოგადოებრივი დღე.",
                "examples": [
                    "ახალი წელი დიდი დღესასწაულია."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_social_002"
    },
    {
        "word": "საუბარი",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "ადამიანებს შორის ლაპარაკი.",
                "examples": [
                    "მეგობართან საუბარი."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_social_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
