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
      if (STATE.lastDate !== yStr && STATE.lastDate !== '') {
          STATE.streak = 0;
          localStorage.setItem('practice_streak', '0');
      }
      STATE.todayCorrect = 0;
    }
    saveState(STATE);

    /* ══════════════════════════════════════
       QUESTION DATA (Static Fallbacks)
    ══════════════════════════════════════ */
    const QUESTIONS = {
      EN: {
        Vocabulary: [
          { type:'mc', q:'What does "sibling" mean?', opts:['A brother or sister','A parent','A cousin','A friend'], ans:0, level:'starter', theme:'Family' },
          { type:'mc', q:'Which word means the opposite of "ancient"?', opts:['Modern','Old','Historic','Antique'], ans:0, level:'elementary', theme:'Arts & Culture' },
          { type:'tf', q:'"Ubiquitous" means extremely rare.', ans:false, level:'advanced', theme:'Daily Life' },
        ],
        Grammar: [
          { type:'mc', q:'Choose the correct sentence:', opts:['She don\'t like coffee.','She doesn\'t like coffee.','She not like coffee.','She isn\'t like coffee.'], ans:1, level:'starter', theme:'Tenses' },
          { type:'tf', q:'"I have been living here for 3 years" uses the present perfect continuous.', ans:true, level:'intermediate', theme:'Tenses' },
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
    let selectedLang = 'en';
    let selectedCat  = 'Vocabulary';

    function selectLang(el) {
      document.querySelectorAll('.lang-pill').forEach(p => p.classList.remove('active'));
      el.classList.add('active');
      selectedLang = el.dataset.value;
    }
    window.selectLang = selectLang;

    function selectCat(el) {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      el.classList.add('active');
      const val = el.dataset.value;
      const map = { 'vocab': 'Vocabulary', 'grammar': 'Grammar', 'speaking': 'Speaking', 'pronunciation': 'Pronunciation' };
      selectedCat = map[val] || val;
    }
    window.selectCat = selectCat;

    function toggleTask(el) { el.classList.toggle('active'); }
    window.toggleTask = toggleTask;

    /* ══════════════════════════════════════
       DATA LOADING
    ══════════════════════════════════════ */
    async function ensureDataLoaded(lang, level) {
        const familyMap = {
            'en': 'germanic', 'de': 'germanic',
            'fr': 'romance', 'it': 'romance', 'es': 'romance', 'pt': 'romance',
            'ru': 'slavic', 'el': 'hellenic',
            'hy': 'armenian', 'ka': 'kartvelian',
            'tt': 'turkic', 'ba': 'turkic', 'br': 'celtic'
        };
        const family = familyMap[lang.toLowerCase()];
        if (!family) return;

        const levelPath = (level === 'all' || !level) ? 'starter' : level;
        const files = ['vocabulary.js', 'verbs.js', 'adjectives.js', 'grammar_elements.js', 'dishes.js', 'speaking.js', 'locations.js', 'people.js'];
        const promises = files.map(file => {
            const path = `../js/data/${family}/${lang.toLowerCase()}/${levelPath}/${file}`;
            if (document.querySelector(`script[src*="${path}"]`)) return Promise.resolve();
            return new Promise(res => {
                const s = document.createElement('script');
                s.src = path;
                s.onload = res;
                s.onerror = res;
                document.head.appendChild(s);
            });
        });

        // Pronunciation curriculum
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
        await new Promise(res => setTimeout(res, 500));
    }

    /* ══════════════════════════════════════
       SESSION ENGINE
    ══════════════════════════════════════ */
    window.SESSION = null;

    async function startPractice() {
      const level = document.getElementById('practice-level').value;
      const theme = document.getElementById('practice-theme').value;
      const startBtn = document.getElementById('start-btn');
      if (startBtn) { startBtn.disabled = true; startBtn.textContent = 'Loading... ⏳'; }
      await ensureDataLoaded(selectedLang, level);
      if (startBtn) { startBtn.disabled = false; startBtn.textContent = '▶ Start practice'; }
      beginSession(selectedLang, selectedCat, level, theme, false);
    }
    window.startPractice = startPractice;

    function beginSession(lang, cat, level, theme, isChallenge) {
      let pool = [];
      const l = lang.toLowerCase();

      if (cat === 'Vocabulary' || cat === 'Grammar') {
          // If grammar, we prioritize verbs and grammar_elements, but fallback to general vocab pool
          pool = window.gameUtils.getVocabPool(l, level, theme);
          if (cat === 'Grammar') {
              // Filter for items that have examples (better for grammar tasks) or are explicitly grammar
              const grammarSpecific = pool.filter(item => item.form === 'verb' || item.form === 'preposition' || item.form === 'conjunction');
              if (grammarSpecific.length > 5) pool = grammarSpecific;
          }
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

      let qs = [];
      if (pool.length > 0) {
          qs = pool.map(item => {
              if (cat === 'Vocabulary' || cat === 'Grammar') {
                  let type = activeTypes[Math.floor(Math.random() * activeTypes.length)];
                  if (type === 'op' && !item.opposite) type = 'mc';
                  if (type === 'sc' && (!item.examples || item.examples.length === 0)) type = 'mc';
                  if (type === 'np' && !item.plural) type = 'mc';
                  if (type === 'cv' && !item.word) type = 'mc';

                  let qText, ans, opts = null;
                  const definition = item.definitions?.[0]?.text || "the correct meaning";

                  if (type === 'mc' || type === 'ls') {
                      qText = type === 'ls' ? 'Listen and select the correct word:' : `What does "${item.word}" mean?`;
                      ans = 0;
                      opts = [definition, 'Wrong option 1', 'Wrong option 2'];
                  } else if (type === 'tf') {
                      const isTrue = Math.random() > 0.5;
                      const displayDef = isTrue ? definition : "something else entirely";
                      qText = `"${item.word}" means "${displayDef}".`;
                      ans = isTrue;
                  } else if (type === 'op') {
                      qText = `What is the opposite of "${item.word}"?`;
                      ans = item.opposite;
                  } else if (type === 'sc') {
                      const ex = item.examples[Math.floor(Math.random() * item.examples.length)];
                      qText = `Arrange the words into a correct sentence:`;
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

                  return { type, q: qText, item: item, ans, opts, level: item.level, theme: item.theme };
              } else if (cat === 'Speaking') {
                  return { type: 'conv', q: item.topic || item.text, level: item.level, theme: item.theme };
              } else if (cat === 'Pronunciation') {
                  const correctIpa = item.ipa;
                  const distractors = ['/a/', '/i/', '/u/', '/e/', '/o/'].filter(i => i !== correctIpa).sort(() => Math.random() - 0.5).slice(0, 2);
                  const opts = [correctIpa, ...distractors].sort(() => Math.random() - 0.5);
                  return { type: 'ls', q: 'Listen and select the correct IPA sound:', item: item, ans: opts.indexOf(correctIpa), opts: opts, theme: item.theme };
              }
              return item;
          });
      } else {
          qs = getQuestions(lang.toUpperCase(), cat, level, theme);
      }

      if (!qs.length) qs = getQuestions('EN', 'Vocabulary', 'all', 'all');
      qs = [...qs].sort(() => Math.random() - .5).slice(0, 10);

      window.SESSION = { lang, cat, level, theme, qs, idx:0, pts:0, correct:0, mistakes:[], isChallenge };
      document.getElementById('pe-session-title').textContent = `${lang.toUpperCase()} · ${cat}${level !== 'all' ? ' · ' + level : ''}`;
      document.getElementById('score-count').textContent = '0';
      document.getElementById('streak-count').textContent = STATE.streak;

      document.getElementById('practice-section').classList.add('active');
      document.getElementById('summary-modal').style.display = 'none';
      document.getElementById('setup-section').style.display = 'none';
      document.getElementById('quickstart-section').style.display = 'none';
      document.getElementById('daily-challenge').style.display = 'none';
      document.getElementById('stats-section').style.display = 'none';

      renderQuestion();
    }

    function renderQuestion() {
      if (!window.SESSION) return;
      if (window.SESSION.idx >= window.SESSION.qs.length) { endSession_summary(); return; }
      const q = window.SESSION.qs[window.SESSION.idx];
      const pct = (window.SESSION.idx / window.SESSION.qs.length) * 100;

      document.getElementById('progress-fill').style.width = pct + '%';
      document.getElementById('q-num').textContent = window.SESSION.idx + 1;

      let html = `<div class="pe-task-type">${taskTypeLabel(q.type)}</div>`;
      html += `<div class="pe-question">${q.q}</div>`;

      // Visual helper (Emoji/Word)
      if (q.item && q.type !== 'sc') {
          html += `<div style="text-align:center; margin: 1.5rem 0;">
                     <div style="font-size: 4rem;">${q.item.emoji || '💡'}</div>
                     <div style="font-size: 1.5rem; font-family: 'Fraunces', serif; font-weight: 500; margin-bottom: 0.5rem;">${q.type === 'ls' ? '???' : q.item.word}</div>
                     <button class="btn-outline" style="padding: 4px 12px; font-size: 0.8rem;" onclick="window.gameUtils.speak('${q.item.word}', '${window.SESSION.lang}')">🔊 Listen</button>
                   </div>`;

          // Show definition if available, but avoid giving away answers in MC/TF/LS(Vocab)
          const isVocabLS = q.type === 'ls' && window.SESSION.cat === 'Vocabulary';
          if (q.item.definitions && q.item.definitions[0] && q.type !== 'mc' && q.type !== 'tf' && !isVocabLS) {
              html += `<div style="text-align:center; font-size: 0.9rem; color: var(--muted); font-style: italic; margin-bottom: 1.5rem;">
                        "${q.item.definitions[0].text}"
                       </div>`;
          }
      }

      html += `<div id="pe-fb" class="pe-feedback"></div>`;

      if (q.type === 'mc' || q.type === 'ls') {
          let finalOpts = q.opts || [];
          if (q.item && window.SESSION.cat === 'Vocabulary' && q.type !== 'ls') {
              const vocabPool = window.gameUtils.getVocabPool(window.SESSION.lang.toLowerCase(), 'all', 'all');
              const distractors = vocabPool
                  .filter(v => v.word !== q.item.word && v.definitions?.[0]?.text)
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 2)
                  .map(v => v.definitions[0].text);
              const correctDef = q.item.definitions?.[0]?.text || "Correct definition";
              finalOpts = [correctDef, ...distractors].sort(() => Math.random() - 0.5);
              q.dynamicAns = finalOpts.indexOf(correctDef);
              q.dynamicOpts = finalOpts;
          }
          html += `<div class="mc-options">` + finalOpts.map((o, i) =>
            `<button class="mc-opt" onclick="cosyPractice.checkMC(${i})">${o}</button>`).join('') + `</div>`;
          if (q.type === 'ls') {
              html += `<div style="text-align:center;"><button class="btn-outline" onclick="window.gameUtils.speak('${q.item.word}', '${window.SESSION.lang}')">🔊 Listen</button></div>`;
          }
      } else if (q.type === 'tf') {
          html += `<div class="tf-btns">
            <button class="tf-btn" onclick="cosyPractice.checkTF(true)">✅ True</button>
            <button class="tf-btn" onclick="cosyPractice.checkTF(false)">❌ False</button>
          </div>`;
      } else if (q.type === 'type' || q.type === 'op' || q.type === 'np') {
          html += `<div class="type-wrap">
            <input class="type-input" id="type-in" placeholder="Type here…" onkeydown="if(event.key==='Enter')cosyPractice.checkType()">
            <button class="btn-start" onclick="cosyPractice.checkType()">Check</button>
          </div>`;
      } else if (q.type === 'conv') {
          html += `<div style="background:var(--warm-white);border-radius:var(--r-lg);padding:1.5rem;margin-bottom:1.5rem;border:1px solid var(--border)">
            <div style="font-size:.75rem;color:var(--ink-faint);margin-bottom:.4rem">🗣️ Speak your answer aloud</div>
            <textarea id="conv-in" class="styled-select" style="height:100px;background:#fff;" placeholder="Optional: type keywords here..."></textarea>
          </div>`;
      } else if (q.type === 'sc') {
          const words = q.ans.split(' ').sort(() => Math.random() - 0.5);
          html += `<div id="sc-assembly" style="min-height:60px; border-bottom:2px solid var(--border); margin-bottom:1rem; display:flex; flex-wrap:wrap; gap:8px; padding:10px;"></div>
                   <div id="sc-tokens" class="mc-options" style="grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));">
                     ${words.map(w => `<button class="mc-opt" onclick="cosyPractice.assembleWord(this)">${w}</button>`).join('')}
                   </div>
                   <div style="display:flex; gap:10px; margin-top:1rem;">
                     <button class="btn-outline" onclick="cosyPractice.clearScramble()">Clear 🔄</button>
                     <button class="btn-start" style="flex:1" onclick="cosyPractice.checkScramble()">Check Scramble ✅</button>
                   </div>`;
      }

      html += `<div class="pe-controls" style="margin-top:2rem">
        <button id="pe-next" class="pe-btn-next" style="display:none" onclick="cosyPractice.nextQ()">Next →</button>
        <button class="pe-btn-hint" onclick="cosyPractice.showHint()">💡 Hint</button>
        <button class="pe-btn-exit" onclick="cosyPractice.endSession()">Exit ✕</button>
      </div>`;

      document.getElementById('pe-body').innerHTML = html;
      if (document.getElementById('type-in')) setTimeout(() => document.getElementById('type-in').focus(), 50);
    }

    function taskTypeLabel(t) {
      const m = { mc:'Multiple choice', tf:'True / False', type:'Type the answer', conv:'Speaking task', ls:'Listen & select', sc:'Sentence Scramble', op:'Opposites', np:'Plurals' };
      return m[t] || t;
    }

    function awardPoints(pts) {
      window.SESSION.pts += pts;
      window.SESSION.correct++;
      STATE.totalPts += pts;
      STATE.todayCorrect++;
      STATE.lastDate = todayStr;
      saveState(STATE);
      updateDashboardUI();
      document.getElementById('score-count').textContent = window.SESSION.pts;
    }

    function recordMistake(q) {
        if (!q.item) return;
        const exists = STATE.mistakes.some(m => m.word === q.item.word && m.lang === window.SESSION.lang);
        if (!exists) {
            STATE.mistakes.push({ ...q.item, lang: window.SESSION.lang, cat: window.SESSION.cat, added: Date.now() });
            if (STATE.mistakes.length > 50) STATE.mistakes.shift();
            saveState(STATE);
            populateRecentAndMistakes();
        }
    }

    function endSession_summary() {
      document.getElementById('progress-fill').style.width = '100%';
      document.getElementById('pe-body').style.display = 'none';
      document.getElementById('summary-modal').style.display = 'block';

      if (STATE.lastDate !== todayStr || STATE.sessions === 0) { STATE.streak++; STATE.lastDate = todayStr; }
      STATE.sessions++;

      STATE.history.unshift({ lang: window.SESSION.lang, cat: window.SESSION.cat, pts: window.SESSION.pts, correct: window.SESSION.correct, total: window.SESSION.qs.length, date: Date.now() });
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
        if (recentList) {
            if (STATE.history.length === 0) recentList.innerHTML = '<div class="info-card-empty">No sessions yet — start practising!</div>';
            else recentList.innerHTML = STATE.history.map(s => `
                <div class="recent-item">
                    <div class="ri-dot" style="background:var(--teal);"></div>
                    <div class="ri-name">${s.lang.toUpperCase()} · ${s.cat}</div>
                    <div class="ri-pts">+${s.pts} ✨</div>
                </div>`).join('');
        }
        if (mistakeList) {
            if (STATE.mistakes.length === 0) mistakeList.innerHTML = '<div class="info-card-empty">No mistakes saved yet — well done!</div>';
            else mistakeList.innerHTML = STATE.mistakes.slice(-5).reverse().map(m => `
                <div class="mistake-item">
                    <div class="mi-word">${m.word}</div>
                    <div class="mi-retry" onclick="cosyPractice.quickStart('${m.lang}','vocab','all','all')">retry</div>
                </div>`).join('');
        }
        if (document.getElementById('mistake-count-qs')) document.getElementById('mistake-count-qs').textContent = `${STATE.mistakes.length} words to review`;
    }

    /* ══════════════════════════════════════
       SPINNING WHEEL LOGIC
    ══════════════════════════════════════ */
    let wheelAngle = 0;
    const wheelLangs = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt'];
    const wheelCats = ['vocab', 'grammar', 'speaking', 'pronunciation'];
    const wheelItems = [];
    wheelLangs.forEach(l => wheelCats.forEach(c => wheelItems.push({ lang: l, cat: c })));

    function drawWheel() {
        const canvas = document.getElementById('wheel-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const radius = canvas.width / 2;
        const slice = (Math.PI * 2) / wheelItems.length;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(wheelAngle);

        wheelItems.forEach((item, i) => {
            const angle = i * slice;
            ctx.beginPath();
            ctx.fillStyle = i % 2 === 0 ? '#6b8f71' : '#e8a838';
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, angle, angle + slice);
            ctx.fill();

            ctx.save();
            ctx.rotate(angle + slice / 2);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px Nunito, sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(item.lang.toUpperCase(), radius - 15, 5);
            ctx.restore();
        });
        ctx.restore();
    }

    function spinWheel() {
        const btn = document.getElementById('spin-btn');
        if (btn) btn.disabled = true;

        let velocity = 0.3 + Math.random() * 0.2;
        const friction = 0.985;

        function animate() {
            wheelAngle += velocity;
            velocity *= friction;
            drawWheel();

            if (velocity > 0.002) {
                requestAnimationFrame(animate);
            } else {
                if (btn) btn.disabled = false;
                const slice = (Math.PI * 2) / wheelItems.length;
                const normalizedAngle = (Math.PI * 2) - (wheelAngle % (Math.PI * 2));
                const index = Math.floor(normalizedAngle / slice) % wheelItems.length;
                const result = wheelItems[index];

                const resEl = document.getElementById('wheel-result');
                if (resEl) {
                    const langName = { en:'English', fr:'French', it:'Italian', ru:'Russian', el:'Greek', es:'Spanish', de:'German', pt:'Portuguese' };
                    resEl.innerHTML = `Landed on: <strong>${langName[result.lang]} · ${result.cat}</strong>!<br>Starting practice... 🚀`;
                    setTimeout(() => {
                        cosyPractice.closeWheel();
                        cosyPractice.quickStart(result.lang, result.cat, 'all', 'all');
                    }, 1500);
                }
            }
        }
        animate();
    }

    function generateDailyChallenge() {
        const seeds = [
            { lang: 'en', cat: 'Vocabulary', theme: 'Food', title: "English Food Master 🍎", sub: "Learn essential food items in English." },
            { lang: 'fr', cat: 'Vocabulary', theme: 'Greetings', title: "French Politeness 🇫🇷", sub: "Master basic greetings and etiquette." },
            { lang: 'it', cat: 'Grammar', theme: 'prepositions', title: "Italian Prepositions 🇮🇹", sub: "Master 'in', 'on', and 'at' in Italian." },
            { lang: 'ru', cat: 'Vocabulary', theme: 'Numbers', title: "Russian Numbers 🇷🇺", sub: "Count like a pro from 0 to 100." },
            { lang: 'el', cat: 'Vocabulary', theme: 'Home', title: "Greek Home Life 🇬🇷", sub: "Learn words for rooms and furniture." }
        ];
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const challenge = seeds[dayOfYear % seeds.length];

        const titleEl = document.getElementById('dc-title');
        const subEl = document.getElementById('dc-sub');
        if (titleEl) titleEl.textContent = challenge.title;
        if (subEl) subEl.textContent = challenge.sub;

        return challenge;
    }

    window.cosyPractice = {
        startPractice: startPractice,
        quickStart: async (lang, cat, level, theme) => {
            const lp = document.querySelector(`.lang-pill[data-value="${lang.toLowerCase()}"]`);
            if (lp) selectLang(lp);
            const cp = document.querySelector(`.cat-pill[data-value="${cat.toLowerCase()}"]`);
            if (cp) selectCat(cp);
            await ensureDataLoaded(lang, level);
            beginSession(lang, selectedCat, level, theme, false);
        },
        startDailyChallenge: async () => {
            const dc = generateDailyChallenge();
            await ensureDataLoaded(dc.lang, 'starter');
            beginSession(dc.lang, dc.cat, 'starter', dc.theme, true);
        },
        startMistakeReview: () => {
            if (STATE.mistakes.length === 0) return alert("No mistakes to review!");
            const qs = STATE.mistakes.map(m => ({ type: 'type', q: `Review: "${m.definitions?.[0]?.text || m.word}"`, item: m, ans: m.word }));
            window.SESSION = { lang: 'multi', cat: 'Review', level: 'mixed', qs: qs.slice(0, 10), idx: 0, pts: 0, correct: 0, mistakes: [] };

            document.getElementById('practice-section').classList.add('active');
            document.getElementById('summary-modal').style.display = 'none';
            document.getElementById('setup-section').style.display = 'none';
            document.getElementById('quickstart-section').style.display = 'none';
            document.getElementById('daily-challenge').style.display = 'none';
            document.getElementById('stats-section').style.display = 'none';

            renderQuestion();
        },
        checkMC: (i) => {
            const q = window.SESSION.qs[window.SESSION.idx];
            const ans = q.dynamicAns !== undefined ? q.dynamicAns : q.ans;
            const fb = document.getElementById('pe-fb');
            document.querySelectorAll('.mc-opt').forEach((b, idx) => {
                b.disabled = true;
                if (idx === ans) b.classList.add('correct');
                else if (idx === i) b.classList.add('wrong');
            });
            if (i === ans) { awardPoints(10); fb.className = 'pe-feedback show ok'; fb.innerHTML = 'Correct! +10 pts'; }
            else { recordMistake(q); fb.className = 'pe-feedback show bad'; fb.innerHTML = 'Not quite. Answer: ' + (q.dynamicOpts ? q.dynamicOpts[ans] : q.opts[ans]); }
            document.getElementById('pe-next').style.display = 'inline-block';
        },
        checkTF: (val) => {
            const q = window.SESSION.qs[window.SESSION.idx];
            const fb = document.getElementById('pe-fb');
            document.querySelectorAll('.tf-btn').forEach(b => b.disabled = true);
            if (val === q.ans) { awardPoints(10); fb.className = 'pe-feedback show ok'; fb.innerHTML = 'Correct! +10 pts'; }
            else { recordMistake(q); fb.className = 'pe-feedback show bad'; fb.innerHTML = 'Incorrect.'; }
            document.getElementById('pe-next').style.display = 'inline-block';
        },
        checkType: () => {
            const q = window.SESSION.qs[window.SESSION.idx];
            const inp = document.getElementById('type-in');
            const val = inp.value.trim().toLowerCase();
            const fb = document.getElementById('pe-fb');
            inp.disabled = true;
            if (val === q.ans.toLowerCase()) { awardPoints(15); inp.classList.add('correct'); fb.className = 'pe-feedback show ok'; fb.innerHTML = 'Perfect! +15 pts'; }
            else { recordMistake(q); inp.classList.add('wrong'); fb.className = 'pe-feedback show bad'; fb.innerHTML = 'Answer: ' + q.ans; }
            document.getElementById('pe-next').style.display = 'inline-block';
        },
        assembleWord: (btn) => {
            const assembly = document.getElementById('sc-assembly');
            const clone = btn.cloneNode(true);
            clone.onclick = () => { clone.remove(); btn.style.display = 'inline-block'; };
            assembly.appendChild(clone);
            btn.style.display = 'none';
        },
        clearScramble: () => {
            document.getElementById('sc-assembly').innerHTML = '';
            document.querySelectorAll('#sc-tokens button').forEach(b => b.style.display = 'inline-block');
        },
        checkScramble: () => {
            const q = window.SESSION.qs[window.SESSION.idx];
            const val = Array.from(document.getElementById('sc-assembly').querySelectorAll('button')).map(b => b.textContent).join(' ');
            const fb = document.getElementById('pe-fb');
            if (val.toLowerCase() === q.ans.toLowerCase()) { awardPoints(20); fb.className = 'pe-feedback show ok'; fb.innerHTML = 'Great job! +20 pts'; }
            else { recordMistake(q); fb.className = 'pe-feedback show bad'; fb.innerHTML = 'Correct: ' + q.ans; }
            document.getElementById('pe-next').style.display = 'inline-block';
        },
        showHint: () => {
            const q = window.SESSION.qs[window.SESSION.idx];
            const fb = document.getElementById('pe-fb');
            fb.className = 'pe-feedback show ok';
            fb.innerHTML = `💡 Hint: ${q.type === 'mc' ? 'Starts with ' + (q.dynamicOpts ? q.dynamicOpts[q.dynamicAns][0] : q.opts[q.ans][0]) : 'Think carefully!'}`;
        },
        nextQ: () => { window.SESSION.idx++; renderQuestion(); },
        endSession: () => {
            document.getElementById('practice-section').classList.remove('active');
            document.getElementById('pe-body').style.display = 'block';
            document.getElementById('summary-modal').style.display = 'none';
            document.getElementById('setup-section').style.display = 'block';
            document.getElementById('quickstart-section').style.display = 'grid';
            document.getElementById('daily-challenge').style.display = 'block';
            document.getElementById('stats-section').style.display = 'grid';
            updateDashboardUI();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        openWheel: () => {
            document.getElementById('setup-section').style.display = 'none';
            document.getElementById('wheel-container').style.display = 'block';
            setTimeout(drawWheel, 50);
        },
        closeWheel: () => {
            document.getElementById('wheel-container').style.display = 'none';
            document.getElementById('setup-section').style.display = 'block';
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        updateDashboardUI();
        populateRecentAndMistakes();
        generateDailyChallenge();
        document.querySelectorAll('.lang-pill').forEach(p => p.addEventListener('click', () => selectLang(p)));
        document.querySelectorAll('.cat-pill').forEach(p => p.addEventListener('click', () => selectCat(p)));
        document.querySelectorAll('.task-toggle').forEach(p => p.addEventListener('click', () => toggleTask(p)));
        document.getElementById('practice-level')?.addEventListener('change', () => {});
        document.getElementById('spin-btn')?.addEventListener('click', spinWheel);
    });
})();
