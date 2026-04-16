
var currentLesson = {
    language: 'en',
    day: '1',
    words: [],
    currentIndex: 0,
    currentWord: null,
    isCorrect: false,
    scrambleAnswer: "",
    scrambleAnswerWords: [],
    score: 0,
    tfCorrectAnswer: null,
    hintLevel: 0
};

document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    const urlParams = new URLSearchParams(window.location.search);
    currentLesson.language = urlParams.get('lang') || 'en';
    currentLesson.day = urlParams.get('lesson') || '1';

    // UI elements
    const nextBtn = document.getElementById('next-btn');
    const checkOppositeBtn = document.getElementById('check-opposite-btn');
    const trueBtn = document.getElementById('true-btn');
    const falseBtn = document.getElementById('false-btn');
    const hintBtn = document.getElementById('hint-btn');
    const oppositeAnswerInput = document.getElementById('opposite-answer');
    const listenBtn = document.getElementById('listen-btn');
    const clearScrambleBtn = document.getElementById('clear-scramble-btn');
    const finishConversationBtn = document.getElementById('finish-conversation-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    const exitLessonBtn = document.getElementById('exit-lesson-btn');
    const closeDefinitionBtn = document.getElementById('close-definition-btn');
    const wordDisplay = document.getElementById('word-display');
    const questionCard = document.getElementById('question-card');

    if (wordDisplay) {
        wordDisplay.addEventListener('click', showWordDefinition);
    }
    if (questionCard) {
        questionCard.addEventListener('click', (e) => {
            if (e.target.closest('.choice-btn, input, button, #next-btn')) return;
            showWordDefinition();
        });
    }

    if (closeDefinitionBtn) {
        closeDefinitionBtn.addEventListener('click', () => {
            document.getElementById('definition-modal').style.display = 'none';
        });
    }

    const definitionModal = document.getElementById('definition-modal');
    if (definitionModal) {
        definitionModal.addEventListener('click', (e) => {
            if (e.target === definitionModal) {
                definitionModal.style.display = 'none';
            }
        });
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentLesson.isCorrect) {
                currentLesson.currentIndex++;
                showNextWord();
            } else {
                showNextWord();
            }
        });
    }
    if (checkOppositeBtn) checkOppositeBtn.addEventListener('click', checkTypedAnswer);
    if (trueBtn) trueBtn.addEventListener('click', () => checkTrueFalseAnswer(true));
    if (falseBtn) falseBtn.addEventListener('click', () => checkTrueFalseAnswer(false));
    if (hintBtn) hintBtn.addEventListener('click', showHint);
    if (listenBtn) listenBtn.addEventListener('click', speakWord);
    if (clearScrambleBtn) clearScrambleBtn.addEventListener('click', clearScramble);
    if (finishConversationBtn) finishConversationBtn.addEventListener('click', () => showFeedback(true));
    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            window.location.href = 'days.html';
        });
    }
    if (exitLessonBtn) {
        exitLessonBtn.addEventListener('click', () => {
            window.gameUtils.showGameConfirm("Exit lesson and return to student area?", () => {
                window.location.href = 'days.html';
            });
        });
    }

    // Global Enter Key Handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const nextBtn = document.getElementById('next-btn');
            const checkBtn = document.getElementById('check-opposite-btn');
            const summaryModal = document.getElementById('summary-modal');

            // Don't trigger if summary is open
            if (summaryModal && summaryModal.style.display === 'flex') {
                return;
            }

            if (nextBtn && nextBtn.style.display === 'block') {
                nextBtn.click();
                e.preventDefault();
            } else if (checkBtn && checkBtn.style.display !== 'none' && !checkBtn.disabled) {
                checkBtn.click();
                e.preventDefault();
            }
        }
    });

    startLesson();
});

