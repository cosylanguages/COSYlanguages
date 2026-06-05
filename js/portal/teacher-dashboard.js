/**
 * js/portal/teacher-dashboard.js
 * Teacher-specific dashboard logic (Student monitoring).
 */
(function() {
    'use strict';

    if (!window.cosyDays) return;

    const TEACHER_PIN = '2025';

    Object.assign(window.cosyDays, {
        checkPin() {
            const pinEl = document.getElementById('pin-input');
            const pin = pinEl ? pinEl.value : '';
            if (pin === TEACHER_PIN) {
                const lock = document.getElementById('teacher-lock');
                const content = document.getElementById('teacher-content');
                if (lock) lock.style.display = 'none';
                if (content) content.style.display = 'block';
            } else {
                const error = document.getElementById('pin-error');
                if (error) error.style.display = 'block';
            }
        },

        async renderTeacherDashboard() {
            try {
                const students = await window.COSY?.sync();
                const grid = document.getElementById('students-grid');
                if (!grid || !students) return;

                grid.innerHTML = Object.entries(students).map(([code, s]) => `
                    <div class="widget-card">
                        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                            <span style="font-weight:900;">${s.nickname || s.name}</span>
                            <span class="badge-new">${s.lang} · ${s.level} · ${s.course || 'GEN'}</span>
                        </div>
                        <div style="font-size:0.75rem; color:#666;">Points: ✨ ${s.points || 0}</div>
                        <div style="font-size:0.75rem; color:#666;">Current Day: ${s.currentDay || 0}</div>
                        <div style="font-size:0.7rem; color:#888; margin-top:5px;">Code: <code>${code}</code></div>
                        <div style="margin-top:15px; display:flex; gap:5px;">
                            <button class="btn-primary-new" style="flex:1; font-size:0.65rem; padding:8px;" onclick="cosyDays.showToast('Profile viewing simulated for ${s.nickname || s.name}')">View Profile</button>
                            <button class="btn-primary-new" style="flex:1; font-size:0.65rem; padding:8px; background:var(--cosy-green);" onclick="cosyDays.showToast('Homework assignment opened for ${s.nickname || s.name}')">Assign HW</button>
                        </div>
                    </div>
                `).join('');
            } catch (e) {
                console.error("Failed to render teacher dashboard", e);
            }
        }
    });

})();
