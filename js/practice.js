/**
 * COSYlanguages — practice.js
 * Extracted from the sophisticated new design.
 */

(function() {
    /* ══════════════════════════════════════
       STATE (persisted in localStorage)
    ══════════════════════════════════════ */
    function loadState() {
      try {
          const s = JSON.parse(localStorage.getItem('cosy_practice') || '{}');
          // Sync with global keys
          s.totalPts = parseInt(localStorage.getItem('cosy_total_points') || '0');
          s.streak = parseInt(localStorage.getItem('practice_streak') || '0');
          return s;
      } catch { return {}; }
    }
    function saveState(s) {
        localStorage.setItem('cosy_practice', JSON.stringify(s));
        // Sync with global keys
        localStorage.setItem('cosy_total_points', s.totalPts);
        localStorage.setItem('practice_streak', s.streak);
    }

    let STATE = loadState();
    if (!STATE.totalPts)     STATE.totalPts     = 0;
    if (!STATE.streak)       STATE.streak       = 0;
    if (!STATE.lastDate)     STATE.lastDate     = '';
    if (!STATE.todayCorrect) STATE.todayCorrect = 0;
    if (!STATE.sessions)     STATE.sessions     = 0;
    if (!STATE.mistakes)     STATE.mistakes     = [];
    if (!STATE.history)      STATE.history      = [];
    if (!STATE.dcDone)       STATE.dcDone       = '';

    const todayStr = new Date().toISOString().split('T')[0];
    if (STATE.lastDate !== todayStr) {
      const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
      const yStr = yesterday.toISOString().split('T')[0];
      // If we missed a day, streak is NOT reset here but handled by global streak logic if needed
      // Actually practice.js had its own streak logic. Let's align it.
      if (STATE.lastDate !== yStr && STATE.lastDate !== '') {
          STATE.streak = 0;
          localStorage.setItem('practice_streak', '0');
      }
      STATE.todayCorrect = 0;
    }
    saveState(STATE);

    /* ══════════════════════════════════════
       QUESTION DATA
    ══════════════════════════════════════ */
    const QUESTIONS = {
      EN: {
        Vocabulary: [
          { type:'mc', q:'What does "sibling" mean?', opts:['A brother or sister','A parent','A cousin','A friend'], ans:0, level:'A2', theme:'Family' },
          { type:'mc', q:'Which word means the opposite of "ancient"?', opts:['Modern','Old','Historic','Antique'], ans:0, level:'B1', theme:'Arts & Culture' },
          { type:'tf', q:'"Ubiquitous" means extremely rare.', ans:false, level:'C1', theme:'Daily Life' },
          { type:'mc', q:'What is a "commute"?', opts:['Daily travel to work','A type of food','A holiday','A meeting'], ans:0, level:'B1', theme:'Work & Career' },
          { type:'type', q:'Type the missing word: "She _____ to the doctor yesterday." (go, past)', ans:'went', level:'A2', theme:'Daily Life' },
          { type:'mc', q:'What does "frugal" mean?', opts:['Careful with money','Very generous','Extremely happy','Loud and energetic'], ans:0, level:'B2', theme:'Daily Life' },
          { type:'tf', q:'"Lethargic" means full of energy and enthusiasm.', ans:false, level:'C1', theme:'Health & Body' },
          { type:'mc', q:'Choose the word for someone who designs buildings:', opts:['Architect','Accountant','Surgeon','Pilot'], ans:0, level:'A2', theme:'Work & Career' },
          { type:'type', q:'Type the plural of "child":', ans:'children', level:'A1', theme:'Family' },
          { type:'mc', q:'What does "procrastinate" mean?', opts:['To delay doing something','To do something quickly','To forget something','To celebrate something'], ans:0, level:'B2', theme:'Daily Life' },
        ],
        Grammar: [
          { type:'mc', q:'Choose the correct sentence:', opts:['She don\'t like coffee.','She doesn\'t like coffee.','She not like coffee.','She isn\'t like coffee.'], ans:1, level:'A2', theme:'Tenses' },
          { type:'tf', q:'"I have been living here for 3 years" uses the present perfect continuous.', ans:true, level:'B1', theme:'Tenses' },
          { type:'mc', q:'Which is correct?', opts:['If I would have money, I buy it.','If I had money, I would buy it.','If I have money, I would buy it.','If I had money, I will buy it.'], ans:1, level:'B2', theme:'Tenses' },
          { type:'type', q:'Fill in: "By next year, I _____ (study) English for five years." (future perfect)', ans:'will have studied', level:'C1', theme:'Tenses' },
          { type:'mc', q:'Choose the correct passive form: "The letter _____ yesterday."', opts:['was sent','is sent','sent','has send'], ans:0, level:'B1', theme:'Tenses' },
          { type:'tf', q:'"Much" is used with countable nouns.', ans:false, level:'A2', theme:'Daily Life' },
          { type:'mc', q:'Which sentence uses a relative clause correctly?', opts:['The man who lives next door is friendly.','The man which lives next door is friendly.','The man what lives next door is friendly.','The man where lives next door is friendly.'], ans:0, level:'B1', theme:'Daily Life' },
        ],
        Speaking: [
          { type:'conv', q:'Describe your ideal holiday destination and what you would do there.', level:'B1', theme:'Conversation' },
          { type:'conv', q:'Talk about a skill you would like to learn and why.', level:'A2', theme:'Conversation' },
          { type:'conv', q:'Describe a typical day in your life using as much detail as possible.', level:'A2', theme:'Daily Life' },
          { type:'conv', q:'What do you think is the most important invention of the last 100 years? Why?', level:'B2', theme:'Conversation' },
          { type:'conv', q:'Describe a person who has had a big influence on your life.', level:'B1', theme:'Conversation' },
        ]
      },
      FR: {
        Vocabulary: [
          { type:'mc', q:'Que signifie "quotidien" ?', opts:['De tous les jours','Rare','Surprenant','Ennuyeux'], ans:0, level:'A2', theme:'Daily Life' },
          { type:'tf', q:'"Un frère" means "a sister" in French.', ans:false, level:'A1', theme:'Family' },
          { type:'mc', q:'Quel mot signifie "travail" ?', opts:['Travail','Voyage','Table','Terrain'], ans:0, level:'A1', theme:'Work & Career' },
        ]
      },
      IT: {
        Vocabulary: [
          { type:'mc', q:'Cosa significa "famiglia"?', opts:['Family','Friend','Stranger','Neighbour'], ans:0, level:'A1', theme:'Family' },
          { type:'tf', q:'"Buongiorno" is a greeting used in the morning.', ans:true, level:'A1', theme:'Greetings' },
        ]
      }
    };

    function getQuestions(lang, cat, level, theme) {
      const pool = (QUESTIONS[lang] && QUESTIONS[lang][cat]) || QUESTIONS['EN']['Vocabulary'];
      return pool.filter(q => (level === 'all' || q.level === level) && (theme === 'all' || q.theme === theme));
    }

    /* ══════════════════════════════════════
       SETUP UI STATE
    ══════════════════════════════════════ */
    let selectedLang = 'EN';
    let selectedCat  = 'Vocabulary';

    function selectLang(el) {
      document.querySelectorAll('.lang-pill').forEach(p => p.classList.remove('active'));
      el.classList.add('active');
      selectedLang = el.dataset.value.toUpperCase();
    }
    window.selectLang = selectLang;

    function selectCat(el) {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      el.classList.add('active');
      selectedCat = el.textContent.split(' ')[1]; // Extract name from "📖 Vocabulary"
    }
    window.selectCat = selectCat;

    /* ══════════════════════════════════════
       DATA LOADING
    ══════════════════════════════════════ */
    async function ensureDataLoaded(lang, level) {
        const familyMap = {
            'EN': 'germanic', 'DE': 'germanic',
            'FR': 'romance', 'IT': 'romance', 'ES': 'romance', 'PT': 'romance',
            'RU': 'slavic',
            'EL': 'hellenic',
            'HY': 'armenian',
            'KA': 'kartvelian',
            'TT': 'turkic',
            'BA': 'turkic',
            'BR': 'celtic'
        };
        const family = familyMap[lang];
        if (!family) return;

        // Construct correct level segment for path
        const levelPath = (level === 'all' || !level) ? 'starter' : level;

        const files = ['vocabulary.js', 'verbs.js', 'adjectives.js', 'grammar_elements.js', 'dishes.js', 'speaking.js', 'locations.js', 'people.js'];
        const promises = files.map(file => {
            const path = `../js/data/${family}/${lang.toLowerCase()}/${levelPath}/${file}`;
            if (document.querySelector(`script[src*="${path}"]`)) return Promise.resolve();

            return new Promise(res => {
                const s = document.createElement('script');
                s.src = path;
                s.onload = res;
                s.onerror = res; // Still resolve to not block
                document.head.appendChild(s);
            });
        });

        // Also load curriculum data for pronunciation
        const currKey = `${lang.toLowerCase()}_${levelPath === 'starter' ? 'a1' : (levelPath === 'elementary' ? 'a2' : levelPath)}`;
        const currPath = `../js/data/curriculum/${currKey}.js`;
        if (!document.querySelector(`script[src*="${currPath}"]`)) {
            promises.push(new Promise(res => {
                const s = document.createElement('script');
                s.src = currPath;
                s.onload = res;
                s.onerror = res;
                document.head.appendChild(s);
            }));
        }

        await Promise.all(promises);
        // Small delay to ensure script body execution and window export
        await new Promise(res => setTimeout(res, 1000));
    }

    /* ══════════════════════════════════════
       SESSION ENGINE
    ══════════════════════════════════════ */
    window.SESSION = null;

    async function startPractice() {
      const level = document.getElementById('practice-level').value;
      const theme = document.getElementById('practice-theme').value;

      const startBtn = document.getElementById('start-btn');
      if (startBtn) {
          startBtn.disabled = true;
          startBtn.textContent = 'Loading... ⏳';
      }

      await ensureDataLoaded(selectedLang, level);

      if (startBtn) {
          startBtn.disabled = false;
          startBtn.textContent = '▶ Start practice';
      }

      beginSession(selectedLang, selectedCat, level, theme, false);
    }
    window.startPractice = startPractice;

    function beginSession(lang, cat, level, theme, isChallenge) {
      let pool = [];
      const l = lang.toLowerCase();

      if (cat === 'Vocabulary') {
          pool = window.gameUtils.getVocabPool(l, level, theme);
      } else if (cat === 'Grammar') {
          // Fallback to static for grammar if no data
          pool = (QUESTIONS[lang] && QUESTIONS[lang]['Grammar']) || [];
          if (level !== 'all') pool = pool.filter(q => q.level === level);
          if (theme !== 'all') pool = pool.filter(q => q.theme === theme);
      } else if (cat === 'Speaking') {
          const speakingData = window.speakingData?.[l]?.talkThatTalk || [];
          pool = speakingData.filter(d => (level === 'all' || d.level === level) && (theme === 'all' || d.theme === theme));
      } else if (cat === 'Pronunciation') {
          const currKey = `${l}_${level === 'starter' || level === 'all' ? 'a1' : (level === 'elementary' ? 'a2' : level)}`;
          const currData = window.curriculumData?.[currKey] || [];
          currData.forEach(unit => {
              (unit.lessons || []).forEach(lesson => {
                  if (lesson.pronunciation) {
                      lesson.pronunciation.forEach(p => {
                          if (theme === 'all' || p.point === theme) {
                              pool.push(...(p.examples || []).map(ex => ({ ...ex, theme: p.point, type: 'ls' })));
                              pool.push(...(p.alphabet || []).map(a => ({ word: a.l, ipa: a.ipa, theme: p.point, type: 'ls' })));
                          }
                      });
                  }
              });
          });
      }

      // Read active task types from UI
      let activeTypes = Array.from(document.querySelectorAll('.task-toggle.active')).map(t => t.dataset.task);
      if (activeTypes.length === 0) activeTypes = ['mc', 'tf'];

      // If pool is empty, try default questions
      let qs = [];
      if (pool.length > 0) {
          qs = pool.map(item => {
              // Convert dynamic item to question format
              if (cat === 'Vocabulary') {
                  let type = activeTypes[Math.floor(Math.random() * activeTypes.length)];

                  // Validation for specific types
                  if (type === 'op' && !item.opposite) type = 'mc';
                  if (type === 'sc' && (!item.examples || item.examples.length === 0)) type = 'mc';
                  if (type === 'np' && !item.plural) type = 'mc';
                  if (type === 'cv' && !item.word) type = 'mc';

                  let qText, ans, opts = null;

                  if (type === 'mc' || type === 'ls') {
                      qText = type === 'ls' ? 'Listen and select the correct word:' : `What does "${item.word}" mean?`;
                      ans = 0; // index in opts, will be randomized in render
                      opts = [item.definitions?.[0]?.text || 'Correct definition', 'Wrong option 1', 'Wrong option 2'];
                      if (type === 'ls') {
                          qText = 'Listen and select the correct meaning:';
                      }
                  } else if (type === 'tf') {
                      const isTrue = Math.random() > 0.5;
                      const displayDef = isTrue ?
                          (item.definitions?.[0]?.text || "the correct meaning") :
                          "something else entirely";
                      qText = `"${item.word}" means "${displayDef}".`;
                      ans = isTrue;
                  } else if (type === 'op') {
                      qText = `What is the opposite of "${item.word}"?`;
                      ans = item.opposite;
                  } else if (type === 'sc') {
                      const ex = item.examples[Math.floor(Math.random() * item.examples.length)];
                      qText = `Scramble: ${ex.translation || 'Translate and arrange'}`;
                      ans = ex.text;
                  } else if (type === 'np') {
                      qText = `What is the plural of "${item.word}"?`;
                      ans = item.plural;
                  } else if (type === 'cv') {
                      qText = `Speak about: "${item.word}"`;
                  } else {
                      qText = `Type the word for: "${item.definitions?.[0]?.text || item.word}"`;
                      ans = item.word;
                  }

                  return {
                      type,
                      q: qText,
                      item: item, // store original item
                      ans,
                      opts,
                      level: item.level,
                      theme: item.theme
                  };
              } else if (cat === 'Speaking') {
                  return { type: 'conv', q: item.topic || item.text, level: item.level, theme: item.theme };
              } else if (cat === 'Pronunciation') {
                  const correctIpa = item.ipa;
                  const distractors = ['/a/', '/i/', '/u/', '/e/', '/o/'].filter(i => i !== correctIpa).sort(() => Math.random() - 0.5).slice(0, 2);
                  const opts = [correctIpa, ...distractors].sort(() => Math.random() - 0.5);
                  return {
                      type: 'ls',
                      q: 'Listen and select the correct IPA sound:',
                      item: item,
                      ans: opts.indexOf(correctIpa),
                      opts: opts,
                      theme: item.theme
                  };
              }
              return item;
          });
      } else {
          qs = getQuestions(lang, cat, level, theme);
      }

      if (!qs.length) qs = getQuestions('EN', 'Vocabulary', 'all', 'all');
      qs = [...qs].sort(() => Math.random() - .5).slice(0, 10);

      window.SESSION = { lang, cat, level, theme, qs, idx:0, pts:0, correct:0, mistakes:[], isChallenge };

      const titleEl = document.getElementById('pe-session-title');
      if (titleEl) titleEl.textContent = `${lang} · ${cat}${level !== 'all' ? ' · ' + level : ''}`;

      document.getElementById('score-count').textContent = '0';
      document.getElementById('streak-count').textContent = STATE.streak;

      document.getElementById('practice-section').style.display = 'block';
      document.getElementById('practice-section').classList.add('active');
      document.getElementById('setup-section').style.display = 'none';
      document.getElementById('summary-modal').style.display = 'none';

      renderQuestion();
    }

    function renderQuestion() {
      if (!window.SESSION) return;
      if (window.SESSION.idx >= window.SESSION.qs.length) { endSession_summary(); return; }
      const q = window.SESSION.qs[window.SESSION.idx];
      const pct = (window.SESSION.idx / window.SESSION.qs.length) * 100;

      document.getElementById('progress-fill').style.width = pct + '%';
      document.getElementById('q-num').textContent = window.SESSION.idx + 1;
      document.getElementById('score-count').textContent = window.SESSION.pts;
      document.getElementById('streak-count').textContent = STATE.streak;

      // Reset visibility
      const containers = [
          'choices-grid', 'opposite-input-container', 'tf-buttons-container', 'conversation-container', 'scramble-container'
      ];
      containers.forEach(id => {
          const el = document.getElementById(id);
          if (el) { el.style.display = 'none'; el.classList.add('hidden'); }
      });
      document.getElementById('feedback-message').innerHTML = '';
      document.getElementById('next-btn').classList.add('hidden');
      document.getElementById('listen-btn').classList.add('hidden');

      // Task Labels
      document.getElementById('task-instruction').textContent = taskTypeLabel(q.type);
      document.getElementById('task-what-to-do').textContent = q.q;

      // Word / Item display
      const wordDisplay = document.getElementById('word-display');
      if (q.item && q.type !== 'sc') {
          wordDisplay.textContent = q.item.word;
          document.getElementById('emoji-display').textContent = q.item.emoji || '💡';
      } else {
          wordDisplay.textContent = '';
          document.getElementById('emoji-display').textContent = '💡';
      }

      if (q.type === 'mc' || q.type === 'ls') {
        const grid = document.getElementById('choices-grid');
        grid.style.display = 'grid';
        grid.classList.remove('hidden');

        let finalOpts = q.opts || [];
        if (q.item && window.SESSION.cat === 'Vocabulary') {
            const vocabPool = window.gameUtils.getVocabPool(window.SESSION.lang.toLowerCase(), 'all', 'all');
            const distractors = vocabPool
                .filter(v => v.word !== q.item.word && v.definitions?.[0]?.text)
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map(v => v.definitions[0].text);
            while (distractors.length < 2) distractors.push("Option " + (distractors.length + 1));
            const correctDef = q.item.definitions?.[0]?.text || "Correct definition";
            finalOpts = [correctDef, ...distractors].sort(() => Math.random() - 0.5);
            q.dynamicAns = finalOpts.indexOf(correctDef);
            q.dynamicOpts = finalOpts;
        }

        grid.innerHTML = finalOpts.map((o, i) =>
          `<button class="mc-opt" onclick="cosyPractice.checkMC(${i})">${o}</button>`).join('');

        if (q.type === 'ls') {
            document.getElementById('listen-btn').classList.remove('hidden');
            document.getElementById('listen-btn').onclick = () => window.gameUtils.speak(q.item.word, window.SESSION.lang.toLowerCase());
            wordDisplay.textContent = '???';
        }

      } else if (q.type === 'tf') {
        const cont = document.getElementById('tf-buttons-container');
        cont.style.display = 'flex';
        cont.classList.remove('hidden');
      } else if (q.type === 'type' || q.type === 'op' || q.type === 'np') {
        const cont = document.getElementById('opposite-input-container');
        cont.style.display = 'block';
        cont.classList.remove('hidden');
        const inp = document.getElementById('opposite-answer');
        inp.value = '';
        inp.focus();
        document.getElementById('check-opposite-btn').onclick = () => cosyPractice.checkType();
      } else if (q.type === 'conv') {
        const cont = document.getElementById('conversation-container');
        cont.style.display = 'block';
        cont.classList.remove('hidden');
        document.getElementById('finish-conversation-btn').onclick = () => cosyPractice.nextQ(true);
      } else if (q.type === 'sc') {
        const cont = document.getElementById('scramble-container');
        cont.style.display = 'block';
        cont.classList.remove('hidden');

        const assembly = document.getElementById('word-assembly');
        const letters = document.getElementById('scramble-letters');
        assembly.innerHTML = '';

        // Prepare words
        const words = q.ans.split(' ').sort(() => Math.random() - 0.5);
        letters.innerHTML = words.map((w, i) =>
            `<button class="mc-opt" onclick="cosyPractice.assembleWord(this)">${w}</button>`
        ).join('');

        document.getElementById('clear-scramble-btn').onclick = () => {
            assembly.innerHTML = '';
            letters.querySelectorAll('button').forEach(b => b.style.display = 'inline-block');
        };

        // Reuse or create check button
        let checkBtn = cont.querySelector('.sc-check-btn');
        if (!checkBtn) {
            checkBtn = document.createElement('button');
            checkBtn.className = 'btn-start sc-check-btn';
            checkBtn.textContent = 'Check Scramble ✅';
            checkBtn.style.marginTop = '1rem';
            checkBtn.style.width = '100%';
            cont.appendChild(checkBtn);
        }
        checkBtn.onclick = () => cosyPractice.checkScramble();
      }
    }

    function taskTypeLabel(t) {
      const m = {
          mc:'Multiple choice',
          tf:'True / False',
          type:'Type the answer',
          conv:'Speaking task',
          ls:'Listen & select',
          sc:'Sentence Scramble',
          op:'Opposites',
          np:'Plurals'
      };
      return m[t] || t;
    }

    function showFeedback(ok, msg) {
      const fb = document.getElementById('feedback-message');
      fb.className = `pe-feedback show ${ok ? 'ok' : 'bad'}`;
      fb.innerHTML = msg;
      const nxt = document.getElementById('next-btn');
      if (nxt) nxt.classList.remove('hidden');
    }

    function awardPoints(pts) {
      window.SESSION.pts += pts;
      window.SESSION.correct++;
      STATE.totalPts += pts;
      STATE.todayCorrect++;
      STATE.lastDate = todayStr;
      saveState(STATE);
      updateDashboardUI();
    }

    function recordMistake(q) {
        if (!q.item) return;
        const exists = STATE.mistakes.some(m => m.word === q.item.word && m.lang === window.SESSION.lang);
        if (!exists) {
            STATE.mistakes.push({
                ...q.item,
                lang: window.SESSION.lang,
                cat: window.SESSION.cat,
                added: Date.now()
            });
            if (STATE.mistakes.length > 50) STATE.mistakes.shift();
            saveState(STATE);
            populateRecentAndMistakes();
        }
    }

    function endSession_summary() {
      document.getElementById('progress-fill').style.width = '100%';
      document.getElementById('practice-section').style.display = 'none';
      const summary = document.getElementById('summary-modal');
      summary.style.display = 'block';
      summary.classList.add('active');
      summary.classList.remove('hidden');

      if (STATE.lastDate !== todayStr || STATE.sessions === 0) { STATE.streak++; STATE.lastDate = todayStr; }
      STATE.sessions++;

      // Record History
      STATE.history.unshift({
          lang: window.SESSION.lang,
          cat: window.SESSION.cat,
          pts: window.SESSION.pts,
          correct: window.SESSION.correct,
          total: window.SESSION.qs.length,
          date: Date.now()
      });
      if (STATE.history.length > 10) STATE.history.pop();

      saveState(STATE);
      updateDashboardUI();
      populateRecentAndMistakes();

      document.getElementById('final-score').textContent = window.SESSION.pts;
      document.getElementById('final-total-score').textContent = STATE.totalPts;
      document.getElementById('final-streak').textContent = STATE.streak;
    }

    function updateDashboardUI() {
      if (document.getElementById('total-pts')) document.getElementById('total-pts').textContent = STATE.totalPts.toLocaleString();
      if (document.getElementById('nav-pts')) document.getElementById('nav-pts').textContent = STATE.totalPts.toLocaleString();
      if (document.getElementById('streak-val')) document.getElementById('streak-val').textContent = STATE.streak;
      if (document.getElementById('nav-streak')) document.getElementById('nav-streak').textContent = STATE.streak;
      if (document.getElementById('total-correct')) document.getElementById('total-correct').textContent = STATE.todayCorrect;
      if (document.getElementById('total-sessions')) document.getElementById('total-sessions').textContent = STATE.sessions;

      const arc = document.getElementById('streak-arc');
      if (arc) {
          const pct = Math.min(STATE.streak / 30, 1);
          arc.style.strokeDashoffset = 226 - (226 * pct);
      }
    }

    function populateRecentAndMistakes() {
        const recentList = document.getElementById('recent-list');
        const mistakeList = document.getElementById('mistake-list');
        const mistakeCountQs = document.getElementById('mistake-count-qs');

        if (recentList) {
            if (STATE.history.length === 0) {
                recentList.innerHTML = '<div class="info-card-empty">No sessions yet — start practising!</div>';
            } else {
                recentList.innerHTML = STATE.history.map(s => `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px; border-bottom:1px solid var(--border);">
                        <div>
                            <div style="font-weight:600; font-size:0.9rem;">${s.lang} · ${s.cat}</div>
                            <div style="font-size:0.75rem; color:var(--ink-faint);">${new Date(s.date).toLocaleDateString()}</div>
                        </div>
                        <div style="text-align:right;">
                            <div style="font-weight:800; color:var(--teal);">${s.pts} pts</div>
                            <div style="font-size:0.75rem;">${s.correct}/${s.total} ok</div>
                        </div>
                    </div>
                `).join('');
            }
        }

        if (mistakeList) {
            if (STATE.mistakes.length === 0) {
                mistakeList.innerHTML = '<div class="info-card-empty">No mistakes saved yet — well done!</div>';
            } else {
                mistakeList.innerHTML = STATE.mistakes.slice(-5).reverse().map(m => `
                    <div style="display:flex; align-items:center; gap:10px; padding:10px; border-bottom:1px solid var(--border);">
                        <div style="font-size:1.5rem;">${m.emoji || '💡'}</div>
                        <div>
                            <div style="font-weight:700;">${m.word}</div>
                            <div style="font-size:0.75rem; color:var(--ink-faint);">${m.lang} · ${m.theme}</div>
                        </div>
                    </div>
                `).join('');
            }
        }

        if (mistakeCountQs) {
            mistakeCountQs.textContent = `${STATE.mistakes.length} words to review`;
        }
    }

    async function updateThemes() {
        const lang = selectedLang;
        const level = document.getElementById('practice-level').value;
        const cat = selectedCat;
        const themeSelect = document.getElementById('practice-theme');
        if (!themeSelect) return;

        await ensureDataLoaded(lang, level);

        const dataSource = cat === 'Speaking' ? 'speaking' : (cat === 'Pronunciation' ? 'pronunciation' : 'vocab');
        window.gameUtils.populateThemes(themeSelect, { value: level }, lang.toLowerCase(), dataSource);
    }

    /* ══════════════════════════════════════
       SPINNING WHEEL
    ══════════════════════════════════════ */
    const WHEEL = {
        options: [
            { lang:'EN', cat:'Vocabulary', level:'starter', theme:'all', label: '🇬🇧 English A1' },
            { lang:'FR', cat:'Vocabulary', level:'starter', theme:'all', label: '🇫🇷 French A1' },
            { lang:'IT', cat:'Vocabulary', level:'starter', theme:'all', label: '🇮🇹 Italian A1' },
            { lang:'RU', cat:'Vocabulary', level:'starter', theme:'all', label: '🇷🇺 Russian A1' },
            { lang:'EL', cat:'Vocabulary', level:'starter', theme:'all', label: '🇬🇷 Greek A1' },
            { lang:'EN', cat:'Speaking', level:'intermediate', theme:'all', label: '🗣️ English B1' },
            { lang:'EN', cat:'Grammar', level:'starter', theme:'all', label: '📐 English Grammar' }
        ],
        angle: 0,
        isSpinning: false,
        canvas: null,
        ctx: null
    };

    function initWheel() {
        WHEEL.canvas = document.getElementById('wheel-canvas');
        if (!WHEEL.canvas) return;
        WHEEL.ctx = WHEEL.canvas.getContext('2d');
        drawWheel();

        document.getElementById('spin-btn')?.addEventListener('click', spinWheel);
    }

    function drawWheel() {
        const { ctx, canvas, options, angle } = WHEEL;
        if (!ctx) return;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2 - 5;
        const sliceAngle = (Math.PI * 2) / options.length;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        options.forEach((opt, i) => {
            const startA = angle + i * sliceAngle;
            const endA = startA + sliceAngle;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startA, endA);
            ctx.fillStyle = i % 2 === 0 ? '#6b8f71' : '#4a6b50';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Text
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(startA + sliceAngle / 2);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(opt.label, radius - 10, 5);
            ctx.restore();
        });
    }

    function spinWheel() {
        if (WHEEL.isSpinning) return;
        WHEEL.isSpinning = true;
        const spinBtn = document.getElementById('spin-btn');
        if (spinBtn) spinBtn.disabled = true;

        const duration = 3000;
        const startTime = performance.now();
        const startAngle = WHEEL.angle;
        const totalRotation = Math.PI * 2 * 5 + Math.random() * Math.PI * 2;

        function animate(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            WHEEL.angle = startAngle + totalRotation * easeOut;
            drawWheel();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                WHEEL.isSpinning = false;
                if (spinBtn) spinBtn.disabled = false;
                finalizeSpin();
            }
        }
        requestAnimationFrame(animate);
    }

    function finalizeSpin() {
        const sliceAngle = (Math.PI * 2) / WHEEL.options.length;
        // Normalize angle to [0, 2PI)
        const normalizedAngle = ((WHEEL.angle % (Math.PI * 2)) + (Math.PI * 2)) % (Math.PI * 2);
        // The pointer is at the top (3PI/2 in canvas coordinates if 0 is right)
        // Wait, standard canvas arc 0 is right. Top is 3PI/2 or -PI/2.
        // We want to find which slice is at the top (angle 3PI/2 relative to rotation)
        const pointerAngle = 3 * Math.PI / 2;
        let winningIndex = Math.floor((pointerAngle - normalizedAngle + Math.PI * 4) % (Math.PI * 2) / sliceAngle);
        winningIndex = winningIndex % WHEEL.options.length;

        const win = WHEEL.options[winningIndex];
        const resEl = document.getElementById('wheel-result');
        if (resEl) {
            resEl.innerHTML = `Landed on: <strong>${win.label}</strong>! 🎡`;
            resEl.style.opacity = '1';
        }

        setTimeout(async () => {
            const lp = document.querySelector(`.lang-pill[data-value="${win.lang.toLowerCase()}"]`);
            if (lp) selectLang(lp);
            const cp = document.querySelector(`.cat-pill[data-value="${win.cat.toLowerCase()}"]`);
            if (cp) selectCat(cp);

            await ensureDataLoaded(win.lang, win.level);
            beginSession(win.lang, win.cat, win.level, win.theme, false);
            cosyPractice.closeWheel();
        }, 1500);
    }

    /* ══════════════════════════════════════
       GLOBAL EXPORTS
    ══════════════════════════════════════ */
    function loadDailyChallenge() {
        const dcTitle = document.getElementById('dc-title');
        const dcSub = document.getElementById('dc-sub');
        const dcMeta = document.getElementById('dc-meta');
        if (!dcTitle) return;

        const challenges = [
            { title: "Vocabulary Sprint", sub: "10 words from English A2", meta: "Double points today! ✨", lang: 'en', cat: 'Vocabulary', level: 'elementary' },
            { title: "Verb Mastery", sub: "Common French Verbs", meta: "Focus on conjugation 📐", lang: 'fr', cat: 'Vocabulary', level: 'starter' },
            { title: "Conversation Starter", sub: "Speak about daily life", meta: "Speaking focus 🗣️", lang: 'en', cat: 'Speaking', level: 'intermediate' }
        ];

        // Seeded by date
        const day = new Date().getDate();
        const challenge = challenges[day % challenges.length];

        dcTitle.textContent = challenge.title;
        dcSub.textContent = challenge.sub;
        dcMeta.textContent = challenge.meta;

        window.currentDC = challenge;
    }

    window.cosyPractice = {
        quickStart: async (lang, cat, level, theme) => {
            const lp = document.querySelector(`.lang-pill[data-value="${lang.toLowerCase()}"]`);
            if (lp) selectLang(lp);
            const cp = document.querySelector(`.cat-pill[data-value="${cat.toLowerCase()}"]`);
            if (cp) selectCat(cp);

            // Normalize category for session logic
            const catNorm = { 'vocab': 'Vocabulary', 'grammar': 'Grammar', 'speaking': 'Speaking', 'pronunciation': 'Pronunciation' }[cat.toLowerCase()] || cat;

            await ensureDataLoaded(lang.toUpperCase(), level);
            beginSession(lang.toUpperCase(), catNorm, level, theme, false);
        },
        startDailyChallenge: async () => {
            const c = window.currentDC || { lang: 'EN', cat: 'Vocabulary', level: 'starter' };
            await ensureDataLoaded(c.lang.toUpperCase(), c.level);
            beginSession(c.lang.toUpperCase(), c.cat, c.level, 'all', true);
        },
        startMistakeReview: () => {
            if (STATE.mistakes.length === 0) {
                alert("No mistakes to review yet!");
                return;
            }
            const qs = STATE.mistakes.map(m => {
                return {
                    type: 'type',
                    q: `Review mistake: "${m.definitions?.[0]?.text || m.word}"`,
                    item: m,
                    ans: m.word
                };
            }).sort(() => Math.random() - 0.5).slice(0, 10);

            window.SESSION = { lang: 'Multi', cat: 'Review', level: 'Mixed', theme: 'Mistakes', qs, idx: 0, pts: 0, correct: 0, mistakes: [], isChallenge: false };

            const titleEl = document.getElementById('pe-session-title');
            if (titleEl) titleEl.textContent = "Review Mistakes ❌";

            document.getElementById('practice-section').style.display = 'block';
            document.getElementById('practice-section').classList.add('active');
            document.getElementById('setup-section').style.display = 'none';
            renderQuestion();
        },
        skipDailyChallenge: () => { document.getElementById('daily-challenge').style.opacity = '0.5'; },
        openWheel: () => {
            document.getElementById('setup-section').style.display = 'none';
            document.getElementById('wheel-container').style.display = 'block';
            if (!WHEEL.canvas) initWheel();
        },
        closeWheel: () => {
            document.getElementById('wheel-container').style.display = 'none';
            document.getElementById('setup-section').style.display = 'block';
        },
        checkMC: (i) => {
            const q = window.SESSION.qs[window.SESSION.idx];
            const ans = q.dynamicAns !== undefined ? q.dynamicAns : q.ans;
            if (i === ans) {
                awardPoints(10);
                showFeedback(true, 'Correct! +10 pts');
            } else {
                recordMistake(q);
                const opts = q.dynamicOpts || q.opts;
                showFeedback(false, 'Incorrect. Answer: ' + (opts ? opts[ans] : 'Unknown'));
            }
        },
        checkTF: (val) => {
            const q = window.SESSION.qs[window.SESSION.idx];
            if (val === q.ans) { awardPoints(10); showFeedback(true, 'Correct! +10 pts'); }
            else { recordMistake(q); showFeedback(false, 'Incorrect.'); }
        },
        checkType: () => {
            const q = window.SESSION.qs[window.SESSION.idx];
            const val = document.getElementById('opposite-answer').value.trim().toLowerCase();
            if (val === q.ans.toLowerCase()) {
                awardPoints(q.type === 'type' ? 10 : 15);
                showFeedback(true, `Correct! +${q.type === 'type' ? 10 : 15} pts`);
            }
            else { recordMistake(q); showFeedback(false, 'Incorrect. Answer: ' + q.ans); }
        },
        assembleWord: (btn) => {
            const assembly = document.getElementById('word-assembly');
            const clone = btn.cloneNode(true);
            clone.onclick = () => {
                clone.remove();
                btn.style.display = 'inline-block';
            };
            assembly.appendChild(clone);
            btn.style.display = 'none';
        },
        checkScramble: () => {
            const q = window.SESSION.qs[window.SESSION.idx];
            const assembly = document.getElementById('word-assembly');
            const val = Array.from(assembly.querySelectorAll('button')).map(b => b.textContent).join(' ');
            if (val.toLowerCase() === q.ans.toLowerCase()) {
                awardPoints(20);
                showFeedback(true, 'Perfectly arranged! +20 pts');
            } else {
                recordMistake(q);
                showFeedback(false, 'Not quite. Correct: ' + q.ans);
            }
        },
        nextQ: (forceCorrect) => {
            if (forceCorrect) awardPoints(5);
            window.SESSION.idx++;
            renderQuestion();
        },
        endSession: () => {
            document.getElementById('practice-section').style.display = 'none';
            document.getElementById('summary-modal').style.display = 'none';
            document.getElementById('setup-section').style.display = 'block';
            updateDashboardUI();
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        updateDashboardUI();
        populateRecentAndMistakes();
        loadDailyChallenge();
        initWheel();

        // Wire up static buttons
        document.querySelectorAll('.lang-pill').forEach(lp => {
            lp.addEventListener('click', () => {
                selectLang(lp);
                updateThemes();
            });
        });

        document.querySelectorAll('.cat-pill').forEach(cp => {
            cp.addEventListener('click', () => {
                selectCat(cp);
                updateThemes();
            });
        });

        document.getElementById('practice-level')?.addEventListener('change', updateThemes);

        document.getElementById('true-btn')?.addEventListener('click', () => cosyPractice.checkTF(true));
        document.getElementById('false-btn')?.addEventListener('click', () => cosyPractice.checkTF(false));
        document.getElementById('next-btn')?.addEventListener('click', () => cosyPractice.nextQ());
        document.getElementById('exit-practice-btn')?.addEventListener('click', () => cosyPractice.endSession());
        document.getElementById('back-to-menu-btn')?.addEventListener('click', () => {
             document.getElementById('summary-modal').style.display = 'none';
             startPractice();
        });
    });

})();
