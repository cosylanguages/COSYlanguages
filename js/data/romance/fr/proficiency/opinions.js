(function() {
    const data = [{
                "text": "Le libre arbitre existe-t-il vraiment ou est-ce une illusion ?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "L'éthique de la colonisation d'autres planètes.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();