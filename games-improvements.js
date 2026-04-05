/*
  COSYlanguages — Games Improvement Module
  =========================================
  Drop alongside events.html. Add one script tag:
    <script src="games-improvements.js"></script>

  This module:
  1. Fixes Last Letter validation (validate against vocab JSON)
  2. Adds Action Hero taboo words + round summary
  3. Adds Fluency Flow self-assessment + level-aware prompts
  4. Adds Opinion Arena vocabulary support + group reveal
  5. Adds Lucky Numbers Web Speech auto-caller
  6. Adds Story Chain (new game)
  7. Adds Hot Seat (new game)

  Each section is labelled clearly.
*/

// ─────────────────────────────────────────────
// SHARED UTILITIES
// ─────────────────────────────────────────────

// Speak text in the given language
function gameSpeak(text, lang = 'en') {
  if (!window.speechSynthesis) return;
  const LANGS = { en:'en-GB', fr:'fr-FR', it:'it-IT', ru:'ru-RU', el:'el-GR' };
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = LANGS[lang] || 'en-GB';
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

// Get vocab pool filtered by language + level + theme
function getVocabPool(lang, level, theme) {
  const pool = (window.vocabularyData?.[lang] || []);
  const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
  const targetIdx = levels.indexOf(level);

  return pool.filter(item => {
    const levelMatch = level === 'all' || (levels.indexOf(item.level || 'starter') <= targetIdx);
    const themeMatch = !theme || theme === 'all' || (window.gameUtils && window.gameUtils.isThemeMatch ? window.gameUtils.isThemeMatch(item.theme, theme) : item.theme === theme);
    return levelMatch && themeMatch;
  });
}


// ─────────────────────────────────────────────
// 1. LAST LETTER — VALIDATION FIX
// ─────────────────────────────────────────────
const LastLetterGame = {
  pool: [],
  usedWords: new Set(),
  requiredLetter: null,
  score: { player: 0, computer: 0 },
  turnTimer: null,
  TURN_SECONDS: 30,

  init(lang, level, theme) {
    this.pool = getVocabPool(lang, level, theme);
    this.usedWords = new Set();
    this.score = { player: 0, computer: 0 };
    const starter = this.pool[Math.floor(Math.random() * this.pool.length)];
    if (starter) {
        this.usedWords.add(starter.word.toLowerCase());
        this.requiredLetter = starter.word[starter.word.length - 1].toLowerCase();
    }
    return starter;
  },

  validate(typed, requiredLetter, pool) {
    const word = typed.trim().toLowerCase();
    if (!word) return { ok: false, reason: 'empty', message: 'Please type a word!' };
    if (requiredLetter && word[0] !== requiredLetter.toLowerCase()) return { ok: false, reason: 'wrong_letter',
      message: `Must start with "${requiredLetter.toUpperCase()}"` };
    if (this.usedWords.has(word)) return { ok: false, reason: 'used',
      message: 'That word has already been used!' };

    const match = pool.find(item => item.word.toLowerCase() === word);
    if (!match) return { ok: false, reason: 'unknown',
      message: `"${typed}" is not in the word list for this level. Try another!` };

    this.usedWords.add(word);
    this.requiredLetter = word[word.length - 1];
    return { ok: true, item: match };
  },

  computerTurn(requiredLetter, pool) {
    const candidates = pool.filter(item => {
      const w = item.word.toLowerCase();
      return w[0] === requiredLetter && !this.usedWords.has(w);
    });
    if (candidates.length === 0) return null;
    if (Math.random() < 0.2) return null;
    const picked = candidates[Math.floor(Math.random() * Math.min(candidates.length, 5))];
    this.usedWords.add(picked.word.toLowerCase());
    this.requiredLetter = picked.word[picked.word.length - 1];
    return picked;
  }
};

function lastLetterWordCard(item) {
  return `
    <div class="ll-word-card" style="
      background:#e8f0e9;border-radius:10px;padding:10px 14px;
      display:flex;align-items:center;gap:10px;margin:6px 0;
      font-family:'Nunito',sans-serif;
    ">
      <span style="font-size:1.4rem">${item.emoji || '📝'}</span>
      <div>
        <div style="font-weight:800;font-size:.95rem;color:#2e4a33">${item.word}</div>
        <div style="font-size:.78rem;color:#6b8f71;line-height:1.4">${item.definitions?.[0]?.text || ''}</div>
      </div>
      <button onclick="gameSpeak('${item.word}', document.getElementById('last-letter-lang').value)"
        style="margin-left:auto;background:none;border:none;font-size:1.1rem;cursor:pointer">🔊</button>
    </div>
  `;
}


// ─────────────────────────────────────────────
// 2. ACTION HERO — TABOO WORDS + ROUND SUMMARY
// ─────────────────────────────────────────────

const ActionHeroGame = {
  roundResults: [],

  getTabooWords(item, pool) {
    if (!item || !pool) return [];
    const obvious = [item.word.toLowerCase()];
    if (item.plural) obvious.push(item.plural.toLowerCase());
    const sameTheme = pool
      .filter(p => p.theme === item.theme && p.word !== item.word)
      .slice(0, 2)
      .map(p => p.word);
    return [...obvious, ...sameTheme];
  },

  record(item, correct) {
    this.roundResults.push({ word: item.word, emoji: item.emoji, correct });
  },

  buildSummary(totalTime) {
    const correct = this.roundResults.filter(r => r.correct);
    const wrong   = this.roundResults.filter(r => !r.correct);
    const wordList = (items, icon) => items.map(r =>
      `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;
        border-bottom:0.5px solid rgba(0,0,0,.06);">
        <span style="font-size:1.2rem">${r.emoji || icon}</span>
        <span style="font-weight:700;font-size:.88rem;color:#2e4a33">${r.word}</span>
      </div>`
    ).join('');

    return `
      <div style="font-family:'Nunito',sans-serif;padding:16px;">
        <div style="text-align:center;margin-bottom:16px;">
          <div style="font-size:2.5rem;margin-bottom:4px">
            ${correct.length >= wrong.length ? '🏆' : '💪'}
          </div>
          <div style="font-family:'Lora',serif;font-size:1.4rem;font-weight:700;color:#2e4a33">
            ${correct.length} / ${this.roundResults.length} correct
          </div>
          <div style="font-size:.8rem;color:#aaa;margin-top:2px">in ${totalTime} seconds</div>
        </div>
        ${correct.length ? `
          <div style="font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;
            color:#1a6b45;margin-bottom:6px">✅ Got it (${correct.length})</div>
          <div style="background:#e5f4ec;border-radius:8px;padding:8px 12px;margin-bottom:12px">
            ${wordList(correct, '✅')}
          </div>` : ''}
        ${wrong.length ? `
          <div style="font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;
            color:#a32d2d;margin-bottom:6px">❌ Missed (${wrong.length})</div>
          <div style="background:#fcebeb;border-radius:8px;padding:8px 12px;margin-bottom:12px">
            ${wordList(wrong, '❌')}
          </div>` : ''}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
          <button onclick="document.getElementById('start-charades-game-btn').click()"
            style="height:48px;border-radius:999px;background:#6b8f71;color:#fff;
              border:none;font-family:'Nunito',sans-serif;font-weight:900;font-size:.9rem;cursor:pointer">
            Play Again 🔄
          </button>
          <button onclick="document.getElementById('close-charades-btn').click()"
            style="height:48px;border-radius:999px;background:#fdf8f0;color:#6b6b6b;
              border:2px solid rgba(0,0,0,.1);font-family:'Nunito',sans-serif;font-weight:800;font-size:.9rem;cursor:pointer">
            Done ✓
          </button>
        </div>
      </div>
    `;
  },

  buildWordDisplay(item, pool, level) {
    const showTaboo = ['intermediate','upper-intermediate','advanced','proficiency'].includes(level);
    const taboos = showTaboo ? this.getTabooWords(item, pool).slice(1) : [];
    return `
      <div style="text-align:center;padding:12px;">
        ${showTaboo && taboos.length ? `
          <div style="margin-bottom:8px">
            ${taboos.map(t =>
              `<span style="display:inline-block;background:#fcebeb;color:#a32d2d;
                border-radius:999px;padding:2px 10px;font-size:.72rem;font-weight:800;
                margin:2px;text-decoration:line-through">${t}</span>`
            ).join('')}
          </div>` : ''}
        <div style="font-size:5rem;line-height:1.1;margin-bottom:8px">${item.emoji || '❓'}</div>
        <div style="font-family:'Lora',serif;font-size:1.8rem;font-weight:700;color:#2e4a33">
          ${item.word}
        </div>
      </div>
    `;
  }
};


// ─────────────────────────────────────────────
// 3. FLUENCY FLOW — SELF-ASSESSMENT + PROMPTS
// ─────────────────────────────────────────────

const FluentyFlowGame = {
  getPrompts(topic, level) {
    const starterPrompts = {
      starter:    ['What is it?', 'Do you like it?', 'Where is it?'],
      elementary: ['Describe it.', 'Do you have experience with it?', 'Is it important?'],
      intermediate: ['What are the pros and cons?', 'How does it affect daily life?', 'Give an example.'],
      'upper-intermediate': ['What are the societal implications?', 'How has it changed over time?', 'What is your personal experience?'],
      advanced: ['Analyse critically.', 'What are the ethical dimensions?', 'Compare different perspectives.'],
    };
    return starterPrompts[level] || starterPrompts['intermediate'];
  },

  buildSelfAssessment(topic) {
    return `
      <div id="fluency-assessment" style="
        font-family:'Nunito',sans-serif;padding:16px;text-align:center;
        background:#fdf8f0;border-radius:16px;border:2px solid #e8f0e9;
        margin-top:12px;
      ">
        <div style="font-size:.75rem;font-weight:900;letter-spacing:.05em;text-transform:uppercase;
          color:#6b8f71;margin-bottom:8px">How did you do on "${topic.topic || topic}"?</div>
        <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;">
          ${[
            { emoji:'😬', label:'Struggled', score:1 },
            { emoji:'🙂', label:'OK',       score:3 },
            { emoji:'😊', label:'Good',     score:4 },
            { emoji:'🔥', label:'Nailed it',score:5 },
          ].map(opt => `
            <button onclick="fluencyAssess(${opt.score})" style="
              display:flex;flex-direction:column;align-items:center;gap:4px;
              background:#fff;border:2px solid rgba(107,143,113,.2);border-radius:12px;
              padding:10px 14px;cursor:pointer;font-family:'Nunito',sans-serif;
              transition:all .15s;min-width:64px;
            ">
              <span style="font-size:1.6rem">${opt.emoji}</span>
              <span style="font-size:.72rem;font-weight:800;color:#6b6b6b">${opt.label}</span>
            </button>`
          ).join('')}
        </div>
        <div id="fluency-assess-msg" style="font-size:.78rem;color:#aaa;margin-top:8px"></div>
      </div>
    `;
  }
};

window.fluencyAssess = function(score) {
  const msg = document.getElementById('fluency-assess-msg');
  if (msg) msg.textContent = score >= 4 ? '✅ Great! That topic will appear less often.' :
    score <= 2 ? '📌 Got it — you\'ll see similar topics again soon.' :
    '👍 Saved. Keep practising!';
  document.querySelectorAll('#fluency-assessment button').forEach(b => {
    b.style.opacity = '.5'; b.style.pointerEvents = 'none';
  });
};


// ─────────────────────────────────────────────
// 4. OPINION ARENA — VOCABULARY SUPPORT
// ─────────────────────────────────────────────

const OpinionArenaGame = {
  PHRASES: {
    en: {
      agree:    ['I completely agree...', 'That\'s a good point because...', 'I think so too, especially...', 'Absolutely, and I\'d add that...'],
      disagree: ['I\'m not sure I agree...', 'On the other hand...', 'I see it differently...', 'That may be true, but...'],
      neutral:  ['It depends on...', 'To some extent...', 'There are two sides to this...', 'I can see both perspectives...'],
    },
    fr: {
      agree:    ['Je suis tout à fait d\'accord...', 'C\'est un bon point parce que...', 'Moi aussi, surtout...', 'Absolument, et j\'ajouterais que...'],
      disagree: ['Je ne suis pas sûr(e) d\'être d\'accord...', 'D\'un autre côté...', 'Je vois les choses différemment...', 'C\'est peut-être vrai, mais...'],
      neutral:  ['Ça dépend de...', 'Dans une certaine mesure...', 'Il y a deux aspects...', 'Je comprends les deux perspectives...'],
    },
    it: {
      agree:    ['Sono completamente d\'accordo...', 'È un buon punto perché...', 'Anch\'io, soprattutto...', 'Assolutamente, e aggiungerei che...'],
      disagree: ['Non sono sicuro/a di essere d\'accordo...', 'D\'altra parte...', 'La vedo diversamente...', 'Può essere vero, ma...'],
      neutral:  ['Dipende da...', 'In una certa misura...', 'Ci sono due aspetti...', 'Capisco entrambe le prospettive...'],
    },
    ru: {
      agree:    ['Я полностью согласен/согласна...', 'Это хорошая мысль, потому что...', 'Я тоже так думаю, особенно...', 'Абсолютно, и я бы добавил(а)...'],
      disagree: ['Я не уверен(а), что согласен(а)...', 'С другой стороны...', 'Я вижу это иначе...', 'Возможно, это и так, но...'],
      neutral:  ['Это зависит от...', 'В определённой степени...', 'Есть две стороны...', 'Я понимаю обе точки зрения...'],
    },
    el: {
      agree:    ['Συμφωνώ απόλυτα...', 'Είναι ένα καλό σημείο γιατί...', 'Το ίδιο πιστεύω κι εγώ, ειδικά...', 'Απολύτως, και θα πρόσθετα ότι...'],
      disagree: ['Δεν είμαι σίγουρος ότι συμφωνώ...', 'Από την άλλη πλευρά...', 'Το βλέπω διαφορετικά...', 'Αυτό μπορεί να είναι αλήθεια, αλλά...'],
      neutral:  ['Εξαρτάται από...', 'Σε κάποιο βαθμό...', 'Υπάρχουν δύο πλευρές σε αυτό...', 'Μπορώ να δω και τις δύο προοπτικές...'],
    }
  },

  buildVocabSupport(lang) {
    const phrases = this.PHRASES[lang] || this.PHRASES['en'];
    const rand = arr => arr[Math.floor(Math.random() * arr.length)];
    return `
      <div style="font-family:'Nunito',sans-serif;margin-top:12px;
        background:#f0f5f1;border-radius:12px;padding:12px 14px;">
        <div style="font-size:.68rem;font-weight:900;letter-spacing:.05em;text-transform:uppercase;
          color:#6b8f71;margin-bottom:8px">💬 Useful phrases</div>
        <div style="display:grid;gap:6px;">
          ${['agree','disagree','neutral'].map(type => `
            <div style="background:#fff;border-radius:8px;padding:8px 10px;
              border-left:3px solid ${type==='agree'?'#1a6b45':type==='disagree'?'#a32d2d':'#e8a838'}">
              <div style="font-size:.68rem;font-weight:900;text-transform:uppercase;color:${
                type==='agree'?'#1a6b45':type==='disagree'?'#a32d2d':'#a06b10'};margin-bottom:3px">
                ${type==='agree'?'To agree':'To disagree or nuance'}${type==='neutral'?'':''}
              </div>
              <div style="font-size:.82rem;color:#2e4a33;font-weight:700">
                "${rand(phrases[type])}"
              </div>
            </div>`
          ).join('')}
        </div>
      </div>
    `;
  },

  buildGroupReveal() {
    return `
      <div style="font-family:'Nunito',sans-serif;text-align:center;padding:12px;">
        <div style="font-size:.75rem;font-weight:900;letter-spacing:.05em;text-transform:uppercase;
          color:#6b8f71;margin-bottom:10px">What do you think?</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
          <button id="oa-agree" onclick="oaVote('agree')" style="
            height:64px;border-radius:12px;background:#e5f4ec;
            border:2px solid #1a6b45;color:#1a6b45;
            font-family:'Nunito',sans-serif;font-weight:900;font-size:1rem;cursor:pointer">
            👍 Agree
          </button>
          <button id="oa-disagree" onclick="oaVote('disagree')" style="
            height:64px;border-radius:12px;background:#fcebeb;
            border:2px solid #a32d2d;color:#a32d2d;
            font-family:'Nunito',sans-serif;font-weight:900;font-size:1rem;cursor:pointer">
            👎 Disagree
          </button>
        </div>
        <div id="oa-vote-result" style="display:none;font-size:.88rem;color:#6b6b6b;
          background:#f0f5f1;border-radius:8px;padding:8px"></div>
      </div>
    `;
  }
};

