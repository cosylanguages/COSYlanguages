(function() {
    const data = [
    {
        "word": "grand",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "petit",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "De grande taille.",
                "examples": [
                    "C'est un grand bureau."
                ]
            }
        ]
    },
    {
        "word": "petit",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "grand",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "De petite taille.",
                "examples": [
                    "Elle a un petit appartement."
                ]
            }
        ]
    },
    {
        "word": "jeune",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "vieux",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Qui a peu d'années.",
                "examples": [
                    "C'est un jeune homme."
                ]
            }
        ]
    },
    {
        "word": "vieux",
        "level": "baby",
        "theme": "size_shape_A0",
        "form": "adjective",
        "opposite": "jeune",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Qui a beaucoup d'années.",
                "examples": [
                    "C'est un vieux livre."
                ]
            }
        ]
    },
    {
        "word": "bon",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "mauvais",
        "oppositeEmoji": "👎",
        "definitions": [
            {
                "text": "De haute qualité ou agréable.",
                "examples": [
                    "C'est un bon travail."
                ]
            }
        ]
    },
    {
        "word": "mauvais",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "bon",
        "oppositeEmoji": "👍",
        "definitions": [
            {
                "text": "Pas bon ; désagréable.",
                "examples": [
                    "Le temps est mauvais aujourd'hui."
                ]
            }
        ]
    },
    {
        "word": "facile",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difficile",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "Pas difficile.",
                "examples": [
                    "Le test est facile."
                ]
            }
        ]
    },
    {
        "word": "difficile",
        "level": "baby",
        "theme": "size_shape_A0",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "facile",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Dur à faire ou à comprendre.",
                "examples": [
                    "Ce travail est difficile."
                ]
            }
        ]
    },
    {
        "word": "heureux",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "malheureux",
        "definitions": [
            {
                "text": "Ressentir du plaisir ou de la joie.",
                "examples": [
                    "Je suis heureux aujourd'hui."
                ]
            }
        ]
    },
    {
        "word": "fatigué",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "reposé",
        "definitions": [
            {
                "text": "Ayant besoin de repos ou de sommeil.",
                "examples": [
                    "Je suis très fatigué après le travail."
                ]
            }
        ]
    },
    {
        "word": "ensoleillé",
        "level": "baby",
        "theme": "weather_A0",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Quand le soleil brille.",
                "examples": [
                    "Il fait un temps ensoleillé."
                ]
            }
        ]
    },
    {
        "word": "pluvieux",
        "level": "baby",
        "theme": "weather_A0",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Quand il pleut.",
                "examples": [
                    "C'est un jour pluvieux."
                ]
            }
        ]
    },
    {
        "word": "chaud",
        "level": "baby",
        "theme": "weather_A0",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "froid",
        "oppositeEmoji": "❄️",
        "definitions": [
            {
                "text": "Quand la température est élevée.",
                "examples": [
                    "Il fait chaud en été."
                ]
            }
        ]
    },
    {
        "word": "froid",
        "level": "baby",
        "theme": "weather_A0",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "chaud",
        "oppositeEmoji": "🔥",
        "definitions": [
            {
                "text": "Quand la température est basse.",
                "examples": [
                    "Il fait froid en hiver."
                ]
            }
        ]
    },
    {
        "word": "cher",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "form": "adjective",
        "emoji": "💎",
        "opposite": "bon marché",
        "oppositeEmoji": "🏷️",
        "definitions": [
            {
                "text": "Qui coûte beaucoup d'argent.",
                "examples": [
                    "Cette voiture est chère."
                ]
            }
        ]
    },
    {
        "word": "bon marché",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "form": "adjective",
        "emoji": "🏷️",
        "opposite": "cher",
        "oppositeEmoji": "💎",
        "definitions": [
            {
                "text": "Pas cher ; à bas prix.",
                "examples": [
                    "Ce café est bon marché."
                ]
            }
        ]
    },
    {
        "word": "à plein temps",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "form": "adjective",
        "opposite": "à temps partiel",
        "definitions": [
            {
                "text": "Travailler le nombre complet d'heures d'une semaine de travail.",
                "examples": [
                    "Elle a un emploi à plein temps dans une banque."
                ]
            }
        ]
    },
    {
        "word": "à temps partiel",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "form": "adjective",
        "opposite": "à plein temps",
        "definitions": [
            {
                "text": "Travailler moins d'heures qu'une semaine de travail standard.",
                "examples": [
                    "Il travaille à temps partiel le samedi."
                ]
            }
        ]
    },
    {
        "word": "propre",
        "level": "baby",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "sale",
        "oppositeEmoji": "💩",
        "subtext": "net, impeccable",
        "definitions": [
            {
                "text": "Exempt de saleté.",
                "examples": [
                    "Ma chambre est propre."
                ]
            }
        ]
    },
    {
        "word": "sain",
        "level": "baby",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "form": "adjective",
        "opposite": "malsain",
        "definitions": [
            {
                "text": "Bon pour votre corps ; pas malade.",
                "examples": [
                    "Les légumes sont des aliments sains."
                ]
            }
        ]
    },
    {
        "word": "malade",
        "level": "baby",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "en bonne santé",
        "definitions": [
            {
                "text": "Pas bien ; souffrant d'une maladie.",
                "examples": [
                    "Je me sens malade aujourd'hui."
                ]
            }
        ]
    },
    {
        "word": "en ligne",
        "level": "baby",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Utilisant l'internet.",
                "examples": [
                    "J'achète parfois de la nourriture en ligne."
                ]
            }
        ]
    },
    {
        "word": "seul",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "🧍",
        "form": "adjective",
        "opposite": "ensemble",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Sans autres personnes ; par soi-même.",
                "examples": [
                    "Elle vit seule."
                ]
            }
        ]
    },
    {
        "word": "détendu",
        "level": "baby",
        "theme": "basic_positive_emotions_A0",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stressé",
        "oppositeEmoji": "😫",
        "subtext": "calme, relaxé",
        "definitions": [
            {
                "text": "Calme ; pas inquiet ou stressé.",
                "examples": [
                    "Je me sens détendu le week-end."
                ]
            }
        ]
    },
    {
        "word": "inquiet",
        "level": "baby",
        "theme": "basic_negative_emotions_A0",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calme",
        "oppositeEmoji": "😌",
        "subtext": "anxieux",
        "definitions": [
            {
                "text": "Se sentir anxieux à propos de quelque chose qui pourrait arriver.",
                "examples": [
                    "Elle est inquiète pour son travail."
                ]
            }
        ]
    },
    {
        "word": "occupé",
        "level": "baby",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Avoir beaucoup de choses à faire.",
                "examples": [
                    "Je suis très occupé cette semaine."
                ]
            }
        ]
    },
    {
        "word": "utile",
        "level": "baby",
        "theme": "using_a_smartphone_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "inutile",
        "definitions": [
            {
                "text": "Serviable ; ayant un but pratique.",
                "examples": [
                    "Une voiture est très utile à la campagne."
                ]
            }
        ]
    },
    {
        "word": "important",
        "level": "baby",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "essentiel",
        "definitions": [
            {
                "text": "Ayant une grande valeur ou un grand effet.",
                "examples": [
                    "Le sommeil est très important."
                ]
            }
        ]
    },
    {
        "word": "rouge",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "rouge foncé, rouge vif",
        "definitions": [
            {
                "text": "Ayant la couleur du sang ou d'une tomate mûre.",
                "examples": [
                    "Elle a un sac rouge."
                ]
            }
        ]
    },
    {
        "word": "bleu",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "bleu ciel, bleu foncé",
        "definitions": [
            {
                "text": "Ayant la couleur d'un ciel dégagé.",
                "examples": [
                    "Sa voiture est bleue."
                ]
            }
        ]
    },
    {
        "word": "vert",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "vert clair, vert foncé",
        "definitions": [
            {
                "text": "Ayant la couleur de l'herbe ou des feuilles.",
                "examples": [
                    "Elle porte une robe verte."
                ]
            }
        ]
    },
    {
        "word": "blanc",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "tout blanc, blanc comme neige",
        "definitions": [
            {
                "text": "Ayant la couleur de la neige ou du lait.",
                "examples": [
                    "Les murs sont blancs."
                ]
            }
        ]
    },
    {
        "word": "noir",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "noir foncé, sombre",
        "definitions": [
            {
                "text": "Ayant la couleur la plus sombre, comme le ciel nocturne.",
                "examples": [
                    "Il porte un manteau noir."
                ]
            }
        ]
    },
    {
        "word": "jaune",
        "level": "baby",
        "theme": "colours_patterns_A0",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "jaune vif, citron",
        "definitions": [
            {
                "text": "Ayant la couleur du soleil ou d'un citron.",
                "examples": [
                    "Elle a un parapluie jaune."
                ]
            }
        ]
    },
    {
        "word": "gratuit",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "sans frais, cadeau",
        "definitions": [
            {
                "text": "Qui ne coûte pas d'argent.",
                "examples": [
                    "Le musée est gratuit le dimanche."
                ]
            }
        ]
    },
    {
        "word": "ouvert",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "fermé",
        "oppositeEmoji": "🔒",
        "subtext": "libre d'accès",
        "definitions": [
            {
                "text": "Qui n'est pas fermé ; permettant l'entrée.",
                "examples": [
                    "Le magasin est ouvert jusqu'à huit heures."
                ]
            }
        ]
    },
    {
        "word": "fermé",
        "level": "baby",
        "theme": "everyday_shopping_A0",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "ouvert",
        "oppositeEmoji": "📖",
        "subtext": "clos, non accessible",
        "definitions": [
            {
                "text": "Qui n'est pas ouvert ; clos.",
                "examples": [
                    "La banque est fermée le dimanche."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
