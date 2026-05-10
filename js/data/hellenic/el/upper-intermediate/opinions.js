(function() {
    const data = [{
                "text": "Καταστρέφουν τα κοινωνικά δίκτυα τις κοινωνικές μας δεξιότητες;",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Πρέπει οι δημόσιες συγκοινωνίες να είναι δωρεάν;",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();