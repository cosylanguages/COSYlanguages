// Interactive Quiz & Checklists
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz-panel').forEach(panel => {
    const data = JSON.parse(panel.dataset.quiz || '[]');
    const items = panel.querySelectorAll('.qitem');
    let score = 0;

    items.forEach((item, idx) => {
      const opts = item.querySelectorAll('.qopt');
      const explain = item.querySelector('.qexplain');
      const correctIdx = data[idx].correct;

      opts.forEach((opt, oIdx) => {
        opt.addEventListener('click', () => {
          opts.forEach(o => o.style.pointerEvents = 'none');
          if (oIdx === correctIdx) {
            opt.style.background = '#dcfce7';
            opt.style.borderColor = '#22c55e';
            score++;
          } else {
            opt.style.background = '#fef2f2';
            opt.style.borderColor = '#ef4444';
            opts[correctIdx].style.background = '#dcfce7';
          }
          if (explain) explain.style.display = 'block';
          panel.querySelector('.quiz-score').textContent = `Счёт: ${score} / ${data.length}`;
        });
      });
    });
  });
});
