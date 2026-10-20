const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(){button.setAttribute('aria-expanded','false');nav.classList.remove('open');button.textContent='MENU ＋'}
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);button.textContent=open?'CLOSE −':'MENU ＋'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){closeMenu();button.focus()}});
matchMedia('(min-width:651px)').addEventListener('change',closeMenu);
