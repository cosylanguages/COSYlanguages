(function() {
    const lang = "cv";
    const pronouns = ["эпĕ", "эсĕ", "вăл", "эпир", "эсир", "вĕсем"];
    const data = [
        {
            "verb": "пулма",
            "group": "irregular",
            "classification": "irregular",
            "aspect": "stative",
            "past_participle": "пулнă",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["пулатăп", "пулатăн", "пулать", "пулатпăр", "пулатăр", "пулаççĕ"],
                    "negative": ["пулмастăп", "пулмастăн", "пулмасть", "пулмастпăр", "пулмастăр", "пулмаççĕ"],
                    "question": ["пулатăп-и?", "пулатăн-и?", "пулать-и?", "пулатпăр-и?", "пулатăр-и?", "пулаççĕ-и?"]
                }
            }
        },
        {
            "verb": "вĕренме",
            "group": "consonant",
            "classification": "regular",
            "aspect": "action",
            "past_participle": "вĕреннĕ",
            "level": "starter",
            "pronouns": pronouns,
            "tenses": {
                "present_simple": {
                    "positive": ["вĕренетĕп", "вĕренетĕн", "вĕренет", "вĕренетпĕр", "вĕренетĕр", "вĕренеççĕ"],
                    "negative": ["вĕренместĕп", "вĕренместĕн", "вĕренмест", "вĕренместпĕр", "вĕренместĕр", "вĕренмеççĕ"],
                    "question": ["вĕренетĕп-и?", "вĕренетĕн-и?", "вĕренет-и?", "вĕренетпĕр-и?", "вĕренетĕр-и?", "вĕренеççĕ-и?"]
                }
            }
        }
    ];
    window.grammarData = window.grammarData || {};
    window.grammarData[lang] = [...(window.grammarData[lang] || []), ...data];
})();
