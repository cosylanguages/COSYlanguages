(function() {
    const data = [
    {
        "word": "ordinateur portable",
        "level": "starter",
        "theme": "technology",
        "article": "l'",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ordinateurs portables",
        "definitions": [
            {
                "text": "Petit ordinateur que l'on transporte.",
                "examples": [
                    "J'utilise mon ordinateur portable."
                ]
            }
        ],
        "transcription": "ɔʁ.di.na.tœʁ pɔʁ.tabl",
        "id": "fr_starter_technology_001",
        "lang": "fr"
    },
    {
        "word": "appareil photo",
        "level": "starter",
        "theme": "technology",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "appareils photo",
        "definitions": [
            {
                "text": "Appareil pour prendre des photos.",
                "examples": [
                    "J'ai un nouvel appareil photo."
                ]
            }
        ],
        "transcription": "a.pa.ʁɛj fo.to",
        "id": "fr_starter_technology_002",
        "lang": "fr"
    },
    {
        "word": "ordinateur",
        "level": "starter",
        "theme": "technology",
        "article": "l'",
        "gender": "masculine",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ordinateurs",
        "definitions": [
            {
                "text": "Machine électronique pour travailler.",
                "examples": [
                    "Mon ordinateur est rapide."
                ]
            }
        ],
        "transcription": "ɔʁ.di.na.tœʁ",
        "id": "fr_starter_technology_003",
        "lang": "fr"
    },
    {
        "word": "message",
        "level": "starter",
        "theme": "technology",
        "article": "le",
        "gender": "masculine",
        "emoji": "✉️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "messages",
        "definitions": [
            {
                "text": "Information envoyée.",
                "examples": [
                    "J'ai un message pour toi."
                ]
            }
        ],
        "transcription": "me.saʒ",
        "id": "fr_starter_technology_004",
        "lang": "fr"
    },
    {
        "word": "email",
        "level": "starter",
        "theme": "technology",
        "article": "l'",
        "gender": "masculine",
        "emoji": "📧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "emails",
        "definitions": [
            {
                "text": "Courrier électronique.",
                "examples": [
                    "Je réponds aux emails."
                ]
            }
        ],
        "transcription": "i.mɛl",
        "id": "fr_starter_technology_005",
        "lang": "fr"
    },
    {
        "word": "site web",
        "level": "starter",
        "theme": "technology",
        "article": "le",
        "gender": "masculine",
        "emoji": "🌐",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sites web",
        "definitions": [
            {
                "text": "Pages sur internet.",
                "examples": [
                    "Regarde ce site web."
                ]
            }
        ],
        "transcription": "sit wɛb",
        "id": "fr_starter_technology_006",
        "lang": "fr"
    },
    {
        "word": "mot de passe",
        "level": "starter",
        "theme": "technology",
        "article": "le",
        "gender": "masculine",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mots de passe",
        "definitions": [
            {
                "text": "Code secret.",
                "examples": [
                    "J'ai oublié mon mot de passe."
                ]
            }
        ],
        "transcription": "mo də pas",
        "id": "fr_starter_technology_007",
        "lang": "fr"
    },
    {
        "word": "clavier",
        "level": "starter",
        "theme": "technology",
        "article": "le",
        "gender": "masculine",
        "emoji": "⌨️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "claviers",
        "definitions": [
            {
                "text": "Objet pour taper du texte.",
                "examples": [
                    "Un clavier d'ordinateur."
                ]
            }
        ],
        "transcription": "kla.vje",
        "id": "fr_starter_technology_008",
        "lang": "fr"
    },
    {
        "word": "souris",
        "level": "starter",
        "theme": "technology",
        "article": "la",
        "gender": "feminine",
        "emoji": "🖱️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "souris",
        "definitions": [
            {
                "text": "Objet pour diriger le curseur.",
                "examples": [
                    "La souris est à droite."
                ]
            }
        ],
        "transcription": "su.ʁi",
        "id": "fr_starter_technology_009",
        "lang": "fr"
    },
    {
        "word": "écran",
        "level": "starter",
        "theme": "technology",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🖥️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "écrans",
        "definitions": [
            {
                "text": "Partie de l'ordinateur pour voir.",
                "examples": [
                    "L'écran est grand."
                ]
            }
        ],
        "transcription": "e.kʁɑ̃",
        "id": "fr_starter_technology_010",
        "lang": "fr"
    },
    {
        "word": "télévision",
        "level": "starter",
        "theme": "technology",
        "article": "la",
        "gender": "feminine",
        "emoji": "📺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "télévisions",
        "definitions": [
            {
                "text": "Appareil vidéo.",
                "examples": [
                    "Regarder la télévision."
                ]
            }
        ],
        "transcription": "te.le.vi.zjɔ̃",
        "id": "fr_starter_technology_011",
        "lang": "fr"
    },
    {
        "word": "radio",
        "level": "starter",
        "theme": "technology",
        "article": "la",
        "gender": "feminine",
        "emoji": "📻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "radios",
        "definitions": [
            {
                "text": "Appareil audio.",
                "examples": [
                    "Écouter la radio."
                ]
            }
        ],
        "transcription": "ʁa.djo",
        "id": "fr_starter_technology_012",
        "lang": "fr"
    },
    {
        "word": "téléphone",
        "level": "starter",
        "theme": "technology",
        "article": "le",
        "gender": "masculine",
        "emoji": "📞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "téléphones",
        "definitions": [
            {
                "text": "Appareil pour appeler.",
                "examples": [
                    "Répondre au téléphone."
                ]
            }
        ],
        "transcription": "te.le.fɔn",
        "id": "fr_starter_technology_013",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();