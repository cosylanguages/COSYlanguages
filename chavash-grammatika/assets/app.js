// COSYlanguages Monolingual Grammar Manual Interactivity Engine
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mflip').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('revealed');
      card.classList.toggle('flipped');
    });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('revealed');
        card.classList.toggle('flipped');
      }
    });
  });

  document.querySelectorAll('.quiz-panel').forEach(panel => {
    let quizData = [];
    try {
      quizData = JSON.parse(panel.dataset.quiz || panel.getAttribute('data-quiz') || '[]');
    } catch (e) {
      return;
    }

    let scoreEl = panel.querySelector('.quiz-score');
    if (!scoreEl && quizData.length > 0) {
      const quizHead = panel.querySelector('.quiz-head');
      if (quizHead) {
        scoreEl = document.createElement('div');
        scoreEl.className = 'quiz-score';
        quizHead.appendChild(scoreEl);
      }
    }

    let score = 0;
    const refreshScore = () => {
      if (scoreEl && quizData.length > 0) {
        scoreEl.textContent = 'Score: ' + score + ' / ' + quizData.length;
      }
    };

    const qitems = panel.querySelectorAll('.qitem');
    const qStates = Array.from(qitems).map(() => ({ locked: false }));

    qitems.forEach((qitem, qidx) => {
      const opts = qitem.querySelectorAll('.qopt');
      const explain = qitem.querySelector('.qexplain');

      opts.forEach((opt, oidx) => {
        opt.addEventListener('click', () => {
          if (qStates[qidx].locked) return;
          qStates[qidx].locked = true;

          const correctIdx = quizData[qidx] ? quizData[qidx].correct : -1;

          opts.forEach((o, idx) => {
            o.disabled = true;
            if (idx === correctIdx) {
              o.classList.add('correct');
            } else if (idx === oidx) {
              o.classList.add('wrong', 'incorrect');
            }
          });

          if (oidx === correctIdx) {
            score++;
          }

          refreshScore();

          if (explain) {
            explain.style.display = 'block';
            explain.classList.add('show');
          }
        });
      });
    });

    refreshScore();

    const resetBtn = panel.querySelector('.quiz-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        score = 0;
        qStates.forEach(s => s.locked = false);
        panel.querySelectorAll('.qopt').forEach(o => {
          o.disabled = false;
          o.classList.remove('correct', 'wrong', 'incorrect');
        });
        panel.querySelectorAll('.qexplain').forEach(e => {
          e.style.display = 'none';
          e.classList.remove('show');
        });
        refreshScore();
      });
    }
  });
});
