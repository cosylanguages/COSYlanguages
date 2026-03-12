document.addEventListener('DOMContentLoaded', () => {
    const { speak, seededShuffle, handleShare, playGameSound } = window.gameUtils;

    const initBingo = () => {
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
                else if (level === '4') { min = 100; max = 9999; }
                else { min = 0; max = 9999; }

                for (let i = min; i <= max; i++) pool.push(i);
            }
            return pool;
        };

        const getSeed = () => {
            const seedVal = document.getElementById('bingo-seed').value;
            if (!seedVal) return Math.floor(Math.random() * 1000000);
            let hash = 0;
            for (let i = 0; i < seedVal.length; i++) {
                hash = ((hash << 5) - hash) + seedVal.charCodeAt(i);
                hash |= 0;
            }
            return Math.abs(hash);
        };

        const callNext = () => {
            if (bingoPool.length === 0) {
                alert("All items called!");
                clearInterval(speedInterval);
                return;
            }
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
            const seed = getSeed();
            bingoPool = seededShuffle([...pool], seed);
            calledItems = [];
            lastCalledDisplay.textContent = '---';
            historyDisplay.innerHTML = '';
            setupArea.style.display = 'none';
            callerArea.style.display = 'block';

            clearInterval(speedInterval);
            if (speedModeToggle?.checked) {
                speedInterval = setInterval(() => {
                    callNext();
                }, 5000);
            }
        };

        startCallerBtn?.addEventListener('click', startBingoCaller);
        callNextBtn?.addEventListener('click', callNext);

        const generatePlayerCard = () => {
            const pool = preparePool();
            const seed = getSeed();
            const cardSeed = seed + currentCardIndex * 100;
            const cardShuffled = seededShuffle([...pool], cardSeed);

            const myItems = cardShuffled.slice(0, 9);
            myItems.sort((a,b) => (typeof a === 'number' ? a - b : a.localeCompare(b)));

            playerGrid.innerHTML = '';
            myItems.forEach(item => {
                const cell = document.createElement('div');
                cell.className = 'bingo-cell card glass';
                cell.textContent = item;
                cell.onclick = () => {
                    playGameSound('click');
                    cell.classList.toggle('marked');
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
            clearInterval(speedInterval);
            if (soloMode) {
                const pool = preparePool();
                const seed = getSeed();
                bingoPool = seededShuffle([...pool], seed);
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
            seed: () => document.getElementById('bingo-seed').value
        });

        return { open: openBingo, startCaller: startBingoCaller, startPlayer: startBingoPlayer };
    };

    window.bingoGame = initBingo();
});
