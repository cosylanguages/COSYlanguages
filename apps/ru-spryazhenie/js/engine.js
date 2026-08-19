class RussianConjugationEngine {
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
            let stem = q.slice(0, -2);
            this.renderVerb(q, {
                group: 'I спряжение (НСВ)',
                pair: 'н/д',
                definition: `Действие (${q}).`,
                usage_hint: `${q} + винительный падеж (кого/что)`,
                antonyms: [],
                tenses: {
                    pres: [`я ${stem}ю`, `ты ${stem}ешь`, `он/она ${stem}ет`, `мы ${stem}ем`, `вы ${stem}ете`, `они ${stem}ют`],
                    past: [`он ${stem}л`, `она ${stem}ла`, `оно ${stem}ло`, `они ${stem}ли`],
                    fut: [`я буду ${q}`, `ты будешь ${q}`, `он/она будет ${q}`, `мы будем ${q}`, `вы будете ${q}`, `они будут ${q}`]
                }
            });
        }
    }

    formatColorCoded(form) {
        const endings = ['ешь', 'ет', 'ем', 'ете', 'ют', 'ит', 'им', 'ите', 'ат', 'ят', 'ла', 'ло', 'ли', 'ю', 'у', 'л'];
        let words = form.split(' ');
        let lastWord = words.pop();
        for (let end of endings) {
            let clean = lastWord.replace(/[\u0300-\u036f]/g, "");
            if (clean.endsWith(end) && clean.length > end.length) {
                let stem = lastWord.slice(0, -end.length);
                let actualEnd = lastWord.slice(-end.length);
                words.push(`<span class="stem">${stem}</span><span class="ending">${actualEnd}</span>`);
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
        document.getElementById('verb-aspect-badge').textContent = `Пара: ${data.pair}`;

        let levelBadge = document.getElementById('verb-cefr-badge');
        if (!levelBadge) {
            levelBadge = document.createElement('span');
            levelBadge.id = 'verb-cefr-badge';
            levelBadge.className = 'badge cefr-badge';
            document.getElementById('verb-aspect-badge').insertAdjacentElement('afterend', levelBadge);
        }
        levelBadge.textContent = `Уровень: ${data.level || 'A1'}`;
        document.getElementById('verb-definition').textContent = data.definition;

        const usageBox = document.getElementById('usage-container');
        const usageHintEl = document.getElementById('verb-usage-hint');
        if (usageHintEl) {
            const usage = data.usage_hint || `${verb} + винительный падеж (кого/что)`;
            usageHintEl.textContent = usage;
            if (usageBox) usageBox.style.display = 'flex';
        }

        const antonymsBox = document.getElementById('antonyms-pills');
        if (data.antonyms && data.antonyms.length > 0) {
            document.getElementById('antonyms-container').style.display = 'flex';
            antonymsBox.innerHTML = data.antonyms.map(a => `<button class="antonym-pill" onclick="appEngine.searchVerb('${a}')">↔ ${a}</button>`).join('');
        } else document.getElementById('antonyms-container').style.display = 'none';

        const pronounsPres = ['я', 'ты', 'он/она́', 'мы', 'вы', 'они́'];
        const listPres = document.getElementById('tense-pres');
        if (listPres && data.tenses.pres) {
            listPres.innerHTML = data.tenses.pres.map((f, i) => `
                <li><span class="pronoun">${pronounsPres[i]}</span> <span>${this.formatColorCoded(f)}</span></li>
            `).join('');
        }

        const pronounsPast = ['он', 'она́', 'оно́', 'они́'];
        const listPast = document.getElementById('tense-past');
        if (listPast && data.tenses.past) {
            listPast.innerHTML = data.tenses.past.map((f, i) => `
                <li><span class="pronoun">${pronounsPast[i] || ''}</span> <span>${this.formatColorCoded(f)}</span></li>
            `).join('');
        }

        const listFut = document.getElementById('tense-fut');
        if (listFut && data.tenses.fut) {
            listFut.innerHTML = data.tenses.fut.map((f, i) => `
                <li><span class="pronoun">${pronounsPres[i]}</span> <span>${f}</span></li>
            `).join('');
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
        const pronouns = ['я', 'ты', 'он/она', 'мы', 'вы', 'они'];
        const pIdx = Math.floor(Math.random() * 6);
        const rawTarget = data.tenses.pres[pIdx];
        const target = rawTarget.replace(/[\u0300-\u036f]/g, "").replace(/^(я|ты|он\/она́|мы|вы|они́)\s+/i, '').trim();

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
            feedback.innerHTML = `✅ Отлично! <strong>${this.currentQuestion.pronoun} ${this.currentQuestion.expected}</strong> (+10 очков).`;
        } else {
            this.gameStreak = 0;
            feedback.className = 'feedback-card wrong';
            feedback.innerHTML = `❌ Ошибка! Правильно: <strong>${this.currentQuestion.pronoun} ${this.currentQuestion.expected}</strong>.`;
        }
        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;
        document.getElementById('game-next-btn').style.display = 'block';
    }
}

let appEngine;
document.addEventListener('DOMContentLoaded', () => { appEngine = new RussianConjugationEngine(); });
