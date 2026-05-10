(function() {
    const data = [{
                "topic": "Il mio ricordo d'infanzia preferito",
                "level": "starter",
                "theme": "immediate_family_A1"
            },
            {
                "topic": "Il lavoro dei miei sogni e perché",
                "level": "starter",
                "theme": "workplace_basics_A1"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();