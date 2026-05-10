(function() {
    const data = [{
                "topic": "Οι τελευταίες διακοπές που έκανα",
                "level": "elementary",
                "theme": "transport_travel_A2"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();