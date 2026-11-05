// File nghe ngấm cho từng vòng: tiếng Anh, tiếng Trung (giọng Gemini) xen thơ, đồng dao tiếng Việt (giọng 3 miền đã có).
// Web ghép các đoạn thành 1 file MP3 khoảng 10 phút ngay trên máy của mẹ, theo giọng mẹ chọn.
//   node tts/nghe-ngam.mjs kiem-tra 50 121   -> in kịch bản, không gọi API
// Khi chạy trong tao-am-thanh.mjs (chế độ tat-ca hoặc nghe-ngam) sẽ tạo:
//   am-thanh/nghe-ngam/<vòng>-en.mp3, <vòng>-zh.mp3, <vòng>.json (thứ tự phát + độ dài từng đoạn)
import fs from 'node:fs'; import path from 'node:path'; import vm from 'node:vm'; import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIR = path.join(ROOT, 'am-thanh/nghe-ngam');
const HAN = /[一-鿿]/;
const VN = /[ăâđêôơưàáạảãằắặẳẵầấậẩẫèéẹẻẽềếệểễìíịỉĩòóọỏõồốộổỗờớợởỡùúụủũừứựửữỳýỵỷỹ]/i;

export function amKey(t) { t = String(t).trim(); let h = 0x811c9dc5; for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return ('0000000' + h.toString(16)).slice(-8); }

export function loadCtx() {
  const ctx = { window: {}, console }; ctx.window.window = ctx.window; vm.createContext(ctx);
  for (const f of ['khung-45.js', 'noi-dung.js', 'noi-dung-45.js', 'dan-gian-them.js', 'tho-ces.js', 'chuong-trinh.js', 'chuong-trinh-45.js'].filter(f => fs.existsSync(path.join(ROOT, f))))
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8').replace(/^\s*window\./gm, 'window.'), ctx, { filename: f });
  return ctx.window;
}

// "红灯停。Hóngdēng tíng." -> "红灯停。"  (bỏ phiên âm, giữ chữ Hán và dấu câu Trung)
const onlyHan = s => String(s).replace(/[^　-〿一-鿿＀-￯0-9]/g, '').trim();
const uniq = a => [...new Set(a.map(x => String(x || '').trim()).filter(Boolean))];

// Tách câu mẫu của ngày ("Red light! · 红灯！Hóngdēng!") thành phần Anh và phần Trung.
function splitB(b, en, zh) {
  for (const part of String(b || '').split(/\s+·\s+/)) {
    if (HAN.test(part)) { const z = onlyHan(part); if (z) zh.push(z); }
    else if (/[A-Za-z]/.test(part) && !VN.test(part)) en.push(part.trim());
  }
}

