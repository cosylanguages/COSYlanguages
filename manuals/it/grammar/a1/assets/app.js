// COSYlanguages A0-A1 Grammar Interactive App JS
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const isCorrect = btn.dataset.correct === 'true';
      const parent = btn.closest('.quiz-panel');
      parent.querySelectorAll('.quiz-option').forEach(b => {
        b.style.pointerEvents = 'none';
        if (b.dataset.correct === 'true') {
          b.style.background = '#eaf6f1';
          b.style.borderColor = '#1c9483';
          b.style.color = '#0f5c50';
        } else {
          b.style.opacity = '0.6';
        }
      });
      if (!isCorrect) {
        btn.style.background = '#fdf0f0';
        btn.style.borderColor = '#e55353';
        btn.style.color = '#9c1c1c';
        btn.style.opacity = '1';
      }
    });
  });
});
