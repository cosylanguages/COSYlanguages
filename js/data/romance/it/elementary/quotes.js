(function() {
    const data = [{
                "text": "La vita è quello che ti succede mentre sei occupato a fare altri progetti.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();