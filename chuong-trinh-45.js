/* =====================================================================
   CHƯƠNG TRÌNH 4–5 TUỔI · vòng 97–144 (48–71 tháng) · 48 vòng × 14 ngày
   24 chủ đề (mỗi chủ đề 1 tháng = 2 vòng), chặng 17–24 (mỗi chặng 6 vòng).
   (Vòng 73–96 để dành cho bé 3 tuổi.)
   Mỗi ngày: Video Anh + trò chơi · Video Trung + trò chơi · Nhiệm vụ đời thực · Tối tiếng Việt.
   Màn hình tối đa ~45 phút/ngày, mẹ xem cùng.
   Đổi format để bé không chán:
   - Mỗi tuần một format: Ca nhạc → Kể chuyện → Khám phá → Thử thách (xoay vòng)
   - Mỗi ngày một trò chơi khác hôm trước; Anh và Trung trong cùng ngày khác nhau
   - Thứ Bảy: Thử thách lớn (chuỗi 3 trò) + hoạt động đặc biệt (8 kiểu xoay vòng)
   - Mỗi tháng chủ đề mới; mỗi vòng xong được 1 sticker; độ khó tăng theo tuần và theo tuổi
   Nội dung soạn tay ở noi-dung-45.js (window.CT_DETAIL45); vòng chưa soạn dùng bản tự sinh.
   ===================================================================== */
