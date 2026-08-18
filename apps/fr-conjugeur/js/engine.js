/**
 * COSYlanguages Standalone App — French Conjugation Engine (fr-conjugeur)
 * Lightweight, client-side, 100% offline verb search & lemmatization engine.
 */

class ConjugationEngine {
    constructor() {
        this.verbDb = {};
        this.formToInfinitiveMap = {};
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

    /**
     * Map every conjugated form back to its infinitive lemma
     */
    buildLemmatizationIndex() {
        this.formToInfinitiveMap = {};
        for (const [infinitive, data] of Object.entries(this.verbDb)) {
            // Index the infinitive itself
            this.formToInfinitiveMap[infinitive.toLowerCase()] = infinitive;

            // Index all conjugated forms
            if (data.tenses) {
                for (const forms of Object.values(data.tenses)) {
                    forms.forEach(fullForm => {
                        // Clean pronoun prefixes like "je ", "tu ", "qu'il ", "je me "
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

        // Search matching infinitives or conjugated forms
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
        const cleanQuery = query.trim().toLowerCase();

        // Resolve lemma
        let targetInfinitive = this.formToInfinitiveMap[cleanQuery] || cleanQuery;

        if (this.verbDb[targetInfinitive]) {
            this.renderVerbResult(targetInfinitive, this.verbDb[targetInfinitive]);
        } else if (targetInfinitive.endsWith('er')) {
            // Generate dynamic 1st group -er verb conjugation if not explicitly in DB
            const generatedData = this.generateRegularErVerb(targetInfinitive);
            this.renderVerbResult(targetInfinitive, generatedData);
        } else {
            alert(`Désolé, le verbe "${query}" n'est pas encore dans la base de données.`);
        }
    }

    generateRegularErVerb(infinitive) {
        const stem = infinitive.slice(0, -2);
        return {
            group: "1er groupe (-er)",
            auxiliary: "avoir",
            definition: `Action de ${infinitive}.`,
            antonyms: [],
            tenses: {
                pres: [`je ${stem}e`, `tu ${stem}es`, `il/elle ${stem}e`, `nous ${stem}ons`, `vous ${stem}ez`, `ils/elles ${stem}ent`],
                imp: [`je ${stem}ais`, `tu ${stem}ais`, `il/elle ${stem}ait`, `nous ${stem}ions`, `vous ${stem}iez`, `ils/elles ${stem}aient`],
                pc: [`j'ai ${stem}é`, `tu as ${stem}é`, `il/elle a ${stem}é`, `nous avons ${stem}é`, `vous avez ${stem}é`, `ils/elles ont ${stem}é`],
                fut: [`je ${infinitive}ai`, `tu ${infinitive}as`, `il/elle ${infinitive}a`, `nous ${infinitive}ons`, `vous ${infinitive}ez`, `ils/elles ${infinitive}ont`],
                subj: [`que je ${stem}e`, `que tu ${stem}es`, `qu'il/elle ${stem}e`, `que nous ${stem}ions`, `que vous ${stem}iez`, `qu'ils/elles ${stem}ent`],
                cond: [`je ${infinitive}ais`, `tu ${infinitive}ais`, `il/elle ${infinitive}ait`, `nous ${infinitive}ions`, `vous ${infinitive}iez`, `ils/elles ${infinitive}aient`],
                impv: [`${stem}e`, `${stem}ons`, `${stem}ez`],
                part: [`${stem}ant`, `${stem}é`]
            }
        };
    }

    renderVerbResult(infinitive, data) {
        document.getElementById('empty-state').style.display = 'none';
        const resultCard = document.getElementById('verb-result-container');
        resultCard.style.display = 'block';

        document.getElementById('verb-infinitive').textContent = infinitive;
        document.getElementById('verb-group-badge').textContent = data.group;
        document.getElementById('verb-aux-badge').textContent = `Auxiliaire : ${data.auxiliary}`;
        document.getElementById('verb-definition').textContent = data.definition || 'Définition indisponible.';

        // Antonyms
        const antonymsBox = document.getElementById('antonyms-pills');
        if (data.antonyms && data.antonyms.length > 0) {
            document.getElementById('antonyms-container').style.display = 'flex';
            antonymsBox.innerHTML = data.antonyms.map(ant => `
                <button class="antonym-pill" onclick="appEngine.searchVerb('${ant}')">↔ ${ant}</button>
            `).join('');
        } else {
            document.getElementById('antonyms-container').style.display = 'none';
        }

        // Tenses rendering
        const pronounsMap = {
            pres: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            imp: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            pc: ["j'", "tu", "il/elle", "nous", "vous", "ils/elles"],
            fut: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            subj: ["que je", "que tu", "qu'il/elle", "que nous", "que vous", "qu'ils/elles"],
            cond: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
            impv: ["(2e pers.)", "(1re pl.)", "(2e pl.)"],
            part: ["Présent", "Passé"]
        };

        for (const [tenseKey, forms] of Object.entries(data.tenses)) {
            const listEl = document.getElementById(`tense-${tenseKey}`);
            if (listEl) {
                listEl.innerHTML = forms.map((form, idx) => {
                    return `<li><span class="pronoun">${pronounsMap[tenseKey]?.[idx] || ''}</span> <span class="verb-form">${form}</span></li>`;
                }).join('');
            }
        }
    }

    resetDisplay() {
        document.getElementById('verb-result-container').style.display = 'none';
        document.getElementById('empty-state').style.display = 'block';
    }
}

// Global initialization
let appEngine;
document.addEventListener('DOMContentLoaded', () => {
    appEngine = new ConjugationEngine();
});
