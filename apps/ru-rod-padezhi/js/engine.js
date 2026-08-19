class RussianGenderCasesEngine {
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
                    <span>${this.nounDb[n].gender} род</span>
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
            let isFem = q.endsWith('а') || q.endsWith('я');
            let isNeut = q.endsWith('о') || q.endsWith('е');
            this.renderNoun(q, {
                gender: isFem ? 'Женский' : (isNeut ? 'Средний' : 'Мужской'),
                animacy: 'Неодушевлённое',
                definition: `Существительное (${q}).`,
                antonyms: [],
                cases: {
                    nom: [q, q + 'ы'],
                    gen: [q + 'а', q + 'ов'],
                    dat: [q + 'у', q + 'ам'],
                    acc: [q, q + 'ы'],
                    inst: [q + 'ом', q + 'ами'],
                    prep: [q + 'е', q + 'ах']
                }
            });
        }
    }

    formatColorCoded(word) {
        const endings = ['ами', 'ях', 'ах', 'ов', 'ев', 'ом', 'ем', 'ой', 'ей', 'ам', 'ям', 'а', 'я', 'у', 'ю', 'ы', 'и', 'е', 'о'];
        let clean = word.replace(/[\u0300-\u036f]/g, "");
        for (let end of endings) {
            if (clean.endsWith(end) && clean.length > end.length) {
                let stem = word.slice(0, -end.length);
                let actualEnd = word.slice(-end.length);
                return `<span class="stem">${stem}</span><span class="ending">${actualEnd}</span>`;
            }
        }
        return `<span class="stem">${word}</span>`;
    }

    renderNoun(noun, data) {
        document.getElementById('empty-state').style.display = 'none';
        document.getElementById('noun-result-container').style.display = 'block';
        document.getElementById('noun-title').textContent = noun;

        const badge = document.getElementById('gender-badge');
        badge.textContent = `${data.gender} род`;
        badge.className = `badge ${data.gender === 'Мужской' ? 'gender-masc' : (data.gender === 'Женский' ? 'gender-fem' : 'gender-neut')}`;
        document.getElementById('animacy-badge').textContent = data.animacy;
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
            { sing: 'nom_sing', plur: 'nom_plur', legacy: 'nom', name: 'Именительный', q: 'Кто? Что?' },
            { sing: 'gen_sing', plur: 'gen_plur', legacy: 'gen', name: 'Родительный', q: 'Кого? Чего?' },
            { sing: 'dat_sing', plur: 'dat_plur', legacy: 'dat', name: 'Дательный', q: 'Кому? Чему?' },
            { sing: 'acc_sing', plur: 'acc_plur', legacy: 'acc', name: 'Винительный', q: 'Кого? Что?' },
            { sing: 'ins_sing', plur: 'ins_plur', legacy: 'inst', name: 'Творительный', q: 'Кем? Чем?' },
            { sing: 'pre_sing', plur: 'pre_plur', legacy: 'prep', name: 'Предложный', q: 'О ком? О чём?' }
        ];

        const tbody = document.getElementById('cases-table-body');
        tbody.innerHTML = caseMeta.map(c => {
            let singVal = data.cases[c.sing] || (data.cases[c.legacy] ? data.cases[c.legacy][0] : '-');
            let plurVal = data.cases[c.plur] || (data.cases[c.legacy] ? data.cases[c.legacy][1] : '-');
            return `
            <tr>
                <td><strong>${c.name}</strong></td>
                <td style="color: var(--ink-muted);">${c.q}</td>
                <td>${this.formatColorCoded(singVal)}</td>
                <td>${this.formatColorCoded(plurVal)}</td>
            </tr>
        `;
        }).join('');
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
            feedback.innerHTML = `✅ Отлично! Слово <strong>${this.currentQuestion.noun}</strong> — ${gender} род.`;
        } else {
            this.gameStreak = 0;
            feedback.className = 'feedback-card wrong';
            feedback.innerHTML = `❌ Ошибка! Слово <strong>${this.currentQuestion.noun}</strong> — ${this.currentQuestion.expectedGender} род.`;
        }
        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;
        document.getElementById('game-next-btn').style.display = 'block';
    }
}

let appEngine;
document.addEventListener('DOMContentLoaded', () => { appEngine = new RussianGenderCasesEngine(); });
