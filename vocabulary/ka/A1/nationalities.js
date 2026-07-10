// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "ქართველი",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "ka_starter_nationalities_001",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "ინგლისელი",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "ka_starter_nationalities_002",
        "lang": "ka",
        "transcription": ""
    },
    {
        "word": "გერმანელი",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "ka_starter_nationalities_003",
        "lang": "ka",
        "transcription": ""
    }
];
    const lang = "ka";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
