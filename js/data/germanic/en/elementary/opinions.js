(function() {
    const data = [{
                "text": "Should children have mobile phones?",
                "level": "starter",
                "theme": "technology_A2"
            },
            {
                "text": "Is it better to live in a house or an apartment?",
                "level": "elementary",
                "theme": "neighbourhood_local_A2"
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();