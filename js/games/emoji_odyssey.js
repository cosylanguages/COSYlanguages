document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, speak, playGameSound, showGameMessage } = window.gameUtils;

    const initEmojiOdyssey = () => {
        const modal = document.getElementById('emoji-modal');
        if (!modal) return;

        const api = {
            open: () => {
                modal.style.display = 'flex';
                setupArea.style.display = 'block';
                gameArea.style.display = 'none';
                feedback.textContent = '';
                // Reset areas
                guessArea.style.display = 'none';
                storyArea.style.display = 'none';
                storyDisplay.textContent = '';
                storyNameDisplay.textContent = '';
            },
            start: () => startBtn.click()
        };
        window.emojiOdysseyGame = api;

        const openBtn = document.getElementById('open-emoji-btn');
        const closeBtn = document.getElementById('close-emoji-btn');
        const startBtn = document.getElementById('start-emoji-game-btn');
        const setupArea = document.getElementById('emoji-setup');
        const modeSelect = document.getElementById('emoji-mode');
        const storySetupExtra = document.getElementById('emoji-story-setup-extra');
        const storyNameInput = document.getElementById('emoji-story-name-input');
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
                btn.style.fontSize = '1.1rem';
                btn.style.fontWeight = '700';
                btn.textContent = opt;
                btn.onclick = () => {
                    if (opt === current.word) {
                        feedback.textContent = t('correct');
                        feedback.style.color = 'var(--primary-color)';
                        playGameSound('success');
                        speak(opt, lang);
                        setTimeout(showNextGuess, 1500);
                    } else {
                        feedback.textContent = t('incorrect');
                        feedback.style.color = 'var(--accent-color)';
                        playGameSound('error');
                        btn.classList.add('shake');
                        setTimeout(() => btn.classList.remove('shake'), 500);
                    }
                };
                optionsGrid.appendChild(btn);
            });
        };

        const startStoryTurn = () => {
            playGameSound('click');
            const emojis = getRandomEmojis(4);

            // Visual announcement for turn transition
            const overlay = document.createElement('div');
            overlay.style.position = 'absolute';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.transform = 'translate(-50%, -50%)';
            overlay.style.background = 'rgba(255, 255, 255, 0.9)';
            overlay.style.padding = '2rem';
            overlay.style.borderRadius = '20px';
            overlay.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            overlay.style.zIndex = '100';
            overlay.style.fontSize = '1.5rem';
            overlay.style.fontWeight = '800';
            overlay.style.color = 'var(--primary-color)';
            overlay.style.pointerEvents = 'none';
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.textContent = t('next_player_announcement') || 'Next Player! 🎲';

            gameArea.style.position = 'relative';
            gameArea.appendChild(overlay);

            storyDisplay.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            storyDisplay.style.opacity = 0;
            storyDisplay.style.transform = 'scale(0.8)';

            setTimeout(() => {
                overlay.style.opacity = 0;
                setTimeout(() => overlay.remove(), 500);

                storyDisplay.textContent = emojis.join(' ');
                storyDisplay.style.opacity = 1;
                storyDisplay.style.transform = 'scale(1)';
            }, 1000);

            feedback.textContent = '';
        };

        modeSelect?.addEventListener('change', () => {
            if (modeSelect.value === 'story') {
                storySetupExtra.style.display = 'block';
            } else {
                storySetupExtra.style.display = 'none';
            }
        });

        openBtn?.addEventListener('click', () => {
            playGameSound('click');
            api.open();
            // Reset story setup visibility
            if (modeSelect) modeSelect.value = 'guess';
            if (storySetupExtra) storySetupExtra.style.display = 'none';
        });

        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        startBtn?.addEventListener('click', () => {
            currentGameMode = modeSelect.value;
            const lang = document.getElementById('emoji-lang').value;

            if (currentGameMode === 'guess') {
                pool = (window.vocabularyData[lang] || []).filter(v => v.emoji).sort(() => Math.random() - 0.5).slice(0, 10);
                if (pool.length === 0) {
                    showGameMessage(setupArea, t('alert_no_emoji_vocab'), 'error');
                    return;
                }
                setupArea.style.display = 'none';
                gameArea.style.display = 'block';
                guessArea.style.display = 'block';
                storyArea.style.display = 'none';
                showNextGuess();
            } else {
                const defaultTitle = t('emoji_story_title_label') || "Our Story";
                let name = storyNameInput.value.trim();

                if (name === '') {
                    storyName = defaultTitle;
                } else {
                    storyName = name;
                }

                setupArea.style.display = 'none';
                gameArea.style.display = 'block';
                guessArea.style.display = 'none';
                storyArea.style.display = 'block';
                storyNameDisplay.textContent = `📖 ${storyName}`;
                startStoryTurn();
            }
        });

        nextSetBtn?.addEventListener('click', () => {
            startStoryTurn();
        });

        finishBtn?.addEventListener('click', () => {
            gameArea.style.display = 'none';
            setupArea.style.display = 'block';
            storyArea.style.display = 'none';
            storyDisplay.textContent = '';
            storyNameDisplay.textContent = '';
            feedback.textContent = '';
        });
    };

    initEmojiOdyssey();
});
