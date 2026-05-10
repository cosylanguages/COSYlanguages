(function() {
    const data = [{
                "topic": "Η πολυπλοκότητα της ανθρώπινης συνείδησης",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();