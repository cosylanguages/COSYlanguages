(function() {
    const data = [{
                "topic": "L'avenir du monde dans 50 ans",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "L'impact du changement climatique sur les communautés locales",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();