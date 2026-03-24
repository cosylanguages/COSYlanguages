(function() {
    const data = [
    {
        "word": "ingegnere",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "l'",
        "emoji": "👷",
        "form": "noun",
        "plural": "ingegneri",
        "definitions": [
            {
                "text": "Una persona che progetta o costruisce macchine, motori o strutture.",
                "examples": [
                    "L'ingegnere lavora a un nuovo ponte.",
                    "Vuole diventare un ingegnere civile."
                ]
            }
        ]
    },
    {
        "word": "pilota",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "il",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "plural": "piloti",
        "definitions": [
            {
                "text": "Una persona che guida un aereo o un elicottero.",
                "examples": [
                    "Il pilota è nella cabina di pilotaggio.",
                    "Vuole diventare un pilota."
                ]
            }
        ]
    },
    {
        "word": "sviluppatore software",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "lo",
        "emoji": "💻",
        "form": "noun",
        "plural": "sviluppatori software",
        "definitions": [
            {
                "text": "Una persona che scrive programmi informatici.",
                "examples": [
                    "Lo sviluppatore crea un'applicazione."
                ]
            }
        ]
    },
    {
        "word": "carriera",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "la",
        "emoji": "📈",
        "form": "noun",
        "plural": "carriere",
        "definitions": [
            {
                "text": "La serie di lavori che una persona svolge durante la propria vita lavorativa.",
                "examples": [
                    "Ha avuto una carriera di successo nella finanza."
                ]
            }
        ]
    },
    {
        "word": "licenziamento",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "il",
        "emoji": "📉",
        "form": "noun",
        "plural": "licenziamenti",
        "subtext": "perdere il lavoro",
        "definitions": [
            {
                "text": "Perdere il lavoro perché il datore di lavoro non ha più bisogno della posizione.",
                "examples": [
                    "Ha ricevuto un'indennità di licenziamento l'anno scorso."
                ]
            }
        ]
    },
    {
        "word": "lavoro flessibile",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "article": "il",
        "emoji": "🏠",
        "form": "noun",
        "plural": "lavori flessibili",
        "definitions": [
            {
                "text": "Un accordo che permette ai dipendenti di variare l'orario o il luogo di lavoro.",
                "examples": [
                    "Lo studio offre il lavoro flessibile da casa."
                ]
            }
        ]
    },
    {
        "word": "networking",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "il",
        "emoji": "🤝",
        "form": "noun",
        "plural": "networking",
        "definitions": [
            {
                "text": "Costruire relazioni professionali per aiutare la propria carriera.",
                "examples": [
                    "Il networking è essenziale in questo settore."
                ]
            }
        ]
    },
    {
        "word": "carico di lavoro",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "article": "il",
        "emoji": "📚",
        "form": "noun",
        "plural": "carichi di lavoro",
        "definitions": [
            {
                "text": "La quantità di lavoro che una persona deve svolgere.",
                "examples": [
                    "Il suo carico di lavoro è aumentato molto questo mese."
                ]
            }
        ]
    },
    {
        "word": "lavoro di squadra",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
        "article": "il",
        "emoji": "👥",
        "form": "noun",
        "plural": "lavori di squadra",
        "definitions": [
            {
                "text": "Lavorare efficacemente insieme ad altre persone.",
                "examples": [
                    "Un buon lavoro di squadra ha reso il progetto un successo."
                ]
            }
        ]
    },
    {
        "word": "ambizione",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "l'",
        "emoji": "🚀",
        "form": "noun",
        "plural": "ambizioni",
        "definitions": [
            {
                "text": "Un forte desiderio di ottenere qualcosa.",
                "examples": [
                    "La sua ambizione è diventare manager."
                ]
            }
        ]
    },
    {
        "word": "competenza",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "la",
        "emoji": "🛠️",
        "form": "noun",
        "plural": "competenze",
        "subtext": "abilità, capacità",
        "definitions": [
            {
                "text": "La capacità di fare bene qualcosa, solitamente acquisita attraverso la pratica.",
                "examples": [
                    "Le competenze comunicative sono molto importanti al lavoro."
                ]
            }
        ]
    },
    {
        "word": "lavoratore autonomo",
        "level": "intermediate",
        "theme": "career_development_B1",
        "article": "il",
        "emoji": "👨‍💻",
        "form": "noun",
        "plural": "lavoratori autonomi",
        "subtext": "freelance",
        "definitions": [
            {
                "text": "Lavorare per se stessi piuttosto che per un'azienda.",
                "examples": [
                    "Lavora come graphic designer autonoma."
                ]
            }
        ]
    },
    {
        "word": "congedo di maternità",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "article": "il",
        "emoji": "👶",
        "form": "noun",
        "plural": "congedi di maternità",
        "definitions": [
            {
                "text": "Tempo retribuito di assenza dal lavoro concesso a una madre dopo la nascita di un bambino.",
                "examples": [
                    "Ha preso sei mesi di congedo di maternità."
                ]
            }
        ]
    },
    {
        "word": "pensione",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "la",
        "emoji": "👴",
        "form": "noun",
        "plural": "pensioni",
        "definitions": [
            {
                "text": "Denaro pagato regolarmente a qualcuno dopo che è andato in pensione.",
                "examples": [
                    "Versa contributi per la sua pensione ogni mese."
                ]
            }
        ]
    },
    {
        "word": "investimento",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "l'",
        "emoji": "💰",
        "form": "noun",
        "plural": "investimenti",
        "definitions": [
            {
                "text": "Denaro investito in qualcosa per ottenere un profitto in futuro.",
                "examples": [
                    "L'immobiliare è un investimento popolare."
                ]
            }
        ]
    },
    {
        "word": "tasso di interesse",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "il",
        "emoji": "📊",
        "form": "noun",
        "plural": "tassi di interesse",
        "definitions": [
            {
                "text": "La percentuale addebitata per il prestito di denaro o guadagnata sui risparmi.",
                "examples": [
                    "Il tasso di interesse sul mutuo è del tre percento."
                ]
            }
        ]
    },
    {
        "word": "reddito",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "il",
        "emoji": "💸",
        "form": "noun",
        "plural": "redditi",
        "definitions": [
            {
                "text": "Denaro ricevuto dal lavoro o da altre fonti.",
                "examples": [
                    "Il loro reddito familiare è confortevole."
                ]
            }
        ]
    },
    {
        "word": "assicurazione",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "l'",
        "emoji": "🛡️",
        "form": "noun",
        "plural": "assicurazioni",
        "definitions": [
            {
                "text": "Un accordo in cui si paga regolarmente per essere protetti contro perdite o danni.",
                "examples": [
                    "L'assicurazione sanitaria è costosa in alcuni paesi."
                ]
            }
        ]
    },
    {
        "word": "tassa",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "article": "la",
        "emoji": "🏦",
        "form": "noun",
        "plural": "tasse",
        "subtext": "imposta",
        "definitions": [
            {
                "text": "Denaro pagato al governo in base al reddito o agli acquisti.",
                "examples": [
                    "Paga molte tasse sul reddito."
                ]
            }
        ]
    },
    {
        "word": "benessere",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "article": "il",
        "emoji": "🧘",
        "form": "noun",
        "plural": "benesseri",
        "definitions": [
            {
                "text": "Una sensazione generale di essere a proprio agio, in salute e felici.",
                "examples": [
                    "L'esercizio fisico è importante per il benessere mentale."
                ]
            }
        ]
    },
    {
        "word": "salute mentale",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "article": "la",
        "emoji": "🧠",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Lo stato psicologico ed emotivo di una persona.",
                "examples": [
                    "Le aziende stanno prendendo più seriamente la salute mentale."
                ]
            }
        ]
    },
    {
        "word": "burnout",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "article": "il",
        "emoji": "🔥",
        "form": "noun",
        "plural": null,
        "subtext": "esaurimento",
        "definitions": [
            {
                "text": "Uno stato di esaurimento causato da troppo stress per lungo tempo.",
                "examples": [
                    "Ha sofferto di burnout dopo aver lavorato senza sosta."
                ]
            }
        ]
    },
    {
        "word": "prevention",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "article": "la",
        "emoji": "🛡️",
        "form": "noun",
        "plural": "prevenzioni",
        "definitions": [
            {
                "text": "Azione intrapresa per impedire che accada qualcosa di brutto.",
                "examples": [
                    "La prevenzione è meglio della cura."
                ]
            }
        ]
    },
    {
        "word": "sintomo",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "article": "il",
        "emoji": "🤒",
        "form": "noun",
        "plural": "sintomi",
        "definitions": [
            {
                "text": "Segni che suggeriscono che una persona ha una particolare malattia.",
                "examples": [
                    "I sintomi sono iniziati la settimana scorsa."
                ]
            }
        ]
    },
    {
        "word": "terapia",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "article": "la",
        "emoji": "🛋️",
        "form": "noun",
        "plural": "terapie",
        "definitions": [
            {
                "text": "Trattamento per problemi mentali o fisici, spesso attraverso il colloquio.",
                "examples": [
                    "Va in terapia una volta alla settimana."
                ]
            }
        ]
    },
    {
        "word": "fiducia",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "la",
        "emoji": "🤝",
        "form": "noun",
        "plural": "fiducie",
        "definitions": [
            {
                "text": "Una ferma convinzione nell'onestà e nell'affidabilità di qualcuno.",
                "examples": [
                    "La fiducia è alla base di una buona relazione."
                ]
            }
        ]
    },
    {
        "word": "conflitto",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "il",
        "emoji": "⚔️",
        "form": "noun",
        "plural": "conflitti",
        "definitions": [
            {
                "text": "Un serio disaccordo o discussione.",
                "examples": [
                    "Hanno avuto un conflitto per i soldi."
                ]
            }
        ]
    },
    {
        "word": "responsabilità",
        "level": "intermediate",
        "theme": "parenting_childcare_B1",
        "article": "la",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "responsabilità",
        "definitions": [
            {
                "text": "Il dovere di prendersi cura di qualcuno o qualcosa.",
                "examples": [
                    "I genitori hanno una responsabilità verso i figli."
                ]
            }
        ]
    },
    {
        "word": "aspettativa",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "l'",
        "emoji": "⏳",
        "form": "noun",
        "plural": "aspettative",
        "definitions": [
            {
                "text": "Una convinzione su ciò che accadrà o dovrebbe accadere.",
                "examples": [
                    "Ha alte aspettative nei confronti del suo partner."
                ]
            }
        ]
    },
    {
        "word": "confine",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "il",
        "emoji": "🚧",
        "form": "noun",
        "plural": "confini",
        "subtext": "limite",
        "definitions": [
            {
                "text": "Un limite a ciò che si è disposti ad accettare in una relazione.",
                "examples": [
                    "È sano stabilire confini chiari."
                ]
            }
        ]
    },
    {
        "word": "divorzio",
        "level": "intermediate",
        "theme": "family_dynamics_B1",
        "article": "il",
        "emoji": "💔",
        "form": "noun",
        "plural": "divorzi",
        "definitions": [
            {
                "text": "La fine legale di un matrimonio.",
                "examples": [
                    "Il tasso di divorzio è aumentato negli ultimi decenni."
                ]
            }
        ]
    },
    {
        "word": "uguaglianza",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "article": "l'",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "uguaglianze",
        "opposite": "disuguaglianza",
        "definitions": [
            {
                "text": "Lo stato di essere uguali in diritti e opportunità.",
                "examples": [
                    "Lottano per l'uguaglianza di genere al lavoro."
                ]
            }
        ]
    },
    {
        "word": "libertà",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "article": "la",
        "emoji": "🗽",
        "form": "noun",
        "plural": "libertà",
        "definitions": [
            {
                "text": "Il diritto di agire e pensare senza restrizioni.",
                "examples": [
                    "La libertà di parola è molto importante."
                ]
            }
        ]
    },
    {
        "word": "disuguaglianza",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "article": "la",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "disuguaglianze",
        "opposite": "uguaglianza",
        "definitions": [
            {
                "text": "Una situazione ingiusta in cui alcune persone hanno più di altre.",
                "examples": [
                    "La disuguaglianza di reddito sta crescendo in molti paesi."
                ]
            }
        ]
    },
    {
        "word": "volontario",
        "level": "intermediate",
        "theme": "society_community_B1",
        "article": "il",
        "emoji": "🙋",
        "form": "noun",
        "plural": "volontari",
        "definitions": [
            {
                "text": "Offrirsi di fare qualcosa senza essere pagati.",
                "examples": [
                    "Fa il volontario alla banca alimentare locale."
                ]
            }
        ]
    },
    {
        "word": "comunità",
        "level": "intermediate",
        "theme": "society_community_B1",
        "article": "la",
        "emoji": "🏘️",
        "form": "noun",
        "plural": "comunità",
        "definitions": [
            {
                "text": "Un gruppo di persone che condividono un luogo, un'identità o un interesse comune.",
                "examples": [
                    "È molto attivo nella sua comunità locale."
                ]
            }
        ]
    },
    {
        "word": "generazione",
        "level": "intermediate",
        "theme": "society_community_B1",
        "article": "la",
        "emoji": "👥",
        "form": "noun",
        "plural": "generazioni",
        "definitions": [
            {
                "text": "Tutte le persone di età simile in una società.",
                "examples": [
                    "Ogni generazione affronta sfide diverse."
                ]
            }
        ]
    },
    {
        "word": "cambiamento climatico",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "article": "il",
        "emoji": "🌍",
        "form": "noun",
        "plural": null,
        "definitions": [
            {
                "text": "Cambiamenti a lungo termine delle temperature globali e dei modelli meteorologici.",
                "examples": [
                    "Il cambiamento climatico è la sfida più grande del nostro tempo."
                ]
            }
        ]
    },
    {
        "word": "energia rinnovabile",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "article": "l'",
        "emoji": "☀️",
        "form": "noun",
        "plural": "energie rinnovabili",
        "definitions": [
            {
                "text": "Energia da fonti naturali che non si esauriscono, come il vento o il sole.",
                "examples": [
                    "L'azienda è passata all'energia rinnovabile."
                ]
            }
        ]
    },
    {
        "word": "impronta di carbonio",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "article": "l'",
        "emoji": "👣",
        "form": "noun",
        "plural": "impronte di carbonio",
        "definitions": [
            {
                "text": "La quantità totale di gas serra prodotti dalle attività di una persona.",
                "examples": [
                    "Volare aumenta la tua impronta di carbonio."
                ]
            }
        ]
    },
    {
        "word": "rifiuti",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "article": "i",
        "emoji": "🗑️",
        "form": "noun",
        "plural": "rifiuti",
        "subtext": "scarti",
        "definitions": [
            {
                "text": "Materiale che non è più necessario e viene buttato via.",
                "examples": [
                    "Dobbiamo ridurre i rifiuti alimentari."
                ]
            }
        ]
    },
    {
        "word": "tuttavia",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "🔄",
        "form": "adverb",
        "subtext": "però, ciononostante",
        "definitions": [
            {
                "text": "Usato per introdurre un contrasto o un'idea opposta.",
                "examples": [
                    "Mi piace la città. Tuttavia, è molto costosa."
                ]
            }
        ]
    },
    {
        "word": "sebbene",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "🔗",
        "form": "conjunction",
        "subtext": "nonostante",
        "definitions": [
            {
                "text": "Nonostante il fatto che; anche se.",
                "examples": [
                    "Sebbene sia stanca, va in palestra."
                ]
            }
        ]
    },
    {
        "word": "d'altra parte",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "⚖️",
        "form": "adverb",
        "subtext": "per contro",
        "definitions": [
            {
                "text": "Usato per introdurre un punto di contrasto.",
                "examples": [
                    "La vita in città è eccitante. D'altra parte, è stressante."
                ]
            }
        ]
    },
    {
        "word": "secondo me",
        "level": "intermediate",
        "theme": "expressing_opinion_B1",
        "emoji": "🗣️",
        "form": "adverb",
        "subtext": "a mio parere",
        "definitions": [
            {
                "text": "Usato per introdurre la tua opinione personale.",
                "examples": [
                    "Secondo me, il lavoro a distanza è più produttivo."
                ]
            }
        ]
    },
    {
        "word": "di conseguenza",
        "level": "intermediate",
        "theme": "discourse_markers_B1",
        "emoji": "➡️",
        "form": "adverb",
        "subtext": "perciò",
        "definitions": [
            {
                "text": "A causa di questo; conseguentemente.",
                "examples": [
                    "Ha lavorato sodo. Di conseguenza, ha ottenuto una promozione."
                ]
            }
        ]
    },
    {
        "word": "pizza",
        "level": "intermediate",
        "theme": "food_culture_cuisine_B1",
        "article": "la",
        "emoji": "🍕",
        "form": "noun",
        "plural": "pizze",
        "definitions": [
            {
                "text": "Un pane piatto condito con pomodoro e mozzarella.",
                "examples": [
                    "Mi piace la pizza margherita."
                ]
            }
        ]
    },
    {
        "word": "tiramisù",
        "level": "intermediate",
        "theme": "food_culture_cuisine_B1",
        "article": "il",
        "emoji": "🍰",
        "form": "noun",
        "plural": "tiramisù",
        "definitions": [
            {
                "text": "Un dolce al cucchiaio con savoiardi, caffè e mascarpone.",
                "examples": [
                    "Il tiramisù è il mio dolce preferito."
                ]
            }
        ]
    },
    {
        "word": "aranciata",
        "level": "intermediate",
        "theme": "food_culture_cuisine_B1",
        "article": "la",
        "emoji": "🥤",
        "form": "noun",
        "plural": "aranciate",
        "definitions": [
            {
                "text": "Una bevanda analcolica frizzante all'arancia.",
                "examples": [
                    "Bevo un'aranciata fresca."
                ]
            }
        ]
    },
    {
        "word": "biblioteca",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "article": "la",
        "emoji": "📚",
        "form": "noun",
        "plural": "biblioteche",
        "definitions": [
            {
                "text": "Un luogo con molti libri da leggere o prendere in prestito.",
                "examples": [
                    "Studio nella biblioteca dell'università."
                ]
            }
        ]
    },
    {
        "word": "museo",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "article": "il",
        "emoji": "🏛️",
        "form": "noun",
        "plural": "musei",
        "definitions": [
            {
                "text": "Un edificio dove si possono guardare oggetti importanti del passato.",
                "examples": [
                    "Abbiamo visitato un museo d'arte."
                ]
            }
        ]
    },
    {
        "word": "aeroporto",
        "level": "intermediate",
        "theme": "travel_cultural_B1",
        "article": "l'",
        "emoji": "✈️",
        "form": "noun",
        "plural": "aeroporti",
        "definitions": [
            {
                "text": "Un luogo dove gli aerei atterrano e decollano.",
                "examples": [
                    "Siamo arrivati all'aeroporto."
                ]
            }
        ]
    },
    {
        "word": "armadio",
        "level": "intermediate",
        "theme": "home_living",
        "article": "l'",
        "emoji": "👗",
        "form": "noun",
        "plural": "armadi",
        "definitions": [
            {
                "text": "Un mobile per riporre i vestiti.",
                "examples": [
                    "I miei vestiti sono nell'armadio."
                ]
            }
        ]
    },
    {
        "word": "elefante",
        "level": "intermediate",
        "theme": "environment_nature",
        "article": "l'",
        "emoji": "🐘",
        "form": "noun",
        "plural": "elefanti",
        "definitions": [
            {
                "text": "Un animale molto grande e grigio con una proboscide.",
                "examples": [
                    "L'elefante vive in Africa."
                ]
            }
        ]
    },
    {
        "word": "scimmia",
        "level": "intermediate",
        "theme": "environment_nature",
        "article": "la",
        "emoji": "🐒",
        "form": "noun",
        "plural": "scimmie",
        "definitions": [
            {
                "text": "Un animale che si arrampica sugli alberi e somiglia all'uomo.",
                "examples": [
                    "La scimmia mangia una banana."
                ]
            }
        ]
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
