(function() {
    const data = [{
                "topic": "L'etica del lavoro protestante come conquista di civiltà vs come fonte originaria della miseria adulta: quale eredità domina oggi?",
                "sideA": "Conquista di civiltà",
                "sideB": "Fonte di miseria",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "Ha catalizzato uno sviluppo socioeconomico senza precedenti istituzionalizzando la diligenza come virtù cardinale.",
                    "La spinta interiorizzata verso l'operosità fornisce un quadro coerente per lo scopo individuale e la stabilità sociale."
                ],
                "ideasB": [
                    "Ha radicato un ciclo implacabile di produttività performativa che precipita un burnout diffuso e un'ennui esistenziale.",
                    "Ancorare la dignità umana esclusivamente al rendimento economico facilita l'erosione sistemica del tempo libero e della vita contemplativa."
                ]
            },
            {
                "topic": "La mercificazione della passione vs la liberazione di trasformare il lavoro in significato: \"fai ciò che ami\" è un consiglio o una trappola?",
                "sideA": "Consiglio",
                "sideB": "Trappola",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "Allineare le aspirazioni professionali agli interessi intrinseci favorisce uno stato di 'flow' e una profonda realizzazione psicologica.",
                    "La ricerca di un lavoro significativo trascende la mera sussistenza, consentendo un'esistenza più integrata e autentica."
                ],
                "ideasB": [
                    "Trasformare un hobby in una carriera assoggetta i propri santuari più cari alla logica spietata della valutazione di mercato.",
                    "La narrativa della 'passione' funge spesso da cortina fumogena per condizioni di lavoro precarie e auto-sfruttamento."
                ]
            },
            {
                "topic": "La carriera come identità vs la carriera come mezzo: qual è il rapporto più coerente per un adulto moderno con il proprio lavoro?",
                "sideA": "Identità",
                "sideB": "Mezzo",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "L'eccellenza professionale fornisce una metrica tangibile per l'autorealizzazione e il contributo sociale in un mondo secolare.",
                    "Un'identità radicata nella maestria e nella vocazione offre resilienza e un senso di continuità lungo tutto l'arco della vita."
                ],
                "ideasB": [
                    "Mantenere una chiara demarcazione tra il sé e il ruolo previene il collasso identitario durante i periodi di disoccupazione o pensionamento.",
                    "Considerare il lavoro come una pura utilità strumentale preserva la larghezza di banda cognitiva ed emotiva necessaria per le dimensioni non di mercato della vita."
                ]
            },
            {
                "topic": "Il virtuoso stakanovista vs l'ozioso strategico: chi è stato celebrato in modo più disonesto nella cultura occidentale?",
                "sideA": "Stakanovista",
                "sideB": "Ozioso",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "La glorificazione della 'hustle culture' oscura i rendimenti decrescenti dell'esaurimento e l'incuria sistemica della riproduzione sociale.",
                    "Le narrazioni eroiche del sovraccarico di lavoro servono spesso a normalizzare richieste organizzative sfruttatrici sotto la veste del merito individuale."
                ],
                "ideasB": [
                    "La romanticizzazione della 'classe agiata' o dello 'fannullone strategico' occulta spesso il privilegio economico sottostante che rende vitale l'ozio.",
                    "Celebrare la non-produttività come atto radicale può essere una disonesta estetizzazione della passività di fronte a urgenti sfide collettive."
                ]
            },
            {
                "topic": "L'ambizione adulta come ammirevole vs l'ambizione adulta come incapacità di accettare la finitezza: quale lettura è psicologicamente più onesta?",
                "sideA": "Ammirevole",
                "sideB": "Incapacità di accettare la finitezza",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "L'ambizione rappresenta il coraggioso rifiuto di ristagnare, guidando l'espansione delle capacità umane e dei confini creativi.",
                    "La tensione verso l'eccellenza è un'espressione vitale della volontà umana di lasciare un'impronta duratura e significativa nel mondo."
                ],
                "ideasB": [
                    "Lo sforzo incessante funziona spesso come un meccanismo di difesa nevrotico contro la terrificante realtà della nostra inevitabile insignificanza e mortalità.",
                    "Una vita di costante 'divenire' preclude la possibilità di 'essere', portando a un perpetuo stato di insoddisfazione orientata al futuro."
                ]
            },
            {
                "topic": "L'amore romantico come principio organizzatore della vita adulta vs come mito storicamente contingente e commercialmente sostenuto: quale posizione è più difendibile?",
                "sideA": "Principio organizzatore",
                "sideB": "Mito commerciale",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La partnership intima offre un locus unico di significato, fornendo un santuario emotivo e una narrazione condivisa in una società atomizzata.",
                    "La profonda vulnerabilità dell'amore funge da potente catalizzatore per la crescita morale e la trascendenza dell'io."
                ],
                "ideasB": [
                    "Il culto contemporaneo del romanticismo pone un onere insostenibile su una singola relazione per soddisfare tutti i bisogni psicologici e sociali.",
                    "Il romanticismo è stato cooptato dal capitalismo dei consumi per vendere uno stile di vita idealizzato che privilegia la gratificazione individuale rispetto ai legami comunitari."
                ]
            },
            {
                "topic": "Trasparenza radicale nelle relazioni vs necessità di un sé privato: intimità e individuazione possono coesistere?",
                "sideA": "Trasparenza",
                "sideB": "Sé privato",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La vulnerabilità assoluta è l'unico percorso verso una genuina intimità, smantellando le barriere difensive che precludono una vera connessione.",
                    "La rimozione dei segreti favorisce una cultura di fiducia radicale e preclude la lenta decomposizione dei risentimenti inespressi."
                ],
                "ideasB": [
                    "Un grado di opacità interna è essenziale per mantenere un'identità separata e prevenire l'impigliamento emotivo che soffoca il desiderio.",
                    "Il mandato della 'totale trasparenza' può essere una forma sottile di sorveglianza che erode la sacralità del mondo interiore dell'individuo."
                ]
            },
            {
                "topic": "L'etica della cura come correttivo femminista vs come riassegnazione degli stessi oneri: il concetto ha mantenuto le promesse?",
                "sideA": "Correttivo femminista",
                "sideB": "Riassegnazione oneri",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Sfida il dominante focus patriarcale sui diritti astratti dando priorità alla relazionalità e al fatto fondamentale della dipendenza umana.",
                    "Mettere al centro il lavoro di cura eleva attività tradizionalmente relegate alla sfera privata al loro legittimo status di pilastro della civiltà."
                ],
                "ideasB": [
                    "Senza una radicale ridistribuzione strutturale, la retorica della 'cura' serve spesso a romanticizzare e perpetuare le disuguaglianze lavorative di genere.",
                    "Concentrarsi sulla cura come virtù intrinseca può inavvertitamente essenzializzare tratti che sono stati socializzati nei gruppi emarginati a beneficio dei potenti."
                ]
            },
            {
                "topic": "Scegliere di non avere figli come resistenza all'ideologia pronatalista vs come decisione interamente personale senza dimensione politica: possono essere separate nettamente?",
                "sideA": "Resistenza",
                "sideB": "Decisione personale",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "In una società che tratta la riproduzione come un dovere morale predefinito, la scelta di non avere figli è un atto intrinsecamente sovversivo di autonomia.",
                    "Rifiutare di partecipare alla riproduzione generazionale del lavoro e del capitale costituisce una legittima critica alle strutture socioeconomiche contemporanee."
                ],
                "ideasB": [
                    "Politicizzare le scelte riproduttive può essere un'invasiva ingerenza che ignora i complessi e spesso idiosincratici fattori personali in gioco.",
                    "Molti individui giungono a questa decisione attraverso un processo di autoriflessione privata che ha poco a che fare con quadri ideologici più ampi."
                ]
            },
            {
                "topic": "La consapevolezza della mortalità come precondizione per una vita adulta significativa vs come suo ostacolo primario: qual è la posizione più vivibile?",
                "sideA": "Precondizione",
                "sideB": "Ostacolo",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La finitezza del tempo conferisce gravità e urgenza alle nostre scelte, impedendo la deriva in uno stato di perpetua procrastinazione.",
                    "Riconoscere la morte favorisce un profondo apprezzamento per l'effimera bellezza del presente e incoraggia la prioritizzazione di ciò che conta davvero."
                ],
                "ideasB": [
                    "L'ombra onnipresente della non-esistenza può indurre un nichilismo paralizzante che rende ogni sforzo umano apparentemente futile.",
                    "Una preoccupazione per la mortalità può escludere la gioiosa spontaneità e l'investimento a lungo termine richiesti per una vita fiorente."
                ]
            },
            {
                "topic": "L'invecchiamento come declino vs l'invecchiamento come accumulo: quale narrazione è più onesta e quale più utile?",
                "sideA": "Declino",
                "sideB": "Accumulo",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "L'erosione fisiologica e cognitiva associata all'invecchiamento è una dura realtà biologica che richiede un confronto coraggioso piuttosto che l'uso di eufemismi.",
                    "Accettare il declino consente un adeguamento realistico delle aspettative e la coltivazione della grazia di fronte all'inevitabile perdita."
                ],
                "ideasB": [
                    "L'invecchiamento fornisce una profondità di prospettiva senza pari, regolazione emotiva e una sintesi di esperienza che costituisce la vera saggezza.",
                    "La narrazione dell'accumulo valorizza gli anziani come vitali depositari della memoria culturale e consiglieri delle generazioni successive."
                ]
            },
            {
                "topic": "La medicalizzazione dell'invecchiamento come progresso vs come rifiuto di accettare la condizione umana: dove tracciare il confine?",
                "sideA": "Progresso",
                "sideB": "Rifiuto",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [
                    "Gli interventi tecnologici che estendono la 'durata della salute' alleviano immense sofferenze umane e consentono periodi più lunghi di contributo sociale.",
                    "Considerare l'invecchiamento come un problema biologico da risolvere è l'estensione logica della ricerca scientifica volta a padroneggiare la natura a beneficio dell'uomo."
                ],
                "ideasB": [
                    "Patologizzare una fase naturale della vita riflette una profonda fobia culturale della vulnerabilità e un tentativo presuntuoso di eludere i nostri limiti intrinseci.",
                    "La ricerca dell'immortalità attraverso la medicina può portare a una società stagnante priva della vitalità rigenerativa fornita dal susseguirsi delle generazioni."
                ]
            },
            {
                "topic": "La memoria come sostanza dell'identità adulta vs la memoria come narratore altamente inaffidabile: quali sono le implicazioni per la costruzione di un sé?",
                "sideA": "Sostanza",
                "sideB": "Narratore inaffidabile",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La continuità del sé dipende da una narrazione autobiografica coerente che colleghi le nostre azioni passate ai nostri valori presenti.",
                    "I ricordi condivisi formano la base delle nostre relazioni più significative e forniscono un senso di appartenenza stabile."
                ],
                "ideasB": [
                    "La natura malleabile della memoria suggerisce che la nostra 'identità' sia una ricostruzione perpetua, spesso autoreferenziale, piuttosto che un registro oggettivo.",
                    "Riconoscere la fallibilità della nostra storia personale permette un rapporto più flessibile e indulgente con la persona che eravamo."
                ]
            },
            {
                "topic": "La complicità del cittadino adulto in sistemi ingiusti attraverso il consumo ordinario vs l'irrilevanza strutturale della purezza morale individuale: qual è l'inquadramento più onesto?",
                "sideA": "Complicità",
                "sideB": "Irrilevanza strutturale",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Le scelte individuali si aggregano in segnali di mercato; rifiutare di riconoscere questo legame causale è una forma di abdicazione etica.",
                    "Il quadro del 'consumatore etico' restituisce agenzia all'individuo, insistendo sul fatto che nessuna azione è troppo piccola per avere un peso morale."
                ],
                "ideasB": [
                    "Fissarsi sulle scelte di stile di vita personale spesso distrae dai cambiamenti istituzionali e normativi su larga scala richiesti per affrontare l'ingiustizia sistemica.",
                    "In un'economia globalizzata, la totale purezza morale è un'impossibilità logistica che serve solo a indurre sensi di colpa debilitanti piuttosto che azioni efficaci."
                ]
            },
            {
                "topic": "Il disincanto politico come risposta razionale alle prove disponibili vs come forma di privilegio: quale lettura è empiricamente più difendibile?",
                "sideA": "Risposta razionale",
                "sideB": "Privilegio",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Il ritiro dal processo politico può essere un lucido riconoscimento della cattura sistemica delle istituzioni da parte di interessi radicati.",
                    "Il persistente fallimento dei sistemi politici nell'affrontare minacce esistenziali rende lo scetticismo la posizione intellettuale più basata sulle prove.",
                ],
                "ideasB": [
                    "La capacità di 'chiamarsi fuori' dalla politica è un lusso concesso solo a coloro i cui diritti e bisogni primari non sono attualmente sotto minaccia diretta.",
                    "Il cinismo funge spesso da sofisticata scusa per l'apatia, abdicando alla responsabilità di proteggere i più vulnerabili ai cambiamenti politici."
                ]
            },
            {
                "topic": "La giustizia intergenerazionale come sfida morale centrale del nostro tempo vs come concetto che oscura sistematicamente le disuguaglianze sociali e razziali del presente: quale critica è più forte?",
                "sideA": "Sfida morale",
                "sideB": "Oscuramento disuguaglianze",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La scala senza precedenti del degrado ambientale crea un obbligo non reciproco verso gli esseri futuri che non possono rappresentarsi da soli.",
                    "Il mancato resoconto delle conseguenze a lungo termine del consumo attuale costituisce un furto sistemico ai danni dei non nati."
                ],
                "ideasB": [
                    "La retorica sulle 'generazioni future' è spesso usata per rimandare azioni redistributive urgenti che gioverebbero agli emarginati di oggi.",
                    "Un focus astratto sulla giustizia cronologica può trascurare il fatto che il 'futuro' sarà ereditato da gruppi che partono già da posizioni di potere enormemente diverse."
                ]
            },
            {
                "topic": "La democrazia liberale come il sistema meno peggiore vs come un sistema che ha strutturalmente esaurito la sua capacità riformatrice: quale verdetto supportano le prove?",
                "sideA": "Sistema meno peggiore",
                "sideB": "Capacità esaurita",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "I meccanismi di successione pacifica e il dissenso istituzionalizzato rimangono i salvaguardi più efficaci contro la tirannia.",
                    "L'adattabilità storica dei sistemi liberali suggerisce che essi possiedano un'impareggiabile capacità di autocorrezione a lungo termine."
                ],
                "ideasB": [
                    "La paralisi delle istituzioni democratiche di fronte alla crescente disuguaglianza e al collasso climatico suggerisce un fallimento sistemico terminale.",
                    "La democrazia contemporanea è stata svuotata dalla governance tecnocratica e dall'influenza schiacciante del capitale concentrato."
                ]
            },
            {
                "topic": "La capacità di autoinganno come difetto cognitivo vs come meccanismo adattativo: quale resoconto serve meglio l'adulto che vuole vivere bene?",
                "sideA": "Difetto cognitivo",
                "sideB": "Meccanismo adattativo",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Un impegno verso la verità radicale è essenziale per prendere decisioni informate e costruire relazioni autentiche basate sulla realtà.",
                    "L'autoinganno sistematico preclude la possibilità di una genuina conoscenza di sé e la risoluzione dei conflitti psicologici sottostanti."
                ],
                "ideasB": [
                    "Un grado di 'illusione positiva' è spesso necessario per mantenere la motivazione e la resilienza richieste per affrontare le avversità intrinseche della vita.",
                    "La mente umana si è evoluta per dare priorità alla coesione sociale e alla sopravvivenza rispetto all'elaborazione fredda e oggettiva delle informazioni."
                ]
            },
            {
                "topic": "L'esperienza come autorità epistemica vs l'esperienza come forma di potere istituzionale che merita scrutinio: quando il sano scetticismo diventa codardia epistemica?",
                "sideA": "Autorità epistemica",
                "sideB": "Potere istituzionale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "In un mondo sempre più complesso, il rispetto della conoscenza specializzata è un necessario dispositivo di risparmio cognitivo e un prerequisito per una politica efficace.",
                    "I rigorosi standard di revisione paritaria ed empirici delle comunità di esperti forniscono la più affidabile approssimazione della verità oggettiva disponibile."
                ],
                "ideasB": [
                    "La classe degli 'esperti' riflette spesso i pregiudizi e gli interessi delle istituzioni che finanziano e legittimano le loro credenziali.",
                    "Democratizzare la conoscenza richiede di sfidare il monopolio delle élite accreditate su ciò che conta come prova valida o realtà vissuta."
                ]
            },
            {
                "topic": "La narrazione come modo primario in cui gli adulti danno senso alle loro vite vs la narrazione come modo primario in cui gli adulti si ingannano: quale funzione domina?",
                "sideA": "Dare senso",
                "sideB": "Ingannarsi",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Lo storytelling ci permette di sintetizzare esperienze disparate in un insieme significativo, favorendo la coerenza psicologica e l'agenzia.",
                    "La cultura umana è fondamentalmente narrativa; senza di essa, abiteremmo un mondo di eventi casuali privi di scopo."
                ],
                "ideasB": [
                    "Il desiderio di una 'trama ordinata' ci porta spesso a ignorare i dati che contraddicono l'immagine di noi stessi preferita o i nostri impegni ideologici.",
                    "Le strutture narrative impongono una falsa teleologia alla vita, mascherando il ruolo della pura contingenza e della casualità caotica nelle nostre storie personali."
                ]
            },
            {
                "topic": "L'onestà come virtù incondizionata vs l'onestà come virtù contestuale: esiste un resoconto coerente della sincerità che sopravviva al contatto con le reali relazioni adulte?",
                "sideA": "Virtù incondizionata",
                "sideB": "Virtù contestuale",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "L'inganno, per quanto ben intenzionato, erode la realtà intersoggettiva richiesta per una genuina connessione umana e per la fiducia.",
                    "L'impegno verso la verità riflette un rispetto fondamentale per l'autonomia altrui, permettendo loro di rispondere al mondo così com'è realmente."
                ],
                "ideasB": [
                    "L'applicazione rigida della 'brutale onestà' può essere una forma di crudeltà che privilegia la propria purezza morale rispetto al benessere altrui.",
                    "Pragmatici 'lubrificanti sociali' e la condivisione selettiva delle informazioni sono essenziali per navigare le complessità della vita comunitaria e il tatto professionale."
                ]
            },
            {
                "topic": "L'adulto che ha \"finalmente capito tutto\" vs l'adulto che ha accettato che non lo farà mai: chi rappresenta un rapporto più sofisticato con la realtà?",
                "sideA": "Capito tutto",
                "sideB": "Accettato l'ignoto",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Il raggiungimento di un insieme stabile di valori e di una chiara comprensione del proprio posto nel mondo è il segno distintivo della maturità psicologica.",
                    "La sintesi dell'esperienza in saggezza azionabile permette un impegno più efficace e deciso con le sfide della vita."
                ],
                "ideasB": [
                    "La saggezza consiste nel riconoscimento socratico della vastità della nostra ignoranza e della radicale contingenza delle nostre prospettive.",
                    "Un'apertura alla revisione perpetua e alla 'mente del principiante' previene la calcificazione intellettuale che spesso accompagna l'invecchiamento."
                ]
            },
            {
                "topic": "Dire tutto al proprio terapeuta vs dire tutto al proprio parrucchiere: quale relazione professionale è empiricamente più trasformativa e perché la risposta ci mette a disagio?",
                "sideA": "Terapeuta",
                "sideB": "Parrucchiere",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [
                    "L'ambiente clinico fornisce un contesto strutturato e guidato dalla teoria, progettato specificamente per la decostruzione di schemi psichici profondi.",
                    "La neutralità professionale del terapeuta e la formazione nell'inconscio permettono intuizioni impossibili in una conversazione casuale."
                ],
                "ideasB": [
                    "La natura tattile e a basso rischio del salone facilita spesso una vulnerabilità spontanea e autentica che gli interventi clinici possono soffocare.",
                    "Il parrucchiere rappresenta una forma di cura comunitaria e quotidiana che è più integrata nel tessuto della vita rispetto all'artificialità dell'ora di colloquio."
                ]
            },
            {
                "topic": "Il linguaggio come costitutivo del pensiero vs il linguaggio come meramente espressivo: il linguaggio modella o riflette la realtà?",
                "sideA": "Costitutivo",
                "sideB": "Espressivo",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Le strutture lessicali e grammaticali della nostra lingua madre forniscono le categorie stesse attraverso le quali percepiamo e concettualizziamo il mondo.",
                    "La relatività linguistica suggerisce che i concetti per i quali mancano le parole rimangano effettivamente impensabili o significativamente più difficili da cogliere."
                ],
                "ideasB": [
                    "Il linguaggio è uno strumento a valle per comunicare processi cognitivi pre-linguistici ed esperienze sensoriali universali alla specie.",
                    "La capacità di inventare nuova terminologia per descrivere fenomeni precedentemente non mappati prova che il pensiero precede la sua articolazione linguistica."
                ]
            },
            {
                "topic": "Precisione vs ambiguità: quale proprietà del linguaggio è più preziosa nel discorso pubblico?",
                "sideA": "Precisione",
                "sideB": "Ambiguità",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La rigorosa chiarezza terminologica è l'unica difesa contro l'offuscamento intenzionale e il 'politichese' usato per manipolare l'opinione pubblica.",
                    "La precisione tecnica permette il dibattito basato sulle prove e le formulazioni politiche specifiche richieste per risolvere complessi problemi sociali."
                ],
                "ideasB": [
                    "L'ambiguità produttiva permette la formazione di ampie coalizioni e la 'vaghezza strategica' necessaria per il compromesso diplomatico.",
                    "Un linguaggio sfumato e polisemico è più adatto a catturare le contraddizioni e le complessità intrinseche della realtà sociale umana."
                ]
            },
            {
                "topic": "Retorica vs logica: cosa è in definitiva più persuasivo e cosa dovrebbe esserlo?",
                "sideA": "Retorica",
                "sideB": "Logica",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Gli esseri umani sono fondamentalmente creature narrative ed emotive; anche l'argomento più solido fallisce se non risuona con i valori del pubblico.",
                    "L'eloquenza e il framing possono colmare il divario tra verità astratta e azione collettiva, mobilitando le persone in modi che i freddi sillogismi non possono fare."
                ],
                "ideasB": [
                    "La logica fornisce l'unico standard oggettivo e universale di validità, proteggendo il discorso dal potere manipolatorio della demagogia carismatica.",
                    "Una società che privilegia lo stile sulla sostanza è strutturalmente vulnerabile alla disinformazione e all'erosione degli standard epistemici."
                ]
            },
            {
                "topic": "Significato letterale vs significato interpretativo: chi possiede il significato di un testo?",
                "sideA": "Letterale",
                "sideB": "Interpretativo",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "L'intento dell'autore e il contesto storico-grammaticale della creazione di un'opera forniscono l'unica ancora stabile per la comunicazione.",
                    "Il soggettivismo radicale nell'interpretazione rende inutile l'atto dello scrivere, poiché il testo diventa solo uno specchio per i pregiudizi esistenti del lettore."
                ],
                "ideasB": [
                    "La 'morte dell'autore' libera il testo di generare nuovi significati attraverso l'incontro con diversi contesti culturali e temporali.",
                    "Il significato è un processo co-creativo; un'opera vive davvero solo quando viene filtrata attraverso l'esperienza vissuta unica del destinatario."
                ]
            },
            {
                "topic": "Consenso scientifico vs umiltà epistemica: quando è giustificato il rispetto per la competenza?",
                "sideA": "Consenso",
                "sideB": "Umiltà",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Il peso collettivo delle prove sottoposte a revisione paritaria è la guida più affidabile per le politiche pubbliche, specialmente riguardo a rischi esistenziali.",
                    "Il dissenso fine a se stesso, senza rigorose controprove, è spesso un esercizio di vanità che mette a repentaglio la sicurezza pubblica."
                ],
                "ideasB": [
                    "La storia è costellata di 'consensi scientifici' che sono stati successivamente ribaltati; mantenere un grado di scetticismo è essenziale per il progresso intellettuale.",
                    "Il rispetto dell'autorità può diventare una forma di 'scientismo' che ignora le dimensioni etiche, sociali e filosofiche di questioni complesse."
                ]
            },
            {
                "topic": "Competenza vs esperienza vissuta: cosa ha più peso probatorio nel dibattito pubblico?",
                "sideA": "Competenza",
                "sideB": "Esperienza vissuta",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La formazione specializzata e l'analisi basata sui dati forniscono una visione panoramica di questioni sistemiche che gli aneddoti personali non possono catturare.",
                    "La competenza oggettiva è necessaria per separare le tendenze generalizzabili dall'intensità emotiva di eventi individuali e idiosincratici."
                ],
                "ideasB": [
                    "Coloro che sono direttamente colpiti da una politica possiedono una comprensione granulare e qualitativa dei suoi effetti che i modelli astratti spesso mancano.",
                    "Privilegiare le credenziali accademiche sulla testimonianza di gruppi emarginati può rafforzare gli squilibri di potere esistenti e mettere a tacere verità vitali."
                ]
            },
            {
                "topic": "Il dubbio come virtù intellettuale vs il dubbio come paralisi: quando lo scetticismo diventa irresponsabile?",
                "sideA": "Virtù",
                "sideB": "Paralisi",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Una persistente volontà di mettere in discussione i propri presupposti è l'unico baluardo contro i pericoli del dogmatismo ideologico.",
                    "L'integrità intellettuale richiede la sospensione del giudizio finché non siano state raccolte prove sufficienti, indipendentemente dalla pressione sociale."
                ],
                "ideasB": [
                    "Il dubbio fabbricato è una tattica comune usata per bloccare azioni urgenti su questioni dove le prove sono già schiaccianti.",
                    "Il rifiuto di impegnarsi in qualsiasi posizione può essere una forma di codardia epistemica che abdica alla responsabilità di agire in un mondo di incertezza."
                ]
            },
            {
                "topic": "Narrazione vs dati: cosa muove le persone verso la verità in modo più affidabile?",
                "sideA": "Narrativa",
                "sideB": "Dati",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Le statistiche astratte sono spesso psicologicamente inerti; abbiamo bisogno della 'storia umana' per fornire la salienza morale necessaria per una comprensione genuina.",
                    "Le parabole e le storie contestualizzano i fatti crudi, dando loro un significato che ne permette l'integrazione nella nostra visione del mondo."
                ],
                "ideasB": [
                    "Le narrazioni sono suscettibili al 'pregiudizio di conferma' e all''euristica della disponibilità', portandoci a sovrageneralizzare da storie avvincenti ma non rappresentative.",
                    "I dati quantitativi forniscono l'unica mappa accurata della realtà, proteggendoci dal potere manipolatorio di aneddoti emotivamente carichi."
                ]
            },
            {
                "topic": "Legittimità attraverso il consenso vs legittimità attraverso il risultato: cosa giustifica veramente l'autorità politica?",
                "sideA": "Consenso",
                "sideB": "Risultato",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "L'autorità politica è moralmente difendibile solo quando deriva dalla volontà esplicita e continua dei governati.",
                    "L'equità procedurale del processo democratico è la fonte primaria del diritto di uno stato di esigere obbedienza."
                ],
                "ideasB": [
                    "La giustificazione primaria di un governo è la sua capacità di fornire sicurezza, prosperità e l'erogazione efficiente dei servizi essenziali.",
                    "La legittimità procedurale è vuota se il sistema fallisce costantemente nel produrre le condizioni materiali necessarie per una società fiorente."
                ]
            },
            {
                "topic": "Lo stato come garante della libertà vs lo stato come sua minaccia primaria: qual è la visione storicamente più difendibile?",
                "sideA": "Garante",
                "sideB": "Minaccia",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Senza il 'monopolio dell'uso legittimo della forza' per far rispettare i contratti e proteggere i diritti, la vita sarebbe uno stato di predazione privata caotica.",
                    "Lo stato moderno è l'unica entità capace di proteggere l'individuo dal potere schiacciante delle corporazioni e di altri attori non statali."
                ],
                "ideasB": [
                    "La storia dimostra che la capacità dello stato di sorveglianza, mobilitazione di massa e violenza lo rende il predatore più pericoloso di tutti.",
                    "L'espansione della burocrazia statale porta inevitabilmente alla 'gabbia d'acciaio' del controllo tecnocratico, erodendo l'agenzia individuale e l'autonomia locale."
                ]
            },
            {
                "topic": "Politica basata sui diritti vs politica basata sulle responsabilità: cosa rende una cultura pubblica più coerente?",
                "sideA": "Diritti",
                "sideB": "Responsabilità",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Concentrarsi sui diritti individuali inalienabili fornisce un robusto scudo contro la 'tirannia della maggioranza' e l'eccesso di potere statale.",
                    "Un quadro incentrato sui diritti dà potere ai gruppi emarginati per esigere parità di trattamento e protezione ai sensi della legge."
                ],
                "ideasB": [
                    "Un focus esclusivo sui diritti favorisce una cultura atomizzata e litigiosa che ignora i doveri reciproci che dobbiamo alla nostra comunità.",
                    "Una società coerente richiede un riconoscimento condiviso degli oneri collettivi e degli obblighi morali necessari per sostenere il bene comune."
                ]
            },
            {
                "topic": "L'ideale di neutralità vs l'inevitabilità di una governance carica di valori: lo stato liberale può essere veramente neutrale?",
                "sideA": "Neutralità",
                "sideB": "Carica di valori",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Lo stato deve rimanere strettamente agnostico rispetto alla 'vita buona' per garantire che tutti i cittadini possano perseguire le proprie diverse concezioni di fioritura.",
                    "La neutralità procedurale è l'unico modo per mantenere la pace sociale in una società pluralistica con quadri morali e religiosi in competizione."
                ],
                "ideasB": [
                    "Ogni legge e politica incarna implicitamente un insieme specifico di priorità morali e visioni di ciò che costituisce una società desiderabile.",
                    "La pretesa di 'neutralità' è spesso una maschera retorica per i valori della cultura dominante, presentandoli come universali e fuori discussione."
                ]
            },
            {
                "topic": "Intenzione vs ricezione: quale lettura di un'opera è autorevole?",
                "sideA": "Intenzione",
                "sideB": "Ricezione",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Un'opera d'arte è un atto comunicativo; ignorare gli obiettivi specifici del creatore porta a un profondo fallimento di comprensione e distorsione storica.",
                    "Recuperare l'intento dell'autore fornisce un confine necessario contro l'approccio 'tutto è permesso' dell'interpretazione critica."
                ],
                "ideasB": [
                    "Una volta che un'opera entra nella sfera pubblica, diventa indipendente dal suo creatore, accumulando nuovi significati basati sulla risposta del pubblico.",
                    "La lettura 'autorevole' di un testo è spesso usata come strumento di gatekeeping culturale per sopprimere interpretazioni sovversive o eterodosse."
                ]
            },
            {
                "topic": "Valore estetico vs valore morale: un'opera bella può anche essere malvagia?",
                "sideA": "Estetico",
                "sideB": "Morale",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "L'arte dovrebbe essere giudicata dalle sue qualità formali interne e dal suo potere espressivo, indipendentemente dal carattere morale del suo creatore o del soggetto.",
                    "Confondere l'estetica con l'etica porta a una cultura didattica e moralizzante che soffoca l'esplorazione creativa e la complessità."
                ],
                "ideasB": [
                    "Il potere della bellezza può essere usato per glamourizzare ideologie dannose, rendendo la responsabilità morale dell'artista inseparabile dalle sue scelte estetiche.",
                    "La vera 'grandezza artistica' è incompatibile con una visione del mondo che svaluta fondamentalmente la dignità umana o celebra la sofferenza."
                ]
            },
            {
                "topic": "L'avanguardia vs accessibilità: l'arte dovrebbe sfidare o includere?",
                "sideA": "Avanguardia",
                "sideB": "Accessibilità",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "La funzione primaria dell'arte è di interrompere la percezione abituale ed espandere i confini del possibile, anche se ciò si traduce in un'alienazione iniziale.",
                    "La 'difficoltà' dell'avanguardia è una resistenza necessaria contro i prodotti superficiali e stereotipati dell'industria culturale commerciale."
                ],
                "ideasB": [
                    "L'arte che richiede un'istruzione d'élite per essere decifrata è una forma di distinzione di classe che rafforza l'esclusione sociale.",
                    "Le opere d'arte più profonde sono quelle che raggiungono una risonanza universale, parlando a esperienze umane condivise oltre i confini culturali."
                ]
            },
            {
                "topic": "Arte istituzionalizzata vs arte irregolare (outsider art): cosa ha più peso culturale autentico?",
                "sideA": "Istituzionalizzata",
                "sideB": "Irregolare",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Le istituzioni forniscono la cura, la conservazione e il contesto accademico necessari che permettono all'arte di essere intesa come parte di una tradizione storica.",
                    "I rigorosi standard dei principali musei e accademie assicurano la conservazione dei più alti traguardi della creatività umana."
                ],
                "ideasB": [
                    "L'arte prodotta fuori dal sistema del 'mondo dell'arte' possiede un'intensità cruda e non mediata che viene spesso sterilizzata dal riconoscimento istituzionale.",
                    "La prospettiva 'outsider' è essenziale per sfidare le convenzioni stantie e le gerarchie insulari dell'establishment culturale."
                ]
            },
            {
                "topic": "Il principio di precauzione vs il principio di proazione: quale dovrebbe governare le tecnologie emergenti?",
                "sideA": "Precauzionale",
                "sideB": "Proattivo",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Quando si affrontano rischi potenzialmente esistenziali o irreversibili, l'onere della prova deve spettare a chi propone l'innovazione per dimostrarne la sicurezza.",
                    "Un approccio cauto previene il 'cieco slancio tecnologico' che ha portato a precedenti catastrofi ecologiche e sociali."
                ],
                "ideasB": [
                    "L'iper-precauzione può soffocare le innovazioni necessarie per risolvere le crisi attuali, scegliendo la certezza della sofferenza presente rispetto a rischi futuri ipotetici.",
                    "Il progresso umano richiede un approccio di 'gestione attiva' che dia priorità alla sperimentazione, all'iterazione e al coraggioso abbraccio dell'ignoto."
                ]
            },
            {
                "topic": "Il progresso scientifico come intrinsecamente buono vs il progresso come eticamente neutro: chi ha la responsabilità dell'uso della conoscenza?",
                "sideA": "Intrinsecamente buono",
                "sideB": "Eticamente neutro",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "L'espansione della conoscenza umana è un bene fondamentale che porta inevitabilmente alla riduzione della sofferenza e all'espansione della libertà.",
                    "Anche le scoperte 'pericolose' sono preferibili a uno stato di ignoranza forzata, che cede solo potere a coloro disposti a perseguire la conoscenza in segreto."
                ],
                "ideasB": [
                    "Gli strumenti scientifici sono moralmente a 'doppio uso'; il loro valore dipende interamente dai quadri politici ed etici in cui vengono impiegati.",
                    "Gli scienziati devono accettare una 'responsabilità estesa' per gli impatti sociali e ambientali prevedibili della loro ricerca."
                ]
            },
            {
                "topic": "Mitigazione del rischio esistenziale vs riduzione della sofferenza presente: dove dovrebbero risiedere le priorità morali dell'umanità?",
                "sideA": "Rischio esistenziale",
                "sideB": "Sofferenza attuale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Il peso morale di trilioni di potenziali vite future supera i bisogni immediati della generazione attuale; dobbiamo garantire la sopravvivenza a lungo termine della specie.",
                    "Concentrarsi sul presente è una forma di 'parrocchialismo temporale' che rischia la cessazione permanente dell'esperimento umano."
                ],
                "ideasB": [
                    "Il nostro obbligo morale primario è verso gli individui concreti che soffrono oggi, non verso esseri ipotetici in un futuro speculativo.",
                    "Il modo più efficace per garantire un futuro stabile è risolvere le disuguaglianze sistemiche e le crisi ecologiche che si stanno attualmente manifestando."
                ]
            },
            {
                "topic": "Coscienza umana vs intelligenza artificiale generale: una macchina potrebbe mai essere un paziente morale?",
                "sideA": "Coscienza",
                "sideB": "IA Generale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Lo status morale richiede la capacità di 'senzienza'—l'esperienza soggettiva e qualitativa del dolore e del piacere—che è unicamente biologica.",
                    "Un'IA generale, per quanto sofisticata, è in definitiva un insieme di algoritmi privi della 'vita interiore' che giustifica la preoccupazione morale."
                ],
                "ideasB": [
                    "Se una macchina esibisce marcatori comportamentali di intelligenza e sofferenza indistinguibili da quelli umani, negarle lo status morale è una forma di 'sciovinismo del carbonio'.",
                    "Dovremmo adottare un approccio 'precauzionale' all'etica delle macchine, concedendo diritti a sistemi sufficientemente complessi per evitare il rischio di sofferenza sintetica di massa."
                ]
            },
            {
                "topic": "Il progresso come reale vs il progresso come illusione: la storia si sta muovendo verso qualcosa?",
                "sideA": "Reale",
                "sideB": "Illusione",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La chiara tendenza al rialzo dell'aspettativa di vita, dell'alfabetizzazione e della riduzione globale della povertà estrema costituisce un progresso oggettivo innegabile.",
                    "L'espansione del 'cerchio morale' per includere gruppi precedentemente emarginati suggerisce una lenta ma reale maturazione di civiltà."
                ],
                "ideasB": [
                    "L'avanzamento tecnologico spesso cambia solo la scala dei nostri problemi invece di risolverli, portando a nuove forme di alienazione e capacità distruttiva.",
                    "Il 'mito del progresso' è una teleologia secolarizzata che ci rende ciechi alla natura ciclica della storia e alla costante minaccia di regressione."
                ]
            },
            {
                "topic": "Ordine liberale occidentale vs mondo multipolare: quale base è più stabile per le relazioni internazionali?",
                "sideA": "Ordine liberale",
                "sideB": "Multipolarità",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Un sistema basato sui diritti umani universali e sul diritto internazionale fornisce il quadro più affidabile per la pace e la cooperazione globale.",
                    "La leadership di una coalizione liberale dominante previene i 'dilemmi di sicurezza' e i conflitti tra grandi potenze tipici dei sistemi multipolari."
                ],
                "ideasB": [
                    "Un mondo multipolare riflette più accuratamente la diversità dei valori e degli interessi globali, prevenendo il percepito imperialismo di una singola 'egemonia'.",
                    "La stabilità si ottiene meglio attraverso un realistico 'equilibrio di potere' e il rispetto reciproco per la sovranità culturale e politica."
                ]
            },
            {
                "topic": "Memoria vs oblio: cosa è più essenziale per una sana identità collettiva?",
                "sideA": "Memoria",
                "sideB": "Oblio",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Il rifiuto di dimenticare le ingiustizie passate è l'unico modo per garantire la responsabilità e prevenire la ripetizione di atrocità storiche.",
                    "Una robusta memoria collettiva fornisce la narrazione condivisa e la continuità culturale necessarie per la coesione sociale e l'identità."
                ],
                "ideasB": [
                    "Un grado di 'oblio strategico' è spesso richiesto per superare antiche rimostranze comunitarie e raggiungere la riconciliazione civile.",
                    "La ruminazione ossessiva sulla gloria o sul trauma passati può intrappolare una società nel passato, impedendo l'adattamento innovativo richiesto per il futuro."
                ]
            },
            {
                "topic": "La tragedia dei beni comuni vs la possibilità di cooperazione: cosa ci dice la storia sulla natura umana?",
                "sideA": "Tragedia",
                "sideB": "Cooperazione",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Senza regolamentazione coercitiva o proprietà privata, gli individui daranno inevitabilmente priorità ai propri interessi a breve termine, portando all'esaurimento delle risorse condivise.",
                    "Il persistente fallimento nell'affrontare le sfide ambientali globali conferma la difficoltà intrinseca di coordinare l'azione su larga scala."
                ],
                "ideasB": [
                    "La storia è piena di esempi di comunità che gestiscono con successo i 'beni comuni' attraverso sistemi complessi di norme sociali e monitoraggio reciproco.",
                    "Gli esseri umani sono 'cooperatori obbligati'; i nostri più grandi traguardi sono il risultato della nostra capacità unica di collaborazione flessibile su larga scala."
                ]
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
