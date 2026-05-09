(function() {
    const data = [
            {
                "topic": "My favorite childhood memory",
                "level": "starter",
                "theme": "immediate_family_A1"
            },
            {
                "topic": "My dream job and why",
                "level": "starter",
                "theme": "workplace_basics_A1"
            }
        ];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["en"]) window.speakingData["en"] = {};
    if (!window.speakingData["en"]["talkThatTalk"]) window.speakingData["en"]["talkThatTalk"] = [];
    window.speakingData["en"]["talkThatTalk"].push(...data);
})();