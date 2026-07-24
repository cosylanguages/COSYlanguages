/**
 * js/games/unified-engine.js
 * Game logic for unified-engine.js.
 */
/**
 * js/games/unified-engine.js
 * The master engine for language games, managing turns, scoring, and data loading.
 */
/**
 * unified-engine.js — Unified Games Logic for COSYlanguages
 * ─────────────────────────────────────────────────────────────────────────────
 */

(function () {
    'use strict';

    /* ══════════════════════════════════════
       LOCALIZATION DICTIONARY (Stage 2.3)
    ══════════════════════════════════════ */
    const G_LOCALES = {
        en: {
            topics_done: "Topics done",
            per_topic: "Per topic",
            your_topic: "Your topic",
            start_speaking: "Start speaking",
            pause: "Pause",
            resume: "Resume",
            done_next_topic: "Done! Next topic",
            new_topic: "New topic",
            setup: "Setup",
            statement: "Statement",
            agree: "Agree",
            disagree: "Disagree",
            choose_side: "Choose side",
            start_debate: "Start debate",
            round: "Round",
            of: "of",
            arguing_for: "Arguing for",
            done_round: "Round done!",
            turn: "turn",
            vote_winner: "Who argued most convincingly?",
            play_again: "Play again",
            back_to_games: "Back to games",
            famous_quote: "Famous quote",
            excellent_analysis: "Excellent analysis!",
            new_quote: "New quote",
            hold_forehead: "Hold to forehead",
            others_describe: "Others describe this word — you guess!",
            got_it: "Got it!",
            skip: "Skip",
            correct: "Correct",
            skipped: "Skipped",
            round_over: "Round over!",
            times_up_results: "Time's up — here's how you did:",
            host_only_secret: "Host only — keep secret!",
            clue_for_you: "Clue for you",
            identity_instructions: "Others ask yes/no questions. You can only answer: Yes / No / Maybe / Partly.",
            questions_asked: "Questions asked",
            each_click_records: "Each click records a question.",
            plus_one_question: "+1 Question asked",
            they_guessed_it: "They guessed it!",
            guessed_in: "Guessed in",
            questions: "questions",
            new_identity: "New identity",
            where_does_this_come_from: "Where does this word come from?",
            exit: "Exit",
            next_concept: "Next Concept",
            complete: "Complete!",
            score: "Score"
        },
        fr: {
            topics_done: "Sujets terminés",
            per_topic: "Par sujet",
            your_topic: "Votre sujet",
            start_speaking: "Commencer à parler",
            pause: "Pause",
            resume: "Reprendre",
            done_next_topic: "Terminé ! Sujet suivant",
            new_topic: "Nouveau sujet",
            setup: "Configuration",
            statement: "Déclaration",
            agree: "D'accord",
            disagree: "Pas d'accord",
            choose_side: "Choisissez votre camp",
            start_debate: "Commencer le débat",
            round: "Tour",
            of: "sur",
            arguing_for: "Argumentation pour",
            done_round: "Tour terminé !",
            turn: "tour",
            vote_winner: "Qui a été le plus convaincant ?",
            play_again: "Rejouer",
            back_to_games: "Retour aux jeux",
            famous_quote: "Citation célèbre",
            excellent_analysis: "Excellente analyse !",
            new_quote: "Nouvelle citation",
            hold_forehead: "Tenez sur le front",
            others_describe: "Les autres décrivent le mot — devinez !",
            got_it: "Trouvé !",
            skip: "Passer",
            correct: "Correct",
            skipped: "Passé",
            round_over: "Partie terminée !",
            times_up_results: "Temps écoulé — voici vos résultats :",
            host_only_secret: "Hôte uniquement — gardez secret !",
            clue_for_you: "Indice pour vous",
            identity_instructions: "Les autres posent des questions oui/non. Répondez uniquement : Oui / Non / Peut-être / En partie.",
            questions_asked: "Questions posées",
            each_click_records: "Chaque clic enregistre une question.",
            plus_one_question: "+1 Question posée",
            they_guessed_it: "Ils ont deviné !",
            guessed_in: "Deviné en",
            questions: "questions",
            new_identity: "Nouvelle identité",
            where_does_this_come_from: "D'où vient ce mot ?",
            exit: "Quitter",
            next_concept: "Concept suivant",
            complete: "Terminé !",
            score: "Score"
        },
        ru: {
            topics_done: "Темы завершены",
            per_topic: "На тему",
            your_topic: "Ваша тема",
            start_speaking: "Начать говорить",
            pause: "Пауза",
            resume: "Продолжить",
            done_next_topic: "Готово! Следующая тема",
            new_topic: "Новая тема",
            setup: "Настройка",
            statement: "Утверждение",
            agree: "Согласен",
            disagree: "Не согласен",
            choose_side: "Выберите сторону",
            start_debate: "Начать дебаты",
            round: "Раунд",
            of: "из",
            arguing_for: "Аргумент за",
            done_round: "Раунд завершен!",
            turn: "ход",
            vote_winner: "Кто был наиболее убедителен?",
            play_again: "Играть снова",
            back_to_games: "Назад к играм",
            famous_quote: "Известная цитата",
            excellent_analysis: "Отличный анализ!",
            new_quote: "Новая цитата",
            hold_forehead: "Прижмите ко лбу",
            others_describe: "Другие описывают слово — угадывайте!",
            got_it: "Угадал!",
            skip: "Пропустить",
            correct: "Верно",
            skipped: "Пропущено",
            round_over: "Раунд окончен!",
            times_up_results: "Время вышло — ваши результаты:",
            host_only_secret: "Только для ведущего — держите в секрете!",
            clue_for_you: "Подсказка для вас",
            identity_instructions: "Другие задают вопросы да/нет. Отвечайте только: Да / Нет / Возможно / Частично.",
            questions_asked: "Задано вопросов",
            each_click_records: "Каждое нажатие записывает вопрос.",
            plus_one_question: "+1 вопрос",
            they_guessed_it: "Они угадали!",
            guessed_in: "Угадано за",
            questions: "вопросов",
            new_identity: "Новая личность",
            where_does_this_come_from: "Откуда происходит это слово?",
            exit: "Выйти",
            next_concept: "Следующее понятие",
            complete: "Готово!",
            score: "Счёт"
        },
        es: {
            topics_done: "Temas completados",
            per_topic: "Por tema",
            your_topic: "Tu tema",
            start_speaking: "Empezar a hablar",
            pause: "Pausa",
            resume: "Continuar",
            done_next_topic: "¡Hecho! Siguiente tema",
            new_topic: "Nuevo tema",
            setup: "Configuración",
            statement: "Declaración",
            agree: "De acuerdo",
            disagree: "En desacuerdo",
            choose_side: "Elige bando",
            start_debate: "Empezar debate",
            round: "Ronda",
            of: "de",
            arguing_for: "Argumentando a favor de",
            done_round: "¡Ronda completada!",
            turn: "turno",
            vote_winner: "¿Quién argumentó de manera más convincente?",
            play_again: "Jugar de nuevo",
            back_to_games: "Volver a juegos",
            famous_quote: "Frase famosa",
            excellent_analysis: "¡Excelente análisis!",
            new_quote: "Nueva frase",
            hold_forehead: "Sostén en la frente",
            others_describe: "Otros describen la palabra — ¡adivina!",
            got_it: "¡Lo tengo!",
            skip: "Pasar",
            correct: "Correcto",
            skipped: "Pasado",
            round_over: "¡Fin de la ronda!",
            times_up_results: "Tiempo agotado — así te fue:",
            host_only_secret: "Solo para el anfitrión — ¡mantén en secreto!",
            clue_for_you: "Pista para ti",
            identity_instructions: "Otros hacen preguntas de sí/no. Responde solo: Sí / No / Quizá / En parte.",
            questions_asked: "Preguntas formuladas",
            each_click_records: "Cada clic registra una pregunta.",
            plus_one_question: "+1 Pregunta formulada",
            they_guessed_it: "¡Lo adivinaron!",
            guessed_in: "Adivinado en",
            questions: "preguntas",
            new_identity: "Nueva identidad",
            where_does_this_come_from: "¿De dónde viene esta palabra?",
            exit: "Salir",
            next_concept: "Siguiente concepto",
            complete: "¡Completado!",
            score: "Puntuación"
        },
        it: {
            topics_done: "Temi completati",
            per_topic: "Per tema",
            your_topic: "Il tuo tema",
            start_speaking: "Inizia a parlare",
            pause: "Pausa",
            resume: "Riprendi",
            done_next_topic: "Fatto! Prossimo tema",
            new_topic: "Nuovo tema",
            setup: "Configurazione",
            statement: "Dichiarazione",
            agree: "D'accordo",
            disagree: "In disaccordo",
            choose_side: "Scegli una parte",
            start_debate: "Inizia dibattito",
            round: "Ronda",
            of: "di",
            arguing_for: "Argomentando per",
            done_round: "Ronda completata!",
            turn: "turno",
            vote_winner: "Chi ha argomentato in modo più convincente?",
            play_again: "Gioca ancora",
            back_to_games: "Torna ai giochi",
            famous_quote: "Citazione famosa",
            excellent_analysis: "Analisi eccellente!",
            new_quote: "Nuova citazione",
            hold_forehead: "Tieni sulla fronte",
            others_describe: "Gli altri descrivono la parola — indovina!",
            got_it: "Preso!",
            skip: "Passa",
            correct: "Corretto",
            skipped: "Passato",
            round_over: "Fine del gioco!",
            times_up_results: "Tempo scaduto — ecco come è andata:",
            host_only_secret: "Solo ospite — mantieni segreto!",
            clue_for_you: "Indizio per te",
            identity_instructions: "Gli altri fanno domande sì/no. Rispondi solo: Sì / No / Forse / In parte.",
            questions_asked: "Domande fatte",
            each_click_records: "Ogni clic registra una domanda.",
            plus_one_question: "+1 Domanda fatta",
            they_guessed_it: "Hanno indovinato!",
            guessed_in: "Indovinato in",
            questions: "domande",
            new_identity: "Nuova identità",
            where_does_this_come_from: "Da dove viene questa parola?",
            exit: "Esci",
            next_concept: "Prossimo concetto",
            complete: "Completato!",
            score: "Punteggio"
        },
        de: {
            topics_done: "Themen abgeschlossen",
            per_topic: "Pro Thema",
            your_topic: "Dein Thema",
            start_speaking: "Anfangen zu sprechen",
            pause: "Pause",
            resume: "Fortsetzen",
            done_next_topic: "Fertig! Nächstes Thema",
            new_topic: "Neues Thema",
            setup: "Einstellungen",
            statement: "Aussage",
            agree: "Zustimmen",
            disagree: "Nicht zustimmen",
            choose_side: "Seite wählen",
            start_debate: "Debatte starten",
            round: "Runde",
            of: "von",
            arguing_for: "Argumentieren für",
            done_round: "Runde abgeschlossen!",
            turn: "Reihe",
            vote_winner: "Wer hat am überzeugendsten argumentiert?",
            play_again: "Nochmals spielen",
            back_to_games: "Zurück zu Spielen",
            famous_quote: "Berühmtes Zitat",
            excellent_analysis: "Hervorragende Analyse!",
            new_quote: "Neues Zitat",
            hold_forehead: "An die Stirn halten",
            others_describe: "Andere beschreiben das Wort — rate!",
            got_it: "Gefunden!",
            skip: "Überspringen",
            correct: "Richtig",
            skipped: "Übersprungen",
            round_over: "Runde vorbei!",
            times_up_results: "Zeit abgelaufen — so hast du abgeschnitten:",
            host_only_secret: "Nur für den Gastgeber — geheim halten!",
            clue_for_you: "Hinweis für dich",
            identity_instructions: "Andere stellen Ja/Nein-Fragen. Antworte nur mit: Ja / Nein / Vielleicht / Teilweise.",
            questions_asked: "Gestellte Fragen",
            each_click_records: "Jeder Klick zeichnet eine Frage auf.",
            plus_one_question: "+1 Frage gestellt",
            they_guessed_it: "Sie haben es erraten!",
            guessed_in: "Erraten in",
            questions: "Fragen",
            new_identity: "Neue Identität",
            where_does_this_come_from: "Woher kommt dieses Wort?",
            exit: "Beenden",
            next_concept: "Nächstes Konzept",
            complete: "Abgeschlossen!",
            score: "Punkte"
        },
        el: {
            topics_done: "Θέματα που ολοκληρώθηκαν",
            per_topic: "Ανά θέμα",
            your_topic: "Το θέμα σας",
            start_speaking: "Ξεκινήστε να μιλάτε",
            pause: "Παύση",
            resume: "Συνέχεια",
            done_next_topic: "Έγινε! Επόμενο θέμα",
            new_topic: "Νέο θέμα",
            setup: "Ρυθμίσεις",
            statement: "Δήλωση",
            agree: "Συμφωνώ",
            disagree: "Διαφωνώ",
            choose_side: "Επιλέξτε πλευρά",
            start_debate: "Έναρξη αντιπαράθεσης",
            round: "Γύρος",
            of: "από",
            arguing_for: "Επιχειρηματολογία υπέρ",
            done_round: "Ολοκλήρωση γύρου!",
            turn: "σειρά",
            vote_winner: "Ποιος επιχειρηματολόγησε πιο πειστικά;",
            play_again: "Παίξτε ξανά",
            back_to_games: "Επιστροφή στα παιχνίδια",
            famous_quote: "Διάσημο ρητό",
            excellent_analysis: "Εξαιρετική ανάλυση!",
            new_quote: "Νέο ρητό",
            hold_forehead: "Κρατήστε στο μέτωπο",
            others_describe: "Οι άλλοι περιγράφουν τη λέξη — βρείτε την!",
            got_it: "Το βρήκα!",
            skip: "Παράλειψη",
            correct: "Σωστό",
            skipped: "Παραλείφθηκε",
            round_over: "Τέλος γύρου!",
            times_up_results: "Ο χρόνος τελείωσε — πώς τα πήγατε:",
            host_only_secret: "Μόνο για τον οικοδεσπότη — κρατήστε το μυστικό!",
            clue_for_you: "Στοιχείο για εσάς",
            identity_instructions: "Οι άλλοι κάνουν ερωτήσεις ναι/όχι. Απαντήστε μόνο: Ναι / Όχι / Ίσως / Εν μέρει.",
            questions_asked: "Ερωτήσεις που έγιναν",
            each_click_records: "Κάθε κλικ καταγράφει μια ερώτηση.",
            plus_one_question: "+1 Ερώτηση έγινε",
            they_guessed_it: "Το βρήκαν!",
            guessed_in: "Βρέθηκε σε",
            questions: "ερωτήσεις",
            new_identity: "Νέα ταυτότητα",
            where_does_this_come_from: "Από πού προέρχεται αυτή η λέξη;",
            exit: "Έξοδος",
            next_concept: "Επόμενη έννοια",
            complete: "Ολοκληρώθηκε!",
            score: "Σκορ"
        }
    };

    function gl(key, lang) {
        const l = lang || getLangCode() || 'en';
        const dict = G_LOCALES[l] || G_LOCALES['en'];
        return dict[key] || G_LOCALES['en'][key] || key;
    }

    /* ══════════════════════════════════════
       GAME DATA HELPERS (Centralized in shared.js)
    ══════════════════════════════════════ */
    const loadLevelData = (lang, level) => window.gameUtils.loadLevelData(lang, level);
    const getGameData = (lang, level) => window.gameUtils.getGameData(lang, level);

    const GAME_META = {
      fluency:    { title:'Fluency Flow 🗣️',   meta:'Speaking · Solo or group' },
      battle:     { title:'Battle of Wits ⚖️',  meta:'Speaking · Group · B1+' },
      opinions:   { title:'Opinion Arena 🏟️',   meta:'Speaking · Solo or group · A2+' },
      critic:     { title:"Critic's Corner 🎭", meta:'Speaking · Solo or group · B2+' },
      storychain: { title:'Story Chain 🃏',     meta:'Speaking · Solo or group' },
      hotseat:    { title:'Hot Seat 🎯',        meta:'Vocabulary · Solo' },
      action:     { title:'Action Hero 🎭',     meta:'Mystery · Group' },
      identity:   { title:'Identity Mystery 👤',meta:'Mystery · Solo or group' },
      objectquest:{ title:'Object Quest 📦',    meta:'Mystery · Solo or group' },
      wordlinker: { title:'Word Linker 🔗',     meta:'Vocabulary · Solo or group' },
      lastletter: { title:'Last Letter 🔤',     meta:'Vocabulary · Solo or group' },
      emoji:      { title:'Emoji Odyssey 📖',   meta:'Vocabulary · Solo or group' },
      crossword:  { title:'Cosy Crossword 🧩',  meta:'Vocabulary · Solo' },
      bingo:      { title:'Lucky Numbers 🔢',   meta:'Puzzles · Solo or group' },
      etymology:  { title:'Etymology Explorer 📜', meta:'Vocabulary · History' },
      gender:     { title:'What Gender Is It? ♀️♂️', meta:'Grammar & Etymology · Solo' },
    };

    /* ══════════════════════════════════════
       STATE
    ══════════════════════════════════════ */
    let CURRENT_GAME = null;
    let TIMER_INTERVAL = null;

    /* ══════════════════════════════════════
       HELPERS
    ══════════════════════════════════════ */
    function pick(arr) { if (!arr || !arr.length) return null; return arr[Math.floor(Math.random() * arr.length)]; }
    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    const getLangCode = (val) => window.getLangCode(val);
    const getLevelCode = (val) => window.getLevelCode(val);

    function startTimer(seconds, onTick, onEnd) {
      window.gameUtils.stopTimer();
      let remaining = seconds;
      onTick(remaining);
      TIMER_INTERVAL = setInterval(() => {
        remaining--;
        onTick(remaining);
        if (remaining <= 0) { clearInterval(TIMER_INTERVAL); onEnd(); }
      }, 1000);
    }

    const renderTimerRing = (seconds, total) => window.gameUtils.renderTimerRing(seconds, total);

    function updateTimerRing(seconds, total) {
      const ringWrap = document.querySelector('#game-overlay .timer-ring-wrap');
      if (ringWrap) window.gameUtils.updateTimerRing(ringWrap, seconds, total);
    }

    function showFB(el, type, msg) {
        el.className = `feedback-bar show ${type}`;
        el.innerHTML = msg;
        clearTimeout(el._t);
        el._t = setTimeout(() => { el.className = 'feedback-bar'; }, 2500);
    }

    function esc(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function renderNoContent(gameId, lang, level) {
        const body = document.getElementById('go-body');
        if (!body) return;
        const gameName = GAME_META[gameId]?.title || 'this game';
        const levelName = (window.COSY_LEVELS || []).find(l => l.id === level)?.name || level;
        const langName = (window.COSY_LANGUAGES || []).find(l => l.code === lang)?.native || lang.toUpperCase();

        body.innerHTML = `
          <div class="setup-screen" style="text-align:center; padding: 2rem;">
            <div style="font-size:4rem;margin-bottom:1.5rem">📭</div>
            <h2 style="font-family:'Fraunces', serif;">No content yet</h2>
            <p style="color:var(--ink-muted); margin-bottom:2rem;">We don't have enough content for <strong>${gameName}</strong> in <strong>${langName}</strong> at the <strong>${levelName}</strong> level yet. Try another level or language!</p>
            <button class="btn-g-primary" onclick="COSY_ENGINE.renderSetup('${gameId}')">⬅ Adjust settings</button>
          </div>`;
    }

    /* ══════════════════════════════════════
       CORE API
    ══════════════════════════════════════ */
    window.openGame = function(id) {
      CURRENT_GAME = (id === 'opinion') ? 'opinions' : id;
      clearInterval(TIMER_INTERVAL);
      const overlay = document.getElementById('game-overlay');
      if (!overlay) return;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      renderSetup(CURRENT_GAME);
    }

    window.closeGame = function() {
      clearInterval(TIMER_INTERVAL);
      const overlay = document.getElementById('game-overlay');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
      CURRENT_GAME = null;
    }

    // Filtering logic is now handled in js/games/loader.js to avoid duplication
    window.setFilter = function(f, btn) {
        if (typeof window.initFilters === 'function') {
            // Internal sync if needed
        }
    }

    function renderSetup(id) {
        const m = GAME_META[id];
        const titleEl = document.getElementById('go-title');
        const metaEl = document.getElementById('go-meta');
        const rightEl = document.getElementById('go-topbar-right');
        const body = document.getElementById('go-body');

        if (titleEl) titleEl.textContent = m.title;
        if (metaEl) metaEl.textContent = m.meta;
        if (rightEl) rightEl.innerHTML = '';
        if (!body) return;

        const curLang = getLangCode();
        const curLvl = getLevelCode();

        const LANG_OPTS = (window.COSY_LANGUAGES || []).map(l => `<option value="${l.code}" ${l.code === curLang ? 'selected' : ''}>${l.native} ${l.flag}</option>`).join('');
        const LEVEL_OPTS_ALL = (window.COSY_LEVELS || []).map(l => `<option value="${l.id}" ${l.id === curLvl ? 'selected' : ''}>${l.name}</option>`).join('');
        // For Critic's Corner, we only want B2+ (level index 3+)
        const LEVEL_OPTS_ADV = (window.COSY_LEVELS || []).slice(3).map(l => `<option value="${l.id}" ${l.id === curLvl ? 'selected' : ''}>${l.name}</option>`).join('');

        const DUR_OPTS  = ['1 minute','2 minutes','3 minutes','5 minutes'];
        const BINGO_LVLS = ['Bingo 1 (0-9)', 'Bingo 2 (10-19)', 'Bingo 3 (20-99)', 'Bingo 5 (Random)', 'Alphabet (A-Z)', 'Listening Practice 👂'];

        if (id === 'fluency') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Fluency Flow 🗣️</h2>
              <p>A topic will appear. Speak about it for the chosen duration without stopping. The goal is fluency — keep the words coming, don't worry about mistakes.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Duration</label>
                <div class="setup-options">${DUR_OPTS.map((d,i)=>`<div class="setup-opt ${i===1?'sel':''}" onclick="COSY_ENGINE.selectOpt(this,'dur')" data-val="${d}"><span class="setup-opt-icon">⏱</span>${d}</div>`).join('')}</div>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startFluency()">▶ Start game</button>
            </div>`;
        }
        else if (id ==='opinions') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Opinion Arena 🏟️</h2>
              <p>A statement appears. Agree or disagree — then speak for 1–2 minutes defending your view. Great for building confident, opinionated language.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startOpinion()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'battle') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Battle of Wits ⚖️</h2>
              <p>Two things are shown. Each player (or team) picks a side and argues for it. After 2 minutes each, the group votes on who was most convincingly.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startBattle()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'critic') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Critic's Corner 🎭</h2>
              <p>A famous quote appears. What does it mean? Do you agree? Share your thoughts for 2–3 minutes. Perfect for advanced learners who want nuanced expression.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ADV}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startCritic()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'action') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Action Hero 🎭</h2>
              <p>Hold your phone to your forehead (screen facing others). They describe the word — you guess. Each round is 60 seconds. Pass or guess as many words as you can.</p>
              <div class="setup-field"><label>Category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all">All vocabulary</option>
                  <option value="verbs">Verbs 🏃‍♂️</option>
                  <option value="group:animals">Animals 🐾</option>
                  <option value="group:nature">Nature 🌿</option>
                  <option value="group:food_drink">Food & Drink 🍕</option>
                  <option value="group:places">Places & Geography 🌍</option>
                  <option value="group:furniture">Home & Objects 🏠</option>
                  <option value="group:clothes">Clothes & Appearance 👕</option>
                  <option value="group:body">Body & Health 🦷</option>
                  <option value="group:sports">Sport & Leisure ⚽</option>
                </select>
              </div>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startAction()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'identity') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Identity Mystery 👤</h2>
              <p>A profession or person is shown (only to the host). Other players ask yes/no questions to figure out who it is. Great for practising question structures.</p>
              <div class="setup-field"><label>Category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all">All categories</option>
                  <option value="people">Famous People 🌟</option>
                  <option value="jobs">Jobs & Professions 💼</option>
                  <option value="nationalities">Nationalities 🌍</option>
                </select>
              </div>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startIdentity()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'wordlinker') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Word Linker 🔗</h2>
              <p>Four words appear. Find the connection between three of them — and spot the odd one out. Tests vocabulary depth and lateral thinking.</p>
              <div class="setup-field"><label>Mode</label>
                <select class="styled-sel" id="s-mode">
                  <option value="odd">Odd One Out ❌</option>
                  <option value="link">Common Connection 🔗</option>
                  <option value="all">Mixed Modes 🌀</option>
                </select>
              </div>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startWordLinker()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'lastletter') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Last Letter 🔤</h2>
              <p>Type a word. The next word must start with the last letter of the previous word. Keep the chain going as long as possible without repeating!</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startLastLetter()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'storychain') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Story Chain 🃏</h2>
              <p>Build a story together. One person sees a secret word and writes a sentence using it (without saying the word). Others try to guess!</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startStoryChain()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'hotseat') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Hot Seat 🎯</h2>
              <p>Quick-fire round! You have 60 seconds to answer as many vocabulary questions as possible. Plurals, definitions, and sentences.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startHotSeat()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'objectquest') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Object Quest 📦</h2>
              <p>Describe an object without naming it. Use clues about its size, color, or location. Can others guess what it is?</p>
              <div class="setup-field"><label>Category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all">All objects</option>
                  <option value="group:animals">Animals 🐾</option>
                  <option value="group:nature">Nature 🌿</option>
                  <option value="group:food_drink">Food & Drink 🍕</option>
                  <option value="group:places">Places & Geography 🌍</option>
                  <option value="group:furniture">Home & Gadgets 🏠</option>
                  <option value="group:clothes">Clothes & Accessories 👕</option>
                  <option value="group:body">Body Parts & Health 🦷</option>
                </select>
              </div>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startObjectQuest()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'emoji') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Emoji Odyssey 📖</h2>
              <p>Two modes: <strong>Guess</strong> the word behind the emoji, or <strong>Tell a Story</strong> using a set of random emojis.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Mode</label>
                <div class="setup-options">
                  <div class="setup-opt sel" onclick="COSY_ENGINE.selectOpt(this,'mode')" data-val="guess">🧩 Guess</div>
                  <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'mode')" data-val="story">📖 Story</div>
                </div>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startEmojiOdyssey()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'crossword') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Cosy Crossword 🧩</h2>
              <p>A crossword puzzle generated just for you. Use the clues to fill in the grid. Great for testing your vocabulary depth.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startCrossword()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'bingo') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Lucky Numbers 🔢</h2>
              <p>Play Bingo! You can be the <strong>Caller</strong> for a group, or play as a <strong>Player</strong> (solo or with a host).</p>
              <div style="background:var(--gold-light); padding:8px 12px; border-radius:8px; font-size:.8rem; color:var(--gold); margin-bottom:1rem; border:1px solid rgba(176,125,43,.2);">
                📍 Level: Starter (A1)
              </div>
              <div class="setup-field"><label>Role</label>
                <div class="setup-options">
                  <div class="setup-opt sel" onclick="COSY_ENGINE.selectOpt(this,'role')" data-val="player">🃏 Player</div>
                  <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'role')" data-val="caller">📣 Caller</div>
                </div>
              </div>
              <div class="setup-field"><label>Type</label>
                <select class="styled-sel" id="s-type">${BINGO_LVLS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startBingo()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'etymology') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Etymology Explorer 📜</h2>
              <p>Trace the origins of words. Guess the source language and learn about the history of the vocabulary you're studying.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang" onchange="COSY_ENGINE.updateSetupState()">${LANG_OPTS}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startEtymology()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'gender') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>What Gender Is It? ♀️♂️</h2>
              <p>Practice grammatical genders in our gendered languages (French, Spanish, Italian, German, Russian, Greek, Breton) and learn the fascinating historical/linguistic reasons why they have them!</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level" onchange="COSY_ENGINE.updateSetupState()">${LEVEL_OPTS_ALL}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">
                  <option value="all">All Genders Mode 🌀</option>
                  <option value="fr">French 🇫🇷</option>
                  <option value="es">Spanish 🇪🇸</option>
                  <option value="it">Italian 🇮🇹</option>
                  <option value="de">German 🇩🇪</option>
                  <option value="ru">Russian 🇷🇺</option>
                  <option value="el">Greek 🇬🇷</option>
                  <option value="br">Breton ⛵</option>
                </select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startGender()">▶ Start game</button>
            </div>`;
        }
    }

    /* ══════════════════════════════════════
       GAME IMPLEMENTATIONS
    ══════════════════════════════════════ */
    window.COSY_ENGINE = {
        selectOpt(el, group) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        async updateSetupState() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);
            await loadLevelData(lang, level);
            if (window.setLanguage) await window.setLanguage(lang);
        },

        async startFluency() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            if (window.setLanguage) await window.setLanguage(lang);

            const data = getGameData(lang, level);
            if (!data.fluency || data.fluency.length === 0) {
                renderNoContent('fluency', lang, level);
                return;
            }

            const durStr = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || '2 minutes';
            const dur = parseInt(durStr) * 60;
            body = document.getElementById('go-body');
            let sessionScore = 0;
            let running = false;

            const showTopic = () => {
              const rawItem = pick(data.fluency) || '...';
              const topic = typeof rawItem === 'string' ? rawItem : (rawItem.topic || rawItem.text || rawItem.t || rawItem.word || '...');
              const hints = (rawItem && typeof rawItem === 'object') ? (rawItem.hints || rawItem.h || []) : [];

              body.innerHTML = `
                <div class="score-bar">
                  <div class="sb-item"><div class="sb-val" id="ff-score">${sessionScore}</div><div class="sb-lbl">${gl('topics_done', lang)}</div></div>
                  <div class="sb-item"><div class="sb-val">${durStr}</div><div class="sb-lbl">${gl('per_topic', lang)}</div></div>
                </div>
                <div class="game-card">
                  <div class="game-label">🗣️ ${gl('your_topic', lang)}</div>
                  <div class="game-prompt" id="ff-topic">${esc(topic)}</div>
                  ${hints.length > 0 ? `
                    <div style="font-size:.7rem; font-weight:700; text-transform:uppercase; color:var(--sage-dark); margin: .5rem 0 .5rem;">💡:</div>
                    <ul style="font-size:.85rem; text-align:left; margin:0 0 1rem 1rem; padding:0; line-height:1.4">
                        ${hints.map(h => `<li>${esc(h)}</li>`).join('')}
                    </ul>` : ''}
                  <div class="game-sub">🗣️ ⏱️ <strong>${durStr}</strong></div>
                  ${renderTimerRing(dur, dur)}
                  <div class="game-controls">
                    <button class="btn-g-primary" id="ff-btn" onclick="COSY_ENGINE.ffToggle(${dur})">▶ ${gl('start_speaking', lang)}</button>
                    <button class="btn-g-secondary" onclick="COSY_ENGINE.startFluency()">${gl('new_topic', lang)} ↺</button>
                    <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('fluency')">⬅ ${gl('setup', lang)}</button>
                  </div>
                </div>`;
            }

            window.COSY_ENGINE.ffToggle = (total) => {
                if (!running) {
                  running = true;
                  document.getElementById('ff-btn').textContent = `⏸ ${gl('pause', lang)}`;
                  startTimer(total, (t) => updateTimerRing(t, total), () => {
                    running = false;
                    sessionScore++;
                    const scoreEl = document.getElementById('ff-score');
                    if (scoreEl) scoreEl.textContent = sessionScore;
                    const btn = document.getElementById('ff-btn');
                    if (btn) {
                        btn.textContent = `✓ ${gl('done_next_topic', lang)} ➔`;
                        btn.onclick = () => { showTopic(); };
                    }
                  });
                } else {
                  clearInterval(TIMER_INTERVAL); running = false;
                  document.getElementById('ff-btn').textContent = `▶ ${gl('resume', lang)}`;
                }
            };

            showTopic();
        },

        async startOpinion() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            if (window.setLanguage) await window.setLanguage(lang);

            const data = getGameData(lang, level);
            if (!data.opinions || data.opinions.length === 0) {
                renderNoContent('opinions', lang, level);
                return;
            }
            const rawItem = pick(data.opinions) || '...';
            const stmt = typeof rawItem === 'string' ? rawItem : (rawItem.topic || rawItem.text || rawItem.t || rawItem.word || '...');
            const hints = (rawItem && typeof rawItem === 'object') ? (rawItem.hints || rawItem.h || []) : [];
            const DUR = 90;

            body = document.getElementById('go-body');
            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🏟️ ${gl('statement', lang)}</div>
                <div class="game-prompt">"${esc(stmt)}"</div>
                ${hints.length > 0 ? `
                    <div style="font-size:.7rem; font-weight:700; text-transform:uppercase; color:var(--sage-dark); margin: .5rem 0 .5rem;">💡:</div>
                    <ul style="font-size:.85rem; text-align:left; margin:0 0 1rem 1rem; padding:0; line-height:1.4">
                        ${hints.map(h => `<li>${esc(h)}</li>`).join('')}
                    </ul>` : ''}
                <div class="game-sub" style="margin-top:.6rem">⚖️ ⏱️ 90s</div>
              </div>
              <div class="setup-options" style="margin-bottom:1rem">
                <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'stance');document.getElementById('op-start').disabled=false" data-val="agree">${gl('agree', lang)}</div>
                <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'stance');document.getElementById('op-start').disabled=false" data-val="disagree">${gl('disagree', lang)}</div>
              </div>
              <div class="game-controls">
                <button class="btn-g-primary" id="op-start" disabled onclick="COSY_ENGINE.opSpeak('${stmt.replace(/'/g,"\\'")}',${DUR})">▶ ${gl('start_speaking', lang)}</button>
                <button class="btn-g-secondary" onclick="COSY_ENGINE.startOpinion()">${gl('statement', lang)} ↺</button>
                <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('opinion')">⬅ ${gl('setup', lang)}</button>
              </div>`;
        },

        opSpeak(stmt, dur) {
            const lang = getLangCode();
            const body = document.getElementById('go-body');
            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🏟️ 🗣️</div>
                <div class="game-prompt" style="font-size:1rem;margin-bottom:.4rem">"${stmt}"</div>
                <div class="game-sub">🗣️ ⏱️ 90s</div>
                ${renderTimerRing(dur, dur)}
                <div class="game-controls">
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.startOpinion()">${gl('statement', lang)} ↺</button>
                  <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('opinion')">⬅ ${gl('setup', lang)}</button>
                </div>
              </div>`;
            startTimer(dur, t => updateTimerRing(t, dur), () => {
              document.getElementById('go-body').insertAdjacentHTML('beforeend', `
                <div class="game-card" style="text-align:center">
                  <div style="font-size:1.8rem;margin-bottom:.5rem">🏆</div>
                  <div class="game-prompt" style="font-size:1.1rem">⏱️ 🏁</div>
                  <div class="game-sub">${gl('excellent_analysis', lang)}</div>
                  <div class="game-controls" style="justify-content:center;margin-top:.75rem">
                    <button class="btn-g-primary" onclick="COSY_ENGINE.startOpinion()">${gl('statement', lang)} ↺</button>
                  </div>
                </div>`);
            });
        },

        async startBattle() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            if (window.setLanguage) await window.setLanguage(lang);

            const data = getGameData(lang, level);
            if (!data.battle || data.battle.length === 0) {
                renderNoContent('battle', lang, level);
                return;
            }
            const debate = pick(data.battle) || {sideA:'A', sideB:'B', topic:'Which is better?'};
            body = document.getElementById('go-body');
            const DUR = 120;

            // Normalize debate format
            const sideA = debate.sideA || (Array.isArray(debate) ? debate[0] : 'A');
            const sideB = debate.sideB || (Array.isArray(debate) ? debate[1] : 'B');
            const topic = debate.topic || 'Which is better?';

            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">⚖️ ${gl('choose_side', lang)}</div>
                <div class="game-prompt">${topic}</div>
                <div class="setup-options" style="margin:1rem 0">
                  <div class="setup-opt sel" onclick="COSY_ENGINE.selectOpt(this,'side')" data-val="0"><span class="setup-opt-icon">🅰️</span>${sideA}</div>
                  <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'side')" data-val="1"><span class="setup-opt-icon">🅱️</span>${sideB}</div>
                </div>
                <div class="game-sub">🗣️ ⏱️ 2m</div>
                <div class="game-controls" style="margin-top:.5rem">
                  <button class="btn-g-primary" onclick="COSY_ENGINE.battleSpeak(${JSON.stringify(debate).replace(/"/g, '&quot;')},${DUR})">▶ ${gl('start_debate', lang)}</button>
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.startBattle()">${gl('new_topic', lang)} ↺</button>
                </div>
              </div>`;
        },

        battleSpeak(debate, dur) {
            const lang = getLangCode();
            let battleRound = 0;
            const sides = [
                { name: debate.sideA || debate[0], ideas: debate.ideasA || [] },
                { name: debate.sideB || debate[1], ideas: debate.ideasB || [] }
            ];

            const doRound = () => {
              const currentSide = sides[battleRound];
              const body = document.getElementById('go-body');
              body.innerHTML = `
                <div class="game-card">
                  <div class="game-label">⚖️ ${gl('round', lang)} ${battleRound+1} ${gl('of', lang)} 2</div>
                  <div class="game-prompt">${gl('arguing_for', lang)}: <em>${esc(currentSide.name)}</em></div>

                  ${currentSide.ideas.length > 0 ? `
                    <div style="background:var(--sage-light); padding:1rem; border-radius:var(--r-md); margin:1rem 0; border: 1px solid var(--border);">
                        <div style="font-size:.7rem; font-weight:700; text-transform:uppercase; color:var(--sage-dark); margin-bottom:.5rem;">💡:</div>
                        <ul style="font-size:.85rem; padding-left:1.2rem; color:var(--ink-muted); line-height:1.4;">
                            ${currentSide.ideas.map(i => `<li>${esc(i)}</li>`).join('')}
                        </ul>
                    </div>
                  ` : ''}

                  <div class="game-sub">🗣️ ⏱️ 2m</div>
                  ${renderTimerRing(dur, dur)}
                  <div class="game-controls">
                    <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('battle')">⬅ ${gl('setup', lang)}</button>
                  </div>
                </div>`;
              startTimer(dur, t => updateTimerRing(t, dur), () => {
                battleRound++;
                if (battleRound < 2) {
                  body.innerHTML = `
                    <div class="game-card" style="text-align:center">
                      <div style="font-size:1.8rem;margin-bottom:.5rem">👏</div>
                      <div class="game-prompt">✓ ${gl('done_round', lang)}</div>
                      <div class="game-sub">👉 <strong>${sides[battleRound].name}</strong> ${gl('turn', lang)}</div>
                      <button class="btn-g-primary" style="margin:1rem auto 0;display:block" onclick="COSY_ENGINE._doRound()">▶ ${gl('round', lang)} ${battleRound+1}</button>
                    </div>`;
                   // Export internal helper
                   window.COSY_ENGINE._doRound = doRound;
                } else {
                  body.innerHTML = `
                    <div class="round-end">
                      <div class="re-icon">🗳️</div>
                      <div class="re-title">🗳️</div>
                      <div class="re-sub">${gl('vote_winner', lang)}</div>
                      <div class="setup-options" style="margin-bottom:1.2rem">
                        <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'vote')"><span>🅰️</span>${sides[0].name}</div>
                        <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'vote')"><span>🅱️</span>${sides[1].name}</div>
                      </div>
                      <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_ENGINE.startBattle()">${gl('play_again', lang)} ↺</button>
                        <button class="btn-g-secondary" onclick="closeGame()">${gl('back_to_games', lang)}</button>
                      </div>
                    </div>`;
                }
              });
            }
            doRound();
        },

        async startCritic() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            if (window.setLanguage) await window.setLanguage(lang);

            const data = getGameData(lang, level);
            if (!data.critic || data.critic.length === 0) {
                renderNoContent('critic', lang, level);
                return;
            }
            const item = pick(data.critic) || '...';
            body = document.getElementById('go-body');
            const DUR = 150;

            const t = (key) => window.t(key, lang);
            let qText = '', author = '', origin = '', category = '', task = '', qs = [];
            if (typeof item === 'string') {
                qText = item;
                task = t('cc_default_task');
            } else {
                qText = item.q || item.text || '...';
                author = item.a || item.author || '';
                origin = item.o || '';
                category = item.c || '';
                task = item.task || t('cc_default_task');
                qs = item.qs || [];
            }

            let qsHtml = '';
            if (qs && qs.length > 0) {
                qsHtml = `
                    <div style="margin-top:1.5rem; border-top:1px solid var(--border); padding-top:1rem;">
                        <div style="font-size:.7rem; text-transform:uppercase; font-weight:800; color:var(--ink-faint); margin-bottom:.5rem;">${t('cc_questions_label')}</div>
                        <ul style="font-size:.85rem; color:var(--ink-muted); padding-left:1.2rem; margin:0; text-align:left;">
                            ${qs.map(q => `<li style="margin-bottom:.4rem">${q}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🎭 ${gl('famous_quote', lang)} ${category ? '· ' + category : ''}</div>
                <div class="game-prompt" style="font-style:italic;font-size:1.1rem">"${qText}"</div>
                ${author ? `<div style="text-align:right; font-weight:700; margin-top:.5rem; color:var(--ink-muted)">— ${author}${origin ? `, <span style="font-weight:400; font-style:italic">${origin}</span>` : ''}</div>` : ''}

                <div style="background:var(--sage-light); border-radius:12px; padding:14px; margin-top:1.25rem; border:1px solid rgba(107,143,113,.2); text-align:left;">
                    <div style="font-size:.65rem; text-transform:uppercase; font-weight:900; color:var(--sage-dark); margin-bottom:.4rem; letter-spacing:.05em;">📝</div>
                    <div style="font-size:.9rem; line-height:1.5; color:var(--ink); font-weight:700;">${task}</div>
                </div>

                ${qsHtml}

                <div style="margin-top:2rem">
                    ${renderTimerRing(DUR, DUR)}
                </div>

                <div class="game-controls" style="margin-top:1.5rem">
                  <button class="btn-g-primary" id="cc-btn" onclick="COSY_ENGINE.ccStart(${DUR})">▶ ${gl('start_speaking', lang)}</button>
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.startCritic()">${gl('new_quote', lang)} ↺</button>
                  <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('critic')">⬅ ${gl('setup', lang)}</button>
                </div>
              </div>`;
        },

        ccStart(dur) {
            const lang = getLangCode();
            const btn = document.getElementById('cc-btn');
            if (btn) btn.style.display = 'none';
            startTimer(dur, t => updateTimerRing(t, dur), () => {
              document.getElementById('go-body').insertAdjacentHTML('beforeend',`
                <div class="game-card" style="text-align:center">
                  <div style="font-size:1.8rem;margin-bottom:.5rem">🎓</div>
                  <div class="game-prompt" style="font-size:1.1rem">${gl('excellent_analysis', lang)}</div>
                  <div class="re-actions" style="margin-top:.75rem">
                    <button class="btn-g-primary" onclick="COSY_ENGINE.startCritic()">${gl('new_quote', lang)} ↺</button>
                  </div>
                </div>`);
            });
        },

        async startAction() {
            const langRaw = document.getElementById('s-lang')?.value;
            const levelRaw = document.getElementById('s-level')?.value;
            const lang = getLangCode(langRaw);
            const level = getLevelCode(levelRaw);
            const category = document.getElementById('s-cat')?.value || 'all';

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);

            const data = getGameData(lang, level);
            let vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            let verbs = (window.verbsData && window.verbsData[lang]) || [];
            if (vocab.length === 0 && lang !== 'en') {
                vocab = (window.vocabularyData && window.vocabularyData['en']) || [];
            }
            if (verbs.length === 0 && lang !== 'en') {
                verbs = (window.verbsData && window.verbsData['en']) || [];
            }

            // Combine and strictly filter by level
            const combined = [...vocab, ...verbs].filter(v => window.getLevelCode(v.level) === level);
            let pool = [];

            if (category === 'verbs') {
                pool = verbs.filter(v => window.getLevelCode(v.level) === level).map(v => v.word);
            } else if (category !== 'all') {
                pool = combined.filter(v => v.theme && window.gameUtils.isThemeMatch(v.theme, category)).map(v => v.word);
            } else {
                pool = combined.map(v => v.word);
            }

            if (pool.length < 5) {
                // Fallback to legacy action data (already level-keyed in game_data.js)
                const shortLvl = window.getLevelCode(level, 'short');
                const fullLvl = window.getLevelCode(level, 'id');
                pool = (data.action && (data.action[fullLvl] || data.action[shortLvl])) ? (data.action[fullLvl] || data.action[shortLvl]) : [];
            }

            if (pool.length === 0 || (pool.length === 1 && pool[0] === '...')) {
                renderNoContent('action', lang, level);
                return;
            }

            const words = shuffle(pool);
            let idx = 0, correct = 0, skipped = 0;
            const DUR = 60;

            const showWord = () => {
              if (idx >= words.length) { showActionEnd(); return; }
              body = document.getElementById('go-body');
              body.innerHTML = `
                <div class="game-card" style="text-align:center">
                  <div class="game-label">🎭 ${gl('hold_forehead', lang)} · ${DUR}s</div>
                  <div class="game-prompt" style="font-size:2.5rem;letter-spacing:.05em">${words[idx]}</div>
                  <div class="game-sub">${gl('others_describe', lang)}</div>
                  ${renderTimerRing(DUR, DUR)}
                  <div class="game-controls" style="justify-content:center;gap:1rem">
                    <button class="btn-g-primary" style="background:var(--green)" onclick="COSY_ENGINE.ahResult(true)">✓ ${gl('got_it', lang)}</button>
                    <button class="btn-g-secondary" onclick="COSY_ENGINE.ahResult(false)">${gl('skip', lang)} ➔</button>
                  </div>
                </div>
                <div style="text-align:center;font-size:.8rem;color:var(--ink-faint);margin-top:.5rem">✓ ${correct} · ↷ ${skipped}</div>`;

              startTimer(DUR, t => updateTimerRing(t, DUR), showActionEnd);
            }

            const showActionEnd = () => {
              clearInterval(TIMER_INTERVAL);
              document.getElementById('go-body').innerHTML = `
                <div class="round-end">
                  <div class="re-icon">🏆</div>
                  <div class="re-title">${gl('round_over', lang)}</div>
                  <div class="re-sub">${gl('times_up_results', lang)}</div>
                  <div class="re-stats">
                    <div class="sb-item"><div class="re-stat-val" style="color:var(--green)">${correct}</div><div class="re-stat-lbl">✓ ${gl('correct', lang)}</div></div>
                    <div class="sb-item"><div class="re-stat-val" style="color:var(--ink-muted)">${skipped}</div><div class="re-stat-lbl">↷ ${gl('skipped', lang)}</div></div>
                  </div>
                  <div class="re-actions">
                    <button class="btn-g-primary" onclick="COSY_ENGINE.startAction()">${gl('play_again', lang)} ↺</button>
                    <button class="btn-g-secondary" onclick="closeGame()">${gl('back_to_games', lang)}</button>
                  </div>
                </div>`;
            }

            window.COSY_ENGINE.ahResult = (got) => {
              clearInterval(TIMER_INTERVAL);
              if (got) correct++; else skipped++;
              idx++;
              showWord();
            };

            showWord();
        },

        async startIdentity() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);
            const category = document.getElementById('s-cat')?.value || 'all';

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            const data = getGameData(lang, level);

            // Enrichment from vocabularyData based on category - STRICTLY filtered by level
            let vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            if (vocab.length === 0 && lang !== 'en') {
                vocab = (window.vocabularyData && window.vocabularyData['en']) || [];
            }
            vocab = vocab.filter(v => window.getLevelCode(v.level) === level);

            let pool = (data.identity || []).filter(item => !item.level || window.getLevelCode(item.level) === level);

            if (vocab.length > 0) {
                if (category === 'jobs' || category === 'all') {
                    const jobs = vocab.filter(v => v.theme && (v.theme.includes('professions') || v.theme.includes('job')))
                        .map(v => ({ person: (v.article ? v.article + ' ' : '') + v.word, clue: v.definitions?.[0]?.text || '' }));
                    pool = [...pool, ...jobs];
                }
                if (category === 'people' || category === 'all') {
                    const people = vocab.filter(v => v.theme && (v.theme.includes('people') || v.theme.includes('person')))
                        .map(v => ({ person: v.word, clue: v.subtext || v.definitions?.[0]?.text || '' }));
                    pool = [...pool, ...people];
                }
                if (category === 'nationalities' || category === 'all') {
                    const nationals = vocab.filter(v => v.theme && v.theme.includes('nationality'))
                        .map(v => ({ person: v.word, clue: v.definitions?.[0]?.text || '' }));
                    pool = [...pool, ...nationals];
                }
            }

            // Remove duplicates and empty clues
            const uniquePool = [];
            const seen = new Set();
            pool.forEach(item => {
                if (!seen.has(item.person) && item.person !== '...') {
                    uniquePool.push(item);
                    seen.add(item.person);
                }
            });

            if (uniquePool.length === 0) {
                renderNoContent('identity', lang, level);
                return;
            }

            const identity = pick(uniquePool) || {person:'Teacher', clue:'They help you learn.'};
            body = document.getElementById('go-body');
            let questions = 0, maxQ = 20;

            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">👤 ${gl('host_only_secret', lang)}</div>
                <div class="game-prompt">${identity.person}</div>
                <div class="game-sub">${gl('clue_for_you', lang)}: "${identity.clue}"<br><br>${gl('identity_instructions', lang)}</div>
              </div>
              <div class="game-card">
                <div class="game-label">💬 ${gl('questions_asked', lang)}</div>
                <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:600;color:var(--teal);margin-bottom:.3rem" id="im-qcount">0 / ${maxQ}</div>
                <div style="font-size:.82rem;color:var(--ink-muted);margin-bottom:1rem">${gl('each_click_records', lang)}</div>
                <div class="game-controls">
                  <button class="btn-g-primary" onclick="COSY_ENGINE.imQuestion(${maxQ}, '${identity.person.replace(/'/g,"\\'")}')">+1 💬</button>
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.imReveal('${identity.person.replace(/'/g,"\\'")}')">🎉 ${gl('they_guessed_it', lang)}</button>
                  <button class="btn-g-danger" onclick="COSY_ENGINE.startIdentity()">${gl('new_identity', lang)} ↺</button>
                </div>
              </div>`;

            window.COSY_ENGINE.imQuestion = (max, person) => {
              questions++;
              document.getElementById('im-qcount').textContent = `${questions} / ${max}`;
              if (questions >= max) window.COSY_ENGINE.imReveal(person);
            };
            window.COSY_ENGINE.imReveal = (person) => {
              clearInterval(TIMER_INTERVAL);
              body.innerHTML = `
                <div class="round-end">
                  <div class="re-icon">🎉</div>
                  <div class="re-title">${person}</div>
                  <div class="re-sub">🎉 ${gl('guessed_in', lang)} ${questions} ${gl('questions', lang)}!</div>
                  <div class="re-actions">
                    <button class="btn-g-primary" onclick="COSY_ENGINE.startIdentity()">${gl('new_identity', lang)} ↺</button>
                    <button class="btn-g-secondary" onclick="closeGame()">${gl('back_to_games', lang)}</button>
                  </div>
                </div>`;
            };
        },

        async startWordLinker() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);
            const mode = document.getElementById('s-mode')?.value || 'all';

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            const data = getGameData(lang, level);
            if (!data.wordlinker || data.wordlinker.length === 0) {
                renderNoContent('wordlinker', lang, level);
                return;
            }
            let wlScore = 0, wlQ = 0;

            let source = data.wordlinker || [{words:['A','B','C','D'], odd:'D', link:'Letters', oddReason:'D is later'}];
            if (mode === 'odd') source = source.filter(q => q.odd !== 'none');
            if (mode === 'link') source = source.filter(q => q.odd === 'none');

            const nextWordLinker = () => {
                const q = pick(source) || {words:['A','B','C','D'], odd:'D', link:'Letters', oddReason:'D is later'};
                body = document.getElementById('go-body');
                wlQ++;
                const shuffled = shuffle(q.words);
                const hasOdd = q.odd !== 'none';

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="wl-score">${wlScore}</div><div class="sb-lbl">⭐</div></div>
                    <div class="sb-item"><div class="sb-val">${wlQ}</div><div class="sb-lbl">🧩</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">🔗 ${hasOdd ? '❌ ≠ ???' : '🔗 ≈ ???'}</div>
                    <div class="word-options">
                      ${shuffled.map(w => `<button class="word-opt" onclick="COSY_ENGINE.wlGuess(this,'${w}','${q.odd}','${q.link}','${q.oddReason.replace(/'/g,"\\'")}',${hasOdd})">${w}</button>`).join('')}
                    </div>
                    <div class="feedback-bar" id="wl-fb"></div>
                    <div class="game-controls">
                      <button class="btn-g-primary" id="wl-next" onclick="COSY_ENGINE._nextWL()" style="display:none">➔</button>
                      <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('wordlinker')">⬅ Setup</button>
                    </div>
                  </div>`;
                window.COSY_ENGINE._nextWL = nextWordLinker;
            }

            window.COSY_ENGINE.wlGuess = (el, word, odd, link, reason, hasOdd) => {
                document.querySelectorAll('.word-opt').forEach(b => b.disabled = true);
                const fb = document.getElementById('wl-fb');
                const next = document.getElementById('wl-next');
                if (next) next.style.display = 'inline-block';

                if (!hasOdd) {
                  el.classList.add('correct');
                  if (fb) {
                      fb.className = 'feedback-bar show ok';
                      fb.innerHTML = `✓ 🔗 ≈ <strong>${link}</strong>`;
                  }
                  wlScore++;
                  const scoreEl = document.getElementById('wl-score');
                  if (scoreEl) scoreEl.textContent = wlScore;
                  return;
                }

                if (word === odd) {
                  el.classList.add('correct');
                  if (fb) {
                      fb.className = 'feedback-bar show ok';
                      fb.innerHTML = `✓ ❌ = <strong>${odd}</strong> · ${reason}`;
                  }
                  wlScore++;
                  const scoreEl = document.getElementById('wl-score');
                  if (scoreEl) scoreEl.textContent = wlScore;
                } else {
                  el.classList.add('wrong');
                  document.querySelectorAll('.word-opt').forEach(b => { if (b.textContent === odd) b.classList.add('correct'); });
                  if (fb) {
                      fb.className = 'feedback-bar show bad';
                      fb.innerHTML = `✗ ❌ = <strong>${odd}</strong> · ${reason}`;
                  }
                }
            };

            nextWordLinker();
        },

        async startLastLetter() {
            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);
            await loadLevelData(lang, level);
            let llChain = [], llScore = 0;
            const LL_USED = new Set();
            body = document.getElementById('go-body');

            body.innerHTML = `
              <div class="score-bar">
                <div class="sb-item"><div class="sb-val" id="ll-score">0</div><div class="sb-lbl">🔗</div></div>
                <div class="sb-item"><div class="sb-val" id="ll-next-letter">—</div><div class="sb-lbl">🔤</div></div>
              </div>
              <div class="game-card">
                <div class="game-label">🔤</div>
                <div class="chain-display" id="ll-chain">🏁 ➔ ✍️ ...</div>
                <div class="input-row">
                  <input class="game-input" id="ll-input" placeholder="✍️ ..." autocomplete="off" autocorrect="off" spellcheck="false">
                  <button class="btn-g-primary" onclick="COSY_ENGINE.llSubmit()">➔</button>
                </div>
                <div class="feedback-bar" id="ll-fb"></div>
                <div class="game-controls">
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.startLastLetter()">↺</button>
                  <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('lastletter')">⚙️</button>
                </div>
              </div>`;

            const inputEl = document.getElementById('ll-input');
            if (inputEl) inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') window.COSY_ENGINE.llSubmit(); });

            window.COSY_ENGINE.llSubmit = () => {
                const input = document.getElementById('ll-input');
                const fb = document.getElementById('ll-fb');
                if (!input || !fb) return;
                const word = input.value.trim().toLowerCase().replace(/[^a-zàâäéèêëîïôùûüæœçñáíóúüý\u0400-\u04FF\u0370-\u03FF]/gi,'');
                input.value = '';

                if (!word || word.length < 2) {
                  showFB(fb, 'bad', '⚠️ < 2 🔤');
                  return;
                }
                if (LL_USED.has(word)) {
                  showFB(fb, 'bad', `⚠️ 🔁 "${word}"`);
                  input.classList.add('bad'); setTimeout(() => input.classList.remove('bad'), 600);
                  return;
                }
                if (llChain.length > 0) {
                  const lastChar = llChain[llChain.length - 1].slice(-1).toLowerCase();
                  if (word[0] !== lastChar) {
                    showFB(fb, 'bad', `⚠️ ❌ 🔤 [${lastChar.toUpperCase()}]`);
                    input.classList.add('bad'); setTimeout(() => input.classList.remove('bad'), 600);
                    return;
                  }
                }

                LL_USED.add(word);
                llChain.push(word);
                llScore++;

                document.getElementById('ll-score').textContent = llScore;
                document.getElementById('ll-next-letter').textContent = word.slice(-1).toUpperCase();
                document.getElementById('ll-chain').innerHTML = llChain.map((w,i) =>
                  `<span style="color:${i===llChain.length-1?'var(--teal)':'var(--ink-muted)'};font-weight:${i===llChain.length-1?'600':'400'}">${w}</span>`
                ).join(' → ');

                input.classList.add('ok'); setTimeout(() => input.classList.remove('ok'), 400);
                showFB(fb, 'ok', `✓ "${word}" ➔ 🔤 [${word.slice(-1).toUpperCase()}]`);
                input.focus();
            };
        },

        async startStoryChain() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            const data = getGameData(lang, level);
            let story = [], pool = data.storychain || [];
            let vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            if (vocab.length === 0 && lang !== 'en') {
                vocab = (window.vocabularyData && window.vocabularyData['en']) || [];
            }
            vocab = vocab.filter(v => window.getLevelCode(v.level) === level);
            if (pool.length === 0 && vocab.length > 5) pool = vocab.map(v => v.word);
            if (pool.length === 0) {
                const shortLvl = window.getLevelCode(level, 'short');
                const fullLvl = window.getLevelCode(level, 'id');
                pool = (data.action && (data.action[fullLvl] || data.action[shortLvl])) ? (data.action[fullLvl] || data.action[shortLvl]) : [];
            }

            if (pool.length === 0) {
                renderNoContent('storychain', lang, level);
                return;
            }

            body = document.getElementById('go-body');
            let currentWord = pick(pool) || 'Adventure';

            const renderStory = (reveal = false) => {
                body.innerHTML = `
                    <div class="game-card">
                        <div class="game-label">🤫 👤</div>
                        <div class="game-prompt" id="sc-word">${currentWord}</div>
                        <div class="game-sub">🤫 💬 ➔ 🧩</div>
                    </div>
                    <div class="game-card">
                        <div class="game-label">📖 ➔ ...</div>
                        <div class="chain-display" style="font-size:.9rem; line-height:1.5; min-height:100px;">
                            ${story.length ? story.map(s => `<div style="margin-bottom:8px; border-bottom:1px solid var(--border); padding-bottom:4px;">${esc(s.sentence)} ${reveal ? `(<strong style="color:var(--gold)">${esc(s.word)}</strong>)` : ''}</div>`).join('') : '... 💬'}
                        </div>
                        <div class="input-row">
                            <input class="game-input" id="sc-input" placeholder="✍️ ..." autocomplete="off" onkeydown="if(event.key==='Enter') COSY_ENGINE.scAdd()">
                            <button class="btn-g-primary" onclick="COSY_ENGINE.scAdd()">➔</button>
                        </div>
                        <div class="game-controls" style="margin-top:1rem">
                            <button class="btn-g-secondary" onclick="COSY_ENGINE.scReveal()">👁️ 🧩</button>
                            <button class="btn-g-danger" onclick="COSY_ENGINE.startStoryChain()">↺</button>
                        </div>
                    </div>`;
            };

            window.COSY_ENGINE.scAdd = () => {
                const input = document.getElementById('sc-input');
                if (!input || !input.value.trim()) return;
                story.push({ sentence: input.value.trim(), word: currentWord });
                currentWord = pick(pool);
                renderStory();
            };

            window.COSY_ENGINE.scReveal = () => renderStory(true);

            renderStory();
        },

        async startHotSeat() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            const data = getGameData(lang, level);
            body = document.getElementById('go-body');
            let score = 0, timeLeft = 60, active = true;

            let vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            if (vocab.length === 0 && lang !== 'en') {
                vocab = (window.vocabularyData && window.vocabularyData['en']) || [];
            }
            vocab = vocab.filter(v => window.getLevelCode(v.level) === level);
            if (vocab.length < 5) {
                renderNoContent('hotseat', lang, level);
                return;
            }

            const nextQ = () => {
                if (!active) return;
                const item = pick(vocab);
                const types = ['plural', 'definition', 'sentence'];
                const type = pick(types);

                let prompt = '', answer = '';
                if (type === 'plural') {
                    prompt = `<strong>${item.word}</strong> + 👥 = ???`;
                    answer = item.plural || (item.word + 's');
                } else if (type === 'definition') {
                    prompt = `<strong>${item.word}</strong> = 📖 ???`;
                    answer = item.definitions?.[0]?.text || '...';
                } else {
                    prompt = `<strong>${item.word}</strong> ➔ ✍️ ???`;
                    answer = item.definitions?.[0]?.examples?.[0]?.text || item.definitions?.[0]?.examples?.[0] || '...';
                }

                body.innerHTML = `
                    <div class="score-bar">
                        <div class="sb-item"><div class="sb-val">${score}</div><div class="sb-lbl">⭐</div></div>
                        <div class="sb-item"><div class="sb-val" id="hs-timer">${timeLeft}</div><div class="sb-lbl">⏱️</div></div>
                    </div>
                    <div class="game-card" style="text-align:center">
                        <div class="game-label">🎯 Hot Seat</div>
                        <div class="game-prompt" style="font-size:1.4rem">${prompt}</div>
                        <div style="font-size:.8rem; color:var(--ink-faint); margin: 1rem 0;">💡: "${answer}"</div>
                        <div class="game-controls" style="justify-content:center; gap:1rem">
                            <button class="btn-g-primary" style="background:var(--green)" onclick="COSY_ENGINE.hsResult(true)">✓</button>
                            <button class="btn-g-secondary" onclick="COSY_ENGINE.hsResult(false)">✗</button>
                        </div>
                    </div>`;
            };

            window.COSY_ENGINE.hsResult = (ok) => { if (ok) score++; nextQ(); };

            startTimer(60, (t) => {
                timeLeft = t;
                const el = document.getElementById('hs-timer');
                if (el) el.textContent = t;
            }, () => {
                active = false;
                body.innerHTML = `
                    <div class="round-end">
                        <div class="re-icon">🏆</div>
                        <div class="re-title">🏁</div>
                        <div class="re-sub">⭐ <strong>${score}</strong></div>
                        <div class="re-actions">
                            <button class="btn-g-primary" onclick="COSY_ENGINE.startHotSeat()">↺</button>
                            <button class="btn-g-secondary" onclick="closeGame()">⬅</button>
                        </div>
                    </div>`;
            });

            nextQ();
        },

        async startObjectQuest() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);
            const category = document.getElementById('s-cat')?.value || 'all';

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            const data = getGameData(lang, level);
            body = document.getElementById('go-body');

            let vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            if (vocab.length === 0 && lang !== 'en') {
                vocab = (window.vocabularyData && window.vocabularyData['en']) || [];
            }
            vocab = vocab.filter(v => window.getLevelCode(v.level) === level);

            const personKeywords = ['profession', 'job', 'people', 'person', 'nationality', 'famous'];
            let objects = vocab.filter(v => v.theme && !personKeywords.some(k => v.theme.toLowerCase().includes(k)));
            if (category !== 'all') {
                objects = objects.filter(v => v.theme && window.gameUtils.isThemeMatch(v.theme, category));
            }

            if (objects.length < 5) {
                renderNoContent('objectquest', lang, level);
                return;
            }

            let current = pick(objects), hints = 0;

            const renderQuest = () => {
                body.innerHTML = `
                    <div class="game-card">
                        <div class="game-label">📦 Your Object</div>
                        <div class="game-prompt" style="font-size:2rem">${current.word} ${current.emoji || ''}</div>
                        <div class="game-sub">Describe this to others. Give clues about size, color, or where it is found.</div>
                    </div>
                    <div class="game-card" id="hint-card" style="display:${hints > 0 ? 'block' : 'none'}">
                        <div class="game-label">💡 Help Clues</div>
                        <div id="hint-list" style="font-size:.9rem; line-height:1.6">
                            ${hints >= 1 ? `<div>• It starts with <strong>${current.word[0].toUpperCase()}</strong></div>` : ''}
                            ${hints >= 2 ? `<div>• It has <strong>${current.word.length}</strong> letters</div>` : ''}
                            ${hints >= 3 ? `<div>• Definition: <em>${current.definitions?.[0]?.text || '...'}</em></div>` : ''}
                        </div>
                    </div>
                    <div class="game-controls">
                        <button class="btn-g-primary" onclick="COSY_ENGINE.oqHint()">Give a hint</button>
                        <button class="btn-g-secondary" onclick="COSY_ENGINE.startObjectQuest()">Next object →</button>
                        <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('objectquest')">Setup</button>
                    </div>`;
            };

            window.COSY_ENGINE.oqHint = () => { hints++; renderQuest(); };
            renderQuest();
        },

        async startEmojiOdyssey() {
            const mode = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || 'guess';
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            let vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            if (vocab.length === 0 && lang !== 'en') {
                vocab = (window.vocabularyData && window.vocabularyData['en']) || [];
            }
            vocab = vocab.filter(v => window.getLevelCode(v.level) === level);

            if (mode === 'guess') {
                const pool = vocab.filter(v => v.emoji).slice(0, 20);
                if (pool.length < 4) {
                    renderNoContent('emoji', lang, level);
                    return;
                }

                let score = 0, current = pick(pool);

                const renderGuess = () => {
                    const options = shuffle([current.word, ...shuffle(vocab.filter(v => v.word !== current.word)).slice(0, 3).map(v => v.word)]);
                    body.innerHTML = `
                        <div class="score-bar"><div class="sb-item"><div class="sb-val">${score}</div><div class="sb-lbl">Score</div></div></div>
                        <div class="game-card" style="text-align:center">
                            <div class="game-label">🧩 What is this?</div>
                            <div class="game-prompt" style="font-size:5rem">${current.emoji}</div>
                            <div class="word-options" style="margin-top:1.5rem">
                                ${options.map(o => `<button class="word-opt" onclick="COSY_ENGINE.eoCheck(this,'${o}','${current.word}')">${o}</button>`).join('')}
                            </div>
                        </div>`;
                };

                window.COSY_ENGINE.eoCheck = (btn, val, correct) => {
                    if (val === correct) {
                        btn.classList.add('correct'); score++;
                        setTimeout(() => { current = pick(pool); renderGuess(); }, 1000);
                    } else {
                        btn.classList.add('wrong');
                    }
                };
                renderGuess();
            } else {
                const emojis = (window.emojiData || ['🍎','🐶','🚗','🏠','⭐','🍕','✈️','⚽']);
                const nextSet = () => {
                    const picked = shuffle(emojis).slice(0, 4);
                    body.innerHTML = `
                        <div class="game-card" style="text-align:center">
                            <div class="game-label">📖 Tell a story using:</div>
                            <div class="game-prompt" style="font-size:3.5rem; letter-spacing:10px;">${picked.join('')}</div>
                            <div class="game-sub" style="margin-top:1rem">Build the next part of the story with these symbols!</div>
                            <div class="game-controls" style="justify-content:center; margin-top:2rem">
                                <button class="btn-g-primary" onclick="COSY_ENGINE.eoNextSet()">Next player →</button>
                                <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('emoji')">End Story</button>
                            </div>
                        </div>`;
                };
                window.COSY_ENGINE.eoNextSet = nextSet;
                nextSet();
            }
        },

        async startCrossword() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            body = document.getElementById('go-body');
            body.innerHTML = `
                <div class="game-card" style="text-align:center">
                    <div class="game-label">🧩 Dynamic Puzzle</div>
                    <div id="crossword-grid-container" style="margin: 1.5rem 0; overflow-x:auto;"></div>
                    <div class="game-prompt" id="crossword-clue-display" style="font-size:1rem; border-top:1px solid var(--border); padding-top:1rem">Click a cell to start</div>
                    <div class="game-controls" style="margin-top:1.5rem; justify-content:center">
                        <button class="btn-g-primary" onclick="COSY_ENGINE.cwCheck()">Check Grid</button>
                        <button class="btn-g-secondary" onclick="COSY_ENGINE.startCrossword()">New Grid ↺</button>
                    </div>
                </div>
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:10px; margin-top:1rem">
                    <div class="game-card" style="padding:1rem">
                        <div class="game-label">Across</div>
                        <div id="cw-clues-across" style="font-size:.8rem; text-align:left"></div>
                    </div>
                    <div class="game-card" style="padding:1rem">
                        <div class="game-label">Down</div>
                        <div id="cw-clues-down" style="font-size:.8rem; text-align:left"></div>
                    </div>
                </div>`;

            if (window.crosswordGame) {
                const code = lang;

                // We need to inject minimal necessary crossword logic or trigger existing one
                // For now, let's assume we use the existing window.crosswordGame but need to point it to these IDs
                // In a real refactor, crossword.js would be more modular.
                // Re-running start logic:
                const CrosswordGame = window.crosswordGame.engine || window.CrosswordGame;
                if (CrosswordGame) {
                    CrosswordGame.init(code, level, 'all');
                    CrosswordGame.render('crossword-grid-container');
                    window.COSY_ENGINE.cwCheck = () => {
                        const { allCorrect, percent } = CrosswordGame.check();
                        showFB(body, allCorrect ? 'ok' : 'bad', allCorrect ? 'Perfect! Grid complete.' : `Keep going! ${percent}% correct.`);
                    };
                }
            }
        },

        async startBingo() {
            const role = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || 'player';
            const body = document.getElementById('go-body');
            const type = document.getElementById('s-type')?.value || 'Bingo 1 (0-9)';
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);
            await loadLevelData(lang, level);

            const isListening = type.includes('Listening');

            if (role === 'caller') {
                body.innerHTML = `
                    <div class="game-card" style="text-align:center">
                        <div class="game-label">📣 Lucky Caller</div>
                        <div class="game-prompt" id="bingo-call" style="font-size:5rem">${isListening ? '👂' : '---'}</div>
                        <div class="game-sub" id="bingo-call-word">Get ready to call!</div>
                        <div class="game-controls" style="justify-content:center; margin-top:2rem">
                            <button class="btn-g-primary" onclick="COSY_ENGINE.bingoNext()">Next Item 🎲</button>
                            <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('bingo')">Stop</button>
                        </div>
                        <div id="bingo-history" style="margin-top:1.5rem; font-size:.8rem; opacity:.6; word-wrap:break-word"></div>
                    </div>`;

                let pool = [];
                if (type.includes('Alphabet')) {
                    const alpha = (window.alphabetsData && window.alphabetsData[lang]) ? window.alphabetsData[lang].split('') : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
                    pool = shuffle(alpha);
                } else if (type.includes('Bingo 1')) {
                    pool = shuffle(Array.from({length: 10}, (_, i) => i));
                } else if (type.includes('Bingo 2')) {
                    pool = shuffle(Array.from({length: 10}, (_, i) => i + 10));
                } else if (type.includes('Bingo 3')) {
                    pool = shuffle(Array.from({length: 80}, (_, i) => i + 20));
                } else {
                    pool = shuffle(Array.from({length: 100}, (_, i) => i));
                }

                window.COSY_ENGINE.bingoNext = () => {
                    if (!pool.length) {
                        document.getElementById('bingo-call-word').textContent = 'Pool empty!';
                        return;
                    }
                    const item = pool.pop();
                    const callEl = document.getElementById('bingo-call');
                    if (isListening) {
                        callEl.textContent = '👂';
                        callEl.onclick = () => { callEl.textContent = item; };
                        callEl.style.cursor = 'pointer';
                    } else {
                        callEl.textContent = item;
                    }
                    const hist = document.getElementById('bingo-history');
                    hist.textContent = (hist.textContent ? hist.textContent + ', ' : '') + item;
                    if (window.gameUtils?.speak) window.gameUtils.speak(item.toString(), lang);
                };
            } else {
                body.innerHTML = `
                    <div class="game-card" style="text-align:center">
                        <div class="game-label">🃏 Your Bingo Card</div>
                        <div id="bingo-grid" class="bingo-grid" style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin:1.5rem 0"></div>
                        <div class="game-controls" style="justify-content:center">
                            <button class="btn-g-secondary" onclick="COSY_ENGINE.startBingo()">New Card ↺</button>
                        </div>
                    </div>`;

                const grid = document.getElementById('bingo-grid');
                let pool = [];
                if (type.includes('Alphabet')) {
                    pool = (window.alphabetsData && window.alphabetsData[lang]) ? window.alphabetsData[lang].split('') : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
                } else if (type.includes('Bingo 1')) {
                    pool = Array.from({length: 10}, (_, i) => i);
                } else if (type.includes('Bingo 2')) {
                    pool = Array.from({length: 10}, (_, i) => i + 10);
                } else if (type.includes('Bingo 3')) {
                    pool = Array.from({length: 80}, (_, i) => i + 20);
                } else {
                    pool = Array.from({length: 100}, (_, i) => i);
                }

                let nums = shuffle(pool).slice(0, 9);
                if (!type.includes('Alphabet')) nums.sort((a, b) => a - b);

                nums.forEach(n => {
                    const cell = document.createElement('div');
                    cell.className = 'word-opt';
                    cell.style.textAlign = 'center';
                    cell.style.fontSize = '1.2rem';
                    cell.textContent = n;
                    cell.onclick = () => cell.classList.toggle('correct');
                    grid.appendChild(cell);
                });
            }
        },

        async startEtymology() {
            const lang = getLangCode(document.getElementById('s-lang')?.value);
            const level = getLevelCode(document.getElementById('s-level')?.value);

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            await loadLevelData(lang, level);
            const data = getGameData(lang, level);

            // Etymology data often doesn't have levels, but if it does, filter it.
            const pool = (data.etymology || []).filter(item => !item.level || window.getLevelCode(item.level) === level || item.level === 'easy' || item.level === 'medium' || item.level === 'hard');
            body = document.getElementById('go-body');

            if (pool.length === 0) {
                renderNoContent('etymology', lang, level);
                return;
            }

            let idx = 0, score = 0;
            const words = shuffle(pool);

            const showEtym = () => {
                if (idx >= words.length) {
                    body.innerHTML = `
                        <div class="round-end">
                            <div class="re-icon">🏆</div>
                            <div class="re-title">${gl('round_over', lang)}</div>
                            <div class="re-sub">${gl('score', lang)}: <strong>${score}</strong></div>
                            <button class="btn-g-primary" onclick="COSY_ENGINE.startEtymology()">${gl('play_again', lang)} ↺</button>
                        </div>`;
                    return;
                }
                const item = words[idx];
                body.innerHTML = `
                    <div class="score-bar"><div class="sb-item"><div class="sb-val">${score}</div><div class="sb-lbl">${gl('score', lang)}</div></div></div>
                    <div class="game-card">
                        <div class="game-label">📜</div>
                        <div class="game-prompt" style="font-size:2.5rem">${item.word}</div>
                        <div class="game-sub">${gl('where_does_this_come_from', lang)}</div>
                        <div class="word-options" style="margin-top:1.5rem">
                            ${item.options.map(o => `<button class="word-opt" onclick="COSY_ENGINE.etCheck(this,'${o}','${item.answer}','${item.path.replace(/'/g,"\\'")}')">${o}</button>`).join('')}
                        </div>
                        <div class="feedback-bar" id="et-fb"></div>
                        <div class="game-controls">
                            <button class="btn-g-primary" id="et-next" style="display:none" onclick="COSY_ENGINE._nextEt()">➔</button>
                            <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('etymology')">⚙️</button>
                        </div>
                    </div>`;
                window.COSY_ENGINE._nextEt = () => { idx++; showEtym(); };
            };

            window.COSY_ENGINE.etCheck = (btn, val, ans, path) => {
                const fb = document.getElementById('et-fb');
                document.querySelectorAll('.word-opt').forEach(b => b.disabled = true);
                if (val === ans) {
                    btn.classList.add('correct');
                    score++;
                    showFB(fb, 'ok', `✓ Correct! ${path}`);
                } else {
                    btn.classList.add('wrong');
                    document.querySelectorAll('.word-opt').forEach(b => { if (b.textContent === ans) b.classList.add('correct'); });
                    showFB(fb, 'bad', `✗ Not quite. It's from ${ans}. ${path}`);
                }
                document.getElementById('et-next').style.display = 'inline-block';
            };

            showEtym();
        },

        async loadGenderData(level) {
            const map = {
                starter: 'a1',
                elementary: 'a2',
                intermediate: 'b1',
                upper_intermediate: 'b2',
                advanced: 'c1',
                proficiency: 'c2'
            };
            const file = map[level] || 'a1';
            if (window.genderGameData && window.genderGameData[level]) {
                return window.genderGameData[level];
            }
            return new Promise((resolve) => {
                const script = document.createElement('script');
                const prefix = window.location.pathname.includes('/what_gender_is_it/') ? '../' : '';
                script.src = `${prefix}data/gender/${file}.js`;
                script.onload = () => {
                    resolve(window.genderGameData ? window.genderGameData[level] : []);
                };
                script.onerror = () => {
                    console.error("Failed to load gender data file:", script.src);
                    resolve([]);
                };
                document.head.appendChild(script);
            });
        },

        async startGender() {
            const level = getLevelCode(document.getElementById('s-level')?.value);
            const langVal = document.getElementById('s-lang')?.value || 'all';

            let body = document.getElementById('go-body');
            if (body) body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:200px;"><div class="loading-spinner"></div></div>';

            const dataset = await COSY_ENGINE.loadGenderData(level);
            if (!dataset || dataset.length === 0) {
                renderNoContent('gender', langVal, level);
                return;
            }

            body = document.getElementById('go-body');
            const maxRounds = Math.min(10, dataset.length);
            let questionCount = 0;
            let sessionScore = 0;
            const shuffledConcepts = shuffle(dataset);

            const GENDER_LANGUAGES = [
                { code: 'fr', native: 'French 🇫🇷' },
                { code: 'es', native: 'Spanish 🇪🇸' },
                { code: 'it', native: 'Italian 🇮🇹' },
                { code: 'de', native: 'German 🇩🇪' },
                { code: 'ru', native: 'Russian 🇷🇺' },
                { code: 'el', native: 'Greek 🇬🇷' },
                { code: 'br', native: 'Breton ⛵' }
            ];
            const NEUTER_LANGUAGES = ['de', 'ru', 'el'];

            const showQuestion = () => {
                if (questionCount >= maxRounds) {
                    showEnd();
                    return;
                }

                const conceptObj = shuffledConcepts[questionCount];
                questionCount++;

                let targetLangCode = langVal;
                if (langVal === 'all') {
                    const availableLangs = Object.keys(conceptObj.translations);
                    targetLangCode = availableLangs[Math.floor(Math.random() * availableLangs.length)];
                }

                const trans = conceptObj.translations[targetLangCode];
                const hasNeuter = NEUTER_LANGUAGES.includes(targetLangCode);
                const targetLangObj = GENDER_LANGUAGES.find(l => l.code === targetLangCode);
                const targetLangName = targetLangObj ? targetLangObj.native : targetLangCode.toUpperCase();

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="gender-score">${sessionScore}</div><div class="sb-lbl">⭐</div></div>
                    <div class="sb-item"><div class="sb-val">${questionCount}/${maxRounds}</div><div class="sb-lbl">🧩</div></div>
                  </div>
                  <div class="game-card" style="text-align: center;">
                    <div class="game-label" style="font-size: 1.25rem; font-weight: 700; color: var(--teal); margin-bottom: 0.5rem;">
                        <strong>${targetLangName}</strong> 🌐 ➔ ♂️ / ♀️ / ⚧️ ?
                    </div>
                    <div class="concept-emoji" style="font-size: 4rem; margin: 1.5rem 0 0.5rem 0;">
                        ${conceptObj.emoji || '🧩'}
                    </div>
                    <div class="gender-word" style="font-size: 2.2rem; font-weight: 800; color: var(--ink); margin: .75rem 0; font-family: 'Fraunces', serif; text-align: center;">
                        ${trans.article ? `<span style="font-size: 1.2rem; color: var(--ink-faint); font-weight: 400; font-family: 'DM Sans', sans-serif; margin-right: 6px;">(${trans.article})</span>` : ''}${trans.word}
                    </div>

                    <div class="gender-options" style="display:flex; gap:10px; justify-content:center; margin:1rem 0;">
                        <button class="btn-gender masculine-btn" data-gender="masculine" style="padding:10px 20px; font-weight:700; border-radius:20px; cursor:pointer; border:2px solid var(--border); background:white;">♂️</button>
                        <button class="btn-gender feminine-btn" data-gender="feminine" style="padding:10px 20px; font-weight:700; border-radius:20px; cursor:pointer; border:2px solid var(--border); background:white;">♀️</button>
                        ${hasNeuter ? `<button class="btn-gender neuter-btn" data-gender="neuter" style="padding:10px 20px; font-weight:700; border-radius:20px; cursor:pointer; border:2px solid var(--border); background:white;">⚧️</button>` : ''}
                    </div>

                    <div class="feedback-bar" id="gender-fb"></div>

                    <!-- Explanations & Reveals (initially hidden) -->
                    <div id="reveal-area" style="display:none; text-align:left;">
                        <div style="font-size: 1.1rem; font-weight: 700; color: var(--ink-muted); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em;">🧩: ${conceptObj.concept}</div>
                        <div class="why-container" style="background:#f7fafc; border-left:4px solid var(--teal); padding:10px; border-radius:4px; margin-top:1rem;">
                            <div class="why-title" style="font-size:.75rem; font-weight:800; text-transform:uppercase; color:var(--teal); margin-bottom:4px; letter-spacing:.05em;">💡</div>
                            <div class="why-text" style="font-size:.85rem; line-height:1.4; color:var(--ink);">${conceptObj.explanation}</div>
                        </div>

                        <div style="font-size: .75rem; font-weight: 800; text-transform: uppercase; color: var(--ink-muted); margin-top: 1rem; text-align: left; letter-spacing: 0.05em;">🌐:</div>
                        <div class="gender-grid-reveal" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 8px; margin-top: 8px; border-top: 1px dashed var(--border); padding-top: 8px;">
                            ${Object.entries(conceptObj.translations).map(([lang, info]) => {
                                const lObj = GENDER_LANGUAGES.find(l => l.code === lang);
                                const lName = lObj ? lObj.native.split(' ')[0] : lang.toUpperCase();
                                const lEmoji = lObj ? lObj.native.split(' ').slice(-1)[0] : '🌐';
                                let tagClass = '';
                                if (info.gender === 'masculine') tagClass = 'background:#ebf8ff; color:#2b6cb0;';
                                else if (info.gender === 'feminine') tagClass = 'background:#fff5f7; color:#b83280;';
                                else if (info.gender === 'neuter') tagClass = 'background:#fffaf0; color:#c05621;';
                                else tagClass = 'background:#f0fff4; color:#22543d;';

                                return `
                                    <div class="reveal-lang-card" style="background:var(--tan-light); border:1px solid var(--border); padding:6px; border-radius:6px; font-size:.75rem; text-align:center;">
                                        <div class="reveal-lang-name" style="font-weight:700; font-size:.65rem; color:var(--ink-muted); margin-bottom:2px;">${lEmoji} ${lName}</div>
                                        <div class="reveal-lang-word" style="font-family:'Fraunces',serif; font-weight:600; font-size:.85rem; color:var(--ink);">${info.article ? info.article + ' ' : ''}${info.word}</div>
                                        <div class="reveal-lang-gender" style="font-size:.65rem; font-weight:700; margin-top:2px; padding:1px 4px; border-radius:8px; display:inline-block; ${tagClass}">${info.gender === 'masculine' ? '♂️' : info.gender === 'feminine' ? '♀️' : info.gender === 'neuter' ? '⚧️' : '⚖️ both'} ${info.gender}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <div class="game-controls" style="margin-top: 1rem; display:flex; gap:10px; justify-content:center;">
                      <button class="btn-g-primary" id="gender-next" style="display:none">Next Concept →</button>
                      <button class="btn-g-danger" id="gender-reset">⬅ Exit</button>
                    </div>
                  </div>`;

                // Add styling details dynamically for inline styles to avoid breaking layout
                const styleEl = document.createElement('style');
                styleEl.innerHTML = `
                    .btn-gender {
                        font-family: 'DM Sans', sans-serif;
                        font-weight: 700;
                        padding: 12px 24px !important;
                        border-radius: 100px !important;
                        cursor: pointer;
                        border: 2px solid var(--border);
                        background: #fff;
                        transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
                        box-shadow: 0 2px 5px rgba(0,0,0,0.03);
                    }
                    .btn-gender:hover:not(:disabled) {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    }
                    .btn-gender:active:not(:disabled) {
                        transform: translateY(1px);
                    }

                    .masculine-btn { border-color: #3182ce !important; color: #2b6cb0 !important; }
                    .masculine-btn:hover:not(:disabled) { background: #ebf8ff !important; border-color: #2b6cb0 !important; }
                    .masculine-btn.correct-choice { background: #3182ce !important; color: white !important; border-color: #2b6cb0 !important; box-shadow: 0 4px 14px rgba(49, 130, 206, 0.35) !important; }

                    .feminine-btn { border-color: #d53f8c !important; color: #b83280 !important; }
                    .feminine-btn:hover:not(:disabled) { background: #fff5f7 !important; border-color: #b83280 !important; }
                    .feminine-btn.correct-choice { background: #d53f8c !important; color: white !important; border-color: #b83280 !important; box-shadow: 0 4px 14px rgba(213, 63, 140, 0.35) !important; }

                    .neuter-btn { border-color: #dd6b20 !important; color: #c05621 !important; }
                    .neuter-btn:hover:not(:disabled) { background: #fffaf0 !important; border-color: #c05621 !important; }
                    .neuter-btn.correct-choice { background: #dd6b20 !important; color: white !important; border-color: #c05621 !important; box-shadow: 0 4px 14px rgba(221, 107, 32, 0.35) !important; }

                    .wrong-choice { background: #fee2e2 !important; border-color: #ef4444 !important; color: #991b1b !important; text-decoration: line-through !important; opacity: 0.8; box-shadow: none !important; }
                `;
                body.appendChild(styleEl);

                const optButtons = body.querySelectorAll('.btn-gender');
                optButtons.forEach(btn => {
                    btn.addEventListener('click', () => {
                        optButtons.forEach(b => b.disabled = true);
                        const clickedGender = btn.dataset.gender;
                        const isCorrect = (clickedGender === trans.gender) || (trans.gender === 'both');

                        const fb = document.getElementById('gender-fb');
                        const nextBtn = document.getElementById('gender-next');
                        const revealArea = document.getElementById('reveal-area');

                        if (nextBtn) nextBtn.style.display = 'inline-block';
                        if (revealArea) revealArea.style.display = 'block';

                        if (isCorrect) {
                            btn.classList.add('correct-choice');
                            if (fb) {
                                fb.className = 'feedback-bar show ok';
                                fb.innerHTML = `✓ <strong>${trans.word}</strong> ➔ <strong>${trans.gender === 'masculine' ? '♂️' : trans.gender === 'feminine' ? '♀️' : '⚧️'}</strong>`;
                            }
                            sessionScore += 10;
                            document.getElementById('gender-score').textContent = sessionScore;
                        } else {
                            btn.classList.add('wrong-choice');
                            optButtons.forEach(b => {
                                if (b.dataset.gender === trans.gender) {
                                    b.classList.add('correct-choice');
                                }
                            });
                            if (fb) {
                                fb.className = 'feedback-bar show bad';
                                fb.innerHTML = `✗ <strong>${trans.word}</strong> ➔ <strong>${trans.gender === 'masculine' ? '♂️' : trans.gender === 'feminine' ? '♀️' : '⚧️'}</strong>`;
                            }
                        }
                    });
                });

                document.getElementById('gender-next').onclick = showQuestion;
                document.getElementById('gender-reset').onclick = () => {
                    COSY_ENGINE.renderSetup('gender');
                };
            };

            const showEnd = () => {
                let rankTitle = "🌱";
                if (sessionScore >= 90) {
                    rankTitle = "🧠🎓";
                } else if (sessionScore >= 70) {
                    rankTitle = "🏆";
                } else if (sessionScore >= 40) {
                    rankTitle = "⚖️";
                }

                body.innerHTML = `
                    <div class="setup-screen" style="text-align:center;">
                      <h2>🎓 ${gl('complete', lang)}</h2>
                      <div class="final-score" style="font-size: 2.5rem; font-weight: 800; color: var(--teal); margin: 0.5rem 0;">${sessionScore} / ${maxRounds * 10}</div>
                      <div style="font-size: 2.2rem; font-weight: 700; color: var(--coral); margin-bottom: 1.5rem;">${rankTitle}</div>
                      <div style="display:flex; gap:10px; justify-content:center;">
                        <button class="btn-g-primary" onclick="COSY_ENGINE.startGender()">${gl('play_again', lang)} ↺</button>
                        <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('gender')">⚙️</button>
                      </div>
                    </div>`;
            };

            showQuestion();
        },

        renderSetup: renderSetup
    };

    /* ══════════════════════════════════════
       BOOT
    ══════════════════════════════════════ */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            window.closeGame();
            return;
        }

        if (e.key === 'Enter') {
            const overlay = document.getElementById('game-overlay');
            if (overlay && overlay.classList.contains('open')) {
                // If focused on an input or textarea, let it handle itself
                const active = document.activeElement;
                if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) {
                    // But if it's crossword cell inputs, Enter should check/submit!
                    if (active.classList.contains('cw-input')) {
                        // Handled by crossword keydown
                        return;
                    }
                    return;
                }

                // Find primary action buttons in order of priority
                const priorities = [
                    '#ff-btn', '#op-start', '#cc-btn', '#wl-next', '#et-next',
                    '.btn-start-game', '.btn-g-primary', '#pe-bb-btn', '.pe-bb-action-btn'
                ];

                for (const selector of priorities) {
                    const btn = overlay.querySelector(selector);
                    if (btn && btn.offsetParent !== null && !btn.disabled) {
                        e.preventDefault();
                        btn.click();
                        return;
                    }
                }
            }
        }
    });

    window.addEventListener('load', () => {
        const params = new URLSearchParams(window.location.search);
        const urlGame = params.get('game');
        const lang = params.get('lang');

        if (lang) {
            const l = window.getLangCode(lang);
            // We can't easily pre-select lang in the setup screen without more refactoring
            // but we can ensure it's loaded.
            window.gameUtils.loadLevelData(l, 'starter');
        }

        if (urlGame && GAME_META[urlGame]) {
            window.openGame(urlGame);
        }
    });

})();
