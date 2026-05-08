/**
 * unified-engine.js — Unified Games Logic for COSYlanguages
 * ─────────────────────────────────────────────────────────────────────────────
 */

(function () {
    'use strict';

    /* ══════════════════════════════════════
       GAME DATA
    ══════════════════════════════════════ */
    const TOPICS = {
      fluency: [
        'Your perfect holiday destination 🌴','A skill you wish you had 🎸','The best meal you ever ate 🍜',
        'A place you want to visit 🗺️','Your favourite season and why 🍂','A childhood memory 🧸',
        'The most interesting person you know 🙋','What would you do with 1 million euros? 💰',
        'Describe your perfect weekend ☀️','A book or film that changed your view 📚',
        'If you could live anywhere in the world… 🌍','Your morning routine ☕',
        'Something you\'re proud of 🏆','What does happiness mean to you? 😊',
        'The last time you tried something new 🎯',
      ],
      opinion: [
        'Social media does more harm than good.','Everyone should learn at least two languages.',
        'Working from home is better than office work.','Money can\'t buy happiness.',
        'Technology makes us less sociable.','It\'s never too late to learn something new.',
        'Travel is the best form of education.','Animals should not be kept in zoos.',
        'Fast food is one of the worst inventions.','Reading books is more valuable than watching films.',
        'Cities are better places to live than the countryside.','Artificial intelligence will change everything.',
        'Cooking at home is always better than eating out.','Children should learn a musical instrument.',
        'The world would be better with one universal language.',
      ],
      battle: [
        ['Mountains 🏔️','Beach 🏖️'],['Coffee ☕','Tea 🍵'],['Morning person 🌅','Night owl 🦉'],
        ['City life 🏙️','Country life 🌾'],['Reading 📚','Watching films 🎬'],
        ['Summer ☀️','Winter ❄️'],['Cats 🐱','Dogs 🐶'],['Working from home 🏠','Office work 🏢'],
        ['Sweet 🍰','Savoury 🧀'],['Travelling alone ✈️','Travelling with friends 👥'],
      ],
      critic: [
        '"The only way to do great work is to love what you do." — Steve Jobs',
        '"In the middle of every difficulty lies opportunity." — Albert Einstein',
        '"The journey of a thousand miles begins with one step." — Lao Tzu',
        '"Be the change you wish to see in the world." — Gandhi',
        '"It does not matter how slowly you go as long as you do not stop." — Confucius',
        '"The best time to plant a tree was 20 years ago. The second best time is now." — Proverb',
        '"You miss 100% of the shots you don\'t take." — Wayne Gretzky',
        '"Imagination is more important than knowledge." — Einstein',
        '"Life is what happens when you\'re busy making other plans." — John Lennon',
        '"The unexamined life is not worth living." — Socrates',
      ],
      action: {
        A1: ['Cat','Dog','House','Car','Book','Water','Sun','Moon','Tree','Phone','Door','Chair','Bed','Food','Fish'],
        A2: ['Kitchen','Garden','Train','Doctor','Teacher','Music','Birthday','Swimming','Holiday','Shopping'],
        B1: ['Museum','Interview','Architect','Journalist','Parliament','Orchestra','Marathon','Exhibition'],
        B2: ['Philanthropy','Ambassador','Hypothesis','Entrepreneur','Archaeology','Telescope','Symposium'],
      },
      identity: [
        { person:'A firefighter', clue:'They wear a helmet and fight with water.' },
        { person:'A chef', clue:'They work in a kitchen and create dishes.' },
        { person:'An astronaut', clue:'They travel beyond our planet.' },
        { person:'A librarian', clue:'They are surrounded by books all day.' },
        { person:'A detective', clue:'They solve mysteries and look for clues.' },
        { person:'A musician', clue:'They use instruments to create sound.' },
        { person:'An architect', clue:'They design buildings before they are built.' },
        { person:'A surgeon', clue:'They operate on people inside a hospital.' },
        { person:'A diplomat', clue:'They work between governments of different countries.' },
        { person:'A marine biologist', clue:'They study life in the ocean.' },
      ],
      wordlinker: [
        { words:['Apple','Orange','Banana','Carrot'], odd:'Carrot', link:'Fruits', oddReason:'Carrot is a vegetable' },
        { words:['Paris','Rome','Tokyo','Amazon'], odd:'Amazon', link:'Capital cities', oddReason:'Amazon is a river, not a city' },
        { words:['Piano','Guitar','Violin','Trumpet'], odd:'none', link:'Musical instruments', oddReason:'All are instruments' },
        { words:['Happy','Joyful','Melancholy','Cheerful'], odd:'Melancholy', link:'Happy synonyms', oddReason:'Melancholy means sad' },
        { words:['Run','Jump','Sleep','Swim'], odd:'Sleep', link:'Active physical verbs', oddReason:'Sleep is passive' },
        { words:['Red','Blue','Heavy','Green'], odd:'Heavy', link:'Colours', oddReason:'Heavy is not a colour' },
        { words:['Shakespeare','Dickens','Picasso','Austen'], odd:'Picasso', link:'English authors', oddReason:'Picasso was a Spanish painter' },
        { words:['Sunrise','Dawn','Dusk','Twilight'], odd:'none', link:'Times of day near sunrise/sunset', oddReason:'All describe transitional light' },
      ],
    };

    const GAME_META = {
      fluency:    { title:'Fluency Flow 🗣️',   meta:'Speaking · Solo or group' },
      battle:     { title:'Battle of Wits ⚖️',  meta:'Speaking · Group · B1+' },
      opinion:    { title:'Opinion Arena 🏟️',   meta:'Speaking · Solo or group · A2+' },
      critic:     { title:"Critic's Corner 🎭", meta:'Speaking · Solo or group · B2+' },
      action:     { title:'Action Hero 🎭',     meta:'Mystery · Group' },
      identity:   { title:'Identity Mystery 👤',meta:'Mystery · Solo or group' },
      wordlinker: { title:'Word Linker 🔗',     meta:'Vocabulary · Solo or group' },
      lastletter: { title:'Last Letter 🔤',     meta:'Vocabulary · Solo or group' },
    };

    /* ══════════════════════════════════════
       STATE
    ══════════════════════════════════════ */
    let CURRENT_GAME = null;
    let TIMER_INTERVAL = null;

    /* ══════════════════════════════════════
       HELPERS
    ══════════════════════════════════════ */
    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function startTimer(seconds, onTick, onEnd) {
      clearInterval(TIMER_INTERVAL);
      let remaining = seconds;
      onTick(remaining);
      TIMER_INTERVAL = setInterval(() => {
        remaining--;
        onTick(remaining);
        if (remaining <= 0) { clearInterval(TIMER_INTERVAL); onEnd(); }
      }, 1000);
    }

    function renderTimerRing(seconds, total) {
      const r = 36, circ = 2 * Math.PI * r;
      const offset = circ * (1 - seconds / total);
      const color = seconds > total * 0.4 ? '#6b8f71' : seconds > total * 0.2 ? '#e8a838' : '#c4522a';
      return `
        <div class="timer-ring-wrap">
          <div class="timer-ring">
            <svg width="90" height="90" viewBox="0 0 90 90">
              <circle cx="45" cy="45" r="${r}" fill="none" stroke="var(--border)" stroke-width="6"/>
              <circle cx="45" cy="45" r="${r}" fill="none" stroke="${color}" stroke-width="6"
                stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
                style="transition:stroke-dashoffset .9s linear,stroke .3s"/>
            </svg>
            <div class="timer-inner">
              <div class="timer-val" id="timer-val">${seconds}</div>
              <div class="timer-lbl">sec</div>
            </div>
          </div>
        </div>`;
    }

    function updateTimerRing(seconds, total) {
      const r = 36, circ = 2 * Math.PI * r;
      const offset = circ * (1 - seconds / total);
      const color = seconds > total * 0.4 ? '#6b8f71' : seconds > total * 0.2 ? '#e8a838' : '#c4522a';
      const tv = document.getElementById('timer-val');
      if (tv) tv.textContent = seconds;
      const circles = document.querySelectorAll('#game-overlay circle:last-of-type');
      circles.forEach(c => {
        c.setAttribute('stroke-dashoffset', offset);
        c.setAttribute('stroke', color);
      });
    }

    function showFB(el, type, msg) {
        el.className = `feedback-bar show ${type}`;
        el.innerHTML = msg;
        clearTimeout(el._t);
        el._t = setTimeout(() => { el.className = 'feedback-bar'; }, 2500);
    }

    /* ══════════════════════════════════════
       CORE API
    ══════════════════════════════════════ */
    window.openGame = function(id) {
      CURRENT_GAME = id;
      clearInterval(TIMER_INTERVAL);
      const overlay = document.getElementById('game-overlay');
      if (!overlay) return;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      renderSetup(id);
    }

    window.closeGame = function() {
      clearInterval(TIMER_INTERVAL);
      const overlay = document.getElementById('game-overlay');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
      CURRENT_GAME = null;
    }

    window.setFilter = function(f, btn) {
        document.querySelectorAll('.fpill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.gc:not(.coming)').forEach(card => {
          const tags = card.dataset.tags || '';
          card.style.display = (f === 'all' || tags.includes(f)) ? '' : 'none';
        });
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

        const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];
        const DUR_OPTS  = ['1 minute','2 minutes','3 minutes','5 minutes'];
        const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)'];

        if (id === 'fluency') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Fluency Flow 🗣️</h2>
              <p>A topic will appear. Speak about it for the chosen duration without stopping. The goal is fluency — keep the words coming, don't worry about mistakes.</p>
              <div class="setup-field"><label>Duration</label>
                <div class="setup-options">${DUR_OPTS.map((d,i)=>`<div class="setup-opt ${i===1?'sel':''}" onclick="COSY_ENGINE.selectOpt(this,'dur')" data-val="${d}"><span class="setup-opt-icon">⏱</span>${d}</div>`).join('')}</div>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startFluency()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'opinion') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Opinion Arena 🏟️</h2>
              <p>A statement appears. Agree or disagree — then speak for 1–2 minutes defending your view. Great for building confident, opinionated language.</p>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startOpinion()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'battle') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Battle of Wits ⚖️</h2>
              <p>Two things are shown. Each player (or team) picks a side and argues for it. After 2 minutes each, the group votes on who was most convincingly.</p>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startBattle()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'critic') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Critic's Corner 🎭</h2>
              <p>A famous quote appears. What does it mean? Do you agree? Share your thoughts for 2–3 minutes. Perfect for advanced learners who want nuanced expression.</p>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startCritic()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'action') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Action Hero 🎭</h2>
              <p>Hold your phone to your forehead (screen facing others). They describe the word — you guess. Each round is 60 seconds. Pass or guess as many words as you can.</p>
              <div class="setup-field"><label>Level</label>
                <div class="setup-options">${LEVEL_OPTS.slice(0,4).map((l,i)=>`<div class="setup-opt ${i===1?'sel':''}" onclick="COSY_ENGINE.selectOpt(this,'level')" data-val="${['A1','A2','B1','B2'][i]}"><span class="setup-opt-icon">📊</span>${l}</div>`).join('')}</div>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startAction()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'identity') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Identity Mystery 👤</h2>
              <p>A profession or person is shown (only to the host). Other players ask yes/no questions to figure out who it is. Great for practising question structures.</p>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startIdentity()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'wordlinker') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Word Linker 🔗</h2>
              <p>Four words appear. Find the connection between three of them — and spot the odd one out. Tests vocabulary depth and lateral thinking.</p>
              <button class="btn-start-game" onclick="COSY_ENGINE.startWordLinker()">▶ Start game</button>
            </div>`;
        }
        else if (id === 'lastletter') {
          body.innerHTML = `
            <div class="setup-screen">
              <h2>Last Letter 🔤</h2>
              <p>Type a word. The next word must start with the last letter of the previous word. Keep the chain going as long as possible without repeating!</p>
              <div class="setup-field"><label>Language category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="any">Any word</option>
                  <option value="noun">Nouns only</option>
                  <option value="adj">Adjectives only</option>
                  <option value="animal">Animals 🐾</option>
                  <option value="food">Food & drink 🍕</option>
                  <option value="place">Places 🌍</option>
                </select>
              </div>
              <button class="btn-start-game" onclick="COSY_ENGINE.startLastLetter()">▶ Start game</button>
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

        startFluency() {
            const durStr = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || '2 minutes';
            const dur = parseInt(durStr) * 60;
            const body = document.getElementById('go-body');
            let sessionScore = 0;
            let running = false;

            const showTopic = () => {
              body.innerHTML = `
                <div class="score-bar">
                  <div class="sb-item"><div class="sb-val" id="ff-score">${sessionScore}</div><div class="sb-lbl">Topics done</div></div>
                  <div class="sb-item"><div class="sb-val">${durStr}</div><div class="sb-lbl">Per topic</div></div>
                </div>
                <div class="game-card">
                  <div class="game-label">🗣️ Your topic</div>
                  <div class="game-prompt" id="ff-topic">${pick(TOPICS.fluency)}</div>
                  <div class="game-sub">Speak about this topic for <strong>${durStr}</strong> without stopping. Don't worry about mistakes — keep talking!</div>
                  ${renderTimerRing(dur, dur)}
                  <div class="game-controls">
                    <button class="btn-g-primary" id="ff-btn" onclick="COSY_ENGINE.ffToggle(${dur})">▶ Start speaking</button>
                    <button class="btn-g-secondary" onclick="COSY_ENGINE.startFluency()">New topic ↺</button>
                    <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('fluency')">⬅ Setup</button>
                  </div>
                </div>`;
            }

            window.COSY_ENGINE.ffToggle = (total) => {
                if (!running) {
                  running = true;
                  document.getElementById('ff-btn').textContent = '⏸ Pause';
                  startTimer(total, (t) => updateTimerRing(t, total), () => {
                    running = false;
                    sessionScore++;
                    const scoreEl = document.getElementById('ff-score');
                    if (scoreEl) scoreEl.textContent = sessionScore;
                    const btn = document.getElementById('ff-btn');
                    if (btn) {
                        btn.textContent = '✓ Done! Next topic →';
                        btn.onclick = () => { showTopic(); };
                    }
                  });
                } else {
                  clearInterval(TIMER_INTERVAL); running = false;
                  document.getElementById('ff-btn').textContent = '▶ Resume';
                }
            };

            showTopic();
        },

        startOpinion() {
            const stmt = pick(TOPICS.opinion);
            const body = document.getElementById('go-body');
            const DUR = 90;

            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🏟️ Statement</div>
                <div class="game-prompt">"${stmt}"</div>
                <div class="game-sub" style="margin-top:.6rem">Do you agree or disagree? Choose a side, then speak for 90 seconds defending your view.</div>
              </div>
              <div class="setup-options" style="margin-bottom:1rem">
                <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'stance');document.getElementById('op-start').disabled=false" data-val="agree"><span class="setup-opt-icon">✅</span>I agree</div>
                <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'stance');document.getElementById('op-start').disabled=false" data-val="disagree"><span class="setup-opt-icon">❌</span>I disagree</div>
              </div>
              <div class="game-controls">
                <button class="btn-g-primary" id="op-start" disabled onclick="COSY_ENGINE.opSpeak('${stmt.replace(/'/g,"\\'")}',${DUR})">▶ Start speaking</button>
                <button class="btn-g-secondary" onclick="COSY_ENGINE.startOpinion()">New statement ↺</button>
                <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('opinion')">⬅ Setup</button>
              </div>`;
        },

        opSpeak(stmt, dur) {
            const body = document.getElementById('go-body');
            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🏟️ Speak now</div>
                <div class="game-prompt" style="font-size:1rem;margin-bottom:.4rem">"${stmt}"</div>
                <div class="game-sub">Keep speaking until the timer runs out. Stay in your target language!</div>
                ${renderTimerRing(dur, dur)}
                <div class="game-controls">
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.startOpinion()">New statement ↺</button>
                  <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('opinion')">⬅ Setup</button>
                </div>
              </div>`;
            startTimer(dur, t => updateTimerRing(t, dur), () => {
              document.getElementById('go-body').insertAdjacentHTML('beforeend', `
                <div class="game-card" style="text-align:center">
                  <div style="font-size:1.8rem;margin-bottom:.5rem">🏆</div>
                  <div class="game-prompt" style="font-size:1.1rem">Time's up!</div>
                  <div class="game-sub">Great job defending your position. Play again?</div>
                  <div class="game-controls" style="justify-content:center;margin-top:.75rem">
                    <button class="btn-g-primary" onclick="COSY_ENGINE.startOpinion()">New statement ↺</button>
                  </div>
                </div>`);
            });
        },

        startBattle() {
            const pair = pick(TOPICS.battle);
            const body = document.getElementById('go-body');
            const DUR = 120;

            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">⚖️ Choose your side</div>
                <div class="game-prompt">Which is better?</div>
                <div class="setup-options" style="margin:1rem 0">
                  <div class="setup-opt sel" onclick="COSY_ENGINE.selectOpt(this,'side')" data-val="0"><span class="setup-opt-icon">🅰️</span>${pair[0]}</div>
                  <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'side')" data-val="1"><span class="setup-opt-icon">🅱️</span>${pair[1]}</div>
                </div>
                <div class="game-sub">Each side gets 2 minutes to argue their case. Then the group votes!</div>
                <div class="game-controls" style="margin-top:.5rem">
                  <button class="btn-g-primary" onclick="COSY_ENGINE.battleSpeak(${JSON.stringify(pair)},${DUR})">▶ Start debate</button>
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.startBattle()">New topic ↺</button>
                </div>
              </div>`;
        },

        battleSpeak(pair, dur) {
            let battleRound = 0;
            const doRound = () => {
              const side = pair[battleRound];
              const body = document.getElementById('go-body');
              body.innerHTML = `
                <div class="game-card">
                  <div class="game-label">⚖️ Round ${battleRound+1} of 2</div>
                  <div class="game-prompt">Arguing for: <em>${side}</em></div>
                  <div class="game-sub">Speak for 2 minutes. Be convincing!</div>
                  ${renderTimerRing(dur, dur)}
                  <div class="game-controls">
                    <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('battle')">⬅ Setup</button>
                  </div>
                </div>`;
              startTimer(dur, t => updateTimerRing(t, dur), () => {
                battleRound++;
                if (battleRound < 2) {
                  body.innerHTML = `
                    <div class="game-card" style="text-align:center">
                      <div style="font-size:1.8rem;margin-bottom:.5rem">👏</div>
                      <div class="game-prompt">Round ${battleRound} done!</div>
                      <div class="game-sub">Now it's <strong>${pair[battleRound]}</strong>'s turn.</div>
                      <button class="btn-g-primary" style="margin:1rem auto 0;display:block" onclick="COSY_ENGINE._doRound()">▶ Start round ${battleRound+1}</button>
                    </div>`;
                   // Export internal helper
                   window.COSY_ENGINE._doRound = doRound;
                } else {
                  body.innerHTML = `
                    <div class="round-end">
                      <div class="re-icon">🗳️</div>
                      <div class="re-title">Both sides heard!</div>
                      <div class="re-sub">Now vote — who argued most convincingly?</div>
                      <div class="setup-options" style="margin-bottom:1.2rem">
                        <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'vote')"><span>🅰️</span>${pair[0]}</div>
                        <div class="setup-opt" onclick="COSY_ENGINE.selectOpt(this,'vote')"><span>🅱️</span>${pair[1]}</div>
                      </div>
                      <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_ENGINE.startBattle()">Play again ↺</button>
                        <button class="btn-g-secondary" onclick="closeGame()">Back to games</button>
                      </div>
                    </div>`;
                }
              });
            }
            doRound();
        },

        startCritic() {
            const quote = pick(TOPICS.critic);
            const body = document.getElementById('go-body');
            const DUR = 150;

            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🎭 Famous quote</div>
                <div class="game-prompt" style="font-style:italic;font-size:1.1rem">${quote}</div>
                <div class="game-sub" style="margin-top:.75rem">What does this mean to you? Do you agree? Can you relate it to your own life? Speak for 2–3 minutes.</div>
                ${renderTimerRing(DUR, DUR)}
                <div class="game-controls">
                  <button class="btn-g-primary" id="cc-btn" onclick="COSY_ENGINE.ccStart(${DUR})">▶ Start speaking</button>
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.startCritic()">New quote ↺</button>
                  <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('critic')">⬅ Setup</button>
                </div>
              </div>`;
        },

        ccStart(dur) {
            const btn = document.getElementById('cc-btn');
            if (btn) btn.style.display = 'none';
            startTimer(dur, t => updateTimerRing(t, dur), () => {
              document.getElementById('go-body').insertAdjacentHTML('beforeend',`
                <div class="game-card" style="text-align:center">
                  <div style="font-size:1.8rem;margin-bottom:.5rem">🎓</div>
                  <div class="game-prompt" style="font-size:1.1rem">Excellent analysis!</div>
                  <div class="re-actions" style="margin-top:.75rem">
                    <button class="btn-g-primary" onclick="COSY_ENGINE.startCritic()">New quote ↺</button>
                  </div>
                </div>`);
            });
        },

        startAction() {
            const level = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || 'A2';
            const words = shuffle(TOPICS.action[level] || TOPICS.action['A2']);
            let idx = 0, correct = 0, skipped = 0;
            const DUR = 60;

            const showWord = () => {
              if (idx >= words.length) { showActionEnd(); return; }
              const body = document.getElementById('go-body');
              body.innerHTML = `
                <div class="game-card" style="text-align:center">
                  <div class="game-label">🎭 Hold to forehead · ${DUR}s</div>
                  <div class="game-prompt" style="font-size:2.5rem;letter-spacing:.05em">${words[idx]}</div>
                  <div class="game-sub">Others describe this word — you guess!</div>
                  ${renderTimerRing(DUR, DUR)}
                  <div class="game-controls" style="justify-content:center;gap:1rem">
                    <button class="btn-g-primary" style="background:var(--green)" onclick="COSY_ENGINE.ahResult(true)">✓ Got it!</button>
                    <button class="btn-g-secondary" onclick="COSY_ENGINE.ahResult(false)">Skip →</button>
                  </div>
                </div>
                <div style="text-align:center;font-size:.8rem;color:var(--ink-faint);margin-top:.5rem">✓ ${correct} correct · ↷ ${skipped} skipped</div>`;

              startTimer(DUR, t => updateTimerRing(t, DUR), showActionEnd);
            }

            const showActionEnd = () => {
              clearInterval(TIMER_INTERVAL);
              document.getElementById('go-body').innerHTML = `
                <div class="round-end">
                  <div class="re-icon">🏆</div>
                  <div class="re-title">Round over!</div>
                  <div class="re-sub">Time's up — here's how you did:</div>
                  <div class="re-stats">
                    <div class="sb-item"><div class="re-stat-val" style="color:var(--green)">${correct}</div><div class="re-stat-lbl">✓ Correct</div></div>
                    <div class="sb-item"><div class="re-stat-val" style="color:var(--ink-muted)">${skipped}</div><div class="re-stat-lbl">↷ Skipped</div></div>
                  </div>
                  <div class="re-actions">
                    <button class="btn-g-primary" onclick="COSY_ENGINE.startAction()">Play again ↺</button>
                    <button class="btn-g-secondary" onclick="closeGame()">Back to games</button>
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

        startIdentity() {
            const identity = pick(TOPICS.identity);
            const body = document.getElementById('go-body');
            let questions = 0, maxQ = 20;

            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">👤 Host only — keep this secret!</div>
                <div class="game-prompt">${identity.person}</div>
                <div class="game-sub">Clue for you: "${identity.clue}"<br><br>Others ask yes/no questions. You can only answer: <strong>Yes / No / Maybe / Partly</strong>.</div>
              </div>
              <div class="game-card">
                <div class="game-label">💬 Questions asked</div>
                <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:600;color:var(--teal);margin-bottom:.3rem" id="im-qcount">0 / ${maxQ}</div>
                <div style="font-size:.82rem;color:var(--ink-muted);margin-bottom:1rem">Each click records a question.</div>
                <div class="game-controls">
                  <button class="btn-g-primary" onclick="COSY_ENGINE.imQuestion(${maxQ}, '${identity.person.replace(/'/g,"\\'")}')">+1 Question asked</button>
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.imReveal('${identity.person.replace(/'/g,"\\'")}')">🎉 They guessed it!</button>
                  <button class="btn-g-danger" onclick="COSY_ENGINE.startIdentity()">New identity ↺</button>
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
                  <div class="re-sub">Guessed in ${questions} question${questions !== 1 ? 's' : ''}!</div>
                  <div class="re-actions">
                    <button class="btn-g-primary" onclick="COSY_ENGINE.startIdentity()">New identity ↺</button>
                    <button class="btn-g-secondary" onclick="closeGame()">Back to games</button>
                  </div>
                </div>`;
            };
        },

        startWordLinker() {
            let wlScore = 0, wlQ = 0;
            const nextWordLinker = () => {
                const q = pick(TOPICS.wordlinker);
                const body = document.getElementById('go-body');
                wlQ++;
                const shuffled = shuffle(q.words);
                const hasOdd = q.odd !== 'none';

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="wl-score">${wlScore}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${wlQ}</div><div class="sb-lbl">Question</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">🔗 ${hasOdd ? 'Find the odd one out' : 'What connects these words?'}</div>
                    <div class="word-options">
                      ${shuffled.map(w => `<button class="word-opt" onclick="COSY_ENGINE.wlGuess(this,'${w}','${q.odd}','${q.link}','${q.oddReason.replace(/'/g,"\\'")}',${hasOdd})">${w}</button>`).join('')}
                    </div>
                    <div class="feedback-bar" id="wl-fb"></div>
                    <div class="game-controls">
                      <button class="btn-g-primary" id="wl-next" onclick="COSY_ENGINE._nextWL()" style="display:none">Next →</button>
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
                      fb.innerHTML = `✓ The link is: <strong>${link}</strong>`;
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
                      fb.innerHTML = `✓ Correct! <strong>${odd}</strong> is the odd one out. ${reason}. The others are: ${link}.`;
                  }
                  wlScore++;
                  const scoreEl = document.getElementById('wl-score');
                  if (scoreEl) scoreEl.textContent = wlScore;
                } else {
                  el.classList.add('wrong');
                  document.querySelectorAll('.word-opt').forEach(b => { if (b.textContent === odd) b.classList.add('correct'); });
                  if (fb) {
                      fb.className = 'feedback-bar show bad';
                      fb.innerHTML = `✗ Not quite. The odd one out was <strong>${odd}</strong>. ${reason}.`;
                  }
                }
            };

            nextWordLinker();
        },

        startLastLetter() {
            let llChain = [], llScore = 0;
            const LL_USED = new Set();
            const body = document.getElementById('go-body');

            body.innerHTML = `
              <div class="score-bar">
                <div class="sb-item"><div class="sb-val" id="ll-score">0</div><div class="sb-lbl">Chain length</div></div>
                <div class="sb-item"><div class="sb-val" id="ll-next-letter">—</div><div class="sb-lbl">Must start with</div></div>
              </div>
              <div class="game-card">
                <div class="game-label">🔤 Word chain</div>
                <div class="chain-display" id="ll-chain">Type the first word to start the chain…</div>
                <div class="input-row">
                  <input class="game-input" id="ll-input" placeholder="Type a word…" autocomplete="off" autocorrect="off" spellcheck="false">
                  <button class="btn-g-primary" onclick="COSY_ENGINE.llSubmit()">Add →</button>
                </div>
                <div class="feedback-bar" id="ll-fb"></div>
                <div class="game-controls">
                  <button class="btn-g-secondary" onclick="COSY_ENGINE.startLastLetter()">Restart ↺</button>
                  <button class="btn-g-danger" onclick="COSY_ENGINE.renderSetup('lastletter')">⬅ Setup</button>
                </div>
              </div>`;

            const inputEl = document.getElementById('ll-input');
            if (inputEl) inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') window.COSY_ENGINE.llSubmit(); });

            window.COSY_ENGINE.llSubmit = () => {
                const input = document.getElementById('ll-input');
                const fb = document.getElementById('ll-fb');
                if (!input || !fb) return;
                const word = input.value.trim().toLowerCase().replace(/[^a-zàâäéèêëîïôùûüæœçñáíóúüý]/gi,'');
                input.value = '';

                if (!word || word.length < 2) {
                  showFB(fb, 'bad', 'Please enter a word with at least 2 letters.');
                  return;
                }
                if (LL_USED.has(word)) {
                  showFB(fb, 'bad', `"${word}" was already used! Try another.`);
                  input.classList.add('bad'); setTimeout(() => input.classList.remove('bad'), 600);
                  return;
                }
                if (llChain.length > 0) {
                  const lastChar = llChain[llChain.length - 1].slice(-1).toLowerCase();
                  if (word[0] !== lastChar) {
                    showFB(fb, 'bad', `"${word}" doesn't start with <strong>${lastChar.toUpperCase()}</strong>. Try again!`);
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
                showFB(fb, 'ok', `✓ "${word}" accepted! Next word must start with <strong>${word.slice(-1).toUpperCase()}</strong>.`);
                input.focus();
            };
        },

        renderSetup: renderSetup
    };

    /* ══════════════════════════════════════
       BOOT
    ══════════════════════════════════════ */
    document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeGame(); });

    window.addEventListener('load', () => {
        const urlGame = new URLSearchParams(window.location.search).get('game');
        if (urlGame && GAME_META[urlGame]) {
            window.openGame(urlGame);
        }
    });

})();
