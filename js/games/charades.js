document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, startTimer, stopTimer, parseLessons, handleShare, playGameSound, showGameMessage } = window.gameUtils;

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

        const populateThemes = () => {
            if (!themeSelect) return;
            const level = document.getElementById('charades-level').value;
            const lang = document.getElementById('charades-lang').value;

            const currentVal = themeSelect.value;
            themeSelect.innerHTML = '<option value="all" data-translate-key="level_all">' + (window.translations[lang]?.level_all || 'All Themes') + '</option>';

            let themes = [];
            if (level !== 'all' && window.themeConfig && window.themeConfig[level]) {
                const levelData = window.themeConfig[level];
                if (level === 'starter') {
                    if (levelData.A0) Object.keys(levelData.A0.themes).forEach(val => themes.push(val));
                    if (levelData.A1) Object.keys(levelData.A1.themes).forEach(val => themes.push(val));
                } else if (levelData.themes) {
                    Object.keys(levelData.themes).forEach(val => themes.push(val));
                }
            } else {
                const vd = window.vocabularyData && window.vocabularyData[lang] || [];
                const availableThemes = new Set();
                vd.forEach(item => {
                    if (level === 'all' || item.level === level) availableThemes.add(item.theme);
                });
                themes = Array.from(availableThemes).sort();
            }

            themes.forEach(th => {
                const opt = document.createElement('option');
                opt.value = th;
                opt.textContent = window.translations[lang]?.['theme_' + th] || th;
                opt.setAttribute('data-translate-key', 'theme_' + th);
                themeSelect.appendChild(opt);
            });
            if (Array.from(themeSelect.options).some(opt => opt.value === currentVal)) {
                themeSelect.value = currentVal;
            }
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
            populateThemes();
        };

        openBtn?.addEventListener('click', openCharades);
        document.getElementById('charades-level')?.addEventListener('change', populateThemes);
        document.getElementById('charades-lang')?.addEventListener('change', populateThemes);
        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        const startCharades = () => {
            score = 0;
            const lang = document.getElementById('charades-lang').value;
            const theme = themeSelect.value;
            const level = document.getElementById('charades-level').value;
            const lessonInput = document.getElementById('charades-lessons')?.value;

            pool = [];

            if (lessonInput) {
                const lessons = parseLessons(lessonInput);
                lessons.forEach(num => {
                    if (window.lessonsData && window.lessonsData[lang] && window.lessonsData[lang][num]) {
                        window.lessonsData[lang][num].words.forEach(w => {
                            if (theme === 'all' || w.theme === theme) pool.push(w);
                        });
                    }
                });
            } else {
                const vocab = window.vocabularyData && window.vocabularyData[lang] || [];
                pool = vocab.filter(item => (theme === 'all' || item.theme === theme));
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
