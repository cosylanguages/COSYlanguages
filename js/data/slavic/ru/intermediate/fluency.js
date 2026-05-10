(function() {
    const data = [{
                "topic": "Человек, который меня вдохновил",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "Важность осведомленности о ментальном здоровье",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();