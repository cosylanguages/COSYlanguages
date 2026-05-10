(function() {
    const data = [{
                "text": "Les réseaux sociaux détruisent-ils nos compétences sociales ?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Les transports publics devraient-ils être gratuits ?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();