/**
 * games/opinion_arena/game.js
 * Standalone logic for Opinion Arena.
 */
(function() {
    const GAME_ID = 'opinion';
    const GAME_TITLE = 'Opinion Arena 🏟️';
    const GAME_META = 'Speaking · Solo or group · A2+';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

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
              <h2>Opinion Arena 🏟️</h2>
              <p>A statement appears. Agree or disagree — then speak for 1–2 minutes defending your view. Great for building confident, opinionated language.</p>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start game</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const data = COSYLoader.getGameData(lang);
            const rawItem = pick(data.opinions || ['...']);
            const stmt = typeof rawItem === 'string' ? rawItem : (rawItem.topic || rawItem.text || rawItem.t || '...');
            const hints = (rawItem.hints || rawItem.h || []);
            const body = document.getElementById('go-body');
            const DUR = 90;

            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🏟️ Statement</div>
                <div class="game-prompt">"${esc(stmt)}"</div>
                ${hints.length > 0 ? `
                    <div style="font-size:.7rem; font-weight:700; text-transform:uppercase; color:var(--sage-dark); margin: .5rem 0 .5rem;">💡 Ideas for you:</div>
                    <ul style="font-size:.85rem; text-align:left; margin:0 0 1rem 1rem; padding:0; line-height:1.4">
                        ${hints.map(h => `<li>${esc(h)}</li>`).join('')}
                    </ul>` : ''}
                <div class="game-sub" style="margin-top:.6rem">Do you agree or disagree? Choose a side, then speak for 90 seconds defending your view.</div>
              </div>
              <div class="setup-options" style="margin-bottom:1rem">
                <div class="setup-opt" onclick="COSY_GAME.selectOpt(this);document.getElementById('op-start').disabled=false" data-val="agree">I Agree</div>
                <div class="setup-opt" onclick="COSY_GAME.selectOpt(this);document.getElementById('op-start').disabled=false" data-val="disagree">I Disagree</div>
              </div>
              <div class="game-controls">
                <button class="btn-g-primary" id="op-start" disabled onclick="COSY_GAME.speak('${stmt.replace(/'/g,"\\'")}',${DUR})">▶ Start speaking</button>
                <button class="btn-g-secondary" onclick="COSY_GAME.start()">New statement ↺</button>
                <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ Setup</button>
              </div>`;
        },

        selectOpt(el) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        speak(stmt, dur) {
            const body = document.getElementById('go-body');
            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🏟️ Speak now</div>
                <div class="game-prompt" style="font-size:1rem;margin-bottom:.4rem">"${stmt}"</div>
                <div class="game-sub">Keep speaking until the timer runs out. Stay in your target language!</div>
                <div id="timer-container">${gameUtils.renderTimerRing(dur, dur)}</div>
                <div class="game-controls">
                  <button class="btn-g-secondary" onclick="COSY_GAME.start()">New statement ↺</button>
                  <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ Setup</button>
                </div>
              </div>`;
            gameUtils.startTimer('timer-val', dur, () => {
              COSYGame.addScore(10);
              document.getElementById('go-body').insertAdjacentHTML('beforeend', `
                <div class="game-card" style="text-align:center; margin-top:1rem;">
                  <div style="font-size:1.8rem;margin-bottom:.5rem">🏆</div>
                  <div class="game-prompt" style="font-size:1.1rem">Time's up!</div>
                  <div class="game-sub">Great job defending your position. Play again?</div>
                  <div class="game-controls" style="justify-content:center;margin-top:.75rem">
                    <button class="btn-g-primary" onclick="COSY_GAME.start()">New statement ↺</button>
                  </div>
                </div>`);
            });
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
