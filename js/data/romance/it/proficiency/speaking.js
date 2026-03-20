(function() {
    const speakingData = {
    "it": {
        "opinionArena": [
            {
                "text": "Il libero arbitrio esiste davvero o è un'illusione?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "L'etica della colonizzazione di altri pianeti.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }
        ],
        "criticsCorner": [],
        "debates": [
            {
                "topic": "L'etica del lavoro protestante come conquista di civiltà vs come fonte originaria della miseria adulta: quale eredità domina oggi?",
                "sideA": "Conquista di civiltà",
                "sideB": "Fonte di miseria",
                "level": "proficiency",
                "theme": "work_meaning_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La mercificazione della passione vs la liberazione di trasformare il lavoro in significato: \"fai ciò che ami\" è un consiglio o una trappola?",
                "sideA": "Consiglio",
                "sideB": "Trappola",
                "level": "proficiency",
                "theme": "work_meaning_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La carriera come identità vs la carriera come mezzo: qual è il rapporto più coerente per un adulto moderno con il proprio lavoro?",
                "sideA": "Identità",
                "sideB": "Mezzo",
                "level": "proficiency",
                "theme": "work_meaning_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il virtuoso stakanovista vs l'ozioso strategico: chi è stato celebrato in modo più disonesto nella cultura occidentale?",
                "sideA": "Stakanovista",
                "sideB": "Ozioso",
                "level": "proficiency",
                "theme": "work_meaning_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'ambizione adulta come ammirevole vs l'ambizione adulta come incapacità di accettare la finitezza: quale lettura è psicologicamente più onesta?",
                "sideA": "Ammirevole",
                "sideB": "Incapacità di accettare la finitezza",
                "level": "proficiency",
                "theme": "work_meaning_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'amore romantico come principio organizzatore della vita adulta vs come mito storicamente contingente e commercialmente sostenuto: quale posizione è più difendibile?",
                "sideA": "Principio organizzatore",
                "sideB": "Mito commerciale",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Trasparenza radicale nelle relazioni vs necessità di un sé privato: intimità e individuazione possono coesistere?",
                "sideA": "Trasparenza",
                "sideB": "Sé privato",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'etica della cura come correttivo femminista vs come riassegnazione degli stessi oneri: il concetto ha mantenuto le promesse?",
                "sideA": "Correttivo femminista",
                "sideB": "Riassegnazione oneri",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scegliere di non avere figli come resistenza all'ideologia pronatalista vs come decisione interamente personale senza dimensione politica: possono essere separate nettamente?",
                "sideA": "Resistenza",
                "sideB": "Decisione personale",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La consapevolezza della mortalità come precondizione per una vita adulta significativa vs come suo ostacolo primario: qual è la posizione più vivibile?",
                "sideA": "Precondizione",
                "sideB": "Ostacolo",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'invecchiamento come declino vs l'invecchiamento come accumulo: quale narrazione è più onesta e quale più utile?",
                "sideA": "Declino",
                "sideB": "Accumulo",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La medicalizzazione dell'invecchiamento come progresso vs come rifiuto di accettare la condizione umana: dove tracciare il confine?",
                "sideA": "Progresso",
                "sideB": "Rifiuto",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La memoria come sostanza dell'identità adulta vs la memoria come narratore altamente inaffidabile: quali sono le implicazioni per la costruzione di un sé?",
                "sideA": "Sostanza",
                "sideB": "Narratore inaffidabile",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La complicità del cittadino adulto in sistemi ingiusti attraverso il consumo ordinario vs l'irrilevanza strutturale della purezza morale individuale: qual è l'inquadramento più onesto?",
                "sideA": "Complicità",
                "sideB": "Irrilevanza strutturale",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il disincanto politico come risposta razionale alle prove disponibili vs come forma di privilegio: quale lettura è empiricamente più difendibile?",
                "sideA": "Risposta razionale",
                "sideB": "Privilegio",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La giustizia intergenerazionale come sfida morale centrale del nostro tempo vs come concetto che oscura sistematicamente le disuguaglianze sociali e razziali del presente: quale critica è più forte?",
                "sideA": "Sfida morale",
                "sideB": "Oscuramento disuguaglianze",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La democrazia liberale come il sistema meno peggiore vs come un sistema che ha strutturalmente esaurito la sua capacità riformatrice: quale verdetto supportano le prove?",
                "sideA": "Sistema meno peggiore",
                "sideB": "Capacità esaurita",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La capacità di autoinganno come difetto cognitivo vs come meccanismo adattativo: quale resoconto serve meglio l'adulto che vuole vivere bene?",
                "sideA": "Difetto cognitivo",
                "sideB": "Meccanismo adattativo",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'esperienza come autorità epistemica vs l'esperienza come forma di potere istituzionale che merita scrutinio: quando il sano scetticismo diventa codardia epistemica?",
                "sideA": "Autorità epistemica",
                "sideB": "Potere istituzionale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La narrazione come modo primario in cui gli adulti danno senso alle loro vite vs la narrazione come modo primario in cui gli adulti si ingannano: quale funzione domina?",
                "sideA": "Dare senso",
                "sideB": "Ingannarsi",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'onestà come virtù incondizionata vs l'onestà come virtù contestuale: esiste un resoconto coerente della sincerità che sopravviva al contatto con le reali relazioni adulte?",
                "sideA": "Virtù incondizionata",
                "sideB": "Virtù contestuale",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'adulto che ha \"finalmente capito tutto\" vs l'adulto che ha accettato che non lo farà mai: chi rappresenta un rapporto più sofisticato con la realtà?",
                "sideA": "Capito tutto",
                "sideB": "Accettato l'ignoto",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dire tutto al proprio terapeuta vs dire tutto al proprio parrucchiere: quale relazione professionale è empiricamente più trasformativa e perché la risposta ci mette a disagio?",
                "sideA": "Terapeuta",
                "sideB": "Parrucchiere",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Linguaggio: Costitutivo vs Espressivo",
                "sideA": "Costitutivo",
                "sideB": "Espressivo",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Modella la realtà",
                    "Limita il pensiero"
                ],
                "ideasB": [
                    "Riflette la realtà",
                    "Strumento per il pensiero"
                ]
            },
            {
                "topic": "Precisione vs Ambiguità",
                "sideA": "Precisione",
                "sideB": "Ambiguità",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Chiarezza",
                    "Efficienza"
                ],
                "ideasB": [
                    "Sfumatura",
                    "Diplomazia"
                ]
            },
            {
                "topic": "Retorica vs Logica",
                "sideA": "Retorica",
                "sideB": "Logica",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Potere persuasivo",
                    "Appello emotivo"
                ],
                "ideasB": [
                    "Verità oggettiva",
                    "Validità strutturale"
                ]
            },
            {
                "topic": "Significato letterale vs Significato interpretativo",
                "sideA": "Letterale",
                "sideB": "Interpretativo",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Intenzione dell'autore",
                    "Stabilità"
                ],
                "ideasB": [
                    "Risposta del lettore",
                    "Contesto in evoluzione"
                ]
            },
            {
                "topic": "Consenso scientifico vs Umiltà epistemica",
                "sideA": "Consenso",
                "sideB": "Umiltà",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Conoscenza consolidata",
                    "Autorità esperta"
                ],
                "ideasB": [
                    "Apertura alla correzione",
                    "Riconoscimento dei limiti"
                ]
            },
            {
                "topic": "Competenza vs Esperienza vissuta",
                "sideA": "Competenza",
                "sideB": "Esperienza vissuta",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Rigore scientifico",
                    "Dati oggettivi"
                ],
                "ideasB": [
                    "Verità autentica",
                    "Intuizione contestuale"
                ]
            },
            {
                "topic": "Il dubbio: Virtù vs Paralisi",
                "sideA": "Virtù",
                "sideB": "Paralisi",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Pensiero critico",
                    "Scetticismo"
                ],
                "ideasB": [
                    "Indecisione",
                    "Mancanza di azione"
                ]
            },
            {
                "topic": "Narrativa vs Dati",
                "sideA": "Narrativa",
                "sideB": "Dati",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Impatto emotivo",
                    "Connessione umana"
                ],
                "ideasB": [
                    "Verità statistica",
                    "Scalabilità"
                ]
            },
            {
                "topic": "Legittimità: Consenso vs Risultato",
                "sideA": "Consenso",
                "sideB": "Risultato",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Processo democratico",
                    "Diritto morale"
                ],
                "ideasB": [
                    "Efficienza",
                    "Governance efficace"
                ]
            },
            {
                "topic": "Stato: Garante della libertà vs Minaccia",
                "sideA": "Garante",
                "sideB": "Minaccia",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Stato di diritto",
                    "Protezione dei diritti"
                ],
                "ideasB": [
                    "Abuso di potere",
                    "Sorveglianza"
                ]
            },
            {
                "topic": "Politica dei diritti vs Politica delle responsabilità",
                "sideA": "Diritti",
                "sideB": "Responsabilità",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Libertà individuale",
                    "Protezione legale"
                ],
                "ideasB": [
                    "Dovere collectif",
                    "Coesione sociale"
                ]
            },
            {
                "topic": "Neutralità vs Governance guidata dai valori",
                "sideA": "Neutralità",
                "sideB": "Guidata dai valori",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Imparzialità",
                    "Equità"
                ],
                "ideasB": [
                    "Direzione morale",
                    "Scopo sociale"
                ]
            },
            {
                "topic": "Intenzione vs Ricezione nell'arte",
                "sideA": "Intenzione",
                "sideB": "Ricezione",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Visione dell'autore",
                    "Contesto originale"
                ],
                "ideasB": [
                    "Significato per il pubblico",
                    "Impatto culturale"
                ]
            },
            {
                "topic": "Valore estetico vs Valore morale",
                "sideA": "Estetico",
                "sideB": "Morale",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "L'arte per l'arte",
                    "Pura bellezza"
                ],
                "ideasB": [
                    "Utilità sociale",
                    "Impatto etico"
                ]
            },
            {
                "topic": "L'avanguardia vs Accessibilità",
                "sideA": "Avanguardia",
                "sideB": "Accessibilità",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Spostare i confini",
                    "Sfida intellettuale"
                ],
                "ideasB": [
                    "Inclusività",
                    "Arte democratica"
                ]
            },
            {
                "topic": "Arte istituzionale vs Arte irregolare",
                "sideA": "Istituzionale",
                "sideB": "Irregolare",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Preservazione storica",
                    "Standard"
                ],
                "ideasB": [
                    "Autenticità grezza",
                    "Anti-sistema"
                ]
            },
            {
                "topic": "Principio di precauzione vs proazione",
                "sideA": "Precauzionale",
                "sideB": "Proattivo",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Evitare i rischi",
                    "Sicurezza prima di tutto"
                ],
                "ideasB": [
                    "Innovazione",
                    "Abbracciare il cambiamento"
                ]
            },
            {
                "topic": "Progresso scientifico: Intrinsecamente buono vs Neutro",
                "sideA": "Intrinsecamente buono",
                "sideB": "Eticamente neutro",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Valori dell'Illuminismo",
                    "Risoluzione dei problemi"
                ],
                "ideasB": [
                    "Preoccupazione per il doppio uso",
                    "Responsabilità umana"
                ]
            },
            {
                "topic": "Rischio esistenziale vs Sofferenza attuale",
                "sideA": "Rischio esistenziale",
                "sideB": "Sofferenza attuale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Sopravvivenza a lungo termine",
                    "Generazioni future"
                ],
                "ideasB": [
                    "Sollievo immediato",
                    "Povertà urgente"
                ]
            },
            {
                "topic": "Coscienza umana vs Intelligenza artificiale generale",
                "sideA": "Coscienza",
                "sideB": "IA Generale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Unicità biologica",
                    "Esperienza soggettiva"
                ],
                "ideasB": [
                    "Potenza di calcolo",
                    "Logica algoritmica"
                ]
            },
            {
                "topic": "Il progresso: Reale vs Illusione",
                "sideA": "Reale",
                "sideB": "Illusione",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Progresso tecnologico",
                    "Migliore qualità della vita"
                ],
                "ideasB": [
                    "Storia ciclica",
                    "Nuovi problemi"
                ]
            },
            {
                "topic": "Ordine liberale vs Mondo multipolare",
                "sideA": "Ordine liberale",
                "sideB": "Multipolarità",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Valori universali",
                    "Stabilità globale"
                ],
                "ideasB": [
                    "Potere diversificato",
                    "Sovranità culturale"
                ]
            },
            {
                "topic": "Memoria vs Oblio",
                "sideA": "Memoria",
                "sideB": "Oblio",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Imparare dalla storia",
                    "Identità"
                ],
                "ideasB": [
                    "Andare avanti",
                    "Superare i traumi"
                ]
            },
            {
                "topic": "Tragedia dei beni comuni vs Cooperazione",
                "sideA": "Tragedia",
                "sideB": "Cooperazione",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Interesse personale",
                    "Esaurimento delle risorse"
                ],
                "ideasB": [
                    "Vantaggio reciproco",
                    "Gestione collettiva"
                ]
            }
        ],
        "talkThatTalk": [
            {
                "topic": "La complexité della coscienza umana",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["it"]) window.speakingData["it"] = {};

    for (const cat in speakingData["it"]) {
        if (!window.speakingData["it"][cat]) window.speakingData["it"][cat] = [];
        window.speakingData["it"][cat].push(...speakingData["it"][cat]);
    }
})();
