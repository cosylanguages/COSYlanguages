document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, speak } = window.gameUtils;

    const initEmojiOdyssey = () => {
        const modal = document.getElementById('emoji-modal');
        if (!modal) return;

        const api = {
            open: () => {
                modal.style.display = 'flex';
                setupArea.style.display = 'block';
                gameArea.style.display = 'none';
            },
            start: () => startBtn.click()
        };
        window.emojiOdysseyGame = api;

        const openBtn = document.getElementById('open-emoji-btn');
        const closeBtn = document.getElementById('close-emoji-btn');
        const startBtn = document.getElementById('start-emoji-game-btn');
        const setupArea = document.getElementById('emoji-setup');
        const gameArea = document.getElementById('emoji-gameplay');
        const display = document.getElementById('emoji-display-large');
        const optionsGrid = document.getElementById('emoji-options');
        const feedback = document.getElementById('emoji-feedback');

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                display.textContent = '🎉';
                optionsGrid.innerHTML = '';
                feedback.textContent = t('game_over');
                return;
            }

            const current = pool.pop();
            display.textContent = current.emoji || '❓';
            feedback.textContent = '';

            // Generate distractors
            const lang = document.getElementById('emoji-lang').value;
            const allVocab = window.vocabularyData[lang] || [];
            let distractors = allVocab
                .filter(v => v.word !== current.word)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(v => v.word);

            let options = [current.word, ...distractors].sort(() => Math.random() - 0.5);

            optionsGrid.innerHTML = '';
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn pill-input';
                btn.textContent = opt;
                btn.onclick = () => {
                    if (opt === current.word) {
                        feedback.textContent = t('correct');
                        feedback.style.color = 'var(--primary-color)';
                        speak(opt, lang);
                        setTimeout(showNext, 1500);
                    } else {
                        feedback.textContent = t('incorrect');
                        feedback.style.color = 'var(--accent-color)';
                    }
                };
                optionsGrid.appendChild(btn);
            });
        };

        openBtn?.addEventListener('click', () => api.open());

        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        startBtn?.addEventListener('click', () => {
            const lang = document.getElementById('emoji-lang').value;
            pool = (window.vocabularyData[lang] || []).filter(v => v.emoji).sort(() => Math.random() - 0.5).slice(0, 10);
            if (pool.length === 0) {
                alert("No emoji data found!");
                return;
            }
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        });
    };

    initEmojiOdyssey();
});
