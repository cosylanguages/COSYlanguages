// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "casa",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Lugar onde vive uma pessoa ou família.",
                "examples": [
                    "Volto a casa depois de trabalhar."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈka.zɐ",
        "id": "pt_starter_places_001"
    },
    {
        "word": "cidade",
        "level": "starter",
        "theme": "places",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Povoação grande com muitos edifícios.",
                "examples": [
                    "Lisboa é uma cidade bonita."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "si.ˈda.ðɨ",
        "id": "pt_starter_places_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
