(function() {
    const data = [{
                "topic": "Ένα άτομο που με ενέπνευσε",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "Η σημασία της ευαισθητοποίησης για την ψυχική υγεία",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();