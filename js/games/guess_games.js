document.addEventListener('DOMContentLoaded', () => {
    const { t, handleShare, playGameSound, showGameMessage, populateThemes, isThemeMatch } = window.gameUtils;

    const initGuessGame = (gameType) => {
        const modalId = gameType === 'who' ? 'guess-who-modal' : 'guess-what-modal';
        const modal = document.getElementById(modalId);
        if (!modal) return;

        const openBtn = document.getElementById(`open-guess-${gameType}-btn`);
        const closeBtn = document.getElementById(`close-guess-${gameType}-btn`);
        const startBtn = document.getElementById(`start-guess-${gameType}-btn`);
        const nextBtn = document.getElementById(`guess-${gameType}-next-btn`);

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const targetDisplay = modal.querySelector('.target-word');
        const promptList = modal.querySelector('.prompt-questions');
        const themeSelect = modal.querySelector('.game-theme');
        const levelSelect = modal.querySelector('.game-level');
        const langSelect = modal.querySelector('.game-lang');

        const populateThemesLocal = () => {
            if (!themeSelect || !levelSelect || !langSelect) return;
            populateThemes(themeSelect, levelSelect, langSelect.value);
        };

        let pool = [];
        let currentItem = null;
        let hintsRevealed = 0;

        const showTarget = () => {
            if (pool.length === 0) {
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            playGameSound('click');
            currentItem = pool.pop();
            hintsRevealed = 0;

            const wordText = typeof currentItem === 'string' ? currentItem : (currentItem.word || currentItem);
            targetDisplay.textContent = wordText;

            promptList.innerHTML = '';
            const prompts = gameType === 'who' ?
                ['q_man_woman', 'q_alive_dead', 'q_nationality', 'q_job'] :
                ['q_food_drink', 'q_object', 'q_place', 'q_size', 'q_color', 'q_location'];

            prompts.forEach(pKey => {
                const li = document.createElement('li');
                li.textContent = t(pKey) || pKey;
                li.style.background = 'rgba(107,143,113,0.1)';
                li.style.margin = '4px 0';
                li.style.padding = '8px 12px';
                li.style.borderRadius = '8px';
                li.style.fontSize = '0.85rem';
                li.style.fontWeight = '700';
                li.style.color = 'var(--sage-deep)';
                promptList.appendChild(li);
            });

            const hintDisplay = modal.querySelector('.hint-display');
            if (hintDisplay) hintDisplay.textContent = '';
        };

        const revealHint = () => {
            const hintDisplay = modal.querySelector('.hint-display');
            if (!hintDisplay || !currentItem) return;

            playGameSound('click');
            hintsRevealed++;
            const wordText = typeof currentItem === 'string' ? currentItem : currentItem.word;

            if (hintsRevealed === 1) {
                hintDisplay.textContent = `${t('hint_first_letter')}: ${wordText[0]}...`;
            } else if (hintsRevealed === 2) {
                hintDisplay.textContent = `${t('hint_length')}: ${wordText.length} ${t('letters')}`;
            } else {
                hintDisplay.textContent = wordText;
            }
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            populateThemesLocal();
        };

        openBtn?.addEventListener('click', openGame);
        modal.querySelector('.game-level')?.addEventListener('change', populateThemesLocal);
        modal.querySelector('.game-lang')?.addEventListener('change', populateThemesLocal);
        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        const startGame = () => {
            const lang = modal.querySelector('.game-lang').value;
            const theme = themeSelect.value;
            const level = modal.querySelector('.game-level').value;

            const vocab = window.vocabularyData && window.vocabularyData[lang] || [];
            pool = vocab.filter(item => isThemeMatch(item.theme, theme));

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(item => {
                    const itemIdx = levels.indexOf(item.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(modal.querySelector('.game-setup'), t('alert_no_quest_items'), 'error');
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showTarget();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', showTarget);
        modal.querySelector('.hint-btn')?.addEventListener('click', revealHint);

        handleShare(`share-guess-${gameType}-btn`, {
            game: gameType === 'who' ? 'identity_mystery' : 'object_quest',
            lang: () => modal.querySelector('.game-lang').value,
            level: () => modal.querySelector('.game-level').value,
            theme: () => modal.querySelector('.game-theme').value
        });

        return { open: openGame, start: startGame };
    };

    window.guessWhoGame = initGuessGame('who');
    window.guessWhatGame = initGuessGame('what');
});
