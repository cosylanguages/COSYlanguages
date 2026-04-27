(function() {
    const data = [
    {
        "word": "jardin",
        "image": "images/vocabulary/places/garden.png",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🌳",
        "form": "noun",
        "definitions": [{ "text": "Un jardin public ou un parc.", "examples": [] }],
        "countability": "countable"
    },
{
        "word": "médecin",
        "image": "images/vocabulary/jobs/doctor.png",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "numberPlural": "2 médecin",
        "answer": "deux médecins",
        "emoji": "🧑‍⚕️",
        "form": "noun",
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
        "countability": "countable"
    },
{
        "word": "fruit",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍎",
        "form": "noun",
        "transcription": "fʁɥi",
        "plural": null,
        "subtext": "fruit frais, jus de fruit",
        "definitions": [
            {
                "text": "La partie sucrée d'une plante qui contient des graines, utilisée comme nourriture.",
                "examples": [
                    "Les fruits sont bons pour la santé."
                ]
            }
        ],
        "countability": "countable"
    },
{
        "word": "légume",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥦",
        "form": "noun",
        "transcription": "le.ɡym",
        "plural": "légumes",
        "subtext": "légumes frais, légumes verts",
        "definitions": [
            {
                "text": "Une plante qui est mangée comme nourriture, comme une carotte ou une tomate.",
                "examples": [
                    "Il mange des légumes tous les jours."
                ]
            }
        ],
        "countability": "countable"
    },
{
        "word": "pied",
        "level": "starter",
        "theme": "body_parts_A1",
        "article": "le",
        "gender": "masculine",
        "numberPlural": "2 pied",
        "answer": "deux pieds",
        "emoji": "🦶",
        "form": "noun",
        "transcription": "pje",
        "plural": "pieds",
        "definitions": [
            {
                "text": "La partie du corps au bout de la jambe.",
                "examples": [
                    "J'ai mal au pied.",
                    "Elle a de petits pieds."
                ]
            }
        ],
        "countability": "countable"
    },
{
        "word": "professeur",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧑‍🏫",
        "form": "noun",
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
        "countability": "countable"
    },
{
        "word": "croissant",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "form": "noun",
        "transcription": "kʁwa.sɑ̃",
        "plural": "croissants",
        "definitions": [
            {
                "text": "Une viennoiserie en forme de lune croissante.",
                "examples": [
                    "Je mange un croissant au petit-déjeuner.",
                    "Le boulanger fait des croissants frais."
                ]
            }
        ],
        "countability": "countable"
    },
{
        "word": "pomme",
        "image": "images/vocabulary/food/apple.png",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "baseWord": "pomme",
        "emoji": "🍎",
        "numberPlural": "4 pomme",
        "answer": "quatre pommes",
        "form": "noun",
        "transcription": "pɔm",
        "plural": "pommes",
        "definitions": [
            {
                "text": "Un fruit rond, rouge ou vert.",
                "examples": [
                    "Je mange une pomme.",
                    "La pomme est sucrée."
                ]
            }
        ],
        "countability": "countable"
    },
{
        "word": "pain",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥖",
        "form": "noun",
        "transcription": "pɛ̃",
        "plural": null,
        "subtext": "pain frais, baguette",
        "definitions": [
            {
                "text": "Un aliment de base fait de farine et d'eau.",
                "examples": [
                    "J'aime le pain frais.",
                    "Peux-tu acheter du pain ?",
                    "Je mange du pain au petit-déjeuner."
                ]
            }
        ],
        "countability": "uncountable"
    },
{
        "word": "oeuf",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🥚",
        "form": "noun",
        "transcription": "œf",
        "plural": "oeufs",
        "subtext": "oeuf dur, omelette",
        "definitions": [
            {
                "text": "Un objet de forme ovale pondu par une poule.",
                "examples": [
                    "J'ai mangé un oeuf à la coque.",
                    "On a besoin d'oeufs pour faire un gâteau."
                ]
            }
        ],
        "countability": "countable"
    },
{
        "word": "lait",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🥛",
        "form": "noun",
        "plural": null,
        "subtext": "verre de lait, lait frais",
        "definitions": [
            {
                "text": "Un liquide blanc produit par les vaches.",
                "examples": [
                    "Tu veux du lait dans ton café ?",
                    "Les enfants boivent du lait."
                ]
            }
        ],
        "countability": "uncountable",
        "transcription": "/lɛ/"
    },
{
        "word": "riz",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍚",
        "form": "noun",
        "plural": null,
        "subtext": "riz blanc, riz frit",
        "definitions": [
            {
                "text": "De petits grains blancs que nous cuisons et mangeons.",
                "examples": [
                    "Nous mangeons du riz tous les jours."
                ]
            }
        ],
        "countability": "uncountable",
        "transcription": "/ri/"
    },
{
        "word": "viande",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "gender": "feminine",
        "emoji": "🥩",
        "form": "noun",
        "plural": null,
        "subtext": "viande fraîche, boeuf, poulet",
        "definitions": [
            {
                "text": "Nourriture qui provient des animaux.",
                "examples": [
                    "Il mange de la viande et des légumes."
                ]
            }
        ],
        "countability": "uncountable",
        "transcription": "/vjɑ̃d/"
    },
{
        "word": "nourriture",
        "level": "starter",
        "theme": "basic_foods_A1",
        "article": "la",
        "emoji": "🍲",
        "form": "noun",
        "plural": "nourritures",
        "definitions": [
            {
                "text": "Choses que les gens mangent.",
                "examples": [
                    "La nourriture est bonne ici."
                ]
            }
        ],
        "countability": "countable",
        "transcription": "/nu.ʁi.tyʁ/"
    },
{
        "word": "thé",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🍵",
        "form": "noun",
        "plural": null,
        "subtext": "thé vert, tasse de thé",
        "definitions": [
            {
                "text": "Une boisson chaude faite avec de l'eau chaude et des feuilles de thé.",
                "examples": [
                    "Voulez-vous une tasse de thé ?",
                    "Elle boit du thé chaque jour."
                ]
            }
        ],
        "countability": "uncountable",
        "transcription": "/te/"
    },
{
        "word": "jus",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "le",
        "gender": "masculine",
        "emoji": "🧃",
        "form": "noun",
        "plural": null,
        "subtext": "jus d'orange, jus de pomme",
        "definitions": [
            {
                "text": "Un liquide provenant de fruits ou de légumes.",
                "examples": [
                    "Je veux un verre de jus d'orange."
                ]
            }
        ],
        "countability": "uncountable",
        "transcription": "/ʒy/"
    },
{
        "word": "eau",
        "level": "starter",
        "theme": "drinks_A1",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🚰",
        "form": "noun",
        "plural": null,
        "subtext": "eau froide, verre d'eau",
        "definitions": [
            {
                "text": "Un liquide clair que nous buvons.",
                "examples": [
                    "S'il vous plaît, buvez de l'eau.",
                    "L'eau est froide."
                ]
            }
        ],
        "countability": "uncountable",
        "transcription": "/o/"
    },
{
                "text": 1,
                "examples": [
                    "Marchons dans le parc."
                ]
            },
{
                "text": "Un endroit où les enfants vont pour apprendre.",
                "examples": [
                    "Mon école est près de ma maison."
                ]
            },
{
                "text": "Un meuble utilisé pour manger ou travailler.",
                "examples": [
                    "Le repas est sur la table."
                ]
            },
{
                "text": "Des pages avec du texte que l'on lit.",
                "examples": [
                    "Je lis un livre."
                ]
            },
{
                "text": "Un objet utilisé pour écrire avec de l'encre.",
                "examples": [
                    "Puis-je emprunter ton stylo ?"
                ]
            },
{
                "text": "Un petit animal à fourrure.",
                "examples": [
                    "Mon chat dort."
                ]
            },
{
                "text": "Le meilleur ami de l'homme.",
                "examples": [
                    "Je promène mon chien."
                ]
            },
{
                "text": "Un animal avec des plumes et des ailes.",
                "examples": [
                    "L'oiseau chante."
                ]
            },
{
                "text": "Un animal qui vit dans l'eau.",
                "examples": [
                    "Le poisson nage."
                ]
            },
{
                "text": "La partie supérieure du corps.",
                "examples": [
                    "J'ai un chapeau sur la tête."
                ]
            },
{
                "text": "La partie du bras avec les doigts.",
                "examples": [
                    "Lave tes mains."
                ]
            },
{
                "text": "La partie du corps utilisée pour marcher.",
                "examples": [
                    "Il a de longues jambes."
                ]
            },
{
                "text": "La partie du corps pour voir.",
                "examples": [
                    "Elle a les yeux bleus."
                ]
            },
{
                "text": "La partie du visage pour sentir les odeurs.",
                "examples": [
                    "Il a un petit nez."
                ]
            },
{
                "text": "La partie du visage pour manger et parler.",
                "examples": [
                    "Ouvre la bouche."
                ]
            },
{
                "text": "La partie du corps pour entendre.",
                "examples": [
                    "J'ai deux oreilles."
                ]
            },
{
                "text": "La partie arrière du corps, du cou aux fesses.",
                "examples": [
                    "J'ai mal au dos."
                ]
            },
{
                "text": "La partie du corps de l'épaule à la main.",
                "examples": [
                    "Elle s'est cassé le bras."
                ]
            },
{
                "text": "La femme qui est votre parent.",
                "examples": [
                    "Ma mère est gentille."
                ]
            },
{
                "text": "L'homme qui est votre parent.",
                "examples": [
                    "Mon père est au travail."
                ]
            },
{
                "text": "Un groupe de personnes qui sont liées.",
                "examples": [
                    "Ma famille est grande."
                ]
            },
{
                "text": "Une personne que vous aimez et connaissez bien.",
                "examples": [
                    "Elle est mon amie."
                ]
            },
{
                "text": "La personne avec qui vous vivez ou êtes en couple.",
                "examples": [
                    "Mon partenaire travaille ici."
                ]
            },
{
                "text": "Un homme adulte.",
                "examples": [
                    "Cet homme est mon patron."
                ]
            },
{
                "text": "Un bâtiment où vit une famille.",
                "examples": [
                    "Ils ont une grande maison."
                ]
            },
{
                "text": "Un ensemble de pièces sur un étage d'un bâtiment.",
                "examples": [
                    "Elle vit dans un appartement."
                ]
            },
{
                "text": "L'endroit où vous vivez.",
                "examples": [
                    "Je rentre à la maison à six heures."
                ]
            },
{
                "text": "Un véhicule avec quatre roues et un moteur.",
                "examples": [
                    "Sa voiture est rouge."
                ]
            },
{
                "text": "Pièces ou billets utilisés pour acheter des choses.",
                "examples": [
                    "J'ai de l'argent dans mon sac."
                ]
            },
{
                "text": "La partie de la journée avant 12 heures.",
                "examples": [
                    "Je commence le travail le matin."
                ]
            },
{
                "text": "La partie de la journée après l'après-midi.",
                "examples": [
                    "Nous dînons le soir."
                ]
            },
{
                "text": "Une période de 24 heures.",
                "examples": [
                    "Je travaille cinq jours par semaine."
                ]
            },
{
                "text": "Une période de sept jours.",
                "examples": [
                    "Je travaille cinq jours par semaine."
                ]
            },
{
                "text": "Tous les jours sans exception.",
                "examples": [
                    "Je bois du café chaque jour."
                ]
            },
{
                "text": "La personne qui est responsable au travail.",
                "examples": [
                    "Mon patron est très amical."
                ]
            },
{
                "text": "Une personne avec qui vous travaillez.",
                "examples": [
                    "Mes collègues sont serviables."
                ]
            },
{
                "text": "L'argent qu'une personne gagne de son travail chaque mois.",
                "examples": [
                    "Son salaire est bon."
                ]
            },
{
                "text": "Un moment où les gens se rassemblent pour parler de quelque chose.",
                "examples": [
                    "Nous avons une réunion tous les lundis."
                ]
            },
{
                "text": "Le voyage pour aller et revenir du travail chaque jour.",
                "examples": [
                    "Mon trajet prend une heure."
                ]
            },
{
                "text": "Un sentiment d'inquiétude causé par une situation difficile.",
                "examples": [
                    "J'ai beaucoup de stress au travail."
                ]
            },
{
                "text": "L'argent payé pour utiliser une maison ou un appartement qui appartient à quelqu'un d'autre.",
                "examples": [
                    "Le loyer est cher ici."
                ]
            },
{
                "text": "Une personne qui vit à côté de vous ou près de vous.",
                "examples": [
                    "Mes voisins sont très gentils."
                ]
            },
{
                "text": "Une partie séparée d'un bâtiment avec des murs et une porte.",
                "examples": [
                    "L'appartement a trois pièces."
                ]
            },
{
                "text": "Le repos naturel dont votre corps a besoin chaque nuit.",
                "examples": [
                    "Je dors huit heures par nuit."
                ]
            },
{
                "text": "Activité physique qui vous maintient en forme et en bonne santé.",
                "examples": [
                    "Je fais de l'exercice trois fois par semaine."
                ]
            },
{
                "text": "Une connexion entre deux personnes.",
                "examples": [
                    "Ils ont une bonne relation."
                ]
            },
{
                "text": "Avec une autre personne ou un groupe.",
                "examples": [
                    "Nous dînons ensemble."
                ]
            },
{
                "text": "Un bâtiment où les gens paient pour passer la nuit.",
                "examples": [
                    "L'hôtel est près de la gare."
                ]
            },
{
                "text": "Samedi et dimanche.",
                "examples": [
                    "Je me détends le week-end."
                ]
            },
{
                "text": "Moment où vous ne travaillez pas et pouvez faire ce que vous voulez.",
                "examples": [
                    "Je lis des livres pendant mon temps libre."
                ]
            },
{
                "text": "Une boisson alcoolisée populaire faite à partir de grains.",
                "examples": [
                    "Il boit une bière le week-end."
                ]
            },
{
                "text": "Une boisson alcoolisée faite de raisins.",
                "examples": [
                    "Il boit du vin rouge."
                ]
            },
{
                "text": "Panneau pour entrer dans une pièce.",
                "examples": [
                    "Ferme la porte, s'il te plaît."
                ]
            },
{
                "text": "Ouverture vitrée dans un mur.",
                "examples": [
                    "Ouvre la fenêtre."
                ]
            },
{
                "text": "Personne qui soigne les malades.",
                "examples": [
                    "L'infirmier travaille à l'hôpital."
                ]
            },
{
                "text": "Personne qui conduit un véhicule.",
                "examples": [
                    "Le conducteur de bus est sympa."
                ]
            },
{
                "text": "Un cuisinier professionnel.",
                "examples": [
                    "Le chef prépare le repas."
                ]
            },
{
                "text": "Personne qui dirige une équipe.",
                "examples": [
                    "Le directeur est en réunion."
                ]
            },
{
                "text": "Véhicule qui vole.",
                "examples": [
                    "L'avion part à midi."
                ]
            },
{
                "text": "Véhicule à deux roues.",
                "examples": [
                    "Je vais au travail à vélo."
                ]
            },
{
                "text": "Lieu de soins médicaux.",
                "examples": [
                    "Il est à l'hôpital."
                ]
            },
{
                "text": "Lieu pour manger dehors.",
                "examples": [
                    "Allons au restaurant."
                ]
            },
{
                "text": "Grand magasin d'alimentation.",
                "examples": [
                    "Je fais les courses au supermarché."
                ]
            },
{
                "text": "L'étoile qui nous éclaire.",
                "examples": [
                    "Le soleil brille."
                ]
            },
{
                "text": "Eau qui tombe du ciel.",
                "examples": [
                    "J'aime marcher sous la pluie."
                ]
            },
{
                "text": "Air qui bouge.",
                "examples": [
                    "Le vent est fort."
                ]
            },
{
                "text": "Temps quand il fait noir.",
                "examples": [
                    "Bonne nuit."
                ]
            },
{
                "text": "Le jour présent.",
                "examples": [
                    "Je travaille aujourd'hui."
                ]
            },
{
                "text": "Le jour après aujourd'hui.",
                "examples": [
                    "On se voit demain."
                ]
            },
{
                "text": "Homme marié.",
                "examples": [
                    "Mon mari est gentil."
                ]
            },
{
                "text": "Femme mariée ou adulte.",
                "examples": [
                    "C'est sa femme."
                ]
            },
{
                "text": "Jeune personne.",
                "examples": [
                    "Ils ont un enfant."
                ]
            },
{
                "text": "Mère ou père.",
                "examples": [
                    "Mes parents habitent ici."
                ]
            },
{
                "text": "Fille née des mêmes parents.",
                "examples": [
                    "J'ai une soeur."
                ]
            },
{
                "text": "Garçon né des mêmes parents.",
                "examples": [
                    "Mon frère a dix ans."
                ]
            },
{
                "text": "Enfant mâle.",
                "examples": [
                    "C'est mon fils."
                ]
            },
{
                "text": "Père d'un parent.",
                "examples": [
                    "Mon grand-père est vieux."
                ]
            },
{
                "text": "Mère d'un parent.",
                "examples": [
                    "Ma grand-mère cuisine bien."
                ]
            },
{
                "text": "Frère du père ou de la mère.",
                "examples": [
                    "Mon oncle vit à Paris."
                ]
            },
{
                "text": "Soeur du père ou de la mère.",
                "examples": [
                    "Ma tante est médecin."
                ]
            },
{
                "text": "Enfant d'un oncle ou d'une tante.",
                "examples": [
                    "C'est mon cousin."
                ]
            },
{
                "text": "Grande plante avec un tronc.",
                "examples": [
                    "L'arbre est vert."
                ]
            },
{
                "text": "Partie colorée d'une plante.",
                "examples": [
                    "La fleur sent bon."
                ]
            },
{
                "text": "Grande masse de terre élevée.",
                "examples": [
                    "La montagne est haute."
                ]
            },
{
                "text": "Cours d'eau.",
                "examples": [
                    "L'eau de la rivière est froide."
                ]
            },
{
                "text": "Vaste étendue d'eau salée.",
                "examples": [
                    "Je nage dans la mer."
                ]
            },
{
                "text": "Espace au-dessus de la Terre.",
                "examples": [
                    "Le ciel est bleu."
                ]
            },
{
                "text": "Astre qui brille la nuit.",
                "examples": [
                    "La lune est ronde."
                ]
            },
{
                "text": "Objet plat pour manger.",
                "examples": [
                    "Mets l'assiette sur la table."
                ]
            },
{
                "text": "Petit récipient avec une anse.",
                "examples": [
                    "Une tasse de café."
                ]
            },
{
                "text": "Récipient pour boire.",
                "examples": [
                    "Un verre d'eau."
                ]
            },
{
                "text": "Ustensile avec des dents.",
                "examples": [
                    "Je mange avec une fourchette."
                ]
            },
{
                "text": "Ustensile pour la soupe.",
                "examples": [
                    "Une cuillère de sucre."
                ]
            },
{
                "text": "Ustensile pour couper.",
                "examples": [
                    "Le couteau coupe bien."
                ]
            },
{
                "text": "Petit ordinateur que l'on transporte.",
                "examples": [
                    "J'utilise mon ordinateur portable."
                ]
            },
{
                "text": "Lieu pour voir des films.",
                "examples": [
                    "Allons au cinéma."
                ]
            },
{
                "text": "Lieu avec des objets d'art.",
                "examples": [
                    "Le musée est grand."
                ]
            },
{
                "text": "Lieu pour acheter des médicaments.",
                "examples": [
                    "Où est la pharmacie ?"
                ]
            },
{
                "text": "Viande de poule.",
                "examples": [
                    "J'aime le poulet."
                ]
            },
{
                "text": "Poudre douce pour les gâteaux.",
                "examples": [
                    "Pas de sucre dans mon thé."
                ]
            },
{
                "text": "Plat de légumes froids.",
                "examples": [
                    "Une petite salade, s'il vous plaît."
                ]
            },
{
                "text": "Partie entre la tête et le corps.",
                "examples": [
                    "J'ai mal au cou."
                ]
            },
{
                "text": "Partie du corps entre le cou et le bras.",
                "examples": [
                    "Mon épaule me fait mal."
                ]
            },
{
                "text": "Ajoute quelque chose.",
                "examples": [
                    "Toi et moi."
                ]
            },
{
                "text": "Indique une opposition.",
                "examples": [
                    "C'est bon mais cher."
                ]
            },
{
                "text": "Donne une raison.",
                "examples": [
                    "Je dors parce que je suis fatigué."
                ]
            },
{
                "text": "Une difficulté.",
                "examples": [
                    "Il y a un problème."
                ]
            },
{
                "text": "Viande de vache.",
                "examples": [
                    "Je mange du boeuf."
                ]
            },
{
                "text": "Viande de cochon.",
                "examples": [
                    "Elle ne mange pas de porc."
                ]
            },
{
                "text": "Un légume qui pousse sous terre.",
                "examples": [
                    "Des frites avec des pommes de terre."
                ]
            },
{
                "text": "Un fruit rouge mangé comme légume.",
                "examples": [
                    "La tomate est mûre."
                ]
            },
{
                "text": "Légume fort qui fait pleurer.",
                "examples": [
                    "Je coupe un oignon."
                ]
            },
{
                "text": "Légume orange allongé.",
                "examples": [
                    "Le lapin mange une carotte."
                ]
            },
{
                "text": "Plat liquide chaud.",
                "examples": [
                    "La soupe est bonne."
                ]
            },
{
                "text": "Pâtisserie sucrée.",
                "examples": [
                    "Un gâteau au chocolat."
                ]
            },
{
                "text": "Nourriture sucrée marron.",
                "examples": [
                    "J'adore le chocolat."
                ]
            },
{
                "text": "Nourriture froide et sucrée.",
                "examples": [
                    "Une glace à la vanille."
                ]
            },
{
                "text": "Une des cinq parties de la main.",
                "examples": [
                    "J'ai dix doigts."
                ]
            },
{
                "text": "Un doigt de pied.",
                "examples": [
                    "J'ai mal à l'orteil."
                ]
            },
{
                "text": "Partie du corps pour digérer.",
                "examples": [
                    "J'ai mal à l'estomac."
                ]
            },
{
                "text": "Partie au milieu de la jambe.",
                "examples": [
                    "Je tombe sur le genou."
                ]
            },
{
                "text": "Petites plantes vertes au sol.",
                "examples": [
                    "L'herbe est verte."
                ]
            },
{
                "text": "Masse blanche dans le ciel.",
                "examples": [
                    "Il y a des nuages."
                ]
            },
{
                "text": "Point lumineux dans le ciel la nuit.",
                "examples": [
                    "Je regarde les étoiles."
                ]
            },
{
                "text": "Objet pour donner l'heure.",
                "examples": [
                    "Regarde l'horloge."
                ]
            },
{
                "text": "Lieu avec beaucoup de livres.",
                "examples": [
                    "Je vais à la bibliothèque."
                ]
            },
{
                "text": "Premier jour de la semaine.",
                "examples": [
                    "Lundi est difficile."
                ]
            },
{
                "text": "Deuxième jour de la semaine.",
                "examples": [
                    "Mardi, j'ai sport."
                ]
            },
{
                "text": "Troisième jour de la semaine.",
                "examples": [
                    "Mercredi est calme."
                ]
            },
{
                "text": "Quatrième jour de la semaine.",
                "examples": [
                    "Jeudi soir."
                ]
            },
{
                "text": "Cinquième jour de la semaine.",
                "examples": [
                    "Vendredi, c'est le week-end."
                ]
            },
{
                "text": "Sixième jour de la semaine.",
                "examples": [
                    "Je fais les courses samedi."
                ]
            },
{
                "text": "Septième jour de la semaine.",
                "examples": [
                    "Dimanche est un jour de repos."
                ]
            },
{
                "text": "Premier mois de l'année.",
                "examples": [
                    "En janvier, il fait froid."
                ]
            },
{
                "text": "Deuxième mois de l'année.",
                "examples": [
                    "Février est court."
                ]
            },
{
                "text": "Troisième mois de l'année.",
                "examples": [
                    "Le printemps commence en mars."
                ]
            },
{
                "text": "Quatrième mois de l'année.",
                "examples": [
                    "En avril, ne te découvre pas d'un fil."
                ]
            },
{
                "text": "Cinquième mois de l'année.",
                "examples": [
                    "Fais ce qu'il te plaît en mai."
                ]
            },
{
                "text": "Sixième mois de l'année.",
                "examples": [
                    "L'été commence en juin."
                ]
            },
{
                "text": "Septième mois de l'année.",
                "examples": [
                    "Je pars en vacances en juillet."
                ]
            },
{
                "text": "Huitième mois de l'année.",
                "examples": [
                    "Il fait chaud en août."
                ]
            },
{
                "text": "Neuvième mois de l'année.",
                "examples": [
                    "La rentrée est en septembre."
                ]
            },
{
                "text": "Dixième mois de l'année.",
                "examples": [
                    "Halloween est en octobre."
                ]
            },
{
                "text": "Onzième mois de l'année.",
                "examples": [
                    "Il pleut souvent en novembre."
                ]
            },
{
                "text": "Douzième mois de l'année.",
                "examples": [
                    "Noël est en décembre."
                ]
            },
{
                "text": "Saison après l'hiver.",
                "examples": [
                    "Au printemps, les fleurs poussent."
                ]
            },
{
                "text": "Saison la plus chaude.",
                "examples": [
                    "J'adore l'été."
                ]
            },
{
                "text": "Saison quand les feuilles tombent.",
                "examples": [
                    "L'automne est beau."
                ]
            },
{
                "text": "Saison la plus froide.",
                "examples": [
                    "Il neige en hiver."
                ]
            },
{
                "text": "Un grand félin sauvage.",
                "examples": [
                    "Le lion est le roi."
                ]
            },
{
                "text": "Un très gros animal avec une trompe.",
                "examples": [
                    "L'éléphant est gris."
                ]
            },
{
                "text": "Petit animal avec de longues oreilles.",
                "examples": [
                    "Le lapin mange une carotte."
                ]
            },
{
                "text": "Un animal que l'on peut monter.",
                "examples": [
                    "Je monte à cheval."
                ]
            },
{
                "text": "L'animal qui donne du lait.",
                "examples": [
                    "La vache est dans le pré."
                ]
            },
{
                "text": "Un animal rose de la ferme.",
                "examples": [
                    "Le cochon est gras."
                ]
            },
{
                "text": "Animal avec de la laine blanche.",
                "examples": [
                    "Un troupeau de moutons."
                ]
            },
{
                "text": "Un fruit jaune acide.",
                "examples": [
                    "Du citron dans mon thé."
                ]
            },
{
                "text": "Un fruit orange et rond.",
                "examples": [
                    "Je mange une orange."
                ]
            },
{
                "text": "Un petit fruit rouge sucré.",
                "examples": [
                    "J'aime les fraises."
                ]
            },
{
                "text": "Petits fruits pour faire le vin.",
                "examples": [
                    "Une grappe de raisin."
                ]
            },
{
                "text": "Plante potagère à forte odeur.",
                "examples": [
                    "Je cuisine avec de l'ail."
                ]
            },
{
                "text": "Salutation le jour.",
                "examples": [
                    "Bonjour à tous."
                ]
            },
{
                "text": "Salutation en partant.",
                "examples": [
                    "Au revoir, monsieur."
                ]
            },
{
                "text": "Formule de politesse.",
                "examples": [
                    "Un café, s'il vous plaît."
                ]
            },
{
                "text": "Formule pour remercier.",
                "examples": [
                    "Merci beaucoup."
                ]
            },
{
                "text": "Formule pour s'excuser.",
                "examples": [
                    "Pardon, je suis en retard."
                ]
            },
{
                "text": "Affirmation.",
                "examples": [
                    "Oui, je veux bien."
                ]
            },
{
                "text": "Négation.",
                "examples": [
                    "Non, merci."
                ]
            },
{
                "text": "Comment on s'appelle.",
                "examples": [
                    "Mon nom est Dupont."
                ]
            },
{
                "text": "Couleur entre bleu et rouge.",
                "examples": [
                    "J'ai un sac violet."
                ]
            },
{
                "text": "Pièce pour se laver.",
                "examples": [
                    "La salle de bain est petite."
                ]
            },
{
                "text": "Pièce pour dormir.",
                "examples": [
                    "Ma chambre est propre."
                ]
            },
{
                "text": "Très jeune enfant.",
                "examples": [
                    "Le bébé dort."
                ]
            },
{
                "text": "Enfant mâle.",
                "examples": [
                    "C'est un petit garçon."
                ]
            },
{
                "text": "Enfant femelle.",
                "examples": [
                    "C'est une gentille fille."
                ]
            },
{
                "text": "Copain amoureux.",
                "examples": [
                    "Mon petit ami est là."
                ]
            },
{
                "text": "Copine amoureuse.",
                "examples": [
                    "Sa petite amie est française."
                ]
            },
{
                "text": "Personne qui étudie.",
                "examples": [
                    "Je suis étudiant."
                ]
            },
{
                "text": "Personne dans la même classe.",
                "examples": [
                    "Mon camarade de classe est sympa."
                ]
            },
{
                "text": "Appareil pour prendre des photos.",
                "examples": [
                    "J'ai un nouvel appareil photo."
                ]
            },
{
                "text": "Machine électronique pour travailler.",
                "examples": [
                    "Mon ordinateur est rapide."
                ]
            },
{
                "text": "Récipient pour les liquides.",
                "examples": [
                    "Une bouteille d'eau."
                ]
            },
{
                "text": "Objet creux pour ranger.",
                "examples": [
                    "Le chat est dans la boîte."
                ]
            },
{
                "text": "Objet rond pour le sport.",
                "examples": [
                    "Jouons au ballon."
                ]
            },
{
                "text": "Grand bâtiment urbain.",
                "examples": [
                    "Un bel immeuble."
                ]
            },
{
                "text": "Lieu où l'on boit du café.",
                "examples": [
                    "Allons au café."
                ]
            },
{
                "text": "Le milieu d'un lieu.",
                "examples": [
                    "Le centre-ville."
                ]
            },
{
                "text": "Produit gras du lait.",
                "examples": [
                    "Du beurre sur le pain."
                ]
            },
{
                "text": "Produit fait avec du lait caillé.",
                "examples": [
                    "J'aime le fromage français."
                ]
            },
{
                "text": "Personne qui joue au cinéma.",
                "examples": [
                    "C'est un acteur célèbre."
                ]
            },
{
                "text": "Personne qui fait de l'art.",
                "examples": [
                    "Elle est une grande artiste."
                ]
            },
{
                "text": "Personne qui n'est plus un enfant.",
                "examples": [
                    "Un billet pour adulte."
                ]
            },
{
                "text": "Ce qu'on dit pour aider.",
                "examples": [
                    "Donne-moi un conseil."
                ]
            },
{
                "text": "Nombre d'années vécues.",
                "examples": [
                    "Quel âge as-tu ?"
                ]
            },
{
                "text": "Gaz que l'on respire.",
                "examples": [
                    "L'air est pur ici."
                ]
            },
{
                "text": "Partie d'une ville.",
                "examples": [
                    "C'est mon quartier."
                ]
            },
{
                "text": "Création de belles choses.",
                "examples": [
                    "J'aime l'art moderne."
                ]
            },
{
                "text": "Ensemble de musiciens.",
                "examples": [
                    "Un groupe de rock."
                ]
            },
{
                "text": "Action de se laver dans l'eau.",
                "examples": [
                    "Prendre un bain chaud."
                ]
            },
{
                "text": "Jour de la naissance.",
                "examples": [
                    "Bon anniversaire !"
                ]
            },
{
                "text": "Véhicule pour aller sur l'eau.",
                "examples": [
                    "Le bateau est sur la mer."
                ]
            },
{
                "text": "Activités commerciales.",
                "examples": [
                    "Il voyage pour les affaires."
                ]
            },
{
                "text": "École d'enseignement supérieur.",
                "examples": [
                    "Je vais à l'université."
                ]
            },
{
                "text": "Spectacle musical.",
                "examples": [
                    "Un concert de piano."
                ]
            },
{
                "text": "Action de parler ensemble.",
                "examples": [
                    "Une conversation intéressante."
                ]
            },
{
                "text": "Une autre fois.",
                "examples": [
                    "Encore une fois."
                ]
            },
{
                "text": "Indique un temps passé.",
                "examples": [
                    "Il y a deux jours."
                ]
            },
{
                "text": "Également.",
                "examples": [
                    "Moi aussi."
                ]
            },
{
                "text": "Réellement.",
                "examples": [
                    "C'est vraiment bien."
                ]
            },
{
                "text": "À cet endroit.",
                "examples": [
                    "Le chat est là."
                ]
            },
{
                "text": "Objet pour écrire ou dessiner.",
                "examples": [
                    "Un crayon de couleur."
                ]
            },
{
                "text": "Matière en feuilles.",
                "examples": [
                    "Une feuille de papier."
                ]
            },
{
                "text": "Homme adulte.",
                "examples": [
                    "Bonjour, monsieur."
                ]
            },
{
                "text": "Femme adulte.",
                "examples": [
                    "Merci, madame."
                ]
            },
{
                "text": "Lieu avec beaucoup de maisons.",
                "examples": [
                    "Paris est une grande ville."
                ]
            },
{
                "text": "Territoire d'une nation.",
                "examples": [
                    "La France est un beau pays."
                ]
            },
{
                "text": "La Terre entière.",
                "examples": [
                    "Tout le monde est là."
                ]
            },
{
                "text": "Personnes en général.",
                "examples": [
                    "Il y a beaucoup de gens."
                ]
            },
{
                "text": "Un objet ou une idée.",
                "examples": [
                    "C'est une bonne chose."
                ]
            },
{
                "text": "Heure ou durée.",
                "examples": [
                    "Je n'ai pas le temps."
                ]
            },
{
                "text": "Soixante minutes.",
                "examples": [
                    "Il est une heure."
                ]
            },
{
                "text": "Soixante secondes.",
                "examples": [
                    "Attends une minute."
                ]
            },
{
                "text": "Temps très court.",
                "examples": [
                    "Une seconde, s'il vous plaît."
                ]
            },
{
                "text": "Le jour avant aujourd'hui.",
                "examples": [
                    "Hier, j'étais fatigué."
                ]
            },
{
                "text": "Temps du matin.",
                "examples": [
                    "Bonne matinée !"
                ]
            },
{
                "text": "Après 12 heures.",
                "examples": [
                    "Je travaille l'après-midi."
                ]
            },
{
                "text": "Temps du soir.",
                "examples": [
                    "Bonne soirée !"
                ]
            },
{
                "text": "Douze heures de la nuit.",
                "examples": [
                    "Il est minuit."
                ]
            },
{
                "text": "Douze heures du jour.",
                "examples": [
                    "Il est midi."
                ]
            },
{
                "text": "Ce que l'on fait pour gagner sa vie.",
                "examples": [
                    "Je vais au travail."
                ]
            },
{
                "text": "Terme familier pour travail.",
                "examples": [
                    "J'ai trop de boulot."
                ]
            },
{
                "text": "Profession.",
                "examples": [
                    "Quel est ton métier ?"
                ]
            },
{
                "text": "Société où l'on travaille.",
                "examples": [
                    "Une grande entreprise."
                ]
            },
{
                "text": "Personne qui achète un service.",
                "examples": [
                    "Le client est content."
                ]
            },
{
                "text": "Information envoyée.",
                "examples": [
                    "J'ai un message pour toi."
                ]
            },
{
                "text": "Courrier électronique.",
                "examples": [
                    "Je réponds aux emails."
                ]
            },
{
                "text": "Pages sur internet.",
                "examples": [
                    "Regarde ce site web."
                ]
            },
{
                "text": "Code secret.",
                "examples": [
                    "J'ai oublié mon mot de passe."
                ]
            },
{
                "text": "Objet pour taper du texte.",
                "examples": [
                    "Un clavier d'ordinateur."
                ]
            },
{
                "text": "Objet pour diriger le curseur.",
                "examples": [
                    "La souris est à droite."
                ]
            },
{
                "text": "Partie de l'ordinateur pour voir.",
                "examples": [
                    "L'écran est grand."
                ]
            },
{
                "text": "Sons mélodieux.",
                "examples": [
                    "J'écoute de la musique."
                ]
            },
{
                "text": "Paroles sur de la musique.",
                "examples": [
                    "C'est une belle chanson."
                ]
            },
{
                "text": "Histoire vue au cinéma.",
                "examples": [
                    "Je regarde un film."
                ]
            },
{
                "text": "Image prise par un appareil.",
                "examples": [
                    "Une photo de famille."
                ]
            },
{
                "text": "Activité physique.",
                "examples": [
                    "Je fais du sport."
                ]
            },
{
                "text": "Sport avec un ballon rond.",
                "examples": [
                    "Jouons au football."
                ]
            },
{
                "text": "Sport avec une raquette.",
                "examples": [
                    "Il joue au tennis."
                ]
            },
{
                "text": "Fait de nager.",
                "examples": [
                    "J'aime la natation."
                ]
            },
{
                "text": "Petit restaurant libre-service.",
                "examples": [
                    "On mange à la cafétéria."
                ]
            },
{
                "text": "Billet pour le bus ou cinéma.",
                "examples": [
                    "Un ticket de métro."
                ]
            },
{
                "text": "Papier prouvant le paiement.",
                "examples": [
                    "Gardez le reçu."
                ]
            },
{
                "text": "Papier demandant paiement.",
                "examples": [
                    "Je paie mes factures."
                ]
            },
{
                "text": "Carte pour payer.",
                "examples": [
                    "Je paie par carte."
                ]
            },
{
                "text": "Argent liquide.",
                "examples": [
                    "Je n'ai pas d'espèces."
                ]
            },
{
                "text": "Ce que l'on porte.",
                "examples": [
                    "Un nouveau vêtement."
                ]
            },
{
                "text": "Poudre blanche pour saler.",
                "examples": [
                    "Un peu de sel."
                ]
            },
{
                "text": "Poudre noire pour relever le goût.",
                "examples": [
                    "Mets du poivre."
                ]
            },
{
                "text": "Liquide gras pour cuisiner.",
                "examples": [
                    "De l'huile d'olive."
                ]
            },
{
                "text": "Liquide acide pour salade.",
                "examples": [
                    "Sel, poivre et vinaigre."
                ]
            },
{
                "text": "Repas du matin.",
                "examples": [
                    "Je prends mon petit-déjeuner."
                ]
            },
{
                "text": "Petit repas l'après-midi.",
                "examples": [
                    "Les enfants prennent le goûter."
                ]
            },
{
                "text": "Personne que l'on reçoit.",
                "examples": [
                    "Nous avons des invités."
                ]
            },
{
                "text": "Moment pour s'amuser ensemble.",
                "examples": [
                    "Bonne fête !"
                ]
            },
{
                "text": "Personne qui voyage.",
                "examples": [
                    "Le train est plein de voyageurs."
                ]
            },
{
                "text": "Voie de circulation.",
                "examples": [
                    "Quelle rue ?"
                ]
            },
{
                "text": "Petite voie.",
                "examples": [
                    "Le chemin est long."
                ]
            },
{
                "text": "Voie entre deux villes.",
                "examples": [
                    "La route est belle."
                ]
            },
{
                "text": "Espace public ouvert.",
                "examples": [
                    "La place du village."
                ]
            },
{
                "text": "Passage au-dessus de l'eau.",
                "examples": [
                    "Le pont est vieux."
                ]
            },
{
                "text": "Sable au bord de l'eau.",
                "examples": [
                    "J'aime la plage."
                ]
            },
{
                "text": "Lieu hors de la ville.",
                "examples": [
                    "Vivre à la campagne."
                ]
            },
{
                "text": "Petite ville.",
                "examples": [
                    "C'est un beau village."
                ]
            },
{
                "text": "Ce qu'on parle.",
                "examples": [
                    "Le français est une langue."
                ]
            },
{
                "text": "Unité de langage.",
                "examples": [
                    "Un mot difficile."
                ]
            },
{
                "text": "Ensemble de mots.",
                "examples": [
                    "Fais une phrase."
                ]
            },
{
                "text": "Ce qu'on demande.",
                "examples": [
                    "J'ai une question."
                ]
            },
{
                "text": "Ce qu'on dit après une question.",
                "examples": [
                    "La réponse est non."
                ]
            },
{
                "text": "Ce que l'on pense.",
                "examples": [
                    "C'est une bonne idée."
                ]
            },
{
                "text": "Ce que l'on croit sur un sujet.",
                "examples": [
                    "Donne-moi ton avis."
                ]
            },
{
                "text": "Jugement personnel.",
                "examples": [
                    "Une opinion tranchée."
                ]
            },
{
                "text": "Action de choisir.",
                "examples": [
                    "C'est ton choix."
                ]
            },
{
                "text": "Ce que l'on décide.",
                "examples": [
                    "Prendre une décision."
                ]
            },
{
                "text": "Travail que l'on prévoit.",
                "examples": [
                    "Un nouveau projet."
                ]
            },
{
                "text": "Succès.",
                "examples": [
                    "C'est une réussite."
                ]
            },
{
                "text": "Faute.",
                "examples": [
                    "Faire une erreur."
                ]
            },
{
                "text": "Manquement à une règle.",
                "examples": [
                    "Une faute de français."
                ]
            },
{
                "text": "Présent.",
                "examples": [
                    "Merci pour le cadeau."
                ]
            },
{
                "text": "Valeur d'une chose.",
                "examples": [
                    "Quel est le prix ?"
                ]
            },
{
                "text": "Action d'acheter.",
                "examples": [
                    "Un achat utile."
                ]
            },
{
                "text": "Lieu pour acheter.",
                "examples": [
                    "Le magasin est grand."
                ]
            },
{
                "text": "Lieu avec beaucoup de magasins.",
                "examples": [
                    "Allons au centre commercial."
                ]
            },
{
                "text": "Pièces d'argent.",
                "examples": [
                    "Avez-vous de la monnaie ?"
                ]
            },
{
                "text": "Compte en banque.",
                "examples": [
                    "Ouvrir un compte."
                ]
            },
{
                "text": "Lieu de l'argent.",
                "examples": [
                    "Je vais à la banque."
                ]
            },
{
                "text": "Argent économisé.",
                "examples": [
                    "Mes épargnes."
                ]
            },
{
                "text": "Argent que l'on sort.",
                "examples": [
                    "Réduire les dépenses."
                ]
            },
{
                "text": "Action de payer.",
                "examples": [
                    "Paiement par carte."
                ]
            },
{
                "text": "Ce que ça coûte.",
                "examples": [
                    "Le coût de la vie."
                ]
            },
{
                "text": "Lieu de commerce.",
                "examples": [
                    "Le marché mondial."
                ]
            },
{
                "text": "Chose fabriquée.",
                "examples": [
                    "Un nouveau produit."
                ]
            },
{
                "text": "Action d'aider.",
                "examples": [
                    "Un bon service."
                ]
            },
{
                "text": "Proposition de prix.",
                "examples": [
                    "Une offre spéciale."
                ]
            },
{
                "text": "Action de demander.",
                "examples": [
                    "La demande est forte."
                ]
            },
{
                "text": "Transport de marchandises.",
                "examples": [
                    "Livraison à domicile."
                ]
            },
{
                "text": "Achat demandé.",
                "examples": [
                    "Passer une commande."
                ]
            },
{
                "text": "Ensemble des clients.",
                "examples": [
                    "Une clientèle fidèle."
                ]
            },
{
                "text": "Action de céder pour de l'argent.",
                "examples": [
                    "En vente libre."
                ]
            },
{
                "text": "Petit magasin.",
                "examples": [
                    "Une boutique de mode."
                ]
            },
{
                "text": "Niveau d'un bâtiment.",
                "examples": [
                    "J'habite au premier étage."
                ]
            },
{
                "text": "Lieu par où l'on entre.",
                "examples": [
                    "L'entrée de la maison."
                ]
            },
{
                "text": "Lieu par où l'on sort.",
                "examples": [
                    "La sortie est là."
                ]
            },
{
                "text": "Suite de marches.",
                "examples": [
                    "Monter l'escalier."
                ]
            },
{
                "text": "Appareil pour monter les étages.",
                "examples": [
                    "Prendre l'ascenseur."
                ]
            },
{
                "text": "Passage long et étroit.",
                "examples": [
                    "Le couloir est sombre."
                ]
            },
{
                "text": "Parois d'une pièce.",
                "examples": [
                    "Des murs blancs."
                ]
            },
{
                "text": "Couverture d'une maison.",
                "examples": [
                    "Le chat est sur le toit."
                ]
            },
{
                "text": "Terrain avec des plantes.",
                "examples": [
                    "Travailler au jardin."
                ]
            },
{
                "text": "Lieu pour la voiture.",
                "examples": [
                    "La voiture est au garage."
                ]
            },
{
                "text": "Pièce de réception.",
                "examples": [
                    "Regarder la télé au salon."
                ]
            },
{
                "text": "Pièce pour cuisiner.",
                "examples": [
                    "La cuisine est moderne."
                ]
            },
{
                "text": "Pièce pour manger.",
                "examples": [
                    "Dîner dans la salle à manger."
                ]
            },
{
                "text": "Lieu pour les besoins naturels.",
                "examples": [
                    "Où sont les toilettes ?"
                ]
            },
{
                "text": "Installation pour se laver debout.",
                "examples": [
                    "Prendre une douche."
                ]
            },
{
                "text": "Objet pour l'eau.",
                "examples": [
                    "Ferme le robinet."
                ]
            },
{
                "text": "Produit pour se laver.",
                "examples": [
                    "Se laver avec du savon."
                ]
            },
{
                "text": "Linge pour s'essuyer.",
                "examples": [
                    "Une serviette propre."
                ]
            },
{
                "text": "Glace pour se voir.",
                "examples": [
                    "Se regarder dans le miroir."
                ]
            },
{
                "text": "Meuble pour dormir.",
                "examples": [
                    "Un lit confortable."
                ]
            },
{
                "text": "Coussin pour la tête.",
                "examples": [
                    "Un oreiller mou."
                ]
            },
{
                "text": "Linge chaud pour le lit.",
                "examples": [
                    "Une couverture en laine."
                ]
            },
{
                "text": "Meuble pour les vêtements.",
                "examples": [
                    "Ranger l'armoire."
                ]
            },
{
                "text": "Planche pour poser des livres.",
                "examples": [
                    "Une étagère pleine."
                ]
            },
{
                "text": "Table de travail.",
                "examples": [
                    "Travailler à son bureau."
                ]
            },
{
                "text": "Siège avec dossier.",
                "examples": [
                    "Une chaise en bois."
                ]
            },
{
                "text": "Siège confortable.",
                "examples": [
                    "S'asseoir dans un fauteuil."
                ]
            },
{
                "text": "Grand siège pour plusieurs.",
                "examples": [
                    "Dormir sur le canapé."
                ]
            },
{
                "text": "Objet lumineux.",
                "examples": [
                    "Allume la lampe."
                ]
            },
{
                "text": "Appareil vidéo.",
                "examples": [
                    "Regarder la télévision."
                ]
            },
{
                "text": "Appareil audio.",
                "examples": [
                    "Écouter la radio."
                ]
            },
{
                "text": "Appareil pour appeler.",
                "examples": [
                    "Répondre au téléphone."
                ]
            },
{
                "text": "Petit appareil pour l'heure.",
                "examples": [
                    "Ma montre avance."
                ]
            },
{
                "text": "Contenant souple.",
                "examples": [
                    "Un sac à main."
                ]
            },
{
                "text": "Pour mettre l'argent.",
                "examples": [
                    "Oublier son portefeuille."
                ]
            },
{
                "text": "Pour mieux voir.",
                "examples": [
                    "Porter des lunettes."
                ]
            },
{
                "text": "Contre la pluie.",
                "examples": [
                    "Prendre un parapluie."
                ]
            },
{
                "text": "Pour marcher.",
                "examples": [
                    "Mettre ses chaussures."
                ]
            },
{
                "text": "Chaussures hautes.",
                "examples": [
                    "Des bottes de cuir."
                ]
            },
{
                "text": "Vêtements de pied.",
                "examples": [
                    "Une paire de chaussettes."
                ]
            },
{
                "text": "Vêtement de jambe.",
                "examples": [
                    "Un pantalon bleu."
                ]
            },
{
                "text": "Pantalon de toile bleue.",
                "examples": [
                    "Porter un jean."
                ]
            },
{
                "text": "Vêtement féminin court.",
                "examples": [
                    "Une jupe plissée."
                ]
            },
{
                "text": "Vêtement féminin entier.",
                "examples": [
                    "Une robe de soirée."
                ]
            },
{
                "text": "Haut à boutons.",
                "examples": [
                    "Une chemise blanche."
                ]
            },
{
                "text": "Haut chaud.",
                "examples": [
                    "Mettre un pull."
                ]
            },
{
                "text": "Vêtement d'hiver.",
                "examples": [
                    "Un long manteau."
                ]
            },
{
                "text": "Petit manteau.",
                "examples": [
                    "Une veste légère."
                ]
            },
{
                "text": "Chapeau de sport.",
                "examples": [
                    "Mettre une casquette."
                ]
            },
{
                "text": "Chapeau en laine.",
                "examples": [
                    "Un bonnet chaud."
                ]
            },
{
                "text": "Pour les mains.",
                "examples": [
                    "Une paire de gants."
                ]
            },
{
                "text": "Pour tenir le pantalon.",
                "examples": [
                    "Une ceinture en cuir."
                ]
            },
{
                "text": "Pour nager.",
                "examples": [
                    "Prendre son maillot."
                ]
            },
{
                "text": "Pour dormir.",
                "examples": [
                    "Mettre son pyjama."
                ]
            },
{
                "text": "Contenant de voyage.",
                "examples": [
                    "Boucler sa valise."
                ]
            },
{
                "text": "Sac sur le dos.",
                "examples": [
                    "Prendre son sac à dos."
                ]
            },
{
                "text": "Papier de voyage.",
                "examples": [
                    "Montrer son passeport."
                ]
            },
{
                "text": "Titre de transport.",
                "examples": [
                    "Un billet de train."
                ]
            },
{
                "text": "Représentation d'un lieu.",
                "examples": [
                    "Une carte routière."
                ]
            },
{
                "text": "Carte d'une ville.",
                "examples": [
                    "Un plan de métro."
                ]
            },
{
                "text": "Lieu des trains.",
                "examples": [
                    "Aller à la gare."
                ]
            },
{
                "text": "Lieu des avions.",
                "examples": [
                    "Prendre un taxi pour l'aéroport."
                ]
            },
{
                "text": "Lieu des bus.",
                "examples": [
                    "Attendre à la station."
                ]
            },
{
                "text": "Point d'arrêt du bus.",
                "examples": [
                    "S'arrêter au prochain arrêt."
                ]
            },
{
                "text": "Bord de la voie ferrée.",
                "examples": [
                    "Le train arrive au quai 3."
                ]
            },
{
                "text": "Chemin de fer.",
                "examples": [
                    "La voie est libre."
                ]
            },
{
                "text": "Véhicule sur rails.",
                "examples": [
                    "Prendre le train."
                ]
            },
{
                "text": "Grand véhicule urbain.",
                "examples": [
                    "Le bus de 8h."
                ]
            },
{
                "text": "Train souterrain.",
                "examples": [
                    "Prendre le métro."
                ]
            },
{
                "text": "Voiture avec chauffeur.",
                "examples": [
                    "Appeler un taxi."
                ]
            },
{
                "text": "Rapidité du mouvement.",
                "examples": [
                    "Limiter la vitesse."
                ]
            },
{
                "text": "Affaires de voyage.",
                "examples": [
                    "Porter les bagages."
                ]
            },
{
                "text": "Action de voyager.",
                "examples": [
                    "Bon voyage !"
                ]
            },
{
                "text": "Temps de repos.",
                "examples": [
                    "Partir en vacances."
                ]
            },
{
                "text": "Action de partir.",
                "examples": [
                    "L'heure du départ."
                ]
            },
{
                "text": "Action d'arriver.",
                "examples": [
                    "L'heure de l'arrivée."
                ]
            },
{
                "text": "Voyage en avion.",
                "examples": [
                    "Un vol de nuit."
                ]
            },
{
                "text": "Action de réserver.",
                "examples": [
                    "Faire une réservation."
                ]
            },
{
                "text": "Pièce dans un hôtel.",
                "examples": [
                    "Réserver une chambre d'hôtel."
                ]
            },
{
                "text": "Pour ouvrir la chambre.",
                "examples": [
                    "Rendre la clé."
                ]
            },
{
                "text": "Accueil de l'hôtel.",
                "examples": [
                    "Aller à la réception."
                ]
            },
{
                "text": "Repas du midi.",
                "examples": [
                    "Un déjeuner léger."
                ]
            },
{
                "text": "Repas du soir.",
                "examples": [
                    "Un dîner entre amis."
                ]
            },
{
                "text": "Dernier repas du soir.",
                "examples": [
                    "Prendre le souper."
                ]
            },
{
                "text": "Petit repas.",
                "examples": [
                    "Prendre une collation."
                ]
            },
{
                "text": "Objet pour se réveiller.",
                "examples": [
                    "Le réveil a sonné."
                ]
            },
{
                "text": "L'étude des nombres, des quantités et des formes.",
                "examples": [
                    "Les mathématiques sont ma matière préférée.",
                    "Nous avons cours de maths à neuf heures."
                ]
            },
{
                "text": "L'étude des événements passés.",
                "examples": [
                    "Nous étudions l'histoire de France.",
                    "Il aime lire des livres d'histoire."
                ]
            },
{
                "text": "L'étude de la nature et du monde physique.",
                "examples": [
                    "La science est très intéressante.",
                    "Aujourd'hui, nous faisons une expérience de science."
                ]
            },
{
                "text": "L'étude des lieux et des relations entre les personnes et leurs environnements.",
                "examples": [
                    "Nous utilisons une carte pour le cours de géographie.",
                    "J'aime étudier la géographie du monde."
                ]
            },
{
                "text": "Un grand chat sauvage avec des rayures noires et oranges.",
                "examples": [
                    "Le tigre court très vite.",
                    "Il y a un tigre dans le parc national."
                ]
            },
{
                "text": "Un animal qui vit dans les arbres et mange des bananes.",
                "examples": [
                    "Le singe saute entre les arbres.",
                    "Les singes sont des animaux amusants."
                ]
            },
{
                "text": "Un très grand animal marin qui respire de l'air.",
                "examples": [
                    "La baleine est l'animal le plus grand du monde.",
                    "Nous avons vu une baleine pendant le voyage."
                ]
            },
{
                "text": "Une forme parfaitement ronde.",
                "examples": [
                    "Dessine un cercle sur la feuille.",
                    "La balle a la forme d'un cercle."
                ]
            },
{
                "text": "Une forme avec trois côtés et trois angles.",
                "examples": [
                    "Un morceau de pizza ressemble à un triangle.",
                    "Le professeur explique le triangle."
                ]
            },
{
                "text": "Un appareil électrique pour griller le pain.",
                "examples": [
                    "J'utilise le grille-pain pour le petit déjeuner.",
                    "Le grille-pain est sur la table de la cuisine."
                ]
            },
{
                "text": "Un four qui utilise des ondes pour chauffer les aliments rapidement.",
                "examples": [
                    "Je chauffe le lait au micro-ondes.",
                    "Le micro-ondes est très utile dans la cuisine."
                ]
            },
{
                "text": "Un instrument utilisé pour mesurer ou tracer des lignes droites.",
                "examples": [
                    "J'utilise la règle pour dessiner une ligne.",
                    "Ma règle mesure trente centimètres."
                ]
            },
{
                "text": "Une personne qui conduit un avion.",
                "examples": [
                    "Le pilote a annoncé l'atterrissage.",
                    "Je veux devenir pilote."
                ]
            },
{
                "text": "Une personne qui sert de la nourriture et des boissons dans un restaurant.",
                "examples": [
                    "Le serveur apporte le menu.",
                    "Demande le compte au serveur."
                ]
            },
{
                "text": "Un médecin qui soigne les dents.",
                "examples": [
                    "J'ai un rendez-vous chez le dentiste à trois heures.",
                    "Le dentiste dit que mes dents vont bien."
                ]
            },
{
                "text": "Un membre de la police.",
                "examples": [
                    "Le policier aide les gens dans la rue.",
                    "Nous avons appelé un policier."
                ]
            },
{
                "text": "Une personne entraînée pour éteindre les incendies.",
                "examples": [
                    "Le pompier est très courageux.",
                    "Les pompiers sont arrivés immédiatement."
                ]
            },
{
                "text": "Une personne qui fait partie d'une armée.",
                "examples": [
                    "Le soldat porte un uniforme.",
                    "Beaucoup de soldats travaillent pour la paix."
                ]
            },
{
                "text": "Une personne qui écrit des livres ou des articles.",
                "examples": [
                    "Mon écrivain préféré est Victor Hugo.",
                    "Il veut être un écrivain célèbre."
                ]
            },
{
                "text": "Une personne qui conçoit des machines, des bâtiments ou des routes.",
                "examples": [
                    "Mon frère est ingénieur civil.",
                    "L'ingénieur travaille sur le nouveau projet."
                ]
            },
{
                "text": "Une personne qui travaille dans un bureau, écrit des lettres et organise des rendez-vous.",
                "examples": [
                    "Le secrétaire répond au téléphone.",
                    "J'ai donné le document au secrétaire."
                ]
            },
{
                "text": "Un accessoire qu'on met sur la tête.",
                "examples": [
                    "Je porte un chapeau quand il y a du soleil.",
                    "Le chapeau est sur la chaise."
                ]
            },
{
                "text": "Un vêtement léger pour la partie supérieure du corps.",
                "examples": [
                    "Je porte un t-shirt blanc.",
                    "As-tu un t-shirt de rechange ?"
                ]
            },
{
                "text": "Un pantalon court qui arrive au-dessus du genou.",
                "examples": [
                    "Je mets un short parce qu'il fait chaud.",
                    "Je porte un short pour jouer au football."
                ]
            },
{
                "text": "Un type de chaussure qui couvre aussi une partie de la jambe.",
                "examples": [
                    "Je mets des bottes quand il pleut.",
                    "Elle a acheté des bottes en cuir."
                ]
            },
{
                "text": "Une bande de tissu qu'on met autour du cou pour rester au chaud.",
                "examples": [
                    "Je mets mon écharpe parce qu'il fait froid.",
                    "Mon écharpe est en laine."
                ]
            },
{
                "text": "Accessoires qui couvrent les mains pour les protéger du froid.",
                "examples": [
                    "Je porte des gants pour skier.",
                    "Où sont mes gants ?"
                ]
            },
{
                "text": "La planète sur laquelle nous vivons ; ou le sol.",
                "examples": [
                    "La Terre est une belle planète.",
                    "Les enfants jouent sur la terre."
                ]
            },
{
                "text": "Une petite montagne avec des flancs doux.",
                "examples": [
                    "Nous faisons une promenade sur la colline.",
                    "Notre maison est sur une colline."
                ]
            },
{
                "text": "Une zone de terre entre des collines ou des montagnes.",
                "examples": [
                    "La rivière coule dans la vallée.",
                    "La vallée est très verte au printemps."
                ]
            },
{
                "text": "Une zone très grande couverte d'arbres.",
                "examples": [
                    "Il y a beaucoup d'animaux dans la forêt.",
                    "La forêt est dense et sombre."
                ]
            },
{
                "text": "Une zone couverte d'arbres, plus petite qu'une forêt.",
                "examples": [
                    "Nous allons chercher des champignons dans le bois.",
                    "Il y a un petit bois près du village."
                ]
            },
{
                "text": "Une grande masse d'eau entourée par la terre.",
                "examples": [
                    "Nous nageons dans le lac en été.",
                    "Le lac est très calme aujourd'hui."
                ]
            },
{
                "text": "Une zone de terre ouverte utilisée pour l'agriculture.",
                "examples": [
                    "Le champ est plein de fleurs.",
                    "Ils travaillent dans le champ toute la journée."
                ]
            },
{
                "text": "La partie plate et verte d'une plante ou d'un arbre.",
                "examples": [
                    "Les feuilles tombent en automne.",
                    "Cette plante a de très grandes feuilles."
                ]
            },
{
                "text": "Un être vivant qui pousse dans la terre et a des racines et des feuilles.",
                "examples": [
                    "Je dois donner de l'eau aux plantes.",
                    "Il y a une plante dans le coin de la pièce."
                ]
            },
{
                "text": "Le monde physique et tout ce qu'il contient, comme les plantes et les animaux.",
                "examples": [
                    "Nous aimons passer du temps dans la nature.",
                    "Nous devons protéger la nature."
                ]
            }
];
})();