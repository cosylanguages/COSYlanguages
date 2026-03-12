document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, speak, seededShuffle } = window.gameUtils;

    const initPerfectMatch = () => {
        const modal = document.getElementById('match-modal');
        if (!modal) return;

        const api = {
            open: openMatch,
            start: () => startBtn.click()
        };
        window.perfectMatchGame = api;

        const openBtn = document.getElementById('open-match-btn');
        const closeBtn = document.getElementById('close-match-btn');
        const startBtn = document.getElementById('start-match-game-btn');
        const setupArea = document.getElementById('match-setup');
        const gameArea = document.getElementById('match-gameplay');
        const leftCol = document.getElementById('match-left-column');
        const rightCol = document.getElementById('match-right-column');
        const feedback = document.getElementById('match-feedback');

        let leftSelected = null;
        let pairsFound = 0;
        let totalPairs = 0;

        const openMatch = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
        };

        openBtn?.addEventListener('click', openMatch);
        closeBtn?.addEventListener('click', () => modal.style.display = 'none');

        const startMatch = () => {
            const lang = document.getElementById('match-lang').value;
            let vocab = window.vocabularyData[lang] || [];
            if (vocab.length < 5) {
                alert("Not enough vocabulary for this game!");
                return;
            }

            // Pick 5 random pairs
            const subset = vocab.sort(() => Math.random() - 0.5).slice(0, 5);
            totalPairs = subset.length;
            pairsFound = 0;

            const leftItems = subset.map(v => ({ id: v.word, text: v.word }));
            const rightItems = subset.map(v => ({ id: v.word, text: v.emoji || v.theme }));

            // Shuffle separately
            const leftShuffled = leftItems.sort(() => Math.random() - 0.5);
            const rightShuffled = rightItems.sort(() => Math.random() - 0.5);

            leftCol.innerHTML = '';
            rightCol.innerHTML = '';
            feedback.textContent = '';
            leftSelected = null;

            leftShuffled.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn pill-input';
                btn.textContent = item.text;
                btn.onclick = () => {
                    if (btn.classList.contains('matched')) return;
                    document.querySelectorAll('#match-left-column .choice-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    leftSelected = item.id;
                };
                leftCol.appendChild(btn);
            });

            rightShuffled.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn pill-input';
                btn.textContent = item.text;
                btn.onclick = () => {
                    if (btn.classList.contains('matched')) return;
                    if (!leftSelected) {
                        feedback.textContent = "Select a word on the left first!";
                        return;
                    }

                    if (item.id === leftSelected) {
                        feedback.textContent = t('correct');
                        feedback.style.color = 'var(--primary-color)';

                        const leftBtn = Array.from(document.querySelectorAll('#match-left-column .choice-btn')).find(b => b.classList.contains('active'));
                        leftBtn.classList.remove('active');
                        leftBtn.classList.add('matched');
                        leftBtn.style.opacity = '0.5';
                        btn.classList.add('matched');
                        btn.style.opacity = '0.5';

                        leftSelected = null;
                        pairsFound++;
                        speak(item.id, lang);

                        if (pairsFound === totalPairs) {
                            feedback.textContent = "🎉 Match Complete! 🎉";
                            setTimeout(startMatch, 2000);
                        }
                    } else {
                        feedback.textContent = t('incorrect');
                        feedback.style.color = 'var(--accent-color)';
                    }
                };
                rightCol.appendChild(btn);
            });

            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
        };

        startBtn?.addEventListener('click', startMatch);
    };

    initPerfectMatch();
});
