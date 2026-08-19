/**
 * COSYlanguages Standalone App — French Conjugation Engine (fr-conjugeur)
 * Includes pattern recognition ending markup and interactive Practice Game mode.
 */

class ConjugationEngine {
    constructor() {
        this.verbDb = {};
        this.formToInfinitiveMap = {};
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
            this.buildLemmatizationIndex();
            this.bindEvents();
        } catch (err) {
            console.error("Failed to load verbs database:", err);
        }
    }

    buildLemmatizationIndex() {
        this.formToInfinitiveMap = {};
        for (const [infinitive, data] of Object.entries(this.verbDb)) {
            this.formToInfinitiveMap[infinitive.toLowerCase()] = infinitive;
            if (data.tenses) {
                for (const forms of Object.values(data.tenses)) {
                    forms.forEach(fullForm => {
                        const cleanForm = fullForm
                            .replace(/^(je|j'|tu|il\/elle|nous|vous|ils\/elles|que|qu'|que tu|que nous|que vous)\s+/i, '')
                            .trim()
                            .toLowerCase();
                        if (cleanForm) {
                            this.formToInfinitiveMap[cleanForm] = infinitive;
                        }
                    });
                }
            }
        }
    }

    bindEvents() {
        const input = document.getElementById('verb-search-input');
        const clearBtn = document.getElementById('clear-search-btn');
        const ttsBtn = document.getElementById('speak-verb-btn');
        const gameInput = document.getElementById('game-answer-input');

        if (input) {
            input.addEventListener('input', (e) => this.handleSearchInput(e.target.value));
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.searchVerb(input.value);
                    this.hideSuggestions();
                }
            });
        }

        if (gameInput) {
            gameInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.checkGameAnswer();
                }
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                input.value = '';
                clearBtn.style.display = 'none';
                this.resetDisplay();
            });
        }

        if (ttsBtn) {
            ttsBtn.addEventListener('click', () => {
                const infinitive = document.getElementById('verb-infinitive').textContent;
                if (infinitive && 'speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(infinitive);
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

        const matches = new Set();
        for (const [form, infinitive] of Object.entries(this.formToInfinitiveMap)) {
            if (form.startsWith(cleanQuery)) {
                matches.add(infinitive);
                if (matches.size >= 6) break;
            }
        }

        if (matches.size > 0 && suggestionsBox) {
            suggestionsBox.innerHTML = Array.from(matches).map(inf => `
                <div class="suggestion-item" onclick="appEngine.selectSuggestion('${inf}')">
                    <span><strong>${inf}</strong></span>
                    <span style="color: var(--ink-muted); font-size: 0.85rem;">${this.verbDb[inf]?.group || ''}</span>
                </div>
            `).join('');
            suggestionsBox.style.display = 'block';
        } else if (suggestionsBox) {
            this.hideSuggestions();
        }
    }

    selectSuggestion(infinitive) {
        const input = document.getElementById('verb-search-input');
        if (input) input.value = infinitive;
        this.hideSuggestions();
        this.searchVerb(infinitive);
    }

    hideSuggestions() {
        const suggestionsBox = document.getElementById('search-suggestions');
        if (suggestionsBox) suggestionsBox.style.display = 'none';
    }

    searchVerb(query) {
        if (!query) return;
        if (this.isGameActive) this.toggleGameMode();

        const cleanQuery = query.trim().toLowerCase();
        let targetInfinitive = this.formToInfinitiveMap[cleanQuery] || cleanQuery;

        if (this.verbDb[targetInfinitive]) {
            this.renderVerbResult(targetInfinitive, this.verbDb[targetInfinitive]);
        } else if (targetInfinitive.endsWith('er')) {
            const generatedData = this.generateRegularErVerb(targetInfinitive);
            this.renderVerbResult(targetInfinitive, generatedData);
        } else {
            alert(`Désolé, le verbe "${query}" n'est pas encore dans la base de données.`);
        }
    }

    generateRegularErVerb(infinitive) {
        const stem = infinitive.slice(0, -2);
        const startsWithVowel = /^[aeiouyéèêh]/i.test(infinitive);
        const jePronoun = startsWithVowel ? "j'" : "je ";
        const queJePronoun = startsWithVowel ? "que j'" : "que je ";
        return {
            group: "1er groupe (-er)",
            auxiliary: "avoir",
            definition: `Action de ${infinitive}.`,
            usage_hint: `${infinitive} + COD (complément d'objet direct)`,
            antonyms: [],
            tenses: {
                indicatif_present: [`${jePronoun}${stem}e`, `tu ${stem}es`, `il/elle ${stem}e`, `nous ${stem}ons`, `vous ${stem}ez`, `ils/elles ${stem}ent`],
                indicatif_imparfait: [`${jePronoun}${stem}ais`, `tu ${stem}ais`, `il/elle ${stem}ait`, `nous ${stem}ions`, `vous ${stem}iez`, `ils/elles ${stem}aient`],
                pc: [`j'ai ${stem}é`, `tu as ${stem}é`, `il/elle a ${stem}é`, `nous avons ${stem}é`, `vous avez ${stem}é`, `ils/elles ont ${stem}é`],
                indicatif_futur_simple: [`${jePronoun}${infinitive}ai`, `tu ${infinitive}as`, `il/elle ${infinitive}a`, `nous ${infinitive}ons`, `vous ${infinitive}ez`, `ils/elles ${infinitive}ont`],
                conditionnel_present: [`${jePronoun}${infinitive}ais`, `tu ${infinitive}ais`, `il/elle ${infinitive}ait`, `nous ${infinitive}ions`, `vous ${infinitive}iez`, `ils/elles ${infinitive}aient`],
                subjonctif_present: [`${queJePronoun}${stem}e`, `que tu ${stem}es`, `qu'il/elle ${stem}e`, `que nous ${stem}ions`, `que vous ${stem}iez`, `qu'ils/elles ${stem}ent`],
                imperatif: [`${stem}e !`, `${stem}ons !`, `${stem}ez !`],
                participe_passe: [`${stem}é`]
            }
        };
    }

    /**
     * Color-code regular verb endings for pattern recognition
     */
    formatColorCodedForm(form, infinitive) {
        // List of regular endings sorted by length descending
        const regularEndings = ['issent', 'issez', 'issons', 'issais', 'issait', 'issaient', 'issiez', 'issions', 'eraient', 'erions', 'eriez', 'erais', 'erait', 'eront', 'erez', 'erons', 'eras', 'erai', 'aient', 'ions', 'iez', 'ais', 'ait', 'ons', 'ez', 'ent', 'es', 'is', 'it', 'e', 's', 't', 'é'];

        let words = form.split(' ');
        let lastWord = words.pop();

        for (let ending of regularEndings) {
            if (lastWord.endsWith(ending) && lastWord.length > ending.length) {
                let stemPart = lastWord.slice(0, -ending.length);
                let coloredLastWord = `<span class="stem">${stemPart}</span><span class="ending">${ending}</span>`;
                words.push(coloredLastWord);
                return words.join(' ');
            }
        }
        words.push(lastWord);
        return words.join(' ');
    }

    renderVerbResult(infinitive, data) {
        document.getElementById('empty-state').style.display = 'none';
        const resultCard = document.getElementById('verb-result-container');
        resultCard.style.display = 'block';

        document.getElementById('verb-infinitive').textContent = infinitive;
        document.getElementById('verb-group-badge').textContent = data.group;
        document.getElementById('verb-aux-badge').textContent = `Auxiliaire : ${data.auxiliary}`;

        let levelBadge = document.getElementById('verb-cefr-badge');
        if (!levelBadge) {
            levelBadge = document.createElement('span');
            levelBadge.id = 'verb-cefr-badge';
            levelBadge.className = 'badge cefr-badge';
            document.getElementById('verb-aux-badge').insertAdjacentElement('afterend', levelBadge);
        }
        levelBadge.textContent = `Niveau : ${data.level || 'A1'}`;
        document.getElementById('verb-definition').textContent = data.definition || 'Définition indisponible.';

        const usageBox = document.getElementById('usage-container');
        const usageHintEl = document.getElementById('verb-usage-hint');
        if (usageHintEl) {
            const usage = data.usage_hint || `${infinitive} + COD`;
            usageHintEl.textContent = usage;
            if (usageBox) usageBox.style.display = 'flex';
        }

        const ruleBox = document.getElementById('grammar-rule-container');
        const ruleTextEl = document.getElementById('grammar-rule-text');
        if (ruleTextEl && ruleBox) {
            if (data.grammar_rule) {
                ruleTextEl.textContent = data.grammar_rule;
                ruleBox.style.display = 'flex';
            } else {
                ruleBox.style.display = 'none';
            }
        }

        const antonymsBox = document.getElementById('antonyms-pills');
        if (data.antonyms && data.antonyms.length > 0) {
            document.getElementById('antonyms-container').style.display = 'flex';
            antonymsBox.innerHTML = data.antonyms.map(ant => `
                <button class="antonym-pill" onclick="appEngine.searchVerb('${ant}')">↔ ${ant}</button>
            `).join('');
        } else {
            document.getElementById('antonyms-container').style.display = 'none';
        }

        const pronounsMap = {
            pres: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            indicatif_present: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            imp: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            indicatif_imparfait: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            pc: ["j'", "tu", "il/elle", "nous", "vous", "ils/elles"],
            fut: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            indicatif_futur_simple: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            subj: ["que je", "que tu", "qu'il/elle", "que nous", "que vous", "qu'ils/elles"],
            subjonctif_present: ["que je", "que tu", "qu'il/elle", "que nous", "que vous", "qu'ils/elles"],
            cond: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            conditionnel_present: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            impv: ["(2e pers.)", "(1re pl.)", "(2e pl.)"],
            imperatif: ["(2e pers.)", "(1re pl.)", "(2e pl.)"],
            part: ["Présent", "Passé"],
            participe_passe: ["Passé"]
        };

        const tenseIdMap = {
            indicatif_present: "pres",
            indicatif_imparfait: "imp",
            indicatif_futur_simple: "fut",
            conditionnel_present: "cond",
            subjonctif_present: "subj",
            imperatif: "impv",
            participe_passe: "part",
            pres: "pres", imp: "imp", pc: "pc", fut: "fut", subj: "subj", cond: "cond", impv: "impv", part: "part"
        };

        for (const [tenseKey, forms] of Object.entries(data.tenses)) {
            const targetId = tenseIdMap[tenseKey] || tenseKey;
            const listEl = document.getElementById(`tense-${targetId}`);
            if (listEl) {
                listEl.innerHTML = forms.map((form, idx) => {
                    const formattedForm = this.formatColorCodedForm(form, infinitive);
                    return `<li><span class="pronoun">${pronounsMap[tenseKey]?.[idx] || ''}</span> <span class="verb-form">${formattedForm}</span></li>`;
                }).join('');
            }
        }
    }

    resetDisplay() {
        document.getElementById('verb-result-container').style.display = 'none';
        document.getElementById('empty-state').style.display = 'block';
    }

    /* ==========================================================================
       Interactive Practice Game Logic
       ========================================================================== */

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
            toggleBtn.style.backgroundColor = 'var(--cream-card)';
            toggleBtn.style.color = 'var(--sage-primary)';
            gameContainer.style.display = 'none';
            searchContainer.style.display = 'block';
            this.resetDisplay();
        }
    }

    nextGameQuestion() {
        const verbs = Object.keys(this.verbDb);
        if (verbs.length === 0) return;

        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
        const verbData = this.verbDb[randomVerb];

        const tenseKeys = ['indicatif_present', 'indicatif_imparfait', 'indicatif_futur_simple', 'conditionnel_present'];
        const tenseNameMap = {
            indicatif_present: 'Présent',
            indicatif_imparfait: 'Imparfait',
            indicatif_futur_simple: 'Futur simple',
            conditionnel_present: 'Conditionnel'
        };
        const pronouns = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];

        const randomTense = tenseKeys[Math.floor(Math.random() * tenseKeys.length)];
        const tenseForms = verbData.tenses?.[randomTense];
        if (!tenseForms || tenseForms.length === 0) {
            this.nextGameQuestion();
            return;
        }

        const randomIdx = Math.floor(Math.random() * Math.min(tenseForms.length, 6));
        const targetForm = tenseForms[randomIdx];
        const pronoun = pronouns[randomIdx] || 'il/elle';

        // Clean full form to extract just the verb
        const cleanExpected = targetForm
            .replace(/^(je|j'|tu|il\/elle|nous|vous|ils\/elles)\s+/i, '')
            .trim();

        const displayPronoun = targetForm.startsWith("j'") ? "j'" : pronoun;

        this.currentQuestion = {
            verb: randomVerb,
            tense: tenseNameMap[randomTense],
            pronoun: displayPronoun,
            expected: cleanExpected
        };

        document.getElementById('game-verb-prompt').textContent = randomVerb;
        document.getElementById('game-tense-badge').textContent = tenseNameMap[randomTense];
        document.getElementById('game-pronoun-prompt').textContent = displayPronoun;

        const answerInput = document.getElementById('game-answer-input');
        answerInput.value = '';
        answerInput.disabled = false;
        answerInput.focus();

        document.getElementById('game-feedback-box').style.display = 'none';
        document.getElementById('game-submit-btn').style.display = 'block';
        document.getElementById('game-next-btn').style.display = 'none';
    }

    checkGameAnswer() {
        if (!this.currentQuestion) return;

        const answerInput = document.getElementById('game-answer-input');
        const userAnswer = answerInput.value.trim().toLowerCase();
        const expected = this.currentQuestion.expected.toLowerCase();

        const feedbackBox = document.getElementById('game-feedback-box');
        feedbackBox.style.display = 'block';

        if (userAnswer === expected) {
            this.gameScore += 10;
            this.gameStreak += 1;
            feedbackBox.className = 'feedback-card correct';
            feedbackBox.innerHTML = `✅ Excellent ! <strong>${this.currentQuestion.pronoun} ${expected}</strong> est la bonne réponse (+10 pts).`;
        } else {
            this.gameStreak = 0;
            feedbackBox.className = 'feedback-card wrong';
            feedbackBox.innerHTML = `❌ Oups ! La bonne réponse était : <strong>${this.currentQuestion.pronoun} ${expected}</strong>.`;
        }

        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;

        answerInput.disabled = true;
        document.getElementById('game-submit-btn').style.display = 'none';
        document.getElementById('game-next-btn').style.display = 'block';
    }
}

// Global initialization
let appEngine;
document.addEventListener('DOMContentLoaded', () => {
    appEngine = new ConjugationEngine();
});
