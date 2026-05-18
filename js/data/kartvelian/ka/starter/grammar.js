(function() {
    const pronouns = ["მე", "შენ", "ის", "ჩვენ", "თქვენ", "ისინი"];
    const data = [
        {
            "verb": "ყოფნა",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "ყოფილი",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["ვარ", "ხარ", "არის", "ვართ", "ხართ", "არიან"],
                    "negative": ["არ ვარ", "არ ხარ", "არ არის", "არ ვართ", "არ ხართ", "არ არიან"],
                    "question": ["ვარ?", "ხარ?", "არის?", "ვართ?", "ხართ?", "არიან?"]
                },
                "aorist": {
                    "positive": ["ვიყავი", "იყავი", "იყო", "ვიყავით", "იყავით", "იყვნენ"],
                    "negative": ["არ ვიყავი", "არ იყავი", "არ იყო", "არ ვიყავით", "არ იყავით", "არ იყვნენ"],
                    "question": ["ვიყავი?", "იყავი?", "იყო?", "ვიყავით?", "იყავით?", "იყვნენ?"]
                }
            }
        },
        {
            "verb": "ქონა",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "ჰქონდა",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["მაქვს", "გაქვს", "აქვს", "გვაქვს", "გაქვთ", "აქვთ"],
                    "negative": ["არ მაქვს", "არ გაქვს", "არ აქვს", "არ გვაქვს", "არ გაქვთ", "არ აქვთ"],
                    "question": ["მაქვს?", "გაქვს?", "აქვს?", "გვაქვს?", "გაქვთ?", "აქვთ?"]
                }
            }
        }
    ]
    const lang = "ka";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
