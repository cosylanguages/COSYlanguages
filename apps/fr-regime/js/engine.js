/**
 * COSYlanguages Standalone App — Régime prépositionnel français (fr-regime)
 * Provides offline search across French Verbs, Noms & Adjectifs with prepositional rules,
 * word-type switching, cross-reference chips & practice game mode.
 */

class FrenchRegimeEngine {
    constructor() {
        this.datasets = {
            verbs: {},
            nouns: {},
            adjectives: {}
        };
        this.currentWordType = 'verbs';
        this.activeFilter = 'all';
        this.filteredKeys = [];
        this.currentIndex = -1;
        this.isGameActive = false;
        this.gameScore = 0;
        this.gameStreak = 0;
        this.currentQuestion = null;
        this.init();
    }

    async init() {
        try {
            const [verbsRes, nounsRes, adjRes] = await Promise.all([
                fetch('data/verbs.json'),
                fetch('data/nouns.json'),
                fetch('data/adjectives.json')
            ]);

            this.datasets.verbs = await verbsRes.json();
            this.datasets.nouns = await nounsRes.json();
            this.datasets.adjectives = await adjRes.json();

            this.renderFilterPills();
            this.updateFilteredKeys();
            this.bindEvents();
        } catch (err) {
            console.error("Failed to load French regime datasets:", err);
        }
    }

    get activeDb() {
        return this.datasets[this.currentWordType] || {};
    }

    get activeKeys() {
        return Object.keys(this.activeDb);
    }

    setWordType(type) {
        if (!this.datasets[type]) return;
        this.currentWordType = type;
        this.activeFilter = 'all';

        // Update active tab styling
        ['verbs', 'nouns', 'adjectives'].forEach(t => {
            const tab = document.getElementById(`tab-${t}`);
            if (tab) {
                if (t === type) tab.classList.add('active');
                else tab.classList.remove('active');
            }
        });

        this.renderFilterPills();
        this.updateFilteredKeys();

        // Re-run search if input has query
        const input = document.getElementById('verb-search-input');
        if (input && input.value.trim()) {
            this.handleSearchInput(input.value);
        } else {
            this.resetDisplay();
        }
    }

    renderFilterPills() {
        const container = document.getElementById('filter-pills-container');
        if (!container) return;

        let pills = [];
        if (this.currentWordType === 'verbs') {
            pills = [
                { id: 'all', label: 'Tous les verbes' },
                { id: 'a', label: 'Régime « à »' },
                { id: 'de', label: 'Régime « de »' },
                { id: 'direct', label: 'Direct (sans prép)' },
                { id: 'pronominal', label: 'Pronominaux 🪞' },
                { id: 'other', label: 'Autres (sur, en...)' }
            ];
        } else if (this.currentWordType === 'nouns') {
            pills = [
                { id: 'all', label: 'Tous les noms' },
                { id: 'de', label: 'Régime « de »' },
                { id: 'a', label: 'Régime « à »' },
                { id: 'pour', label: 'Régime « pour / envers »' },
                { id: 'other', label: 'Autres (en, sur, avec...)' }
            ];
        } else {
            // adjectives
            pills = [
                { id: 'all', label: 'Tous les adjectifs' },
                { id: 'de', label: 'Régime « de »' },
                { id: 'a', label: 'Régime « à »' },
                { id: 'avec', label: 'Régime « avec / envers »' },
                { id: 'other', label: 'Autres (pour, par, sur...)' }
            ];
        }

        container.innerHTML = pills.map(p => `
            <button class="filter-pill ${p.id === this.activeFilter ? 'active' : ''}" id="filter-${p.id}" onclick="appEngine.setFilter('${p.id}')">
                ${p.label}
            </button>
        `).join('');
    }

    setFilter(filterType) {
        this.activeFilter = filterType;

        // Update pill styling
        const container = document.getElementById('filter-pills-container');
        if (container) {
            container.querySelectorAll('.filter-pill').forEach(btn => {
                if (btn.id === `filter-${filterType}`) btn.classList.add('active');
                else btn.classList.remove('active');
            });
        }

        this.updateFilteredKeys();

        const input = document.getElementById('verb-search-input');
        if (input && input.value.trim()) {
            this.handleSearchInput(input.value);
        }
    }

