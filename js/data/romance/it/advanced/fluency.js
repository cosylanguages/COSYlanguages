(function() {
    const data = [{
                "topic": "Il ruolo dell'arte nella società moderna",
                "level": "advanced",
                "theme": "interests_hobbies_A2"
            },
            {
                "topic": "Intelligenza Artificiale: Strumento o minaccia ?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();