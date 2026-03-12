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

        // Mode specific elements
        const guessArea = document.getElementById('emoji-guess-area');
        const storyArea = document.getElementById('emoji-story-area');
        const storyNameDisplay = document.getElementById('emoji-story-name-display');
        const storyDisplay = document.getElementById('emoji-story-display');
        const nextSetBtn = document.getElementById('emoji-next-set-btn');
        const finishBtn = document.getElementById('emoji-finish-btn');

        let pool = [];
        let currentGameMode = 'guess';
        let storyName = '';

        const getRandomEmojis = (count) => {
            const emojis = window.emojiData || [];
            if (emojis.length === 0) return Array(count).fill('❓');
            return [...emojis].sort(() => Math.random() - 0.5).slice(0, count);
        };

        const showNextGuess = () => {
            if (pool.length === 0) {
                display.textContent = '🎉';
                optionsGrid.innerHTML = '';
                feedback.textContent = t('game_over');
                return;
            }

            const current = pool.pop();
            display.textContent = current.emoji || '❓';
            feedback.textContent = '';

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
                        setTimeout(showNextGuess, 1500);
                    } else {
                        feedback.textContent = t('incorrect');
                        feedback.style.color = 'var(--accent-color)';
                    }
                };
                optionsGrid.appendChild(btn);
            });
        };

        const startStoryTurn = () => {
            const emojis = getRandomEmojis(4);
            storyDisplay.textContent = emojis.join(' ');
            feedback.textContent = '';
        };

        openBtn?.addEventListener('click', () => api.open());

        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        startBtn?.addEventListener('click', () => {
            currentGameMode = document.getElementById('emoji-mode').value;
            const lang = document.getElementById('emoji-lang').value;

            setupArea.style.display = 'none';
            gameArea.style.display = 'block';

            if (currentGameMode === 'guess') {
                guessArea.style.display = 'block';
                storyArea.style.display = 'none';
                pool = (window.vocabularyData[lang] || []).filter(v => v.emoji).sort(() => Math.random() - 0.5).slice(0, 10);
                if (pool.length === 0) {
                    alert("No emoji data found!");
                    setupArea.style.display = 'block';
                    gameArea.style.display = 'none';
                    return;
                }
                showNextGuess();
            } else {
                guessArea.style.display = 'none';
                storyArea.style.display = 'block';
                storyName = prompt(t('emoji_story_name_prompt')) || t('emoji_story_title_label');
                storyNameDisplay.textContent = `📖 ${storyName}`;
                startStoryTurn();
            }
        });

        nextSetBtn?.addEventListener('click', () => {
            startStoryTurn();
        });

        finishBtn?.addEventListener('click', () => {
            storyArea.style.display = 'none';
            feedback.textContent = t('game_over');
            feedback.style.color = 'var(--primary-color)';
        });
    };

    initEmojiOdyssey();
});
