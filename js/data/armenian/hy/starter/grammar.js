(function() {
    const pronouns = ["ես", "դու", "նա", "մենք", "դուք", "նրանք"];
    const data = [
        {
            "verb": "լինել",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "եղել",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["եմ", "ես", "է", "ենք", "եք", "են"],
                    "negative": ["չեմ", "չես", "չէ", "չենք", "չեք", "չեն"],
                    "question": ["եմ՞", "ես՞", "է՞", "ենք՞", "եք՞", "են՞"]
                },
                "aorist": {
                    "positive": ["եղա", "եղար", "եղավ", "եղանք", "եղաք", "եղան"],
                    "negative": ["չեղա", "չեղար", "չեղավ", "չեղանք", "չեղաք", "չեղան"],
                    "question": ["եղա՞", "եղա՞ր", "եղա՞վ", "եղա՞նք", "եղա՞ք", "եղա՞ն"]
                }
            }
        },
        {
            "verb": "ունենալ",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "ունեցել",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["ունեմ", "ունես", "ունի", "ունենք", "ունեք", "ունեն"],
                    "negative": ["չունեմ", "չունես", "չունի", "չունենք", "չունեք", "չունեն"],
                    "question": ["ունե՞մ", "ունե՞ս", "ունի՞", "ունե՞նք", "ունե՞ք", "ունե՞ն"]
                }
            }
        }
    ]
    const lang = "hy";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
