document.addEventListener('DOMContentLoaded', () => {
    const { getVocabPool, t } = window.gameUtils;

    const populateThemesLocal = () => {
        const themeSelect = document.getElementById('hs-theme');
        const levelSelect = document.getElementById('hs-level');
        const langSelect = document.getElementById('hs-lang');
        if (!themeSelect || !levelSelect || !langSelect) return;
        window.gameUtils.populateThemes(themeSelect, levelSelect, langSelect.value);
    };

    const HotSeatGame = {
      DURATION: 60, questions: [], currentQ: 0, score: 0, _interval: null,

      generateQuestions(pool, count = 10) {
        const items = [...pool];
        const seed = document.querySelector("#hs-setup .game-seed")?.value;
        if (seed) window.gameUtils.seededShuffle(items, parseInt(seed));
        else items.sort(() => Math.random() - 0.5);
        const finalItems = items.slice(0, count);
        const types = ['plural', 'definition', 'use_in_sentence'];
        return finalItems.map(item => {
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

    document.getElementById('hs-lang')?.addEventListener('change', populateThemesLocal);
    document.getElementById('hs-level')?.addEventListener('change', populateThemesLocal);

    window.hotSeatStart = function() {
      const lang = document.getElementById('hs-lang').value, level = document.getElementById('hs-level').value, theme = document.getElementById('hs-theme').value;
      const pool = getVocabPool(lang, level, theme);
      if (pool.length === 0) { window.gameUtils.showGameMessage(document.getElementById("hs-setup"), t("alert_no_adventure_items") || "No words found!", "error"); return; }
      HotSeatGame.currentQ = 0; HotSeatGame.score = 0; HotSeatGame.DURATION = parseInt(document.getElementById('hs-timer-duration')?.value || '60'); HotSeatGame.questions = HotSeatGame.generateQuestions(pool, 10);
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
      if (correct) {
          HotSeatGame.score++;
          if (window.gameUtils?.playGameSound) window.gameUtils.playGameSound('success');
          if (window.gameUtils?.addGamePoints) window.gameUtils.addGamePoints(5);
      }
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

    window.HotSeatGame = HotSeatGame;
    // Auto-populate on first load if visible
    setTimeout(populateThemesLocal, 500);
});
