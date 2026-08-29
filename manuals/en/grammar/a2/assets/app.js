// COSYlanguages A2 Grammar Manual · shared interactivity
(function(){
 "use strict";

 function initTTS(){
   if(!('speechSynthesis' in window)) return;

   document.querySelectorAll('.examples li').forEach(function(el){
     if(el.querySelector('.tts-btn')) return;
     var text = el.textContent.trim();
     var btn = document.createElement('button');
     btn.className = 'tts-btn';
     btn.style.marginLeft = '8px';
     btn.style.background = 'none';
     btn.style.border = 'none';
     btn.style.cursor = 'pointer';
     btn.setAttribute('aria-label', 'Listen to ' + text);
     btn.innerHTML = '🔊';
     btn.addEventListener('click', function(e){
       e.stopPropagation();
       var utterance = new SpeechSynthesisUtterance(text);
       utterance.lang = 'en-GB';
       utterance.rate = 0.9;
       window.speechSynthesis.cancel();
       window.speechSynthesis.speak(utterance);
     });
     el.appendChild(btn);
   });
 }

 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-a2-check-' + box.getAttribute('data-key');
     var stored = {};
     try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
     var items = box.querySelectorAll('.check-item');
     function updateProgress(){
       var done = box.querySelectorAll('.check-item.done').length;
       var prog = box.querySelector('.check-progress');
       if(prog) prog.textContent = done + ' / ' + items.length + ' skills checked off';
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

 function initMistakeFlip(){
   document.querySelectorAll('.mflip').forEach(function(card){
     card.addEventListener('click', function(){
       card.classList.toggle('flipped');
     });
     card.setAttribute('tabindex','0');
     card.setAttribute('role','button');
     card.setAttribute('aria-expanded', 'false');
     card.addEventListener('keydown', function(e){
       if(e.key === 'Enter' || e.key === ' '){
         e.preventDefault();
         card.classList.toggle('flipped');
         card.setAttribute('aria-expanded', card.classList.contains('flipped') ? 'true' : 'false');
       }
     });
   });
 }

 function initQuizzes(){
   document.querySelectorAll('.quiz-panel[data-quiz]').forEach(function(panel){
     var data;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){ return; }
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0, answered = 0;
     function refreshScore(){
       scoreEl.textContent = 'Score: ' + score + ' / ' + data.length;
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
   initTTS();
   initChecklists();
   initMistakeFlip();
   initQuizzes();
 });
})();
