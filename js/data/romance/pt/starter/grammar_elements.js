(function() {
    const data = [
        {
            "word": "eu",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "pronoun",
            "definitions": [{ "text": "Primeira pessoa do singular.", "examples": ["Eu sou estudante."] }]
        },
        {
            "word": "tu",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "pronoun",
            "definitions": [{ "text": "Segunda pessoa do singular.", "examples": ["Como estás tu?"] }]
        },
        {
            "word": "ele",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👨",
            "form": "pronoun",
            "definitions": [{ "text": "Terceira pessoa do singular (masculino).", "examples": ["Ele é meu irmão."] }]
        },
        {
            "word": "ela",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👩",
            "form": "pronoun",
            "definitions": [{ "text": "Terceira pessoa do singular (feminino).", "examples": ["Ela é minha irmã."] }]
        },
        {
            "word": "nós",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Primeira pessoa do plural.", "examples": ["Nós somos amigos."] }]
        },
        {
            "word": "eles",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "👥",
            "form": "pronoun",
            "definitions": [{ "text": "Terceira pessoa do plural.", "examples": ["Eles trabalham juntos."] }]
        },
        {
            "word": "meu",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🙋",
            "form": "determiner",
            "definitions": [{ "text": "Indica posse (eu).", "examples": ["O meu nome é João."] }]
        },
        {
            "word": "teu",
            "level": "starter",
            "theme": "personal_identity_A1",
            "emoji": "🫵",
            "form": "determiner",
            "definitions": [{ "text": "Indica posse (tu).", "examples": ["É o teu telefone?"] }]
        },
        {
            "word": "sempre",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "🔄",
            "form": "adverb",
            "definitions": [{ "text": "Em todos os momentos.", "examples": ["Sempre bebo café."] }]
        },
        {
            "word": "nunca",
            "level": "starter",
            "theme": "frequency_adverbs_A1",
            "emoji": "❌",
            "form": "adverb",
            "definitions": [{ "text": "Em nenhum momento.", "examples": ["Nunca chego atrasado."] }]
        },
        {
            "word": "e",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "➕",
            "form": "conjunction",
            "definitions": [{ "text": "Une palavras ou frases.", "examples": ["Café e chá."] }]
        },
        {
            "word": "mas",
            "level": "starter",
            "theme": "conjunctions_connectors_A1",
            "emoji": "❓",
            "form": "conjunction",
            "definitions": [{ "text": "Indica contraste.", "examples": ["Gosto de café, mas não de leite."] }]
        }
    ];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