function startLesson() {
    const lang = currentLesson.language;
    const day = currentLesson.day;

    const { showGameMessage } = window.gameUtils || {};

    if (window.lessonsData && window.lessonsData[lang] && window.lessonsData[lang][day]) {
        let rawItems = [...window.lessonsData[lang][day].words];

        // Inject numbers if any items have a number theme but no words (centralized numbers support)
        const langNumbers = window.numbersData && window.numbersData[lang];
        if (langNumbers) {
            rawItems = rawItems.map(item => {
                if (item.theme && item.theme.startsWith('numbers_') && !item.word) {
                    const val = item.definitions && item.definitions[0] && item.definitions[0].text;
                    if (val && langNumbers[val]) {
                        return { ...item, word: langNumbers[val] };
                    }
                }
                return item;
            });
        }

        currentLesson.words = rawItems.map(item => {
            let wordCopy = { ...item, lessonTitle: window.lessonsData[lang][day].title };

            // Determine task type based on available metadata
            let possibleTypes = ['type-mc', 'type-ls', 'type-sc', 'type-tf'];
            if (wordCopy.opposite) possibleTypes.push('type-op');
            if (wordCopy.clozeText) possibleTypes.push('type-cl');
            if (wordCopy.article || wordCopy.gender) possibleTypes.push('type-ga');
            if (wordCopy.numberPlural) possibleTypes.push('type-np');
            if (wordCopy.definitions) possibleTypes.push('type-ma');
            if (wordCopy.gender || wordCopy.classification) possibleTypes.push('type-si');
            if (wordCopy.image) possibleTypes.push('type-lp');
            if (wordCopy.clozeText) possibleTypes.push('type-bb');

            if (wordCopy.type === 'conversation' || wordCopy.category === 'conversation') {
                possibleTypes = ['type-cv'];
            }

            const isSentence = wordCopy.word && wordCopy.word.includes(' ');
            if (isSentence) {
                // If it's a sentence, prefer word_scramble or number_plural
                if (wordCopy.numberPlural) {
                    wordCopy.type = 'type-np';
                } else {
                    wordCopy.type = 'type-ws';
                }
            } else {
                // Pick a random possible type
                wordCopy.type = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
            }

            // Specific overrides for curriculum if needed
            if (wordCopy.category === 'conversation') wordCopy.type = 'type-cv';

            return wordCopy;
        });

        currentLesson.words.sort(() => Math.random() - 0.5);
        currentLesson.currentIndex = 0;
        currentLesson.score = 0;

        if (typeof setLanguage === 'function') {
            setLanguage(lang);
        }

    if (window.GameSessionManager) {
        GameSessionManager.recordSession('Lesson ' + day, '🎓');
    }

        showNextWord();
    } else {
        const lang = currentLesson.language;
        const msg = `<h3>Coming Soon! 🚧</h3><p>Interactive practice for Day ${day} in ${lang.toUpperCase()} is being prepared.</p><p>Check back soon or message your teacher!</p>`;

        // Use a more stylized full-screen message
        const container = document.getElementById('practice-container');
        if (container) {
            container.innerHTML = `
                <div class="empty" style="padding: 4rem 2rem; background: #fff; border-radius: 20px; border: 1.5px solid var(--border); box-shadow: var(--shadow-sm);">
                    <div style="font-size: 4rem; margin-bottom: 1.5rem;">📚</div>
                    ${msg}
                    <button class="cta-button primary" onclick="window.location.href='days.html'" style="margin-top: 2rem;">Back to My Lessons 🏠</button>
                </div>
            `;
        } else {
            alert("Lesson data not found!");
            window.location.href = 'days.html';
        }
    }
}

