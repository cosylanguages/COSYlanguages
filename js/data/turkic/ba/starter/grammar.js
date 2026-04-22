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
        },
        {
            "verb": "эйә булыу",
            "group": "regular",
            "classification": "regular",
            "aspect": "stative",
            "past_participle": "эйә булған",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["эйә булам", "эйә булаһың", "эйә була", "эйә булабыҙ", "эйә булаһығыҙ", "эйә булалар"],
                    "negative": ["эйә булмайым", "эйә булмайһың", "эйә булмай", "эйә булмайбыҙ", "эйә булмайһығыҙ", "эйә булмайҙар"],
                    "question": ["эйә буламмы?", "эйә булаһыңмы?", "эйә буламы?", "эйә булабыҙмы?", "эйә булаһығыҙмы?", "эйә булалармы?"]
                }
            }
        }
    ]
    const lang = "ba";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
