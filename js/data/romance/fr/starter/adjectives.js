(function() {
    const data = [
    {
        "word": "grand",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "grande",
        "translation": "big",
        "emoji": "🐘",
        "plural": "grands",
        "femininePlural": "grandes"
    },
    {
        "word": "petit",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "petite",
        "translation": "small",
        "emoji": "🐭",
        "plural": "petits",
        "femininePlural": "petites"
    },
    {
        "word": "jeune",
        "level": "starter",
        "theme": "size_shape_A1",
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
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "vieille",
        "translation": "old",
        "emoji": "👴",
        "plural": "vieux",
        "femininePlural": "vieilles"
    },
    {
        "word": "bon",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "bonne",
        "translation": "good",
        "plural": "bons",
        "femininePlural": "bonnes"
    },
    {
        "word": "mauvais",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "mauvaise",
        "translation": "bad",
        "plural": "mauvais",
        "femininePlural": "mauvaises"
    },
    {
        "word": "facile",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "facile",
        "translation": "easy",
        "plural": "faciles",
        "femininePlural": "faciles"
    },
    {
        "word": "difficile",
        "level": "starter",
        "theme": "size_shape_A1",
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
        ],
        "feminine": "difficile",
        "translation": "difficult",
        "plural": "difficiles",
        "femininePlural": "difficiles"
    },
    {
        "word": "heureux",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        ],
        "feminine": "heureuse",
        "translation": "happy",
        "plural": "heureux",
        "femininePlural": "heureuses"
    },
    {
        "word": "fatigué",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        ],
        "feminine": "fatiguée",
        "translation": "tired",
        "plural": "fatigués",
        "femininePlural": "fatiguées"
    },
    {
        "word": "ensoleillé",
        "level": "starter",
        "theme": "weather_A1",
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
        "level": "starter",
        "theme": "weather_A1",
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
        "level": "starter",
        "theme": "weather_A1",
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
        ],
        "feminine": "chaude",
        "translation": "hot",
        "plural": "chauds",
        "femininePlural": "chaudes"
    },
    {
        "word": "froid",
        "level": "starter",
        "theme": "weather_A1",
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
        ],
        "feminine": "froide",
        "translation": "cold",
        "plural": "froids",
        "femininePlural": "froides"
    },
    {
        "word": "cher",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        ],
        "feminine": "chère",
        "translation": "expensive",
        "plural": "chers",
        "femininePlural": "chères"
    },
    {
        "word": "bon marché",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        ],
        "feminine": "bon marché",
        "translation": "cheap",
        "plural": "bon marché",
        "femininePlural": "bon marché"
    },
    {
        "word": "à plein temps",
        "level": "starter",
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
        "level": "starter",
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
        "level": "starter",
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
        ],
        "feminine": "propre",
        "translation": "clean",
        "plural": "propres",
        "femininePlural": "propres"
    },
    {
        "word": "sain",
        "level": "starter",
        "theme": "basic_foods_A1",
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
        "level": "starter",
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
        "level": "starter",
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
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
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
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "level": "starter",
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
        ],
        "feminine": "occupée",
        "translation": "busy",
        "plural": "occupés",
        "femininePlural": "occupées"
    },
    {
        "word": "utile",
        "level": "starter",
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
        "level": "starter",
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
        ],
        "feminine": "importante",
        "translation": "important",
        "plural": "importants",
        "femininePlural": "importantes"
    },
    {
        "word": "rouge",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        ],
        "feminine": "rouge",
        "translation": "red",
        "plural": "rouges",
        "femininePlural": "rouges"
    },
    {
        "word": "bleu",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        ],
        "feminine": "bleue",
        "translation": "blue",
        "plural": "bleus",
        "femininePlural": "bleues"
    },
    {
        "word": "vert",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        ],
        "feminine": "verte",
        "translation": "green",
        "plural": "verts",
        "femininePlural": "vertes"
    },
    {
        "word": "blanc",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        ],
        "feminine": "blanche",
        "translation": "white",
        "plural": "blancs",
        "femininePlural": "blanches"
    },
    {
        "word": "noir",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        ],
        "feminine": "noire",
        "translation": "black",
        "plural": "noirs",
        "femininePlural": "noires"
    },
    {
        "word": "jaune",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        ],
        "feminine": "jaune",
        "translation": "yellow",
        "plural": "jaunes",
        "femininePlural": "jaunes"
    },
    {
        "word": "gratuit",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        ],
        "feminine": "gratuite",
        "translation": "free",
        "plural": "gratuits",
        "femininePlural": "gratuites"
    },
    {
        "word": "ouvert",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        ],
        "feminine": "ouverte",
        "translation": "open",
        "plural": "ouverts",
        "femininePlural": "ouvertes"
    },
    {
        "word": "fermé",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        ],
        "feminine": "fermée",
        "translation": "closed",
        "plural": "fermés",
        "femininePlural": "fermées"
    },
    {
        "word": "grand",
        "feminine": "grande",
        "translation": "large",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "grands",
        "femininePlural": "grandes"
    },
    {
        "word": "petit",
        "feminine": "petite",
        "translation": "little",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "petits",
        "femininePlural": "petites"
    },
    {
        "word": "grand",
        "feminine": "grande",
        "translation": "tall",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🦒",
        "form": "adjective",
        "plural": "grands",
        "femininePlural": "grandes"
    },
    {
        "word": "court",
        "feminine": "courte",
        "translation": "short",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "courts",
        "femininePlural": "courtes"
    },
    {
        "word": "long",
        "feminine": "longue",
        "translation": "long",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "longs",
        "femininePlural": "longues"
    },
    {
        "word": "haut",
        "feminine": "haute",
        "translation": "high",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📈",
        "form": "adjective",
        "plural": "hauts",
        "femininePlural": "hautes"
    },
    {
        "word": "bas",
        "feminine": "basse",
        "translation": "low",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📉",
        "form": "adjective",
        "plural": "bas",
        "femininePlural": "basses"
    },
    {
        "word": "plein",
        "feminine": "pleine",
        "translation": "full",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🥛",
        "form": "adjective",
        "plural": "pleins",
        "femininePlural": "pleines"
    },
    {
        "word": "vide",
        "feminine": "vide",
        "translation": "empty",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🫙",
        "form": "adjective",
        "plural": "vides",
        "femininePlural": "vides"
    },
    {
        "word": "tiède",
        "feminine": "tiède",
        "translation": "warm",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "plural": "tièdes",
        "femininePlural": "tièdes"
    },
    {
        "word": "frais",
        "feminine": "fraîche",
        "translation": "cool",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌬️",
        "form": "adjective",
        "plural": "frais",
        "femininePlural": "fraîches"
    },
    {
        "word": "mouillé",
        "feminine": "mouillée",
        "translation": "wet",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🚿",
        "form": "adjective",
        "plural": "mouillés",
        "femininePlural": "mouillées"
    },
    {
        "word": "sec",
        "feminine": "sèche",
        "translation": "dry",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🏜️",
        "form": "adjective",
        "plural": "secs",
        "femininePlural": "sèches"
    },
    {
        "word": "sale",
        "feminine": "sale",
        "translation": "dirty",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "💩",
        "form": "adjective",
        "plural": "sales",
        "femininePlural": "sales"
    },
    {
        "word": "dur",
        "feminine": "dure",
        "translation": "hard",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🧱",
        "form": "adjective",
        "plural": "durs",
        "femininePlural": "dures"
    },
    {
        "word": "doux",
        "feminine": "douce",
        "translation": "soft",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "doux",
        "femininePlural": "douces"
    },
    {
        "word": "lourd",
        "feminine": "lourde",
        "translation": "heavy",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🏋️",
        "form": "adjective",
        "plural": "lourds",
        "femininePlural": "lourdes"
    },
    {
        "word": "léger",
        "feminine": "légère",
        "translation": "light",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🪶",
        "form": "adjective",
        "plural": "légers",
        "femininePlural": "légères"
    },
    {
        "word": "brun",
        "feminine": "brune",
        "translation": "brown",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟫",
        "form": "adjective",
        "plural": "bruns",
        "femininePlural": "brunes"
    },
    {
        "word": "gris",
        "feminine": "grise",
        "translation": "grey",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩶",
        "form": "adjective",
        "plural": "gris",
        "femininePlural": "grises"
    },
    {
        "word": "rose",
        "feminine": "rose",
        "translation": "pink",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🩷",
        "form": "adjective",
        "plural": "roses",
        "femininePlural": "rose"
    },
    {
        "word": "orange",
        "feminine": "orange",
        "translation": "orange",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟧",
        "form": "adjective",
        "plural": "orange",
        "femininePlural": "orange"
    },
    {
        "word": "génial",
        "feminine": "géniale",
        "translation": "great",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "géniaux",
        "femininePlural": "géniales"
    },
    {
        "word": "sympa",
        "feminine": "sympa",
        "translation": "nice",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😊",
        "form": "adjective",
        "plural": "sympas",
        "femininePlural": "sympas"
    },
    {
        "word": "merveilleux",
        "feminine": "merveilleuse",
        "translation": "wonderful",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✨",
        "form": "adjective",
        "plural": "merveilleux",
        "femininePlural": "merveilleuses"
    },
    {
        "word": "terrible",
        "feminine": "terrible",
        "translation": "terrible",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😫",
        "form": "adjective",
        "plural": "terribles",
        "femininePlural": "terribles"
    },
    {
        "word": "affreux",
        "feminine": "affreuse",
        "translation": "awful",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🤮",
        "form": "adjective",
        "plural": "affreux",
        "femininePlural": "affreuses"
    },
    {
        "word": "incroyable",
        "feminine": "incroyable",
        "translation": "amazing",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "😲",
        "form": "adjective",
        "plural": "incroyables",
        "femininePlural": "incroyables"
    },
    {
        "word": "fantastique",
        "feminine": "fantastique",
        "translation": "fantastic",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "fantastiques",
        "femininePlural": "fantastiques"
    },
    {
        "word": "triste",
        "feminine": "triste",
        "translation": "sad",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😢",
        "form": "adjective",
        "plural": "tristes",
        "femininePlural": "tristes"
    },
    {
        "word": "affamé",
        "feminine": "affamée",
        "translation": "hungry",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🤤",
        "form": "adjective",
        "plural": "affamés",
        "femininePlural": "affamées"
    },
    {
        "word": "fâché",
        "feminine": "fâchée",
        "translation": "angry",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😠",
        "form": "adjective",
        "plural": "fâchés",
        "femininePlural": "fâchées"
    },
    {
        "word": "ennuyé",
        "feminine": "ennuyée",
        "translation": "bored",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😐",
        "form": "adjective",
        "plural": "ennuyés",
        "femininePlural": "ennuyées"
    },
    {
        "word": "excité",
        "feminine": "excitée",
        "translation": "excited",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "excités",
        "femininePlural": "excitées"
    },
    {
        "word": "effrayé",
        "feminine": "effrayée",
        "translation": "afraid",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😨",
        "form": "adjective",
        "plural": "effrayés",
        "femininePlural": "effrayées"
    },
    {
        "word": "désolé",
        "feminine": "désolée",
        "translation": "sorry",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🥺",
        "form": "adjective",
        "plural": "désolés",
        "femininePlural": "désolées"
    },
    {
        "word": "correct",
        "feminine": "correcte",
        "translation": "right",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "plural": "corrects",
        "femininePlural": "correctes"
    },
    {
        "word": "mauvais",
        "feminine": "mauvaise",
        "translation": "wrong",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❌",
        "form": "adjective",
        "plural": "mauvais",
        "femininePlural": "mauvaises"
    },
    {
        "word": "nouveau",
        "feminine": "nouvelle",
        "translation": "new",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🆕",
        "form": "adjective",
        "plural": "nouveaux",
        "femininePlural": "nouvelles"
    },
    {
        "word": "différent",
        "feminine": "différente",
        "translation": "different",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "↔️",
        "form": "adjective",
        "plural": "différents",
        "femininePlural": "différentes"
    },
    {
        "word": "même",
        "feminine": "même",
        "translation": "same",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "identical",
        "form": "adjective",
        "plural": "mêmes",
        "femininePlural": "mêmes"
    },
    {
        "word": "rapide",
        "feminine": "rapide",
        "translation": "fast",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⚡",
        "form": "adjective",
        "plural": "rapides",
        "femininePlural": "rapides"
    },
    {
        "word": "lent",
        "feminine": "lente",
        "translation": "slow",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐢",
        "form": "adjective",
        "plural": "lents",
        "femininePlural": "lentes"
    },
    {
        "word": "calme",
        "feminine": "calme",
        "translation": "quiet",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤫",
        "form": "adjective",
        "plural": "calmes",
        "femininePlural": "calmes"
    },
    {
        "word": "bruyant",
        "feminine": "bruyante",
        "translation": "loud",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔊",
        "form": "adjective",
        "plural": "bruyants",
        "femininePlural": "bruyantes"
    },
    {
        "word": "sûr",
        "feminine": "sûre",
        "translation": "safe",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛡️",
        "form": "adjective",
        "plural": "sûrs",
        "femininePlural": "sûres"
    },
    {
        "word": "dangereux",
        "feminine": "dangereuse",
        "translation": "dangerous",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "plural": "dangereux",
        "femininePlural": "dangereuses"
    }
];
    const lang = "fr";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();