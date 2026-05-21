/**
 * js/portal/lang-pages.js
 * Logic for language-specific resource pages.
 */
/* Country tabs */
function showCountry(id){
  document.querySelectorAll('.country-panel').forEach(p=>p.classList.remove('show'));
  document.querySelectorAll('.ctab').forEach(t=>t.classList.remove('active'));
  const panel=document.getElementById('country-'+id);
  const tab=document.querySelector('[data-country="'+id+'"]');
  if(panel)panel.classList.add('show');
  if(tab)tab.classList.add('active');
}
/* auto-show first country tab */
document.addEventListener('DOMContentLoaded',()=>{
  const first=document.querySelector('.ctab');
  if(first)first.click();
});
