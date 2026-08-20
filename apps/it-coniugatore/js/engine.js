class ItalianConjugationEngine {
    constructor() {
        this.verbDb = {};
        this.isGameActive = false;
        this.gameScore = 0;
        this.gameStreak = 0;
        this.currentQuestion = null;
        this.gamePracticeMode = 'conjugation';
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
            box.innerHTML = matches.slice(0, 6).map(v => `
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
        const box = document.getElementById('search-suggestions');
        if (box) box.style.display = 'none';
        if (this.verbDb[q]) {
            this.renderVerb(q, this.verbDb[q]);
        } else if (q) {
            let stem = q.slice(0, -3);
            this.renderVerb(q, {
                group: q.endsWith('are') ? '1ª coniugazione (-are)' : (q.endsWith('ere') ? '2ª coniugazione (-ere)' : '3ª coniugazione (-ire)'),
                auxiliary: 'avere',
                definition: `Azione del verbo ${q}.`,
                usage_hint: `${q} + oggetto diretto`,
                antonyms: [],
                tenses: {
                    pres: [`io ${stem}o`, `tu ${stem}i`, `lui/lei ${stem}a`, `noi ${stem}iamo`, `voi ${stem}ate`, `loro ${stem}ano`],
                    imp: [`io ${stem}avo`, `tu ${stem}avi`, `lui/lei ${stem}ava`, `noi ${stem}avamo`, `voi ${stem}avate`, `loro ${stem}avano`],
                    pc: [`ho ${stem}ato`, `hai ${stem}ato`, `ha ${stem}ato`, `abbiamo ${stem}ato`, `avete ${stem}ato`, `hanno ${stem}ato`],
                    trap_pass: [`avevo ${stem}ato`, `avevi ${stem}ato`, `aveva ${stem}ato`, `avevamo ${stem}ato`, `avevate ${stem}ato`, `avevano ${stem}ato`],
                    fut: [`io ${stem}erò`, `tu ${stem}erai`, `lui/lei ${stem}erà`, `noi ${stem}eremo`, `voi ${stem}erete`, `loro ${stem}eranno`],
                    fut_ant: [`avrò ${stem}ato`, `avrai ${stem}ato`, `avrà ${stem}ato`, `avremo ${stem}ato`, `avrete ${stem}ato`, `avranno ${stem}ato`],
                    subj: [`che io ${stem}i`, `che tu ${stem}i`, `che lui/lei ${stem}i`, `che noi ${stem}iamo`, `che voi ${stem}iate`, `che loro ${stem}ino`],
                    subj_pass: [`abbia ${stem}ato`, `abbia ${stem}ato`, `abbia ${stem}ato`, `abbiamo ${stem}ato`, `abbiate ${stem}ato`, `abbiano ${stem}ato`],
                    subj_imp: [`${stem}assi`, `${stem}assi`, `${stem}asse`, `${stem}assimo`, `${stem}aste`, `${stem}assero`],
                    cond: [`${stem}erei`, `${stem}eresti`, `${stem}erebbe`, `${stem}eremmo`, `${stem}ereste`, `${stem}erebbero`],
                    cond_pass: [`avrei ${stem}ato`, `avresti ${stem}ato`, `avrebbe ${stem}ato`, `avremmo ${stem}ato`, `avreste ${stem}ato`, `avrebbero ${stem}ato`],
                    impv: [`${stem}a!`, `${stem}iamo!`, `${stem}ate!`],
                    part: [`${stem}ando`, `${stem}ato`]
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
        const tenseIdList = ['pres', 'imp', 'pc', 'trap_pass', 'fut', 'fut_ant', 'subj', 'subj_pass', 'subj_imp', 'cond', 'cond_pass', 'impv', 'part'];

        const tenseAliases = {
            pres: ['pres', 'presente'],
            imp: ['imp', 'imperfetto', 'impf'],
            pc: ['pc', 'pass_comp', 'passato_prossimo'],
            trap_pass: ['trap_pass', 'trapassato_prossimo'],
            fut: ['fut', 'futuro_semplice', 'futuro'],
            fut_ant: ['fut_ant', 'futuro_anteriore'],
            subj: ['subj', 'congiuntivo_presente'],
            subj_pass: ['subj_pass', 'congiuntivo_passato'],
            subj_imp: ['subj_imp', 'congiuntivo_imperfetto'],
            cond: ['cond', 'condizionale_presente'],
            cond_pass: ['cond_pass', 'condizionale_passato'],
            impv: ['impv', 'imperativo'],
            part: ['part', 'participio_passato']
        };

        for (let t of tenseIdList) {
            const list = document.getElementById(`tense-${t}`);
            let forms = null;
            if (data.tenses) {
                for (let alias of (tenseAliases[t] || [t])) {
                    if (data.tenses[alias]) {
                        forms = data.tenses[alias];
                        break;
                    }
                }
            }
            if (list && forms) {
                list.innerHTML = forms.map((f, i) => {
                    const cleanForm = f.replace(/^(io|tu|lui\/lei|lui|lei|noi|voi|loro|che io|che tu|che lui\/lei|che noi|che voi|che loro)\s+/i, '').trim();
                    return `<li><span class="pronoun">${pronouns[i] || ''}</span> <span>${this.formatColorCoded(cleanForm)}</span></li>`;
                }).join('');
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

    setPracticeMode(mode) {
        this.gamePracticeMode = mode;
        const cBtn = document.getElementById('mode-conj-btn');
        const gBtn = document.getElementById('mode-prep-btn');
        if (cBtn && gBtn) {
            cBtn.className = mode === 'conjugation' ? 'badge active-mode' : 'badge';
            gBtn.className = mode === 'preposition' ? 'badge active-mode' : 'badge';
        }
        this.nextGameQuestion();
    }

    nextGameQuestion() {
        if (this.gamePracticeMode === 'preposition') {
            this.nextPrepositionQuestion();
            return;
        }
        const gameAnsInput = document.getElementById('game-answer-input');
        const mcGroup = document.getElementById('game-mc-options');
        if (gameAnsInput && gameAnsInput.parentElement) gameAnsInput.parentElement.style.display = 'flex';
        if (mcGroup) mcGroup.style.display = 'none';
        const verbs = Object.keys(this.verbDb);
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
        const data = this.verbDb[randomVerb];
        const pronouns = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
        const pIdx = Math.floor(Math.random() * 6);
        const presForms = data.tenses.pres || data.tenses.presente || [];
        const target = presForms[pIdx] ? presForms[pIdx].replace(/^(io|tu|lui\/lei|noi|voi|loro)\s+/i, '') : 'parla';

        this.currentQuestion = { verb: randomVerb, pronoun: pronouns[pIdx], expected: target };
        document.getElementById('game-verb-prompt').textContent = randomVerb;
        document.getElementById('game-pronoun-prompt').textContent = pronouns[pIdx];
        document.getElementById('game-feedback-box').style.display = 'none';
        document.getElementById('game-next-btn').style.display = 'none';
        const inp = document.getElementById('game-answer-input');
        inp.value = ''; inp.disabled = false; inp.focus();
    }

    nextPrepositionQuestion() {
        const inputGroup = document.querySelector('.game-input-group');
        let mcGroup = document.getElementById('game-mc-options');
        if (inputGroup) inputGroup.style.display = 'none';
        if (!mcGroup) {
            mcGroup = document.createElement('div');
            mcGroup.id = 'game-mc-options';
            mcGroup.className = 'mc-options-grid';
            document.querySelector('.game-prompt-box').insertAdjacentElement('afterend', mcGroup);
        }
        mcGroup.style.display = 'grid';

        const verbsWithHints = Object.keys(this.verbDb).filter(k => this.verbDb[k].usage_hint);
        if (verbsWithHints.length === 0) return;

        const targetVerb = verbsWithHints[Math.floor(Math.random() * verbsWithHints.length)];
        const correctHint = this.verbDb[targetVerb].usage_hint;

        const uniqueHints = Array.from(new Set(verbsWithHints.map(k => this.verbDb[k].usage_hint).filter(h => h !== correctHint)));
        uniqueHints.sort(() => 0.5 - Math.random());
        const distractors = uniqueHints.slice(0, 3);
        const options = [correctHint, ...distractors].sort(() => 0.5 - Math.random());

        this.currentQuestion = { verb: targetVerb, expected: correctHint, isPreposition: true };

        document.getElementById('game-verb-prompt').textContent = targetVerb;
        document.getElementById('game-tense-badge').textContent = 'Preposizioni & Uso';
        document.getElementById('game-pronoun-prompt').textContent = "Scegli l\'uso corretto :";

        mcGroup.innerHTML = options.map(opt => `
            <button class="mc-option-btn" onclick="appEngine.checkPrepositionChoice('${opt.replace(/'/g, "\'")}')">${opt}</button>
        `).join('');

        document.getElementById('game-feedback-box').style.display = 'none';
        document.getElementById('game-submit-btn').style.display = 'none';
        document.getElementById('game-next-btn').style.display = 'none';
    }

    checkPrepositionChoice(selected) {
        if (!this.currentQuestion) return;
        const isCorrect = selected === this.currentQuestion.expected;
        const feedbackBox = document.getElementById('game-feedback-box');
        feedbackBox.style.display = 'block';

        if (isCorrect) {
            this.gameScore += 10; this.gameStreak += 1;
            feedbackBox.className = 'feedback-card correct';
            feedbackBox.innerHTML = `✅ Eccellente! <strong>${this.currentQuestion.verb}</strong> ➔ ${selected} (+10 pti).`;
        } else {
            this.gameStreak = 0;
            feedbackBox.className = 'feedback-card wrong';
            feedbackBox.innerHTML = `❌ Ops! La risposta corretta era: <strong>${this.currentQuestion.verb}</strong> ➔ <strong>${this.currentQuestion.expected}</strong>.`;
        }

        document.getElementById('game-score').textContent = this.gameScore;
        document.getElementById('game-streak').textContent = this.gameStreak;
        document.getElementById('game-next-btn').style.display = 'block';
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
