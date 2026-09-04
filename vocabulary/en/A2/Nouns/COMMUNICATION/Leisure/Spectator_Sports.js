(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-NOUN-COM-019",
        "word": "fame",
        "emoji": "⭐",
        "form": "noun",
        "definitions": [
            {
                "text": "The state of being known or talked about by many people.",
                "examples": [
                    "Fame brought new opportunities.",
                    "He achieved international fame as an actor."
                ]
            }
        ],
        "subtext": "renown, celebrity",
        "synonyms": [
            "renown",
            "celebrity"
        ],
        "transcription": "feɪm",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "communication",
        "domain": "COMMUNICATION",
        "subcategory": "Leisure",
        "pos_section": "Nouns",
        "sub_subcategory": "Spectator_Sports"
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
