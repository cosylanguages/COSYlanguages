(function() {
    const data = [
    {
        "word": "artista",
        "level": "elementary",
        "theme": "art_design_A2",
        "article": "l'",
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
        "theme": "restaurants_ordering_A2",
        "article": "lo",
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
        "article": "il",
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
        "article": "il",
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
        "article": "il",
        "emoji": "🧀",
        "form": "noun",
        "plural": "formaggi",
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
        "article": "il",
        "emoji": "🍚",
        "form": "noun",
        "plural": "riso"
    },
    {
        "word": "pomodoro",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "il",
        "emoji": "🍅",
        "form": "noun",
        "plural": "pomodori"
    },
    {
        "word": "patata",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "article": "la",
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
        "theme": "medical_appointments_A1",
        "article": "l'",
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
        "theme": "theatre_performance_A2",
        "article": "il",
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
        "theme": "restaurants_ordering_A2",
        "article": "il",
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
        "theme": "shopping_for_food_A2",
        "article": "il",
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
        "theme": "shopping_for_clothes_A2",
        "article": "il",
        "emoji": "👗",
        "form": "noun",
        "plural": "vestiti"
    },
    {
        "word": "giacca",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "article": "la",
        "emoji": "🧥",
        "form": "noun",
        "plural": "giacche"
    },
    {
        "word": "gonna",
        "level": "elementary",
        "theme": "shopping_for_clothes_A2",
        "article": "la",
        "emoji": "👗",
        "form": "noun",
        "plural": "gonne"
    },
    {
        "word": "divano",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "article": "il",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "divani"
    },
    {
        "word": "lampada",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "article": "la",
        "emoji": "💡",
        "form": "noun",
        "plural": "lampade"
    },
    {
        "word": "scrivania",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "article": "la",
        "emoji": "⌨️",
        "form": "noun",
        "plural": "scrivanie"
    },
    {
        "word": "lavarsi i denti",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🪥",
        "form": "noun"
    },
    {
        "word": "fare la doccia",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "noun"
    },
    {
        "word": "orologio",
        "level": "elementary",
        "theme": "accessories_A1",
        "article": "l'",
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
        "theme": "accessories_A1",
        "article": "il",
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
        "theme": "accessories_A1",
        "article": "gli",
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
        "theme": "animals_nature_A2",
        "article": "il",
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
        "theme": "animals_nature_A2",
        "article": "la",
        "emoji": "🐯",
        "form": "noun",
        "plural": "tigri"
    },
    {
        "word": "cavallo",
        "level": "elementary",
        "theme": "animals_nature_A2",
        "article": "il",
        "emoji": "🐎",
        "form": "noun",
        "plural": "cavalli"
    },
    {
        "word": "braccio",
        "level": "elementary",
        "theme": "body_parts_A0",
        "article": "il",
        "emoji": "💪",
        "form": "noun",
        "plural": "braccia"
    },
    {
        "word": "università",
        "level": "elementary",
        "theme": "career_development_A2",
        "article": "l'",
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
        "article": "la",
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
        "theme": "personal_qualities_A2",
        "emoji": "🤔",
        "form": "verb"
    },
    {
        "word": "diventare",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🦋",
        "form": "verb"
    },
    {
        "word": "muovere",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb"
    },
    {
        "word": "credere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb"
    },
    {
        "word": "succedere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb"
    },
    {
        "word": "includere",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb"
    },
    {
        "word": "continuare",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb"
    },
    {
        "word": "impostare",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "form": "verb"
    },
    {
        "word": "guidare",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👑",
        "form": "verb"
    },
    {
        "word": "seguire",
        "level": "elementary",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb"
    },
    {
        "word": "creare",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "verb"
    },
    {
        "word": "permettere",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "✅",
        "form": "verb"
    },
    {
        "word": "crescere",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
        "form": "verb"
    },
    {
        "word": "offrire",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "noun",
        "plural": "offriri"
    },
    {
        "word": "straordinari",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏰",
        "form": "noun",
        "article": "gli",
        "plural": "straordinari",
        "definitions": [
            {
                "text": "Ore di lavoro in più rispetto alla normale giornata lavorativa.",
                "examples": [
                    "Lavora facendo gli straordinari per finire il progetto."
                ]
            }
        ]
    },
    {
        "word": "promozione",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "noun",
        "article": "la",
        "plural": "promozioni",
        "definitions": [
            {
                "text": "Passaggio a un lavoro più alto e meglio retribuito all'interno della stessa azienda.",
                "examples": [
                    "Ha ottenuto una promozione il mese scorso."
                ]
            }
        ]
    },
    {
        "word": "colloquio",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "noun",
        "article": "il",
        "plural": "colloqui",
        "definitions": [
            {
                "text": "Un incontro formale in cui a qualcuno vengono fatte domande per un lavoro.",
                "examples": [
                    "Ho un colloquio di lavoro lunedì."
                ]
            }
        ]
    },
    {
        "word": "contratto",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📄",
        "form": "noun",
        "article": "il",
        "plural": "contratti",
        "definitions": [
            {
                "text": "Un accordo scritto tra un datore di lavoro e un dipendente.",
                "examples": [
                    "Ha firmato un contratto di due anni."
                ]
            }
        ]
    },
    {
        "word": "scadenza",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "form": "noun",
        "article": "la",
        "plural": "scadenze",
        "definitions": [
            {
                "text": "L'ultimo momento entro il quale un lavoro deve essere terminato.",
                "examples": [
                    "La scadenza è venerdì."
                ]
            }
        ]
    },
    {
        "word": "esperienza",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧠",
        "form": "noun",
        "article": "l'",
        "plural": "esperienze",
        "definitions": [
            {
                "text": "Conoscenza o abilità acquisita facendo qualcosa.",
                "examples": [
                    "Ha cinque anni di esperienza."
                ]
            }
        ]
    },
    {
        "word": "mutuo",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏠",
        "form": "noun",
        "article": "il",
        "plural": "mutui",
        "definitions": [
            {
                "text": "Un prestito da una banca per comprare una casa o un appartamento.",
                "examples": [
                    "Hanno un mutuo alto."
                ]
            }
        ]
    },
    {
        "word": "prestito",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "💰",
        "form": "noun",
        "article": "il",
        "plural": "prestiti",
        "definitions": [
            {
                "text": "Denaro preso in prestito da una banca che deve essere restituito.",
                "examples": [
                    "Ha chiesto un prestito per comprare un'auto."
                ]
            }
        ]
    },
    {
        "word": "bolletta",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🧾",
        "form": "noun",
        "article": "la",
        "plural": "bollette",
        "definitions": [
            {
                "text": "Un documento che mostra quanto denaro devi pagare.",
                "examples": [
                    "Pago la bolletta della luce ogni mese."
                ]
            }
        ]
    },
    {
        "word": "debito",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "noun",
        "article": "il",
        "plural": "debiti",
        "definitions": [
            {
                "text": "Denaro che devi a un'altra persona o a una banca.",
                "examples": [
                    "Ha molti debiti."
                ]
            }
        ]
    },
    {
        "word": "conto",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏦",
        "form": "noun",
        "article": "il",
        "plural": "conti",
        "definitions": [
            {
                "text": "Un accordo con una banca per depositare i tuoi soldi.",
                "examples": [
                    "Ho un conto di risparmio."
                ]
            }
        ]
    },
    {
        "word": "bilancio",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "noun",
        "article": "il",
        "plural": "bilanci",
        "definitions": [
            {
                "text": "Un piano su come spendere il denaro.",
                "examples": [
                    "Abbiamo bisogno di un bilancio mensile."
                ]
            }
        ]
    },
    {
        "word": "dieta",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "🥗",
        "form": "noun",
        "article": "la",
        "plural": "diete",
        "definitions": [
            {
                "text": "Il cibo che una persona mangia normalmente; o un piano alimentare speciale.",
                "examples": [
                    "Segue una dieta sana."
                ]
            }
        ]
    },
    {
        "word": "appuntamento",
        "level": "elementary",
        "theme": "medical_appointments_A1",
        "emoji": "📅",
        "form": "noun",
        "article": "l'",
        "plural": "appuntamenti",
        "definitions": [
            {
                "text": "Un momento che organizzi per incontrare qualcuno, ad esempio un medico.",
                "examples": [
                    "Ho un appuntamento dal medico martedì."
                ]
            }
        ]
    },
    {
        "word": "vitamina",
        "level": "elementary",
        "theme": "diet_nutrition_A2",
        "emoji": "💊",
        "form": "noun",
        "article": "la",
        "plural": "vitamine",
        "definitions": [
            {
                "text": "Una sostanza naturale negli alimenti di cui il tuo corpo ha bisogno per stare in salute.",
                "examples": [
                    "Le arance contengono vitamina C."
                ]
            }
        ]
    },
    {
        "word": "dolore",
        "level": "elementary",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "form": "noun",
        "article": "il",
        "plural": "dolori",
        "definitions": [
            {
                "text": "Una sensazione spiacevole nel corpo quando qualcosa non va.",
                "examples": [
                    "Ha dolore alla schiena."
                ]
            }
        ]
    },
    {
        "word": "sostegno",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "article": "il",
        "plural": "sostegni",
        "definitions": [
            {
                "text": "Aiuto o incoraggiamento dato a qualcuno.",
                "examples": [
                    "Ho bisogno del tuo sostegno."
                ]
            }
        ]
    },
    {
        "word": "fiducia",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "article": "la",
        "definitions": [
            {
                "text": "Il credere che qualcuno sia onesto e affidabile.",
                "examples": [
                    "La fiducia è importante in una relazione."
                ]
            }
        ]
    },
    {
        "word": "compromesso",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤝",
        "form": "noun",
        "article": "il",
        "plural": "compromessi",
        "definitions": [
            {
                "text": "Un accordo in cui entrambe le parti accettano meno di quanto volevano.",
                "examples": [
                    "Le buone relazioni hanno bisogno di compromessi."
                ]
            }
        ]
    },
    {
        "word": "viaggio",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "🛤️",
        "form": "noun",
        "article": "il",
        "plural": "viaggi",
        "definitions": [
            {
                "text": "Spostamento da un luogo a un altro.",
                "examples": [
                    "Il viaggio verso il lavoro dura 40 minuti."
                ]
            }
        ]
    },
    {
        "word": "all'estero",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "✈️",
        "form": "adverb",
        "definitions": [
            {
                "text": "In o verso un altro paese.",
                "examples": [
                    "Vanno all'estero ogni estate."
                ]
            }
        ]
    },
    {
        "word": "destinazione",
        "level": "elementary",
        "theme": "holiday_types_A2",
        "emoji": "📍",
        "form": "noun",
        "article": "la",
        "plural": "destinazioni",
        "definitions": [
            {
                "text": "Il luogo verso cui stai viaggiando.",
                "examples": [
                    "Parigi è una destinazione popolare."
                ]
            }
        ]
    },
    {
        "word": "volo",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "✈️",
        "form": "noun",
        "article": "il",
        "plural": "voli",
        "definitions": [
            {
                "text": "Uno spostamento fatto in aereo.",
                "examples": [
                    "Il volo per Londra dura due ore."
                ]
            }
        ]
    },
    {
        "word": "bagagli",
        "level": "elementary",
        "theme": "at_the_airport_A2",
        "emoji": "🧳",
        "form": "noun",
        "article": "i",
        "plural": "bagagli",
        "definitions": [
            {
                "text": "Borse e valigie che porti con te quando viaggi.",
                "examples": [
                    "Ha molti bagagli."
                ]
            }
        ]
    },
    {
        "word": "quartiere",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "🏘️",
        "form": "noun",
        "article": "il",
        "plural": "quartieri",
        "definitions": [
            {
                "text": "L'area intorno alla tua casa.",
                "examples": [
                    "Viviamo in un quartiere sicuro."
                ]
            }
        ]
    },
    {
        "word": "comunità",
        "level": "elementary",
        "theme": "community_neighbourhood_local_A2",
        "emoji": "👥",
        "form": "noun",
        "article": "la",
        "plural": "comunità",
        "definitions": [
            {
                "text": "Un gruppo di persone che vivono nella stessa area o condividono interessi.",
                "examples": [
                    "È attiva nella sua comunità locale."
                ]
            }
        ]
    },
    {
        "word": "inquinamento",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🏭",
        "form": "noun",
        "article": "l'",
        "definitions": [
            {
                "text": "Danno all'ambiente causato da sostanze nocive.",
                "examples": [
                    "L'inquinamento dell'aria è un grosso problema qui."
                ]
            }
        ]
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
