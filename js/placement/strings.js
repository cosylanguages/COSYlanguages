/**
 * COSYlanguages - Placement Assessment UI Strings
 *
 * The quiz renders its chrome from JavaScript, and it must be readable before
 * the async interface dictionaries resolve, so its strings live here rather than
 * in data/ui/<lang>.json. Keys are flat and dot-namespaced; every table carries
 * every key, and anything missing falls back to English.
 *
 * `{name}` placeholders are filled by t(key, { name: value }).
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COSYPlacementStrings = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const en = {
    'page.docTitle': "Placement Assessment — COSYlanguages",
    'page.badge': "📝 CEFR Adaptive Assessment",
    'page.title': "COSYlanguages Placement Assessment 🌿",
    'page.subtitle': "A practical, rigorous, adaptive system evaluating <strong>Grammar</strong>, <strong>Vocabulary</strong>, <strong>Reading Comprehension</strong>, <strong>Writing Production</strong>, and <strong>Speaking Interaction</strong> independently across CEFR bands (A0/Pre-A1 to C2).",

    'resume.title': "🔄 Unfinished Assessment Found",
    'resume.text': "You have an unfinished assessment in progress. Would you like to resume where you left off?",
    'resume.resume': "Resume Test",
    'resume.startNew': "Start New",
    'bank.loading': "Loading questions…",
    'bank.error': "The question bank could not load. Check your connection and try again.",

    'ob.step1': "1. Select Target Language 🌍",
    'ob.step2': "2. What is your primary learning purpose? 🎯",
    'ob.step3': "3. Choose Assessment Mode ⏱️",
    'ob.purpose.general.title': "🌿 General Fluency",
    'ob.purpose.general.desc': "Overall language balance across reading, writing, listening, and speaking.",
    'ob.purpose.spoken.title': "🗣️ Conversational & Spoken",
    'ob.purpose.spoken.desc': "Focused heavily on speaking confidence, retrieval speed, and active dialogue.",
    'ob.purpose.exam.title': "📝 Exam & Academic",
    'ob.purpose.exam.desc': "Rigorous grammar precision, reading analysis, and formal structured writing.",
    'ob.mode.short.title': "⚡ Express Screening (~5 mins)",
    'ob.mode.short.desc': "Fast adaptive check to quickly estimate your starting CEFR band.",
    'ob.mode.full.title': "📊 Full 5-Skill Diagnostic (~15 mins)",
    'ob.mode.full.desc': "Comprehensive evaluation of Grammar, Vocab, Reading, Writing & Speaking.",
    'ob.start': "Start Placement Assessment 🚀",

    'skill.grammar': "Grammar",
    'skill.vocabulary': "Vocabulary",
    'skill.reading': "Reading",
    'skill.writing': "Writing",
    'skill.speaking': "Speaking",

    'lang.en': "English",
    'lang.fr': "Français",
    'lang.it': "Italiano",
    'lang.ru': "Русский",
    'lang.el': "Ελληνικά",

    'test.skip': "Skip Item ⏩",
    'test.target': "Target Language: {lang}",

    'writing.title': "✍️ Writing Production Task ({band})",
    'writing.length': "Target Length: {min} – {max} words.",
    'writing.placeholder': "Type your response here in {lang}...",
    'writing.words': "Words: {n}",
    'writing.submit': "Submit Writing ✍️",

    'speaking.title': "🗣️ Speaking & Interaction Checkpoint",
    'speaking.timing': "Preparation: {prep}s | Recording Limit: {rec}s",
    'speaking.notice': "ℹ️ Audio recording is processed locally for self-assessment and human teacher review. COSYlanguages does not fabricate speech analysis or automated AI ratings.",
    'speaking.ratingLabel': "How would you rate the answer you just gave?",
    'speaking.ratingHelp': "This is self-assessment: the browser cannot analyse your speech, and we will not invent a rating. Your recording is kept for teacher review.",
    'speaking.submit': "Submit Speaking Checkpoint 🗣️",

    'rec.ready': "⚪ Ready to Record",
    'rec.recording': "🔴 Recording...",
    'rec.recorded': "🟢 Recorded",
    'rec.unavailable': "⚠️ Recording Unavailable",
    'rec.start': "🎤 Start Recording",
    'rec.stop': "⏹️ Stop Recording",
    'rec.delete': "🗑️ Delete & Re-record",
    'rec.unsupportedWhy': "Audio recording is not supported in this browser environment. You can use the self-assessment fallback below.",
    'rec.deniedWhy': "Microphone permission was denied or not accessible. Please check browser permissions or use the self-assessment fallback below.",
    'rec.fallbackLabel': "Self-Assessment Fluency Rating for this prompt:",
    'rec.band.a1': "A1 - Basic short phrases with hesitations",
    'rec.band.a2': "A2 - Simple connected sentences on everyday topics",
    'rec.band.b1': "B1 - Continuous speech with occasional pauses",
    'rec.band.b2': "B2 - Smooth, natural tempo with detailed arguments",
    'rec.band.c1': "C1 - Fluent, spontaneous, near-effortless delivery",
    'rec.band.c2': "C2 - Masterful, highly precise articulation",
    'rec.notesPlaceholder': "Optional: Type notes or transcript of what you would say...",

    'results.print': "🖨️ Print / Save PDF Report",
    'results.home': "Go to Homepage 🏡",
    'results.retake': "Retake Assessment 🔄",
    'results.complete': "Assessment Complete!",

    'report.title': "COSYlanguages Assessment Report 🌿",
    'report.meta': "Date: {date} | Language: {lang} | Purpose: {purpose}",
    'report.overall': "Overall Recommended Placement",
    'report.overallNote': "Targeted CEFR placement calculated from 5 independent skill threads.",
    'report.skillsHeading': "📊 Individual Skill Breakdown",
    'report.confidence': "Confidence: {value}",
    'report.confidence.high': "High",
    'report.confidence.medium': "Medium",
    'report.confidence.low': "Low",
    'report.confidence.provisional': "Provisional",
    'report.evidence': "Evidence: {text} · {n} item/task",
    'report.noEvidence': "No evidence collected",
    'report.inconclusive': "{correct} / {count} (inconclusive — at least 3 items needed)",
    'report.accuracy': "{correct} / {count} ({pct}%)",
    'report.missingProductive': "Missing productive evidence",
    'report.skipped': "Task skipped by user",
    'report.rubric': "Rubric Assessed ({band})",
    'report.insufficient': "Insufficient Evidence",
    'report.gapTitle': "⚠️ Active-Passive Speaking Gap Detected",
    'report.gapText': "Your receptive understanding is assessed at <strong>{receptive}</strong>, while your productive confidence is at <strong>{productive}</strong>. To bridge this gap effectively and build spontaneous confidence without anxiety, we recommend starting at <strong>{level}</strong>.",
    'report.balancedTitle': "✅ Balanced Communicator Profile",
    'report.balancedText': "Your active production capability aligns smoothly with your receptive comprehension. You are ready to excel directly at level <strong>{level}</strong>.",
    'report.strengthsHeading': "🎯 Strengths & Observed Priority Areas",
    'report.strengthLabel': "Strength:",
    'report.priorityLabel': "Priority Area:",
    'report.pathHeading': "🚀 Recommended Learning Path & Resources",
    'report.disclaimer': "Provisional diagnostic estimate based on observed communicative responses. Not an official certified language credential.",

    'purposeLabel.general': "General fluency",
    'purposeLabel.spoken': "Conversational",
    'purposeLabel.exam': "Exam & academic",

    'diag.strongest': "Strongest performance observed in {skill} ({band}).",
    'diag.weakest': "Primary priority area identified in {skill} ({band}).",
    'diag.gap': "Active-Passive Gap: Receptive comprehension significantly exceeds productive retrieval confidence under time pressure.",
    'diag.balanced': "Balanced Communicator Profile: Receptive knowledge aligns well with productive speaking and writing capability.",

    'rec.course.title': "COSYlanguages {lang} {level} Course Module",
    'rec.course.desc': "Enrol in the core COSYlanguages {level} curriculum tailored to your assessed CEFR level.",
    'rec.fluency.title': "Active Fluency & Cognition Accelerator",
    'rec.fluency.desc': "Targeted drills to bypass internal translation blocks and increase speaking retrieval speed.",
    'rec.club.title': "Speaking Club & Conversation Practice",
    'rec.club.desc': "Join cozy speaking clubs to practice real-world interaction in a supportive environment."
  };

  const fr = {
    'page.docTitle': "Test de positionnement — COSYlanguages",
    'page.badge': "📝 Évaluation adaptative CECRL",
    'page.title': "Test de positionnement COSYlanguages 🌿",
    'page.subtitle': "Un système pratique, rigoureux et adaptatif qui évalue séparément la <strong>grammaire</strong>, le <strong>vocabulaire</strong>, la <strong>compréhension écrite</strong>, la <strong>production écrite</strong> et l'<strong>interaction orale</strong> à travers les niveaux du CECRL (A0/pré-A1 à C2).",

    'resume.title': "🔄 Évaluation inachevée détectée",
    'resume.text': "Vous avez une évaluation en cours. Voulez-vous reprendre là où vous vous êtes arrêté ?",
    'resume.resume': "Reprendre le test",
    'resume.startNew': "Recommencer",
    'bank.loading': "Chargement des questions…",
    'bank.error': "La banque de questions n'a pas pu se charger. Vérifiez votre connexion et réessayez.",

    'ob.step1': "1. Choisissez la langue cible 🌍",
    'ob.step2': "2. Quel est votre objectif principal ? 🎯",
    'ob.step3': "3. Choisissez le mode d'évaluation ⏱️",
    'ob.purpose.general.title': "🌿 Aisance générale",
    'ob.purpose.general.desc': "Équilibre global entre lecture, écriture, compréhension orale et expression orale.",
    'ob.purpose.spoken.title': "🗣️ Conversation & oral",
    'ob.purpose.spoken.desc': "Centré sur la confiance à l'oral, la rapidité de récupération des mots et le dialogue actif.",
    'ob.purpose.exam.title': "📝 Examens & académique",
    'ob.purpose.exam.desc': "Précision grammaticale rigoureuse, analyse de textes et écriture formelle structurée.",
    'ob.mode.short.title': "⚡ Dépistage express (~5 min)",
    'ob.mode.short.desc': "Contrôle adaptatif rapide pour estimer votre niveau CECRL de départ.",
    'ob.mode.full.title': "📊 Diagnostic complet 5 compétences (~15 min)",
    'ob.mode.full.desc': "Évaluation complète : grammaire, vocabulaire, lecture, écriture et oral.",
    'ob.start': "Démarrer le test de positionnement 🚀",

    'skill.grammar': "Grammaire",
    'skill.vocabulary': "Vocabulaire",
    'skill.reading': "Lecture",
    'skill.writing': "Écriture",
    'skill.speaking': "Oral",

    'lang.en': "English",
    'lang.fr': "Français",
    'lang.it': "Italiano",
    'lang.ru': "Русский",
    'lang.el': "Ελληνικά",

    'test.skip': "Passer la question ⏩",
    'test.target': "Langue cible : {lang}",

    'writing.title': "✍️ Tâche de production écrite ({band})",
    'writing.length': "Longueur cible : {min} – {max} mots.",
    'writing.placeholder': "Écrivez votre réponse ici en {lang}...",
    'writing.words': "Mots : {n}",
    'writing.submit': "Valider l'écrit ✍️",

    'speaking.title': "🗣️ Étape d'expression orale",
    'speaking.timing': "Préparation : {prep} s | Limite d'enregistrement : {rec} s",
    'speaking.notice': "ℹ️ L'enregistrement audio est traité localement pour l'auto-évaluation et la relecture par un enseignant. COSYlanguages ne produit ni analyse vocale automatique ni note d'IA.",
    'speaking.ratingLabel': "Comment évaluez-vous la réponse que vous venez de donner ?",
    'speaking.ratingHelp': "Il s'agit d'une auto-évaluation : le navigateur ne peut pas analyser votre parole et nous n'inventerons pas de note. Votre enregistrement est conservé pour la relecture de l'enseignant.",
    'speaking.submit': "Valider l'étape orale 🗣️",

    'rec.ready': "⚪ Prêt à enregistrer",
    'rec.recording': "🔴 Enregistrement...",
    'rec.recorded': "🟢 Enregistré",
    'rec.unavailable': "⚠️ Enregistrement indisponible",
    'rec.start': "🎤 Démarrer l'enregistrement",
    'rec.stop': "⏹️ Arrêter",
    'rec.delete': "🗑️ Effacer et recommencer",
    'rec.unsupportedWhy': "L'enregistrement audio n'est pas pris en charge dans ce navigateur. Utilisez l'auto-évaluation ci-dessous.",
    'rec.deniedWhy': "L'accès au microphone a été refusé ou est indisponible. Vérifiez les autorisations du navigateur ou utilisez l'auto-évaluation ci-dessous.",
    'rec.fallbackLabel': "Auto-évaluation de l'aisance pour cette consigne :",
    'rec.band.a1': "A1 - Phrases courtes simples, avec hésitations",
    'rec.band.a2': "A2 - Phrases simples et liées sur des sujets quotidiens",
    'rec.band.b1': "B1 - Discours continu avec quelques pauses",
    'rec.band.b2': "B2 - Débit fluide et naturel, arguments détaillés",
    'rec.band.c1': "C1 - Expression fluide, spontanée, presque sans effort",
    'rec.band.c2': "C2 - Maîtrise et précision remarquables",
    'rec.notesPlaceholder': "Facultatif : notes ou transcription de ce que vous diriez...",

    'results.print': "🖨️ Imprimer / enregistrer le rapport PDF",
    'results.home': "Retour à l'accueil 🏡",
    'results.retake': "Refaire l'évaluation 🔄",
    'results.complete': "Évaluation terminée !",

    'report.title': "Rapport d'évaluation COSYlanguages 🌿",
    'report.meta': "Date : {date} | Langue : {lang} | Objectif : {purpose}",
    'report.overall': "Positionnement global recommandé",
    'report.overallNote': "Positionnement CECRL calculé à partir de 5 compétences évaluées séparément.",
    'report.skillsHeading': "📊 Détail par compétence",
    'report.confidence': "Fiabilité : {value}",
    'report.confidence.high': "Élevée",
    'report.confidence.medium': "Moyenne",
    'report.confidence.low': "Faible",
    'report.confidence.provisional': "Provisoire",
    'report.evidence': "Preuves : {text} · {n} élément(s)",
    'report.noEvidence': "Aucune donnée recueillie",
    'report.inconclusive': "{correct} / {count} (non concluant — au moins 3 éléments requis)",
    'report.accuracy': "{correct} / {count} ({pct}%)",
    'report.missingProductive': "Preuves de production manquantes",
    'report.skipped': "Tâche passée par l'utilisateur",
    'report.rubric': "Évalué par grille ({band})",
    'report.insufficient': "Données insuffisantes",
    'report.gapTitle': "⚠️ Écart entre compréhension et expression orale",
    'report.gapText': "Votre compréhension est évaluée à <strong>{receptive}</strong>, alors que votre confiance en production est à <strong>{productive}</strong>. Pour combler cet écart sans stress et gagner en spontanéité, nous recommandons de commencer à <strong>{level}</strong>.",
    'report.balancedTitle': "✅ Profil équilibré",
    'report.balancedText': "Votre capacité de production correspond bien à votre compréhension. Vous êtes prêt à progresser directement au niveau <strong>{level}</strong>.",
    'report.strengthsHeading': "🎯 Points forts et priorités observées",
    'report.strengthLabel': "Point fort :",
    'report.priorityLabel': "Priorité :",
    'report.pathHeading': "🚀 Parcours et ressources recommandés",
    'report.disclaimer': "Estimation diagnostique provisoire fondée sur les réponses observées. Ne constitue pas un certificat de langue officiel.",

    'purposeLabel.general': "Aisance générale",
    'purposeLabel.spoken': "Conversation",
    'purposeLabel.exam': "Examens & académique",

    'diag.strongest': "Meilleure performance observée en {skill} ({band}).",
    'diag.weakest': "Priorité principale identifiée en {skill} ({band}).",
    'diag.gap': "Écart actif-passif : la compréhension dépasse nettement la confiance en production sous contrainte de temps.",
    'diag.balanced': "Profil équilibré : les connaissances en compréhension correspondent bien à la capacité de production écrite et orale.",

    'rec.course.title': "Module de cours COSYlanguages {lang} {level}",
    'rec.course.desc': "Inscrivez-vous au programme COSYlanguages {level} adapté à votre niveau CECRL.",
    'rec.fluency.title': "Accélérateur de fluidité et de cognition",
    'rec.fluency.desc': "Exercices ciblés pour court-circuiter la traduction mentale et accélérer la récupération à l'oral.",
    'rec.club.title': "Speaking club et pratique de conversation",
    'rec.club.desc': "Rejoignez nos speaking clubs pour pratiquer l'interaction réelle dans un cadre bienveillant."
  };

  const it = {
    'page.docTitle': "Test di posizionamento — COSYlanguages",
    'page.badge': "📝 Valutazione adattiva QCER",
    'page.title': "Valutazione di posizionamento COSYlanguages 🌿",
    'page.subtitle': "Un sistema pratico, rigoroso e adattivo che valuta separatamente <strong>grammatica</strong>, <strong>lessico</strong>, <strong>comprensione scritta</strong>, <strong>produzione scritta</strong> e <strong>interazione orale</strong> attraverso i livelli del QCER (A0/pre-A1 – C2).",

    'resume.title': "🔄 Valutazione non completata",
    'resume.text': "Hai una valutazione in corso. Vuoi riprendere da dove ti sei fermato?",
    'resume.resume': "Riprendi il test",
    'resume.startNew': "Ricomincia",
    'bank.loading': "Caricamento delle domande…",
    'bank.error': "Impossibile caricare la banca delle domande. Controlla la connessione e riprova.",

    'ob.step1': "1. Scegli la lingua di destinazione 🌍",
    'ob.step2': "2. Qual è il tuo obiettivo principale? 🎯",
    'ob.step3': "3. Scegli la modalità di valutazione ⏱️",
    'ob.purpose.general.title': "🌿 Fluenza generale",
    'ob.purpose.general.desc': "Equilibrio generale tra lettura, scrittura, ascolto e parlato.",
    'ob.purpose.spoken.title': "🗣️ Conversazione e parlato",
    'ob.purpose.spoken.desc': "Incentrato sulla sicurezza nel parlato, sulla rapidità di recupero delle parole e sul dialogo attivo.",
    'ob.purpose.exam.title': "📝 Esami e studio",
    'ob.purpose.exam.desc': "Precisione grammaticale rigorosa, analisi dei testi e scrittura formale strutturata.",
    'ob.mode.short.title': "⚡ Screening rapido (~5 min)",
    'ob.mode.short.desc': "Verifica adattiva rapida per stimare il tuo livello QCER iniziale.",
    'ob.mode.full.title': "📊 Diagnosi completa 5 abilità (~15 min)",
    'ob.mode.full.desc': "Valutazione completa di grammatica, lessico, lettura, scrittura e parlato.",
    'ob.start': "Inizia il test di posizionamento 🚀",

    'skill.grammar': "Grammatica",
    'skill.vocabulary': "Lessico",
    'skill.reading': "Lettura",
    'skill.writing': "Scrittura",
    'skill.speaking': "Parlato",

    'lang.en': "English",
    'lang.fr': "Français",
    'lang.it': "Italiano",
    'lang.ru': "Русский",
    'lang.el': "Ελληνικά",

    'test.skip': "Salta la domanda ⏩",
    'test.target': "Lingua di destinazione: {lang}",

    'writing.title': "✍️ Prova di produzione scritta ({band})",
    'writing.length': "Lunghezza richiesta: {min} – {max} parole.",
    'writing.placeholder': "Scrivi qui la tua risposta in {lang}...",
    'writing.words': "Parole: {n}",
    'writing.submit': "Invia lo scritto ✍️",

    'speaking.title': "🗣️ Prova di produzione orale",
    'speaking.timing': "Preparazione: {prep} s | Limite di registrazione: {rec} s",
    'speaking.notice': "ℹ️ La registrazione audio viene elaborata localmente per l'autovalutazione e la revisione di un insegnante. COSYlanguages non inventa analisi vocali automatiche né valutazioni IA.",
    'speaking.ratingLabel': "Come valuteresti la risposta appena data?",
    'speaking.ratingHelp': "È un'autovalutazione: il browser non può analizzare il parlato e non inventeremo un voto. La registrazione resta disponibile per l'insegnante.",
    'speaking.submit': "Invia la prova orale 🗣️",

    'rec.ready': "⚪ Pronto a registrare",
    'rec.recording': "🔴 Registrazione...",
    'rec.recorded': "🟢 Registrato",
    'rec.unavailable': "⚠️ Registrazione non disponibile",
    'rec.start': "🎤 Avvia la registrazione",
    'rec.stop': "⏹️ Ferma",
    'rec.delete': "🗑️ Elimina e registra di nuovo",
    'rec.unsupportedWhy': "La registrazione audio non è supportata in questo browser. Usa l'autovalutazione qui sotto.",
    'rec.deniedWhy': "L'accesso al microfono è stato negato o non è disponibile. Controlla i permessi del browser o usa l'autovalutazione qui sotto.",
    'rec.fallbackLabel': "Autovalutazione della fluenza per questa consegna:",
    'rec.band.a1': "A1 - Frasi brevi semplici, con esitazioni",
    'rec.band.a2': "A2 - Frasi semplici e collegate su temi quotidiani",
    'rec.band.b1': "B1 - Discorso continuo con pause occasionali",
    'rec.band.b2': "B2 - Ritmo fluido e naturale, argomentazioni dettagliate",
    'rec.band.c1': "C1 - Esposizione fluente, spontanea, quasi senza sforzo",
    'rec.band.c2': "C2 - Padronanza e precisione elevatissime",
    'rec.notesPlaceholder': "Facoltativo: note o trascrizione di ciò che diresti...",

    'results.print': "🖨️ Stampa / salva il rapporto PDF",
    'results.home': "Vai alla home 🏡",
    'results.retake': "Ripeti la valutazione 🔄",
    'results.complete': "Valutazione completata!",

    'report.title': "Rapporto di valutazione COSYlanguages 🌿",
    'report.meta': "Data: {date} | Lingua: {lang} | Obiettivo: {purpose}",
    'report.overall': "Posizionamento complessivo consigliato",
    'report.overallNote': "Posizionamento QCER calcolato su 5 abilità valutate separatamente.",
    'report.skillsHeading': "📊 Dettaglio per abilità",
    'report.confidence': "Affidabilità: {value}",
    'report.confidence.high': "Alta",
    'report.confidence.medium': "Media",
    'report.confidence.low': "Bassa",
    'report.confidence.provisional': "Provvisoria",
    'report.evidence': "Evidenze: {text} · {n} elemento/i",
    'report.noEvidence': "Nessun dato raccolto",
    'report.inconclusive': "{correct} / {count} (non conclusivo — servono almeno 3 elementi)",
    'report.accuracy': "{correct} / {count} ({pct}%)",
    'report.missingProductive': "Mancano evidenze di produzione",
    'report.skipped': "Prova saltata dall'utente",
    'report.rubric': "Valutato con rubrica ({band})",
    'report.insufficient': "Evidenze insufficienti",
    'report.gapTitle': "⚠️ Divario tra comprensione e produzione orale",
    'report.gapText': "La tua comprensione è valutata a <strong>{receptive}</strong>, mentre la sicurezza nella produzione è a <strong>{productive}</strong>. Per colmare il divario senza ansia e guadagnare spontaneità, consigliamo di iniziare da <strong>{level}</strong>.",
    'report.balancedTitle': "✅ Profilo equilibrato",
    'report.balancedText': "La tua capacità di produzione è in linea con la comprensione. Puoi progredire direttamente dal livello <strong>{level}</strong>.",
    'report.strengthsHeading': "🎯 Punti di forza e priorità osservate",
    'report.strengthLabel': "Punto di forza:",
    'report.priorityLabel': "Priorità:",
    'report.pathHeading': "🚀 Percorso e risorse consigliati",
    'report.disclaimer': "Stima diagnostica provvisoria basata sulle risposte osservate. Non è una certificazione linguistica ufficiale.",

    'purposeLabel.general': "Fluenza generale",
    'purposeLabel.spoken': "Conversazione",
    'purposeLabel.exam': "Esami e studio",

    'diag.strongest': "Prestazione migliore osservata in {skill} ({band}).",
    'diag.weakest': "Priorità principale individuata in {skill} ({band}).",
    'diag.gap': "Divario attivo-passivo: la comprensione supera nettamente la sicurezza produttiva sotto pressione.",
    'diag.balanced': "Profilo equilibrato: le conoscenze ricettive sono in linea con la capacità produttiva scritta e orale.",

    'rec.course.title': "Modulo di corso COSYlanguages {lang} {level}",
    'rec.course.desc': "Iscriviti al programma COSYlanguages {level} calibrato sul tuo livello QCER.",
    'rec.fluency.title': "Acceleratore di fluenza e cognizione",
    'rec.fluency.desc': "Esercizi mirati per aggirare la traduzione mentale e accelerare il recupero nel parlato.",
    'rec.club.title': "Speaking club e pratica di conversazione",
    'rec.club.desc': "Partecipa ai nostri speaking club per esercitare l'interazione reale in un ambiente accogliente."
  };

  const ru = {
    'page.docTitle': "Тест на определение уровня — COSYlanguages",
    'page.badge': "📝 Адаптивная оценка по CEFR",
    'page.title': "Тест на определение уровня COSYlanguages 🌿",
    'page.subtitle': "Практичная, строгая и адаптивная система, которая отдельно оценивает <strong>грамматику</strong>, <strong>лексику</strong>, <strong>понимание прочитанного</strong>, <strong>письменную речь</strong> и <strong>устное взаимодействие</strong> по уровням CEFR (A0/до-A1 — C2).",

    'resume.title': "🔄 Найдена незавершённая попытка",
    'resume.text': "У вас есть незавершённое тестирование. Продолжить с того места, где вы остановились?",
    'resume.resume': "Продолжить тест",
    'resume.startNew': "Начать заново",
    'bank.loading': "Загрузка вопросов…",
    'bank.error': "Не удалось загрузить банк вопросов. Проверьте соединение и попробуйте снова.",

    'ob.step1': "1. Выберите целевой язык 🌍",
    'ob.step2': "2. Какова ваша основная цель обучения? 🎯",
    'ob.step3': "3. Выберите режим тестирования ⏱️",
    'ob.purpose.general.title': "🌿 Общая беглость",
    'ob.purpose.general.desc': "Равномерное развитие чтения, письма, аудирования и говорения.",
    'ob.purpose.spoken.title': "🗣️ Разговорная речь",
    'ob.purpose.spoken.desc': "Акцент на уверенности в говорении, скорости доступа к словам и живом диалоге.",
    'ob.purpose.exam.title': "📝 Экзамены и учёба",
    'ob.purpose.exam.desc': "Строгая грамматическая точность, анализ текстов и формальное структурированное письмо.",
    'ob.mode.short.title': "⚡ Экспресс-проверка (~5 мин)",
    'ob.mode.short.desc': "Быстрая адаптивная проверка для оценки стартового уровня CEFR.",
    'ob.mode.full.title': "📊 Полная диагностика 5 навыков (~15 мин)",
    'ob.mode.full.desc': "Комплексная оценка грамматики, лексики, чтения, письма и говорения.",
    'ob.start': "Начать тестирование 🚀",

    'skill.grammar': "Грамматика",
    'skill.vocabulary': "Лексика",
    'skill.reading': "Чтение",
    'skill.writing': "Письмо",
    'skill.speaking': "Говорение",

    'lang.en': "English",
    'lang.fr': "Français",
    'lang.it': "Italiano",
    'lang.ru': "Русский",
    'lang.el': "Ελληνικά",

    'test.skip': "Пропустить задание ⏩",
    'test.target': "Целевой язык: {lang}",

    'writing.title': "✍️ Задание: письменная речь ({band})",
    'writing.length': "Требуемый объём: {min} – {max} слов.",
    'writing.placeholder': "Напишите ответ здесь на языке {lang}...",
    'writing.words': "Слов: {n}",
    'writing.submit': "Отправить работу ✍️",

    'speaking.title': "🗣️ Этап устной речи",
    'speaking.timing': "Подготовка: {prep} с | Лимит записи: {rec} с",
    'speaking.notice': "ℹ️ Аудиозапись обрабатывается локально для самооценки и проверки преподавателем. COSYlanguages не имитирует автоматический анализ речи или оценку ИИ.",
    'speaking.ratingLabel': "Как вы оцениваете свой ответ?",
    'speaking.ratingHelp': "Это самооценка: браузер не анализирует вашу речь, и мы не станем придумывать оценку. Запись сохраняется для проверки преподавателем.",
    'speaking.submit': "Отправить устный этап 🗣️",

    'rec.ready': "⚪ Готово к записи",
    'rec.recording': "🔴 Запись...",
    'rec.recorded': "🟢 Записано",
    'rec.unavailable': "⚠️ Запись недоступна",
    'rec.start': "🎤 Начать запись",
    'rec.stop': "⏹️ Остановить",
    'rec.delete': "🗑️ Удалить и записать снова",
    'rec.unsupportedWhy': "Запись аудио не поддерживается в этом браузере. Используйте самооценку ниже.",
    'rec.deniedWhy': "Доступ к микрофону запрещён или недоступен. Проверьте разрешения браузера или используйте самооценку ниже.",
    'rec.fallbackLabel': "Самооценка беглости для этого задания:",
    'rec.band.a1': "A1 - Короткие простые фразы с паузами",
    'rec.band.a2': "A2 - Простые связные фразы на бытовые темы",
    'rec.band.b1': "B1 - Связная речь с отдельными паузами",
    'rec.band.b2': "B2 - Ровный естественный темп, развёрнутая аргументация",
    'rec.band.c1': "C1 - Свободная, спонтанная речь почти без усилий",
    'rec.band.c2': "C2 - Мастерское, предельно точное изложение",
    'rec.notesPlaceholder': "Необязательно: заметки или расшифровка того, что вы сказали бы...",

    'results.print': "🖨️ Печать / сохранить отчёт в PDF",
    'results.home': "На главную 🏡",
    'results.retake': "Пройти заново 🔄",
    'results.complete': "Тестирование завершено!",

    'report.title': "Отчёт об оценке COSYlanguages 🌿",
    'report.meta': "Дата: {date} | Язык: {lang} | Цель: {purpose}",
    'report.overall': "Рекомендуемый общий уровень",
    'report.overallNote': "Уровень CEFR рассчитан по пяти независимо оценённым навыкам.",
    'report.skillsHeading': "📊 Подробно по навыкам",
    'report.confidence': "Надёжность: {value}",
    'report.confidence.high': "Высокая",
    'report.confidence.medium': "Средняя",
    'report.confidence.low': "Низкая",
    'report.confidence.provisional': "Предварительная",
    'report.evidence': "Данные: {text} · {n} задание(й)",
    'report.noEvidence': "Данных не собрано",
    'report.inconclusive': "{correct} / {count} (недостаточно данных — нужно минимум 3 задания)",
    'report.accuracy': "{correct} / {count} ({pct}%)",
    'report.missingProductive': "Нет данных о продуктивных навыках",
    'report.skipped': "Задание пропущено",
    'report.rubric': "Оценено по критериям ({band})",
    'report.insufficient': "Недостаточно данных",
    'report.gapTitle': "⚠️ Разрыв: понимание опережает говорение",
    'report.gapText': "Понимание оценено на <strong>{receptive}</strong>, а уверенность в порождении речи — на <strong>{productive}</strong>. Чтобы закрыть разрыв без стресса и выйти на спонтанную речь, рекомендуем начать с <strong>{level}</strong>.",
    'report.balancedTitle': "✅ Сбалансированный профиль",
    'report.balancedText': "Ваша способность говорить и писать соответствует пониманию. Можно сразу двигаться на уровне <strong>{level}</strong>.",
    'report.strengthsHeading': "🎯 Сильные стороны и приоритеты",
    'report.strengthLabel': "Сильная сторона:",
    'report.priorityLabel': "Приоритет:",
    'report.pathHeading': "🚀 Рекомендуемый путь и материалы",
    'report.disclaimer': "Предварительная диагностическая оценка по наблюдаемым ответам. Не является официальным языковым сертификатом.",

    'purposeLabel.general': "Общая беглость",
    'purposeLabel.spoken': "Разговорная речь",
    'purposeLabel.exam': "Экзамены и учёба",

    'diag.strongest': "Наилучший результат — {skill} ({band}).",
    'diag.weakest': "Главный приоритет — {skill} ({band}).",
    'diag.gap': "Разрыв «понимание — речь»: понимание заметно опережает уверенное порождение речи в условиях ограниченного времени.",
    'diag.balanced': "Сбалансированный профиль: понимание соответствует способности говорить и писать.",

    'rec.course.title': "Курс COSYlanguages {lang} {level}",
    'rec.course.desc': "Запишитесь на программу COSYlanguages {level}, подобранную под ваш уровень CEFR.",
    'rec.fluency.title': "Тренажёр активной беглости",
    'rec.fluency.desc': "Целевые упражнения, чтобы обойти внутренний перевод и ускорить доступ к словам в речи.",
    'rec.club.title': "Разговорный клуб и практика речи",
    'rec.club.desc': "Присоединяйтесь к разговорным клубам, чтобы практиковать живую речь в поддерживающей обстановке."
  };

  const el = {
    'page.docTitle': "Τεστ κατάταξης — COSYlanguages",
    'page.badge': "📝 Προσαρμοστική αξιολόγηση CEFR",
    'page.title': "Αξιολόγηση επιπέδου COSYlanguages 🌿",
    'page.subtitle': "Ένα πρακτικό, αυστηρό και προσαρμοστικό σύστημα που αξιολογεί ξεχωριστά τη <strong>γραμματική</strong>, το <strong>λεξιλόγιο</strong>, την <strong>κατανόηση γραπτού λόγου</strong>, την <strong>παραγωγή γραπτού λόγου</strong> και την <strong>προφορική επικοινωνία</strong> σε όλα τα επίπεδα CEFR (A0/προ-A1 έως C2).",

    'resume.title': "🔄 Βρέθηκε ημιτελής αξιολόγηση",
    'resume.text': "Έχετε μια αξιολόγηση σε εξέλιξη. Θέλετε να συνεχίσετε από εκεί που σταματήσατε;",
    'resume.resume': "Συνέχιση τεστ",
    'resume.startNew': "Νέα προσπάθεια",
    'bank.loading': "Φόρτωση ερωτήσεων…",
    'bank.error': "Δεν ήταν δυνατή η φόρτωση της τράπεζας ερωτήσεων. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.",

    'ob.step1': "1. Επιλέξτε γλώσσα-στόχο 🌍",
    'ob.step2': "2. Ποιος είναι ο κύριος στόχος σας; 🎯",
    'ob.step3': "3. Επιλέξτε τρόπο αξιολόγησης ⏱️",
    'ob.purpose.general.title': "🌿 Γενική ευχέρεια",
    'ob.purpose.general.desc': "Ισορροπία ανάμεσα σε ανάγνωση, γραφή, ακρόαση και ομιλία.",
    'ob.purpose.spoken.title': "🗣️ Συνομιλία & προφορικός λόγος",
    'ob.purpose.spoken.desc': "Έμφαση στην αυτοπεποίθηση στον προφορικό λόγο, στην ταχύτητα ανάκτησης λέξεων και στον ενεργό διάλογο.",
    'ob.purpose.exam.title': "📝 Εξετάσεις & ακαδημαϊκά",
    'ob.purpose.exam.desc': "Αυστηρή γραμματική ακρίβεια, ανάλυση κειμένων και δομημένος επίσημος γραπτός λόγος.",
    'ob.mode.short.title': "⚡ Γρήγορη εκτίμηση (~5 λεπτά)",
    'ob.mode.short.desc': "Γρήγορος προσαρμοστικός έλεγχος για εκτίμηση του αρχικού σας επιπέδου CEFR.",
    'ob.mode.full.title': "📊 Πλήρης διάγνωση 5 δεξιοτήτων (~15 λεπτά)",
    'ob.mode.full.desc': "Πλήρης αξιολόγηση γραμματικής, λεξιλογίου, ανάγνωσης, γραφής και ομιλίας.",
    'ob.start': "Έναρξη τεστ κατάταξης 🚀",

    'skill.grammar': "Γραμματική",
    'skill.vocabulary': "Λεξιλόγιο",
    'skill.reading': "Ανάγνωση",
    'skill.writing': "Γραφή",
    'skill.speaking': "Ομιλία",

    'lang.en': "English",
    'lang.fr': "Français",
    'lang.it': "Italiano",
    'lang.ru': "Русский",
    'lang.el': "Ελληνικά",

    'test.skip': "Παράλειψη ερώτησης ⏩",
    'test.target': "Γλώσσα-στόχος: {lang}",

    'writing.title': "✍️ Δοκιμασία παραγωγής γραπτού λόγου ({band})",
    'writing.length': "Ζητούμενο μήκος: {min} – {max} λέξεις.",
    'writing.placeholder': "Γράψτε την απάντησή σας εδώ στα {lang}...",
    'writing.words': "Λέξεις: {n}",
    'writing.submit': "Υποβολή γραπτού ✍️",

    'speaking.title': "🗣️ Στάδιο προφορικού λόγου",
    'speaking.timing': "Προετοιμασία: {prep} δευτ. | Όριο εγγραφής: {rec} δευτ.",
    'speaking.notice': "ℹ️ Η ηχητική εγγραφή υποβάλλεται τοπικά για αυτοαξιολόγηση και έλεγχο από καθηγητή. Το COSYlanguages δεν επινοεί αυτόματη ανάλυση ομιλίας ή βαθμολογία AI.",
    'speaking.ratingLabel': "Πώς θα αξιολογούσατε την απάντηση που μόλις δώσατε;",
    'speaking.ratingHelp': "Πρόκειται για αυτοαξιολόγηση: το πρόγραμμα περιήγησης δεν μπορεί να αναλύσει την ομιλία σας και δεν θα επινοήσουμε βαθμολογία. Η εγγραφή σας φυλάσσεται για έλεγχο από καθηγητή.",
    'speaking.submit': "Υποβολή προφορικού σταδίου 🗣️",

    'rec.ready': "⚪ Έτοιμο για εγγραφή",
    'rec.recording': "🔴 Εγγραφή...",
    'rec.recorded': "🟢 Καταγράφηκε",
    'rec.unavailable': "⚠️ Η εγγραφή δεν είναι διαθέσιμη",
    'rec.start': "🎤 Έναρξη εγγραφής",
    'rec.stop': "⏹️ Διακοπή",
    'rec.delete': "🗑️ Διαγραφή & νέα εγγραφή",
    'rec.unsupportedWhy': "Η ηχητική εγγραφή δεν υποστηρίζεται σε αυτό το πρόγραμμα περιήγησης. Χρησιμοποιήστε την αυτοαξιολόγηση παρακάτω.",
    'rec.deniedWhy': "Η πρόσβαση στο μικρόφωνο απορρίφθηκε ή δεν είναι διαθέσιμη. Ελέγξτε τις άδειες του προγράμματος περιήγησης ή χρησιμοποιήστε την αυτοαξιολόγηση παρακάτω.",
    'rec.fallbackLabel': "Αυτοαξιολόγηση ευχέρειας για αυτή την προτροπή:",
    'rec.band.a1': "A1 - Απλές σύντομες φράσεις με δισταγμούς",
    'rec.band.a2': "A2 - Απλές συνδεδεμένες προτάσεις για καθημερινά θέματα",
    'rec.band.b1': "B1 - Συνεχής ομιλία με περιστασιακές παύσεις",
    'rec.band.b2': "B2 - Ομαλός φυσικός ρυθμός με αναλυτικά επιχειρήματα",
    'rec.band.c1': "C1 - Ευφράδεια, αυθορμητισμός, σχεδόν χωρίς κόπο",
    'rec.band.c2': "C2 - Άριστη, εξαιρετικά ακριβής διατύπωση",
    'rec.notesPlaceholder': "Προαιρετικά: σημειώσεις ή μεταγραφή όσων θα λέγατε...",

    'results.print': "🖨️ Εκτύπωση / αποθήκευση αναφοράς PDF",
    'results.home': "Επιστροφή στην αρχική 🏡",
    'results.retake': "Επανάληψη αξιολόγησης 🔄",
    'results.complete': "Η αξιολόγηση ολοκληρώθηκε!",

    'report.title': "Αναφορά αξιολόγησης COSYlanguages 🌿",
    'report.meta': "Ημερομηνία: {date} | Γλώσσα: {lang} | Σκοπός: {purpose}",
    'report.overall': "Συνολική προτεινόμενη κατάταξη",
    'report.overallNote': "Κατάταξη CEFR που υπολογίστηκε από 5 ανεξάρτητες δεξιότητες.",
    'report.skillsHeading': "📊 Ανάλυση ανά δεξιότητα",
    'report.confidence': "Αξιοπιστία: {value}",
    'report.confidence.high': "Υψηλή",
    'report.confidence.medium': "Μέτρια",
    'report.confidence.low': "Χαμηλή",
    'report.confidence.provisional': "Προσωρινή",
    'report.evidence': "Δεδομένα: {text} · {n} στοιχείο/α",
    'report.noEvidence': "Δεν συλλέχθηκαν δεδομένα",
    'report.inconclusive': "{correct} / {count} (μη οριστικό — χρειάζονται τουλάχιστον 3 στοιχεία)",
    'report.accuracy': "{correct} / {count} ({pct}%)",
    'report.missingProductive': "Λείπουν δεδομένα παραγωγής",
    'report.skipped': "Η δοκιμασία παραλείφθηκε",
    'report.rubric': "Αξιολογήθηκε με κριτήρια ({band})",
    'report.insufficient': "Ανεπαρκή δεδομένα",
    'report.gapTitle': "⚠️ Χάσμα κατανόησης και παραγωγής",
    'report.gapText': "Η κατανόησή σας αξιολογείται στο <strong>{receptive}</strong>, ενώ η αυτοπεποίθηση στην παραγωγή στο <strong>{productive}</strong>. Για να καλύψετε το χάσμα χωρίς άγχος και να κερδίσετε αυθορμητισμό, προτείνουμε να ξεκινήσετε από <strong>{level}</strong>.",
    'report.balancedTitle': "✅ Ισορροπημένο προφίλ",
    'report.balancedText': "Η ικανότητα παραγωγής σας αντιστοιχεί στην κατανόηση. Μπορείτε να προχωρήσετε απευθείας στο επίπεδο <strong>{level}</strong>.",
    'report.strengthsHeading': "🎯 Δυνατά σημεία & προτεραιότητες",
    'report.strengthLabel': "Δυνατό σημείο:",
    'report.priorityLabel': "Προτεραιότητα:",
    'report.pathHeading': "🚀 Προτεινόμενη πορεία & πόροι",
    'report.disclaimer': "Προσωρινή διαγνωστική εκτίμηση με βάση τις απαντήσεις σας. Δεν αποτελεί επίσημο πιστοποιητικό γλώσσας.",

    'purposeLabel.general': "Γενική ευχέρεια",
    'purposeLabel.spoken': "Συνομιλία",
    'purposeLabel.exam': "Εξετάσεις & ακαδημαϊκά",

    'diag.strongest': "Καλύτερη επίδοση στη {skill} ({band}).",
    'diag.weakest': "Κύρια προτεραιότητα στη {skill} ({band}).",
    'diag.gap': "Χάσμα κατανόησης–παραγωγής: η κατανόηση υπερβαίνει σαφώς την αυτοπεποίθηση στην παραγωγή υπό χρονική πίεση.",
    'diag.balanced': "Ισορροπημένο προφίλ: η κατανόηση αντιστοιχεί στην ικανότητα γραφής και ομιλίας.",

    'rec.course.title': "Ενότητα μαθήματος COSYlanguages {lang} {level}",
    'rec.course.desc': "Εγγραφείτε στο πρόγραμμα COSYlanguages {level} που ταιριάζει στο επίπεδό σας.",
    'rec.fluency.title': "Εντατικό πρόγραμμα ενεργού ευχέρειας",
    'rec.fluency.desc': "Στοχευμένες ασκήσεις για να παρακάμψετε την εσωτερική μετάφραση και να επιταχύνετε την ανάκτηση λέξεων.",
    'rec.club.title': "Λέσχη ομιλίας & εξάσκηση συνομιλίας",
    'rec.club.desc': "Συμμετάσχετε στις λέσχες ομιλίας για πραγματική εξάσκηση σε φιλικό περιβάλλον."
  };

  const TABLES = { en: en, fr: fr, it: it, ru: ru, el: el };
  const LANGUAGES = Object.keys(TABLES);
  let current = 'en';

  function lookup(table, key) {
    if (!table || !key) return '';
    const value = table[key];
    return typeof value === 'string' ? value : '';
  }

  function interpolate(template, vars) {
    if (!vars) return template;
    return template.replace(/\{(\w+)\}/g, function (match, name) {
      return Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match;
    });
  }

  /** Language used for the quiz chrome; unknown codes fall back to English. */
  function setLang(lang) {
    current = LANGUAGES.indexOf(String(lang || '').toLowerCase()) > -1
      ? String(lang).toLowerCase()
      : 'en';
    return current;
  }

  function t(key, vars) {
    const value = lookup(TABLES[current], key) || lookup(en, key);
    return value ? interpolate(value, vars) : '';
  }

  return {
    languages: LANGUAGES,
    setLang: setLang,
    getLang: function () { return current; },
    t: t,
    table: function (lang) {
      const code = LANGUAGES.indexOf(lang) > -1 ? lang : 'en';
      return TABLES[code];
    }
  };
}));
