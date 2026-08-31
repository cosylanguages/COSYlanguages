// TODO: verify level classification
(function() {
    const lang = "br";
    const data = [
    {
        "word": "mignon",
        "level": "starter",
        "theme": "social",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Den a garter hag a garer gantañ.",
                "examples": [
                    "Ma mignon brasañ eo."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_starter_social_001"
    },
    {
        "word": "fest",
        "level": "starter",
        "theme": "social",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mared leun a levenez ha dañs gant an dud.",
                "examples": [
                    "Ur fest vras zo fenoz."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_starter_social_002"
    },
    {
        "word": "kaoz",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Komzoù etre daou pe meur a den.",
                "examples": [
                    "Ober ur gaoz gant an amezeog."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_starter_social_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
