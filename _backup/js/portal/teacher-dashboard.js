/**
 * js/portal/teacher-dashboard.js
 * Teacher-specific dashboard logic (Student monitoring).
 */
(function() {
    'use strict';

    if (!window.cosyDays) return;

    async function assignHomework(studentId, taskDescription, unitRef, dueDate) {
        if (!taskDescription || !dueDate) {
            if (window.COSY && window.COSY.showToast) window.COSY.showToast('Task and Due Date are required', true);
            return;
        }
        const { error } = await window.supabase.from('homework').insert({
            student_id: studentId,
            task_description: taskDescription,
            unit_ref: unitRef || null,
            due_date: dueDate || null,
            status: 'pending'
        });
        if (!error) {
            if (window.COSY && window.COSY.showToast) window.COSY.showToast('Homework assigned ✓');
            else alert('Homework assigned ✓');

            // Clear inputs if they exist
            const taskIn = document.getElementById(`hw-task-${studentId}`);
            const unitIn = document.getElementById(`hw-unit-${studentId}`);
            const dueIn = document.getElementById(`hw-due-${studentId}`);
            if (taskIn) taskIn.value = '';
            if (unitIn) unitIn.value = '';
            if (dueIn) dueIn.value = '';

            if (window.loadTeacherDashboard) window.loadTeacherDashboard();
        } else {
            if (window.COSY && window.COSY.showToast) window.COSY.showToast('Error assigning homework — check console', true);
            console.error('Error assigning homework:', error);
        }
    }

    async function markHomeworkDone(homeworkId, rowElement) {
        const { error } = await window.supabase
            .from('homework')
            .update({ status: 'done' })
            .eq('id', homeworkId);

        if (!error) {
            if (window.COSY && window.COSY.showToast) window.COSY.showToast('Homework marked as done');
            if (rowElement) {
                rowElement.style.opacity = '0.5';
                const statusEl = rowElement.querySelector('.hw-status');
                if (statusEl) statusEl.textContent = '✓ Done';
            } else {
                if (window.loadTeacherDashboard) window.loadTeacherDashboard();
            }
        } else {
            console.error('Error marking homework as done:', error);
        }
    }

    async function updateStudentProgressMeId(studentId, progressmeId) {
        const { error } = await window.supabase
            .from('students')
            .update({ progressme_id: progressmeId })
            .eq('id', studentId);

        if (!error) {
            if (window.COSY && window.COSY.showToast) window.COSY.showToast('ProgressMe ID updated');
            if (window.loadTeacherDashboard) window.loadTeacherDashboard();
        } else {
            console.error('Error updating ProgressMe ID:', error);
        }
    }

    async function logMistake(sessionId, studentId, mistakeText) {
        if (!mistakeText.trim()) return;

        // Load current mistake_log
        const { data: session } = await window.supabase
            .from('sessions')
            .select('mistake_log')
            .eq('id', sessionId)
            .single();

        const log = Array.isArray(session?.mistake_log) ? session.mistake_log : [];

        // Append and save — the DB trigger fires automatically
        const { error } = await window.supabase.from('sessions')
            .update({ mistake_log: [...log, mistakeText.trim()] })
            .eq('id', sessionId);

        if (!error) {
            if (window.COSY && window.COSY.showToast) window.COSY.showToast(`Mistake logged: "${mistakeText}"`);
            const input = document.getElementById(`mistake-input-${sessionId}`);
            if (input) input.value = '';
            if (window.loadTeacherDashboard) window.loadTeacherDashboard();
        } else {
            console.error('Error logging mistake:', error);
        }
    }

    function toggleExpand(id) {
        const row = document.getElementById('expand-' + id);
        if (row) {
            row.style.display = row.style.display === 'none' ? 'table-row' : 'none';
        }
    }

    async function loadTeacherDashboard() {
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

        const { data: students, error } = await window.supabase
            .from('students')
            .select(`
                id,
                access_code,
                language,
                level,
                course_type,
                progressme_id,
                created_at,
                progress ( total_points, streak_days, last_active, current_unit ),
                homework ( id, status, task_description, unit_ref, due_date ),
                sessions ( id, scheduled_at, status, lesson_notes, mistake_log )
            `)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Teacher dashboard error:', error);
            return;
        }
        window.cosyDays.state.students = students;
        renderStudentTable(students);
    }

    function renderStudentTable(students) {
        const container = document.getElementById('god-student-list') || document.getElementById('teacher-student-list');
        if (!container) return;

        container.innerHTML = students.map(s => {
            const prog       = s.progress?.[0]  || {};
            const pendingHW  = (s.homework || []).filter(h => h.status === 'pending').length;
            const overdueHW  = (s.homework || []).filter(h =>
                h.status === 'pending' && h.due_date && new Date(h.due_date) < new Date()
            ).length;
            const nextSession = (s.sessions || [])
                .filter(se => new Date(se.scheduled_at) > new Date() && se.status === 'scheduled')
                .sort((a, b) => new Date(a.scheduled_at) - new Date(b.scheduled_at))[0];

            const sortedSessions = (s.sessions || []).sort((a, b) => new Date(b.scheduled_at) - new Date(a.scheduled_at));
            const latestSession = sortedSessions[0];

            return `
                <tr data-student-id="${s.id}" style="border-bottom: 1px solid var(--border); cursor:pointer;" onclick="toggleExpand('${s.id}')">
                    <td style="padding: 10px;"><code>${s.access_code}</code></td>
                    <td style="padding: 10px;">${s.language.toUpperCase()} · ${s.level}</td>
                    <td style="padding: 10px;">${s.course_type}</td>
                    <td style="padding: 10px;">${prog.total_points ?? 0}</td>
                    <td style="padding: 10px;">${prog.streak_days ?? 0} days</td>
                    <td style="padding: 10px;">${overdueHW > 0 ? `<span style="color:red">${overdueHW} overdue</span>` : pendingHW > 0 ? `${pendingHW} pending` : '✓'}</td>
                    <td style="padding: 10px;">${nextSession ? new Date(nextSession.scheduled_at).toLocaleDateString('en-GB') : '—'}</td>
                    <td style="padding: 10px;">${s.progressme_id || '—'}</td>
                </tr>
                <tr id="expand-${s.id}" style="display:none; background: var(--paper-bg);">
                    <td colspan="8" style="padding: 20px; border-bottom: 2px solid var(--border);">
                        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 30px;">
                            <div>
                                <h5 style="margin-top:0">Identity & Integration</h5>
                                <div style="display:flex; flex-direction:column; gap:10px;">
                                    <label style="font-size:0.7rem; color:var(--ink-soft);">ProgressMe ID</label>
                                    <div style="display:flex; gap:5px;">
                                        <input type="text" id="pm-id-${s.id}" value="${s.progressme_id || ''}" placeholder="e.g. 12345" class="styled-sel">
                                        <button onclick="event.stopPropagation(); updateStudentProgressMeId('${s.id}', document.getElementById('pm-id-${s.id}').value)" class="btn-primary" style="padding:5px 10px;">Save</button>
                                    </div>
                                    ${window.COSY && window.COSY.isAdmin() ? `<button onclick="event.stopPropagation(); cosyDays.adminManageStudent('${s.id}')" class="btn-secondary" style="font-size:0.7rem; padding:8px; margin-top:5px;">Edit Record 🛠️</button>` : ''}
                                </div>

                                <div style="margin-top:20px;">
                                    <h5 style="margin-top:0">Log Mistake</h5>
                                    ${latestSession ? `
                                        <div style="margin-top:10px">
                                          <label style="font-size:12px;color:var(--color-text-secondary)">For session: ${new Date(latestSession.scheduled_at).toLocaleDateString('en-GB')}</label>
                                          <div style="display:flex;gap:8px;margin-top:4px">
                                            <input type="text" id="mistake-input-${latestSession.id}"
                                              placeholder="e.g. conditional mood, verb agreement"
                                              class="styled-sel" style="flex:1">
                                            <button class="btn-primary" onclick="event.stopPropagation(); logMistake('${latestSession.id}', '${s.id}', document.getElementById('mistake-input-${latestSession.id}').value)">
                                              Log ↗
                                            </button>
                                          </div>
                                          <div id="mistake-list-${latestSession.id}" style="margin-top:8px;font-size:12px;color:var(--color-text-secondary)">
                                            ${(latestSession.mistake_log || []).map(m => `<span class="badge-new" style="margin-right:4px; margin-bottom:4px; display:inline-block;">${m}</span>`).join('')}
                                          </div>
                                        </div>
                                    ` : '<p style="font-size:0.8rem; color:var(--ink-soft);">No sessions found to log mistakes.</p>'}
                                </div>
                            </div>
                            <div>
                                <h5 style="margin-top:0">Assign New Homework</h5>
                                <div style="display:flex; flex-direction:column; gap:10px;">
                                    <input type="text" id="hw-task-${s.id}" placeholder="Task description" class="styled-sel">
                                    <input type="text" id="hw-unit-${s.id}" placeholder="Unit ref (optional)" class="styled-sel">
                                    <input type="date" id="hw-due-${s.id}" class="styled-sel">
                                    <button onclick="event.stopPropagation(); assignHomework('${s.id}', document.getElementById('hw-task-${s.id}').value, document.getElementById('hw-unit-${s.id}').value, document.getElementById('hw-due-${s.id}').value)" class="btn-primary" style="width:fit-content">Assign Homework</button>
                                </div>
                            </div>
                            <div>
                                <h5 style="margin-top:0">Active Homework</h5>
                                <div style="font-size:0.8rem;">
                                    ${s.homework && s.homework.length > 0 ? s.homework.map(h => {
                                        const isOverdue = h.status === 'pending' && h.due_date && new Date(h.due_date) < new Date();
                                        return `
                                            <div class="hw-item-row" style="display:flex; justify-content:space-between; align-items:center; padding:8px; border-bottom:1px solid var(--border); ${h.status === 'done' ? 'opacity:0.5' : ''}">
                                                <div>
                                                    <strong>${h.task_description}</strong> ${h.unit_ref ? `(${h.unit_ref})` : ''}<br>
                                                    <span style="color:${isOverdue ? 'red' : 'var(--ink-soft)'}; font-size:0.7rem;">Due: ${h.due_date || '—'} · Status: <span class="hw-status">${h.status} ${isOverdue ? '(OVERDUE)' : ''}</span></span>
                                                </div>
                                                ${h.status === 'pending' ? `<button onclick="event.stopPropagation(); markHomeworkDone('${h.id}', this.closest('.hw-item-row'))" class="btn-secondary" style="padding:4px 8px; font-size:0.7rem;">Mark done</button>` : '✅'}
                                            </div>
                                        `;
                                    }).join('') : '<p style="color:var(--ink-soft)">No homework assigned yet.</p>'}
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Expose to window
    window.assignHomework = assignHomework;
    window.markHomeworkDone = markHomeworkDone;
    window.updateStudentProgressMeId = updateStudentProgressMeId;
    window.logMistake = logMistake;
    window.toggleExpand = toggleExpand;
    window.loadTeacherDashboard = loadTeacherDashboard;
    window.renderStudentTable = renderStudentTable;

    Object.assign(window.cosyDays, {
        async renderTeacherDashboard() {
            await loadTeacherDashboard();
        }
    });

})();
