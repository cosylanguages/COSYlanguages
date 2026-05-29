(function() {
    const data = [
    {
        "id": "fr_starter_people_001",
        "word": "Mon souvenir d'enfance préféré",
        "lang": "fr",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Mon souvenir d'enfance préféré",
                "examples": []
            }
        ]
    },
    {
        "id": "fr_starter_work_001",
        "word": "Le métier de mes rêves et pourquoi",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Le métier de mes rêves et pourquoi",
                "examples": []
            }
        ]
    }
];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();