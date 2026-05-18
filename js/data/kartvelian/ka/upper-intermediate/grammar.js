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
            "verb": "წერა",
            "group": "Class 1",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "დაწერილი",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["ვწერ", "წერ", "წერს", "ვწერთ", "წერთ", "წერენ"],
                    "negative": ["არ ვწერ", "არ წერ", "არ წერს", "არ ვწერთ", "არ წერთ", "არ წერენ"],
                    "question": ["ვწერ?", "წერ?", "წერს?", "ვწერთ?", "წერთ?", "წერენ?"]
                }
            }
        }
    ]
    const lang = "ka";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
