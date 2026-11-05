/* Ghép file nghe ngấm ngay trên máy của mẹ: Anh – Việt – Trung – Việt, lặp lại khoảng 10 phút.
   Các đoạn trên web đều là MP3 24 kHz mono 48 kbps nên chỉ cần bỏ phần đầu (ID3, khung Xing/Info) rồi nối liền. */
window.NNTRON=(function(){
var BR1=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320], BR2=[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160];
var SR={3:[44100,48000,32000],2:[22050,24000,16000],0:[11025,12000,8000]};
function frameLen(b,i){
  if(b[i]!==0xFF||(b[i+1]&0xE0)!==0xE0) return 0;
  var ver=(b[i+1]>>3)&3, layer=(b[i+1]>>1)&3; if(ver===1||layer!==1) return 0;
  var bri=(b[i+2]>>4)&15, sri=(b[i+2]>>2)&3, pad=(b[i+2]>>1)&1; if(bri===0||bri===15||sri===3) return 0;
  var br=(ver===3?BR1:BR2)[bri]*1000, sr=SR[ver][sri];
  return Math.floor((ver===3?144:72)*br/sr)+pad;
}
/* Trả về phần dữ liệu âm thanh thuần (Uint8Array) */
function strip(buf){
  var b=new Uint8Array(buf), i=0, end=b.length;
  if(b[0]===0x49&&b[1]===0x44&&b[2]===0x33){ i=10+((b[6]&127)<<21|(b[7]&127)<<14|(b[8]&127)<<7|(b[9]&127))+((b[5]&16)?10:0); }
  if(end>128&&b[end-128]===0x54&&b[end-127]===0x41&&b[end-126]===0x47) end-=128;
  var n=0; while(i<end-4&&!frameLen(b,i)&&n<65536){ i++; n++; }
  var L=frameLen(b,i);
  if(L){ for(var o=13;o<=40;o++){ var t=String.fromCharCode(b[i+o],b[i+o+1],b[i+o+2],b[i+o+3]); if(t==="Xing"||t==="Info"){ i+=L; break; } } }
  return b.subarray(i,end);
}
/* Thứ tự phát cho 1 vòng theo giọng tiếng Việt mẹ chọn */
function order(m,gi){
  var vi=(m.vi||[]).map(function(p){ var v=p.d[gi]?gi:(p.d.bac?"bac":Object.keys(p.d)[0]); return v?"../"+v+"/"+p.key+".mp3":null; }).filter(Boolean);
  var seq=[], gap=m.lang;
  for(var k=0;k<(m.lap||2);k++){
    if(m.en) seq.push(m.en.f,gap);
    if(vi.length) seq.push(vi[(2*k)%vi.length],gap);
    if(m.zh) seq.push(m.zh.f,gap);
    if(vi.length>1) seq.push(vi[(2*k+1)%vi.length],gap);
  }
  return seq;
}
var CACHE={};
function build(g,gi,base){
  base=base||"am-thanh/nghe-ngam/"; gi=gi||"bac"; var key=g+"-"+gi;
  if(CACHE[key]) return CACHE[key];
  CACHE[key]=fetch(base+g+".json").then(function(r){ if(!r.ok) throw new Error("chua-co"); return r.json(); }).then(function(m){
    var seq=order(m,gi), files={}; seq.forEach(function(f){ files[f]=1; });
    var names=Object.keys(files);
    return Promise.all(names.map(function(f){ return fetch(base+f).then(function(r){ if(!r.ok) throw new Error("thieu "+f); return r.arrayBuffer(); }); })).then(function(bufs){
      var parts={}; names.forEach(function(f,i){ parts[f]=strip(bufs[i]); });
      var blob=new Blob(seq.map(function(f){ return parts[f]; }),{type:"audio/mpeg"});
      return {url:URL.createObjectURL(blob), phut:m.phut, ten:m.ten, lap:m.lap, bai:(m.vi||[]).map(function(p){ return p.t; })};
    });
  });
  CACHE[key].catch(function(){ delete CACHE[key]; });
  return CACHE[key];
}
return {strip:strip, order:order, build:build};
})();