    updateFilteredKeys() {
        const db = this.activeDb;
        const keys = this.activeKeys;

        if (this.activeFilter === 'a') {
            this.filteredKeys = keys.filter(k => (db[k].prepositions || []).some(p => p === 'à' || p.includes('à')));
        } else if (this.activeFilter === 'de') {
            this.filteredKeys = keys.filter(k => (db[k].prepositions || []).some(p => p === 'de' || p.includes('de')));
        } else if (this.activeFilter === 'direct') {
            this.filteredKeys = keys.filter(k => (db[k].prepositions || []).includes('none'));
        } else if (this.activeFilter === 'pronominal') {
            this.filteredKeys = keys.filter(k => db[k].pronominal === true);
        } else if (this.activeFilter === 'pour') {
            this.filteredKeys = keys.filter(k => (db[k].prepositions || []).some(p => p === 'pour' || p === 'envers'));
        } else if (this.activeFilter === 'avec') {
            this.filteredKeys = keys.filter(k => (db[k].prepositions || []).some(p => p === 'avec' || p === 'envers'));
        } else if (this.activeFilter === 'other') {
            this.filteredKeys = keys.filter(k => (db[k].prepositions || []).some(p => p !== 'à' && p !== 'de' && p !== 'none'));
        } else {
            this.filteredKeys = [...keys];
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
                const text = document.getElementById('verb-title').textContent;
                if (text && 'speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(text);
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

        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.activeKeys;
        const matches = pool.filter(key => key.toLowerCase().includes(cleanQuery));

        if (matches.length > 0 && suggestionsBox) {
            suggestionsBox.innerHTML = matches.slice(0, 6).map(key => {
                const data = this.activeDb[key];
                const preps = (data.prepositions || []).join(' / ');
                const prepLabel = preps === 'none' ? 'Direct' : `Prép : ${preps}`;
                return `
                <div class="suggestion-item" onclick="appEngine.selectSuggestion('${key.replace(/'/g, "\\'")}')">
                    <span><strong>${key}</strong></span>
                    <span style="color: var(--sage-primary); font-size: 0.85rem; font-weight: 600;">${prepLabel}</span>
                </div>
            `;
            }).join('');
            suggestionsBox.style.display = 'block';
        } else if (suggestionsBox) {
            this.hideSuggestions();
        }
    }

    selectSuggestion(key) {
        const input = document.getElementById('verb-search-input');
        if (input) input.value = key;
        this.hideSuggestions();
        this.searchVerb(key);
    }

    hideSuggestions() {
        const suggestionsBox = document.getElementById('search-suggestions');
        if (suggestionsBox) suggestionsBox.style.display = 'none';
    }

    searchVerb(query) {
        this.searchEntry(query, this.currentWordType);
    }

    searchEntry(query, targetType = this.currentWordType) {
        if (!query) return;
        if (this.isGameActive) this.toggleGameMode();

        if (targetType !== this.currentWordType) {
            this.setWordType(targetType);
        }

        const cleanQuery = query.trim().toLowerCase();
        const db = this.activeDb;
        const keys = this.activeKeys;

        let matchedKey = keys.find(k => k.toLowerCase() === cleanQuery);
        if (!matchedKey) {
            matchedKey = keys.find(k => k.toLowerCase().startsWith(cleanQuery));
        }

        if (matchedKey) {
            const pool = this.filteredKeys.length > 0 ? this.filteredKeys : keys;
            this.currentIndex = pool.indexOf(matchedKey);
            this.renderVerbResult(matchedKey, db[matchedKey]);
        } else {
            // Dynamic fallback
            this.currentIndex = -1;
            const fallbackData = {
                word_type: this.currentWordType === 'nouns' ? 'noun' : (this.currentWordType === 'adjectives' ? 'adjective' : 'verb'),
                prepositions: ["none"],
                pronominal: cleanQuery.startsWith("se ") || cleanQuery.startsWith("s'"),
                pattern: `${cleanQuery} [complément]`,
                level: "A2",
                definition: `Entrée liée à « ${cleanQuery} ».`,
                grammar_rule: `Mot français « ${cleanQuery} ». Vérifiez l'accord et le régime prépositionnel.`,
                related_forms: "",
                examples: [
                    `Il convient de bien employer ${cleanQuery}.`,
                    `Consultez la grammaire pour utiliser ${cleanQuery}.`
                ],
                common_mistake: `⚠️ Vérifiez la préposition appropriée pour « ${cleanQuery} ».`,
                synonyms: [],
                antonyms: []
            };
            this.renderVerbResult(cleanQuery, fallbackData);
        }
    }

    renderVerbResult(key, data) {
        document.getElementById('empty-state').style.display = 'none';
        const resultCard = document.getElementById('verb-result-container');
        resultCard.style.display = 'block';

        document.getElementById('verb-title').textContent = key;

        // Word type badge
        const typeBadge = document.getElementById('word-type-badge');
        const typeLabel = this.currentWordType === 'verbs' ? 'Verbe 💬' : (this.currentWordType === 'nouns' ? 'Nom 📦' : 'Adjectif 🎨');
        typeBadge.textContent = typeLabel;

        // Pronominal Badge (Verbs only)
        const proBadge = document.getElementById('pronominal-badge');
        if (this.currentWordType === 'verbs' && data.pronominal) {
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
        document.getElementById('verb-pattern-text').textContent = data.pattern || key;

        // Cross-reference & Related Forms
        const crossRefBox = document.getElementById('cross-ref-container');
        const crossRefContent = document.getElementById('cross-ref-content');

        const rawText = data.related_forms || data.noun_parallel || '';
        if (rawText) {
            const chipsHtml = this.generateCrossReferenceChips(rawText);
            crossRefContent.innerHTML = `<p style="margin-bottom: 0.5rem; font-weight:600;">${rawText}</p>${chipsHtml}`;
            crossRefBox.style.display = 'block';
        } else {
            crossRefBox.style.display = 'none';
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

    generateCrossReferenceChips(text) {
        let chips = [];

        // Check exact keys across all datasets
        for (const type of ['verbs', 'nouns', 'adjectives']) {
            const db = this.datasets[type];
            for (const key of Object.keys(db)) {
                if (text.includes(`« ${key} »`) || text.includes(`'${key}'`) || text.includes(`"${key}"`) || text.toLowerCase().includes(key.toLowerCase())) {
                    if (key.length > 2) {
                        const icon = type === 'verbs' ? '💬' : (type === 'nouns' ? '📦' : '🎨');
                        const label = `${icon} ${key}`;
                        chips.push(`
                            <button class="ref-chip" onclick="appEngine.navigateToCrossReference('${type}', '${key.replace(/'/g, "\\'")}')">
                                🔗 ${label}
                            </button>
                        `);
                    }
                }
            }
        }

        // Deduplicate chips
        const uniqueChips = [...new Set(chips)];
        return uniqueChips.length > 0 ? `<div style="display:flex; flex-wrap:wrap; gap:0.4rem;">${uniqueChips.join('')}</div>` : '';
    }

    navigateToCrossReference(targetType, key) {
        this.setWordType(targetType);
        this.searchEntry(key, targetType);
    }

    /* Navigation séquentielle */
    navigateNext() {
        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.activeKeys;
        if (pool.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % pool.length;
        const key = pool[this.currentIndex];
        this.searchEntry(key, this.currentWordType);
    }

    navigatePrevious() {
        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.activeKeys;
        if (pool.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + pool.length) % pool.length;
        const key = pool[this.currentIndex];
        this.searchEntry(key, this.currentWordType);
    }

    navigateRandom() {
        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.activeKeys;
        if (pool.length === 0) return;
        let nextIdx = Math.floor(Math.random() * pool.length);
        if (nextIdx === this.currentIndex && pool.length > 1) {
            nextIdx = (nextIdx + 1) % pool.length;
        }
        this.currentIndex = nextIdx;
        const key = pool[this.currentIndex];
        this.searchEntry(key, this.currentWordType);
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
        const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.activeKeys;
        if (pool.length === 0) return;

        const randomKey = pool[Math.floor(Math.random() * pool.length)];
        const data = this.activeDb[randomKey];

        const primaryPrep = data.prepositions?.[0] || 'none';

        // Pool of prepositions
        const prepPool = ['à', 'de', 'sur', 'en', 'pour', 'avec', 'par', 'none'];

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
            key: randomKey,
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

        const exampleSentence = data.examples?.[0] || `Mot : ${randomKey}`;
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
            feedback.innerHTML = `✅ Excellent ! La préposition ou construction exacte pour <strong>${this.currentQuestion.key}</strong> est <strong>${expected === 'none' ? 'Direct (sans préposition)' : expected}</strong> (+10 pts).`;
        } else {
            this.gameStreak = 0;
            feedback.className = 'feedback-card wrong';
            feedback.innerHTML = `❌ Incorrect ! <strong>${this.currentQuestion.key}</strong> demande : <strong>${expected === 'none' ? 'Direct (sans préposition)' : expected}</strong>.<br><small style="margin-top:4px; display:inline-block;">Règle : ${this.currentQuestion.data.grammar_rule}</small>`;
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
