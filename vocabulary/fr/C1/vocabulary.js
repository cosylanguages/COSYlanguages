(function() {
    const lang = "fr";
    const data = [
    {
            "word": "réalité virtuelle",
            "level": "advanced",
            "theme": "technology",
            "emoji": "🥽",
            "form": "noun",
            "classification": "regular",
            "plural": "réalité virtuelles",
            "lang": "fr",
            "id": "fr_advanced_science_tech_society_c1_noun_ralit_virtuelle",
            "transcription": ""
    },
    {
            "word": "développement durable",
            "translation": "sustainable development",
            "level": "advanced",
            "theme": "nature",
            "language": "fr",
            "emoji": "🌱",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Développement qui répond aux besoins du présent sans compromettre l'avenir.",
                            "examples": [
                                    "Le développement durable est essentiel pour notre planète."
                            ]
                    }
            ],
            "transcription": "/de.vlɔp.mɑ̃ dy.ʁabl/",
            "lang": "fr",
            "id": "fr_advanced_nature_noun_dveloppement_durable"
    },
    {
            "word": "télétravail",
            "translation": "teleworking",
            "level": "advanced",
            "theme": "work",
            "language": "fr",
            "emoji": "🏠",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Travail effectué à distance, souvent à domicile.",
                            "examples": [
                                    "Le télétravail est devenu très courant."
                            ]
                    }
            ],
            "transcription": "/te.le.tʁa.vaj/",
            "lang": "fr",
            "id": "fr_advanced_work_noun_tltravail"
    },
    {
            "word": "gastronomie",
            "translation": "gastronomy",
            "level": "advanced",
            "theme": "food_drink",
            "language": "fr",
            "emoji": "🍽️",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Art de faire bonne chère.",
                            "examples": [
                                    "La gastronomie française est mondialement connue."
                            ]
                    }
            ],
            "transcription": "/ɡas.tʁɔ.nɔ.mi/",
            "lang": "fr",
            "id": "fr_advanced_food_noun_gastronomie"
    },
    {
            "word": "itinéraire",
            "translation": "itinerary",
            "level": "advanced",
            "theme": "travel",
            "language": "fr",
            "emoji": "🗺️",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Chemin à suivre pour aller d'un lieu à un autre.",
                            "examples": [
                                    "Quel est votre itinéraire pour le voyage ?"
                            ]
                    }
            ],
            "transcription": "/i.ti.ne.ʁɛʁ/",
            "lang": "fr",
            "id": "fr_advanced_travel_noun_itinraire"
    },
    {
            "word": "bien-être",
            "translation": "well-being",
            "level": "advanced",
            "theme": "health_medicine",
            "language": "fr",
            "emoji": "🧘",
            "form": "noun",
            "definitions": [
                    {
                            "text": "État de satisfaction des besoins du corps et de l'esprit.",
                            "examples": [
                                    "Le yoga favorise le bien-être."
                            ]
                    }
            ],
            "transcription": "/bjɛ̃.nɛtʁ/",
            "lang": "fr",
            "id": "fr_advanced_health_noun_bien-tre"
    },
    {
            "id": "fr_advanced_social_001",
            "word": "l'autonomie",
            "lang": "fr",
            "level": "advanced",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "le droit de se gouverner soi-même ou la liberté personnelle.",
                            "examples": [
                                    "L'autonomie individuelle permet de prendre des décisions cruciales concernant son propre traitement médical."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_advanced_social_002",
            "word": "incurable",
            "lang": "fr",
            "level": "advanced",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qu'on ne peut pas guérir.",
                            "examples": [
                                    "Le patient a été diagnostiqué avec une maladie incurable et évolutive."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_advanced_social_003",
            "word": "l'euthanasie",
            "lang": "fr",
            "level": "advanced",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "acte consistant à donner volontairement la mort à un malade pour abréger ses souffrances.",
                            "examples": [
                                    "Le comité d'éthique a débattu pour savoir si l'euthanasie devait être légalement autorisée sous des critères stricts."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_advanced_social_004",
            "word": "la compassion",
            "lang": "fr",
            "level": "advanced",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "sentiment de pitié et de sympathie face aux souffrances d'autrui.",
                            "examples": [
                                    "Offrir des soins palliatifs réconfortants est un acte de profonde compassion humaine."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_advanced_social_005",
            "word": "la législation",
            "lang": "fr",
            "level": "advanced",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "ensemble des lois d'un pays ou processus d'élaboration des lois.",
                            "examples": [
                                    "Le gouvernement français a travaillé sur cette nouvelle législation pendant plusieurs mois."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_advanced_social_006",
            "word": "le garde-fou",
            "lang": "fr",
            "level": "advanced",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "mesure de sécurité ou de protection destinée à éviter un dérapage.",
                            "examples": [
                                    "La loi prévoit des garde-fous médicaux extrêmement stricts pour éviter toute dérive."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_advanced_social_007",
            "word": "terminal",
            "lang": "fr",
            "level": "advanced",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qui touche à sa fin, en parlant d'une maladie entraînant la mort.",
                            "examples": [
                                    "Les unités de soins palliatifs accompagnent avec humanité les patients en phase terminale."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_advanced_technology_001",
            "word": "palliatif",
            "lang": "fr",
            "level": "advanced",
            "theme": "technology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qui permet de soulager la douleur sans guérir la cause de la maladie.",
                            "examples": [
                                    "La médecine palliative se concentre sur l'amélioration de la qualité de vie des malades."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_advanced_social_008",
            "word": "la dignité",
            "lang": "fr",
            "level": "advanced",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "respect de soi-même et considération que l'on doit à la personne humaine.",
                            "examples": [
                                    "Chaque être humain a le droit de vivre et de mourir dans la dignité."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_advanced_social_009",
            "word": "le consentement",
            "lang": "fr",
            "level": "advanced",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "accord volontaire et éclairé donné à un acte ou une décision.",
                            "examples": [
                                    "L'administration d'une substance létale ne peut se faire qu'avec le consentement explicite du patient."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    }
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(x => x.form === "adjective")];
})();