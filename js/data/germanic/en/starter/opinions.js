(function() {
    const data = [
            {
                "topic": "Is breakfast the most important meal?",
                "level": "starter",
                "theme": "basic_foods_A1"
            },
            {
                "topic": "Are dogs better pets than cats?",
                "level": "starter",
                "theme": "leisure_activities_A1"
            }
        ];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["en"]) window.speakingData["en"] = {};
    if (!window.speakingData["en"]["opinions"]) window.speakingData["en"]["opinions"] = [];
    window.speakingData["en"]["opinions"].push(...data);
})();