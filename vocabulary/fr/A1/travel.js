(function() {
    const data = [
    {
        "word": "voiture",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "voitures",
        "subtext": "conduire une voiture, voiture rapide",
        "definitions": [
            {
                "text": "Un véhicule avec quatre roues et un moteur.",
                "examples": [
                    "Sa voiture est rouge."
                ]
            }
        ],
        "transcription": "vwa.tyʁ",
        "id": "fr_starter_travel_001",
        "lang": "fr"
    },
    {
        "word": "trajet",
        "level": "starter",
        "theme": "public_transport",
        "article": "le",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trajets",
        "definitions": [
            {
                "text": "Le voyage pour aller et revenir du travail chaque jour.",
                "examples": [
                    "Mon trajet prend une heure."
                ]
            }
        ],
        "transcription": "tʁa.ʒɛ",
        "id": "fr_starter_travel_002",
        "lang": "fr"
    },
    {
        "word": "hôtel",
        "level": "starter",
        "theme": "public_transport",
        "article": "l'",
        "emoji": "🏨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hôtels",
        "definitions": [
            {
                "text": "Un bâtiment où les gens paient pour passer la nuit.",
                "examples": [
                    "L'hôtel est près de la gare."
                ]
            }
        ],
        "transcription": "o.tɛl",
        "id": "fr_starter_travel_003",
        "lang": "fr"
    },
    {
        "word": "avion",
        "level": "starter",
        "theme": "travel",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "avions",
        "definitions": [
            {
                "text": "Véhicule qui vole.",
                "examples": [
                    "L'avion part à midi."
                ]
            }
        ],
        "transcription": "a.vjɔ̃",
        "id": "fr_starter_travel_004",
        "lang": "fr"
    },
    {
        "word": "vélo",
        "level": "starter",
        "theme": "travel",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vélos",
        "definitions": [
            {
                "text": "Véhicule à deux roues.",
                "examples": [
                    "Je vais au travail à vélo."
                ]
            }
        ],
        "transcription": "ve.lo",
        "id": "fr_starter_travel_005",
        "lang": "fr"
    },
    {
        "word": "bateau",
        "level": "starter",
        "theme": "travel",
        "article": "le",
        "gender": "masculine",
        "emoji": "⛵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bateaux",
        "definitions": [
            {
                "text": "Véhicule pour aller sur l'eau.",
                "examples": [
                    "Le bateau est sur la mer."
                ]
            }
        ],
        "transcription": "ba.to",
        "id": "fr_starter_travel_006",
        "lang": "fr"
    },
    {
        "word": "voyageur",
        "level": "starter",
        "theme": "public_transport",
        "article": "le",
        "gender": "masculine",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "voyageurs",
        "definitions": [
            {
                "text": "Personne qui voyage.",
                "examples": [
                    "Le train est plein de voyageurs."
                ]
            }
        ],
        "transcription": "vwa.ja.ʒœʁ",
        "id": "fr_starter_travel_007",
        "lang": "fr"
    },
    {
        "word": "valise",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "valises",
        "definitions": [
            {
                "text": "Contenant de voyage.",
                "examples": [
                    "Boucler sa valise."
                ]
            }
        ],
        "transcription": "va.liz",
        "id": "fr_starter_travel_008",
        "lang": "fr"
    },
    {
        "word": "sac à dos",
        "level": "starter",
        "theme": "travel",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sacs à dos",
        "definitions": [
            {
                "text": "Sac sur le dos.",
                "examples": [
                    "Prendre son sac à dos."
                ]
            }
        ],
        "transcription": "sak a do",
        "id": "fr_starter_travel_009",
        "lang": "fr"
    },
    {
        "word": "passeport",
        "level": "starter",
        "theme": "travel",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "passeports",
        "definitions": [
            {
                "text": "Papier de voyage.",
                "examples": [
                    "Montrer son passeport."
                ]
            }
        ],
        "transcription": "pas.pɔʁ",
        "id": "fr_starter_travel_010",
        "lang": "fr"
    },
    {
        "word": "billet",
        "level": "starter",
        "theme": "public_transport",
        "article": "le",
        "gender": "masculine",
        "emoji": "🎟️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "billets",
        "definitions": [
            {
                "text": "Titre de transport.",
                "examples": [
                    "Un billet de train."
                ]
            }
        ],
        "transcription": "bi.jɛ",
        "id": "fr_starter_travel_011",
        "lang": "fr"
    },
    {
        "word": "carte",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cartes",
        "definitions": [
            {
                "text": "Représentation d'un lieu.",
                "examples": [
                    "Une carte routière."
                ]
            }
        ],
        "transcription": "kaʁt",
        "id": "fr_starter_travel_012",
        "lang": "fr"
    },
    {
        "word": "plan",
        "level": "starter",
        "theme": "travel",
        "article": "le",
        "gender": "masculine",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "plans",
        "definitions": [
            {
                "text": "Carte d'une ville.",
                "examples": [
                    "Un plan de métro."
                ]
            }
        ],
        "transcription": "plɑ̃",
        "id": "fr_starter_travel_013",
        "lang": "fr"
    },
    {
        "word": "gare",
        "level": "starter",
        "theme": "public_transport",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gares",
        "definitions": [
            {
                "text": "Lieu des trains.",
                "examples": [
                    "Aller à la gare."
                ]
            }
        ],
        "transcription": "ɡaʁ",
        "id": "fr_starter_travel_014",
        "lang": "fr"
    },
    {
        "word": "aéroport",
        "level": "starter",
        "theme": "public_transport",
        "article": "l'",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "aéroports",
        "definitions": [
            {
                "text": "Lieu des avions.",
                "examples": [
                    "Prendre un taxi pour l'aéroport."
                ]
            }
        ],
        "transcription": "a.e.ʁɔ.pɔʁ",
        "id": "fr_starter_travel_015",
        "lang": "fr"
    },
    {
        "word": "station de bus",
        "level": "starter",
        "theme": "public_transport",
        "article": "la",
        "gender": "feminine",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stations de bus",
        "definitions": [
            {
                "text": "Lieu des bus.",
                "examples": [
                    "Attendre à la station."
                ]
            }
        ],
        "transcription": "sta.sjɔ̃ də bys",
        "id": "fr_starter_travel_016",
        "lang": "fr"
    },
    {
        "word": "arrêt de bus",
        "level": "starter",
        "theme": "public_transport",
        "article": "l'",
        "gender": "masculine",
        "emoji": "🚏",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "arrêts de bus",
        "definitions": [
            {
                "text": "Point d'arrêt du bus.",
                "examples": [
                    "S'arrêter au prochain arrêt."
                ]
            }
        ],
        "transcription": "a.ʁɛ də bys",
        "id": "fr_starter_travel_017",
        "lang": "fr"
    },
    {
        "word": "quai",
        "level": "starter",
        "theme": "public_transport",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛤️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "quais",
        "definitions": [
            {
                "text": "Bord de la voie ferrée.",
                "examples": [
                    "Le train arrive au quai 3."
                ]
            }
        ],
        "transcription": "ke",
        "id": "fr_starter_travel_018",
        "lang": "fr"
    },
    {
        "word": "voie",
        "level": "starter",
        "theme": "public_transport",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛤️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "voies",
        "definitions": [
            {
                "text": "Chemin de fer.",
                "examples": [
                    "La voie est libre."
                ]
            }
        ],
        "transcription": "vwa",
        "id": "fr_starter_travel_019",
        "lang": "fr"
    },
    {
        "word": "train",
        "level": "starter",
        "theme": "public_transport",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "trains",
        "definitions": [
            {
                "text": "Véhicule sur rails.",
                "examples": [
                    "Prendre le train."
                ]
            }
        ],
        "transcription": "tʁɛ̃",
        "id": "fr_starter_travel_020",
        "lang": "fr"
    },
    {
        "word": "bus",
        "level": "starter",
        "theme": "public_transport",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bus",
        "definitions": [
            {
                "text": "Grand véhicule urbain.",
                "examples": [
                    "Le bus de 8h."
                ]
            }
        ],
        "transcription": "bys",
        "id": "fr_starter_travel_021",
        "lang": "fr"
    },
    {
        "word": "métro",
        "level": "starter",
        "theme": "public_transport",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚇",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "métros",
        "definitions": [
            {
                "text": "Train souterrain.",
                "examples": [
                    "Prendre le métro."
                ]
            }
        ],
        "transcription": "me.tʁo",
        "id": "fr_starter_travel_022",
        "lang": "fr"
    },
    {
        "word": "taxi",
        "level": "starter",
        "theme": "public_transport",
        "article": "le",
        "gender": "masculine",
        "emoji": "🚕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "taxis",
        "definitions": [
            {
                "text": "Voiture avec chauffeur.",
                "examples": [
                    "Appeler un taxi."
                ]
            }
        ],
        "transcription": "tak.si",
        "id": "fr_starter_travel_023",
        "lang": "fr"
    },
    {
        "word": "vitesse",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏎️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vitesses",
        "definitions": [
            {
                "text": "Rapidité du mouvement.",
                "examples": [
                    "Limiter la vitesse."
                ]
            }
        ],
        "transcription": "vi.tɛs",
        "id": "fr_starter_travel_024",
        "lang": "fr"
    },
    {
        "word": "bagages",
        "level": "starter",
        "theme": "travel",
        "article": "les",
        "gender": "masculine",
        "emoji": "🧳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bagages",
        "definitions": [
            {
                "text": "Affaires de voyage.",
                "examples": [
                    "Porter les bagages."
                ]
            }
        ],
        "transcription": "ba.ɡaʒ",
        "id": "fr_starter_travel_025",
        "lang": "fr"
    },
    {
        "word": "voyage",
        "level": "starter",
        "theme": "travel",
        "article": "le",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "voyages",
        "definitions": [
            {
                "text": "Action de voyager.",
                "examples": [
                    "Bon voyage !"
                ]
            }
        ],
        "transcription": "vwa.jaʒ",
        "id": "fr_starter_travel_026",
        "lang": "fr"
    },
    {
        "word": "départ",
        "level": "starter",
        "theme": "travel",
        "article": "le",
        "gender": "masculine",
        "emoji": "🛫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "départs",
        "definitions": [
            {
                "text": "Action de partir.",
                "examples": [
                    "L'heure du départ."
                ]
            }
        ],
        "transcription": "de.paʁ",
        "id": "fr_starter_travel_027",
        "lang": "fr"
    },
    {
        "word": "arrivée",
        "level": "starter",
        "theme": "travel",
        "article": "l'",
        "gender": "feminine",
        "emoji": "🛬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "arrivées",
        "definitions": [
            {
                "text": "Action d'arriver.",
                "examples": [
                    "L'heure de l'arrivée."
                ]
            }
        ],
        "transcription": "a.ʁi.ve",
        "id": "fr_starter_travel_028",
        "lang": "fr"
    },
    {
        "word": "vol",
        "level": "starter",
        "theme": "public_transport",
        "article": "le",
        "gender": "masculine",
        "emoji": "✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "vols",
        "definitions": [
            {
                "text": "Voyage en avion.",
                "examples": [
                    "Un vol de nuit."
                ]
            }
        ],
        "transcription": "vɔl",
        "id": "fr_starter_travel_029",
        "lang": "fr"
    },
    {
        "word": "réservation",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "réservations",
        "definitions": [
            {
                "text": "Action de réserver.",
                "examples": [
                    "Faire une réservation."
                ]
            }
        ],
        "transcription": "ʁe.zɛʁ.va.sjɔ̃",
        "id": "fr_starter_travel_030",
        "lang": "fr"
    },
    {
        "word": "chambre d'hôtel",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chambres d'hôtel",
        "definitions": [
            {
                "text": "Pièce dans un hôtel.",
                "examples": [
                    "Réserver une chambre d'hôtel."
                ]
            }
        ],
        "transcription": "ʃɑ̃.bʁə d‿o.tɛl",
        "id": "fr_starter_travel_031",
        "lang": "fr"
    },
    {
        "word": "clé",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "clés",
        "definitions": [
            {
                "text": "Pour ouvrir la chambre.",
                "examples": [
                    "Rendre la clé."
                ]
            }
        ],
        "transcription": "kle",
        "id": "fr_starter_travel_032",
        "lang": "fr"
    },
    {
        "word": "réception",
        "level": "starter",
        "theme": "travel",
        "article": "la",
        "gender": "feminine",
        "emoji": "🛎️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "réceptions",
        "definitions": [
            {
                "text": "Accueil de l'hôtel.",
                "examples": [
                    "Aller à la réception."
                ]
            }
        ],
        "transcription": "ʁe.sɛp.sjɔ̃",
        "id": "fr_starter_travel_033",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();