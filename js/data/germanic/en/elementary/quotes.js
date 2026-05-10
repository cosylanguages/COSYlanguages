(function() {
    const data = [{
                "text": "Life is what happens when you're busy making other plans.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();