window.oaVote = function(choice) {
  const result = document.getElementById('oa-vote-result');
  if (result) {
    result.style.display = 'block';
    result.textContent = choice === 'agree'
      ? '👍 You agree — now explain why! Speak for at least 30 seconds.'
      : '👎 You disagree — now explain why! Speak for at least 30 seconds.';
  }
  ['agree','disagree'].forEach(c => {
    const btn = document.getElementById(`oa-${c}`);
    if (btn) { btn.style.opacity = c === choice ? '1' : '.4'; btn.style.pointerEvents = 'none'; }
  });
};


// ─────────────────────────────────────────────
// 5. LUCKY NUMBERS — WEB SPEECH AUTO-CALLER
// ─────────────────────────────────────────────

const LuckyNumbersGame = {
  speakCalled(item, lang) {
    gameSpeak(item.toString(), lang);
  },

  startAutoCaller(items, lang, intervalMs = 4000) {
    this.stopAutoCaller();
    let idx = 0;
    const call = () => {
        if (idx >= items.length) {
            this.stopAutoCaller();
            return;
        }
        this.speakCalled(items[idx], lang);
        const btn = document.getElementById('bingo-call-next-btn');
        if (btn) btn.click();
        idx++;
    };
    call();
    this.autoCallerInterval = setInterval(call, intervalMs);
  },

  stopAutoCaller() {
    if (this.autoCallerInterval) {
        clearInterval(this.autoCallerInterval);
        this.autoCallerInterval = null;
    }
    window.speechSynthesis?.cancel();
  },

  celebrate() {
    if (window.gameUtils && window.gameUtils.createConfetti) {
        window.gameUtils.createConfetti();
        window.gameUtils.playGameSound('success');
    }
    const el = document.createElement('div');
    el.style.cssText = `
      position:fixed;inset:0;z-index:999;
      background:rgba(46,74,51,.9);
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      font-family:'Nunito',sans-serif;color:#fff;text-align:center;
    `;
    el.innerHTML = `
      <div style="font-size:5rem;margin-bottom:8px;animation:bounce .6s ease both">🎉</div>
      <div style="font-family:'Lora',serif;font-size:2.5rem;font-weight:700;margin-bottom:4px">BINGO!</div>
      <div style="font-size:1rem;opacity:.8;margin-bottom:24px">Well done! 🏆</div>
      <button onclick="this.parentNode.remove()" style="
        height:48px;padding:0 28px;border-radius:999px;
        background:#e8a838;color:#fff;border:none;
        font-family:'Nunito',sans-serif;font-weight:900;font-size:1rem;cursor:pointer">
        Continue →
      </button>
    `;
    document.body.appendChild(el);
    if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 200]);
  }
};


