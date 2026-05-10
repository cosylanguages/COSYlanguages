(function() {
    const data = [{
                "text": "Существует ли свобода воли на самом деле или это иллюзия?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "Этика колонизации других планет.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();