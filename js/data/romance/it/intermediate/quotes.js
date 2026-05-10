(function() {
    const data = [{
                "text": "Penso, dunque sono.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "La bellezza salverà il mondo.",
                "author": "Dostoevskij",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();