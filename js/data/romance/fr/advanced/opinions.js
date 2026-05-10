(function() {
    const data = [{
                "text": "Génie génétique : progrès ou péril ?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Le revenu universel est-il une solution à l'automatisation ?",
                "level": "advanced",
                "theme": "power_institutions_C1"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();