(function() {
    const data = [
    {
        "word": "exercice",
        "level": "starter",
        "theme": "social",
        "article": "l'",
        "emoji": "🏋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "exercices",
        "definitions": [
            {
                "text": "Activité physique qui vous maintient en forme et en bonne santé.",
                "examples": [
                    "Je fais de l'exercice trois fois par semaine."
                ]
            }
        ],
        "transcription": "eɡ.zɛʁ.sis",
        "id": "fr_starter_social_001",
        "lang": "fr"
    },
    {
        "word": "temps libre",
        "level": "starter",
        "theme": "social",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎮",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": null,
        "subtext": "",
        "synonyms": [
            "loisirs",
            "détente"
        ],
        "definitions": [
            {
                "text": "Moment où vous ne travaillez pas et pouvez faire ce que vous voulez.",
                "examples": [
                    "Je lis des livres pendant mon temps libre."
                ]
            }
        ],
        "transcription": "tɑ̃ libʁ",
        "id": "fr_starter_social_002",
        "lang": "fr"
    },
    {
        "word": "cinéma",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cinémas",
        "definitions": [
            {
                "text": "Lieu pour voir des films.",
                "examples": [
                    "Allons au cinéma."
                ]
            }
        ],
        "transcription": "si.ne.ma",
        "id": "fr_starter_social_003",
        "lang": "fr"
    },
    {
        "word": "musée",
        "level": "starter",
        "theme": "places",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "musées",
        "definitions": [
            {
                "text": "Lieu avec des objets d'art.",
                "examples": [
                    "Le musée est grand."
                ]
            }
        ],
        "transcription": "my.ze",
        "id": "fr_starter_social_004",
        "lang": "fr"
    },
    {
        "word": "bibliothèque",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bibliothèques",
        "definitions": [
            {
                "text": "Lieu avec beaucoup de livres.",
                "examples": [
                    "Je vais à la bibliothèque."
                ]
            }
        ],
        "transcription": "bi.bli.jɔ.tɛk",
        "id": "fr_starter_social_005",
        "lang": "fr"
    },
    {
        "word": "ballon",
        "level": "starter",
        "theme": "sports_equipment",
        "article": "le",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ballons",
        "definitions": [
            {
                "text": "Objet rond pour le sport.",
                "examples": [
                    "Jouons au ballon."
                ]
            }
        ],
        "transcription": "ba.lɔ̃",
        "id": "fr_starter_social_006",
        "lang": "fr"
    },
    {
        "word": "art",
        "level": "starter",
        "theme": "places",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "arts",
        "definitions": [
            {
                "text": "Création de belles choses.",
                "examples": [
                    "J'aime l'art moderne."
                ]
            }
        ],
        "transcription": "aʁ",
        "id": "fr_starter_social_007",
        "lang": "fr"
    },
    {
        "word": "groupe",
        "level": "starter",
        "theme": "music",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "groupes",
        "definitions": [
            {
                "text": "Ensemble de musiciens.",
                "examples": [
                    "Un groupe de rock."
                ]
            }
        ],
        "transcription": "ɡʁup",
        "id": "fr_starter_social_008",
        "lang": "fr"
    },
    {
        "word": "concert",
        "level": "starter",
        "theme": "music",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "concerts",
        "definitions": [
            {
                "text": "Spectacle musical.",
                "examples": [
                    "Un concert de piano."
                ]
            }
        ],
        "transcription": "kɔ̃.sɛʁ",
        "id": "fr_starter_social_009",
        "lang": "fr"
    },
    {
        "word": "musique",
        "level": "starter",
        "theme": "music",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "musiques",
        "definitions": [
            {
                "text": "Sons mélodieux.",
                "examples": [
                    "J'écoute de la musique."
                ]
            }
        ],
        "transcription": "my.zik",
        "id": "fr_starter_social_010",
        "lang": "fr"
    },
    {
        "word": "chanson",
        "level": "starter",
        "theme": "music",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chansons",
        "definitions": [
            {
                "text": "Paroles sur de la musique.",
                "examples": [
                    "C'est une belle chanson."
                ]
            }
        ],
        "transcription": "ʃɑ̃.sɔ̃",
        "id": "fr_starter_social_011",
        "lang": "fr"
    },
    {
        "word": "film",
        "level": "starter",
        "theme": "cinema_film",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "films",
        "definitions": [
            {
                "text": "Histoire vue au cinéma.",
                "examples": [
                    "Je regarde un film."
                ]
            }
        ],
        "transcription": "film",
        "id": "fr_starter_social_012",
        "lang": "fr"
    },
    {
        "word": "photo",
        "level": "starter",
        "theme": "hobbies_interests",
        "article": "la",
        "gender": "feminine",
        "emoji": "📷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "photos",
        "definitions": [
            {
                "text": "Image prise par un appareil.",
                "examples": [
                    "Une photo de famille."
                ]
            }
        ],
        "transcription": "fo.to",
        "id": "fr_starter_social_013",
        "lang": "fr"
    },
    {
        "word": "sport",
        "level": "starter",
        "theme": "sports",
        "article": "le",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sports",
        "definitions": [
            {
                "text": "Activité physique.",
                "examples": [
                    "Je fais du sport."
                ]
            }
        ],
        "transcription": "spɔʁ",
        "id": "fr_starter_social_014",
        "lang": "fr"
    },
    {
        "word": "football",
        "level": "starter",
        "theme": "sports",
        "article": "le",
        "gender": "masculine",
        "emoji": "⚽",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Sport avec un ballon rond.",
                "examples": [
                    "Jouons au football."
                ]
            }
        ],
        "transcription": "fut.bal",
        "id": "fr_starter_social_015",
        "lang": "fr"
    },
    {
        "word": "tennis",
        "level": "starter",
        "theme": "sports",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎾",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Sport avec une raquette.",
                "examples": [
                    "Il joue au tennis."
                ]
            }
        ],
        "transcription": "te.nis",
        "id": "fr_starter_social_016",
        "lang": "fr"
    },
    {
        "word": "natation",
        "level": "starter",
        "theme": "sports",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏊",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Fait de nager.",
                "examples": [
                    "J'aime la natation."
                ]
            }
        ],
        "transcription": "na.ta.sjɔ̃",
        "id": "fr_starter_social_017",
        "lang": "fr"
    },
    {
        "word": "fête",
        "level": "starter",
        "theme": "social",
        "article": "la",
        "gender": "feminine",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fêtes",
        "definitions": [
            {
                "text": "Moment pour s'amuser ensemble.",
                "examples": [
                    "Bonne fête !"
                ]
            }
        ],
        "transcription": "fɛt",
        "id": "fr_starter_social_018",
        "lang": "fr"
    },
    {
        "word": "vacances",
        "level": "starter",
        "theme": "social",
        "article": "les",
        "gender": "feminine",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vacances",
        "definitions": [
            {
                "text": "Temps de repos.",
                "examples": [
                    "Partir en vacances."
                ]
            }
        ],
        "transcription": "va.kɑ̃s",
        "id": "fr_starter_social_019",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();