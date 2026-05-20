(function() {
    const data = [
    {
        "word": "cambio di paradigma",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🔄",
        "form": "verb",
        "group": "are",
        "classification": "irregular",
        "aspect": "action",
        "v3": "cambiato paradigma",
        "auxiliary": "avere"
    },
    {
        "word": "reificare",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🗿",
        "subtext": "reificare un concetto / reificare il mercato / reificazione del lavoro",
        "form": "verb",
        "definitions": [
            {
                "text": "Trattare un concetto astratto come se fosse una cosa concreta e reale.",
                "examples": [
                    "I modelli economici reificano le forze di mercato, facendole apparire naturali e inevitabili."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reificò",
        "v3": "reificato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sublimare",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🌫️",
        "subtext": "sublimare il desiderio / sublimazione dell'impulso / reindirizzare in",
        "form": "verb",
        "definitions": [
            {
                "text": "Reindirizzare un desiderio o un impulso in una forma socialmente accettabile.",
                "examples": [
                    "Ha sublimato la sua frustrazione politica nella ricerca accademica."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sublimò",
        "v3": "sublimato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "predicare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🏗️",
        "subtext": "predicare su / basare un'affermazione / basato sull'assunto",
        "form": "verb",
        "definitions": [
            {
                "text": "Basare un'affermazione o un'azione su una condizione particolare; asserire.",
                "examples": [
                    "La sua argomentazione predica un livello di fiducia istituzionale che no esiste più."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "predicò",
        "v3": "predicato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "istanziare",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧱",
        "subtext": "istanziare un concept / istanziare nella pratica / istanziazione concreta",
        "form": "verb",
        "definitions": [
            {
                "text": "Rappresentare un concetto astratto in un esempio concreto.",
                "examples": [
                    "Il caso studio istanzia la teoria della cattura normativa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "istanziò",
        "v3": "istanziato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "negare",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "🚫",
        "subtext": "negare un'argomentazione / negare un diritto / negazione dialettica",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa inefficace o invertirne l'effetto.",
                "examples": [
                    "La nuova clausola nega efficacemente il diritto che sembra concedere."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "negò",
        "v3": "negato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "trascendere",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🌌",
        "subtext": "trascendere i limiti / trascendere le categorie / trascendere il personale",
        "form": "verb",
        "definitions": [
            {
                "text": "Andare oltre i limiti di qualcosa.",
                "examples": [
                    "La grande arte trascende il momento storico della sua creazione."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "trascese",
        "v3": "trasceso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "mediare",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "⚖️",
        "subtext": "mediare tra / mediare un conflitto / socialmente mediato",
        "form": "verb",
        "definitions": [
            {
                "text": "Fungere da intermediario tra due cose o persone; modificare una relazione.",
                "examples": [
                    "Il linguaggio media il nostro rapporto con la realtà."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mediò",
        "v3": "mediato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "elidere",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "✂️",
        "subtext": "elidere una distinzione / elidere la differenza / deliberatamente eliso",
        "form": "verb",
        "definitions": [
            {
                "text": "Fondere o omettere qualcosa, specialmente una distinzione cruciale.",
                "examples": [
                    "Il rapporto elide la differenza tra povertà e deprivazione."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "elise",
        "v3": "eliso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "offuscare",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "🌫️",
        "subtext": "offuscare la verità / deliberato offuscamento / offuscare con gergo",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere deliberatamente qualcosa poco chiaro o difficile da capire.",
                "examples": [
                    "Il linguaggio tecnico è stato usato per offuscare piuttosto che per chiarire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "offuscò",
        "v3": "offuscato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "fondere",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "🔀",
        "subtext": "fondere questioni / confondere con / fondere pericolosamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Combinare due cose distinte come se fossero la stessa cosa.",
                "examples": [
                    "Il dibattito fonde l'immigrazione con la migrazione irregolare."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fuse",
        "v3": "fuso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "invocare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "📜",
        "subtext": "invocare un diritto / invocare un precedente / invocare un'argomentazione",
        "form": "verb",
        "definitions": [
            {
                "text": "Richiamare o citare qualcosa per sostenere un'argomentazione.",
                "examples": [
                    "Ha invocato il diritto alla libertà di parola per difendere la pubblicazione."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invocò",
        "v3": "invocato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "mettere in primo piano",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "🔦",
        "subtext": "mettere in primo piano una questione / una prospettiva",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa l'elemento più prominente o importante.",
                "examples": [
                    "Il film mette in primo piano la razza come lente organizzativa centrale."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "mise in primo piano",
        "v3": "messo in primo piano",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "recuperare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🧽",
        "subtext": "recuperare un movimento / essere recuperato da / recupero culturale",
        "form": "verb",
        "definitions": [
            {
                "text": "Assorbire e neutralizzare idee sovversive all'interno di un sistema dominante.",
                "examples": [
                    "L'industria della moda ha recuperato l'estetica ribelle del punk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recuperò",
        "v3": "recuperato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "destabilizzare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🌪️",
        "subtext": "destabilizzare un regime / destabilizzare assunti / deliberatamente destabilizzare",
        "form": "verb",
        "definitions": [
            {
                "text": "Indebolire la stabilità di un sistema, concetto o posizione.",
                "examples": [
                    "L'argomentazione destabilizza la premessa centrale del liberalismo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "destabilizzò",
        "v3": "destabilizzato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "mercificare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🏷️",
        "subtext": "mercificare il lavoro / mercificare la cura / mercificazione dell'attenzione",
        "form": "verb",
        "definitions": [
            {
                "text": "Trattare qualcosa che non è un prodotto come una merce commerciale.",
                "examples": [
                    "L'industria del benessere mercifica la salute mentale e la cura di sé."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mercificò",
        "v3": "mercificato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "strumentalizzare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🛠️",
        "subtext": "strumentalizzare le persone / strumentalizzare un'idea / ridurre a strumento",
        "form": "verb",
        "definitions": [
            {
                "text": "Trattare qualcosa come un mero strumento o mezzo per un fine.",
                "examples": [
                    "I critici hanno sostenuto che la politica strumentalizzasse la salute dei lavoratori."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "strumentalizzò",
        "v3": "strumentalizzato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "valorizzare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🎖️",
        "subtext": "valorizzare il lavoro / valorizzare un concetto / essere valorizzato dalla cultura",
        "form": "verb",
        "definitions": [
            {
                "text": "Attribuire valore a qualcosa, specialmente in senso culturale o ideologico.",
                "examples": [
                    "La cultura moderna valorizza la produttività a spese del riposo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "valorizzò",
        "v3": "valorizzato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "feticizzare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🧿",
        "subtext": "feticizzare un'idea / feticismo della merce / feticizzare la crescita",
        "form": "verb",
        "definitions": [
            {
                "text": "Avere un'eccessiva venerazione per qualcosa; o nella teoria marxista, attribuire erroneamente relazioni sociali agli oggetti.",
                "examples": [
                    "La cultura delle startup feticizza la disruption come fine a se stessa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "feticizzò",
        "v3": "feticizzato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "egemonizzare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "👑",
        "subtext": "egemonizzare il discorso / tendenza egemonizzante / resistere all'egemonizzazione",
        "form": "verb",
        "definitions": [
            {
                "text": "Stabilire o estendere il dominio attraverso mezzi culturali o ideologici.",
                "examples": [
                    "Una singola piattaforma non può egemonizzare il discorso pubblico senza resistenza.",
                    "Un quadro teorico è arrivato a egemonizzare il campo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "egemonizzò",
        "v3": "egemonizzato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "alienare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "⛓️",
        "subtext": "alienare qualcuno / sentirsi alienato / alienazione marxista",
        "form": "verb",
        "definitions": [
            {
                "text": "Nella teoria marxista, separare i lavoratori dal prodotto del loro lavoro; più in generale, causare estraniamento.",
                "examples": [
                    "Le condizioni di lavoro industriali alienano i lavoratori da qualsiasi senso di artigianalità."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "alienò",
        "v3": "alienato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "demarcare",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "📏",
        "subtext": "demarcare un confine / demarcare chiaramente / linea di demarcazione",
        "form": "verb",
        "definitions": [
            {
                "text": "Stabilire il confine o i limiti di qualcosa.",
                "examples": [
                    "La legge tenta di demarcare la linea tra regolamentazione e censura."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "demarcò",
        "v3": "demarcato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "delimitare",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "🚧",
        "subtext": "delimitare lo scopo / delimitare un concetto / accuratamente delimitato",
        "form": "verb",
        "definitions": [
            {
                "text": "Determinare i limiti di qualcosa.",
                "examples": [
                    "Lo studio delimita deliberatamente il suo scopo per evitare eccessive generalizzazioni."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delimitò",
        "v3": "delimitato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "militare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "⚖️",
        "subtext": "militare contro / militare fortemente / militare a favore di",
        "form": "verb",
        "definitions": [
            {
                "text": "Essere un potente fattore che lavora contro qualcosa.",
                "examples": [
                    "La complessità del sistema milita contro una riforma efficace."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "militò",
        "v3": "militato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "viziare",
        "level": "proficiency",
        "theme": "epistemology_truth_C2",
        "emoji": "🧪",
        "subtext": "viziare un'affermazione / viziare un'argomentazione / legalmente viziato",
        "form": "verb",
        "definitions": [
            {
                "text": "Compromettere la qualità o l'efficacia di qualcosa; invalidare.",
                "examples": [
                    "Il difetto metodologico vizia le conclusioni dell'intero studio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "viziò",
        "v3": "viziato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "smentire",
        "level": "proficiency",
        "theme": "epistemology_truth_C2",
        "emoji": "🗣️",
        "subtext": "difficile da smentire / nessuno può smentire / smentire un'affermazione",
        "form": "verb",
        "definitions": [
            {
                "text": "Negare o contraddire qualcosa.",
                "examples": [
                    "È difficile smentire le prove presentate dal comitato."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smentì",
        "v3": "smentito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "abrogare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🔨",
        "subtext": "abrogare un accordo / abrogare un trattato / abrogazione unilaterale",
        "form": "verb",
        "definitions": [
            {
                "text": "Revocare o abolire formalmente una legge o un accordo.",
                "examples": [
                    "Il governo ha cercato di abrogare unilateralmente l'accordo commerciale."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "abrogò",
        "v3": "abrogato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "decostruire",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "🏚️",
        "subtext": "decostruire un'argomentazione / decostruire un testo / decostruzione derridiana",
        "form": "verb",
        "definitions": [
            {
                "text": "Analizzare i presupposti e le contraddizioni all'interno di un testo o di un'argomentazione.",
                "examples": [
                    "Ha decostruito il documento programmatico per rivelarne i presupposti ideologici."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "decostruì",
        "v3": "decostruito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "problematizzare",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "❓",
        "subtext": "problematizzare un concetto / resistere all'impulso di problematizzare",
        "form": "verb",
        "definitions": [
            {
                "text": "Identificare e articolare gli aspetti problematici di un concetto o di una pratica.",
                "examples": [
                    "La lezione problematizza la nozione di scelta individuale nella società dei consumi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "problematizzò",
        "v3": "problematizzato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sviscerare",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "📦",
        "subtext": "sviscerare un assunto / sviscerare le implicazioni / sviscerare con cura",
        "form": "verb",
        "definitions": [
            {
                "text": "Scomporre ed esaminare i componenti e le implicazioni di qualcosa.",
                "examples": [
                    "Prima di procedere, lasciateci sviscerare cosa intendiamo qui per responsabilità."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sviscerò",
        "v3": "sviscerato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "precludere",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "🚪",
        "subtext": "precludere un'opzione / precludere il dibattito / precludere la possibilità di",
        "form": "verb",
        "definitions": [
            {
                "text": "Impedire che una possibilità venga considerata; prevenire.",
                "examples": [
                    "La formulazione della domanda preclude le risposte più interessanti."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "precluse",
        "v3": "precluso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "dialettizzare",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "☯️",
        "subtext": "dialettizzare un binario / metodo dialettico / tesi e antitesi",
        "form": "verb",
        "definitions": [
            {
                "text": "Approcciare qualcosa attraverso il metodo del ragionamento dialettico.",
                "examples": [
                    "Egli dialettizza l'opposizione tra libertà e sicurezza."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dialettizzò",
        "v3": "dialettizzato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "contravvenire",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "📜",
        "subtext": "contravvenire a una legge / contravvenire ai regolamenti",
        "form": "verb",
        "definitions": [
            {
                "text": "Agire contro una regola, una legge o un accordo.",
                "examples": [
                    "La decisione è stata trovata contravvenire alla legge sulla concorrenza dell'UE."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "contravvenne",
        "v3": "contravvenuto",
        "group": "ire",
        "auxiliary": "essere"
    },
    {
        "word": "sussumere",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "📂",
        "subtext": "sussumere sotto / essere sussunto da / sussumere in una categoria",
        "form": "verb",
        "definitions": [
            {
                "text": "Includere o assorbire qualcosa all'interno di una categoria più ampia.",
                "examples": [
                    "La sua teoria sussume tutti i resoconti precedenti all'interno di un unico quadro."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sussunse",
        "v3": "sussunto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "accentuare",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "💡",
        "subtext": "accentuare una differenza / accentuare il positivo / essere accentuato da",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere qualcosa più prominente o evidente.",
                "examples": [
                    "La crisi ha accentuato le disuguaglianze esistenti in tutta la forza lavoro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "accentuò",
        "v3": "accentuato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "acconsentire",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🤝",
        "subtext": "acconsentire a / acquiescenza riluttante",
        "form": "verb",
        "definitions": [
            {
                "text": "Accettare qualcosa senza obiettare.",
                "examples": [
                    "Ha acconsentito alla decisione del consiglio nonostante le forti riserve."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acconsentì",
        "v3": "acconsentito",
        "group": "ire",
        "auxiliary": "avere"
    },
    {
        "word": "alleviare",
        "level": "proficiency",
        "theme": "ethics_advanced_C2",
        "emoji": "🩹",
        "subtext": "alleviare la sofferenza / alleviare la povertà / alleviare la pressione",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere un problema meno grave.",
                "examples": [
                    "La nuova politica ha fatto poco per alleviare la crisi abitativa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "alleviò",
        "v3": "alleviato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "aggirare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🔄",
        "subtext": "aggirare le regole / aggirare un problema / aggirare i controlli",
        "form": "verb",
        "definitions": [
            {
                "text": "Trovare un modo per evitare una regola o una difficoltà.",
                "examples": [
                    "Ha trovato un modo legale per aggirare l'ostacolo burocratico."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "aggirò",
        "v3": "aggirato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "corroborare",
        "level": "proficiency",
        "theme": "epistemology_truth_C2",
        "emoji": "✅",
        "subtext": "corroborare un'affermazione / corroborare le prove / essere corroborato da",
        "form": "verb",
        "definitions": [
            {
                "text": "Confermare o sostenere una dichiarazione con prove.",
                "examples": [
                    "La testimonianza del testimone ha corroborato pienamente le prove documentali."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "corroborò",
        "v3": "corroborato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "diffondere",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "📢",
        "subtext": "diffondere informazioni / diffondere i risultati / ampiamente diffuso",
        "form": "verb",
        "definitions": [
            {
                "text": "Spargere informazioni o idee ampiamente.",
                "examples": [
                    "I risultati sono stati diffusi attraverso reti di ricerca internazionali."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "diffuse",
        "v3": "diffuso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "racchiudere",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "💊",
        "subtext": "racchiudere un'idea / racchiudere il problema / racchiudere sinteticamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Esprimere le caratteristiche essenziali di qualcosa in modo conciso.",
                "examples": [
                    "La frase racchiude perfettamente il paradosso del lavoro moderno."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "racchiuse",
        "v3": "racchiuso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "ingenerare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🌱",
        "subtext": "ingenerare fiducia / ingenerare conflitto / ingenerare risentimento",
        "form": "verb",
        "definitions": [
            {
                "text": "Causare o dare origine a un sentimento o a una situazione.",
                "examples": [
                    "La nuova politica ha ingenerato un notevole risentimento tra il personale."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ingenerò",
        "v3": "ingenerato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "esacerbare",
        "level": "proficiency",
        "theme": "ethics_advanced_C2",
        "emoji": "📈",
        "subtext": "esacerbare un problema / esacerbare le tensioni / esacerbare la disuguaglianza",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere peggiore un problema o una situazione.",
                "examples": [
                    "La recessione economica ha esacerbato le disuguaglianze sociali esistenti."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "esacerbò",
        "v3": "esacerbato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "esemplificare",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "🌟",
        "subtext": "esemplificare qualcosa / esemplificare il problema / esemplificare chiaramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Essere un perfetto esempio di qualcosa.",
                "examples": [
                    "La sua carriera esemplifica le sfide che le donne affrontano in ruoli senior."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "esemplificò",
        "v3": "esemplificato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "impedire",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "🛑",
        "subtext": "impedire il progresso / impedire la crescita / impedire a qualcuno di fare",
        "form": "verb",
        "definitions": [
            {
                "text": "Ritardare o prevenire il progresso di qualcosa.",
                "examples": [
                    "Una regolamentazione eccessiva può impedire l'innovazione in nuove industrie."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "impedì",
        "v3": "impedito",
        "group": "ire_isco",
        "auxiliary": "avere"
    },
    {
        "word": "mitigare",
        "level": "proficiency",
        "theme": "ethics_advanced_C2",
        "emoji": "🛡️",
        "subtext": "mitigare il rischio / mitigare l'impatto / mitigare contro",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendere meno grave un effetto dannoso.",
                "examples": [
                    "Una buona comunicazione può aiutare a mitigare l'impatto del cambiamento."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mitigò",
        "v3": "mitigato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "obbligare",
        "level": "proficiency",
        "theme": "political_theory_C2",
        "emoji": "📜",
        "subtext": "essere obbligato a / obbligare qualcuno a / sentirsi obbligato",
        "form": "verb",
        "definitions": [
            {
                "text": "Richiedere a qualcuno di fare qualcosa per legge o per dovere morale.",
                "examples": [
                    "La legge obbliga tutti i datori di lavoro a fornire un ambiente di lavoro sicuro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obbligò",
        "v3": "obbligato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "pervadere",
        "level": "proficiency",
        "theme": "civilisation_history_C2",
        "emoji": "🌊",
        "subtext": "pervadere l'organizzazione / essere pervaso da / onnipervadente",
        "form": "verb",
        "definitions": [
            {
                "text": "Diffondersi e essere presente in ogni parte di qualcosa.",
                "examples": [
                    "Una cultura del sovraccarico di lavoro pervade il settore dei servizi finanziari."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "pervase",
        "v3": "pervaso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "precludere",
        "level": "proficiency",
        "theme": "epistemology_knowledge_C2",
        "emoji": "🚫",
        "subtext": "precludere a qualcuno / precludere la possibilità / non precludere",
        "form": "verb",
        "definitions": [
            {
                "text": "Impedire che qualcosa accada.",
                "examples": [
                    "La sua mancanza di esperienza pertinente lo ha precluso dalla selezione finale."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "precluse",
        "v3": "precluso",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "conciliare",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "🤝",
        "subtext": "conciliare idee / difficile da conciliare / conciliare le differenze",
        "form": "verb",
        "definitions": [
            {
                "text": "Ripristinare relazioni amichevoli; rendere compatibile.",
                "examples": [
                    "Ha trovato impossibile conciliare i suoi valori con la cultura aziendale."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "conciliò",
        "v3": "conciliato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "soppiantare",
        "level": "proficiency",
        "theme": "civilisation_history_C2",
        "emoji": "🚀",
        "subtext": "soppiantare una legge / soppiantare le linee guida precedenti",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendere il posto di qualcosa precedentemente in uso.",
                "examples": [
                    "Le nuove linee guida soppianteranno tutte le versioni precedenti."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "soppiantò",
        "v3": "soppiantato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sostenere",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "🏗️",
        "subtext": "sostenere un'argomentazione / sostenere il successo / essere sostenuto da",
        "form": "verb",
        "definitions": [
            {
                "text": "Supportare o formare la base di qualcosa.",
                "examples": [
                    "Una forte fiducia sostiene ogni partnership di successo a lungo termine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "sostenne",
        "v3": "sostenuto",
        "group": "ere",
        "auxiliary": "avere"
    },
    {
        "word": "giustificare",
        "level": "proficiency",
        "theme": "epistemology_truth_C2",
        "emoji": "⚖️",
        "subtext": "giustificare qualcuno / giustificare una decisione / sentirsi giustificato",
        "form": "verb",
        "definitions": [
            {
                "text": "Liberare qualcuno dalla colpa; dimostrare che qualcosa era giustificato.",
                "examples": [
                    "I risultati hanno giustificato la sua decisione controversa due anni dopo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "giustificò",
        "v3": "giustificato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "ruotare attorno a",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🚪",
        "subtext": "ruotare attorno a una decisione / ruotare attorno a un singolo fattore",
        "form": "verb",
        "definitions": [
            {
                "text": "Dipendere interamente da un particolare fattore.",
                "examples": [
                    "L'intero successo del progetto ruota attorno all'approvazione del cliente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "ruotò attorno a",
        "v3": "ruotato attorno a",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "affrontare",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction_C2",
        "emoji": "🤼",
        "subtext": "affrontare un problema / affrontare le implicazioni / affrontare la complessità",
        "form": "verb",
        "definitions": [
            {
                "text": "Lottare per capire o affrontare qualcosa di difficile.",
                "examples": [
                    "I decisori politici stanno ancora affrontando le implicazioni dell'IA."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "affrontò",
        "v3": "affrontato",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "sorvolare su",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "🎨",
        "subtext": "sorvolare su un problema / sorvolare sui dettagli / non sorvolare",
        "form": "verb",
        "definitions": [
            {
                "text": "Trattare qualcosa troppo velocemente per evitare difficoltà.",
                "examples": [
                    "Il rapporto sorvola sui dettagli finanziari più controversi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sorvolò su",
        "v3": "sorvolato su",
        "group": "are",
        "auxiliary": "avere"
    },
    {
        "word": "mascherare",
        "level": "proficiency",
        "theme": "rhetoric_persuasion_C2",
        "emoji": "📄",
        "subtext": "mascherare un problema / mascherare le crepe / mascherare le differenze",
        "form": "verb",
        "definitions": [
            {
                "text": "Nascondere o oscurare un problema senza risolverlo.",
                "examples": [
                    "L'accordo ha semplicemente mascherato le profonde divisioni strutturali."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mascherò",
        "v3": "mascherato",
        "group": "are",
        "auxiliary": "avere"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();