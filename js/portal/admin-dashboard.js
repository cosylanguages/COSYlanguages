/**
 * js/portal/admin-dashboard.js
 * Admin-specific dashboard logic (Student management, Curriculum explorer).
 */
(function() {
    'use strict';

    if (!window.cosyDays) return;

    Object.assign(window.cosyDays, {
        adminManageStudent(studentId) {
            const student = (window.cosyDays.state.students || []).find(s => s.id === studentId);
            if (!student) {
                window.COSY?.showToast(`Student ${studentId} not found`, true);
                return;
            }

            const form = document.getElementById('admin-add-student-form');
            if (!form) return;

            // Populate form
            document.getElementById('as-name').value = student.name || '';
            document.getElementById('as-code').value = student.access_code || '';
            document.getElementById('as-lang').value = (student.language || 'EN').toUpperCase();
            document.getElementById('as-level').value = (student.level || 'A1').toUpperCase();
            document.getElementById('student-progressme-id').value = student.progressme_id || '';

            // Set state
            form.setAttribute('data-student-id', student.id);
            form.querySelector('h4').textContent = 'Edit Student Record';
            form.style.display = 'block';

            window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
        },

        adminShowAddStudent() {
            const form = document.getElementById('admin-add-student-form');
            if (form) {
                // Clear form
                form.setAttribute('data-student-id', '');
                form.querySelector('h4').textContent = 'New Student Record';
                document.getElementById('as-name').value = '';
                document.getElementById('as-code').value = '';
                document.getElementById('student-progressme-id').value = '';
                form.style.display = 'block';
            }
        },

        async adminSaveStudent() {
            const form = document.getElementById('admin-add-student-form');
            const studentId = form.getAttribute('data-student-id');

            const name = document.getElementById('as-name').value.trim();
            const code = document.getElementById('as-code').value.trim().toUpperCase();
            const lang = document.getElementById('as-lang').value;
            const level = document.getElementById('as-level').value;
            const pmId = document.getElementById('student-progressme-id').value.trim() || null;

            if (!name || !code) {
                window.COSY?.showToast('Name and Code are required', true);
                return;
            }

            // In this schema, we'll store the name in the 'email' column or similar if needed,
            // but the current schema only has email, access_code, language, level, course_type, teacher_id, progressme_id.
            // Let's assume 'email' can be used for name or just ignore name if it's not in schema.
            // Actually, looking at renderStudentTable in teacher-dashboard.js, it doesn't even show a name.

            const studentData = {
                access_code: code,
                language: lang,
                level: level,
                progressme_id: pmId
            };

            let error;
            if (studentId) {
                // Update
                const { error: err } = await window.supabase
                    .from('students')
                    .update(studentData)
                    .eq('id', studentId);
                error = err;
            } else {
                // Insert
                const { error: err } = await window.supabase
                    .from('students')
                    .insert(studentData);
                error = err;
            }

            if (!error) {
                window.COSY?.showToast(studentId ? 'Student record updated ✓' : 'Student record created ✓');
                form.style.display = 'none';
                if (window.loadTeacherDashboard) window.loadTeacherDashboard();
            } else {
                console.error('Error saving student:', error);
                window.COSY?.showToast('Error saving student — check console', true);
            }
        },

        async adminExploreCurriculum() {
            const lang = document.getElementById('admin-curr-lang').value;
            const level = document.getElementById('admin-curr-level').value;
            const courseType = document.getElementById('admin-curr-type').value;
            const result = document.getElementById('admin-curriculum-result');
            if (!result) return;
            result.innerHTML = 'Loading...';

            const data = await window.COSY?.loadCurriculum(lang, level);
            if (!data || data.length === 0) {
                result.innerHTML = '<div style="color:red">No data found for this path.</div>';
                return;
            }

            const links = await window.COSY_LINKS.getLinks(lang, courseType, level);
            const linkMap = links.reduce((acc, l) => { acc[l.unit_index] = l.progressme_url; return acc; }, {});

            result.innerHTML = data.map((unit, idx) => {
                const dayNum = idx + 1;
                const githubUrl = `https://github.com/COSYlanguages/COSYlanguages.github.io/edit/main/js/data/curriculum/${lang}_${level}.js`;
                return `
                <div class="widget-card" style="margin-bottom:1rem">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <div>
                           <h4 style="margin:0">Day ${dayNum}: ${unit.label || unit.title}</h4>
                           ${linkMap[dayNum] ? `<a href="${linkMap[dayNum]}" target="_blank" style="font-size:0.7rem; color:var(--indigo);">🔗 ${linkMap[dayNum]}</a>` : '<span style="font-size:0.7rem; color:var(--muted);">No ProgressMe link set</span>'}
                        </div>
                        <a href="${githubUrl}" target="_blank" class="badge-new" style="background:#1c1917; color:#fff; text-decoration:none;">Edit Unit 🛠️</a>
                    </div>
                    <p style="font-size:0.8rem; color:#666">${unit.arc || ''}</p>
                    <div style="font-size:0.75rem">
                        ${(unit.lessons || []).map(l => `• ${l.title}`).join('<br>')}
                    </div>
                </div>
                `;
            }).join('');
        },

        async adminLoadLinks() {
            const lang = document.getElementById('link-lang').value;
            const type = document.getElementById('link-type').value;
            const level = document.getElementById('link-level').value;
            const container = document.getElementById('admin-links-list');
            if (!container) return;

            container.innerHTML = 'Loading curriculum...';
            const data = await window.COSY?.loadCurriculum(lang, level);
            if (!data || data.length === 0) {
                container.innerHTML = '<div style="color:red">No curriculum data found for this path.</div>';
                return;
            }

            const links = await window.COSY_LINKS.getLinks(lang, type, level);
            const linkMap = links.reduce((acc, l) => { acc[l.unit_index] = l.progressme_url; return acc; }, {});

            container.innerHTML = `
                <div class="widget-card">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                        <thead>
                            <tr style="text-align: left; border-bottom: 1px solid var(--border);">
                                <th style="padding: 10px;">Day</th>
                                <th style="padding: 10px;">Unit Title</th>
                                <th style="padding: 10px;">ProgressMe URL</th>
                                <th style="padding: 10px;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.map((unit, idx) => {
                                const num = idx + 1;
                                return `
                                    <tr style="border-bottom: 1px solid #eee;">
                                        <td style="padding: 10px;">${num}</td>
                                        <td style="padding: 10px;">${unit.label || unit.title}</td>
                                        <td style="padding: 10px;">
                                            <input type="text" id="link-input-${num}" value="${linkMap[num] || ''}"
                                                   placeholder="https://progressme.ru/..." class="styled-sel" style="width:100%;">
                                        </td>
                                        <td style="padding: 10px;">
                                            <button onclick="cosyDays.adminSaveLink('${lang}', '${type}', '${level}', ${num})"
                                                    class="btn-primary" style="padding: 4px 8px; font-size: 0.7rem;">Save</button>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        },

        async adminSaveLink(lang, type, level, num) {
            const input = document.getElementById(`link-input-${num}`);
            if (!input) return;
            const url = input.value.trim();
            if (!url) return;

            const ok = await window.COSY_LINKS.upsertLink(lang, type, level, num, url);
            if (ok) {
                window.COSY?.showToast('Link saved ✓');
            } else {
                window.COSY?.showToast('Error saving link', true);
            }
        }
    });

})();
