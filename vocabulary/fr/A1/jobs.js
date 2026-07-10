(function() {
    const data = [
    {
        "word": "médecin",
        "level": "starter",
        "theme": "jobs",
        "article": "le",
        "gender": "masculine",
        "numberPlural": "2 médecin",
        "answer": "deux médecins",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "me.dsɛ̃",
        "plural": "médecins",
        "subtext": "voir un médecin, médecin de famille",
        "definitions": [
            {
                "text": "Une personne qui soigne les gens malades.",
                "examples": [
                    "Le médecin travaille à l'hôpital.",
                    "Je dois voir un médecin."
                ]
            }
        ],
        "id": "fr_starter_jobs_001",
        "lang": "fr"
    },
    {
        "word": "professeur",
        "level": "starter",
        "theme": "jobs",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "pʁɔ.fɛ.sœʁ",
        "plural": "professeurs",
        "subtext": "professeur de français, professeur d'école",
        "definitions": [
            {
                "text": "Une personne qui aide à apprendre.",
                "examples": [
                    "Le professeur parle à la classe.",
                    "C'est un bon professeur."
                ]
            }
        ],
        "id": "fr_starter_jobs_002",
        "lang": "fr"
    },
    {
        "word": "patron",
        "level": "starter",
        "theme": "work",
        "article": "le",
        "emoji": "👨‍💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "patrons",
        "definitions": [
            {
                "text": "La personne qui est responsable au travail.",
                "examples": [
                    "Mon patron est très amical."
                ]
            }
        ],
        "transcription": "pa.tʁɔ̃",
        "id": "fr_starter_jobs_003",
        "lang": "fr"
    },
    {
        "word": "collègue",
        "level": "starter",
        "theme": "work",
        "article": "le",
        "emoji": "🧑‍💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "collègues",
        "definitions": [
            {
                "text": "Une personne avec qui vous travaillez.",
                "examples": [
                    "Mes collègues sont serviables."
                ]
            }
        ],
        "transcription": "kɔ.lɛɡ",
        "id": "fr_starter_jobs_004",
        "lang": "fr"
    },
    {
        "word": "réunion",
        "level": "starter",
        "theme": "work",
        "article": "la",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "réunions",
        "subtext": "",
        "synonyms": [
            "rencontre",
            "assemblée"
        ],
        "definitions": [
            {
                "text": "Un moment où les gens se rassemblent pour parler de quelque chose.",
                "examples": [
                    "Nous avons une réunion tous les lundis."
                ]
            }
        ],
        "transcription": "ʁe.y.njɔ̃",
        "id": "fr_starter_jobs_005",
        "lang": "fr"
    },
    {
        "word": "sommeil",
        "level": "starter",
        "theme": "work",
        "article": "le",
        "emoji": "😴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sommeils",
        "definitions": [
            {
                "text": "Le repos naturel dont votre corps a besoin chaque nuit.",
                "examples": [
                    "Je dors huit heures par nuit."
                ]
            }
        ],
        "transcription": "sɔ.mɛj",
        "id": "fr_starter_jobs_006",
        "lang": "fr"
    },
    {
        "word": "infirmier",
        "level": "starter",
        "theme": "jobs",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "infirmiers",
        "definitions": [
            {
                "text": "Personne qui soigne les malades.",
                "examples": [
                    "L'infirmier travaille à l'hôpital."
                ]
            }
        ],
        "transcription": "ɛ̃.fiʁ.mje",
        "id": "fr_starter_jobs_007",
        "lang": "fr"
    },
    {
        "word": "conducteur",
        "level": "starter",
        "theme": "jobs",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "conducteurs",
        "definitions": [
            {
                "text": "Personne qui conduit un véhicule.",
                "examples": [
                    "Le conducteur de bus est sympa."
                ]
            }
        ],
        "transcription": "kɔ̃.dyk.tœʁ",
        "id": "fr_starter_jobs_008",
        "lang": "fr"
    },
    {
        "word": "chef",
        "level": "starter",
        "theme": "jobs",
        "article": "le",
        "gender": "masculine",
        "emoji": "👨‍🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chefs",
        "definitions": [
            {
                "text": "Un cuisinier professionnel.",
                "examples": [
                    "Le chef prépare le repas."
                ]
            }
        ],
        "transcription": "ʃɛf",
        "id": "fr_starter_jobs_009",
        "lang": "fr"
    },
    {
        "word": "directeur",
        "level": "starter",
        "theme": "jobs",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "directeurs",
        "definitions": [
            {
                "text": "Personne qui dirige une équipe.",
                "examples": [
                    "Le directeur est en réunion."
                ]
            }
        ],
        "transcription": "di.ʁɛk.tœʁ",
        "id": "fr_starter_jobs_010",
        "lang": "fr"
    },
    {
        "word": "acteur",
        "level": "starter",
        "theme": "jobs",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎭",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "acteurs",
        "definitions": [
            {
                "text": "Personne qui joue au cinéma.",
                "examples": [
                    "C'est un acteur célèbre."
                ]
            }
        ],
        "transcription": "ak.tœʁ",
        "id": "fr_starter_jobs_011",
        "lang": "fr"
    },
    {
        "word": "artiste",
        "level": "starter",
        "theme": "jobs",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "artistes",
        "definitions": [
            {
                "text": "Personne qui fait de l'art.",
                "examples": [
                    "Elle est une grande artiste."
                ]
            }
        ],
        "transcription": "aʁ.tist",
        "id": "fr_starter_jobs_012",
        "lang": "fr"
    },
    {
        "word": "affaires",
        "level": "starter",
        "theme": "work",
        "article": "les",
        "gender": "feminine",
        "emoji": "💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "affaires",
        "definitions": [
            {
                "text": "Activités commerciales.",
                "examples": [
                    "Il voyage pour les affaires."
                ]
            }
        ],
        "transcription": "a.fɛʁ",
        "id": "fr_starter_jobs_013",
        "lang": "fr"
    },
    {
        "word": "travail",
        "level": "starter",
        "theme": "work",
        "article": "le",
        "gender": "masculine",
        "emoji": "💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "travaux",
        "definitions": [
            {
                "text": "Ce que l'on fait pour gagner sa vie.",
                "examples": [
                    "Je vais au travail."
                ]
            }
        ],
        "transcription": "tʁa.vaj",
        "id": "fr_starter_jobs_014",
        "lang": "fr"
    },
    {
        "word": "boulot",
        "level": "starter",
        "theme": "work",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛠️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boulots",
        "definitions": [
            {
                "text": "Terme familier pour travail.",
                "examples": [
                    "J'ai trop de boulot."
                ]
            }
        ],
        "transcription": "bu.lo",
        "id": "fr_starter_jobs_015",
        "lang": "fr"
    },
    {
        "word": "métier",
        "level": "starter",
        "theme": "jobs",
        "article": "le",
        "gender": "masculine",
        "emoji": "👔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "métiers",
        "definitions": [
            {
                "text": "Profession.",
                "examples": [
                    "Quel est ton métier ?"
                ]
            }
        ],
        "transcription": "me.tje",
        "id": "fr_starter_jobs_016",
        "lang": "fr"
    },
    {
        "word": "entreprise",
        "level": "starter",
        "theme": "work",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "entreprises",
        "definitions": [
            {
                "text": "Société où l'on travaille.",
                "examples": [
                    "Une grande entreprise."
                ]
            }
        ],
        "transcription": "ɑ̃.tʁə.pʁiz",
        "id": "fr_starter_jobs_017",
        "lang": "fr"
    },
    {
        "word": "client",
        "level": "starter",
        "theme": "work",
        "article": "le",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "clients",
        "definitions": [
            {
                "text": "Personne qui achète un service.",
                "examples": [
                    "Le client est content."
                ]
            }
        ],
        "transcription": "kli.jɑ̃",
        "id": "fr_starter_jobs_018",
        "lang": "fr"
    },
    {
        "word": "projet",
        "level": "starter",
        "theme": "work",
        "article": "le",
        "gender": "masculine",
        "emoji": "📊",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "projets",
        "definitions": [
            {
                "text": "Travail que l'on prévoit.",
                "examples": [
                    "Un nouveau projet."
                ]
            }
        ],
        "transcription": "pʁɔ.ʒɛ",
        "id": "fr_starter_jobs_019",
        "lang": "fr"
    },
    {
        "word": "réussite",
        "level": "starter",
        "theme": "work",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "réussites",
        "definitions": [
            {
                "text": "Succès.",
                "examples": [
                    "C'est une réussite."
                ]
            }
        ],
        "transcription": "ʁe.y.sit",
        "id": "fr_starter_jobs_020",
        "lang": "fr"
    },
    {
        "word": "service",
        "level": "starter",
        "theme": "work",
        "article": "le",
        "gender": "masculine",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "services",
        "definitions": [
            {
                "text": "Action d'aider.",
                "examples": [
                    "Un bon service."
                ]
            }
        ],
        "transcription": "sɛʁ.vis",
        "id": "fr_starter_jobs_021",
        "lang": "fr"
    },
    {
        "word": "clientèle",
        "level": "starter",
        "theme": "work",
        "article": "la",
        "gender": "feminine",
        "emoji": "👥",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Ensemble des clients.",
                "examples": [
                    "Une clientèle fidèle."
                ]
            }
        ],
        "transcription": "kli.jɑ̃.tɛl",
        "id": "fr_starter_jobs_022",
        "lang": "fr"
    },
    {
        "word": "pilote",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👨‍✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "pilotes",
        "definitions": [
            {
                "text": "Une personne qui conduit un avion.",
                "examples": [
                    "Le pilote a annoncé l'atterrissage.",
                    "Je veux devenir pilote."
                ]
            }
        ],
        "transcription": "pilɔt",
        "id": "fr_starter_jobs_023",
        "lang": "fr"
    },
    {
        "word": "serveur",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🤵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "serveurs",
        "definitions": [
            {
                "text": "Une personne qui sert de la nourriture et des boissons dans un restaurant.",
                "examples": [
                    "Le serveur apporte le menu.",
                    "Demande le compte au serveur."
                ]
            }
        ],
        "transcription": "sɛʁvœʁ",
        "id": "fr_starter_jobs_024",
        "lang": "fr"
    },
    {
        "word": "dentiste",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🦷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "dentistes",
        "definitions": [
            {
                "text": "Un médecin qui soigne les dents.",
                "examples": [
                    "J'ai un rendez-vous chez le dentiste à trois heures.",
                    "Le dentiste dit que mes dents vont bien."
                ]
            }
        ],
        "transcription": "dɑ̃tist",
        "id": "fr_starter_jobs_025",
        "lang": "fr"
    },
    {
        "word": "policier",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "policiers",
        "definitions": [
            {
                "text": "Un membre de la police.",
                "examples": [
                    "Le policier aide les gens dans la rue.",
                    "Nous avons appelé un policier."
                ]
            }
        ],
        "transcription": "pɔlisje",
        "id": "fr_starter_jobs_026",
        "lang": "fr"
    },
    {
        "word": "pompier",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👨‍🚒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "pompiers",
        "definitions": [
            {
                "text": "Une personne entraînée pour éteindre les incendies.",
                "examples": [
                    "Le pompier est très courageux.",
                    "Les pompiers sont arrivés immédiatement."
                ]
            }
        ],
        "transcription": "pɔ̃pje",
        "id": "fr_starter_jobs_027",
        "lang": "fr"
    },
    {
        "word": "soldat",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🪖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "soldats",
        "definitions": [
            {
                "text": "Une personne qui fait partie d'une armée.",
                "examples": [
                    "Le soldat porte un uniforme.",
                    "Beaucoup de soldats travaillent pour la paix."
                ]
            }
        ],
        "transcription": "sɔlda",
        "id": "fr_starter_jobs_028",
        "lang": "fr"
    },
    {
        "word": "écrivain",
        "level": "starter",
        "theme": "jobs",
        "emoji": "✍️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "l'",
        "plural": "écrivains",
        "definitions": [
            {
                "text": "Une personne qui écrit des livres ou des articles.",
                "examples": [
                    "Mon écrivain préféré est Victor Hugo.",
                    "Il veut être un écrivain célèbre."
                ]
            }
        ],
        "transcription": "ekʁivɛ̃",
        "id": "fr_starter_jobs_029",
        "lang": "fr"
    },
    {
        "word": "ingénieur",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "l'",
        "plural": "ingénieurs",
        "definitions": [
            {
                "text": "Une personne qui conçoit des machines, des bâtiments ou des routes.",
                "examples": [
                    "Mon frère est ingénieur civil.",
                    "L'ingénieur travaille sur le nouveau projet."
                ]
            }
        ],
        "transcription": "ɛ̃ʒenjœʁ",
        "id": "fr_starter_jobs_030",
        "lang": "fr"
    },
    {
        "word": "secrétaire",
        "level": "starter",
        "theme": "jobs",
        "emoji": "⌨️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "gender": "masculine",
        "article": "le",
        "plural": "secrétaires",
        "definitions": [
            {
                "text": "Une personne qui travaille dans un bureau, écrit des lettres et organise des rendez-vous.",
                "examples": [
                    "Le secrétaire répond au téléphone.",
                    "J'ai donné le document au secrétaire."
                ]
            }
        ],
        "transcription": "səkʁetɛʁ",
        "id": "fr_starter_jobs_031",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();