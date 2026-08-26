// COSYlanguages — Lexique français (A0–A1) — Shared Interactivity
(function(){
  "use strict";

  /* ---------- Checklist ("Pouvez-vous déjà utiliser ces mots ?") ---------- */
  function initChecklists(){
    document.querySelectorAll('.checklist[data-key]').forEach(function(box){
      var key = 'cosy-check-fr-vocab-' + box.getAttribute('data-key');
      var stored = {};
      try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
      var items = box.querySelectorAll('.check-item');
      function updateProgress(){
        var done = box.querySelectorAll('.check-item.done').length;
        var prog = box.querySelector('.check-progress');
        if(prog) prog.textContent = done + ' / ' + items.length + ' thèmes maîtrisés';
      }
      items.forEach(function(item, i){
        var input = item.querySelector('input');
        if(!input) return;
        if(stored[i]){ item.classList.add('done'); input.checked = true; }
        input.addEventListener('change', function(){
          item.classList.toggle('done', input.checked);
          stored[i] = input.checked;
          localStorage.setItem(key, JSON.stringify(stored));
          updateProgress();
        });
      });
      updateProgress();
    });
  }

  /* ---------- Flashcard flip ---------- */
  function initFlashcards(){
    document.querySelectorAll('.flashcard').forEach(function(card){
      card.addEventListener('click', function(){ card.classList.toggle('flipped'); });
      card.setAttribute('tabindex','0');
      card.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); card.classList.toggle('flipped'); }
      });
    });
  }

  /* ---------- Quiz engine ---------- */
  function initQuizzes(){
    document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
      var data;
      try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
      var scoreEl = panel.querySelector('.quiz-score');
      var score = 0;
      function refreshScore(){
        if(scoreEl) scoreEl.textContent = 'Résultat : ' + score + ' / ' + data.length;
      }
      panel.querySelectorAll('.qitem').forEach(function(qEl, qi){
        var opts = qEl.querySelectorAll('.qopt');
        var explain = qEl.querySelector('.qexplain');
        var qLocked = false;
        opts.forEach(function(optEl, oi){
          optEl.addEventListener('click', function(){
            if(qLocked) return;
            qLocked = true;
            var correctIdx = data[qi].correct;
            opts.forEach(function(o, idx){
              o.disabled = true;
              if(idx === correctIdx) o.classList.add('correct');
              else if(idx === oi) o.classList.add('incorrect');
            });
            if(oi === correctIdx) score++;
            refreshScore();
            if(explain){ explain.classList.add('show'); }
          });
        });
      });
      refreshScore();
      var resetBtn = panel.querySelector('.quiz-reset');
      if(resetBtn){
        resetBtn.addEventListener('click', function(){
          location.reload();
        });
      }
    });
  }

  /* ---------- Vocabulary Card Search ---------- */
  function initVocabSearch(){
    var input = document.getElementById('vocab-search');
    if(!input) return;
    input.addEventListener('input', function(){
      var q = input.value.trim().toLowerCase();
      var cards = document.querySelectorAll('.vocab-card');
      cards.forEach(function(card){
        var text = card.textContent.toLowerCase();
        card.style.display = text.indexOf(q) !== -1 ? '' : 'none';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    initChecklists();
    initFlashcards();
    initQuizzes();
    initVocabSearch();
  });
})();
