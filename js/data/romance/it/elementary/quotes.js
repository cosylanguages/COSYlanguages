(function() {
    const data = [
    {
        "id": "it_elementary_people_021",
        "word": "La vita è quello che ti succede mentre sei occupato a fare altri progetti.",
        "lang": "it",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "La vita è quello che ti succede mentre sei occupato a fare altri progetti.",
                "examples": []
            }
        ],
        "text": "La vita è quello che ti succede mentre sei occupato a fare altri progetti.",
        "author": "John Lennon"
    }
];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();