document.addEventListener('DOMContentLoaded', () => {
    const { speak, seededShuffle, handleShare, playGameSound, getNumberWord } = window.gameUtils;

    const initBingo = () => {
        const { createConfetti } = window.gameUtils;
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
        let speedInterval = null;
        let hasWonCurrentCard = false;

        const openBingo = () => {
            modal.classList.remove('hidden');
            setupArea.classList.remove('hidden');
            callerArea.classList.add('hidden');
            playerArea.classList.add('hidden');
        };

        openBtn?.addEventListener('click', openBingo);
        closeBtn?.addEventListener('click', () => {
            modal.classList.add('hidden');
            clearInterval(speedInterval);
            // Improvements: stopAutoCaller
            if (window.LuckyNumbersGame) LuckyNumbersGame.stopAutoCaller();
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
                const finishEmoji = "🏁";
                lastCalledDisplay.textContent = finishEmoji;
                lastCalledDisplay.style.fontSize = "5rem";

                const playerLastCalled = document.getElementById('bingo-player-last-called');
                if (playerLastCalled) playerLastCalled.textContent = finishEmoji;

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

            const lang = document.getElementById('bingo-lang').value;
            const contentType = document.getElementById('bingo-content-type').value;

            const updateDisplay = (container, val) => {
                if (!container) return;
                if (contentType === 'words' && typeof val === 'number') {
                    const word = window.gameUtils.getNumberWord(val, lang);
                    container.innerHTML = `<div class="loto-ball" style="font-size: 0.8rem; padding: 5px;">${word}</div>`;
                } else {
                    container.textContent = val;
                }
            };

            updateDisplay(lastCalledDisplay, item);
            updateDisplay(document.getElementById('bingo-player-last-called'), item);

            // Improvements: speakCalled
            if (window.LuckyNumbersGame && contentType === 'numbers') {
                LuckyNumbersGame.speakCalled(item, lang);
            }

            const histSpan = document.createElement('span');
            histSpan.className = 'badge';
            histSpan.style.background = 'var(--primary-color)';
            histSpan.style.color = 'white';
            histSpan.style.padding = '2px 8px';
            histSpan.style.borderRadius = '10px';
            histSpan.textContent = item;
            historyDisplay.prepend(histSpan);

            if (contentType !== 'words') {
                speak(item.toString(), lang);
            }
        };

        const startBingoCaller = () => {
            const pool = preparePool();
            const urlParams = new URLSearchParams(window.location.search);
            const seed = urlParams.get('seed') ? parseInt(urlParams.get('seed')) : getSeed();
            bingoPool = seededShuffle([...pool], seed);
            calledItems = [];
            lastCalledDisplay.textContent = '---';
            lastCalledDisplay.style.fontSize = "";

            const playerLastCalled = document.getElementById('bingo-player-last-called');
            if (playerLastCalled) playerLastCalled.textContent = '---';

            const existingMsg = document.getElementById('bingo-finished-msg');
            if (existingMsg) existingMsg.remove();

            historyDisplay.innerHTML = '';
            setupArea.classList.add('hidden');
            callerArea.classList.remove('hidden');

            const autoIndicator = document.getElementById('bingo-auto-indicator');
            if (autoIndicator) autoIndicator.classList.add('hidden');

            clearInterval(speedInterval);
        };

        startCallerBtn?.addEventListener('click', startBingoCaller);
        callNextBtn?.addEventListener('click', callNext);

        // Improvements: auto-caller toggle
        document.getElementById('bingo-auto-caller-toggle-btn')?.addEventListener('click', () => {
            if (window.LuckyNumbersGame) {
                if (LuckyNumbersGame.autoCallerInterval) {
                    LuckyNumbersGame.stopAutoCaller();
                    document.getElementById('bingo-auto-indicator').classList.add('hidden');
                } else {
                    LuckyNumbersGame.startAutoCaller(bingoPool, document.getElementById('bingo-lang').value, 4000);
                    document.getElementById('bingo-auto-indicator').classList.remove('hidden');
                }
            }
        });

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
            const lang = document.getElementById('bingo-lang').value;
            const contentType = document.getElementById('bingo-content-type').value;

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

                let displayValue = item;
                if (contentType === 'words' && typeof item === 'number') {
                    displayValue = window.gameUtils.getNumberWord(item, lang);
                }

                cell.textContent = displayValue;
                cell.onclick = () => {
                    if (cell.classList.contains('marked')) {
                        cell.classList.remove('marked');
                        playGameSound('click');
                        // Optional: re-check win if we want to allow "un-winning"
                        // but usually we just care if they win once.
                    } else {
                        cell.classList.add('marked');
                        playGameSound('click');
                        if (!hasWonCurrentCard && checkWin(playerGrid, cols, rows)) {
                            hasWonCurrentCard = true;
                            // Improvements: celebrate
                            if (window.LuckyNumbersGame) {
                                LuckyNumbersGame.celebrate();
                            } else {
                                playGameSound('success');
                                createConfetti();
                            }
                            window.gameUtils.showGameMessage(playerArea, "BINGO! 🎉");
                        }
                    }
                };
                playerGrid.appendChild(cell);
            });
            cardNumDisplay.textContent = currentCardIndex + 1;
        };

        const startBingoPlayer = () => {
            currentCardIndex = 0;
            hasWonCurrentCard = false;
            generatePlayerCard();
            setupArea.classList.add('hidden');
            playerArea.classList.remove('hidden');

            const playerLastCalled = document.getElementById('bingo-player-last-called');
            if (playerLastCalled) playerLastCalled.textContent = '---';

            const soloMode = document.getElementById('bingo-solo-mode')?.checked;
            const soloIndicator = document.getElementById('bingo-solo-indicator');
            if (soloIndicator) soloIndicator.classList.add('hidden');

            clearInterval(speedInterval);
            if (soloMode) {
                if (soloIndicator) soloIndicator.classList.remove('hidden');
                const pool = preparePool();
                const urlParams = new URLSearchParams(window.location.search);
                const seed = urlParams.get('seed') ? parseInt(urlParams.get('seed')) : getSeed();
                bingoPool = seededShuffle([...pool], seed);

                const lang = document.getElementById('bingo-lang').value;
                const contentType = document.getElementById('bingo-content-type').value;

                const soloCallNext = () => {
                    if (bingoPool.length === 0) {
                        clearInterval(speedInterval);
                        return;
                    }
                    const item = bingoPool.pop();

                    if (playerLastCalled) {
                        if (contentType === 'words' && typeof item === 'number') {
                            const word = window.gameUtils.getNumberWord(item, lang);
                            playerLastCalled.innerHTML = `<div class="loto-ball" style="font-size: 0.8rem; padding: 5px;">${word}</div>`;
                        } else {
                            playerLastCalled.textContent = item;
                        }
                    }

                    if (contentType !== 'words') {
                        speak(item.toString(), lang);
                    }
                };

                soloCallNext();
                speedInterval = setInterval(soloCallNext, 5000);
            }
        };

        startPlayerBtn?.addEventListener('click', startBingoPlayer);
        nextCardBtn?.addEventListener('click', () => {
            currentCardIndex++;
            hasWonCurrentCard = false;
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
