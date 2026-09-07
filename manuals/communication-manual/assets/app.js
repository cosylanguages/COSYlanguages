// COSYlanguages Communication Manual shared scripts
(function(){
  "use strict";

  function initSearchFilter(){
    var searchInput = document.querySelector('.search-input');
    if(!searchInput) return;
    searchInput.addEventListener('input', function(){
      var q = searchInput.value.toLowerCase().trim();
      document.querySelectorAll('.part-card').forEach(function(card){
        var text = card.textContent.toLowerCase();
        if(!q || text.includes(q)){
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  function initChecklists(){
    document.querySelectorAll('.checklist[data-key]').forEach(function(box){
      var key = 'cosy-comm-check-' + box.getAttribute('data-key');
      var stored = {};
      try{ stored = JSON.parse(localStorage.getItem(key) || '{}'); }catch(e){}
      var items = box.querySelectorAll('.check-item');
      items.forEach(function(item, i){
        var input = item.querySelector('input');
        if(stored[i]){ item.classList.add('done'); input.checked = true; }
        item.addEventListener('click', function(e){
          if(e.target !== input){ input.checked = !input.checked; }
          item.classList.toggle('done', input.checked);
          stored[i] = input.checked;
          localStorage.setItem(key, JSON.stringify(stored));
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    initSearchFilter();
    initChecklists();
  });
})();