function showNextWord() {
    if (currentLesson.currentIndex >= currentLesson.words.length) {
        showSummary();
        return;
    }

    currentLesson.hintLevel = 0; // Reset hint level for new word
    currentLesson.currentWord = currentLesson.words[currentLesson.currentIndex];
    const wordObj = currentLesson.currentWord;
    currentLesson.isCorrect = false;

    updateProgress();

    // Reset UI
    document.getElementById('feedback-message').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('opposite-answer').value = '';
    document.getElementById('opposite-input-container').style.display = 'none';
    document.getElementById('action-buttons-container').style.display = 'none';
    document.getElementById('tf-buttons-container').style.display = 'none';
    document.getElementById('choices-grid').style.display = 'none';
    document.getElementById('scramble-container').style.display = 'none';
    document.getElementById('conversation-container').style.display = 'none';
    document.getElementById('matching-container').style.display = 'none';
    document.getElementById('sorting-container').style.display = 'none';
    document.getElementById('labeling-container').style.display = 'none';
    document.getElementById('word-bank-container').style.display = 'none';
    document.getElementById('hint-btn').style.display = (wordObj.type === 'type-tf' || wordObj.type === 'type-cv' ? 'none' : 'inline-block');
    document.getElementById('lesson-info').textContent = wordObj.lessonTitle;

    // Show "What to do" instruction
    const wtdEl = document.getElementById('task-what-to-do');
    if (wtdEl) {
        const lang = currentLesson.language;
        const typeKey = wordObj.form === 'verb_form' ? 'vf' :
                        wordObj.form === 'verb' ? 'gv' :
                        wordObj.form === 'pronoun' ? 'gp' :
                        wordObj.type === 'type-ws' ? 'ws' :
                        wordObj.type === 'type-mc' ? 'mc' :
                        wordObj.type === 'type-ls' ? 'ls' :
                        wordObj.type === 'type-sc' ? 'sc' :
                        wordObj.type === 'type-op' ? 'op' :
                        wordObj.type === 'type-cl' ? 'cl' :
                        wordObj.type === 'type-tf' ? 'tf' :
                        wordObj.type === 'type-ga' ? 'ga' :
                        wordObj.type === 'type-np' ? 'np' : '';

        const wtdKey = `wtd_${typeKey}`;
        if (translations[lang] && translations[lang][wtdKey]) {
            wtdEl.textContent = translations[lang][wtdKey];
            wtdEl.style.display = 'inline-block';
            wtdEl.setAttribute('data-translate-key', wtdKey);
        } else {
            wtdEl.style.display = 'none';
        }
    }

    // Task Example
    const exampleEl = document.getElementById('task-example');
    if (exampleEl) {
        const lang = currentLesson.language;
        let typeKey = "";
        if (wordObj.form === 'verb_form') {
            typeKey = 'vf';
        } else if (wordObj.form === 'verb') {
            typeKey = 'gv';
        } else if (wordObj.form === 'pronoun') {
            typeKey = 'gp';
        } else if (wordObj.type === 'type-cv') {
            typeKey = 'cv';
        } else {
            typeKey = wordObj.type === 'type-ws' ? 'ws' :
                        wordObj.type === 'type-mc' ? 'mc' :
                        wordObj.type === 'type-ls' ? 'ls' :
                        wordObj.type === 'type-sc' ? 'sc' :
                        wordObj.type === 'type-op' ? 'op' :
                        wordObj.type === 'type-cl' ? 'cl' :
                        wordObj.type === 'type-tf' ? 'tf' :
                        wordObj.type === 'type-ga' ? 'ga' :
                        wordObj.type === 'type-np' ? 'np' : '';
        }
        const exampleKey = `example_${typeKey}`;
        if (translations[lang] && translations[lang][exampleKey]) {
            exampleEl.textContent = translations[lang][exampleKey];
            exampleEl.style.display = 'inline-block';
        } else {
            exampleEl.style.display = 'none';
        }
    }

    // Subtext
    const subtextEl = document.getElementById('subtext-display');
    if (subtextEl) {
        if (wordObj.subtext) {
            subtextEl.textContent = wordObj.subtext;
            subtextEl.style.display = 'block';
        } else {
            subtextEl.style.display = 'none';
        }
    }

    // Render Task
    if (wordObj.type === 'type-mc' || wordObj.type === 'type-ls') {
        const isListen = wordObj.type === 'type-ls';
        document.getElementById('word-display').textContent = isListen ? '???' : ((wordObj.emoji && wordObj.category === 'vocabulary') ? '???' : (wordObj.clozeText || wordObj.word));
        document.getElementById('emoji-display').textContent = isListen ? '👂' : (wordObj.emoji || '💡');
        document.getElementById('task-instruction').setAttribute('data-translate-key', isListen ? 'task_listen_select' : 'task_multiple_choice');
        document.getElementById('choices-grid').style.display = 'grid';
        document.getElementById('action-buttons-container').style.display = 'flex';
        document.getElementById('check-opposite-btn').style.display = 'none';
        renderMultipleChoice();
        if (isListen) setTimeout(speakWord, 500);
    } else if (wordObj.type === 'type-cl' || wordObj.type === 'type-np') {
        document.getElementById('word-display').textContent = wordObj.type === 'type-np' ? wordObj.numberPlural || wordObj.word : wordObj.clozeText || wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', wordObj.type === 'type-np' ? 'task_number_plural' : 'task_cloze');
        document.getElementById('opposite-input-container').style.display = 'flex';
        document.getElementById('action-buttons-container').style.display = 'flex';
        document.getElementById('check-opposite-btn').style.display = 'inline-block';
        document.getElementById('opposite-answer').focus();
    } else if (wordObj.type === 'type-sc' || wordObj.type === 'type-ws') {
        document.getElementById('word-display').textContent = '???';
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', wordObj.type === 'type-ws' ? 'task_word_scramble' : 'task_scramble');
        document.getElementById('scramble-container').style.display = 'block';
        document.getElementById('action-buttons-container').style.display = 'flex';
        document.getElementById('check-opposite-btn').style.display = 'none';
        if (wordObj.type === 'type-ws') renderWordScramble();
        else renderScramble();
    } else if (wordObj.type === 'type-ga') {
        document.getElementById('word-display').textContent = wordObj.baseWord;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_gender_articles');
        document.getElementById('choices-grid').style.display = 'grid';
        document.getElementById('action-buttons-container').style.display = 'flex';
        document.getElementById('check-opposite-btn').style.display = 'none';
        renderGenderArticles();
    } else if (wordObj.type === 'type-tf') {
        document.getElementById('word-display').textContent = wordObj.word;
        const isTrue = Math.random() > 0.5;
        currentLesson.tfCorrectAnswer = isTrue;
        if (isTrue) {
            document.getElementById('emoji-display').textContent = wordObj.emoji;
        } else {
            document.getElementById('emoji-display').textContent = '❓';
        }
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_true_false');
        document.getElementById('tf-buttons-container').style.display = 'flex';
    } else if (wordObj.type === 'type-cv') {
        document.getElementById('word-display').textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💬';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_conversation');
        document.getElementById('conversation-container').style.display = 'block';
    } else if (wordObj.type === 'type-ma') {
        document.getElementById('word-display').style.display = 'none';
        document.getElementById('emoji-display').textContent = '🧩';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_matching');
        document.getElementById('matching-container').style.display = 'block';
        renderMatching();
    } else if (wordObj.type === 'type-si') {
        document.getElementById('word-display').style.display = 'none';
        document.getElementById('emoji-display').textContent = '🗂️';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_sorting');
        document.getElementById('sorting-container').style.display = 'block';
        renderSorting();
    } else if (wordObj.type === 'type-lp') {
        document.getElementById('word-display').style.display = 'none';
        document.getElementById('emoji-display').textContent = '🖼️';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_labeling');
        document.getElementById('labeling-container').style.display = 'block';
        renderLabeling();
    } else if (wordObj.type === 'type-bb') {
        document.getElementById('word-display').style.display = 'none';
        document.getElementById('emoji-display').textContent = '📥';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_word_bank');
        document.getElementById('word-bank-container').style.display = 'block';
        renderWordBank();
    } else {
        // type-op (opposite)
        wordObj.type = 'type-op';
        document.getElementById('word-display').textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji;
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_opposite');
        document.getElementById('opposite-input-container').style.display = 'flex';
        document.getElementById('action-buttons-container').style.display = 'flex';
        document.getElementById('check-opposite-btn').style.display = 'inline-block';
        document.getElementById('opposite-answer').focus();
    }

    if (typeof setLanguage === 'function') setLanguage(currentLesson.language);

    // Add definition hint
    const wordDisplay = document.getElementById('word-display');
    if (wordDisplay) {
        if (wordObj.definitions && wordObj.definitions.length > 0) {
            wordDisplay.classList.add('has-definition');
            wordDisplay.title = (translations[currentLesson.language] && translations[currentLesson.language]['click_for_definition']) || "Click for definition";
        } else {
            wordDisplay.classList.remove('has-definition');
            wordDisplay.removeAttribute('title');
        }
    }
}

