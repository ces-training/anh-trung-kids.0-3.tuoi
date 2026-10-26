// Tạo file âm thanh bằng Gemini TTS cho các phần "Nghe thử" trên trang.
// Chạy trong GitHub Actions (khoá GEMINI_API_KEY nằm trong Secrets, không lộ ra web).
//   node tts/tao-am-thanh.mjs mau      -> tạo 2 giọng ứng viên cho mỗi miền + bản đọc thử "Cái bống"
//   node tts/tao-am-thanh.mjs tat-ca   -> đọc toàn bộ lời đồng dao/ca dao bằng giọng đã chọn của 3 miền
//   node tts/tao-am-thanh.mjs kiem-tra -> không gọi API, chỉ in danh sách bài và mã file
import fs from 'node:fs'; import path from 'node:path'; import vm from 'node:vm'; import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CFG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tts/giong.json'), 'utf8'));
const IDS_FILE = path.join(ROOT, 'tts/giong-da-tao.json');
const LOG_FILE = path.join(ROOT, 'tts/nhat-ky.txt');
const KEY = process.env.GEMINI_API_KEY;
const API = 'https://generativelanguage.googleapis.com/v1beta';
let mode = (process.argv[2] || '').trim();
if (!mode) { try { mode = fs.readFileSync(path.join(ROOT, 'tts/lenh.txt'), 'utf8').trim().split(/\s+/)[0]; } catch { mode = 'kiem-tra'; } }

const logLines = [];
function log(...a) { const s = a.join(' '); console.log(s); logLines.push(new Date().toISOString().slice(0, 19) + ' ' + s); }
function saveLog() { fs.writeFileSync(LOG_FILE, logLines.join('\n') + '\n'); }
const sleep = ms => new Promise(r => setTimeout(r, ms));

// Mã file: FNV-1a 32 bit trên chuỗi đã trim — trang web tính y hệt (hàm amKey trong index.html).
export function amKey(t) { t = String(t).trim(); let h = 0x811c9dc5; for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return ('0000000' + h.toString(16)).slice(-8); }

function loadTexts() {
  const ctx = { window: {}, console }; ctx.window.window = ctx.window; vm.createContext(ctx);
  for (const f of ['khung-45.js', 'noi-dung.js', 'noi-dung-45.js', 'dan-gian-them.js', 'tho-ces.js', 'chuong-trinh.js', 'chuong-trinh-45.js'].filter(f => fs.existsSync(path.join(ROOT, f)))) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8').replace(/^\s*window\./gm, 'window.'), ctx, { filename: f });
  const CT = ctx.window.CT; for (let g = 1; g <= 72; g++) CT.days(g); if (ctx.window.CT45) for (let g = 97; g <= 144; g++) CT.days(g);
  const uniq = new Map(); for (const k of Object.keys(CT.LYR)) { const t = String(CT.LYR[k]).trim(); if (t) uniq.set(amKey(t), t); }
  return uniq;
}

