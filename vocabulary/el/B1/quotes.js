(function() {
    const data = [{
                "text": "Σκέφτομαι, άρα υπάρχω.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Η γνώση είναι δύναμη.",
                "author": "Francis Bacon",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();