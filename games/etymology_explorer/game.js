/**
 * games/etymology_explorer/game.js
 * Game logic for Etymology Explorer.
 */
(function() {
    const GAME_ID = 'etymology';
    const GAME_TITLE = 'Etymology Explorer 📜';
    const GAME_META = 'Vocabulary · Solo or group';
    const LEVEL_OPTS = ['Easy (Greek, Latin, French...)', 'Medium (Arabic, Chinese, Czech...)', 'Hard (Obscure origins)'];
    const LANG_OPTS = ['English 🇬🇧'];

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }
    function pick(arr) { if (!arr || !arr.length) return null; return arr[Math.floor(Math.random() * arr.length)]; }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Etymology Explorer 📜</h2>
              <p>Do you know where our words come from? Test your knowledge of linguistic history and discover the fascinating roots of everyday vocabulary.</p>
              <div class="setup-field"><label>Difficulty</label>
                <select class="styled-sel" id="s-level">
                  <option value="easy">Easy (Common roots)</option>
                  <option value="medium">Medium (Loanwords)</option>
                  <option value="hard">Hard (Deep history)</option>
                </select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start journey</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const levelVal = document.getElementById('s-level')?.value || 'easy';
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading history...</div>';

            await COSYLoader.loadLevelData(lang, 'starter'); // We use starter vocab as base if needed
            COSYGame.init(GAME_ID, lang, levelVal);
            COSYGame.maxRounds = 10;

            const data = COSYLoader.getGameData(lang);
            let questionCount = 0;
            let questions = (data.etymology || []).filter(q => q.level === levelVal);

            if (questions.length === 0) {
              questions = [{ word: 'Error', options: ['None'], answer: 'None', detail: 'No data found for this level.' }];
            }

            // Shuffle questions
            questions = shuffle(questions);

            const nextQuestion = () => {
                if (COSYGame.isOver()) {
                    this.renderEnd();
                    return;
                }

                const q = questions[questionCount % questions.length];
                const body = document.getElementById('go-body');
                questionCount++;
                COSYGame.round = questionCount;
                const shuffledOptions = shuffle(q.options);

                const escape = (str) => (str || "").replace(/'/g, "\\'").replace(/"/g, "&quot;");

                body.innerHTML = `
                  <div class="score-bar">
                    <div class="sb-item"><div class="sb-val" id="et-score">${COSYGame.score}</div><div class="sb-lbl">Score</div></div>
                    <div class="sb-item"><div class="sb-val">${questionCount}/${COSYGame.maxRounds}</div><div class="sb-lbl">Question</div></div>
                  </div>
                  <div class="game-card">
                    <div class="game-label">Where does this word come from?</div>
                    <div class="etymology-word" style="font-size: 2.5rem; font-weight: 800; color: var(--ink); margin: 1.5rem 0; font-family: 'Fraunces', serif;">${q.word}</div>
                    <div class="word-options">
                      ${shuffledOptions.map(opt => `<button class="word-opt" onclick="COSY_GAME.guess(this, '${escape(opt)}', '${escape(q.answer)}', '${escape(q.detail)}', '${escape(q.path)}')">${opt}</button>`).join('')}
                    </div>
                    <div class="feedback-bar" id="et-fb"></div>
                    <div class="game-controls">
                      <button class="btn-g-primary" id="et-next" onclick="COSY_GAME._nextQ()" style="display:none">Next Word →</button>
                      <button class="btn-g-danger" onclick="COSY_GAME.reset()">⬅ Exit</button>
                    </div>
                  </div>`;
            };
            window.COSY_GAME._nextQ = nextQuestion;

            window.COSY_GAME.guess = (el, selected, correct, detail, path) => {
                document.querySelectorAll('.word-opt').forEach(b => b.disabled = true);
                const fb = document.getElementById('et-fb');
                const next = document.getElementById('et-next');
                if (next) next.style.display = 'inline-block';

                const pathHtml = path ? `<div class="et-path" style="margin-top:0.5rem; font-family: monospace; font-size: 0.85rem; opacity: 0.8;">${path}</div>` : '';

                if (selected === correct) {
                    el.classList.add('correct');
                    fb.className = 'feedback-bar show ok';
                    fb.innerHTML = `<div>✓ <strong>Correct!</strong> ${detail}</div>${pathHtml}`;
                    COSYGame.addScore(10);
                    document.getElementById('et-score').textContent = COSYGame.score;
                } else {
                    el.classList.add('wrong');
                    document.querySelectorAll('.word-opt').forEach(b => {
                        if (b.textContent === correct) b.classList.add('correct');
                    });
                    fb.className = 'feedback-bar show bad';
                    fb.innerHTML = `<div>✗ <strong>Actually, it's ${correct}.</strong> ${detail}</div>${pathHtml}`;
                }
            };

            nextQuestion();
        },

        renderEnd() {
            const body = document.getElementById('go-body');
            body.innerHTML = `
                <div class="setup-screen">
                  <h2>Journey Complete! 📜</h2>
                  <div class="final-score" style="font-size: 3rem; font-weight: 800; color: var(--teal); margin: 1rem 0;">${COSYGame.score}</div>
                  <p>You've explored the roots of many words. Keep practicing to become a master etymologist!</p>
                  <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem;">
                    <button class="btn-start-game" onclick="COSY_GAME.start()">Play Again</button>
                    <button class="btn-g-danger" onclick="COSY_GAME.reset()">Back to Setup</button>
                  </div>
                </div>`;
        },

        reset: renderSetup
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderSetup);
    } else {
        renderSetup();
    }
})();
