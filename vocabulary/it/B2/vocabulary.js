(function() {
    const data = [
    {
        "id": "it_upper_intermediate_health_society_001",
        "lang": "it",
        "word": "psicologo",
        "level": "upper_intermediate",
        "theme": "health_society",
        "article": "lo",
        "emoji": "🧠",
        "form": "noun", "classification": "regular",
        "plural": "psicologi",
        "definitions": [
            {
                "text": "Una persona che studia il comportamento e la mente.",
                "examples": [
                    "Lo psicologo aiuta i pazienti."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_politics_governance_003",
        "lang": "it",
        "word": "responsabilità",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "la",
        "emoji": "📑",
        "form": "noun", "classification": "regular",
        "plural": "responsabilità",
        "subtext": "obbligo di rendere conto",
        "definitions": [
            {
                "text": "Il fatto di essere responsabile e dover spiegare le proprie azioni.",
                "examples": [
                    "C'è poca responsabilità in quell'organizzazione."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_economy_labour_market_001",
        "lang": "it",
        "word": "incentivo",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "article": "l'",
        "emoji": "🥕",
        "form": "noun", "classification": "regular",
        "plural": "incentivi",
        "subtext": "incentivo finanziario, stimolo",
        "definitions": [
            {
                "text": "Qualcosa che motiva una persona a compiere una particolare azione.",
                "examples": [
                    "Gli incentivi finanziari possono migliorare la produttività."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_employment_law_rights_001",
        "lang": "it",
        "word": "autonomia",
        "level": "upper_intermediate",
        "theme": "employment_law_rights",
        "article": "l'",
        "emoji": "🔓",
        "form": "noun", "classification": "regular",
        "plural": "autonomie",
        "subtext": "indipendenza, libertà di scelta",
        "antonyms": ["dipendenza"],
        "definitions": [
            {
                "text": "Il diritto o la capacità di agire in modo indipendente.",
                "examples": [
                    "I dipendenti lavorano meglio quando hanno autonomia."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_economy_labour_market_002",
        "lang": "it",
        "word": "precarietà",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "article": "la",
        "emoji": "🧗",
        "form": "noun", "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": ["instabilità lavorativa"],
        "antonyms": ["stabilità"],
        "definitions": [
            {
                "text": "Uno stato insicuro e incerto di occupazione o condizioni di vita.",
                "examples": [
                    "La gig economy ha aumentato la precarietà del lavoro."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_gender_equality_001",
        "lang": "it",
        "word": "divario retributivo",
        "level": "upper_intermediate",
        "theme": "gender_equality",
        "article": "il",
        "emoji": "⚖️📉",
        "form": "noun phrase",
        "plural": "divari retributivi",
        "subtext": "",
        "synonyms": ["gender pay gap"],
        "definitions": [
            {
                "text": "Una differenza nei guadagni medi tra gruppi, specialmente tra uomini e donne.",
                "examples": [
                    "Il divario retributivo di genere rimane significativo in molti settori."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_employment_law_rights_002",
        "lang": "it",
        "word": "pacchetto di licenziamento",
        "level": "upper_intermediate",
        "theme": "employment_law_rights",
        "article": "il",
        "emoji": "📦",
        "form": "noun phrase",
        "plural": "pacchetti di licenziamento",
        "subtext": "",
        "synonyms": ["buonuscita", "indennità"],
        "definitions": [
            {
                "text": "Il denaro e i benefici concessi quando qualcuno perde il lavoro.",
                "examples": [
                    "Ha ricevuto un generoso pacchetto di licenziamento."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_economy_labour_market_003",
        "lang": "it",
        "word": "imprenditorialità",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "article": "l'",
        "emoji": "💡",
        "form": "noun", "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": ["spirito imprenditoriale"],
        "definitions": [
            {
                "text": "L'attività di avviare e gestire un'azienda.",
                "examples": [
                    "L'imprenditorialità richiede assunzione di rischi e creatività."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_economy_labour_market_004",
        "lang": "it",
        "word": "produttività",
        "level": "upper_intermediate",
        "theme": "economy_labour_market",
        "article": "la",
        "emoji": "⚡",
        "form": "noun", "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": ["efficienza", "rendimento"],
        "definitions": [
            {
                "text": "Il ritmo con cui vengono prodotti i beni o viene completato il lavoro.",
                "examples": [
                    "Il lavoro a distanza può aumentare la produttività per alcune persone."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_globalisation_trade_001",
        "lang": "it",
        "word": "esternalizzazione",
        "level": "upper_intermediate",
        "theme": "globalisation_trade",
        "article": "l'",
        "emoji": "🌐",
        "form": "noun", "classification": "regular",
        "plural": "esternalizzazioni",
        "subtext": "",
        "synonyms": ["outsourcing", "subappalto"],
        "definitions": [
            {
                "text": "Affidare a un'azienda esterna lavori precedentemente svolti internamente.",
                "examples": [
                    "Stanno esternalizzando il servizio clienti per ridurre i costi."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_applied_sciences_engineering_001",
        "lang": "it",
        "word": "automazione",
        "level": "upper_intermediate",
        "theme": "applied_sciences_engineering",
        "article": "l'",
        "emoji": "🤖",
        "form": "noun", "classification": "regular",
        "plural": "automazioni",
        "subtext": "automazione industriale",
        "definitions": [
            {
                "text": "L'uso di macchine o computer per svolgere lavori precedentemente fatti da persone.",
                "examples": [
                    "L'automazione sta cambiando significativamente il mercato del lavoro."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_housing_society_001",
        "lang": "it",
        "word": "gentrificazione",
        "level": "upper_intermediate",
        "theme": "housing_society",
        "article": "la",
        "emoji": "🏘️📈",
        "form": "noun", "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": ["riqualificazione urbana", "imborghesimento"],
        "definitions": [
            {
                "text": "Processo di trasformazione di un quartiere popolare in zona residenziale di pregio.",
                "examples": [
                    "La gentrificazione ha cambiato il carattere del quartiere."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_housing_society_002",
        "lang": "it",
        "word": "alloggi a prezzi accessibili",
        "level": "upper_intermediate",
        "theme": "housing_society",
        "article": "gli",
        "emoji": "🏠💰",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": ["edilizia convenzionata"],
        "definitions": [
            {
                "text": "Abitazioni abbastanza economiche da essere affittate o acquistate da persone a basso reddito.",
                "examples": [
                    "La città ha bisogno di più alloggi a prezzi accessibili."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_housing_society_003",
        "lang": "it",
        "word": "espansione urbana",
        "level": "upper_intermediate",
        "theme": "housing_society",
        "article": "l'",
        "emoji": "🏙️↔️",
        "form": "noun phrase",
        "plural": null,
        "subtext": "crescita incontrollata delle città",
        "definitions": [
            {
                "text": "La diffusione incontrollata delle città nelle aree circostanti.",
                "examples": [
                    "L'espansione urbana aumenta la dipendenza dall'auto."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_politics_governance_004",
        "lang": "it",
        "word": "infrastruttura",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "l'",
        "emoji": "🏗️",
        "form": "noun", "classification": "regular",
        "plural": "infrastrutture",
        "subtext": "",
        "synonyms": ["infrastrutture di trasporto"],
        "definitions": [
            {
                "text": "I sistemi fisici di base di un paese, come strade e servizi pubblici.",
                "examples": [
                    "L'infrastruttura della città ha bisogno di investimenti."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_politics_governance_005",
        "lang": "it",
        "word": "stato sociale",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "lo",
        "emoji": "🛡️🏛️",
        "form": "noun phrase",
        "plural": "stati sociali",
        "subtext": "welfare state, assistenza sociale",
        "definitions": [
            {
                "text": "Un sistema in cui il governo fornisce protezione sociale ai cittadini.",
                "examples": [
                    "Lo stato sociale fornisce assistenza sanitaria e pensioni."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_politics_governance_006",
        "lang": "it",
        "word": "polarizzazione",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "la",
        "emoji": "↔️❌",
        "form": "noun", "classification": "regular",
        "plural": "polarizzazioni",
        "subtext": "divisione in due campi opposti",
        "definitions": [
            {
                "text": "La divisione delle persone in gruppi opposti con opinioni molto diverse.",
                "examples": [
                    "I social media hanno aumentato la polarizzazione politica."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_formal_debate_vocab_002",
        "lang": "it",
        "word": "discorso",
        "level": "upper_intermediate",
        "theme": "formal_debate_vocab",
        "article": "il",
        "emoji": "🗣️",
        "form": "noun", "classification": "regular",
        "plural": "discorsi",
        "subtext": "",
        "synonyms": ["dibattito pubblico"],
        "definitions": [
            {
                "text": "Comunicazione scritta o parlata su un argomento particolare.",
                "examples": [
                    "Il discorso pubblico sull'immigrazione è molto acceso."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_politics_governance_007",
        "lang": "it",
        "word": "esame minuzioso",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "l'",
        "emoji": "🔍",
        "form": "noun phrase",
        "plural": "esami minuziosi",
        "subtext": "",
        "synonyms": ["scrutinio", "analisi attenta"],
        "definitions": [
            {
                "text": "Esame attento e accurato di qualcuno o qualcosa.",
                "examples": [
                    "La decisione del governo è sotto esame minuzioso."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_formal_debate_vocab_003",
        "lang": "it",
        "word": "consenso",
        "level": "upper_intermediate",
        "theme": "formal_debate_vocab",
        "article": "il",
        "emoji": "🤝",
        "form": "noun", "classification": "regular",
        "plural": "consensi",
        "subtext": "",
        "synonyms": ["accordo generale"],
        "definitions": [
            {
                "text": "Accordo generale tra un gruppo di persone.",
                "examples": [
                    "C'è un crescente consenso sull'azione per il clima."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_politics_governance_008",
        "lang": "it",
        "word": "legislazione",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "la",
        "emoji": "📜",
        "form": "noun", "classification": "regular",
        "plural": "legislazioni",
        "subtext": "",
        "synonyms": ["insieme di leggi"],
        "definitions": [
            {
                "text": "Leggi fatte da un governo.",
                "examples": [
                    "La nuova legislazione sulla privacy dei dati è entrata in vigore."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_formal_debate_vocab_004",
        "lang": "it",
        "word": "pregiudizio",
        "level": "upper_intermediate",
        "theme": "formal_debate_vocab",
        "article": "il",
        "emoji": "⚖️❌",
        "form": "noun", "classification": "regular",
        "plural": "pregiudizi",
        "subtext": "",
        "synonyms": ["bias", "parzialità"],
        "antonyms": ["imparzialità"],
        "definitions": [
            {
                "text": "Una tendenza ingiusta a favorire o opporsi a qualcuno o qualcosa.",
                "examples": [
                    "I pregiudizi inconsci possono influenzare le decisioni di assunzione."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_health_society_002",
        "lang": "it",
        "word": "obesità",
        "level": "upper_intermediate",
        "theme": "health_society",
        "article": "l'",
        "emoji": "⚖️⬆️",
        "form": "noun", "classification": "regular",
        "plural": null,
        "subtext": "",
        "synonyms": ["eccesso di peso"],
        "definitions": [
            {
                "text": "La condizione di essere eccessivamente sovrappeso al punto da danneggiare la salute.",
                "examples": [
                    "I tassi di obesità sono aumentati drasticamente negli ultimi decenni."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_health_society_003",
        "lang": "it",
        "word": "aspettativa di vita",
        "level": "upper_intermediate",
        "theme": "health_society",
        "article": "l'",
        "emoji": "⏳👴",
        "form": "noun phrase",
        "plural": "aspettative di vita",
        "subtext": "durata media della vita",
        "definitions": [
            {
                "text": "Il numero medio di anni che una persona dovrebbe vivere.",
                "examples": [
                    "L'aspettativa di vita è aumentata nella maggior parte dei paesi."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_politics_governance_009",
        "lang": "it",
        "word": "giustizia",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "la",
        "emoji": "⚖️",
        "form": "noun", "classification": "regular",
        "plural": null,
        "subtext": "giustizia sociale, sistema giudiziario",
        "antonyms": ["ingiustizia"],
        "definitions": [
            {
                "text": "Trattamento equo e qualità di essere giusti.",
                "examples": [
                    "Il sistema giudiziario dovrebbe proteggere tutti i cittadini."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_crime_punishment_001",
        "lang": "it",
        "word": "riabilitazione",
        "level": "upper_intermediate",
        "theme": "crime_punishment",
        "article": "la",
        "emoji": "🔄🏢",
        "form": "noun", "classification": "regular",
        "plural": "riabilitazioni",
        "subtext": "",
        "synonyms": ["reintegro sociale", "rieducazione"],
        "definitions": [
            {
                "text": "Il processo per aiutare qualcuno a tornare a una vita normale dopo un crimine o una malattia.",
                "examples": [
                    "Il carcere dovrebbe concentrarsi sulla riabilitazione."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_politics_governance_010",
        "lang": "it",
        "word": "trasparenza",
        "level": "upper_intermediate",
        "theme": "politics_governance",
        "article": "la",
        "emoji": "🪟",
        "form": "noun", "classification": "regular",
        "plural": "trasparenze",
        "subtext": "maggiore trasparenza, chiarezza",
        "antonyms": ["opacità"],
        "definitions": [
            {
                "text": "Essere aperti e onesti riguardo ad azioni e decisioni.",
                "examples": [
                    "Il pubblico chiede maggiore trasparenza ai politici."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_technology_privacy_001",
        "lang": "it",
        "word": "algoritmo",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "article": "l'",
        "emoji": "💻",
        "form": "noun", "classification": "regular",
        "plural": "algoritmi",
        "subtext": "algoritmo informatico",
        "definitions": [
            {
                "text": "Un insieme di regole seguite da un computer per risolvere un problema.",
                "examples": [
                    "Gli algoritmi dei social media determinano ciò che vedi."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_technology_privacy_002",
        "lang": "it",
        "word": "privacy dei dati",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "article": "la",
        "emoji": "🔒",
        "form": "noun phrase",
        "plural": null,
        "subtext": "",
        "synonyms": ["protezione dei dati"],
        "definitions": [
            {
                "text": "Il diritto di controllare il modo in cui le informazioni personali vengono raccolte.",
                "examples": [
                    "Le leggi sulla privacy dei dati stanno diventando più severe."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_media_misinformation_001",
        "lang": "it",
        "word": "disinformazione",
        "level": "upper_intermediate",
        "theme": "media_misinformation",
        "article": "la",
        "emoji": "🤥",
        "form": "noun", "classification": "regular",
        "plural": null,
        "subtext": "fake news, informazioni errate",
        "definitions": [
            {
                "text": "Informazioni false o imprecise diffuse ampiamente.",
                "examples": [
                    "I social media possono diffondere rapidamente la disinformazione."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_technology_privacy_003",
        "lang": "it",
        "word": "sorveglianza",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "article": "la",
        "emoji": "📹",
        "form": "noun", "classification": "regular",
        "plural": "sorveglianze",
        "subtext": "sorveglianza di massa",
        "definitions": [
            {
                "text": "Osservazione ravvicinata di una persona o di un gruppo da parte delle autorità.",
                "examples": [
                    "CCTV è una forma di sorveglianza urbana."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_formal_debate_vocab_005",
        "lang": "it",
        "word": "mentre",
        "level": "upper_intermediate",
        "theme": "formal_debate_vocab",
        "emoji": "⚖️",
        "form": "conjunction",
        "subtext": "",
        "synonyms": ["laddove"],
        "definitions": [
            {
                "text": "In contrasto con il fatto che; mentre al contrario.",
                "examples": [
                    "Le città sono costose, mentre i piccoli paesi sono accessibili."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_formal_debate_vocab_006",
        "lang": "it",
        "word": "ciononostante",
        "level": "upper_intermediate",
        "theme": "formal_debate_vocab",
        "emoji": "🏃‍♂️",
        "form": "adverb",
        "subtext": "",
        "synonyms": ["tuttavia", "nondimeno"],
        "definitions": [
            {
                "text": "Nonostante ciò; malgrado quanto detto.",
                "examples": [
                    "È un compito difficile. Ciononostante, dobbiamo provare."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_formal_debate_vocab_007",
        "lang": "it",
        "word": "fino a che punto",
        "level": "upper_intermediate",
        "theme": "formal_debate_vocab",
        "emoji": "📏",
        "form": "phrase",
        "definitions": [
            {
                "text": "Usato per chiedere o discutere quanto qualcosa sia vero.",
                "examples": [
                    "Fino a che punto l'istruzione determina il successo?"
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_formal_debate_vocab_008",
        "lang": "it",
        "word": "per contro",
        "level": "upper_intermediate",
        "theme": "formal_debate_vocab",
        "emoji": "🌓",
        "form": "phrase",
        "subtext": "",
        "synonyms": ["al contrario", "invece"],
        "definitions": [
            {
                "text": "Usato per mostrare una differenza tra due cose.",
                "examples": [
                    "La Svezia ha un lungo congedo parentale. Per contro, gli USA ne hanno pochissimo."
                ]
            }
        ]
    },
    {
        "id": "it_upper_intermediate_technology_privacy_004",
        "lang": "it",
        "word": "intelligenza artificiale",
        "level": "upper_intermediate",
        "theme": "technology_privacy",
        "article": "l'",
        "emoji": "🤖",
        "form": "noun phrase",
        "plural": "intelligenze artificiali",
        "definitions": [
            {
                "text": "Sistemi informatici in grado di simulare l'intelligenza umana.",
                "examples": [
                    "L'intelligenza artificiale sta cambiando il mondo."
                ]
            }
        ]
    }
    ];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
