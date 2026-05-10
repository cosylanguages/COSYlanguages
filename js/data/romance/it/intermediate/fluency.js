(function() {
    const data = [{
                "topic": "Una persona che mi ha ispirato",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "L'importance della consapevolezza sulla salute mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();