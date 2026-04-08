document.addEventListener('DOMContentLoaded', () => {
    const { getLang, t, handleShare, playGameSound, showGameMessage, populateThemes, isThemeMatch } = window.gameUtils;

    const CrosswordGame = {
        grid: [],
        words: [], // { word, clue, x, y, dir, length }
        selectedCell: null,
        lang: 'en',

        init(lang, level, theme) {
            this.lang = lang;
            const pool = window.getVocabPool(lang, level, theme);
            if (pool.length < 5) return null;

            // Pick 10-15 words
            const selection = [...pool].sort(() => Math.random() - 0.5).slice(0, 15);
            return this.generateGrid(selection);
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
            while (sortedWords.length > 0 && attempts < 100) {
                const item = sortedWords.shift();
                if (!this.tryPlaceWord(item)) {
                    // Skip for now
                }
                attempts++;
            }

            return this.words.length > 3; // Success if at least 4 words placed
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
                length: word.length
            });
        },

        tryPlaceWord(item) {
            const word = item.word.toUpperCase();
            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                // Look for this char on the grid
                for (let gy = 0; gy < this.grid.length; gy++) {
                    for (let gx = 0; gx < this.grid[gy].length; gx++) {
                        if (this.grid[gy][gx]?.char === char) {
                            // Try horizontal if current is vertical, and vice versa
                            const newDir = this.grid[gy][gx].wordIndices.some(idx => this.words[idx].dir === 'H') ? 'V' : 'H';
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
                if (cell && cell.char !== word[i]) return false;

                // Avoid adjacent words
                if (!cell) {
                    if (dir === 'H') {
                        if (this.grid[cy-1]?.[cx] || this.grid[cy+1]?.[cx]) return false;
                    } else {
                        if (this.grid[cy]?.[cx-1] || this.grid[cy]?.[cx+1]) return false;
                    }
                }
            }
            return true;
        },

        render(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            let html = `<table class="crossword-table" style="border-collapse: collapse; margin: auto;">`;
            for (let y = 0; y < this.grid.length; y++) {
                html += '<tr>';
                for (let x = 0; x < this.grid[y].length; x++) {
                    const cell = this.grid[y][x];
                    if (cell) {
                        const num = cell.isStart ? (this.words.findIndex(w => w.x === x && w.y === y) + 1) : '';
                        html += `<td class="cw-cell" data-x="${x}" data-y="${y}" style="width: 40px; height: 40px; border: 1.5px solid #2e4a33; position: relative; background: #fff; cursor: pointer;">
                            ${num ? `<span style="position: absolute; top: 2px; left: 2px; font-size: 10px; font-weight: 800; color: #6b8f71;">${num}</span>` : ''}
                            <input type="text" maxlength="1" class="cw-input" style="width: 100%; height: 100%; border: none; text-align: center; font-weight: 900; font-size: 20px; text-transform: uppercase; background: transparent; outline: none; caret-color: transparent;">
                        </td>`;
                    } else {
                        html += `<td style="width: 40px; height: 40px; background: #f0f5f1;"></td>`;
                    }
                }
                html += '</tr>';
            }
            html += '</table>';
            container.innerHTML = html;

            // Setup events
            container.querySelectorAll('.cw-cell').forEach(td => {
                const input = td.querySelector('input');
                td.addEventListener('click', () => {
                    this.selectCell(td);
                    input.focus();
                });
                input.addEventListener('input', (e) => {
                    if (e.data) {
                        this.moveNext();
                    }
                });
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace' && !input.value) {
                        this.movePrev();
                    }
                });
            });
        },

        selectCell(td) {
            document.querySelectorAll('.cw-cell').forEach(c => c.style.background = '#fff');
            td.style.background = 'var(--honey-mid)';
            const x = parseInt(td.dataset.x);
            const y = parseInt(td.dataset.y);
            const cell = this.grid[y][x];
            if (cell) {
                const wordIdx = cell.wordIndices[0];
                const word = this.words[wordIdx];
                const dirText = word.dir === 'H' ? t('cw_across') : t('cw_down');
                document.getElementById('crossword-clue-display').textContent = `[${dirText}] ${word.clue}`;
                this.selectedCell = { x, y };
            }
        },

        moveNext() {
            if (!this.selectedCell) return;
            const { x, y } = this.selectedCell;
            const wordIdx = this.grid[y][x].wordIndices[0];
            const word = this.words[wordIdx];
            let nx = x, ny = y;
            if (word.dir === 'H') nx++; else ny++;
            const next = document.querySelector(`.cw-cell[data-x="${nx}"][data-y="${ny}"]`);
            if (next) {
                next.click();
            }
        },

        movePrev() {
             if (!this.selectedCell) return;
            const { x, y } = this.selectedCell;
            const wordIdx = this.grid[y][x].wordIndices[0];
            const word = this.words[wordIdx];
            let nx = x, ny = y;
            if (word.dir === 'H') nx--; else ny--;
            const prev = document.querySelector(`.cw-cell[data-x="${nx}"][data-y="${ny}"]`);
            if (prev) {
                prev.click();
            }
        },

        check() {
            let allCorrect = true;
            let filled = 0;
            let total = 0;

            for (let y = 0; y < this.grid.length; y++) {
                for (let x = 0; x < this.grid[y].length; x++) {
                    const cell = this.grid[y][x];
                    if (cell) {
                        total++;
                        const input = document.querySelector(`.cw-cell[data-x="${x}"][data-y="${y}"] input`);
                        if (input.value.toUpperCase() === cell.char) {
                            input.style.color = '#1a6b45';
                        } else {
                            if (input.value) {
                                input.style.color = '#a32d2d';
                                allCorrect = false;
                            } else {
                                allCorrect = false;
                            }
                        }
                        if (input.value) filled++;
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
                gameArea.style.display = 'none';
                resultArea.style.display = 'block';
                document.getElementById('crossword-score-msg').textContent = t('cw_success');
                if (window.gameUtils.createConfetti) window.gameUtils.createConfetti();
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
