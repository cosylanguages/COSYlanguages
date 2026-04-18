const OpinionArenaGame = {
  buildVocabSupport(lang) {
    const t = window.gameUtils.t;
    const phrases = {
      agree: t('oa_phrases_agree') || [],
      disagree: t('oa_phrases_disagree') || [],
      neutral: t('oa_phrases_neutral') || []
    };
    const rand = arr => arr && arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : "...";

    return `
      <div style="font-family:'Nunito',sans-serif;margin-top:12px;
        background:#f0f5f1;border-radius:12px;padding:12px 14px;">
        <div style="font-size:.68rem;font-weight:900;letter-spacing:.05em;text-transform:uppercase;
          color:#6b8f71;margin-bottom:8px" data-translate-key="oa_useful_phrases">${t('oa_useful_phrases')}</div>
        <div style="display:grid;gap:6px;">
          ${["agree","disagree","neutral"].map(type => `
            <div style="background:#fff;border-radius:8px;padding:8px 10px;
              border-left:3px solid ${type==="agree"?"#1a6b45":type==="disagree"?"#a32d2d":"#e8a838"}">
              <div style="font-size:.68rem;font-weight:900;text-transform:uppercase;color:${
                type==="agree"?"#1a6b45":type==="disagree"?"#a32d2d":"#a06b10"};margin-bottom:3px"
                data-translate-key="${type === 'agree' ? 'oa_to_agree' : 'oa_to_disagree'}">
                ${type === 'agree' ? t('oa_to_agree') : t('oa_to_disagree')}
              </div>
              <div style="font-size:.82rem;color:#2e4a33;font-weight:700">
                "${rand(phrases[type])}"
              </div>
            </div>`
          ).join("")}
        </div>
      </div>
    `;
  },

  buildGroupReveal() {
    const t = window.gameUtils.t;
    return `
      <div style="font-family:'Nunito',sans-serif;text-align:center;padding:12px;">
        <div style="font-size:.75rem;font-weight:900;letter-spacing:.05em;text-transform:uppercase;
          color:#6b8f71;margin-bottom:10px" data-translate-key="oa_what_think">${t('oa_what_think')}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
          <button id="oa-agree" onclick="oaVote('agree')" style="
            height:64px;border-radius:12px;background:#e5f4ec;
            border:2px solid #1a6b45;color:#1a6b45;
            font-family:'Nunito',sans-serif;font-weight:900;font-size:1rem;cursor:pointer"
            data-translate-key="oa_agree_btn">
            ${t('oa_agree_btn')}
          </button>
          <button id="oa-disagree" onclick="oaVote('disagree')" style="
            height:64px;border-radius:12px;background:#fcebeb;
            border:2px solid #a32d2d;color:#a32d2d;
            font-family:'Nunito',sans-serif;font-weight:900;font-size:1rem;cursor:pointer"
            data-translate-key="oa_disagree_btn">
            ${t('oa_disagree_btn')}
          </button>
        </div>
      </div>
    `;
  }
};

window.oaVote = (type) => {
  const btn = document.getElementById("oa-" + type);
  if (btn) {
    btn.style.transform = "scale(1.05)";
    btn.style.boxShadow = "0 0 15px " + (type === "agree" ? "#1a6b45" : "#a32d2d");
  }
};

window.OpinionArenaGame = OpinionArenaGame;

const CriticsCornerGame = {
  getAnalysis(lang) {
    const t = window.gameUtils.t;
    const pool = t('cc_analysis_pool') || [];
    return pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : "...";
  }
};
window.CriticsCornerGame = CriticsCornerGame;

