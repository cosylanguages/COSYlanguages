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
            "verb": "lenn",
            "group": "regular",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "lennet",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["lennan", "lennez", "lenn", "lenn", "lennomp", "lennot", "lennont"],
                    "negative": ["ne lennan ket", "ne lennez ket", "ne lenn ket", "ne lenn ket", "ne lennomp ket", "ne lennot ket", "ne lennont ket"],
                    "question": ["ha lenn a ran?", "ha lenn a rez?", "ha lenn a ra?", "ha lenn a ra?", "ha lenn a reomp?", "ha lenn a reot?", "ha lenn a reont?"]
                }
            }
        }
    ]
    const lang = "br";
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
