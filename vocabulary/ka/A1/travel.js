// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "მანქანა",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "ტრანსპორტი გადასაადგილებლად.",
                "examples": [
                    "მანქანით მგზავრობა."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_travel_001"
    },
    {
        "word": "მატარებელი",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "რკინიგზის ტრანსპორტი.",
                "examples": [
                    "მატარებლით გამგზავრება."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_travel_002"
    },
    {
        "word": "მოგზაურობა",
        "level": "starter",
        "theme": "travel",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "ახალ ადგილებში წასვლა.",
                "examples": [
                    "საინტერესო მოგზაურობა."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_travel_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
