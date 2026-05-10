(function() {
    const data = [{
                "topic": "Le rôle de l'art dans la société moderne",
                "level": "advanced",
                "theme": "interests_hobbies_A2"
            },
            {
                "topic": "Intelligence artificielle : outil ou menace ?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();