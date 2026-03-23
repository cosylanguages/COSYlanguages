/*
  COSYlanguages — Vocabulary Exercise Engine
  ============================================
  Each exercise is a pure function that takes an item (or items)
  and returns an HTML string + an answer-checking function.

  Item schema (from your JSON):
  {
    word, level, theme, emoji, form, plural,
    definitions: [{ text, examples: [] }],
    gender,          // optional, for noun items
    antonym,         // optional — add to JSON
    collocations,    // optional — add to JSON
  }

  Integration:
  Each exercise returns { html, check, hint, reveal }
  Jules wires these into the existing session renderer.
*/

// ─────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────

// Pick N random items from array (no repeats)
function pick(arr, n) {
  const a = [...arr].sort(() => Math.random() - .5);
  return a.slice(0, n);
}

// Pick one random element
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Blank out a word inside a sentence
function blankWord(sentence, word) {
  const re = new RegExp('\\b' + word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + 's?\\b', 'gi');
  return sentence.replace(re, m => '_'.repeat(m.length));
}

// Fuzzy match — accept minor typos (Levenshtein distance ≤ 1)
function fuzzyMatch(input, target) {
  const a = input.trim().toLowerCase();
  const b = target.trim().toLowerCase();
  if (a === b) return 'exact';
  // Accept plurals / minor case variants
  if (a === b + 's' || a + 's' === b) return 'close';
  // Levenshtein distance 1
  if (Math.abs(a.length - b.length) > 2) return 'wrong';
  let mismatches = 0;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] !== b[i]) mismatches++;
    if (mismatches > 1) return 'wrong';
  }
  return mismatches === 0 ? 'exact' : 'close';
}