const FluentyFlowGame = {
  getPrompts(topic, level) {
    const t = window.gameUtils.t;
    const promptsMap = {
      starter: t('ff_prompts_starter'),
      elementary: t('ff_prompts_elementary'),
      intermediate: t('ff_prompts_intermediate'),
      "upper-intermediate": t('ff_prompts_upper_intermediate'),
      advanced: t('ff_prompts_advanced')
    };
    return promptsMap[level] || promptsMap["intermediate"] || [];
  },

  buildSelfAssessment(topic) {
    const t = window.gameUtils.t;
    const topicText = topic.topic || topic;
    return `
      <div id="fluency-assessment" style="
        font-family:'Nunito',sans-serif;padding:16px;text-align:center;
        background:#fdf8f0;border-radius:16px;border:2px solid #e8f0e9;
        margin-top:12px;
      ">
        <div style="font-size:.75rem;font-weight:900;letter-spacing:.05em;text-transform:uppercase;
          color:#6b8f71;margin-bottom:8px">${t('ff_how_did_you_do').replace('{0}', topicText)}</div>
        <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;">
          ${[
            { emoji: '😬', label: t('ff_struggled'), score: 1, key: 'ff_struggled' },
            { emoji: '🙂', label: t('ff_ok'),        score: 3, key: 'ff_ok' },
            { emoji: '😊', label: t('ff_good'),      score: 4, key: 'ff_good' },
            { emoji: '🔥', label: t('ff_nailed_it'), score: 5, key: 'ff_nailed_it' },
          ].map(opt => `
            <button onclick="fluencyAssess(${opt.score})" style="
              display:flex;flex-direction:column;align-items:center;gap:4px;
              background:#fff;border:2px solid rgba(107,143,113,.2);border-radius:12px;
              padding:10px 14px;cursor:pointer;font-family:'Nunito',sans-serif;
              transition:all .15s;min-width:64px;
            ">
              <span style="font-size:1.6rem">${opt.emoji}</span>
              <span style="font-size:.72rem;font-weight:800;color:#6b6b6b" data-translate-key="${opt.key}">${opt.label}</span>
            </button>`
          ).join("")}
        </div>
        <div id="fluency-assess-msg" style="font-size:.78rem;color:#aaa;margin-top:8px"></div>
      </div>
    `;
  }
};

window.fluencyAssess = function(score) {
  const t = window.gameUtils.t;
  const msg = document.getElementById("fluency-assess-msg");
  if (msg) msg.textContent = score >= 4 ? t('ff_msg_good') :
    score <= 2 ? t('ff_msg_struggled') :
    t('ff_msg_ok');
  document.querySelectorAll("#fluency-assessment button").forEach(b => {
    b.style.opacity = ".5"; b.style.pointerEvents = "none";
  });
};

window.FluentyFlowGame = FluentyFlowGame;

