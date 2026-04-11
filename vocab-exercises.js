const EXERCISE_CSS = `
    .exercise { padding: 15px; background: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin-bottom: 20px; }
    .ex-prompt { font-size: 1.25rem; color: #2c3e50; margin-bottom: 20px; line-height: 1.4; text-align: center; }
    .ex-options { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    @media (max-width: 600px) { .ex-options { grid-template-columns: 1fr; } }
    .ex-option { padding: 15px; border: 2px solid #e0e6ed; border-radius: 10px; background: white; cursor: pointer; transition: all 0.2s; font-size: 1rem; text-align: left; display: flex; align-items: center; justify-content: center; min-height: 60px; }
    .ex-option:hover { border-color: #3498db; background: #f7fbff; }
    .ex-option.selected { border-color: #3498db; background: #3498db; color: white; }
    .ex-feedback { margin-top: 15px; padding: 10px; border-radius: 8px; text-align: center; font-weight: 500; }
    .ex-feedback.correct { background: #d4edda; color: #155724; }
    .ex-feedback.incorrect { background: #f8d7da; color: #721c24; }
    .scramble-container { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 20px; }
    .scramble-tile { padding: 10px 15px; background: #f0f4f8; border: 1px solid #d1d9e0; border-radius: 6px; cursor: pointer; user-select: none; }
    .scramble-tile.used { opacity: 0.4; pointer-events: none; }
    .sentence-container { border-bottom: 2px dashed #bdc3c7; min-height: 50px; margin-bottom: 15px; display: flex; flex-wrap: wrap; gap: 5px; padding: 10px; }
    .cloze-input { border: none; border-bottom: 2px solid #3498db; outline: none; font-size: inherit; text-align: center; width: 120px; color: #e67e22; font-weight: bold; background: transparent; }
    .cloze-correct { color: #27ae60 !important; border-bottom-color: #27ae60 !important; }
    .cloze-close { color: #f39c12 !important; border-bottom-color: #f39c12 !important; }
    .cloze-wrong { color: #e74c3c !important; border-bottom-color: #e74c3c !important; }
    .hidden { display: none; }
`;

const SPEECH_LANG = {
    'en': 'en-GB', 'ru': 'ru-RU', 'it': 'it-IT', 'fr': 'fr-FR', 'el': 'el-GR', 'es': 'es-ES', 'de': 'de-DE'
};

function speakEx(text, lang) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = SPEECH_LANG[lang] || 'en-GB';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
}

function fuzzyMatch(typed, target) {
    typed = typed.trim().toLowerCase();
    target = target.trim().toLowerCase();
    if (typed === target) return 'exact';

    // Check for 1 char difference
    if (Math.abs(typed.length - target.length) <= 1) {
        let diff = 0;
        let i = 0, j = 0;
        while (i < typed.length && j < target.length) {
            if (typed[i] !== target[j]) {
                diff++;
                if (typed.length > target.length) i++;
                else if (target.length > typed.length) j++;
                else { i++; j++; }
            } else { i++; j++; }
        }
        diff += (typed.length - i) + (target.length - j);
        if (diff <= 1) return 'close';
    }
    return 'wrong';
}

function selectExercise(item, pool, history, lang) {
    const score = history ? history.score || 0 : 0;
    const level = item.level;

    if (score === 0) return exerciseEmojiMatch(item, pool, lang);
    if (score < 30) return exerciseMultipleChoice(item, pool, lang, 'word-to-def');
    if (score < 60) {
        const r = Math.random();
        if (r < 0.5) return exerciseMultipleChoice(item, pool, lang, 'def-to-word');
        return exerciseDefinitionMatch(item, pool, lang);
    }
    if (score < 100) {
        const r = Math.random();
        if (r < 0.4 && item.collocations) return exerciseCollocationMatch(item, lang);
        if (r < 0.7) return exerciseScramble(item, lang);
        return exerciseSentenceBuilder(item, lang);
    }
    return exerciseCloze(item, lang);
}

function exerciseEmojiMatch(item, pool, lang) {
    const distractors = pool.filter(i => i.word !== item.word && i.emoji).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [item, ...distractors].sort(() => Math.random() - 0.5);

    const html = `
        <div class="exercise">
            <div class="ex-prompt">
                Match word to emoji: <strong>${item.word}</strong>
                <button onclick="speakEx('${item.word}', '${lang}')" style="background:none;border:none;cursor:pointer">🔊</button>
            </div>
            <div class="ex-options">
                ${options.map(opt => `
                    <button class="ex-option" onclick="selectOption(this, '${opt.word}')">
                        <span style="font-size: 2.5rem">${opt.emoji}</span>
                    </button>
                `).join('')}
            </div>
            <div class="ex-feedback hidden"></div>
        </div>
    `;

    return {
        html,
        check: (val) => val === item.word ? 'correct' : 'incorrect',
        hint: () => `It starts with "${item.word[0].toUpperCase()}"`,
        reveal: () => item.emoji
    };
}

