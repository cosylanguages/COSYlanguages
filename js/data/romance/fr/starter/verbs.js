(function() {
    const data = [
    {
        "word": "être",
        "level": "baby",
        "theme": "name_greeting_A0",
        "emoji": "👤",
        "subtext": "être prêt / être fatigué / à la maison / être ouvert",
        "form": "verb",
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
        "group": "auxiliary",
        "v3": "été"
    },
    {
        "word": "avoir",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "avoir un travail / avoir déjeuner / avoir un problème / avoir le temps",
        "form": "verb",
        "definitions": [
            {
                "text": "Posséder quelque chose ; éprouver quelque chose.",
                "examples": [
                    "J'ai un travail.",
                    "Il a une voiture.",
                    "Elle a mal à la tête."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "auxiliary",
        "v3": "eu"
    },
    {
        "word": "se sentir",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🌡️",
        "subtext": "se sentir fatigué / se sentir mieux / se sentir bien / se sentir stressé",
        "form": "verb",
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
        "group": "ir",
        "v3": "senti"
    },
    {
        "word": "donner",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "donner des conseils / donner de l'argent / donner un cadeau / donner des informations",
        "form": "verb",
        "definitions": [
            {
                "text": "Remettre ou transférer quelque chose à quelqu'un.",
                "examples": [
                    "Il me donne beaucoup de travail.",
                    "Elle donne des conseils."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "donné"
    },
    {
        "word": "prendre",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "prendre le bus / prendre un médicament / prendre une pause / prendre du temps",
        "form": "verb",
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
        "group": "re",
        "v3": "pris"
    },
    {
        "word": "obtenir",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "obtenir un travail / se fatiguer / s'améliorer / rentrer à la maison",
        "form": "verb",
        "definitions": [
            {
                "text": "Recevoir, obtenir ou devenir.",
                "examples": [
                    "J'obtiens un bon salaire.",
                    "Il se fatigue rapidement.",
                    "Elle obtient une promotion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ir",
        "v3": "obtenu"
    },
    {
        "word": "mettre",
        "level": "baby",
        "theme": "furniture_objects_A0",
        "emoji": "📥",
        "subtext": "mettre / ranger / poser le téléphone / mettre de l'argent de côté",
        "form": "verb",
        "definitions": [
            {
                "text": "Placer quelque chose dans une position.",
                "examples": [
                    "Pose ton sac ici.",
                    "Elle met de l'argent à la banque."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "re",
        "v3": "mis"
    },
    {
        "word": "faire",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "faire du café / prendre une décision / faire une erreur / gagner de l'argent",
        "form": "verb",
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
        "group": "re",
        "v3": "fait"
    },
    {
        "word": "faire",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "faire le travail / faire de l'exercice / faire les courses / ne rien faire",
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
        "group": "re",
        "v3": "fait"
    },
    {
        "word": "utiliser",
        "level": "baby",
        "theme": "basic_technology_devices_A0",
        "emoji": "🛠️",
        "subtext": "utiliser un téléphone / utiliser les transports en commun / utiliser un ordinateur",
        "form": "verb",
        "definitions": [
            {
                "text": "Employer quelque chose dans un but précis.",
                "examples": [
                    "J'utilise mon téléphone pour tout.",
                    "Elle utilise les transports en commun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "utilisé"
    },
    {
        "word": "ouvrir",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "ouvrir une porte / ouvrir un compte / ouvrir à neuf heures",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire en sorte que quelque chose ne soit pas fermé ; commencer.",
                "examples": [
                    "Il ouvre la porte.",
                    "Elle ouvre un compte bancaire."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ir",
        "v3": "ouvert"
    },
    {
        "word": "fermer",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "fermer une porte / fermer à six heures / fermer la réunion",
        "form": "verb",
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
        "group": "er",
        "v3": "fermé"
    },
    {
        "word": "commencer",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "commencer le travail / commencer une réunion / commencer un nouveau travail",
        "form": "verb",
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
        "group": "er",
        "v3": "commencé"
    },
    {
        "word": "finir",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finir le travail / finir un projet / finir tôt",
        "form": "verb",
        "definitions": [
            {
                "text": "Terminer quelque chose ou s'arrêter.",
                "examples": [
                    "Il finit son travail à cinq heures.",
                    "Elle finit le rapport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "ir",
        "v3": "fini"
    },
    {
        "word": "aider",
        "level": "baby",
        "theme": "family_life_A1",
        "emoji": "🤝",
        "subtext": "aider quelqu'un / aider avec / demander de l'aide",
        "form": "verb",
        "definitions": [
            {
                "text": "Aider quelqu'un.",
                "examples": [
                    "Il aide ses collègues.",
                    "Peux-tu m'aider ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "aidé"
    },
    {
        "word": "essayer",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "essayer de faire / essayer fort / essayer quelque chose de nouveau",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire un effort ; tenter quelque chose.",
                "examples": [
                    "J'essaie toujours de faire de mon mieux au travail.",
                    "Essaie le café ici."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "essayé"
    },
    {
        "word": "montrer",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "📽️",
        "subtext": "montrer à quelqu'un / montrer comment / montrer un document",
        "form": "verb",
        "definitions": [
            {
                "text": "Laisser quelqu'un voir quelque chose ; expliquer.",
                "examples": [
                    "Elle me montre la carte.",
                    "Il montre son travail."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "montré"
    },
    {
        "word": "trouver",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "subtext": "trouver un travail / découvrir / trouver cela difficile / trouver du temps",
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
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "trouvé"
    },
    {
        "word": "garder",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "continuer / rester silencieux / garder une trace / rester en contact",
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
        "classification": "regular",
        "aspect": "both",
        "group": "er",
        "v3": "gardé"
    },
    {
        "word": "perdre",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📉",
        "subtext": "perdre un travail / perdre de l'argent / perdre du poids / perdre du temps",
        "form": "verb",
        "definitions": [
            {
                "text": "Ne plus avoir quelque chose ; ne pas gagner.",
                "examples": [
                    "J'ai perdu mes clés.",
                    "Elle a perdu son travail.",
                    "Il ne perd jamais."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "re",
        "v3": "perdu"
    },
    {
        "word": "couper",
        "level": "baby",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "réduire les coûts / réduire les dépenses / écourter / couper en deux",
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
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "coupé"
    },
    {
        "word": "tourner",
        "level": "baby",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "allumer / éteindre / tourner à gauche / tourner à droite",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer dans une direction ; changer d'état.",
                "examples": [
                    "Tournez à gauche au bureau.",
                    "Elle éteint la lumière."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "tourné"
    },
    {
        "word": "apporter",
        "level": "baby",
        "theme": "meals_of_the_day_A0",
        "emoji": "🎁",
        "subtext": "apporter quelqu'un / apporter de la nourriture / apporter un document",
        "form": "verb",
        "definitions": [
            {
                "text": "Transporter quelque chose vers un lieu.",
                "examples": [
                    "Apportez votre pièce d'identité à l'entretien.",
                    "Il apporte le déjeuner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "apporté"
    },
    {
        "word": "dire",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗨️",
        "subtext": "dire bonjour / dire oui / dire non / dire quelque chose",
        "form": "verb",
        "definitions": [
            {
                "text": "Exprimer quelque chose par des mots.",
                "examples": [
                    "Elle dit bonjour chaque matin.",
                    "Il dit que c'est bien."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "re",
        "v3": "dit"
    },
    {
        "word": "dire",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "🗣️",
        "subtext": "dire la vérité / dire à quelqu'un / raconter une histoire",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner des informations à quelqu'un.",
                "examples": [
                    "Il dit la vérité.",
                    "Elle me raconte sa journée."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "re",
        "v3": "dit"
    },
    {
        "word": "demander",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "❓",
        "subtext": "poser une question / demander de l'aide / demander à propos de",
        "form": "verb",
        "definitions": [
            {
                "text": "Poser une question ; faire une requête.",
                "examples": [
                    "Elle pose de bonnes questions.",
                    "Je demande de l'aide à mon patron."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "demandé"
    },
    {
        "word": "parler",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "🗣️",
        "subtext": "parler à quelqu'un / parler une langue / parler clairement",
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
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "parlé"
    },
    {
        "word": "parler",
        "level": "baby",
        "theme": "greetings_social_phrases_A0",
        "emoji": "💬",
        "subtext": "parler à quelqu'un / parler de / parler ouvertement",
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
        "group": "er",
        "v3": "parlé"
    },
    {
        "word": "appeler",
        "level": "baby",
        "theme": "using_a_smartphone_A1",
        "emoji": "📞",
        "subtext": "appeler quelqu'un / rappeler / convoquer une réunion",
        "form": "verb",
        "definitions": [
            {
                "text": "Téléphoner à quelqu'un.",
                "examples": [
                    "J'appelle mes clients chaque matin.",
                    "Elle convoque une réunion."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "appelé"
    },
    {
        "word": "écrire",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "écrire un email / écrire un rapport / écrire une lettre",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre des mots sur du papier ou un écran.",
                "examples": [
                    "J'écris des emails toute la journée.",
                    "Elle écrit un rapport chaque vendredi."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "re",
        "v3": "écrit"
    },
    {
        "word": "lire",
        "level": "baby",
        "theme": "learning_studying_A1",
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
        "group": "re",
        "v3": "lu"
    },
    {
        "word": "écouter",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "écouter de la musique / écouter attentivement / écouter un podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Prêter attention aux sons ou à la parole.",
                "examples": [
                    "J'écoute des podcasts au travail.",
                    "Elle écoute attentivement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "écouté"
    },
    {
        "word": "répondre",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "📞",
        "subtext": "répondre à une question / répondre au téléphone / répondre à un email",
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
        "group": "re",
        "v3": "répondu"
    },
    {
        "word": "répéter",
        "level": "baby",
        "theme": "classroom_language_A0",
        "emoji": "🔁",
        "subtext": "répéter cela / se répéter / répéter une commande",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire ou faire quelque chose à nouveau.",
                "examples": [
                    "Veuillez répéter cela.",
                    "Il a répété l'instruction deux fois."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "répété"
    },
    {
        "word": "aller",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚶",
        "subtext": "aller au travail / aller à la maison / sortir / aller faire du shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer d'un endroit à un autre.",
                "examples": [
                    "Je vais au travail en train.",
                    "Elle part à l'étranger chaque année."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "irregular",
        "v3": "allé"
    },
    {
        "word": "venir",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏃‍♂️",
        "subtext": "rentrer à la maison / revenir / venir au travail / venir ici",
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
        "group": "ir",
        "v3": "venu"
    },
    {
        "word": "marcher",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "marcher au travail / rentrer à pied / marcher vite / marcher chaque jour",
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
        "group": "er",
        "v3": "marché"
    },
    {
        "word": "conduire",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "conduire au travail / conduire une voiture / rentrer en voiture",
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
        "group": "re",
        "v3": "conduit"
    },
    {
        "word": "voler",
        "level": "baby",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "subtext": "voler vers une ville / voler en classe affaires / voler en classe économique",
        "form": "verb",
        "definitions": [
            {
                "text": "Voyager en avion.",
                "examples": [
                    "Elle s'envole pour Paris pour des réunions.",
                    "Il déteste prendre l'avion."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "volé"
    },
    {
        "word": "arriver",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🏁",
        "subtext": "arriver au travail / arriver en retard / arriver à l'heure",
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
        "group": "er",
        "v3": "arrivé"
    },
    {
        "word": "partir",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🚪",
        "subtext": "quitter la maison / quitter le travail / partir tôt / partir tard",
        "form": "verb",
        "definitions": [
            {
                "text": "S'éloigner d'un lieu.",
                "examples": [
                    "Je quitte la maison à huit heures.",
                    "Elle a quitté l'entreprise l'année dernière."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ir",
        "v3": "parti"
    },
    {
        "word": "bouger",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "déménager / emménager dans une ville / continuer / aller de l'avant",
        "form": "verb",
        "definitions": [
            {
                "text": "Changer de position ou de lieu de résidence.",
                "examples": [
                    "Ils ont emménagé dans un nouvel appartement.",
                    "Elle change d'équipe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "bougé"
    },
    {
        "word": "revenir",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "🔙",
        "subtext": "rentrer à la maison / retourner au travail / rendre un appel",
        "form": "verb",
        "definitions": [
            {
                "text": "Revenir ou retourner dans un lieu.",
                "examples": [
                    "Il revient d'un voyage vendredi.",
                    "Elle a rappelé."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ir",
        "v3": "revenu"
    },
    {
        "word": "voyager",
        "level": "baby",
        "theme": "travel_vocabulary_basics_A0",
        "emoji": "✈️",
        "subtext": "voyager pour le travail / voyager à l'étranger / voyager en train",
        "form": "verb",
        "definitions": [
            {
                "text": "Aller d'un endroit à un autre, souvent loin.",
                "examples": [
                    "Elle voyage pour le travail une fois par mois.",
                    "Il adore voyager."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "voyagé"
    },
    {
        "word": "manger",
        "level": "baby",
        "theme": "meals_of_the_day_A0",
        "emoji": "🍎",
        "subtext": "prendre le petit-déjeuner / déjeuner / dîner / manger dehors",
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
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "mangé"
    },
    {
        "word": "boire",
        "level": "baby",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "boire du café / boire du thé / boire de l'eau / boire de l'alcool",
        "form": "verb",
        "definitions": [
            {
                "text": "Avaler un liquide.",
                "examples": [
                    "Elle boit du café chaque matin.",
                    "Je bois de l'eau au travail."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "re",
        "v3": "bu"
    },
    {
        "word": "dormir",
        "level": "baby",
        "theme": "times_day_A0",
        "emoji": "😴",
        "subtext": "bien dormir / mal dormir / dormir huit heures",
        "form": "verb",
        "definitions": [
            {
                "text": "Se reposer dans un état d'inconscience.",
                "examples": [
                    "Il dort sept heures par nuit.",
                    "Elle dort mal."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "ir",
        "v3": "dormi"
    },
    {
        "word": "cuisiner",
        "level": "baby",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "préparer le dîner / cuisiner un repas / cuisiner à la maison",
        "form": "verb",
        "definitions": [
            {
                "text": "Préparer de la nourriture en utilisant de la chaleur.",
                "examples": [
                    "Elle prépare le dîner chaque soir.",
                    "Il cuisine pour l'équipe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "cuisiné"
    },
    {
        "word": "nettoyer",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "nettoyer l'appartement / nettoyer / nettoyer la cuisine",
        "form": "verb",
        "definitions": [
            {
                "text": "Enlever la saleté de quelque chose.",
                "examples": [
                    "Je nettoie l'appartement le samedi.",
                    "Il nettoie son bureau tous les jours."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "nettoyé"
    },
    {
        "word": "porter",
        "level": "baby",
        "theme": "items_of_clothing_A0",
        "emoji": "👕",
        "subtext": "porter un costume / porter des lunettes / porter des vêtements décontractés",
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
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "porté"
    },
    {
        "word": "laver",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "faire la vaisselle / laver les vêtements / se laver les mains",
        "form": "verb",
        "definitions": [
            {
                "text": "Nettoyer quelque chose avec de l'eau.",
                "examples": [
                    "Il lave sa voiture tous les dimanches.",
                    "Lave-toi les mains."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "lavé"
    },
    {
        "word": "acheter",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "acheter de la nourriture / acheter un billet / acheter en ligne",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtenir quelque chose en payant de l'argent.",
                "examples": [
                    "Elle achète des courses en ligne.",
                    "Il veut acheter un appartement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "acheté"
    },
    {
        "word": "payer",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "payer une facture / payer le loyer / payer par carte / payer en espèces",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner de l'argent en échange de quelque chose.",
                "examples": [
                    "Je paie le loyer mensuellement.",
                    "Elle paie par carte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "payé"
    },
    {
        "word": "dépenser",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "dépenser de l'argent / passer du temps / dépenser pour le loyer",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser de l'argent ou du temps.",
                "examples": [
                    "Il dépense trop en plats à emporter.",
                    "Elle passe du temps dans les transports."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "dépensé"
    },
    {
        "word": "économiser",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "économiser de l'argent / économiser pour une maison / gagner du temps",
        "form": "verb",
        "definitions": [
            {
                "text": "Garder de l'argent plutôt que de le dépenser.",
                "examples": [
                    "Elle économise cent euros par mois.",
                    "Enregistrez votre travail."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "économisé"
    },
    {
        "word": "travailler",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "travailler à domicile / travailler à plein temps / travailler dur",
        "form": "verb",
        "definitions": [
            {
                "text": "Effectuer des tâches pour gagner de l'argent.",
                "examples": [
                    "Il travaille à domicile trois jours par semaine.",
                    "Elle travaille dur."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "travaillé"
    },
    {
        "word": "vivre",
        "level": "baby",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "vivre dans un appartement / vivre seul / vivre avec quelqu'un",
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
        "classification": "irregular",
        "aspect": "stative",
        "group": "re",
        "v3": "vécu"
    },
    {
        "word": "penser",
        "level": "baby",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "penser à / penser de / réfléchir attentivement / penser que c'est",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser l'esprit ; avoir une opinion.",
                "examples": [
                    "Je pense que c'est une bonne idée.",
                    "Elle pense à démissionner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "er",
        "v3": "pensé"
    },
    {
        "word": "savoir",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "connaître quelqu'un / connaître la réponse / savoir comment / connaître",
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
        "group": "re",
        "v3": "su"
    },
    {
        "word": "vouloir",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🙏",
        "subtext": "vouloir un travail / vouloir faire / vouloir plus / vouloir de l'aide",
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
        "group": "oir",
        "v3": "voulu"
    },
    {
        "word": "avoir besoin de",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🆘",
        "subtext": "besoin d'aide / besoin de temps / besoin d'argent / besoin de se reposer",
        "form": "verb",
        "definitions": [
            {
                "text": "Nécessiter quelque chose.",
                "examples": [
                    "J'ai besoin d'une pause.",
                    "Elle a besoin de plus de temps.",
                    "Il a besoin d'aide."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "locution",
        "v3": "eu besoin"
    },
    {
        "word": "aimer",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "👍",
        "subtext": "aimer le travail / aimer voyager / aimer quelqu'un / aimer l'idée",
        "form": "verb",
        "definitions": [
            {
                "text": "Trouver quelque chose de plaisant.",
                "examples": [
                    "J'aime mon travail.",
                    "Elle aime cuisiner à la maison.",
                    "Il aime le café."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "er",
        "v3": "aimé"
    },
    {
        "word": "adorer",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "❤️",
        "subtext": "aimer quelqu'un / aimer faire / aimer un lieu / aimer l'idée",
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
        "group": "er",
        "v3": "adoré"
    },
    {
        "word": "détester",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😡",
        "subtext": "détester faire / détester quelqu'un / détester les réunions",
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
        "group": "er",
        "v3": "détesté"
    },
    {
        "word": "espérer",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "🤞",
        "subtext": "espérer / espérer faire / espérer que / je l'espère",
        "form": "verb",
        "definitions": [
            {
                "text": "Souhaiter que quelque chose se produise.",
                "examples": [
                    "J'espère obtenir une promotion cette année.",
                    "Elle espère un meilleur salaire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "er",
        "v3": "espéré"
    },
    {
        "word": "se souvenir",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "se souvenir de faire / se souvenir d'un nom / se souvenir clairement",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir un souvenir de ; ne pas oublier.",
                "examples": [
                    "S'il vous plaît, souvenez-vous de la date limite.",
                    "Elle se souvient de chaque client."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "ir",
        "v3": "souvenu"
    },
    {
        "word": "oublier",
        "level": "baby",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "oublier un nom / oublier de faire / oublier / complètement oublier",
        "form": "verb",
        "definitions": [
            {
                "text": "Ne pas se souvenir.",
                "examples": [
                    "N'oubliez pas la réunion.",
                    "Il oublie toujours les mots de passe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "er",
        "v3": "oublié"
    },
    {
        "word": "comprendre",
        "level": "baby",
        "theme": "asking_answering_questions_A0",
        "emoji": "💡",
        "subtext": "comprendre un problème / comprendre quelqu'un / comprendre clairement",
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
        "group": "re",
        "v3": "compris"
    },
    {
        "word": "décider",
        "level": "baby",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "décider de faire / se décider pour / prendre une décision",
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
        "group": "er",
        "v3": "décidé"
    },
    {
        "word": "apprécier",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
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
        "group": "er",
        "v3": "apprécié"
    },
    {
        "word": "voir",
        "level": "baby",
        "theme": "body_parts_A0",
        "emoji": "👁️",
        "subtext": "voir un médecin / voir des amis / voir le problème / voir clairement",
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
        "group": "oir",
        "v3": "vu"
    },
    {
        "word": "entendre",
        "level": "baby",
        "theme": "body_parts_A0",
        "emoji": "👂",
        "subtext": "entendre des nouvelles / entendre quelqu'un / entendre un son",
        "form": "verb",
        "definitions": [
            {
                "text": "Percevoir les sons par les oreilles.",
                "examples": [
                    "J'entends l'alarme chaque matin.",
                    "Est-ce que tu m'entends ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "re",
        "v3": "entendu"
    },
    {
        "word": "se réveiller",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "subtext": "se réveiller tôt, se réveiller à 7h",
        "form": "verb",
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
        "group": "er",
        "v3": "réveillé"
    },
    {
        "word": "regarder",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "subtext": "regarder la télé, regarder un film",
        "form": "verb",
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
        "group": "er",
        "v3": "regardé"
    },
    {
        "word": "regarder",
        "level": "baby",
        "theme": "health_body",
        "emoji": "👀",
        "subtext": "regarder",
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
        "group": "er",
        "v3": "regardé"
    },
    {
        "word": "jouer",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "jouer",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire quelque chose pour s'amuser ou dans un jeu.",
                "examples": [
                    "Je joue au football avec mes amis.",
                    "Elle aime jouer aux jeux vidéo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "joué"
    },
    {
        "word": "courir",
        "level": "baby",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "subtext": "courir",
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
        "group": "ir",
        "v3": "couru"
    },
    {
        "word": "s'asseoir",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🪑",
        "subtext": "s'asseoir",
        "form": "verb",
        "definitions": [
            {
                "text": "Reposer son poids sur ses fesses plutôt que sur ses pieds.",
                "examples": [
                    "Assieds-toi, s'il te plaît.",
                    "Je suis assis sur une chaise."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "re",
        "v3": "assis"
    },
    {
        "word": "se tenir debout",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🧍",
        "subtext": "se tenir debout",
        "form": "verb",
        "definitions": [
            {
                "text": "Être sur ses pieds dans une position verticale.",
                "examples": [
                    "Lève-toi, s'il te plaît.",
                    "Elle se tient près de la porte."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "er",
        "v3": "tenu debout"
    },
    {
        "word": "rencontrer",
        "level": "baby",
        "theme": "society_politics",
        "emoji": "🤝",
        "subtext": "rencontrer",
        "form": "verb",
        "definitions": [
            {
                "text": "Voir et parler à quelqu'un pour la première fois.",
                "examples": [
                    "Enchanté de vous rencontrer.",
                    "Nous nous rencontrons tous les vendredis."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "er",
        "v3": "rencontré"
    },
    {
        "word": "apprendre",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "📚",
        "subtext": "apprendre",
        "form": "verb",
        "definitions": [
            {
                "text": "Acquérir des connaissances ou une compétence.",
                "examples": [
                    "Je veux apprendre l'anglais.",
                    "Les enfants apprennent vite."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "group": "re",
        "v3": "appris"
    },
    {
        "word": "changer",
        "level": "baby",
        "theme": "time",
        "emoji": "🔄",
        "subtext": "changer",
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
        "group": "er",
        "v3": "changé"
    },
    {
        "word": "arrêter",
        "level": "baby",
        "theme": "time",
        "emoji": "🛑",
        "subtext": "arrêter",
        "form": "verb",
        "definitions": [
            {
                "text": "Finir de faire quelque chose ou ne plus bouger.",
                "examples": [
                    "Arrête la voiture.",
                    "Arrête de parler, s'il te plaît."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "arrêté"
    },
    {
        "word": "ajouter",
        "level": "baby",
        "theme": "numbers_math",
        "emoji": "➕",
        "subtext": "ajouter",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre des choses ensemble pour former un groupe plus large.",
                "examples": [
                    "Ajoute du sucre au thé.",
                    "Combien font cinq plus cinq ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "ajouté"
    },
    {
        "word": "gagner",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "gagner",
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
        "group": "er",
        "v3": "gagné"
    },
    {
        "word": "attendre",
        "level": "baby",
        "theme": "time",
        "emoji": "⏳",
        "subtext": "attendre",
        "form": "verb",
        "definitions": [
            {
                "text": "Rester dans un lieu jusqu'à ce que quelque chose arrive.",
                "examples": [
                    "Attends le bus ici.",
                    "J'attends mon ami."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "re",
        "v3": "attendu"
    },
    {
        "word": "mourir",
        "level": "baby",
        "theme": "health_body",
        "emoji": "⚰️",
        "subtext": "mourir",
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
        "group": "ir",
        "v3": "mort"
    },
    {
        "word": "envoyer",
        "level": "baby",
        "theme": "language_communication",
        "emoji": "✉️",
        "subtext": "envoyer",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire en sorte que quelque chose aille dans un lieu.",
                "examples": [
                    "J'envoie un email chaque matin.",
                    "Peux-tu m'envoyer une photo ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "er",
        "v3": "envoyé"
    },
    {
        "word": "rester",
        "level": "baby",
        "theme": "places_geography",
        "emoji": "🏨",
        "subtext": "rester",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuer d'être dans un lieu.",
                "examples": [
                    "Je reste à la maison le dimanche.",
                    "Nous séjournons dans un hôtel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "resté"
    },
    {
        "word": "tomber",
        "level": "baby",
        "theme": "environment_nature",
        "emoji": "🍂",
        "subtext": "tomber",
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
        "group": "er",
        "v3": "tombé"
    },
    {
        "word": "passer",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "🏔️",
        "subtext": "passer",
        "form": "verb",
        "definitions": [
            {
                "text": "Passer devant quelque chose ou réussir un examen.",
                "examples": [
                    "Je passe devant le parc en rentrant chez moi.",
                    "J'espère réussir le test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "passé"
    },
    {
        "word": "vendre",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "subtext": "vendre",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner quelque chose à quelqu'un contre de l'argent.",
                "examples": [
                    "Ils vendent des fruits au marché."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "re",
        "v3": "vendu"
    },
    {
        "word": "tirer",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🚜",
        "subtext": "tirer",
        "form": "verb",
        "definitions": [
            {
                "text": "Déplacer quelque chose vers vous.",
                "examples": [
                    "Tire la porte pour l'ouvrir."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "tiré"
    },
    {
        "word": "pousser",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🛒",
        "subtext": "pousser",
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
        "group": "er",
        "v3": "poussé"
    },
    {
        "word": "porter",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🎒",
        "subtext": "porter",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenir quelque chose et le déplacer d'un endroit à un autre.",
                "examples": [
                    "Je porte mon sac à l'école.",
                    "Peux-tu m'aider à porter cette boîte ?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "porté"
    },
    {
        "word": "casser",
        "level": "baby",
        "theme": "describing_things",
        "emoji": "💔",
        "subtext": "casser",
        "form": "verb",
        "definitions": [
            {
                "text": "Séparer quelque chose en deux ou plusieurs morceaux.",
                "examples": [
                    "Ne casse pas le verre.",
                    "Il s'est cassé la jambe."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "er",
        "v3": "cassé"
    },
    {
        "word": "recevoir",
        "level": "baby",
        "theme": "language_communication",
        "emoji": "📩",
        "subtext": "recevoir",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtenir quelque chose que quelqu'un vous a donné ou envoyé.",
                "examples": [
                    "Je reçois beaucoup de courrier.",
                    "Elle a reçu un cadeau."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "oir",
        "v3": "reçu"
    },
    {
        "word": "être d'accord",
        "level": "baby",
        "theme": "opinion_debate",
        "emoji": "👍",
        "subtext": "être d'accord",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir la même opinion que quelqu'un.",
                "examples": [
                    "Je suis d'accord avec vous.",
                    "Nous sommes d'accord sur le plan."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "locution",
        "v3": "été d'accord"
    },
    {
        "word": "dessiner",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "🎨",
        "subtext": "dessiner",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire une image avec un stylo ou un crayon.",
                "examples": [
                    "J'aime dessiner des oiseaux.",
                    "Peux-tu dessiner une carte ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "er",
        "v3": "dessiné"
    },
    {
        "word": "partager",
        "level": "baby",
        "theme": "society_politics",
        "emoji": "🍕",
        "subtext": "partager",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner une partie de quelque chose à d'autres.",
                "examples": [
                    "Partageons la pizza.",
                    "Je partage une chambre avec mon frère."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "partagé"
    },
    {
        "word": "sourire",
        "level": "baby",
        "theme": "feelings_emotions",
        "emoji": "😊",
        "subtext": "sourire",
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
        "group": "re",
        "v3": "souri"
    },
    {
        "word": "pleurer",
        "level": "baby",
        "theme": "feelings_emotions",
        "emoji": "😢",
        "subtext": "pleurer",
        "form": "verb",
        "definitions": [
            {
                "text": "Produire des larmes parce qu'on est triste ou qu'on a mal.",
                "examples": [
                    "Le bébé pleure.",
                    "Ne pleure pas."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "pleuré"
    },
    {
        "word": "danser",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "💃",
        "subtext": "danser",
        "form": "verb",
        "definitions": [
            {
                "text": "Bouger son corps sur de la musique.",
                "examples": [
                    "J'adore danser.",
                    "Ils dansent."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "dansé"
    },
    {
        "word": "chanter",
        "level": "baby",
        "theme": "culture_arts",
        "emoji": "🎤",
        "subtext": "chanter",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire des sons musicaux avec sa voix.",
                "examples": [
                    "J'aime chanter sous la douche.",
                    "Elle chante très bien."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "er",
        "v3": "chanté"
    },
    {
        "word": "sauter",
        "level": "baby",
        "theme": "health_body",
        "emoji": "🦘",
        "subtext": "sauter",
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
        "group": "er",
        "v3": "sauté"
    },
    {
        "word": "nager",
        "level": "baby",
        "theme": "common_sports_A0",
        "emoji": "🏊",
        "subtext": "nager",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer dans l'eau en utilisant ses bras et ses jambes.",
                "examples": [
                    "Je nage tous les matins.",
                    "Sais-tu nager ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "er",
        "v3": "nagé"
    },
    {
        "word": "étudier",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "📖",
        "subtext": "étudier",
        "form": "verb",
        "definitions": [
            {
                "text": "Passer du temps à apprendre un sujet.",
                "examples": [
                    "J'étudie l'anglais à l'école.",
                    "Il étudie pour ses examens."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "étudié"
    },
    {
        "word": "enseigner",
        "level": "baby",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "subtext": "enseigner",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner des connaissances aux autres.",
                "examples": [
                    "J'enseigne l'anglais.",
                    "Elle enseigne dans une université."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "er",
        "v3": "enseigné"
    },
    {
        "word": "faire le trajet",
        "level": "baby",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "faire le trajet",
        "form": "verb",
        "definitions": [
            {
                "text": "Parcourir une certaine distance entre son domicile et son lieu de travail de façon régulière.",
                "examples": [
                    "Je fais le trajet jusqu'à la ville en train."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "locution",
        "v3": "fait le trajet"
    },
    {
        "word": "louer",
        "level": "baby",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "louer",
        "form": "verb",
        "definitions": [
            {
                "text": "Payer de l'argent pour utiliser une maison ou un appartement qui appartient à quelqu'un d'autre.",
                "examples": [
                    "Nous louons un appartement en ville."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "loué"
    },
    {
        "word": "s'exercer",
        "level": "baby",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "subtext": "s'exercer",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire une activité physique pour rester en bonne santé.",
                "examples": [
                    "Je m'exerce tous les matins."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "exercé"
    },
    {
        "word": "coûter",
        "level": "baby",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "coûter",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir un certain prix.",
                "examples": [
                    "L'appartement coûte cher."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "er",
        "v3": "coûté"
    },
    {
        "word": "inviter",
        "level": "baby",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "subtext": "inviter",
        "form": "verb",
        "definitions": [
            {
                "text": "Demander à quelqu'un de venir dans un lieu ou à un événement.",
                "examples": [
                    "J'invite des amis pour le dîner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "er",
        "v3": "invité"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();