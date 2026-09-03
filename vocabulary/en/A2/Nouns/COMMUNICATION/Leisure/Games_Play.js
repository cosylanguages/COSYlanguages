(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-NOUN-COM-083",
            "word": "game",
            "emoji": "🎮",
            "form": "noun",
            "definitions": [
                    {
                            "text": "An activity that one engages in for amusement or fun.",
                            "examples": [
                                    "Board games are fun on rainy days.",
                                    "They won the championship football game."
                            ]
                    }
            ],
            "subtext": "sport, play",
            "synonyms": [
                    "sport",
                    "play"
            ],
            "transcription": "ɡeɪm",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "communication",
            "domain": "COMMUNICATION",
            "subcategory": "Leisure",
            "pos_section": "Nouns",
            "sub_subcategory": "Games_Play"
    }
    ];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
