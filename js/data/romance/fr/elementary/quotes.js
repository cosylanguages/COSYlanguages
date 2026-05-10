(function() {
    const data = [{
                "text": "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();