// Kịch bản một vòng. Không dịch sang tiếng Việt: nghe ngấm là nghe nguyên ngôn ngữ đích.
export function kichBan(W, g) {
  const CT = W.CT, I = CT.info(g), days = CT.days(g), is45 = g >= 97;
  const enW = [], zhW = [], enP = [], zhP = [];
  if (is45) {
    const v = W.CT45.vocab(g);
    v.en.forEach(x => enW.push(x[0])); v.zh.forEach(z => zhW.push(z[0]));
    (v.en_phr || []).forEach(p => enP.push(p[0])); (v.zh_phr || []).forEach(p => zhP.push(onlyHan(p[0])));
    days.forEach(d => { if (d.en && d.en.b) splitB(d.en.b, enP, zhP); if (d.zh && d.zh.b) splitB(d.zh.b, enP, zhP); });
    (v.seq || []).forEach(s => { if (s[1]) enP.push(s[1].charAt(0).toUpperCase() + s[1].slice(1) + '.'); if (s[2]) zhP.push(onlyHan(s[2]) + '。'); });
  } else {
    (I.vong.en || []).forEach(w => enW.push(w)); (I.vong.zh || []).forEach(z => zhW.push(z[0]));
    if (I.theme.en && I.theme.en.sb) splitB(I.theme.en.sb, enP, zhP);
    if (I.theme.zh && I.theme.zh.sb) splitB(I.theme.zh.sb, enP, zhP);
    days.forEach(d => { if (d.nn && d.nn.b) splitB(d.nn.b, enP, zhP); });
  }
  const ew = uniq(enW), zw = uniq(zhW), ep = uniq(enP), zp = uniq(zhP);
  // Tiếng Anh: từ (2 lần) rồi câu (2 lần); tiếng Trung tương tự. Mỗi dòng một nhịp nghỉ.
  const cap = w => w.charAt(0).toUpperCase() + w.slice(1);
  const en = ew.length + ep.length ? [...ew.map(w => `${cap(w)}. ${cap(w)}.`), '', ...ep.map(p => `${p}\n${p}`)].join('\n') : '';
  const zh = zw.length + zp.length ? [...zw.map(w => `${w}。${w}。`), '', ...zp.map(p => `${p}\n${p}`)].join('\n') : '';
  // Tiếng Việt: thơ, đồng dao của cả 2 tuần đã có lời (lời có tác giả chỉ có khi CES đã tích phép).
  const vi = []; const seen = new Set();
  const keys = new Set(Object.keys(CT.LYR).filter(k => new RegExp('^[ghx]' + g + ':').test(k)));
  ((I.vong && I.vong.vi) || []).forEach(v => { if (v && v.k) keys.add(v.k); });
  days.forEach(d => { [d.lyr, ...(d.lyrs || []), ...((d.them || []).map(x => x.k))].forEach(k => { if (k) keys.add(k); }); });
  for (const k of keys) {
    if (!CT.LYR[k]) continue;
    const lyr = String(CT.LYR[k] || '').trim(); if (!lyr || seen.has(lyr)) continue; seen.add(lyr);
    vi.push({ t: k.includes(':') ? k.slice(k.indexOf(':') + 1) : lyr.split('\n')[0], key: amKey(lyr) });
  }
  return { g, ten: I.theme.ten + (I.vong && I.vong.sub ? ' · ' + I.vong.sub : ''), en, zh, vi: vi.slice(0, 4), so: { enW: ew.length, enP: ep.length, zhW: zw.length, zhP: zp.length } };
}

export const STYLE = {
  en: 'A warm, cheerful American English-speaking preschool teacher talking to a 2- to 5-year-old. Speak slowly and clearly, with a smile in the voice. Pause about one second after every line. Natural child-directed speech, not robotic.',
  zh: '一位温柔亲切的幼儿园老师，用标准普通话对两到五岁的小朋友说话。语速慢，咬字清楚，声调准确，每句之后停顿一秒左右。亲切自然，不要夸张。'
};

const dur = f => { try { return +(+execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim()).toFixed(2); } catch { return 0; } };

export function silence(sec = 3) {
  const out = path.join(DIR, `lang-${sec}s.mp3`); if (fs.existsSync(out)) return out;
  fs.mkdirSync(DIR, { recursive: true });
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'lavfi', '-i', 'anullsrc=r=24000:cl=mono', '-t', String(sec), '-ac', '1', '-ar', '24000', '-b:a', '48k', '-write_xing', '0', '-id3v2_version', '0', out]);
  return out;
}

