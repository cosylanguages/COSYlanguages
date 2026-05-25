/**
 * games/lucky_numbers/game.js
 * Standalone logic for Lucky Numbers (Bingo).
 */
(function() {
    const GAME_ID = 'bingo';
    const GAME_TITLE = 'Lucky Numbers 🔢';
    const GAME_META = 'Puzzles · Solo or group';
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];
    const BINGO_LVLS = ['Bingo 1 (0-9)', 'Bingo 2 (10-19)', 'Bingo 3 (20-99)', 'Bingo 5 (Random)', 'Alphabet (A-Z)', 'Listening Practice 👂'];

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Lucky Numbers 🔢</h2>
              <p>Play Bingo! You can be the <strong>Caller</strong> for a group, or play as a <strong>Player</strong> (solo or with a host).</p>
              <div style="background:var(--gold-light); padding:8px 12px; border-radius:8px; font-size:.8rem; color:var(--gold); margin-bottom:1rem; border:1px solid rgba(176,125,43,.2);">
                📍 Level: Starter (A1)
              </div>
              <div class="setup-field"><label>Role</label>
                <div class="setup-options">
                  <div class="setup-opt sel" onclick="COSY_GAME.selectOpt(this)" data-val="player">🃏 Player</div>
                  <div class="setup-opt" onclick="COSY_GAME.selectOpt(this)" data-val="caller">📣 Caller</div>
                </div>
              </div>
              <div class="setup-field"><label>Type</label>
                <select class="styled-sel" id="s-type">${BINGO_LVLS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start game</button>
            </div>`;
    }

    window.COSY_GAME = {
        selectOpt(el) {
            el.closest('.setup-options').querySelectorAll('.setup-opt').forEach(o => o.classList.remove('sel'));
            el.classList.add('sel');
        },

        async start() {
            const role = document.querySelector('.setup-opt.sel[data-val]')?.dataset.val || 'player';
            const body = document.getElementById('go-body');
            const type = document.getElementById('s-type')?.value || 'Bingo 1 (0-9)';
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = 'starter';
            body.innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const isListening = type.includes('Listening');

            if (role === 'caller') {
                body.innerHTML = `
                    <div class="game-card" style="text-align:center">
                        <div class="game-label">📣 Lucky Caller</div>
                        <div class="game-prompt" id="bingo-call" style="font-size:5rem">${isListening ? '👂' : '---'}</div>
                        <div class="game-sub" id="bingo-call-word">Get ready to call!</div>
                        <div class="game-controls" style="justify-content:center; margin-top:2rem">
                            <button class="btn-g-primary" onclick="COSY_GAME.bingoNext()">Next Item 🎲</button>
                            <button class="btn-g-danger" onclick="COSY_GAME.reset()">Stop</button>
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

                window.COSY_GAME.bingoNext = () => {
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
                    if (gameUtils?.speak) gameUtils.speak(item.toString(), lang);
                };
            } else {
                body.innerHTML = `
                    <div class="game-card" style="text-align:center">
                        <div class="game-label">🃏 Your Bingo Card</div>
                        <div id="bingo-grid" class="bingo-grid" style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin:1.5rem 0"></div>
                        <div class="game-controls" style="justify-content:center">
                            <button class="btn-g-secondary" onclick="COSY_GAME.start()">New Card ↺</button>
                            <button class="btn-g-danger" onclick="COSY_GAME.reset()">Setup</button>
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
                    cell.onclick = () => {
                        cell.classList.toggle('correct');
                        if (cell.classList.contains('correct')) COSYGame.addScore(5);
                    };
                    grid.appendChild(cell);
                });
            }
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
