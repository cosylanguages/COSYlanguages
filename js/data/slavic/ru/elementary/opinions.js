(function() {
    const data = [{
                "text": "Должны ли у детей быть мобильные телефоны?",
                "level": "starter",
                "theme": "technology_A2"
            },
            {
                "text": "Где лучше жить: в доме или в квартире?",
                "level": "elementary",
                "theme": "neighbourhood_local_A2"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();