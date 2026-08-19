class ItalianConjugationEngine {
    constructor() {
        this.verbDb = {};
        this.isGameActive = false;
        this.gameScore = 0;
        this.gameStreak = 0;
        this.currentQuestion = null;
        this.init();
    }

    async init() {
        try {
            const res = await fetch('data/verbs.json');
            this.verbDb = await res.json();
            this.bindEvents();
        } catch (e) { console.error(e); }
    }

    bindEvents() {
        const input = document.getElementById('verb-search-input');
        if (input) {
            input.addEventListener('input', (e) => this.handleInput(e.target.value));
            input.addEventListener('keydown', (e) => { if (e.key === 'Enter') this.searchVerb(input.value); });
        }
        const gInput = document.getElementById('game-answer-input');
        if (gInput) {
            gInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') this.checkGameAnswer(); });
        }
    }

    handleInput(query) {
        const q = query.trim().toLowerCase();
        const box = document.getElementById('search-suggestions');
        if (!q) { box.style.display = 'none'; return; }
        const matches = Object.keys(this.verbDb).filter(v => v.startsWith(q));
        if (matches.length > 0) {
            box.innerHTML = matches.map(v => `
                <div class="suggestion-item" onclick="appEngine.searchVerb('${v}')">
                    <span><strong>${v}</strong></span>
                    <span>${this.verbDb[v].group}</span>
                </div>
            `).join('');
            box.style.display = 'block';
        } else box.style.display = 'none';
    }

    searchVerb(query) {
        const q = query.trim().toLowerCase();
        document.getElementById('search-suggestions').style.display = 'none';
        if (this.verbDb[q]) {
            this.renderVerb(q, this.verbDb[q]);
        } else if (q) {
            // Rule fallback for regular -are, -ere, -ire
            let stem = q.slice(0, -3);
            this.renderVerb(q, {
                group: q.endsWith('are') ? '1ª coniugazione (-are)' : 'Coniugazione regolare',
                auxiliary: 'avere',
                definition: `Azione del verbo ${q}.`,
                usage_hint: `${q} + oggetto diretto`,
                antonyms: [],
                tenses: {
                    pres: [`io ${stem}o`, `tu ${stem}i`, `lui/lei ${stem}a`, `noi ${stem}iamo`, `voi ${stem}ate`, `loro ${stem}ano`],
                    imp: [`io ${stem}avo`, `tu ${stem}avi`, `lui/lei ${stem}ava`, `noi ${stem}avamo`, `voi ${stem}avate`, `loro ${stem}avano`],
                    pc: [`io ho ${stem}ato`, `tu hai ${stem}ato`, `lui/lei ha ${stem}ato`, `noi abbiamo ${stem}ato`, `voi avete ${stem}ato`, `loro hanno ${stem}ato`],
                    fut: [`io ${stem}erò`, `tu ${stem}erai`, `lui/lei ${stem}erà`, `noi ${stem}eremo`, `voi ${stem}erete`, `loro ${stem}eranno`]
                }
            });
        }
    }

    formatColorCoded(form) {
        const endings = ['avamo', 'avate', 'avano', 'eremo', 'erete', 'eranno', 'iamo', 'ate', 'ano', 'avo', 'avi', 'ava', 'erò', 'erai', 'erà', 'ato', 'o', 'i', 'a'];
        let words = form.split(' ');
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

    renderVerb(verb, data) {
        document.getElementById('empty-state').style.display = 'none';
        document.getElementById('verb-result-container').style.display = 'block';
        document.getElementById('verb-infinitive').textContent = verb;
        document.getElementById('verb-group-badge').textContent = data.group;
        document.getElementById('verb-aux-badge').textContent = `Ausiliare: ${data.auxiliary}`;

        let levelBadge = document.getElementById('verb-cefr-badge');
        if (!levelBadge) {
            levelBadge = document.createElement('span');
            levelBadge.id = 'verb-cefr-badge';
            levelBadge.className = 'badge cefr-badge';
            document.getElementById('verb-aux-badge').insertAdjacentElement('afterend', levelBadge);
        }
        levelBadge.textContent = `Livello: ${data.level || 'A1'}`;
        document.getElementById('verb-definition').textContent = data.definition;

        const usageBox = document.getElementById('usage-container');
        const usageHintEl = document.getElementById('verb-usage-hint');
        if (usageHintEl) {
            const usage = data.usage_hint || `${verb} + oggetto diretto`;
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
            antonymsBox.innerHTML = data.antonyms.map(a => `<button class="antonym-pill" onclick="appEngine.searchVerb('${a}')">↔ ${a}</button>`).join('');
        } else {
            document.getElementById('antonyms-container').style.display = 'none';
        }

        const pronouns = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
        for (let t of ['pres', 'imp', 'pc', 'fut']) {
            const list = document.getElementById(`tense-${t}`);
            if (list && data.tenses[t]) {
                list.innerHTML = data.tenses[t].map((f, i) => `
                    <li><span class="pronoun">${pronouns[i]}</span> <span>${this.formatColorCoded(f)}</span></li>
                `).join('');
            }
        }
    }

    toggleGameMode() {
        this.isGameActive = !this.isGameActive;
        document.getElementById('game-container').style.display = this.isGameActive ? 'block' : 'none';
        document.getElementById('search-section-container').style.display = this.isGameActive ? 'none' : 'block';
        document.getElementById('verb-result-container').style.display = 'none';
        document.getElementById('empty-state').style.display = this.isGameActive ? 'none' : 'block';
        if (this.isGameActive) this.nextGameQuestion();
    }

    nextGameQuestion() {
        const verbs = Object.keys(this.verbDb);
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
        const data = this.verbDb[randomVerb];
        const pronouns = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
        const pIdx = Math.floor(Math.random() * 6);
        const target = data.tenses.pres[pIdx].replace(/^(io|tu|lui\/lei|noi|voi|loro)\s+/i, '');

        this.currentQuestion = { verb: randomVerb, pronoun: pronouns[pIdx], expected: target };
        document.getElementById('game-verb-prompt').textContent = randomVerb;
        document.getElementById('game-pronoun-prompt').textContent = pronouns[pIdx];
        document.getElementById('game-feedback-box').style.display = 'none';
        document.getElementById('game-next-btn').style.display = 'none';
        const inp = document.getElementById('game-answer-input');
        inp.value = ''; inp.disabled = false; inp.focus();
    }

    checkGameAnswer() {
        if (!this.currentQuestion) return;
        const answer = document.getElementById('game-answer-input').value.trim().toLowerCase();
        const feedback = document.getElementById('game-feedback-box');
        feedback.style.display = 'block';
        if (answer === this.currentQuestion.expected.toLowerCase()) {
            this.gameScore += 10; this.gameStreak += 1;
            feedback.className = 'feedback-card correct';
            feedback.innerHTML = `✅ Perfetto! <strong>${this.currentQuestion.pronoun} ${this.currentQuestion.expected}</strong> (+10 pt).`;
        } else {
            this.gameStreak = 0;
            feedback.className = 'feedback-card wrong';
            feedback.innerHTML = `❌ Errore! La risposta corretta è: <strong>${this.currentQuestion.pronoun} ${this.currentQuestion.expected}</strong>.`;
        }
        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;
        document.getElementById('game-next-btn').style.display = 'block';
    }
}

let appEngine;
document.addEventListener('DOMContentLoaded', () => { appEngine = new ItalianConjugationEngine(); });
