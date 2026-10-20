const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');
function close(){menu.setAttribute('aria-expanded','false');menu.textContent='MENU ＋';nav.classList.remove('open')}
menu.addEventListener('click',()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'CLOSE −':'MENU ＋';nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){close();menu.focus()}});
const business=document.querySelector('#business-toggle');business.addEventListener('click',()=>{let open=business.getAttribute('aria-expanded')!=='true';business.setAttribute('aria-expanded',String(open));document.querySelector('#business-nav').hidden=!open;business.querySelector('span').textContent=open?'−':'＋'});
document.querySelectorAll('[data-target]').forEach(b=>b.addEventListener('click',()=>{const t=document.getElementById(b.dataset.target);t.scrollBy({left:Number(b.dataset.dir)*(t.firstElementChild.getBoundingClientRect().width+25),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'})}));
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('selected',x===b));document.querySelectorAll('[data-kind]').forEach(x=>x.hidden=b.dataset.filter!=='all'&&x.dataset.kind!==b.dataset.filter)}));
