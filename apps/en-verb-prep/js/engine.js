/**
 * COSYlanguages Standalone App — English Verb Prepositions & Transitivity Engine (en-verb-prep)
 * Provides offline search, transitivity rules, dependent prepositions, sequential navigation & practice game mode.
 */

class EnglishVerbPrepEngine {
    constructor() {
        this.verbDb = {};
        this.verbKeys = [];
        this.currentIndex = -1;
        this.isGameActive = false;
        this.gameScore = 0;
        this.gameStreak = 0;
        this.currentQuestion = null;
        this.init();
    }

    async init() {
        try {
            const response = await fetch('data/verbs.json');
            this.verbDb = await response.json();
            this.verbKeys = Object.keys(this.verbDb);
            this.bindEvents();
        } catch (err) {
            console.error("Failed to load verbs database:", err);
        }
    }

    bindEvents() {
        const input = document.getElementById('verb-search-input');
        const clearBtn = document.getElementById('clear-search-btn');
        const ttsBtn = document.getElementById('speak-verb-btn');

        if (input) {
            input.addEventListener('input', (e) => this.handleSearchInput(e.target.value));
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.searchVerb(input.value);
                    this.hideSuggestions();
                }
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (input) input.value = '';
                clearBtn.style.display = 'none';
                this.resetDisplay();
            });
        }

        if (ttsBtn) {
            ttsBtn.addEventListener('click', () => {
                const verbText = document.getElementById('verb-title').textContent;
                if (verbText && 'speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(verbText);
                    utterance.lang = 'en-US';
                    window.speechSynthesis.speak(utterance);
                }
            });
        }
    }

    handleSearchInput(query) {
        const clearBtn = document.getElementById('clear-search-btn');
        const suggestionsBox = document.getElementById('search-suggestions');
        const cleanQuery = query.trim().toLowerCase();

        if (clearBtn) {
            clearBtn.style.display = cleanQuery ? 'block' : 'none';
        }

        if (!cleanQuery) {
            this.hideSuggestions();
            return;
        }

        const matches = this.verbKeys.filter(key => key.toLowerCase().includes(cleanQuery));

        if (matches.length > 0 && suggestionsBox) {
            suggestionsBox.innerHTML = matches.slice(0, 6).map(key => {
                const data = this.verbDb[key];
                return `
                <div class="suggestion-item" onclick="appEngine.selectSuggestion('${key}')">
                    <span><strong>${key}</strong></span>
                    <span style="color: var(--ink-muted); font-size: 0.85rem;">${data.transitivity} (${data.transitivity_code})</span>
                </div>
            `;
            }).join('');
            suggestionsBox.style.display = 'block';
        } else if (suggestionsBox) {
            this.hideSuggestions();
        }
    }

    selectSuggestion(verbKey) {
        const input = document.getElementById('verb-search-input');
        if (input) input.value = verbKey;
        this.hideSuggestions();
        this.searchVerb(verbKey);
    }

    hideSuggestions() {
        const suggestionsBox = document.getElementById('search-suggestions');
        if (suggestionsBox) suggestionsBox.style.display = 'none';
    }

    searchVerb(query) {
        if (!query) return;
        if (this.isGameActive) this.toggleGameMode();

        const cleanQuery = query.trim().toLowerCase();
        let matchedKey = this.verbKeys.find(k => k.toLowerCase() === cleanQuery);

        if (!matchedKey) {
            // Partial match fallback
            matchedKey = this.verbKeys.find(k => k.toLowerCase().startsWith(cleanQuery));
        }

        if (matchedKey) {
            this.currentIndex = this.verbKeys.indexOf(matchedKey);
            this.renderVerbResult(matchedKey, this.verbDb[matchedKey]);
        } else {
            // Dynamic fallback generator
            this.currentIndex = -1;
            const fallbackData = {
                transitivity: "Transitive",
                transitivity_code: "VT",
                prepositions: ["none"],
                pattern: `${cleanQuery} [direct object]`,
                level: "A2",
                definition: `Action or state of '${cleanQuery}'.`,
                grammar_rule: `English verb '${cleanQuery}'. Ensure correct subject-verb agreement and object pattern.`,
                examples: [
                    `She always tries to ${cleanQuery} accurately.`,
                    `They decided to ${cleanQuery} the situation carefully.`
                ],
                common_mistake: `⚠️ Check whether '${cleanQuery}' requires a dependent preposition before the object.`,
                synonyms: [],
                antonyms: []
            };
            this.renderVerbResult(cleanQuery, fallbackData);
        }
    }

    renderVerbResult(verbKey, data) {
        document.getElementById('empty-state').style.display = 'none';
        const resultCard = document.getElementById('verb-result-container');
        resultCard.style.display = 'block';

        document.getElementById('verb-title').textContent = verbKey;

        // Transitivity Badge
        const transBadge = document.getElementById('transitivity-badge');
        transBadge.textContent = `${data.transitivity} (${data.transitivity_code})`;
        if (data.transitivity_code === 'VT') {
            transBadge.className = 'badge trans-vt';
        } else if (data.transitivity_code === 'VI') {
            transBadge.className = 'badge trans-vi';
        } else {
            transBadge.className = 'badge trans-both';
        }

        // Preposition Badge
        const prepBadge = document.getElementById('prep-badge');
        const prepList = (data.prepositions || []).join(' / ');
        prepBadge.textContent = prepList === 'none' ? 'No preposition (Direct Object)' : `Prep: ${prepList}`;

        // CEFR Level
        document.getElementById('verb-cefr-badge').textContent = `Level: ${data.level || 'A2'}`;

        // Lexical details
        document.getElementById('verb-definition').textContent = data.definition || 'Definition unavailable.';
        document.getElementById('verb-pattern-text').textContent = data.pattern || verbKey;
        document.getElementById('grammar-rule-text').textContent = data.grammar_rule || '';

        // Mistake box
        const mistakeBox = document.getElementById('mistake-container');
        const mistakeEl = document.getElementById('mistake-text');
        if (data.common_mistake) {
            mistakeEl.textContent = data.common_mistake;
            mistakeBox.style.display = 'block';
        } else {
            mistakeBox.style.display = 'none';
        }

        // Example sentences
        const examplesList = document.getElementById('examples-list');
        if (data.examples && data.examples.length > 0) {
            examplesList.innerHTML = data.examples.map(ex => `<li>${ex}</li>`).join('');
            document.getElementById('examples-container').style.display = 'block';
        } else {
            document.getElementById('examples-container').style.display = 'none';
        }

        // Synonyms & Antonyms
        const antonymsBox = document.getElementById('antonyms-pills');
        const items = [...(data.synonyms || []).map(s => `≈ ${s}`), ...(data.antonyms || []).map(a => `↔ ${a}`)];
        if (items.length > 0) {
            antonymsBox.innerHTML = items.map(item => `<span class="antonym-pill">${item}</span>`).join('');
            document.getElementById('antonyms-container').style.display = 'block';
        } else {
            document.getElementById('antonyms-container').style.display = 'none';
        }
    }

    /* Sequential Item Navigation */
    navigateNext() {
        if (this.verbKeys.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.verbKeys.length;
        const key = this.verbKeys[this.currentIndex];
        this.searchVerb(key);
    }

    navigatePrevious() {
        if (this.verbKeys.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + this.verbKeys.length) % this.verbKeys.length;
        const key = this.verbKeys[this.currentIndex];
        this.searchVerb(key);
    }

    navigateRandom() {
        if (this.verbKeys.length === 0) return;
        let nextIdx = Math.floor(Math.random() * this.verbKeys.length);
        if (nextIdx === this.currentIndex && this.verbKeys.length > 1) {
            nextIdx = (nextIdx + 1) % this.verbKeys.length;
        }
        this.currentIndex = nextIdx;
        const key = this.verbKeys[this.currentIndex];
        this.searchVerb(key);
    }

    resetDisplay() {
        document.getElementById('verb-result-container').style.display = 'none';
        document.getElementById('empty-state').style.display = 'block';
    }

    /* Interactive Practice Game Mode */
    toggleGameMode() {
        this.isGameActive = !this.isGameActive;
        const toggleBtn = document.getElementById('toggle-game-btn');
        const gameContainer = document.getElementById('game-container');
        const searchContainer = document.getElementById('search-section-container');
        const resultContainer = document.getElementById('verb-result-container');
        const emptyState = document.getElementById('empty-state');

        if (this.isGameActive) {
            toggleBtn.textContent = '📖 Dictionary Mode';
            toggleBtn.style.backgroundColor = 'var(--sage-primary)';
            toggleBtn.style.color = '#ffffff';
            gameContainer.style.display = 'block';
            searchContainer.style.display = 'none';
            resultContainer.style.display = 'none';
            emptyState.style.display = 'none';
            this.nextGameQuestion();
        } else {
            toggleBtn.textContent = '🎮 Practice Mode';
            toggleBtn.style.backgroundColor = 'var(--cream-bg)';
            toggleBtn.style.color = 'var(--sage-dark)';
            gameContainer.style.display = 'none';
            searchContainer.style.display = 'block';
            this.resetDisplay();
        }
    }

    nextGameQuestion() {
        if (this.verbKeys.length === 0) return;

        const randomKey = this.verbKeys[Math.floor(Math.random() * this.verbKeys.length)];
        const data = this.verbDb[randomKey];

        const primaryPrep = data.prepositions?.[0] || 'none';
        const transCode = data.transitivity_code;

        // Pool of prepositions
        const prepPool = ['on', 'to', 'for', 'of', 'from', 'in', 'about', 'with', 'none'];

        // Build choices
        let choices = [primaryPrep];
        while (choices.length < 4) {
            const randomPrep = prepPool[Math.floor(Math.random() * prepPool.length)];
            if (!choices.includes(randomPrep)) {
                choices.push(randomPrep);
            }
        }
        // Shuffle choices
        choices.sort(() => Math.random() - 0.5);

        this.currentQuestion = {
            verb: randomKey,
            data: data,
            expected: primaryPrep,
            choices: choices
        };

        document.getElementById('game-verb-prompt').textContent = randomKey;
        document.getElementById('game-transitivity-badge').textContent = `${data.transitivity} (${transCode})`;

        const exampleSentence = data.examples?.[0] || `Verb: ${randomKey}`;
        let sentencePrompt = exampleSentence;
        if (primaryPrep !== 'none') {
            const prepRegex = new RegExp(`\\b${primaryPrep}\\b`, 'i');
            sentencePrompt = exampleSentence.replace(prepRegex, `<strong class="blank-spot">[ ? ]</strong>`);
        } else {
            sentencePrompt = exampleSentence;
        }

        document.getElementById('game-sentence-prompt').innerHTML = `Sentence: "${sentencePrompt}"`;

        const choiceGrid = document.getElementById('game-choice-options');
        choiceGrid.style.display = 'grid';
        choiceGrid.innerHTML = choices.map(choice => `
            <button class="choice-btn" onclick="appEngine.checkGameChoice('${choice}')">
                ${choice === 'none' ? 'No Preposition (Direct)' : choice}
            </button>
        `).join('');

        document.getElementById('game-feedback-box').style.display = 'none';
        document.getElementById('game-next-btn').style.display = 'none';
    }

    checkGameChoice(userChoice) {
        if (!this.currentQuestion) return;

        const feedback = document.getElementById('game-feedback-box');
        feedback.style.display = 'block';
        const expected = this.currentQuestion.expected;

        if (userChoice.toLowerCase() === expected.toLowerCase()) {
            this.gameScore += 10;
            this.gameStreak += 1;
            feedback.className = 'feedback-card correct';
            feedback.innerHTML = `✅ Excellent! Correct preposition for <strong>${this.currentQuestion.verb}</strong> is <strong>${expected === 'none' ? 'Direct Object (No Preposition)' : expected}</strong> (+10 pts).`;
        } else {
            this.gameStreak = 0;
            feedback.className = 'feedback-card wrong';
            feedback.innerHTML = `❌ Incorrect! <strong>${this.currentQuestion.verb}</strong> uses: <strong>${expected === 'none' ? 'Direct Object (No Preposition)' : expected}</strong>.<br><small style="margin-top:4px; display:inline-block;">Rule: ${this.currentQuestion.data.grammar_rule}</small>`;
        }

        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;

        document.getElementById('game-choice-options').style.display = 'none';
        document.getElementById('game-next-btn').style.display = 'block';
    }
}

let appEngine;
document.addEventListener('DOMContentLoaded', () => {
    appEngine = new EnglishVerbPrepEngine();
});
