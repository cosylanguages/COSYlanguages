/**
 * COSYlanguages — days.js
 * Core logic for the Private Student Area (days.html)
 */

(function() {
    let currentCourse = null;
    let curriculum = [];
    let isTeacher = false;
    const TEACHER_PIN = '2025';

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
        isTeacher = false;
        document.body.classList.remove('teacher');
        window.location.reload();
    }

    function resetProgress() {
        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);
        if (!confirm(t('reset_confirm') || 'Reset all your progress? This cannot be undone.')) return;

        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        delete prog[currentCourse.code];
        localStorage.setItem('cosy_progress', JSON.stringify(prog));

        renderCurriculum();
        buildSidebar();
        updateProgressUI();
        showToast(t('progress_reset_toast') || 'Progress reset ↺');
    }

    // ── Teacher Mode ──

    function showPinModal() {
        const modal = document.getElementById('pin-modal');
        const input = document.getElementById('pin-input');
        const error = document.getElementById('pin-error');
        if (modal) modal.classList.add('show');
        if (input) input.value = '';
        if (error) error.style.display = 'none';
    }

    function hidePinModal() {
        const modal = document.getElementById('pin-modal');
        if (modal) modal.classList.remove('show');
    }

    function checkPin() {
        const input = document.getElementById('pin-input');
        const error = document.getElementById('pin-error');
        if (input.value === TEACHER_PIN) {
            isTeacher = true;
            document.body.classList.add('teacher');
            hidePinModal();
            updateModeUI();
            renderCurriculum();
            const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);
            showToast(t('teacher_mode_unlocked') || 'Teacher mode unlocked 👩‍🏫');
        } else {
            if (error) error.style.display = 'block';
            input.classList.add('err');
            setTimeout(() => input.classList.remove('err'), 500);
        }
    }

    function updateModeUI() {
        const badge = document.getElementById('mode-badge');
        const label = document.getElementById('tb-mode-label');
        const btn = document.getElementById('teacher-switch-btn');
        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);

        if (isTeacher) {
            if (badge) { badge.textContent = t('teacher_badge') || '👩‍🏫 Teacher'; badge.className = 'tb-mode teacher-mode'; }
            if (label) label.textContent = t('teacher_view_label') || 'Teacher View';
            if (btn) { btn.textContent = t('lock_teacher_btn') || '🔒 Lock Teacher Mode'; btn.onclick = lockTeacher; }
        } else {
            if (badge) { badge.textContent = t('student_badge') || '👤 Student'; badge.className = 'tb-mode'; }
            if (label) label.textContent = t('student_view_label') || 'Student View';
            if (btn) { btn.textContent = t('switch_to_teacher_btn') || '👩‍🏫 Switch to Teacher'; btn.onclick = showPinModal; }
        }
    }

    function lockTeacher() {
        isTeacher = false;
        document.body.classList.remove('teacher');
        updateModeUI();
        renderCurriculum();
        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);
        showToast(t('teacher_mode_locked') || 'Teacher mode locked 🔒');
    }

    function showToast(msg) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }

    function copyText(text) {
        if (!navigator.clipboard) return;
        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);
        navigator.clipboard.writeText(text).then(() => {
            showToast(t('copied_to_clipboard') || 'Copied to clipboard! 📋');
        });
    }

    // ── Dashboard Core ──────────────────────────────────

    async function initDashboard() {
        const gate = document.getElementById('gate');
        const layout = document.getElementById('main-layout');
        const topbar = document.getElementById('topbar');
        const area = document.getElementById('area');
        const nav = document.getElementById('main-nav');

        if (gate) gate.style.display = 'none';
        if (nav) nav.style.display = 'none';
        if (layout) layout.style.display = 'grid';
        if (topbar) topbar.style.display = 'flex';
        if (area) area.style.display = 'block';

        const { lang, level, type } = currentCourse;
        const langInfo = (typeof LANGS !== 'undefined' && LANGS[lang]) ? LANGS[lang] : { label: lang, flag: '🌐' };
        const levelLabel = (typeof LEVELS !== 'undefined' && LEVELS[level]) ? LEVELS[level] : level;
        const typeInfo = (typeof TYPES !== 'undefined' && TYPES[type]) ? TYPES[type] : { label: type, icon: '📖' };

        // Update Header
        const wh = document.getElementById('wh');
        const wp = document.getElementById('wp');
        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);

        if (wh) wh.textContent = t('welcome_back');
        if (wp) {
            const template = t('your_personalised_curriculum');
            wp.textContent = template.includes('{0}') ? template.replace('{0}', langInfo.label) : `Your personalised ${langInfo.label} curriculum`;
        }

        // Topbar meta
        const tbCourse = document.getElementById('tb-course-name');
        if (tbCourse) tbCourse.textContent = `${langInfo.label} ${levelLabel}`;

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
        buildSidebar();
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

        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);

        ls.innerHTML = '';
        ds.innerHTML = '';
        const defaultOpt = createEl('option', '', t('select_day_placeholder'));
        defaultOpt.value = '';
        ds.appendChild(defaultOpt);

        // Fallback to CURRICULUM object from curriculum_data.js if local curriculum is empty
        if (!curriculum.length) {
            const { lang, level, type } = currentCourse;
            if (window.CURRICULUM && window.CURRICULUM[lang] && window.CURRICULUM[lang][type] && window.CURRICULUM[lang][type][level]) {
                const raw = window.CURRICULUM[lang][type][level];
                if (Array.isArray(raw)) {
                    curriculum = [{ lessons: raw }];
                }
            }
        }

        // Flatten curriculum if it contains units
        let allLessons = [];
        if (curriculum.length > 0) {
            curriculum.forEach(unit => {
                if (unit.lessons && Array.isArray(unit.lessons)) {
                    allLessons.push(...unit.lessons);
                }
            });
        }

        if (!allLessons.length) {
            const emptyDiv = createEl('div', 'empty');
            emptyDiv.append(createEl('h3', '', t('curriculum_coming_soon')));
            emptyDiv.append(createEl('p', '', t('curriculum_coming_soon_desc')));
            ls.appendChild(emptyDiv);
            return;
        }

        allLessons.forEach((lesson, idx) => {
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
                    <div class="l-day-num">${dayNum}</div>
                    <div class="l-head-left">
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
                        <button class="tab-btn active" data-target="ov-${dayNum}" data-translate-key="overview_tab">${t('overview_tab')}</button>
                        <button class="tab-btn" data-target="gr-${dayNum}" data-translate-key="grammar_tab">${t('grammar_tab')}</button>
                        <button class="tab-btn" data-target="vo-${dayNum}" data-translate-key="vocab_tab">${t('vocab_tab')}</button>
                        <button class="tab-btn" data-target="rf-${dayNum}" data-translate-key="refs_tab">${t('refs_tab')}</button>
                        ${isTeacher ? `<button class="tab-btn" data-target="tn-${dayNum}" style="color:var(--gold)">👩‍🏫 Notes</button>` : ''}
                    </div>

                    <div class="tab-panel active" id="ov-${dayNum}">
                        ${lesson.cando ? `<div class="obj-bar">${lesson.cando}</div>` : ''}

                        <div class="chips">
                            ${(lesson.skills || []).map(s => `<span class="chip chip-${s}">${s}</span>`).join('')}
                        </div>
                        <p class="l-desc">${lesson.desc || 'No description available.'}</p>

                        ${renderRoleplaySection(lesson)}
                        ${renderCulturalSection(lesson)}

                        <div class="l-actions">
                            <a href="lesson.html?lang=${currentCourse.lang.toLowerCase()}&lesson=${dayNum}"
                               class="btn-start-new ${dayNum > nextLessonNum ? 'locked' : ''}" data-translate-key="start_lesson_btn">
                               ${t('start_lesson_btn')}
                            </a>
                            <button class="btn-mark-new ${isDone ? 'done' : ''}" data-day="${dayNum}" data-translate-key="${isDone ? 'completed_btn' : 'mark_as_done'}">
                                ${isDone ? t('completed_btn') : t('mark_as_done')}
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

                    ${isTeacher ? `
                    <div class="tab-panel" id="tn-${dayNum}">
                        ${renderTeacherTabContent(lesson)}
                    </div>
                    ` : ''}
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
        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);

        if (lesson.phrases && lesson.phrases.length) {
            const phrasesHtml = lesson.phrases.map((p, i) => `
                <div class="phrase-item">
                    <div class="ph-text">
                        <div class="ph-en">${p.en}</div>
                        <div class="ph-translations">${p.fr || p.it || p.ru || p.el || ''}</div>
                    </div>
                    <button class="ph-copy" onclick="cosyDays.copyText('${p.en.replace(/'/g, "\\'")}')">Copy</button>
                </div>
            `).join('');
            return `<div class="sb-label" style="padding:0 0 .5rem 0;">💬 Key Phrases</div><div class="phrases-list">${phrasesHtml}</div>` +
                   renderGrammarPoints(lesson);
        }

        return renderGrammarPoints(lesson);
    }

    function renderGrammarPoints(lesson) {
        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);
        const points = lesson.grammarPoints || (Array.isArray(lesson.grammar) ? lesson.grammar : []);
        if (!points || !points.length) {
            return `<p class="vocab-intro" data-translate-key="grammar_summary_soon">${t('grammar_summary_soon')}</p>
                    <a href="grammar-reference.html?lang=${currentCourse.lang.toLowerCase()}" class="plink" data-translate-key="open_grammar_hub">${t('open_grammar_hub')}</a>`;
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
        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);
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
            return `<p class="vocab-intro" data-translate-key="vocab_list_soon">${t('vocab_list_soon')}</p>
                    <a href="vocabulary-reference.html?lang=${currentCourse.lang.toLowerCase()}" class="plink" data-translate-key="open_vocab_ref">${t('open_vocab_ref')}</a>`;
        }

        return `
            <div class="vocab-grid">
                ${words.map(w => `
                    <div class="vocab-card" onclick="cosyDays.copyText('${w.w.replace(/'/g, "\\'")}')">
                        <div class="vc-word">${w.w}</div>
                        <div class="vc-phon">${w.phon || ''}</div>
                        <div class="vc-def">${w.trans || ''}</div>
                    </div>
                `).join('')}
            </div>
            <div class="vocab-actions">
                <a href="practice.html?lang=${currentCourse.lang.toLowerCase()}&cat=vocab&theme=${encodeURIComponent(lesson.practiceTheme || '')}" class="plink hi" data-translate-key="flashcards_quiz_btn">
                    ${t('flashcards_quiz_btn')}
                </a>
            </div>
        `;
    }

    function renderRoleplaySection(lesson) {
        if (!lesson.roleplay) return '';
        const rp = lesson.roleplay;
        return `
            <div class="roleplay-card">
                <div class="sb-label" style="color:var(--sky); padding:0 0 .5rem 0;">🎭 Role-play</div>
                <div class="rp-scenario">"${rp.scenario}"</div>
                <div class="rp-roles">
                    ${(rp.roles || []).map(r => `
                        <div class="rp-role">
                            <div class="rp-role-label">${r.label}</div>
                            <div class="rp-instructions">${r.instructions}</div>
                            <div class="rp-prompts">
                                ${(r.prompts || []).map(p => `<div class="rp-prompt">${p}</div>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function renderCulturalSection(lesson) {
        if (!lesson.cultural || !lesson.cultural.length) return '';
        return `
            <div class="culture-accordion">
                <div class="sb-label" style="padding:0 0 .5rem 0;">🌍 Country Notes</div>
                ${lesson.cultural.map((c, i) => `
                    <div class="ca-country" id="ca-${lesson.code}-${i}">
                        <div class="ca-header" onclick="this.parentElement.classList.toggle('open')">
                            <span class="ca-flag">${c.flag || '📍'}</span>
                            <span class="ca-name">${c.country}</span>
                            <span class="ca-arr">▼</span>
                        </div>
                        <div class="ca-body">${c.note}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderTeacherTabContent(lesson) {
        const t = lesson.teacher || {};
        return `
            <div class="teacher-panel">
                ${t.timing ? `<div class="timing-badge">${t.timing}</div>` : ''}

                <div style="margin-bottom:1rem">
                    <div class="tp-label">🎯 Lesson Aim</div>
                    <div class="tp-body">${t.aim || 'Focus on confidence and practical use.'}</div>
                </div>

                ${t.teacher_notes ? `
                <div style="margin-bottom:1rem">
                    <div class="tp-label">📝 Teacher Notes</div>
                    <div class="tp-body">${t.teacher_notes}</div>
                </div>
                ` : ''}

                ${(t.tips || []).map(tip => `<div class="tp-tip">${tip}</div>`).join('')}

                ${t.discussion ? `
                <div style="margin-top:1rem">
                    <div class="tp-label">💬 Discussion Opener</div>
                    <div class="tp-body" style="font-style:italic">"${t.discussion}"</div>
                </div>
                ` : ''}

                ${t.adaptations ? `
                <div style="margin-top:1rem">
                    <div class="tp-label">🔧 Adaptations by Level</div>
                    <div class="adapt-grid">
                        ${t.adaptations.map(a => `
                            <div class="adapt-item">
                                <div class="adapt-level ${a.level.toLowerCase()}">${a.level}</div>
                                <div class="adapt-desc">${a.desc}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    function renderRefsTabContent() {
        const t = window.t || (window.gameUtils && window.gameUtils.t) || ((k) => k);
        const lang = currentCourse.lang;
        const level = currentCourse.level;
        const pLevel = (level === 'A1' ? 'starter' : level.toLowerCase());
        const query = `?lang=${lang.toLowerCase()}&level=${pLevel}`;

        const internalRefs = [
            { group: t('learning_resources'), items: [
                { icon: "📓", name: t('workbook_btn'), desc: "Your personal exercises & notes", url: `workbook.html${query}` },
                { icon: "📐", name: t('grammar_ref_btn'), desc: "Interactive grammar reference", url: `grammar-reference.html${query}` },
                { icon: "📖", name: t('vocab_ref_btn'), desc: "Interactive vocabulary lists", url: `vocabulary-reference.html${query}` },
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

        // Ensure lesson is open
        const el = document.getElementById(`day-${day}`);
        if (el && !el.classList.contains('open')) {
            toggleLesson(day);
        } else if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // On mobile, maybe we want to close the sidebar if we had one,
        // but here it's just hidden by CSS.
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
        buildSidebar();
        updateProgressUI();
    }

    function getAllLessonsCount() {
        let total = 0;
        curriculum.forEach(unit => {
            if (unit.lessons) total += unit.lessons.length;
        });
        return total;
    }

    function getNextLessonNum() {
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const done = prog[currentCourse.code] || [];
        const total = getAllLessonsCount();

        for (let i = 1; i <= total; i++) {
            if (!done.includes(i)) return i;
        }
        return done.length > 0 ? done.length : 1;
    }

    function updateProgressUI() {
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const done = (currentCourse && prog[currentCourse.code]) ? prog[currentCourse.code] : [];
        const total = getAllLessonsCount();

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

    function buildSidebar() {
        const lsCont = document.getElementById('ls');
        const sb = document.getElementById('sb-content');
        if (!lsCont || !sb) return;

        const { lang, level, type } = currentCourse;
        const pLevel = (level === 'A1' ? 'starter' : level.toLowerCase());
        const query = `?lang=${lang.toLowerCase()}&level=${pLevel}`;

        // Get curriculum count
        let allLessons = [];
        if (curriculum.length > 0) {
            curriculum.forEach(unit => {
                if (unit.lessons && Array.isArray(unit.lessons)) {
                    allLessons.push(...unit.lessons);
                }
            });
        }

        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const doneSet = new Set(prog[currentCourse.code] || []);

        const pct = allLessons.length ? Math.round(doneSet.size / allLessons.length * 100) : 0;
        const pf = document.getElementById('sb-pf');
        const pc = document.getElementById('sb-pc');
        if (pf) pf.style.width = pct + '%';
        if (pc) pc.textContent = `${doneSet.size} / ${allLessons.length} lessons complete`;

        sb.innerHTML = (curriculum.length > 0 ? curriculum : [{lessons: allLessons}]).map((unit, uIdx) => {
            const unitLabel = unit.label || `Unit ${uIdx + 1}`;
            const unitEmoji = unit.emoji || '📘';

            const lessonsHtml = (unit.lessons || []).map(l => {
                const dayNum = allLessons.indexOf(l) + 1;
                const isDone = doneSet.has(dayNum);
                return `
                    <a class="sb-item${isDone ? ' done' : ''}" id="sb-day-${dayNum}" onclick="cosyDays.jumpTo(${dayNum})">
                        <span class="sb-num">${dayNum}</span>
                        <span style="flex:1">${l.title}</span>
                        <span class="sb-check">✓</span>
                    </a>
                `;
            }).join('');

            return `
                <div class="sb-unit">
                    <div class="sb-label">${unitLabel}</div>
                    ${lessonsHtml}
                </div>
            `;
        }).join('');

        // Also add quick links
        sb.innerHTML += `
            <div class="sb-unit" style="margin-top: 1rem; border-top: 1px solid var(--border); padding-top: 1rem;">
                <div class="sb-label">Resources</div>
                <a class="sb-item" href="workbook.html${query}"><span class="sb-num">📓</span> Workbook</a>
                <a class="sb-item" href="grammar-reference.html${query}"><span class="sb-num">📐</span> Grammar Ref</a>
                <a class="sb-item" href="vocabulary-reference.html${query}"><span class="sb-num">📖</span> Vocab Ref</a>
            </div>
        `;
    }

    // Global scope exposures for HTML calls
    window.cosyDays = {
        unlock,
        logout,
        jumpTo,
        buildSidebar,
        showPinModal,
        hidePinModal,
        checkPin,
        lockTeacher,
        resetProgress,
        showToast,
        copyText
    };
})();
