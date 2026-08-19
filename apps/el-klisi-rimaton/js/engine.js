class GreekConjugationEngine {
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
            let stem = q.slice(0, -1);
            this.renderVerb(q, {
                group: 'Τύπος Α\' (-ω)',
                voice: 'Ενεργητική Φωνή',
                definition: `Ρήμα (${q}).`,
                usage_hint: `${q} + αιτιατική (άμεσο αντικείμενο)`,
                antonyms: [],
                tenses: {
                    pres: [`εγώ ${stem}ω`, `εσύ ${stem}εις`, `αυτός ${stem}ει`, `εμείς ${stem}ουμε`, `εσείς ${stem}ετε`, `αυτοί ${stem}ουν`],
                    imp: [`εγώ έ${stem}α`, `εσύ έ${stem}ες`, `αυτός έ${stem}ε`, `εμείς ${stem}αμε`, `εσείς ${stem}ατε`, `αυτοί έ${stem}αν`],
                    aor: [`εγώ έ${stem}α`, `εσύ έ${stem}ες`, `αυτός έ${stem}ε`, `εμείς ${stem}αμε`, `εσείς ${stem}ατε`, `αυτοί έ${stem}αν`],
                    fut: [`εγώ θα ${stem}ω`, `εσύ θα ${stem}εις`, `αυτός θα ${stem}ει`, `εμείς θα ${stem}ουμε`, `εσείς θα ${stem}ετε`, `αυτοί θα ${stem}ουν`]
                }
            });
        }
    }

    formatColorCoded(form) {
        const endings = ['ουμε', 'ετε', 'ουν', 'εις', 'ει', 'αμε', 'ατε', 'αν', 'ες', 'ει', 'ω', 'α'];
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
        document.getElementById('verb-voice-badge').textContent = data.voice;
        document.getElementById('verb-definition').textContent = data.definition;

        const usageBox = document.getElementById('usage-container');
        const usageHintEl = document.getElementById('verb-usage-hint');
        if (usageHintEl) {
            const usage = data.usage_hint || `${verb} + αιτιατική (άμεσο αντικείμενο)`;
            usageHintEl.textContent = usage;
            if (usageBox) usageBox.style.display = 'flex';
        }

        const antonymsBox = document.getElementById('antonyms-pills');
        if (data.antonyms && data.antonyms.length > 0) {
            document.getElementById('antonyms-container').style.display = 'flex';
            antonymsBox.innerHTML = data.antonyms.map(a => `<button class="antonym-pill" onclick="appEngine.searchVerb('${a}')">↔ ${a}</button>`).join('');
        } else document.getElementById('antonyms-container').style.display = 'none';

        const pronouns = ['εγώ', 'εσύ', 'αυτός/αυτή', 'εμείς', 'εσείς', 'αυτοί/αυτές'];
        for (let t of ['pres', 'imp', 'aor', 'fut']) {
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
        const pronouns = ['εγώ', 'εσύ', 'αυτός/αυτή', 'εμείς', 'εσείς', 'αυτοί/αυτές'];
        const pIdx = Math.floor(Math.random() * 6);
        const rawTarget = data.tenses.pres[pIdx];
        const target = rawTarget.replace(/^(εγώ|εσύ|αυτός\/αυτή|εμείς|εσείς|αυτοί\/αυτές)\s+/i, '').trim();

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
            feedback.innerHTML = `✅ Μπράβο! <strong>${this.currentQuestion.pronoun} ${this.currentQuestion.expected}</strong> (+10 πόντοι).`;
        } else {
            this.gameStreak = 0;
            feedback.className = 'feedback-card wrong';
            feedback.innerHTML = `❌ Λάθος! Το σωστό είναι: <strong>${this.currentQuestion.pronoun} ${this.currentQuestion.expected}</strong>.`;
        }
        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;
        document.getElementById('game-next-btn').style.display = 'block';
    }
}

let appEngine;
document.addEventListener('DOMContentLoaded', () => { appEngine = new GreekConjugationEngine(); });
