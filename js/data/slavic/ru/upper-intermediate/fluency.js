(function() {
    const data = [{
                "topic": "Будущее мира через 50 лет",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "Влияние изменения климата на местные сообщества",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();