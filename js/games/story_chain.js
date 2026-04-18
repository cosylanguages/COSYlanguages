document.addEventListener('DOMContentLoaded', () => {
    const { getVocabPool, t } = window.gameUtils;

    const populateThemesLocal = () => {
        const themeSelect = document.getElementById('sc-theme');
        const levelSelect = document.getElementById('sc-level');
        const langSelect = document.getElementById('sc-lang');
        if (!themeSelect || !levelSelect || !langSelect) return;
        window.gameUtils.populateThemes(themeSelect, levelSelect, langSelect.value);
    };

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
        const seed = document.querySelector("#sc-setup .game-seed")?.value;
        if (seed) {
            const rng = window.gameUtils.mulberry32(parseInt(seed) + this.story.length);
            this.currentWord = unused[Math.floor(rng() * unused.length)];
        } else {
            this.currentWord = unused[Math.floor(Math.random() * unused.length)];
        }
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

    document.getElementById('sc-lang')?.addEventListener('change', populateThemesLocal);
    document.getElementById('sc-level')?.addEventListener('change', populateThemesLocal);

    window.storyChainStart = function() {
      const lang  = document.getElementById('sc-lang').value;
      const level = document.getElementById('sc-level').value;
      const theme = document.getElementById('sc-theme').value;
      const isSolo = document.getElementById('story-chain-solo-mode')?.checked || false;

      const item  = StoryChainGame.init(lang, level, theme);
      if (!item) { window.gameUtils.showGameMessage(document.getElementById("sc-setup"), t("alert_no_adventure_items") || "No words found!", "error"); return; }

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
      if (window.gameUtils.addGamePoints) window.gameUtils.addGamePoints(10);

      const isSolo = document.getElementById('story-chain-solo-mode')?.checked || false;
      const nextItem = StoryChainGame.addSentence(sentence, 'Player');

      document.getElementById('sc-sentence').value = '';
      document.getElementById('story-display').innerHTML = StoryChainGame.buildStoryDisplay();

      if (isSolo && nextItem) {
          // Robot Turn
          setTimeout(() => {
              const robotSentence = `The ${nextItem.word} was very interesting.`; // Simple template
              const afterRobotItem = StoryChainGame.addSentence(robotSentence, 'Robot 🤖');
              document.getElementById('story-display').innerHTML = StoryChainGame.buildStoryDisplay();

              if (afterRobotItem) {
                  document.getElementById('sc-word-reveal').innerHTML = StoryChainGame.buildWordCard(afterRobotItem);
              } else {
                  document.getElementById('sc-word-reveal').innerHTML = '<div style="text-align:center; color:#aaa">No more words! Keep writing or reveal.</div>';
              }
          }, 1000);

          document.getElementById('sc-word-reveal').innerHTML = '<div style="text-align:center; color:#aaa">Robot is thinking... 🤖</div>';
      } else {
          if (nextItem) document.getElementById('sc-word-reveal').innerHTML = StoryChainGame.buildWordCard(nextItem);
          else document.getElementById('sc-word-reveal').innerHTML = '<div style="text-align:center; color:#aaa">No more words! Keep writing or reveal.</div>';
      }
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

    window.StoryChainGame = StoryChainGame;
    // Auto-populate on first load if visible
    setTimeout(populateThemesLocal, 500);
});
