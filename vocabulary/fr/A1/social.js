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
        "transcription": "/eɡ.zɛʁ.sis/",
        "lang": "fr",
        "id": "fr_starter_social_001"
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
        "transcription": "/tɑ̃ libʁ/",
        "lang": "fr",
        "id": "fr_starter_social_002"
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
        "transcription": "/si.ne.ma/",
        "lang": "fr",
        "id": "fr_starter_places_001"
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
        "transcription": "/my.ze/",
        "lang": "fr",
        "id": "fr_starter_places_002"
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
        "transcription": "/bi.bli.jɔ.tɛk/",
        "lang": "fr",
        "id": "fr_starter_places_003"
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
        "transcription": "/ba.lɔ̃/",
        "lang": "fr",
        "id": "fr_starter_sports_equipment_001"
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
        "transcription": "/aʁ/",
        "lang": "fr",
        "id": "fr_starter_places_004"
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
        "transcription": "/ɡʁup/",
        "lang": "fr",
        "id": "fr_starter_music_001"
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
        "transcription": "/kɔ̃.sɛʁ/",
        "lang": "fr",
        "id": "fr_starter_music_002"
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
        "transcription": "/my.zik/",
        "lang": "fr",
        "id": "fr_starter_music_003"
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
            },
            {
                "word": "guitare",
                "image": "images/vocabulary/actions/to play a musical instrument.png",
                "level": "starter",
                "theme": "music",
                "emoji": "🎸",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Un instrument de musique à cordes dont on joue avec les doigts.",
                        "examples": [
                            "Il joue de la guitare."
                        ]
                    }
                ],
                "transcription": "/ɡi.taʁ/"
            }
        ],
        "transcription": "/ʃɑ̃.sɔ̃/",
        "lang": "fr",
        "id": "fr_starter_music_004"
    },
    {
        "word": "film",
        "level": "starter",
        "theme": "social",
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
        "transcription": "/film/",
        "lang": "fr",
        "id": "fr_starter_social_003"
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
            },
            {
                "word": "échecs",
                "image": "images/vocabulary/actions/to play chess.png",
                "level": "starter",
                "theme": "hobbies_interests",
                "emoji": "♟️",
                "form": "noun",
                "classification": "regular",
                "countability": "countable",
                "definitions": [
                    {
                        "text": "Un jeu pour deux personnes se jouant sur un plateau avec des cases noires et blanches.",
                        "examples": [
                            "Ils jouent aux échecs."
                        ]
                    },
                    {
                        "word": "jeu vidéo",
                        "image": "images/vocabulary/actions/to play video games.png",
                        "level": "starter",
                        "theme": "hobbies_interests",
                        "emoji": "🎮",
                        "form": "noun",
                        "classification": "regular",
                        "countability": "countable",
                        "definitions": [
                            {
                                "text": "Un jeu auquel on joue sur un ordinateur ou une console spéciale.",
                                "examples": [
                                    "Il adore jouer aux jeux vidéo."
                                ]
                            }
                        ],
                        "transcription": "/ʒø vi.de.o/"
                    }
                ],
                "transcription": "/e.ʃɛk/"
            }
        ],
        "transcription": "/fo.to/",
        "lang": "fr",
        "id": "fr_starter_hobbies_interests_001"
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
        "transcription": "/spɔʁ/",
        "lang": "fr",
        "id": "fr_starter_sports_001"
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
        "transcription": "/fut.bal/",
        "lang": "fr",
        "id": "fr_starter_sports_002"
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
        "transcription": "/te.nis/",
        "lang": "fr",
        "id": "fr_starter_sports_003"
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
        "transcription": "/na.ta.sjɔ̃/",
        "lang": "fr",
        "id": "fr_starter_sports_004"
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
        "transcription": "/fɛt/",
        "lang": "fr",
        "id": "fr_starter_social_004"
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
        "transcription": "/va.kɑ̃s/",
        "lang": "fr",
        "id": "fr_starter_social_005"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();