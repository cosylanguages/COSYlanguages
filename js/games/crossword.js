document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, handleShare, playGameSound, showGameMessage, populateThemes, isThemeMatch } = window.gameUtils;

    const CrosswordGame = {
        grid: [],
        words: [], // { word, clue, x, y, dir, length, number }
        selectedCell: null,
        activeDir: 'H',
        lang: 'en',

        init(lang, level, theme) {
            this.lang = lang;
            const pool = window.getVocabPool(lang, level, theme);
            if (pool.length < 5) return null;

            // Pick 10-15 words
            const selection = [...pool].sort(() => Math.random() - 0.5).slice(0, 15);
            const success = this.generateGrid(selection);
            if (success) {
                this.assignNumbers();
            }
            return success;
        },

        generateGrid(wordPool) {
            const gridSize = 12;
            this.grid = Array(gridSize).fill().map(() => Array(gridSize).fill(null));
            this.words = [];

            // Sort words by length descending
            const sortedWords = wordPool.sort((a, b) => b.word.length - a.word.length);

            // Try to place the first word in the middle
            const first = sortedWords.shift();
            this.placeWord(first, 2, 5, 'H');

            // Try to place other words intersecting
            let attempts = 0;
            while (sortedWords.length > 0 && attempts < 200) {
                const item = sortedWords.shift();
                if (!this.tryPlaceWord(item)) {
                    // Re-add to end if we still have attempts
                    if (attempts < 100) sortedWords.push(item);
                }
                attempts++;
            }

            return this.words.length > 3; // Success if at least 4 words placed
        },

        assignNumbers() {
            let currentNumber = 1;
            // Scan the grid to assign numbers to start cells
            for (let y = 0; y < this.grid.length; y++) {
                for (let x = 0; x < this.grid[y].length; x++) {
                    const starts = this.words.filter(w => w.x === x && w.y === y);
                    if (starts.length > 0) {
                        starts.forEach(w => w.number = currentNumber);
                        currentNumber++;
                    }
                }
            }
        },

        placeWord(item, x, y, dir) {
            const word = item.word.toUpperCase();
            for (let i = 0; i < word.length; i++) {
                const cx = dir === 'H' ? x + i : x;
                const cy = dir === 'V' ? y + i : y;
                this.grid[cy][cx] = {
                    char: word[i],
                    wordIndices: [...(this.grid[cy][cx]?.wordIndices || []), this.words.length],
                    isStart: i === 0
                };
            }
            this.words.push({
                word: word,
                clue: (item.emoji ? item.emoji + ' ' : '') + (item.definitions?.[0]?.text || ''),
                x, y, dir,
                length: word.length,
                number: 0
            });
        },

        tryPlaceWord(item) {
            const word = item.word.toUpperCase();
            // Try every character of the new word
            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                // Scan grid for match
                for (let gy = 0; gy < this.grid.length; gy++) {
                    for (let gx = 0; gx < this.grid[gy].length; gx++) {
                        if (this.grid[gy][gx]?.char === char) {
                            // Match found! Try placing perpendicular
                            const existingWordIdx = this.grid[gy][gx].wordIndices[0];
                            const existingDir = this.words[existingWordIdx].dir;
                            const newDir = existingDir === 'H' ? 'V' : 'H';

                            const nx = newDir === 'H' ? gx - i : gx;
                            const ny = newDir === 'V' ? gy - i : gy;

                            if (this.canPlace(word, nx, ny, newDir)) {
                                this.placeWord(item, nx, ny, newDir);
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        },

        canPlace(word, x, y, dir) {
            if (x < 0 || y < 0) return false;
            if (dir === 'H' && x + word.length > this.grid[0].length) return false;
            if (dir === 'V' && y + word.length > this.grid.length) return false;

            for (let i = 0; i < word.length; i++) {
                const cx = dir === 'H' ? x + i : x;
                const cy = dir === 'V' ? y + i : y;
                const cell = this.grid[cy][cx];

                // If cell occupied, must match char
                if (cell && cell.char !== word[i]) return false;

                // If cell empty, must not have parallel adjacent words
                if (!cell) {
                    if (dir === 'H') {
                        if (this.grid[cy-1]?.[cx] || this.grid[cy+1]?.[cx]) return false;
                        // Check before/after
                        if (i === 0 && this.grid[cy]?.[cx-1]) return false;
                        if (i === word.length - 1 && this.grid[cy]?.[cx+1]) return false;
                    } else {
                        if (this.grid[cy]?.[cx-1] || this.grid[cy]?.[cx+1]) return false;
                        // Check before/after
                        if (i === 0 && this.grid[cy-1]?.[cx]) return false;
                        if (i === word.length - 1 && this.grid[cy+1]?.[cx]) return false;
                    }
                }
            }
            return true;
        },

        render(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            // Setup nav buttons
            const prevBtn = document.getElementById('cw-prev-clue');
            const nextBtn = document.getElementById('cw-next-clue');
            if (prevBtn) prevBtn.onclick = () => this.selectNextWord(-1);
            if (nextBtn) nextBtn.onclick = () => this.selectNextWord(1);

            let html = `<table class="crossword-table" style="border-collapse: collapse; margin: auto;">`;
            for (let y = 0; y < this.grid.length; y++) {
                html += '<tr>';
                for (let x = 0; x < this.grid[y].length; x++) {
                    const cell = this.grid[y][x];
                    if (cell) {
                        const startWord = this.words.find(w => w.x === x && w.y === y);
                        const num = startWord ? startWord.number : '';
                        html += `<td class="cw-cell" data-x="${x}" data-y="${y}">
                            ${num ? `<span class="cw-cell-num">${num}</span>` : ''}
                            <input type="text" maxlength="1" class="cw-input" data-x="${x}" data-y="${y}">
                        </td>`;
                    } else {
                        html += `<td class="cw-cell empty"></td>`;
                    }
                }
                html += '</tr>';
            }
            html += '</table>';
            container.innerHTML = html;

            this.renderClues();

            // Setup events
            container.querySelectorAll('.cw-cell:not(.empty)').forEach(td => {
                const input = td.querySelector('input');
                const x = parseInt(td.dataset.x);
                const y = parseInt(td.dataset.y);

                td.addEventListener('click', () => {
                    const cell = this.grid[y][x];
                    if (cell.wordIndices.length > 1 && this.selectedCell?.x === x && this.selectedCell?.y === y) {
                        // Toggle direction on intersection click
                        this.activeDir = this.activeDir === 'H' ? 'V' : 'H';
                    } else if (cell.wordIndices.length === 1) {
                        this.activeDir = this.words[cell.wordIndices[0]].dir;
                    }
                    this.selectCell(x, y);
                    input.focus();
                });

                input.addEventListener('input', (e) => {
                    if (e.data) {
                        input.style.color = 'var(--ink)';
                        this.moveNext();
                    }
                });

                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace' && !input.value) {
                        this.movePrev();
                        e.preventDefault();
                    } else if (e.key.startsWith('Arrow')) {
                        this.handleArrowKey(e.key);
                        e.preventDefault();
                    }
                });
            });

            // Initial selection
            const firstWord = this.words[0];
            this.activeDir = firstWord.dir;
            this.selectCell(firstWord.x, firstWord.y);
        },

        renderClues() {
            const acrossList = document.getElementById('cw-clues-across');
            const downList = document.getElementById('cw-clues-down');
            if (!acrossList || !downList) return;

            acrossList.innerHTML = '';
            downList.innerHTML = '';

            this.words.sort((a, b) => a.number - b.number).forEach(w => {
                const div = document.createElement('div');
                div.className = 'cw-clue-item';
                div.dataset.number = w.number;
                div.dataset.dir = w.dir;
                div.innerHTML = `<strong>${w.number}.</strong> ${w.clue}`;

                div.onclick = () => {
                    this.activeDir = w.dir;
                    this.selectCell(w.x, w.y);
                    document.querySelector(`.cw-input[data-x="${w.x}"][data-y="${w.y}"]`)?.focus();
                };

                if (w.dir === 'H') acrossList.appendChild(div);
                else downList.appendChild(div);
            });
        },

        handleArrowKey(key) {
            if (!this.selectedCell) return;
            let { x, y } = this.selectedCell;
            if (key === 'ArrowRight') x++;
            else if (key === 'ArrowLeft') x--;
            else if (key === 'ArrowDown') y++;
            else if (key === 'ArrowUp') y--;

            const nextInput = document.querySelector(`.cw-input[data-x="${x}"][data-y="${y}"]`);
            if (nextInput) {
                // Determine direction based on move
                if (key === 'ArrowRight' || key === 'ArrowLeft') this.activeDir = 'H';
                if (key === 'ArrowDown' || key === 'ArrowUp') this.activeDir = 'V';

                this.selectCell(x, y);
                nextInput.focus();
            }
        },

        selectCell(x, y) {
            this.selectedCell = { x, y };
            const cell = this.grid[y][x];

            // Clear previous highlighting
            document.querySelectorAll('.cw-cell').forEach(c => {
                c.classList.remove('active-word', 'active-cell');
            });

            // Find active word
            let activeWord = this.words.find(w => w.dir === this.activeDir && cell.wordIndices.includes(this.words.indexOf(w)));
            if (!activeWord) activeWord = this.words[cell.wordIndices[0]];
            this.activeDir = activeWord.dir;

            // Highlight word
            for (let i = 0; i < activeWord.length; i++) {
                const wx = activeWord.dir === 'H' ? activeWord.x + i : activeWord.x;
                const wy = activeWord.dir === 'V' ? activeWord.y + i : activeWord.y;
                const td = document.querySelector(`.cw-cell[data-x="${wx}"][data-y="${wy}"]`);
                if (td) td.classList.add('active-word');
            }

            // Highlight selected cell
            const selectedTd = document.querySelector(`.cw-cell[data-x="${x}"][data-y="${y}"]`);
            if (selectedTd) selectedTd.classList.add('active-cell');

            // Update clue display
            const dirText = activeWord.dir === 'H' ? t('cw_across') : t('cw_down');
            document.getElementById('crossword-clue-display').innerHTML = `<span style="font-size: 0.7rem; color: var(--muted); display: block; text-transform: uppercase; margin-bottom: 2px;">${activeWord.number} ${dirText}</span> ${activeWord.clue}`;

            // Highlight clue in list
            document.querySelectorAll('.cw-clue-item').forEach(el => {
                el.classList.remove('active');
            });
            const clueEl = document.querySelector(`.cw-clue-item[data-number="${activeWord.number}"][data-dir="${activeWord.dir}"]`);
            if (clueEl) {
                clueEl.classList.add('active');
                clueEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        },

        moveNext() {
            if (!this.selectedCell) return;
            const { x, y } = this.selectedCell;
            let nx = x, ny = y;
            if (this.activeDir === 'H') nx++; else ny++;
            const next = document.querySelector(`.cw-cell[data-x="${nx}"][data-y="${ny}"] input`);
            if (next) {
                this.selectCell(nx, ny);
                next.focus();
            }
        },

        movePrev() {
             if (!this.selectedCell) return;
            const { x, y } = this.selectedCell;
            let nx = x, ny = y;
            if (this.activeDir === 'H') nx--; else ny--;
            const prev = document.querySelector(`.cw-cell[data-x="${nx}"][data-y="${ny}"] input`);
            if (prev) {
                this.selectCell(nx, ny);
                prev.focus();
            }
        },

        selectNextWord(dir) {
            console.log('Selecting next word, direction:', dir);
            if (!this.selectedCell) {
                const first = this.words[0];
                if (first) {
                    this.activeDir = first.dir;
                    this.selectCell(first.x, first.y);
                    document.querySelector(`.cw-input[data-x="${first.x}"][data-y="${first.y}"]`)?.focus();
                }
                return;
            }
            const currentCell = this.grid[this.selectedCell.y][this.selectedCell.x];
            if (!currentCell) return;

            let currentWordIdx = this.words.findIndex(w => w.dir === this.activeDir && currentCell.wordIndices.includes(this.words.indexOf(w)));
            if (currentWordIdx === -1) currentWordIdx = currentCell.wordIndices[0];

            let nextIdx = (currentWordIdx + dir + this.words.length) % this.words.length;
            const nextWord = this.words[nextIdx];

            if (nextWord) {
                this.activeDir = nextWord.dir;
                this.selectCell(nextWord.x, nextWord.y);
                document.querySelector(`.cw-input[data-x="${nextWord.x}"][data-y="${nextWord.y}"]`)?.focus();
            }
        },

        check() {
            console.log('Checking crossword...');
            let allCorrect = true;
            let filled = 0;
            let total = 0;

            for (let y = 0; y < this.grid.length; y++) {
                for (let x = 0; x < this.grid[y].length; x++) {
                    const cell = this.grid[y][x];
                    if (cell) {
                        total++;
                        const input = document.querySelector(`.cw-cell[data-x="${x}"][data-y="${y}"] input`);
                        const val = input.value.toUpperCase();
                        if (val === cell.char) {
                            input.style.color = '#1a6b45';
                        } else {
                            if (val) {
                                input.style.color = '#a32d2d';
                                allCorrect = false;
                            } else {
                                allCorrect = false;
                            }
                        }
                        if (val) filled++;
                    }
                }
            }
            return { allCorrect, percent: Math.round(filled/total * 100) };
        }
    };

    const initUI = () => {
        const modal = document.getElementById('crossword-modal');
        const startBtn = document.getElementById('start-crossword-game-btn');
        const checkBtn = document.getElementById('crossword-check-btn');
        const hintBtn = document.getElementById('crossword-hint-btn');
        const closeBtn = document.getElementById('close-crossword-btn');
        const setupArea = document.getElementById('crossword-setup');
        const gameArea = document.getElementById('crossword-gameplay');
        const resultArea = document.getElementById('crossword-result');

        const langSelect = document.getElementById('crossword-lang');
        const levelSelect = document.getElementById('crossword-level');
        const themeSelect = document.getElementById('crossword-theme');

        const populate = () => populateThemes(themeSelect, levelSelect, langSelect.value);
        langSelect.addEventListener('change', populate);
        levelSelect.addEventListener('change', populate);

        startBtn.onclick = () => {
            const ok = CrosswordGame.init(langSelect.value, levelSelect.value, themeSelect.value);
            if (ok) {
                setupArea.style.display = 'none';
                gameArea.style.display = 'block';
                resultArea.style.display = 'none';
                CrosswordGame.render('crossword-grid-container');
                playGameSound('click');
            } else {
                showGameMessage(setupArea, t('cw_error_pool'), 'error');
            }
        };

        checkBtn.onclick = () => {
            const { allCorrect, percent } = CrosswordGame.check();
            if (allCorrect) {
                playGameSound('success');
                if (window.gameUtils?.addGamePoints) window.gameUtils.addGamePoints(20);
                gameArea.style.display = 'none';
                resultArea.style.display = 'flex';
                document.getElementById('crossword-score-msg').textContent = t('cw_success');
                if (window.gameUtils.createConfetti) {
                    window.gameUtils.createConfetti();
                    setTimeout(() => window.gameUtils.createConfetti(), 500);
                    setTimeout(() => window.gameUtils.createConfetti(), 1000);
                }
            } else {
                playGameSound('error');
                showGameMessage(gameArea, t('cw_keep_going').replace('{0}', percent), 'info');
            }
        };

        hintBtn.onclick = () => {
            // Find an empty or wrong cell
            const cells = [];
            for (let y = 0; y < CrosswordGame.grid.length; y++) {
                for (let x = 0; x < CrosswordGame.grid[y].length; x++) {
                    if (CrosswordGame.grid[y][x]) {
                        const input = document.querySelector(`.cw-cell[data-x="${x}"][data-y="${y}"] input`);
                        if (input.value.toUpperCase() !== CrosswordGame.grid[y][x].char) {
                            cells.push({ x, y, char: CrosswordGame.grid[y][x].char });
                        }
                    }
                }
            }
            if (cells.length > 0) {
                const picked = cells[Math.floor(Math.random() * cells.length)];
                const input = document.querySelector(`.cw-cell[data-x="${picked.x}"][data-y="${picked.y}"] input`);
                input.value = picked.char;
                input.style.color = 'var(--honey-dark)';
                playGameSound('click');
                CrosswordGame.selectCell(picked.x, picked.y);
            }
        };

        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };

        return {
            open: () => {
                modal.style.display = 'flex';
                setupArea.style.display = 'block';
                gameArea.style.display = 'none';
                resultArea.style.display = 'none';
                populate();
            },
            start: () => startBtn.click()
        };
    };

    window.crosswordGame = initUI();
});
