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
        "femininePlural": "grandes",
        "subtext": "large, huge / a big house / a big problem / big enough"
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
        "femininePlural": "petites",
        "subtext": "little, tiny / a small flat / a small salary / too small"
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
        "femininePlural": "vieilles",
        "subtext": "old friend / old habits / very old"
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
        "femininePlural": "bonnes",
        "subtext": "great, nice, pleasant / good idea / good luck / good value"
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
        "femininePlural": "mauvaises",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision"
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
        "femininePlural": "faciles",
        "subtext": "easy to do / nice and easy / not easy"
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
        "femininePlural": "difficiles",
        "subtext": "difficult to do / very difficult / find it difficult"
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
        "femininePlural": "heureuses",
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day"
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
        "femininePlural": "fatiguées",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired"
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
        "femininePlural": "chaudes",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot"
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
        "femininePlural": "froides",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold"
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
        "femininePlural": "chères",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive"
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
        "femininePlural": "bon marché",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful"
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
        "femininePlural": "occupées",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy"
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
        "word": "libre",
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
        "feminine": "libre",
        "translation": "free",
        "plural": "libres",
        "femininePlural": "libres"
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
        "femininePlural": "grandes",
        "definitions": [
            {
                "text": "Of more than average size or amount.",
                "examples": [
                    "Paris is a very large city."
                ]
            }
        ],
        "subtext": "a large city / a large company / a large amount"
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
        "femininePlural": "petites",
        "definitions": [
            {
                "text": "Small in size; a small amount of.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "subtext": "a little bit / a little money / too little"
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
        "femininePlural": "grandes",
        "definitions": [
            {
                "text": "A person or thing that is big from bottom to top.",
                "examples": [
                    "He is very tall.",
                    "That building is tall."
                ]
            },
            {
                "text": "Of greater than average height.",
                "examples": [
                    "She is a tall woman who works as an engineer."
                ]
            }
        ],
        "subtext": "a tall building / a tall person / tall enough"
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
        "femininePlural": "courtes",
        "definitions": [
            {
                "text": "A person or thing that is not tall.",
                "examples": [
                    "She is short.",
                    "The pencil is short."
                ]
            },
            {
                "text": "Of less than average height or length.",
                "examples": [
                    "He has a short commute — ten minutes by bike."
                ]
            }
        ],
        "subtext": "a short journey / short hair / too short"
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
        "femininePlural": "longues",
        "definitions": [
            {
                "text": "Of great length; lasting a long time.",
                "examples": [
                    "She has a long commute every day."
                ]
            }
        ],
        "subtext": "a long journey / a long day / a long time"
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
        "femininePlural": "hautes",
        "definitions": [
            {
                "text": "Of greater than average height or level.",
                "examples": [
                    "The rent in this area is very high."
                ]
            }
        ],
        "subtext": "high price / high rent / high quality"
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
        "femininePlural": "basses",
        "definitions": [
            {
                "text": "Of less than average height or level.",
                "examples": [
                    "The salary is too low for the hours involved."
                ]
            }
        ],
        "subtext": "low price / low salary / low quality"
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
        "femininePlural": "pleines",
        "definitions": [
            {
                "text": "Containing as much as possible; complete.",
                "examples": [
                    "I feel full after that lunch."
                ]
            }
        ],
        "subtext": "full time / a full day / full of people"
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
        "femininePlural": "vides",
        "definitions": [
            {
                "text": "Containing nothing; with no people.",
                "examples": [
                    "The office is empty at weekends."
                ]
            }
        ],
        "subtext": "an empty flat / an empty room / nearly empty"
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
        "femininePlural": "tièdes",
        "definitions": [
            {
                "text": "Slightly hot; pleasantly heated.",
                "examples": [
                    "The office is warm and comfortable."
                ]
            }
        ],
        "subtext": "warm weather / a warm welcome / keep warm"
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
        "femininePlural": "fraîches",
        "definitions": [
            {
                "text": "Slightly cold; pleasantly low temperature.",
                "examples": [
                    "She prefers cool weather for working."
                ]
            }
        ],
        "subtext": "cool weather / a cool drink / stay cool"
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
        "femininePlural": "mouillées",
        "definitions": [
            {
                "text": "Covered with water or liquid.",
                "examples": [
                    "His jacket is wet from the rain."
                ]
            }
        ],
        "subtext": "wet weather / wet clothes / get wet"
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
        "femininePlural": "sèches",
        "definitions": [
            {
                "text": "Without water or liquid; not wet.",
                "examples": [
                    "The storage room must stay dry."
                ]
            }
        ],
        "subtext": "dry weather / dry skin / keep dry"
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
        "femininePlural": "sales",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "subtext": "dirty hands / dirty clothes / get dirty"
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
        "femininePlural": "dures",
        "definitions": [
            {
                "text": "Firm and solid; difficult.",
                "examples": [
                    "The chair is very hard and uncomfortable."
                ]
            }
        ],
        "subtext": "hard work / a hard decision / too hard"
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
        "femininePlural": "douces",
        "definitions": [
            {
                "text": "Not hard; gentle to the touch.",
                "examples": [
                    "The sofa is very soft and comfortable."
                ]
            }
        ],
        "subtext": "soft light / soft music / soft skills"
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
        "femininePlural": "lourdes",
        "definitions": [
            {
                "text": "Of great weight; difficult to carry.",
                "examples": [
                    "The bag is very heavy with all those files."
                ]
            }
        ],
        "subtext": "heavy traffic / heavy rain / too heavy"
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
        "femininePlural": "légères",
        "definitions": [
            {
                "text": "Not heavy; pale in colour.",
                "examples": [
                    "She carries a light bag to work every day."
                ]
            }
        ],
        "subtext": "light rain / light traffic / a light meal"
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
        "femininePlural": "brunes",
        "definitions": [
            {
                "text": "Having the colour of wood or earth.",
                "examples": [
                    "She has brown eyes and dark hair."
                ]
            }
        ],
        "subtext": "dark brown / light brown / brown bread"
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
        "femininePlural": "grises",
        "definitions": [
            {
                "text": "Having a colour between black and white.",
                "examples": [
                    "He has grey hair and a kind face."
                ]
            }
        ],
        "subtext": "grey area / grey sky / pale grey"
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
        "femininePlural": "rose",
        "definitions": [
            {
                "text": "Having a pale red colour.",
                "examples": [
                    "She prefers pink to red."
                ]
            }
        ],
        "subtext": "light pink / bright pink / hot pink"
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
        "femininePlural": "orange",
        "definitions": [
            {
                "text": "Having the colour of an orange fruit.",
                "examples": [
                    "He bought an orange jacket."
                ]
            }
        ],
        "subtext": "bright orange / dark orange / orange light"
    },
    {
        "word": "génial",
        "feminine": "géniale",
        "translation": "great",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "géniaux",
        "femininePlural": "géniales",
        "definitions": [
            {
                "text": "Extremely good; large in amount.",
                "examples": [
                    "She is a great manager."
                ]
            }
        ],
        "subtext": "a great idea / a great opportunity / great value"
    },
    {
        "word": "sympa",
        "feminine": "sympa",
        "translation": "nice",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😊",
        "form": "adjective",
        "plural": "sympas",
        "femininePlural": "sympas",
        "definitions": [
            {
                "text": "Pleasant or kind.",
                "examples": [
                    "The new office is very nice."
                ]
            }
        ],
        "subtext": "a nice day / a nice place / a nice person"
    },
    {
        "word": "merveilleux",
        "feminine": "merveilleuse",
        "translation": "wonderful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✨",
        "form": "adjective",
        "plural": "merveilleux",
        "femininePlural": "merveilleuses",
        "definitions": [
            {
                "text": "Extremely good; causing delight.",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "subtext": "a wonderful opportunity / a wonderful time"
    },
    {
        "word": "terrible",
        "feminine": "terrible",
        "translation": "terrible",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😫",
        "form": "adjective",
        "plural": "terribles",
        "femininePlural": "terribles",
        "definitions": [
            {
                "text": "Extremely bad.",
                "examples": [
                    "The traffic this morning was terrible."
                ]
            }
        ],
        "subtext": "terrible weather / a terrible mistake / terrible news"
    },
    {
        "word": "affreux",
        "feminine": "affreuse",
        "translation": "awful",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤮",
        "form": "adjective",
        "plural": "affreux",
        "femininePlural": "affreuses",
        "definitions": [
            {
                "text": "Very bad or unpleasant.",
                "examples": [
                    "The noise in the open office is awful."
                ]
            }
        ],
        "subtext": "awful weather / awful news / simply awful"
    },
    {
        "word": "incroyable",
        "feminine": "incroyable",
        "translation": "amazing",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😲",
        "form": "adjective",
        "plural": "incroyables",
        "femininePlural": "incroyables",
        "definitions": [
            {
                "text": "Causing great surprise or admiration.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "subtext": "an amazing result / an amazing offer / truly amazing"
    },
    {
        "word": "fantastique",
        "feminine": "fantastique",
        "translation": "fantastic",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "fantastiques",
        "femininePlural": "fantastiques",
        "definitions": [
            {
                "text": "Extremely good.",
                "examples": [
                    "The new system works in a fantastic way."
                ]
            }
        ],
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic"
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
        "femininePlural": "tristes",
        "definitions": [
            {
                "text": "Feeling unhappy or sorrowful.",
                "examples": [
                    "He was sad to leave the company."
                ]
            }
        ],
        "subtext": "feel sad / a sad situation / deeply sad"
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
        "femininePlural": "affamées",
        "definitions": [
            {
                "text": "Needing food.",
                "examples": [
                    "I am hungry — it is already two o'clock."
                ]
            }
        ],
        "subtext": "feel hungry / very hungry / go hungry"
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
        "femininePlural": "fâchées",
        "definitions": [
            {
                "text": "Feeling strong displeasure.",
                "examples": [
                    "She was angry about the decision."
                ]
            }
        ],
        "subtext": "feel angry / angry with someone / very angry"
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
        "femininePlural": "ennuyées",
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "subtext": "feel bored / bored with / easily bored"
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
        "femininePlural": "excitées",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "subtext": "feel excited / excited about / very excited"
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
        "femininePlural": "effrayées",
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "subtext": "afraid of / feel afraid / deeply afraid"
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
        "femininePlural": "désolées",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "subtext": "feel sorry / sorry for / sorry about"
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
        "femininePlural": "correctes",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            }
        ],
        "subtext": "right answer / right time / absolutely right"
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
        "femininePlural": "mauvaises",
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "subtext": "wrong answer / go wrong / completely wrong"
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
        "femininePlural": "nouvelles",
        "definitions": [
            {
                "text": "Not existing before; recently made.",
                "examples": [
                    "She has a new job starting in March."
                ]
            }
        ],
        "subtext": "new job / brand new / completely new"
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
        "femininePlural": "différentes",
        "definitions": [
            {
                "text": "Not the same as another.",
                "examples": [
                    "This job is very different from my last one."
                ]
            }
        ],
        "subtext": "completely different / very different / different from"
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
        "femininePlural": "mêmes",
        "definitions": [
            {
                "text": "Not different; identical.",
                "examples": [
                    "They earn the same salary."
                ]
            }
        ],
        "subtext": "the same as / exactly the same / same time"
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
        "femininePlural": "rapides",
        "definitions": [
            {
                "text": "Moving or happening quickly.",
                "examples": [
                    "The train to work is fast and reliable."
                ]
            }
        ],
        "subtext": "fast food / fast train / very fast"
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
        "femininePlural": "lentes",
        "definitions": [
            {
                "text": "Not fast; taking a long time.",
                "examples": [
                    "The new system is very slow."
                ]
            }
        ],
        "subtext": "slow progress / slow internet / very slow"
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
        "femininePlural": "calmes",
        "definitions": [
            {
                "text": "Making little or no noise; peaceful.",
                "examples": [
                    "The office is quiet at lunchtime."
                ]
            }
        ],
        "subtext": "quiet area / keep quiet / nice and quiet"
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
        "femininePlural": "bruyantes",
        "definitions": [
            {
                "text": "Making a lot of noise.",
                "examples": [
                    "The open-plan office is too loud."
                ]
            }
        ],
        "subtext": "loud noise / too loud / a loud voice"
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
        "femininePlural": "sûres",
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "subtext": "safe area / safe to do / feel safe"
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
        "femininePlural": "dangereuses",
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "subtext": "dangerous situation / very dangerous / potentially dangerous"
    },
    {
        "word": "malheureux",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "unhappy",
        "feminine": "malheureuse",
        "plural": "malheureux",
        "femininePlural": "malheureuses",
        "definitions": [
            {
                "text": "Ne pas se sentir satisfait ou heureux.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "subtext": "malheureux de quelque chose / profondément malheureux"
    },
    {
        "word": "nerveux",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "nervous",
        "feminine": "nerveuse",
        "plural": "nerveux",
        "femininePlural": "nerveuses",
        "definitions": [
            {
                "text": "Se sentir anxieux ou inquiet.",
                "examples": [
                    "He was nervous before the job interview."
                ]
            }
        ],
        "subtext": "nerveux avant un entretien / très nerveux"
    },
    {
        "word": "stressé",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "stressed",
        "feminine": "stressée",
        "plural": "stressés",
        "femininePlural": "stressées",
        "definitions": [
            {
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / stressed out"
    },
    {
        "word": "confiant",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "confident",
        "feminine": "confiante",
        "plural": "confiants",
        "femininePlural": "confiantes",
        "definitions": [
            {
                "text": "Feeling sure of your own abilities.",
                "examples": [
                    "She is very confident in client presentations."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident"
    },
    {
        "word": "fier",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "proud",
        "feminine": "fière",
        "plural": "fiers",
        "femininePlural": "fières",
        "definitions": [
            {
                "text": "Feeling pleased about an achievement.",
                "examples": [
                    "He was proud to get his first promotion."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of"
    },
    {
        "word": "effrayé",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "scared",
        "feminine": "effrayée",
        "plural": "effrayés",
        "femininePlural": "effrayées",
        "definitions": [
            {
                "text": "Feeling fear about something.",
                "examples": [
                    "She was scared about giving the presentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared"
    },
    {
        "word": "surpris",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "translation": "surprised",
        "feminine": "surprise",
        "plural": "surpris",
        "femininePlural": "surprises",
        "definitions": [
            {
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised"
    },
    {
        "word": "déçu",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "disappointed",
        "feminine": "déçue",
        "plural": "déçus",
        "femininePlural": "déçues",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with"
    },
    {
        "word": "beau",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "beautiful",
        "feminine": "belle",
        "plural": "beaux",
        "femininePlural": "belles",
        "definitions": [
            {
                "text": "Attractive and pleasing to look at.",
                "examples": [
                    "She has a beautiful, bright office with city views."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful"
    },
    {
        "word": "joli",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "pretty",
        "feminine": "jolie",
        "plural": "jolis",
        "femininePlural": "jolies",
        "definitions": [
            {
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "The new meeting room is very pretty."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty"
    },
    {
        "word": "fort",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "strong",
        "feminine": "forte",
        "plural": "forts",
        "femininePlural": "fortes",
        "definitions": [
            {
                "text": "Having great physical or mental power.",
                "examples": [
                    "She is a strong leader and very respected."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong"
    },
    {
        "word": "faible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "weak",
        "feminine": "faible",
        "plural": "faibles",
        "femininePlural": "faibles",
        "definitions": [
            {
                "text": "Lacking strength or power.",
                "examples": [
                    "The signal is weak on the top floor."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak"
    },
    {
        "word": "en forme",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "translation": "fit",
        "feminine": "en forme",
        "plural": "en forme",
        "femininePlural": "en forme",
        "definitions": [
            {
                "text": "In good physical condition through exercise.",
                "examples": [
                    "She keeps fit by cycling to work every day."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit"
    },
    {
        "word": "excellent",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "excellent",
        "feminine": "excellente",
        "plural": "excellents",
        "femininePlural": "excellentes",
        "definitions": [
            {
                "text": "Extremely good; of a very high standard.",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent"
    },
    {
        "word": "parfait",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "perfect",
        "feminine": "parfaite",
        "plural": "parfaits",
        "femininePlural": "parfaites",
        "definitions": [
            {
                "text": "Without any faults; completely correct.",
                "examples": [
                    "The timing of the launch was perfect."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect"
    },
    {
        "word": "inutile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useless",
        "feminine": "inutile",
        "plural": "inutiles",
        "femininePlural": "inutiles",
        "definitions": [
            {
                "text": "Without any useful value; not helpful.",
                "examples": [
                    "This software is useless for our needs."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea"
    },
    {
        "word": "correct",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "correct",
        "feminine": "correcte",
        "plural": "corrects",
        "femininePlural": "correctes",
        "definitions": [
            {
                "text": "True or right; without errors.",
                "examples": [
                    "Please check the figures are correct."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct"
    },
    {
        "word": "intéressant",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "interesting",
        "feminine": "intéressante",
        "plural": "intéressants",
        "femininePlural": "intéressantes",
        "definitions": [
            {
                "text": "Attracting attention; worth knowing about.",
                "examples": [
                    "The new proposal is very interesting."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea"
    },
    {
        "word": "ennuyeux",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "boring",
        "feminine": "ennuyeuse",
        "plural": "ennuyeux",
        "femininePlural": "ennuyeuses",
        "definitions": [
            {
                "text": "Not interesting; dull.",
                "examples": [
                    "The training session was very boring."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring"
    },
    {
        "word": "nécessaire",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "necessary",
        "feminine": "nécessaire",
        "plural": "nécessaires",
        "femininePlural": "nécessaires",
        "definitions": [
            {
                "text": "Needed; required in order to do something.",
                "examples": [
                    "A good internet connection is necessary for remote work."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do"
    },
    {
        "word": "possible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "possible",
        "feminine": "possible",
        "plural": "possibles",
        "femininePlural": "possibles",
        "definitions": [
            {
                "text": "Able to happen or be achieved.",
                "examples": [
                    "Is it possible to finish by Friday?"
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible"
    },
    {
        "word": "impossible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "impossible",
        "feminine": "impossible",
        "plural": "impossibles",
        "femininePlural": "impossibles",
        "definitions": [
            {
                "text": "Not able to happen or be done.",
                "examples": [
                    "It is impossible to finish in one day."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible"
    },
    {
        "word": "spécial",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "special",
        "feminine": "spéciale",
        "plural": "spéciaux",
        "femininePlural": "spéciales",
        "definitions": [
            {
                "text": "Different from what is usual; particularly important.",
                "examples": [
                    "She has a special talent for problem-solving."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special"
    },
    {
        "word": "populaire",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "popular",
        "feminine": "populaire",
        "plural": "populaires",
        "femininePlural": "populaires",
        "definitions": [
            {
                "text": "Liked by many people.",
                "examples": [
                    "The new café near the office is very popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / most popular"
    },
    {
        "word": "similaire",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "similar",
        "feminine": "similaire",
        "plural": "similaires",
        "femininePlural": "similaires",
        "definitions": [
            {
                "text": "Almost the same; having many shared features.",
                "examples": [
                    "Our approaches are very similar."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results"
    },
    {
        "word": "amical",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "friendly",
        "feminine": "amicale",
        "plural": "amicaux",
        "femininePlural": "amicales",
        "definitions": [
            {
                "text": "Kind and pleasant; easy to talk to.",
                "examples": [
                    "The new manager is very friendly and approachable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere"
    },
    {
        "word": "gentil",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "kind",
        "feminine": "gentille",
        "plural": "gentils",
        "femininePlural": "gentilles",
        "definitions": [
            {
                "text": "Caring and generous to others.",
                "examples": [
                    "She is kind to everyone in the office."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person"
    },
    {
        "word": "drôle",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "funny",
        "feminine": "drôle",
        "plural": "drôles",
        "femininePlural": "drôles",
        "definitions": [
            {
                "text": "Making people laugh; humorous.",
                "examples": [
                    "He has a funny way of explaining complex ideas."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny"
    },
    {
        "word": "intelligent",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "clever",
        "feminine": "intelligente",
        "plural": "intelligents",
        "femininePlural": "intelligentes",
        "definitions": [
            {
                "text": "Intelligent; quick to understand.",
                "examples": [
                    "She is a clever negotiator."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough"
    },
    {
        "word": "poli",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "polite",
        "feminine": "polie",
        "plural": "polis",
        "femininePlural": "polies",
        "definitions": [
            {
                "text": "Behaving in a respectful and courteous way.",
                "examples": [
                    "He is always polite with clients."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough"
    },
    {
        "word": "impoli",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "rude",
        "feminine": "impolie",
        "plural": "impolis",
        "femininePlural": "impolies",
        "definitions": [
            {
                "text": "Not polite; showing a lack of respect.",
                "examples": [
                    "That email was quite rude and unprofessional."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude"
    },
    {
        "word": "paresseux",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "lazy",
        "feminine": "paresseuse",
        "plural": "paresseux",
        "femininePlural": "paresseuses",
        "definitions": [
            {
                "text": "Not willing to work or use effort.",
                "examples": [
                    "He has a reputation for being lazy with follow-ups."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy"
    },
    {
        "word": "honnête",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "honest",
        "feminine": "honnête",
        "plural": "honnêtes",
        "femininePlural": "honnêtes",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "She is known for being completely honest with clients."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest"
    },
    {
        "word": "bruyant",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "noisy",
        "feminine": "bruyante",
        "plural": "bruyants",
        "femininePlural": "bruyantes",
        "definitions": [
            {
                "text": "Making a lot of sound; loud.",
                "examples": [
                    "The open plan office is very noisy."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "translation": "young",
        "feminine": "jeune",
        "plural": "jeunes",
        "femininePlural": "jeunes",
        "definitions": [
            {
                "text": "Having lived or existed for only a short time.",
                "examples": [
                    "He is a young man."
                ]
            }
        ]
    },
    {
        "word": "sain",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
        "translation": "healthy",
        "feminine": "saine",
        "plural": "sains",
        "femininePlural": "saines",
        "definitions": [
            {
                "text": "Good for your body; not ill.",
                "examples": [
                    "Vegetables are healthy food."
                ]
            }
        ],
        "subtext": "well, fit, healthy diet"
    },
    {
        "word": "malade",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "translation": "ill",
        "feminine": "malade",
        "plural": "malades",
        "femininePlural": "malades",
        "definitions": [
            {
                "text": "Not well; sick.",
                "examples": [
                    "I feel ill today."
                ]
            }
        ],
        "subtext": "sick, feel ill"
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "translation": "useful",
        "feminine": "utile",
        "plural": "utiles",
        "femininePlural": "utiles",
        "definitions": [
            {
                "text": "Helpful; having a practical purpose.",
                "examples": [
                    "A car is very useful in the country."
                ]
            }
        ],
        "subtext": "helpful, practical"
    },
    {
        "word": "détendu",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "translation": "relaxed",
        "feminine": "détendue",
        "plural": "détendus",
        "femininePlural": "détendues",
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "subtext": "calm, feeling relaxed"
    },
    {
        "word": "inquiet",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "translation": "worried",
        "feminine": "inquiète",
        "plural": "inquiets",
        "femininePlural": "inquiètes",
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "subtext": "anxious"
    }
];
    const lang = "fr";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();