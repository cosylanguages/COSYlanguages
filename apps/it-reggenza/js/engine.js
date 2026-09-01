/**
 * COSYlanguages Standalone App — Reggenza verbale italiana (it-reggenza)
 * Provides offline search, Italian prepositional regime rules (a, di, su, in, con, da, direct),
 * pronominal verb patterns, articulation flags, and verb vs. noun preposition contrasts.
 */

class ItalianReggenzaEngine {
    constructor() {
        this.verbDb = {};
        this.verbKeys = [];
        this.filteredKeys = [];
        this.activeFilter = 'all';
        this.currentIndex = -1;
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
            console.error("Failed to load Italian verbs database:", err);
        }
    }

    setFilter(filterType) {
        this.activeFilter = filterType;

        // Update active filter pill styling
        ['all', 'a', 'di', 'direct', 'pronominal', 'other'].forEach(f => {
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
            this.filteredKeys = this.verbKeys.filter(k => (this.verbDb[k].prepositions || []).some(p => p === 'a' || p.includes('a')));
        } else if (this.activeFilter === 'di') {
            this.filteredKeys = this.verbKeys.filter(k => (this.verbDb[k].prepositions || []).some(p => p === 'di' || p.includes('di')));
        } else if (this.activeFilter === 'direct') {
            this.filteredKeys = this.verbKeys.filter(k => (this.verbDb[k].prepositions || []).includes('none'));
        } else if (this.activeFilter === 'pronominal') {
            this.filteredKeys = this.verbKeys.filter(k => this.verbDb[k].pronominal === true);
        } else if (this.activeFilter === 'other') {
            this.filteredKeys = this.verbKeys.filter(k => (this.verbDb[k].prepositions || []).some(p => p !== 'a' && p !== 'di' && p !== 'none'));
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
                    utterance.lang = 'it-IT';
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
                const prepLabel = preps === 'none' ? 'Diretto (senza prep)' : `Prép: ${preps}`;
                const proLabel = data.pronominal ? ' [Pronominale]' : '';
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

        const cleanQuery = query.trim().toLowerCase();
        let matchedKey = this.verbKeys.find(k => k.toLowerCase() === cleanQuery);

        if (!matchedKey) {
            matchedKey = this.verbKeys.find(k => k.toLowerCase().startsWith(cleanQuery));
        }

        if (matchedKey) {
            const pool = this.filteredKeys.length > 0 ? this.filteredKeys : this.verbKeys;
            this.currentIndex = pool.indexOf(matchedKey);
            this.renderVerbResult(matchedKey, this.verbDb[matchedKey]);
        } else {
            this.currentIndex = -1;
            const fallbackData = {
                prepositions: ["none"],
                pronominal: cleanQuery.startsWith("si ") || cleanQuery.startsWith("sc"),
                pattern: `${cleanQuery} [complemento]`,
                level: "A2",
                definition: `Azione o stato legato a « ${cleanQuery} ».`,
                grammar_rule: `Verbo italiano « ${cleanQuery} ». Verificare l'uso delle preposizioni reggenti e l'eventuale articolazione.`,
                noun_parallel: "",
                examples: [
                    `È opportuno usare correttamente il verbo ${cleanQuery}.`,
                    `Ha deciso di usare ${cleanQuery} con attenzione.`
                ],
                common_mistake: `⚠️ Verificare se « ${cleanQuery} » si usa direttamente o con una preposizione (a, di...).`,
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
            proBadge.textContent = 'Pronominale 🪞';
        } else {
            proBadge.style.display = 'none';
        }

        // Preposition Badge
        const prepBadge = document.getElementById('prep-badge');
        const prepList = (data.prepositions || []).join(' / ');
        if (prepList === 'none') {
            prepBadge.textContent = 'Diretto (senza preposizione)';
            prepBadge.className = 'badge trans-vt';
        } else {
            prepBadge.textContent = `Preposizione: ${prepList}`;
            prepBadge.className = 'badge prep-badge';
        }

        // CEFR Level
        document.getElementById('verb-cefr-badge').textContent = `Livello: ${data.level || 'A1'}`;

        // Lexical details
        document.getElementById('verb-definition').textContent = data.definition || 'Definizione non disponibile.';
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

    /* Sequential navigation */
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
}

let appEngine;
document.addEventListener('DOMContentLoaded', () => {
    appEngine = new ItalianReggenzaEngine();
});
