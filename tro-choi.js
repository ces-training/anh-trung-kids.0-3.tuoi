/* =====================================================================
   TRÒ CHƠI TƯƠNG TÁC 4–5 TUỔI (Anh – Trung)
   Bé chơi bằng cách nghe và chạm, không cần biết đọc. Âm thanh đọc từ
   bằng giọng có sẵn trên máy (en-US, zh-CN). Mỗi lượt chơi 3–5 phút.
   TROCHOI.open({type, lang, items, seq, phrases, level, title, onDone})
     items:   [{pic:"🍎", say:"apple", show:"apple", vi:"quả táo", act:false}]
     seq:     [{pic:"🌱", cap:"seed"}]            (xếp thứ tự)
     phrases: [{text:"I like apples", gap:"apples", pic:"🍎"}]  (karaoke)
   TROCHOI.mix([cfg, cfg, ...])  — chuỗi nhiều trò ngắn (Thử thách lớn)
   ===================================================================== */
window.TROCHOI = (function(){
"use strict";
var LIST = {
  "nghe-cham":  {ten:"Nghe và chạm",      ic:"👂", mo:"Nghe từ, chạm đúng tranh."},
  "lat-the":    {ten:"Lật thẻ tìm đôi",   ic:"🃏", mo:"Lật hai thẻ giống nhau, nghe tên."},
  "bong-bong":  {ten:"Bắt bóng bay",      ic:"🎈", mo:"Chạm đúng quả bóng có tranh vừa nghe."},
  "bong-den":   {ten:"Tìm bóng đen",      ic:"🌑", mo:"Nhìn bóng đen, chọn tranh khớp."},
  "dung-sai":   {ten:"Đúng hay sai",      ic:"👍", mo:"Nghe tên, tranh có đúng không?"},
  "ai-bien-mat":{ten:"Ai biến mất?",      ic:"🎩", mo:"Nhớ các tranh, tìm tranh vừa trốn."},
  "dem-so":     {ten:"Đếm cùng bé",       ic:"🔢", mo:"Đếm tranh, chọn số đúng."},
  "cau-ca":     {ten:"Câu cá",            ic:"🎣", mo:"Chạm con cá mang tranh vừa nghe."},
  "lam-theo":   {ten:"Bé làm theo",       ic:"🤸", mo:"Nghe lệnh rồi làm động tác."},
  "xep-thu-tu": {ten:"Xếp thứ tự",        ic:"🧩", mo:"Chạm tranh theo đúng thứ tự câu chuyện."},
  "karaoke":    {ten:"Hát điền từ",       ic:"🎤", mo:"Nghe câu, bé nói từ còn thiếu."}
};
var NUM = {en:["zero","one","two","three","four","five","six","seven","eight","nine","ten"],
           zh:["零","一","二","三","四","五","六","七","八","九","十"],
           py:["líng","yī","èr","sān","sì","wǔ","liù","qī","bā","jiǔ","shí"]};
var PRAISE = {en:["Great job!","Well done!","Yes!","Super!"], zh:["真棒！","对了！","很好！","太好了！"]};

/* ---------- âm thanh ---------- */
var voices=[]; function loadVoices(){ try{ voices=speechSynthesis.getVoices()||[]; }catch(e){} }
try{ loadVoices(); speechSynthesis.onvoiceschanged=loadVoices; }catch(e){}
function pickVoice(lang){ var want=lang==="zh"?/^zh(-|_)?(CN|Hans)?/i:/^en(-|_)?(US|GB)?/i;
  var vs=voices.filter(function(v){ return want.test(v.lang); });
  if(lang==="zh") vs=vs.filter(function(v){ return !/HK|TW|yue/i.test(v.lang+v.name); }).concat(vs);
  return vs[0]||null; }
function hasVoice(lang){ loadVoices(); return !!pickVoice(lang); }
/* Máy không có giọng tiếng Anh/Trung: hiện bong bóng chữ (kèm pinyin) để mẹ đọc to giúp bé. */
var PY={"在哪里？":"在哪里？ zài nǎlǐ?","谁不见了？":"谁不见了？ shéi bú jiàn le?","找一找！":"找一找！ zhǎo yi zhǎo!","太棒了！":"太棒了！ tài bàng le!","真棒！":"真棒！ zhēn bàng!","对了！":"对了！ duì le!","很好！":"很好！ hěn hǎo!","老师说，":"老师说 lǎoshī shuō, "};
function bubble(text){ var ov=document.querySelector(".tc-ov"); if(!ov) return; var b=ov.querySelector(".tc-bub"); if(!b){ b=el("div","tc-bub"); ov.appendChild(b); }
  b.textContent="🗣 "+text; b.classList.remove("on"); void b.offsetWidth; b.classList.add("on"); }
function say(text, lang, rate, display){
  return new Promise(function(res){
    try{
      if(!hasVoice(lang)){ var shown=display||PY[text]||(lang==="zh"?String(text).replace(/^老师说，/,"老师说 (lǎoshī shuō), "):text); bubble(shown); return setTimeout(res, 900+String(display||text).length*90); }
      speechSynthesis.cancel(); var u=new SpeechSynthesisUtterance(text);
      u.lang=lang==="zh"?"zh-CN":"en-US"; var v=pickVoice(lang); if(v) u.voice=v; u.rate=rate||(lang==="zh"?.8:.85);
      var done=false, fin=function(){ if(!done){ done=true; res(); } };
      u.onend=fin; u.onerror=fin; setTimeout(fin, 900+text.length*160);
      speechSynthesis.speak(u);
    }catch(e){ res(); }
  });
}
var AC=null; function tone(f,d,type,vol){ try{ AC=AC||new (window.AudioContext||window.webkitAudioContext)(); var o=AC.createOscillator(), g=AC.createGain();
  o.type=type||"sine"; o.frequency.value=f; g.gain.value=vol||.08; o.connect(g); g.connect(AC.destination); o.start(); g.gain.exponentialRampToValueAtTime(.0001, AC.currentTime+(d||.2)); o.stop(AC.currentTime+(d||.2)); }catch(e){} }
function ding(){ tone(880,.15); setTimeout(function(){ tone(1320,.25); },120); }
function boop(){ tone(220,.25,"triangle",.06); }

/* ---------- tiện ích ---------- */
function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function pick(a,n,not){ return shuffle(a.filter(function(x){ return not.indexOf(x)<0; })).slice(0,n); }
function el(tag,cls,html){ var e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; }
function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g,function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function rounds(level){ return level>=3?10:level===2?8:6; }
function nOpt(level){ return level>=3?6:level===2?4:3; }

/* ---------- khung chung ---------- */
var CSS = '.tc-ov{position:fixed;inset:0;z-index:9999;background:#FFF7DD;display:flex;flex-direction:column;font-family:inherit;color:#3A2A1A;-webkit-user-select:none;user-select:none}'+
'.tc-top{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#FFC72C;box-shadow:0 4px 0 #E9A900}'+
'.tc-top h2{margin:0;font-size:20px;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
'.tc-btn{border:0;border-radius:999px;padding:10px 16px;font:inherit;font-weight:800;font-size:16px;background:#fff;color:#3A2A1A;box-shadow:0 4px 0 rgba(0,0,0,.15);cursor:pointer}'+
'.tc-btn.red{background:#E3262E;color:#fff}.tc-btn.green{background:#2E9E5B;color:#fff}'+
'.tc-stars{font-weight:800;font-size:18px}'+
'.tc-main{flex:1;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px;gap:14px}'+
'.tc-prompt{font-size:22px;font-weight:800;text-align:center;min-height:30px}'+
'.tc-prompt small{display:block;font-size:14px;font-weight:600;color:#7A6A58}'+
'.tc-grid{display:grid;gap:14px;width:min(640px,100%);grid-template-columns:repeat(var(--c,3),1fr)}'+
'.tc-card{aspect-ratio:1;border:0;border-radius:24px;background:#fff;box-shadow:0 6px 0 rgba(58,42,26,.18);font-size:clamp(44px,12vw,84px);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .12s;position:relative}'+
'.tc-card:active{transform:scale(.95)}.tc-card.ok{background:#D8F5DF;outline:5px solid #2E9E5B}.tc-card.no{animation:tcShake .35s}.tc-card.hint{outline:5px dashed #2E9E5B}'+
'.tc-card.back{background:#7B5CD6;color:#fff}.tc-card.gone{visibility:hidden}.tc-card .lb{position:absolute;bottom:6px;left:0;right:0;font-size:14px;font-weight:700;color:#7A6A58}'+
'.tc-big{font-size:clamp(90px,26vw,170px);line-height:1}.tc-shadow{filter:brightness(0) opacity(.85)}'+
'.tc-row{display:flex;gap:16px;flex-wrap:wrap;justify-content:center}.tc-yes,.tc-no{font-size:60px;width:120px;height:120px;border-radius:50%}'+
'.tc-sky{position:absolute;inset:0}.tc-float{position:absolute;bottom:-140px;font-size:64px;border:0;background:none;cursor:pointer;animation:tcUp linear forwards}'+
'.tc-float .bal{display:block;width:96px;height:112px;border-radius:50% 50% 46% 46%;display:flex;align-items:center;justify-content:center;font-size:52px;box-shadow:inset -8px -10px 0 rgba(0,0,0,.08)}'+
'.tc-sea{position:absolute;inset:0;background:linear-gradient(#BFE9FF,#5FB7E5)}.tc-fish{position:absolute;border:0;background:none;font-size:56px;cursor:pointer;animation:tcSwim linear forwards;display:flex;align-items:center;gap:2px}'+
'.tc-fish .tag{background:#fff;border-radius:16px;padding:2px 8px;font-size:44px}'+
'.tc-dots{display:flex;gap:6px;justify-content:center;padding:10px}.tc-dots i{width:12px;height:12px;border-radius:50%;background:#F0E2C0}.tc-dots i.on{background:#2E9E5B}'+
'.tc-end{text-align:center}.tc-end .tc-big{animation:tcPop .6s}.tc-end h3{font-size:30px;margin:8px 0}'+
'.tc-line{font-size:clamp(22px,6vw,36px);font-weight:800;text-align:center}.tc-line .gap{display:inline-block;min-width:3ch;border-bottom:5px solid #E3262E;color:#E3262E}'+
'.tc-count{font-size:72px;font-weight:900;color:#E3262E}.tc-note{font-size:14px;color:#7A6A58;text-align:center;max-width:520px}'+
'.tc-say{display:inline-block;background:#fff;border-radius:14px;padding:6px 12px;font-size:20px;font-weight:800;box-shadow:0 3px 0 rgba(0,0,0,.1)}'+
'.tc-card:disabled{color:inherit;opacity:.5}.tc-card.ok:disabled{opacity:1}'+
'.tc-chip{background:#fff;border-radius:999px;padding:4px 10px;font-size:13px;font-weight:800}'+
'.tc-bub{position:absolute;left:50%;top:70px;transform:translateX(-50%);background:#3A2A1A;color:#fff;border-radius:16px;padding:8px 16px;font-size:24px;font-weight:800;opacity:0;pointer-events:none;z-index:5;max-width:92vw;text-align:center}.tc-bub.on{animation:tcBub 2.6s forwards}'+
'@keyframes tcBub{0%{opacity:0}10%,80%{opacity:1}100%{opacity:0}}'+
'.tc-star{position:absolute;font-size:64px;pointer-events:none;animation:tcStar .8s forwards}'+
'@keyframes tcShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-10px)}75%{transform:translateX(10px)}}'+
'@keyframes tcUp{to{transform:translateY(calc(-100vh - 200px))}}@keyframes tcSwim{from{left:-140px}to{left:calc(100% + 40px)}}'+
'@keyframes tcPop{0%{transform:scale(.2)}70%{transform:scale(1.2)}100%{transform:scale(1)}}@keyframes tcStar{0%{opacity:1;transform:scale(.5)}100%{opacity:0;transform:translateY(-120px) scale(1.4)}}'+
'@media (prefers-reduced-motion:reduce){.tc-float,.tc-fish{animation-duration:20s!important}}';
function injectCSS(){ if(document.getElementById("tc-css")) return; var s=el("style"); s.id="tc-css"; s.textContent=CSS; document.head.appendChild(s); }

function Frame(cfg){
  injectCSS();
  var self=this, ov=el("div","tc-ov"); ov.setAttribute("role","dialog"); ov.setAttribute("aria-label",cfg.title||"Trò chơi");
  var top=el("div","tc-top"), main=el("div","tc-main"), dots=el("div","tc-dots");
  var info=LIST[cfg.type]||{ten:"Trò chơi",ic:"🎮"};
  top.innerHTML='<h2>'+info.ic+' '+esc(cfg.title||info.ten)+'</h2><span class="tc-stars">⭐ <b>0</b></span>';
  var again=el("button","tc-btn","🔊"); again.setAttribute("aria-label","Nghe lại"); top.appendChild(again);
  var close=el("button","tc-btn red","✕"); close.setAttribute("aria-label","Thoát"); top.appendChild(close);
  ov.appendChild(top); ov.appendChild(main); ov.appendChild(dots); document.body.appendChild(ov);
  this.ov=ov; this.main=main; this.dots=dots; this.stars=0; this.total=0; this.lang=cfg.lang||"en"; this.t0=Date.now(); this.alive=true; this.replay=null;
  again.onclick=function(){ if(self.replay) self.replay(); };
  close.onclick=function(){ self.finish(true); };
  this.onDone=cfg.onDone||function(){};
}
Frame.prototype.setDots=function(n,i){ var h=""; for(var k=0;k<n;k++) h+='<i class="'+(k<i?"on":"")+'"></i>'; this.dots.innerHTML=h; };
Frame.prototype.star=function(x,y){ this.stars++; this.ov.querySelector(".tc-stars b").textContent=this.stars; ding();
  var s=el("div","tc-star","⭐"); s.style.left=(x||window.innerWidth/2-30)+"px"; s.style.top=(y||window.innerHeight/2-30)+"px"; this.ov.appendChild(s); setTimeout(function(){ s.remove(); },800);
  if(Math.random()<.5){ var p=PRAISE[this.lang]||PRAISE.en; say(p[Math.floor(Math.random()*p.length)], this.lang); } };
Frame.prototype.clear=function(){ this.main.innerHTML=""; this.replay=null; };
Frame.prototype.finish=function(quit){
  if(!this.alive) return; this.alive=false; try{ speechSynthesis.cancel(); }catch(e){}
  var self=this, secs=Math.round((Date.now()-this.t0)/1000);
  if(quit){ this.ov.remove(); this.onDone({stars:this.stars,total:this.total,secs:secs,quit:true}); return; }
  this.clear(); this.dots.innerHTML="";
  var end=el("div","tc-end",'<div class="tc-big">🏆</div><h3>Giỏi quá!</h3><p class="tc-say">⭐ '+this.stars+(this.total?' / '+this.total:'')+'</p>');
  var row=el("div","tc-row"), b1=el("button","tc-btn green","Xong ✓"); row.appendChild(b1); end.appendChild(row); this.main.appendChild(end);
  say(this.lang==="zh"?"太棒了！":"Great job!", this.lang);
  b1.onclick=function(){ self.ov.remove(); self.onDone({stars:self.stars,total:self.total,secs:secs}); };
};
function cardHTML(it){ return esc(it.pic); }
function sayItem(F,it){ return say(it.say, it.lang||F.lang, null, it.show||it.say); }

/* ---------- 1. Nghe và chạm (dùng chung cho bắt bóng, câu cá, bóng đen) ---------- */
function quizLoop(F, items, level, render){
  var N=rounds(level), i=0, order=[]; while(order.length<N) order=order.concat(shuffle(items)); order=order.slice(0,N); F.total=N;
  function next(){ if(!F.alive) return; if(i>=N) return F.finish(); F.setDots(N,i); F.clear(); var tgt=order[i++]; render(tgt, function(){ setTimeout(next,700); }); }
  next();
}
function optionsFor(items,tgt,level){ return shuffle([tgt].concat(pick(items, Math.min(nOpt(level)-1, items.length-1), [tgt]))); }
function choiceGrid(F, tgt, opts, onRight, opt){
  opt=opt||{}; var g=el("div","tc-grid"); g.style.setProperty("--c", opts.length>4?3:opts.length===4?2:opts.length);
  var miss=0;
  opts.forEach(function(o){ var b=el("button","tc-card",(opt.cls?'<span class="'+opt.cls+'">':'')+cardHTML(o)+(opt.cls?'</span>':''));
    b.setAttribute("aria-label",o.vi||o.say);
    b.onclick=function(ev){ if(b.disabled) return;
      if(o===tgt){ b.classList.add("ok"); g.querySelectorAll("button").forEach(function(x){ x.disabled=true; }); F.star(ev.clientX-30, ev.clientY-30); (opt.afterRight?opt.afterRight():sayItem(F,tgt)).then(onRight); }
      else { b.classList.remove("no"); void b.offsetWidth; b.classList.add("no"); boop(); miss++; sayItem(F,o);
        if(miss>=2){ g.querySelectorAll("button").forEach(function(x,k){ if(opts[k]===tgt) x.classList.add("hint"); }); } } };
    g.appendChild(b); });
  return g;
}
function gNgheCham(F,cfg){
  quizLoop(F,cfg.items,cfg.level,function(tgt,done){
    var p=el("div","tc-prompt",'👂 <span class="tc-say">'+(F.lang==="zh"?"在哪里？":"Where is it?")+'</span>'); F.main.appendChild(p);
    F.main.appendChild(choiceGrid(F,tgt,optionsFor(cfg.items,tgt,cfg.level),done));
    F.replay=function(){ sayItem(F,tgt); }; setTimeout(F.replay,250);
  });
}
function gBongDen(F,cfg){
  quizLoop(F,cfg.items,cfg.level,function(tgt,done){
    F.main.appendChild(el("div","tc-big tc-shadow",esc(tgt.pic)));
    F.main.appendChild(choiceGrid(F,tgt,optionsFor(cfg.items,tgt,cfg.level),done));
    F.replay=null;
  });
}
function gDungSai(F,cfg){
  quizLoop(F,cfg.items,cfg.level,function(tgt,done){
    var truth=Math.random()<.5 || cfg.items.length<2, said=truth?tgt:pick(cfg.items,1,[tgt])[0];
    F.main.appendChild(el("div","tc-big",esc(tgt.pic)));
    var row=el("div","tc-row"), y=el("button","tc-card tc-yes","👍"), n=el("button","tc-card tc-no","👎"); row.appendChild(y); row.appendChild(n); F.main.appendChild(row);
    function ans(v,b,ev){ if(y.disabled) return; if(v===truth){ b.classList.add("ok"); y.disabled=n.disabled=true; F.star(ev.clientX-30,ev.clientY-30); (truth?Promise.resolve():sayItem(F,tgt)).then(done); } else { b.classList.add("no"); boop(); setTimeout(function(){ b.classList.remove("no"); },400); } }
    y.onclick=function(ev){ ans(true,y,ev); }; n.onclick=function(ev){ ans(false,n,ev); };
    F.replay=function(){ sayItem(F,said); }; setTimeout(F.replay,250);
  });
}
/* ---------- 2. Lật thẻ ---------- */
function gLatThe(F,cfg){
  var P=cfg.level>=3?6:cfg.level===2?4:3, base=shuffle(cfg.items).slice(0,Math.min(P,cfg.items.length));
  var cards=shuffle(base.concat(base)), open=[], found=0; F.total=base.length; F.setDots(base.length,0);
  var g=el("div","tc-grid"); g.style.setProperty("--c", cards.length>8?4:cards.length>6?4:3); F.main.appendChild(el("div","tc-prompt","🃏 Tìm 2 thẻ giống nhau")); F.main.appendChild(g);
  cards.forEach(function(it){ var b=el("button","tc-card back","🌟"); b.onclick=function(ev){
      if(b.dataset.open||open.length>=2) return; b.dataset.open=1; b.classList.remove("back"); b.innerHTML=cardHTML(it); sayItem(F,it); open.push([b,it]);
      if(open.length===2){ var a=open[0], c=open[1];
        if(a[1]===c[1]){ setTimeout(function(){ a[0].classList.add("ok"); c[0].classList.add("ok"); F.star(ev.clientX-30,ev.clientY-30); found++; F.setDots(base.length,found); open=[]; if(found===base.length) setTimeout(function(){ F.finish(); },900); },500); }
        else setTimeout(function(){ [a,c].forEach(function(x){ x[0].classList.add("back"); x[0].innerHTML="🌟"; delete x[0].dataset.open; }); open=[]; },1100); } };
    g.appendChild(b); });
}
/* ---------- 3. Bắt bóng bay / 4. Câu cá ---------- */
var COLORS=["#FF6B6B","#FFC72C","#4ECDC4","#7B5CD6","#FF9F1C","#2E9E5B","#3A86FF"];
function gFloat(F,cfg,kind){
  var N=rounds(cfg.level), got=0, tgt=null, timer=null, sky=el("div",kind==="fish"?"tc-sea":"tc-sky"); F.total=N;
  var prompt=el("div","tc-prompt"); prompt.style.position="relative"; prompt.style.zIndex=2;
  F.main.style.justifyContent="flex-start"; F.main.appendChild(prompt); F.main.appendChild(sky);
  var speed=cfg.level>=3?6:cfg.level===2?8:10;
  function newTarget(){ tgt=cfg.items[Math.floor(Math.random()*cfg.items.length)]; prompt.innerHTML=(kind==="fish"?"🎣 ":"🎈 ")+'<span class="tc-say">'+(F.lang==="zh"?"找一找！":"Find it!")+'</span>'; F.replay=function(){ sayItem(F,tgt); }; F.replay(); }
  function spawn(){ if(!F.alive) return; var it=Math.random()<.4?tgt:cfg.items[Math.floor(Math.random()*cfg.items.length)];
    var b=el("button",kind==="fish"?"tc-fish":"tc-float"); b.setAttribute("aria-label",it.vi||it.say);
    if(kind==="fish"){ b.innerHTML='🐟<span class="tag">'+esc(it.pic)+'</span>'; b.style.top=(18+Math.random()*62)+"%"; b.style.animationDuration=speed+"s"; }
    else { b.innerHTML='<span class="bal" style="background:'+COLORS[Math.floor(Math.random()*COLORS.length)]+'">'+esc(it.pic)+'</span>'; b.style.left=(4+Math.random()*78)+"%"; b.style.animationDuration=speed+"s"; }
    b.onclick=function(ev){ if(it===tgt){ b.remove(); got++; F.setDots(N,got); F.star(ev.clientX-30,ev.clientY-30); if(got>=N){ clearInterval(timer); sky.innerHTML=""; setTimeout(function(){ F.finish(); },700); } else setTimeout(newTarget,600); } else { boop(); sayItem(F,it); b.style.opacity=.4; } };
    b.addEventListener("animationend",function(){ b.remove(); }); sky.appendChild(b); }
  F.setDots(N,0); newTarget(); spawn(); timer=setInterval(spawn, cfg.level>=3?900:1300);
  var oldFinish=F.finish; F.finish=function(q){ clearInterval(timer); F.main.style.justifyContent=""; oldFinish.call(F,q); };
}
/* ---------- 5. Ai biến mất ---------- */
function gBienMat(F,cfg){
  var K=Math.min(cfg.level>=3?5:cfg.level===2?4:3, cfg.items.length), N=cfg.level>=2?5:4, i=0; F.total=N;
  function roundOnce(){ if(!F.alive) return; if(i>=N) return F.finish(); F.setDots(N,i++); F.clear();
    var set=shuffle(cfg.items).slice(0,K), gone=set[Math.floor(Math.random()*K)];
    var p=el("div","tc-prompt","👀 Nhìn kỹ và nhớ nhé!"), g=el("div","tc-grid"); g.style.setProperty("--c",K>4?3:K); F.main.appendChild(p); F.main.appendChild(g);
    set.forEach(function(it){ g.appendChild(el("div","tc-card",cardHTML(it))); });
    var k=0; (function s(){ if(k<set.length&&F.alive){ sayItem(F,set[k++]).then(s); } else setTimeout(cover,800); })();
    function cover(){ if(!F.alive) return; p.innerHTML='🙈 Nhắm mắt… <span class="tc-count">3</span>'; var c=3, t=setInterval(function(){ c--; var e=p.querySelector(".tc-count"); if(e) e.textContent=c; if(c<=0){ clearInterval(t); reveal(); } },700);
      g.querySelectorAll(".tc-card").forEach(function(x){ x.classList.add("back"); x.innerHTML="🎩"; }); }
    function reveal(){ if(!F.alive) return; p.innerHTML='🎩 <span class="tc-say">'+(F.lang==="zh"?"谁不见了？":"What's missing?")+'</span>'; say(F.lang==="zh"?"谁不见了？":"What's missing?",F.lang);
      g.querySelectorAll(".tc-card").forEach(function(x,j){ x.classList.remove("back"); x.innerHTML=set[j]===gone?"❔":cardHTML(set[j]); });
      var opts=shuffle([gone].concat(pick(cfg.items, Math.min(2,cfg.items.length-1), [gone])));
      F.main.appendChild(choiceGrid(F,gone,opts,function(){ setTimeout(roundOnce,600); })); }
  }
  roundOnce();
}
/* ---------- 6. Đếm ---------- */
function gDemSo(F,cfg){
  var max=cfg.level>=3?10:cfg.level===2?7:5;
  quizLoop(F,cfg.items,cfg.level,function(it,done){
    var n=1+Math.floor(Math.random()*max), big=el("div","tc-row"); big.style.fontSize=n>6?"44px":"60px"; big.style.maxWidth="560px";
    for(var k=0;k<n;k++) big.appendChild(el("span","",esc(it.pic)));
    var q=F.lang==="zh"?("几个"+(it.han||"")+"？"):("How many "+(it.plural||it.say+"s")+"?");
    F.main.appendChild(el("div","tc-prompt",'🔢 <span class="tc-say">'+esc(q)+'</span>')); F.main.appendChild(big);
    var opts=shuffle([n].concat(shuffle([1,2,3,4,5,6,7,8,9,10].filter(function(x){ return x!==n&&x<=max; })).slice(0,Math.min(nOpt(cfg.level)-1,max-1))));
    var objs=opts.map(function(v){ return {pic:String(v),say:F.lang==="zh"?NUM.zh[v]:NUM.en[v],vi:String(v)}; }), right=objs[opts.indexOf(n)];
    F.main.appendChild(choiceGrid(F,right,objs,done,{afterRight:function(){ return say(F.lang==="zh"?(NUM.zh[n]+"个"):(NUM.en[n]),F.lang); }}));
    var qd=F.lang==="zh"?q+" (jǐ gè "+String(it.show||"").split(" ").slice(1).join(" ")+"?)":q;
    F.replay=function(){ say(q,F.lang,null,qd); }; setTimeout(F.replay,250);
  });
}
/* ---------- 7. Bé làm theo ---------- */
function gLamTheo(F,cfg){
  var acts=cfg.items.filter(function(x){ return x.act; }); var useActs=acts.length>=2, pool=useActs?acts:cfg.items;
  var N=cfg.level>=2?8:6, i=0, order=[]; while(order.length<N) order=order.concat(shuffle(pool)); order=order.slice(0,N); F.total=N;
  function cmd(it){ var simon=cfg.level>=3&&Math.random()<.7;
    if(useActs) return (simon?(F.lang==="zh"?"老师说，":"Simon says, "):"")+it.say+"!";
    return F.lang==="zh"?("指一指"+(it.han||it.say)+"！"):("Show me the "+it.say+"!"); }
  function next(){ if(!F.alive) return; if(i>=N) return F.finish(); F.setDots(N,i); F.clear(); var it=order[i++], c=cmd(it);
    F.main.appendChild(el("div","tc-big",esc(it.pic))); F.main.appendChild(el("div","tc-prompt",'<span class="tc-say">'+esc(c)+'</span>'+(it.show&&it.show!==it.say?'<small>'+esc(it.show)+'</small>':'')));
    F.main.appendChild(el("p","tc-note",useActs?"Bé làm động tác. Mẹ làm cùng cho vui!":"Bé chỉ vào đồ vật thật trong nhà hoặc tranh trong sách."));
    var row=el("div","tc-row"), ok=el("button","tc-btn green","✓ Bé làm rồi"); row.appendChild(ok); F.main.appendChild(row);
    ok.onclick=function(ev){ ok.disabled=true; F.star(ev.clientX-30,ev.clientY-60); setTimeout(next,700); };
    var disp=F.lang==="zh"?(c.replace(it.say, it.show||it.say)):c;
    F.replay=function(){ say(c,F.lang,null,disp); }; setTimeout(F.replay,250); }
  next();
}
/* ---------- 8. Xếp thứ tự ---------- */
function gXepThuTu(F,cfg){
  var seq=(cfg.seq||[]).slice(0,cfg.level>=2?4:3);
  if(seq.length<3) return gLatThe(F,cfg);
  var N=cfg.level>=2?3:2, r=0; F.total=N;
  function play(){ if(!F.alive) return; if(r>=N) return F.finish(); F.setDots(N,r++); F.clear(); var pos=0;
    F.main.appendChild(el("div","tc-prompt","🧩 Chạm theo thứ tự: cái gì trước, cái gì sau?"));
    var g=el("div","tc-grid"); g.style.setProperty("--c",seq.length); F.main.appendChild(g);
    var sh=shuffle(seq); if(sh.every(function(x,k){ return x===seq[k]; })) sh=sh.reverse();
    sh.forEach(function(s){ var b=el("button","tc-card",esc(s.pic)+'<span class="lb"></span>'); b.onclick=function(ev){ if(b.disabled) return;
        if(s===seq[pos]){ b.disabled=true; b.classList.add("ok"); b.querySelector(".lb").textContent=(pos+1); say(s.cap,F.lang); pos++; if(pos===seq.length){ F.star(ev.clientX-30,ev.clientY-30); setTimeout(play,1400); } }
        else { b.classList.remove("no"); void b.offsetWidth; b.classList.add("no"); boop(); } };
      g.appendChild(b); });
    F.replay=function(){ var k=0; (function s(){ if(k<seq.length) say(seq[k++].cap,F.lang).then(s); })(); };
  }
  play();
}
/* ---------- 9. Hát điền từ ---------- */
function gKaraoke(F,cfg){
  var lines=(cfg.phrases||[]).filter(function(p){ return p.text&&p.gap&&p.text.indexOf(p.gap)>-1; });
  if(lines.length<2) lines=shuffle(cfg.items).slice(0,6).map(function(it){ return F.lang==="zh"?{text:"这是"+(it.han||it.say),gap:it.han||it.say,pic:it.pic}:{text:"This is "+(it.art||"a")+" "+it.say,gap:it.say,pic:it.pic}; });
  var N=Math.min(lines.length, cfg.level>=2?6:4), i=0, order=shuffle(lines).slice(0,N); F.total=N;
  function next(){ if(!F.alive) return; if(i>=N) return F.finish(); F.setDots(N,i); F.clear(); var L=order[i++], k=L.text.indexOf(L.gap), before=L.text.slice(0,k), after=L.text.slice(k+L.gap.length);
    F.main.appendChild(el("div","tc-big",esc(L.pic||"🎤")));
    var line=el("div","tc-line",esc(before)+'<span class="gap">?</span>'+esc(after)); F.main.appendChild(line);
    F.main.appendChild(el("p","tc-note","Nghe cả câu, rồi nghe lại: đến chỗ trống bé nói từ còn thiếu."));
    var row=el("div","tc-row"), ok=el("button","tc-btn green","✓ Bé nói rồi"); row.appendChild(ok); F.main.appendChild(row);
    F.replay=function(){ say(L.text,F.lang,.75).then(function(){ setTimeout(function(){ if(before.trim()) say(before,F.lang,.75); },600); }); };
    setTimeout(F.replay,250);
    ok.onclick=function(ev){ ok.disabled=true; line.querySelector(".gap").textContent=L.gap; F.star(ev.clientX-30,ev.clientY-60); say(L.text,F.lang,.8).then(function(){ setTimeout(next,500); }); }; }
  next();
}

var RUN = {"nghe-cham":gNgheCham,"lat-the":gLatThe,"bong-bong":function(F,c){ gFloat(F,c,"balloon"); },"cau-ca":function(F,c){ gFloat(F,c,"fish"); },
  "bong-den":gBongDen,"dung-sai":gDungSai,"ai-bien-mat":gBienMat,"dem-so":gDemSo,"lam-theo":gLamTheo,"xep-thu-tu":gXepThuTu,"karaoke":gKaraoke};

function open(cfg){
  cfg=cfg||{}; cfg.level=cfg.level||1; cfg.items=(cfg.items||[]).filter(function(x){ return x&&x.pic&&x.say; });
  var F=new Frame(cfg);
  if(cfg.items.length<2&&cfg.type!=="xep-thu-tu"&&cfg.type!=="karaoke"){ F.main.innerHTML='<p class="tc-note">Chưa có đủ từ cho trò chơi này.</p>'; return F; }
  if(!hasVoice(cfg.lang)){ var chip=el("span","tc-chip","🗣 Mẹ đọc giúp"); chip.title=(cfg.lang==="zh"?"Máy chưa có giọng tiếng Trung":"Máy chưa có giọng tiếng Anh")+": mẹ đọc to chữ trong bong bóng."; F.ov.querySelector(".tc-top").insertBefore(chip, F.ov.querySelector(".tc-top .tc-stars")); }
  (RUN[cfg.type]||gNgheCham)(F,cfg);
  return F;
}
function mix(cfgs,onDone){
  var i=0, total={stars:0,secs:0};
  (function next(){ if(i>=cfgs.length){ if(onDone) onDone(total); return; }
    var c=Object.assign({},cfgs[i]); c.title=(c.title||"")+" ("+(i+1)+"/"+cfgs.length+")"; i++;
    c.onDone=function(r){ total.stars+=r.stars||0; total.secs+=r.secs||0; if(r.quit){ if(onDone) onDone(total); } else next(); };
    open(c); })();
}
return {LIST:LIST, open:open, mix:mix, say:say, hasVoice:hasVoice};
})();
