(function() {
    const data = [{
                "text": "Γενετική μηχανική: Πρόοδος ή κίνδυνος;",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Είναι το καθολικό βασικό εισόδημα λύση για την αυτοματοποίηση;",
                "level": "advanced",
                "theme": "power_institutions_C1"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();