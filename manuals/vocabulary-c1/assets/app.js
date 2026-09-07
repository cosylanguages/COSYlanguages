/* COSYlanguages · Level C1 Vocabulary Manual Interactive Assets */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mflip').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('revealed');
    });
  });

  document.querySelectorAll('.checklist').forEach(box => {
    const key = 'cosy-check-en-c1-v-' + (box.dataset.key || 'default');
    const checkboxes = box.querySelectorAll('input[type="checkbox"]');
    const progressBar = box.querySelector('.check-progress');
    let barInner = box.querySelector('.check-progress-bar');
    if (progressBar && !barInner) {
      barInner = document.createElement('div');
      barInner.className = 'check-progress-bar';
      progressBar.appendChild(barInner);
    }

    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    checkboxes.forEach((cb, idx) => {
      if (saved[idx]) cb.checked = true;
      cb.addEventListener('change', () => {
        const state = Array.from(checkboxes).map(c => c.checked);
        localStorage.setItem(key, JSON.stringify(state));
        updateProgress();
      });
    });

    function updateProgress() {
      const checked = Array.from(checkboxes).filter(c => c.checked).length;
      const total = checkboxes.length;
      const pct = total ? Math.round((checked / total) * 100) : 0;
      if (barInner) barInner.style.width = pct + '%';
    }
    updateProgress();
  });

  document.querySelectorAll('.quiz-panel').forEach(quiz => {
    const qitems = quiz.querySelectorAll('.qitem');
    const scoreEl = quiz.querySelector('.quiz-score');
    const resetBtn = quiz.querySelector('.quiz-reset');
    let score = 0;

    qitems.forEach((item, qidx) => {
      const opts = item.querySelectorAll('.qopt');
      const explain = item.querySelector('.qexplain');
      opts.forEach((opt, oidx) => {
        opt.addEventListener('click', () => {
          if (item.dataset.answered) return;
          item.dataset.answered = 'true';
          const isCorrect = (oidx === 0 && !opt.classList.contains('incorrect-target')) || opt.dataset.correct === 'true';
          if (isCorrect) {
            opt.classList.add('correct');
            score++;
          } else {
            opt.classList.add('wrong');
            opts.forEach(o => {
              if (o.dataset.correct === 'true' || o === opts[0]) o.classList.add('correct');
            });
          }
          if (explain) explain.style.display = 'block';
          if (scoreEl) scoreEl.textContent = `Score: ${score} / ${qitems.length}`;
        });
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        score = 0;
        if (scoreEl) scoreEl.textContent = `Score: 0 / ${qitems.length}`;
        qitems.forEach(item => {
          delete item.dataset.answered;
          item.querySelectorAll('.qopt').forEach(o => {
            o.classList.remove('correct', 'wrong');
          });
          const explain = item.querySelector('.qexplain');
          if (explain) explain.style.display = 'none';
        });
      });
    }
  });
});
