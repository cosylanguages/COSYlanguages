(function() {
    const data = [
    {
        "id": "en_intermediate_social_001",
        "text": "I think, therefore I am.",
        "author": "Descartes",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null,
        "word": "I think, therefore I am.",
        "form": "other",
        "definitions": [
            {
                "text": "I think, therefore I am.",
                "examples": []
            }
        ]
    },
    {
        "id": "en_intermediate_social_002",
        "text": "Be the change you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null,
        "word": "Be the change you wish to see in the world.",
        "form": "other",
        "definitions": [
            {
                "text": "Be the change you wish to see in the world.",
                "examples": []
            }
        ]
    },
    {
        "id": "en_intermediate_social_003",
        "text": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null,
        "word": "The only thing we have to fear is fear itself.",
        "form": "other",
        "definitions": [
            {
                "text": "The only thing we have to fear is fear itself.",
                "examples": []
            }
        ]
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();