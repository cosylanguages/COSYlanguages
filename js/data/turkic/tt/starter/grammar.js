(function() {
    const pronouns = ["мин", "син", "ул", "без", "сез", "алар"];
    const data = [
        {
            "verb": "булу",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "булган",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["мын", "сың", "дыр", "быз", "сыз", "дырлар"],
                    "negative": ["төгелмен", "төгелсең", "төгел", "төгелбез", "төгелсез", "төгелләр"],
                    "question": ["мынмы?", "сыңмы?", "мы?", "бызмы?", "сызмы?", "мы?"]
                }
            }
        }
    ];
    const lang = "tt";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
