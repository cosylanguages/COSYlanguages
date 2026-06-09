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
            const result = document.getElementById('admin-curriculum-result');
            if (!result) return;
            result.innerHTML = 'Loading...';

            const data = await window.COSY?.loadCurriculum(lang, level);
            if (!data || data.length === 0) {
                result.innerHTML = '<div style="color:red">No data found for this path.</div>';
                return;
            }

            result.innerHTML = data.map(unit => {
                const githubUrl = `https://github.com/COSYlanguages/COSYlanguages.github.io/edit/main/js/data/curriculum/${lang}_${level}.js`;
                return `
                <div class="widget-card" style="margin-bottom:1rem">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <h4 style="margin:0">${unit.label || unit.title}</h4>
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

        async renderLinksManager() {
            const lang = document.getElementById('admin-links-lang')?.value;
            const level = document.getElementById('admin-links-level')?.value;
            const container = document.getElementById('admin-links-list');
            if (!lang || !level || !container) return;

            container.innerHTML = '<tr><td colspan="4" style="padding:20px; text-align:center;">Loading units...</td></tr>';

            const units = await window.COSY?.loadCurriculum(lang, level);
            if (!units || units.length === 0) {
                container.innerHTML = '<tr><td colspan="4" style="padding:20px; text-align:center; color:red;">No curriculum units found for this path.</td></tr>';
                return;
            }

            // Also support sub-lessons as units if they have codes
            const lessons = units.flatMap(u => u.lessons || [u]);

            const links = await window.CurriculumLinksAPI.getCurriculumLinks(lang, 'general', level);
            const linkMap = Object.fromEntries(links.map(l => [l.unit_ref, l.progressme_url]));

            container.innerHTML = lessons.map(l => {
                const ref = l.code || l.num || '??';
                const title = l.title || l.label || 'Untitled';
                const url = linkMap[ref] || '';
                return `
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 10px;"><code>${ref}</code></td>
                        <td style="padding: 10px;">${title}</td>
                        <td style="padding: 10px;">
                            <input type="text" id="pm-url-${ref}" value="${url}" placeholder="https://progressme.ru/..." class="styled-sel" style="width:100%;">
                        </td>
                        <td style="padding: 10px;">
                            <button onclick="cosyDays.adminSaveCurriculumLink('${lang}', 'general', '${level}', '${ref}', '${title.replace(/'/g, "\\'")}')" class="btn-primary" style="padding:5px 10px;">Save</button>
                        </td>
                    </tr>
                `;
            }).join('');
        },

        async adminSaveCurriculumLink(lang, courseType, level, ref, title) {
            const urlIn = document.getElementById(`pm-url-${ref}`);
            const url = urlIn ? urlIn.value.trim() : '';

            if (!url) {
                window.COSY?.showToast('URL is required', true);
                return;
            }

            const ok = await window.CurriculumLinksAPI.upsertCurriculumLink(lang, courseType, level, ref, title, url);
            if (ok) {
                window.COSY?.showToast(`Link for ${ref} saved ✓`);
            } else {
                window.COSY?.showToast(`Error saving link for ${ref}`, true);
            }
        }
    });

})();
