(function() {
    const lang = "fr";
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
        "transcription": "/ɔʁ.di.na.tœʁ pɔʁ.tabl/",
        "lang": "fr",
        "id": "fr_starter_technology_001"
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
        "transcription": "/a.pa.ʁɛj fo.to/",
        "lang": "fr",
        "id": "fr_starter_technology_002"
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
        "transcription": "/ɔʁ.di.na.tœʁ/",
        "lang": "fr",
        "id": "fr_starter_technology_003"
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
        "transcription": "/me.saʒ/",
        "lang": "fr",
        "id": "fr_starter_technology_004"
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
        "transcription": "/i.mɛl/",
        "lang": "fr",
        "id": "fr_starter_technology_005"
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
        "transcription": "/sit wɛb/",
        "lang": "fr",
        "id": "fr_starter_technology_006"
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
        "transcription": "/mo də pas/",
        "lang": "fr",
        "id": "fr_starter_technology_007"
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
        "transcription": "/kla.vje/",
        "lang": "fr",
        "id": "fr_starter_technology_008"
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
        "transcription": "/su.ʁi/",
        "lang": "fr",
        "id": "fr_starter_technology_009"
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
        "transcription": "/e.kʁɑ̃/",
        "lang": "fr",
        "id": "fr_starter_technology_010"
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
        "transcription": "/te.le.vi.zjɔ̃/",
        "lang": "fr",
        "id": "fr_starter_technology_011"
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
        "transcription": "/ʁa.djo/",
        "lang": "fr",
        "id": "fr_starter_technology_012"
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
        "transcription": "/te.le.fɔn/",
        "lang": "fr",
        "id": "fr_starter_technology_013"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