// ─────────────────────────────────────────────
// 7. NEW GAME: STORY CHAIN 🃏
// ─────────────────────────────────────────────

const StoryChainGame = {
  story: [], pool: [], currentWord: null,

  init(lang, level, theme) {
    this.pool = getVocabPool(lang, level, theme);
    this.story = [];
    return this.nextWord();
  },

  nextWord() {
    const unused = this.pool.filter(item => !this.story.some(s => s.word === item.word));
    if (unused.length === 0) return null;
    this.currentWord = unused[Math.floor(Math.random() * unused.length)];
    return this.currentWord;
  },

  addSentence(sentence, playerName) {
    this.story.push({ player: playerName, sentence, word: this.currentWord?.word, emoji: this.currentWord?.emoji, guesses: [] });
    return this.nextWord();
  },

  buildWordCard(item) {
    return `
      <div style="background:linear-gradient(135deg,#2e4a33,#4a6b50);
        border-radius:16px;padding:20px;text-align:center;color:#fff;
        font-family:'Nunito',sans-serif;margin-bottom:14px;">
        <div style="font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;
          opacity:.7;margin-bottom:8px">🤫 Only you can see this</div>
        <div style="font-size:3.5rem;line-height:1;margin-bottom:6px">${item.emoji || '📝'}</div>
        <div style="font-family:'Lora',serif;font-size:1.6rem;font-weight:700">${item.word}</div>
        <div style="font-size:.8rem;opacity:.75;margin-top:4px;line-height:1.4">${item.definitions?.[0]?.text || ''}</div>
        <div style="font-size:.72rem;opacity:.6;margin-top:8px">Write a sentence using this word — without saying the word itself!</div>
      </div>
    `;
  },

  buildStoryDisplay(revealWords = false) {
    if (!this.story.length) return `<div style="text-align:center;color:#aaa;padding:20px">No story yet — add the first sentence!</div>`;
    return `
      <div style="font-family:'Nunito',sans-serif;">
        <div style="font-size:.7rem;font-weight:900;letter-spacing:.05em;text-transform:uppercase;
          color:#6b8f71;margin-bottom:8px">📖 The Story So Far</div>
        ${this.story.map((entry, i) => `
          <div style="background:#fff;border-radius:10px;padding:12px 14px;margin-bottom:8px;
            border-left:3px solid ${revealWords ? '#e8a838' : '#6b8f71'}">
            <div style="font-size:.7rem;color:#aaa;margin-bottom:4px">
              ${entry.player || 'Player ' + (i+1)}
              ${revealWords ? ` — <strong style="color:#a06b10">${entry.emoji || '✨'} ${entry.word}</strong>` : ''}
            </div>
            <div style="font-size:.92rem;color:#2a2a2a;line-height:1.6">${entry.sentence}</div>
          </div>`
        ).join('')}
      </div>
    `;
  },

  buildFinalReveal() {
    return `
      <div style="font-family:'Nunito',sans-serif;padding:12px;">
        <div style="text-align:center;margin-bottom:16px;">
          <div style="font-size:2rem;margin-bottom:4px">📖</div>
          <div style="font-family:'Lora',serif;font-size:1.2rem;font-weight:700;color:#2e4a33">The Full Story — Revealed!</div>
        </div>
        ${this.buildStoryDisplay(true)}
        <div style="margin-top:12px;font-size:.78rem;color:#aaa;text-align:center">Each highlighted word was the secret word for that sentence. How many did you guess correctly?</div>
        <button onclick="storyChainReset()" style="width:100%;height:48px;border-radius:999px;background:#6b8f71;color:#fff;border:none;font-family:'Nunito',sans-serif;font-weight:900;font-size:.95rem;margin-top:14px;cursor:pointer">New Story 🔄</button>
      </div>
    `;
  }
};

