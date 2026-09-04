/**
 * games/cosy_world/game.js
 * Game Engine for COSY World — Open-World Language Learning RPG
 * Built on "Learn by Living, Not by Translating" (Inductive Direct Immersion).
 * Renders visual pointers, cause-and-effect sequences, gesture-rich dialogues, and speech TTS.
 */
(function() {
    'use strict';

    window.COSY_WORLD = {
        state: {
            currentLocationId: 'apartment_living',
            currentLang: 'en',
            xp: 0,
            citizenLvl: 1,
            discoveredObjects: new Set(),
            completedQuests: new Set(),
            activeQuests: new Set(['q1_key_door']),
            unlockedGrammar: new Set(['gt_greetings']),
            npcRelationships: {
                james_york: 0,
                ella_bronx: 0,
                anna: 0,
                lucas_baker: 0,
                marco_barista: 0
            },
            activeTab: 'quests',
            showGuidePointers: true,
            showTranslations: false
        },

        audioCtx: null,
        ambientOsc: null,

        init() {
            const savedState = localStorage.getItem('COSY_WORLD_STATE');
            if (savedState) {
                try {
                    const parsed = JSON.parse(savedState);
                    this.state.xp = parsed.xp || 0;
                    this.state.citizenLvl = parsed.citizenLvl || 1;
                    this.state.currentLocationId = parsed.currentLocationId || 'apartment_living';
                    this.state.currentLang = parsed.currentLang || 'en';
                    this.state.discoveredObjects = new Set(parsed.discoveredObjects || []);
                    this.state.completedQuests = new Set(parsed.completedQuests || []);
                    this.state.activeQuests = new Set(parsed.activeQuests || ['q1_key_door']);
                    this.state.unlockedGrammar = new Set(parsed.unlockedGrammar || ['gt_greetings']);
                    if (parsed.showGuidePointers !== undefined) this.state.showGuidePointers = parsed.showGuidePointers;
                    if (parsed.showTranslations !== undefined) this.state.showTranslations = parsed.showTranslations;
                } catch (e) {
                    console.warn('Could not parse saved COSY World state, using defaults');
                }
            }

            this.populateLanguageSelector();
            this.updatePlayerStats();
            this.renderWorldViewport();
            this.renderHudTab();
        },

        saveState() {
            const dataToSave = {
                xp: this.state.xp,
                citizenLvl: this.state.citizenLvl,
                currentLocationId: this.state.currentLocationId,
                currentLang: this.state.currentLang,
                discoveredObjects: Array.from(this.state.discoveredObjects),
                completedQuests: Array.from(this.state.completedQuests),
                activeQuests: Array.from(this.state.activeQuests),
                unlockedGrammar: Array.from(this.state.unlockedGrammar),
                showGuidePointers: this.state.showGuidePointers,
                showTranslations: this.state.showTranslations
            };
            localStorage.setItem('COSY_WORLD_STATE', JSON.stringify(dataToSave));
        },

        toggleGuidePointers() {
            this.state.showGuidePointers = !this.state.showGuidePointers;
            this.saveState();
            this.renderWorldViewport();
            this.showToast(this.state.showGuidePointers ? 'Visual Guide Pointers ON 👉' : 'Visual Guide Pointers OFF 🕶️');
        },

        toggleTranslations() {
            this.state.showTranslations = !this.state.showTranslations;
            this.saveState();
            this.renderHudTab();
            this.showToast(this.state.showTranslations ? 'Translations ON (Accessibility) 🌐' : 'Direct Immersion Mode ON 🎯');
        },

        populateLanguageSelector() {
            const sel = document.getElementById('cw-lang-sel');
            if (!sel || !window.COSY_WORLD_DATA) return;

            sel.innerHTML = window.COSY_WORLD_DATA.languages.map(l => `
                <option value="${l.code}" ${l.code === this.state.currentLang ? 'selected' : ''}>${l.flag} ${l.label}</option>
            `).join('');
        },

        changeLanguage(code) {
            this.state.currentLang = code;
            this.saveState();
            this.renderWorldViewport();
            this.renderHudTab();
            this.showToast(`Target Language: ${code.toUpperCase()} 🌍`);
        },

        updatePlayerStats() {
            this.state.citizenLvl = Math.floor(this.state.xp / 100) + 1;
            const lvlTitles = ['Novice Explorer', 'Town Resident', 'Active Citizen', 'Prominent Polyglot', 'Town Master'];
            const title = lvlTitles[Math.min(this.state.citizenLvl - 1, lvlTitles.length - 1)];

            const lvlEl = document.getElementById('cw-citizen-lvl');
            const xpEl = document.getElementById('cw-xp-num');
            const fillEl = document.getElementById('cw-xp-fill');

            if (lvlEl) lvlEl.textContent = `${this.state.citizenLvl} (${title})`;
            if (xpEl) xpEl.textContent = this.state.xp;
            if (fillEl) fillEl.style.width = `${this.state.xp % 100}%`;
        },

        addXP(amount) {
            this.state.xp += amount;
            this.updatePlayerStats();
            this.saveState();
            this.showToast(`+${amount} XP Gained! ⭐`);
        },

        switchLocation(locationId) {
            const loc = window.COSY_WORLD_DATA.districts[locationId];
            if (!loc) return;

            this.state.currentLocationId = locationId;
            this.saveState();
            this.renderWorldViewport();
            this.showToast(`Entered ${loc.name[this.state.currentLang] || loc.name.en} 🚪`);
        },

        renderWorldViewport() {
            const svg = document.getElementById('cw-world-svg');
            const titleEl = document.getElementById('cw-location-title');
            const districtEl = document.getElementById('cw-district-name');

            if (!svg || !window.COSY_WORLD_DATA) return;

            const loc = window.COSY_WORLD_DATA.districts[this.state.currentLocationId];
            if (!loc) return;

            const lang = this.state.currentLang;
            if (titleEl) titleEl.textContent = `${loc.icon} ${loc.name[lang] || loc.name.en}`;
            if (districtEl) districtEl.textContent = loc.district;

            let html = `
                <!-- Background Wall & Floor -->
                <rect x="0" y="0" width="800" height="340" fill="#f5f0eb" />
                <rect x="0" y="340" width="800" height="160" fill="#e8ded1" />
                <line x1="0" y1="340" x2="800" y2="340" stroke="#d4c5b3" stroke-width="4" />
            `;

            // Draw Doors / Portals
            if (loc.doors) {
                loc.doors.forEach(d => {
                    const doorLabel = d.labels[lang] || d.labels.en || 'Door';
                    html += `
                        <g class="cw-door-portal" onclick="COSY_WORLD.switchLocation('${d.targetId}')">
                            <rect x="${d.x}" y="${d.y}" width="${d.width}" height="${d.height}" rx="6" />
                            <rect x="${d.x + 5}" y="${d.labelY || d.y - 25}" width="${d.width - 10}" height="22" rx="4" fill="#1e293b" />
                            <text x="${d.x + d.width / 2}" y="${(d.labelY || d.y - 25) + 15}" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">${doorLabel}</text>
                        </g>
                    `;
                });
            }

            // Draw Objects with Action Pointers
            if (loc.objects) {
                loc.objects.forEach((objId, idx) => {
                    const obj = window.COSY_WORLD_DATA.objects[objId];
                    if (!obj) return;
                    const word = obj.words[lang] || obj.words.en || objId;
                    const isDiscovered = this.state.discoveredObjects.has(objId);

                    html += `
                        <g class="cw-obj-hotspot" onclick="COSY_WORLD.inspectObject('${objId}')">
                            <rect class="hit-box" x="${obj.x}" y="${obj.y}" width="${obj.width}" height="${obj.height}" />
                            <text x="${obj.x + obj.width / 2}" y="${obj.y + obj.height / 2 + 8}" font-size="28" text-anchor="middle">${obj.emoji}</text>

                            ${this.state.showGuidePointers && idx === 0 && !isDiscovered ? `
                                <text x="${obj.x + obj.width / 2}" y="${obj.y - 12}" font-size="20" text-anchor="middle" class="cw-hand-pointer">👇</text>
                            ` : ''}

                            <rect x="${obj.labelX - word.length * 4 - 8}" y="${obj.labelY - 14}" width="${word.length * 8 + 16}" height="20" rx="10" fill="${isDiscovered ? '#10b981' : '#1e293b'}" opacity="0.9" />
                            <text x="${obj.labelX}" y="${obj.labelY}" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">${word}</text>
                        </g>
                    `;
                });
            }

            // Draw NPCs with Gestures
            if (loc.npcs) {
                loc.npcs.forEach((npcId, idx) => {
                    const npc = window.COSY_WORLD_DATA.npcs[npcId];
                    if (!npc) return;
                    const posX = 200 + idx * 150;
                    const posY = 300;

                    html += `
                        <g class="cw-npc-hotspot" onclick="COSY_WORLD.interactNPC('${npcId}')">
                            <circle class="npc-hit" cx="${posX}" cy="${posY}" r="32" />
                            <text x="${posX}" y="${posY + 10}" font-size="32" text-anchor="middle">${npc.avatar}</text>

                            ${this.state.showGuidePointers ? `
                                <text x="${posX + 25}" y="${posY - 20}" font-size="18" text-anchor="middle">💬</text>
                            ` : ''}

                            <rect x="${posX - 40}" y="${posY + 38}" width="80" height="20" rx="10" fill="#f59e0b" />
                            <text x="${posX}" y="${posY + 52}" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">${npc.name}</text>
                        </g>
                    `;
                });
            }

            svg.innerHTML = html;
        },

        inspectObject(objId) {
            const obj = window.COSY_WORLD_DATA.objects[objId];
            if (!obj) return;

            const lang = this.state.currentLang;
            const word = obj.words[lang] || obj.words.en || objId;
            const sequence = obj.visualSequence || `${obj.emoji} ${word}`;

            if (!this.state.discoveredObjects.has(objId)) {
                this.state.discoveredObjects.add(objId);
                this.addXP(15);
                this.checkQuests();
            }

            // Auto-speak target word for natural auditory acquisition
            this.speakText(word, lang);

            const body = document.getElementById('cw-modal-body');
            body.innerHTML = `
                <div style="text-align:center;">
                    <div style="font-size:4rem; margin-bottom:0.5rem;">${obj.emoji}</div>
                    <h2 style="font-family:'Fraunces',serif; font-size:2rem; color:var(--ink); margin-bottom:0.25rem;">${word}</h2>

                    <button class="btn-g-primary" type="button" style="margin-bottom:1.25rem; font-size:1.1rem; padding:0.6rem 1.25rem;" onclick="COSY_WORLD.speakText('${word.replace(/'/g, "\\'")}', '${lang}')">
                        🔊 Speak Target Word
                    </button>

                    <div class="cw-item-card" style="text-align:left; background:var(--tan-light); padding:1rem; border-radius:14px; margin-bottom:1rem;">
                        <div class="cw-item-title" style="font-size:1rem; color:var(--teal);">🎬 Visual Action Chain</div>
                        <div style="font-size:1.1rem; font-weight:700; color:var(--ink); margin-top:0.4rem;">${sequence}</div>
                    </div>

                    ${obj.actionChain ? `
                        <button class="btn-g-secondary" type="button" style="width:100%; margin-top:0.5rem;" onclick="COSY_WORLD.triggerActionChain('${obj.id}')">
                            ${obj.actionChain.actionIcon}
                        </button>
                    ` : ''}

                    ${this.state.showTranslations && obj.words.en ? `
                        <div style="font-size:0.85rem; color:var(--ink-muted); margin-top:1rem;">🌐 English Translation: ${obj.words.en}</div>
                    ` : ''}
                </div>
            `;

            this.openModal();
            this.renderWorldViewport();
            this.renderHudTab();
        },

        triggerActionChain(objId) {
            const obj = window.COSY_WORLD_DATA.objects[objId];
            if (!obj || !obj.actionChain) return;

            this.showToast(`Action Triggered: ${obj.actionChain.actionIcon}! ✨`);
            this.closeModal();

            if (obj.actionChain.nextObject === 'door_lock') {
                this.completeQuest('q1_key_door');
            }
        },

        interactNPC(npcId) {
            const npc = window.COSY_WORLD_DATA.npcs[npcId];
            if (!npc) return;

            const lang = this.state.currentLang;
            const dialogues = (npc.dialogues && npc.dialogues[lang]) || npc.dialogues.en || [];
            const dlg = dialogues[0] || { text: '👋 Hello!', options: [] };

            const body = document.getElementById('cw-modal-body');
            body.innerHTML = `
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">
                    <div style="font-size:3rem; background:var(--tan-light); padding:0.5rem; border-radius:50%; border:2px solid var(--border);">${npc.avatar}</div>
                    <div>
                        <h2 style="font-family:'Fraunces',serif; font-size:1.5rem; color:var(--ink); margin:0;">${npc.name}</h2>
                        <div style="font-size:0.85rem; color:var(--teal); font-weight:700;">${npc.role}</div>
                    </div>
                </div>

                <div class="cw-item-card" style="font-size:1.15rem; font-weight:600; line-height:1.5; color:var(--ink); margin-bottom:1rem; text-align:center;">
                    "${dlg.text}"
                </div>

                ${dlg.visualAction ? `
                    <div style="text-align:center; font-size:1.5rem; margin-bottom:1.25rem; padding:0.5rem; background:#f0fdf4; border-radius:12px; border:1px solid #10b981;">
                        ${dlg.visualAction}
                    </div>
                ` : ''}

                <div>
                    ${dlg.options.map(opt => `
                        <button class="btn-g-primary" type="button" style="width:100%; margin-bottom:0.5rem; font-size:1.05rem;" onclick="COSY_WORLD.handleDialogueOption('${npcId}', '${opt.questId || ''}')">
                            ${opt.label}
                        </button>
                    `).join('')}
                </div>
            `;

            this.openModal();
        },

        handleDialogueOption(npcId, questId) {
            if (questId && window.COSY_WORLD_DATA.quests.find(q => q.id === questId)) {
                if (!this.state.completedQuests.has(questId)) {
                    this.state.activeQuests.add(questId);
                    this.completeQuest(questId);
                }
            }
            this.closeModal();
        },

        completeQuest(questId) {
            const q = window.COSY_WORLD_DATA.quests.find(quest => quest.id === questId);
            if (!q || this.state.completedQuests.has(questId)) return;

            this.state.completedQuests.add(questId);
            this.state.activeQuests.delete(questId);
            this.addXP(q.xpReward);

            if (q.grammarUnlock) {
                this.state.unlockedGrammar.add(q.grammarUnlock);
            }

            this.saveState();
            this.renderHudTab();
            this.showToast(`Quest Complete: ${q.title}! 🎉`);
        },

        checkQuests() {
            window.COSY_WORLD_DATA.quests.forEach(q => {
                if (this.state.completedQuests.has(q.id)) return;

                if (q.type === 'Vocabulary Hunt' && q.targetCount) {
                    if (this.state.discoveredObjects.size >= q.targetCount) {
                        this.completeQuest(q.id);
                    }
                }
            });
        },

        speakText(text, lang) {
            if (!('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel();

            const langCodes = { en: 'en-US', fr: 'fr-FR', it: 'it-IT', es: 'es-ES', de: 'de-DE', ru: 'ru-RU', el: 'el-GR' };
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = langCodes[lang] || 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        },

        switchTab(tabName, btnEl) {
            this.state.activeTab = tabName;
            document.querySelectorAll('.cw-hud-btn').forEach(b => b.classList.remove('active'));
            if (btnEl) btnEl.classList.add('active');
            this.renderHudTab();
        },

        renderHudTab() {
            const body = document.getElementById('cw-hud-tab-body');
            if (!body) return;

            const lang = this.state.currentLang;

            if (this.state.activeTab === 'quests') {
                body.innerHTML = window.COSY_WORLD_DATA.quests.map(q => {
                    const isDone = this.state.completedQuests.has(q.id);
                    return `
                        <div class="cw-item-card" style="${isDone ? 'opacity:0.6;' : ''}">
                            <div class="cw-item-title">
                                <span>${q.title}</span>
                                <span>${isDone ? '✅ Done' : `⭐ ${q.xpReward} XP`}</span>
                            </div>
                            <div class="cw-item-desc">${q.description}</div>
                        </div>
                    `;
                }).join('');
            } else if (this.state.activeTab === 'vocab') {
                const disc = Array.from(this.state.discoveredObjects);
                if (disc.length === 0) {
                    body.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--ink-muted);">No objects discovered yet! Click items in rooms to build your visual encyclopedia.</div>`;
                    return;
                }
                body.innerHTML = disc.map(objId => {
                    const obj = window.COSY_WORLD_DATA.objects[objId];
                    if (!obj) return '';
                    const word = obj.words[lang] || obj.words.en || objId;
                    return `
                        <div class="cw-item-card" style="cursor:pointer;" onclick="COSY_WORLD.inspectObject('${objId}')">
                            <div class="cw-item-title">
                                <span>${obj.emoji} ${word}</span>
                                <span style="font-size:0.8rem; color:var(--teal);">🔊 Speak</span>
                            </div>
                        </div>
                    `;
                }).join('');
            } else if (this.state.activeTab === 'grammar') {
                body.innerHTML = window.COSY_WORLD_DATA.grammarTree.map(g => {
                    const isUnlocked = this.state.unlockedGrammar.has(g.id);
                    return `
                        <div class="cw-item-card" style="${!isUnlocked ? 'opacity:0.5;' : ''}">
                            <div class="cw-item-title">
                                <span>${g.title}</span>
                                <span style="font-size:0.75rem; background:var(--tan-light); padding:0.2rem 0.5rem; border-radius:10px;">${g.cefr}</span>
                            </div>
                            <div class="cw-item-desc">${g.desc}</div>
                        </div>
                    `;
                }).join('');
            } else if (this.state.activeTab === 'npcs') {
                body.innerHTML = Object.keys(window.COSY_WORLD_DATA.npcs).map(npcId => {
                    const npc = window.COSY_WORLD_DATA.npcs[npcId];
                    return `
                        <div class="cw-item-card" style="cursor:pointer;" onclick="COSY_WORLD.switchLocation('town_square')">
                            <div class="cw-item-title">
                                <span>${npc.avatar} ${npc.name}</span>
                                <span style="font-size:0.8rem; color:var(--teal);">Talk 💬</span>
                            </div>
                            <div class="cw-item-desc">${npc.role}</div>
                        </div>
                    `;
                }).join('');
            }
        },

        playAmbience(type) {
            if (type === 'none') {
                if (this.ambientOsc) {
                    this.ambientOsc.stop();
                    this.ambientOsc = null;
                }
                return;
            }

            if (!this.audioCtx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) this.audioCtx = new AudioCtx();
            }

            if (!this.audioCtx) return;

            if (this.ambientOsc) {
                this.ambientOsc.stop();
                this.ambientOsc = null;
            }

            try {
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(type === 'piano' ? 220 : 330, this.audioCtx.currentTime);
                gain.gain.setValueAtTime(0.02, this.audioCtx.currentTime);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start();
                this.ambientOsc = osc;
            } catch (e) {
                console.warn('Web Audio synthesis not supported or blocked');
            }
        },

        openModal() {
            const m = document.getElementById('cw-modal');
            if (m) m.classList.add('open');
        },

        closeModal() {
            const m = document.getElementById('cw-modal');
            if (m) m.classList.remove('open');
        },

        showToast(msg) {
            const toast = document.getElementById('toast');
            if (!toast) return;
            toast.textContent = msg;
            toast.style.opacity = '1';
            setTimeout(() => { toast.style.opacity = '0'; }, 2500);
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        window.COSY_WORLD.init();
    });
})();
