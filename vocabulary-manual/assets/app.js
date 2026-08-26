// COSYlanguages Vocabulary Manual · shared interactivity
(function(){
  "use strict";

  /* ---------- Checklist ("Can you already use this?") with persistence ---------- */
  function initChecklists(){
    document.querySelectorAll('.checklist[data-key]').forEach(function(box){
      var key = 'cosy-vocab-check-' + box.getAttribute('data-key');
      var stored = {};
      try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
      var items = box.querySelectorAll('.check-item');
      function updateProgress(){
        var done = box.querySelectorAll('.check-item.done').length;
        var prog = box.querySelector('.check-progress');
        if(prog) prog.textContent = done + ' / ' + items.length + ' words & skills checked off';
      }
      items.forEach(function(item, i){
        var input = item.querySelector('input');
        if(stored[i]){ item.classList.add('done'); input.checked = true; }
        item.addEventListener('click', function(e){
          if(e.target !== input){ input.checked = !input.checked; }
          item.classList.toggle('done', input.checked);
          stored[i] = input.checked;
          localStorage.setItem(key, JSON.stringify(stored));
          updateProgress();
        });
      });
      updateProgress();
    });
  }

  /* ---------- Common Mistakes: click to flip wrong -> right ---------- */
  function initMistakeFlip(){
    document.querySelectorAll('.mflip').forEach(function(card){
      card.addEventListener('click', function(){
        card.classList.toggle('flipped');
      });
      card.setAttribute('tabindex','0');
      card.setAttribute('role','button');
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
      var score = 0, answered = 0;
      function refreshScore(){
        if(scoreEl) scoreEl.textContent = 'Score: ' + score + ' / ' + data.length;
      }
      panel.querySelectorAll('.qitem').forEach(function(qEl, qi){
        var opts = qEl.querySelectorAll('.qopt');
        var explain = qEl.querySelector('.qexplain');
        var qLocked = false;
        opts.forEach(function(optEl, oi){
          optEl.addEventListener('click', function(){
            if(qLocked) return;
            qLocked = true;
            answered++;
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

  document.addEventListener('DOMContentLoaded', function(){
    initChecklists();
    initMistakeFlip();
    initQuizzes();
  });
})();
