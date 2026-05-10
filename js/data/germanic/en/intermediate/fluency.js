(function() {
    const data = [{
                "topic": "A person who inspired me",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "The importance of mental health awareness",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();