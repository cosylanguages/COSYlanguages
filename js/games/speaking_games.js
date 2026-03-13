document.addEventListener('DOMContentLoaded', () => {
    const { t, startTimer, stopTimer, handleShare, showGameMessage } = window.gameUtils;

    // --- Battle of Wits Logic ---
    const initDebates = () => {
        const modal = document.getElementById('debates-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-debates-btn');
        const closeBtn = document.getElementById('close-debates-btn');
        const startBtn = document.getElementById('start-debates-btn');
        const nextBtn = document.getElementById('next-debate-btn');

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
                topicDisplay.textContent = t('time_up');
            });

            sideAIdeas.innerHTML = '';
            debate.ideasA.forEach(idea => {
                const li = document.createElement('li');
                li.textContent = idea;
                sideAIdeas.appendChild(li);
            });

            sideBIdeas.innerHTML = '';
            debate.ideasB.forEach(idea => {
                const li = document.createElement('li');
                li.textContent = idea;
                sideBIdeas.appendChild(li);
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openGame);
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('debates-lang').value;
            const level = document.getElementById('debates-level').value;

            pool = window.speakingData && window.speakingData[lang]?.debates || [];

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

            stopTimer();
            const duration = parseInt(document.getElementById('opinion-timer-duration')?.value || '120');
            startTimer('opinion-timer', duration, () => {
                statementDisplay.textContent = t('time_up');
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openGame);
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('opinion-lang').value;
            const level = document.getElementById('opinion-level').value;

            pool = window.speakingData && window.speakingData[lang]?.opinionArena || [];

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
                quoteDisplay.textContent = t('time_up');
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openGame);
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('critics-lang').value;
            const level = document.getElementById('critics-level').value;

            pool = window.speakingData && window.speakingData[lang]?.criticsCorner || [];

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

            stopTimer();
            const duration = parseInt(document.getElementById('talk-timer-duration')?.value || '180');
            startTimer('talk-timer', duration, () => {
                topicDisplay.textContent = t('time_up');
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openGame);
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('talk-lang').value;
            const level = document.getElementById('talk-level').value;

            pool = window.speakingData && window.speakingData[lang]?.talkThatTalk || [];

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
