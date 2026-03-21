(function() {
    const { getLang, t, setBySelector, showGameMessage, showGameConfirm, playGameSound, populateThemes, isThemeMatch } = window.gameUtils;

    const state = {
        lang: 'en',
        level: 'all',
        theme: 'all',
        isSolo: true,
        usedWords: new Set(),
        currentWord: '',
        targetLetter: '',
        turn: 'player', // 'player' or 'computer'
        filteredVocab: []
    };

    const elements = {
        modal: document.getElementById('last-letter-modal'),
        setup: document.getElementById('last-letter-setup'),
        gameplay: document.getElementById('last-letter-gameplay'),
        history: document.getElementById('last-letter-history'),
        targetLetterDisplay: document.getElementById('target-letter'),
        input: document.getElementById('last-letter-input'),
        feedback: document.getElementById('last-letter-feedback'),

        // Buttons
        openBtn: document.getElementById('open-last-letter-btn'),
        closeBtn: document.getElementById('close-last-letter-btn'),
        startBtn: document.getElementById('start-last-letter-btn'),
        submitBtn: document.getElementById('submit-last-letter-btn'),
        hintBtn: document.getElementById('hint-last-letter-btn'),

        // Inputs
        langSelect: document.getElementById('last-letter-lang'),
        levelSelect: document.getElementById('last-letter-level'),
        themeSelect: document.getElementById('last-letter-theme'),
        soloCheck: document.getElementById('last-letter-solo-mode')
    };

    const populateThemesLocal = () => {
        if (!elements.themeSelect || !elements.levelSelect || !elements.langSelect) return;
        populateThemes(elements.themeSelect, elements.levelSelect, elements.langSelect.value);
    };

    const game = {
        open() {
            elements.modal.style.display = 'flex';
            elements.setup.style.display = 'block';
            elements.gameplay.style.display = 'none';

            // Sync UI with current global language if any
            const currentLang = getLang();
            if (currentLang) elements.langSelect.value = currentLang;
            populateThemesLocal();
        },

        close() {
            elements.modal.style.display = 'none';
            this.reset();
        },

        reset() {
            state.usedWords.clear();
            state.currentWord = '';
            state.targetLetter = '';
            state.turn = 'player';
            elements.history.innerHTML = '';
            elements.input.value = '';
            elements.feedback.textContent = '';
            elements.targetLetterDisplay.textContent = '?';
        },

        start() {
            state.lang = elements.langSelect.value;
            state.level = elements.levelSelect.value;
            state.theme = elements.themeSelect.value;
            state.isSolo = elements.soloCheck.checked;

            this.reset();

            // Prepare vocabulary
            const allVocab = window.vocabularyData[state.lang] || [];
            state.filteredVocab = allVocab.filter(item => {
                const levelMatch = state.level === 'all' || item.level === state.level;
                return levelMatch && isThemeMatch(item.theme, state.theme);
            });

            elements.setup.style.display = 'none';
            elements.gameplay.style.display = 'block';
            elements.input.focus();
        }
    };

    function normalize(word) {
        return word.trim().toLowerCase();
    }

    function getValidNextLetter(word) {
        if (!word) return '';

        // We check against ALL vocabulary of the language to see if a letter is "startable"
        const allVocab = window.vocabularyData[state.lang] || [];
        const validStarts = new Set(allVocab.map(v => normalize(v.word).charAt(0)));

        for (let i = word.length - 1; i >= 0; i--) {
            const char = word.charAt(i);
            if (validStarts.has(char)) {
                return char;
            }
        }
        // Fallback to last char if none found (unlikely)
        return word.charAt(word.length - 1);
    }

    function addWordToHistory(word, turn) {
        const span = document.createElement('div');
        span.style.marginBottom = '0.5rem';
        span.style.padding = '0.4rem 0.8rem';
        span.style.borderRadius = '10px';
        span.style.display = 'inline-block';
        span.style.marginRight = '0.5rem';

        if (turn === 'player') {
            span.style.background = 'var(--primary-color)';
            span.style.color = 'white';
        } else {
            span.style.background = 'var(--secondary-color)';
            span.style.color = 'white';
        }

        const vocabItem = state.filteredVocab.find(v => normalize(v.word) === normalize(word));
        const displayWord = vocabItem ? `${vocabItem.emoji || ''} ${word}` : word;

        span.textContent = displayWord;
        elements.history.appendChild(span);
        elements.history.scrollTop = elements.history.scrollHeight;
    }

    // Game Actions
    game.submitWord = function() {
        const inputWord = normalize(elements.input.value);
        elements.feedback.textContent = '';

        if (!inputWord) return;

        // Validation: Starts with target letter
        if (state.targetLetter && inputWord.charAt(0) !== state.targetLetter) {
            const msg = t('last_letter_wrong_letter') + state.targetLetter.toUpperCase();
            elements.feedback.textContent = msg;
            playGameSound('error');
            return;
        }

        // Validation: Already used
        if (state.usedWords.has(inputWord)) {
            const msg = t('last_letter_used');
            elements.feedback.textContent = msg;
            playGameSound('error');
            return;
        }

        // Accept word
        // In group mode, turn cycles between players, but for color coding we can alternate
        this.processWord(inputWord, state.turn);
    };

    game.processWord = function(word, turn) {
        state.usedWords.add(word);
        state.currentWord = word;
        state.targetLetter = getValidNextLetter(word);

        addWordToHistory(word, turn);
        elements.input.value = '';
        elements.targetLetterDisplay.textContent = state.targetLetter.toUpperCase();
        playGameSound('success');

        if (state.isSolo && turn === 'player') {
            state.turn = 'computer';
            setTimeout(() => this.computerTurn(), 1000);
        } else {
            state.turn = turn === 'player' ? 'computer' : 'player'; // In group mode, just toggle
        }
    };

    game.computerTurn = function() {
        const potentialWords = state.filteredVocab.filter(v => {
            const word = normalize(v.word);
            return word.charAt(0) === state.targetLetter && !state.usedWords.has(word);
        });

        if (potentialWords.length === 0) {
            const msg = t('last_letter_no_words');
            showGameMessage(elements.gameplay, msg);
            playGameSound('error');
            return;
        }

        // Pick a random word
        const pickedItem = potentialWords[Math.floor(Math.random() * potentialWords.length)];
        const pickedWord = normalize(pickedItem.word);

        this.processWord(pickedWord, 'computer');
    };

    game.getHint = function() {
        const potentialWords = state.filteredVocab.filter(v => {
            const word = normalize(v.word);
            return (state.targetLetter === '' || word.charAt(0) === state.targetLetter) && !state.usedWords.has(word);
        });

        if (potentialWords.length > 0) {
            const hintItem = potentialWords[Math.floor(Math.random() * potentialWords.length)];
            elements.input.value = normalize(hintItem.word);
            elements.input.focus();
        } else {
            const msg = t('last_letter_no_words');
            elements.feedback.textContent = msg;
        }
    };

    // Event Listeners
    elements.openBtn.onclick = () => game.open();
    elements.closeBtn.onclick = () => game.close();
    elements.startBtn.onclick = () => game.start();
    elements.levelSelect.onchange = () => populateThemesLocal();
    elements.langSelect.onchange = () => populateThemesLocal();
    elements.submitBtn.onclick = () => game.submitWord();
    elements.hintBtn.onclick = () => game.getHint();

    // Key press for input
    elements.input.onkeypress = (e) => {
        if (e.key === 'Enter') elements.submitBtn.click();
    };

    window.lastLetterGame = game;
})();
