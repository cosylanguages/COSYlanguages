(function() {
    const data = [
    {
        "word": "grand",
        "feminine": "grande",
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
        "subtext": "un grand bâtiment / une grande personne / assez grand",
        "comparative": "plus grand",
        "superlative": "le plus grand",
        "opposite": "court",
        "oppositeEmoji": "📏"
    },
    {
        "word": "court",
        "feminine": "courte",
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
        "subtext": "a short journey / short hair / too short",
        "comparative": "plus court",
        "superlative": "le plus court",
        "opposite": "grand",
        "oppositeEmoji": "🗼"
    },
    {
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
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
        ],
        "comparative": "plus jeune",
        "superlative": "le plus jeune",
        "opposite": "vieux",
        "oppositeEmoji": "👴",
        "subtext": "young person / young professional / young at heart",
        "word": "jeune"
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
        "emoji": "👴",
        "plural": "vieux",
        "femininePlural": "vieilles",
        "subtext": "old friend / old habits / very old",
        "comparative": "plus vieux",
        "superlative": "le plus vieux"
    },
    {
        "word": "ensoleillé",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of light from the sun.",
                "examples": [
                    "It is a sunny day.",
                    "I like sunny weather."
                ]
            }
        ],
        "subtext": "sunny day / sunny weather / sunny spell",
        "comparative": "plus ensoleillé",
        "superlative": "le plus ensoleillé",
        "feminine": "ensoleillée",
        "plural": "ensoleillés",
        "femininePlural": "ensoleillées"
    },
    {
        "word": "pluvieux",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a lot of rain.",
                "examples": [
                    "It is a rainy day.",
                    "Wear a coat, it's rainy outside."
                ]
            }
        ],
        "subtext": "rainy day / rainy weather / rainy season",
        "comparative": "plus pluvieux",
        "superlative": "le plus pluvieux",
        "feminine": "pluvieuse",
        "plural": "pluvieux",
        "femininePlural": "pluvieuses"
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
        "plural": "chauds",
        "femininePlural": "chaudes",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
        "comparative": "plus chaud",
        "superlative": "le plus chaud"
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
        "plural": "froids",
        "femininePlural": "froides",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
        "comparative": "plus froid",
        "superlative": "le plus froid"
    },
    {
        "word": "ordinaire",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "spécial",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normal or usual; not special.",
                "examples": [
                    "It was an ordinary day."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": "plus ordinaire",
        "superlative": "le plus ordinaire",
        "feminine": "ordinaire",
        "plural": "ordinaires",
        "femininePlural": "ordinaires"
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
        "plural": "bon marché",
        "femininePlural": "bon marché",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
        "comparative": "plus bon marché",
        "superlative": "le plus bon marché"
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
        "plural": "chers",
        "femininePlural": "chères",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
        "comparative": "plus cher",
        "superlative": "le plus cher"
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
        "plural": "bons",
        "femininePlural": "bonnes",
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
        "comparative": "meilleur",
        "superlative": "le meilleur"
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
        "plural": "mauvais",
        "femininePlural": "mauvaises",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
        "comparative": "pire",
        "superlative": "le pire"
    },
    {
        "word": "grand",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "petit",
        "oppositeEmoji": "🐭",
        "definitions": [
            {
                "text": "De grande taille.",
                "examples": [
                    "C'est un grand bureau."
                ]
            }
        ],
        "feminine": "grande",
        "emoji": "🐘",
        "plural": "grands",
        "femininePlural": "grandes",
        "subtext": "large, huge / a big house / a big problem / big enough",
        "comparative": "plus grand",
        "superlative": "le plus grand"
    },
    {
        "word": "petit",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "grand",
        "oppositeEmoji": "🐘",
        "definitions": [
            {
                "text": "De petite taille.",
                "examples": [
                    "Elle a un petit appartement."
                ]
            }
        ],
        "feminine": "petite",
        "emoji": "🐭",
        "plural": "petits",
        "femininePlural": "petites",
        "subtext": "little, tiny / a small flat / a small salary / too small",
        "comparative": "plus petit",
        "superlative": "le plus petit"
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
        "plural": "faciles",
        "femininePlural": "faciles",
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "plus facile",
        "superlative": "le plus facile"
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
        "plural": "difficiles",
        "femininePlural": "difficiles",
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "plus difficile",
        "superlative": "le plus difficile"
    },
    {
        "word": "heureux",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ressentir du plaisir ou de la joie.",
                "examples": [
                    "Je suis heureux aujourd'hui."
                ]
            }
        ],
        "feminine": "heureuse",
        "plural": "heureux",
        "femininePlural": "heureuses",
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
        "comparative": "plus heureux",
        "superlative": "le plus heureux"
    },
    {
        "word": "fatigué",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ayant besoin de repos ou de sommeil.",
                "examples": [
                    "Je suis très fatigué après le travail."
                ]
            }
        ],
        "feminine": "fatiguée",
        "plural": "fatigués",
        "femininePlural": "fatiguées",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "comparative": "plus fatigué",
        "superlative": "le plus fatigué"
    },
    {
        "word": "à plein temps",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "à temps partiel",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Working the complete number of hours in a working week.",
                "examples": [
                    "She has a full-time job in a bank."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": "plus à plein temps",
        "superlative": "le plus à plein temps",
        "feminine": "à plein temps",
        "plural": "à plein temps",
        "femininePlural": "à plein temps"
    },
    {
        "word": "à temps partiel",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "à plein temps",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Working fewer hours than a standard working week.",
                "examples": [
                    "He works part-time on Saturdays."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": "plus à temps partiel",
        "superlative": "le plus à temps partiel",
        "feminine": "à temps partiel",
        "plural": "à temps partiel",
        "femininePlural": "à temps partiel"
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
        "plural": "propres",
        "femininePlural": "propres",
        "comparative": "plus propre",
        "superlative": "le plus propre"
    },
    {
        "word": "sain",
        "level": "starter",
        "theme": "basic_foods_A1",
        "form": "adjective",
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
        "subtext": "well, fit, healthy diet",
        "comparative": "plus sain",
        "superlative": "le plus sain",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔"
    },
    {
        "word": "malade",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
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
        "subtext": "sick, feel ill",
        "comparative": "plus malade",
        "superlative": "le plus malade",
        "opposite": "well",
        "oppositeEmoji": "💪"
    },
    {
        "word": "en ligne",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Using the internet.",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": "plus en ligne",
        "superlative": "le plus en ligne",
        "feminine": "en ligne",
        "plural": "en ligne",
        "femininePlural": "en ligne"
    },
    {
        "word": "seul",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Without other people; by yourself.",
                "examples": [
                    "She lives alone."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": "plus seul",
        "superlative": "le plus seul",
        "feminine": "seule",
        "plural": "seuls",
        "femininePlural": "seules"
    },
    {
        "word": "détendu",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
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
        "subtext": "calm, feeling relaxed",
        "comparative": "plus détendu",
        "superlative": "le plus détendu",
        "opposite": "stressé",
        "oppositeEmoji": "😫"
    },
    {
        "word": "inquiet",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "anxious",
        "comparative": "plus inquiet",
        "superlative": "le plus inquiet",
        "opposite": "calm",
        "oppositeEmoji": "😌"
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
        "plural": "occupés",
        "femininePlural": "occupées",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "comparative": "plus occupé",
        "superlative": "le plus occupé"
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "helpful, practical",
        "comparative": "plus utile",
        "superlative": "le plus utile",
        "opposite": "inutile",
        "oppositeEmoji": "🗑️"
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
        "plural": "importants",
        "femininePlural": "importantes",
        "comparative": "plus important",
        "superlative": "le plus important"
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
        "plural": "rouges",
        "femininePlural": "rouges",
        "comparative": "plus rouge",
        "superlative": "le plus rouge"
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
        "plural": "bleus",
        "femininePlural": "bleues",
        "comparative": "plus bleu",
        "superlative": "le plus bleu"
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
        "plural": "verts",
        "femininePlural": "vertes",
        "comparative": "plus vert",
        "superlative": "le plus vert"
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
        "plural": "blancs",
        "femininePlural": "blanches",
        "comparative": "plus blanc",
        "superlative": "le plus blanc"
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
        "plural": "noirs",
        "femininePlural": "noires",
        "comparative": "plus noir",
        "superlative": "le plus noir"
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
        "plural": "jaunes",
        "femininePlural": "jaunes",
        "comparative": "plus jaune",
        "superlative": "le plus jaune"
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
        "plural": "libres",
        "femininePlural": "libres",
        "comparative": "plus libre",
        "superlative": "le plus libre"
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
        "plural": "ouverts",
        "femininePlural": "ouvertes",
        "comparative": "plus ouvert",
        "superlative": "le plus ouvert"
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
        "plural": "fermés",
        "femininePlural": "fermées",
        "comparative": "plus fermé",
        "superlative": "le plus fermé"
    },
    {
        "word": "grand",
        "feminine": "grande",
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
        "subtext": "a large city / a large company / a large amount",
        "comparative": "plus grand",
        "superlative": "le plus grand"
    },
    {
        "word": "petit",
        "feminine": "petite",
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
        "subtext": "a little bit / a little money / too little",
        "comparative": "plus petit",
        "superlative": "le plus petit"
    },
    {
        "word": "long",
        "feminine": "longue",
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
        "subtext": "a long journey / a long day / a long time",
        "comparative": "plus long",
        "superlative": "le plus long"
    },
    {
        "word": "haut",
        "feminine": "haute",
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
        "subtext": "high price / high rent / high quality",
        "comparative": "plus haut",
        "superlative": "le plus haut"
    },
    {
        "word": "bas",
        "feminine": "basse",
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
        "subtext": "low price / low salary / low quality",
        "comparative": "plus bas",
        "superlative": "le plus bas"
    },
    {
        "word": "plein",
        "feminine": "pleine",
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
        "subtext": "full time / a full day / full of people",
        "comparative": "plus plein",
        "superlative": "le plus plein"
    },
    {
        "word": "vide",
        "feminine": "vide",
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
        "subtext": "an empty flat / an empty room / nearly empty",
        "comparative": "plus vide",
        "superlative": "le plus vide"
    },
    {
        "word": "tiède",
        "feminine": "tiède",
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
        "subtext": "warm weather / a warm welcome / keep warm",
        "comparative": "plus tiède",
        "superlative": "le plus tiède"
    },
    {
        "word": "frais",
        "feminine": "fraîche",
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
        "subtext": "cool weather / a cool drink / stay cool",
        "comparative": "plus frais",
        "superlative": "le plus frais"
    },
    {
        "word": "mouillé",
        "feminine": "mouillée",
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
        "subtext": "wet weather / wet clothes / get wet",
        "comparative": "plus mouillé",
        "superlative": "le plus mouillé"
    },
    {
        "word": "sec",
        "feminine": "sèche",
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
        "subtext": "dry weather / dry skin / keep dry",
        "comparative": "plus sec",
        "superlative": "le plus sec"
    },
    {
        "word": "sale",
        "feminine": "sale",
        "level": "starter",
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
        "subtext": "dirty hands / dirty clothes / get dirty",
        "comparative": "plus sale",
        "superlative": "le plus sale"
    },
    {
        "word": "dur",
        "feminine": "dure",
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
        "subtext": "hard work / a hard decision / too hard",
        "comparative": "plus dur",
        "superlative": "le plus dur"
    },
    {
        "word": "doux",
        "feminine": "douce",
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
        "subtext": "soft light / soft music / soft skills",
        "comparative": "plus doux",
        "superlative": "le plus doux"
    },
    {
        "word": "lourd",
        "feminine": "lourde",
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
        "subtext": "heavy traffic / heavy rain / too heavy",
        "comparative": "plus lourd",
        "superlative": "le plus lourd"
    },
    {
        "word": "léger",
        "feminine": "légère",
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
        "subtext": "light rain / light traffic / a light meal",
        "comparative": "plus léger",
        "superlative": "le plus léger"
    },
    {
        "word": "brun",
        "feminine": "brune",
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
        "subtext": "dark brown / light brown / brown bread",
        "comparative": "plus brun",
        "superlative": "le plus brun"
    },
    {
        "word": "gris",
        "feminine": "grise",
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
        "subtext": "grey area / grey sky / pale grey",
        "comparative": "plus gris",
        "superlative": "le plus gris"
    },
    {
        "word": "rose",
        "feminine": "rose",
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
        "subtext": "light pink / bright pink / hot pink",
        "comparative": "plus rose",
        "superlative": "le plus rose"
    },
    {
        "word": "orange",
        "feminine": "orange",
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
        "subtext": "bright orange / dark orange / orange light",
        "comparative": "plus orange",
        "superlative": "le plus orange"
    },
    {
        "word": "génial",
        "feminine": "géniale",
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
        "subtext": "a great idea / a great opportunity / great value",
        "comparative": "plus génial",
        "superlative": "le plus génial"
    },
    {
        "word": "sympa",
        "feminine": "sympa",
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
        "subtext": "a nice day / a nice place / a nice person",
        "comparative": "plus sympa",
        "superlative": "le plus sympa"
    },
    {
        "word": "merveilleux",
        "feminine": "merveilleuse",
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
        "subtext": "a wonderful opportunity / a wonderful time",
        "comparative": "plus merveilleux",
        "superlative": "le plus merveilleux"
    },
    {
        "word": "terrible",
        "feminine": "terrible",
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
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "comparative": "plus terrible",
        "superlative": "le plus terrible"
    },
    {
        "word": "affreux",
        "feminine": "affreuse",
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
        "subtext": "awful weather / awful news / simply awful",
        "comparative": "plus affreux",
        "superlative": "le plus affreux"
    },
    {
        "word": "incroyable",
        "feminine": "incroyable",
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
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "comparative": "plus incroyable",
        "superlative": "le plus incroyable"
    },
    {
        "word": "fantastique",
        "feminine": "fantastique",
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
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "comparative": "plus fantastique",
        "superlative": "le plus fantastique"
    },
    {
        "word": "triste",
        "feminine": "triste",
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
        "subtext": "feel sad / a sad situation / deeply sad",
        "comparative": "plus triste",
        "superlative": "le plus triste"
    },
    {
        "word": "affamé",
        "feminine": "affamée",
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
        "subtext": "feel hungry / very hungry / go hungry",
        "comparative": "plus affamé",
        "superlative": "le plus affamé"
    },
    {
        "word": "fâché",
        "feminine": "fâchée",
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
        "subtext": "feel angry / angry with someone / very angry",
        "comparative": "plus fâché",
        "superlative": "le plus fâché"
    },
    {
        "word": "ennuyé",
        "feminine": "ennuyée",
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
        "subtext": "feel bored / bored with / easily bored",
        "comparative": "plus ennuyé",
        "superlative": "le plus ennuyé"
    },
    {
        "word": "excité",
        "feminine": "excitée",
        "level": "starter",
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
        "subtext": "feel excited / excited about / very excited",
        "comparative": "plus excité",
        "superlative": "le plus excité"
    },
    {
        "word": "effrayé",
        "feminine": "effrayée",
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
        "subtext": "afraid of / feel afraid / deeply afraid",
        "comparative": "plus effrayé",
        "superlative": "le plus effrayé"
    },
    {
        "word": "désolé",
        "feminine": "désolée",
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
        "subtext": "feel sorry / sorry for / sorry about",
        "comparative": "plus désolé",
        "superlative": "le plus désolé"
    },
    {
        "word": "correct",
        "feminine": "correcte",
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
        "subtext": "right answer / right time / absolutely right",
        "comparative": "plus correct",
        "superlative": "le plus correct"
    },
    {
        "word": "mauvais",
        "feminine": "mauvaise",
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
        "subtext": "wrong answer / go wrong / completely wrong",
        "comparative": "pire",
        "superlative": "le pire"
    },
    {
        "word": "nouveau",
        "feminine": "nouvelle",
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
        "subtext": "new job / brand new / completely new",
        "comparative": "plus nouveau",
        "superlative": "le plus nouveau"
    },
    {
        "word": "différent",
        "feminine": "différente",
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
        "subtext": "completely different / very different / different from",
        "comparative": "plus différent",
        "superlative": "le plus différent"
    },
    {
        "word": "même",
        "feminine": "même",
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
        "subtext": "the same as / exactly the same / same time",
        "comparative": "plus même",
        "superlative": "le plus même"
    },
    {
        "word": "rapide",
        "feminine": "rapide",
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
        "subtext": "fast food / fast train / very fast",
        "comparative": "plus rapide",
        "superlative": "le plus rapide"
    },
    {
        "word": "lent",
        "feminine": "lente",
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
        "subtext": "slow progress / slow internet / very slow",
        "comparative": "plus lent",
        "superlative": "le plus lent"
    },
    {
        "word": "calme",
        "feminine": "calme",
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
        "subtext": "quiet area / keep quiet / nice and quiet",
        "comparative": "plus calme",
        "superlative": "le plus calme"
    },
    {
        "word": "bruyant",
        "feminine": "bruyante",
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
        "subtext": "loud noise / too loud / a loud voice",
        "comparative": "plus bruyant",
        "superlative": "le plus bruyant"
    },
    {
        "word": "sûr",
        "feminine": "sûre",
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
        "subtext": "safe area / safe to do / feel safe",
        "comparative": "plus sûr",
        "superlative": "le plus sûr"
    },
    {
        "word": "dangereux",
        "feminine": "dangereuse",
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
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "comparative": "plus dangereux",
        "superlative": "le plus dangereux"
    },
    {
        "word": "malheureux",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "malheureux de quelque chose / profondément malheureux",
        "comparative": "plus malheureux",
        "superlative": "le plus malheureux"
    },
    {
        "word": "nerveux",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "nerveux avant un entretien / très nerveux",
        "comparative": "plus nerveux",
        "superlative": "le plus nerveux"
    },
    {
        "word": "stressé",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "feel stressed / very stressed / stressed out",
        "comparative": "plus stressé",
        "superlative": "le plus stressé"
    },
    {
        "word": "confiant",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "feel confident / self-confident / very confident",
        "comparative": "plus confiant",
        "superlative": "le plus confiant"
    },
    {
        "word": "fier",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "feel proud / very proud / proud of",
        "comparative": "plus fier",
        "superlative": "le plus fier"
    },
    {
        "word": "effrayé",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "feel scared / scared of / very scared",
        "comparative": "plus effrayé",
        "superlative": "le plus effrayé"
    },
    {
        "word": "surpris",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
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
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "comparative": "plus surpris",
        "superlative": "le plus surpris"
    },
    {
        "word": "déçu",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
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
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "comparative": "plus déçu",
        "superlative": "le plus déçu"
    },
    {
        "word": "beau",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "plus beau",
        "superlative": "le plus beau"
    },
    {
        "word": "joli",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "plus joli",
        "superlative": "le plus joli"
    },
    {
        "word": "fort",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "plus fort",
        "superlative": "le plus fort"
    },
    {
        "word": "faible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "plus faible",
        "superlative": "le plus faible"
    },
    {
        "word": "en forme",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
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
        "subtext": "physically fit / stay fit / keep fit",
        "comparative": "plus en forme",
        "superlative": "le plus en forme"
    },
    {
        "word": "excellent",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "plus excellent",
        "superlative": "le plus excellent"
    },
    {
        "word": "parfait",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "plus parfait",
        "superlative": "le plus parfait"
    },
    {
        "word": "inutile",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "plus inutile",
        "superlative": "le plus inutile"
    },
    {
        "word": "correct",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "plus correct",
        "superlative": "le plus correct"
    },
    {
        "word": "intéressant",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "plus intéressant",
        "superlative": "le plus intéressant"
    },
    {
        "word": "ennuyeux",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "plus ennuyeux",
        "superlative": "le plus ennuyeux"
    },
    {
        "word": "nécessaire",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "plus nécessaire",
        "superlative": "le plus nécessaire"
    },
    {
        "word": "possible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": "plus possible",
        "superlative": "le plus possible"
    },
    {
        "word": "impossible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "plus impossible",
        "superlative": "le plus impossible"
    },
    {
        "word": "spécial",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "a special offer / special occasion / very special",
        "comparative": "plus spécial",
        "superlative": "le plus spécial"
    },
    {
        "word": "populaire",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very popular / popular choice / most popular",
        "comparative": "plus populaire",
        "superlative": "le plus populaire"
    },
    {
        "word": "similaire",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very similar / similar to / similar results",
        "comparative": "plus similaire",
        "superlative": "le plus similaire"
    },
    {
        "word": "amical",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "comparative": "plus amical",
        "superlative": "le plus amical"
    },
    {
        "word": "gentil",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very kind / kind of you / a kind person",
        "comparative": "plus gentil",
        "superlative": "le plus gentil"
    },
    {
        "word": "drôle",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very funny / funny story / find funny",
        "comparative": "plus drôle",
        "superlative": "le plus drôle"
    },
    {
        "word": "intelligent",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very clever / a clever idea / clever enough",
        "comparative": "plus intelligent",
        "superlative": "le plus intelligent"
    },
    {
        "word": "poli",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very polite / polite request / polite enough",
        "comparative": "plus poli",
        "superlative": "le plus poli"
    },
    {
        "word": "impoli",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very rude / incredibly rude / deliberately rude",
        "comparative": "plus impoli",
        "superlative": "le plus impoli"
    },
    {
        "word": "paresseux",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very lazy / a lazy approach / too lazy",
        "comparative": "plus paresseux",
        "superlative": "le plus paresseux"
    },
    {
        "word": "honnête",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very honest / brutally honest / completely honest",
        "comparative": "plus honnête",
        "superlative": "le plus honnête"
    },
    {
        "word": "bruyant",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
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
        "subtext": "very noisy / noisy environment / too noisy",
        "comparative": "plus bruyant",
        "superlative": "le plus bruyant"
    }
];
    const lang = "fr";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();