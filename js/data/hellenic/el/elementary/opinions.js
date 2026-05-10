(function() {
    const data = [{
                "text": "Πρέπει τα παιδιά να έχουν κινητά τηλέφωνα;",
                "level": "starter",
                "theme": "technology_A2"
            },
            {
                "text": "Είναι καλύτερα να ζεις σε σπίτι ή σε διαμέρισμα;",
                "level": "elementary",
                "theme": "neighbourhood_local_A2"
            }];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();