(function() {
    const data = [
    {
        "id": "it_intermediate_social_062",
        "word": "Penso, dunque sono.",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Penso, dunque sono.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓",
        "_legacy": {
            "text": "Penso, dunque sono.",
            "author": "Descartes"
        }
    }
];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();