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
      });
    });
  }

})();
