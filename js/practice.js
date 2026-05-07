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
        if (level !== 'starter') return; // For now, only starter has centralized files

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

        const files = ['vocabulary.js', 'verbs.js', 'adjectives.js', 'grammar_elements.js', 'dishes.js', 'speaking.js'];
        const promises = files.map(file => {
            const path = `../js/data/${family}/${lang.toLowerCase()}/starter/${file}`;
            if (document.querySelector(`script[src*="${path}"]`)) return Promise.resolve();

            return new Promise(res => {
                const s = document.createElement('script');
                s.src = path;
                s.onload = res;
                s.onerror = res; // Still resolve to not block
                document.head.appendChild(s);
            });
        });
        await Promise.all(promises);
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
      }

      // If pool is empty, try default questions
      let qs = [];
      if (pool.length > 0) {
          qs = pool.map(item => {
              // Convert dynamic item to question format
              if (cat === 'Vocabulary') {
                  const types = ['mc', 'tf', 'type', 'ls'];
                  const type = types[Math.floor(Math.random() * types.length)];

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

      let html = `<div class="pe-task-type">${taskTypeLabel(q.type)}</div>`;
      html += `<div class="pe-question">${q.q}</div>`;
      html += `<div id="pe-fb" class="pe-feedback"></div>`;

      if (q.type === 'mc' || q.type === 'ls') {
        const opts = q.opts ? [...q.opts] : [];
        let finalOpts = opts;
        let correctIdx = q.ans;

        if (q.item && (q.type === 'mc' || q.type === 'ls')) {
            const vocabPool = window.gameUtils.getVocabPool(window.SESSION.lang.toLowerCase(), 'all', 'all');
            const distractors = vocabPool
                .filter(v => v.word !== q.item.word && v.definitions?.[0]?.text)
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map(v => v.definitions[0].text);

            while (distractors.length < 2) distractors.push("Alternative " + (distractors.length + 1));

            const correctDef = q.item.definitions?.[0]?.text || "Correct definition";
            finalOpts = [correctDef, ...distractors].sort(() => Math.random() - 0.5);
            correctIdx = finalOpts.indexOf(correctDef);
            q.dynamicAns = correctIdx;
            q.dynamicOpts = finalOpts;
        }

        if (q.type === 'ls') {
            html += `<div style="text-align:center; margin-bottom:1.5rem;"><button class="btn-start" onclick="window.gameUtils.speak('${q.item.word.replace(/'/g,"\\'")}', '${window.SESSION.lang.toLowerCase()}')">🔊 Listen</button></div>`;
        }

        html += `<div class="mc-options">` + finalOpts.map((o, i) =>
          `<button class="mc-opt" onclick="cosyPractice.checkMC(${i})">${o}</button>`).join('') + `</div>`;
      } else if (q.type === 'tf') {
        html += `<div class="tf-btns">
          <button class="tf-btn" onclick="cosyPractice.checkTF(true)">✅ True</button>
          <button class="tf-btn" onclick="cosyPractice.checkTF(false)">❌ False</button>
        </div>`;
      } else if (q.type === 'type') {
        html += `<div class="type-wrap">
          <input class="type-input" id="type-in" placeholder="Type your answer…" onkeydown="if(event.key==='Enter')cosyPractice.checkType()">
          <button class="btn-start" style="padding:11px 18px" onclick="cosyPractice.checkType()">Check</button>
        </div>`;
      } else if (q.type === 'conv') {
        html += `<div style="background:var(--cream);border-radius:var(--r-lg);padding:1rem 1.2rem;margin-bottom:1.3rem;border:1px solid var(--border)">
          <div style="font-size:.75rem;color:var(--ink-faint);margin-bottom:.4rem">🗣️ Speak your answer aloud</div>
          <div style="font-size:.92rem;color:var(--ink-muted);line-height:1.5">Aim for at least <strong>1 minute</strong>.</div>
        </div>`;
      }

      html += `<div class="pe-controls">
        ${q.type === 'conv' ? `<button class="pe-btn-next" onclick="cosyPractice.nextQ(true)">✓ Done speaking</button>` : `<button class="pe-btn-next" id="pe-next" onclick="cosyPractice.nextQ(null)" style="display:none">Next →</button>`}
        <button class="pe-btn-exit" onclick="cosyPractice.endSession()">Exit ✕</button>
      </div>`;

      document.getElementById('pe-body').innerHTML = html;
    }

    function taskTypeLabel(t) {
      const m = { mc:'Multiple choice', tf:'True / False', type:'Type the answer', conv:'Speaking task', ls:'Listen & select' };
      return m[t] || t;
    }

    function showFeedback(ok, msg) {
      const fb = document.getElementById('pe-fb');
      fb.className = `pe-feedback show ${ok ? 'ok' : 'bad'}`;
      fb.innerHTML = msg;
      fb.style.display = 'block';
      const nxt = document.getElementById('next-btn') || document.getElementById('pe-next');
      if (nxt) {
          nxt.style.display = 'inline-block';
          nxt.classList.remove('hidden');
      }
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

    function endSession_summary() {
      document.getElementById('progress-fill').style.width = '100%';
      document.getElementById('practice-section').style.display = 'none';
      const summary = document.getElementById('summary-modal');
      summary.style.display = 'block';
      summary.classList.add('active');
      summary.classList.remove('hidden');

      if (STATE.lastDate !== todayStr || STATE.sessions === 0) { STATE.streak++; STATE.lastDate = todayStr; }
      STATE.sessions++;
      saveState(STATE);
      updateDashboardUI();

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
    window.cosyPractice = {
        quickStart: async (lang, cat, level, theme) => {
            const lp = document.querySelector(`.lang-pill[data-value="${lang}"]`);
            if (lp) selectLang(lp);
            const cp = document.querySelector(`.cat-pill[data-value="${cat}"]`);
            if (cp) selectCat(cp);
            await ensureDataLoaded(lang.toUpperCase(), level);
            beginSession(lang.toUpperCase(), cat, level, theme, false);
        },
        startDailyChallenge: () => beginSession('EN', 'Vocabulary', 'A2', 'all', true),
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
                const opts = q.dynamicOpts || q.opts;
                showFeedback(false, 'Incorrect. Answer: ' + (opts ? opts[ans] : 'Unknown'));
            }
        },
        checkTF: (val) => {
            const q = window.SESSION.qs[window.SESSION.idx];
            if (val === q.ans) { awardPoints(10); showFeedback(true, 'Correct! +10 pts'); }
            else { showFeedback(false, 'Incorrect.'); }
        },
        checkType: () => {
            const q = window.SESSION.qs[window.SESSION.idx];
            const val = document.getElementById('type-in').value.trim().toLowerCase();
            if (val === q.ans.toLowerCase()) { awardPoints(15); showFeedback(true, 'Correct! +15 pts'); }
            else { showFeedback(false, 'Incorrect. Answer: ' + q.ans); }
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
        initWheel();
    });

})();
