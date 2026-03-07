document.addEventListener('DOMContentLoaded', () => {
    // --- Shared Constants & Helpers ---
    const getLang = () => localStorage.getItem('language') || 'en';
    const t = (key) => (translations[getLang()] && translations[getLang()][key]) || key;

    const parseLessons = (input) => {
        const lessons = new Set();
        if (!input) return lessons;
        input.split(',').forEach(part => {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(Number);
                for (let i = start; i <= end; i++) lessons.add(i);
            } else {
                lessons.add(Number(part));
            }
        });
        return lessons;
    };

    const speak = (text, lang) => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = lang === 'en' ? 'en-GB' :
                   lang === 'fr' ? 'fr-FR' :
                   lang === 'it' ? 'it-IT' :
                   lang === 'ru' ? 'ru-RU' :
                   lang === 'el' ? 'el-GR' : 'en-GB';
        window.speechSynthesis.speak(msg);
    };

    // Mulberry32 algorithm for deterministic random number generation
    const mulberry32 = (a) => {
        return function() {
            let t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }
    };

    // Helper to shuffle array with a seed
    const seededShuffle = (array, seed) => {
        const rng = mulberry32(seed);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // --- Charades (Moved from script.js and Enhanced) ---
    const handleShare = (btnId, params) => {
        const btn = document.getElementById(btnId);
        if (!btn) return;
        btn.addEventListener('click', () => {
            const baseUrl = window.location.href.split('?')[0];
            const queryParts = [];
            for (const [k, v] of Object.entries(params)) {
                const val = typeof v === 'function' ? v() : v;
                if (val) queryParts.push(`${k}=${encodeURIComponent(val)}`);
            }
            queryParts.push('embed=true');
            const shareUrl = `${baseUrl}?${queryParts.join('&')}`;

            navigator.clipboard.writeText(shareUrl).then(() => {
                const originalText = btn.innerHTML;
                const lang = getLang();
                const copiedText = (translations[lang] && translations[lang]['copied']) ? translations[lang]['copied'] : "Copied! ✅";
                btn.innerHTML = copiedText;
                setTimeout(() => btn.innerHTML = originalText, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert("Link: " + shareUrl);
            });
        });
    };

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
            const lessons = parseLessons(document.getElementById('charades-lessons').value);

            pool = [];
            // Lessons Data
            if (lessonsData[lang]) {
                lessons.forEach(num => {
                    if (lessonsData[lang][num]) {
                        lessonsData[lang][num].words.forEach(w => {
                            if (w.category === 'vocabulary' && (theme === 'all' || w.theme === theme)) {
                                pool.push(w);
                            }
                        });
                    }
                });
            }
            // Extra Games Data
            if (gamesData[lang] && theme !== 'all') {
                if (gamesData[lang][theme]) {
                    gamesData[lang][theme].forEach(w => pool.push(w));
                }
            } else if (gamesData[lang] && theme === 'all') {
                Object.values(gamesData[lang]).forEach(list => {
                    list.forEach(w => pool.push(w));
                });
            }

            // Filter pool by level if not "all"
            if (level !== 'all') {
                pool = pool.filter(item => {
                    if (typeof item === 'string') return true; // Legacy strings don't have levels
                    return item.level === level;
                });
            }

            if (pool.length === 0) {
                alert("No items found!");
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            resultArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startCharades);

        correctBtn?.addEventListener('click', () => { score++; showNext(); });
        incorrectBtn?.addEventListener('click', showNext);
        stopBtn?.addEventListener('click', endGame);

        // Share Link for Charades
        handleShare('share-charades-btn', {
            game: 'charades',
            lang: () => document.getElementById('charades-lang').value,
            level: () => document.getElementById('charades-level').value,
            theme: () => document.getElementById('charades-theme').value,
            lesson: () => document.getElementById('charades-lessons').value
        });

        return { open: openCharades, start: startCharades };
    };

    // --- Guess Who / Guess What Logic ---
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

        let pool = [];

        const showTarget = () => {
            if (pool.length === 0) {
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const item = pool.pop();
            const wordText = typeof item === 'string' ? item : (item.word || item);
            targetDisplay.textContent = wordText;

            // Add prompts
            promptList.innerHTML = '';
            const prompts = gameType === 'who' ?
                ['q_man_woman', 'q_alive_dead', 'q_nationality', 'q_job'] :
                ['q_food_drink', 'q_object', 'q_place', 'q_size', 'q_color', 'q_location'];

            prompts.forEach(pKey => {
                const li = document.createElement('li');
                li.textContent = t(pKey);
                promptList.appendChild(li);
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openGame);

        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        const startGame = () => {
            const lang = modal.querySelector('.game-lang').value;
            const theme = themeSelect.value;
            const level = modal.querySelector('.game-level').value;

            pool = [];
            if (gamesData[lang] && gamesData[lang][theme]) {
                pool = [...gamesData[lang][theme]];
            }

            // Filter pool by level if not "all"
            if (level !== 'all') {
                pool = pool.filter(item => {
                    if (typeof item === 'string') return true;
                    return item.level === level;
                });
            }

            if (pool.length === 0) {
                alert("No items found!");
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showTarget();
        };

        startBtn?.addEventListener('click', startGame);

        nextBtn?.addEventListener('click', showTarget);

        // Share Link for Guess games
        handleShare(`share-guess-${gameType}-btn`, {
            game: gameType === 'who' ? 'guess-who' : 'guess-what',
            lang: () => modal.querySelector('.game-lang').value,
            level: () => modal.querySelector('.game-level').value,
            theme: () => modal.querySelector('.game-theme').value
        });

        return { open: openGame, start: startGame };
    };

    // --- Bingo Logic ---
    const initBingo = () => {
        const modal = document.getElementById('bingo-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-bingo-btn');
        const closeBtn = document.getElementById('close-bingo-btn');
        const startCallerBtn = document.getElementById('start-bingo-caller-btn');
        const startPlayerBtn = document.getElementById('start-bingo-player-btn');
        const callNextBtn = document.getElementById('bingo-call-next-btn');

        const setupArea = document.getElementById('bingo-setup');
        const callerArea = document.getElementById('bingo-caller-area');
        const playerArea = document.getElementById('bingo-player-area');
        const lastCalledDisplay = document.getElementById('bingo-last-called');
        const playerGrid = document.getElementById('bingo-player-grid');
        const historyDisplay = document.getElementById('bingo-history');
        const nextCardBtn = document.getElementById('bingo-next-card-btn');
        const cardNumDisplay = document.getElementById('bingo-card-num-display');

        let bingoPool = [];
        let calledItems = [];
        let currentCardIndex = 0;

        const openBingo = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            callerArea.style.display = 'none';
            playerArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openBingo);

        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        const preparePool = () => {
            const level = document.getElementById('bingo-level').value;
            const lang = document.getElementById('bingo-lang').value;
            let pool = [];

            if (level === 'alphabet') {
                pool = (alphabetsData[lang] || alphabetsData['en']).split('');
            } else {
                let min = 0, max = 9;
                if (level === '1') { min = 0; max = 9; }
                else if (level === '2') { min = 0; max = 19; }
                else if (level === '3') { min = 20; max = 99; }
                else if (level === '4') { min = 100; max = 9999; }
                else { min = 0; max = 9999; }

                for (let i = min; i <= max; i++) pool.push(i);
            }
            return pool;
        };

        const getSeed = () => {
            const seedVal = document.getElementById('bingo-seed').value;
            if (!seedVal) return Math.floor(Math.random() * 1000000);
            // Simple hash for string seed
            let hash = 0;
            for (let i = 0; i < seedVal.length; i++) {
                hash = ((hash << 5) - hash) + seedVal.charCodeAt(i);
                hash |= 0;
            }
            return Math.abs(hash);
        };

        const startBingoCaller = () => {
            const pool = preparePool();
            const seed = getSeed();
            bingoPool = seededShuffle([...pool], seed);
            calledItems = [];
            lastCalledDisplay.textContent = '---';
            historyDisplay.innerHTML = '';
            setupArea.style.display = 'none';
            callerArea.style.display = 'block';
        };

        startCallerBtn?.addEventListener('click', startBingoCaller);

        callNextBtn?.addEventListener('click', () => {
            if (bingoPool.length === 0) {
                alert("All items called!");
                return;
            }
            const item = bingoPool.pop();
            calledItems.push(item);
            lastCalledDisplay.textContent = item;

            // Add to history
            const histSpan = document.createElement('span');
            histSpan.className = 'badge';
            histSpan.style.background = 'var(--primary-color)';
            histSpan.style.color = 'white';
            histSpan.style.padding = '2px 8px';
            histSpan.style.borderRadius = '10px';
            histSpan.textContent = item;
            historyDisplay.prepend(histSpan);

            speak(item.toString(), document.getElementById('bingo-lang').value);
        });

        const generatePlayerCard = () => {
            const pool = preparePool();
            const seed = getSeed();

            // Allow multiple cards from the same seed by offsetting
            // First card: 0-8, second: 1-9, etc. - No, better use card index as additional seed
            const cardSeed = seed + currentCardIndex * 100;
            const cardShuffled = seededShuffle([...pool], cardSeed);

            const myItems = cardShuffled.slice(0, 9);
            myItems.sort((a,b) => (typeof a === 'number' ? a - b : a.localeCompare(b)));

            playerGrid.innerHTML = '';
            myItems.forEach(item => {
                const cell = document.createElement('div');
                cell.className = 'bingo-cell card glass';
                cell.textContent = item;
                cell.onclick = () => cell.classList.toggle('marked');
                playerGrid.appendChild(cell);
            });
            cardNumDisplay.textContent = currentCardIndex + 1;
        };

        const startBingoPlayer = () => {
            currentCardIndex = 0;
            generatePlayerCard();
            setupArea.style.display = 'none';
            playerArea.style.display = 'block';
        };

        startPlayerBtn?.addEventListener('click', startBingoPlayer);

        nextCardBtn?.addEventListener('click', () => {
            currentCardIndex++;
            generatePlayerCard();
        });

        // Share Link for Bingo
        handleShare('share-bingo-btn', {
            game: 'bingo',
            lang: () => document.getElementById('bingo-lang').value,
            level: () => document.getElementById('bingo-level').value,
            seed: () => document.getElementById('bingo-seed').value
        });

        return { open: openBingo, startCaller: startBingoCaller, startPlayer: startBingoPlayer };
    };

    // --- Debates Logic ---
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
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const debate = pool.pop();
            topicDisplay.textContent = debate.topic;
            sideAName.textContent = debate.sideA;
            sideBName.textContent = debate.sideB;

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
        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        const startGame = () => {
            const lang = document.getElementById('debates-lang').value;
            const level = document.getElementById('debates-level').value;

            pool = [];
            if (speakingGamesData[lang] && speakingGamesData[lang].debates) {
                pool = [...speakingGamesData[lang].debates];
            }

            if (level !== 'all') {
                pool = pool.filter(d => d.level === level);
            }

            if (pool.length === 0) {
                alert("No debates found for this level!");
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
            game: 'debates',
            lang: () => document.getElementById('debates-lang').value,
            level: () => document.getElementById('debates-level').value
        });

        return { open: openGame, start: startGame };
    };

    // --- Talk That Talk Logic ---
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
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const item = pool.pop();
            topicDisplay.textContent = item.topic;
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openGame);
        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        const startGame = () => {
            const lang = document.getElementById('talk-lang').value;
            const level = document.getElementById('talk-level').value;

            pool = [];
            if (speakingGamesData[lang] && speakingGamesData[lang].talkThatTalk) {
                pool = [...speakingGamesData[lang].talkThatTalk];
            }

            if (level !== 'all') {
                pool = pool.filter(d => d.level === level);
            }

            if (pool.length === 0) {
                alert("No topics found for this level!");
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', startGame); // Re-shuffle if we click Spin Again? Or just show next.
        // Actually, Spin Again should probably just show next word if we have them,
        // or re-start if pool empty. Let's make it show next.
        nextBtn?.addEventListener('click', showNext);

        handleShare('share-talk-talk-btn', {
            game: 'talk-talk',
            lang: () => document.getElementById('talk-lang').value,
            level: () => document.getElementById('talk-level').value
        });

        return { open: openGame, start: startGame };
    };

    // --- Agree/Disagree & Comment On Logic ---
    const initGenericTopicGame = (gameKey) => {
        const modalId = gameKey === 'agreeDisagree' ? 'agree-disagree-modal' : 'comment-on-modal';
        const modal = document.getElementById(modalId);
        if (!modal) return;

        const openBtn = document.getElementById(`open-${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-btn`);
        const closeBtn = document.getElementById(`close-${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-btn`);
        const startBtn = document.getElementById(`start-${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-btn`);
        const nextBtn = document.getElementById(`next-${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-btn`);

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const topicDisplay = document.getElementById(`${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-topic-display`);

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const item = pool.pop();
            topicDisplay.textContent = item.topic;
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openGame);
        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        const startGame = () => {
            const lang = document.getElementById(`${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-lang`).value;
            const level = document.getElementById(`${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-level`).value;

            pool = [];
            if (speakingGamesData[lang] && speakingGamesData[lang][gameKey]) {
                pool = [...speakingGamesData[lang][gameKey]];
            }

            if (level !== 'all') {
                pool = pool.filter(d => d.level === level);
            }

            if (pool.length === 0) {
                alert("No topics found for this level!");
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', showNext);

        handleShare(`share-${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-btn`, {
            game: gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on',
            lang: () => document.getElementById(`${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-lang`).value,
            level: () => document.getElementById(`${gameKey === 'agreeDisagree' ? 'agree-disagree' : 'comment-on'}-level`).value
        });

        return { open: openGame, start: startGame };
    };

    // Initialize all and handle deep linking
    const charades = initCharades();
    const guessWho = initGuessGame('who');
    const guessWhat = initGuessGame('what');
    const bingo = initBingo();
    const debates = initDebates();
    const talkTalk = initTalkTalk();
    const agreeDisagree = initGenericTopicGame('agreeDisagree');
    const commentOn = initGenericTopicGame('commentOn');

    // Deep Linking Support
    const urlParams = new URLSearchParams(window.location.search);
    const game = urlParams.get('game');
    const lang = urlParams.get('lang');
    const level = urlParams.get('level');
    const theme = urlParams.get('theme');
    const lesson = urlParams.get('lesson');
    const seed = urlParams.get('seed');
    const mode = urlParams.get('mode'); // for bingo: 'caller' or 'player'

    if (game) {
        // Wait a bit for everything to settle
        setTimeout(() => {
            if (game === 'charades') {
                charades.open();
                if (lang) document.getElementById('charades-lang').value = lang;
                if (level) document.getElementById('charades-level').value = level;
                if (theme) document.getElementById('charades-theme').value = theme;
                if (lesson) document.getElementById('charades-lessons').value = lesson;
                charades.start();
            } else if (game === 'guess-who') {
                guessWho.open();
                const modal = document.getElementById('guess-who-modal');
                if (lang) modal.querySelector('.game-lang').value = lang;
                if (level) modal.querySelector('.game-level').value = level;
                if (theme) modal.querySelector('.game-theme').value = theme;
                guessWho.start();
            } else if (game === 'guess-what') {
                guessWhat.open();
                const modal = document.getElementById('guess-what-modal');
                if (lang) modal.querySelector('.game-lang').value = lang;
                if (level) modal.querySelector('.game-level').value = level;
                if (theme) modal.querySelector('.game-theme').value = theme;
                guessWhat.start();
            } else if (game === 'bingo') {
                bingo.open();
                if (lang) document.getElementById('bingo-lang').value = lang;
                if (level) document.getElementById('bingo-level').value = level;
                if (seed) document.getElementById('bingo-seed').value = seed;
                if (mode === 'caller') bingo.startCaller();
                else if (mode === 'player') bingo.startPlayer();
            } else if (game === 'debates') {
                debates.open();
                if (lang) document.getElementById('debates-lang').value = lang;
                if (level) document.getElementById('debates-level').value = level;
                debates.start();
            } else if (game === 'talk-talk') {
                talkTalk.open();
                if (lang) document.getElementById('talk-lang').value = lang;
                if (level) document.getElementById('talk-level').value = level;
                talkTalk.start();
            } else if (game === 'agree-disagree') {
                agreeDisagree.open();
                if (lang) document.getElementById('agree-disagree-lang').value = lang;
                if (level) document.getElementById('agree-disagree-level').value = level;
                agreeDisagree.start();
            } else if (game === 'comment-on') {
                commentOn.open();
                if (lang) document.getElementById('comment-on-lang').value = lang;
                if (level) document.getElementById('comment-on-level').value = level;
                commentOn.start();
            }

            // Apply language to modals if lang param provided
            if (lang && typeof setLanguage === 'function') {
                setLanguage(lang);
            }
        }, 500);
    }
});
