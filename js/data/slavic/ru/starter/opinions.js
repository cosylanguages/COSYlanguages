(function() {
    const data = [{
                "text": "Является ли завтрак самым важным приемом пищи?",
                "level": "starter",
                "theme": "basic_foods_A1"
            },
            {
                "text": "Собаки лучше кошек в качестве питомцев?",
                "level": "starter",
                "theme": "leisure_activities_A1"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();