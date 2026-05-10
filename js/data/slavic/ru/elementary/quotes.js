(function() {
    const data = [{
                "text": "Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            }];
    const lang = "ru";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();