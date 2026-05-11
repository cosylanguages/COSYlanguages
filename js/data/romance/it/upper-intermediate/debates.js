(function() {
    const data = [{
                "topic": "La settimana lavorativa di quattro giorni vs la settimana di cinque giorni — quale modello avvantaggia maggiormente lavoratori e datori di lavoro?",
                "sideA": "Settimana di 4 giorni",
                "sideB": "Settimana di 5 giorni",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Migliora il benessere dei dipendenti e riduce il burnout, portando a una maggiore produttività durante le ore lavorative.", "Permette un migliore equilibrio tra vita professionale e privata, il che può migliorare significativamente i tassi di fidelizzazione del personale."],
                "ideasB": ["Potrebbe portare a un aumento dello stress se la stessa quantità di lavoro deve essere compressa in meno giorni.", "Potrebbe causare sfide operative per le aziende che devono essere disponibili per i clienti cinque o sette giorni alla settimana."]
            },
            {
                "topic": "Reddito di base universale vs welfare mirato — quale è la rete di sicurezza più efficace per gli adulti che lavorano?",
                "sideA": "UBI",
                "sideB": "Welfare mirato",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Elimina la 'trappola della povertà' in cui gli individui perdono i sussidi non appena iniziano a guadagnare un reddito modesto.", "Riduce i costi amministrativi e gli ostacoli burocratici associati alla verifica dei mezzi."],
                "ideasB": ["I sistemi mirati garantiscono che le limitate risorse pubbliche siano dirette verso coloro che ne hanno più bisogno.", "Un pagamento universale potrebbe essere proibitivamente costoso e potrebbe potenzialmente scoraggiare alcuni dal cercare lavoro."]
            },
            {
                "topic": "La gig economy vs l'impiego a tempo indeterminato — quale modello serve meglio i lavoratori nel lungo periodo?",
                "sideA": "Gig economy",
                "sideB": "Tempo indeterminato",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Offre una flessibilità senza pari, permettendo agli individui di scegliere quando e dove lavorare.", "Offre l'opportunità di diversificare le proprie competenze lavorando su una varietà di progetti diversi contemporaneamente."],
                "ideasB": ["I ruoli permanenti offrono vantaggi essenziali come ferie pagate, assicurazione sanitaria e contributi pensionistici.", "Fornisce un reddito stabile e prevedibile, fondamentale per la pianificazione finanziaria e la sicurezza a lungo termine."]
            },
            {
                "topic": "Meritocrazia vs vantaggio strutturale — cosa spiega più accuratamente il successo professionale?",
                "sideA": "Meritocrazia",
                "sideB": "Vantaggio strutturale",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Il duro lavoro e il talento sono i principali motori del progresso in un mercato equo e competitivo.", "Concentrarsi sul merito incoraggia gli individui a migliorare costantemente le proprie competenze e a dare il meglio di sé."],
                "ideasB": ["Fattori come il background socio-economico e il networking spesso giocano un ruolo decisivo nell'aprire le porte.", "Le disuguaglianze sistemiche possono impedire anche alle persone più talentuose di raggiungere il loro pieno potenziale."]
            },
            {
                "topic": "Trasparenza retributiva vs privacy salariale — cosa crea un luogo di lavoro più equo?",
                "sideA": "Trasparenza",
                "sideB": "Privacy",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Aiuta a identificare e colmare i divari retributivi di genere e razziali rendendo visibili le discrepanze.", "Favorisce una cultura della fiducia e garantisce che la remunerazione si basi su criteri oggettivi piuttosto che sulle capacità di negoziazione."],
                "ideasB": ["Rivelare gli stipendi può portare a risentimento e attriti tra colleghi, danneggiando potenzialmente il morale del team.", "Rispettare la privacy consente maggiore flessibilità nel premiare le prestazioni eccezionali senza causare controversie pubbliche."]
            },
            {
                "topic": "Automazione vs lavoro umano — quale è la maggiore minaccia a lungo termine per l'occupazione adulta?",
                "sideA": "Automazione",
                "sideB": "Lavoro umano",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["L'IA e la robotica possono eseguire compiti ripetitivi in modo più efficiente e conveniente rispetto agli umani.", "I progressi tecnologici minacciano sempre più ruoli complessi che in precedenza si pensava fossero sicuri."],
                "ideasB": ["I lavoratori umani possiedono qualità uniche come empatia, creatività e pensiero critico che le macchine non possono replicare.", "Le nuove tecnologie spesso creano settori e categorie lavorative completamente nuovi che richiedono la supervisione umana."]
            },
            {
                "topic": "Lavoro a distanza vs presenza in ufficio — cosa è meglio per la progressione di carriera e la cultura del team?",
                "sideA": "Lavoro a distanza",
                "sideB": "Presenza in ufficio",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Eliminare il pendolarismo fa risparmiare tempo ed energia, permettendo ai dipendenti di essere più concentrati e produttivi.", "L'accesso a un pool di talenti globale permette alle aziende di assumere le persone migliori indipendentemente dalla loro posizione geografica."],
                "ideasB": ["Le interazioni spontanee faccia a faccia portano spesso a una risoluzione dei problemi e a un'innovazione più creative.", "Essere fisicamente presenti rende più facile costruire un rapporto con i mentori e rimanere visibili al senior management."]
            },
            {
                "topic": "Congedo parentale paritario per uomini e donne vs congedo di maternità più lungo — quale politica è più equa?",
                "sideA": "Congedo paritario",
                "sideB": "Maternità più lunga",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Incoraggia una divisione più equa delle responsabilità di cura dei figli fin dall'inizio.", "Riduce la 'penalità della maternità' garantendo che entrambi i genitori si assentino dal lavoro."],
                "ideasB": ["Riconosce la realtà fisica del parto e l'importanza del recupero materno e dell'allattamento al seno.", "Il supporto mirato per le madri potrebbe essere più appropriato culturalmente e praticamente per molte famiglie."]
            },
            {
                "topic": "Scegliere di non avere figli vs pressione sociale per avere una famiglia — cosa merita più rispetto?",
                "sideA": "Senza figli",
                "sideB": "Pressione familiare",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Gli individui dovrebbero avere l'autonomia di decidere come condurre la propria vita senza subire giudizi.", "Rinunciare alla genitorialità può essere una scelta responsabile date le preoccupazioni ambientali e i vincoli finanziari."],
                "ideasB": ["Le unità familiari sono fondamentali per la stabilità e la continuazione della società e dei suoi valori culturali.", "Il desiderio di crescere una famiglia è un istinto umano profondamente radicato che dovrebbe essere sostenuto e celebrato."]
            },
            {
                "topic": "Il matrimonio come istituzione vs la convivenza senza matrimonio — cosa è più rilevante oggi?",
                "sideA": "Matrimonio",
                "sideB": "Convivenza",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Fornisce un quadro legale e finanziario chiaro che protegge entrambi i partner e i loro figli.", "Rappresenta un impegno pubblico che può rafforzare il legame tra i partner e fornire stabilità sociale."],
                "ideasB": ["Le relazioni moderne dovrebbero basarsi sulla fiducia reciproca e sull'impegno piuttosto che su un contratto legale.", "La convivenza offre maggiore flessibilità ed evita il processo costoso e complicato di un potenziale divorzio."]
            },
            {
                "topic": "Famiglie a doppio reddito vs un partner che resta a casa — quale modello è migliore per bambini e adulti?",
                "sideA": "Doppio reddito",
                "sideB": "Partner a casa",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Fornisce maggiore sicurezza finanziaria e permette a entrambi i partner di perseguire le proprie ambizioni professionali.", "Dà un esempio positivo ai figli dimostrando l'uguaglianza di genere sia nel lavoro che nella vita domestica."],
                "ideasB": ["Avere un genitore a casa garantisce un supporto emotivo e una supervisione costanti durante gli anni formativi del bambino.", "Riduce lo stress di bilanciare due carriere impegnative con la complessità della gestione domestica."]
            },
            {
                "topic": "Il divario retributivo di genere come problema strutturale vs una questione di scelte individuali — quale spiegazione ha più peso?",
                "sideA": "Problema strutturale",
                "sideB": "Scelte individuali",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["I pregiudizi inconsci e le barriere sistemiche spesso impediscono alle donne di salire a ruoli di leadership ben retribuiti.", "La società tende a sottovalutare le professioni tradizionalmente dominate dalle donne, come la cura e l'istruzione."],
                "ideasB": ["Le differenze di guadagno possono spesso essere attribuite a decisioni personali riguardanti l'orario di lavoro e le interruzioni di carriera.", "Le donne possono scegliere percorsi di carriera più flessibili o meno rischiosi che offrono naturalmente compensi diversi."]
            },
            {
                "topic": "La proprietà della casa come obiettivo vs un mercato degli affitti professionale — quale modello abitativo si adatta meglio agli adulti moderni?",
                "sideA": "Proprietà",
                "sideB": "Affitto professionale",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": ["Fornisce sicurezza finanziaria a lungo termine e un bene che può essere tramandato alle generazioni future.", "Permette agli individui di avere il controllo completo sul proprio ambiente di vita e di apportare miglioramenti permanenti."],
                "ideasB": ["Un settore degli affitti professionale offre maggiore mobilità per coloro che devono spostarsi per lavoro o stile di vita.", "L'affitto elimina l'onere dei costi di manutenzione e i rischi finanziari associati alle fluttuazioni del mercato immobiliare."]
            },
            {
                "topic": "La gentrificazione come miglioramento vs la gentrificazione come spostamento — quale inquadramento è più onesto?",
                "sideA": "Miglioramento",
                "sideB": "Spostamento",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Gli investimenti possono rivitalizzare aree trascurate, portando a infrastrutture migliori e strade più sicure.", "L'aumento del valore delle proprietà può stimolare l'economia locale e creare nuove opportunità commerciali per i residenti."],
                "ideasB": ["L'aumento degli affitti spesso costringe i residenti di lunga data e le piccole imprese ad abbandonare le proprie comunità.", "La gentrificazione può cancellare la storia culturale e il tessuto sociale di un quartiere, rendendolo inaccessibile."]
            },
            {
                "topic": "Densità urbana vs espansione suburbana — quale è il modello migliore per città vivibili?",
                "sideA": "Densità urbana",
                "sideB": "Espansione suburbana",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": ["Le città compatte sono più sostenibili in quanto riducono la necessità di auto e supportano trasporti pubblici efficienti.", "Una maggiore densità favorisce comunità più vivaci con facile accesso a cultura, commercio e servizi essenziali."],
                "ideasB": ["La vita suburbana offre più spazio, privacy e un ambiente più tranquillo per le famiglie per crescere i figli.", "Una densità inferiore può ridurre l'effetto 'isola di calore urbana' e fornire maggiore accesso agli spazi verdi."]
            },
            {
                "topic": "Vivere vicino alla famiglia vs allontanarsi per opportunità — quale scelta produce un migliore benessere a lungo termine?",
                "sideA": "Vivere vicino",
                "sideB": "Allontanarsi",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["La vicinanza alla famiglia fornisce una rete di sicurezza emotiva cruciale e supporto pratico, specialmente per i genitori.", "Mantenere forti radici locali contribuisce a un senso di appartenenza e identità comunitaria."],
                "ideasB": ["Il trasferimento può aprire prospettive di carriera significativamente migliori e un maggiore potenziale di guadagno.", "Vivere in modo indipendente in un nuovo ambiente favorisce la crescita personale, la resilienza e una prospettiva di vita più ampia."]
            },
            {
                "topic": "Una popolazione che invecchia come crisi vs come risorsa — quale inquadramento è più produttivo?",
                "sideA": "Crisi",
                "sideB": "Risorsa",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["L'aumento dell'indice di dipendenza esercita un'immensa pressione sui sistemi sanitari e sui fondi pensione.", "Una forza lavoro in calo potrebbe portare alla stagnazione economica e a una mancanza di innovazione a lungo termine."],
                "ideasB": ["Gli adulti più anziani possiedono un patrimonio di esperienza, saggezza e conoscenza istituzionale inestimabile per la società.", "La 'silver economy' crea nuovi mercati e opportunità di volontariato e tutoraggio intergenerazionale."]
            },
            {
                "topic": "Responsabilità personale per la salute vs fattori sistemici — cosa ha più peso nello spiegare i risultati sanitari?",
                "sideA": "Responsabilità personale",
                "sideB": "Fattori sistemici",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": ["Le scelte individuali riguardanti dieta, esercizio fisico e fumo sono le cause più dirette di molte malattie croniche.", "Dare alle persone il potere di farsi carico della propria salute può portare a risultati migliori e costi pubblici inferiori."],
                "ideasB": ["Lo status socio-economico e l'accesso a cibo nutriente e conveniente sono spesso al di fuori del controllo diretto di un individuo.", "Fattori ambientali come l'inquinamento e le condizioni di lavoro hanno un impatto profondo sulla salute di una popolazione."]
            },
            {
                "topic": "Giornate per la salute mentale come legittimo diritto sul posto di lavoro vs fonte di abusi — dove dovrebbero tracciare il limite i datori di lavoro?",
                "sideA": "Diritto legittimo",
                "sideB": "Fonte di abusi",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Riconoscere la salute mentale come altrettanto importante della salute fisica riduce lo stigma e previene il burnout a lungo termine.", "Supportare il benessere dei dipendenti porta a un morale più alto e a una migliore produttività a lungo termine."],
                "ideasB": ["Senza linee guida chiare, alcuni dipendenti potrebbero usare i giorni di salute mentale per evitare scadenze o prendere ferie extra.", "Un'elevata frequenza di assenze non programmate può interrompere i flussi di lavoro e gravare ingiustamente sugli altri membri del team."]
            },
            {
                "topic": "Medicina preventiva vs medicina curativa — quale dovrebbe ricevere più finanziamenti pubblici?",
                "sideA": "Preventiva",
                "sideB": "Curativa",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": ["Investire in vaccini e iniziative per uno stile di vita sano può prevenire le malattie prima ancora che si manifestino.", "La prevenzione è molto più conveniente del trattamento di malattie avanzate, facendo risparmiare miliardi al sistema sanitario."],
                "ideasB": ["L'etica sociale richiede di fornire la migliore assistenza possibile a coloro che attualmente soffrono di malattie.", "La medicina curativa è essenziale per gestire le emergenze e le condizioni croniche che non possono essere prevenute."]
            },
            {
                "topic": "Medicina anti-invecchiamento vs invecchiare con grazia — quale atteggiamento è più coerente?",
                "sideA": "Anti-age",
                "sideB": "Invecchiare con grazia",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": ["I progressi scientifici dovrebbero essere usati per estendere la durata della vita umana e migliorare la qualità della vita negli anni successivi.", "Combattere i processi biologici dell'invecchiamento potrebbe alleviare l'enorme peso delle malattie legate all'età."],
                "ideasB": ["L'invecchiamento è una parte naturale dell'esperienza umana che dovrebbe essere accettata e abbracciata con dignità.", "L'ossessione per la giovinezza può portare a procedure mediche non necessarie e alla mancata valorizzazione della saggezza dell'età."]
            },
            {
                "topic": "Tecnologia di sorveglianza per la sicurezza pubblica vs diritto alla privacy — dove dovrebbe risiedere l'equilibrio?",
                "sideA": "Sicurezza pubblica",
                "sideB": "Privacy",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["L'uso diffuso di telecamere a circuito chiuso e del riconoscimento facciale può fungere da potente deterrente per criminalità e terrorismo.", "Il monitoraggio dei dati è essenziale per identificare le minacce e rispondere rapidamente alle emergenze in tempo reale."],
                "ideasB": ["La sorveglianza di massa può portare a un 'effetto raggelante' in cui le persone hanno paura di esprimersi o protestare.", "Proteggere i dati personali è un diritto umano fondamentale che impedisce l'abuso di potere da parte di governi o aziende."]
            },
            {
                "topic": "I social media come strumento di impegno civile vs come motore di polarizzazione — quale effetto domina?",
                "sideA": "Impegno civile",
                "sideB": "Polarizzazione",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["Le piattaforme consentono la rapida diffusione delle informazioni e l'organizzazione di movimenti dal basso.", "Fornisce una voce ai gruppi emarginati che sono spesso trascurati dai media tradizionali."],
                "ideasB": ["Gli algoritmi tendono a creare camere dell'eco che rafforzano i pregiudizi esistenti e l'ostilità verso le opinioni opposte.", "La diffusione di disinformazione e 'fake news' può minare i processi democratici e la coesione sociale."]
            },
            {
                "topic": "L'IA nel reclutamento vs giudizio umano — cosa produce decisioni di assunzione più eque?",
                "sideA": "IA",
                "sideB": "Giudizio umano",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["L'IA può essere programmata per ignorare le informazioni demografiche, riducendo potenzialmente i pregiudizi e le discriminazioni umane.", "Gli algoritmi possono analizzare efficacemente vaste quantità di dati per trovare i candidati più qualificati per un ruolo."],
                "ideasB": ["Gli algoritmi possono inavvertitamente apprendere e replicare i pregiudizi esistenti presenti nei dati storici su cui sono addestrati.", "I reclutatori umani possono valutare le 'soft skills', l'adattamento culturale e il potenziale in modi che il software non può attualmente eguagliare."]
            },
            {
                "topic": "Il diritto all'oblio online vs il diritto all'informazione del pubblico — cosa dovrebbe avere la precedenza?",
                "sideA": "Diritto all'oblio",
                "sideB": "Diritto info",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["Gli individui dovrebbero poter superare gli errori passati senza essere perseguitati per sempre online.", "La privacy personale dovrebbe includere il diritto di rimuovere informazioni obsolete o irrilevanti dai risultati di ricerca."],
                "ideasB": ["Il pubblico ha un interesse legittimo ad accedere a documenti storici accurati, specialmente riguardanti figure pubbliche.", "Censurare i risultati di ricerca potrebbe portare a una visione distorta della verità e minare la libertà di stampa."]
            },
            {
                "topic": "Voto obbligatorio vs voto volontario — cosa produce democrazie più sane?",
                "sideA": "Obbligatorio",
                "sideB": "Volontario",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Garantisce che il governo abbia un mandato chiaro da parte dell'intera popolazione, non solo di quella politicamente più attiva.", "Incoraggia i cittadini a rimanere informati sulle questioni politiche e a prendere seriamente le proprie responsabilità civiche."],
                "ideasB": ["Il diritto di voto dovrebbe includere anche il diritto di scegliere di non partecipare se non ci si sente rappresentati.", "I sistemi volontari garantiscono che chi vota sia realmente impegnato e motivato dalle proprie convinzioni."]
            },
            {
                "topic": "Impegno politico attraverso la protesta vs attraverso i canali istituzionali — cosa è più efficace per gli adulti di oggi?",
                "sideA": "Protesta",
                "sideB": "Istituzionale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Le proteste possono portare questioni urgenti all'attenzione dell'opinione pubblica e forzare un'azione politica immediata.", "L'azione diretta fornisce alle persone un modo per esprimere la propria frustrazione quando i sistemi tradizionali sembrano non rispondere."],
                "ideasB": ["Lavorare all'interno dei canali stabiliti porta a cambiamenti più sostenibili e legali.", "L'impegno istituzionale consente un dibattito sfumato e la complessa negoziazione necessaria per approvare una legislazione efficace."]
            },
            {
                "topic": "Identità nazionale vs identità europea o globale — cosa è più significativo per gli adulti nel 2026?",
                "sideA": "Identità nazionale",
                "sideB": "Identità globale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["La storia, la lingua e la cultura nazionali condivise forniscono un forte senso di appartenenza e solidarietà sociale.", "Le istituzioni nazionali forti sono spesso le più efficaci nel proteggere i diritti e il benessere dei propri cittadini."],
                "ideasB": ["Le sfide globali richiedono un'identità unificata e una cooperazione internazionale.", "In un mondo interconnesso, molte persone si sentono più allineate con i valori universali che con i ristretti interessi nazionali."]
            },
            {
                "topic": "Aumento delle tasse per finanziare i servizi pubblici vs tagli alla spesa — quale è la scelta politica più difendibile?",
                "sideA": "Aumento tasse",
                "sideB": "Tagli alla spesa",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Tasse più alte permettono la fornitura di istruzione e sanità di alta qualità a beneficio di tutti.", "L'investimento pubblico è necessario per mantenere le infrastrutture e sostenere i membri più vulnerabili della società."],
                "ideasB": ["Abbassare le tasse può stimolare la crescita economica lasciando più soldi nelle mani di individui e imprese.", "I tagli alla spesa costringono i governi a essere più efficienti ed eliminare programmi dispendiosi o non necessari."]
            },
            {
                "topic": "Ammettere di non avere idea di come funzioni la propria pensione vs fingere con sicurezza di saperlo — quale è l'esperienza adulta più universale?",
                "sideA": "Ammettere ignoranza",
                "sideB": "Fingere",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": ["I sistemi finanziari sono così complessi che ammettere confusione è la posizione più onesta per la maggior parte delle persone.", "L'onestà sulla propria alfabetizzazione finanziaria può portare a risultati migliori se incoraggia a cercare consulenza professionale."],
                "ideasB": ["La pressione per apparire competenti porta spesso gli adulti a fingere conoscenza in materia finanziaria.", "Fingere di capire argomenti complessi è una comune strategia di sopravvivenza sociale in molti contesti professionali."]
            },
            {
                "topic": "Essere la persona che pianifica sempre gli eventi sociali vs essere sempre quella che si limita a presentarsi — quale ruolo è più estenuante?",
                "sideA": "L'organizzatore",
                "sideB": "L'ospite",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Organizzare eventi richiede tempo ed energia mentale, oltre allo stress di gestire le aspettative di tutti.", "Chi pianifica sente spesso il peso della responsabilità per il successo di un evento e il divertimento dei partecipanti."],
                "ideasB": ["Essere sempre un ospite può portare a una sensazione di mancanza di controllo e allo sforzo di adattarsi costantemente ai piani altrui.", "Socializzare può essere mentalmente faticoso anche per chi non ha la responsabilità aggiuntiva dell'organizzazione."]
            },
            {
                "topic": "Avere una forte opinione sulle abitudini culinarie dei colleghi vs non importarsene affatto — quale persona è più tollerabile?",
                "sideA": "Opinione forte",
                "sideB": "Indifferenza",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Mantenere standard elevati di pulizia e rispetto negli spazi condivisi è essenziale per un ambiente di lavoro produttivo.", "Chi si preoccupa delle abitudini condivise spesso tutela la salute e il comfort dell'intero team."],
                "ideasB": ["Un atteggiamento rilassato previene conflitti non necessari e favorisce un luogo di lavoro più tollerante e meno stressante.", "Concentrarsi sul lavoro piuttosto che sulle banali abitudini domestiche rende il collega più professionale."]
            },
            {
                "topic": "Partecipare a ogni evento sociale facoltativo di lavoro vs non partecipare mai a nessuno — quale strategia è migliore per la carriera e la salute mentale?",
                "sideA": "Tutti",
                "sideB": "Nessuno",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Socializzare con i colleghi fuori dall'orario di lavoro può costruire relazioni forti e aprire opportunità di networking.", "Mostrare impegno verso la vita sociale del team può rendere un individuo più socievole e integrato."],
                "ideasB": ["Stabilire confini chiari tra lavoro e vita privata è essenziale per mantenere la salute mentale a lungo termine.", "La salute mentale è meglio preservata trascorrendo tempo di qualità con famiglia e amici piuttosto che sentirsi obbligati a eventi di lavoro."]
            },
            {
                "topic": "Adulti che sono ancora confusi dalla loro dichiarazione dei redditi vs adulti che si divertono a farla — quale gruppo è più affidabile?",
                "sideA": "Confusi",
                "sideB": "Divertiti",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": ["Le persone confuse sono spesso più oneste riguardo alle frustrazioni del navigare nei sistemi burocratici.", "Ammettere difficoltà con compiti complessi è un segno di autenticità piuttosto che cercare di proiettare un'immagine perfetta."],
                "ideasB": ["Provare piacere in compiti meticolosi suggerisce un alto livello di competenza, attenzione ai dettagli e affidabilità.", "Chi ama l'organizzazione e la conformità è probabilmente responsabile e affidabile anche in altre aree della vita."]
            },
            {
                "topic": "Lamentarsi del costo della vita con gli amici vs fingere che tutto vada bene — quale è la risposta adulta più onesta?",
                "sideA": "Lamentarsi",
                "sideB": "Fingere tutto bene",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Condividere le difficoltà finanziarie crea un senso di solidarietà e permette agli amici di sostenersi a vicenda.", "Discutere apertamente delle sfide economiche è un riflesso più accurato della realtà attuale per molte persone."],
                "ideasB": ["Mantenere una prospettiva positiva può essere un modo per gestire lo stress e non far dominare le preoccupazioni finanziarie.", "Alcuni preferiscono mantenere privata la propria situazione finanziaria per mantenere la dignità ed evitare di gravare sugli altri."]
            },
            {
                "topic": "Social media vs interazioni faccia a faccia — cosa è meglio per costruire relazioni?",
                "sideA": "Social media",
                "sideB": "Faccia a faccia",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Permette una comunicazione costante e la possibilità di mantenere collegamenti a grandi distanze.", "Fornisce una piattaforma per trovare e connettersi con comunità di persone che condividono interessi di nicchia."],
                "ideasB": ["La presenza fisica e gli indizi non verbali sono essenziali per costruire una fiducia profonda e un'intimità emotiva.", "Le interazioni di persona hanno meno probabilità di essere interpretate male e favoriscono connessioni più significative."]
            },
            {
                "topic": "Vita urbana vs vita rurale — quale offre una migliore qualità della vita?",
                "sideA": "Urbana",
                "sideB": "Rurale",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": ["Le città offrono una ricchezza di opportunità culturali, educative e professionali non disponibili nelle aree rurali.", "Il trasporto pubblico e i servizi concentrati rendono la vita urbana più comoda e diversificata."],
                "ideasB": ["Le aree rurali offrono un ambiente tranquillo con meno inquinamento, più spazio e un legame più forte con la natura.", "Un ritmo di vita più lento e comunità più piccole possono portare a meno stress e legami sociali più significativi."]
            },
            {
                "topic": "Apprendimento online vs aula tradizionale — quale è il futuro dell'istruzione?",
                "sideA": "Online",
                "sideB": "Aula",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Fornisce flessibilità agli studenti per imparare al proprio ritmo e bilanciare l'istruzione con altri impegni.", "Gli strumenti tecnologici possono offrire esperienze di apprendimento personalizzate e accesso a risorse globali."],
                "ideasB": ["L'interazione faccia a faccia con insegnanti e compagni è cruciale per sviluppare abilità sociali e capacità collaborative.", "Un'aula fisica fornisce un ambiente strutturato che può favorire la concentrazione e la disciplina."]
            },
            {
                "topic": "Energia rinnovabile vs energia nucleare — quale è la soluzione migliore per il clima?",
                "sideA": "Rinnovabile",
                "sideB": "Nucleare",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["L'energia solare ed eolica sono sempre più convenienti e non producono scorie radioattive.", "Investire nelle rinnovabili incoraggia la produzione di energia decentralizzata e promuove l'innovazione tecnologica."],
                "ideasB": ["L'energia nucleare fornisce un 'carico di base' costante e affidabile non dipendente dalle condizioni meteorologiche.", "La moderna tecnologia nucleare genera enormi quantità di elettricità con emissioni di carbonio estremamente basse."]
            },
            {
                "topic": "Fast fashion vs abbigliamento sostenibile — possiamo permetterci di essere etici?",
                "sideA": "Fast fashion",
                "sideB": "Sostenibile",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Fornisce abbigliamento accessibile per chi ha un reddito basso, rendendo la moda più democratica.", "L'industria della fast fashion crea milioni di posti di lavoro nei paesi in via di sviluppo e contribuisce al commercio globale."],
                "ideasB": ["L'abbigliamento sostenibile è di qualità superiore e dura più a lungo, il che è più economico ed ecologico a lungo termine.", "Sostenere marchi etici aiuta a combattere lo sfruttamento dei lavoratori e i massicci danni ambientali causati dall'industria."]
            },
            {
                "topic": "Specializzarsi presto vs un'istruzione generale ampia — cosa prepara meglio gli studenti alla vita?",
                "sideA": "Specializzazione",
                "sideB": "Istruzione ampia",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Sviluppare una profonda competenza in un campo specifico può portare a un percorso di carriera più mirato.", "La specializzazione precoce permette di padroneggiare abilità complesse molto apprezzate nel mercato del lavoro moderno."],
                "ideasB": ["Un'istruzione ampia favorisce il pensiero critico tra diverse discipline e prepara a un futuro imprevedibile.", "Imparare una varietà di materie aiuta a scoprire le proprie passioni e a diventare cittadini più completi."]
            },
            {
                "topic": "Capacità di pensiero critico vs conoscenza della materia — a cosa dovrebbero dare priorità le scuole?",
                "sideA": "Pensiero critico",
                "sideB": "Conoscenza della materia",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Insegnare ad analizzare, valutare e sintetizzare le informazioni è più importante che memorizzare fatti.", "Il pensiero critico è un'abilità trasferibile essenziale per la risoluzione dei problemi in qualsiasi contesto."],
                "ideasB": ["Una solida base di conoscenze specifiche è necessaria prima di poter iniziare a pensare criticamente a un argomento.", "La conoscenza approfondita fornisce il contesto e le prove richieste per un'analisi significativa e accurata."]
            },
            {
                "topic": "Tasse universitarie vs università gratuita — quale modello è più equo?",
                "sideA": "Tasse universitarie",
                "sideB": "Università gratuita",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Le tasse possono garantire che le università siano ben finanziate e incentivare gli studenti a studiare seriamente.", "Un sistema di tasse assicura che chi beneficia maggiormente di una laurea contribuisca al costo della propria istruzione."],
                "ideasB": ["L'istruzione superiore dovrebbe essere un diritto fondamentale accessibile a tutti, indipendentemente dal reddito.", "L'università gratuita impedisce agli studenti di laurearsi con debiti enormi e incoraggia la mobilità sociale."]
            },
            {
                "topic": "Test standardizzati vs valutazione del portfolio — cosa riflette più accuratamente le capacità?",
                "sideA": "Test standardizzati",
                "sideB": "Valutazione portfolio",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Fornisce un modo oggettivo e coerente per confrontare le prestazioni degli studenti tra diverse scuole.", "I test a tempo preparano gli studenti agli ambienti ad alta pressione che potrebbero affrontare nelle loro carriere."],
                "ideasB": ["I portfolio mostrano i progressi e i risultati in un lungo periodo, fornendo una visione più completa delle abilità.", "Una varietà di campioni di lavoro permette di valutare creatività, persistenza e applicazione pratica."]
            },
            {
                "topic": "Intelligenza accademica vs intelligenza emotiva — cosa conta di più per il successo?",
                "sideA": "Intelligenza accademica",
                "sideB": "Intelligenza emotiva",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["L'elevata capacità cognitiva e l'esperienza tecnica sono spesso i requisiti primari per professioni impegnative.", "Il successo accademico è un indicatore di disciplina, potere analitico e capacità di padroneggiare informazioni complesse."],
                "ideasB": ["La capacità di gestire le emozioni e costruire relazioni è fondamentale per la leadership e il lavoro di squadra.", "L'intelligenza emotiva aiuta a navigare nelle complessità sociali e ad adattarsi alle sfide del mondo moderno."]
            },
            {
                "topic": "Insegnare la creatività vs insegnare la disciplina — quale dovrebbe essere il focus dell'istruzione moderna?",
                "sideA": "Creatività",
                "sideB": "Disciplina",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Incentivare la creatività è essenziale per l'innovazione e per trovare soluzioni nuove a problemi complessi.", "L'istruzione dovrebbe incoraggiare gli studenti a pensare fuori dagli schemi e a sviluppare i propri talenti unici."],
                "ideasB": ["Sviluppare la disciplina e una forte etica del lavoro è fondamentale per raggiungere obiettivi a lungo termine.", "Un ambiente strutturato aiuta gli studenti a costruire la persistenza e la concentrazione necessarie per abilità difficili."]
            },
            {
                "topic": "Regolamentazione dei social media vs libertà di espressione — a cosa dovrebbe essere data la priorità?",
                "sideA": "Regolamentazione",
                "sideB": "Libertà di espressione",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["La supervisione del governo è necessaria per prevenire la diffusione di disinformazione dannosa e discorsi d'odio.", "La regolamentazione può ritenere i giganti tecnologici responsabili dell'impatto dei loro algoritmi sul discorso pubblico."],
                "ideasB": ["Il diritto di esprimersi senza censura è un pilastro della democrazia e deve essere protetto ad ogni costo.", "Un'eccessiva regolamentazione potrebbe portare alla soppressione delle voci dissenzienti e dare ai governi troppo potere."]
            },
            {
                "topic": "Curatela algoritmica vs selezione editoriale — quale è il modo più affidabile di fornire notizie?",
                "sideA": "Algoritmi",
                "sideB": "Selezione editoriale",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["Gli algoritmi possono fornire una gamma più ampia di prospettive basate sui dati degli utenti piuttosto che sui pregiudizi di un editore.", "I sistemi automatizzati possono elaborare le informazioni molto più velocemente degli umani, fornendo aggiornamenti in tempo reale."],
                "ideasB": ["Gli editori umani forniscono contesto essenziale, supervisione etica e un impegno per l'accuratezza giornalistica.", "I giornalisti professionisti possono indagare su storie complesse in modi che gli algoritmi non possono attualmente eguagliare."]
            },
            {
                "topic": "Crescita economica vs protezione ambientale — possono coesistere o una deve cedere il passo?",
                "sideA": "Crescita economica",
                "sideB": "Protezione ambientale",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["La continua crescita economica è necessaria per finanziare la ricerca e lo sviluppo di tecnologie verdi.", "La crescente prosperità permette alle società di investire di più nella conservazione e nella transizione ecologica."],
                "ideasB": ["Una crescita infinita su un pianeta finito è impossibile; dobbiamo dare priorità alla salute del pianeta rispetto al PIL.", "Proteggere la biodiversità e il clima è un prerequisito per qualsiasi stabilità economica o benessere umano a lungo termine."]
            },
            {
                "topic": "Tasse sul carbonio vs sussidi verdi — quale è la politica climatica più efficace?",
                "sideA": "Tasse sul carbonio",
                "sideB": "Sussidi verdi",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Dare un prezzo al carbonio fornisce un chiaro incentivo di mercato per ridurre le emissioni.", "Le entrate fiscali possono essere usate per finanziare servizi pubblici o restituite ai cittadini per compensare i costi energetici."],
                "ideasB": ["Incentivi finanziari per energie rinnovabili e veicoli elettrici possono accelerare la transizione ecologica.", "I sussidi aiutano ad abbassare il costo iniziale delle tecnologie verdi, rendendole più accessibili al grande pubblico."]
            },
            {
                "topic": "Decrescita vs crescita sostenibile — quale è la risposta giusta alla crisi climatica?",
                "sideA": "Decrescita",
                "sideB": "Crescita sostenibile",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Dobbiamo ridurre intenzionalmente produzione e consumo nelle nazioni ricche per restare entro i limiti planetari.", "Un focus sul benessere e sulla comunità piuttosto che sulla ricchezza materiale può portare a una società più sostenibile."],
                "ideasB": ["Possiamo disaccoppiare la crescita dall'impatto ambientale attraverso innovazione, efficienza ed energia rinnovabile.", "La crescita sostenibile fornisce le risorse per sollevare le persone dalla povertà proteggendo l'ambiente."]
            },
            {
                "topic": "Responsabilità individuale vs responsabilità aziendale — chi è più colpevole per i danni ambientali?",
                "sideA": "Responsabilità individuale",
                "sideB": "Responsabilità aziendale",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["I cambiamenti collettivi nei comportamenti individuali possono avere un impatto massiccio sull'ambiente.", "I consumatori hanno il potere di guidare il cambiamento scegliendo prodotti sostenibili e pretendendo di più dalle aziende."],
                "ideasB": ["Un piccolo numero di grandi aziende è responsabile della stragrande maggioranza delle emissioni globali.", "Il cambiamento sistemico deve essere guidato da chi ha più potere piuttosto che porre l'onere sugli individui."]
            },
            {
                "topic": "Democrazia diretta vs democrazia rappresentativa — quale è più efficace?",
                "sideA": "Democrazia diretta",
                "sideB": "Democrazia rappresentativa",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Permettere ai cittadini di votare direttamente su leggi e politiche assicura che il governo rifletta la volontà del popolo.", "La partecipazione diretta favorisce una cittadinanza più impegnata che si assume la responsabilità della propria società."],
                "ideasB": ["I rappresentanti eletti hanno il tempo e l'esperienza per studiare questioni complesse e prendere decisioni informate.", "I sistemi rappresentativi proteggono dalla 'tirannia della maggioranza' e garantiscono il rispetto dei diritti delle minoranze."]
            },
            {
                "topic": "Forte governo centrale vs autonomia regionale — cosa serve meglio i cittadini?",
                "sideA": "Governo centrale",
                "sideB": "Autonomia regionale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Un'autorità centrale forte può garantire standard coerenti e uguali diritti per tutti i cittadini in una nazione.", "I governi nazionali sono meglio attrezzati per gestire sfide su larga scala come la sicurezza nazionale."],
                "ideasB": ["I governi regionali sono più vicini alle persone e possono comprendere meglio i bisogni locali e le differenze culturali.", "L'autonomia permette di sperimentare diverse politiche che possono poi essere adottate da altre regioni se hanno successo."]
            },
            {
                "topic": "Meritocrazia vs azioni positive — quale è la base più equa per l'opportunità?",
                "sideA": "Meritocrazia",
                "sideB": "Azioni positive",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Premiare gli individui esclusivamente in base al talento e all'impegno è il modo più equo di allocare le opportunità.", "Un sistema basato sul merito assicura che le persone più capaci ricoprano ruoli chiave."],
                "ideasB": ["Misure proattive sono necessarie per livellare il campo di gioco e affrontare le disuguaglianze storiche e sistemiche.", "La diversità nel luogo di lavoro e nell'istruzione arricchisce la società e garantisce la rappresentanza di diverse prospettive."]
            },
            {
                "topic": "Frontiere aperte vs immigrazione controllata — cosa serve meglio sia le comunità ospitanti che quelle migranti?",
                "sideA": "Frontiere aperte",
                "sideB": "Immigrazione controllata",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Permettere alle persone di muoversi liberamente può stimolare la crescita economica e affrontare la carenza di manodopera.", "Il diritto di muoversi è una libertà umana fondamentale che permette di sfuggire alla povertà e cercare una vita migliore."],
                "ideasB": ["I sistemi controllati permettono ai governi di gestire i servizi pubblici e garantire l'integrazione dei nuovi arrivati.", "Regolare l'immigrazione può aiutare a proteggere i salari e le condizioni di lavoro della forza lavoro esistente."]
            },
            {
                "topic": "Utilitarismo vs etica deontologica — quale offre un quadro morale migliore?",
                "sideA": "Utilitarismo",
                "sideB": "Deontologia",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Concentrarsi sul massimo bene per il massimo numero di persone fornisce un modo pratico per prendere decisioni morali.", "Le conseguenze di un'azione sono ciò che conta veramente quando se ne valuta il valore etico."],
                "ideasB": ["Certe azioni sono intrinsecamente giuste o sbagliate, indipendentemente dalle conseguenze; dobbiamo seguire regole universali.", "Rispettare i diritti e i doveri individuali è l'unico modo per garantire la vera giustizia e la dignità umana."]
            },
            {
                "topic": "Libertà di parola vs protezione dal danno — dove dovrebbe essere tracciato il limite?",
                "sideA": "Libertà di parola",
                "sideB": "Protezione dal danno",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Il libero scambio di idee, anche controverse, è essenziale per il progresso e la ricerca della verità.", "La parola dovrebbe essere limitata solo nei casi più estremi, come l'incitamento diretto alla violenza."],
                "ideasB": ["La società ha il dovere di proteggere i gruppi vulnerabili dai discorsi d'odio che possono portare a danni nel mondo reale.", "Il diritto alla libera espressione non include il diritto di diffondere disinformazione che mette in pericolo la salute pubblica."]
            },
            {
                "topic": "Relativismo culturale vs diritti umani universali — quale è la posizione più forte?",
                "sideA": "Relativismo culturale",
                "sideB": "Diritti universali",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Dobbiamo rispettare i diversi valori e tradizioni delle altre culture piuttosto che imporre le nostre convinzioni.", "La moralità è spesso un prodotto della cultura e non c'è un modo oggettivo per dire che un sistema è migliore di un altro."],
                "ideasB": ["I diritti umani fondamentali dovrebbero essere protetti ovunque indipendentemente dalla cultura.", "Standard universali sono necessari per prevenire l'oppressione di individui e gruppi sotto il pretesto della tradizione."]
            },
            {
                "topic": "Punizione vs riabilitazione — quale dovrebbe essere l'obiettivo del sistema giudiziario?",
                "sideA": "Punizione",
                "sideB": "Riabilitazione",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["La giustizia retributiva assicura che i trasgressori affrontino le conseguenze e fornisce chiusura alle vittime.", "Punizioni severe possono fungere da deterrente, impedendo ad altri di commettere crimini simili."],
                "ideasB": ["L'obiettivo primario dovrebbe essere aiutare i trasgressori a reintegrarsi e affrontare le cause alla base del loro comportamento.", "La riabilitazione è più efficace nel ridurre i tassi di recidiva e nel costruire una società più sicura a lungo termine."]
            },
            {
                "topic": "Sapere troppo vs sapere troppo poco — quale condizione è più pericolosa per l'adulto moderno?",
                "sideA": "Sapere troppo",
                "sideB": "Sapere troppo poco",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["L'eccesso di analisi può portare alla paralisi decisionale, dove l'abbondanza di informazioni impedisce un'azione tempestiva.", "La consapevolezza costante delle crisi globali e dei rischi complessi può aumentare significativamente l'ansia e diminuire il benessere generale."],
                "ideasB": ["L'ignoranza di informazioni critiche può portare a scelte di vita sbagliate e vulnerabilità allo sfruttamento o alla disinformazione.", "La mancanza di conoscenza impedisce agli individui di partecipare efficacemente ai processi democratici e al discorso sociale."]
            },
            {
                "topic": "Essere in anticipo ovunque vs essere sempre leggermente in ritardo — quale è il peggior crimine sociale?",
                "sideA": "Essere in anticipo",
                "sideB": "Essere in ritardo",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Arrivare troppo presto può gravare ingiustamente sull'ospite, costringendolo a affrettare i preparativi.", "Può segnalare una mancanza di consapevolezza sociale o un'eccessiva foga che mette gli altri a disagio o sotto pressione."],
                "ideasB": ["Il ritardo costante dimostra una fondamentale mancanza di rispetto per il tempo altrui e per i programmi professionali.", "Può danneggiare la reputazione di affidabilità e interrompere il flusso di riunioni o incontri sociali."]
            },
            {
                "topic": "Piegare il bucato immediatamente vs vivere con una montagna di panni — quale scelta di vita è più difendibile?",
                "sideA": "Piegare subito",
                "sideB": "Montagna di panni",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Mantenere l'ordine nell'ambiente domestico riduce il disordine mentale e contribuisce a uno stile di vita più disciplinato.", "I vestiti piegati si conservano meglio, facendo risparmiare tempo per la stiratura e denaro per sostituzioni premature."],
                "ideasB": ["Dare priorità ad attività più significative rispetto a banali compiti domestici può portare a una vita più appagante e meno rigida.", "Un approccio rilassato risparmia tempo ed energia immediati, che possono essere reindirizzati verso il lavoro, la famiglia o il relax."]
            },
            {
                "topic": "L'invenzione della sveglia vs l'invenzione del tasto 'snooze' — quale ha fatto più danni all'umanità?",
                "sideA": "Sveglia",
                "sideB": "Tasto snooze",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["La sveglia ha interrotto i naturali ritmi circadiani dell'uomo, portando a privazione cronica del sonno e stress.", "Ha formalizzato un approccio rigido e industriale al tempo che privilegia la produttività rispetto al benessere biologico."],
                "ideasB": ["Il tasto snooze incoraggia la 'frammentazione del sonno', che può lasciare gli individui più intontiti e meno vigili.", "Favorisce un'abitudine alla procrastinazione e al rinvio delle responsabilità che può influire negativamente sulle prestazioni professionali."]
            },
            {
                "topic": "Fantasmi vs alieni — quale sarebbe una scoperta più dirompente per la società moderna?",
                "sideA": "Fantasmi",
                "sideB": "Alieni",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["La prova di un'aldilà ribalterebbe fondamentalmente tutti i quadri religiosi, filosofici e scientifici esistenti.", "Solleverebbe profonde questioni etiche e legali riguardanti i diritti e l'influenza dei defunti sui vivi."],
                "ideasB": ["Il contatto con la vita extraterrestre costringerebbe l'umanità a riconsiderare il suo posto nell'universo e il suo status unico.", "Potrebbe comportare rischi significativi per la sicurezza o sfide tecnologiche che la società è attualmente impreparata a gestire."]
            },
            {
                "topic": "Cereali prima del latte vs latte prima dei cereali — è una questione di preferenza o di fatto oggettivo?",
                "sideA": "Cereali prima",
                "sideB": "Latte prima",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Aggiungere prima i cereali permette un miglior controllo delle porzioni e garantisce il rapporto ottimale tra croccantezza e liquido.", "È l'approccio più logico e sistematico, impedendo al latte di schizzare e creare disordine."],
                "ideasB": ["Aggiungere prima il latte permette di riscaldare il liquido con precisione prima di aggiungere i cereali, mantenendo la temperatura desiderata.", "Assicura che i cereali rimangano più croccanti più a lungo, poiché non vengono immediatamente immersi nel latte."]
            },
            {
                "topic": "Whistleblowing vs lealtà istituzionale — quale è la scelta più etica?",
                "sideA": "Whistleblowing",
                "sideB": "Lealtà",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Esporre gli illeciti è un dovere fondamentale verso il pubblico che ha la precedenza sugli interessi organizzativi privati.", "Il whistleblowing promuove la trasparenza e ritiene le istituzioni potenti responsabili delle loro azioni e violazioni etiche."],
                "ideasB": ["La lealtà alla propria istituzione è essenziale per mantenere la stabilità e l'efficacia di organizzazioni complesse.", "Le questioni interne dovrebbero essere risolte attraverso i canali stabiliti per prevenire danni reputazionali non necessari e disordini sociali."]
            },
            {
                "topic": "Ottimismo vs realismo — quale è la visione del mondo più produttiva per la carriera?",
                "sideA": "Ottimismo",
                "sideB": "Realismo",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Una prospettiva positiva favorisce la resilienza e incoraggia gli individui a correre i rischi necessari per l'innovazione e la crescita.", "L'ottimismo è contagioso e può migliorare significativamente il morale del team e le capacità collettive di risoluzione dei problemi."],
                "ideasB": ["Una valutazione realistica delle sfide impedisce lo spreco di risorse su obiettivi irragніungibili o progetti eccessivamente ambiziosi.", "Il realismo consente una pianificazione delle emergenze e una gestione del rischio più efficaci in ambienti professionali volatili."]
            },
            {
                "topic": "Imprenditorialità vs lavoro dipendente — cosa contribuisce di più alla società?",
                "sideA": "Imprenditorialità",
                "sideB": "Lavoro dipendente",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": ["Gli imprenditori guidano l'innovazione e creano nuovi posti di lavoro e industrie che alimentano il progresso economico.", "La volontà di correre rischi personali porta allo sviluppo di soluzioni originali per problemi sociali complessi."],
                "ideasB": ["Gli sforzi collettivi di milioni di dipendenti forniscono la stabilità e l'esperienza essenziali che mantengono la società in funzione.", "L'occupazione fornisce una base imponibile costante e supporta l'infrastruttura stabilita dell'economia globale."]
            },
            {
                "topic": "Nazionalismo vs globalismo — quale è il quadro più coerente per il XXI secolo?",
                "sideA": "Nazionalismo",
                "sideB": "Globalismo",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Concentrarsi sullo Stato-nazione garantisce che i governi rimangano responsabili verso i propri cittadini e le loro esigenze specifiche.", "L'identità nazionale fornisce un forte senso di appartenenza e coesione sociale necessario per una società stabile."],
                "ideasB": ["Le sfide globali come il cambiamento climatico e le pandemie richiedono un approccio internazionale unificato che trascenda i confini.", "Un'economia globale interconnessa promuove la pace e la prosperità rendendo le nazioni interdipendenti e collaborative."]
            },
            {
                "topic": "Istruzione domiciliare vs scuola tradizionale — cosa produce individui più equilibrati?",
                "sideA": "Istruzione domiciliare",
                "sideB": "Scuola tradizionale",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["L'istruzione personalizzata consente ai bambini di seguire i propri interessi e imparare a un ritmo adatto alle loro esigenze individuali.", "L'istruzione domiciliare può proteggere i bambini da influenze sociali negative come il bullismo e l'eccessiva pressione dei pari."],
                "ideasB": ["Le scuole tradizionali forniscono un ambiente sociale diversificato in cui i bambini imparano a interagire con persone di diversa estrazione.", "L'ambiente strutturato di una scuola favorisce abilità di vita essenziali come la disciplina, il lavoro di squadra e la sana competizione."]
            },
            {
                "topic": "Sistemi di votazione vs feedback descrittivo — cosa motiva gli studenti in modo più efficace?",
                "sideA": "Voti",
                "sideB": "Feedback descrittivo",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["I voti forniscono una metrica chiara e oggettiva che consente agli studenti di monitorare i propri progressi e confrontare le prestazioni.", "La natura competitiva della valutazione può incentivare gli studenti a impegnarsi di più e a lottare per l'eccellenza accademica."],
                "ideasB": ["Un feedback dettagliato fornisce indicazioni specifiche su come migliorare, favorendo una mentalità di crescita piuttosto che la focalizzazione sul voto.", "Rimuovere la pressione dei voti può ridurre l'ansia e incoraggiare un amore più genuino per l'apprendimento e l'esplorazione."]
            },
            {
                "topic": "Intelligenza artificiale vs giudizio umano — cosa dovrebbe guidare le decisioni chiave nel business?",
                "sideA": "Intelligenza artificiale",
                "sideB": "Giudizio umano",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["L'IA può elaborare vaste quantità di dati senza pregiudizi emotivi, portando a un processo decisionale più oggettivo ed efficiente.", "Gli algoritmi possono identificare schemi e tendenze complessi che sono spesso invisibili anche agli esperti umani più esperti."],
                "ideasB": ["I leader umani possono considerare sfumature etiche, contesto sociale e implicazioni a lungo termine che le macchine non possono ancora cogliere.", "Il giudizio implica empatia e intuito, che sono cruciali per navigare in situazioni interpersonali e politiche complesse."]
            },
            {
                "topic": "Ottimismo tecnologico vs scetticismo tecnologico — quale è la posizione predefinita più razionale oggi?",
                "sideA": "Ottimismo tech",
                "sideB": "Scetticismo tech",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["La tecnologia ha storicamente risolto le nostre sfide più grandi e continua a migliorare l'aspettativa di vita e la connettività globale.", "Mantenere una posizione positiva incoraggia l'investimento e l'innovazione necessari per risolvere le crisi attuali come il cambiamento climatico."],
                "ideasB": ["Un approccio scettico è necessario per identificare e mitigare le conseguenze impreviste del rapido progresso tecnologico.", "Mettere in discussione le motivazioni dei giganti tecnologici aiuta a proteggere la privacy individuale e previene l'erosione dei valori democratici."]
            },
            {
                "topic": "Identità digitale vs identità nel mondo reale — cosa ci definisce di più oggi?",
                "sideA": "Identità digitale",
                "sideB": "Identità reale",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["La nostra presenza online è spesso il primo punto di contatto per datori di lavoro e coetanei, plasmandone la percezione.", "Le impronte digitali forniscono una registrazione più completa e permanente dei nostri interessi, azioni e connessioni sociali."],
                "ideasB": ["Le interazioni nel mondo reale comportano un livello di profondità e autenticità che non può essere replicato in un ambiente digitale.", "Le nostre esperienze fisiche e le relazioni immediate rimangono i motori più significativi dei nostri valori e della crescita personale."]
            },
            {
                "topic": "Eco-ansia vs ottimismo climatico — quale è la risposta più costruttiva alla crisi?",
                "sideA": "Eco-ansia",
                "sideB": "Ottimismo climatico",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Un sano senso di urgenza e preoccupazione può motivare gli individui a compiere i radicali cambiamenti di stile di vita necessari per la sopravvivenza.", "Riconoscere la gravità della situazione previene il compiacimento e mantiene la pressione su governi e aziende."],
                "ideasB": ["L'ottimismo previene la disperazione e la paralisi, permettendo alle persone di concentrarsi sulle soluzioni e partecipare ad azioni positive.", "Credere che il cambiamento sia possibile è un prerequisito per lo sforzo sostenuto richiesto per costruire un futuro sostenibile."]
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();