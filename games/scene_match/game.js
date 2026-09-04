/**
 * games/scene_match/game.js
 * Standalone logic for Scene Match game.
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
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start game</button>
            </div>`;
    }

    function shuffle(arr) {
        return [...arr].sort(() => Math.random() - 0.5);
    }

    window.COSY_GAME = {
        sceneId: 'apartment',
        selectedWordId: null,
        matchedIds: new Set(),

        start() {
            const langSelect = document.getElementById('sm-s-lang');
            if (langSelect && langSelect.value) {
                if (window.setLanguage) {
                    window.setLanguage(langSelect.value);
                }
            }
            this.activeLang = (window.COSY_I18N && window.COSY_I18N.currentLang) || 'en';
            this.sceneData = window.COSY_SCENE_DATA[this.sceneId];
            this.matchedIds = new Set();
            this.selectedWordId = null;

            COSYGame.init(GAME_ID, this.activeLang, 'A1');
            this.renderGame();
        },

        renderGame() {
            const body = document.getElementById('go-body');
            const data = this.sceneData;
            const lang = this.activeLang;

            if (!data) {
                body.innerHTML = '<div class="game-card">Scene data not found! <button onclick="COSY_GAME.reset()">Back</button></div>';
                return;
            }

            // Word bank words (shuffled)
            const wordsList = shuffle(data.hotspots.map(hs => ({
                id: hs.id,
                word: hs.words[lang] || hs.words['en'] || hs.id
            })));

            const instructionText = window.t('scene_match_instruction') || 'Select a word from the bank, then click or press Enter on the matching object in the room!';
            const selectWordText = window.t('scene_match_select_word') || 'Select a word:';
            const progressLabel = window.t('scene_match_progress') || 'Matched';

            body.innerHTML = `
              <div class="sm-container">
                <div class="sm-header-card">
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
                    <!-- Room Background Illustration -->
                    <defs>
                      <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#f5efe6" />
                        <stop offset="100%" stop-color="#e8dec8" />
                      </linearGradient>
                      <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#c89666" />
                        <stop offset="100%" stop-color="#a06e3b" />
                      </linearGradient>
                    </defs>

                    <!-- Wall -->
                    <rect x="0" y="0" width="800" height="380" fill="url(#wallGrad)" />
                    <!-- Baseboard -->
                    <rect x="0" y="370" width="800" height="10" fill="#d0bba2" />
                    <!-- Floor -->
                    <rect x="0" y="380" width="800" height="120" fill="url(#floorGrad)" />
                    <!-- Floor Planks lines -->
                    <line x1="0" y1="410" x2="800" y2="410" stroke="#8d592b" stroke-width="1" opacity="0.4" />
                    <line x1="0" y1="450" x2="800" y2="450" stroke="#8d592b" stroke-width="1" opacity="0.4" />

                    <!-- Illustrated Furniture/Objects -->
                    <!-- 1. Window -->
                    <g id="illustration-window">
                      <rect x="260" y="60" width="200" height="150" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="6" rx="4" />
                      <line x1="360" y1="60" x2="360" y2="210" stroke="#1e3a8a" stroke-width="4" />
                      <line x1="260" y1="135" x2="460" y2="135" stroke="#1e3a8a" stroke-width="4" />
                      <!-- Window Sill -->
                      <rect x="250" y="210" width="220" height="12" fill="#e2e8f0" stroke="#475569" stroke-width="2" rx="2" />
                    </g>

                    <!-- 2. Painting -->
                    <g id="illustration-painting">
                      <rect x="520" y="80" width="140" height="100" fill="#fef08a" stroke="#78350f" stroke-width="6" rx="2" />
                      <path d="M530 160 L570 120 L610 150 L650 110 L650 170 L530 170 Z" fill="#22c55e" />
                      <circle cx="610" cy="110" r="14" fill="#f97316" />
                    </g>

                    <!-- 3. Bookshelf -->
                    <g id="illustration-bookshelf">
                      <rect x="60" y="80" width="120" height="200" fill="#78350f" rx="4" />
                      <rect x="68" y="90" width="104" height="180" fill="#451a03" />
                      <!-- Shelves -->
                      <rect x="68" y="135" width="104" height="6" fill="#78350f" />
                      <rect x="68" y="185" width="104" height="6" fill="#78350f" />
                      <rect x="68" y="235" width="104" height="6" fill="#78350f" />
                      <!-- Books -->
                      <rect x="75" y="105" width="12" height="30" fill="#ef4444" />
                      <rect x="89" y="100" width="10" height="35" fill="#3b82f6" />
                      <rect x="101" y="108" width="14" height="27" fill="#10b981" />
                      <rect x="117" y="102" width="11" height="33" fill="#f59e0b" />

                      <rect x="75" y="150" width="14" height="35" fill="#8b5cf6" />
                      <rect x="91" y="155" width="12" height="30" fill="#ec4899" />
                      <rect x="105" y="148" width="15" height="37" fill="#06b6d4" />

                      <rect x="80" y="205" width="16" height="30" fill="#f97316" />
                      <rect x="98" y="200" width="12" height="35" fill="#84cc16" />
                    </g>

                    <!-- 4. Rug -->
                    <g id="illustration-rug">
                      <ellipse cx="400" cy="455" rx="160" ry="35" fill="#e0e7ff" stroke="#6366f1" stroke-width="4" />
                      <ellipse cx="400" cy="455" rx="130" ry="25" fill="none" stroke="#818cf8" stroke-width="2" stroke-dasharray="8 4" />
                    </g>

                    <!-- 5. Sofa -->
                    <g id="illustration-sofa">
                      <!-- Base/Main body -->
                      <rect x="280" y="300" width="240" height="90" fill="#2563eb" rx="16" />
                      <!-- Backrest -->
                      <rect x="280" y="280" width="240" height="45" fill="#1d4ed8" rx="12" />
                      <!-- Cushions -->
                      <rect x="295" y="320" width="100" height="50" fill="#3b82f6" rx="8" />
                      <rect x="405" y="320" width="100" height="50" fill="#3b82f6" rx="8" />
                      <!-- Armrests -->
                      <rect x="265" y="305" width="30" height="75" fill="#1e40af" rx="10" />
                      <rect x="505" y="305" width="30" height="75" fill="#1e40af" rx="10" />
                      <!-- Legs -->
                      <rect x="285" y="385" width="12" height="15" fill="#451a03" />
                      <rect x="503" y="385" width="12" height="15" fill="#451a03" />
                    </g>

                    <!-- 6. Armchair -->
                    <g id="illustration-armchair">
                      <rect x="80" y="320" width="140" height="80" fill="#dc2626" rx="14" />
                      <rect x="80" y="300" width="140" height="40" fill="#b91c1c" rx="10" />
                      <rect x="95" y="335" width="110" height="45" fill="#ef4444" rx="8" />
                      <rect x="68" y="320" width="25" height="70" fill="#991b1b" rx="8" />
                      <rect x="207" y="320" width="25" height="70" fill="#991b1b" rx="8" />
                      <rect x="85" y="395" width="10" height="15" fill="#451a03" />
                      <rect x="205" y="395" width="10" height="15" fill="#451a03" />
                    </g>

                    <!-- 7. Houseplant -->
                    <g id="illustration-plant">
                      <path d="M220 330 L260 330 L255 370 L225 370 Z" fill="#d97706" />
                      <circle cx="240" cy="300" r="25" fill="#16a34a" />
                      <circle cx="225" cy="285" r="20" fill="#22c55e" />
                      <circle cx="255" cy="285" r="20" fill="#15803d" />
                      <circle cx="240" cy="270" r="18" fill="#4ade80" />
                    </g>

                    <!-- 8. Television -->
                    <g id="illustration-tv">
                      <!-- TV Stand / Cabinet -->
                      <rect x="580" y="290" width="150" height="50" fill="#525252" rx="4" />
                      <!-- TV Frame -->
                      <rect x="590" y="210" width="130" height="85" fill="#171717" rx="6" stroke="#404040" stroke-width="3" />
                      <!-- TV Screen -->
                      <rect x="596" y="216" width="118" height="73" fill="#38bdf8" opacity="0.8" rx="2" />
                      <!-- Base Stand -->
                      <rect x="640" y="285" width="30" height="8" fill="#262626" />
                    </g>

                    <!-- 9. Floor Lamp -->
                    <g id="illustration-lamp">
                      <rect x="548" y="380" width="20" height="8" fill="#737373" rx="2" />
                      <line x1="558" y1="280" x2="558" y2="380" stroke="#737373" stroke-width="6" />
                      <!-- Shade -->
                      <path d="M535 280 L581 280 L571 250 L545 250 Z" fill="#fde047" stroke="#ca8a04" stroke-width="2" />
                      <!-- Glow effect -->
                      <polygon points="535,280 581,280 620,380 496,380" fill="#fef08a" opacity="0.25" />
                    </g>

                    <!-- 10. Coffee Table -->
                    <g id="illustration-coffee_table">
                      <ellipse cx="400" cy="425" rx="100" ry="20" fill="#a16207" />
                      <rect x="330" y="430" width="10" height="35" fill="#78350f" />
                      <rect x="460" y="430" width="10" height="35" fill="#78350f" />
                      <!-- Tea Cup on table -->
                      <ellipse cx="380" cy="420" rx="8" ry="4" fill="#white" />
                      <rect x="375" y="415" width="10" height="7" fill="#f8fafc" rx="1" />
                    </g>

                    <!-- Hotspots overlay & labels container -->
                    <g id="sm-hotspots-group"></g>
                    <g id="sm-labels-group"></g>
                  </svg>
                </div>

                <div class="sm-word-bank-card">
                  <div class="sm-bank-title">${selectWordText}</div>
                  <div class="sm-words-grid" id="sm-words-grid">
                    ${wordsList.map(w => `
                      <button class="sm-word-btn" id="word-btn-${w.id}" onclick="COSY_GAME.selectWord('${w.id}')">
                        ${w.word}
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>`;

            this.renderHotspots();
            this.updateProgress();
        },

        renderHotspots() {
            const hsGroup = document.getElementById('sm-hotspots-group');
            if (!hsGroup) return;

            const data = this.sceneData;
            const lang = this.activeLang;

            hsGroup.innerHTML = data.hotspots.map(hs => {
                const isMatched = this.matchedIds.has(hs.id);
                const ariaName = hs.words[lang] || hs.words['en'] || hs.id;
                return `
                  <g class="sm-hotspot ${isMatched ? 'matched' : ''}"
                     id="hs-${hs.id}"
                     tabindex="${isMatched ? '-1' : '0'}"
                     role="button"
                     aria-label="Object hotspot"
                     onclick="COSY_GAME.handleHotspotClick('${hs.id}')"
                     onkeydown="COSY_GAME.handleHotspotKey(event, '${hs.id}')">
                    <rect class="hs-hit" x="${hs.x}" y="${hs.y}" width="${hs.width}" height="${hs.height}" rx="8" />
                  </g>`;
            }).join('');
        },

        selectWord(id) {
            if (this.matchedIds.has(id)) return;

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
            if (this.matchedIds.has(hsId)) return;

            if (!this.selectedWordId) {
                this.shakeHotspot(hsId);
                return;
            }

            if (this.selectedWordId === hsId) {
                // Correct Match
                this.matchedIds.add(hsId);
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

                // Check Completion
                if (this.matchedIds.size === this.sceneData.hotspots.length) {
                    setTimeout(() => this.renderEnd(), 600);
                }
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
            const hs = this.sceneData.hotspots.find(h => h.id === hsId);
            if (!labelsGroup || !hs) return;

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
            const total = this.sceneData.hotspots.length;
            const current = this.matchedIds.size;
            const percent = Math.round((current / total) * 100);

            const fill = document.getElementById('sm-p-fill');
            const text = document.getElementById('sm-p-text');
            const progressLabel = window.t('scene_match_progress') || 'Matched';

            if (fill) fill.style.width = `${percent}%`;
            if (text) text.textContent = `${progressLabel}: ${current} / ${total}`;
        },

        reset: renderSetup,

        renderEnd() {
            const lang = this.activeLang;
            COSYScores.save(GAME_ID, lang, 'A1', COSYGame.score);
            const best = COSYScores.best(GAME_ID, lang);

            const compTitle = window.t('scene_match_complete_title') || 'Scene Complete! 🎉';
            const compMsg = window.t('scene_match_complete_msg') || "Outstanding work! You've successfully identified all objects in the room.";
            const playAgainText = window.t('scene_match_play_again') || 'Play Again ↺';

            document.getElementById('go-body').innerHTML = `
                <div class="sm-completion-card">
                    <div class="sm-completion-icon">🏆</div>
                    <div class="sm-completion-title">${compTitle}</div>
                    <div class="sm-completion-msg">${compMsg}</div>
                    ${best ? `<div class="game-sub" style="margin-bottom:1.5rem">Personal best: ${best.score} pts</div>` : ''}
                    <div class="re-actions">
                        <button class="btn-g-primary" onclick="COSY_GAME.start()">${playAgainText}</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.reset()">Setup</button>
                    </div>
                </div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
