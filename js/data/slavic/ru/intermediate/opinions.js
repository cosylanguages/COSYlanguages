(function() {
    const data = [{
                "text": "Можем ли мы прожить без интернета неделю?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Нужно ли каждому учить второй язык?",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();