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
                "text": "Une personne ou une chose qui est grande de bas en haut.",
                "examples": [
                    "Il est très grand.",
                    "Cet immeuble est grand."
                ]
            },
            {
                "text": "D'une taille supérieure à la moyenne.",
                "examples": [
                    "C'est une femme de grande taille qui travaille comme ingénieure."
                ]
            }
        ],
        "subtext": "un grand bâtiment / assez grand",
        "synonyms": [
            "une grande personne"
        ],
        "comparative": "plus grand",
        "superlative": "le plus grand",
        "opposite": "petit",
        "oppositeEmoji": "🐭"
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
                "text": "Une personne ou une chose qui n'est pas grande.",
                "examples": [
                    "Elle est petite.",
                    "Le crayon est court."
                ]
            },
            {
                "text": "De taille ou de longueur inférieure à la moyenne.",
                "examples": [
                    "Il a un trajet court — dix minutes à vélo."
                ]
            }
        ],
        "subtext": "un court voyage / les cheveux courts / trop court",
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
                "text": "Ayant vécu ou existé depuis peu de temps.",
                "examples": [
                    "C'est un jeune homme."
                ]
            }
        ],
        "comparative": "plus jeune",
        "superlative": "le plus jeune",
        "opposite": "vieux",
        "oppositeEmoji": "👴",
        "subtext": "",
        "synonyms": [
            "jeune personne",
            "jeune professionnel",
            "jeune de cœur"
        ],
        "word": "jeune"
    },
    {
        "word": "vieux",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "nouveau",
        "oppositeEmoji": "✨",
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
        "subtext": "très vieux",
        "synonyms": [
            "vieil ami",
            "vieilles habitudes"
        ],
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
                "text": "Ayant beaucoup de lumière du soleil.",
                "examples": [
                    "C'est une journée ensoleillée.",
                    "J'aime le temps ensoleillé."
                ]
            }
        ],
        "subtext": "temps ensoleillé",
        "synonyms": [
            "journée ensoleillée",
            "éclaircies"
        ],
        "comparative": "plus ensoleillé",
        "superlative": "le plus ensoleillé",
        "feminine": "ensoleillée",
        "plural": "ensoleillés",
        "femininePlural": "ensoleillées",
        "opposite": "pluvieux",
        "oppositeEmoji": "🌧️"
    },
    {
        "word": "pluvieux",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ayant beaucoup de pluie.",
                "examples": [
                    "C'est une journée pluvieuse.",
                    "Le temps est pluvieux dehors."
                ]
            }
        ],
        "subtext": "temps pluvieux",
        "synonyms": [
            "journée pluvieuse",
            "saison des pluies"
        ],
        "comparative": "plus pluvieux",
        "superlative": "le plus pluvieux",
        "feminine": "pluvieuse",
        "plural": "pluvieux",
        "femininePlural": "pluvieuses",
        "opposite": "ensoleillé",
        "oppositeEmoji": "☀️"
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
        "subtext": "très chaud / temps chaud / trop chaud",
        "synonyms": [
            "une boisson chaude"
        ],
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
        "subtext": "très froid / temps froid / trop froid",
        "synonyms": [
            "matinée froide",
            "une boisson froide"
        ],
        "comparative": "plus froid",
        "superlative": "le plus froid"
    },
    {
        "word": "ordinaire",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "incroyable",
        "oppositeEmoji": "😲",
        "definitions": [
            {
                "text": "Normal ou habituel ; pas spécial.",
                "examples": [
                    "C'était une journée ordinaire."
                ]
            }
        ],
        "subtext": "journée ordinaire / vie ordinaire / rien d'ordinaire",
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
        "subtext": "prix bas, bon marché / très bon marché",
        "synonyms": [
            "vol pas cher",
            "simple et efficace"
        ],
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
        "subtext": "très cher / trop cher",
        "synonyms": [
            "coûteux",
            "prix élevé",
            "goûts de luxe"
        ],
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
        "subtext": "bon rapport qualité-prix",
        "synonyms": [
            "génial",
            "agréable",
            "bonne idée",
            "bonne chance"
        ],
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
        "subtext": "",
        "synonyms": [
            "terrible",
            "affreux",
            "mauvaises nouvelles",
            "malchance",
            "mauvaise décision"
        ],
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
        "subtext": "grand, immense / assez grand",
        "synonyms": [
            "une grande maison",
            "un gros problème"
        ],
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
        "subtext": "petit, minuscule / un petit appartement / un petit salaire / trop petit",
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
        "oppositeEmoji": "🧩",
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
        "subtext": "facile à faire / pas facile",
        "synonyms": [
            "simple comme bonjour"
        ],
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
        "subtext": "difficile à faire / très difficile / trouver cela difficile",
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
        "subtext": "heureux, joyeux / se sentir heureux / content de quelque chose / un jour de bonheur",
        "comparative": "plus heureux",
        "superlative": "le plus heureux",
        "opposite": "malheureux",
        "oppositeEmoji": "😢"
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
        "subtext": "se sentir fatigué / fatigué de quelque chose / très fatigué",
        "synonyms": [
            "somnolent",
            "épuisé"
        ],
        "comparative": "plus fatigué",
        "superlative": "le plus fatigué",
        "opposite": "énergique",
        "oppositeEmoji": "⚡"
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
                "text": "Travaillant le nombre complet d'heures d'une semaine de travail.",
                "examples": [
                    "Elle a un emploi à plein temps dans une banque."
                ]
            }
        ],
        "subtext": "travail à plein temps / emploi à plein temps / salarié à plein temps",
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
                "text": "Travaillant moins d'heures qu'une semaine de travail standard.",
                "examples": [
                    "Il travaille à temps partiel le samedi."
                ]
            }
        ],
        "subtext": "travail à temps partiel / étudiant à temps partiel",
        "synonyms": [
            "emploi à mi-temps"
        ],
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
        "subtext": "",
        "synonyms": [
            "net",
            "impeccable"
        ],
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
                "text": "Bon pour le corps ; pas malade.",
                "examples": [
                    "Les légumes sont une nourriture saine."
                ]
            }
        ],
        "subtext": "régime sain",
        "synonyms": [
            "en bonne santé",
            "en forme"
        ],
        "comparative": "plus sain",
        "superlative": "le plus sain",
        "opposite": "malsain",
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
                "text": "Pas bien ; malade.",
                "examples": [
                    "Je me sens malade aujourd'hui."
                ]
            }
        ],
        "subtext": "malade",
        "synonyms": [
            "se sentir mal"
        ],
        "comparative": "plus malade",
        "superlative": "le plus malade",
        "opposite": "well",
        "oppositeEmoji": "💪"
    },
    {
        "word": "en ligne",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "hors ligne",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Utilisant Internet.",
                "examples": [
                    "J'achète parfois de la nourriture en ligne."
                ]
            }
        ],
        "subtext": "achats en ligne / cours en ligne / rester en ligne",
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
                "text": "Sans autres personnes ; tout seul.",
                "examples": [
                    "Elle vit seule."
                ]
            }
        ],
        "subtext": "vivre seul / voyager seul / se sentir seul",
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
                "text": "Calme ; pas inquiet ni stressé.",
                "examples": [
                    "Je me sens détendu le week-end."
                ]
            }
        ],
        "subtext": "se sentir détendu",
        "synonyms": [
            "calme"
        ],
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
                "text": "Se sentir anxieux à propos de quelque chose qui pourrait arriver.",
                "examples": [
                    "Elle est inquiète pour son travail."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "anxious"
        ],
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
        "subtext": "très occupé / emploi du temps chargé / trop occupé",
        "synonyms": [
            "journée chargée"
        ],
        "comparative": "plus occupé",
        "superlative": "le plus occupé",
        "opposite": "libre",
        "oppositeEmoji": "🆓"
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
                "text": "Qui peut servir à quelque chose.",
                "examples": [
                    "C'est un outil très utile."
                ]
            }
        ],
        "subtext": "utile",
        "synonyms": [
            "pratique"
        ],
        "comparative": "plus utile",
        "superlative": "le plus utile",
        "opposite": "inutile",
        "oppositeEmoji": "🗑️",
        "transcription": "y.til"
    },
    {
        "word": "important",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "essentiel"
        ],
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
        "superlative": "le plus important",
        "opposite": "peu important",
        "oppositeEmoji": "🍃"
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
        "subtext": "",
        "synonyms": [
            "sans frais",
            "cadeau"
        ],
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
        "superlative": "le plus libre",
        "opposite": "occupé",
        "oppositeEmoji": "💼"
    },
    {
        "word": "ouvert",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "fermé",
        "oppositeEmoji": "🔒",
        "subtext": "",
        "synonyms": [
            "libre d'accès"
        ],
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
        "oppositeEmoji": "🔓",
        "subtext": "",
        "synonyms": [
            "clos",
            "non accessible"
        ],
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
                "text": "De taille ou de quantité supérieure à la moyenne.",
                "examples": [
                    "Paris est une très grande ville."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "une grande ville",
            "une grande entreprise",
            "une grande quantité"
        ],
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
                "text": "De petite taille ; une petite quantité de.",
                "examples": [
                    "He drives a little car to save on fuel."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "a little bit",
            "a little money",
            "too little"
        ],
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
                "text": "De grande longueur ; qui dure longtemps.",
                "examples": [
                    "Elle a un long trajet tous les jours."
                ]
            }
        ],
        "subtext": "un long voyage",
        "synonyms": [
            "une longue journée",
            "une longue durée"
        ],
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
                "text": "D'une hauteur ou d'un niveau supérieur à la moyenne.",
                "examples": [
                    "Le loyer dans ce quartier est très élevé."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "high price",
            "high rent",
            "high quality"
        ],
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
                "text": "D'une hauteur ou d'un niveau inférieur à la moyenne.",
                "examples": [
                    "Le salaire est trop bas pour les heures effectuées."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "low price",
            "low salary",
            "low quality"
        ],
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
                "text": "Contenant autant que possible ; complet.",
                "examples": [
                    "Je me sens rassasié après ce déjeuner."
                ]
            }
        ],
        "subtext": "plein temps / plein de monde",
        "synonyms": [
            "une journée complète"
        ],
        "comparative": "plus plein",
        "superlative": "le plus plein",
        "opposite": "vide",
        "oppositeEmoji": "🫙"
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
                "text": "Ne contenant rien ; sans personne.",
                "examples": [
                    "Le bureau est vide le week-end."
                ]
            }
        ],
        "subtext": "un appartement vide / une pièce vide / presque vide",
        "comparative": "plus vide",
        "superlative": "le plus vide",
        "opposite": "plein",
        "oppositeEmoji": "🍷"
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
                "text": "Légèrement chaud ; agréablement chauffé.",
                "examples": [
                    "Le bureau est chaud et confortable."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "warm weather",
            "a warm welcome",
            "keep warm"
        ],
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
                "text": "Légèrement froid ; température agréablement basse.",
                "examples": [
                    "Elle préfère le temps frais pour travailler."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "cool weather",
            "a cool drink",
            "stay cool"
        ],
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
                "text": "Couvert d'eau ou de liquide.",
                "examples": [
                    "Sa veste est mouillée par la pluie."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "wet weather",
            "wet clothes",
            "get wet"
        ],
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
                    "Le local de stockage doit rester sec."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "dry weather",
            "dry skin",
            "keep dry"
        ],
        "comparative": "plus sec",
        "superlative": "le plus sec"
    },
    {
        "word": "sale",
        "feminine": "sale",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "💩",
        "form": "adjective",
        "plural": "sales",
        "femininePlural": "sales",
        "definitions": [
            {
                "text": "Couvert de saleté ou d'impuretés.",
                "examples": [
                    "Ses mains sont sales après avoir réparé la voiture."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "dirty hands",
            "dirty clothes",
            "get dirty"
        ],
        "comparative": "plus sale",
        "superlative": "le plus sale",
        "opposite": "propre",
        "oppositeEmoji": "✨"
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
                "text": "Ferme et solide ; difficile.",
                "examples": [
                    "La chaise est très dure et inconfortable."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "travail difficile",
            "une décision difficile",
            "trop difficile"
        ],
        "comparative": "plus dur",
        "superlative": "le plus dur",
        "opposite": "mou",
        "oppositeEmoji": "🧸"
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
                "text": "Pas dur ; doux au toucher.",
                "examples": [
                    "Le canapé est très doux et confortable."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "soft light",
            "soft music",
            "soft skills"
        ],
        "comparative": "plus doux",
        "superlative": "le plus doux",
        "opposite": "acide",
        "oppositeEmoji": "🍋"
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
                "text": "D'un poids important ; difficile à porter.",
                "examples": [
                    "Le sac est très lourd avec tous ces dossiers."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "heavy traffic",
            "heavy rain",
            "too heavy"
        ],
        "comparative": "plus lourd",
        "superlative": "le plus lourd",
        "opposite": "clair",
        "oppositeEmoji": "🪶"
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
                "text": "Pas lourd ; de couleur claire.",
                "examples": [
                    "Elle porte un sac léger pour aller au travail tous les jours."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "light rain",
            "light traffic",
            "a light meal"
        ],
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
                "text": "Ayant la couleur du bois ou de la terre.",
                "examples": [
                    "Elle a les yeux bruns et les cheveux foncés."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "dark brown",
            "light brown",
            "brown bread"
        ],
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
                "text": "Ayant une couleur entre le noir et le blanc.",
                "examples": [
                    "Il a les cheveux gris et un visage aimable."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "grey area",
            "grey sky",
            "pale grey"
        ],
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
                "text": "Ayant une couleur rouge pâle.",
                "examples": [
                    "Elle préfère le rose au rouge."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "light pink",
            "bright pink",
            "hot pink"
        ],
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
                "text": "Ayant la couleur d'une orange.",
                "examples": [
                    "Il a acheté une veste orange."
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
                "text": "Extrêmement bon ; important en quantité.",
                "examples": [
                    "C'est une excellente manager."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "une excellente idée",
            "une excellente opportunité",
            "excellente valeur"
        ],
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
                "text": "Agréable ou gentil.",
                "examples": [
                    "Le nouveau bureau est très sympa."
                ]
            }
        ],
        "subtext": "une personne sympa",
        "synonyms": [
            "une belle journée",
            "un bel endroit"
        ],
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
                "text": "Extrêmement bon ; provoquant du plaisir.",
                "examples": [
                    "Ils avaient une équipe merveilleuse."
                ]
            }
        ],
        "subtext": "un moment merveilleux",
        "synonyms": [
            "une opportunité merveilleuse"
        ],
        "comparative": "plus merveilleux",
        "superlative": "le plus merveilleux",
        "opposite": "terrible",
        "oppositeEmoji": "😫"
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
                "text": "Qui cause de la peur ou est très mauvais.",
                "examples": [
                    "La météo est terrible aujourd'hui."
                ]
            }
        ],
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "comparative": "plus terrible",
        "superlative": "le plus terrible",
        "transcription": "te.ʁibl",
        "opposite": "merveilleux",
        "oppositeEmoji": "🌟"
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
                "text": "Très mauvais ou désagréable.",
                "examples": [
                    "Le bruit dans l'open space est affreux."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "awful weather",
            "awful news",
            "simply awful"
        ],
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
                "text": "Provoquant une grande surprise ou admiration.",
                "examples": [
                    "Elle a fait une présentation incroyable."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "an amazing result",
            "an amazing offer",
            "truly amazing"
        ],
        "comparative": "plus incroyable",
        "superlative": "le plus incroyable",
        "opposite": "ordinaire",
        "oppositeEmoji": "📦"
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
                "text": "Extrêmement bon.",
                "examples": [
                    "Le nouveau système fonctionne de manière fantastique."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "fantastic news",
            "a fantastic opportunity",
            "truly fantastic"
        ],
        "comparative": "plus fantastique",
        "superlative": "le plus fantastique",
        "opposite": "horrible",
        "oppositeEmoji": "👹"
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
                "text": "Se sentir malheureux ou affligé.",
                "examples": [
                    "Il était triste de quitter l'entreprise."
                ]
            }
        ],
        "subtext": "se sentir triste / une situation triste / profondément triste",
        "comparative": "plus triste",
        "superlative": "le plus triste",
        "opposite": "heureux",
        "oppositeEmoji": "😊"
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
                "text": "Ayant besoin de nourriture.",
                "examples": [
                    "J'ai faim — il est déjà deux heures."
                ]
            }
        ],
        "subtext": "rester sur sa faim",
        "synonyms": [
            "avoir faim",
            "très faim"
        ],
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
                "text": "Ressentir un fort mécontentement.",
                "examples": [
                    "Elle était fâchée par la décision."
                ]
            }
        ],
        "subtext": "se sentir en colère / fâché contre quelqu'un",
        "synonyms": [
            "très en colère"
        ],
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
                "text": "Se sentir désintéressé ou agité.",
                "examples": [
                    "Il s'ennuie pendant les longues réunions."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "s'ennuyer",
            "s'ennuyer de",
            "s'ennuie facilement"
        ],
        "comparative": "plus ennuyé",
        "superlative": "le plus ennuyé"
    },
    {
        "word": "excité",
        "feminine": "excitée",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "excités",
        "femininePlural": "excitées",
        "definitions": [
            {
                "text": "Ressentir de l'enthousiasme et de l'impatience.",
                "examples": [
                    "Elle est excitée par son nouveau travail."
                ]
            }
        ],
        "subtext": "se sentir excité / excité par / très excité",
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
                "text": "Ressentir de la peur.",
                "examples": [
                    "Il a peur de faire des erreurs."
                ]
            }
        ],
        "subtext": "profondément effrayé",
        "synonyms": [
            "peur de",
            "avoir peur"
        ],
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
                "text": "Ressentir du regret ou de la tristesse.",
                "examples": [
                    "Elle est désolée pour le retard."
                ]
            }
        ],
        "subtext": "se sentir désolé / désolé pour / désolé de",
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
                "text": "Correct ; approprié.",
                "examples": [
                    "Est-ce le bon bureau ?"
                ]
            }
        ],
        "subtext": "tout à fait raison",
        "synonyms": [
            "bonne réponse",
            "bon moment"
        ],
        "comparative": "plus correct",
        "superlative": "le plus correct",
        "opposite": "incorrect",
        "oppositeEmoji": "❌"
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
                "text": "Pas correct ; pas approprié.",
                "examples": [
                    "C'était la mauvaise décision."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "mauvaise réponse",
            "se tromper",
            "complètement faux"
        ],
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
                "text": "N'existant pas auparavant ; récemment fabriqué.",
                "examples": [
                    "Elle a un nouveau travail qui commence en mars."
                ]
            }
        ],
        "subtext": "nouveau travail / tout nouveau / complètement nouveau",
        "comparative": "plus nouveau",
        "superlative": "le plus nouveau",
        "opposite": "vieux",
        "oppositeEmoji": "📦"
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
                "text": "Pas le même qu'un autre.",
                "examples": [
                    "Ce travail est très différent du précédent."
                ]
            }
        ],
        "subtext": "complètement différent / très différent / différent de",
        "comparative": "plus différent",
        "superlative": "le plus différent",
        "opposite": "même",
        "oppositeEmoji": "👯"
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
                "text": "Pas différent ; identique.",
                "examples": [
                    "Ils gagnent le même salaire."
                ]
            }
        ],
        "subtext": "le même que / exactement le même / en même temps",
        "comparative": "plus même",
        "superlative": "le plus même",
        "opposite": "différent",
        "oppositeEmoji": "🎭"
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
                "text": "Se déplaçant ou se produisant rapidement.",
                "examples": [
                    "Le train pour aller au travail est rapide et fiable."
                ]
            }
        ],
        "subtext": "restauration rapide / train rapide / très rapide",
        "comparative": "plus rapide",
        "superlative": "le plus rapide",
        "opposite": "lent",
        "oppositeEmoji": "🐢"
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
                "text": "Pas rapide ; prenant beaucoup de temps.",
                "examples": [
                    "Le nouveau système est très lent."
                ]
            }
        ],
        "subtext": "progrès lents / internet lent / très lent",
        "comparative": "plus lent",
        "superlative": "le plus lent",
        "opposite": "rapide",
        "oppositeEmoji": "🏎️"
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
                "text": "Faisant peu ou pas de bruit ; paisible.",
                "examples": [
                    "Le bureau est calme à l'heure du déjeuner."
                ]
            }
        ],
        "subtext": "quartier calme / rester calme / bien calme",
        "comparative": "plus calme",
        "superlative": "le plus calme",
        "opposite": "bruyant",
        "oppositeEmoji": "📢"
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
                "text": "Faisant beaucoup de bruit.",
                "examples": [
                    "L'open space est trop bruyant."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "bruit fort",
            "trop fort",
            "une voix forte"
        ],
        "comparative": "plus bruyant",
        "superlative": "le plus bruyant",
        "opposite": "calme",
        "oppositeEmoji": "🤫"
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
                "text": "Pas dangereux ; protégé du danger.",
                "examples": [
                    "Ce quartier est très sûr."
                ]
            }
        ],
        "subtext": "sûr à faire / se sentir en sécurité",
        "synonyms": [
            "zone sûre"
        ],
        "comparative": "plus sûr",
        "superlative": "le plus sûr",
        "opposite": "dangereux",
        "oppositeEmoji": "⚠️"
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
                "text": "Susceptible de causer du tort.",
                "examples": [
                    "Le trajet sur cette route est dangereux."
                ]
            }
        ],
        "subtext": "très dangereux / potentiellement dangereux",
        "synonyms": [
            "situation dangereuse"
        ],
        "comparative": "plus dangereux",
        "superlative": "le plus dangereux",
        "opposite": "sûr",
        "oppositeEmoji": "🛡️"
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
                    "Il est mécontent de son salaire actuel."
                ]
            }
        ],
        "subtext": "malheureux de quelque chose / profondément malheureux",
        "comparative": "plus malheureux",
        "superlative": "le plus malheureux",
        "opposite": "heureux",
        "oppositeEmoji": "😊"
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
                    "Il était nerveux avant l'entretien d'embauche."
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
                "text": "Se sentir inquiet et tendu par la pression.",
                "examples": [
                    "Elle se sent stressée avant chaque date limite."
                ]
            }
        ],
        "subtext": "se sentir stressé / très stressé / à bout de nerfs",
        "comparative": "plus stressé",
        "superlative": "le plus stressé",
        "opposite": "détendu",
        "oppositeEmoji": "😌"
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
                "text": "Se sentir sûr de ses propres capacités.",
                "examples": [
                    "Elle est très confiante lors des présentations clients."
                ]
            }
        ],
        "subtext": "se sentir confiant / très confiant",
        "synonyms": [
            "confiance en soi"
        ],
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
                "text": "Se sentir satisfait d'une réussite.",
                "examples": [
                    "Il était fier d'obtenir sa première promotion."
                ]
            }
        ],
        "subtext": "se sentir fier / très fier / fier de",
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
                "text": "Ressentir de la peur à propos de quelque chose.",
                "examples": [
                    "Elle avait peur de faire la présentation."
                ]
            }
        ],
        "subtext": "très effrayé",
        "synonyms": [
            "avoir peur",
            "peur de"
        ],
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
                "text": "Ressentir un choc face à quelque chose d'inattendu.",
                "examples": [
                    "Il a été surpris d'obtenir une augmentation."
                ]
            }
        ],
        "subtext": "se sentir surpris / très surpris / agréablement surpris",
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
                "text": "Se sentir triste parce que quelque chose n'était pas à la hauteur des attentes.",
                "examples": [
                    "Elle a été déçue de ne pas obtenir le poste."
                ]
            }
        ],
        "subtext": "se sentir déçu / profondément déçu / déçu par",
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
                "text": "Attrayant et agréable à regarder.",
                "examples": [
                    "Elle a un beau bureau lumineux avec vue sur la ville."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "belle vue",
            "belle ville",
            "absolument magnifique"
        ],
        "comparative": "plus beau",
        "superlative": "le plus beau",
        "opposite": "laid",
        "oppositeEmoji": "👹"
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
                "text": "Agréable à regarder ; assez attrayant.",
                "examples": [
                    "La nouvelle salle de réunion est très jolie."
                ]
            }
        ],
        "subtext": "assez joli",
        "synonyms": [
            "assez bien",
            "un bel endroit"
        ],
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
                "text": "Ayant une grande force physique ou mentale.",
                "examples": [
                    "C'est un leader fort et très respecté."
                ]
            }
        ],
        "subtext": "café fort / très fort",
        "synonyms": [
            "opinion tranchée"
        ],
        "comparative": "plus fort",
        "superlative": "le plus fort",
        "opposite": "faible",
        "oppositeEmoji": "🧣"
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
                "text": "Manquant de force ou de puissance.",
                "examples": [
                    "Le signal est faible au dernier étage."
                ]
            }
        ],
        "subtext": "connexion faible / un argument faible / très faible",
        "comparative": "plus faible",
        "superlative": "le plus faible",
        "opposite": "fort",
        "oppositeEmoji": "💪"
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
                "text": "En bonne condition physique grâce à l'exercice.",
                "examples": [
                    "Elle reste en forme en allant au travail à vélo tous les jours."
                ]
            }
        ],
        "subtext": "en bonne forme physique / rester en forme",
        "synonyms": [
            "garder la forme"
        ],
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
                "text": "Extrêmement bon ; d'un niveau très élevé.",
                "examples": [
                    "Elle a reçu une excellente évaluation."
                ]
            }
        ],
        "subtext": "excellent travail / excellents résultats / absolument excellent",
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
                "text": "Qui possède toutes le qualités requises.",
                "examples": [
                    "Ce gâteau è parfait."
                ]
            }
        ],
        "subtext": "moment parfait / absolument parfait",
        "synonyms": [
            "une occasion parfaite"
        ],
        "comparative": "plus parfait",
        "superlative": "le plus parfait",
        "transcription": "paʁ.fɛ"
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
                "text": "Sans aucune valeur utile ; pas utile.",
                "examples": [
                    "Ce logiciel est inutile pour nos besoins."
                ]
            }
        ],
        "subtext": "complètement inutile / se révéler inutile / une idée inutile",
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
                "text": "Vrai ou juste ; sans erreurs.",
                "examples": [
                    "Veuillez vérifier que les chiffres sont corrects."
                ]
            }
        ],
        "subtext": "tout à fait exact",
        "synonyms": [
            "bonne réponse",
            "la bonne manière"
        ],
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
                "text": "Qui attire l'attention ou la curiosité.",
                "examples": [
                    "C'est un article intéressant."
                ]
            }
        ],
        "subtext": "trouver intéressant / très intéressant",
        "synonyms": [
            "une idée intéressante"
        ],
        "comparative": "plus intéressant",
        "superlative": "le plus intéressant",
        "transcription": "ɛ̃.te.ʁɛ.sɑ̃"
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
                "text": "Qui cause de l'ennui ou de la lassitude.",
                "examples": [
                    "Ce long discours est ennuyeux."
                ]
            }
        ],
        "subtext": "très ennuyeux / trouver ennuyeux",
        "synonyms": [
            "une réunion ennuyeuse"
        ],
        "comparative": "plus ennuyeux",
        "superlative": "le plus ennuyeux",
        "transcription": "ɑ̃.nɥi.jø",
        "opposite": "excitant",
        "oppositeEmoji": "🎢"
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
                "text": "Nécessaire ; requis pour faire quelque chose.",
                "examples": [
                    "Une bonne connexion Internet est nécessaire pour le travail à distance."
                ]
            }
        ],
        "subtext": "absolument nécessaire / si nécessaire / nécessaire de faire",
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
                "text": "Pouvant se produire ou être réalisé.",
                "examples": [
                    "Est-il possible de finir d'ici vendredi ?"
                ]
            }
        ],
        "subtext": "dès que possible / c'est possible / rendre possible",
        "comparative": "plus possible",
        "superlative": "le plus possible",
        "opposite": "impossible",
        "oppositeEmoji": "🚫"
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
                "text": "Ne pouvant pas se produire ou être fait.",
                "examples": [
                    "Il est impossible de finir en un jour."
                ]
            }
        ],
        "subtext": "pratiquement impossible / rendre impossible / presque impossible",
        "comparative": "plus impossible",
        "superlative": "le plus impossible",
        "opposite": "possible",
        "oppositeEmoji": "👍"
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
                "text": "Différent de ce qui est habituel ; particulièrement important.",
                "examples": [
                    "Elle a un talent spécial pour la résolution de problèmes."
                ]
            }
        ],
        "subtext": "très spécial",
        "synonyms": [
            "une offre spéciale",
            "occasion spéciale"
        ],
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
                "text": "Aimé par beaucoup de gens.",
                "examples": [
                    "Le nouveau café près du bureau est très populaire."
                ]
            }
        ],
        "subtext": "très populaire / choix populaire / le plus populaire",
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
                "text": "Presque le même ; ayant de nombreuses caractéristiques communes.",
                "examples": [
                    "Nos approches sont très similaires."
                ]
            }
        ],
        "subtext": "très similaire / résultats similaires",
        "synonyms": [
            "semblable à"
        ],
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
                "text": "Aimable et agréable ; facile à aborder.",
                "examples": [
                    "Le nouveau manager est très amical et accessible."
                ]
            }
        ],
        "subtext": "très amical / un visage amical",
        "synonyms": [
            "atmosphère amicale"
        ],
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
                "text": "Attentionné et généreux envers les autres.",
                "examples": [
                    "Elle est gentille avec tout le monde au bureau."
                ]
            }
        ],
        "subtext": "très gentil / gentil de votre part",
        "synonyms": [
            "une personne gentille"
        ],
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
                "text": "Faisant rire les gens ; plein d'humour.",
                "examples": [
                    "Il a une façon drôle d'expliquer des idées complexes."
                ]
            }
        ],
        "subtext": "très drôle / histoire drôle / trouver drôle",
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
                "text": "Intelligent ; rapide à comprendre.",
                "examples": [
                    "C'est une négociatrice intelligente."
                ]
            }
        ],
        "subtext": "très intelligent",
        "synonyms": [
            "une idée intelligente",
            "assez malin"
        ],
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
                "text": "Se comporter de manière respectueuse et courtoise.",
                "examples": [
                    "Il est toujours poli avec les clients."
                ]
            }
        ],
        "subtext": "très poli / assez poli",
        "synonyms": [
            "demande polie"
        ],
        "comparative": "plus poli",
        "superlative": "le plus poli",
        "opposite": "impoli",
        "oppositeEmoji": "🖕"
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
                "text": "Pas poli ; montrant un manque de respect.",
                "examples": [
                    "Cet email était assez impoli et non professionnel."
                ]
            }
        ],
        "subtext": "très impoli / incroyablement impoli / délibérément impoli",
        "comparative": "plus impoli",
        "superlative": "le plus impoli",
        "opposite": "poli",
        "oppositeEmoji": "🙏"
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
                "text": "Ne voulant pas travailler ou faire d'efforts.",
                "examples": [
                    "Il a la réputation d'être paresseux pour les suivis."
                ]
            }
        ],
        "subtext": "très paresseux / trop paresseux",
        "synonyms": [
            "une approche paresseuse"
        ],
        "comparative": "plus paresseux",
        "superlative": "le plus paresseux",
        "opposite": "actif",
        "oppositeEmoji": "🏃"
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
                "text": "Disant la vérité ; ne trompant pas.",
                "examples": [
                    "Elle est connue pour être tout à fait honnête avec les clients."
                ]
            }
        ],
        "subtext": "très honnête / brutalement honnête / tout à fait honnête",
        "comparative": "plus honnête",
        "superlative": "le plus honnête",
        "opposite": "malhonnête",
        "oppositeEmoji": "🤥"
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
                "text": "Faisant beaucoup de bruit ; bruyant.",
                "examples": [
                    "L'open space est très bruyant."
                ]
            }
        ],
        "subtext": "très bruyant / environnement bruyant / trop bruyant",
        "comparative": "plus bruyant",
        "superlative": "le plus bruyant"
    },
    {
        "word": "honnête",
        "feminine": "honnête",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😇",
        "form": "adjective",
        "plural": "honnêtes",
        "femininePlural": "honnêtes",
        "definitions": [
            {
                "text": "Définition de honnête.",
                "examples": []
            }
        ],
        "subtext": "honnête",
        "comparative": "plus honnête",
        "superlative": "le plus honnête"
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
                "text": "Définition de bruyant.",
                "examples": []
            }
        ],
        "subtext": "bruyant",
        "comparative": "plus bruyant",
        "superlative": "le plus bruyant"
    },
    {
        "word": "rond",
        "feminine": "ronde",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⭕",
        "form": "adjective",
        "plural": "ronds",
        "femininePlural": "rondes",
        "definitions": [
            {
                "text": "Définition de rond.",
                "examples": []
            }
        ],
        "subtext": "rond",
        "comparative": "plus rond",
        "superlative": "le plus rond"
    },
    {
        "word": "carré",
        "feminine": "carrée",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "⬛",
        "form": "adjective",
        "plural": "carrés",
        "femininePlural": "carrées",
        "definitions": [
            {
                "text": "Définition de carré.",
                "examples": []
            }
        ],
        "subtext": "carré",
        "comparative": "plus carré",
        "superlative": "le plus carré"
    },
    {
        "word": "serviable",
        "feminine": "serviable",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "serviables",
        "femininePlural": "serviables",
        "definitions": [
            {
                "text": "Définition de serviable.",
                "examples": []
            }
        ],
        "subtext": "serviable",
        "comparative": "plus serviable",
        "superlative": "le plus serviable"
    },
    {
        "word": "patient",
        "feminine": "patiente",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧘",
        "form": "adjective",
        "plural": "patients",
        "femininePlural": "patientes",
        "definitions": [
            {
                "text": "Définition de patient.",
                "examples": []
            }
        ],
        "subtext": "patient",
        "comparative": "plus patient",
        "superlative": "le plus patient",
        "opposite": "impatient",
        "oppositeEmoji": "⌚"
    },
    {
        "word": "actif",
        "feminine": "active",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "actifs",
        "femininePlural": "actives",
        "definitions": [
            {
                "text": "Définition de actif.",
                "examples": []
            }
        ],
        "subtext": "actif",
        "comparative": "plus actif",
        "superlative": "le plus actif",
        "opposite": "paresseux",
        "oppositeEmoji": "🦥"
    },
    {
        "word": "prudent",
        "feminine": "prudente",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⚠️",
        "form": "adjective",
        "plural": "prudents",
        "femininePlural": "prudentes",
        "definitions": [
            {
                "text": "Définition de prudent.",
                "examples": []
            }
        ],
        "subtext": "prudent",
        "comparative": "plus prudent",
        "superlative": "le plus prudent"
    },
    {
        "word": "créatif",
        "feminine": "créative",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🎨",
        "form": "adjective",
        "plural": "créatifs",
        "femininePlural": "créatives",
        "definitions": [
            {
                "text": "Définition de créatif.",
                "examples": []
            }
        ],
        "subtext": "créatif",
        "comparative": "plus créatif",
        "superlative": "le plus créatif"
    },
    {
        "word": "nuageux",
        "feminine": "nuageuse",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "nuageux",
        "femininePlural": "nuageuses",
        "definitions": [
            {
                "text": "Définition de nuageux.",
                "examples": []
            }
        ],
        "subtext": "nuageux",
        "comparative": "plus nuageux",
        "superlative": "le plus nuageux"
    },
    {
        "word": "venteux",
        "feminine": "venteuse",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "💨",
        "form": "adjective",
        "plural": "venteux",
        "femininePlural": "venteuses",
        "definitions": [
            {
                "text": "Définition de venteux.",
                "examples": []
            }
        ],
        "subtext": "venteux",
        "comparative": "plus venteux",
        "superlative": "le plus venteux"
    },
    {
        "word": "neigeux",
        "feminine": "neigeuse",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "plural": "neigeux",
        "femininePlural": "neigeuses",
        "definitions": [
            {
                "text": "Définition de neigeux.",
                "examples": []
            }
        ],
        "subtext": "neigeux",
        "comparative": "plus neigeux",
        "superlative": "le plus neigeux"
    },
    {
        "word": "brumeux",
        "feminine": "brumeuse",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌫️",
        "form": "adjective",
        "plural": "brumeux",
        "femininePlural": "brumeuses",
        "definitions": [
            {
                "text": "Définition de brumeux.",
                "examples": []
            }
        ],
        "subtext": "brumeux",
        "comparative": "plus brumeux",
        "superlative": "le plus brumeux"
    },
    {
        "word": "orageux",
        "feminine": "orageuse",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "⛈️",
        "form": "adjective",
        "plural": "orageux",
        "femininePlural": "orageuses",
        "definitions": [
            {
                "text": "Définition de orageux.",
                "examples": []
            }
        ],
        "subtext": "orageux",
        "comparative": "plus orageux",
        "superlative": "le plus orageux"
    },
    {
        "word": "blond",
        "feminine": "blonde",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👱",
        "form": "adjective",
        "plural": "blonds",
        "femininePlural": "blondes",
        "definitions": [
            {
                "text": "Définition de blond.",
                "examples": []
            }
        ],
        "subtext": "blond",
        "comparative": "plus blond",
        "superlative": "le plus blond"
    },
    {
        "word": "intelligent",
        "feminine": "intelligente",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧠",
        "form": "adjective",
        "plural": "intelligents",
        "femininePlural": "intelligentes",
        "definitions": [
            {
                "text": "Définition de intelligent.",
                "examples": []
            }
        ],
        "subtext": "intelligent",
        "comparative": "plus intelligent",
        "superlative": "le plus intelligent"
    },
    {
        "word": "sérieux",
        "feminine": "sérieuse",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🧐",
        "form": "adjective",
        "plural": "sérieux",
        "femininePlural": "sérieuses",
        "definitions": [
            {
                "text": "Définition de sérieux.",
                "examples": []
            }
        ],
        "subtext": "sérieux",
        "comparative": "plus sérieux",
        "superlative": "le plus sérieux"
    },
    {
        "word": "laid",
        "feminine": "laide",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👹",
        "form": "adjective",
        "plural": "laids",
        "femininePlural": "laides",
        "definitions": [
            {
                "text": "Définition de laid.",
                "examples": []
            }
        ],
        "subtext": "laid",
        "comparative": "plus laid",
        "superlative": "le plus laid",
        "opposite": "beau",
        "oppositeEmoji": "🌸"
    },
    {
        "word": "proche",
        "feminine": "proche",
        "level": "starter",
        "theme": "distance_A1",
        "emoji": "📍",
        "form": "adjective",
        "plural": "proches",
        "femininePlural": "proches",
        "definitions": [
            {
                "text": "Définition de proche.",
                "examples": []
            }
        ],
        "subtext": "proche",
        "comparative": "plus proche",
        "superlative": "le plus proche",
        "opposite": "loin",
        "oppositeEmoji": "🔭"
    },
    {
        "word": "lointain",
        "feminine": "lointaine",
        "level": "starter",
        "theme": "distance_A1",
        "emoji": "🔭",
        "form": "adjective",
        "plural": "lointains",
        "femininePlural": "lointaines",
        "definitions": [
            {
                "text": "Définition de lointain.",
                "examples": []
            }
        ],
        "subtext": "lointain",
        "comparative": "plus lointain",
        "superlative": "le plus lointain"
    },
    {
        "word": "riche",
        "feminine": "riche",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "adjective",
        "plural": "riches",
        "femininePlural": "riches",
        "definitions": [
            {
                "text": "Définition de riche.",
                "examples": []
            }
        ],
        "subtext": "riche",
        "comparative": "plus riche",
        "superlative": "le plus riche",
        "opposite": "pauvre",
        "oppositeEmoji": "💸"
    },
    {
        "word": "pauvre",
        "feminine": "pauvre",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "🏚️",
        "form": "adjective",
        "plural": "pauvres",
        "femininePlural": "pauvres",
        "definitions": [
            {
                "text": "Définition de pauvre.",
                "examples": []
            }
        ],
        "subtext": "pauvre",
        "comparative": "plus pauvre",
        "superlative": "le plus pauvre",
        "opposite": "riche",
        "oppositeEmoji": "💰"
    },
    {
        "word": "matinal",
        "feminine": "matinale",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "adjective",
        "plural": "matinaux",
        "femininePlural": "matinales",
        "definitions": [
            {
                "text": "Définition de matinal.",
                "examples": []
            }
        ],
        "subtext": "matinal",
        "comparative": "plus matinal",
        "superlative": "le plus matinal"
    },
    {
        "word": "tardif",
        "feminine": "tardive",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "adjective",
        "plural": "tardifs",
        "femininePlural": "tardives",
        "definitions": [
            {
                "text": "Définition de tardif.",
                "examples": []
            }
        ],
        "subtext": "tardif",
        "comparative": "plus tardif",
        "superlative": "le plus tardif"
    },
    {
        "word": "passionnant",
        "feminine": "passionnante",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "passionnants",
        "femininePlural": "passionnantes",
        "definitions": [
            {
                "text": "Définition de passionnant.",
                "examples": []
            }
        ],
        "subtext": "passionnant",
        "comparative": "plus passionnant",
        "superlative": "le plus passionnant"
    },
    {
        "word": "délicieux",
        "feminine": "délicieuse",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "😋",
        "form": "adjective",
        "plural": "délicieux",
        "femininePlural": "délicieuses",
        "definitions": [
            {
                "text": "Définition de délicieux.",
                "examples": []
            }
        ],
        "subtext": "délicieux",
        "comparative": "plus délicieux",
        "superlative": "le plus délicieux"
    },
    {
        "word": "sucré",
        "feminine": "sucrée",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍬",
        "form": "adjective",
        "plural": "sucrés",
        "femininePlural": "sucrées",
        "definitions": [
            {
                "text": "Définition de sucré.",
                "examples": []
            }
        ],
        "subtext": "sucré",
        "comparative": "plus sucré",
        "superlative": "le plus sucré"
    },
    {
        "word": "confortable",
        "feminine": "confortable",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛋️",
        "form": "adjective",
        "plural": "confortables",
        "femininePlural": "confortables",
        "definitions": [
            {
                "text": "Définition de confortable.",
                "examples": []
            }
        ],
        "subtext": "confortable",
        "comparative": "plus confortable",
        "superlative": "le plus confortable"
    },
    {
        "word": "vrai",
        "feminine": "vraie",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💎",
        "form": "adjective",
        "plural": "vrais",
        "femininePlural": "vraies",
        "definitions": [
            {
                "text": "Définition de vrai.",
                "examples": []
            }
        ],
        "subtext": "vrai",
        "comparative": "plus vrai",
        "superlative": "le plus vrai",
        "opposite": "faux",
        "oppositeEmoji": "✖️"
    },
    {
        "word": "simple",
        "feminine": "simple",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "✅",
        "form": "adjective",
        "plural": "simples",
        "femininePlural": "simples",
        "definitions": [
            {
                "text": "Définition de simple.",
                "examples": []
            }
        ],
        "subtext": "simple",
        "comparative": "plus simple",
        "superlative": "le plus simple"
    },
    {
        "word": "naturel",
        "feminine": "naturelle",
        "level": "starter",
        "theme": "plants_natural_world_A1",
        "emoji": "🌱",
        "form": "adjective",
        "plural": "naturels",
        "femininePlural": "naturelles",
        "definitions": [
            {
                "text": "Définition de naturel.",
                "examples": []
            }
        ],
        "subtext": "naturel",
        "comparative": "plus naturel",
        "superlative": "le plus naturel"
    },
    {
        "word": "clair",
        "feminine": "claire",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💧",
        "form": "adjective",
        "plural": "clairs",
        "femininePlural": "claires",
        "definitions": [
            {
                "text": "Définition de clair.",
                "examples": []
            }
        ],
        "subtext": "clair",
        "comparative": "plus clair",
        "superlative": "le plus clair",
        "opposite": "lourd",
        "oppositeEmoji": "🏋️"
    },
    {
        "word": "commun",
        "feminine": "commune",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🔄",
        "form": "adjective",
        "plural": "communs",
        "femininePlural": "communes",
        "definitions": [
            {
                "text": "Définition de commun.",
                "examples": []
            }
        ],
        "subtext": "commun",
        "comparative": "plus commun",
        "superlative": "le plus commun"
    },
    {
        "word": "célèbre",
        "feminine": "célèbre",
        "level": "starter",
        "theme": "people_A1",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "célèbres",
        "femininePlural": "célèbres",
        "definitions": [
            {
                "text": "Définition de célèbre.",
                "examples": []
            }
        ],
        "subtext": "célèbre",
        "comparative": "plus célèbre",
        "superlative": "le plus célèbre"
    },
    {
        "word": "salé",
        "feminine": "salée",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧂",
        "form": "adjective",
        "plural": "salés",
        "femininePlural": "salées",
        "definitions": [
            {
                "text": "Définition de salé.",
                "examples": []
            }
        ],
        "subtext": "salé",
        "comparative": "plus salé",
        "superlative": "le plus salé"
    },
    {
        "word": "acide",
        "feminine": "acide",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🍋",
        "form": "adjective",
        "plural": "acides",
        "femininePlural": "acides",
        "definitions": [
            {
                "text": "Définition de acide.",
                "examples": []
            }
        ],
        "subtext": "acide",
        "comparative": "plus acide",
        "superlative": "le plus acide",
        "opposite": "doux",
        "oppositeEmoji": "🍭"
    },
    {
        "word": "amer",
        "feminine": "amère",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "☕",
        "form": "adjective",
        "plural": "amers",
        "femininePlural": "amères",
        "definitions": [
            {
                "text": "Définition de amer.",
                "examples": []
            }
        ],
        "subtext": "amer",
        "comparative": "plus amer",
        "superlative": "le plus amer"
    },
    {
        "word": "gros",
        "feminine": "grosse",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🍔",
        "form": "adjective",
        "plural": "gros",
        "femininePlural": "grosses",
        "definitions": [
            {
                "text": "Définition de gros.",
                "examples": []
            }
        ],
        "subtext": "gros",
        "comparative": "plus gros",
        "superlative": "le plus gros",
        "opposite": "mince",
        "oppositeEmoji": "🥪"
    },
    {
        "word": "mince",
        "feminine": "mince",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🥬",
        "form": "adjective",
        "plural": "minces",
        "femininePlural": "minces",
        "definitions": [
            {
                "text": "Définition de mince.",
                "examples": []
            }
        ],
        "subtext": "mince",
        "comparative": "plus mince",
        "superlative": "le plus mince",
        "opposite": "gros",
        "oppositeEmoji": "🍔"
    },
    {
        "word": "bouclé",
        "feminine": "bouclée",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "🌀",
        "form": "adjective",
        "plural": "bouclés",
        "femininePlural": "bouclées",
        "definitions": [
            {
                "text": "Définition de bouclé.",
                "examples": []
            }
        ],
        "subtext": "bouclé",
        "comparative": "plus bouclé",
        "superlative": "le plus bouclé"
    },
    {
        "word": "droit",
        "feminine": "droite",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "droits",
        "femininePlural": "droites",
        "definitions": [
            {
                "text": "Définition de droit.",
                "examples": []
            }
        ],
        "subtext": "droit",
        "comparative": "plus droit",
        "superlative": "le plus droit"
    },
    {
        "word": "triangulaire",
        "feminine": "triangulaire",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🔺",
        "form": "adjective",
        "plural": "triangulaires",
        "femininePlural": "triangulaires",
        "definitions": [
            {
                "text": "Définition de triangulaire.",
                "examples": []
            }
        ],
        "subtext": "triangulaire",
        "comparative": "plus triangulaire",
        "superlative": "le plus triangulaire"
    },
    {
        "word": "rectangulaire",
        "feminine": "rectangulaire",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "▭",
        "form": "adjective",
        "plural": "rectangulaires",
        "femininePlural": "rectangulaires",
        "definitions": [
            {
                "text": "Définition de rectangulaire.",
                "examples": []
            }
        ],
        "subtext": "rectangulaire",
        "comparative": "plus rectangulaire",
        "superlative": "le plus rectangulaire"
    },
    {
        "word": "ovale",
        "feminine": "ovale",
        "level": "starter",
        "theme": "shapes_A1",
        "emoji": "🥚",
        "form": "adjective",
        "plural": "ovales",
        "femininePlural": "ovales",
        "definitions": [
            {
                "text": "Définition de ovale.",
                "examples": []
            }
        ],
        "subtext": "ovale",
        "comparative": "plus ovale",
        "superlative": "le plus ovale"
    },
    {
        "word": "préféré",
        "feminine": "préférée",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "⭐",
        "form": "adjective",
        "plural": "préférés",
        "femininePlural": "préférées",
        "definitions": [
            {
                "text": "Définition de préféré.",
                "examples": []
            }
        ],
        "subtext": "préféré",
        "comparative": "plus préféré",
        "superlative": "le plus préféré"
    },
    {
        "word": "sombre",
        "feminine": "sombre",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🌑",
        "form": "adjective",
        "plural": "sombres",
        "femininePlural": "sombres",
        "definitions": [
            {
                "text": "Définition de sombre.",
                "examples": []
            }
        ],
        "subtext": "sombre",
        "comparative": "plus sombre",
        "superlative": "le plus sombre",
        "opposite": "clair",
        "oppositeEmoji": "💡"
    },
    {
        "word": "lumineux",
        "feminine": "lumineuse",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💡",
        "form": "adjective",
        "plural": "lumineux",
        "femininePlural": "lumineuses",
        "definitions": [
            {
                "text": "Définition de lumineux.",
                "examples": []
            }
        ],
        "subtext": "lumineux",
        "comparative": "plus lumineux",
        "superlative": "le plus lumineux"
    },
    {
        "word": "doré",
        "feminine": "dorée",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟡",
        "form": "adjective",
        "plural": "dorés",
        "femininePlural": "dorées",
        "definitions": [
            {
                "text": "Définition de doré.",
                "examples": []
            }
        ],
        "subtext": "doré",
        "comparative": "plus doré",
        "superlative": "le plus doré"
    },
    {
        "word": "argenté",
        "feminine": "argentée",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⚪",
        "form": "adjective",
        "plural": "argentés",
        "femininePlural": "argentées",
        "definitions": [
            {
                "text": "Définition de argenté.",
                "examples": []
            }
        ],
        "subtext": "argenté",
        "comparative": "plus argenté",
        "superlative": "le plus argenté"
    },
    {
        "word": "profond",
        "feminine": "profonde",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🕳️",
        "form": "adjective",
        "plural": "profonds",
        "femininePlural": "profondes",
        "definitions": [
            {
                "text": "Définition de profond.",
                "examples": []
            }
        ],
        "subtext": "profond",
        "comparative": "plus profond",
        "superlative": "le plus profond"
    },
    {
        "word": "peu profond",
        "feminine": "peu profonde",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "plural": "peu profonds",
        "femininePlural": "peu profondes",
        "definitions": [
            {
                "text": "Définition de peu profond.",
                "examples": []
            }
        ],
        "subtext": "peu profond",
        "comparative": "plus peu profond",
        "superlative": "le plus peu profond"
    },
    {
        "word": "moderne",
        "feminine": "moderne",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏙️",
        "form": "adjective",
        "plural": "modernes",
        "femininePlural": "modernes",
        "definitions": [
            {
                "text": "Définition de moderne.",
                "examples": []
            }
        ],
        "subtext": "moderne",
        "comparative": "plus moderne",
        "superlative": "le plus moderne"
    },
    {
        "word": "ancien",
        "feminine": "ancienne",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🏛️",
        "form": "adjective",
        "plural": "anciens",
        "femininePlural": "anciennes",
        "definitions": [
            {
                "text": "Définition de ancien.",
                "examples": []
            }
        ],
        "subtext": "ancien",
        "comparative": "plus ancien",
        "superlative": "le plus ancien"
    },
    {
        "word": "courageux",
        "feminine": "courageuse",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🦁",
        "form": "adjective",
        "plural": "courageux",
        "femininePlural": "courageuses",
        "definitions": [
            {
                "text": "Définition de courageux.",
                "examples": []
            }
        ],
        "subtext": "courageux",
        "comparative": "plus courageux",
        "superlative": "le plus courageux"
    },
    {
        "word": "lâche",
        "feminine": "lâche",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🐭",
        "form": "adjective",
        "plural": "lâches",
        "femininePlural": "lâches",
        "definitions": [
            {
                "text": "Définition de lâche.",
                "examples": []
            }
        ],
        "subtext": "lâche",
        "comparative": "plus lâche",
        "superlative": "le plus lâche"
    },
    {
        "word": "large",
        "feminine": "large",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "↔️",
        "form": "adjective",
        "plural": "larges",
        "femininePlural": "larges",
        "definitions": [
            {
                "text": "Définition de large.",
                "examples": []
            }
        ],
        "subtext": "large",
        "comparative": "plus large",
        "superlative": "le plus large",
        "opposite": "étroit",
        "oppositeEmoji": "🤏"
    },
    {
        "word": "étroit",
        "feminine": "étroite",
        "level": "starter",
        "theme": "size_measurements_A1",
        "emoji": "⬇️",
        "form": "adjective",
        "plural": "étroits",
        "femininePlural": "étroites",
        "definitions": [
            {
                "text": "Définition de étroit.",
                "examples": []
            }
        ],
        "subtext": "étroit",
        "comparative": "plus étroit",
        "superlative": "le plus étroit",
        "opposite": "large",
        "oppositeEmoji": "↔️"
    },
    {
        "word": "antipathique",
        "feminine": "antipathique",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "😠",
        "form": "adjective",
        "plural": "antipathiques",
        "femininePlural": "antipathiques",
        "definitions": [
            {
                "text": "Définition de antipathique.",
                "examples": []
            }
        ],
        "subtext": "antipathique",
        "comparative": "plus antipathique",
        "superlative": "le plus antipathique"
    },
    {
        "word": "impatient",
        "feminine": "impatiente",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "⌚",
        "form": "adjective",
        "plural": "impatients",
        "femininePlural": "impatientes",
        "definitions": [
            {
                "text": "Définition de impatient.",
                "examples": []
            }
        ],
        "subtext": "impatient",
        "comparative": "plus impatient",
        "superlative": "le plus impatient",
        "opposite": "patient",
        "oppositeEmoji": "⏳"
    },
    {
        "word": "impoli",
        "feminine": "impolie",
        "level": "starter",
        "theme": "personality_traits_A1",
        "emoji": "😛",
        "form": "adjective",
        "plural": "impolis",
        "femininePlural": "impolies",
        "definitions": [
            {
                "text": "Définition de impoli.",
                "examples": []
            }
        ],
        "subtext": "impoli",
        "comparative": "plus impoli",
        "superlative": "le plus impoli"
    },
    {
        "word": "faux",
        "feminine": "fausse",
        "level": "starter",
        "theme": "material_objects_A1",
        "emoji": "🎭",
        "form": "adjective",
        "plural": "faux",
        "femininePlural": "fausses",
        "definitions": [
            {
                "text": "Définition de faux.",
                "examples": []
            }
        ],
        "subtext": "faux",
        "comparative": "plus faux",
        "superlative": "le plus faux",
        "opposite": "vrai",
        "oppositeEmoji": "✔️"
    },
    {
        "word": "malchanceux",
        "feminine": "malchanceuse",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😿",
        "form": "adjective",
        "plural": "malchanceux",
        "femininePlural": "malchanceuses",
        "definitions": [
            {
                "text": "Définition de malchanceux.",
                "examples": []
            }
        ],
        "subtext": "malchanceux",
        "comparative": "plus malchanceux",
        "superlative": "le plus malchanceux"
    },
    {
        "word": "violet",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟣",
        "form": "adjective",
        "feminine": "violette",
        "plural": "violets",
        "femininePlural": "violettes",
        "definitions": [
            {
                "text": "Une couleur entre le bleu et le rouge.",
                "examples": [
                    "J'ai un t-shirt violet.",
                    "Les fleurs sont violettes."
                ]
            }
        ],
        "transcription": "vjɔ.lɛ"
    },
    {
        "word": "marié",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "💍",
        "form": "adjective",
        "feminine": "mariée",
        "plural": "mariés",
        "femininePlural": "mariées",
        "definitions": [
            {
                "text": "Qui a un mari ou une femme.",
                "examples": [
                    "Es-tu marié ?",
                    "Mon frère est marié depuis deux ans."
                ]
            }
        ],
        "transcription": "ma.ʁje",
        "opposite": "célibataire"
    },
    {
        "word": "célibataire",
        "level": "starter",
        "theme": "marital_status_A1",
        "emoji": "👤",
        "form": "adjective",
        "feminine": "célibataire",
        "plural": "célibataires",
        "femininePlural": "célibataires",
        "definitions": [
            {
                "text": "Qui n'est pas marié.",
                "examples": [
                    "Il est encore célibataire.",
                    "Ma sœur est célibataire."
                ]
            }
        ],
        "transcription": "se.li.ba.tɛʁ",
        "opposite": "marié"
    },
    {
        "word": "rugueux",
        "level": "starter",
        "theme": "tastes_textures_A1",
        "emoji": "🧱",
        "form": "adjective",
        "feminine": "rugueuse",
        "plural": "rugueux",
        "femininePlural": "rugueuses",
        "definitions": [
            {
                "text": "Qui n'est pas lisse ; qui présente des aspérités au toucher.",
                "examples": [
                    "Le mur est rugueux.",
                    "Il a les mains rugueuses à cause du travail."
                ]
            }
        ],
        "transcription": "ʁy.ɡø",
        "opposite": "lisse"
    },
    {
        "word": "superficiel",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "📏",
        "form": "adjective",
        "feminine": "superficielle",
        "plural": "superficiels",
        "femininePlural": "superficielles",
        "definitions": [
            {
                "text": "Qui a peu de profondeur ; ou qui ne va pas au fond des choses.",
                "examples": [
                    "La coupure est superficielle.",
                    "C'est une personne superficielle."
                ]
            }
        ],
        "transcription": "sy.pɛʁ.fi.sjɛl",
        "opposite": "profond"
    },
    {
        "word": "étrange",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❓",
        "form": "adjective",
        "feminine": "étrange",
        "plural": "étranges",
        "femininePlural": "étranges",
        "definitions": [
            {
                "text": "Différent de ce qui est habituel ; insolite.",
                "examples": [
                    "Quel bruit étrange !",
                    "C'était une journée étrange."
                ]
            }
        ],
        "transcription": "e.tʁɑ̃ʒ",
        "opposite": "normal"
    },
    {
        "word": "normal",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "😐",
        "form": "adjective",
        "feminine": "normale",
        "plural": "normaux",
        "femininePlural": "normales",
        "definitions": [
            {
                "text": "Qui est conforme à la norme ; habituel.",
                "examples": [
                    "C'est un jour normal.",
                    "Tout est redevenu normal."
                ]
            }
        ],
        "transcription": "nɔʁ.mal",
        "opposite": "étrange"
    },
    {
        "word": "assoiffé",
        "level": "starter",
        "theme": "health_body_A1",
        "form": "adjective",
        "transcription": "a.swa.fe",
        "feminine": "assoiffée",
        "plural": "assoiffés",
        "subtext": "être assoiffé",
        "definitions": [
            {
                "text": "Qui a besoin de boire.",
                "examples": [
                    "Après le sport, je suis assoiffé."
                ]
            }
        ]
    },
    {
        "word": "timide",
        "level": "starter",
        "theme": "personal_identity_A1",
        "form": "adjective",
        "transcription": "ti.mid",
        "feminine": "timide",
        "plural": "timides",
        "subtext": "un enfant timide",
        "definitions": [
            {
                "text": "Qui manque d'assurance devant les autres.",
                "examples": [
                    "Il est trop timide pour parler."
                ]
            }
        ]
    },
    {
        "word": "amusant",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "emoji": "😂",
        "definitions": [
            {
                "text": "Qui fait rire o divertit.",
                "examples": [
                    "C'est une histoire amusante."
                ]
            }
        ],
        "transcription": "a.my.zɑ̃"
    }
];
    const lang = "fr";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();