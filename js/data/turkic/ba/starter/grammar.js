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
                },
                "past_definite": {
                    "positive": ["булдым", "булдың", "булды", "булдыҡ", "булдығыҙ", "булдылар"],
                    "negative": ["булманым", "булманың", "булманы", "булманыҡ", "булманығыҙ", "булманылар"],
                    "question": ["булдыммы?", "булдыңмы?", "булдымы?", "булдыҡмы?", "булдығыҙмы?", "булдылармы?"]
                }
            }
        },
        {
            "verb": "эшләү",
            "group": "Class 1",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "эшләгән",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["эшләйем", "эшләйһең", "эшләй", "эшләйбеҙ", "эшләйһегеҙ", "эшләйҙәр"],
                    "negative": ["эшләмәйем", "эшләмәйһең", "эшләмәй", "эшләмәйбеҙ", "эшләмәйһегеҙ", "эшләмәйҙәр"],
                    "question": ["эшләйемме?", "эшләйһеңме?", "эшләйме?", "эшләйбеҙме?", "эшләйһегеҙме?", "эшләйҙәрме?"]
                }
            }
        }
    ]
    const lang = "ba";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
