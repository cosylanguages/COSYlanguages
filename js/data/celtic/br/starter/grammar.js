(function() {
    const pronouns = ["me", "te", "eñ", "hi", "ni", "c'hwi", "int"];
    const data = [
        {
            "verb": "bezañ",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "bet",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["on", "out", "eo", "eo", "omp", "oc'h", "int"],
                    "negative": ["n'on ket", "n'out ket", "n'eo ket", "n'eo ket", "n'omp ket", "n'oc'h ket", "n'int ket"],
                    "question": ["hag on?", "hag out?", "hag eo?", "hag eo?", "hag omp?", "hag oc'h?", "hag int?"]
                },
                "imperfect": {
                    "positive": ["edon", "edout", "edo", "edo", "edomp", "edoc'h", "edont"],
                    "negative": ["ne don ket", "ne dout ket", "ne do ket", "ne do ket", "ne domp ket", "ne doc'h ket", "ne dont ket"],
                    "question": ["ha me a oa?", "ha te a oa?", "hag eñ a oa?", "ha hi a oa?", "ha ni a oa?", "ha c'hwi a oa?", "hag int a oa?"]
                }
            }
        },
        {
            "verb": "kaout",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "bet",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["am eus", "az peus", "en deus", "he deus", "hon eus", "ho peus", "o deus"],
                    "negative": ["n'am eus ket", "n'az peus ket", "n'en deus ket", "n'he deus ket", "n'hon eus ket", "n'ho peus ket", "n'o deus ket"],
                    "question": ["hag am eus?", "hag az peus?", "hag en deus?", "hag he deus?", "hag hon eus?", "hag ho peus?", "hag o deus?"]
                }
            }
        }
    ]
    const lang = "br";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
