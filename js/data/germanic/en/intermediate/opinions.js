(function() {
    const data = [{
                "text": "Can we live without the internet for a week?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Should everyone learn a second language?",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();