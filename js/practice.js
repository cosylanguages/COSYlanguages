/**
 * COSYlanguages — practice.js
 * Extracted from the sophisticated new design.
 */

(function() {
    /* ══════════════════════════════════════
       STATE (persisted in localStorage)
    ══════════════════════════════════════ */
    function loadState() {
      try { return JSON.parse(localStorage.getItem('cosy_practice') || '{}'); } catch { return {}; }
    }
    function saveState(s) { localStorage.setItem('cosy_practice', JSON.stringify(s)); }

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
      if (STATE.lastDate !== yStr && STATE.lastDate !== '') STATE.streak = 0;
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
       SESSION ENGINE
    ══════════════════════════════════════ */
    window.SESSION = null;

    function startPractice() {
      const level = document.getElementById('practice-level').value;
      const theme = document.getElementById('practice-theme').value;
      beginSession(selectedLang, selectedCat, level, theme, false);
    }
    window.startPractice = startPractice;

    function beginSession(lang, cat, level, theme, isChallenge) {
      let qs = getQuestions(lang, cat, level, theme);
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

      if (q.type === 'mc') {
        html += `<div class="mc-options">` + q.opts.map((o, i) =>
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
      const m = { mc:'Multiple choice', tf:'True / False', type:'Type the answer', conv:'Speaking task' };
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
       GLOBAL EXPORTS
    ══════════════════════════════════════ */
    window.cosyPractice = {
        quickStart: (lang, cat, level, theme) => {
            const lp = document.querySelector(`.lang-pill[data-value="${lang}"]`);
            if (lp) selectLang(lp);
            const cp = document.querySelector(`.cat-pill[data-value="${cat}"]`);
            if (cp) selectCat(cp);
            beginSession(lang.toUpperCase(), cat, level, theme, false);
        },
        startDailyChallenge: () => beginSession('EN', 'Vocabulary', 'A2', 'all', true),
        skipDailyChallenge: () => { document.getElementById('daily-challenge').style.opacity = '0.5'; },
        openWheel: () => { alert('Spinning wheel coming soon!'); },
        checkMC: (i) => {
            const q = window.SESSION.qs[window.SESSION.idx];
            if (i === q.ans) { awardPoints(10); showFeedback(true, 'Correct! +10 pts'); }
            else { showFeedback(false, 'Incorrect. Answer: ' + q.opts[q.ans]); }
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

    document.addEventListener('DOMContentLoaded', updateDashboardUI);

})();
