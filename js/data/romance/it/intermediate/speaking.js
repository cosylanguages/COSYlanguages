(function() {
    const speakingData = {
    "it": {
        "opinionArena": [
            {
                "text": "Possiamo vivere senza internet per una settimana?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Tutti dovrebbero imparare una seconda lingua?",
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "criticsCorner": [
            {
                "text": "Penso, dunque sono.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "debates": [
            {
                "topic": "Lavoro da remoto vs lavoro in ufficio — cosa è meglio per produttività e benessere?",
                "sideA": "Remoto",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sicurezza del lavoro vs crescita professionale — cosa dovrebbero dare priorità gli adulti?",
                "sideA": "Sicurezza",
                "sideB": "Crescita",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avviare un'attività in proprio vs lavorare per un datore di lavoro — qual è la scelta migliore a 30 anni?",
                "sideA": "Propria attività",
                "sideB": "Dipendente",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ambizione vs equilibrio vita-lavoro — si possono davvero avere entrambi?",
                "sideA": "Ambizione",
                "sideB": "Equilibrio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Networking vs sviluppo delle competenze — cosa fa avanzare di più la tua carriera?",
                "sideA": "Networking",
                "sideB": "Competenze",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Feedback onesto da un manager vs essere lasciati a lavorare indipendentemente — cosa motiva di più gli adulti?",
                "sideA": "Feedback",
                "sideB": "Indipendenza",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cambiare carriera a 40 anni vs restare nel proprio campo — qual è la decisione più saggia?",
                "sideA": "Cambiare",
                "sideB": "Restare",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Estinguere anticipatamente il mutuo vs investire quei soldi — cosa è più intelligente?",
                "sideA": "Estinguere mutuo",
                "sideB": "Investire",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Possedere una casa vs affittare permanentemente — cosa si adatta meglio alla vita adulta moderna?",
                "sideA": "Possedere",
                "sideB": "Affittare",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Risparmiare presto per la pensione vs godersi i soldi a trent'anni — cosa è più saggio?",
                "sideA": "Risparmiare presto",
                "sideB": "Godersi ora",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere al di sotto delle proprie possibilità vs spendere per godersi la vita ora — quale approccio è più sano?",
                "sideA": "Sotto possibilità",
                "sideB": "Godersi ora",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Due redditi in una famiglia vs un partner che resta a casa — cosa funziona meglio per le famiglie?",
                "sideA": "Due redditi",
                "sideB": "Uno a casa",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avere figli vs scegliere di non averne — cosa rende la vita adulta più appagante?",
                "sideA": "Avere figli",
                "sideB": "Niente figli",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Genitorialità severa vs genitorialità permissiva — cosa produce adulti più felici?",
                "sideA": "Severa",
                "sideB": "Permissiva",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Relazione a lungo termine vs restare single — cosa è meglio per la crescita personale?",
                "sideA": "Relazione",
                "sideB": "Single",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mantenere vita lavorativa e privata separate vs integrarle — cosa è più sano?",
                "sideA": "Separate",
                "sideB": "Integrate",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Trasferirsi all'estero come coppia vs restare vicini alla famiglia — qual è la scelta giusta?",
                "sideA": "All'estero",
                "sideB": "Vicini alla famiglia",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dare priorità alla salute fisica vs salute mentale — su cosa dovrebbero concentrarsi prima gli adulti?",
                "sideA": "Fisica",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sanità privata vs affidarsi al sistema pubblico — qual è la migliore strategia per un adulto?",
                "sideA": "Privata",
                "sideB": "Pubblica",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Controlli medici regolari vs andarci solo quando si è malati — qual è l'approccio più intelligente?",
                "sideA": "Controlli regolari",
                "sideB": "Solo se malati",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ridurre l'alcol vs ridurre lo stress — cosa ha un impatto maggiore sulla salute degli adulti?",
                "sideA": "Meno alcol",
                "sideB": "Meno stress",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Libertà individuale vs responsabilità comunitaria — cosa dovrebbe guidare le decisioni degli adulti?",
                "sideA": "Libertà",
                "sideB": "Responsabilità",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ottimismo sul futuro vs realismo — qual è l'atteggiamento più utile per gli adulti?",
                "sideA": "Ottimismo",
                "sideB": "Realismo",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cambiare il mondo vs costruirsi una vita personale stabile — quale è l'ambizione più onesta?",
                "sideA": "Cambiare il mondo",
                "sideB": "Vita stabile",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dedicare il proprio tempo al volontariato vs donare denaro — cosa fa più bene?",
                "sideA": "Volontariato",
                "sideB": "Donare denaro",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Seguire i valori della propria generazione vs metterli in discussione — cosa è più ammirevole?",
                "sideA": "Seguire",
                "sideB": "Mettere in discussione",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sapere quanto guadagnano i colleghi vs non saperlo — cosa è meglio per l'armonia in ufficio?",
                "sideA": "Saperlo",
                "sideB": "Non saperlo",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rispondere ai messaggi immediatamente vs prendersi il proprio tempo — cosa è più rispettoso nella vita adulta?",
                "sideA": "Subito",
                "sideB": "Con calma",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ammettere di non avere idea di cosa sia un fondo pensione vs fingere di saperlo — quale è l'esperienza adulta più comune?",
                "sideA": "Ammettere",
                "sideB": "Fingere",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Annullare i piani all'ultimo minuto vs uscire quando non si ha voglia — quale è la peggiore abitudine adulta?",
                "sideA": "Annullare",
                "sideB": "Uscire comunque",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Parlare apertamente di soldi con gli amici vs mantenere la privacy — qual è l'approccio più maturo?",
                "sideA": "Parlarne apertamente",
                "sideB": "Mantenerlo privato",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavoro da casa vs Lavoro in ufficio",
                "sideA": "Casa",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "Nessun tragitto",
                    "Flessibilità"
                ],
                "ideasB": [
                    "Socializzazione",
                    "Migliore concentrazione"
                ]
            },
            {
                "topic": "Auto elettriche vs Auto a benzina",
                "sideA": "Elettriche",
                "sideB": "Benzina",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Ambiente",
                    "Silenzioso"
                ],
                "ideasB": [
                    "Autonomia",
                    "Velocità di ricarica"
                ]
            },
            {
                "topic": "Apprendimento online o apprendimento in aula — cosa è più efficace?",
                "sideA": "Online",
                "sideB": "Aula",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Memorizzare fatti o imparare come trovare informazioni — quale abilità è più importante?",
                "sideA": "Fatti",
                "sideB": "Trovare info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Istruzione universitaria o formazione professionale — quale è il percorso migliore?",
                "sideA": "Università",
                "sideB": "Professionale",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Esami o valutazione continua — quale è il modo più giusto per valutare gli studenti?",
                "sideA": "Esami",
                "sideB": "Continua",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Imparare una lingua straniera a scuola o vivere all'estero — cosa è più efficace?",
                "sideA": "Scuola",
                "sideB": "Vivere all'estero",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scuole maschili o femminili o scuole miste — quali sono migliori per gli studenti?",
                "sideA": "Solo maschi/femmine",
                "sideB": "Mista",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Social media o comunicazione faccia a faccia — cosa è meglio per restare in contatto?",
                "sideA": "Social media",
                "sideB": "Faccia a faccia",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Servizi di streaming o TV tradizionale — cosa è meglio?",
                "sideA": "Streaming",
                "sideB": "TV classica",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare da casa o lavorare in ufficio — cosa è più produttivo?",
                "sideA": "Casa",
                "sideB": "Ufficio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Leggere le notizie online o leggere un giornale — cosa è più affidabile?",
                "sideA": "Notizie online",
                "sideB": "Giornale",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passare il tempo sui social media o passare il tempo nella natura — cosa è meglio per la tua salute mentale?",
                "sideA": "Social media",
                "sideB": "Natura",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Usare i trasporti pubblici o guidare l'auto — cosa è meglio per la società?",
                "sideA": "Trasporti pubblici",
                "sideB": "Auto",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Comprare vestiti usati o comprare vestiti nuovi — quale è l'abitudine migliore?",
                "sideA": "Usato",
                "sideB": "Nuovo",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere in città o vivere in campagna — cosa si adatta meglio ai giovani?",
                "sideA": "Città",
                "sideB": "Campagna",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vegetarianismo o mangiare carne — cosa è meglio per il pianeta?",
                "sideA": "Vegetarianismo",
                "sideB": "Carne",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cambiamenti nello stile di vita individuale o azione del governo — cosa fa di più per l'ambiente?",
                "sideA": "Individuale",
                "sideB": "Governo",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un lavoro stabile o una carriera creativa — quale è la scelta di vita migliore?",
                "sideA": "Lavoro stabile",
                "sideB": "Carriera creativa",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aprire la propria attività o lavorare per un'azienda — cosa è meglio?",
                "sideA": "Propria attività",
                "sideB": "Azienda",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Salario alto o soddisfazione sul lavoro — cosa conta di più al lavoro?",
                "sideA": "Salario",
                "sideB": "Soddisfazione",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lavorare molte ore o avere un equilibrio vita-lavoro — cosa porta a un maggiore successo?",
                "sideA": "Molte ore",
                "sideB": "Equilibrio",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scegliere una carriera in base alla passione o in base alle prospettive di lavoro — cosa è più saggio?",
                "sideA": "Passione",
                "sideB": "Prospettive",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivere come individuo o mettere al primo posto la comunità — cosa è più importante?",
                "sideA": "Individuo",
                "sideB": "Comunità",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Valori tradizionali o valori moderni — quali sono più importanti da conservare?",
                "sideA": "Tradizionali",
                "sideB": "Moderni",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fare volontariato o donare soldi in beneficenza — cosa aiuta di più?",
                "sideA": "Volontariato",
                "sideB": "Donare",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fama o fare la differenza in silenzio — quale è l'obiettivo migliore nella vita?",
                "sideA": "Fama",
                "sideB": "Differenza silenziosa",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Seguire le regole o pensare con la propria testa — cosa conta di più?",
                "sideA": "Regole",
                "sideB": "Pensiero proprio",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Salute fisica o salute mentale — quale dovrebbe essere la priorità?",
                "sideA": "Fisica",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prevenzione o cura — quale è l'approccio migliore alla sanità?",
                "sideA": "Prevenzione",
                "sideB": "Cura",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport competitivo o esercizio fisico per divertimento — cosa è meglio per te?",
                "sideA": "Competitivo",
                "sideB": "Divertimento",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sanità privata o sanità pubblica — quale sistema è più equo?",
                "sideA": "Privata",
                "sideB": "Pubblica",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinema o letteratura — quale è una forma d'arte più potente?",
                "sideA": "Cinema",
                "sideB": "Letteratura",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Arte moderna o arte classica — cosa è più prezioso?",
                "sideA": "Moderna",
                "sideB": "Classica",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Preservare i vecchi edifici o costruirne di nuovi — cosa conta di più?",
                "sideA": "Preservare",
                "sideB": "Costruire",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cultura locale o globalizzazione — cosa arricchisce di più le comunità?",
                "sideA": "Locale",
                "sideB": "Globalizzazione",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Imparare dai propri errori vs imparare dai propri successi — cosa insegna di più?",
                "sideA": "Errori",
                "sideB": "Successi",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tablet in classe vs quaderni tradizionali — cosa aiuta di più gli studenti?",
                "sideA": "Tablet",
                "sideB": "Quaderni",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Essere sempre rintracciabili vs avere tempo libero digitale — cosa è meglio?",
                "sideA": "Sempre rintracciabili",
                "sideB": "Tempo libero",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Riutilizzare le cose vs riciclare — cosa è più efficace?",
                "sideA": "Riutilizzare",
                "sideB": "Riciclare",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Una sola carriera per tutta la vita vs cambiare spesso carriera — cosa è meglio?",
                "sideA": "Una carriera",
                "sideB": "Cambiare spesso",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormire vs fare esercizio — cosa ha un impatto maggiore sulla tua salute?",
                "sideA": "Dormire",
                "sideB": "Esercizio",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musica pop vs musica classica — quale ha un impatto culturale maggiore?",
                "sideA": "Pop",
                "sideB": "Classica",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sapere come finisce qualcosa vs essere sorpresi — cosa è meglio?",
                "sideA": "Sapere",
                "sideB": "Sorpresi",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rispondere immediatamente ai messaggi vs prendersi il proprio tempo — cosa è più rispettoso?",
                "sideA": "Immediatamente",
                "sideB": "Prendersi tempo",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Binge-watching vs guardare un episodio a settimana — quale è il modo giusto?",
                "sideA": "Binge-watching",
                "sideB": "Settimanale",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Posto finestrino vs posto corridoio — quale è oggettivamente migliore?",
                "sideA": "Finestrino",
                "sideB": "Corridoio",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Saltare la palestra una volta vs andare e fare una brutta sessione — cosa è peggio?",
                "sideA": "Saltare",
                "sideB": "Brutta sessione",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Parlare con se stessi vs parlare con il proprio animale — cosa è più ragionevole?",
                "sideA": "Con se stessi",
                "sideB": "Con l'animale",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Una persona che mi ha ispirato",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "L'importance della consapevolezza sulla salute mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
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
