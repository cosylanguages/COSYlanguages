/**
 * games/action_hero/game.js
 * Standalone logic for Action Hero.
 */
(function() {
    const GAME_ID = 'action';
    const GAME_TITLE = 'Action Hero 🎭';
    const GAME_META = 'Mystery · Group';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Action Hero 🎭</h2>
              <p>Hold your phone to your forehead (screen facing others). They describe the word — you guess. Each round is 60 seconds. Pass or guess as many words as you can.</p>
              <div class="setup-field"><label>Category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all">All vocabulary</option>
                  <option value="verbs">Verbs 🏃‍♂️</option>
                  <option value="group:environment_nature">Animals & Nature 🐾</option>
                  <option value="group:food_drink">Food & Drink 🍕</option>
                  <option value="group:places_geography">Places & Geography 🌍</option>
                  <option value="group:home_living">Home & Objects 🏠</option>
                  <option value="group:clothes_appearance">Clothes & Appearance 👕</option>
                  <option value="group:health_body">Health & Body 🏥</option>
                  <option value="group:sport_leisure">Sport & Leisure ⚽</option>
                </select>
              </div>
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
            const category = document.getElementById('s-cat')?.value || 'all';
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const data = COSYLoader.getGameData(lang);
            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];
            let pool = [];

            if (category === 'verbs') {
                pool = (window.verbsData && window.verbsData[lang]) ? window.verbsData[lang].map(v => v.word) : [];
            } else if (category !== 'all') {
                pool = vocab.filter(v => v.theme && gameUtils.isThemeMatch(v.theme, category)).map(v => v.word);
            }

            if (pool.length < 5) {
                const shortLvl = level === 'starter' ? 'A1' : (level === 'elementary' ? 'A2' : (level === 'intermediate' ? 'B1' : 'B2'));
                pool = (data.action && data.action[shortLvl]) ? data.action[shortLvl] : (data.action ? (data.action['B2'] || data.action['A2']) : ['...']);
            }

            const drawBag = gameUtils.createDrawBag(pool);
            let correct = 0, skipped = 0;
            const DUR = 60;

            const showWord = () => {
              if (!COSYGame.nextRound()) {
                showActionEnd();
                return;
              }
              const currentWord = drawBag.next();
              if (!currentWord) { showActionEnd(); return; }
              const body = document.getElementById('go-body');
              body.innerHTML = `
                <div class="score-bar">
                  <div class="sb-item"><div class="sb-val">${correct}</div><div class="sb-lbl">Correct</div></div>
                  <div class="sb-item"><div class="sb-val">${COSYGame.round}/${COSYGame.maxRounds}</div><div class="sb-lbl">Round</div></div>
                </div>
                <div class="game-card" style="text-align:center">
                  <div class="game-label">🎭 Hold to forehead · ${DUR}s</div>
                  <div class="game-prompt" style="font-size:2.5rem;letter-spacing:.05em">${currentWord}</div>
                  <div class="game-sub">Others describe this word — you guess!</div>
                  <div id="timer-container">${gameUtils.renderTimerRing(DUR, DUR)}</div>
                  <div class="game-controls" style="justify-content:center;gap:1rem">
                    <button class="btn-g-primary" style="background:var(--green)" onclick="COSY_GAME.ahResult(true)">✓ Got it!</button>
                    <button class="btn-g-secondary" onclick="COSY_GAME.ahResult(false)">Skip →</button>
                  </div>
                </div>
                <div style="text-align:center;font-size:.8rem;color:var(--ink-faint);margin-top:.5rem">✓ ${correct} correct · ↷ ${skipped} skipped</div>`;
            }

            const showActionEnd = () => {
              gameUtils.stopTimer();
              COSYGame.score = correct * 5;
              COSYScores.save(GAME_ID, lang, level, COSYGame.score);
              const best = COSYScores.best(GAME_ID, lang);

              document.getElementById('go-body').innerHTML = `
                <div class="round-end">
                  <div class="re-icon">🏆</div>
                  <div class="re-title">Round over!</div>
                  <div class="re-sub">Time's up — here's how you did:</div>
                  <div class="re-stats">
                    <div class="sb-item"><div class="re-stat-val" style="color:var(--green)">${correct}</div><div class="re-stat-lbl">✓ Correct</div></div>
                    <div class="sb-item"><div class="re-stat-val" style="color:var(--ink-muted)">${skipped}</div><div class="re-stat-lbl">↷ Skipped</div></div>
                  </div>
                  ${best ? `<div class="game-sub" style="margin-bottom:1rem">Personal best: ${best.score} pts</div>` : ''}
                  <div class="re-actions">
                    <button class="btn-g-primary" onclick="COSY_GAME.start()">Play again ↺</button>
                    <button class="btn-g-secondary" onclick="location.href='../index.html'">Back to Hub</button>
                  </div>
                </div>`;
            }

            window.COSY_GAME.ahResult = (got) => {
              if (got) correct++; else skipped++;
              showWord();
            };

            showWord();
            gameUtils.startTimer('timer-val', DUR, showActionEnd);
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
