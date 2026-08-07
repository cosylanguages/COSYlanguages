/**
 * js/core/passcodes.js
 * Lightweight, client-side passcode matching logic using SHA-256.
 * Serves as access gate for MINI GROUP and PRIVATE LESSON modes of ICHBW.
 */
(function() {
    'use strict';

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

        HASH_DB: {
            "01": { mini: "9a55843dbd3ac44de18c4c06127c66e3bc5f71d4bc220d36d6031c0ea58be3ca", private: "350968618eb272b7da956f6c939a0693b232f40f294b5ac3c58874b94790d483" },
            "02": { mini: "23f34cd9b126f8ecfaab4be1956e081f999393bc7be0c487eaa12e19bda6bc8a", private: "b44e1cdb1d811028b4ac63bda58c743de1033688c24459477a80bc27d70e7696" },
            "03": { mini: "dd8fe4f439331298efd841c6a49eab40ced1c3dbde170894c01d199bb03818f4", private: "133e06b1579f59b392aa84ca4787007768bc10ad81cb5c122e7e760ad318305b" },
            "04": { mini: "36ef094792eef67ddcb13a7b9a7f51b90dc639a1cc13791b8b7da9ca25229cba", private: "1ddcbc997f25739b97b8a05d61659f1c4af66224b7eaed16211eba3c71e65bea" },
            "05": { mini: "bc4fc4b5c33579c3d65967e835131df3e4614c0a70ff8c20b8877e92c4b76729", private: "86c2aa4553dd42ec7193a741876f73391c14394c9cb55817cdbab719bf9874b1" },
            "06": { mini: "eccfae1cfd10a6e7dd7a3cb09190f55756919d2b6282442dd74a2370fad66541", private: "c07655eefc0674b977a03853a8bb9f945673527289829ee4af70908bf074e8cd" },
            "07": { mini: "28dc0ca126d5a532ddb25b33f3698da7ecda36b2ddd82dc4d4615613a1279aae", private: "642ec6ded77bdc88608c3cfa5529b4f4bdfc04a57264a254150b5c72033999c0" },
            "08": { mini: "7fa67064f6d7974a3fc26d845f40d5ea02017ea213a5e80d25461bb0eec57df3", private: "f626ab27fa83d4b194c104d33e3434ddb28907eac23376d457d7b16e76f3a88a" },
            "09": { mini: "70f1b45536fea3d7bf66440979d47964ab393f498122e071a7dec300bc34ef2b", private: "5cc29f40e01ae7ec4d2b45ad8490056f3bf3dbf0eca51a4efe376573229821ad" },
            "10": { mini: "c4dffa1d04040be9ae284f8df2ab133ca1d2142a1ea38958eca7a94f5ecd47ed", private: "b607724d7484d5460ec3e7b07bd18315ec37d3ddb863745f87bed8d506ebf981" },
            "11": { mini: "c4a4ec14e86917ed7b08de3f11408a7c4dcfcf081e62568a00434516a4181c1e", private: "fa3bde056e4c399d4ebe19019e24aa451251ba5fd5227a374150a41c35b28b09" },
            "12": { mini: "c8b0247de55e8a1675a1f235e8d7a533df7d1fe71de9b2916d1fad73c1f50f2c", private: "55f05165e1017032352916debe23fb849aac4212a2f5ded216c14d2121700b6c" },
            "13": { mini: "45b71596f8643c5995c3da0daffa7a71b421605072b8408af007ba8f517c76f7", private: "dfa4f8930c64d6ced1ff892827f90010782c450f4ff0019a89e768017ba7958e" },
            "14": { mini: "757f0909fe73da2ba33676fe18f591f7ddc21cfc76b717c66388ea32207954d3", private: "2f1496e3b501e37ec74ef842059bb7157c282aba397ddc8d10221c179eb589c0" },
            "15": { mini: "cf088ad33c0450ed88e0366891f09dcff25d72d5d4b1a5c8905f201b37be2da1", private: "201e91675b373937920c2ff4b6362b397ffebb6dd77055d8e28c70c7b5f34fa0" },
            "16": { mini: "95fb8b5a8c8ea55cdd731fe59edd60eeb78b8aaddf8d35d32cace5ee639396ed", private: "07a398c5fa73a37f695c62a0ab3266de83f4f7c1101fcce7cfbd19d404c1688e" },
            "17": { mini: "0904bbb67537502bfa28916f31d1dd48623243b25196389d135862b43650b6bf", private: "3de7453a7e660f0c6fc25ba69212602cc307bc5ea35f5cfd8af53c2e970b6d54" },
            "18": { mini: "d8cf680cdca05c30d29c1ca8edbf713b636187bb6e3eebc4f587597707bce99e", private: "be78f18abd4ca75abd2d40f7028ae5d56185e8916bc5014acc62b05cd1d1b78a" }
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

        isAuthorized(mode) {
            const draftKey = this.getCurrentDraftKey();
            if (!draftKey) return true; // Fail safe if not an ICHBW session

            // If shared URL parameter is present, bypass passcode lock for students
            const params = new URLSearchParams(window.location.search);
            if (params.get('shared') === 'true') {
                return true;
            }

            const authKey = `cosy_wonder_auth_draft_${draftKey}_${mode}`;
            return sessionStorage.getItem(authKey) === "true";
        },

        async sha256(str) {
            const encoder = new TextEncoder();
            const data = encoder.encode(str);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        },

        async verifyPasscode(input, mode) {
            const draftKey = this.getCurrentDraftKey();
            if (!draftKey) return false;

            const targetHash = this.HASH_DB[draftKey]?.[mode];
            if (!targetHash) return false;

            const computedHash = await this.sha256(input.trim().toUpperCase());
            if (computedHash === targetHash) {
                const authKey = `cosy_wonder_auth_draft_${draftKey}_${mode}`;
                sessionStorage.setItem(authKey, "true");
                return true;
            }
            return false;
        },

        // Render lightweight typewriter style login gate
        showLockOverlay(mode) {
            const overlayId = "wonder-passcode-gate";
            if (document.getElementById(overlayId)) return;

            const isFrench = window.location.pathname.includes('/fr/');
            const draftKey = this.getCurrentDraftKey() || "00";

            // Copywriting specifications
            let title = "";
            let infoLine = "";
            let accessLine = "";
            let btnText = "";
            let errorText = "";
            let backBtnText = "";

            if (mode === 'mini') {
                title = isFrench ? "👥 MINI GROUPE" : "👥 MINI GROUP";
                infoLine = isFrench ? "2 à 5 participants" : "2–5 participants";
                accessLine = isFrench ? "Accès hébergeur requis (Host passcode)" : "Host access required";
                btnText = isFrench ? "REJOINDRE LA SESSION" : "ENTER SESSION";
                errorText = isFrench ? "❌ Code d'accès Mini Groupe incorrect" : "❌ Incorrect Mini Group Access Code";
                backBtnText = isFrench ? "← Retour au Club" : "← Back to Club";
            } else {
                title = isFrench ? "🎓 COURS PARTICULIER" : "🎓 PRIVATE LESSON";
                infoLine = isFrench ? "Cours individuel enseignant-élève (1-to-1)" : "Teacher-led 1-to-1 session";
                accessLine = isFrench ? "Accès enseignant requis (Teacher passcode)" : "Teacher access required";
                btnText = isFrench ? "DÉMARRER LE COURS" : "ENTER LESSON";
                errorText = isFrench ? "❌ Code d'accès Enseignant incorrect" : "❌ Incorrect Private Lesson Access Code";
                backBtnText = isFrench ? "← Retour au Club" : "← Back to Club";
            }

            const placeholderText = isFrench ? "Entrer le code d'accès..." : "Enter access code...";
            const inputLabel = isFrench ? "Code d'accès" : "Access Code";

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
                    .lock-input:focus {
                        outline: none;
                        border-color: #8b5cf6;
                        box-shadow: 0 0 8px rgba(139, 92, 246, 0.4);
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
                    .lock-btn-submit:hover {
                        background: #8b5cf6;
                        transform: translateY(-1px);
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
                    .lock-btn-back:hover {
                        background: rgba(63, 43, 150, 0.2);
                        color: #ff9f1c;
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
                <div class="lock-modal-card">
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
                        window.COSY.showToast(isFrench ? "🔓 Accès autorisé au manuscrit !" : "🔓 Manuscript Access Approved!");
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
                const prefix = "../../../";
                window.location.href = prefix + "i-couldnt-help-but-wonder.html";
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