function showWordDefinition() {
    const wordObj = currentLesson.currentWord;
    if (!wordObj || !wordObj.definitions || wordObj.definitions.length === 0) return;

    const modal = document.getElementById('definition-modal');
    const content = document.getElementById('definition-content');
    const titleEl = document.getElementById('definition-modal-title');
    const lang = currentLesson.language;
    const t = translations[lang] || translations['en'];

    // Update Modal Title
    titleEl.textContent = (t['definition_modal_title'] || 'Definition');
    titleEl.removeAttribute('data-translate-key');

    content.innerHTML = '';

    // 1. Header (Image + Word + Transcription + Verb Info)
    const header = document.createElement('div');
    header.className = 'definition-header';

    // Image logic
    const imgContainer = document.createElement('div');
    imgContainer.className = 'definition-image-container';
    const img = document.createElement('img');
    img.className = 'definition-image';
    const displayWord = wordObj.word || wordObj.text || wordObj.topic || "";
    // Use wordObj.image if it exists; otherwise use a placeholder
    img.src = wordObj.image || `https://placehold.co/150?text=${encodeURIComponent(displayWord)}`;
    img.alt = displayWord;
    imgContainer.appendChild(img);
    header.appendChild(imgContainer);

    // Word Info
    const wordInfo = document.createElement('div');
    wordInfo.className = 'definition-word-info';

    const wordTitle = document.createElement('h3');
    wordTitle.className = 'word-title-main';
    wordTitle.textContent = displayWord;
    wordInfo.appendChild(wordTitle);

    if (wordObj.transcription) {
        const trans = document.createElement('div');
        trans.className = 'definition-transcription';
        trans.textContent = `[${wordObj.transcription}]`;
        wordInfo.appendChild(trans);
    }

    // Verb Info (Irregular forms + Group)
    if (wordObj.form === 'verb') {
        const verbInfo = document.createElement('div');
        verbInfo.className = 'definition-verb-info';

        if (wordObj.v2 || wordObj.v3) {
            const irreg = document.createElement('span');
            irreg.className = 'irregular-forms';
            let irregText = "";
            if (wordObj.v2) irregText += wordObj.v2;
            if (wordObj.v2 && wordObj.v3) irregText += " / ";
            if (wordObj.v3) irregText += wordObj.v3;
            irreg.textContent = irregText;
            verbInfo.appendChild(irreg);
        }

        if (wordObj.group) {
            const groupBadge = document.createElement('span');
            groupBadge.className = 'verb-group-badge';
            const groupKey = 'verb_group_' + wordObj.group.toLowerCase().replace(/^-/, '').replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/_$/, '');
            groupBadge.textContent = t[groupKey] || wordObj.group;
            verbInfo.appendChild(groupBadge);
        }

        if (verbInfo.children.length > 0) {
            wordInfo.appendChild(verbInfo);
        }
    }
    header.appendChild(wordInfo);
    content.appendChild(header);

    // 2. Definitions
    wordObj.definitions.forEach((def, index) => {
        const defDiv = document.createElement('div');
        defDiv.className = index === 0 ? 'main-definition' : 'sub-definition';

        const textPara = document.createElement('p');
        textPara.className = 'definition-text';
        textPara.textContent = def.text;
        defDiv.appendChild(textPara);

        // 3. Examples (inside definition block)
        if (def.examples && def.examples.length > 0) {
            const exList = document.createElement('ul');
            exList.className = 'examples-list';
            def.examples.forEach(ex => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="example-prefix">e.g.</span> ${ex}`;
                exList.appendChild(li);
            });
            defDiv.appendChild(exList);
        }
        content.appendChild(defDiv);
    });

    // 4. Footer (Collocations, Antonyms, Synonyms)
    if (wordObj.subtext || wordObj.opposite || (wordObj.synonyms && wordObj.synonyms.length > 0)) {
        const footer = document.createElement('div');
        footer.className = 'definition-footer';

        if (wordObj.subtext) {
            const collPara = document.createElement('div');
            collPara.className = 'synonym-antonym-item';
            collPara.innerHTML = `<span class="synonym-symbol">🔗</span>${wordObj.subtext}`;
            footer.appendChild(collPara);
        }

        if (wordObj.opposite) {
            const antPara = document.createElement('div');
            antPara.className = 'synonym-antonym-item';
            antPara.innerHTML = `<span class="antonym-symbol">≠</span>${wordObj.opposite}`;
            footer.appendChild(antPara);
        }

        if (wordObj.synonyms && wordObj.synonyms.length > 0) {
            const synPara = document.createElement('div');
            synPara.className = 'synonym-antonym-item';
            synPara.innerHTML = `<span class="synonym-symbol">=</span>${wordObj.synonyms.join(', ')}`;
            footer.appendChild(synPara);
        }

        content.appendChild(footer);
    }

    modal.style.display = 'flex';
    if (typeof setLanguage === 'function') setLanguage(lang);
}
function checkTypedAnswer() {
    const user = document.getElementById("opposite-answer").value.trim().toLowerCase();

    const wordObj = currentLesson.currentWord;
    const correct = (wordObj.type === 'type-cl' || wordObj.type === 'type-np') ? (wordObj.answer || wordObj.word) : wordObj.opposite;
    const possible = (correct || "").split(' / ').map(a => a.trim().toLowerCase());
    if (possible.includes(user) || user === (correct || "").toLowerCase()) showFeedback(true);
    else showFeedback(false);
}

function checkTrueFalseAnswer(user) {
    if (user === currentLesson.tfCorrectAnswer) showFeedback(true);
    else showFeedback(false);
}

function showFeedback(isCorrect) {
    const msg = document.getElementById('feedback-message');
    msg.className = 'feedback-text ' + (isCorrect ? 'correct' : 'incorrect');

    if (typeof flashAnswer === 'function') {
        flashAnswer(isCorrect);
    }
    msg.setAttribute('data-translate-key', isCorrect ? 'correct' : 'incorrect');
    if (typeof setLanguage === 'function') setLanguage(currentLesson.language);

    if (isCorrect) {
        currentLesson.score += 10;
        document.getElementById('score-count').textContent = currentLesson.score;
        updateTotalScore(10);
        currentLesson.isCorrect = true;
        document.getElementById('next-btn').style.display = 'block';

        document.getElementById('opposite-input-container').style.display = 'none';
        document.getElementById('action-buttons-container').style.display = 'none';
        document.getElementById('tf-buttons-container').style.display = 'none';
        document.getElementById('choices-grid').style.display = 'none';
        document.getElementById('scramble-container').style.display = 'none';
        document.getElementById('conversation-container').style.display = 'none';
        document.getElementById('matching-container').style.display = 'none';
        document.getElementById('sorting-container').style.display = 'none';
        document.getElementById('labeling-container').style.display = 'none';
        document.getElementById('word-bank-container').style.display = 'none';
    }
}

function loadTotalScore() {
    const total = parseInt(localStorage.getItem('cosy_total_points') || 0);
    return total;
}

function updateTotalScore(points) {
    let total = loadTotalScore();
    total += points;
    localStorage.setItem('cosy_total_points', total);
    return total;
}

function updateStreak() {
    const lastDate = localStorage.getItem('last_practice_date');
    const today = new Date().toDateString();

    if (lastDate === today) return;

    let streak = parseInt(localStorage.getItem('practice_streak') || 0);

    if (lastDate) {
        const lastPractice = new Date(lastDate);
        const todayDate = new Date(today);
        const diffTime = Math.abs(todayDate - lastPractice);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            streak++;
        } else {
            streak = 1;
        }
    } else {
        streak = 1;
    }

    localStorage.setItem('practice_streak', streak);
    localStorage.setItem('last_practice_date', today);
}

function updateProgress() {
    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');
    const total = currentLesson.words.length;
    const current = currentLesson.currentIndex;
    const percentage = (current / total) * 100;
    if (fill) fill.style.width = percentage + '%';
    if (text) {
        const lang = currentLesson.language;
        const wordLabel = (translations[lang] && translations[lang]['progress_word']) ? translations[lang]['progress_word'] : 'Word';
        const ofLabel = (translations[lang] && translations[lang]['progress_of']) ? translations[lang]['progress_of'] : 'of';
        text.textContent = `${wordLabel} ${current + 1} ${ofLabel} ${total}`;
    }
}

function showSummary() {
    updateStreak();
    document.getElementById('practice-section').style.display = 'none';
    document.getElementById('summary-modal').style.display = 'flex';
    document.getElementById('final-score').textContent = currentLesson.score;
}

function speakWord() {
    const wordObj = currentLesson.currentWord;
    if (!wordObj) return;
    const text = (wordObj.type === 'type-ga') ? wordObj.baseWord : (wordObj.word || wordObj.baseWord);
    window.gameUtils.speak(text, currentLesson.language);
}

function showHint() {
    const wordObj = currentLesson.currentWord;
    if (!wordObj) return;

    let target = wordObj.answer || wordObj.word || wordObj.article || wordObj.gender || wordObj.opposite;
    if (!target) return;

    // Support multiple correct answers
    const primaryAnswer = target.split(' / ')[0];

    currentLesson.hintLevel = (currentLesson.hintLevel || 0) + 1;
    // Reveal up to length - 2 characters to keep some challenge
    const maxReveal = Math.max(1, primaryAnswer.length - 2);
    const revealCount = Math.min(currentLesson.hintLevel, maxReveal);

    const feedbackMsg = document.getElementById('feedback-message');
    feedbackMsg.className = 'feedback-text hint';

    let hintPart = primaryAnswer.substring(0, revealCount);
    // Proper capitalization for the hint display
    hintPart = hintPart.charAt(0).toUpperCase() + hintPart.slice(1);

    feedbackMsg.textContent = "Hint: " + hintPart + "...";
}

function clearScramble() {
    if (currentLesson.currentWord.type === 'type-ws') renderWordScramble();
    else renderScramble();
}

function selectMatch(el, id, type) {
    if (el.classList.contains('matched')) return;
    if (!currentLesson.matchState.selected) {
        currentLesson.matchState.selected = { el, id, type };
        el.classList.add('selected');
    } else {
        const prev = currentLesson.matchState.selected;
        if (prev.type === type) {
            prev.el.classList.remove('selected');
            currentLesson.matchState.selected = { el, id, type };
            el.classList.add('selected');
        } else {
            if (prev.id === id) {
                prev.el.classList.remove('selected');
                prev.el.classList.add('matched');
                el.classList.add('matched');
                currentLesson.matchState.selected = null;
                currentLesson.matchState.count++;
                if (currentLesson.matchState.count === currentLesson.matchState.total) showFeedback(true);
            } else {
                prev.el.classList.remove('selected');
                prev.el.classList.add('incorrect');
                el.classList.add('incorrect');
                setTimeout(() => { prev.el.classList.remove('incorrect'); el.classList.remove('incorrect'); }, 500);
                currentLesson.matchState.selected = null;
            }
        }
    }
}
