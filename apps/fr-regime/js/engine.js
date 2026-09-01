/**
 * COSYlanguages Standalone App — Régime prépositionnel des verbes français (fr-regime)
 * Provides offline search, prepositional regime rules (à, de, sur, en, direct), pronominal verb usage, noun contrasts & practice game mode.
 */

class FrenchRegimeEngine {
    constructor() {
        this.verbDb = {};
        this.verbKeys = [];
        this.filteredKeys = [];
        this.activeFilter = 'all';
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
            this.updateFilteredKeys();
            this.bindEvents();
        } catch (err) {
            console.error("Failed to load French verbs database:", err);
        }
    }

    setFilter(filterType) {
        this.activeFilter = filterType;

        // Update active filter pill styling
        ['all', 'a', 'de', 'direct', 'pronominal', 'other'].forEach(f => {
            const btn = document.getElementById(`filter-${f}`);
            if (btn) {
                if (f === filterType) btn.classList.add('active');
                else btn.classList.remove('active');
            }
        });

        this.updateFilteredKeys();

        // Re-run search if input has value
        const input = document.getElementById('verb-search-input');
        if (input && input.value.trim()) {
            this.handleSearchInput(input.value);
        }
    }

    updateFilteredKeys() {
        if (this.activeFilter === 'a') {
            this.filteredKeys = this.verbKeys.filter(k => (this.verbDb[k].prepositions || []).some(p => p === 'à' || p.includes('à')));
        } else if (this.activeFilter === 'de') {
            this.filteredKeys = this.verbKeys.filter(k => (this.verbDb[k].prepositions || []).some(p => p === 'de' || p.includes('de')));
        } else if (this.activeFilter === 'direct') {
            this.filteredKeys = this.verbKeys.filter(k => (this.verbDb[k].prepositions || []).includes('none'));
        } else if (this.activeFilter === 'pronominal') {
            this.filteredKeys = this.verbKeys.filter(k => this.verbDb[k].pronominal === true);
        } else if (this.activeFilter === 'other') {
            this.filteredKeys = this.verbKeys.filter(k => (this.verbDb[k].prepositions || []).some(p => p !== 'à' && p !== 'de' && p !== 'none'));
        } else {
            this.filteredKeys = [...this.verbKeys];
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
                    utterance.lang = 'fr-FR';
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

        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.verbKeys;
        const matches = pool.filter(key => key.toLowerCase().includes(cleanQuery));

        if (matches.length > 0 && suggestionsBox) {
            suggestionsBox.innerHTML = matches.slice(0, 6).map(key => {
                const data = this.verbDb[key];
                const preps = (data.prepositions || []).join(' / ');
                const prepLabel = preps === 'none' ? 'Direct (sans prép)' : `Prép : ${preps}`;
                const proLabel = data.pronominal ? ' [Pronominal]' : '';
                return `
                <div class="suggestion-item" onclick="appEngine.selectSuggestion('${key.replace(/'/g, "\\'")}')">
                    <span><strong>${key}</strong>${proLabel}</span>
                    <span style="color: var(--sage-primary); font-size: 0.85rem; font-weight: 600;">${prepLabel}</span>
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
            const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.verbKeys;
            this.currentIndex = pool.indexOf(matchedKey);
            this.renderVerbResult(matchedKey, this.verbDb[matchedKey]);
        } else {
            // Fallback generator
            this.currentIndex = -1;
            const fallbackData = {
                prepositions: ["none"],
                pronominal: cleanQuery.startsWith("se ") || cleanQuery.startsWith("s'"),
                pattern: `${cleanQuery} [complément]`,
                level: "A2",
                definition: `Action ou état lié à « ${cleanQuery} ».`,
                grammar_rule: `Verbe français « ${cleanQuery} ». Vérifiez l'accord et le régime prépositionnel.`,
                noun_parallel: "",
                examples: [
                    `Il convient de bien employer le verbe ${cleanQuery}.`,
                    `Elle a décidé de ${cleanQuery} avec attention.`
                ],
                common_mistake: `⚠️ Vérifiez si « ${cleanQuery} » s'emploie directement ou avec une préposition (à, de...).`,
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

        // Pronominal Badge
        const proBadge = document.getElementById('pronominal-badge');
        if (data.pronominal) {
            proBadge.style.display = 'inline-block';
            proBadge.textContent = 'Pronominal 🪞';
        } else {
            proBadge.style.display = 'none';
        }

        // Preposition Badge
        const prepBadge = document.getElementById('prep-badge');
        const prepList = (data.prepositions || []).join(' / ');
        if (prepList === 'none') {
            prepBadge.textContent = 'Direct (sans préposition)';
            prepBadge.className = 'badge trans-vt';
        } else {
            prepBadge.textContent = `Préposition : ${prepList}`;
            prepBadge.className = 'badge prep-badge';
        }

        // CEFR Level
        document.getElementById('verb-cefr-badge').textContent = `Niveau : ${data.level || 'A1'}`;

        // Lexical details
        document.getElementById('verb-definition').textContent = data.definition || 'Définition non disponible.';
        document.getElementById('verb-pattern-text').textContent = data.pattern || verbKey;

        // Noun Parallel Contrast Box
        const nounParallelBox = document.getElementById('noun-parallel-container');
        const nounParallelText = document.getElementById('noun-parallel-text');
        if (data.noun_parallel) {
            nounParallelText.textContent = data.noun_parallel;
            nounParallelBox.style.display = 'block';
        } else {
            nounParallelBox.style.display = 'none';
        }

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

    /* Navigation séquentielle */
    navigateNext() {
        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.verbKeys;
        if (pool.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % pool.length;
        const key = pool[this.currentIndex];
        this.searchVerb(key);
    }

    navigatePrevious() {
        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.verbKeys;
        if (pool.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + pool.length) % pool.length;
        const key = pool[this.currentIndex];
        this.searchVerb(key);
    }

    navigateRandom() {
        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.verbKeys;
        if (pool.length === 0) return;
        let nextIdx = Math.floor(Math.random() * pool.length);
        if (nextIdx === this.currentIndex && pool.length > 1) {
            nextIdx = (nextIdx + 1) % pool.length;
        }
        this.currentIndex = nextIdx;
        const key = pool[this.currentIndex];
        this.searchVerb(key);
    }

    resetDisplay() {
        document.getElementById('verb-result-container').style.display = 'none';
        document.getElementById('empty-state').style.display = 'block';
    }

    /* Mode Entraînement / Quiz */
    toggleGameMode() {
        this.isGameActive = !this.isGameActive;
        const toggleBtn = document.getElementById('toggle-game-btn');
        const gameContainer = document.getElementById('game-container');
        const searchContainer = document.getElementById('search-section-container');
        const resultContainer = document.getElementById('verb-result-container');
        const emptyState = document.getElementById('empty-state');

        if (this.isGameActive) {
            toggleBtn.textContent = '📖 Mode Dictionnaire';
            toggleBtn.style.backgroundColor = 'var(--sage-primary)';
            toggleBtn.style.color = '#ffffff';
            gameContainer.style.display = 'block';
            searchContainer.style.display = 'none';
            resultContainer.style.display = 'none';
            emptyState.style.display = 'none';
            this.nextGameQuestion();
        } else {
            toggleBtn.textContent = '🎮 Mode Entraînement';
            toggleBtn.style.backgroundColor = 'var(--cream-bg)';
            toggleBtn.style.color = 'var(--sage-dark)';
            gameContainer.style.display = 'none';
            searchContainer.style.display = 'block';
            this.resetDisplay();
        }
    }

    nextGameQuestion() {
        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.verbKeys;
        if (pool.length === 0) return;

        const randomKey = pool[Math.floor(Math.random() * pool.length)];
        const data = this.verbDb[randomKey];

        const primaryPrep = data.prepositions?.[0] || 'none';

        // Pool of prepositions
        const prepPool = ['à', 'de', 'sur', 'en', 'pour', 'avec', 'none'];

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

        const typeBadge = document.getElementById('game-type-badge');
        if (primaryPrep === 'none') {
            typeBadge.className = 'badge trans-vt';
            typeBadge.textContent = 'Direct (sans préposition)';
        } else {
            typeBadge.className = 'badge prep-badge';
            typeBadge.textContent = `Préposition : ${primaryPrep}`;
        }

        document.getElementById('game-cefr-badge').textContent = `Niveau : ${data.level || 'A1'}`;

        const exampleSentence = data.examples?.[0] || `Verbe : ${randomKey}`;
        let sentencePrompt = exampleSentence;
        if (primaryPrep !== 'none') {
            const prepRegex = new RegExp(`\\b${primaryPrep}\\b`, 'i');
            sentencePrompt = exampleSentence.replace(prepRegex, `<strong class="blank-spot">[ ? ]</strong>`);
        }

        document.getElementById('game-sentence-prompt').innerHTML = `Exemple : "${sentencePrompt}"`;

        const choiceGrid = document.getElementById('game-choice-options');
        choiceGrid.style.display = 'grid';
        choiceGrid.innerHTML = choices.map(choice => `
            <button class="choice-btn" onclick="appEngine.checkGameChoice('${choice}')">
                ${choice === 'none' ? 'Direct (sans prép)' : choice}
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
            feedback.innerHTML = `✅ Excellent ! La préposition ou construction exacte pour <strong>${this.currentQuestion.verb}</strong> est <strong>${expected === 'none' ? 'Direct (sans préposition)' : expected}</strong> (+10 pts).`;
        } else {
            this.gameStreak = 0;
            feedback.className = 'feedback-card wrong';
            feedback.innerHTML = `❌ Incorrect ! <strong>${this.currentQuestion.verb}</strong> demande : <strong>${expected === 'none' ? 'Direct (sans préposition)' : expected}</strong>.<br><small style="margin-top:4px; display:inline-block;">Règle : ${this.currentQuestion.data.grammar_rule}</small>`;
        }

        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;

        document.getElementById('game-choice-options').style.display = 'none';
        document.getElementById('game-next-btn').style.display = 'block';
    }
}

let appEngine;
document.addEventListener('DOMContentLoaded', () => {
    appEngine = new FrenchRegimeEngine();
});
