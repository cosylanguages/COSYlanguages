(function() {
    const data = [{
                "topic": "Lavoro da remoto vs lavoro in ufficio — cosa è meglio per produttività e benessere?",
                "sideA": "Remoto",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Si risparmia tempo e denaro perché non c'è il pendolarismo quotidiano.", "Permette un programma più flessibile per gestire le attività personali."],
                "ideasB": ["La comunicazione faccia a faccia rende il lavoro di squadra molto più veloce e semplice.", "Lavorare in ufficio aiuta a separare la vita professionale da quella privata."]
            },
            {
                "topic": "Sicurezza del lavoro vs crescita professionale — cosa dovrebbero dare priorità gli adulti?",
                "sideA": "Sicurezza",
                "sideB": "Crescita",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Un lavoro stabile riduce lo stress riguardo ai soldi e al futuro.", "È meglio per pianificare obiettivi a lungo termine come comprare una casa."],
                "ideasB": ["Prendersi dei rischi può portare a migliori opportunità e a uno stipendio più alto.", "Cambiare spesso lavoro aiuta a imparare nuove competenze più velocemente."]
            },
            {
                "topic": "Avviare un'attività in proprio vs lavorare per un datore di lavoro — qual è la scelta migliore a 30 anni?",
                "sideA": "Propria attività",
                "sideB": "Dipendente",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Hai la libertà di prendere le tue decisioni ed essere il capo di te stesso.", "Non c'è limite a quanto puoi guadagnare se hai successo."],
                "ideasB": ["Lavorare per un'azienda offre un reddito costante e benefici.", "Non devi preoccuparti dell'amministrazione e dei rischi di un'impresa."]
            },
            {
                "topic": "Ambizione vs equilibrio vita-lavoro — si possono davvero avere entrambi?",
                "sideA": "Ambizione",
                "sideB": "Equilibrio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Essere ambiziosi aiuta a raggiungere il vertice del proprio settore.", "Il duro lavoro è necessario se si vuole avere un grande impatto sul mondo."],
                "ideasB": ["Passare del tempo con la famiglia e gli amici è più importante per la felicità.", "Il burnout può accadere se ci si concentra solo sulla carriera per troppo tempo."]
            },
            {
                "topic": "Networking vs sviluppo delle competenze — cosa fa avanzare di più la tua carriera?",
                "sideA": "Networking",
                "sideB": "Competenze",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Chi conosci è spesso più importante di cosa sai per trovare lavoro.", "Costruire relazioni può aprire porte che le sole competenze non possono aprire."],
                "ideasB": ["Se sei eccellente in quello che fai, le opportunità ti troveranno sempre.", "Le competenze tecniche sono la base di una carriera di successo e duratura."]
            },
            {
                "topic": "Feedback onesto da un manager vs essere lasciati a lavorare indipendentemente — cosa motiva di più gli adulti?",
                "sideA": "Feedback",
                "sideB": "Indipendenza",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Un feedback regolare aiuta a capire i propri errori e a migliorare rapidamente.", "È motivante sapere che il proprio manager presta attenzione al proprio lavoro."],
                "ideasB": ["Fidarsi dei dipendenti affinché lavorino da soli mostra rispetto per le loro capacità.", "L'indipendenza permette di essere più creativi e di trovare le proprie soluzioni."]
            },
            {
                "topic": "Cambiare carriera a 40 anni vs restare nel proprio campo — qual è la decisione più saggia?",
                "sideA": "Cambiare",
                "sideB": "Restare",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Non è mai troppo tardi per seguire la propria passione e trovare un lavoro che si ama.", "Iniziare qualcosa di nuovo può dare nuova energia e motivazione."],
                "ideasB": ["A 40 anni hai un'esperienza preziosa che vale la pena mantenere nel tuo campo attuale.", "Iniziare da zero può essere molto rischioso se hai responsabilità familiari."]
            },
            {
                "topic": "Estinguere anticipatamente il mutuo vs investire quei soldi — cosa è più intelligente?",
                "sideA": "Estinguere mutuo",
                "sideB": "Investire",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Essere liberi dai debiti offre tranquillità e libertà finanziaria.", "Si risparmiano molti soldi sugli interessi nel corso degli anni."],
                "ideasB": ["Investire nel mercato azionario può dare un rendimento maggiore rispetto all'interesse che paghi.", "È meglio avere beni liquidi da poter usare in caso di emergenza."]
            },
            {
                "topic": "Possedere una casa vs affittare permanentemente — cosa si adatta meglio alla vita adulta moderna?",
                "sideA": "Possedere",
                "sideB": "Affittare",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Comprare una casa è un ottimo investimento a lungo termine per il proprio futuro.", "Hai la libertà di decorare e cambiare la casa come preferisci."],
                "ideasB": ["L'affitto ti dà la flessibilità di spostarti facilmente per lavoro o stile di vita.", "Il proprietario è responsabile di tutte le riparazioni e dei costi di manutenzione."]
            },
            {
                "topic": "Risparmiare presto per la pensione vs godersi i soldi a trent'anni — cosa è più saggio?",
                "sideA": "Risparmiare presto",
                "sideB": "Godersi ora",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Se inizi a risparmiare presto, i tuoi soldi hanno più tempo per crescere.", "Potrai rilassarti e goderti la vita quando sarai più vecchio."],
                "ideasB": ["Si è giovani una volta sola, quindi dovresti viaggiare e fare esperienze ora.", "Il futuro è incerto, quindi è meglio godersi i soldi finché si può."]
            },
            {
                "topic": "Vivere al di sotto delle proprie possibilità vs spendere per godersi la vita ora — quale approccio è più sano?",
                "sideA": "Sotto possibilità",
                "sideB": "Godersi ora",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Vivere in modo semplice aiuta a evitare debiti e problemi finanziari.", "È più facile risparmiare per grandi obiettivi come una casa o una nuova auto."],
                "ideasB": ["Comprare cose di alta qualità può rendere la vita quotidiana più confortevole.", "Regalarsi belle cose è una buona ricompensa per il proprio duro lavoro."]
            },
            {
                "topic": "Due redditi in una famiglia vs un partner che resta a casa — cosa funziona meglio per le famiglie?",
                "sideA": "Due redditi",
                "sideB": "Uno a casa",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Due stipendi significano più sicurezza finanziaria e un tenore di vita più elevato.", "Entrambi i genitori possono sviluppare la propria carriera e condividere i compiti domestici."],
                "ideasB": ["Avere un genitore a casa è molto vantaggioso per lo sviluppo dei figli.", "Una persona può concentrarsi sulla casa, rendendo la vita familiare meno stressante."]
            },
            {
                "topic": "Avere figli vs scegliere di non averne — cosa rende la vita adulta più appagante?",
                "sideA": "Avere figli",
                "sideB": "Niente figli",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Crescere i figli è un'esperienza unica che porta molta gioia e amore.", "I figli possono prendersi cura di te e supportarti quando invecchi."],
                "ideasB": ["Scegliere di non avere figli permette più libertà e viaggi spontanei.", "Puoi concentrare tutta la tua energia sulla carriera, gli hobby e il partner."]
            },
            {
                "topic": "Genitorialità severa vs genitorialità permissiva — cosa produce adulti più felici?",
                "sideA": "Severa",
                "sideB": "Permissiva",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Regole chiare aiutano i bambini a imparare la disciplina e il rispetto per gli altri.", "Una genitorialità severa può portare a migliori risultati accademici."],
                "ideasB": ["Dare libertà ai figli li aiuta a diventare più creativi e indipendenti.", "Un ambiente caloroso e flessibile costruisce un legame più forte con i genitori."]
            },
            {
                "topic": "Relazione a lungo termine vs restare single — cosa è meglio per la crescita personale?",
                "sideA": "Relazione",
                "sideB": "Single",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Un partner offre supporto emotivo e condivide le sfide della vita.", "Stare in una relazione aiuta a imparare a scendere a compromessi e a prendersi cura."],
                "ideasB": ["Essere single ti permette di concentrarti interamente sui tuoi obiettivi e interessi.", "Hai la libertà di prendere ogni decisione senza consultare nessuno."]
            },
            {
                "topic": "Mantenere vita lavorativa e privata separate vs integrarle — cosa è più sano?",
                "sideA": "Separate",
                "sideB": "Integrate",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Stabilire confini chiari impedisce al lavoro di prendere il sopravvento sulla vita privata.", "È più facile rilassarsi quando non si pensa al proprio lavoro a casa."],
                "ideasB": ["L'integrazione permette di essere più flessibili con il proprio tempo durante il giorno.", "Se ami il tuo lavoro, è naturale che faccia parte di chi sei."]
            },
            {
                "topic": "Trasferirsi all'estero come coppia vs restare vicini alla famiglia — qual è la scelta giusta?",
                "sideA": "All'estero",
                "sideB": "Vicini alla famiglia",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": ["Vivere in un nuovo paese è una grande avventura che amplia i propri orizzonti.", "Trasferirsi all'estero come coppia può rendere la relazione molto più forte."],
                "ideasB": ["Stare vicino alla famiglia offre una rete di supporto per crescere i figli.", "È importante mantenere le proprie radici culturali e stare vicino ai vecchi amici."]
            },
            {
                "topic": "Dare priorità alla salute fisica vs salute mentale — su cosa dovrebbero concentrarsi prima gli adulti?",
                "sideA": "Fisica",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Un corpo forte è la base per una vita lunga e attiva.", "L'esercizio regolare aiuta a prevenire molte malattie gravi."],
                "ideasB": ["Il benessere mentale è essenziale per la felicità e le buone relazioni.", "Se non sei mentalmente sano, è difficile prendersi cura del proprio corpo."]
            },
            {
                "topic": "Sanità privata vs affidarsi al sistema pubblico — qual è la migliore strategia per un adulto?",
                "sideA": "Privata",
                "sideB": "Pubblica",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["L'assicurazione privata offre solitamente tempi di attesa più brevi e strutture migliori.", "Hai più scelta riguardo a quali medici e specialisti consultare."],
                "ideasB": ["Un sistema pubblico è più equo perché fornisce cure a tutti, indipendentemente dai soldi.", "L'assistenza sanitaria essenziale dovrebbe essere un diritto, non qualcosa da comprare."]
            },
            {
                "topic": "Controlli medici regolari vs andarci solo quando si è malati — qual è l'approccio più intelligente?",
                "sideA": "Controlli regolari",
                "sideB": "Solo se malati",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["La prevenzione è meglio della cura perché puoi individuare i problemi in anticipo.", "Controlli regolari possono darti tranquillità riguardo alla tua salute."],
                "ideasB": ["Non dovresti sprecare il tempo del medico se ti senti perfettamente bene.", "I nostri corpi possono spesso guarire da soli senza interventi medici."]
            },
            {
                "topic": "Ridurre l'alcol vs ridurre lo stress — cosa ha un impatto maggiore sulla salute degli adulti?",
                "sideA": "Meno alcol",
                "sideB": "Meno stress",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["L'alcol è una tossina che colpisce direttamente il fegato, il cuore e il cervello.", "Eliminare l'alcol può migliorare rapidamente il sonno e i livelli di energia."],
                "ideasB": ["Lo stress cronico è un killer silenzioso che causa molti problemi di salute moderni.", "Imparare a rilassarsi è più importante che preoccuparsi di cosa si beve."]
            },
            {
                "topic": "Libertà individuale vs responsabilità comunitaria — cosa dovrebbe guidare le decisioni degli adulti?",
                "sideA": "Libertà",
                "sideB": "Responsabilità",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Gli adulti dovrebbero essere liberi di vivere la propria vita come preferiscono.", "La libertà individuale è il valore più importante in una società moderna."],
                "ideasB": ["Abbiamo tutti il dovere di aiutare i nostri vicini e migliorare la nostra comunità.", "Una società funziona bene solo se tutti pensano al bene comune."]
            },
            {
                "topic": "Ottimismo sul futuro vs realismo — qual è l'atteggiamento più utile per gli adulti?",
                "sideA": "Ottimismo",
                "sideB": "Realismo",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Un atteggiamento positivo aiuta a superare gli ostacoli e a restare motivati.", "Gli ottimisti sono generalmente più felici e hanno più successo nella vita."],
                "ideasB": ["Il realismo aiuta a prepararsi alle sfide e a prendere decisioni migliori.", "È meglio vedere il mondo com'è, non come vorresti che fosse."]
            },
            {
                "topic": "Cambiare il mondo vs costruirsi una vita personale stabile — quale è l'ambizione più onesta?",
                "sideA": "Cambiare il mondo",
                "sideB": "Vita stabile",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Dovremmo tutti cercare di lasciare il mondo un posto migliore di come l'abbiamo trovato.", "Lavorare per una causa dà alla vita un significato e uno scopo più profondi."],
                "ideasB": ["Prendersi cura della propria famiglia ed essere una brava persona è sufficiente.", "Cercare di cambiare il mondo è spesso irrealistico e porta alla frustrazione."]
            },
            {
                "topic": "Dedicare il proprio tempo al volontariato vs donare denaro — cosa fa più bene?",
                "sideA": "Volontariato",
                "sideB": "Donare denaro",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Dedicare il proprio tempo permette di vedere direttamente l'impatto del proprio aiuto.", "Il volontariato aiuta a conoscere nuove persone e nuove prospettive."],
                "ideasB": ["Le organizzazioni benefiche possono usare i soldi per acquistare risorse professionali.", "Donare è più efficiente se hai un lavoro impegnativo e uno stipendio alto."]
            },
            {
                "topic": "Seguire i valori della propria generazione vs metterli in discussione — cosa è più ammirevole?",
                "sideA": "Seguire",
                "sideB": "Mettere in discussione",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["I valori tradizionali forniscono una base stabile per una società di successo.", "Rispettare la saggezza degli anziani aiuta a mantenere l'armonia sociale."],
                "ideasB": ["Ogni generazione dovrebbe decidere quali valori sono ancora rilevanti oggi.", "Mettere in discussione lo status quo è necessario per il progresso."]
            },
            {
                "topic": "Sapere quanto guadagnano i colleghi vs non saperlo — cosa è meglio per l'armonia in ufficio?",
                "sideA": "Saperlo",
                "sideB": "Non saperlo",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Sapere gli stipendi aiuta a garantire che tutti siano pagati equamente.", "La trasparenza riduce il divario retributivo di genere e incoraggia l'onestà."],
                "ideasB": ["Il denaro è una questione privata e parlarne può causare gelosie.", "La privacy evita inutili competizioni e tensioni tra colleghi."]
            },
            {
                "topic": "Rispondere ai messaggi immediatamente vs prendersi il proprio tempo — cosa è più rispettoso nella vita adulta?",
                "sideA": "Subito",
                "sideB": "Con calma",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Rispondere rapidamente mostra che rispetti il tempo dell'altra persona.", "In un mondo veloce, la comunicazione immediata è necessaria per l'efficienza."],
                "ideasB": ["Prendersi il proprio tempo permette di dare una risposta più ponderata e migliore.", "È importante avere dei confini e non essere schiavi del telefono."]
            },
            {
                "topic": "Ammettere di non avere idea di cosa sia un fondo pensione vs fingere di saperlo — quale è l'esperienza adulta più comune?",
                "sideA": "Ammettere",
                "sideB": "Fingere",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["L'onestà è meglio perché ti permette di fare domande e imparare.", "Molti adulti sono confusi sulla finanza, quindi ammetterlo è normale."],
                "ideasB": ["Fingere di sapere aiuta a sembrare professionali e sicuri di sé.", "È meglio fare ricerche private più tardi che sembrare ignoranti ora."]
            },
            {
                "topic": "Annullare i piani all'ultimo minuto vs uscire quando non si ha voglia — quale è la peggiore abitudine adulta?",
                "sideA": "Annullare",
                "sideB": "Uscire comunque",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Se sei esausto, è meglio restare a casa e riposare la mente.", "Forzarsi a uscire quando non si è felici non è divertente per nessuno."],
                "ideasB": ["Dovresti mantenere le promesse anche se non ne hai voglia.", "Una volta lì, probabilmente ti divertirai e sarai felice di essere andato."]
            },
            {
                "topic": "Parlare apertamente di soldi con gli amici vs mantenere la privacy — qual è l'approccio più maturo?",
                "sideA": "Parlarne apertamente",
                "sideB": "Mantenerlo privato",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Discutere di soldi con gli amici aiuta tutti a fare scelte finanziarie migliori.", "Essere aperti sui costi rende più facile pianificare attività insieme."],
                "ideasB": ["Il denaro può creare una divisione tra amici che guadagnano cifre diverse.", "È più educato tenere i dettagli finanziari per sé nelle situazioni sociali."]
            },
            {
                "topic": "Lavoro da casa vs Lavoro in ufficio",
                "sideA": "Casa",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "Puoi concentrarti meglio a casa senza il rumore di un ufficio affollato.",
                    "È più facile mantenersi in salute cucinando il proprio pranzo a casa."
                ],
                "ideasB": [
                    "L'ambiente dell'ufficio incoraggia la creatività attraverso idee spontanee.",
                    "Separare lavoro e casa aiuta a 'staccare la spina' a fine giornata."
                ]
            },
            {
                "topic": "Auto elettriche vs Auto a benzina",
                "sideA": "Elettriche",
                "sideB": "Benzina",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Le auto elettriche sono molto meglio per l'ambiente perché non hanno emissioni.",
                    "Sono più economiche da gestire e mantenere a lungo termine."
                ],
                "ideasB": [
                    "Le auto a benzina sono migliori per i lunghi viaggi perché puoi fare rifornimento velocemente.",
                    "L'infrastruttura di ricarica non è ancora sufficiente ovunque."
                ]
            },
            {
                "topic": "Apprendimento online o apprendimento in aula — cosa è più efficace?",
                "sideA": "Online",
                "sideB": "Aula",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["I corsi online sono più flessibili e puoi studiare al tuo ritmo.", "Puoi accedere ai migliori insegnanti del mondo da casa tua."],
                "ideasB": ["In un'aula, puoi interagire direttamente con gli altri studenti e l'insegnante.", "Una scuola fisica offre un ambiente migliore per concentrarsi sugli studi."]
            },
            {
                "topic": "Memorizzare fatti o imparare come trovare informazioni — quale abilità è più importante?",
                "sideA": "Fatti",
                "sideB": "Trovare info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Avere fatti di base in testa aiuta a capire il mondo più rapidamente.", "Non puoi sempre fare affidamento su Internet per informazioni accurate."],
                "ideasB": ["È più utile sapere come ricercare e analizzare i dati che memorizzarli.", "I fatti cambiano nel tempo, ma la capacità di trovare informazioni è per sempre."]
            },
            {
                "topic": "Istruzione universitaria o formazione professionale — quale è il percorso migliore?",
                "sideA": "Università",
                "sideB": "Professionale",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Una laurea offre un'istruzione ampia e più opzioni di carriera a lungo termine.", "La vita universitaria aiuta a sviluppare il pensiero critico e le abilità sociali."],
                "ideasB": ["La formazione professionale ti prepara per un lavoro specifico con abilità pratiche.", "Puoi iniziare a guadagnare prima ed evitare ingenti debiti studenteschi."]
            },
            {
                "topic": "Esami o valutazione continua — quale è il modo più giusto per valutare gli studenti?",
                "sideA": "Esami",
                "sideB": "Continua",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Gli esami sono un modo equo per testare le conoscenze di tutti alle stesse condizioni.", "Motivano gli studenti a studiare sodo e a ricordare ciò che hanno imparato."],
                "ideasB": ["La valutazione continua è meno stressante e mostra il vero progresso dello studente.", "Incoraggia un lavoro costante durante tutto l'anno invece di un solo giorno."]
            },
            {
                "topic": "Imparare una lingua straniera a scuola o vivere all'estero — cosa è più efficace?",
                "sideA": "Scuola",
                "sideB": "Vivere all'estero",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["La scuola offre un ambiente strutturato per imparare la grammatica e il vocabolario.", "È un modo sicuro ed economico per iniziare a imparare prima di viaggiare."],
                "ideasB": ["Vivere all'estero ti costringe a parlare la lingua in situazioni reali ogni giorno.", "Impari la cultura e il modo naturale di parlare molto più velocemente."]
            },
            {
                "topic": "Scuole maschili o femminili o scuole miste — quali sono migliori per gli studenti?",
                "sideA": "Solo maschi/femmine",
                "sideB": "Mista",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Gli studenti potrebbero sentirsi più a loro agio senza il sesso opposto.", "Gli insegnanti possono adattare i metodi alle esigenze specifiche di ragazzi o ragazze."],
                "ideasB": ["Le scuole miste riflettono il mondo reale dove uomini e donne lavorano insieme.", "Interagire con tutti aiuta a sviluppare migliori abilità sociali e comunicative."]
            },
            {
                "topic": "Social media o comunicazione faccia a faccia — cosa è meglio per restare in contatto?",
                "sideA": "Social media",
                "sideB": "Faccia a faccia",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["I social media ti permettono di stare in contatto con molte persone contemporaneamente.", "È il modo più semplice per condividere foto e aggiornamenti con amici lontani."],
                "ideasB": ["La comunicazione faccia a faccia permette di vedere il linguaggio del corpo.", "Incontrarsi di persona costruisce relazioni molto più profonde e significative."]
            },
            {
                "topic": "Servizi di streaming o TV tradizionale — cosa è meglio?",
                "sideA": "Streaming",
                "sideB": "TV classica",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": ["Puoi guardare ciò che vuoi, quando vuoi, senza pubblicità.", "I servizi di streaming offrono una vasta gamma di programmi internazionali."],
                "ideasB": ["La TV tradizionale è migliore per eventi dal vivo come notizie e sport.", "Guardare lo stesso programma contemporaneamente agli altri crea comunità."]
            },
            {
                "topic": "Lavorare da casa o lavorare in ufficio — cosa è più produttivo?",
                "sideA": "Casa",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Molte persone scoprono di fare più lavoro a casa con meno interruzioni.", "Un ufficio domestico confortevole può migliorare la concentrazione."],
                "ideasB": ["I manager possono supportare il proprio team in modo più efficace in ufficio.", "È più facile fare riunioni veloci e risolvere problemi quando tutti sono presenti."]
            },
            {
                "topic": "Leggere le notizie online o leggere un giornale — cosa è più affidabile?",
                "sideA": "Notizie online",
                "sideB": "Giornale",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": ["Le notizie online sono aggiornate istantaneamente, sai sempre cosa succede.", "È gratis e puoi leggere molte fonti diverse per una visione equilibrata."],
                "ideasB": ["I giornali hanno spesso un giornalismo di qualità superiore e articoli approfonditi.", "Leggere un giornale fisico è un buon modo per staccare dagli schermi."]
            },
            {
                "topic": "Passare il tempo sui social media o passare il tempo nella natura — cosa è meglio per la tua salute mentale?",
                "sideA": "Social media",
                "sideB": "Natura",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["I social media ti aiutano a sentirti connesso alla tua comunità online.", "È un'ottima fonte di ispirazione e messaggi positivi."],
                "ideasB": ["Passare del tempo nella natura riduce lo stress e migliora significativamente l'umore.", "Stare all'aria aperta aiuta a schiarirsi le idee e godersi il presente."]
            },
            {
                "topic": "Usare i trasporti pubblici o guidare l'auto — cosa è meglio per la società?",
                "sideA": "Trasporti pubblici",
                "sideB": "Auto",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Il trasporto pubblico è meglio per l'ambiente perché riduce l'inquinamento.", "È spesso più economico che possedere, assicurare e parcheggiare un'auto."],
                "ideasB": ["Guidare l'auto ti dà più libertà e fa risparmiare tempo in molti viaggi.", "È più comodo e privato che viaggiare su un autobus o un treno affollato."]
            },
            {
                "topic": "Comprare vestiti usati o comprare vestiti nuovi — quale è l'abitudine migliore?",
                "sideA": "Usato",
                "sideB": "Nuovo",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Comprare usato è molto meglio per il pianeta e riduce gli sprechi.", "Puoi trovare capi unici e marchi di alta qualità a un prezzo molto basso."],
                "ideasB": ["I vestiti nuovi sono generalmente in condizioni migliori e durano più a lungo.", "Seguire le nuove tendenze è un modo divertente per esprimere il proprio stile."]
            },
            {
                "topic": "Vivere in città o vivere in campagna — cosa si adatta meglio ai giovani?",
                "sideA": "Città",
                "sideB": "Campagna",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": ["Le città offrono più opportunità di lavoro, vita notturna ed eventi culturali.", "I trasporti pubblici nelle città rendono facile per i giovani spostarsi."],
                "ideasB": ["La campagna offre un ambiente più sano con più spazio e natura.", "Vivere fuori città è molto più economico, quindi puoi risparmiare di più."]
            },
            {
                "topic": "Vegetarianismo o mangiare carne — cosa è meglio per il pianeta?",
                "sideA": "Vegetarianismo",
                "sideB": "Carne",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Produrre carne consuma molta acqua e terra, il che è dannoso per l'ambiente.", "Una dieta a base vegetale riduce le emissioni di carbonio."],
                "ideasB": ["La carne è una buona fonte di proteine e vitamine essenziali per molte persone.", "Pratiche agricole sostenibili possono rendere la produzione di carne meno dannosa."]
            },
            {
                "topic": "Cambiamenti nello stile di vita individuale o azione del governo — cosa fa di più per l'ambiente?",
                "sideA": "Individuale",
                "sideB": "Governo",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Se tutti fanno piccoli cambiamenti, l'impatto totale sarà molto grande.", "Le scelte individuali inviano un messaggio alle aziende affinché siano sostenibili."],
                "ideasB": ["Solo i governi possono fare leggi per fermare l'inquinamento delle grandi industrie.", "Gli accordi internazionali sono necessari per risolvere i problemi globali."]
            },
            {
                "topic": "Un lavoro stabile o una carriera creativa — quale è la scelta di vita migliore?",
                "sideA": "Lavoro stabile",
                "sideB": "Carriera creativa",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Un lavoro stabile ti permette di pianificare la tua vita ed evitare lo stress.", "Puoi seguire le tue passioni creative come hobby nel tempo libero."],
                "ideasB": ["Una carriera creativa è più appagante perché puoi esprimere te stesso.", "Fare ciò che ami ogni giorno è meglio che avere uno stipendio alto."]
            },
            {
                "topic": "Aprire la propria attività o lavorare per un'azienda — cosa è meglio?",
                "sideA": "Propria attività",
                "sideB": "Azienda",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Avviare un'attività ti permette di creare qualcosa di nuovo ed essere indipendente.", "Puoi costruire il tuo team e la tua cultura da zero."],
                "ideasB": ["Lavorare per un'azienda offre più sicurezza e un migliore equilibrio vita-lavoro.", "Hai colleghi che ti supportano e puoi imparare dai tuoi manager."]
            },
            {
                "topic": "Salario alto o soddisfazione sul lavoro — cosa conta di più al lavoro?",
                "sideA": "Salario",
                "sideB": "Soddisfazione",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Uno stipendio alto ti permette di permetterti una vita comoda e di viaggiare.", "Il denaro può comprare esperienze e sicurezza per te e la tua famiglia."],
                "ideasB": ["Se sei felice al lavoro, sarai più produttivo e meno stressato.", "Passiamo la maggior parte della nostra vita a lavorare, quindi dovrebbe piacerci."]
            },
            {
                "topic": "Lavorare molte ore o avere un equilibrio vita-lavoro — cosa porta a un maggiore successo?",
                "sideA": "Molte ore",
                "sideB": "Equilibrio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Il duro lavoro e le lunghe ore sono spesso necessari per un grande successo.", "Le persone di successo nel mondo sono solitamente molto dedicate al lavoro."],
                "ideasB": ["Un buon equilibrio ti aiuta a rimanere creativo e produttivo a lungo termine.", "Il successo non è solo lavoro; è anche salute e relazioni."]
            },
            {
                "topic": "Scegliere una carriera in base alla passione o in base alle prospettive di lavoro — cosa è più saggio?",
                "sideA": "Passione",
                "sideB": "Prospettive",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Se ami il tuo lavoro, lavorerai più duramente e avrai successo.", "Seguire la propria passione porta a una vita più significativa e felice."],
                "ideasB": ["È più saggio scegliere un lavoro molto richiesto e ben pagato.", "Puoi usare i soldi di un buon lavoro per seguire le tue passioni nel tempo libero."]
            },
            {
                "topic": "Vivere come individuo o mettere al primo posto la comunità — cosa è più importante?",
                "sideA": "Individuo",
                "sideB": "Comunità",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Concentrarsi su se stessi permette di raggiungere il proprio potenziale.", "La libertà individuale è il diritto più importante in una società moderna."],
                "ideasB": ["Aiutare gli altri e far parte di un gruppo rende la vita più gratificante.", "Una comunità forte fornisce supporto e sicurezza per tutti."]
            },
            {
                "topic": "Valori tradizionali o valori moderni — quali sono più importanti da conservare?",
                "sideA": "Tradizionali",
                "sideB": "Moderni",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["I valori tradizionali come la famiglia e il rispetto sono la base della società.", "Mantenere le tradizioni ci aiuta a restare legati alla nostra storia."],
                "ideasB": ["I valori moderni come l'uguaglianza rendono la società più giusta per tutti.", "Dobbiamo aggiornare i nostri valori per risolvere le sfide del XXI secolo."]
            },
            {
                "topic": "Fare volontariato o donare soldi in beneficenza — cosa aiuta di più?",
                "sideA": "Volontariato",
                "sideB": "Donare",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Dedicare il proprio tempo è più personale e mostra che ci tieni davvero.", "Puoi acquisire nuove competenze facendo volontariato direttamente."],
                "ideasB": ["I soldi possono essere usati per pagare aiuti professionali più efficaci.", "Donare è un modo rapido per le persone impegnate di sostenere una causa."]
            },
            {
                "topic": "Fama o fare la differenza in silenzio — quale è l'obiettivo migliore nella vita?",
                "sideA": "Fama",
                "sideB": "Differenza silenziosa",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["La fama ti dà una piattaforma per influenzare molte persone e diffondere idee.", "Essere riconosciuti per il proprio lavoro è una grande ricompensa."],
                "ideasB": ["Aiutare le persone in silenzio è più sincero ed evita lo stress della fama.", "Avere un impatto reale nella comunità locale è più importante della fama."]
            },
            {
                "topic": "Seguire le regole o pensare con la propria testa — cosa conta di più?",
                "sideA": "Regole",
                "sideB": "Pensiero proprio",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Le regole sono necessarie per mantenere l'ordine e la sicurezza nella società.", "Seguire le regole stabilite è spesso il modo più efficiente di agire."],
                "ideasB": ["Il progresso avviene solo quando le persone mettono in discussione le regole.", "È importante avere le proprie opinioni e non limitarsi a seguire la massa."]
            },
            {
                "topic": "Salute fisica o salute mentale — quale dovrebbe essere la priorità?",
                "sideA": "Fisica",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Se sei fisicamente sano, hai l'energia per affrontare le sfide mentali.", "Un corpo sano porta spesso a una mente più positiva e sana."],
                "ideasB": ["La salute mentale è la base di come viviamo il mondo.", "Senza una mente sana, è molto difficile mantenere un corpo sano."]
            },
            {
                "topic": "Prevenzione o cura — quale è l'approccio migliore alla sanità?",
                "sideA": "Prevenzione",
                "sideB": "Cura",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["La prevenzione è più economica e facile che curare una malattia già iniziata.", "Uno stile di vita sano può prevenire la maggior parte dei problemi di salute."],
                "ideasB": ["La scienza medica dovrebbe concentrarsi sul trovare cure migliori per i mali gravi.", "Avremo sempre bisogno di cure efficaci per incidenti e malattie impreviste."]
            },
            {
                "topic": "Sport competitivo o esercizio fisico per divertimento — cosa è meglio per te?",
                "sideA": "Competitivo",
                "sideB": "Divertimento",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["La competizione ti motiva a lavorare più sodo e a dare il massimo.", "Giocare in una squadra insegna la disciplina e come gestire la pressione."],
                "ideasB": ["L'esercizio per divertimento è più sostenibile e riduce il rischio di infortuni.", "Dovrebbe riguardare il relax e il piacere del movimento, non la vittoria."]
            },
            {
                "topic": "Sanità privata o sanità pubblica — quale sistema è più equo?",
                "sideA": "Privata",
                "sideB": "Pubblica",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Un sistema privato incoraggia la concorrenza, portando a cure di qualità.", "Le persone dovrebbero essere libere di spendere i propri soldi per cure migliori."],
                "ideasB": ["La sanità pubblica garantisce che tutti ricevano aiuto, indipendentemente dal reddito.", "Una società giusta dovrebbe fornire lo stesso livello di cure a ogni cittadino."]
            },
            {
                "topic": "Cinema o letteratura — quale è una forma d'arte più potente?",
                "sideA": "Cinema",
                "sideB": "Letteratura",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["I film sono una potente esperienza visiva che può raggiungere un vasto pubblico.", "La combinazione di immagini e musica crea un forte impatto emotivo."],
                "ideasB": ["I libri ti permettono di immaginare il mondo e i personaggi a modo tuo.", "La letteratura può esplorare i pensieri interni più profondamente dei film."]
            },
            {
                "topic": "Arte moderna o arte classica — cosa è più prezioso?",
                "sideA": "Moderna",
                "sideB": "Classica",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["L'arte moderna è preziosa perché ci sfida a pensare al presente.", "Può essere più creativa e sperimentale delle forme d'arte tradizionali."],
                "ideasB": ["L'arte classica mostra un'incredibile abilità tecnica e ha superato la prova del tempo.", "La bellezza dei dipinti e delle sculture tradizionali è più universale."]
            },
            {
                "topic": "Preservare i vecchi edifici o costruirne di nuovi — cosa conta di più?",
                "sideA": "Preservare",
                "sideB": "Costruire",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["I vecchi edifici fanno parte della nostra storia e danno carattere alle città.", "È più sostenibile ristrutturare edifici esistenti che distruggerli."],
                "ideasB": ["I nuovi edifici possono essere più efficienti dal punto di vista energetico.", "L'architettura moderna può essere bella e rappresentare il nostro tempo."]
            },
            {
                "topic": "Cultura locale o globalizzazione — cosa arricchisce di più le comunità?",
                "sideA": "Locale",
                "sideB": "Globalizzazione",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Proteggere la cultura locale aiuta a mantenere la nostra identità e tradizioni.", "I prodotti e le usanze locali sono spesso migliori per l'ambiente."],
                "ideasB": ["La globalizzazione ci permette di condividere idee e prodotti da tutto il mondo.", "Avvicina le persone e aiuta a capire culture diverse."]
            },
            {
                "topic": "Imparare dai propri errori vs imparare dai propri successi — cosa insegna di più?",
                "sideA": "Errori",
                "sideB": "Successi",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Gli errori insegnano cosa non funziona e aiutano a essere più resilienti.", "Spesso ricordiamo i fallimenti più chiaramente, quindi la lezione è più forte."],
                "ideasB": ["Il successo mostra la strada giusta e dà la fiducia necessaria per continuare.", "Imparare da ciò che funziona è più efficiente che ripetere errori."]
            },
            {
                "topic": "Tablet in classe vs quaderni tradizionali — cosa aiuta di più gli studenti?",
                "sideA": "Tablet",
                "sideB": "Quaderni",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["I tablet permettono agli studenti di accedere a contenuti interattivi.", "Sono più portatili e possono sostituire molti libri pesanti."],
                "ideasB": ["Scrivere a mano aiuta a ricordare le informazioni meglio che digitare.", "I quaderni non hanno distrazioni come giochi o notifiche social."]
            },
            {
                "topic": "Essere sempre rintracciabili vs avere tempo libero digitale — cosa è meglio?",
                "sideA": "Sempre rintracciabili",
                "sideB": "Tempo libero",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": ["Essere rintracciabili è importante per le emergenze e la vita professionale.", "La tecnologia moderna ci permette di restare connessi ai cari facilmente."],
                "ideasB": ["Il tempo libero digitale è necessario per ridurre lo stress e migliorare la salute.", "Dobbiamo staccare dal mondo virtuale per godoci quello reale."]
            },
            {
                "topic": "Riutilizzare le cose vs riciclare — cosa è più efficace?",
                "sideA": "Riutilizzare",
                "sideB": "Riciclare",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Riutilizzare gli oggetti è meglio perché non richiede energia per lavorarli.", "Incoraggia uno stile di vita più sostenibile e meno dispendioso."],
                "ideasB": ["Il riciclaggio è più pratico per grandi quantità di rifiuti come plastica e vetro.", "Permette di trasformare vecchi materiali in nuovi prodotti su larga scala."]
            },
            {
                "topic": "Una sola carriera per tutta la vita vs cambiare spesso carriera — cosa è meglio?",
                "sideA": "Una carriera",
                "sideB": "Cambiare spesso",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Restare in una carriera aiuta a diventare un vero esperto e ottenere rispetto.", "Offre più stabilità a lungo termine e un percorso di vita prevedibile."],
                "ideasB": ["Cambiare carriera permette di esplorare diversi interessi e restare motivati.", "Ti rende più adattabile ai cambiamenti del mercato del lavoro moderno."]
            },
            {
                "topic": "Dormire vs fare esercizio — cosa ha un impatto maggiore sulla tua salute?",
                "sideA": "Dormire",
                "sideB": "Esercizio",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Il sonno è essenziale affinché il corpo si ripari e il cervello funzioni.", "Se sei stanco, non puoi essere produttivo, a prescindere dall'esercizio."],
                "ideasB": ["L'esercizio regolare rafforza il cuore, i muscoli e migliora l'umore.", "Essere attivi dà più energia e aiuta a dormire meglio la notte."]
            },
            {
                "topic": "Musica pop vs musica classica — quale ha un impatto culturale maggiore?",
                "sideA": "Pop",
                "sideB": "Classica",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["La musica pop riflette la cultura attuale e unisce milioni di persone.", "È più accessibile e tutti possono godersela, a prescindere dal background."],
                "ideasB": ["La musica classica ha una bellezza senza tempo e ha influenzato tutti i generi.", "Richiede un alto livello di abilità e può esprimere emozioni complesse."]
            },
            {
                "topic": "Sapere come finisce qualcosa vs essere sorpresi — cosa è meglio?",
                "sideA": "Sapere",
                "sideB": "Sorpresi",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Sapere il finale aiuta a rilassarsi e godersi come viene raccontata la storia.", "Se non ti piace il finale, puoi evitare di perdere tempo con lo show."],
                "ideasB": ["La sorpresa e la suspense rendono una storia eccitante e memorabile.", "Vivere i colpi di scena per la prima volta è un'esperienza unica e divertente."]
            },
            {
                "topic": "Rispondere immediatamente ai messaggi vs prendersi il proprio tempo — cosa è più rispettoso?",
                "sideA": "Immediatamente",
                "sideB": "Prendersi tempo",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Rispondere rapidamente mostra che rispetti il tempo dell'altra persona.", "In un mondo veloce, la comunicazione immediata è necessaria per l'efficienza."],
                "ideasB": ["Prendersi tempo permette di dare una risposta più ponderata e migliore.", "È importante avere dei confini e non essere schiavi del telefono."]
            },
            {
                "topic": "Binge-watching vs guardare un episodio a settimana — quale è il modo giusto?",
                "sideA": "Binge-watching",
                "sideB": "Settimanale",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Guardare una serie velocemente aiuta a ricordare tutti i dettagli e i personaggi.", "Non devi aspettare una settimana per scoprire cosa succede dopo."],
                "ideasB": ["Guardare un episodio a settimana dà tempo per riflettere e parlarne.", "Fa durare l'esperienza più a lungo e crea più attesa."]
            },
            {
                "topic": "Posto finestrino vs posto corridoio — quale è oggettivamente migliore?",
                "sideA": "Finestrino",
                "sideB": "Corridoio",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": ["Il posto finestrino offre viste incredibili e una parete su cui appoggiarsi.", "Nessuno ti disturberà quando dovrà alzarsi durante il volo."],
                "ideasB": ["Il posto corridoio ti dà più spazio per le gambe e puoi alzarti facilmente.", "Non devi chiedere a nessuno di spostarsi se devi andare in bagno."]
            },
            {
                "topic": "Saltare la palestra una volta vs andare e fare una brutta sessione — cosa è peggio?",
                "sideA": "Saltare",
                "sideB": "Brutta sessione",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["È meglio saltare un giorno e riposare che forzarsi quando si è stanchi.", "Una brutta sessione può scoraggiare e potrebbe portare a un infortunio."],
                "ideasB": ["Andare anche quando non ne hai voglia aiuta a costruire disciplina.", "Anche un allenamento leggero o 'brutto' è meglio per il corpo che non fare nulla."]
            },
            {
                "topic": "Parlare con se stessi vs parlare con il proprio animale — cosa è più ragionevole?",
                "sideA": "Con se stessi",
                "sideB": "Con l'animale",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Parlare con se stessi aiuta a organizzare i pensieri e risolvere problemi.", "È un modo naturale per elaborare informazioni e restare concentrati."],
                "ideasB": ["Gli animali sono ottimi ascoltatori e offrono conforto emotivo.", "Parlare a un animale sembra più sociale e meno solitario che parlare a se stessi."]
            }];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();