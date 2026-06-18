(function() {
    const data = [
    {
        "id": "en_intermediate_social_051",
        "word": "I think, therefore I am.",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "other",
        "definitions": [
            {
                "text": "I think, therefore I am.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓",
        "_legacy": {
            "text": "I think, therefore I am.",
            "author": "Descartes"
        }
    },
    {
        "id": "en_intermediate_social_052",
        "word": "Be the change you wish to see in the world.",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "other",
        "definitions": [
            {
                "text": "Be the change you wish to see in the world.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓",
        "_legacy": {
            "text": "Be the change you wish to see in the world.",
            "author": "Mahatma Gandhi"
        }
    },
    {
        "id": "en_intermediate_social_053",
        "word": "The only thing we have to fear is fear itself.",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "other",
        "definitions": [
            {
                "text": "The only thing we have to fear is fear itself.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "❓",
        "_legacy": {
            "text": "The only thing we have to fear is fear itself.",
            "author": "Franklin D. Roosevelt"
        }
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();