window.storyChainStart = function() {
  const lang  = document.getElementById('sc-lang').value;
  const level = document.getElementById('sc-level').value;
  const theme = document.getElementById('sc-theme').value;
  const item  = StoryChainGame.init(lang, level, theme);
  if (!item) { alert("No words found!"); return; }
  document.getElementById('sc-setup').style.display = 'none';
  document.getElementById('sc-word-reveal').innerHTML = StoryChainGame.buildWordCard(item);
  document.getElementById('sc-word-reveal').style.display = 'block';
  document.getElementById('sc-input-area').style.display = 'block';
  document.getElementById('story-display').innerHTML = StoryChainGame.buildStoryDisplay();
  document.getElementById('sc-finish-btn').style.display = 'block';
};

window.storyChainAdd = function() {
  const sentence = document.getElementById('sc-sentence').value.trim();
  if (!sentence) return;
  const nextItem = StoryChainGame.addSentence(sentence, 'Player');
  document.getElementById('sc-sentence').value = '';
  document.getElementById('story-display').innerHTML = StoryChainGame.buildStoryDisplay();
  if (nextItem) document.getElementById('sc-word-reveal').innerHTML = StoryChainGame.buildWordCard(nextItem);
  else document.getElementById('sc-word-reveal').innerHTML = '<div style="text-align:center; color:#aaa">No more words! Keep writing or reveal.</div>';
};

