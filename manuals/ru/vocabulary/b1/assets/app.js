// COSYlanguages Russian Vocabulary Manual Interactivity
document.addEventListener("DOMContentLoaded", () => {
  // Checklist Persistence
  const checklist = document.querySelector(".checklist");
  if (checklist) {
    const key = "cosy_ru_vocab_" + (checklist.dataset.key || "default");
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    const checkboxes = checklist.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((cb, idx) => {
      if (saved[idx]) cb.checked = true;
      cb.addEventListener("change", () => {
        const state = Array.from(checkboxes).map(c => c.checked);
        localStorage.setItem(key, JSON.stringify(state));
      });
    });
  }

  // Quiz Panel Logic
  const quizPanels = document.querySelectorAll(".quiz-panel");
  quizPanels.forEach(panel => {
    const config = JSON.parse(panel.dataset.quiz || "[]");
    const scoreEl = panel.querySelector(".quiz-score");
    let score = 0;

    const qitems = panel.querySelectorAll(".qitem");
    qitems.forEach((qitem, qidx) => {
      const targetConfig = config[qidx] || { correct: 0 };
      const opts = qitem.querySelectorAll(".qopt");
      const explain = qitem.querySelector(".qexplain");

      opts.forEach((opt, oidx) => {
        opt.addEventListener("click", () => {
          if (qitem.classList.contains("answered")) return;
          qitem.classList.add("answered");

          if (oidx === targetConfig.correct) {
            opt.classList.add("correct");
            score++;
            if (scoreEl) scoreEl.textContent = `Счёт: ${score} / ${qitems.length}`;
          } else {
            opt.classList.add("wrong");
            opts[targetConfig.correct].classList.add("correct");
          }
          if (explain) explain.style.display = "block";
        });
      });
    });
  });
});
