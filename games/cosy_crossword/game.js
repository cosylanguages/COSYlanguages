/**
 * games/cosy_crossword/game.js
 * Standalone logic for Cosy Crossword.
 */
(function() {
    const GAME_ID = 'crossword';
    const GAME_TITLE = 'Cosy Crossword 🧩';
    const GAME_META = 'Vocabulary · Solo';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Cosy Crossword 🧩</h2>
              <p>A crossword puzzle generated just for you. Use the clues to fill in the grid. Great for testing your vocabulary depth.</p>
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
            const body = document.getElementById('go-body');
            body.innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            body.innerHTML = `
                <div class="game-card" style="text-align:center">
                    <div class="game-label">🧩 Dynamic Puzzle</div>
                    <div id="crossword-grid-container" style="margin: 1.5rem 0; overflow-x:auto;"></div>
                    <div class="game-prompt" id="crossword-clue-display" style="font-size:1rem; border-top:1px solid var(--border); padding-top:1rem">Click a cell to start</div>
                    <div class="game-controls" style="margin-top:1.5rem; justify-content:center">
                        <button class="btn-g-primary" onclick="COSY_GAME.cwCheck()">Check Grid</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.start()">New Grid ↺</button>
                    </div>
                </div>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:1rem">
                    <div class="game-card" style="padding:1rem">
                        <div class="game-label">Across</div>
                        <div id="cw-clues-across" style="font-size:.8rem; text-align:left"></div>
                    </div>
                    <div class="game-card" style="padding:1rem">
                        <div class="game-label">Down</div>
                        <div id="cw-clues-down" style="font-size:.8rem; text-align:left"></div>
                    </div>
                </div>`;

            // Note: crossword logic requires a crossword engine script.
            // We assume it might be in js/games/crossword.js which we copied but it might need adaptation.
            // For now, let's load it dynamically if it exists.
            const prefix = '../../';
            const s = document.createElement('script');
            s.src = prefix + 'js/games/crossword.js';
            s.onload = () => {
                if (window.CrosswordGame) {
                    window.CrosswordGame.init(lang, level, 'all');
                    window.CrosswordGame.render('crossword-grid-container');
                    COSYGame.nextRound(); // Track that a puzzle was started
                }
            };
            document.head.appendChild(s);

            window.COSY_GAME.cwCheck = () => {
                if (window.CrosswordGame) {
                    const { allCorrect, percent } = window.CrosswordGame.check();
                    if (allCorrect) COSYGame.addScore(50);
                    const msg = allCorrect ? 'Perfect! Grid complete.' : `Keep going! ${percent}% correct.`;
                    gameUtils.showGameMessage(body, msg, allCorrect ? 'success' : 'info');
                }
            };
        },

        reset: renderSetup,

        renderEnd() {
            const lang = COSYGame.language;
            const level = COSYGame.level;
            COSYScores.save(GAME_ID, lang, level, COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);
            document.getElementById('go-body').innerHTML = `
                <div class="round-end">
                    <div class="re-icon">🧩</div>
                    <div class="re-title">Puzzle Session Over!</div>
                    <div class="re-sub">Your final score: <strong>${COSYGame.score}</strong></div>
                    ${best ? `<div class="game-sub" style="margin-bottom:1rem">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()">New Puzzle ↺</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
