// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "ქართველი",
        "level": "starter",
        "theme": "people",
        "emoji": "🇬🇪",
        "form": "adjective",
        "definitions": [
            {
                "text": "საქართველოდან.",
                "examples": [
                    "მე ქართველი ვარ."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_people_001"
    },
    {
        "word": "ინგლისელი",
        "level": "starter",
        "theme": "people",
        "emoji": "🇬🇧",
        "form": "adjective",
        "definitions": [
            {
                "text": "ინგლისიდან.",
                "examples": [
                    "ის ინგლისელია."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_people_002"
    },
    {
        "word": "გერმანელი",
        "level": "starter",
        "theme": "people",
        "emoji": "🇩🇪",
        "form": "adjective",
        "definitions": [
            {
                "text": "გერმანიიდან.",
                "examples": [
                    "ის გერმანელია."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_people_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
