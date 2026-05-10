(function() {
    const data = [{
                "topic": "Une personne qui m'a inspiré",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "L'importance de la sensibilisation à la santé mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();