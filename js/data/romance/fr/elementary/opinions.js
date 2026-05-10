(function() {
    const data = [{
                "text": "Les enfants devraient-ils avoir des téléphones portables ?",
                "level": "starter",
                "theme": "technology_A2"
            },
            {
                "text": "Est-il préférable de vivre dans une maison ou un appartement ?",
                "level": "elementary",
                "theme": "neighbourhood_local_A2"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();