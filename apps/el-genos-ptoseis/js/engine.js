class GreekGenderCasesEngine {
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
        } catch (e) { console.error(e); }
    }

    bindEvents() {
        const input = document.getElementById('noun-search-input');
        if (input) {
            input.addEventListener('input', (e) => this.handleInput(e.target.value));
            input.addEventListener('keydown', (e) => { if (e.key === 'Enter') this.searchNoun(input.value); });
        }
    }

    handleInput(query) {
        const q = query.trim().toLowerCase();
        const box = document.getElementById('search-suggestions');
        if (!q) { box.style.display = 'none'; return; }
        const matches = Object.keys(this.nounDb).filter(n => n.startsWith(q));
        if (matches.length > 0) {
            box.innerHTML = matches.map(n => `
                <div class="suggestion-item" onclick="appEngine.searchNoun('${n}')">
                    <span><strong>${n}</strong></span>
                    <span>${this.nounDb[n].gender}</span>
                </div>
            `).join('');
            box.style.display = 'block';
        } else box.style.display = 'none';
    }

    searchNoun(query) {
        const q = query.trim().toLowerCase();
        document.getElementById('search-suggestions').style.display = 'none';
        if (this.nounDb[q]) {
            this.renderNoun(q, this.nounDb[q]);
        } else if (q) {
            let isMasc = q.endsWith('ος') || q.endsWith('ης') || q.endsWith('ας');
            let isFem = q.endsWith('α') || q.endsWith('η');
            this.renderNoun(q, {
                gender: isMasc ? 'Αρσενικό' : (isFem ? 'Θηλυκό' : 'Ουδέτερο'),
                article: isMasc ? 'ο' : (isFem ? 'η' : 'το'),
                definition: `Ουσιαστικό (${q}).`,
                antonyms: [],
                cases: {
                    nom: [isMasc ? 'ο ' + q : (isFem ? 'η ' + q : 'το ' + q), 'οι ' + q + 'ες'],
                    gen: ['του ' + q, 'των ' + q + 'ων'],
                    acc: ['τον ' + q, 'τους ' + q + 'ους'],
                    voc: [q, q + 'ες']
                }
            });
        }
    }

    formatColorCoded(phrase) {
        const endings = ['ους', 'ων', 'ες', 'οι', 'ου', 'ος', 'ης', 'ας', 'ια', 'α', 'η', 'ο'];
        let words = phrase.split(' ');
        let lastWord = words.pop();
        for (let end of endings) {
            if (lastWord.endsWith(end) && lastWord.length > end.length) {
                let stem = lastWord.slice(0, -end.length);
                words.push(`<span class="stem">${stem}</span><span class="ending">${end}</span>`);
                return words.join(' ');
            }
        }
        words.push(lastWord);
        return words.join(' ');
    }

    renderNoun(noun, data) {
        document.getElementById('empty-state').style.display = 'none';
        document.getElementById('noun-result-container').style.display = 'block';
        document.getElementById('noun-title').textContent = noun;

        const badge = document.getElementById('gender-badge');
        const artDisplay = (data.article || (data.gender === 'Αρσενικό' ? 'ο' : (data.gender === 'Θηλυκό' ? 'η' : 'το'))).toUpperCase();
        badge.textContent = `${data.gender} (${artDisplay})`;
        badge.className = `badge ${data.gender === 'Αρσενικό' ? 'gender-masc' : (data.gender === 'Θηλυκό' ? 'gender-fem' : 'gender-neut')}`;

        let levelBadge = document.getElementById('noun-cefr-badge');
        if (!levelBadge) {
            levelBadge = document.createElement('span');
            levelBadge.id = 'noun-cefr-badge';
            levelBadge.className = 'badge cefr-badge';
            if (badge) badge.insertAdjacentElement('afterend', levelBadge);
        }
        if (levelBadge) levelBadge.textContent = `Επίπεδο : ${data.level || 'A1'}`;

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

        const antonymsBox = document.getElementById('antonyms-pills');
        if (data.antonyms && data.antonyms.length > 0) {
            document.getElementById('antonyms-container').style.display = 'flex';
            antonymsBox.innerHTML = data.antonyms.map(a => `<button class="antonym-pill" onclick="appEngine.searchNoun('${a}')">↔ ${a}</button>`).join('');
        } else document.getElementById('antonyms-container').style.display = 'none';

        const caseMeta = [
            { key: 'nom', name: 'Ονομαστική' },
            { key: 'gen', name: 'Γενική' },
            { key: 'acc', name: 'Αιτιατική' },
            { key: 'voc', name: 'Κλητική' }
        ];

        const tbody = document.getElementById('cases-table-body');
        tbody.innerHTML = caseMeta.map(c => `
            <tr>
                <td><strong>${c.name}</strong></td>
                <td>${this.formatColorCoded(data.cases[c.key][0])}</td>
                <td>${this.formatColorCoded(data.cases[c.key][1])}</td>
            </tr>
        `).join('');
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
            this.gameScore += 10; this.gameStreak += 1;
            feedback.className = 'feedback-card correct';
            feedback.innerHTML = `✅ Μπράβο! Η λέξη <strong>${this.currentQuestion.noun}</strong> είναι ${gender}.`;
        } else {
            this.gameStreak = 0;
            feedback.className = 'feedback-card wrong';
            feedback.innerHTML = `❌ Λάθος! Η λέξη <strong>${this.currentQuestion.noun}</strong> είναι ${this.currentQuestion.expectedGender}.`;
        }
        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;
        document.getElementById('game-next-btn').style.display = 'block';
    }
}

let appEngine;
document.addEventListener('DOMContentLoaded', () => { appEngine = new GreekGenderCasesEngine(); });
