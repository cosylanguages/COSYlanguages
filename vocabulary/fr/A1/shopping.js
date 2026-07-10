(function() {
    const data = [
    {
        "word": "argent",
        "level": "starter",
        "theme": "shopping",
        "article": "l'",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": null,
        "subtext": "dépenser de l'argent, économiser de l'argent",
        "definitions": [
            {
                "text": "Pièces ou billets utilisés pour acheter des choses.",
                "examples": [
                    "J'ai de l'argent dans mon sac."
                ]
            }
        ],
        "transcription": "aʁ.ʒɑ̃",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "argentum"
        },
        "id": "fr_starter_shopping_001",
        "lang": "fr"
    },
    {
        "word": "salaire",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "salaires",
        "subtext": "",
        "synonyms": [
            "paie",
            "rémunération"
        ],
        "definitions": [
            {
                "text": "L'argent qu'une personne gagne de son travail chaque mois.",
                "examples": [
                    "Son salaire est bon."
                ]
            }
        ],
        "transcription": "sa.lɛʁ",
        "id": "fr_starter_shopping_002",
        "lang": "fr"
    },
    {
        "word": "ticket",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎟️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tickets",
        "definitions": [
            {
                "text": "Billet pour le bus ou cinéma.",
                "examples": [
                    "Un ticket de métro."
                ]
            }
        ],
        "transcription": "ti.kɛ",
        "id": "fr_starter_shopping_003",
        "lang": "fr"
    },
    {
        "word": "reçu",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "📄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "reçus",
        "definitions": [
            {
                "text": "Papier prouvant le paiement.",
                "examples": [
                    "Gardez le reçu."
                ]
            }
        ],
        "transcription": "ʁə.sy",
        "id": "fr_starter_shopping_004",
        "lang": "fr"
    },
    {
        "word": "facture",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "factures",
        "definitions": [
            {
                "text": "Papier demandant paiement.",
                "examples": [
                    "Je paie mes factures."
                ]
            }
        ],
        "transcription": "fak.tyʁ",
        "id": "fr_starter_shopping_005",
        "lang": "fr"
    },
    {
        "word": "carte bancaire",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "💳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cartes bancaires",
        "definitions": [
            {
                "text": "Carte pour payer.",
                "examples": [
                    "Je paie par carte."
                ]
            }
        ],
        "transcription": "kaʁt bɑ̃.kɛʁ",
        "id": "fr_starter_shopping_006",
        "lang": "fr"
    },
    {
        "word": "espèces",
        "level": "starter",
        "theme": "shopping",
        "article": "les",
        "gender": "feminine",
        "emoji": "💵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "espèces",
        "definitions": [
            {
                "text": "Argent liquide.",
                "examples": [
                    "Je n'ai pas d'espèces."
                ]
            }
        ],
        "transcription": "ɛs.pɛs",
        "id": "fr_starter_shopping_007",
        "lang": "fr"
    },
    {
        "word": "cadeau",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cadeaux",
        "definitions": [
            {
                "text": "Présent.",
                "examples": [
                    "Merci pour le cadeau."
                ]
            }
        ],
        "transcription": "ka.do",
        "id": "fr_starter_shopping_008",
        "lang": "fr"
    },
    {
        "word": "prix",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "prix",
        "definitions": [
            {
                "text": "Valeur d'une chose.",
                "examples": [
                    "Quel est le prix ?"
                ]
            }
        ],
        "transcription": "pʁi",
        "id": "fr_starter_shopping_009",
        "lang": "fr"
    },
    {
        "word": "achat",
        "level": "starter",
        "theme": "shopping",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "achats",
        "definitions": [
            {
                "text": "Action d'acheter.",
                "examples": [
                    "Un achat utile."
                ]
            }
        ],
        "transcription": "a.ʃa",
        "id": "fr_starter_shopping_010",
        "lang": "fr"
    },
    {
        "word": "magasin",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "magasins",
        "definitions": [
            {
                "text": "Lieu pour acheter.",
                "examples": [
                    "Le magasin est grand."
                ]
            }
        ],
        "transcription": "ma.ɡa.zɛ̃",
        "id": "fr_starter_shopping_011",
        "lang": "fr"
    },
    {
        "word": "centre commercial",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "centres commerciaux",
        "definitions": [
            {
                "text": "Lieu avec beaucoup de magasins.",
                "examples": [
                    "Allons au centre commercial."
                ]
            }
        ],
        "transcription": "sɑ̃.tʁə kɔ.mɛʁ.sjal",
        "id": "fr_starter_shopping_012",
        "lang": "fr"
    },
    {
        "word": "monnaie",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "🪙",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Pièces d'argent.",
                "examples": [
                    "Avez-vous de la monnaie ?"
                ]
            }
        ],
        "transcription": "mɔ.nɛ",
        "id": "fr_starter_shopping_013",
        "lang": "fr"
    },
    {
        "word": "compte",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "comptes",
        "definitions": [
            {
                "text": "Compte en banque.",
                "examples": [
                    "Ouvrir un compte."
                ]
            }
        ],
        "transcription": "kɔ̃t",
        "id": "fr_starter_shopping_014",
        "lang": "fr"
    },
    {
        "word": "banque",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "banques",
        "definitions": [
            {
                "text": "Lieu de l'argent.",
                "examples": [
                    "Je vais à la banque."
                ]
            }
        ],
        "transcription": "bɑ̃k",
        "id": "fr_starter_shopping_015",
        "lang": "fr"
    },
    {
        "word": "épargne",
        "level": "starter",
        "theme": "shopping",
        "article": "l'",
        "gender": "feminine",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "plural": "",
        "definitions": [
            {
                "text": "Argent économisé.",
                "examples": [
                    "Mes épargnes."
                ]
            }
        ],
        "transcription": "e.paʁɲ",
        "id": "fr_starter_shopping_016",
        "lang": "fr"
    },
    {
        "word": "dépense",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "💸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dépenses",
        "definitions": [
            {
                "text": "Argent que l'on sort.",
                "examples": [
                    "Réduire les dépenses."
                ]
            }
        ],
        "transcription": "de.pɑ̃s",
        "id": "fr_starter_shopping_017",
        "lang": "fr"
    },
    {
        "word": "paiement",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "💳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "paiements",
        "definitions": [
            {
                "text": "Action de payer.",
                "examples": [
                    "Paiement par carte."
                ]
            }
        ],
        "transcription": "pɛ.mɑ̃",
        "id": "fr_starter_shopping_018",
        "lang": "fr"
    },
    {
        "word": "coût",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "coûts",
        "definitions": [
            {
                "text": "Ce que ça coûte.",
                "examples": [
                    "Le coût de la vie."
                ]
            }
        ],
        "transcription": "ku",
        "id": "fr_starter_shopping_019",
        "lang": "fr"
    },
    {
        "word": "marché",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "marchés",
        "definitions": [
            {
                "text": "Lieu de commerce.",
                "examples": [
                    "Le marché mondial."
                ]
            }
        ],
        "transcription": "maʁ.ʃe",
        "id": "fr_starter_shopping_020",
        "lang": "fr"
    },
    {
        "word": "produit",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "📦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "produits",
        "definitions": [
            {
                "text": "Chose fabriquée.",
                "examples": [
                    "Un nouveau produit."
                ]
            }
        ],
        "transcription": "pʁɔ.dɥi",
        "id": "fr_starter_shopping_021",
        "lang": "fr"
    },
    {
        "word": "offre",
        "level": "starter",
        "theme": "shopping",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "offres",
        "definitions": [
            {
                "text": "Proposition de prix.",
                "examples": [
                    "Une offre spéciale."
                ]
            }
        ],
        "transcription": "ɔfʁ",
        "id": "fr_starter_shopping_022",
        "lang": "fr"
    },
    {
        "word": "demande",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "❓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "demandes",
        "definitions": [
            {
                "text": "Action de demander.",
                "examples": [
                    "La demande est forte."
                ]
            }
        ],
        "transcription": "də.mɑ̃d",
        "id": "fr_starter_shopping_023",
        "lang": "fr"
    },
    {
        "word": "livraison",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "livraisons",
        "definitions": [
            {
                "text": "Transport de marchandises.",
                "examples": [
                    "Livraison à domicile."
                ]
            }
        ],
        "transcription": "li.vʁɛ.zɔ̃",
        "id": "fr_starter_shopping_024",
        "lang": "fr"
    },
    {
        "word": "commande",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "📦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "commandes",
        "definitions": [
            {
                "text": "Achat demandé.",
                "examples": [
                    "Passer une commande."
                ]
            }
        ],
        "transcription": "kɔ.mɑ̃d",
        "id": "fr_starter_shopping_025",
        "lang": "fr"
    },
    {
        "word": "vente",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ventes",
        "definitions": [
            {
                "text": "Action de céder pour de l'argent.",
                "examples": [
                    "En vente libre."
                ]
            }
        ],
        "transcription": "vɑ̃t",
        "id": "fr_starter_shopping_026",
        "lang": "fr"
    },
    {
        "word": "boutique",
        "level": "starter",
        "theme": "shopping",
        "article": "la",
        "gender": "feminine",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boutiques",
        "definitions": [
            {
                "text": "Petit magasin.",
                "examples": [
                    "Une boutique de mode."
                ]
            }
        ],
        "transcription": "bu.tik",
        "id": "fr_starter_shopping_027",
        "lang": "fr"
    },
    {
        "word": "portefeuille",
        "level": "starter",
        "theme": "shopping",
        "article": "le",
        "gender": "masculine",
        "emoji": "👛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "portefeuilles",
        "definitions": [
            {
                "text": "Pour mettre l'argent.",
                "examples": [
                    "Oublier son portefeuille."
                ]
            }
        ],
        "transcription": "pɔʁ.tə.fœj",
        "id": "fr_starter_shopping_028",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();