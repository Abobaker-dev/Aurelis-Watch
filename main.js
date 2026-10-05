
const $=s=>document.querySelector(s),v=$('#v'),hero=$('#hero'),nav=$('#nav');
let target=0,cur=0,dur=10,ready=false;
v.pause();
v.addEventListener('loadedmetadata',()=>{dur=v.duration||10;ready=true;v.currentTime=0});
v.load();
function prog(){const r=hero.getBoundingClientRect(),h=hero.offsetHeight-innerHeight;return Math.min(1,Math.max(0,-r.top/h))}
let near=true;
new IntersectionObserver(e=>{near=e[0].isIntersecting},{rootMargin:'200px'}).observe(hero);
function tick(){if(!hero.offsetHeight){nav.classList.add('s');requestAnimationFrame(tick);return}
 const r0=hero.getBoundingClientRect();target=Math.min(1,prog()/.88);const lv=Math.min(1,Math.max(0,1-r0.bottom/innerHeight));v.style.transform='translateY('+(-lv*7)+'vh) scale('+(1+lv*.05)+')';v.style.opacity=1-lv*.55;$('.bar').style.opacity=1-lv*3;cur+=(target-cur)*.09;if(Math.abs(target-cur)<.0004)cur=target;
 if(near&&ready){const t=cur*(dur-.05);if(Math.abs(v.currentTime-t)>.012&&!v.seeking)v.currentTime=t}
 $('#pb').style.width=cur*100+'%';
 const f=Math.max(0,1-cur*5);$('#ht').style.opacity=f;$('#hb').style.opacity=f;$('#ht').style.transform='translateY('+(-cur*60)+'px)';
 nav.classList.toggle('s',scrollY>40);
 document.querySelectorAll('[data-s]').forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom>-200&&r.top<innerHeight+200)el.style.transform='translateY('+((r.top+r.height/2-innerHeight/2)*el.dataset.s)+'px)'});
 requestAnimationFrame(tick)}
tick();

