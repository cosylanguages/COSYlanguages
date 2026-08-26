<<<<<<< HEAD
/* ==========================================================================
   COSYlanguages — Лексика русского языка (A0–A1) — Web Edition JS
   ========================================================================== */

(function(){
  'use strict';

  // Flashcards flip
  document.addEventListener('click', function(e){
    var card = e.target.closest('.flashcard');
    if(card){
      card.classList.toggle('flipped');
    }
  });

  // Keyboard accessibility for flashcards
  document.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){
      var card = document.activeElement.closest('.flashcard');
      if(card){
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    }
  });

  // Real-time Search Filter
  var searchInput = document.getElementById('vocab-search');
  if(searchInput){
    searchInput.addEventListener('input', function(){
      var q = searchInput.value.toLowerCase().trim();
      var cards = document.querySelectorAll('.vocab-card');
      cards.forEach(function(c){
        var txt = c.textContent.toLowerCase();
        if(!q || txt.indexOf(q) !== -1){
          c.style.display = 'flex';
        } else {
          c.style.display = 'none';
        }
=======
// COSYlanguages — Лексика русского языка (A0–A1) — shared interactivity
(function(){
  "use strict";

  /* ---------- Checklist ("Can you already use these words?") ---------- */
  function initChecklists(){
    document.querySelectorAll('.checklist[data-key]').forEach(function(box){
      var key = 'cosy-check-ru-vocab-' + box.getAttribute('data-key');
      var stored = {};
      try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
      var items = box.querySelectorAll('.check-item');
      function updateProgress(){
        var done = box.querySelectorAll('.check-item.done').length;
        var prog = box.querySelector('.check-progress');
        if(prog) prog.textContent = done + ' / ' + items.length + ' тем освоено';
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
>>>>>>> origin/main
      });
    });
  }

<<<<<<< HEAD
=======
  /* ---------- Quiz engine ---------- */
  function initQuizzes(){
    document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
      var data;
      try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
      var scoreEl = panel.querySelector('.quiz-score');
      var score = 0;
      function refreshScore(){
        if(scoreEl) scoreEl.textContent = 'Результат: ' + score + ' / ' + data.length;
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
>>>>>>> origin/main
})();
