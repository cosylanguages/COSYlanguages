(function() {
    const data = [{
                "text": "Генная инженерия: прогресс или опасность?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Является ли безусловный базовый доход решением проблемы автоматизации?",
                "level": "advanced",
                "theme": "power_institutions_C1"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();