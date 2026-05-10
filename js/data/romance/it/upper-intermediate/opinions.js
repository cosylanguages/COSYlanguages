(function() {
    const data = [{
                "text": "I social media stanno distruggendo le nostre abilità sociali?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "I trasporti pubblici dovrebbero essere gratuiti?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();