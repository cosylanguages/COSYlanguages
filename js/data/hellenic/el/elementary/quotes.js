(function() {
    const data = [
    {
        "id": "el_elementary_social_001",
        "word": "",
        "lang": "el",
        "level": "elementary",
        "theme": "relationships_dating",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "",
                "examples": []
            }
        ],
        "text": "Ζωή είναι αυτό που σου συμβαίνει ενώ είσαι απασχολημένος κάνοντας άλλα σχέδια.",
        "author": "John Lennon"
    }
];
    const lang = "el";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();