window.storyChainFinish = function() {
  document.getElementById('sc-input-area').style.display = 'none';
  document.getElementById('sc-word-reveal').style.display = 'none';
  document.getElementById('sc-finish-btn').style.display = 'none';
  document.getElementById('sc-final-reveal').innerHTML = StoryChainGame.buildFinalReveal();
  document.getElementById('sc-final-reveal').style.display = 'block';
};

window.storyChainReset = function() {
  document.getElementById('sc-final-reveal').style.display = 'none';
  document.getElementById('sc-setup').style.display = 'block';
};


// ─────────────────────────────────────────────
// 8. NEW GAME: HOT SEAT 🎯
// ─────────────────────────────────────────────

const HotSeatGame = {
  DURATION: 60, questions: [], currentQ: 0, score: 0, _interval: null,

  generateQuestions(pool, count = 10) {
    const items = [...pool].sort(() => Math.random() - .5).slice(0, count);
    const types = ['plural', 'definition', 'use_in_sentence'];
    return items.map(item => {
      const type = types[Math.floor(Math.random() * types.length)];
      return this.buildQuestion(item, type);
    }).filter(Boolean);
  },

  buildQuestion(item, type) {
    switch(type) {
      case 'plural':
        if (!item.plural || item.plural === item.word + 's') return { text: `Give a quick definition of "${item.word}"`, answer: item.definitions?.[0]?.text || '', emoji: item.emoji, accept: null, selfAssess: true };
        return { text: `What's the plural of "${item.word}"?`, answer: item.plural, emoji: item.emoji, accept: [item.plural.toLowerCase()] };
      case 'definition':
        return { text: `Give a quick definition of "${item.word}"`, answer: item.definitions?.[0]?.text || '', emoji: item.emoji, accept: null, selfAssess: true };
      case 'use_in_sentence':
        return { text: `Use "${item.word}" in a sentence!`, answer: item.definitions?.[0]?.examples?.[0]?.text || item.definitions?.[0]?.examples?.[0] || '', emoji: item.emoji, accept: null, selfAssess: true };
      default:
        return { text: `Say something about "${item.word}"!`, answer: item.definitions?.[0]?.text || '', emoji: item.emoji, accept: null, selfAssess: true };
    }
  },

  buildGameUI() {
    const q = this.questions[this.currentQ];
    if (!q) return this.buildSummary();
    return `
      <div style="font-family:'Nunito',sans-serif;padding:16px;text-align:center;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-size:.85rem;font-weight:800;color:#6b8f71">
          <span>${this.currentQ + 1} / ${this.questions.length}</span>
          <span id="hs-timer" style="font-family:'Lora',serif;font-size:1.5rem;color:#2e4a33">${this.DURATION}</span>
          <span>⭐ ${this.score}</span>
        </div>
        <div style="background:#fff;border-radius:16px;padding:20px;box-shadow:0 4px 20px rgba(0,0,0,.06);margin-bottom:14px;">
          <div style="font-size:3rem;margin-bottom:8px">${q.emoji || '🎯'}</div>
          <div style="font-family:'Lora',serif;font-size:1.15rem;font-weight:700;color:#2e4a33;line-height:1.4">${q.text}</div>
        </div>
        ${q.selfAssess ? `
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <button onclick="hotSeatAnswer(false)" style="height:60px;border-radius:12px;background:#fcebeb;border:2px solid #a32d2d;color:#a32d2d;font-family:'Nunito',sans-serif;font-weight:900;font-size:.95rem;cursor:pointer">✗ Missed it</button>
            <button onclick="hotSeatAnswer(true)" style="height:60px;border-radius:12px;background:#e5f4ec;border:2px solid #1a6b45;color:#1a6b45;font-family:'Nunito',sans-serif;font-weight:900;font-size:.95rem;cursor:pointer">✓ Got it!</button>
          </div>
          <div style="font-size:.78rem;color:#aaa;margin-top:8px">Example: "${q.answer}"</div>
        ` : `
          <input id="hs-input" type="text" placeholder="Type your answer..." style="width:100%;height:52px;border-radius:10px;border:2px solid rgba(107,143,113,.2);background:#fdf8f0;font-family:'Nunito',sans-serif;font-size:1rem;font-weight:700;padding:0 16px;outline:none;margin-bottom:10px;" onkeydown="if(event.key==='Enter')hotSeatSubmit()" />
          <button onclick="hotSeatSubmit()" style="width:100%;height:48px;border-radius:999px;background:#6b8f71;color:#fff;border:none;font-family:'Nunito',sans-serif;font-weight:900;font-size:.95rem;cursor:pointer">Submit ✓</button>
        `}
      </div>
    `;
  },

  buildSummary() {
    const pct = Math.round(this.score / this.questions.length * 100);
    return `
      <div style="font-family:'Nunito',sans-serif;padding:20px;text-align:center;">
        <div style="font-size:3rem;margin-bottom:8px">${pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '📚'}</div>
        <div style="font-family:'Lora',serif;font-size:1.6rem;font-weight:700;color:#2e4a33;margin-bottom:4px">${this.score} / ${this.questions.length}</div>
        <div style="font-size:.9rem;color:#aaa;margin-bottom:24px">${pct >= 80 ? 'Outstanding! 🔥' : pct >= 50 ? 'Good effort! Keep going 💪' : 'Good practice — try again!'}</div>
        <button onclick="hotSeatRestart()" style="width:100%;height:52px;border-radius:999px;background:#6b8f71;color:#fff;border:none;font-family:'Nunito',sans-serif;font-weight:900;font-size:1rem;cursor:pointer">Play Again 🔄</button>
      </div>
    `;
  }
};

