document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, startTimer, stopTimer, parseLessons, handleShare, playGameSound, showGameMessage, populateThemes } = window.gameUtils;

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

        const populateThemesLocal = () => {
            if (!themeSelect || !levelSelect || !langSelect) return;
            populateThemes(themeSelect, levelSelect, langSelect.value);
        };

        let pool = [];
        let masterPool = [];
        let score = 0;

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
            const item = pool.pop();
            wordDisplay.textContent = typeof item === 'string' ? item : (item.answer || item.word);
            emojiDisplay.textContent = item.emoji || '🎭';
        };

        const endGame = () => {
            stopTimer();
            gameArea.style.display = 'none';
            resultArea.style.display = 'block';
            setupArea.style.display = 'block';
            scoreVal.textContent = score;
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
            const lang = langSelect.value;
            const theme = themeSelect.value;
            const level = levelSelect.value;
            const lessonInput = document.getElementById('charades-lessons')?.value;

            pool = [];

            const filterByTheme = (w) => {
                if (theme === 'all') return true;
                if (theme === 'numbers_all') return w.theme.startsWith('numbers_');
                if (theme === 'places_all') return w.theme.startsWith('places_');
                return w.theme === theme;
            };

            if (lessonInput) {
                const lessons = parseLessons(lessonInput);
                lessons.forEach(num => {
                    if (window.lessonsData && window.lessonsData[lang] && window.lessonsData[lang][num]) {
                        window.lessonsData[lang][num].words.forEach(w => {
                            if (filterByTheme(w)) pool.push(w);
                        });
                    }
                });
            } else {
                const vocab = window.vocabularyData && window.vocabularyData[lang] || [];
                pool = vocab.filter(item => filterByTheme(item));
            }

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(item => {
                    const itemIdx = levels.indexOf(item.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(setupArea, t('alert_no_adventure_items'), 'error');
                return;
            }

            masterPool = [...pool];
            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            resultArea.style.display = 'none';
            gameArea.style.display = 'block';

            stopTimer();
            const duration = parseInt(document.getElementById('charades-timer-duration')?.value || '60');
            startTimer('charades-timer', duration, () => {
                wordDisplay.textContent = t('time_up');
                emojiDisplay.textContent = '⏰';
            });

            showNext();
        };

        startBtn?.addEventListener('click', startCharades);
        correctBtn?.addEventListener('click', () => {
            score++;
            playGameSound('success');
            showNext();
        });
        incorrectBtn?.addEventListener('click', () => {
            playGameSound('error');
            showNext();
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
});
