// TODO: verify level classification
(function() {
    const lang = "br";
    const data = [
    {
        "word": "meizad",
        "level": "advanced",
        "theme": "philosophy",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Skeudenn pe soñj difetis el bred.",
                "examples": [
                    "Ur meizad uhel a vez pleustret amañ."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_advanced_philosophy_001"
    },
    {
        "word": "emrenerezh",
        "level": "advanced",
        "theme": "politics",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Gwir d'en em ren e-unan.",
                "examples": [
                    "Stourm evit emrenerezh ar vro."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_advanced_politics_001"
    },
    {
        "word": "steroniezh",
        "level": "advanced",
        "theme": "language",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Studi ster ar gerioù hag ar frazennoù.",
                "examples": [
                    "Anzañ reolennoù ar steroniezh."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_advanced_language_001"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
