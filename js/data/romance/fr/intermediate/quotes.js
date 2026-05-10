(function() {
    const data = [{
                "text": "Je pense, donc je suis.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Le cœur a ses raisons que la raison ne connaît point.",
                "author": "Blaise Pascal",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();