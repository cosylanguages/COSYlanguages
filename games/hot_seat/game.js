/**
 * games/hot_seat/game.js
 * Standalone logic for Hot Seat.
 */
(function() {
    const GAME_ID = 'hotseat';
    const GAME_TITLE = 'Hot Seat 🎯';
    const GAME_META = 'Vocabulary · Solo';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function pick(arr) { if (!arr || !arr.length) return null; return arr[Math.floor(Math.random() * arr.length)]; }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Hot Seat 🎯</h2>
              <p>Quick-fire round! You have 60 seconds to answer as many vocabulary questions as possible. Plurals, definitions, and sentences.</p>
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

            const body = document.getElementById('go-body');
            let active = true;

            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            if (vocab.length < 5) {
                body.innerHTML = '<div class="game-card">Not enough vocabulary loaded. <button onclick="COSY_GAME.reset()">Back</button></div>';
                return;
            }

            const nextQ = () => {
                if (!active) return;
                const item = pick(vocab);
                const types = ['plural', 'definition', 'sentence'];
                const type = pick(types);

                let prompt = '', answer = '';
                if (type === 'plural') {
                    prompt = `What is the plural of <strong>${item.word}</strong>?`;
                    answer = item.plural || (item.word + 's');
                } else if (type === 'definition') {
                    prompt = `Define the word <strong>${item.word}</strong>.`;
                    answer = item.definitions?.[0]?.text || '...';
                } else {
                    prompt = `Use <strong>${item.word}</strong> in a sentence.`;
                    answer = item.definitions?.[0]?.examples?.[0]?.text || item.definitions?.[0]?.examples?.[0] || '...';
                }

                body.innerHTML = `
                    <div class="score-bar">
                        <div class="sb-item"><div class="sb-val">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                        <div class="sb-item"><div class="sb-val" id="hs-timer">--</div><div class="sb-lbl">Sec</div></div>
                    </div>
                    <div class="game-card" style="text-align:center">
                        <div class="game-label">🎯 Hot Seat</div>
                        <div class="game-prompt" style="font-size:1.4rem">${prompt}</div>
                        <div style="font-size:.8rem; color:var(--ink-faint); margin: 1rem 0;">Suggested: "${answer}"</div>
                        <div class="game-controls" style="justify-content:center; gap:1rem">
                            <button class="btn-g-primary" style="background:var(--green)" onclick="COSY_GAME.hsResult(true)">✓ Got it!</button>
                            <button class="btn-g-secondary" onclick="COSY_GAME.hsResult(false)">✗ Missed</button>
                        </div>
                    </div>`;
            };

            window.COSY_GAME.hsResult = (ok) => { if (ok) COSYGame.addScore(10); nextQ(); };

            gameUtils.startTimer('hs-timer', 60, () => {
                active = false;
                COSYScores.save(GAME_ID, lang, level, COSYGame.score);
                body.innerHTML = `
                    <div class="round-end">
                        <div class="re-icon">🏆</div>
                        <div class="re-title">Round Over!</div>
                        <div class="re-sub">You answered <strong>${COSYGame.score / 10}</strong> questions correctly. Total: ${COSYGame.score} pts.</div>
                        <div class="re-actions">
                            <button class="btn-g-primary" onclick="COSY_GAME.start()">Play again ↺</button>
                            <button class="btn-g-secondary" onclick="location.href='../index.html'">Back to hub</button>
                        </div>
                    </div>`;
            });

            nextQ();
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
