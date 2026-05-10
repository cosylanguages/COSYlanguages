(function() {
    const data = [{
                "text": "I bambini dovrebbero avere il cellulare?",
                "level": "starter",
                "theme": "technology_A2"
            },
            {
                "text": "È meglio vivere in una casa o in un appartamento?",
                "level": "elementary",
                "theme": "neighbourhood_local_A2"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();