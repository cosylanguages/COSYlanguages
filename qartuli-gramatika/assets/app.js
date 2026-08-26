// COSYlanguages Monolingual Manual Interactivity Engine
document.addEventListener('DOMContentLoaded', () => {
  // Mistake Flip Cards
  document.querySelectorAll('.mflip').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('revealed'));
  });

  // Quiz Panel Engine
  document.querySelectorAll('.quiz-panel').forEach(panel => {
    const quizData = JSON.parse(panel.dataset.quiz || '[]');
    let score = 0;
    const scoreEl = panel.querySelector('.quiz-score');

    panel.querySelectorAll('.qitem').forEach((qitem, qidx) => {
      const opts = qitem.querySelectorAll('.qopt');
      const explain = qitem.querySelector('.qexplain');
      opts.forEach((opt, oidx) => {
        opt.addEventListener('click', () => {
          opts.forEach(o => o.classList.remove('correct', 'wrong'));
          if (oidx === quizData[qidx].correct) {
            opt.classList.add('correct');
          } else {
            opt.classList.add('wrong');
            opts[quizData[qidx].correct].classList.add('correct');
          }
          if (explain) explain.style.display = 'block';
        });
      });
    });

    const resetBtn = panel.querySelector('.quiz-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        panel.querySelectorAll('.qopt').forEach(o => o.classList.remove('correct', 'wrong'));
        panel.querySelectorAll('.qexplain').forEach(e => e.style.display = 'none');
      });
    }
  });

  // Interactive Sentence Builder
  const sb = document.getElementById('sentence-builder');
  if (sb) {
    const slots = sb.querySelectorAll('.slot');
    const out = sb.querySelector('.sentence-out');
    const selected = {};

    sb.querySelectorAll('.pool button').forEach(btn => {
      btn.addEventListener('click', () => {
        const role = btn.dataset.role;
        const word = btn.dataset.word;
        selected[role] = word;

        const slot = sb.querySelector(`.slot[data-role="${role}"]`);
        if (slot) slot.textContent = word;

        const parts = Array.from(slots).map(s => selected[s.dataset.role] || '...').join(' ');
        if (out) out.textContent = parts;
      });
    });
  }
});
