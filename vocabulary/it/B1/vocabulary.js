// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "it_intermediate_places_013",
        "word": "giardino",
        "lang": "it",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Un giardino pubblico o un parco.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "🌳",
        "_legacy": {
            "image": "images/vocabulary/places/garden.png",
            "classification": "regular",
            "countability": "countable"
        }
    },
    {
        "id": "it_intermediate_work_001",
        "word": "ingegnere",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Una persona che progetta o costruisce macchine, motori o strutture.",
                "examples": [
                    "L'ingegnere lavora a un nuovo ponte.",
                    "Vuole diventare un ingegnere civile."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👷",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "ingegneri"
        }
    },
    {
        "id": "it_intermediate_work_002",
        "word": "pilota",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Una persona che guida un aereo o un elicottero.",
                "examples": [
                    "Il pilota è nella cabina di pilotaggio.",
                    "Vuole diventare un pilota."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧑‍✈️",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "piloti"
        }
    },
    {
        "id": "it_intermediate_work_003",
        "word": "sviluppatore software",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Una persona che scrive programmi informatici.",
                "examples": [
                    "Lo sviluppatore crea un'applicazione."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💻",
        "_legacy": {
            "article": "lo",
            "classification": "regular",
            "plural": "sviluppatori software"
        }
    },
    {
        "id": "it_intermediate_work_004",
        "word": "carriera",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "La serie di lavori che una persona svolge durante la propria vita lavorativa.",
                "examples": [
                    "Ha avuto una carriera di successo nella finanza."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📈",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "carriere"
        }
    },
    {
        "id": "it_intermediate_work_005",
        "word": "licenziamento",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Perdere il lavoro perché il datore di lavoro non ha più bisogno della posizione.",
                "examples": [
                    "Ha ricevuto un'indennità di licenziamento l'anno scorso."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📉",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "licenziamenti",
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_work_006",
        "word": "lavoro flessibile",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Un accordo che permette ai dipendenti di variare l'orario o il luogo di lavoro.",
                "examples": [
                    "Lo studio offre il lavoro flessibile da casa."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏠",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "lavori flessibili"
        }
    },
    {
        "id": "it_intermediate_work_007",
        "word": "networking",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Costruire relazioni professionali per aiutare la propria carriera.",
                "examples": [
                    "Il networking è essenziale in questo settore."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤝",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "networking"
        }
    },
    {
        "id": "it_intermediate_work_008",
        "word": "carico di lavoro",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "La quantità di lavoro che una persona deve svolgere.",
                "examples": [
                    "Il suo carico di lavoro è aumentato molto questo mese."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📚",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "carichi di lavoro"
        }
    },
    {
        "id": "it_intermediate_work_009",
        "word": "lavoro di squadra",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Lavorare efficacemente insieme ad altre persone.",
                "examples": [
                    "Un buon lavoro di squadra ha reso il progetto un successo."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👥",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "lavori di squadra"
        }
    },
    {
        "id": "it_intermediate_work_010",
        "word": "ambizione",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Un forte desiderio di ottenere qualcosa.",
                "examples": [
                    "La sua ambizione è diventare manager."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🚀",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "ambizioni"
        }
    },
    {
        "id": "it_intermediate_work_011",
        "word": "competenza",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "La capacità di fare bene qualcosa, solitamente acquisita attraverso la pratica.",
                "examples": [
                    "Le competenze comunicative sono molto importanti al lavoro."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛠️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "competenze",
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_work_012",
        "word": "lavoratore autonomo",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Lavorare per se stessi piuttosto che per un'azienda.",
                "examples": [
                    "Lavora come graphic designer autonoma."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👨‍💻",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "lavoratori autonomi",
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_work_013",
        "word": "congedo di maternità",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Tempo retribuito di assenza dal lavoro concesso a una madre dopo la nascita di un bambino.",
                "examples": [
                    "Ha preso sei mesi di congedo di maternità."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👶",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "congedi di maternità"
        }
    },
    {
        "id": "it_intermediate_work_014",
        "word": "pensione",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Denaro pagato regolarmente a qualcuno dopo che è andato in pensione.",
                "examples": [
                    "Versa contributi per la sua pensione ogni mese."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👴",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "pensioni"
        }
    },
    {
        "id": "it_intermediate_work_015",
        "word": "investimento",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Denaro investito in qualcosa per ottenere un profitto in futuro.",
                "examples": [
                    "L'immobiliare è un investimento popolare."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💰",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "investimenti"
        }
    },
    {
        "id": "it_intermediate_work_016",
        "word": "tasso di interesse",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "La percentuale addebitata per il prestito di denaro o guadagnata sui risparmi.",
                "examples": [
                    "Il tasso di interesse sul mutuo è del tre percento."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📊",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "tassi di interesse"
        }
    },
    {
        "id": "it_intermediate_work_017",
        "word": "reddito",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Denaro ricevuto dal lavoro o da altre fonti.",
                "examples": [
                    "Il loro reddito familiare è confortevole."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💸",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "redditi"
        }
    },
    {
        "id": "it_intermediate_work_018",
        "word": "assicurazione",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Un accordo in cui si paga regolarmente per essere protetti contro perdite o danni.",
                "examples": [
                    "L'assicurazione sanitaria è costosa in alcuni paesi."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛡️",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "assicurazioni"
        }
    },
    {
        "id": "it_intermediate_work_019",
        "word": "tassa",
        "lang": "it",
        "level": "intermediate",
        "theme": "work",
        "form": "noun",
        "definitions": [
            {
                "text": "Denaro pagato al governo in base al reddito o agli acquisti.",
                "examples": [
                    "Paga molte tasse sul reddito."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏦",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "tasse",
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_health_medicine_012",
        "word": "benessere",
        "lang": "it",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Una sensazione generale di essere a proprio agio, in salute e felici.",
                "examples": [
                    "L'esercizio fisico è importante per il benessere mentale."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧘",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "benesseri"
        }
    },
    {
        "id": "it_intermediate_health_medicine_013",
        "word": "salute mentale",
        "lang": "it",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Lo stato psicologico ed emotivo di una persona.",
                "examples": [
                    "Le aziende stanno prendendo più seriamente la salute mentale."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧠",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "it_intermediate_health_medicine_014",
        "word": "burnout",
        "lang": "it",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Uno stato di esaurimento causato da troppo stress per lungo tempo.",
                "examples": [
                    "Ha sofferto di burnout dopo aver lavorato senza sosta."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔥",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": null,
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_health_medicine_015",
        "word": "prevention",
        "lang": "it",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Azione intrapresa per impedire che accada qualcosa di brutto.",
                "examples": [
                    "La prevenzione è meglio della cura."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛡️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "prevenzioni"
        }
    },
    {
        "id": "it_intermediate_health_medicine_016",
        "word": "sintomo",
        "lang": "it",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Segni che suggeriscono che una persona ha una particolare malattia.",
                "examples": [
                    "I sintomi sono iniziati la settimana scorsa."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤒",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "sintomi"
        }
    },
    {
        "id": "it_intermediate_health_medicine_017",
        "word": "terapia",
        "lang": "it",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Trattamento per problemi mentali o fisici, spesso attraverso il colloquio.",
                "examples": [
                    "Va in terapia una volta alla settimana."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🛋️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "terapie"
        }
    },
    {
        "id": "it_intermediate_people_001",
        "word": "fiducia",
        "lang": "it",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Una ferma convinzione nell'onestà e nell'affidabilità di qualcuno.",
                "examples": [
                    "La fiducia è alla base di una buona relazione."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🤝",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "fiducie"
        }
    },
    {
        "id": "it_intermediate_people_002",
        "word": "conflitto",
        "lang": "it",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Un serio disaccordo o discussione.",
                "examples": [
                    "Hanno avuto un conflitto per i soldi."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚔️",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "conflitti"
        }
    },
    {
        "id": "it_intermediate_people_003",
        "word": "responsabilità",
        "lang": "it",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Il dovere di prendersi cura di qualcuno o qualcosa.",
                "examples": [
                    "I genitori hanno una responsabilità verso i figli."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "responsabilità"
        }
    },
    {
        "id": "it_intermediate_people_004",
        "word": "aspettativa",
        "lang": "it",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Una convinzione su ciò che accadrà o dovrebbe accadere.",
                "examples": [
                    "Ha alte aspettative nei confronti del suo partner."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⏳",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "aspettative"
        }
    },
    {
        "id": "it_intermediate_people_005",
        "word": "confine",
        "lang": "it",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "Un limite a ciò che si è disposti ad accettare in una relazione.",
                "examples": [
                    "È sano stabilire confini chiari."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🚧",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "confini",
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_people_006",
        "word": "divorzio",
        "lang": "it",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [
            {
                "text": "La fine legale di un matrimonio.",
                "examples": [
                    "Il tasso di divorzio è aumentato negli ultimi decenni."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "💔",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "divorzi"
        }
    },
    {
        "id": "it_intermediate_social_065",
        "word": "uguaglianza",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Lo stato di essere uguali in diritti e opportunità.",
                "examples": [
                    "Lottano per l'uguaglianza di genere al lavoro."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "uguaglianze",
            "opposite": "disuguaglianza"
        }
    },
    {
        "id": "it_intermediate_social_066",
        "word": "libertà",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Il diritto di agire e pensare senza restrizioni.",
                "examples": [
                    "La libertà di parola è molto importante."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗽",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "libertà"
        }
    },
    {
        "id": "it_intermediate_social_067",
        "word": "disuguaglianza",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Una situazione ingiusta in cui alcune persone hanno più di altre.",
                "examples": [
                    "La disuguaglianza di reddito sta crescendo in molti paesi."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "disuguaglianze",
            "opposite": "uguaglianza"
        }
    },
    {
        "id": "it_intermediate_social_068",
        "word": "volontario",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Offrirsi di fare qualcosa senza essere pagati.",
                "examples": [
                    "Fa il volontario alla banca alimentare locale."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🙋",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "volontari"
        }
    },
    {
        "id": "it_intermediate_social_069",
        "word": "comunità",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Un gruppo di persone che condividono un luogo, un'identità o un interesse comune.",
                "examples": [
                    "È molto attivo nella sua comunità locale."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏘️",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "comunità"
        }
    },
    {
        "id": "it_intermediate_social_070",
        "word": "generazione",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Tutte le persone di età simile in una società.",
                "examples": [
                    "Ogni generazione affronta sfide diverse."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👥",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "generazioni"
        }
    },
    {
        "id": "it_intermediate_environment_008",
        "word": "cambiamento climatico",
        "lang": "it",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Cambiamenti a lungo termine delle temperature globali e dei modelli meteorologici.",
                "examples": [
                    "Il cambiamento climatico è la sfida più grande del nostro tempo."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🌍",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": null
        }
    },
    {
        "id": "it_intermediate_environment_009",
        "word": "energia rinnovabile",
        "lang": "it",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Energia da fonti naturali che non si esauriscono, come il vento o il sole.",
                "examples": [
                    "L'azienda è passata all'energia rinnovabile."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "☀️",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "energie rinnovabili"
        }
    },
    {
        "id": "it_intermediate_environment_010",
        "word": "impronta di carbonio",
        "lang": "it",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "La quantità totale di gas serra prodotti dalle attività di una persona.",
                "examples": [
                    "Volare aumenta la tua impronta di carbonio."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👣",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "impronte di carbonio"
        }
    },
    {
        "id": "it_intermediate_environment_011",
        "word": "rifiuti",
        "lang": "it",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Materiale che non è più necessario e viene buttato via.",
                "examples": [
                    "Dobbiamo ridurre i rifiuti alimentari."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗑️",
        "_legacy": {
            "article": "i",
            "classification": "regular",
            "plural": "rifiuti",
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_language_007",
        "word": "tuttavia",
        "lang": "it",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Usato per introdurre un contrasto o un'idea opposta.",
                "examples": [
                    "Mi piace la città. Tuttavia, è molto costosa."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔄",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_language_008",
        "word": "sebbene",
        "lang": "it",
        "level": "intermediate",
        "theme": "language",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Nonostante il fatto che; anche se.",
                "examples": [
                    "Sebbene sia stanca, va in palestra."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🔗",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_language_009",
        "word": "d'altra parte",
        "lang": "it",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Usato per introdurre un punto di contrasto.",
                "examples": [
                    "La vita in città è eccitante. D'altra parte, è stressante."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "⚖️",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_social_071",
        "word": "secondo me",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "adverb",
        "definitions": [
            {
                "text": "Usato per introdurre la tua opinione personale.",
                "examples": [
                    "Secondo me, il lavoro a distanza è più produttivo."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🗣️",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_language_010",
        "word": "di conseguenza",
        "lang": "it",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "A causa di questo; conseguentemente.",
                "examples": [
                    "Ha lavorato sodo. Di conseguenza, ha ottenuto una promozione."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "➡️",
        "_legacy": {
            "subtext": ""
        }
    },
    {
        "id": "it_intermediate_food_drink_001",
        "word": "pizza",
        "lang": "it",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Un pane piatto condito con pomodoro e mozzarella.",
                "examples": [
                    "Mi piace la pizza margherita."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🍕",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "pizze"
        }
    },
    {
        "id": "it_intermediate_food_drink_002",
        "word": "tiramisù",
        "lang": "it",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Un dolce al cucchiaio con savoiardi, caffè e mascarpone.",
                "examples": [
                    "Il tiramisù è il mio dolce preferito."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🍰",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "tiramisù"
        }
    },
    {
        "id": "it_intermediate_food_drink_003",
        "word": "aranciata",
        "lang": "it",
        "level": "intermediate",
        "theme": "food_drink",
        "form": "noun",
        "definitions": [
            {
                "text": "Una bevanda analcolica frizzante all'arancia.",
                "examples": [
                    "Bevo un'aranciata fresca."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🥤",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "aranciate"
        }
    },
    {
        "id": "it_intermediate_travel_004",
        "word": "biblioteca",
        "lang": "it",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Un luogo con molti libri da leggere o prendere in prestito.",
                "examples": [
                    "Studio nella biblioteca dell'università."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "📚",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "biblioteche"
        }
    },
    {
        "id": "it_intermediate_travel_005",
        "word": "museo",
        "lang": "it",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "Un edificio dove si possono guardare oggetti importanti del passato.",
                "examples": [
                    "Abbiamo visitato un museo d'arte."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🏛️",
        "_legacy": {
            "article": "il",
            "classification": "regular",
            "plural": "musei"
        }
    },
    {
        "id": "it_intermediate_travel_006",
        "word": "aeroporto",
        "lang": "it",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "Un luogo dove gli aerei atterrano e decollano.",
                "examples": [
                    "Siamo arrivati all'aeroporto."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "✈️",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "aeroporti"
        }
    },
    {
        "id": "it_intermediate_home_living_001",
        "word": "armadio",
        "lang": "it",
        "level": "intermediate",
        "theme": "furniture",
        "form": "noun",
        "definitions": [
            {
                "text": "Un mobile per riporre i vestiti.",
                "examples": [
                    "I miei vestiti sono nell'armadio."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "👗",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "armadi"
        }
    },
    {
        "id": "it_intermediate_environment_nature_001",
        "word": "elefante",
        "lang": "it",
        "level": "intermediate",
        "theme": "animals",
        "form": "noun",
        "definitions": [
            {
                "text": "Un animale molto grande e grigio con una proboscide.",
                "examples": [
                    "L'elefante vive in Africa."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🐘",
        "_legacy": {
            "article": "l'",
            "classification": "regular",
            "plural": "elefanti"
        }
    },
    {
        "id": "it_intermediate_environment_nature_002",
        "word": "scimmia",
        "lang": "it",
        "level": "intermediate",
        "theme": "animals",
        "form": "noun",
        "definitions": [
            {
                "text": "Un animale che si arrampica sugli alberi e somiglia all'uomo.",
                "examples": [
                    "La scimmia mangia una banana."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🐒",
        "_legacy": {
            "article": "la",
            "classification": "regular",
            "plural": "scimmie"
        }
    }
];
})();