const M={rose:['#f6d2b8','#c48465','#6e3f2a'],steel:['#f7f9fb','#a3aab1','#454c52'],gold:['#f8e6b0','#c9a14e','#6b501c'],black:['#6a6d72','#2b2d30','#0c0d0e']};
function W(i,o){const m=M[o.m],id='g'+i,p=(a,L)=>[(200+L*Math.sin(a*Math.PI/180)).toFixed(1),(250-L*Math.cos(a*Math.PI/180)).toFixed(1)];
let s=`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${id}m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${m[0]}"/><stop offset=".5" stop-color="${m[1]}"/><stop offset="1" stop-color="${m[2]}"/></linearGradient><linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="${o.sc||'#222'}"/><stop offset=".5" stop-color="${o.sc||'#222'}" stop-opacity=".75"/><stop offset="1" stop-color="${o.sc||'#222'}"/></linearGradient><radialGradient id="${id}d" cx=".35" cy=".3" r="1"><stop offset="0" stop-color="${o.d[0]}"/><stop offset="1" stop-color="${o.d[1]}"/></radialGradient><filter id="${id}b"><feGaussianBlur stdDeviation="9"/></filter></defs><ellipse cx="200" cy="468" rx="120" ry="12" fill="#000" opacity=".55" filter="url(#${id}b)"/>`;
for(const y0 of [-10,352]){if(o.s==='l'){s+=`<rect x="152" y="${y0}" width="96" height="${y0<0?160:160}" rx="8" fill="url(#${id}s)"/><path d="M160 ${y0+4}V${y0+156}M240 ${y0+4}V${y0+156}" stroke="${m[0]}" stroke-opacity=".45" stroke-dasharray="3 4" fill="none"/>`}else for(let k=0;k<6;k++){s+=`<rect x="152" y="${y0+k*26}" width="96" height="23" rx="3" fill="url(#${id}m)"/><rect x="${k%2?188:164}" y="${y0+k*26+3}" width="${k%2?24:72}" height="2" fill="#fff" opacity=".22"/>`}}
s+=`<rect x="306" y="241" width="22" height="18" rx="3" fill="url(#${id}m)"/><g transform="rotate(-30 200 250)"><rect x="304" y="243" width="20" height="14" rx="3" fill="url(#${id}m)"/></g><g transform="rotate(30 200 250)"><rect x="304" y="243" width="20" height="14" rx="3" fill="url(#${id}m)"/></g><circle cx="200" cy="250" r="116" fill="url(#${id}m)"/><circle cx="200" cy="250" r="104" fill="${o.b||m[2]}" stroke="${m[0]}" stroke-opacity=".6"/><circle cx="200" cy="250" r="92" fill="url(#${id}d)"/>`;
const tc=o.t||m[0];
for(let k=0;k<60;k++){const a=k*6,h=k%5==0,q=p(a,89),r=p(a,h?81:85);s+=`<line x1="${q[0]}" y1="${q[1]}" x2="${r[0]}" y2="${r[1]}" stroke="${tc}" stroke-width="${h?1.6:.6}" opacity=".85"/>`}
const R=['XII','I','II','III','IIII','V','VI','VII','VIII','IX','X','XI'];
for(let k=0;k<12;k++){const q=p(k*30,69);if(o.n==='r')s+=`<text x="${q[0]}" y="${+q[1]+4}" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="${tc}">${R[k]}</text>`;else if(o.n==='a'&&k%3==0)s+=`<text x="${q[0]}" y="${+q[1]+5}" text-anchor="middle" font-family="Jost,sans-serif" font-size="15" fill="${tc}">${k?k:12}</text>`;else{const a=p(k*30,76),b=p(k*30,61);s+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${tc}" stroke-width="${k%3?3:5}"/>`}}
s+=`<text x="200" y="212" text-anchor="middle" font-family="Cormorant Garamond,Georgia,serif" font-size="9" letter-spacing="3" fill="${tc}">AURELIS</text>`;
if(o.c)for(const [x,y] of [[170,244],[230,244],[200,288]])s+=`<circle cx="${x}" cy="${y}" r="19" fill="#000" fill-opacity=".28" stroke="${tc}" stroke-width=".8"/><line x1="${x}" y1="${y}" x2="${x+9}" y2="${y-9}" stroke="${tc}" stroke-width="1.2"/>`;
const H=p(304,46),Mi=p(48,70),S=p(190,76);
s+=`<g stroke="${o.h||m[0]}" stroke-linecap="round"><line x1="200" y1="250" x2="${H[0]}" y2="${H[1]}" stroke-width="5"/><line x1="200" y1="250" x2="${Mi[0]}" y2="${Mi[1]}" stroke-width="3.4"/></g><line x1="200" y1="250" x2="${S[0]}" y2="${S[1]}" stroke="#d9534f" stroke-width="1"/><circle cx="200" cy="250" r="4" fill="${m[1]}"/><path d="M118 215A92 92 0 0 1 262 165L150 330Z" fill="#fff" opacity=".07" clip-path="circle(92px at 82px 130px)"/><path d="M120 190A92 92 0 0 1 250 168" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="2"/></svg>`;return s}
const P=[['Chronograph I','Chronograph','$12,400',{m:'rose',s:'l',sc:'#5a2e22',d:['#1b1b1d','#050506'],c:1,n:'r'}],
['Meridian','Chronograph','$9,800',{m:'steel',s:'b',d:['#22365e','#0a1426'],c:1,n:'i'}],
['Heritage','Dress','$15,600',{m:'gold',s:'l',sc:'#1a1a1a',d:['#f1e6cc','#cdb98d'],t:'#3b2d14',h:'#2a2110',n:'r'}],
['Nocturne','Automatic','$11,900',{m:'black',s:'b',d:['#17181a','#030303'],t:'#d9a07f',h:'#d9a07f',n:'i',b:'#111'}],
['Solstice','Automatic','$13,200',{m:'rose',s:'b',d:['#2d4a3e','#0f1d18'],n:'i'}],
['Aviator','Pilot','$8,900',{m:'steel',s:'l',sc:'#8a5a34',d:['#1d1d1f','#050505'],c:1,n:'a'}],
['Regent','Dress','$18,400',{m:'gold',s:'b',d:['#f4ecd8','#d9c9a0'],t:'#3b2d14',h:'#2a2110',n:'i'}],
['Abyss','Diver','$10,700',{m:'steel',s:'b',d:['#17406f','#061427'],n:'i',b:'#0e2a4d'}]];

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.querySelectorAll('.mg').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
$('#bg').onclick=()=>$('#lk').classList.toggle('o');
document.querySelectorAll('#lk a').forEach(a=>a.onclick=()=>$('#lk').classList.remove('o'));

const $$=s=>[...document.querySelectorAll(s)],MN={rose:'rose gold',steel:'stainless steel',gold:'yellow gold',black:'black PVD steel'};
const num=x=>+x[2].replace(/\D/g,''),fmt=n=>'$'+n.toLocaleString('en-US');
const card=(x,i)=>`<a class="card rv" href="#/product/${i}"><div class="im">${W(i,x[3])}<span class="btn">Explore</span></div><div class="meta"><div><h3 class="serif">${x[0]}</h3><div class="cat">${x[1]}</div></div><div class="pr">${x[2]}</div></div></a>`;
const obs=()=>$$('.rv:not(.in)').forEach(e=>io.observe(e));
const save=(k,v)=>{try{localStorage[k]=JSON.stringify(v)}catch(e){}},load=(k,d)=>{try{return JSON.parse(localStorage[k])??d}catch(e){return d}};
let cart=load('cart',[]),user=load('user',null),route='home';
function toast(m){const e=$('#ts');e.textContent=m;e.classList.add('o');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('o'),2600)}
function closeAll(){['ov','dr','sr'].forEach(i=>$('#'+i).classList.remove('o'))}
function openC(){closeAll();drw();$('#dr').classList.add('o');$('#ov').classList.add('o')}
function openS(){closeAll();$('#sr').classList.add('o');setTimeout(()=>$('#q').focus(),100);rq()}
function drw(){const n=cart.reduce((a,c)=>a+c.q,0),b=$('#cb');b.textContent=n;b.style.display=n?'block':'none';
 $('#di').innerHTML=cart.length?cart.map(c=>{const x=P[c.i];return `<div class="ln"><div class="im">${W(c.i,x[3])}</div><div><h4>${x[0]}</h4><div class="qb" style="margin:6px 0"><button onclick="chg(${c.i},-1)">−</button><span>${c.q}</span><button onclick="chg(${c.i},1)">+</button></div><small onclick="rem(${c.i})">Remove</small></div><div class="pr">${fmt(num(x)*c.q)}</div></div>`}).join(''):'<div class="em">Your bag is empty.</div>';
 $('#st').textContent=fmt(cart.reduce((a,c)=>a+num(P[c.i])*c.q,0));save('cart',cart)}
function add(i,q=1){const c=cart.find(c=>c.i==i);c?c.q+=q:cart.push({i,q});drw();toast(P[i][0]+' added to your bag');openC()}
function chg(i,d){const c=cart.find(c=>c.i==i);c.q+=d;if(c.q<1)rem(i);else drw()}
function rem(i){cart=cart.filter(c=>c.i!=i);drw()}
function checkout(){if(!cart.length)return toast('Your bag is empty');cart=[];drw();closeAll();toast('Thank you — demo order placed (no payment taken)')}
function find(q){const t=q.toLowerCase().split(/\s+/).filter(Boolean);return P.map((x,i)=>[x,i]).filter(([x])=>{const h=(x[0]+' '+x[1]+' '+MN[x[3].m]+' '+(x[3].s=='l'?'leather strap':'metal bracelet steel')+(x[3].c?' chronograph':'')+' '+x[2]).toLowerCase();return t.length&&t.every(w=>h.includes(w))})}
function rq(){const q=$('#q').value,r=find(q);$('#qr').innerHTML=q.trim()?(r.length?'<div class="sg">'+r.map(([x,i])=>`<a href="#/product/${i}"><div class="im">${W(i,x[3])}</div><h4>${x[0]}</h4><small>${x[1]} · ${x[2]}</small></a>`).join('')+'</div>':'<div class="em">No watches match “'+q.replace(/</g,'&lt;')+'”.</div>'):'<div class="em">Try “chronograph”, “rose gold”, “leather” or “diver”.</div>'}
$('#q').oninput=rq;$('#q').onkeydown=e=>{if(e.key==='Enter'&&$('#q').value.trim()){location.hash='#/search/'+encodeURIComponent($('#q').value.trim());closeAll()}};
addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});
const CATS=['All',...new Set(P.map(x=>x[1]))];
function filt(c){$('#ch').innerHTML=CATS.map(k=>`<button class="${k==c?'a':''}" onclick="filt('${k}')">${k}</button>`).join('');$('#gr2').innerHTML=P.map((x,i)=>[x,i]).filter(([x])=>c=='All'||x[1]==c).map(([x,i])=>card(x,i)).join('');obs()}
function showP(i){const x=P[i];if(!x){location.hash='#/collection';return}const o=x[3];window.qn=1;
 $('#pp').innerHTML=`<div class="pd"><div class="im">${W(i,o)}</div><div><div class="eb">${x[1]}</div><h2 class="serif">${x[0]}</h2><div class="pr">${x[2]}</div><p>A ${MN[o.m]} case on a ${o.s=='l'?'hand-stitched leather strap':'integrated metal bracelet'}, powered by the in-house automatic movement and finished in our Geneva atelier.</p><ul class="spec"><li>Movement<span>Automatic, 42 h reserve</span></li><li>Case<span>41 mm ${MN[o.m]}</span></li><li>Crystal<span>Sapphire</span></li><li>Water resistance<span>100 m</span></li></ul><div class="qty"><div class="qb"><button onclick="qn=Math.max(1,qn-1);$('#qv').textContent=qn">−</button><span id="qv">1</span><button onclick="qn++;$('#qv').textContent=qn">+</button></div><button class="btn" onclick="add(${i},qn)">Add to Bag</button></div></div></div><div class="rel"><div class="eb">You may also like</div><div class="grid" style="margin-top:30px">${P.map((y,j)=>[y,j]).filter(([y,j])=>j!=i).slice(0,4).map(([y,j])=>card(y,j)).join('')}</div></div>`}
