(function() {
    const data = [
    {
        "id": "ru_intermediate_social_031",
        "word": "Я мыслю, следовательно, я существую.",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Я мыслю, следовательно, я существую.",
                "examples": []
            }
        ],
        "text": "Я мыслю, следовательно, я существую.",
        "author": "Descartes"
    },
    {
        "id": "ru_intermediate_social_032",
        "word": "Красота спасет мир.",
        "lang": "ru",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Красота спасет мир.",
                "examples": []
            }
        ],
        "text": "Красота спасет мир.",
        "author": "Dostoevsky"
    }
];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();