// Ghi thứ tự phát. Độ dài lấy từ file thật; web dùng để báo "khoảng X phút".
export function manifest(k, giong, MUC = 600) {
  const gap = dur(silence(3));
  const seg = { en: path.join(DIR, `${k.g}-en.mp3`), zh: path.join(DIR, `${k.g}-zh.mp3`) };
  const d = { en: fs.existsSync(seg.en) ? dur(seg.en) : 0, zh: fs.existsSync(seg.zh) ? dur(seg.zh) : 0 };
  const vi = k.vi.map(p => { const o = { t: p.t, key: p.key, d: {} }; for (const gi of giong) { const f = path.join(ROOT, 'am-thanh', gi, p.key + '.mp3'); if (fs.existsSync(f)) o.d[gi] = dur(f); } return o; }).filter(p => Object.keys(p.d).length);
  const viAvg = vi.length ? vi.reduce((s, p) => s + (p.d.bac || Object.values(p.d)[0]), 0) / vi.length : 0;
  const parts = (d.en ? 1 : 0) + (d.zh ? 1 : 0) + (vi.length ? 2 : 0);
  const vong = d.en + d.zh + (vi.length ? 2 * viAvg : 0) + parts * gap;
  const lap = vong ? Math.max(2, Math.min(8, Math.round(MUC / vong))) : 0;
  const j = { g: k.g, ten: k.ten, lang: 'lang-3s.mp3', en: d.en ? { f: `${k.g}-en.mp3`, d: d.en } : null, zh: d.zh ? { f: `${k.g}-zh.mp3`, d: d.zh } : null, vi, lap, phut: Math.round(lap * vong / 60) };
  fs.writeFileSync(path.join(DIR, `${k.g}.json`), JSON.stringify(j));
  return j;
}

// Tạo 2 đoạn Gemini (Anh, Trung) cho các vòng trong danh sách, rồi ghi file thứ tự.
export async function taoNgheNgam({ speak, toMp3, log, sleep, giong, vongs, voice }) {
  const W = loadCtx(); let made = 0, fail = 0, stop = false;
  for (const g of vongs) { if (stop) break;
    const k = kichBan(W, g);
    for (const l of ['en', 'zh']) {
      if (!k[l]) continue; const out = path.join(DIR, `${g}-${l}.mp3`); if (fs.existsSync(out)) continue;
      try { const a = await speak(k[l], voice[l] || 'Leda', STYLE[l]); toMp3(a.data, a.mime, out, ['-write_xing', '0', '-id3v2_version', '0']); made++; log(`nghe-ngam ${g}-${l} ✓`); }
      catch (e) { fail++; log(`nghe-ngam ${g}-${l} LỖI: ${e.message}`); if (/Hết lượt|quota|RESOURCE_EXHAUSTED/i.test(e.message)) { log('Dừng vì hết hạn mức; chạy lại sẽ làm tiếp.'); stop = true; break; } }
      await sleep(2500);
    }
    const thieu = ['en', 'zh'].filter(l => k[l] && !fs.existsSync(path.join(DIR, `${g}-${l}.mp3`)));
    if (thieu.length) { try { fs.unlinkSync(path.join(DIR, `${g}.json`)); } catch {} log(`nghe-ngam ${g}: chưa đủ đoạn (${thieu.join(', ')}), chưa đưa lên web`); continue; }
    const m = manifest(k, giong); log(`nghe-ngam ${g}: ${m.phut} phút, lặp ${m.lap} lần, ${m.vi.length} bài tiếng Việt`);
  }
  const co = fs.readdirSync(DIR).filter(f => /^\d+\.json$/.test(f)).map(f => +f.replace('.json', '')).sort((a, b) => a - b);
  fs.writeFileSync(path.join(ROOT, 'nghe-ngam.js'), '/* Tự động tạo: các vòng đã có file nghe ngấm. Không sửa tay. */\nwindow.CT_NGHE_NGAM = ' + JSON.stringify(co) + ';\n');
  return { made, fail };
}

if (process.argv[1] && process.argv[1].endsWith('nghe-ngam.mjs') && process.argv[2] === 'kiem-tra') {
  const W = loadCtx(); const vs = process.argv.slice(3).map(Number);
  for (const g of vs.length ? vs : [50, 121]) { const k = kichBan(W, g); console.log(`\n===== Vòng ${g}: ${k.ten}`, JSON.stringify(k.so)); console.log('--- EN\n' + k.en); console.log('--- ZH\n' + k.zh); console.log('--- VI', k.vi.map(v => v.t + ' [' + v.key + ']').join(' | ')); }
}
