(function() {
    const data = [
    {
        "id": "fr_intermediate_social_120",
        "word": "Je pense, donc je suis.",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Je pense, donc je suis.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓",
        "_legacy": {
            "author": "Descartes"
        }
    },
    {
        "id": "fr_intermediate_social_121",
        "word": "Le cœur a ses raisons que la raison ne connaît point.",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Le cœur a ses raisons que la raison ne connaît point.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓",
        "_legacy": {
            "author": "Blaise Pascal"
        }
    }
];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();