(function() {
    const data = [{
                "text": "Possiamo vivere senza internet per una settimana?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Tutti dovrebbero imparare una seconda lingua?",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();