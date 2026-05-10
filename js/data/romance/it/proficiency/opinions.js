(function() {
    const data = [{
                "text": "Il libero arbitrio esiste davvero o è un'illusione?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "L'etica della colonizzazione di altri pianeti.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();