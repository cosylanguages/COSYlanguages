(function() {
    const data = [{
                "text": "Разрушают ли социальные сети наши навыки общения?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Должен ли общественный транспорт быть бесплатным?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();