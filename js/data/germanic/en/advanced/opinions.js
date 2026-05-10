(function() {
    const data = [{
                "text": "Genetic engineering: Progress or peril?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Is universal basic income a solution to automation?",
                "level": "advanced",
                "theme": "power_institutions_C1"
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();