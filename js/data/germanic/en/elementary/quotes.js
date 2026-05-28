(function() {
    const data = [
    {
        "id": "en_elementary_people_022",
        "text": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    }
];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();