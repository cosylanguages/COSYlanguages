/**
 * COSYlanguages — days.js
 * Core logic for the Private Student Area (days.html)
 */

(function() {
    let currentCourse = null;
    let curriculum = [];

    // ── Authentication & Initialization ───────────────────

    document.addEventListener('DOMContentLoaded', () => {
        const unlocked = localStorage.getItem('student_unlocked') === 'true';
        const code = localStorage.getItem('student_course_code');

        if (unlocked && code && typeof COURSES !== 'undefined' && COURSES[code]) {
            currentCourse = { ...COURSES[code], code: code };
            initDashboard();
        } else {
            const gate = document.getElementById('gate');
            const area = document.getElementById('area');
            if (gate) gate.style.display = 'flex';
            if (area) area.style.display = 'none';
        }
    });

    function unlock() {
        const input = document.getElementById('ci');
        const errMsg = document.getElementById('em');
        if (!input || !errMsg) return;

        const code = input.value.trim().toUpperCase();

        if (typeof COURSES !== 'undefined' && COURSES[code]) {
            localStorage.setItem('student_unlocked', 'true');
            localStorage.setItem('student_course_code', code);
            currentCourse = { ...COURSES[code], code: code };
            errMsg.style.display = 'none';
            initDashboard();
        } else {
            errMsg.style.display = 'block';
            input.classList.add('err');
            setTimeout(() => input.classList.remove('err'), 500);
        }
    }

    function logout() {
        localStorage.removeItem('student_unlocked');
        localStorage.removeItem('student_course_code');
        window.location.reload();
    }

    // ── Dashboard Core ──────────────────────────────────

    async function initDashboard() {
        const gate = document.getElementById('gate');
        const area = document.getElementById('area');
        if (gate) gate.style.display = 'none';
        if (area) area.style.display = 'block';

        const { lang, level, type } = currentCourse;
        const langInfo = (typeof LANGS !== 'undefined' && LANGS[lang]) ? LANGS[lang] : { label: lang, flag: '🌐' };
        const levelLabel = (typeof LEVELS !== 'undefined' && LEVELS[level]) ? LEVELS[level] : level;
        const typeInfo = (typeof TYPES !== 'undefined' && TYPES[type]) ? TYPES[type] : { label: type, icon: '📖' };

        // Update Header
        const wh = document.getElementById('wh');
        const wp = document.getElementById('wp');
        if (wh) wh.textContent = `Welcome back 👋`;
        if (wp) wp.textContent = `Your personalised ${langInfo.label} curriculum`;

        // Update Badges
        const badgeCont = document.getElementById('bdg');
        if (badgeCont) {
            badgeCont.innerHTML = '';
            const bLang = createEl('span', 'badge b-lang', `${langInfo.flag} ${langInfo.label}`);
            const bLevel = createEl('span', 'badge b-level', `🎯 ${levelLabel}`);
            const bCourse = createEl('span', 'badge b-course', `${typeInfo.icon} ${typeInfo.label}`);
            badgeCont.append(bLang, bLevel, bCourse);
        }

        // Library Links
        const pLevel = (level === 'A1' ? 'starter' : level.toLowerCase());
        const query = `?lang=${lang.toLowerCase()}&level=${pLevel}`;

        const workbookBtn = document.getElementById('open-workbook-btn');
        const grammarBtn = document.getElementById('open-grammar-ref-btn');
        const vocabBtn = document.getElementById('open-vocab-ref-btn');

        if (workbookBtn) workbookBtn.onclick = () => window.location.href = `workbook.html${query}`;
        if (grammarBtn) grammarBtn.onclick = () => window.location.href = `grammar-reference.html${query}`;
        if (vocabBtn) vocabBtn.onclick = () => window.location.href = `vocabulary-reference.html${query}`;

        // Load curriculum data
        await loadCurriculumData(lang, level);
        renderCurriculum();
        updateProgressUI();
    }

    async function loadCurriculumData(lang, level) {
        const dataKey = `${lang.toLowerCase()}_${level.toLowerCase()}`;
        const path = `js/data/curriculum/${dataKey}.js`;

        return new Promise((resolve) => {
            if (document.querySelector(`script[src="${path}"]`)) {
                if (window.curriculumData && window.curriculumData[dataKey]) {
                    curriculum = window.curriculumData[dataKey];
                }
                return resolve();
            }
            const script = document.createElement('script');
            script.src = path;
            script.onload = () => {
                if (window.curriculumData && window.curriculumData[dataKey]) {
                    curriculum = window.curriculumData[dataKey];
                }
                resolve();
            };
            script.onerror = () => {
                console.warn(`Curriculum data not found for ${dataKey}`);
                resolve();
            };
            document.head.appendChild(script);
        });
    }

    // ── Rendering Utilities ──────────────────────────

    function createEl(tag, className, text) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (text) el.textContent = text;
        return el;
    }

    // ── Rendering ──────────────────────────────────────

    function renderCurriculum() {
        const ls = document.getElementById('ls');
        const ds = document.getElementById('ds');
        if (!ls || !ds) return;

        ls.innerHTML = '';
        ds.innerHTML = '';
        const defaultOpt = createEl('option', '', 'Select day...');
        defaultOpt.value = '';
        ds.appendChild(defaultOpt);

        // Fallback to CURRICULUM object from curriculum_data.js if local curriculum is empty
        if (!curriculum.length) {
            const { lang, level, type } = currentCourse;
            if (window.CURRICULUM && window.CURRICULUM[lang] && window.CURRICULUM[lang][type] && window.CURRICULUM[lang][type][level]) {
                curriculum = [{ lessons: window.CURRICULUM[lang][type][level] }];
            }
        }

        if (!curriculum.length || !curriculum[0].lessons || !Array.isArray(curriculum[0].lessons)) {
            const emptyDiv = createEl('div', 'empty');
            emptyDiv.append(createEl('h3', '', 'Curriculum coming soon! 🚧'));
            emptyDiv.append(createEl('p', '', 'Your learning path is being prepared by our team.'));
            ls.appendChild(emptyDiv);
            return;
        }

        const lessons = curriculum[0].lessons;
        lessons.forEach((lesson, idx) => {
            const dayNum = idx + 1;

            // Add to Jump Select
            const opt = createEl('option', '', `Day ${dayNum}: ${lesson.title}`);
            opt.value = dayNum;
            ds.appendChild(opt);

            // Create Lesson Card
            const lessonEl = createEl('div', 'lesson');
            lessonEl.id = `day-${dayNum}`;

            const isDone = isLessonDone(dayNum);
            const nextLessonNum = getNextLessonNum();
            const statusLabel = isDone ? 'DONE' : (dayNum === nextLessonNum ? 'CURRENT' : 'LOCKED');
            const statusClass = isDone ? 's-done' : (dayNum === nextLessonNum ? 's-current' : 's-locked');

            const sub = (typeof lesson.grammar === 'string') ? lesson.grammar : (lesson.subtitle || '');

            // Use innerHTML for the complex card structure, but keep it as safe as possible
            lessonEl.innerHTML = `
                <div class="l-head" data-day="${dayNum}">
                    <div class="l-head-left">
                        <div class="l-day-num">Day ${dayNum}</div>
                        <div class="l-title">${lesson.title}</div>
                        <div class="l-sub">${sub}</div>
                    </div>
                    <div class="l-head-right">
                        <span class="spill ${statusClass}">${statusLabel}</span>
                        <span class="exp-icon">▼</span>
                    </div>
                </div>
                <div class="l-body">
                    <div class="tabs-bar">
                        <button class="tab-btn active" data-target="ov-${dayNum}">Overview</button>
                        <button class="tab-btn" data-target="gr-${dayNum}">Grammar</button>
                        <button class="tab-btn" data-target="vo-${dayNum}">Vocabulary</button>
                        <button class="tab-btn" data-target="rf-${dayNum}">References</button>
                    </div>

                    <div class="tab-panel active" id="ov-${dayNum}">
                        <div class="chips">
                            ${(lesson.skills || []).map(s => `<span class="chip chip-${s}">${s}</span>`).join('')}
                        </div>
                        <p class="l-desc">${lesson.desc || 'No description available.'}</p>
                        <div class="l-actions">
                            <a href="lesson.html?lang=${currentCourse.lang.toLowerCase()}&lesson=${dayNum}"
                               class="btn-start-new ${dayNum > nextLessonNum ? 'locked' : ''}">
                               Start Lesson 🚀
                            </a>
                            <button class="btn-mark-new ${isDone ? 'done' : ''}" data-day="${dayNum}">
                                ${isDone ? '✓ Completed' : 'Mark as done'}
                            </button>
                            <span class="dur-label">🕒 ${lesson.duration || '60 min'}</span>
                        </div>
                    </div>

                    <div class="tab-panel" id="gr-${dayNum}">
                        ${renderGrammarTabContent(lesson)}
                    </div>

                    <div class="tab-panel" id="vo-${dayNum}">
                        ${renderVocabTabContent(lesson)}
                    </div>

                    <div class="tab-panel" id="rf-${dayNum}">
                        ${renderRefsTabContent()}
                    </div>
                </div>
            `;

            // Event Listeners for the card
            const head = lessonEl.querySelector('.l-head');
            head.onclick = () => toggleLesson(dayNum);

            const tabBtns = lessonEl.querySelectorAll('.tab-btn');
            tabBtns.forEach(btn => {
                btn.onclick = (e) => {
                    switchTab(e.target, e.target.dataset.target);
                };
            });

            const markBtn = lessonEl.querySelector('.btn-mark-new');
            markBtn.onclick = () => toggleLessonDone(dayNum);

            ls.appendChild(lessonEl);
        });
    }

    function renderGrammarTabContent(lesson) {
        const points = lesson.grammarPoints || (Array.isArray(lesson.grammar) ? lesson.grammar : []);
        if (!points || !points.length) {
            return `<p class="vocab-intro">Grammar summary coming soon.</p>
                    <a href="grammar-reference.html?lang=${currentCourse.lang.toLowerCase()}" class="plink">Open Grammar Hub 📐</a>`;
        }

        return points.map(p => `
            <div class="gram-point">
                <div class="gram-heading">
                    ${p.point} <span class="gram-tag">${p.tag || ''}</span>
                </div>
                <p class="gram-explain">${p.explain || ''}</p>
                ${p.rule ? `<div class="gram-rule">${p.rule}</div>` : ''}
                <div class="ex-header-new"><span>Target</span><span>Translation</span></div>
                ${(p.examples || []).map(ex => `
                    <div class="ex-row-new">
                        <span class="ex-t">${ex.t}</span>
                        <span class="ex-e">${ex.e}</span>
                    </div>
                `).join('')}
                ${p.tip ? `<div class="gram-tip">${p.tip}</div>` : ''}
                <a href="practice.html?lang=${currentCourse.lang.toLowerCase()}&cat=grammar&theme=${encodeURIComponent(p.practiceTheme || p.point || '')}" class="plink hi">
                    Practice this point 🎯
                </a>
            </div>
        `).join('');
    }

    function renderVocabTabContent(lesson) {
        let words = [];
        if (lesson.vocabWords) words = lesson.vocabWords;
        else if (Array.isArray(lesson.vocab)) {
            if (typeof lesson.vocab[0] === 'string') {
                words = lesson.vocab.map(v => ({ w: v, trans: '...' }));
            } else {
                words = lesson.vocab.flatMap(g => g.words || []);
            }
        }

        if (!words.length) {
            return `<p class="vocab-intro">Key vocabulary list coming soon.</p>
                    <a href="vocabulary-reference.html?lang=${currentCourse.lang.toLowerCase()}" class="plink">Open Vocab Ref 📖</a>`;
        }

        return `
            <table class="vocab-table-new">
                <thead>
                    <tr><th>Word</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                    ${words.map(w => `
                        <tr>
                            <td>
                                <div class="v-word">${w.w}</div>
                                <div class="v-phon">${w.phon || ''}</div>
                            </td>
                            <td>
                                <div class="v-trans">${w.trans || ''}</div>
                                ${w.key ? '<span class="vtag key">KEY</span>' : ''}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="vocab-actions">
                <a href="practice.html?lang=${currentCourse.lang.toLowerCase()}&cat=vocab&theme=${encodeURIComponent(lesson.practiceTheme || '')}" class="plink hi">
                    Flashcards & Quiz 🚀
                </a>
            </div>
        `;
    }

    function renderRefsTabContent() {
        const lang = currentCourse.lang;
        const level = currentCourse.level;
        const pLevel = (level === 'A1' ? 'starter' : level.toLowerCase());
        const query = `?lang=${lang.toLowerCase()}&level=${pLevel}`;

        const internalRefs = [
            { group: "Course Tools", items: [
                { icon: "📓", name: "Open My Workbook", desc: "Your personal exercises & notes", url: `workbook.html${query}` },
                { icon: "📐", name: "Grammar Hub", desc: "Interactive grammar reference", url: `grammar-reference.html${query}` },
                { icon: "📖", name: "Vocab Reference", desc: "Interactive vocabulary lists", url: `vocabulary-reference.html${query}` },
            ]}
        ];

        const externalRefs = (typeof REFS !== 'undefined' && REFS[lang]) ? REFS[lang] : [];
        const allRefs = [...internalRefs, ...externalRefs];

        return allRefs.map(group => `
            <div class="ref-sec-title">${group.group}</div>
            <div class="ref-grid-new">
                ${group.items.map(item => `
                    <a href="${item.url}" target="${item.url.startsWith('http') ? '_blank' : '_self'}" class="ref-card-new">
                        <span class="ref-icon-new">${item.icon}</span>
                        <span class="ref-name-new">${item.name}</span>
                        <span class="ref-desc-new">${item.desc}</span>
                    </a>
                `).join('')}
            </div>
        `).join('');
    }

    // ── Interactions ──────────────────────────────────

    function toggleLesson(num) {
        const el = document.getElementById(`day-${num}`);
        if (!el) return;
        const isOpen = el.classList.contains('open');

        // Close others
        document.querySelectorAll('.lesson').forEach(l => l.classList.remove('open'));

        if (!isOpen) {
            el.classList.add('open');
            // Force layout
            void el.offsetHeight;
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function switchTab(btn, panelId) {
        const lesson = btn.closest('.lesson');
        lesson.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        lesson.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const panel = document.getElementById(panelId);
        if (panel) panel.classList.add('active');
    }

    function jumpTo(day) {
        if (!day) return;
        toggleLesson(day);
    }

    // ── Progress Management ────────────────────────────

    function isLessonDone(num) {
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const courseKey = currentCourse.code;
        return prog[courseKey] && prog[courseKey].includes(num);
    }

    function toggleLessonDone(num) {
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const courseKey = currentCourse.code;

        if (!prog[courseKey]) prog[courseKey] = [];

        const idx = prog[courseKey].indexOf(num);
        if (idx > -1) {
            prog[courseKey].splice(idx, 1);
        } else {
            prog[courseKey].push(num);
        }

        localStorage.setItem('cosy_progress', JSON.stringify(prog));
        renderCurriculum(); // Re-render to update labels/classes
        updateProgressUI();
    }

    function getNextLessonNum() {
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const done = prog[currentCourse.code] || [];
        const lessons = curriculum[0]?.lessons;
        const total = lessons ? lessons.length : 0;

        for (let i = 1; i <= total; i++) {
            if (!done.includes(i)) return i;
        }
        return done.length > 0 ? done.length : 1;
    }

    function updateProgressUI() {
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const done = (currentCourse && prog[currentCourse.code]) ? prog[currentCourse.code] : [];
        const lessons = curriculum[0]?.lessons;
        const total = lessons ? lessons.length : 0;

        const pf = document.getElementById('pf');
        const pc = document.getElementById('pc');
        const dt = document.getElementById('dt');

        const pct = total > 0 ? (done.length / total) * 100 : 0;
        if (pf) pf.style.width = `${pct}%`;
        if (pc) pc.textContent = `${done.length} / ${total}`;

        if (dt) {
            dt.innerHTML = '';
            const nextNum = getNextLessonNum();
            for (let i = 1; i <= total; i++) {
                const isDone = done.includes(i);
                const isCurrent = i === nextNum;
                const dot = createEl('div', `dot ${isDone ? 'dot-done' : (isCurrent ? 'dot-current' : 'dot-locked')}`, i);
                dot.onclick = () => jumpTo(i);
                dt.appendChild(dot);
            }
        }
    }

    // Global scope exposures for HTML calls
    window.cosyDays = {
        unlock,
        logout,
        jumpTo
    };
})();
