(function() {
    const data = [
        {
            "word": "yo",
            "etymology": {
                "origin_lang": "Latin",
                "origin_word": "ego",
                "origin_meaning": "I"
            },
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "pronoun",
            "definitions": [{ "text": "Primera persona del singular.", "examples": ["Yo soy estudiante."] }]
        },
        {
            "word": "tú",
            "etymology": {
                "origin_lang": "Latin",
                "origin_word": "tu",
                "origin_meaning": "thou"
            },
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "pronoun",
            "definitions": [{ "text": "Segunda persona del singular.", "examples": ["¿Cómo estás tú?"] }]
        },
        {
            "word": "él",
            "etymology": {
                "origin_lang": "Latin",
                "origin_word": "ille",
                "origin_meaning": "that"
            },
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👨",
            "form": "pronoun",
            "definitions": [{ "text": "Tercera persona del singular (masculino).", "examples": ["Él es mi hermano."] }]
        },
        {
            "word": "ella",
            "etymology": {
                "origin_lang": "Latin",
                "origin_word": "illa",
                "origin_meaning": "that (feminine)"
            },
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👩",
            "form": "pronoun",
            "definitions": [{ "text": "Tercera persona del singular (femenino).", "examples": ["Ella es mi hermana."] }]
        },
        {
            "word": "nosotros",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Primera persona del plural.", "examples": ["Nosotros somos amigos."] }]
        },
        {
            "word": "ellos",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Tercera persona del plural.", "examples": ["Ellos trabajan juntos."] }]
        },
        {
            "word": "mi",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "determiner",
            "definitions": [{ "text": "Indica posesión (yo).", "examples": ["Mi nombre es Juan."] }]
        },
        {
            "word": "tu",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "determiner",
            "definitions": [{ "text": "Indica posesión (tú).", "examples": ["¿Es tu teléfono?"] }]
        },
        {
            "word": "siempre",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "🔄",
            "form": "adverb",
            "definitions": [{ "text": "En todo momento.", "examples": ["Siempre bebo café."] }]
        },
        {
            "word": "nunca",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "❌",
            "form": "adverb",
            "definitions": [{ "text": "En ningún momento.", "examples": ["Nunca llego tarde."] }]
        },
        {
            "word": "y",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "➕",
            "form": "conjunction",
            "definitions": [{ "text": "Une palabras o frases.", "examples": ["Café y té."] }]
        },
        {
            "word": "pero",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "❓",
            "form": "conjunction",
            "definitions": [{ "text": "Indica contraste.", "examples": ["Me gusta el café, pero no la leche."] }]
        }
    ];
    const lang = "es";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
