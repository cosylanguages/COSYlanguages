(function() {
    const data = [{
                "text": "Ingegneria genetica: progresso o pericolo?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Il reddito di base universale è una soluzione all'automazione?",
                "level": "advanced",
                "theme": "power_institutions_C1"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();