(function() {
    const data = [
    {
        "word": "être",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "subtext": "être fatigué / être heureux / être au travail / être prêt",
        "form": "verb",
        "definitions": [
            {
                "text": "Exister ; avoir une qualité ou un état.",
                "examples": [
                    "Je suis fatigué. Elle est médecin. Nous sommes en retard."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "3ème groupe",
        "v3": "été"
    },
    {
        "word": "avoir",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "subtext": "avoir un travail / avoir un problème / avoir le temps",
        "form": "verb",
        "definitions": [
            {
                "text": "Posséder quelque chose ; éprouver quelque chose.",
                "examples": [
                    "J'ai un travail. Il a une voiture. Elle a mal à la tête."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "3ème groupe",
        "v3": "eu"
    },
    {
        "word": "faire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "faire le travail / faire les courses / faire de l'exercice / ne rien faire",
        "form": "verb",
        "definitions": [
            {
                "text": "Effectuer une action ou une activité ; créer ou produire quelque chose.",
                "examples": [
                    "Je fais mon travail chaque jour. Elle fait les courses."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "fait"
    },
    {
        "word": "aller",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "aller au travail / aller à la maison / sortir / faire du shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer d'un endroit à un autre.",
                "examples": [
                    "Je vais au travail en bus. Elle va chez le médecin."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "allé"
    },
    {
        "word": "venir",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "subtext": "venir à la maison / venir au travail / revenir / venir ici",
        "opposite": "aller",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer vers un lieu ou une personne.",
                "examples": [
                    "Il vient au bureau à neuf heures. Elle vient tard à la maison."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "venu"
    },
    {
        "word": "manger",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "manger le petit-déjeuner / manger le déjeuner / manger le dîner / manger dehors",
        "opposite": "boire",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre de la nourriture dans sa bouche et l'avaler.",
                "examples": [
                    "Nous mangeons le dîner à sept heures. Il mange le déjeuner à son bureau."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "mangé"
    },
    {
        "word": "boire",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "boire du café / boire du thé / boire de l'eau / boire de la bière",
        "opposite": "manger",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendre un liquide dans sa bouche et l'avaler.",
                "examples": [
                    "Elle boit du café chaque matin. Je bois de l'eau."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "bu"
    },
    {
        "word": "dormir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "bien dormir / mal dormir / dormir huit heures / dormir tard",
        "opposite": "se réveiller",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Se reposer les yeux fermés dans un état naturel d'inconscience.",
                "examples": [
                    "Il dort sept heures par nuit. Je dors mal."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "dormi"
    },
    {
        "word": "travailler",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "travailler à domicile / travailler à plein temps / travailler dur / travailler tard",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire un travail afin de gagner de l'argent.",
                "examples": [
                    "Elle travaille dans un hôpital. Je travaille à domicile."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "travaillé"
    },
    {
        "word": "vivre",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "subtext": "vivre dans un appartement / vivre seul / vivre avec quelqu'un / vivre à l'étranger",
        "opposite": "mourir",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir son domicile dans un lieu ; être vivant.",
                "examples": [
                    "Il vit dans un appartement près du centre. Nous vivons ensemble."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "3ème groupe",
        "v3": "vécu"
    },
    {
        "word": "aimer",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "👍",
        "subtext": "aimer le travail / aimer voyager / aimer quelqu'un / aimer l'idée",
        "form": "verb",
        "definitions": [
            {
                "text": "Trouver quelque chose d'agréable ; apprécier.",
                "examples": [
                    "J'aime mon travail. Elle aime cuisiner. Il aime le café."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "group": "1er groupe",
        "v3": "aimé"
    },
    {
        "word": "vouloir",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "subtext": "vouloir un travail / vouloir partir / vouloir plus d'argent / vouloir de l'aide",
        "form": "verb",
        "definitions": [
            {
                "text": "Désirer ou souhaiter quelque chose.",
                "examples": [
                    "Je veux un café. Elle veut un meilleur travail. Il veut prendre sa retraite."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "3ème groupe",
        "v3": "voulu"
    },
    {
        "word": "avoir besoin de",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🆘",
        "subtext": "besoin d'aide / besoin de temps / besoin d'argent / besoin de se reposer",
        "form": "verb",
        "definitions": [
            {
                "text": "Nécessiter quelque chose ; sentir que quelque chose est nécessaire.",
                "examples": [
                    "J'ai besoin d'une pause. Elle a besoin d'aide. Nous avons besoin de plus de temps."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "locution",
        "v3": "eu besoin"
    },
    {
        "word": "voir",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "subtext": "voir un médecin / voir des amis / voir le problème / voir clairement",
        "form": "verb",
        "definitions": [
            {
                "text": "Remarquer ou percevoir avec les yeux.",
                "examples": [
                    "Je vois mon médecin demain. Elle voit le problème."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "3ème groupe",
        "v3": "vu"
    },
    {
        "word": "entendre",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👂",
        "subtext": "entendre des nouvelles / entendre quelqu'un / entendre un son / entendre clairement",
        "form": "verb",
        "definitions": [
            {
                "text": "Percevoir un son par les oreilles.",
                "examples": [
                    "J'entends l'alarme chaque matin. Est-ce que tu m'entends ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "3ème groupe",
        "v3": "entendu"
    },
    {
        "word": "se sentir",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "subtext": "se sentir fatigué / se sentir mieux / se sentir bien / se sentir stressé",
        "form": "verb",
        "definitions": [
            {
                "text": "Éprouver une émotion ou une sensation physique.",
                "examples": [
                    "Je me sens fatigué. Elle se sent stressée. Il se sent mieux."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "group": "3ème groupe",
        "v3": "senti"
    },
    {
        "word": "savoir",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "subtext": "connaître quelqu'un / savoir la réponse / connaître un lieu / savoir comment faire",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir des informations ou une conscience de quelque chose.",
                "examples": [
                    "Je sais son nom. Elle sait la réponse. Est-ce que tu le connais ?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "group": "3ème groupe",
        "v3": "su"
    },
    {
        "word": "penser",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "subtext": "penser à / penser de / penser que / penser attentivement",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir une croyance ou une opinion ; utiliser l'esprit.",
                "examples": [
                    "Je pense que c'est une bonne idée. Elle pense à son travail."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "group": "1er groupe",
        "v3": "pensé"
    },
    {
        "word": "parler",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "subtext": "parler à quelqu'un / parler français / parler clairement / parler lors d'une réunion",
        "form": "verb",
        "definitions": [
            {
                "text": "Dire des mots ; communiquer verbalement.",
                "examples": [
                    "Il parle français. Elle parle à son manager chaque jour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "parlé"
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗨️",
        "subtext": "dire bonjour / dire oui / dire non / dire quelque chose",
        "form": "verb",
        "definitions": [
            {
                "text": "Exprimer quelque chose en paroles.",
                "examples": [
                    "Elle dit bonjour chaque matin. Il dit que c'est difficile."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "dit"
    },
    {
        "word": "demander",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "subtext": "poser une question / demander de l'aide / demander à quelqu'un / demander à propos de",
        "form": "verb",
        "definitions": [
            {
                "text": "Poser une question à quelqu'un ; solliciter quelque chose.",
                "examples": [
                    "Elle demande beaucoup de questions. Je demande conseil à mon patron."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "demandé"
    },
    {
        "word": "donner",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "subtext": "donner des conseils / donner de l'argent / donner un cadeau / donner des informations",
        "opposite": "prendre",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Remettre ou transférer quelque chose à quelqu'un.",
                "examples": [
                    "Il me donne beaucoup de travail. Elle donne des conseils."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "donné"
    },
    {
        "word": "prendre",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "subtext": "prendre le bus / prendre un médicament / prendre une pause / prendre du temps",
        "opposite": "donner",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenir et déplacer quelque chose ; utiliser ou consommer.",
                "examples": [
                    "Je prends le bus pour aller au travail. Elle prend des médicaments."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "pris"
    },
    {
        "word": "obtenir",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "subtext": "obtenir un travail / se fatiguer / s'améliorer / rentrer à la maison",
        "form": "verb",
        "definitions": [
            {
                "text": "Recevoir, obtenir ou devenir.",
                "examples": [
                    "J'obtiens un bon salaire. Il se fatigue rapidement. Elle obtient une promotion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "obtenu"
    },
    {
        "word": "payer",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "subtext": "payer le loyer / payer par carte / payer en espèces / payer une facture",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner de l'argent pour quelque chose.",
                "examples": [
                    "Je paie le loyer chaque mois. Il paie par carte."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "payé"
    },
    {
        "word": "acheter",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "subtext": "acheter de la nourriture / acheter un billet / acheter en ligne / acheter une maison",
        "opposite": "vendre",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtenir quelque chose en échange d'argent.",
                "examples": [
                    "Elle achète de la nourriture en ligne. Il veut acheter un appartement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "acheté"
    },
    {
        "word": "ouvrir",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "subtext": "ouvrir une porte / ouvrir un compte / ouvrir un magasin / ouvrir à neuf heures",
        "opposite": "fermer",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire en sorte que quelque chose ne soit pas fermé ; ou commencer.",
                "examples": [
                    "Il ouvre le bureau à huit heures. Elle ouvre un compte bancaire."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "ouvert"
    },
    {
        "word": "fermer",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "subtext": "fermer une porte / fermer à six heures / fermer un compte / fermer la réunion",
        "opposite": "ouvrir",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire en sorte que quelque chose ne soit pas ouvert ; ou finir.",
                "examples": [
                    "Le bureau ferme à six heures. Elle ferme son ordinateur portable."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "fermé"
    },
    {
        "word": "commencer",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "subtext": "commencer le travail / commencer une réunion / commencer un nouveau travail / commencer tôt",
        "opposite": "finir",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Débuter une action.",
                "examples": [
                    "Je commence le travail à huit heures trente. Elle commence un nouveau travail."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "commencé"
    },
    {
        "word": "finir",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "subtext": "finir le travail / finir un projet / finir tôt / finir tard",
        "opposite": "commencer",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Terminer quelque chose ; en arriver à la fin.",
                "examples": [
                    "Il finit son travail à cinq heures. Elle finit le rapport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "2ème groupe",
        "v3": "fini"
    },
    {
        "word": "utiliser",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "subtext": "utiliser un téléphone / utiliser les transports en commun / utiliser un ordinateur / utiliser du temps",
        "form": "verb",
        "definitions": [
            {
                "text": "Employer quelque chose dans un but précis.",
                "examples": [
                    "J'utilise mon téléphone pour tout. Elle utilise les transports en commun."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "utilisé"
    },
    {
        "word": "marcher",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "subtext": "marcher pour aller au travail / marcher jusqu'à la maison / marcher lentement / marcher chaque jour",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer à pied à une allure normale.",
                "examples": [
                    "Il marche au travail chaque jour. Elle marche pendant sa pause déjeuner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "marché"
    },
    {
        "word": "conduire",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚗",
        "subtext": "conduire au travail / conduire une voiture / conduire jusqu'à la maison / conduire prudemment",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire fonctionner un véhicule.",
                "examples": [
                    "Elle conduit au travail. Il conduit une voiture de fonction."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "conduit"
    },
    {
        "word": "appeler",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "subtext": "appeler quelqu'un / convoquer une réunion / rappeler / appeler pour dire qu'on est malade",
        "form": "verb",
        "definitions": [
            {
                "text": "Téléphoner à quelqu'un.",
                "examples": [
                    "J'appelle mon patron chaque matin. Elle convoque une réunion."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "appelé"
    },
    {
        "word": "se réveiller",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "se réveiller tôt, se réveiller à 7h",
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
        "group": "3ème groupe",
        "v3": "réveillé"
    },
    {
        "word": "regarder",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "regarder la télé, regarder un film",
        "definitions": [
            {
                "text": "Porter son regard sur quelque chose.",
                "examples": [
                    "Je regarde la télé le soir.",
                    "Ils regardent les oiseaux."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
        "v3": "regardé"
    },
    {
        "word": "lire",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "form": "verb",
        "subtext": "lire un livre, lire le journal",
        "opposite": "écrire",
        "oppositeEmoji": "✍️",
        "definitions": [
            {
                "text": "Regarder et comprendre des mots écrits.",
                "examples": [
                    "Je lis un livre tous les soirs.",
                    "Elle sait lire le français."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "lu"
    },
    {
        "word": "écrire",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Tracer des signes sur du papier ou un écran.",
                "examples": [
                    "J'écris dans mon journal chaque jour.",
                    "Elle écrit des livres pour enfants."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "group": "3ème groupe",
        "v3": "écrit"
    },
    {
        "word": "inviter",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Demander à quelqu'un de venir dans un lieu ou à un événement.",
                "examples": [
                    "J'invite des amis à dîner."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "group": "1er groupe",
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
