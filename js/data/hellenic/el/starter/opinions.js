(function() {
    const data = [{
                "text": "Είναι το πρωινό το πιο σημαντικό γεύμα;",
                "level": "starter",
                "theme": "basic_foods_A1"
            },
            {
                "text": "Είναι οι σκύλοι καλύτερα κατοικίδια από τις γάτες;",
                "level": "starter",
                "theme": "leisure_activities_A1"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();