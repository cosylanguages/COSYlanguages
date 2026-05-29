(function() {
    const data = [
    {
        "id": "en_intermediate_social_024",
        "text": "I think, therefore I am.",
        "author": "Descartes",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_025",
        "text": "Be the change you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_026",
        "text": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();