/**
 * games/scene_match/game.js
 * Reusable engine logic for Scene Match activity across multiple rooms/scenes.
 */
(function() {
    'use strict';

    const GAME_ID = 'scenematch';

    function renderSetup() {
        const body = document.getElementById('go-body');
        const lang = (window.COSY_I18N && window.COSY_I18N.currentLang) || 'en';

        const titleText = window.t('scene_match_title') || 'Scene Match 🖼️';
        const metaText = window.t('scene_match_meta') || 'Vocab & Puzzles · Solo';

        document.getElementById('go-title').textContent = titleText;
        document.getElementById('go-meta').textContent = metaText;

        const LANG_OPTS = [
            { code: 'en', label: 'English 🇬🇧' },
            { code: 'fr', label: 'Français 🇫🇷' },
            { code: 'it', label: 'Italiano 🇮🇹' },
            { code: 'ru', label: 'Русский 🇷🇺' },
            { code: 'el', label: 'Ελληνικά 🇬🇷' }
        ];

        body.innerHTML = `
            <div class="setup-screen">
              <h2>${titleText}</h2>
              <p data-i18n="scene_match_instruction">Select a word from the bank, then click or press Enter on the matching object in the room!</p>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="sm-s-lang">
                    ${LANG_OPTS.map(l => `<option value="${l.code}" ${l.code === lang ? 'selected' : ''}>${l.label}</option>`).join('')}
                </select>
              </div>
              <button class="btn-start-game" type="button" onclick="COSY_GAME.start()">▶ Start game</button>
            </div>`;
    }

    function shuffle(arr) {
        return [...arr].sort(() => Math.random() - 0.5);
    }

    window.COSY_GAME = {
        activeSceneId: 'apartment',
        selectedWordId: null,
        sceneMatches: {},

        async start(sceneId) {
            const langSelect = document.getElementById('sm-s-lang');
            if (langSelect && langSelect.value) {
                this.activeLang = langSelect.value;
                if (window.setLanguage) {
                    await window.setLanguage(langSelect.value);
                }
            } else {
                this.activeLang = (window.COSY_I18N && window.COSY_I18N.currentLang) || 'en';
            }
            this.activeSceneId = sceneId || 'apartment';
            this.sceneMatches = {
                apartment: new Set(),
                bedroom: new Set(),
                kitchen: new Set(),
                bathroom: new Set(),
                routine: new Set(),
                seasons: new Set(),
                clothing: new Set(),
                animals: new Set(),
                city: new Set()
            };
            this.selectedWordId = null;

            COSYGame.init(GAME_ID, this.activeLang, 'A1');
            this.renderGame();
        },

        switchScene(sceneId) {
            if (!window.COSY_SCENE_DATA[sceneId]) return;
            this.activeSceneId = sceneId;
            this.selectedWordId = null;
            this.renderGame();
        },

        renderGame() {
            const body = document.getElementById('go-body');
            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            const lang = this.activeLang;

            if (!data) {
                body.innerHTML = '<div class="game-card">Scene data not found! <button onclick="COSY_GAME.reset()">Back</button></div>';
                return;
            }

            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();

            // Word bank words (shuffled)
            const wordsList = shuffle(data.hotspots.map(hs => ({
                id: hs.id,
                word: hs.words[lang] || hs.words['en'] || hs.id
            })));

            const instructionText = window.t('scene_match_instruction') || 'Select a word from the bank, then click or press Enter on the matching object in the room!';
            const selectWordText = window.t('scene_match_select_word') || 'Select a word:';
            const progressLabel = window.t('scene_match_progress') || 'Matched';

            const sceneKeys = Object.keys(window.COSY_SCENE_DATA);

            body.innerHTML = `
              <div class="sm-container">
                <div class="sm-header-card">
                  <!-- Room Switcher Tabs -->
                  <div class="sm-room-tabs">
                    ${sceneKeys.map(key => {
                        const sData = window.COSY_SCENE_DATA[key];
                        const sTitle = (sData.title && sData.title[lang]) || (sData.title && sData.title['en']) || key;
                        const sMatched = (this.sceneMatches[key] || new Set()).size;
                        const sTotal = sData.hotspots.length;
                        return `
                          <button class="sm-tab-btn ${key === this.activeSceneId ? 'active' : ''}"
                                  type="button"
                                  aria-label="View scene ${sTitle}"
                                  onclick="COSY_GAME.switchScene('${key}')">
                             ${sTitle} (${sMatched}/${sTotal})
                          </button>`;
                    }).join('')}
                  </div>

                  <div class="sm-instruction">${instructionText}</div>
                  <div class="sm-progress-bar-wrap">
                    <div class="sm-progress-track">
                      <div class="sm-progress-fill" id="sm-p-fill" style="width: 0%"></div>
                    </div>
                    <div class="sm-progress-text" id="sm-p-text">${progressLabel}: 0 / ${data.hotspots.length}</div>
                  </div>
                </div>

                <div class="sm-stage">
                  <svg class="sm-svg-scene" viewBox="${data.viewBox}" xmlns="http://www.w3.org/2000/svg">
                    ${data.svgBackground}

                    <!-- Hotspots overlay & labels container -->
                    <g id="sm-hotspots-group"></g>
                    <g id="sm-doors-group"></g>
                    <g id="sm-labels-group"></g>
                  </svg>
                </div>

                <div class="sm-word-bank-card">
                  <div class="sm-bank-title">${selectWordText}</div>
                  <div class="sm-words-grid" id="sm-words-grid">
                    ${wordsList.map(w => {
                        const matched = currentMatched.has(w.id);
                        return `
                          <button class="sm-word-btn"
                                  id="word-btn-${w.id}"
                                  type="button"
                                  ${matched ? 'disabled' : ''}
                                  onclick="COSY_GAME.selectWord('${w.id}')">
                            ${w.word}
                          </button>`;
                    }).join('')}
                  </div>
                </div>
              </div>`;

            this.renderDoors();
            this.renderHotspots();
            this.renderExistingPinnedLabels();
            this.updateProgress();
        },

        renderDoors() {
            const doorsGroup = document.getElementById('sm-doors-group');
            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            if (!doorsGroup || !data || !data.doors) return;

            const lang = this.activeLang;

            doorsGroup.innerHTML = data.doors.map(door => {
                const labelText = door.labels[lang] || door.labels['en'] || 'Door';
                const approxWidth = labelText.length * 7 + 16;
                const targetTitle = (window.COSY_SCENE_DATA[door.targetSceneId] && window.COSY_SCENE_DATA[door.targetSceneId].title && window.COSY_SCENE_DATA[door.targetSceneId].title[lang]) || door.targetSceneId;
                let bgX = door.labelX - approxWidth / 2;
                let textX = door.labelX;
                if (bgX < 4) { bgX = 4; textX = bgX + approxWidth / 2; }
                if (bgX + approxWidth > 796) { bgX = 796 - approxWidth; textX = bgX + approxWidth / 2; }
                return `
                  <g class="sm-door-hotspot"
                     tabindex="0"
                     role="button"
                     aria-label="Walkway to ${targetTitle}"
                     onclick="COSY_GAME.switchScene('${door.targetSceneId}')"
                     onkeydown="COSY_GAME.handleDoorKey(event, '${door.targetSceneId}')">
                    <rect x="${door.x}" y="${door.y}" width="${door.width}" height="${door.height}" rx="4" />
                    <g>
                      <rect class="sm-door-bg" x="${bgX}" y="${door.labelY - 12}" width="${approxWidth}" height="20" />
                      <text class="sm-door-label" x="${textX}" y="${door.labelY + 2}" text-anchor="middle">${labelText}</text>
                    </g>
                  </g>`;
            }).join('');
        },

        handleDoorKey(e, targetSceneId) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.switchScene(targetSceneId);
            }
        },

        renderHotspots() {
            const hsGroup = document.getElementById('sm-hotspots-group');
            if (!hsGroup) return;

            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            const lang = this.activeLang;

            hsGroup.innerHTML = data.hotspots.map(hs => {
                const isMatched = currentMatched.has(hs.id);
                const ariaName = hs.words[lang] || hs.words['en'] || hs.id;
                return `
                  <g class="sm-hotspot ${isMatched ? 'matched' : ''}"
                     id="hs-${hs.id}"
                     tabindex="${isMatched ? '-1' : '0'}"
                     role="button"
                     aria-label="${ariaName} hotspot"
                     onclick="COSY_GAME.handleHotspotClick('${hs.id}')"
                     onkeydown="COSY_GAME.handleHotspotKey(event, '${hs.id}')">
                    <rect class="hs-hit" x="${hs.x}" y="${hs.y}" width="${hs.width}" height="${hs.height}" rx="8" />
                  </g>`;
            }).join('');
        },

        renderExistingPinnedLabels() {
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            currentMatched.forEach(hsId => {
                this.pinLabel(hsId);
            });
        },

        selectWord(id) {
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            if (currentMatched.has(id)) return;

            this.selectedWordId = id;
            document.querySelectorAll('.sm-word-btn').forEach(btn => {
                btn.classList.remove('selected');
            });

            const activeBtn = document.getElementById(`word-btn-${id}`);
            if (activeBtn) {
                activeBtn.classList.add('selected');
            }
        },

        handleHotspotKey(e, hsId) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleHotspotClick(hsId);
            }
        },

        handleHotspotClick(hsId) {
            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            if (currentMatched.has(hsId)) return;

            if (!this.selectedWordId) {
                this.shakeHotspot(hsId);
                return;
            }

            if (this.selectedWordId === hsId) {
                // Correct Match
                currentMatched.add(hsId);
                COSYGame.addScore(10);

                // Disable word button
                const btn = document.getElementById(`word-btn-${hsId}`);
                if (btn) {
                    btn.classList.remove('selected');
                    btn.disabled = true;
                }

                // Pin label on scene
                this.pinLabel(hsId);

                // Re-render hotspots
                this.renderHotspots();

                this.selectedWordId = null;
                this.updateProgress();

                // Check Completion across all rooms
                this.checkOverallCompletion();
            } else {
                // Wrong Match
                this.shakeHotspot(hsId);
            }
        },

        shakeHotspot(hsId) {
            const hsEl = document.getElementById(`hs-${hsId}`);
            if (hsEl) {
                hsEl.classList.add('shake');
                setTimeout(() => hsEl.classList.remove('shake'), 450);
            }
        },

        pinLabel(hsId) {
            const labelsGroup = document.getElementById('sm-labels-group');
            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            const hs = data && data.hotspots.find(h => h.id === hsId);
            if (!labelsGroup || !hs) return;

            if (document.getElementById(`pinned-label-${hsId}`)) return;

            const textStr = hs.words[this.activeLang] || hs.words['en'] || hs.id;
            const approxWidth = textStr.length * 8.5 + 24;

            const labelG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            labelG.setAttribute('id', `pinned-label-${hsId}`);

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('class', 'sm-pinned-bg');
            rect.setAttribute('x', hs.labelX - approxWidth / 2);
            rect.setAttribute('y', hs.labelY - 14);
            rect.setAttribute('width', approxWidth);
            rect.setAttribute('height', 26);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('class', 'sm-pinned-label');
            text.setAttribute('x', hs.labelX);
            text.setAttribute('y', hs.labelY + 4);
            text.setAttribute('text-anchor', 'middle');
            text.textContent = textStr;

            labelG.appendChild(rect);
            labelG.appendChild(text);
            labelsGroup.appendChild(labelG);
        },

        updateProgress() {
            const data = window.COSY_SCENE_DATA[this.activeSceneId];
            if (!data) return;

            const currentMatched = this.sceneMatches[this.activeSceneId] || new Set();
            const total = data.hotspots.length;
            const current = currentMatched.size;
            const percent = Math.round((current / total) * 100);

            const fill = document.getElementById('sm-p-fill');
            const text = document.getElementById('sm-p-text');
            const progressLabel = window.t('scene_match_progress') || 'Matched';

            if (fill) fill.style.width = `${percent}%`;
            if (text) text.textContent = `${progressLabel}: ${current} / ${total}`;

            // Update tab badge texts if present
            const sceneKeys = Object.keys(window.COSY_SCENE_DATA);
            const tabBtns = document.querySelectorAll('.sm-tab-btn');
            tabBtns.forEach((btn, idx) => {
                const sKey = sceneKeys[idx];
                if (sKey) {
                    const sData = window.COSY_SCENE_DATA[sKey];
                    const sTitle = (sData.title && sData.title[this.activeLang]) || (sData.title && sData.title['en']) || sKey;
                    const sMatched = (this.sceneMatches[sKey] || new Set()).size;
                    btn.textContent = `${sTitle} (${sMatched}/${sData.hotspots.length})`;
                }
            });
        },

        checkOverallCompletion() {
            const sceneKeys = Object.keys(window.COSY_SCENE_DATA);
            const allComplete = sceneKeys.every(k => {
                const sData = window.COSY_SCENE_DATA[k];
                const sMatched = this.sceneMatches[k] || new Set();
                return sMatched.size === sData.hotspots.length;
            });

            if (allComplete) {
                setTimeout(() => this.renderEnd(), 600);
            }
        },

        reset: renderSetup,

        renderEnd() {
            const lang = this.activeLang;
            COSYScores.save(GAME_ID, lang, 'A1', COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);

            const compTitle = window.t('scene_match_complete_title') || 'Apartment Walkthrough Complete! 🎉';
            const compMsg = window.t('scene_match_complete_msg') || "Outstanding work! You've successfully identified all objects in the entire apartment.";
            const playAgainText = window.t('scene_match_play_again') || 'Play Again ↺';

            document.getElementById('go-body').innerHTML = `
                <div class="sm-completion-card">
                    <div class="sm-completion-icon">🏆</div>
                    <div class="sm-completion-title">${compTitle}</div>
                    <div class="sm-completion-msg">${compMsg}</div>
                    ${best ? `<div class="game-sub" style="margin-bottom:1.5rem">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" type="button" onclick="COSY_GAME.start('apartment')">${playAgainText}</button>
                        <button class="btn-g-secondary" type="button" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
