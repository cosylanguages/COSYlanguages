// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "კონცეფცია",
        "level": "advanced",
        "theme": "philosophy",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "ძირითადი შეხედულებებისა და იდეების სისტემა.",
                "examples": [
                    "სამეცნიერო კონცეფციის შემუშავება."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_advanced_philosophy_001"
    },
    {
        "word": "ავტონომია",
        "level": "advanced",
        "theme": "politics",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "თვითმმართველობის უფლება.",
                "examples": [
                    "კულტურული ავტონომია."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_advanced_politics_001"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
