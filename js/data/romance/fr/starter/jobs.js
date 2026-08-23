(function() {
    const lang = "fr";
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
        "lang": "fr",
        "id": "fr_starter_jobs_001"
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
        "lang": "fr",
        "id": "fr_starter_jobs_002"
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
        "transcription": "/pa.tʁɔ̃/",
        "lang": "fr",
        "id": "fr_starter_work_001"
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
        "transcription": "/kɔ.lɛɡ/",
        "lang": "fr",
        "id": "fr_starter_work_002"
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
        "transcription": "/ʁe.y.njɔ̃/",
        "lang": "fr",
        "id": "fr_starter_work_003"
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
        "transcription": "/sɔ.mɛj/",
        "lang": "fr",
        "id": "fr_starter_work_004"
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
        "transcription": "/ɛ̃.fiʁ.mje/",
        "lang": "fr",
        "id": "fr_starter_jobs_003"
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
        "transcription": "/kɔ̃.dyk.tœʁ/",
        "lang": "fr",
        "id": "fr_starter_jobs_004"
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
        "transcription": "/ʃɛf/",
        "lang": "fr",
        "id": "fr_starter_jobs_005"
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
        "transcription": "/di.ʁɛk.tœʁ/",
        "lang": "fr",
        "id": "fr_starter_jobs_006"
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
        "transcription": "/ak.tœʁ/",
        "lang": "fr",
        "id": "fr_starter_jobs_007"
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
        "transcription": "/aʁ.tist/",
        "lang": "fr",
        "id": "fr_starter_jobs_008"
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
        "transcription": "/a.fɛʁ/",
        "lang": "fr",
        "id": "fr_starter_work_005"
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
        "transcription": "/tʁa.vaj/",
        "lang": "fr",
        "id": "fr_starter_work_006"
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
        "transcription": "/bu.lo/",
        "lang": "fr",
        "id": "fr_starter_work_007"
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
        "transcription": "/me.tje/",
        "lang": "fr",
        "id": "fr_starter_jobs_009"
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
        "transcription": "/ɑ̃.tʁə.pʁiz/",
        "lang": "fr",
        "id": "fr_starter_work_008"
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
        "transcription": "/kli.jɑ̃/",
        "lang": "fr",
        "id": "fr_starter_work_009"
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
        "transcription": "/pʁɔ.ʒɛ/",
        "lang": "fr",
        "id": "fr_starter_work_010"
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
        "transcription": "/ʁe.y.sit/",
        "lang": "fr",
        "id": "fr_starter_work_011"
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
        "transcription": "/sɛʁ.vis/",
        "lang": "fr",
        "id": "fr_starter_work_012"
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
        "transcription": "/kli.jɑ̃.tɛl/",
        "lang": "fr",
        "id": "fr_starter_work_013"
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
        "lang": "fr",
        "id": "fr_starter_jobs_010"
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
        "lang": "fr",
        "id": "fr_starter_jobs_011"
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
        "lang": "fr",
        "id": "fr_starter_jobs_012"
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
        "lang": "fr",
        "id": "fr_starter_jobs_013"
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
        "lang": "fr",
        "id": "fr_starter_jobs_014"
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
        "lang": "fr",
        "id": "fr_starter_jobs_015"
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
        "lang": "fr",
        "id": "fr_starter_jobs_016"
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
        "lang": "fr",
        "id": "fr_starter_jobs_017"
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
        "lang": "fr",
        "id": "fr_starter_jobs_018"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
