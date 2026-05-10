(function() {
    const data = [{
                "topic": "Η αγαπημένη μου ανάμνηση από την παιδική ηλικία",
                "level": "starter",
                "theme": "immediate_family_A1"
            },
            {
                "topic": "Η δουλειά των ονείρων μου και γιατί",
                "level": "starter",
                "theme": "workplace_basics_A1"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();