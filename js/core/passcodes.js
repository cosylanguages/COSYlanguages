/**
 * js/core/passcodes.js
 * Lightweight backward-compatibility wrapper delegating to shared/js/core/entitlements.js.
 */
(function() {
    'use strict';

    // Dynamically ensure shared entitlements module is loaded on execution
    if (!window.COSY || !window.COSY.entitlements) {
        const path = window.location.pathname;
        const segments = path.replace(/^\//, '').replace(/\/$/, '').split('/').length;
        const prefix = segments <= 1 ? './' : '../'.repeat(segments - 1);

        const existing = document.querySelector('script[src*="shared/js/core/entitlements.js"]');
        if (!existing) {
            const script = document.createElement('script');
            script.src = prefix + 'shared/js/core/entitlements.js';
            script.async = false;
            // Use document.write in synchronous parsing environments as a robust fallback,
            // or simply append to head. Append to head is clean and standard.
            document.head.appendChild(script);
        }
    }

    window.COSY_PASSCODES = {
        WONDER_DRAFT_MAPPING: {
            'whether-raindrops-select-where-to-fall.html': 1,
            'do-insects-hide-when-it-rains.html': 2,
            'is-bad-weather-gods-anger.html': 3,
            'always-watched-in-a-crowd.html': 4,
            'why-is-everyone-copying-me.html': 5,
            'feeling-empty-after-series.html': 6,
            'death-of-the-album.html': 7,
            'ugly-produce-anti-waste.html': 8,
            'does-euthanasia-reduce-suicide-rates.html': 9,
            'appreciating-amy-winehouse-after-death.html': 10,
            'why-do-we-try-to-relate-to-adhd.html': 11,
            'is-parenting-instinct-a-real-thing-or-scam.html': 12,
            'are-traditions-hidden-monogamy.html': 13,
            'collective-guilt-global-crisis.html': 14,
            'are-traditions-hidden-monogamy-upper-intermediate.html': 15,
            'i-have-no-time-for-it.html': 16,
            'why-do-i-spend-more-when-i-earn-more.html': 17,
            'does-inclusive-language-make-us-equal.html': 18
        },

        KUS_DRAFT_MAPPING: {
            'ai-and-the-brain-intermediate.html': 1,
            'ai-and-the-brain-upper-intermediate.html': 2,
            'ai-reality-delusion.html': 3,
            'animal-cooperation-language-intermediate.html': 4,
            'animal-cooperation-language-upper-intermediate.html': 5,
            'ape-laughter-speech-origin-elementary.html': 6,
            'ape-laughter-speech-origin-intermediate.html': 7,
            'brain-improving-in-90s-intermediate.html': 8,
            'brain-improving-in-90s-upper-intermediate.html': 9,
            'childhood-obesity-theory-elementary.html': 10,
            'childhood-obesity-theory-intermediate.html': 11,
            'climate-scientist-warming-report-intermediate.html': 12,
            'climate-scientist-warming-report-upper-intermediate.html': 13,
            'football-beats-shamrock-intermediate.html': 14,
            'football-beats-shamrock-upper-intermediate.html': 15,
            'fusion-energy.html': 16,
            'grandmother-evolutionary-mystery.html': 17,
            'grandparents-mental-health.html': 18,
            'gut-brain-memory-intermediate.html': 19,
            'hidden-regenerative-powers-intermediate.html': 20,
            'hidden-regenerative-powers-upper-intermediate.html': 21,
            'impersonation-accounts.html': 22,
            'inside-the-backrooms-elementary.html': 23,
            'inside-the-backrooms-intermediate.html': 24,
            'living-most-creative-time.html': 25,
            'losing-spoken-words.html': 26,
            'mendelian-laws-broken.html': 27,
            'museums-movies-theater-stay-younger-elementary.html': 28,
            'museums-movies-theater-stay-younger-intermediate.html': 29,
            'museums-movies-theater-stay-younger-upper-intermediate.html': 30,
            'ozempic-obesity-revolution-intermediate.html': 31,
            'ozempic-obesity-revolution-upper-intermediate.html': 32,
            'recycling-distraction-test-intermediate.html': 33,
            'right-handedness.html': 34,
            'sensory-system-pain-disease-intermediate.html': 35,
            'sensory-system-pain-disease-upper-intermediate.html': 36,
            'social-decisions-brain.html': 37,
            'spider-creatures-origins-of-fatherhood-intermediate.html': 38,
            'spider-creatures-origins-of-fatherhood-upper-intermediate.html': 39,
            'tv-midlife-shrink-brain-intermediate.html': 40,
            'vliyanie-propagandy-deti.html': 41,
            'where-you-live-shapes-dementia-risk-elementary.html': 42,
            'where-you-live-shapes-dementia-risk-intermediate.html': 43,
            'where-you-live-shapes-dementia-risk-upper-intermediate.html': 44,
            'your-fingers-hold-secret-brain-evolution-intermediate.html': 45,
            'your-fingers-hold-secret-brain-evolution-upper-intermediate.html': 46
        },

        KUS_SPECIMEN_MAPPING: {
            'ai-and-the-brain-intermediate.html': 'KUS01',
            'ai-and-the-brain-upper-intermediate.html': 'KUS01',
            'ai-reality-delusion.html': 'KUS02',
            'animal-cooperation-language-intermediate.html': 'KUS03',
            'animal-cooperation-language-upper-intermediate.html': 'KUS03',
            'ape-laughter-speech-origin-elementary.html': 'KUS04',
            'ape-laughter-speech-origin-intermediate.html': 'KUS04',
            'brain-improving-in-90s-intermediate.html': 'KUS05',
            'brain-improving-in-90s-upper-intermediate.html': 'KUS05',
            'childhood-obesity-theory-elementary.html': 'KUS06',
            'childhood-obesity-theory-intermediate.html': 'KUS06',
            'climate-scientist-warming-report-intermediate.html': 'KUS07',
            'climate-scientist-warming-report-upper-intermediate.html': 'KUS07',
            'football-beats-shamrock-intermediate.html': 'KUS08',
            'football-beats-shamrock-upper-intermediate.html': 'KUS08',
            'fusion-energy.html': 'KUS09',
            'grandmother-evolutionary-mystery.html': 'KUS10',
            'grandparents-mental-health.html': 'KUS11',
            'gut-brain-memory-intermediate.html': 'KUS12',
            'hidden-regenerative-powers-intermediate.html': 'KUS13',
            'hidden-regenerative-powers-upper-intermediate.html': 'KUS13',
            'impersonation-accounts.html': 'KUS22',
            'inside-the-backrooms-elementary.html': 'KUS23',
            'inside-the-backrooms-intermediate.html': 'KUS23',
            'living-most-creative-time.html': 'KUS24',
            'losing-spoken-words.html': 'KUS24',
            'mendelian-laws-broken.html': 'KUS24',
            'museums-movies-theater-stay-younger-elementary.html': 'KUS24',
            'museums-movies-theater-stay-younger-intermediate.html': 'KUS24',
            'museums-movies-theater-stay-younger-upper-intermediate.html': 'KUS24',
            'ozempic-obesity-revolution-intermediate.html': 'KUS06',
            'ozempic-obesity-revolution-upper-intermediate.html': 'KUS06',
            'recycling-distraction-test-intermediate.html': 'KUS13',
            'right-handedness.html': 'KUS22',
            'sensory-system-pain-disease-intermediate.html': 'KUS23',
            'sensory-system-pain-disease-upper-intermediate.html': 'KUS23',
            'social-decisions-brain.html': 'KUS24',
            'spider-creatures-origins-of-fatherhood-intermediate.html': 'KUS25',
            'spider-creatures-origins-of-fatherhood-upper-intermediate.html': 'KUS25',
            'tv-midlife-shrink-brain-intermediate.html': 'KUS26',
            'vliyanie-propagandy-deti.html': 'KUS27',
            'where-you-live-shapes-dementia-risk-elementary.html': 'KUS28',
            'where-you-live-shapes-dementia-risk-intermediate.html': 'KUS28',
            'where-you-live-shapes-dementia-risk-upper-intermediate.html': 'KUS28',
            'your-fingers-hold-secret-brain-evolution-intermediate.html': 'KUS29',
            'your-fingers-hold-secret-brain-evolution-upper-intermediate.html': 'KUS29'
        },

        getCurrentDraftKey() {
            const path = window.location.pathname;
            const filename = path.split('/').pop();
            const draftNum = this.WONDER_DRAFT_MAPPING[filename];
            if (draftNum) {
                return String(draftNum).padStart(2, '0');
            }
            return null;
        },

        getCurrentKusKey() {
            const path = window.location.pathname;
            const filename = path.split('/').pop();
            return this.KUS_SPECIMEN_MAPPING[filename] || null;
        },

        async ensureEntitlementsLoaded() {
            if (window.COSY && window.COSY.entitlements) return;
            return new Promise((resolve) => {
                const path = window.location.pathname;
                const segments = path.replace(/^\//, '').replace(/\/$/, '').split('/').length;
                const prefix = segments <= 1 ? './' : '../'.repeat(segments - 1);

                const script = document.createElement('script');
                script.src = prefix + 'shared/js/core/entitlements.js';
                script.onload = () => resolve();
                script.onerror = () => resolve();
                document.head.appendChild(script);
            });
        },

        isAuthorized(mode) {
            const draftKey = this.getCurrentDraftKey();
            if (draftKey) {
                if (window.COSY && window.COSY.entitlements) {
                    return window.COSY.entitlements.check('EVENTS', 'WONDER-' + draftKey, mode);
                }
                // Synchronous fallback check if entitlements.js is not yet loaded
                const params = new URLSearchParams(window.location.search);
                if (params.get('shared') === 'true') return true;
                const legacyKey = `cosy_wonder_auth_draft_${draftKey}_${mode}`;
                return sessionStorage.getItem(legacyKey) === "true";
            }

            const kusKey = this.getCurrentKusKey();
            if (kusKey) {
                if (window.COSY && window.COSY.entitlements) {
                    return window.COSY.entitlements.check('EVENTS', 'SCIENCE-' + kusKey, mode);
                }
                const params = new URLSearchParams(window.location.search);
                if (params.get('shared') === 'true') return true;
                const legacyKey = `cosy_science_auth_${kusKey}_${mode}`;
                return sessionStorage.getItem(legacyKey) === "true";
            }

            return true; // Fail safe if not gated
        },

        async verifyPasscode(input, mode) {
            await this.ensureEntitlementsLoaded();
            if (window.COSY && window.COSY.entitlements) {
                return await window.COSY.entitlements.unlock(input);
            }
            return false;
        },

        // Render lightweight typewriter style login gate
        showLockOverlay(mode) {
            const overlayId = "wonder-passcode-gate";
            if (document.getElementById(overlayId)) return;

            const isFrench = window.location.pathname.includes('/fr/');
            const isRussian = window.location.pathname.includes('/ru/');
            const isKus = window.location.pathname.includes('keeping-up-with-science');

            // Copywriting specifications
            let title = "";
            let infoLine = "";
            let accessLine = "";
            let btnText = "";
            let errorText = "";
            let backBtnText = "";

            if (isFrench) {
                if (mode === 'mini') {
                    title = "👥 MINI GROUPE";
                    infoLine = "2 à 5 participants";
                    accessLine = "Accès hébergeur requis (Host passcode)";
                    btnText = "REJOINDRE LA SESSION";
                    errorText = "❌ Code d'accès Mini Groupe incorrect";
                } else {
                    title = "🎓 COURS PARTICULIER";
                    infoLine = "Cours individuel enseignant-élève (1-to-1)";
                    accessLine = "Accès enseignant requis (Teacher passcode)";
                    btnText = "DÉMARRER LE COURS";
                    errorText = "❌ Code d'accès Enseignant incorrect";
                }
                backBtnText = "← Retour au Club";
            } else if (isRussian) {
                if (mode === 'mini') {
                    title = "👥 МИНИ ГРУППА";
                    infoLine = "От 2 до 5 участников";
                    accessLine = "Требуется доступ организатора (Host passcode)";
                    btnText = "ПРИСОЕДИНИТЬСЯ К СЕССИИ";
                    errorText = "❌ Неверный код доступа Мини Группы";
                } else {
                    title = "🎓 ЧАСТНЫЙ УРОК";
                    infoLine = "Индивидуальный урок преподаватель-ученик (1-на-1)";
                    accessLine = "Требуется доступ преподавателя (Teacher passcode)";
                    btnText = "НАЧАТЬ УРОК";
                    errorText = "❌ Неверный код доступа Преподавателя";
                }
                backBtnText = "← Вернуться в Клуб";
            } else {
                if (mode === 'mini') {
                    title = "👥 MINI GROUP";
                    infoLine = "2–5 participants";
                    accessLine = "Host access required";
                    btnText = "ENTER SESSION";
                    errorText = "❌ Incorrect Mini Group Access Code";
                } else {
                    title = "🎓 PRIVATE LESSON";
                    infoLine = "Teacher-led 1-to-1 session";
                    accessLine = "Teacher access required";
                    btnText = "ENTER LESSON";
                    errorText = "❌ Incorrect Private Lesson Access Code";
                }
                backBtnText = "← Back to Club";
            }

            const placeholderText = isFrench ? "Entrer le code d'accès..." : (isRussian ? "Введите код доступа..." : "Enter access code...");
            const inputLabel = isFrench ? "Code d'accès" : (isRussian ? "Код доступа" : "Access Code");

            // Inject styles for lock screen dynamically
            const styleId = "wonder-lock-overlay-styles";
            if (!document.getElementById(styleId)) {
                const styleEl = document.createElement('style');
                styleEl.id = styleId;
                styleEl.textContent = `
                    .wonder-lock-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background: rgba(9, 6, 20, 0.9);
                        backdrop-filter: blur(15px);
                        -webkit-backdrop-filter: blur(15px);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 99999;
                        padding: 1.5rem;
                        box-sizing: border-box;
                    }
                    .lock-modal-card {
                        background: #110d26;
                        border: 3px solid #3F2B96;
                        border-radius: 16px;
                        padding: 2.5rem 2rem;
                        max-width: 480px;
                        width: 100%;
                        color: #a9a6e2;
                        font-family: 'Courier New', Courier, monospace;
                        box-shadow: 0 10px 40px rgba(63, 43, 150, 0.4);
                        text-align: center;
                        box-sizing: border-box;
                    }
                    .lock-modal-card.kus-modal {
                        background: #072c1c;
                        border-color: #0F6E56;
                        box-shadow: 0 10px 40px rgba(15, 110, 86, 0.4);
                        color: #a3e4d7;
                    }
                    .lock-modal-title {
                        font-size: 1.6rem;
                        font-weight: bold;
                        color: #ff9f1c;
                        margin: 0 0 0.5rem;
                        font-family: 'Playfair Display', serif;
                    }
                    .lock-modal-info {
                        font-size: 0.95rem;
                        color: #8b5cf6;
                        font-weight: bold;
                        margin-bottom: 0.5rem;
                    }
                    .kus-modal .lock-modal-info {
                        color: #38ef7d;
                    }
                    .lock-modal-access {
                        font-size: 0.85rem;
                        opacity: 0.8;
                        margin-bottom: 2rem;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                    }
                    .lock-input-container {
                        margin-bottom: 1.5rem;
                        text-align: left;
                    }
                    .lock-input-label {
                        display: block;
                        font-size: 0.8rem;
                        color: #a9a6e2;
                        margin-bottom: 0.5rem;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                    .kus-modal .lock-input-label {
                        color: #a3e4d7;
                    }
                    .lock-input {
                        width: 100%;
                        background: #090614;
                        border: 1px solid #3F2B96;
                        border-radius: 6px;
                        color: #FFFEFB;
                        padding: 0.85rem;
                        font-family: 'Courier New', Courier, monospace;
                        font-size: 1rem;
                        box-sizing: border-box;
                        transition: all 0.2s;
                    }
                    .kus-modal .lock-input {
                        background: #041208;
                        border-color: #0F6E56;
                    }
                    .lock-input:focus {
                        outline: none;
                        border-color: #8b5cf6;
                        box-shadow: 0 0 8px rgba(139, 92, 246, 0.4);
                    }
                    .kus-modal .lock-input:focus {
                        border-color: #38ef7d;
                        box-shadow: 0 0 8px rgba(56, 239, 125, 0.4);
                    }
                    .lock-actions {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                        margin-top: 1.5rem;
                    }
                    .lock-btn-submit {
                        background: #3F2B96;
                        color: #FFFEFB;
                        border: none;
                        border-radius: 6px;
                        padding: 0.9rem;
                        font-family: 'Courier New', Courier, monospace;
                        font-size: 0.95rem;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .kus-modal .lock-btn-submit {
                        background: #0F6E56;
                    }
                    .lock-btn-submit:hover {
                        background: #8b5cf6;
                        transform: translateY(-1px);
                    }
                    .kus-modal .lock-btn-submit:hover {
                        background: #11998e;
                    }
                    .lock-btn-back {
                        background: transparent;
                        color: #a9a6e2;
                        border: 1px solid rgba(63, 43, 150, 0.5);
                        border-radius: 6px;
                        padding: 0.75rem;
                        font-family: 'Courier New', Courier, monospace;
                        font-size: 0.85rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.2s;
                        text-decoration: none;
                        display: inline-block;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .kus-modal .lock-btn-back {
                        color: #a3e4d7;
                        border-color: rgba(15, 110, 86, 0.5);
                    }
                    .lock-btn-back:hover {
                        background: rgba(63, 43, 150, 0.2);
                        color: #ff9f1c;
                    }
                    .kus-modal .lock-btn-back:hover {
                        background: rgba(15, 110, 86, 0.2);
                        color: #38ef7d;
                    }
                    .gate-error {
                        color: #ef4444;
                        font-size: 0.85rem;
                        margin-top: 0.5rem;
                        font-weight: bold;
                    }
                    /* Blur content background underneath */
                    .wonder-locked-body-blur > *:not(.wonder-lock-overlay) {
                        filter: blur(8px);
                        pointer-events: none;
                    }
                `;
                document.head.appendChild(styleEl);
            }

            const overlay = document.createElement('div');
            overlay.id = overlayId;
            overlay.className = "wonder-lock-overlay";
            overlay.innerHTML = `
                <div class="lock-modal-card ${isKus ? 'kus-modal' : ''}">
                    <h2 class="lock-modal-title">${title}</h2>
                    <div class="lock-modal-info">${infoLine}</div>
                    <div class="lock-modal-access">${accessLine}</div>
                    <div class="lock-input-container">
                        <label for="gate-passcode-input" class="lock-input-label">${inputLabel}</label>
                        <input type="password" id="gate-passcode-input" class="lock-input" placeholder="${placeholderText}" autocomplete="off" aria-label="${inputLabel}">
                    </div>
                    <div class="lock-actions">
                        <button id="gate-passcode-submit" class="lock-btn-submit">${btnText}</button>
                        <button id="gate-passcode-back" class="lock-btn-back">${backBtnText}</button>
                    </div>
                    <p id="gate-error-message" class="gate-error" style="display: none;" role="alert">${errorText}</p>
                </div>
            `;

            document.body.appendChild(overlay);
            document.body.classList.add("wonder-locked-body-blur");

            const input = document.getElementById("gate-passcode-input");
            const submitBtn = document.getElementById("gate-passcode-submit");
            const backBtn = document.getElementById("gate-passcode-back");
            const errorMsg = document.getElementById("gate-error-message");

            const handleAttempt = async () => {
                const code = input.value.trim();
                const success = await this.verifyPasscode(code, mode);
                if (success) {
                    overlay.remove();
                    document.body.classList.remove("wonder-locked-body-blur");
                    if (window.COSY_WONDER_ROUTER) {
                        window.COSY_WONDER_ROUTER.initModeRouting();
                    }
                    if (window.COSY && typeof window.COSY.showToast === 'function') {
                        if (isKus) {
                            window.COSY.showToast(isFrench ? "🔓 Accès autorisé !" : (isRussian ? "🔓 Доступ разрешен !" : "🔓 Access Approved!"));
                        } else {
                            window.COSY.showToast(isFrench ? "🔓 Accès autorisé au manuscrit !" : "🔓 Manuscript Access Approved!");
                        }
                    }
                    // Re-trigger session audio since page is now unlocked
                    if (typeof window.COSY.reinit === 'function') {
                        window.COSY.reinit();
                    }
                } else {
                    errorMsg.style.display = "block";
                    input.value = "";
                    input.focus();
                }
            };

            const handleGoBack = () => {
                overlay.remove();
                document.body.classList.remove("wonder-locked-body-blur");

                // Route user back to speaking club hub overview
                const prefix = isKus ? (isFrench ? "../../" : (isRussian ? "../../" : "../../")) : "../../";
                window.location.href = prefix + (isKus ? "keeping-up-with-science.html" : "i-couldnt-help-but-wonder.html");
            };

            submitBtn.addEventListener('click', handleAttempt);
            backBtn.addEventListener('click', handleGoBack);
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleAttempt();
            });

            input.focus();
        }
    };
})();
