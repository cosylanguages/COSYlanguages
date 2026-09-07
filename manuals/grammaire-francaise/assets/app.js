// COSYlanguages Grammar Manual — shared interactivity
(function(){
  "use strict";

  /* ---------- Checklist ("Can you already use this?") with persistence ---------- */
  function initChecklists(){
    document.querySelectorAll('.checklist[data-key]').forEach(function(box){
      var key = 'cosy-check-' + box.getAttribute('data-key');
      var stored = {};
      try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
      var items = box.querySelectorAll('.check-item');
      function updateProgress(){
        var done = box.querySelectorAll('.check-item.done').length;
        var prog = box.querySelector('.check-progress');
        if(prog) prog.textContent = done + ' / ' + items.length + ' comp\u00e9tences coch\u00e9es';
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

  /* ---------- Flashcards ---------- */
  function initFlashcards(){
    document.querySelectorAll('.flashcard').forEach(function(card){
      card.addEventListener('click', function(){ card.classList.toggle('flipped'); });
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
        scoreEl.textContent = 'Score : ' + score + ' / ' + data.length;
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
          score = 0; answered = 0;
          panel.querySelectorAll('.qopt').forEach(function(o){ o.disabled=false; o.classList.remove('correct','incorrect'); });
          panel.querySelectorAll('.qexplain').forEach(function(e){ e.classList.remove('show'); });
          panel.querySelectorAll('.qitem').forEach(function(qEl){ /* relock handled by closures via disabled flags already reset */ });
          // rebuild lock state by re-cloning listeners is unnecessary: disabled reset lets user click again,
          // but our qLocked closure var stays true. Simplest robust fix: reload the quiz block.
          location.reload();
        });
      }
    });
  }

  /* ---------- Mode toggle: quiz <-> flashcards ---------- */
  function initModeToggles(){
    document.querySelectorAll('.mode-toggle').forEach(function(toggle){
      var buttons = toggle.querySelectorAll('button');
      buttons.forEach(function(btn){
        btn.addEventListener('click', function(){
          buttons.forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
          var target = btn.getAttribute('data-target');
          var wrap = toggle.parentElement;
          wrap.querySelectorAll('.mode-panel').forEach(function(p){
            p.style.display = (p.getAttribute('data-panel') === target) ? '' : 'none';
          });
        });
      });
    });
  }

  /* ---------- Homepage sentence builder (signature interaction) ---------- */
  function initSentenceBuilder(){
    var builder = document.getElementById('sentence-builder');
    if(!builder) return;
    var slots = builder.querySelectorAll('.slot');
    var out = builder.querySelector('.sentence-out');
    var state = {subject:null, verb:null, object:null};
    var sentences = {
      'She|reads|books':'She reads books.',
      'They|play|football':'They play football.',
      'We|like|pizza':'We like pizza.',
      'He|drives|a car':'He drives a car.',
      'I|love|music':'I love music.'
    };
    builder.querySelectorAll('.pool button').forEach(function(btn){
      btn.addEventListener('click', function(){
        var role = btn.getAttribute('data-role');
        var word = btn.getAttribute('data-word');
        state[role] = word;
        var slot = builder.querySelector('.slot[data-role="'+role+'"]');
        slot.textContent = word;
        slot.classList.add('filled');
        if(state.subject && state.verb && state.object){
          var key = state.subject+'|'+state.verb+'|'+state.object;
          out.textContent = sentences[key] || (state.subject+' '+state.verb+' '+state.object+'.');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    initChecklists();
    initMistakeFlip();
    initFlashcards();
    initQuizzes();
    initModeToggles();
    initSentenceBuilder();
  });
})();
