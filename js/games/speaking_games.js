document.addEventListener('DOMContentLoaded', () => {
    const { t, startTimer, stopTimer, handleShare, showGameMessage, populateThemes, isThemeMatch } = window.gameUtils;

    // --- Battle of Wits Logic ---
    const initDebates = () => {
        const modal = document.getElementById('debates-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-debates-btn');
        const closeBtn = document.getElementById('close-debates-btn');
        const startBtn = document.getElementById('start-debates-btn');
        const nextBtn = document.getElementById('next-debate-btn');
        const levelSelect = document.getElementById('debates-level');
        const langSelect = document.getElementById('debates-lang');

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const topicDisplay = document.getElementById('debate-topic');
        const sideAName = document.getElementById('side-a-name');
        const sideBName = document.getElementById('side-b-name');
        const sideAIdeas = document.getElementById('side-a-ideas');
        const sideBIdeas = document.getElementById('side-b-ideas');

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                stopTimer();
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const debate = pool.pop();
            topicDisplay.textContent = debate.topic;
            sideAName.textContent = debate.sideA;
            sideBName.textContent = debate.sideB;

            stopTimer();
            const duration = parseInt(document.getElementById('debates-timer-duration')?.value || '120');
            startTimer('debates-timer', duration, () => {
                topicDisplay.textContent += ` (${t('time_up')})`;
            });

            const ideasAContainer = sideAIdeas.parentElement;
            const ideasBContainer = sideBIdeas.parentElement;

            sideAIdeas.innerHTML = '';
            if (debate.ideasA && debate.ideasA.length > 0) {
                ideasAContainer.style.display = 'block';
                debate.ideasA.forEach(idea => {
                    const li = document.createElement('li');
                    li.textContent = idea;
                    sideAIdeas.appendChild(li);
                });
            } else {
                ideasAContainer.style.display = 'none';
            }

            sideBIdeas.innerHTML = '';
            if (debate.ideasB && debate.ideasB.length > 0) {
                ideasBContainer.style.display = 'block';
                debate.ideasB.forEach(idea => {
                    const li = document.createElement('li');
                    li.textContent = idea;
                    sideBIdeas.appendChild(li);
                });
            } else {
                ideasBContainer.style.display = 'none';
            }
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            populateThemes(document.getElementById('debates-theme'), document.getElementById('debates-level'), document.getElementById('debates-lang').value, 'speaking');
        };

        openBtn?.addEventListener('click', openGame);
        levelSelect?.addEventListener('change', () => populateThemes(document.getElementById('debates-theme'), document.getElementById('debates-level'), document.getElementById('debates-lang').value, 'speaking'));
        langSelect?.addEventListener('change', () => populateThemes(document.getElementById('debates-theme'), document.getElementById('debates-level'), document.getElementById('debates-lang').value, 'speaking'));
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('debates-lang').value;
            const level = document.getElementById('debates-level').value;
            const theme = document.getElementById('debates-theme').value;

            pool = window.speakingData && window.speakingData[lang]?.debates || [];
            pool = pool.filter(d => isThemeMatch(d.theme, theme));

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(d => {
                    const itemIdx = levels.indexOf(d.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(modal.querySelector('.game-setup'), t('alert_no_arena_topics'), 'error');
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', showNext);

        handleShare('share-debates-btn', {
            game: 'battle_of_wits',
            lang: () => document.getElementById('debates-lang').value,
            level: () => document.getElementById('debates-level').value
        });

        return { open: openGame, start: startGame };
    };

    // --- Opinion Arena Logic ---
    const initOpinionArena = () => {
        const modal = document.getElementById('opinion-arena-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-opinion-arena-btn');
        const closeBtn = document.getElementById('close-opinion-btn');
        const startBtn = document.getElementById('start-opinion-btn');
        const nextBtn = document.getElementById('next-opinion-btn');

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const statementDisplay = document.getElementById('opinion-statement-display');

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                stopTimer();
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const item = pool.pop();
            statementDisplay.textContent = item.text;

            // Improvements: buildGroupReveal
            if (window.OpinionArenaGame) {
                document.getElementById('oa-group-reveal').innerHTML = OpinionArenaGame.buildGroupReveal();
                document.getElementById('oa-vocab-support').innerHTML = ''; // Hide until end
            }

            stopTimer();
            const duration = parseInt(document.getElementById('opinion-timer-duration')?.value || '120');
            const lang = document.getElementById('opinion-lang').value;
            startTimer('opinion-timer', duration, () => {
                statementDisplay.textContent += ` (${t('time_up')})`;
                // Improvements: buildVocabSupport
                if (window.OpinionArenaGame) {
                    document.getElementById('oa-vocab-support').innerHTML = OpinionArenaGame.buildVocabSupport(lang);
                }
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            populateThemes(document.getElementById('opinion-theme'), document.getElementById('opinion-level'), document.getElementById('opinion-lang').value, 'speaking');
        };

        openBtn?.addEventListener('click', openGame);
        document.getElementById('opinion-level')?.addEventListener('change', () => populateThemes(document.getElementById('opinion-theme'), document.getElementById('opinion-level'), document.getElementById('opinion-lang').value, 'speaking'));
        document.getElementById('opinion-lang')?.addEventListener('change', () => populateThemes(document.getElementById('opinion-theme'), document.getElementById('opinion-level'), document.getElementById('opinion-lang').value, 'speaking'));
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('opinion-lang').value;
            const level = document.getElementById('opinion-level').value;
            const theme = document.getElementById('opinion-theme').value;

            pool = window.speakingData && window.speakingData[lang]?.opinionArena || [];
            pool = pool.filter(d => isThemeMatch(d.theme, theme));

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(d => {
                    const itemIdx = levels.indexOf(d.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(modal.querySelector('.game-setup'), t('alert_no_arena_topics'), 'error');
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', showNext);

        handleShare('share-opinion-btn', {
            game: 'opinion_arena',
            lang: () => document.getElementById('opinion-lang').value,
            level: () => document.getElementById('opinion-level').value
        });

        return { open: openGame, start: startGame };
    };

    // --- Critic's Corner Logic ---
    const initCriticsCorner = () => {
        const modal = document.getElementById('critics-corner-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-critics-corner-btn');
        const closeBtn = document.getElementById('close-critics-btn');
        const startBtn = document.getElementById('start-critics-btn');
        const nextBtn = document.getElementById('next-critics-btn');

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const quoteDisplay = document.getElementById('critics-quote-display');
        const authorDisplay = document.getElementById('critics-author-display');

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                stopTimer();
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const item = pool.pop();
            quoteDisplay.textContent = `"${item.text}"`;
            authorDisplay.textContent = item.author ? `- ${item.author}` : "";

            stopTimer();
            const duration = parseInt(document.getElementById('critics-timer-duration')?.value || '120');
            startTimer('critics-timer', duration, () => {
                quoteDisplay.textContent += ` (${t('time_up')})`;
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            populateThemes(document.getElementById('critics-theme'), document.getElementById('critics-level'), document.getElementById('critics-lang').value, 'speaking');
        };

        openBtn?.addEventListener('click', openGame);
        document.getElementById('critics-level')?.addEventListener('change', () => populateThemes(document.getElementById('critics-theme'), document.getElementById('critics-level'), document.getElementById('critics-lang').value, 'speaking'));
        document.getElementById('critics-lang')?.addEventListener('change', () => populateThemes(document.getElementById('critics-theme'), document.getElementById('critics-level'), document.getElementById('critics-lang').value, 'speaking'));
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('critics-lang').value;
            const level = document.getElementById('critics-level').value;
            const theme = document.getElementById('critics-theme').value;

            pool = window.speakingData && window.speakingData[lang]?.criticsCorner || [];
            pool = pool.filter(d => isThemeMatch(d.theme, theme));

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(d => {
                    const itemIdx = levels.indexOf(d.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(modal.querySelector('.game-setup'), t('alert_no_corner_quotes'), 'error');
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', showNext);

        handleShare('share-critics-btn', {
            game: 'critics_corner',
            lang: () => document.getElementById('critics-lang').value,
            level: () => document.getElementById('critics-level').value
        });

        return { open: openGame, start: startGame };
    };

    // --- Fluency Flow Logic ---
    const initTalkTalk = () => {
        const modal = document.getElementById('talk-talk-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-talk-talk-btn');
        const closeBtn = document.getElementById('close-talk-btn');
        const startBtn = document.getElementById('start-talk-btn');
        const nextBtn = document.getElementById('next-talk-btn');

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const topicDisplay = document.getElementById('talk-topic-display');

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                stopTimer();
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const item = pool.pop();
            topicDisplay.textContent = item.topic;

            // Improvements: FluentyFlowGame.getPrompts
            if (window.FluentyFlowGame) {
                const currentLevel = document.getElementById('talk-level').value;
                const prompts = FluentyFlowGame.getPrompts(item, currentLevel);
                const promptsHtml = `
                    <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:8px">
                        ${prompts.map(p =>
                        `<span style="background:#e8f0e9;color:#4a6b50;border-radius:999px;
                            padding:4px 12px;font-size:.78rem;font-weight:700">${p}</span>`
                        ).join('')}
                    </div>
                `;
                document.getElementById('ff-prompts').innerHTML = promptsHtml;
                document.getElementById('ff-assessment-area').innerHTML = '';
            }

            stopTimer();
            const duration = parseInt(document.getElementById('talk-timer-duration')?.value || '180');
            startTimer('talk-timer', duration, () => {
                topicDisplay.textContent += ` (${t('time_up')})`;
                // Improvements: buildSelfAssessment
                if (window.FluentyFlowGame) {
                    document.getElementById('ff-assessment-area').innerHTML = FluentyFlowGame.buildSelfAssessment(item);
                }
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            populateThemes(document.getElementById('talk-theme'), document.getElementById('talk-level'), document.getElementById('talk-lang').value, 'speaking');
        };

        openBtn?.addEventListener('click', openGame);
        document.getElementById('talk-level')?.addEventListener('change', () => populateThemes(document.getElementById('talk-theme'), document.getElementById('talk-level'), document.getElementById('talk-lang').value, 'speaking'));
        document.getElementById('talk-lang')?.addEventListener('change', () => populateThemes(document.getElementById('talk-theme'), document.getElementById('talk-level'), document.getElementById('talk-lang').value, 'speaking'));
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('talk-lang').value;
            const level = document.getElementById('talk-level').value;
            const theme = document.getElementById('talk-theme').value;

            pool = window.speakingData && window.speakingData[lang]?.talkThatTalk || [];
            pool = pool.filter(d => isThemeMatch(d.theme, theme));

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(d => {
                    const itemIdx = levels.indexOf(d.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(modal.querySelector('.game-setup'), t('alert_no_flow_topics'), 'error');
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', showNext);

        handleShare('share-talk-talk-btn', {
            game: 'fluency_flow',
            lang: () => document.getElementById('talk-lang').value,
            level: () => document.getElementById('talk-level').value
        });

        return { open: openGame, start: startGame };
    };

    window.debatesGame = initDebates();
    window.opinionArenaGame = initOpinionArena();
    window.criticsCornerGame = initCriticsCorner();
    window.talkTalkGame = initTalkTalk();
});
