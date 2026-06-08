(function() {
    const data = [
        {
            "word": "me",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "pronoun",
            "definitions": [{ "text": "Kentañ den unan.", "examples": ["Ur studier on-me."] }]
        },
        {
            "word": "te",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "pronoun",
            "definitions": [{ "text": "Eil den unan.", "examples": ["Penaos 'it-te?"] }]
        },
        {
            "word": "eñ",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👨",
            "form": "pronoun",
            "definitions": [{ "text": "Trede den unan (gourel).", "examples": ["Ma breur eo eñ."] }]
        },
        {
            "word": "hi",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👩",
            "form": "pronoun",
            "definitions": [{ "text": "Trede den unan (benel).", "examples": ["Ma c'hoar eo hi."] }]
        },
        {
            "word": "ni",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Kentañ den lies.", "examples": ["Mignoned omp-ni."] }]
        },
        {
            "word": "int",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Trede den lies.", "examples": ["Labourat a reont asambles."] }]
        },
        {
            "word": "ma",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "determiner",
            "definitions": [{ "text": "Perc'hennañ (me).", "examples": ["Ma anv eo Yann."] }]
        },
        {
            "word": "da",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "determiner",
            "definitions": [{ "text": "Perc'hennañ (te).", "examples": ["Da bellgomz eo?"] }]
        },
        {
            "word": "atav",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "🔄",
            "form": "adverb",
            "definitions": [{ "text": "Bepred.", "examples": ["Evañ a ran kafe atav."] }]
        },
        {
            "word": "morse",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "❌",
            "form": "adverb",
            "definitions": [{ "text": "Gwech ebet.", "examples": ["Ne erruan morse diwezhat."] }]
        },
        {
            "word": "ha",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "➕",
            "form": "conjunction",
            "definitions": [{ "text": "Stagañ gerioù pe frazennoù.", "examples": ["Kafe ha te."] }]
        },
        {
            "word": "met",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "❓",
            "form": "conjunction",
            "definitions": [{ "text": "Diskouez an enebiezh.", "examples": ["Plijout a ra din ar c'hafe, met pas al laezh."] }]
        }
    ];
    const lang = "br";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
