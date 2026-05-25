/**
 * games/critics_corner/game.js
 * Standalone logic for Critic's Corner.
 */
(function() {
    const GAME_ID = 'critic';
    const GAME_TITLE = "Critic's Corner 🎭";
    const GAME_META = 'Speaking · Solo or group · B2+';
    const LEVEL_OPTS = ['Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
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
              <h2>Critic's Corner 🎭</h2>
              <p>A famous quote appears. What does it mean? Do you agree? Share your thoughts for 2–3 minutes. Perfect for advanced learners who want nuanced expression.</p>
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
            const item = pick(data.critic || ['...']);
            const body = document.getElementById('go-body');
            const DUR = 150;

            let qText = '', author = '', origin = '', category = '', task = '', qs = [];
            if (typeof item === 'string') {
                qText = item;
                task = "Describe what this quote means to you.";
            } else {
                qText = item.q || item.text || '...';
                author = item.a || item.author || '';
                origin = item.o || '';
                category = item.c || '';
                task = item.task || "Describe what this quote means to you.";
                qs = item.qs || [];
            }

            body.innerHTML = `
              <div class="game-card">
                <div class="game-label">🎭 Famous quote ${category ? '· ' + category : ''}</div>
                <div class="game-prompt" style="font-style:italic;font-size:1.1rem">"${qText}"</div>
                ${author ? `<div style="text-align:right; font-weight:700; margin-top:.5rem; color:var(--ink-muted)">— ${author}${origin ? `, <span style="font-weight:400; font-style:italic">${origin}</span>` : ''}</div>` : ''}

                <div style="background:var(--sage-light); border-radius:12px; padding:14px; margin-top:1.25rem; border:1px solid rgba(107,143,113,.2); text-align:left;">
                    <div style="font-size:.65rem; text-transform:uppercase; font-weight:900; color:var(--sage-dark); margin-bottom:.4rem; letter-spacing:.05em;">Task</div>
                    <div style="font-size:.9rem; line-height:1.5; color:var(--ink); font-weight:700;">${task}</div>
                </div>

                ${qs.length ? `
                    <div style="margin-top:1.5rem; border-top:1px solid var(--border); padding-top:1rem;">
                        <div style="font-size:.7rem; text-transform:uppercase; font-weight:800; color:var(--ink-faint); margin-bottom:.5rem;">Deep discussion</div>
                        <ul style="font-size:.85rem; color:var(--ink-muted); padding-left:1.2rem; margin:0; text-align:left;">
                            ${qs.map(q => `<li style="margin-bottom:.4rem">${q}</li>`).join('')}
                        </ul>
                    </div>` : ''}

                <div style="margin-top:2rem" id="timer-container">
                    ${gameUtils.renderTimerRing(DUR, DUR)}
                </div>

                <div class="game-controls" style="margin-top:1.5rem">
                  <button class="btn-g-primary" id="cc-btn" onclick="COSY_GAME.ccStart(${DUR})">▶ Start speaking</button>
                  <button class="btn-g-secondary" onclick="COSY_GAME.start()">New quote ↺</button>
                  <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ Setup</button>
                </div>
              </div>`;
        },

        ccStart(dur) {
            const btn = document.getElementById('cc-btn');
            if (btn) btn.style.display = 'none';
            gameUtils.startTimer('timer-val', dur, () => {
              COSYGame.addScore(15);
              document.getElementById('go-body').insertAdjacentHTML('beforeend',`
                <div class="game-card" style="text-align:center; margin-top:1rem;">
                  <div style="font-size:1.8rem;margin-bottom:.5rem">🎓</div>
                  <div class="game-prompt" style="font-size:1.1rem">Excellent analysis!</div>
                  <div class="re-actions" style="margin-top:.75rem">
                    <button class="btn-g-primary" onclick="COSY_GAME.start()">New quote ↺</button>
                  </div>
                </div>`);
            });
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