document.addEventListener('DOMContentLoaded', () => {
    const { t, startTimer, stopTimer, handleShare, showGameMessage, populateThemes, isThemeMatch } = window.gameUtils;

    // --- Battle of Wits Logic ---
    const initDebates = () => {
        const modal = document.getElementById('debates-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-debates-btn');
        const closeBtn = document.getElementById('close-debates-btn');
        const startBtn = document.getElementById('start-debates-btn');
        const nextBtn = document.getElementById('next-debate-btn');
        const levelSelect = document.getElementById('debates-level');
        const langSelect = document.getElementById('debates-lang');
        const soloToggle = document.getElementById('debates-solo-mode');

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const topicDisplay = document.getElementById('debate-topic');
        const sideAName = document.getElementById('side-a-name');
        const sideBName = document.getElementById('side-b-name');
        const sideAIdeas = document.getElementById('side-a-ideas');
        const sideBIdeas = document.getElementById('side-b-ideas');

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                stopTimer();
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const debate = pool.pop();
            topicDisplay.textContent = debate.topic;
            sideAName.textContent = debate.sideA;

            const isSolo = soloToggle ? soloToggle.checked : false;
            sideBName.textContent = isSolo ? `🤖 ${debate.sideB} (Robot)` : debate.sideB;

            stopTimer();
            const duration = parseInt(document.getElementById('debates-timer-duration')?.value || '120');
            startTimer('debates-timer', duration, () => {
                topicDisplay.textContent += ` (${t('time_up')})`;
            });

            const ideasAContainer = sideAIdeas.parentElement;
            const ideasBContainer = sideBIdeas.parentElement;

            sideAIdeas.innerHTML = '';
            if (debate.ideasA && debate.ideasA.length > 0) {
                ideasAContainer.style.display = 'block';
                debate.ideasA.forEach(idea => {
                    const li = document.createElement('li');
                    li.textContent = idea;
                    sideAIdeas.appendChild(li);
                });
            } else {
                ideasAContainer.style.display = 'none';
            }

            sideBIdeas.innerHTML = '';
            if (debate.ideasB && debate.ideasB.length > 0) {
                ideasBContainer.style.display = 'block';
                debate.ideasB.forEach(idea => {
                    const li = document.createElement('li');
                    li.textContent = idea;
                    sideBIdeas.appendChild(li);
                });
            } else {
                ideasBContainer.style.display = 'none';
            }
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            populateThemes(document.getElementById('debates-theme'), document.getElementById('debates-level'), document.getElementById('debates-lang').value, 'speaking');
        };

        openBtn?.addEventListener('click', openGame);
        levelSelect?.addEventListener('change', () => populateThemes(document.getElementById('debates-theme'), document.getElementById('debates-level'), document.getElementById('debates-lang').value, 'speaking'));
        langSelect?.addEventListener('change', () => populateThemes(document.getElementById('debates-theme'), document.getElementById('debates-level'), document.getElementById('debates-lang').value, 'speaking'));
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('debates-lang').value;
            const level = document.getElementById('debates-level').value;
            const theme = document.getElementById('debates-theme').value;

            pool = window.speakingData && window.speakingData[lang]?.debates || [];
            pool = pool.filter(d => isThemeMatch(d.theme, theme));

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(d => {
                    const itemIdx = levels.indexOf(d.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(modal.querySelector('.game-setup'), t('alert_no_arena_topics'), 'error');
                return;
            }

            const seed = setupArea.querySelector(".game-seed")?.value;
            if (seed) window.gameUtils.seededShuffle(pool, parseInt(seed));
            else pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', () => {
            if (window.gameUtils.addGamePoints) window.gameUtils.addGamePoints(5);
            showNext();
        });

        handleShare('share-debates-btn', {
            game: 'battle_of_wits',
            lang: () => document.getElementById('debates-lang').value,
            level: () => document.getElementById('debates-level').value
        });

        return { open: openGame, start: startGame };
    };

    // --- Opinion Arena Logic ---
    const initOpinionArena = () => {
        const modal = document.getElementById('opinion-arena-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-opinion-arena-btn');
        const closeBtn = document.getElementById('close-opinion-btn');
        const startBtn = document.getElementById('start-opinion-btn');
        const nextBtn = document.getElementById('next-opinion-btn');
        const soloToggle = document.getElementById('opinion-arena-solo-mode');

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const statementDisplay = document.getElementById('opinion-statement-display');

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                stopTimer();
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const item = pool.pop();
            statementDisplay.textContent = item.text;

            // Improvements: buildGroupReveal
            document.getElementById('oa-group-reveal').innerHTML = OpinionArenaGame.buildGroupReveal();
            document.getElementById('oa-vocab-support').innerHTML = ''; // Hide until end

            stopTimer();
            const duration = parseInt(document.getElementById('opinion-timer-duration')?.value || '120');
            const lang = document.getElementById('opinion-lang').value;
            const isSolo = soloToggle ? soloToggle.checked : false;

            startTimer('opinion-timer', duration, () => {
                statementDisplay.textContent += ` (${t('time_up')})`;
                // Improvements: buildVocabSupport
                document.getElementById('oa-vocab-support').innerHTML = OpinionArenaGame.buildVocabSupport(lang);

                if (isSolo) {
                    const robotOpinion = Math.random() > 0.5 ? "agree" : "disagree";
                    setTimeout(() => {
                        oaVote(robotOpinion);
                        showGameMessage(gameArea, robotOpinion === "agree" ? t('oa_robot_agree') : t('oa_robot_disagree'));
                    }, 1000);
                }
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            populateThemes(document.getElementById('opinion-theme'), document.getElementById('opinion-level'), document.getElementById('opinion-lang').value, 'speaking');
        };

        openBtn?.addEventListener('click', openGame);
        document.getElementById('opinion-level')?.addEventListener('change', () => populateThemes(document.getElementById('opinion-theme'), document.getElementById('opinion-level'), document.getElementById('opinion-lang').value, 'speaking'));
        document.getElementById('opinion-lang')?.addEventListener('change', () => populateThemes(document.getElementById('opinion-theme'), document.getElementById('opinion-level'), document.getElementById('opinion-lang').value, 'speaking'));
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('opinion-lang').value;
            const level = document.getElementById('opinion-level').value;
            const theme = document.getElementById('opinion-theme').value;

            pool = window.speakingData && window.speakingData[lang]?.opinionArena || [];
            pool = pool.filter(d => isThemeMatch(d.theme, theme));

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(d => {
                    const itemIdx = levels.indexOf(d.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(modal.querySelector('.game-setup'), t('alert_no_arena_topics'), 'error');
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', () => {
            if (window.gameUtils.addGamePoints) window.gameUtils.addGamePoints(5);
            showNext();
        });

        handleShare('share-opinion-btn', {
            game: 'opinion_arena',
            lang: () => document.getElementById('opinion-lang').value,
            level: () => document.getElementById('opinion-level').value
        });

        return { open: openGame, start: startGame };
    };

    // --- Critic's Corner Logic ---
    const initCriticsCorner = () => {
        const modal = document.getElementById('critics-corner-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-critics-corner-btn');
        const closeBtn = document.getElementById('close-critics-btn');
        const startBtn = document.getElementById('start-critics-btn');
        const nextBtn = document.getElementById('next-critics-btn');
        const soloToggle = document.getElementById('critics-corner-solo-mode');

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const quoteDisplay = document.getElementById('critics-quote-display');
        const authorDisplay = document.getElementById('critics-author-display');

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                stopTimer();
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const item = pool.pop();
            quoteDisplay.textContent = `"${item.text}"`;
            authorDisplay.textContent = item.author ? `- ${item.author}` : "";

            stopTimer();
            const duration = parseInt(document.getElementById('critics-timer-duration')?.value || '120');
            const lang = document.getElementById('critics-lang').value;
            const isSolo = soloToggle ? soloToggle.checked : false;

            startTimer('critics-timer', duration, () => {
                quoteDisplay.textContent += ` (${t('time_up')})`;
                if (isSolo) {
                    setTimeout(() => {
                        const analysis = CriticsCornerGame.getAnalysis(lang);
                        showGameMessage(gameArea, t('cc_robot_feedback').replace('{0}', analysis));
                    }, 1500);
                }
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            populateThemes(document.getElementById('critics-theme'), document.getElementById('critics-level'), document.getElementById('critics-lang').value, 'speaking');
        };

        openBtn?.addEventListener('click', openGame);
        document.getElementById('critics-level')?.addEventListener('change', () => populateThemes(document.getElementById('critics-theme'), document.getElementById('critics-level'), document.getElementById('critics-lang').value, 'speaking'));
        document.getElementById('critics-lang')?.addEventListener('change', () => populateThemes(document.getElementById('critics-theme'), document.getElementById('critics-level'), document.getElementById('critics-lang').value, 'speaking'));
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('critics-lang').value;
            const level = document.getElementById('critics-level').value;
            const theme = document.getElementById('critics-theme').value;

            pool = window.speakingData && window.speakingData[lang]?.criticsCorner || [];
            pool = pool.filter(d => isThemeMatch(d.theme, theme));

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(d => {
                    const itemIdx = levels.indexOf(d.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(modal.querySelector('.game-setup'), t('alert_no_corner_quotes'), 'error');
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', () => {
            if (window.gameUtils.addGamePoints) window.gameUtils.addGamePoints(5);
            showNext();
        });

        handleShare('share-critics-btn', {
            game: 'critics_corner',
            lang: () => document.getElementById('critics-lang').value,
            level: () => document.getElementById('critics-level').value
        });

        return { open: openGame, start: startGame };
    };

    // --- Fluency Flow Logic ---
    const initTalkTalk = () => {
        const modal = document.getElementById('talk-talk-modal');
        if (!modal) return;

        const openBtn = document.getElementById('open-talk-talk-btn');
        const closeBtn = document.getElementById('close-talk-btn');
        const startBtn = document.getElementById('start-talk-btn');
        const nextBtn = document.getElementById('next-talk-btn');
        const soloToggle = document.getElementById('talk-talk-solo-mode');

        const setupArea = modal.querySelector('.game-setup');
        const gameArea = modal.querySelector('.game-play');
        const topicDisplay = document.getElementById('talk-topic-display');

        let pool = [];

        const showNext = () => {
            if (pool.length === 0) {
                stopTimer();
                gameArea.style.display = 'none';
                setupArea.style.display = 'block';
                return;
            }
            const item = pool.pop();
            topicDisplay.textContent = item.topic;

            // Improvements: FluentyFlowGame.getPrompts
            const currentLevel = document.getElementById('talk-level').value;
            const prompts = FluentyFlowGame.getPrompts(item, currentLevel);
            const promptsHtml = `
                <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:8px">
                    ${prompts.map(p =>
                    `<span style="background:#e8f0e9;color:#4a6b50;border-radius:999px;
                        padding:4px 12px;font-size:.78rem;font-weight:700">${p}</span>`
                    ).join('')}
                </div>
            `;
            document.getElementById('ff-prompts').innerHTML = promptsHtml;
            document.getElementById('ff-assessment-area').innerHTML = '';

            stopTimer();
            const duration = parseInt(document.getElementById('talk-timer-duration')?.value || '180');
            const isSolo = soloToggle ? soloToggle.checked : false;

            startTimer('talk-timer', duration, () => {
                topicDisplay.textContent += ` (${t('time_up')})`;
                // Improvements: buildSelfAssessment
                document.getElementById('ff-assessment-area').innerHTML = FluentyFlowGame.buildSelfAssessment(item);
                if (isSolo) {
                    setTimeout(() => {
                        showGameMessage(gameArea, t('ff_robot_feedback'));
                    }, 2000);
                }
            });
        };

        const openGame = () => {
            modal.style.display = 'flex';
            setupArea.style.display = 'block';
            gameArea.style.display = 'none';
            populateThemes(document.getElementById('talk-theme'), document.getElementById('talk-level'), document.getElementById('talk-lang').value, 'speaking');
        };

        openBtn?.addEventListener('click', openGame);
        document.getElementById('talk-level')?.addEventListener('change', () => populateThemes(document.getElementById('talk-theme'), document.getElementById('talk-level'), document.getElementById('talk-lang').value, 'speaking'));
        document.getElementById('talk-lang')?.addEventListener('change', () => populateThemes(document.getElementById('talk-theme'), document.getElementById('talk-level'), document.getElementById('talk-lang').value, 'speaking'));
        closeBtn?.addEventListener('click', () => {
            modal.style.display = 'none';
            stopTimer();
        });

        const startGame = () => {
            const lang = document.getElementById('talk-lang').value;
            const level = document.getElementById('talk-level').value;
            const theme = document.getElementById('talk-theme').value;

            pool = window.speakingData && window.speakingData[lang]?.talkThatTalk || [];
            pool = pool.filter(d => isThemeMatch(d.theme, theme));

            if (level !== 'all') {
                const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
                const targetIdx = levels.indexOf(level);
                pool = pool.filter(d => {
                    const itemIdx = levels.indexOf(d.level || 'starter');
                    return itemIdx !== -1 && itemIdx <= targetIdx;
                });
            }

            if (pool.length === 0) {
                showGameMessage(modal.querySelector('.game-setup'), t('alert_no_flow_topics'), 'error');
                return;
            }

            pool.sort(() => Math.random() - 0.5);
            setupArea.style.display = 'none';
            gameArea.style.display = 'block';
            showNext();
        };

        startBtn?.addEventListener('click', startGame);
        nextBtn?.addEventListener('click', () => {
            if (window.gameUtils.addGamePoints) window.gameUtils.addGamePoints(5);
            showNext();
        });

        handleShare('share-talk-talk-btn', {
            game: 'fluency_flow',
            lang: () => document.getElementById('talk-lang').value,
            level: () => document.getElementById('talk-level').value
        });

        return { open: openGame, start: startGame };
    };

    window.debatesGame = initDebates();
    window.opinionArenaGame = initOpinionArena();
    window.criticsCornerGame = initCriticsCorner();
    window.talkTalkGame = initTalkTalk();
});
