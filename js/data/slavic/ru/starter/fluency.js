(function() {
    const data = [{
                "topic": "Мое любимое воспоминание из детства",
                "level": "starter",
                "theme": "immediate_family_A1"
            },
            {
                "topic": "Работа моей мечты и почему",
                "level": "starter",
                "theme": "workplace_basics_A1"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();