(function() {
    const speakingData = {
    "it": {
        "opinionArena": [
            {
                "text": "Ingegneria genetica: progresso o pericolo?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
            },
            {
                "text": "Il reddito di base universale è una soluzione all'automazione?",
                "level": "advanced",
                "theme": "power_institutions_C1"
            }
        ],
        "criticsCorner": [],
        "debates": [
            {
                "topic": "Gerarchie organizzative piatte vs strutture di gestione verticale — cosa serve meglio agli adulti che lavorano al loro interno?",
                "sideA": "Gerarchia piatta",
                "sideB": "Struttura verticale",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il culto della produttività vs la difesa dell'ozio — cosa riflette meglio ciò di cui gli esseri umani hanno realmente bisogno dal lavoro?",
                "sideA": "Produttività",
                "sideB": "Ozio",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La leadership come abilità apprendibile vs la leadership come qualità innata — quale resoconto è più difendibile empiricamente?",
                "sideA": "Abilità acquisita",
                "sideB": "Qualità innata",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Hustle culture vs slow living — chi sta vincendo e chi dovrebbe vincere?",
                "sideA": "Hustle culture",
                "sideB": "Slow living",
                "level": "advanced",
                "theme": "routine_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Responsabilità sociale d'impresa come impegno genuino vs come gestione della reputazione — quale inquadramento è più onesto?",
                "sideA": "Impegno genuino",
                "sideB": "Gestione reputazione",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'identità adulta come fissa vs perennemente in costruzione — quale resoconto riflette meglio l'esperienza vissuta?",
                "sideA": "Identità fissa",
                "sideB": "In costruzione",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'addomesticamento del femminismo da parte della cultura del consumo vs il femminismo che rimodella genuinamente la vita adulta — cosa è più vero?",
                "sideA": "Femm. di consumo",
                "sideB": "Rimodellamento reale",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Crisi di mezza età come patologia vs crisi di mezza età come legittima rivalutazione — quale inquadramento è più utile?",
                "sideA": "Patologia",
                "sideB": "Rivalutazione",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La pressione per essere straordinari vs la dignità di una vita ordinaria — quale è l'ideale più umano da sostenere?",
                "sideA": "Straordinario",
                "sideB": "Dignità ordinaria",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'obbligo di prendersi cura dei genitori anziani vs la responsabilità dello Stato — su chi dovrebbe ricadere l'onere?",
                "sideA": "Obbligo familiare",
                "sideB": "Resp. dello Stato",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Onestà radicale nelle relazioni vs silenzio strategico — quale è l'approccio più etico all'intimità?",
                "sideA": "Onestà radicale",
                "sideB": "Silenzio strategico",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Scegliere la propria cerchia sociale deliberatamente vs lasciare che le relazioni si formino organicamente — cosa produce amicizie adulte più autentiche?",
                "sideA": "Scelta deliberata",
                "sideB": "Formazione organica",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La famiglia nucleare come unità sociale ottimale vs come disposizione storicamente contingente — quale visione è più difendibile?",
                "sideA": "Unità ottimale",
                "sideB": "Arrang. storico",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Governance tecnocratica vs populismo democratico — cosa rappresenta il maggior rischio a lungo termine per i cittadini adulti?",
                "sideA": "Tecnocrazia",
                "sideB": "Populismo",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Giustizia intergenerazionale vs benessere attuale — cosa dovrebbe avere la priorità nelle politiche pubbliche?",
                "sideA": "Giustizia intergen.",
                "sideB": "Benessere attuale",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'obbligo di voto vs il diritto di astenersi — quale è la posizione civica più difendibile?",
                "sideA": "Obbligo di voto",
                "sideB": "Diritto astensione",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Il patriottismo come virtù civica vs il patriottismo come fallimento cognitivo — quale resoconto è più persuasivo?",
                "sideA": "Virtù civica",
                "sideB": "Fallimento cognitivo",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Assolutismo della libertà di parola vs parola regolamentata — cosa produce risultati migliori per le società democratiche adulte?",
                "sideA": "Assolutismo",
                "sideB": "Parola regolata",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Una carriera significativa vs un lavoro che finanzia una vita privata significativa — quale è la più onesta ambizione adulta?",
                "sideA": "Carriera signif.",
                "sideB": "Finanziare vita priv.",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Religione vs filosofia secolare — cosa affronta più efficacemente i bisogni esistenziali degli adulti moderni?",
                "sideA": "Religione",
                "sideB": "Filosofia secolare",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La vita esaminata vs la vita assorbita — quale vale di più la pena di essere vissuta e chi può deciderlo?",
                "sideA": "Vita esaminata",
                "sideB": "Vita assorbita",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eredità (legacy) vs presenza — per cosa è più coerente lottare per un adulto?",
                "sideA": "Eredità",
                "sideB": "Presenza",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'adulto che ha «finalmente capito» vs l'adulto che ha accettato che non capirà mai — chi è più consapevole di sé?",
                "sideA": "Ha capito",
                "sideB": "Accettata ignoranza",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dire tutto al proprio terapeuta vs dire tutto al proprio parrucchiere — quale relazione professionale è più efficace terapeuticamente?",
                "sideA": "Terapeuta",
                "sideB": "Parrucchiere",
                "level": "advanced",
                "theme": "psychological_concepts_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'ansia della domenica di un adulto con un'agenda piena vs l'ansia della domenica di un adulto con un'agenda vuota — cosa è più esistenzialmente preoccupante?",
                "sideA": "Agenda piena",
                "sideB": "Agenda vuota",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eccessiva riflessione su ogni decisione importante della vita vs prenderle impulsivamente — quale strategia ha il miglior curriculum empirico?",
                "sideA": "Riflessione",
                "sideB": "Impulsività",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Adulti che leggono libri di auto-aiuto vs adulti che si rifiutano di farlo — quale gruppo è più difficile da frequentare a una cena?",
                "sideA": "Lettori auto-aiuto",
                "sideB": "Si rifiutano",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Creatività dell'IA vs arte umana — le macchine possono davvero creare arte?",
                "sideA": "Creatività IA",
                "sideB": "Arte umana",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Esplorazione spaziale vs esplorazione degli abissi — dove dovremmo concentrare le nostre risorse?",
                "sideA": "Spazio",
                "sideB": "Abissi",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Privacy digitale vs sicurezza nazionale — la sorveglianza totale è mai giustificata?",
                "sideA": "Privacy",
                "sideB": "Sicurezza",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Alimenti geneticamente modificati vs agricoltura biologica — come dovremmo nutrire il mondo?",
                "sideA": "OGM",
                "sideB": "Biologico",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Reddito di base universale vs programmi di garanzia del lavoro — qual è la migliore rete di sicurezza sociale?",
                "sideA": "Reddito universale",
                "sideB": "Garanzia lavoro",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Il ruolo dell'arte nella società moderna",
                "level": "advanced",
                "theme": "interests_hobbies_A2"
            },
            {
                "topic": "Intelligenza Artificiale: Strumento o minaccia ?",
                "level": "advanced",
                "theme": "science_tech_society_C1"
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
