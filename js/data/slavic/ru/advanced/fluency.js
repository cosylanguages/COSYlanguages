(function() {
    const data = [{
                "topic": "Роль искусства в современном обществе",
                "level": "advanced",
                "theme": "interests_hobbies_A2"
            },
            {
                "topic": "Искусственный интеллект: инструмент или угроза?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();