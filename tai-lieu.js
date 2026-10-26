/* =====================================================================
   TÀI LIỆU TẢI VỀ — dựng ngay trên máy từ nội dung của vòng
   Mỗi nút "Tải" mở tài liệu A4: xem, Tải PDF (html2pdf), In.
   TAILIEU.open(ctx)  ctx = {g, w, code, file, title, I, days, vocab, poems,
                              extras, songs, books, obs, age, is45, giong, amKey}
   ===================================================================== */
window.TAILIEU = (function(){
"use strict";
var EMO = {hello:"👋",mommy:"👩",milk:"🍼",sleep:"😴",bath:"🛁",water:"💧",hug:"🤗",love:"❤️",eyes:"👀",smile:"😊","night night":"🌙",hands:"✋",clap:"👏",happy:"😀",hold:"🤲",feet:"🦶",kick:"🦵",peekaboo:"🙈",soft:"🧸",ball:"⚽",where:"❓",here:"📍",more:"➕","bye-bye":"👋",daddy:"👨",grandma:"👵",grandpa:"👴",baby:"👶",family:"👨‍👩‍👧",home:"🏠",dog:"🐶",cat:"🐱",duck:"🦆",chicken:"🐔",fish:"🐟",swim:"🏊",bird:"🐦",ant:"🐜",nose:"👃",mouth:"👄",ears:"👂",wave:"🙋",toes:"🦶",walk:"🚶",wash:"🧼",face:"🙂",clean:"🧽",eat:"🍽️",spoon:"🥄",yummy:"😋",bed:"🛏️",cup:"🥤",bowl:"🥣",banana:"🍌",orange:"🍊",red:"🔴",apple:"🍎",yellow:"🟡",sun:"☀️",green:"🟢",leaf:"🍃",sad:"😢",friend:"🧒",share:"🤝","thank you":"🙏",hot:"🥵",rain:"🌧️",wet:"💦",cloud:"☁️",wind:"🌬️",moon:"🌕",star:"⭐",car:"🚗",bus:"🚌","beep beep":"📯",stop:"🛑",go:"🟢",bike:"🚲",ride:"🛴","ring ring":"🔔",train:"🚆",boat:"⛵","choo choo":"🚂",rice:"🍚",field:"🌾",cow:"🐮",farm:"🚜",moo:"🐄",fly:"🦋",nest:"🪺",pond:"🪷",doctor:"🧑‍⚕️",sick:"🤒","wash hands":"🧼",teacher:"👩‍🏫",book:"📖",help:"🙌",farmer:"🧑‍🌾",plant:"🌱",carrot:"🥕",round:"⚪",lantern:"🏮",light:"💡",one:"1️⃣",two:"2️⃣",three:"3️⃣","clean up":"🧹",flower:"🌸","happy new year":"🧧",square:"🟥",flag:"🚩",sea:"🌊",crab:"🦀",mountain:"⛰️",river:"🏞️",up:"⬆️",down:"⬇️",city:"🏙️","my name":"📛","i can":"💪",school:"🏫","i love you":"💕","you did it":"🏆","see you later":"🐊"};
var EMOZ = {"妈妈":"👩","在这儿":"📍","拍拍手":"👏","再见":"👋","你好":"👋","爸爸":"👨","奶奶":"👵","外婆":"👵","宝宝":"👶","家":"🏠","狗":"🐶","猫":"🐱","鸭子":"🦆","小鸡":"🐥","鱼":"🐟","游":"🏊","小鸟":"🐦","鼻子":"👃","眼睛":"👀","嘴巴":"👄","手":"✋","脚":"🦶","走":"🚶","洗脸":"🙂","洗手":"🧼","吃饭":"🍚","勺子":"🥄","好吃":"😋","水":"💧","洗澡":"🛁","睡觉":"😴","晚安":"🌙","杯子":"🥤","碗":"🥣","牛奶":"🍼","香蕉":"🍌","橙子":"🍊","红色":"🔴","苹果":"🍎","黄色":"🟡","太阳":"☀️","绿色":"🟢","青菜":"🥬","爷爷":"👴","外公":"👴","抱抱":"🤗","爱":"❤️","开心":"😀","笑":"😊","难过":"😢","朋友":"🧒","谢谢":"🙏","给你":"🤲","热":"🥵","下雨":"🌧️","湿":"💦","风":"🌬️","云":"☁️","月亮":"🌕","星星":"⭐","汽车":"🚗","摩托车":"🛵","红灯":"🔴","绿灯":"🟢","停":"🛑","自行车":"🚲","骑":"🛴","火车":"🚆","船":"⛵","米饭":"🍚","吃":"🍽️","牛":"🐮","草":"🌿","鸟":"🐦","飞":"🦋","医生":"🧑‍⚕️","疼":"🤕","老师":"👩‍🏫","书":"📖","帮忙":"🙌","种":"🌱","萝卜":"🥕","月饼":"🥮","圆":"⚪","灯笼":"🏮","新年":"🎆","花":"🌸","新年快乐":"🧧","红包":"🧧","身体健康":"💪","国旗":"🚩","大海":"🌊","山":"⛰️","河":"🏞️","高":"📏","一二三":"🔢","四五":"🖐️","车":"🚙","我":"🙋","名字":"📛","我会":"💪","我爱你":"💕"};
function emo(w){ return EMO[String(w||"").toLowerCase()]||"⭐"; }
function emz(h){ return EMOZ[h]||"⭐"; }
function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g,function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function shuffle(a,seed){ a=a.slice(); var s=seed||7; for(var i=a.length-1;i>0;i--){ s=(s*9301+49297)%233280; var j=Math.floor(s/233280*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function uniq(list){ var seen={}; return list.filter(function(x){ if(!x.pic||seen[x.pic]) return false; seen[x.pic]=1; return true; }); }
function loadScript(src){ return new Promise(function(res,rej){ var s=document.querySelector('script[src="'+src+'"]'); if(s&&s.dataset.ok) return res(); s=document.createElement("script"); s.src=src; s.onload=function(){ s.dataset.ok=1; res(); }; s.onerror=rej; document.head.appendChild(s); }); }
var H2C="vendor/html2canvas.min.js", JSPDF="vendor/jspdf.umd.min.js";
var QRJS="vendor/qrcode.js";
var THU=["Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","Chủ nhật"];

/* ---------- kiểu trang A4 ---------- */
var CSS='.tl-ov{position:fixed;inset:0;z-index:9998;background:#5b4a3a;display:flex;flex-direction:column}'+
'.tl-bar{display:flex;gap:8px;align-items:center;padding:10px 12px;background:#FFC72C;box-shadow:0 3px 0 #E9A900;flex-wrap:wrap}'+
'.tl-bar b{flex:1;min-width:0;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
'.tl-btn{border:0;border-radius:999px;padding:9px 14px;font:inherit;font-weight:800;background:#fff;color:#3A2A1A;cursor:pointer;box-shadow:0 3px 0 rgba(0,0,0,.15)}.tl-btn.red{background:#E3262E;color:#fff}.tl-btn.green{background:#2E9E5B;color:#fff}'+
'.tl-scroll{flex:1;overflow:auto;padding:16px 0}.tl-zoom{transform-origin:top center;margin:0 auto;width:794px}'+
'.tl-doc .tl-page{margin:0}.tl-page{width:794px;height:1123px;background:#fff;color:#2d2219;margin:0 auto 16px;padding:46px 52px;box-sizing:border-box;position:relative;overflow:hidden;font-family:"Be Vietnam Pro","Segoe UI",Roboto,Arial,sans-serif;font-size:15px;line-height:1.45}'+
'.tl-hd{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #E3262E;padding-bottom:8px;margin-bottom:16px}.tl-hd h1{margin:0;font-size:26px;color:#B8141C}.tl-hd small{display:block;color:#7A6A58;font-size:13px}.tl-hd .brand{text-align:right;font-size:12px;color:#7A6A58;font-weight:700}'+
'.tl-ft{position:absolute;left:52px;right:52px;bottom:22px;font-size:11px;color:#9a8a78;display:flex;justify-content:space-between;border-top:1px solid #eee;padding-top:6px}'+
'.tl-page table{width:100%;border-collapse:collapse;font-size:13px}.tl-page th,.tl-page td{border:1px solid #E5D5AF;padding:6px 7px;vertical-align:top;text-align:left}.tl-page th{background:#FFF4CC}'+
'.tl-box{display:inline-block;width:16px;height:16px;border:2px solid #7A6A58;border-radius:4px;vertical-align:middle}'+
'.tl-poem{font-size:22px;line-height:1.7;white-space:pre-line;margin:6px 0 18px;padding:14px 20px;background:#FFFBF0;border-left:6px solid #FFC72C;border-radius:8px}'+
'.tl-poem-t{font-size:20px;font-weight:800;color:#B8141C;margin:12px 0 0}.tl-muted{color:#7A6A58;font-size:13px}'+
'.tl-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:0}.tl-card{height:300px;border:2px dashed #bbb;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:8px}'+
'.tl-card .e{font-size:110px;line-height:1.1}.tl-card .w{font-size:24px;font-weight:800}.tl-card .z{font-size:30px;font-weight:800}.tl-card .p{font-size:16px;color:#555}.tl-card .v{font-size:14px;color:#7A6A58}'+
'.tl-cards.two{grid-template-columns:repeat(2,1fr)}.tl-cards.two .tl-card{height:470px}.tl-cards.two .e{font-size:200px}'+
'.tl-row{display:flex;align-items:center;justify-content:space-between;height:120px;border-bottom:1px dashed #eee}.tl-row .e{font-size:70px}.tl-dot{width:16px;height:16px;border-radius:50%;background:#3A2A1A;display:inline-block}'+
'.tl-shadow{filter:brightness(0)}.tl-num{display:inline-flex;gap:14px}.tl-num span{width:44px;height:44px;border:2px solid #7A6A58;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:24px;font-weight:800}'+
'.tl-act{border:2px solid #F0E2C0;border-radius:14px;padding:12px 14px;margin-bottom:12px;page-break-inside:avoid}.tl-act h3{margin:0 0 4px;font-size:17px;color:#B8141C}'+
'.tl-safe{background:#FFF4CC;border-radius:12px;padding:10px 14px;font-size:13px}'+
'.tl-link{display:flex;gap:16px;align-items:center;border-bottom:1px dashed #E5D5AF;padding:10px 0}.tl-link .qr{width:96px;height:96px;flex:none}.tl-link .qr img,.tl-link .qr canvas{width:96px!important;height:96px!important}'+
'.tl-st{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.tl-st div{height:120px;border:2px dashed #ccc;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:64px}'+
'.tl-chart{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-top:10px}.tl-chart div{height:90px;border:2px solid #F0E2C0;border-radius:12px;padding:4px;font-size:12px;color:#7A6A58}'+
'.tl-lines div{border-bottom:1px solid #ccc;height:30px}'+
'.tl-print{position:absolute;left:-10000px;top:0}@media print{body.tl-printing>*:not(.tl-print){display:none!important}body.tl-printing .tl-print{position:static}.tl-print .tl-page{margin:0;page-break-after:always}@page{size:A4;margin:0}}'+
'.tl-au{background:#fff;border-radius:14px;margin:0 auto 10px;max-width:640px;padding:12px 14px;display:flex;flex-direction:column;gap:6px}.tl-au audio{width:100%}.tl-au a{font-weight:800;color:#B8141C}.tl-words{display:flex;flex-wrap:wrap;gap:8px}.tl-words button{border:0;border-radius:14px;background:#FFF4CC;padding:8px 12px;font:inherit;font-weight:700;cursor:pointer}';
function css(){ if(document.getElementById("tl-css")) return; var s=document.createElement("style"); s.id="tl-css"; s.textContent=CSS; document.head.appendChild(s); }

function page(ctx,title,sub,inner,n,N){
  return '<section class="tl-page"><div class="tl-hd"><div><h1>'+esc(title)+'</h1><small>'+esc(sub)+'</small></div><div class="brand">Vườn ươm 0–5 tuổi<br>Anh – Trung – Kids · CES<br>'+esc(ctx.code)+'</div></div>'+inner+
    '<div class="tl-ft"><span>'+esc(ctx.code+"_"+ctx.file)+'</span><span>Bản in cho gia đình · '+(n||1)+'/'+(N||1)+'</span></div></section>';
}
function subOf(ctx){ var I=ctx.I; return "Vòng "+I.vInChang+" chặng "+I.chang+" · "+(I.vong.sub||"")+" · tuần "+ctx.w+" · bé khoảng "+I.thang+" tháng"; }
function weekDays(ctx){ return ctx.days.slice((ctx.w-1)*7, ctx.w*7); }
function vocabList(ctx){
  var V=ctx.vocab||{en:[],zh:[]};
  var en=(V.en||[]).map(function(x){ return Array.isArray(x)?{w:x[0],pic:x[1],vi:x[2]||""}:{w:x,pic:emo(x),vi:""}; });
  var zh=(V.zh||[]).map(function(z){ return {h:z[0],py:z[1],vi:z[2]||"",pic:z[3]||emz(z[0])}; });
  return {en:en, zh:zh};
}

/* ---------- 00 Hướng dẫn: kế hoạch 7 ngày ---------- */
function bHuongDan(ctx){
  var D=weekDays(ctx), rows="";
  D.forEach(function(d,i){
    var tasks=[];
    if(ctx.is45){
      if(d.game&&d.game.mix) tasks.push(["Thử thách lớn", (d.en&&d.en.t)||""]);
      else { tasks.push(["Video Anh + trò chơi",(d.en&&d.en.t)||""]); tasks.push(["Video Trung + trò chơi",(d.zh&&d.zh.t)||""]); }
      tasks.push([d.special?"Hoạt động đặc biệt":"Nhiệm vụ đời thực",(d.special?d.special+". ":"")+(d.doi||"")]);
    } else {
      tasks.push(["Sáng",d.sang||""]); tasks.push(["Chơi",d.choi||""]); if(d.nn&&d.nn.l!=="none") tasks.push(["Ngoại ngữ",d.nn.t||""]);
    }
    tasks.push(["Tối",d.toi||""]);
    rows+='<tr><td style="width:96px"><b>'+THU[i]+'</b><br><span class="tl-muted">Ngày '+((ctx.w-1)*7+i+1)+'</span><br><i style="font-size:12px">“'+esc(d.chuyen||"")+'”</i></td><td>'+
      tasks.map(function(t){ return '<div style="margin-bottom:4px"><span class="tl-box"></span> <b>'+esc(t[0])+':</b> '+esc(String(t[1]).slice(0,260))+'</div>'; }).join("")+'</td></tr>';
  });
  var half=Math.ceil(D.length/2), h1=rows.split("</tr>").slice(0,4).join("</tr>")+"</tr>", h2=rows.split("</tr>").slice(4).join("</tr>");
  var head='<table><tr><th>Ngày</th><th>Việc trong ngày (tick khi xong)</th></tr>';
  return [page(ctx,"Kế hoạch 7 ngày",subOf(ctx),'<p class="tl-muted">Mẹ dán tờ này lên tủ lạnh. Làm xong việc nào, bé được tick hoặc dán một ngôi sao.</p>'+head+h1+'</table>',1,2),
          page(ctx,"Kế hoạch 7 ngày (tiếp)",subOf(ctx),head+h2+'</table><p class="tl-muted" style="margin-top:14px">Chủ nhật tuần 2: sau khi bé ngủ, mẹ điền nhật ký vòng trên web (10 phút, hạn 21:00).</p>',2,2)];
}
/* ---------- 01 Thơ ---------- */
function bTho(ctx){
  var html='', P=(ctx.poems||[]).concat(ctx.extras||[]);
  if(!P.length) html='<p>Tuần này chưa có bài thơ.</p>';
  P.forEach(function(p){
    html+='<div class="tl-poem-t">'+esc(p.t)+(p.author?' <span class="tl-muted">· '+esc(p.author)+'</span>':'')+'</div>';
    if(p.lyr) html+='<div class="tl-poem">'+esc(p.lyr)+'</div>'+(p.answer?'<p class="tl-muted">Đáp án: '+esc(p.answer)+'</p>':'')+(p.play?'<p class="tl-muted">Cách chơi: '+esc(p.play)+'</p>':'');
    else html+='<p class="tl-muted">Bài có tác giả: lời được CES bổ sung khi có phép sử dụng. Mẹ có thể tìm trong sách thơ thiếu nhi.</p>';
  });
  html+='<p class="tl-muted">Gợi ý: mẹ đọc chậm 2 lần, lần sau dừng ở tiếng cuối mỗi câu cho bé đọc tiếp.</p>';
  return [page(ctx,"Thơ – đồng dao của tuần",subOf(ctx),html)];
}
/* ---------- 02 Thẻ tranh (0–12 tháng) ---------- */
function contrastSVG(k){
  var s='<svg viewBox="0 0 200 200" width="220" height="220">';
  if(k===0){ for(var r=95;r>0;r-=19) s+='<circle cx="100" cy="100" r="'+r+'" fill="'+((r/19)%2?"#000":"#fff")+'"/>'; }
  else if(k===1){ for(var i=0;i<5;i++) for(var j=0;j<5;j++) s+='<rect x="'+i*40+'" y="'+j*40+'" width="40" height="40" fill="'+((i+j)%2?"#000":"#fff")+'"/>'; }
  else if(k===2){ for(i=0;i<10;i++) s+='<rect x="'+i*20+'" y="0" width="10" height="200" fill="#000"/>'; }
  else if(k===3){ s+='<circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="8"/><circle cx="70" cy="80" r="14"/><circle cx="130" cy="80" r="14"/><path d="M60 125 Q100 165 140 125" stroke="#000" stroke-width="10" fill="none"/>'; }
  else if(k===4){ for(i=0;i<6;i++) s+='<path d="M0 '+(i*36+10)+' L50 '+(i*36-8)+' L100 '+(i*36+10)+' L150 '+(i*36-8)+' L200 '+(i*36+10)+'" stroke="#000" stroke-width="9" fill="none"/>'; }
  else { s+='<polygon points="100,10 123,75 192,75 136,115 158,182 100,142 42,182 64,115 8,75 77,75" fill="#000"/>'; }
  return s+'</svg>';
}
function bTheTranh(ctx){
  if(ctx.I.thang<6){
    var c=''; for(var k=0;k<6;k++) c+='<div class="tl-card">'+contrastSVG(k)+'</div>';
    return [page(ctx,"Thẻ tương phản đen – trắng",subOf(ctx),'<p class="tl-muted">Cắt theo nét đứt. Giơ thẻ cách mắt bé 20–30 cm, đưa chậm sang hai bên. Mỗi lần 1–2 phút khi bé tỉnh táo.</p><div class="tl-cards" style="grid-template-columns:repeat(2,1fr)">'+c.replace(/class="tl-card"/g,'class="tl-card" style="height:285px"')+'</div>')];
  }
  var V=vocabList(ctx), items=uniq(V.en.map(function(x){ return {pic:x.pic, w:x.w, vi:x.vi}; })).slice(0,8), pages=[], per=4;
  for(var i=0;i<items.length;i+=per){ var c2=items.slice(i,i+per).map(function(x){ return '<div class="tl-card"><div class="e">'+x.pic+'</div><div class="w">'+esc(x.w)+'</div>'+(x.vi?'<div class="v">'+esc(x.vi)+'</div>':'')+'</div>'; }).join("");
    pages.push(page(ctx,"Thẻ tranh to cho mẹ giơ",subOf(ctx),'<p class="tl-muted">Cắt theo nét đứt. Mẹ giơ thẻ, nói tên bằng tiếng Việt rồi tiếng Anh, chờ bé nhìn hoặc chỉ.</p><div class="tl-cards two">'+c2+'</div>',pages.length+1,Math.ceil(items.length/per))); }
  return pages.length?pages:[page(ctx,"Thẻ tranh",subOf(ctx),'<p>Tuần này dùng đồ vật thật thay cho thẻ.</p>')];
}
/* ---------- 02 Phiếu tư duy (từ 12 tháng; 4–5 tuổi nhiều phiếu hơn) ---------- */
function bTuDuy(ctx){
  var V=vocabList(ctx), items=uniq(V.en.map(function(x){ return {pic:x.pic,w:x.w}; }).concat(V.zh.map(function(z){ return {pic:z.pic,w:z.h}; })));
  if(items.length<6) items=uniq(items.concat([{pic:"🍎"},{pic:"⚽"},{pic:"🐶"},{pic:"🚗"},{pic:"🌸"},{pic:"⭐"}]));
  var m=ctx.I.thang, out=[], seed=ctx.g*10+ctx.w;
  // P1 nối hình với bóng
  var n1=Math.min(items.length, m<24?3:m<48?4:5), L=shuffle(items,seed).slice(0,n1), R=shuffle(L,seed+3);
  var rows=''; for(var i=0;i<n1;i++) rows+='<div class="tl-row"><span class="e">'+L[i].pic+'</span><span class="tl-dot"></span><span style="flex:1"></span><span class="tl-dot"></span><span class="e tl-shadow">'+R[i].pic+'</span></div>';
  out.push(["Nối hình với bóng","Bé dùng bút sáp to nối mỗi tranh với bóng đen giống nó. Mẹ chỉ và nói tên từng tranh.",rows]);
  // P2 đi theo nét đứt
  var paths=m<30?['M40 60 L700 60','M40 60 L700 60','M40 60 L700 60']:m<48?['M40 60 Q200 0 370 60 T700 60','M40 60 L150 20 L260 100 L370 20 L480 100 L590 20 L700 60','M40 60 Q370 140 700 60']:['M40 60 L120 20 L200 100 L280 20 L360 100 L440 20 L520 100 L600 20 L700 60','M40 60 C150 -20 250 140 370 60 S590 -20 700 60','M40 90 L40 30 L150 30 L150 90 L260 90 L260 30 L370 30 L370 90 L480 90 L480 30 L590 30 L590 90 L700 90'];
  var trace=''; for(i=0;i<3;i++){ var a=items[i%items.length], b=items[(i+1)%items.length];
    trace+='<div style="display:flex;align-items:center;gap:6px;margin:18px 0"><span style="font-size:56px">'+a.pic+'</span><svg viewBox="0 0 740 120" width="520" height="90"><path d="'+paths[i]+'" fill="none" stroke="#999" stroke-width="6" stroke-dasharray="12 12" stroke-linecap="round"/></svg><span style="font-size:56px">'+b.pic+'</span></div>'; }
  out.push(["Đi theo nét đứt","Bé tô theo nét đứt từ tranh bên trái sang tranh bên phải. Cầm bút bằng cả bàn tay cũng được.",trace]);
  if(m>=25){ // P3 đếm và khoanh số
    var max=m<48?3:m<60?5:10, cnt=''; for(i=0;i<4;i++){ var it=items[(i+2)%items.length], k=1+((seed*7+i*3)%max), nums=shuffle([k].concat([1,2,3,4,5,6,7,8,9,10].filter(function(x){ return x!==k&&x<=Math.max(max,3); })).slice(0,3),seed+i).sort(function(a,b){return a-b;});
      cnt+='<div class="tl-row"><span style="font-size:46px;flex:1">'+new Array(k+1).join(it.pic+" ")+'</span><span class="tl-num">'+nums.map(function(x){ return '<span>'+x+'</span>'; }).join("")+'</span></div>'; }
    out.push(["Đếm và khoanh số","Bé đếm tranh mỗi hàng (tiếng Việt, rồi tiếng Anh: one, two, three…) và khoanh tròn số đúng.",cnt]); }
  if(m>=30){ // P4 khoanh hình khác
    var odd=''; for(i=0;i<4;i++){ var A=items[i%items.length], B=items[(i+1)%items.length], pos=(seed+i)%4, row=[A,A,A,A]; row[pos]=B;
      odd+='<div class="tl-row" style="justify-content:space-around"><span class="e">'+row.map(function(x){ return x.pic; }).join('</span><span class="e">')+'</span></div>'; }
    out.push(["Tìm hình khác","Mỗi hàng có một tranh khác các tranh còn lại. Bé khoanh tròn tranh đó và nói tên.",odd]); }
  if(ctx.is45&&ctx.vocab&&ctx.vocab.seq&&ctx.vocab.seq.length>=3){ // P5 xếp thứ tự
    var sq=ctx.vocab.seq, boxes=shuffle(sq,seed+9).map(function(s){ return '<div class="tl-card" style="height:200px"><div class="e" style="font-size:90px">'+s[0]+'</div><div class="w">'+esc(s[1])+'</div><div class="z" style="font-size:20px">'+esc(s[2]||"")+'</div></div>'; }).join("");
    var slots=sq.map(function(s,i){ return '<div class="tl-card" style="height:200px;border-style:solid"><div class="w" style="color:#ccc;font-size:60px">'+(i+1)+'</div></div>'; }).join("");
    out.push(["Xếp thứ tự","Cắt 4 tranh ở hàng trên, bé dán vào ô 1–2–3–4 theo đúng thứ tự rồi kể lại bằng tiếng Việt, tiếng Anh.",'<div class="tl-cards" style="grid-template-columns:repeat('+sq.length+',1fr)">'+boxes+'</div><p class="tl-muted">Dán vào đây:</p><div class="tl-cards" style="grid-template-columns:repeat('+sq.length+',1fr)">'+slots+'</div>']); }
  return out.map(function(p,i){ return page(ctx,"Phiếu "+(i+1)+": "+p[0],subOf(ctx),'<p class="tl-muted">'+esc(p[1])+'</p>'+p[2]+'<p class="tl-muted" style="margin-top:20px">Bé làm xong được dán 1 sticker. Mỗi phiếu chỉ 5–10 phút, dừng khi bé chán.</p>',i+1,out.length); });
}
/* ---------- 03 Vận động tinh / nhiệm vụ đời thực ---------- */
function bVanDong(ctx){
  var D=weekDays(ctx), html='';
  D.forEach(function(d,i){ var t=ctx.is45?((d.special?d.special+". ":"")+(d.doi||"")):(d.choi||""); if(!t) return;
    html+='<div class="tl-act"><h3>'+THU[i]+' · '+esc(d.chuyen||"")+'</h3><div>'+esc(t)+'</div>'+(d.ob?'<div class="tl-muted" style="margin-top:4px"><b>Ông bà làm:</b> '+esc(d.ob)+'</div>':'')+'<div style="margin-top:6px"><span class="tl-box"></span> Đã làm &nbsp; <span class="tl-box"></span> Bé thích &nbsp; <span class="tl-box"></span> Làm lại</div></div>'; });
  var safe=ctx.I.thang<6?"Bé dưới 6 tháng: chỉ nằm sấp khi thức và có mẹ cạnh bên; ngủ nằm ngửa.":"Đồ chơi phải to hơn pin đại (không lọt ống giấy vệ sinh). Không dùng hạt nhỏ, đồng xu, pin cúc, bóng bay, nam châm rời. Dây ngắn dưới 30 cm. Nước, bếp, dao kéo: luôn có người lớn.";
  var pages=[], parts=html.split('</div><div class="tl-act">');
  pages.push(page(ctx,ctx.is45?"Nhiệm vụ đời thực của tuần":"Thẻ hoạt động – vận động tinh",subOf(ctx),'<div class="tl-safe"><b>Nhắc an toàn:</b> '+esc(safe)+'</div><div style="height:12px"></div>'+html));
  return pages;
}
/* ---------- 04 Thẻ từ Anh – Trung ---------- */
function bAnhTrung(ctx){
  var V=vocabList(ctx), cards=[];
  V.en.forEach(function(x){ var z=V.zh.filter(function(q){ return q.pic===x.pic; })[0];
    cards.push('<div class="tl-card"><div class="e">'+x.pic+'</div><div class="w">'+esc(x.w)+'</div>'+(z?'<div class="z">'+esc(z.h)+'</div><div class="p">'+esc(z.py)+'</div>':'')+'<div class="v">'+esc(x.vi||(z&&z.vi)||"")+'</div></div>'); });
  V.zh.forEach(function(z){ if(V.en.some(function(x){ return x.pic===z.pic; })) return; cards.push('<div class="tl-card"><div class="e">'+z.pic+'</div><div class="z">'+esc(z.h)+'</div><div class="p">'+esc(z.py)+'</div><div class="v">'+esc(z.vi)+'</div></div>'); });
  var pages=[], per=9, N=Math.max(1,Math.ceil(cards.length/per));
  for(var i=0;i<cards.length;i+=per) pages.push(page(ctx,"Thẻ từ Anh – Trung",subOf(ctx),'<p class="tl-muted">Cắt theo nét đứt. Mẹ đọc chữ trên thẻ (phiên âm tiếng Trung in nhỏ bên dưới). Chơi: giấu thẻ, lật thẻ, “bé ơi đưa mẹ thẻ…”.</p><div class="tl-cards">'+cards.slice(i,i+per).join("")+'</div>',pages.length+1,N));
  var B=weekDays(ctx).map(function(d){ var o=[]; if(d.nn&&d.nn.b) o.push(d.nn.b); if(d.en&&d.en.b) o.push(d.en.b); if(d.zh&&d.zh.b) o.push(d.zh.b); return o.join(" · "); }).filter(Boolean);
  if(B.length) pages.push(page(ctx,"Câu mẹ nói trong tuần (Bản B)",subOf(ctx),'<table><tr><th>Ngày</th><th>Câu ngắn mẹ tự nói đúng lúc</th></tr>'+B.map(function(b,i){ return '<tr><td>'+THU[i]+'</td><td style="font-size:16px">'+esc(b)+'</td></tr>'; }).join("")+'</table>',pages.length+1,pages.length+1));
  return pages.length?pages:[page(ctx,"Thẻ từ",subOf(ctx),'<p>Tuần này chưa có từ ngoại ngữ.</p>')];
}
/* ---------- 05 Link / danh sách video (có mã QR) ---------- */
function bLink(ctx){
  var L=(ctx.songs||[]).filter(function(s){ return s&&s.t; }), html='';
  if(!L.length) html='<p>Tuần này không có video; mẹ hát hoặc mở file âm thanh.</p>';
  L.forEach(function(s,i){ html+='<div class="tl-link"><div class="qr" data-qr="'+esc(s.u||"")+'"></div><div><b style="font-size:17px">'+esc(s.t)+'</b>'+(s.ch?'<div class="tl-muted">'+esc(s.ch)+(s.min?' · '+s.min+' phút':'')+'</div>':'')+(s.how?'<div>'+esc(s.how)+'</div>':'')+'<div class="tl-muted" style="word-break:break-all">'+esc(s.u||"(file âm thanh trong gói)")+'</div></div></div>'; });
  return [page(ctx,"Video – bài hát của tuần",subOf(ctx),'<div class="tl-safe">Quét mã QR bằng camera điện thoại. Mở qua YouTube Kids, tắt tự phát video tiếp theo, mẹ xem cùng bé'+(ctx.I.thang<18?' (bé dưới 18 tháng: chỉ bật âm thanh)':', mỗi lần dưới 10 phút')+'.</div>'+html)];
}
/* ---------- 06 Nhật ký ---------- */
function bNhatKy(ctx){
  var rows=(ctx.obs||[]).map(function(o){ return '<tr><td>'+esc(o[1])+'</td><td style="width:70px;text-align:center"><span class="tl-box"></span></td><td style="width:80px;text-align:center"><span class="tl-box"></span></td><td style="width:60px;text-align:center"><span class="tl-box"></span></td></tr>'; }).join("");
  var lines='<div class="tl-lines">'+new Array(6).join('<div></div>')+'</div>';
  return [page(ctx,"Nhật ký vòng",subOf(ctx),'<p class="tl-muted">Mẹ điền tối Chủ nhật tuần 2 rồi nhập lên web (hạn 21:00) để giữ quyền dùng web miễn phí.</p><table><tr><th>Bé có…</th><th>Có rồi</th><th>Đang tập</th><th>Chưa</th></tr>'+rows+'</table>'+
    '<h3 style="margin:18px 0 4px">Bé thích nhất trong vòng này</h3>'+lines+'<h3 style="margin:14px 0 4px">Giấc ngủ, ăn uống, sức khoẻ</h3>'+lines+'<h3 style="margin:14px 0 4px">Thời gian màn hình trung bình mỗi ngày</h3>'+'<div><span class="tl-box"></span> Dưới 15 phút &nbsp; <span class="tl-box"></span> 15–30 phút &nbsp; <span class="tl-box"></span> 30–45 phút &nbsp; <span class="tl-box"></span> Trên 45 phút</div>')];
}
/* ---------- Sách tuần ---------- */
function bSach(ctx){
  var html=(ctx.books||[]).map(function(b){ return '<div class="tl-act"><h3>📚 '+esc(b.t)+'</h3><div>'+esc([b.author,b.publisher].filter(Boolean).join(" · "))+'</div>'+(b.lang?'<div class="tl-muted">'+esc(b.lang)+'</div>':'')+'</div>'; }).join("")||'<p>Tuần này đọc lại sách bé thích.</p>';
  return [page(ctx,"Sách gợi ý của tuần",subOf(ctx),html+'<div class="tl-safe">Cách đọc: mẹ chỉ tranh, gọi tên, hỏi “Đâu là…?”, chờ bé chỉ. Đọc 1 cuốn nhiều lần trong tuần tốt hơn đọc nhiều cuốn.</div>')];
}
/* ---------- 4–5 tuổi: trang sticker ---------- */
function bSticker(ctx){
  var V=vocabList(ctx), pics=uniq(V.en.map(function(x){ return {pic:x.pic}; }).concat(V.zh.map(function(z){ return {pic:z.pic}; }))).slice(0,15);
  while(pics.length<15) pics.push({pic:"⭐"});
  var chart=''; for(var i=0;i<14;i++) chart+='<div>Ngày '+(i+1)+'<br>'+THU[i%7]+'</div>';
  return [page(ctx,"Sticker chủ đề “"+(ctx.I.theme.ten||"")+"”",subOf(ctx),'<p class="tl-muted">Cắt từng sticker. Mỗi ngày bé làm đủ việc, bé tự chọn 1 sticker dán vào bảng bên dưới.</p><div class="tl-st">'+pics.map(function(p){ return '<div>'+p.pic+'</div>'; }).join("")+'</div><h3 style="margin:18px 0 0">Bảng ngôi sao 14 ngày</h3><div class="tl-chart">'+chart+'</div>')];
}

var BUILD={"07_Tho":bTho,"08_NhatKy":bNhatKy,"00":bHuongDan,"01_Tho":bTho,"01_TheTu":bAnhTrung,"02_TheTranh":bTheTranh,"02_TuDuy":bTuDuy,"02_DanhSach":bLink,"03_VanDong":bVanDong,"03_Sticker":bSticker,"04_AnhTrung":bAnhTrung,"05_Link":bLink,"05_Phieu":bTuDuy,"06_NhatKy":bNhatKy,"06_Nhiem":bVanDong,"Sach":bSach};
function builderFor(file){ var k=Object.keys(BUILD).filter(function(x){ return file.indexOf(x)===0; }).sort(function(a,b){ return b.length-a.length; })[0]; return k?BUILD[k]:null; }

function fillQR(root){
  var qs=root.querySelectorAll("[data-qr]"); if(!qs.length) return Promise.resolve();
  return loadScript(QRJS).then(function(){ qs.forEach(function(q){ var u=q.getAttribute("data-qr"); if(!u||q.childNodes.length) return; try{ new QRCode(q,{text:u,width:192,height:192,correctLevel:QRCode.CorrectLevel.M}); }catch(e){} }); }).catch(function(){});
}
function open(ctx){
  css(); var b=builderFor(ctx.file); if(!b) return false;
  var pages=b(ctx).join("");
  var ov=document.createElement("div"); ov.className="tl-ov";
  ov.innerHTML='<div class="tl-bar"><b>'+esc(ctx.code+"_"+ctx.file)+'</b><button class="tl-btn green" data-a="pdf">⬇️ Tải PDF</button><button class="tl-btn" data-a="print">🖨 In</button><button class="tl-btn red" data-a="x" aria-label="Đóng">✕</button></div><div class="tl-scroll"><div class="tl-zoom">'+pages+'</div></div>';
  document.body.appendChild(ov);
  var zoom=ov.querySelector(".tl-zoom"); function fit(){ var s=Math.min(1,(window.innerWidth-16)/794); zoom.style.transform="scale("+s+")"; zoom.style.height=(zoom.scrollHeight*s)+"px"; }
  fit(); window.addEventListener("resize",fit); fillQR(zoom).then(fit);
  var fname=(ctx.code+"_"+ctx.file).replace(/\.pdf$/i,"")+".pdf";
  ov.addEventListener("click",function(e){ var a=e.target.closest("[data-a]"); if(!a) return; var act=a.getAttribute("data-a");
    if(act==="x"){ window.removeEventListener("resize",fit); ov.remove(); return; }
    if(act==="print"){ var p=document.createElement("div"); p.className="tl-print"; p.innerHTML=pages; document.body.appendChild(p); fillQR(p).then(function(){ document.body.classList.add("tl-printing"); setTimeout(function(){ window.print(); setTimeout(function(){ document.body.classList.remove("tl-printing"); p.remove(); },500); },300); }); return; }
    if(act==="pdf"){ a.disabled=true; a.textContent="⏳ Đang tạo PDF…";
      var holder=document.createElement("div"); holder.style.cssText="position:absolute;left:0;top:0;width:794px;z-index:1;background:#fff"; holder.innerHTML='<div class="tl-doc">'+pages+'</div>'; document.body.appendChild(holder);
      Promise.all([loadScript(H2C), loadScript(JSPDF), fillQR(holder)]).then(function(){ return new Promise(function(r){ setTimeout(r,300); }); }).then(function(){
        var J=window.jspdf.jsPDF, pdf=new J({orientation:"portrait",unit:"mm",format:"a4",compress:true}), els=holder.querySelectorAll(".tl-page"), k=0;
        function next(){ if(k>=els.length) return Promise.resolve();
          var el=els[k];
          return window.html2canvas(el,{scale:2,backgroundColor:"#ffffff",useCORS:true,width:794,height:1123,windowWidth:794,scrollX:0,scrollY:-window.scrollY,logging:false}).then(function(cv){
            if(k>0) pdf.addPage("a4","portrait"); pdf.addImage(cv.toDataURL("image/jpeg",0.9),"JPEG",0,0,210,297); k++; a.textContent="⏳ Trang "+k+"/"+els.length; return next(); }); }
        return next().then(function(){ pdf.save(fname); });
      }).then(function(){ a.textContent="✓ Đã tải"; }).catch(function(){ a.textContent="Không tạo được – dùng nút In"; }).then(function(){ holder.remove(); setTimeout(function(){ a.disabled=false; a.textContent="⬇️ Tải PDF"; },2500); });
    } });
  return true;
}
/* ---------- âm thanh: danh sách nghe + tải ---------- */
function speakWord(t,lang){ try{ speechSynthesis.cancel(); var u=new SpeechSynthesisUtterance(t); u.lang=lang==="zh"?"zh-CN":"en-US"; u.rate=.8; speechSynthesis.speak(u); }catch(e){} }
function head(u){ return fetch(u,{method:"HEAD"}).then(function(r){ return r.ok; }).catch(function(){ return false; }); }
function audio(opt){ /* opt={title, items:[{t, src, note}], words:{en:[],zh:[]}, file} */
  css(); var ov=document.createElement("div"); ov.className="tl-ov";
  ov.innerHTML='<div class="tl-bar"><b>'+esc(opt.title)+'</b><button class="tl-btn red" data-a="x" aria-label="Đóng">✕</button></div><div class="tl-scroll" style="padding:16px"><div class="tl-list"></div></div>';
  document.body.appendChild(ov); var list=ov.querySelector(".tl-list");
  ov.addEventListener("click",function(e){ var a=e.target.closest("[data-a]"); if(a&&a.getAttribute("data-a")==="x"){ try{ speechSynthesis.cancel(); }catch(er){} ov.remove(); } var w=e.target.closest("[data-w]"); if(w) speakWord(w.getAttribute("data-w"), w.getAttribute("data-l")); });
  var items=opt.items||[];
  Promise.all(items.map(function(it){ return it.src?head(it.src):Promise.resolve(false); })).then(function(ok){
    var html=''; items.forEach(function(it,i){ html+='<div class="tl-au"><b>'+esc(it.t)+'</b>'+(ok[i]?'<audio controls preload="none" src="'+esc(it.src)+'"></audio><a href="'+esc(it.src)+'" download="'+esc((opt.file||"audio")+"_"+(i+1)+".mp3")+'">⬇️ Tải file MP3</a>':'<span class="tl-muted">'+esc(it.note||"File giọng đọc đang được tạo, mẹ quay lại sau 1–2 ngày.")+'</span>')+'</div>'; });
    if(opt.words){ var W=opt.words; html+='<div class="tl-au"><b>Từ vựng của tuần · bấm để nghe</b><div class="tl-words">'+
      (W.en||[]).map(function(x){ return '<button data-w="'+esc(x.w)+'" data-l="en">'+esc(x.pic)+' '+esc(x.w)+'</button>'; }).join("")+
      (W.zh||[]).map(function(z){ return '<button data-w="'+esc(z.h)+'" data-l="zh">'+esc(z.pic)+' '+esc(z.h)+' <small>'+esc(z.py)+'</small></button>'; }).join("")+'</div><span class="tl-muted">Đọc bằng giọng có sẵn trên máy. Bản MP3 giọng thật sẽ có ở mục trên khi tạo xong.</span></div>'; }
    list.innerHTML=html||'<div class="tl-au">Tuần này chưa có file âm thanh.</div>';
  });
}
return {open:open, audio:audio, vocabList:vocabList, emo:emo, emz:emz, builderFor:builderFor};
})();
