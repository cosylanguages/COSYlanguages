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
                },
                "past_definite": {
                    "positive": ["булдым", "булдың", "булды", "булдык", "булдыгыз", "булдылар"],
                    "negative": ["булмадым", "булмадың", "булмады", "булмадык", "булмадыгыз", "булмадылар"],
                    "question": ["булдыммы?", "булдыңмы?", "булдымы?", "булдыкмы?", "булдыгызмы?", "булдылармы?"]
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
                    "positive": ["эшлим", "эшлисең", "эшли", "эшлибез", "эшлисез", "эшлиләр"],
                    "negative": ["эшләмим", "эшләмисең", "эшләми", "эшләмибез", "эшләмисез", "эшләмиләр"],
                    "question": ["эшлимме?", "эшлисеңме?", "эшлиме?", "эшлибезме?", "эшлисезме?", "эшлиләрме?"]
                }
            }
        }
    ]
    const lang = "tt";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
