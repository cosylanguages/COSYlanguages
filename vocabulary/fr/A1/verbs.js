// TODO: verify level classification
(function() {
const data = [
    {
        "word": "être",
        "level": "starter",
        "theme": "name_greeting",
        "emoji": "👤",
        "subtext": "être prêt / être fatigué / être ouvert",
        "synonyms": [
            "à la maison"
        ],
        "form": "verb",
        "transcription": "ɛtʁ",
        "definitions": [
            {
                "text": "Exister ; avoir une qualité ou un état.",
                "examples": [
                    "Je suis fatigué.",
                    "Elle est médecin.",
                    "Nous sommes en retard."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "été",
        "group": "re",
        "auxiliary": "avoir",
        "tenses": {
            "present_simple": {
                "positive": [
                    "suis",
                    "es",
                    "est",
                    "sommes",
                    "êtes",
                    "sont"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "esse",
            "origin_meaning": "to be"
        },
        "id": "fr_starter_verbs_001",
        "lang": "fr"
    },
    {
        "word": "avoir",
        "level": "starter",
        "theme": "work",
        "emoji": "👜",
        "subtext": "avoir un travail / avoir déjeuner / avoir un problème",
        "form": "verb",
        "transcription": "avwaʁ",
        "definitions": [
            {
                "text": "Posséder quelque chose ; éprouver quelque chose.",
                "examples": [
                    "J ai un travail.",
                    "Il a une voiture.",
                    "Elle a mal à la tête."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "eu",
        "group": "ir",
        "auxiliary": "avoir",
        "tenses": {
            "present_simple": {
                "positive": [
                    "ai",
                    "as",
                    "a",
                    "avons",
                    "avez",
                    "ont"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "habere",
            "origin_meaning": "to have"
        },
        "id": "fr_starter_verbs_002",
        "lang": "fr"
    },
    {
        "word": "se sentir",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🌡️",
        "subtext": "se sentir fatigué / se sentir mieux / se sentir bien",
        "form": "verb",
        "transcription": "sə sɑ̃.tiʁ",
        "definitions": [
            {
                "text": "Éprouver une émotion ou une sensation physique.",
                "examples": [
                    "Je me sens fatigué.",
                    "Elle se sent stressée.",
                    "Il se sent mieux."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "senti",
        "group": "ir",
        "auxiliary": "être",
        "reflexive": true,
        "tenses": {
            "present_simple": {
                "positive": [
                    "sens",
                    "sens",
                    "sent",
                    "sentons",
                    "sentez",
                    "sentent"
                ]
            }
        },
        "id": "fr_starter_verbs_003",
        "lang": "fr"
    },
    {
        "word": "donner",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "subtext": "donner des conseils / donner de l argent / donner un cadeau",
        "form": "verb",
        "transcription": "dɔ.ne",
        "definitions": [
            {
                "text": "Remettre ou transférer quelque chose à quelqu un.",
                "examples": [
                    "Il me donne beaucoup de travail.",
                    "Elle donne des conseils."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "donné",
        "group": "er",
        "auxiliary": "avoir",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "donare"
        },
        "id": "fr_starter_verbs_004",
        "lang": "fr",
        "antonyms": [
            "prendre"
        ]
    },
    {
        "word": "prendre",
        "level": "starter",
        "theme": "travel",
        "emoji": "👜",
        "subtext": "prendre le bus / prendre un médicament / prendre une pause",
        "form": "verb",
        "transcription": "pʁɑ̃dʁ",
        "definitions": [
            {
                "text": "Tenir et déplacer quelque chose ; utiliser ou consommer.",
                "examples": [
                    "Je prends le bus pour aller au travail.",
                    "Elle prend des médicaments."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "pris",
        "group": "re",
        "auxiliary": "avoir",
        "tenses": {
            "present_simple": {
                "positive": [
                    "prends",
                    "prends",
                    "prend",
                    "prenons",
                    "prenez",
                    "prennent"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "prehendere"
        },
        "id": "fr_starter_verbs_005",
        "lang": "fr",
        "antonyms": [
            "donner"
        ]
    },
    {
        "word": "obtenir",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "subtext": "obtenir un travail",
        "synonyms": [
            "se fatiguer",
            "s améliorer"
        ],
        "form": "verb",
        "transcription": "ɔb.tə.niʁ",
        "definitions": [
            {
                "text": "Recevoir, obtenir ou devenir.",
                "examples": [
                    "J obtiens un bon salaire.",
                    "Il se fatigue rapidement.",
                    "Elle obtient une promotion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "obtenu",
        "group": "ir",
        "auxiliary": "avoir",
        "id": "fr_starter_verbs_006",
        "lang": "fr"
    },
    {
        "word": "mettre",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "📥",
        "subtext": "mettre",
        "synonyms": [
            "ranger",
            "poser le téléphone"
        ],
        "form": "verb",
        "transcription": "mɛtʁ",
        "definitions": [
            {
                "text": "Placer quelque chose dans une position.",
                "examples": [
                    "Pose ton sac ici.",
                    "Elle met de l argent à la banque."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "mis",
        "group": "re",
        "auxiliary": "avoir",
        "id": "fr_starter_verbs_007",
        "lang": "fr"
    },
    {
        "word": "faire",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "faire du café / faire une erreur",
        "synonyms": [
            "prendre une décision"
        ],
        "form": "verb",
        "transcription": "fɛʁ",
        "definitions": [
            {
                "text": "Créer ou produire quelque chose ; causer.",
                "examples": [
                    "Je fais du café chaque matin.",
                    "Elle prend des décisions rapidement."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fait",
        "group": "re",
        "auxiliary": "avoir",
        "tenses": {
            "present_simple": {
                "positive": [
                    "fais",
                    "fais",
                    "fait",
                    "faisons",
                    "faites",
                    "font"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "facere",
            "origin_meaning": "to do"
        },
        "id": "fr_starter_verbs_008",
        "lang": "fr"
    },
    {
        "word": "faire",
        "level": "starter",
        "theme": "work",
        "emoji": "🛠️",
        "subtext": "faire le travail / faire de l exercice / faire les courses",
        "form": "verb",
        "definitions": [
            {
                "text": "Effectuer une tâche ou une activité.",
                "examples": [
                    "Je fais mon travail.",
                    "Elle fait la cuisine.",
                    "Il ne fait rien."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fait",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "fɛʁ",
        "tenses": {
            "present_simple": {
                "positive": [
                    "fais",
                    "fais",
                    "fait",
                    "faisons",
                    "faites",
                    "font"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "facere"
        },
        "id": "fr_starter_verbs_009",
        "lang": "fr"
    },
    {
        "word": "utiliser",
        "level": "starter",
        "theme": "technology",
        "emoji": "🛠️",
        "subtext": "utiliser un téléphone / utiliser les transports / utiliser un ordinateur",
        "form": "verb",
        "transcription": "y.ti.li.ze",
        "definitions": [
            {
                "text": "Employer quelque chose dans un but précis.",
                "examples": [
                    "J utilise mon téléphone pour tout.",
                    "Elle utilise les transports en commun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "utilisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "utilisant",
        "id": "fr_starter_verbs_010",
        "lang": "fr"
    },
    {
        "word": "ouvrir",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "subtext": "ouvrir une porte / ouvrir un compte / ouvrir à neuf heures",
        "form": "verb",
        "transcription": "u.vʁiʁ",
        "definitions": [
            {
                "text": "Faire en sorte que quelque chose ne soit pas fermé ; commencer.",
                "examples": [
                    "Il ouvre la porte.",
                    "Elle ouvre un compte bancaire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ouvert",
        "group": "ir",
        "auxiliary": "avoir",
        "v4": "ouvrissant",
        "id": "fr_starter_verbs_011",
        "lang": "fr",
        "antonyms": [
            "fermer"
        ]
    },
    {
        "word": "fermer",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "subtext": "fermer une porte / fermer à six heures / fermer la réunion",
        "form": "verb",
        "transcription": "fɛʁ.me",
        "definitions": [
            {
                "text": "Faire en sorte que quelque chose ne soit pas ouvert ; finir.",
                "examples": [
                    "Elle ferme son ordinateur portable.",
                    "La banque ferme à cinq heures."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "fermé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "fermant",
        "id": "fr_starter_verbs_012",
        "lang": "fr",
        "antonyms": [
            "ouvrir"
        ]
    },
    {
        "word": "commencer",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "subtext": "commencer le travail / commencer une réunion / commencer un nouveau travail",
        "form": "verb",
        "transcription": "kɔ.mɑ̃.se",
        "definitions": [
            {
                "text": "Débuter quelque chose.",
                "examples": [
                    "Je commence le travail à huit heures.",
                    "Elle commence un nouveau travail."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "commencé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "commencant",
        "id": "fr_starter_verbs_013",
        "lang": "fr",
        "antonyms": [
            "finir"
        ]
    },
    {
        "word": "finir",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "finir le travail / finir un projet / finir tôt",
        "form": "verb",
        "definitions": [
            {
                "text": "Terminer quelque chose ou s arrêter.",
                "examples": [
                    "Il finit son travail à cinq heures.",
                    "Elle finit le rapport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "fini",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "fi.niʁ",
        "v4": "finissant",
        "id": "fr_starter_verbs_014",
        "lang": "fr",
        "antonyms": [
            "commencer"
        ]
    },
    {
        "word": "aider",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "subtext": "aider quelqu un / aider avec / demander de l aide",
        "form": "verb",
        "definitions": [
            {
                "text": "Aider quelqu un.",
                "examples": [
                    "Il aide ses collègues.",
                    "Peux-tu m aider ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "aidé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "e.de",
        "v4": "aidant",
        "id": "fr_starter_verbs_015",
        "lang": "fr"
    },
    {
        "word": "essayer",
        "level": "starter",
        "theme": "school",
        "emoji": "🎯",
        "subtext": "essayer de faire / essayer fort / essayer quelque chose",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire un effort ; tenter quelque chose.",
                "examples": [
                    "J essaie toujours de faire de mon mieux au travail.",
                    "Essaie le café ici."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "essayé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "e.sɛ.je",
        "v4": "essayant",
        "id": "fr_starter_verbs_016",
        "lang": "fr"
    },
    {
        "word": "montrer",
        "level": "starter",
        "theme": "language",
        "emoji": "📽️",
        "subtext": "montrer à quelqu un / montrer comment / montrer un document",
        "form": "verb",
        "definitions": [
            {
                "text": "Laisser quelqu un voir quelque chose ; expliquer.",
                "examples": [
                    "Elle me montre la carte.",
                    "Il montre son travail."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "montré",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "mɔ̃.tʁe",
        "id": "fr_starter_verbs_017",
        "lang": "fr"
    },
    {
        "word": "trouver",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔍",
        "subtext": "trouver un travail / trouver cela difficile",
        "synonyms": [
            "découvrir"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Découvrir ou localiser quelque chose.",
                "examples": [
                    "Je trouve le travail intéressant.",
                    "Elle a trouvé un nouveau travail."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "trouvé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "tʁu.ve",
        "id": "fr_starter_verbs_018",
        "lang": "fr"
    },
    {
        "word": "garder",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "garder une trace",
        "synonyms": [
            "continuer",
            "rester silencieux"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Continuer à avoir ou à faire quelque chose.",
                "examples": [
                    "Garde le reçu.",
                    "Elle garde son téléphone allumé toute la journée."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "gardé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɡaʁ.de",
        "id": "fr_starter_verbs_019",
        "lang": "fr"
    },
    {
        "word": "perdre",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📉",
        "subtext": "perdre un travail / perdre de l argent / perdre du poids",
        "form": "verb",
        "definitions": [
            {
                "text": "Ne plus avoir quelque chose ; ne pas gagner.",
                "examples": [
                    "J ai perdu mes clés.",
                    "Elle a perdu son travail.",
                    "Il ne perd jamais."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "perdu",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "pɛʁdʁ",
        "id": "fr_starter_verbs_020",
        "lang": "fr",
        "antonyms": [
            "gagner"
        ]
    },
    {
        "word": "couper",
        "level": "starter",
        "theme": "cooking_methods",
        "emoji": "✂️",
        "subtext": "couper en deux",
        "synonyms": [
            "réduire les coûts",
            "réduire les dépenses"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Diviser avec quelque chose de tranchant ; réduire.",
                "examples": [
                    "Elle écourte sa pause déjeuner.",
                    "Cela réduit les coûts."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "coupé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ku.pe",
        "id": "fr_starter_verbs_021",
        "lang": "fr"
    },
    {
        "word": "tourner",
        "level": "starter",
        "theme": "directions_navigation",
        "emoji": "🔄",
        "subtext": "tourner à gauche / tourner à droite",
        "synonyms": [
            "allumer",
            "éteindre"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer dans une direction ; changer d état.",
                "examples": [
                    "Tournez à gauche au bureau.",
                    "Elle éteint la lumière."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "tourné",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "tuʁ.ne",
        "v4": "tournant",
        "id": "fr_starter_verbs_022",
        "lang": "fr"
    },
    {
        "word": "apporter",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🎁",
        "subtext": "apporter quelqu un / apporter de la nourriture / apporter un document",
        "form": "verb",
        "definitions": [
            {
                "text": "Transporter quelque chose vers un lieu.",
                "examples": [
                    "Apportez votre pièce d identité à l entretien.",
                    "Il apporte le déjeuner."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "apporté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.pɔʁ.te",
        "id": "fr_starter_verbs_023",
        "lang": "fr"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🗨️",
        "subtext": "dire bonjour / dire oui / dire non / dire quelque chose",
        "form": "verb",
        "definitions": [
            {
                "text": "Exprimer quelque chose par des mots.",
                "examples": [
                    "Elle dit bonjour chaque matin.",
                    "Il dit que c est bien."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "dit",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "diʁ",
        "tenses": {
            "present_simple": {
                "positive": [
                    "dis",
                    "dis",
                    "dit",
                    "disons",
                    "dites",
                    "disent"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "dicere"
        },
        "id": "fr_starter_verbs_024",
        "lang": "fr"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "dire la vérité / dire à quelqu un",
        "synonyms": [
            "raconter une histoire"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Donner des informations à quelqu un.",
                "examples": [
                    "Il dit la vérité.",
                    "Elle me raconte sa journée."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "dit",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "diʁ",
        "tenses": {
            "present_simple": {
                "positive": [
                    "dis",
                    "dis",
                    "dit",
                    "disons",
                    "dites",
                    "disent"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "dicere"
        },
        "id": "fr_starter_verbs_025",
        "lang": "fr"
    },
    {
        "word": "demander",
        "level": "starter",
        "theme": "language",
        "emoji": "❓",
        "subtext": "demander de l aide / demander à propos de",
        "synonyms": [
            "poser une question"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Poser une question ; faire une requête.",
                "examples": [
                    "Elle pose de bonnes questions.",
                    "Je demande de l aide à mon patron."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "demandé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "də.mɑ̃.de",
        "v4": "demandant",
        "id": "fr_starter_verbs_026",
        "lang": "fr"
    },
    {
        "word": "parler",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🗣️",
        "subtext": "parler à quelqu un / parler une langue / parler clairement",
        "form": "verb",
        "definitions": [
            {
                "text": "Communiquer verbalement ; connaître une langue.",
                "examples": [
                    "Il parle trois langues.",
                    "Elle parle à son manager."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "parlé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "paʁ.le",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "parabolare"
        },
        "id": "fr_starter_verbs_027",
        "lang": "fr"
    },
    {
        "word": "parler",
        "level": "starter",
        "theme": "social",
        "emoji": "💬",
        "subtext": "parler à quelqu un / parler de / parler ouvertement",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir une conversation.",
                "examples": [
                    "Nous parlons du travail chaque lundi.",
                    "Elle parle beaucoup."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "parlé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "paʁ.le",
        "v4": "parlant",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "parabolare"
        },
        "id": "fr_starter_verbs_028",
        "lang": "fr"
    },
    {
        "word": "appeler",
        "level": "starter",
        "theme": "technology",
        "emoji": "📞",
        "subtext": "appeler quelqu un",
        "synonyms": [
            "rappeler",
            "convoquer une réunion"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Téléphoner à quelqu un.",
                "examples": [
                    "J appelle mes clients chaque matin.",
                    "Elle convoque une réunion."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "appelé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.ple",
        "v4": "appelant",
        "id": "fr_starter_verbs_029",
        "lang": "fr"
    },
    {
        "word": "écrire",
        "level": "starter",
        "theme": "school",
        "emoji": "✍️",
        "subtext": "écrire un email / écrire un rapport / écrire une lettre",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre des mots sur du papier ou un écran.",
                "examples": [
                    "J écris des emails toute la journée.",
                    "Elle écrit un rapport chaque vendredi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "écrit",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "e.kʁiʁ",
        "id": "fr_starter_verbs_030",
        "lang": "fr",
        "antonyms": [
            "lire"
        ]
    },
    {
        "word": "lire",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "lire un livre / lire les nouvelles / lire un contrat",
        "form": "verb",
        "definitions": [
            {
                "text": "Regarder et comprendre des mots écrits.",
                "examples": [
                    "Elle lit les nouvelles chaque matin.",
                    "Il lit des contrats."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "lu",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "liʁ",
        "id": "fr_starter_verbs_031",
        "lang": "fr",
        "antonyms": [
            "écrire"
        ]
    },
    {
        "word": "écouter",
        "level": "starter",
        "theme": "school",
        "emoji": "🎧",
        "subtext": "écouter de la musique / écouter attentivement / écouter un podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Prêter attention aux sons ou à la parole.",
                "examples": [
                    "J écoute des podcasts au travail.",
                    "Elle écoute attentivement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "écouté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "e.ku.te",
        "v4": "écoutant",
        "id": "fr_starter_verbs_032",
        "lang": "fr"
    },
    {
        "word": "répondre",
        "level": "starter",
        "theme": "language",
        "emoji": "📞",
        "subtext": "répondre à une question / répondre au téléphone",
        "form": "verb",
        "definitions": [
            {
                "text": "Répondre à une question ou à une communication.",
                "examples": [
                    "Il répond rapidement à tous les emails.",
                    "Elle a répondu au téléphone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "répondu",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "ʁe.pɔ̃dʁ",
        "v4": "répondant",
        "id": "fr_starter_verbs_033",
        "lang": "fr"
    },
    {
        "word": "répéter",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🔁",
        "subtext": "répéter cela / se répéter / répéter une commande",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire ou faire quelque chose à nouveau.",
                "examples": [
                    "Veuillez répéter cela.",
                    "Il a répété l instruction deux fois."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "répété",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁe.pe.te",
        "v4": "répétant",
        "id": "fr_starter_verbs_034",
        "lang": "fr"
    },
    {
        "word": "aller",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "aller au travail / aller à la maison",
        "synonyms": [
            "sortir"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer d un endroit à un autre.",
                "examples": [
                    "Je vais au travail en train.",
                    "Elle part à l étranger chaque année."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "allé",
        "group": "er",
        "auxiliary": "être",
        "transcription": "a.le",
        "tenses": {
            "present_simple": {
                "positive": [
                    "vais",
                    "vas",
                    "va",
                    "allons",
                    "allez",
                    "vont"
                ]
            }
        },
        "id": "fr_starter_verbs_035",
        "lang": "fr"
    },
    {
        "word": "venir",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏃‍♂️",
        "subtext": "rentrer à la maison / venir au travail",
        "synonyms": [
            "revenir"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer vers un lieu.",
                "examples": [
                    "Il vient au bureau à neuf heures.",
                    "Elle rentre tard."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "venu",
        "group": "ir",
        "auxiliary": "être",
        "transcription": "və.niʁ",
        "tenses": {
            "present_simple": {
                "positive": [
                    "viens",
                    "viens",
                    "vient",
                    "venons",
                    "venez",
                    "viennent"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "venire"
        },
        "id": "fr_starter_verbs_036",
        "lang": "fr",
        "antonyms": [
            "aller"
        ]
    },
    {
        "word": "marcher",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚶",
        "subtext": "marcher au travail / marcher vite",
        "synonyms": [
            "rentrer à pied"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer à pied à une vitesse normale.",
                "examples": [
                    "Il marche au travail chaque jour.",
                    "Elle marche pendant le déjeuner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "marché",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "maʁ.ʃe",
        "v4": "marchant",
        "id": "fr_starter_verbs_037",
        "lang": "fr"
    },
    {
        "word": "conduire",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "subtext": "conduire au travail / conduire une voiture",
        "synonyms": [
            "rentrer en voiture"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Faire fonctionner et contrôler un véhicule.",
                "examples": [
                    "Elle conduit une voiture de fonction.",
                    "Il se rend aux réunions en voiture."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "conduit",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "kɔ̃.dɥiʁ",
        "id": "fr_starter_verbs_038",
        "lang": "fr"
    },
    {
        "word": "voler",
        "level": "starter",
        "theme": "travel",
        "emoji": "✈️",
        "subtext": "voler vers une ville / voler en classe affaires",
        "form": "verb",
        "definitions": [
            {
                "text": "Voyager en avion.",
                "examples": [
                    "Elle s envole pour Paris pour des réunions.",
                    "Il déteste prendre l avion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "volé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "vɔ.le",
        "id": "fr_starter_verbs_039",
        "lang": "fr"
    },
    {
        "word": "arriver",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "subtext": "arriver au travail / arriver en retard / arriver à l heure",
        "form": "verb",
        "definitions": [
            {
                "text": "Atteindre une destination.",
                "examples": [
                    "Il arrive au bureau à neuf heures.",
                    "Le train arrive en retard."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "arrivé",
        "group": "er",
        "auxiliary": "être",
        "transcription": "a.ʁi.ve",
        "v4": "arrivant",
        "id": "fr_starter_verbs_040",
        "lang": "fr"
    },
    {
        "word": "partir",
        "level": "starter",
        "theme": "work",
        "emoji": "🚪",
        "subtext": "partir tôt",
        "synonyms": [
            "quitter la maison",
            "quitter le travail"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "S éloigner d un lieu.",
                "examples": [
                    "Je quitte la maison à huit heures.",
                    "Elle a quitté l entreprise l année dernière."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "parti",
        "group": "ir",
        "auxiliary": "être",
        "transcription": "paʁ.ti",
        "id": "fr_starter_verbs_041",
        "lang": "fr"
    },
    {
        "word": "bouger",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📦",
        "subtext": "emménager dans une ville",
        "synonyms": [
            "déménager",
            "continuer"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Changer de position ou de lieu de résidence.",
                "examples": [
                    "Ils ont emménagé dans un nouvel appartement.",
                    "Elle change d équipe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "bougé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "bu.ʒe",
        "v4": "bougant",
        "id": "fr_starter_verbs_042",
        "lang": "fr"
    },
    {
        "word": "revenir",
        "level": "starter",
        "theme": "travel",
        "emoji": "🔙",
        "subtext": "rentrer à la maison",
        "synonyms": [
            "retourner au travail"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Revenir ou retourner dans un lieu.",
                "examples": [
                    "Il revient d un voyage vendredi.",
                    "Elle a rappelé."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "revenu",
        "group": "ir",
        "auxiliary": "être",
        "transcription": "ʁə.və.niʁ",
        "v4": "revenissant",
        "id": "fr_starter_verbs_043",
        "lang": "fr"
    },
    {
        "word": "voyager",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "✈️",
        "subtext": "voyager pour le travail / voyager à l étranger",
        "form": "verb",
        "definitions": [
            {
                "text": "Aller d un endroit à un autre, souvent loin.",
                "examples": [
                    "Elle voyage pour le travail une fois par mois.",
                    "Il adore voyager."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "voyagé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "vwa.ja.ʒe",
        "v4": "voyagant",
        "id": "fr_starter_verbs_044",
        "lang": "fr"
    },
    {
        "word": "manger",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "subtext": "",
        "synonyms": [
            "prendre le petit-déjeuner",
            "déjeuner",
            "dîner"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre de la nourriture dans la bouche et la consommer.",
                "examples": [
                    "Nous déjeunons à une heure.",
                    "Elle mange à son bureau."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "mangé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "mɑ̃.ʒe",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "manducare",
            "origin_meaning": "to chew, eat"
        },
        "id": "fr_starter_verbs_045",
        "lang": "fr",
        "antonyms": [
            "boire"
        ]
    },
    {
        "word": "boire",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "subtext": "boire du café / boire du thé / boire de l eau",
        "form": "verb",
        "definitions": [
            {
                "text": "Avaler un liquide.",
                "examples": [
                    "Elle boit du café chaque matin.",
                    "Je bois de l eau au travail."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "bu",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "bwaʁ",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "bibere",
            "origin_meaning": "to drink"
        },
        "id": "fr_starter_verbs_046",
        "lang": "fr",
        "antonyms": [
            "manger"
        ]
    },
    {
        "word": "dormir",
        "level": "starter",
        "theme": "time",
        "emoji": "😴",
        "subtext": "bien dormir / mal dormir / dormir huit heures",
        "form": "verb",
        "definitions": [
            {
                "text": "Se reposer dans un état d inconscience.",
                "examples": [
                    "Il dort sept heures par nuit.",
                    "Elle dort mal."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "dormi",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "dɔʁ.miʁ",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "dormire",
            "origin_meaning": "to sleep"
        },
        "id": "fr_starter_verbs_047",
        "lang": "fr",
        "antonyms": [
            "se réveiller"
        ]
    },
    {
        "word": "cuisiner",
        "level": "starter",
        "theme": "cooking_methods",
        "emoji": "🍳",
        "subtext": "cuisiner un repas",
        "synonyms": [
            "préparer le dîner"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Préparer de la nourriture en utilisant de la chaleur.",
                "examples": [
                    "Elle prépare le dîner chaque soir.",
                    "Il cuisine pour l équipe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cuisiné",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "kɥi.zi.ne",
        "v4": "cuisinant",
        "id": "fr_starter_verbs_048",
        "lang": "fr"
    },
    {
        "word": "nettoyer",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧹",
        "subtext": "nettoyer l appartement / nettoyer / nettoyer la cuisine",
        "form": "verb",
        "definitions": [
            {
                "text": "Enlever la saleté de quelque chose.",
                "examples": [
                    "Je nettoie l appartement le samedi.",
                    "Il nettoie son bureau tous les jours."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "nettoyé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "nɛ.twa.je",
        "v4": "nettoyant",
        "id": "fr_starter_verbs_049",
        "lang": "fr"
    },
    {
        "word": "porter",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "subtext": "porter un costume / porter des lunettes",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir des vêtements ou des accessoires sur le corps.",
                "examples": [
                    "Elle porte un costume pour le travail.",
                    "Il porte des lunettes."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "porté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pɔʁ.te",
        "id": "fr_starter_verbs_050",
        "lang": "fr"
    },
    {
        "word": "laver",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🧼",
        "subtext": "laver les vêtements / se laver les mains",
        "synonyms": [
            "faire la vaisselle"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Nettoyer quelque chose avec de l eau.",
                "examples": [
                    "Il lave sa voiture tous les dimanches.",
                    "Lave-toi les mains."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "lavé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "la.ve",
        "v4": "lavant",
        "id": "fr_starter_verbs_051",
        "lang": "fr"
    },
    {
        "word": "acheter",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "subtext": "acheter de la nourriture / acheter un billet",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtenir quelque chose en payant de l argent.",
                "examples": [
                    "Elle achète des courses en ligne.",
                    "Il veut acheter un appartement."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "acheté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "aʃ.te",
        "id": "fr_starter_verbs_052",
        "lang": "fr",
        "antonyms": [
            "vendre"
        ]
    },
    {
        "word": "payer",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💳",
        "subtext": "payer une facture / payer le loyer / payer par carte",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner de l argent en échange de quelque chose.",
                "examples": [
                    "Je paie le loyer mensuellement.",
                    "Elle paie par carte."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "payé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pe.je",
        "id": "fr_starter_verbs_053",
        "lang": "fr"
    },
    {
        "word": "dépenser",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💸",
        "subtext": "dépenser de l argent",
        "synonyms": [
            "passer du temps"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser de l argent ou du temps.",
                "examples": [
                    "Il dépense trop en plats à emporter.",
                    "Elle passe du temps dans les transports."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "dépensé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "de.pɑ̃.se",
        "id": "fr_starter_verbs_054",
        "lang": "fr"
    },
    {
        "word": "économiser",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "subtext": "économiser de l argent / économiser pour une maison",
        "form": "verb",
        "definitions": [
            {
                "text": "Garder de l argent plutôt que de le dépenser.",
                "examples": [
                    "Elle économise cent euros par mois.",
                    "Enregistrez votre travail."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "économisé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "e.kɔ.nɔ.mi.ze",
        "v4": "économisant",
        "id": "fr_starter_verbs_055",
        "lang": "fr",
        "antonyms": [
            "dépenser"
        ]
    },
    {
        "word": "travailler",
        "level": "starter",
        "theme": "work",
        "emoji": "💼",
        "subtext": "travailler à domicile / travailler à plein temps",
        "form": "verb",
        "definitions": [
            {
                "text": "Effectuer des tâches pour gagner de l argent.",
                "examples": [
                    "Il travaille à domicile trois jours par semaine.",
                    "Elle travaille dur."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "travaillé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "tʁa.va.je",
        "v4": "travaillant",
        "id": "fr_starter_verbs_056",
        "lang": "fr"
    },
    {
        "word": "vivre",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "subtext": "vivre dans un appartement / vivre seul / vivre avec quelqu un",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir son domicile dans un lieu ; être vivant.",
                "examples": [
                    "Elle vit dans un appartement près du centre.",
                    "Nous vivons ensemble."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "vécu",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "vivʁ",
        "v4": "vivant",
        "id": "fr_starter_verbs_057",
        "lang": "fr",
        "antonyms": [
            "mourir"
        ]
    },
    {
        "word": "penser",
        "level": "starter",
        "theme": "social",
        "emoji": "💭",
        "subtext": "penser à / penser de",
        "synonyms": [
            "réfléchir attentivement"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser l esprit ; avoir une opinion.",
                "examples": [
                    "Je pense que c est une bonne idée.",
                    "Elle pense à démissionner."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "pensé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pɑ̃.se",
        "id": "fr_starter_verbs_058",
        "lang": "fr"
    },
    {
        "word": "savoir",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "savoir comment",
        "synonyms": [
            "connaître quelqu un",
            "connaître la réponse"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir des informations ou être familier avec.",
                "examples": [
                    "Je connais son nom.",
                    "Elle sait comment négocier."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "su",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "sa.vwaʁ",
        "tenses": {
            "present_simple": {
                "positive": [
                    "sais",
                    "sais",
                    "sait",
                    "savons",
                    "savez",
                    "savent"
                ]
            }
        },
        "id": "fr_starter_verbs_059",
        "lang": "fr"
    },
    {
        "word": "vouloir",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🙏",
        "subtext": "vouloir un travail / vouloir faire / vouloir plus",
        "form": "verb",
        "definitions": [
            {
                "text": "Désirer ou souhaiter quelque chose.",
                "examples": [
                    "Je veux un café.",
                    "Elle veut une promotion.",
                    "Il veut prendre sa retraite."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "voulu",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "vu.lwaʁ",
        "tenses": {
            "present_simple": {
                "positive": [
                    "veux",
                    "veux",
                    "veut",
                    "voulons",
                    "voulez",
                    "veulent"
                ]
            }
        },
        "id": "fr_starter_verbs_060",
        "lang": "fr"
    },
    {
        "word": "avoir besoin de",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🆘",
        "subtext": "",
        "synonyms": [
            "besoin d aide",
            "besoin de temps",
            "besoin d argent"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Nécessiter quelque chose.",
                "examples": [
                    "J ai besoin d une pause.",
                    "Elle a besoin de plus de temps.",
                    "Il a besoin d aide."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "eu besoin",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "a.vwaʁ bə.zwɛ̃ də",
        "id": "fr_starter_verbs_061",
        "lang": "fr"
    },
    {
        "word": "aimer",
        "level": "starter",
        "theme": "emotions",
        "emoji": "👍",
        "subtext": "aimer le travail / aimer voyager / aimer quelqu un",
        "form": "verb",
        "definitions": [
            {
                "text": "Trouver quelque chose de plaisant.",
                "examples": [
                    "J aime mon travail.",
                    "Elle aime cuisiner à la maison.",
                    "Il aime le café."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "aimé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɛ.me",
        "v4": "aimant",
        "id": "fr_starter_verbs_062",
        "lang": "fr"
    },
    {
        "word": "adorer",
        "level": "starter",
        "theme": "emotions",
        "emoji": "❤️",
        "subtext": "",
        "synonyms": [
            "aimer quelqu un",
            "aimer faire",
            "aimer un lieu"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir une forte affection pour ; apprécier grandement.",
                "examples": [
                    "Elle adore son travail.",
                    "Il adore voyager pour le travail."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "adoré",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.dɔ.ʁe",
        "v4": "adorant",
        "id": "fr_starter_verbs_063",
        "lang": "fr"
    },
    {
        "word": "détester",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😡",
        "subtext": "détester faire / détester quelqu un / détester les réunions",
        "form": "verb",
        "definitions": [
            {
                "text": "Fortement ne pas aimer.",
                "examples": [
                    "Il déteste faire le trajet en bus.",
                    "She déteste les longues réunions."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "détesté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "de.tɛs.te",
        "v4": "détestant",
        "id": "fr_starter_verbs_064",
        "lang": "fr"
    },
    {
        "word": "espérer",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤞",
        "subtext": "espérer / espérer faire / espérer que",
        "form": "verb",
        "definitions": [
            {
                "text": "Souhaiter que quelque chose se produise.",
                "examples": [
                    "J espère obtenir une promotion cette année.",
                    "Elle espère un meilleur salaire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "espéré",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɛs.pe.ʁe",
        "v4": "espérant",
        "id": "fr_starter_verbs_065",
        "lang": "fr"
    },
    {
        "word": "se souvenir",
        "level": "starter",
        "theme": "school",
        "emoji": "🧠",
        "subtext": "se souvenir de faire / se souvenir d un nom",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir un souvenir de ; ne pas oublier.",
                "examples": [
                    "S il vous plaît, souvenez-vous de la date limite.",
                    "Elle se souvient de chaque client."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "souvenu",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə su.və.niʁ",
        "reflexive": true,
        "v4": "se souvenant",
        "id": "fr_starter_verbs_066",
        "lang": "fr"
    },
    {
        "word": "oublier",
        "level": "starter",
        "theme": "school",
        "emoji": "🤔",
        "subtext": "oublier un nom / oublier de faire / oublier",
        "form": "verb",
        "definitions": [
            {
                "text": "Ne pas se souvenir.",
                "examples": [
                    "N oubliez pas la réunion.",
                    "Il oublie toujours les mots de passe."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "oublié",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "u.bli.je",
        "id": "fr_starter_verbs_067",
        "lang": "fr"
    },
    {
        "word": "comprendre",
        "level": "starter",
        "theme": "language",
        "emoji": "💡",
        "subtext": "comprendre un problème / comprendre quelqu un",
        "form": "verb",
        "definitions": [
            {
                "text": "Saisir le sens de quelque chose.",
                "examples": [
                    "Je comprends le contrat.",
                    "Elle comprend le français."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "compris",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "kɔ̃.pʁɑ̃dʁ",
        "id": "fr_starter_verbs_068",
        "lang": "fr"
    },
    {
        "word": "décider",
        "level": "starter",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "décider de faire / se décider pour",
        "synonyms": [
            "prendre une décision"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Faire un choix.",
                "examples": [
                    "Elle a décidé de changer de carrière.",
                    "Il décide rapidement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "décidé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "de.si.de",
        "v4": "décidant",
        "id": "fr_starter_verbs_069",
        "lang": "fr"
    },
    {
        "word": "apprécier",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "subtext": "apprécier de faire / apprécier un repas / apprécier votre travail",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendre du plaisir à quelque chose.",
                "examples": [
                    "Il apprécie de travailler à domicile.",
                    "Elle apprécie son nouveau rôle."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "apprécié",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.pʁe.sje",
        "v4": "appréciant",
        "id": "fr_starter_verbs_070",
        "lang": "fr"
    },
    {
        "word": "voir",
        "level": "starter",
        "theme": "body",
        "emoji": "👁️",
        "subtext": "voir un médecin / voir des amis / voir le problème",
        "form": "verb",
        "definitions": [
            {
                "text": "Remarquer ou percevoir avec les yeux.",
                "examples": [
                    "Je vois mon médecin demain.",
                    "Elle voit le problème."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "vu",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "vwaʁ",
        "tenses": {
            "present_simple": {
                "positive": [
                    "vois",
                    "vois",
                    "voit",
                    "voyons",
                    "voyez",
                    "voient"
                ]
            }
        },
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "videre",
            "origin_meaning": "to see"
        },
        "id": "fr_starter_verbs_071",
        "lang": "fr"
    },
    {
        "word": "entendre",
        "level": "starter",
        "theme": "body",
        "emoji": "👂",
        "subtext": "entendre des nouvelles / entendre quelqu un / entendre un son",
        "form": "verb",
        "definitions": [
            {
                "text": "Percevoir les sons par les oreilles.",
                "examples": [
                    "J entends l alarme chaque matin.",
                    "Est-ce que tu m entends ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "entendu",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "ɑ̃.tɑ̃dʁ",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "intendere",
            "origin_meaning": "to direct attention"
        },
        "id": "fr_starter_verbs_072",
        "lang": "fr"
    },
    {
        "word": "se réveiller",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "se réveiller tôt / se réveiller à 7h / se réveiller fatigué",
        "definitions": [
            {
                "text": "Arrêter de dormir et ouvrir les yeux.",
                "examples": [
                    "Je me réveille à sept heures.",
                    "À quelle heure te réveilles-tu ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "réveillé",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə ʁe.vɛ.je",
        "reflexive": true,
        "id": "fr_starter_verbs_073",
        "lang": "fr",
        "antonyms": [
            "dormir"
        ]
    },
    {
        "word": "regarder",
        "level": "starter",
        "theme": "social",
        "emoji": "📺",
        "form": "verb",
        "subtext": "regarder la télé / regarder un film",
        "definitions": [
            {
                "text": "Regarder quelque chose pendant une période de temps.",
                "examples": [
                    "Je regarde la télé le soir.",
                    "Ils regardent les oiseaux."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "regardé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁə.ɡaʁ.de",
        "v4": "regardant",
        "id": "fr_starter_verbs_074",
        "lang": "fr"
    },
    {
        "word": "regarder",
        "level": "starter",
        "theme": "people",
        "emoji": "👀",
        "subtext": "regarder",
        "synonyms": [
            "chercher",
            "ressembler à"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Diriger ses yeux vers quelque chose.",
                "examples": [
                    "Regarde cette photo.",
                    "Il cherche ses clés."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v3": "regardé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁə.ɡaʁ.de",
        "v4": "regardant",
        "id": "fr_starter_verbs_075",
        "lang": "fr"
    },
    {
        "word": "jouer",
        "level": "starter",
        "theme": "social",
        "emoji": "🎮",
        "subtext": "jouer au sport / jouer à un jeu / jouer un rôle",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire quelque chose pour s amuser ou dans un jeu.",
                "examples": [
                    "Je joue au football avec mes amis.",
                    "Elle aime jouer aux jeux vidéo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "joué",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʒwe",
        "v4": "jouant",
        "id": "fr_starter_verbs_076",
        "lang": "fr"
    },
    {
        "word": "courir",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏃",
        "subtext": "courir / courir une course",
        "synonyms": [
            "diriger une entreprise"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer très vite sur ses jambes.",
                "examples": [
                    "Je cours dans le parc.",
                    "Il court pour attraper le bus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "couru",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "ku.ʁiʁ",
        "id": "fr_starter_verbs_077",
        "lang": "fr"
    },
    {
        "word": "s asseoir",
        "level": "starter",
        "theme": "work",
        "emoji": "🪑",
        "subtext": "s asseoir / s asseoir à un bureau / s asseoir en réunion",
        "form": "verb",
        "definitions": [
            {
                "text": "Reposer son poids sur ses fesses plutôt que sur ses pieds.",
                "examples": [
                    "Assieds-toi, s il vous plaît.",
                    "Je suis assis sur une chaise."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "assis",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "sa.swwaʁ",
        "id": "fr_starter_verbs_078",
        "lang": "fr",
        "antonyms": [
            "se tenir debout"
        ]
    },
    {
        "word": "se tenir debout",
        "level": "starter",
        "theme": "work",
        "emoji": "🧍",
        "subtext": "se tenir debout",
        "synonyms": [
            "se lever",
            "être debout"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Être sur ses pieds dans une position verticale.",
                "examples": [
                    "Lève-toi, s il vous plaît.",
                    "Elle se tient près de la porte."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "tenu debout",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə tə.niʁ də.bu",
        "reflexive": true,
        "id": "fr_starter_verbs_079",
        "lang": "fr",
        "antonyms": [
            "s asseoir"
        ]
    },
    {
        "word": "rencontrer",
        "level": "starter",
        "theme": "work",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Voir et parler à quelqu un pour la première fois.",
                "examples": [
                    "Enchanté de vous rencontrer.",
                    "Nous nous rencontrons tous les vendredis."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "rencontré",
        "subtext": "rencontrer quelqu un / rencontrer pour le déjeuner",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁɑ̃.kɔ̃.tʁe",
        "id": "fr_starter_verbs_080",
        "lang": "fr"
    },
    {
        "word": "apprendre",
        "level": "starter",
        "theme": "school",
        "emoji": "📚",
        "subtext": "apprendre / apprendre une langue / apprendre vite",
        "form": "verb",
        "definitions": [
            {
                "text": "Acquérir des connaissances ou une compétence.",
                "examples": [
                    "Je veux apprendre l anglais.",
                    "Les enfants apprennent vite."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v3": "appris",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "a.pʁɑ̃dʁ",
        "id": "fr_starter_verbs_081",
        "lang": "fr"
    },
    {
        "word": "changer",
        "level": "starter",
        "theme": "work",
        "emoji": "🔄",
        "subtext": "changer / changer d avis / changer de plan",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre quelque chose différent.",
                "examples": [
                    "Je veux changer de vêtements.",
                    "Le temps change rapidement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "changé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʃɑ̃.ʒe",
        "v4": "changant",
        "id": "fr_starter_verbs_082",
        "lang": "fr"
    },
    {
        "word": "arrêter",
        "level": "starter",
        "theme": "work",
        "emoji": "🛑",
        "subtext": "arrêter / arrêter de faire / arrêter quelqu un",
        "form": "verb",
        "definitions": [
            {
                "text": "Finir de faire quelque chose ou ne plus bouger.",
                "examples": [
                    "Arrête la voiture.",
                    "Arrête de parler, s il vous plaît."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "arrêté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.ʁɛ.te",
        "v4": "arrêtant",
        "id": "fr_starter_verbs_083",
        "lang": "fr"
    },
    {
        "word": "ajouter",
        "level": "starter",
        "theme": "numbers",
        "emoji": "➕",
        "subtext": "ajouter / ajouter un commentaire / ajouter du sucre",
        "form": "verb",
        "definitions": [
            {
                "text": "Rassembler des éléments pour former un groupe plus vaste.",
                "examples": [
                    "Ajoute du sucre au thé.",
                    "Combien font cinq plus cinq ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "ajouté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.ʒu.te",
        "v4": "ajoutant",
        "id": "fr_starter_verbs_084",
        "lang": "fr"
    },
    {
        "word": "gagner",
        "level": "starter",
        "theme": "social",
        "emoji": "🏆",
        "subtext": "gagner / gagner un prix / gagner un contrat",
        "form": "verb",
        "definitions": [
            {
                "text": "Être le meilleur dans un jeu ou une compétition.",
                "examples": [
                    "Nous voulons gagner le match."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "gagné",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɡa.ɲe",
        "id": "fr_starter_verbs_085",
        "lang": "fr",
        "antonyms": [
            "perdre"
        ]
    },
    {
        "word": "attendre",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "subtext": "attendre / attendre quelqu un / attendre un moment",
        "form": "verb",
        "definitions": [
            {
                "text": "Rester dans un lieu jusqu à ce que quelque chose arrive.",
                "examples": [
                    "Attends le bus ici.",
                    "J attends mon ami."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "attendu",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "a.tɑ̃dʁ",
        "v4": "attendant",
        "id": "fr_starter_verbs_086",
        "lang": "fr"
    },
    {
        "word": "mourir",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "⚰️",
        "subtext": "mourir / mourir de",
        "synonyms": [
            "s éteindre"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Cesser de vivre.",
                "examples": [
                    "Les plantes meurent sans eau."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "mort",
        "group": "ir",
        "auxiliary": "être",
        "transcription": "mu.ʁiʁ",
        "v4": "mourissant",
        "id": "fr_starter_verbs_087",
        "lang": "fr",
        "antonyms": [
            "vivre"
        ]
    },
    {
        "word": "envoyer",
        "level": "starter",
        "theme": "work",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire en sorte que quelque chose aille dans un lieu.",
                "examples": [
                    "J envoie un email chaque matin.",
                    "Peux-tu m envoyer une photo ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "envoyé",
        "subtext": "envoyer / envoyer un email / envoyer un message",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɑ̃.vwa.je",
        "id": "fr_starter_verbs_088",
        "lang": "fr"
    },
    {
        "word": "rester",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏨",
        "subtext": "rester / rester à la maison / séjourner dans un hôtel",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuer d être dans un lieu.",
                "examples": [
                    "Je reste à la maison le dimanche.",
                    "Nous séjournons dans un hôtel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "resté",
        "group": "er",
        "auxiliary": "être",
        "transcription": "ʁɛs.te",
        "v4": "restant",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "restare"
        },
        "id": "fr_starter_verbs_089",
        "lang": "fr"
    },
    {
        "word": "tomber",
        "level": "starter",
        "theme": "nature",
        "emoji": "🍂",
        "subtext": "tomber / tomber amoureux",
        "synonyms": [
            "s endormir"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer vers le bas vers le sol.",
                "examples": [
                    "Les feuilles tombent en automne.",
                    "Attention, ne tombe pas."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "tombé",
        "group": "er",
        "auxiliary": "être",
        "transcription": "tɔ̃.be",
        "id": "fr_starter_verbs_090",
        "lang": "fr"
    },
    {
        "word": "passer",
        "level": "starter",
        "theme": "school",
        "emoji": "🏔️",
        "subtext": "passer / passer un examen / passer le temps",
        "form": "verb",
        "definitions": [
            {
                "text": "Passer devant quelque chose ou réussir un examen.",
                "examples": [
                    "Je passe devant le parc en rentrant chez moi.",
                    "J espère réussir le test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "passé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pa.se",
        "v4": "passant",
        "id": "fr_starter_verbs_091",
        "lang": "fr"
    },
    {
        "word": "vendre",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "subtext": "vendre / vendre en ligne / vendre au marché",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner quelque chose à quelqu un contre de l argent.",
                "examples": [
                    "Ils vendent des fruits au marché."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "vendu",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "vɑ̃dʁ",
        "id": "fr_starter_verbs_092",
        "lang": "fr",
        "antonyms": [
            "acheter"
        ]
    },
    {
        "word": "tirer",
        "level": "starter",
        "theme": "work",
        "emoji": "🚜",
        "subtext": "tirer / tirer la porte",
        "synonyms": [
            "s éloigner"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Déplacer quelque chose vers vous.",
                "examples": [
                    "Tire la porte pour l ouvrir."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "tiré",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ti.ʁe",
        "v4": "tirant",
        "id": "fr_starter_verbs_093",
        "lang": "fr",
        "antonyms": [
            "pousser"
        ]
    },
    {
        "word": "pousser",
        "level": "starter",
        "theme": "work",
        "emoji": "🛒",
        "subtext": "pousser / pousser le bouton / pousser le chariot",
        "form": "verb",
        "definitions": [
            {
                "text": "Éloigner quelque chose de vous.",
                "examples": [
                    "Appuie sur le bouton.",
                    "Je pousse le chariot."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "poussé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pu.se",
        "v4": "poussant",
        "id": "fr_starter_verbs_094",
        "lang": "fr",
        "antonyms": [
            "tirer"
        ]
    },
    {
        "word": "porter",
        "level": "starter",
        "theme": "work",
        "emoji": "🎒",
        "subtext": "porter / porter un sac / porter des notes",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenir quelque chose et le déplacer d un endroit à un autre.",
                "examples": [
                    "Je porte mon sac à l école.",
                    "Peux-tu m aider à porter cette boîte ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "porté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pɔʁ.te",
        "v4": "portant",
        "id": "fr_starter_verbs_095",
        "lang": "fr"
    },
    {
        "word": "casser",
        "level": "starter",
        "theme": "describing",
        "emoji": "💔",
        "subtext": "casser / casser le verre",
        "synonyms": [
            "faire une pause"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Séparer quelque chose en deux ou plusieurs morceaux.",
                "examples": [
                    "Ne casse pas le verre.",
                    "Il s est cassé la jambe."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "cassé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ka.se",
        "id": "fr_starter_verbs_096",
        "lang": "fr"
    },
    {
        "word": "recevoir",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📩",
        "subtext": "recevoir / recevoir un email / recevoir un paiement",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtenir quelque chose que quelqu un vous a donné ou envoyé.",
                "examples": [
                    "Je reçois beaucoup de courrier.",
                    "Elle a reçu un cadeau."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "reçu",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "ʁə.sə.vwaʁ",
        "id": "fr_starter_verbs_097",
        "lang": "fr"
    },
    {
        "word": "être d accord",
        "level": "starter",
        "theme": "social",
        "emoji": "👍",
        "subtext": "être d accord / être d accord avec quelqu un",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir la même opinion que quelqu un.",
                "examples": [
                    "Je suis d accord avec vous.",
                    "Nous sommes d accord sur le plan."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "été d accord",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "ɛtʁə d‿a.kɔʁ",
        "id": "fr_starter_verbs_098",
        "lang": "fr"
    },
    {
        "word": "dessiner",
        "level": "starter",
        "theme": "cinema_film",
        "emoji": "🎨",
        "subtext": "dessiner / dessiner une image / dessiner une ligne",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire une image avec un stylo ou un crayon.",
                "examples": [
                    "J aime dessiner des oiseaux.",
                    "Peux-tu dessiner une carte ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "dessiné",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "de.si.ne",
        "id": "fr_starter_verbs_099",
        "lang": "fr"
    },
    {
        "word": "partager",
        "level": "starter",
        "theme": "social",
        "emoji": "🍕",
        "subtext": "partager / partager une chambre / partager une idée",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner une partie de quelque chose à d autres.",
                "examples": [
                    "Partageons la pizza.",
                    "Je partage une chambre avec mon frère."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "partagé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "paʁ.ta.ʒe",
        "v4": "partagant",
        "id": "fr_starter_verbs_100",
        "lang": "fr"
    },
    {
        "word": "sourire",
        "level": "starter",
        "theme": "people",
        "emoji": "😊",
        "subtext": "sourire / sourire à quelqu un / sourire largement",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire une expression joyeuse avec la bouche.",
                "examples": [
                    "Elle a un beau sourire.",
                    "Souris pour la photo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "souri",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "su.ʁiʁ",
        "v4": "souriant",
        "id": "fr_starter_verbs_101",
        "lang": "fr",
        "antonyms": [
            "pleurer"
        ]
    },
    {
        "word": "pleurer",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😢",
        "subtext": "pleurer / pleurer pour obtenir de l aide / pleurer sur quelque chose",
        "form": "verb",
        "definitions": [
            {
                "text": "Produire des larmes parce qu on est triste ou qu on a mal.",
                "examples": [
                    "Le bébé pleure.",
                    "Ne pleure pas."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "pleuré",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "plœ.ʁe",
        "v4": "pleurant",
        "id": "fr_starter_verbs_102",
        "lang": "fr",
        "antonyms": [
            "sourire"
        ]
    },
    {
        "word": "danser",
        "level": "starter",
        "theme": "music",
        "emoji": "💃",
        "subtext": "danser / danser sur de la musique / aller danser",
        "form": "verb",
        "definitions": [
            {
                "text": "Bouger son corps sur de la musique.",
                "examples": [
                    "J adore danser.",
                    "Ils dansent."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "dansé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "dɑ̃.se",
        "v4": "dansant",
        "id": "fr_starter_verbs_103",
        "lang": "fr"
    },
    {
        "word": "chanter",
        "level": "starter",
        "theme": "music",
        "emoji": "🎤",
        "subtext": "chanter / chanter une chanson / chanter ensemble",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire des sons musicaux avec sa voix.",
                "examples": [
                    "J aime chanter sous la douche.",
                    "Elle chante très bien."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "chanté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʃɑ̃.te",
        "id": "fr_starter_verbs_104",
        "lang": "fr"
    },
    {
        "word": "sauter",
        "level": "starter",
        "theme": "sports",
        "emoji": "🦘",
        "subtext": "sauter / sauter haut / sauter par-dessus",
        "form": "verb",
        "definitions": [
            {
                "text": "Se propulser du sol avec ses jambes.",
                "examples": [
                    "Peux-tu sauter haut ?",
                    "Le chat a sauté sur la table."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sauté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "so.te",
        "v4": "sautant",
        "id": "fr_starter_verbs_105",
        "lang": "fr"
    },
    {
        "word": "nager",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏊",
        "subtext": "nager / aller nager / nager des longueurs",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer dans l eau en utilisant ses bras et ses jambes.",
                "examples": [
                    "Je nage tous les matins.",
                    "Sais-tu nager ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "nagé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "na.ʒe",
        "id": "fr_starter_verbs_106",
        "lang": "fr"
    },
    {
        "word": "étudier",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "subtext": "étudier / étudier l anglais / étudier pour un examen",
        "form": "verb",
        "definitions": [
            {
                "text": "Passer du temps à apprendre un sujet.",
                "examples": [
                    "J étudie l anglais à l école.",
                    "Il étudie pour ses examens."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "étudié",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "e.ty.dje",
        "v4": "étudiant",
        "id": "fr_starter_verbs_107",
        "lang": "fr"
    },
    {
        "word": "enseigner",
        "level": "starter",
        "theme": "school",
        "emoji": "👨‍🏫",
        "subtext": "enseigner / enseigner à quelqu un / enseigner un sujet",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner des connaissances aux autres.",
                "examples": [
                    "J enseigne l anglais.",
                    "Elle enseigne dans une université."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "enseigné",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɑ̃.sɛ.ɲe",
        "id": "fr_starter_verbs_108",
        "lang": "fr"
    },
    {
        "word": "faire le trajet",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "🚆",
        "subtext": "faire le trajet",
        "synonyms": [
            "trajet quotidien",
            "long trajet"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Parcourir une certaine distance entre son domicile et son lieu de travail de façon régulière.",
                "examples": [
                    "Je fais le trajet jusqu à la ville en train."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fait le trajet",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "fɛʁ lə tʁa.ʒɛ",
        "id": "fr_starter_verbs_109",
        "lang": "fr"
    },
    {
        "word": "louer",
        "level": "starter",
        "theme": "travel",
        "emoji": "🏠",
        "subtext": "louer / louer un appartement / louer une chambre",
        "form": "verb",
        "definitions": [
            {
                "text": "Payer de l argent pour utiliser une maison ou un appartement qui appartient à quelqu un d autre.",
                "examples": [
                    "Nous louons un appartement en ville."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "loué",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "lwe",
        "v4": "louant",
        "id": "fr_starter_verbs_110",
        "lang": "fr"
    },
    {
        "word": "s exercer",
        "level": "starter",
        "theme": "social",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire une activité physique pour rester en bonne santé.",
                "examples": [
                    "Je m exerce tous les matins."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "exercé",
        "subtext": "s exercer / s exercer régulièrement / s exercer à la gym",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "s‿ɛɡ.zɛʁ.se",
        "v4": "s exercant",
        "id": "fr_starter_verbs_111",
        "lang": "fr"
    },
    {
        "word": "coûter",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir un certain prix.",
                "examples": [
                    "L appartement coûte cher."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "coûté",
        "subtext": "coûter / coûter cher / coûter de l argent",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ku.te",
        "id": "fr_starter_verbs_112",
        "lang": "fr"
    },
    {
        "word": "inviter",
        "level": "starter",
        "theme": "social",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Demander à quelqu un de venir dans un lieu ou à un événement.",
                "examples": [
                    "J invite des amis pour le dîner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "invité",
        "subtext": "inviter / inviter quelqu un / inviter à dîner",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɛ̃.vi.te",
        "v4": "invitant",
        "id": "fr_starter_verbs_113",
        "lang": "fr"
    },
    {
        "word": "se lever",
        "definitions": [
            {
                "text": "Se lever du lit après le réveil.",
                "examples": [
                    "Il se lève à sept heures et fait du café immédiatement."
                ]
            }
        ],
        "subtext": "se lever tôt / se lever tard / se lever rapidement",
        "classification": "irregular",
        "aspect": "action",
        "v3": "levé",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə lə.ve",
        "reflexive": true,
        "id": "fr_starter_verbs_114",
        "lang": "fr"
    },
    {
        "word": "prendre le petit-déjeuner",
        "definitions": [
            {
                "text": "Prendre le repas du matin.",
                "examples": [
                    "Elle prend toujours son petit-déjeuner avant de quitter la maison."
                ]
            }
        ],
        "subtext": "petit-déjeuner à la maison",
        "synonyms": [
            "sauter le petit-déjeuner"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "pris le petit-déjeuner",
        "theme": "work",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "pʁɑ̃dʁ lə pə.ti de.ʒœ.ne",
        "id": "fr_starter_verbs_115",
        "lang": "fr"
    },
    {
        "word": "revenir",
        "definitions": [
            {
                "text": "Retourner dans un lieu.",
                "examples": [
                    "Elle revient du déjeuner à quatorze heures."
                ]
            }
        ],
        "subtext": "revenir à la maison / revenir tard / revenir de voyage",
        "classification": "irregular",
        "aspect": "action",
        "v3": "revenu",
        "theme": "work",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "ir",
        "auxiliary": "être",
        "transcription": "ʁə.və.niʁ",
        "id": "fr_starter_verbs_116",
        "lang": "fr"
    },
    {
        "word": "se coucher",
        "definitions": [
            {
                "text": "Aller au lit pour dormir.",
                "examples": [
                    "Ils se couchent à onze heures tous les soirs."
                ]
            }
        ],
        "subtext": "se coucher tôt / se coucher tard / se coucher fatigué",
        "classification": "irregular",
        "aspect": "action",
        "v3": "couché",
        "theme": "work",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə ku.ʃe",
        "reflexive": true,
        "id": "fr_starter_verbs_117",
        "lang": "fr"
    },
    {
        "word": "vérifier",
        "definitions": [
            {
                "text": "Examiner ou contrôler quelque chose.",
                "examples": [
                    "Je vérifie mes emails tous les matins."
                ]
            }
        ],
        "subtext": "vérifier ses emails / vérifier les messages / vérifier un document",
        "classification": "regular",
        "aspect": "action",
        "v3": "vérifié",
        "theme": "work",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ve.ʁi.fje",
        "v4": "vérifiant",
        "id": "fr_starter_verbs_118",
        "lang": "fr"
    },
    {
        "word": "répondre",
        "definitions": [
            {
                "text": "Répondre à un message ou à une question.",
                "examples": [
                    "Il répond toujours aux emails le jour même."
                ]
            }
        ],
        "subtext": "répondre à un email / répondre rapidement / répondre à un message",
        "classification": "regular",
        "aspect": "action",
        "v3": "répondu",
        "theme": "work",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "ʁe.pɔ̃dʁ",
        "v4": "répondant",
        "id": "fr_starter_verbs_119",
        "lang": "fr"
    },
    {
        "word": "présenter",
        "definitions": [
            {
                "text": "Montrer ou expliquer quelque chose à un groupe.",
                "examples": [
                    "Elle présente les résultats tous les vendredis après-midi."
                ]
            }
        ],
        "subtext": "présenter un rapport / présenter des idées / présenter à un client",
        "classification": "regular",
        "aspect": "action",
        "v3": "présenté",
        "theme": "work",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pʁe.zɑ̃.te",
        "v4": "présentant",
        "id": "fr_starter_verbs_120",
        "lang": "fr"
    },
    {
        "word": "assister à",
        "definitions": [
            {
                "text": "Aller à un événement ou à une réunion.",
                "examples": [
                    "J assiste à une réunion de direction tous les lundis."
                ]
            }
        ],
        "subtext": "assister à une réunion / assister à un événement",
        "synonyms": [
            "suivre un cours"
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "assisté",
        "theme": "work",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.sis.te a",
        "v4": "assisterant",
        "id": "fr_starter_verbs_121",
        "lang": "fr"
    },
    {
        "word": "gérer",
        "definitions": [
            {
                "text": "Être responsable de personnes ou d une situation.",
                "examples": [
                    "Elle gère une équipe de huit personnes."
                ]
            }
        ],
        "subtext": "gérer une équipe / gérer un projet / gérer son temps",
        "classification": "regular",
        "aspect": "action",
        "v3": "géré",
        "theme": "work",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʒe.ʁe",
        "v4": "gérant",
        "id": "fr_starter_verbs_122",
        "lang": "fr"
    },
    {
        "word": "facturer",
        "definitions": [
            {
                "text": "Demander une somme d argent pour un service.",
                "examples": [
                    "Le mécanicien a facturé trois cents euros."
                ]
            }
        ],
        "subtext": "facturer des frais / facturer un service / facturer un supplément",
        "classification": "regular",
        "aspect": "action",
        "v3": "facturé",
        "theme": "shopping",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "fak.ty.ʁe",
        "v4": "facturant",
        "id": "fr_starter_verbs_123",
        "lang": "fr"
    },
    {
        "word": "avoir les moyens",
        "definitions": [
            {
                "text": "Avoir assez d argent pour quelque chose.",
                "examples": [
                    "Ils n ont pas les moyens d acheter un appartement au centre-ville."
                ]
            }
        ],
        "subtext": "avoir les moyens d acheter une maison / avoir les moyens de voyager",
        "classification": "irregular",
        "aspect": "stative",
        "v3": "eu les moyens",
        "theme": "shopping",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "a.vwaʁ le mwa.jɛ̃",
        "id": "fr_starter_verbs_124",
        "lang": "fr"
    },
    {
        "word": "devoir",
        "definitions": [
            {
                "text": "Être obligé de payer de l argent à quelqu un.",
                "examples": [
                    "Il doit cinquante mille euros à la banque."
                ]
            }
        ],
        "subtext": "devoir de l argent / devoir à quelqu un / devoir beaucoup",
        "classification": "irregular",
        "aspect": "stative",
        "v3": "dû",
        "theme": "shopping",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "də.vwaʁ",
        "tenses": {
            "present_simple": {
                "positive": [
                    "dois",
                    "dois",
                    "doit",
                    "devons",
                    "devez",
                    "doivent"
                ]
            }
        },
        "id": "fr_starter_verbs_125",
        "lang": "fr"
    },
    {
        "word": "gagner",
        "definitions": [
            {
                "text": "Recevoir de l argent pour un travail effectué.",
                "examples": [
                    "Elle gagne un bon salaire en tant que chef de projet."
                ]
            }
        ],
        "subtext": "gagner un salaire / gagner de l argent / gagner plus",
        "classification": "regular",
        "aspect": "action",
        "v3": "gagné",
        "theme": "shopping",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɡa.ɲe",
        "v4": "gagnant",
        "id": "fr_starter_verbs_126",
        "lang": "fr"
    },
    {
        "word": "visiter",
        "definitions": [
            {
                "text": "Aller voir une personne ou un lieu.",
                "examples": [
                    "Elle rend visite à ses parents un week-end sur deux."
                ]
            }
        ],
        "subtext": "rendre visite à la famille / visiter un ami / visiter une ville",
        "classification": "regular",
        "aspect": "action",
        "v3": "visité",
        "theme": "social",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "vi.zi.te",
        "v4": "visitant",
        "id": "fr_starter_verbs_127",
        "lang": "fr"
    },
    {
        "word": "fêter",
        "definitions": [
            {
                "text": "Faire quelque chose d agréable pour une occasion spéciale.",
                "examples": [
                    "Ils fêtent chaque anniversaire de travail ensemble."
                ]
            }
        ],
        "subtext": "fêter un anniversaire / fêter le succès / fêter ensemble",
        "classification": "regular",
        "aspect": "action",
        "v3": "fêté",
        "theme": "social",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "fɛ.te",
        "v4": "fêtant",
        "id": "fr_starter_verbs_128",
        "lang": "fr"
    },
    {
        "word": "recommander",
        "definitions": [
            {
                "text": "Suggérer quelque chose comme étant bon ou approprié.",
                "examples": [
                    "Pouvez-vous recommander un bon restaurant près du bureau ?"
                ]
            }
        ],
        "subtext": "recommander un endroit / recommander quelqu un / recommander un film",
        "classification": "regular",
        "aspect": "action",
        "v3": "recommandé",
        "theme": "social",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁə.kɔ.mɑ̃.de",
        "v4": "recommandant",
        "id": "fr_starter_verbs_129",
        "lang": "fr"
    },
    {
        "word": "faire mal",
        "definitions": [
            {
                "text": "Causer de la douleur ; ou ressentir de la douleur.",
                "examples": [
                    "Mon dos me fait mal après être resté assis toute la journée."
                ]
            }
        ],
        "subtext": "se faire mal au dos / faire mal à quelqu un",
        "synonyms": [
            "ça fait mal"
        ],
        "classification": "irregular",
        "aspect": "both",
        "v3": "fait mal",
        "theme": "health_medicine",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "fɛʁ mal",
        "id": "fr_starter_verbs_130",
        "lang": "fr"
    },
    {
        "word": "se reposer",
        "definitions": [
            {
                "text": "S arrêter de travailler et se détendre pour récupérer de l énergie.",
                "examples": [
                    "Il se repose pendant une heure après le déjeuner chaque jour."
                ]
            }
        ],
        "subtext": "se reposer à la maison / se reposer après le travail / avoir besoin de repos",
        "classification": "regular",
        "aspect": "action",
        "v3": "reposé",
        "theme": "work",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə ʁə.po.ze",
        "reflexive": true,
        "v4": "se reposant",
        "id": "fr_starter_verbs_131",
        "lang": "fr"
    },
    {
        "word": "se rétablir",
        "definitions": [
            {
                "text": "Retrouver une bonne santé après une maladie ou une blessure.",
                "examples": [
                    "Elle se rétablit d une blessure au dos."
                ]
            }
        ],
        "subtext": "se rétablir d une maladie / se rétablir rapidement / se rétablir complètement",
        "classification": "regular",
        "aspect": "action",
        "v3": "rétabli",
        "theme": "health_medicine",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə ʁe.ta.bliʁ",
        "reflexive": true,
        "v4": "se rétablant",
        "id": "fr_starter_verbs_132",
        "lang": "fr"
    },
    {
        "word": "réserver",
        "definitions": [
            {
                "text": "Réserver une place, un billet ou un service à l avance.",
                "examples": [
                    "Je réserve toujours mes hôtels en ligne."
                ]
            }
        ],
        "subtext": "réserver un hôtel / réserver un vol / réserver une table",
        "classification": "regular",
        "aspect": "action",
        "v3": "réservé",
        "theme": "travel",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁe.zɛʁ.ve",
        "v4": "réservant",
        "id": "fr_starter_verbs_133",
        "lang": "fr"
    },
    {
        "word": "faire sa valise",
        "definitions": [
            {
                "text": "Mettre des objets dans un sac ou une valise pour un voyage.",
                "examples": [
                    "Il fait sa valise la veille d un voyage."
                ]
            }
        ],
        "subtext": "faire sa valise / faire des bagages légers",
        "synonyms": [
            "faire son sac"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fait sa valise",
        "theme": "travel",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "fɛʁ sa va.liz",
        "id": "fr_starter_verbs_134",
        "lang": "fr"
    },
    {
        "word": "annuler",
        "definitions": [
            {
                "text": "Décider que quelque chose de prévu n aura pas lieu.",
                "examples": [
                    "Elle a dû annuler son vol pour cause de maladie."
                ]
            }
        ],
        "subtext": "annuler un vol / annuler une réservation / annuler une réunion",
        "classification": "regular",
        "aspect": "action",
        "v3": "annulé",
        "theme": "travel",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.ny.le",
        "v4": "annulant",
        "id": "fr_starter_verbs_135",
        "lang": "fr"
    },
    {
        "word": "manquer",
        "definitions": [
            {
                "text": "Rater un moyen de transport ; ou se sentir triste de l absence.",
                "examples": [
                    "Il a manqué son train et a dû attendre une heure."
                ]
            }
        ],
        "subtext": "manquer un train / manquer un vol / manquer à quelqu un",
        "classification": "regular",
        "aspect": "both",
        "v3": "manqué",
        "theme": "public_transport",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "mɑ̃.ke",
        "v4": "manquant",
        "id": "fr_starter_verbs_136",
        "lang": "fr"
    },
    {
        "word": "commander",
        "level": "starter",
        "theme": "work",
        "emoji": "📦",
        "subtext": "commander à manger / commander une boisson / commander en ligne",
        "form": "verb",
        "definitions": [
            {
                "text": "Demander quelque chose formellement, surtout de la nourriture ou des biens.",
                "examples": [
                    "Je commande toujours mon déjeuner au même endroit près du bureau."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "commandé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "kɔ.mɑ̃.de",
        "v4": "commandant",
        "id": "fr_starter_verbs_137",
        "lang": "fr"
    },
    {
        "word": "expliquer",
        "level": "starter",
        "theme": "work",
        "emoji": "💡",
        "subtext": "expliquer un processus / expliquer clairement / expliquer à quelqu un",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre quelque chose clair en donnant des détails.",
                "examples": [
                    "Il explique toujours le processus aux nouveaux membres de l équipe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "expliqué",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɛks.pli.ke",
        "v4": "expliquant",
        "id": "fr_starter_verbs_138",
        "lang": "fr"
    },
    {
        "word": "remercier",
        "level": "starter",
        "theme": "greetings_social_phrases",
        "emoji": "🙏",
        "subtext": "remercier quelqu un / remercier pour",
        "synonyms": [
            "un grand merci"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Exprimer sa gratitude envers quelqu un.",
                "examples": [
                    "Il a remercié l équipe pour son travail acharné sur le projet."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "remercié",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁə.mɛʁ.sje",
        "v4": "remerciant",
        "id": "fr_starter_verbs_139",
        "lang": "fr"
    },
    {
        "word": "présenter",
        "level": "starter",
        "theme": "name_greeting",
        "emoji": "🤝",
        "subtext": "se présenter / présenter quelqu un / présenter un sujet",
        "form": "verb",
        "definitions": [
            {
                "text": "Présenter quelqu un à une autre personne.",
                "examples": [
                    "Elle s est présentée au début de la réunion."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "présenté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pʁe.zɑ̃.te",
        "v4": "présentant",
        "id": "fr_starter_verbs_140",
        "lang": "fr"
    },
    {
        "word": "se détendre",
        "level": "starter",
        "theme": "social",
        "emoji": "🧘",
        "subtext": "se détendre à la maison / se détendre après le travail / se détendre en vacances",
        "form": "verb",
        "definitions": [
            {
                "text": "S arrêter de travailler et se reposer ; devenir moins tendu.",
                "examples": [
                    "Je me détends le week-end et je ne vérifie jamais mes emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "détendu",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə de.tɑ̃dʁ",
        "reflexive": true,
        "v4": "se détendant",
        "id": "fr_starter_verbs_141",
        "lang": "fr"
    },
    {
        "word": "réparer",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "subtext": "réparer quelque chose / faire réparer",
        "synonyms": [
            "frais de réparation"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Réparer quelque chose qui est cassé.",
                "examples": [
                    "Le propriétaire est lent à réparer les choses dans l appartement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "réparé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁe.pa.ʁe",
        "v4": "réparant",
        "id": "fr_starter_verbs_142",
        "lang": "fr"
    },
    {
        "word": "se passer",
        "level": "starter",
        "theme": "social",
        "emoji": "❔",
        "subtext": "que s est-il passé / arriver à quelqu un",
        "synonyms": [
            "ça arrive"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir lieu ; se produire.",
                "examples": [
                    "Que s est-il passé à la réunion ? Quelque chose a mal tourné."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "passé",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə pa.se",
        "reflexive": true,
        "v4": "se passant",
        "id": "fr_starter_verbs_143",
        "lang": "fr"
    },
    {
        "word": "sembler",
        "level": "starter",
        "theme": "social",
        "emoji": "🎭",
        "subtext": "sembler bien / sembler inquiet / sembler heureux",
        "form": "verb",
        "definitions": [
            {
                "text": "Paraître être quelque chose ; donner une impression.",
                "examples": [
                    "Elle semble très confiante lors des réunions avec les clients."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "semblé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "sɑ̃.ble",
        "v4": "semblant",
        "id": "fr_starter_verbs_144",
        "lang": "fr"
    },
    {
        "word": "vouloir dire",
        "level": "starter",
        "theme": "school",
        "emoji": "❔",
        "subtext": "vouloir dire quelque chose / qu est-ce que ça veut dire",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir une signification particulière ; avoir l intention de.",
                "examples": [
                    "Que veut dire cette clause dans le contrat ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v3": "voulu dire",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "vu.lwaʁ diʁ",
        "id": "fr_starter_verbs_145",
        "lang": "fr"
    },
    {
        "word": "suivre",
        "level": "starter",
        "theme": "work",
        "emoji": "👣",
        "subtext": "suivre les instructions / suivre quelqu un / suivre les actualités",
        "form": "verb",
        "definitions": [
            {
                "text": "Venir après ; obéir à des règles ou à des instructions.",
                "examples": [
                    "Veuillez suivre attentivement les instructions. Il suit les actualités."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "suivi",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "sɥivʁ",
        "v4": "suivant",
        "id": "fr_starter_verbs_146",
        "lang": "fr"
    },
    {
        "word": "continuer",
        "level": "starter",
        "theme": "school",
        "emoji": "⏩",
        "subtext": "continuer à travailler / continuer de faire / continuer une tâche",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuer à faire quelque chose sans s arrêter.",
                "examples": [
                    "Il a continué à travailler après dix-huit heures malgré sa maladie."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "continué",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "kɔ̃.ti.ny.e",
        "v4": "continuant",
        "id": "fr_starter_verbs_147",
        "lang": "fr"
    },
    {
        "word": "croître",
        "level": "starter",
        "theme": "work",
        "emoji": "📈",
        "subtext": "croître rapidement",
        "synonyms": [
            "développer une entreprise",
            "se transformer en"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Augmenter de taille ou de quantité ; se développer.",
                "examples": [
                    "L entreprise a crû de vingt pour cent l année dernière."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "crû",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "kʁwatʁ",
        "id": "fr_starter_verbs_148",
        "lang": "fr"
    },
    {
        "word": "inclure",
        "level": "starter",
        "theme": "shopping",
        "emoji": "➕",
        "subtext": "inclure quelque chose / inclure dans",
        "synonyms": [
            "non inclus"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Faire en sorte que quelque chose fasse partie d un tout.",
                "examples": [
                    "Le prix inclut le petit-déjeuner et le dîner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "inclus",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "ɛ̃.klyʁ",
        "v4": "incluant",
        "id": "fr_starter_verbs_149",
        "lang": "fr"
    },
    {
        "word": "devenir",
        "level": "starter",
        "theme": "work",
        "emoji": "✨",
        "subtext": "devenir manager / devenir populaire / devenir clair",
        "form": "verb",
        "definitions": [
            {
                "text": "Commencer à être quelque chose.",
                "examples": [
                    "Elle est devenue manager après seulement deux ans à ce poste."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "devenu",
        "group": "ir",
        "auxiliary": "être",
        "transcription": "də.və.niʁ",
        "id": "fr_starter_verbs_150",
        "lang": "fr"
    },
    {
        "word": "appartenir",
        "level": "starter",
        "theme": "work",
        "emoji": "📎",
        "subtext": "appartenir à quelqu un / appartenir à",
        "synonyms": [
            "avoir sa place"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Être la propriété de quelqu un ; être membre.",
                "examples": [
                    "Ce compte appartient au service financier."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v3": "appartenu",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "a.paʁ.tə.niʁ",
        "v4": "appartenissant",
        "id": "fr_starter_verbs_151",
        "lang": "fr"
    },
    {
        "word": "choisir",
        "level": "starter",
        "theme": "social",
        "emoji": "👉",
        "subtext": "choisir entre / choisir de faire / choisir avec soin",
        "form": "verb",
        "definitions": [
            {
                "text": "Sélectionner parmi des options.",
                "examples": [
                    "Il a choisi de travailler à temps partiel pour passer plus de temps avec sa famille."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "choisi",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "ʃwa.ziʁ",
        "id": "fr_starter_verbs_152",
        "lang": "fr"
    },
    {
        "word": "construire",
        "level": "starter",
        "theme": "work",
        "emoji": "🏗️",
        "subtext": "construire une carrière / construire une équipe",
        "synonyms": [
            "instaurer la confiance"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Construire quelque chose ; développer quelque chose avec le temps.",
                "examples": [
                    "Elle s est construit une solide réputation en dix ans."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "construit",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "kɔ̃s.tʁɥiʁ",
        "id": "fr_starter_verbs_153",
        "lang": "fr"
    },
    {
        "word": "commencer",
        "level": "starter",
        "theme": "work",
        "emoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Commencer à faire quelque chose.",
                "examples": [
                    "Nous commençons la réunion à neuf heures."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "commencé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "kɔ.mɑ̃.se",
        "v4": "commencant",
        "id": "fr_starter_verbs_154",
        "lang": "fr"
    },
    {
        "word": "finir",
        "level": "starter",
        "theme": "work",
        "emoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Terminer ; s'arrêter.",
                "examples": [
                    "Le cours finit à trois heures."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "fini",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "fi.niʁ",
        "id": "fr_starter_verbs_155",
        "lang": "fr"
    },
    {
        "word": "brosser",
        "level": "starter",
        "theme": "work",
        "emoji": "🪥",
        "form": "verb",
        "definitions": [
            {
                "text": "Nettoyer quelque chose avec une brosse.",
                "examples": [
                    "Je me brosse les dents chaque matin."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "brossé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "bʁɔ.se",
        "v4": "brossant",
        "id": "fr_starter_verbs_156",
        "lang": "fr"
    },
    {
        "word": "monter",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚲",
        "form": "verb",
        "definitions": [
            {
                "text": "Voyager à vélo ou à cheval.",
                "examples": [
                    "Je vais au travail à vélo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "monté",
        "group": "er",
        "auxiliary": "être",
        "transcription": "mɔ̃.te",
        "v4": "montant",
        "id": "fr_starter_verbs_157",
        "lang": "fr"
    },
    {
        "word": "rêver",
        "level": "starter",
        "theme": "work",
        "emoji": "💭",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir des images ou des idées en tête pendant le sommeil.",
                "examples": [
                    "J'ai rêvé de vacances la nuit dernière."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "rêvé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁɛ.ve",
        "v4": "rêvant",
        "id": "fr_starter_verbs_158",
        "lang": "fr"
    },
    {
        "word": "croire",
        "level": "starter",
        "theme": "social",
        "emoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "Penser que quelque chose est vrai.",
                "examples": [
                    "Je vous crois."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "cru",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "kʁwaʁ",
        "id": "fr_starter_verbs_159",
        "lang": "fr"
    },
    {
        "word": "préférer",
        "level": "starter",
        "theme": "social",
        "emoji": "👉",
        "form": "verb",
        "definitions": [
            {
                "text": "Aimer une chose plus qu'une autre.",
                "examples": [
                    "Je préfère le thé au café."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "préféré",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pʁe.fe.ʁe",
        "v4": "préférant",
        "id": "fr_starter_verbs_160",
        "lang": "fr"
    },
    {
        "word": "attraper",
        "level": "starter",
        "theme": "public_transport",
        "emoji": "🧤",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendre quelque chose ; monter dans un bus ou un train.",
                "examples": [
                    "Je dois attraper le bus à huit heures."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "attrapé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.tʁa.pe",
        "v4": "attrapant",
        "id": "fr_starter_verbs_161",
        "lang": "fr"
    },
    {
        "word": "réparer",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Réparer quelque chose qui est cassé.",
                "examples": [
                    "Peux-tu réparer mon téléphone ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "réparé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁe.pa.ʁe",
        "v4": "réparant",
        "id": "fr_starter_verbs_162",
        "lang": "fr"
    },
    {
        "word": "créer",
        "level": "starter",
        "theme": "work",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire quelque chose de nouveau.",
                "examples": [
                    "Elle crée de beaux sites web."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "créé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "kʁe.e",
        "v4": "créant",
        "id": "fr_starter_verbs_163",
        "lang": "fr"
    },
    {
        "word": "remarquer",
        "level": "starter",
        "theme": "social",
        "emoji": "👀",
        "form": "verb",
        "definitions": [
            {
                "text": "Voir ou devenir conscient de quelque chose.",
                "examples": [
                    "As-tu remarqué le nouveau bureau ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "remarqué",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʁə.maʁ.ke",
        "v4": "remarquant",
        "id": "fr_starter_verbs_164",
        "lang": "fr"
    },
    {
        "word": "améliorer",
        "level": "starter",
        "theme": "school",
        "emoji": "📈",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre quelque chose meilleur.",
                "examples": [
                    "Je veux améliorer mon français."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "amélioré",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "a.me.ljo.ʁe",
        "v4": "améliorant",
        "id": "fr_starter_verbs_165",
        "lang": "fr"
    },
    {
        "word": "préparer",
        "level": "starter",
        "theme": "cooking_methods",
        "emoji": "🥘",
        "form": "verb",
        "definitions": [
            {
                "text": "Préparer quelque chose.",
                "examples": [
                    "Il prépare le dîner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "préparer",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pʁe.pa.ʁe",
        "v4": "préparant",
        "id": "fr_starter_verbs_166",
        "lang": "fr"
    },
    {
        "word": "organiser",
        "level": "starter",
        "theme": "work",
        "emoji": "📂",
        "form": "verb",
        "definitions": [
            {
                "text": "Planifier ou arranger quelque chose.",
                "examples": [
                    "Elle organise toutes les réunions."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "organisé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɔʁ.ɡa.ni.ze",
        "v4": "organisant",
        "id": "fr_starter_verbs_167",
        "lang": "fr"
    },
    {
        "word": "planifier",
        "level": "starter",
        "theme": "work",
        "emoji": "📅",
        "form": "verb",
        "definitions": [
            {
                "text": "Décider de ce que vous allez faire.",
                "examples": [
                    "Nous planifions un voyage."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "planifié",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pla.ni.fje",
        "v4": "planifiant",
        "id": "fr_starter_verbs_168",
        "lang": "fr"
    },
    {
        "word": "emprunter",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📥",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendre quelque chose pour un court moment puis le rendre.",
                "examples": [
                    "Puis-je emprunter ton stylo ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "emprunté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɑ̃.pʁœ̃.te",
        "v4": "empruntant",
        "id": "fr_starter_verbs_169",
        "lang": "fr"
    },
    {
        "word": "prêter",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📤",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner quelque chose pour un court moment.",
                "examples": [
                    "Je peux te prêter de l'argent."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "prêté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pʁɛ.te",
        "v4": "prêtant",
        "id": "fr_starter_verbs_170",
        "lang": "fr"
    },
    {
        "word": "sentir",
        "level": "starter",
        "theme": "body",
        "emoji": "👃",
        "form": "verb",
        "definitions": [
            {
                "text": "Remarquer ou reconnaître quelque chose avec le nez.",
                "examples": [
                    "Je sens l'odeur du café."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "senti",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "sɑ̃.tiʁ",
        "id": "fr_starter_verbs_171",
        "lang": "fr"
    },
    {
        "word": "goûter",
        "level": "starter",
        "theme": "tastes_textures",
        "emoji": "👅",
        "form": "verb",
        "definitions": [
            {
                "text": "Sentir la saveur de quelque chose dans la bouche.",
                "examples": [
                    "Goûte cette soupe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "goûté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɡu.te",
        "v4": "goûtant",
        "id": "fr_starter_verbs_172",
        "lang": "fr"
    },
    {
        "word": "s'allonger",
        "level": "starter",
        "theme": "work",
        "emoji": "🛌",
        "form": "verb",
        "definitions": [
            {
                "text": "Être en position horizontale sur une surface.",
                "examples": [
                    "J'aime m'allonger sur la plage."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "allongé",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sa.lɔ̃.ʒe",
        "reflexive": true,
        "v4": "s'allongant",
        "id": "fr_starter_verbs_173",
        "lang": "fr"
    },
    {
        "word": "rire",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😂",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire des sons avec sa voix parce que l'on pense que quelque chose est drôle.",
                "examples": [
                    "Ils riaient de sa blague."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "ri",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "ʁiʁ",
        "id": "fr_starter_verbs_174",
        "lang": "fr"
    },
    {
        "word": "s'inquiéter",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😟",
        "form": "verb",
        "definitions": [
            {
                "text": "Penser à des problèmes ou à des choses désagréables qui pourraient arriver.",
                "examples": [
                    "Ne t'inquiète pas, tout ira bien."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "inquiété",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sɛ̃.kje.te",
        "reflexive": true,
        "v4": "s'inquiétant",
        "id": "fr_starter_verbs_175",
        "lang": "fr"
    },
    {
        "word": "sonner",
        "level": "starter",
        "theme": "social",
        "emoji": "👂",
        "form": "verb",
        "definitions": [
            {
                "text": "Sembler être quelque chose d'après ce que vous avez entendu ou lu.",
                "examples": [
                    "Cela semble être une bonne idée."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sonné",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "sɔ.ne",
        "v4": "sonnant",
        "id": "fr_starter_verbs_176",
        "lang": "fr"
    },
    {
        "word": "épeler",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🔤",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire ou écrire les lettres d'un mot dans le bon ordre.",
                "examples": [
                    "Comment épelles-tu ton nom ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "épelé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "e.pə.le",
        "v4": "épelant",
        "id": "fr_starter_verbs_177",
        "lang": "fr"
    },
    {
        "word": "pointer",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "☝️",
        "form": "verb",
        "definitions": [
            {
                "text": "Montrer quelque chose en tendant le doigt vers lui.",
                "examples": [
                    "Pointe la fenêtre du doigt."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "pointé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "pwɛ̃.te",
        "v4": "pointant",
        "id": "fr_starter_verbs_178",
        "lang": "fr"
    },
    {
        "word": "crier",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "📢",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire quelque chose très fort.",
                "examples": [
                    "Ne crie pas dans la classe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "crié",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "kʁi.je",
        "v4": "criant",
        "id": "fr_starter_verbs_179",
        "lang": "fr"
    },
    {
        "word": "saluer",
        "level": "starter",
        "theme": "name_greeting",
        "emoji": "👋",
        "form": "verb",
        "definitions": [
            {
                "text": "Bouger la main d'un côté à l'autre pour dire bonjour ou au revoir.",
                "examples": [
                    "Salue ton ami de la main."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "salué",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "sa.lɥe",
        "v4": "saluant",
        "id": "fr_starter_verbs_180",
        "lang": "fr"
    },
    {
        "word": "donner un coup de pied",
        "level": "starter",
        "theme": "sports",
        "emoji": "🦶",
        "form": "verb",
        "definitions": [
            {
                "text": "Frapper quelque chose avec le pied.",
                "examples": [
                    "Donne un coup de pied dans le ballon !"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "donné un coup de pied",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "dɔ.ne œ̃ ku də pje",
        "id": "fr_starter_verbs_181",
        "lang": "fr"
    },
    {
        "word": "jeter",
        "level": "starter",
        "theme": "sports",
        "emoji": "⚾",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire bouger quelque chose dans l'air en le poussant de la main.",
                "examples": [
                    "Peux-tu me jeter le ballon ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "jeté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʒə.te",
        "v4": "jetant",
        "id": "fr_starter_verbs_182",
        "lang": "fr"
    },
    {
        "word": "rebondir",
        "level": "starter",
        "theme": "sports",
        "emoji": "🏀",
        "form": "verb",
        "definitions": [
            {
                "text": "Remonter ou s'éloigner après avoir frappé une surface.",
                "examples": [
                    "Le ballon rebondit."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "rebondi",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "ʁə.bɔ̃.diʁ",
        "id": "fr_starter_verbs_183",
        "lang": "fr"
    },
    {
        "word": "peindre",
        "level": "starter",
        "theme": "hobbies_interests",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire une image en utilisant de la peinture.",
                "examples": [
                    "J'aime peindre des fleurs."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "peint",
        "group": "re",
        "auxiliary": "avoir",
        "transcription": "pɛ̃dʁ",
        "id": "fr_starter_verbs_184",
        "lang": "fr"
    },
    {
        "word": "sautiller",
        "level": "starter",
        "theme": "social",
        "emoji": "🐇",
        "form": "verb",
        "definitions": [
            {
                "text": "Sauter sur un pied.",
                "examples": [
                    "Peux-tu sautiller comme un lapin ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sautillé",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "so.ti.je",
        "v4": "sautillant",
        "id": "fr_starter_verbs_185",
        "lang": "fr"
    },
    {
        "word": "sauter",
        "level": "starter",
        "theme": "social",
        "emoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer en sautant d'un pied sur l'autre.",
                "examples": [
                    "Les enfants sautent à la corde dans la cour de récréation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sauté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "so.te",
        "v4": "sautant",
        "id": "fr_starter_verbs_186",
        "lang": "fr"
    },
    {
        "word": "compter",
        "level": "starter",
        "theme": "numbers_0_9",
        "emoji": "🔢",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire les nombres dans l'ordre.",
                "examples": [
                    "Peux-tu compter de un à dix ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "compté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "kɔ̃.te",
        "v4": "comptant",
        "id": "fr_starter_verbs_187",
        "lang": "fr"
    },
    {
        "word": "cocher",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "✅",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre une marque (v) à côté de quelque chose pour montrer que c'est correct.",
                "examples": [
                    "Coche la bonne réponse."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "coché",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "kɔ.ʃe",
        "v4": "cochant",
        "id": "fr_starter_verbs_188",
        "lang": "fr"
    },
    {
        "word": "barrer",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "❌",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre une marque (X) à côté de quelque chose pour montrer que c'est faux.",
                "examples": [
                    "Barre la mauvaise réponse."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "barré",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ba.ʁe",
        "v4": "barrant",
        "id": "fr_starter_verbs_189",
        "lang": "fr"
    },
    {
        "word": "colorier",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🖍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser un stylo ou un crayon pour mettre de la couleur sur une image.",
                "examples": [
                    "Colorie l'image en bleu."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "colorié",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "kɔ.lɔ.ʁje",
        "v4": "coloriant",
        "id": "fr_starter_verbs_190",
        "lang": "fr"
    },
    {
        "word": "tenir",
        "level": "starter",
        "theme": "work",
        "emoji": "🤲",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir ou garder quelque chose dans ses mains ou ses bras.",
                "examples": [
                    "Tiens le bébé avec précaution."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "tenu",
        "group": "ir",
        "auxiliary": "avoir",
        "transcription": "tə.niʁ",
        "id": "fr_starter_verbs_191",
        "lang": "fr"
    },
    {
        "word": "mener",
        "level": "starter",
        "theme": "work",
        "emoji": "👤",
        "form": "verb",
        "definitions": [
            {
                "text": "Contrôler un groupe de personnes, un pays ou une situation.",
                "examples": [
                    "Elle mène une petite équipe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "mené",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "mə.ne",
        "v4": "menant",
        "id": "fr_starter_verbs_192",
        "lang": "fr"
    },
    {
        "word": "se battre",
        "level": "starter",
        "theme": "emotions",
        "emoji": "⚔️",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser la force physique pour essayer de blesser quelqu'un ou de gagner quelque chose.",
                "examples": [
                    "Les deux garçons se battent."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "battu",
        "group": "er",
        "auxiliary": "être",
        "transcription": "sə batʁ",
        "reflexive": true,
        "id": "fr_starter_verbs_193",
        "lang": "fr"
    },
    {
        "word": "cacher",
        "level": "starter",
        "theme": "social",
        "emoji": "🙈",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre quelque chose ou quelqu'un dans un endroit où on ne peut pas le voir.",
                "examples": [
                    "Il se cache derrière la porte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "caché",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ka.ʃe",
        "v4": "cachant",
        "id": "fr_starter_verbs_194",
        "lang": "fr"
    },
    {
        "word": "chercher",
        "level": "starter",
        "theme": "social",
        "emoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "Essayer de trouver ou d'obtenir quelque chose.",
                "examples": [
                    "Ils jouent à cache-cache."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "cherché",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʃɛʁ.ʃe",
        "v4": "cherchant",
        "id": "fr_starter_verbs_195",
        "lang": "fr"
    },
    {
        "word": "sonner",
        "level": "starter",
        "theme": "technology",
        "emoji": "🔔",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire un bruit comme une cloche.",
                "examples": [
                    "Le téléphone sonne."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "sonné",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "sɔ.ne",
        "v4": "sonnant",
        "id": "fr_starter_verbs_196",
        "lang": "fr"
    },
    {
        "word": "envoyer un SMS",
        "level": "starter",
        "theme": "using_smartphone",
        "emoji": "📱",
        "form": "verb",
        "definitions": [
            {
                "text": "Envoyer un message depuis un téléphone mobile.",
                "examples": [
                    "Envoie-moi un SMS quand tu arrives."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "envoyé un SMS",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ɑ̃.vwa.je œ̃ ɛs.ɛm.ɛs",
        "id": "fr_starter_verbs_197",
        "lang": "fr"
    },
    {
        "word": "chuchoter",
        "level": "starter",
        "theme": "classroom_language",
        "emoji": "🤫",
        "form": "verb",
        "definitions": [
            {
                "text": "Parler très bas pour que les autres ne puissent pas entendre.",
                "examples": [
                    "Elle m'a chuchoté la réponse."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "chuchoté",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "ʃy.ʃɔ.te",
        "v4": "chuchotant",
        "id": "fr_starter_verbs_198",
        "lang": "fr"
    },
    {
        "word": "toucher",
        "level": "starter",
        "theme": "five_senses",
        "emoji": "🫫",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre sa main ou une autre partie de son corps sur quelque chose.",
                "examples": [
                    "Ne touche pas à la peinture fraîche !"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "touché",
        "group": "er",
        "auxiliary": "avoir",
        "transcription": "tu.ʃe",
        "v4": "touchant",
        "id": "fr_starter_verbs_199",
        "lang": "fr"
    },
    {
        "word": "allumer",
        "level": "starter",
        "theme": "technology",
        "emoji": "💡",
        "form": "verb",
        "transcription": "aly.me",
        "definitions": [
            {
                "text": "Mettre en marche un appareil ou une lumière.",
                "examples": [
                    "Allume la lumière, s'il te plaît.",
                    "Il allume son ordinateur à neuf heures."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "allumé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "allumant",
        "id": "fr_starter_verbs_200",
        "lang": "fr",
        "antonyms": [
            "éteindre"
        ]
    },
    {
        "word": "éteindre",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌑",
        "form": "verb",
        "transcription": "e.tɛ̃dʁ",
        "definitions": [
            {
                "text": "Cesser de faire fonctionner un appareil ou une lumière.",
                "examples": [
                    "N'oublie pas d'éteindre les lumières.",
                    "Elle éteint son téléphone pendant les réunions."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "éteint",
        "group": "re",
        "auxiliary": "avoir",
        "id": "fr_starter_verbs_201",
        "lang": "fr",
        "antonyms": [
            "allumer"
        ]
    },
    {
        "word": "respirer",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🫁",
        "form": "verb",
        "transcription": "ʁɛs.pi.ʁe",
        "definitions": [
            {
                "text": "Prendre de l'air dans les poumons et le rejeter.",
                "examples": [
                    "Respire profondément.",
                    "Il est difficile de respirer ici."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "respiré",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "respirant",
        "id": "fr_starter_verbs_202",
        "lang": "fr"
    },
    {
        "word": "tousser",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "😷",
        "form": "verb",
        "transcription": "tu.se",
        "definitions": [
            {
                "text": "Expulser l'air des poumons avec un bruit soudain.",
                "examples": [
                    "Il tousse parce qu'il a un rhume.",
                    "Arrête de tousser !"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "toussé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "toussant",
        "id": "fr_starter_verbs_203",
        "lang": "fr"
    },
    {
        "word": "éternuer",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🤧",
        "form": "verb",
        "transcription": "e.tɛʁ.nye",
        "definitions": [
            {
                "text": "Expulser l'air par le nez et la bouche de façon soudaine et bruyante.",
                "examples": [
                    "À tes souhaits ! Tu as éternué ?",
                    "Je n'arrête pas d'éternuer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "éternué",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "éternuant",
        "id": "fr_starter_verbs_204",
        "lang": "fr"
    },
    {
        "word": "produire",
        "level": "starter",
        "theme": "work_employment",
        "form": "verb",
        "transcription": "pʁɔ.dɥiʁ",
        "group": "re",
        "classification": "irregular",
        "v3": "produit",
        "auxiliary": "avoir",
        "subtext": "produire un effet",
        "definitions": [
            {
                "text": "Créer ou fabriquer quelque chose.",
                "examples": [
                    "Cette usine produit des voitures."
                ]
            }
        ],
        "id": "fr_starter_verbs_205",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "projeter",
        "level": "starter",
        "theme": "work_employment",
        "form": "verb",
        "transcription": "pʁɔ.ʒte",
        "group": "er",
        "classification": "regular",
        "v3": "projeté",
        "auxiliary": "avoir",
        "subtext": "projeter un film",
        "definitions": [
            {
                "text": "Former le projet de faire quelque chose.",
                "examples": [
                    "Nous projetons de partir en voyage."
                ]
            }
        ],
        "v4": "projetant",
        "id": "fr_starter_verbs_206",
        "lang": "fr",
        "emoji": "✨"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();