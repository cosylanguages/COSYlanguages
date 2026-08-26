// COSYlanguages Breton Manuals — shared interactivity & TTS audio engine
(function(){
  "use strict";

  /* ---------- TTS Speech Audio Engine ---------- */
  function speakText(text, lang) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang || 'br-FR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  function initTTSSpeakers() {
    // Add TTS buttons to vocabulary words
    document.querySelectorAll('.vocab-card .word').forEach(function(wordEl){
      if (wordEl.querySelector('.btn-tts')) return;
      var text = wordEl.textContent.trim();
      var btn = document.createElement('button');
      btn.className = 'btn-tts';
      btn.innerHTML = '🔊';
      btn.title = 'Selaou ar distagadur';
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        speakText(text, 'br-FR');
      });
      wordEl.appendChild(btn);
    });

    // Add TTS buttons to example sentences
    document.querySelectorAll('.examples li b').forEach(function(sentenceEl){
      if (sentenceEl.querySelector('.btn-tts')) return;
      var text = sentenceEl.textContent.trim();
      var btn = document.createElement('button');
      btn.className = 'btn-tts';
      btn.innerHTML = '🔊';
      btn.title = 'Selaou ar frazenn';
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        speakText(text, 'br-FR');
      });
      sentenceEl.appendChild(btn);
    });
  }

  /* ---------- Category Filter Pills ---------- */
  function initFilterPills() {
    var pills = document.querySelectorAll('.filter-pill');
    if (!pills.length) return;
    var cards = document.querySelectorAll('.topic-card');

    pills.forEach(function(pill){
      pill.addEventListener('click', function(){
        pills.forEach(function(p){ p.classList.remove('active'); });
        pill.classList.add('active');
        var cat = pill.getAttribute('data-category');

        cards.forEach(function(card){
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- Checklist Persistence ---------- */
  function initChecklists(){
    document.querySelectorAll('.checklist[data-key]').forEach(function(box){
      var key = 'cosy-check-br-' + box.getAttribute('data-key');
      var stored = {};
      try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
      var items = box.querySelectorAll('.check-item');
      function updateProgress(){
        var done = box.querySelectorAll('.check-item.done').length;
        var prog = box.querySelector('.check-progress');
        if(prog) prog.textContent = done + ' / ' + items.length + ' poentoù c\'hoariet';
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

  /* ---------- Common Mistakes: click to flip ---------- */
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

  /* ---------- Quiz Engine ---------- */
  function initQuizzes(){
    document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
      var data;
      try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
      var scoreEl = panel.querySelector('.quiz-score');
      var score = 0, answered = 0;
      function refreshScore(){
        if(scoreEl) scoreEl.textContent = 'Disoc\'h : ' + score + ' / ' + data.length;
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
    });
  }

  /* ---------- Homepage Sentence Builder ---------- */
  function initSentenceBuilder(){
    var builder = document.getElementById('sentence-builder');
    if(!builder) return;
    var slots = builder.querySelectorAll('.slot');
    var out = builder.querySelector('.sentence-out');
    var state = {subject:null, verb:null, object:null};
    var sentences = {
      'Me|a zo|laouen':'Me a zo laouen.',
      'Hi|a labour|e Roazhon':'Hi a labour e Roazhon.',
      'Ni|hon eus|ur c\'hi':'Ni hon eus ur c\'hi.',
      'Me|a ya|d\'ar skol':'Me a ya d\'ar skol.',
      'Ni|a zebr|krampouezh':'Ni a zebr krampouezh.'
    };
    builder.querySelectorAll('.pool button').forEach(function(btn){
      btn.addEventListener('click', function(){
        var role = btn.getAttribute('data-role');
        var word = btn.getAttribute('data-word');
        state[role] = word;
        var slot = builder.querySelector('.slot[data-role="'+role+'"]');
        if(slot){
          slot.textContent = word;
          slot.classList.add('filled');
        }
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
    initQuizzes();
    initSentenceBuilder();
    initTTSSpeakers();
    initFilterPills();
  });
})();
