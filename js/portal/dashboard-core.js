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

        showToast: (msg, isError = false) => {
            const t = document.getElementById('toast');
            if (!t) {
                // Create toast if it doesn't exist
                const toast = document.createElement('div');
                toast.id = 'toast';
                toast.style.cssText = 'position:fixed; bottom:20px; left:50%; transform:translateX(-50%); padding:12px 24px; border-radius:30px; color:#fff; font-weight:800; font-size:0.85rem; z-index:10000; opacity:0; pointer-events:none; transition:opacity 0.3s;';
                document.body.appendChild(toast);
            }
            const toastEl = document.getElementById('toast');
            toastEl.textContent = msg;
            toastEl.style.background = isError ? '#c0392b' : '#333';
            toastEl.style.opacity = '1';
            toastEl.style.pointerEvents = 'auto';
            setTimeout(() => {
                toastEl.style.opacity = '0';
                toastEl.style.pointerEvents = 'none';
            }, 3000);
        },

        switchTab: (btn, panelId) => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const panel = document.getElementById(panelId);
            if (panel) panel.classList.add('active');

            // Trigger specific renders if they exist
            if (panelId === 'panel-vocab' && typeof window.cosyDays.renderNotebook === 'function') window.cosyDays.renderNotebook();
            if (panelId === 'panel-admin' && typeof window.cosyDays.renderAdminDashboard === 'function') window.cosyDays.renderAdminDashboard();
            if (panelId === 'panel-teacher' && typeof window.cosyDays.renderTeacherDashboard === 'function') window.cosyDays.renderTeacherDashboard();
        },

        logout: () => {
            localStorage.removeItem('student_unlocked');
            localStorage.removeItem('student_course_code');
            if (window.COSY && typeof window.COSY.logout === 'function') {
                window.COSY.logout();
            } else {
                window.location.reload();
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

        sendBroadcast: async (active) => {
            const msgEl = document.getElementById('broadcast-msg');
            const msg = msgEl ? msgEl.value : '';
            if (active && !msg) return window.cosyDays.showToast('Please type a message first.', true);

            window.cosyDays.showToast('Simulation: Broadcast ' + (active ? 'activated' : 'cleared'));
            if (!active && msgEl) msgEl.value = '';
        },

        async loadCurriculum(lang, level) {
            const student = window.COSY?.student;
            const currentCourse = window.cosyDays.state.currentCourse;

            lang = lang || currentCourse?.lang?.toLowerCase();
            level = level || currentCourse?.level?.toLowerCase();

            if (!lang || !level) return [];

            const prefix = window.COSY?.getPrefix() || '../../';

            // Check for v2 curriculum first
            const v2Path = `${prefix}curriculum/${lang}/general/${level.toUpperCase()}_v2.json`;
            try {
                const v2Res = await fetch(v2Path);
                if (v2Res.ok) {
                    const v2Data = await v2Res.json();
                    if (v2Data && v2Data.units) {
                        window.cosyDays.state.curriculum = v2Data.units;
                        return v2Data.units;
                    }
                }
            } catch (e) {
                console.log("v2 curriculum not found, falling back to legacy JS data.");
            }

            const path = `${prefix}js/data/curriculum/${lang}_${level}.js`;

            return new Promise((resolve) => {
                if (document.querySelector(`script[src*="${path}"]`)) {
                    const key = `${lang}_${level}`;
                    let data = (window.curriculumData && window.curriculumData[key]) || [];
                    if (student?.isFree && lang === student.lang.toLowerCase()) {
                        data = data.slice(0, 1);
                    }
                    window.cosyDays.state.curriculum = data;
                    return resolve(data);
                }
                const script = document.createElement('script');
                script.src = path;
                script.onload = async () => {
                    await new Promise(r => setTimeout(r, 100));
                    const key = `${lang}_${level}`;
                    let data = (window.curriculumData && window.curriculumData[key]) || [];
                    if (student?.isFree && lang === student.lang.toLowerCase()) {
                        data = data.slice(0, 1);
                    }
                    window.cosyDays.state.curriculum = data;
                    resolve(data);
                };
                script.onerror = () => { resolve([]); };
                document.head.appendChild(script);
            });
        },

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
                document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
                const adminPanel = document.getElementById('panel-admin');
                if (adminPanel) adminPanel.classList.add('active');

                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
                const adminNav = document.querySelector('.nav-item[data-mode="admin"]');
                if (adminNav) adminNav.classList.add('active');

                if (typeof window.cosyDays.renderAdminDashboard === 'function') {
                    window.cosyDays.renderAdminDashboard();
                }
                return;
            }

            if (mode === 'TEACHER') {
                document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
                const teacherPanel = document.getElementById('panel-teacher');
                if (teacherPanel) teacherPanel.classList.add('active');

                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
                const teacherNav = document.querySelector('.nav-item[data-mode="TEACHER"]');
                if (teacherNav) teacherNav.classList.add('active');

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
            await window.cosyDays.loadCurriculum();

            // Render components if they exist
            if (typeof window.cosyDays.updateStats === 'function') window.cosyDays.updateStats();
            if (typeof window.cosyDays.updatePrepCard === 'function') window.cosyDays.updatePrepCard();
            if (typeof window.cosyDays.renderRoadmap === 'function') window.cosyDays.renderRoadmap();
            if (typeof window.cosyDays.renderList === 'function') window.cosyDays.renderList();
            if (typeof window.cosyDays.renderNotebook === 'function') window.cosyDays.renderNotebook();
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
