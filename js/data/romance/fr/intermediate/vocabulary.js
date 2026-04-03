(function() {
    const data = [
    {
        "word": "ingénieur",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "l'",
        "emoji": "👷",
        "form": "noun",
        "plural": "ingénieurs",
        "definitions": [
            {
                "text": "Une personne qui conçoit ou construit des machines ou des structures.",
                "examples": [
                    "L'ingénieur travaille sur un nouveau pont.",
                    "Elle veut être ingénieure civile."
                ]
            }
        ]
    },
    {
        "word": "pilote",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "le",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "plural": "pilotes",
        "definitions": [
            {
                "text": "Une personne qui conduit un avion ou un hélicoptère.",
                "examples": [
                    "Le pilote est dans le cockpit.",
                    "Il veut devenir pilote."
                ]
            }
        ]
    },
    {
        "word": "développeur logiciel",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "le",
        "emoji": "💻",
        "form": "noun",
        "plural": "développeurs logiciel",
        "definitions": [
            {
                "text": "Une personne qui écrit des programmes informatiques.",
                "examples": [
                    "Le développeur crée une application."
                ]
            }
        ]
    },
    {
        "word": "carrière",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "la",
        "emoji": "📈",
        "form": "noun",
        "plural": "carrières",
        "definitions": [
            {
                "text": "La série d'emplois qu'une personne occupe au cours de sa vie professionnelle.",
                "examples": [
                    "Elle a eu une carrière réussie dans la finance."
                ]
            }
        ]
    },
    {
        "word": "licenciement",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "le",
        "emoji": "📉",
        "form": "noun",
        "plural": "licenciements",
        "subtext": "perte d'emploi, réduction d'effectif",
        "definitions": [
            {
                "text": "Perdre son emploi parce que l'employeur n'a plus besoin du poste.",
                "examples": [
                    "Il a reçu une prime de licenciement l'année dernière."
                ]
            }
        ]
    },
    {
        "word": "travail flexible",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "article": "le",
        "emoji": "🏠",
        "form": "noun",
        "plural": "travaux flexibles",
        "definitions": [
            {
                "text": "Un arrangement permettant aux employés de varier leurs horaires ou leur lieu de travail.",
                "examples": [
                    "L'entreprise propose le travail flexible à domicile."
                ]
            }
        ]
    },
    {
        "word": "réseautage",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "le",
        "emoji": "🤝",
        "form": "noun",
        "plural": "réseautages",
        "definitions": [
            {
                "text": "Établir des relations professionnelles pour aider sa carrière.",
                "examples": [
                    "Le réseautage est essentiel dans cette industrie."
                ]
            }
        ]
    },
    {
        "word": "charge de travail",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "article": "la",
        "emoji": "📚",
        "form": "noun",
        "plural": "charges de travail",
        "definitions": [
            {
                "text": "La quantité de travail qu'une personne doit faire.",
                "examples": [
                    "Sa charge de travail a beaucoup augmenté ce mois-ci."
                ]
            }
        ]
    },
    {
        "word": "travail d'équipe",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
        "article": "le",
        "emoji": "👥",
        "form": "noun",
        "plural": "travaux d'équipe",
        "definitions": [
            {
                "text": "Travailler efficacement avec d'autres personnes.",
                "examples": [
                    "Un bon travail d'équipe a permis la réussite du projet."
                ]
            }
        ]
    },
    {
        "word": "ambition",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "l'",
        "emoji": "🚀",
        "form": "noun",
        "plural": "ambitions",
        "definitions": [
            {
                "text": "Un désir fort de réaliser quelque chose.",
                "examples": [
                    "Son ambition est de devenir manager."
                ]
            }
        ]
    },
    {
        "word": "compétence",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "la",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "compétences",
        "subtext": "",
        "synonyms": ["savoir-faire", "habileté"],
        "definitions": [
            {
                "text": "Une capacité à bien faire quelque chose, généralement acquise par la pratique.",
                "examples": [
                    "Les compétences en communication sont très importantes au travail."
                ]
            }
        ]
    },
    {
        "word": "congé maternité",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "article": "le",
        "emoji": "👶",
        "form": "noun",
        "plural": "congés maternité",
        "definitions": [
            {
                "text": "Temps d'arrêt de travail rémunéré donné à une mère après avoir eu un bébé.",
                "examples": [
                    "Elle a pris six mois de congé maternité."
                ]
            }
        ]
    },
    {
        "word": "retraite",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "la",
        "emoji": "👴",
        "form": "noun",
        "plural": "retraites",
        "subtext": "",
        "synonyms": ["pension"],
        "definitions": [
            {
                "text": "Argent versé régulièrement à quelqu'un après qu'il a pris sa retraite.",
                "examples": [
                    "Il cotise pour sa retraite chaque mois."
                ]
            }
        ]
    },
    {
        "word": "investissement",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "l'",
        "emoji": "💰",
        "form": "noun",
        "plural": "investissements",
        "definitions": [
            {
                "text": "Argent placé dans quelque chose afin d'obtenir un profit à l'avenir.",
                "examples": [
                    "L'immobilier est un investissement populaire."
                ]
            }
        ]
    },
    {
        "word": "taux d'intérêt",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "le",
        "emoji": "📊",
        "form": "noun",
        "plural": "taux d'intérêt",
        "definitions": [
            {
                "text": "Le pourcentage facturé pour l'emprunt d'argent ou gagné sur l'épargne.",
                "examples": [
                    "Le taux d'intérêt sur l'hypothèque est de trois pour cent."
                ]
            }
        ]
    },
    {
        "word": "revenu",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "le",
        "emoji": "💸",
        "form": "noun",
        "plural": "revenus",
        "definitions": [
            {
                "text": "Argent reçu du travail ou d'autres sources.",
                "examples": [
                    "Leur revenu familial est confortable."
                ]
            }
        ]
    },
    {
        "word": "assurance",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "l'",
        "emoji": "🛡️",
        "form": "noun",
        "plural": "assurances",
        "definitions": [
            {
                "text": "Un accord par lequel vous payez régulièrement pour être protégé contre les pertes ou les dommages.",
                "examples": [
                    "L'assurance santé est chère dans certains pays."
                ]
            }
        ]
    },
    {
        "word": "impôt",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "l'",
        "emoji": "🏦",
        "form": "noun",
        "plural": "impôts",
        "subtext": "",
        "synonyms": ["taxe"],
        "definitions": [
            {
                "text": "Argent payé au gouvernement sur la base des revenus ou des achats.",
                "examples": [
                    "Elle paie beaucoup d'impôts sur le revenu."
                ]
            }
        ]
    },
    {
        "word": "bien-être",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "article": "le",
        "emoji": "🧘",
        "form": "noun",
        "plural": "bien-êtres",
        "definitions": [
            {
                "text": "Un sentiment général d'être à l'aise, en bonne santé et heureux.",
                "examples": [
                    "L'exercice est important pour le bien-être mental."
                ]
            }
        ]
    },
    {
        "word": "santé mentale",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "article": "la",
        "emoji": "🧠",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "L'état psychologique et émotionnel d'une personne.",
                "examples": [
                    "Les entreprises prennent la santé mentale plus au sérieux."
                ]
            }
        ]
    },
    {
        "word": "burn-out",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "article": "le",
        "emoji": "🔥",
        "form": "noun",
        "plural": null,
        "subtext": "",
        "synonyms": ["épuisement professionnel"],
        "definitions": [
            {
                "text": "Un état d'épuisement causé par trop de stress sur une longue période.",
                "examples": [
                    "Elle a souffert de burn-out après avoir travaillé sans pause."
                ]
            }
        ]
    },
    {
        "word": "prévention",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "article": "la",
        "emoji": "🛡️",
        "form": "noun",
        "plural": "préventions",
        "definitions": [
            {
                "text": "Action prise pour empêcher que quelque chose de mauvais ne se produise.",
                "examples": [
                    "Mieux vaut prévenir que guérir."
                ]
            }
        ]
    },
    {
        "word": "symptôme",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "article": "le",
        "emoji": "🤒",
        "form": "noun",
        "plural": "symptômes",
        "definitions": [
            {
                "text": "Signes qui suggèrent qu'une personne a une maladie particulière.",
                "examples": [
                    "Les symptômes ont commencé la semaine dernière."
                ]
            }
        ]
    },
    {
        "word": "thérapie",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "article": "la",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "thérapies",
        "definitions": [
            {
                "text": "Traitement de problèmes mentaux ou physiques, souvent par la parole.",
                "examples": [
                    "Il va en thérapie une fois par semaine."
                ]
            }
        ]
    },
    {
        "word": "confiance",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "la",
        "emoji": "🤝",
        "form": "noun",
        "plural": "confiances",
        "definitions": [
            {
                "text": "Une croyance ferme en l'honnêteté et la fiabilité de quelqu'un.",
                "examples": [
                    "La confiance est le fondement d'une bonne relation."
                ]
            }
        ]
    },
    {
        "word": "conflit",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "le",
        "emoji": "⚔️",
        "form": "noun",
        "plural": "conflits",
        "definitions": [
            {
                "text": "Un désaccord ou une dispute grave.",
                "examples": [
                    "Ils ont eu un conflit à propos de l'argent."
                ]
            }
        ]
    },
    {
        "word": "responsabilité",
        "level": "intermediate",
        "theme": "parenting_childcare_B1",
        "article": "la",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "responsabilités",
        "definitions": [
            {
                "text": "Un devoir de prendre soin de quelqu'un ou de quelque chose.",
                "examples": [
                    "Les parents ont une responsabilité envers leurs enfants."
                ]
            }
        ]
    },
    {
        "word": "attente",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "l'",
        "emoji": "⏳",
        "form": "noun",
        "plural": "attentes",
        "definitions": [
            {
                "text": "Une croyance sur ce qui va se passer ou ce qui devrait se passer.",
                "examples": [
                    "Elle a des attentes élevées envers son partenaire."
                ]
            }
        ]
    },
    {
        "word": "limite",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "la",
        "emoji": "🚧",
        "form": "noun",
        "plural": "limites",
        "subtext": "",
        "synonyms": ["frontière", "borne"],
        "definitions": [
            {
                "text": "Une limite sur ce que vous êtes prêt à accepter dans une relation.",
                "examples": [
                    "Il est sain de fixer des limites claires."
                ]
            }
        ]
    },
    {
        "word": "divorce",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "le",
        "emoji": "💔",
        "form": "noun",
        "plural": "divorces",
        "definitions": [
            {
                "text": "La fin légale d'un mariage.",
                "examples": [
                    "Le taux de divorce a augmenté au cours des dernières décennies."
                ]
            }
        ]
    },
    {
        "word": "égalité",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "article": "l'",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "égalités",
        "opposite": "inégalité",
        "definitions": [
            {
                "text": "L'état d'être égal en droits et en opportunités.",
                "examples": [
                    "Ils se battent pour l'égalité des sexes au travail."
                ]
            }
        ]
    },
    {
        "word": "liberté",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "article": "la",
        "emoji": "🗽",
        "form": "noun",
        "plural": "libertés",
        "definitions": [
            {
                "text": "Le droit d'agir et de penser sans restriction.",
                "examples": [
                    "La liberté d'expression est très importante."
                ]
            }
        ]
    },
    {
        "word": "inégalité",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "article": "l'",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "inégalités",
        "opposite": "égalité",
        "definitions": [
            {
                "text": "Une situation injuste dans laquelle certaines personnes ont plus que d'autres.",
                "examples": [
                    "L'inégalité des revenus s'accroît dans de nombreux pays."
                ]
            }
        ]
    },
    {
        "word": "bénévole",
        "level": "intermediate",
        "theme": "society_community_B1",
        "article": "le",
        "emoji": "🙋",
        "form": "noun",
        "plural": "bénévoles",
        "definitions": [
            {
                "text": "Une personne qui propose de faire quelque chose sans être payée.",
                "examples": [
                    "Elle est bénévole à la banque alimentaire locale."
                ]
            }
        ]
    },
    {
        "word": "communauté",
        "level": "intermediate",
        "theme": "society_community_B1",
        "article": "la",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "communautés",
        "definitions": [
            {
                "text": "Un groupe de personnes partageant un lieu, une identité ou un intérêt commun.",
                "examples": [
                    "Il est très actif dans sa communauté locale."
                ]
            }
        ]
    },
    {
        "word": "génération",
        "level": "intermediate",
        "theme": "society_community_B1",
        "article": "la",
        "emoji": "👥",
        "form": "noun",
        "plural": "générations",
        "definitions": [
            {
                "text": "Toutes les personnes d'un âge similaire dans une société.",
                "examples": [
                    "Chaque génération est confrontée à des défis différents."
                ]
            }
        ]
    },
    {
        "word": "changement climatique",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "article": "le",
        "emoji": "🌍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Changements à long terme des températures et des conditions météorologiques mondiales.",
                "examples": [
                    "Le changement climatique est le plus grand défi de notre époque."
                ]
            }
        ]
    },
    {
        "word": "énergie renouvelable",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "article": "l'",
        "emoji": "☀️",
        "form": "noun",
        "plural": "énergies renouvelables",
        "definitions": [
            {
                "text": "Énergie provenant de sources naturelles qui ne s'épuisent pas, comme le vent ou le soleil.",
                "examples": [
                    "L'entreprise est passée à l'énergie renouvelable."
                ]
            }
        ]
    },
    {
        "word": "empreinte carbone",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "article": "l'",
        "emoji": "👣",
        "form": "noun",
        "plural": "empreintes carbone",
        "definitions": [
            {
                "text": "La quantité totale de gaz à effet de serre produits par les activités d'une personne.",
                "examples": [
                    "Prendre l'avion augmente votre empreinte carbone."
                ]
            }
        ]
    },
    {
        "word": "gaspillage",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "article": "le",
        "emoji": "🗑️",
        "form": "noun",
        "plural": "gaspillages",
        "subtext": "",
        "synonyms": ["déchets"],
        "definitions": [
            {
                "text": "Matériel qui n'est plus nécessaire et qui est jeté.",
                "examples": [
                    "Nous devons réduire le gaspillage alimentaire."
                ]
            }
        ]
    },
    {
        "word": "cependant",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "🔄",
        "form": "adverb",
        "subtext": "",
        "synonyms": ["toutefois", "pourtant"],
        "definitions": [
            {
                "text": "Utilisé pour introduire une idée contrastée ou opposée.",
                "examples": [
                    "J'aime la ville. Cependant, c'est très cher."
                ]
            }
        ]
    },
    {
        "word": "bien que",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "🔗",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Malgré le fait que ; même si.",
                "examples": [
                    "Bien qu'elle soit fatiguée, elle va à la gym."
                ]
            }
        ]
    },
    {
        "word": "d'un autre côté",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "⚖️",
        "form": "adverb",
        "subtext": "en revanche, par contre",
        "definitions": [
            {
                "text": "Utilisé pour introduire un point contrasté.",
                "examples": [
                    "La vie en ville est excitante. D'un autre côté, c'est stressant."
                ]
            }
        ]
    },
    {
        "word": "à mon avis",
        "level": "intermediate",
        "theme": "expressing_opinion_B1",
        "emoji": "🗣️",
        "form": "adverb",
        "subtext": "selon moi, d'après moi",
        "definitions": [
            {
                "text": "Utilisé pour introduire votre point de vue personnel.",
                "examples": [
                    "À mon avis, le travail à distance est plus productif."
                ]
            }
        ]
    },
    {
        "word": "par conséquent",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "➡️",
        "form": "adverb",
        "subtext": "en conséquence, du coup",
        "definitions": [
            {
                "text": "À cause de cela ; par suite.",
                "examples": [
                    "Il a travaillé dur. Par conséquent, il a obtenu une promotion."
                ]
            }
        ]
    },
    {
        "word": "quiche",
        "level": "intermediate",
        "theme": "food_culture_cuisine_B1",
        "article": "la",
        "emoji": "🥧",
        "form": "noun",
        "plural": "quiches",
        "definitions": [
            {
                "text": "Une tarte salée garnie d'un mélange d'œufs et de crème.",
                "examples": [
                    "La quiche lorraine est très connue."
                ]
            }
        ]
    },
    {
        "word": "escargot",
        "level": "intermediate",
        "theme": "food_culture_cuisine_B1",
        "article": "l'",
        "emoji": "🐌",
        "form": "noun",
        "plural": "escargots",
        "definitions": [
            {
                "text": "Des mollusques terrestres souvent cuisinés avec du beurre et de l'ail.",
                "examples": [
                    "Les escargots sont une spécialité française."
                ]
            }
        ]
    },
    {
        "word": "limonade",
        "level": "intermediate",
        "theme": "food_culture_cuisine_B1",
        "article": "la",
        "emoji": "🥤",
        "form": "noun",
        "plural": "limonades",
        "definitions": [
            {
                "text": "Une boisson fraîche à base de citron, d'eau et de sucre.",
                "examples": [
                    "La limonade est pétillante."
                ]
            }
        ]
    },
    {
        "word": "bibliothèque",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "article": "la",
        "emoji": "📚",
        "form": "noun",
        "plural": "bibliothèques",
        "definitions": [
            {
                "text": "Un endroit avec beaucoup de livres que l'on peut lire ou emprunter.",
                "examples": [
                    "J'étudie à la bibliothèque."
                ]
            }
        ]
    },
    {
        "word": "musée",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "article": "le",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "musées",
        "definitions": [
            {
                "text": "Un bâtiment où l'on expose des objets d'art, d'histoire ou de science.",
                "examples": [
                    "Nous avons visité le musée du Louvre."
                ]
            }
        ]
    },
    {
        "word": "armoire",
        "level": "intermediate",
        "theme": "home_living",
        "article": "l'",
        "emoji": "👗",
        "form": "noun",
        "plural": "armoires",
        "definitions": [
            {
                "text": "Un meuble pour ranger les vêtements.",
                "examples": [
                    "Mes vêtements sont dans l'armoire."
                ]
            }
        ]
    },
    {
        "word": "éléphant",
        "level": "intermediate",
        "theme": "environment_nature",
        "article": "l'",
        "emoji": "🐘",
        "form": "noun",
        "plural": "éléphants",
        "definitions": [
            {
                "text": "Un très grand animal gris avec une trompe.",
                "examples": [
                    "L'éléphant est un animal intelligent."
                ]
            }
        ]
    },
    {
        "word": "singe",
        "level": "intermediate",
        "theme": "environment_nature",
        "article": "le",
        "emoji": "🐒",
        "form": "noun",
        "plural": "singes",
        "definitions": [
            {
                "text": "Un animal qui grimpe aux arbres et ressemble à l'homme.",
                "examples": [
                    "Le singe mange une banane."
                ]
            }
        ]
    },
    {
        "word": "algorithme",
        "level": "intermediate",
        "theme": "science_tech",
        "article": "l'",
        "emoji": "💻",
        "form": "noun",
        "plural": "algorithmes",
        "definitions": [
            {
                "text": "Une suite d'instructions permettant de résoudre un problème.",
                "examples": [
                    "Les réseaux sociaux utilisent des algorithmes."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
