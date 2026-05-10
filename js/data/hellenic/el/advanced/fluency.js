(function() {
    const data = [{
                "topic": "Ο ρόλος της τέχνης στη σύγχρονη κοινωνία",
                "level": "advanced",
                "theme": "interests_hobbies_A2"
            },
            {
                "topic": "Τεχνητή Νοημοσύνη: Εργαλείο ή απειλή;",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();