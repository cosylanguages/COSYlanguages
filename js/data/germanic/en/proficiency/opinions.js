(function() {
    const data = [{
                "text": "Does free will truly exist or is it an illusion?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "The ethics of colonizing other planets.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();