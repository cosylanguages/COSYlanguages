(function() {
    const data = [{
                "topic": "Το μέλλον του κόσμου σε 50 χρόνια",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "Ο αντίκτυπος της κλιματικής αλλαγής στις τοπικές κοινότητες",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();