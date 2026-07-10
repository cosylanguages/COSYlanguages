// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Έλληνας",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "el_starter_nationalities_001",
        "lang": "el",
        "transcription": ""
    },
    {
        "word": "Άγγλος",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "el_starter_nationalities_002",
        "lang": "el",
        "transcription": ""
    },
    {
        "word": "Γάλλος",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "el_starter_nationalities_003",
        "lang": "el",
        "transcription": ""
    }
];
    const lang = "el";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
