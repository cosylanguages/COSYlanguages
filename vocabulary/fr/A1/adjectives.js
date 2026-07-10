// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "grand",
        "feminine": "grande",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "ɡʁɑ̃",
        "id": "fr_starter_adjectives_001",
        "lang": "fr",
        "antonyms": [
            "petit"
        ]
    },
    {
        "word": "court",
        "feminine": "courte",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "kuʁ",
        "id": "fr_starter_adjectives_002",
        "lang": "fr",
        "antonyms": [
            "grand"
        ]
    },
    {
        "level": "starter",
        "theme": "describing",
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
        "subtext": "",
        "synonyms": [
            "jeune personne",
            "jeune professionnel",
            "jeune de cœur"
        ],
        "word": "jeune",
        "transcription": "ʒœn",
        "id": "fr_starter_adjectives_003",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "vieux"
        ]
    },
    {
        "word": "vieux",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "superlative": "le plus vieux",
        "transcription": "vjø",
        "id": "fr_starter_adjectives_004",
        "lang": "fr",
        "antonyms": [
            "nouveau"
        ]
    },
    {
        "word": "ensoleillé",
        "level": "starter",
        "theme": "nature",
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
        "transcription": "ɑ̃.sɔ.lɛ.je",
        "id": "fr_starter_adjectives_005",
        "lang": "fr",
        "antonyms": [
            "pluvieux"
        ]
    },
    {
        "word": "pluvieux",
        "level": "starter",
        "theme": "nature",
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
        "transcription": "ply.vjø",
        "id": "fr_starter_adjectives_006",
        "lang": "fr",
        "antonyms": [
            "ensoleillé"
        ]
    },
    {
        "word": "chaud",
        "level": "starter",
        "theme": "nature",
        "emoji": "🔥",
        "form": "adjective",
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
        "superlative": "le plus chaud",
        "transcription": "ʃo",
        "id": "fr_starter_adjectives_007",
        "lang": "fr",
        "antonyms": [
            "froid"
        ]
    },
    {
        "word": "froid",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
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
        "superlative": "le plus froid",
        "transcription": "fʁwa",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "frigidus"
        },
        "id": "fr_starter_adjectives_008",
        "lang": "fr",
        "antonyms": [
            "chaud"
        ]
    },
    {
        "word": "ordinaire",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "femininePlural": "ordinaires",
        "transcription": "ɔʁ.di.nɛʁ",
        "id": "fr_starter_adjectives_009",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "spécial"
        ]
    },
    {
        "word": "bon marché",
        "level": "starter",
        "theme": "shopping",
        "form": "adjective",
        "emoji": "🏷️",
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
        "superlative": "le plus bon marché",
        "transcription": "bɔ̃ maʁ.ʃe",
        "id": "fr_starter_adjectives_010",
        "lang": "fr",
        "antonyms": [
            "cher"
        ]
    },
    {
        "word": "cher",
        "level": "starter",
        "theme": "shopping",
        "form": "adjective",
        "emoji": "💎",
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
        "superlative": "le plus cher",
        "transcription": "ʃɛʁ",
        "id": "fr_starter_adjectives_011",
        "lang": "fr",
        "antonyms": [
            "bon marché"
        ]
    },
    {
        "word": "bon",
        "level": "starter",
        "theme": "describing",
        "emoji": "👍",
        "form": "adjective",
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
        "superlative": "le meilleur",
        "transcription": "bɔ̃",
        "id": "fr_starter_adjectives_012",
        "lang": "fr",
        "antonyms": [
            "mauvais"
        ]
    },
    {
        "word": "mauvais",
        "level": "starter",
        "theme": "describing",
        "emoji": "👎",
        "form": "adjective",
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
        "superlative": "le pire",
        "transcription": "mɔ.vɛ",
        "id": "fr_starter_adjectives_013",
        "lang": "fr",
        "antonyms": [
            "bon"
        ]
    },
    {
        "word": "grand",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "superlative": "le plus grand",
        "transcription": "ɡʁɑ̃",
        "id": "fr_starter_adjectives_014",
        "lang": "fr",
        "antonyms": [
            "petit"
        ]
    },
    {
        "word": "petit",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
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
        "superlative": "le plus petit",
        "id": "fr_starter_adjectives_015",
        "lang": "fr",
        "transcription": "",
        "antonyms": [
            "grand"
        ]
    },
    {
        "word": "facile",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
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
        "superlative": "le plus facile",
        "transcription": "fa.sil",
        "id": "fr_starter_adjectives_016",
        "lang": "fr",
        "antonyms": [
            "difficile"
        ]
    },
    {
        "word": "difficile",
        "level": "starter",
        "theme": "describing",
        "emoji": "❌",
        "form": "adjective",
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
        "superlative": "le plus difficile",
        "transcription": "di.fi.sil",
        "id": "fr_starter_adjectives_017",
        "lang": "fr",
        "antonyms": [
            "facile"
        ]
    },
    {
        "word": "heureux",
        "level": "starter",
        "theme": "emotions",
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
        "transcription": "œ.ʁø",
        "id": "fr_starter_adjectives_018",
        "lang": "fr",
        "antonyms": [
            "triste"
        ]
    },
    {
        "word": "fatigué",
        "level": "starter",
        "theme": "emotions",
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
        "transcription": "fa.ti.ɡe",
        "id": "fr_starter_adjectives_019",
        "lang": "fr",
        "antonyms": [
            "énergique"
        ]
    },
    {
        "word": "à plein temps",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "adjective",
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
        "femininePlural": "à plein temps",
        "transcription": "a plɛ̃ tɑ̃",
        "id": "fr_starter_adjectives_020",
        "lang": "fr",
        "antonyms": [
            "à temps partiel"
        ]
    },
    {
        "word": "à temps partiel",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "form": "adjective",
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
        "femininePlural": "à temps partiel",
        "transcription": "a tɑ̃ paʁ.sjel",
        "id": "fr_starter_adjectives_021",
        "lang": "fr",
        "antonyms": [
            "à plein temps"
        ]
    },
    {
        "word": "propre",
        "level": "starter",
        "theme": "furniture",
        "emoji": "✨",
        "form": "adjective",
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
        "superlative": "le plus propre",
        "transcription": "pʁɔpʁ",
        "id": "fr_starter_adjectives_022",
        "lang": "fr",
        "antonyms": [
            "sale"
        ]
    },
    {
        "word": "sain",
        "level": "starter",
        "theme": "food_drink",
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
        "transcription": "sɛ̃",
        "id": "fr_starter_adjectives_023",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "malsain"
        ]
    },
    {
        "word": "malade",
        "level": "starter",
        "theme": "health_medicine",
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
        "transcription": "ma.lad",
        "id": "fr_starter_adjectives_024",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "well"
        ]
    },
    {
        "word": "en ligne",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌐",
        "form": "adjective",
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
        "femininePlural": "en ligne",
        "transcription": "ɑ̃ liɲ",
        "id": "fr_starter_adjectives_025",
        "lang": "fr",
        "antonyms": [
            "hors ligne"
        ]
    },
    {
        "word": "seul",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "form": "adjective",
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
        "femininePlural": "seules",
        "transcription": "sœl",
        "id": "fr_starter_adjectives_026",
        "lang": "fr",
        "antonyms": [
            "together"
        ]
    },
    {
        "word": "détendu",
        "level": "starter",
        "theme": "emotions",
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
        "transcription": "de.tɑ̃.dy",
        "id": "fr_starter_adjectives_027",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "stressé"
        ]
    },
    {
        "word": "inquiet",
        "level": "starter",
        "theme": "emotions",
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
        "transcription": "ɛ̃.kjɛ",
        "id": "fr_starter_adjectives_028",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "calm"
        ]
    },
    {
        "word": "occupé",
        "level": "starter",
        "theme": "work",
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
        "transcription": "ɔ.ky.pe",
        "id": "fr_starter_adjectives_029",
        "lang": "fr",
        "antonyms": [
            "libre"
        ]
    },
    {
        "word": "utile",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "utile",
        "plural": "utiles",
        "femininePlural": "utiles",
        "definitions": [
            {
                "text": "Utile ; ayant un but pratique.",
                "examples": [
                    "Une voiture est très utile à la campagne."
                ]
            }
        ],
        "subtext": "utile",
        "synonyms": [
            "pratique"
        ],
        "comparative": "plus utile",
        "superlative": "le plus utile",
        "transcription": "y.til",
        "id": "fr_starter_adjectives_030",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "inutile"
        ]
    },
    {
        "word": "important",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "ɛ̃.pɔʁ.tɑ̃",
        "id": "fr_starter_adjectives_031",
        "lang": "fr",
        "antonyms": [
            "peu important"
        ]
    },
    {
        "word": "rouge",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus rouge",
        "transcription": "ʁuʒ",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "rubeus",
            "origin_meaning": "red"
        },
        "id": "fr_starter_adjectives_032",
        "lang": "fr"
    },
    {
        "word": "bleu",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus bleu",
        "transcription": "blø",
        "etymology": {
            "origin_lang": "Frankish",
            "origin_word": "blāu"
        },
        "id": "fr_starter_adjectives_033",
        "lang": "fr"
    },
    {
        "word": "vert",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus vert",
        "transcription": "vɛʁ",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "viridis",
            "origin_meaning": "green"
        },
        "id": "fr_starter_adjectives_034",
        "lang": "fr"
    },
    {
        "word": "blanc",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus blanc",
        "transcription": "blɑ̃",
        "etymology": {
            "origin_lang": "Frankish",
            "origin_word": "blank"
        },
        "id": "fr_starter_adjectives_035",
        "lang": "fr"
    },
    {
        "word": "noir",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus noir",
        "transcription": "nwaʁ",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "niger",
            "origin_meaning": "black"
        },
        "id": "fr_starter_adjectives_036",
        "lang": "fr"
    },
    {
        "word": "jaune",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus jaune",
        "transcription": "ʒon",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "galbinus",
            "origin_meaning": "yellow-green"
        },
        "id": "fr_starter_adjectives_037",
        "lang": "fr"
    },
    {
        "word": "libre",
        "level": "starter",
        "theme": "shopping",
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
        "transcription": "libʁ",
        "id": "fr_starter_adjectives_038",
        "lang": "fr",
        "antonyms": [
            "occupé"
        ]
    },
    {
        "word": "ouvert",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "form": "adjective",
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
        "superlative": "le plus ouvert",
        "transcription": "u.vɛʁ",
        "id": "fr_starter_adjectives_039",
        "lang": "fr",
        "antonyms": [
            "fermé"
        ]
    },
    {
        "word": "fermé",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "form": "adjective",
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
        "superlative": "le plus fermé",
        "transcription": "fɛʁ.me",
        "id": "fr_starter_adjectives_040",
        "lang": "fr",
        "antonyms": [
            "ouvert"
        ]
    },
    {
        "word": "grand",
        "feminine": "grande",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus grand",
        "transcription": "ɡʁɑ̃",
        "id": "fr_starter_adjectives_041",
        "lang": "fr"
    },
    {
        "word": "petit",
        "feminine": "petite",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus petit",
        "id": "fr_starter_adjectives_042",
        "lang": "fr",
        "transcription": ""
    },
    {
        "word": "long",
        "feminine": "longue",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus long",
        "transcription": "lɔ̃",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "longus"
        },
        "id": "fr_starter_adjectives_043",
        "lang": "fr"
    },
    {
        "word": "haut",
        "feminine": "haute",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus haut",
        "transcription": "o",
        "id": "fr_starter_adjectives_044",
        "lang": "fr"
    },
    {
        "word": "bas",
        "feminine": "basse",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus bas",
        "transcription": "ba",
        "id": "fr_starter_adjectives_045",
        "lang": "fr"
    },
    {
        "word": "plein",
        "feminine": "pleine",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "plɛ̃",
        "id": "fr_starter_adjectives_046",
        "lang": "fr",
        "antonyms": [
            "vide"
        ]
    },
    {
        "word": "vide",
        "feminine": "vide",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "vid",
        "id": "fr_starter_adjectives_047",
        "lang": "fr",
        "antonyms": [
            "plein"
        ]
    },
    {
        "word": "tiède",
        "feminine": "tiède",
        "level": "starter",
        "theme": "nature",
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
        "superlative": "le plus tiède",
        "transcription": "tjɛd",
        "id": "fr_starter_adjectives_048",
        "lang": "fr"
    },
    {
        "word": "frais",
        "feminine": "fraîche",
        "level": "starter",
        "theme": "nature",
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
        "superlative": "le plus frais",
        "transcription": "fʁɛ",
        "id": "fr_starter_adjectives_049",
        "lang": "fr"
    },
    {
        "word": "mouillé",
        "feminine": "mouillée",
        "level": "starter",
        "theme": "nature",
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
        "superlative": "le plus mouillé",
        "transcription": "mu.je",
        "id": "fr_starter_adjectives_050",
        "lang": "fr"
    },
    {
        "word": "sec",
        "feminine": "sèche",
        "level": "starter",
        "theme": "nature",
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
        "superlative": "le plus sec",
        "transcription": "sɛk",
        "id": "fr_starter_adjectives_051",
        "lang": "fr"
    },
    {
        "word": "sale",
        "feminine": "sale",
        "level": "starter",
        "theme": "furniture",
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
        "transcription": "sal",
        "id": "fr_starter_adjectives_052",
        "lang": "fr",
        "antonyms": [
            "propre"
        ]
    },
    {
        "word": "dur",
        "feminine": "dure",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "dyʁ",
        "id": "fr_starter_adjectives_053",
        "lang": "fr",
        "antonyms": [
            "mou"
        ]
    },
    {
        "word": "doux",
        "feminine": "douce",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "du",
        "id": "fr_starter_adjectives_054",
        "lang": "fr"
    },
    {
        "word": "lourd",
        "feminine": "lourde",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "luʁ",
        "id": "fr_starter_adjectives_055",
        "lang": "fr",
        "antonyms": [
            "clair"
        ]
    },
    {
        "word": "léger",
        "feminine": "légère",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus léger",
        "transcription": "le.ʒe",
        "id": "fr_starter_adjectives_056",
        "lang": "fr"
    },
    {
        "word": "brun",
        "feminine": "brune",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus brun",
        "transcription": "bʁœ̃",
        "id": "fr_starter_adjectives_057",
        "lang": "fr"
    },
    {
        "word": "gris",
        "feminine": "grise",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus gris",
        "transcription": "ɡʁi",
        "id": "fr_starter_adjectives_058",
        "lang": "fr"
    },
    {
        "word": "rose",
        "feminine": "rose",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus rose",
        "transcription": "ʁoz",
        "id": "fr_starter_adjectives_059",
        "lang": "fr"
    },
    {
        "word": "orange",
        "feminine": "orange",
        "level": "starter",
        "theme": "colours",
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
        "superlative": "le plus orange",
        "transcription": "ɔ.ʁɑ̃ʒ",
        "id": "fr_starter_adjectives_060",
        "lang": "fr"
    },
    {
        "word": "génial",
        "feminine": "géniale",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus génial",
        "transcription": "ʒe.njal",
        "id": "fr_starter_adjectives_061",
        "lang": "fr"
    },
    {
        "word": "sympa",
        "feminine": "sympa",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus sympa",
        "transcription": "sɛ̃.pa",
        "id": "fr_starter_adjectives_062",
        "lang": "fr"
    },
    {
        "word": "merveilleux",
        "feminine": "merveilleuse",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "mɛʁ.vɛ.jø",
        "id": "fr_starter_adjectives_063",
        "lang": "fr"
    },
    {
        "word": "terrible",
        "feminine": "terrible",
        "level": "starter",
        "theme": "describing",
        "emoji": "😫",
        "form": "adjective",
        "plural": "terribles",
        "femininePlural": "terribles",
        "definitions": [
            {
                "text": "Extrêmement mauvais.",
                "examples": [
                    "La circulation ce matin était terrible."
                ]
            }
        ],
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "comparative": "plus terrible",
        "superlative": "le plus terrible",
        "transcription": "tɛ.ʁibl",
        "id": "fr_starter_adjectives_064",
        "lang": "fr"
    },
    {
        "word": "affreux",
        "feminine": "affreuse",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus affreux",
        "transcription": "a.fʁø",
        "id": "fr_starter_adjectives_065",
        "lang": "fr"
    },
    {
        "word": "incroyable",
        "feminine": "incroyable",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "ɛ̃.kʁwa.jabl",
        "id": "fr_starter_adjectives_066",
        "lang": "fr"
    },
    {
        "word": "fantastique",
        "feminine": "fantastique",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "fɑ̃.tas.tik",
        "id": "fr_starter_adjectives_067",
        "lang": "fr"
    },
    {
        "word": "triste",
        "feminine": "triste",
        "level": "starter",
        "theme": "emotions",
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
        "transcription": "tʁist",
        "id": "fr_starter_adjectives_068",
        "lang": "fr",
        "antonyms": [
            "heureux"
        ]
    },
    {
        "word": "affamé",
        "feminine": "affamée",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus affamé",
        "transcription": "a.fa.me",
        "id": "fr_starter_adjectives_069",
        "lang": "fr"
    },
    {
        "word": "fâché",
        "feminine": "fâchée",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus fâché",
        "transcription": "fa.ʃe",
        "id": "fr_starter_adjectives_070",
        "lang": "fr"
    },
    {
        "word": "ennuyé",
        "feminine": "ennuyée",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus ennuyé",
        "transcription": "ɑ̃.nɥi.je",
        "id": "fr_starter_adjectives_071",
        "lang": "fr"
    },
    {
        "word": "excité",
        "feminine": "excitée",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus excité",
        "transcription": "ɛk.si.te",
        "id": "fr_starter_adjectives_072",
        "lang": "fr"
    },
    {
        "word": "effrayé",
        "feminine": "effrayée",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus effrayé",
        "transcription": "e.fʁɛ.je",
        "id": "fr_starter_adjectives_073",
        "lang": "fr"
    },
    {
        "word": "désolé",
        "feminine": "désolée",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus désolé",
        "transcription": "de.zɔ.le",
        "id": "fr_starter_adjectives_074",
        "lang": "fr"
    },
    {
        "word": "correct",
        "feminine": "correcte",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "kɔ.ʁɛkt",
        "id": "fr_starter_adjectives_075",
        "lang": "fr"
    },
    {
        "word": "mauvais",
        "feminine": "mauvaise",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le pire",
        "transcription": "mɔ.vɛ",
        "id": "fr_starter_adjectives_076",
        "lang": "fr"
    },
    {
        "word": "nouveau",
        "feminine": "nouvelle",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "nu.vo",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "novellus"
        },
        "id": "fr_starter_adjectives_077",
        "lang": "fr",
        "antonyms": [
            "vieux"
        ]
    },
    {
        "word": "différent",
        "feminine": "différente",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "di.fe.ʁɑ̃",
        "id": "fr_starter_adjectives_078",
        "lang": "fr"
    },
    {
        "word": "même",
        "feminine": "même",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "mɛm",
        "id": "fr_starter_adjectives_079",
        "lang": "fr"
    },
    {
        "word": "rapide",
        "feminine": "rapide",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "ʁa.pid",
        "id": "fr_starter_adjectives_080",
        "lang": "fr",
        "antonyms": [
            "lent"
        ]
    },
    {
        "word": "lent",
        "feminine": "lente",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "lɑ̃",
        "id": "fr_starter_adjectives_081",
        "lang": "fr",
        "antonyms": [
            "rapide"
        ]
    },
    {
        "word": "calme",
        "feminine": "calme",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "kalm",
        "id": "fr_starter_adjectives_082",
        "lang": "fr",
        "antonyms": [
            "bruyant"
        ]
    },
    {
        "word": "bruyant",
        "feminine": "bruyante",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "bʁɥi.jɑ̃",
        "id": "fr_starter_adjectives_083",
        "lang": "fr",
        "antonyms": [
            "calme"
        ]
    },
    {
        "word": "sûr",
        "feminine": "sûre",
        "level": "starter",
        "theme": "places",
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
        "transcription": "syʁ",
        "id": "fr_starter_adjectives_084",
        "lang": "fr"
    },
    {
        "word": "dangereux",
        "feminine": "dangereuse",
        "level": "starter",
        "theme": "places",
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
        "transcription": "dɑ̃.ʒə.ʁø",
        "id": "fr_starter_adjectives_085",
        "lang": "fr"
    },
    {
        "word": "malheureux",
        "level": "starter",
        "theme": "emotions",
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
        "transcription": "ma.lø.ʁø",
        "id": "fr_starter_adjectives_086",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "nerveux",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus nerveux",
        "transcription": "nɛʁ.vø",
        "id": "fr_starter_adjectives_087",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "stressé",
        "level": "starter",
        "theme": "emotions",
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
        "transcription": "stʁⲉ.se",
        "id": "fr_starter_adjectives_088",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "détendu"
        ]
    },
    {
        "word": "confiant",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus confiant",
        "transcription": "kɔ̃.fjɑ̃",
        "id": "fr_starter_adjectives_089",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "fier",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus fier",
        "transcription": "fjɛʁ",
        "id": "fr_starter_adjectives_090",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "effrayé",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus effrayé",
        "transcription": "e.fʁɛ.je",
        "id": "fr_starter_adjectives_091",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "surpris",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus surpris",
        "transcription": "syʁ.pʁi",
        "id": "fr_starter_adjectives_092",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "déçu",
        "level": "starter",
        "theme": "emotions",
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
        "superlative": "le plus déçu",
        "transcription": "de.sy",
        "id": "fr_starter_adjectives_093",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "beau",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "bo",
        "id": "fr_starter_adjectives_094",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "laid"
        ]
    },
    {
        "word": "joli",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus joli",
        "transcription": "ʒɔ.li",
        "id": "fr_starter_adjectives_095",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "fort",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "fɔʁ",
        "id": "fr_starter_adjectives_096",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "faible"
        ]
    },
    {
        "word": "faible",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "fɛbl",
        "id": "fr_starter_adjectives_097",
        "lang": "fr",
        "emoji": "✨",
        "antonyms": [
            "fort"
        ]
    },
    {
        "word": "en forme",
        "level": "starter",
        "theme": "health_medicine",
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
        "superlative": "le plus en forme",
        "transcription": "ɑ̃ fɔʁm",
        "id": "fr_starter_adjectives_098",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "excellent",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus excellent",
        "transcription": "ɛk.sɛ.lɑ̃",
        "id": "fr_starter_adjectives_099",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "parfait",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "parfaite",
        "plural": "parfaits",
        "femininePlural": "parfaites",
        "definitions": [
            {
                "text": "Sans aucun défaut ; tout à fait correct.",
                "examples": [
                    "Le moment du lancement était parfait."
                ]
            }
        ],
        "subtext": "moment parfait / absolument parfait",
        "synonyms": [
            "une occasion parfaite"
        ],
        "comparative": "plus parfait",
        "superlative": "le plus parfait",
        "transcription": "paʁ.fɛ",
        "id": "fr_starter_adjectives_100",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "inutile",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus inutile",
        "transcription": "i.ny.til",
        "id": "fr_starter_adjectives_101",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "correct",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus correct",
        "transcription": "kɔ.ʁɛkt",
        "id": "fr_starter_adjectives_102",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "intéressant",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "intéressante",
        "plural": "intéressants",
        "femininePlural": "intéressantes",
        "definitions": [
            {
                "text": "Attirant l'attention ; valant la peine d'être connu.",
                "examples": [
                    "La nouvelle proposition est très intéressante."
                ]
            }
        ],
        "subtext": "trouver intéressant / très intéressant",
        "synonyms": [
            "une idée intéressante"
        ],
        "comparative": "plus intéressant",
        "superlative": "le plus intéressant",
        "transcription": "ɛ̃.te.ʁɛ.sɑ̃",
        "id": "fr_starter_adjectives_103",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "ennuyeux",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "feminine": "ennuyeuse",
        "plural": "ennuyeux",
        "femininePlural": "ennuyeuses",
        "definitions": [
            {
                "text": "Pas intéressant ; ennuyeux.",
                "examples": [
                    "La session de formation était très ennuyeuse."
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
        "id": "fr_starter_adjectives_104",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "nécessaire",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus nécessaire",
        "transcription": "ne.se.sɛʁ",
        "id": "fr_starter_adjectives_105",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "possible",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "pɔ.sibl",
        "id": "fr_starter_adjectives_106",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "impossible",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "ɛ̃.pɔ.sibl",
        "id": "fr_starter_adjectives_107",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "spécial",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus spécial",
        "transcription": "spe.sjal",
        "id": "fr_starter_adjectives_108",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "populaire",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus populaire",
        "transcription": "pɔ.py.lɛʁ",
        "id": "fr_starter_adjectives_109",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "similaire",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus similaire",
        "transcription": "si.mi.lɛʁ",
        "id": "fr_starter_adjectives_110",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "amical",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus amical",
        "transcription": "a.mi.kal",
        "id": "fr_starter_adjectives_111",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "gentil",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus gentil",
        "transcription": "ʒɑ̃.ti",
        "id": "fr_starter_adjectives_112",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "drôle",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus drôle",
        "transcription": "dʁol",
        "id": "fr_starter_adjectives_113",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "intelligent",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus intelligent",
        "transcription": "ɛ̃.te.li.ʒɑ̃",
        "id": "fr_starter_adjectives_114",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "poli",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "pɔ.li",
        "id": "fr_starter_adjectives_115",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "impoli",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "ɛ̃.pɔ.li",
        "id": "fr_starter_adjectives_116",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "paresseux",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "pa.ʁɛ.sø",
        "id": "fr_starter_adjectives_117",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "honnête",
        "level": "starter",
        "theme": "describing",
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
        "transcription": "ɔ.nɛt",
        "id": "fr_starter_adjectives_118",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "bruyant",
        "level": "starter",
        "theme": "describing",
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
        "superlative": "le plus bruyant",
        "transcription": "bʁɥi.jɑ̃",
        "id": "fr_starter_adjectives_119",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "honnête",
        "feminine": "honnête",
        "level": "starter",
        "theme": "describing",
        "emoji": "😇",
        "form": "adjective",
        "plural": "honnêtes",
        "femininePlural": "honnêtes",
        "definitions": [
            {
                "text": "Qui agit avec droiture et loyauté.",
                "examples": []
            }
        ],
        "subtext": "honnête",
        "comparative": "plus honnête",
        "superlative": "le plus honnête",
        "transcription": "ɔ.nɛt",
        "id": "fr_starter_adjectives_120",
        "lang": "fr"
    },
    {
        "word": "bruyant",
        "feminine": "bruyante",
        "level": "starter",
        "theme": "describing",
        "emoji": "🔊",
        "form": "adjective",
        "plural": "bruyants",
        "femininePlural": "bruyantes",
        "definitions": [
            {
                "text": "Qui fait beaucoup de bruit.",
                "examples": []
            }
        ],
        "subtext": "bruyant",
        "comparative": "plus bruyant",
        "superlative": "le plus bruyant",
        "transcription": "bʁɥi.jɑ̃",
        "id": "fr_starter_adjectives_121",
        "lang": "fr"
    },
    {
        "word": "rond",
        "feminine": "ronde",
        "level": "starter",
        "theme": "describing",
        "emoji": "⭕",
        "form": "adjective",
        "plural": "ronds",
        "femininePlural": "rondes",
        "definitions": [
            {
                "text": "Qui a la forme d'un cercle ou d'une sphère.",
                "examples": []
            }
        ],
        "subtext": "rond",
        "comparative": "plus rond",
        "superlative": "le plus rond",
        "transcription": "ʁɔ̃",
        "id": "fr_starter_adjectives_122",
        "lang": "fr"
    },
    {
        "word": "carré",
        "feminine": "carrée",
        "level": "starter",
        "theme": "describing",
        "emoji": "⬛",
        "form": "adjective",
        "plural": "carrés",
        "femininePlural": "carrées",
        "definitions": [
            {
                "text": "Qui a quatre côtés égaux et quatre angles droits.",
                "examples": []
            }
        ],
        "subtext": "carré",
        "comparative": "plus carré",
        "superlative": "le plus carré",
        "transcription": "ka.ʁe",
        "id": "fr_starter_adjectives_123",
        "lang": "fr"
    },
    {
        "word": "serviable",
        "feminine": "serviable",
        "level": "starter",
        "theme": "describing",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "serviables",
        "femininePlural": "serviables",
        "definitions": [
            {
                "text": "Qui aime rendre service aux autres.",
                "examples": []
            }
        ],
        "subtext": "serviable",
        "comparative": "plus serviable",
        "superlative": "le plus serviable",
        "transcription": "sɛʁ.vjabl",
        "id": "fr_starter_adjectives_124",
        "lang": "fr"
    },
    {
        "word": "patient",
        "feminine": "patiente",
        "level": "starter",
        "theme": "describing",
        "emoji": "🧘",
        "form": "adjective",
        "plural": "patients",
        "femininePlural": "patientes",
        "definitions": [
            {
                "text": "Qui sait attendre avec calme.",
                "examples": []
            }
        ],
        "subtext": "patient",
        "comparative": "plus patient",
        "superlative": "le plus patient",
        "transcription": "pa.sjɑ̃",
        "id": "fr_starter_adjectives_125",
        "lang": "fr"
    },
    {
        "word": "actif",
        "feminine": "active",
        "level": "starter",
        "theme": "describing",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "actifs",
        "femininePlural": "actives",
        "definitions": [
            {
                "text": "Qui agit, qui manifeste de l'énergie.",
                "examples": []
            }
        ],
        "subtext": "actif",
        "comparative": "plus actif",
        "superlative": "le plus actif",
        "transcription": "ak.tif",
        "id": "fr_starter_adjectives_126",
        "lang": "fr"
    },
    {
        "word": "prudent",
        "feminine": "prudente",
        "level": "starter",
        "theme": "describing",
        "emoji": "⚠️",
        "form": "adjective",
        "plural": "prudents",
        "femininePlural": "prudentes",
        "definitions": [
            {
                "text": "Qui fait attention pour éviter les dangers.",
                "examples": []
            }
        ],
        "subtext": "prudent",
        "comparative": "plus prudent",
        "superlative": "le plus prudent",
        "transcription": "pʁy.dɑ̃",
        "id": "fr_starter_adjectives_127",
        "lang": "fr"
    },
    {
        "word": "créatif",
        "feminine": "créative",
        "level": "starter",
        "theme": "describing",
        "emoji": "🎨",
        "form": "adjective",
        "plural": "créatifs",
        "femininePlural": "créatives",
        "definitions": [
            {
                "text": "Qui a de l'imagination et invente des choses nouvelles.",
                "examples": []
            }
        ],
        "subtext": "créatif",
        "comparative": "plus créatif",
        "superlative": "le plus créatif",
        "transcription": "kʁe.a.tif",
        "id": "fr_starter_adjectives_128",
        "lang": "fr"
    },
    {
        "word": "nuageux",
        "feminine": "nuageuse",
        "level": "starter",
        "theme": "nature",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "nuageux",
        "femininePlural": "nuageuses",
        "definitions": [
            {
                "text": "Se dit du ciel quand il est couvert de nuages.",
                "examples": []
            }
        ],
        "subtext": "nuageux",
        "comparative": "plus nuageux",
        "superlative": "le plus nuageux",
        "transcription": "nɥa.ʒø",
        "id": "fr_starter_adjectives_129",
        "lang": "fr"
    },
    {
        "word": "venteux",
        "feminine": "venteuse",
        "level": "starter",
        "theme": "nature",
        "emoji": "💨",
        "form": "adjective",
        "plural": "venteux",
        "femininePlural": "venteuses",
        "definitions": [
            {
                "text": "Caractérisé par la présence de vent.",
                "examples": []
            }
        ],
        "subtext": "venteux",
        "comparative": "plus venteux",
        "superlative": "le plus venteux",
        "transcription": "vɑ̃.tø",
        "id": "fr_starter_adjectives_130",
        "lang": "fr"
    },
    {
        "word": "neigeux",
        "feminine": "neigeuse",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
        "plural": "neigeux",
        "femininePlural": "neigeuses",
        "definitions": [
            {
                "text": "Qui est couvert de neige ou accompagné de chutes de neige.",
                "examples": []
            }
        ],
        "subtext": "neigeux",
        "comparative": "plus neigeux",
        "superlative": "le plus neigeux",
        "transcription": "nɛ.ʒø",
        "id": "fr_starter_adjectives_131",
        "lang": "fr"
    },
    {
        "word": "brumeux",
        "feminine": "brumeuse",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌫️",
        "form": "adjective",
        "plural": "brumeux",
        "femininePlural": "brumeuses",
        "definitions": [
            {
                "text": "Où il y a de la brume, peu clair.",
                "examples": []
            }
        ],
        "subtext": "brumeux",
        "comparative": "plus brumeux",
        "superlative": "le plus brumeux",
        "transcription": "bʁy.mø",
        "id": "fr_starter_adjectives_132",
        "lang": "fr"
    },
    {
        "word": "orageux",
        "feminine": "orageuse",
        "level": "starter",
        "theme": "nature",
        "emoji": "⛈️",
        "form": "adjective",
        "plural": "orageux",
        "femininePlural": "orageuses",
        "definitions": [
            {
                "text": "Relatif à l'orage, qui annonce l'orage.",
                "examples": []
            }
        ],
        "subtext": "orageux",
        "comparative": "plus orageux",
        "superlative": "le plus orageux",
        "transcription": "ɔ.ʁa.ʒø",
        "id": "fr_starter_adjectives_133",
        "lang": "fr"
    },
    {
        "word": "blond",
        "feminine": "blonde",
        "level": "starter",
        "theme": "people",
        "emoji": "👱",
        "form": "adjective",
        "plural": "blonds",
        "femininePlural": "blondes",
        "definitions": [
            {
                "text": "Qui est d'une couleur jaune pâle, en parlant des cheveux.",
                "examples": []
            }
        ],
        "subtext": "blond",
        "comparative": "plus blond",
        "superlative": "le plus blond",
        "transcription": "blɔ̃",
        "id": "fr_starter_adjectives_134",
        "lang": "fr"
    },
    {
        "word": "intelligent",
        "feminine": "intelligente",
        "level": "starter",
        "theme": "describing",
        "emoji": "🧠",
        "form": "adjective",
        "plural": "intelligents",
        "femininePlural": "intelligentes",
        "definitions": [
            {
                "text": "Qui a des facultés de compréhension et d'adaptation.",
                "examples": []
            }
        ],
        "subtext": "intelligent",
        "comparative": "plus intelligent",
        "superlative": "le plus intelligent",
        "transcription": "ɛ̃.te.li.ʒɑ̃",
        "id": "fr_starter_adjectives_135",
        "lang": "fr"
    },
    {
        "word": "sérieux",
        "feminine": "sérieuse",
        "level": "starter",
        "theme": "describing",
        "emoji": "🧐",
        "form": "adjective",
        "plural": "sérieux",
        "femininePlural": "sérieuses",
        "definitions": [
            {
                "text": "Qui agit avec réflexion et application.",
                "examples": []
            }
        ],
        "subtext": "sérieux",
        "comparative": "plus sérieux",
        "superlative": "le plus sérieux",
        "transcription": "se.ʁjø",
        "id": "fr_starter_adjectives_136",
        "lang": "fr"
    },
    {
        "word": "laid",
        "feminine": "laide",
        "level": "starter",
        "theme": "people",
        "emoji": "👹",
        "form": "adjective",
        "plural": "laids",
        "femininePlural": "laides",
        "definitions": [
            {
                "text": "Qui est désagréable à regarder, pas beau.",
                "examples": []
            }
        ],
        "subtext": "laid",
        "comparative": "plus laid",
        "superlative": "le plus laid",
        "transcription": "lɛ",
        "id": "fr_starter_adjectives_137",
        "lang": "fr",
        "antonyms": [
            "beau"
        ]
    },
    {
        "word": "proche",
        "feminine": "proche",
        "level": "starter",
        "theme": "distance",
        "emoji": "📍",
        "form": "adjective",
        "plural": "proches",
        "femininePlural": "proches",
        "definitions": [
            {
                "text": "Qui est à une faible distance.",
                "examples": []
            }
        ],
        "subtext": "proche",
        "comparative": "plus proche",
        "superlative": "le plus proche",
        "transcription": "pʁɔʃ",
        "id": "fr_starter_adjectives_138",
        "lang": "fr",
        "antonyms": [
            "loin"
        ]
    },
    {
        "word": "lointain",
        "feminine": "lointaine",
        "level": "starter",
        "theme": "distance",
        "emoji": "🔭",
        "form": "adjective",
        "plural": "lointains",
        "femininePlural": "lointaines",
        "definitions": [
            {
                "text": "Qui est situé loin dans l'espace ou le temps.",
                "examples": []
            }
        ],
        "subtext": "lointain",
        "comparative": "plus lointain",
        "superlative": "le plus lointain",
        "transcription": "lwɛ̃.tɛ̃",
        "id": "fr_starter_adjectives_139",
        "lang": "fr"
    },
    {
        "word": "riche",
        "feminine": "riche",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "form": "adjective",
        "plural": "riches",
        "femininePlural": "riches",
        "definitions": [
            {
                "text": "Qui a beaucoup d'argent ou de biens.",
                "examples": []
            }
        ],
        "subtext": "riche",
        "comparative": "plus riche",
        "superlative": "le plus riche",
        "transcription": "ʁiʃ",
        "id": "fr_starter_adjectives_140",
        "lang": "fr",
        "antonyms": [
            "pauvre"
        ]
    },
    {
        "word": "pauvre",
        "feminine": "pauvre",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏚️",
        "form": "adjective",
        "plural": "pauvres",
        "femininePlural": "pauvres",
        "definitions": [
            {
                "text": "Qui manque d'argent ou de ressources.",
                "examples": []
            }
        ],
        "subtext": "pauvre",
        "comparative": "plus pauvre",
        "superlative": "le plus pauvre",
        "transcription": "povʁ",
        "id": "fr_starter_adjectives_141",
        "lang": "fr",
        "antonyms": [
            "riche"
        ]
    },
    {
        "word": "matinal",
        "feminine": "matinale",
        "level": "starter",
        "theme": "time",
        "emoji": "🌅",
        "form": "adjective",
        "plural": "matinaux",
        "femininePlural": "matinales",
        "definitions": [
            {
                "text": "Qui a l'habitude de se lever tôt le matin.",
                "examples": []
            }
        ],
        "subtext": "matinal",
        "comparative": "plus matinal",
        "superlative": "le plus matinal",
        "transcription": "ma.ti.nal",
        "id": "fr_starter_adjectives_142",
        "lang": "fr"
    },
    {
        "word": "tardif",
        "feminine": "tardive",
        "level": "starter",
        "theme": "time",
        "emoji": "🌙",
        "form": "adjective",
        "plural": "tardifs",
        "femininePlural": "tardives",
        "definitions": [
            {
                "text": "Qui arrive ou se produit après le temps habituel.",
                "examples": []
            }
        ],
        "subtext": "tardif",
        "comparative": "plus tardif",
        "superlative": "le plus tardif",
        "transcription": "taʁ.dif",
        "id": "fr_starter_adjectives_143",
        "lang": "fr"
    },
    {
        "word": "passionnant",
        "feminine": "passionnante",
        "level": "starter",
        "theme": "emotions",
        "emoji": "🤩",
        "form": "adjective",
        "plural": "passionnants",
        "femininePlural": "passionnantes",
        "definitions": [
            {
                "text": "Qui suscite un intérêt très vif.",
                "examples": []
            }
        ],
        "subtext": "passionnant",
        "comparative": "plus passionnant",
        "superlative": "le plus passionnant",
        "transcription": "pa.sjɔ.nɑ̃",
        "id": "fr_starter_adjectives_144",
        "lang": "fr"
    },
    {
        "word": "délicieux",
        "feminine": "délicieuse",
        "level": "starter",
        "theme": "tastes_textures",
        "emoji": "😋",
        "form": "adjective",
        "plural": "délicieux",
        "femininePlural": "délicieuses",
        "definitions": [
            {
                "text": "Qui procure un plaisir extrême au goût.",
                "examples": []
            }
        ],
        "subtext": "délicieux",
        "comparative": "plus délicieux",
        "superlative": "le plus délicieux",
        "transcription": "de.li.sjø",
        "id": "fr_starter_adjectives_145",
        "lang": "fr"
    },
    {
        "word": "sucré",
        "feminine": "sucrée",
        "level": "starter",
        "theme": "tastes_textures",
        "emoji": "🍬",
        "form": "adjective",
        "plural": "sucrés",
        "femininePlural": "sucrées",
        "definitions": [
            {
                "text": "Qui a le goût du sucre.",
                "examples": []
            }
        ],
        "subtext": "sucré",
        "comparative": "plus sucré",
        "superlative": "le plus sucré",
        "transcription": "sy.kʁe",
        "id": "fr_starter_adjectives_146",
        "lang": "fr"
    },
    {
        "word": "confortable",
        "feminine": "confortable",
        "level": "starter",
        "theme": "furniture_objects",
        "emoji": "🛋️",
        "form": "adjective",
        "plural": "confortables",
        "femininePlural": "confortables",
        "definitions": [
            {
                "text": "Qui offre un bien-être physique.",
                "examples": []
            }
        ],
        "subtext": "confortable",
        "comparative": "plus confortable",
        "superlative": "le plus confortable",
        "transcription": "kɔ̃.fɔʁ.tabl",
        "id": "fr_starter_adjectives_147",
        "lang": "fr"
    },
    {
        "word": "vrai",
        "feminine": "vraie",
        "level": "starter",
        "theme": "describing",
        "emoji": "💎",
        "form": "adjective",
        "plural": "vrais",
        "femininePlural": "vraies",
        "definitions": [
            {
                "text": "Qui est conforme à la réalité.",
                "examples": []
            }
        ],
        "subtext": "vrai",
        "comparative": "plus vrai",
        "superlative": "le plus vrai",
        "transcription": "vʁɛ",
        "id": "fr_starter_adjectives_148",
        "lang": "fr"
    },
    {
        "word": "simple",
        "feminine": "simple",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
        "plural": "simples",
        "femininePlural": "simples",
        "definitions": [
            {
                "text": "Qui n'est pas compliqué, facile à comprendre.",
                "examples": []
            }
        ],
        "subtext": "simple",
        "comparative": "plus simple",
        "superlative": "le plus simple",
        "transcription": "sɛ̃pl",
        "id": "fr_starter_adjectives_149",
        "lang": "fr"
    },
    {
        "word": "naturel",
        "feminine": "naturelle",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌱",
        "form": "adjective",
        "plural": "naturels",
        "femininePlural": "naturelles",
        "definitions": [
            {
                "text": "Qui appartient à la nature, qui n'est pas artificiel.",
                "examples": []
            }
        ],
        "subtext": "naturel",
        "comparative": "plus naturel",
        "superlative": "le plus naturel",
        "transcription": "na.ty.ʁɛl",
        "id": "fr_starter_adjectives_150",
        "lang": "fr"
    },
    {
        "word": "clair",
        "feminine": "claire",
        "level": "starter",
        "theme": "describing",
        "emoji": "💧",
        "form": "adjective",
        "plural": "clairs",
        "femininePlural": "claires",
        "definitions": [
            {
                "text": "Qui reçoit beaucoup de lumière, facile à voir.",
                "examples": []
            }
        ],
        "subtext": "clair",
        "comparative": "plus clair",
        "superlative": "le plus clair",
        "transcription": "klɛʁ",
        "id": "fr_starter_adjectives_151",
        "lang": "fr",
        "antonyms": [
            "lourd"
        ]
    },
    {
        "word": "commun",
        "feminine": "commune",
        "level": "starter",
        "theme": "describing",
        "emoji": "🔄",
        "form": "adjective",
        "plural": "communs",
        "femininePlural": "communes",
        "definitions": [
            {
                "text": "Qui appartient à plusieurs personnes ou qui est fréquent.",
                "examples": []
            }
        ],
        "subtext": "commun",
        "comparative": "plus commun",
        "superlative": "le plus commun",
        "transcription": "kɔ.mœ̃",
        "id": "fr_starter_adjectives_152",
        "lang": "fr"
    },
    {
        "word": "célèbre",
        "feminine": "célèbre",
        "level": "starter",
        "theme": "people",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "célèbres",
        "femininePlural": "célèbres",
        "definitions": [
            {
                "text": "Qui est connu par un très grand nombre de personnes.",
                "examples": []
            }
        ],
        "subtext": "célèbre",
        "comparative": "plus célèbre",
        "superlative": "le plus célèbre",
        "transcription": "se.lɛbʁ",
        "id": "fr_starter_adjectives_153",
        "lang": "fr"
    },
    {
        "word": "salé",
        "feminine": "salée",
        "level": "starter",
        "theme": "tastes_textures",
        "emoji": "🧂",
        "form": "adjective",
        "plural": "salés",
        "femininePlural": "salées",
        "definitions": [
            {
                "text": "Qui contient du sel ou en a le goût.",
                "examples": []
            }
        ],
        "subtext": "salé",
        "comparative": "plus salé",
        "superlative": "le plus salé",
        "transcription": "sa.le",
        "id": "fr_starter_adjectives_154",
        "lang": "fr"
    },
    {
        "word": "acide",
        "feminine": "acide",
        "level": "starter",
        "theme": "tastes_textures",
        "emoji": "🍋",
        "form": "adjective",
        "plural": "acides",
        "femininePlural": "acides",
        "definitions": [
            {
                "text": "Qui a une saveur aigre, comme celle du citron.",
                "examples": []
            }
        ],
        "subtext": "acide",
        "comparative": "plus acide",
        "superlative": "le plus acide",
        "transcription": "a.sid",
        "id": "fr_starter_adjectives_155",
        "lang": "fr"
    },
    {
        "word": "amer",
        "feminine": "amère",
        "level": "starter",
        "theme": "tastes_textures",
        "emoji": "☕",
        "form": "adjective",
        "plural": "amers",
        "femininePlural": "amères",
        "definitions": [
            {
                "text": "Qui a une saveur rude et désagréable, comme celle du café noir.",
                "examples": []
            }
        ],
        "subtext": "amer",
        "comparative": "plus amer",
        "superlative": "le plus amer",
        "transcription": "a.mɛʁ",
        "id": "fr_starter_adjectives_156",
        "lang": "fr"
    },
    {
        "word": "gros",
        "feminine": "grosse",
        "level": "starter",
        "theme": "people",
        "emoji": "🍔",
        "form": "adjective",
        "plural": "gros",
        "femininePlural": "grosses",
        "definitions": [
            {
                "text": "Qui a un volume ou un poids important.",
                "examples": []
            }
        ],
        "subtext": "gros",
        "comparative": "plus gros",
        "superlative": "le plus gros",
        "transcription": "ɡʁo",
        "id": "fr_starter_adjectives_157",
        "lang": "fr"
    },
    {
        "word": "mince",
        "feminine": "mince",
        "level": "starter",
        "theme": "people",
        "emoji": "🥬",
        "form": "adjective",
        "plural": "minces",
        "femininePlural": "minces",
        "definitions": [
            {
                "text": "Qui a peu d'épaisseur ou qui est svelte.",
                "examples": []
            }
        ],
        "subtext": "mince",
        "comparative": "plus mince",
        "superlative": "le plus mince",
        "transcription": "mɛ̃s",
        "id": "fr_starter_adjectives_158",
        "lang": "fr",
        "antonyms": [
            "épais"
        ]
    },
    {
        "word": "bouclé",
        "feminine": "bouclée",
        "level": "starter",
        "theme": "people",
        "emoji": "🌀",
        "form": "adjective",
        "plural": "bouclés",
        "femininePlural": "bouclées",
        "definitions": [
            {
                "text": "Qui forme des boucles, en parlant des cheveux.",
                "examples": []
            }
        ],
        "subtext": "bouclé",
        "comparative": "plus bouclé",
        "superlative": "le plus bouclé",
        "transcription": "bu.kle",
        "id": "fr_starter_adjectives_159",
        "lang": "fr"
    },
    {
        "word": "droit",
        "feminine": "droite",
        "level": "starter",
        "theme": "people",
        "emoji": "📏",
        "form": "adjective",
        "plural": "droits",
        "femininePlural": "droites",
        "definitions": [
            {
                "text": "Qui ne penche ni d'un côté ni de l'autre, rectiligne.",
                "examples": []
            }
        ],
        "subtext": "droit",
        "comparative": "plus droit",
        "superlative": "le plus droit",
        "transcription": "dʁwa",
        "id": "fr_starter_adjectives_160",
        "lang": "fr"
    },
    {
        "word": "triangulaire",
        "feminine": "triangulaire",
        "level": "starter",
        "theme": "describing",
        "emoji": "🔺",
        "form": "adjective",
        "plural": "triangulaires",
        "femininePlural": "triangulaires",
        "definitions": [
            {
                "text": "Qui a la forme d'un triangle, avec trois côtés.",
                "examples": []
            }
        ],
        "subtext": "triangulaire",
        "comparative": "plus triangulaire",
        "superlative": "le plus triangulaire",
        "transcription": "tʁi.jɑ̃.ɡy.lɛʁ",
        "id": "fr_starter_adjectives_161",
        "lang": "fr"
    },
    {
        "word": "rectangulaire",
        "feminine": "rectangulaire",
        "level": "starter",
        "theme": "describing",
        "emoji": "▭",
        "form": "adjective",
        "plural": "rectangulaires",
        "femininePlural": "rectangulaires",
        "definitions": [
            {
                "text": "Qui a la forme d'un rectangle.",
                "examples": []
            }
        ],
        "subtext": "rectangulaire",
        "comparative": "plus rectangulaire",
        "superlative": "le plus rectangulaire",
        "transcription": "ʁɛk.tɑ̃.ɡy.lɛʁ",
        "id": "fr_starter_adjectives_162",
        "lang": "fr"
    },
    {
        "word": "ovale",
        "feminine": "ovale",
        "level": "starter",
        "theme": "describing",
        "emoji": "🥚",
        "form": "adjective",
        "plural": "ovales",
        "femininePlural": "ovales",
        "definitions": [
            {
                "text": "Qui a la forme d'un œuf ou d'une ellipse allongée.",
                "examples": []
            }
        ],
        "subtext": "ovale",
        "comparative": "plus ovale",
        "superlative": "le plus ovale",
        "transcription": "ɔ.val",
        "id": "fr_starter_adjectives_163",
        "lang": "fr"
    },
    {
        "word": "préféré",
        "feminine": "préférée",
        "level": "starter",
        "theme": "describing",
        "emoji": "⭐",
        "form": "adjective",
        "plural": "préférés",
        "femininePlural": "préférées",
        "definitions": [
            {
                "text": "Que l'on aime mieux que les autres.",
                "examples": []
            }
        ],
        "subtext": "préféré",
        "comparative": "plus préféré",
        "superlative": "le plus préféré",
        "transcription": "pʁe.fe.ʁe",
        "id": "fr_starter_adjectives_164",
        "lang": "fr"
    },
    {
        "word": "sombre",
        "feminine": "sombre",
        "level": "starter",
        "theme": "describing",
        "emoji": "🌑",
        "form": "adjective",
        "plural": "sombres",
        "femininePlural": "sombres",
        "definitions": [
            {
                "text": "Qui a peu de lumière, obscur.",
                "examples": []
            }
        ],
        "subtext": "sombre",
        "comparative": "plus sombre",
        "superlative": "le plus sombre",
        "transcription": "sɔ̃bʁ",
        "id": "fr_starter_adjectives_165",
        "lang": "fr",
        "antonyms": [
            "clair"
        ]
    },
    {
        "word": "lumineux",
        "feminine": "lumineuse",
        "level": "starter",
        "theme": "describing",
        "emoji": "💡",
        "form": "adjective",
        "plural": "lumineux",
        "femininePlural": "lumineuses",
        "definitions": [
            {
                "text": "Qui émet ou réfléchit beaucoup de lumière.",
                "examples": []
            }
        ],
        "subtext": "lumineux",
        "comparative": "plus lumineux",
        "superlative": "le plus lumineux",
        "transcription": "ly.mi.nø",
        "id": "fr_starter_adjectives_166",
        "lang": "fr"
    },
    {
        "word": "doré",
        "feminine": "dorée",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟡",
        "form": "adjective",
        "plural": "dorés",
        "femininePlural": "dorées",
        "definitions": [
            {
                "text": "Qui a la couleur ou l'éclat de l'or.",
                "examples": []
            }
        ],
        "subtext": "doré",
        "comparative": "plus doré",
        "superlative": "le plus doré",
        "transcription": "dɔ.ʁe",
        "id": "fr_starter_adjectives_167",
        "lang": "fr"
    },
    {
        "word": "argenté",
        "feminine": "argentée",
        "level": "starter",
        "theme": "colours",
        "emoji": "⚪",
        "form": "adjective",
        "plural": "argentés",
        "femininePlural": "argentées",
        "definitions": [
            {
                "text": "Qui a l'éclat ou la couleur de l'argent.",
                "examples": []
            }
        ],
        "subtext": "argenté",
        "comparative": "plus argenté",
        "superlative": "le plus argenté",
        "transcription": "aʁ.ʒɑ̃.te",
        "id": "fr_starter_adjectives_168",
        "lang": "fr"
    },
    {
        "word": "profond",
        "feminine": "profonde",
        "level": "starter",
        "theme": "describing",
        "emoji": "🕳️",
        "form": "adjective",
        "plural": "profonds",
        "femininePlural": "profondes",
        "definitions": [
            {
                "text": "Dont le fond est très bas par rapport au bord supérieur.",
                "examples": []
            }
        ],
        "subtext": "profond",
        "comparative": "plus profond",
        "superlative": "le plus profond",
        "transcription": "pʁɔ.fɔ̃",
        "id": "fr_starter_adjectives_169",
        "lang": "fr"
    },
    {
        "word": "peu profond",
        "feminine": "peu profonde",
        "level": "starter",
        "theme": "describing",
        "emoji": "📏",
        "form": "adjective",
        "plural": "peu profonds",
        "femininePlural": "peu profondes",
        "definitions": [
            {
                "text": "Dont le fond est proche de la surface.",
                "examples": []
            }
        ],
        "subtext": "peu profond",
        "comparative": "plus peu profond",
        "superlative": "le plus peu profond",
        "transcription": "pø pʁɔ.fɔ̃",
        "id": "fr_starter_adjectives_170",
        "lang": "fr"
    },
    {
        "word": "moderne",
        "feminine": "moderne",
        "level": "starter",
        "theme": "describing",
        "emoji": "🏙️",
        "form": "adjective",
        "plural": "modernes",
        "femininePlural": "modernes",
        "definitions": [
            {
                "text": "Qui appartient au temps présent ou récent.",
                "examples": []
            }
        ],
        "subtext": "moderne",
        "comparative": "plus moderne",
        "superlative": "le plus moderne",
        "transcription": "mɔ.dɛʁ",
        "id": "fr_starter_adjectives_171",
        "lang": "fr"
    },
    {
        "word": "ancien",
        "feminine": "ancienne",
        "level": "starter",
        "theme": "describing",
        "emoji": "🏛️",
        "form": "adjective",
        "plural": "anciens",
        "femininePlural": "anciennes",
        "definitions": [
            {
                "text": "Qui existe depuis longtemps ou qui appartient au passé.",
                "examples": []
            }
        ],
        "subtext": "ancien",
        "comparative": "plus ancien",
        "superlative": "le plus ancien",
        "transcription": "ɑ̃.sjɛ̃",
        "id": "fr_starter_adjectives_172",
        "lang": "fr"
    },
    {
        "word": "courageux",
        "feminine": "courageuse",
        "level": "starter",
        "theme": "describing",
        "emoji": "🦁",
        "form": "adjective",
        "plural": "courageux",
        "femininePlural": "courageuses",
        "definitions": [
            {
                "text": "Qui fait preuve de courage devant le danger ou la difficulté.",
                "examples": []
            }
        ],
        "subtext": "courageux",
        "comparative": "plus courageux",
        "superlative": "le plus courageux",
        "transcription": "ku.ʁa.ʒø",
        "id": "fr_starter_adjectives_173",
        "lang": "fr"
    },
    {
        "word": "lâche",
        "feminine": "lâche",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐭",
        "form": "adjective",
        "plural": "lâches",
        "femininePlural": "lâches",
        "definitions": [
            {
                "text": "Qui manque de courage, qui fuit devant les responsabilités.",
                "examples": []
            }
        ],
        "subtext": "lâche",
        "comparative": "plus lâche",
        "superlative": "le plus lâche",
        "transcription": "lɑːʃ",
        "id": "fr_starter_adjectives_174",
        "lang": "fr"
    },
    {
        "word": "large",
        "feminine": "large",
        "level": "starter",
        "theme": "size_measurements",
        "emoji": "↔️",
        "form": "adjective",
        "plural": "larges",
        "femininePlural": "larges",
        "definitions": [
            {
                "text": "Qui a une dimension transversale importante.",
                "examples": []
            }
        ],
        "subtext": "large",
        "comparative": "plus large",
        "superlative": "le plus large",
        "transcription": "laʁʒ",
        "id": "fr_starter_adjectives_175",
        "lang": "fr",
        "antonyms": [
            "étroit"
        ]
    },
    {
        "word": "étroit",
        "feminine": "étroite",
        "level": "starter",
        "theme": "size_measurements",
        "emoji": "⬇️",
        "form": "adjective",
        "plural": "étroits",
        "femininePlural": "étroites",
        "definitions": [
            {
                "text": "Qui a peu de largeur, resserré.",
                "examples": []
            }
        ],
        "subtext": "étroit",
        "comparative": "plus étroit",
        "superlative": "le plus étroit",
        "transcription": "e.tʁwa",
        "id": "fr_starter_adjectives_176",
        "lang": "fr",
        "antonyms": [
            "large"
        ]
    },
    {
        "word": "antipathique",
        "feminine": "antipathique",
        "level": "starter",
        "theme": "personality_traits",
        "emoji": "😠",
        "form": "adjective",
        "plural": "antipathiques",
        "femininePlural": "antipathiques",
        "definitions": [
            {
                "text": "Qui inspire de l'aversion, qui n'est pas aimable.",
                "examples": []
            }
        ],
        "subtext": "antipathique",
        "comparative": "plus antipathique",
        "superlative": "le plus antipathique",
        "transcription": "ɑ̃.ti.pa.tik",
        "id": "fr_starter_adjectives_177",
        "lang": "fr"
    },
    {
        "word": "impatient",
        "feminine": "impatiente",
        "level": "starter",
        "theme": "personality_traits",
        "emoji": "⌚",
        "form": "adjective",
        "plural": "impatients",
        "femininePlural": "impatientes",
        "definitions": [
            {
                "text": "Qui ne sait pas attendre ou qui s'énerve facilement.",
                "examples": []
            }
        ],
        "subtext": "impatient",
        "comparative": "plus impatient",
        "superlative": "le plus impatient",
        "transcription": "ɛ̃.pa.sjɑ̃",
        "id": "fr_starter_adjectives_178",
        "lang": "fr"
    },
    {
        "word": "impoli",
        "feminine": "impolie",
        "level": "starter",
        "theme": "personality_traits",
        "emoji": "😛",
        "form": "adjective",
        "plural": "impolis",
        "femininePlural": "impolies",
        "definitions": [
            {
                "text": "Qui manque de politesse ou de respect.",
                "examples": []
            }
        ],
        "subtext": "impoli",
        "comparative": "plus impoli",
        "superlative": "le plus impoli",
        "transcription": "ɛ̃.pɔ.li",
        "id": "fr_starter_adjectives_179",
        "lang": "fr"
    },
    {
        "word": "faux",
        "feminine": "fausse",
        "level": "starter",
        "theme": "material_objects",
        "emoji": "🎭",
        "form": "adjective",
        "plural": "faux",
        "femininePlural": "fausses",
        "definitions": [
            {
                "text": "Qui n'est pas vrai, qui est contraire à la réalité.",
                "examples": []
            }
        ],
        "subtext": "faux",
        "comparative": "plus faux",
        "superlative": "le plus faux",
        "transcription": "fo",
        "id": "fr_starter_adjectives_180",
        "lang": "fr",
        "antonyms": [
            "juste"
        ]
    },
    {
        "word": "malchanceux",
        "feminine": "malchanceuse",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😿",
        "form": "adjective",
        "plural": "malchanceux",
        "femininePlural": "malchanceuses",
        "definitions": [
            {
                "text": "Qui n'a pas de chance, qui subit des malheurs.",
                "examples": []
            }
        ],
        "subtext": "malchanceux",
        "comparative": "plus malchanceux",
        "superlative": "le plus malchanceux",
        "transcription": "mal.ʃɑ̃.sø",
        "id": "fr_starter_adjectives_181",
        "lang": "fr"
    },
    {
        "word": "violet",
        "level": "starter",
        "theme": "colours",
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
        "transcription": "vjɔ.lɛ",
        "id": "fr_starter_adjectives_182",
        "lang": "fr"
    },
    {
        "word": "marié",
        "level": "starter",
        "theme": "marital_status",
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
        "id": "fr_starter_adjectives_183",
        "lang": "fr",
        "antonyms": [
            "célibataire"
        ]
    },
    {
        "word": "célibataire",
        "level": "starter",
        "theme": "marital_status",
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
        "id": "fr_starter_adjectives_184",
        "lang": "fr",
        "antonyms": [
            "marié"
        ]
    },
    {
        "word": "rugueux",
        "level": "starter",
        "theme": "tastes_textures",
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
        "id": "fr_starter_adjectives_185",
        "lang": "fr",
        "antonyms": [
            "lisse"
        ]
    },
    {
        "word": "superficiel",
        "level": "starter",
        "theme": "describing",
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
        "id": "fr_starter_adjectives_186",
        "lang": "fr",
        "antonyms": [
            "profond"
        ]
    },
    {
        "word": "étrange",
        "level": "starter",
        "theme": "describing",
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
        "id": "fr_starter_adjectives_187",
        "lang": "fr",
        "antonyms": [
            "normal"
        ]
    },
    {
        "word": "normal",
        "level": "starter",
        "theme": "describing",
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
        "id": "fr_starter_adjectives_188",
        "lang": "fr",
        "antonyms": [
            "étrange"
        ]
    },
    {
        "word": "assoiffé",
        "level": "starter",
        "theme": "health_body",
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
        ],
        "id": "fr_starter_adjectives_189",
        "lang": "fr",
        "emoji": "✨"
    },
    {
        "word": "timide",
        "level": "starter",
        "theme": "people",
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
        ],
        "id": "fr_starter_adjectives_190",
        "lang": "fr",
        "emoji": "✨"
    }
]
    const lang = "fr";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();