(function() {
    const data = [
            {
                "topic": "Knowledge is power.",
                "level": "starter",
                "theme": "workplace_basics_A1"
            },
            {
                "topic": "Time is money.",
                "level": "starter",
                "theme": "workplace_basics_A1"
            }
        ];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["en"]) window.speakingData["en"] = {};
    if (!window.speakingData["en"]["quotes"]) window.speakingData["en"]["quotes"] = [];
    window.speakingData["en"]["quotes"].push(...data);
})();