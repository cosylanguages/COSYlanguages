/* Scroll reveal */
const io = new IntersectionObserver(es=>{
  es.forEach((e,i)=>{if(e.isIntersecting){e.target.style.animationDelay=(i*.07)+'s';e.target.classList.add('visible');io.unobserve(e.target);}});
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

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
