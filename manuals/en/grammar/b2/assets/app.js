// COSYlanguages Grammar Manual · shared interactivity
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
     var key = 'cosy-check-' + box.getAttribute('data-key');
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
   });
 }

 function initQuizzes(){
   document.querySelectorAll('.quiz-panel, .ccq-panel').forEach(function(panel){
     var data = null;
     try{ data = JSON.parse(panel.getAttribute('data-quiz')); }catch(e){}
     var scoreEl = panel.querySelector('.quiz-score');
     var score = 0;

     panel.querySelectorAll('.qitem').forEach(function(qEl, qi){
       var opts = qEl.querySelectorAll('.qopt, .quiz-option');
       var explain = qEl.querySelector('.qexplain');
       var qLocked = false;

       opts.forEach(function(optEl, oi){
         optEl.addEventListener('click', function(){
           if(qLocked) return;
           qLocked = true;

           var isCorrect = optEl.getAttribute('data-correct') === 'true' || (data && data[qi] && data[qi].correct === oi);

           opts.forEach(function(o, idx){
             o.disabled = true;
             o.style.pointerEvents = 'none';
             var oIsCorrect = o.getAttribute('data-correct') === 'true' || (data && data[qi] && data[qi].correct === idx);
             if(oIsCorrect){
               o.classList.add('correct');
               o.style.background = '#eaf6f1';
               o.style.borderColor = '#1c9483';
               o.style.color = '#0f5c50';
               o.style.fontWeight = '700';
             } else if(idx === oi){
               o.classList.add('incorrect', 'wrong');
               o.style.background = '#fdf0f0';
               o.style.borderColor = '#e55353';
               o.style.color = '#9c1c1c';
             } else {
               o.style.opacity = '0.6';
             }
           });

           if(isCorrect) score++;
           if(scoreEl && data){
             scoreEl.textContent = 'Score: ' + score + ' / ' + data.length;
           }
           if(explain){
             explain.classList.add('show');
             explain.style.display = 'block';
           }
         });
       });
     });

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
