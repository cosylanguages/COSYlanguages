(function() {
    const data = [{
                "topic": "Mon souvenir d'enfance préféré",
                "level": "starter",
                "theme": "immediate_family_A1"
            },
            {
                "topic": "Le métier de mes rêves et pourquoi",
                "level": "starter",
                "theme": "workplace_basics_A1"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();