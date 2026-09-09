// COSYlanguages Lexique Français · Interactivité
(function(){
 "use strict";
 function initChecklists(){
   document.querySelectorAll('.checklist[data-key]').forEach(function(box){
     var key = 'cosy-fr-vocab-' + box.getAttribute('data-key');
     var stored = {};
     try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
     var items = box.querySelectorAll('.check-item');
     items.forEach(function(item, i){
       var input = item.querySelector('input');
       if(!input) return;
       input.checked = !!stored[i];
       input.addEventListener('change', function(){
         stored[i] = input.checked;
         try{ localStorage.setItem(key, JSON.stringify(stored)); }catch(e){}
       });
     });
   });
 }

 function initQuizzes(){
   document.querySelectorAll('.quiz-panel').forEach(function(panel){
     var data = [];
     try { data = JSON.parse(panel.getAttribute('data-quiz') || '[]'); } catch(e){}
     var items = panel.querySelectorAll('.qitem');
     var total = items.length;
     var scoreSpan = panel.querySelector('.quiz-score');

     function updateScore(){
       var correctCount = panel.querySelectorAll('.qopt.correct').length;
       if (scoreSpan) scoreSpan.textContent = 'Score: ' + correctCount + ' / ' + total;
     }

     items.forEach(function(item, idx){
       var opts = item.querySelectorAll('.qopt');
       var explain = item.querySelector('.qexplain');
       var targetIndex = data[idx] ? data[idx].correct : 0;

       opts.forEach(function(opt, optIdx){
         opt.addEventListener('click', function(){
           opts.forEach(function(o){ o.disabled = true; });
           if(optIdx === targetIndex){
             opt.classList.add('correct');
           } else {
             opt.classList.add('incorrect');
             opts[targetIndex].classList.add('correct');
           }
           if(explain) explain.classList.add('show');
           updateScore();
         });
       });
     });
   });
 }

 document.addEventListener('DOMContentLoaded', function(){
   initChecklists();
   initQuizzes();
 });
})();
