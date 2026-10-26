# Âm thanh Gemini cho phần "Nghe thử"

- Khoá API: Settings → Secrets and variables → Actions → `GEMINI_API_KEY` (không bao giờ ghi vào code).
- Nghe thử giọng: ghi `mau` vào `tts/lenh.txt` rồi commit → mở `nghe-giong.html`.
- Chọn giọng: sửa `"chon"` trong `tts/giong.json` (0 = giọng 1, 1 = giọng 2).
- Đọc toàn bộ: ghi `tat-ca` vào `tts/lenh.txt` rồi commit. Chạy lại an toàn: file đã có sẽ được bỏ qua.
- File nằm ở `am-thanh/<bac|nam|trung>/<mã>.mp3`; mã = FNV-1a 32 bit của lời bài (hàm `amKey`).
