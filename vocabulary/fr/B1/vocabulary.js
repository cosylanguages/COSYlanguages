// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "fr_intermediate_places_013",
        "word": "jardin",
        "lang": "fr",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Un jardin public ou un parc.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "🌳",
        "_legacy": {
            "image": "images/vocabulary/places/garden.png",
            "classification": "regular",
            "countability": "countable"
        }
    },
    {
        "id": "fr_intermediate_work_002",
        "word": "ingénieur",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Une personne qui conçoit ou construit des machines ou des structures.",
                "examples": [
                    "L'ingénieur travaille sur un nouveau pont.",
                    "Elle veut être ingénieure civile."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👷",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "ingénieurs"
        }
    },
    {
        "id": "fr_intermediate_work_003",
        "word": "pilote",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Une personne qui conduit un avion ou un hélicoptère.",
                "examples": [
                    "Le pilote est dans le cockpit.",
                    "Il veut devenir pilote."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧑‍✈️",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "pilotes"
        }
    },
    {
        "id": "fr_intermediate_work_004",
        "word": "développeur logiciel",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Une personne qui écrit des programmes informatiques.",
                "examples": [
                    "Le développeur crée une application."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💻",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "développeurs logiciel"
        }
    },
    {
        "id": "fr_intermediate_work_005",
        "word": "carrière",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "La série d'emplois qu'une personne occupe au cours de sa vie professionnelle.",
                "examples": [
                    "Elle a eu une carrière réussie dans la finance."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📈",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "carrières"
        }
    },
    {
        "id": "fr_intermediate_work_006",
        "word": "licenciement",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Perdre son emploi parce que l'employeur n'a plus besoin du poste.",
                "examples": [
                    "Il a reçu une prime de licenciement l'année dernière."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📉",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "licenciements",
            "subtext": "perte d'emploi, réduction d'effectif"
        }
    },
    {
        "id": "fr_intermediate_work_007",
        "word": "travail flexible",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Un arrangement permettant aux employés de varier leurs horaires ou leur lieu de travail.",
                "examples": [
                    "L'entreprise propose le travail flexible à domicile."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏠",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "travaux flexibles"
        }
    },
    {
        "id": "fr_intermediate_work_008",
        "word": "réseautage",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Établir des relations professionnelles pour aider sa carrière.",
                "examples": [
                    "Le réseautage est essentiel dans cette industrie."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤝",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "réseautages"
        }
    },
    {
        "id": "fr_intermediate_work_009",
        "word": "charge de travail",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "La quantité de travail qu'une personne doit faire.",
                "examples": [
                    "Sa charge de travail a beaucoup augmenté ce mois-ci."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📚",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "charges de travail"
        }
    },
    {
        "id": "fr_intermediate_work_010",
        "word": "travail d'équipe",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Travailler efficacement avec d'autres personnes.",
                "examples": [
                    "Un bon travail d'équipe a permis la réussite du projet."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👥",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "travaux d'équipe"
        }
    },
    {
        "id": "fr_intermediate_work_011",
        "word": "ambition",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Un désir fort de réaliser quelque chose.",
                "examples": [
                    "Son ambition est de devenir manager."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🚀",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "ambitions"
        }
    },
    {
        "id": "fr_intermediate_work_012",
        "word": "compétence",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Une capacité à bien faire quelque chose, généralement acquise par la pratique.",
                "examples": [
                    "Les compétences en communication sont très importantes au travail."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛠️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "compétences",
            "subtext": ""
        }
    },
    {
        "id": "fr_intermediate_work_013",
        "word": "congé maternité",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Temps d'arrêt de travail rémunéré donné à une mère après avoir eu un bébé.",
                "examples": [
                    "Elle a pris six mois de congé maternité."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👶",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "congés maternité"
        }
    },
    {
        "id": "fr_intermediate_work_014",
        "word": "retraite",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Argent versé régulièrement à quelqu'un après qu'il a pris sa retraite.",
                "examples": [
                    "Il cotise pour sa retraite chaque mois."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👴",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "retraites",
            "subtext": ""
        }
    },
    {
        "id": "fr_intermediate_work_015",
        "word": "investissement",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Argent placé dans quelque chose afin d'obtenir un profit à l'avenir.",
                "examples": [
                    "L'immobilier est un investissement populaire."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💰",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "investissements"
        }
    },
    {
        "id": "fr_intermediate_work_016",
        "word": "taux d'intérêt",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Le pourcentage facturé pour l'emprunt d'argent ou gagné sur l'épargne.",
                "examples": [
                    "Le taux d'intérêt sur l'hypothèque est de trois pour cent."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📊",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "taux d'intérêt"
        }
    },
    {
        "id": "fr_intermediate_work_017",
        "word": "revenu",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Argent reçu du travail ou d'autres sources.",
                "examples": [
                    "Leur revenu familial est confortable."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💸",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "revenus"
        }
    },
    {
        "id": "fr_intermediate_work_018",
        "word": "assurance",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Un accord par lequel vous payez régulièrement pour être protégé contre les pertes ou les dommages.",
                "examples": [
                    "L'assurance santé est chère dans certains pays."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛡️",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "assurances"
        }
    },
    {
        "id": "fr_intermediate_work_019",
        "word": "impôt",
        "lang": "fr",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Argent payé au gouvernement sur la base des revenus ou des achats.",
                "examples": [
                    "Elle paie beaucoup d'impôts sur le revenu."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏦",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "impôts",
            "subtext": ""
        }
    },
    {
        "id": "fr_intermediate_health_medicine_001",
        "word": "bien-être",
        "lang": "fr",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Un sentiment général d'être à l'aise, en bonne santé et heureux.",
                "examples": [
                    "L'exercice est important pour le bien-être mental."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧘",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "bien-êtres"
        }
    },
    {
        "id": "fr_intermediate_health_medicine_002",
        "word": "santé mentale",
        "lang": "fr",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "L'état psychologique et émotionnel d'une personne.",
                "examples": [
                    "Les entreprises prennent la santé mentale plus au sérieux."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧠",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "fr_intermediate_health_medicine_003",
        "word": "burn-out",
        "lang": "fr",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Un état d'épuisement causé par trop de stress sur une longue période.",
                "examples": [
                    "Elle a souffert de burn-out après avoir travaillé sans pause."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔥",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": null,
            "subtext": ""
        }
    },
    {
        "id": "fr_intermediate_health_medicine_004",
        "word": "prévention",
        "lang": "fr",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Action prise pour empêcher que quelque chose de mauvais ne se produise.",
                "examples": [
                    "Mieux vaut prévenir que guérir."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛡️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "préventions"
        }
    },
    {
        "id": "fr_intermediate_health_medicine_005",
        "word": "symptôme",
        "lang": "fr",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Signes qui suggèrent qu'une personne a une maladie particulière.",
                "examples": [
                    "Les symptômes ont commencé la semaine dernière."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤒",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "symptômes"
        }
    },
    {
        "id": "fr_intermediate_health_medicine_006",
        "word": "thérapie",
        "lang": "fr",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Traitement de problèmes mentaux ou physiques, souvent par la parole.",
                "examples": [
                    "Il va en thérapie une fois par semaine."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛋️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "thérapies"
        }
    },
    {
        "id": "fr_intermediate_people_001",
        "word": "confiance",
        "lang": "fr",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Une croyance ferme en l'honnêteté et la fiabilité de quelqu'un.",
                "examples": [
                    "La confiance est le fondement d'une bonne relation."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤝",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "confiances"
        }
    },
    {
        "id": "fr_intermediate_people_002",
        "word": "conflit",
        "lang": "fr",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Un désaccord ou une dispute grave.",
                "examples": [
                    "Ils ont eu un conflit à propos de l'argent."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚔️",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "conflits"
        }
    },
    {
        "id": "fr_intermediate_people_003",
        "word": "responsabilité",
        "lang": "fr",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Un devoir de prendre soin de quelqu'un ou de quelque chose.",
                "examples": [
                    "Les parents ont une responsabilité envers leurs enfants."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "responsabilités"
        }
    },
    {
        "id": "fr_intermediate_people_004",
        "word": "attente",
        "lang": "fr",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Une croyance sur ce qui va se passer ou ce qui devrait se passer.",
                "examples": [
                    "Elle a des attentes élevées envers son partenaire."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⏳",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "attentes"
        }
    },
    {
        "id": "fr_intermediate_people_005",
        "word": "limite",
        "lang": "fr",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Une limite sur ce que vous êtes prêt à accepter dans une relation.",
                "examples": [
                    "Il est sain de fixer des limites claires."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🚧",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "limites",
            "subtext": ""
        }
    },
    {
        "id": "fr_intermediate_people_006",
        "word": "divorce",
        "lang": "fr",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "La fin légale d'un mariage.",
                "examples": [
                    "Le taux de divorce a augmenté au cours des dernières décennies."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💔",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "divorces"
        }
    },
    {
        "id": "fr_intermediate_social_124",
        "word": "égalité",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "L'état d'être égal en droits et en opportunités.",
                "examples": [
                    "Ils se battent pour l'égalité des sexes au travail."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "égalités",
            "opposite": "inégalité"
        }
    },
    {
        "id": "fr_intermediate_social_125",
        "word": "liberté",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Le droit d'agir et de penser sans restriction.",
                "examples": [
                    "La liberté d'expression est très importante."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗽",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "libertés"
        }
    },
    {
        "id": "fr_intermediate_social_126",
        "word": "inégalité",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Une situation injuste dans laquelle certaines personnes ont plus que d'autres.",
                "examples": [
                    "L'inégalité des revenus s'accroît dans de nombreux pays."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "inégalités",
            "opposite": "égalité"
        }
    },
    {
        "id": "fr_intermediate_social_127",
        "word": "bénévole",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Une personne qui propose de faire quelque chose sans être payée.",
                "examples": [
                    "Elle est bénévole à la banque alimentaire locale."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🙋",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "bénévoles"
        }
    },
    {
        "id": "fr_intermediate_social_128",
        "word": "communauté",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Un groupe de personnes partageant un lieu, une identité ou un intérêt commun.",
                "examples": [
                    "Il est très actif dans sa communauté locale."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏘️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "communautés"
        }
    },
    {
        "id": "fr_intermediate_social_129",
        "word": "génération",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Toutes les personnes d'un âge similaire dans une société.",
                "examples": [
                    "Chaque génération est confrontée à des défis différents."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👥",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "générations"
        }
    },
    {
        "id": "fr_intermediate_environment_002",
        "word": "changement climatique",
        "lang": "fr",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Changements à long terme des températures et des conditions météorologiques mondiales.",
                "examples": [
                    "Le changement climatique est le plus grand défi de notre époque."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🌍",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "fr_intermediate_environment_003",
        "word": "énergie renouvelable",
        "lang": "fr",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Énergie provenant de sources naturelles qui ne s'épuisent pas, comme le vent ou le soleil.",
                "examples": [
                    "L'entreprise est passée à l'énergie renouvelable."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "☀️",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "énergies renouvelables"
        }
    },
    {
        "id": "fr_intermediate_environment_004",
        "word": "empreinte carbone",
        "lang": "fr",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "La quantité totale de gaz à effet de serre produits par les activités d'une personne.",
                "examples": [
                    "Prendre l'avion augmente votre empreinte carbone."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👣",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "empreintes carbone"
        }
    },
    {
        "id": "fr_intermediate_environment_005",
        "word": "gaspillage",
        "lang": "fr",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Matériel qui n'est plus nécessaire et qui est jeté.",
                "examples": [
                    "Nous devons réduire le gaspillage alimentaire."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗑️",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "gaspillages",
            "subtext": ""
        }
    },
    {
        "id": "fr_intermediate_language_001",
        "word": "cependant",
        "lang": "fr",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Utilisé pour introduire une idée contrastée ou opposée.",
                "examples": [
                    "J'aime la ville. Cependant, c'est très cher."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔄",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "fr_intermediate_language_002",
        "word": "bien que",
        "lang": "fr",
        "level": "intermediate",
        "theme": "language",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Malgré le fait que ; même si.",
                "examples": [
                    "Bien qu'elle soit fatiguée, elle va à la gym."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔗"
    },
    {
        "id": "fr_intermediate_language_003",
        "word": "d'un autre côté",
        "lang": "fr",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Utilisé pour introduire un point contrasté.",
                "examples": [
                    "La vie en ville est excitante. D'un autre côté, c'est stressant."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "subtext": "en revanche, par contre"
        }
    },
    {
        "id": "fr_intermediate_social_130",
        "word": "à mon avis",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "adverb",
        "definitions": [
            {
                "text": "Utilisé pour introduire votre point de vue personnel.",
                "examples": [
                    "À mon avis, le travail à distance est plus productif."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗣️",
        "_legacy": {
            "subtext": "selon moi, d'après moi"
        }
    },
    {
        "id": "fr_intermediate_language_004",
        "word": "par conséquent",
        "lang": "fr",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "À cause de cela ; par suite.",
                "examples": [
                    "Il a travaillé dur. Par conséquent, il a obtenu une promotion."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "➡️",
        "_legacy": {
            "subtext": "en conséquence, du coup"
        }
    },
    {
        "id": "fr_intermediate_food_drink_001",
        "word": "quiche",
        "lang": "fr",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Une tarte salée garnie d'un mélange d'œufs et de crème.",
                "examples": [
                    "La quiche lorraine est très connue."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🥧",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "quiches"
        }
    },
    {
        "id": "fr_intermediate_food_drink_002",
        "word": "escargot",
        "lang": "fr",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Des mollusques terrestres souvent cuisinés avec du beurre et de l'ail.",
                "examples": [
                    "Les escargots sont une spécialité française."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🐌",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "escargots"
        }
    },
    {
        "id": "fr_intermediate_food_drink_003",
        "word": "limonade",
        "lang": "fr",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Une boisson fraîche à base de citron, d'eau et de sucre.",
                "examples": [
                    "La limonade est pétillante."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🥤",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "limonades"
        }
    },
    {
        "id": "fr_intermediate_travel_001",
        "word": "bibliothèque",
        "lang": "fr",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Un endroit avec beaucoup de livres que l'on peut lire ou emprunter.",
                "examples": [
                    "J'étudie à la bibliothèque."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📚",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "bibliothèques"
        }
    },
    {
        "id": "fr_intermediate_travel_002",
        "word": "musée",
        "lang": "fr",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Un bâtiment où l'on expose des objets d'art, d'histoire ou de science.",
                "examples": [
                    "Nous avons visité le musée du Louvre."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏛️",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "musées"
        }
    },
    {
        "id": "fr_intermediate_home_living_001",
        "word": "armoire",
        "lang": "fr",
        "level": "intermediate",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Un meuble pour ranger les vêtements.",
                "examples": [
                    "Mes vêtements sont dans l'armoire."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👗",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "armoires"
        }
    },
    {
        "id": "fr_intermediate_environment_nature_001",
        "word": "éléphant",
        "lang": "fr",
        "level": "intermediate",
        "theme": "environment_nature",
        "form": "noun",
        "definitions": [
            {
                "text": "Un très grand animal gris avec une trompe.",
                "examples": [
                    "L'éléphant est un animal intelligent."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🐘",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "éléphants"
        }
    },
    {
        "id": "fr_intermediate_environment_nature_002",
        "word": "singe",
        "lang": "fr",
        "level": "intermediate",
        "theme": "environment_nature",
        "form": "noun",
        "definitions": [
            {
                "text": "Un animal qui grimpe aux arbres et ressemble à l'homme.",
                "examples": [
                    "Le singe mange une banane."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🐒",
        "_legacy": {
            "article": "le",
            "classification": "regular",
            "plural": "singes"
        }
    },
    {
        "id": "fr_intermediate_science_tech_001",
        "word": "algorithme",
        "lang": "fr",
        "level": "intermediate",
        "theme": "science_tech",
        "form": "noun",
        "definitions": [
            {
                "text": "Une suite d'instructions permettant de résoudre un problème.",
                "examples": [
                    "Les réseaux sociaux utilisent des algorithmes."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💻",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "algorithmes"
        }
    },
    {
        "id": "fr_intermediate_social_131",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData['fr'] = [...(window.vocabularyData['fr'] || []), ...data];
})();