function exerciseMultipleChoice(item, pool, lang, variant = 'word-to-def') {
    const distractors = pool.filter(i => i.word !== item.word).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [item, ...distractors].sort(() => Math.random() - 0.5);

    let prompt = "";
    let optionRenderer = (opt) => opt.word;

    if (variant === 'word-to-def') {
        prompt = `Definition of "<strong>${item.word}</strong>"?`;
        optionRenderer = (opt) => opt.definitions[0].text;
    } else if (variant === 'def-to-word') {
        prompt = `"${item.definitions[0].text}"`;
        optionRenderer = (opt) => opt.word;
    } else if (variant === 'example-to-word') {
        const example = item.subtext.split('\n')[0];
        prompt = `"${example}"`;
        optionRenderer = (opt) => opt.word;
    }

    const html = `
        <div class="exercise">
            <div class="ex-prompt">
                ${prompt}
                <button onclick="speakEx('${item.word}', '${lang}')" style="background:none;border:none;cursor:pointer">🔊</button>
            </div>
            <div class="ex-options">
                ${options.map(opt => `
                    <button class="ex-option" onclick="selectOption(this, '${opt.word}')">
                        ${optionRenderer(opt)}
                    </button>
                `).join('')}
            </div>
            <div class="ex-feedback hidden"></div>
        </div>
    `;

    return {
        html,
        check: (val) => val === item.word ? 'correct' : 'incorrect',
        hint: () => `The word has ${item.word.length} letters.`,
        reveal: () => item.word
    };
}

function exerciseDefinitionMatch(item, pool, lang) {
    const distractors = pool.filter(i => i.word !== item.word).sort(() => Math.random() - 0.5).slice(0, 2);
    const pairs = [item, ...distractors].map(i => ({ word: i.word, def: i.definitions[0].text }));
    const shuffledDefs = [...pairs].sort(() => Math.random() - 0.5);

    const html = `
        <div class="exercise">
            <div class="ex-prompt">Match the words to their definitions</div>
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 10px;">
                ${pairs.map((p, i) => `
                    <div class="ex-option" style="padding: 10px">${p.word}</div>
                    <select id="def-match-${i}" style="padding: 10px; border-radius: 8px; border: 2px solid #e0e6ed;">
                        <option value="">Choose definition...</option>
                        ${shuffledDefs.map(sd => `<option value="${sd.word}">${sd.def}</option>`).join('')}
                    </select>
                `).join('')}
            </div>
            <div class="ex-feedback hidden"></div>
        </div>
    `;

    return {
        html,
        check: () => {
            let allCorrect = true;
            pairs.forEach((p, i) => {
                if (document.getElementById(`def-match-${i}`).value !== p.word) allCorrect = false;
            });
            return allCorrect ? 'correct' : 'incorrect';
        },
        hint: () => "Look at the first letters of the words.",
        reveal: () => "Follow the logic!"
    };
}

function exerciseScramble(item, lang) {
    const word = item.word;
    const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');

    const html = `
        <div class="exercise">
            <div class="ex-prompt">Unscramble the word</div>
            <div style="font-size: 2rem; letter-spacing: 5px; text-align: center; margin-bottom: 20px; color: #34495e; font-weight: bold;">
                ${scrambled.toUpperCase()}
            </div>
            <input type="text" class="cloze-input" placeholder="Type here..." style="width: 80%; display: block; margin: 0 auto;">
            <div class="ex-feedback hidden"></div>
        </div>
    `;

    return {
        html,
        check: (val) => fuzzyMatch(val, word),
        hint: () => `It starts with "${word[0]}"`,
        reveal: () => word
    };
}

function exerciseSentenceBuilder(item, lang) {
    const example = item.subtext.split('\n')[0] || `The ${item.word} was very interesting.`;
    const cleanExample = example.replace(/[.,!?;]/g, '');
    const words = cleanExample.split(' ').sort(() => Math.random() - 0.5);

    const html = `
        <div class="exercise">
            <div class="ex-prompt">Build the sentence</div>
            <div class="sentence-container" id="sentence-target"></div>
            <div class="scramble-container">
                ${words.map(w => `<div class="scramble-tile" onclick="this.classList.toggle('used'); document.getElementById('sentence-target').innerHTML += ' <span>' + this.innerText + '</span>'">${w}</div>`).join('')}
            </div>
            <button class="primary-btn" onclick="document.getElementById('sentence-target').innerHTML = ''">Clear</button>
            <div class="ex-feedback hidden"></div>
        </div>
    `;

    return {
        html,
        check: () => {
            const result = document.getElementById('sentence-target').innerText.trim().replace(/\s+/g, ' ');
            return fuzzyMatch(result, cleanExample);
        },
        hint: () => `The first word is "${cleanExample.split(' ')[0]}"`,
        reveal: () => example
    };
}