async function call(method, url, body, tries = 6) {
  for (let i = 1; i <= tries; i++) {
    const r = await fetch(url, { method, headers: { 'x-goog-api-key': KEY, 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
    const txt = await r.text(); let j; try { j = JSON.parse(txt); } catch { j = null; }
    if (r.ok) return j;
    if (r.status === 429 || r.status >= 500) {
      const m = /"retryDelay":\s*"(\d+)/.exec(txt); const wait = (m ? +m[1] + 2 : 20 * i) * 1000;
      log(`  ${r.status}, chờ ${Math.round(wait / 1000)} giây rồi thử lại (${i}/${tries})`); await sleep(wait); continue;
    }
    const e = new Error(`${r.status}: ${txt.slice(0, 600)}`); e.status = r.status; throw e;
  }
  throw new Error('Hết lượt thử lại (giới hạn tốc độ). Chạy lại sau.');
}

// Tìm dữ liệu âm thanh base64 ở bất kỳ đâu trong JSON trả về.
function findAudio(o) {
  let best = null;
  (function walk(x) {
    if (!x || typeof x !== 'object') return;
    if (typeof x.data === 'string' && x.data.length > 200) {
      const mt = x.mime_type || x.mimeType || x.type || '';
      if (!best || /audio/.test(mt)) best = { data: x.data, mime: String(mt) };
    }
    if (x.inlineData) walk(x.inlineData); if (x.inline_data) walk(x.inline_data);
    for (const v of Object.values(x)) if (v && typeof v === 'object') walk(v);
  })(o);
  return best;
}

function toMp3(b64, mime, out) {
  const buf = Buffer.from(b64, 'base64'); const tmp = out + '.tmp';
  fs.mkdirSync(path.dirname(out), { recursive: true }); fs.writeFileSync(tmp, buf);
  const isWav = buf.slice(0, 4).toString() === 'RIFF';
  const rate = (/rate=(\d+)/.exec(mime) || [])[1] || '24000';
  const inArgs = isWav ? ['-i', tmp] : ['-f', 's16le', '-ar', rate, '-ac', '1', '-i', tmp];
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...inArgs, '-ac', '1', '-ar', '24000', '-b:a', '48k', out]);
  fs.unlinkSync(tmp);
}

async function speak(text, voice) {
  const body = {
    model: CFG.model,
    input: [{ type: 'user_input', content: [{ type: 'text', text, annotations: [{ type: 'speech_metadata', style: CFG.phong_cach }] }] }],
    response_format: { type: 'audio' },
    generation_config: { speech_config: [{ voice }] }
  };
  const j = await call('POST', `${API}/interactions`, body);
  const a = findAudio(j); if (!a) throw new Error('Không thấy âm thanh trong phản hồi: ' + JSON.stringify(j).slice(0, 400));
  return a;
}

async function createVoice(key, i, desc) {
  const base = { model: CFG.model, type: 'prompted', display_name: `ces-${key}-${i + 1}`, language_code: 'vi-VN', prompted: { input: desc } };
  let j;
  try { j = await call('POST', `${API}/voices`, { store: true, voice: { ...base, gender: 'FEMALE' } }); }
  catch (e) { if (e.status !== 400) throw e; log('  thử lại không kèm gender:', e.message.slice(0, 160)); j = await call('POST', `${API}/voices`, { store: true, voice: base }); }
  const id = (JSON.stringify(j).match(/voice_[A-Za-z0-9_-]+/) || [])[0];
  if (!id) throw new Error('Không đọc được mã giọng: ' + JSON.stringify(j).slice(0, 400));
  return { id, sample: findAudio(j) };
}

async function main() {
  const texts = loadTexts();
  log(`Chế độ: ${mode}. Số bài có lời để đọc: ${texts.size}.`);
  if (mode === 'kiem-tra') { for (const [k, t] of texts) log(k, '|', t.split('\n')[0]); return; }
  if (!KEY) throw new Error('Chưa có GEMINI_API_KEY trong Settings → Secrets and variables → Actions.');
  let ids = {}; try { ids = JSON.parse(fs.readFileSync(IDS_FILE, 'utf8')); } catch {}

  if (mode === 'mau') {
    const caibong = 'Cái bống là cái bống bang\nKhéo sảy khéo sàng cho mẹ nấu cơm\nMẹ bống đi chợ đường trơn\nBống ra gánh đỡ chạy cơn mưa ròng';
    for (const [key, g] of Object.entries(CFG.giong)) {
      ids[key] = ids[key] || [];
      for (let i = 0; i < g.mo_ta.length; i++) {
        try {
          if (!ids[key][i]) { log(`Tạo giọng ${key} số ${i + 1}…`); const v = await createVoice(key, i, g.mo_ta[i]); ids[key][i] = v.id; fs.writeFileSync(IDS_FILE, JSON.stringify(ids, null, 2));
            if (v.sample) toMp3(v.sample.data, v.sample.mime, path.join(ROOT, `am-thanh/mau/${key}-${i + 1}-gioi-thieu.mp3`)); }
          const out = path.join(ROOT, `am-thanh/mau/${key}-${i + 1}-cai-bong.mp3`);
          if (!fs.existsSync(out)) { log(`  đọc thử "Cái bống" bằng ${key} số ${i + 1}`); const a = await speak(caibong, ids[key][i]); toMp3(a.data, a.mime, out); }
        } catch (e) { log(`  LỖI ${key} ${i + 1}: ${e.message}`); }
        await sleep(3000);
      }
    }
    return;
  }

  if (mode === 'tat-ca') {
    let made = 0, fail = 0;
    // Làm xen kẽ: mỗi bài lần lượt cả 3 giọng, để giọng nào cũng có dần, không giọng nào bị dồn cuối.
    let stop = false;
    for (const [h, t] of texts) { if (stop) break;
      for (const [key, g] of Object.entries(CFG.giong)) {
        const vid = (ids[key] || [])[g.chon]; if (!vid) { log(`Chưa có giọng ${key} số ${g.chon + 1}; chạy chế độ "mau" trước.`); continue; }
        const out = path.join(ROOT, `am-thanh/${key}/${h}.mp3`); if (fs.existsSync(out)) continue;
        try { const a = await speak(t, vid); toMp3(a.data, a.mime, out); made++; log(`${key} ${h} ✓ ${t.split('\n')[0]}`); }
        catch (e) { fail++; log(`${key} ${h} LỖI: ${e.message}`); if (/Hết lượt|quota|RESOURCE_EXHAUSTED/i.test(e.message)) { log('Dừng vì hết hạn mức; chạy lại sẽ làm tiếp phần còn thiếu.'); stop = true; break; } }
        await sleep(2500);
      }
    }
    const have = {}; for (const key of Object.keys(CFG.giong)) { const d = path.join(ROOT, 'am-thanh', key); have[key] = fs.existsSync(d) ? fs.readdirSync(d).filter(f => f.endsWith('.mp3')).map(f => f.slice(0, 8)) : []; }
    fs.writeFileSync(path.join(ROOT, 'am-thanh/danh-sach.json'), JSON.stringify({ giong: Object.fromEntries(Object.entries(CFG.giong).map(([k, g]) => [k, g.ten])), co: have }));
    log(`Xong: tạo mới ${made}, lỗi ${fail}. Mỗi giọng có: ` + Object.entries(have).map(([k, v]) => `${k} ${v.length}/${texts.size}`).join(', '));
  }
}

main().catch(e => { log('LỖI:', e.message); process.exitCode = 1; }).finally(saveLog);
