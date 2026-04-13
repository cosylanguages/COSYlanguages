const lastLetterWordCard = (item) => {
  return `
    <div class="ll-word-card" style="
      background:#e8f0e9;border-radius:10px;padding:10px 14px;
      display:flex;align-items:center;gap:10px;margin:6px 0;
      font-family:'Nunito',sans-serif;
    ">
      <span style="font-size:1.4rem">${item.emoji || '📝'}</span>
      <div>
        <div style="font-weight:800;font-size:.95rem;color:#2e4a33">${item.word}</div>
        <div style="font-size:.78rem;color:#6b8f71;line-height:1.4">${item.definitions?.[0]?.text || ''}</div>
      </div>
      <button onclick="window.gameUtils.gameSpeak('${item.word.replace(/'/g, "\\'")}', document.getElementById('last-letter-lang').value)"
        style="margin-left:auto;background:none;border:none;font-size:1.1rem;cursor:pointer">🔊</button>
    </div>
  `;
};

const LastLetterGame = {
  pool: [], usedWords: new Set(), requiredLetter: null,
  init(lang, level, theme) {
    this.pool = window.gameUtils.getVocabPool(lang, level, theme);
    this.usedWords = new Set();
    const starter = this.pool[Math.floor(Math.random() * this.pool.length)];
    if (starter) {
        this.usedWords.add(starter.word.toLowerCase());
        this.requiredLetter = starter.word[starter.word.length - 1].toLowerCase();
    }
    return starter;
  },
  validate(typed, requiredLetter, pool) {
    const word = typed.trim().toLowerCase();
    if (!word) return { ok: false, message: 'Please type a word!' };
    if (requiredLetter && word[0] !== requiredLetter.toLowerCase()) return { ok: false, message: `Must start with "${requiredLetter.toUpperCase()}"` };
    if (this.usedWords.has(word)) return { ok: false, message: 'That word has already been used!' };
    const match = pool.find(item => item.word.toLowerCase() === word);
    if (!match) return { ok: false, message: `"${typed}" is not in the word list for this level.` };
    this.usedWords.add(word); this.requiredLetter = word[word.length - 1];
    return { ok: true, item: match };
  },
  computerTurn(requiredLetter, pool) {
    const candidates = pool.filter(item => { const w = item.word.toLowerCase(); return w[0] === requiredLetter && !this.usedWords.has(w); });
    if (candidates.length === 0 || Math.random() < 0.2) return null;
    const picked = candidates[Math.floor(Math.random() * Math.min(candidates.length, 5))];
    this.usedWords.add(picked.word.toLowerCase()); this.requiredLetter = picked.word[picked.word.length - 1];
    return picked;
  }
};
window.LastLetterGame = LastLetterGame;
window.lastLetterWordCard = lastLetterWordCard;

(function() {
    const { getLang, t, showGameMessage, playGameSound, populateThemes } = window.gameUtils;

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
        input: document.getElementById('last-letter-input'),
        feedback: document.getElementById('last-letter-feedback'),
        targetLetterDisplay: document.getElementById('target-letter'),

        // Buttons
        openBtn: document.getElementById('open-last-letter-btn'),
        closeBtn: document.getElementById('close-last-letter-btn'),
        startBtn: document.getElementById('start-last-letter-game-btn'),
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
            state.isSolo = elements.soloCheck ? elements.soloCheck.checked : true;

            this.reset();

            // Improvements: init LastLetterGame helper
            if (window.LastLetterGame) window.LastLetterGame.init(state.lang, state.level, state.theme);

            // Prepare vocabulary
            state.filteredVocab = window.gameUtils.getVocabPool ? window.gameUtils.getVocabPool(state.lang, state.level, state.theme) : [];

            elements.setup.style.display = 'none';
            elements.gameplay.style.display = 'block';
            // Wait for display change before focusing
            setTimeout(() => elements.input.focus(), 50);
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
        const div = document.createElement('div');
        div.style.marginBottom = '0.5rem';
        div.style.padding = '0.4rem 0.8rem';
        div.style.borderRadius = '10px';
        div.style.display = 'inline-block';
        div.style.marginRight = '0.5rem';
        div.style.fontSize = '0.9rem';
        div.style.fontWeight = '700';

        if (turn === 'player') {
            div.style.background = 'var(--sage)';
            div.style.color = 'white';
        } else {
            div.style.background = 'var(--honey)';
            div.style.color = 'white';
        }

        const vocabItem = state.filteredVocab.find(v => normalize(v.word) === normalize(word));
        const displayWord = vocabItem ? `${vocabItem.emoji || ''} ${word}` : word;

        div.textContent = displayWord;
        elements.history.appendChild(div);

        // Ensure the history box is visible and scrolls
        elements.history.style.display = 'block';
        elements.history.scrollTop = elements.history.scrollHeight;
    }

    // Game Actions
    game.submitWord = function() {
        const inputWord = normalize(elements.input.value);
        elements.feedback.textContent = '';

        if (!inputWord) return;

        // Improvements: use LastLetterGame.validate
        if (window.LastLetterGame) {
            const result = window.LastLetterGame.validate(inputWord, state.targetLetter, state.filteredVocab);
            if (result.ok) {
                // Valid word — show the word card with definition
                document.getElementById('ll-word-display').innerHTML = lastLetterWordCard(result.item);
                window.gameUtils.gameSpeak(result.item.word, state.lang);

                this.processWord(result.item.word, state.turn);
            } else {
                elements.feedback.textContent = result.message;
                playGameSound('error');
            }
            return;
        }

        // Fallback to legacy check if helper missing
        if (state.targetLetter && inputWord.charAt(0) !== state.targetLetter) {
            const msg = t('last_letter_wrong_letter') + state.targetLetter.toUpperCase();
            elements.feedback.textContent = msg;
            playGameSound('error');
            return;
        }
        if (state.usedWords.has(inputWord)) {
            const msg = t('last_letter_used');
            elements.feedback.textContent = msg;
            playGameSound('error');
            return;
        }
        this.processWord(inputWord, state.turn);
    };

    game.processWord = function(word, turn) {
        state.usedWords.add(normalize(word));
        state.currentWord = word;
        state.targetLetter = getValidNextLetter(normalize(word));

        addWordToHistory(word, turn);
        elements.input.value = '';
        elements.targetLetterDisplay.textContent = state.targetLetter.toUpperCase();
        playGameSound('success');

        if (state.isSolo && turn === 'player') {
            state.turn = 'computer';
            setTimeout(() => this.computerTurn(state.targetLetter), 1500);
        } else {
            state.turn = turn === 'player' ? 'computer' : 'player';
        }
    };

    game.computerTurn = function(nextLetter) {
        if (window.LastLetterGame) {
            const compWord = window.LastLetterGame.computerTurn(nextLetter, state.filteredVocab);
            if (compWord) {
                document.getElementById('ll-word-display').innerHTML = lastLetterWordCard(compWord);
                window.gameUtils.gameSpeak(compWord.word, state.lang);
                this.processWord(compWord.word, 'computer');
            } else {
                showGameMessage(elements.gameplay, 'The computer couldn\'t find a word — you win! 🏆');
                playGameSound('success');
            }
            return;
        }

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

        const pickedItem = potentialWords[Math.floor(Math.random() * potentialWords.length)];
        this.processWord(pickedItem.word, 'computer');
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
    if (elements.openBtn) elements.openBtn.onclick = () => game.open();
    if (elements.closeBtn) elements.closeBtn.onclick = () => game.close();
    if (elements.startBtn) elements.startBtn.onclick = () => game.start();
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
