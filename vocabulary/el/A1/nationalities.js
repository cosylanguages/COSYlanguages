// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Έλληνας",
        "level": "starter",
        "theme": "people",
        "emoji": "🇬🇷",
        "form": "adjective",
        "definitions": [
            {
                "text": "Από την Ελλάδα.",
                "examples": [
                    "Είμαι Έλληνας."
                ]
            }
        ],
        "lang": "el",
        "transcription": "",
        "id": "el_starter_people_001"
    },
    {
        "word": "Άγγλος",
        "level": "starter",
        "theme": "people",
        "emoji": "🇬🇧",
        "form": "adjective",
        "definitions": [
            {
                "text": "Από την Αγγλία.",
                "examples": [
                    "Είναι Άγγλος."
                ]
            }
        ],
        "lang": "el",
        "transcription": "",
        "id": "el_starter_people_002"
    },
    {
        "word": "Γάλλος",
        "level": "starter",
        "theme": "people",
        "emoji": "🇫🇷",
        "form": "adjective",
        "definitions": [
            {
                "text": "Από τη Γαλλία.",
                "examples": [
                    "Είναι Γάλλος."
                ]
            }
        ],
        "lang": "el",
        "transcription": "",
        "id": "el_starter_people_003"
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