function exerciseCloze(item, lang) {
    const example = item.subtext.split('\n')[0] || `I really like this ${item.word}.`;
    const parts = example.split(new RegExp(`(${item.word})`, 'i'));

    const html = `
        <div class="exercise">
            <div class="ex-prompt">Complete the sentence</div>
            <div class="ex-prompt" style="font-size: 1.4rem">
                ${parts.map(p => p.toLowerCase() === item.word.toLowerCase() ? `<input type="text" class="cloze-input" id="cloze-val">` : p).join('')}
            </div>
            <button class="primary-btn" onclick="clozeCheck(this)">Check</button>
            <div class="ex-feedback hidden"></div>
        </div>
    `;

    return {
        html,
        check: (val) => fuzzyMatch(val || document.getElementById('cloze-val').value, item.word),
        hint: () => `The word starts with "${item.word.substring(0, 2)}"`,
        reveal: () => item.word
    };
}

function exerciseCollocationMatch(item, lang) {
    if (!item.collocations || item.collocations.length === 0) return exerciseCloze(item, lang);
    const col = item.collocations[Math.floor(Math.random() * item.collocations.length)];
    const parts = col.split(new RegExp(`(${item.word})`, 'i'));

    const html = `
        <div class="exercise">
            <div class="ex-prompt">Common collocation</div>
            <div class="ex-prompt">
                ${parts.map(p => p.toLowerCase() === item.word.toLowerCase() ? `<input type="text" class="cloze-input" id="col-val">` : p).join('')}
            </div>
            <div class="ex-feedback hidden"></div>
        </div>
    `;

    return {
        html,
        check: (val) => fuzzyMatch(val || document.getElementById('col-val').value, item.word),
        hint: () => `It's the word "${item.word}"!`,
        reveal: () => item.word
    };
}

function exerciseOpposite(item, lang) {
    if (!item.antonym) return exerciseMultipleChoice(item, [], lang);

    const html = `
        <div class="exercise">
            <div class="ex-prompt">What is the opposite of <strong>${item.word}</strong>?</div>
            <input type="text" class="cloze-input" id="opp-val">
            <div class="ex-feedback hidden"></div>
        </div>
    `;

    return {
        html,
        check: (val) => fuzzyMatch(val || document.getElementById('opp-val').value, item.antonym),
        hint: () => `Starts with "${item.antonym[0]}"`,
        reveal: () => item.antonym
    };
}

function exerciseSpeedRound(items, lang) {
    let currentIdx = 0;
    let results = { know: [], dontKnow: [] };

    const renderCurrent = () => `
        <div class="exercise">
            <div id="speed-timer" style="font-size: 2rem; color: #e67e22; font-weight: bold; margin-bottom: 10px;">60</div>
            <div class="ex-prompt" style="font-size: 2.5rem">${items[currentIdx].word}</div>
            <div class="ex-options">
                <button class="ex-option" onclick="window.speedAnswer(true)" style="border-color: #27ae60; color: #27ae60">I KNOW IT</button>
                <button class="ex-option" onclick="window.speedAnswer(false)" style="border-color: #e74c3c; color: #e74c3c">NOT SURE</button>
            </div>
            <div style="margin-top: 20px; color: #7f8c8d">Item ${currentIdx + 1} of ${items.length}</div>
        </div>
    `;

    window.speedAnswer = (known) => {
        if (known) results.know.push(items[currentIdx]);
        else results.dontKnow.push(items[currentIdx]);

        currentIdx++;
        if (currentIdx < items.length) {
            document.getElementById('exercise-area').innerHTML = renderCurrent();
        } else {
            document.getElementById('exercise-area').innerHTML = `<h3>Speed Round Complete!</h3><p>Known: ${results.know.length} | Not sure: ${results.dontKnow.length}</p>`;
        }
    };

    return {
        html: renderCurrent(),
        getResults: () => results
    };
}

function exerciseCategorySort(groups) {
    const allItems = groups.flatMap(g => g.items.map(i => ({ ...i, group: g.label })));
    const shuffled = allItems.sort(() => Math.random() - 0.5);

    const html = `
        <div class="exercise">
            <div class="ex-prompt">Sort words into categories</div>
            <div id="sort-current" style="font-size: 2rem; font-weight: bold; text-align: center; margin-bottom: 20px; color: #2980b9">
                ${shuffled[0].word}
            </div>
            <div class="ex-options">
                ${groups.map(g => `
                    <button class="ex-option" onclick="window.sortItem('${g.label}')">${g.label}</button>
                `).join('')}
            </div>
            <div id="sort-progress" style="margin-top: 20px; text-align: center">1 / ${shuffled.length}</div>
        </div>
    `;

    let currentIdx = 0;
    let correctCount = 0;

    window.sortItem = (groupLabel) => {
        if (shuffled[currentIdx].group === groupLabel) correctCount++;
        currentIdx++;

        if (currentIdx < shuffled.length) {
            document.getElementById('sort-current').innerText = shuffled[currentIdx].word;
            document.getElementById('sort-progress').innerText = `${currentIdx + 1} / ${shuffled.length}`;
        } else {
            document.getElementById('exercise-area').innerHTML = `<h3>Sorting Complete!</h3><p>You got ${correctCount} out of ${shuffled.length} correct.</p>`;
        }
    };

    return {
        html,
        getScore: () => (correctCount / shuffled.length) * 100
    };
}
