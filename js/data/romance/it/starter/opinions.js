(function() {
    const data = [{
                "text": "La colazione è il pasto più importante?",
                "level": "starter",
                "theme": "basic_foods_A1"
            },
            {
                "text": "I cani sono animali domestici migliori dei gatti?",
                "level": "starter",
                "theme": "leisure_activities_A1"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();