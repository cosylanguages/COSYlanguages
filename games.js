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

    // --- Charades (Moved from script.js and Enhanced) ---
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

        openBtn?.addEventListener('click', () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            resultArea.style.display = 'none';
        });

        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        startBtn?.addEventListener('click', () => {
            score = 0;
            const lang = document.getElementById('charades-lang').value;
            const theme = themeSelect.value;
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

            if (pool.length === 0) {
                alert("No items found!");
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            resultArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        });

        correctBtn?.addEventListener('click', () => { score++; showNext(); });
        incorrectBtn?.addEventListener('click', showNext);
        stopBtn?.addEventListener('click', endGame);
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

        openBtn?.addEventListener('click', () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
        });

        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        startBtn?.addEventListener('click', () => {
            const lang = modal.querySelector('.game-lang').value;
            const theme = themeSelect.value;

            pool = [];
            if (gamesData[lang] && gamesData[lang][theme]) {
                pool = [...gamesData[lang][theme]];
            }

            if (pool.length === 0) {
                alert("No items found!");
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showTarget();
        });

        nextBtn?.addEventListener('click', showTarget);
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

        let bingoPool = [];
        let calledItems = [];

        openBtn?.addEventListener('click', () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            callerArea.style.display = 'none';
            playerArea.style.display = 'none';
        });

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

        startCallerBtn?.addEventListener('click', () => {
            bingoPool = preparePool();
            bingoPool.sort(() => Math.random() - 0.5);
            calledItems = [];
            lastCalledDisplay.textContent = '---';
            setupArea.style.display = 'none';
            callerArea.style.display = 'block';
        });

        callNextBtn?.addEventListener('click', () => {
            if (bingoPool.length === 0) {
                alert("All items called!");
                return;
            }
            const item = bingoPool.pop();
            calledItems.push(item);
            lastCalledDisplay.textContent = item;
            speak(item.toString(), document.getElementById('bingo-lang').value);
        });

        startPlayerBtn?.addEventListener('click', () => {
            const pool = preparePool();
            pool.sort(() => Math.random() - 0.5);
            const myItems = pool.slice(0, 9); // 3x3 grid

            playerGrid.innerHTML = '';
            myItems.forEach(item => {
                const cell = document.createElement('div');
                cell.className = 'bingo-cell card glass';
                cell.textContent = item;
                cell.onclick = () => cell.classList.toggle('marked');
                playerGrid.appendChild(cell);
            });

            setupArea.style.display = 'none';
            playerArea.style.display = 'block';
        });
    };

    // Initialize all
    initCharades();
    initGuessGame('who');
    initGuessGame('what');
    initBingo();
});
