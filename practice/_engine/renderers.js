/**
 * practice/_engine/renderers.js
 * Rendering functions for different practice task types.
 * Handles UI generation and user input/feedback.
 */

(function() {
    'use strict';

    function taskTypeLabel(t) {
        const m = {
            mc: 'Multiple choice',
            tf: 'True / False',
            type: 'Type the answer',
            conv: 'Speaking task',
            ls: 'Listen & select',
            sc: 'Sentence Scramble',
            op: 'Opposites',
            np: 'Plurals'
        };
        return m[t] || t;
    }

    const renderers = {
        renderQuestion(q, session, lang) {
            const form = q.form || q.type;
            let html = `<div class="pe-task-type">${taskTypeLabel(form)}</div>`;
            html += `<div class="pe-question">${q.q}</div>`;

            // Visual helper (Emoji/Word)
            if (q.item && form !== 'sc') {
                html += `<div style="text-align:center; margin: 1.5rem 0;">
                            <div style="font-size: 4rem;">${q.item.emoji || '💡'}</div>
                            <div style="font-size: 1.5rem; font-family: 'Fraunces', serif; font-weight: 500; margin-bottom: 0.5rem;">${form === 'ls' ? '???' : (q.item.word || q.item.text)}</div>`;

                if (q.item.transcription) {
                    html += `<div style="font-size: 0.9rem; color: var(--muted); margin-bottom: 0.5rem;">${q.item.transcription}</div>`;
                }

                html += `<button class="btn-outline" style="padding: 4px 12px; font-size: 0.8rem;" onclick="window.gameUtils.speak('${q.item.word || q.item.text}', '${lang}')">🔊 Listen</button>
                        </div>`;

                const isVocabLS = form === 'ls' && session.cat === 'Vocabulary';
                if (q.item.definitions && q.item.definitions[0] && form !== 'mc' && form !== 'tf' && !isVocabLS) {
                    html += `<div style="text-align:center; font-size: 0.9rem; color: var(--muted); font-style: italic; margin-bottom: 1.5rem;">
                                "${q.item.definitions[0].text}"
                            </div>`;
                }
            }

            if (form === 'mc' || form === 'ls') {
                html += this.renderMC(q, session, lang);
            } else if (form === 'tf') {
                html += this.renderTF();
            } else if (form === 'type' || form === 'op' || form === 'np') {
                html += this.renderType();
            } else if (form === 'conv') {
                html += this.renderConv();
            } else if (form === 'sc') {
                html += this.renderScramble(q);
            }

            return html;
        },

        renderMC(q, session, lang) {
            const form = q.form || q.type;
            let finalOpts = q.opts || [];
            const cat = session.cat ? session.cat.toLowerCase() : '';
            if (q.item && (cat === 'vocabulary' || cat === 'vocab') && form !== 'ls') {
                const vocabPool = window.gameUtils.getVocabPool(lang.toLowerCase(), 'all', 'all');
                const distractors = vocabPool
                    .filter(v => v.word !== q.item.word && v.definitions?.[0]?.text)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 2)
                    .map(v => v.definitions[0].text);
                const correctDef = q.item.definitions?.[0]?.text || "Correct definition";
                finalOpts = [correctDef, ...distractors].sort(() => Math.random() - 0.5);
                q.dynamicAns = finalOpts.indexOf(correctDef);
                q.dynamicOpts = finalOpts;
            }
            let html = `<div class="mc-options">` + finalOpts.map((o, i) =>
                `<button class="mc-opt" onclick="cosyPractice.checkMC(${i})">${o}</button>`).join('') + `</div>`;
            if (form === 'ls') {
                html += `<div style="text-align:center;"><button class="btn-outline" onclick="window.gameUtils.speak('${q.item.word}', '${lang}')">🔊 Listen</button></div>`;
            }
            return html;
        },

        renderTF() {
            return `<div class="tf-btns">
                <button class="tf-btn" onclick="cosyPractice.checkTF(true)">✅ True</button>
                <button class="tf-btn" onclick="cosyPractice.checkTF(false)">❌ False</button>
            </div>`;
        },

        renderType() {
            return `<div class="type-wrap">
                <input class="type-input" id="type-in" placeholder="Type here…" onkeydown="if(event.key==='Enter')cosyPractice.checkType()">
                <button class="btn-start" onclick="cosyPractice.checkType()">Check</button>
            </div>`;
        },

        renderConv() {
            return `<div style="background:var(--warm-white);border-radius:var(--r-lg);padding:1.5rem;margin-bottom:1.5rem;border:1px solid var(--border)">
                <div style="font-size:.75rem;color:var(--ink-faint);margin-bottom:.4rem">🗣️ Speak your answer aloud</div>
                <textarea id="conv-in" class="styled-select" style="height:100px;background:#fff;" placeholder="Optional: type keywords here..."></textarea>
            </div>`;
        },

        renderScramble(q) {
            const words = q.ans.split(' ').sort(() => Math.random() - 0.5);
            return `<div id="sc-assembly" style="min-height:60px; border-bottom:2px solid var(--border); margin-bottom:1rem; display:flex; flex-wrap:wrap; gap:8px; padding:10px;"></div>
                   <div id="sc-tokens" class="mc-options" style="grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));">
                     ${words.map(w => `<button class="mc-opt" onclick="cosyPractice.assembleWord(this)">${w}</button>`).join('')}
                   </div>
                   <div style="display:flex; gap:10px; margin-top:1rem;">
                     <button class="btn-outline" onclick="cosyPractice.clearScramble()">Clear 🔄</button>
                     <button class="btn-start" style="flex:1" onclick="cosyPractice.checkScramble()">Check Scramble ✅</button>
                   </div>`;
        }
    };

    window.cosyRenderers = renderers;
})();
