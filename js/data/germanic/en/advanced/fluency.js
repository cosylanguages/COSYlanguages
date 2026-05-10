(function() {
    const data = [{
                "topic": "The role of art in modern society",
                "level": "advanced",
                "theme": "interests_hobbies_A2"
            },
            {
                "topic": "Artificial Intelligence: Tool or threat?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();