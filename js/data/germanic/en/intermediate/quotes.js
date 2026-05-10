(function() {
    const data = [{
                "text": "I think, therefore I am.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "Be the change you wish to see in the world.",
                "author": "Mahatma Gandhi",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "text": "The only thing we have to fear is fear itself.",
                "author": "Franklin D. Roosevelt",
                "level": "intermediate",
                "theme": "society_community_B1"
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();