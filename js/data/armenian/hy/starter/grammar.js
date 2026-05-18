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
            "verb": "գրել",
            "group": "-ել (1st conj)",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "գրած",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["գրում եմ", "գրում ես", "գրում է", "գրում ենք", "գրում եք", "գրում են"],
                    "negative": ["չեմ գրում", "չես գրում", "չի գրում", "չենք գրում", "չեք գրում", "չեն գրում"],
                    "question": ["գրու՞մ եմ", "գրու՞մ ես", "գրու՞մ է", "գրու՞մ ենք", "գրու՞մ եք", "գրու՞մ են"]
                }
            }
        }
    ]
    const lang = "hy";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
