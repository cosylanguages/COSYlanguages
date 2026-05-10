(function() {
    const data = [{
                "text": "Υπάρχει πραγματικά η ελεύθερη βούληση ή είναι μια ψευδαίσθηση;",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "Η ηθική του αποικισμού άλλων πλανητών.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();