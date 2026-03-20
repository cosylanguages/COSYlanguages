(function() {
    const data = [
    {
        "word": "artista",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🎨",
        "form": "noun",
        "plural": "artisti",
        "definitions": [
            {
                "text": "Una persona che crea dipinti o disegni.",
                "examples": [
                    "L'artista dipinge un bel quadro.",
                    "È un artista famoso."
                ]
            },
            {
                "text": "Questa persona lavora spesso in uno studio.",
                "examples": [
                    "Gli artisti usano colori e pennelli."
                ]
            }
        ]
    },
    {
        "word": "chef",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👨‍🍳",
        "form": "noun",
        "plural": "chef",
        "definitions": [
            {
                "text": "Un cuoco professionista che lavora in un ristorante.",
                "examples": [
                    "Lo chef prepara un pasto delizioso.",
                    "Il nostro chef ha molto talento."
                ]
            },
            {
                "text": "Questa persona lavora in cucina.",
                "examples": [
                    "Gli chef portano un alto cappello bianco."
                ]
            }
        ]
    },
    {
        "word": "risotto",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "form": "noun",
        "plural": "risotti",
        "definitions": [
            {
                "text": "Un piatto di riso cotto con brodo fino a diventare cremoso.",
                "examples": [
                    "Il risotto allo zafferano è giallo.",
                    "Mia nonna fa un ottimo risotto."
                ]
            },
            {
                "text": "È un primo piatto tipico del Nord Italia.",
                "examples": [
                    "Il risotto va servito ben caldo."
                ]
            }
        ]
    },
    {
        "word": "gelato",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "form": "noun",
        "plural": "gelati",
        "definitions": [
            {
                "text": "Un dolce freddo fatto con latte e zucchero.",
                "examples": [
                    "Prendiamo un gelato al cioccolato.",
                    "Il gelato è rinfrescante in estate."
                ]
            },
            {
                "text": "L'Italia è famosa per il suo gelato artigianale.",
                "examples": [
                    "Il gelato può essere servito nel cono o nella coppetta."
                ]
            }
        ]
    },
    {
        "word": "formaggio",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🧀",
        "form": "noun",
        "plural": "formaggio",
        "definitions": [
            {
                "text": "Un alimento solido ricavato dal latte.",
                "examples": [
                    "Mi piace il formaggio sulla pasta.",
                    "Esistono molti tipi di formaggio."
                ]
            },
            {
                "text": "L'Italia produce centinaia di formaggi diversi.",
                "examples": [
                    "Il parmigiano è un formaggio stagionato."
                ]
            }
        ]
    },
    {
        "word": "riso",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍚",
        "form": "noun",
        "plural": "riso"
    },
    {
        "word": "pomodoro",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍅",
        "form": "noun",
        "plural": "pomodori"
    },
    {
        "word": "patata",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥔",
        "form": "noun",
        "plural": "patate"
    },
    {
        "word": "vino",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "il",
        "baseWord": "vino",
        "emoji": "🍷",
        "form": "noun",
        "plural": "vino"
    },
    {
        "word": "birra",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "la",
        "baseWord": "birra",
        "emoji": "🍺",
        "form": "noun",
        "plural": "birra"
    },
    {
        "word": "ospedale",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🏥",
        "form": "noun",
        "plural": "ospedali",
        "definitions": [
            {
                "text": "Un luogo dove si curano i malati e i feriti.",
                "examples": [
                    "L'ambulanza sta andando all'ospedale.",
                    "Lavora in ospedale."
                ]
            },
            {
                "text": "Questo è un luogo dove si va per vedere un medico o un infermiere.",
                "examples": [
                    "Gli ospedali sono aperti 24 ore su 24."
                ]
            }
        ]
    },
    {
        "word": "cinema",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🎬",
        "form": "noun",
        "plural": "cinema",
        "definitions": [
            {
                "text": "Un luogo dove si proiettano film su un grande schermo.",
                "examples": [
                    "Andiamo al cinema stasera.",
                    "Cosa danno al cinema?"
                ]
            },
            {
                "text": "Questo è un luogo dove si possono mangiare popcorn e guardare un film.",
                "examples": [
                    "Mi piace andare al cinema con gli amici."
                ]
            }
        ]
    },
    {
        "word": "ristorante",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🍴",
        "form": "noun",
        "plural": "ristoranti",
        "definitions": [
            {
                "text": "Un posto dove si può comprare e mangiare un pasto.",
                "examples": [
                    "Andiamo al ristorante stasera.",
                    "Il ristorante è chiuso."
                ]
            },
            {
                "text": "In questo luogo, un cameriere porta il cibo al tavolo.",
                "examples": [
                    "Abbiamo cenato in un ristorante elegante."
                ]
            }
        ]
    },
    {
        "word": "supermercato",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "🛒",
        "form": "noun",
        "plural": "supermercati",
        "definitions": [
            {
                "text": "Un grande negozio dove si comprano cibo e prodotti per la casa.",
                "examples": [
                    "Vado a fare la spesa al supermercato.",
                    "Il supermercato è vicino a casa."
                ]
            },
            {
                "text": "In questo luogo si usa un carrello per fare la spesa.",
                "examples": [
                    "Ci sono molte offerte al supermercato."
                ]
            }
        ]
    },
    {
        "word": "vestito",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "vestiti"
    },
    {
        "word": "giacca",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🧥",
        "form": "noun",
        "plural": "giacce"
    },
    {
        "word": "gonna",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👗",
        "form": "noun",
        "plural": "gonne"
    },
    {
        "word": "divano",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "divani"
    },
    {
        "word": "lampada",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "💡",
        "form": "noun",
        "plural": "lampade"
    },
    {
        "word": "scrivania",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "scrivanie"
    },
    {
        "word": "bello",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "form": "noun",
        "plural": "belli"
    },
    {
        "word": "forte",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "form": "noun",
        "plural": "forti"
    },
    {
        "word": "lavarsi i denti",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🪥",
        "form": "noun",
        "plural": "lavarsi i denti"
    },
    {
        "word": "fare la doccia",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🚿",
        "form": "noun",
        "plural": "fare la doccie"
    },
    {
        "word": "orologio",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "⌚",
        "form": "noun",
        "plural": "orologi",
        "definitions": [
            {
                "text": "Uno strumento per misurare il tempo.",
                "examples": [
                    "Il mio orologio è rotto.",
                    "Che ore sono sul tuo orologio?"
                ]
            }
        ]
    },
    {
        "word": "portafoglio",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👛",
        "form": "noun",
        "plural": "portafogli",
        "definitions": [
            {
                "text": "Un piccolo contenitore per tenere soldi e carte.",
                "examples": [
                    "Ho perso il portafoglio.",
                    "Metti i soldi nel portafoglio."
                ]
            }
        ]
    },
    {
        "word": "occhiali",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "👓",
        "form": "noun",
        "plural": "occhiali",
        "definitions": [
            {
                "text": "Uno strumento che si indossa sul viso per vedere meglio.",
                "examples": [
                    "Ho bisogno di occhiali nuovi.",
                    "Lui porta occhiali neri."
                ]
            }
        ]
    },
    {
        "word": "leone",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🦁",
        "form": "noun",
        "plural": "leoni",
        "definitions": [
            {
                "text": "Un grande felino selvatico che vive in Africa ed è chiamato 'il re della foresta'.",
                "examples": [
                    "Il leone è molto forte.",
                    "Abbiamo visto un leone allo zoo."
                ]
            }
        ]
    },
    {
        "word": "tigre",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🐯",
        "form": "adjective"
    },
    {
        "word": "cavallo",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "🐎",
        "form": "adjective"
    },
    {
        "word": "nevoso",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "❄️",
        "form": "noun",
        "plural": "nevosi"
    },
    {
        "word": "ventoso",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "💨",
        "form": "noun",
        "plural": "ventosi"
    },
    {
        "word": "nuvoloso",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "☁️",
        "form": "noun",
        "plural": "nuvolosi"
    },
    {
        "word": "braccio",
        "level": "elementary",
        "theme": "health_body_A2",
        "emoji": "💪",
        "form": "noun",
        "plural": "braccii"
    },
    {
        "word": "università",
        "level": "elementary",
        "theme": "career_A2",
        "emoji": "🎓",
        "form": "noun",
        "plural": "università",
        "definitions": [
            {
                "text": "Un istituto di istruzione superiore.",
                "examples": [
                    "Studia all'università.",
                    "L'università ha una grande biblioteca."
                ]
            }
        ]
    },
    {
        "word": "cucina locale",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🍜",
        "form": "noun",
        "definitions": [
            {
                "text": "Il cibo tradizionale di una zona specifica.",
                "examples": [
                    "Amo provare la cucina locale.",
                    "La cucina locale qui è molto saporita."
                ]
            },
            {
                "text": "Provare la cucina locale è una parte importante del viaggio.",
                "examples": [
                    "La cucina locale usa ingredienti freschi della regione."
                ]
            }
        ]
    },
    {
        "word": "sembrare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "noun",
        "plural": "sembrari"
    },
    {
        "word": "diventare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "noun",
        "plural": "diventari"
    },
    {
        "word": "muovere",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "📦",
        "form": "noun",
        "plural": "muoveri"
    },
    {
        "word": "credere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🙏",
        "form": "noun",
        "plural": "crederi"
    },
    {
        "word": "succedere",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "⚡",
        "form": "adjective"
    },
    {
        "word": "includere",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "➕",
        "form": "noun",
        "plural": "includeri"
    },
    {
        "word": "continuare",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "➡️",
        "form": "noun",
        "plural": "continuari"
    },
    {
        "word": "impostare",
        "level": "elementary",
        "theme": "neighbourhood_A2",
        "emoji": "⚙️",
        "form": "noun",
        "plural": "impostari"
    },
    {
        "word": "guidare",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👑",
        "form": "noun",
        "plural": "guidari"
    },
    {
        "word": "seguire",
        "level": "elementary",
        "theme": "transport_travel_A2",
        "emoji": "👣",
        "form": "noun",
        "plural": "seguiri"
    },
    {
        "word": "creare",
        "level": "elementary",
        "theme": "leisure_hobbies_A2",
        "emoji": "✨",
        "form": "noun",
        "plural": "creari"
    },
    {
        "word": "permettre",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "noun",
        "plural": "permettri"
    },
    {
        "word": "crescere",
        "level": "elementary",
        "theme": "environment_A2",
        "emoji": "🌱",
        "form": "noun",
        "plural": "cresceri"
    },
    {
        "word": "offrire",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "noun",
        "plural": "offriri"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
