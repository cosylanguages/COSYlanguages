document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, startTimer, stopTimer, parseLessons, handleShare } = window.gameUtils;

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

        let pool = [];
        let score = 0;

        const showNext = () => {
            if (pool.length === 0) {
                endGame();
                return;
            }
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
        };

        openBtn?.addEventListener('click', openCharades);
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
                pool = pool.filter(item => item.level === level);
            }

            if (pool.length === 0) {
                alert("Alas! No items found for this adventure!");
                return;
            }

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
        correctBtn?.addEventListener('click', () => { score++; showNext(); });
        incorrectBtn?.addEventListener('click', showNext);
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
