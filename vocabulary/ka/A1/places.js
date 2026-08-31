// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "სახლი",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "ადამიანების საცხოვრებელი შენობა.",
                "examples": [
                    "სახლში დაბრუნება."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_places_001"
    },
    {
        "word": "ქალაქი",
        "level": "starter",
        "theme": "places",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "დიდი დასახლებული პუნქტი.",
                "examples": [
                    "თბილისი ლამაზი ქალაქია."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_places_002"
    },
    {
        "word": "სკოლა",
        "level": "starter",
        "theme": "places",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "სწავლის ადგილი.",
                "examples": [
                    "ბავშვები სკოლაში მიდიან."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_places_003"
    },
    {
        "word": "მაღაზია",
        "level": "starter",
        "theme": "places",
        "emoji": "🏪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "სავაჭრო ადგილი.",
                "examples": [
                    "მაღაზიაში პურის ყიდვა."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_places_004"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
