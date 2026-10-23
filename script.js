// Unlimited Void: 3D starfield warping toward viewer with light streaks
const c=document.getElementById('void'),x=c.getContext('2d'),still=matchMedia('(prefers-reduced-motion: reduce)').matches;let W,H,S=[];
const cols=['255,255,255','140,215,255','190,150,255'];
function R(){W=c.width=innerWidth;H=c.height=innerHeight;S=Array.from({length:420},n)}
function n(){return{x:(Math.random()-.5)*W*2,y:(Math.random()-.5)*H*2,z:Math.random()*W,c:cols[Math.random()*3|0]}}
R();addEventListener('resize',R);
(function f(){x.fillStyle='rgba(0,0,0,.35)';x.fillRect(0,0,W,H);for(const s of S){const pz=s.z;if(!still)s.z-=1.6;if(s.z<1){Object.assign(s,n(),{z:W});continue}
const k=W/2/s.z,px=W/2/pz,sx=s.x*k+W/2,sy=s.y*k+H/2,ox=s.x*px+W/2,oy=s.y*px+H/2,a=Math.min(1,(1-s.z/W)*1.4);
x.strokeStyle=`rgba(${s.c},${a})`;x.lineWidth=Math.max(.4,(1-s.z/W)*2);x.beginPath();x.moveTo(ox,oy);x.lineTo(sx,sy);x.stroke()}requestAnimationFrame(f)})();
const io=new IntersectionObserver(e=>e.forEach(i=>{if(i.isIntersecting){i.target.classList.add('in');io.unobserve(i.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const d=document.querySelector('dialog');if(d){document.querySelectorAll('.tile').forEach(t=>t.addEventListener('click',()=>{const im=t.querySelector('img');d.querySelector('.lb-img').innerHTML=im?`<img src="${im.src}" alt="${im.alt}">`:'<div class="'+t.querySelector('.css-art').className+'" style="position:static;height:60vh;width:min(92vw,900px)"></div>';d.querySelector('.lb-t').textContent=t.querySelector('b').textContent;d.showModal()}));d.querySelector('.close').addEventListener('click',()=>d.close())}
const fb=document.querySelectorAll('.filters button');fb.forEach(btn=>btn.addEventListener('click',()=>{fb.forEach(o=>o.setAttribute('aria-pressed','false'));btn.setAttribute('aria-pressed','true');const f=btn.dataset.f;let n=0;document.querySelectorAll('[data-cat]').forEach(e=>{const show=f==='all'||e.dataset.cat===f;e.classList.toggle('hidden',!show);if(show){n++;e.classList.add('in')}});const em=document.querySelector('.empty');em&&em.classList.toggle('hidden',n>0);const st=document.getElementById('fstat');st&&(st.textContent=n+' items shown')}));
