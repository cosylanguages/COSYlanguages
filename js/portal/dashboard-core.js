/**
 * js/portal/dashboard-core.js
 * Core utilities and shared state for the COSYlanguages portal.
 */
(function() {
    'use strict';

    window.cosyDays = {
        state: {
            currentCourse: null,
            curriculum: []
        },

        // ── Shared Utilities ──────────────────────────

        showToast: (msg, isError = false) => window.COSY?.showToast(msg, isError),
        switchTab: (btn, panelId) => window.COSY?.switchTab(btn, panelId),

        logout: () => {
            sessionStorage.removeItem('cosy_student');
            localStorage.removeItem('student_unlocked');
            localStorage.removeItem('student_course_code');
            if (window.COSY && typeof window.COSY.logout === 'function') {
                window.COSY.logout();
            } else {
                location.reload();
            }
        },

        startFree: () => {
            const langEl = document.getElementById('free-lang');
            const levelEl = document.getElementById('free-level');
            if (!langEl || !levelEl) return;
            const lang = langEl.value;
            const level = levelEl.value;
            if (window.COSY && typeof window.COSY.setFreeMode === 'function') {
                window.COSY.setFreeMode(lang, level);
                window.cosyDays.initDashboard('FREE', 'STUDENT');
            }
        },

        async activateBroadcast(message) {
            if (!message.trim()) return;

            // Wait for Supabase to be ready
            let attempts = 0;
            while (!window.supabase && attempts < 50) {
                await new Promise(r => setTimeout(r, 100));
                attempts++;
            }
            if (!window.supabase) return;

            // deactivate all current broadcasts first
            await window.supabase.from('broadcasts').update({ active: false }).eq('active', true);
            // insert the new one
            const { error } = await window.supabase.from('broadcasts').insert({
                message: message.trim(),
                active:  true
            });

            if (!error) {
                window.COSY?.showToast('Broadcast sent to all students ✓');
                const input = document.getElementById('broadcast-msg');
                if (input) input.value = '';
            }
        },

        async clearBroadcast() {
            // Wait for Supabase to be ready
            let attempts = 0;
            while (!window.supabase && attempts < 50) {
                await new Promise(r => setTimeout(r, 100));
                attempts++;
            }
            if (!window.supabase) return;

            await window.supabase.from('broadcasts').update({ active: false }).eq('active', true);
            window.COSY?.showToast('Broadcast cleared ✓');
        },

        sendBroadcast: async (active) => {
            const msgEl = document.getElementById('broadcast-msg');
            const msg = msgEl ? msgEl.value : '';
            if (active && !msg) return window.COSY?.showToast('Please type a message first.', true);

            if (active) {
                await window.cosyDays.activateBroadcast(msg);
            } else {
                await window.cosyDays.clearBroadcast();
                if (msgEl) msgEl.value = '';
            }
        },

        loadCurriculum: (lang, level) => window.COSY?.loadCurriculum(lang, level),

        // ── Shared Initialization ─────────────────────

        unlock: async () => {
            const input = document.getElementById('student-code') || document.getElementById('mp-gateway-code');
            if (!input) return;
            const code = input.value.trim().toUpperCase();
            if (code) {
                const res = await window.COSY?.unlock(code);
                if (res && res.ok) {
                    window.cosyDays.initDashboard(code, window.COSY.mode.toUpperCase());
                }
            }
        },

        initDashboard: async (code, mode) => {
            if (window.COSY?.admin?.spoofedLang) {
                localStorage.setItem('language', window.COSY.admin.spoofedLang.toLowerCase());
                if (window.setLanguage) window.setLanguage(window.COSY.admin.spoofedLang.toLowerCase());
            }

            if (mode === 'ADMIN') {
                window.COSY?.switchTab(null, 'panel-admin');
                if (typeof window.cosyDays.renderAdminDashboard === 'function') {
                    window.cosyDays.renderAdminDashboard();
                }
                return;
            }

            if (mode === 'TEACHER') {
                window.COSY?.switchTab(null, 'panel-teacher');
                if (typeof window.cosyDays.renderTeacherDashboard === 'function') {
                    window.cosyDays.renderTeacherDashboard();
                }
                return;
            }

            // Student/Free Init
            if (window.COSY?.student && (window.COSY.student.code === code || code === 'FREE')) {
                window.cosyDays.state.currentCourse = window.COSY.student;
            } else {
                const parts = code.split('-');
                window.cosyDays.state.currentCourse = { lang: parts[1] || 'en', level: parts[2] || 'A1', type: parts[3] || 'GEN', code };
            }

            const currentCourse = window.cosyDays.state.currentCourse;
            const courseName = document.getElementById('tb-course-name');
            if (courseName) {
                if (code === 'FREE' || currentCourse.isFree) {
                    const levelDisp = currentCourse.level === 'A1' ? 'Starter' : currentCourse.level;
                    courseName.textContent = `${currentCourse.lang.toUpperCase()} · ${levelDisp}`;
                } else {
                    courseName.textContent = `${currentCourse.lang.toUpperCase()} · ${currentCourse.level} · ${currentCourse.type || currentCourse.course}`;
                }
            }

            if (typeof window.cosyDays.loadStudentData === 'function') {
                await window.cosyDays.loadStudentData(code);
            }
            if (typeof window.cosyDays.checkBroadcast === 'function') {
                await window.cosyDays.checkBroadcast();
            }
            await window.COSY?.loadCurriculum();

            // Render components if they exist
            if (typeof window.cosyDays.updateStats === 'function') window.cosyDays.updateStats();
            if (typeof window.cosyDays.updatePrepCard === 'function') window.cosyDays.updatePrepCard();
            if (typeof window.cosyDays.renderRoadmap === 'function') window.cosyDays.renderRoadmap();
            if (typeof window.cosyDays.renderList === 'function') window.cosyDays.renderList();
            if (typeof window.cosyDays.renderNotebook === 'function') window.cosyDays.renderNotebook();
            if (typeof window.cosyDays.renderChallenges === 'function') window.cosyDays.renderChallenges();
        },

        switchView: (view) => {
            const roadmap = document.getElementById('view-roadmap');
            const list = document.getElementById('view-list');
            if (roadmap) roadmap.style.display = view === 'roadmap' ? 'block' : 'none';
            if (list) list.style.display = view === 'list' ? 'block' : 'none';
        }
    };

    // Auto-bootstrap
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const mode = window.COSY?.mode;
            const student = window.COSY?.student;
            const teacher = window.COSY?.teacher;

            if (mode && mode !== 'free' && (student || teacher || window.COSY?.admin)) {
                window.cosyDays.initDashboard(student?.code || teacher?.code || window.COSY.admin?.code, mode.toUpperCase());
            } else if (mode === 'free') {
                 // Even in free mode, if we are on a portal page, we might want to init
                 if (window.location.pathname.includes('/portal/')) {
                     window.cosyDays.initDashboard('FREE', 'STUDENT');
                 }
            }
        }, 50);
    });

})();
