document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, speak } = window.gameUtils;

    const initWordLinker = () => {
        const modal = document.getElementById('linker-modal');
        if (!modal) return;

        const api = {
            open: () => {
                modal.style.display = 'flex';
                setupArea.style.display = 'block';
                gameArea.style.display = 'none';
            },
            start: () => startBtn.click()
        };
        window.wordLinkerGame = api;

        const openBtn = document.getElementById('open-linker-btn');
        const closeBtn = document.getElementById('close-linker-btn');
        const startBtn = document.getElementById('start-linker-game-btn');
        const setupArea = document.getElementById('linker-setup');
        const gameArea = document.getElementById('linker-gameplay');
        const cluesArea = document.getElementById('linker-clues');
        const optionsGrid = document.getElementById('linker-options');
        const feedback = document.getElementById('linker-feedback');

        let pool = [];

        const levelsOrder = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];

        const showNext = () => {
            if (pool.length === 0) {
                cluesArea.innerHTML = '🏁';
                optionsGrid.innerHTML = '';
                feedback.textContent = t('game_over');
                return;
            }

            const current = pool.pop();
            const lang = document.getElementById('linker-lang').value;
            const level = document.getElementById('linker-level').value;
            let vocabSource = window.vocabularyData[lang] || [];

            // For clues and distractors, we include words at or below the current level
            let accessibleVocab = vocabSource;
            if (level !== 'all') {
                const levelIndex = levelsOrder.indexOf(level);
                accessibleVocab = vocabSource.filter(v => {
                    const vIndex = levelsOrder.indexOf(v.level);
                    return vIndex !== -1 && vIndex <= levelIndex;
                });
            }

            // Find clues (words in same theme) from accessible vocab
            let clues = accessibleVocab
                .filter(v => v.theme === current.theme && v.word !== current.word)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(v => v.word);

            if (clues.length < 3) {
                // If not enough in accessible, maybe try even higher level just to make it playable?
                // User said "appropriate", so better to skip or just use what we have.
                // Let's try to fallback to any level clues if absolutely necessary for game playability
                clues = vocabSource
                    .filter(v => v.theme === current.theme && v.word !== current.word)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map(v => v.word);

                if (clues.length < 3) {
                    showNext();
                    return;
                }
            }

            cluesArea.innerHTML = '';
            clues.forEach(clue => {
                const badge = document.createElement('span');
                badge.className = 'badge glass';
                badge.style.padding = '5px 15px';
                badge.style.borderRadius = '20px';
                badge.textContent = clue;
                cluesArea.appendChild(badge);
            });

            feedback.textContent = '';

            let distractors = accessibleVocab
                .filter(v => v.word !== current.word && v.theme !== current.theme)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(v => v.word);

            // distractor fallback
            if (distractors.length < 3) {
                distractors = vocabSource
                    .filter(v => v.word !== current.word && v.theme !== current.theme)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map(v => v.word);
            }

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
            const lang = document.getElementById('linker-lang').value;
            const level = document.getElementById('linker-level').value;

            let allVocab = window.vocabularyData[lang] || [];

            // Filter by level if not "all"
            if (level !== 'all') {
                allVocab = allVocab.filter(v => v.level === level);
            }

            pool = allVocab.filter(v => v.theme).sort(() => Math.random() - 0.5).slice(0, 10);

            if (pool.length === 0) {
                alert("No vocabulary found for this level/language!");
                return;
            }
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        });
    };

    initWordLinker();
});
