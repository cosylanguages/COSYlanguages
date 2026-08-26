// COSYlanguages Monolingual Manual Interactivity Engine
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mflip').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('revealed'));
  });

  document.querySelectorAll('.quiz-panel').forEach(panel => {
    const quizData = JSON.parse(panel.dataset.quiz || '[]');

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
});
