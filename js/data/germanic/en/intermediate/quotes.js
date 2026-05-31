(function() {
    const data = [
        {
            "id": "en_intermediate_social_030",
            "text": "I think, therefore I am.",
            "author": "Descartes",
            "lang": "en",
            "level": "intermediate",
            "theme": "social",
            "sub_theme": null,
            "word": "I think, therefore I am.",
            "form": "phrase",
            "definitions": [
                {
                    "text": "I think, therefore I am.",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_intermediate_social_031",
            "text": "Be the change you wish to see in the world.",
            "author": "Mahatma Gandhi",
            "lang": "en",
            "level": "intermediate",
            "theme": "social",
            "sub_theme": null,
            "word": "Be the change you wish to see in the world.",
            "form": "phrase",
            "definitions": [
                {
                    "text": "Be the change you wish to see in the world.",
                    "examples": []
                }
            ],
            "emoji": "📝"
        },
        {
            "id": "en_intermediate_social_032",
            "text": "The only thing we have to fear is fear itself.",
            "author": "Franklin D. Roosevelt",
            "lang": "en",
            "level": "intermediate",
            "theme": "social",
            "sub_theme": null,
            "word": "The only thing we have to fear is fear itself.",
            "form": "phrase",
            "definitions": [
                {
                    "text": "The only thing we have to fear is fear itself.",
                    "examples": []
                }
            ],
            "emoji": "📝"
        }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();