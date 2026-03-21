document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, speak, showGameMessage, populateThemes, isThemeMatch } = window.gameUtils;

    const initWordLinker = () => {
        const modal = document.getElementById('linker-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-linker-btn');
        const closeBtn = document.getElementById('close-linker-btn');
        const startBtn = document.getElementById('start-linker-game-btn');
        const setupArea = document.getElementById('linker-setup');
        const gameArea = document.getElementById('linker-gameplay');
        const cluesArea = document.getElementById('linker-clues');
        const optionsGrid = document.getElementById('linker-options');
        const feedback = document.getElementById('linker-feedback');
        const levelSelect = document.getElementById('linker-level');
        const langSelect = document.getElementById('linker-lang');
        const themeSelect = document.getElementById('linker-theme');

        const populateThemesLocal = () => {
            if (!themeSelect || !levelSelect || !langSelect) return;
            populateThemes(themeSelect, levelSelect, langSelect.value);
        };

        const api = {
            open: () => {
                modal.style.display = 'flex';
                setupArea.style.display = 'block';
                gameArea.style.display = 'none';
                populateThemesLocal();
            },
            start: () => startBtn.click()
        };
        window.wordLinkerGame = api;

        let pool = [];
        let currentGameMode = 'association';

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

            if (currentGameMode === 'association') {
                // Find clues (words in same theme) from accessible vocab
                let clues = accessibleVocab
                    .filter(v => v.theme === current.theme && v.word !== current.word)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map(v => v.word);

                if (clues.length < 3) {
                    // Fallback to any level clues within the theme if not enough found in current level
                    const themeClues = vocabSource
                        .filter(v => v.theme === current.theme && v.word !== current.word)
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 3)
                        .map(v => v.word);

                    if (themeClues.length >= 3) {
                        clues = themeClues;
                    } else if (clues.length === 0 && themeClues.length === 0) {
                        // Total failure for this word, skip to next
                        showNext();
                        return;
                    } else if (themeClues.length > 0) {
                        clues = themeClues; // use what we have even if < 3
                    }
                }

                cluesArea.innerHTML = '';
                clues.forEach(clue => {
                    const badge = document.createElement('span');
                    badge.className = 'badge glass';
                    badge.style.padding = '10px 20px';
                    badge.style.borderRadius = '30px';
                    badge.style.fontSize = '1.2rem';
                    badge.style.fontWeight = '700';
                    badge.style.color = 'var(--primary-color)';
                    badge.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
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
                    btn.style.fontSize = '1.1rem';
                    btn.style.fontWeight = '700';
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
            } else {
                // Odd One Out mode
                // current.word is the odd one. We need 3 words from another theme.
                const otherThemes = [...new Set(accessibleVocab.map(v => v.theme))].filter(th => th && th !== current.theme);

                if (otherThemes.length === 0) {
                    showNext();
                    return;
                }

                const targetTheme = otherThemes[Math.floor(Math.random() * otherThemes.length)];
                const belongingWords = accessibleVocab
                    .filter(v => v.theme === targetTheme)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map(v => v.word);

                if (belongingWords.length < 3) {
                    showNext();
                    return;
                }

                cluesArea.innerHTML = `<span class="badge glass" style="padding: 15px 25px; border-radius: 30px; font-weight: 700; color: var(--accent-color);">${t('linker_odd_one_prompt')}</span>`;
                feedback.textContent = '';

                let options = [current.word, ...belongingWords].sort(() => Math.random() - 0.5);

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
                            speak(opt, lang);
                            setTimeout(showNext, 1500);
                        } else {
                            feedback.textContent = t('incorrect');
                            feedback.style.color = 'var(--accent-color)';
                        }
                    };
                    optionsGrid.appendChild(btn);
                });
            }
        };

        openBtn?.addEventListener('click', () => api.open());
        levelSelect?.addEventListener('change', populateThemesLocal);
        langSelect?.addEventListener('change', populateThemesLocal);

        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        startBtn?.addEventListener('click', () => {
            const lang = document.getElementById('linker-lang').value;
            const level = document.getElementById('linker-level').value;
            const theme = themeSelect.value;
            currentGameMode = document.getElementById('linker-mode')?.value || 'association';

            let allVocab = (window.vocabularyData[lang] || [])
                .filter(v => v.theme !== 'famous_people'); // Exclude names from Word Linker

            allVocab = allVocab.filter(v => isThemeMatch(v.theme, theme));

            // Filter by level (cumulative) if not "all"
            if (level !== 'all') {
                const levelIndex = levelsOrder.indexOf(level);
                allVocab = allVocab.filter(v => {
                    const vIndex = levelsOrder.indexOf(v.level || 'starter');
                    return vIndex !== -1 && vIndex <= levelIndex;
                });
            }

            pool = allVocab.filter(v => v.theme).sort(() => Math.random() - 0.5).slice(0, 10);

            if (pool.length === 0) {
                showGameMessage(setupArea, t('alert_no_vocab_level'), 'error');
                return;
            }
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        });
    };

    initWordLinker();
});