window.hsDuration = 60;
window.hsSetDuration = sec => {
  window.hsDuration = sec;
  document.querySelectorAll('.hs-dur-btn').forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.sec) === sec));
};

window.hotSeatStart = function() {
  const lang = document.getElementById('hs-lang').value, level = document.getElementById('hs-level').value, theme = document.getElementById('hs-theme').value;
  const pool = getVocabPool(lang, level, theme);
  if (pool.length === 0) { alert("No words found!"); return; }
  HotSeatGame.currentQ = 0; HotSeatGame.score = 0; HotSeatGame.DURATION = window.hsDuration; HotSeatGame.questions = HotSeatGame.generateQuestions(pool, 10);
  document.getElementById('hs-setup').style.display = 'none';
  document.getElementById('hot-seat-area').innerHTML = HotSeatGame.buildGameUI();
  let t = HotSeatGame.DURATION;
  if (HotSeatGame._interval) clearInterval(HotSeatGame._interval);
  HotSeatGame._interval = setInterval(() => {
    const el = document.getElementById('hs-timer');
    if (!el || HotSeatGame.currentQ >= HotSeatGame.questions.length) { clearInterval(HotSeatGame._interval); return; }
    el.textContent = --t;
    if (t <= 0) { clearInterval(HotSeatGame._interval); document.getElementById('hot-seat-area').innerHTML = HotSeatGame.buildSummary(); }
    if (t <= 10) el.style.color = '#a32d2d';
  }, 1000);
};

