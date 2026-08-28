/**
 * practice/_engine/renderers.js
 * Rendering functions for different practice task types.
 * Handles UI generation for mc, tf, type, sc, conv, ls.
 */

(function() {
    'use strict';

    function formatQuestionText(q) {
        const text = q.q || '';
        const form = q.form || q.type;
        const item = q.item;

        if (item) {
            if (form === 'mc' || form === 'ls') {
                if (text.includes('≈')) {
                    return `"<span class="q-word">${item.word}</span>" <span class="q-symbol">≈</span> <span class="q-target">?</span>`;
                } else if (text.includes('≠')) {
                    return `"<span class="q-word">${item.word}</span>" <span class="q-symbol">≠</span> <span class="q-target">?</span>`;
                } else if (text.includes('=')) {
                    return `"<span class="q-word">${item.word}</span>" <span class="q-symbol">=</span> <span class="q-target">?</span>`;
                } else if (text.includes('🔊')) {
                    return `<span class="q-symbol">🔊</span> <span class="q-target">?</span>`;
                }
            } else if (form === 'tf') {
                const parts = text.split(' = ');
                const defPart = parts[1] ? parts[1].replace(/"/g, '') : '...';
                return `"<span class="q-word">${item.word}</span>" <span class="q-symbol">=</span> "<span class="q-definition">${defPart}</span>"`;
            } else if (form === 'type') {
                const definition = item.definitions?.[0]?.text || item.definition || item.translation || '...';
                return `"<span class="q-definition">${definition}</span>" <span class="q-symbol">=</span> <span class="q-target">?</span>`;
            } else if (form === 'sc') {
                return `<span class="q-symbol">🧩</span> <span class="q-theme">(${item.word})</span>`;
            } else if (form === 'op') {
                return `"<span class="q-word">${item.word}</span>" <span class="q-symbol">≠</span> <span class="q-target">?</span>`;
            } else if (form === 'np') {
                return `"<span class="q-word">${item.word}</span>" <span class="q-symbol">+ 👥</span> <span class="q-target">?</span>`;
            }
        }

        // Fallbacks
        if (text.includes(' = ?')) {
            const word = text.split(' = ?')[0].replace(/"/g, '');
            return `"<span class="q-word">${word}</span>" <span class="q-symbol">=</span> <span class="q-target">?</span>`;
        } else if (text.includes(' ≈ ?')) {
            const word = text.split(' ≈ ?')[0].replace(/"/g, '');
            return `"<span class="q-word">${word}</span>" <span class="q-symbol">≈</span> <span class="q-target">?</span>`;
        } else if (text.includes(' ≠ ?')) {
            const word = text.split(' ≠ ?')[0].replace(/"/g, '');
            return `"<span class="q-word">${word}</span>" <span class="q-symbol">≠</span> <span class="q-target">?</span>`;
        } else if (text.includes(' = "')) {
            const parts = text.split(' = "');
            const word = parts[0].replace(/"/g, '');
            const def = parts[1] ? parts[1].slice(0, -1) : '';
            return `"<span class="q-word">${word}</span>" <span class="q-symbol">=</span> "<span class="q-definition">${def}</span>"`;
        } else if (text.includes('🧩')) {
            return text;
        } else if (text.includes('🔊')) {
            return `<span class="q-symbol">🔊</span> <span class="q-target">?</span>`;
        }

        return text;
    }

    function taskTypeLabel(t) {
        const m = {
            mc: '📖 Choice',
            tf: '✓ / ✗ True/False',
            type: '✏️ Type',
            conv: '🗣️ Speak',
            ls: '🔊 Listen',
            sc: '🧩 Scramble',
            op: '≠ Antonym',
            np: '👥 Plural',
            mp: '🔗 Match',
            cloze: '🧩 Sentence Cloze'
        };
        return m[t] || t;
    }

    function getFreeAppInfo(lang, q) {
        const l = (lang || '').toLowerCase();
        const theme = q.theme || '';

        if (l === 'en' && (theme.includes('preposition') || theme === 'prepositions_place' || theme === 'prepositions_time')) {
            return { name: 'EN Verb Prepositions Engine', url: 'apps/en-verb-prep/index.html', icon: '⚡' };
        }
        if (l === 'fr') {
            if (theme === 'articles_gender' || theme === 'gender') {
                return { name: 'FR Genre Engine', url: 'apps/fr-genre/index.html', icon: '⚡' };
            }
            if (theme === 'tenses_aspect' || theme === 'conditionals_moods' || theme.includes('verb')) {
                return { name: 'FR Conjugeur Engine', url: 'apps/fr-conjugeur/index.html', icon: '⚡' };
            }
        }
        if (l === 'it') {
            if (theme === 'articles_gender' || theme === 'gender') {
                return { name: 'IT Genere Engine', url: 'apps/it-genere/index.html', icon: '⚡' };
            }
            if (theme === 'tenses_aspect' || theme === 'conditionals_moods' || theme.includes('verb')) {
                return { name: 'IT Coniugatore Engine', url: 'apps/it-coniugatore/index.html', icon: '⚡' };
            }
        }
        if (l === 'ru') {
            if (theme === 'cases_declensions' || theme === 'articles_gender' || theme === 'gender') {
                return { name: 'RU Род & Падежи Engine', url: 'apps/ru-rod-padezhi/index.html', icon: '⚡' };
            }
            if (theme === 'tenses_aspect' || theme === 'conditionals_moods' || theme.includes('verb')) {
                return { name: 'RU Спряжение Engine', url: 'apps/ru-spryazhenie/index.html', icon: '⚡' };
            }
        }
        if (l === 'el') {
            if (theme === 'cases_declensions' || theme === 'articles_gender' || theme === 'gender') {
                return { name: 'EL Γένος & Πτώσεις Engine', url: 'apps/el-genos-ptoseis/index.html', icon: '⚡' };
            }
            if (theme === 'tenses_aspect' || theme === 'conditionals_moods' || theme.includes('verb')) {
                return { name: 'EL Κλίση Engine', url: 'apps/el-klisi-rimaton/index.html', icon: '⚡' };
            }
        }
        return null;
    }

    const renderers = {
        renderQuestion(q, session, lang) {
            const form = q.form || q.type;
            let html = `<div class="pe-task-type">${taskTypeLabel(form)}</div>`;
            html += `<div class="pe-question">${formatQuestionText(q)}</div>`;

            // Visual helper (Emoji/Word)
            if (q.item && form !== 'sc' && form !== 'mp') {
                html += `<div class="pe-question-card">
                            <div class="pe-card-emoji">${q.item.emoji || '💡'}</div>
                            <div class="pe-card-word">${(form === 'ls' || form === 'type' || form === 'op' || form === 'np') ? '???' : (q.item.word || q.item.text || '')}</div>`;

                if (q.item.transcription) {
                    html += `<div class="pe-card-transcription">${q.item.transcription}</div>`;
                }

                const wordToSpeak = (q.item.word || q.item.text || q.ans || '').replace(/'/g, "\\'");
                html += `<button class="btn-outline pe-card-speak-btn" onclick="window.cosyPracticeEngine.speakText('${wordToSpeak}', '${lang}')">🔊 Listen <span class="keycap-badge">S</span></button>`;

                if (q.ruleHint) {
                    html += `<div class="pe-rule-hint-box" style="margin-top: 10px; padding: 10px 14px; background: rgba(230, 160, 40, 0.08); border-left: 4px solid #e6a028; border-radius: 6px; font-size: 0.88rem; text-align: left;">
                        <strong style="color: #b57600;">💡 Rule Hint:</strong> ${q.ruleHint}
                    </div>`;
                }

                const freeApp = getFreeAppInfo(lang, q);
                if (freeApp) {
                    html += `<div style="margin-top:10px;"><a href="../../${freeApp.url}" target="_blank" class="btn-outline" style="text-decoration:none; display:inline-block; padding: 6px 12px; font-size: 0.85rem;">${freeApp.icon} Open Free ${freeApp.name} 🚀</a></div>`;
                }

                const links = q.practice_links || q.item?.practice_links;
                const isPaidLearner = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('cosy_paid_learner') === 'true';
                if (isPaidLearner && links && links.length > 0) {
                    html += `<div style="margin-top:10px;"><a href="../../${links[0]}" target="_blank" class="btn-outline" style="text-decoration:none; display:inline-block; padding: 6px 12px; font-size: 0.85rem;">📖 Open Lesson Manual 🚀</a></div>`;
                }

                html += `</div>`;
            }

            if (form === 'mc') {
                html += this.renderMC(q, session, lang);
            } else if (form === 'tf') {
                html += this.renderTF();
            } else if (form === 'type' || form === 'op' || form === 'np') {
                html += this.renderType();
            } else if (form === 'sc') {
                html += this.renderScramble(q);
            } else if (form === 'conv') {
                html += this.renderConv(q);
            } else if (form === 'ls') {
                html += this.renderLS(q, session, lang);
            } else if (form === 'mp') {
                html += this.renderMP(q, session, lang);
            } else if (form === 'cloze') {
                html += this.renderCloze(q, session, lang);
            }

            return html;
        },

        renderMP(q, session, lang) {
            const pairs = q.ans; // Array of { id, word, definition }

            // Shuffle left and right independently
            const leftItems = pairs.map(p => ({ id: p.id, text: p.word })).sort(() => Math.random() - 0.5);
            const rightItems = pairs.map(p => ({ id: p.id, text: p.definition })).sort(() => Math.random() - 0.5);

            let html = `<div class="match-pairs-container">`;

            // Left column (Words)
            html += `<div class="mp-column left-col">`;
            leftItems.forEach(item => {
                html += `<div class="mp-item" id="mp-left-${item.id}" onclick="window.selectMPItem('left', ${item.id})">${item.text}</div>`;
            });
            html += `</div>`;

            // Right column (Definitions)
            html += `<div class="mp-column right-col">`;
            rightItems.forEach(item => {
                html += `<div class="mp-item" id="mp-right-${item.id}" onclick="window.selectMPItem('right', ${item.id})">${item.text}</div>`;
            });
            html += `</div>`;

            html += `</div>`;

            // Initialize select state variables in engine context or state
            if (window.cosyPracticeEngine) {
                window.cosyPracticeEngine.mpSelectedLeft = null;
                window.cosyPracticeEngine.mpSelectedRight = null;
                window.cosyPracticeEngine.mpMatchedCount = 0;
            }

            return html;
        },

        renderMC(q, session, lang) {
            let finalOpts = q.opts || [];
            // If vocabulary, we might need dynamic distractors if not provided
            if (q.item && finalOpts.length === 0 && window.gameUtils && window.gameUtils.getVocabPool) {
                const vocabPool = window.gameUtils.getVocabPool(lang.toLowerCase(), 'all', 'all');
                const distractors = vocabPool
                    .filter(v => v.word !== q.item.word && v.definitions?.[0]?.text)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 2)
                    .map(v => v.definitions[0].text);
                const correctDef = q.item.definitions?.[0]?.text || q.item.translation || "Correct";
                finalOpts = [correctDef, ...distractors].sort(() => Math.random() - 0.5);
                q.dynamicAns = finalOpts.indexOf(correctDef);
            }

            return `<div class="mc-options">` + finalOpts.map((o, i) =>
                `<button class="mc-opt" id="mc-opt-${i}" onclick="checkMC(${i})"><span class="keycap-badge">${i + 1}</span> ${o}</button>`).join('') + `</div>`;
        },

        renderTF() {
            return `<div class="tf-btns">
                <button class="tf-btn tf-btn-true" id="tf-btn-true" onclick="checkTF(true)"><span class="keycap-badge">1</span> ✅ True</button>
                <button class="tf-btn tf-btn-false" id="tf-btn-false" onclick="checkTF(false)"><span class="keycap-badge">2</span> ❌ False</button>
            </div>`;
        },

        renderType() {
            return `<div class="type-wrap">
                <input class="type-input" id="type-in" placeholder="Type your answer..." onkeydown="if(event.key==='Enter')checkType()">
                <button class="btn-start" onclick="checkType()">Check</button>
            </div>`;
        },

        renderScramble(q) {
            const words = q.ans.split(' ').sort(() => Math.random() - 0.5);
            return `<div class="scramble-container">
                      <div id="sc-assembly" class="scramble-assembly"></div>
                      <div id="sc-tokens" class="scramble-tokens">
                        ${words.map((w, i) => `<button class="sc-tile" id="sc-tile-${i}" onclick="window.assembleWord(this)"><span class="keycap-badge">${i + 1}</span>${w}</button>`).join('')}
                      </div>
                    </div>
                    <div style="display:flex; gap:10px; margin-top:1rem;">
                      <button class="btn-outline" onclick="window.clearScramble()">Clear 🔄 <span class="keycap-badge">C</span></button>
                      <button class="btn-start" style="flex:1" onclick="window.checkScramble()">Check Scramble ✅ <span class="keycap-badge">Enter</span></button>
                    </div>`;
        },

        renderConv(q) {
            return `<div class="info-card glass" style="text-align:center; padding: 2rem; position: relative;">
                <p style="margin-bottom:1.5rem; font-size:1.1rem; font-weight: 500;">${q.q || 'Speak the prompt aloud.'}</p>

                <div class="speaking-widget-container">
                    <button id="speaking-mic-btn" class="speaking-mic-btn" onclick="window.cosyToggleAudioRecording()">
                        <span class="mic-pulse"></span>
                        <span class="mic-icon">🎙️</span>
                    </button>
                    <div id="speaking-timer" class="speaking-timer">Tap mic to speak</div>
                    <div class="waveform-wrap">
                        <canvas id="speaking-waveform" class="waveform-canvas" width="320" height="80"></canvas>
                    </div>
                </div>

                <div style="margin-top: 1.5rem; display: flex; gap: 12px; justify-content: center; align-items: center;">
                    <button class="btn-outline" onclick="window.cosyCleanupAudio(); cosyPracticeEngine.awardPoints(10); nextQuestion()">Skip & Mark Done ✅</button>
                    <button id="speaking-submit-btn" class="btn-start" style="opacity: 0.5; pointer-events: none;" onclick="window.cosySubmitAudioRecording()">Submit Recording 🚀</button>
                </div>
            </div>`;
        },

        renderLS(q, session, lang) {
            let finalOpts = q.opts || [];
            const textToSpeak = (q.item?.word || q.ans || '').replace(/'/g, "\\'");
            return `<div style="text-align:center; margin-bottom: 1.5rem;">
                <button class="btn-outline" onclick="window.cosyPracticeEngine.speakText('${textToSpeak}', '${lang}')">🔊 Play Audio <span class="keycap-badge">S</span></button>
                <div id="waveform-wrap-box" style="display: none; margin-top: 1rem; justify-content: center; align-items: center;">
                    <canvas id="speaking-waveform" class="waveform-canvas" width="320" height="60" style="border-radius: 8px; background: var(--warm-white); border: 1px solid var(--border);"></canvas>
                </div>
            </div>
            <div class="mc-options">` + finalOpts.map((o, i) =>
                `<button class="mc-opt" id="mc-opt-${i}" onclick="checkMC(${i})"><span class="keycap-badge">${i + 1}</span> ${o}</button>`).join('') + `</div>`;
        },

        renderCloze(q, session, lang) {
            const finalOpts = q.opts || [q.item?.word || 'Word', 'Distractor1', 'Distractor2'];
            return `<div style="text-align:center; font-size: 1.2rem; margin-bottom: 1.5rem; font-family: 'Fraunces', serif;">
                <span id="cloze-sentence-display">${q.sentence || q.q || '...'}</span>
            </div>
            <div class="mc-options">` + finalOpts.map((o, i) =>
                `<button class="mc-opt" id="mc-opt-${i}" onclick="checkMC(${i})"><span class="keycap-badge">${i + 1}</span> ${o}</button>`).join('') + `</div>`;
        }
    };

    window.cosyRenderers = renderers;
})();