window.CT45 = (function(){
var K = window.KHUNG45 || {themes:[],formats:[],dac_biet:[],rounds:[]};
var FROM = 97, TO = 144;
var GD45 = [
 {id:6,ten:"Mầm 4 tuổi",tu:48,den:60,from:97,to:120,be:"tapdi",color:"#E3262E",
  min:["Video 8′ + trò chơi 6′","Video 8′ + trò chơi 6′","10–15 phút","5–10 phút"],
  nn:["both","both","both","both","both","both","none"],
  obs:[["en","Hát theo và làm động tác bài tiếng Anh của vòng"],["en","Nói được 4–6 từ tiếng Anh của chủ đề"],["zh","Nói được 3–4 từ tiếng Trung, đúng thanh điệu cơ bản"],["zh","Làm theo lệnh ngắn tiếng Trung (跳, 拍手…)"],["vi","Kể lại 2–3 câu chuyện của ngày bằng tiếng Việt"],["td","Hoàn thành trò chơi mức 1–2 không cần mẹ giúp"],["xh","Chờ lượt, chơi cùng mẹ vui vẻ"]]},
 {id:7,ten:"Chồi 5 tuổi",tu:60,den:72,from:121,to:144,be:"tapdi",color:"#B8141C",
  min:["Video 8′ + trò chơi 6′","Video 8′ + trò chơi 6′","10–15 phút","5–10 phút"],
  nn:["both","both","both","both","both","both","none"],
  obs:[["en","Nói câu 3–5 từ tiếng Anh về chủ đề (I like…, I can…)"],["en","Trả lời câu hỏi Yes/No, What/Where trong video"],["zh","Nói câu ngắn tiếng Trung (我喜欢…, 这是…)"],["zh","Chuyển ý Anh ↔ Trung một từ hoặc một câu ngắn"],["vi","Kể lại truyện tối bằng tiếng Việt theo tranh"],["td","Chơi trò mức 2–3, nhớ và xếp thứ tự 4 tranh"],["xh","Tự giới thiệu bản thân với người lớn"]]}
];
var FMT = {}; (K.formats||[]).forEach(function(f){ FMT[f.id]=f; });
function gdOf(g){ return g<=120?GD45[0]:GD45[1]; }
function R(g){ return K.rounds[g-FROM]||null; }
function theme(g){ var r=R(g), t=r?K.themes[r.theme_no-1]:null; return {ten:t?t.vi:"", en:t?t.en:"", bg:["home","park","vuon"][(r?r.theme_no:0)%3], no:r?r.theme_no:0}; }
function det(g){ var D=window.CT_DETAIL45; return D&&D[g]&&D[g].days&&D[g].days.length===14?D[g]:null; }
function has(g){ return g>=FROM&&g<=TO; }

/* ---------- từ vựng: bản soạn tay, hoặc tách từ khung ---------- */
var EMO = {hello:"👋",goodbye:"👋",name:"📛",friend:"🧒",happy:"😀",sad:"😢",mum:"👩",dad:"👨",brother:"👦",sister:"👧",grandma:"👵",grandpa:"👴",baby:"👶",love:"❤️",red:"🔴",blue:"🔵",yellow:"🟡",green:"🟢",pink:"🌸",circle:"⚪",square:"🟥",triangle:"🔺",star:"⭐",head:"🙂",eyes:"👀",nose:"👃",mouth:"👄",ears:"👂",hands:"✋",feet:"🦶",jump:"🦘",run:"🏃",clap:"👏",apple:"🍎",banana:"🍌",orange:"🍊",rice:"🍚",milk:"🥛",water:"💧",dog:"🐶",cat:"🐱",fish:"🐟",bird:"🐦",cow:"🐮",chicken:"🐔",pig:"🐷",duck:"🦆",horse:"🐴",shirt:"👕",trousers:"👖",hat:"👒",shoes:"👟",sunny:"☀️",rainy:"🌧️",hot:"🥵",cold:"🥶",house:"🏠",bed:"🛏️",table:"🍽️",chair:"🪑",door:"🚪",ball:"⚽",doll:"🪆",car:"🚗",teddy:"🧸",bike:"🚲",bus:"🚌",train:"🚆",plane:"✈️",boat:"⛵",sea:"🌊",turtle:"🐢",crab:"🦀",starfish:"⭐",whale:"🐳",shark:"🦈",octopus:"🐙",swim:"🏊",moon:"🌕",lantern:"🏮",mooncake:"🥮",firework:"🎆",teacher:"👩‍🏫",school:"🏫",book:"📖",pen:"🖊️",pencil:"✏️",bag:"🎒",crayon:"🖍️",angry:"😠",scared:"😨",tired:"😴",elephant:"🐘",monkey:"🐒",tiger:"🐯",lion:"🦁",giraffe:"🦒",panda:"🐼",big:"🐘",small:"🐭",butterfly:"🦋",bee:"🐝",ant:"🐜",ladybird:"🐞",seed:"🌱",tree:"🌳",flower:"🌸",leaf:"🍃",doctor:"🧑‍⚕️",cook:"🧑‍🍳",firefighter:"🧑‍🚒",farmer:"🧑‍🌾",pilot:"🧑‍✈️",football:"⚽",dinosaur:"🦕",egg:"🥚",sun:"☀️",rocket:"🚀",astronaut:"🧑‍🚀",earth:"🌍",planet:"🪐",spring:"🌸",summer:"🏖️",autumn:"🍂",winter:"⛄",rain:"🌧️",wind:"🌬️",rainbow:"🌈",snow:"❄️",flag:"🚩",map:"🗺️",carrot:"🥕",bread:"🍞",shop:"🏪",one:"1️⃣",two:"2️⃣",three:"3️⃣",four:"4️⃣",five:"5️⃣"};
var ACT = {jump:1,run:1,clap:1,swim:1,kick:1,throw:1,catch:1,stomp:1,roar:1,"sit down":1,"stand up":1,"wake up":1,"brush teeth":1,sleep:1,dance:1};
function autoVocab(g){
  var r=R(g)||{}, en=[], zh=[];
  String(r.en_target||"").split(",").forEach(function(w){ w=w.trim(); var key=w.toLowerCase(); if(!w||/…|\.\.\./.test(w)) return; if(EMO[key]) en.push([w,EMO[key],"",!!ACT[key]]); });
  String(r.zh_target||"").split(",").forEach(function(p){ var m=p.trim().match(/^(\S+)\s+(.+)$/); if(!m||/…/.test(p)) return; zh.push([m[1],m[2],"",""]); });
  for(var i=0;i<zh.length;i++){ zh[i][3]=(en[i]&&en[i][1])||"⭐"; }
  return {en:en, zh:zh, en_phr:[], zh_phr:[], seq:[]};
}
function vocab(g){ var D=det(g); return (D&&D.vocab)||autoVocab(g); }

/* ---------- lịch đổi format và trò chơi ---------- */
function weekFmt(g,w){ var r=R(g); var id=r&&r.tuan&&r.tuan[w-1]?r.tuan[w-1].format:"ca-nhac"; return FMT[id]||{id:id,ten:id,games:["nghe-cham","lat-the"]}; }
function level(g,w){ var r=R(g); return (r&&r.muc_tro_choi&&r.muc_tro_choi[w-1])||1; }
function gamesOf(g){ /* gán cho cả 14 ngày, không trùng trò hôm trước, Anh ≠ Trung trong ngày */
  var out=[], prevEn=null, prevZh=null;
  for(var i=0;i<14;i++){ var w=i<7?1:2, wd=i%7, f=weekFmt(g,w), pool=f.games, L=pool.length;
    if(wd===5){ out.push({mix:true}); prevEn=prevZh=null; continue; }
    if(wd===6){ out.push({en:"lat-the",zh:"nghe-cham"}); prevEn="lat-the"; prevZh="nghe-cham"; continue; }
    var a=pool[(wd+g)%L], k=0; while((a===prevEn)&&k++<L) a=pool[(pool.indexOf(a)+1)%L];
    var b=pool[(wd+g+2)%L]; k=0; while((b===a||b===prevZh)&&k++<L) b=pool[(pool.indexOf(b)+1)%L];
    out.push({en:a,zh:b}); prevEn=a; prevZh=b; }
  return out;
}
function items(g,lang,focus){
  var v=vocab(g), list=lang==="zh"
    ? v.zh.map(function(z){ return {pic:z[3]||"⭐", say:z[0], han:z[0], show:z[0]+" "+z[1], vi:z[2], lang:"zh"}; })
    : v.en.map(function(e){ return {pic:e[1], say:e[0], show:e[0], vi:e[2], act:!!e[3], lang:"en"}; });
  if(focus&&focus.length){ var f=list.filter(function(x,i){ return focus.indexOf(i)>-1; }); if(f.length>=3) list=f; }
  return list;
}
function gameCfg(g,n,lang){
  var w=n<=7?1:2, wd=(n-1)%7, G=gamesOf(g)[n-1], D=det(g), d=D?D.days[n-1]:null, v=vocab(g), L=level(g,w);
  var focus=d&&d.words?d.words[lang]:null;
  var seq=(v.seq||[]).map(function(s){ return {pic:s[0], cap:lang==="zh"?(s[2]||s[1]):s[1]}; });
  var ph=lang==="zh"?(v.zh_phr||[]).map(function(p){ return {text:p[0], gap:p[1], pic:p[4]||""}; }):(v.en_phr||[]).map(function(p){ return {text:p[0], gap:p[1], pic:p[2]||""}; });
  if(G.mix){ var pool=weekFmt(g,w).games, a=pool[g%pool.length], b=pool[(g+1)%pool.length], c=pool[(g+2)%pool.length];
    return {mix:[{type:a,lang:"en",level:L,items:items(g,"en"),seq:seq,phrases:ph,title:"Thử thách lớn · Anh"},
                 {type:b,lang:"zh",level:L,items:items(g,"zh"),seq:(v.seq||[]).map(function(s){ return {pic:s[0],cap:s[2]||s[1]}; }),phrases:(v.zh_phr||[]).map(function(p){ return {text:p[0],gap:p[1],pic:p[4]||""}; }),title:"Thử thách lớn · Trung"},
                 {type:c,lang:"en",level:Math.min(3,L+1),items:items(g,"en"),seq:seq,phrases:ph,title:"Thử thách lớn · Anh"}]}; }
  return {type:G[lang], lang:lang, level:L, items:items(g,lang,focus), seq:seq, phrases:ph};
}

/* ---------- ngày ---------- */
function media(g){ var D=det(g); return (D&&D.media)||{en:[],zh:[]}; }
function lyrReg(g,title,lyr,author){ var CT=window.CT; if(!CT||!lyr) return null; var k="h"+g+":"+title; CT.LYR[k]=lyr; if(author&&CT.LYRA) CT.LYRA[k]=author; return k; }
function thoRows(){ return (window.CT_DG||[]).concat(window.CT_THO||[]); }
function normT(t){ return String(t||"").toLowerCase().replace(/[“”"'.,!?()]/g,"").replace(/\s+/g," ").trim(); }
function days(g){
  var D=det(g), r=R(g)||{}, G=gamesOf(g), M=media(g), v=vocab(g);
  var toiItems=[]; if(D) D.weeks.forEach(function(wk,wi){ (wk.toi_vi||[]).forEach(function(x){ var lyr=x.lyr, au=x.author||null;
      if(!lyr){ var hit=thoRows().filter(function(rr){ return rr.lyr&&normT(rr.t)===normT(x.t); })[0]; if(hit){ lyr=hit.lyr; au=hit.author||au; } }
      toiItems.push({t:x.t, w:wi+1, k:lyrReg(g,x.t,lyr,au)}); }); });
  var extras=thoRows().filter(function(rr){ return rr.lyr&&+rr.vong===g; }).map(function(rr){ var k="x"+g+":"+rr.t; window.CT.LYR[k]=rr.lyr; if(rr.author) window.CT.LYRA[k]=rr.author; return {t:rr.t,author:rr.author||"",k:k,type:rr.type||"tho",play:rr.play||"",answer:rr.answer||"",tuan:+rr.tuan||1}; });
  var out=[];
  for(var i=0;i<14;i++){
    var w=i<7?1:2, wd=i%7, f=weekFmt(g,w), d=D?D.days[i]:null, o={w:w, wd:wd, fmt:f, game:G[i], diary:i===13};
    if(d){ for(var k in d) o[k]=d[k]; }
    else { /* bản tự sinh khi vòng chưa soạn tay */
      var en=v.en.slice(0,3).map(function(x){ return x[0]; }).join(", "), zh=v.zh.slice(0,2).map(function(x){ return x[0]+" "+x[1]; }).join(", ");
      o.chuyen=(wd===5?"Thử thách lớn: ":wd===6?"Ôn cả tuần: ":"")+(r.sub||"");
      o.en={t:wd===5?"Chơi chuỗi 3 trò Anh – Trung, mẹ chấm sao.":"Xem cùng mẹ dưới 8 phút. Dừng video, bé nói: "+en+".", b:""};
      o.zh={t:wd===5?"":"Xem cùng mẹ dưới 8 phút. Dừng video, bé nói: "+zh+".", b:""};
      o.doi=wd===5?((r.tuan&&r.tuan[w-1]&&r.tuan[w-1].dac_biet_thu7)||"Hoạt động đặc biệt cuối tuần."):"Tìm trong nhà 3 đồ vật của chủ đề, nói tên bằng tiếng Anh và tiếng Trung.";
      o.toi="Đọc một bài đồng dao hoặc kể một truyện cổ tích ngắn bằng tiếng Việt."+(i===13?" Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).":"");
      o.auto=true; }
    o.special=wd===5?((d&&d.special)||(r.tuan&&r.tuan[w-1]&&r.tuan[w-1].dac_biet_thu7)||""):"";
    var ev=o.en&&typeof o.en.v==="number"?M.en[o.en.v]:null, zv=o.zh&&typeof o.zh.v==="number"?M.zh[o.zh.v]:null;
    o.enVideo=ev||null; o.zhVideo=zv||null;
    var sang=String(o.toi||""); o.lyrs=toiItems.filter(function(x){ return x.k&&sang.indexOf(x.t)>-1; }).map(function(x){ return x.k; });
    if(o.lyr){ var t=toiItems.filter(function(x){ return x.t===o.lyr&&x.k; })[0]; if(t&&o.lyrs.indexOf(t.k)<0) o.lyrs.unshift(t.k); }
    o.them=extras.filter(function(x){ return x.tuan===w; });
    o.nn={l:"both", t:""};
    out.push(o);
  }
  return out;
}
function info(g){
  var r=R(g)||{}, D=det(g), v=vocab(g), gd=gdOf(g);
  var vi=[1,2].map(function(w){ var wk=D&&D.weeks[w-1], x=wk&&wk.toi_vi&&wk.toi_vi[0]; var f=weekFmt(g,w); return {t:x?x.t:f.ten, k:null, ty:"t", fmt:f}; });
  return {g:g, chang:Math.ceil(g/6), vInChang:(g-1)%6+1, thang:Math.floor((g-1)/2), theme:theme(g), themeIdx:(r.theme_no||1)-1,
    vong:{sub:(D&&D.sub)||r.sub||"", vi:vi, en:v.en.map(function(e){ return e[0]; }), zh:v.zh.map(function(z){ return [z[0],z[1],z[2]]; })},
    gd:gd, under18:false, det:D, is45:true, fmt:[weekFmt(g,1),weekFmt(g,2)]};
}
function files(g,w){
  var I=info(g), f=weekFmt(g,w), v=vocab(g);
  return [["PDF","var(--red)","00_HuongDan.pdf","Kế hoạch 7 ngày · "+f.ten+", ô tick “đã làm”"],
    ["PDF","var(--purple)","01_TheTu_AnhTrung.pdf","Thẻ từ hai mặt Anh – Trung: "+v.en.slice(0,4).map(function(x){ return x[0]; }).join(", ")+"…"],
    ["PDF","var(--blue)","02_DanhSachVideo.pdf","Video của tuần, thời lượng, câu hỏi dừng video"],
    ["PDF","var(--green)","03_Sticker_ChuDe.pdf","Trang sticker chủ đề “"+I.theme.ten+"”"],
    ["MP3","var(--yellow-deep)","04_TuVung_AnhTrung.mp3","Từ vựng đọc chậm Anh – Trung"]];
}
return {GD:GD45, FROM:FROM, TO:TO, has:has, info:info, days:days, files:files, gameCfg:gameCfg, gamesOf:gamesOf, vocab:vocab, weekFmt:weekFmt, level:level, R:R};
})();
