document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, startTimer, stopTimer, parseLessons, handleShare, playGameSound, showGameMessage, populateThemes, isThemeMatch } = window.gameUtils;

    const ActionHeroGame = {
      roundResults: [],

      getTabooWords(item, pool) {
        if (!item || !pool) return [];
        const obvious = [item.word.toLowerCase()];
        if (item.plural) obvious.push(item.plural.toLowerCase());
        const sameTheme = pool
          .filter(p => p.theme === item.theme && p.word !== item.word)
          .slice(0, 2)
          .map(p => p.word);
        return [...obvious, ...sameTheme];
      },

      record(item, correct) {
        this.roundResults.push({ word: item.word, emoji: item.emoji, correct });
      },

      buildSummary(totalTime) {
        const correct = this.roundResults.filter(r => r.correct);
        const wrong   = this.roundResults.filter(r => !r.correct);
        const wordList = (items, icon) => items.map(r =>
          `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;
            border-bottom:0.5px solid rgba(0,0,0,.06);">
            <span style="font-size:1.2rem">${r.emoji || icon}</span>
            <span style="font-weight:700;font-size:.88rem;color:#2e4a33">${r.word}</span>
          </div>`
        ).join('');

        return `
          <div style="font-family:'Nunito',sans-serif;padding:16px;">
            <div style="text-align:center;margin-bottom:16px;">
              <div style="font-size:2.5rem;margin-bottom:4px">
                ${correct.length >= wrong.length ? '🏆' : '💪'}
              </div>
              <div style="font-family:'Lora',serif;font-size:1.4rem;font-weight:700;color:#2e4a33">
                ${correct.length} / ${this.roundResults.length} correct
              </div>
              <div style="font-size:.8rem;color:#aaa;margin-top:2px">in ${totalTime} seconds</div>
            </div>
            ${correct.length ? `
              <div style="font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;
                color:#1a6b45;margin-bottom:6px">✅ Got it (${correct.length})</div>
              <div style="background:#e5f4ec;border-radius:8px;padding:8px 12px;margin-bottom:12px">
                ${wordList(correct, '✅')}
              </div>` : ''}
            ${wrong.length ? `
              <div style="font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;
                color:#a32d2d;margin-bottom:6px">❌ Missed (${wrong.length})</div>
              <div style="background:#fcebeb;border-radius:8px;padding:8px 12px;margin-bottom:12px">
                ${wordList(wrong, '❌')}
              </div>` : ''}
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
              <button onclick="document.getElementById('start-charades-game-btn').click()"
                style="height:48px;border-radius:999px;background:#6b8f71;color:#fff;
                  border:none;font-family:'Nunito',sans-serif;font-weight:900;font-size:.9rem;cursor:pointer">
                Play Again 🔄
              </button>
              <button onclick="document.getElementById('close-charades-btn').click()"
                style="height:48px;border-radius:999px;background:#fdf8f0;color:#6b6b6b;
                  border:2px solid rgba(0,0,0,.1);font-family:'Nunito',sans-serif;font-weight:800;font-size:.9rem;cursor:pointer">
                Done ✓
              </button>
            </div>
          </div>
        `;
      },

      buildWordDisplay(item, pool, level) {
        const showTaboo = ['intermediate','upper-intermediate','advanced','proficiency'].includes(level);
        const taboos = showTaboo ? this.getTabooWords(item, pool).slice(1) : [];
        return `
          <div style="text-align:center;padding:12px;">
            ${showTaboo && taboos.length ? `
              <div style="margin-bottom:8px">
                ${taboos.map(t =>
                  `<span style="display:inline-block;background:#fcebeb;color:#a32d2d;
                    border-radius:999px;padding:2px 10px;font-size:.72rem;font-weight:800;
                    margin:2px;text-decoration:line-through">${t}</span>`
                ).join('')}
              </div>` : ''}
            <div style="font-size:5rem;line-height:1.1;margin-bottom:8px">${item.emoji || '❓'}</div>
            <div style="font-family:'Lora',serif;font-size:1.8rem;font-weight:700;color:#2e4a33">
              ${item.word}
            </div>
          </div>
        `;
      }
    };

    const initCharades = () => {
        const modal = document.getElementById('charades-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-charades-btn');
        const closeBtn = document.getElementById('close-charades-btn');
        const startBtn = document.getElementById('start-charades-game-btn');
        const correctBtn = document.getElementById('charades-correct-btn');
        const incorrectBtn = document.getElementById('charades-incorrect-btn');
        const stopBtn = document.getElementById('charades-stop-btn');

        const setupArea = document.getElementById('charades-setup');
        const gameArea = document.getElementById('charades-gameplay');
        const resultArea = document.getElementById('charades-result');
        const wordDisplay = document.getElementById('charades-word');
        const emojiDisplay = document.getElementById('charades-emoji');
        const scoreVal = document.getElementById('charades-score-val');
        const themeSelect = document.getElementById('charades-theme');
        const levelSelect = document.getElementById('charades-level');
        const langSelect = document.getElementById('charades-lang');

        // Solo vs Robot elements
        const soloToggle = document.getElementById('charades-solo-mode');
        const robotGuessArea = document.getElementById('charades-robot-guess-area');
        const playerInput = document.getElementById('charades-player-input');
        const submitGuessBtn = document.getElementById('charades-submit-guess-btn');

        const populateThemesLocal = () => {
            if (!themeSelect || !levelSelect || !langSelect) return;
            populateThemes(themeSelect, levelSelect, langSelect.value);
        };

        let pool = [];
        let masterPool = [];
        let score = 0;
        let currentItem = null;

        const showNext = () => {
            if (pool.length === 0) {
                if (masterPool.length > 0) {
                    pool = [...masterPool].sort(() => Math.random() - 0.5);
                } else {
                    endGame();
                    return;
                }
            }
            playGameSound('click');
            currentItem = pool.pop();

            const isSolo = soloToggle ? soloToggle.checked : false;

            // Improvements: ActionHeroGame.buildWordDisplay
            const currentLevel = levelSelect.value;
            const vocabPool = window.gameUtils.getVocabPool(langSelect.value, currentLevel, themeSelect.value);

            if (isSolo) {
                // Robot Mode: Hide the word, show definition/emoji, reveal input
                const displayHtml = `
                    <div style="text-align:center;padding:12px;">
                        <div style="font-size:5rem;line-height:1.1;margin-bottom:8px">${currentItem.emoji || '❓'}</div>
                        <div style="background:rgba(107,143,113,0.1); padding:1rem; border-radius:12px; margin-bottom:1rem; font-size:.9rem; color:var(--sage-deep); font-weight:700;">
                            "${currentItem.definitions?.[0]?.text || 'No definition available'}"
                        </div>
                    </div>
                `;
                document.getElementById('ah-word-display').innerHTML = displayHtml;
                if (robotGuessArea) robotGuessArea.style.display = 'block';
                if (correctBtn) correctBtn.style.display = 'none';
                if (incorrectBtn) incorrectBtn.style.display = 'none';
                if (playerInput) {
                    playerInput.value = '';
                    playerInput.focus();
                }
            } else {
                document.getElementById('ah-word-display').innerHTML = ActionHeroGame.buildWordDisplay(currentItem, vocabPool, currentLevel);
                if (robotGuessArea) robotGuessArea.style.display = 'none';
                if (correctBtn) correctBtn.style.display = 'inline-block';
                if (incorrectBtn) incorrectBtn.style.display = 'inline-block';
            }
        };

        const checkGuess = () => {
            if (!currentItem) return;
            const guess = playerInput.value.trim().toLowerCase();
            const target = currentItem.word.toLowerCase();

            if (guess === target) {
                score++;
                if (window.gameUtils.addGamePoints) window.gameUtils.addGamePoints(5);
                playGameSound('success');
                ActionHeroGame.record(currentItem, true);
                showNext();
            } else {
                playGameSound('error');
                // Maybe shake input or show error
                playerInput.style.borderColor = '#f44336';
                setTimeout(() => playerInput.style.borderColor = '', 500);
            }
        };

        const endGame = () => {
            stopTimer();
            gameArea.style.display = 'none';
            resultArea.style.display = 'block';
            setupArea.style.display = 'block';
            scoreVal.textContent = score;

            // Improvements: ActionHeroGame.buildSummary
            const duration = parseInt(document.getElementById('charades-timer-duration')?.value || '60');
            document.getElementById('action-hero-summary').innerHTML = ActionHeroGame.buildSummary(duration);
        };

        const openCharades = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            resultArea.style.display = 'none';
            populateThemesLocal();
        };

        openBtn?.addEventListener('click', openCharades);
        levelSelect?.addEventListener('change', populateThemesLocal);
        langSelect?.addEventListener('change', populateThemesLocal);
        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        const startCharades = () => {
            score = 0;
            // Improvements: reset round results
            ActionHeroGame.roundResults = [];

            const lang = langSelect.value;
            const theme = themeSelect.value;
            const level = levelSelect.value;
            const lessonInput = document.getElementById('charades-lessons')?.value;

            if (lessonInput) {
                pool = [];
                const filterByTheme = (w) => isThemeMatch(w.theme, theme);
                const lessons = parseLessons(lessonInput);
                lessons.forEach(num => {
                    if (window.lessonsData && window.lessonsData[lang] && window.lessonsData[lang][num]) {
                        window.lessonsData[lang][num].words.forEach(w => {
                            if (filterByTheme(w)) pool.push(w);
                        });
                    }
                });
            } else {
                pool = window.gameUtils.getVocabPool(lang, level, theme);
            }

            if (pool.length === 0) {
                showGameMessage(setupArea, t('alert_no_adventure_items'), 'error');
                return;
            }

            masterPool = [...pool];
            const seed = document.querySelector("#charades-setup .game-seed")?.value;
            if (seed) window.gameUtils.seededShuffle(pool, parseInt(seed));
            else pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            resultArea.style.display = 'none';
            gameArea.style.display = 'block';

            stopTimer();
            const duration = parseInt(document.getElementById('charades-timer-duration')?.value || '60');
            startTimer('charades-timer', duration, () => {
                endGame();
            });

            showNext();
        };

        startBtn?.addEventListener('click', startCharades);
        correctBtn?.addEventListener('click', () => {
            score++;
            playGameSound('success');
            // Improvements: record answer
            if (currentItem) ActionHeroGame.record(currentItem, true);
            showNext();
        });
        incorrectBtn?.addEventListener('click', () => {
            playGameSound('error');
            // Improvements: record answer
            if (currentItem) ActionHeroGame.record(currentItem, false);
            showNext();
        });
        submitGuessBtn?.addEventListener('click', checkGuess);
        playerInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkGuess();
        });
        stopBtn?.addEventListener('click', endGame);

        handleShare('share-charades-btn', {
            game: 'action_hero',
            lang: () => document.getElementById('charades-lang').value,
            level: () => document.getElementById('charades-level').value,
            theme: () => document.getElementById('charades-theme').value,
            lesson: () => document.getElementById('charades-lessons')?.value
        });

        return { open: openCharades, start: startCharades };
    };

    window.charadesGame = initCharades();
    window.ActionHeroGame = ActionHeroGame;
});