function showS(q){const r=find(q);$('#sh').textContent=r.length+' result'+(r.length==1?'':'s')+' for “'+q+'”';$('#gr3').innerHTML=r.map(([x,i])=>card(x,i)).join('')}
const FQ=[['How long does delivery take?','Insured, tracked delivery takes 2–4 business days within Europe and 4–7 internationally. Every watch ships in its presentation box.'],['What is the warranty?','Every AURELIS watch carries a five-year international warranty covering the movement and case against manufacturing defects.'],['Can I return a watch?','Yes. Unworn watches with their seals and packaging can be returned within 30 days for a full refund.'],['How often should I service my watch?','We recommend a full service every five years. Our Geneva atelier can handle it, and we offer a complimentary first inspection.'],['Is the strap interchangeable?','Yes. All straps and bracelets use a quick-release spring bar, so you can change them without tools.'],['How do I contact the atelier?','Write to hello@aurelis.com or call +41 22 555 01 42, Monday to Saturday.'],['Privacy and terms','We use your details only to process orders and enquiries, and never sell them. Full terms are available on request from our team.']];
$('#fq').innerHTML=FQ.map(f=>`<div class="fa"><button onclick="this.parentNode.classList.toggle('o')">${f[0]}</button><div>${f[1]}</div></div>`).join('');
function sendC(f){f.reset();toast('Thank you — we will reply within one business day (demo)');return false}
let tab='in';
function lgr(){const l=$('#lg');if(user){l.innerHTML=`<div class="eb">Account</div><h2 class="serif">Welcome, ${user.name}.</h2><p style="color:var(--mu);margin:20px 0 34px">${user.email}</p><button class="btn" onclick="out()">Sign Out</button>`;return}
 l.innerHTML=`<div class="eb">Account</div><h2 class="serif">${tab=='in'?'Sign in':'Create account'}</h2><div class="tabs"><button class="${tab=='in'?'a':''}" onclick="tab='in';lgr()">Sign in</button><button class="${tab=='up'?'a':''}" onclick="tab='up';lgr()">Register</button></div><form onsubmit="return sub(this)">${tab=='up'?'<input name="n" placeholder="Full name" required>':''}<input name="e" type="email" placeholder="Email" required><input name="p" type="password" placeholder="Password (min. 6 characters)" required><div class="er" id="er"></div><button class="btn" type="submit">${tab=='in'?'Sign In':'Create Account'}</button></form>`}
function sub(f){const e=f.e.value.trim();if(f.p.value.length<6){$('#er').textContent='Password must be at least 6 characters.';return false}
 user={name:(f.n?f.n.value.trim():e.split('@')[0]),email:e};save('user',user);lgr();toast('Signed in');return false}
function out(){user=null;try{localStorage.removeItem('user')}catch(e){}lgr();toast('Signed out')}
const T={home:'AURELIS — Time, Engineered to Perfection',collection:'Collection',about:'About',faq:'FAQ',contact:'Contact',login:'Account',product:'Watch',search:'Search'};
function go(){const p=location.hash.replace(/^#\/?/,'').split('/'),k=Object.keys(T).includes(p[0])?p[0]:'home',a=decodeURIComponent(p[1]||'');route=k;
 $$('[data-page]').forEach(e=>e.classList.toggle('on',e.dataset.page===k));
 if(k=='collection')filt('All');if(k=='product')showP(+a);if(k=='search')showS(a);if(k=='login')lgr();
 document.title=k=='home'?T.home:'AURELIS — '+T[k];closeAll();scrollTo(0,0);obs()}
$('#gr').innerHTML=P.slice(0,4).map((x,i)=>card(x,i)).join('');
addEventListener('hashchange',go);drw();go();
