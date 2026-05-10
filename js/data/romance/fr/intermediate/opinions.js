(function() {
    const data = [{
                "text": "Pouvons-nous vivre sans Internet pendant une semaine ?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Tout le monde devrait-il apprendre une deuxième langue ?",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();