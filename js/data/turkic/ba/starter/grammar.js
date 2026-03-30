(function() {
    const pronouns = ["мин", "син", "ул", "беҙ", "һеҙ", "улар"];
    const data = [
        {
            "verb": "булыу",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "булған",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["мын", "һың", "дыр", "быҙ", "һығыҙ", "дырҙар"],
                    "negative": ["төгелмен", "төгелһең", "төгел", "төгелбеҙ", "төгелһегеҙ", "төгелләр"],
                    "question": ["мынмы?", "һыңмы?", "мы?", "быҙмы?", "һығыҙмы?", "мы?"]
                }
            }
        }
    ];
    const lang = "ba";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
