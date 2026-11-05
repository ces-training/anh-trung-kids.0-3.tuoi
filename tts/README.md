# Âm thanh Gemini cho phần "Nghe thử"

- Khoá API: Settings → Secrets and variables → Actions → `GEMINI_API_KEY` (không bao giờ ghi vào code).
- Nghe thử giọng: ghi `mau` vào `tts/lenh.txt` rồi commit → mở `nghe-giong.html`.
- Chọn giọng: sửa `"chon"` trong `tts/giong.json` (0 = giọng 1, 1 = giọng 2).
- Đọc toàn bộ: ghi `tat-ca` vào `tts/lenh.txt` rồi commit. Chạy lại an toàn: file đã có sẽ được bỏ qua.
- File nằm ở `am-thanh/<bac|nam|trung>/<mã>.mp3`; mã = FNV-1a 32 bit của lời bài (hàm `amKey`).
- Nghe ngấm: số vòng ghi ở `"nghe_ngam" → "vong"` trong `tts/giong.json`. Chạy `tat-ca` (hoặc `nghe-ngam`) sẽ tạo `am-thanh/nghe-ngam/<vòng>-en.mp3`, `<vòng>-zh.mp3` và `<vòng>.json`. Web ghép với thơ tiếng Việt theo giọng mẹ chọn thành 1 file khoảng 10 phút (`nghe-ngam-tron.js`). Xem kịch bản trước: `node tts/nghe-ngam.mjs kiem-tra 50 121`.
