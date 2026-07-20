(function() {
    const lang = "fr";
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
                    "antonyms": [
                            "inégalité"
                    ]
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
                    "antonyms": [
                            "égalité"
                    ]
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
            "theme": "environment",
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
            "theme": "environment",
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
            "theme": "technology",
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
    },
    {
            "id": "fr_intermediate_social_132",
            "word": "le surmenage",
            "lang": "fr",
            "level": "intermediate",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "effondrement physique ou mental causé par un excès de travail ou de stress.",
                            "examples": [
                                    "De nombreux employés souffrent de surmenage à cause des longues heures de travail."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_social_133",
            "word": "la productivité",
            "lang": "fr",
            "level": "intermediate",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "l'efficacité de l'effort productif, mesurée par le taux de production par unité de ressources.",
                            "examples": [
                                    "Des études montrent que des semaines plus courtes peuvent réellement augmenter la productivité."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_social_134",
            "word": "la rétention",
            "lang": "fr",
            "level": "intermediate",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "la capacité d'une entreprise à conserver ses employés.",
                            "examples": [
                                    "Une semaine de 4 jours peut améliorer considérablement la rétention du personnel."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_social_135",
            "word": "les frais généraux",
            "lang": "fr",
            "level": "intermediate",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "les coûts réguliers de fonctionnement d'une entreprise (loyer, électricité, etc.).",
                            "examples": [
                                    "Fermer le bureau un jour de plus peut réduire les frais généraux."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_social_136",
            "word": "la flexibilité",
            "lang": "fr",
            "level": "intermediate",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "la qualité de s'adapter facilement ou d'être facilement modifié.",
                            "examples": [
                                    "Les travailleurs modernes apprécient la flexibilité plus qu'un salaire élevé."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_social_137",
            "word": "l'essai",
            "lang": "fr",
            "level": "intermediate",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "un test formel de quelque chose, généralement sur un lieu de travail.",
                            "examples": [
                                    "Le gouvernement lance un essai national de la semaine de 4 jours."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_social_138",
            "word": "le rendement",
            "lang": "fr",
            "level": "intermediate",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "la quantité de quelque chose produite par une personne, une machine ou une industrie.",
                            "examples": [
                                    "Les managers devraient se concentrer sur le rendement plutôt que sur les heures passées au bureau."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_social_139",
            "word": "la mise en œuvre",
            "lang": "fr",
            "level": "intermediate",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "le processus de mise en pratique d'une décision ou d'un plan.",
                            "examples": [
                                    "La mise en œuvre du nouvel emploi du temps a pris plusieurs mois."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_001",
            "word": "nostalgie",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "désir pour le passé.",
                            "examples": [
                                    "Je ressens de la nostalgie."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_002",
            "word": "ambiguïté",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "plusieurs interprétations.",
                            "examples": [
                                    "La citation est ambiguë."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_003",
            "word": "perspective",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "point de vue.",
                            "examples": [
                                    "Ma perspective est différente."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_004",
            "word": "résonner",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "évoquer un sentiment.",
                            "examples": [
                                    "Cela résonne en moi."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_005",
            "word": "paradoxe",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "auto-contradiction.",
                            "examples": [
                                    "C'est un paradoxe."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_006",
            "word": "authenticité",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "être authentique.",
                            "examples": [
                                    "Je valorise l'authenticité."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_007",
            "word": "aperçu",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "compréhension profonde.",
                            "examples": [
                                    "Il m'a donné un aperçu."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_008",
            "word": "abstrait",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "non concret.",
                            "examples": [
                                    "L'idée est abstraite."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_009",
            "word": "sagesse",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "expérience et savoir.",
                            "examples": [
                                    "Elle a une grande sagesse."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_010",
            "word": "réflexion",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "pensée sérieuse.",
                            "examples": [
                                    "J'ai besoin de réflexion."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_011",
            "word": "empathie ≠ apathie",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "capacité de comprendre et partager les sentiments d'autrui ≠ absence d'émotion, d'intérêt ou d'enthousiasme.",
                            "examples": [
                                    "Faire preuve d'empathie permet de créer des liens forts, alors que l'apathie mène à l'isolement."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_012",
            "word": "conscient ≠ inconscient",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qui a la conscience de ses pensées et actes ≠ qui a perdu la conscience ou agit sans réflexion.",
                            "examples": [
                                    "Elle a pris une décision pleinement consciente, évitant ainsi un choix impulsif et inconscient."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_013",
            "word": "détachement ≠ attachement",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "état d'indépendance d'esprit, recul par rapport aux choses ≠ sentiment d'affection et de dépendance.",
                            "examples": [
                                    "Trouver le bon équilibre entre le détachement philosophique et l'attachement émotionnel est un art difficile."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_014",
            "word": "vulnérabilité",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "être exposé aux blessures.",
                            "examples": [
                                    "La vulnérabilité est une force."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_015",
            "word": "projection",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "attribuer des traits aux autres.",
                            "examples": [
                                    "C'était une projection psychologique."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_016",
            "word": "subconscient",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "partie de l'esprit non consciente.",
                            "examples": [
                                    "Le rêve venait du subconscient."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_017",
            "word": "état d'esprit",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "ensemble d'attitudes.",
                            "examples": [
                                    "Gardez un bon état d'esprit."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_018",
            "word": "biais",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "préjugé en faveur de quelque chose.",
                            "examples": [
                                    "Vérifiez vos biais internes."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_019",
            "word": "intuition",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "capacité à comprendre instinctivement.",
                            "examples": [
                                    "Faites confiance à votre intuition."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_020",
            "word": "cognitif",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relatif aux processus mentaux.",
                            "examples": [
                                    "La charge cognitive est élevée."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_021",
            "word": "la connaissance",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "L'ensemble des savoirs acquis par l'étude ou l'expérience.",
                            "examples": [
                                    "La recherche de la connaissance est le but d'une vie philosophique."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_022",
            "word": "l'ignorance (f)",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Le fait de ne pas savoir ou de manquer d'information.",
                            "examples": [
                                    "L'ignorance peut être un obstacle au progrès social."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_023",
            "word": "la vertu",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Une disposition morale à faire le bien.",
                            "examples": [
                                    "Pour Socrate, la vertu est inséparable de la connaissance."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_024",
            "word": "la remise en question",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "L'action d'examiner à nouveau quelque chose pour le contester.",
                            "examples": [
                                    "La remise en question de nos préjugés est nécessaire pour grandir."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_025",
            "word": "l'âme (f)",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Le principe de vie et de pensée de l'être humain.",
                            "examples": [
                                    "Socrate croyait qu'il fallait prendre soin de son âme avant tout."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_026",
            "word": "le dialogue",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Un échange de paroles entre deux ou plusieurs personnes.",
                            "examples": [
                                    "Le dialogue socratique permet de découvrir la vérité ensemble."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_027",
            "word": "la vérité",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Ce qui est conforme à la réalité.",
                            "examples": [
                                    "La quête de la vérité demande du courage et de la persévérance."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_art_culture_028",
            "word": "la justice",
            "lang": "fr",
            "level": "intermediate",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Le principe moral qui exige le respect du droit et de l'équité.",
                            "examples": [
                                    "La justice est l'un des piliers de la cité idéale."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_001",
            "word": "symétrique",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "dont les parties sont disposées de manière régulière et identique de part et d'autre d'un axe.",
                            "examples": [
                                    "Les chaînes de distribution exigent des fruits parfaitement symétriques pour plaire à l'œil."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_002",
            "word": "asymétrique",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qui manque de symétrie; irrégulier dans sa forme naturelle.",
                            "examples": [
                                    "Un poivron asymétrique conserve pourtant toutes ses qualités gustatives originales."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_003",
            "word": "anti-gaspillage",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relatif aux mesures destinées à éviter la perte de ressources consommables.",
                            "examples": [
                                    "L'opération anti-gaspillage d'Intermarché a rencontré un immense succès populaire."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_004",
            "word": "calibrer",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "mesurer et trier les dimensions d'un produit selon des normes standardisées.",
                            "examples": [
                                    "Les machines industrielles servent à calibrer chaque pomme avant la mise en carton."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_005",
            "word": "impeccable",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qui ne présente aucun défaut ou aucune imperfection visible; parfait.",
                            "examples": [
                                    "Le rendu impeccable des rayons de légumes nous éloigne de la vraie terre agricole."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_006",
            "word": "déformé",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qui a perdu sa forme naturelle ou habituelle sous l'effet d'une anomalie de pousse.",
                            "examples": [
                                    "Cette courgette un peu déformée fera une excellente soupe ce soir."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_007",
            "word": "irréaliste",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qui ne correspond pas aux faits réels de la nature ou de l'existence.",
                            "examples": [
                                    "Imposer des règles de beauté irréalistes à la nature engendre un gaspillage monstrueux."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_008",
            "word": "nutritif",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qui contient les nutriments nécessaires au bon développement de l'organisme.",
                            "examples": [
                                    "Un fruit moche et bio s'avère souvent bien plus nutritif qu'un fruit parfait et traité aux pesticides."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_009",
            "word": "faire le deuil",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "éprouver de la tristesse suite à une perte ou à une fin.",
                            "examples": [
                                    "Il est tout à fait naturel de faire le deuil d'un univers de fiction qui nous était cher."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_010",
            "word": "parasocial",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qualifie une relation unilatérale où l'on investit de l'énergie émotionnelle dans des figures publiques ou imaginaires.",
                            "examples": [
                                    "Les réseaux sociaux et les séries renforcent ce lien parasocial étrange mais puissant."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_011",
            "word": "gavage télévisuel",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "action de visionner de nombreux épisodes d'une série à la suite sans s'arrêter.",
                            "examples": [
                                    "Le gavage télévisuel nous fait perdre le sens du temps réel."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_012",
            "word": "catharsis",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "libération d'émotions fortes à travers l'expérience artistique ou dramatique.",
                            "examples": [
                                    "Pleurer devant une fin tragique procure une véritable catharsis émotionnelle."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_013",
            "word": "échappatoire",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "moyen de fuir les difficultés ou la monotonie du quotidien.",
                            "examples": [
                                    "Cette comédie légère nous a servi d'échappatoire durant des mois difficiles."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_014",
            "word": "mélancolie",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "tristesse douce et pensive sans cause précise.",
                            "examples": [
                                    "Une douce mélancolie s'installe quand le générique de fin défile pour la dernière fois."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_015",
            "word": "s'entrelacer",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "verb",
            "definitions": [
                    {
                            "text": "se mêler, s'unir de manière intime et complexe.",
                            "examples": [
                                    "Nos propres souvenirs de vacances finissent par s'entrelacer avec l'intrigue de la série."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_016",
            "word": "attachement",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "lien d'affection ou de dépendance émotionnelle envers quelqu'un ou quelque chose.",
                            "examples": [
                                    "Son attachement excessif à ce personnage principal l'a beaucoup surprise."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_017",
            "word": "dénouement",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "la manière dont se termine et se résout une intrigue dramatique.",
                            "examples": [
                                    "Le dénouement inattendu de ce drame policier a laissé les spectateurs sans voix."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_018",
            "word": "album-concept",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "un album dont les morceaux sont unis par un thème ou une histoire commune.",
                            "examples": [
                                    "L'album-concept est devenu une forme artistique de plus en plus rare de nos jours."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_019",
            "word": "viral",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "qui se diffuse rapidement et largement sur internet de manière organique.",
                            "examples": [
                                    "Un extrait de quelques secondes est devenu viral en moins d'une semaine sur les réseaux sociaux."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_020",
            "word": "single",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "un morceau de musique publié individuellement pour promouvoir un projet.",
                            "examples": [
                                    "L'industrie musicale actuelle préfère multiplier les sorties de singles plutôt que les disques complets."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_021",
            "word": "extrait",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "une petite partie isolée d'un morceau musical ou d'une œuvre littéraire.",
                            "examples": [
                                    "Les applications modernes ne nous font écouter qu'un court extrait de chaque nouveauté."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_022",
            "word": "cohérent",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "dont les différentes parties sont logiquement et esthétiquement liées entre elles.",
                            "examples": [
                                    "Ce disque se présente comme une œuvre cohérente qui doit s'écouter dans l'ordre original."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_023",
            "word": "consommer",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "utiliser des biens ou des contenus culturels de manière passive ou active.",
                            "examples": [
                                    "La façon dont la génération actuelle choisit de consommer les chansons a beaucoup changé."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_024",
            "word": "reprogrammer",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "modifier en profondeur le fonctionnement d'un réseau ou d'un mécanisme mental.",
                            "examples": [
                                    "Les notifications constantes finissent par reprogrammer notre seuil d'attention artistique."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_025",
            "word": "taux de zapping",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "la fréquence à laquelle les utilisateurs passent rapidement d'un morceau à un autre.",
                            "examples": [
                                    "Un taux de zapping élevé oblige les compositeurs à placer le refrain dès les premières secondes."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_026",
            "word": "répertoire",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "l'ensemble des œuvres ou morceaux qu'un artiste ou une liste contient.",
                            "examples": [
                                    "Il a passé des heures à organiser le répertoire de son nouvel album thématique."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_027",
            "word": "cognition",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "processus mentaux.",
                            "examples": [
                                    "La cognition est complexe."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_028",
            "word": "résilience",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "se remettre vite.",
                            "examples": [
                                    "Elle a fait preuve de résilience."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_029",
            "word": "anxiété",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "sentiment d'inquiétude.",
                            "examples": [
                                    "Il souffre d'anxiété."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_030",
            "word": "introspection",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "examen de ses pensées.",
                            "examples": [
                                    "Il préfère l'introspection."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_031",
            "word": "validation",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "reconnaître la valeur.",
                            "examples": [
                                    "On a tous besoin de validation."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_032",
            "word": "perception",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "capacité de voir ou entendre.",
                            "examples": [
                                    "La perception est la réalité."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "fr_intermediate_psychology_033",
            "word": "manifestation",
            "lang": "fr",
            "level": "intermediate",
            "theme": "psychology",
            "form": "noun",
            "definitions": [
                    {
                            "text": "montrer clairement.",
                            "examples": [
                                    "C'est une manifestation du stress."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    }
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(x => x.form === "adjective")];
})();