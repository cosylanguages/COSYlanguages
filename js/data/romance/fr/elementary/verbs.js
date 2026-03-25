(function() {
    const data = [
    {
        "word": "considérer",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "both",
        "subtext": "considérer une option / considérer comme",
        "definitions": [
            {
                "text": "Examiner attentivement quelque chose.",
                "examples": [
                    "Nous devons considérer toutes les options."
                ]
            }
        ],
        "v3": "considéré"
    },
    {
        "word": "apparaître",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "apparaître soudainement / apparaître à l'écran",
        "definitions": [
            {
                "text": "Devenir visible.",
                "examples": [
                    "Le soleil commence à apparaître."
                ]
            }
        ],
        "v3": "apparu"
    },
    {
        "word": "attendre",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "attendre le bus / attendre quelqu'un",
        "definitions": [
            {
                "text": "Rester en un lieu jusqu'à ce que quelqu'un arrive ou que quelque chose se passe.",
                "examples": [
                    "J'attends le train depuis dix minutes."
                ]
            }
        ],
        "v3": "attendu"
    },
    {
        "word": "servir",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "servir le dîner / servir à quelque chose",
        "definitions": [
            {
                "text": "Présenter un plat à quelqu'un.",
                "examples": [
                    "Le dîner est servi."
                ]
            }
        ],
        "v3": "servi"
    },
    {
        "word": "construire",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "construire une maison / construire un projet",
        "definitions": [
            {
                "text": "Bâtir un édifice ou assembler les éléments de quelque chose.",
                "examples": [
                    "Ils construisent un nouvel immeuble."
                ]
            }
        ],
        "v3": "construit"
    },
    {
        "word": "rester",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "rester à la maison / rester calme",
        "definitions": [
            {
                "text": "Demeurer en un lieu ou dans un état.",
                "examples": [
                    "Je reste à la maison ce soir."
                ]
            }
        ],
        "v3": "resté"
    },
    {
        "word": "atteindre",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏁",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "atteindre un but / atteindre le sommet",
        "definitions": [
            {
                "text": "Arriver à un lieu ou à un niveau.",
                "examples": [
                    "Nous avons atteint le sommet de la montagne."
                ]
            }
        ],
        "v3": "atteint"
    },
    {
        "word": "tuer",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "tuer le temps",
        "definitions": [
            {
                "text": "Causer la mort de quelqu'un ou de quelque chose.",
                "examples": [
                    "Il a tué l'araignée."
                ]
            }
        ],
        "v3": "tué"
    },
    {
        "word": "suggérer",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "suggérer une idée / suggérer de faire",
        "definitions": [
            {
                "text": "Proposer une idée ou une action.",
                "examples": [
                    "Je suggère de partir maintenant."
                ]
            }
        ],
        "v3": "suggéré"
    },
    {
        "word": "lever",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "lever la main / se lever tôt",
        "definitions": [
            {
                "text": "Déplacer quelque chose vers le haut.",
                "examples": [
                    "Veuillez lever la main si vous avez une question."
                ]
            }
        ],
        "v3": "levé"
    },
    {
        "word": "exiger",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "exiger le respect / exiger une réponse",
        "definitions": [
            {
                "text": "Demander quelque chose de façon ferme et impérative.",
                "examples": [
                    "Le client exige un remboursement."
                ]
            }
        ],
        "v3": "exigé"
    },
    {
        "word": "rapporter",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "rapporter un problème / rapporter de l'argent",
        "definitions": [
            {
                "text": "Apporter quelque chose de nouveau ou donner une information.",
                "examples": [
                    "Il doit rapporter ce qu'il a vu."
                ]
            }
        ],
        "v3": "rapporté"
    },
    {
        "word": "décider",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚖️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "décider de / se décider",
        "definitions": [
            {
                "text": "Prendre une résolution ou faire un choix.",
                "examples": [
                    "J'ai décidé de changer de travail."
                ]
            }
        ],
        "v3": "décidé"
    },
    {
        "word": "expliquer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "expliquer le problème / expliquer comment",
        "definitions": [
            {
                "text": "Faire comprendre quelque chose par des explications.",
                "examples": [
                    "Le professeur explique la leçon."
                ]
            }
        ],
        "v3": "expliqué"
    },
    {
        "word": "développer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "développer un projet / développer une compétence",
        "definitions": [
            {
                "text": "Faire croître ou progresser quelque chose.",
                "examples": [
                    "Elle développe un nouveau logiciel."
                ]
            }
        ],
        "v3": "développé"
    },
    {
        "word": "soutenir",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "soutenir un ami / soutenir un projet",
        "definitions": [
            {
                "text": "Aider ou encourager quelqu'un.",
                "examples": [
                    "Ma famille soutient mes décisions."
                ]
            }
        ],
        "v3": "soutenu",
        "tenses": {
            "present_simple": {
                "positive": [
                    "soutiens",
                    "soutiens",
                    "soutient",
                    "soutient",
                    "soutenons",
                    "soutenez",
                    "soutiennent",
                    "soutiennent"
                ],
                "negative": [
                    "ne soutiens pas",
                    "ne soutiens pas",
                    "ne soutient pas",
                    "ne soutient pas",
                    "ne soutenons pas",
                    "ne soutenez pas",
                    "ne soutiennent pas",
                    "ne soutiennent pas"
                ]
            }
        }
    },
    {
        "word": "frapper",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb",
        "group": "-er",
        "classification": "regular",
        "aspect": "action",
        "v3": "frappé"
    },
    {
        "word": "produire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "v3": "produit"
    },
    {
        "word": "faire face",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "v3": "fait face"
    },
    {
        "word": "couvrir",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "v3": "couvert"
    },
    {
        "word": "décrire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "v3": "décrit"
    },
    {
        "word": "attraper",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "v3": "attrapé"
    },
    {
        "word": "postuler",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "postuler à un emploi",
        "definitions": [
            {
                "text": "Faire une demande formelle pour un emploi.",
                "examples": [
                    "Elle a postulé pour le poste de manager."
                ]
            }
        ],
        "v3": "postulé"
    },
    {
        "word": "embaucher",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Donner un emploi à quelqu'un.",
                "examples": [
                    "L'entreprise a embauché deux nouvelles personnes."
                ]
            }
        ],
        "v3": "embauché"
    },
    {
        "word": "prendre sa retraite",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Arrêter de travailler parce qu'on a atteint un certain âge.",
                "examples": [
                    "Mon père prendra sa retraite l'année prochaine."
                ]
            }
        ],
        "v3": "pris sa retraite"
    },
    {
        "word": "avoir les moyens",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Avoir assez d'argent pour payer quelque chose.",
                "examples": [
                    "Nous n'avons pas les moyens d'acheter un plus grand appartement."
                ]
            }
        ],
        "v3": "eu les moyens"
    },
    {
        "word": "se disputer",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🗣️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Ne pas être d'accord avec quelqu'un de façon colérique.",
                "examples": [
                    "Ils se disputent parfois à propos de l'argent."
                ]
            }
        ],
        "v3": "disputé"
    },
    {
        "word": "faire confiance",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Croire que quelqu'un est honnête et fiable.",
                "examples": [
                    "Tu dois faire confiance à ton partenaire."
                ]
            }
        ],
        "v3": "fait confiance"
    },
    {
        "word": "être d'accord",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👍",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "Avoir la même opinion que quelqu'un d'autre.",
                "examples": [
                    "Nous ne sommes pas toujours d'accord."
                ]
            }
        ],
        "v3": "été d'accord"
    },
    {
        "word": "faire un compromis",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Accepter moins que ce que l'on veut pour que les deux parties soient satisfaites.",
                "examples": [
                    "Les bonnes relations nécessitent de faire des compromis."
                ]
            }
        ],
        "v3": "fait un compromis"
    },
    {
        "word": "recycler",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "Traiter des matériaux usagés pour qu'ils puissent être réutilisés.",
                "examples": [
                    "Nous recyclons le papier et le verre."
                ]
            }
        ],
        "v3": "recyclé"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
