(function() {
    const data = [{
                "text": "Я мыслю, следовательно, я существую.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Красота спасет мир.",
                "author": "Dostoevsky",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();