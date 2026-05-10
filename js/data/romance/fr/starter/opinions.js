(function() {
    const data = [{
                "text": "Le petit-déjeuner est-il le repas le plus important ?",
                "level": "starter",
                "theme": "basic_foods_A1"
            },
            {
                "text": "Les chiens sont-ils de meilleurs animaux de compagnie que les chats ?",
                "level": "starter",
                "theme": "leisure_activities_A1"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();