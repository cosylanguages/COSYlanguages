(function() {
    const data = [];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();