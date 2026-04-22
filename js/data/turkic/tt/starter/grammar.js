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
        },
        {
            "verb": "ия булу",
            "group": "regular",
            "classification": "regular",
            "aspect": "stative",
            "past_participle": "ия булган",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["ия булам", "ия буласың", "ия була", "ия булабыз", "ия буласыз", "ия булалар"],
                    "negative": ["ия булмыйм", "ия булмыйсың", "ия булмый", "ия булмыйбыз", "ия булмыйсыз", "ия булмыйлар"],
                    "question": ["ия буламмы?", "ия буласыңмы?", "ия буламы?", "ия булабызмы?", "ия буласызмы?", "ия булалармы?"]
                }
            }
        }
    ]
    const lang = "tt";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