window.hotSeatAnswer = function(correct) {
  if (correct) { HotSeatGame.score++; if (window.gameUtils?.playGameSound) window.gameUtils.playGameSound('success'); }
  else { if (window.gameUtils?.playGameSound) window.gameUtils.playGameSound('error'); }
  HotSeatGame.currentQ++;
  const area = document.getElementById('hot-seat-area');
  if (area) area.innerHTML = HotSeatGame.buildGameUI();
};

window.hotSeatSubmit = function() {
  const input = document.getElementById('hs-input'), q = HotSeatGame.questions[HotSeatGame.currentQ];
  if (!input || !q) return;
  hotSeatAnswer(q.accept && q.accept.includes(input.value.trim().toLowerCase()));
};

window.hotSeatRestart = () => { document.getElementById('hs-setup').style.display = 'block'; document.getElementById('hot-seat-area').innerHTML = ''; };


// ─────────────────────────────────────────────
// 9. WORD LINKER — ODD ONE OUT EXPLANATION
// ─────────────────────────────────────────────

const WordLinkerGame = {
  buildExplanation(item, reason) {
    return `
      <div style="background:#e8f0e9;border-radius:10px;padding:12px 14px;font-family:'Nunito',sans-serif;margin-top:8px;border-left:3px solid #6b8f71;">
        <div style="font-size:.68rem;font-weight:900;text-transform:uppercase;letter-spacing:.05em;color:#4a6b50;margin-bottom:4px">Why it's different:</div>
        <div style="font-size:.88rem;color:#2e4a33;line-height:1.55">${reason || item.explanation || "This word belongs to a different logical group."}</div>
      </div>
    `;
  }
};

