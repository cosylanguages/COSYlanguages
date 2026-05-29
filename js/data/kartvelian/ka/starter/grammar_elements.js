(function() {
    const data = [
        {
            "word": "მე",
            "etymology": {
                "origin_lang": "Proto-Kartvelian",
                "origin_word": "*me-",
                "origin_meaning": "I"
            },
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "pronoun",
            "definitions": [{ "text": "პირველი პირი, მხოლობითი რიცხვი.", "examples": ["მე ვარ სტუდენტი."] }]
        },
        {
            "word": "შენ",
            "etymology": {
                "origin_lang": "Proto-Kartvelian",
                "origin_word": "*sen-",
                "origin_meaning": "thou"
            },
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "pronoun",
            "definitions": [{ "text": "მეორე პირი, მხოლობითი რიცხვი.", "examples": ["როგორ ხარ შენ?"] }]
        },
        {
            "word": "ის",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👨",
            "form": "pronoun",
            "definitions": [{ "text": "მესამე პირი, მხოლობითი რიცხვი.", "examples": ["ის ჩემი ძმაა."] }]
        },
        {
            "word": "ჩვენ",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "პირველი პირი, მრავლობითი რიცხვი.", "examples": ["ჩვენ მეგობრები ვართ."] }]
        },
        {
            "word": "ისინი",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "მესამე პირი, მრავლობითი რიცხვი.", "examples": ["ისინი ერთად მუშაობენ."] }]
        },
        {
            "word": "ჩემი",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "determiner",
            "definitions": [{ "text": "მიუთითებს კუთვნილებაზე (მე).", "examples": ["ჩემი სახელია იოანე."] }]
        },
        {
            "word": "შენი",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "determiner",
            "definitions": [{ "text": "მიუთითებს კუთვნილებაზე (შენ).", "examples": ["ეს შენი ტელეფონია?"] }]
        },
        {
            "word": "ყოველთვის",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "🔄",
            "form": "adverb",
            "definitions": [{ "text": "ყოველ დროს.", "examples": ["მე ყოველთვის ვსვამ ყავას."] }]
        },
        {
            "word": "არასოდეს",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "❌",
            "form": "adverb",
            "definitions": [{ "text": "არცერთ დროს.", "examples": ["მე არასოდეს ვაგვიანებ."] }]
        },
        {
            "word": "და",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "➕",
            "form": "conjunction",
            "definitions": [{ "text": "აერთებს სიტყვებს ან წინადადებებს.", "examples": ["ყავა და ჩაი."] }]
        },
        {
            "word": "მაგრამ",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "❓",
            "form": "conjunction",
            "definitions": [{ "text": "მიუთითებს წინააღმდეგობაზე.", "examples": ["მიყვარს ყავა, მაგრამ არა რძე."] }]
        }
    ];
    const lang = "ka";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
