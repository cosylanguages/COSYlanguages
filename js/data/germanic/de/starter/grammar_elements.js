(function() {
    const data = [
        {
            "word": "ich",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "pronoun",
            "definitions": [{ "text": "Erste Person Singular.", "examples": ["Ich bin Student."] }]
        },
        {
            "word": "du",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "pronoun",
            "definitions": [{ "text": "Zweite Person Singular.", "examples": ["Wie geht es dir?"] }]
        },
        {
            "word": "er",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👨",
            "form": "pronoun",
            "definitions": [{ "text": "Dritte Person Singular (maskulin).", "examples": ["Er ist mein Bruder."] }]
        },
        {
            "word": "sie",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👩",
            "form": "pronoun",
            "definitions": [{ "text": "Dritte Person Singular (feminin).", "examples": ["Sie ist meine Schwester."] }]
        },
        {
            "word": "wir",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Erste Person Plural.", "examples": ["Wir sind Freunde."] }]
        },
        {
            "word": "sie",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Dritte Person Plural.", "examples": ["Sie arbeiten zusammen."] }]
        },
        {
            "word": "mein",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "determiner",
            "definitions": [{ "text": "Zeigt Besitz an (ich).", "examples": ["Mein Name ist Hans."] }]
        },
        {
            "word": "dein",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "determiner",
            "definitions": [{ "text": "Zeigt Besitz an (du).", "examples": ["Ist das dein Telefon?"] }]
        },
        {
            "word": "immer",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "🔄",
            "form": "adverb",
            "definitions": [{ "text": "Zu jeder Zeit.", "examples": ["Ich trinke immer Kaffee."] }]
        },
        {
            "word": "nie",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "❌",
            "form": "adverb",
            "definitions": [{ "text": "Zu keiner Zeit.", "examples": ["Ich komme nie zu spät."] }]
        },
        {
            "word": "und",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "➕",
            "form": "conjunction",
            "definitions": [{ "text": "Verbindet Wörter oder Sätze.", "examples": ["Kaffee und Tee."] }]
        },
        {
            "word": "aber",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "❓",
            "form": "conjunction",
            "definitions": [{ "text": "Zeigt einen Gegensatz an.", "examples": ["Ich mag Kaffee, aber keine Milch."] }]
        }
    ];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
