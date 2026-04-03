(function() {
    const data = [
    {
        "word": "bello",
        "feminine": "bella",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "✨",
        "form": "adjective",
        "plural": "belli",
        "femininePlural": "belle",
        "definitions": [
            {
                "text": "Gradevole alla vista o allo spirito.",
                "examples": [
                    "La vista dalla cima della montagna era bellissima."
                ]
            }
        ],
        "subtext": "molto bello",
        "synonyms": ["una bella giornata", "bella vista"],
        "comparative": "più bello",
        "superlative": "il più bello",
        "opposite": "brutto"
    },
    {
        "word": "forte",
        "feminine": "forte",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "💪",
        "form": "adjective",
        "plural": "forti",
        "femininePlural": "forti",
        "definitions": [
            {
                "text": "Che ha forza fisica o morale.",
                "examples": [
                    "È un forte nuotatore e può attraversare il lago facilmente."
                ]
            }
        ],
        "subtext": "molto forte / abbastanza forte",
        "synonyms": ["muscoli forti"],
        "comparative": "più forte",
        "superlative": "il più forte",
        "opposite": "debole"
    },
    {
        "word": "biondo",
        "feminine": "bionda",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "👱",
        "form": "adjective",
        "plural": "biondi",
        "femininePlural": "bionde",
        "definitions": [
            {
                "text": "Che ha i capelli di colore giallo chiaro.",
                "examples": [
                    "Ha lunghi capelli biondi e occhi azzurri."
                ]
            }
        ],
        "subtext": "biondo naturale / biondo chiaro",
        "synonyms": ["capelli biondi"],
        "comparative": "più biondo",
        "superlative": "il più biondo",
        "opposite": "moro"
    },
    {
        "word": "nevoso",
        "feminine": "nevosa",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective",
        "plural": "nevosi",
        "femininePlural": "nevose",
        "definitions": [
            {
                "text": "Coperto di neve o caratterizzato dalla neve.",
                "examples": [
                    "Era una mattina nevosa, così i bambini sono usciti a giocare."
                ]
            }
        ],
        "subtext": "tempo nevoso / freddo e nevoso",
        "synonyms": ["giornata nevosa"],
        "comparative": "più nevoso",
        "superlative": "il più nevoso",
        "opposite": "sereno"
    },
    {
        "word": "ventoso",
        "feminine": "ventosa",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective",
        "plural": "ventosi",
        "femininePlural": "ventose",
        "definitions": [
            {
                "text": "Esposto al vento o caratterizzato dal vento.",
                "examples": [
                    "C'è molto vento oggi, quindi fai attenzione con l'ombrello."
                ]
            }
        ],
        "subtext": "molto ventoso / freddo e ventoso",
        "synonyms": ["giornata ventosa"],
        "comparative": "più ventoso",
        "superlative": "il più ventoso",
        "opposite": "calmo"
    },
    {
        "word": "nuvoloso",
        "feminine": "nuvolosa",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "nuvolosi",
        "femininePlural": "nuvolose",
        "definitions": [
            {
                "text": "Coperto di nuvole.",
                "examples": [
                    "È un pomeriggio nuvoloso, ma potrebbe non piovere."
                ]
            }
        ],
        "subtext": "cielo nuvoloso / molto nuvoloso / parzialmente nuvoloso",
        "comparative": "più nuvoloso",
        "superlative": "il più nuvoloso",
        "opposite": "sereno"
    },
    {
        "word": "atletico",
        "feminine": "atletica",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "atletici",
        "femininePlural": "atletiche",
        "definitions": [
            {
                "text": "Che ha il fisico di un atleta; robusto.",
                "examples": [
                    "Ha un fisico atletico perché gioca a calcio ogni giorno."
                ]
            }
        ],
        "subtext": "fisico atletico / molto atletico",
        "synonyms": ["prestazione atletica"],
        "comparative": "più atletico",
        "superlative": "il più atletico",
        "opposite": "pigro"
    },
    {
        "word": "in forma",
        "feminine": "in forma",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "plural": "in forma",
        "femininePlural": "in forma",
        "definitions": [
            {
                "text": "In buona condizione fisica.",
                "examples": [
                    "Si mantiene in forma andando in palestra tre volte a settimana."
                ]
            }
        ],
        "subtext": "fisicamente in forma / molto in forma / restare in forma",
        "comparative": "più in forma",
        "superlative": "il più in forma",
        "opposite": "fuori forma"
    },
    {
        "word": "sovrappeso",
        "feminine": "sovrappeso",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "plural": "sovrappeso",
        "femininePlural": "sovrappeso",
        "definitions": [
            {
                "text": "Che pesa più di quanto sia considerato sano.",
                "examples": [
                    "Il medico gli ha detto che era leggermente in sovrappeso."
                ]
            }
        ],
        "subtext": "leggermente in sovrappeso / diventare in sovrappeso / clinicamente in sovrappeso",
        "comparative": "più in sovrappeso",
        "superlative": "il più in sovrappeso",
        "opposite": "sottopeso"
    },
    {
        "word": "comodo",
        "feminine": "comoda",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "plural": "comodi",
        "femininePlural": "comode",
        "definitions": [
            {
                "text": "Facile da usare o ben posizionato.",
                "examples": [
                    "L'ufficio è in una posizione comoda vicino alla stazione."
                ]
            }
        ],
        "subtext": "molto comodo / un orario comodo",
        "synonyms": ["situato comodamente"],
        "comparative": "più comodo",
        "superlative": "il più comodo",
        "opposite": "scomodo"
    },
    {
        "word": "stressante",
        "feminine": "stressante",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "plural": "stressanti",
        "femininePlural": "stressanti",
        "definitions": [
            {
                "text": "Che causa preoccupazione o ansia.",
                "examples": [
                    "Il suo lavoro è molto stressante."
                ]
            }
        ],
        "subtext": "un lavoro stressante / molto stressante / situazione stressante",
        "comparative": "più stressante",
        "superlative": "il più stressante",
        "opposite": "rilassante"
    },
    {
        "word": "confortevole",
        "feminine": "confortevole",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "plural": "confortevoli",
        "femininePlural": "confortevoli",
        "definitions": [
            {
                "text": "Che offre benessere fisico.",
                "examples": [
                    "Le nuove sedie sono molto più confortevoli."
                ]
            }
        ],
        "subtext": "molto confortevole / a proprio agio con / sentirsi confortevole",
        "comparative": "più confortevole",
        "superlative": "il più confortevole",
        "opposite": "scomodo"
    },
    {
        "word": "pratico",
        "feminine": "pratica",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "plural": "pratici",
        "femininePlural": "pratiche",
        "definitions": [
            {
                "text": "Utile in situazioni reali; sensato.",
                "examples": [
                    "Ha dato consigli molto pratici."
                ]
            }
        ],
        "subtext": "molto pratico / altamente pratico",
        "synonyms": ["una soluzione pratica"],
        "comparative": "più pratico",
        "superlative": "il più pratico",
        "opposite": "impratico"
    },
    {
        "word": "popolare",
        "feminine": "popolare",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "popolari",
        "femininePlural": "popolari",
        "definitions": [
            {
                "text": "Amato o apprezzato da molte persone.",
                "examples": [
                    "Questo ristorante è molto popolare."
                ]
            }
        ],
        "subtext": "molto popolare / scelta popolare / una persona popolare",
        "comparative": "più popolare",
        "superlative": "il più popolare",
        "opposite": "impopolare"
    },
    {
        "word": "occupato",
        "feminine": "occupata",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "occupati",
        "femininePlural": "occupate",
        "definitions": [
            {
                "text": "Che ha molto lavoro o attività.",
                "examples": [
                    "Ha un programma occupato questa settimana con tre visite ai clienti."
                ]
            }
        ],
        "subtext": "molto occupato / troppo occupato per parlare",
        "synonyms": ["una giornata impegnativa"],
        "comparative": "più occupato",
        "superlative": "il più occupato",
        "opposite": "libero"
    },
    {
        "word": "flessibile",
        "feminine": "flessibile",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧘",
        "form": "adjective",
        "plural": "flessibili",
        "femininePlural": "flessibili",
        "definitions": [
            {
                "text": "Capace di cambiare e adattarsi facilmente a diverse situazioni.",
                "examples": [
                    "L'azienda offre orari di lavoro flessibili."
                ]
            }
        ],
        "subtext": "approccio flessibile / molto flessibile",
        "synonyms": ["orari flessibili"],
        "comparative": "più flessibile",
        "superlative": "il più flessibile",
        "opposite": "rigido"
    },
    {
        "word": "organizzato",
        "feminine": "organizzata",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📁",
        "form": "adjective",
        "plural": "organizzati",
        "femininePlural": "organizzate",
        "definitions": [
            {
                "text": "Capace di pianificare e gestire le cose in modo ordinato.",
                "examples": [
                    "Devi essere molto organizzato per rispettare ogni scadenza."
                ]
            }
        ],
        "subtext": "ben organizzato / molto organizzato / restare organizzato",
        "comparative": "più organizzato",
        "superlative": "il più organizzato",
        "opposite": "disorganizzato"
    },
    {
        "word": "professionale",
        "feminine": "professionale",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👔",
        "form": "adjective",
        "plural": "professionali",
        "femininePlural": "professionali",
        "definitions": [
            {
                "text": "Comportarsi in modo competente e appropriato per un lavoro.",
                "examples": [
                    "Appare sempre molto professionale nelle riunioni."
                ]
            }
        ],
        "subtext": "consulenza professionale / molto professionale / altamente professionale",
        "comparative": "più professionale",
        "superlative": "il più professionale",
        "opposite": "dilettantesco"
    },
    {
        "word": "responsabile",
        "feminine": "responsabile",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🛡️",
        "form": "adjective",
        "plural": "responsabili",
        "femininePlural": "responsabili",
        "definitions": [
            {
                "text": "Che ha il dovere di occuparsi di qualcosa; affidabile.",
                "examples": [
                    "È responsabile dell'intero budget di marketing."
                ]
            }
        ],
        "subtext": "responsabile di / molto responsabile / altamente responsabile",
        "comparative": "più responsabile",
        "superlative": "il più responsabile",
        "opposite": "irresponsabile"
    },
    {
        "word": "esperto",
        "feminine": "esperta",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎓",
        "form": "adjective",
        "plural": "esperti",
        "femininePlural": "esperte",
        "definitions": [
            {
                "text": "Che ha conoscenze e abilità derivanti dalla pratica.",
                "examples": [
                    "L'azienda ha bisogno di un project manager esperto."
                ]
            }
        ],
        "subtext": "molto esperto / esperto in / abbastanza esperto",
        "comparative": "più esperto",
        "superlative": "il più esperto",
        "opposite": "inesperto"
    },
    {
        "word": "qualificato",
        "feminine": "qualificata",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "✅",
        "form": "adjective",
        "plural": "qualificati",
        "femininePlural": "qualificate",
        "definitions": [
            {
                "text": "Che ha le competenze o la formazione necessarie.",
                "examples": [
                    "È pienamente qualificata per guidare il team."
                ]
            }
        ],
        "subtext": "pienamente qualificato / ben qualificato / altamente qualificato",
        "comparative": "più qualificato",
        "superlative": "il più qualificato",
        "opposite": "non qualificato"
    },
    {
        "word": "disponibile",
        "feminine": "disponibile",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🙋",
        "form": "adjective",
        "plural": "disponibili",
        "femininePlural": "disponibili",
        "definitions": [
            {
                "text": "Libero; capace di essere usato o raggiunto.",
                "examples": [
                    "Il manager è disponibile per un incontro alle tre?"
                ]
            }
        ],
        "subtext": "ampiamente disponibile / liberamente disponibile / disponibile per",
        "comparative": "più disponibile",
        "superlative": "il più disponibile",
        "opposite": "indisponibile"
    },
    {
        "word": "di successo",
        "feminine": "di successo",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "adjective",
        "plural": "di successo",
        "femininePlural": "di successo",
        "definitions": [
            {
                "text": "Che ha ottenuto il risultato desiderato.",
                "examples": [
                    "Ha avuto un primo anno di grande successo nel ruolo."
                ]
            }
        ],
        "subtext": "una carriera di successo",
        "synonyms": ["di grande successo", "molto vincente"],
        "comparative": "di maggior successo",
        "superlative": "di massimo successo",
        "opposite": "fallimentare"
    },
    {
        "word": "ambizioso",
        "feminine": "ambiziosa",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚀",
        "form": "adjective",
        "plural": "ambiziosi",
        "femininePlural": "ambiziose",
        "definitions": [
            {
                "text": "Che ha un forte desiderio di riuscire.",
                "examples": [
                    "È molto ambizioso e vuole diventare direttore entro i quaranta anni."
                ]
            }
        ],
        "subtext": "molto ambizioso / estremamente ambizioso / un piano ambizioso",
        "comparative": "più ambizioso",
        "superlative": "il più ambizioso",
        "opposite": "senza ambizioni"
    },
    {
        "word": "creativo",
        "feminine": "creativa",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🎨",
        "form": "adjective",
        "plural": "creativi",
        "femininePlural": "creative",
        "definitions": [
            {
                "text": "Capace di produrre idee nuove e originali.",
                "examples": [
                    "Il team di progettazione è molto creativo e laborioso."
                ]
            }
        ],
        "subtext": "molto creativo / pensiero creativo",
        "synonyms": ["soluzione creativa"],
        "comparative": "più creativo",
        "superlative": "il più creativo",
        "opposite": "poco creativo"
    },
    {
        "word": "produttivo",
        "feminine": "produttiva",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⚙️",
        "form": "adjective",
        "plural": "produttivi",
        "femininePlural": "produttive",
        "definitions": [
            {
                "text": "Che fa o produce molto lavoro utile.",
                "examples": [
                    "È più produttiva nelle prime ore del mattino."
                ]
            }
        ],
        "subtext": "molto produttivo / altamente produttivo",
        "synonyms": ["una riunione produttiva"],
        "comparative": "più produttivo",
        "superlative": "il più produttivo",
        "opposite": "improduttivo"
    },
    {
        "word": "affidabile",
        "feminine": "affidabile",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "affidabili",
        "femininePlural": "affidabili",
        "definitions": [
            {
                "text": "Su cui si può contare; degno di fiducia.",
                "examples": [
                    "È la persona più affidabile del team."
                ]
            }
        ],
        "subtext": "molto affidabile / altamente affidabile / una fonte affidabile",
        "comparative": "più affidabile",
        "superlative": "il più affidabile",
        "opposite": "inaffidabile"
    },
    {
        "word": "indipendente",
        "feminine": "indipendente",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🦅",
        "form": "adjective",
        "plural": "indipendenti",
        "femininePlural": "indipendenti",
        "definitions": [
            {
                "text": "Che non ha bisogno dell'aiuto o del sostegno di altri.",
                "examples": [
                    "È molto indipendente e gestisce il proprio carico di lavoro."
                ]
            }
        ],
        "subtext": "finanziariamente indipendente / molto indipendente / un rapporto indipendente",
        "comparative": "più indipendente",
        "superlative": "il più indipendente",
        "opposite": "dipendente"
    },
    {
        "word": "economico",
        "feminine": "economica",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏷️",
        "form": "adjective",
        "plural": "economici",
        "femininePlural": "economiche",
        "definitions": [
            {
                "text": "A basso prezzo; non costoso.",
                "examples": [
                    "Questa soluzione è molto più economica rispetto all'assunzione di personale extra."
                ]
            }
        ],
        "subtext": "molto economico / semplice ed economico",
        "synonyms": ["opzione economica"],
        "comparative": "più economico",
        "superlative": "il più economico",
        "opposite": "costoso"
    },
    {
        "word": "costoso",
        "feminine": "costosa",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💎",
        "form": "adjective",
        "plural": "costosi",
        "femininePlural": "costose",
        "definitions": [
            {
                "text": "A prezzo elevato; che costa molto.",
                "examples": [
                    "L'ufficio in centro è estremamente costoso."
                ]
            }
        ],
        "subtext": "molto costoso / troppo costoso",
        "synonyms": ["gusti costosi"],
        "comparative": "più costoso",
        "superlative": "il più costoso",
        "opposite": "economico"
    },
    {
        "word": "accessibile",
        "feminine": "accessibile",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💵",
        "form": "adjective",
        "plural": "accessibili",
        "femininePlural": "accessibili",
        "definitions": [
            {
                "text": "Alla portata delle tasche della maggior parte delle persone.",
                "examples": [
                    "Cercano uffici a prezzi accessibili."
                ]
            }
        ],
        "subtext": "prezzo accessibile / più accessibile / opzione accessibile",
        "comparative": "più accessibile",
        "superlative": "il più accessibile",
        "opposite": "inaccessibile"
    },
    {
        "word": "valere la pena",
        "feminine": "valere la pena",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "adjective",
        "plural": "valere la pena",
        "femininePlural": "valere la pena",
        "definitions": [
            {
                "text": "Che ha un valore uguale a o merita.",
                "examples": [
                    "L'investimento ne vale ogni centesimo."
                ]
            }
        ],
        "subtext": "vale la pena farlo / vale la pena considerare",
        "synonyms": ["vale i soldi"],
        "comparative": "più valere la pena",
        "superlative": "il più valere la pena",
        "opposite": "senza valore"
    },
    {
        "word": "gratuito",
        "feminine": "gratuita",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🎁",
        "form": "adjective",
        "plural": "gratuiti",
        "femininePlural": "gratuite",
        "definitions": [
            {
                "text": "Che non costa nulla.",
                "examples": [
                    "Il parcheggio è gratuito per tutti i dipendenti."
                ]
            }
        ],
        "subtext": "gratuito / completamente gratuito",
        "synonyms": ["prova gratuita"],
        "comparative": "più gratuito",
        "superlative": "il più gratuito",
        "opposite": "a pagamento"
    },
    {
        "word": "al verde",
        "feminine": "al verde",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📉",
        "form": "adjective",
        "plural": "al verde",
        "femininePlural": "al verde",
        "definitions": [
            {
                "text": "Senza soldi; informale.",
                "examples": [
                    "Ha speso troppo ed è completamente al verde."
                ]
            }
        ],
        "subtext": "completamente al verde / restare al verde / essere al verde",
        "comparative": "più al verde",
        "superlative": "il più al verde",
        "opposite": "ricco"
    },
    {
        "word": "ricco",
        "feminine": "ricca",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏦",
        "form": "adjective",
        "plural": "ricchi",
        "femininePlural": "ricche",
        "definitions": [
            {
                "text": "Che ha molti soldi.",
                "examples": [
                    "È diventata molto ricca dopo aver venduto la sua azienda."
                ]
            }
        ],
        "subtext": "molto ricco / abbastanza ricco / immensamente ricco",
        "comparative": "più ricco",
        "superlative": "il più ricco",
        "opposite": "povero"
    },
    {
        "word": "povero",
        "feminine": "povera",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏚️",
        "form": "adjective",
        "plural": "poveri",
        "femininePlural": "povere",
        "definitions": [
            {
                "text": "Che ha pochissimi soldi.",
                "examples": [
                    "L'azienda è nata molto povera e si è costruita da sola."
                ]
            }
        ],
        "subtext": "molto povero / estremamente povero",
        "synonyms": ["di scarsa qualità"],
        "comparative": "più povero",
        "superlative": "il più povero",
        "opposite": "ricco"
    },
    {
        "word": "sano",
        "feminine": "sana",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍎",
        "form": "adjective",
        "plural": "sani",
        "femininePlural": "sane",
        "definitions": [
            {
                "text": "In buona salute; che fa bene.",
                "examples": [
                    "Segue uno stile di vita sano fuori dal lavoro."
                ]
            }
        ],
        "subtext": "molto sano / restare sano",
        "synonyms": ["dieta sana"],
        "comparative": "più sano",
        "superlative": "il più sano",
        "opposite": "malsano"
    },
    {
        "word": "malsano",
        "feminine": "malsana",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍔",
        "form": "adjective",
        "plural": "malsani",
        "femininePlural": "malsane",
        "definitions": [
            {
                "text": "Non buono per la salute.",
                "examples": [
                    "Stare seduti alla scrivania tutto il giorno è malsano."
                ]
            }
        ],
        "subtext": "molto malsano / profondamente malsano",
        "synonyms": ["abitudini malsane"],
        "comparative": "più malsano",
        "superlative": "il più malsano",
        "opposite": "sano"
    },
    {
        "word": "malato",
        "feminine": "malata",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤒",
        "form": "adjective",
        "plural": "malati",
        "femininePlural": "malate",
        "definitions": [
            {
                "text": "Che non sta bene; che soffre di una malattia.",
                "examples": [
                    "È malata e lavora da casa questa settimana."
                ]
            }
        ],
        "subtext": "seriamente malato / sentirsi malato",
        "synonyms": ["ammalarsi"],
        "comparative": "più malato",
        "superlative": "il più malato",
        "opposite": "sano"
    },
    {
        "word": "malato",
        "feminine": "malata",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤢",
        "form": "adjective",
        "plural": "malati",
        "femininePlural": "malate",
        "definitions": [
            {
                "text": "Sentirsi fisicamente male; avere la nausea.",
                "examples": [
                    "Si è dato malato lunedì mattina."
                ]
            }
        ],
        "subtext": "sentirsi malato / darsi malato / molto malato",
        "comparative": "più malato",
        "superlative": "il più malato",
        "opposite": "sano"
    },
    {
        "word": "stanco",
        "feminine": "stanca",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😴",
        "form": "adjective",
        "plural": "stanchi",
        "femininePlural": "stanche",
        "definitions": [
            {
                "text": "Che sente il bisogno di riposare.",
                "examples": [
                    "Mi sento molto stanco dopo il lungo viaggio d'affari."
                ]
            }
        ],
        "subtext": "sentirsi stanco / esausto e stanco / troppo stanco",
        "comparative": "più stanco",
        "superlative": "il più stanco",
        "opposite": "riposato"
    },
    {
        "word": "stressato",
        "feminine": "stressata",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "plural": "stressati",
        "femininePlural": "stressate",
        "definitions": [
            {
                "text": "Sentirsi preoccupato e teso.",
                "examples": [
                    "Si sente stressata per la prossima presentazione."
                ]
            }
        ],
        "subtext": "sentirsi stressato / molto stressato / completamente stressato",
        "comparative": "più stressato",
        "superlative": "il più stressato",
        "opposite": "rilassato"
    },
    {
        "word": "amichevole",
        "feminine": "amichevole",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👋",
        "form": "adjective",
        "plural": "amichevoli",
        "femininePlural": "amichevoli",
        "definitions": [
            {
                "text": "Gentile, piacevole e facile con cui parlare.",
                "examples": [
                    "Tutto il personale in questo ufficio è molto amichevole."
                ]
            }
        ],
        "subtext": "molto amichevole / un'atmosfera amichevole / abbastanza amichevole",
        "comparative": "più amichevole",
        "superlative": "il più amichevole",
        "opposite": "poco amichevole"
    },
    {
        "word": "gentile",
        "feminine": "gentile",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "❤️",
        "form": "adjective",
        "plural": "gentili",
        "femininePlural": "gentili",
        "definitions": [
            {
                "text": "Generoso e premuroso verso gli altri.",
                "examples": [
                    "È gentile con tutti, anche sotto pressione."
                ]
            }
        ],
        "subtext": "molto gentile / gentile da parte tua / un gesto gentile",
        "comparative": "più gentile",
        "superlative": "il più gentile",
        "opposite": "cattivo"
    },
    {
        "word": "onesto",
        "feminine": "onesta",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "plural": "onesti",
        "femininePlural": "oneste",
        "definitions": [
            {
                "text": "Che dice la verità; che non inganna le persone.",
                "examples": [
                    "È completamente onesto con clienti e colleghi."
                ]
            }
        ],
        "subtext": "brutalmente onesto / molto onesto / del tutto onesto",
        "comparative": "più onesto",
        "superlative": "il più onesto",
        "opposite": "disonesto"
    },
    {
        "word": "paziente",
        "feminine": "paziente",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⏳",
        "form": "adjective",
        "plural": "pazienti",
        "femininePlural": "pazienti",
        "definitions": [
            {
                "text": "Capace di aspettare senza lamentarsi.",
                "examples": [
                    "Un buon formatore deve essere estremamente paziente."
                ]
            }
        ],
        "subtext": "molto paziente / paziente con / incredibilmente paziente",
        "comparative": "più paziente",
        "superlative": "il più paziente",
        "opposite": "impaziente"
    },
    {
        "word": "educato",
        "feminine": "educata",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🙇",
        "form": "adjective",
        "plural": "educati",
        "femininePlural": "educate",
        "definitions": [
            {
                "text": "Comportarsi con cortesia e rispetto.",
                "examples": [
                    "È sempre educata, anche nelle conversazioni difficili."
                ]
            }
        ],
        "subtext": "molto educato / essere educato",
        "synonyms": ["rifiutare educatamente"],
        "comparative": "più educato",
        "superlative": "il più educato",
        "opposite": "maleducato"
    },
    {
        "word": "solidale",
        "feminine": "solidale",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "solidali",
        "femininePlural": "solidali",
        "definitions": [
            {
                "text": "Che offre aiuto e incoraggiamento.",
                "examples": [
                    "Il suo manager è molto solidale durante i periodi di intenso lavoro."
                ]
            }
        ],
        "subtext": "molto solidale / team solidale / essere di grande sostegno",
        "comparative": "più solidale",
        "superlative": "il più solidale",
        "opposite": "poco solidale"
    },
    {
        "word": "sicuro di sé",
        "feminine": "sicura di sé",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "✨",
        "form": "adjective",
        "plural": "sicuri di sé",
        "femininePlural": "sicure di sé",
        "definitions": [
            {
                "text": "Sicuro delle proprie capacità.",
                "examples": [
                    "Presenta con sicurezza ed è molto sicuro di sé."
                ]
            }
        ],
        "subtext": "sicuro di sé",
        "synonyms": ["molto sicuro", "sentirsi sicuro"],
        "comparative": "più sicuro di sé",
        "superlative": "il più sicuro di sé",
        "opposite": "insicuro"
    },
    {
        "word": "socievole",
        "feminine": "socievole",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🗣️",
        "form": "adjective",
        "plural": "socievoli",
        "femininePlural": "socievoli",
        "definitions": [
            {
                "text": "Che ama passare il tempo con altre persone.",
                "examples": [
                    "È molto socievole e conosce tutti."
                ]
            }
        ],
        "subtext": "molto socievole / naturalmente socievole / una persona socievole",
        "comparative": "più socievole",
        "superlative": "il più socievole",
        "opposite": "asociale"
    },
    {
        "word": "moderno",
        "feminine": "moderna",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏙️",
        "form": "adjective",
        "plural": "moderni",
        "femininePlural": "moderne",
        "definitions": [
            {
                "text": "Progettato per il tempo presente; aggiornato.",
                "examples": [
                    "L'azienda si è trasferita in un ufficio moderno in stile open-space."
                ]
            }
        ],
        "subtext": "molto moderno / design moderno / ultra-moderno",
        "comparative": "più moderno",
        "superlative": "il più moderno",
        "opposite": "antico"
    },
    {
        "word": "tradizionale",
        "feminine": "tradizionale",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏛️",
        "form": "adjective",
        "plural": "tradizionali",
        "femininePlural": "tradizionali",
        "definitions": [
            {
                "text": "Che segue usanze o modi stabiliti.",
                "examples": [
                    "L'azienda ha una struttura gestionale tradizionale."
                ]
            }
        ],
        "subtext": "molto tradizionale / approccio tradizionale / profondamente tradizionale",
        "comparative": "più tradizionale",
        "superlative": "il più tradizionale",
        "opposite": "moderno"
    },
    {
        "word": "locale",
        "feminine": "locale",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "locali",
        "femininePlural": "locali",
        "definitions": [
            {
                "text": "Relativo alla zona circostante.",
                "examples": [
                    "Preferisce utilizzare fornitori locali."
                ]
            }
        ],
        "subtext": "zona locale / azienda locale / un problema locale",
        "comparative": "più locale",
        "superlative": "il più locale",
        "opposite": "internazionale"
    },
    {
        "word": "internazionale",
        "feminine": "internazionale",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🌎",
        "form": "adjective",
        "plural": "internazionali",
        "femininePlural": "internazionali",
        "definitions": [
            {
                "text": "Che coinvolge più di un paese.",
                "examples": [
                    "L'azienda lavora con clienti internazionali."
                ]
            }
        ],
        "subtext": "pienamente internazionale / team internazionale",
        "synonyms": ["affari internazionali"],
        "comparative": "più internazionale",
        "superlative": "il più internazionale",
        "opposite": "locale"
    },
    {
        "word": "interessante",
        "feminine": "interessante",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "plural": "interessanti",
        "femininePlural": "interessanti",
        "definitions": [
            {
                "text": "Che attira l'attenzione; che vale la pena conoscere.",
                "examples": [
                    "La sessione della conferenza sull'IA è stata molto interessante."
                ]
            }
        ],
        "subtext": "molto interessante / trovare interessante / un punto interessante",
        "comparative": "più interessante",
        "superlative": "il più interessante",
        "opposite": "noioso"
    },
    {
        "word": "noioso",
        "feminine": "noiosa",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💤",
        "form": "adjective",
        "plural": "noiosi",
        "femininePlural": "noiose",
        "definitions": [
            {
                "text": "Non interessante; monotono.",
                "examples": [
                    "La formazione sulla conformità è stata molto noiosa."
                ]
            }
        ],
        "subtext": "molto noioso / trovare noioso",
        "synonyms": ["una riunione noiosa"],
        "comparative": "più noioso",
        "superlative": "il più noioso",
        "opposite": "interessante"
    },
    {
        "word": "strano",
        "feminine": "strana",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "❓",
        "form": "adjective",
        "plural": "strani",
        "femininePlural": "strane",
        "definitions": [
            {
                "text": "Insueto o sorprendente in un modo difficile da capire.",
                "examples": [
                    "L'e-mail del cliente sembrava molto strana."
                ]
            }
        ],
        "subtext": "molto strano / trovare strano",
        "synonyms": ["una strana sensazione"],
        "comparative": "più strano",
        "superlative": "il più strano",
        "opposite": "normale"
    },
    {
        "word": "normale",
        "feminine": "normale",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "✅",
        "form": "adjective",
        "plural": "normali",
        "femininePlural": "normali",
        "definitions": [
            {
                "text": "Tipico o usuale; quello che ci si aspetterebbe.",
                "examples": [
                    "È normale sentirsi nervosi prima di una presentazione importante."
                ]
            }
        ],
        "subtext": "completamente normale / perfettamente normale / sentirsi normale",
        "comparative": "più normale",
        "superlative": "il più normale",
        "opposite": "strano"
    },
    {
        "word": "tipico",
        "feminine": "tipica",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔄",
        "form": "adjective",
        "plural": "tipici",
        "femininePlural": "tipiche",
        "definitions": [
            {
                "text": "Che ha le solite qualità di un tipo di persona o cosa.",
                "examples": [
                    "Questo è un problema tipico nelle grandi organizzazioni."
                ]
            }
        ],
        "subtext": "molto tipico / tipico di",
        "synonyms": ["una giornata tipica"],
        "comparative": "più tipico",
        "superlative": "il più tipico",
        "opposite": "atipico"
    },
    {
        "word": "comune",
        "feminine": "comune",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "comuni",
        "femininePlural": "comuni",
        "definitions": [
            {
                "text": "Che accade spesso; che si trova in molti posti.",
                "examples": [
                    "Il burnout è un problema comune in questo settore."
                ]
            }
        ],
        "subtext": "molto comune / problema comune",
        "synonyms": ["buon senso"],
        "comparative": "più comune",
        "superlative": "il più comune",
        "opposite": "raro"
    },
    {
        "word": "raro",
        "feminine": "rara",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "💎",
        "form": "adjective",
        "plural": "rari",
        "femininePlural": "rare",
        "definitions": [
            {
                "text": "Che non accade spesso; non si trova in molti posti.",
                "examples": [
                    "Un manager veramente solidale è raro."
                ]
            }
        ],
        "subtext": "molto raro / un evento raro",
        "synonyms": ["opportunità rara"],
        "comparative": "più raro",
        "superlative": "il più raro",
        "opposite": "comune"
    },
    {
        "word": "certo",
        "feminine": "certa",
        "level": "elementary",
        "theme": "comparison_A2",
        "emoji": "🎯",
        "form": "adjective",
        "plural": "certi",
        "femininePlural": "certe",
        "definitions": [
            {
                "text": "Definito; senza alcun dubbio.",
                "examples": [
                    "È certa di aver fatto la scelta giusta."
                ]
            }
        ],
        "subtext": "assolutamente certo / essere certo / sentirsi certo",
        "comparative": "più certo",
        "superlative": "il più certo",
        "opposite": "incerto"
    },
    {
        "word": "chiaro",
        "feminine": "chiara",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔍",
        "form": "adjective",
        "plural": "chiari",
        "femininePlural": "chiare",
        "definitions": [
            {
                "text": "Facile da capire; privo di confusione.",
                "examples": [
                    "Le istruzioni sono molto chiare."
                ]
            }
        ],
        "subtext": "chiaro come il sole / molto chiaro / mettere in chiaro",
        "comparative": "più chiaro",
        "superlative": "il più chiaro",
        "opposite": "confuso"
    },
    {
        "word": "difficile",
        "feminine": "difficile",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🧩",
        "form": "adjective",
        "plural": "difficili",
        "femininePlural": "difficili",
        "definitions": [
            {
                "text": "Non facile; che richiede sforzo o abilità.",
                "examples": [
                    "La negoziazione è stata molto difficile."
                ]
            }
        ],
        "subtext": "molto difficile / trovare difficile / difficile da capire",
        "comparative": "più difficile",
        "superlative": "il più difficile",
        "opposite": "facile"
    },
    {
        "word": "semplice",
        "feminine": "semplice",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "plural": "semplici",
        "femininePlural": "semplici",
        "definitions": [
            {
                "text": "Facile da capire o da fare; non complicato.",
                "examples": [
                    "La soluzione è in realtà molto semplice."
                ]
            }
        ],
        "subtext": "molto semplice / abbastanza semplice / restare semplice",
        "comparative": "più semplice",
        "superlative": "il più semplice",
        "opposite": "complicato"
    },
    {
        "word": "complicato",
        "feminine": "complicata",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🕸️",
        "form": "adjective",
        "plural": "complicati",
        "femininePlural": "complicate",
        "definitions": [
            {
                "text": "Che coinvolge molte parti; non facile da capire.",
                "examples": [
                    "Il contratto è molto complicato."
                ]
            }
        ],
        "subtext": "molto complicato / diventare complicato / troppo complicato",
        "comparative": "più complicato",
        "superlative": "il più complicato",
        "opposite": "semplice"
    },
    {
        "word": "serio",
        "feminine": "seria",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👔",
        "form": "adjective",
        "plural": "seri",
        "femininePlural": "serie",
        "definitions": [
            {
                "text": "Importante; che richiede un'attenta riflessione.",
                "examples": [
                    "Questo è un problema serio che richiede attenzione."
                ]
            }
        ],
        "subtext": "molto serio / del tutto serio",
        "synonyms": ["una questione seria"],
        "comparative": "più serio",
        "superlative": "il più serio",
        "opposite": "divertente"
    },
    {
        "word": "divertente",
        "feminine": "divertente",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "😂",
        "form": "adjective",
        "plural": "divertenti",
        "femininePlural": "divertenti",
        "definitions": [
            {
                "text": "Che fa ridere; umoristico.",
                "examples": [
                    "Il cliente ha condiviso una storia divertente per rompere il ghiaccio."
                ]
            }
        ],
        "subtext": "molto divertente / una situazione divertente / trovare divertente",
        "comparative": "più divertente",
        "superlative": "il più divertente",
        "opposite": "serio"
    },
    {
        "word": "diretto",
        "feminine": "diretta",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "➡️",
        "form": "adjective",
        "plural": "diretti",
        "femininePlural": "dirette",
        "definitions": [
            {
                "text": "Che va dritto al punto; non indiretto.",
                "examples": [
                    "È molto diretto e dice esattamente quello che pensa."
                ]
            }
        ],
        "subtext": "molto diretto / approccio diretto",
        "synonyms": ["una domanda diretta"],
        "comparative": "più diretto",
        "superlative": "il più diretto",
        "opposite": "indiretto"
    },
    {
        "word": "quotidiano",
        "feminine": "quotidiana",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "📅",
        "form": "adjective",
        "plural": "quotidiani",
        "femininePlural": "quotidiane",
        "definitions": [
            {
                "text": "Che accade ogni giorno.",
                "examples": [
                    "Ha un tragitto quotidiano di quarantacinque minuti."
                ]
            }
        ],
        "subtext": "rapporto quotidiano",
        "synonyms": ["routine quotidiana", "su base quotidiana"],
        "comparative": "più quotidiano",
        "superlative": "il più quotidiano",
        "opposite": "mensile"
    },
    {
        "word": "regolare",
        "feminine": "regolare",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔁",
        "form": "adjective",
        "plural": "regolari",
        "femininePlural": "regolari",
        "definitions": [
            {
                "text": "Che accade a tempi o intervalli fissi.",
                "examples": [
                    "Hanno riunioni di team regolari il lunedì."
                ]
            }
        ],
        "subtext": "molto regolare / base regolare / cliente regolare",
        "comparative": "più regolare",
        "superlative": "il più regolare",
        "opposite": "irregolare"
    },
    {
        "word": "recente",
        "feminine": "recente",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "🕒",
        "form": "adjective",
        "plural": "recenti",
        "femininePlural": "recenti",
        "definitions": [
            {
                "text": "Che è accaduto non molto tempo fa.",
                "examples": [
                    "Hai visto i recenti cambiamenti alla politica?"
                ]
            }
        ],
        "subtext": "il più recente / molto recente",
        "synonyms": ["notizie recenti"],
        "comparative": "più recente",
        "superlative": "il più recente",
        "opposite": "vecchio"
    },
    {
        "word": "attuale",
        "feminine": "attuale",
        "level": "elementary",
        "theme": "sequence_order_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "attuali",
        "femininePlural": "attuali",
        "definitions": [
            {
                "text": "Che accade o esiste ora.",
                "examples": [
                    "Qual è il tuo stipendio attuale?"
                ]
            }
        ],
        "subtext": "situazione attuale / datore di lavoro attuale",
        "synonyms": ["attualmente"],
        "comparative": "più attuale",
        "superlative": "il più attuale",
        "opposite": "passato"
    },
    {
        "word": "futuro",
        "feminine": "futura",
        "level": "elementary",
        "theme": "future_time_A2",
        "emoji": "🔮",
        "form": "adjective",
        "plural": "futuri",
        "femininePlural": "future",
        "definitions": [
            {
                "text": "Non ancora accaduto; relativo a un tempo successivo.",
                "examples": [
                    "Quali sono i tuoi progetti futuri per la tua carriera?"
                ]
            }
        ],
        "subtext": "in futuro / futuro datore di lavoro",
        "synonyms": ["progetti futuri"],
        "comparative": "più futuro",
        "superlative": "il più futuro",
        "opposite": "passato"
    },
    {
        "word": "precedente",
        "feminine": "precedente",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "⬅️",
        "form": "adjective",
        "plural": "precedenti",
        "femininePlural": "precedenti",
        "definitions": [
            {
                "text": "Accaduto o esistente prima del presente.",
                "examples": [
                    "Ha menzionato il suo datore di lavoro precedente durante l'intervista."
                ]
            }
        ],
        "subtext": "lavoro precedente / datore di lavoro precedente / esperienza precedente",
        "comparative": "più precedente",
        "superlative": "il più precedente",
        "opposite": "seguente"
    }
];
})();