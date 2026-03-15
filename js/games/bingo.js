document.addEventListener('DOMContentLoaded', () => {
    const { speak, seededShuffle, handleShare, playGameSound } = window.gameUtils;

    const initBingo = () => {
        const { createConfetti } = window.gameUtils;
        const modal = document.getElementById('bingo-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-bingo-btn');
        const closeBtn = document.getElementById('close-bingo-btn');
        const startCallerBtn = document.getElementById('start-bingo-caller-btn');
        const startPlayerBtn = document.getElementById('start-bingo-player-btn');
        const callNextBtn = document.getElementById('bingo-call-next-btn');
        const speedModeToggle = document.getElementById('bingo-speed-mode');

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
        let speedInterval = null;

        const openBingo = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            callerArea.style.display = 'none';
            playerArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openBingo);
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            clearInterval(speedInterval);
            window.speechSynthesis.cancel();
        });

        const preparePool = () => {
            const level = document.getElementById('bingo-level').value;
            const lang = document.getElementById('bingo-lang').value;
            let pool = [];

            if (level === 'alphabet') {
                pool = (window.alphabetsData && window.alphabetsData[lang] || window.alphabetsData['en'] || "").split('');
            } else {
                let min = 0, max = 9;
                if (level === '1') { min = 0; max = 9; }
                else if (level === '2') { min = 0; max = 19; }
                else if (level === '3') { min = 20; max = 99; }
                else { min = 0; max = 99; }

                for (let i = min; i <= max; i++) pool.push(i);
            }
            return pool;
        };

        const getSeed = () => {
            return Math.floor(Math.random() * 1000000);
        };

        const callNext = () => {
            if (bingoPool.length === 0) {
                lastCalledDisplay.textContent = "🏁";
                lastCalledDisplay.style.fontSize = "5rem";
                const finishMsg = t('alert_all_items_called') || "All items called!";

                const msgDiv = document.createElement('div');
                msgDiv.textContent = finishMsg;
                msgDiv.style.fontSize = "1.5rem";
                msgDiv.style.color = "var(--accent-color)";
                msgDiv.style.marginTop = "1rem";
                msgDiv.id = "bingo-finished-msg";

                if (!document.getElementById('bingo-finished-msg')) {
                    lastCalledDisplay.parentElement.insertBefore(msgDiv, lastCalledDisplay.nextSibling);
                }

                clearInterval(speedInterval);
                return;
            }

            const existingMsg = document.getElementById('bingo-finished-msg');
            if (existingMsg) existingMsg.remove();
            lastCalledDisplay.style.fontSize = "";

            playGameSound('click');
            const item = bingoPool.pop();
            calledItems.push(item);
            lastCalledDisplay.textContent = item;

            const histSpan = document.createElement('span');
            histSpan.className = 'badge';
            histSpan.style.background = 'var(--primary-color)';
            histSpan.style.color = 'white';
            histSpan.style.padding = '2px 8px';
            histSpan.style.borderRadius = '10px';
            histSpan.textContent = item;
            historyDisplay.prepend(histSpan);

            speak(item.toString(), document.getElementById('bingo-lang').value);
        };

        const startBingoCaller = () => {
            const pool = preparePool();
            const urlParams = new URLSearchParams(window.location.search);
            const seed = urlParams.get('seed') ? parseInt(urlParams.get('seed')) : getSeed();
            bingoPool = seededShuffle([...pool], seed);
            calledItems = [];
            lastCalledDisplay.textContent = '---';
            lastCalledDisplay.style.fontSize = "";
            const existingMsg = document.getElementById('bingo-finished-msg');
            if (existingMsg) existingMsg.remove();

            historyDisplay.innerHTML = '';
            setupArea.style.display = 'none';
            callerArea.style.display = 'block';

            const autoIndicator = document.getElementById('bingo-auto-indicator');
            if (autoIndicator) autoIndicator.style.display = 'none';

            clearInterval(speedInterval);
            if (speedModeToggle?.checked) {
                if (autoIndicator) autoIndicator.style.display = 'block';
                callNext();
                speedInterval = setInterval(() => {
                    callNext();
                }, 5000);
            }
        };

        startCallerBtn?.addEventListener('click', startBingoCaller);
        callNextBtn?.addEventListener('click', callNext);

        const checkWin = (grid, cols, rows) => {
            const cells = Array.from(grid.querySelectorAll('.bingo-cell'));
            if (cells.length < cols * rows) return false; // Not full grid

            // Rows
            for (let r = 0; r < rows; r++) {
                let complete = true;
                for (let c = 0; c < cols; c++) {
                    const cell = cells[r * cols + c];
                    if (!cell || !cell.classList.contains('marked')) {
                        complete = false;
                        break;
                    }
                }
                if (complete) return true;
            }

            // Columns
            for (let c = 0; c < cols; c++) {
                let complete = true;
                for (let r = 0; r < rows; r++) {
                    const cell = cells[r * cols + c];
                    if (!cell || !cell.classList.contains('marked')) {
                        complete = false;
                        break;
                    }
                }
                if (complete) return true;
            }

            return false;
        };

        const generatePlayerCard = () => {
            const level = document.getElementById('bingo-level').value;
            const pool = preparePool();
            const urlParams = new URLSearchParams(window.location.search);
            const seed = urlParams.get('seed') ? parseInt(urlParams.get('seed')) : getSeed();
            const cardSeed = seed + currentCardIndex * 100;
            const cardShuffled = seededShuffle([...pool], cardSeed);

            let count = 9, cols = 3, rows = 3;
            if (level === '2') { count = 15; cols = 3; rows = 5; }
            else if (level === '3') { count = 25; cols = 5; rows = 5; }
            else if (level === '5') { count = 27; cols = 9; rows = 3; }

            const myItems = cardShuffled.slice(0, count);
            myItems.sort((a,b) => (typeof a === 'number' ? a - b : a.localeCompare(b)));

            playerGrid.innerHTML = '';
            playerGrid.className = 'bingo-grid';
            if (cols === 5) playerGrid.classList.add('cols-5');
            if (cols === 9) playerGrid.classList.add('cols-9');

            myItems.forEach(item => {
                const cell = document.createElement('div');
                cell.className = 'bingo-cell card glass';
                cell.textContent = item;
                cell.onclick = () => {
                    if (cell.classList.contains('marked')) {
                        cell.classList.remove('marked');
                        playGameSound('click');
                    } else {
                        cell.classList.add('marked');
                        playGameSound('click');
                        if (checkWin(playerGrid, cols, rows)) {
                            playGameSound('success');
                            createConfetti();
                        }
                    }
                };
                playerGrid.appendChild(cell);
            });
            cardNumDisplay.textContent = currentCardIndex + 1;
        };

        const startBingoPlayer = () => {
            currentCardIndex = 0;
            generatePlayerCard();
            setupArea.style.display = 'none';
            playerArea.style.display = 'block';

            const soloMode = document.getElementById('bingo-solo-mode')?.checked;
            const soloIndicator = document.getElementById('bingo-solo-indicator');
            if (soloIndicator) soloIndicator.style.display = 'none';

            clearInterval(speedInterval);
            if (soloMode) {
                if (soloIndicator) soloIndicator.style.display = 'block';
                const pool = preparePool();
                const urlParams = new URLSearchParams(window.location.search);
                const seed = urlParams.get('seed') ? parseInt(urlParams.get('seed')) : getSeed();
                bingoPool = seededShuffle([...pool], seed);

                if (bingoPool.length > 0) {
                    const item = bingoPool.pop();
                    speak(item.toString(), document.getElementById('bingo-lang').value);
                }

                speedInterval = setInterval(() => {
                    if (bingoPool.length === 0) {
                        clearInterval(speedInterval);
                        return;
                    }
                    const item = bingoPool.pop();
                    speak(item.toString(), document.getElementById('bingo-lang').value);
                }, 5000);
            }
        };

        startPlayerBtn?.addEventListener('click', startBingoPlayer);
        nextCardBtn?.addEventListener('click', () => {
            currentCardIndex++;
            generatePlayerCard();
        });

        handleShare('share-bingo-btn', {
            game: 'lucky_numbers',
            lang: () => document.getElementById('bingo-lang').value,
            level: () => document.getElementById('bingo-level').value,
            seed: () => {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get('seed') || getSeed();
            }
        });

        return { open: openBingo, startCaller: startBingoCaller, startPlayer: startBingoPlayer };
    };

    window.bingoGame = initBingo();
});
