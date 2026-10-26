// Lấy lời thơ có tác giả do CES nhập trong Google Sheet "Thơ có tác giả – CES nhập lời".
// Chỉ lấy dòng có lời và đã tích "Đã có phép dùng". Ghi ra tho-ces.js cho web.
//   node tts/nhap-tho.mjs
import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CFG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tts/nguon-tho.json'), 'utf8'));
const OUT = path.join(ROOT, 'tho-ces.js');
const REPORT = path.join(ROOT, 'tts/nhap-tho-bao-cao.txt');

function parseCSV(text) {
  const rows = []; let row = [], f = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; continue; }
    if (c === '"') q = true; else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; }
    else if (c !== '\r') f += c;
  }
  if (f !== '' || row.length) { row.push(f); rows.push(row); }
  return rows;
}
const clean = t => String(t || '').replace(/\r/g, '').split('\n').map(l => l.replace(/\s+/g, ' ').trim()).join('\n').replace(/\n{3,}/g, '\n\n').trim();

async function main() {
  let r = { ok: true, status: 200 }, body;
  if (process.env.CSV_FILE) body = fs.readFileSync(process.env.CSV_FILE, 'utf8');
  else { r = await fetch(CFG.csv, { redirect: 'follow' }); body = await r.text(); }
  if (!r.ok || /^\s*<!DOCTYPE html/i.test(body)) throw new Error(`Không đọc được bảng (HTTP ${r.status}). Kiểm tra quyền chia sẻ "Bất kỳ ai có đường liên kết – Người xem".`);
  const rows = parseCSV(body); const h = rows.shift().map(x => x.trim());
  const col = name => { const i = h.indexOf(name); if (i < 0) throw new Error('Thiếu cột: ' + name); return i; };
  const C = { ma: col('Mã'), t: col('Tên bài'), au: col('Tác giả'), v: col('Vòng'), w: col('Tuần'), lyr: col('Lời thơ (CES nhập)'), ok: col('Đã có phép dùng') };
  const out = [], skipped = []; let blank = 0;
  for (const x of rows) {
    const t = clean(x[C.t]).replace(/\n/g, ' '), lyr = clean(x[C.lyr]);
    if (!t) continue;
    if (!lyr) { blank++; continue; }
    if (!/^(true|đúng|x|✓|1)$/i.test(String(x[C.ok]).trim())) { skipped.push(`${x[C.ma]} ${t}: có lời nhưng chưa tích "Đã có phép dùng"`); continue; }
    const vong = parseInt(x[C.v], 10), tuan = parseInt(x[C.w], 10) || 1;
    if (lyr.length > 2500) { skipped.push(`${x[C.ma]} ${t}: lời dài quá 2500 ký tự`); continue; }
    out.push({ ma: clean(x[C.ma]), t, author: clean(x[C.au]).replace(/\n/g, ' '), vong: vong >= 1 && vong <= 72 ? vong : null, tuan: tuan === 2 ? 2 : 1, lyr });
  }
  fs.writeFileSync(OUT, '/* Tự động tạo từ Google Sheet "Thơ có tác giả – CES nhập lời". Không sửa tay. */\nwindow.CT_THO = ' + JSON.stringify(out, null, 1) + ';\n');
  const rep = [`Lấy lúc ${new Date().toISOString()}`, `Lên web: ${out.length} bài`, `Chưa có lời: ${blank} bài`, ...skipped];
  fs.writeFileSync(REPORT, rep.join('\n') + '\n'); console.log(rep.join('\n'));
}
main().catch(e => { console.error('LỖI:', e.message); fs.writeFileSync(REPORT, 'LỖI: ' + e.message + '\n'); process.exitCode = 1; });
