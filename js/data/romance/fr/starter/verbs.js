(function() {
    const data = [
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
        ]
    },
    {
        "word": "travailler",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "travailler dans un bureau, travailler dur",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire un travail pour gagner de l'argent.",
                "examples": [
                    "Je travaille cinq jours par semaine.",
                    "Elle travaille dans une banque."
                ]
            }
        ]
    },
    {
        "word": "dormir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "😴",
        "subtext": "dormir 8 heures, aller dormir",
        "opposite": "se réveiller",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Se reposer les yeux fermés.",
                "examples": [
                    "J'ai besoin de dormir.",
                    "Le bébé dort."
                ]
            }
        ]
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
        ]
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
        ]
    },
    {
        "word": "être",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👤",
        "form": "verb",
        "definitions": [
            {
                "text": "Exister ou vivre.",
                "examples": [
                    "Je suis étudiant.",
                    "Elle est heureuse."
                ]
            }
        ]
    },
    {
        "word": "avoir",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Posséder quelque chose.",
                "examples": [
                    "J'ai une voiture rouge.",
                    "Nous avons deux chats."
                ]
            }
        ]
    },
    {
        "word": "aller",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer d'un endroit à un autre.",
                "examples": [
                    "Je vais à l'école en bus.",
                    "Allons à la maison."
                ]
            }
        ]
    },
    {
        "word": "manger",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "subtext": "manger une pomme, manger le dîner",
        "opposite": "boire",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre de la nourriture dans sa bouche et l'avaler.",
                "examples": [
                    "Je mange une pomme chaque jour.",
                    "Qu'est-ce que tu veux manger ?"
                ]
            }
        ]
    },
    {
        "word": "boire",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "subtext": "boire de l'eau, boire du café",
        "opposite": "manger",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendre un liquide par la bouche et l'avaler.",
                "examples": [
                    "Je bois beaucoup d'eau.",
                    "Tu veux boire quelque chose ?"
                ]
            }
        ]
    },
    {
        "word": "faire",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Réaliser une action ou une activité.",
                "examples": [
                    "Je fais mes devoirs l'après-midi.",
                    "Que fais-tu ?"
                ]
            }
        ]
    },
    {
        "word": "parler",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser sa voix pour dire des mots.",
                "examples": [
                    "Je parle français et anglais.",
                    "Parlez lentement, s'il vous plaît."
                ]
            }
        ]
    },
    {
        "word": "savoir",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir des informations dans son esprit.",
                "examples": [
                    "Je sais la réponse.",
                    "Est-ce que tu sais où il est ?"
                ]
            }
        ]
    },
    {
        "word": "penser",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💭",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser son esprit pour avoir des idées ou des opinions.",
                "examples": [
                    "Je pense que c'est une bonne idée.",
                    "À quoi penses-tu ?"
                ]
            }
        ]
    },
    {
        "word": "voir",
        "level": "starter",
        "theme": "health_body",
        "emoji": "👁️",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser ses yeux pour regarder quelque chose.",
                "examples": [
                    "Je vois un oiseau.",
                    "As-tu vu ce film ?"
                ]
            }
        ]
    },
    {
        "word": "vouloir",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🙏",
        "form": "verb",
        "definitions": [
            {
                "text": "Désirer avoir ou faire quelque chose.",
                "examples": [
                    "Je veux un verre d'eau.",
                    "Je veux rentrer à la maison."
                ]
            }
        ]
    },
    {
        "word": "aimer",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "❤️",
        "form": "verb",
        "definitions": [
            {
                "text": "Apprécier quelqu'un ou quelque chose.",
                "examples": [
                    "J'aime le chocolat.",
                    "Est-ce que tu aimes danser ?"
                ]
            }
        ]
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
        ]
    },
    {
        "word": "venir",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🏃‍♂️",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer vers le lieu où se trouve celui qui parle.",
                "examples": [
                    "Viens ici, s'il te plaît.",
                    "Il vient à la fête."
                ]
            }
        ]
    },
    {
        "word": "donner",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Remettre quelque chose à quelqu'un.",
                "examples": [
                    "Peux-tu me donner ce livre ?",
                    "Je donne des cadeaux à ma famille."
                ]
            }
        ]
    },
    {
        "word": "prendre",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Saisir ou obtenir quelque chose.",
                "examples": [
                    "Je prends le bus pour aller au travail.",
                    "Elle prend de belles photos."
                ]
            }
        ]
    },
    {
        "word": "trouver",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔍",
        "form": "verb",
        "definitions": [
            {
                "text": "Découvrir quelque chose après l'avoir cherché.",
                "examples": [
                    "Je ne trouve pas mes clés.",
                    "As-tu trouvé ton chemin ?"
                ]
            }
        ]
    },
    {
        "word": "dire",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🗣️",
        "form": "verb",
        "definitions": [
            {
                "text": "Exprimer quelque chose par la parole.",
                "examples": [
                    "Dis-moi une histoire.",
                    "Il lui a dit la vérité."
                ]
            }
        ]
    },
    {
        "word": "demander",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "❓",
        "form": "verb",
        "definitions": [
            {
                "text": "S'adresser à quelqu'un pour savoir quelque chose ou obtenir quelque chose.",
                "examples": [
                    "Je dois poser une question.",
                    "Elle m'a demandé de l'aide."
                ]
            }
        ]
    },
    {
        "word": "sentir",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🌡️",
        "form": "verb",
        "definitions": [
            {
                "text": "Éprouver une émotion ou une sensation physique.",
                "examples": [
                    "Je me sens heureux aujourd'hui.",
                    "Est-ce que tu as froid ?"
                ]
            }
        ]
    },
    {
        "word": "essayer",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🎯",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenter de faire quelque chose.",
                "examples": [
                    "J'essaie de faire de l'exercice chaque jour.",
                    "Essaie un de ces biscuits."
                ]
            }
        ]
    },
    {
        "word": "partir",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚪",
        "form": "verb",
        "definitions": [
            {
                "text": "S'en aller d'un lieu.",
                "examples": [
                    "Je pars pour le travail à 8h.",
                    "Ne laisse pas ton sac ici."
                ]
            }
        ]
    },
    {
        "word": "appeler",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📞",
        "form": "verb",
        "definitions": [
            {
                "text": "Téléphoner à quelqu'un ou crier son nom.",
                "examples": [
                    "Appelle-moi plus tard.",
                    "Il a appelé mon nom."
                ]
            }
        ]
    },
    {
        "word": "utiliser",
        "level": "starter",
        "theme": "technology_media",
        "emoji": "🛠️",
        "form": "verb",
        "definitions": [
            {
                "text": "Se servir de quelque chose pour accomplir une tâche.",
                "examples": [
                    "J'utilise un ordinateur pour le travail.",
                    "Puis-je utiliser ton stylo ?"
                ]
            }
        ]
    },
    {
        "word": "obtenir",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📥",
        "form": "verb",
        "definitions": [
            {
                "text": "Recevoir ou acheter quelque chose.",
                "examples": [
                    "Je reçois beaucoup d'e-mails.",
                    "Peux-tu aller chercher du lait ?"
                ]
            }
        ]
    },
    {
        "word": "commencer",
        "level": "starter",
        "theme": "time",
        "emoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Débuter une action.",
                "examples": [
                    "Le film commence à 19h.",
                    "Commençons la réunion."
                ]
            }
        ]
    },
    {
        "word": "aider",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire quelque chose pour quelqu'un pour faciliter une tâche.",
                "examples": [
                    "Peux-tu m'aider ?",
                    "J'aide ma mère avec les courses."
                ]
            }
        ]
    },
    {
        "word": "jouer",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "form": "verb",
        "definitions": [
            {
                "text": "S'amuser ou participer à un jeu.",
                "examples": [
                    "Je joue au football avec mes amis.",
                    "Elle aime jouer aux jeux vidéo."
                ]
            }
        ]
    },
    {
        "word": "courir",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏃",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer très vite sur ses jambes.",
                "examples": [
                    "Je cours dans le parc.",
                    "Il court pour attraper le bus."
                ]
            }
        ]
    },
    {
        "word": "vivre",
        "level": "starter",
        "theme": "personal_identity",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir son domicile dans un endroit particulier.",
                "examples": [
                    "J'habite à Londres.",
                    "Elle vit avec sa famille."
                ]
            }
        ]
    },
    {
        "word": "apporter",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendre quelqu'un ou quelque chose avec soi dans un lieu.",
                "examples": [
                    "S'il te plaît, apporte-moi un verre d'eau.",
                    "Il apporte son déjeuner au travail."
                ]
            }
        ]
    },
    {
        "word": "s'asseoir",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "Se poser sur un siège.",
                "examples": [
                    "Asseyez-vous, s'il vous plaît.",
                    "Je m'assois sur une chaise."
                ]
            }
        ]
    },
    {
        "word": "être debout",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "Être sur ses pieds en position verticale.",
                "examples": [
                    "Levez-vous, s'il vous plaît.",
                    "Elle est debout près de la porte."
                ]
            }
        ]
    },
    {
        "word": "perdre",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Échouer à gagner ou ne plus pouvoir trouver quelque chose.",
                "examples": [
                    "Je ne veux pas perdre le match.",
                    "Je perds souvent mes clés."
                ]
            }
        ]
    },
    {
        "word": "payer",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner de l'argent pour quelque chose.",
                "examples": [
                    "Je paie pour mon café.",
                    "Comment voulez-vous payer ?"
                ]
            }
        ]
    },
    {
        "word": "rencontrer",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Voir et parler à quelqu'un pour la première fois.",
                "examples": [
                    "Enchanté de vous rencontrer.",
                    "On se rencontre tous les vendredis."
                ]
            }
        ]
    },
    {
        "word": "apprendre",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📚",
        "form": "verb",
        "definitions": [
            {
                "text": "Acquérir des connaissances ou une compétence.",
                "examples": [
                    "Je veux apprendre le français.",
                    "Les enfants apprennent vite."
                ]
            }
        ]
    },
    {
        "word": "changer",
        "level": "starter",
        "theme": "time",
        "emoji": "🔄",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre quelque chose différent.",
                "examples": [
                    "Je veux changer de vêtements.",
                    "Le temps change rapidement."
                ]
            }
        ]
    },
    {
        "word": "comprendre",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "💡",
        "form": "verb",
        "definitions": [
            {
                "text": "Saisir le sens de quelque chose.",
                "examples": [
                    "Je ne comprends pas ce mot.",
                    "Est-ce que tu comprends le français ?"
                ]
            }
        ]
    },
    {
        "word": "s'arrêter",
        "level": "starter",
        "theme": "time",
        "emoji": "🛑",
        "form": "verb",
        "definitions": [
            {
                "text": "Finir de faire quelque chose ou ne plus bouger.",
                "examples": [
                    "Arrête la voiture.",
                    "Arrête de parler, s'il te plaît."
                ]
            }
        ]
    },
    {
        "word": "ajouter",
        "level": "starter",
        "theme": "numbers_math",
        "emoji": "➕",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre des choses ensemble pour faire un groupe plus grand.",
                "examples": [
                    "Ajoute du sucre dans le thé.",
                    "Combien font cinq plus cinq ?"
                ]
            }
        ]
    },
    {
        "word": "dépenser",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser de l'argent pour payer des choses.",
                "examples": [
                    "Je dépense beaucoup d'argent pour la nourriture."
                ]
            }
        ]
    },
    {
        "word": "ouvrir",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Déplacer quelque chose pour qu'une ouverture ne soit plus couverte.",
                "examples": [
                    "Ouvre la porte.",
                    "Peux-tu ouvrir la fenêtre ?"
                ]
            }
        ]
    },
    {
        "word": "gagner",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Être le meilleur dans un jeu ou une compétition.",
                "examples": [
                    "Nous voulons gagner le match."
                ]
            }
        ]
    },
    {
        "word": "marcher",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer sur ses jambes à une vitesse normale.",
                "examples": [
                    "Je marche jusqu'à l'école.",
                    "Faisons une marche dans le parc."
                ]
            }
        ]
    },
    {
        "word": "se souvenir",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "Garder des informations dans son esprit.",
                "examples": [
                    "Je me souviens de ton nom.",
                    "Est-ce que tu te souviens de moi ?"
                ]
            }
        ]
    },
    {
        "word": "acheter",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtenir quelque chose en payant de l'argent pour cela.",
                "examples": [
                    "Je veux acheter un nouveau téléphone.",
                    "Où puis-je acheter du lait ?"
                ]
            }
        ]
    },
    {
        "word": "mourir",
        "level": "starter",
        "theme": "health_body",
        "emoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Cesser de vivre.",
                "examples": [
                    "Les plantes meurent sans eau."
                ]
            }
        ]
    },
    {
        "word": "envoyer",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire en sorte que quelque chose aille vers un lieu.",
                "examples": [
                    "J'envoie un e-mail chaque matin.",
                    "Peux-tu m'envoyer une photo ?"
                ]
            }
        ]
    },
    {
        "word": "tomber",
        "level": "starter",
        "theme": "environment_nature",
        "emoji": "🍂",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer vers le bas, vers le sol.",
                "examples": [
                    "Les feuilles tombent en automne.",
                    "Fais attention, ne tombe pas."
                ]
            }
        ]
    },
    {
        "word": "couper",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "✂️",
        "form": "verb",
        "definitions": [
            {
                "text": "Utiliser un couteau ou des ciseaux pour diviser quelque chose.",
                "examples": [
                    "Je coupe le pain.",
                    "Peux-tu couper le papier ?"
                ]
            }
        ]
    },
    {
        "word": "passer",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "🏔️",
        "form": "verb",
        "definitions": [
            {
                "text": "Aller au-delà de quelque chose ou réussir un examen.",
                "examples": [
                    "Je passe devant le parc en rentrant.",
                    "J'espère que je vais passer le test."
                ]
            }
        ]
    },
    {
        "word": "vendre",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner quelque chose à quelqu'un contre de l'argent.",
                "examples": [
                    "Ils vendent des fruits au marché."
                ]
            }
        ]
    },
    {
        "word": "tirer",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Déplacer quelque chose vers soi.",
                "examples": [
                    "Tire la porte pour l'ouvrir."
                ]
            }
        ]
    },
    {
        "word": "pousser",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Déplacer quelque chose loin de soi.",
                "examples": [
                    "Pousse le bouton.",
                    "Je pousse le chariot de courses."
                ]
            }
        ]
    },
    {
        "word": "espérer",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "🤞",
        "form": "verb",
        "definitions": [
            {
                "text": "Vouloir que quelque chose arrive.",
                "examples": [
                    "J'espère que tu te sens mieux.",
                    "Nous espérons vous voir bientôt."
                ]
            }
        ]
    },
    {
        "word": "porter",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🎒",
        "form": "verb",
        "definitions": [
            {
                "text": "Tenir quelque chose et le déplacer d'un endroit à un autre.",
                "examples": [
                    "Je porte mon sac à l'école.",
                    "Peux-tu m'aider à porter cette boîte ?"
                ]
            }
        ]
    },
    {
        "word": "casser",
        "level": "starter",
        "theme": "describing_things",
        "emoji": "💔",
        "form": "verb",
        "definitions": [
            {
                "text": "Séparer quelque chose en deux ou plusieurs morceaux.",
                "examples": [
                    "Ne casse pas le verre.",
                    "Il s'est cassé la jambe."
                ]
            }
        ]
    },
    {
        "word": "recevoir",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "📩",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtenir quelque chose que quelqu'un vous a donné ou envoyé.",
                "examples": [
                    "Je reçois beaucoup de courrier.",
                    "Elle a reçu un cadeau."
                ]
            }
        ]
    },
    {
        "word": "être d'accord",
        "level": "starter",
        "theme": "opinion_debate",
        "emoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir la même opinion que quelqu'un.",
                "examples": [
                    "Je suis d'accord avec toi.",
                    "On est d'accord sur le plan."
                ]
            }
        ]
    },
    {
        "word": "dessiner",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎨",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire une image avec un stylo ou un crayon.",
                "examples": [
                    "J'aime dessiner des oiseaux.",
                    "Peux-tu dessiner une carte ?"
                ]
            }
        ]
    },
    {
        "word": "partager",
        "level": "starter",
        "theme": "society_politics",
        "emoji": "🍕",
        "form": "verb",
        "definitions": [
            {
                "text": "Donner une partie de quelque chose à d'autres.",
                "examples": [
                    "Partageons la pizza.",
                    "Je partage une chambre avec mon frère."
                ]
            }
        ]
    },
    {
        "word": "sourire",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendre une expression joyeuse avec sa bouche.",
                "examples": [
                    "Elle a un beau sourire.",
                    "Souris pour la photo."
                ]
            }
        ]
    },
    {
        "word": "pleurer",
        "level": "starter",
        "theme": "feelings_emotions",
        "emoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "Produire des larmes parce que vous êtes triste ou que vous avez mal.",
                "examples": [
                    "Le bébé pleure.",
                    "Ne pleure pas."
                ]
            }
        ]
    },
    {
        "word": "danser",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "💃",
        "form": "verb",
        "definitions": [
            {
                "text": "Bouger son corps en mesure sur de la musique.",
                "examples": [
                    "J'adore danser.",
                    "Ils dansent."
                ]
            }
        ]
    },
    {
        "word": "chanter",
        "level": "starter",
        "theme": "culture_arts",
        "emoji": "🎤",
        "form": "verb",
        "definitions": [
            {
                "text": "Produire des sons musicaux avec sa voix.",
                "examples": [
                    "J'aime chanter sous la douche.",
                    "Elle chante très bien."
                ]
            }
        ]
    },
    {
        "word": "sauter",
        "level": "starter",
        "theme": "health_body",
        "emoji": "🦘",
        "form": "verb",
        "definitions": [
            {
                "text": "Se détacher du sol par une poussée des jambes.",
                "examples": [
                    "Peux-tu sauter haut ?",
                    "Le chat a sauté sur la table."
                ]
            }
        ]
    },
    {
        "word": "voler",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer dans l'air.",
                "examples": [
                    "Les oiseaux peuvent voler.",
                    "Je vole vers Paris demain."
                ]
            }
        ]
    },
    {
        "word": "nager",
        "level": "starter",
        "theme": "common_sports_A0",
        "emoji": "🏊",
        "form": "verb",
        "definitions": [
            {
                "text": "Se déplacer dans l'eau en utilisant ses bras et ses jambes.",
                "examples": [
                    "Je nage chaque matin.",
                    "Sais-tu nager ?"
                ]
            }
        ]
    },
    {
        "word": "laver",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧼",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre propre avec de l'eau et du savon.",
                "examples": [
                    "Je me lave les mains.",
                    "Peux-tu laver la voiture ?"
                ]
            }
        ]
    },
    {
        "word": "nettoyer",
        "level": "starter",
        "theme": "home_living",
        "emoji": "🧹",
        "form": "verb",
        "definitions": [
            {
                "text": "Enlever la saleté de quelque chose.",
                "examples": [
                    "Je nettoie ma chambre chaque semaine."
                ]
            }
        ]
    },
    {
        "word": "cuisiner",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "verb",
        "definitions": [
            {
                "text": "Préparer de la nourriture en la chauffant.",
                "examples": [
                    "Je cuisine le dîner pour ma famille.",
                    "Elle aime cuisiner."
                ]
            }
        ]
    },
    {
        "word": "voyager",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "✈️",
        "form": "verb",
        "definitions": [
            {
                "text": "Aller d'un lieu à un autre.",
                "examples": [
                    "J'adore voyager.",
                    "Nous voyageons en train."
                ]
            }
        ]
    },
    {
        "word": "étudier",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Passer du temps à apprendre un sujet.",
                "examples": [
                    "J'étudie le français à l'école.",
                    "Il étudie pour ses examens."
                ]
            }
        ]
    },
    {
        "word": "enseigner",
        "level": "starter",
        "theme": "education_learning",
        "emoji": "👨‍🏫",
        "form": "verb",
        "definitions": [
            {
                "text": "Transmettre des connaissances à d'autres.",
                "examples": [
                    "J'enseigne le français.",
                    "Elle enseigne à l'université."
                ]
            }
        ]
    },
    {
        "word": "écouter",
        "level": "starter",
        "theme": "language_communication",
        "emoji": "🎧",
        "form": "verb",
        "definitions": [
            {
                "text": "Prêter attention à un son.",
                "examples": [
                    "J'aime écouter de la musique.",
                    "Écoutez-moi !"
                ]
            }
        ]
    },
    {
        "word": "fermer",
        "level": "starter",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Mettre quelque chose en position close.",
                "examples": [
                    "Ferme la porte.",
                    "N'oublie pas de fermer la fenêtre."
                ]
            }
        ]
    },
    {
        "word": "finir",
        "level": "starter",
        "theme": "time",
        "emoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Terminer une action.",
                "examples": [
                    "Je finis mon travail à 17h.",
                    "As-tu fini ton livre ?"
                ]
            }
        ]
    },
    {
        "word": "louer",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Payer de l'argent pour utiliser une maison ou un appartement qui appartient à quelqu'un d'autre.",
                "examples": [
                    "Nous louons un appartement en ville."
                ]
            }
        ]
    },
    {
        "word": "épargner",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "subtext": "économiser",
        "definitions": [
            {
                "text": "Garder de l'argent au lieu de le dépenser.",
                "examples": [
                    "Elle épargne de l'argent chaque mois."
                ]
            }
        ]
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
                    "L'appartement coûte cher."
                ]
            }
        ]
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
        ]
    },
    {
        "word": "faire de l'exercice",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire de l'activité physique pour rester en bonne santé.",
                "examples": [
                    "Je fais de l'exercice tous les matins."
                ]
            }
        ]
    },
    {
        "word": "faire le trajet",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "form": "verb",
        "subtext": "commuter",
        "definitions": [
            {
                "text": "Faire le voyage entre la maison et le travail.",
                "examples": [
                    "Je fais le trajet en train."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
