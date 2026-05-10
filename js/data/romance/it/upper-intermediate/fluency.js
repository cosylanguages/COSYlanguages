(function() {
    const data = [{
                "topic": "Il futuro del mondo tra 50 anni",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "L'impatto del cambiamento climatico sulle comunità locali",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();