class NounGenderEngine {
    constructor() {
        this.nounDb = {};
        this.isGameActive = false;
        this.gameScore = 0;
        this.gameStreak = 0;
        this.currentQuestion = null;
        this.init();
    }

    async init() {
        try {
            const res = await fetch('data/nouns.json');
            this.nounDb = await res.json();
            this.bindEvents();
        } catch (err) { console.error(err); }
    }

    bindEvents() {
        const input = document.getElementById('noun-search-input');
        if (input) {
            input.addEventListener('input', (e) => this.handleSearchInput(e.target.value));
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.searchNoun(input.value);
            });
        }
    }

    handleSearchInput(query) {
        const q = query.trim().toLowerCase();
        const suggestionsBox = document.getElementById('search-suggestions');
        if (!q) { suggestionsBox.style.display = 'none'; return; }
        const matches = Object.keys(this.nounDb).filter(n => n.startsWith(q));
        if (matches.length > 0) {
            suggestionsBox.innerHTML = matches.map(n => `
                <div class="suggestion-item" onclick="appEngine.searchNoun('${n}')">
                    <span><strong>${n}</strong></span>
                    <span class="article">${this.nounDb[n].gender}</span>
                </div>
            `).join('');
            suggestionsBox.style.display = 'block';
        } else { suggestionsBox.style.display = 'none'; }
    }

    searchNoun(query) {
        const q = query.trim().toLowerCase();
        document.getElementById('search-suggestions').style.display = 'none';
        if (this.nounDb[q]) {
            this.renderNoun(q, this.nounDb[q]);
        } else if (q) {
            // Default rule fallback
            const isFem = q.endsWith('e') || q.endsWith('tion') || q.endsWith('té');
            this.renderNoun(q, {
                gender: isFem ? 'Féminin' : 'Masculin',
                article: isFem ? 'la' : 'le',
                definition: `Nom commun (${q}).`,
                antonyms: [],
                plural: q.endsWith('al') ? q.slice(0, -2) + 'aux' : q + 's'
            });
        }
    }

    renderNoun(noun, data) {
        document.getElementById('empty-state').style.display = 'none';
        document.getElementById('noun-result-container').style.display = 'block';
        document.getElementById('noun-title').textContent = noun;

        const badge = document.getElementById('gender-badge');
        badge.textContent = data.gender === 'Masculin' ? '♂️ Masculin (Le / Un)' : '♀️ Féminin (La / Une)';

        let levelBadge = document.getElementById('noun-cefr-badge');
        if (!levelBadge) {
            levelBadge = document.createElement('span');
            levelBadge.id = 'noun-cefr-badge';
            levelBadge.className = 'badge cefr-badge';
            badge.insertAdjacentElement('afterend', levelBadge);
        }
        levelBadge.textContent = `Niveau : ${data.level || 'A1'}`;
        badge.className = `badge ${data.gender === 'Masculin' ? 'gender-masc' : 'gender-fem'}`;

        document.getElementById('noun-definition').textContent = data.definition;

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

        const startsWithVowel = /^[aeiouyéèêàh]/i.test(noun);
        const article = data.article || (startsWithVowel ? "l'" : (data.gender === 'Masculin' ? 'le' : 'la'));

        let plural = data.plural;
        if (!plural) {
            if (noun.endsWith('al') && !['bal', 'carnaval', 'chacal', 'festival', 'recital'].includes(noun)) {
                plural = noun.slice(0, -2) + 'aux';
            } else if (['bijou', 'caillou', 'chou', 'genou', 'hibou', 'joujou', 'pou'].includes(noun)) {
                plural = noun + 'x';
            } else if (noun.endsWith('eau') || noun.endsWith('eu') || noun.endsWith('au')) {
                plural = noun + 'x';
            } else if (noun.endsWith('s') || noun.endsWith('x') || noun.endsWith('z')) {
                plural = noun;
            } else {
                plural = noun + 's';
            }
        }

        document.getElementById('sing-form').innerHTML = `<span class="article">${article}</span> <span class="stem">${noun}</span>`;

        // Plural ending split
        let stem = noun;
        let ending = '';
        if (plural.endsWith('aux') || plural.endsWith('oux') || plural.endsWith('eaux') || plural.endsWith('eux')) {
            ending = plural.slice(-1);
            stem = plural.slice(0, -1);
        } else if (plural.endsWith('s')) {
            if (noun.endsWith('s')) {
                stem = noun;
                ending = '';
            } else {
                stem = noun;
                ending = 's';
            }
        } else if (plural.endsWith('x')) {
            if (noun.endsWith('x')) {
                stem = noun;
                ending = '';
            } else {
                stem = noun;
                ending = 'x';
            }
        } else {
            stem = plural;
            ending = '';
        }
        document.getElementById('plur-form').innerHTML = `<span class="article">les</span> <span class="stem">${stem}</span><span class="ending">${ending}</span>`;

        const antonymsBox = document.getElementById('antonyms-pills');
        if (data.antonyms && data.antonyms.length > 0) {
            document.getElementById('antonyms-container').style.display = 'flex';
            antonymsBox.innerHTML = data.antonyms.map(a => `<button class="antonym-pill" onclick="appEngine.searchNoun('${a}')">↔ ${a}</button>`).join('');
        } else {
            document.getElementById('antonyms-container').style.display = 'none';
        }
    }

    toggleGameMode() {
        this.isGameActive = !this.isGameActive;
        document.getElementById('game-container').style.display = this.isGameActive ? 'block' : 'none';
        document.getElementById('search-section-container').style.display = this.isGameActive ? 'none' : 'block';
        document.getElementById('noun-result-container').style.display = 'none';
        document.getElementById('empty-state').style.display = this.isGameActive ? 'none' : 'block';
        if (this.isGameActive) this.nextGameQuestion();
    }

    nextGameQuestion() {
        const nouns = Object.keys(this.nounDb);
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        this.currentQuestion = { noun: randomNoun, expectedGender: this.nounDb[randomNoun].gender };
        document.getElementById('game-noun-prompt').textContent = randomNoun;
        document.getElementById('game-feedback-box').style.display = 'none';
        document.getElementById('game-next-btn').style.display = 'none';
    }

    checkGameChoice(gender) {
        if (!this.currentQuestion) return;
        const isCorrect = gender === this.currentQuestion.expectedGender;
        const feedback = document.getElementById('game-feedback-box');
        feedback.style.display = 'block';
        if (isCorrect) {
            this.gameScore += 10;
            this.gameStreak += 1;
            feedback.className = 'feedback-card correct';
            feedback.innerHTML = `✅ Bravo ! <strong>${this.currentQuestion.noun}</strong> est bien ${gender}.`;
        } else {
            this.gameStreak = 0;
            feedback.className = 'feedback-card wrong';
            feedback.innerHTML = `❌ Erreur ! <strong>${this.currentQuestion.noun}</strong> est ${this.currentQuestion.expectedGender}.`;
        }
        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;
        document.getElementById('game-next-btn').style.display = 'block';
    }
}

let appEngine;
document.addEventListener('DOMContentLoaded', () => { appEngine = new NounGenderEngine(); });
