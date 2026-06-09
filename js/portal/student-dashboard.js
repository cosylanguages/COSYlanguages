/**
 * js/portal/student-dashboard.js
 * Student-specific dashboard logic (Roadmap, Notebook, Stats).
 */
(function() {
    'use strict';

    if (!window.cosyDays) return;

    Object.assign(window.cosyDays, {
        async checkBroadcast() {
            // Wait for Supabase to be ready
            let attempts = 0;
            while (!window.supabase && attempts < 50) {
                await new Promise(r => setTimeout(r, 100));
                attempts++;
            }
            if (!window.supabase) return;

            const { data } = await window.supabase
                .from('broadcasts')
                .select('message')
                .eq('active', true)
                .order('created_at', { ascending: false })
                .limit(1)
                .single();

            const banner = document.getElementById('broadcast-banner');
            if (!banner) return;

            if (data?.message) {
                banner.textContent = data.message;
                banner.style.display = 'block';
            } else {
                banner.style.display = 'none';
            }
        },

        async loadHomework() {
            const raw = sessionStorage.getItem('cosy_student');
            if (!raw) return;
            const student = JSON.parse(raw);

            // Wait for Supabase to be ready
            let attempts = 0;
            while (!window.supabase && attempts < 50) {
                await new Promise(r => setTimeout(r, 100));
                attempts++;
            }
            if (!window.supabase) {
                console.error("[COSY] Supabase not found after waiting");
                return;
            }

            const { data } = await window.supabase
                .from('homework')
                .select('id, task_description, unit_ref, status, due_date, created_at')
                .eq('student_id', student.id)
                .order('due_date', { ascending: true });

            this.renderHomework(data || []);
        },

        renderHomework(items) {
            const container = document.getElementById('homework-list');
            if (!container) return;
            if (items.length === 0) {
                container.innerHTML = '<div style="text-align: center; color: var(--ink-faint); padding: 2rem;">No homework assigned. Enjoy your free time! 🥳</div>';
                return;
            }
            container.innerHTML = items.map(hw => {
                const overdue = hw.status === 'pending' && hw.due_date && new Date(hw.due_date) < new Date();
                return `
                    <div class="hw-item ${overdue ? 'hw-overdue' : ''}">
                        <strong>${hw.task_description}</strong>
                        ${hw.unit_ref ? `<span class="hw-unit">${hw.unit_ref}</span>` : ''}
                        ${hw.due_date ? `<span class="hw-due">Due: ${new Date(hw.due_date).toLocaleDateString('en-GB')}</span>` : ''}
                        <span class="hw-status">${hw.status === 'done' ? '✓ Done' : overdue ? '⚠ Overdue' : 'Pending'}</span>
                    </div>`;
            }).join('');
        },

        async loadStudentData(code) {
            const students = await window.COSY?.sync();
            let profile = (students && code !== 'FREE') ? students[code] : window.COSY?.student;
            if (!profile && window.COSY?.student?.code === code) profile = window.COSY.student;
            const prefix = window.COSY?.getPrefix() || '../../';

            if (profile) {
                // Ensure consistent naming
                if (!profile.lang) profile.lang = profile.language;
                if (!profile.course) profile.course = profile.course_type;

                if (profile.nickname || profile.name) {
                    const welcome = document.getElementById('wh');
                    if (welcome) {
                        const welcomeTpl = (window.t && window.t('welcome_back')) || 'Welcome back';
                        const suffix = profile.isFree ? ` (${(window.t && window.t('free_learner')) || 'Free Learner'})` : '';
                        welcome.textContent = `${welcomeTpl}, ${profile.nickname || profile.name}${suffix}! 👋`;
                        if (profile.isFree) {
                            const wp = document.getElementById('wp');
                            if (wp) wp.innerHTML = `You are exploring the <strong>${profile.lang} ${profile.level}</strong> path. <a href="https://wa.me/330766784195" style="color:var(--cosy-green-dark)">Unlock full access →</a>`;
                        }
                    }
                }
                if (profile.nextLesson) {
                    const nextVal = document.getElementById('next-lesson-val');
                    if (nextVal) nextVal.textContent = profile.nextLesson.date;
                    const btnJoin = document.getElementById('btn-join');
                    if (btnJoin) btnJoin.href = profile.nextLesson.meetLink;
                    const btnMat = document.getElementById('btn-materials');
                    if (btnMat) btnMat.href = profile.nextLesson.materials;
                }

                // Homework Live Sync
                await this.loadHomework();
            }
        },

        updateStats() {
            const currentCourse = window.cosyDays.state.currentCourse;
            if (!currentCourse) return;

            const streak = localStorage.getItem('practice_streak') || '0';
            const points = parseInt(localStorage.getItem('cosy_total_points') || '0');
            const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
            const done = prog[currentCourse.code] || [];

            if (document.getElementById('streak-val')) document.getElementById('streak-val').textContent = streak;
            if (document.getElementById('points-val')) document.getElementById('points-val').textContent = points.toLocaleString();
            if (document.getElementById('done-val')) document.getElementById('done-val').textContent = done.length;
        },

        updatePrepCard() {
            const curriculum = window.cosyDays.state.curriculum;
            const currentCourse = window.cosyDays.state.currentCourse;
            if (!currentCourse || !curriculum) return;

            const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
            const done = prog[currentCourse.code] || [];
            const nextNum = done.length + 1;

            const allLessons = curriculum.flatMap(u => u.lessons || [u]);
            const nextLesson = allLessons[nextNum - 1];

            const nextVal = document.getElementById('next-lesson-val');
            if (nextVal) {
                if (nextLesson) nextVal.textContent = nextLesson.title;
                else nextVal.textContent = "All Done! 🎉";
            }

            const card = document.querySelector('.prep-card');
            const wordCont = document.getElementById('prep-words');

            if (nextLesson && nextLesson.vocab && wordCont) {
                card.style.display = 'block';
                wordCont.innerHTML = '';
                const raw = Array.isArray(nextLesson.vocab) ? nextLesson.vocab : [];
                const words = raw.slice(0, 5).map(w => typeof w === 'string' ? w : (w.w || w.word));

                words.forEach(w => {
                    const span = document.createElement('span');
                    span.className = 'prep-word';
                    span.textContent = w;
                    wordCont.appendChild(span);
                });
            } else if (card) {
                card.style.display = 'none';
            }
        },

        renderRoadmap() {
            const container = document.getElementById('roadmap-path');
            const curriculum = window.cosyDays.state.curriculum;
            const currentCourse = window.cosyDays.state.currentCourse;
            if (!container || !curriculum || !currentCourse) return;
            container.innerHTML = '';

            const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
            const done = prog[currentCourse.code] || [];
            const nextNum = done.length + 1;

            const lessons = curriculum.flatMap(u => u.lessons || [u]);

            lessons.forEach((l, idx) => {
                const num = idx + 1;
                const isDone = done.includes(num);
                const isCurrent = num === nextNum;

                const node = document.createElement('div');
                node.className = `chapter-node roadmap-unit ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}`;
                node.dataset.unitRef = l.code || num;
                node.textContent = num;
                node.title = l.title;
                node.onclick = () => window.cosyDays.showLD(l, num);
                container.appendChild(node);
            });
        },

        renderList() {
            const container = document.getElementById('ls');
            const curriculum = window.cosyDays.state.curriculum;
            const currentCourse = window.cosyDays.state.currentCourse;
            if (!container || !curriculum || !currentCourse) return;
            container.innerHTML = '';

            const lessons = curriculum.flatMap(u => u.lessons || [u]);
            const dayTpl = (window.t ? window.t('day_label') : 'Day');
            const startTpl = (window.t ? window.t('start_btn') : 'Start');

            lessons.forEach((l, idx) => {
                const num = idx + 1;
                const item = document.createElement('div');
                item.className = 'widget-card lesson-card-v2 roadmap-unit';
                item.dataset.unitRef = l.code || num;
                item.style.display = 'flex';
                item.style.alignItems = 'center';
                item.style.justifyContent = 'space-between';
                item.style.position = 'relative';
                item.style.overflow = 'hidden';

                const stripeClass = l.type ? `stripe-${l.type}` : '';
                const typeLabel = l.type ? `<span class="lesson-type-pill t-${l.type}">${l.type}</span>` : '';

                item.innerHTML = `
                    <div class="lesson-stripe ${stripeClass}" style="position:absolute; left:0; top:0; bottom:0; width:6px;"></div>
                    <div style="flex: 1; padding-left: 15px;" class="unit-content">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span style="font-size:0.7rem; font-weight:900; color:#888; text-transform:uppercase;">${dayTpl} ${num}</span>
                            ${typeLabel}
                        </div>
                        <div style="font-weight: 800; font-size:1.05rem;">${l.title}</div>
                        <div style="font-size:0.75rem; color:#666; margin-top:3px;">${l.grammar || (window.t ? window.t('interactive_content') : 'Interactive content')}</div>
                        ${l.recycled ? `<div style="font-size:0.65rem; color:#a06b10; font-style:italic; margin-top:5px;">↻ ${l.recycled}</div>` : ''}
                    </div>
                    <div style="display:flex; align-items:center; gap:12px;">
                        <button class="btn-mark-new" style="background:none; border:none; font-size:1.2rem; cursor:pointer;" onclick="cosyDays.toggleDone(${num})">
                            ${window.cosyDays.isLessonDone(num) ? '✅' : '⭕'}
                        </button>
                        <button onclick="cosyDays.jumpTo(${num})" style="background:var(--cosy-green-dark); color:#fff; border:none; padding:8px 16px; border-radius:10px; font-weight:800; font-size:0.75rem; cursor:pointer;">${startTpl}</button>
                    </div>
                `;
                container.appendChild(item);
            });
        },

        isLessonDone(num) {
            const currentCourse = window.cosyDays.state.currentCourse;
            if (!currentCourse) return false;
            const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
            return prog[currentCourse.code] && prog[currentCourse.code].includes(num);
        },

        showLD(l, num) {
            const currentCourse = window.cosyDays.state.currentCourse;
            const ld = document.getElementById('ld');
            const content = document.getElementById('ld-content');
            if (!ld || !content || !currentCourse) return;

            const lessonId = `${currentCourse.lang}_${currentCourse.level}_${num}`;
            const entry = (window.COSY && window.COSY.notebook[lessonId]) || { notes: '', mistakes: [] };

            const teacherNotes = window.COSY?.student?.teacherNotes?.[num] || '';
            const dayTpl = (window.t ? window.t('day_label') : 'Day');
            const openTpl = (window.t ? window.t('open_lesson_btn') : 'Open Lesson');
            const focusTpl = (window.t ? window.t('focus_label') : 'Focus');
            const feedbackTpl = (window.t ? window.t('teacher_feedback_label') : "Teacher's Feedback");
            const notesTpl = (window.t ? window.t('study_notes_label') : 'My Study Notes');
            const saveTpl = (window.t ? window.t('save_notes_btn') : 'Save Notes');
            const mistakesTpl = (window.t ? window.t('mistakes_review_label') : 'Mistakes to Review');

            const stripeClass = l.type ? `stripe-${l.type}` : '';
            const typeLabel = l.type ? `<span class="lesson-type-pill t-${l.type}">${l.type}</span>` : '';

            content.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 15px;">
                    <div style="font-size: 0.7rem; color: var(--cosy-green); font-weight: 800; text-transform: uppercase;">${dayTpl} ${num}</div>
                    ${typeLabel}
                </div>
                <h2 style="font-family: 'Lora', serif; font-size: 1.5rem; margin-bottom: 1rem; position:relative;">
                    <div class="lesson-stripe ${stripeClass}" style="position:absolute; left:-40px; top:0; bottom:0; width:8px; border-radius:0 4px 4px 0;"></div>
                    ${l.title}
                </h2>

                <button onclick="window.location.href='lesson.html?lang=${currentCourse.lang}&lesson=${num}'" class="btn-primary-new" style="width: 100%; margin-bottom: 2rem;">${openTpl} 🚀</button>

                <div style="background: #fdf8f0; padding: 1.25rem; border-radius: 15px; margin-bottom: 1rem; border: 1.5px solid #eee;">
                    <h4 style="margin-bottom: 8px; font-size: 0.85rem;">${focusTpl}:</h4>
                    <div style="font-size: 0.85rem; font-weight: 700; color: var(--cosy-green-dark);">${l.grammar || (window.t ? window.t('speaking_vocab') : 'Speaking & Vocabulary')}</div>
                </div>

                ${l.recycled ? `
                <div style="background: #f0f4ff; padding: 1.25rem; border-radius: 15px; margin-bottom: 1rem; border: 1.5px solid #dbeafe;">
                    <h4 style="margin-bottom: 8px; font-size: 0.85rem; color: #1e40af;">🔄 ${(window.t ? window.t('recycled_label') : 'Spiral Recycling')}:</h4>
                    <div style="font-size: 0.85rem; color: #1e40af; font-style: italic;">${l.recycled}</div>
                </div>
                ` : ''}

                ${teacherNotes ? `
                <div style="background: #fff8e7; padding: 1.25rem; border-radius: 15px; margin-bottom: 1.5rem; border: 1.5px solid #e8a838;">
                    <h4 style="margin-bottom: 8px; font-size: 0.85rem; color: #a06b10;">👩‍🏫 ${feedbackTpl}:</h4>
                    <div style="font-size: 0.85rem; font-style: italic;">"${teacherNotes}"</div>
                </div>
                ` : ''}

                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 10px; font-size: 0.85rem;">${notesTpl}:</h4>
                    <textarea id="ld-notes" style="width:100%; height:120px; border-radius:12px; border:1.5px solid #eee; padding:10px; font-family:inherit; font-size:0.85rem; resize:none;" placeholder="${(window.t ? window.t('notes_placeholder') : 'Type your notes here...')}">${entry.notes}</textarea>
                    <button onclick="cosyDays.saveLessonNotes('${lessonId}')" style="margin-top:8px; width:100%; padding:8px; background:#f5f5f5; border:none; border-radius:8px; font-weight:700; cursor:pointer; font-size:0.75rem;">${saveTpl} 💾</button>
                </div>

                ${entry.mistakes.length > 0 ? `
                <div>
                    <h4 style="margin-bottom: 10px; font-size: 0.85rem;">${mistakesTpl}:</h4>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        ${entry.mistakes.map(m => `<span class="badge-new" style="background:#fcebeb; color:#a32d2d;">${m.word}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
            `;
            ld.classList.add('open');
        },

        renderNotebook() {
            const container = document.getElementById('notebook-list');
            if (!container) return;

            const vocab = (window.COSY && window.COSY.dictionary) || {};
            const entries = Object.entries(vocab).sort((a, b) => (b[1].addedAt || 0) - (a[1].addedAt || 0));
            const limited = entries.slice(0, 6);

            if (entries.length > 0) {
                let html = limited.map(([word, data]) => {
                    const def = typeof data === 'string' ? data : (data.definition || '');
                    return `
                        <div class="widget-card" style="display:flex; flex-direction:column; gap:8px;">
                            <div style="font-size: 1.1rem; font-weight: 900; color: var(--cosy-green-dark);">${word}</div>
                            <div style="font-size: 0.85rem; color: #666; line-height: 1.4;">${def || 'No definition saved'}</div>
                        </div>
                    `;
                }).join('');

                if (entries.length > 6) {
                    html += `
                        <div style="grid-column: 1 / -1; text-align: center; margin-top: 1rem;">
                            <a href="vocabulary.html" class="btn-primary-new" style="text-decoration: none; display: inline-block;">View All ${entries.length} Words 📖</a>
                        </div>
                    `;
                } else {
                    html += `
                        <div style="grid-column: 1 / -1; text-align: center; margin-top: 1rem;">
                            <a href="vocabulary.html" class="btn-primary-new" style="text-decoration: none; display: inline-block; background: var(--cosy-green);">Manage Vocabulary 📓</a>
                        </div>
                    `;
                }
                container.innerHTML = html;
            } else {
                container.innerHTML = `<div class="info-card-empty" style="text-align: center; grid-column: 1/-1; padding: 3rem; color: #888;" data-translate-key="vocab_empty_msg">No words saved yet. Start practice to populate your notebook!</div>`;
            }
        },

        toggleDone: (num) => {
            const currentCourse = window.cosyDays.state.currentCourse;
            if (!currentCourse) return;
            const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
            const done = prog[currentCourse.code] || [];
            const idx = done.indexOf(num);
            if (idx > -1) done.splice(idx, 1); else done.push(num);
            prog[currentCourse.code] = done;
            localStorage.setItem('cosy_progress', JSON.stringify(prog));
            window.cosyDays.renderRoadmap();
            window.cosyDays.renderList();
            window.cosyDays.updateStats();
            window.cosyDays.updatePrepCard();
        },

        jumpTo: (num) => {
            const currentCourse = window.cosyDays.state.currentCourse;
            if (currentCourse) {
                window.location.href = `lesson.html?lang=${currentCourse.lang}&lesson=${num}`;
            }
        },

        jumpToNext: () => {
            const currentCourse = window.cosyDays.state.currentCourse;
            if (!currentCourse) return;
            const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
            const done = prog[currentCourse.code] || [];
            const next = done.length + 1;
            window.location.href = `lesson.html?lang=${currentCourse.lang}&lesson=${next}`;
        },

        closeLD: () => {
            const ld = document.getElementById('ld');
            if (ld) ld.classList.remove('open');
        },

        saveLessonNotes: (lessonId) => {
            const text = document.getElementById('ld-notes').value;
            if (window.COSY && typeof window.COSY.saveNote === 'function') {
                window.COSY.saveNote(lessonId, text);
                window.COSY.showToast((window.t ? window.t('notes_saved_toast') : 'Notes saved locally 📝'));
            }
        },

        async renderChallenges() {
            const student = window.COSY?.student;
            if (!student || !window.ChallengesAPI) return;

            const enrolledCont = document.getElementById('enrolled-challenges-list');
            const availableCont = document.getElementById('available-challenges-list');
            if (!enrolledCont || !availableCont) return;

            const challenges = await window.ChallengesAPI.loadActiveChallenges(student.lang);
            const enrolled = [];
            const available = [];

            for (const c of challenges) {
                const enrolment = await window.ChallengesAPI.getEnrolment(student.id, c.id);
                if (enrolment) {
                    enrolled.push({ ...c, enrolment });
                } else {
                    available.push(c);
                }
            }

            // Render Enrolled
            if (enrolled.length > 0) {
                enrolledCont.innerHTML = enrolled.map(c => {
                    const days = c.enrolment.days_completed;
                    const total = c.duration_days;
                    const percent = Math.min(100, (days / total) * 100);
                    const dailyTasks = Array.isArray(c.daily_tasks) ? c.daily_tasks : [];
                    const todayTask = dailyTasks[days] || 'No task for today';
                    const isCompleted = c.enrolment.completed;

                    return `
                        <div class="widget-card" style="margin-bottom: 1.5rem; border-left: 5px solid var(--cosy-green);">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1rem;">
                                <h4 style="margin:0">${c.title}</h4>
                                <span class="badge-new">${days} / ${total} ${(window.t ? window.t('days_label') : 'days')}</span>
                            </div>

                            <div style="background: #eee; height: 10px; border-radius: 5px; margin-bottom: 1.5rem; overflow: hidden;">
                                <div style="background: var(--cosy-green); height: 100%; width: ${percent}%; transition: width 0.3s;"></div>
                            </div>

                            ${!isCompleted ? `
                                <div style="background: var(--paper-bg); padding: 1.25rem; border-radius: 15px; border: 1px solid var(--border);">
                                    <div style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 8px;">${(window.t ? window.t('today_task_label') : "Today's Task")}</div>
                                    <div style="font-weight: 700; margin-bottom: 1rem;">${todayTask}</div>
                                    <button class="btn-primary-new" style="font-size: 0.75rem; padding: 8px 16px;" onclick="cosyDays.completeChallengeDay('${c.enrolment.id}', ${days})">
                                        ${(window.t ? window.t('mark_done_btn') : 'Mark today done')} ✅
                                    </button>
                                </div>
                            ` : `
                                <div style="text-align: center; color: var(--cosy-green-dark); font-weight: 800;">
                                    ${(window.t ? window.t('challenge_complete_msg') : 'Challenge Completed! 🎉')}
                                </div>
                            `}
                        </div>
                    `;
                }).join('');
            } else {
                enrolledCont.innerHTML = '';
            }

            // Render Available
            if (available.length > 0) {
                availableCont.innerHTML = available.map(c => `
                    <div class="widget-card">
                        <h4 style="margin: 0 0 10px 0;">${c.title}</h4>
                        <p style="font-size: 0.8rem; color: var(--ink-soft); margin-bottom: 0.5rem;">${c.duration_days} ${(window.t ? window.t('day_label') : 'Day')} Challenge</p>
                        <p style="font-size: 0.75rem; color: var(--ink-faint); margin-bottom: 1.5rem;">Starts: ${new Date(c.starts_at).toLocaleDateString()}</p>
                        <button class="btn-primary-new" style="width: 100%; font-size: 0.8rem;" onclick="cosyDays.enrolInChallenge('${c.id}')">
                            ${(window.t ? window.t('enrol_btn') : 'Enrol in Challenge')} →
                        </button>
                    </div>
                `).join('');
            } else {
                availableCont.innerHTML = `<div style="text-align: center; color: var(--ink-faint); padding: 2rem; grid-column: 1/-1;">No challenges available for your language right now.</div>`;
            }
        },

        async enrolInChallenge(challengeId) {
            const student = window.COSY?.student;
            if (!student || !window.ChallengesAPI) return;

            const ok = await window.ChallengesAPI.enrolInChallenge(student.id, challengeId);
            if (ok) {
                window.COSY?.showToast('Enrolled successfully! 🏆');
                this.renderChallenges();
            } else {
                window.COSY?.showToast('Already enrolled or error occurred.', true);
            }
        },

        async completeChallengeDay(enrolmentId, currentDays) {
            if (!window.ChallengesAPI) return;
            await window.ChallengesAPI.markDayComplete(enrolmentId, currentDays);
            window.COSY?.showToast('Task completed! Great job! 🌟');
            this.renderChallenges();
        },

        async renderRoadmapWithLinks() {
            let attempts = 0;
            while (!window.CurriculumLinksAPI && attempts < 50) {
                await new Promise(r => setTimeout(r, 100));
                attempts++;
            }
            const currentCourse = window.cosyDays.state.currentCourse;
            if (!currentCourse || !window.CurriculumLinksAPI) return;

            const links = await window.CurriculumLinksAPI.getCurriculumLinks(
                currentCourse.lang.toLowerCase(),
                (currentCourse.course_type || currentCourse.course || 'general').toLowerCase(),
                currentCourse.level.toLowerCase()
            );
            const linkMap = Object.fromEntries(links.map(l => [l.unit_ref, l.progressme_url]));

            document.querySelectorAll('.roadmap-unit').forEach(el => {
                const unitRef = el.dataset.unitRef;
                if (unitRef && linkMap[unitRef]) {
                    const existing = el.querySelector('.pm-link');
                    if (!existing) {
                        const link = document.createElement('a');
                        link.href        = linkMap[unitRef];
                        link.target      = '_blank';
                        link.rel         = 'noopener noreferrer';
                        link.className   = 'pm-link';
                        link.textContent = 'Go to lesson →';
                        link.style.cssText = 'font-size:12px;color:#378ADD;margin-left:10px;text-decoration:none;';

                        // For list view, append to unit-content. For roadmap path, append to node (maybe not ideal visual but requested)
                        const target = el.querySelector('.unit-content') || el;
                        target.appendChild(link);
                    }
                }
            });
        }
    });

})();
