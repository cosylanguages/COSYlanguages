(function() {
    const lang = "pt";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    const keys = ["talkThatTalk", "debates", "opinions", "quotes", "fluency"];
    keys.forEach(k => {
        if (!window.speakingData[lang][k]) window.speakingData[lang][k] = [];
    });
})();
