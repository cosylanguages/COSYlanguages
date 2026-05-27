/**
 * games/fluency_flow/game.js
 * Standalone logic for Fluency Flow.
 */
(function() {
    const GAME_ID = 'fluency';
    const GAME_TITLE = 'Fluency Flow 🗣️';
    const GAME_META = 'Speaking · Solo or group';
    const DUR_OPTS = ['1 minute','2 minutes','3 minutes','5 minutes'];
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    let TIMER_INTERVAL = null;

    function esc(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function pick(arr) { if (!arr || !arr.length) return null; return arr[Math.floor(Math.random() * arr.length)]; }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Fluency Flow 🗣️</h2>
              <p>A topic will appear. Speak about it for the chosen duration without stopping. The goal is fluency — keep the words coming, don't worry about mistakes.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Duration</label>
                <div class="setup-options">${DUR_OPTS.map((d,i)=>`<div class="setup-opt ${i===1?'sel':''}" onclick="COSY_GAME.selectOpt(this,'dur')" data-val="${d}"><span class="setup-opt-icon">⏱</span>${d}</div>`).join('')}</div>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start game</button>
            </div>`;
    }

    window.COSY_GAME = {
        selectOpt(el, group) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading data...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const data = COSYLoader.getGameData(lang);
            const durStr = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || '2 minutes';
            const dur = parseInt(durStr) * 60;
            const body = document.getElementById('go-body');
            let running = false;

            const showTopic = () => {
              const rawItem = pick(data.fluency || ['...']);
              const topic = typeof rawItem === 'string' ? rawItem : (rawItem.topic || rawItem.text || rawItem.t || '...');
              const hints = (rawItem.hints || rawItem.h || []);

              body.innerHTML = `
                <div class="score-bar">
                  <div class="sb-item"><div class="sb-val" id="ff-score">${COSYGame.score}</div><div class="sb-lbl">Topics done</div></div>
                  <div class="sb-item"><div class="sb-val">${durStr}</div><div class="sb-lbl">Per topic</div></div>
                </div>
                <div class="game-card">
                  <div class="game-label">🗣️ Your topic</div>
                  <div class="game-prompt" id="ff-topic">${esc(topic)}</div>
                  ${hints.length > 0 ? `
                    <div style="font-size:.7rem; font-weight:700; text-transform:uppercase; color:var(--sage-dark); margin: .5rem 0 .5rem;">💡 Ideas for you:</div>
                    <ul style="font-size:.85rem; text-align:left; margin:0 0 1rem 1rem; padding:0; line-height:1.4">
                        ${hints.map(h => `<li>${esc(h)}</li>`).join('')}
                    </ul>` : ''}
                  <div class="game-sub">Speak about this topic for <strong>${durStr}</strong> without stopping. Don't worry about mistakes — keep talking!</div>
                  <div id="timer-container">${gameUtils.renderTimerRing(dur, dur)}</div>
                  <div class="game-controls">
                    <button class="btn-g-primary" id="ff-btn" onclick="COSY_GAME.toggleTimer(${dur})">▶ Start speaking</button>
                    <button class="btn-g-secondary" onclick="COSY.addToDict({word: '${topic.replace(/'/g,"\\'")}', definition: 'Fluency Flow Topic'}, this)">+ Vocabulary</button>
                    <button class="btn-g-secondary" onclick="COSY_GAME.start()">New topic ↺</button>
                    <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ Setup</button>
                  </div>
                </div>`;
            }

            window.COSY_GAME.toggleTimer = (total) => {
                if (!running) {
                  running = true;
                  document.getElementById('ff-btn').textContent = '⏸ Pause';
                  gameUtils.startTimer('timer-val', total, () => {
                    running = false;
                    COSYGame.addScore(1);
                    const scoreEl = document.getElementById('ff-score');
                    if (scoreEl) scoreEl.textContent = COSYGame.score;
                    const btn = document.getElementById('ff-btn');
                    if (btn) {
                        btn.textContent = '✓ Done! Next topic →';
                        btn.onclick = () => { showTopic(); };
                    }
                  });
                } else {
                  gameUtils.stopTimer(); running = false;
                  document.getElementById('ff-btn').textContent = '▶ Resume';
                }
            };

            showTopic();
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
