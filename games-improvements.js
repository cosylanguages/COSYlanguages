/**
 * COSYlanguages — Games Improvements & New Games
 * This file contains the logic for the specification provided for Jules AI.
 */

(function() {
    const { t, speak, playGameSound, createConfetti, isThemeMatch } = window.gameUtils;

    // Helper to get vocabulary pool
    window.getVocabPool = function(lang, level, theme) {
        const allVocab = window.vocabularyData[lang] || [];
        const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];
        const targetIdx = levels.indexOf(level);

        return allVocab.filter(item => {
            const levelMatch = level === 'all' || (levels.indexOf(item.level || 'starter') <= targetIdx);
            return levelMatch && isThemeMatch(item.theme, theme);
        });
    };

    // 1. LAST LETTER
    window.LastLetterGame = {
        usedWords: new Set(),

        init(lang, level, theme) {
            this.usedWords.clear();
        },

        validate(playerInput, requiredLetter, pool) {
            const input = playerInput.trim().toLowerCase();
            if (!input) return { ok: false, message: t('last_letter_empty') || "Please type a word!" };

            if (requiredLetter && input[0] !== requiredLetter.toLowerCase()) {
                return { ok: false, message: (t('last_letter_wrong_letter') || "Must start with ") + "'" + requiredLetter.toUpperCase() + "'" };
            }

            if (this.usedWords.has(input)) {
                return { ok: false, message: t('last_letter_used') || "Already used!" };
            }

            const item = pool.find(v => v.word.toLowerCase() === input);
            if (!item) {
                return { ok: false, message: t('last_letter_not_in_list') || "Word not in our list!" };
            }

            this.usedWords.add(input);
            return { ok: true, item: item };
        },

        computerTurn(nextLetter, pool) {
            const possible = pool.filter(v =>
                v.word.toLowerCase().startsWith(nextLetter.toLowerCase()) &&
                !this.usedWords.has(v.word.toLowerCase())
            );

            if (possible.length === 0) return null;

            const picked = possible[Math.floor(Math.random() * possible.length)];
            this.usedWords.add(picked.word.toLowerCase());
            return picked;
        }
    };

    // Helper for Last Letter word card
    window.lastLetterWordCard = function(item) {
        return `
            <div class="ll-card glass" style="padding:1rem; border-radius:15px; text-align:center;">
                <div style="font-size:3rem">${item.emoji || '📝'}</div>
                <div style="font-size:1.5rem; font-weight:800; color:var(--sage-dark)">${item.word}</div>
                ${item.definitions ? `<div style="font-size:0.9rem; margin-top:0.5rem; color:var(--muted)">${item.definitions[0].text}</div>` : ''}
            </div>
        `;
    };

    // 2. ACTION HERO
    window.ActionHeroGame = {
        roundResults: [],

        buildWordDisplay(currentItem, pool, currentLevel) {
            const isIntermediatePlus = ['intermediate', 'upper-intermediate', 'advanced', 'proficiency'].includes(currentLevel);
            let tabooHtml = '';

            if (isIntermediatePlus) {
                // Find words in the same theme as "taboo" words
                const tabooWords = pool
                    .filter(v => v.theme === currentItem.theme && v.word !== currentItem.word)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map(v => v.word);

                if (tabooWords.length > 0) {
                    tabooHtml = `
                        <div style="margin-top:1rem; padding-top:1rem; border-top:1px solid var(--border)">
                            <div style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:var(--accent-color); font-weight:800; margin-bottom:0.5rem">Taboo Words:</div>
                            <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center">
                                ${tabooWords.map(w => `<span style="background:var(--sage-pale); color:var(--sage-dark); padding:2px 10px; border-radius:999px; font-size:0.85rem; font-weight:700">${w}</span>`).join('')}
                            </div>
                        </div>
                    `;
                }
            }

            return `
                <div class="ah-display-inner">
                    <div style="font-size:5rem">${currentItem.emoji || '🎭'}</div>
                    <div style="font-size:2.5rem; font-weight:900; color:var(--sage-dark)">${currentItem.word}</div>
                    ${tabooHtml}
                </div>
            `;
        },

        record(currentItem, isCorrect) {
            this.roundResults.push({ word: currentItem.word, emoji: currentItem.emoji, isCorrect });
        },

        buildSummary(timerDuration) {
            const correct = this.roundResults.filter(r => r.isCorrect).length;
            const total = this.roundResults.length;

            return `
                <div class="ah-summary glass" style="padding:1.5rem; border-radius:18px; text-align:center">
                    <h3 style="font-family:'Lora',serif; color:var(--sage-deep); margin-bottom:1rem">Round Summary 🏁</h3>
                    <div style="font-size:2rem; font-weight:900; color:var(--sage)">${correct} / ${total}</div>
                    <p style="font-size:0.9rem; color:var(--muted); margin-bottom:1.5rem">Words in ${timerDuration} seconds</p>
                    <div style="text-align:left; max-height:200px; overflow-y:auto; padding-right:5px">
                        ${this.roundResults.map(r => `
                            <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border)">
                                <span>${r.emoji || '•'} <strong>${r.word}</strong></span>
                                <span>${r.isCorrect ? '✅' : '❌'}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    };

    // 3. FLUENCY FLOW
    window.FluentyFlowGame = {
        getPrompts(currentTopic, currentLevel) {
            // Default generic prompts if none found
            const genericPrompts = ["Why?", "How?", "Where?", "When?", "Who?"];

            // In a real app, these would come from data. For now, we generate/use topic data.
            // Let's see if currentTopic has ideas
            if (currentTopic.ideas && currentTopic.ideas.length > 0) return currentTopic.ideas;

            // Level based generic prompts
            if (currentLevel === 'starter' || currentLevel === 'elementary') {
                return ["I like...", "I don't like...", "Because...", "And...", "But..."];
            }
            return ["In my opinion...", "Furthermore...", "On the other hand...", "As a result...", "I believe that..."];
        },

        buildSelfAssessment(currentTopic) {
            return `
                <div class="ff-assessment glass" style="margin-top:1.5rem; padding:1.2rem; border-radius:15px; background:var(--honey-pale); border:1px solid var(--honey)">
                    <h4 style="color:var(--honey-dark); margin-bottom:0.8rem">How did you do? 🧐</h4>
                    <p style="font-size:0.85rem; margin-bottom:1rem">Be honest with yourself about your flow on: <strong>${currentTopic.topic}</strong></p>
                    <div style="display:flex; gap:8px; justify-content:center">
                        <button onclick="this.parentElement.innerHTML='<p>Great! Keep practicing! 🌟</p>'" class="cta-button secondary" style="font-size:0.75rem">Struggled 😕</button>
                        <button onclick="this.parentElement.innerHTML='<p>Well done! You are improving! 🚀</p>'" class="cta-button secondary" style="font-size:0.75rem">Okay 😐</button>
                        <button onclick="this.parentElement.innerHTML='<p>Excellent! Master of fluency! 🏆</p>'" class="cta-button secondary" style="font-size:0.75rem">Fluent! 😎</button>
                    </div>
                </div>
            `;
        }
    };

    // 4. OPINION ARENA
    window.OpinionArenaGame = {
        buildGroupReveal() {
            return `
                <div style="display:flex; gap:10px; justify-content:center; margin-bottom:15px">
                    <button onclick="this.style.background='#4CAF50'; this.style.color='white'" class="cta-button secondary" style="flex:1; font-size:.8rem">Reveal Who Agrees ✅</button>
                    <button onclick="this.style.background='#f44336'; this.style.color='white'" class="cta-button secondary" style="flex:1; font-size:.8rem">Reveal Who Disagrees ❌</button>
                </div>
            `;
        },

        buildVocabSupport(currentLang) {
            const phrases = {
                en: ["I believe that...", "In my view...", "I disagree because...", "That's a good point, but...", "I'm not sure if..."],
                fr: ["Je pense que...", "À mon avis...", "Je ne suis pas d'accord car...", "C'est un bon point, mais...", "Je ne suis pas sûr que..."],
                it: ["Credo che...", "Secondo me...", "Non sono d'accordo perché...", "È un buon punto, ma...", "Non sono sicuro che..."],
                ru: ["Я думаю, что...", "По-моему...", "Я не согласен, потому что...", "Это хороший аргумент, но...", "Я не уверен, что..."],
                el: ["Πιστεύω ότι...", "Κατά τη γνώμη μου...", "Διαφωνώ επειδή...", "Αυτό είναι ένα καλό σημείο, αλλά...", "Δεν είμαι σίγουρος αν..."]
            };
            const list = phrases[currentLang] || phrases.en;

            return `
                <div class="oa-vocab glass" style="margin-top:1.5rem; padding:1rem; border-radius:15px; text-align:left; background:var(--sage-mist)">
                    <h4 style="font-size:0.85rem; color:var(--sage-dark); margin-bottom:0.6rem">Useful Phrases 🗣️</h4>
                    <div style="display:flex; flex-direction:column; gap:4px">
                        ${list.map(p => `<div style="font-size:0.8rem; font-weight:700; color:var(--sage-deep)">• ${p}</div>`).join('')}
                    </div>
                </div>
            `;
        }
    };

    // 5. LUCKY NUMBERS
    window.LuckyNumbersGame = {
        autoCallerInterval: null,

        speakCalled(calledItem, currentLang) {
            speak(calledItem.toString(), currentLang);
        },

        startAutoCaller(allItems, currentLang, interval) {
            this.stopAutoCaller();
            const pool = [...allItems];

            const call = () => {
                if (pool.length === 0) {
                    this.stopAutoCaller();
                    return;
                }
                const item = pool.pop();
                // We need a way to trigger the UI update in bingo.js
                // For now, let's assume we can trigger a click on "Call Next" or similar
                const btn = document.getElementById('bingo-call-next-btn');
                if (btn) btn.click();
            };

            this.autoCallerInterval = setInterval(call, interval);
        },

        stopAutoCaller() {
            if (this.autoCallerInterval) {
                clearInterval(this.autoCallerInterval);
                this.autoCallerInterval = null;
            }
        },

        celebrate() {
            createConfetti();
            playGameSound('success');
        }
    };

    // 6. CRITIC'S CORNER
    window.currentCCMode = 'analyse';
    window.ccSetMode = function(mode) {
        window.currentCCMode = mode;
        document.querySelectorAll('.gm-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
            if (btn.classList.contains('active')) {
                btn.classList.remove('secondary');
                btn.style.background = 'var(--sage)';
                btn.style.color = 'white';
            } else {
                btn.classList.add('secondary');
                btn.style.background = '';
                btn.style.color = '';
            }
        });
        // Trigger refresh if game is running
        if (window.criticsCornerGame && document.getElementById('critics-corner-modal').style.display !== 'none') {
            // This is a bit tricky as we don't have the current item easily.
            // But usually the user sets the mode before starting or wants to switch mid-game.
        }
    };

    window.CriticsCornerGame = {
        buildGuessAuthor(currentQuoteItem) {
            const options = currentQuoteItem.options || [currentQuoteItem.author, "Unknown", "Someone Else", "A Philosopher"];
            const shuffled = [...options].sort(() => Math.random() - 0.5);

            return `
                <div class="cc-guess glass" style="padding:1.5rem; border-radius:18px">
                    <div style="font-size:1.4rem; font-weight:700; color:var(--sage-dark); margin-bottom:2rem; line-height:1.4">"${currentQuoteItem.text}"</div>
                    <div class="choices-grid" style="grid-template-columns:1fr 1fr; gap:10px">
                        ${shuffled.map(opt => `
                            <button onclick="CriticsCornerGame.checkGuess(this, '${opt}', '${currentQuoteItem.author}')" class="choice-btn pill-input" style="font-size:0.9rem">${opt}</button>
                        `).join('')}
                    </div>
                    <div id="cc-guess-feedback" style="margin-top:1rem; font-weight:800; min-height:1.5rem"></div>
                </div>
            `;
        },

        checkGuess(btn, picked, correct) {
            const feedback = document.getElementById('cc-guess-feedback');
            if (picked === correct) {
                btn.style.background = '#4CAF50';
                btn.style.color = 'white';
                feedback.textContent = "Correct! 🌟";
                feedback.style.color = '#4CAF50';
                playGameSound('success');
            } else {
                btn.style.background = '#f44336';
                btn.style.color = 'white';
                feedback.textContent = "Not quite! Try again.";
                feedback.style.color = '#f44336';
                playGameSound('error');
            }
        }
    };

    // 7. STORY CHAIN
    window.storyChainStart = function() {
        const lang  = document.getElementById('sc-lang').value;
        const level = document.getElementById('sc-level').value;
        const theme = document.getElementById('sc-theme').value;
        const item  = StoryChainGame.init(lang, level, theme);

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
        if (nextItem) {
            document.getElementById('sc-word-reveal').innerHTML = StoryChainGame.buildWordCard(nextItem);
        } else {
            document.getElementById('sc-word-reveal').innerHTML = '<p>No more words! Continue the story or reveal.</p>';
        }
    };

    window.storyChainFinish = function() {
        document.getElementById('sc-input-area').style.display = 'none';
        document.getElementById('sc-word-reveal').style.display = 'none';
        document.getElementById('sc-finish-btn').style.display = 'none';
        document.getElementById('sc-final-reveal').innerHTML = StoryChainGame.buildFinalReveal();
        document.getElementById('sc-final-reveal').style.display = 'block';
    };

    window.StoryChainGame = {
        story: [],
        currentWord: null,
        pool: [],

        init(lang, level, theme) {
            this.story = [];
            this.pool = window.getVocabPool(lang, level, theme).sort(() => Math.random() - 0.5);
            this.currentWord = this.pool.pop();
            return this.currentWord;
        },

        buildWordCard(item) {
            return `
                <div class="sc-word-card glass" style="padding:1rem; border-radius:15px; background:var(--sage-mist); margin-bottom:1rem">
                    <div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; font-weight:800">Your Secret Word:</div>
                    <div style="font-size:1.8rem; font-weight:900; color:var(--sage-deep)">${item.word} ${item.emoji || ''}</div>
                    <div style="font-size:0.8rem; color:var(--sage-dark)">Use this word in your sentence!</div>
                </div>
            `;
        },

        buildStoryDisplay() {
            if (this.story.length === 0) return '<p style="color:var(--muted); font-style:italic">The story begins here...</p>';
            return this.story.map(s => `<span>${s.sentence} </span>`).join('');
        },

        addSentence(sentence, player) {
            this.story.push({ sentence, player, word: this.currentWord.word });
            this.currentWord = this.pool.pop();
            return this.currentWord;
        },

        buildFinalReveal() {
            return `
                <div class="sc-final glass" style="padding:1.5rem; border-radius:18px; text-align:left">
                    <h3 style="margin-bottom:1rem">The Completed Story 📖</h3>
                    <div style="line-height:1.6; margin-bottom:2rem; font-size:1.1rem">${this.story.map(s => s.sentence).join(' ')}</div>
                    <h4 style="font-size:0.9rem; color:var(--muted); margin-bottom:0.8rem">Hidden Words:</h4>
                    <div style="display:flex; flex-direction:column; gap:8px">
                        ${this.story.map((s, i) => `
                            <div style="font-size:0.85rem">Sentence ${i+1}: <strong>${s.word}</strong></div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    };

    // 8. HOT SEAT
    window.hsDuration = 60;
    window.hsSetDuration = function(sec) {
        window.hsDuration = sec;
        document.querySelectorAll('.hs-dur-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.sec) === sec);
        });
    };

    window.hotSeatStart = function() {
        const lang  = document.getElementById('hs-lang').value;
        const level = document.getElementById('hs-level').value;
        const theme = document.getElementById('hs-theme').value;

        HotSeatGame.currentQ = 0;
        HotSeatGame.score    = 0;
        HotSeatGame.DURATION = window.hsDuration;
        HotSeatGame.questions = HotSeatGame.generateQuestions(
            getVocabPool(lang, level, theme), 10
        );

        if (HotSeatGame.questions.length === 0) {
            alert("No vocabulary found for this selection!");
            return;
        }

        document.getElementById('hs-setup').style.display = 'none';
        document.getElementById('hot-seat-area').innerHTML = HotSeatGame.buildGameUI();

        // countdown
        let t = HotSeatGame.DURATION;
        const interval = setInterval(() => {
            const el = document.getElementById('hs-timer');
            if (!el || HotSeatGame.currentQ >= HotSeatGame.questions.length) {
                clearInterval(interval); return;
            }
            el.textContent = --t;
            if (t <= 0) {
                clearInterval(interval);
                document.getElementById('hot-seat-area').innerHTML = HotSeatGame.buildSummary();
            }
            if (t <= 10) el.style.color = '#a32d2d'; // red when time is low
        }, 1000);
    };

    window.HotSeatGame = {
        DURATION: 60,
        questions: [],
        currentQ: 0,
        score: 0,

        generateQuestions(pool, count) {
            const shuffled = [...pool].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, count).map(item => {
                // Simplified question: What is this? or Translate
                return {
                    question: item.emoji || item.word[0].toUpperCase(),
                    answer: item.word
                };
            });
        },

        buildGameUI() {
            const q = this.questions[this.currentQ];
            return `
                <div id="hs-timer" style="font-size:3rem; font-weight:900; color:var(--sage); margin-bottom:1.5rem">${this.DURATION}</div>
                <div class="hs-card glass" style="padding:2.5rem; border-radius:20px; margin-bottom:2rem; min-height:150px; display:flex; align-items:center; justify-content:center">
                    <div style="font-size:6rem">${q.question}</div>
                </div>
                <div style="display:flex; gap:10px; justify-content:center">
                    <button onclick="HotSeatGame.answer(true)" class="cta-button primary" style="background:#4CAF50">Correct ✅</button>
                    <button onclick="HotSeatGame.answer(false)" class="cta-button primary" style="background:#f44336">Incorrect ❌</button>
                </div>
                <div style="margin-top:1.5rem; font-size:0.85rem; color:var(--muted)">Question ${this.currentQ + 1} of ${this.questions.length}</div>
            `;
        },

        answer(isCorrect) {
            if (isCorrect) {
                this.score++;
                playGameSound('success');
            } else {
                playGameSound('error');
            }
            this.currentQ++;
            if (this.currentQ < this.questions.length) {
                document.getElementById('hot-seat-area').innerHTML = this.buildGameUI();
            } else {
                document.getElementById('hot-seat-area').innerHTML = this.buildSummary();
            }
        },

        buildSummary() {
            return `
                <div class="hs-summary glass" style="padding:2rem; border-radius:20px; text-align:center">
                    <h3 style="margin-bottom:1rem">Time's Up! 🔥</h3>
                    <div style="font-size:4rem; font-weight:900; color:var(--sage)">${this.score}</div>
                    <p>Words guessed correctly</p>
                    <button onclick="location.reload()" class="cta-button secondary" style="margin-top:1.5rem">Play Again 🔄</button>
                </div>
            `;
        }
    };

    // Word Linker Explanation
    window.WordLinkerGame = {
        buildExplanation(item, reason) {
            return `
                <div class="wl-explanation glass" style="margin-top:1.5rem; padding:1.2rem; border-radius:15px; background:var(--sage-mist); color:var(--sage-deep); text-align:left">
                    <div style="font-weight:800; margin-bottom:0.5rem">Why? 🧐</div>
                    <div style="font-size:0.95rem">${reason || item.explanation || "This word belongs to a different logical group."}</div>
                </div>
            `;
        }
    };

})();