// Global expose
window.LastLetterGame = LastLetterGame;
window.ActionHeroGame = ActionHeroGame;
window.FluentyFlowGame = FluentyFlowGame;
window.OpinionArenaGame = OpinionArenaGame;
window.LuckyNumbersGame = LuckyNumbersGame;
window.StoryChainGame = StoryChainGame;
window.HotSeatGame = HotSeatGame;
window.WordLinkerGame = WordLinkerGame;
window.lastLetterWordCard = lastLetterWordCard;
window.getVocabPool = getVocabPool;
window.gameSpeak = gameSpeak;

// ─────────────────────────────────────────────
// 10. SESSION LOG & PREFERENCES
// ─────────────────────────────────────────────

const GameSessionManager = {
  LOG_KEY: 'cosy_session_log',
  PREF_KEY: 'cosy_game_prefs',

  init() {
    this.setupGlobalPrefs();
    this.renderLog();
  },

  setupGlobalPrefs() {
    const langSelect = document.getElementById('global-lang-select');
    const levelSelect = document.getElementById('global-level-select');
    if (!langSelect || !levelSelect) return;

    const saved = JSON.parse(localStorage.getItem(this.PREF_KEY) || '{}');
    if (saved.lang) langSelect.value = saved.lang;
    if (saved.level) levelSelect.value = saved.level;

    const update = () => {
      localStorage.setItem(this.PREF_KEY, JSON.stringify({
        lang: langSelect.value,
        level: levelSelect.value
      }));
    };
    langSelect.addEventListener('change', update);
    levelSelect.addEventListener('change', update);
  },

  recordSession(gameName, icon) {
    let lang = document.getElementById('global-lang-select')?.value || localStorage.getItem('language') || 'en';
    let level = document.getElementById('global-level-select')?.value || 'starter';
    let log = JSON.parse(localStorage.getItem(this.LOG_KEY) || '[]');

    // Add new at start, limit to 4
    log = [{ gameName, icon, lang, level, date: new Date().toISOString() }, ...log.filter(l => l.gameName !== gameName)].slice(0, 4);
    localStorage.setItem(this.LOG_KEY, JSON.stringify(log));
    this.renderLog();
  },

  renderLog() {
    const container = document.getElementById('session-log-container');
    const grid = document.getElementById('session-log-grid');
    if (!container || !grid) return;

    const log = JSON.parse(localStorage.getItem(this.LOG_KEY) || '[]');
    if (log.length === 0) {
      container.style.display = 'none';
      return;
    }

    container.style.display = 'block';
    grid.innerHTML = log.map(item => `
      <div class="log-item">
        <div class="log-icon">${item.icon}</div>
        <div class="log-body">
          <span class="log-name">${item.gameName}</span>
          <div class="log-meta">${item.lang.toUpperCase()} · ${item.level}</div>
        </div>
      </div>
    `).join('');
  }
};

// Override openGameSheet to use global prefs and record session
const originalOpenGameSheet = window.openGameSheet;
window.openGameSheet = function(gameName, icon) {
  GameSessionManager.recordSession(gameName, icon);

  // Set values in the bottom sheet before showing it
  const lang = document.getElementById('global-lang-select')?.value;
  const level = document.getElementById('global-level-select')?.value;

  if (originalOpenGameSheet) originalOpenGameSheet(gameName, icon);

  // After sheet opens, sync options if they exist
  setTimeout(() => {
    if (lang) {
      const langOpt = document.querySelector(`#gss-lang-options .gss-option[data-value="${lang}"]`);
      if (langOpt) langOpt.click();
    }
    if (level) {
      const levelOpt = document.querySelector(`#gss-level-options .gss-option[data-value="${level}"]`);
      if (levelOpt) levelOpt.click();
    }
  }, 50);
};

document.addEventListener('DOMContentLoaded', () => GameSessionManager.init());
