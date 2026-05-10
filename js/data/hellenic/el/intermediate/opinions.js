(function() {
    const data = [{
                "text": "Μπορούμε να ζήσουμε χωρίς ίντερνετ για μια εβδομάδα;",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Πρέπει όλοι να μαθαίνουν μια δεύτερη γλώσσα;",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();