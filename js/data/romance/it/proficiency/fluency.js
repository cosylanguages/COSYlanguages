(function() {
    const data = [{
                "topic": "La complexité della coscienza umana",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();