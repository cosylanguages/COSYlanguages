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
            mp: '🔗 Match'
        };
        return m[t] || t;
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

                if (window.gameUtils && window.gameUtils.speak) {
                    html += `<button class="btn-outline pe-card-speak-btn" onclick="window.gameUtils.speak('${q.item.word || q.item.text}', '${lang}')">🔊 Listen</button>`;
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
                `<button class="mc-opt" onclick="checkMC(${i})">${o}</button>`).join('') + `</div>`;
        },

        renderTF() {
            return `<div class="tf-btns">
                <button class="tf-btn" onclick="checkTF(true)">✅ True</button>
                <button class="tf-btn" onclick="checkTF(false)">❌ False</button>
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
            return `<div id="sc-assembly" style="min-height:60px; border-bottom:2px solid var(--border); margin-bottom:1rem; display:flex; flex-wrap:wrap; gap:8px; padding:10px;"></div>
                   <div id="sc-tokens" class="mc-options" style="grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));">
                     ${words.map(w => `<button class="mc-opt" onclick="window.assembleWord(this)">${w}</button>`).join('')}
                   </div>
                   <div style="display:flex; gap:10px; margin-top:1rem;">
                     <button class="btn-outline" onclick="window.clearScramble()">Clear 🔄</button>
                     <button class="btn-start" style="flex:1" onclick="window.checkScramble()">Check Scramble ✅</button>
                   </div>`;
        },

        renderConv(q) {
            return `<div class="info-card glass" style="text-align:center; padding: 2rem;">
                <p style="margin-bottom:1.5rem; font-size:1.1rem;">${q.q || 'Speak the prompt aloud.'}</p>
                <button class="btn-start" onclick="cosyPracticeEngine.awardPoints(10); nextQuestion()">Mark as done ✅</button>
            </div>`;
        },

        renderLS(q, session, lang) {
            // Listen and select usually provides audio and then MC options (IPA or words)
            let finalOpts = q.opts || [];
            return `<div style="text-align:center; margin-bottom: 1.5rem;">
                <button class="btn-outline" onclick="window.gameUtils.speak('${q.item?.word || q.ans}', '${lang}')">🔊 Play Audio</button>
            </div>
            <div class="mc-options">` + finalOpts.map((o, i) =>
                `<button class="mc-opt" onclick="checkMC(${i})">${o}</button>`).join('') + `</div>`;
        }
    };

    window.cosyRenderers = renderers;
})();
