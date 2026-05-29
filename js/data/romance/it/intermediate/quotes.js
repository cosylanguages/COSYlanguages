(function() {
    const data = [
    {
        "text": "Penso, dunque sono.",
        "author": "Descartes",
        "level": "intermediate",
        "theme": "social",
        "definitions": [
            {
                "text": "Penso, dunque sono.",
                "examples": []
            }
        ],
        "form": "phrase",
        "lang": "it",
        "sub_theme": null,
        "id": "it_intermediate_social_062",
        "word": "Penso, dunque sono."
    }
];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();