// Web Speech API — speak a word (no audio files needed)
function vocabSpeak(text, lang = 'en-GB') {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

// Language code → speech lang tag
const SPEECH_LANG = {
  en: 'en-GB', fr: 'fr-FR', it: 'it-IT', ru: 'ru-RU', el: 'el-GR'
};

// Shared button HTML
const BTN = (label, cls, onclick) =>
  `<button class="ex-btn ${cls}" onclick="${onclick}">${label}</button>`;


// ─────────────────────────────────────────────
// 1. MULTIPLE CHOICE
//    Tests: recognition (word → definition)
//    or reverse: definition → word
//    or example → word (highest value)
// ─────────────────────────────────────────────
function exerciseMultipleChoice(item, pool, direction = 'auto', lang = 'en') {
  // direction: 'word→def' | 'def→word' | 'example→word' | 'auto'
  if (direction === 'auto') {
    direction = ['word→def', 'def→word', 'example→word'][Math.floor(Math.random() * 3)];
  }

  const def     = rand(item.definitions);
  const example = rand(def.examples);
  const blanked = blankWord(example, item.word);

  // Build distractors from same theme
  const distractors = pick(pool.filter(p => p.word !== item.word && p.theme === item.theme), 3);
  while (distractors.length < 3) {
    const extra = pick(pool.filter(p => p.word !== item.word && !distractors.includes(p)), 1)[0];
    if (extra) distractors.push(extra);
  }

  let question, correctAnswer, options;

  if (direction === 'word→def') {
    question = `
      <div class="ex-emoji">${item.emoji}</div>
      <div class="ex-word">${item.word}</div>
      <div class="ex-prompt">Which definition is correct?</div>
    `;
    correctAnswer = def.text;
    options = pick([def.text, ...distractors.map(d => rand(d.definitions).text)], 4);

  } else if (direction === 'def→word') {
    question = `
      <div class="ex-emoji">${item.emoji}</div>
      <div class="ex-definition">"${def.text}"</div>
      <div class="ex-prompt">Which word matches this definition?</div>
    `;
    correctAnswer = item.word;
    options = pick([item.word, ...distractors.map(d => d.word)], 4);

  } else { // example→word
    question = `
      <div class="ex-prompt">Which word completes the sentence?</div>
      <div class="ex-sentence">${blanked}</div>
    `;
    correctAnswer = item.word;
    options = pick([item.word, ...distractors.map(d => d.word)], 4);
  }

  // Shuffle options
  options = options.sort(() => Math.random() - .5);

  const optionsHtml = options.map((opt, i) =>
    `<button class="ex-option" data-value="${opt}" onclick="selectOption(this, '${opt}')">${opt}</button>`
  ).join('');

  const html = `
    <div class="exercise exercise-mc" data-correct="${correctAnswer}">
      <div class="ex-question">${question}</div>
      <div class="ex-options">${optionsHtml}</div>
      <div class="ex-feedback hidden"></div>
      <button class="ex-btn ex-btn-hint" onclick="mcHint(this)">💡 Hint</button>
      <button class="ex-speak-btn" onclick="vocabSpeak('${item.word}', '${SPEECH_LANG[lang]}')">🔊</button>
    </div>
  `;

  return {
    html,
    // Returns: 'correct' | 'incorrect'
    check(selected) {
      return selected === correctAnswer ? 'correct' : 'incorrect';
    },
    hint() {
      // Eliminate one wrong option
      const wrong = document.querySelectorAll('.ex-option:not([data-value="' + correctAnswer + '"])');
      if (wrong.length) rand([...wrong]).style.opacity = '.3';
    },
    reveal() {
      document.querySelectorAll('.ex-option').forEach(btn => {
        btn.classList.toggle('correct', btn.dataset.value === correctAnswer);
        btn.classList.toggle('incorrect', btn.dataset.value !== correctAnswer && btn.classList.contains('selected'));
      });
    }
  };
}

// ─────────────────────────────────────────────
// 2. CLOZE (TYPING)
//    Tests: active recall — highest SM-2 quality
//    Uses: examples[], word, plural
// ─────────────────────────────────────────────
function exerciseCloze(item, lang = 'en') {
  const def     = rand(item.definitions);
  const example = rand(def.examples);
  const blanked = blankWord(example, item.word);
  const target  = example.match(new RegExp(item.word + 's?', 'i'))?.[0] || item.word;
  const blanks  = '_'.repeat(target.length);
  const shown   = blanked.replace('_'.repeat(target.length), `<span class="blank">${blanks}</span>`);

  // Progressive hints state
  let hintsGiven = 0;

  const html = `
    <div class="exercise exercise-cloze" data-correct="${target.toLowerCase()}">
      <div class="ex-prompt">Complete the sentence:</div>
      <div class="ex-sentence">${shown}</div>
      <div class="ex-word-meta">${item.emoji} ${item.form ? '(' + item.form + ')' : ''}</div>
      <input class="cloze-input" type="text" placeholder="Type your answer..."
             autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
             oninput="clozeInput(this)" />
      <div class="ex-feedback hidden"></div>
      <div class="ex-actions">
        <button class="ex-btn ex-btn-hint" onclick="clozeHint(this, '${item.word}')">💡 Hint</button>
        <button class="ex-btn ex-btn-check" onclick="clozeCheck(this)">Check ✓</button>
        <button class="ex-speak-btn" onclick="vocabSpeak('${item.word}', '${SPEECH_LANG[lang]}')">🔊</button>
      </div>
    </div>
  `;

  return {
    html,
    // Returns: 'exact' | 'close' | 'wrong'
    check(typed) {
      return fuzzyMatch(typed, target);
    },
    hint() {
      hintsGiven++;
      const input = document.querySelector('.cloze-input');
      if (!input) return;
      // Hint 1: word length (already shown as blanks)
      // Hint 2: first letter
      if (hintsGiven === 1) input.placeholder = `Starts with "${target[0].toUpperCase()}"...`;
      // Hint 3: first + last letter
      if (hintsGiven === 2) input.placeholder = `${target[0].toUpperCase()}${'_'.repeat(target.length - 2)}${target[target.length - 1]}`;
      // Hint 4: reveal
      if (hintsGiven >= 3) { input.value = target; input.disabled = true; }
    },
    reveal() {
      const input = document.querySelector('.cloze-input');
      if (input) { input.value = target; input.disabled = true; }
    }
  };
}

// ─────────────────────────────────────────────
// 3. SCRAMBLE
//    Tests: active recall of word form
//    Uses: word, emoji, definitions
// ─────────────────────────────────────────────
function exerciseScramble(item, lang = 'en') {
  const def = rand(item.definitions);

  // Scramble letters — always keep first and last in place for words > 5 chars
  function scramble(word) {
    if (word.length <= 3) return word.split('').sort(() => Math.random() - .5).join('');
    const middle = word.slice(1, -1).split('').sort(() => Math.random() - .5).join('');
    // Make sure scrambled !== original
    const result = word[0] + middle + word[word.length - 1];
    return result === word ? scramble(word) : result;
  }

  const scrambled = scramble(item.word.toLowerCase());
  const letters   = scrambled.split('');

  const lettersHtml = letters.map((l, i) =>
    `<span class="scramble-letter" data-letter="${l}" data-index="${i}"
           onclick="pickLetter(this)">${l.toUpperCase()}</span>`
  ).join('');

  const slotsHtml = item.word.split('').map((_, i) =>
    `<span class="scramble-slot" data-pos="${i}" onclick="unpickLetter(this)"></span>`
  ).join('');

  const html = `
    <div class="exercise exercise-scramble" data-correct="${item.word.toLowerCase()}">
      <div class="ex-emoji">${item.emoji}</div>
      <div class="ex-definition">"${def.text}"</div>
      <div class="ex-prompt">Unscramble the word:</div>
      <div class="scramble-slots">${slotsHtml}</div>
      <div class="scramble-letters">${lettersHtml}</div>
      <div class="ex-feedback hidden"></div>
      <div class="ex-actions">
        <button class="ex-btn ex-btn-hint" onclick="scrambleHint(this, '${item.word}')">💡 Hint</button>
        <button class="ex-btn ex-btn-clear" onclick="scrambleClear()">Clear ✕</button>
        <button class="ex-speak-btn" onclick="vocabSpeak('${item.word}', '${SPEECH_LANG[lang]}')">🔊</button>
      </div>
    </div>
  `;

  return {
    html,
    check(built) {
      return fuzzyMatch(built, item.word) !== 'wrong' ? 'correct' : 'incorrect';
    },
    hint() {
      // Place the next unplaced correct letter into its slot
      const slots = document.querySelectorAll('.scramble-slot');
      for (let i = 0; i < slots.length; i++) {
        if (!slots[i].textContent) {
          // Find the letter tile for item.word[i]
          const needed = item.word[i].toLowerCase();
          const tile = [...document.querySelectorAll('.scramble-letter:not(.used)')]
            .find(t => t.dataset.letter === needed);
          if (tile) { tile.classList.add('used', 'hinted'); slots[i].textContent = needed.toUpperCase(); }
          break;
        }
      }
    },
    reveal() {
      document.querySelectorAll('.scramble-slot').forEach((s, i) => {
        s.textContent = item.word[i].toUpperCase();
      });
    }
  };
}

// ─────────────────────────────────────────────
// 4. SENTENCE BUILDER
//    Tests: sentence comprehension + word order
//    Uses: examples[], word
// ─────────────────────────────────────────────
function exerciseSentenceBuilder(item, lang = 'en') {
  const def     = rand(item.definitions);
  const example = rand(def.examples);
  const words   = example.split(' ');
  const shuffled = [...words].sort(() => Math.random() - .5);

  const tilesHtml = shuffled.map((w, i) =>
    `<span class="tile" data-word="${w}" data-index="${i}" onclick="pickTile(this)">${w}</span>`
  ).join('');

  const slotsCount = words.length;
  const dropArea = `<div class="tile-drop" id="tile-drop">
    ${Array(slotsCount).fill('<span class="tile-slot"></span>').join('')}
  </div>`;

  const html = `
    <div class="exercise exercise-builder" data-correct="${example}">
      <div class="ex-emoji">${item.emoji}</div>
      <div class="ex-prompt">Build a sentence using <strong>${item.word}</strong>:</div>
      ${dropArea}
      <div class="tile-bank">${tilesHtml}</div>
      <div class="ex-feedback hidden"></div>
      <div class="ex-actions">
        <button class="ex-btn ex-btn-hint" onclick="builderHint(this)">💡 Hint</button>
        <button class="ex-btn ex-btn-clear" onclick="builderClear()">Clear ✕</button>
        <button class="ex-btn ex-btn-check" onclick="builderCheck(this)">Check ✓</button>
        <button class="ex-speak-btn" onclick="vocabSpeak('${item.word}', '${SPEECH_LANG[lang]}')">🔊</button>
      </div>
    </div>
  `;

  return {
    html,
    check(built) {
      // Accept if words match regardless of minor punctuation differences
      const clean = s => s.toLowerCase().replace(/[.,!?]/g, '').trim();
      return clean(built) === clean(example) ? 'correct' : 'incorrect';
    },
    hint() {
      // Place the first unplaced word in the correct position
      const drop = document.getElementById('tile-drop');
      const placed = [...drop.querySelectorAll('.tile')].map(t => t.dataset.word);
      const nextIdx = placed.length;
      if (nextIdx < words.length) {
        const needed = words[nextIdx];
        const tile = [...document.querySelectorAll('.tile-bank .tile')]
          .find(t => t.dataset.word === needed && !t.classList.contains('used'));
        if (tile) { tile.classList.add('used'); drop.querySelector('.tile-slot:empty').textContent = needed; }
      }
    },
    reveal() {
      const drop = document.getElementById('tile-drop');
      drop.innerHTML = words.map(w =>
        `<span class="tile ${w === item.word ? 'tile-highlight' : ''}">${w}</span>`
      ).join(' ');
    }
  };
}

// ─────────────────────────────────────────────
// 5. EMOJI MATCH
//    Tests: recognition — fast, mobile-perfect
//    Uses: emoji, word, theme
// ─────────────────────────────────────────────
function exerciseEmojiMatch(item, pool, direction = 'auto') {
  if (direction === 'auto') direction = Math.random() > .5 ? 'emoji→word' : 'word→emoji';

  const distractors = pick(pool.filter(p => p.word !== item.word && p.emoji !== item.emoji), 3);

  let question, options, correctAnswer;

  if (direction === 'emoji→word') {
    question = `
      <div class="ex-emoji-large">${item.emoji}</div>
      <div class="ex-prompt">Which word does this emoji represent?</div>
    `;
    correctAnswer = item.word;
    options = pick([item.word, ...distractors.map(d => d.word)], 4);

  } else { // word→emoji
    question = `
      <div class="ex-word-large">${item.word}</div>
      <div class="ex-prompt">Pick the matching emoji:</div>
    `;
    correctAnswer = item.emoji;
    options = pick([item.emoji, ...distractors.map(d => d.emoji)], 4);
  }

  options = options.sort(() => Math.random() - .5);

  const isEmoji = direction === 'word→emoji';
  const optHtml = options.map(opt =>
    `<button class="ex-option ${isEmoji ? 'ex-option-emoji' : ''}"
             data-value="${opt}" onclick="selectOption(this, '${opt}')">${opt}</button>`
  ).join('');

  const html = `
    <div class="exercise exercise-emoji" data-correct="${correctAnswer}">
      <div class="ex-question">${question}</div>
      <div class="ex-options ${isEmoji ? 'ex-options-emoji' : ''}">${optHtml}</div>
      <div class="ex-feedback hidden"></div>
    </div>
  `;

  return {
    html,
    check(selected) { return selected === correctAnswer ? 'correct' : 'incorrect'; },
    hint() {
      const wrong = [...document.querySelectorAll('.ex-option:not([data-value="' + correctAnswer + '"])')]
        .filter(b => !b.classList.contains('eliminated'));
      if (wrong.length) { rand(wrong).classList.add('eliminated'); rand(wrong).style.opacity = '.3'; }
    },
    reveal() {
      document.querySelectorAll('.ex-option').forEach(btn => {
        btn.classList.toggle('correct', btn.dataset.value === correctAnswer);
      });
    }
  };
}

// ─────────────────────────────────────────────
// 6. DEFINITION MATCH
//    Tests: disambiguation — for multi-def items
//    Uses: definitions[] (needs 2+ definitions)
// ─────────────────────────────────────────────
function exerciseDefinitionMatch(item, lang = 'en') {
  if (!item.definitions || item.definitions.length < 2) return null; // needs 2+ defs

  const shuffledDefs = [...item.definitions].sort(() => Math.random() - .5);
  const correctDef   = shuffledDefs[0];
  const distractorDef = shuffledDefs[1];
  const example = rand(correctDef.examples);

  const options = [correctDef.text, distractorDef.text].sort(() => Math.random() - .5);

  const optHtml = options.map(opt =>
    `<button class="ex-option ex-option-def" data-value="${opt}"
             onclick="selectOption(this, '${opt}')">${opt}</button>`
  ).join('');

  const html = `
    <div class="exercise exercise-defmatch" data-correct="${correctDef.text}">
      <div class="ex-emoji">${item.emoji}</div>
      <div class="ex-prompt">Which meaning of <strong>${item.word}</strong> does this sentence use?</div>
      <div class="ex-sentence">"${example}"</div>
      <div class="ex-options ex-options-def">${optHtml}</div>
      <div class="ex-feedback hidden"></div>
      <button class="ex-speak-btn" onclick="vocabSpeak('${example}', '${SPEECH_LANG[lang]}')">🔊 Hear it</button>
    </div>
  `;

  return {
    html,
    check(selected) { return selected === correctDef.text ? 'correct' : 'incorrect'; },
    hint() { /* could underline the key phrase in the example */ },
    reveal() {
      document.querySelectorAll('.ex-option').forEach(btn => {
        btn.classList.toggle('correct', btn.dataset.value === correctDef.text);
        btn.classList.toggle('incorrect', btn.dataset.value !== correctDef.text && btn.classList.contains('selected'));
      });
    }
  };
}

// ─────────────────────────────────────────────
// 7. GENDER & ARTICLES
//    Tests: grammatical gender
//    Uses: word, gender, emoji, examples
// ─────────────────────────────────────────────
const ARTICLES = {
  fr: { m: ['le', 'un'], f: ['la', 'une'], n: [] },
  it: { m: ['il', 'un'], f: ['la', 'una'], n: [] },
  el: { m: ['ο', 'ένας'], f: ['η', 'μια'], n: ['το', 'ένα'] },
  ru: { m: ['м.р.'], f: ['ж.р.'], n: ['ср.р.'] }, // grammatical gender labels for Russian
};

function exerciseGender(item, lang = 'en') {
  if (!item.gender || !ARTICLES[lang]) return null;

  const arts    = ARTICLES[lang];
  const correct = arts[item.gender[0]]?.[0]; // first article for this gender
  if (!correct) return null;

  const allOptions = [...new Set(Object.values(arts).flat())].filter(Boolean);
  const options    = pick(allOptions, Math.min(allOptions.length, 4));
  if (!options.includes(correct)) { options[0] = correct; }
  options.sort(() => Math.random() - .5);

  const example = item.definitions?.[0]?.examples?.[0] || '';

  const optHtml = options.map(opt =>
    `<button class="ex-option ex-option-article" data-value="${opt}"
             onclick="selectOption(this, '${opt}')">${opt}</button>`
  ).join('');

  const html = `
    <div class="exercise exercise-gender" data-correct="${correct}">
      <div class="ex-emoji">${item.emoji}</div>
      <div class="ex-word">${item.word}</div>
      ${example ? `<div class="ex-sentence-preview">"${example}"</div>` : ''}
      <div class="ex-prompt">What is the correct article?</div>
      <div class="ex-options">${optHtml}</div>
      <div class="ex-feedback hidden"></div>
      <div class="ex-gender-rule hidden" id="gender-rule"></div>
    </div>
  `;

  return {
    html,
    check(selected) { return selected === correct ? 'correct' : 'incorrect'; },
    hint() {
      const rule = document.getElementById('gender-rule');
      if (rule) {
        rule.textContent = genderRule(item.word, item.gender, lang);
        rule.classList.remove('hidden');
      }
    },
    reveal() {
      document.querySelectorAll('.ex-option').forEach(btn => {
        btn.classList.toggle('correct', btn.dataset.value === correct);
      });
    }
  };
}

// Gender rule hints per language
function genderRule(word, gender, lang) {
  const rules = {
    fr: {
      f: ['-tion', '-sion', '-ure', '-ence', '-ance', '-té', '-ée'].find(s => word.endsWith(s)),
      m: ['-age', '-ment', '-eau', '-isme', '-eur'].find(s => word.endsWith(s)),
    }
  };
  const suffix = rules[lang]?.[gender];
  if (suffix) return `Tip: words ending in "${suffix}" are usually ${gender === 'f' ? 'feminine' : 'masculine'} in ${lang === 'fr' ? 'French' : 'Italian'}.`;
  return `"${word}" is ${gender === 'm' ? 'masculine' : gender === 'f' ? 'feminine' : 'neuter'}.`;
}

// ─────────────────────────────────────────────
// 8. SPEED ROUND
//    Tests: fast triage — feeds SRS directly
//    Uses: word, emoji, definitions
// ─────────────────────────────────────────────
function exerciseSpeedRound(items, lang = 'en') {
  let current = 0;
  const results = { know: [], dontKnow: [] };

  function renderCurrent() {
    const item = items[current];
    return `
      <div class="speed-round" id="speed-round">
        <div class="speed-timer" id="speed-timer">60</div>
        <div class="speed-progress">${current + 1} / ${items.length}</div>
        <div class="speed-card">
          <div class="speed-emoji">${item.emoji}</div>
          <div class="speed-word">${item.word}</div>
        </div>
        <div class="speed-def hidden" id="speed-def">${item.definitions[0].text}</div>
        <div class="speed-buttons">
          <button class="speed-btn speed-dont" onclick="speedAnswer(false)">✗ Don't know</button>
          <button class="speed-btn speed-know" onclick="speedAnswer(true)">✓ Know it</button>
        </div>
        <button class="ex-speak-btn" onclick="vocabSpeak('${item.word}', '${SPEECH_LANG[lang]}')">🔊</button>
      </div>
    `;
  }

  const html = renderCurrent();

  // Timer logic attached as global (Jules wires into session)
  window.speedAnswer = function(knows) {
    const item = items[current];
    if (knows) results.know.push(item);
    else { results.dontKnow.push(item); }
    // Show definition briefly before next
    const def = document.getElementById('speed-def');
    if (def) def.classList.remove('hidden');
    setTimeout(() => {
      current++;
      if (current < items.length) {
        document.getElementById('speed-round').outerHTML = renderCurrent();
        // restart timer render
      } else {
        // Session complete — return results for SRS
        window.speedResults = results;
        document.getElementById('speed-round').innerHTML = `
          <div style="text-align:center;padding:2rem;">
            <div style="font-size:2rem;margin-bottom:.5rem;">✅</div>
            <strong>Know: ${results.know.length}</strong> &nbsp;|&nbsp;
            <strong>Review: ${results.dontKnow.length}</strong>
          </div>
        `;
      }
    }, 800);
  };

  return {
    html,
    // Speed round returns SRS signals for each item
    getResults() { return window.speedResults; }
  };
}

// ─────────────────────────────────────────────
// 9. CATEGORY SORT
//    Tests: semantic field knowledge
//    Uses: word, emoji, theme, level
// ─────────────────────────────────────────────
function exerciseCategorySort(itemGroups) {
  // itemGroups = [{ label, items[] }, { label, items[] }]
  // e.g. [{ label: 'Food', items: [...] }, { label: 'Transport', items: [...] }]
  const allItems  = itemGroups.flatMap(g => g.items.map(i => ({ ...i, correctGroup: g.label })));
  const shuffled  = [...allItems].sort(() => Math.random() - .5);

  const cardsHtml = shuffled.map((item, i) =>
    `<div class="sort-card" data-index="${i}" data-correct="${item.correctGroup}"
           draggable="true" onclick="sortTap(this)">
      <span class="sort-emoji">${item.emoji}</span>
      <span class="sort-word">${item.word}</span>
    </div>`
  ).join('');

  const zonesHtml = itemGroups.map(g =>
    `<div class="sort-zone" data-group="${g.label}"
           ondragover="event.preventDefault()" ondrop="sortDrop(event, this)">
      <div class="sort-zone-label">${g.label}</div>
      <div class="sort-zone-items"></div>
    </div>`
  ).join('');

  const html = `
    <div class="exercise exercise-sort">
      <div class="ex-prompt">Sort these words into the correct categories:</div>
      <div class="sort-categories">${zonesHtml}</div>
      <div class="sort-cards">${cardsHtml}</div>
      <div class="ex-feedback hidden"></div>
      <button class="ex-btn ex-btn-check" onclick="sortCheck(this)">Check ✓</button>
    </div>
  `;

  return {
    html,
    check() {
      let correct = 0, total = shuffled.length;
      document.querySelectorAll('.sort-card').forEach(card => {
        const zone = card.closest('.sort-zone');
        if (zone && zone.dataset.group === card.dataset.correct) {
          correct++;
          card.classList.add('sort-correct');
        } else {
          card.classList.add('sort-incorrect');
        }
      });
      return { correct, total, score: Math.round(correct / total * 100) };
    },
    reveal() {
      // Move all cards to their correct zones
      document.querySelectorAll('.sort-card').forEach(card => {
        const correctZone = document.querySelector(`.sort-zone[data-group="${card.dataset.correct}"] .sort-zone-items`);
        if (correctZone) correctZone.appendChild(card);
      });
    }
  };
}

// ─────────────────────────────────────────────
// 10. COLLOCATION MATCH
//     Tests: collocational knowledge (B1+)
//     Uses: word, collocations[] (new field)
// ─────────────────────────────────────────────
function exerciseCollocation(item, pool) {
  if (!item.collocations?.length) return null;

  const correctColloc  = rand(item.collocations);
  // Build a gapped phrase: replace the word in the collocation with ___
  const gapped = correctColloc.replace(new RegExp(item.word, 'i'), '___');

  // Distractors: words from same level that don't collocate
  const distractors = pick(
    pool.filter(p => p.word !== item.word && p.level === item.level).map(p => p.word), 3
  );

  const options = pick([item.word, ...distractors], 4).sort(() => Math.random() - .5);

  const optHtml = options.map(opt =>
    `<button class="ex-option" data-value="${opt}" onclick="selectOption(this, '${opt}')">${opt}</button>`
  ).join('');

  const html = `
    <div class="exercise exercise-colloc" data-correct="${item.word}">
      <div class="ex-emoji">${item.emoji}</div>
      <div class="ex-prompt">Which word completes the phrase?</div>
      <div class="ex-colloc-phrase">"${gapped}"</div>
      <div class="ex-options">${optHtml}</div>
      <div class="ex-feedback hidden"></div>
    </div>
  `;

  return {
    html,
    check(selected) { return selected === item.word ? 'correct' : 'incorrect'; },
    hint() {
      // Show one more correct collocation as a clue
      const otherColloc = item.collocations.find(c => c !== correctColloc);
      if (otherColloc) {
        const hint = document.querySelector('.ex-colloc-phrase');
        if (hint) hint.insertAdjacentHTML('afterend',
          `<div class="colloc-hint">Clue: "${otherColloc}" also uses this word</div>`);
      }
    },
    reveal() {
      document.querySelectorAll('.ex-option').forEach(btn => {
        btn.classList.toggle('correct', btn.dataset.value === item.word);
      });
    }
  };
}

// ─────────────────────────────────────────────
// EXERCISE SELECTOR
// Call this to get the right exercise for an item
// given its SRS history and category
// ─────────────────────────────────────────────
function selectExercise(item, pool, srsHistory, lang = 'en') {
  const history  = srsHistory || { repetitions: 0, ease_factor: 2.5 };
  const reps     = history.repetitions || 0;
  const ease     = history.ease_factor || 2.5;

  // New item → always start easy
  if (reps === 0) {
    // Emoji match or MC word→def (recognition first)
    return item.emoji
      ? exerciseEmojiMatch(item, pool)
      : exerciseMultipleChoice(item, pool, 'word→def', lang);
  }

  // Seen once → MC in reverse direction
  if (reps === 1) {
    return exerciseMultipleChoice(item, pool, 'def→word', lang);
  }

  // Struggling (low ease) → easier tasks, definition match for multi-def items
  if (ease < 1.8) {
    const opts = [
      () => exerciseMultipleChoice(item, pool, 'word→def', lang),
      () => item.definitions.length >= 2 ? exerciseDefinitionMatch(item, lang) : null,
      () => exerciseEmojiMatch(item, pool),
    ].filter(f => f());
    const chosen = rand(opts);
    return chosen ? chosen() : exerciseMultipleChoice(item, pool, 'word→def', lang);
  }

  // Known (3-5 reps, good ease) → harder tasks
  if (reps >= 3 && ease >= 2.0) {
    const opts = [
      () => exerciseCloze(item, lang),
      () => exerciseSentenceBuilder(item, lang),
      () => exerciseScramble(item, lang),
      () => item.definitions.length >= 2 ? exerciseDefinitionMatch(item, lang) : null,
      () => item.gender ? exerciseGender(item, lang) : null,
      () => item.collocations?.length ? exerciseCollocation(item, pool) : null,
    ].filter(f => f());
    const chosen = rand(opts);
    return chosen ? chosen() : exerciseCloze(item, lang);
  }

  // Default: example-based MC
  return exerciseMultipleChoice(item, pool, 'example→word', lang);
}

// ─────────────────────────────────────────────
// CSS for exercises — add to practice.html <style>
// ─────────────────────────────────────────────
const EXERCISE_CSS = `
  .exercise { padding: 16px; max-width: 600px; margin: 0 auto; }
  .ex-emoji { font-size: 3rem; text-align: center; margin-bottom: 8px; line-height: 1; }
  .ex-emoji-large { font-size: 5rem; text-align: center; line-height: 1.1; }
  .ex-word { font-family: 'Lora', serif; font-size: 1.6rem; font-weight: 700;
    text-align: center; color: #2e4a33; margin-bottom: 6px; }
  .ex-word-large { font-size: 2rem; font-weight: 900; text-align: center;
    font-family: 'Nunito', sans-serif; color: #2e4a33; }
  .ex-definition { font-size: 1rem; color: #4a4a4a; text-align: center;
    line-height: 1.6; margin: 8px 0 12px; font-style: italic; }
  .ex-prompt { font-size: .85rem; font-weight: 700; color: #6b6b6b;
    text-align: center; margin-bottom: 12px; text-transform: uppercase;
    letter-spacing: .04em; }
  .ex-sentence { background: #f0f5f1; border-radius: 10px; padding: 14px 18px;
    font-size: 1rem; line-height: 1.65; text-align: center; margin-bottom: 14px;
    border: 1px solid rgba(74,107,80,.15); }
  .blank { font-weight: 900; letter-spacing: 2px; color: #6b8f71; }

  /* Options */
  .ex-options { display: grid; gap: 10px; margin: 12px 0; }
  .ex-option { padding: 14px 18px; border-radius: 10px; border: 2px solid rgba(74,107,80,.15);
    background: #fdf8f0; font-family: 'Nunito', sans-serif; font-size: .95rem;
    font-weight: 700; color: #2a2a2a; cursor: pointer; text-align: left;
    transition: all .15s; line-height: 1.4; -webkit-tap-highlight-color: transparent; }
  .ex-option:active { transform: scale(.98); }
  .ex-option.selected { border-color: #6b8f71; background: #e8f0e9; }
  .ex-option.correct  { border-color: #1a6b45 !important; background: #e5f4ec !important; color: #1a6b45 !important; }
  .ex-option.incorrect{ border-color: #a32d2d !important; background: #fcebeb !important; color: #a32d2d !important; }
  .ex-option.eliminated { opacity: .3; pointer-events: none; }
  .ex-options-emoji { grid-template-columns: 1fr 1fr; }
  .ex-option-emoji { font-size: 2.5rem; text-align: center; padding: 18px; border-radius: 14px; }
  .ex-option-def { text-align: left; font-size: .88rem; }

  /* Cloze input */
  .cloze-input { width: 100%; height: 52px; padding: 0 18px; border-radius: 10px;
    border: 2px solid rgba(74,107,80,.2); background: #fdf8f0;
    font-family: 'Nunito', sans-serif; font-size: 1.05rem; font-weight: 700; color: #2a2a2a;
    outline: none; margin-bottom: 10px; transition: border-color .18s; }
  .cloze-input:focus { border-color: #6b8f71; }
  .cloze-input.cloze-close { border-color: #e8a838; background: #fff8e7; }
  .cloze-input.cloze-correct { border-color: #1a6b45; background: #e5f4ec; }
  .cloze-input.cloze-wrong   { border-color: #a32d2d; background: #fcebeb; }

  /* Scramble */
  .scramble-slots, .scramble-letters { display: flex; gap: 8px; flex-wrap: wrap;
    justify-content: center; margin: 10px 0; min-height: 50px; }
  .scramble-slot { width: 42px; height: 42px; border-radius: 8px; border: 2px dashed rgba(107,143,113,.4);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; font-weight: 900; color: #2e4a33; background: #e8f0e9; }
  .scramble-letter { width: 42px; height: 42px; border-radius: 8px;
    background: #fff; border: 2px solid rgba(74,107,80,.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; font-weight: 900; color: #2a2a2a; cursor: pointer;
    transition: all .15s; -webkit-tap-highlight-color: transparent; }
  .scramble-letter:active { transform: scale(.9); }
  .scramble-letter.used { opacity: .3; pointer-events: none; }
  .scramble-letter.hinted { background: #fff8e7; border-color: #e8a838; }

  /* Sentence builder tiles */
  .tile-drop { min-height: 52px; border-radius: 10px; border: 2px dashed rgba(107,143,113,.3);
    padding: 8px; display: flex; flex-wrap: wrap; gap: 6px; background: #e8f0e9; margin-bottom: 10px; }
  .tile-bank { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
  .tile { padding: 8px 14px; border-radius: 8px; background: #fff;
    border: 2px solid rgba(74,107,80,.2); font-family: 'Nunito', sans-serif;
    font-weight: 700; font-size: .92rem; cursor: pointer;
    transition: all .15s; -webkit-tap-highlight-color: transparent; }
  .tile:active { transform: scale(.95); }
  .tile.used { opacity: .25; pointer-events: none; }
  .tile.tile-highlight { background: #fff8e7; border-color: #e8a838; font-weight: 900; }

  /* Speed round */
  .speed-round { text-align: center; padding: 16px; }
  .speed-timer { font-family: 'Lora', serif; font-size: 3rem; font-weight: 700;
    color: #6b8f71; line-height: 1; margin-bottom: 4px; }
  .speed-progress { font-size: .75rem; color: #aaa; margin-bottom: 16px; }
  .speed-card { background: #fff; border-radius: 18px; padding: 32px 24px;
    box-shadow: 0 6px 28px rgba(46,74,51,.10); margin-bottom: 16px; }
  .speed-emoji { font-size: 4rem; line-height: 1; margin-bottom: 8px; }
  .speed-word { font-family: 'Lora', serif; font-size: 1.8rem; font-weight: 700; color: #2e4a33; }
  .speed-def { font-size: .88rem; color: #6b6b6b; margin: 8px 0; padding: 8px;
    background: #f0f5f1; border-radius: 8px; }
  .speed-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 12px; }
  .speed-btn { height: 64px; border-radius: 12px; border: none;
    font-family: 'Nunito', sans-serif; font-weight: 900; font-size: 1rem; cursor: pointer;
    transition: transform .12s; -webkit-tap-highlight-color: transparent; }
  .speed-btn:active { transform: scale(.94); }
  .speed-know  { background: #e5f4ec; color: #1a6b45; border: 2px solid #1a6b45; }
  .speed-dont  { background: #fcebeb; color: #a32d2d; border: 2px solid #a32d2d; }

  /* Category sort */
  .sort-categories { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px; margin-bottom: 14px; }
  .sort-zone { border-radius: 12px; border: 2px dashed rgba(107,143,113,.3);
    background: #f0f5f1; padding: 10px; min-height: 80px; }
  .sort-zone-label { font-size: .75rem; font-weight: 900; letter-spacing: .05em;
    text-transform: uppercase; color: #6b8f71; margin-bottom: 6px; }
  .sort-zone-items { display: flex; flex-wrap: wrap; gap: 6px; }
  .sort-cards { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
  .sort-card { padding: 8px 12px; border-radius: 8px; background: #fff;
    border: 2px solid rgba(74,107,80,.15); cursor: pointer; display: flex;
    align-items: center; gap: 6px; font-weight: 700; font-size: .88rem;
    transition: all .15s; -webkit-tap-highlight-color: transparent; }
  .sort-card.sort-correct  { border-color: #1a6b45; background: #e5f4ec; }
  .sort-card.sort-incorrect{ border-color: #a32d2d; background: #fcebeb; }
  .sort-emoji { font-size: 1.2rem; }

  /* Collocation */
  .ex-colloc-phrase { font-family: 'Lora', serif; font-size: 1.3rem; font-weight: 700;
    text-align: center; color: #2e4a33; background: #e8f0e9; border-radius: 10px;
    padding: 16px; margin-bottom: 14px; }
  .colloc-hint { font-size: .82rem; color: #a06b10; background: #fff8e7;
    border-radius: 8px; padding: 8px 12px; margin-top: 6px; text-align: center; }

  /* Gender rule */
  .ex-gender-rule { font-size: .82rem; color: #3a5e40; background: #e8f0e9;
    border-radius: 8px; padding: 8px 12px; margin-top: 6px; border-left: 3px solid #6b8f71; }

  /* Feedback */
  .ex-feedback { text-align: center; font-weight: 800; font-size: 1rem;
    padding: 10px; border-radius: 8px; margin: 10px 0; }
  .ex-feedback.correct  { background: #e5f4ec; color: #1a6b45; }
  .ex-feedback.incorrect{ background: #fcebeb; color: #a32d2d; }
  .ex-feedback.close    { background: #fff8e7; color: #a06b10; }
  .hidden { display: none; }

  /* Buttons */
  .ex-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
  .ex-btn { padding: 10px 18px; border-radius: 999px; border: none; cursor: pointer;
    font-family: 'Nunito', sans-serif; font-weight: 800; font-size: .85rem;
    transition: opacity .15s, transform .15s; -webkit-tap-highlight-color: transparent; }
  .ex-btn:active { transform: scale(.96); }
  .ex-btn-check { background: #6b8f71; color: #fff; flex: 1; height: 48px; font-size: .95rem; }
  .ex-btn-hint  { background: #fff8e7; color: #a06b10; border: 1.5px solid #e8a838; }
  .ex-btn-clear { background: #fdf8f0; color: #6b6b6b; border: 1.5px solid rgba(0,0,0,.1); }
  .ex-speak-btn { background: none; border: none; font-size: 1.2rem; cursor: pointer;
    padding: 8px; opacity: .7; transition: opacity .15s; }
  .ex-speak-btn:hover { opacity: 1; }

  /* Word meta */
  .ex-word-meta { text-align: center; font-size: .78rem; color: #aaa;
    margin-bottom: 10px; font-style: italic; }

  @media (max-width: 480px) {
    .ex-option { padding: 12px 14px; font-size: .88rem; }
    .ex-word { font-size: 1.3rem; }
    .scramble-slot, .scramble-letter { width: 36px; height: 36px; font-size: 1rem; }
    .speed-btn { height: 56px; font-size: .92rem; }
  }
`;

// Export for use in practice.html
if (typeof module !== 'undefined') {
  module.exports = {
    exerciseMultipleChoice, exerciseCloze, exerciseScramble,
    exerciseSentenceBuilder, exerciseEmojiMatch, exerciseDefinitionMatch,
    exerciseGender, exerciseSpeedRound, exerciseCategorySort,
    exerciseCollocation, selectExercise, EXERCISE_CSS, vocabSpeak, fuzzyMatch
  };
}
