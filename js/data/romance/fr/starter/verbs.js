(function() {
    const data = [
    {
        "word": "être",
        "level": "starter",
        "theme": "name_greeting_A1",
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
        "v3": "été",
        "group": "auxiliary",
        "auxiliary": "avoir"
    },
    {
        "word": "avoir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "avoir un travail / avoir déjeuner / avoir un problème",
        "form": "verb",
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
        "auxiliary": "avoir"
    },
    {
        "word": "se sentir",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "se sentir fatigué / se sentir mieux / se sentir bien",
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
        "v3": "senti",
        "group": "ir",
        "auxiliary": "être"
    },
    {
        "word": "donner",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "donner des conseils / donner de l argent / donner un cadeau",
        "opposite": "prendre",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Remettre ou transférer quelque chose à quelqu un.",
                "examples": [
                    "Il me donne beaucoup de travail.",
                    "Elle donne des conseils."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "donné",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "prendre",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "prendre le bus / prendre un médicament / prendre une pause",
        "opposite": "donner",
        "oppositeEmoji": "🎁",
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
        "v3": "pris",
        "group": "re",
        "auxiliary": "avoir"
    },
    {
        "word": "obtenir",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "obtenir un travail / se fatiguer / s améliorer",
        "opposite": "donner",
        "oppositeEmoji": "🎁",
        "form": "verb",
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
        "auxiliary": "avoir"
    },
    {
        "word": "mettre",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "mettre / ranger / poser le téléphone",
        "opposite": "prendre",
        "oppositeEmoji": "👜",
        "form": "verb",
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
        "auxiliary": "avoir"
    },
    {
        "word": "faire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "faire du café / prendre une décision / faire une erreur",
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
        "v3": "fait",
        "group": "re",
        "auxiliary": "avoir"
    },
    {
        "word": "faire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "utiliser",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "utiliser un téléphone / utiliser les transports / utiliser un ordinateur",
        "form": "verb",
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
        "auxiliary": "avoir"
    },
    {
        "word": "ouvrir",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "ouvrir une porte / ouvrir un compte / ouvrir à neuf heures",
        "opposite": "fermer",
        "oppositeEmoji": "🔒",
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
        "classification": "regular",
        "aspect": "action",
        "v3": "ouvert",
        "group": "ir",
        "auxiliary": "avoir"
    },
    {
        "word": "fermer",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "fermer une porte / fermer à six heures / fermer la réunion",
        "opposite": "ouvrir",
        "oppositeEmoji": "📖",
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
        "v3": "fermé",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "commencer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "commencer le travail / commencer une réunion / commencer un nouveau travail",
        "opposite": "finir",
        "oppositeEmoji": "🏁",
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
        "v3": "commencé",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "finir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "finir le travail / finir un projet / finir tôt",
        "opposite": "commencer",
        "oppositeEmoji": "▶️",
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
        "auxiliary": "avoir"
    },
    {
        "word": "aider",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "essayer",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "montrer",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "montrer à quelqu un / montrer comment / montrer un document",
        "opposite": "cacher",
        "oppositeEmoji": "🙈",
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
        "classification": "regular",
        "aspect": "action",
        "v3": "montré",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "trouver",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "trouver un travail / découvrir / trouver cela difficile",
        "opposite": "perdre",
        "oppositeEmoji": "📉",
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
        "v3": "trouvé",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "garder",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "continuer / rester silencieux / garder une trace",
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
        "auxiliary": "avoir"
    },
    {
        "word": "perdre",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "perdre un travail / perdre de l argent / perdre du poids",
        "opposite": "gagner",
        "oppositeEmoji": "🏆",
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
        "auxiliary": "avoir"
    },
    {
        "word": "couper",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "réduire les coûts / réduire les dépenses / couper en deux",
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
        "auxiliary": "avoir"
    },
    {
        "word": "tourner",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "allumer / éteindre / tourner à gauche / tourner à droite",
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
        "auxiliary": "avoir"
    },
    {
        "word": "apporter",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "dire la vérité / dire à quelqu un / raconter une histoire",
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
        "auxiliary": "avoir"
    },
    {
        "word": "demander",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "poser une question / demander de l aide / demander à propos de",
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
        "auxiliary": "avoir"
    },
    {
        "word": "parler",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "parler",
        "level": "starter",
        "theme": "family_life_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "appeler",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "appeler quelqu un / rappeler / convoquer une réunion",
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
        "auxiliary": "avoir"
    },
    {
        "word": "écrire",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "écrire un email / écrire un rapport / écrire une lettre",
        "opposite": "lire",
        "oppositeEmoji": "📖",
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
        "auxiliary": "avoir"
    },
    {
        "word": "lire",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "lire un livre / lire les nouvelles / lire un contrat",
        "opposite": "écrire",
        "oppositeEmoji": "✍️",
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
        "auxiliary": "avoir"
    },
    {
        "word": "écouter",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "répondre",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "répéter",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "aller",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "aller au travail / aller à la maison / sortir",
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
        "auxiliary": "être"
    },
    {
        "word": "venir",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "rentrer à la maison / revenir / venir au travail",
        "opposite": "aller",
        "oppositeEmoji": "🚶",
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
        "auxiliary": "être"
    },
    {
        "word": "marcher",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "marcher au travail / rentrer à pied / marcher vite",
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
        "auxiliary": "avoir"
    },
    {
        "word": "conduire",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "v3": "conduit",
        "group": "re",
        "auxiliary": "avoir"
    },
    {
        "word": "voler",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "arriver",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "être"
    },
    {
        "word": "partir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "quitter la maison / quitter le travail / partir tôt",
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
        "auxiliary": "être"
    },
    {
        "word": "bouger",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "déménager / emménager dans une ville / continuer",
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
        "auxiliary": "avoir"
    },
    {
        "word": "revenir",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "rentrer à la maison / retourner au travail",
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
        "auxiliary": "être"
    },
    {
        "word": "voyager",
        "level": "starter",
        "theme": "public_transport_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "manger",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "prendre le petit-déjeuner / déjeuner / dîner",
        "opposite": "boire",
        "oppositeEmoji": "🥛",
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
        "auxiliary": "avoir"
    },
    {
        "word": "boire",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "boire du café / boire du thé / boire de l eau",
        "opposite": "manger",
        "oppositeEmoji": "🍎",
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
        "auxiliary": "avoir"
    },
    {
        "word": "dormir",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "bien dormir / mal dormir / dormir huit heures",
        "opposite": "se réveiller",
        "oppositeEmoji": "⏰",
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
        "auxiliary": "avoir"
    },
    {
        "word": "cuisiner",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "préparer le dîner / cuisiner un repas",
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
        "auxiliary": "avoir"
    },
    {
        "word": "nettoyer",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "porter",
        "level": "starter",
        "theme": "items_of_clothing_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "laver",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "faire la vaisselle / laver les vêtements / se laver les mains",
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
        "auxiliary": "avoir"
    },
    {
        "word": "acheter",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "acheter de la nourriture / acheter un billet",
        "opposite": "vendre",
        "oppositeEmoji": "🏷️",
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
        "auxiliary": "avoir"
    },
    {
        "word": "payer",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "dépenser",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "dépenser de l argent / passer du temps",
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
        "auxiliary": "avoir"
    },
    {
        "word": "économiser",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "économiser de l argent / économiser pour une maison",
        "opposite": "dépenser",
        "oppositeEmoji": "💸",
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
        "auxiliary": "avoir"
    },
    {
        "word": "travailler",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "vivre",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "vivre dans un appartement / vivre seul / vivre avec quelqu un",
        "opposite": "mourir",
        "oppositeEmoji": "⚰️",
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
        "auxiliary": "avoir"
    },
    {
        "word": "penser",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "penser à / penser de / réfléchir attentivement",
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
        "classification": "regular",
        "aspect": "both",
        "v3": "pensé",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "savoir",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "connaître quelqu un / connaître la réponse / savoir comment",
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
        "auxiliary": "avoir"
    },
    {
        "word": "vouloir",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "avoir besoin de",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "besoin d aide / besoin de temps / besoin d argent",
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
        "group": "locution",
        "auxiliary": "avoir"
    },
    {
        "word": "aimer",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "adorer",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "aimer quelqu un / aimer faire / aimer un lieu",
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
        "auxiliary": "avoir"
    },
    {
        "word": "détester",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "espérer",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "se souvenir",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "ir",
        "auxiliary": "être"
    },
    {
        "word": "oublier",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "comprendre",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "décider",
        "level": "starter",
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
        "v3": "décidé",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "apprécier",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "voir",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "entendre",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "se réveiller",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "se réveiller tôt / se réveiller à 7h / se réveiller fatigué",
        "opposite": "dormir",
        "oppositeEmoji": "😴",
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
        "auxiliary": "être"
    },
    {
        "word": "regarder",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "regarder",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "regarder / chercher / ressembler à",
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
        "auxiliary": "avoir"
    },
    {
        "word": "jouer",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "courir",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "courir / courir une course / diriger une entreprise",
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
        "auxiliary": "avoir"
    },
    {
        "word": "s asseoir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "s asseoir / s asseoir à un bureau / s asseoir en réunion",
        "opposite": "se tenir debout",
        "oppositeEmoji": "🧍",
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
        "group": "ir",
        "auxiliary": "avoir"
    },
    {
        "word": "se tenir debout",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "se tenir debout / se lever / être debout",
        "opposite": "s asseoir",
        "oppositeEmoji": "🪑",
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
        "auxiliary": "être"
    },
    {
        "word": "rencontrer",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "apprendre",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "changer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "arrêter",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "ajouter",
        "level": "starter",
        "theme": "numbers_100_999_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "gagner",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "gagner / gagner un prix / gagner un contrat",
        "opposite": "perdre",
        "oppositeEmoji": "📉",
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
        "auxiliary": "avoir"
    },
    {
        "word": "attendre",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "mourir",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "mourir / mourir de / s éteindre",
        "opposite": "vivre",
        "oppositeEmoji": "🏠",
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
        "auxiliary": "être"
    },
    {
        "word": "envoyer",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "rester",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
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
        "auxiliary": "être"
    },
    {
        "word": "tomber",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "tomber / tomber amoureux / s endormir",
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
        "auxiliary": "être"
    },
    {
        "word": "passer",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "vendre",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "vendre / vendre en ligne / vendre au marché",
        "opposite": "acheter",
        "oppositeEmoji": "🛒",
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
        "auxiliary": "avoir"
    },
    {
        "word": "tirer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "tirer / tirer la porte / s éloigner",
        "opposite": "pousser",
        "oppositeEmoji": "🛒",
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
        "auxiliary": "avoir"
    },
    {
        "word": "pousser",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "pousser / pousser le bouton / pousser le chariot",
        "opposite": "tirer",
        "oppositeEmoji": "🚜",
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
        "auxiliary": "avoir"
    },
    {
        "word": "porter",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "casser",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "casser / casser le verre / faire une pause",
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
        "auxiliary": "avoir"
    },
    {
        "word": "recevoir",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "être d accord",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "group": "locution",
        "auxiliary": "avoir"
    },
    {
        "word": "dessiner",
        "level": "starter",
        "theme": "cinema_film_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "partager",
        "level": "starter",
        "theme": "family_life_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "sourire",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "sourire / sourire à quelqu un / sourire largement",
        "opposite": "pleurer",
        "oppositeEmoji": "😢",
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
        "auxiliary": "avoir"
    },
    {
        "word": "pleurer",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "pleurer / pleurer pour obtenir de l aide / pleurer sur quelque chose",
        "opposite": "sourire",
        "oppositeEmoji": "😊",
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
        "auxiliary": "avoir"
    },
    {
        "word": "danser",
        "level": "starter",
        "theme": "music_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "chanter",
        "level": "starter",
        "theme": "music_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "sauter",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "nager",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "étudier",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "enseigner",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "faire le trajet",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "faire le trajet / trajet quotidien / long trajet",
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
        "group": "locution",
        "auxiliary": "avoir"
    },
    {
        "word": "louer",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "s exercer",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "coûter",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "inviter",
        "level": "starter",
        "theme": "family_life_A1",
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
        "auxiliary": "avoir"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "être"
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
        "subtext": "petit-déjeuner à la maison / sauter le petit-déjeuner",
        "classification": "irregular",
        "aspect": "action",
        "v3": "pris le petit-déjeuner",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "ir",
        "auxiliary": "être"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "être"
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
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "re",
        "auxiliary": "avoir"
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
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "subtext": "assister à une réunion / suivre un cours / assister à un événement",
        "classification": "regular",
        "aspect": "action",
        "v3": "assisté",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "locution",
        "auxiliary": "avoir"
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
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "ir",
        "auxiliary": "avoir"
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
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "subtext": "se faire mal au dos / faire mal à quelqu un / ça fait mal",
        "classification": "irregular",
        "aspect": "both",
        "v3": "fait mal",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "locution",
        "auxiliary": "avoir"
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
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "être"
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
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "ir",
        "auxiliary": "être"
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
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "subtext": "faire son sac / faire sa valise / faire des bagages légers",
        "classification": "irregular",
        "aspect": "action",
        "v3": "fait sa valise",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "locution",
        "auxiliary": "avoir"
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
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
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
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "commander",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "expliquer",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "remercier",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "remercier quelqu un / remercier pour / un grand merci",
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
        "auxiliary": "avoir"
    },
    {
        "word": "présenter",
        "level": "starter",
        "theme": "name_greeting_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "se détendre",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "group": "re",
        "auxiliary": "être"
    },
    {
        "word": "réparer",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "réparer quelque chose / faire réparer / frais de réparation",
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
        "auxiliary": "avoir"
    },
    {
        "word": "se passer",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "que s est-il passé / arriver à quelqu un / ça arrive",
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
        "auxiliary": "être"
    },
    {
        "word": "sembler",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "vouloir dire",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "group": "locution",
        "auxiliary": "avoir"
    },
    {
        "word": "suivre",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "group": "ir",
        "auxiliary": "avoir"
    },
    {
        "word": "continuer",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "croître",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "développer une entreprise / croître rapidement / se transformer en",
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
        "group": "ir",
        "auxiliary": "avoir"
    },
    {
        "word": "inclure",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "inclure quelque chose / inclure dans / non inclus",
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
        "auxiliary": "avoir"
    },
    {
        "word": "devenir",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "être"
    },
    {
        "word": "appartenir",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "appartenir à quelqu un / appartenir à / avoir sa place",
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
        "auxiliary": "avoir"
    },
    {
        "word": "choisir",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "construire",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "construire une carrière / construire une équipe / instaurer la confiance",
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
        "auxiliary": "avoir"
    },
    {
        "word": "commencer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "finir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "brosser",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "monter",
        "level": "starter",
        "theme": "modes_of_transport_A1",
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
        "auxiliary": "être"
    },
    {
        "word": "rêver",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "croire",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "préférer",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "attraper",
        "level": "starter",
        "theme": "public_transport_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "réparer",
        "level": "starter",
        "theme": "household_tasks_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "créer",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "remarquer",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "améliorer",
        "level": "starter",
        "theme": "learning_studying_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "préparer",
        "level": "starter",
        "theme": "cooking_methods_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "organiser",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "planifier",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "emprunter",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "prêter",
        "level": "starter",
        "theme": "money_payment_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "sentir",
        "level": "starter",
        "theme": "body_parts_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "goûter",
        "level": "starter",
        "theme": "tastes_textures_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "s'allonger",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "être"
    },
    {
        "word": "rire",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "s'inquiéter",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "auxiliary": "être"
    },
    {
        "word": "sonner",
        "level": "starter",
        "theme": "giving_opinions_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "épeler",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "pointer",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "crier",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "saluer",
        "level": "starter",
        "theme": "name_greeting_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "donner un coup de pied",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "group": "locution",
        "auxiliary": "avoir"
    },
    {
        "word": "jeter",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "rebondir",
        "level": "starter",
        "theme": "common_sports_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "peindre",
        "level": "starter",
        "theme": "hobbies_interests_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "sautiller",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "sauter",
        "level": "starter",
        "theme": "leisure_activities_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "compter",
        "level": "starter",
        "theme": "numbers_0_9_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "cocher",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "barrer",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "colorier",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "tenir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "mener",
        "level": "starter",
        "theme": "workplace_basics_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "se battre",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "group": "re",
        "auxiliary": "être"
    },
    {
        "word": "cacher",
        "level": "starter",
        "theme": "toys_games_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "chercher",
        "level": "starter",
        "theme": "toys_games_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "sonner",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "envoyer un SMS",
        "level": "starter",
        "theme": "using_smartphone_A1",
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
        "group": "locution",
        "auxiliary": "avoir"
    },
    {
        "word": "chuchoter",
        "level": "starter",
        "theme": "classroom_language_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "toucher",
        "level": "starter",
        "theme": "five_senses_A1",
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
        "auxiliary": "avoir"
    },
    {
        "word": "soustraire",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➖",
        "subtext": "soustraire / moins / déduire",
        "opposite": "ajouter",
        "oppositeEmoji": "➕",
        "form": "verb",
        "definitions": [
            {
                "text": "Retirer un nombre ou une quantité d un autre nombre ou d une autre quantité.",
                "examples": [
                    "Si vous soustrayez cinq de dix, vous obtenez cinq."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "soustrait",
        "group": "re",
        "auxiliary": "avoir"
    },
    {
        "word": "laisser",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🔓",
        "subtext": "laisser quelqu un / laisser faire / laisser savoir",
        "form": "verb",
        "definitions": [
            {
                "text": "Permettre à quelque chose de se produire ou à quelqu un de faire quelque chose.",
                "examples": [
                    "Laisse-moi t aider avec ces sacs.",
                    "Elle a laissé le chien sortir dans le jardin."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "laissé",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "échouer",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❌",
        "subtext": "échouer à un examen / rater un test / échouer complètement",
        "opposite": "passer",
        "oppositeEmoji": "🏔️",
        "form": "verb",
        "definitions": [
            {
                "text": "Ne pas réussir dans ce que vous essayez de faire.",
                "examples": [
                    "J ai échoué à mon permis de conduire trois fois."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "échoué",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "envoyer un e-mail",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📧",
        "subtext": "envoyer un e-mail à quelqu un / répondre par e-mail",
        "form": "verb",
        "definitions": [
            {
                "text": "Envoyer un message en utilisant Internet.",
                "examples": [
                    "Envoyez-moi les détails par e-mail.",
                    "Je vous enverrai un e-mail demain."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "envoyé un e-mail",
        "group": "locution",
        "auxiliary": "avoir"
    },
    {
        "word": "téléphoner",
        "level": "starter",
        "theme": "using_smartphone_A1",
        "emoji": "📞",
        "subtext": "téléphoner à quelqu un / rappel / être au téléphone",
        "form": "verb",
        "definitions": [
            {
                "text": "Appeler quelqu un en utilisant un téléphone.",
                "examples": [
                    "Je te téléphonerai plus tard.",
                    "Il a téléphoné à sa mère."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "téléphoné",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "s habiller",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👗",
        "subtext": "s habiller / bien s habiller / s habiller pour le travail",
        "opposite": "se déshabiller",
        "oppositeEmoji": "👕",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre des vêtements sur soi ou sur quelqu un d autre.",
                "examples": [
                    "Je m habille à sept heures.",
                    "Elle était habillée en noir."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "habillé",
        "group": "er",
        "auxiliary": "être"
    },
    {
        "word": "se déshabiller",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👕",
        "subtext": "se déshabiller / se déshabiller rapidement",
        "opposite": "s habiller",
        "oppositeEmoji": "👗",
        "form": "verb",
        "definitions": [
            {
                "text": "Enlever ses vêtements ou ceux de quelqu un d autre.",
                "examples": [
                    "Il s est déshabillé et s est couché.",
                    "Déshabille-toi et prends un bain."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "déshabillé",
        "group": "er",
        "auxiliary": "être"
    },
    {
        "word": "allumer",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "💡",
        "subtext": "allumer la lumière / allumer la télé / allumer la radio",
        "opposite": "éteindre",
        "oppositeEmoji": "🌑",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire démarrer un appareil ou une lumière.",
                "examples": [
                    "Allume la lumière, s il te plaît.",
                    "Il allume son ordinateur à neuf heures."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "allumé",
        "group": "er",
        "auxiliary": "avoir"
    },
    {
        "word": "éteindre",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌑",
        "subtext": "éteindre la lumière / éteindre l ordinateur / éteindre son téléphone",
        "opposite": "allumer",
        "oppositeEmoji": "💡",
        "form": "verb",
        "definitions": [
            {
                "text": "Arrêter le fonctionnement d un appareil ou d une lumière.",
                "examples": [
                    "N oublie pas d éteindre les lumières.",
                    "Elle éteint son téléphone pendant les réunions."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "éteint",
        "group": "re",
        "auxiliary": "avoir"
    },
    {
        "word": "augmenter",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "📈",
        "subtext": "augmenter / prix qui augmentent / en hausse",
        "opposite": "tomber",
        "oppositeEmoji": "🍂",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer vers le haut ; augmenter en quantité ou en niveau.",
                "examples": [
                    "Les prix augmentent chaque année."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v3": "augmenté",
        "group": "er",
        "auxiliary": "avoir"
    },
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();