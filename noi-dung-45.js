/* Nội dung soạn tay 4–5 tuổi (vòng 97–144). Video và lời dân gian lấy từ danh mục đã xác minh. */
window.CT_DETAIL45 = window.CT_DETAIL45 || {};
/* ---- gd6a ---- */
window.CT_DETAIL45 = window.CT_DETAIL45 || {};
/* Vườn ươm 4–5 tuổi (CES) – vòng 97–108: tuổi 4, chủ đề 1–6. Soạn theo SPEC45.md.
   Video chỉ lấy từ en_video.json, zh_video.json, ../research/anh_trung.json. Lời dân gian chỉ lấy từ tho_dongdao.json / folk_moi.json. */

/* ===================== VÒNG 97 – Chào hỏi, tên bé ===================== */
window.CT_DETAIL45[97] = {
  sub: "Chào hỏi, tên bé",
  vocab: {
    en: [["hello","👋","xin chào",false],["goodbye","🙋","tạm biệt",false],["name","📛","tên",false],["friend","🤝","bạn",false],["clap","👏","vỗ tay",true],["stretch","🙆","vươn người",true],["turn around","🔄","xoay một vòng",true],["alligator","🐊","cá sấu",false],["four","🎂","bốn (tuổi)",false]],
    zh: [["你好","nǐ hǎo","xin chào","👋"],["再见","zàijiàn","tạm biệt","🙋"],["朋友","péngyou","bạn","🤝"],["我叫","wǒ jiào","con tên là","📛"],["谢谢","xièxie","cảm ơn","🙏"],["你几岁","nǐ jǐ suì","con mấy tuổi","❓"],["四岁","sì suì","bốn tuổi","🎂"]],
    en_phr: [["Hello! My name is Bông.","name","📛"],["Hello, friend!","friend","🤝"],["Can you clap your hands?","clap","👏"],["See you later, alligator!","alligator","🐊"],["I'm four!","four","🎂"]],
    zh_phr: [["你好，朋友！","朋友","nǐ hǎo, péngyou!","Xin chào bạn!","🤝"],["我叫小明。","我叫","wǒ jiào Xiǎomíng.","Con tên là Tiểu Minh.","📛"],["我四岁。","四岁","wǒ sì suì.","Con bốn tuổi.","🎂"]],
    seq: [["👋","say hello","说你好"],["📛","say your name","说名字"],["🤝","play together","一起玩"],["🙋","say goodbye","说再见"]]
  },
  media: {
    en: [
      {t:"Hello Hello! Can You Clap Your Hands?",u:"https://www.youtube.com/watch?v=fN1Cyr0ZK9M",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"What's Your Name? (Noodle & Pals)",u:"https://www.youtube.com/watch?v=zMdq9jSaNLg",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"See You Later, Alligator – Goodbye Song",u:"https://www.youtube.com/watch?v=UQfvAlmr5g0",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Everyone Belongs – truyện tranh đọc to",u:"https://www.youtube.com/watch?v=ajd_XQ2sk2Q",kind:"story",ch:"Brightly Storytime"}
    ],
    zh: [
      {t:"你好歌 Nǐ hǎo gē – bài hát chào hỏi",u:"https://www.youtube.com/watch?v=joKEWUA7Ujc",kind:"song_action",min:1.2,ch:"LiveandLearnCan"},
      {t:"找朋友 Zhǎo péngyou – Tìm bạn",u:"https://www.youtube.com/watch?v=3AvTqNaDjqA",kind:"song_action",ch:"Nora Chen"},
      {t:"《你几岁？》Con mấy tuổi? – truyện tranh",u:"https://www.youtube.com/watch?v=2hbOwFDHMTY",kind:"story",ch:"ChineseClass365 中文加油站"}
    ]
  },
  weeks: [
    {title:"Bé chào cả nhà (Tuần Ca nhạc)", tale:{t:"Sự tích cây thì là",id:"su_tich_cay_thi_la"},
     toi_vi:[{t:"Câu đố cái gương",type:"cau_do",lyr:"Chẳng phải ảnh, chẳng phải hình\nMà ai cũng thấy mình ở trong?"},{t:"Dung dăng dung dẻ",type:"dong_dao"},{t:"Rồng rắn lên mây",type:"dong_dao"}],
     book_vi:{t:"Bé học yêu thương và chia sẻ (bộ)",author:"Nhiều tác giả, họa sĩ Việt",publisher:"NXB Trẻ"}},
    {title:"Bạn mới đến chơi (Tuần Kể chuyện)", tale:{t:"Sư Tử và Chuột Nhắt",id:"su_tu_va_chuot"},
     toi_vi:[{t:"Một cây làm chẳng nên non",type:"ca_dao",lyr:"Một cây làm chẳng nên non\nBa cây chụm lại nên hòn núi cao"}]}
  ],
  obs: [["en","Nói “Hello! My name is…” khi được hỏi tên"],["en","Làm đúng clap, stretch, turn around khi nghe"],["zh","Nói 你好, 再见 đúng lúc gặp và chia tay"],["zh","Trả lời 我四岁 hoặc giơ đúng 4 ngón tay khi nghe 你几岁"],["vi","Kể lại chuyện cây thì là bằng 2–3 câu"],["xh","Chủ động chào và hỏi tên một bạn mới"],["vd","Xoay một vòng rồi đứng im khi nhạc dừng"],["td","Nhớ tên 2 bạn và nói lại cho mẹ"]],
  days: [
    { chuyen:"Xin chào! Bé là ai?",
      en:{v:0, t:"Lần 1 – xem và làm theo. Mở bài qua YouTube Kids, tắt tự phát, mẹ ngồi cạnh bé. Mỗi lần nghe 'hello' hai mẹ con vẫy tay; nghe 'clap' thì vỗ tay. Hết bài mẹ vẫy tay nói 'Hello!' và chờ bé chào lại, chưa cần nói thêm gì.", b:"Hello! Can you clap your hands?"},
      zh:{v:0, t:"Lần 1 – nghe và vẫy. Bài chỉ hơn 1 phút nên mở 2 lần liền. Mỗi tiếng 你好 (nǐ hǎo) bé vẫy tay một cái. Lần thứ hai mẹ bấm dừng sau tiếng 你好 đầu tiên, hai mẹ con cúi chào nhau và cùng nói 你好.", b:"你好！(nǐ hǎo!)"},
      words:{en:[0,1,4],zh:[0,1,2]},
      doi:"Đi chào cả nhà: bé đi một vòng quanh nhà, gặp ai cũng vẫy tay nói 'Hello!' rồi '你好!'. Người được chào đáp lại và đập tay với bé. Cuối cùng hai mẹ con đếm xem hôm nay bé chào được mấy người.",
      ob:"Ông bà vẫy tay chào bé 'Hello', chờ bé chào lại rồi đập tay khen.",
      toi:"Kể chuyện Sự tích cây thì là bằng lời của mẹ: ngày xưa Trời đặt tên cho từng loài cây, nào cây cau, cây dừa, cây mít. Cây nhỏ đến muộn, Trời bận quá nên ấp úng 'thì… là…'. Cây nhỏ tưởng đó là tên mình, vui vẻ chạy về khoe với các bạn. Kể xong mẹ hỏi: 'Tên con là gì? Con có biết vì sao bố mẹ đặt tên ấy không?' rồi kể cho bé nghe." },
    { chuyen:"Vỗ tay, vươn người, xoay một vòng",
      en:{v:0, t:"Lần 2 – cả người cùng hát. Dọn một khoảng trống, mẹ và bé đứng dậy. Làm đúng động tác bài hát gọi: clap (vỗ tay), stretch (vươn người lên cao), turn around (xoay một vòng). Hết bài chơi nhảy đóng băng: mẹ bật lại đoạn đầu, bấm dừng bất chợt, cả hai đứng im như tượng.", b:"Stretch up high! Turn around!"},
      zh:{v:1, t:"Lần 1 – đi tìm bạn. Mẹ và bé đi vòng quanh phòng theo nhạc. Nghe 敬个礼 (jìng gè lǐ) thì đưa tay lên trán chào, nghe 握握手 (wò wo shǒu) thì bắt tay nhau, nghe 再见 (zàijiàn) thì vẫy tay tạm biệt.", b:"朋友，你好！(péngyou, nǐ hǎo!)"},
      words:{en:[4,5,6,0],zh:[2,0,1]},
      doi:"Làm thẻ tên: mẹ viết tên bé thật to lên một tờ giấy, bé tô màu rồi dán lên áo. Làm thêm 2 thẻ cho gấu bông và búp bê, bé tự đặt tên, mẹ viết hộ. Gấu bông 'chào' bé: 'Hello! My name is Teddy.' Bé đáp lại bằng tên của mình.",
      ob:"Ông bà viết tên bé lên giấy cho bé tô màu, rồi cùng đặt tên cho gấu bông.",
      toi:"Đồng dao Dung dăng dung dẻ: mẹ và bé nắm tay nhau đung đưa, đi chậm quanh phòng theo nhịp, đến câu cuối 'ngồi thụp xuống đây' thì cùng ngồi xuống. Đọc 3 lần; lần thứ ba mẹ ngừng ở tiếng cuối mỗi câu để bé đọc tiếp.", lyr:"Dung dăng dung dẻ" },
    { chuyen:"Bạn tên là gì?",
      en:{v:1, t:"Lần 1 – nghe câu hỏi. Mẹ bấm dừng ngay sau câu 'What's your name?'. Mẹ chỉ vào mình: 'My name is (tên mẹ)', rồi chỉ vào bé và chờ. Bé chỉ cần nói tên mình là đủ; mẹ nói lại cả câu 'My name is…' cho bé nghe.", b:"What's your name?"},
      zh:{v:0, t:"Lần 2 – chào kèm tên. Mỗi tiếng 你好 bé vỗ tay hai cái rồi vẫy. Hết bài mẹ cúi chào: '你好！我叫 (tên mẹ)' (nǐ hǎo! wǒ jiào…). Bé chào lại bằng tên của mình: '你好！我叫…'.", b:"你好！我叫……(nǐ hǎo! wǒ jiào…)"},
      words:{en:[2,0,3],zh:[0,3,2]},
      doi:"Gọi điện giả: mỗi người cầm một 'điện thoại' bằng khối gỗ hoặc hộp giấy. Reng reng! Bé nhấc máy: 'Hello! My name is…'. Mẹ đáp bằng tiếng Trung: '你好！我叫…'. Đổi vai 3 lần, lần cuối bé gọi cho gấu bông và tự nói giọng gấu.",
      ob:"Ông bà cầm hộp giấy làm điện thoại gọi bé, chờ bé nói 'Hello' và tên mình.",
      toi:"Đọc một cuốn trong bộ 'Bé học yêu thương và chia sẻ' (NXB Trẻ). Đọc chậm, chỉ vào tranh. Đọc xong hỏi: 'Bạn trong truyện tên là gì? Bạn ấy đang vui hay đang buồn?'." },
    { chuyen:"Tạm biệt nhé, cá sấu!",
      en:{v:2, t:"Lần 1 – chào tạm biệt kiểu con vật. Bài hát chào tạm biệt bằng tên các con vật. Mỗi lần có con vật mới, mẹ dừng lại, hai mẹ con làm động tác con đó (cá sấu thì hai tay há ra rồi ngoạm). Hết bài mẹ vẫy tay: 'See you later, alligator!'.", b:"Bye bye! See you later!"},
      zh:{v:1, t:"Lần 2 – bé làm người đi tìm bạn. Bé đi quanh phòng, dừng trước gấu bông: chào 你好, bắt tay, rồi vẫy 再见. Đến đoạn cuối mẹ vặn nhỏ tiếng, bé tự nói 再见 (zàijiàn) thật to.", b:"再见，朋友！(zàijiàn, péngyou!)"},
      words:{en:[1,7,3],zh:[1,2,0]},
      doi:"Trò 'Ai gõ cửa?': mẹ ra đứng ngoài cửa phòng, gõ cốc cốc. Bé hỏi 'Who is it?' (mẹ nhắc trước). Mẹ đáp 'Hello! It's Mum!' rồi bước vào ôm bé. Lúc ra mẹ nói 'Goodbye! 再见!'. Đổi vai: bé gõ cửa, mẹ hỏi.",
      ob:"Ông bà đứng ngoài cửa gõ cốc cốc, bé mở cửa nói 'Hello', lúc ông bà đi thì nói 'Bye bye'.",
      toi:"Kể lại Sự tích cây thì là, lần này bé đóng vai cây nhỏ: mẹ làm ông Trời ấp úng 'thì… là…', bé chạy một vòng quanh giường khoe 'Tôi là cây thì là!'. Đổi vai: bé làm ông Trời, đặt cho mẹ một cái tên thật vui." },
    { chuyen:"Bé hỏi tên mọi người",
      en:{v:1, t:"Lần 2 – bé hỏi, mẹ trả lời. Mẹ bấm dừng trước câu hỏi để bé hỏi trước: 'What's your name?'. Mẹ đáp 'My name is…'. Sau đó bé hỏi gấu bông, búp bê; mẹ nói giọng thú bông trả lời. Hết video, bé chạy đi hỏi tên bố bằng câu vừa học.", b:"Nice to meet you!"},
      zh:{v:0, t:"Lần 3 – bé nói trước video. Mẹ mở bài, bấm dừng ngay trước mỗi tiếng 你好 để bé nói trước, rồi mới bật tiếp. Bé nói trước được 3 lần thì mẹ thưởng một cái ôm thật chặt.", b:"说得好！(shuō de hǎo!)"},
      words:{en:[2,0,3],zh:[0,3,1]},
      doi:"Chào bạn thật: chiều nay khi đón bé ở lớp hoặc ra sân chơi, mẹ nhắc bé chào một bạn 'Hello!' và nói tên mình. Về nhà bé kể 'Bạn ấy tên là…'. Mẹ viết tên bạn vào một thẻ tên trống, dán lên tường cạnh thẻ của bé.",
      ob:"Khi ra sân chơi, ông bà nhắc bé chào một bạn và hỏi tên bạn ấy.",
      toi:"Câu đố dân gian: mẹ đọc 'Chẳng phải ảnh, chẳng phải hình / Mà ai cũng thấy mình ở trong?'. Bé đoán xong, hai mẹ con đứng trước gương. Bé chào chính mình: 'Xin chào, tớ là…', rồi 'Hello, I'm…' và '你好，我叫…'.", lyr:"Câu đố cái gương" },
    { chuyen:"Sân khấu nhỏ của bé",
      en:{v:0, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web. Mỗi trò xong, mẹ tô 1 ngôi sao lên tờ giấy dán tường (tối đa 3 sao). Sau đó bé chọn 1 bài yêu thích trong tuần để xem lại; lần này bé làm 'cô giáo', hô động tác trước cho mẹ làm theo."},
      zh:{v:1, t:"Nếu bé muốn, xem lại 找朋友: bé làm người dẫn đường, mẹ làm bạn được tìm."},
      special:"Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip",
      doi:"Dựng sân khấu ở phòng khách: trải một tấm thảm, xếp gấu bông làm khán giả. Bé đeo thẻ tên, bước ra cúi chào: 'Hello! My name is… 你好！我叫…'. Rồi bé hát một đoạn Hello Hello hoặc 你好歌 khoảng 1 phút. Mẹ quay clip, cả nhà vỗ tay, gửi clip cho ông bà xem.",
      toi:"Đọc lại cuốn sách tranh bé thích trong tuần. Mẹ hỏi: 'Lúc biểu diễn con thấy vui hay hồi hộp?'. Ôm bé và hát ru bằng bài quen thuộc của nhà mình." },
    { chuyen:"Chào hàng xóm, chào bạn ở công viên",
      en:{v:1, t:"Ôn nhẹ: bé chọn bài thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web. Không thêm từ mới."},
      zh:{v:0, t:"Mở 你好歌 một lần, cả nhà cùng vẫy tay chào nhau."},
      doi:"Đi công viên hoặc sang chơi nhà hàng xóm: bé chào mọi người bằng tiếng Việt, rồi khoe 1 câu 'Hello!' hoặc '你好!'. Gặp bạn nhỏ, bé hỏi 'What's your name?' (mẹ đứng cạnh nhắc). Ra đường luôn nắm tay mẹ. Về nhà đếm xem bé đã chào mấy người.",
      ob:"Ông bà dắt bé ra công viên, nhắc bé chào người quen và một bạn nhỏ.",
      toi:"Chơi Rồng rắn lên mây với cả nhà: bố làm đầu rồng, bé bám áo làm khúc đuôi, mẹ làm thầy thuốc. Chơi 2–3 lượt rồi đi ngủ. Trước khi tắt đèn, bé nói 'Good night!' và '晚安 (wǎn'ān)!' với từng người.", lyr:"Rồng rắn lên mây" },
    { chuyen:"Mọi bạn đều có một chỗ",
      en:{v:3, t:"Lần 1 – xem và chỉ. Truyện tranh đọc to về các bạn nhỏ cùng làm một buổi biểu diễn, bạn nào cũng có việc. Nếu video dài hơn 8 phút, mẹ chỉ cho xem 5 phút đầu, phần sau để mai. Mỗi khi có bạn mới xuất hiện, mẹ dừng lại, chỉ vào bạn và nói 'Hello, friend!', bé nói theo.", b:"Look! A new friend. Hello, friend!"},
      zh:{v:2, t:"Lần 1 – truyện tranh 你几岁？(nǐ jǐ suì – con mấy tuổi?). Mẹ xem trước một lần cho quen. Khi xem với bé, mỗi lần nghe 你几岁 mẹ dừng lại, giơ ngón tay đếm theo con số trong truyện. Xem xong mẹ hỏi bé 你几岁？, bé giơ 4 ngón tay.", b:"你几岁？(nǐ jǐ suì?)"},
      words:{en:[3,0,2],zh:[5,6,3]},
      doi:"Đón bạn mới: mẹ đặt một thú bông lâu rồi bé ít chơi ở cửa. Bé ra đón: 'Hello! What's your name?', đặt tên cho bạn, rồi dắt bạn đi xem từng phòng: 'This is my bed.' (mẹ nói mẫu, bé nhắc lại 1–2 từ). Cuối cùng xếp cho bạn mới một chỗ ngồi trong hàng thú bông.",
      ob:"Ông bà đưa bé một thú bông, bé chào bạn 'Hello' và đặt tên cho bạn.",
      toi:"Kể chuyện Sư Tử và Chuột Nhắt bằng lời của mẹ: Sư Tử bắt được Chuột Nhắt nhưng thương tình thả ra. Chuột hứa sẽ giúp lại, Sư Tử bật cười vì Chuột bé quá. Mẹ dừng ở đây hỏi: 'Con nghĩ Chuột bé xíu có giúp được Sư Tử không?'. Phần sau để tối mai." },
    { chuyen:"Chuyện gì xảy ra tiếp?",
      en:{v:3, t:"Lần 2 – đoán trước. Xem tiếp phần hôm qua (hoặc xem lại từ đầu nếu video ngắn). Trước mỗi lần lật trang, mẹ dừng và hỏi bằng tiếng Việt: 'Bạn này sẽ làm gì trong buổi biểu diễn?'. Bé đoán, rồi bật tiếp xem có đúng không. Bé đoán đúng, mẹ nói 'Yes! Good guess!'.", b:"What happens next?"},
      zh:{v:1, t:"Lần 3 – bé nói trước, thêm chuyển ngữ. Mẹ dừng trước mỗi 你好 và 再见 để bé nói trước rồi làm động tác. Hết bài chơi 'đổi tiếng': mẹ nói 'hello', bé nói 你好; mẹ nói 'goodbye', bé nói 再见; mẹ nói 'friend', bé nói 朋友.", b:"你好，我的朋友！(nǐ hǎo, wǒ de péngyou!)"},
      words:{en:[3,0,1],zh:[0,1,2]},
      doi:"Làm tranh 'Bạn của con': bé vẽ hoặc dán ảnh 2–3 người bạn (ở lớp, hàng xóm, anh chị họ). Mẹ viết tên dưới mỗi bạn. Bé chỉ từng bạn và nói 'This is my friend, (tên)'. Nhớ được thì bé nói thêm 朋友 (péngyou).",
      ob:"Ông bà cùng bé xem ảnh các bạn, bé chỉ và gọi tên từng bạn.",
      toi:"Kể tiếp Sư Tử và Chuột Nhắt: ít lâu sau Sư Tử bị mắc lưới, gầm mãi không thoát. Chuột Nhắt nghe tiếng chạy đến, gặm đứt từng mắt lưới cứu bạn. Mẹ hỏi: 'Bạn nhỏ có giúp được bạn lớn không? Con đã giúp bạn nào chưa?'." },
    { chuyen:"Cá sấu chào tạm biệt",
      en:{v:2, t:"Lần 2 – bé nói trước. Mẹ dừng ngay trước mỗi câu chào tạm biệt, bé nói trước 'See you later!' rồi mới bật tiếp. Sau đó chơi kể chuyện: mẹ cầm một thú bông, bé cầm một con; hai bạn chơi xong phải về nhà và chào nhau bằng câu trong bài.", b:"Time to go. See you later!"},
      zh:{v:2, t:"Lần 2 – đóng vai. Bé làm bạn nhỏ trong truyện, mẹ hỏi 你几岁？, bé đáp 我四岁 (wǒ sì suì) và giơ 4 ngón tay. Đổi vai: bé hỏi, mẹ giơ số ngón tay khác (3 hoặc 5), bé đếm ngón tay của mẹ.", b:"我四岁。(wǒ sì suì.)"},
      words:{en:[1,7,8],zh:[5,6,1]},
      doi:"Bánh sinh nhật giả: mẹ úp một cái bát nhựa làm 'bánh', cắm 4 que kem lên làm nến (không dùng lửa). Bé đếm 1, 2, 3, 4 rồi nói 'I'm four!' và '我四岁!', sau đó thổi 'phù' 4 cái, mẹ rút từng que xuống.",
      ob:"Ông bà làm bánh sinh nhật giả với 4 que kem làm nến, bé đếm rồi thổi.",
      toi:"Ca dao: 'Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao'. Mẹ giơ 1 ngón tay, rồi chụm 3 ngón lại thành 'núi'. Hỏi bé: 'Chuột và Sư Tử giúp nhau thì có giống ba cây chụm lại không?'.", lyr:"Một cây làm chẳng nên non" },
    { chuyen:"Kể lại bằng tranh",
      en:{v:3, t:"Lần 3 – kể lại bằng tranh. Xem truyện thêm một lần (tối đa 5 phút). Sau đó mẹ đưa 3 tờ giấy, bé vẽ que 3 cảnh: các bạn đến, chào nhau, cùng biểu diễn. Bé cầm từng tranh kể bằng tiếng Việt; đến tranh 2 thì nói 'Hello, friend!', tranh 3 thì nói 'Welcome!'.", b:"Welcome! Everyone belongs."},
      zh:{v:0, t:"Ôn bằng câu dài hơn: mở 你好歌, hết bài bé chào cả câu '你好！我叫…，我四岁。' (nǐ hǎo! wǒ jiào…, wǒ sì suì). Mẹ vỗ tay theo từng tiếng để bé nhớ nhịp.", b:"你好！我叫……，我四岁。(nǐ hǎo! wǒ jiào…, wǒ sì suì.)"},
      words:{en:[3,0,2],zh:[0,3,6]},
      doi:"Chơi 'Bạn ơi, chơi với tớ': mẹ để 3 thú bông ngồi riêng một góc. Bé đến từng bạn, chào 'Hello!', hỏi tên, rồi mời 'Let's play!' và dắt bạn vào vòng chơi chung. Đếm xem cuối cùng có mấy bạn cùng chơi.",
      ob:"Ông bà cùng bé mời từng thú bông vào chơi chung, đếm xem có mấy bạn.",
      toi:"Đồng dao Dung dăng dung dẻ, lần này bé tự dắt tay gấu bông đi quanh phòng và đọc cùng mẹ. Rồi bé kể lại chuyện Sư Tử và Chuột Nhắt bằng 3 câu; mẹ chỉ gợi ý 'Lúc đầu… Sau đó… Cuối cùng…'.", lyr:"Dung dăng dung dẻ" },
    { chuyen:"Bé tự giới thiệu",
      en:{v:1, t:"Lần 3 – câu dài hơn. Mở lại What's Your Name?, mẹ dừng sau câu hỏi, bé trả lời cả câu: 'Hello! My name is… I'm four.'. Sau đó bé hỏi lại mẹ. Hết video, bé đứng lên giới thiệu với bố bằng đúng câu đó.", b:"Hello! My name is… I'm four."},
      zh:{v:2, t:"Lần 3 – bé kể lại. Xem truyện 你几岁？ thêm một lần. Xong bé chỉ từng nhân vật trong tranh và đoán tuổi bằng ngón tay; mẹ hỏi 他几岁？(tā jǐ suì) cho từng nhân vật.", b:"他几岁？(tā jǐ suì?)"},
      words:{en:[0,2,8,3],zh:[5,6,3]},
      doi:"Phỏng vấn cả nhà: bé cầm 'micro' (cái thìa hoặc lõi giấy vệ sinh) đi hỏi từng người 'What's your name?'. Mỗi người trả lời bằng tiếng Anh, rồi bé hỏi tiếp bằng tiếng Trung '你几岁?'. Mẹ ghi lại những câu trả lời vui nhất.",
      ob:"Ông bà trả lời khi bé cầm 'micro' đến hỏi tên và tuổi.",
      toi:"Đọc lại sách tranh tuần trước ('Bé học yêu thương và chia sẻ'). Lần này mẹ đọc nửa câu, bé nói nửa còn lại theo tranh. Hỏi: 'Bạn nào trong truyện giống con nhất?'." },
    { chuyen:"Picnic với bạn mới",
      en:{v:3, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này khó hơn: trước khi chạm, bé nói từ thật to cho mẹ nghe. Sau đó bé chọn 1 video yêu thích trong 2 tuần để xem lại."},
      zh:{v:2, t:"Nếu bé muốn, xem lại 你几岁？ rồi bé hỏi tuổi gấu bông."},
      special:"Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung",
      doi:"Trải khăn ở sân, ban công hoặc công viên gần nhà. Mang 3 món đơn giản: chuối, bánh, nước. Bé mời gấu bông (và một bạn thật nếu được): chào 'Hello!', mời ngồi. Trước khi ăn, bé gọi tên từng món bằng tiếng Việt, mẹ nói tiếng Anh và tiếng Trung để bé nhắc lại: banana – 香蕉 (xiāngjiāo), water – 水 (shuǐ). Ăn xong nói 'Thank you! 谢谢!' rồi cùng dọn dẹp.",
      toi:"Hỏi bé: 'Hôm nay picnic con thích nhất cái gì?'. Mẹ kể cho bé nghe chuyện ngày bé mới đi lớp và chào người bạn đầu tiên." },
    { chuyen:"Vòng tròn gọi tên",
      en:{v:0, t:"Ôn nhẹ, không bài mới: bé chọn bài thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò trên web."},
      zh:{v:1, t:"Mở 找朋友 một lần, cả nhà đi vòng tròn bắt tay nhau."},
      doi:"Cả nhà ngồi thành vòng tròn. Bé lăn một quả bóng mềm, đến ai thì người đó nói 'Hello! My name is…'. Vòng sau đổi sang tiếng Trung '你好！我叫…'. Bé là người nói cuối cùng, cả nhà vỗ tay.",
      toi:"Bé kể cho mẹ nghe 1 điều vui nhất trong 2 tuần: một bạn mới, một bài hát, hay chuyện Sư Tử và Chuột Nhắt. Hát ru nhẹ rồi ngủ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 98 – Tuổi, cảm xúc vui buồn ===================== */
window.CT_DETAIL45[98] = {
  sub: "Tuổi, cảm xúc vui buồn",
  vocab: {
    en: [["happy","😊","vui",false],["sad","😢","buồn",false],["angry","😠","tức giận",false],["scared","😨","sợ",false],["calm","😌","bình tĩnh",false],["four","🎂","bốn (tuổi)",false],["clap","👏","vỗ tay",true],["stomp","🦶","dậm chân",true],["breathe","🌬️","hít thở",true]],
    zh: [["高兴","gāoxìng","vui","😊"],["难过","nánguò","buồn","😢"],["生气","shēngqì","tức giận","😠"],["你几岁","nǐ jǐ suì","con mấy tuổi","❓"],["四岁","sì suì","bốn tuổi","🎂"],["拍拍手","pāipai shǒu","vỗ vỗ tay","👏"],["笑","xiào","cười","😄"]],
    en_phr: [["I'm four!","four","🎂"],["I'm happy.","happy","😊"],["If you're happy and you know it, clap your hands!","clap","👏"],["Take a deep breath.","breath","🌬️"],["I feel sad.","sad","😢"]],
    zh_phr: [["我四岁。","四岁","wǒ sì suì.","Con bốn tuổi.","🎂"],["我很高兴！","高兴","wǒ hěn gāoxìng!","Con vui lắm!","😊"],["你几岁？","几岁","nǐ jǐ suì?","Con mấy tuổi?","❓"]],
    seq: [["😠","feel angry","生气"],["🌬️","take a deep breath","深呼吸"],["🔢","count to four","数到四"],["😌","feel calm","不生气了"]]
  },
  media: {
    en: [
      {t:"Elmo and Chris Sing about Feelings",u:"https://www.youtube.com/watch?v=m3CdFn5sN7w",kind:"explainer",ch:"Sesame Street"},
      {t:"Daniel Tiger – Take a Deep Breath and Count to 4",u:"https://www.youtube.com/watch?v=I8eAwKir5Kk",kind:"song_action",min:1.4,ch:"Daniel Tiger's Neighbourhood - Scholastic"},
      {t:"If You're Happy and You Know It",u:"https://www.youtube.com/watch?v=l4WNrvVjiTw",kind:"song_action",min:3,ch:"Super Simple Play with Caitie"},
      {t:"The Color Monster – sách tranh hoạt hình",u:"https://www.youtube.com/watch?v=wF1xeL2Hv00",kind:"story",ch:"Silly English Corner"}
    ],
    zh: [
      {t:"表情 Biǎoqíng – Nét mặt, cảm xúc",u:"https://www.youtube.com/watch?v=G6NAVJBcV9I",kind:"song_action",ch:"Cool Panda Chinese Learning"},
      {t:"如果你高兴 – If You're Happy (MandaRhymes)",u:"https://www.youtube.com/watch?v=Z4Ody_didtw",kind:"song_action",min:0.4,ch:"Crossed Strings Music"},
      {t:"《你几岁？》Con mấy tuổi? – truyện tranh",u:"https://www.youtube.com/watch?v=2hbOwFDHMTY",kind:"story",ch:"ChineseClass365 中文加油站"}
    ]
  },
  weeks: [
    {title:"Khuôn mặt nói gì? (Tuần Khám phá)", tale:{t:"Chú Dê Đen",id:"chu_de_den"},
     toi_vi:[{t:"Con bò ngủ gốc cây đa",type:"ve",lyr:"Con bò ngủ gốc cây đa\nTrời mưa mát mẻ bò ta ca cười\nCon chim bay ở trên trời\nTrời mưa ướt cánh chim rơi xuống hồ\nCái bánh nằm ở trong lò\nTrời mưa tắt lửa vừa lo vừa buồn"},{t:"Gió mùa thu mẹ ru con ngủ",type:"hat_ru",lyr:"Gió mùa thu mẹ ru con ngủ\nNăm canh dài mẹ thức đủ năm canh"}],
     book_vi:{t:"Một cái ôm thật to (thơ)",author:"Hoàng Ngọc Diệp",publisher:"NXB Kim Đồng"}},
    {title:"Ai nhanh hơn? (Tuần Thử thách)", tale:{t:"Đeo nhạc cho mèo",id:"deo_nhac_cho_meo"},
     toi_vi:[{t:"Câu đố cái gương (lấp lánh)",type:"cau_do",lyr:"Lấp la lấp lánh\nTreo ở trên tường\nTrước khi đến trường\nBé soi chải tóc\nLà cái gì?"}]}
  ],
  obs: [["en","Gọi đúng happy, sad, angry khi nhìn khuôn mặt"],["en","Nói “I'm four” và giơ đúng 4 ngón tay"],["zh","Nói 高兴, 难过, 生气 kèm nét mặt"],["zh","Trả lời 我四岁 khi được hỏi 你几岁"],["vi","Nói 1 câu về cảm xúc của mình: “Con buồn vì…”"],["xh","Tự thở sâu và đếm đến 4 khi đang giận"],["td","Phân loại tranh mặt vui và mặt không vui"],["vd","Vỗ tay, dậm chân đúng lệnh trong bài hát"]],
  days: [
    { chuyen:"Khuôn mặt vui, khuôn mặt buồn",
      en:{v:0, t:"Lần 1 – xem và chỉ. Mở qua YouTube Kids, tắt tự phát. Đây là đoạn Elmo và bạn hát về cảm xúc. Mỗi khi nghe 'happy' hoặc 'sad', mẹ dừng lại, chỉ vào khuôn mặt nhân vật và hỏi 'Happy or sad?'. Bé chỉ cần chỉ tay hoặc làm mặt theo.", b:"Are you happy or sad?"},
      zh:{v:0, t:"Lần 1 – soi gương làm mặt. Bài rất ngắn, mở 2 lần. Mẹ và bé ngồi trước gương. Nghe 高兴 (gāoxìng) thì cười thật tươi, nghe 难过 (nánguò) thì mếu, nghe 生气 (shēngqì) thì cau mày.", b:"你高兴吗？(nǐ gāoxìng ma?)"},
      words:{en:[0,1,2],zh:[0,1,2]},
      doi:"Thí nghiệm khuôn mặt: mẹ đưa bé 3 chiếc đĩa giấy (hoặc 3 tờ giấy cắt tròn). Bé vẽ 3 mặt: cười, mếu, cau mày. Mẹ hỏi 'Which one is happy?', bé giơ đúng đĩa. Đổi lại: bé hỏi, mẹ cố tình giơ sai một lần để bé sửa.",
      ob:"Ông bà vẽ cùng bé 3 khuôn mặt vui, buồn, giận rồi hỏi bé mặt nào đang vui.",
      toi:"Kể chuyện Chú Dê Đen bằng giọng nhẹ nhàng: Dê Trắng vào rừng gặp Sói thì run lẩy bẩy rồi chạy mất. Mẹ dừng lại hỏi: 'Dê Trắng đang thấy thế nào? Con làm mặt sợ cho mẹ xem.'. Rồi kể: Dê Đen gặp Sói thì đứng thẳng, nói thật to, chĩa đôi sừng ra, Sói cụp đuôi bỏ đi. Hỏi: 'Lúc ấy Dê Đen thấy thế nào?'." },
    { chuyen:"Thở thật sâu, đếm đến bốn",
      en:{v:1, t:"Lần 1 – thử thở sâu. Bài rất ngắn (khoảng 1 phút rưỡi), dạy cách bình tĩnh: hít một hơi thật sâu và đếm đến 4. Xem lần đầu chỉ để nghe. Xem lần hai mẹ và bé làm theo: hít vào, thở ra, đếm 'one, two, three, four' bằng 4 ngón tay.", b:"Take a deep breath. One, two, three, four."},
      zh:{v:1, t:"Lần 1 – vỗ tay khi vui. Bài chỉ khoảng nửa phút nên mở 3 lần liền. Lần 1 nghe 高兴 thì vỗ tay; lần 2 thêm dậm chân; lần 3 thêm nhảy lên một cái.", b:"高兴就拍拍手！(gāoxìng jiù pāipai shǒu!)"},
      words:{en:[8,5,4],zh:[0,5,6]},
      doi:"Thí nghiệm hơi thở: đặt một mẩu khăn giấy nhỏ trên bàn. Thở mạnh như lúc giận thì khăn giấy bay xa; thở chậm như lúc bình tĩnh thì khăn giấy chỉ rung nhẹ. Mẹ đếm 'one, two, three, four' cho mỗi lần hít vào. Hỏi bé: 'Thở chậm xong con thấy thế nào? Calm?'.",
      ob:"Ông bà cùng bé thổi mẩu khăn giấy trên bàn, lúc thổi mạnh lúc thổi nhẹ.",
      toi:"Vè dân gian Con bò ngủ gốc cây đa: mẹ đọc chậm từng câu và làm mặt theo: bò 'ca cười' thì cười, chim 'ướt cánh' thì xị mặt, bánh 'vừa lo vừa buồn' thì mếu. Hỏi bé: 'Trời mưa thì ai vui, ai buồn?'.", lyr:"Con bò ngủ gốc cây đa" },
    { chuyen:"Bé lên bốn tuổi",
      en:{v:0, t:"Lần 2 – làm mặt trước. Mẹ bấm dừng trước khi nhân vật đổi nét mặt và hỏi 'How does he feel?'. Bé làm mặt, mẹ nói từ: happy, sad. Hết video chơi 'đoán mặt': mẹ làm mặt, bé gọi tên bằng tiếng Anh.", b:"I feel happy!"},
      zh:{v:2, t:"Lần 1 – truyện tranh hỏi tuổi. Mẹ xem trước một lần. Khi xem cùng bé, mỗi lần nghe 你几岁 (nǐ jǐ suì) thì dừng, bé đếm ngón tay theo con số trong truyện. Cuối truyện mẹ hỏi bé, bé giơ 4 ngón tay và nói 四岁 (sì suì).", b:"你几岁？我四岁。(nǐ jǐ suì? wǒ sì suì.)"},
      words:{en:[0,1,2,3],zh:[3,4,0]},
      doi:"Đo xem bé 4 tuổi cao bao nhiêu: bé đứng sát tường, mẹ dán một miếng băng dính ở đỉnh đầu, viết 'I'm four – 我四岁'. Sau đó đo gấu bông, đo búp bê, so sánh ai cao hơn, ai thấp hơn. Bé đặt bàn tay chồng lên nhau từ sàn lên đến vạch của mình, đếm được mấy bàn tay.",
      ob:"Ông bà đánh dấu chiều cao của bé trên tường rồi so với gấu bông.",
      toi:"Đọc tập thơ 'Một cái ôm thật to' (Hoàng Ngọc Diệp, NXB Kim Đồng), chọn 1–2 bài ngắn. Đọc xong mẹ hỏi: 'Khi nào con muốn được ôm thật to?'. Ôm bé thật chặt và cùng đếm đến 4." },
    { chuyen:"Vui thì vỗ tay",
      en:{v:2, t:"Lần 1 – làm theo cảm xúc. Bài hát gọi từng động tác khi vui: clap (vỗ tay), stomp (dậm chân)… Hai mẹ con đứng dậy làm theo. Mẹ dừng trước mỗi đoạn mới, hỏi 'What's next?', bé đoán rồi bật tiếp xem có đúng không.", b:"If you're happy, clap your hands!"},
      zh:{v:0, t:"Lần 2 – nhìn mặt nhau, không cần gương. Mẹ dừng bài trước mỗi từ, làm một mặt, bé đoán 高兴, 难过 hay 生气. Rồi đổi: bé làm mặt, mẹ đoán (cố tình đoán sai 1 lần cho bé sửa).", b:"你生气了吗？(nǐ shēngqì le ma?)"},
      words:{en:[0,6,7],zh:[0,1,2]},
      doi:"Phân loại ảnh cảm xúc: mẹ tìm trong điện thoại hoặc album 6 tấm ảnh gia đình. Cùng bé xếp thành 2 nhóm: mặt vui (happy) và mặt không vui (sad, angry). Bé kể về 1 ảnh: 'Lúc đó con buồn vì…'. Đếm xem nhóm nào nhiều ảnh hơn.",
      ob:"Ông bà cùng bé xem ảnh gia đình, hỏi trong ảnh ai đang vui, ai đang buồn.",
      toi:"Kể lại Chú Dê Đen, lần này bé làm Dê Đen: đứng thẳng, nói thật to 'Tớ không sợ!'. Mẹ làm Sói, giả vờ run rồi cụp đuôi chạy. Đổi vai một lượt. Kết chuyện: Dê Trắng và Dê Đen cùng về nhà, vui vẻ ăn cỏ." },
    { chuyen:"Chai bình tĩnh",
      en:{v:1, t:"Lần 2 – bé đếm trước. Mẹ dừng ngay trước đoạn đếm, bé tự đếm 'one, two, three, four' bằng ngón tay rồi mới bật tiếp. Hết video mẹ giả vờ giận (làm mặt cau có), bé nhắc mẹ: 'Take a deep breath!' và đếm giúp mẹ.", b:"I'm calm now."},
      zh:{v:1, t:"Lần 2 – bé hát trước. Mẹ tắt tiếng ở đoạn giữa, bé hát hoặc nói 高兴 (gāoxìng) rồi mới bật tiếng lại. Mỗi lần bé nói đúng, cả hai cùng 拍拍手 (vỗ tay).", b:"我很高兴！(wǒ hěn gāoxìng!)"},
      words:{en:[8,4,5],zh:[0,5,6]},
      doi:"Thí nghiệm 'chai bình tĩnh': mẹ đổ nước vào một chai nhựa trong, thả vào một ít vụn giấy màu, vặn thật chặt nắp và quấn băng dính quanh nắp. Bé lắc mạnh như khi giận, rồi đặt chai xuống, hai mẹ con thở chậm và đếm đến khi vụn giấy lắng hết. Nói 'Calm' và '不生气了 (bù shēngqì le)'.",
      ob:"Ông bà cho bé lắc chai nước có vụn giấy màu, rồi cùng thở chậm chờ vụn giấy lắng.",
      toi:"Hát ru thật chậm: 'Gió mùa thu mẹ ru con ngủ / Năm canh dài mẹ thức đủ năm canh'. Trước khi hát, mẹ và bé cùng thở sâu 4 lần như Daniel Tiger. Hỏi nhỏ: 'Hôm nay có lúc nào con giận không? Con đã làm gì?'.", lyr:"Gió mùa thu mẹ ru con ngủ" },
    { chuyen:"Cuốn sách cảm xúc của bé",
      en:{v:2, t:"Thử thách lớn: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 ngôi sao (tối đa 3). Sau đó bé chọn 1 video thích nhất tuần để xem lại; lần này bé làm 'người chỉ huy', hô động tác cho cả nhà làm."},
      zh:{v:0, t:"Nếu bé muốn, xem lại 表情 và làm mặt trước gương."},
      special:"Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần",
      doi:"Gấp đôi 2 tờ giấy A4, lồng vào nhau rồi dập ghim (mẹ dập) thành cuốn sách 8 trang. Trang bìa: in bàn tay bé bằng màu nước, mẹ viết 'I'm four – 我四岁'. Mỗi trang trong là một khuôn mặt bé vẽ hoặc ảnh in: happy, sad, angry, scared, calm; mẹ viết chữ tiếng Anh và tiếng Trung dưới tranh. Làm xong, bé 'đọc' sách cho cả nhà nghe.",
      toi:"Đọc cuốn sách cảm xúc vừa làm. Mẹ chỉ trang, bé nói tiếng Việt; mẹ nói tiếng Anh và tiếng Trung, bé chọn nói lại 1 từ mình thích." },
    { chuyen:"Thám tử cảm xúc đi chơi",
      en:{v:1, t:"Ôn nhẹ: bé chọn video thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:1, t:"Mở 如果你高兴 hai lần, cả nhà vỗ tay và dậm chân."},
      doi:"Đi chơi cùng gia đình (công viên, nhà ông bà): trên đường, bé làm 'thám tử cảm xúc', tìm 3 người đang cười rồi nói nhỏ với mẹ 'He is happy!' hoặc 'She is happy!'. Ra đường luôn nắm tay người lớn. Tối về, mỗi người kể một lúc vui trong ngày.",
      ob:"Ông bà dắt bé đi dạo, cùng bé tìm người đang cười.",
      toi:"Hỏi bé: 'Hôm nay lúc nào con vui nhất?'. Kể lại thật ngắn chuyện Chú Dê Đen, để bé nói câu 'Tớ không sợ!' ở đúng chỗ." },
    { chuyen:"Quái vật màu sắc",
      en:{v:3, t:"Lần 1 – truyện quái vật màu sắc: chú quái vật lẫn lộn cảm xúc, mỗi cảm xúc được cất vào một lọ có màu riêng. Nếu video dài hơn 8 phút, mẹ chỉ cho xem 5 phút đầu. Mỗi lọ mới, mẹ dừng lại, bé nói màu và làm mặt theo cảm xúc. Mỗi lần đúng, mẹ vẽ 1 ngôi sao.", b:"Yellow is happy. Blue is sad."},
      zh:{v:2, t:"Lần 2 – ai nhanh hơn. Mẹ và bé thi: mỗi khi truyện hỏi 你几岁, ai giơ đúng số ngón tay trước được 1 sao. Cuối truyện đếm sao. Bé thắng thì được hỏi lại mẹ: 妈妈，你几岁？", b:"妈妈，你几岁？(māma, nǐ jǐ suì?)"},
      words:{en:[0,1,2,4,3],zh:[3,4,6]},
      doi:"Đố vui cảm xúc tính điểm: mẹ kể 5 tình huống ngắn bằng tiếng Việt (được quà, làm rơi kem, bạn giật đồ chơi, nghe tiếng sấm to, nằm nghe mẹ hát). Bé nói thật nhanh bằng tiếng Anh: happy, sad, angry, scared hay calm. Mỗi câu đúng được 1 sao; đủ 4 sao được chọn trò chơi buổi tối.",
      ob:"Ông bà kể một chuyện ngắn, bé đoán người trong chuyện đang vui hay buồn.",
      toi:"Kể chuyện Đeo nhạc cho mèo: họ nhà chuột sợ mèo, họp bàn đeo chuông vào cổ mèo để nghe tiếng mà tránh. Ai cũng khen kế hay, nhưng chẳng ai dám đi đeo. Mẹ hỏi: 'Các chú chuột đang thấy thế nào? Nếu con là chuột, con nghĩ ra cách gì khác?'." },
    { chuyen:"Ai làm nhanh hơn?",
      en:{v:2, t:"Lần 2 – bé hô trước. Mẹ dừng trước mỗi đoạn, bé hô 'Clap!' hoặc 'Stomp!' rồi cả nhà mới làm. Thi xem ai làm đúng nhanh hơn, người thắng được 1 sao. Đoạn cuối mẹ hát chậm lại, bé hát to hơn.", b:"Stomp your feet!"},
      zh:{v:0, t:"Lần 3 – chuyển ngữ. Mẹ nói từ tiếng Anh, bé nói từ tiếng Trung và làm mặt: 'happy' – 高兴, 'sad' – 难过, 'angry' – 生气. Rồi mở bài để kiểm tra. Mỗi từ đúng được 1 sao.", b:"高兴，难过，生气。(gāoxìng, nánguò, shēngqì.)"},
      words:{en:[6,7,0],zh:[0,1,2]},
      doi:"Trò 'Chạy đến mặt nào?': mẹ dán 4 tờ giấy vẽ mặt (vui, buồn, giận, sợ) ở 4 góc phòng. Mẹ gọi 'Sad!' hoặc '高兴!', bé chạy nhanh đến đúng góc. Chơi 8 lượt, xen kẽ tiếng Anh và tiếng Trung. Bé nhầm thì mẹ làm mặt gợi ý.",
      ob:"Ông bà dán 4 khuôn mặt ở 4 góc phòng, gọi tên cảm xúc cho bé chạy đến.",
      toi:"Câu đố: 'Lấp la lấp lánh / Treo ở trên tường / Trước khi đến trường / Bé soi chải tóc / Là cái gì?'. Bé đoán xong, ra trước gương làm 3 mặt và tự đặt tên từng mặt bằng tiếng Việt và tiếng Anh.", lyr:"Câu đố cái gương (lấp lánh)" },
    { chuyen:"Lọ cảm xúc",
      en:{v:3, t:"Lần 2 – chuyện gì tiếp theo? Trước mỗi lọ màu mới, mẹ dừng và hỏi 'What colour is next?'. Bé đoán màu, đoán đúng được 1 sao. Hết video, bé kể bằng tiếng Việt 'Màu vàng là vui, màu xanh là buồn…', mẹ nói lại bằng tiếng Anh.", b:"What colour is next?"},
      zh:{v:1, t:"Lần 3 – ai nhanh hơn. Cho bố hoặc gấu bông cùng chơi: mỗi khi nghe 高兴, ai vỗ tay trước được 1 điểm. Hết bài mẹ hỏi bằng câu dài: 你高兴吗？, bé đáp 我很高兴！(wǒ hěn gāoxìng!).", b:"你高兴吗？(nǐ gāoxìng ma?)"},
      words:{en:[0,1,4],zh:[0,5,6]},
      doi:"Lọ cảm xúc của bé: lấy 4 chiếc cốc nhựa, dán giấy màu vàng (vui), xanh dương (buồn), đỏ (giận), xanh lá (bình tĩnh). Mẹ đưa bé 8 mẩu giấy vẽ mặt. Bé bỏ từng mẩu vào đúng cốc và nói tên cảm xúc. Đếm xem cốc nào nhiều mẩu nhất.",
      ob:"Ông bà cùng bé bỏ các mẩu giấy vẽ mặt vào đúng cốc màu.",
      toi:"Kể lại Đeo nhạc cho mèo, lần này bé làm chuột lớn chủ trì cuộc họp. Mẹ và gấu bông làm các chú chuột khác, đùn đẩy nhau 'Không, không, tớ sợ lắm!'. Bé nghĩ ra một cách khác cho họ nhà chuột, ví dụ làm bạn với mèo." },
    { chuyen:"Hôm nay con thấy thế nào?",
      en:{v:0, t:"Lần 3 – bé nói trước video. Mẹ dừng trước mỗi chỗ có từ cảm xúc, bé đoán và nói trước bằng tiếng Anh, rồi mới bật tiếp. Đúng được 1 sao. Hết video, bé thử nói câu dài: 'I feel happy because…' (phần sau nói tiếng Việt cũng được).", b:"How do you feel today?"},
      zh:{v:2, t:"Lần 3 – câu dài hơn. Bé làm người dẫn chuyện, chỉ vào nhân vật và hỏi mẹ 他几岁？(tā jǐ suì). Mẹ trả lời bằng ngón tay. Cuối cùng bé tự nói cả câu: 我叫…，我四岁，我很高兴！", b:"我四岁，我很高兴！(wǒ sì suì, wǒ hěn gāoxìng!)"},
      words:{en:[0,1,2,3,4],zh:[3,4,0]},
      doi:"Cuộc thi làm mặt cả nhà: mỗi người bốc một tờ giấy vẽ mặt (úp sẵn), làm mặt đó cho người khác đoán. Ai đoán nhanh nhất được 1 sao. Bé đoán bằng tiếng Anh hoặc tiếng Trung thì được 2 sao.",
      ob:"Ông bà làm mặt vui, buồn, giận cho bé đoán, bé đoán đúng thì khen.",
      toi:"Đọc lại 1 bài trong 'Một cái ôm thật to'. Mẹ đọc từng câu, đến cuối câu bé ôm mẹ một cái. Hỏi: 'Khi bạn buồn, con làm gì để bạn vui lên?'." },
    { chuyen:"Thử thách ngồi yên một phút",
      en:{v:1, t:"Lần 3 – chỉ nghe tiếng. Mẹ úp điện thoại xuống, bé chỉ nghe bài, vừa nghe vừa thở và đếm đến 4. Sau đó mẹ đặt đồng hồ, bé thử 'bình tĩnh' ngồi yên 1 phút như tượng. Làm được thì được 3 sao.", b:"Good job! You are calm."},
      zh:{v:0, t:"Bé làm cô giáo: bé đứng trước gương nói 高兴, 难过, 生气 và làm mặt, mẹ làm theo. Sau đó mở bài 1 lần để kiểm tra xem bé nói đúng thứ tự chưa.", b:"老师，我高兴！(lǎoshī, wǒ gāoxìng!)"},
      words:{en:[8,4,5],zh:[0,1,2]},
      doi:"Chơi 'Cái gì làm con…?': mẹ hỏi 4 câu và lắng nghe: Cái gì làm con vui? Cái gì làm con buồn? Cái gì làm con sợ? Làm sao để con bình tĩnh? Mẹ vẽ nhanh câu trả lời thành 4 tranh nhỏ, dán vào cuốn sách cảm xúc tuần trước.",
      ob:"Ông bà hỏi bé điều gì làm bé vui, điều gì làm bé buồn, và lắng nghe bé kể.",
      toi:"Đọc lại vè Con bò ngủ gốc cây đa. Lần này mẹ đọc nửa câu, bé đọc nửa sau. Hỏi: 'Nếu cái bánh buồn vì trời mưa, con sẽ nói gì với bánh?'.", lyr:"Con bò ngủ gốc cây đa" },
    { chuyen:"Gọi ông bà khoe tuổi",
      en:{v:2, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé phải nói từ ra tiếng trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại."},
      zh:{v:1, t:"Xem lại 如果你高兴 rồi bé dạy ông bà vỗ tay trong cuộc gọi."},
      special:"Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung",
      doi:"Trước khi gọi, mẹ và bé tập 3 câu: 'Hello! I'm four. I'm happy.' và '你好！我四岁。我很高兴！'. Khi gọi video, bé nói 3 câu, rồi giơ cuốn sách cảm xúc cho ông bà xem. Bé hỏi ông bà: 'Are you happy?'. Gọi khoảng 5–10 phút.",
      toi:"Hỏi bé ông bà đã nói gì. Hát ru 'Gió mùa thu mẹ ru con ngủ' thật nhỏ cho bé ngủ.", lyr:"Gió mùa thu mẹ ru con ngủ" },
    { chuyen:"Bữa cơm kể chuyện vui",
      en:{v:3, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất, xem 1 lần. Chơi lại 1 trò bé thích."},
      zh:{v:0, t:"Mở 表情 một lần, cả nhà làm mặt theo."},
      doi:"Trong bữa tối, mỗi người nói 1 câu 'Hôm nay tôi vui vì…'. Bé nói bằng tiếng Việt rồi thêm 'I'm happy!' hoặc '我很高兴!'. Ai nói xong thì được cả nhà vỗ tay.",
      toi:"Ôm bé thật to, hỏi điều vui nhất trong 2 tuần. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 99 – Bố mẹ, anh chị em ===================== */
window.CT_DETAIL45[99] = {
  sub: "Bố mẹ, anh chị em",
  vocab: {
    en: [["mum","👩","mẹ",false],["dad","👨","bố",false],["brother","👦","anh / em trai",false],["sister","👧","chị / em gái",false],["baby","👶","em bé",false],["family","👪","gia đình",false],["love","❤️","yêu",false],["hug","🤗","ôm",true],["point","👉","chỉ tay",true]],
    zh: [["妈妈","māma","mẹ","👩"],["爸爸","bàba","bố","👨"],["哥哥","gēge","anh trai","👦"],["姐姐","jiějie","chị gái","👧"],["弟弟","dìdi","em trai","🧒"],["妹妹","mèimei","em gái","🎀"],["家","jiā","nhà, gia đình","🏠"],["我爱你","wǒ ài nǐ","con yêu…","❤️"]],
    en_phr: [["This is my mum.","mum","👩"],["I love you, Dad!","love","❤️"],["This is my baby sister.","sister","👧"],["Big hug for my brother!","hug","🤗"]],
    zh_phr: [["这是我妈妈。","妈妈","zhè shì wǒ māma.","Đây là mẹ con.","👩"],["我爱爸爸。","爸爸","wǒ ài bàba.","Con yêu bố.","❤️"],["我有一个哥哥。","哥哥","wǒ yǒu yí ge gēge.","Con có một anh trai.","👦"]],
    seq: [["🌅","wake up","起床"],["🤗","hug Mum","抱抱妈妈"],["🍚","eat together","一起吃饭"],["👋","bye-bye, Dad","爸爸再见"]]
  },
  media: {
    en: [
      {t:"The Family Tree – Learn & Sing Family Words",u:"https://www.youtube.com/watch?v=ecm9HEFcfdQ",kind:"explainer",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Skidamarink",u:"https://www.youtube.com/watch?v=6916kVhbEZw",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Bluey 5-Minute Stories – chỉ đọc 1 truyện",u:"https://www.youtube.com/watch?v=DKQUhWNKGOs",kind:"story",ch:"Brightly Storytime"},
      {t:"The More We Get Together",u:"https://www.youtube.com/watch?v=SpzLA-w1I8s",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"}
    ],
    zh: [
      {t:"我的一家 My Family Song – Gia đình em",u:"https://www.youtube.com/watch?v=2rU-lGtfs8o",kind:"song_action",min:1.4,ch:"Cool Panda Chinese Learning"},
      {t:"Family Finger Song – Ngón tay gia đình (Miaomiao Ep.79)",u:"https://www.youtube.com/watch?v=QcmJQNgsUAM",kind:"song_action",ch:"Miaomiao Kidz"},
      {t:"拔萝卜 Bá luóbo – Nhổ củ cải",u:"https://www.youtube.com/watch?v=gnD1zHblo0Q",kind:"story",ch:"貝瓦兒歌 Beva Kids Song"}
    ]
  },
  weeks: [
    {title:"Cả nhà thương nhau (Tuần Ca nhạc)", tale:{t:"Câu chuyện bó đũa",id:"bo_dua"},
     toi_vi:[{t:"Anh em như thể tay chân",type:"ca_dao",lyr:"Anh em như thể tay chân\nRách lành đùm bọc, dở hay đỡ đần"},{t:"Câu đố bàn tay",type:"cau_do",lyr:"Năm ông cùng ở một nhà\nTình huynh nghĩa đệ vào ra thuận hòa"},{t:"Gánh gánh gồng gồng",type:"dong_dao",lyr:"Gánh gánh gồng gồng\nGánh sông gánh núi\nGánh củi gánh cành\nTa chạy cho nhanh\nVề xây nhà bếp\nNấu nồi cơm nếp\nChia ra năm phần\nMột phần cho mẹ\nMột phần cho cha\nMột phần cho bà\nMột phần cho chị\nMột phần cho anh"}],
     book_vi:{t:"Bồ nông có hiếu (phiên bản sách tranh)",author:"Phong Thu",publisher:"NXB Kim Đồng"}},
    {title:"Chuyện nhà Bluey, chuyện nhà mình (Tuần Kể chuyện)", tale:{t:"Sự tích hoa cúc trắng",id:"hoa_cuc_trang"},
     toi_vi:[{t:"Công cha như núi Thái Sơn",type:"ca_dao",lyr:"Công cha như núi Thái Sơn\nNghĩa mẹ như nước trong nguồn chảy ra\nMột lòng thờ mẹ kính cha\nCho tròn chữ hiếu mới là đạo con"}]}
  ],
  obs: [["en","Gọi đúng mum, dad, brother, sister khi chỉ ảnh"],["en","Nói “I love you” kèm động tác với người thân"],["zh","Nói 爸爸, 妈妈, 哥哥, 姐姐 khi chỉ vào người thân"],["zh","Nói được câu 这是我妈妈 hoặc 这是我爸爸"],["vi","Kể lại truyện bó đũa hoặc truyện củ cải theo đúng thứ tự"],["xh","Tự giúp một việc nhỏ cho người trong nhà"],["td","Đếm đúng số người trong nhà"],["vd","Nắm tay đi vòng tròn, bước vào bước ra theo nhạc"]],
  days: [
    { chuyen:"Cây gia đình của bé",
      en:{v:0, t:"Lần 1 – xem và chỉ ảnh. Mở qua YouTube Kids, tắt tự phát. Trước khi xem, mẹ bày ảnh bố, mẹ, anh chị em (ảnh in hoặc trong điện thoại) lên bàn. Mỗi khi bài hát gọi mum, dad, brother, sister, baby, mẹ dừng lại để bé chỉ đúng ảnh người đó trong nhà mình.", b:"Who is this? This is Dad."},
      zh:{v:0, t:"Lần 1 – chỉ ảnh. Bài khoảng 1 phút rưỡi, mở 2 lần. Dùng lại các ảnh vừa bày. Nghe 爸爸 (bàba) chỉ ảnh bố, 妈妈 (māma) chỉ ảnh mẹ, 哥哥 (gēge) anh trai, 姐姐 (jiějie) chị gái. Nhà không có anh chị thì chỉ ảnh anh chị họ.", b:"这是爸爸。(zhè shì bàba.)"},
      words:{en:[0,1,2,3,4],zh:[0,1,2,3]},
      doi:"Vẽ cây gia đình: mẹ vẽ một cái cây to trên tờ giấy. Bé dán ảnh hoặc vẽ mặt từng người lên các cành: bố, mẹ, anh chị em, bé. Mẹ viết tên tiếng Anh dưới mỗi người (Mum, Dad…). Bé chỉ từng người nói tiếng Việt, mẹ nói lại tiếng Anh, bé nhắc theo.",
      ob:"Ông bà cùng bé dán ảnh từng người trong nhà lên tờ giấy vẽ cái cây.",
      toi:"Kể Câu chuyện bó đũa bằng lời của mẹ: mấy anh em trong một nhà hay cãi nhau. Một hôm người cha đưa ra một bó đũa, bảo ai bẻ gãy được cả bó thì cha thưởng. Từng người cố hết sức mà không ai bẻ được. Mẹ dừng hỏi: 'Con đoán người cha sẽ làm gì?'. Mai mẹ con mình làm thử thật." },
    { chuyen:"Mỗi người một động tác",
      en:{v:0, t:"Lần 2 – hát và làm động tác. Mỗi người trong nhà một động tác: mum – hai tay áp má, dad – vỗ ngực, brother – gồng tay khoe cơ, sister – vuốt tóc, baby – ru em. Nghe gọi ai thì làm động tác người đó. Cuối bài chơi đóng băng: mẹ dừng nhạc, bé đứng im ở động tác đang làm.", b:"Mum, Dad, brother, sister!"},
      zh:{v:1, t:"Lần 1 – gia đình ngón tay. Mẹ xem trước 1 lần cho quen. Vẽ mặt nhỏ lên 5 ngón tay bé bằng bút dạ rửa được. Mỗi khi nghe tên một người nhà như 爸爸, 妈妈, 哥哥, 姐姐, bé ngọ nguậy một ngón tay và chào người đó.", b:"爸爸在哪里？(bàba zài nǎlǐ?)"},
      words:{en:[0,1,2,3],zh:[0,1,2,3]},
      doi:"Đếm người nhà: tối nay bé đi một vòng, đếm xem nhà có mấy người, đếm trên ngón tay 1, 2, 3… Đến mỗi người, bé ôm một cái và nói tên tiếng Anh: 'Hug, Mum!', 'Hug, Dad!'. Mẹ viết số người lên tờ cây gia đình hôm qua.",
      ob:"Ông bà cùng bé đếm xem nhà có mấy người, mỗi người được bé ôm một cái.",
      toi:"Kể tiếp và làm thật: mẹ buộc 6–8 que kem bằng dây chun thành một bó. Bé thử bẻ cả bó, không gãy. Mẹ tháo ra, bẻ thử 1 que, gãy ngay (mẹ làm, rồi cất que gãy đi). Mẹ kể: người cha dạy các con, anh em đoàn kết như bó đũa thì không gì làm gãy được. Đếm số que bằng tiếng Anh: one, two, three…" },
    { chuyen:"Bé yêu cả nhà",
      en:{v:1, t:"Lần 1 – động tác yêu thương. Bài hát nói 'I love you' với người thân. Mẹ dạy 3 động tác: chỉ vào mình (I), hai tay làm trái tim (love), chỉ vào người nghe (you). Xem và làm theo mỗi khi nghe 'I love you'.", b:"I love you, Mum!"},
      zh:{v:0, t:"Lần 2 – dùng chung động tác với bài tiếng Anh hôm qua: 妈妈 áp má, 爸爸 vỗ ngực, 哥哥 gồng tay, 姐姐 vuốt tóc. Nghe từ nào làm động tác đó. Cùng một động tác cho hai thứ tiếng giúp bé nhớ: mum = 妈妈, dad = 爸爸.", b:"妈妈，我爱你！(māma, wǒ ài nǐ!)"},
      words:{en:[6,0,1,8],zh:[0,1,7]},
      doi:"Thư tình bằng tranh: bé vẽ 1 trái tim to tặng mỗi người trong nhà (mẹ cắt giấy hộ nếu cần). Bé đi trao tận tay, nói 'I love you, Dad!' rồi '我爱你!'. Người nhận ôm bé và nói 'I love you too!'.",
      ob:"Ông bà nhận trái tim giấy bé tặng và nói 'Bà yêu cháu' khi bé nói 'I love you'.",
      toi:"Đọc sách tranh 'Bồ nông có hiếu' (Phong Thu, NXB Kim Đồng). Đọc chậm, chỉ vào tranh bồ nông con. Hỏi: 'Bồ nông con làm gì để giúp mẹ? Con giúp mẹ được việc gì?'." },
    { chuyen:"Bé làm bố, làm mẹ",
      en:{v:1, t:"Lần 2 – hát tặng từng người. Mở bài, bé làm động tác và mỗi lần đến chữ 'you' thì chỉ vào một người khác trong nhà. Đến câu cuối, mẹ tắt tiếng, bé tự nói 'I love you!' rồi mới bật lại.", b:"Who do you love?"},
      zh:{v:1, t:"Lần 2 – rối ngón tay. Bé quấn mẩu giấy nhỏ làm 'mũ' cho từng ngón tay. Mở bài, nghe tên ai, bé giơ ngón đó lên cao và chào: 爸爸好！妈妈好！哥哥好！", b:"哥哥好！(gēge hǎo!)"},
      words:{en:[6,8,7],zh:[0,1,2,3]},
      doi:"Đóng vai gia đình: bé chọn làm bố, mẹ hoặc anh chị, đội mũ của bố hoặc đeo túi của mẹ. Mẹ làm em bé khóc 'oe oe', bé dỗ: 'Don't cry, baby!' rồi ôm em búp bê. Đổi vai 3 lần, lần cuối bé làm em bé.",
      ob:"Ông bà chơi đóng vai gia đình, để bé làm bố hoặc mẹ dỗ em búp bê.",
      toi:"Câu đố: 'Năm ông cùng ở một nhà / Tình huynh nghĩa đệ vào ra thuận hòa'. Bé đoán xong, mẹ xòe bàn tay bé, đếm 5 ngón và đặt tên mỗi ngón là một người trong nhà. Tắt đèn, mẹ nắm từng ngón chúc ngủ ngon: 'Bố ngủ ngon, mẹ ngủ ngon…'.", lyr:"Câu đố bàn tay" },
    { chuyen:"Cả nhà cùng nhau",
      en:{v:3, t:"Lần 1 – nắm tay cả nhà. Bài hát về những người ở bên nhau, càng đông càng vui. Cả nhà nắm tay thành vòng tròn, đung đưa theo nhạc. Mỗi khi nghe 'together', cả vòng bước vào giữa rồi bước ra.", b:"Let's play together!"},
      zh:{v:0, t:"Lần 3 – bé nói trước. Mẹ dừng bài trước mỗi từ và chỉ vào ảnh, bé nói trước 爸爸, 妈妈, 哥哥 hay 姐姐 rồi bật tiếp nghe xem có đúng không.", b:"你说对了！(nǐ shuō duì le!)"},
      words:{en:[5,0,1,2,3],zh:[0,1,2,3,6]},
      doi:"Bé dọn bàn ăn tối: bé đặt cho mỗi người một cái thìa và một cái bát nhựa, vừa đặt vừa nói 'For Mum, for Dad, for me!'. Đếm xem cần mấy cái bát. Trước khi ăn, cả nhà nắm tay nhau nói 'Together!'.",
      ob:"Ông bà để bé đặt thìa, bát cho từng người và đếm xem cần mấy cái.",
      toi:"Đồng dao Gánh gánh gồng gồng: mẹ quàng khăn lên vai bé làm đòn gánh, bé đi chậm quanh giường theo nhịp. Đến đoạn 'một phần cho mẹ, một phần cho cha…', bé dừng lại chỉ vào đúng người. Hỏi: 'Nhà mình có mấy người? Phải chia mấy phần?'.", lyr:"Gánh gánh gồng gồng" },
    { chuyen:"Bánh mì kẹp cho cả nhà",
      en:{v:0, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 ngôi sao (tối đa 3). Sau đó bé chọn 1 bài thích nhất tuần để xem lại; lần này bé làm người chỉ huy, hô 'Mum!', 'Dad!' cho cả nhà làm động tác."},
      zh:{v:1, t:"Nếu bé muốn, xem lại bài ngón tay gia đình và chào từng ngón."},
      special:"Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu",
      doi:"Mẹ chuẩn bị sẵn bánh mì, trứng luộc đã bóc, dưa chuột thái lát (dao do mẹ cầm). Bé dùng thìa phết sốt, xếp nhân vào từng chiếc bánh. Làm đủ cho mỗi người một chiếc: 'This is for Dad – 给爸爸 (gěi bàba)', 'This is for Mum – 给妈妈 (gěi māma)'. Bé tự mang đến tận tay từng người và chờ nghe 'Thank you!'.",
      toi:"Hỏi bé: 'Hôm nay ai ăn bánh của con? Ai nói cảm ơn?'. Ca dao 'Anh em như thể tay chân / Rách lành đùm bọc, dở hay đỡ đần': mẹ chạm vào tay, chân bé khi đọc, nhắc tên anh chị em trong nhà.", lyr:"Anh em như thể tay chân" },
    { chuyen:"Ảnh cả nhà đi chơi",
      en:{v:3, t:"Ôn nhẹ: bé chọn bài thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:0, t:"Mở 我的一家 một lần, cả nhà làm động tác theo."},
      doi:"Đi chơi cả nhà (công viên, về quê). Ra đường luôn nắm tay người lớn. Trên đường bé tìm những gia đình khác và kể nhỏ với mẹ: 'Mum, dad, baby!'. Chụp một tấm ảnh cả nhà; về nhà xem lại, bé gọi tên từng người bằng tiếng Anh và tiếng Trung.",
      ob:"Ông bà dắt bé đi chơi, cùng bé tìm những gia đình có bố, mẹ và em bé.",
      toi:"Kể lại Câu chuyện bó đũa, lần này bé làm người cha cầm bó que kem dạy 'các con' (gấu bông, búp bê). Mẹ làm người con cãi nhau, rồi làm lành." },
    { chuyen:"Nhà của chú chó Bluey",
      en:{v:2, t:"Lần 1 – xem và chỉ. Video có 2 truyện ngắn về chú chó Bluey và gia đình; chỉ đọc 1 truyện thôi, nếu dài hơn 8 phút thì dừng ở phút thứ 5. Mỗi lần thấy bố, mẹ hoặc em của Bluey, mẹ dừng lại hỏi 'Who is this?', bé trả lời 'Mum!', 'Dad!' hoặc 'Sister!'.", b:"Who is this? It's Bluey's dad."},
      zh:{v:2, t:"Lần 1 – truyện kể bằng bài hát: một củ cải thật to kéo mãi không lên, rồi người và con vật lần lượt đến giúp. Mỗi lần nghe 拔萝卜 (bá luóbo – nhổ củ cải), mẹ và bé làm động tác kéo, kêu 'hây dô'. Mẹ dừng lại hỏi: 'Ai sẽ đến giúp tiếp?'.", b:"拔萝卜，嘿哟！(bá luóbo, hēi yō!)"},
      words:{en:[0,1,3,5],zh:[0,1,6]},
      doi:"Nhổ củ cải trong nhà: mẹ buộc một chiếc khăn vào gấu bông to làm 'củ cải', đặt dưới gầm bàn. Bé kéo không ra, gọi 'Mum, help!'; mẹ đến kéo cùng, rồi gọi thêm bố hoặc anh chị. Cả nhà nối đuôi nhau kéo, đếm 'one, two, three!' thì gấu bông bật ra.",
      ob:"Ông bà và bé nối đuôi nhau kéo gấu bông ra khỏi gầm bàn như nhổ củ cải.",
      toi:"Kể chuyện Sự tích hoa cúc trắng: ngày xưa có cô bé rất thương mẹ. Mẹ bị ốm, cô đi tìm thầy thuốc. Một ông cụ cho cô một bông hoa trắng và bảo hoa có bao nhiêu cánh thì mẹ khỏe thêm bấy nhiêu năm. Hoa chỉ có vài cánh thôi. Mẹ dừng hỏi: 'Nếu là con, con làm thế nào?'. Mai kể tiếp." },
    { chuyen:"Chuyện gì xảy ra tiếp?",
      en:{v:2, t:"Lần 2 – đoán trước. Xem lại đúng truyện hôm qua. Trước mỗi lần lật trang, mẹ dừng và hỏi bằng tiếng Việt: 'Bố Bluey sẽ làm gì?'. Bé đoán rồi bật xem tiếp. Hết truyện, bé chọn 1 trò chơi của nhà Bluey để chơi thử với mẹ.", b:"Let's play like Bluey!"},
      zh:{v:1, t:"Lần 3 – bé nói trước, thêm chuyển ngữ. Mẹ dừng trước tên mỗi người, bé nói trước. Rồi chơi đổi tiếng: mẹ giơ một ngón tay và nói 'brother', bé nói 哥哥; 'sister' – 姐姐; 'mum' – 妈妈; 'dad' – 爸爸.", b:"这是我姐姐。(zhè shì wǒ jiějie.)"},
      words:{en:[2,3,0,1],zh:[2,3,4,5]},
      doi:"Giới thiệu anh chị em: nếu nhà có anh chị em, bé hỏi 'Are you my brother?' rồi ôm; nếu không có, bé xem ảnh anh chị em họ. Bé giới thiệu với gấu bông: 'This is my sister.', '这是我姐姐。'. Nếu bé có em, mẹ dạy thêm 弟弟 (dìdi – em trai), 妹妹 (mèimei – em gái).",
      ob:"Ông bà cho bé xem ảnh anh chị em họ, bé chỉ và nói đó là anh hay chị.",
      toi:"Kể tiếp Sự tích hoa cúc trắng: cô bé ngồi nghĩ mãi, rồi khéo léo xé mỗi cánh hoa thành thật nhiều sợi nhỏ. Bông hoa có rất nhiều cánh, mẹ khỏe lại và sống lâu bên con. Nếu có hoa cúc thật, hai mẹ con đếm thử vài cánh: one, two, three… / 一、二、三…" },
    { chuyen:"Mọi người cùng kéo",
      en:{v:1, t:"Lần 3 – bé nói trước video. Mẹ dừng trước mỗi chỗ có 'I love you', bé nói trước và làm động tác. Thử câu dài hơn: 'I love you, Mum and Dad!'.", b:"I love you, Mum and Dad!"},
      zh:{v:2, t:"Lần 2 – đóng vai. Mỗi người một vai: bé là người kéo đầu tiên, mẹ, bố lần lượt vào kéo khi bài hát gọi người mới. Mỗi lần gọi người vào giúp, bé nói 妈妈，快来！(māma, kuài lái – mẹ ơi, nhanh lên!).", b:"妈妈，快来！(māma, kuài lái!)"},
      words:{en:[6,0,1],zh:[0,1,7]},
      doi:"Kể lại bằng tranh: mẹ đưa 3 tờ giấy, bé vẽ que 3 cảnh của truyện củ cải: một người kéo không được, nhiều người đến giúp, củ cải bật ra. Bé xếp đúng thứ tự rồi kể bằng tiếng Việt, đến cuối nói 'Together!'.",
      ob:"Ông bà nghe bé kể chuyện củ cải theo 3 tranh và hỏi 'Rồi sao nữa?'.",
      toi:"Ca dao 'Công cha như núi Thái Sơn…' (lời trong gói học liệu). Mẹ ôm bé, đọc chậm như ru. Hỏi: 'Núi to hay nhỏ? Nước trong nguồn chảy mãi không hết, giống tình thương của ai?'.", lyr:"Công cha như núi Thái Sơn" },
    { chuyen:"Bé kể chuyện nhà Bluey",
      en:{v:2, t:"Lần 3 – kể lại. Xem truyện thêm 1 lần (tối đa 5 phút). Sau đó bé dùng thú bông làm nhà Bluey: chọn con làm mum, dad, sister, rồi kể lại bằng tiếng Việt; nhắc đến ai thì nói tên tiếng Anh của người đó.", b:"Bluey's family is happy."},
      zh:{v:0, t:"Câu dài hơn: mở 我的一家, mỗi lần nghe tên một người, bé nói cả câu 这是我爸爸 (zhè shì wǒ bàba), 这是我妈妈 và chỉ vào ảnh trên cây gia đình.", b:"这是我爸爸。(zhè shì wǒ bàba.)"},
      words:{en:[0,1,3,5],zh:[0,1,2,3]},
      doi:"Giúp việc như bồ nông con: bé chọn 1 việc giúp mỗi người: mang dép cho bố, gấp khăn cùng mẹ, nhặt đồ chơi cùng anh chị. Làm xong bé nói 'I help Mum!' hoặc '我帮妈妈 (wǒ bāng māma)'.",
      ob:"Ông bà giao cho bé 1 việc nhỏ như mang dép, gấp khăn, rồi khen bé.",
      toi:"Kể lại Sự tích hoa cúc trắng, lần này bé kể đoạn cuối. Mẹ xé nhẹ một tờ giấy thành nhiều sợi để bé hình dung cô bé đã làm gì với bông hoa." },
    { chuyen:"Album gia đình",
      en:{v:0, t:"Lần 3 – câu dài hơn. Mở The Family Tree, mẹ dừng trước mỗi từ, bé nói cả câu 'This is my mum.', 'This is my dad.' và chỉ vào ảnh trên cây gia đình.", b:"This is my family."},
      zh:{v:2, t:"Lần 3 – bé kể lại, chen tiếng Trung. Mẹ kể bằng tiếng Việt; đến chỗ kéo củ cải, bé hô 拔萝卜! Mỗi người đến giúp, bé gọi tên bằng tiếng Trung: 爸爸! 妈妈! 哥哥!", b:"大家一起拔萝卜！(dàjiā yìqǐ bá luóbo!)"},
      words:{en:[0,1,2,3,4,5],zh:[0,1,2,3]},
      doi:"Bé lật album hoặc ảnh trong điện thoại, chọn 4 ảnh thích nhất. Với mỗi ảnh, bé nói 1 câu dài hơn: 'This is my dad. He is happy.' (mẹ nói mẫu trước). Ảnh nào có cả nhà, bé nói 'My family!' và '我的家！(wǒ de jiā!)'.",
      ob:"Ông bà cùng bé xem album ảnh gia đình, bé chỉ và gọi tên từng người.",
      toi:"Đọc lại 'Bồ nông có hiếu'. Lần này bé kể theo tranh, mẹ chỉ nhắc khi bé quên. Hỏi: 'Bồ nông con giống con ở chỗ nào?'." },
    { chuyen:"Đi chợ mua quà cho cả nhà",
      en:{v:3, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé nói từ thật to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại."},
      zh:{v:2, t:"Nếu bé muốn, xem lại 拔萝卜 và cả nhà cùng kéo."},
      special:"Săn từ ở chợ hoặc siêu thị",
      doi:"Đi chợ hoặc siêu thị cùng mẹ, luôn nắm tay mẹ. Nhiệm vụ: tìm một món cho mỗi người trong nhà: bố thích gì, mẹ thích gì, anh chị thích gì. Thấy món nào, bé nói 'For Dad!' và '给爸爸 (gěi bàba)!'. Mẹ cho bé tự cầm 1 món nhẹ bỏ vào giỏ. Về nhà bé trao quà cho từng người.",
      toi:"Hỏi bé: 'Hôm nay con mua gì cho ai?'. Mẹ đọc 'Anh em như thể tay chân', bé chạm vào tay chân mình và kể tên anh chị em trong họ.", lyr:"Anh em như thể tay chân" },
    { chuyen:"Bữa cơm ba thứ tiếng",
      en:{v:1, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:0, t:"Mở 我的一家 một lần, bé chỉ vào từng người thật trong nhà."},
      doi:"Trong bữa cơm, bé mời cơm bằng 3 thứ tiếng: 'Mời bố mẹ ăn cơm', 'Let's eat!', '吃饭了！(chī fàn le!)'. Ăn xong, bé ôm từng người và nói 'I love you!'.",
      toi:"Bé kể điều vui nhất trong 2 tuần: chuyện bó đũa, củ cải hay nhà Bluey. Ôm bé, hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 100 – Ông bà, nhà ngoại nhà nội ===================== */
window.CT_DETAIL45[100] = {
  sub: "Ông bà, nhà ngoại nhà nội",
  vocab: {
    en: [["grandma","👵","bà",false],["grandpa","👴","ông",false],["family","👪","gia đình",false],["baby","👶","em bé",false],["house","🏡","ngôi nhà",false],["wait","⏳","chờ",true],["hide","🙈","trốn",true],["farmer","👨‍🌾","bác nông dân",false],["love","💕","yêu thương",false]],
    zh: [["爷爷","yéye","ông nội","👴"],["奶奶","nǎinai","bà nội","👵"],["外公","wàigōng","ông ngoại","🧓"],["外婆","wàipó","bà ngoại","👩‍🦳"],["家人","jiārén","người nhà","👪"],["几个人","jǐ ge rén","mấy người","🔢"],["在哪里","zài nǎlǐ","ở đâu","🔍"]],
    en_phr: [["I love you, Grandma!","Grandma","👵"],["Grandpa, where are you?","Grandpa","👴"],["Wait, wait, Patches!","Wait","⏳"],["We are a family.","family","👪"]],
    zh_phr: [["奶奶，我爱你！","奶奶","nǎinai, wǒ ài nǐ!","Bà ơi, con yêu bà!","👵"],["爷爷在哪里？","在哪里","yéye zài nǎlǐ?","Ông đâu rồi?","🔍"],["我家有五个人。","五个人","wǒ jiā yǒu wǔ ge rén.","Nhà con có năm người.","🖐️"]],
    seq: [["🚗","go to Grandma's house","去奶奶家"],["🚪","knock, knock","敲敲门"],["🤗","hug Grandpa","抱抱爷爷"],["🍵","drink tea together","一起喝茶"]]
  },
  media: {
    en: [
      {t:"The Family Tree – Learn & Sing Family Words",u:"https://www.youtube.com/watch?v=ecm9HEFcfdQ",kind:"explainer",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Patience, Patches! – truyện tranh đọc to",u:"https://www.youtube.com/watch?v=PGBJhbhovYg",kind:"story",ch:"Brightly Storytime"},
      {t:"The Farmer in the Dell",u:"https://www.youtube.com/watch?v=E-krsNziXEw",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"}
    ],
    zh: [
      {t:"家庭称呼歌 – Bài hát cách xưng hô trong gia đình (có pinyin)",u:"https://www.youtube.com/watch?v=y4VXs8mNrww",kind:"song_action",min:2,ch:"Like Ryuga Channel"},
      {t:"我家有几个人？Nhà con có mấy người? (Lesson A15 – xem đoạn đầu 5 phút)",u:"https://www.youtube.com/watch?v=o3bQLnH7o-c",kind:"lesson",ch:"简中 Little Chinese Learners [Simplified Chinese]"},
      {t:"我的家人在哪里？Where is My Family? (chữ phồn thể trên hình)",u:"https://www.youtube.com/watch?v=5_OjtzCGnPo",kind:"song_action",min:2.6,ch:"繁中 Little Chinese Learners [Traditional Chinese]"}
    ]
  },
  weeks: [
    {title:"Nhà nội, nhà ngoại (Tuần Khám phá)", tale:{t:"Nàng tiên Ốc",id:"nang_tien_oc"},
     toi_vi:[{t:"Ngó lên nuộc lạt mái nhà",type:"ca_dao",lyr:"Ngó lên nuộc lạt mái nhà\nBao nhiêu nuộc lạt nhớ ông bà bấy nhiêu"},{t:"Bồ các là bác chim ri",type:"dong_dao",lyr:"Bồ các là bác chim ri\nChim ri là dì sáo sậu\nSáo sậu là cậu sáo đen\nSáo đen là em tu hú\nTu hú là chú bồ các"}]},
    {title:"Ai nhanh, ai đúng? (Tuần Thử thách)", tale:{t:"Tích Chu",id:"tich_chu"},
     toi_vi:[{t:"Con gà cục tác lá chanh",type:"ca_dao",lyr:"Con gà cục tác lá chanh\nCon lợn ủn ỉn mua hành cho tôi\nCon chó khóc đứng khóc ngồi\nBà ơi đi chợ mua tôi đồng riềng"}],
     book_vi:{t:"Bé tập kể chuyện – Mỗi tuần một câu chuyện",author:"(chưa rõ tên)",publisher:"NXB Trẻ"}}
  ],
  obs: [["en","Nói grandma, grandpa khi chỉ ảnh ông bà"],["en","Nói “Wait!” và chờ được đến khi mẹ đếm xong 3"],["zh","Gọi đúng 爷爷, 奶奶 với ông bà nội"],["zh","Nói được 外公, 外婆 cho ông bà ngoại"],["vi","Phân biệt ông bà nội và ông bà ngoại"],["vi","Kể lại 2–3 câu chuyện Nàng tiên Ốc"],["xh","Tự làm một việc nhỏ giúp ông bà"],["td","Nhớ ra ảnh người thân bị giấu đi"]],
  days: [
    { chuyen:"Ông bà là ai?",
      en:{v:0, t:"Lần 1 – tìm ông bà trên cây. Mở qua YouTube Kids, tắt tự phát. Lần này chú ý 2 từ: grandma (bà), grandpa (ông). Mỗi khi nghe grandma hoặc grandpa, mẹ dừng lại, bé chỉ vào ảnh ông bà nhà mình. Mẹ nói với bé: tiếng Anh gọi chung bà nội, bà ngoại là grandma.", b:"This is Grandma. This is Grandpa."},
      zh:{v:0, t:"Lần 1 – nghe cách gọi. Bài khoảng 2 phút, có pinyin trên màn hình; phần mô tả video có bản dịch tiếng Việt, mẹ đọc trước cho hiểu. Khi xem, nghe 爷爷 (yéye – ông nội), 奶奶 (nǎinai – bà nội) thì bé chỉ vào ảnh ông bà nội.", b:"爷爷好！奶奶好！(yéye hǎo! nǎinai hǎo!)"},
      words:{en:[0,1,2],zh:[0,1,4]},
      doi:"Khám phá nội – ngoại: mẹ đặt 2 tờ giấy ghi 'Nhà nội' và 'Nhà ngoại'. Bé xếp ảnh ông bà vào đúng tờ. Mẹ giải thích: tiếng Việt và tiếng Trung đều phân biệt ông nội (爷爷 yéye) với ông ngoại (外公 wàigōng), bà nội (奶奶 nǎinai) với bà ngoại (外婆 wàipó); tiếng Anh chỉ gọi chung grandpa, grandma. Đếm xem mỗi bên có mấy ảnh.",
      ob:"Ông bà kể cho bé nghe ông bà là bố mẹ của ai: của bố hay của mẹ bé.",
      toi:"Kể chuyện Nàng tiên Ốc bằng lời của mẹ: một bà cụ nghèo bắt được con ốc rất xinh, không nỡ bán nên thả vào chum nước. Từ hôm ấy, mỗi lần bà đi làm về, nhà cửa đã sạch tinh, có sẵn cơm canh. Mẹ dừng hỏi: 'Con đoán ai đã dọn nhà giúp bà?'." },
    { chuyen:"Nhà mình có mấy người?",
      en:{v:2, t:"Lần 1 – vòng tròn bác nông dân. Mỗi đoạn bài hát lại chọn thêm một người hoặc một con vật. Mẹ xếp thú bông thành vòng tròn. Mỗi đoạn mới, bé chọn 1 thú bông đứng vào giữa. Hết bài đếm xem giữa vòng có mấy bạn.", b:"Who's next? The dog!"},
      zh:{v:1, t:"Lần 1 – bài học đếm người nhà. Video là bài học dài, mẹ chỉ cho xem đoạn đầu 5 phút. Khi cô giáo hỏi 几个人 (jǐ ge rén – mấy người), mẹ dừng lại, hai mẹ con đếm người nhà mình trên ngón tay bằng tiếng Trung: 一、二、三…", b:"我家有几个人？(wǒ jiā yǒu jǐ ge rén?)"},
      words:{en:[7,2,3],zh:[4,5,0]},
      doi:"Thí nghiệm xếp hàng: mỗi người trong họ (cả nội và ngoại) là một cái cốc nhựa: cốc to cho ông bà, cốc vừa cho bố mẹ, cô chú, cốc nhỏ cho các bé. Xếp hàng nhà nội và hàng nhà ngoại rồi đếm. So sánh: hàng nào dài hơn? Hàng nào có nhiều cốc nhỏ hơn?",
      ob:"Ông bà cùng bé xếp mỗi người trong nhà bằng một cái cốc rồi đếm.",
      toi:"Ca dao 'Ngó lên nuộc lạt mái nhà / Bao nhiêu nuộc lạt nhớ ông bà bấy nhiêu'. Mẹ kể: ngày xưa mái nhà tranh được buộc bằng rất nhiều sợi lạt, nhiều như tình thương ông bà. Bé nằm ngửa nhìn trần nhà, đếm những thứ trên trần (đèn, quạt) rồi nói 'nhớ ông bà'.", lyr:"Ngó lên nuộc lạt mái nhà" },
    { chuyen:"Ông bà ngày xưa",
      en:{v:0, t:"Lần 2 – động tác cho ông bà. Thêm 2 động tác: grandma – hai tay đưa qua lại như đan len, grandpa – chống gậy đi chậm. Nghe ai làm động tác người đó. Mẹ dừng bất chợt, bé đoán 'Who's next?' rồi bật tiếp.", b:"Grandpa walks slowly."},
      zh:{v:0, t:"Lần 2 – thêm nhà ngoại. Mở lại bài, nghe 爷爷, 奶奶 thì làm động tác chống gậy, đan len. Hết bài mẹ dạy thêm 2 từ của nhà ngoại: 外公 (wàigōng – ông ngoại), 外婆 (wàipó – bà ngoại). Bé chỉ ảnh và nói theo.", b:"外婆，你好！(wàipó, nǐ hǎo!)"},
      words:{en:[0,1,2],zh:[0,1,2,3]},
      doi:"Phỏng vấn ông bà (gặp trực tiếp hoặc gọi điện): bé hỏi 2 câu mẹ đã chuẩn bị: 'Hồi bé ông bà chơi trò gì?', 'Ông bà thích ăn gì?'. Bé nghe rồi kể lại cho mẹ. So sánh: ông bà ngày xưa chơi gì giống con, gì khác con?",
      ob:"Ông bà kể cho bé nghe hồi nhỏ ông bà hay chơi trò gì.",
      toi:"Kể tiếp Nàng tiên Ốc: bà cụ giả vờ đi làm rồi nấp sau cửa rình xem. Bà thấy một cô gái hiền từ bước ra từ vỏ ốc, quét nhà, nấu cơm. Bà giấu vỏ ốc đi, và từ đó hai bà cháu sống với nhau vui vẻ, thương yêu nhau. Hỏi: 'Con giúp bà được việc gì giống cô Tiên Ốc?'." },
    { chuyen:"Trốn tìm cả nhà",
      en:{v:1, t:"Lần 1 – truyện chú chó con và em bé mới trong nhà. Nếu video dài hơn 8 phút, chỉ xem 5 phút đầu. Mỗi khi chú chó Patches phải chờ, mẹ dừng lại, giơ bàn tay ra hiệu và nói 'Wait, wait!', bé làm theo. Hỏi bằng tiếng Việt: 'Patches đang thấy thế nào?'.", b:"Wait, wait, Patches!"},
      zh:{v:2, t:"Lần 1 – trốn tìm. Chữ trên màn hình là chữ phồn thể, nhưng lời hát là tiếng phổ thông chuẩn. Khi bài hỏi 在哪里 (zài nǎlǐ – ở đâu), bé nấp sau ghế sofa; nghe tên người nhà thì nhảy ra 'Đây rồi!'.", b:"妈妈在哪里？(māma zài nǎlǐ?)"},
      words:{en:[5,3,6],zh:[6,4,1]},
      doi:"Tìm ông bà: mẹ giấu 4 ảnh hoặc 4 thú bông đại diện cho ông nội, bà nội, ông ngoại, bà ngoại quanh phòng. Bé đi tìm, tìm được ai thì nói 'Grandma!' hoặc '奶奶!'. Tìm đủ 4 thì xếp vào đúng tờ 'Nhà nội', 'Nhà ngoại' từ hôm thứ Hai.",
      ob:"Ông bà giấu vài thú bông quanh phòng cho bé đi tìm và gọi tên.",
      toi:"Đồng dao Bồ các là bác chim ri: mẹ cầm hai tay bé vỗ theo nhịp, đọc vòng lại từ đầu. Mẹ chỉ ra: trong bài có bác, dì, cậu, em, chú, giống cách nhà mình gọi người thân. Hỏi: 'Con có bác nào, dì nào, cậu nào?'.", lyr:"Bồ các là bác chim ri" },
    { chuyen:"Bàn tay gia đình",
      en:{v:1, t:"Lần 2 – thử thách chờ. Xem lại truyện. Mỗi lần Patches phải chờ, mẹ dừng và đếm 'one, two, three' rồi mới bật tiếp; bé ngồi yên chờ cùng Patches. Hết truyện hỏi: 'Con có phải chờ ai không? Chờ em bé, hay chờ ông bà đến chơi?'.", b:"Good waiting!"},
      zh:{v:1, t:"Lần 2 – xem đoạn tiếp theo (tối đa 5 phút). Khi cô giáo nói tên người nhà như 哥哥, 妹妹, 弟弟, mẹ dừng lại, bé đếm lại người trong nhà mình. Cuối cùng bé nói cả câu 我家有…个人 (wǒ jiā yǒu … ge rén).", b:"我家有五个人。(wǒ jiā yǒu wǔ ge rén.)"},
      words:{en:[5,2,3],zh:[4,5,1]},
      doi:"Thí nghiệm 'Bàn tay ai to hơn?': mẹ đồ viền bàn tay của ông bà (nếu ở cùng), bố mẹ và bé lên giấy. Bé so sánh: bàn tay nào to nhất, nhỏ nhất. Dán thành 'bàn tay gia đình' tặng ông bà. Nếu ông bà ở xa, bé vẽ bàn tay mình để gửi tặng.",
      ob:"Ông bà đặt bàn tay lên giấy cho bé đồ viền, rồi so với bàn tay bé.",
      toi:"Kể lại Nàng tiên Ốc, bé đóng vai cô Tiên Ốc: chui ra từ 'vỏ ốc' (trùm chăn), làm động tác quét nhà, nấu cơm. Mẹ làm bà cụ ngạc nhiên. Cuối chuyện hai 'bà cháu' ôm nhau." },
    { chuyen:"Ngôi nhà của bà bằng chăn gối",
      en:{v:0, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Sau đó bé chọn 1 video thích nhất tuần để xem lại, xem xong kể cho mẹ nghe 1 điều bé nhớ."},
      zh:{v:2, t:"Nếu bé muốn, xem lại 我的家人在哪里 và chơi trốn tìm trong pháo đài."},
      special:"Xây pháo đài chăn gối, kể chuyện trong pháo đài",
      doi:"Dùng ghế, chăn, gối dựng một 'ngôi nhà của bà'. Bé làm chủ nhà, mời gấu bông 'ông', 'bà' vào ngồi. Trong pháo đài, mẹ bật đèn ngủ nhỏ, kể lại Nàng tiên Ốc; bé dùng một cái bát nhựa úp làm 'vỏ ốc'. Chơi xong bé chào 'Good night, Grandma! 奶奶晚安 (nǎinai wǎn'ān)!'.",
      toi:"Nằm trong pháo đài 5 phút rồi về giường. Đọc lại 'Ngó lên nuộc lạt mái nhà', bé đọc tiếp nửa câu sau.", lyr:"Ngó lên nuộc lạt mái nhà" },
    { chuyen:"Thăm ông bà",
      en:{v:1, t:"Ôn nhẹ: bé chọn video thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích."},
      zh:{v:0, t:"Mở 家庭称呼歌 một lần; nếu đang ở nhà ông bà, bé chỉ vào ông bà thật."},
      doi:"Thăm ông bà (hoặc gọi video nếu ở xa). Bé chào 'Hello, Grandma! 奶奶好!'. Bé giúp ông bà 1 việc nhỏ: mang dép, rót nước nguội vào cốc nhựa, nhặt rau cùng bà. Về nhà, bé kể ông bà đã nói gì.",
      ob:"Ông bà cho bé giúp một việc nhỏ như nhặt rau, mang dép, rồi khen bé.",
      toi:"Hỏi bé: 'Hôm nay ông bà vui vì sao?'. Đọc lại Bồ các là bác chim ri, bé vỗ tay theo nhịp.", lyr:"Bồ các là bác chim ri" },
    { chuyen:"Đố nhanh: ai là ai?",
      en:{v:2, t:"Lần 2 – ai nhanh hơn. Đặt 6 thú bông trước mặt. Mỗi đoạn bài hát, ai nhặt đúng người hoặc con vật được gọi (farmer, child, dog, cat…) trước thì được 1 sao. Mẹ chậm hơn một chút để bé thắng vài lần.", b:"Quick! Find the cat!"},
      zh:{v:0, t:"Lần 3 – đố nhanh. Mẹ dừng bài, chỉ vào ảnh ông bà nội, bé nói nhanh 爷爷 hoặc 奶奶; chỉ ảnh ông bà ngoại, bé nói 外公 hoặc 外婆. Mỗi câu đúng được 1 sao.", b:"这是外公。(zhè shì wàigōng.)"},
      words:{en:[7,3,2],zh:[0,1,2,3]},
      doi:"Đố vui tính sao: mẹ hỏi 6 câu, bé trả lời nhanh: 'Mẹ của bố là ai?' (bà nội), 'Bố của mẹ là ai?' (ông ngoại)… Đúng bằng tiếng Việt được 1 sao; nói thêm được grandma, grandpa hoặc 奶奶, 外公 được 2 sao.",
      ob:"Ông bà hỏi bé: 'Bà là mẹ của ai?', 'Ông là bố của ai?' để bé trả lời.",
      toi:"Kể chuyện Tích Chu: cậu bé Tích Chu được bà thương nhất nhà, có gì ngon bà cũng để phần. Nhưng Tích Chu mải chơi, chẳng để ý đến bà. Một hôm bà ốm, khát nước, gọi mãi mà Tích Chu vẫn đi chơi. Mẹ dừng hỏi: 'Nếu bà khát nước, con sẽ làm gì?'." },
    { chuyen:"Ai nói trước?",
      en:{v:1, t:"Lần 3 – bé nói trước. Mẹ dừng trước mỗi chỗ Patches phải chờ, bé nói trước 'Wait, wait!'. Thi: ai nói trước được 1 sao. Hết truyện, bé kể 1 câu: 'Patches waits for the baby.' (mẹ nói mẫu trước).", b:"Patches waits for the baby."},
      zh:{v:2, t:"Lần 2 – ai nhanh hơn. Mẹ và bé thi nấp: bài hỏi 在哪里, ai nấp xong trước được 1 sao. Thêm chuyển ngữ: mẹ hỏi 'Where is Grandma?', bé trả lời bằng tiếng Trung 奶奶在这里！(nǎinai zài zhèlǐ).", b:"奶奶在这里！(nǎinai zài zhèlǐ!)"},
      words:{en:[5,3,0],zh:[6,1,4]},
      doi:"Ai nhanh hơn – tìm thẻ: mẹ vẽ 8 thẻ người (ông, bà, bố, mẹ, anh, chị, em bé, bé) đặt ngửa trên sàn. Mẹ hô 'Grandma!', bé tìm nhanh đúng thẻ; lượt sau mẹ hô tiếng Trung '爷爷!'. Mỗi lượt mẹ đếm 1 đến 5, bé tìm được trước khi đếm xong thì được sao.",
      ob:"Ông bà cầm thẻ vẽ người nhà, gọi tên để bé chỉ nhanh.",
      toi:"Kể tiếp Tích Chu: bà buồn quá, hóa thành chim bay đi. Tích Chu hối hận, vượt đường xa tìm nước suối tiên mang về cho bà. Bà uống nước và trở lại làm người, ở với cháu. Từ đó Tích Chu luôn quan tâm đến bà. Hỏi: 'Hôm nay con làm gì cho ông bà vui?'." },
    { chuyen:"Đổi tiếng thật nhanh",
      en:{v:0, t:"Lần 3 – câu dài hơn, thêm chuyển ngữ. Mẹ dừng trước mỗi từ, bé nói trước cả câu 'This is my grandma.'. Sau đó đổi tiếng: bé nói 'grandpa', mẹ nói 爷爷; rồi mẹ nói 奶奶, bé nói 'grandma'. Ai nói nhanh được 1 sao.", b:"I love my grandma and grandpa."},
      zh:{v:1, t:"Lần 3 – thử thách đếm. Xem lại đoạn bé thích nhất (tối đa 5 phút). Sau đó mẹ đố: 'Nhà ông bà nội có mấy người?', bé đếm và trả lời bằng tiếng Trung. Nói đủ câu 我家有…个人 được 2 sao.", b:"奶奶家有几个人？(nǎinai jiā yǒu jǐ ge rén?)"},
      words:{en:[0,1,2,8],zh:[4,5,0,1]},
      doi:"Thi vẽ ông bà: mẹ và bé mỗi người vẽ 1 bức về ông hoặc bà trong 3 phút (mẹ đặt đồng hồ). Sau đó bé giới thiệu: 'This is my grandma. She is happy.'. Cả nhà chấm sao. Chụp ảnh bức vẽ gửi ông bà.",
      ob:"Ông bà nhận tranh bé vẽ, hỏi bé 'Ai đây?' để bé giới thiệu.",
      toi:"Ca dao Con gà cục tác lá chanh (lời trong gói học liệu). Mẹ đọc, bé làm tiếng kêu từng con: cục tác, ủn ỉn, gâu gâu. Hỏi: 'Các con vật nhờ bà đi chợ mua gì?'.", lyr:"Con gà cục tác lá chanh" },
    { chuyen:"Ai biến mất?",
      en:{v:2, t:"Lần 3 – bé làm người dẫn. Mẹ tắt tiếng ở mỗi chỗ bài hát chọn người mới, bé nói trước tên người hoặc con vật rồi mới bật tiếp. Nói đúng được 1 sao. Cuối bài bé tự chọn thêm một 'người' mới cho vòng tròn.", b:"You choose! Who's next?"},
      zh:{v:2, t:"Lần 3 – câu dài hơn. Bé làm người hỏi: 爷爷在哪里？奶奶在哪里？, mẹ trốn và trả lời 在这里！. Bé tìm được mẹ thì nói cả câu 妈妈在这里 (māma zài zhèlǐ).", b:"妈妈在这里！(māma zài zhèlǐ!)"},
      words:{en:[7,2,8],zh:[6,0,1]},
      doi:"Thử thách trí nhớ: mẹ xếp 5 ảnh người thân thành hàng, bé nhìn 10 giây rồi nhắm mắt. Mẹ lấy đi 1 ảnh. Bé mở mắt đoán 'Ai biến mất?' và nói tên tiếng Anh hoặc tiếng Trung. Đúng được 1 sao, chơi 5 lượt.",
      ob:"Ông bà xếp vài ảnh người thân, giấu 1 ảnh và hỏi bé ai biến mất.",
      toi:"Đọc một truyện trong cuốn 'Bé tập kể chuyện – Mỗi tuần một câu chuyện' (NXB Trẻ). Đọc xong bé kể lại 2–3 câu. Hỏi: 'Trong truyện có ai giống ông bà mình không?'." },
    { chuyen:"Chỉ nghe tiếng, đoán người",
      en:{v:0, t:"Thử thách nghe: mẹ úp điện thoại, bé chỉ nghe tiếng bài The Family Tree. Nghe từ nào, bé giơ đúng thẻ người (grandma, grandpa, mum, dad, baby). Giơ đúng 5 thẻ được 3 sao.", b:"Listen! Who is it?"},
      zh:{v:0, t:"Thử thách chuyển ngữ: mẹ nói tiếng Việt 'ông nội', bé nói 爷爷; 'bà ngoại' – 外婆; 'bà nội' – 奶奶; 'ông ngoại' – 外公. Sau đó mở bài kiểm tra. Đúng 4 từ được 3 sao.", b:"爷爷，奶奶，外公，外婆。(yéye, nǎinai, wàigōng, wàipó.)"},
      words:{en:[0,1,3],zh:[0,1,2,3]},
      doi:"Chuẩn bị hoá trang cho mai: bé chọn hoá trang thành ông hoặc bà (khăn của bà, mũ của ông, gọng kính cũ không tròng), hoặc thành bác nông dân trong bài Farmer in the Dell. Bé tập đi, tập nói như nhân vật: 'Hello, I'm Grandpa!'.",
      ob:"Ông bà cho bé mượn khăn, mũ để mai hoá trang thành ông bà.",
      toi:"Kể lại Tích Chu bằng 4 câu, bé kể câu cuối: 'Tích Chu đi lấy nước cho bà.'. Ôm bé, chúc ông bà ở xa ngủ ngon bằng tiếng Trung: 奶奶晚安！(nǎinai wǎn'ān!)" },
    { chuyen:"Bé hoá trang thành ông bà",
      en:{v:2, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé nói từ thật to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại, vừa xem vừa đóng vai."},
      zh:{v:2, t:"Nếu bé muốn, xem lại 我的家人在哪里, bé trong trang phục ông bà đi trốn."},
      special:"Ngày hoá trang: bé đóng vai nhân vật trong video",
      doi:"Bé hoá trang thành ông hoặc bà: đội mũ, quàng khăn, chống 'gậy' bằng lõi giấy to. Bé đi chậm quanh nhà, chào mọi người: 'Hello! I'm Grandpa!', '我是爷爷！(wǒ shì yéye!)'. Hoặc bé hoá trang thành chú chó Patches, bò bằng tay chân và chơi trò 'Wait!' với mẹ. Mẹ chụp ảnh gửi ông bà thật.",
      toi:"Hỏi bé: 'Làm ông bà có vui không? Đi chậm có mệt không?'. Mẹ kể 1 kỷ niệm của mẹ với ông bà hồi mẹ còn bé." },
    { chuyen:"Bé kể chuyện cho ông bà",
      en:{v:1, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:0, t:"Mở 家庭称呼歌 một lần, bé chỉ ảnh từng người."},
      doi:"Thăm hoặc gọi video cho ông bà: bé kể lại 1 câu chuyện của 2 tuần (Nàng tiên Ốc hoặc Tích Chu) trong khoảng 1 phút, rồi nói 'I love you, Grandma! 奶奶，我爱你！'. Ông bà hỏi lại bé 1 câu về truyện.",
      toi:"Ôm bé, hỏi: 'Con thích nhà nội hay nhà ngoại? Vì sao con thương cả hai?'. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 101 – Màu sắc quanh bé ===================== */
window.CT_DETAIL45[101] = {
  sub: "Màu sắc quanh bé",
  vocab: {
    en: [["red","🔴","màu đỏ",false],["blue","🔵","màu xanh dương",false],["yellow","🟡","màu vàng",false],["green","🟢","màu xanh lá",false],["pink","🌸","màu hồng",false],["orange","🟠","màu cam",false],["purple","🟣","màu tím",false],["white","⚪","màu trắng",false],["shoes","👟","đôi giày",false],["jump","🦘","nhảy",true]],
    zh: [["红色","hóngsè","màu đỏ","🔴"],["蓝色","lánsè","màu xanh dương","🔵"],["黄色","huángsè","màu vàng","🟡"],["绿色","lǜsè","màu xanh lá","🟢"],["粉色","fěnsè","màu hồng","🌸"],["白色","báisè","màu trắng","⚪"],["彩虹","cǎihóng","cầu vồng","🌈"]],
    en_phr: [["I see something blue.","blue","🔵"],["I love my white shoes!","white","👟"],["Jump on red!","red","🔴"],["The banana is yellow.","yellow","🍌"]],
    zh_phr: [["这是红色。","红色","zhè shì hóngsè.","Đây là màu đỏ.","🔴"],["我喜欢绿色。","绿色","wǒ xǐhuan lǜsè.","Con thích màu xanh lá.","🟢"],["彩虹很漂亮！","彩虹","cǎihóng hěn piàoliang!","Cầu vồng đẹp quá!","🌈"]],
    seq: [["👟","white shoes","白色的鞋"],["🍓","red shoes","红色的鞋"],["🫐","blue shoes","蓝色的鞋"],["🟤","brown shoes","棕色的鞋"]]
  },
  media: {
    en: [
      {t:"Red Yellow Green Blue (The Bumble Nums)",u:"https://www.youtube.com/watch?v=aMTIm-D1l54",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Pink Purple Orange Brown (The Bumble Nums)",u:"https://www.youtube.com/watch?v=f8PoDBzz4I8",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Pete the Cat: I Love My White Shoes – đọc to",u:"https://www.youtube.com/watch?v=8CLfVBW0WfQ",kind:"story",ch:"Magical Little Minds - Read Along Storytime"},
      {t:"I See Something Blue – Colors Song",u:"https://www.youtube.com/watch?v=jYAWf8Y91hA",kind:"game",min:3,ch:"Super Simple Songs - Kids Songs"}
    ],
    zh: [
      {t:"颜色歌 Colors Song – Bài hát màu sắc",u:"https://www.youtube.com/watch?v=iij7vZG15Cc",kind:"song_action",ch:"Cool Panda Chinese Learning"},
      {t:"颜色歌 Rainbow Colors – Màu cầu vồng",u:"https://www.youtube.com/watch?v=ekMMZsvvREM",kind:"song_action",ch:"Learn Mandarin Chinese 中文 with AliMiMi"},
      {t:"彩虹天地 Rainbow Colors (chữ phồn thể trên hình)",u:"https://www.youtube.com/watch?v=rfTMI53hslY",kind:"lesson",ch:"繁中 Little Chinese Learners [Traditional Chinese]"}
    ]
  },
  weeks: [
    {title:"Hát cùng các màu (Tuần Ca nhạc)", tale:{t:"Tấm Cám (chỉ kể nửa đầu)",id:"tam_cam"},
     toi_vi:[{t:"Lộn cầu vồng",type:"dong_dao",lyr:"Lộn cầu vồng\nNước trong nước chảy\nCó cô mười bảy\nCó chị mười ba\nHai chị em ta\nCùng lộn cầu vồng"},{t:"Con gà cục tác cục te",type:"ve",lyr:"Con gà cục tác cục te\nHay đỗ đầu hè hay chạy rông rông\nMá gà thì đỏ hồng hồng\nCái mỏ thì nhọn cái mồng thì tươi\nCái chân hay đạp, hay bươi\nCái cánh hay vỗ lên trời gió bay"}],
     book_vi:{t:"Chuyện ly kỳ về hình khối, màu sắc, số đếm (bộ)",author:"Nhiều tác giả, họa sĩ Việt",publisher:"NXB Trẻ"}},
    {title:"Chú mèo Pete và đôi giày trắng (Tuần Kể chuyện)", tale:{t:"Sự tích dưa hấu",id:"su_tich_dua_hau"},
     toi_vi:[{t:"Trong đầm gì đẹp bằng sen",type:"ca_dao",lyr:"Trong đầm gì đẹp bằng sen\nLá xanh bông trắng lại chen nhị vàng\nNhị vàng bông trắng lá xanh\nGần bùn mà chẳng hôi tanh mùi bùn"},{t:"Câu đố quả dưa hấu",type:"cau_do",lyr:"Quả tròn to, da xanh xanh\nRuột trong đỏ chót mát lành"}]}
  ],
  obs: [["en","Gọi đúng 4 màu red, yellow, green, blue"],["en","Hát được câu “I love my … shoes” với màu khác nhau"],["zh","Nói 红色, 黄色, 绿色, 蓝色 khi chỉ đồ vật"],["zh","Trả lời 我喜欢… khi được hỏi thích màu gì"],["vi","Kể lại Sự tích dưa hấu và nói được các màu của quả dưa"],["td","Phân loại đồ vật theo màu vào đúng rổ"],["vd","Nhảy đúng lên tờ giấy màu khi nghe gọi"],["xh","Giới thiệu đồ vật cho người khác nghe"]],
  days: [
    { chuyen:"Bốn màu đầu tiên",
      en:{v:0, t:"Lần 1 – xem và chỉ. Mở qua YouTube Kids, tắt tự phát. Mẹ để sẵn 4 đồ vật màu đỏ, vàng, xanh lá, xanh dương trên bàn. Mỗi khi bài hát gọi một màu, bé chỉ vào đồ đúng màu. Lần đầu mẹ chỉ cùng bé.", b:"Red! It's red."},
      zh:{v:0, t:"Lần 1 – chạm màu. Bài rất ngắn, mở 2 lần. Dùng lại 4 đồ vật. Nghe 红色 (hóngsè – đỏ), 蓝色 (lánsè – xanh dương), 黄色 (huángsè – vàng), 绿色 (lǜsè – xanh lá) thì bé chạm vào đồ đúng màu. Cùng một đồ vật cho cả hai thứ tiếng: red = 红色.", b:"红色！(hóngsè!)"},
      words:{en:[0,1,2,3],zh:[0,1,2,3]},
      doi:"Săn màu trong nhà: mẹ đặt 4 cái rổ, mỗi rổ lót một tờ giấy đỏ, vàng, xanh lá, xanh dương. Bé đi khắp nhà tìm đồ chơi, đồ dùng to hơn nắm tay, bỏ vào rổ đúng màu. Mỗi lần bỏ vào, bé nói tên màu bằng tiếng Anh. Đếm xem rổ nào nhiều nhất.",
      ob:"Ông bà cùng bé tìm đồ vật màu đỏ trong nhà, tìm được thì nói 'đỏ'.",
      toi:"Kể chuyện Tấm Cám (chỉ nửa đầu, bằng lời của mẹ): cô Tấm hiền lành, chăm chỉ, nhưng hay bị bắt làm việc nặng. Mỗi lần Tấm buồn, ông Bụt hiện lên giúp. Đến ngày hội làng, Tấm cũng muốn đi hội. Mẹ dừng hỏi: 'Con đoán ông Bụt sẽ giúp Tấm thế nào?'." },
    { chuyen:"Nhảy lên màu",
      en:{v:0, t:"Lần 2 – nhảy theo màu. Đặt 4 tờ giấy đỏ, vàng, xanh lá, xanh dương trên sàn, cách nhau một bước. Nghe màu nào, bé nhảy lên tờ giấy màu đó. Cuối bài chơi đóng băng: mẹ dừng nhạc, bé đứng im trên một màu và nói tên màu ấy.", b:"Jump on blue!"},
      zh:{v:1, t:"Lần 1 – tìm màu trong phòng. Mẹ dừng ở mỗi màu, bé chạy đi tìm một đồ vật màu đó trong phòng (to hơn nắm tay), mang về và nói tên màu bằng tiếng Trung.", b:"黄色在哪里？(huángsè zài nǎlǐ?)"},
      words:{en:[0,1,2,3,9],zh:[0,1,2,3]},
      doi:"Pha màu kỳ diệu: mẹ cho bé 2 màu nước vàng và xanh dương cùng một tờ giấy. Bé chấm vàng, rồi chấm xanh chồng lên: ra xanh lá! Thử tiếp đỏ với vàng: ra cam. Bé nói 'Yellow and blue – green!'. Rửa tay sạch sau khi chơi.",
      ob:"Ông bà cùng bé chấm màu vàng và màu xanh lên giấy xem ra màu gì.",
      toi:"Đồng dao Lộn cầu vồng: mẹ và bé nắm hai tay nhau đung đưa theo nhịp, câu cuối 'cùng lộn cầu vồng' thì xoay một vòng (mẹ giữ tay bé chắc). Đọc 3 lần. Hỏi: 'Cầu vồng có những màu gì?'.", lyr:"Lộn cầu vồng" },
    { chuyen:"Màu hồng, màu tím, màu cam",
      en:{v:1, t:"Lần 1 – chạm đồ đúng màu. Bài hát có 4 màu mới: pink (hồng), purple (tím), orange (cam), brown (nâu). Mỗi khi nghe màu mới, mẹ dừng lại, bé chạy đến chạm một đồ vật màu đó trong phòng rồi quay về chỗ ngồi.", b:"Touch something pink!"},
      zh:{v:0, t:"Lần 2 – mặc màu. Bé chọn 1 chiếc áo hoặc mũ có màu trong bài. Mở bài, nghe đúng màu áo mình thì đứng dậy xoay một vòng. Mẹ dạy thêm 粉色 (fěnsè – hồng) và 白色 (báisè – trắng) cho màu áo của mẹ.", b:"这是粉色。(zhè shì fěnsè.)"},
      words:{en:[4,5,6],zh:[0,1,2,3,4]},
      doi:"Đĩa trái cây cầu vồng: mẹ và bé xếp trái cây, rau thành hình cầu vồng trên đĩa: cà chua đỏ, cà rốt cam, chuối vàng, dưa chuột xanh, nho tím (mẹ cắt nho làm tư). Bé gọi tên màu bằng tiếng Anh trước khi ăn từng miếng.",
      ob:"Ông bà cùng bé xếp trái cây đủ màu lên đĩa, bé gọi tên màu trước khi ăn.",
      toi:"Đọc 1 cuốn về màu sắc trong bộ 'Chuyện ly kỳ về hình khối, màu sắc, số đếm' (NXB Trẻ). Mỗi trang bé chỉ một màu nói tiếng Việt, mẹ nói tiếng Anh. Hỏi: 'Con thích màu nào nhất? Vì sao?'." },
    { chuyen:"Đi dạo tìm màu",
      en:{v:1, t:"Lần 2 – mẹ dừng, bé hát tiếp. Mẹ bấm dừng ngay trước khi bài gọi màu, bé đoán và nói trước: 'Pink!'. Bật tiếp xem có đúng không. Sau đó chơi đóng băng: nhạc tắt thì bé đứng im và chạm vào một đồ màu tím gần nhất.", b:"Is it orange? Yes!"},
      zh:{v:1, t:"Lần 2 – hát theo. Mẹ tắt tiếng ở mỗi màu, bé nói to tên màu bằng tiếng Trung rồi mẹ bật tiếng lại xem đúng không. Mỗi màu đúng, bé vỗ tay một cái.", b:"绿色，对了！(lǜsè, duì le!)"},
      words:{en:[4,5,6,7],zh:[0,1,2,3]},
      doi:"Buổi chiều, dắt tay bé đi một vòng quanh khu nhà. Mỗi khi thấy một màu (lá cây, xe, mái nhà, hoa), bé nói tên màu bằng tiếng Anh. Mẹ đếm: hôm nay bé tìm được mấy màu? Về nhà bé vẽ lại 3 thứ đã thấy.",
      ob:"Ông bà dắt bé đi dạo, chỉ cây, hoa, xe rồi hỏi bé màu gì.",
      toi:"Vè Con gà cục tác cục te: mẹ đọc chậm; đến 'Má gà thì đỏ hồng hồng' thì chấm nhẹ vào má bé, 'cái mỏ thì nhọn' chụm tay làm mỏ, 'cái cánh hay vỗ' thì vỗ hai tay. Hỏi: 'Con gà có những màu gì?'.", lyr:"Con gà cục tác cục te" },
    { chuyen:"Màu con thích nhất",
      en:{v:0, t:"Lần 3 – bé nói trước video. Mẹ dừng trước mỗi màu, bé nói trước rồi nhảy lên tờ giấy đúng màu; xong mới bật tiếp. Lần này mẹ đổi chỗ các tờ giấy cho khó hơn.", b:"Red, yellow, green, blue!"},
      zh:{v:0, t:"Lần 3 – bé nói trước. Mẹ dừng trước mỗi màu, bé nói trước tên màu bằng tiếng Trung và giơ đồ vật đúng màu. Hết bài mẹ hỏi 你喜欢什么颜色？, bé trả lời 我喜欢… (wǒ xǐhuan…).", b:"我喜欢红色。(wǒ xǐhuan hóngsè.)"},
      words:{en:[0,1,2,3],zh:[0,1,2,3]},
      doi:"Chọn đồ một màu: bé chọn màu yêu thích, tự tìm trong tủ 1–2 thứ màu đó (áo, mũ, tất) để mai biểu diễn. Bé xếp lên giường và nói 'My favourite colour is…'. Mẹ chụp ảnh.",
      ob:"Ông bà giúp bé chọn áo, mũ cùng một màu bé thích.",
      toi:"Kể tiếp Tấm Cám: Tấm muốn đi hội nhưng phải nhặt xong một thúng thóc lẫn gạo. Ông Bụt gọi đàn chim sẻ xuống nhặt giúp. Bụt còn cho Tấm quần áo đẹp nhiều màu và đôi hài xinh. Tấm đi hội, đánh rơi một chiếc hài; nhà vua nhặt được, cho tìm người đi vừa. Tấm thử vừa khít, nhà vua chọn Tấm làm vợ. Kết ở đám cưới vui vẻ." },
    { chuyen:"Ca sĩ màu sắc",
      en:{v:1, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 ngôi sao (tối đa 3). Sau đó bé chọn 1 bài thích nhất tuần để xem lại và làm 'ca sĩ chính'."},
      zh:{v:0, t:"Nếu bé muốn, xem lại 颜色歌 và chạm vào đồ đúng màu."},
      special:"Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip",
      doi:"Bé mặc bộ đồ một màu đã chọn hôm qua. Bé bước ra 'sân khấu', giới thiệu: 'My favourite colour is red! 我喜欢红色！', rồi hát và nhảy theo bài Red Yellow Green Blue hoặc 颜色歌 khoảng 1 phút. Mẹ quay clip. Cả nhà giơ đồ vật đúng màu bé đang hát để cổ vũ.",
      toi:"Đồng dao Lộn cầu vồng, lần này bé tự đọc theo mẹ và xoay vòng cùng bố.", lyr:"Lộn cầu vồng" },
    { chuyen:"Lá cây nhiều màu",
      en:{v:0, t:"Ôn nhẹ: bé chọn bài thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:1, t:"Mở bài màu sắc một lần, bé chỉ các màu trên quần áo cả nhà."},
      doi:"Đi công viên cùng gia đình, nắm tay người lớn khi đi đường. Bé nhặt 3 chiếc lá hoặc cánh hoa rụng khác màu (xanh, vàng, nâu) và nói tên màu bằng tiếng Anh, tiếng Trung. Về nhà dán lá lên giấy, mẹ viết tên màu bên cạnh.",
      ob:"Ông bà dắt bé ra công viên nhặt lá rụng và hỏi bé lá màu gì.",
      toi:"Bé kể lại chuyện Tấm Cám nửa đầu bằng 3 câu: chim sẻ nhặt thóc, Tấm đi hội, vua tìm được Tấm. Mẹ hỏi: 'Áo của Tấm màu gì nhỉ? Con tưởng tượng xem.'" },
    { chuyen:"Đôi giày trắng của mèo Pete",
      en:{v:2, t:"Lần 1 – xem và chỉ. Truyện chú mèo Pete có đôi giày trắng, đi dạo giẫm phải nhiều thứ nên giày đổi màu. Nếu video dài hơn 8 phút, chỉ xem 5 phút đầu. Mỗi khi giày đổi màu, mẹ dừng lại hỏi 'What colour?', bé chỉ và nói màu.", b:"Look! His shoes are red."},
      zh:{v:2, t:"Lần 1 – kể chuyện cầu vồng. Chữ trên hình là phồn thể, lời là tiếng phổ thông. Trước khi xem, mẹ vẽ sẵn một cầu vồng chưa tô và kể: 'Sau cơn mưa, trên trời hiện lên một cây cầu nhiều màu tên là 彩虹 (cǎihóng)'. Khi xem, bé tô cầu vồng, nghe tên màu nào thì tô màu đó.", b:"彩虹！(cǎihóng!)"},
      words:{en:[7,8,0],zh:[6,0,1]},
      doi:"Vẽ đôi giày của Pete: mẹ vẽ một đôi giày trắng lên 4 tờ giấy. Mẹ kể lại chuyện Pete, bé tô giày theo từng đoạn: tờ 1 để trắng, tờ 2 tô đỏ, tờ 3 tô xanh, tờ 4 tô nâu. Bé vừa tô vừa hát 'I love my red shoes!'.",
      ob:"Ông bà vẽ đôi giày trên giấy, bé tô màu theo chuyện chú mèo Pete.",
      toi:"Kể chuyện Sự tích dưa hấu: An Tiêm cùng vợ con bị đưa ra một hòn đảo hoang. Thay vì than thở, An Tiêm chăm chỉ dựng nhà, kiếm ăn. Một hôm chim thả xuống những hạt lạ màu đen. Mẹ dừng hỏi: 'Con đoán hạt đen ấy mọc thành cây gì?'." },
    { chuyen:"Màu gì tiếp theo?",
      en:{v:2, t:"Lần 2 – 'Chuyện gì xảy ra tiếp?'. Mẹ dừng trước mỗi chỗ Pete giẫm phải một thứ mới, hỏi 'What colour next?'. Bé đoán, rồi bật tiếp kiểm tra. Đoán đúng, bé hát 'I love my … shoes!' với màu mới.", b:"What colour next?"},
      zh:{v:2, t:"Lần 2 – dán cầu vồng. Mẹ cắt 5 dải giấy đỏ, vàng, xanh lá, xanh dương, tím. Khi nghe tên màu, bé dán dải giấy đó lên thành cầu vồng. Hết bài, bé đếm cầu vồng có mấy màu.", b:"红色，黄色，绿色，蓝色。(hóngsè, huángsè, lǜsè, lánsè.)"},
      words:{en:[7,8,0,1],zh:[6,0,2,3,1]},
      doi:"Thí nghiệm màu loang: mẹ pha 2 cốc nước màu thực phẩm (đỏ và xanh), trải khăn dưới bàn. Bé nhúng một góc tờ khăn giấy trắng vào cốc đỏ, xem màu loang dần lên như giày của Pete đổi màu. Góc khác nhúng cốc xanh. Bé nói: 'White… red! White… blue!'.",
      ob:"Ông bà cho bé nhúng góc khăn giấy vào nước màu để xem màu loang.",
      toi:"Kể tiếp: hạt mọc thành dây, ra những quả to, vỏ xanh, ruột đỏ, hạt đen, ăn ngọt mát. An Tiêm khắc tên lên quả, thả xuống biển để người trong đất liền biết. Thuyền tìm đến, cả nhà được đón về. Hỏi: 'Quả dưa hấu có mấy màu? Kể tên các màu.'" },
    { chuyen:"Mẹ thấy một thứ màu xanh",
      en:{v:3, t:"Lần 1 – đoán đồ vật theo màu. Bài hát kiểu 'Mẹ thấy một thứ màu…'. Mỗi khi bài nói một màu, mẹ dừng lại trước khi đồ vật hiện ra, bé đoán đó là gì (nói tiếng Việt cũng được). Bật tiếp xem có đúng không.", b:"I see something blue. What is it?"},
      zh:{v:1, t:"Lần 3 – nói trước, thêm chuyển ngữ. Mẹ dừng trước mỗi màu, bé nói trước bằng tiếng Trung. Hết bài chơi đổi tiếng: mẹ nói 'pink', bé nói 粉色; 'white' – 白色; 'green' – 绿色.", b:"粉色和白色。(fěnsè hé báisè.)"},
      words:{en:[1,0,2,3],zh:[4,5,3]},
      doi:"Chơi 'I spy' trong phòng: mẹ nói 'I see something blue', bé đi tìm và chạm vào đồ màu xanh dương. Đổi vai: bé nói 'I see something…' để mẹ đi tìm. Chơi 6 lượt; xen kẽ, mẹ nói tiếng Trung '我看到红色 (wǒ kàndào hóngsè)'.",
      ob:"Ông bà nói 'Bà thấy một thứ màu đỏ' để bé đi tìm và chạm vào.",
      toi:"Ca dao 'Trong đầm gì đẹp bằng sen…' (lời trong gói học liệu). Nếu có tranh hoa sen, mẹ chỉ lá xanh, bông trắng, nhị vàng theo từng câu. Hỏi: 'Hoa sen có mấy màu? Màu xanh lá tiếng Anh là gì?' (green).", lyr:"Trong đầm gì đẹp bằng sen" },
    { chuyen:"Bé làm mèo Pete",
      en:{v:2, t:"Lần 3 – kể lại bằng tranh. Xem truyện thêm một lần (tối đa 5 phút). Sau đó bé xếp 4 tranh giày đã tô (trắng, đỏ, xanh, nâu) đúng thứ tự và kể lại bằng tiếng Việt; mỗi tranh bé hát một câu 'I love my … shoes!'.", b:"I love my brown shoes!"},
      zh:{v:0, t:"Câu dài hơn: mở 颜色歌, mỗi màu bé nói cả câu 这是红色 (zhè shì hóngsè), 这是蓝色… và giơ đồ vật đúng màu.", b:"这是蓝色。(zhè shì lánsè.)"},
      words:{en:[7,8,0,1],zh:[0,1,2,3]},
      doi:"Đóng vai Pete: bé đi tất trắng, mẹ trải 3 tờ giấy đỏ, xanh dương, nâu trên sàn làm 'đống dâu', 'đống việt quất', 'vũng bùn'. Bé đi qua từng tờ, mỗi lần dừng lại hát 'I love my … shoes!' với màu mới, cuối cùng nói 'It's all good!'.",
      ob:"Ông bà trải 3 tờ giấy màu, bé đi qua từng tờ và nói tên màu.",
      toi:"Kể lại Sự tích dưa hấu, bé đóng vai An Tiêm: gieo 'hạt' (giả vờ), tưới nước, rồi ôm 'quả dưa' (gối tròn). Mẹ đố: 'Quả tròn to, da xanh xanh / Ruột trong đỏ chót mát lành'. Bé đoán và nói 2 màu của dưa hấu bằng tiếng Anh.", lyr:"Câu đố quả dưa hấu" },
    { chuyen:"Phòng triển lãm màu",
      en:{v:3, t:"Lần 2 – bé nói trước. Mẹ dừng trước khi đồ vật hiện ra, bé đoán bằng tiếng Anh: 'It's a…!' hoặc chỉ cần nói màu. Câu dài hơn: bé nói 'I see something red.' rồi để mẹ đoán.", b:"I see something red."},
      zh:{v:2, t:"Lần 3 – bé kể chuyện cầu vồng. Xem lại bài; sau đó bé cầm cầu vồng giấy đã dán, kể bằng tiếng Việt 'Sau cơn mưa…' và nói tên từng màu bằng tiếng Trung. Mẹ hỏi 你喜欢什么颜色？, bé trả lời 我喜欢…", b:"你喜欢什么颜色？(nǐ xǐhuan shénme yánsè?)"},
      words:{en:[0,1,2,3,4],zh:[6,0,1,2,3]},
      doi:"Bé chọn 5 đồ vật 5 màu khác nhau trong nhà, xếp thành hàng trên bàn làm 'phòng triển lãm'. Bé làm hướng dẫn viên, giới thiệu cho bố: 'This is red. This is blue…'. Bố hỏi lại 1–2 màu bằng tiếng Trung để bé trả lời.",
      ob:"Ông bà nghe bé giới thiệu 'phòng triển lãm' đồ vật nhiều màu.",
      toi:"Đọc lại sách tranh màu sắc tuần trước, bé chỉ và nói màu trước khi mẹ đọc. Hỏi: 'Màu nào làm con thấy vui?'." },
    { chuyen:"Picnic cầu vồng",
      en:{v:2, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé nói tên màu thật to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại."},
      zh:{v:2, t:"Nếu bé muốn, xem lại bài cầu vồng và giơ cầu vồng giấy."},
      special:"Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung",
      doi:"Trải khăn ở sân hoặc công viên, mang đồ ăn đủ màu: chuối vàng, dưa hấu đỏ (mẹ bỏ hạt), dưa chuột xanh, sữa trắng. Trước khi ăn, bé gọi tên màu và tên món bằng tiếng Anh; mẹ nói tiếng Trung để bé nhắc lại: 'Yellow banana – 黄色的香蕉 (huángsè de xiāngjiāo)'. Ai gọi đúng thì được ăn miếng đó trước.",
      toi:"Hỏi bé: 'Hôm nay con ăn món màu gì?'. Mẹ đọc lại câu đố quả dưa hấu, bé trả lời thật nhanh.", lyr:"Câu đố quả dưa hấu" },
    { chuyen:"Tìm màu nhanh",
      en:{v:3, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:0, t:"Mở 颜色歌 một lần, cả nhà cùng chạm màu."},
      doi:"Cả nhà chơi 'Tìm màu nhanh': mẹ hô một màu bằng tiếng Anh hoặc tiếng Trung, ai chạm vào đồ vật đúng màu trước thì được 1 điểm. Lượt cuối bé làm trọng tài, hô màu cho mọi người.",
      toi:"Bé kể điều vui nhất trong 2 tuần: đôi giày của Pete, quả dưa hấu hay cầu vồng. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 102 – Hình tròn, vuông, tam giác ===================== */
window.CT_DETAIL45[102] = {
  sub: "Hình tròn, vuông, tam giác",
  vocab: {
    en: [["circle","⭕","hình tròn",false],["square","🟦","hình vuông",false],["triangle","🔺","hình tam giác",false],["rectangle","🚪","hình chữ nhật",false],["star","⭐","ngôi sao",false],["shape","🔷","hình",false],["big","🐘","to",false],["small","🐭","nhỏ",false],["draw","✍️","vẽ",true]],
    zh: [["圆形","yuánxíng","hình tròn","⭕"],["方形","fāngxíng","hình vuông","🟦"],["三角形","sānjiǎoxíng","hình tam giác","🔺"],["星星","xīngxing","ngôi sao","⭐"],["形状","xíngzhuàng","hình dạng","🔷"],["大","dà","to","🐘"],["小","xiǎo","nhỏ","🐭"]],
    en_phr: [["A circle is round.","circle","⭕"],["Draw a triangle in the air.","triangle","🔺"],["The window is a square.","square","🪟"],["Twinkle, twinkle, little star.","star","⭐"]],
    zh_phr: [["这是圆形。","圆形","zhè shì yuánxíng.","Đây là hình tròn.","⭕"],["我画三角形。","三角形","wǒ huà sānjiǎoxíng.","Con vẽ hình tam giác.","🔺"],["大方形，小方形。","小方形","dà fāngxíng, xiǎo fāngxíng.","Hình vuông to, hình vuông nhỏ.","🟦"]],
    seq: [["🟦","draw a square","画方形"],["🔺","add a triangle roof","画三角形"],["⭕","add a round sun","画圆形"],["🏠","a house!","房子"]]
  },
  media: {
    en: [
      {t:"The Shape Song #1",u:"https://www.youtube.com/watch?v=TJhfl5vdxp4",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Learn Shapes in English and Chinese – Find Shapes in Objects (song ngữ Anh – Trung)",u:"https://www.youtube.com/watch?v=PELIk6BGndc",kind:"lesson",min:6,ch:"Kangaroo Friends"},
      {t:"I See Something Blue – Colors Song (ôn màu)",u:"https://www.youtube.com/watch?v=jYAWf8Y91hA",kind:"game",min:3,ch:"Super Simple Songs - Kids Songs"}
    ],
    zh: [
      {t:"形状 Shape – Hình khối",u:"https://www.youtube.com/watch?v=9HrVv-0KBlg",kind:"song_action",min:0.6,ch:"Cool Panda Chinese Learning"},
      {t:"形状变变变 – Hình khối biến hình",u:"https://www.youtube.com/watch?v=EsaeLsfXeqw",kind:"song_action",min:2.4,ch:"兔儿乐园"},
      {t:"颜色歌 Colors Song (ôn màu)",u:"https://www.youtube.com/watch?v=iij7vZG15Cc",kind:"song_action",ch:"Cool Panda Chinese Learning"}
    ]
  },
  weeks: [
    {title:"Thám tử hình khối (Tuần Khám phá)", tale:{t:"Bánh chưng, bánh giầy",id:"banh_chung_banh_giay"},
     toi_vi:[{t:"Câu đố cái nón",type:"cau_do",lyr:"Cái gì bằng lá\nChóp nhọn, vành tròn\nNgười lớn, trẻ con\nNắng, mưa đều đội?"},{t:"Câu đố mặt trăng (bóng trăng)",type:"cau_do",lyr:"Bằng cái vung, vùng xuống ao\nĐào chẳng thấy, lấy chẳng được"}],
     book_vi:{t:"Chuyện ly kỳ về hình khối, màu sắc, số đếm (bộ)",author:"Nhiều tác giả, họa sĩ Việt",publisher:"NXB Trẻ"}},
    {title:"Ai tìm nhanh hơn? (Tuần Thử thách)", tale:{t:"Sự tích chú Cuội cung trăng",id:"chu_cuoi"},
     toi_vi:[{t:"Thằng Cuội ngồi gốc cây đa",type:"dong_dao",lyr:"Thằng Cuội ngồi gốc cây đa\nĐể trâu ăn lúa gọi cha ời ời\nCha còn cắt cỏ trên trời\nMẹ còn cưỡi ngựa đi mời quan viên\nÔng thì cầm bút cầm nghiên\nÔng thì cầm tiền đi chuộc lá đa"}]}
  ],
  obs: [["en","Gọi đúng circle, square, triangle"],["en","Vẽ được 3 hình trên không khi nghe tên"],["zh","Nói 圆形, 方形, 三角形 khi chỉ hình"],["zh","Nói được câu 这是圆形"],["vi","Kể được bánh chưng hình vuông, bánh giầy hình tròn"],["td","Đếm đúng số góc của hình tam giác và hình vuông"],["td","Ghép hình vuông và tam giác thành ngôi nhà"],["xh","Chờ lượt khi chơi thi với mẹ"]],
  days: [
    { chuyen:"Vẽ hình trên không",
      en:{v:0, t:"Lần 1 – vẽ trên không. Mở qua YouTube Kids, tắt tự phát. Bài hát giới thiệu circle (tròn), square (vuông), triangle (tam giác), rectangle (chữ nhật). Mỗi hình mới, mẹ dừng lại, cầm tay bé vẽ hình đó trong không khí bằng một ngón tay.", b:"Let's draw a circle!"},
      zh:{v:0, t:"Lần 1 – vẽ trên không. Bài chỉ hơn nửa phút, mở 3 lần. Nghe 圆形 (yuánxíng – tròn), 方形 (fāngxíng – vuông), 三角形 (sānjiǎoxíng – tam giác), bé vẽ hình đó trong không khí giống như với bài tiếng Anh. Mẹ nói: circle = 圆形.", b:"画圆形！(huà yuánxíng!)"},
      words:{en:[0,1,2,8],zh:[0,1,2]},
      doi:"Thám tử hình khối: mẹ cắt sẵn 3 hình bằng bìa: tròn, vuông, tam giác. Bé cầm từng hình đi khắp nhà tìm đồ vật giống hình đó: cái đĩa tròn, khung ảnh vuông, mái nhà đồ chơi tam giác… Tìm được thì đặt hình bìa cạnh đồ vật và nói 'Circle!'. Đếm mỗi hình tìm được mấy thứ.",
      ob:"Ông bà cùng bé tìm đồ vật hình tròn trong nhà như cái đĩa, cái đồng hồ.",
      toi:"Kể chuyện Bánh chưng, bánh giầy: vua Hùng muốn chọn người nối ngôi, bảo các con dâng lễ vật ý nghĩa nhất. Các hoàng tử đi tìm của ngon vật lạ khắp nơi. Chỉ có Lang Liêu nghèo, chẳng biết lấy gì. Mẹ dừng hỏi: 'Nếu con là Lang Liêu, con sẽ dâng gì cho vua?'." },
    { chuyen:"Hình nào lăn được?",
      en:{v:1, t:"Lần 1 – tìm hình trong đồ vật. Video 6 phút dạy hình khối bằng cả tiếng Anh và tiếng Trung, rất hợp với nhà mình. Chỉ xem đoạn đầu 5 phút. Mỗi khi video chỉ hình trong một đồ vật, mẹ dừng, hỏi 'What shape?', bé trả lời bằng tiếng Anh hay tiếng Trung đều được.", b:"What shape is it?"},
      zh:{v:1, t:"Lần 1 – làm hình bằng tay. Bài khoảng 2 phút rưỡi. Nghe 圆形, hai tay vòng lên đầu thành hình tròn; nghe 三角形, hai ngón cái và hai ngón trỏ chạm nhau thành tam giác; nghe 方形, hai tay giơ thành khung vuông.", b:"三角形！(sānjiǎoxíng!)"},
      words:{en:[0,1,2,5],zh:[0,1,2,4]},
      doi:"Thí nghiệm lăn: mẹ đưa bé 1 vật tròn (quả bóng, cuộn băng dính to), 1 vật vuông (hộp giấy, khối gỗ) và 1 miếng bìa tam giác. Dựng nghiêng một tấm bìa làm dốc. Thả từng vật: vật nào lăn, vật nào trượt hay đứng yên? Bé nói 'The circle rolls!'. Hỏi bé: 'Vì sao bánh xe hình tròn?'.",
      ob:"Ông bà cho bé thả quả bóng và hộp giấy xuống dốc xem cái nào lăn.",
      toi:"Kể tiếp: Lang Liêu nằm mơ thấy thần mách dùng gạo nếp làm bánh. Chàng làm một chiếc bánh vuông gói lá xanh, giống như đất, và một chiếc bánh tròn màu trắng, giống như trời. Vua khen Lang Liêu hiếu thảo, quý hạt gạo, chọn chàng nối ngôi. Từ đó Tết có bánh chưng, bánh giầy. Hỏi: 'Bánh chưng hình gì? Bánh giầy hình gì?'." },
    { chuyen:"Sờ mà đoán hình",
      en:{v:0, t:"Lần 2 – tìm hình trong phòng. Mẹ dừng ở mỗi hình, bé chạy đi tìm một đồ vật đúng hình trong phòng rồi quay về nói 'It's a square!'. Đến rectangle (chữ nhật), mẹ gợi ý cánh cửa hoặc quyển sách.", b:"The door is a rectangle."},
      zh:{v:0, t:"Lần 2 – sờ hình không nhìn. Mẹ cho 3 hình bìa vào một cái túi vải. Mở bài, nghe tên hình nào, bé thò tay vào túi, sờ (không nhìn) và lấy đúng hình đó ra. Sờ thấy góc nhọn là tam giác, không có góc là hình tròn.", b:"这是方形。(zhè shì fāngxíng.)"},
      words:{en:[0,1,2,3],zh:[0,1,2]},
      doi:"Thí nghiệm đếm góc: bé dùng ngón tay sờ và đếm góc của từng hình bìa: tam giác có 3 góc, hình vuông có 4 góc, hình tròn không có góc nào. Mẹ đếm cùng bằng tiếng Anh 'one, two, three', rồi bằng tiếng Trung '一、二、三'. Hỏi: 'Hình nào nhiều góc nhất?'.",
      ob:"Ông bà cùng bé sờ và đếm góc của hình tam giác, hình vuông.",
      toi:"Đọc cuốn về hình khối trong bộ 'Chuyện ly kỳ về hình khối, màu sắc, số đếm' (NXB Trẻ). Mỗi trang bé tìm 1 hình và dùng ngón tay vẽ lại hình đó lên lòng bàn tay mẹ." },
    { chuyen:"Hình to, hình nhỏ",
      en:{v:1, t:"Lần 2 – đoạn tiếp theo (tối đa 5 phút). Lần này mẹ dừng trước khi video nói tên hình, bé nói trước bằng tiếng Anh, mẹ nói bằng tiếng Trung. Mẹ chỉ cho bé: 'circle' và '圆形' là cùng một hình tròn.", b:"Yes! It's a circle."},
      zh:{v:1, t:"Lần 2 – hình to, hình nhỏ. Làm hình bằng tay như hôm trước; xen giữa bài, mẹ hô 大! (dà – to) thì bé làm hình thật to bằng hai cánh tay, hô 小! (xiǎo – nhỏ) thì làm hình nhỏ bằng ngón tay.", b:"大圆形，小圆形。(dà yuánxíng, xiǎo yuánxíng.)"},
      words:{en:[0,1,2,6,7],zh:[0,1,2,5,6]},
      doi:"Xếp hình to – nhỏ: mẹ cắt 6 hình bằng giấy màu: 3 hình to (tròn, vuông, tam giác) và 3 hình nhỏ giống vậy. Bé ghép mỗi hình nhỏ với hình to cùng loại, rồi xếp từ to đến nhỏ. Bé nói 'Big circle, small circle'.",
      ob:"Ông bà cùng bé ghép hình tròn to với hình tròn nhỏ.",
      toi:"Câu đố: 'Cái gì bằng lá / Chóp nhọn, vành tròn / Người lớn, trẻ con / Nắng, mưa đều đội?'. Nếu nhà có nón lá, cho bé xem: chóp nhọn giống tam giác, vành tròn giống hình tròn. Bé đội thử và nói 'Circle!'.", lyr:"Câu đố cái nón" },
    { chuyen:"Ghép hình thành ngôi nhà",
      en:{v:0, t:"Lần 3 – bé nói trước video. Mẹ dừng trước mỗi hình, bé nói trước tên hình rồi vẽ trên không. Thêm thử thách: bé vẽ hình lên giấy trước khi video hiện hình.", b:"Draw a square. Good!"},
      zh:{v:0, t:"Lần 3 – bé nói trước. Mẹ dừng trước mỗi hình, bé nói trước 圆形, 方形 hay 三角形 và giơ đúng hình bìa. Bài ngắn nên chơi 2 lượt.", b:"三角形，对！(sānjiǎoxíng, duì!)"},
      words:{en:[0,1,2,8],zh:[0,1,2]},
      doi:"Thí nghiệm ghép hình: dùng các hình bìa hôm trước, bé thử ghép thành đồ vật: 1 hình vuông + 1 tam giác thành ngôi nhà, 1 hình tròn to + 2 hình tròn nhỏ thành mặt gấu, 2 tam giác chồng ngược nhau thành ngôi sao. Bé đặt tên cho tranh và nói các hình đã dùng.",
      ob:"Ông bà cùng bé ghép hình vuông và hình tam giác thành ngôi nhà.",
      toi:"Câu đố: 'Bằng cái vung, vùng xuống ao / Đào chẳng thấy, lấy chẳng được'. Nếu tối nay có trăng, mẹ đặt một chậu nước ra ban công cho bé nhìn bóng trăng (mẹ ngồi cạnh); không có trăng thì xem tranh. Hỏi: 'Trăng rằm hình gì?'.", lyr:"Câu đố mặt trăng (bóng trăng)" },
    { chuyen:"Cuốn sách hình khối",
      en:{v:1, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Sau đó bé chọn 1 video thích nhất tuần để xem lại, vừa xem vừa vẽ hình trên không."},
      zh:{v:1, t:"Nếu bé muốn, xem lại 形状变变变 và làm hình bằng tay."},
      special:"Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần",
      doi:"Gấp 2 tờ A4 thành sách 8 trang. Mẹ cắt sẵn hình tròn, vuông, tam giác, chữ nhật, ngôi sao bằng giấy màu (kéo do mẹ cầm). Mỗi trang bé dán 1 hình rồi vẽ thêm thành đồ vật: hình tròn thành mặt trời, tam giác thành mái nhà, chữ nhật thành cánh cửa. Mẹ viết tên hình tiếng Anh và tiếng Trung dưới tranh. Bé 'đọc' sách cho cả nhà.",
      toi:"Đọc cuốn sách hình khối vừa làm. Bé lật từng trang, nói tên hình bằng tiếng Việt, rồi chọn 2 trang nói tiếng Anh." },
    { chuyen:"Đi dạo tìm hình",
      en:{v:0, t:"Ôn nhẹ: bé chọn video thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:0, t:"Mở 形状 một lần, cả nhà vẽ hình trên không."},
      doi:"Đi dạo cùng gia đình, luôn nắm tay người lớn. Bé tìm hình quanh đường: biển báo tròn, cửa sổ vuông, mái nhà tam giác, bánh xe tròn. Mỗi lần thấy, bé nói tên hình bằng tiếng Anh. Về nhà bé vẽ lại 2 thứ đã thấy.",
      ob:"Ông bà dắt bé đi dạo, chỉ bánh xe, cửa sổ và hỏi bé hình gì.",
      toi:"Kể lại Bánh chưng, bánh giầy; bé nặn hai chiếc bánh bằng đất nặn: một chiếc vuông, một chiếc tròn, rồi kể vua khen Lang Liêu thế nào." },
    { chuyen:"Màu gì, hình gì?",
      en:{v:2, t:"Lần 1 – đố màu, đoán đồ vật. Đây là bài ôn màu của vòng trước, nay thêm hình. Mẹ dừng trước khi đồ vật hiện ra, bé đoán màu và hình: 'Blue… circle?'. Đoán đúng màu được 1 sao, đúng cả hình được 2 sao.", b:"Is it a blue circle?"},
      zh:{v:2, t:"Ôn màu, thêm hình: mẹ cắt hình tròn đỏ, vuông xanh, tam giác vàng. Mở 颜色歌, mỗi lần nghe màu, bé tìm hình bìa đúng màu đó và nói cả màu lẫn hình: 红色，圆形！ Mỗi lần đúng được 1 sao.", b:"红色的圆形。(hóngsè de yuánxíng.)"},
      words:{en:[0,1,2,5],zh:[0,1,2,4]},
      doi:"Ai nhanh hơn: mẹ đặt các hình bìa khắp phòng. Mẹ hô 'Triangle!' hoặc '圆形!', mẹ và bé thi đi nhanh đến chạm đúng hình. Ai chạm trước được 1 sao. Lượt cuối mẹ hô cả màu và hình: 'Red circle!'.",
      ob:"Ông bà đặt vài hình bìa quanh phòng, gọi tên hình cho bé đến chạm.",
      toi:"Kể chuyện Sự tích chú Cuội cung trăng: anh tiều phu Cuội tìm được một cây đa có lá chữa lành vết thương, liền mang về trồng và dặn vợ chỉ tưới nước sạch. Mẹ dừng hỏi: 'Nếu vợ Cuội quên lời dặn thì chuyện gì sẽ xảy ra?'." },
    { chuyen:"Ai nói trước?",
      en:{v:0, t:"Thử thách ai nói trước. Mẹ dừng trước mỗi hình, ai nói tên hình trước (mẹ hay bé) được 1 sao. Rồi chuyển ngữ: bé nói 'circle', mẹ nói 圆形; mẹ nói 方形, bé nói 'square'.", b:"Who's faster? Triangle!"},
      zh:{v:0, t:"Thử thách vẽ nhanh: mẹ dừng bài sau mỗi hình, bé vẽ hình đó lên giấy trong lúc mẹ đếm 一、二、三. Vẽ kịp được 1 sao.", b:"快画！(kuài huà!)"},
      words:{en:[0,1,2,3],zh:[0,1,2]},
      doi:"Đố vui hình khối tính sao: mẹ hỏi 5 câu: 'Bánh xe hình gì?', 'Bánh chưng hình gì?', 'Mái nhà hình gì?', 'Trăng rằm hình gì?', 'Cửa sổ nhà mình hình gì?'. Bé trả lời bằng tiếng Việt được 1 sao, bằng tiếng Anh hoặc tiếng Trung được 2 sao.",
      ob:"Ông bà hỏi bé bánh xe hình gì, bánh chưng hình gì.",
      toi:"Kể tiếp chú Cuội: một hôm vợ Cuội quên lời dặn, cây đa bỗng bật gốc bay lên trời. Cuội níu lấy rễ cây, bay theo lên tận cung trăng. Từ đó đêm rằm nhìn lên mặt trăng tròn, người ta bảo thấy chú Cuội ngồi dưới gốc cây đa. Hỏi: 'Mặt trăng đêm rằm hình gì? Tiếng Anh là gì?'." },
    { chuyen:"Xếp que thành hình",
      en:{v:1, t:"Lần 3 – ai tìm trước. Xem đoạn bé thích (tối đa 5 phút). Mẹ dừng mỗi khi video hiện một đồ vật, mẹ và bé thi nói hình của nó trước; nói được cả tiếng Anh và tiếng Trung thì được 2 sao.", b:"Say it in English and Chinese!"},
      zh:{v:1, t:"Lần 3 – cả nhà thi làm hình. Mỗi khi nghe tên hình, ai làm hình đó bằng tay nhanh nhất được 1 sao. Hết bài, bé nói cả câu 我会画圆形 (wǒ huì huà yuánxíng – con biết vẽ hình tròn).", b:"我会画圆形。(wǒ huì huà yuánxíng.)"},
      words:{en:[0,1,2,5],zh:[0,1,2,4]},
      doi:"Thử thách xếp que: mẹ đưa bé 6 que kem. Bé thử xếp 3 que thành tam giác, 4 que thành hình vuông. Hỏi: 'Có xếp được hình tròn bằng que thẳng không? Vì sao?'. Xếp đúng mỗi hình được 1 sao.",
      ob:"Ông bà đưa bé que kem, cùng bé xếp hình tam giác và hình vuông.",
      toi:"Đồng dao Thằng Cuội ngồi gốc cây đa (ở trường bé có thể đọc là 'Chú Cuội'). Mẹ đọc chậm, bé vẽ một hình tròn to làm mặt trăng, bên trong có cây đa và chú Cuội.", lyr:"Thằng Cuội ngồi gốc cây đa" },
    { chuyen:"Hình nào biến mất?",
      en:{v:2, t:"Lần 2 – bé nói trước bằng câu dài. Mẹ dừng trước khi đồ vật hiện ra, bé nói một câu: 'I see something blue. It's a circle!'. Nói đủ câu được 2 sao.", b:"I see something yellow."},
      zh:{v:2, t:"Thử thách chuyển ngữ: mẹ giơ hình bìa và nói tiếng Anh 'blue square', bé nói tiếng Trung 蓝色的方形. Rồi mở bài kiểm tra màu. Mỗi lần đúng được 1 sao.", b:"蓝色的方形。(lánsè de fāngxíng.)"},
      words:{en:[0,1,2,5],zh:[0,1,2]},
      doi:"Ai biến mất? Mẹ xếp 5 hình bìa thành hàng, bé nhìn rồi nhắm mắt. Mẹ giấu 1 hình. Bé mở mắt đoán hình nào biến mất, nói bằng tiếng Anh hoặc tiếng Trung. Chơi 5 lượt, mỗi lượt đúng được 1 sao.",
      ob:"Ông bà xếp vài hình bìa, giấu 1 hình và hỏi bé hình nào biến mất.",
      toi:"Kể lại chú Cuội bằng tranh: bé vẽ 3 cảnh: Cuội trồng cây đa, cây đa bay lên trời, Cuội ngồi trên mặt trăng tròn. Bé cầm tranh kể theo thứ tự." },
    { chuyen:"Nghe tiếng, giơ hình",
      en:{v:0, t:"Thử thách nghe: mẹ úp điện thoại, bé chỉ nghe tiếng The Shape Song. Nghe tên hình nào, bé giơ đúng hình bìa. Đúng 4 hình được 3 sao.", b:"Listen and show me!"},
      zh:{v:0, t:"Thử thách câu dài: mở 形状, mỗi hình bé nói cả câu 这是圆形 (zhè shì yuánxíng), 这是方形, 这是三角形 và giơ hình. Nói đủ 3 câu được 3 sao.", b:"这是三角形。(zhè shì sānjiǎoxíng.)"},
      words:{en:[0,1,2,3,4],zh:[0,1,2,3]},
      doi:"Tập 3 câu cho cuộc gọi ông bà ngày mai: bé chọn 3 hình thích nhất, tập nói 'This is a circle. I like stars. I can draw a square.' và tiếng Trung '这是圆形。'. Bé để sẵn cuốn sách hình khối để khoe.",
      ob:"Ông bà nghe bé tập nói câu tiếng Anh về hình tròn, hình vuông.",
      toi:"Đọc lại cuốn sách hình khối bé làm tuần trước; lần này bé tự lật và kể, mẹ chỉ hỏi 'Còn trang này?'." },
    { chuyen:"Khoe hình với ông bà",
      en:{v:2, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé nói tên hình thật to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại."},
      zh:{v:0, t:"Xem lại 形状 rồi bé dạy ông bà vẽ hình trên không trong cuộc gọi."},
      special:"Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung",
      doi:"Gọi video cho ông bà: bé giơ từng trang sách hình khối và nói 3 câu: 'This is a circle.', 'This is a triangle.', 'I like stars!'; tiếng Trung: '这是圆形。我喜欢星星！(wǒ xǐhuan xīngxing!)'. Bé đố ông bà: 'Bánh chưng hình gì?'. Gọi khoảng 5–10 phút.",
      toi:"Hỏi bé ông bà trả lời câu đố thế nào. Đọc lại câu đố cái nón, bé tự đọc câu đầu.", lyr:"Câu đố cái nón" },
    { chuyen:"Bánh mì hình khối",
      en:{v:1, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:1, t:"Mở 形状变变变 một lần, cả nhà làm hình bằng tay."},
      doi:"Bữa sáng hình khối: mẹ cắt bánh mì gối thành hình vuông và tam giác (mẹ cầm dao), dùng miệng cốc ấn thành hình tròn (mẹ giữ cốc cùng bé). Bé gọi tên hình bằng tiếng Anh hoặc tiếng Trung trước khi ăn từng miếng.",
      toi:"Bé kể điều vui nhất trong 2 tuần: chiếc nón lá, bánh chưng vuông hay mặt trăng của chú Cuội. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 103 – Đếm 1–5 ===================== */
window.CT_DETAIL45[103] = {
  sub: "Đếm 1–5",
  vocab: {
    en: [["one","1️⃣","một",false],["two","2️⃣","hai",false],["three","3️⃣","ba",false],["four","4️⃣","bốn",false],["five","5️⃣","năm",false],["duck","🦆","con vịt",false],["monkey","🐒","con khỉ",false],["jump","🦘","nhảy",true],["how many","❓","bao nhiêu",false]],
    zh: [["一","yī","một","1️⃣"],["二","èr","hai","2️⃣"],["三","sān","ba","3️⃣"],["四","sì","bốn","4️⃣"],["五","wǔ","năm","5️⃣"],["老虎","lǎohǔ","con hổ","🐯"],["猴子","hóuzi","con khỉ","🐒"],["猫","māo","con mèo","🐱"]],
    en_phr: [["Five little ducks went out one day.","ducks","🦆"],["Five little monkeys jumping on the bed.","monkeys","🐒"],["How many? Three!","Three","3️⃣"],["One, two, three, four, five!","five","🖐️"]],
    zh_phr: [["一二三四五。","五","yī èr sān sì wǔ.","Một hai ba bốn năm.","🖐️"],["五只小猴子。","猴子","wǔ zhī xiǎo hóuzi.","Năm chú khỉ con.","🐒"],["一只小猫。","小猫","yì zhī xiǎo māo.","Một chú mèo con.","🐱"]],
    seq: [["🐒","five monkeys jump","五只猴子跳"],["🤕","one bumps his head","碰到头了"],["📞","Mama calls the doctor","妈妈打电话"],["😴","no more jumping – sleep","睡觉了"]]
  },
  media: {
    en: [
      {t:"Five Little Ducks",u:"https://www.youtube.com/watch?v=pZw9veQ76fo",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Five Little Monkeys Jumping on the Bed",u:"https://www.youtube.com/watch?v=VTmmoaO2M_U",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Numberblocks – One (S1 E1)",u:"https://www.youtube.com/watch?v=jVeYnCehEFE",kind:"story",min:5.1,ch:"Numberblocks"},
      {t:"Numberblocks – Three (S1 E4)",u:"https://www.youtube.com/watch?v=6-duQqX5ECs",kind:"story",ch:"Numberblocks"}
    ],
    zh: [
      {t:"一二三四五，上山打老虎 – 1-2-3-4-5 lên núi tìm hổ",u:"https://www.youtube.com/watch?v=Tab9vAINjvM",kind:"song_action",min:1.7,ch:"某某童谣 MM's Chinese Stories"},
      {t:"一只小猫 Numbers Song – One Little Cat",u:"https://www.youtube.com/watch?v=KyveKn3uff0",kind:"song_action",ch:"Cool Panda Chinese Learning"},
      {t:"五只小猴子 Five Little Monkeys (tiếng Trung)",u:"https://www.youtube.com/watch?v=yPzZ9bdJGLA",kind:"song_action",ch:"Chinese As A Foreign Language"}
    ]
  },
  weeks: [
    {title:"Năm chú vịt con (Tuần Ca nhạc)", tale:{t:"Cây tre trăm đốt",id:"cay_tre_tram_dot"},
     toi_vi:[{t:"Con vịt con vạc",type:"ve",lyr:"Quặc quặc, quạc quạc\nCon vịt, con vạc\nCó thương em tao\nThì lội xuống ao\nBắt ba con ốc\nThì lội xuống rộc\nBắt năm con rô\nThì lội xuống hồ\nBắt mười con diếc."},{t:"Tập tầm vông",type:"dong_dao"}],
     book_vi:{t:"Kho tàng truyện cổ tích Việt Nam (5 tập)",author:"Nguyễn Đổng Chi (sưu tầm, biên soạn)",publisher:"NXB Trẻ"}},
    {title:"Chuyện của những con số (Tuần Kể chuyện)", tale:{t:"Ba lưỡi rìu",id:"ba_luoi_riu"},
     toi_vi:[{t:"Ba bà đi bán lợn con",type:"dong_dao",lyr:"Ba bà đi bán lợn con\nBán đi chẳng được lon xon chạy về\nBa bà đi bán lợn sề\nBán đi chẳng được chạy về lon xon"}]}
  ],
  obs: [["en","Đếm từ one đến five, giơ đúng ngón tay"],["en","Trả lời “How many?” với số đến 5"],["zh","Đếm 一 đến 五 bằng tiếng Trung"],["zh","Nói 两只 khi đếm hai con vật"],["vi","Kể chuyện Ba lưỡi rìu và đếm được 3 chiếc rìu"],["td","Đếm lùi từ 5 về 1"],["td","So sánh nhóm nào nhiều hơn khi có 2–5 đồ vật"],["vd","Nhảy lần lượt qua 5 tờ giấy không giẫm ra ngoài"]],
  days: [
    { chuyen:"Năm chú vịt đi chơi",
      en:{v:0, t:"Lần 1 – xem và đếm ngón tay. Mở qua YouTube Kids, tắt tự phát. Bé giơ 5 ngón tay. Mỗi đoạn có một chú vịt không về, bé gập 1 ngón xuống. Mẹ dừng hỏi 'How many?', cùng bé đếm số ngón còn lại.", b:"How many ducks? Four!"},
      zh:{v:0, t:"Lần 1 – đếm ngón tay. Bài gần 2 phút. Nghe 一、二、三、四、五 (yī, èr, sān, sì, wǔ), bé giơ từng ngón tay. Nghe 老虎 (lǎohǔ – con hổ) thì hai tay làm vuốt hổ và gầm 'grào'.", b:"一二三四五！(yī èr sān sì wǔ!)"},
      words:{en:[0,1,2,3,4,5],zh:[0,1,2,3,4,5]},
      doi:"Đếm vịt trong chậu: mẹ thả 5 đồ chơi nổi to (vịt cao su, hộp nhựa, nắp hộp lớn) vào chậu nước. Bé lấy ra từng con và đếm 'one, two, three, four, five', rồi thả lại và đếm bằng tiếng Trung. Mẹ luôn ngồi cạnh khi bé chơi nước.",
      ob:"Ông bà ngồi cạnh, cho bé đếm 5 đồ chơi nổi trong chậu nước.",
      toi:"Kể chuyện Cây tre trăm đốt: anh nông dân hiền lành làm thuê cho phú ông, được hứa gả con gái nếu chăm chỉ làm ba năm. Đến hạn, phú ông lật lọng, bắt anh vào rừng tìm cây tre có đủ một trăm đốt. Anh tìm mãi, chỉ thấy tre ngắn. Mẹ dừng hỏi: 'Một trăm đốt là nhiều hay ít? Con đoán ai sẽ giúp anh?'." },
    { chuyen:"Vịt mẹ gọi vịt con",
      en:{v:0, t:"Lần 2 – làm vịt. Bé làm vịt con: hai tay làm cánh, đi lạch bạch. Mẹ làm vịt mẹ gọi 'Quack, quack!'. Mỗi đoạn, một 'vịt' thú bông đi trốn sau ghế. Cuối bài tất cả vịt chạy về, bé đếm to đến five.", b:"Quack, quack! Come back!"},
      zh:{v:1, t:"Lần 1 – xếp thú bông. Mỗi số trong bài, bé đặt thêm 1 thú bông vào hàng và đếm bằng tiếng Trung. Nghe 猫 (māo) thì kêu 'meo'. Mẹ nói: khi đếm con vật, tiếng Trung thêm chữ 只 (zhī): 一只, 两只 (liǎng zhī – hai con), 三只…", b:"一只小猫，喵！(yì zhī xiǎo māo, miāo!)"},
      words:{en:[5,0,1,2,3,4],zh:[0,1,2,7]},
      doi:"Đếm bước chân: bé đứng ở cửa phòng, đếm xem mấy bước thì đến giường: 'one, two, three…'. Rồi đi lạch bạch như vịt, bước dài như hổ, đếm lại bằng tiếng Trung. Hỏi: 'Bước vịt nhiều hơn hay bước hổ nhiều hơn?'.",
      ob:"Ông bà cùng bé đếm bước chân từ cửa đến giường.",
      toi:"Kể tiếp Cây tre trăm đốt: anh ngồi khóc thì ông Bụt hiện lên, bảo anh chặt đủ một trăm đốt tre rồi đọc 'Khắc nhập, khắc nhập!'. Các đốt tre liền dính vào nhau thành cây tre trăm đốt. Mẹ và bé cùng đọc to 'Khắc nhập!'. Phần cuối để mai." },
    { chuyen:"Năm chú khỉ nghịch ngợm",
      en:{v:1, t:"Lần 1 – xem và làm động tác. Bé ngồi trên thảm (không đứng nhảy trên giường). Nghe 'jumping' thì nhún tại chỗ, nghe 'bumped his head' thì xoa đầu, đến đoạn gọi bác sĩ thì giả vờ cầm điện thoại. Mỗi đoạn mẹ dừng hỏi 'How many monkeys?'.", b:"No more monkeys jumping on the bed!"},
      zh:{v:0, t:"Lần 2 – hổ đếm số. Mỗi số bé nhún một cái trên thảm. Đến 老虎, bé gầm và bò như hổ. Hết bài mẹ hỏi: 'Hổ tiếng Anh là gì?' – tiger. Bé nói cả hai: 老虎 – tiger.", b:"老虎来了！(lǎohǔ lái le!)"},
      words:{en:[6,7,4,8],zh:[0,1,2,3,4,5]},
      doi:"Năm chú khỉ trên gối: xếp 5 thú bông lên gối. Mẹ hát chậm hoặc kể bằng tiếng Việt, mỗi lượt một chú 'ngã' xuống sàn, bé đếm số khỉ còn lại. Khi hết khỉ trên gối, bé đếm số khỉ dưới sàn: five!",
      ob:"Ông bà xếp 5 thú bông, mỗi lượt cho 1 con xuống và hỏi bé còn mấy con.",
      toi:"Kể nốt Cây tre trăm đốt: anh vác cây tre về. Phú ông tò mò chạm vào, anh đọc 'Khắc nhập!', phú ông bị dính chặt vào cây tre. Phú ông xin lỗi, hứa giữ lời; anh đọc 'Khắc xuất!' cho phú ông ra. Anh được cưới vợ, sống vui vẻ. Mẹ xếp 5 ống hút thành 'cây tre', bé đếm từng đốt." },
    { chuyen:"Ai có nhiều hơn?",
      en:{v:1, t:"Lần 2 – bé nói trước. Mẹ dừng trước mỗi chỗ bài đếm ngược, bé nói trước còn mấy chú khỉ: 'Four!', 'Three!' và giơ đúng số ngón tay. Cuối bài chơi đóng băng: mẹ tắt nhạc, bé đứng im như khỉ.", b:"Four little monkeys!"},
      zh:{v:2, t:"Lần 1 – năm chú khỉ bằng tiếng Trung. Bài giống bài tiếng Anh hôm qua. Bé nhún trên gối, mỗi lần nghe 跳 (tiào – nhảy) thì nhún, mỗi vòng gập 1 ngón tay. Mẹ chỉ ra: monkey = 猴子 (hóuzi), five = 五 (wǔ).", b:"跳！跳！跳！(tiào! tiào! tiào!)"},
      words:{en:[6,4,3,2,8],zh:[6,4,3,2]},
      doi:"Thí nghiệm 'nhiều hơn': mẹ đặt 2 cái đĩa. Đĩa của bé có 3 miếng táo, đĩa của mẹ có 2 miếng. Hỏi 'Who has more?'. Thêm 1 miếng vào đĩa mẹ, đếm lại xem bây giờ thế nào. Chơi đến 5 miếng rồi cùng ăn.",
      ob:"Ông bà chia táo vào 2 đĩa, hỏi bé đĩa nào nhiều hơn.",
      toi:"Vè Con vịt con vạc: mẹ đọc 'Quặc quặc, quạc quạc / Con vịt, con vạc…'; đến 'ba con ốc' bé giơ 3 ngón, 'năm con rô' giơ 5 ngón, 'mười con diếc' giơ cả hai bàn tay. Hỏi: 'Bài có những con số nào?'.", lyr:"Con vịt con vạc" },
    { chuyen:"Tay nào có, tay nào không?",
      en:{v:0, t:"Lần 3 – bé hát trước. Mẹ tắt tiếng ở câu đếm, bé nói trước số vịt còn lại rồi bật tiếp. Cuối bài, vịt mẹ gọi 'Quack quack', bé tự nói 'Five little ducks came back!' (mẹ nói mẫu trước).", b:"Five little ducks came back!"},
      zh:{v:1, t:"Lần 2 – bé đếm trước. Mẹ dừng trước mỗi số, bé đếm trước bằng tiếng Trung rồi đặt thú bông vào hàng. Nhớ: hai con là 两只 (liǎng zhī).", b:"两只小猫。(liǎng zhī xiǎo māo.)"},
      words:{en:[5,0,1,2,3,4],zh:[0,1,2,3,4,7]},
      doi:"Chơi Tập tầm vông: mẹ nắm một mẩu giấy vo tròn trong một tay, giấu hai tay sau lưng rồi đưa ra, đọc 'Tập tầm vông, tay không tay có…'. Bé đoán tay nào có. Đoán 5 lượt rồi đổi vai. Mỗi lượt, bé đếm số lần đoán đúng bằng tiếng Anh.",
      ob:"Ông bà chơi Tập tầm vông với mẩu giấy vo tròn, bé đoán tay nào có.",
      toi:"Tìm đọc truyện Cây tre trăm đốt trong sách cổ tích ở nhà (ví dụ bộ 'Kho tàng truyện cổ tích Việt Nam' của Nguyễn Đổng Chi, NXB Trẻ), hoặc mẹ kể lại. Lần này bé kể đoạn 'Khắc nhập, khắc xuất' và đếm 5 ngón tay làm 5 đốt tre.", lyr:"Tập tầm vông" },
    { chuyen:"Đĩa trái cây đếm số",
      en:{v:1, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Sau đó bé chọn 1 bài thích nhất tuần để xem lại; lần này bé đếm to trước ca sĩ."},
      zh:{v:0, t:"Nếu bé muốn, xem lại 一二三四五 và làm hổ gầm."},
      special:"Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu",
      doi:"Mẹ cắt sẵn trái cây (dao do mẹ cầm): chuối, dưa hấu bỏ hạt, táo. Bé xếp lên 5 cái đĩa nhỏ: đĩa 1 có 1 miếng, đĩa 2 có 2 miếng… đến đĩa 5. Bé đếm từng đĩa bằng tiếng Anh, rồi bằng tiếng Trung. Bé mời mỗi người một đĩa: 'One for Dad! Two for Mum!'.",
      toi:"Hỏi bé: 'Đĩa nào nhiều miếng nhất? Ai được đĩa đó?'. Đọc lại vè Con vịt con vạc, bé giơ ngón tay ở các con số.", lyr:"Con vịt con vạc" },
    { chuyen:"Đếm năm thứ ở công viên",
      en:{v:0, t:"Ôn nhẹ: bé chọn bài thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:2, t:"Mở 五只小猴子 một lần, cả nhà gập ngón tay theo."},
      doi:"Đi công viên, nắm tay người lớn khi đi đường. Bé đếm 5 thứ: 5 cái cây, 5 chiếc xe, 5 chú chim, 5 bậc thang. Bé đếm bằng tiếng Anh, có thể đếm lại bằng tiếng Trung. Về nhà kể 'Con đếm được năm…'.",
      ob:"Ông bà dắt bé đi dạo, cùng bé đếm 5 cái cây, 5 chiếc xe.",
      toi:"Kể lại Cây tre trăm đốt, bé làm anh nông dân hô 'Khắc nhập!' rồi 'Khắc xuất!', mẹ làm phú ông bị dính rồi được thả." },
    { chuyen:"Khối số Một",
      en:{v:2, t:"Lần 1 – xem và chỉ. Tập phim khoảng 5 phút về khối số One. Mẹ dừng mỗi khi One tìm thấy 'một' thứ gì đó, hỏi 'How many?', bé giơ 1 ngón tay: 'One!'. Hết phim, bé tìm 'một' thứ trên người mình: one nose, one mouth.", b:"One nose! One mouth!"},
      zh:{v:2, t:"Lần 2 – kể chuyện năm chú khỉ. Mẹ dừng sau mỗi vòng, hỏi bằng tiếng Việt 'Chuyện gì xảy ra tiếp?'. Bé đoán: 'Một chú ngã!'. Rồi đếm số khỉ còn lại bằng tiếng Trung.", b:"还有几只？(hái yǒu jǐ zhī?)"},
      words:{en:[0,8,1],zh:[6,4,3]},
      doi:"Tìm 'một' khắp nhà: bé đi tìm những thứ chỉ có một cái trong nhà: một cái tủ lạnh, một cái ti vi, một cửa chính. Mỗi thứ bé nói 'One fridge!', 'One door!'. Mẹ đếm xem bé tìm được mấy thứ.",
      ob:"Ông bà cùng bé tìm những đồ vật chỉ có một cái trong nhà.",
      toi:"Kể chuyện Ba lưỡi rìu: chàng tiều phu nghèo làm rơi chiếc rìu sắt xuống sông và ngồi khóc. Một ông tiên hiện lên, lặn xuống vớt lên một chiếc rìu bằng vàng, hỏi: 'Có phải rìu của con không?'. Mẹ dừng hỏi: 'Chàng sẽ trả lời thế nào?'." },
    { chuyen:"One sẽ gặp ai?",
      en:{v:2, t:"Lần 2 – 'Chuyện gì xảy ra tiếp?'. Mẹ dừng trước mỗi cảnh mới, hỏi bằng tiếng Việt: 'One sẽ gặp ai? Tìm thấy gì?'. Bé đoán rồi bật tiếp. Mỗi khi có thứ gì đếm được, bé đếm cùng.", b:"What will One find?"},
      zh:{v:0, t:"Lần 3 – bé nói trước, thêm chuyển ngữ. Mẹ dừng trước mỗi số, bé nói trước. Hết bài chơi đổi tiếng: mẹ nói 'three', bé nói 三 (sān); mẹ nói 'five', bé nói 五 (wǔ); mẹ nói 四, bé nói 'four'.", b:"一、二、三！(yī, èr, sān!)"},
      words:{en:[0,1,2,3,4],zh:[0,1,2,3,4]},
      doi:"Kể chuyện bằng ngón tay: mẹ kể 'Một chú khỉ đi chơi, gặp hai chú vịt, rồi ba chú mèo…', bé giơ đúng số ngón cho mỗi nhóm. Rồi bé tự kể một câu chuyện ngắn có số 1, 2, 3, mẹ giơ ngón tay theo.",
      ob:"Ông bà kể chuyện có con số, bé giơ đúng số ngón tay.",
      toi:"Kể tiếp Ba lưỡi rìu: chàng thật thà nói 'Không phải của con'. Ông tiên lặn xuống lần nữa, vớt lên chiếc rìu bằng bạc; chàng lại lắc đầu. Lần thứ ba ông vớt lên chiếc rìu sắt, chàng mừng rỡ: 'Đây mới là rìu của con!'. Ông tiên khen chàng trung thực và tặng cả ba chiếc rìu. Mẹ và bé đếm: one, two, three." },
    { chuyen:"Khối số Ba",
      en:{v:3, t:"Lần 1 – khối số Three. Mẹ dừng mỗi khi các khối ghép lại với nhau, hỏi 'How many now?'. Bé đếm và trả lời. Hết phim, bé lấy 3 khối xếp hình to ghép thành một cái tháp và đếm: one, two, three.", b:"One and two make three!"},
      zh:{v:1, t:"Lần 3 – đếm và nói câu. Mẹ dừng sau mỗi số, bé nói cả câu: 一只小猫，两只小猫，三只小猫. Thêm chuyển ngữ: mẹ hỏi 'How many cats?', bé trả lời bằng tiếng Trung.", b:"三只小猫。(sān zhī xiǎo māo.)"},
      words:{en:[2,0,1,8],zh:[0,1,2,7]},
      doi:"Xếp tháp đếm: bé xếp khối xếp hình to (hoặc hộp giấy) thành 5 tháp: tháp 1 khối, 2 khối… đến 5 khối. Bé đếm từng tháp, chỉ tháp cao nhất, thấp nhất. Gõ nhẹ đổ tháp 5 rồi xếp lại, lần này đếm bằng tiếng Trung.",
      ob:"Ông bà cùng bé xếp tháp từ 1 đến 5 khối và đếm.",
      toi:"Đồng dao Ba bà đi bán lợn con: mẹ đọc chậm, đến chữ 'lon xon' thì hai ngón tay chạy trên tay bé. Bài nói nhịu rất vui, đọc nhanh dần. Hỏi: 'Có mấy bà? Giơ ngón tay xem nào.'", lyr:"Ba bà đi bán lợn con" },
    { chuyen:"Một và hai thành ba",
      en:{v:3, t:"Lần 2 – bé nói trước. Mẹ dừng ngay trước khi các khối ghép lại, bé đoán trước sẽ được mấy: 'Three!'. Đúng thì vỗ tay. Hết phim, bé kể lại bằng tiếng Việt: 'Một và hai thành ba'.", b:"How many? Three!"},
      zh:{v:2, t:"Lần 3 – đóng vai. Bé và 4 thú bông làm 5 chú khỉ, mẹ làm khỉ mẹ gọi bác sĩ. Mỗi vòng một chú khỉ nằm xuống thảm, bé đếm còn mấy bằng tiếng Trung. Câu dài hơn: 还有四只 (hái yǒu sì zhī – còn bốn con).", b:"还有四只猴子。(hái yǒu sì zhī hóuzi.)"},
      words:{en:[2,8,0,1],zh:[6,4,3,2,1]},
      doi:"Kể lại bằng tranh: bé vẽ 3 tranh: 3 chiếc rìu (vàng, bạc, sắt), ông tiên, chàng tiều phu vui vẻ. Bé xếp đúng thứ tự và kể. Đến tranh rìu, bé đếm 'one, two, three' và '一、二、三'.",
      ob:"Ông bà nghe bé kể chuyện Ba lưỡi rìu theo tranh và đếm số rìu.",
      toi:"Kể lại Ba lưỡi rìu: mẹ làm ông tiên, bé làm chàng tiều phu thật thà. Mẹ giơ 'rìu vàng' (một cái thìa màu vàng), bé lắc đầu 'Không phải của con'. Hỏi: 'Vì sao ông tiên tặng chàng cả ba chiếc rìu?'." },
    { chuyen:"Đếm lùi, tên lửa bay",
      en:{v:1, t:"Lần 3 – kể chuyện năm chú khỉ bằng tiếng Anh. Mẹ dừng sau mỗi vòng, bé nói câu dài: 'Four little monkeys jumping on the bed!'. Sau đó bé kể lại bằng tiếng Việt cho bố: 'Năm chú khỉ nhảy trên giường, một chú ngã…'.", b:"Mama called the doctor."},
      zh:{v:0, t:"Ôn câu dài: mở 一二三四五, hết bài bé đếm lại từ 1 đến 5 bằng tiếng Trung thật nhanh, rồi đếm lùi 五、四、三、二、一. Đếm lùi xong thì 'tên lửa' nhảy lên.", b:"五、四、三、二、一！(wǔ, sì, sān, èr, yī!)"},
      words:{en:[6,4,3,2,1,0],zh:[0,1,2,3,4]},
      doi:"Nhảy đếm lùi: mẹ viết số 5, 4, 3, 2, 1 lên 5 tờ giấy, xếp thành hàng trên sàn (dán băng dính cho khỏi trượt). Bé nhảy từng tờ và đếm lùi bằng tiếng Anh, đến 1 thì hô 'Blast off!'. Lượt sau đếm bằng tiếng Trung.",
      ob:"Ông bà viết số lên 5 tờ giấy, bé nhảy từng tờ và đếm lùi.",
      toi:"Vè Con vịt con vạc, bé đọc phần có số: 'ba con ốc, năm con rô, mười con diếc'. Mẹ hỏi: 'Ba và năm, số nào nhiều hơn?'.", lyr:"Con vịt con vạc" },
    { chuyen:"Đi chợ đếm đồ",
      en:{v:3, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé đếm to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại."},
      zh:{v:1, t:"Nếu bé muốn, xem lại 一只小猫 và xếp thú bông."},
      special:"Săn từ ở chợ hoặc siêu thị",
      doi:"Đi chợ hoặc siêu thị, luôn nắm tay mẹ. Nhiệm vụ đếm: bé chọn 3 quả cam, 2 quả táo và 1 hộp trứng (đếm 5 quả trứng qua nắp hộp). Mỗi lần chọn, bé đếm to bằng tiếng Anh, mẹ đếm lại bằng tiếng Trung. Đến quầy thu ngân, bé đếm số túi đồ.",
      toi:"Hỏi bé: 'Hôm nay con mua mấy quả cam?'. Đọc lại Ba bà đi bán lợn con thật nhanh cho vui.", lyr:"Ba bà đi bán lợn con" },
    { chuyen:"Năm chú vịt về nhà",
      en:{v:0, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:0, t:"Mở 一二三四五 một lần, cả nhà đếm ngón tay."},
      doi:"Cả nhà chơi 'Năm chú vịt': mỗi người (và thú bông cho đủ 5) làm một chú vịt, lần lượt đi trốn quanh nhà. Bé làm vịt mẹ gọi 'Quack quack!', đếm số vịt chạy về đến khi đủ five.",
      toi:"Bé kể điều vui nhất trong 2 tuần: năm chú khỉ, ba lưỡi rìu hay cây tre trăm đốt. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 104 – Đếm 6–10, nhiều ít ===================== */
window.CT_DETAIL45[104] = {
  sub: "Đếm 6–10, nhiều ít",
  vocab: {
    en: [["six","6️⃣","sáu",false],["seven","7️⃣","bảy",false],["eight","8️⃣","tám",false],["nine","9️⃣","chín",false],["ten","🔟","mười",false],["more","➕","nhiều hơn",false],["less","➖","ít hơn",false],["how many","❓","bao nhiêu",false],["roll over","🛏️","lăn qua",true],["stomp","🦶","dậm chân",true]],
    zh: [["六","liù","sáu","6️⃣"],["七","qī","bảy","7️⃣"],["八","bā","tám","8️⃣"],["九","jiǔ","chín","9️⃣"],["十","shí","mười","🔟"],["多","duō","nhiều","➕"],["少","shǎo","ít","➖"],["几个","jǐ gè","mấy cái","❓"]],
    en_phr: [["How many? Ten!","Ten","🔟"],["There were ten in the bed.","ten","🛏️"],["This plate has more.","more","➕"],["Count to ten and stomp!","stomp","🦶"]],
    zh_phr: [["一共有几个？","几个","yígòng yǒu jǐ gè?","Tất cả có mấy cái?","❓"],["这边多，那边少。","少","zhè biān duō, nà biān shǎo.","Bên này nhiều, bên kia ít.","⚖️"],["我数到十。","十","wǒ shǔ dào shí.","Con đếm đến mười.","🔟"]],
    seq: [["🛏️","ten in the bed","床上有十个"],["🔄","roll over","翻个身"],["⬇️","one falls out","掉下去一个"],["😴","one left – good night","剩一个，晚安"]]
  },
  media: {
    en: [
      {t:"Count & Move – đếm đến 10 thì dừng",u:"https://www.youtube.com/watch?v=g9EgE_JtEAw",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Ten In The Bed",u:"https://www.youtube.com/watch?v=TdDypyS_5zE",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Numberblocks – Three (S1 E4)",u:"https://www.youtube.com/watch?v=6-duQqX5ECs",kind:"explainer",ch:"Numberblocks"}
    ],
    zh: [
      {t:"数字歌 Shù zì gē – Số đếm 1–10",u:"https://www.youtube.com/watch?v=w67iWL5N188",kind:"song_action",ch:"LiveandLearnCan"},
      {t:"大小多少 – To nhỏ, nhiều ít",u:"https://www.youtube.com/watch?v=4Sq5zJddXHo",kind:"song_action",ch:"Fun Mandarin Chinese 琥珀中文"},
      {t:"五只小猴子 Five Little Monkeys (tiếng Trung)",u:"https://www.youtube.com/watch?v=yPzZ9bdJGLA",kind:"song_action",ch:"Chinese As A Foreign Language"}
    ]
  },
  weeks: [
    {title:"Mười là bao nhiêu? (Tuần Khám phá)", tale:{t:"Con Rồng cháu Tiên",id:"con_rong_chau_tien"},
     toi_vi:[{t:"Đố ai đếm được lá rừng",type:"ca_dao",lyr:"Đố ai đếm được lá rừng\nĐố ai đếm được mấy tầng trời cao\nĐố ai đếm được vì sao\nĐố ai đếm được công lao mẹ già"},{t:"Nu na nu nống",type:"dong_dao"}],
     book_vi:{t:"Chuyện ly kỳ về hình khối, màu sắc, số đếm (bộ)",author:"Nhiều tác giả, họa sĩ Việt",publisher:"NXB Trẻ"}},
    {title:"Rùa hay Thỏ nhanh hơn? (Tuần Thử thách)", tale:{t:"Rùa và Thỏ",id:"rua_va_tho"},
     toi_vi:[{t:"Con rùa",type:"ve",lyr:"Rì rà rì rà\nĐội nhà đi chơi\nĐến khi tối trời\nÚp nhà nằm ngủ."}]}
  ],
  obs: [["en","Đếm từ one đến ten"],["en","Nói “more” hoặc “less” khi so 2 nhóm đồ"],["zh","Đếm 一 đến 十 bằng tiếng Trung"],["zh","Chỉ đúng nhóm 多 và nhóm 少"],["vi","Kể chuyện Rùa và Thỏ, nói được vì sao Rùa thắng"],["td","Đếm lùi từ 10 về 1"],["td","Đếm đúng 10 đồ vật xếp thành hàng"],["vd","Làm liền 10 lần vỗ tay, nhảy, dậm chân"]],
  days: [
    { chuyen:"Mười ngón tay của bé",
      en:{v:0, t:"Lần 1 – đếm và vận động. Mở qua YouTube Kids, tắt tự phát. Bài đếm đến 20 kèm động tác (jump, clap, stomp, spin); với bé 4 tuổi, mẹ dừng video khi đếm đến 10. Hai mẹ con đếm to và làm theo từng động tác.", b:"Let's count to ten!"},
      zh:{v:0, t:"Lần 1 – ngón tay đến mười. Nghe từng số, bé giơ ngón tay: 六 (liù) là 6 ngón, 七 (qī), 八 (bā), 九 (jiǔ)… đến 十 (shí) giơ cả hai bàn tay rồi nhảy lên một cái. Mẹ đếm cùng bé.", b:"六、七、八、九、十！(liù, qī, bā, jiǔ, shí!)"},
      words:{en:[0,1,2,3,4,9],zh:[0,1,2,3,4]},
      doi:"Thí nghiệm 'Mười là bao nhiêu?': mẹ đưa bé 10 chiếc thìa nhựa (hoặc 10 khối xếp hình to). Bé xếp thành hàng và đếm 1 đến 10 bằng tiếng Anh. Rồi xếp thành 2 hàng, mỗi hàng 5: 'Năm và năm là mười!'. So với 10 ngón tay của bé: có bằng nhau không?",
      ob:"Ông bà cùng bé xếp 10 chiếc thìa thành hàng rồi đếm.",
      toi:"Kể chuyện Con Rồng cháu Tiên: Lạc Long Quân là con thần biển, Âu Cơ là tiên trên núi. Hai người lấy nhau, Âu Cơ sinh ra một cái bọc có một trăm quả trứng, nở thành một trăm người con. Mẹ hỏi: 'Một trăm là nhiều hay ít? Nhiều hơn mười ngón tay của con không?'." },
    { chuyen:"Đĩa nào nhiều hơn?",
      en:{v:0, t:"Lần 2 – mỗi số một động tác. Lần này mẹ dừng ở các số 6 đến 10, bé nói số trước rồi làm động tác. Đếm đến 10 thì cả hai cùng dậm chân 10 cái (stomp) và đếm lại.", b:"Six, seven, eight, nine, ten – stomp!"},
      zh:{v:1, t:"Lần 1 – nhiều và ít. Mẹ chuẩn bị 2 đĩa: một đĩa có 6–8 miếng bánh quy, một đĩa chỉ có 2 miếng. Nghe 多 (duō – nhiều), bé chỉ đĩa nhiều; nghe 少 (shǎo – ít), bé chỉ đĩa ít. Nghe 大 (dà – to), 小 (xiǎo – nhỏ) thì dang hai tay thật to hoặc chụm tay nhỏ.", b:"多！少！(duō! shǎo!)"},
      words:{en:[5,6,7],zh:[5,6,7]},
      doi:"Thí nghiệm 'Nhiều hơn – ít hơn': mẹ đặt 2 cái bát, cho vào bát A 8 khối xếp hình to, bát B 3 khối. Bé đoán bằng mắt bát nào nhiều hơn, rồi đếm để kiểm tra. Lượt sau: bát A 6, bát B 7 (khó đoán hơn). Bé nói 'More!' hoặc '多!'.",
      ob:"Ông bà cho bé đếm khối xếp hình trong 2 bát, hỏi bát nào nhiều hơn.",
      toi:"Ca dao 'Đố ai đếm được lá rừng…' (lời trong gói học liệu). Mẹ ru chậm, chỉ ra cửa sổ: lá cây, bầu trời, ngôi sao. Hỏi: 'Có đếm hết được lá cây không? Nhiều hay ít?'. Mẹ ôm bé: tình thương của mẹ cũng nhiều không đếm được.", lyr:"Đố ai đếm được lá rừng" },
    { chuyen:"Mười bạn trên giường",
      en:{v:1, t:"Lần 1 – xem và đếm. Mẹ xếp 10 thú bông thành hàng trên thảm. Mỗi lần bài hát nói 'roll over', bé lăn một vòng trên thảm và lấy ra 1 thú bông. Mẹ dừng hỏi 'How many now?', bé đếm số còn lại.", b:"Roll over! How many now?"},
      zh:{v:0, t:"Lần 2 – đếm lùi. Mở bài nghe lại, sau đó bé đếm lùi từ 十 về 一 bằng ngón tay, gập dần từng ngón. Mẹ đếm chậm cùng bé; đến 一 thì 'tên lửa' bay: nhảy lên.", b:"十、九、八、七、六！(shí, jiǔ, bā, qī, liù!)"},
      words:{en:[4,8,7],zh:[4,3,2,1,0]},
      doi:"Đếm đồ trong nhà: bé đi đếm nhà có mấy cái ghế, mấy đôi dép ở cửa, mấy cái cửa sổ. Mẹ ghi số lên giấy. Hỏi: 'Ghế nhiều hơn hay dép nhiều hơn?'. Thứ nào đủ 10, bé nói 'Ten!' và '十!'.",
      ob:"Ông bà cùng bé đếm số ghế, số đôi dép trong nhà.",
      toi:"Kể tiếp Con Rồng cháu Tiên: năm mươi người con theo cha xuống biển, năm mươi người con theo mẹ lên núi, cùng nhau giữ gìn đất nước. Mẹ đặt 10 khối xếp hình, chia 5 khối 'xuống biển', 5 khối 'lên núi'. Hỏi: 'Hai bên bằng nhau hay bên nào nhiều hơn?'. Vì thế người Việt gọi nhau là đồng bào, con Rồng cháu Tiên." },
    { chuyen:"Túi nào nặng hơn?",
      en:{v:1, t:"Lần 2 – bé nói trước. Mẹ dừng trước mỗi câu đếm, bé nói trước còn mấy: 'Nine!', 'Eight!' và lấy bớt đúng 1 thú bông. Đến cuối, chú nhỏ nhất nằm một mình, bé nói 'Good night!'.", b:"There were nine in the bed."},
      zh:{v:1, t:"Lần 2 – tìm to nhỏ, nhiều ít. Mẹ dừng bài ở mỗi từ, bé tìm trong phòng: 多 – một chỗ có nhiều đồ (rổ đồ chơi), 少 – chỗ có ít đồ, 大 – một thứ to, 小 – một thứ nhỏ. Bé nói từ tiếng Trung khi chỉ.", b:"这个大，那个小。(zhège dà, nàge xiǎo.)"},
      words:{en:[4,3,2,1,0,8],zh:[5,6,7]},
      doi:"Thí nghiệm hai túi: bé cầm 2 túi vải, mẹ bỏ vào túi trái 2 quả cam, túi phải 6 quả cam (hoặc khối gỗ). Bé đoán túi nào nặng hơn, nhiều hơn, rồi đổ ra đếm để kiểm tra. Bé nói 'This bag has more.' và '这边多 (zhè biān duō)'.",
      ob:"Ông bà cho bé cầm 2 túi có số cam khác nhau, hỏi túi nào nhiều hơn.",
      toi:"Đọc cuốn số đếm trong bộ 'Chuyện ly kỳ về hình khối, màu sắc, số đếm' (NXB Trẻ). Mỗi trang, bé đếm đồ vật trong tranh bằng tiếng Anh. Trang nào có đến 10, bé đếm thêm bằng tiếng Trung." },
    { chuyen:"Thêm một, bớt một",
      en:{v:2, t:"Lần 1 – khối số ghép lại. Đây là tập phim về số ba bé đã xem ở vòng trước, nay có nhiệm vụ mới: mỗi khi các khối ghép lại, mẹ dừng hỏi 'More or less?', bé nói số mới nhiều hơn hay ít hơn. Hết phim bé ghép 3 khối với 3 khối và đếm được 6.", b:"Three and three make six!"},
      zh:{v:0, t:"Lần 3 – bé đếm trước. Mẹ dừng trước mỗi số từ 六 đến 十, bé nói trước rồi bật tiếp. Nói đúng 5 số thì được chơi 'tên lửa' đếm lùi.", b:"我数到十！(wǒ shǔ dào shí!)"},
      words:{en:[5,6,0,7],zh:[0,1,2,3,4]},
      doi:"Thí nghiệm 'Thêm một': bé xếp 5 khối, mẹ thêm 1 khối, bé đếm lại: 'Six! More!'. Thêm tiếp đến 10. Rồi bớt dần: 'Nine – less!'. Mỗi lần thêm bé nói 多 (nhiều hơn), mỗi lần bớt nói 少 (ít hơn).",
      ob:"Ông bà xếp khối, thêm hoặc bớt 1 khối rồi hỏi bé bây giờ có mấy.",
      toi:"Chơi Nu na nu nống: mẹ và bé ngồi duỗi chân thẳng hàng, mẹ vừa đọc vừa vỗ nhẹ lần lượt lên từng bàn chân. Đến câu 'Tay xòe chân rụt', chân nào được vỗ thì rụt lại. Đếm xem còn mấy chân duỗi.", lyr:"Nu na nu nống" },
    { chuyen:"Pháo đài Mười bạn trên giường",
      en:{v:1, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Sau đó bé chọn 1 video thích nhất tuần để xem lại, xem xong đếm đến 10 thật to."},
      zh:{v:0, t:"Nếu bé muốn, xem lại 数字歌 trong pháo đài."},
      special:"Xây pháo đài chăn gối, kể chuyện trong pháo đài",
      doi:"Dùng ghế, chăn, gối dựng pháo đài làm 'cái giường to'. Bé xếp 10 thú bông nằm trong pháo đài. Mẹ nói 'Roll over!', bé cho 1 thú bông lăn ra ngoài và đếm số còn lại, đến khi còn 1. Sau đó kể lại Con Rồng cháu Tiên trong pháo đài, dùng thú bông chia hai nhóm 'lên núi', 'xuống biển'.",
      toi:"Ra khỏi pháo đài, bé đếm số gối đã dùng. Đọc lại 'Đố ai đếm được lá rừng' thật nhỏ cho bé ngủ.", lyr:"Đố ai đếm được lá rừng" },
    { chuyen:"Đếm đến mười ngoài đường",
      en:{v:0, t:"Ôn nhẹ: bé chọn video thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:1, t:"Mở 大小多少 một lần, bé chỉ đồ nhiều, đồ ít trong phòng."},
      doi:"Đi chợ hoặc công viên cùng gia đình, nắm tay người lớn khi đi đường. Bé đếm đến 10 những thứ gặp được: 10 bậc cầu thang, 10 chiếc xe máy, 10 cái cây. Về nhà bé kể 'Con đếm được mười cái…'.",
      ob:"Ông bà dắt bé đi dạo, cùng bé đếm đến 10 bậc thang hoặc 10 chiếc xe.",
      toi:"Kể lại Con Rồng cháu Tiên bằng 3 câu; bé nói câu cuối: 'Mình là con Rồng cháu Tiên'." },
    { chuyen:"Đếm chậm như rùa, nhanh như thỏ",
      en:{v:0, t:"Thử thách đếm theo kịp. Mở Count & Move, dừng ở 10. Ai làm đúng động tác và đếm kịp thì được 1 sao mỗi số. Lượt sau đếm chậm như rùa, lượt nữa đếm nhanh như thỏ.", b:"Fast like a rabbit! Slow like a turtle!"},
      zh:{v:2, t:"Ôn và thử thách: bài năm chú khỉ bé đã biết. Mẹ dừng sau mỗi vòng, bé nói nhanh còn mấy con bằng tiếng Trung, đúng được 1 sao. Rồi mẹ đố: 'Thêm 5 chú khỉ nữa thì có mấy?' – 十 (shí)!", b:"五加五是十。(wǔ jiā wǔ shì shí.)"},
      words:{en:[4,0,1,2,3,9],zh:[4,3,2,7]},
      doi:"Ai nhanh hơn: mẹ úp 10 cái cốc nhựa trên sàn, dưới 4 cốc có giấu một mẩu giấy màu. Bé lật cốc tìm, đếm số mẩu giấy tìm được. Mẹ đếm thời gian từ 1 đến 10 bằng tiếng Trung. Tìm đủ 4 trước khi mẹ đếm xong được 3 sao.",
      ob:"Ông bà úp 10 cái cốc, giấu mẩu giấy dưới vài cốc để bé tìm và đếm.",
      toi:"Kể chuyện Rùa và Thỏ: Thỏ chạy nhanh nên hay chê Rùa chậm chạp, và hai bạn quyết định thi chạy. Thỏ chạy vèo một đoạn, quay lại thấy Rùa còn xa lắm, liền nằm nghỉ dưới gốc cây. Mẹ dừng hỏi: 'Con đoán ai sẽ về đích trước?'." },
    { chuyen:"Bao nhiêu bạn rơi ra?",
      en:{v:1, t:"Lần 3 – bé nói trước bằng câu dài. Mẹ dừng trước mỗi câu, bé nói cả câu 'There were eight in the bed' với số đúng. Mỗi câu đúng được 1 sao. Thêm: bé đếm số thú bông đã rơi ra ngoài: 'Two fell out!'.", b:"Two fell out. Eight in the bed!"},
      zh:{v:1, t:"Lần 3 – đố nhanh nhiều ít. Mẹ đặt 2 nhóm đồ, bé nhìn nhanh rồi nói 多 hoặc 少 cho nhóm mẹ chỉ; mở bài để ôn từ. Đúng được 1 sao. Câu dài: 这边多，那边少.", b:"这边多，那边少。(zhè biān duō, nà biān shǎo.)"},
      words:{en:[4,3,2,8],zh:[5,6,7]},
      doi:"Đố vui đếm tính sao: mẹ hỏi 5 câu: 'Con có mấy ngón tay? Mấy ngón chân? Nhà mình có mấy người? Bàn ăn có mấy cái ghế? Một đôi đũa có mấy chiếc?'. Bé đếm và trả lời; nói được số bằng tiếng Anh hoặc tiếng Trung được 2 sao.",
      ob:"Ông bà hỏi bé có mấy ngón tay, mấy ngón chân và cùng đếm.",
      toi:"Kể tiếp Rùa và Thỏ: Thỏ ngủ quên. Rùa cứ bò đều, đều, không nghỉ, đi qua gốc cây Thỏ ngủ rồi về đích trước. Thỏ tỉnh dậy, chạy mãi cũng không kịp. Hỏi: 'Vì sao Rùa thắng? Con thích làm Rùa hay làm Thỏ?'." },
    { chuyen:"Thi chạy Rùa – Thỏ",
      en:{v:2, t:"Lần 2 – ai đoán trước. Mẹ dừng trước khi các khối ghép lại, mẹ và bé thi đoán số mới, ai đúng được 1 sao. Hết phim chơi chuyển ngữ: mẹ nói 'six', bé nói 六; mẹ nói 八, bé nói 'eight'.", b:"More or less?"},
      zh:{v:0, t:"Thử thách chuyển ngữ: mẹ nói số tiếng Anh, bé nói số tiếng Trung: 'seven' – 七, 'nine' – 九, 'ten' – 十. Rồi mở 数字歌 để kiểm tra. Mỗi số đúng được 1 sao.", b:"七、九、十！(qī, jiǔ, shí!)"},
      words:{en:[0,1,2,3,4,5],zh:[0,1,2,3,4]},
      doi:"Thi chạy Rùa – Thỏ: kẻ vạch xuất phát và vạch đích cách nhau khoảng 10 bước. Lượt 1 bé bò chậm như rùa, mẹ đếm số lần bò; lượt 2 bé nhảy như thỏ, đếm lại. Hỏi: 'Bò rùa mấy lần? Nhảy thỏ mấy lần? Cái nào nhiều hơn?'.",
      ob:"Ông bà kẻ vạch, cho bé bò như rùa rồi nhảy như thỏ và đếm.",
      toi:"Chơi lại Nu na nu nống với cả nhà, càng nhiều chân càng vui. Đếm xem có tất cả mấy bàn chân: 'Eight feet! 八只脚 (bā zhī jiǎo)!'.", lyr:"Nu na nu nống" },
    { chuyen:"Đóng băng ở con số",
      en:{v:0, t:"Thử thách đóng băng ở số: mẹ bật Count & Move, bấm dừng bất chợt ở một số từ 1 đến 10. Bé phải đứng im và nói số vừa nghe. Đúng được 1 sao.", b:"Freeze! What number?"},
      zh:{v:2, t:"Thử thách đóng vai: bé làm khỉ mẹ, mẹ và thú bông làm khỉ con. Mỗi vòng bé đếm số khỉ còn lại bằng tiếng Trung, rồi nhắc các con bằng câu 别跳了！(bié tiào le – đừng nhảy nữa!).", b:"别跳了！(bié tiào le!)"},
      words:{en:[0,1,2,3,4,9],zh:[4,3,2,7]},
      doi:"Thử thách 10 việc: bé làm 10 lần vỗ tay, 10 lần nhảy, 10 lần dậm chân, tự đếm to bằng tiếng Anh. Lượt cuối đếm bằng tiếng Trung. Làm đủ cả 3 việc được 3 sao.",
      ob:"Ông bà đếm cùng bé 10 lần vỗ tay, 10 lần nhảy.",
      toi:"Kể lại Rùa và Thỏ: bé làm Rùa, mẹ làm Thỏ ngủ ngáy khò khò. Bé bò đến đích và hô 'I win!'. Rồi mẹ đọc vè Con rùa: 'Rì rà rì rà / Đội nhà đi chơi / Đến khi tối trời / Úp nhà nằm ngủ', bé bò chậm và 'úp nhà' nằm xuống ngủ.", lyr:"Con rùa" },
    { chuyen:"Nghe mà đếm",
      en:{v:1, t:"Thử thách nghe: mẹ úp điện thoại, bé chỉ nghe tiếng Ten In The Bed và tự bớt thú bông theo bài, không nhìn hình. Đến cuối, bé đếm đúng số thú bông đã rơi ra (9) thì được 3 sao.", b:"How many fell out?"},
      zh:{v:1, t:"Thử thách câu hỏi: bé làm người hỏi 一共有几个？(yígòng yǒu jǐ gè – tất cả có mấy cái?) cho mẹ đếm một nhóm đồ. Mẹ cố tình đếm sai một số, bé sửa lại. Mở bài 大小多少 một lần để ôn.", b:"一共有几个？(yígòng yǒu jǐ gè?)"},
      words:{en:[4,7,5,6],zh:[7,5,6]},
      doi:"Chuẩn bị hoá trang cho mai: bé chọn làm chú khỉ (gài khăn sau lưng làm đuôi), làm Rùa (cõng một chiếc gối mềm làm mai) hoặc làm khối số (mẹ dán số to lên áo). Bé tập nói 'I'm number ten!' hoặc '我是十 (wǒ shì shí)!'.",
      ob:"Ông bà giúp bé chuẩn bị đồ hoá trang: đuôi khỉ bằng khăn, mai rùa bằng gối.",
      toi:"Đọc lại cuốn sách số đếm, bé đếm đến 10 ở mỗi trang có nhiều đồ vật. Ôm bé và đếm 10 cái hôn." },
    { chuyen:"Bé hoá trang thành con số",
      en:{v:2, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé đếm hoặc nói từ thật to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại trong trang phục hoá trang."},
      zh:{v:2, t:"Nếu bé muốn, xem lại 五只小猴子, bé làm khỉ con."},
      special:"Ngày hoá trang: bé đóng vai nhân vật trong video",
      doi:"Bé hoá trang theo nhân vật đã chọn: khỉ con, Rùa, Thỏ hoặc khối số. Diễn lại 1 cảnh: khỉ nhún trên đệm sàn (có người lớn bên cạnh), Rùa và Thỏ thi chạy, hoặc khối số giới thiệu 'I'm ten! 我是十!'. Mẹ quay clip 1 phút. Cả nhà vỗ tay 10 cái và đếm to.",
      toi:"Hỏi bé: 'Hôm nay con làm nhân vật gì? Vui nhất lúc nào?'. Kể thật ngắn chuyện Rùa và Thỏ để bé nói câu kết." },
    { chuyen:"Cả nhà lăn qua",
      en:{v:1, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:0, t:"Mở 数字歌 một lần, cả nhà giơ ngón tay đếm."},
      doi:"Cả nhà chơi 'Ten in the bed' trên đệm trải sàn: mọi người và thú bông nằm cạnh nhau cho đủ 10. Bé hô 'Roll over!', người nằm ngoài cùng lăn ra khỏi đệm. Bé đếm số còn lại sau mỗi lượt.",
      toi:"Bé kể điều vui nhất trong 2 tuần: mười bạn trên giường, Rùa và Thỏ hay một trăm người con Rồng cháu Tiên. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 105 – Mắt, mũi, miệng, tai ===================== */
window.CT_DETAIL45[105] = {
  sub: "Mắt, mũi, miệng, tai",
  vocab: {
    en: [["head","🧢","cái đầu",false],["shoulders","🤷","đôi vai",false],["knees","🦵","đầu gối",false],["toes","🦶","ngón chân",false],["eyes","👀","đôi mắt",false],["ears","👂","đôi tai",false],["mouth","👄","cái miệng",false],["nose","👃","cái mũi",false],["finger","☝️","ngón tay",false],["touch","👉","chạm vào",true]],
    zh: [["头","tóu","cái đầu","🧢"],["眼睛","yǎnjing","đôi mắt","👀"],["鼻子","bízi","cái mũi","👃"],["嘴巴","zuǐba","cái miệng","👄"],["耳朵","ěrduo","cái tai","👂"],["手","shǒu","bàn tay","✋"],["脚","jiǎo","bàn chân","🦶"],["摸摸","mōmo","sờ sờ","👉"]],
    en_phr: [["Touch your nose.","nose","👃"],["Head, shoulders, knees and toes.","knees","🦵"],["I see with my eyes.","eyes","👀"],["I hear with my ears.","ears","👂"]],
    zh_phr: [["摸摸鼻子。","鼻子","mōmo bízi.","Sờ mũi nào.","👃"],["这是我的眼睛。","眼睛","zhè shì wǒ de yǎnjing.","Đây là mắt của con.","👀"],["我有两个耳朵。","耳朵","wǒ yǒu liǎng ge ěrduo.","Con có hai cái tai.","👂"]],
    seq: [["🧼","wash your face","洗脸"],["🪥","brush your teeth","刷牙"],["🪞","look in the mirror","照镜子"],["😊","smile!","笑一笑"]]
  },
  media: {
    en: [
      {t:"Head Shoulders Knees & Toes",u:"https://www.youtube.com/watch?v=ZanHgPprl-0",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"One Little Finger",u:"https://www.youtube.com/watch?v=eBVqcTEC3zQ",kind:"game",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"From Head to Toe – Eric Carle StoryTime",u:"https://www.youtube.com/watch?v=a-GcxJW8wVw",kind:"story",ch:"The Eric Carle Museum of Picture Book Art"}
    ],
    zh: [
      {t:"头发肩膀膝盖脚 Head, Shoulders, Knees and Toes (tiếng Trung)",u:"https://www.youtube.com/watch?v=CUxUGNdl5oc",kind:"song_action",ch:"Little Baby Bum – 小寶貝布姆 (official Mandarin)"},
      {t:"身体部位歌 – Bài hát bộ phận cơ thể",u:"https://www.youtube.com/watch?v=vw2Ju9_Va4g",kind:"song_action",min:1.8,ch:"CHINESE FOR BEGINNERS Learn Chinese with Caroline"},
      {t:"Miaomiao Ep.81 – Body Parts (xem đoạn đầu 5 phút)",u:"https://www.youtube.com/watch?v=2SgsVYMZdK0",kind:"lesson",min:6.5,ch:"Miaomiao Kidz"}
    ]
  },
  weeks: [
    {title:"Từ đầu đến chân (Tuần Ca nhạc)", tale:{t:"Thầy bói xem voi",id:"thay_boi_xem_voi"},
     toi_vi:[{t:"Con vỏi con voi",type:"ve",lyr:"Con vỏi con voi\nCái vòi đi trước,\nHai chân trước đi trước,\nHai chân sau đi sau\nCòn cái đuôi đi sau rốt\nTôi xin kể nốt\nCái chuyện con voi\nCon vỏi con voi\nCái vòi đi trước…"},{t:"Câu đố cái mũi",type:"cau_do",lyr:"Một nhà hai cửa như nhau\nCùng vào cùng ra?"}]},
    {title:"Mỗi bộ phận một việc (Tuần Kể chuyện)", tale:{t:"Chân, Tay, Tai, Mắt, Miệng",id:"chan_tay_tai_mat_mieng"},
     toi_vi:[{t:"Câu đố bàn chân",type:"cau_do",lyr:"Lưng trước bụng sau\nCon mắt ở dưới cái đầu ở trên"}],
     book_vi:{t:"Những bài học nhỏ (bộ)",author:"Nhiều tác giả, họa sĩ Việt",publisher:"NXB Trẻ"}}
  ],
  obs: [["en","Chạm đúng head, eyes, ears, mouth, nose khi nghe"],["en","Nói “I can do it!” khi làm động tác"],["zh","Nói 眼睛, 鼻子, 嘴巴, 耳朵 khi chỉ vào mặt"],["zh","Làm đúng khi nghe 摸摸头, 摸摸脚"],["vi","Kể lại truyện Chân, Tay, Tai, Mắt, Miệng"],["td","Nói được mắt để nhìn, tai để nghe, mũi để ngửi"],["vd","Làm theo bài Head Shoulders lúc chậm lúc nhanh"],["xh","Làm 'Simon' ra lệnh và chờ mẹ làm theo"]],
  days: [
    { chuyen:"Đầu, vai, đầu gối, ngón chân",
      en:{v:0, t:"Lần 1 – chạm theo bài. Mở qua YouTube Kids, tắt tự phát. Hai mẹ con đứng đối diện, nghe từ nào chạm vào bộ phận đó: head, shoulders, knees, toes, rồi eyes, ears, mouth, nose. Lần đầu làm chậm, chưa cần nhanh.", b:"Touch your head!"},
      zh:{v:1, t:"Lần 1 – chỉ vào mặt. Bài gần 2 phút. Nghe 眼睛 (yǎnjing – mắt), 鼻子 (bízi – mũi), 嘴巴 (zuǐba – miệng), bé chỉ vào đúng chỗ trên mặt mình. Mẹ dừng giữa bài, chỉ vào mũi mình, bé nói 鼻子.", b:"这是鼻子。(zhè shì bízi.)"},
      words:{en:[0,1,2,3,9],zh:[1,2,3]},
      doi:"Vẽ khuôn mặt: mẹ vẽ một hình tròn to trên giấy. Bé vẽ thêm mắt, mũi, miệng, tai. Vẽ xong mỗi bộ phận, bé chỉ vào mặt mình và nói tên tiếng Anh: 'Eyes! Nose!'. Đếm: có mấy mắt, mấy tai, mấy mũi?",
      ob:"Ông bà cùng bé vẽ khuôn mặt, bé chỉ và nói mắt, mũi, miệng, tai.",
      toi:"Kể chuyện Thầy bói xem voi bằng giọng vui: có năm ông thầy bói không nhìn thấy, rủ nhau đi 'xem' voi bằng tay. Ông sờ vòi bảo voi như con đỉa, ông sờ tai bảo như cái quạt, ông sờ chân bảo như cái cột… Mẹ dừng hỏi: 'Các ông dùng gì để biết con voi? Mắt hay tay?'." },
    { chuyen:"Mắt nhìn, tai nghe, mũi ngửi",
      en:{v:0, t:"Lần 2 – bé hô từ tiếp theo. Mẹ dừng video ngay trước từ tiếp theo, bé hô to từ đó rồi chạm vào. Bật tiếp xem có đúng không. Cuối bài chơi đóng băng: mẹ dừng nhạc bất chợt, bé đứng im, tay để nguyên trên bộ phận đang chạm và nói tên nó.", b:"What's next? Knees!"},
      zh:{v:0, t:"Lần 1 – cùng giai điệu với bài tiếng Anh nên bé dễ theo. Nghe 头 (tóu – đầu) chạm đầu, 脚 (jiǎo – chân) chạm chân, 眼睛, 耳朵, 鼻子, 嘴巴 thì chạm mắt, tai, mũi, miệng. Mẹ chỉ ra: head = 头.", b:"摸摸头！(mōmo tóu!)"},
      words:{en:[4,5,6,7,0],zh:[0,1,4,2,3,6]},
      doi:"Thí nghiệm giác quan: mẹ bày lên khay một quả cam, một cái lục lạc đồ chơi, một chiếc khăn mềm, một miếng chuối. Bé dùng mắt nhìn (eyes), tai nghe lục lạc (ears), mũi ngửi quả cam (nose), miệng nếm miếng chuối (mouth). Mỗi lần dùng, bé chỉ bộ phận và nói tên tiếng Anh.",
      ob:"Ông bà cho bé ngửi quả cam, nghe tiếng lục lạc, nếm miếng chuối và hỏi bé dùng gì.",
      toi:"Kể tiếp Thầy bói xem voi: các ông cãi nhau mãi, ai cũng cho mình đúng. Một bạn nhỏ đi qua, dắt cả năm ông đi một vòng quanh con voi, sờ từ vòi đến đuôi. Các ông bật cười: 'À, con voi to thế này!'. Chơi bịt mắt: mẹ đưa bé sờ một đồ vật trong nhà (gối, cái thìa, quả cam), bé đoán là gì." },
    { chuyen:"Một ngón tay nhỏ",
      en:{v:1, t:"Lần 1 – một ngón tay. Bé giơ một ngón tay làm theo bài: gõ gõ, chỉ lên (up), chỉ xuống (down), rồi đặt ngón tay lên đầu, lên mũi… Mỗi lần ngón tay chạm vào bộ phận nào, mẹ dừng lại cho bé nói tên.", b:"Put it on your nose!"},
      zh:{v:1, t:"Lần 2 – mẹ hỏi, bé chỉ. Mẹ dừng bài sau mỗi từ, chỉ vào bộ phận của mình, bé nói tên bằng tiếng Trung. Rồi đổi: bé chỉ, mẹ nói.", b:"嘴巴在哪里？(zuǐba zài nǎlǐ?)"},
      words:{en:[8,0,7,9],zh:[1,2,3,4]},
      doi:"Trò 'Simon says' kiểu nhà mình: mẹ nói 'Touch your nose!', bé chạm mũi; mẹ nói tiếng Trung '摸摸耳朵!', bé chạm tai. Thỉnh thoảng mẹ cố tình chạm sai (nói 'nose' nhưng chạm tai), bé phải làm theo lời chứ không theo tay mẹ. Chơi 10 lượt.",
      ob:"Ông bà nói 'Sờ mũi!', 'Sờ tai!' cho bé chạm đúng chỗ.",
      toi:"Vè Con vỏi con voi: mẹ và bé bò bằng tay chân như voi, một tay đưa ra trước làm vòi. Đọc chậm từng câu: 'Cái vòi đi trước', 'Hai chân trước đi trước'… Hỏi: 'Vòi của voi giống bộ phận nào của mình?' (mũi – nose, 鼻子).", lyr:"Con vỏi con voi" },
    { chuyen:"Soi gương làm theo",
      en:{v:1, t:"Lần 2 – bé nói trước. Mẹ dừng ngay trước khi bài nói ngón tay sẽ đặt ở đâu, bé đoán và nói trước: 'Nose!' rồi đặt ngón tay lên. Cuối bài chơi đóng băng với một ngón tay giơ lên cao.", b:"Up, up, up! Down, down, down!"},
      zh:{v:0, t:"Lần 2 – bé hô từ tiếp theo bằng tiếng Trung. Mẹ dừng trước từ tiếp theo; không cần đủ cả bài, chỉ cần 头, 眼睛, 鼻子, 嘴巴. Bé hô đúng thì vỗ tay.", b:"眼睛！鼻子！(yǎnjing! bízi!)"},
      words:{en:[8,7,0,6],zh:[0,1,2,3]},
      doi:"Soi gương làm theo: hai mẹ con đứng trước gương. Mẹ nói 'Open your mouth', bé há miệng; 'Close your eyes', bé nhắm mắt; 'Touch your ears', bé chạm tai. Rồi bé ra lệnh cho mẹ. Thêm tiếng Trung: mẹ nói 张开嘴巴 (zhāngkāi zuǐba – há miệng ra).",
      ob:"Ông bà đứng trước gương với bé, bảo bé nhắm mắt, há miệng, chạm tai.",
      toi:"Câu đố: 'Một nhà hai cửa như nhau / Cùng vào cùng ra?'. Gợi ý: 'cửa' này dùng để thở. Bé đoán xong, hai mẹ con hít vào bằng mũi, thở ra bằng mũi 4 lần thật chậm.", lyr:"Câu đố cái mũi" },
    { chuyen:"Tắm cho búp bê",
      en:{v:0, t:"Lần 3 – bé hát trước. Mẹ tắt tiếng một đoạn, bé vừa chạm vừa nói to head, shoulders, knees, toes, eyes, ears, mouth, nose rồi mẹ bật lại. Sau đó bé làm 'cô giáo', hô cho cả nhà làm theo.", b:"Eyes and ears and mouth and nose!"},
      zh:{v:1, t:"Lần 3 – bé nói trước. Mẹ dừng trước mỗi từ, bé nói trước tên bộ phận bằng tiếng Trung và chỉ vào. Thêm từ 手 (shǒu – tay): bé giơ hai tay lên.", b:"这是我的手。(zhè shì wǒ de shǒu.)"},
      words:{en:[4,5,6,7],zh:[1,2,3,4,5]},
      doi:"Tắm cho búp bê: chuẩn bị một chậu nước nhỏ và khăn mềm. Bé lau từng chỗ cho búp bê và nói: 'Wash the face, wash the eyes, wash the ears…'. Mẹ nói tiếng Trung xen vào: 洗脸 (xǐ liǎn – rửa mặt). Mẹ luôn ngồi cạnh khi bé chơi nước.",
      ob:"Ông bà ngồi cạnh, cho bé lau mặt cho búp bê và nói tên mắt, tai, mũi.",
      toi:"Kể lại Thầy bói xem voi, bé làm bạn nhỏ dắt các ông thầy bói đi sờ cả con voi. Mẹ nhắm mắt làm thầy bói, sờ cánh tay bé và đoán 'Đây là cái vòi à?'. Cả hai cùng cười." },
    { chuyen:"Ca sĩ từ đầu đến chân",
      en:{v:0, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Sau đó bé chọn 1 bài thích nhất tuần để xem lại; lần này bé làm 'cô giáo' cho mẹ làm theo."},
      zh:{v:0, t:"Nếu bé muốn, xem lại 头发肩膀膝盖脚 và làm nhanh hơn lần trước."},
      special:"Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip",
      doi:"Bé biểu diễn Head Shoulders Knees & Toes hoặc 头发肩膀膝盖脚 trong khoảng 1 phút: lần đầu chậm, lần hai nhanh. Trước khi hát, bé giới thiệu: 'Hello! This is my head, this is my nose!'. Mẹ quay clip, cả nhà cùng làm động tác theo.",
      toi:"Đọc lại vè Con vỏi con voi, bé đọc tiếp nửa câu. Hỏi: 'Hôm nay biểu diễn, con thấy chân, tay có mỏi không?'.", lyr:"Con vỏi con voi" },
    { chuyen:"Mắt thấy, tai nghe ở công viên",
      en:{v:1, t:"Ôn nhẹ: bé chọn bài thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:1, t:"Mở 身体部位歌 một lần, bé chỉ vào mặt bố."},
      doi:"Đi công viên, nắm tay người lớn khi đi đường. Chơi 'Mắt thấy, tai nghe': bé tìm 3 thứ nghe được bằng tai (tiếng chim, tiếng xe, tiếng gió) và 3 thứ thấy bằng mắt. Mỗi lần bé chỉ vào tai hoặc mắt và nói 'I hear…', 'I see…'.",
      ob:"Ông bà dắt bé ra công viên, hỏi bé nghe thấy gì, nhìn thấy gì.",
      toi:"Hỏi bé: 'Hôm nay tai con nghe được tiếng gì vui nhất?'. Câu đố cái mũi: bé đố lại bố.", lyr:"Câu đố cái mũi" },
    { chuyen:"Con vật làm được, bé cũng làm được",
      en:{v:2, t:"Lần 1 – xem và làm theo. Truyện của Eric Carle: mỗi con vật khoe một động tác và hỏi 'Can you do it?', bạn nhỏ trả lời 'I can do it!'. Nếu video dài hơn 8 phút, chỉ xem 5 phút đầu. Mỗi con vật, mẹ dừng lại, bé làm động tác theo và nói 'I can do it!'.", b:"Can you do it? I can do it!"},
      zh:{v:2, t:"Lần 1 – bài học cơ thể dài khoảng 6 phút rưỡi, chỉ xem 5 phút đầu. Mỗi khi cô giáo nói một bộ phận như 头, 手, 脚, 耳朵, mẹ dừng lại, bé chạm vào đúng chỗ. Xem xong chơi 摸摸头 (mōmo tóu – sờ đầu).", b:"摸摸头，摸摸脚！(mōmo tóu, mōmo jiǎo!)"},
      words:{en:[0,3,9,1],zh:[0,5,6,4]},
      doi:"Làm như con vật: mẹ gọi tên một con vật bé biết, bé dùng bộ phận cơ thể để bắt chước: khỉ vẫy tay, voi đưa 'vòi' (cánh tay), chim vỗ cánh, ếch nhảy. Mỗi lần mẹ hỏi 'Can you do it?', bé hô 'I can do it!'.",
      ob:"Ông bà làm động tác con vật, hỏi 'Cháu làm được không?' để bé làm theo.",
      toi:"Kể chuyện Chân, Tay, Tai, Mắt, Miệng: ngày xưa Chân, Tay, Tai, Mắt sống cùng Miệng. Một hôm Chân, Tay, Tai, Mắt bảo nhau: 'Chúng mình làm việc vất vả, còn Miệng chỉ ngồi ăn!', rồi rủ nhau không làm nữa. Mẹ vừa kể vừa chỉ vào từng bộ phận của bé. Dừng hỏi: 'Nếu Miệng không ăn thì chuyện gì xảy ra?'." },
    { chuyen:"Mỗi bộ phận để làm gì?",
      en:{v:2, t:"Lần 2 – 'Con vật nào tiếp theo?'. Mẹ dừng trước khi lật trang, hỏi bằng tiếng Việt: 'Con vật nào sắp xuất hiện? Nó sẽ cử động bộ phận nào?'. Bé đoán, rồi xem tiếp và làm động tác.", b:"Who's next? What can it do?"},
      zh:{v:0, t:"Lần 3 – bé nói trước, thêm chuyển ngữ. Mẹ dừng trước mỗi từ, bé nói trước. Hết bài chơi đổi tiếng: mẹ chạm mũi nói 'nose', bé nói 鼻子; mẹ chạm tai nói 'ears', bé nói 耳朵; mẹ nói 嘴巴, bé nói 'mouth'.", b:"耳朵，嘴巴，鼻子。(ěrduo, zuǐba, bízi.)"},
      words:{en:[7,5,6,4],zh:[1,2,3,4]},
      doi:"Chơi 'Mắt, mũi, miệng để làm gì?': mẹ hỏi, bé trả lời và làm động tác: mắt để nhìn (I see), tai để nghe (I hear), mũi để ngửi, miệng để ăn và để nói. Mẹ nói câu tiếng Anh, bé nhắc lại.",
      ob:"Ông bà hỏi bé mắt để làm gì, tai để làm gì, rồi khen bé.",
      toi:"Kể tiếp: được vài ngày, Chân không đi nổi, Tay không cầm nổi, Mắt mờ đi, Tai ù ù. Cả nhóm mệt lả. Lúc ấy cả bọn mới hiểu: Miệng ăn là để nuôi tất cả. Chân, Tay, Tai, Mắt làm lành với Miệng và cùng làm việc vui vẻ. Hỏi: 'Bộ phận nào của con quan trọng nhất?' (tất cả!)." },
    { chuyen:"Tay, Chân giận nhau",
      en:{v:1, t:"Lần 3 – câu dài hơn. Mẹ dừng mỗi lần bài đặt ngón tay lên một chỗ, bé nói cả câu 'Put it on your nose!' cho mẹ làm. Đổi vai: bé ra lệnh, mẹ làm.", b:"Put it on your chin!"},
      zh:{v:2, t:"Lần 2 – chơi theo bài học. Xem lại đoạn bé thích (tối đa 5 phút). Sau đó chơi 'Mẹ bảo': mẹ nói 摸摸头, 摸摸耳朵, 摸摸脚, bé làm đúng. Đổi vai, bé nói cho mẹ làm.", b:"摸摸耳朵！(mōmo ěrduo!)"},
      words:{en:[8,9,7,0],zh:[7,0,4,6]},
      doi:"Đóng vai chuyện Chân, Tay, Tai, Mắt, Miệng: bé làm Tay khoanh lại không chịu làm, mẹ làm Chân ngồi bệt. Rồi cả hai 'mệt lả' nằm xuống. Cuối cùng làm lành: ôm nhau và cùng đi lấy cốc nước. Bé nói 'Hands, feet, eyes, ears, mouth – together!'.",
      ob:"Ông bà đóng vai Tay, Chân giận nhau rồi làm lành cùng bé.",
      toi:"Câu đố: 'Lưng trước bụng sau / Con mắt ở dưới cái đầu ở trên'. Gợi ý: bộ phận mình dùng để đi. Bé đoán xong, mẹ chỉ: mu bàn chân là 'lưng', mắt cá chân là 'con mắt'. Bé nói 'feet' và '脚 (jiǎo)'.", lyr:"Câu đố bàn chân" },
    { chuyen:"Kể chuyện bằng động tác",
      en:{v:2, t:"Lần 3 – kể lại. Xem truyện thêm một lần (tối đa 5 phút). Sau đó bé làm người kể: bé làm động tác của 3 con vật bé nhớ, mẹ đoán con vật; rồi mẹ hỏi 'Can you do it?', bé trả lời 'I can do it!'.", b:"I can do it!"},
      zh:{v:1, t:"Câu dài hơn: mở 身体部位歌, mỗi từ bé nói cả câu 这是我的眼睛 (zhè shì wǒ de yǎnjing), 这是我的鼻子… và chỉ vào.", b:"这是我的嘴巴。(zhè shì wǒ de zuǐba.)"},
      words:{en:[0,3,4,5],zh:[1,2,3,5]},
      doi:"Kể lại bằng tranh: bé vẽ 3 tranh: Chân, Tay, Tai, Mắt giận Miệng; cả nhóm mệt lả; cả nhóm làm lành. Bé xếp tranh đúng thứ tự và kể. Mỗi tranh, bé chỉ một bộ phận và nói tên tiếng Anh.",
      ob:"Ông bà nghe bé kể chuyện Chân, Tay, Tai, Mắt, Miệng theo tranh.",
      toi:"Đọc một cuốn bé thích trong bộ 'Những bài học nhỏ' (NXB Trẻ) hoặc sách tranh có sẵn ở nhà. Mỗi khi tranh có khuôn mặt, bé chỉ mắt, mũi, miệng của nhân vật." },
    { chuyen:"Con có hai mắt, một mũi",
      en:{v:0, t:"Câu dài hơn: mở Head Shoulders, hết bài mẹ dừng lại, bé nói 'I have two eyes, two ears, one nose and one mouth.' (mẹ nói mẫu từng phần), vừa nói vừa chỉ.", b:"I have two eyes and one nose."},
      zh:{v:2, t:"Lần 3 – chen tiếng Trung vào chuyện. Mẹ kể chuyện Chân, Tay, Tai, Mắt, Miệng bằng tiếng Việt; mỗi khi nhắc đến tay, chân, tai, mắt, miệng, bé nói tên bằng tiếng Trung: 手, 脚, 耳朵, 眼睛, 嘴巴.", b:"手，脚，耳朵，眼睛，嘴巴。(shǒu, jiǎo, ěrduo, yǎnjing, zuǐba.)"},
      words:{en:[4,5,6,7],zh:[5,6,4,1,3]},
      doi:"Chuẩn bị picnic giác quan cho mai: bé chọn 4 món để ngửi và nếm (chuối, cam, dưa chuột, sữa chua) và một chiếc khăn mềm để bịt mắt. Bé tập nói 'I smell with my nose. I taste with my mouth.'.",
      ob:"Ông bà cùng bé chọn trái cây cho buổi picnic ngày mai.",
      toi:"Đọc lại vè Con vỏi con voi. Sau đó mẹ chạm nhẹ vào mũi, tai, miệng bé chúc ngủ ngon từng chỗ: 'Mũi ngủ ngon, tai ngủ ngon…'.", lyr:"Con vỏi con voi" },
    { chuyen:"Picnic năm giác quan",
      en:{v:2, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé nói từ thật to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại."},
      zh:{v:0, t:"Nếu bé muốn, xem lại 头发肩膀膝盖脚 trước khi ra sân."},
      special:"Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung",
      doi:"Picnic giác quan ở sân hoặc ban công: trải khăn, bày 4 món đã chọn. Bé bịt mắt bằng khăn mềm (mẹ buộc lỏng), mẹ đưa từng miếng nhỏ cho bé ngửi rồi nếm và đoán. Bé nói 'I smell with my nose', 'Yummy!' và gọi tên món bằng tiếng Anh; mẹ nói tiếng Trung: 香蕉 (xiāngjiāo), 橙子 (chéngzi).",
      toi:"Hỏi bé: 'Hôm nay mũi con ngửi thấy gì thơm nhất?'. Câu đố bàn chân: bé đố lại mẹ.", lyr:"Câu đố bàn chân" },
    { chuyen:"Cả nhà chơi Simon says",
      en:{v:1, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:0, t:"Mở 头发肩膀膝盖脚 một lần, cả nhà chạm theo."},
      doi:"Cả nhà chơi 'Simon says' bằng hai thứ tiếng: lần lượt từng người làm 'Simon', ra lệnh 'Touch your nose!' hoặc '摸摸耳朵!'. Bé làm Simon ở lượt cuối.",
      toi:"Bé kể điều vui nhất trong 2 tuần: chuyện thầy bói xem voi, chuyện Chân Tay Tai Mắt Miệng hay picnic bịt mắt. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 106 – Tay chân, nhảy, chạy, vỗ tay ===================== */
window.CT_DETAIL45[106] = {
  sub: "Tay chân, nhảy, chạy, vỗ tay",
  vocab: {
    en: [["hands","🙌","đôi tay",false],["feet","👣","đôi bàn chân",false],["arms","💪","cánh tay",false],["legs","🦵","đôi chân",false],["jump","🦘","nhảy",true],["run","🏃","chạy",true],["clap","👏","vỗ tay",true],["walk","🚶","đi bộ",true],["hop","🐇","nhảy lò cò",true],["stop","🛑","dừng lại",true]],
    zh: [["手","shǒu","tay","🙌"],["脚","jiǎo","chân","👣"],["跳","tiào","nhảy","🦘"],["跑","pǎo","chạy","🏃"],["走","zǒu","đi","🚶"],["拍拍手","pāipai shǒu","vỗ vỗ tay","👏"],["爬","pá","bò","🐛"]],
    en_phr: [["I can jump!","jump","🦘"],["I can run fast!","run","🏃"],["Clap your hands!","Clap","👏"],["Stop! Freeze!","Stop","🛑"]],
    zh_phr: [["我会跳！","跳","wǒ huì tiào!","Con biết nhảy!","🦘"],["跑过来！","跑","pǎo guòlái!","Chạy lại đây!","🏃"],["拍拍手。","拍拍手","pāipai shǒu.","Vỗ vỗ tay.","👏"]],
    seq: [["🚶","walk","走"],["🏃","run","跑"],["🦘","jump","跳"],["🛑","stop","停"]]
  },
  media: {
    en: [
      {t:"Walking Walking",u:"https://www.youtube.com/watch?v=fPMjnlTEZwU",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Open Shut Them",u:"https://www.youtube.com/watch?v=RNUZBHlRH4Y",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"From Head to Toe – Eric Carle StoryTime",u:"https://www.youtube.com/watch?v=a-GcxJW8wVw",kind:"story",ch:"The Eric Carle Museum of Picture Book Art"},
      {t:"Hello Hello! Can You Clap Your Hands?",u:"https://www.youtube.com/watch?v=fN1Cyr0ZK9M",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"}
    ],
    zh: [
      {t:"小小手 Xiǎo xiǎo shǒu – Đôi bàn tay nhỏ",u:"https://www.youtube.com/watch?v=6KvrJ_nJutA",kind:"song_action",ch:"LiveandLearnCan"},
      {t:"来来去去 Come and Go – Lại đây, đi đi",u:"https://www.youtube.com/watch?v=okbxOHnqFGc",kind:"song_action",min:2.1,ch:"简中 Little Chinese Learners [Simplified Chinese]"},
      {t:"运动会 Sports Meet – 走、爬、跳、跑",u:"https://www.youtube.com/watch?v=K1AKsbq3EOM",kind:"story",min:0.9,ch:"ChineseClass365 中文加油站"}
    ]
  },
  weeks: [
    {title:"Cơ thể biết làm gì? (Tuần Khám phá)", tale:{t:"Cóc kiện Trời",id:"coc_kien_troi"},
     toi_vi:[{t:"Con cua mà có hai càng",type:"ve",lyr:"Con cua mà có hai càng\nĐầu, tai không có bò ngang cả đời\nCon cá mà có cái đuôi\nHai vây ve vẩy nó bơi rất tài\nCon rùa mà có cái mai\nCái cổ thụt ngắn, thụt dài vào ra\nCon voi mà có hai ngà\nCái vòi nó cuốn đổ nhà, đổ cây\nCon chim mà có cánh bay\nBay cùng Nam, Bắc, Đông, Tây tỏ tường."},{t:"Con công hay múa",type:"dong_dao",lyr:"Con công hay múa\nNó múa làm sao\nNó rụt cổ vào\nNó xoè cánh ra\nNó đậu cành đa\nNó kêu ríu rít\nNó đậu cành mít\nNó kêu vịt chè\nNó đậu cành tre\nNó kêu bè muống\nNó đỗ dưới ruộng\nNó kêu tầm vông"}]},
    {title:"Ai nhanh hơn? (Tuần Thử thách)", tale:{t:"Cáo, Thỏ và Gà trống",id:"cao_tho_ga_trong"},
     toi_vi:[{t:"Câu đố bàn tay",type:"cau_do",lyr:"Năm ông cùng ở một nhà\nTình huynh nghĩa đệ vào ra thuận hòa"}],
     book_vi:{t:"Truyện đồng thoại Võ Quảng (có tranh màu)",author:"Võ Quảng",publisher:"NXB Kim Đồng"}}
  ],
  obs: [["en","Làm đúng walk, run, jump, hop, stop khi nghe"],["en","Nói được câu “I can jump” kèm động tác"],["zh","Làm đúng khi nghe 走, 跑, 跳, 爬"],["zh","Nói được câu 我会跳"],["vi","Kể lại chuyện Cáo, Thỏ và Gà trống"],["vd","Đứng một chân và đếm đến 5"],["vd","Nhảy xa bằng hai chân, đáp không ngã"],["td","Nhớ và vỗ lại đúng một nhịp vỗ tay"]],
  days: [
    { chuyen:"Đi, chạy, nhảy, dừng!",
      en:{v:0, t:"Lần 1 – làm theo. Mở qua YouTube Kids, tắt tự phát, dọn chỗ rộng. Bài gọi lần lượt: walk (đi), hop (nhảy lò cò), run (chạy), tiptoe (nhón chân), jump (nhảy), swim (bơi), sleep (ngủ) và stop (dừng). Hai mẹ con làm theo, nghe 'stop' thì đứng im.", b:"Let's walk! Now stop!"},
      zh:{v:0, t:"Lần 1 – đôi bàn tay. Làm đúng các động tác tay bài hát chỉ: vỗ tay, vẫy tay, giấu tay. Nghe 手 (shǒu – tay) thì giơ hai tay lên; nghe 拍拍手 (pāipai shǒu) thì vỗ tay.", b:"拍拍手！(pāipai shǒu!)"},
      words:{en:[7,8,5,4,9],zh:[0,5,2]},
      doi:"Thí nghiệm 'Chân làm được gì?': bé thử từng việc rồi so sánh: đi 5 bước, chạy 5 bước, nhảy lò cò 5 lần, nhón chân 5 bước. Hỏi: 'Việc nào mệt nhất? Việc nào nhanh nhất?'. Sau khi chạy, bé đặt tay lên ngực xem tim đập nhanh hơn không.",
      ob:"Ông bà cho bé đi, chạy, nhảy lò cò vài bước rồi hỏi bé việc nào mệt nhất.",
      toi:"Kể chuyện Cóc kiện Trời bằng giọng vui: trời hạn hán lâu ngày, cây khô, muông thú khát nước. Chú Cóc bé nhỏ quyết định lên trời đòi mưa. Trên đường đi, Cóc rủ thêm Cua, Gấu, Cọp, Ong, Cáo. Mẹ hỏi: 'Mỗi bạn đi thế nào?' – Cóc nhảy, Cua bò ngang, Gấu đi lừng lững. Bé làm thử từng kiểu." },
    { chuyen:"Đôi tay biết làm gì?",
      en:{v:1, t:"Lần 1 – đôi bàn tay. Bé làm theo bài: open (xòe tay), shut (nắm tay), give a little clap (vỗ tay nhẹ). Lần đầu làm chậm. Mẹ dừng giữa bài, nói 'open' hoặc 'shut' lộn xộn để bé nghe kỹ và làm đúng.", b:"Open, shut them. Give a little clap!"},
      zh:{v:1, t:"Lần 1 – lại đây, đi đi. Mẹ đứng ở một đầu phòng. Nghe 来 (lái – lại đây), bé chạy về phía mẹ; nghe 去 (qù – đi), bé chạy ra xa. Nghe 跑 (pǎo – chạy) thì chạy nhanh hơn một chút.", b:"来！跑过来！(lái! pǎo guòlái!)"},
      words:{en:[0,6,9],zh:[3,0,4]},
      doi:"Thí nghiệm 'Tay làm được gì?': bé dùng tay làm 5 việc: vỗ tay, cầm thìa, vặn mở nắp hộp, vẽ một đường, ném bóng mềm vào rổ. Rồi thử lại bằng tay còn lại. Hỏi: 'Tay nào làm dễ hơn?'. Bé nói 'My hands can clap!'.",
      ob:"Ông bà cho bé dùng tay mở nắp hộp, ném bóng mềm vào rổ.",
      toi:"Vè Con cua mà có hai càng: mẹ đọc chậm, bé làm động tác từng con: cua bò ngang (giơ hai tay làm càng), cá bơi (vẫy tay), rùa thụt cổ, voi đưa vòi, chim vỗ cánh. Hỏi: 'Con nào có cánh? Con nào có càng?'.", lyr:"Con cua mà có hai càng" },
    { chuyen:"Bé nhảy được bao xa?",
      en:{v:0, t:"Lần 2 – bé gọi động tác. Mẹ dừng trước mỗi động tác mới, bé đoán và nói trước: 'Run!', 'Jump!'. Rồi bật tiếp xem đúng không và làm theo. Đến 'stop' thì cả hai đứng im 3 giây.", b:"What's next? Hop!"},
      zh:{v:0, t:"Lần 2 – tay hay chân? Mẹ dừng giữa bài, nói 手 hoặc 脚 (jiǎo – chân): nghe 手 bé giơ tay, nghe 脚 bé dậm chân. Mẹ nói nhanh dần để bé nghe kỹ.", b:"手！脚！(shǒu! jiǎo!)"},
      words:{en:[7,8,5,4,9],zh:[0,1,5]},
      doi:"Đo bước nhảy: dán một vạch băng dính trên sàn. Bé đứng sau vạch, nhảy xa bằng hai chân; mẹ dán vạch ở chỗ bé đáp. Nhảy 3 lần, so xem lần nào xa nhất. Đếm số bàn chân từ vạch đầu đến vạch xa nhất: 'One, two, three feet!'.",
      ob:"Ông bà dán vạch trên sàn, cho bé nhảy xa và đánh dấu chỗ bé đáp.",
      toi:"Kể tiếp Cóc kiện Trời: lên đến cửa nhà Trời, Cóc đánh trống thật to. Trời sai quân ra, các bạn của Cóc cùng giúp theo kế đã bàn, quân nhà Trời thua chạy. Trời đành mời Cóc vào, hứa hễ nghe Cóc nghiến răng là cho mưa ngay. Mẹ và bé làm tiếng mưa bằng các ngón tay gõ lên bàn." },
    { chuyen:"Đứng một chân",
      en:{v:2, t:"Lần 1 – bé đã biết truyện này, nay có nhiệm vụ mới: mỗi con vật, mẹ dừng lại hỏi 'Arms or legs?' – con vật dùng tay hay chân? Bé làm động tác và nói 'arms' hoặc 'legs'. Chỉ xem tối đa 5 phút.", b:"I can do it with my arms!"},
      zh:{v:2, t:"Lần 1 – truyện ngày hội thể thao, chưa đến 1 phút, mở 2–3 lần. Mỗi khi nghe 走 (zǒu – đi), 爬 (pá – bò), 跳 (tiào – nhảy), 跑 (pǎo – chạy), bé làm đúng động tác. Lần sau mẹ dừng cho bé nói theo.", b:"我会跑！(wǒ huì pǎo!)"},
      words:{en:[2,3,0,1],zh:[4,6,2,3]},
      doi:"Thí nghiệm thăng bằng: bé thử đứng một chân (đếm đến 5), đi trên một vạch băng dính thẳng, đi nhón chân. Mẹ đếm bằng tiếng Anh, rồi bằng tiếng Trung. Hỏi: 'Đứng một chân khó hay dễ? Dang hai tay ra có dễ hơn không?'.",
      ob:"Ông bà cho bé thử đứng một chân và đếm đến 5.",
      toi:"Đồng dao Con công hay múa: mẹ đọc, bé làm theo: 'rụt cổ vào', 'xòe cánh ra' (dang hai tay). Đọc lần 2 nhanh hơn. Hỏi: 'Con công dùng gì để múa? Tay mình có giống cánh công không?'.", lyr:"Con công hay múa" },
    { chuyen:"Chạy nhanh, đi chậm",
      en:{v:1, t:"Lần 2 – bé nói trước. Mẹ dừng trước mỗi động tác, bé nói trước 'Open!' hay 'Shut!' rồi làm. Thêm khó: bé làm bằng chân: 'open' dang chân, 'shut' khép chân.", b:"Open your hands. Shut your hands."},
      zh:{v:1, t:"Lần 2 – bé ra lệnh. Đổi vai: bé đứng ở đầu phòng; nghe 来 thì bé gọi '妈妈，来!' và mẹ chạy đến; nghe 去 thì mẹ chạy đi. Bé hô 跑! để mẹ chạy nhanh hơn.", b:"妈妈，来！(māma, lái!)"},
      words:{en:[0,6,9],zh:[3,4,0]},
      doi:"Thí nghiệm 'Chạy nhanh, đi chậm': kẻ 2 vạch cách nhau khoảng 10 bước. Bé đi từ vạch này sang vạch kia, mẹ đếm; rồi chạy, mẹ đếm lại. Hỏi: 'Đi đếm đến mấy? Chạy đếm đến mấy? Cái nào nhanh hơn?'. Bé nói 'Run is fast. Walk is slow.'.",
      ob:"Ông bà kẻ 2 vạch, đếm khi bé đi và khi bé chạy để xem cái nào nhanh hơn.",
      toi:"Kể lại Cóc kiện Trời, mỗi người một vai: bé làm Cóc nhảy, mẹ làm Cua bò ngang, gấu bông làm Gấu. Cả đoàn đi quanh phòng 'lên trời'. Kết: Cóc nghiến răng, mẹ làm tiếng mưa rào rào." },
    { chuyen:"Sách 'Con làm được'",
      en:{v:0, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Sau đó bé chọn 1 video thích nhất tuần để xem lại và làm động tác thật đẹp để mẹ chụp ảnh."},
      zh:{v:2, t:"Nếu bé muốn, xem lại 运动会 và làm động tác cho mẹ chụp ảnh."},
      special:"Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần",
      doi:"Mẹ chụp 6 ảnh bé đang đi, chạy, nhảy, nhảy lò cò, vỗ tay, đứng một chân (hoặc bé tự vẽ người que). In hoặc vẽ vào cuốn sách 8 trang gấp từ giấy A4. Dưới mỗi tranh, mẹ viết 'I can jump – 我会跳 (wǒ huì tiào)'. Bé 'đọc' sách cho cả nhà.",
      toi:"Đọc cuốn sách 'Con làm được' vừa làm. Mẹ chỉ tranh, bé nói 'I can…' và làm động tác tại chỗ." },
    { chuyen:"Sân chơi cuối tuần",
      en:{v:1, t:"Ôn nhẹ: bé chọn video thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:1, t:"Mở 来来去去 một lần, cả nhà chạy lại, chạy đi."},
      doi:"Ra công viên hoặc sân chơi: chơi đuổi bắt nhẹ, nhảy qua vạch, đi trên bờ thấp có người lớn nắm tay. Mỗi lần đổi trò, bé hô động tác bằng tiếng Anh hoặc tiếng Trung: 'Run! 跑!'. Ra đường luôn nắm tay người lớn.",
      ob:"Ông bà dắt bé ra sân chơi, cho bé chạy, nhảy qua vạch và hô tên động tác.",
      toi:"Hỏi bé: 'Hôm nay chân con chạy được bao xa?'. Đọc lại Con công hay múa, bé xòe tay như cánh.", lyr:"Con công hay múa" },
    { chuyen:"Ai làm đúng trước?",
      en:{v:3, t:"Ôn bài cũ với nhiệm vụ mới: thi làm đúng. Mỗi động tác bài gọi (clap, stretch, turn around), ai làm trước được 1 sao. Mẹ thỉnh thoảng làm sai để bé phát hiện và nói 'No! Clap!'.", b:"Can you clap your hands? Yes, I can!"},
      zh:{v:2, t:"Lần 2 – ai nhanh hơn. Mẹ dừng sau mỗi từ, mẹ và bé thi làm động tác đúng trước: 走, 爬, 跳, 跑. Ai nhanh được 1 sao; đúng hết được 3 sao.", b:"跳！跑！(tiào! pǎo!)"},
      words:{en:[6,0,4],zh:[2,3,4,6]},
      doi:"Đường đua chướng ngại vật trong nhà: bò qua gầm bàn (爬), nhảy qua gối (跳), đi nhón chân trên vạch băng dính, chạy về đích (跑). Dọn đồ sắc, cạnh nhọn trước khi chơi. Mẹ đếm thời gian bằng tiếng Anh. Lượt 2, bé nói tên mỗi chặng bằng tiếng Trung trước khi làm.",
      ob:"Ông bà cho bé bò qua gầm bàn, nhảy qua gối, chạy về đích và đếm giờ.",
      toi:"Kể chuyện Cáo, Thỏ và Gà trống: Cáo có nhà băng, Thỏ có nhà gỗ. Mùa xuân đến, nhà băng của Cáo tan mất. Cáo sang xin ở nhờ nhà Thỏ rồi đuổi Thỏ ra ngoài. Thỏ ngồi khóc. Chó đi qua định giúp, nhưng sợ Cáo nên chạy mất. Mẹ hỏi: 'Ai sẽ giúp Thỏ?'." },
    { chuyen:"Đóng băng!",
      en:{v:0, t:"Lần 3 – thử thách đóng băng. Mẹ bấm dừng bất chợt, bé phải đứng im đúng tư thế đang làm. Bật lại, bé nói trước động tác tiếp theo. Ai cử động khi nhạc dừng thì mất 1 sao.", b:"Freeze! Don't move!"},
      zh:{v:0, t:"Lần 3 – bé nói trước, chuyển ngữ. Mẹ nói 'clap your hands', bé nói 拍拍手 và vỗ tay; mẹ nói 'hands', bé nói 手. Rồi mở bài để làm theo. Đúng được 1 sao.", b:"拍拍手，拍拍手！(pāipai shǒu, pāipai shǒu!)"},
      words:{en:[7,8,5,4,9],zh:[0,5,1]},
      doi:"Đố vui tính sao: mẹ hỏi 5 câu: 'Con dùng gì để chạy?' (legs, feet), 'Dùng gì để vỗ tay?' (hands), 'Con gì nhảy lò cò?' (thỏ), 'Con gì bò?' (rùa, sâu), 'Nghe stop thì làm gì?'. Trả lời bằng tiếng Việt được 1 sao, có thêm tiếng Anh hoặc tiếng Trung được 2 sao.",
      ob:"Ông bà hỏi bé dùng gì để chạy, dùng gì để vỗ tay.",
      toi:"Kể tiếp Cáo, Thỏ và Gà trống: Gấu đi qua cũng định giúp, nhưng nghe Cáo dọa cũng bỏ chạy. Rồi Gà trống đến, gáy vang 'Ò ó o!' và vỗ cánh phành phạch. Cáo giật mình, sợ quá chạy biến vào rừng. Thỏ được về nhà và mời Gà trống ở cùng. Mẹ và bé thi gáy và vỗ tay như Gà trống." },
    { chuyen:"Mẹ bảo, bé làm",
      en:{v:1, t:"Lần 3 – nhanh hơn. Mở bài, lần này mẹ hát theo nhanh hơn video, bé phải làm kịp. Rồi chơi 'ai nhanh': mẹ hô 'open' hoặc 'shut' bất chợt, ai làm đúng trước được 1 sao.", b:"Quick! Shut them!"},
      zh:{v:1, t:"Lần 3 – câu dài hơn. Bé gọi cả câu: 妈妈，跑过来！(māma, pǎo guòlái – mẹ ơi, chạy lại đây!), mẹ chạy lại. Rồi bé hô 走 thì mẹ đi chậm, 跳 thì mẹ nhảy. Đổi vai.", b:"跑过来！(pǎo guòlái!)"},
      words:{en:[0,6,9],zh:[3,4,2]},
      doi:"Thử thách 'Mẹ bảo' hai thứ tiếng: mẹ ra liền 8 lệnh, xen kẽ tiếng Anh và tiếng Trung: 'Jump!', '跑!', 'Clap your hands!', '走!', 'Hop!'… Bé làm đúng từ 6 lệnh trở lên được 3 sao. Rồi bé ra lệnh cho mẹ.",
      ob:"Ông bà nói 'Nhảy!', 'Chạy!', 'Vỗ tay!' để bé làm theo.",
      toi:"Đọc một truyện trong 'Truyện đồng thoại Võ Quảng (có tranh màu)' (NXB Kim Đồng). Mỗi khi có con vật, bé bắt chước cách con vật ấy đi lại: bò, nhảy, bay. Hỏi: 'Con vật này đi bằng chân hay bay bằng cánh?'." },
    { chuyen:"Thử thách năm giây",
      en:{v:2, t:"Lần 2 – thử thách 'I can do it'. Mẹ dừng ở mỗi con vật, đếm 1 đến 5; bé phải làm được động tác đó trong 5 giây. Làm được thì nói 'I can do it!' và được 1 sao.", b:"I can do it! Can you?"},
      zh:{v:2, t:"Lần 3 – bé làm người dẫn chương trình hội thể thao, hô bằng tiếng Trung: 走! 爬! 跳! 跑!, mẹ và thú bông thi đấu. Bé tuyên bố người thắng: 你真棒！(nǐ zhēn bàng – giỏi quá!).", b:"你真棒！(nǐ zhēn bàng!)"},
      words:{en:[2,3,4,5],zh:[4,6,2,3]},
      doi:"Thử thách vỗ tay theo nhịp: mẹ vỗ một nhịp (ví dụ 2 cái nhanh, 1 cái chậm), bé nghe rồi vỗ lại y như vậy. Mỗi lượt khó hơn một chút. Bé vỗ đúng 4 lượt được 3 sao. Đổi vai: bé vỗ, mẹ bắt chước.",
      ob:"Ông bà vỗ tay một nhịp, bé nghe rồi vỗ lại giống như vậy.",
      toi:"Câu đố: 'Năm ông cùng ở một nhà / Tình huynh nghĩa đệ vào ra thuận hòa'. Bé đã gặp câu đố này ở chủ đề gia đình, nay thử đoán thật nhanh. Rồi đếm ngón tay, ngón chân: 'Ten fingers! Ten toes!'.", lyr:"Câu đố bàn tay" },
    { chuyen:"Con biết làm nhiều việc",
      en:{v:3, t:"Lần 2 – bé nói trước bằng câu dài. Mẹ dừng trước mỗi câu hỏi 'Can you…?', bé nói trước 'Yes, I can!' và làm động tác. Thử câu dài: 'I can clap my hands!'.", b:"I can clap my hands!"},
      zh:{v:0, t:"Thử thách câu: bé nói 3 câu 我会…: 我会跳 (con biết nhảy), 我会跑 (con biết chạy), 我会拍拍手 (con biết vỗ tay), mỗi câu làm động tác. Rồi mở 小小手 một lần cho vui.", b:"我会跳，我会跑！(wǒ huì tiào, wǒ huì pǎo!)"},
      words:{en:[6,4,5],zh:[2,3,5]},
      doi:"Tập 3 câu cho cuộc gọi ông bà ngày mai: 'I can jump. I can run. I can clap.' và '我会跳。我会跑。', mỗi câu kèm động tác. Bé để sẵn cuốn sách 'Con làm được' tuần trước để khoe.",
      ob:"Ông bà nghe bé tập nói 'I can jump' và xem bé làm động tác.",
      toi:"Đọc lại vè Con cua mà có hai càng, bé làm động tác từng con nhanh hơn lần trước.", lyr:"Con cua mà có hai càng" },
    { chuyen:"Khoe ông bà con làm được",
      en:{v:3, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé nói từ thật to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại."},
      zh:{v:0, t:"Xem lại 小小手 rồi bé dạy ông bà vỗ tay trong cuộc gọi."},
      special:"Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung",
      doi:"Gọi video cho ông bà, đặt điện thoại cố định trên bàn để bé vận động an toàn. Bé nói 3 câu kèm động tác: 'I can jump!' (nhảy), 'I can run!' (chạy tại chỗ), 'I can clap!' (vỗ tay); tiếng Trung: '我会跳！我会跑！'. Rồi bé đố ông bà làm theo: '拍拍手!'. Gọi khoảng 5–10 phút.",
      toi:"Hỏi bé ông bà làm theo có đúng không. Kể lại thật ngắn chuyện Gà trống dũng cảm, bé gáy 'Ò ó o!'." },
    { chuyen:"Cả nhà đóng băng",
      en:{v:0, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:1, t:"Mở 来来去去 một lần cho cả nhà chạy lại, chạy đi."},
      doi:"Cả nhà chơi đóng băng: mở một bài nhạc vui, mọi người nhảy, đi, chạy tại chỗ; bé bấm dừng và hô 'Stop!' hoặc '停 (tíng)!'. Ai còn cử động thì vỗ tay 5 cái.",
      toi:"Bé kể điều vui nhất trong 2 tuần: Cóc kiện Trời, Gà trống dũng cảm hay đường đua trong nhà. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 107 – Trái cây ===================== */
window.CT_DETAIL45[107] = {
  sub: "Trái cây",
  vocab: {
    en: [["apple","🍎","quả táo",false],["banana","🍌","quả chuối",false],["orange","🍊","quả cam",false],["grapes","🍇","quả nho",false],["strawberry","🍓","quả dâu tây",false],["pear","🍐","quả lê",false],["hungry","🤤","đói bụng",false],["yummy","😋","ngon",false],["I like","👍","con thích",false],["eat","🍴","ăn",true]],
    zh: [["苹果","píngguǒ","quả táo","🍎"],["香蕉","xiāngjiāo","quả chuối","🍌"],["橙子","chéngzi","quả cam","🍊"],["葡萄","pútao","quả nho","🍇"],["西瓜","xīguā","dưa hấu","🍉"],["我喜欢","wǒ xǐhuan","con thích","👍"],["吃","chī","ăn","🍴"],["买","mǎi","mua","🛒"]],
    en_phr: [["I like apples.","apples","🍎"],["Are you hungry? Yes, please!","hungry","🤤"],["It's a banana!","banana","🍌"],["Yummy, yummy oranges!","oranges","🍊"]],
    zh_phr: [["我喜欢吃苹果。","苹果","wǒ xǐhuan chī píngguǒ.","Con thích ăn táo.","🍎"],["这是香蕉。","香蕉","zhè shì xiāngjiāo.","Đây là quả chuối.","🍌"],["我要买橙子。","橙子","wǒ yào mǎi chéngzi.","Con muốn mua cam.","🍊"]],
    seq: [["🥚","a little egg","一个小蛋"],["🐛","a hungry caterpillar","好饿的毛毛虫"],["🍎","eats apples","吃苹果"],["🦋","a butterfly!","蝴蝶"]]
  },
  media: {
    en: [
      {t:"Are You Hungry? – chỉ xem bài đầu tiên",u:"https://www.youtube.com/watch?v=9x4zQ9T2Zhw",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Guess the Fruit – Shadow Game and Song",u:"https://www.youtube.com/watch?v=D5jpFhg7OW4",kind:"game",min:3.3,ch:"Dream English Kids"},
      {t:"The Very Hungry Caterpillar (Eric Carle đọc)",u:"https://www.youtube.com/watch?v=vkYmvxP0AJI",kind:"story",ch:"Puffin Books / Eric Carle"}
    ],
    zh: [
      {t:"水果歌 Fruit Song – Bài hát trái cây",u:"https://www.youtube.com/watch?v=gfyvYYIij0g",kind:"song_action",min:0.8,ch:"Cool Panda Chinese Learning"},
      {t:"我喜欢吃 I like to Eat Fruit – Con thích ăn…",u:"https://www.youtube.com/watch?v=_4UBXjMSEf0",kind:"song_action",ch:"LiveandLearnCan"},
      {t:"【9】买东西 Buying food in the store – truyện đi mua đồ ăn",u:"https://www.youtube.com/watch?v=H6i6prNRuMs",kind:"story",ch:"ChineseClass365 中文加油站"}
    ]
  },
  weeks: [
    {title:"Bé đói rồi! (Tuần Ca nhạc)", tale:{t:"Cây khế (Ăn khế trả vàng)",id:"cay_khe"},
     toi_vi:[{t:"Câu đố quả na",type:"cau_do",lyr:"Quả gì nhiều mắt\nKhi chín nứt ra\nRuột trắng nõn nà\nHạt đen nhanh nhánh"},{t:"Ăn quả nhớ kẻ trồng cây",type:"ca_dao",lyr:"Ăn quả nhớ kẻ trồng cây\nĂn khoai nhớ kẻ cho dây mà trồng"},{t:"Câu đố quả mít",type:"cau_do",lyr:"Da cóc mà bọc trứng gà\nBổ ra thơm phức cả nhà muốn ăn\nLà quả gì?"}],
     book_vi:{t:"Đỗ trắng, đỗ đen (thơ)",author:"Phạm Hổ",publisher:"NXB Kim Đồng"}},
    {title:"Chú sâu háu ăn (Tuần Kể chuyện)", tale:{t:"Thánh Gióng (kể ngắn, nhẹ nhàng)",id:"thanh_giong"},
     toi_vi:[{t:"Câu đố quả nhãn",type:"cau_do",lyr:"Da cóc mà bọc bột lọc\nBột lọc mà bọc hòn than"},{t:"Lúa ngô là cô đậu nành",type:"dong_dao",lyr:"Lúa ngô là cô đậu nành\nĐậu nành là anh dưa chuột\nDưa chuột là ruột dưa gang\nDưa gang là nàng dưa hấu\nDưa hấu là cậu lúa ngô\nLúa ngô là cô đậu nành"}]}
  ],
  obs: [["en","Gọi đúng apple, banana, orange, grapes"],["en","Nói câu “I like…” với quả mình thích"],["zh","Nói 苹果, 香蕉, 橙子 khi chỉ quả thật"],["zh","Nói được câu 我喜欢吃…"],["vi","Đoán được câu đố quả na hoặc quả nhãn"],["vi","Kể vòng đời con bướm theo 4 tranh"],["td","Đoán quả bằng cách sờ, không nhìn"],["xh","Nói “please”, “thank you” khi chơi mua bán"]],
  days: [
    { chuyen:"Bé có đói không?",
      en:{v:0, t:"Lần 1 – chỉ xem bài đầu. Video gồm nhiều bài nối nhau, mẹ chỉ cho xem bài đầu tiên (khoảng 2–3 phút) rồi dừng. Mỗi khi bài hỏi có đói không và đưa ra một quả, bé giả vờ ăn quả đó, xoa bụng nói 'Yes, please!'.", b:"Are you hungry?"},
      zh:{v:0, t:"Lần 1 – quả thật trên bàn. Bài chưa đến 1 phút, mở 2–3 lần. Mẹ đặt táo, chuối, cam thật lên bàn. Nghe 苹果 (píngguǒ – táo), 香蕉 (xiāngjiāo – chuối), 橙子 (chéngzi – cam), bé giơ đúng quả lên cao.", b:"苹果！香蕉！橙子！(píngguǒ! xiāngjiāo! chéngzi!)"},
      words:{en:[0,1,6,7],zh:[0,1,2]},
      doi:"Rổ trái cây của bé: mẹ để 4–5 loại quả thật trong rổ (táo, chuối, cam, nho, lê). Bé lấy từng quả, gọi tên tiếng Việt; mẹ nói tên tiếng Anh, bé nhắc lại. Rồi bé xếp quả từ to nhất đến nhỏ nhất. Rửa tay rồi ăn một quả bé chọn.",
      ob:"Ông bà bày vài loại quả, bé gọi tên từng quả rồi chọn một quả để ăn.",
      toi:"Kể chuyện Cây khế bằng lời của mẹ: người anh tham lấy hết của cải, chỉ để lại cho em túp lều và cây khế. Người em chăm cây, cây sai trĩu quả. Một hôm có con chim lạ đến ăn khế. Người em buồn, chim nói: 'Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng'. Mẹ dừng hỏi: 'Túi ba gang to hay nhỏ? Con giơ tay đo thử.'" },
    { chuyen:"Cắn táo, bóc chuối",
      en:{v:0, t:"Lần 2 – mỗi quả một động tác: apple – cắn 'rộp', banana – bóc vỏ, orange – bóc múi. Nghe quả nào làm động tác quả đó rồi nói 'Yum yum!'. Cuối bài mẹ dừng nhạc bất chợt, bé đứng im với 'quả' đang cầm.", b:"Yum yum! I like bananas."},
      zh:{v:1, t:"Lần 1 – con thích ăn gì? Mẹ dừng mỗi khi bài nói 我喜欢吃… (wǒ xǐhuan chī – con thích ăn…), bé chỉ vào tranh hoặc quả thật mình thích. Mẹ nói câu mẫu bằng tiếng Trung với quả bé chỉ.", b:"我喜欢吃苹果。(wǒ xǐhuan chī píngguǒ.)"},
      words:{en:[1,0,2,9],zh:[5,6,0]},
      doi:"Đoán quả bằng tay: mẹ cho 3 loại quả vào túi vải. Bé thò tay sờ (không nhìn) rồi đoán: tròn nhẵn là táo, dài cong là chuối, sần sùi là cam. Đoán xong lấy ra kiểm tra và nói tên bằng tiếng Anh.",
      ob:"Ông bà cho quả vào túi vải, bé sờ không nhìn và đoán là quả gì.",
      toi:"Kể tiếp Cây khế: người em may túi ba gang, chim chở ra đảo, người em chỉ lấy vừa đủ một túi nhỏ, nhờ vậy đỡ nghèo. Người anh biết chuyện, đổi lấy cây khế, may túi thật to, lấy quá nhiều vàng nên chim không bay nổi. Chim nghiêng cánh, vàng rơi hết xuống biển, người anh ướt sũng bơi vào bờ, hối hận và sống tử tế hơn. Hỏi: 'Vì sao người em được thưởng?'." },
    { chuyen:"Bóng của quả gì?",
      en:{v:1, t:"Lần 1 – đoán bóng. Video hiện bóng đen của một quả trước, rồi mới hiện quả thật. Mẹ dừng ở mỗi bóng, bé đoán bằng tiếng Việt hoặc tiếng Anh. Bật tiếp xem có đúng không; đúng thì đập tay.", b:"What is it? It's a banana!"},
      zh:{v:0, t:"Lần 2 – dùng chung động tác với bài tiếng Anh: 苹果 cắn 'rộp', 香蕉 bóc vỏ, 橙子 bóc múi. Nghe quả nào làm động tác quả đó. Mẹ nói: apple = 苹果, banana = 香蕉.", b:"香蕉，好吃！(xiāngjiāo, hǎochī!)"},
      words:{en:[0,1,2,3,4],zh:[0,1,2]},
      doi:"Đoán bóng quả thật: buổi tối, mẹ bật đèn pin chiếu lên tường, đặt từng quả trước đèn cho bé đoán theo bóng: 'It's a banana!'. Thử quả khó hơn: quả lê, chùm nho. Bé cũng thử làm bóng con vật bằng tay.",
      ob:"Ông bà chiếu đèn lên tường, đặt quả trước đèn cho bé đoán theo cái bóng.",
      toi:"Đọc tập thơ 'Đỗ trắng, đỗ đen' (Phạm Hổ, NXB Kim Đồng), chọn 1 bài ngắn. Đọc chậm, nhấn giọng ở tên các thứ ăn được. Hỏi: 'Bài thơ nói đến những thứ gì ăn được?'." },
    { chuyen:"Quầy bán trái cây",
      en:{v:1, t:"Lần 2 – bé nói trước bằng câu. Mẹ dừng ở mỗi bóng, bé nói cả câu 'It's a…!' trước khi quả hiện ra. Hết video, mẹ giấu một quả sau lưng, chỉ cho bé thấy một phần, bé đoán.", b:"It's an orange!"},
      zh:{v:1, t:"Lần 2 – bé hát tiếp. Mẹ dừng ngay sau tiếng 我喜欢吃, bé tự nói tên một quả bằng tiếng Trung: 苹果, 香蕉 hoặc 橙子. Không cần giống bài, quả nào bé thích cũng được.", b:"我喜欢吃香蕉！(wǒ xǐhuan chī xiāngjiāo!)"},
      words:{en:[0,1,2,3,4,5],zh:[5,6,0,1,2]},
      doi:"Bán hàng trái cây: bày các quả lên bàn làm 'quầy hàng'. Bé làm người bán, mẹ làm khách: 'An apple, please!'. Bé đưa quả, mẹ nói 'Thank you!'. Đổi vai: mẹ bán, bé mua bằng tiếng Trung: '我要苹果 (wǒ yào píngguǒ)'.",
      ob:"Ông bà làm khách mua quả, bé làm người bán đưa đúng quả.",
      toi:"Câu đố: 'Quả gì nhiều mắt / Khi chín nứt ra / Ruột trắng nõn nà / Hạt đen nhanh nhánh'. Nếu có quả na, mẹ cho bé sờ vỏ có nhiều 'mắt', rồi tách ra xem ruột (mẹ bỏ hạt đi, không cho bé cầm chơi).", lyr:"Câu đố quả na" },
    { chuyen:"Con thích, con không thích",
      en:{v:0, t:"Lần 3 – bé hát trước. Mẹ tắt tiếng ở mỗi chỗ trả lời, bé nói 'Yes, please!' trước rồi mới bật lại. Thêm: bé đổi một quả trong bài thành quả mình thích nhất và nói 'I like…'.", b:"Yes, please! I like grapes."},
      zh:{v:0, t:"Lần 3 – bé nói trước. Mẹ dừng trước mỗi quả, bé nói trước tên quả bằng tiếng Trung và giơ quả lên. Bài ngắn nên chơi 2 lượt.", b:"这是橙子。(zhè shì chéngzi.)"},
      words:{en:[3,4,8,6],zh:[0,1,2]},
      doi:"Chấm điểm 'Con thích – con không thích': bé nếm 4 loại quả đã cắt nhỏ (mẹ cắt), mỗi quả giơ ngón cái lên hoặc xuống. Bé nói 'I like apples!' hoặc 'I don't like…'. Mẹ ghi lại: quả nào được ngón cái lên?",
      ob:"Ông bà cho bé nếm vài miếng quả, hỏi bé thích quả nào nhất.",
      toi:"Ca dao 'Ăn quả nhớ kẻ trồng cây / Ăn khoai nhớ kẻ cho dây mà trồng'. Mẹ kể ai đã trồng ra quả bé ăn hôm nay: bác nông dân, ông bà ở quê. Hỏi: 'Khi ăn quả, con muốn cảm ơn ai?'.", lyr:"Ăn quả nhớ kẻ trồng cây" },
    { chuyen:"Salad trái cây của bé",
      en:{v:1, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Sau đó bé chọn 1 video thích nhất tuần để xem lại, xem xong vào bếp cùng mẹ."},
      zh:{v:0, t:"Nếu bé muốn, xem lại 水果歌 rồi giơ đúng quả trên bàn bếp."},
      special:"Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu",
      doi:"Làm salad trái cây: mẹ gọt và cắt quả (dao do mẹ cầm). Bé rửa quả, bỏ từng miếng vào bát, đếm số miếng và gọi tên: 'Apple, banana, orange!' rồi '苹果，香蕉，橙子!'. Bé trộn bằng thìa, mời mọi người: 'Yummy! 好吃 (hǎochī)!'.",
      toi:"Hỏi bé: 'Trong salad có những quả gì?'. Câu đố quả mít: 'Da cóc mà bọc trứng gà / Bổ ra thơm phức cả nhà muốn ăn / Là quả gì?'.", lyr:"Câu đố quả mít" },
    { chuyen:"Chọn quả cho cả nhà",
      en:{v:0, t:"Ôn nhẹ: bé chọn video thích nhất tuần, xem 1 lần (bài đầu), rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:1, t:"Mở 我喜欢吃 một lần, mỗi người nói quả mình thích."},
      doi:"Đi chợ hoặc siêu thị cùng gia đình, nắm tay người lớn suốt buổi. Bé tìm 4 loại quả đã học, chỉ cho mẹ và nói tên tiếng Anh. Bé chọn 1 loại quả cho cả nhà ăn tối.",
      ob:"Ông bà dắt bé đi chợ, để bé chỉ và gọi tên các loại quả.",
      toi:"Kể lại Cây khế, bé làm con chim nói câu 'Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng'. Mẹ làm người em may túi nhỏ." },
    { chuyen:"Chú sâu háu ăn",
      en:{v:2, t:"Lần 1 – xem và đếm. Tác giả Eric Carle đọc truyện chú sâu háu ăn, mỗi ngày ăn thêm một loại quả. Nếu video dài hơn 8 phút, chỉ xem 5 phút đầu. Mỗi trang, mẹ dừng lại cùng bé đếm số quả: 'One apple, two pears…'.", b:"He was still hungry!"},
      zh:{v:2, t:"Lần 1 – truyện đi mua đồ ăn. Mẹ xem trước một lần. Khi xem với bé, mỗi lần nhân vật mua một món, mẹ dừng lại hỏi bằng tiếng Việt 'Bạn mua gì?'. Mẹ dạy 2 từ: 买 (mǎi – mua) và 请 (qǐng – làm ơn).", b:"请给我苹果。(qǐng gěi wǒ píngguǒ.)"},
      words:{en:[0,5,4,6],zh:[7,0,1]},
      doi:"Sâu háu ăn bằng chiếc tất: mẹ xỏ một chiếc tất cũ vào tay làm 'con sâu'. Mẹ vẽ quả lên mấy miếng bìa và khoét sẵn lỗ. Bé đeo 'con sâu' luồn qua lỗ từng miếng để 'ăn' quả, mỗi miếng đếm và nói tên: 'One apple! Two pears!'.",
      ob:"Ông bà làm con sâu bằng chiếc tất, cùng bé 'ăn' các quả bìa và đếm.",
      toi:"Kể chuyện Thánh Gióng (kể ngắn, nhẹ nhàng): ở làng Gióng có một cậu bé lên ba mà chưa biết nói, biết cười. Một hôm có sứ giả đi tìm người giỏi giúp nước, cậu bé bỗng cất tiếng xin đi. Từ đó cậu ăn bao nhiêu cũng không no, lớn nhanh như thổi. Mẹ hỏi: 'Cậu bé ăn nhiều để làm gì?'." },
    { chuyen:"Sâu sẽ ăn gì tiếp?",
      en:{v:2, t:"Lần 2 – 'Chuyện gì xảy ra tiếp?'. Trước mỗi lần lật trang, mẹ dừng hỏi: 'Hôm nay sâu ăn mấy quả? Quả gì?'. Bé đoán rồi bật tiếp. Đến cuối, hỏi: 'Chú sâu biến thành gì?'.", b:"What will he eat next?"},
      zh:{v:0, t:"Bé nói trước, chuyển ngữ. Mẹ nói tên quả bằng tiếng Anh, bé nói bằng tiếng Trung: 'apple' – 苹果, 'banana' – 香蕉, 'orange' – 橙子. Mẹ dạy thêm 2 quả: 葡萄 (pútao – nho), 西瓜 (xīguā – dưa hấu). Rồi mở bài kiểm tra.", b:"葡萄，西瓜。(pútao, xīguā.)"},
      words:{en:[0,1,2,3],zh:[0,1,2,3,4]},
      doi:"Vòng đời con bướm bằng tranh: bé vẽ hoặc mẹ in 4 tranh: quả trứng nhỏ, con sâu, cái kén, con bướm. Bé xếp đúng thứ tự và kể bằng tiếng Việt. Tranh con sâu, bé nói 'hungry caterpillar'; tranh cuối, bé dang tay bay như bướm.",
      ob:"Ông bà cùng bé xếp 4 tranh trứng, sâu, kén, bướm theo đúng thứ tự.",
      toi:"Kể tiếp Thánh Gióng: cơm nấu bao nhiêu cũng hết, cả làng vui vẻ góp gạo, góp cà, góp quả nuôi cậu. Cậu lớn lên thành tráng sĩ, cưỡi ngựa sắt đi giúp nước rồi bay về trời. Mẹ nhấn: cả làng cùng góp đồ ăn. Hỏi: 'Con ăn gì để mau lớn, khỏe như Gióng?'." },
    { chuyen:"Quả của ai đây?",
      en:{v:1, t:"Lần 3 – kể chuyện bóng quả. Mẹ dừng ở mỗi bóng, bé đặt một câu chuyện ngắn cho quả đó: 'Đây là quả chuối của chú khỉ'. Rồi nói câu tiếng Anh 'It's a banana!' và bật tiếp xem có đúng không.", b:"It's a banana for the monkey!"},
      zh:{v:1, t:"Lần 3 – câu dài hơn. Mẹ dừng sau mỗi câu, bé nói đủ câu 我喜欢吃苹果 (wǒ xǐhuan chī píngguǒ). Thêm: bé hỏi mẹ 你喜欢吃什么？(nǐ xǐhuan chī shénme – mẹ thích ăn gì?).", b:"你喜欢吃什么？(nǐ xǐhuan chī shénme?)"},
      words:{en:[0,1,2,8],zh:[5,6,0,1,2]},
      doi:"Đóng vai chú sâu: bé chui vào 'kén' bằng một chiếc chăn mỏng (để hở đầu), mẹ kể 'Chú sâu ăn no rồi đi ngủ…'. Mẹ đếm 'one, two, three', bé bung chăn bay ra làm bướm. Lượt 2, mẹ đếm bằng tiếng Trung.",
      ob:"Ông bà kể chuyện, bé trùm chăn làm kén rồi chui ra làm bướm.",
      toi:"Câu đố: 'Da cóc mà bọc bột lọc / Bột lọc mà bọc hòn than'. Nếu có quả nhãn, cho bé bóc vỏ xem 'bột lọc' trắng và 'hòn than' đen bên trong (mẹ bỏ hạt đi rồi mới cho bé ăn cùi). Hỏi: 'Vỏ màu gì? Cùi màu gì?'.", lyr:"Câu đố quả nhãn" },
    { chuyen:"Đi chợ bằng tiếng Trung",
      en:{v:2, t:"Lần 3 – kể lại bằng tranh. Xem truyện thêm một lần (tối đa 5 phút). Sau đó bé dùng 4 tranh vòng đời con bướm kể lại bằng tiếng Việt; đến chỗ sâu ăn quả, bé nói tên quả bằng tiếng Anh.", b:"On Monday he ate one apple."},
      zh:{v:2, t:"Lần 2 – đóng vai đi chợ. Xem lại truyện. Sau đó mẹ làm người bán, bé làm người mua, nói 请给我… (qǐng gěi wǒ – làm ơn cho con…) cùng tên quả bằng tiếng Trung. Mẹ đưa quả, bé nói 谢谢 (xièxie).", b:"请给我香蕉。谢谢！(qǐng gěi wǒ xiāngjiāo. xièxie!)"},
      words:{en:[0,5,4,6,7],zh:[7,0,1,2]},
      doi:"Đếm như chú sâu: bày quả thành 4 hàng: 1 quả táo, 2 quả chuối, 3 quả cam, 4 miếng dưa. Bé đếm từng hàng bằng tiếng Anh rồi bằng tiếng Trung. Hỏi: 'Hàng nào nhiều nhất? Hàng nào ít nhất?'.",
      ob:"Ông bà bày quả thành hàng 1, 2, 3 quả cho bé đếm.",
      toi:"Kể lại Thánh Gióng, bé kể đoạn cả làng góp đồ ăn: mỗi người mang gì đến cho Gióng. Bé chọn và nói bằng tiếng Anh: 'Rice! Bananas! Apples!'." },
    { chuyen:"Danh sách đi chợ",
      en:{v:0, t:"Câu dài hơn: mở bài đầu, mẹ dừng ở mỗi câu hỏi, bé trả lời cả câu 'Yes, please! I like apples.' hoặc 'No, thank you.'. Rồi bé hỏi lại mẹ 'Are you hungry?'.", b:"No, thank you."},
      zh:{v:1, t:"Thử thách chuyển ngữ: mẹ nói 'I like bananas', bé nói 我喜欢吃香蕉; mẹ nói 'I like apples', bé nói 我喜欢吃苹果. Mở bài một lần để kiểm tra.", b:"我喜欢吃香蕉。(wǒ xǐhuan chī xiāngjiāo.)"},
      words:{en:[6,8,0,1],zh:[5,6,0,1]},
      doi:"Lên danh sách đi chợ: bé vẽ 4 quả cần mua cho ngày mai (táo, chuối, cam, nho). Mẹ viết tên tiếng Anh và tiếng Trung bên cạnh. Bé tập nói 'I want apples, please!' và '我要苹果'.",
      ob:"Ông bà cùng bé vẽ danh sách quả cần mua ngày mai.",
      toi:"Đồng dao Lúa ngô là cô đậu nành: mẹ vỗ tay theo nhịp, đọc vòng lại. Bài có tên nhiều thứ ăn được: đậu nành, dưa chuột, dưa gang, dưa hấu. Hỏi: 'Con đã ăn thứ nào rồi?'.", lyr:"Lúa ngô là cô đậu nành" },
    { chuyen:"Đi chợ theo danh sách",
      en:{v:2, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé nói tên quả thật to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại."},
      zh:{v:2, t:"Nếu bé muốn, xem lại 买东西 trước khi đi chợ."},
      special:"Săn từ ở chợ hoặc siêu thị",
      doi:"Mang danh sách vẽ hôm qua đi chợ hoặc siêu thị, nắm tay mẹ suốt buổi. Bé tìm từng quả trong danh sách, chỉ và nói tên tiếng Anh, rồi nói với mẹ 'I want apples, please!'. Về nhà, bé đánh dấu những quả đã mua và nói lại tên bằng tiếng Trung.",
      toi:"Hỏi bé: 'Hôm nay con tìm được quả nào đầu tiên?'. Ca dao 'Ăn quả nhớ kẻ trồng cây', bé đọc tiếp nửa câu sau.", lyr:"Ăn quả nhớ kẻ trồng cây" },
    { chuyen:"Bữa tráng miệng cả nhà",
      en:{v:1, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:0, t:"Mở 水果歌 một lần, bé giơ quả thật."},
      doi:"Sau bữa tối, bé chia quả tráng miệng cho mỗi người và hỏi bằng tiếng Anh 'Do you like bananas?' hoặc tiếng Trung '你喜欢吃香蕉吗？(nǐ xǐhuan chī xiāngjiāo ma?)'. Mọi người trả lời rồi nói 'Thank you!'.",
      toi:"Bé kể điều vui nhất trong 2 tuần: cây khế, chú sâu háu ăn hay salad trái cây. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ===================== VÒNG 108 – Bữa ăn, thích – không thích ===================== */
window.CT_DETAIL45[108] = {
  sub: "Bữa ăn, thích – không thích",
  vocab: {
    en: [["rice","🍚","cơm",false],["milk","🥛","sữa",false],["water","💧","nước",false],["broccoli","🥦","súp lơ xanh",false],["ice cream","🍦","kem",false],["carrot","🥕","cà rốt",false],["yummy","😋","ngon",false],["yucky","🤢","dở, không ngon",false],["I like","👍","con thích",false],["I don't like","👎","con không thích",false]],
    zh: [["米饭","mǐfàn","cơm","🍚"],["面条","miàntiáo","mì","🍜"],["牛奶","niúnǎi","sữa","🥛"],["水","shuǐ","nước","💧"],["吃","chī","ăn","🍴"],["喝","hē","uống","🥤"],["好吃","hǎochī","ngon","😋"],["不喜欢","bù xǐhuan","không thích","👎"]],
    en_phr: [["Do you like broccoli?","broccoli","🥦"],["Yes, I do! Yummy!","Yummy","😋"],["No, I don't. Yucky!","Yucky","🤢"],["I like rice and milk.","milk","🥛"]],
    zh_phr: [["我喜欢吃米饭。","米饭","wǒ xǐhuan chī mǐfàn.","Con thích ăn cơm.","🍚"],["我不喜欢吃面条。","不喜欢","wǒ bù xǐhuan chī miàntiáo.","Con không thích ăn mì.","👎"],["我要喝水。","水","wǒ yào hē shuǐ.","Con muốn uống nước.","💧"],["真好吃！","好吃","zhēn hǎochī!","Ngon quá!","😋"]],
    seq: [["🧼","wash your hands","洗手"],["🍚","eat rice","吃米饭"],["🥛","drink milk","喝牛奶"],["🍽️","clean up","收拾"]]
  },
  media: {
    en: [
      {t:"Do You Like Broccoli Ice Cream?",u:"https://www.youtube.com/watch?v=frN3nvhIHUk",kind:"song_action",min:3,ch:"Super Simple Songs - Kids Songs"},
      {t:"Salad Song for Kids",u:"https://www.youtube.com/watch?v=yd4VLlVlWUU",kind:"song_action",ch:"Maple Leaf Learning"},
      {t:"Guess the Fruit – Shadow Game and Song (ôn)",u:"https://www.youtube.com/watch?v=D5jpFhg7OW4",kind:"game",min:3.3,ch:"Dream English Kids"}
    ],
    zh: [
      {t:"主食歌 Food Song – Bài hát món chính",u:"https://www.youtube.com/watch?v=edx08qiDUcs",kind:"song_action",min:0.7,ch:"Cool Panda Chinese Learning"},
      {t:"家 爸爸妈妈爷爷奶奶 中国菜 – Bữa cơm cùng ông bà (xem đoạn đầu 5 phút)",u:"https://m.youtube.com/watch?pp=0gcJCfcAhR29_xXO&v=A_CYyGrrZZY",kind:"lesson",ch:"宝贝中文 Baobei Chinese"},
      {t:"水果歌 Fruit Song (ôn)",u:"https://www.youtube.com/watch?v=gfyvYYIij0g",kind:"song_action",min:0.8,ch:"Cool Panda Chinese Learning"}
    ]
  },
  weeks: [
    {title:"Bữa cơm nhà mình (Tuần Khám phá)", tale:{t:"Kiến và Châu Chấu",id:"kien_va_chau_chau"},
     toi_vi:[{t:"Câu đố củ cà rốt",type:"cau_do",lyr:"Củ gì da cam\nThịt lại giòn giòn\nĂn thì ngon lắm?"},{t:"Câu đố cái thìa",type:"cau_do",lyr:"Tôi thường làm bạn\nVới em bé thôi\nKhi ăn cầm tôi\nDễ hơn cầm đũa\nLà cái gì?"},{t:"Anh đi anh nhớ quê nhà",type:"ca_dao",lyr:"Anh đi anh nhớ quê nhà\nNhớ canh rau muống nhớ cà dầm tương."}]},
    {title:"Món nào ngon nhất? (Tuần Thử thách)", tale:{t:"Thạch Sanh (chỉ phần niêu cơm thần)",id:"thach_sanh"},
     toi_vi:[{t:"Thằng Bờm có cái quạt mo",type:"dong_dao",lyr:"Thằng Bờm có cái quạt mo\nPhú ông xin đổi ba bò chín trâu\nBờm rằng Bờm chẳng lấy trâu\nPhú ông xin đổi một xâu cá mè\nBờm rằng Bờm chẳng lấy mè\nPhú ông xin đổi một bè gỗ lim\nBờm rằng Bờm chẳng lấy lim\nPhú ông xin đổi con chim đồi mồi\nBờm rằng Bờm chẳng lấy mồi\nPhú ông xin đổi nắm xôi Bờm cười"},{t:"Lạy trời mưa xuống",type:"dong_dao",lyr:"Lạy trời mưa xuống\nLấy nước tôi uống\nLấy ruộng tôi cày\nLấy đầy bát cơm\nLấy rơm đun bếp\nLạy ông nắng lên\nCho trẻ con chơi\nCho già bắt rận\nCho tôi đi cày"},{t:"Bầu ơi thương lấy bí cùng",type:"ca_dao",lyr:"Bầu ơi thương lấy bí cùng\nTuy rằng khác giống nhưng chung một giàn"}],
     book_vi:{t:"Kho tàng truyện cổ tích Việt Nam (5 tập)",author:"Nguyễn Đổng Chi (sưu tầm, biên soạn)",publisher:"NXB Trẻ"}}
  ],
  obs: [["en","Trả lời “Yes, I do / No, I don't” khi được hỏi “Do you like…?”"],["en","Gọi đúng rice, milk, water"],["zh","Nói câu 我喜欢吃… và 我不喜欢…"],["zh","Mời người thân 吃饭 trước bữa ăn"],["vi","Kể lại chuyện Kiến và Châu Chấu"],["td","Xếp món ăn vào cột thích – không thích rồi đếm"],["xh","Hỏi người khác thích món gì và lắng nghe"],["xh","Chia đồ ăn cho người khác như bạn Kiến"]],
  days: [
    { chuyen:"Thích hay không thích?",
      en:{v:0, t:"Lần 1 – ngón cái lên, ngón cái xuống. Mở qua YouTube Kids, tắt tự phát. Bài hỏi bé có thích những món ghép lạ (như súp lơ trộn kem) không. Mỗi câu hỏi, mẹ dừng lại, bé giơ ngón cái lên (thích) hoặc xuống (không thích), rồi bật tiếp xem ca sĩ trả lời gì.", b:"Do you like broccoli ice cream?"},
      zh:{v:0, t:"Lần 1 – món chính. Bài chưa đến 1 phút, mở 2–3 lần. Nghe 米饭 (mǐfàn – cơm), bé chỉ vào bát cơm (thật hoặc tranh); nghe 面条 (miàntiáo – mì), làm động tác gắp mì sì sụp.", b:"米饭！面条！(mǐfàn! miàntiáo!)"},
      words:{en:[3,4,6,7],zh:[0,1,6]},
      doi:"Thí nghiệm nếm vị: mẹ chuẩn bị 4 thìa nhỏ: một chút đường (ngọt), một lát chanh (chua), một chút muối (mặn), một miếng dưa chuột (nhạt, mát). Bé nếm từng thứ, làm mặt và nói 'Yummy!' hoặc 'Yucky!'. Mẹ nói tên vị bằng tiếng Việt. Uống nước sau mỗi lần nếm.",
      ob:"Ông bà cho bé nếm một chút đường, một lát chanh, hỏi bé thấy thế nào.",
      toi:"Kể chuyện Kiến và Châu Chấu: suốt mùa hè, Kiến chăm chỉ tha thức ăn về tổ, còn Châu Chấu chỉ ca hát rong chơi. Châu Chấu cười Kiến: 'Trời đẹp thế, đi chơi đi!'. Mẹ dừng hỏi: 'Kiến tha những gì về tổ? Con đoán xem.'" },
    { chuyen:"Bát salad của bé",
      en:{v:1, t:"Lần 1 – làm salad. Mẹ để sẵn rau củ thật (hoặc đồ chơi) và một cái bát. Mỗi khi bài hát gọi một loại rau (carrot, tomato, lettuce, cucumber), bé bỏ đúng thứ đó vào bát. Hết bài, mẹ hỏi 'How many carrots?'.", b:"Put the carrot in the bowl."},
      zh:{v:1, t:"Lần 1 – bữa cơm cùng ông bà. Video dài, mẹ chỉ cho xem đoạn đầu 5 phút. Mỗi khi nghe 吃 (chī – ăn), bé làm động tác ăn; nghe 米饭, bé chỉ bát cơm; nghe 爷爷, 奶奶, bé chỉ ảnh ông bà.", b:"吃饭了！(chī fàn le!)"},
      words:{en:[5,8,6],zh:[4,0,1]},
      doi:"Khám phá mâm cơm: trước bữa tối, bé đếm xem trên bàn có mấy món, mấy bát, mấy đôi đũa. Bé chia các món thành 2 nhóm: món có rau và món không có rau. Hỏi: 'Nhóm nào nhiều hơn?'. Mẹ xới cơm, bé cầm bát và nói 'rice', '米饭'.",
      ob:"Ông bà cho bé đếm bát, đũa trên mâm cơm và gọi tên món cơm.",
      toi:"Câu đố: 'Củ gì da cam / Thịt lại giòn giòn / Ăn thì ngon lắm?'. Bé đoán xong, nếu có cà rốt, mẹ cho bé cầm một củ và nói 'carrot'; mẹ cắn thử một miếng cho bé nghe tiếng 'giòn giòn'.", lyr:"Câu đố củ cà rốt" },
    { chuyen:"Yes, I do! No, I don't!",
      en:{v:0, t:"Lần 2 – trả lời bằng câu. Mẹ dừng sau mỗi câu hỏi, bé trả lời bằng câu trong bài: 'Yes, I do!' (thích) hoặc 'No, I don't!' (không thích), kèm ngón cái. Sau đó mẹ hỏi về món thật: 'Do you like rice?'.", b:"Yes, I do! / No, I don't!"},
      zh:{v:0, t:"Lần 2 – thích và không thích. Mẹ dừng sau mỗi món, hỏi 你喜欢吗？(nǐ xǐhuan ma – con thích không?). Bé trả lời 喜欢 (xǐhuan – thích) và giơ ngón cái lên, hoặc 不喜欢 (bù xǐhuan – không thích) và giơ ngón cái xuống.", b:"你喜欢吃面条吗？(nǐ xǐhuan chī miàntiáo ma?)"},
      words:{en:[8,9,0,6,7],zh:[0,1,7]},
      doi:"Biểu đồ 'Con thích – con không thích': mẹ kẻ 2 cột trên giấy: ngón cái lên và ngón cái xuống. Bé vẽ hoặc dán tranh 6 món quen (cơm, mì, rau, cá, sữa, trứng) vào đúng cột. Đếm xem cột nào nhiều hơn. Bé nói 'I like rice. I don't like…'.",
      ob:"Ông bà hỏi bé thích ăn món gì, không thích món gì, và lắng nghe.",
      toi:"Kể tiếp Kiến và Châu Chấu: mùa đông tới, gió lạnh, Châu Chấu đói và rét, gõ cửa nhà Kiến. Kiến mở cửa, cho Châu Chấu vào sưởi ấm, chia thức ăn và nhắc bạn năm sau cùng chuẩn bị. Hỏi: 'Kiến tốt bụng ở chỗ nào? Con có chia đồ ăn cho bạn không?'." },
    { chuyen:"Sữa và nước",
      en:{v:1, t:"Lần 2 – bé nói trước. Mẹ dừng trước khi bài gọi rau, bé đoán và nói trước tên rau bằng tiếng Anh. Rồi chơi đếm: mẹ hỏi 'How many tomatoes?', bé đếm rau trong bát.", b:"I like carrots!"},
      zh:{v:1, t:"Lần 2 – đoạn tiếp theo (tối đa 5 phút). Bé bày bếp đồ chơi 'nấu' cho ông bà. Khi nghe tên món trong bài, bé 'nấu' món đó rồi mời: 爷爷，吃饭！奶奶，吃饭！", b:"奶奶，吃饭！(nǎinai, chī fàn!)"},
      words:{en:[5,8,6],zh:[4,0,6]},
      doi:"Thí nghiệm sữa và nước: rót 2 cốc nhựa: một cốc sữa, một cốc nước. Bé nhìn, ngửi, nếm rồi so sánh: cái nào màu trắng, cái nào trong suốt? Cái nào có vị? Bé nói 'This is milk. This is water.' và '牛奶 (niúnǎi), 水 (shuǐ)'.",
      ob:"Ông bà rót cho bé một cốc sữa, một cốc nước, hỏi bé cốc nào là sữa.",
      toi:"Câu đố: 'Tôi thường làm bạn / Với em bé thôi / Khi ăn cầm tôi / Dễ hơn cầm đũa / Là cái gì?'. Bé đoán xong, mẹ dạy: spoon (cái thìa) – 勺子 (sháozi). Bé tập cầm thìa xúc 'cơm' cho gấu bông.", lyr:"Câu đố cái thìa" },
    { chuyen:"Mì khô, mì mềm",
      en:{v:0, t:"Lần 3 – bé hỏi trước. Mẹ dừng trước câu hỏi, bé hỏi mẹ 'Do you like…?' với một món ghép vui, ví dụ 'Do you like rice ice cream?'. Mẹ trả lời 'No, I don't! Yucky!', hai mẹ con cùng cười.", b:"Do you like rice ice cream?"},
      zh:{v:0, t:"Lần 3 – bé nói trước. Mẹ dừng trước mỗi món, bé nói trước 米饭 hoặc 面条. Rồi bé nói câu dài: 我喜欢吃米饭 (wǒ xǐhuan chī mǐfàn).", b:"我喜欢吃米饭。(wǒ xǐhuan chī mǐfàn.)"},
      words:{en:[3,4,6,7],zh:[0,1,4]},
      doi:"Thí nghiệm 'nước làm mềm': đặt một vắt mì khô vào bát. Mẹ rót nước nóng (mẹ làm, bé đứng xa). Chờ 3 phút, bé so sánh mì lúc cứng và lúc mềm bằng mắt; khi nước nguội hẳn mới cho bé sờ thử. Bé nói '面条 mềm rồi!'. Sau đó cả nhà ăn mì.",
      ob:"Ông bà rót nước nóng ngâm mì, cho bé nhìn mì cứng chuyển sang mềm.",
      toi:"Ca dao 'Anh đi anh nhớ quê nhà / Nhớ canh rau muống nhớ cà dầm tương'. Mẹ kể món ăn ở quê mà mẹ nhớ nhất. Hỏi: 'Nếu đi xa, con sẽ nhớ món gì của nhà mình?'.", lyr:"Anh đi anh nhớ quê nhà" },
    { chuyen:"Nhà hàng trong pháo đài",
      en:{v:0, t:"Thử thách lớn của tuần: bé chơi chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Sau đó bé chọn 1 video thích nhất tuần để xem lại, xem xong mở 'nhà hàng'."},
      zh:{v:0, t:"Nếu bé muốn, xem lại 主食歌 trong pháo đài."},
      special:"Xây pháo đài chăn gối, kể chuyện trong pháo đài",
      doi:"Dựng pháo đài chăn gối, trải khăn làm bàn ăn. Bé làm người phục vụ, mời mọi người vào 'nhà hàng' và hỏi 'Do you like rice? Do you like milk?'. Bé mang bữa phụ nhẹ (bánh, sữa, quả) vào. Trong pháo đài, mẹ kể lại chuyện Kiến và Châu Chấu; bé làm Kiến mời Châu Chấu (gấu bông) vào ăn.",
      toi:"Hỏi bé: 'Hôm nay nhà hàng của con bán món gì ngon nhất?'. Đọc lại câu đố cái thìa, bé đố bố.", lyr:"Câu đố cái thìa" },
    { chuyen:"Mời cơm ba thứ tiếng",
      en:{v:1, t:"Ôn nhẹ: bé chọn video thích nhất tuần, xem 1 lần, rồi chơi lại 1 trò bé thích trên web."},
      zh:{v:1, t:"Mở đoạn đầu bài học bữa cơm cùng ông bà (tối đa 5 phút), bé mời ông bà theo."},
      doi:"Ăn cơm cùng ông bà hoặc cả nhà: bé mời cơm bằng 3 thứ tiếng: 'Mời cả nhà ăn cơm – Let's eat! – 吃饭了!'. Trong bữa, bé hỏi mỗi người 1 câu 'Do you like…?' về một món trên mâm.",
      ob:"Ông bà nghe bé mời cơm, trả lời khi bé hỏi 'Ông có thích món này không?'.",
      toi:"Kể lại Kiến và Châu Chấu, bé làm Kiến tha 'thức ăn' (gối nhỏ) về tổ, mẹ làm Châu Chấu hát rong chơi rồi gõ cửa xin vào." },
    { chuyen:"Bóng quả – thích hay không?",
      en:{v:2, t:"Thử thách đoán bóng (bé đã chơi ở vòng trước, nay khó hơn): mẹ dừng ở mỗi bóng, bé phải nói cả câu 'It's a…' và thêm 'I like it!' hoặc 'I don't like it!'. Mỗi câu đủ được 1 sao.", b:"It's a strawberry. I like it!"},
      zh:{v:2, t:"Thử thách thích – không thích: mở 水果歌, mẹ dừng ở mỗi quả, bé nói 喜欢 hoặc 不喜欢 trước, rồi nói cả câu 我喜欢吃… hoặc 我不喜欢吃…. Câu đủ được 1 sao.", b:"我不喜欢吃橙子。(wǒ bù xǐhuan chī chéngzi.)"},
      words:{en:[8,9,6],zh:[7,4,6]},
      doi:"Đố vui món ăn tính sao: mẹ hỏi 5 câu: 'Buổi sáng con uống gì?' (milk), 'Khát thì uống gì?' (water), 'Bữa trưa ăn gì?' (rice), 'Món gì màu cam, giòn giòn?' (carrot), 'Món gì lạnh và ngọt?' (ice cream). Trả lời bằng tiếng Việt được 1 sao, bằng tiếng Anh hoặc tiếng Trung được 2 sao.",
      ob:"Ông bà hỏi bé sáng nay uống gì, trưa nay ăn gì.",
      toi:"Kể chuyện Thạch Sanh (chỉ phần niêu cơm thần, kể ngắn): chàng Thạch Sanh hiền lành, khỏe mạnh, hay giúp người. Chàng có một niêu cơm nhỏ xíu. Một lần có rất nhiều người lính đói đến, ai cũng cười: niêu bé thế ăn sao đủ? Nhưng niêu cơm ăn hết lại đầy, ăn mãi không hết, cả đoàn no nê. Hỏi: 'Nếu con có niêu cơm thần, con mời ai ăn?'." },
    { chuyen:"Ai trả lời trước?",
      en:{v:0, t:"Thử thách ai nhanh: mẹ dừng sau mỗi câu hỏi, mẹ và bé thi trả lời trước 'Yes, I do!' hoặc 'No, I don't!' kèm ngón cái. Ai trả lời trước được 1 sao. Rồi đổi: bé đặt câu hỏi cho mẹ.", b:"Quick! Yes or no?"},
      zh:{v:0, t:"Thử thách chuyển ngữ: mẹ nói 'rice', bé nói 米饭; 'noodles' – 面条; 'milk' – 牛奶; 'water' – 水. Mở bài để kiểm tra 2 món đầu. Mỗi từ đúng được 1 sao.", b:"米饭，面条，牛奶，水。(mǐfàn, miàntiáo, niúnǎi, shuǐ.)"},
      words:{en:[0,1,2,3,4],zh:[0,1,2,3]},
      doi:"Thử thách dọn mâm nhanh: mẹ đếm đến 10 bằng tiếng Trung, bé đặt đủ bát, thìa, cốc nhựa cho mỗi người. Làm kịp được 3 sao. Khi đặt cốc, bé hỏi từng người 'Milk or water?'.",
      ob:"Ông bà đếm đến 10, bé đặt bát, thìa cho mỗi người thật nhanh.",
      toi:"Đồng dao Thằng Bờm có cái quạt mo: mẹ đọc câu 'Phú ông xin đổi…', bé đáp 'Bờm rằng Bờm chẳng lấy…'. Đến câu cuối 'nắm xôi Bờm cười', cả hai cười to. Hỏi: 'Bờm không thích gì? Bờm thích gì?' – giống 'I don't like…', 'I like…'.", lyr:"Thằng Bờm có cái quạt mo" },
    { chuyen:"Bịt mắt đoán món",
      en:{v:1, t:"Lần 3 – câu dài hơn. Mẹ dừng sau mỗi loại rau, bé nói cả câu 'I like carrots.' hoặc 'I don't like tomatoes.'. Thi xem ai nói được nhiều câu hơn trong một bài.", b:"I don't like tomatoes."},
      zh:{v:1, t:"Lần 3 – xem lại đoạn bé thích (tối đa 5 phút). Sau đó chơi 'mời cơm nhanh': mẹ chỉ vào ảnh ai, bé mời người đó bằng tiếng Trung thật nhanh: 爸爸，吃饭！妈妈，吃饭！爷爷，吃饭！ Mời đúng 4 người được 2 sao.", b:"爸爸，吃饭！(bàba, chī fàn!)"},
      words:{en:[5,8,9],zh:[4,0,6]},
      doi:"Thi 'Ai đoán món giỏi': bịt mắt bé bằng khăn mềm, mẹ đưa từng miếng nhỏ (cơm, chuối, dưa chuột, phô mai) để bé ngửi rồi nếm. Bé đoán tên món và nói 'Yummy!' hoặc 'Yucky!'. Đoán đúng 3 món được 3 sao. Đổi vai cho mẹ đoán.",
      ob:"Ông bà bịt mắt bé bằng khăn mềm, cho bé nếm miếng nhỏ và đoán món.",
      toi:"Đồng dao Lạy trời mưa xuống: mẹ rung các ngón tay như mưa rơi, đến 'lấy đầy bát cơm' thì làm động tác bưng bát. Hỏi: 'Vì sao có mưa thì mới có bát cơm?' – mưa tưới ruộng, lúa thành gạo, gạo thành cơm.", lyr:"Lạy trời mưa xuống" },
    { chuyen:"Thực đơn của bé",
      en:{v:2, t:"Thử thách chỉ nghe tiếng: mẹ úp điện thoại, bé chỉ nghe bài đoán quả. Nghe tên quả nào, bé chạy lấy đúng quả thật hoặc tranh quả đó. Đúng 4 quả được 3 sao.", b:"Listen! Which fruit?"},
      zh:{v:2, t:"Thử thách câu hỏi: bé làm người hỏi 你喜欢吃什么？(nǐ xǐhuan chī shénme – mẹ thích ăn gì?), mẹ trả lời. Mở 水果歌 một lần, đến mỗi quả bé hỏi mẹ 你喜欢吗？", b:"你喜欢吃什么？(nǐ xǐhuan chī shénme?)"},
      words:{en:[8,9,6],zh:[4,7,6]},
      doi:"Thực đơn của bé: bé chọn thực đơn bữa tối Chủ nhật gồm 1 món cơm hoặc mì, 1 món rau, 1 đồ uống. Mẹ viết, bé vẽ. Bé đọc thực đơn: 'Rice, carrots, water!' và tiếng Trung '米饭，水'. Mẹ hứa làm theo nếu được.",
      ob:"Ông bà cùng bé chọn món cho bữa tối Chủ nhật.",
      toi:"Ca dao 'Bầu ơi thương lấy bí cùng / Tuy rằng khác giống nhưng chung một giàn'. Mẹ cho bé xem quả bầu, quả bí (thật hoặc tranh). Hỏi: 'Bầu và bí có giống nhau không? Con và bạn thích món khác nhau nhưng vẫn ngồi ăn cùng nhau được không?'.", lyr:"Bầu ơi thương lấy bí cùng" },
    { chuyen:"Bé hỏi cả nhà",
      en:{v:0, t:"Thử thách câu hỏi: bé làm người hỏi cả nhà 'Do you like…?' với 4 món, mỗi người trả lời 'Yes, I do!' hoặc 'No, I don't!'. Mở bài một lần để ôn trước khi hỏi.", b:"Do you like carrots?"},
      zh:{v:0, t:"Thử thách tự nói: bé nói 3 câu: 我喜欢吃米饭。我不喜欢吃…。我要喝水。 Mở 主食歌 một lần để ôn.", b:"我要喝水。(wǒ yào hē shuǐ.)"},
      words:{en:[8,9,0,1,2],zh:[0,7,5,3]},
      doi:"Chuẩn bị hoá trang cho mai: bé chọn làm đầu bếp (mẹ làm mũ giấy, bé đeo tạp dề), chú sâu háu ăn (áo xanh, 'râu' bằng que giấy) hoặc một món ăn bé thích. Bé tập nói 'I'm a chef! Do you like rice?'.",
      ob:"Ông bà giúp bé làm mũ đầu bếp bằng giấy để mai hoá trang.",
      toi:"Kể lại niêu cơm thần của Thạch Sanh: bé dùng một cái bát nhỏ làm 'niêu', xúc 'cơm' mời từng thú bông, đếm xem mời được mấy bạn mà niêu vẫn đầy." },
    { chuyen:"Bé làm đầu bếp",
      en:{v:1, t:"Thử thách lớn: chuỗi 3 trò trên web, mỗi trò xong mẹ tô 1 sao (tối đa 3). Tuần này bé nói từ thật to trước khi chạm. Sau đó bé chọn 1 video thích nhất trong 2 tuần để xem lại trong trang phục đầu bếp."},
      zh:{v:0, t:"Nếu bé muốn, xem lại 主食歌 rồi mở 'nhà hàng'."},
      special:"Ngày hoá trang: bé đóng vai nhân vật trong video",
      doi:"Bé hoá trang thành đầu bếp hoặc chú sâu háu ăn. Đầu bếp mở 'nhà hàng', mời khách: 'Do you like rice? 你喜欢吃米饭吗？' và mang 'món ăn' đồ chơi ra. Chú sâu háu ăn bò quanh nhà 'ăn' các quả bìa và đếm. Mẹ quay clip 1 phút gửi ông bà.",
      toi:"Hỏi bé: 'Làm đầu bếp có vui không? Khách thích món gì?'. Đọc lại Thằng Bờm, bé đáp phần 'Bờm rằng…'.", lyr:"Thằng Bờm có cái quạt mo" },
    { chuyen:"Bữa tối theo thực đơn của bé",
      en:{v:0, t:"Ôn nhẹ, không bài mới: bé chọn video thích nhất trong 2 tuần, xem 1 lần, chơi lại 1 trò bé thích."},
      zh:{v:2, t:"Mở 水果歌 một lần trước bữa tráng miệng."},
      doi:"Bữa tối theo thực đơn bé chọn hôm thứ Sáu: bé mời cả nhà bằng 3 thứ tiếng, rồi hỏi mỗi người 'Yummy?' và '好吃吗？(hǎochī ma?)'. Mọi người khen món, bé nói 'Thank you! 谢谢!'.",
      toi:"Bé kể điều vui nhất trong 2 tuần: Kiến và Châu Chấu, niêu cơm thần hay nhà hàng trong pháo đài. Hát ru nhẹ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).", diary:true }
  ]
};

/* ---- gd6b ---- */
// Nội dung chi tiết 4–5 tuổi, vòng 109–120 (chủ đề 7–12). Sinh từ gen6b/.
window.CT_DETAIL45 = window.CT_DETAIL45 || {};
window.CT_DETAIL45[109] = {
 "sub": "Chó, mèo, cá, chim",
 "vocab": {
  "en": [
   [
    "dog",
    "🐶",
    "con chó",
    false
   ],
   [
    "cat",
    "🐱",
    "con mèo",
    false
   ],
   [
    "fish",
    "🐟",
    "con cá",
    false
   ],
   [
    "bird",
    "🐦",
    "con chim",
    false
   ],
   [
    "rabbit",
    "🐰",
    "con thỏ",
    false
   ],
   [
    "pet",
    "🐾",
    "thú cưng",
    false
   ],
   [
    "swim",
    "🏊",
    "bơi",
    true
   ],
   [
    "fly",
    "🕊️",
    "bay",
    true
   ],
   [
    "feed",
    "🥣",
    "cho ăn",
    true
   ]
  ],
  "zh": [
   [
    "狗",
    "gǒu",
    "con chó",
    "🐶"
   ],
   [
    "猫",
    "māo",
    "con mèo",
    "🐱"
   ],
   [
    "鱼",
    "yú",
    "con cá",
    "🐟"
   ],
   [
    "鸟",
    "niǎo",
    "con chim",
    "🐦"
   ],
   [
    "兔子",
    "tùzi",
    "con thỏ",
    "🐰"
   ],
   [
    "喜欢",
    "xǐhuan",
    "thích",
    "❤️"
   ],
   [
    "游",
    "yóu",
    "bơi",
    "🏊"
   ]
  ],
  "en_phr": [
   [
    "I have a dog.",
    "dog",
    "🐶"
   ],
   [
    "The cat says meow.",
    "meow",
    "🐱"
   ],
   [
    "Fish can swim.",
    "swim",
    "🐟"
   ],
   [
    "Birds can fly.",
    "fly",
    "🐦"
   ]
  ],
  "zh_phr": [
   [
    "我有一只狗。",
    "狗",
    "wǒ yǒu yì zhī gǒu",
    "con có một con chó",
    "🐶"
   ],
   [
    "小猫喵喵叫。",
    "喵喵",
    "xiǎo māo miāomiāo jiào",
    "mèo con kêu meo meo",
    "🐱"
   ],
   [
    "鱼在水里游。",
    "游",
    "yú zài shuǐ lǐ yóu",
    "cá bơi trong nước",
    "🐟"
   ]
  ],
  "seq": [
   [
    "🐶",
    "wake up, puppy",
    "小狗起床"
   ],
   [
    "🥣",
    "eat breakfast",
    "吃早饭"
   ],
   [
    "🚶",
    "go for a walk",
    "去散步"
   ],
   [
    "😴",
    "go to sleep",
    "睡觉"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "I Have A Pet – bài hát thú cưng (khoảng 2–3 phút)",
    "u": "https://www.youtube.com/watch?v=pWepfJ-8XU0",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Animals – What Is It? Trò đoán con vật của thầy Matt",
    "u": "https://www.youtube.com/watch?v=BfnZ1htPrps",
    "kind": "game",
    "ch": "Dream English Kids"
   },
   {
    "t": "Patience, Patches! – truyện tranh đọc to về chú chó con (xem đoạn đầu 5 phút nếu dài)",
    "u": "https://www.youtube.com/watch?v=PGBJhbhovYg",
    "kind": "story",
    "ch": "Brightly Storytime"
   }
  ],
  "zh": [
   {
    "t": "10 thú cưng bằng tiếng Trung (AliMiMi) – chỉ xem 5 con đầu, khoảng 4 phút",
    "u": "https://www.youtube.com/watch?v=wKLVEPt3yGM",
    "kind": "lesson",
    "ch": "Learn Mandarin Chinese 中文 with AliMiMi"
   },
   {
    "t": "动物猜猜猜 – bài hát đoán con vật qua tiếng kêu",
    "u": "https://www.youtube.com/watch?v=Dhw0fBiRfIY",
    "kind": "song_action",
    "ch": "貝樂虎 BabyTiger (贝乐虎儿歌)"
   },
   {
    "t": "Tìm bài: một tập ngắn khoảng 5 phút có con vật nuôi trên kênh 小猪佩奇 Peppa tiếng Trung (không chọn bản tổng hợp dài)",
    "u": "https://www.youtube.com/channel/UCRi0sw4PDw-C2C7fS9hrx5Q",
    "kind": "channel",
    "ch": "小猪佩奇 中文官方 Peppa Pig (Mandarin official)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Ca nhạc: hát cùng thú cưng",
   "toi_vi": [
    {
     "t": "Câu đố con chó",
     "type": "cau_do",
     "lyr": "Thường nằm đầu hè\nGiữ cho nhà chủ\nNgười lạ nó sủa\nNgười quen nó mừng\nLà con gì?"
    },
    {
     "t": "Câu đố con mèo",
     "type": "cau_do",
     "lyr": "Con gì hai mắt trong veo\nThích nằm sưởi nắng, thích trèo cây cau"
    },
    {
     "t": "Mèo và ngựa",
     "type": "ve",
     "lyr": "Con mèo nằm bếp co ro\nÍt ăn nhiều ngủ ít lo, lười làm\nCon ngựa đi Bắc về Nam\nNhiều ăn ít ngủ nhiều làm nhiều lo"
    }
   ],
   "book_vi": {
    "t": "Truyện đồng thoại Võ Quảng (có tranh màu)",
    "author": "Võ Quảng",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần 2 – Kể chuyện: chú chó con biết chờ",
   "toi_vi": [
    {
     "t": "Con gà cục tác lá chanh",
     "type": "ca_dao",
     "lyr": "Con gà cục tác lá chanh\nCon lợn ủn ỉn mua hành cho tôi\nCon chó khóc đứng khóc ngồi\nBà ơi đi chợ mua tôi đồng riềng"
    },
    {
     "t": "Câu đố con thỏ",
     "type": "cau_do",
     "lyr": "Con gì đuôi ngắn tai dài\nMắt hồng lông mượt\nCó tài chạy nhanh\nLà con gì?"
    }
   ],
   "book_vi": {
    "t": "Bồ nông có hiếu (phiên bản sách tranh)",
    "author": "Phong Thu",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được dog, cat, fish, bird khi mẹ chỉ tranh"
  ],
  [
   "en",
   "Nói được câu “I have a …” và tự điền tên một con vật"
  ],
  [
   "zh",
   "Nói được 狗 gǒu, 猫 māo, 鱼 yú, 鸟 niǎo"
  ],
  [
   "zh",
   "Nói được câu 这是… (đây là…) khi chỉ vào một con vật"
  ],
  [
   "vi",
   "Đọc theo mẹ được một câu đố về con chó hoặc con mèo và đoán đúng"
  ],
  [
   "td",
   "Xếp đúng thứ tự 3–4 việc chăm thú cưng: dậy, ăn, đi dạo, ngủ"
  ],
  [
   "xh",
   "Biết hỏi người lớn trước khi chạm vào con vật, vuốt nhẹ tay"
  ],
  [
   "vd",
   "Bắt chước được dáng đi và tiếng kêu của chó, mèo, cá, chim"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Ca nhạc bắt đầu: làm quen bốn bạn thú cưng.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Mở bài trên YouTube Kids, tắt tự phát. Mẹ ngồi cạnh bé. Mỗi khi một con vật hiện ra, mẹ bấm dừng, chỉ vào hình và hỏi: “Con gì đây?”. Bé chỉ đúng là giỏi rồi, chưa cần nói tiếng Anh. Xem trọn 1 lượt rồi chuyển sang trò chơi.",
    "b": "Look! A dog!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Chỉ xem đến con vật thứ 5 rồi tắt. Khi video nói 狗, 猫, 鱼, 鸟, mẹ dừng lại 3 giây để bé nhìn kỹ và chỉ vào màn hình. Mẹ nhại lại từ theo video một lần, không cần nói đúng hết.",
    "b": "这是狗。(zhè shì gǒu)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Trốn tìm thú cưng (10 phút). Mẹ giấu 4 con thú bông hoặc 4 tranh in to bằng bàn tay (chó, mèo, cá, chim) quanh phòng khách. Bé tìm được con nào thì giơ lên, mẹ nói tên tiếng Anh, bé nhắc lại. Tìm đủ 4 con thì xếp thành hàng và cùng kêu: woof, meow.",
   "ob": "Ông bà giấu một con thú bông sau gối, bé tìm thấy thì ông bà hỏi: “Dog hay cat?”.",
   "toi": "Kể chuyện “Đeo nhạc cho mèo” (phần đầu). Mẹ kể bằng lời của mình: Nhà chuột sợ bác mèo lắm, vì mèo đi nhẹ như không. Một tối, cả họ chuột họp nhau dưới gầm tủ. Chuột Nhắt nghĩ ra cách: buộc một cái chuông nhỏ vào cổ mèo, mèo đi đến đâu chuông kêu leng keng đến đó. Cả họ vỗ tay khen hay. Mẹ dừng ở đây và hỏi: “Theo con, ai sẽ đi đeo chuông?”."
  },
  {
   "chuyen": "Đoán con vật qua hình bị che.",
   "en": {
    "v": 1,
    "t": "Lần 1 – đoán cùng mẹ. Đây là trò đoán: hình con vật hiện từ từ. Mẹ bấm dừng khi hình còn che một nửa, hỏi bé bằng tiếng Việt: “Con đoán là con gì?”. Bé nói tiếng Việt cũng được, rồi nghe thầy Matt nói tiếng Anh và nhắc theo một lần.",
    "b": "What is it? It's a cat!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – nghe tiếng kêu. Bài hát cho nghe tiếng con vật rồi mới hiện hình. Mỗi lần có tiếng kêu, mẹ dừng lại để bé hét tên con vật bằng tiếng Việt. Sau đó mẹ nói lại tên tiếng Trung theo video. Hôm qua con học dog, hôm nay con nghe 狗 gǒu nhé.",
    "b": "小狗汪汪叫。(xiǎo gǒu wāngwāng jiào)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     4
    ],
    "zh": [
     0,
     1,
     3,
     4
    ]
   },
   "doi": "Chuyên gia tiếng kêu (10 phút). Mẹ bày 4 tranh con vật trên sàn. Mẹ kêu “gâu gâu”, bé nhảy đến đứng cạnh tranh con chó và nói “dog”. Đổi vai: bé kêu, mẹ đoán. Thêm con thỏ: thỏ không kêu, nên bé nhảy hai chân bằng tay vẫy tai.",
   "ob": "Ông bà kêu tiếng một con vật, bé chạy lại chỉ tranh con vật đó.",
   "toi": "Đố vui dân gian. Mẹ đọc chậm câu đố “Câu đố con chó” 2 lần, mỗi dòng dừng một chút để bé nghĩ. Bé đoán xong, mẹ hỏi thêm: “Nhà mình hay nhà hàng xóm có con chó nào giữ nhà không?”. Cho bé tự đọc lại dòng cuối cùng với mẹ.",
   "lyr": "Câu đố con chó"
  },
  {
   "chuyen": "Hát và làm động tác như thú cưng.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Hôm nay đứng dậy xem. Mỗi con vật có một động tác cố định: dog thì hai tay làm chân chó vẫy, cat thì liếm tay như mèo rửa mặt, fish thì hai tay áp nhau lượn sóng, bird thì vỗ hai cánh tay. Khi mẹ dừng nhạc, bé đứng im như tượng.",
    "b": "Can you swim like a fish?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm theo. Dùng lại động tác giống hệt bài tiếng Anh: video nói 鱼 thì bé lượn tay như cá, nói 鸟 thì vỗ cánh. Mẹ làm cùng để bé thấy một con vật, hai tên gọi, cùng một động tác.",
    "b": "小鸟飞飞飞。(xiǎo niǎo fēi fēi fēi)"
   },
   "words": {
    "en": [
     2,
     3,
     6,
     7
    ],
    "zh": [
     2,
     3,
     6
    ]
   },
   "doi": "Nuôi cá giấy (12 phút). Mẹ vẽ và cắt 3 con cá to trên giấy bìa (kéo do mẹ cầm). Bé tô màu, rồi đặt cá vào “hồ” là một tờ giấy xanh trên sàn. Mẹ nói “Feed the fish!”, bé giả vờ rắc thức ăn bằng tay không. Mẹ nói “Swim!”, bé cầm cá lượn quanh hồ.",
   "ob": "Ông bà cắt một con cá giấy, bé tô màu rồi cầm cá bơi quanh bàn.",
   "toi": "Kể tiếp “Đeo nhạc cho mèo”. Nhắc lại nhanh đoạn hôm qua rồi kể: Chuông đã có, nhưng ai đi đeo? Chuột Cống bảo mình bận, Chuột Lắt bảo mình bé, Chuột Già bảo chân đau. Cuối cùng chẳng ai dám đi. Mẹ đóng vai mèo nằm ngủ, bé cầm chiếc khăn làm “chuông” rón rén bước lại gần. Nói chuyện với bé: “Nói thì dễ, làm mới khó con nhỉ?”."
  },
  {
   "chuyen": "Nói tên con vật trước thầy Matt.",
   "en": {
    "v": 1,
    "t": "Lần 2 – thi nói trước. Mẹ vẽ một bảng nhỏ trên giấy. Mỗi khi hình hiện ra, bé cố nói tên tiếng Anh trước khi thầy Matt nói: nói kịp được 1 sao. Nói tiếng Việt thì mẹ gợi âm đầu (“d…”) để bé nhớ ra.",
    "b": "It's a bird. Good job!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – đoán trước khi hiện hình. Nghe tiếng kêu, bé đoán ngay bằng tiếng Trung nếu nhớ (狗, 猫, 鸟), quên thì nói tiếng Việt rồi nghe video nhắc. Đếm xem hôm nay bé đoán đúng mấy con.",
    "b": "这是什么？(zhè shì shénme)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   "doi": "Nhảy đóng băng thú cưng (10 phút). Mẹ bật một bài nhạc vui bất kỳ không có hình. Bé nhảy tự do, mẹ tắt nhạc và gọi một tên tiếng Anh: “Cat!”, bé đứng im trong tư thế con mèo. Gọi thêm cả tiếng Trung: “鸟!”, bé đứng im vỗ cánh. Chơi 6–8 lượt.",
   "ob": "Ông bà vỗ tay rồi dừng, gọi “dog”, bé đứng im làm dáng con chó.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố con mèo”, nhấn vào chữ “trèo cây cau”. Bé đoán xong, mẹ và bé cùng làm động tác mèo trèo cây: hai tay bám, chân bước lên. Hỏi lại câu đố hôm thứ Ba để bé nhớ lại con chó."
  },
  {
   "chuyen": "Bé hát trước video.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Mẹ bấm dừng ngay trước khi mỗi con vật xuất hiện. Bé nói tên con vật tiếp theo trước video. Đến cuối bài, mẹ hỏi: “What pet do you like?”, bé trả lời “I have a …” với con vật bé thích nhất.",
    "b": "I have a cat. Meow!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – nói trước video. Xem lại 5 con đầu. Trước mỗi con, mẹ dừng và chỉ vào thú bông giống con đó; bé nói tên tiếng Trung trước, rồi bấm tiếp xem đúng không. Bé nói đúng cả 4 con thì thưởng một cái ôm thật chặt.",
    "b": "你喜欢猫吗？(nǐ xǐhuan māo ma)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3,
     5
    ]
   },
   "doi": "Đi thăm con vật thật (15 phút). Mẹ dẫn bé đi xem bể cá ở nhà hàng xóm, quán cà phê hoặc cửa hàng cá cảnh, hoặc ngắm chim trong công viên. Mẹ nắm tay bé suốt lúc đi đường. Chỉ đứng ngắm, không thò tay vào bể. Bé chỉ và nói “fish”, “bird”. Gặp chó mèo lạ thì đứng xa, chỉ chạm khi chủ con vật cho phép và mẹ ở bên.",
   "ob": "Ông bà dắt tay bé ra cửa ngắm chim, bé chỉ và nói “bird”.",
   "toi": "Đọc sách tranh. Mẹ chọn một truyện ngắn có con vật trong cuốn “Truyện đồng thoại Võ Quảng” của nhà văn Võ Quảng (NXB Kim Đồng). Đọc chậm, mỗi trang hỏi bé một câu: “Con vật này đang làm gì?”. Nếu chưa có sách, mẹ kể lại chuyện “Đeo nhạc cho mèo” và để bé nói câu cuối."
  },
  {
   "chuyen": "Thử thách lớn và buổi biểu diễn nhỏ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao trên giấy. Xong mỗi trò bé được tô 1 sao; nói to tên con vật trong lúc chơi được thêm sao vàng. Chơi xong, bé tự chọn 1 video yêu thích nhất tuần để xem lại và hát theo thật to.",
    "b": "You did it! Three stars!"
   },
   "zh": {
    "v": 1,
    "t": "Nếu còn sức: xem lại bài đoán tiếng kêu một lượt, bé là người đoán nhanh nhất nhà.",
    "b": "太棒了！(tài bàng le)"
   },
   "doi": "Buổi biểu diễn nhỏ (15 phút). Bé chọn 1 con thú bông làm bạn diễn. Tập 2 lần rồi diễn thật: bé giới thiệu “Hello! I have a dog. Woof!”, hát một đoạn “I Have A Pet” khoảng 1 phút, cuối cùng nói tiếng Trung “我有一只狗”. Mẹ quay clip bằng điện thoại, cả nhà vỗ tay. Mẹ lưu clip để gửi ông bà và để cuối vòng so sánh.",
   "ob": "Ông bà ngồi xem bé diễn, vỗ tay và hỏi lại bé tên con thú bông.",
   "toi": "Đồng dao vui. Mẹ đọc bài vè “Mèo và ngựa”, đọc chậm từng cặp câu. Hỏi bé: “Con mèo hay ngủ hay con ngựa hay làm?”. Bé làm mèo co ro nằm ngủ, rồi làm ngựa phi quanh giường. Đọc lại lần hai, bé đọc theo chữ cuối mỗi dòng.",
   "lyr": "Mèo và ngựa",
   "special": "Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip"
  },
  {
   "chuyen": "Ôn tuần: cả nhà đi gặp con vật thật.",
   "en": {
    "v": 0,
    "t": "Ôn: bé chọn xem lại một video bé thích nhất trong tuần (thường là bài hát thú cưng). Lần này bé làm “cô giáo”: bé làm động tác trước, mẹ làm theo. Sau đó chơi lại trò chơi web bé thích.",
    "b": "Which one do you like?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: xem lại 5 con đầu một lượt. Mẹ chỉ hỏi 3 con bé hay quên nhất, bé nói lại cùng video.",
    "b": "再见，小狗！(zàijiàn, xiǎo gǒu)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Việc thật cùng gia đình: cả nhà đi công viên hoặc chợ cá cảnh. Trên đường, ai thấy con vật trước thì nói tên tiếng Anh, bé nói thêm tiếng Trung. Bố mẹ luôn nắm tay bé khi qua đường và đứng xa chó lạ. Về nhà, bé kể cho ông bà hôm nay thấy những con gì.",
   "ob": "Ông bà cùng đi dạo, hỏi bé “Con gì kia?” mỗi khi gặp một con vật.",
   "toi": "Bé kể lại chuyện. Bé cầm thú bông con mèo và vài thú bông khác làm chuột, tự kể lại “Đeo nhạc cho mèo” theo trí nhớ, mẹ chỉ nhắc khi bé quên. Sau đó mẹ đố lại hai câu đố trong tuần, bé là người trả lời."
  },
  {
   "chuyen": "Tuần Kể chuyện: chú chó con phải học cách chờ.",
   "en": {
    "v": 2,
    "t": "Lần 1 – dừng và đoán. Truyện đọc to về chú chó con Patches. Xem khoảng 5 phút đầu. Mẹ dừng ở 3 chỗ: khi chó con xuất hiện, khi chó con phải chờ, và trước trang cuối. Mỗi lần hỏi: “Chuyện gì xảy ra tiếp?”. Bé đoán bằng tiếng Việt, mẹ khen mọi câu trả lời.",
    "b": "What happens next?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem truyện. Mẹ chọn một tập Peppa tiếng Trung khoảng 5 phút có con vật nuôi. Không hiểu hết cũng không sao: mẹ dừng mỗi khi thấy con vật, hỏi bé tên tiếng Trung, rồi đoán xem các nhân vật đang làm gì.",
    "b": "这是什么动物？(zhè shì shénme dòngwù)"
   },
   "words": {
    "en": [
     0,
     5,
     8
    ],
    "zh": [
     0,
     5
    ]
   },
   "doi": "Kể chuyện bằng tranh (12 phút). Mẹ gấp một tờ giấy A4 làm 3 ô. Bé vẽ (hoặc mẹ vẽ, bé tô) 3 cảnh của chú chó con: lúc đầu, lúc chờ, lúc cuối. Bé chỉ từng ô và kể lại, gặp từ dog, pet thì nói tiếng Anh.",
   "ob": "Ông bà nghe bé kể 3 ô tranh, hỏi “Rồi sao nữa?” sau mỗi ô.",
   "toi": "Kể chuyện “Tấm Cám” (phần đầu, bản nhẹ nhàng). Mẹ kể: Ngày xưa có cô Tấm hiền lành, chăm chỉ. Tấm có một người bạn nhỏ là chú cá bống sống dưới giếng. Mỗi ngày Tấm để dành cơm, gọi bống lên ăn, bống quẫy đuôi mừng rỡ. Hỏi bé: “Nếu con có một chú cá, con cho cá ăn gì?”. Dừng ở đây, mai kể tiếp."
  },
  {
   "chuyen": "Đố con vật bằng cả câu.",
   "en": {
    "v": 1,
    "t": "Lần 3 – nói cả câu. Xem lại trò đoán con vật, nhưng lần này bé phải nói cả câu “It's a …” chứ không chỉ một từ. Đoán xong mỗi con, mẹ hỏi thêm: “Tiếng Trung là gì?”, bé chuyển sang 狗, 猫, 鱼, 鸟.",
    "b": "Is it a fish? Yes, it is!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – nói câu dài. Xem lại 5 con đầu. Sau mỗi con, bé nói câu 我喜欢 + tên con vật (con thích…). Con nào bé không thích thì lắc đầu nói 不喜欢 (bù xǐhuan).",
    "b": "我喜欢小猫。(wǒ xǐhuan xiǎo māo)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3,
     5
    ]
   },
   "doi": "Cửa hàng thú cưng (12 phút). Bé làm người bán, bày thú bông và tranh con vật trên ghế. Mẹ làm khách: “A cat, please.” Bé đưa đúng con mèo và nói “Here you are.” Đổi vai, lần này mẹ mua bằng tiếng Trung: “我要猫”. Tiền là những mẩu giấy to bằng lòng bàn tay.",
   "ob": "Ông bà làm khách mua thú bông, bé bán và nói tên con vật.",
   "toi": "Ca dao vui. Mẹ đọc bài “Con gà cục tác lá chanh”, mỗi con vật trong bài thì bé làm tiếng kêu: gà cục tác, lợn ủn ỉn, chó gâu gâu. Hỏi bé: “Bài này có con chó đi chợ không?”. Đọc lần hai, bé đọc tiếp những chữ mẹ bỏ trống.",
   "lyr": "Con gà cục tác lá chanh"
  },
  {
   "chuyen": "Đóng vai chú chó con.",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại truyện chó con. Bé làm chú chó, mẹ làm người kể. Mỗi khi mẹ dừng video, bé diễn đúng điều chú chó đang làm: vẫy đuôi, nằm chờ, chạy đến. Gặp chữ dog hay pet, bé nói to theo video.",
    "b": "Wait, puppy, wait!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – gọi tên những gì thấy. Xem lại tập Peppa đã chọn. Bé là “người dẫn đường”: mỗi khi mẹ dừng, bé chỉ một thứ và nói 这是… với từ đã biết (狗, 猫, 鱼, 鸟, 兔子).",
    "b": "这是兔子。(zhè shì tùzi)"
   },
   "words": {
    "en": [
     0,
     5,
     8
    ],
    "zh": [
     0,
     4
    ]
   },
   "doi": "Chăm thú cưng giả (12 phút). Lấy một hộp giấy to làm nhà cho chó bông. Bé làm theo đúng 4 bước của bảng thứ tự: đánh thức chó dậy (wake up), cho ăn bằng bát nhựa không (feed), dắt đi dạo quanh phòng bằng sợi dây vải ngắn không quá 30 cm (walk), đặt vào hộp đi ngủ (sleep). Mẹ nói tiếng Anh, bé nhắc lại từng bước.",
   "ob": "Ông bà cùng bé cho chó bông ăn, dắt đi dạo rồi ru ngủ.",
   "toi": "Kể tiếp “Tấm Cám”. Mẹ kể: Dì ghẻ muốn đưa Cám đi xem hội, bắt Tấm ở nhà nhặt một thúng thóc lẫn gạo. Tấm buồn quá. Bỗng một đàn chim sẻ bay đến, mỗi con nhặt giúp một ít, chẳng mấy chốc đã xong. Mẹ và bé đóng vai chim sẻ, chụm tay làm mỏ mổ mổ trên gối. Hỏi bé: “Chim sẻ tiếng Anh là bird đấy, con còn nhớ không?”."
  },
  {
   "chuyen": "Hát tiếp khi nhạc dừng.",
   "en": {
    "v": 0,
    "t": "Lần 4 – hát câu dài. Bật lại bài thú cưng. Mẹ tắt tiếng ở giữa câu, bé hát nốt cả câu dài: “I have a dog, … woof!”. Thêm một câu mới bé tự đặt: “My dog says woof.” Mẹ khen to mỗi câu bé nói đủ.",
    "b": "My dog says woof!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – đổi vai. Xem lại bài đoán tiếng kêu một lượt. Sau đó tắt video, bé làm người ra câu đố: bé kêu một tiếng con vật, mẹ phải nói tên tiếng Trung. Mẹ cố tình nói sai một lần để bé sửa.",
    "b": "不对，是猫！(bú duì, shì māo)"
   },
   "words": {
    "en": [
     0,
     1,
     5
    ],
    "zh": [
     0,
     1,
     5
    ]
   },
   "doi": "Một con vật, hai cái tên (10 phút). Mẹ cầm một thú bông, nói tên tiếng Anh. Bé phải nói tên tiếng Trung của con đó, rồi đặt thú bông vào rổ. Sau đó đổi lại: mẹ nói tiếng Trung, bé nói tiếng Anh. Đủ 5 con thì bé được bấm chuông cửa hoặc vỗ một cái trống đồ chơi.",
   "ob": "Ông bà nói tên tiếng Việt, bé nói tiếng Anh, rồi bố mẹ nhắc tên tiếng Trung.",
   "toi": "Đọc sách tranh. Mẹ đọc cuốn “Bồ nông có hiếu” của Phong Thu (NXB Kim Đồng). Đọc xong, hỏi: “Chim bồ nông đã làm gì cho mẹ?”. Bé kể một việc bé làm để giúp mẹ. Mẹ nói tiếng Anh “bird” khi chỉ tranh bồ nông."
  },
  {
   "chuyen": "Bé kể chuyện trước, xem lại sau.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước. Trước khi bật video, bé cầm 3 ô tranh đã vẽ hôm thứ Hai và kể lại chuyện chó con. Rồi mới xem lại để kiểm tra: “Con kể có giống không?”. Đến trang cuối, bé nói câu “The puppy is happy.”",
    "b": "The puppy is happy!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 5 – chuyển ngữ. Xem 5 con đầu không tiếng. Mẹ chỉ hình, bé nói cả tiếng Anh và tiếng Trung: dog – 狗, cat – 猫. Bật tiếng xem lại, đếm xem bé đúng mấy cặp.",
    "b": "狗是dog。(gǒu shì dog)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     6,
     7
    ],
    "zh": [
     0,
     1,
     2,
     3,
     6
    ]
   },
   "doi": "Bữa ăn của các con vật (12 phút). Mẹ cắt tranh to: xương, cá, rau, sâu đồ chơi. Bé ghép mỗi con vật với thức ăn của nó và nói câu: “The cat likes fish.” Mẹ hỏi thêm tiếng Trung: “猫喜欢鱼吗？”, bé gật đầu nói 喜欢.",
   "ob": "Ông bà hỏi “Mèo thích ăn gì?”, bé chọn tranh con cá và nói “fish”.",
   "toi": "Kết chuyện “Tấm Cám” (bản nhẹ nhàng). Mẹ kể: Tấm được đi hội, chẳng may đánh rơi một chiếc hài xinh. Nhà vua nhặt được, cho mời các cô gái đến thử. Chỉ có Tấm đi vừa, nhà vua mời Tấm về cung và mọi người vui mừng. Rồi bé kể lại cả chuyện, mẹ hỏi: “Ai đã giúp Tấm?” (cá bống, chim sẻ)."
  },
  {
   "chuyen": "Thử thách lớn và picnic từ vựng.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Lần này khó hơn: mỗi trò xong, bé phải nói một câu (I have a…, It's a…) mới được tô sao. Đủ 3 sao, bé chọn 1 video yêu thích trong tuần xem lại, có thể là truyện chó con hoặc bài hát.",
    "b": "Great job! You have three stars!"
   },
   "zh": {
    "v": 1,
    "t": "Thêm nếu bé muốn: chơi đoán tiếng kêu, bé đoán bằng tiếng Trung trước khi hình hiện ra.",
    "b": "你真棒！(nǐ zhēn bàng)"
   },
   "doi": "Picnic từ vựng (20 phút). Trải chiếu ra sân hoặc ban công. Mang theo bánh mì, chuối, nước và các thú bông thú cưng. Bé “mời” từng con vật: “Dog, have some bread!”. Mẹ hỏi tên đồ ăn bằng tiếng Anh, bố hoặc mẹ nhắc thêm tiếng Trung (面包 miànbāo, 香蕉 xiāngjiāo). Đồ ăn cắt miếng vừa miệng, bé ngồi ăn, không vừa chạy vừa ăn.",
   "ob": "Ông bà ngồi picnic cùng, bé mời ông bà ăn và nói tên một món.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố con thỏ”, bé đoán. Rồi bé làm con thỏ nhảy, mẹ hỏi bằng tiếng Anh “Rabbit, can you jump?”, bé nhảy và trả lời “Yes!”. Đọc lại câu đố, bé đọc cùng mẹ dòng “Có tài chạy nhanh”.",
   "lyr": "Câu đố con thỏ",
   "special": "Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại bài thú cưng bé thích, không đặt nhiệm vụ mới. Mẹ chỉ cười, hát và nhảy cùng con. Xem clip biểu diễn tuần trước rồi so sánh: tuần này bé hát được nhiều hơn chưa?",
    "b": "I love you, my little puppy."
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại 5 con đầu, bé tự chọn con vật để nói câu 我喜欢….",
    "b": "我喜欢小狗。(wǒ xǐhuan xiǎo gǒu)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3,
     5
    ]
   },
   "doi": "Việc thật cùng gia đình: bé giúp mẹ một việc nhỏ thật như tưới cây ngoài ban công có mẹ đứng cạnh, hoặc cho cá cảnh nhà ăn đúng một nhúm thức ăn do mẹ đưa. Vừa làm vừa nói “feed the fish”.",
   "ob": "Ông bà kể cho bé nghe ngày xưa nhà mình nuôi con gì.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại bài ca dao “Con gà cục tác lá chanh”, bé chọn một con vật và làm tiếng kêu. Rồi mẹ ôm bé, cùng nhớ lại cả vòng: con vật bé thích nhất là con gì, vì sao. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Con gà cục tác lá chanh",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[110] = {
 "sub": "Bò, gà, lợn, vịt và tiếng kêu",
 "vocab": {
  "en": [
   [
    "cow",
    "🐮",
    "con bò",
    false
   ],
   [
    "pig",
    "🐷",
    "con lợn",
    false
   ],
   [
    "duck",
    "🦆",
    "con vịt",
    false
   ],
   [
    "chicken",
    "🐔",
    "con gà",
    false
   ],
   [
    "horse",
    "🐴",
    "con ngựa",
    false
   ],
   [
    "sheep",
    "🐑",
    "con cừu",
    false
   ],
   [
    "egg",
    "🥚",
    "quả trứng",
    false
   ],
   [
    "farm",
    "🌾",
    "nông trại",
    false
   ],
   [
    "run",
    "🏃",
    "chạy",
    true
   ],
   [
    "waddle",
    "🐧",
    "đi lạch bạch",
    true
   ]
  ],
  "zh": [
   [
    "牛",
    "niú",
    "con bò",
    "🐮"
   ],
   [
    "猪",
    "zhū",
    "con lợn",
    "🐷"
   ],
   [
    "鸭",
    "yā",
    "con vịt",
    "🦆"
   ],
   [
    "鸡",
    "jī",
    "con gà",
    "🐔"
   ],
   [
    "马",
    "mǎ",
    "con ngựa",
    "🐴"
   ],
   [
    "羊",
    "yáng",
    "con cừu, con dê",
    "🐑"
   ],
   [
    "鸡蛋",
    "jīdàn",
    "quả trứng gà",
    "🥚"
   ],
   [
    "叫",
    "jiào",
    "kêu",
    "📢"
   ]
  ],
  "en_phr": [
   [
    "The cow says moo.",
    "moo",
    "🐮"
   ],
   [
    "The duck says quack.",
    "quack",
    "🦆"
   ],
   [
    "The pig says oink.",
    "oink",
    "🐷"
   ],
   [
    "The chicken has an egg.",
    "egg",
    "🥚"
   ],
   [
    "Run like a horse!",
    "horse",
    "🐴"
   ]
  ],
  "zh_phr": [
   [
    "小鸭嘎嘎叫。",
    "嘎嘎",
    "xiǎo yā gāgā jiào",
    "vịt con kêu cạp cạp",
    "🦆"
   ],
   [
    "牛哞哞叫。",
    "哞哞",
    "niú mōumōu jiào",
    "bò kêu ụm bò",
    "🐮"
   ],
   [
    "这是小猪。",
    "小猪",
    "zhè shì xiǎo zhū",
    "đây là lợn con",
    "🐷"
   ],
   [
    "母鸡下蛋了。",
    "蛋",
    "mǔjī xià dàn le",
    "gà mái đẻ trứng rồi",
    "🥚"
   ]
  ],
  "seq": [
   [
    "🥚",
    "an egg",
    "鸡蛋"
   ],
   [
    "🐣",
    "the egg cracks",
    "小鸡出来了"
   ],
   [
    "🐥",
    "a little chick",
    "小鸡"
   ],
   [
    "🐔",
    "a big chicken",
    "大母鸡"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Learn Farm Animals – What Is It? Trò đoán con vật nông trại",
    "u": "https://www.youtube.com/watch?v=mUeSNpv5dd4",
    "kind": "game",
    "ch": "Maple Leaf Learning"
   },
   {
    "t": "The Animals On The Farm – bài hát các con vật nông trại",
    "u": "https://www.youtube.com/watch?v=zXEq-QO3xTg",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Old MacDonald – bài hát ông MacDonald có một nông trại",
    "u": "https://www.youtube.com/watch?v=_6HzoUcx3eo",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Five Little Ducks – năm chú vịt con (đếm ngược)",
    "u": "https://www.youtube.com/watch?v=pZw9veQ76fo",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "动物 – bài học con vật của 宝贝中文 (xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=M1a2R6SFAYg",
    "kind": "lesson",
    "ch": "宝贝中文 Baobei Chinese"
   },
   {
    "t": "王老先生有块地 – học hát Old MacDonald tiếng Trung (xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=e3PZlUbeAR8",
    "kind": "lesson",
    "ch": "ChineseWithPing 跟萍学中文",
    "min": 8.7
   },
   {
    "t": "拔萝卜 – bài hát nhổ củ cải",
    "u": "https://www.youtube.com/watch?v=gnD1zHblo0Q",
    "kind": "song_action",
    "ch": "貝瓦兒歌 Beva Kids Song (贝瓦儿歌)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Khám phá: con vật nào kêu thế nào?",
   "toi_vi": [
    {
     "t": "Câu đố con lợn",
     "type": "cau_do",
     "lyr": "Miệng kêu ụt ịt\nĂn cám ăn rau\nLớn rất là mau"
    },
    {
     "t": "Câu đố con vịt (mỏ bẹt)",
     "type": "cau_do",
     "lyr": "Con gì chân ngắn\nMà lại có màng\nMỏ bẹt màu vàng\nHay kêu cạp cạp?"
    },
    {
     "t": "Câu đố con bò sữa",
     "type": "cau_do",
     "lyr": "Chỉ ăn cỏ non\nUống nguồn nước sạch\nMà tôi tặng bạn\nRất nhiều sữa tươi."
    }
   ],
   "book_vi": {
    "t": "Tuyển tập truyện, thơ, câu đố dành cho trẻ mầm non",
    "author": "Trần Thị Ngân, Phạm Hồng Thúy, Nguyễn Thị Mỹ Ngọc",
    "publisher": "NXB Văn Học"
   }
  },
  {
   "title": "Tuần 2 – Thử thách: ai nhanh hơn ở nông trại?",
   "toi_vi": [
    {
     "t": "Con vịt con vạc",
     "type": "ve",
     "lyr": "Quặc quặc, quạc quạc\nCon vịt, con vạc\nCó thương em tao\nThì lội xuống ao\nBắt ba con ốc\nThì lội xuống rộc\nBắt năm con rô\nThì lội xuống hồ\nBắt mười con diếc."
    },
    {
     "t": "Con gà cục tác cục te",
     "type": "ve",
     "lyr": "Con gà cục tác cục te\nHay đỗ đầu hè hay chạy rông rông\nMá gà thì đỏ hồng hồng\nCái mỏ thì nhọn cái mồng thì tươi\nCái chân hay đạp, hay bươi\nCái cánh hay vỗ lên trời gió bay"
    },
    {
     "t": "Câu đố con gà trống",
     "type": "cau_do",
     "lyr": "Con gì mào đỏ\nGáy ò ó o\nTừ sáng tinh mơ\nGọi người thức giấc"
    }
   ],
   "book_vi": {
    "t": "Chuyện ở rừng Vi vu (bộ sách tranh)",
    "author": "Trương Huỳnh Như Trân",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được cow, pig, duck, chicken, horse khi nghe tiếng kêu"
  ],
  [
   "en",
   "Nói được câu “The … says …” với ít nhất 2 con vật"
  ],
  [
   "zh",
   "Nói được 牛 niú, 猪 zhū, 鸭 yā, 鸡 jī, 马 mǎ"
  ],
  [
   "zh",
   "Nói được câu 小鸭嘎嘎叫 hoặc 牛哞哞叫 theo video"
  ],
  [
   "vi",
   "Đọc theo mẹ được một bài vè hoặc câu đố về gà, vịt, lợn"
  ],
  [
   "td",
   "Đếm ngược được từ 5 về 1 theo bài Five Little Ducks"
  ],
  [
   "td",
   "Xếp đúng thứ tự trứng → gà con → gà mái"
  ],
  [
   "vd",
   "Đi lạch bạch như vịt, phi như ngựa theo lệnh tiếng Anh, tiếng Trung"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Khám phá: đoán con vật nông trại.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và đoán. Trò đoán hiện một phần con vật. Mẹ dừng khi hình còn bị che, hỏi: “Con đoán là con gì?”. Bé nói tiếng Việt cũng được. Khi video nói tên, bé nhắc theo một lần. Đếm xem nông trại có mấy con vật.",
    "b": "What is it? It's a cow!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Chỉ xem 5 phút đầu bài học. Chuẩn bị sẵn vài con vật đồ chơi (bò, gà, lợn, vịt) to hơn nắm tay. Khi cô giáo nói tên con nào, bé nhặt đúng con đó giơ lên. Mẹ nhắc theo từ 牛, 鸡, 猪, 鸭.",
    "b": "这是牛。(zhè shì niú)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Nông trại trên sàn (12 phút). Lấy một tấm khăn xanh làm cánh đồng, hộp giấy làm chuồng. Bé xếp con vật đồ chơi hoặc tranh vào nông trại. Mẹ nói “Where is the pig?”, bé tìm và đặt vào chuồng. Đếm cả nông trại: one, two, three…",
   "ob": "Ông bà hỏi “Con bò đâu?”, bé tìm con bò đồ chơi đưa ông bà.",
   "toi": "Kể chuyện “Trí khôn của ta đây” (phần đầu, kể vui). Mẹ kể: Có một bác nông dân đi cày với chú trâu khỏe. Bác Hổ trong rừng thấy lạ quá: trâu to thế mà lại nghe lời người nhỏ bé. Hổ hỏi trâu, trâu bảo: “Vì người có trí khôn.” Hổ tò mò muốn xem trí khôn trông thế nào. Mẹ dừng và hỏi: “Theo con, trí khôn là cái gì?”."
  },
  {
   "chuyen": "Nghe tiếng kêu, chỉ con vật.",
   "en": {
    "v": 1,
    "t": "Lần 1 – chỉ và kêu. Bài hát các con vật nông trại. Mỗi khi một con vật hiện lên, bé chỉ vào màn hình và kêu theo: moo, oink. Mẹ dừng giữa bài hỏi: “Con nào kêu moo?”.",
    "b": "The cow says moo."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – nghe tiếng kêu tiếng Trung. Chỉ xem 5 phút đầu, phần cô giáo dạy từng câu. Con vật Trung Quốc kêu khác con vật Việt Nam đấy: vịt kêu 嘎嘎 gāgā. Mẹ và bé thi nhau bắt chước tiếng kêu theo video.",
    "b": "小鸭嘎嘎叫。(xiǎo yā gāgā jiào)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     7
    ]
   },
   "doi": "Thí nghiệm tiếng kêu (10 phút). So sánh: tiếng Việt vịt kêu “cạp cạp”, tiếng Anh “quack”, tiếng Trung “嘎嘎”. Mẹ vẽ bảng 3 cột trên giấy, mỗi con vật một hàng. Mẹ nói con vật, bé kêu theo cả ba thứ tiếng. Hỏi bé: “Tiếng nào giống nhau nhất?”.",
   "ob": "Ông bà kêu như con vật kiểu Việt Nam, bé kêu lại kiểu tiếng Anh.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố con lợn”. Đọc chậm, đến chữ “ụt ịt” thì mẹ kêu thật, bé cười và đoán. Bé làm lợn nằm “thở phì phò”, rồi nói tên tiếng Anh “pig” và tiếng Trung “猪”.",
   "lyr": "Câu đố con lợn"
  },
  {
   "chuyen": "Đoán nhanh hơn video.",
   "en": {
    "v": 0,
    "t": "Lần 2 – thi đoán. Xem lại trò đoán. Bé phải nói tên tiếng Anh trước khi hình hiện hết. Mẹ ghi điểm bằng que kem to: đúng được một que. Cuối cùng đếm số que bằng tiếng Anh.",
    "b": "It's a duck! Quack, quack!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại 5 phút đầu. Mỗi con vật một động tác cố định giống bài tiếng Anh: bò thì hai tay làm sừng, gà vỗ cánh, lợn ấn mũi, vịt đi lạch bạch. Cô giáo nói tên con nào, bé làm động tác đó.",
    "b": "我是小鸭。(wǒ shì xiǎo yā)"
   },
   "words": {
    "en": [
     0,
     2,
     3,
     4,
     9
    ],
    "zh": [
     0,
     2,
     3,
     4
    ]
   },
   "doi": "Từ trứng ra gà (12 phút). Mẹ luộc chín một quả trứng gà (mẹ làm phần bếp), để nguội. Bé cầm, sờ vỏ, nói “egg”. Mẹ kể: trứng nằm ấm, rồi nứt, ra gà con, gà con lớn thành gà mái. Bé xếp 4 tranh theo thứ tự trên bảng. Cuối cùng mẹ bóc trứng, bé ăn.",
   "ob": "Ông bà cùng bé bóc quả trứng luộc và kể chuyện gà con nở.",
   "toi": "Kể tiếp “Trí khôn của ta đây”. Mẹ kể: Bác nông dân bảo trí khôn để ở nhà, phải buộc Hổ vào gốc cây kẻo Hổ ăn mất trâu thì bác mới đi lấy. Hổ đồng ý. Bác buộc Hổ lại, chất rơm, rồi nói: “Trí khôn của ta đây!”. Hổ vùng chạy, rơm cọ vào người thành những vằn đen. Trâu đứng xem cười mãi. Mẹ và bé cùng cười lăn như trâu."
  },
  {
   "chuyen": "Nghe tên, làm đúng con vật.",
   "en": {
    "v": 1,
    "t": "Lần 2 – nghe và làm. Đứng dậy xem lại bài nông trại. Bé không chỉ màn hình mà biến thành con vật đang được hát: horse thì phi ngựa, chicken vỗ cánh, pig ấn mũi. Mẹ dừng nhạc, bé đứng im.",
    "b": "Can you run like a horse?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – hát theo đoạn điệp. Xem lại phần cô giáo dạy hát. Bé hát theo đoạn có tiếng kêu con vật, còn mẹ hát phần lời. Thử nói câu 牛哞哞叫.",
    "b": "牛哞哞叫。(niú mōumōu jiào)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     4,
     8
    ],
    "zh": [
     0,
     1,
     3,
     4
    ]
   },
   "doi": "Đếm và so sánh (12 phút). Mẹ bày hai nhóm con vật đồ chơi: một bên 3 con, một bên 5 con. Hỏi “How many ducks?”, bé đếm bằng tiếng Anh. Hỏi tiếng Trung “几只鸭？”, bé đếm 一、二、三. Bên nào nhiều hơn? Đếm xong, bé xếp tất cả vào chuồng.",
   "ob": "Ông bà xếp 3 con vật, bé đếm to từng con.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố con vịt (mỏ bẹt)”. Bé đoán xong, đi lạch bạch quanh phòng và kêu “cạp cạp – quack – 嘎嘎”. Nhắc lại câu đố con lợn hôm thứ Ba để bé ôn.",
   "lyr": "Câu đố con vịt (mỏ bẹt)"
  },
  {
   "chuyen": "Bé đếm vịt con trước video.",
   "en": {
    "v": 3,
    "t": "Lần 1 – đếm ngược. Bài Five Little Ducks: năm chú vịt đi chơi, mỗi lần về thiếu một con. Bé giơ 5 ngón tay, mỗi lần vịt đi mất bé gập một ngón. Mẹ dừng trước mỗi đoạn, hỏi: “Còn mấy con?”. Cuối bài mẹ vịt gọi, cả 5 con về, bé xoè đủ 5 ngón.",
    "b": "How many ducks? Four!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Xem lại 5 phút đầu. Trước khi cô giáo nói, mẹ dừng và giơ con vật đồ chơi; bé nói tên tiếng Trung trước. Bé đúng 4 con trở lên thì được làm “chủ nông trại”.",
    "b": "你真棒！(nǐ zhēn bàng)"
   },
   "words": {
    "en": [
     2,
     3,
     6,
     7
    ],
    "zh": [
     2,
     3,
     6
    ]
   },
   "doi": "Đi dạo tìm con vật (15 phút). Nếu gần nhà có chợ, ao hay vườn có gà, vịt, mẹ dẫn bé đi xem, nắm tay bé suốt đường đi và đứng xa bờ ao. Bé chỉ và nói tên tiếng Anh, tiếng Trung. Nếu không có, xem tranh con vật trong sách và chơi “nghe mẹ kêu, chỉ đúng tranh”. Không cho bé tự bắt gà vịt.",
   "ob": "Ông bà dắt bé đi xem gà vịt, bé kêu chào từng con.",
   "toi": "Đọc sách. Mẹ chọn vài câu đố, bài thơ về con vật trong cuốn “Tuyển tập truyện, thơ, câu đố dành cho trẻ mầm non” (NXB Văn Học). Mẹ đọc, bé đoán và làm tiếng kêu. Nếu chưa có sách, mẹ đọc lại 2 câu đố trong tuần và để bé đố lại mẹ."
  },
  {
   "chuyen": "Thử thách lớn và làm sách nhỏ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ chấm sao: xong mỗi trò được 1 sao, kêu đúng tiếng con vật trong lúc chơi được thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần (đoán con vật, bài nông trại hoặc vịt con) xem lại.",
    "b": "You are a farm star!"
   },
   "zh": {
    "v": 1,
    "t": "Nếu bé còn hứng: xem lại phần hát 王老先生有块地 1 lượt, bé kêu tiếng con vật.",
    "b": "哞哞！嘎嘎！(mōumōu! gāgā!)"
   },
   "doi": "Làm sách nhỏ của bé (20 phút). Gấp đôi 3 tờ giấy A4, dập ghim ở gáy (mẹ dập). Mỗi trang một con vật nông trại: bé vẽ hoặc dán tranh cắt từ lịch cũ (mẹ cắt), mẹ viết tên tiếng Anh và chữ Hán bên dưới. Trang bìa: “My Farm – 我的农场”. Bé “đọc” sách cho mẹ nghe, mỗi trang nói tên và tiếng kêu.",
   "ob": "Ông bà cùng bé dán tranh, bé đọc sách nhỏ cho ông bà nghe.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố con bò sữa”. Bé đoán xong, mẹ rót cho bé một cốc sữa nhỏ, hỏi: “Sữa này từ đâu ra?”. Bé nói “cow – 牛”. Mẹ kể bò ăn cỏ non, uống nước sạch, cho mình sữa tươi.",
   "lyr": "Câu đố con bò sữa",
   "special": "Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần"
  },
  {
   "chuyen": "Ôn tuần: cả nhà đi xem con vật thật.",
   "en": {
    "v": 2,
    "t": "Ôn: hôm nay xem thêm bài Old MacDonald, chỉ nghe và kêu theo. Rồi bé chọn video yêu thích nhất tuần xem lại. Chơi lại trò web bé thích.",
    "b": "Old MacDonald had a farm!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: xem lại 5 phút đầu, bé nhặt đúng con vật đồ chơi khi nghe tên.",
    "b": "这是什么？是鸡！(zhè shì shénme? shì jī)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   "doi": "Việc thật cùng gia đình: cả nhà đi chợ, ghé hàng trứng hoặc hàng gà vịt, hoặc về quê thăm vườn. Bé đếm số quả trứng mẹ mua bằng tiếng Anh. Về nhà, bé xếp trứng vào khay cùng mẹ và nói “egg” mỗi quả. Bé luôn đi cạnh người lớn, không chạm vào gà vịt sống.",
   "ob": "Ông bà cho bé xem gà, bé đếm có mấy con.",
   "toi": "Bé kể lại chuyện. Mẹ hỏi gợi ý từng bước để bé kể lại “Trí khôn của ta đây”: Ai đi cày? Hổ hỏi gì? Bác buộc Hổ ở đâu? Vì sao hổ có vằn? Bé kể xong, cả nhà vỗ tay. Bé cầm sách nhỏ, “đọc” cho bố nghe một lần."
  },
  {
   "chuyen": "Tuần Thử thách: ai nhanh hơn ở nông trại?",
   "en": {
    "v": 2,
    "t": "Lần 1 – thi kêu nhanh. Bài Old MacDonald hát lần lượt từng con vật. Mẹ dừng ngay khi tên con vật vừa hiện. Ai kêu đúng tiếng con vật trước thì được 1 sao: mẹ hay bé? Mẹ cố tình chậm một chút để bé thắng.",
    "b": "Here a moo, there a moo!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – hát cùng lời. Xem lại 5 phút đầu bài hát Old MacDonald tiếng Trung. Hôm qua con hát tiếng Anh, hôm nay hát tiếng Trung. Bé thử hát câu có tên con vật: 牛, 鸭, 猪. Mẹ dừng giữa câu, bé hát tiếp tiếng kêu.",
    "b": "王老先生有块地。(Wáng lǎo xiānsheng yǒu kuài dì)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     4
    ]
   },
   "doi": "Nông trại nhanh tay (12 phút). Mẹ đặt 6 tranh con vật úp xuống sàn. Mẹ nói một câu đố bằng tiếng Anh: “It says oink.” Bé chạy lật đúng tranh. Mỗi lượt mẹ đếm 1-2-3, bé lật kịp được 1 sao. Lượt sau mẹ đố bằng tiếng Trung: “它嘎嘎叫”.",
   "ob": "Ông bà kêu tiếng con vật, bé chạy lật đúng tranh.",
   "toi": "Kể chuyện “Cáo, Thỏ và Gà trống” (phần đầu). Mẹ kể: Cáo có ngôi nhà bằng băng, Thỏ có ngôi nhà bằng gỗ. Mùa xuân đến, nhà băng tan chảy. Cáo sang xin ở nhờ, rồi đẩy Thỏ ra ngoài. Thỏ ngồi khóc bên đường. Chó và Gấu đến giúp nhưng sợ Cáo nên chạy mất. Hỏi bé: “Ai sẽ giúp được Thỏ nhỉ?”."
  },
  {
   "chuyen": "Đố vui nông trại có tính điểm.",
   "en": {
    "v": 0,
    "t": "Lần 3 – nói câu đầy đủ. Xem lại trò đoán con vật nông trại. Mỗi con, bé phải nói hai câu: “It's a cow. The cow says moo.” Nói đủ hai câu được 2 sao. Mẹ hỏi thêm tên tiếng Trung, bé nói đúng được sao vàng.",
    "b": "Yes! The cow says moo."
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – nhổ củ cải. Bài hát kể chuyện cả nhà và các con vật cùng kéo một củ cải to. Mẹ và bé ngồi đối diện, nắm tay nhau, cứ đến câu “嘿哟” thì cùng kéo lùi người ra sau. Nghe xem có con vật nào giúp kéo.",
    "b": "嘿哟，嘿哟！(hēi yō, hēi yō)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Đố vui cả nhà (12 phút). Bé làm người đố, mẹ và bố là người chơi. Bé làm một động tác con vật không kêu, ai nói đúng tên tiếng Anh trước được 1 sao. Đổi lại: mẹ đố bằng tiếng Trung “我是谁？” rồi làm động tác, bé đoán.",
   "ob": "Ông bà đoán con vật bé đang diễn, nói sai để bé sửa.",
   "toi": "Vè dân gian. Mẹ đọc bài “Con vịt con vạc”, đọc vui, đến “Quặc quặc, quạc quạc” thì cả hai kêu thật to. Hỏi bé: “Vịt lội xuống ao bắt mấy con ốc?”. Bé giơ 3 ngón tay và đếm “one, two, three”.",
   "lyr": "Con vịt con vạc"
  },
  {
   "chuyen": "Đếm vịt nhanh hơn mẹ.",
   "en": {
    "v": 3,
    "t": "Lần 2 – đếm và đóng vai. Bé làm vịt mẹ, mẹ cầm 5 vịt đồ chơi hoặc 5 ngón tay. Mỗi lần trong bài vịt con đi mất, mẹ giấu một con sau lưng; bé phải nói “four”, “three”… trước khi video nói. Cuối bài bé kêu “Quack!” thật to gọi đàn vịt về.",
    "b": "Mother duck said quack, quack!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – kéo và đếm. Xem lại bài nhổ củ cải. Lần này mỗi khi có người hoặc con vật mới đến kéo, bé giơ thêm 1 ngón tay và đếm bằng tiếng Trung. Đến cuối bài cả nhà mấy người kéo?",
    "b": "一、二、三，拔！(yī, èr, sān, bá)"
   },
   "words": {
    "en": [
     2,
     8,
     9
    ],
    "zh": [
     2,
     4,
     5
    ]
   },
   "doi": "Đua nông trại (12 phút). Kẻ vạch xuất phát và vạch đích bằng băng dính trên sàn. Mẹ gọi tên con vật, bé di chuyển như con đó đến đích: duck đi lạch bạch, horse phi ngựa, pig bò bằng tay chân. Mẹ bấm đồng hồ, lượt sau bé thử nhanh hơn. Sàn khô, dẹp đồ vướng chân trước khi chơi.",
   "ob": "Ông bà gọi “Vịt!”, bé đi lạch bạch đến chỗ ông bà.",
   "toi": "Kể tiếp “Cáo, Thỏ và Gà trống”. Mẹ kể: Gà trống đi qua, vác cái hái nhỏ, hứa giúp Thỏ. Gà trống đứng trước cửa gáy vang: “Ò ó o!” và vỗ cánh thật mạnh. Cáo tưởng có ai to lớn đến, sợ quá chạy biến vào rừng. Thỏ được về nhà, mời Gà trống ở cùng. Bé làm gà trống gáy, mẹ làm cáo chạy."
  },
  {
   "chuyen": "Ai kêu đúng, ai kêu sai?",
   "en": {
    "v": 1,
    "t": "Lần 3 – mẹ hát sai, bé sửa. Bật bài nông trại và tắt tiếng. Mẹ chỉ hình con vật và cố tình kêu sai: con bò mà kêu “quack”. Bé phải sửa bằng câu “No! The cow says moo.” Rồi bật tiếng lên xem lại để kiểm tra.",
    "b": "No, no! The pig says oink."
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – nói câu và chuyển ngữ. Xem lại phần đầu bài học con vật. Mỗi lần thấy con vật, bé nói câu 这是 + tên tiếng Trung, rồi nói tiếp tên tiếng Anh. Ví dụ: 这是马, horse.",
    "b": "这是马。(zhè shì mǎ)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3,
     4,
     7
    ]
   },
   "doi": "Hai thứ tiếng, một nông trại (10 phút). Mẹ cầm từng con vật đồ chơi. Mẹ nói tiếng Anh, bé đáp bằng tiếng Trung; mẹ nói tiếng Trung, bé đáp tiếng Anh. Đúng thì bé được đặt con vật vào chuồng. Hết con vật thì bé đóng cửa chuồng, nói “Good night, farm!”.",
   "ob": "Ông bà gọi tên tiếng Việt, bé nói tên tiếng Anh rồi đặt con vật vào chuồng.",
   "toi": "Vè dân gian. Mẹ đọc bài “Con gà cục tác cục te”. Đến mỗi bộ phận của gà (má, mỏ, mồng, chân, cánh) mẹ dừng, bé chỉ vào tranh gà. Rồi bé làm gà đạp chân, vỗ cánh như trong bài.",
   "lyr": "Con gà cục tác cục te"
  },
  {
   "chuyen": "Thử thách cuối tuần: ôn cả bốn video.",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé hát trước. Bật Old MacDonald. Mẹ dừng trước mỗi con vật mới, bé hát trước câu “And on that farm he had a …” và điền tên con vật. Đúng được 1 sao.",
    "b": "On that farm he had a pig!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 4 – bé hát trước. Xem lại phần hát tiếng Trung. Mẹ dừng trước tiếng kêu, bé kêu trước video và nói tên con vật bằng tiếng Trung.",
    "b": "鸭子嘎嘎叫。(yāzi gāgā jiào)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4,
     6
    ],
    "zh": [
     0,
     1,
     2,
     3,
     6
    ]
   },
   "doi": "Bé tập gọi điện (10 phút). Chuẩn bị cho cuộc gọi ông bà ngày mai: bé chọn 3 câu sẽ nói. Ví dụ: “I see a cow.”, “The duck says quack.”, “我喜欢小鸡”. Mẹ và bé tập 3 lần bằng điện thoại đồ chơi, mẹ đóng vai ông bà hỏi lại.",
   "ob": "Ông bà nghe bé tập trước 3 câu sẽ nói khi gọi video.",
   "toi": "Đọc sách tranh. Mẹ đọc một truyện trong bộ “Chuyện ở rừng Vi vu” của Trương Huỳnh Như Trân (NXB Kim Đồng). Hỏi bé: “Trong truyện có con vật nào giống ở nông trại không?”. Bé nói tên tiếng Anh những con bé biết."
  },
  {
   "chuyen": "Thử thách lớn và gọi video ông bà.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé phải nói một câu “The … says …” mới được tô sao. Đủ sao, bé chọn 1 video yêu thích nhất cả vòng để xem lại.",
    "b": "Super! You did it!"
   },
   "zh": {
    "v": 2,
    "t": "Thêm nếu bé muốn: hát lại bài nhổ củ cải, kéo cùng cả nhà.",
    "b": "我们一起拔！(wǒmen yìqǐ bá)"
   },
   "doi": "Gọi video ông bà (15 phút). Bé cầm sách nhỏ “My Farm” đã làm tuần trước. Bé chào ông bà “Hello!” và “你好!”, rồi nói 3 câu đã tập: “I see a cow.”, “The duck says quack.”, “我喜欢小鸡.” Bé lật sách cho ông bà xem từng trang. Ông bà hỏi “Con lợn kêu thế nào?”, bé kêu bằng cả ba thứ tiếng.",
   "ob": "Ông bà nghe bé nói 3 câu qua điện thoại và khen thật to.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố con gà trống”. Bé đoán xong thì gáy “Ò ó o” rồi nói “chicken” và “鸡”. Hỏi bé: “Gà trống trong chuyện hôm thứ Hai đã giúp ai?”.",
   "lyr": "Câu đố con gà trống",
   "special": "Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 3,
    "t": "Ôn nhẹ: xem lại bài vịt con, bé tự giơ ngón tay đếm, không ghi điểm. Mẹ ôm bé khi đàn vịt về đủ.",
    "b": "All the ducks came back!"
   },
   "zh": {
    "v": 2,
    "t": "Ôn nhẹ: hát lại bài nhổ củ cải, cả nhà cùng kéo.",
    "b": "拔萝卜！(bá luóbo)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Việc thật cùng gia đình: bé giúp mẹ rửa rau trong chậu nước khi mẹ đứng cạnh, hoặc giúp đập trứng vào bát (mẹ cầm tay). Bé nói “egg” và “鸡蛋” khi cầm trứng.",
   "ob": "Ông bà kể cho bé nghe ngày xưa ở quê nuôi gà, vịt, lợn thế nào.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại bài vè “Con vịt con vạc”, bé kêu “quặc quặc”. Rồi mẹ và bé lật sách nhỏ “My Farm”, bé chọn con vật thích nhất. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Con vịt con vạc",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[111] = {
 "sub": "Áo, quần, mũ, giày",
 "vocab": {
  "en": [
   [
    "shirt",
    "👕",
    "áo",
    false
   ],
   [
    "trousers",
    "👖",
    "quần dài",
    false
   ],
   [
    "hat",
    "👒",
    "mũ",
    false
   ],
   [
    "shoes",
    "👟",
    "giày",
    false
   ],
   [
    "socks",
    "🧦",
    "tất",
    false
   ],
   [
    "dress",
    "👗",
    "váy",
    false
   ],
   [
    "coat",
    "🧥",
    "áo khoác",
    false
   ],
   [
    "put on",
    "🙆",
    "mặc vào, đội vào",
    true
   ],
   [
    "take off",
    "🙅",
    "cởi ra",
    true
   ]
  ],
  "zh": [
   [
    "衣服",
    "yīfu",
    "quần áo, áo",
    "👕"
   ],
   [
    "裤子",
    "kùzi",
    "quần",
    "👖"
   ],
   [
    "帽子",
    "màozi",
    "mũ",
    "👒"
   ],
   [
    "鞋",
    "xié",
    "giày",
    "👟"
   ],
   [
    "袜子",
    "wàzi",
    "tất",
    "🧦"
   ],
   [
    "穿",
    "chuān",
    "mặc, đi (giày)",
    "🙆"
   ],
   [
    "裙子",
    "qúnzi",
    "váy",
    "👗"
   ]
  ],
  "en_phr": [
   [
    "Put on your shoes.",
    "shoes",
    "👟"
   ],
   [
    "I like my red hat.",
    "hat",
    "👒"
   ],
   [
    "This is my shirt.",
    "shirt",
    "👕"
   ],
   [
    "Take off your socks.",
    "socks",
    "🧦"
   ]
  ],
  "zh_phr": [
   [
    "穿衣服。",
    "衣服",
    "chuān yīfu",
    "mặc áo vào",
    "👕"
   ],
   [
    "这是我的帽子。",
    "帽子",
    "zhè shì wǒ de màozi",
    "đây là mũ của con",
    "👒"
   ],
   [
    "我穿鞋。",
    "鞋",
    "wǒ chuān xié",
    "con đi giày",
    "👟"
   ]
  ],
  "seq": [
   [
    "👕",
    "put on a shirt",
    "穿衣服"
   ],
   [
    "👖",
    "put on trousers",
    "穿裤子"
   ],
   [
    "🧦",
    "put on socks",
    "穿袜子"
   ],
   [
    "👟",
    "put on shoes",
    "穿鞋"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "This Is The Way We Get Dressed – chỉ xem bài đầu khoảng 3 phút rồi tắt (phía sau là bản tổng hợp dài)",
    "u": "https://www.youtube.com/watch?v=V8iNAq4b7po",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Put On Your Shoes – bài hát đi giày, mặc áo khoác",
    "u": "https://www.youtube.com/watch?v=-jBfb33_KHU",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Clothes – trò đoán quần áo bị che (khoảng 4 phút)",
    "u": "https://www.youtube.com/watch?v=TbK3LwkM1I4",
    "kind": "game",
    "ch": "Interesting English",
    "min": 4.4
   },
   {
    "t": "Pete the Cat: I Love My White Shoes – truyện chú mèo và đôi giày trắng đổi màu",
    "u": "https://www.youtube.com/watch?v=8CLfVBW0WfQ",
    "kind": "story",
    "ch": "Magical Little Minds - Read Along Storytime"
   }
  ],
  "zh": [
   {
    "t": "衣物歌 – bài hát mặc quần áo (rất ngắn, bật 2–3 lần liền)",
    "u": "https://www.youtube.com/watch?v=PWbYLxQfTfc",
    "kind": "song_action",
    "ch": "Cool Panda Chinese Learning"
   },
   {
    "t": "穿衣服 – bài học mặc quần áo của Little Chinese Learners (chữ trên màn hình là chữ phồn thể, âm đọc vẫn chuẩn)",
    "u": "https://www.youtube.com/watch?v=bsa1lUYMMfo",
    "kind": "lesson",
    "ch": "繁中 Little Chinese Learners [Traditional Chinese]"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Ca nhạc: vừa hát vừa mặc đồ",
   "toi_vi": [
    {
     "t": "Câu đố cái nón",
     "type": "cau_do",
     "lyr": "Cái gì bằng lá\nChóp nhọn, vành tròn\nNgười lớn, trẻ con\nNắng, mưa đều đội?"
    },
    {
     "t": "Gió mùa thu mẹ ru con ngủ",
     "type": "hat_ru",
     "lyr": "Gió mùa thu mẹ ru con ngủ\nNăm canh dài mẹ thức đủ năm canh"
    }
   ],
   "book_vi": {
    "t": "Những chiếc áo ấm (phiên bản sách tranh)",
    "author": "Võ Quảng",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần 2 – Kể chuyện: đôi giày của mèo Pete",
   "toi_vi": [
    {
     "t": "Nuôi con chẳng quản chi thân",
     "type": "ca_dao",
     "lyr": "Nuôi con chẳng quản chi thân\nChỗ ướt mẹ nằm, chỗ ráo con lăn"
    },
    {
     "t": "Câu đố bàn chân",
     "type": "cau_do",
     "lyr": "Lưng trước bụng sau\nCon mắt ở dưới cái đầu ở trên"
    }
   ],
   "book_vi": {
    "t": "Những mùa ấm êm của em",
    "author": "Thu Dương (minh họa: Thạch Thảo)",
    "publisher": "Crabit Kidbooks"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được shirt, trousers, hat, shoes, socks khi chỉ vào đồ thật"
  ],
  [
   "en",
   "Làm đúng lệnh “Put on your …” và “Take off your …”"
  ],
  [
   "zh",
   "Nói được 衣服 yīfu, 裤子 kùzi, 帽子 màozi, 鞋 xié"
  ],
  [
   "zh",
   "Nói được câu 穿… khi tự mặc một món đồ"
  ],
  [
   "vi",
   "Đọc được câu đố cái nón cùng mẹ và kể lại một đoạn truyện"
  ],
  [
   "td",
   "Xếp đúng thứ tự mặc đồ: áo, quần, tất, giày"
  ],
  [
   "xh",
   "Tự gấp và cất được 2–3 món quần áo của mình"
  ],
  [
   "vd",
   "Tự đi tất và giày (dán quai hoặc xỏ chân) không cần mẹ giúp"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Ca nhạc: hát bài mặc quần áo.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Chỉ xem bài đầu tiên rồi tắt, vì phía sau là các bài khác. Mẹ bày sẵn áo, quần, tất, giày của bé trên sàn. Mỗi khi bài hát nói đến món nào, mẹ dừng và bé chạy lại chạm vào đúng món đồ thật đó.",
    "b": "This is your shirt."
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Bài rất ngắn nên bật 2 lần liền. Lần đầu chỉ nghe và xem. Lần hai, mỗi khi nghe 衣服, 裤子, 帽子, 鞋, bé chỉ vào món đồ thật đang bày trên sàn. Hôm nay con học shirt, tiếng Trung là 衣服 đấy.",
    "b": "这是衣服。(zhè shì yīfu)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Phân loại quần áo (12 phút). Mẹ đổ một rổ quần áo sạch của cả nhà ra giường. Bé tìm và xếp thành 4 đống: shirt, trousers, socks, hat. Mẹ hỏi “Where are the socks?”, bé chỉ đống tất. Tìm thêm: chiếc áo nào của bố, chiếc nào của bé? To hay nhỏ?",
   "ob": "Ông bà cùng bé nhặt tất trong rổ quần áo, bé đếm có mấy chiếc.",
   "toi": "Kể chuyện “Chân, Tay, Tai, Mắt, Miệng” (phần đầu). Mẹ kể: Ngày xưa Chân, Tay, Tai, Mắt sống chung với bác Miệng. Một hôm cả bọn càu nhàu: “Chúng tôi làm suốt ngày, còn Miệng chỉ ngồi ăn!”. Rồi cả bọn rủ nhau nghỉ, không làm gì nữa. Mẹ vừa kể vừa chỉ: chân đi giày, tay đeo găng, đầu đội mũ. Hỏi bé: “Không làm gì thì chuyện gì xảy ra?”."
  },
  {
   "chuyen": "Hát và đi giày như video.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Bài hát đi giày trước khi ra ngoài. Đặt đôi dép hoặc giày của bé ngay cạnh. Lần này chỉ xem và chỉ vào giày, mũ, áo khoác trên màn hình. Mẹ nhắc theo “shoes”, “coat”, “hat”.",
    "b": "Let's put on your shoes."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem phần đầu bài học, khoảng 4 phút. Cô giáo nói 穿 (mặc) rồi nói tên món đồ. Mẹ cầm một chiếc áo, làm động tác mặc mỗi khi nghe 穿. Bé bắt chước làm theo.",
    "b": "穿衣服，穿鞋。(chuān yīfu, chuān xié)"
   },
   "words": {
    "en": [
     2,
     3,
     6,
     7
    ],
    "zh": [
     2,
     3,
     5
    ]
   },
   "doi": "Mặc đồ cho búp bê (12 phút). Lấy một búp bê hoặc gấu bông và vài món đồ cũ của bé hồi nhỏ. Mẹ nói “Put on the hat.” bé đội mũ cho gấu. Mẹ nói “Take off the hat.” bé cởi ra. Thêm áo, tất. Sau đó đổi vai: bé ra lệnh, mẹ mặc cho gấu.",
   "ob": "Ông bà mặc áo cho búp bê cùng bé, bé nói tên từng món.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố cái nón”. Bé đoán xong, mẹ đưa một chiếc nón lá hoặc mũ thật cho bé đội. Hỏi: “Trời nắng đội gì? Trời mưa đội gì?”. Mẹ nói tiếng Anh: “It's a hat.” Bé nhắc lại.",
   "lyr": "Câu đố cái nón"
  },
  {
   "chuyen": "Vừa hát vừa mặc đồ thật.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác thật. Bật lại bài đầu tiên. Lần này bé mặc thật theo bài hát: đến câu áo thì mặc áo, câu quần thì mặc quần. Mặc chậm cũng không sao, mẹ dừng video chờ bé xong mới bấm tiếp.",
    "b": "Put on your trousers. Good!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật bài 2–3 lần liền. Mỗi khi nghe tên món đồ, bé làm động tác mặc món đó: kéo áo qua đầu, xỏ chân vào quần, đội mũ. Mẹ làm cùng, động tác giống hệt bài tiếng Anh.",
    "b": "穿裤子。(chuān kùzi)"
   },
   "words": {
    "en": [
     0,
     1,
     4,
     7,
     8
    ],
    "zh": [
     0,
     1,
     4,
     5
    ]
   },
   "doi": "Thi mặc đồ chậm mà đúng (12 phút). Bé cởi áo khoác, tất. Mẹ nói từng lệnh tiếng Anh, bé mặc lại đúng thứ tự trên bảng thứ tự: shirt, trousers, socks, shoes. Mặc xong mỗi món, bé nói tên tiếng Trung. Không thi nhanh, chỉ thi đúng.",
   "ob": "Ông bà ngồi xem, nói “Áo trước, quần sau” và vỗ tay khi bé mặc xong.",
   "toi": "Kể tiếp “Chân, Tay, Tai, Mắt, Miệng”. Mẹ kể: Mấy hôm không ăn, Chân mỏi chẳng muốn đi, Tay rã rời, Mắt lờ đờ. Cả bọn hiểu ra: Miệng ăn là để nuôi cả nhà. Cả bọn làm lành với Miệng, lại chăm chỉ như xưa. Mẹ và bé chơi: mẹ nói “head”, bé đội mũ; mẹ nói “feet”, bé chỉ giày."
  },
  {
   "chuyen": "Thi nói tên trước video.",
   "en": {
    "v": 1,
    "t": "Lần 2 – mặc theo bài. Hôm nay bé đi giày thật theo bài hát, rồi đứng ở cửa như sắp đi chơi. Mẹ dừng nhạc ở câu “Let's go”, bé nói to “Let's go!” và bước ra một bước.",
    "b": "Let's go!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – xem tiếp 4 phút sau của bài học. Khi cô giáo hỏi, mẹ dừng và để bé trả lời trước bằng cách chỉ hoặc nói. Tập câu 我穿鞋.",
    "b": "我穿鞋。(wǒ chuān xié)"
   },
   "words": {
    "en": [
     2,
     3,
     6,
     7
    ],
    "zh": [
     2,
     3,
     5
    ]
   },
   "doi": "Nhảy đóng băng quần áo (10 phút). Mẹ bật nhạc, bé nhảy. Mẹ tắt nhạc và gọi tên một món: “Hat!” bé chạy chạm vào chiếc mũ trên giường. Gọi “鞋!”, bé chạy chạm giày. Mỗi lần gọi mẹ chỉ nói một thứ tiếng.",
   "ob": "Ông bà gọi tên món đồ, bé chạy chạm vào đúng món đó.",
   "toi": "Hát ru. Mẹ hát hoặc đọc chậm câu “Gió mùa thu mẹ ru con ngủ” khi bé đã nằm. Mẹ kể: ngày xưa bà ru mẹ như thế này. Trời lạnh thì mẹ đắp chăn, mặc áo ấm cho con. Hỏi nhỏ: “Trời lạnh con mặc gì?” – “coat”.",
   "lyr": "Gió mùa thu mẹ ru con ngủ"
  },
  {
   "chuyen": "Bé hát trước, mẹ hát sau.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật bài mặc đồ, mẹ dừng trước mỗi câu mới và giơ món đồ. Bé nói tên tiếng Anh trước khi video hát. Cuối cùng bé tự chọn 1 món, nói câu “I put on my …”.",
    "b": "I put on my hat!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – nói trước video. Bật bài, mẹ tắt tiếng ở đoạn tên món đồ. Bé nói thay: 衣服, 裤子, 帽子, 鞋. Bật tiếng lại xem có giống không.",
    "b": "你穿什么？(nǐ chuān shénme)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3,
     6
    ]
   },
   "doi": "Chọn đồ đi chơi (12 phút). Mẹ hỏi: “Hôm nay đi công viên, con mặc gì?”. Bé tự chọn trong tủ một bộ đồ, đặt lên giường theo hình người: mũ ở trên, áo, quần, tất, giày ở dưới. Bé chỉ từng món và nói tên tiếng Anh, tiếng Trung. Rồi mặc thật bộ đó đi dạo, mẹ nắm tay khi ra đường.",
   "ob": "Ông bà xem bé xếp bộ đồ thành hình người, hỏi tên từng món.",
   "toi": "Đọc sách tranh. Mẹ đọc cuốn “Những chiếc áo ấm” của Võ Quảng (NXB Kim Đồng). Hỏi bé: “Các bạn trong truyện mặc áo ấm khi nào?”. Bé chỉ vào áo trong tranh, nói “coat”. Nếu chưa có sách, mẹ kể lại chuyện Chân, Tay, Tai, Mắt, Miệng và bé nói đoạn kết."
  },
  {
   "chuyen": "Thử thách lớn và vào bếp cùng mẹ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao. Xong một trò tô 1 sao; nếu bé vừa chơi vừa nói to tên món đồ, thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần để xem lại và mặc đồ theo.",
    "b": "Well done, superstar!"
   },
   "zh": {
    "v": 0,
    "t": "Nếu bé còn muốn: bật bài 衣物歌 thêm 1 lần, bé làm động tác.",
    "b": "真好！(zhēn hǎo)"
   },
   "doi": "Vào bếp cùng mẹ: bánh mì chiếc áo (20 phút). Mẹ cắt lát bánh mì thành hình chiếc áo (dao do mẹ cầm). Bé dùng thìa phết sữa chua hoặc bơ lên. Mẹ cắt sẵn dưa chuột thành lát tròn to, bé đặt làm “cúc áo”. Vừa làm vừa gọi tên: bread – 面包, cucumber – 黄瓜, shirt – 衣服. Bé rửa tay trước và sau, không đến gần bếp nóng.",
   "ob": "Ông bà ăn thử bánh mì chiếc áo bé làm và khen.",
   "toi": "Đố vui dân gian. Mẹ đọc lại “Câu đố cái nón” nhưng lần này bé đọc cùng. Rồi bé đố lại mẹ một câu tự nghĩ: “Cái gì đi ở chân?” (giày). Mẹ trả lời bằng tiếng Anh “shoes”.",
   "lyr": "Câu đố cái nón",
   "special": "Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu"
  },
  {
   "chuyen": "Ôn tuần: đi dạo với bộ đồ tự chọn.",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn video thích nhất tuần. Mẹ đề nghị bài đi giày: xem xong là cả nhà đi giày ra ngoài luôn. Chơi lại trò web bé thích.",
    "b": "Put on your shoes. Let's go!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: bật bài mặc quần áo 2 lần, bé hát theo những từ đã nhớ.",
    "b": "我们走吧！(wǒmen zǒu ba)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Việc thật cùng gia đình: cả nhà đi dạo hoặc đi chợ. Trước khi đi, bé tự chọn mũ và giày. Trên đường, thi tìm người mặc áo đỏ, người đội mũ: ai thấy trước thì nói “red shirt!” hoặc “hat!”. Bé đi bên trong lề, nắm tay người lớn.",
   "ob": "Ông bà đi cùng, chỉ cho bé người đội mũ, bé nói “hat”.",
   "toi": "Bé kể lại chuyện. Bé tự kể “Chân, Tay, Tai, Mắt, Miệng” bằng cách chỉ vào người mình. Mẹ chỉ hỏi gợi ý. Sau đó hai mẹ con gấp quần áo đã mặc hôm nay, bé nói tên từng món."
  },
  {
   "chuyen": "Tuần Kể chuyện: mèo Pete và đôi giày trắng.",
   "en": {
    "v": 3,
    "t": "Lần 1 – dừng và đoán. Mèo Pete đi đôi giày trắng, giẫm phải nhiều thứ nên giày đổi màu. Mẹ dừng mỗi lần Pete sắp giẫm vào một thứ, hỏi: “Giày sẽ thành màu gì?”. Bé đoán bằng tiếng Việt hoặc tiếng Anh (red, blue, brown).",
    "b": "Oh no! What color are his shoes?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – kể chuyện búp bê. Xem lại phần đầu bài học. Rồi mẹ kể một chuyện nhỏ: “Búp bê sắp đi chơi, búp bê 穿衣服, 穿裤子, 穿鞋.” Mỗi câu mẹ dừng, bé mặc món đó cho búp bê.",
    "b": "娃娃穿衣服。(wáwa chuān yīfu)"
   },
   "words": {
    "en": [
     3,
     4,
     7
    ],
    "zh": [
     0,
     1,
     3,
     5
    ]
   },
   "doi": "Kể chuyện bằng tranh (12 phút). Mẹ vẽ 4 đôi giày lên giấy. Bé tô màu theo thứ tự trong truyện: trắng, đỏ, xanh, nâu. Bé chỉ từng đôi và kể: “Pete giẫm vào… nên giày thành màu…”. Dán tranh lên tường phòng bé.",
   "ob": "Ông bà nghe bé kể 4 đôi giày đổi màu, hỏi “Rồi sao nữa?”.",
   "toi": "Kể chuyện “Ngưu Lang – Chức Nữ” (phần đầu). Mẹ kể: Trên trời có nàng Chức Nữ dệt vải rất giỏi. Vải nàng dệt mềm và đẹp, may thành áo cho mọi người. Dưới trần gian có chàng Ngưu Lang chăn trâu chăm chỉ. Hai người gặp nhau, thương nhau, mải vui nên quên cả dệt vải, quên cả chăn trâu. Hỏi bé: “Không ai dệt vải thì lấy gì may áo?”."
  },
  {
   "chuyen": "Đoán quần áo bằng cả câu.",
   "en": {
    "v": 2,
    "t": "Lần 1 – đoán bằng câu. Trò đoán quần áo bị che. Mẹ dừng khi món đồ còn khuất. Bé phải nói cả câu: “It's a hat.” Đoán xong, bé chạy đi tìm đúng món đó trong tủ nhà mình.",
    "b": "Is it a dress? Yes, it is!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – hát câu dài. Bật bài mặc quần áo. Bé hát thêm chữ 穿 trước mỗi món: 穿衣服, 穿裤子. Mẹ dừng nhạc giữa chừng, bé hát tiếp.",
    "b": "穿袜子，穿鞋子。(chuān wàzi, chuān xiézi)"
   },
   "words": {
    "en": [
     0,
     2,
     5,
     6
    ],
    "zh": [
     0,
     4,
     5
    ]
   },
   "doi": "Cửa hàng quần áo (12 phút). Bé bày quần áo cũ trên ghế làm cửa hàng. Mẹ làm khách: “A hat, please.” Bé đưa mũ và nói “Here you are.” Lần hai mẹ mua bằng tiếng Trung: “我要袜子”. Khách mặc thử, bé khen “Nice!”.",
   "ob": "Ông bà làm khách mua mũ, bé đưa mũ và nói “hat”.",
   "toi": "Ca dao. Mẹ đọc chậm “Nuôi con chẳng quản chi thân”. Mẹ giải thích bằng lời dễ hiểu: hồi con bé, đêm con tè ướt, mẹ nằm chỗ ướt, để con nằm chỗ khô. Hỏi bé: “Bây giờ con lớn rồi, con tự làm được gì?”. Bé kể: tự mặc áo, tự đi giày.",
   "lyr": "Nuôi con chẳng quản chi thân"
  },
  {
   "chuyen": "Đóng vai mèo Pete.",
   "en": {
    "v": 3,
    "t": "Lần 2 – đóng vai. Xem lại truyện. Bé làm mèo Pete: đi một đôi tất trắng, bước quanh phòng hát theo. Mỗi khi Pete giẫm vào thứ gì, mẹ dừng, bé làm động tác giẫm và nói màu mới. Pete không bao giờ khóc, bé cũng nói “It's all good!”.",
    "b": "It's all good!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 4 – làm cô giáo. Xem lại đoạn bài học bé thích. Sau đó bé làm cô giáo: bé cầm từng món đồ, nói 穿 + tên, mẹ làm học trò làm theo.",
    "b": "老师，我穿好了！(lǎoshī, wǒ chuān hǎo le)"
   },
   "words": {
    "en": [
     3,
     4,
     8
    ],
    "zh": [
     1,
     2,
     5
    ]
   },
   "doi": "Gấp quần áo thi đúng (12 phút). Mẹ chỉ cách gấp áo phông đơn giản: hai tay vào giữa, gập đôi. Bé gấp 3 chiếc áo, 3 cái quần của mình, xếp vào ngăn kéo. Mỗi chiếc gấp xong, bé nói tên tiếng Anh và tiếng Trung. Mẹ đếm số món bằng tiếng Trung.",
   "ob": "Ông bà dạy bé gấp áo kiểu ông bà, bé đếm số áo đã gấp.",
   "toi": "Kể tiếp “Ngưu Lang – Chức Nữ”. Mẹ kể: Ông Trời buồn vì không ai làm việc, nên cho hai người ở hai bên dòng sông sao trên trời. Mỗi năm một lần, đàn quạ bay đến bắc thành chiếc cầu cho hai người gặp nhau. Hai người mừng quá khóc, nước mắt rơi xuống thành mưa ngâu. Hỏi bé: “Đàn quạ đã giúp gì?”."
  },
  {
   "chuyen": "Nói tên quần áo bằng hai thứ tiếng.",
   "en": {
    "v": 2,
    "t": "Lần 2 – thi nhanh và chuyển ngữ. Xem lại trò đoán. Bé phải nói tên tiếng Anh trước khi hình hiện hết. Đúng thì mẹ hỏi ngay: “Tiếng Trung là gì?”. Nói được cả hai thì được 2 sao.",
    "b": "It's a coat. Coat!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 5 – bé hát một mình. Bật nhạc và tắt tiếng. Bé hát theo trí nhớ các từ 衣服, 裤子, 帽子, 鞋. Mẹ chỉ nhắc khi bé quên.",
    "b": "你唱得真好！(nǐ chàng de zhēn hǎo)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5,
     6
    ],
    "zh": [
     0,
     1,
     2,
     3,
     6
    ]
   },
   "doi": "Một món đồ, hai cái tên (10 phút). Mẹ giấu quần áo trong một túi vải. Bé thò tay sờ, đoán món gì, rút ra. Rồi mẹ nói tiếng Anh, bé nói tiếng Trung; lượt sau đổi lại. Hết túi, bé xếp đồ vào tủ.",
   "ob": "Ông bà cho bé sờ món đồ trong túi, bé đoán tên.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố bàn chân”. Bé đoán xong, cởi tất ra, mẹ và bé so bàn chân. Hỏi: “Chân đi gì?” – “shoes, socks”. Mẹ đếm ngón chân bé bằng tiếng Anh.",
   "lyr": "Câu đố bàn chân"
  },
  {
   "chuyen": "Bé kể chuyện trước khi xem.",
   "en": {
    "v": 3,
    "t": "Lần 3 – bé kể trước. Trước khi bật video, bé cầm 4 tranh đôi giày đã tô và kể lại chuyện mèo Pete. Rồi mới xem lại để kiểm tra thứ tự màu. Cuối truyện bé nói “I love my white shoes!”.",
    "b": "I love my white shoes!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 5 – bé nói trước video. Xem lại đoạn bài học. Khi cô giáo cầm món đồ, mẹ dừng, bé nói tên tiếng Trung trước. Thêm câu dài: 这是我的帽子.",
    "b": "这是我的帽子。(zhè shì wǒ de màozi)"
   },
   "words": {
    "en": [
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Chuẩn bị đi chợ ngày mai (10 phút). Mẹ và bé vẽ danh sách đi chợ bằng tranh: 1 đôi tất, 1 chiếc mũ. Bé tập nói câu sẽ hỏi: “Socks, please.” và đếm tiền giấy to (mẹ giữ ví). Bé mặc thử đồ đi chợ ngày mai.",
   "ob": "Ông bà xem danh sách bằng tranh, hỏi bé mai đi mua gì.",
   "toi": "Bé kể lại “Ngưu Lang – Chức Nữ”. Mẹ hỏi từng bước: Chức Nữ làm nghề gì? Ngưu Lang làm gì? Ai bắc cầu? Mưa ngâu từ đâu ra? Sau đó mẹ đọc vài trang sách “Những mùa ấm êm của em” của Thu Dương (Crabit Kidbooks), hỏi: “Mùa lạnh mặc gì, mùa nóng mặc gì?”."
  },
  {
   "chuyen": "Thử thách lớn và săn từ ở chợ.",
   "en": {
    "v": 3,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu như “Put on your hat.” hoặc “I like my shoes.” mới được tô sao. Đủ sao, bé chọn 1 video yêu thích trong tuần xem lại.",
    "b": "You are amazing!"
   },
   "doi": "Săn từ ở chợ hoặc siêu thị (25 phút). Đến quầy quần áo trẻ em. Bé cầm danh sách bằng tranh, tìm từng món: socks, hat, shoes. Thấy món nào bé nói tên tiếng Anh, mẹ hỏi thêm tiếng Trung. Đếm số đôi giày trên kệ. Mua 1 đôi tất, bé tự nói “Socks, please” (mẹ nói lại với người bán bằng tiếng Việt). Bé luôn nắm tay hoặc ngồi xe đẩy, không chạy trong chợ.",
   "ob": "Ông bà dắt bé đi chợ, chỉ món đồ để bé gọi tên.",
   "toi": "Buổi tối kể chuyện ở chợ. Bé kể hôm nay thấy gì ở chợ, mua gì. Mẹ đọc lại “Câu đố bàn chân”, bé đi tất mới và đi vòng quanh phòng.",
   "lyr": "Câu đố bàn chân",
   "special": "Săn từ ở chợ hoặc siêu thị"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: bật bài mặc đồ, bé tự mặc chậm rãi, không tính điểm. Mẹ khen bé đã tự mặc được nhiều món hơn tuần đầu.",
    "b": "You can dress yourself!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: bật bài mặc quần áo 2 lần, bé hát theo.",
    "b": "我会自己穿衣服。(wǒ huì zìjǐ chuān yīfu)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     4
    ],
    "zh": [
     0,
     1,
     3,
     4
    ]
   },
   "doi": "Việc thật cùng gia đình: bé giúp mẹ phơi hoặc gấp quần áo cả nhà. Bé tìm tất của bố, áo của mẹ, gọi tên tiếng Anh, tiếng Trung. Phơi ở chỗ thấp, mẹ đứng cạnh.",
   "ob": "Ông bà gấp quần áo cùng bé, bé đưa từng món và nói tên.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại câu ca dao “Nuôi con chẳng quản chi thân”, ôm bé và nói hôm nay bé đã giúp mẹ gấp quần áo. Bé chọn món đồ ngày mai sẽ mặc, để sẵn đầu giường. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Nuôi con chẳng quản chi thân",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[112] = {
 "sub": "Nắng, mưa, nóng, lạnh",
 "vocab": {
  "en": [
   [
    "sunny",
    "☀️",
    "trời nắng",
    false
   ],
   [
    "rainy",
    "🌧️",
    "trời mưa",
    false
   ],
   [
    "cloudy",
    "☁️",
    "trời nhiều mây",
    false
   ],
   [
    "windy",
    "🌬️",
    "trời có gió",
    false
   ],
   [
    "hot",
    "🥵",
    "nóng",
    false
   ],
   [
    "cold",
    "🥶",
    "lạnh",
    false
   ],
   [
    "umbrella",
    "☂️",
    "cái ô",
    false
   ],
   [
    "rainbow",
    "🌈",
    "cầu vồng",
    false
   ],
   [
    "splash",
    "💦",
    "té nước, bì bõm",
    true
   ]
  ],
  "zh": [
   [
    "晴天",
    "qíngtiān",
    "trời nắng",
    "☀️"
   ],
   [
    "下雨",
    "xià yǔ",
    "trời mưa",
    "🌧️"
   ],
   [
    "热",
    "rè",
    "nóng",
    "🥵"
   ],
   [
    "冷",
    "lěng",
    "lạnh",
    "🥶"
   ],
   [
    "刮风",
    "guā fēng",
    "có gió",
    "🌬️"
   ],
   [
    "雨伞",
    "yǔsǎn",
    "cái ô",
    "☂️"
   ],
   [
    "天气",
    "tiānqì",
    "thời tiết",
    "🌤️"
   ]
  ],
  "en_phr": [
   [
    "It's sunny today.",
    "sunny",
    "☀️"
   ],
   [
    "It's rainy. Take an umbrella.",
    "umbrella",
    "☂️"
   ],
   [
    "I'm cold.",
    "cold",
    "🥶"
   ],
   [
    "How's the weather?",
    "weather",
    "🌤️"
   ]
  ],
  "zh_phr": [
   [
    "今天下雨。",
    "下雨",
    "jīntiān xià yǔ",
    "hôm nay trời mưa",
    "🌧️"
   ],
   [
    "我很热。",
    "热",
    "wǒ hěn rè",
    "con nóng quá",
    "🥵"
   ],
   [
    "今天天气怎么样？",
    "天气",
    "jīntiān tiānqì zěnmeyàng",
    "hôm nay thời tiết thế nào?",
    "🌤️"
   ]
  ],
  "seq": [
   [
    "☀️",
    "sunny",
    "晴天"
   ],
   [
    "☁️",
    "cloudy",
    "多云"
   ],
   [
    "🌧️",
    "rainy",
    "下雨"
   ],
   [
    "🌈",
    "rainbow",
    "彩虹"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "How's The Weather? – bài hát hỏi thời tiết",
    "u": "https://www.youtube.com/watch?v=rD6FRDd9Hew",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Weather Sing-Along Show cùng cô Caitie – xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=DJOiSbVHcpg",
    "kind": "explainer",
    "ch": "Super Simple (official embed on supersimple.com)"
   },
   {
    "t": "Rain Rain Go Away – mưa ơi đi đi",
    "u": "https://www.youtube.com/watch?v=Bkuy8OuqAYI",
    "kind": "song_action",
    "ch": "Little Baby Bum"
   },
   {
    "t": "Mr. Golden Sun – ông mặt trời vàng",
    "u": "https://www.youtube.com/watch?v=hlzvrEfyL2Y",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "天气歌 – bài hát 今天天气怎么样？",
    "u": "https://www.youtube.com/watch?v=ML_h4DdThAw",
    "kind": "song_action",
    "ch": "Coolong Chinese"
   },
   {
    "t": "四季歌 – bài hát bốn mùa (nóng, lạnh)",
    "u": "https://www.youtube.com/watch?v=MDyZ6XzWFCE",
    "kind": "song_action",
    "ch": "GIGGLING PANDA",
    "min": 1.7
   },
   {
    "t": "衣物歌 – bài hát quần áo, dùng lại để chọn đồ theo thời tiết",
    "u": "https://www.youtube.com/watch?v=PWbYLxQfTfc",
    "kind": "song_action",
    "ch": "Cool Panda Chinese Learning"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Khám phá: mưa, nắng, gió từ đâu ra?",
   "toi_vi": [
    {
     "t": "Chuồn chuồn bay thấp thì mưa",
     "type": "ca_dao",
     "lyr": "Chuồn chuồn bay thấp thì mưa\nBay cao thì nắng, bay vừa thì râm"
    },
    {
     "t": "Câu đố cái ô",
     "type": "cau_do",
     "lyr": "Cầm chiếc cán bật lên\nNấm xòe hoa phía trên\nChe trời mưa cho bé\nChe cả đầu của mẹ\nCái gì thế, bé ơi?"
    }
   ],
   "book_vi": {
    "t": "Đi chợ ngày mưa (bản tiếng Việt)",
    "author": "Tamami Kowase, Nobuko Akisato",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần 2 – Thử thách: bé làm người dự báo thời tiết",
   "toi_vi": [
    {
     "t": "Lạy trời mưa xuống",
     "type": "dong_dao",
     "lyr": "Lạy trời mưa xuống\nLấy nước tôi uống\nLấy ruộng tôi cày\nLấy đầy bát cơm\nLấy rơm đun bếp\nLạy ông nắng lên\nCho trẻ con chơi\nCho già bắt rận\nCho tôi đi cày"
    },
    {
     "t": "Câu đố mặt trời, sấm, mưa",
     "type": "cau_do",
     "lyr": "Không sơn mà đỏ\nKhông gõ mà kêu\nKhông khều mà rụng"
    },
    {
     "t": "Ếch dưới ao",
     "type": "ve",
     "lyr": "Ếch ở dưới ao\nVừa ngớt mưa rào\nNhảy ra bì bõm\nẾch kêu \"ộp ộp\"\nẾch kêu \"ặp ặp\"\nThấy bác đi câu\nRủ nhau trốn mau\nẾch kêu \"ộp ộp\"\nẾch kêu \"ặp ặp\"."
    }
   ],
   "book_vi": {
    "t": "Ngày hè chói nắng (bản tiếng Việt)",
    "author": "Tamami Kowase, Nobuko Akisato",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được sunny, rainy, cloudy, windy khi nhìn ra cửa sổ"
  ],
  [
   "en",
   "Trả lời được câu “How's the weather?” bằng “It's …”"
  ],
  [
   "zh",
   "Nói được 晴天 qíngtiān, 下雨 xià yǔ, 热 rè, 冷 lěng"
  ],
  [
   "zh",
   "Nói được câu 今天下雨 hoặc 我很热 đúng lúc"
  ],
  [
   "vi",
   "Đọc được câu ca dao chuồn chuồn và giải thích bằng lời của mình"
  ],
  [
   "td",
   "Kể được trời nắng → mây → mưa → cầu vồng theo thứ tự"
  ],
  [
   "td",
   "Chọn đúng quần áo cho trời nóng và trời lạnh"
  ],
  [
   "vd",
   "Làm được động tác mưa rơi, gió thổi, nắng chiếu theo bài hát"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Khám phá: nhìn trời hôm nay.",
   "en": {
    "v": 0,
    "t": "Lần 1 – nhìn cửa sổ rồi xem. Trước khi bật video, mẹ và bé ra cửa sổ nhìn trời. Rồi bật bài hát. Mỗi khi bài nói một kiểu thời tiết, mẹ dừng và hỏi: “Ngoài trời có giống không?”. Bé chỉ hình đúng với trời hôm nay.",
    "b": "How's the weather today?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Bài hát hỏi 今天天气怎么样？. Mẹ dừng mỗi khi hiện mặt trời hay mưa, bé chỉ vào hình. Mẹ nhắc theo video 晴天, 下雨. Hôm nay con học sunny, tiếng Trung là 晴天.",
    "b": "今天晴天。(jīntiān qíngtiān)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     6
    ]
   },
   "doi": "Lịch thời tiết của bé (12 phút). Mẹ kẻ một tờ giấy 7 ô cho 7 ngày. Bé vẽ hình thời tiết hôm nay vào ô đầu: mặt trời, mây hoặc giọt mưa. Mẹ viết từ tiếng Anh bên dưới. Mỗi sáng trong tuần, bé nhìn trời và vẽ tiếp một ô.",
   "ob": "Mỗi sáng ông bà dắt bé ra cửa nhìn trời, hỏi “Nắng hay mưa?”.",
   "toi": "Kể chuyện “Cóc kiện Trời” (phần đầu). Mẹ kể: Ngày xưa trời không mưa rất lâu. Ruộng khô nứt, cây héo, các con vật khát nước. Chú Cóc bé tí quyết định lên trời hỏi ông Trời vì sao không cho mưa. Đi đường, Cóc rủ thêm Cua, Gấu, Cọp, Ong và Cáo đi cùng. Hỏi bé: “Nếu con là Cóc, con rủ ai đi cùng?”."
  },
  {
   "chuyen": "Xem cô Caitie hát về thời tiết.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm theo. Chỉ xem đoạn đầu khoảng 5 phút. Cô Caitie hát và làm động tác cho từng kiểu thời tiết. Bé đứng dậy làm theo: mưa thì ngón tay rơi xuống, gió thì lắc người, nắng thì hai tay vòng tròn trên đầu.",
    "b": "It's windy! Whoosh!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – nghe nóng và lạnh. Bài bốn mùa ngắn khoảng 2 phút. Mẹ chú ý hai từ 热 (nóng) và 冷 (lạnh). Khi nghe 热, bé quạt tay như đang nóng; nghe 冷, bé ôm người run run.",
    "b": "好冷啊！(hǎo lěng a)"
   },
   "words": {
    "en": [
     2,
     3,
     4,
     5
    ],
    "zh": [
     2,
     3,
     4
    ]
   },
   "doi": "Thí nghiệm nóng – lạnh (12 phút). Mẹ chuẩn bị 2 cốc nhựa: một cốc nước ấm vừa tay (mẹ pha, thử trước), một cốc nước có đá. Bé chạm ngón tay vào từng cốc, nói “hot” hay “cold”, rồi nói 热 hay 冷. Mẹ ngồi cạnh suốt, không để bé uống đá cục. Lau khô bàn sau khi chơi.",
   "ob": "Ông bà cho bé sờ cốc nước ấm và cốc nước mát, hỏi “nóng hay lạnh?”.",
   "toi": "Ca dao. Mẹ đọc câu “Chuồn chuồn bay thấp thì mưa”. Giải thích: khi sắp mưa, chuồn chuồn hay bay thấp. Mẹ và bé làm chuồn chuồn: bay thấp gần sàn là mưa, bay cao trên đầu là nắng, bay ngang người là râm. Đọc lại, bé làm động tác theo.",
   "lyr": "Chuồn chuồn bay thấp thì mưa"
  },
  {
   "chuyen": "Làm mưa trong cốc.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại bài hỏi thời tiết. Mỗi kiểu thời tiết một động tác cố định: sunny vòng tay tròn, rainy ngón tay rơi, cloudy hai tay ôm đám mây, windy lắc người. Mẹ dừng nhạc, gọi tên, bé làm động tác.",
    "b": "It's rainy. Pitter patter!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại bài hát tiếng Trung, dùng đúng động tác như tiếng Anh: 晴天 vòng tay tròn, 下雨 ngón tay rơi. Một kiểu trời, hai tên gọi, cùng một động tác.",
    "b": "下雨了！(xià yǔ le)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     8
    ],
    "zh": [
     0,
     1,
     4
    ]
   },
   "doi": "Thí nghiệm mưa trong cốc (15 phút). Mẹ rót nước vào một cốc nhựa trong, đặt một miếng bông gòn to bằng nắm tay lên mặt nước làm “đám mây”. Bé dùng thìa nhỏ giọt nước có pha màu thực phẩm lên mây. Mây nặng dần rồi “mưa” màu rơi xuống. Mẹ ngồi cạnh suốt, lau khô sàn. Bé nói “cloud”, “rain”, “下雨”.",
   "ob": "Ông bà xem bé làm mưa trong cốc, hỏi “Mưa rơi chưa?”.",
   "toi": "Kể tiếp “Cóc kiện Trời”. Mẹ kể: Lên đến cửa nhà Trời, Cóc nghiến răng đánh trống ầm ầm. Ông Trời sai gà ra mổ Cóc thì Cáo vồ gà. Sai chó ra thì Gấu đuổi chó. Sai thần sét thì Ong bay ra đốt. Mẹ kể như trò đuổi bắt vui, bé làm Ong vo ve. Hỏi: “Cóc bé thế mà có nhiều bạn giúp, con nhỉ?”."
  },
  {
   "chuyen": "Gió từ đâu ra?",
   "en": {
    "v": 1,
    "t": "Lần 2 – bé hát cùng cô. Xem lại đoạn đầu. Lần này bé cầm một chiếc ô (gập, không mở trong nhà) hoặc một chiếc mũ, đến kiểu thời tiết nào thì giơ đồ phù hợp: mưa giơ ô, nắng giơ mũ.",
    "b": "Take your umbrella!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – chọn đồ theo mùa. Xem lại bài bốn mùa. Mẹ bày áo khoác và áo phông. Nghe 热, bé giơ áo phông; nghe 冷, bé giơ áo khoác.",
    "b": "冷了，穿外套。(lěng le, chuān wàitào)"
   },
   "words": {
    "en": [
     3,
     4,
     5,
     6
    ],
    "zh": [
     2,
     3,
     4,
     5
    ]
   },
   "doi": "Thí nghiệm gió (12 phút). Mẹ gấp một chiếc quạt giấy cho bé. Đặt vài mẩu giấy vụn to bằng bàn tay trên bàn. Bé quạt mạnh, giấy bay; quạt nhẹ, giấy nhúc nhích. Mẹ nói “windy”, “刮风”. Thử thổi bằng miệng: hơi thở cũng là gió nhỏ. Thu dọn giấy vào thùng rác.",
   "ob": "Ông bà quạt nan cho bé xem giấy bay, bé nói “windy”.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố cái ô”. Bé đoán xong, mẹ và bé cầm ô thật ra ban công hoặc sân (mở ô ngoài trời). Bé đứng dưới ô, mẹ hỏi: “Is it rainy?”. Bé trả lời theo trời thật.",
   "lyr": "Câu đố cái ô"
  },
  {
   "chuyen": "Bé nói thời tiết trước video.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật bài, mẹ dừng trước mỗi kiểu thời tiết và chỉ vào lịch thời tiết bé vẽ. Bé nói tên trước khi video hát. Cuối cùng bé trả lời câu “How's the weather today?” bằng “It's …”.",
    "b": "It's cloudy today."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé trả lời trước. Mẹ tắt tiếng ở câu hỏi, mẹ tự hỏi bé 今天天气怎么样？. Bé nhìn ra cửa sổ và trả lời 晴天 hoặc 下雨 trước khi video trả lời.",
    "b": "今天天气怎么样？(jīntiān tiānqì zěnmeyàng)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3,
     6
    ]
   },
   "doi": "Bóng nắng (12 phút). Nếu trời nắng, ra sân lúc sáng sớm hoặc chiều mát (không ra lúc nắng gắt), đội mũ. Bé đứng, mẹ chỉ cái bóng của bé. Bé vẫy tay, bóng vẫy theo. Nói “sunny” và “晴天”. Nếu trời mưa, đứng trong nhà nhìn mưa và đếm giọt mưa trên kính.",
   "ob": "Ông bà dẫn bé ra sân chiều mát, chỉ cái bóng của bé.",
   "toi": "Đọc sách tranh. Mẹ đọc “Đi chợ ngày mưa” (Tamami Kowase, Nobuko Akisato, NXB Kim Đồng). Mỗi trang hỏi: “Trời thế nào? Bạn nhỏ mặc gì?”. Bé chỉ vào ô, áo mưa và nói tiếng Anh."
  },
  {
   "chuyen": "Thử thách lớn và pháo đài chăn gối.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ chấm sao: xong một trò được 1 sao, làm động tác thời tiết khi nghe từ được thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần để xem lại và làm động tác theo.",
    "b": "Three stars! Hooray!"
   },
   "zh": {
    "v": 0,
    "t": "Nếu bé còn hứng: hát lại bài 天气歌 một lượt.",
    "b": "太好了！(tài hǎo le)"
   },
   "doi": "Xây pháo đài chăn gối (25 phút). Cả nhà dùng ghế, chăn, gối dựng một “ngôi nhà tránh mưa” trong phòng khách. Mẹ bật tiếng mưa trên điện thoại, bé nói “It's rainy!”. Vào trong pháo đài, mẹ bật đèn pin to, kể lại chuyện “Cóc kiện Trời”. Bé dùng chăn làm mây, ngón tay làm mưa. Không đè gối lên mặt bé, để chỗ chui ra rộng.",
   "ob": "Ông bà ngồi trong pháo đài nghe bé kể chuyện chú Cóc.",
   "toi": "Kể nốt “Cóc kiện Trời” trong pháo đài. Mẹ kể: Ông Trời thấy Cóc bé mà dũng cảm, có bạn bè giúp đỡ, liền mời Cóc vào nói chuyện. Trời hứa: “Từ nay, hễ nghe Cóc nghiến răng là ta cho mưa ngay.” Mưa đổ xuống, cây cối xanh lại. Mẹ và bé cùng nói: “Rain, rain! 下雨了!”.",
   "special": "Xây pháo đài chăn gối, kể chuyện trong pháo đài"
  },
  {
   "chuyen": "Ôn tuần: ra ngoài xem trời thật.",
   "en": {
    "v": 0,
    "t": "Ôn: bé chọn video thích nhất tuần. Xem xong, cả nhà ra ban công hoặc cửa sổ, bé làm “người xem thời tiết”. Chơi lại trò web bé thích.",
    "b": "Let's look at the sky!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: hát lại bài 天气歌, bé trả lời câu hỏi theo trời thật.",
    "b": "今天刮风。(jīntiān guā fēng)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     4,
     6
    ]
   },
   "doi": "Việc thật cùng gia đình: cả nhà đi dạo công viên. Trước khi đi, bé nhìn trời và chọn mang mũ hay ô. Trên đường, bé chỉ mây, nắng, cây lay vì gió, nói tên tiếng Anh, tiếng Trung. Đi trên vỉa hè, nắm tay bé khi qua đường.",
   "ob": "Ông bà dắt bé đi dạo, hỏi “Hôm nay trời nắng hay râm?”.",
   "toi": "Bé kể lại chuyện. Bé tự kể “Cóc kiện Trời”, mẹ hỏi gợi ý: Vì sao Cóc lên trời? Ai đi cùng? Trời hứa gì? Rồi bé xem lịch thời tiết cả tuần, đếm có mấy ngày nắng, mấy ngày mưa."
  },
  {
   "chuyen": "Tuần Thử thách: ai đoán thời tiết nhanh hơn?",
   "en": {
    "v": 2,
    "t": "Lần 1 – hát và đuổi mưa. Bài “Mưa ơi đi đi” ngắn. Bé ngọ nguậy ngón tay làm mưa, rồi vẫy tay “go away”. Lần hai, mẹ thi với bé: ai vẫy tay “go away” đúng lúc trước thì được 1 sao.",
    "b": "Rain, rain, go away!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – thi trả lời. Bật bài thời tiết. Mẹ dừng ở mỗi hình. Ai nói tên tiếng Trung trước (mẹ hay bé) được 1 sao. Mẹ cố tình chậm để bé thắng.",
    "b": "我先说！(wǒ xiān shuō)"
   },
   "words": {
    "en": [
     1,
     6,
     8
    ],
    "zh": [
     1,
     5
    ]
   },
   "doi": "Đố thời tiết có tính điểm (12 phút). Mẹ làm 4 thẻ tranh: mặt trời, mây, mưa, gió. Mẹ diễn tả bằng động tác không nói, bé đoán bằng tiếng Anh. Đúng được 1 sao. Đổi vai: bé diễn, mẹ đoán bằng tiếng Trung. Đủ 6 sao thì được chọn một bài hát để cả nhà nhảy.",
   "ob": "Ông bà diễn động tác mưa rơi, bé đoán “rainy”.",
   "toi": "Kể chuyện “Sơn Tinh, Thủy Tinh” (phần đầu). Mẹ kể: Vua Hùng có cô con gái xinh đẹp là Mị Nương. Có hai chàng đến hỏi cưới: Sơn Tinh ở núi, vẫy tay là đồi núi mọc lên; Thủy Tinh ở biển, gọi gió là có gió, hô mưa là có mưa. Vua bảo: ai mang lễ vật đến trước thì được cưới. Hỏi bé: “Con đoán ai đến trước?”."
  },
  {
   "chuyen": "Cô Caitie và câu hỏi thời tiết.",
   "en": {
    "v": 1,
    "t": "Lần 3 – trả lời cả câu. Xem lại đoạn đầu chương trình của cô Caitie. Mỗi khi cô hỏi về thời tiết, mẹ dừng, bé trả lời cả câu “It's sunny.” hoặc “It's rainy.”. Nói đủ câu được 1 sao.",
    "b": "It's snowy? No! It's sunny!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – nói câu ngắn. Xem lại bài bốn mùa. Sau bài, mẹ đóng vai nóng quá, nói 我很热; bé đưa quạt. Mẹ đóng vai lạnh, bé đưa áo khoác và nói 冷.",
    "b": "我很冷。(wǒ hěn lěng)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "zh": [
     2,
     3,
     6
    ]
   },
   "doi": "Bé là người dự báo thời tiết (12 phút). Mẹ dán tranh mặt trời, mây, mưa lên tường. Bé cầm “micro” là cái thìa gỗ, đứng trước tường như trên tivi. Bé chỉ tranh và nói: “Today is sunny.” rồi nói tiếng Trung “今天晴天”. Mẹ quay lại để mai bé xem.",
   "ob": "Ông bà ngồi xem bé làm “người dẫn thời tiết” và vỗ tay.",
   "toi": "Đồng dao. Mẹ đọc bài “Lạy trời mưa xuống”. Hỏi bé: “Mưa xuống để làm gì?” – lấy nước uống, cày ruộng, có cơm ăn. Rồi đến câu “Lạy ông nắng lên”, hỏi: “Nắng lên để làm gì?” – cho trẻ con chơi. Bé đọc theo câu “Lạy trời mưa xuống” và “Lạy ông nắng lên”.",
   "lyr": "Lạy trời mưa xuống"
  },
  {
   "chuyen": "Ông mặt trời vàng.",
   "en": {
    "v": 3,
    "t": "Lần 1 – hát gọi nắng. Bài “Mr. Golden Sun” gọi ông mặt trời chiếu xuống. Bé làm mặt trời: hai tay vòng tròn trên đầu, đến câu “shine down on me” thì xoè tay xuống. Mẹ dừng nhạc, bé đứng im như mặt trời.",
    "b": "Mr. Golden Sun, please shine on me!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – chọn đồ theo trời. Bật bài quần áo. Mẹ nói một kiểu trời bằng tiếng Trung: 下雨 hoặc 热. Bé chọn món đồ phù hợp: trời mưa thì giơ ô, trời nóng thì giơ mũ. Hôm trước con học hot, cold rồi, hôm nay dùng cả hai thứ tiếng.",
    "b": "下雨了，带雨伞。(xià yǔ le, dài yǔsǎn)"
   },
   "words": {
    "en": [
     0,
     4,
     6,
     7
    ],
    "zh": [
     0,
     1,
     2,
     5
    ]
   },
   "doi": "Ai nhanh hơn: mặc đồ theo thời tiết (12 phút). Mẹ bày áo khoác, mũ, ô (gập), áo phông. Mẹ hô tiếng Anh “It's cold!”, bé chạy lấy áo khoác mặc vào. “It's sunny!”, bé đội mũ. Mẹ đếm 1 đến 10, bé làm kịp thì được sao. Lượt sau mẹ hô bằng tiếng Trung.",
   "ob": "Ông bà hô “Trời lạnh!”, bé chạy lấy áo khoác.",
   "toi": "Kể tiếp “Sơn Tinh, Thủy Tinh”. Mẹ kể: Sơn Tinh đến trước, rước Mị Nương về núi. Thủy Tinh đến sau, giận lắm, hô mưa gọi gió, cho nước dâng lên. Nước dâng đến đâu, Sơn Tinh làm núi cao lên đến đó. Mẹ và bé chơi: mẹ giơ tay làm nước dâng, bé chồng gối làm núi cao hơn. Cuối cùng nước rút đi."
  },
  {
   "chuyen": "Mẹ nói sai, bé sửa.",
   "en": {
    "v": 0,
    "t": "Lần 4 – bé sửa mẹ. Bật bài hỏi thời tiết, tắt tiếng. Mẹ chỉ hình mưa và cố tình nói “It's sunny!”. Bé sửa: “No! It's rainy.” Rồi bật tiếng xem lại để kiểm tra.",
    "b": "No, it's rainy!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 5 – chuyển ngữ. Bật bài thời tiết, tắt tiếng. Mẹ chỉ hình, bé nói cả hai thứ tiếng: sunny – 晴天, rainy – 下雨. Bật tiếng xem lại, đếm số cặp bé nói đúng.",
    "b": "晴天是sunny。(qíngtiān shì sunny)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   "doi": "Hai thứ tiếng, một bầu trời (10 phút). Mẹ úp 6 thẻ thời tiết. Bé lật một thẻ. Nếu mẹ hỏi tiếng Anh “What's this?”, bé trả lời tiếng Trung; mẹ hỏi tiếng Trung “这是什么？”, bé trả lời tiếng Anh. Đúng thì giữ thẻ.",
   "ob": "Ông bà lật thẻ thời tiết, bé nói tên bằng tiếng Anh.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố mặt trời, sấm, mưa”. Câu này đố 3 thứ cùng lúc: không sơn mà đỏ, không gõ mà kêu, không khều mà rụng. Mẹ đọc từng dòng, bé đoán từng thứ. Gợi ý: thứ đỏ ở trên trời, thứ kêu ầm ầm, thứ rơi lộp độp.",
   "lyr": "Câu đố mặt trời, sấm, mưa"
  },
  {
   "chuyen": "Tập diễn cho ngày hoá trang.",
   "en": {
    "v": 3,
    "t": "Lần 2 – bé hát trước. Bật bài ông mặt trời. Mẹ dừng trước câu “Mr. Golden Sun”, bé hát trước rồi mới bấm tiếp. Bé tự đặt câu mới: “Mr. Rain, please go away!”.",
    "b": "Please shine down on me!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 4 – bé hát trước. Xem lại bài bốn mùa. Mẹ dừng trước 热 và 冷, bé nói trước và làm động tác.",
    "b": "夏天热，冬天冷。(xiàtiān rè, dōngtiān lěng)"
   },
   "words": {
    "en": [
     0,
     4,
     5,
     7
    ],
    "zh": [
     2,
     3,
     6
    ]
   },
   "doi": "Làm đồ hoá trang (15 phút). Chuẩn bị cho ngày mai: bé chọn làm “ông mặt trời” hoặc “đám mây mưa”. Mặt trời: mẹ cắt vòng giấy vàng đội đầu, bé tô tia nắng. Mây: mẹ dán bông gòn lên một tờ bìa, bé vẽ giọt mưa xanh. Dây đeo bằng ruy băng ngắn, buộc lỏng.",
   "ob": "Ông bà giúp bé tô màu vòng mặt trời.",
   "toi": "Đọc sách tranh. Mẹ đọc “Ngày hè chói nắng” (Tamami Kowase, Nobuko Akisato, NXB Kim Đồng). Hỏi bé: “Trời nóng thì làm gì cho mát?”. Bé trả lời: đội mũ, uống nước, ngồi bóng râm. Mẹ nói “It's hot. Drink water.”"
  },
  {
   "chuyen": "Thử thách lớn và ngày hoá trang.",
   "en": {
    "v": 3,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu “It's …” về thời tiết mới được tô sao. Đủ sao, bé chọn 1 video yêu thích để xem lại trong bộ đồ hoá trang.",
    "b": "You are a weather star!"
   },
   "zh": {
    "v": 0,
    "t": "Thêm nếu bé muốn: hát bài 天气歌 trong bộ đồ hoá trang.",
    "b": "我是太阳！(wǒ shì tàiyáng)"
   },
   "doi": "Ngày hoá trang (20 phút). Bé đội vòng mặt trời hoặc đeo tấm mây đã làm, đóng vai nhân vật trong video: ông mặt trời vàng hoặc cô Caitie dẫn chương trình thời tiết. Bé đứng trước tường tranh thời tiết, hát một đoạn “Mr. Golden Sun” và nói “I'm the sun. It's sunny!” rồi “我是太阳”. Mẹ quay clip, cả nhà vỗ tay.",
   "ob": "Ông bà xem bé hoá trang ông mặt trời và hỏi “Hôm nay nắng không?”.",
   "toi": "Vè dân gian. Mẹ đọc bài “Ếch dưới ao”. Đến “ộp ộp”, “ặp ặp” thì bé kêu thật to. Bé làm ếch nhảy bì bõm sau cơn mưa. Mẹ hỏi: “Vừa ngớt mưa rào thì ếch làm gì?”.",
   "lyr": "Ếch dưới ao",
   "special": "Ngày hoá trang: bé đóng vai nhân vật trong video"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 2,
    "t": "Ôn nhẹ: hát lại “Rain Rain Go Away”, không tính điểm. Xem lại clip bé làm người dự báo thời tiết.",
    "b": "Come again another day!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: hát lại bài thời tiết, bé trả lời theo trời hôm nay.",
    "b": "今天天气很好。(jīntiān tiānqì hěn hǎo)"
   },
   "words": {
    "en": [
     0,
     1,
     4,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Việc thật cùng gia đình: bé giúp mẹ tưới cây ngoài ban công hoặc rửa chậu cây, có mẹ đứng cạnh. Bé nói “rain” khi tưới nước: “I make rain for the plants.” Xong, bé vẽ ô cuối cùng trên lịch thời tiết.",
   "ob": "Ông bà tưới cây cùng bé, bé nói “water, rain”.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại “Câu đố cái ô” và “Lạy trời mưa xuống”, bé chọn bài thích hơn để đọc cùng. Mẹ và bé nhìn lại lịch thời tiết cả vòng. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Lạy trời mưa xuống",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[113] = {
 "sub": "Phòng khách, phòng ngủ, bếp",
 "vocab": {
  "en": [
   [
    "house",
    "🏠",
    "ngôi nhà",
    false
   ],
   [
    "bed",
    "🛏️",
    "cái giường",
    false
   ],
   [
    "table",
    "🍽️",
    "cái bàn",
    false
   ],
   [
    "chair",
    "🪑",
    "cái ghế",
    false
   ],
   [
    "door",
    "🚪",
    "cửa ra vào",
    false
   ],
   [
    "window",
    "🪟",
    "cửa sổ",
    false
   ],
   [
    "sofa",
    "🛋️",
    "ghế sofa",
    false
   ],
   [
    "kitchen",
    "🍳",
    "nhà bếp",
    false
   ],
   [
    "sleep",
    "😴",
    "ngủ",
    true
   ],
   [
    "open",
    "🔓",
    "mở ra",
    true
   ]
  ],
  "zh": [
   [
    "家",
    "jiā",
    "nhà",
    "🏠"
   ],
   [
    "床",
    "chuáng",
    "cái giường",
    "🛏️"
   ],
   [
    "桌子",
    "zhuōzi",
    "cái bàn",
    "🍽️"
   ],
   [
    "椅子",
    "yǐzi",
    "cái ghế",
    "🪑"
   ],
   [
    "门",
    "mén",
    "cửa",
    "🚪"
   ],
   [
    "开门",
    "kāi mén",
    "mở cửa",
    "🔓"
   ],
   [
    "睡觉",
    "shuìjiào",
    "đi ngủ",
    "😴"
   ]
  ],
  "en_phr": [
   [
    "This is my house.",
    "house",
    "🏠"
   ],
   [
    "Open the door, please.",
    "door",
    "🚪"
   ],
   [
    "Sit on the chair.",
    "chair",
    "🪑"
   ],
   [
    "Time for bed.",
    "bed",
    "🛏️"
   ]
  ],
  "zh_phr": [
   [
    "这是我的家。",
    "家",
    "zhè shì wǒ de jiā",
    "đây là nhà của con",
    "🏠"
   ],
   [
    "请开门。",
    "开门",
    "qǐng kāi mén",
    "mở cửa ra nhé",
    "🚪"
   ],
   [
    "坐在椅子上。",
    "椅子",
    "zuò zài yǐzi shang",
    "ngồi lên ghế",
    "🪑"
   ]
  ],
  "seq": [
   [
    "🍳",
    "cook in the kitchen",
    "做饭"
   ],
   [
    "🍽️",
    "eat at the table",
    "吃饭"
   ],
   [
    "🛁",
    "take a bath",
    "洗澡"
   ],
   [
    "🛏️",
    "go to bed",
    "睡觉"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Ten In The Bed – mười bạn trên giường (đếm ngược)",
    "u": "https://www.youtube.com/watch?v=TdDypyS_5zE",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Clean Up Song – bài hát dọn dẹp",
    "u": "https://www.youtube.com/watch?v=SFE0mMWbA-Y",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Where's Spot? – chó Spot trốn ở đâu? (tác giả Eric Hill đọc)",
    "u": "https://www.youtube.com/watch?v=jD7hvWtb4ns",
    "kind": "story",
    "ch": "Fun with Spot (official)"
   }
  ],
  "zh": [
   {
    "t": "房间歌 – bài hát các phòng trong nhà",
    "u": "https://www.youtube.com/watch?v=iHZyyTA7CzE",
    "kind": "song_action",
    "ch": "Mr Sun Mandarin"
   },
   {
    "t": "小兔子乖乖 – thỏ con ngoan, không mở cửa cho người lạ",
    "u": "https://www.youtube.com/watch?v=rFrQMUx_OJs",
    "kind": "song_action",
    "ch": "貝瓦兒歌 Beva Kids Song (贝瓦儿歌)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Ca nhạc: hát khắp các phòng",
   "toi_vi": [
    {
     "t": "Câu đố cái ghế",
     "type": "cau_do",
     "lyr": "Có chân mà chẳng biết đi\nQuanh năm suốt tháng đứng ì một nơi?"
    },
    {
     "t": "Câu đố cái thìa",
     "type": "cau_do",
     "lyr": "Tôi thường làm bạn\nVới em bé thôi\nKhi ăn cầm tôi\nDễ hơn cầm đũa\nLà cái gì?"
    },
    {
     "t": "Ngó lên nuộc lạt mái nhà",
     "type": "ca_dao",
     "lyr": "Ngó lên nuộc lạt mái nhà\nBao nhiêu nuộc lạt nhớ ông bà bấy nhiêu"
    }
   ],
   "book_vi": {
    "t": "Góc sân và khoảng trời (thơ)",
    "author": "Trần Đăng Khoa (minh họa: Phan Hà)",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần 2 – Kể chuyện: Spot trốn ở đâu?",
   "toi_vi": [
    {
     "t": "Câu đố cái gương",
     "type": "cau_do",
     "lyr": "Chẳng phải ảnh, chẳng phải hình\nMà ai cũng thấy mình ở trong?"
    },
    {
     "t": "Ta về ta tắm ao ta",
     "type": "ca_dao",
     "lyr": "Ta về ta tắm ao ta\nDù trong dù đục ao nhà vẫn hơn"
    }
   ],
   "book_vi": {
    "t": "Bé tập kể chuyện – Mỗi tuần một câu chuyện",
    "author": "(chưa rõ tên tác giả)",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được bed, table, chair, door, window khi chỉ đồ thật trong nhà"
  ],
  [
   "en",
   "Làm đúng lệnh “Open the door.”, “Sit on the chair.”"
  ],
  [
   "zh",
   "Nói được 家 jiā, 床 chuáng, 桌子 zhuōzi, 椅子 yǐzi, 门 mén"
  ],
  [
   "zh",
   "Nói được câu 这是我的家 hoặc 请开门"
  ],
  [
   "vi",
   "Đọc và đoán được câu đố cái ghế, cái thìa"
  ],
  [
   "td",
   "Nói được các vị trí in, under, behind khi tìm đồ"
  ],
  [
   "xh",
   "Biết không mở cửa cho người lạ khi chưa hỏi bố mẹ"
  ],
  [
   "xh",
   "Tự cất đồ chơi về đúng chỗ sau khi chơi"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Ca nhạc: ngôi nhà và cái giường.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và đếm. Bài có 10 bạn nằm trên một cái giường, mỗi lần một bạn lăn xuống. Mẹ dừng sau mỗi đoạn, chỉ vào giường trên màn hình và hỏi: “Còn mấy bạn?”. Bé đếm bằng ngón tay. Mẹ nói “bed” mỗi khi thấy cái giường.",
    "b": "Look, a big bed!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Bài hát đi qua từng phòng trong nhà. Mẹ dừng mỗi khi hiện giường, cửa, bàn, bé chỉ vào màn hình rồi chạy chạm vào đồ thật trong nhà. Hôm nay con học bed, tiếng Trung là 床.",
    "b": "这是床。(zhè shì chuáng)"
   },
   "words": {
    "en": [
     0,
     1,
     8
    ],
    "zh": [
     0,
     1,
     4
    ]
   },
   "doi": "Đi thăm từng phòng (12 phút). Mẹ dắt bé đi một vòng quanh nhà như hướng dẫn viên. Đến đâu mẹ dừng, chạm vào đồ vật và nói tên tiếng Anh: bed, table, chair, door, window. Bé chạm lại và nhắc theo. Về phòng khách, mẹ hỏi: “Where is the door?”, bé chạy chỉ.",
   "ob": "Ông bà dắt bé đi quanh nhà, chạm vào giường, bàn, ghế và gọi tên.",
   "toi": "Kể chuyện “Nàng tiên Ốc” (phần đầu). Mẹ kể: Có một bà cụ nghèo sống một mình. Một hôm đi mò cua, bà bắt được một con ốc rất xinh. Bà không nỡ bán, mang về thả vào chum nước. Từ hôm đó, lạ lắm: mỗi lần bà đi làm về, nhà cửa đã quét sạch, trên bàn có sẵn cơm canh nóng. Hỏi bé: “Theo con, ai đã nấu cơm cho bà?”."
  },
  {
   "chuyen": "Dọn dẹp theo bài hát.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Bài hát dọn dẹp ngắn. Mẹ dừng mỗi khi thấy đồ chơi được cất đi, hỏi: “Bạn cất đồ vào đâu?”. Bé chỉ vào hộp, kệ. Mẹ nhắc theo “clean up”.",
    "b": "Clean up, everybody!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – nghe tên phòng. Xem lại bài các phòng. Mẹ dừng ở 门 (cửa), bé chạy đến cửa phòng chạm vào. Mẹ dừng ở 桌子, bé chạm bàn. Bé chạm đúng 3 đồ thì được ôm một cái.",
    "b": "这是门。(zhè shì mén)"
   },
   "words": {
    "en": [
     2,
     3,
     4,
     6
    ],
    "zh": [
     2,
     3,
     4
    ]
   },
   "doi": "Dán nhãn đồ trong nhà (12 phút). Mẹ viết tên tiếng Anh lên giấy nhớ hoặc giấy dán to: BED, TABLE, CHAIR, DOOR, WINDOW. Bé cầm từng tờ, mẹ đọc, bé chạy dán lên đúng đồ vật. Mẹ viết thêm chữ Hán bên dưới. Để nhãn cả tuần để bé đọc hằng ngày.",
   "ob": "Ông bà đọc nhãn dán trên ghế, bé nói “chair”.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố cái ghế”. Bé đoán xong, mẹ chỉ chiếc ghế có nhãn CHAIR. Hỏi: “Ghế có chân mà có đi được không?”. Bé cười và ngồi lên ghế, nói “Sit on the chair.”",
   "lyr": "Câu đố cái ghế"
  },
  {
   "chuyen": "Lăn khỏi giường như bài hát.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Trải chăn trên sàn làm “giường”. Bé, mẹ và các thú bông nằm cạnh nhau. Mỗi khi bài hát nói “Roll over”, cả nhà cùng lăn một vòng và một thú bông “rơi” khỏi giường. Lăn trên sàn trải chăn, không lăn trên giường cao.",
    "b": "Roll over! Roll over!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – làm động tác. Xem lại bài các phòng, dùng động tác cố định: 床 thì áp hai tay lên má như ngủ, 门 thì làm động tác mở cửa, 椅子 thì ngồi xuống. Video nói từ nào, bé làm động tác đó.",
    "b": "我睡觉了。(wǒ shuìjiào le)"
   },
   "words": {
    "en": [
     1,
     6,
     8
    ],
    "zh": [
     1,
     3,
     4,
     6
    ]
   },
   "doi": "Đếm đồ trong nhà (12 phút). Mẹ và bé đi đếm: nhà mình có mấy cái ghế? mấy cái cửa sổ? mấy cái cửa? Bé đếm bằng tiếng Anh, mẹ ghi số lên giấy. Rồi đếm lại một thứ bằng tiếng Trung. Hỏi bé: “Ghế nhiều hơn hay cửa nhiều hơn?”.",
   "ob": "Ông bà đếm ghế cùng bé: một, hai, ba, bé đếm lại bằng tiếng Anh.",
   "toi": "Kể tiếp “Nàng tiên Ốc”. Mẹ kể: Bà cụ tò mò, một sáng giả vờ đi làm rồi quay về nấp sau cửa. Bà thấy từ trong chum nước, một cô gái xinh đẹp bước ra từ vỏ ốc, quét nhà, nấu cơm. Bà nhẹ nhàng bước ra cất vỏ ốc đi và nói: “Con ở lại với bà nhé.” Từ đó hai bà cháu sống vui vẻ trong căn nhà nhỏ. Hỏi bé: “Con giúp mẹ việc nhà được không?”."
  },
  {
   "chuyen": "Thi dọn đồ chơi theo nhạc.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm theo bài. Rải 6–8 đồ chơi to trên sàn. Bật bài dọn dẹp, bé cất đồ vào hộp theo nhạc. Mẹ dừng nhạc, bé đứng im; bật lại, bé dọn tiếp. Mỗi món cất vào, bé nói tên tiếng Anh nếu biết.",
    "b": "Put it in the box."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – nghe chuyện thỏ con. Bài hát kể: thỏ mẹ đi vắng, dặn thỏ con không mở cửa cho người lạ. Mẹ dừng ở câu 开开 (mở ra), bé làm động tác mở cửa. Mẹ giải thích: chỉ mở cửa khi đúng là mẹ về.",
    "b": "小兔子乖乖。(xiǎo tùzi guāiguāi)"
   },
   "words": {
    "en": [
     4,
     9
    ],
    "zh": [
     4,
     5
    ]
   },
   "doi": "Ai gõ cửa? (12 phút). Mẹ ra ngoài cửa phòng, gõ cửa. Bé hỏi bằng tiếng Việt “Ai đấy?”. Mẹ trả lời bằng giọng mẹ thì bé nói “Open the door!” và mở cửa. Mẹ giả giọng lạ thì bé không mở, nói “No!”. Nhắc bé: ngoài đời, có người lạ gõ cửa thì gọi bố mẹ, không tự mở.",
   "ob": "Ông bà gõ cửa, bé hỏi “Ai đấy?” rồi mở khi nghe đúng tiếng ông bà.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố cái thìa”. Bé đoán xong, mẹ đưa bé một cái thìa, hỏi: “Thìa để ở phòng nào?” – kitchen. Bé cầm thìa vào bếp, đặt lên bàn ăn và nói “table”.",
   "lyr": "Câu đố cái thìa"
  },
  {
   "chuyen": "Bé đếm trước video.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật bài 10 bạn trên giường. Trước mỗi đoạn mới, mẹ dừng và hỏi “How many?”, bé nói số tiếp theo trước khi video hát. Cuối bài chỉ còn một bạn, bé nói “Good night!” rồi nằm xuống.",
    "b": "Good night! Sleep tight!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – bé nói trước video. Bật bài các phòng. Mẹ dừng trước mỗi đồ vật, bé nói tên tiếng Trung trước: 床, 门, 桌子, 椅子. Bật tiếp xem đúng không.",
    "b": "这是我的家。(zhè shì wǒ de jiā)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   "doi": "Vẽ ngôi nhà của bé (15 phút). Mẹ vẽ khung một ngôi nhà to trên giấy. Bé vẽ thêm cửa, cửa sổ, bên trong vẽ giường, bàn, ghế. Mẹ viết tên tiếng Anh cạnh mỗi đồ. Bé chỉ và giới thiệu: “This is my house. This is my bed.”",
   "ob": "Ông bà xem tranh ngôi nhà, bé chỉ và nói tên từng đồ.",
   "toi": "Đọc sách. Mẹ đọc một bài thơ ngắn trong tập “Góc sân và khoảng trời” của Trần Đăng Khoa (NXB Kim Đồng), chọn bài nói về góc sân, ngôi nhà. Hỏi bé: “Nhà mình có góc nào con thích nhất?”. Bé dẫn mẹ đến đó và nói tên tiếng Anh."
  },
  {
   "chuyen": "Thử thách lớn và buổi biểu diễn nhỏ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao. Xong mỗi trò tô 1 sao; nói to tên đồ vật trong nhà khi chơi thì thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần để xem lại.",
    "b": "Well done! Three stars!"
   },
   "zh": {
    "v": 0,
    "t": "Nếu bé còn hứng: bật bài các phòng một lần, bé hát theo.",
    "b": "我的家很漂亮。(wǒ de jiā hěn piàoliang)"
   },
   "doi": "Buổi biểu diễn nhỏ (15 phút). Trải chăn làm giường, xếp 5 thú bông. Bé diễn bài “Ten In The Bed” bản ngắn: đếm từ 5, mỗi lần nói “Roll over!” thì đẩy một thú bông lăn xuống chăn. Cuối cùng bé nói “Good night!”. Diễn khoảng 1 phút, mẹ quay clip. Cả nhà vỗ tay.",
   "ob": "Ông bà ngồi xem bé diễn và đếm cùng bé.",
   "toi": "Ca dao. Mẹ đọc câu “Ngó lên nuộc lạt mái nhà”. Mẹ giải thích: ngày xưa mái nhà buộc bằng nhiều nuộc lạt; mỗi nuộc lạt là một lần nhớ ông bà. Hỏi bé: “Nhà ông bà có gì khác nhà mình?”. Bé kể và nói “house” – “家”.",
   "lyr": "Ngó lên nuộc lạt mái nhà",
   "special": "Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip"
  },
  {
   "chuyen": "Ôn tuần: cả nhà dọn nhà.",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn video thích nhất tuần. Mẹ đề nghị bài dọn dẹp để cả nhà cùng dọn phòng khách. Chơi lại trò web bé thích.",
    "b": "Let's clean up together!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: bật bài các phòng, bé dẫn mẹ đi chạm đúng đồ vật.",
    "b": "我们回家吧。(wǒmen huí jiā ba)"
   },
   "words": {
    "en": [
     1,
     2,
     3,
     4,
     7
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Việc thật cùng gia đình: cả nhà dọn nhà sáng Chủ nhật. Bé lau bàn bằng khăn ẩm, xếp gối trên sofa, cất dép cạnh cửa. Mỗi việc bé nói tên đồ vật bằng tiếng Anh. Mẹ giữ các chai nước tẩy rửa ở chỗ cao, bé chỉ dùng khăn và nước sạch.",
   "ob": "Ông bà nhờ bé lau bàn, bé nói “table” khi lau.",
   "toi": "Bé kể lại chuyện. Bé tự kể “Nàng tiên Ốc”, mẹ hỏi gợi ý: Bà cụ bắt được gì? Ai nấu cơm? Bà nấp ở đâu? Rồi mẹ đọc lại câu đố cái ghế và cái thìa, bé trả lời."
  },
  {
   "chuyen": "Tuần Kể chuyện: chó Spot trốn ở đâu?",
   "en": {
    "v": 2,
    "t": "Lần 1 – dừng và đoán. Mẹ chó đi tìm chó con Spot, mở từng chỗ: sau cửa, trong tủ, dưới giường. Trước mỗi lần mở, mẹ dừng và hỏi: “Spot có ở đây không?”. Bé đoán “Yes” hoặc “No”. Cùng nói “No!” với các con vật trốn nhầm chỗ.",
    "b": "Is he behind the door? No!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – kể chuyện theo bài hát. Xem lại bài thỏ con. Mẹ kể lại bằng tiếng Việt từng đoạn: thỏ mẹ đi, ai đó gõ cửa, thỏ con không mở, thỏ mẹ về mới mở. Bé làm thỏ con, mẹ làm người gõ cửa.",
    "b": "我不开门！(wǒ bù kāi mén)"
   },
   "words": {
    "en": [
     1,
     4,
     6
    ],
    "zh": [
     4,
     5
    ]
   },
   "doi": "Kể chuyện bằng tranh (12 phút). Mẹ gấp giấy làm 3 ô. Bé vẽ 3 chỗ mẹ chó đã tìm: cửa, giường, hộp. Bé chỉ từng ô và kể: “Spot không ở sau cửa…”. Ô cuối vẽ Spot trốn trong giỏ. Dán lên tường cạnh tranh ngôi nhà.",
   "ob": "Ông bà nghe bé kể 3 ô tranh tìm chó Spot.",
   "toi": "Kể chuyện “Câu chuyện bó đũa” (phần đầu). Mẹ kể: Một nhà có mấy anh em hay cãi nhau. Người cha buồn lắm. Một tối, cha gọi các con lại bên bàn ăn, đưa ra một bó đũa buộc chặt và bảo: “Đứa nào bẻ gãy được bó đũa này, cha thưởng.” Các con thay nhau bẻ mà không gãy. Hỏi bé: “Vì sao không bẻ được nhỉ?”."
  },
  {
   "chuyen": "Tìm đồ trong nhà bằng câu hỏi.",
   "en": {
    "v": 0,
    "t": "Lần 4 – đếm và nói câu. Bật bài 10 bạn trên giường. Lần này mỗi khi một bạn lăn xuống, bé nói cả câu: “There are nine in the bed.” Mẹ giúp nói số, bé nói cả câu.",
    "b": "There are five in the bed."
   },
   "zh": {
    "v": 0,
    "t": "Lần 5 – nói câu dài. Xem lại bài các phòng. Sau mỗi đồ vật, bé nói câu 这是我的 + tên (đây là … của con): 这是我的床.",
    "b": "这是我的床。(zhè shì wǒ de chuáng)"
   },
   "words": {
    "en": [
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Trốn tìm đồ chơi (12 phút). Mẹ giấu một chú chó bông như Spot ở một chỗ trong phòng. Bé hỏi bằng tiếng Anh: “Is it under the bed?”, “Is it behind the door?”. Mẹ chỉ trả lời “Yes” hoặc “No”. Tìm được thì đổi vai, bé giấu, mẹ hỏi.",
   "ob": "Ông bà giấu chó bông, bé tìm và hỏi “Under the bed?”.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố cái gương”. Bé đoán xong, hai mẹ con đứng trước gương, làm mặt cười, mặt buồn. Hỏi: “Gương ở phòng nào nhà mình?”. Bé chỉ và nói tên phòng.",
   "lyr": "Câu đố cái gương"
  },
  {
   "chuyen": "Đóng vai mẹ chó đi tìm Spot.",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại truyện. Bé làm mẹ chó, đi theo truyện mở cửa, nhìn dưới giường thật trong nhà. Mẹ dừng video, bé tìm ở chỗ giống trong truyện rồi nói “No!” hoặc “Yes!”. Một chú chó bông chờ sẵn trong giỏ.",
    "b": "Where's Spot? There he is!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – hát câu mở cửa. Xem lại bài thỏ con. Bé hát theo câu 开开 và 不开 (không mở). Mẹ hỏi: 你开门吗？, bé trả lời 不开 khi là người lạ.",
    "b": "不开不开我不开。(bù kāi bù kāi wǒ bù kāi)"
   },
   "words": {
    "en": [
     4,
     5,
     6,
     9
    ],
    "zh": [
     4,
     5
    ]
   },
   "doi": "Bé làm nhà bếp (12 phút). Bé dọn bàn ăn với mẹ: đặt bát, thìa, đũa cho mỗi người. Mỗi lần đặt, bé nói “table”, “chair” và kéo ghế cho từng người. Đếm số người bằng tiếng Trung. Mẹ lo phần nồi nóng và bếp.",
   "ob": "Ông bà cùng bé xếp bát đũa lên bàn, bé đếm số bát.",
   "toi": "Kể tiếp “Câu chuyện bó đũa”. Mẹ kể: Người cha tháo bó đũa ra, bẻ từng chiếc một, chiếc nào cũng gãy dễ dàng. Cha nói: “Các con cũng như bó đũa. Thương nhau, đứng cùng nhau thì không ai bẻ gãy được.” Các anh em ôm nhau, từ đó không cãi nhau nữa. Mẹ đưa bé 5 chiếc đũa, bé đếm “one, two, three, four, five”."
  },
  {
   "chuyen": "Thi tìm nhanh hơn mẹ chó.",
   "en": {
    "v": 1,
    "t": "Lần 3 – bé làm người chỉ huy. Bật bài dọn dẹp. Bé ra lệnh cho mẹ: “Put the ball in the box!”, mẹ làm theo. Mẹ cố tình cất sai chỗ, bé sửa: “No! In the box!”.",
    "b": "Put it away, please."
   },
   "zh": {
    "v": 0,
    "t": "Lần 6 – chuyển ngữ. Xem lại bài các phòng, tắt tiếng. Mẹ chỉ đồ vật, bé nói cả hai thứ tiếng: bed – 床, door – 门. Bật tiếng xem lại.",
    "b": "门是door。(mén shì door)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   "doi": "Một đồ vật, hai cái tên (10 phút). Mẹ chạm vào một đồ vật trong nhà, nói tiếng Anh; bé nói tiếng Trung. Rồi đổi: mẹ nói tiếng Trung, bé nói tiếng Anh và chạy chạm vào đồ đó. Đúng 5 lần thì bé được làm “chủ nhà” dẫn mẹ đi thăm nhà.",
   "ob": "Ông bà chạm vào cửa, bé nói “door”.",
   "toi": "Đọc sách. Mẹ chọn một truyện ngắn trong cuốn “Bé tập kể chuyện – Mỗi tuần một câu chuyện” (NXB Trẻ). Mẹ đọc một lần, lần hai mẹ dừng giữa câu để bé nói tiếp. Hỏi: “Chuyện xảy ra ở đâu? Trong nhà hay ngoài vườn?”."
  },
  {
   "chuyen": "Bé kể chuyện Spot trước khi xem.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước. Trước khi bật, bé cầm 3 ô tranh và kể lại chuyện tìm Spot. Rồi mới xem để kiểm tra. Mỗi chỗ trốn, bé nói câu tiếng Anh trước video: “Is he in the box?”.",
    "b": "Is he under the bed? No!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 4 – bé hát trước. Bật bài thỏ con. Mẹ dừng trước câu 开开, bé hát trước. Rồi bé kể bằng tiếng Việt vì sao thỏ con không mở cửa.",
    "b": "妈妈回来了，开门！(māma huílái le, kāi mén)"
   },
   "words": {
    "en": [
     1,
     4,
     5,
     6
    ],
    "zh": [
     0,
     4,
     5
    ]
   },
   "doi": "Chuẩn bị picnic (10 phút). Bé cùng mẹ chuẩn bị giỏ picnic cho ngày mai: khăn trải, cốc nhựa, đĩa nhựa. Bé đặt từng thứ vào giỏ, nói tên. Mẹ hỏi: “Picnic có bàn không?” – không, mình trải khăn thay bàn.",
   "ob": "Ông bà cùng bé xếp đồ vào giỏ picnic.",
   "toi": "Bé kể lại “Câu chuyện bó đũa”. Mẹ đưa bé một bó đũa buộc chun. Bé kể và diễn: thử bẻ cả bó (không gãy), tháo ra nói về từng chiếc. Không bẻ đũa thật, chỉ diễn. Mẹ hỏi: “Nhà mình có mấy người như bó đũa?”."
  },
  {
   "chuyen": "Thử thách lớn và picnic từ vựng.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu (This is my…, Open the door, Is it under…?) mới được tô sao. Đủ sao, bé chọn 1 video thích nhất tuần để xem lại.",
    "b": "Great! You found Spot!"
   },
   "zh": {
    "v": 1,
    "t": "Thêm nếu bé muốn: hát bài thỏ con cùng mẹ.",
    "b": "你真乖！(nǐ zhēn guāi)"
   },
   "doi": "Picnic từ vựng (20 phút). Mang giỏ picnic ra sân hoặc ban công. Trải khăn, bé bày cốc, đĩa. Mang theo bánh, chuối, nước. Bé gọi tên đồ ăn bằng tiếng Anh, bố mẹ nhắc thêm tiếng Trung (水 shuǐ, 香蕉 xiāngjiāo). Bé so sánh: “Ở nhà mình ăn ở table, hôm nay ăn trên khăn.” Ăn ngồi yên, đồ ăn cắt miếng vừa.",
   "ob": "Ông bà ngồi picnic, bé mời ông bà và nói tên một món.",
   "toi": "Ca dao. Mẹ đọc câu “Ta về ta tắm ao ta”. Mẹ giải thích: nhà mình dù nhỏ vẫn là nơi ấm áp nhất. Hỏi bé: “Đi chơi về, con thích nhất ở phòng nào trong nhà?”. Bé nói “home” – “家”.",
   "lyr": "Ta về ta tắm ao ta",
   "special": "Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại bài 10 bạn trên giường, bé đếm cùng thú bông. Xem clip biểu diễn tuần trước, so sánh xem bé đếm giỏi hơn chưa.",
    "b": "Sweet dreams!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: bật bài các phòng, bé đi quanh nhà chạm đồ vật.",
    "b": "晚安！(wǎn'ān)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     6
    ]
   },
   "doi": "Việc thật cùng gia đình: bé giúp mẹ trải ga giường hoặc xếp gối trước giờ ngủ. Bé nói “bed”, “pillow” và “床”. Gỡ các nhãn dán trong nhà, bé đọc lại từng nhãn trước khi gỡ.",
   "ob": "Ông bà xếp gối cùng bé, bé nói “bed”.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại câu đố cái gương, bé soi gương chúc ngủ ngon. Mẹ kể ngắn lại chuyện Nàng tiên Ốc, bé nói câu cuối. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Câu đố cái gương",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[114] = {
 "sub": "Đồ chơi: bóng, búp bê, ô tô",
 "vocab": {
  "en": [
   [
    "ball",
    "⚽",
    "quả bóng",
    false
   ],
   [
    "doll",
    "🪆",
    "búp bê",
    false
   ],
   [
    "car",
    "🚗",
    "ô tô",
    false
   ],
   [
    "teddy",
    "🧸",
    "gấu bông",
    false
   ],
   [
    "kite",
    "🪁",
    "con diều",
    false
   ],
   [
    "blocks",
    "🧱",
    "khối xếp hình",
    false
   ],
   [
    "robot",
    "🤖",
    "rô-bốt",
    false
   ],
   [
    "throw",
    "🤾",
    "ném",
    true
   ],
   [
    "roll",
    "🎳",
    "lăn",
    true
   ],
   [
    "clean up",
    "🧺",
    "dọn dẹp",
    true
   ]
  ],
  "zh": [
   [
    "球",
    "qiú",
    "quả bóng",
    "⚽"
   ],
   [
    "娃娃",
    "wáwa",
    "búp bê",
    "🪆"
   ],
   [
    "汽车",
    "qìchē",
    "ô tô",
    "🚗"
   ],
   [
    "小熊",
    "xiǎoxióng",
    "gấu con, gấu bông",
    "🧸"
   ],
   [
    "玩具",
    "wánjù",
    "đồ chơi",
    "🧺"
   ],
   [
    "玩",
    "wán",
    "chơi",
    "🎲"
   ],
   [
    "跳舞",
    "tiàowǔ",
    "nhảy múa",
    "💃"
   ]
  ],
  "en_phr": [
   [
    "I like my ball.",
    "ball",
    "⚽"
   ],
   [
    "Hug your teddy.",
    "teddy",
    "🧸"
   ],
   [
    "Throw the ball!",
    "Throw",
    "🤾"
   ],
   [
    "Let's clean up!",
    "clean up",
    "🧺"
   ]
  ],
  "zh_phr": [
   [
    "我喜欢玩球。",
    "球",
    "wǒ xǐhuan wán qiú",
    "con thích chơi bóng",
    "⚽"
   ],
   [
    "娃娃在跳舞。",
    "跳舞",
    "wáwa zài tiàowǔ",
    "búp bê đang nhảy múa",
    "💃"
   ],
   [
    "这是我的小汽车。",
    "汽车",
    "zhè shì wǒ de xiǎo qìchē",
    "đây là ô tô nhỏ của con",
    "🚗"
   ]
  ],
  "seq": [
   [
    "🧺",
    "take out the toys",
    "拿玩具"
   ],
   [
    "⚽",
    "play",
    "玩"
   ],
   [
    "🧹",
    "clean up",
    "收拾"
   ],
   [
    "📦",
    "put them away",
    "放好"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "ESL Game Toys – What Is It? Trò đoán đồ chơi (khoảng 5 phút, mẹ nghe thử trước)",
    "u": "https://www.youtube.com/watch?v=1WtI9oWyXaM",
    "kind": "game",
    "ch": "Inglês com Mari",
    "min": 4.6
   },
   {
    "t": "My Teddy Bear – bài hát gấu bông",
    "u": "https://www.youtube.com/watch?v=666UZRBO5q8",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Clean Up Song – bài hát dọn dẹp",
    "u": "https://www.youtube.com/watch?v=SFE0mMWbA-Y",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "玩具 – từ vựng đồ chơi tiếng Trung (xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=LwOxXQakeyc",
    "kind": "lesson",
    "ch": "Chinese As A Foreign Language"
   },
   {
    "t": "洋娃娃和小熊跳舞 – búp bê và gấu con nhảy múa (khoảng 2 phút)",
    "u": "https://www.youtube.com/watch?v=LaiUNR0dlOg",
    "kind": "song_action",
    "ch": "貝瓦兒歌 Beva",
    "min": 1.8
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Khám phá: đồ chơi nào lăn, đồ chơi nào nổi?",
   "toi_vi": [
    {
     "t": "Câu đố cái quạt nan",
     "type": "cau_do",
     "lyr": "Thân em xưa ở bụi tre\nMùa đông xếp lại mùa hè mở ra"
    },
    {
     "t": "Thằng Bờm có cái quạt mo",
     "type": "dong_dao",
     "lyr": "Thằng Bờm có cái quạt mo\nPhú ông xin đổi ba bò chín trâu\nBờm rằng Bờm chẳng lấy trâu\nPhú ông xin đổi một xâu cá mè\nBờm rằng Bờm chẳng lấy mè\nPhú ông xin đổi một bè gỗ lim\nBờm rằng Bờm chẳng lấy lim\nPhú ông xin đổi con chim đồi mồi\nBờm rằng Bờm chẳng lấy mồi\nPhú ông xin đổi nắm xôi Bờm cười"
    }
   ],
   "book_vi": {
    "t": "Đọc tranh nhớ chữ (bộ 9 cuốn)",
    "author": "Đội ngũ Crabit biên soạn",
    "publisher": "NXB Hà Nội & Crabit Kidbooks"
   }
  },
  {
   "title": "Tuần 2 – Thử thách: ai dọn nhanh, ai đoán giỏi?",
   "toi_vi": [
    {
     "t": "Câu đố cái gương (lấp lánh)",
     "type": "cau_do",
     "lyr": "Lấp la lấp lánh\nTreo ở trên tường\nTrước khi đến trường\nBé soi chải tóc\nLà cái gì?"
    },
    {
     "t": "Bầu ơi thương lấy bí cùng",
     "type": "ca_dao",
     "lyr": "Bầu ơi thương lấy bí cùng\nTuy rằng khác giống nhưng chung một giàn"
    }
   ],
   "book_vi": {
    "t": "Bé học yêu thương và chia sẻ (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được ball, doll, car, teddy, blocks khi lấy đồ chơi ra"
  ],
  [
   "en",
   "Nói được câu “I like my …” với đồ chơi yêu thích"
  ],
  [
   "zh",
   "Nói được 球 qiú, 娃娃 wáwa, 汽车 qìchē, 小熊 xiǎoxióng"
  ],
  [
   "zh",
   "Nói được câu 我喜欢玩… khi chơi"
  ],
  [
   "vi",
   "Đọc theo được câu đố cái quạt nan và vài câu đồng dao Thằng Bờm"
  ],
  [
   "td",
   "Phân loại đồ chơi: lăn được hay không, nổi hay chìm"
  ],
  [
   "xh",
   "Chia sẻ đồ chơi với người khác và tự dọn sau khi chơi"
  ],
  [
   "vd",
   "Ném và bắt được quả bóng mềm ở khoảng cách 1–2 bước"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Khám phá: đoán đồ chơi trong túi.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và đoán. Đây là trò đoán đồ chơi do một cô giáo làm, mẹ xem trước một lượt để nghe giọng. Mẹ dừng khi đồ chơi còn bị che, hỏi: “Con đoán là gì?”. Bé nói tiếng Việt cũng được, rồi nghe video và nhắc theo một lần.",
    "b": "What is it? It's a ball!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Chỉ xem 5 phút đầu. Bày sẵn quả bóng, búp bê, ô tô đồ chơi của bé. Video nói tên món nào, bé nhặt đúng món đó giơ lên. Hôm nay con học ball, tiếng Trung là 球.",
    "b": "这是球。(zhè shì qiú)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Túi bí ẩn (12 phút). Mẹ cho 5 đồ chơi to (to hơn nắm tay bé) vào một túi vải. Bé thò tay sờ, đoán bằng tiếng Việt rồi rút ra. Mẹ nói tên tiếng Anh, bé nhắc lại. Lần hai, bé phải nói tiếng Anh trước khi rút ra.",
   "ob": "Ông bà cho bé sờ đồ chơi trong túi, bé đoán rồi nói tên.",
   "toi": "Kể chuyện “Loài chim học xây tổ” (phần đầu). Mẹ kể: Ngày xưa các loài chim chưa biết làm tổ. Chim Phượng Hoàng mở lớp dạy các bạn xây nhà. Phượng Hoàng dặn: “Phải học đến cuối nhé!”. Bài đầu tiên: nhặt cành khô xếp thành vòng tròn. Mẹ và bé dùng khối xếp hình làm “cành cây”, xếp một vòng tròn. Hỏi: “Con nghĩ bạn chim nào sẽ học đến cuối?”."
  },
  {
   "chuyen": "Gấu bông có mắt, tai, mũi.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Bé ôm gấu bông của mình ngồi xem. Bài hát nói đến mắt, tai, mũi của gấu, bé chỉ vào đúng chỗ trên gấu thật. Mẹ dừng hỏi: “Where are the eyes?”.",
    "b": "This is my teddy bear."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và nhảy. Bài búp bê và gấu con nhảy múa, khoảng 2 phút. Bé cầm búp bê hoặc gấu bông, đung đưa theo nhạc. Đến câu 转个圈 (xoay một vòng), bé xoay tròn. Mẹ nhắc theo 娃娃, 小熊.",
    "b": "小熊跳舞。(xiǎoxióng tiàowǔ)"
   },
   "words": {
    "en": [
     1,
     3
    ],
    "zh": [
     1,
     3,
     6
    ]
   },
   "doi": "Khám phá gấu bông (10 phút). Bé đặt gấu bông, búp bê và rô-bốt (nếu có) cạnh nhau. So sánh: ai to nhất, ai nhỏ nhất? Ai mềm, ai cứng? Mẹ hỏi “Is the teddy soft?”, bé sờ và trả lời “Yes”. Đếm số mắt của cả ba bạn bằng tiếng Anh.",
   "ob": "Ông bà hỏi bé gấu bông và búp bê ai to hơn.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố cái quạt nan”. Bé đoán xong, mẹ đưa một cái quạt giấy hoặc quạt nan, bé mở ra quạt cho mẹ, gập lại. Mẹ kể: ngày xưa chưa có quạt điện, bà dùng quạt nan. Quạt cũng là đồ chơi vui của trẻ con ngày xưa."
  },
  {
   "chuyen": "Thí nghiệm: đồ chơi nào lăn được?",
   "en": {
    "v": 0,
    "t": "Lần 2 – đoán và làm động tác. Xem lại trò đoán. Lần này mỗi đồ chơi có một động tác: ball thì làm động tác ném, car thì hai tay lái xe, kite thì giơ tay cao như thả diều, doll thì bế ru. Đoán đúng, bé làm động tác của đồ chơi đó.",
    "b": "Throw the ball!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại 5 phút đầu, dùng đúng động tác giống bài tiếng Anh: 球 thì ném, 汽车 thì lái xe, 娃娃 thì bế ru. Video nói từ nào, bé làm động tác đó.",
    "b": "我玩汽车。(wǒ wán qìchē)"
   },
   "words": {
    "en": [
     0,
     2,
     5,
     8
    ],
    "zh": [
     0,
     2,
     5
    ]
   },
   "doi": "Thí nghiệm dốc lăn (15 phút). Mẹ dựng một tấm bìa cứng nghiêng lên sách làm dốc. Bé thử thả từng đồ chơi: quả bóng, ô tô, khối vuông, gấu bông. Đồ nào lăn xuống, đồ nào đứng im? Mẹ nói “It rolls!” hoặc “It doesn't roll.” Bé xếp thành 2 nhóm: lăn được và không lăn được.",
   "ob": "Ông bà cùng bé thả bóng và ô tô xuống dốc, xem cái nào chạy xa hơn.",
   "toi": "Kể tiếp “Loài chim học xây tổ”. Mẹ kể: Học được một lúc, chim Chèo Bẻo kêu “Biết rồi!” bay về, nên tổ chèo bẻo chỉ là mấy cành thưa. Chim Sẻ học thêm chút nữa rồi cũng về. Chỉ có chim Tu Hú… mải chơi không học gì. Mẹ và bé thêm vài khối vào vòng tròn hôm qua. Hỏi: “Ai học đến cuối thì tổ thế nào?”."
  },
  {
   "chuyen": "Thí nghiệm: đồ chơi nào nổi?",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm theo bài. Xem lại bài gấu bông. Bé làm “cô giáo” cho gấu: bài hát nói đến đâu, bé cầm tay gấu chỉ vào đó. Mẹ dừng nhạc, gọi “Nose!”, bé chỉ mũi gấu.",
    "b": "Teddy's nose! Teddy's eyes!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – nhảy theo lệnh. Xem lại bài búp bê nhảy múa. Mẹ dừng nhạc và gọi 娃娃 hoặc 小熊. Gọi búp bê thì bé cho búp bê nhảy, gọi gấu thì cho gấu nhảy.",
    "b": "娃娃跳舞！(wáwa tiàowǔ)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Thí nghiệm nổi – chìm (15 phút). Mẹ đổ nước vào một chậu nông, đặt chậu trên sàn có trải khăn. Bé thả từng đồ chơi nhựa to: quả bóng, ô tô nhựa, khối xếp hình, thìa. Cái nào nổi, cái nào chìm? Mẹ nói “It floats.” hoặc “It sinks.”. Mẹ ngồi cạnh bé suốt lúc chơi nước, xong đổ nước ngay.",
   "ob": "Ông bà ngồi cạnh chậu nước nông, xem bé thả bóng nổi.",
   "toi": "Đồng dao. Mẹ đọc bài “Thằng Bờm có cái quạt mo”. Đến mỗi lần Phú ông xin đổi, mẹ hỏi bé: “Bờm có đổi không?”. Bé lắc đầu. Đến nắm xôi thì Bờm cười. Mẹ hỏi: “Nếu ai xin đổi đồ chơi của con, con có đổi không?”.",
   "lyr": "Thằng Bờm có cái quạt mo"
  },
  {
   "chuyen": "Bé đoán trước video.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Xem lại trò đoán. Bé phải nói tên tiếng Anh trước khi video nói. Mẹ ghi điểm bằng que kem to. Cuối cùng bé chọn món đồ chơi thích nhất và nói “I like my …”.",
    "b": "I like my car!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Xem lại 5 phút đầu. Mẹ dừng trước mỗi từ, bé nói tên tiếng Trung trước: 球, 娃娃, 汽车. Thêm câu 我喜欢玩球.",
    "b": "我喜欢玩球。(wǒ xǐhuan wán qiú)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4,
     5
    ],
    "zh": [
     0,
     1,
     2,
     4,
     5
    ]
   },
   "doi": "Phân loại đồ chơi (12 phút). Mẹ đổ hộp đồ chơi ra (chỉ đồ to, không có chi tiết nhỏ). Bé xếp theo nhóm: nhóm “roll” (lăn được), nhóm “soft” (mềm), nhóm “blocks”. Rồi đếm mỗi nhóm bằng tiếng Anh. Nhóm nào nhiều nhất?",
   "ob": "Ông bà giúp bé xếp đồ chơi mềm vào một rổ.",
   "toi": "Đọc sách tranh. Mẹ mở một cuốn trong bộ “Đọc tranh nhớ chữ” (Crabit Kidbooks). Mẹ chỉ tranh, bé nói tên tiếng Việt, rồi thử nói tiếng Anh những từ bé biết. Nếu chưa có sách, mẹ kể nốt “Loài chim học xây tổ”: ai học đến cuối thì tổ đẹp và chắc."
  },
  {
   "chuyen": "Thử thách lớn và làm sách nhỏ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao. Xong mỗi trò tô 1 sao; bé nói to tên đồ chơi trong lúc chơi thì thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần để xem lại.",
    "b": "You did it! Hooray!"
   },
   "zh": {
    "v": 1,
    "t": "Nếu bé muốn: bật bài búp bê nhảy múa, bé nhảy cùng búp bê.",
    "b": "我们一起跳舞。(wǒmen yìqǐ tiàowǔ)"
   },
   "doi": "Làm sách nhỏ của bé: “My Toys – 我的玩具” (20 phút). Gấp đôi 3 tờ giấy A4, mẹ dập ghim gáy. Mỗi trang một đồ chơi của bé: bé vẽ hoặc mẹ chụp ảnh in ra dán. Mẹ viết tên tiếng Anh và chữ Hán. Trang cuối: “I like my …”. Bé “đọc” sách cho cả nhà nghe.",
   "ob": "Ông bà dán tranh đồ chơi cùng bé, nghe bé đọc sách.",
   "toi": "Đố vui dân gian. Mẹ đọc lại “Câu đố cái quạt nan”, lần này bé đọc cùng. Rồi bé tự đố mẹ: “Cái gì tròn tròn, lăn lăn?” (quả bóng). Mẹ trả lời “ball” và “球”.",
   "lyr": "Câu đố cái quạt nan",
   "special": "Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần"
  },
  {
   "chuyen": "Ôn tuần: chơi ở công viên.",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn video thích nhất tuần. Nếu là bài gấu bông, bé ôm gấu hát theo. Chơi lại trò web bé thích.",
    "b": "I love my teddy bear!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: xem lại 5 phút đầu, bé nhặt đồ chơi khi nghe tên.",
    "b": "你喜欢什么玩具？(nǐ xǐhuan shénme wánjù)"
   },
   "words": {
    "en": [
     0,
     2,
     3,
     7
    ],
    "zh": [
     0,
     2,
     4,
     5
    ]
   },
   "doi": "Việc thật cùng gia đình: cả nhà mang quả bóng mềm ra công viên. Chơi ném – bắt: mẹ nói “Throw!”, bé ném; “Catch!”, bé bắt. Đếm số lần bắt được bằng tiếng Anh và tiếng Trung. Chơi ở bãi cỏ xa đường xe, bé không chạy theo bóng ra đường.",
   "ob": "Ông bà ném bóng mềm cho bé bắt, đếm số lần.",
   "toi": "Bé kể lại chuyện. Bé tự kể “Loài chim học xây tổ” bằng khối xếp hình: ai bay về sớm thì tổ chỉ có vài khối, ai học đến cuối thì tổ đầy đủ. Mẹ hỏi: “Con muốn làm bạn chim nào?”."
  },
  {
   "chuyen": "Tuần Thử thách: ai đoán đồ chơi giỏi hơn?",
   "en": {
    "v": 0,
    "t": "Lần 4 – thi đoán. Xem lại trò đoán. Mẹ và bé thi: ai nói tên tiếng Anh trước được 1 sao. Đoán đúng phải nói cả câu “It's a …”. Mẹ cố tình chậm một chút để bé thắng.",
    "b": "It's a kite! I win!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – thi nói. Xem lại 5 phút đầu. Ai nói tên tiếng Trung trước (mẹ hay bé) được 1 sao. Nói thêm câu 这是… được sao vàng.",
    "b": "这是娃娃！(zhè shì wáwa)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     4,
     6
    ],
    "zh": [
     0,
     1,
     2,
     4
    ]
   },
   "doi": "Ai nhanh hơn: tìm đồ chơi (12 phút). Mẹ giấu 5 đồ chơi to quanh phòng. Mẹ gọi tên tiếng Anh “Find the car!”, bé tìm. Mẹ đếm đến 10, bé tìm kịp được 1 sao. Lượt sau mẹ gọi bằng tiếng Trung “找汽车!”.",
   "ob": "Ông bà giấu ô tô đồ chơi, bé tìm và nói “car”.",
   "toi": "Kể chuyện “Cây tre trăm đốt” (phần đầu). Mẹ kể: Có anh nông dân hiền lành làm thuê cho phú ông. Phú ông hứa: “Làm chăm chỉ ba năm, ta gả con gái cho.” Ba năm sau, phú ông nuốt lời, bắt anh vào rừng tìm cây tre có một trăm đốt. Anh tìm mãi, chỉ thấy cây tre ngắn. Hỏi bé: “Một trăm đốt là nhiều hay ít?”."
  },
  {
   "chuyen": "Thi dọn đồ chơi theo nhạc.",
   "en": {
    "v": 2,
    "t": "Lần 1 – thi dọn. Rải đồ chơi to ra sàn. Bật bài dọn dẹp. Bé phải cất hết đồ chơi trước khi bài hát kết thúc. Mỗi món cất vào, bé nói tên tiếng Anh. Kịp thì được 3 sao.",
    "b": "Clean up! Hurry, hurry!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – hát câu ngắn. Xem lại bài búp bê nhảy múa. Bé hát theo câu có 娃娃 và 小熊. Mẹ dừng nhạc giữa chừng, bé hát tiếp.",
    "b": "洋娃娃和小熊跳舞。(yángwáwa hé xiǎoxióng tiàowǔ)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     9
    ],
    "zh": [
     1,
     3,
     6
    ]
   },
   "doi": "Ném bóng vào rổ (12 phút). Mẹ đặt một chiếc rổ to cách bé 2 bước. Bé ném quả bóng mềm, mỗi lần ném nói “Throw!”. Vào rổ được 1 sao. Đếm số bóng vào bằng tiếng Trung. Lùi xa thêm 1 bước cho khó hơn.",
   "ob": "Ông bà cầm rổ, bé ném bóng vào và nói “throw”.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố cái gương (lấp lánh)”. Bé đoán xong, bé soi gương chải tóc như trong câu đố. Mẹ hỏi: “Trước khi đi học con làm gì?”. Bé kể các việc buổi sáng.",
   "lyr": "Câu đố cái gương (lấp lánh)"
  },
  {
   "chuyen": "Gấu bông nói được hai thứ tiếng.",
   "en": {
    "v": 1,
    "t": "Lần 3 – nói câu dài. Bật bài gấu bông. Mỗi khi bài nói một bộ phận, bé nói cả câu: “This is Teddy's nose.” Rồi bé ôm gấu nói “I love my teddy.”",
    "b": "I love my teddy bear!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 5 – chuyển ngữ. Xem lại 5 phút đầu, tắt tiếng. Mẹ giơ đồ chơi, bé nói cả hai thứ tiếng: ball – 球, doll – 娃娃. Bật tiếng xem lại.",
    "b": "球是ball。(qiú shì ball)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Một đồ chơi, hai cái tên (10 phút). Mẹ giơ từng đồ chơi, nói tiếng Anh, bé nói tiếng Trung. Đổi lại: mẹ nói tiếng Trung, bé nói tiếng Anh. Đúng thì bé được cho đồ chơi đó vào “nhà” (hộp). Sai thì mẹ nhắc, bé nói lại.",
   "ob": "Ông bà giơ đồ chơi, bé nói tên tiếng Anh.",
   "toi": "Kể tiếp “Cây tre trăm đốt”. Mẹ kể: Anh ngồi khóc, ông Bụt hiện lên dạy câu thần: “Khắc nhập, khắc nhập!” thì một trăm đốt tre dính vào nhau thành cây dài. Mẹ và bé lấy ống hút nhựa to hoặc lõi giấy vệ sinh xếp nối nhau, đếm từng đốt bằng tiếng Anh. Mẹ hô “khắc nhập”, bé nối thêm một đốt."
  },
  {
   "chuyen": "Mẹ nói sai, bé sửa.",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé chỉ huy. Bật bài dọn dẹp. Bé ra lệnh: “Put the doll in the box!”. Mẹ cố tình cất nhầm vào chỗ khác, bé sửa: “No! The box!”.",
    "b": "No, no! In the box!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 4 – bé hát trước. Bật bài búp bê nhảy múa. Mẹ dừng trước câu có 跳舞, bé hát trước và xoay một vòng.",
    "b": "我会跳舞！(wǒ huì tiàowǔ)"
   },
   "words": {
    "en": [
     1,
     2,
     3,
     9
    ],
    "zh": [
     1,
     3,
     4,
     6
    ]
   },
   "doi": "Đố đồ chơi qua tiếng động (12 phút). Bé nhắm mắt. Mẹ làm tiếng của đồ chơi: lăn bóng, đẩy ô tô “brừm brừm”, lắc xúc xắc to. Bé đoán bằng tiếng Anh. Đúng được 1 sao. Đổi vai: bé làm tiếng, mẹ đoán bằng tiếng Trung.",
   "ob": "Ông bà lăn quả bóng, bé nhắm mắt đoán “ball”.",
   "toi": "Ca dao. Mẹ đọc câu “Bầu ơi thương lấy bí cùng”. Mẹ giải thích: quả bầu và quả bí khác nhau nhưng sống chung một giàn, phải thương nhau. Cũng như bé và bạn chơi chung đồ chơi. Hỏi bé: “Ngày mai con cho bạn mượn đồ chơi nào?”.",
   "lyr": "Bầu ơi thương lấy bí cùng"
  },
  {
   "chuyen": "Tập nói cho cuộc gọi ông bà.",
   "en": {
    "v": 0,
    "t": "Lần 5 – bé làm người đố. Xem lại trò đoán một lượt. Rồi tắt video, bé làm “cô giáo”: bé giấu đồ chơi sau lưng, cho mẹ nhìn một phần, hỏi “What is it?”. Mẹ đoán.",
    "b": "What is it? Guess!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 6 – bé nói trước video. Xem lại đoạn đầu. Bé nói tên tiếng Trung trước khi video nói, rồi chọn một món nói câu 我喜欢玩….",
    "b": "我喜欢玩娃娃。(wǒ xǐhuan wán wáwa)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3,
     5
    ]
   },
   "doi": "Tập cho cuộc gọi (10 phút). Bé chọn 3 câu sẽ nói với ông bà ngày mai, ví dụ: “This is my teddy.”, “I like my ball.”, “我喜欢玩汽车”. Tập 3 lần bằng điện thoại đồ chơi, mẹ đóng vai ông bà hỏi lại.",
   "ob": "Ông bà nghe bé tập 3 câu và hỏi lại một câu.",
   "toi": "Đọc sách. Mẹ đọc một cuốn trong bộ “Bé học yêu thương và chia sẻ” (NXB Trẻ). Hỏi bé: “Bạn nhỏ trong sách chia gì cho bạn?”. Bé kể một lần bé đã chia đồ chơi. Nếu chưa có sách, mẹ kể nốt “Cây tre trăm đốt”: anh hô “khắc xuất” cho tre rời ra, mang về, phú ông chạm vào bị dính, phải giữ lời hứa."
  },
  {
   "chuyen": "Thử thách lớn và gọi video ông bà.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu (I like my…, This is my…) mới được tô sao. Đủ sao, bé chọn 1 video thích nhất vòng để xem lại.",
    "b": "Super! Five stars!"
   },
   "zh": {
    "v": 1,
    "t": "Thêm nếu bé muốn: bé nhảy cùng búp bê theo bài hát.",
    "b": "太棒了！(tài bàng le)"
   },
   "doi": "Gọi video ông bà (15 phút). Bé cầm sách nhỏ “My Toys” và đồ chơi thích nhất. Bé chào “Hello!” – “你好!”, rồi nói 3 câu đã tập. Bé cho ông bà xem đồ chơi, hỏi ông bà: “Ngày xưa ông bà chơi đồ chơi gì?”. Ông bà kể, bé nghe và nhắc lại tên đồ chơi.",
   "ob": "Ông bà nghe bé nói 3 câu và kể cho bé nghe đồ chơi ngày xưa.",
   "toi": "Kể lại “Cây tre trăm đốt”. Bé kể bằng chuỗi ống hút đã nối: “khắc nhập” là nối lại, “khắc xuất” là tháo ra. Mẹ hỏi: “Hứa với ai thì phải làm sao?” – phải giữ lời.",
   "special": "Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ: bé ôm gấu bông, xem lại bài gấu bông, không tính điểm.",
    "b": "Good night, Teddy!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: bật bài búp bê nhảy múa, cả nhà nhảy cùng.",
    "b": "小熊，晚安！(xiǎoxióng, wǎn'ān)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     9
    ],
    "zh": [
     1,
     3,
     4
    ]
   },
   "doi": "Việc thật cùng gia đình: bé chọn 1–2 đồ chơi cũ còn tốt để tặng em nhỏ hoặc bạn. Bé lau sạch đồ chơi bằng khăn ẩm, cho vào túi. Bé nói “This is for you.” khi tặng.",
   "ob": "Ông bà cùng bé lau đồ chơi cũ để tặng.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại câu ca dao “Bầu ơi thương lấy bí cùng”, khen bé hôm nay biết chia sẻ. Bé chọn một đồ chơi ngủ cùng. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Bầu ơi thương lấy bí cùng",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[115] = {
 "sub": "Xe đạp, ô tô, xe buýt",
 "vocab": {
  "en": [
   [
    "bike",
    "🚲",
    "xe đạp",
    false
   ],
   [
    "car",
    "🚗",
    "ô tô",
    false
   ],
   [
    "bus",
    "🚌",
    "xe buýt",
    false
   ],
   [
    "truck",
    "🚚",
    "xe tải",
    false
   ],
   [
    "wheels",
    "🛞",
    "bánh xe",
    false
   ],
   [
    "horn",
    "📯",
    "còi xe",
    false
   ],
   [
    "ride",
    "🚴",
    "đạp xe, đi xe",
    true
   ],
   [
    "go",
    "🟢",
    "đi",
    true
   ],
   [
    "stop",
    "🛑",
    "dừng lại",
    true
   ]
  ],
  "zh": [
   [
    "自行车",
    "zìxíngchē",
    "xe đạp",
    "🚲"
   ],
   [
    "汽车",
    "qìchē",
    "ô tô",
    "🚗"
   ],
   [
    "公共汽车",
    "gōnggòng qìchē",
    "xe buýt",
    "🚌"
   ],
   [
    "轮子",
    "lúnzi",
    "bánh xe",
    "🛞"
   ],
   [
    "开车",
    "kāi chē",
    "lái xe",
    "🚘"
   ],
   [
    "坐车",
    "zuò chē",
    "đi xe, ngồi xe",
    "💺"
   ]
  ],
  "en_phr": [
   [
    "The wheels on the bus go round and round.",
    "bus",
    "🚌"
   ],
   [
    "I can ride a bike.",
    "bike",
    "🚲"
   ],
   [
    "Beep beep! Here comes the car.",
    "car",
    "🚗"
   ],
   [
    "Stop! Look left and right.",
    "Stop",
    "🛑"
   ]
  ],
  "zh_phr": [
   [
    "我坐公共汽车。",
    "公共汽车",
    "wǒ zuò gōnggòng qìchē",
    "con đi xe buýt",
    "🚌"
   ],
   [
    "爸爸开车。",
    "开车",
    "bàba kāi chē",
    "bố lái ô tô",
    "🚘"
   ],
   [
    "轮子转转转。",
    "轮子",
    "lúnzi zhuàn zhuàn zhuàn",
    "bánh xe quay quay quay",
    "🛞"
   ]
  ],
  "seq": [
   [
    "🚏",
    "wait at the bus stop",
    "等车"
   ],
   [
    "🚌",
    "get on the bus",
    "上车"
   ],
   [
    "💺",
    "sit down",
    "坐好"
   ],
   [
    "👋",
    "get off the bus",
    "下车"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "The Wheels On The Bus – bánh xe buýt quay tròn",
    "u": "https://www.youtube.com/watch?v=GzrjwOQpAl0",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Learn Vehicles – trò đoán xe cộ (khoảng 2 phút)",
    "u": "https://www.youtube.com/watch?v=QxoqW84ec-M",
    "kind": "game",
    "ch": "Maple Leaf Learning",
    "min": 2
   },
   {
    "t": "Tìm bài: một tập Peppa Pig khoảng 5 phút về xe đạp, ô tô hoặc xe buýt trên kênh Peppa Pig – Official Channel (không chọn bản tổng hợp dài)",
    "u": "https://www.youtube.com/channel/UCAOtE1V7Ots4DjM8JLlrYgg",
    "kind": "story",
    "ch": "Peppa Pig - Official Channel"
   }
  ],
  "zh": [
   {
    "t": "汽车的轮子 – bánh xe buýt bản tiếng Trung (khoảng 2 phút)",
    "u": "https://www.youtube.com/watch?v=cLBLxJmQaSE",
    "kind": "song_action",
    "ch": "Little Mandarin Classes",
    "min": 1.9
   },
   {
    "t": "交通工具 – bài học phương tiện giao thông tiếng Trung (xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=DfGWiJ0a_-g",
    "kind": "lesson",
    "ch": "ChineseClass365 中文加油站"
   },
   {
    "t": "Tìm bài: một tập 小猪佩奇 khoảng 5 phút có xe ô tô hoặc xe đạp trên kênh Peppa tiếng Trung (không chọn bản tổng hợp)",
    "u": "https://www.youtube.com/channel/UCRi0sw4PDw-C2C7fS9hrx5Q",
    "kind": "channel",
    "ch": "小猪佩奇 中文官方 Peppa Pig (Mandarin official)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Ca nhạc: bánh xe quay tròn",
   "toi_vi": [
    {
     "t": "Nhong nhong ngựa ông đã về",
     "type": "dong_dao",
     "lyr": "Nhong nhong ngựa ông đã về\nCắt cỏ Bồ Đề cho ngựa ông ăn"
    },
    {
     "t": "Đi cầu đi quán",
     "type": "dong_dao",
     "lyr": "Đi cầu đi quán\nĐi bán lợn con\nĐi mua cái xoong\nĐem về đun nấu\nMua quả dưa hấu\nVề biếu ông bà\nMua một đàn gà\nVề cho ăn thóc\nMua lược chải tóc\nMua cặp gài đầu\nĐi mau về mau\nKẻo trời sắp tối"
    }
   ],
   "book_vi": {
    "t": "Đến thăm thành phố của em (bộ)",
    "author": "(chưa rõ tên tác giả)",
    "publisher": "NXB Trẻ"
   }
  },
  {
   "title": "Tuần 2 – Kể chuyện: một chuyến đi bằng xe",
   "toi_vi": [
    {
     "t": "Đường vô xứ Nghệ quanh quanh",
     "type": "ca_dao",
     "lyr": "Đường vô xứ Nghệ quanh quanh\nNon xanh nước biếc như tranh họa đồ"
    },
    {
     "t": "Nhà Bè nước chảy chia hai",
     "type": "ca_dao",
     "lyr": "Nhà Bè nước chảy chia hai\nAi về Gia Định, Đồng Nai thì về"
    }
   ],
   "book_vi": {
    "t": "Kho tàng truyện cổ tích Việt Nam (sách cho bố mẹ tìm bản gốc truyện Thánh Gióng)",
    "author": "Nguyễn Đổng Chi (sưu tầm, biên soạn)",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được bike, car, bus, truck khi thấy xe ngoài đường"
  ],
  [
   "en",
   "Hát được một đoạn “The wheels on the bus go round and round”"
  ],
  [
   "zh",
   "Nói được 自行车 zìxíngchē, 汽车 qìchē, 公共汽车 gōnggòng qìchē"
  ],
  [
   "zh",
   "Nói được câu 我坐公共汽车 hoặc 爸爸开车"
  ],
  [
   "vi",
   "Đọc theo được đồng dao Nhong nhong và kể lại truyện Rùa và Thỏ"
  ],
  [
   "td",
   "Xếp đúng thứ tự đi xe buýt: chờ, lên xe, ngồi, xuống xe"
  ],
  [
   "xh",
   "Biết nắm tay người lớn và dừng lại khi mẹ nói “Stop”"
  ],
  [
   "vd",
   "Làm được động tác bánh xe, cần gạt nước, còi xe theo bài hát"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Ca nhạc: lên xe buýt nào!",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Mở bài trên YouTube Kids, tắt tự phát. Mẹ dừng mỗi đoạn mới, chỉ vào phần đang được hát: bánh xe (wheels), cần gạt nước, còi xe (horn), cửa xe. Bé chỉ theo. Mẹ nhắc “bus” mỗi lần thấy xe buýt.",
    "b": "Look! A big bus!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Đây là bài bánh xe buýt bản tiếng Trung, cùng giai điệu với bài tiếng Anh. Mẹ dừng mỗi khi nghe 轮子 (bánh xe), bé chỉ bánh xe trên màn hình. Hôm nay con học bus, tiếng Trung là 公共汽车.",
    "b": "这是公共汽车。(zhè shì gōnggòng qìchē)"
   },
   "words": {
    "en": [
     2,
     4,
     5
    ],
    "zh": [
     2,
     3
    ]
   },
   "doi": "Xe buýt ghế (12 phút). Mẹ xếp 4–6 chiếc ghế thành 2 hàng làm xe buýt. Bé làm tài xế ngồi ghế đầu, cầm nắp nồi làm vô lăng. Thú bông là hành khách. Mẹ nói “Go!”, bé lái; “Stop!”, bé dừng. Bé bấm còi “beep beep” khi đến “trạm”.",
   "ob": "Ông bà ngồi ghế làm hành khách, bé lái xe buýt và bấm còi.",
   "toi": "Kể chuyện “Rùa và Thỏ” (phần đầu). Mẹ kể: Thỏ chạy rất nhanh, hay chê Rùa: “Chậm như rùa!”. Rùa bảo: “Mình thi chạy đi.” Cả rừng kéo đến xem. Mẹ đếm “một, hai, ba”, Thỏ phóng vụt đi, Rùa bò từng bước. Mẹ và bé chơi: “fast” thì chạy tại chỗ thật nhanh, “slow” thì bước thật chậm. Hỏi: “Con đoán ai thắng?”."
  },
  {
   "chuyen": "Đoán xe qua tiếng kêu.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và đoán. Trò đoán xe cộ ngắn khoảng 2 phút. Mẹ dừng khi có gợi ý, hỏi bé “Xe gì đây?”. Bé nói tiếng Việt cũng được, rồi nghe video và nhắc theo tên tiếng Anh. Bé làm tiếng kêu của xe đó.",
    "b": "What is it? It's a car!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Chỉ xem 5 phút đầu bài học. Bày sẵn ô tô, xe đạp đồ chơi hoặc tranh xe. Video nói tên xe nào, bé cầm xe đó giơ lên. Mẹ nhắc theo 自行车, 汽车.",
    "b": "这是自行车。(zhè shì zìxíngchē)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Chơi bãi đỗ xe (12 phút). Mẹ dán băng dính trên sàn thành 4 ô đỗ xe. Mẹ viết vào mỗi ô một chữ: BIKE, CAR, BUS, TRUCK. Bé lái xe đồ chơi hoặc tranh xe vào đúng ô mẹ gọi: “Park the bus!”. Đếm số xe trong bãi bằng tiếng Anh.",
   "ob": "Ông bà gọi tên xe, bé đẩy xe đồ chơi vào đúng ô.",
   "toi": "Đồng dao. Mẹ đọc bài “Nhong nhong ngựa ông đã về”. Bé ngồi trên đùi mẹ (hoặc cưỡi ngựa gối), mẹ nhún nhẹ theo nhịp. Mẹ kể: ngày xưa chưa có ô tô, người ta đi ngựa. Hỏi bé: “Bây giờ mình đi bằng gì?” – bike, car, bus.",
   "lyr": "Nhong nhong ngựa ông đã về"
  },
  {
   "chuyen": "Làm động tác như xe buýt.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Đứng dậy xem. Mỗi đoạn một động tác cố định: wheels thì hai tay quay tròn, wipers thì hai tay gạt qua lại, horn thì ấn tay “beep beep”, doors thì hai tay mở ra đóng vào. Mẹ dừng nhạc, bé đứng im.",
    "b": "The wheels go round and round."
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật bài tiếng Trung, dùng đúng động tác như bài tiếng Anh: 轮子 quay tay tròn. Một chiếc xe, hai thứ tiếng, cùng một động tác.",
    "b": "轮子转转转。(lúnzi zhuàn zhuàn zhuàn)"
   },
   "words": {
    "en": [
     2,
     4,
     5,
     6
    ],
    "zh": [
     2,
     3,
     5
    ]
   },
   "doi": "Thí nghiệm bánh xe (12 phút). Mẹ đưa bé một cái nắp hộp tròn và một hộp vuông. Đặt lên mặt sàn nghiêng hoặc đẩy nhẹ: cái nào lăn, cái nào trượt? Vì sao xe có bánh tròn? Mẹ nói “Round wheels roll.” Bé lật ô tô đồ chơi lên, quay bánh và đếm số bánh: one, two, three, four.",
   "ob": "Ông bà lật ô tô đồ chơi, bé đếm số bánh xe.",
   "toi": "Kể tiếp “Rùa và Thỏ”. Mẹ kể: Thỏ chạy được một đoạn, quay lại chẳng thấy Rùa đâu. Thỏ nghĩ: “Còn sớm, ngủ một giấc đã.” Thỏ nằm dưới gốc cây ngáy khò khò. Rùa vẫn bò đều, không nghỉ, qua mặt Thỏ, tới đích. Thỏ tỉnh dậy thì Rùa đã thắng. Mẹ và bé diễn: bé làm Rùa bò, mẹ làm Thỏ ngủ."
  },
  {
   "chuyen": "Xe gì chạy nhanh nhất?",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm tiếng và di chuyển. Xem lại trò đoán. Đoán ra xe nào, bé đứng dậy di chuyển như xe đó: bike thì đạp chân, car thì lái vô lăng, bus thì đi chậm và dừng, truck thì đi nặng nề. Mẹ nói “Go!” và “Stop!”.",
    "b": "Ride a bike! Go, go, go!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – làm tiếng xe. Xem lại 5 phút đầu bài học. Mỗi khi thấy xe, bé làm tiếng xe chạy, rồi mẹ và bé nhắc tên tiếng Trung.",
    "b": "汽车，嘀嘀！(qìchē, dīdī)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     7,
     8
    ],
    "zh": [
     0,
     1,
     4
    ]
   },
   "doi": "Đèn dừng – đi (10 phút). Mẹ cầm 2 tờ giấy: đỏ và xanh. Bé “lái xe” quanh phòng. Mẹ giơ xanh nói “Go!”, bé đi. Giơ đỏ nói “Stop!”, bé dừng ngay. Lượt sau mẹ nói tiếng Trung: 走 (đi), 停 (dừng). Nhắc bé: ngoài đường, mẹ nói stop là phải đứng lại.",
   "ob": "Ông bà giơ giấy đỏ, bé dừng; giơ giấy xanh, bé đi.",
   "toi": "Đồng dao. Mẹ đọc bài “Đi cầu đi quán”. Đến mỗi món mua (lợn con, cái xoong, quả dưa hấu, đàn gà), bé giơ một ngón tay. Hỏi bé: “Đi chợ thì mình đi bằng xe gì?”. Bé kể và nói tên tiếng Anh.",
   "lyr": "Đi cầu đi quán"
  },
  {
   "chuyen": "Bé hát trước, mẹ hát sau.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật bài xe buýt. Mẹ dừng trước mỗi đoạn mới, bé nói trước phần nào của xe sẽ được hát (wheels, wipers, horn) và làm động tác. Cuối cùng bé tự nghĩ một đoạn mới: “The bike on the bus…”, mẹ hát theo bé.",
    "b": "The horn on the bus goes beep beep beep."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé hát trước. Bật bài tiếng Trung. Mẹ dừng trước câu 轮子转转转, bé hát trước rồi bấm tiếp. Bé nói câu 我坐公共汽车.",
    "b": "我坐公共汽车。(wǒ zuò gōnggòng qìchē)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     4,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3,
     5
    ]
   },
   "doi": "Đi bộ ngắm xe (15 phút). Mẹ dắt tay bé đi bộ trên vỉa hè hoặc đứng ở cổng nhà. Bé đếm xe đạp, ô tô, xe buýt đi qua, nói tên tiếng Anh. Mẹ ghi gạch trên giấy. Về nhà đếm: loại nào nhiều nhất? Đứng xa lòng đường, mẹ luôn nắm tay bé.",
   "ob": "Ông bà dắt tay bé ra cổng đếm xe, bé nói tên từng xe.",
   "toi": "Đọc sách tranh. Mẹ đọc một cuốn trong bộ “Đến thăm thành phố của em” (NXB Trẻ). Mỗi trang hỏi: “Ở đây có xe gì?”. Bé chỉ và nói tên tiếng Anh, tiếng Trung những xe bé biết."
  },
  {
   "chuyen": "Thử thách lớn và vào bếp cùng mẹ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao. Xong một trò tô 1 sao; bé làm tiếng xe và nói tên xe khi chơi được thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần xem lại.",
    "b": "Beep beep! Three stars!"
   },
   "zh": {
    "v": 0,
    "t": "Nếu bé muốn: hát lại bài bánh xe tiếng Trung, bé làm động tác.",
    "b": "你真棒！(nǐ zhēn bàng)"
   },
   "doi": "Vào bếp cùng mẹ: bánh mì xe buýt (20 phút). Mẹ cắt lát bánh mì thành hình chữ nhật làm thân xe buýt (dao do mẹ cầm). Mẹ cắt sẵn dưa chuột thành lát tròn to làm bánh xe, phô mai lát làm cửa sổ. Bé tự xếp lên. Vừa làm vừa nói: bread – 面包, cucumber – 黄瓜, wheels – 轮子. Bé rửa tay trước khi làm, không đến gần bếp nóng.",
   "ob": "Ông bà ăn thử bánh mì xe buýt bé làm, bé đếm bánh xe.",
   "toi": "Bé kể lại chuyện. Bé tự kể “Rùa và Thỏ”, mẹ hỏi gợi ý: Ai chạy nhanh? Thỏ làm gì giữa đường? Ai thắng? Vì sao? Mẹ nói: “Chậm mà chăm thì vẫn về đích.”",
   "special": "Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu"
  },
  {
   "chuyen": "Ôn tuần: đi xe buýt thật.",
   "en": {
    "v": 0,
    "t": "Ôn: bé chọn video thích nhất tuần. Nếu là bài xe buýt, cả nhà hát và làm động tác. Chơi lại trò web bé thích.",
    "b": "Let's ride the bus!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: bật bài bánh xe tiếng Trung, bé hát theo.",
    "b": "我们坐车去公园。(wǒmen zuò chē qù gōngyuán)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     7,
     8
    ],
    "zh": [
     0,
     1,
     2,
     5
    ]
   },
   "doi": "Việc thật cùng gia đình: nếu có thể, cả nhà đi một chặng xe buýt ngắn; nếu không, đi bộ đến trạm xe buýt xem xe đến. Bé làm theo thứ tự: chờ ở trạm, lên xe, ngồi xuống, xuống xe. Mỗi bước mẹ nói tiếng Anh, bé nhắc lại. Mẹ luôn nắm tay bé ở trạm và khi lên xuống xe.",
   "ob": "Ông bà dắt bé ra trạm xe buýt, bé chỉ xe và nói “bus”.",
   "toi": "Đồng dao. Mẹ đọc lại bài “Nhong nhong ngựa ông đã về”, bé cưỡi ngựa gối. Rồi bé kể hôm nay đã đi xe gì, thấy những xe gì."
  },
  {
   "chuyen": "Tuần Kể chuyện: Peppa đi xe.",
   "en": {
    "v": 2,
    "t": "Lần 1 – dừng và đoán. Mẹ chọn trước một tập Peppa khoảng 5 phút có xe đạp, ô tô hoặc xe buýt. Mẹ dừng ở 3 chỗ: khi nhân vật lên xe, giữa chuyến đi, trước đoạn kết. Mỗi lần hỏi: “Chuyện gì xảy ra tiếp?”. Bé đoán bằng tiếng Việt, gặp tên xe thì nói tiếng Anh.",
    "b": "What happens next?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem truyện tiếng Trung. Mẹ chọn một tập Peppa tiếng Trung khoảng 5 phút có xe. Không cần hiểu hết: mẹ dừng mỗi khi thấy xe, bé nói tên tiếng Trung, rồi đoán nhân vật đang đi đâu.",
    "b": "佩奇坐汽车。(Pèiqí zuò qìchē)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     6
    ],
    "zh": [
     0,
     1,
     5
    ]
   },
   "doi": "Kể chuyện bằng tranh (12 phút). Mẹ gấp giấy làm 3 ô. Bé vẽ 3 cảnh của tập Peppa: lúc đi, giữa đường, lúc về. Bé chỉ từng ô và kể, gặp tên xe thì nói tiếng Anh. Dán tranh lên tường.",
   "ob": "Ông bà nghe bé kể 3 ô tranh Peppa đi xe.",
   "toi": "Kể chuyện “Thánh Gióng” (phần đầu, kể nhẹ). Mẹ kể: Ở làng Gióng có một cậu bé lên ba mà chưa biết nói, biết cười. Một hôm có sứ giả đi tìm người giúp đất nước. Cậu bé bỗng cất tiếng: “Mẹ ơi, mời sứ giả vào đây!”. Cậu xin một con ngựa sắt và một chiếc roi sắt. Hỏi bé: “Ngựa sắt là ngựa thật hay xe?”."
  },
  {
   "chuyen": "Đoán xe bằng cả câu.",
   "en": {
    "v": 1,
    "t": "Lần 3 – nói câu đầy đủ. Xem lại trò đoán xe. Lần này bé nói cả câu: “It's a bus.” Đoán xong, mẹ hỏi thêm: “Tiếng Trung là gì?”, bé chuyển sang 公共汽车, 自行车.",
    "b": "Is it a truck? Yes, it is!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – nói câu. Xem lại đoạn đầu bài học. Sau mỗi xe, bé nói câu 我坐 + tên xe (con đi …): 我坐汽车.",
    "b": "我坐自行车。(wǒ zuò zìxíngchē)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     5
    ]
   },
   "doi": "Bán vé xe buýt (12 phút). Bé làm người bán vé, mẹ làm khách. Vé là mẩu giấy to bằng bàn tay. Mẹ nói: “One ticket, please.” Bé đưa vé và nói “Here you are.” Rồi mẹ lên “xe buýt ghế”, bé lái. Đổi vai, lần này nói tiếng Trung: “我坐公共汽车”.",
   "ob": "Ông bà mua vé của bé rồi ngồi lên xe buýt ghế.",
   "toi": "Ca dao. Mẹ đọc câu “Đường vô xứ Nghệ quanh quanh”. Mẹ giải thích: đường vào xứ Nghệ ngoằn ngoèo, hai bên có núi xanh, nước biếc. Mẹ và bé lấy ngón tay vẽ con đường quanh co trên lưng nhau. Hỏi bé: “Đi đường xa thì mình đi xe gì?”.",
   "lyr": "Đường vô xứ Nghệ quanh quanh"
  },
  {
   "chuyen": "Đóng vai trong chuyện Peppa.",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại tập Peppa đã chọn. Bé chọn làm Peppa hoặc George, mẹ làm bố Peppa lái xe. Mỗi khi mẹ dừng, bé diễn lại đúng việc nhân vật đang làm. Gặp tên xe, bé nói to.",
    "b": "Daddy Pig, let's go!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – gọi tên những gì thấy. Xem lại tập Peppa tiếng Trung. Bé làm “người dẫn đường”: mẹ dừng, bé chỉ và nói 这是… với từ đã biết (汽车, 自行车, 轮子).",
    "b": "这是轮子。(zhè shì lúnzi)"
   },
   "words": {
    "en": [
     0,
     1,
     6,
     7,
     8
    ],
    "zh": [
     0,
     1,
     3
    ]
   },
   "doi": "Đạp xe an toàn (15 phút). Nếu bé có xe đạp hoặc xe chòi chân, ra sân hoặc công viên, xa đường xe. Bé đội mũ bảo hiểm. Mẹ hô “Ride!”, bé đạp; “Stop!”, bé dừng ngay. Đếm số lần dừng đúng. Nếu không có xe, bé “đạp xe” nằm ngửa trên thảm.",
   "ob": "Ông bà đứng ở đích, bé đạp xe đến và dừng khi ông bà nói “stop”.",
   "toi": "Kể tiếp “Thánh Gióng”. Mẹ kể: Từ hôm đó, Gióng ăn bao nhiêu cũng không no, lớn nhanh như thổi. Cả làng góp gạo, góp cà nấu cơm nuôi Gióng. Khi ngựa sắt và roi sắt làm xong, Gióng vươn vai thành tráng sĩ, nhảy lên ngựa. Ngựa sắt hí vang, phi như gió. Mẹ và bé cưỡi “ngựa” quanh phòng."
  },
  {
   "chuyen": "Hát đoạn xe buýt tự đặt.",
   "en": {
    "v": 0,
    "t": "Lần 4 – hát câu mới. Bật bài xe buýt. Mẹ tắt tiếng giữa câu, bé hát nốt cả câu. Rồi bé tự đặt một đoạn mới về xe khác: “The wheels on the bike go round and round.” Mẹ hát theo bé.",
    "b": "The wheels on the bike go round and round!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – chuyển ngữ. Bật bài bánh xe tiếng Trung, tắt tiếng. Mẹ chỉ hình, bé nói cả hai thứ tiếng: bus – 公共汽车, wheels – 轮子. Bật tiếng xem lại.",
    "b": "公共汽车是bus。(gōnggòng qìchē shì bus)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Một chiếc xe, hai cái tên (10 phút). Mẹ giơ xe đồ chơi hoặc tranh. Mẹ nói tiếng Anh, bé nói tiếng Trung; rồi đổi lại. Đúng thì bé được cho xe “chạy” vào bãi đỗ. Hết xe, bé nói “Stop! Park!”.",
   "ob": "Ông bà giơ ô tô đồ chơi, bé nói “car”.",
   "toi": "Ca dao. Mẹ đọc câu “Nhà Bè nước chảy chia hai”. Mẹ giải thích: ở Nhà Bè có dòng sông chia làm hai nhánh, ai muốn về đâu thì về. Mẹ và bé dùng hai ngón tay đi theo hai con đường trên tay mẹ. Hỏi: “Nếu con đi xa, con muốn về đâu?”.",
   "lyr": "Nhà Bè nước chảy chia hai"
  },
  {
   "chuyen": "Bé kể chuyện trước khi xem.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước. Trước khi bật video, bé cầm 3 ô tranh và kể lại tập Peppa. Rồi mới xem để kiểm tra. Đến cuối, bé nói một câu: “Peppa likes the car.”",
    "b": "I like the bus. Do you?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 4 – bé nói trước video. Xem lại đoạn đầu bài học. Mẹ dừng trước mỗi xe, bé nói tên tiếng Trung trước. Thêm câu 爸爸开车.",
    "b": "爸爸开车。(bàba kāi chē)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     8
    ],
    "zh": [
     0,
     1,
     2,
     4
    ]
   },
   "doi": "Chuẩn bị đi chợ ngày mai (10 phút). Mẹ và bé vẽ danh sách bằng tranh những xe sẽ tìm trên đường đi chợ: xe đạp, ô tô, xe tải. Bé tập câu: “I see a truck!”. Ở chợ hoặc siêu thị sẽ tìm thêm quầy đồ chơi xe.",
   "ob": "Ông bà xem danh sách tranh, hỏi bé mai sẽ tìm xe gì.",
   "toi": "Bé kể lại “Thánh Gióng”. Mẹ hỏi từng bước: Cậu bé lên ba thế nào? Ai nuôi Gióng? Gióng cưỡi gì? Rồi mẹ kể đoạn kết ngắn: Gióng phi ngựa giúp đất nước bình yên, rồi cưỡi ngựa bay lên trời. Mẹ đọc thêm cho mình bản đầy đủ trong “Kho tàng truyện cổ tích Việt Nam” của Nguyễn Đổng Chi (NXB Trẻ) để kể cho đúng."
  },
  {
   "chuyen": "Thử thách lớn và săn từ ở chợ.",
   "en": {
    "v": 1,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu (It's a…, I see a…) mới được tô sao. Đủ sao, bé chọn 1 video yêu thích trong tuần xem lại.",
    "b": "You are a super driver!"
   },
   "doi": "Săn từ ở chợ hoặc siêu thị (25 phút). Trên đường đi, bé tìm xe theo danh sách tranh: “I see a bike!”. Đến nơi, ghé bãi gửi xe đếm số xe đạp, xe máy, ô tô. Vào quầy đồ chơi, bé tìm ô tô, xe buýt đồ chơi và nói tên tiếng Anh, tiếng Trung. Ở bãi xe, mẹ luôn nắm tay bé, đứng xa xe đang chạy.",
   "ob": "Ông bà dắt bé đi chợ, chỉ xe để bé gọi tên.",
   "toi": "Buổi tối kể chuyện đi chợ. Bé kể hôm nay thấy những xe gì, loại nào nhiều nhất. Mẹ đọc lại ca dao “Đường vô xứ Nghệ quanh quanh”, bé vẽ con đường bằng ngón tay.",
   "lyr": "Đường vô xứ Nghệ quanh quanh",
   "special": "Săn từ ở chợ hoặc siêu thị"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: hát lại bài xe buýt, bé làm động tác, không tính điểm. Mẹ ôm bé khi hết bài.",
    "b": "All through the town!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: bật bài bánh xe tiếng Trung, cả nhà hát.",
    "b": "再见，公共汽车！(zàijiàn, gōnggòng qìchē)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Việc thật cùng gia đình: bé giúp bố mẹ lau xe đạp hoặc lau bánh xe đẩy bằng khăn ẩm. Bé đếm bánh xe, nói “wheels” và “轮子”. Mẹ giữ xe chắc, bé không ngồi lên khi đang lau.",
   "ob": "Ông bà kể cho bé nghe ngày xưa ông bà đi học bằng gì.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại bài “Đi cầu đi quán”, bé giơ ngón tay đếm đồ mua. Bé kể chiếc xe bé thích nhất. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Đi cầu đi quán",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[116] = {
 "sub": "Tàu, máy bay, thuyền, đèn giao thông",
 "vocab": {
  "en": [
   [
    "train",
    "🚆",
    "tàu hỏa",
    false
   ],
   [
    "plane",
    "✈️",
    "máy bay",
    false
   ],
   [
    "boat",
    "⛵",
    "con thuyền",
    false
   ],
   [
    "red light",
    "🔴",
    "đèn đỏ",
    false
   ],
   [
    "yellow light",
    "🟡",
    "đèn vàng",
    false
   ],
   [
    "green light",
    "🟢",
    "đèn xanh",
    false
   ],
   [
    "stop",
    "🛑",
    "dừng lại",
    true
   ],
   [
    "go",
    "➡️",
    "đi",
    true
   ],
   [
    "row",
    "🚣",
    "chèo thuyền",
    true
   ],
   [
    "fly",
    "🛫",
    "bay",
    true
   ]
  ],
  "zh": [
   [
    "火车",
    "huǒchē",
    "tàu hỏa",
    "🚆"
   ],
   [
    "飞机",
    "fēijī",
    "máy bay",
    "✈️"
   ],
   [
    "船",
    "chuán",
    "con thuyền",
    "⛵"
   ],
   [
    "红灯",
    "hóngdēng",
    "đèn đỏ",
    "🔴"
   ],
   [
    "绿灯",
    "lǜdēng",
    "đèn xanh",
    "🟢"
   ],
   [
    "停",
    "tíng",
    "dừng",
    "🛑"
   ],
   [
    "走",
    "zǒu",
    "đi",
    "➡️"
   ],
   [
    "快",
    "kuài",
    "nhanh",
    "⚡"
   ]
  ],
  "en_phr": [
   [
    "Red light, stop!",
    "stop",
    "🔴"
   ],
   [
    "Green light, go!",
    "go",
    "🟢"
   ],
   [
    "The plane flies in the sky.",
    "plane",
    "✈️"
   ],
   [
    "Row, row, row your boat.",
    "boat",
    "⛵"
   ],
   [
    "Choo choo! Here comes the train.",
    "train",
    "🚆"
   ]
  ],
  "zh_phr": [
   [
    "红灯停，绿灯走。",
    "绿灯",
    "hóngdēng tíng, lǜdēng zǒu",
    "đèn đỏ dừng, đèn xanh đi",
    "🚦"
   ],
   [
    "飞机飞得高。",
    "飞机",
    "fēijī fēi de gāo",
    "máy bay bay cao",
    "✈️"
   ],
   [
    "火车快快开。",
    "火车",
    "huǒchē kuàikuài kāi",
    "tàu hỏa chạy nhanh nhanh",
    "🚆"
   ]
  ],
  "seq": [
   [
    "🔴",
    "red light: stop",
    "红灯停"
   ],
   [
    "👀",
    "look left and right",
    "看一看"
   ],
   [
    "🟢",
    "green light: go",
    "绿灯走"
   ],
   [
    "🤝",
    "hold hands and walk",
    "拉着手走"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Red Light, Green Light – đèn đỏ dừng, đèn xanh đi",
    "u": "https://www.youtube.com/watch?v=iyvDPW3IKP0",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Row Row Row Your Boat – chèo thuyền",
    "u": "https://www.youtube.com/watch?v=7otAJa3jui8",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Learn Vehicles – trò đoán xe cộ (dùng lại, khoảng 2 phút)",
    "u": "https://www.youtube.com/watch?v=QxoqW84ec-M",
    "kind": "game",
    "ch": "Maple Leaf Learning",
    "min": 2
   }
  ],
  "zh": [
   {
    "t": "火车快飞 – tàu hỏa chạy nhanh",
    "u": "https://www.youtube.com/watch?v=Hk6-D1b8Zyo",
    "kind": "song_action",
    "ch": "中文歌曲 – Chinese Songs for Children"
   },
   {
    "t": "交通工具 – phương tiện giao thông: máy bay, thuyền, tàu (xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=DfGWiJ0a_-g",
    "kind": "lesson",
    "ch": "ChineseClass365 中文加油站"
   },
   {
    "t": "Wheels on the Bus tiếng Trung bản thứ hai – ôn xe buýt, bé tự làm động tác (khoảng 2–3 phút)",
    "u": "https://www.youtube.com/watch?v=aCusPGN6Rbg",
    "kind": "song_action",
    "ch": "Central Mandarin",
    "min": 2.5
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Khám phá: cái gì bay, cái gì nổi, đèn nào dừng?",
   "toi_vi": [
    {
     "t": "Thăng Long Hà Nội đô thành",
     "type": "ca_dao",
     "lyr": "Thăng Long Hà Nội đô thành\nNước non ai vẽ nên tranh họa đồ."
    },
    {
     "t": "Lộn cầu vồng",
     "type": "dong_dao",
     "lyr": "Lộn cầu vồng\nNước trong nước chảy\nCó cô mười bảy\nCó chị mười ba\nHai chị em ta\nCùng lộn cầu vồng"
    }
   ],
   "book_vi": {
    "t": "Vòng quanh thế giới",
    "author": "(chưa rõ tên tác giả)",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần 2 – Thử thách: đèn đỏ, đèn xanh, ai nhanh hơn?",
   "toi_vi": [
    {
     "t": "Làng tôi có lũy tre xanh",
     "type": "ca_dao",
     "lyr": "Làng tôi có lũy tre xanh\nCó sông Tô Lịch uốn quanh xóm làng\nBên bờ vải nhãn hai hàng\nDưới sông cá lội từng đàn tung tăng"
    },
    {
     "t": "Đi mô cũng nhớ quê mình",
     "type": "ca_dao",
     "lyr": "Đi mô cũng nhớ quê mình,\nNhớ Hương Giang gió mát, nhớ Ngự Bình trăng thanh."
    }
   ],
   "book_vi": {
    "t": "Hành trình khám phá (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được train, plane, boat khi xem tranh"
  ],
  [
   "en",
   "Làm đúng lệnh “Red light, stop!” và “Green light, go!”"
  ],
  [
   "zh",
   "Nói được 火车 huǒchē, 飞机 fēijī, 船 chuán"
  ],
  [
   "zh",
   "Nói được câu 红灯停，绿灯走"
  ],
  [
   "vi",
   "Nói được ý nghĩa đèn đỏ, đèn vàng, đèn xanh bằng tiếng Việt"
  ],
  [
   "td",
   "Phân biệt được xe đi trên đường, trên ray, trên nước, trên trời"
  ],
  [
   "xh",
   "Dừng lại khi qua đường và nắm tay người lớn mà không cần nhắc"
  ],
  [
   "vd",
   "Chèo thuyền, bay máy bay, chạy tàu theo nhạc nhanh – chậm"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Khám phá: đèn giao thông.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Bài hát về đèn giao thông và chiếc ô tô. Mẹ dừng mỗi khi đèn đổi màu, hỏi: “Đèn màu gì? Xe làm gì?”. Bé chỉ đèn trên màn hình. Mẹ nhắc theo “red light – stop”, “green light – go”.",
    "b": "Red light! Stop!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Chỉ xem 5 phút đầu bài học, chú ý phần máy bay, thuyền, tàu hỏa. Bé cầm tranh hoặc đồ chơi, video nói tên nào thì giơ lên. Hôm nay con học stop và go; tiếng Trung là 停 và 走.",
    "b": "这是飞机。(zhè shì fēijī)"
   },
   "words": {
    "en": [
     3,
     4,
     5,
     6,
     7
    ],
    "zh": [
     1,
     2,
     5,
     6
    ]
   },
   "doi": "Làm đèn giao thông (15 phút). Mẹ cắt 3 hình tròn to bằng giấy màu đỏ, vàng, xanh. Bé dán lên một tấm bìa đen theo đúng thứ tự từ trên xuống: đỏ, vàng, xanh. Mẹ hỏi: “Đèn đỏ thì làm gì?” – dừng. “Đèn vàng?” – đi chậm lại, chuẩn bị dừng. “Đèn xanh?” – đi. Bé nói tiếng Anh từng đèn.",
   "ob": "Ông bà chỉ đèn đỏ trên tấm bìa, bé nói “stop”.",
   "toi": "Kể chuyện “Sự tích Hồ Gươm” (phần đầu). Mẹ kể: Ngày xưa, Lê Lợi được Long Quân dưới nước cho mượn một thanh gươm thần để giúp đất nước. Có gươm thần, Lê Lợi cùng mọi người giữ được bình yên cho quê hương. Hỏi bé: “Long Quân sống ở đâu?” – dưới nước. Mai kể tiếp chuyện con thuyền trên hồ."
  },
  {
   "chuyen": "Chèo thuyền theo nhạc.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm. Mẹ và bé ngồi đối diện trên sàn, nắm tay nhau. Bật bài chèo thuyền, cả hai đẩy kéo qua lại như chèo. Lần đầu chỉ xem và chèo chậm. Mẹ nói “boat” mỗi khi thấy thuyền.",
    "b": "Row, row, row your boat."
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và làm tàu. Bài tàu hỏa chạy nhanh. Mẹ đứng trước làm đầu tàu, bé bám vai mẹ làm toa. Đi chậm quanh phòng theo nhạc. Mẹ nhắc 火车 mỗi khi thấy tàu.",
    "b": "火车来了！(huǒchē lái le)"
   },
   "words": {
    "en": [
     2,
     8
    ],
    "zh": [
     0,
     7
    ]
   },
   "doi": "Thí nghiệm thuyền nổi (15 phút). Mẹ đổ nước vào một chậu nông đặt trên khăn. Mẹ và bé gấp thuyền giấy và thử thêm một khay nhựa nhỏ làm thuyền. Thuyền nào nổi lâu hơn? Bé thổi cho thuyền chạy, nói “boat” và “船”. Mẹ ngồi cạnh bé suốt lúc chơi nước, xong đổ nước ngay.",
   "ob": "Ông bà ngồi cạnh chậu nước, cùng bé thổi thuyền giấy.",
   "toi": "Ca dao. Mẹ đọc câu “Thăng Long Hà Nội đô thành”. Mẹ kể: Hà Nội có Hồ Gươm, giữa hồ có Tháp Rùa. Nếu có ảnh Hồ Gươm, mẹ cho bé xem. Hỏi: “Muốn ra giữa hồ thì đi bằng gì?” – boat, 船.",
   "lyr": "Thăng Long Hà Nội đô thành"
  },
  {
   "chuyen": "Máy bay giấy bay xa bao nhiêu?",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm theo đèn. Đứng dậy xem lại bài đèn giao thông. Bé “lái xe” chạy tại chỗ. Đèn xanh, bé chạy; đèn vàng, bé chạy chậm; đèn đỏ, bé đứng im. Mẹ dừng video ở mỗi đèn, bé nói màu đèn trước.",
    "b": "Yellow light, slow down."
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Xem lại đoạn đầu bài học. Mỗi phương tiện một động tác cố định giống tiếng Anh: 飞机 dang hai tay bay, 船 chèo, 火车 tay quay như bánh tàu. Video nói từ nào, bé làm động tác đó.",
    "b": "飞机飞得高。(fēijī fēi de gāo)"
   },
   "words": {
    "en": [
     1,
     3,
     4,
     5,
     9
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Thí nghiệm máy bay giấy (15 phút). Mẹ gấp 2 chiếc máy bay giấy: một chiếc cánh to, một chiếc cánh nhỏ. Bé phóng từng chiếc trong phòng (không phóng vào mặt người), mẹ đánh dấu chỗ rơi. Chiếc nào bay xa hơn? Đếm số bước bằng tiếng Anh. Bé nói “Fly!” và “飞!” mỗi lần phóng.",
   "ob": "Ông bà phóng máy bay giấy cùng bé, đếm bước xem bay xa bao nhiêu.",
   "toi": "Kể tiếp “Sự tích Hồ Gươm”. Mẹ kể: Khi đất nước đã bình yên, vua Lê Lợi đi thuyền chơi trên hồ. Bỗng một chú Rùa Vàng to nổi lên, nói: “Xin vua trả lại gươm cho Long Quân.” Vua tháo gươm trao cho Rùa. Rùa ngậm gươm lặn xuống nước. Từ đó hồ có tên Hồ Gươm. Mẹ và bé chèo thuyền trên sàn rồi làm Rùa lặn xuống."
  },
  {
   "chuyen": "Tàu hỏa nhanh và chậm.",
   "en": {
    "v": 1,
    "t": "Lần 2 – chèo nhanh, chèo chậm. Xem lại bài chèo thuyền. Lần này đổi tốc độ: mẹ nói “slow” thì chèo chậm, “fast” thì chèo nhanh. Mẹ dừng nhạc, cả hai đứng im như thuyền đậu.",
    "b": "Row fast! Row slow!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – tàu nhanh, tàu chậm. Xem lại bài tàu hỏa. Lần này tàu đi theo nhạc: nhạc nhanh thì chạy nhanh, mẹ nói 快 (nhanh) thì tăng tốc, mẹ nói 停 (dừng) thì dừng lại ở “ga”.",
    "b": "快！快！停！(kuài! kuài! tíng!)"
   },
   "words": {
    "en": [
     0,
     2,
     8
    ],
    "zh": [
     0,
     5,
     7
    ]
   },
   "doi": "So sánh nơi đi của xe (12 phút). Mẹ vẽ 3 vùng trên giấy to: con đường, mặt nước, bầu trời. Bé đặt tranh hoặc đồ chơi vào đúng chỗ: car, bus trên đường; boat dưới nước; plane trên trời; train trên đường ray. Mẹ hỏi: “Where does the boat go?”, bé chỉ.",
   "ob": "Ông bà hỏi “Máy bay bay ở đâu?”, bé chỉ lên trời.",
   "toi": "Đồng dao. Mẹ đọc bài “Lộn cầu vồng”. Hai mẹ con nắm hai tay nhau, đọc hết bài thì cùng xoay người qua tay (làm chậm, dưới sàn trống). Mẹ hỏi: “Cầu vồng có những màu gì?” – red, yellow, green… giống đèn giao thông.",
   "lyr": "Lộn cầu vồng"
  },
  {
   "chuyen": "Bé nói trước video.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật bài đèn giao thông. Mẹ dừng ngay trước khi đèn đổi, bé nói trước “Red light!” hay “Green light!” và lệnh “Stop!” hay “Go!”.",
    "b": "Green light! Go, go, go!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật bài tàu hỏa. Mẹ dừng trước chữ 火车, bé nói trước rồi bấm tiếp. Bé làm đầu tàu, mẹ làm toa.",
    "b": "火车快快开。(huǒchē kuàikuài kāi)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5
    ],
    "zh": [
     0,
     3,
     4,
     7
    ]
   },
   "doi": "Đi bộ tìm đèn giao thông (15 phút). Mẹ dắt bé đi bộ đến một ngã tư gần nhà. Đứng trên vỉa hè, xa mép đường. Bé chỉ đèn đổi màu và nói “red light – stop”, “green light – go”. Khi qua đường, mẹ nắm chặt tay bé, chỉ đi khi đèn dành cho người đi bộ màu xanh và nhìn trái, nhìn phải.",
   "ob": "Ông bà dắt tay bé ra ngã tư, chỉ đèn đỏ và nói “dừng lại”.",
   "toi": "Đọc sách. Mẹ đọc cuốn “Vòng quanh thế giới” (NXB Kim Đồng). Hỏi bé: “Muốn đi nước khác thì đi bằng gì?” – plane, boat. Bé chỉ tranh máy bay, thuyền và nói tiếng Anh, tiếng Trung."
  },
  {
   "chuyen": "Thử thách lớn và đường hầm chăn gối.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao. Xong một trò tô 1 sao; bé nói đúng tên xe hoặc màu đèn khi chơi được thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần để xem lại.",
    "b": "Stop! You win three stars!"
   },
   "zh": {
    "v": 0,
    "t": "Nếu bé muốn: bật bài tàu hỏa, cả nhà làm tàu chạy qua đường hầm.",
    "b": "火车进山洞。(huǒchē jìn shāndòng)"
   },
   "doi": "Xây pháo đài chăn gối thành đường hầm tàu hỏa (25 phút). Cả nhà dùng ghế và chăn dựng một đường hầm dài. Bé làm đầu tàu, bò qua đường hầm và kêu “choo choo”. Trong đường hầm, mẹ bật đèn pin to và kể chuyện: tàu hỏa chở bé đi thăm Hồ Gươm, gặp Rùa Vàng. Để hai đầu hầm thoáng, không đè chăn lên mặt bé.",
   "ob": "Ông bà ngồi đầu đường hầm làm “nhà ga”, đón tàu của bé.",
   "toi": "Kể chuyện trong pháo đài. Bé kể lại “Sự tích Hồ Gươm” theo trí nhớ: ai cho mượn gươm, vua đi gì trên hồ, ai xin lại gươm. Mẹ nhắc: “Mượn của ai thì phải trả lại, con nhỉ?”.",
   "special": "Xây pháo đài chăn gối, kể chuyện trong pháo đài"
  },
  {
   "chuyen": "Ôn tuần: cả nhà đi ngắm tàu xe.",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn video thích nhất tuần. Nếu là bài chèo thuyền, cả nhà ngồi thành hàng chèo cùng. Chơi lại trò web bé thích.",
    "b": "Merrily, merrily!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn: xem lại đoạn đầu bài học, bé làm động tác bay, chèo, chạy tàu.",
    "b": "我们坐船。(wǒmen zuò chuán)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     8,
     9
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Việc thật cùng gia đình: nếu gần nhà có ga tàu, bến thuyền, hồ có thuyền đạp hoặc chỗ nhìn thấy máy bay, cả nhà đi xem. Bé chỉ và nói tên tiếng Anh, tiếng Trung. Ở bến nước, mẹ luôn nắm tay bé, đứng xa mép nước. Nếu đi thuyền, bé mặc áo phao và ngồi cạnh người lớn.",
   "ob": "Ông bà dắt bé đi dạo bờ hồ, chỉ thuyền cho bé gọi tên.",
   "toi": "Bé kể lại một ngày. Bé kể hôm nay đã thấy những gì: tàu, thuyền, máy bay. Mẹ đọc lại câu ca dao “Thăng Long Hà Nội đô thành”, bé đọc cùng câu đầu."
  },
  {
   "chuyen": "Tuần Thử thách: đèn đỏ, đèn xanh!",
   "en": {
    "v": 0,
    "t": "Lần 4 – thi phản xạ. Bật bài đèn giao thông. Mẹ và bé cùng “lái xe”. Ai dừng chậm khi đèn đỏ thì mất lượt. Bé dừng đúng được 1 sao. Mẹ thỉnh thoảng cố tình đi tiếp để bé nhắc “Stop! Red light!”.",
    "b": "Red light means stop!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – thi tàu nhanh. Bật bài tàu hỏa. Mẹ và bé thi: ai nói 火车 trước khi video nói thì được làm đầu tàu. Thêm câu 火车快快开.",
    "b": "我是火车头！(wǒ shì huǒchē tóu)"
   },
   "words": {
    "en": [
     3,
     4,
     5,
     6,
     7
    ],
    "zh": [
     0,
     3,
     4,
     5,
     6
    ]
   },
   "doi": "Trò chơi đèn xanh đèn đỏ (12 phút). Mẹ cầm tấm đèn giao thông đã làm, đứng cuối phòng. Bé đứng ở vạch xuất phát. Mẹ chỉ đèn xanh và nói “Green light!”, bé bước tới; chỉ đỏ “Red light!”, bé đứng im. Ai cử động khi đèn đỏ thì về lại vạch. Bé chạm được mẹ thì thắng 3 sao. Lượt sau mẹ nói tiếng Trung: 绿灯, 红灯.",
   "ob": "Ông bà chỉ đèn trên tấm bìa, bé bước tới hoặc đứng im.",
   "toi": "Kể chuyện “Ếch ngồi đáy giếng” (bản vui). Mẹ kể: Chú ếch sống dưới đáy giếng, ngước lên chỉ thấy một khoảng trời tròn bé xíu. Ếch nghĩ: “Trời chỉ to bằng cái vung thôi.” Một hôm mưa to, nước dâng, ếch được đưa lên bờ. Hỏi bé: “Ếch ra ngoài sẽ thấy gì?”. Mai kể tiếp."
  },
  {
   "chuyen": "Đố phương tiện có tính điểm.",
   "en": {
    "v": 2,
    "t": "Lần 1 – đố nhanh. Xem trò đoán xe cộ. Mẹ và bé thi đoán: ai nói tên tiếng Anh trước được 1 sao. Đoán ra máy bay, thuyền, tàu hỏa thì phải nói cả câu “It's a plane.”",
    "b": "It's a train! Choo choo!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – thi nói. Xem lại đoạn đầu bài học. Ai nói tên tiếng Trung trước (mẹ hay bé) được 1 sao. Nói thêm câu 这是… thì được sao vàng.",
    "b": "这是船！(zhè shì chuán)"
   },
   "words": {
    "en": [
     0,
     1,
     2
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Đố phương tiện bằng động tác (12 phút). Mẹ làm động tác không nói: dang tay bay, tay chèo, tay quay bánh tàu. Bé đoán bằng tiếng Anh, đúng được 1 sao. Đổi vai: bé làm động tác, mẹ đoán bằng tiếng Trung. Đủ 6 sao, bé chọn bài để cả nhà nhảy.",
   "ob": "Ông bà dang tay làm máy bay, bé đoán “plane”.",
   "toi": "Kể tiếp “Ếch ngồi đáy giếng”. Mẹ kể bản vui: Ếch nhảy lên bờ, ngẩng đầu nhìn: ôi, bầu trời rộng quá, xanh mênh mông! Có cánh đồng, dòng sông, đàn cò bay. Ếch kết bạn với các bạn mới và nói: “Đi ra ngoài mới biết thế giới to thế nào.” Hỏi bé: “Con muốn đi thăm nơi nào xa? Đi bằng gì?”."
  },
  {
   "chuyen": "Chèo thuyền thi nhanh.",
   "en": {
    "v": 1,
    "t": "Lần 3 – hát câu mới. Bật bài chèo thuyền. Bé tự đặt đoạn mới với xe khác: “Fly, fly, fly your plane…” hoặc “Drive, drive, drive your car…”. Mẹ hát theo bé, cả hai làm động tác mới.",
    "b": "Fly, fly, fly your plane!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – bé tự làm động tác. Bản bánh xe buýt tiếng Trung thứ hai. Tuần trước con đã học bài này với mẹ, hôm nay bé tự làm động tác một mình, mẹ chỉ xem và vỗ tay.",
    "b": "你自己做！(nǐ zìjǐ zuò)"
   },
   "words": {
    "en": [
     1,
     2,
     8,
     9
    ],
    "zh": [
     5,
     6,
     7
    ]
   },
   "doi": "Đua thuyền ghế (12 phút). Mỗi người ngồi trên một tấm thảm nhỏ hoặc gối. Mẹ hô “Row!”, cả hai “chèo” bằng tay về phía đích, dịch dần gối trên sàn trơn nhẹ. Ai đến đích trước được 1 sao. Lượt sau mẹ hô “快!”. Dẹp đồ vướng trước khi chơi.",
   "ob": "Ông bà hô “chèo!”, bé ngồi gối chèo về phía ông bà.",
   "toi": "Ca dao. Mẹ đọc câu “Làng tôi có lũy tre xanh”. Mẹ kể: muốn về làng quê xa, có khi phải đi tàu hỏa, đi thuyền. Hỏi bé: “Về quê nội, quê ngoại mình đi bằng gì?”. Bé kể và nói tên tiếng Anh.",
   "lyr": "Làng tôi có lũy tre xanh"
  },
  {
   "chuyen": "Mẹ nói sai, bé sửa.",
   "en": {
    "v": 0,
    "t": "Lần 5 – bé sửa mẹ. Bật bài đèn giao thông, tắt tiếng. Mẹ chỉ đèn đỏ và cố tình nói “Go!”. Bé sửa: “No! Red light, stop!”. Rồi bật tiếng xem lại để kiểm tra.",
    "b": "No! Red light, stop!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 4 – chuyển ngữ. Xem lại đoạn đầu bài học, tắt tiếng. Mẹ chỉ hình, bé nói cả hai thứ tiếng: plane – 飞机, boat – 船, train – 火车. Bật tiếng xem lại.",
    "b": "飞机是plane。(fēijī shì plane)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   "doi": "Một phương tiện, hai cái tên (10 phút). Mẹ úp 6 thẻ tranh. Bé lật một thẻ. Mẹ hỏi tiếng Anh thì bé trả lời tiếng Trung, mẹ hỏi tiếng Trung thì bé trả lời tiếng Anh. Đúng thì giữ thẻ. Cuối cùng đếm số thẻ.",
   "ob": "Ông bà lật thẻ tranh, bé nói tên tiếng Anh.",
   "toi": "Ca dao. Mẹ đọc câu “Đi mô cũng nhớ quê mình”. Mẹ giải thích: “đi mô” là “đi đâu”, tiếng miền Trung. Người Huế đi xa vẫn nhớ sông Hương, núi Ngự. Hỏi bé: “Con đi xa con nhớ gì nhất ở nhà?”.",
   "lyr": "Đi mô cũng nhớ quê mình"
  },
  {
   "chuyen": "Làm đồ hoá trang.",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé làm người đố. Xem lại trò đoán xe một lượt. Rồi tắt video, bé làm “cô giáo”: bé làm tiếng xe, mẹ đoán tên tiếng Anh. Mẹ đoán sai một lần để bé sửa.",
    "b": "Is it a bus? No, it's a boat!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 5 – bé hát một mình. Bật bài tàu hỏa, tắt tiếng. Bé hát theo trí nhớ, mẹ làm toa tàu. Đến cuối bé nói 停! và cả tàu dừng.",
    "b": "停！到站了。(tíng! dào zhàn le)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     6,
     7
    ],
    "zh": [
     0,
     5,
     6,
     7
    ]
   },
   "doi": "Làm đồ hoá trang (15 phút). Bé chọn làm cảnh sát giao thông, phi công hoặc lái tàu. Cảnh sát: bé cầm tấm đèn giao thông và một chiếc còi giấy cuộn to. Phi công: mẹ cắt mũ giấy và đôi cánh bằng bìa. Lái tàu: mũ giấy và vô lăng bằng đĩa giấy. Dây đeo bằng ruy băng ngắn, buộc lỏng.",
   "ob": "Ông bà giúp bé tô màu mũ phi công hoặc mũ cảnh sát.",
   "toi": "Đọc sách. Mẹ đọc một cuốn trong bộ “Hành trình khám phá” (NXB Trẻ). Hỏi bé: “Bạn nhỏ trong sách đi đâu? Đi bằng gì?”. Bé kể lại và nói tên phương tiện bằng tiếng Anh, tiếng Trung."
  },
  {
   "chuyen": "Thử thách lớn và ngày hoá trang.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu (Red light, stop!, It's a plane., The train is fast.) mới được tô sao. Đủ sao, bé chọn 1 video yêu thích để xem lại trong bộ đồ hoá trang.",
    "b": "Officer, you did it!"
   },
   "zh": {
    "v": 0,
    "t": "Thêm nếu bé muốn: bật bài tàu hỏa, bé lái tàu trong bộ đồ hoá trang.",
    "b": "我是司机！(wǒ shì sījī)"
   },
   "doi": "Ngày hoá trang (20 phút). Bé mặc đồ đã làm, đóng vai nhân vật trong video: chiếc xe trong bài đèn giao thông, người chèo thuyền hoặc lái tàu. Nếu làm cảnh sát giao thông, bé giơ đèn và hô “Red light, stop!”, “Green light, go!” cho cả nhà “lái xe” trong phòng. Nếu làm phi công, bé nói “I'm a pilot. Let's fly!”. Mẹ quay clip.",
   "ob": "Ông bà làm người lái xe, dừng và đi theo đèn bé giơ.",
   "toi": "Kể lại “Ếch ngồi đáy giếng”. Bé kể theo bản vui: ếch ở đâu, nghĩ trời to bằng gì, ra ngoài thấy gì. Mẹ hỏi: “Tuần này con đã ‘ra khỏi giếng’ đi xem những gì?”.",
   "special": "Ngày hoá trang: bé đóng vai nhân vật trong video"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ: hát lại bài chèo thuyền, mẹ và bé chèo chậm, không tính điểm. Xem lại clip hoá trang.",
    "b": "Life is but a dream."
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: bật bài tàu hỏa, cả nhà làm đoàn tàu.",
    "b": "火车，再见！(huǒchē, zàijiàn)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5
    ],
    "zh": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   "doi": "Việc thật cùng gia đình: khi đi ra ngoài cùng cả nhà, bé làm “cảnh sát nhỏ”: đến chỗ qua đường bé nhắc “Stop! Look left and right.” và nắm tay người lớn. Bé nhìn đèn và nói màu đèn.",
   "ob": "Ông bà đi cùng, để bé nhắc “dừng lại, nhìn trái, nhìn phải”.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại câu ca dao “Làng tôi có lũy tre xanh”, bé kể muốn đi thăm đâu bằng tàu, thuyền hay máy bay. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Làng tôi có lũy tre xanh",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[117] = {
 "sub": "Cá, rùa, cua, sao biển",
 "vocab": {
  "en": [
   [
    "sea",
    "🌊",
    "biển",
    false
   ],
   [
    "fish",
    "🐠",
    "con cá",
    false
   ],
   [
    "turtle",
    "🐢",
    "con rùa",
    false
   ],
   [
    "crab",
    "🦀",
    "con cua",
    false
   ],
   [
    "starfish",
    "⭐",
    "sao biển",
    false
   ],
   [
    "shell",
    "🐚",
    "vỏ sò, mai rùa",
    false
   ],
   [
    "beach",
    "🏖️",
    "bãi biển",
    false
   ],
   [
    "swim",
    "🏊",
    "bơi",
    true
   ],
   [
    "hide",
    "🙈",
    "trốn, rụt vào",
    true
   ]
  ],
  "zh": [
   [
    "海",
    "hǎi",
    "biển",
    "🌊"
   ],
   [
    "鱼",
    "yú",
    "con cá",
    "🐠"
   ],
   [
    "乌龟",
    "wūguī",
    "con rùa",
    "🐢"
   ],
   [
    "螃蟹",
    "pángxiè",
    "con cua",
    "🦀"
   ],
   [
    "游泳",
    "yóuyǒng",
    "bơi",
    "🏊"
   ],
   [
    "海星",
    "hǎixīng",
    "sao biển",
    "⭐"
   ]
  ],
  "en_phr": [
   [
    "Fish can swim.",
    "swim",
    "🐠"
   ],
   [
    "The crab walks sideways.",
    "crab",
    "🦀"
   ],
   [
    "The turtle hides in its shell.",
    "shell",
    "🐢"
   ],
   [
    "I see a starfish!",
    "starfish",
    "⭐"
   ]
  ],
  "zh_phr": [
   [
    "小鱼在海里游泳。",
    "游泳",
    "xiǎo yú zài hǎi lǐ yóuyǒng",
    "cá nhỏ bơi dưới biển",
    "🐠"
   ],
   [
    "这是螃蟹。",
    "螃蟹",
    "zhè shì pángxiè",
    "đây là con cua",
    "🦀"
   ],
   [
    "乌龟慢慢爬。",
    "乌龟",
    "wūguī mànmàn pá",
    "rùa bò chầm chậm",
    "🐢"
   ]
  ],
  "seq": [
   [
    "🥚",
    "eggs on the beach",
    "沙滩上的蛋"
   ],
   [
    "🐣",
    "baby turtles come out",
    "小乌龟出来了"
   ],
   [
    "🏖️",
    "walk to the sea",
    "走到海边"
   ],
   [
    "🌊",
    "swim in the sea",
    "在海里游"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "The Fish Go Swimming – cá bơi, cua bò, bạch tuộc ngọ nguậy (khoảng 4 phút)",
    "u": "https://www.youtube.com/watch?v=DFYoRju7NCE",
    "kind": "song_action",
    "ch": "Finny The Shark (Super Simple)",
    "min": 4.3
   },
   {
    "t": "Octonauts – Creature Report: Sea Turtles – bài giới thiệu rùa biển (ngắn)",
    "u": "https://www.youtube.com/watch?v=3lfEz2To3qI",
    "kind": "explainer",
    "ch": "ABC Commercial"
   },
   {
    "t": "Octonauts – The Baby Sea Turtles (tập đầy đủ dài hơn 8 phút: xem đoạn đầu 5 phút hôm nay, đoạn sau hôm khác)",
    "u": "https://www.youtube.com/watch?v=e-HfR77J0W0",
    "kind": "story",
    "ch": "Octonauts"
   }
  ],
  "zh": [
   {
    "t": "Slippery Fish tiếng Trung – bài hát các con vật biển",
    "u": "https://www.youtube.com/watch?v=PMHJd0ltyc4",
    "kind": "song_action",
    "ch": "MandoKids Learning Center"
   },
   {
    "t": "海洋动物 – truyện tranh động các con vật biển của Little Fox Chinese",
    "u": "https://www.youtube.com/watch?v=pmMXcoyPqsE",
    "kind": "story",
    "ch": "Little Fox Chinese – Stories & Songs for Learners"
   },
   {
    "t": "海洋动物 – bài học con vật biển của A Little Chinese (dài 12 phút: chỉ xem 6 phút đầu)",
    "u": "https://www.youtube.com/watch?v=UZYEtELp-2A",
    "kind": "lesson",
    "ch": "小不點中文 A Little Chinese",
    "min": 12.4
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Ca nhạc: bơi như cá, bò như cua",
   "toi_vi": [
    {
     "t": "Con cua mà có hai càng",
     "type": "ve",
     "lyr": "Con cua mà có hai càng\nĐầu, tai không có bò ngang cả đời\nCon cá mà có cái đuôi\nHai vây ve vẩy nó bơi rất tài\nCon rùa mà có cái mai\nCái cổ thụt ngắn, thụt dài vào ra\nCon voi mà có hai ngà\nCái vòi nó cuốn đổ nhà, đổ cây\nCon chim mà có cánh bay\nBay cùng Nam, Bắc, Đông, Tây tỏ tường."
    },
    {
     "t": "Gió đưa gió đẩy, về rẫy ăn còng",
     "type": "hat_ru",
     "lyr": "Gió đưa gió đẩy, về rẫy ăn còng\nVề sông ăn cá, về đồng ăn cua"
    }
   ],
   "book_vi": {
    "t": "Biển xanh rì rào (bản tiếng Việt)",
    "author": "Tamami Kowase, Nobuko Akisato",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần 2 – Kể chuyện: rùa con tìm đường ra biển",
   "toi_vi": [
    {
     "t": "Đồng Tháp Mười cò bay thẳng cánh",
     "type": "ca_dao",
     "lyr": "Đồng Tháp Mười cò bay thẳng cánh\nNước Tháp Mười lóng lánh cá tôm"
    },
    {
     "t": "Ai ơi về miệt Tháp Mười",
     "type": "ca_dao",
     "lyr": "Ai ơi về miệt Tháp Mười\nCá tôm sẵn bắt, lúa trời sẵn ăn."
    }
   ],
   "book_vi": {
    "t": "Kho tàng truyện cổ tích Việt Nam (sách cho bố mẹ tìm bản gốc truyện Con Rồng cháu Tiên)",
    "author": "Nguyễn Đổng Chi (sưu tầm, biên soạn)",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được fish, turtle, crab, starfish khi xem tranh"
  ],
  [
   "en",
   "Nói được câu “I see a …” về một con vật biển"
  ],
  [
   "zh",
   "Nói được 海 hǎi, 鱼 yú, 乌龟 wūguī, 螃蟹 pángxiè"
  ],
  [
   "zh",
   "Nói được câu 这是螃蟹 hoặc 小鱼游泳"
  ],
  [
   "vi",
   "Đọc theo được bài vè Con cua mà có hai càng"
  ],
  [
   "td",
   "Kể được rùa con nở trên cát rồi bò ra biển theo thứ tự"
  ],
  [
   "xh",
   "Nhớ quy tắc: ra biển, hồ bơi luôn nắm tay người lớn"
  ],
  [
   "vd",
   "Bò ngang như cua, bơi như cá, rụt cổ như rùa theo bài hát"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Ca nhạc: xuống biển cùng các bạn cá.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Bài hát có nhiều con vật biển. Mẹ dừng mỗi khi con vật mới xuất hiện, chỉ và hỏi: “Con gì đây?”. Bé chỉ theo, nói tiếng Việt cũng được. Mẹ nhắc theo video “fish”, “crab”.",
    "b": "Look! A crab!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Bài hát tiếng Trung về các con vật biển. Mẹ dừng mỗi khi nghe 鱼 hoặc thấy con vật mới, bé chỉ vào màn hình. Hôm nay con học fish, tiếng Trung là 鱼.",
    "b": "这是鱼。(zhè shì yú)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     7
    ],
    "zh": [
     0,
     1,
     4
    ]
   },
   "doi": "Biển trên sàn (12 phút). Mẹ trải một tấm khăn xanh làm biển. Mẹ cắt từ giấy bìa các con vật to: cá, rùa, cua, sao biển; bé tô màu. Bé thả các con vật lên “biển”. Mẹ nói “Where is the crab?”, bé tìm và giơ lên. Đếm số con vật bằng tiếng Anh.",
   "ob": "Ông bà cùng bé tô con cá giấy và thả lên khăn xanh.",
   "toi": "Kể chuyện “Sự tích dưa hấu” (phần đầu). Mẹ kể: Ngày xưa có chàng An Tiêm cùng vợ con được đưa ra một hòn đảo giữa biển. Đảo vắng tanh, chỉ có cát, sóng và chim. An Tiêm không than thở, chăm chỉ dựng nhà, bắt cá. Một hôm, có đàn chim bay qua thả xuống mấy hạt lạ. Hỏi bé: “Theo con, hạt đó mọc thành cây gì?”."
  },
  {
   "chuyen": "Rùa biển sống thế nào?",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Bài giới thiệu rùa biển ngắn của các bạn Octonauts. Mẹ dừng khi thấy mai rùa (shell), bãi biển (beach), biển (sea). Bé chỉ theo. Mẹ hỏi: “Rùa bơi hay bò?”.",
    "b": "The turtle can swim."
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem 6 phút đầu bài học. Mẹ dừng mỗi con vật, bé nhìn kỹ và chỉ. Khi thấy cua, mẹ và bé thử bò ngang như cua. Mẹ nhắc theo 螃蟹, 乌龟.",
    "b": "这是乌龟。(zhè shì wūguī)"
   },
   "words": {
    "en": [
     0,
     2,
     5,
     6
    ],
    "zh": [
     0,
     2,
     3
    ]
   },
   "doi": "Rùa rụt cổ (10 phút). Bé nằm sấp dưới một chiếc gối to hoặc chăn mỏng làm mai rùa. Mẹ nói “Swim!”, bé bò chậm như rùa. Mẹ nói “Hide!”, bé rụt đầu và tay chân vào trong “mai”. Thêm tiếng Trung: “乌龟，爬！” để bé bò. Chơi trên sàn trống.",
   "ob": "Ông bà nói “rùa trốn!”, bé rụt cổ dưới chiếc gối.",
   "toi": "Vè dân gian. Mẹ đọc bài “Con cua mà có hai càng”. Mỗi con vật trong bài, mẹ và bé làm động tác: cua giơ hai tay làm càng bò ngang, cá ve vẩy tay như vây, rùa rụt cổ ra vào. Hỏi bé: “Con cua có tai không?”.",
   "lyr": "Con cua mà có hai càng"
  },
  {
   "chuyen": "Bơi, bò, ngọ nguậy theo nhạc.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Đứng dậy xem lại bài. Mỗi con vật một động tác cố định: fish thì hai tay áp lượn sóng, crab thì giơ càng bò ngang, octopus thì ngọ nguậy cả hai tay, shark thì tay làm vây trên đầu. Mẹ dừng nhạc, bé đứng im như tượng.",
    "b": "Swim, swim, swim!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật lại bài tiếng Trung, dùng đúng động tác như bài tiếng Anh: 鱼 lượn tay, 游泳 bơi sải tay. Một con vật, hai tên gọi, một động tác.",
    "b": "小鱼游泳。(xiǎo yú yóuyǒng)"
   },
   "words": {
    "en": [
     1,
     3,
     7
    ],
    "zh": [
     1,
     3,
     4
    ]
   },
   "doi": "Thí nghiệm cát và nước (15 phút). Mẹ đổ một ít cát sạch (hoặc bột mì nếu không có cát) vào một khay nhựa, một bên khay để chút nước. Bé dùng ngón tay vẽ bãi biển, đặt rùa đồ chơi to lên cát. Bé thả rùa từ cát xuống “biển” và nói “beach – sea”. Mẹ ngồi cạnh, không để bé cho cát lên mắt, lên miệng. Rửa tay sau khi chơi.",
   "ob": "Ông bà ngồi cạnh khay cát, cùng bé đặt rùa từ cát xuống nước.",
   "toi": "Kể tiếp “Sự tích dưa hấu”. Mẹ kể: An Tiêm gieo những hạt lạ, chăm tưới mỗi ngày. Hạt mọc thành dây, ra những quả to vỏ xanh. Bổ ra thấy ruột đỏ, ngọt mát. Cả nhà vui lắm. Mẹ và bé giả vờ gieo hạt, tưới nước, rồi ôm một chiếc gối tròn làm quả dưa. Hỏi: “Quả dưa hấu màu gì?” – green, red."
  },
  {
   "chuyen": "Bé làm cua, mẹ làm rùa.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm theo. Xem lại bài rùa biển. Lần này bé làm rùa con: khi video nói swim, bé bơi sải tay; khi thấy mai rùa, bé rụt cổ. Mẹ dừng hỏi: “Rùa đẻ trứng ở đâu?” – beach.",
    "b": "The turtle lays eggs on the beach."
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – làm động tác. Xem lại 6 phút đầu bài học. Mẹ gọi tên con vật bằng tiếng Trung trước, bé làm động tác con đó rồi xem video có đúng không.",
    "b": "螃蟹走路。(pángxiè zǒulù)"
   },
   "words": {
    "en": [
     2,
     3,
     4,
     5
    ],
    "zh": [
     1,
     2,
     3,
     5
    ]
   },
   "doi": "Nhảy đóng băng biển (10 phút). Mẹ bật nhạc, bé bơi tự do quanh phòng. Mẹ tắt nhạc và gọi: “Crab!”, bé đứng im giơ càng. “Starfish!”, bé dang tay chân thành ngôi sao. Gọi thêm tiếng Trung: “乌龟!”, bé rụt cổ. Chơi 6–8 lượt.",
   "ob": "Ông bà gọi tên con vật, bé đứng im làm dáng con đó.",
   "toi": "Hát ru. Mẹ đọc chậm câu “Gió đưa gió đẩy, về rẫy ăn còng”. Mẹ giải thích: “còng” là con cua nhỏ ở bãi biển. Về sông thì có cá, về đồng thì có cua. Hỏi bé: “Còng giống con gì?” – crab, 螃蟹.",
   "lyr": "Gió đưa gió đẩy, về rẫy ăn còng"
  },
  {
   "chuyen": "Bé hát trước video.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật bài cá bơi. Mẹ dừng trước mỗi con vật mới, bé nói tên tiếng Anh trước và làm động tác. Cuối bài bé nói câu “I see a fish!”.",
    "b": "I see a fish! I see a crab!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Bật bài tiếng Trung. Mẹ dừng trước mỗi con vật, bé nói tên tiếng Trung trước: 鱼, 螃蟹, 乌龟. Bật tiếp xem đúng không.",
    "b": "你看，螃蟹！(nǐ kàn, pángxiè)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Câu cá giấy (12 phút). Mẹ cắt cá giấy bìa to bằng bàn tay, dán ở miệng mỗi con một vòng giấy cuộn to bằng cổ tay. Cần câu là một chiếc thìa gỗ dài hoặc chiếc đũa: bé luồn đầu đũa vào vòng giấy để “câu” cá lên khỏi “biển” khăn xanh. Câu được con nào, bé nói tên tiếng Anh, tiếng Trung. Không dùng kẹp, ghim hay móc kim loại.",
   "ob": "Ông bà cầm cần câu cùng bé, bé đếm số cá câu được.",
   "toi": "Đọc sách tranh. Mẹ đọc “Biển xanh rì rào” (Tamami Kowase, Nobuko Akisato, NXB Kim Đồng). Mỗi trang hỏi: “Ở biển có gì?”. Bé chỉ sóng, cát, con vật và nói tên tiếng Anh. Mẹ nhắc: ra biển thật thì luôn nắm tay bố mẹ."
  },
  {
   "chuyen": "Thử thách lớn và buổi biểu diễn nhỏ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao. Xong một trò tô 1 sao; nói to tên con vật biển khi chơi thì thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần để xem lại.",
    "b": "Three stars for you!"
   },
   "zh": {
    "v": 0,
    "t": "Nếu bé muốn: bật bài cá bơi tiếng Trung, bé làm động tác.",
    "b": "你真棒！(nǐ zhēn bàng)"
   },
   "doi": "Buổi biểu diễn nhỏ (15 phút). Bé chọn làm một con vật biển: cá, cua hoặc rùa. Tập 2 lần rồi diễn thật trên “biển” khăn xanh: bé giới thiệu “Hello! I'm a crab.”, hát và làm động tác một đoạn “The Fish Go Swimming” khoảng 1 phút, cuối cùng nói “我是螃蟹”. Mẹ quay clip, cả nhà vỗ tay.",
   "ob": "Ông bà ngồi xem bé diễn con cua bò ngang và vỗ tay.",
   "toi": "Kể nốt “Sự tích dưa hấu”. Mẹ kể: An Tiêm khắc tên lên những quả dưa, thả xuống biển. Sóng đưa dưa vào bờ, người trong đất liền vớt được, biết An Tiêm còn sống, liền đón cả nhà về. Từ đó có giống dưa hấu ngọt mát. Hỏi bé: “Biển đã giúp An Tiêm thế nào?”.",
   "special": "Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip"
  },
  {
   "chuyen": "Ôn tuần: đi xem cá thật.",
   "en": {
    "v": 1,
    "t": "Ôn: hôm nay bé chọn xem lại một video thích nhất tuần. Mẹ gợi ý bài rùa biển: xem xong bé kể rùa sống ở đâu. Chơi lại trò web bé thích.",
    "b": "Turtles live in the sea."
   },
   "zh": {
    "v": 0,
    "t": "Ôn: hát lại bài cá bơi tiếng Trung, bé làm động tác.",
    "b": "海里有很多鱼。(hǎi lǐ yǒu hěn duō yú)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Việc thật cùng gia đình: cả nhà đi chợ hải sản hoặc cửa hàng cá cảnh, xem cá, cua, tôm trong chậu. Bé chỉ và nói tên tiếng Anh, tiếng Trung. Chỉ đứng xem, không thò tay vào chậu (cua kẹp đau). Mẹ nắm tay bé ở chỗ sàn ướt.",
   "ob": "Ông bà dắt bé đi chợ, chỉ con cua cho bé gọi tên.",
   "toi": "Bé kể lại chuyện. Bé tự kể “Sự tích dưa hấu” bằng các bước: ra đảo, gieo hạt, có dưa, thả dưa xuống biển, được đón về. Nếu có dưa hấu, mẹ bổ một miếng (mẹ cầm dao) cho bé ăn, bé nói “watermelon”."
  },
  {
   "chuyen": "Tuần Kể chuyện: những chú rùa con.",
   "en": {
    "v": 2,
    "t": "Lần 1 – dừng và đoán (đoạn đầu 5 phút). Tập phim Octonauts dài hơn 8 phút, hôm nay chỉ xem 5 phút đầu. Mẹ dừng ở 3 chỗ: khi thấy trứng rùa, khi rùa con nở, trước khi rùa con ra biển. Mỗi lần hỏi: “Chuyện gì xảy ra tiếp?”.",
    "b": "What happens next?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem truyện con vật biển. Truyện tranh động tiếng Trung. Mẹ dừng mỗi khi có con vật mới, bé đoán tên. Hôm trước con học 乌龟, hôm nay con nghe thêm 鲸鱼 (cá voi).",
    "b": "这是鲸鱼。(zhè shì jīngyú)"
   },
   "words": {
    "en": [
     2,
     5,
     6
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Kể chuyện bằng tranh (12 phút). Mẹ gấp giấy làm 4 ô theo bảng thứ tự: trứng trên cát, rùa con nở, rùa con bò, rùa con bơi. Bé vẽ hoặc tô. Bé chỉ từng ô và kể, gặp từ beach, sea, turtle thì nói tiếng Anh.",
   "ob": "Ông bà nghe bé kể 4 ô tranh rùa con ra biển.",
   "toi": "Kể chuyện “Con Rồng cháu Tiên” (phần đầu). Mẹ kể: Ngày xưa, Lạc Long Quân là con thần biển, khỏe mạnh, sống dưới nước. Âu Cơ là nàng tiên xinh đẹp ở trên núi. Hai người gặp nhau, thương nhau và thành vợ chồng. Âu Cơ sinh ra một cái bọc, nở ra một trăm người con. Hỏi bé: “Một trăm là nhiều hay ít?”."
  },
  {
   "chuyen": "Rùa biển: nói cả câu.",
   "en": {
    "v": 1,
    "t": "Lần 3 – nói câu. Xem lại bài rùa biển. Lần này mỗi lần dừng, bé nói một câu: “The turtle can swim.”, “It has a shell.” Nói đủ câu được 1 sao. Mẹ hỏi thêm: “Tiếng Trung là gì?”, bé nói 乌龟.",
    "b": "It has a shell!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – hát câu dài. Bật bài cá bơi tiếng Trung. Mẹ dừng giữa câu, bé hát tiếp. Thêm câu 小鱼在海里游泳.",
    "b": "小鱼在海里游泳。(xiǎo yú zài hǎi lǐ yóuyǒng)"
   },
   "words": {
    "en": [
     2,
     5,
     7,
     8
    ],
    "zh": [
     0,
     1,
     2,
     4
    ]
   },
   "doi": "Cửa hàng cá cảnh (12 phút). Bé làm người bán, bày cá, cua, rùa giấy trên khăn xanh. Mẹ làm khách: “A turtle, please.” Bé đưa rùa, nói “Here you are.” Đổi vai, mẹ mua bằng tiếng Trung: “我要螃蟹”. Tiền là giấy to bằng lòng bàn tay.",
   "ob": "Ông bà mua con cá giấy, bé bán và nói tên.",
   "toi": "Ca dao. Mẹ đọc câu “Đồng Tháp Mười cò bay thẳng cánh”. Mẹ giải thích: ở Đồng Tháp Mười, đồng rộng mênh mông, nước lấp lánh, có nhiều cá tôm. Bé dang tay làm cò bay thẳng, rồi làm cá bơi. Hỏi bé: “Cá sống ở biển, ở sông hay ở đồng?”.",
   "lyr": "Đồng Tháp Mười cò bay thẳng cánh"
  },
  {
   "chuyen": "Xem tiếp phim rùa con.",
   "en": {
    "v": 2,
    "t": "Lần 2 – xem tiếp đoạn sau (khoảng 5 phút). Hôm nay xem tiếp từ chỗ dừng hôm thứ Hai. Bé đóng vai rùa con: mẹ dừng video, bé diễn rùa con đang làm gì (bò trên cát, đi tìm biển, bơi). Gặp từ help, swim, bé nói to.",
    "b": "Help the baby turtles!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – gọi tên những gì thấy. Xem lại truyện con vật biển. Bé làm “người dẫn đường”: mẹ dừng, bé chỉ và nói 这是… với từ đã biết (鱼, 乌龟, 螃蟹, 鲸鱼).",
    "b": "这是螃蟹。(zhè shì pángxiè)"
   },
   "words": {
    "en": [
     0,
     2,
     6,
     7
    ],
    "zh": [
     1,
     2,
     3
    ]
   },
   "doi": "Đường ra biển của rùa con (12 phút). Mẹ dùng gối và khăn làm “bãi cát” có đường đi quanh co. Bé làm rùa con, bò từ “tổ” (một chiếc rổ) theo đường ra “biển” (khăn xanh). Mẹ nói “Go to the sea!”, bé bò. Đến biển, bé “bơi” và nói “I can swim!”.",
   "ob": "Ông bà ngồi ở “biển” đón rùa con bò ra.",
   "toi": "Kể tiếp “Con Rồng cháu Tiên”. Mẹ kể: Long Quân quen sống dưới nước, Âu Cơ quen sống trên núi. Hai người chia nhau: năm mươi con theo cha xuống biển, năm mươi con theo mẹ lên núi. Ai cũng hứa giúp nhau khi khó khăn. Vì thế người Việt mình gọi nhau là đồng bào, là anh em. Hỏi bé: “Con thích biển hay thích núi?”."
  },
  {
   "chuyen": "Bơi như cá, hát câu mới.",
   "en": {
    "v": 0,
    "t": "Lần 4 – hát câu mới. Bật bài cá bơi. Mẹ tắt tiếng giữa câu, bé hát nốt. Rồi bé tự đặt câu mới: “The turtles go swimming…”, mẹ hát theo, cả hai làm động tác rùa bơi.",
    "b": "The turtles go swimming!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé làm cô giáo. Xem lại 6 phút đầu bài học. Rồi tắt video, bé làm cô giáo: bé giơ tranh con vật, nói tên tiếng Trung, mẹ nhắc theo.",
    "b": "老师，这是海星！(lǎoshī, zhè shì hǎixīng)"
   },
   "words": {
    "en": [
     1,
     3,
     4,
     7
    ],
    "zh": [
     1,
     3,
     5
    ]
   },
   "doi": "Một con vật, hai cái tên (10 phút). Mẹ giơ từng con vật giấy. Mẹ nói tiếng Anh, bé nói tiếng Trung; rồi đổi lại. Đúng thì bé thả con vật vào “biển”. Hết con vật, bé nói “Goodbye, sea!”.",
   "ob": "Ông bà giơ con cua giấy, bé nói “crab”.",
   "toi": "Ca dao. Mẹ đọc câu “Ai ơi về miệt Tháp Mười”. Mẹ giải thích: ở đó cá tôm nhiều, bắt dễ, lúa mọc sẵn. Hỏi bé: “Nếu con đến đó, con muốn xem con gì?”. Bé nói tên bằng tiếng Anh, tiếng Trung.",
   "lyr": "Ai ơi về miệt Tháp Mười"
  },
  {
   "chuyen": "Bé kể chuyện trước khi xem.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước. Trước khi bật, bé cầm 4 ô tranh và kể chuyện rùa con. Rồi xem lại đoạn bé thích nhất (không quá 5 phút) để kiểm tra. Bé nói câu kết: “The baby turtles are in the sea.”",
    "b": "The baby turtles are safe!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – bé nói trước video. Xem lại truyện con vật biển. Mẹ dừng trước mỗi con vật, bé nói tên tiếng Trung trước. Thêm câu 乌龟慢慢爬.",
    "b": "乌龟慢慢爬。(wūguī mànmàn pá)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     6
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Chuẩn bị picnic biển (10 phút). Bé cùng mẹ chuẩn bị cho ngày mai: một tấm khăn xanh làm biển, một tấm khăn vàng làm cát, giỏ đồ ăn. Bé chọn mang theo cá, cua, rùa giấy. Mẹ hỏi: “Ra biển thật, mình phải làm gì?” – nắm tay bố mẹ, không tự xuống nước.",
   "ob": "Ông bà cùng bé xếp đồ vào giỏ picnic biển.",
   "toi": "Bé kể lại “Con Rồng cháu Tiên”. Mẹ hỏi gợi ý: Long Quân sống ở đâu? Âu Cơ sống ở đâu? Có bao nhiêu người con? Mẹ đọc thêm cho mình bản đầy đủ trong “Kho tàng truyện cổ tích Việt Nam” (Nguyễn Đổng Chi, NXB Trẻ) để kể cho đúng."
  },
  {
   "chuyen": "Thử thách lớn và picnic bãi biển.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu (I see a…, The turtle can…) mới được tô sao. Đủ sao, bé chọn 1 video yêu thích trong tuần xem lại (phim chỉ xem một đoạn 5 phút).",
    "b": "You are an Octonaut!"
   },
   "zh": {
    "v": 0,
    "t": "Thêm nếu bé muốn: hát bài cá bơi tiếng Trung trên “bãi biển”.",
    "b": "我们去海边！(wǒmen qù hǎibiān)"
   },
   "doi": "Picnic từ vựng “bãi biển” (20 phút). Trải khăn vàng (cát) và khăn xanh (biển) ở sân hoặc ban công. Mang theo bánh, dưa hấu cắt miếng, nước. Bé gọi tên đồ ăn bằng tiếng Anh, bố mẹ nhắc tiếng Trung (西瓜 xīguā, 水 shuǐ). Bé xếp các con vật giấy lên “biển” và giới thiệu từng con. Ăn ngồi yên, dưa hấu bỏ hạt trước.",
   "ob": "Ông bà ngồi picnic cùng, bé mời ông bà ăn dưa hấu.",
   "toi": "Đọc lại ca dao “Đồng Tháp Mười cò bay thẳng cánh”. Bé đọc cùng mẹ, làm cò bay. Rồi bé kể hôm nay picnic có gì.",
   "lyr": "Đồng Tháp Mười cò bay thẳng cánh",
   "special": "Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: hát lại bài cá bơi, bé làm động tác, không tính điểm. Xem lại clip biểu diễn tuần trước.",
    "b": "Swim, little fish, swim!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: hát lại bài tiếng Trung, cả nhà bơi theo.",
    "b": "再见，小鱼！(zàijiàn, xiǎo yú)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Việc thật cùng gia đình: giờ tắm, mẹ cho bé chơi rùa, cá đồ chơi to trong chậu hoặc bồn có ít nước, mẹ ngồi cạnh suốt. Bé cho rùa bơi, nói “swim”, “游泳”. Nếu cả nhà đi bể bơi hay biển, bé luôn mặc áo phao và người lớn nắm tay bé.",
   "ob": "Ông bà ngồi cạnh khi bé tắm, cùng bé cho rùa đồ chơi bơi.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại bài vè “Con cua mà có hai càng”, bé làm càng cua. Bé kể con vật biển bé thích nhất. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Con cua mà có hai càng",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[118] = {
 "sub": "Cá voi, cá mập con, bạch tuộc",
 "vocab": {
  "en": [
   [
    "whale",
    "🐋",
    "cá voi",
    false
   ],
   [
    "shark",
    "🦈",
    "cá mập",
    false
   ],
   [
    "octopus",
    "🐙",
    "bạch tuộc",
    false
   ],
   [
    "dolphin",
    "🐬",
    "cá heo",
    false
   ],
   [
    "fish",
    "🐟",
    "con cá",
    false
   ],
   [
    "eight",
    "8️⃣",
    "số tám",
    false
   ],
   [
    "arms",
    "💪",
    "những cánh tay",
    false
   ],
   [
    "swim",
    "🏊",
    "bơi",
    true
   ],
   [
    "wiggle",
    "〰️",
    "ngọ nguậy",
    true
   ]
  ],
  "zh": [
   [
    "鲸鱼",
    "jīngyú",
    "cá voi",
    "🐋"
   ],
   [
    "鲨鱼",
    "shāyú",
    "cá mập",
    "🦈"
   ],
   [
    "章鱼",
    "zhāngyú",
    "bạch tuộc",
    "🐙"
   ],
   [
    "大",
    "dà",
    "to",
    "🔼"
   ],
   [
    "小",
    "xiǎo",
    "nhỏ",
    "🔽"
   ],
   [
    "游泳",
    "yóuyǒng",
    "bơi",
    "🏊"
   ],
   [
    "八",
    "bā",
    "số tám",
    "8️⃣"
   ]
  ],
  "en_phr": [
   [
    "The whale is big.",
    "big",
    "🐋"
   ],
   [
    "An octopus has eight arms.",
    "eight",
    "🐙"
   ],
   [
    "Baby shark, swim away!",
    "shark",
    "🦈"
   ],
   [
    "Wiggle your arms like an octopus.",
    "Wiggle",
    "〰️"
   ]
  ],
  "zh_phr": [
   [
    "鲸鱼很大。",
    "大",
    "jīngyú hěn dà",
    "cá voi rất to",
    "🐋"
   ],
   [
    "章鱼有八条腿。",
    "八",
    "zhāngyú yǒu bā tiáo tuǐ",
    "bạch tuộc có tám cái chân",
    "🐙"
   ],
   [
    "小鱼游，大鱼游。",
    "小鱼",
    "xiǎo yú yóu, dà yú yóu",
    "cá nhỏ bơi, cá to bơi",
    "🐟"
   ]
  ],
  "seq": [
   [
    "🐟",
    "a small fish",
    "小鱼"
   ],
   [
    "🐬",
    "a dolphin",
    "海豚"
   ],
   [
    "🦈",
    "a shark",
    "鲨鱼"
   ],
   [
    "🐋",
    "a big whale",
    "大鲸鱼"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Octonauts – Creature Report: Octopus – bài giới thiệu bạch tuộc (ngắn)",
    "u": "https://www.youtube.com/watch?v=vC0u5Bi6hos",
    "kind": "explainer",
    "ch": "Octonauts"
   },
   {
    "t": "Baby Shark – cá mập con và cả gia đình",
    "u": "https://www.youtube.com/watch?v=8ljHzljQrY8",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The Fish Go Swimming – dùng lại, lần này thi đóng băng (khoảng 4 phút)",
    "u": "https://www.youtube.com/watch?v=DFYoRju7NCE",
    "kind": "song_action",
    "ch": "Finny The Shark (Super Simple)",
    "min": 4.3
   }
  ],
  "zh": [
   {
    "t": "海洋动物 – truyện các con vật biển của Little Fox Chinese (dùng lại, lần này tìm cá voi)",
    "u": "https://www.youtube.com/watch?v=pmMXcoyPqsE",
    "kind": "story",
    "ch": "Little Fox Chinese – Stories & Songs for Learners"
   },
   {
    "t": "Slippery Fish tiếng Trung – cá nhỏ, cá to, cá voi",
    "u": "https://www.youtube.com/watch?v=PMHJd0ltyc4",
    "kind": "song_action",
    "ch": "MandoKids Learning Center"
   },
   {
    "t": "海底小纵队 Octonauts tiếng Trung – chọn 1 tập, chỉ xem đoạn đầu 5 phút (khó hơn, để tuần 2)",
    "u": "https://www.youtube.com/@OctonautsMandarin/videos",
    "kind": "story",
    "ch": "海底小纵队 Octonauts (Mandarin)",
    "min": 10
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Khám phá: bạch tuộc có mấy tay, cá voi to cỡ nào?",
   "toi_vi": [
    {
     "t": "Ruộng đồng mặc sức chim bay",
     "type": "ca_dao",
     "lyr": "Ruộng đồng mặc sức chim bay,\nBiển hồ lai láng, cá bầy đua bơi."
    },
    {
     "t": "Con rùa",
     "type": "ve",
     "lyr": "Rì rà rì rà\nĐội nhà đi chơi\nĐến khi tối trời\nÚp nhà nằm ngủ."
    }
   ],
   "book_vi": {
    "t": "Biển xanh rì rào (bản tiếng Việt, đọc lại: lần này bé kể)",
    "author": "Tamami Kowase, Nobuko Akisato",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần 2 – Thử thách: cá mập con, ai nhanh hơn?",
   "toi_vi": [
    {
     "t": "Cần Thơ gạo trắng nước trong",
     "type": "ca_dao",
     "lyr": "Cần Thơ gạo trắng nước trong\nAi đi đến đó lòng không muốn về."
    },
    {
     "t": "Một cây làm chẳng nên non",
     "type": "ca_dao",
     "lyr": "Một cây làm chẳng nên non\nBa cây chụm lại nên hòn núi cao"
    }
   ],
   "book_vi": {
    "t": "Những bài học nhỏ (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được whale, shark, octopus, dolphin khi xem tranh"
  ],
  [
   "en",
   "Nói được câu “An octopus has eight arms.” hoặc “The whale is big.”"
  ],
  [
   "zh",
   "Nói được 鲸鱼 jīngyú, 鲨鱼 shāyú, 章鱼 zhāngyú"
  ],
  [
   "zh",
   "Nói được 大 dà và 小 xiǎo khi so sánh hai con vật"
  ],
  [
   "vi",
   "Đọc được bài vè Con rùa và giải thích “đội nhà đi chơi”"
  ],
  [
   "td",
   "Đếm đúng 8 chân bạch tuộc; xếp con vật từ nhỏ đến to"
  ],
  [
   "xh",
   "Chơi theo lượt và chấp nhận thua vui vẻ trong trò thi đua"
  ],
  [
   "vd",
   "Làm đủ động tác cá mập nhỏ – vừa – to theo bài Baby Shark"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Khám phá: bạch tuộc có mấy tay?",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và đếm. Bài giới thiệu bạch tuộc ngắn của Octonauts. Mẹ dừng khi thấy rõ bạch tuộc, bé đếm tay của nó bằng ngón tay mình. Mẹ hỏi: “How many arms?”. Bé giơ 8 ngón tay. Mẹ nhắc “octopus”.",
    "b": "An octopus! Eight arms!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – tìm con vật mới. Xem lại truyện con vật biển của Little Fox (vòng trước đã xem). Lần này mẹ dừng khi thấy cá voi, bé chỉ và nói 鲸鱼. Mẹ hỏi: 大还是小？ (to hay nhỏ?), bé dang tay thật rộng nói 大.",
    "b": "鲸鱼很大！(jīngyú hěn dà)"
   },
   "words": {
    "en": [
     2,
     5,
     6
    ],
    "zh": [
     0,
     3,
     6
    ]
   },
   "doi": "Làm bạch tuộc giấy (15 phút). Mẹ cắt một hình tròn to làm đầu và 8 dải giấy dài làm chân. Bé dán từng chân, mỗi lần dán đếm một số tiếng Anh, đến “eight”. Rồi đếm lại bằng tiếng Trung: 一 đến 八. Bé cầm bạch tuộc lắc cho chân ngọ nguậy, nói “wiggle”.",
   "ob": "Ông bà dán chân bạch tuộc cùng bé, đếm từng chân.",
   "toi": "Kể chuyện “Cây khế” (phần đầu). Mẹ kể: Người anh tham lam lấy hết của cải, chỉ cho em một túp lều và một cây khế. Người em chăm sóc cây, cây sai quả. Một hôm, một con chim to đến ăn khế. Người em buồn, chim nói: “Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng.” Hỏi bé: “Chim sẽ đưa người em đi đâu?”."
  },
  {
   "chuyen": "Cá mập con và cả gia đình.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm động tác. Bài Baby Shark. Mỗi thành viên một cỡ tay: baby shark thì chụm hai ngón tay, mommy shark cả bàn tay, daddy shark hai cánh tay to, grandma, grandpa thì nắm tay như không có răng. Bé làm theo video.",
    "b": "Baby shark, doo doo doo!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – nghe cá nhỏ, cá to. Bài hát tiếng Trung về cá nhỏ, rồi con vật to hơn, cuối cùng là cá voi. Mẹ dừng mỗi con vật mới, hỏi: 大还是小？. Bé dùng tay chỉ cỡ: nhỏ thì chụm tay, to thì dang tay.",
    "b": "小鱼，小小的。(xiǎo yú, xiǎoxiǎo de)"
   },
   "words": {
    "en": [
     1,
     7
    ],
    "zh": [
     1,
     3,
     4,
     5
    ]
   },
   "doi": "So sánh to – nhỏ (12 phút). Mẹ bày các con vật đồ chơi hoặc tranh: cá nhỏ, cá heo, cá mập, cá voi. Bé xếp hàng từ nhỏ đến to theo bảng thứ tự. Mẹ hỏi: “Which one is big?”, bé chỉ cá voi. Hỏi tiếng Trung: “哪个小？”, bé chỉ cá nhỏ.",
   "ob": "Ông bà hỏi “Con nào to nhất?”, bé chỉ cá voi.",
   "toi": "Ca dao. Mẹ đọc câu “Ruộng đồng mặc sức chim bay”. Mẹ giải thích: “biển hồ lai láng” là nước nhiều, rộng mênh mông, đàn cá bơi đua nhau. Bé làm chim bay, rồi làm cá bơi. Hỏi bé: “Biển rộng thì có cá to nào sống?” – whale, 鲸鱼.",
   "lyr": "Ruộng đồng mặc sức chim bay"
  },
  {
   "chuyen": "Bạch tuộc trốn bằng mực.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại bài bạch tuộc. Bé đứng dậy làm bạch tuộc: hai tay ngọ nguậy, lắc người. Khi video nói bạch tuộc trốn (hide), bé ngồi thụp xuống, ôm đầu. Mẹ dừng hỏi: “What does it do?”.",
    "b": "Wiggle, wiggle! Hide!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại truyện con vật biển. Dùng động tác giống bài tiếng Anh: 章鱼 ngọ nguậy tay, 鲸鱼 dang tay thật to, 鱼 lượn tay. Mẹ nói tên tiếng Trung trước, bé làm động tác, rồi xem video có đúng không.",
    "b": "章鱼动一动。(zhāngyú dòng yí dòng)"
   },
   "words": {
    "en": [
     2,
     6,
     8
    ],
    "zh": [
     2,
     5
    ]
   },
   "doi": "Thí nghiệm mực bạch tuộc (12 phút). Mẹ rót nước vào một cốc nhựa trong to. Bé nhỏ một giọt màu thực phẩm đen hoặc xanh đậm vào nước. Màu lan ra như mây mực. Mẹ giải thích: bạch tuộc phun mực để trốn kẻ khác. Bé thả một con cá giấy nhỏ phía sau cốc: còn thấy cá không? Mẹ ngồi cạnh, không cho bé uống.",
   "ob": "Ông bà xem bé nhỏ màu vào cốc nước, hỏi “Mực lan ra chưa?”.",
   "toi": "Kể tiếp “Cây khế”. Mẹ kể: Người em may một túi nhỏ đúng ba gang. Chim chở người em bay qua biển đến một hòn đảo đầy vàng. Người em chỉ lấy vừa đủ túi nhỏ rồi về, từ đó đỡ nghèo. Mẹ và bé làm chim bay qua biển: bé dang tay, mẹ nói “Fly over the sea!”. Hỏi: “Bay qua biển có thấy cá voi không?”."
  },
  {
   "chuyen": "Cá voi to cỡ nào?",
   "en": {
    "v": 1,
    "t": "Lần 2 – thi làm động tác. Xem lại Baby Shark. Mẹ dừng nhạc và gọi một thành viên: “Daddy shark!”, bé làm đúng cỡ tay. Gọi nhanh dần. Đến đoạn “run away”, bé chạy về chỗ an toàn (ghế sofa).",
    "b": "Run away! Safe at last!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – bé chỉ cỡ trước. Xem lại bài tiếng Trung. Trước mỗi con vật mới, mẹ dừng và hỏi 大还是小？, bé trả lời 大 hoặc 小 trước khi thấy.",
    "b": "鲸鱼大，小鱼小。(jīngyú dà, xiǎo yú xiǎo)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     4
    ],
    "zh": [
     0,
     3,
     4
    ]
   },
   "doi": "Đo cá voi bằng bước chân (15 phút). Ra sân hoặc hành lang. Mẹ kể: cá voi xanh dài bằng 2–3 chiếc xe buýt nối nhau. Bé bước từng bước dài, đếm bằng tiếng Anh, xem 10 bước dài bao nhiêu. Rồi so: con cá nhỏ chỉ dài bằng bàn tay bé. Bé nói “The whale is big. The fish is small.”",
   "ob": "Ông bà cùng bé bước đếm xem cá voi dài bao nhiêu bước.",
   "toi": "Vè dân gian. Mẹ đọc bài “Con rùa”. Mẹ giải thích: rùa mang mai trên lưng như “đội nhà đi chơi”, tối thì úp nhà nằm ngủ. Bé úp một chiếc gối lên lưng bò “rì rà rì rà”, rồi nằm im ngủ dưới gối. Hỏi: “Rùa tiếng Anh là gì?” – turtle.",
   "lyr": "Con rùa"
  },
  {
   "chuyen": "Bé nói trước video.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Xem lại bài bạch tuộc. Mẹ dừng trước khi video nói, bé nói “octopus”, “eight arms”, “hide” trước. Cuối cùng bé nói câu “An octopus has eight arms.”",
    "b": "An octopus has eight arms."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Xem lại truyện con vật biển. Mẹ dừng trước mỗi con vật, bé nói tên tiếng Trung trước: 鱼, 乌龟, 鲸鱼, 章鱼.",
    "b": "章鱼有八条腿。(zhāngyú yǒu bā tiáo tuǐ)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5
    ],
    "zh": [
     0,
     1,
     2,
     6
    ]
   },
   "doi": "Đếm và phân loại sinh vật biển (12 phút). Mẹ trộn tranh con vật biển và con vật trên cạn (chó, mèo, gà). Bé chia thành 2 nhóm: “sea” và “land”. Đếm mỗi nhóm bằng tiếng Anh. Nhóm nào nhiều hơn? Mẹ hỏi tiếng Trung “鲸鱼住在哪里？”, bé chỉ nhóm biển và nói 海.",
   "ob": "Ông bà cùng bé chia tranh: con nào ở biển, con nào ở trên cạn.",
   "toi": "Đọc sách. Mẹ mở lại “Biển xanh rì rào” (NXB Kim Đồng), lần này bé làm người kể: bé lật trang và kể theo tranh, mẹ chỉ hỏi “Rồi sao nữa?”. Nếu chưa có sách, mẹ kể nốt “Cây khế”: người anh may túi thật to, lấy quá nhiều vàng, chim nghiêng cánh, vàng rơi hết xuống biển, người anh ướt sũng bơi vào bờ, hối hận và từ đó sống tử tế."
  },
  {
   "chuyen": "Thử thách lớn và làm sách nhỏ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao. Xong một trò tô 1 sao; nói to tên con vật biển hoặc đếm đúng khi chơi thì thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần để xem lại.",
    "b": "Wow! Three stars!"
   },
   "zh": {
    "v": 1,
    "t": "Nếu bé muốn: hát lại bài cá nhỏ cá to tiếng Trung.",
    "b": "大鲸鱼来了！(dà jīngyú lái le)"
   },
   "doi": "Làm sách nhỏ của bé: “Under the Sea – 海里” (20 phút). Gấp đôi 3 tờ giấy A4, mẹ dập ghim gáy. Mỗi trang một con vật biển: cá voi, cá mập, bạch tuộc, cá heo, rùa, cua. Bé vẽ hoặc dán tranh, mẹ viết tên tiếng Anh và chữ Hán. Trang cuối bé dán chú bạch tuộc giấy đã làm. Bé “đọc” sách cho cả nhà nghe.",
   "ob": "Ông bà dán tranh cùng bé và nghe bé đọc sách biển.",
   "toi": "Bé kể lại “Cây khế”. Mẹ hỏi gợi ý: Người em có gì? Chim nói gì? Người em lấy bao nhiêu vàng? Người anh thì sao? Mẹ hỏi: “Biết đủ là thế nào?” và nghe bé trả lời.",
   "special": "Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần"
  },
  {
   "chuyen": "Ôn tuần: cả nhà đi thủy cung hoặc xem tranh biển.",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn video thích nhất tuần. Nếu là Baby Shark, cả nhà làm cá mập theo cỡ tay. Chơi lại trò web bé thích.",
    "b": "Let's go hunt! Doo doo doo!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: xem lại truyện con vật biển, bé chỉ và gọi tên.",
    "b": "我喜欢鲸鱼。(wǒ xǐhuan jīngyú)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Việc thật cùng gia đình: nếu gần nhà có thủy cung hay khu trưng bày cá, cả nhà đi xem; nếu không, ra chợ xem cá to cá nhỏ. Bé chỉ con to, con nhỏ và nói “big – 大”, “small – 小”. Ở nơi đông người, bé luôn nắm tay người lớn.",
   "ob": "Ông bà dắt bé đi xem cá, hỏi “Con nào to, con nào nhỏ?”.",
   "toi": "Bé đọc sách nhỏ. Bé lật sách “Under the Sea”, nói tên từng con vật bằng tiếng Anh và tiếng Trung. Mẹ đọc lại bài vè “Con rùa”, bé bò rì rà rồi đi ngủ."
  },
  {
   "chuyen": "Tuần Thử thách: cá mập con, ai nhanh hơn?",
   "en": {
    "v": 1,
    "t": "Lần 3 – thi nhanh. Bật Baby Shark. Mẹ và bé thi: mẹ dừng nhạc và gọi một thành viên, ai làm đúng động tác trước được 1 sao. Đến “run away”, ai chạy về sofa trước được thêm sao. Mẹ cố tình chậm để bé thắng.",
    "b": "I'm faster! I win!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – hát câu ngắn. Bật bài cá nhỏ cá to. Bé hát theo những từ đã biết, mẹ dừng giữa câu để bé hát tiếp. Thêm câu 小鱼游，大鱼游.",
    "b": "小鱼游，大鱼游。(xiǎo yú yóu, dà yú yóu)"
   },
   "words": {
    "en": [
     1,
     7
    ],
    "zh": [
     0,
     3,
     4,
     5
    ]
   },
   "doi": "Cá mập đuổi cá nhỏ (12 phút). Bé làm cá nhỏ, mẹ làm cá mập chậm chạp. Mẹ hô “Swim!”, bé bơi quanh phòng. Mẹ hô “Shark!”, bé chạy về “hang” (một tấm thảm) là an toàn. Đổi vai. Lượt sau mẹ hô tiếng Trung: “鲨鱼来了!”. Dẹp đồ vướng trước khi chạy.",
   "ob": "Ông bà làm cá mập đi chậm, bé chạy về thảm là an toàn.",
   "toi": "Kể chuyện “Ba lưỡi rìu” (phần đầu). Mẹ kể: Có chàng tiều phu nghèo ngày ngày chặt củi bên sông. Một hôm, chiếc rìu sắt tuột tay rơi xuống nước sâu. Chàng ngồi buồn bã. Bỗng một ông tiên hiện lên, lặn xuống sông, vớt lên một chiếc rìu bằng vàng lấp lánh. Ông hỏi: “Rìu này của con phải không?”. Mẹ dừng: “Con đoán chàng trả lời thế nào?”."
  },
  {
   "chuyen": "Đố con vật biển có tính điểm.",
   "en": {
    "v": 2,
    "t": "Lần 1 – thi đóng băng. Bật lại bài cá bơi (vòng trước đã học). Hôm nay là thi: mẹ dừng nhạc bất ngờ, ai cử động trước thì mất lượt. Mỗi lần dừng, mẹ gọi một con vật, bé làm dáng con đó và nói tên tiếng Anh. Đúng được 1 sao.",
    "b": "Freeze! What are you?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – thi nói. Xem lại truyện con vật biển. Ai nói tên tiếng Trung trước (mẹ hay bé) được 1 sao. Thêm câu 这是… được sao vàng.",
    "b": "这是鲨鱼！(zhè shì shāyú)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Đố bằng tiếng kêu và động tác (12 phút). Mẹ làm động tác một con vật biển không nói: ngọ nguậy 8 tay, phun nước như cá voi, vây cá mập trên đầu. Bé đoán bằng tiếng Anh, đúng được 1 sao. Đổi vai: bé làm, mẹ đoán bằng tiếng Trung. Đủ 6 sao, bé chọn bài để cả nhà nhảy.",
   "ob": "Ông bà làm vây cá mập trên đầu, bé đoán “shark”.",
   "toi": "Ca dao. Mẹ đọc câu “Cần Thơ gạo trắng nước trong”. Mẹ giải thích: ở Cần Thơ có sông nước trong, gạo trắng, ai đến cũng không muốn về. Hỏi bé: “Nước trong thì cá có thích không?”. Bé nói “fish” và “鱼”.",
   "lyr": "Cần Thơ gạo trắng nước trong"
  },
  {
   "chuyen": "Bạch tuộc tám tay: đếm nhanh.",
   "en": {
    "v": 0,
    "t": "Lần 4 – nói câu dài. Xem lại bài bạch tuộc. Mẹ dừng, bé nói câu dài: “The octopus can hide.”, “It has eight arms.” Mỗi câu đủ được 1 sao. Rồi mẹ hỏi: “Tiếng Trung là gì?”, bé nói 章鱼.",
    "b": "It can hide in the rocks."
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – thử thách khó (đoạn đầu 5 phút). Mẹ chọn một tập Octonauts tiếng Trung, chỉ xem 5 phút đầu. Video nói nhanh và khó, không cần hiểu hết. Nhiệm vụ: mỗi khi thấy một con vật bé biết, bé hô tên tiếng Trung, được 1 sao.",
    "b": "我认识它！(wǒ rènshi tā)"
   },
   "words": {
    "en": [
     2,
     5,
     6,
     8
    ],
    "zh": [
     2,
     6
    ]
   },
   "doi": "Đếm nhanh tay bạch tuộc (10 phút). Mẹ dùng bạch tuộc giấy đã làm, gập một số chân lên. Bé đếm số chân còn duỗi bằng tiếng Anh, rồi tiếng Trung. Mẹ đếm 1-2-3, bé trả lời kịp được 1 sao. Lần cuối mẹ duỗi đủ, bé hô “Eight! 八!”.",
   "ob": "Ông bà gập chân bạch tuộc giấy, bé đếm số chân còn lại.",
   "toi": "Kể tiếp “Ba lưỡi rìu”. Mẹ kể: Chàng tiều phu lắc đầu: “Không phải của con.” Ông tiên lặn tiếp, vớt lên rìu bạc. Chàng lại thật thà: “Cũng không phải.” Lần ba, ông vớt lên chiếc rìu sắt cũ, chàng mừng rỡ: “Đúng rồi, rìu của con!”. Ông tiên khen chàng trung thực và tặng chàng cả ba lưỡi rìu. Hỏi bé: “Vì sao chàng được tặng cả ba?”."
  },
  {
   "chuyen": "Mẹ nói sai, bé sửa.",
   "en": {
    "v": 1,
    "t": "Lần 4 – bé sửa mẹ. Bật Baby Shark, tắt tiếng. Mẹ làm động tác sai: “Daddy shark” mà chụm hai ngón tay bé xíu. Bé sửa: “No! Daddy shark is big!” và làm đúng. Bật tiếng xem lại.",
    "b": "No! Daddy shark is big!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 5 – chuyển ngữ. Xem lại truyện con vật biển, tắt tiếng. Mẹ chỉ hình, bé nói cả hai thứ tiếng: whale – 鲸鱼, shark – 鲨鱼, octopus – 章鱼.",
    "b": "鲸鱼是whale。(jīngyú shì whale)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3,
     4
    ]
   },
   "doi": "Một con vật, hai cái tên (10 phút). Mẹ úp 6 thẻ tranh con vật biển. Bé lật một thẻ. Mẹ hỏi tiếng Anh thì bé trả lời tiếng Trung; mẹ hỏi tiếng Trung thì bé trả lời tiếng Anh. Đúng thì giữ thẻ. Cuối cùng đếm số thẻ.",
   "ob": "Ông bà lật thẻ, bé nói tên tiếng Anh con vật biển.",
   "toi": "Ca dao. Mẹ đọc câu “Một cây làm chẳng nên non”. Mẹ giải thích: một cây thì không thành núi, nhiều cây chụm lại mới thành núi cao. Giống đội Octonauts làm cùng nhau để giúp các con vật biển. Mẹ và bé chụm ba ngón tay thành “núi”. Hỏi: “Nhà mình làm gì cùng nhau?”.",
   "lyr": "Một cây làm chẳng nên non"
  },
  {
   "chuyen": "Tập nói cho cuộc gọi ông bà.",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé làm người dẫn. Bật bài cá bơi. Bé làm “cô giáo”: bé gọi tên con vật trước, cả nhà làm động tác theo. Mẹ cố tình làm sai một lần để bé sửa.",
    "b": "Everybody, swim like a fish!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 4 – bé hát trước. Bật bài cá nhỏ cá to. Mẹ dừng trước mỗi con vật, bé nói trước 大 hay 小 và tên con vật nếu biết.",
    "b": "我是小鱼！(wǒ shì xiǎo yú)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     4,
     7
    ],
    "zh": [
     0,
     3,
     4,
     5
    ]
   },
   "doi": "Tập cho cuộc gọi (10 phút). Bé chọn 3 câu sẽ nói với ông bà ngày mai, ví dụ: “The whale is big.”, “An octopus has eight arms.”, “我喜欢鲸鱼”. Tập 3 lần bằng điện thoại đồ chơi, mẹ đóng vai ông bà hỏi lại.",
   "ob": "Ông bà nghe bé tập 3 câu về cá voi, bạch tuộc.",
   "toi": "Đọc sách. Mẹ đọc một cuốn trong bộ “Những bài học nhỏ” (NXB Trẻ). Hỏi bé: “Bạn nhỏ trong sách học được điều gì?”. Nối với chuyện “Ba lưỡi rìu”: “Thật thà thì được mọi người quý.”"
  },
  {
   "chuyen": "Thử thách lớn và gọi video ông bà.",
   "en": {
    "v": 1,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu (The whale is big., The octopus can hide.) mới được tô sao. Đủ sao, bé chọn 1 video thích nhất vòng để xem lại.",
    "b": "Super star of the sea!"
   },
   "zh": {
    "v": 1,
    "t": "Thêm nếu bé muốn: hát bài cá nhỏ cá to cùng mẹ.",
    "b": "真厉害！(zhēn lìhai)"
   },
   "doi": "Gọi video ông bà (15 phút). Bé cầm sách nhỏ “Under the Sea” và chú bạch tuộc giấy. Bé chào “Hello!” – “你好!”, rồi nói 3 câu đã tập. Bé cho ông bà đếm 8 chân bạch tuộc cùng bé bằng tiếng Anh. Ông bà hỏi “Con thích con gì nhất?”, bé trả lời bằng tiếng Trung.",
   "ob": "Ông bà đếm chân bạch tuộc cùng bé qua điện thoại.",
   "toi": "Kể lại “Ba lưỡi rìu”. Bé kể và diễn: mẹ đưa 3 “chiếc rìu” bằng giấy màu vàng, bạc, xám. Bé làm chàng tiều phu, chỉ nhận chiếc xám. Mẹ khen: “Con thật thà như chàng tiều phu.”",
   "special": "Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ: hát lại Baby Shark, bé làm động tác, không tính điểm.",
    "b": "Bye bye, baby shark!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: hát lại bài cá nhỏ cá to, cả nhà bơi theo.",
    "b": "鲸鱼，晚安！(jīngyú, wǎn'ān)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Việc thật cùng gia đình: bé giúp mẹ rửa và cất các con vật đồ chơi biển, xếp chúng từ nhỏ đến to vào hộp. Chơi nước rửa đồ chơi trong chậu, mẹ ngồi cạnh. Bé nói “small – big” và “小 – 大”.",
   "ob": "Ông bà cùng bé xếp đồ chơi biển từ nhỏ đến to.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại câu ca dao “Ruộng đồng mặc sức chim bay”, bé làm cá bơi. Bé kể con vật biển bé thích nhất trong cả hai vòng. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Ruộng đồng mặc sức chim bay",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[119] = {
 "sub": "Trung thu: trăng, đèn lồng, bánh",
 "note": "Hai vòng 119 (Trung thu) và 120 (Tết Nguyên đán) gắn với ngày lễ thật. Mẹ có thể dời hai vòng này cho trùng với ngày lễ trong năm: vòng Trung thu học vào 2 tuần trước rằm tháng Tám âm lịch, vòng Tết học vào 2 tuần trước mùng 1 Tết. Khi dời, mẹ học các vòng khác trước theo đúng thứ tự, rồi quay lại hai vòng này khi đến mùa lễ. Hai vòng không phụ thuộc nhau nên học vòng nào trước cũng được.",
 "vocab": {
  "en": [
   [
    "moon",
    "🌕",
    "mặt trăng",
    false
   ],
   [
    "lantern",
    "🏮",
    "đèn lồng",
    false
   ],
   [
    "mooncake",
    "🥮",
    "bánh trung thu",
    false
   ],
   [
    "star",
    "⭐",
    "ngôi sao",
    false
   ],
   [
    "night",
    "🌃",
    "ban đêm",
    false
   ],
   [
    "rabbit",
    "🐇",
    "con thỏ",
    false
   ],
   [
    "round",
    "⭕",
    "tròn",
    false
   ],
   [
    "bright",
    "✨",
    "sáng",
    false
   ],
   [
    "walk",
    "🚶",
    "đi bộ, rước đèn",
    true
   ],
   [
    "look up",
    "👆",
    "nhìn lên",
    true
   ]
  ],
  "zh": [
   [
    "月亮",
    "yuèliang",
    "mặt trăng",
    "🌕"
   ],
   [
    "灯笼",
    "dēnglong",
    "đèn lồng",
    "🏮"
   ],
   [
    "月饼",
    "yuèbing",
    "bánh trung thu",
    "🥮"
   ],
   [
    "星星",
    "xīngxing",
    "ngôi sao",
    "⭐"
   ],
   [
    "中秋节",
    "Zhōngqiū Jié",
    "Tết Trung thu",
    "🎑"
   ],
   [
    "兔子",
    "tùzi",
    "con thỏ",
    "🐇"
   ],
   [
    "圆",
    "yuán",
    "tròn",
    "⭕"
   ]
  ],
  "en_phr": [
   [
    "Look at the moon!",
    "moon",
    "🌕"
   ],
   [
    "I have a red lantern.",
    "lantern",
    "🏮"
   ],
   [
    "The mooncake is round.",
    "round",
    "🥮"
   ],
   [
    "The moon is bright.",
    "bright",
    "✨"
   ]
  ],
  "zh_phr": [
   [
    "月亮圆圆的。",
    "圆",
    "yuèliang yuányuán de",
    "mặt trăng tròn tròn",
    "🌕"
   ],
   [
    "我有一个灯笼。",
    "灯笼",
    "wǒ yǒu yí ge dēnglong",
    "con có một chiếc đèn lồng",
    "🏮"
   ],
   [
    "我喜欢吃月饼。",
    "月饼",
    "wǒ xǐhuan chī yuèbing",
    "con thích ăn bánh trung thu",
    "🥮"
   ],
   [
    "中秋节快乐！",
    "中秋节",
    "Zhōngqiū Jié kuàilè",
    "Trung thu vui vẻ!",
    "🎑"
   ]
  ],
  "seq": [
   [
    "🏮",
    "make a lantern",
    "做灯笼"
   ],
   [
    "🌕",
    "the moon comes up",
    "月亮出来了"
   ],
   [
    "🚶",
    "walk with lanterns",
    "提着灯笼走"
   ],
   [
    "🥮",
    "eat mooncakes",
    "吃月饼"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Hey Diddle Diddle – bài đồng dao con bò nhảy qua mặt trăng",
    "u": "https://www.youtube.com/watch?v=b3AITYGqiRg",
    "kind": "song_action",
    "ch": "MGC Playhouse (Mother Goose Club)"
   },
   {
    "t": "Twinkle Twinkle Little Star – ngôi sao nhỏ lấp lánh",
    "u": "https://www.youtube.com/watch?v=yCjJyiqpAuU",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Tìm bài: một cuốn sách tranh về mặt trăng hoặc ban đêm, đọc to dưới 8 phút trên kênh Brightly Storytime",
    "u": "https://www.youtube.com/channel/UCvQagFNHMrGgQpYunk4rHXg",
    "kind": "story",
    "ch": "Brightly Storytime"
   }
  ],
  "zh": [
   {
    "t": "中秋节儿歌 – bài hát Tết Trung thu: trăng, bánh, đèn lồng (khoảng 3 phút)",
    "u": "https://www.youtube.com/watch?v=r7uFkYjyb3M",
    "kind": "song_action",
    "ch": "Hello Mandarin",
    "min": 3
   },
   {
    "t": "睡吧，月亮！ – bài hát ngắn “Ngủ đi, trăng ơi!”",
    "u": "https://www.youtube.com/watch?v=gLcWMl4Aq0A",
    "kind": "song_action",
    "ch": "Cool Panda Chinese Learning"
   },
   {
    "t": "太阳、地球和月亮 – bài hát mặt trời, trái đất và mặt trăng",
    "u": "https://www.youtube.com/watch?v=pPVVeZc9Wns",
    "kind": "song_action",
    "ch": "eChineseLearning"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Ca nhạc: hát dưới ánh trăng",
   "toi_vi": [
    {
     "t": "Ông sảo ông sao",
     "type": "dong_dao",
     "lyr": "Ông sảo ông sao\nÔng vào cửa sổ\nÔng ở với tôi\nÔng ngồi lên chiếu\nTôi biếu củ khoai\nÔng nhai nhóp nhép\nCái tôm cái tép\nÔng ghém với rau\nĂn mau chóng lớn\nÔng ngồi dậy\nÔng về trời"
    },
    {
     "t": "Câu đố mặt trăng (bóng trăng)",
     "type": "cau_do",
     "lyr": "Bằng cái vung, vùng xuống ao\nĐào chẳng thấy, lấy chẳng được"
    }
   ],
   "book_vi": {
    "t": "Một miếng trăng ngon",
    "author": "May (minh họa: Thảo Võ)",
    "publisher": "NXB Hà Nội & Crabit Kidbooks"
   }
  },
  {
   "title": "Tuần 2 – Kể chuyện: chú Cuội và cây đa trên cung trăng",
   "toi_vi": [
    {
     "t": "Thằng Cuội ngồi gốc cây đa",
     "type": "dong_dao",
     "lyr": "Thằng Cuội ngồi gốc cây đa\nĐể trâu ăn lúa gọi cha ời ời\nCha còn cắt cỏ trên trời\nMẹ còn cưỡi ngựa đi mời quan viên\nÔng thì cầm bút cầm nghiên\nÔng thì cầm tiền đi chuộc lá đa"
    },
    {
     "t": "Trăng bao nhiêu tuổi trăng già",
     "type": "ca_dao",
     "lyr": "Trăng bao nhiêu tuổi trăng già\nNúi bao nhiêu tuổi gọi là núi non\nTrăng bao nhiêu tuổi trăng tròn\nNúi bao nhiêu tuổi núi còn trơ trơ"
    },
    {
     "t": "Câu đố ngôi sao",
     "type": "cau_do",
     "lyr": "Lấp la lấp lánh\nTreo tít trời cao\nĐêm tối lung linh\nSáng ngày biến mất."
    }
   ],
   "book_vi": {
    "t": "Đi lấy mặt trăng",
    "author": "(chưa rõ tên tác giả)",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được moon, lantern, mooncake, star"
  ],
  [
   "en",
   "Nói được câu “Look at the moon!” khi ngắm trăng thật"
  ],
  [
   "zh",
   "Nói được 月亮 yuèliang, 灯笼 dēnglong, 月饼 yuèbing"
  ],
  [
   "zh",
   "Nói được câu 中秋节快乐 hoặc 我喜欢吃月饼"
  ],
  [
   "vi",
   "Đọc theo được đồng dao Ông sảo ông sao và kể được chuyện chú Cuội"
  ],
  [
   "td",
   "Nhận ra trăng tròn, trăng khuyết; nói được hình tròn của bánh và trăng"
  ],
  [
   "xh",
   "Chia bánh cho người thân và nói lời chúc Trung thu"
  ],
  [
   "vd",
   "Cầm đèn lồng đi rước quanh nhà theo nhạc, đi chậm và cẩn thận"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Ca nhạc: ông trăng lên rồi.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Bài đồng dao tiếng Anh vui: con mèo kéo đàn, con bò nhảy qua mặt trăng, chú chó cười, cái đĩa chạy theo cái thìa. Mẹ dừng mỗi hình, hỏi: “Con gì đây? Nó làm gì?”. Bé chỉ mặt trăng và mẹ nhắc “moon”.",
    "b": "Look! The cow jumped over the moon!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Bài hát Trung thu khoảng 3 phút. Mẹ dừng mỗi khi thấy trăng, bánh, đèn lồng; bé chỉ vào màn hình. Mẹ nhắc theo 月亮, 月饼, 灯笼. Hôm nay con học moon, tiếng Trung là 月亮.",
    "b": "这是月亮。(zhè shì yuèliang)"
   },
   "words": {
    "en": [
     0,
     6,
     9
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Ngắm trăng (12 phút). Buổi tối, mẹ và bé ra ban công hoặc cửa sổ nhìn trăng. Mẹ hỏi: “Is the moon round?”. Bé vẽ hình trăng hôm nay lên giấy: tròn hay cong như quả chuối? Nếu trời nhiều mây, bé vẽ trăng theo trí nhớ. Mỗi tối trong tuần vẽ thêm một hình để so sánh. Ra ban công, mẹ luôn đứng cạnh bé.",
   "ob": "Ông bà bế bé ra cửa ngắm trăng, chỉ và nói “trăng tròn”.",
   "toi": "Kể chuyện “Sự tích chú Cuội cung trăng” (phần đầu). Mẹ kể: Ngày xưa có anh Cuội đi kiếm củi trong rừng. Một hôm anh thấy một cây đa lạ, lá đa đắp vào chỗ đau là khỏi ngay. Cuội vui lắm, đào cây mang về trồng trước nhà, dặn vợ: “Chỉ tưới nước sạch cho cây nhé.” Hỏi bé: “Nếu quên lời dặn thì chuyện gì xảy ra?”. Mai kể tiếp."
  },
  {
   "chuyen": "Ngôi sao nhỏ lấp lánh.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm động tác. Bài ngôi sao nhỏ. Bé xoè hai bàn tay, nắm vào mở ra như sao lấp lánh. Đến câu “up above the world so high”, bé giơ tay lên cao. Mẹ nhắc “star” mỗi khi thấy ngôi sao.",
    "b": "Twinkle, twinkle, little star."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – nghe và ru trăng. Bài hát ngắn “Ngủ đi, trăng ơi”. Bé ôm một chiếc gối tròn làm mặt trăng, đung đưa theo nhạc. Mẹ nhắc 月亮 mỗi khi nghe. Bài ngắn nên bật 2 lần.",
    "b": "月亮，睡吧。(yuèliang, shuì ba)"
   },
   "words": {
    "en": [
     3,
     4,
     7
    ],
    "zh": [
     0,
     3
    ]
   },
   "doi": "Làm đèn lồng ông sao đơn giản (15 phút). Mẹ cắt sẵn một ngôi sao to bằng bìa cứng và dán giấy bóng kính đỏ hoặc vàng. Bé dán thêm kim tuyến dạng tờ giấy to, tô màu viền. Mẹ gắn một chiếc que cầm dài (không có đầu nhọn). Không thắp nến: nếu muốn sáng, bố mẹ dùng đèn nhỏ chạy pin, nắp pin vặn vít chặt và do người lớn lắp. Bé cầm đèn nói “lantern” – “灯笼”.",
   "ob": "Ông bà giúp bé dán giấy màu lên ngôi sao bìa.",
   "toi": "Đồng dao. Mẹ đọc bài “Ông sảo ông sao”. Đến mỗi câu, mẹ và bé làm động tác: ông vào cửa sổ (tay làm cửa), ngồi lên chiếu (ngồi xuống), nhai nhóp nhép (làm miệng nhai), ông về trời (giơ tay lên cao). Hỏi bé: “Ông sao bay đi đâu?” – lên trời, như star.",
   "lyr": "Ông sảo ông sao"
  },
  {
   "chuyen": "Nhảy qua mặt trăng.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Mẹ cắt một mặt trăng giấy to, đặt trên sàn. Bật bài, mỗi nhân vật một động tác: cat thì kéo đàn, cow thì nhảy qua mặt trăng giấy, dog thì cười ha ha, dish và spoon thì chạy. Mẹ dừng nhạc, bé đứng im.",
    "b": "Jump over the moon!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật lại bài Trung thu. Mỗi từ một động tác cố định: 月亮 thì hai tay vòng tròn trên đầu, 灯笼 thì cầm đèn đi, 月饼 thì làm động tác ăn. Video nói từ nào, bé làm động tác đó, giống bài tiếng Anh.",
    "b": "我们提灯笼。(wǒmen tí dēnglong)"
   },
   "words": {
    "en": [
     0,
     5,
     8
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Hình tròn quanh nhà (12 phút). Trăng rằm tròn, bánh trung thu tròn. Mẹ và bé đi tìm đồ hình tròn trong nhà: đĩa, nắp nồi, đồng hồ, quả cam. Mỗi đồ tìm được, bé nói “round” và “圆”. Đếm xem tìm được mấy đồ tròn bằng tiếng Anh.",
   "ob": "Ông bà cùng bé tìm đồ tròn trong nhà, bé đếm.",
   "toi": "Kể tiếp “Sự tích chú Cuội”. Mẹ kể: Một hôm vợ Cuội quên lời dặn, tưới nhầm nước bẩn vào gốc đa. Cây đa bỗng rung rinh, bật gốc, bay lên trời. Cuội chạy về, vội níu lấy rễ cây. Cây đa bay mãi, bay mãi, đưa Cuội lên tận cung trăng. Từ đó Cuội ngồi gốc cây đa trên trăng. Mẹ và bé nhìn tranh trăng tìm “gốc đa”."
  },
  {
   "chuyen": "Ru trăng ngủ, hát sao lấp lánh.",
   "en": {
    "v": 1,
    "t": "Lần 2 – nằm hát. Tắt bớt đèn phòng. Bé nằm ngửa trên thảm, mắt nhìn trần nhà như nhìn bầu trời đêm. Bật bài ngôi sao, bé làm tay lấp lánh và hát theo những từ bé biết. Mẹ dừng nhạc ở “star”, bé hát tiếp.",
    "b": "Up above the world so high."
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – hát và ru. Xem lại bài ru trăng. Bé làm mẹ ru “mặt trăng” gối tròn ngủ. Mẹ dừng nhạc giữa câu, bé nói tiếp 月亮.",
    "b": "晚安，月亮。(wǎn'ān, yuèliang)"
   },
   "words": {
    "en": [
     0,
     3,
     4,
     7
    ],
    "zh": [
     0,
     3,
     6
    ]
   },
   "doi": "Rước đèn quanh nhà (12 phút). Bé cầm đèn ông sao đã làm, mẹ bật một bài hát Trung thu. Cả nhà đi thành hàng quanh phòng khách, đi chậm. Mẹ dừng nhạc, cả hàng đứng im, bé nói “Look at my lantern!”. Đi trong nhà, dẹp đồ vướng, không chạy khi cầm đèn.",
   "ob": "Ông bà đi rước đèn cùng bé quanh nhà, đi chậm theo nhạc.",
   "toi": "Đố vui dân gian. Mẹ đọc “Câu đố mặt trăng (bóng trăng)”. Mẹ giải thích: bóng trăng in dưới ao, tròn như cái vung, nhưng đào không thấy, lấy không được. Nếu có chậu nước trên ban công lúc có trăng, mẹ và bé nhìn bóng trăng trong nước (mẹ đứng cạnh, đổ nước ngay sau đó).",
   "lyr": "Câu đố mặt trăng (bóng trăng)"
  },
  {
   "chuyen": "Bé hát trước video.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật bài con bò nhảy qua mặt trăng. Mẹ dừng trước mỗi nhân vật mới, bé nói trước: cat, cow, dog, moon. Cuối bài bé nói câu “The cow jumped over the moon!”.",
    "b": "The cow jumped over the moon!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Bật bài Trung thu. Mẹ dừng trước mỗi từ, bé nói trước 月亮, 月饼, 灯笼. Thêm câu 中秋节快乐.",
    "b": "中秋节快乐！(Zhōngqiū Jié kuàilè)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     6
    ],
    "zh": [
     0,
     1,
     2,
     4
    ]
   },
   "doi": "Bày đồ cho mâm cỗ (12 phút). Mẹ và bé lên danh sách bằng tranh những thứ sẽ có trong mâm cỗ Trung thu ngày mai: bánh trung thu, bưởi, chuối, đèn lồng. Bé nói tên tiếng Anh, mẹ nhắc tiếng Trung (月饼, 柚子 yòuzi, 香蕉 xiāngjiāo). Bé tập câu “I like mooncakes.”",
   "ob": "Ông bà xem danh sách tranh mâm cỗ, kể mâm cỗ Trung thu ngày xưa.",
   "toi": "Đọc sách tranh. Mẹ đọc “Một miếng trăng ngon” của May, minh họa Thảo Võ (NXB Hà Nội & Crabit Kidbooks). Hỏi bé: “Trăng trong sách giống bánh gì?”. Bé chỉ trăng và nói “moon”, “月亮”."
  },
  {
   "chuyen": "Thử thách lớn và vào bếp cùng mẹ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao. Xong một trò tô 1 sao; nói to tên đồ Trung thu khi chơi thì thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần để xem lại.",
    "b": "Three bright stars!"
   },
   "zh": {
    "v": 0,
    "t": "Nếu bé muốn: bật bài Trung thu, cả nhà cầm đèn đi quanh phòng.",
    "b": "我们一起过中秋节。(wǒmen yìqǐ guò Zhōngqiū Jié)"
   },
   "doi": "Vào bếp cùng mẹ: bày mâm cỗ Trung thu (20 phút). Mẹ cắt bánh trung thu thành miếng nhỏ vừa miệng và bóc bưởi, bỏ hạt (dao do mẹ cầm). Bé rửa tay, xếp bánh, múi bưởi, chuối lên đĩa thành hình mặt trăng tròn. Vừa xếp vừa gọi tên: mooncake – 月饼, pomelo – 柚子, banana – 香蕉. Bé mời từng người một miếng và nói “Happy Mid-Autumn!”.",
   "ob": "Ông bà ăn bánh bé mời và nói lời chúc Trung thu.",
   "toi": "Kể lại chuyện quanh mâm cỗ. Bé tự kể “Sự tích chú Cuội” cho cả nhà nghe, mẹ hỏi gợi ý: Cuội tìm được gì? Vợ Cuội quên gì? Cây đa bay đi đâu? Đọc thêm bài “Ông sảo ông sao”, cả nhà cùng làm động tác.",
   "lyr": "Ông sảo ông sao",
   "special": "Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu"
  },
  {
   "chuyen": "Ôn tuần: đi xem phố đèn lồng.",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn video thích nhất tuần. Nếu là bài ngôi sao, cả nhà tắt đèn, bật đèn ông sao và hát. Chơi lại trò web bé thích.",
    "b": "How I wonder what you are!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: hát lại bài Trung thu tiếng Trung, bé làm động tác.",
    "b": "月亮圆圆的。(yuèliang yuányuán de)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     6
    ]
   },
   "doi": "Việc thật cùng gia đình: buổi tối cả nhà đi dạo xem đèn lồng ở phố, chợ hoặc khu nhà. Bé đếm số đèn lồng màu đỏ bằng tiếng Anh, chỉ trăng và nói “Look at the moon!”. Chỗ đông người, mẹ luôn nắm tay bé, hẹn trước: nếu lạc thì đứng yên tại chỗ và gọi to tên mẹ.",
   "ob": "Ông bà dắt bé đi xem đèn lồng, bé đếm đèn đỏ.",
   "toi": "Bé kể về buổi tối. Bé kể hôm nay thấy bao nhiêu đèn lồng, trăng thế nào. Mẹ và bé xem lại các hình trăng đã vẽ trong tuần: trăng có to lên, tròn hơn không?"
  },
  {
   "chuyen": "Tuần Kể chuyện: sách tranh về mặt trăng.",
   "en": {
    "v": 2,
    "t": "Lần 1 – dừng và đoán. Mẹ chọn trước trên kênh Brightly một cuốn sách tranh về mặt trăng hoặc ban đêm, dưới 8 phút. Mẹ dừng ở 3 chỗ: đầu truyện, giữa truyện, trước trang cuối. Mỗi lần hỏi: “Chuyện gì xảy ra tiếp?”. Bé đoán bằng tiếng Việt, gặp “moon”, “night”, “star” thì nói tiếng Anh.",
    "b": "What happens next?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – nghe chuyện mặt trời và mặt trăng. Bài hát về mặt trời, trái đất và mặt trăng. Mẹ cầm một quả bóng to (trái đất) và một quả cam (mặt trăng), bé cầm đèn pin (mặt trời). Video nói 月亮, mẹ giơ quả cam lên.",
    "b": "月亮转呀转。(yuèliang zhuàn ya zhuàn)"
   },
   "words": {
    "en": [
     0,
     3,
     4,
     7
    ],
    "zh": [
     0,
     3
    ]
   },
   "doi": "Kể chuyện bằng tranh (12 phút). Mẹ gấp giấy làm 3 ô. Bé vẽ 3 cảnh của truyện vừa xem: lúc đầu, lúc giữa, lúc kết. Bé chỉ từng ô và kể, gặp từ moon, star, night thì nói tiếng Anh. Dán lên tường cạnh các hình trăng.",
   "ob": "Ông bà nghe bé kể 3 ô tranh truyện mặt trăng.",
   "toi": "Đóng vai chuyện chú Cuội (lần 1). Hôm nay bé làm Cuội, mẹ làm người kể. Mẹ kể từng đoạn ngắn, bé diễn: đi kiếm củi, thấy cây đa lạ, đào cây mang về, dặn vợ tưới nước sạch. Dùng một cành lá to làm cây đa. Mai diễn tiếp đoạn cây bay lên trời."
  },
  {
   "chuyen": "Hát câu dài về con bò và mặt trăng.",
   "en": {
    "v": 0,
    "t": "Lần 4 – hát câu dài. Bật bài con bò nhảy qua mặt trăng. Mẹ tắt tiếng giữa câu, bé hát nốt cả câu. Rồi bé tự đặt câu mới: “The rabbit jumped over the moon!”, mẹ hát theo bé.",
    "b": "The rabbit jumped over the moon!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – hát câu dài. Bật bài Trung thu. Bé hát theo câu có 月饼 và 灯笼. Mẹ dừng giữa câu, bé hát tiếp. Thêm câu 我喜欢吃月饼.",
    "b": "我喜欢吃月饼。(wǒ xǐhuan chī yuèbing)"
   },
   "words": {
    "en": [
     0,
     2,
     5,
     6
    ],
    "zh": [
     0,
     1,
     2,
     5
    ]
   },
   "doi": "Cửa hàng bánh trung thu (12 phút). Bé làm người bán, bày bánh giấy tròn tự vẽ hoặc hộp bánh rỗng. Mẹ làm khách: “A mooncake, please.” Bé đưa bánh và nói “Here you are.” Đổi vai, mẹ mua bằng tiếng Trung: “我要月饼”. Tiền là giấy to bằng lòng bàn tay.",
   "ob": "Ông bà mua bánh giấy của bé, bé nói “mooncake”.",
   "toi": "Đồng dao. Mẹ đọc bài “Thằng Cuội ngồi gốc cây đa”. Mẹ giải thích vài từ: “quan viên” là khách quý, “cầm bút cầm nghiên” là cầm bút viết. Hỏi bé: “Cuội ngồi ở đâu? Trâu làm gì?”. Bé làm Cuội ngồi gốc đa gọi “cha ời ời”.",
   "lyr": "Thằng Cuội ngồi gốc cây đa"
  },
  {
   "chuyen": "Đóng vai trong truyện mặt trăng.",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại sách tranh mặt trăng. Bé chọn làm một nhân vật trong truyện, mẹ làm người kể. Mỗi khi mẹ dừng, bé diễn đúng việc nhân vật đang làm. Gặp chữ moon, bé nhìn lên và chỉ.",
    "b": "Good night, moon!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – mô hình mặt trăng. Xem lại bài mặt trời, trái đất, mặt trăng. Lần này bé cầm quả cam “mặt trăng” đi vòng quanh quả bóng “trái đất”. Mẹ chiếu đèn pin làm mặt trời. Bé nói 月亮 khi đi vòng.",
    "b": "月亮绕着地球转。(yuèliang ràozhe dìqiú zhuàn)"
   },
   "words": {
    "en": [
     0,
     4,
     9
    ],
    "zh": [
     0,
     6
    ]
   },
   "doi": "Trăng tròn, trăng khuyết (15 phút). Mẹ cắt 4 hình trăng bằng giấy vàng: trăng lưỡi liềm, nửa trăng, gần tròn, trăng tròn. Bé xếp theo thứ tự từ nhỏ đến tròn. Mẹ nói: “Rằm Trung thu, trăng tròn nhất.” Bé chỉ trăng tròn nói “round moon” – “圆月亮”.",
   "ob": "Ông bà cùng bé xếp 4 hình trăng từ khuyết đến tròn.",
   "toi": "Đóng vai chuyện chú Cuội (lần 2). Bé diễn tiếp: vợ Cuội quên lời dặn, cây đa rung rinh bay lên, Cuội níu rễ bay theo lên trăng. Mẹ giơ cành lá lên cao, bé bám vào “bay” quanh phòng rồi ngồi xuống “gốc đa trên trăng”. Mẹ hỏi: “Cuội có nhớ nhà không? Ở trên trăng Cuội nhìn thấy gì?”."
  },
  {
   "chuyen": "Ngôi sao lấp lánh hai thứ tiếng.",
   "en": {
    "v": 1,
    "t": "Lần 3 – bé hát một mình. Bật bài ngôi sao, tắt tiếng. Bé hát theo trí nhớ, mẹ chỉ nhắc khi bé quên. Rồi bật tiếng, hát lại cùng video. Bé hát xong một lần trọn bài được 3 sao.",
    "b": "You sing so well!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – chuyển ngữ. Bật bài ru trăng. Sau bài, mẹ chỉ các thứ trên tranh: bé nói cả hai thứ tiếng: moon – 月亮, star – 星星, lantern – 灯笼.",
    "b": "星星是star。(xīngxing shì star)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Một đồ Trung thu, hai cái tên (10 phút). Mẹ bày đèn ông sao, bánh trung thu, tranh trăng, tranh sao, tranh thỏ. Mẹ nói tiếng Anh, bé nói tiếng Trung; rồi đổi lại. Đúng thì bé được đặt đồ đó lên “mâm cỗ”.",
   "ob": "Ông bà chỉ đèn lồng, bé nói “lantern”.",
   "toi": "Ca dao. Mẹ đọc câu “Trăng bao nhiêu tuổi trăng già”. Mẹ hỏi bé: “Trăng có tuổi không? Con mấy tuổi rồi?”. Bé giơ ngón tay nói tuổi bằng tiếng Anh và tiếng Trung. Mẹ giải thích: trăng và núi đã có từ rất lâu, lâu hơn cả ông bà.",
   "lyr": "Trăng bao nhiêu tuổi trăng già"
  },
  {
   "chuyen": "Bé kể chuyện trước khi xem.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước. Trước khi bật video, bé cầm 3 ô tranh và kể lại truyện mặt trăng. Rồi xem lại để kiểm tra. Cuối truyện bé nói câu “The moon is bright.”",
    "b": "The moon is bright tonight."
   },
   "zh": {
    "v": 0,
    "t": "Lần 5 – bé hát trước video. Bật bài Trung thu. Mẹ dừng trước mỗi câu, bé hát trước những từ bé biết rồi bấm tiếp. Cuối bài bé chúc 中秋节快乐.",
    "b": "祝你中秋节快乐！(zhù nǐ Zhōngqiū Jié kuàilè)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     7
    ],
    "zh": [
     0,
     1,
     2,
     4
    ]
   },
   "doi": "Chuẩn bị đi chợ Trung thu (10 phút). Mẹ và bé vẽ danh sách bằng tranh: đèn lồng, bánh trung thu, mặt nạ, con thỏ. Bé tập câu: “I see a lantern!”, “我要灯笼”. Mẹ nhắc quy tắc chỗ đông: luôn nắm tay, nếu lạc thì đứng yên gọi mẹ.",
   "ob": "Ông bà xem danh sách tranh, hỏi bé mai muốn mua gì.",
   "toi": "Đọc sách. Mẹ đọc “Đi lấy mặt trăng” (NXB Kim Đồng). Hỏi bé: “Có lấy được mặt trăng xuống không?”. Bé trả lời và kể lại theo ý bé. Mẹ đọc “Câu đố ngôi sao”, bé đoán và làm tay lấp lánh.",
   "lyr": "Câu đố ngôi sao"
  },
  {
   "chuyen": "Thử thách lớn và săn từ ở chợ Trung thu.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu (Look at the moon!, I have a lantern., The mooncake is round.) mới được tô sao. Đủ sao, bé chọn 1 video yêu thích trong tuần xem lại.",
    "b": "You shine like a star!"
   },
   "doi": "Săn từ ở chợ hoặc siêu thị dịp Trung thu (25 phút). Đến quầy đồ Trung thu: bé tìm theo danh sách tranh: lantern, mooncake, mask, rabbit. Thấy món nào bé nói tên tiếng Anh, mẹ hỏi thêm tiếng Trung. Đếm số đèn lồng đỏ, số hộp bánh. Mua một chiếc đèn lồng giấy hoặc một chiếc bánh nhỏ. Không mua đèn thắp nến. Mẹ luôn nắm tay bé chỗ đông người.",
   "ob": "Ông bà dắt bé đi chợ Trung thu, chỉ đèn lồng cho bé gọi tên.",
   "toi": "Buổi tối kể chuyện chợ. Bé kể hôm nay thấy gì, mua gì. Mẹ đọc lại bài “Thằng Cuội ngồi gốc cây đa”, bé làm chú Cuội.",
   "lyr": "Thằng Cuội ngồi gốc cây đa",
   "special": "Săn từ ở chợ hoặc siêu thị"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ: tắt đèn, bật đèn lồng, hát lại bài ngôi sao, không tính điểm.",
    "b": "Good night, little star."
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: bật bài ru trăng, bé ôm gối tròn ru ngủ.",
    "b": "月亮，晚安！(yuèliang, wǎn'ān)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Việc thật cùng gia đình: buổi tối cả nhà ngồi ngắm trăng, ăn một miếng bánh trung thu nhỏ. Bé chia bánh cho mỗi người và nói “This is for you.” Bé chúc ông bà “中秋节快乐!”. Ra ban công, mẹ ngồi cạnh bé.",
   "ob": "Ông bà ngồi ngắm trăng cùng bé, kể về Trung thu ngày xưa.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại bài “Ông sảo ông sao”, bé làm động tác ông sao về trời. Bé kể điều bé thích nhất trong vòng Trung thu. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Ông sảo ông sao",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[120] = {
 "sub": "Tết: lì xì, chúc mừng năm mới",
 "note": "Hai vòng 119 (Trung thu) và 120 (Tết Nguyên đán) gắn với ngày lễ thật. Mẹ có thể dời hai vòng này cho trùng với ngày lễ trong năm: vòng Trung thu học vào 2 tuần trước rằm tháng Tám âm lịch, vòng Tết học vào 2 tuần trước mùng 1 Tết. Khi dời, mẹ học các vòng khác trước theo đúng thứ tự, rồi quay lại hai vòng này khi đến mùa lễ. Hai vòng không phụ thuộc nhau nên học vòng nào trước cũng được.",
 "vocab": {
  "en": [
   [
    "Happy New Year",
    "🎊",
    "chúc mừng năm mới",
    false
   ],
   [
    "red envelope",
    "🧧",
    "bao lì xì",
    false
   ],
   [
    "fireworks",
    "🎆",
    "pháo hoa",
    false
   ],
   [
    "dragon",
    "🐉",
    "con rồng",
    false
   ],
   [
    "flower",
    "🌸",
    "bông hoa (hoa đào, hoa mai)",
    false
   ],
   [
    "family",
    "👨‍👩‍👧",
    "gia đình",
    false
   ],
   [
    "rice cake",
    "🟩",
    "bánh chưng",
    false
   ],
   [
    "red",
    "🟥",
    "màu đỏ",
    false
   ],
   [
    "bow",
    "🙇",
    "cúi chào",
    true
   ],
   [
    "dance",
    "💃",
    "nhảy múa",
    true
   ]
  ],
  "zh": [
   [
    "新年快乐",
    "xīnnián kuàilè",
    "chúc mừng năm mới",
    "🎊"
   ],
   [
    "红包",
    "hóngbāo",
    "bao lì xì",
    "🧧"
   ],
   [
    "新年好",
    "xīnnián hǎo",
    "năm mới tốt lành",
    "👋"
   ],
   [
    "烟花",
    "yānhuā",
    "pháo hoa",
    "🎆"
   ],
   [
    "龙",
    "lóng",
    "con rồng",
    "🐉"
   ],
   [
    "红色",
    "hóngsè",
    "màu đỏ",
    "🟥"
   ],
   [
    "谢谢",
    "xièxie",
    "cảm ơn",
    "🙏"
   ]
  ],
  "en_phr": [
   [
    "Happy New Year, Grandma!",
    "Happy New Year",
    "🎊"
   ],
   [
    "Thank you for the red envelope.",
    "red envelope",
    "🧧"
   ],
   [
    "Look at the fireworks!",
    "fireworks",
    "🎆"
   ],
   [
    "The dragon can dance.",
    "dance",
    "🐉"
   ]
  ],
  "zh_phr": [
   [
    "新年快乐！",
    "快乐",
    "xīnnián kuàilè",
    "chúc mừng năm mới!",
    "🎊"
   ],
   [
    "谢谢你的红包。",
    "红包",
    "xièxie nǐ de hóngbāo",
    "cảm ơn bao lì xì của ông/bà",
    "🧧"
   ],
   [
    "新年好！",
    "新年",
    "xīnnián hǎo",
    "năm mới tốt lành!",
    "👋"
   ]
  ],
  "seq": [
   [
    "🧹",
    "clean the house",
    "打扫房子"
   ],
   [
    "🌸",
    "put up flowers",
    "摆花"
   ],
   [
    "🙇",
    "say Happy New Year",
    "说新年快乐"
   ],
   [
    "🧧",
    "get a red envelope",
    "拿红包"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Peppa Pig Learns About Chinese New Year – Peppa tìm hiểu Tết (khoảng 4–5 phút)",
    "u": "https://www.youtube.com/watch?v=JfrJozXXs4c",
    "kind": "explainer",
    "ch": "George Pig - Official Channel",
    "min": 4.5
   },
   {
    "t": "Celebrating Chinese New Year with Peppa – các đoạn ngắn Peppa đón Tết (khoảng 4 phút)",
    "u": "https://www.youtube.com/watch?v=cIZeBnX9pJo",
    "kind": "story",
    "ch": "Peppa Pig - Official Channel",
    "min": 3.6
   },
   {
    "t": "Happy Birthday to You – Tết là cả nhà thêm một tuổi",
    "u": "https://www.youtube.com/watch?v=c-v-7JRisLA",
    "kind": "song_action",
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "新年好 – bài hát chúc mừng năm mới của Little Fox Chinese (khoảng 2 phút)",
    "u": "https://www.youtube.com/watch?v=I2tUfWWYOkU",
    "kind": "song_action",
    "ch": "Little Fox Chinese – Stories & Songs for Learners",
    "min": 2.3
   },
   {
    "t": "十二生肖 – 12 con giáp tiếng Trung (xem đoạn đầu 5 phút)",
    "u": "https://m.youtube.com/watch?v=Ov0jKQb2yhI",
    "kind": "lesson",
    "ch": "Little Chinese Learners (from title pattern)"
   },
   {
    "t": "新年好歌 – bài hát năm mới của Learn Chinese With Emma",
    "u": "https://www.youtube.com/watch?v=nc3tHFvM2zk",
    "kind": "song_action",
    "ch": "LearnChineseWithEmma"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần 1 – Khám phá: Tết của mình, Tết của Peppa",
   "toi_vi": [
    {
     "t": "Thịt mỡ dưa hành câu đối đỏ",
     "type": "ca_dao",
     "lyr": "Thịt mỡ, dưa hành, câu đối đỏ\nCây nêu, tràng pháo, bánh chưng xanh"
    },
    {
     "t": "Tháng giêng là tháng ăn chơi",
     "type": "ca_dao",
     "lyr": "Tháng giêng là tháng ăn chơi\nTháng hai trồng đậu, trồng khoai, trồng cà\nTháng ba thì đậu đã già\nTa đi ta hái về nhà phơi khô"
    }
   ],
   "book_vi": {
    "t": "Tết là nhất – 100 từ vựng đầu đời",
    "author": "Thư Nhiên (minh họa: Thùy Cốm)",
    "publisher": "Crabit Kidbooks"
   }
  },
  {
   "title": "Tuần 2 – Thử thách: chúc Tết hai thứ tiếng",
   "toi_vi": [
    {
     "t": "Công cha như núi Thái Sơn",
     "type": "ca_dao",
     "lyr": "Công cha như núi Thái Sơn\nNghĩa mẹ như nước trong nguồn chảy ra\nMột lòng thờ mẹ kính cha\nCho tròn chữ hiếu mới là đạo con"
    },
    {
     "t": "Đố ai đếm được lá rừng",
     "type": "ca_dao",
     "lyr": "Đố ai đếm được lá rừng\nĐố ai đếm được mấy tầng trời cao\nĐố ai đếm được vì sao\nĐố ai đếm được công lao mẹ già"
    }
   ],
   "book_vi": {
    "t": "Hẹn mùa Tết ngọt",
    "author": "Quỳnh Lê",
    "publisher": "Crabit Kidbooks"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được “Happy New Year!” và “Thank you!” khi nhận lì xì"
  ],
  [
   "en",
   "Nói được red envelope, fireworks, dragon, flower"
  ],
  [
   "zh",
   "Nói được 新年快乐 xīnnián kuàilè và 谢谢 xièxie đúng lúc"
  ],
  [
   "zh",
   "Nói được 红包 hóngbāo, 龙 lóng, 红色 hóngsè"
  ],
  [
   "vi",
   "Đọc theo được câu Thịt mỡ, dưa hành, câu đối đỏ và kể chuyện bánh chưng"
  ],
  [
   "td",
   "Nói được con giáp năm nay và con giáp của bé"
  ],
  [
   "xh",
   "Cúi chào, chúc Tết ông bà bằng một câu trọn vẹn"
  ],
  [
   "vd",
   "Múa rồng theo hàng cùng cả nhà, đi theo nhịp trống"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần Khám phá: Peppa tìm hiểu Tết.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Peppa học về Tết của người Trung Quốc, rất giống Tết của mình. Mẹ dừng mỗi khi thấy đèn lồng, bao lì xì, con rồng, hỏi: “Nhà mình có cái này không?”. Bé chỉ và nói tiếng Việt, mẹ nhắc tiếng Anh “red envelope”, “dragon”.",
    "b": "Look! A red envelope!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và vỗ tay. Bài “新年好” khoảng 2 phút. Bé vỗ tay theo nhịp. Mẹ dừng mỗi khi nghe 新年好, bé nhắc lại. Hôm nay con học Happy New Year, tiếng Trung là 新年好.",
    "b": "新年好！(xīnnián hǎo)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     7
    ],
    "zh": [
     0,
     2
    ]
   },
   "doi": "So sánh Tết hai nước (12 phút). Mẹ vẽ 2 cột trên giấy: Tết Việt Nam và Tết Trung Quốc. Mẹ và bé nhớ lại video: cả hai đều có màu đỏ, lì xì, chúc năm mới, ăn cơm cả nhà. Khác: mình có bánh chưng, hoa đào, hoa mai; bên kia có múa rồng, sủi cảo. Bé dán hoặc vẽ hình vào cột. Mẹ hỏi: “Cái gì giống nhau?”.",
   "ob": "Ông bà kể cho bé nghe Tết ngày xưa có gì.",
   "toi": "Kể chuyện “Bánh chưng, bánh giầy” (phần đầu). Mẹ kể: Vua Hùng muốn chọn một người con giỏi để nối ngôi. Vua bảo các hoàng tử: “Ai mang đến lễ vật ý nghĩa nhất, ta sẽ chọn.” Các anh đi tìm thật nhiều món ngon, đắt tiền. Người con út Lang Liêu nghèo, chỉ có ruộng lúa, buồn không biết làm gì. Hỏi bé: “Lang Liêu sẽ làm gì nhỉ?”."
  },
  {
   "chuyen": "Mười hai con giáp.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Các đoạn ngắn Peppa đón Tết, khoảng 4 phút. Mẹ dừng khi có pháo hoa, múa rồng, màu đỏ. Bé chỉ và nói. Mẹ nhắc “fireworks”, “dragon”, “red”. Nói với bé: pháo hoa chỉ xem từ xa, không tự đốt.",
    "b": "Look at the fireworks!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem đoạn đầu 5 phút về 12 con giáp. Mẹ dừng mỗi con, bé nói tên tiếng Việt, rồi nghe tiếng Trung. Nhiều con bé đã học ở vòng con vật: 牛, 马, 羊, 鸡, 狗, 猪. Điều thú vị: 12 con giáp Việt Nam có con Mèo, còn Trung Quốc là con Thỏ 兔 tùzi.",
    "b": "这是龙。(zhè shì lóng)"
   },
   "words": {
    "en": [
     2,
     3,
     7
    ],
    "zh": [
     4
    ]
   },
   "doi": "Con giáp của cả nhà (15 phút). Mẹ tìm con giáp của từng người: bé, bố, mẹ, ông bà. Bé vẽ hoặc chọn tranh con vật cho mỗi người, dán lên tờ giấy “gia đình”. Bé nói: “Mẹ là con … , con là con …”. Con giáp nào có tên tiếng Anh, tiếng Trung bé đã học thì bé nói luôn.",
   "ob": "Ông bà nói con giáp của mình cho bé, bé tìm tranh con vật đó.",
   "toi": "Ca dao Tết. Mẹ đọc câu “Thịt mỡ dưa hành câu đối đỏ”. Mẹ giải thích từng thứ: thịt mỡ, dưa hành, câu đối đỏ, cây nêu, tràng pháo, bánh chưng xanh – là những thứ ngày Tết xưa. Bé tìm xem nhà mình Tết này có thứ nào. Mẹ nói “red” khi nhắc câu đối đỏ.",
   "lyr": "Thịt mỡ dưa hành câu đối đỏ"
  },
  {
   "chuyen": "Làm bao lì xì.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm theo. Xem lại video Peppa tìm hiểu Tết. Mỗi khi thấy một hoạt động, bé làm động tác: cúi chào (bow), nhận lì xì bằng hai tay, múa rồng (dance). Mẹ dừng hỏi: “What is Peppa doing?”, bé làm động tác.",
    "b": "Bow and say Happy New Year!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – hát và cúi chào. Bật bài 新年好. Đến cuối bài, bé cúi chào và nói 新年快乐, mẹ đưa một bao lì xì giấy. Bé nhận bằng hai tay, nói 谢谢.",
    "b": "谢谢！(xièxie)"
   },
   "words": {
    "en": [
     0,
     1,
     8
    ],
    "zh": [
     0,
     1,
     2,
     6
    ]
   },
   "doi": "Làm bao lì xì (15 phút). Mẹ gấp một tờ giấy đỏ thành phong bao, dán hai bên (mẹ cầm kéo). Bé dán hình hoa, con giáp, hoặc vẽ lên. Làm 4–5 bao cho cả nhà. Bé nói “red envelope” và “红包”. Bên trong bỏ một lời chúc bé vẽ, chưa bỏ tiền.",
   "ob": "Ông bà cùng bé dán hình hoa lên bao lì xì giấy đỏ.",
   "toi": "Kể tiếp “Bánh chưng, bánh giầy”. Mẹ kể: Một đêm Lang Liêu mơ thấy thần mách: “Gạo là thứ quý nhất, hãy làm bánh từ gạo nếp.” Lang Liêu làm một chiếc bánh vuông, gói lá xanh, tượng trưng cho đất; và một chiếc bánh tròn, trắng, tượng trưng cho trời. Mẹ vẽ hình vuông và hình tròn, bé chỉ: “square – round”."
  },
  {
   "chuyen": "Hoa đào, hoa mai, đếm cánh hoa.",
   "en": {
    "v": 1,
    "t": "Lần 2 – đoán trước. Xem lại các đoạn Peppa đón Tết. Mẹ dừng trước mỗi cảnh mới, bé đoán sẽ thấy gì: rồng, pháo hoa, lì xì. Đúng thì bé hô to tên tiếng Anh.",
    "b": "Is it a dragon? Yes!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – con giáp nói được. Xem lại đoạn đầu 12 con giáp. Mẹ dừng ở những con bé đã học (牛, 马, 羊, 鸡, 狗, 猪), bé nói tên tiếng Trung trước khi video nói.",
    "b": "我是小龙！(wǒ shì xiǎo lóng)"
   },
   "words": {
    "en": [
     3,
     4,
     9
    ],
    "zh": [
     4,
     5
    ]
   },
   "doi": "Đếm cánh hoa (12 phút). Nếu có cành đào, cành mai hay chậu hoa ngày Tết, mẹ và bé đếm cánh của một bông hoa bằng tiếng Anh, rồi bằng tiếng Trung. Hoa đào màu gì? Hoa mai màu gì? Nếu chưa có hoa, mẹ cắt hoa giấy 5 cánh, bé đếm và tô màu. Chỉ nhìn, sờ nhẹ, không bẻ cành, không cho hoa vào miệng.",
   "ob": "Ông bà chỉ bông hoa trên cành đào, bé đếm cánh hoa.",
   "toi": "Ca dao. Mẹ đọc bài “Tháng giêng là tháng ăn chơi”. Mẹ giải thích: tháng Giêng là tháng Tết, đi chơi, thăm nhà; tháng hai trồng đậu, trồng khoai; tháng ba thì đậu già, đem hái về phơi. Bé làm động tác trồng cây, hái quả theo từng câu.",
   "lyr": "Tháng giêng là tháng ăn chơi"
  },
  {
   "chuyen": "Thêm một tuổi vào ngày Tết.",
   "en": {
    "v": 2,
    "t": "Lần 1 – hát và kể. Ngày xưa, người Việt Nam qua Tết là cả nhà cùng thêm một tuổi. Bật bài “Happy Birthday”, mẹ hỏi: “Tết này con lên mấy tuổi?”. Bé giơ ngón tay đếm và thổi “nến” tưởng tượng trên tay. Cả nhà vỗ tay.",
    "b": "Happy birthday! How old are you?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé hát trước. Bật bài 新年好. Mẹ dừng trước câu 新年好, bé hát trước. Cuối bài bé chúc mẹ 新年快乐 và cúi chào.",
    "b": "新年快乐，妈妈！(xīnnián kuàilè, māma)"
   },
   "words": {
    "en": [
     0,
     5,
     8
    ],
    "zh": [
     0,
     2,
     6
    ]
   },
   "doi": "Dọn nhà đón Tết (15 phút). Bé giúp một việc nhỏ dọn nhà: lau bàn bằng khăn ẩm, xếp gối, cất dép gọn. Mỗi việc bé nói bằng tiếng Anh theo bảng thứ tự: “clean the house”. Mẹ kể: dọn nhà sạch để đón năm mới. Chai tẩy rửa mẹ để chỗ cao, bé chỉ dùng khăn và nước sạch.",
   "ob": "Ông bà nhờ bé lau bàn đón Tết, khen bé chăm.",
   "toi": "Đọc sách tranh. Mẹ đọc “Tết là nhất – 100 từ vựng đầu đời” (Thư Nhiên, minh họa Thùy Cốm, Crabit Kidbooks). Mẹ chỉ từng tranh, bé nói tên tiếng Việt, rồi thử tiếng Anh hoặc tiếng Trung với những từ bé biết (red envelope, 红包, flower)."
  },
  {
   "chuyen": "Thử thách lớn và pháo đài chăn gối.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn tuần 1: web ghép 3 trò liền nhau. Mẹ vẽ 3 ô sao. Xong một trò tô 1 sao; nói to “Happy New Year” hoặc tên đồ Tết khi chơi thì thêm 1 sao. Xong, bé chọn 1 video thích nhất tuần để xem lại.",
    "b": "Happy New Year, superstar!"
   },
   "zh": {
    "v": 0,
    "t": "Nếu bé muốn: bật bài 新年好 trong pháo đài, cả nhà vỗ tay.",
    "b": "新年好！新年好！(xīnnián hǎo)"
   },
   "doi": "Xây pháo đài chăn gối (25 phút). Cả nhà dùng ghế và chăn dựng một “ngôi nhà Tết”, treo bao lì xì giấy và hoa giấy bé đã làm lên chăn. Vào trong, mẹ bật đèn pin to, kể chuyện “Bánh chưng, bánh giầy”. Bé dùng một hộp vuông làm bánh chưng, một cái đĩa tròn làm bánh giầy. Để lối ra rộng, không đè chăn lên mặt bé.",
   "ob": "Ông bà vào pháo đài nghe chuyện bánh chưng, bé đưa “bánh” mời ông bà.",
   "toi": "Kể nốt “Bánh chưng, bánh giầy” trong pháo đài. Mẹ kể: Đến ngày dâng lễ, vua thấy các món ngon của các anh, rồi thấy hai chiếc bánh giản dị của Lang Liêu. Vua nếm bánh, khen ngon và hỏi ý nghĩa. Lang Liêu kể bánh vuông là đất, bánh tròn là trời. Vua rất vui, chọn Lang Liêu. Từ đó Tết nhà nhà gói bánh chưng.",
   "special": "Xây pháo đài chăn gối, kể chuyện trong pháo đài"
  },
  {
   "chuyen": "Ôn tuần: đi chợ hoa ngày Tết.",
   "en": {
    "v": 0,
    "t": "Ôn: bé chọn video thích nhất tuần. Nếu là Peppa tìm hiểu Tết, bé kể cho bố nghe Peppa học được gì. Chơi lại trò web bé thích.",
    "b": "What did Peppa learn?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: hát lại bài 新年好, bé vỗ tay.",
    "b": "新年好，爸爸！(xīnnián hǎo, bàba)"
   },
   "words": {
    "en": [
     0,
     1,
     4,
     5
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Việc thật cùng gia đình: cả nhà đi chợ hoa hoặc chợ Tết (hoặc siêu thị mùa Tết). Bé chỉ hoa đào, hoa mai, câu đối đỏ, bao lì xì; nói “flower”, “red”, “red envelope”. Bé đếm số chậu hoa vàng. Chỗ đông người, mẹ luôn nắm tay bé, hẹn trước: nếu lạc thì đứng yên gọi mẹ.",
   "ob": "Ông bà dắt bé đi chợ hoa, chỉ hoa đào cho bé nói “flower”.",
   "toi": "Bé kể lại chuyện. Bé tự kể “Bánh chưng, bánh giầy”, mẹ hỏi gợi ý: Vua muốn gì? Lang Liêu làm bánh gì? Bánh vuông là gì, bánh tròn là gì? Mẹ đọc lại câu “Thịt mỡ dưa hành câu đối đỏ”."
  },
  {
   "chuyen": "Tuần Thử thách: chúc Tết ai nhanh hơn?",
   "en": {
    "v": 0,
    "t": "Lần 3 – thi trả lời. Xem lại video Peppa tìm hiểu Tết. Mẹ dừng, hỏi một câu: “What color is the envelope?”, “What is this animal?”. Bé trả lời bằng tiếng Anh trước khi mẹ đếm đến 3 thì được 1 sao.",
    "b": "It's red! It's a dragon!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – bài năm mới thứ hai. Bài hát năm mới của cô Emma, cùng lời chúc 新年好. Tuần trước con học bài 新年好 rồi, hôm nay nghe bản khác. Mẹ và bé thi: ai hát 新年好 đúng lúc trước được 1 sao.",
    "b": "我先唱！(wǒ xiān chàng)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     7
    ],
    "zh": [
     0,
     2
    ]
   },
   "doi": "Chúc Tết nhanh tay (12 phút). Mẹ đặt 4 tranh: ông, bà, bố, mẹ úp xuống. Bé lật một tranh, chạy đến người đó, cúi chào và chúc “Happy New Year!” hoặc “新年快乐!”. Mẹ đếm đến 5, bé làm kịp được 1 sao. Người được chúc đưa bé một bao lì xì giấy.",
   "ob": "Ông bà được bé chúc Tết, đưa bé bao lì xì giấy và nói cảm ơn.",
   "toi": "Kể chuyện “Tích Chu” (phần đầu). Mẹ kể: Cậu bé Tích Chu ở với bà. Bà thương Tích Chu nhất nhà, có gì ngon cũng để dành cho cháu. Nhưng Tích Chu mải chơi, chẳng mấy khi ở bên bà. Một hôm bà ốm, khát nước, gọi mãi mà Tích Chu vẫn đi chơi. Bà buồn quá, hóa thành chim bay đi. Hỏi bé: “Tích Chu sẽ làm gì khi về nhà?”."
  },
  {
   "chuyen": "Đố vui ngày Tết có tính điểm.",
   "en": {
    "v": 1,
    "t": "Lần 3 – nói câu. Xem lại các đoạn Peppa đón Tết. Mỗi cảnh, bé nói một câu: “Look at the fireworks!”, “The dragon can dance.” Nói đủ câu được 1 sao. Mẹ hỏi thêm tiếng Trung, bé nói 烟花, 龙.",
    "b": "The dragon can dance!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – đố con giáp. Xem lại đoạn đầu 12 con giáp. Rồi tắt video, mẹ làm tiếng kêu hoặc động tác một con giáp, bé đoán bằng tiếng Trung (牛, 马, 羊, 鸡, 狗, 猪, 龙). Đúng được 1 sao.",
    "b": "是马！(shì mǎ)"
   },
   "words": {
    "en": [
     2,
     3,
     9
    ],
    "zh": [
     3,
     4
    ]
   },
   "doi": "Đố đồ Tết (12 phút). Mẹ cho 5 đồ Tết vào túi vải: bao lì xì, hoa giấy, câu đối nhỏ, quả quýt, hộp vuông “bánh chưng”. Bé sờ, đoán, rút ra và nói tên tiếng Anh. Lượt sau mẹ hỏi tiếng Trung “这是什么？”, bé trả lời. Đủ 5 sao bé được chọn một bài để múa.",
   "ob": "Ông bà cho bé sờ đồ trong túi, bé đoán đồ Tết.",
   "toi": "Ca dao. Mẹ đọc câu “Công cha như núi Thái Sơn”. Mẹ giải thích: công cha to như núi, nghĩa mẹ nhiều như nước suối chảy mãi. Tết là dịp con cháu chúc Tết, cảm ơn ông bà cha mẹ. Bé tập nói câu cảm ơn bố mẹ bằng tiếng Việt, tiếng Anh “Thank you”, tiếng Trung “谢谢”.",
   "lyr": "Công cha như núi Thái Sơn"
  },
  {
   "chuyen": "Múa rồng cả nhà.",
   "en": {
    "v": 0,
    "t": "Lần 4 – bé làm người dẫn. Xem lại video Peppa tìm hiểu Tết. Lần này bé làm người kể: mẹ tắt tiếng, bé nói những gì Peppa đang làm bằng tiếng Việt, gặp từ đã học thì nói tiếng Anh. Bật tiếng xem lại để kiểm tra.",
    "b": "Peppa says Happy New Year!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – hát và múa. Bật bài năm mới của cô Emma. Cả nhà xếp hàng múa rồng: bé làm đầu rồng, mọi người bám vai. Mẹ nói 龙 thì cả hàng uốn lượn, mẹ nói 停 thì đứng im.",
    "b": "龙来了！(lóng lái le)"
   },
   "words": {
    "en": [
     3,
     9
    ],
    "zh": [
     2,
     4,
     5
    ]
   },
   "doi": "Múa rồng thi đua (15 phút). Mẹ làm đầu rồng bằng hộp giấy và đuôi bằng tấm vải đỏ dài ngắn vừa phải. Cả nhà bám vai thành con rồng, bé làm đầu. Mẹ gõ nồi làm trống (gõ nhẹ). Đi vòng quanh phòng, khi trống dừng thì cả rồng đứng im. Ai cử động thì về cuối hàng. Dẹp đồ vướng, đi chậm.",
   "ob": "Ông bà bám vai bé làm đuôi rồng, đi theo nhịp trống.",
   "toi": "Kể tiếp “Tích Chu”. Mẹ kể: Tích Chu về nhà, thấy bà hóa chim, khóc gọi: “Bà ơi, bà về với cháu!”. Chim nói: “Cháu tìm nước suối tiên cho bà uống thì bà sẽ thành người.” Tích Chu đi đường xa, vượt núi tìm được nước suối, mang về cho bà. Bà uống xong trở lại làm người, ôm cháu thật chặt. Từ đó Tích Chu luôn ở bên bà."
  },
  {
   "chuyen": "Mẹ nói sai, bé sửa.",
   "en": {
    "v": 1,
    "t": "Lần 4 – bé sửa mẹ. Xem lại các đoạn Peppa đón Tết, tắt tiếng. Mẹ chỉ con rồng và cố tình nói “It's a cat!”. Bé sửa: “No! It's a dragon!”. Bật tiếng xem lại.",
    "b": "No! It's a dragon!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 4 – chuyển ngữ. Bật bài 新年好, tắt tiếng. Mẹ chỉ tranh đồ Tết, bé nói cả hai thứ tiếng: red envelope – 红包, dragon – 龙, Happy New Year – 新年快乐.",
    "b": "红包是red envelope。(hóngbāo shì red envelope)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     7
    ],
    "zh": [
     0,
     1,
     3,
     4,
     5
    ]
   },
   "doi": "Một đồ Tết, hai cái tên (10 phút). Mẹ úp 6 thẻ tranh đồ Tết. Bé lật một thẻ. Mẹ hỏi tiếng Anh thì bé trả lời tiếng Trung; mẹ hỏi tiếng Trung thì bé trả lời tiếng Anh. Đúng thì giữ thẻ. Cuối cùng đếm số thẻ.",
   "ob": "Ông bà lật thẻ, bé nói tên đồ Tết bằng tiếng Anh.",
   "toi": "Ca dao. Mẹ đọc câu “Đố ai đếm được lá rừng”. Mẹ hỏi: “Con đếm được lá trong rừng không? Sao trên trời không?”. Rồi giải thích: công lao mẹ cũng nhiều như lá rừng, như sao trời. Bé ôm mẹ và nói “I love you, Mommy.”",
   "lyr": "Đố ai đếm được lá rừng"
  },
  {
   "chuyen": "Làm đồ hoá trang Tết.",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé tự hát. Bật bài “Happy Birthday”, đổi lời thành “Happy New Year to you”. Bé hát chúc từng người trong nhà, đến tên ai người đó cúi chào lại.",
    "b": "Happy New Year to you!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé hát trước. Bật bài năm mới của cô Emma. Mẹ dừng trước câu chúc, bé hát trước. Cuối bài bé nói câu 谢谢你的红包 khi mẹ đưa bao lì xì giấy.",
    "b": "谢谢你的红包。(xièxie nǐ de hóngbāo)"
   },
   "words": {
    "en": [
     0,
     5,
     8
    ],
    "zh": [
     0,
     1,
     6
    ]
   },
   "doi": "Làm đồ hoá trang (15 phút). Bé chọn làm Peppa hoặc George đón Tết, hoặc làm con rồng múa. Peppa, George: bé mặc áo đỏ, mẹ cắt tai lợn bằng giấy hồng dán lên băng đô. Con rồng: dùng đầu rồng hộp giấy hôm qua, bé vẽ thêm mắt, râu. Dây buộc bằng ruy băng ngắn, buộc lỏng.",
   "ob": "Ông bà giúp bé vẽ mắt cho đầu rồng giấy.",
   "toi": "Đọc sách tranh. Mẹ đọc “Hẹn mùa Tết ngọt” của Quỳnh Lê (Crabit Kidbooks). Hỏi bé: “Tết trong sách có gì ngọt?”. Nếu có thêm cuốn “Mèo nhỏ mèo to đón Tết cùng bé” (Thu Dương, Crabit Kidbooks), mẹ đọc cùng và hỏi: “Mèo đón Tết làm gì?”."
  },
  {
   "chuyen": "Thử thách lớn và ngày hoá trang.",
   "en": {
    "v": 1,
    "t": "Thử thách lớn tuần 2: web ghép 3 trò. Khó hơn tuần trước: mỗi trò xong, bé nói một câu (Happy New Year!, Thank you for the red envelope., The dragon can dance.) mới được tô sao. Đủ sao, bé chọn 1 video yêu thích để xem lại trong bộ đồ hoá trang.",
    "b": "Happy New Year! You did it!"
   },
   "zh": {
    "v": 0,
    "t": "Thêm nếu bé muốn: hát bài 新年好 trong bộ đồ hoá trang.",
    "b": "新年快乐，大家好！(xīnnián kuàilè, dàjiā hǎo)"
   },
   "doi": "Ngày hoá trang (20 phút). Bé mặc đồ đã làm, đóng vai nhân vật trong video: Peppa hoặc George đón Tết, hay con rồng múa. Bé đi chúc Tết cả nhà: cúi chào, nói “Happy New Year!” và “新年快乐!”, nhận bao lì xì giấy bằng hai tay, nói “Thank you!” – “谢谢!”. Nếu làm rồng, bé múa một vòng theo nhịp trống nồi. Mẹ quay clip.",
   "ob": "Ông bà nhận lời chúc Tết của bé và đưa bé bao lì xì giấy.",
   "toi": "Kể lại “Tích Chu”. Bé kể: Tích Chu mải chơi, bà hóa chim, Tích Chu đi tìm nước suối, bà trở về. Mẹ hỏi: “Tết này con sẽ làm gì cho ông bà?”. Bé nói một việc, ví dụ rót nước mời ông bà.",
   "special": "Ngày hoá trang: bé đóng vai nhân vật trong video"
  },
  {
   "chuyen": "Ôn nhẹ cuối vòng.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại video Peppa tìm hiểu Tết, không tính điểm. Xem lại clip hoá trang chúc Tết.",
    "b": "See you next year!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: hát lại bài 新年好, cả nhà vỗ tay.",
    "b": "新年好！(xīnnián hǎo)"
   },
   "words": {
    "en": [
     0,
     1,
     4,
     5
    ],
    "zh": [
     0,
     1,
     2,
     6
    ]
   },
   "doi": "Việc thật cùng gia đình: gọi điện hoặc đến thăm ông bà. Bé chúc Tết ông bà bằng một câu tiếng Việt, một câu tiếng Anh “Happy New Year, Grandma!”, một câu tiếng Trung “新年快乐!”. Bé tặng ông bà bao lì xì giấy có tranh bé vẽ. Nếu được lì xì thật, bé nhận bằng hai tay, nói cảm ơn rồi đưa mẹ cất giữ.",
   "ob": "Ông bà nhận lời chúc của bé và kể cho bé nghe Tết hồi ông bà còn nhỏ.",
   "toi": "Buổi tối nhẹ nhàng. Mẹ đọc lại câu ca dao “Công cha như núi Thái Sơn”, ôm bé và nói điều mẹ vui nhất trong Tết này. Bé kể điều bé thích nhất. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Công cha như núi Thái Sơn",
   "diary": true
  }
 ]
};

/* ---- gd7a ---- */
// Vườn ươm 4–5 tuổi — vòng 121–132 (tuổi 5, chủ đề 13–18). Sinh tự động bởi b7.js từ src7/.
window.CT_DETAIL45 = window.CT_DETAIL45 || {};
window.CT_DETAIL45[121] = {
 "sub": "Cô giáo, bạn bè, lớp học",
 "vocab": {
  "en": [
   [
    "teacher",
    "🧑‍🏫",
    "cô giáo",
    false
   ],
   [
    "friend",
    "🧒",
    "bạn",
    false
   ],
   [
    "school",
    "🏫",
    "trường học",
    false
   ],
   [
    "book",
    "📖",
    "quyển sách",
    false
   ],
   [
    "sit down",
    "🪑",
    "ngồi xuống",
    true
   ],
   [
    "stand up",
    "🧍",
    "đứng lên",
    true
   ],
   [
    "clap",
    "👏",
    "vỗ tay",
    true
   ],
   [
    "open",
    "👐",
    "xòe (tay) ra",
    true
   ],
   [
    "shut",
    "✊",
    "nắm (tay) lại",
    true
   ],
   [
    "happy",
    "😊",
    "vui",
    false
   ]
  ],
  "zh": [
   [
    "老师",
    "lǎoshī",
    "cô giáo",
    "🧑‍🏫"
   ],
   [
    "学校",
    "xuéxiào",
    "trường học",
    "🏫"
   ],
   [
    "朋友",
    "péngyou",
    "bạn",
    "🧒"
   ],
   [
    "书",
    "shū",
    "quyển sách",
    "📖"
   ],
   [
    "坐下",
    "zuòxià",
    "ngồi xuống",
    "🪑"
   ],
   [
    "起立",
    "qǐlì",
    "đứng dậy",
    "🧍"
   ],
   [
    "拍手",
    "pāishǒu",
    "vỗ tay",
    "👏"
   ],
   [
    "举手",
    "jǔshǒu",
    "giơ tay",
    "✋"
   ]
  ],
  "en_phr": [
   [
    "This is my teacher.",
    "teacher",
    "🧑‍🏫"
   ],
   [
    "I like my school.",
    "school",
    "🏫"
   ],
   [
    "You are my friend.",
    "friend",
    "🧒"
   ],
   [
    "Stand up, please.",
    "Stand up",
    "🧍"
   ]
  ],
  "zh_phr": [
   [
    "这是我的老师。",
    "老师",
    "zhè shì wǒ de lǎoshī",
    "đây là cô giáo của con",
    "🧑‍🏫"
   ],
   [
    "我喜欢学校。",
    "学校",
    "wǒ xǐhuan xuéxiào",
    "con thích trường",
    "🏫"
   ],
   [
    "请坐下。",
    "坐下",
    "qǐng zuòxià",
    "mời ngồi xuống",
    "🪑"
   ]
  ],
  "seq": [
   [
    "🎒",
    "go to school",
    "去学校"
   ],
   [
    "👋",
    "say hello",
    "说你好"
   ],
   [
    "🎵",
    "sing a song",
    "唱歌"
   ],
   [
    "🪑",
    "sit down",
    "坐下"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Open Shut Them (version 2)",
    "u": "https://www.youtube.com/watch?v=hXxHonmYz6c",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The More We Get Together",
    "u": "https://www.youtube.com/watch?v=SpzLA-w1I8s",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The Colour Monster Goes to School | Read aloud – nếu dài, xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=fusMvn_rCP8",
    "kind": "story",
    "min": 6,
    "ch": "Love2Read with Miss Ellis"
   },
   {
    "t": "Everyone Belongs - Read Aloud Picture Book",
    "u": "https://www.youtube.com/watch?v=ajd_XQ2sk2Q",
    "kind": "story",
    "min": 5,
    "ch": "Brightly Storytime"
   }
  ],
  "zh": [
   {
    "t": "Learn Chinese for Kids: Classroom Actions Song | 举手 放下手 拍手 请安静",
    "u": "https://www.youtube.com/watch?v=wpn_qIJn2w4",
    "kind": "song_action",
    "min": 1,
    "ch": "Oreya"
   },
   {
    "t": "\"In the Classroom\" (Chinese Lesson 02) CLIP – Kids Chinese Mandarin, Kindergarten",
    "u": "https://www.youtube.com/watch?v=MmQmRFIRFw0",
    "kind": "lesson",
    "min": 1.7,
    "ch": "Busy Beavers – Kids Learn ABCs 123s & More"
   },
   {
    "t": "【31】在学校真快乐 School is Fun 《快乐幼儿华语》",
    "u": "https://www.youtube.com/watch?v=IMPtRWpTaMQ",
    "kind": "story",
    "min": 3,
    "ch": "ChineseClass365 中文加油站"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: hát và làm theo cô giáo",
   "toi_vi": [
    {
     "t": "Con công hay múa",
     "type": "dong_dao",
     "lyr": "Con công hay múa\nNó múa làm sao\nNó rụt cổ vào\nNó xoè cánh ra\nNó đậu cành đa\nNó kêu ríu rít\nNó đậu cành mít\nNó kêu vịt chè\nNó đậu cành tre\nNó kêu bè muống\nNó đỗ dưới ruộng\nNó kêu tầm vông"
    },
    {
     "t": "Câu đố cái gương (lấp lánh)",
     "type": "cau_do",
     "lyr": "Lấp la lấp lánh\nTreo ở trên tường\nTrước khi đến trường\nBé soi chải tóc\nLà cái gì?"
    }
   ],
   "book_vi": {
    "t": "Bé tập kể chuyện – Mỗi tuần một câu chuyện",
    "author": "(chưa rõ tên)",
    "publisher": "NXB Trẻ"
   }
  },
  {
   "title": "Tuần Kể chuyện: một ngày ở lớp",
   "toi_vi": [
    {
     "t": "Một cây làm chẳng nên non",
     "type": "ca_dao",
     "lyr": "Một cây làm chẳng nên non\nBa cây chụm lại nên hòn núi cao"
    },
    {
     "t": "Đi cầu đi quán",
     "type": "dong_dao",
     "lyr": "Đi cầu đi quán\nĐi bán lợn con\nĐi mua cái xoong\nĐem về đun nấu\nMua quả dưa hấu\nVề biếu ông bà\nMua một đàn gà\nVề cho ăn thóc\nMua lược chải tóc\nMua cặp gài đầu\nĐi mau về mau\nKẻo trời sắp tối"
    },
    {
     "t": "Dung dăng dung dẻ",
     "type": "dong_dao"
    }
   ],
   "book_vi": {
    "t": "Những bài học nhỏ (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được “This is my teacher.” / “This is my friend.” khi chỉ ảnh"
  ],
  [
   "en",
   "Làm đúng lệnh stand up, sit down, open, shut, clap"
  ],
  [
   "zh",
   "Nói được 老师, 朋友, 学校, 书 khi nhìn tranh"
  ],
  [
   "zh",
   "Làm đúng lệnh 起立, 坐下, 举手 khi mẹ hô"
  ],
  [
   "vi",
   "Kể lại truyện Loài chim học xây tổ theo câu hỏi Ai? Làm gì?"
  ],
  [
   "td",
   "Nghe từ tiếng Anh, nói được từ tiếng Trung tương ứng (teacher → 老师)"
  ],
  [
   "xh",
   "Chào và rủ một “bạn mới” cùng chơi"
  ],
  [
   "vd",
   "Múa theo đồng dao Con công hay múa"
  ]
 ],
 "days": [
  {
   "chuyen": "Giờ vòng tròn ở lớp",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – xem và làm theo: bài Open Shut Them. Mẹ và bé ngồi đối diện như giờ vòng tròn ở lớp. Nghe open thì xòe tay, shut thì nắm tay, clap thì vỗ tay. Xem xong mẹ hỏi “Open?” – bé xòe tay; “Shut?” – bé nắm tay.",
    "b": "Open your hands. Shut your hands."
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài 举手 拍手. Mẹ dừng video sau mỗi động tác và cùng bé làm: 举手 (jǔshǒu) giơ tay, 拍手 (pāishǒu) vỗ tay. Hôm nay bé chỉ cần làm đúng, chưa cần nói.",
    "b": "举手！拍手！(jǔshǒu! pāishǒu!)"
   },
   "words": {
    "en": [
     6,
     7,
     8
    ],
    "zh": [
     6,
     7
    ]
   },
   "doi": "Chơi “lớp học của bé”: xếp 3 gối thành vòng tròn, cho gấu bông ngồi cùng. Mẹ làm cô giáo, hô “Open – Shut – Clap” cho cả lớp làm theo. Rồi đổi vai: bé làm teacher, hô cho mẹ và gấu. Mẹ cố tình làm sai một lần để bé sửa.",
   "ob": "Ông bà làm học trò, để bé làm cô giáo hô open, shut, clap.",
   "toi": "Kể truyện “Loài chim học xây tổ” bằng lời của mẹ: Phượng Hoàng mở lớp dạy các loài chim làm tổ; có bạn mới học một chút đã bay về, nên tổ của bạn ấy sơ sài. Hỏi bé: “Ở lớp con có học đến hết giờ không?” rồi để bé kể một việc cô dạy hôm nay."
  },
  {
   "chuyen": "Bạn bè cùng lớp",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ: bài The More We Get Together. Ở câu “your friends are my friends”, mẹ chỉ vào bé rồi chỉ vào mình. Dừng video hỏi “Who is your friend?” (bạn của con là ai?) – bé nói tên một bạn ở lớp.",
    "b": "You are my friend."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: bài học In the Classroom. Dừng ở mỗi hình, mẹ chỉ và nói theo video: 老师 (lǎoshī), 书 (shū). Sau đó mẹ hỏi “老师在哪儿？” (cô giáo đâu?) để bé chỉ vào hình.",
    "b": "老师在哪儿？(lǎoshī zài nǎr?)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     9
    ],
    "zh": [
     0,
     3,
     2
    ]
   },
   "doi": "Làm “ảnh lớp”: bé vẽ hoặc dán ảnh cô giáo và 2 bạn thân lên tờ giấy A4. Mẹ chỉ từng người hỏi “Who is this?” – bé trả lời “This is my teacher.” hoặc “This is my friend.” Mẹ ghi tên dưới hình và treo lên tường để dùng cả tuần.",
   "ob": "Ông bà xem ảnh lớp, hỏi bé tên cô và tên bạn.",
   "toi": "Đồng dao “Con công hay múa”: mẹ đọc 2 lần, bé làm theo: rụt cổ vào, xòe cánh ra. Lần 2 mẹ dừng ở cuối câu để bé nói tiếng cuối (vào, ra, đa…). Thứ Bảy bé sẽ múa bài này trong buổi biểu diễn nhỏ.",
   "lyr": "Con công hay múa"
  },
  {
   "chuyen": "Cô bảo đứng lên, ngồi xuống",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác nhanh: xem lại Open Shut Them, bé đứng giữa phòng làm theo. Sau video mẹ chơi “cô giáo nói”: “Stand up!” bé đứng, “Sit down!” bé ngồi. Lúc đầu chậm, sau nhanh dần; bé đúng 5 lần liền được 1 sao.",
    "b": "Stand up, please. Sit down, please."
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại bài 举手 拍手. Sau video mẹ thêm hai lệnh của lớp học: 起立 (qǐlì) đứng dậy, 坐下 (zuòxià) ngồi xuống. Mẹ hô, bé làm; rồi bé hô, mẹ làm.",
    "b": "起立！坐下！(qǐlì! zuòxià!)"
   },
   "words": {
    "en": [
     4,
     5,
     6,
     7,
     8
    ],
    "zh": [
     4,
     5,
     6,
     7
    ]
   },
   "doi": "Trò ghế âm nhạc: đặt 2 ghế giữa phòng, dọn đồ sắc cạnh khỏi lối đi. Mẹ vỗ tay, bé đi vòng quanh; mẹ hô “Sit down!” bé ngồi xuống ghế gần nhất, “Stand up!” bé đứng lên đi tiếp. Lượt sau mẹ hô bằng tiếng Trung 坐下 / 起立.",
   "ob": "Ông bà vỗ tay, hô ngồi xuống – đứng lên cho bé chơi ghế.",
   "toi": "Đọc sách “Bé tập kể chuyện – Mỗi tuần một câu chuyện” (NXB Trẻ): chọn 1 truyện ngắn. Đọc xong mẹ hỏi 3 câu: Ai? Ở đâu? Làm gì? Bé trả lời bằng tiếng Việt, đủ câu."
  },
  {
   "chuyen": "Hát cùng bạn",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác: xem lại The More We Get Together. Mẹ và bé nắm tay đung đưa theo nhạc, đến chữ “happy” thì cười thật tươi. Dừng video hỏi Yes/No: “Are you happy?” – bé trả lời “Yes!” hoặc “No!”.",
    "b": "Are you happy? Yes!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại In the Classroom. Lần này mẹ tắt tiếng ở 2 hình cuối, hỏi “这是什么？” (zhè shì shénme – đây là gì?) để bé tự nói 书 hoặc 老师, rồi bật tiếng nghe lại.",
    "b": "这是书。(zhè shì shū)"
   },
   "words": {
    "en": [
     1,
     9,
     2
    ],
    "zh": [
     0,
     3,
     1
    ]
   },
   "doi": "Gọi tên bạn: lấy 5 đồ chơi làm “các bạn trong lớp”, bé đặt tên cho từng bạn. Mẹ chỉ một bạn hỏi “Is this your friend?” – bé gật “Yes” hoặc lắc “No”. Sau đó bé chọn một bạn, đưa một chiếc bánh bằng giấy và nói “For you!”.",
   "ob": "Ông bà hỏi bé “Bạn này tên gì?” khi bé xếp hàng đồ chơi.",
   "toi": "Câu đố “cái gương lấp lánh”: mẹ đọc chậm 2 lần, bé đoán. Sau đó bé đứng trước gương chải tóc như sáng đi học; mẹ hỏi “Sáng mai đến trường con mang những gì?”.",
   "lyr": "Câu đố cái gương (lấp lánh)"
  },
  {
   "chuyen": "Bé là cô giáo nhỏ",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước: mở Open Shut Them, mẹ tắt tiếng ở đoạn giữa. Bé tự hát hoặc nói “open, shut, clap” trước, rồi bật tiếng kiểm tra. Cuối cùng bé nói một câu ngắn: “I can clap.”",
    "b": "I can clap. Can you clap?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – bé nói trước: xem In the Classroom; hình vừa hiện, bé nói 老师, 书 trước video. Mẹ nói câu “这是我的老师” (zhè shì wǒ de lǎoshī – đây là cô giáo của con), bé nhắc lại và chỉ vào ảnh lớp.",
    "b": "这是我的老师。(zhè shì wǒ de lǎoshī)"
   },
   "words": {
    "en": [
     6,
     7,
     8,
     0
    ],
    "zh": [
     0,
     3,
     1
    ]
   },
   "doi": "Tập cho buổi biểu diễn Thứ Bảy: bé chọn 1 tiết mục (Open Shut Them hoặc múa Con công hay múa). Mẹ làm khán giả. Bé tập chào “Hello! My name is…” và cúi chào khi kết thúc. Tập 3 lần, mỗi lần mẹ khen một điểm cụ thể (to giọng, làm đúng động tác…).",
   "ob": "Ông bà làm khán giả, vỗ tay khi bé chào và hát.",
   "toi": "Bé kể lại truyện “Loài chim học xây tổ”, mẹ gợi ý bằng câu hỏi: “Ai mở lớp? Bạn nào về sớm? Tổ của bạn ấy thế nào?”. Mẹ khen bé đã đi học chăm cả tuần."
  },
  {
   "chuyen": "Thử thách lớn: buổi biểu diễn nhỏ",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: web ghép 3 trò liền nhau. Mẹ chấm sao: làm đúng động tác = 1 sao, nói được từ = 1 sao, nói cả câu “This is my teacher.” = 2 sao. Xong, bé chọn 1 video yêu thích của tuần (Open Shut Them hoặc The More We Get Together) để xem lại một lần.",
    "b": "You did it! Great job!"
   },
   "zh": {
    "v": 0,
    "t": "Bé chọn xem lại bài 举手 拍手 hoặc bài học lớp học; khi video dừng, mẹ hô 起立 / 坐下 cho bé làm.",
    "b": "你真棒！(nǐ zhēn bàng!)"
   },
   "special": "Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip",
   "doi": "Buổi biểu diễn nhỏ: trải khăn làm sân khấu. Bé chào “Hello! My name is…”, hát Open Shut Them hoặc múa Con công hay múa, rồi nói một câu tiếng Trung “我喜欢学校” (wǒ xǐhuan xuéxiào – con thích trường). Mẹ quay clip khoảng 1 phút, cả nhà vỗ tay. Bé muốn thì gửi clip cho cô giáo hoặc ông bà.",
   "ob": "Ông bà ngồi hàng ghế khán giả, vỗ tay và khen bé.",
   "toi": "Xem lại clip cùng bé, hỏi “Con thích phần nào nhất?”. Trước khi ngủ đọc nhỏ lại đồng dao Con công hay múa.",
   "lyr": "Con công hay múa"
  },
  {
   "chuyen": "Ôn tuần 1: đi ngang trường",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ: bé chọn bài thích nhất trong tuần, xem 1 lần. Mẹ để bé tự làm động tác, không nhắc.",
    "b": "Let's go to school!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: hát lại bài 举手 拍手, bé vừa đi quanh phòng vừa làm động tác."
   },
   "doi": "Cả nhà đi dạo đến cổng trường mầm non của bé (hoặc một trường gần nhà); nắm tay khi qua đường. Đứng ngoài cổng mẹ hỏi “Where is the school?” – bé chỉ và nói “School!” / “学校!” (xuéxiào). Bé kể con hay chơi ở góc nào, cô giáo tên gì.",
   "ob": "Ông bà đưa bé đi ngang trường, hỏi “Trường của con đâu?”.",
   "toi": "Mẹ kể một chuyện thật về ngày đầu đi học của mẹ hồi bé. Hỏi bé: “Ngày đầu đi học con thấy thế nào?”. Ôm bé và đố lại câu đố cái gương."
  },
  {
   "chuyen": "Quái vật màu sắc đi học",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và chỉ: truyện The Colour Monster Goes to School (nếu dài, xem 5 phút đầu). Mẹ dừng 3 lần, chỉ vào tranh hỏi “Where is the teacher?”, “Where is the book?” – bé chỉ. Dừng giữa truyện hỏi bằng tiếng Việt: “Chuyện gì xảy ra tiếp?”.",
    "b": "Where is the teacher?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: truyện 在学校真快乐 (ở trường thật vui). Mẹ không cần hiểu hết lời, chỉ dừng khi thấy cô giáo và các bạn, hỏi “老师在哪儿？” và “朋友在哪儿？” (péngyou zài nǎr – bạn đâu?) để bé chỉ.",
    "b": "朋友在哪儿？(péngyou zài nǎr?)"
   },
   "words": {
    "en": [
     0,
     2,
     3,
     1
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Làm bản đồ lớp học: trên tờ giấy to, mẹ kẻ khung, bé vẽ các góc: góc sách, góc chơi, chỗ ngồi ăn. Mẹ hỏi “Where is the book corner?” – bé chỉ, rồi nói góc con thích: “I like the book corner.” Giữ bản đồ để đóng vai cả tuần.",
   "ob": "Ông bà nhờ bé chỉ trên tranh “Con hay chơi ở đâu?”.",
   "toi": "Kể truyện “Chân, Tay, Tai, Mắt, Miệng” bằng lời của mẹ: các bạn giận Miệng nên không chịu làm việc, ai cũng mệt lả; hiểu ra rồi làm lành và cùng làm. Hỏi bé: “Ở lớp, các bạn có cần nhau không?”."
  },
  {
   "chuyen": "Ai cũng có chỗ trong lớp",
   "en": {
    "v": 3,
    "t": "Lần 1: truyện Everyone Belongs. Dừng ở mỗi trang có các bạn, hỏi “Is she happy?” – bé trả lời Yes/No. Hết truyện hỏi bằng tiếng Việt: “Các bạn trong truyện cùng nhau làm gì?”.",
    "b": "Is she happy? Yes, she is."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 bài 举手 拍手 – bé nói trước: nghe nhạc, bé hô “举手！” hoặc “拍手！” trước khi video hô, rồi mới làm. Cuối cùng nói “我会拍手” (wǒ huì pāishǒu – con biết vỗ tay).",
    "b": "我会拍手。(wǒ huì pāishǒu)"
   },
   "words": {
    "en": [
     1,
     9,
     6
    ],
    "zh": [
     7,
     6,
     2
    ]
   },
   "doi": "Trò chào bạn mới: mẹ đóng vai bạn mới vào lớp, đứng ngại ngùng ở góc. Bé lại chào “Hello! I'm… Let's play!” rồi rủ mẹ chơi một trò bé chọn. Đổi vai: bé làm bạn mới, mẹ chào bằng tiếng Trung “你好！我们一起玩吧！” (nǐ hǎo! wǒmen yìqǐ wán ba – chào bạn, mình cùng chơi nhé).",
   "ob": "Ông bà làm bạn mới, để bé chào và rủ chơi.",
   "toi": "Ca dao “Một cây làm chẳng nên non”: mẹ đọc 2 lần. Lấy 3 chiếc đũa: một chiếc đứng không vững, ba chiếc chụm lại (mẹ giữ giúp) thì đứng được. Mẹ nói: “Cả lớp cùng nhau thì làm được việc lớn.”",
   "lyr": "Một cây làm chẳng nên non"
  },
  {
   "chuyen": "Chuyện gì xảy ra tiếp?",
   "en": {
    "v": 2,
    "t": "Lần 2 – đoán và đóng vai: xem lại The Colour Monster Goes to School. Trước khi lật trang, mẹ dừng hỏi “Chuyện gì xảy ra tiếp?”. Khi Quái vật vui hoặc sợ, bé làm mặt theo. Sau video bé đóng Quái vật đi học, mẹ làm cô giáo nói “Sit down, please.”",
    "b": "What happens next?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại 在学校真快乐. Dừng ở cảnh lớp học, mẹ hỏi câu Yes/No “你喜欢学校吗？” (nǐ xǐhuan xuéxiào ma – con thích trường không?). Dạy bé trả lời “喜欢！” (xǐhuan – thích).",
    "b": "你喜欢学校吗？(nǐ xǐhuan xuéxiào ma?)"
   },
   "words": {
    "en": [
     0,
     4,
     5,
     9
    ],
    "zh": [
     1,
     0,
     4,
     5
    ]
   },
   "doi": "Đóng vai “một ngày ở lớp” theo bản đồ lớp học: bé dắt gấu bông đi từ cổng → chào cô → ngồi vòng tròn → đọc sách. Ở mỗi chỗ bé nói 1 câu tiếng Anh ngắn: “Hello, teacher!”, “Sit down.”, “This is my book.” Mẹ chỉ nhắc khi bé quên.",
   "ob": "Ông bà hỏi bé “Đến lớp con làm gì trước?” và nghe bé kể.",
   "toi": "Đọc một truyện trong bộ “Những bài học nhỏ” (NXB Trẻ). Lần này bé lật trang và kể theo tranh trước, mẹ đọc chữ sau."
  },
  {
   "chuyen": "Phiên dịch nhí: nghe Anh, nói Trung",
   "en": {
    "v": 3,
    "t": "Lần 2: xem lại Everyone Belongs. Mẹ dừng, chỉ vào một bạn nhỏ và hỏi “What is she doing?”. Mẹ gợi ý hai lựa chọn “singing?” hay “dancing?”, bé chọn và làm động tác đó.",
    "b": "What is she doing?"
   },
   "zh": {
    "v": 1,
    "t": "Trò chuyển ngữ trước khi xem: mẹ nói tiếng Anh “teacher”, bé nói tiếng Trung “老师”; “book” → “书”; “school” → “学校”. Sau đó xem lại bài In the Classroom để kiểm tra xem bé nói đúng không.",
    "b": "Teacher – 老师 (lǎoshī)!"
   },
   "words": {
    "en": [
     0,
     3,
     2
    ],
    "zh": [
     0,
     3,
     1
    ]
   },
   "doi": "Trò phiên dịch nhí: gấu bông “chỉ nói tiếng Anh”, búp bê “chỉ nói tiếng Trung”. Mẹ cầm gấu nói “Stand up!”, bé “dịch” cho búp bê: “起立！” và làm động tác. Đổi lại: búp bê nói “坐下”, bé dịch “Sit down!”. Làm 4–6 lượt, mỗi lượt đúng một sao.",
   "ob": "Ông bà cầm gấu bông, nhờ bé nói giúp bằng tiếng khác.",
   "toi": "Bé kể lại truyện “Chân, Tay, Tai, Mắt, Miệng” bằng cách chỉ vào từng bộ phận trên người mình. Mẹ chỉ hỏi “Rồi sao nữa?”."
  },
  {
   "chuyen": "Bé kể chuyện bằng tranh",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước: mở The Colour Monster Goes to School, tắt tiếng. Bé nhìn tranh kể bằng tiếng Việt, chen từ tiếng Anh đã học (teacher, friend, book, happy). Bật tiếng xem đoạn cuối, rồi bé nói “I like my school.”",
    "b": "I like my school."
   },
   "zh": {
    "v": 2,
    "t": "Lần 3: xem 在学校真快乐, bé nói trước video các từ 老师, 朋友, 学校. Mẹ chỉ vào cô giáo hỏi “这是谁？” (zhè shì shéi – đây là ai?), bé trả lời “这是老师”.",
    "b": "这是谁？(zhè shì shéi?)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     9
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Vẽ truyện 3 tranh: (1) bé đến trường, (2) bé chơi với bạn, (3) bé vui vẻ về nhà. Bé kể lại theo 3 tranh, mỗi tranh 1 câu, cố nói “This is my friend.”, “I am happy.” Sau đó bé chọn 3 món đồ ăn cho buổi picnic ngày mai và tập gọi tên.",
   "ob": "Ông bà nghe bé kể 3 tranh và hỏi “Rồi sao nữa?”.",
   "toi": "Đồng dao “Đi cầu đi quán”: mẹ đọc 2 lần, bé giơ tay mỗi khi nghe tên một món đồ (cái xoong, quả dưa hấu, đàn gà…). Ngày mai đi picnic mình đọc lại.",
   "lyr": "Đi cầu đi quán"
  },
  {
   "chuyen": "Thử thách lớn: picnic cùng các bạn",
   "en": {
    "v": 3,
    "t": "Thử thách lớn: mẹ chấm sao – trả lời đúng câu Yes/No = 1 sao, nói câu “I like…” = 2 sao, kể lại 1 tranh của truyện = 3 sao. Sau đó bé chọn xem lại một truyện yêu thích của tuần (Colour Monster hoặc Everyone Belongs).",
    "b": "Do you like the story? Yes, I do!"
   },
   "zh": {
    "v": 2,
    "t": "Ôn nhanh: bé chọn xem lại truyện 在学校真快乐 hoặc bài 举手 拍手, rồi nói “我喜欢…” về phần bé thích."
   },
   "special": "Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung",
   "doi": "Picnic từ vựng: trải khăn ở sân hoặc công viên gần nhà, mang 3–4 món (bánh mì, chuối, sữa, nước). Cho gấu bông làm bạn cùng lớp ngồi cùng. Bé mời từng bạn: “This is for you, friend!” và “给你！” (gěi nǐ – cho bạn). Mẹ hỏi “Do you like bananas?” – bé trả lời “Yes, I do.” hoặc “No, I don't.” Chơi đồng dao Đi cầu đi quán trên khăn. Rửa tay trước khi ăn, ngồi yên khi ăn, không vừa chạy vừa ăn.",
   "ob": "Ông bà cùng ngồi picnic, hỏi bé tên các món ăn.",
   "toi": "Nằm trên giường, bé kể lại buổi picnic: con mời bạn nào, con thích món gì. Mẹ đọc lại ca dao Một cây làm chẳng nên non.",
   "lyr": "Một cây làm chẳng nên non"
  },
  {
   "chuyen": "Ôn nhẹ: nhìn lại vòng học",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ, không học từ mới: bé chọn 1 bài hát của vòng (Open Shut Them hoặc The More We Get Together) và hát cùng mẹ.",
    "b": "See you at school!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: hát bài 举手 拍手 lần cuối của vòng, bé làm cô giáo hô cho cả nhà làm."
   },
   "doi": "Nhìn lại ảnh lớp và bản đồ lớp học. Bé chỉ và nói các từ còn nhớ: teacher, friend, book, school; 老师, 朋友, 书, 学校. Mẹ chỉ khen, không sửa nhiều. Cùng bé xếp cặp cho ngày mai đi học.",
   "ob": "Ông bà nghe bé đọc tên các bạn trên ảnh lớp.",
   "toi": "Kể ngắn lại truyện “Loài chim học xây tổ”, hỏi bé tuần tới ở lớp con muốn chơi gì. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[122] = {
 "sub": "Bút, sách, cặp, kéo",
 "vocab": {
  "en": [
   [
    "pen",
    "🖊️",
    "bút mực",
    false
   ],
   [
    "pencil",
    "✏️",
    "bút chì",
    false
   ],
   [
    "crayon",
    "🖍️",
    "bút sáp",
    false
   ],
   [
    "book",
    "📖",
    "quyển sách",
    false
   ],
   [
    "bag",
    "🎒",
    "cặp sách",
    false
   ],
   [
    "scissors",
    "✂️",
    "cái kéo",
    false
   ],
   [
    "ruler",
    "📏",
    "thước kẻ",
    false
   ],
   [
    "paper",
    "📄",
    "tờ giấy",
    false
   ],
   [
    "draw",
    "🎨",
    "vẽ",
    true
   ],
   [
    "clean up",
    "🧹",
    "dọn dẹp",
    true
   ]
  ],
  "zh": [
   [
    "书",
    "shū",
    "quyển sách",
    "📖"
   ],
   [
    "笔",
    "bǐ",
    "cái bút",
    "🖊️"
   ],
   [
    "书包",
    "shūbāo",
    "cặp sách",
    "🎒"
   ],
   [
    "铅笔",
    "qiānbǐ",
    "bút chì",
    "✏️"
   ],
   [
    "剪刀",
    "jiǎndāo",
    "cái kéo",
    "✂️"
   ],
   [
    "本子",
    "běnzi",
    "quyển vở",
    "📒"
   ],
   [
    "画画",
    "huà huà",
    "vẽ tranh",
    "🎨"
   ],
   [
    "红色",
    "hóngsè",
    "màu đỏ",
    "🔴"
   ]
  ],
  "en_phr": [
   [
    "What's this? It's a pencil.",
    "pencil",
    "✏️"
   ],
   [
    "I have a red crayon.",
    "crayon",
    "🖍️"
   ],
   [
    "Put the book in the bag.",
    "bag",
    "🎒"
   ],
   [
    "I can draw a cat.",
    "draw",
    "🎨"
   ]
  ],
  "zh_phr": [
   [
    "这是什么？这是书。",
    "书",
    "zhè shì shénme? zhè shì shū",
    "đây là gì? đây là quyển sách",
    "📖"
   ],
   [
    "我的书包很大。",
    "书包",
    "wǒ de shūbāo hěn dà",
    "cặp của con rất to",
    "🎒"
   ],
   [
    "我会画画。",
    "画画",
    "wǒ huì huà huà",
    "con biết vẽ",
    "🎨"
   ]
  ],
  "seq": [
   [
    "📖",
    "open the book",
    "打开书"
   ],
   [
    "✏️",
    "take a pencil",
    "拿铅笔"
   ],
   [
    "🎨",
    "draw a picture",
    "画画"
   ],
   [
    "🎒",
    "put it in the bag",
    "放进书包"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "What's this? - School supplies | English Vocabulary Guessing Game",
    "u": "https://www.youtube.com/watch?v=1liwGMndb9Y",
    "kind": "game",
    "min": 4,
    "ch": "Be English Kids"
   },
   {
    "t": "WHEN YOU LOVE A BOOK - Read Aloud Picture Book",
    "u": "https://www.youtube.com/watch?v=5kAsvxNpZvM",
    "kind": "story",
    "min": 4,
    "ch": "Brightly Storytime"
   },
   {
    "t": "Clean Up Song",
    "u": "https://www.youtube.com/watch?v=SFE0mMWbA-Y",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "I See Something Blue | Colors Song for Children",
    "u": "https://www.youtube.com/watch?v=jYAWf8Y91hA",
    "kind": "game",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "English Chinese Classroom Objects 教室物品 – Learn Chinese with Flashcards (đồ dùng lớp học)",
    "u": "https://www.youtube.com/watch?v=Hee7NE95-0I",
    "kind": "lesson",
    "min": 2.9,
    "ch": "Chinese As A Foreign Language"
   },
   {
    "t": "【6】书包里有什么？ What is in the school bag? 《快乐幼儿华语》",
    "u": "https://youtube.com/watch?pp=0gcJCdgAo7VqN5tD&v=aNwYuZ6B4Sw",
    "kind": "story",
    "min": 3,
    "ch": "ChineseClass365 中文加油站"
   },
   {
    "t": "Simple Chinese Songs for Kids: Colors Song 颜色歌 (bài hát màu sắc)",
    "u": "https://www.youtube.com/watch?v=iij7vZG15Cc",
    "kind": "song_action",
    "min": 1,
    "ch": "Cool Panda Chinese Learning"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: trong cặp của bé có gì?",
   "toi_vi": [
    {
     "t": "Câu đố cái ghế",
     "type": "cau_do",
     "lyr": "Có chân mà chẳng biết đi\nQuanh năm suốt tháng đứng ì một nơi?"
    },
    {
     "t": "Câu đố bàn tay",
     "type": "cau_do",
     "lyr": "Năm ông cùng ở một nhà\nTình huynh nghĩa đệ vào ra thuận hòa"
    }
   ],
   "book_vi": {
    "t": "Chuyện ly kỳ về hình khối, màu sắc, số đếm (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  },
  {
   "title": "Tuần Thử thách: ai nhanh hơn?",
   "toi_vi": [
    {
     "t": "Ngó lên nuộc lạt mái nhà",
     "type": "ca_dao",
     "lyr": "Ngó lên nuộc lạt mái nhà\nBao nhiêu nuộc lạt nhớ ông bà bấy nhiêu"
    },
    {
     "t": "Câu đố mái tóc",
     "type": "cau_do",
     "lyr": "Chẳng lợp mà thành mái\nChẳng cấy mà mọc đều"
    }
   ],
   "book_vi": {
    "t": "Bồ nông có hiếu (phiên bản sách tranh)",
    "author": "Phong Thu",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Trả lời được “What's this?” bằng “It's a pencil / a book …”"
  ],
  [
   "en",
   "Nói được câu “I have a … ” hoặc “I can draw …”"
  ],
  [
   "zh",
   "Nói được 书, 笔, 书包, 铅笔 khi cầm đồ thật"
  ],
  [
   "zh",
   "Trả lời câu “这是什么？” bằng “这是…”"
  ],
  [
   "vi",
   "Đoán được câu đố cái ghế, câu đố bàn tay"
  ],
  [
   "td",
   "Xếp bút theo dài – ngắn, đếm đồ trong cặp đến 10"
  ],
  [
   "xh",
   "Tự xếp cặp sách và dọn bàn sau khi vẽ"
  ],
  [
   "vd",
   "Cầm bút sáp tô kín hình, dùng kéo nhựa đầu tròn cắt đường thẳng có mẹ ngồi cạnh"
  ]
 ],
 "days": [
  {
   "chuyen": "Túi bí mật: đây là cái gì?",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – xem và chỉ: trò đoán What's this? School supplies. Khi video che đồ vật, mẹ bấm dừng, bé đoán bằng tiếng Việt trước, rồi bật tiếng nghe từ tiếng Anh. Mẹ nhắc lại từ và bé chỉ vào đồ thật trên bàn.",
    "b": "What's this? It's a pencil."
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài 教室物品 (đồ dùng lớp học). Dừng ở mỗi thẻ, mẹ đọc theo video; bé tìm đồ thật tương ứng: 书包 (shūbāo), 书 (shū), 笔 (bǐ).",
    "b": "这是书包。(zhè shì shūbāo)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     6
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Túi bí mật: bỏ vào túi vải 5 món (quyển sách, hộp bút sáp, thước, bút chì, quyển vở; không bỏ kéo). Bé thò tay sờ, đoán tên rồi rút ra kiểm tra. Mẹ hỏi “What's this?”, bé nói tiếng Anh nếu nhớ. Cuối cùng đếm: “How many? One, two… five!”.",
   "ob": "Ông bà bỏ đồ vào túi cho bé sờ và đoán tên.",
   "toi": "Kể truyện “Ba lưỡi rìu” bằng lời của mẹ: chàng tiều phu đánh rơi rìu sắt xuống sông, ông tiên vớt lên rìu vàng, rìu bạc, nhưng chàng thật thà nói không phải của mình. Hỏi bé: “Nếu con nhặt được bút của bạn, con làm gì?”."
  },
  {
   "chuyen": "Khi con yêu một cuốn sách",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ: truyện When You Love a Book. Mẹ dừng ở trang đầu, chỉ bìa sách nói “book”. Mỗi lần nhân vật mở sách, bé làm động tác mở hai bàn tay như mở sách. Cuối truyện hỏi: “Con thích quyển sách nào nhất ở nhà?”.",
    "b": "Open the book, please."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: truyện 书包里有什么？ (trong cặp có gì?). Trước mỗi lần lấy đồ ra khỏi cặp, mẹ dừng và hỏi bằng tiếng Việt: “Con đoán sẽ lấy ra cái gì?”. Bé đoán, rồi xem tiếp và nhắc lại từ tiếng Trung.",
    "b": "书包里有什么？(shūbāo lǐ yǒu shénme?)"
   },
   "words": {
    "en": [
     3,
     7,
     8
    ],
    "zh": [
     0,
     2,
     5
    ]
   },
   "doi": "Khám phá một quyển sách tranh: bé tìm bìa trước, bìa sau, đếm số trang (mẹ đếm cùng bằng tiếng Anh tới 10, rồi tiếp tiếng Việt). Tìm trong tranh 3 đồ dùng học tập hoặc đồ vật bé biết tên. Dọn một góc sách nhỏ ở nhà, bé tự xếp 5 quyển.",
   "ob": "Ông bà cùng bé đếm trang sách và chỉ tranh.",
   "toi": "Câu đố “cái ghế”: mẹ đọc 2 lần, bé đoán. Đoán xong bé đếm xem trong nhà có mấy cái ghế và ghế nào cao nhất.",
   "lyr": "Câu đố cái ghế"
  },
  {
   "chuyen": "Bút nào dài hơn?",
   "en": {
    "v": 0,
    "t": "Lần 2 – bé đoán trước: xem lại What's this? Lần này mẹ dừng trước khi hình hiện rõ, bé phải nói tiếng Anh “It's a…” trước video. Đúng được 1 sao; quên thì nghe video rồi nhắc lại.",
    "b": "Is it a ruler? Yes, it is."
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại 教室物品, mẹ tắt tiếng. Mỗi thẻ hiện ra, bé thử nói tiếng Trung trước; bật tiếng để kiểm tra. Mẹ cầm bút chì hỏi “这是什么？”, bé trả lời “这是铅笔” (zhè shì qiānbǐ).",
    "b": "这是铅笔。(zhè shì qiānbǐ)"
   },
   "words": {
    "en": [
     1,
     0,
     2,
     6
    ],
    "zh": [
     3,
     1,
     0
    ]
   },
   "doi": "Thí nghiệm dài – ngắn: bé xếp 6 cây bút (chì, sáp, mực) theo hàng từ ngắn đến dài. Đặt thước bên cạnh để so. Mẹ chỉ hỏi “Is this pencil long or short?” – bé trả lời “Long!” hoặc “Short!”. Đếm xem có mấy bút dài, mấy bút ngắn.",
   "ob": "Ông bà nhờ bé đưa cây bút dài nhất, cây ngắn nhất.",
   "toi": "Đọc một quyển trong bộ “Chuyện ly kỳ về hình khối, màu sắc, số đếm” (NXB Trẻ). Đọc xong bé tìm trong phòng một đồ vật có hình tròn và một đồ vật hình vuông."
  },
  {
   "chuyen": "Bút sáp vẽ được gì?",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác: xem lại When You Love a Book. Mỗi khi trong truyện đọc sách, bé làm theo: open the book, turn the page (lật trang), hug the book (ôm sách). Mẹ dừng hỏi Yes/No: “Do you love books?” – bé trả lời “Yes, I do!”.",
    "b": "Do you love books? Yes, I do!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại 书包里有什么？. Mẹ dừng và hỏi câu Yes/No “书包里有书吗？” (shūbāo lǐ yǒu shū ma – trong cặp có sách không?), bé trả lời “有！” (yǒu – có) hoặc “没有” (méiyǒu – không có).",
    "b": "书包里有书吗？(shūbāo lǐ yǒu shū ma?)"
   },
   "words": {
    "en": [
     2,
     7,
     8,
     3
    ],
    "zh": [
     0,
     2,
     6,
     7
    ]
   },
   "doi": "Thí nghiệm in vân lá: đặt một chiếc lá dưới tờ giấy mỏng, bé dùng bút sáp tô nghiêng lên trên cho vân lá hiện ra. Thử 3 màu sáp. Mẹ hỏi “What colour is this crayon?” – bé nói màu bằng tiếng Anh hoặc tiếng Việt, rồi nói “I can draw!”.",
   "ob": "Ông bà cùng bé tô sáp lên lá, hỏi bé màu gì.",
   "toi": "Câu đố “bàn tay”: mẹ đọc 2 lần, bé đoán. Bé xòe tay đếm năm ngón, rồi dùng bàn tay đó cầm bút vẽ một hình bé thích.",
   "lyr": "Câu đố bàn tay"
  },
  {
   "chuyen": "Xếp cặp cho ngày mai",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước cả bài: mở What's this?, mẹ tắt tiếng toàn bộ, bé nói tên từng đồ. Sau đó bé cầm 3 đồ thật và nói câu: “I have a pencil. I have a book. I have a bag.”",
    "b": "I have a pencil."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: xem 教室物品 lần cuối của tuần. Vừa xem, bé vừa bỏ đồ thật vào cặp, nói tiếng Trung tên từng món trước khi video nói.",
    "b": "放进书包。(fàng jìn shūbāo)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     4,
     5
    ],
    "zh": [
     0,
     2,
     3,
     4,
     5
    ]
   },
   "doi": "Chuẩn bị làm sách nhỏ cho Thứ Bảy: mẹ gấp 2 tờ A4 thành quyển 8 trang và dập ghim. Bé chọn 6 từ của tuần muốn vẽ (pen, pencil, crayon, book, bag, scissors). Tập cắt đường thẳng trên giấy bằng kéo nhựa đầu tròn; mẹ ngồi cạnh, cất kéo khi xong.",
   "ob": "Ông bà ngồi cạnh khi bé tập cắt giấy bằng kéo nhựa.",
   "toi": "Bé kể lại “Ba lưỡi rìu”: mẹ cắt sẵn 3 chiếc rìu giấy (vàng, bạc, xám). Mẹ đóng ông tiên, giơ từng chiếc hỏi “Đây có phải rìu của con không?”, bé trả lời thật thà như chàng tiều phu."
  },
  {
   "chuyen": "Thử thách lớn: sách nhỏ của bé",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng hình = 1 sao, nói được từ = 1 sao, nói câu “It's a…” = 2 sao. Xong, bé chọn video thích nhất tuần (What's this? hoặc When You Love a Book) để xem lại.",
    "b": "Super! You are a star!"
   },
   "zh": {
    "v": 1,
    "t": "Bé xem lại truyện 书包里有什么？, dừng ở cuối và tự kể những gì có trong cặp bằng tiếng Trung."
   },
   "special": "Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần",
   "doi": "Làm sách nhỏ của bé: mỗi trang một từ. Bé vẽ hoặc dán tranh cắt từ tờ quảng cáo (bút, sách, cặp, thước, kéo, bút sáp); mẹ viết chữ tiếng Anh và tiếng Trung bên dưới. Trang bìa ghi “My Book – 我的书” và tên bé. Xong, bé “đọc” sách cho cả nhà: “This is a pen. 这是笔.”",
   "ob": "Ông bà nghe bé đọc quyển sách nhỏ tự làm.",
   "toi": "Đặt quyển sách nhỏ cạnh gối. Mẹ đố lại câu đố cái ghế và câu đố bàn tay, bé trả lời thật nhanh.",
   "lyr": "Câu đố bàn tay"
  },
  {
   "chuyen": "Ôn tuần 1: đi nhà sách",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn xem lại một video yêu thích, rồi cầm quyển sách nhỏ chỉ từng trang nói từ tiếng Anh.",
    "b": "Let's buy a notebook."
   },
   "zh": {
    "v": 0,
    "t": "Ôn: xem lại 教室物品, bé chỉ vào sách nhỏ của mình khi nghe đúng từ."
   },
   "doi": "Cả nhà đi nhà sách hoặc cửa hàng văn phòng phẩm, nắm tay bé khi qua đường. Bé tìm và chỉ: pencil, crayon, ruler, bag; mẹ hỏi “Where is the bag?”. Bé được chọn mua 1 quyển vở hoặc hộp bút sáp và nói “Thank you!” với cô bán hàng.",
   "ob": "Ông bà dắt bé đi nhà sách, nhờ bé chỉ bút chì, bút sáp.",
   "toi": "Mẹ kể bé nghe hồi nhỏ mẹ có cặp sách màu gì, hộp bút thế nào. Bé kể lại hôm nay con chọn mua gì và vì sao."
  },
  {
   "chuyen": "Ai dọn nhanh hơn?",
   "en": {
    "v": 2,
    "t": "Lần 1 – làm động tác: bài Clean Up Song. Cả nhà hát theo và nhặt đồ chơi bỏ vào rổ. Hết bài, mẹ bấm đồng hồ 1 phút: ai dọn được nhiều bút vào hộp hơn? Bé vừa bỏ vừa đếm bằng tiếng Anh.",
    "b": "Clean up, everybody!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: bài 颜色歌 (bài hát màu sắc). Mỗi màu vang lên, bé giơ đúng cây bút sáp màu đó. Bắt đầu với 红色 (hóngsè – màu đỏ).",
    "b": "红色在哪儿？(hóngsè zài nǎr?)"
   },
   "words": {
    "en": [
     9,
     2,
     0,
     1
    ],
    "zh": [
     7,
     1
    ]
   },
   "doi": "Đua dọn bàn: bày 8 đồ dùng học tập trên bàn. Mẹ hô “Ready, go!”, bé dọn vào cặp trong lúc mẹ đếm 1 đến 20. Mỗi đồ bỏ vào bé phải nói tên (tiếng Anh hoặc tiếng Trung) mới được tính. Ghi số đồ lên bảng sao, ngày mai thử phá kỷ lục.",
   "ob": "Ông bà đếm to cho bé thi dọn bàn.",
   "toi": "Kể truyện “Sự tích cây thì là” bằng lời của mẹ: Trời đặt tên cho từng loài cây, cây nhỏ đến muộn nghe Trời ấp úng “thì… là…” liền tưởng đó là tên mình và vui vẻ khoe với các bạn. Hỏi bé: “Nếu được đặt tên cho cái cặp của con, con đặt tên gì?”."
  },
  {
   "chuyen": "Con nhìn thấy màu gì?",
   "en": {
    "v": 3,
    "t": "Lần 1: trò I See Something Blue. Khi bài hát hỏi màu, mẹ bấm dừng; bé chạy tìm trong phòng một đồ màu đó (bút, sách, vở) mang lại trước khi video trả lời. Mang đúng được 1 sao.",
    "b": "I see something blue!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 truyện 书包里有什么？ – thử thách: mẹ dừng trước khi lấy đồ ra, bé nói trước bằng tiếng Trung “这是…”. Nói trước được 1 sao.",
    "b": "这是本子。(zhè shì běnzi)"
   },
   "words": {
    "en": [
     2,
     3,
     0,
     7
    ],
    "zh": [
     0,
     5,
     1,
     3
    ]
   },
   "doi": "Đố vui 5 câu, mỗi câu 1 sao: (1) “What's this?” – mẹ giơ thước; (2) “这是什么？” – mẹ giơ quyển sách; (3) “Is it red?” – mẹ giơ bút sáp; (4) bé lấy 3 bút chì; (5) bé nói “I can draw.” Bé tự dán sao vào bảng.",
   "ob": "Ông bà hỏi bé 5 câu đố, mỗi câu đúng khen một câu.",
   "toi": "Ca dao “Ngó lên nuộc lạt mái nhà”: mẹ đọc 2 lần, giải thích bằng lời giản dị: nhà có bao nhiêu sợi lạt buộc mái thì mình nhớ ông bà bấy nhiêu. Hỏi bé: “Thứ Bảy gọi ông bà, con muốn khoe gì?”.",
   "lyr": "Ngó lên nuộc lạt mái nhà"
  },
  {
   "chuyen": "Hát trước, dừng là đứng im",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé hát trước: mở Clean Up Song, mẹ tắt tiếng ở điệp khúc để bé tự hát “Clean up, clean up”. Mẹ bật – tắt nhạc bất chợt: nhạc tắt thì bé đứng im như tượng, nhạc bật thì dọn tiếp.",
    "b": "Freeze! Now clean up!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại 颜色歌. Sau video chơi chuyển ngữ: mẹ nói tiếng Anh “red”, bé nói tiếng Trung “红色”. Mẹ giơ bút đỏ nói “这是红色的笔” (zhè shì hóngsè de bǐ – đây là bút màu đỏ), bé nhắc lại.",
    "b": "这是红色的笔。(zhè shì hóngsè de bǐ)"
   },
   "words": {
    "en": [
     9,
     2,
     7
    ],
    "zh": [
     7,
     1,
     3
    ]
   },
   "doi": "Đoán đồ sau lưng: mẹ giấu một đồ dùng học tập sau lưng, gợi ý 2 điều bằng tiếng Việt kèm một từ tiếng Anh (“Nó dài, nó dùng để kẻ – long”). Bé đoán bằng tiếng Anh được 1 sao, đoán thêm tiếng Trung được 2 sao. Đổi vai cho bé giấu và gợi ý.",
   "ob": "Ông bà giấu đồ sau lưng cho bé đoán.",
   "toi": "Đọc truyện tranh “Bồ nông có hiếu” (Phong Thu, NXB Kim Đồng). Hỏi bé: “Bồ nông con thương mẹ thế nào? Con thương ông bà thế nào?”."
  },
  {
   "chuyen": "Nghe Anh – đưa đồ – nói Trung",
   "en": {
    "v": 3,
    "t": "Lần 2 – bé dẫn trò: xem lại I See Something Blue. Sau video, bé làm người đố: bé nói “I see something red!” (mẹ nhắc nếu cần), mẹ phải tìm. Đổi lượt 3 lần, mỗi lần một màu khác.",
    "b": "I see something red. What is it?"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 教室物品 với nhiệm vụ mới: mẹ nói tiếng Anh, bé nói tiếng Trung. “Bag” → “书包”, “book” → “书”, “pencil” → “铅笔”. Bật video kiểm tra từng từ.",
    "b": "Bag – 书包 (shūbāo)!"
   },
   "words": {
    "en": [
     4,
     3,
     1,
     2
    ],
    "zh": [
     2,
     0,
     3
    ]
   },
   "doi": "Trò người giúp việc nhí: mẹ nói câu tiếng Anh “Give me the pencil, please.” – bé đưa đúng bút chì và nói tên tiếng Trung “铅笔”. Tiếp với book, bag, crayon, paper. Lượt cuối đổi chiều: mẹ nói tiếng Trung “给我书”, bé đưa sách và nói “book”.",
   "ob": "Ông bà nhờ bé đưa đồ, bé nói tên đồ cho ông bà nghe.",
   "toi": "Bé kể lại “Sự tích cây thì là”, rồi chơi đặt tên: bé đặt một cái tên vui cho 3 đồ vật trong phòng, mẹ đoán xem đó là đồ gì."
  },
  {
   "chuyen": "Tập 3 câu để khoe ông bà",
   "en": {
    "v": 0,
    "t": "Thử thách ai nhanh hơn: xem lại What's this?, mẹ và bé thi xem ai nói tên đồ trước video. Mẹ cố tình chậm để bé thắng nhiều hơn. Cuối cùng bé nói câu dài: “This is my bag. I have a red crayon.”",
    "b": "Who is faster? You are!"
   },
   "zh": {
    "v": 1,
    "t": "Xem lại 书包里有什么？ để tập câu khoe: bé nói “我的书包很大” (wǒ de shūbāo hěn dà – cặp của con rất to) và “我会画画” (wǒ huì huà huà – con biết vẽ).",
    "b": "我会画画。(wǒ huì huà huà)"
   },
   "words": {
    "en": [
     4,
     2,
     8
    ],
    "zh": [
     2,
     6,
     0
    ]
   },
   "doi": "Tập gọi điện bằng điện thoại đồ chơi: bé tập 3 câu tiếng Anh (“This is my bag.”, “I can draw.”, “I like my book.”) và 3 câu tiếng Trung (“这是我的书包”, “我会画画”, “谢谢”). Mẹ làm ông, rồi làm bà, hỏi lại bằng tiếng Việt cho bé trả lời. Chọn sẵn quyển sách nhỏ để khoe.",
   "ob": "Ông bà giả vờ nghe điện thoại đồ chơi, khen bé nói hay.",
   "toi": "Câu đố “mái tóc”: mẹ đọc 2 lần, bé đoán. Bé chải tóc cho búp bê và nói “Con sẽ chải tóc gọn để gọi ông bà”.",
   "lyr": "Câu đố mái tóc"
  },
  {
   "chuyen": "Thử thách lớn: gọi video ông bà",
   "en": {
    "v": 3,
    "t": "Thử thách lớn: mẹ chấm sao – nói được 1 câu = 1 sao, nói đủ 3 câu tiếng Anh = thêm 2 sao, trả lời được câu ông bà hỏi = thêm 1 sao. Sau đó bé chọn xem lại video thích nhất tuần (Clean Up Song hoặc I See Something Blue).",
    "b": "You can do it!"
   },
   "zh": {
    "v": 2,
    "t": "Bé xem lại 颜色歌 rồi giơ bút đỏ qua màn hình nói với ông bà “这是红色的笔”."
   },
   "special": "Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung",
   "doi": "Gọi video ông bà 10 phút. Bé khoe quyển sách nhỏ: chỉ từng trang nói “This is a pencil. 这是铅笔.” Nói 3 câu tiếng Anh và 3 câu tiếng Trung đã tập. Mẹ nhắn ông bà trước: hỏi bé bằng tiếng Việt “Cái này là gì?” để bé trả lời bằng tiếng Anh hoặc tiếng Trung. Kết thúc bé nói “Bye-bye! 再见！” (zàijiàn).",
   "ob": "Ông bà hỏi bé “Cái này là gì?” và khen bé sau mỗi câu.",
   "toi": "Bé kể ông bà đã khen con điều gì. Mẹ đọc lại ca dao Ngó lên nuộc lạt mái nhà, bé đọc theo câu đầu.",
   "lyr": "Ngó lên nuộc lạt mái nhà"
  },
  {
   "chuyen": "Ôn nhẹ: cặp sách của bé",
   "en": {
    "v": 2,
    "t": "Ôn nhẹ, không học từ mới: hát Clean Up Song một lần khi dọn đồ chơi buổi tối.",
    "b": "Good job! All clean!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại 教室物品 một lần, bé chỉ vào đồ thật khi nghe tên."
   },
   "doi": "Bé tự xếp cặp cho tuần mới, vừa xếp vừa nói tên từng món (tiếng nào cũng được). Mẹ chỉ quan sát và khen. Kiểm tra cùng bé: bút chì đã gọt chưa (mẹ gọt), có quyển vở chưa.",
   "ob": "Ông bà xem bé tự xếp cặp và khen bé gọn gàng.",
   "toi": "Đọc lại quyển sách nhỏ bé tự làm, bé lật trang. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[123] = {
 "sub": "Vui, buồn, giận, sợ",
 "vocab": {
  "en": [
   [
    "happy",
    "😊",
    "vui",
    false
   ],
   [
    "sad",
    "😢",
    "buồn",
    false
   ],
   [
    "angry",
    "😠",
    "tức giận",
    false
   ],
   [
    "scared",
    "😨",
    "sợ",
    false
   ],
   [
    "tired",
    "😴",
    "mệt",
    false
   ],
   [
    "calm",
    "😌",
    "bình tĩnh",
    false
   ],
   [
    "clap",
    "👏",
    "vỗ tay",
    true
   ],
   [
    "stomp",
    "🦶",
    "dậm chân",
    true
   ],
   [
    "roar",
    "🦁",
    "gầm",
    true
   ],
   [
    "breathe",
    "🌬️",
    "hít thở",
    true
   ]
  ],
  "zh": [
   [
    "高兴",
    "gāoxìng",
    "vui",
    "😊"
   ],
   [
    "难过",
    "nánguò",
    "buồn",
    "😢"
   ],
   [
    "生气",
    "shēngqì",
    "tức giận",
    "😠"
   ],
   [
    "害怕",
    "hàipà",
    "sợ",
    "😨"
   ],
   [
    "累",
    "lèi",
    "mệt",
    "😴"
   ],
   [
    "拍手",
    "pāishǒu",
    "vỗ tay",
    "👏"
   ],
   [
    "哭",
    "kū",
    "khóc",
    "😭"
   ]
  ],
  "en_phr": [
   [
    "I am happy.",
    "happy",
    "😊"
   ],
   [
    "Are you sad? No, I'm not.",
    "sad",
    "😢"
   ],
   [
    "I feel angry. Take a deep breath.",
    "angry",
    "😠"
   ],
   [
    "I am scared of the dark.",
    "scared",
    "😨"
   ]
  ],
  "zh_phr": [
   [
    "我很高兴。",
    "高兴",
    "wǒ hěn gāoxìng",
    "con rất vui",
    "😊"
   ],
   [
    "你生气了吗？",
    "生气",
    "nǐ shēngqì le ma?",
    "con giận à?",
    "😠"
   ],
   [
    "我不害怕。",
    "害怕",
    "wǒ bú hàipà",
    "con không sợ",
    "💪"
   ]
  ],
  "seq": [
   [
    "😠",
    "feel angry",
    "生气"
   ],
   [
    "🌬️",
    "take a deep breath",
    "深呼吸"
   ],
   [
    "🖐️",
    "count to four",
    "数到四"
   ],
   [
    "😌",
    "feel calm",
    "我好了"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "If You're Happy and You Know It",
    "u": "https://www.youtube.com/watch?v=l4WNrvVjiTw",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Play with Caitie"
   },
   {
    "t": "Daniel Tiger - \"When You Feel So Mad You Want to Roar\" SONG",
    "u": "https://www.youtube.com/watch?v=OrbN-nSTe-E",
    "kind": "song_action",
    "min": 1.4,
    "ch": "Daniel Tiger's Neighbourhood - Scholastic"
   },
   {
    "t": "The Color Monster | Animated Book | Read Aloud",
    "u": "https://www.youtube.com/watch?v=wF1xeL2Hv00",
    "kind": "story",
    "min": 5,
    "ch": "Silly English Corner"
   },
   {
    "t": "The Colour Monster Goes to School | Read aloud – nếu dài, xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=fusMvn_rCP8",
    "kind": "story",
    "min": 6,
    "ch": "Love2Read with Miss Ellis"
   }
  ],
  "zh": [
   {
    "t": "Simple Chinese Songs for Kids – Facial Expressions 表情 (nét mặt, cảm xúc)",
    "u": "https://www.youtube.com/watch?v=G6NAVJBcV9I",
    "kind": "song_action",
    "min": 1,
    "ch": "Cool Panda Chinese Learning"
   },
   {
    "t": "If you're happy and you know it – Mandarin Chinese Nursery Rhyme – MandaRhymes 如果你高興",
    "u": "https://www.youtube.com/watch?v=Z4Ody_didtw",
    "kind": "song_action",
    "min": 0.4,
    "ch": "Crossed Strings Music"
   },
   {
    "t": "Tìm tập 最好的朋友 (Best Friend) trên kênh 小猪佩奇 中文官方 – xem 1 tập khoảng 5 phút",
    "u": "https://www.youtube.com/channel/UCRi0sw4PDw-C2C7fS9hrx5Q",
    "kind": "story",
    "min": 5,
    "ch": "小猪佩奇 中文官方 Peppa Pig (Mandarin official)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: hát theo cảm xúc",
   "toi_vi": [
    {
     "t": "Lúa ngô là cô đậu nành",
     "type": "dong_dao",
     "lyr": "Lúa ngô là cô đậu nành\nĐậu nành là anh dưa chuột\nDưa chuột là ruột dưa gang\nDưa gang là nàng dưa hấu\nDưa hấu là cậu lúa ngô\nLúa ngô là cô đậu nành"
    },
    {
     "t": "Anh em như thể tay chân",
     "type": "ca_dao",
     "lyr": "Anh em như thể tay chân\nRách lành đùm bọc, dở hay đỡ đần"
    }
   ],
   "book_vi": {
    "t": "Một cái ôm thật to (thơ)",
    "author": "Hoàng Ngọc Diệp",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Kể chuyện: Quái vật màu sắc và những người bạn",
   "toi_vi": [
    {
     "t": "Ba bà đi bán lợn con",
     "type": "dong_dao",
     "lyr": "Ba bà đi bán lợn con\nBán đi chẳng được lon xon chạy về\nBa bà đi bán lợn sề\nBán đi chẳng được chạy về lon xon"
    },
    {
     "t": "Câu đố quả mít",
     "type": "cau_do",
     "lyr": "Da cóc mà bọc trứng gà\nBổ ra thơm phức cả nhà muốn ăn\nLà quả gì?"
    }
   ],
   "book_vi": {
    "t": "Vương miện của Mặt trời",
    "author": "Quỳnh Lê (minh họa: Hoàng Giang)",
    "publisher": "NXB Hà Nội & Crabit Kidbooks"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Gọi tên được 4 cảm xúc happy, sad, angry, scared khi nhìn mặt"
  ],
  [
   "en",
   "Nói được câu “I am happy.” / “I feel sad.” về chính mình"
  ],
  [
   "zh",
   "Nói được 高兴, 难过, 生气, 害怕 khi mẹ làm mặt"
  ],
  [
   "vi",
   "Kể được một lần con thấy buồn hoặc sợ và vì sao"
  ],
  [
   "td",
   "Ghép màu với cảm xúc như trong truyện Quái vật màu sắc"
  ],
  [
   "xh",
   "Tự hít thở và đếm đến 4 khi đang giận (có mẹ nhắc)"
  ],
  [
   "vd",
   "Vỗ tay, dậm chân đúng nhịp theo bài If You're Happy"
  ]
 ],
 "days": [
  {
   "chuyen": "Vui thì vỗ tay",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – xem và làm theo: bài If You're Happy and You Know It. Nghe clap thì vỗ tay, stomp thì dậm chân, shout hooray thì giơ tay reo. Hết bài mẹ hỏi “Are you happy?” – bé cười to “Yes!”.",
    "b": "If you're happy, clap your hands!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài 表情 (nét mặt). Mẹ và bé ngồi trước gương. Bài hát nói cảm xúc nào, cả hai làm mặt đó: 高兴 (gāoxìng) cười, 难过 (nánguò) mếu, 生气 (shēngqì) nhăn mày.",
    "b": "高兴！(gāoxìng!)"
   },
   "words": {
    "en": [
     0,
     6,
     7
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Làm bảng cảm xúc: vẽ 4 khuôn mặt lên 4 đĩa giấy (vui, buồn, giận, sợ). Bé tô màu, mẹ viết chữ tiếng Anh và tiếng Trung phía sau. Mẹ giơ từng đĩa, bé làm mặt giống hệt rồi nói tên tiếng Anh. Treo bảng lên tường để dùng cả vòng.",
   "ob": "Ông bà giơ đĩa mặt cười, mặt mếu để bé bắt chước.",
   "toi": "Kể truyện “Chú Dê Đen” bằng lời của mẹ, giọng nhẹ nhàng: Dê Trắng gặp Sói thì run sợ bỏ chạy; Dê Đen gặp Sói thì đứng thẳng, trả lời thật to, nên Sói tự bỏ đi. Hỏi bé: “Khi sợ, con làm gì cho mình can đảm?”."
  },
  {
   "chuyen": "Giận quá muốn gầm lên",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm theo: bài When You Feel So Mad You Want to Roar (Daniel Tiger). Lúc Daniel gầm, cả hai cùng gầm thật to; lúc Daniel hít thở và đếm, bé giơ từng ngón tay đếm one, two, three, four.",
    "b": "Take a deep breath and count to four."
   },
   "zh": {
    "v": 1,
    "t": "Bài 如果你高兴 rất ngắn: mở 3 lần liền, mỗi lần thêm một động tác: lần 1 拍手 (vỗ tay), lần 2 dậm chân, lần 3 nhảy lên. Mẹ nói “我很高兴” (wǒ hěn gāoxìng – mẹ rất vui) sau mỗi lần.",
    "b": "我很高兴！(wǒ hěn gāoxìng!)"
   },
   "words": {
    "en": [
     2,
     8,
     9,
     5
    ],
    "zh": [
     0,
     5
    ]
   },
   "doi": "Làm nhiệt kế cảm xúc: kẹp một chiếc kẹp quần áo to lên đĩa mặt đúng với cảm xúc của bé lúc này, bé nói “I feel…”. Mẹ hỏi bằng tiếng Việt: “Hôm nay có lúc nào con giận không? Lúc đó con làm gì?”. Cùng tập: gầm một tiếng, rồi hít sâu và đếm 4 ngón tay.",
   "ob": "Ông bà hỏi bé “Bây giờ con thấy vui hay buồn?” và chỉ lên đĩa mặt.",
   "toi": "Đồng dao “Lúa ngô là cô đậu nành”: mẹ đọc chậm 2 lần, bé thích thú vì các tên nối vào nhau như vòng tròn. Lần 2 mẹ đọc nửa câu, bé đọc tiếp tên tiếp theo.",
   "lyr": "Lúa ngô là cô đậu nành"
  },
  {
   "chuyen": "Đổi cảm xúc trong bài hát",
   "en": {
    "v": 0,
    "t": "Lần 2 – đổi lời: xem lại If You're Happy. Sau video mẹ hát cùng giai điệu nhưng đổi cảm xúc: “If you're sad and you know it, cry boo-hoo”, “If you're angry and you know it, stomp your feet”. Bé làm mặt và động tác đúng với từng câu.",
    "b": "If you're sad, cry boo-hoo."
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại 表情, mẹ tắt tiếng. Mẹ làm một khuôn mặt, bé đoán và nói trước bằng tiếng Trung: 高兴? 难过? 生气? Bật tiếng để nghe lại.",
    "b": "你生气了吗？(nǐ shēngqì le ma?)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     7
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Trò đoán mặt: mẹ làm một khuôn mặt (vui, buồn, giận, sợ, mệt), bé đoán bằng tiếng Anh; đoán thêm tiếng Trung được 2 sao. Đổi vai: bé làm mặt, mẹ đoán, mẹ thỉnh thoảng đoán sai để bé sửa “No! I'm scared!”.",
   "ob": "Ông bà làm mặt buồn, mặt vui cho bé đoán.",
   "toi": "Đọc vài bài trong tập thơ “Một cái ôm thật to” (Hoàng Ngọc Diệp, NXB Kim Đồng). Đọc xong mẹ ôm bé thật chặt và hỏi: “Ôm nhau làm con thấy thế nào?”."
  },
  {
   "chuyen": "Góc bình tĩnh của bé",
   "en": {
    "v": 1,
    "t": "Lần 2 – tập theo: xem lại bài Daniel Tiger. Lần này mẹ dừng ngay sau tiếng gầm, cả hai đặt tay lên bụng, hít vào thật sâu, thở ra thật chậm, đếm 1–4. Mẹ hỏi Yes/No: “Are you calm now?” – bé trả lời “Yes!”.",
    "b": "Are you calm now?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: bé hát trước cùng giai điệu 如果你高兴 và tự nghĩ động tác, mẹ làm theo bé. Xem lại video để so xem bé có giống bài hát không.",
    "b": "我们拍拍手！(wǒmen pāipai shǒu!)"
   },
   "words": {
    "en": [
     5,
     9,
     2
    ],
    "zh": [
     0,
     5
    ]
   },
   "doi": "Dựng góc bình tĩnh: một chiếc gối, một gấu bông, tờ giấy vẽ bàn tay 4 ngón. Mẹ và bé thỏa thuận: khi giận, con ra góc này, ôm gấu, hít thở và đếm 4. Tập thử 2 lần: mẹ giả vờ giận, bé dẫn mẹ ra góc và đếm bằng tiếng Anh.",
   "ob": "Ông bà nhắc bé ra góc bình tĩnh, ôm gấu và đếm đến 4.",
   "toi": "Ca dao “Anh em như thể tay chân”: mẹ đọc 2 lần, nói ý: anh chị em, bạn bè thương nhau như tay với chân, lúc vui lúc buồn đều giúp nhau. Hỏi bé: “Khi bạn buồn, con làm gì giúp bạn?”.",
   "lyr": "Anh em như thể tay chân"
  },
  {
   "chuyen": "Bé làm người chỉ huy",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước: mở If You're Happy, tắt tiếng. Bé hát hoặc nói lệnh trước: “Clap your hands!”, “Stomp your feet!”, mẹ làm theo bé. Cuối cùng bé nói một câu về mình: “I am happy.”",
    "b": "I am happy. Are you happy?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: xem 表情, bé nói tên cảm xúc trước video. Sau đó mẹ hỏi “你高兴吗？” (nǐ gāoxìng ma – con vui không?), bé trả lời “我很高兴！”.",
    "b": "你高兴吗？(nǐ gāoxìng ma?)"
   },
   "words": {
    "en": [
     0,
     6,
     7,
     4
    ],
    "zh": [
     0,
     1,
     4
    ]
   },
   "doi": "Đố cảm xúc bằng tình huống: mẹ kể bằng tiếng Việt 4 tình huống ngắn (được quà, làm rơi kem, bị giành đồ chơi, nghe sấm to). Bé giơ đúng đĩa mặt và nói tiếng Anh. Rửa sạch hoa quả cho buổi vào bếp ngày mai, bé đếm từng quả.",
   "ob": "Ông bà kể chuyện ngắn, hỏi bé “Lúc đó con thấy thế nào?”.",
   "toi": "Bé kể lại truyện “Chú Dê Đen”: bé làm Dê Đen (hai tay làm sừng), mẹ làm Sói. Bé tập nói thật to, đứng thẳng. Mẹ khen: “Con dũng cảm lắm!”."
  },
  {
   "chuyen": "Thử thách lớn: bánh mì mặt cười",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng mặt = 1 sao, nói tên cảm xúc = 1 sao, nói câu “I am…” = 2 sao. Xong, bé chọn bài yêu thích của tuần (If You're Happy hoặc bài Daniel Tiger) để hát lại.",
    "b": "Well done! I'm so happy!"
   },
   "zh": {
    "v": 0,
    "t": "Bé chọn xem lại bài 表情 hoặc 如果你高兴, rồi làm mặt cho món bánh của mình."
   },
   "special": "Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu",
   "doi": "Vào bếp làm bánh mì mặt cảm xúc: mẹ thái sẵn chuối, dưa chuột, dâu (bé không dùng dao, không đứng gần bếp). Bé phết sữa chua lên lát bánh mì bằng thìa, xếp mắt và miệng: miệng cong lên là happy, cong xuống là sad. Gọi tên nguyên liệu: bread – 面包 (miànbāo), banana – 香蕉 (xiāngjiāo). Mẹ hỏi “Is it happy or sad?”, bé trả lời rồi cả nhà cùng ăn.",
   "ob": "Ông bà cùng bé xếp mặt cười trên bánh và gọi tên các món.",
   "toi": "Kể lại buổi vào bếp: bé làm mấy cái bánh, cái nào vui, cái nào buồn. Mẹ đọc lại đồng dao Lúa ngô là cô đậu nành cho bé ngủ.",
   "lyr": "Lúa ngô là cô đậu nành"
  },
  {
   "chuyen": "Ôn tuần 1: ở công viên",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn một bài trong tuần, xem 1 lần; mẹ để bé tự làm động tác và tự đếm.",
    "b": "How do you feel?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: xem lại 表情, bé làm mặt trước khi bài hát nói."
   },
   "doi": "Cả nhà đi công viên, nắm tay khi qua đường. Sau mỗi trò chơi (cầu trượt, xích đu), mẹ hỏi “How do you feel?” – bé trả lời “I'm happy!” hoặc “I'm tired!”. Bé quan sát một bạn nhỏ khác và đoán: “Bạn ấy happy hay sad?”.",
   "ob": "Ông bà dẫn bé đi chơi, hỏi “Con thấy vui không?” sau mỗi trò.",
   "toi": "Mẹ kể một lần mẹ thấy sợ hồi bé và mẹ đã làm gì. Bé kể một lần bé thấy sợ. Ôm nhau, cùng hít thở đếm 4 rồi ngủ."
  },
  {
   "chuyen": "Mỗi cảm xúc một màu",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và chỉ: truyện The Color Monster. Mẹ dừng ở mỗi màu, chỉ và nói: “Yellow is happy. Blue is sad. Red is angry. Black is scared.” Bé chỉ lên màn hình. Giữa truyện dừng hỏi: “Chuyện gì xảy ra tiếp?”.",
    "b": "Yellow is happy."
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: tập Peppa 最好的朋友. Mẹ dừng khi Peppa và bạn Suzy giận nhau, hỏi bằng tiếng Việt: “Peppa đang thấy thế nào?”, rồi nói từ “生气” (shēngqì). Dừng lần nữa khi hai bạn làm lành và nói “高兴”.",
    "b": "Peppa 生气了。(Peppa shēngqì le)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5
    ],
    "zh": [
     2,
     0
    ]
   },
   "doi": "Lọ cảm xúc: đặt 4 chiếc cốc dán giấy 4 màu (vàng, xanh dương, đỏ, đen). Cắt sẵn 12 mảnh giấy màu to bằng bàn tay. Bé phân loại mảnh giấy vào đúng cốc, mỗi mảnh nói một câu: “Yellow – happy!”. Đếm xem cốc nào nhiều nhất.",
   "ob": "Ông bà cùng bé xếp giấy màu vào cốc, hỏi “Màu vàng là vui hay buồn?”.",
   "toi": "Kể truyện “Tích Chu” bằng lời của mẹ: Tích Chu mải chơi, không để ý đến bà; bà ốm khát nước mà không ai mang cho. Tích Chu hối hận, đi thật xa lấy nước suối tiên mang về, và bà lại về với cháu. Hỏi bé: “Tích Chu thấy thế nào khi bà đi mất?”."
  },
  {
   "chuyen": "Quái vật đi học có sợ không?",
   "en": {
    "v": 3,
    "t": "Lần 1 – tập trung vào cảm xúc: truyện The Colour Monster Goes to School. Mẹ dừng ở 3 chỗ hỏi Yes/No: “Is he scared?”, “Is he happy?” – bé trả lời trước khi lật trang. Hết truyện hỏi: “Ngày đầu đi học con có sợ không?”.",
    "b": "Is he scared? Yes, he is."
   },
   "zh": {
    "v": 0,
    "t": "Bé làm cô giáo: mở bài 表情, mẹ tắt tiếng. Bé nói tên cảm xúc trước video, mỗi lần nói đúng mẹ vỗ tay 拍手 một cái.",
    "b": "他害怕吗？(tā hàipà ma?)"
   },
   "words": {
    "en": [
     3,
     0,
     1
    ],
    "zh": [
     3,
     0,
     1
    ]
   },
   "doi": "Kể chuyện cảm xúc của bé: bé chọn một mảnh giấy màu từ lọ cảm xúc và kể một lần con thấy như vậy (“Con thấy buồn khi…”). Mẹ ghi lại bằng tiếng Việt lên mảnh giấy, rồi giúp bé nói câu tiếng Anh: “I feel sad.” Làm 3 màu.",
   "ob": "Ông bà nghe bé kể một lần bé buồn, ôm bé và hỏi “Giờ con thấy thế nào?”.",
   "toi": "Đồng dao “Ba bà đi bán lợn con”: mẹ đọc vui, nhấn chữ “lon xon”; bé chạy lon xon tại chỗ mỗi khi nghe chữ đó. Mẹ hỏi: “Ba bà có buồn không khi không bán được?”.",
   "lyr": "Ba bà đi bán lợn con"
  },
  {
   "chuyen": "Đóng vai Quái vật màu sắc",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai: xem lại The Color Monster. Bé làm Quái vật: mẹ nói một màu, bé làm mặt và nói câu đầy đủ: “I am angry!”, “I am calm.” Mẹ dừng trước trang cuối hỏi: “What happens next?”.",
    "b": "What colour are you? I am yellow!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại tập Peppa. Mẹ hỏi câu Yes/No bằng tiếng Trung khi dừng: “Peppa 生气了吗？” (Peppa shēngqì le ma – Peppa giận không?), bé trả lời “生气了！” hoặc “不生气” (bù shēngqì – không giận).",
    "b": "Peppa 高兴吗？(Peppa gāoxìng ma?)"
   },
   "words": {
    "en": [
     0,
     2,
     5,
     3
    ],
    "zh": [
     2,
     0
    ]
   },
   "doi": "Múa rối tất: xỏ 2 chiếc tất cũ vào tay làm 2 nhân vật. Bé điều khiển rối kể một chuyện ngắn: một bạn vui, bạn kia buồn vì mất đồ chơi, rồi bạn vui an ủi. Mẹ chỉ hỏi “Bạn ấy thấy thế nào?”, bé trả lời bằng tiếng Anh hoặc tiếng Trung.",
   "ob": "Ông bà xem bé múa rối tất và hỏi “Bạn rối đang vui hay buồn?”.",
   "toi": "Đọc truyện tranh “Vương miện của Mặt trời” (Quỳnh Lê, NXB Hà Nội & Crabit Kidbooks). Dừng ở 2 trang hỏi bé: “Nhân vật đang thấy thế nào? Vì sao?”."
  },
  {
   "chuyen": "Nghe tiếng này, nói tiếng kia",
   "en": {
    "v": 3,
    "t": "Lần 2 – chuyển ngữ: trước khi xem, mẹ nói tiếng Anh “scared”, bé nói tiếng Trung “害怕”; “happy” → “高兴”; “sad” → “难过”. Rồi xem lại The Colour Monster Goes to School, bé giơ tay mỗi khi Quái vật đổi cảm xúc.",
    "b": "Scared – 害怕 (hàipà)!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ ngược lại: mẹ nói tiếng Trung “高兴”, bé nói “happy” và vỗ tay; “生气” → “angry” và dậm chân. Sau đó mở bài 如果你高兴 một lần để thưởng.",
    "b": "高兴 – happy!"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     2
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Gương thần: bé đứng trước gương. Mẹ gọi một cảm xúc bằng tiếng Anh, bé làm mặt trong gương rồi nói tên bằng tiếng Trung. Đổi chiều: mẹ gọi tiếng Trung, bé nói tiếng Anh. Mỗi lần đúng cả hai tiếng được một sao.",
   "ob": "Ông bà đứng cạnh gương cùng bé làm mặt vui, mặt buồn.",
   "toi": "Bé kể lại truyện “Tích Chu” với một cốc nước làm đồ diễn: bé làm Tích Chu mang nước cho bà (mẹ đóng bà). Mẹ hỏi: “Bà thấy thế nào khi uống nước con mang?”."
  },
  {
   "chuyen": "Bé kể lại chuyện Quái vật",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước: mở The Color Monster, tắt tiếng. Bé nhìn tranh kể bằng tiếng Việt, mỗi màu nói câu tiếng Anh trước video: “Blue is sad.” Bật tiếng đoạn cuối để nghe kết truyện.",
    "b": "Tell me the story, please."
   },
   "zh": {
    "v": 2,
    "t": "Lần 3: bé kể lại tập Peppa bằng tiếng Việt, chen các từ 朋友 (péngyou), 生气, 高兴. Xem lại đoạn cuối để kiểm tra.",
    "b": "她们是好朋友。(tāmen shì hǎo péngyou)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     5
    ],
    "zh": [
     0,
     2
    ]
   },
   "doi": "Vẽ dải tranh một ngày của bé: sáng, trưa, tối – mỗi ô vẽ một khuôn mặt cảm xúc. Bé kể: “In the morning I am tired. At school I am happy.” (mẹ giúp nửa đầu câu). Làm thêm danh sách đi chợ ngày mai bằng hình: 4 loại quả bé thích.",
   "ob": "Ông bà nghe bé kể cảm xúc buổi sáng, buổi tối của bé.",
   "toi": "Câu đố “quả mít”: mẹ đọc 2 lần, bé đoán. Ngày mai đi chợ, mình thử tìm xem có quả mít không.",
   "lyr": "Câu đố quả mít"
  },
  {
   "chuyen": "Thử thách lớn: đi chợ săn từ",
   "en": {
    "v": 2,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: trả lời Yes/No đúng = 1 sao, nói câu “I am…” = 2 sao, nói màu của cảm xúc = 2 sao. Sau đó bé chọn xem lại một truyện của tuần (The Color Monster hoặc The Colour Monster Goes to School).",
    "b": "Do you like this story? Yes, I do!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhanh: xem lại bài 表情 trước khi đi chợ."
   },
   "special": "Săn từ ở chợ hoặc siêu thị",
   "doi": "Đi chợ hoặc siêu thị cùng bé, luôn nắm tay ở chỗ đông. Nhiệm vụ: (1) tìm 3 loại quả bé thích và nói “I like mangoes.” hoặc “我喜欢香蕉” (wǒ xǐhuan xiāngjiāo); (2) tìm trên bao bì 2 hình mặt người và đoán “happy or sad?”; (3) tìm quả mít như câu đố hôm qua. Bé tự đưa tiền cho cô bán hàng và nói “Cảm ơn ạ – Thank you – 谢谢”.",
   "ob": "Ông bà dẫn bé đi chợ, nhờ bé chỉ quả con thích.",
   "toi": "Kể lại chuyến đi chợ: con mua gì, con thấy vui lúc nào. Mẹ đọc lại đồng dao Ba bà đi bán lợn con.",
   "lyr": "Ba bà đi bán lợn con"
  },
  {
   "chuyen": "Ôn nhẹ: bảng cảm xúc",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ, không học từ mới: hát If You're Happy cùng cả nhà, mỗi người chọn một động tác.",
    "b": "I love you! Good night!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem bài 表情 một lần, cả nhà làm mặt theo."
   },
   "doi": "Mẹ và bé nhìn lại bảng cảm xúc và lọ cảm xúc. Bé chỉ và nói tên tiếng Anh, tiếng Trung những cảm xúc còn nhớ. Mẹ hỏi: “Cả tuần, lúc nào con vui nhất?”. Chỉ khen, không sửa.",
   "ob": "Ông bà hỏi bé “Hôm nay con vui hay mệt?”.",
   "toi": "Mẹ đọc lại vài câu thơ trong “Một cái ôm thật to”, ôm bé chúc ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[124] = {
 "sub": "Chia sẻ, xin lỗi, cảm ơn",
 "vocab": {
  "en": [
   [
    "share",
    "🍪",
    "chia sẻ",
    true
   ],
   [
    "sorry",
    "🙇",
    "xin lỗi",
    false
   ],
   [
    "thank you",
    "🙏",
    "cảm ơn",
    false
   ],
   [
    "hug",
    "🤗",
    "ôm",
    true
   ],
   [
    "friend",
    "🧑‍🤝‍🧑",
    "bạn",
    false
   ],
   [
    "toy",
    "🧸",
    "đồ chơi",
    false
   ],
   [
    "wait",
    "⏳",
    "chờ",
    true
   ],
   [
    "please",
    "🙋",
    "làm ơn / xin",
    false
   ],
   [
    "take turns",
    "🔄",
    "lần lượt",
    true
   ],
   [
    "happy",
    "😊",
    "vui",
    false
   ]
  ],
  "zh": [
   [
    "谢谢",
    "xièxie",
    "cảm ơn",
    "🙏"
   ],
   [
    "对不起",
    "duìbuqǐ",
    "xin lỗi",
    "🙇"
   ],
   [
    "没关系",
    "méi guānxi",
    "không sao",
    "👌"
   ],
   [
    "朋友",
    "péngyou",
    "bạn",
    "🧑‍🤝‍🧑"
   ],
   [
    "给你",
    "gěi nǐ",
    "cho bạn",
    "🤲"
   ],
   [
    "一起",
    "yìqǐ",
    "cùng nhau",
    "🫂"
   ],
   [
    "玩具",
    "wánjù",
    "đồ chơi",
    "🧸"
   ],
   [
    "请",
    "qǐng",
    "mời / xin",
    "🙋"
   ]
  ],
  "en_phr": [
   [
    "Thank you, Mum!",
    "Thank you",
    "🙏"
   ],
   [
    "I'm sorry.",
    "sorry",
    "🙇"
   ],
   [
    "Let's share the toys.",
    "share",
    "🧸"
   ],
   [
    "Can I have a hug?",
    "hug",
    "🤗"
   ],
   [
    "Wait, please.",
    "Wait",
    "⏳"
   ]
  ],
  "zh_phr": [
   [
    "对不起！没关系。",
    "没关系",
    "duìbuqǐ! méi guānxi.",
    "xin lỗi! không sao đâu.",
    "👌"
   ],
   [
    "给你，谢谢！",
    "谢谢",
    "gěi nǐ, xièxie!",
    "cho bạn này, cảm ơn!",
    "🙏"
   ],
   [
    "我们一起玩。",
    "一起",
    "wǒmen yìqǐ wán",
    "chúng mình cùng chơi",
    "🫂"
   ]
  ],
  "seq": [
   [
    "🧸",
    "want the same toy",
    "都想要"
   ],
   [
    "⏳",
    "wait",
    "等一等"
   ],
   [
    "🔄",
    "take turns",
    "一个一个来"
   ],
   [
    "🙏",
    "say thank you",
    "说谢谢"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Sesame Street: Elmo and Chris Sing about Feelings",
    "u": "https://www.youtube.com/watch?v=m3CdFn5sN7w",
    "kind": "explainer",
    "min": 3,
    "ch": "Sesame Street"
   },
   {
    "t": "Daniel Tiger - Take a Deep Breath and Count to 4",
    "u": "https://www.youtube.com/watch?v=I8eAwKir5Kk",
    "kind": "song_action",
    "min": 1.35,
    "ch": "Daniel Tiger's Neighbourhood - Scholastic"
   },
   {
    "t": "Patience, Patches! - Read Aloud Picture Book – nếu dài, xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=PGBJhbhovYg",
    "kind": "story",
    "min": 6,
    "ch": "Brightly Storytime"
   },
   {
    "t": "The More We Get Together",
    "u": "https://www.youtube.com/watch?v=SpzLA-w1I8s",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "HELLO NIHAO – SORRY DUIBUQI – THANK YOU 你好 对不起 谢谢 儿歌",
    "u": "https://www.youtube.com/watch?v=R1M8WBuEEvQ",
    "kind": "song_action",
    "min": 2,
    "ch": "Shirley_lin168 Linxueli"
   },
   {
    "t": "宝贝中文儿歌 1 – 如果开心你就拍拍手 If You're Happy Clap Your Hands – chỉ xem đoạn đầu 5 phút (2 bài đầu)",
    "u": "https://www.youtube.com/watch?v=NiQFHr4QF2g",
    "kind": "song_action",
    "min": 10.1,
    "ch": "宝贝中文 Baobei Chinese"
   },
   {
    "t": "找朋友 Zhao Peng You — Finding a friend (tìm bạn)",
    "u": "https://www.youtube.com/watch?v=3AvTqNaDjqA",
    "kind": "song_action",
    "min": 2,
    "ch": "Nora Chen"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: cơ thể mình khi vui, khi giận",
   "toi_vi": [
    {
     "t": "Bầu ơi thương lấy bí cùng",
     "type": "ca_dao",
     "lyr": "Bầu ơi thương lấy bí cùng\nTuy rằng khác giống nhưng chung một giàn"
    },
    {
     "t": "Câu đố ngôi sao",
     "type": "cau_do",
     "lyr": "Lấp la lấp lánh\nTreo tít trời cao\nĐêm tối lung linh\nSáng ngày biến mất."
    }
   ],
   "book_vi": {
    "t": "Bé học yêu thương và chia sẻ (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  },
  {
   "title": "Tuần Thử thách: lời hay ý đẹp",
   "toi_vi": [
    {
     "t": "Thằng Bờm có cái quạt mo",
     "type": "dong_dao",
     "lyr": "Thằng Bờm có cái quạt mo\nPhú ông xin đổi ba bò chín trâu\nBờm rằng Bờm chẳng lấy trâu\nPhú ông xin đổi một xâu cá mè\nBờm rằng Bờm chẳng lấy mè\nPhú ông xin đổi một bè gỗ lim\nBờm rằng Bờm chẳng lấy lim\nPhú ông xin đổi con chim đồi mồi\nBờm rằng Bờm chẳng lấy mồi\nPhú ông xin đổi nắm xôi Bờm cười"
    },
    {
     "t": "Kỳ đà là cha cắc ké",
     "type": "dong_dao",
     "lyr": "Kỳ đà là cha cắc ké\nCắc ké là mẹ kỳ nhông\nKỳ nhông là ông kỳ đà\nKỳ đà là cha cắc ké"
    }
   ],
   "book_vi": {
    "t": "Chú sẻ con và bông hoa bằng lăng (phiên bản sách tranh)",
    "author": "Phạm Hổ",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Tự nói “Thank you”, “Sorry”, “Please” đúng lúc (không cần nhắc)"
  ],
  [
   "en",
   "Nói được câu “Let's share.” hoặc “Wait, please.” khi chơi"
  ],
  [
   "zh",
   "Nói được 谢谢, 对不起, 没关系 trong trò đóng vai"
  ],
  [
   "zh",
   "Nói được “我们一起玩” khi rủ bạn chơi"
  ],
  [
   "vi",
   "Kể lại truyện Bó đũa và nói được bài học"
  ],
  [
   "td",
   "Chia đều 10 miếng cho 2–3 người và đếm kiểm tra"
  ],
  [
   "xh",
   "Chờ đến lượt mình trong trò chơi 30 giây không giành"
  ],
  [
   "vd",
   "Hít thở chậm theo nhịp đếm 1–4"
  ]
 ],
 "days": [
  {
   "chuyen": "Tim đập nhanh hay chậm?",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – xem và chỉ: Elmo and Chris Sing about Feelings. Mỗi khi bài hát nhắc một cảm xúc, mẹ dừng, bé làm mặt theo Elmo. Hết bài mẹ hỏi “How do you feel today?”, giúp bé trả lời “I feel happy.”",
    "b": "How do you feel today?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài 你好 对不起 谢谢. Nghe 你好 thì vẫy tay, 对不起 (duìbuqǐ) thì cúi đầu, 谢谢 (xièxie) thì chắp hai tay. Bé chỉ cần làm đúng động tác.",
    "b": "谢谢！(xièxie!)"
   },
   "words": {
    "en": [
     9,
     4,
     2
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Thí nghiệm nhịp tim: bé đặt tay lên ngực khi đang ngồi yên: tim đập chậm. Rồi nhảy tại chỗ 20 cái (mẹ đếm tiếng Anh tới 20, chỗ rộng, không vật cứng xung quanh) và đặt tay lại: tim đập nhanh. Mẹ nói: “Khi con giận, tim cũng đập nhanh như vậy. Hít thở chậm thì tim chậm lại.” Cùng hít thở 4 lần để kiểm tra.",
   "ob": "Ông bà đếm cho bé nhảy rồi cùng bé đặt tay lên ngực nghe tim.",
   "toi": "Kể truyện “Cáo, Thỏ và Gà trống” bằng lời của mẹ, nhẹ nhàng: Cáo ở nhờ nhà Thỏ rồi không chịu ra; Chó và Gấu đến giúp nhưng ngại quá bỏ về; Gà trống gáy vang thật to, Cáo bỏ đi và Thỏ được về nhà. Hỏi bé: “Thỏ nói gì với Gà trống?” – “Cảm ơn!”."
  },
  {
   "chuyen": "Hít vào, thở ra, đếm bốn",
   "en": {
    "v": 1,
    "t": "Lần 1 – làm theo: bài Take a Deep Breath and Count to 4. Mẹ và bé đặt tay lên bụng: hít vào bụng phồng, thở ra bụng xẹp. Giơ ngón tay đếm one, two, three, four cùng Daniel.",
    "b": "Breathe in. Breathe out."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: bài 如果开心你就拍拍手, chỉ xem 2 bài đầu (khoảng 5 phút) rồi tắt. Vỗ tay và dậm chân theo. Sau đó mẹ nói “我们一起拍手” (wǒmen yìqǐ pāishǒu – mình cùng vỗ tay).",
    "b": "我们一起拍手！(wǒmen yìqǐ pāishǒu!)"
   },
   "words": {
    "en": [
     6,
     3,
     4
    ],
    "zh": [
     5,
     3
    ]
   },
   "doi": "Khám phá chia đều: mẹ cắt sẵn 10 lát chuối (bé không dùng dao). Bé chia cho 3 người (bé, mẹ, gấu bông): “One for you, one for me, one for Teddy.” Còn thừa 1 lát thì làm sao? Bé tự nghĩ cách (chia đôi, mời bố). Mỗi lần đưa, bé nói “给你” (gěi nǐ), người nhận nói “谢谢”.",
   "ob": "Ông bà nhận miếng chuối bé chia và nói “cảm ơn cháu”.",
   "toi": "Ca dao “Bầu ơi thương lấy bí cùng”: mẹ đọc 2 lần, kể ý: quả bầu, quả bí khác nhau nhưng mọc chung một giàn nên thương nhau. Hỏi bé: “Ở lớp có bạn khác con không? Con có chơi với bạn ấy không?”.",
   "lyr": "Bầu ơi thương lấy bí cùng"
  },
  {
   "chuyen": "Elmo hỏi, bé trả lời",
   "en": {
    "v": 0,
    "t": "Lần 2 – bé trả lời trước: xem lại bài Elmo. Mẹ dừng trước mỗi câu hát về cảm xúc, hỏi Yes/No: “Is Elmo sad?” – bé đoán trước, rồi xem tiếp để kiểm tra. Sau bài mẹ hỏi “What makes you happy?”, giúp bé nói “I like…”.",
    "b": "What makes you happy?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại bài 你好 对不起 谢谢, rồi đóng vai: mẹ cầm gấu bông va nhẹ vào bé và nói “对不起！”. Dạy bé đáp “没关系！” (méi guānxi – không sao). Đổi vai 3 lần.",
    "b": "对不起！没关系！(duìbuqǐ! méi guānxi!)"
   },
   "words": {
    "en": [
     9,
     3,
     4
    ],
    "zh": [
     1,
     2
    ]
   },
   "doi": "Làm lọ bình tĩnh: chai nhựa trong, đổ nước gần đầy (mẹ làm), thêm vài giọt màu thực phẩm và một thìa kim tuyến to; mẹ vặn chặt nắp và quấn băng dính. Bé lắc lọ rồi đặt xuống, vừa nhìn kim tuyến lắng xuống vừa hít thở. Đếm bằng tiếng Anh xem bao lâu thì lắng hết.",
   "ob": "Ông bà cùng bé lắc lọ bình tĩnh và đếm chờ kim tuyến lắng.",
   "toi": "Đọc một quyển trong bộ “Bé học yêu thương và chia sẻ” (NXB Trẻ). Đọc xong hỏi bé: “Bạn trong truyện chia sẻ cái gì? Con muốn chia sẻ gì với ai?”."
  },
  {
   "chuyen": "Thở chậm, thổi nhẹ",
   "en": {
    "v": 1,
    "t": "Lần 2 – bé hướng dẫn: xem lại bài Daniel Tiger. Sau video mẹ giả vờ giận (“Grrr! I'm angry!”), bé làm người hướng dẫn: “Take a deep breath!” và đếm 4 ngón tay cho mẹ làm theo.",
    "b": "Count with me: one, two, three, four."
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại 2 bài đầu của 如果开心你就拍拍手. Lần này bé hát trước câu đầu, mẹ làm theo động tác bé chọn. Dừng lại hỏi “你开心吗？” (nǐ kāixīn ma – con vui không?).",
    "b": "你开心吗？(nǐ kāixīn ma?)"
   },
   "words": {
    "en": [
     6,
     9,
     3
    ],
    "zh": [
     5,
     6
    ]
   },
   "doi": "Thí nghiệm thổi giấy: cắt một dải giấy dài, dán một đầu lên mép bàn. Bé thổi thật mạnh – giấy bay phần phật; thổi thật chậm – giấy rung nhẹ. Mẹ hỏi: “Thở kiểu nào giúp mình bình tĩnh?”. Thi xem ai thổi chậm được lâu nhất trong khi mẹ đếm.",
   "ob": "Ông bà cùng bé thổi dải giấy, thi ai thổi chậm lâu hơn.",
   "toi": "Bé kể lại truyện “Cáo, Thỏ và Gà trống”: bé đóng Gà trống gáy “Ò ó o!”, mẹ đóng Thỏ cảm ơn. Đổi vai một lần để bé nói lời cảm ơn."
  },
  {
   "chuyen": "Chuẩn bị pháo đài",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước: mở bài Elmo, mẹ tắt tiếng. Mỗi khi Elmo đổi mặt, bé nói tên cảm xúc trước. Cuối cùng bé nói một câu: “I feel happy today.”",
    "b": "I feel happy today."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: bé hát trước những chữ 你好, 对不起, 谢谢 trong bài, mẹ làm động tác. Sau đó bé nói với mẹ một câu thật: “妈妈，谢谢！” (māma, xièxie – cảm ơn mẹ).",
    "b": "妈妈，谢谢！(māma, xièxie!)"
   },
   "words": {
    "en": [
     9,
     2,
     1
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Chuẩn bị cho pháo đài ngày mai: bé đi gom chăn, gối, ghế; đếm xem có mấy cái gối. Mẹ cho bé chọn: trong pháo đài con sẽ kể truyện nào và mang theo đèn pin. Khi nhận đồ từ mẹ, bé tập nói “Thank you” và “Please” trước khi xin.",
   "ob": "Ông bà đưa chăn gối cho bé, chờ bé nói “cháu xin, cháu cảm ơn”.",
   "toi": "Mẹ kể ý bài thơ “Soi gương” (Phạm Hổ): một bé khóc nhè soi gương thấy bạn trong gương cũng khóc, thế là bé nín. Bé thử làm mặt khóc rồi mặt cười trước gương."
  },
  {
   "chuyen": "Thử thách lớn: pháo đài chăn gối",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng = 1 sao, nói “thank you/sorry/please” đúng tình huống = 2 sao, hít thở đếm 4 khi thua = 3 sao. Xong, bé chọn video thích nhất tuần (Elmo hoặc Daniel Tiger) để xem lại.",
    "b": "Thank you for playing!"
   },
   "zh": {
    "v": 0,
    "t": "Bé xem lại bài 你好 对不起 谢谢 rồi mang “谢谢” vào pháo đài: ai đưa đồ vào phải được bé cảm ơn bằng tiếng Trung."
   },
   "special": "Xây pháo đài chăn gối, kể chuyện trong pháo đài",
   "doi": "Xây pháo đài chăn gối: phủ chăn lên 2 ghế, lót gối bên trong, có đèn pin. Muốn vào pháo đài phải nói “Please!”, được mời vào thì nói “Thank you!”. Trong pháo đài bé kể lại truyện Cáo, Thỏ và Gà trống bằng đèn pin chiếu bóng tay. Mẹ đố câu đố ngôi sao, bé chiếu đèn lên trần nhà làm sao.",
   "ob": "Ông bà xin vào pháo đài, nói “cho ông/bà vào với” rồi cảm ơn bé.",
   "toi": "Ngủ trưa hoặc tối trong pháo đài nếu bé muốn. Mẹ đố lại câu đố ngôi sao bằng giọng thì thầm.",
   "lyr": "Câu đố ngôi sao"
  },
  {
   "chuyen": "Ôn tuần 1: lần lượt ở sân chơi",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn một video của tuần, xem 1 lần, rồi tự dẫn cả nhà hít thở và đếm.",
    "b": "My turn. Your turn."
   },
   "zh": {
    "v": 0,
    "t": "Ôn: hát lại bài 你好 对不起 谢谢 trên đường đi chơi."
   },
   "doi": "Đi sân chơi gần nhà cùng cả nhà. Tập chờ đến lượt ở cầu trượt: bé nói “My turn!” khi đến lượt mình, “Your turn!” khi nhường bạn. Nếu bạn nhường, bé nói “Thank you!”. Mẹ đếm xem hôm nay bé nói lời hay được mấy lần.",
   "ob": "Ông bà dẫn bé chơi cầu trượt, nhắc bé chờ đến lượt.",
   "toi": "Mẹ khen cụ thể một lần hôm nay bé biết chờ hoặc biết cảm ơn. Bé kể lại chuyện ở sân chơi. Hít thở 4 lần rồi ngủ."
  },
  {
   "chuyen": "Chú cún Patches biết chờ",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và chỉ: truyện Patience, Patches! (nếu dài, xem 5 phút đầu). Mẹ dừng 3 lần hỏi bằng tiếng Việt: “Patches đang thấy thế nào?” và “Chuyện gì xảy ra tiếp?”. Khi trong truyện có “wait”, bé giơ tay làm dấu dừng.",
    "b": "How does Patches feel?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: bài 找朋友 (tìm bạn). Bé đi vòng quanh, đến đoạn chào thì cúi chào mẹ và bắt tay. Mẹ nói “你是我的好朋友” (nǐ shì wǒ de hǎo péngyou – con là bạn thân của mẹ).",
    "b": "你是我的好朋友。(nǐ shì wǒ de hǎo péngyou)"
   },
   "words": {
    "en": [
     6,
     1,
     2,
     0
    ],
    "zh": [
     3,
     5
    ]
   },
   "doi": "Bảng sao lời hay: dán một tờ giấy lên tủ lạnh. Hôm nay, mỗi lần bé tự nói please, thank you, sorry (tiếng nào cũng được) mà không cần nhắc thì bé được tự vẽ một ngôi sao. Mục tiêu 5 sao trước giờ ngủ. Tối cả nhà đếm sao cùng bé.",
   "ob": "Ông bà để ý khi bé nói cảm ơn, xin lỗi và vẽ sao cho bé.",
   "toi": "Kể truyện “Câu chuyện bó đũa” bằng lời của mẹ: các anh em hay cãi nhau; người cha đưa bó đũa, không ai bẻ gãy cả bó, nhưng tháo ra từng chiếc thì gãy dễ. Cha dạy: thương nhau, cùng nhau thì không gì làm gãy được."
  },
  {
   "chuyen": "Ai nhanh hơn: lời hay ý đẹp",
   "en": {
    "v": 3,
    "t": "Lần 1 – thử thách ai nhanh hơn: bài The More We Get Together. Mẹ và bé nắm tay; mỗi khi nghe chữ “friends”, ai giơ tay trước được một điểm. Hết bài, bé nói “You are my friend.” với một người trong nhà.",
    "b": "Let's be friends!"
   },
   "zh": {
    "v": 0,
    "t": "Thử thách nhanh với bài 你好 对不起 谢谢: mẹ làm động tác (cúi đầu, chắp tay, vẫy tay), bé hô thật nhanh từ tiếng Trung đúng. Sau đó xem bài một lần để kiểm tra.",
    "b": "谢谢你！(xièxie nǐ!)"
   },
   "words": {
    "en": [
     4,
     0,
     8
    ],
    "zh": [
     0,
     1,
     3
    ]
   },
   "doi": "Đố tình huống 5 câu, mỗi câu 1 sao: mẹ kể bằng tiếng Việt (con làm rơi bút của bạn; bạn cho con mượn đồ chơi; con muốn xin thêm cơm; con lỡ giẫm chân em; bạn chưa chơi xong xích đu). Bé chọn nói “Sorry / Thank you / Please / Wait” cho đúng.",
   "ob": "Ông bà hỏi bé “Nếu con làm rơi đồ của bạn, con nói gì?”.",
   "toi": "Đồng dao “Thằng Bờm có cái quạt mo”: mẹ đọc vui, bé lắc đầu mỗi khi “Bờm rằng Bờm chẳng lấy” và cười ở câu cuối. Hỏi bé: “Bờm thích đổi lấy gì?”.",
   "lyr": "Thằng Bờm có cái quạt mo"
  },
  {
   "chuyen": "Chờ đến lượt mình",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé trả lời trước: xem lại Patience, Patches!. Mẹ dừng hỏi Yes/No: “Is Patches waiting?”, “Is he sorry?” – bé trả lời trước khi xem tiếp. Khi Patches phải chờ, cả hai cùng đếm chậm tới 10.",
    "b": "Can you wait? Yes, I can."
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại 找朋友, bé hát trước câu 你好 và 再见 (zàijiàn – tạm biệt). Mẹ hỏi “我们一起玩，好吗？” (wǒmen yìqǐ wán, hǎo ma – mình cùng chơi nhé?), bé trả lời “好！” (hǎo – được).",
    "b": "我们一起玩，好吗？(wǒmen yìqǐ wán, hǎo ma?)"
   },
   "words": {
    "en": [
     6,
     8,
     5
    ],
    "zh": [
     5,
     3,
     6
    ]
   },
   "doi": "Trò chờ đến lượt: chỉ có 1 chiếc ô tô đồ chơi cho 2 người. Đặt đồng hồ 30 giây: hết giờ phải đưa cho người kia và nói “Your turn!”. Người chờ nói “Wait, please.” và đếm. Chơi 6 lượt; bé chờ không giành được thưởng một cái ôm “hug”.",
   "ob": "Ông bà chơi cùng, mỗi người 30 giây một lượt với một đồ chơi.",
   "toi": "Đọc truyện tranh “Chú sẻ con và bông hoa bằng lăng” (Phạm Hổ, NXB Kim Đồng). Hỏi bé: “Chú sẻ con đã làm gì cho bạn?”."
  },
  {
   "chuyen": "Cửa hàng lời hay",
   "en": {
    "v": 3,
    "t": "Lần 2 – chuyển ngữ: trước khi hát, mẹ nói tiếng Trung “一起”, bé nói tiếng Anh “together”; “朋友” → “friend”. Rồi xem The More We Get Together, bé hát to chữ together.",
    "b": "Together – 一起 (yìqǐ)!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ: mẹ nói tiếng Anh, bé nói tiếng Trung: “thank you” → “谢谢”, “sorry” → “对不起”, “friend” → “朋友”. Đúng 3 từ thì được xem bài 如果开心你就拍拍手 (chỉ bài đầu).",
    "b": "Thank you – 谢谢!"
   },
   "words": {
    "en": [
     2,
     1,
     4
    ],
    "zh": [
     0,
     1,
     3
    ]
   },
   "doi": "Cửa hàng lời hay: bé bày 6 đồ chơi làm cửa hàng, dùng giấy dán ngôi sao làm tiền (không dùng tiền xu). Muốn mua phải nói “Please”, nhận hàng phải nói “Thank you”, bé bán hàng nói “Here you are!” hoặc “给你”. Đổi vai: mẹ bán, bé mua.",
   "ob": "Ông bà mua đồ ở cửa hàng của bé, nhớ nói xin và cảm ơn.",
   "toi": "Đồng dao “Kỳ đà là cha cắc ké”: mẹ đọc chậm 2 lần, bé thấy buồn cười vì các tên đổi vòng quanh. Thử đọc nhanh dần xem ai đọc không bị vấp.",
   "lyr": "Kỳ đà là cha cắc ké"
  },
  {
   "chuyen": "Bé kể chuyện Patches",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước: mở Patience, Patches!, tắt tiếng. Bé nhìn tranh kể bằng tiếng Việt, chen từ wait, sorry, thank you. Bật tiếng đoạn cuối, rồi bé nói câu “Thank you, Mum!”.",
    "b": "Thank you, Mum!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3: hát 找朋友 cùng mẹ, rồi diễn một đoạn hội thoại ngắn: bé: “对不起！” – mẹ: “没关系！” – cả hai: “我们一起玩！”.",
    "b": "没关系，我们一起玩！(méi guānxi, wǒmen yìqǐ wán!)"
   },
   "words": {
    "en": [
     6,
     1,
     2
    ],
    "zh": [
     1,
     2,
     5
    ]
   },
   "doi": "Chuẩn bị ngày hoá trang: bé chọn một nhân vật trong video tuần này (Elmo, Daniel Tiger hoặc chú cún Patches). Làm mặt nạ bằng đĩa giấy: bé tô màu, mẹ khoét lỗ mắt bằng kéo. Tập câu thoại của nhân vật: “I'm sorry.”, “Let's share!”.",
   "ob": "Ông bà giúp bé tô mặt nạ, hỏi bé “Con sẽ đóng vai ai?”.",
   "toi": "Bé kể lại truyện “Câu chuyện bó đũa” với 6 ống hút giấy: một ống bẻ cong dễ, cả bó thì không bẻ được. Mẹ hỏi: “Cả nhà mình giống bó đũa ở chỗ nào?”."
  },
  {
   "chuyen": "Thử thách lớn: ngày hoá trang",
   "en": {
    "v": 2,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng = 1 sao, nói đúng lời thoại của nhân vật = 2 sao, chờ đến lượt khi chơi = 2 sao. Sau đó bé chọn xem lại video thích nhất tuần (Patience, Patches! hoặc The More We Get Together).",
    "b": "You are Daniel Tiger today!"
   },
   "zh": {
    "v": 2,
    "t": "Bé trong vai nhân vật hát 找朋友, đi “tìm bạn” trong nhà và chào bằng tiếng Trung."
   },
   "special": "Ngày hoá trang: bé đóng vai nhân vật trong video",
   "doi": "Ngày hoá trang: bé đeo mặt nạ và đóng nhân vật đã chọn. Cả nhà diễn 3 cảnh ngắn: (1) hai bạn cùng muốn một đồ chơi – bé nói “Let's share!”; (2) lỡ va vào bạn – “I'm sorry.” / “对不起”; (3) được giúp – “Thank you!” / “谢谢”. Nếu đóng Daniel Tiger, bé dạy cả nhà hít thở đếm 4. Mẹ quay clip ngắn.",
   "ob": "Ông bà đóng bạn trong các cảnh diễn và khen bé.",
   "toi": "Xem lại clip hoá trang. Mẹ đọc lại đồng dao Thằng Bờm có cái quạt mo, bé đọc câu cuối.",
   "lyr": "Thằng Bờm có cái quạt mo"
  },
  {
   "chuyen": "Ôn nhẹ: đếm sao lời hay",
   "en": {
    "v": 3,
    "t": "Ôn nhẹ, không học từ mới: hát The More We Get Together cùng cả nhà, nắm tay đung đưa.",
    "b": "Thank you for a lovely day!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: hát bài 你好 对不起 谢谢 một lần."
   },
   "doi": "Đếm lại tất cả ngôi sao trên bảng lời hay của tuần. Bé chọn một phần thưởng nhỏ không phải đồ ăn (được chọn truyện tối, được làm người dẫn trò). Bé nói lời cảm ơn với một người đã giúp bé tuần này.",
   "ob": "Ông bà nhận lời cảm ơn của bé và ôm bé.",
   "toi": "Kể lại ngắn truyện Bó đũa, cả nhà chụm tay vào nhau. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[125] = {
 "sub": "Voi, khỉ, hổ, sư tử",
 "vocab": {
  "en": [
   [
    "elephant",
    "🐘",
    "con voi",
    false
   ],
   [
    "monkey",
    "🐒",
    "con khỉ",
    false
   ],
   [
    "tiger",
    "🐅",
    "con hổ",
    false
   ],
   [
    "lion",
    "🦁",
    "sư tử",
    false
   ],
   [
    "frog",
    "🐸",
    "con ếch",
    false
   ],
   [
    "zoo",
    "🏞️",
    "vườn thú",
    false
   ],
   [
    "walk",
    "🚶",
    "đi bộ",
    true
   ],
   [
    "stomp",
    "🦶",
    "dậm chân",
    true
   ],
   [
    "jump",
    "🦘",
    "nhảy",
    true
   ],
   [
    "roar",
    "📢",
    "gầm",
    true
   ]
  ],
  "zh": [
   [
    "大象",
    "dàxiàng",
    "con voi",
    "🐘"
   ],
   [
    "猴子",
    "hóuzi",
    "con khỉ",
    "🐒"
   ],
   [
    "老虎",
    "lǎohǔ",
    "con hổ",
    "🐅"
   ],
   [
    "狮子",
    "shīzi",
    "sư tử",
    "🦁"
   ],
   [
    "动物园",
    "dòngwùyuán",
    "vườn thú",
    "🏞️"
   ],
   [
    "跑",
    "pǎo",
    "chạy",
    "🏃"
   ],
   [
    "跳",
    "tiào",
    "nhảy",
    "🦘"
   ]
  ],
  "en_phr": [
   [
    "I like elephants.",
    "elephants",
    "🐘"
   ],
   [
    "What do you see? I see a lion.",
    "lion",
    "🦁"
   ],
   [
    "The monkey can jump.",
    "monkey",
    "🐒"
   ],
   [
    "Is it a tiger? Yes, it is.",
    "tiger",
    "🐅"
   ]
  ],
  "zh_phr": [
   [
    "我喜欢大象。",
    "大象",
    "wǒ xǐhuan dàxiàng",
    "con thích con voi",
    "🐘"
   ],
   [
    "这是老虎。",
    "老虎",
    "zhè shì lǎohǔ",
    "đây là con hổ",
    "🐅"
   ],
   [
    "猴子会跳。",
    "猴子",
    "hóuzi huì tiào",
    "con khỉ biết nhảy",
    "🐒"
   ]
  ],
  "seq": [
   [
    "🎟️",
    "go to the zoo",
    "去动物园"
   ],
   [
    "🐘",
    "see an elephant",
    "看大象"
   ],
   [
    "🐒",
    "see a monkey",
    "看猴子"
   ],
   [
    "🏠",
    "go home",
    "回家"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Walking In The Jungle",
    "u": "https://www.youtube.com/watch?v=GoSq-yZcJ-4",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Let's Go To The Zoo | Animal Song",
    "u": "https://www.youtube.com/watch?v=OwRmivbNgQk",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Dear Zoo by Rod Campbell | Read-Aloud",
    "u": "https://www.youtube.com/watch?v=12GDg5_gT_A",
    "kind": "story",
    "min": 3,
    "ch": "Hoots & Tales"
   },
   {
    "t": "Five Little Monkeys Jumping on the Bed",
    "u": "https://www.youtube.com/watch?v=VTmmoaO2M_U",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "两只老虎 Two Tigers (hai con hổ)",
    "u": "https://www.youtube.com/watch?v=-_NjdWn0wZQ",
    "kind": "song_action",
    "min": 2,
    "ch": "蟹蟹中文 Crazy Crab Chinese"
   },
   {
    "t": "【大象大象】中文儿歌 Elephant, elephant (voi ơi voi)",
    "u": "https://www.youtube.com/watch?v=95nD0HuqtDg",
    "kind": "song_action",
    "min": 2,
    "ch": "小星星兒歌屋"
   },
   {
    "t": "Five Little Monkeys 五只小猴子 – A Numbers Chinese Nursery Rhyme for beginning learners",
    "u": "https://www.youtube.com/watch?v=yPzZ9bdJGLA",
    "kind": "song_action",
    "min": 2,
    "ch": "Chinese As A Foreign Language"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: đi dạo trong rừng",
   "toi_vi": [
    {
     "t": "Con vỏi con voi",
     "type": "ve",
     "lyr": "Con vỏi con voi\nCái vòi đi trước,\nHai chân trước đi trước,\nHai chân sau đi sau\nCòn cái đuôi đi sau rốt\nTôi xin kể nốt\nCái chuyện con voi\nCon vỏi con voi\nCái vòi đi trước…"
    },
    {
     "t": "Câu đố con voi",
     "type": "cau_do",
     "lyr": "Bốn cột tứ trụ\nNgười ngự lên trên\nGươm bạc hai bên\nChầu vua thượng đế\nLà con gì?"
    }
   ],
   "book_vi": {
    "t": "Chuyện ở rừng Vi vu (bộ sách tranh)",
    "author": "Trương Huỳnh Như Trân",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Kể chuyện: thư gửi vườn thú",
   "toi_vi": [
    {
     "t": "Câu đố con thỏ",
     "type": "cau_do",
     "lyr": "Con gì đuôi ngắn tai dài\nMắt hồng lông mượt, có tài chạy nhanh"
    },
    {
     "t": "Con cua mà có hai càng",
     "type": "ve",
     "lyr": "Con cua mà có hai càng\nĐầu, tai không có bò ngang cả đời\nCon cá mà có cái đuôi\nHai vây ve vẩy nó bơi rất tài\nCon rùa mà có cái mai\nCái cổ thụt ngắn, thụt dài vào ra\nCon voi mà có hai ngà\nCái vòi nó cuốn đổ nhà, đổ cây\nCon chim mà có cánh bay\nBay cùng Nam, Bắc, Đông, Tây tỏ tường."
    }
   ],
   "book_vi": {
    "t": "Những chiếc áo ấm (phiên bản sách tranh)",
    "author": "Võ Quảng",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Gọi tên được elephant, monkey, tiger, lion khi nhìn tranh hoặc nghe tiếng kêu"
  ],
  [
   "en",
   "Trả lời “What do you see?” bằng “I see a …”"
  ],
  [
   "zh",
   "Nói được 大象, 猴子, 老虎, 狮子 và hát được một đoạn 两只老虎"
  ],
  [
   "vi",
   "Đọc thuộc đồng dao Con vỏi con voi kèm động tác"
  ],
  [
   "td",
   "Đếm ngược từ 5 về 1 bằng tiếng Anh theo Five Little Monkeys"
  ],
  [
   "xh",
   "Biểu diễn trước cả nhà 1 phút, chào khi bắt đầu và kết thúc"
  ],
  [
   "vd",
   "Đi, dậm chân, nhảy, trườn đúng theo lời bài hát"
  ]
 ],
 "days": [
  {
   "chuyen": "Đi dạo trong rừng",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – xem và làm theo: bài Walking In The Jungle. Mỗi đoạn bé làm đúng động tác (walk, stomp, jump) đi vòng quanh phòng. Đến câu “What do you see?” mẹ dừng, chỉ vào con vật và nói “I see a frog!”, bé nhắc lại.",
    "b": "What do you see?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài 两只老虎 (hai con hổ). Ở câu 跑得快 bé chạy tại chỗ; câu 一只没有耳朵 bé che tai, 一只没有尾巴 bé che mông. Mẹ chỉ cần làm cùng bé.",
    "b": "老虎跑得快！(lǎohǔ pǎo de kuài!)"
   },
   "words": {
    "en": [
     6,
     7,
     8,
     4,
     3
    ],
    "zh": [
     2,
     5
    ]
   },
   "doi": "Khu rừng trong nhà: xếp gối làm đá, khăn xanh làm sông, ghế làm cây. Bé đi qua theo lệnh của mẹ: “Walk! Stomp! Jump!”. Đặt 4 con thú đồ chơi dọc đường; đến chỗ nào bé dừng lại nói “I see a lion!”. Dọn đồ cứng, sắc khỏi lối đi.",
   "ob": "Ông bà hô đi, dậm chân, nhảy cho bé đi qua khu rừng gối.",
   "toi": "Kể truyện “Thầy bói xem voi” bằng lời của mẹ: năm ông không nhìn thấy, mỗi người sờ một chỗ trên con voi rồi tả: như con đỉa, như cái quạt, như cái cột… ai cũng cho mình đúng. Hỏi bé: “Con voi thật trông thế nào?”."
  },
  {
   "chuyen": "Đi vườn thú thôi",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm theo: bài Let's Go To The Zoo. Mỗi con vật bé làm theo: stomp như voi, swing tay như khỉ, roar như sư tử. Mẹ dừng trước mỗi con hỏi “Who is next?” – bé đoán.",
    "b": "Let's go to the zoo!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: bài 大象大象 (voi ơi voi). Bé dùng một cánh tay làm vòi voi, đung đưa theo nhạc. Mẹ chỉ vào màn hình nói “大象” (dàxiàng), bé nhắc lại.",
    "b": "大象，大象！(dàxiàng, dàxiàng!)"
   },
   "words": {
    "en": [
     5,
     0,
     1,
     3,
     7
    ],
    "zh": [
     0,
     4
    ]
   },
   "doi": "Vườn thú gấu bông: dùng hộp giấy, rổ làm chuồng. Bé là người trông vườn thú, xếp thú đồ chơi vào chuồng và giới thiệu với mẹ: “This is a lion. This is a monkey.” Mẹ là khách, hỏi “Where is the elephant?” – bé chỉ.",
   "ob": "Ông bà làm khách tham quan vườn thú đồ chơi, hỏi “Con hổ đâu?”.",
   "toi": "Vè “Con vỏi con voi”: mẹ đọc 2 lần, bé bò bằng tay chân như voi, một tay làm vòi đi trước. Lần 2 mẹ dừng cuối mỗi câu cho bé nói tiếp (trước, sau, rốt…).",
   "lyr": "Con vỏi con voi"
  },
  {
   "chuyen": "Nhạc tắt, đứng im như tượng",
   "en": {
    "v": 0,
    "t": "Lần 2 – bé gọi động tác trước: xem lại Walking In The Jungle. Trước mỗi đoạn, bé hô trước động tác sẽ làm (walk/stomp/jump). Mẹ thỉnh thoảng bấm dừng: cả hai đứng im như tượng, bấm chạy thì đi tiếp.",
    "b": "Freeze! Now walk!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại 两只老虎, hát chậm cùng video. Dừng ở hình con hổ, mẹ hỏi câu Yes/No “这是老虎吗？” (zhè shì lǎohǔ ma – đây là con hổ à?), bé trả lời “是！” (shì – đúng).",
    "b": "这是老虎吗？(zhè shì lǎohǔ ma?)"
   },
   "words": {
    "en": [
     6,
     7,
     8,
     2
    ],
    "zh": [
     2,
     5,
     6
    ]
   },
   "doi": "Nhảy đóng băng con vật: mẹ bật một bài hát bất kỳ, bé nhảy tự do. Nhạc tắt, mẹ gọi tên một con vật bằng tiếng Anh, bé đứng im trong tư thế con vật đó. Lượt sau mẹ gọi bằng tiếng Trung (大象, 猴子, 老虎, 狮子).",
   "ob": "Ông bà tắt – bật nhạc và gọi tên con vật cho bé đứng im.",
   "toi": "Đọc một truyện trong bộ “Chuyện ở rừng Vi vu” (Trương Huỳnh Như Trân, NXB Kim Đồng). Hỏi bé: “Trong rừng có những con vật nào? Con thích con nào?”."
  },
  {
   "chuyen": "Bước chân voi, bước chân chuột",
   "en": {
    "v": 1,
    "t": "Lần 2 – trả lời trước: xem lại Let's Go To The Zoo. Mẹ dừng khi con vật hiện ra và cố tình hỏi sai: “Is it a tiger?” – bé sửa: “No! It's an elephant!”. Đúng được 1 sao.",
    "b": "Is it a tiger? No, it's a lion!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại 大象大象, mẹ tắt tiếng ở đoạn điệp khúc, bé tự hát “大象，大象”. Sau đó mẹ chỉ hình hỏi “这是什么？”, bé trả lời “这是大象”.",
    "b": "这是大象。(zhè shì dàxiàng)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Đếm bước con vật: bé đi từ đầu phòng đến cuối phòng bằng bước chân voi (bước to, dậm mạnh), rồi bằng bước chân chuột (bước tí xíu). Mẹ đếm bằng tiếng Anh. Kiểu nào cần nhiều bước hơn? Mẹ nói: “Elephant steps are big. Mouse steps are small.”",
   "ob": "Ông bà đếm bước chân voi, bước chân chuột cùng bé.",
   "toi": "Câu đố “con voi”: mẹ đọc chậm 2 lần, bé đoán. Mẹ giải thích: bốn cột là bốn chân, gươm bạc hai bên là hai chiếc ngà.",
   "lyr": "Câu đố con voi"
  },
  {
   "chuyen": "Tập cho buổi biểu diễn",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé hát trước: mở Walking In The Jungle, tắt tiếng. Bé hát hoặc nói “Walking in the jungle, what do you see?”, mẹ trả lời “I see a tiger!”. Đổi lượt: mẹ hỏi, bé trả lời. Cuối cùng bé nói “I like monkeys.”",
    "b": "I like monkeys. Do you like monkeys?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: bé hát 两只老虎 trước video, mẹ chỉ bật tiếng khi bé quên lời. Cuối bài bé nói “我喜欢老虎” (wǒ xǐhuan lǎohǔ – con thích con hổ).",
    "b": "我喜欢老虎。(wǒ xǐhuan lǎohǔ)"
   },
   "words": {
    "en": [
     4,
     3,
     2,
     1
    ],
    "zh": [
     2,
     1,
     5
    ]
   },
   "doi": "Tập biểu diễn cho Thứ Bảy: bé chọn tiết mục (hát Walking In The Jungle hoặc đọc vè Con vỏi con voi có động tác). Làm cùng mẹ một chiếc băng đô tai thú bằng giấy bìa (mẹ dập ghim). Tập chào “Hello! I'm a lion!” và cúi chào cuối tiết mục.",
   "ob": "Ông bà xem bé tập tiết mục và vỗ tay khen.",
   "toi": "Bé kể lại “Thầy bói xem voi” qua trò bịt mắt: bé nhắm mắt sờ con voi đồ chơi (hoặc gối), đoán đang sờ vòi, tai hay chân. Mẹ hỏi: “Muốn biết cả con voi thì phải làm sao?” – nhìn hết, hỏi nhiều."
  },
  {
   "chuyen": "Thử thách lớn: đêm nhạc vườn thú",
   "en": {
    "v": 1,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng con vật = 1 sao, nói tên = 1 sao, nói câu “I see a…” = 2 sao. Xong, bé chọn bài yêu thích của tuần (Walking In The Jungle hoặc Let's Go To The Zoo) để hát lại.",
    "b": "Roar! You are a star!"
   },
   "zh": {
    "v": 0,
    "t": "Bé chọn hát lại 两只老虎 hoặc 大象大象, cả nhà làm động tác theo bé."
   },
   "special": "Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip",
   "doi": "Đêm nhạc vườn thú: bé đeo băng đô tai thú, đứng trên khăn làm sân khấu. Bé chào “Hello! I'm a…”, biểu diễn tiết mục đã tập khoảng 1 phút, rồi nói 1 câu tiếng Trung “我喜欢大象”. Mẹ quay clip. Cả nhà đoán bé đang đóng con gì và vỗ tay.",
   "ob": "Ông bà ngồi xem, đoán bé đóng con gì và vỗ tay.",
   "toi": "Xem lại clip cùng bé. Đọc lại vè Con vỏi con voi thật chậm, bé làm vòi voi đung đưa đến khi buồn ngủ.",
   "lyr": "Con vỏi con voi"
  },
  {
   "chuyen": "Ôn tuần 1: đi xem con vật thật",
   "en": {
    "v": 0,
    "t": "Ôn: bé chọn một bài của tuần, xem 1 lần và tự làm động tác.",
    "b": "Look! A monkey!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn: hát 大象大象 trên đường đi chơi."
   },
   "doi": "Cả nhà đi vườn thú (ví dụ vườn thú Thủ Lệ ở Hà Nội, Thảo Cầm Viên ở TP.HCM) hoặc công viên có chuồng chim, hồ cá. Luôn nắm tay bé, đứng sau rào. Mỗi con vật bé gọi tên tiếng Anh hoặc tiếng Trung, mẹ hỏi “Is it big or small?”. Không cho thú ăn khi chưa được phép.",
   "ob": "Ông bà dẫn bé xem con vật thật, hỏi “Con gì đây?”.",
   "toi": "Bé kể hôm nay con thấy con vật nào, con thích con nào nhất. Mẹ kể một kỷ niệm lần đầu mẹ thấy con voi hoặc con khỉ."
  },
  {
   "chuyen": "Thư gửi vườn thú",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và đoán: truyện Dear Zoo. Trước khi mỗi thùng hàng mở ra, mẹ dừng hỏi “What is it?” – bé đoán. Mở ra rồi hỏi bằng tiếng Việt “Vì sao bạn nhỏ gửi trả lại?” và “Chuyện gì xảy ra tiếp?”.",
    "b": "What is it? Is it a lion?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: bài 五只小猴子 (năm chú khỉ). Bé giơ 5 ngón tay; mỗi lần một chú khỉ ngã, bé gập một ngón. Mẹ đếm cùng bằng tiếng Trung: 五 (wǔ), 四 (sì), 三 (sān), 二 (èr), 一 (yī).",
    "b": "五只小猴子！(wǔ zhī xiǎo hóuzi!)"
   },
   "words": {
    "en": [
     5,
     0,
     3,
     1
    ],
    "zh": [
     1,
     6
    ]
   },
   "doi": "Thùng hàng bí mật: mẹ giấu 4 thú đồ chơi trong 4 hộp giấy, có nắp. Bé mở từng hộp như trong truyện, nói tên con vật và lý do gửi trả: “He's too big!”, “He's too scary!” (mẹ nhắc câu). Con vật cuối cùng bé giữ lại làm thú cưng.",
   "ob": "Ông bà cùng bé mở hộp, hỏi “Trong này con gì?”.",
   "toi": "Kể truyện “Sư Tử và Chuột Nhắt” bằng lời của mẹ: Sư Tử thả Chuột Nhắt đi; ít lâu sau Sư Tử bị mắc lưới, Chuột Nhắt chạy đến gặm đứt từng mắt lưới cứu bạn. Hỏi bé: “Con vật nhỏ có giúp được con vật to không?”."
  },
  {
   "chuyen": "Năm chú khỉ nghịch ngợm",
   "en": {
    "v": 3,
    "t": "Lần 1 – nghe chuyện: bài Five Little Monkeys Jumping on the Bed kể một câu chuyện. Mẹ dừng khi một chú khỉ ngã, hỏi “What happens next?”. Khi bác sĩ nói “No more monkeys jumping on the bed!”, bé lắc ngón tay nói theo.",
    "b": "No more monkeys jumping on the bed!"
   },
   "zh": {
    "v": 0,
    "t": "Kể chuyện bằng bài hát: xem lại 两只老虎, rồi bé kể bằng tiếng Việt: có hai con hổ, một con không có tai, một con không có đuôi. Mẹ hỏi “Lạ thật, vì sao nhỉ?”, bé tự nghĩ câu trả lời vui.",
    "b": "两只老虎，跑得快！(liǎng zhī lǎohǔ, pǎo de kuài!)"
   },
   "words": {
    "en": [
     1,
     8
    ],
    "zh": [
     2,
     5
    ]
   },
   "doi": "Diễn lại Five Little Monkeys: đặt 5 thú bông lên một chiếc gối (giường của khỉ) trên sàn. Mỗi đoạn hát, bé cho một chú khỉ “ngã” xuống và đếm ngược bằng tiếng Anh, rồi bằng tiếng Trung. Bé được nhảy trên đệm trải sàn, không nhảy trên giường cao.",
   "ob": "Ông bà đếm ngược cùng bé khi từng chú khỉ ngã khỏi gối.",
   "toi": "Câu đố “con thỏ”: mẹ đọc 2 lần, bé đoán. Hỏi bé: “Thỏ chạy nhanh hay chậm? Còn con voi?”.",
   "lyr": "Câu đố con thỏ"
  },
  {
   "chuyen": "Bé làm người trông vườn thú",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai: xem lại Dear Zoo. Bé làm người trông vườn thú, trả lời trước khi mở thùng: “It's an elephant. He's too big!”. Mẹ dừng hỏi Yes/No: “Is the giraffe tall?” – “Yes!”.",
    "b": "He's too big!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại 五只小猴子. Dừng ở cảnh khỉ nhảy, mẹ hỏi “猴子跳吗？” (hóuzi tiào ma – khỉ có nhảy không?), bé trả lời “跳！” và nhảy một cái.",
    "b": "猴子跳吗？(hóuzi tiào ma?)"
   },
   "words": {
    "en": [
     0,
     3,
     1,
     5
    ],
    "zh": [
     1,
     6
    ]
   },
   "doi": "Kể chuyện bằng tranh: mẹ vẽ nhanh 4 khung (thùng voi, thùng sư tử, thùng khỉ, thùng cún con). Mẹ xáo lộn, bé xếp lại theo đúng thứ tự trong truyện rồi kể lại, mỗi tranh nói một câu tiếng Anh ngắn.",
   "ob": "Ông bà nghe bé kể chuyện theo 4 tranh.",
   "toi": "Đọc truyện tranh “Những chiếc áo ấm” (Võ Quảng, NXB Kim Đồng). Hỏi bé: “Các con vật trong truyện giúp nhau thế nào?”."
  },
  {
   "chuyen": "Hướng dẫn viên hai thứ tiếng",
   "en": {
    "v": 3,
    "t": "Lần 2 – chuyển ngữ: trước khi xem, mẹ nói tiếng Anh “monkey”, bé nói tiếng Trung “猴子”; “jump” → “跳”. Rồi xem lại Five Little Monkeys, bé nhảy mỗi khi nghe “jumping”.",
    "b": "Monkey – 猴子 (hóuzi)!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ ngược lại: mẹ nói tiếng Trung “大象”, bé nói “elephant” và làm vòi voi; “狮子” → “lion” và gầm. Sau đó xem lại 大象大象 một lần.",
    "b": "大象 – elephant!"
   },
   "words": {
    "en": [
     1,
     8,
     0,
     3
    ],
    "zh": [
     0,
     1,
     3,
     6
    ]
   },
   "doi": "Hướng dẫn viên vườn thú: gấu bông là khách nói tiếng Anh, búp bê là khách nói tiếng Trung. Bé dẫn 2 khách đi quanh vườn thú đồ chơi, giới thiệu mỗi con 2 câu: “This is a tiger.” và “这是老虎.” Mỗi câu đúng được một sao.",
   "ob": "Ông bà làm khách, nghe bé giới thiệu các con vật.",
   "toi": "Bé kể lại “Sư Tử và Chuột Nhắt”: mẹ trùm nhẹ một chiếc khăn lên tay làm lưới, bé làm Chuột Nhắt gỡ khăn ra cứu Sư Tử. Sư Tử nói “Cảm ơn bạn!”."
  },
  {
   "chuyen": "Bé kể Dear Zoo",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước: mở Dear Zoo, tắt tiếng. Trước mỗi trang, bé nói con vật trong thùng và vì sao gửi trả. Bật tiếng trang cuối, bé nói “I like the puppy.”",
    "b": "Tell me, what's in the box?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3: bé đếm ngược trước video bằng tiếng Trung, rồi nói “猴子会跳” (hóuzi huì tiào – khỉ biết nhảy).",
    "b": "猴子会跳。(hóuzi huì tiào)"
   },
   "words": {
    "en": [
     0,
     3,
     1,
     2
    ],
    "zh": [
     1,
     6
    ]
   },
   "doi": "Chuẩn bị picnic vườn thú cho ngày mai: bé chọn 4 thú đồ chơi được mời. Bé quyết định mỗi con thích ăn gì (khỉ – chuối, voi – mía/cỏ, sư tử – thịt làm bằng giấy). Vẽ thẻ món ăn để mang theo.",
   "ob": "Ông bà hỏi bé “Con khỉ thích ăn gì?” khi bé chuẩn bị picnic.",
   "toi": "Vè “Con cua mà có hai càng”: mẹ đọc 2 lần, bé làm động tác cho mỗi con (cua bò ngang, cá vẫy đuôi, voi cuốn vòi, chim vỗ cánh).",
   "lyr": "Con cua mà có hai càng"
  },
  {
   "chuyen": "Thử thách lớn: picnic với các bạn thú",
   "en": {
    "v": 2,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: trả lời Yes/No đúng = 1 sao, nói câu “He's too big!” = 2 sao, kể lại một đoạn truyện = 3 sao. Sau đó bé chọn xem lại Dear Zoo hoặc Five Little Monkeys.",
    "b": "Who wants a banana?"
   },
   "zh": {
    "v": 2,
    "t": "Ôn: bé chọn xem lại 五只小猴子 rồi đếm khỉ trên khăn picnic."
   },
   "special": "Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung",
   "doi": "Picnic từ vựng: trải khăn ở sân, mang chuối, bánh mì, nước. Đặt 4 thú đồ chơi quanh khăn. Bé mời từng bạn: “Monkey, this is for you!” và nói “猴子喜欢香蕉” (hóuzi xǐhuan xiāngjiāo – khỉ thích chuối). Mẹ hỏi “Do you like bananas?”, bé trả lời “Yes, I do!”. Rửa tay trước khi ăn, ngồi yên khi ăn.",
   "ob": "Ông bà cùng ngồi picnic và hỏi bé tên các con thú.",
   "toi": "Kể lại buổi picnic: bạn thú nào ăn nhiều nhất? Mẹ đố lại câu đố con thỏ.",
   "lyr": "Câu đố con thỏ"
  },
  {
   "chuyen": "Ôn nhẹ: vườn thú của bé",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ, không học từ mới: hát Let's Go To The Zoo, cả nhà mỗi người làm một con vật.",
    "b": "Bye-bye, animals!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: hát 两只老虎 một lần, cả nhà chạy tại chỗ."
   },
   "doi": "Bé dọn vườn thú đồ chơi, vừa cất từng con vừa nói tên (tiếng nào cũng được). Mẹ hỏi: “Tuần sau con muốn thăm con vật nào?” – chuẩn bị cho hươu cao cổ và gấu trúc.",
   "ob": "Ông bà nghe bé gọi tên thú khi bé cất đồ chơi.",
   "toi": "Đọc lại vè Con vỏi con voi. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[126] = {
 "sub": "Hươu cao cổ, gấu trúc; to – nhỏ; con vật làm được gì",
 "vocab": {
  "en": [
   [
    "giraffe",
    "🦒",
    "hươu cao cổ",
    false
   ],
   [
    "panda",
    "🐼",
    "gấu trúc",
    false
   ],
   [
    "monkey",
    "🐒",
    "con khỉ",
    false
   ],
   [
    "elephant",
    "🐘",
    "con voi",
    false
   ],
   [
    "lion",
    "🦁",
    "sư tử",
    false
   ],
   [
    "big",
    "🏔️",
    "to",
    false
   ],
   [
    "small",
    "🐭",
    "nhỏ",
    false
   ],
   [
    "tall",
    "🌴",
    "cao",
    false
   ],
   [
    "wave",
    "👋",
    "vẫy tay",
    true
   ],
   [
    "can",
    "💪",
    "có thể / biết",
    false
   ]
  ],
  "zh": [
   [
    "熊猫",
    "xióngmāo",
    "gấu trúc",
    "🐼"
   ],
   [
    "大象",
    "dàxiàng",
    "con voi",
    "🐘"
   ],
   [
    "长颈鹿",
    "chángjǐnglù",
    "hươu cao cổ",
    "🦒"
   ],
   [
    "大",
    "dà",
    "to",
    "🏔️"
   ],
   [
    "小",
    "xiǎo",
    "nhỏ",
    "🐭"
   ],
   [
    "狮子",
    "shīzi",
    "sư tử",
    "🦁"
   ],
   [
    "猴子",
    "hóuzi",
    "con khỉ",
    "🐒"
   ],
   [
    "会",
    "huì",
    "biết (làm)",
    "💪"
   ]
  ],
  "en_phr": [
   [
    "The giraffe is tall.",
    "tall",
    "🦒"
   ],
   [
    "The elephant is big.",
    "big",
    "🐘"
   ],
   [
    "The mouse is small.",
    "small",
    "🐭"
   ],
   [
    "I am a monkey and I wave my arms.",
    "wave",
    "🐒"
   ],
   [
    "Can a panda fly? No, it can't.",
    "panda",
    "🐼"
   ]
  ],
  "zh_phr": [
   [
    "大象很大。",
    "大",
    "dàxiàng hěn dà",
    "con voi rất to",
    "🐘"
   ],
   [
    "熊猫很小吗？",
    "熊猫",
    "xióngmāo hěn xiǎo ma?",
    "gấu trúc có nhỏ không?",
    "🐼"
   ],
   [
    "猴子会爬树。",
    "会",
    "hóuzi huì pá shù",
    "con khỉ biết trèo cây",
    "🐒"
   ]
  ],
  "seq": [
   [
    "👶",
    "baby panda",
    "熊猫宝宝"
   ],
   [
    "🍼",
    "drink milk",
    "喝奶"
   ],
   [
    "🎋",
    "eat bamboo",
    "吃竹子"
   ],
   [
    "🐼",
    "big panda",
    "大熊猫"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Wild Animals What Is It? | Guessing Game, Vocabulary Builder",
    "u": "https://www.youtube.com/watch?v=OYOS15gMcbw",
    "kind": "game",
    "min": 4,
    "ch": "Dream English Kids"
   },
   {
    "t": "Guess The Animal Sounds For Kids – xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=Z-2LjBgEEhE",
    "kind": "game",
    "min": 8.7,
    "ch": "Little Dreamers Education"
   },
   {
    "t": "From Head to Toe: Eric Carle StoryTime",
    "u": "https://www.youtube.com/watch?v=a-GcxJW8wVw",
    "kind": "story",
    "min": 5,
    "ch": "The Eric Carle Museum of Picture Book Art"
   },
   {
    "t": "Dear Zoo by Rod Campbell | Read-Aloud",
    "u": "https://www.youtube.com/watch?v=12GDg5_gT_A",
    "kind": "story",
    "min": 3,
    "ch": "Hoots & Tales"
   }
  ],
  "zh": [
   {
    "t": "Learn Chinese for Children with Miaomiao Ep.1 – Zoo (vườn thú) – xem 5 phút đầu",
    "u": "https://m.youtube.com/watch?v=yv8jrz_LBmU",
    "kind": "lesson",
    "min": 5,
    "ch": "Miaomiao Kidz"
   },
   {
    "t": "Kids Learn Mandarin – Big and Small 大大小小",
    "u": "https://m.youtube.com/watch?v=yM0DA-em5MY",
    "kind": "lesson",
    "min": 3,
    "ch": "Little Chinese Learners (from title pattern)"
   },
   {
    "t": "动物猜猜猜 (Dòngwù cāi cāi cāi)",
    "u": "https://www.youtube.com/watch?v=Dhw0fBiRfIY",
    "kind": "song_action",
    "min": 3,
    "ch": "貝樂虎 BabyTiger (贝乐虎儿歌)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: to hay nhỏ, cao hay thấp?",
   "toi_vi": [
    {
     "t": "Câu đố con công",
     "type": "cau_do",
     "lyr": "Con gì đẹp nhất loài chim\nĐuôi xòe rực rỡ như nghìn cánh hoa"
    },
    {
     "t": "Ru con con ngủ cho lành",
     "type": "hat_ru",
     "lyr": "Ru con con ngủ cho lành\nĐể mẹ gánh nước rửa bành con voi\nMuốn coi lên núi mà coi\nCoi Bà Triệu tướng cưỡi voi đánh cồng"
    }
   ],
   "book_vi": {
    "t": "Truyện đồng thoại Võ Quảng (có tranh màu)",
    "author": "Võ Quảng",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Thử thách: con vật làm được gì?",
   "toi_vi": [
    {
     "t": "Ếch dưới ao",
     "type": "ve",
     "lyr": "Ếch ở dưới ao\nVừa ngớt mưa rào\nNhảy ra bì bõm\nẾch kêu \"ộp ộp\"\nẾch kêu \"ặp ặp\"\nThấy bác đi câu\nRủ nhau trốn mau\nẾch kêu \"ộp ộp\"\nẾch kêu \"ặp ặp\"."
    },
    {
     "t": "Con rùa",
     "type": "ve",
     "lyr": "Rì rà rì rà\nĐội nhà đi chơi\nĐến khi tối trời\nÚp nhà nằm ngủ."
    }
   ],
   "book_vi": {
    "t": "Hành trình khám phá (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được câu so sánh ngắn: “The elephant is big.” / “The mouse is small.”"
  ],
  [
   "en",
   "Trả lời “Can you…?” bằng “Yes, I can!” / “I can do it!”"
  ],
  [
   "zh",
   "Nói được 大, 小 và 熊猫, 长颈鹿, 大象 khi nhìn tranh"
  ],
  [
   "zh",
   "Nói được câu “我会…” với một động tác"
  ],
  [
   "vi",
   "Kể lại truyện Ếch ngồi đáy giếng bằng lời của mình"
  ],
  [
   "td",
   "Xếp con vật theo to – nhỏ, cao – thấp; đo chiều cao trên khung cửa"
  ],
  [
   "xh",
   "Gọi video, nói 3 câu với ông bà không cần nhắc"
  ],
  [
   "vd",
   "Bắt chước động tác từng con vật trong From Head to Toe"
  ]
 ],
 "days": [
  {
   "chuyen": "To hay nhỏ?",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – xem và chỉ: trò Wild Animals What Is It?. Khi bóng con vật hiện ra, mẹ dừng, bé đoán bằng tiếng Việt trước, sau đó nghe tiếng Anh và nhắc lại. Hết video, mẹ chỉ tranh voi hỏi “Is it big or small?”.",
    "b": "Is it big or small?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài học Miaomiao – Zoo, xem 5 phút đầu. Mỗi con vật mẹ dừng lại, bé đóng con vật đó để mẹ đoán, rồi cả hai nhắc tên tiếng Trung: 熊猫 (xióngmāo), 狮子 (shīzi), 猴子 (hóuzi).",
    "b": "这是熊猫。(zhè shì xióngmāo)"
   },
   "words": {
    "en": [
     4,
     3,
     0,
     5,
     6
    ],
    "zh": [
     0,
     5,
     6
    ]
   },
   "doi": "Khám phá to – nhỏ: bé phân loại thú đồ chơi và tranh con vật vào 2 rổ: rổ “big” và rổ “small”. Con nào khó (gấu trúc to hay nhỏ?), mẹ và bé cùng so với con khác. Bé nói “The elephant is big. The mouse is small.”",
   "ob": "Ông bà cùng bé chia con vật vào rổ to, rổ nhỏ.",
   "toi": "Kể truyện “Trí khôn của ta đây” bằng lời của mẹ, nhẹ nhàng: Hổ lạ vì con Trâu to khỏe lại nghe lời bác nông dân nhỏ bé, bèn hỏi trí khôn là gì. Bác nông dân khéo léo buộc Hổ vào gốc cây và nói “Trí khôn của ta đây!”. Hỏi bé: “Nhỏ bé có thắng được to khỏe không? Nhờ cái gì?”."
  },
  {
   "chuyen": "Nghe tiếng, đoán con vật",
   "en": {
    "v": 1,
    "t": "Lần 1 – nghe và đoán: Guess The Animal Sounds (xem 5 phút đầu). Bé nhắm mắt nghe tiếng kêu, đoán bằng tiếng Việt hoặc tiếng Anh trước khi hình hiện ra. Mẹ ghi nhanh bé đoán đúng bao nhiêu con.",
    "b": "Listen! What animal is it?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: bài 大大小小 (to to nhỏ nhỏ). Nghe 大 (dà) bé dang tay thật to, nghe 小 (xiǎo) bé thu người lại thật nhỏ.",
    "b": "大！小！(dà! xiǎo!)"
   },
   "words": {
    "en": [
     4,
     3,
     2
    ],
    "zh": [
     3,
     4
    ]
   },
   "doi": "Thí nghiệm âm thanh to – nhỏ: gõ bằng thìa gỗ lên một nồi to và một cốc nhỏ (đồ nhựa hoặc inox, không dùng thủy tinh). Cái nào kêu trầm, cái nào kêu cao? Rồi bé gầm to như sư tử, kêu chít chít nhỏ như chuột. Mẹ hỏi: “Big sound or small sound?”.",
   "ob": "Ông bà cùng bé gõ nồi to, cốc nhỏ và nghe tiếng.",
   "toi": "Câu đố “con công”: mẹ đọc 2 lần, bé đoán. Bé xòe hai tay sau lưng làm đuôi công và đi một vòng.",
   "lyr": "Câu đố con công"
  },
  {
   "chuyen": "Ai cao nhất nhà?",
   "en": {
    "v": 0,
    "t": "Lần 2 – bé nói trước: xem lại Wild Animals What Is It?. Mẹ dừng khi bóng hiện ra, bé phải nói “It's a giraffe!” trước thầy Matt. Đúng được 1 sao.",
    "b": "It's a giraffe! It's tall!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại Miaomiao – Zoo (5 phút đầu). Mẹ dừng, hỏi câu Yes/No “这是熊猫吗？” – bé trả lời “是” hoặc “不是” (bú shì – không phải).",
    "b": "这是熊猫吗？(zhè shì xióngmāo ma?)"
   },
   "words": {
    "en": [
     0,
     7,
     1,
     5
    ],
    "zh": [
     0,
     2,
     5
    ]
   },
   "doi": "Đo chiều cao: bé đứng sát khung cửa, mẹ đánh dấu bằng bút chì; làm tiếp cho mẹ và cho gấu bông. So sánh: “Mum is tall. Teddy is small.” Mẹ kể: hươu cao cổ cao bằng khoảng 3 người lớn chồng lên nhau. Bé chỉ lên trần nhà: “Giraffe – tall!”.",
   "ob": "Ông bà đứng cạnh khung cửa để bé so ai cao, ai thấp.",
   "toi": "Đọc một truyện trong “Truyện đồng thoại Võ Quảng” (NXB Kim Đồng). Hỏi bé: “Con vật trong truyện to hay nhỏ? Bạn ấy làm được gì giỏi?”."
  },
  {
   "chuyen": "Con vật làm được gì?",
   "en": {
    "v": 1,
    "t": "Lần 2 – thử thách tai nghe: xem lại 5 phút đầu Guess The Animal Sounds. Lần này bé phải nói tên tiếng Anh trước khi hình hiện ra, rồi bắt chước tiếng kêu và dáng đi của con vật đó.",
    "b": "Can you roar like a lion?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại 大大小小. Sau video mẹ nói một con vật, bé nói câu to – nhỏ: “大象很大” (dàxiàng hěn dà – voi rất to), “老鼠很小” (lǎoshǔ hěn xiǎo – chuột rất nhỏ).",
    "b": "大象很大。(dàxiàng hěn dà)"
   },
   "words": {
    "en": [
     9,
     8,
     2,
     4
    ],
    "zh": [
     3,
     4,
     1,
     7
    ]
   },
   "doi": "Con vật làm được gì: mẹ vẽ 4 thẻ (khỉ trèo, chim bay, cá bơi, voi phun nước). Bé bốc thẻ, làm động tác và nói “I can climb!” hoặc “I can't fly!”. Mẹ hỏi lại câu Yes/No vui: “Can an elephant fly?” – “No!”.",
   "ob": "Ông bà hỏi bé “Con voi có bay được không?” và cùng cười.",
   "toi": "Hát ru “Ru con con ngủ cho lành”: mẹ hát hoặc đọc chậm như ru, kể ngắn: ngày xưa Bà Triệu cưỡi voi rất oai. Bé nằm nghe và nhắm mắt.",
   "lyr": "Ru con con ngủ cho lành"
  },
  {
   "chuyen": "Chuẩn bị sách vườn thú",
   "en": {
    "v": 0,
    "t": "Lần 3 – tốc độ: xem Wild Animals What Is It? lần cuối của tuần, bé nói tên con vật trước Matt cả bài. Sau đó bé chọn 2 con và nói câu: “The giraffe is tall. The lion is big.”",
    "b": "The giraffe is tall."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: xem lại Miaomiao – Zoo, bé nói tên tiếng Trung trước video. Cuối cùng nói “我喜欢熊猫” (wǒ xǐhuan xióngmāo).",
    "b": "我喜欢熊猫。(wǒ xǐhuan xióngmāo)"
   },
   "words": {
    "en": [
     0,
     4,
     7,
     5
    ],
    "zh": [
     0,
     2,
     5,
     6
    ]
   },
   "doi": "Chuẩn bị “My Zoo Book”: mẹ gấp 2 tờ A4 thành sách 8 trang. Bé chọn 6 con vật, vẽ hoặc cắt dán tranh từ báo cũ (bé dùng kéo nhựa đầu tròn, mẹ ngồi cạnh). Một trang dành cho to – nhỏ: voi to bên trái, chuột nhỏ bên phải.",
   "ob": "Ông bà cùng bé chọn tranh con vật để dán vào sách.",
   "toi": "Bé kể lại “Trí khôn của ta đây”: bé chọn đóng Trâu (to khỏe) hoặc bác nông dân (nhỏ mà khôn). Mẹ hỏi: “Con thích làm ai? Vì sao?”."
  },
  {
   "chuyen": "Thử thách lớn: sách vườn thú",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng = 1 sao, nói tên con vật = 1 sao, nói câu to – nhỏ (“The elephant is big.”) = 2 sao. Xong, bé chọn video thích nhất tuần để xem lại.",
    "b": "Great! Your book is beautiful!"
   },
   "zh": {
    "v": 1,
    "t": "Bé xem lại 大大小小 rồi đọc trang to – nhỏ trong sách: “大象很大，老鼠很小”."
   },
   "special": "Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần",
   "doi": "Hoàn thành “My Zoo Book – 我的动物园”: mỗi trang một con vật, mẹ viết tên tiếng Anh và tiếng Trung, bé nói một câu cho mỗi trang (“The giraffe is tall.”, “I like pandas.”). Bé “đọc” cả quyển cho cả nhà nghe, chỉ từng tranh.",
   "ob": "Ông bà nghe bé đọc sách vườn thú và hỏi “Con nào to nhất?”.",
   "toi": "Đặt sách cạnh gối. Mẹ đố lại câu đố con công, bé trả lời và kể con công múa thế nào.",
   "lyr": "Câu đố con công"
  },
  {
   "chuyen": "Ôn tuần 1: so to – nhỏ ngoài phố",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn một video của tuần, xem 1 lần rồi mở sách vườn thú chỉ theo.",
    "b": "Look! A big tree!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn: hát 大大小小 trên đường đi dạo."
   },
   "doi": "Đi dạo công viên hoặc chợ cây cảnh, nắm tay bé. Trò so sánh: bé tìm 1 thứ to và 1 thứ nhỏ (cây to – lá nhỏ, chó to – mèo nhỏ) và nói “big” – “small”, “大” – “小”. Tìm xem có con vật thật nào (chim, cá, mèo) và bé kể nó làm được gì.",
   "ob": "Ông bà dẫn bé đi dạo, đố bé tìm thứ to và thứ nhỏ.",
   "toi": "Mẹ kể một chuyện thật: hồi bé mẹ thấy con vật nào to nhất. Bé kể hôm nay con thấy gì to, gì nhỏ."
  },
  {
   "chuyen": "Từ đầu đến chân",
   "en": {
    "v": 2,
    "t": "Lần 1 – làm theo: truyện From Head to Toe (Eric Carle). Mỗi con vật làm một động tác, bé làm theo; khi truyện hỏi “Can you do it?”, bé trả lời to “I can do it!”. Mẹ đếm xem bé làm được bao nhiêu động tác.",
    "b": "Can you do it? I can do it!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: trò 动物猜猜猜 (đoán con vật). Mẹ dừng trước khi con vật lộ ra, bé đoán bằng tiếng Việt hoặc tiếng Trung. Đoán đúng tiếng Trung được 2 sao.",
    "b": "猜猜这是什么？(cāicai zhè shì shénme?)"
   },
   "words": {
    "en": [
     0,
     2,
     3,
     8,
     9
    ],
    "zh": [
     6,
     0,
     1
    ]
   },
   "doi": "Thử thách “con vật làm được gì” có tính sao: mẹ đọc 6 câu hỏi Can…? (Can you wave like a monkey? Can you bend like a giraffe? Can you stomp like an elephant?…). Bé làm đúng và trả lời “I can do it!” mỗi câu được 1 sao. Chơi ở chỗ rộng, không có cạnh bàn sắc.",
   "ob": "Ông bà hỏi “Con làm được như con khỉ không?” và đếm sao cho bé.",
   "toi": "Kể truyện “Ếch ngồi đáy giếng” bằng lời của mẹ: chú ếch ở mãi dưới giếng, nhìn lên chỉ thấy bầu trời bé bằng miệng giếng, nên tưởng trời chỉ nhỏ thế. Hỏi bé: “Bầu trời thật to hay nhỏ? Làm sao ếch biết được?”."
  },
  {
   "chuyen": "Ai nói nhanh hơn?",
   "en": {
    "v": 3,
    "t": "Lần 1 trong tuần – thi đoán: xem lại Dear Zoo. Trước mỗi thùng hàng, mẹ và bé thi ai nói tên con vật trước; nói thêm “too big” hoặc “too tall” được thêm sao. Mẹ cố tình chậm để bé thắng nhiều.",
    "b": "Who is faster?"
   },
   "zh": {
    "v": 0,
    "t": "Thi nhanh với Miaomiao – Zoo (5 phút đầu): mỗi con vật hiện ra, ai nói tên tiếng Trung trước được 1 sao. Cuối cùng đếm sao xem ai thắng.",
    "b": "你真快！(nǐ zhēn kuài!)"
   },
   "words": {
    "en": [
     0,
     3,
     4,
     5,
     7
    ],
    "zh": [
     0,
     5,
     6
    ]
   },
   "doi": "Chạy tiếp sức con vật: dán 6 tranh con vật lên tường thấp. Mẹ hô một con vật kèm kích cỡ (“Big elephant!” hoặc “小猴子!”), bé chạy đến chạm đúng tranh rồi chạy về. Mỗi lượt đúng 1 sao. Dọn đồ khỏi đường chạy, mẹ đứng gần.",
   "ob": "Ông bà hô tên con vật cho bé chạy đến chạm tranh.",
   "toi": "Vè “Ếch dưới ao”: mẹ đọc 2 lần, bé nhảy như ếch mỗi khi nghe “ộp ộp”. Lần 2 bé tự kêu “ộp ộp”, “ặp ặp” ở đúng chỗ.",
   "lyr": "Ếch dưới ao"
  },
  {
   "chuyen": "Đúng hay sai?",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé nói trước: xem lại From Head to Toe. Mẹ dừng trước mỗi con vật, bé đoán trước động tác sẽ làm. Bé nói câu “I can wave my arms!” rồi mới bật tiếng.",
    "b": "I can wave my arms!"
   },
   "zh": {
    "v": 1,
    "t": "Xem lại 大大小小 với trò đúng – sai: mẹ chỉ tranh voi nói “大象很小”, bé sửa “不对！大象很大！” (bú duì – không đúng).",
    "b": "不对！大象很大！(bú duì! dàxiàng hěn dà!)"
   },
   "words": {
    "en": [
     8,
     9,
     0,
     2
    ],
    "zh": [
     3,
     4,
     1
    ]
   },
   "doi": "Đố đúng – sai 6 câu, mỗi câu 1 sao: “An elephant is small.” (No! Big!), “A giraffe is tall.” (Yes!), “A panda can fly.” (No!), rồi bằng tiếng Trung: “熊猫会飞吗？” (xióngmāo huì fēi ma) – “不会！” (bú huì – không biết). Đổi vai để bé đố mẹ.",
   "ob": "Ông bà nói câu đúng – sai về con vật cho bé sửa.",
   "toi": "Đọc một quyển trong bộ “Hành trình khám phá” (NXB Trẻ). Bé chọn một trang và kể lại cho mẹ bằng lời của bé."
  },
  {
   "chuyen": "Nghe Trung, nói Anh",
   "en": {
    "v": 3,
    "t": "Lần 2 – chuyển ngữ: mẹ nói tiếng Trung, bé nói tiếng Anh: “大” → “big”, “小” → “small”, “长颈鹿” → “giraffe”. Rồi xem lại Dear Zoo, bé nói “too big” hoặc “too tall” cho mỗi thùng hàng.",
    "b": "大 – big! 小 – small!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: 动物猜猜猜 – bé đoán trước khi con vật lộ ra và nói thêm một câu: “这是猴子，猴子很小”.",
    "b": "猴子很小。(hóuzi hěn xiǎo)"
   },
   "words": {
    "en": [
     5,
     6,
     0,
     7
    ],
    "zh": [
     3,
     4,
     6
    ]
   },
   "doi": "Tập cho buổi gọi video ông bà: bé tập 3 câu tiếng Anh (“I like pandas.”, “The giraffe is tall.”, “I can wave.”) và 3 câu tiếng Trung (“我喜欢熊猫”, “大象很大”, “我会跳”). Mẹ đóng ông bà hỏi lại bằng tiếng Việt. Bé chọn 2 con vật sẽ đóng kịch câm cho ông bà đoán.",
   "ob": "Ông bà giả vờ gọi điện, nghe bé nói câu về con vật.",
   "toi": "Vè “Con rùa”: mẹ đọc chậm như rùa bò, bé bò chậm trên giường, đến câu cuối úp chăn “nằm ngủ”. Hỏi: “Rùa chậm hay nhanh? Rùa làm được gì giỏi?”.",
   "lyr": "Con rùa"
  },
  {
   "chuyen": "Con vật bí ẩn",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé dẫn: mở From Head to Toe, bé nói trước lời của con vật (“I am a giraffe…”) và làm, mẹ làm theo bé. Cuối truyện bé hỏi mẹ “Can you do it?”.",
    "b": "I am a giraffe and I bend my neck."
   },
   "zh": {
    "v": 2,
    "t": "Lần 3: 动物猜猜猜 – bé làm người đố: bé che màn hình bằng tay, mở dần cho mẹ đoán, mẹ đoán bằng tiếng Trung.",
    "b": "我会猜！(wǒ huì cāi!)"
   },
   "words": {
    "en": [
     0,
     2,
     3,
     8,
     9
    ],
    "zh": [
     6,
     7
    ]
   },
   "doi": "Con vật bí ẩn: mẹ nghĩ một con vật, bé hỏi câu Yes/No có từ tiếng Anh: “Is it big?”, “Is it tall?”, “Can it jump?”. Hỏi tối đa 5 câu rồi đoán. Đổi vai: bé nghĩ, mẹ hỏi. Mỗi lần đoán đúng được 1 sao.",
   "ob": "Ông bà nghĩ một con vật, trả lời có hoặc không để bé đoán.",
   "toi": "Bé kể lại “Ếch ngồi đáy giếng”: bé ngồi trong thùng giấy to (cái giếng) nhìn lên khoảng trần nhỏ, rồi trèo ra ngoài nhìn cả căn phòng. Bé nói: “Bầu trời to lắm!”."
  },
  {
   "chuyen": "Thử thách lớn: gọi video ông bà",
   "en": {
    "v": 2,
    "t": "Thử thách lớn: mẹ chấm sao – nói được 1 câu = 1 sao, nói đủ 3 câu tiếng Anh = thêm 2 sao, ông bà đoán đúng con vật bé đóng = thêm 1 sao. Sau đó bé chọn xem lại video thích nhất tuần (From Head to Toe hoặc Dear Zoo).",
    "b": "Hello, Grandma! I can wave!"
   },
   "zh": {
    "v": 1,
    "t": "Bé xem lại 大大小小 rồi dạy ông bà qua màn hình: 大 dang tay to, 小 thu người nhỏ."
   },
   "special": "Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung",
   "doi": "Gọi video ông bà 10 phút: bé khoe sách vườn thú, nói 3 câu tiếng Anh và 3 câu tiếng Trung đã tập. Bé đóng kịch câm 2 con vật (vươn cổ như hươu cao cổ, ôm cây nhai trúc như gấu trúc) cho ông bà đoán. Mẹ nhắn ông bà hỏi “Con nào to hơn?” để bé trả lời “大象很大”. Kết thúc bé vẫy tay “Bye-bye! 再见！”.",
   "ob": "Ông bà đoán con vật bé đóng và khen bé nói giỏi.",
   "toi": "Bé kể ông bà đã đoán đúng con nào. Mẹ đọc lại vè Ếch dưới ao thật nhỏ.",
   "lyr": "Ếch dưới ao"
  },
  {
   "chuyen": "Ôn nhẹ: sách vườn thú",
   "en": {
    "v": 2,
    "t": "Ôn nhẹ, không học từ mới: làm lại 3 động tác bé thích nhất trong From Head to Toe.",
    "b": "Good night, little panda!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại Miaomiao – Zoo 3 phút, bé chỉ con vật."
   },
   "doi": "Mở lại sách vườn thú, bé đọc cho gấu bông nghe. Mẹ hỏi 3 câu nhẹ: con nào cao nhất, con nào nhỏ nhất, con nào con thích nhất. Chỉ khen, không sửa.",
   "ob": "Ông bà nghe bé đọc sách vườn thú cho gấu bông.",
   "toi": "Kể ngắn lại truyện Ếch ngồi đáy giếng. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[127] = {
 "sub": "Bướm, ong, kiến, bọ rùa",
 "vocab": {
  "en": [
   [
    "butterfly",
    "🦋",
    "con bướm",
    false
   ],
   [
    "bee",
    "🐝",
    "con ong",
    false
   ],
   [
    "ant",
    "🐜",
    "con kiến",
    false
   ],
   [
    "ladybird",
    "🐞",
    "bọ rùa",
    false
   ],
   [
    "spider",
    "🕷️",
    "con nhện",
    false
   ],
   [
    "caterpillar",
    "🐛",
    "sâu bướm",
    false
   ],
   [
    "flower",
    "🌸",
    "bông hoa",
    false
   ],
   [
    "fly",
    "🪽",
    "bay",
    true
   ],
   [
    "crawl",
    "🧎",
    "bò",
    true
   ],
   [
    "rain",
    "🌧️",
    "mưa",
    false
   ]
  ],
  "zh": [
   [
    "蝴蝶",
    "húdié",
    "con bướm",
    "🦋"
   ],
   [
    "蜜蜂",
    "mìfēng",
    "con ong",
    "🐝"
   ],
   [
    "蚂蚁",
    "mǎyǐ",
    "con kiến",
    "🐜"
   ],
   [
    "瓢虫",
    "piáochóng",
    "bọ rùa",
    "🐞"
   ],
   [
    "虫子",
    "chóngzi",
    "con sâu, con bọ",
    "🐛"
   ],
   [
    "花",
    "huā",
    "bông hoa",
    "🌸"
   ],
   [
    "飞",
    "fēi",
    "bay",
    "🪽"
   ]
  ],
  "en_phr": [
   [
    "The bee is on the flower.",
    "bee",
    "🐝"
   ],
   [
    "I can fly like a butterfly.",
    "butterfly",
    "🦋"
   ],
   [
    "Where is the ant? It's here.",
    "ant",
    "🐜"
   ],
   [
    "The ladybird is red.",
    "ladybird",
    "🐞"
   ]
  ],
  "zh_phr": [
   [
    "蝴蝶飞，飞，飞。",
    "飞",
    "húdié fēi, fēi, fēi",
    "bướm bay, bay, bay",
    "🦋"
   ],
   [
    "这是蜜蜂。",
    "蜜蜂",
    "zhè shì mìfēng",
    "đây là con ong",
    "🐝"
   ],
   [
    "蚂蚁很小。",
    "蚂蚁",
    "mǎyǐ hěn xiǎo",
    "con kiến rất nhỏ",
    "🐜"
   ]
  ],
  "seq": [
   [
    "🥚",
    "egg",
    "蛋"
   ],
   [
    "🐛",
    "caterpillar",
    "毛毛虫"
   ],
   [
    "🍃",
    "eat leaves",
    "吃叶子"
   ],
   [
    "🦋",
    "butterfly",
    "蝴蝶"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Butterfly Ladybug Bumblebee (Sing-Along)",
    "u": "https://www.youtube.com/watch?v=iKywHSH2I3w",
    "kind": "song_action",
    "min": 3.1,
    "ch": "Super Simple Songs - Topic (audio)"
   },
   {
    "t": "The Itsy Bitsy Spider",
    "u": "https://www.youtube.com/watch?v=bne3Ix_tJL8",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The Very Hungry Caterpillar (Eric Carle reads) – nếu dài, xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=vkYmvxP0AJI",
    "kind": "story",
    "min": 6,
    "ch": "Puffin Books / Eric Carle"
   }
  ],
  "zh": [
   {
    "t": "小蜜蜂 Little Bee (ong nhỏ)",
    "u": "https://www.youtube.com/watch?v=bKjoOetqAPI",
    "kind": "song_action",
    "min": 0.7,
    "ch": "白貓工作室"
   },
   {
    "t": "Learn insects/Bugs in Chinese Mandarin 昆虫/虫子 – Mr Sun Mandarin – xem 5 phút đầu",
    "u": "https://www.youtube.com/watch?v=TdzKwhO2ruY",
    "kind": "lesson",
    "min": 5,
    "ch": "Mr Sun Mandarin"
   },
   {
    "t": "忙碌的蜜蜂 vs 懒惰的蝴蝶 Busy bee vs lazy butterfly — bilingual story with pinyin – xem 5 phút đầu",
    "u": "https://www.youtube.com/watch?v=3oorDxQpkQI",
    "kind": "story",
    "min": 5,
    "ch": "Amy StoryVerse"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: bay như bướm, bò như kiến",
   "toi_vi": [
    {
     "t": "Con kiến",
     "type": "ve",
     "lyr": "Con kiến mà leo cành đa\nLeo phải cành cộc leo ra leo vào\nCon kiến mà leo cành đào\nLeo phải cành cộc leo vào leo ra"
    },
    {
     "t": "Câu đố con kiến",
     "type": "cau_do",
     "lyr": "Nâu vàng đen đỏ\nĐi lại từng bầy\nThấy mồi tha ngay?"
    }
   ],
   "book_vi": {
    "t": "Đỗ trắng, đỗ đen (thơ)",
    "author": "Phạm Hổ",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Kể chuyện: chú sâu háu ăn",
   "toi_vi": [
    {
     "t": "Chuồn chuồn bay thấp thì mưa",
     "type": "ca_dao",
     "lyr": "Chuồn chuồn bay thấp thì mưa\nBay cao thì nắng, bay vừa thì râm"
    },
    {
     "t": "Trong đầm gì đẹp bằng sen",
     "type": "ca_dao",
     "lyr": "Trong đầm gì đẹp bằng sen\nLá xanh bông trắng lại chen nhị vàng\nNhị vàng bông trắng lá xanh\nGần bùn mà chẳng hôi tanh mùi bùn"
    }
   ],
   "book_vi": {
    "t": "Khu vườn trong tim ta",
    "author": "Phạm Quang Phúc (tác giả – họa sĩ)",
    "publisher": "(nguồn không ghi NXB)"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Gọi tên được butterfly, bee, ant, ladybird khi thấy tranh hoặc côn trùng thật"
  ],
  [
   "en",
   "Nói được câu “I can fly like a butterfly.” hoặc “The bee is on the flower.”"
  ],
  [
   "zh",
   "Nói được 蝴蝶, 蜜蜂, 蚂蚁, 花 và hát theo bài 小蜜蜂"
  ],
  [
   "vi",
   "Kể lại truyện Kiến và Châu Chấu, nói được vì sao Kiến chăm chỉ"
  ],
  [
   "td",
   "Xếp đúng thứ tự trứng → sâu → kén → bướm"
  ],
  [
   "xh",
   "Quan sát côn trùng ngoài trời mà không chạm, không làm hại"
  ],
  [
   "vd",
   "Bay, bò, đậu xuống đúng khi nhạc dừng"
  ]
 ],
 "days": [
  {
   "chuyen": "Bay như bướm",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – nghe và bay: bài Butterfly Ladybug Bumblebee (bản chỉ có tiếng, màn hình đứng yên, bé không cần nhìn). Nghe tên con nào, bé bay như con đó quanh phòng; nhạc dừng thì đậu xuống sàn. Mẹ hỏi “Are you a butterfly?” – “Yes!”.",
    "b": "Fly, butterfly, fly!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài 小蜜蜂 (ong nhỏ) rất ngắn. Bé bay vòng quanh kêu “嗡嗡嗡” (wēng wēng wēng), hết bài đậu xuống một bông hoa giấy. Mở 2 lần.",
    "b": "小蜜蜂，嗡嗡嗡！(xiǎo mìfēng, wēng wēng wēng!)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     7
    ],
    "zh": [
     1,
     5
    ]
   },
   "doi": "Vườn hoa giấy: cắt 5 bông hoa giấy to nhiều màu, đặt rải trên sàn. Bé làm bướm hoặc ong bay quanh; mẹ hô “Land on the red flower!”, bé đậu đúng bông màu đỏ. Lượt sau mẹ hô bằng tiếng Trung “飞到花上” (fēi dào huā shang – bay đến bông hoa).",
   "ob": "Ông bà hô màu hoa cho bé bay đến đậu.",
   "toi": "Kể truyện “Kiến và Châu Chấu” bằng lời của mẹ: suốt mùa hè Kiến chăm chỉ tha thức ăn về tổ, Châu Chấu chỉ ca hát rong chơi. Mùa đông tới Châu Chấu đói lạnh gõ cửa, Kiến cho bạn vào sưởi ấm. Hỏi bé: “Con giống Kiến hay Châu Chấu?”."
  },
  {
   "chuyen": "Chú nhện leo ống nước",
   "en": {
    "v": 1,
    "t": "Lần 1 – làm theo bằng ngón tay: bài The Itsy Bitsy Spider. Hai bàn tay làm nhện leo lên (up), mười ngón tay làm mưa rơi xuống (down), hai tay vòng tròn làm mặt trời. Mẹ dừng hỏi “Up or down?” – bé chỉ.",
    "b": "Up, up, up! Down comes the rain!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: bài học côn trùng của Mr Sun, xem 5 phút đầu. Mỗi con vật hiện ra, mẹ dừng, bé chỉ vào và nhắc tên: 蚂蚁 (mǎyǐ), 蝴蝶 (húdié), 蜜蜂 (mìfēng).",
    "b": "这是蚂蚁。(zhè shì mǎyǐ)"
   },
   "words": {
    "en": [
     4,
     9,
     8
    ],
    "zh": [
     2,
     0,
     1
    ]
   },
   "doi": "Đi săn côn trùng ở sân hoặc vườn: mang kính lúp nhựa. Nhìn nhưng không chạm, đứng xa ong. Tìm kiến, bướm, bọ rùa; bé chỉ và nói “Look! An ant!”. Đếm xem thấy mấy con kiến trong một hàng. Về nhà rửa tay.",
   "ob": "Ông bà dẫn bé ra vườn xem kiến, bướm, nhắc bé không chạm vào ong.",
   "toi": "Vè “Con kiến”: mẹ đọc 2 lần, hai ngón tay mẹ làm kiến bò lên tay bé, “leo ra leo vào”. Lần 2 bé làm kiến bò trên tay mẹ.",
   "lyr": "Con kiến"
  },
  {
   "chuyen": "Kiến tha mồi về tổ",
   "en": {
    "v": 0,
    "t": "Lần 2 – nhảy đóng băng: nghe lại Butterfly Ladybug Bumblebee. Mẹ bấm dừng bất chợt, gọi tên một con: “Bee!” – bé đứng im trong tư thế ong. Bé cũng được làm người bấm dừng và gọi tên cho mẹ.",
    "b": "Freeze! You are a ladybird!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: mẹ tắt tiếng ở đoạn “嗡嗡嗡”, bé tự hát. Mẹ chỉ tranh hỏi câu Yes/No “这是蜜蜂吗？” – bé trả lời “是！” hoặc “不是，这是蝴蝶！”.",
    "b": "这是蜜蜂吗？(zhè shì mìfēng ma?)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     7
    ],
    "zh": [
     1,
     0,
     6
    ]
   },
   "doi": "Thí nghiệm kiến thích gì: ở sân, đặt gần đường kiến bò một mẩu bánh mì nhỏ, một miếng chuối nhỏ và một chiếc lá. Ngồi xem 10 phút (mẹ ngồi cùng): kiến đến chỗ nào nhiều nhất? Bé đếm kiến bằng tiếng Anh. Xong rửa tay.",
   "ob": "Ông bà ngồi cạnh bé xem kiến tha mồi, cùng đếm kiến.",
   "toi": "Đọc vài bài thơ trong “Đỗ trắng, đỗ đen” (Phạm Hổ, NXB Kim Đồng). Bé chọn một bài thích nhất, mẹ đọc lại lần nữa."
  },
  {
   "chuyen": "Bọ rùa có mấy chấm?",
   "en": {
    "v": 1,
    "t": "Lần 2 – trả lời Yes/No: xem lại The Itsy Bitsy Spider. Mẹ dừng hỏi: “Is it raining?”, “Is the spider up?”, “Is the sun out?” – bé trả lời “Yes!” hoặc “No!” và làm động tác.",
    "b": "Is it raining? Yes, it is."
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại bài côn trùng (5 phút đầu), mẹ tắt tiếng. Mỗi con hiện ra, bé thử nói tên tiếng Trung trước, rồi bật tiếng kiểm tra.",
    "b": "蚂蚁很小。(mǎyǐ hěn xiǎo)"
   },
   "words": {
    "en": [
     4,
     9,
     3
    ],
    "zh": [
     2,
     0,
     1,
     3
    ]
   },
   "doi": "Bọ rùa đếm chấm: mẹ vẽ 6 con bọ rùa trên giấy, mỗi con số chấm khác nhau (1 đến 6). Bé đếm chấm bằng tiếng Anh, rồi bằng tiếng Trung, và đặt đúng thẻ số cạnh mỗi con. Bé tô đỏ cho con nhiều chấm nhất.",
   "ob": "Ông bà cùng bé đếm chấm trên bọ rùa giấy.",
   "toi": "Câu đố “con kiến”: mẹ đọc 2 lần, bé đoán. Bé kể hôm qua con thấy kiến đi từng bầy và tha gì.",
   "lyr": "Câu đố con kiến"
  },
  {
   "chuyen": "Bé dẫn bài hát",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước: nghe lại Butterfly Ladybug Bumblebee. Trước mỗi đoạn, bé hô trước tên con vật sắp hát; mẹ làm theo bé. Cuối cùng bé nói: “I can fly like a butterfly.”",
    "b": "I can fly like a butterfly."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: bé dẫn bài 小蜜蜂, mẹ bay theo. Rồi bé nói câu “蝴蝶飞，飞，飞” vừa nói vừa vỗ cánh.",
    "b": "蝴蝶飞，飞，飞。(húdié fēi, fēi, fēi)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     7,
     6
    ],
    "zh": [
     0,
     1,
     6
    ]
   },
   "doi": "Chuẩn bị vào bếp ngày mai: bé cùng mẹ rửa quả (táo, chuối, dưa chuột). Tập trước cách xếp: dùng các hình tròn giấy đỏ và xanh xếp xen kẽ thành một chú sâu dài (đỏ – xanh – đỏ – xanh). Bé nói tiếp quy luật màu.",
   "ob": "Ông bà cùng bé rửa quả và xếp sâu bằng giấy tròn.",
   "toi": "Bé kể lại “Kiến và Châu Chấu”, mẹ hỏi: “Nếu con là Kiến, con có cho Châu Chấu vào nhà không? Năm sau hai bạn sẽ làm gì?”."
  },
  {
   "chuyen": "Thử thách lớn: sâu trái cây",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng côn trùng = 1 sao, nói tên = 1 sao, nói câu “I can fly like…” = 2 sao. Xong, bé chọn bài thích nhất tuần (Butterfly Ladybug Bumblebee hoặc Itsy Bitsy Spider) để hát lại.",
    "b": "Yummy! Well done!"
   },
   "zh": {
    "v": 0,
    "t": "Bé xem lại bài 小蜜蜂 rồi “bay” mang từng lát quả đặt lên đĩa."
   },
   "special": "Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu",
   "doi": "Vào bếp làm sâu trái cây: mẹ thái sẵn táo, chuối, dưa chuột thành lát tròn (bé không dùng dao, không đứng gần bếp). Bé xếp các lát thành chú sâu dài trên đĩa, đầu là một lát táo, mắt làm bằng 2 chấm sữa chua. Gọi tên: apple – 苹果 (píngguǒ), banana – 香蕉. Đếm sâu có mấy đốt rồi cả nhà cùng ăn.",
   "ob": "Ông bà cùng bé xếp sâu trái cây và đếm số đốt.",
   "toi": "Kể lại buổi làm sâu trái cây: con dùng quả gì, sâu dài mấy đốt. Mẹ đọc vè Con kiến cho bé ngủ.",
   "lyr": "Con kiến"
  },
  {
   "chuyen": "Ôn tuần 1: dạo vườn hoa",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn một bài của tuần, hát và làm động tác 1 lần.",
    "b": "Look! A butterfly!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: hát 小蜜蜂 khi đi dạo."
   },
   "doi": "Cả nhà đi công viên hoặc vườn hoa. Tìm bướm, ong, kiến, bọ rùa (chỉ ngắm, không bắt, đứng xa ong). Bé nói “Look! A butterfly!” và “蝴蝶！”. Đếm số màu hoa nhìn thấy. Nhắc bé không hái hoa nơi công cộng.",
   "ob": "Ông bà dẫn bé ngắm hoa, hỏi “Con bướm đâu?”.",
   "toi": "Mẹ kể hồi bé mẹ hay chơi gì ngoài vườn. Bé kể hôm nay con thấy những con gì."
  },
  {
   "chuyen": "Chú sâu háu ăn",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và đếm: truyện The Very Hungry Caterpillar (nếu dài, xem 5 phút đầu). Mỗi ngày trong truyện, mẹ dừng cho bé đếm quả sâu ăn: “One apple, two pears…”. Giữa truyện hỏi: “Chuyện gì xảy ra tiếp?”.",
    "b": "What does he eat?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: truyện ong chăm chỉ và bướm lười (xem 5 phút đầu). Truyện có cả tiếng Anh nên mẹ dễ theo. Mẹ dừng hỏi bằng tiếng Việt: “Ai đang làm việc? Ai đang chơi?”, bé trả lời “蜜蜂” hoặc “蝴蝶”.",
    "b": "蜜蜂在工作。(mìfēng zài gōngzuò)"
   },
   "words": {
    "en": [
     5,
     0,
     3
    ],
    "zh": [
     1,
     0,
     5
    ]
   },
   "doi": "Sâu ăn quả: mẹ vẽ 5 loại quả trên bìa (1 táo, 2 lê, 3 mận, 4 dâu, 5 cam). Bé dùng ngón tay làm sâu “ăn” xuyên qua từng quả (mẹ đục sẵn lỗ bằng bút chì), vừa ăn vừa đếm bằng tiếng Anh. Mẹ hỏi “Is he hungry?” – “Yes!”.",
   "ob": "Ông bà đếm quả cùng bé khi ngón tay sâu ăn qua.",
   "toi": "Kể truyện “Sự tích hoa cúc trắng” bằng lời của mẹ: mẹ ốm, cô bé đi tìm thầy thuốc; ông cụ cho bông hoa trắng, bảo hoa bao nhiêu cánh thì mẹ khỏe thêm bấy nhiêu năm. Cô bé khéo léo tách mỗi cánh thành nhiều sợi nhỏ, và mẹ khỏe lại. Hỏi bé: “Cô bé thương mẹ thế nào?”."
  },
  {
   "chuyen": "Chuyện chú nhện",
   "en": {
    "v": 1,
    "t": "Lần 1 trong tuần – nghe như một câu chuyện: The Itsy Bitsy Spider. Mẹ dừng sau đoạn mưa rơi, hỏi “What happens next?” – bé đoán: nhện có leo lại không? Xem tiếp để biết.",
    "b": "What happens next?"
   },
   "zh": {
    "v": 0,
    "t": "Kể chuyện với bài 小蜜蜂: mẹ hỏi “蜜蜂去哪儿？” (mìfēng qù nǎr – ong đi đâu?), bé trả lời “花！” và bay đến bông hoa giấy. Rồi xem bài một lần để kiểm tra.",
    "b": "蜜蜂去哪儿？(mìfēng qù nǎr?)"
   },
   "words": {
    "en": [
     4,
     9,
     8
    ],
    "zh": [
     1,
     5,
     6
    ]
   },
   "doi": "Vòng đời của bướm: mẹ vẽ 4 thẻ (trứng, sâu, kén, bướm). Mẹ xáo lộn, bé xếp đúng thứ tự rồi diễn: cuộn tròn làm trứng, bò làm sâu, quấn chăn làm kén, chui ra dang tay bay làm bướm. Mỗi bước bé nói tên tiếng Anh.",
   "ob": "Ông bà xem bé diễn từ trứng thành bướm và vỗ tay.",
   "toi": "Ca dao “Chuồn chuồn bay thấp thì mưa”: mẹ đọc 2 lần, bé làm chuồn chuồn bay thấp, bay cao, bay vừa. Mai ra sân thử xem chuồn chuồn bay thế nào.",
   "lyr": "Chuồn chuồn bay thấp thì mưa"
  },
  {
   "chuyen": "Ai đang bay?",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai: xem lại The Very Hungry Caterpillar. Bé làm sâu, bò và “ăn” theo từng ngày; mẹ dừng hỏi Yes/No: “Is he big now?”, “Is he a butterfly?” – bé trả lời trước khi lật trang.",
    "b": "Is he big now? Yes, he is!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại truyện ong và bướm. Mẹ dừng hỏi bằng tiếng Trung “谁在飞？” (shéi zài fēi – ai đang bay?), bé trả lời “蝴蝶！” hoặc “蜜蜂！”.",
    "b": "谁在飞？(shéi zài fēi?)"
   },
   "words": {
    "en": [
     5,
     0,
     7
    ],
    "zh": [
     0,
     1,
     6
    ]
   },
   "doi": "Rối tất sâu háu ăn: xỏ một chiếc tất xanh vào tay làm sâu. Bé điều khiển sâu “ăn” những quả bằng giấy, kể theo ngày: “On Monday, one apple.” (mẹ nhắc nửa câu). Đến cuối, lộn tất ra thành bướm (dán đôi cánh giấy).",
   "ob": "Ông bà xem bé múa rối sâu và hỏi “Hôm nay sâu ăn gì?”.",
   "toi": "Đọc truyện tranh “Khu vườn trong tim ta” (Phạm Quang Phúc). Dừng ở 2 trang hỏi bé: “Trong vườn có những gì?”."
  },
  {
   "chuyen": "Bingo côn trùng",
   "en": {
    "v": 1,
    "t": "Lần 2 – chuyển ngữ: trước khi hát, mẹ nói tiếng Anh, bé nói tiếng Trung: “butterfly” → “蝴蝶”, “bee” → “蜜蜂”, “ant” → “蚂蚁”, “flower” → “花”. Rồi xem lại Itsy Bitsy Spider, bé hát to chữ up và down.",
    "b": "Butterfly – 蝴蝶 (húdié)!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ ngược lại: xem lại bài côn trùng (5 phút đầu); mỗi con hiện ra, mẹ nói tiếng Trung, bé nói tiếng Anh: 蚂蚁 → ant, 瓢虫 → ladybird.",
    "b": "瓢虫 – ladybird!"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     6
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Bingo côn trùng: kẻ bảng 6 ô, mỗi ô vẽ một con (bướm, ong, kiến, bọ rùa, nhện, sâu). Mẹ gọi tên bằng tiếng Trung, bé phải nói tên tiếng Anh rồi mới được đặt một tấm giấy màu cắt vuông (to bằng bàn tay) lên ô. Đủ 3 ô một hàng thì hô “Bingo!”.",
   "ob": "Ông bà gọi tên con vật cho bé chơi bingo.",
   "toi": "Bé kể lại “Sự tích hoa cúc trắng” với một bông hoa giấy: bé tự xé mỗi cánh thành nhiều sợi nhỏ như cô bé trong truyện, vừa xé vừa đếm."
  },
  {
   "chuyen": "Bé kể chuyện sâu háu ăn",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước: mở The Very Hungry Caterpillar, tắt tiếng. Bé nhìn tranh, nói quả và số lượng trước khi mẹ lật trang. Cuối truyện bé nói “I like butterflies.”",
    "b": "I like butterflies."
   },
   "zh": {
    "v": 2,
    "t": "Lần 3: bé kể lại truyện ong và bướm bằng tiếng Việt, chen 蜜蜂, 蝴蝶, 花. Bật đoạn cuối để kiểm tra.",
    "b": "我喜欢蝴蝶。(wǒ xǐhuan húdié)"
   },
   "words": {
    "en": [
     5,
     0,
     6
    ],
    "zh": [
     0,
     1,
     5
    ]
   },
   "doi": "Chuẩn bị đi chợ: bé vẽ danh sách 5 loại quả chú sâu đã ăn (táo, lê, mận, dâu, cam). Ngày mai bé sẽ đi tìm từng loại và đếm. Bé tập câu “I like strawberries.” và “我喜欢苹果”.",
   "ob": "Ông bà giúp bé vẽ danh sách quả để đi chợ.",
   "toi": "Ca dao “Trong đầm gì đẹp bằng sen”: mẹ đọc 2 lần, bé chỉ màu: lá xanh, bông trắng, nhị vàng. Ngày mai đi chợ mình tìm hoa sen nhé.",
   "lyr": "Trong đầm gì đẹp bằng sen"
  },
  {
   "chuyen": "Thử thách lớn: đi chợ tìm quả của sâu",
   "en": {
    "v": 2,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: trả lời Yes/No đúng = 1 sao, đếm đúng quả = 2 sao, kể lại một ngày trong truyện = 3 sao. Sau đó bé chọn xem lại The Very Hungry Caterpillar hoặc Itsy Bitsy Spider.",
    "b": "How many apples? Let's count!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhanh: hát 小蜜蜂 trước khi đi chợ."
   },
   "special": "Săn từ ở chợ hoặc siêu thị",
   "doi": "Đi chợ hoặc siêu thị, nắm tay bé ở chỗ đông. Bé cầm danh sách hình 5 loại quả, tìm và đánh dấu: táo, lê, mận, dâu, cam. Mỗi loại bé nói tên tiếng Anh, nói câu “I like…” hoặc “我喜欢…”. Ghé hàng hoa tìm hoa sen hoặc hoa cúc, bé nói “flower – 花”. Mua 1 loại quả bé chọn.",
   "ob": "Ông bà dẫn bé đi chợ tìm quả và hoa.",
   "toi": "Kể lại chuyến đi chợ: tìm được mấy loại quả của sâu. Mẹ đọc lại ca dao Chuồn chuồn bay thấp thì mưa.",
   "lyr": "Chuồn chuồn bay thấp thì mưa"
  },
  {
   "chuyen": "Ôn nhẹ: thế giới côn trùng",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ, không học từ mới: nghe Butterfly Ladybug Bumblebee, bé bay chậm quanh phòng rồi “đậu” lên giường.",
    "b": "Sleep tight, little caterpillar!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: hát 小蜜蜂 một lần."
   },
   "doi": "Mẹ và bé xem lại các thẻ vòng đời bướm và bảng bingo. Bé nói tên những con còn nhớ bằng tiếng Anh, tiếng Trung. Mẹ hỏi: “Tuần sau mình gieo cây, con muốn trồng cây gì?”.",
   "ob": "Ông bà nghe bé kể con sâu thành bướm thế nào.",
   "toi": "Kể ngắn lại truyện Kiến và Châu Chấu. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[128] = {
 "sub": "Hạt, cây, hoa, lá; cây lớn lên",
 "vocab": {
  "en": [
   [
    "seed",
    "🌰",
    "hạt giống",
    false
   ],
   [
    "tree",
    "🌳",
    "cái cây",
    false
   ],
   [
    "flower",
    "🌻",
    "bông hoa",
    false
   ],
   [
    "leaf",
    "🍃",
    "chiếc lá",
    false
   ],
   [
    "sun",
    "☀️",
    "mặt trời",
    false
   ],
   [
    "water",
    "💧",
    "nước",
    false
   ],
   [
    "rain",
    "🌧️",
    "mưa",
    false
   ],
   [
    "grow",
    "🌱",
    "lớn lên",
    true
   ],
   [
    "plant",
    "🪴",
    "trồng cây",
    true
   ],
   [
    "pull",
    "🥕",
    "kéo, nhổ",
    true
   ]
  ],
  "zh": [
   [
    "花",
    "huā",
    "bông hoa",
    "🌻"
   ],
   [
    "树",
    "shù",
    "cái cây",
    "🌳"
   ],
   [
    "叶子",
    "yèzi",
    "chiếc lá",
    "🍃"
   ],
   [
    "太阳",
    "tàiyáng",
    "mặt trời",
    "☀️"
   ],
   [
    "水",
    "shuǐ",
    "nước",
    "💧"
   ],
   [
    "种子",
    "zhǒngzi",
    "hạt giống",
    "🌰"
   ],
   [
    "长大",
    "zhǎngdà",
    "lớn lên",
    "🌱"
   ],
   [
    "萝卜",
    "luóbo",
    "củ cải",
    "🥕"
   ]
  ],
  "en_phr": [
   [
    "The seed needs water.",
    "water",
    "💧"
   ],
   [
    "Look! The plant can grow.",
    "grow",
    "🌱"
   ],
   [
    "I see a green leaf.",
    "leaf",
    "🍃"
   ],
   [
    "This is a big tree.",
    "tree",
    "🌳"
   ]
  ],
  "zh_phr": [
   [
    "小树长大了。",
    "长大",
    "xiǎo shù zhǎngdà le",
    "cây nhỏ lớn lên rồi",
    "🌱"
   ],
   [
    "花要喝水。",
    "水",
    "huā yào hē shuǐ",
    "hoa cần uống nước",
    "💧"
   ],
   [
    "这是叶子。",
    "叶子",
    "zhè shì yèzi",
    "đây là chiếc lá",
    "🍃"
   ]
  ],
  "seq": [
   [
    "🌰",
    "seed",
    "种子"
   ],
   [
    "🌱",
    "sprout",
    "发芽"
   ],
   [
    "🌿",
    "little plant",
    "小苗"
   ],
   [
    "🌻",
    "flower",
    "开花"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Tìm một video về hạt và cây (seed, plant, grow) trên kênh SciShow Kids – xem 5 phút đầu",
    "u": "https://www.youtube.com/channel/UCRFIPG2u1DxKLNuE3y2SjHA",
    "kind": "explainer",
    "min": 5,
    "ch": "SciShow Kids"
   },
   {
    "t": "The Seasons Song",
    "u": "https://www.youtube.com/watch?v=C_Sc5ZjdfFI",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Mr. Golden Sun",
    "u": "https://www.youtube.com/watch?v=hlzvrEfyL2Y",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The Very Hungry Caterpillar (Eric Carle reads) – nếu dài, xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=vkYmvxP0AJI",
    "kind": "story",
    "min": 6,
    "ch": "Puffin Books / Eric Carle"
   }
  ],
  "zh": [
   {
    "t": "Simple Chinese Songs for Kids: The Nature Song 大自然 (thiên nhiên)",
    "u": "https://www.youtube.com/watch?v=H2L43Sb7VSY",
    "kind": "song_action",
    "min": 1,
    "ch": "Cool Panda Chinese Learning"
   },
   {
    "t": "拔萝卜 (Bá luóbo)",
    "u": "https://www.youtube.com/watch?v=gnD1zHblo0Q",
    "kind": "song_action",
    "min": 3,
    "ch": "貝瓦兒歌 Beva Kids Song (贝瓦儿歌)"
   },
   {
    "t": "小蓓蕾组合 – 春天在哪里 Looking for Spring (mùa xuân ở đâu)",
    "u": "https://www.youtube.com/watch?v=YCGVuC_629E",
    "kind": "song_action",
    "min": 3,
    "ch": "小蓓蕾组合 (title)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: cây cần gì để lớn?",
   "toi_vi": [
    {
     "t": "Tháng giêng là tháng ăn chơi",
     "type": "ca_dao",
     "lyr": "Tháng giêng là tháng ăn chơi\nTháng hai trồng đậu, trồng khoai, trồng cà\nTháng ba thì đậu đã già\nTa đi ta hái về nhà phơi khô"
    },
    {
     "t": "Ăn quả nhớ kẻ trồng cây",
     "type": "ca_dao",
     "lyr": "Ăn quả nhớ kẻ trồng cây\nĂn khoai nhớ kẻ cho dây mà trồng"
    }
   ],
   "book_vi": {
    "t": "Từ những hạt mầm",
    "author": "(nhóm tác giả Việt, chưa rõ tên)",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Thử thách: nhổ củ cải khổng lồ",
   "toi_vi": [
    {
     "t": "Lạy trời mưa xuống",
     "type": "dong_dao",
     "lyr": "Lạy trời mưa xuống\nLấy nước tôi uống\nLấy ruộng tôi cày\nLấy đầy bát cơm\nLấy rơm đun bếp\nLạy ông nắng lên\nCho trẻ con chơi\nCho già bắt rận\nCho tôi đi cày"
    },
    {
     "t": "Câu đố quả na",
     "type": "cau_do",
     "lyr": "Quả gì nhiều mắt\nKhi chín nứt ra\nRuột trắng nõn nà\nHạt đen nhanh nhánh"
    }
   ],
   "book_vi": {
    "t": "Góc sân và khoảng trời (thơ)",
    "author": "Trần Đăng Khoa (minh họa: Phan Hà)",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được câu “The seed needs water.” / “The plant can grow.”"
  ],
  [
   "en",
   "Gọi tên được seed, tree, flower, leaf, sun, water khi chỉ vật thật"
  ],
  [
   "zh",
   "Nói được 花, 树, 叶子, 水, 太阳 và câu “小树长大了”"
  ],
  [
   "vi",
   "Kể lại Sự tích dưa hấu theo thứ tự: ra đảo – gieo hạt – có quả – được đón về"
  ],
  [
   "td",
   "Đoán trước và kiểm tra kết quả thí nghiệm cây có nắng – cây trong tối"
  ],
  [
   "xh",
   "Tự tưới cây mỗi ngày và nhắc người lớn"
  ],
  [
   "vd",
   "Diễn được hạt nảy mầm thành cây bằng cả cơ thể"
  ]
 ],
 "days": [
  {
   "chuyen": "Hạt giống là gì?",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – xem và chỉ: một video về hạt và cây trên kênh SciShow Kids (mẹ chọn video có hình hạt nảy mầm, xem 5 phút đầu). Mẹ dừng khi thấy hạt, rễ, lá, hỏi “Is it a seed?” – bé chỉ và trả lời.",
    "b": "Is it a seed? Yes, it is."
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài 大自然 (thiên nhiên) rất ngắn. Bé chỉ vào màn hình khi nghe 花 (huā) và 树 (shù). Mở 2 lần, lần 2 bé giơ tay làm cây.",
    "b": "这是花。(zhè shì huā)"
   },
   "words": {
    "en": [
     0,
     7,
     3,
     5,
     4
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Thí nghiệm gốc hành: mẹ cắt sẵn 3 gốc hành lá còn rễ, cắm vào cốc nước trong. Bé đặt cốc ở bậu cửa sổ có nắng, dán nhãn “Day 1”. Mẹ đánh dấu mực nước. Mỗi ngày bé xem rễ dài thêm chưa, mẹ thay nước.",
   "ob": "Ông bà nhắc bé ra xem cốc hành mỗi sáng.",
   "toi": "Kể truyện “Sự tích dưa hấu” bằng lời của mẹ: An Tiêm và gia đình ra một hòn đảo vắng. Anh chăm chỉ dựng nhà và gieo những hạt lạ do chim thả xuống. Hạt mọc thành quả dưa vỏ xanh, ruột đỏ, ngọt mát. Hỏi bé: “Hạt cần gì để thành cây?”."
  },
  {
   "chuyen": "Bốn mùa của cây",
   "en": {
    "v": 1,
    "t": "Lần 1 – làm động tác: bài The Seasons Song. Mùa xuân bé ngồi thụp rồi lớn dần thành cây (grow), mùa hè giơ tay làm mặt trời, mùa thu lắc tay làm lá rơi, mùa đông co ro. Mẹ dừng hỏi “Is it sunny?”.",
    "b": "The leaves fall down."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: bài 拔萝卜 (nhổ củ cải). Mẹ ôm eo bé từ phía sau, cùng kéo theo nhạc “嘿哟，嘿哟” (hēiyō). Đến lúc củ cải bật ra thì cả hai ngã nhẹ xuống đệm.",
    "b": "拔萝卜！(bá luóbo!)"
   },
   "words": {
    "en": [
     3,
     4,
     6,
     7
    ],
    "zh": [
     7
    ]
   },
   "doi": "Lá to, lá nhỏ: ra sân nhặt 6 chiếc lá rụng. Bé xếp lá từ nhỏ đến to, rồi chia theo màu (xanh, vàng, nâu). Mẹ hỏi “Is this leaf big or small?”. Đếm lá bằng tiếng Anh và tiếng Trung. Rửa tay sau khi chơi.",
   "ob": "Ông bà cùng bé nhặt lá rụng và xếp lá to, lá nhỏ.",
   "toi": "Ca dao “Tháng giêng là tháng ăn chơi”: mẹ đọc 2 lần, kể ý: tháng hai người ta trồng đậu, trồng khoai, tháng ba thì hái. Bé giơ ngón tay đếm tháng một, hai, ba.",
   "lyr": "Tháng giêng là tháng ăn chơi"
  },
  {
   "chuyen": "Cây cần gì? Thử xem!",
   "en": {
    "v": 0,
    "t": "Lần 2 – bé trả lời trước: xem lại video SciShow Kids. Mẹ dừng hỏi “What does a seed need?” – bé đoán trước (water? sun?), xem tiếp để kiểm tra. Bé nhắc câu “The seed needs water.”",
    "b": "What does a seed need?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại 大自然, mẹ chỉ hình hỏi câu Yes/No “这是树吗？” (zhè shì shù ma – đây là cây à?), bé trả lời “是！” hoặc “不是，这是花！”.",
    "b": "这是树吗？(zhè shì shù ma?)"
   },
   "words": {
    "en": [
     0,
     4,
     5,
     7
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Thí nghiệm cây cần nắng: mẹ cắt 2 ngọn cà rốt, đặt vào 2 đĩa nước nông; bé tưới thêm bằng bình xịt. Một đĩa để chỗ có nắng, một đĩa cất trong tủ tối. Bé đoán: “Đĩa nào mọc lá nhanh hơn?”. Mẹ ghi lời đoán của bé, cuối tuần mở ra kiểm tra.",
   "ob": "Ông bà cùng bé xịt nước cho 2 đĩa ngọn cà rốt.",
   "toi": "Đọc sách “Từ những hạt mầm” (NXB Kim Đồng). Dừng ở trang hạt nảy mầm, bé dùng tay diễn hạt nứt ra, mầm vươn lên."
  },
  {
   "chuyen": "Nước đi đâu trong cây?",
   "en": {
    "v": 1,
    "t": "Lần 2 – đứng im khi lá rơi: xem lại The Seasons Song. Đến mùa thu mẹ dừng, bé đứng im làm cây, mẹ thả vài chiếc lá giấy lên tay bé. Mẹ hỏi “What season is it?”, gợi ý “Autumn!”.",
    "b": "Is it autumn? Yes!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại 拔萝卜, mẹ tắt tiếng ở chữ “拔萝卜”, bé tự hô. Đếm số người kéo trong bài bằng tiếng Trung.",
    "b": "一、二、三，拔！(yī, èr, sān, bá!)"
   },
   "words": {
    "en": [
     5,
     2,
     3
    ],
    "zh": [
     7,
     4
    ]
   },
   "doi": "Thí nghiệm hoa uống nước: mẹ cắm một bông hoa trắng (hoặc cọng cần tây) vào cốc nước pha màu thực phẩm. Bé đoán chuyện gì sẽ xảy ra. Sau vài giờ, cánh hoa đổi màu: cây đã uống nước lên tận hoa. Bé nói “The flower drinks water.” – “花要喝水”.",
   "ob": "Ông bà cùng bé xem bông hoa đổi màu sau vài giờ.",
   "toi": "Ca dao “Ăn quả nhớ kẻ trồng cây”: mẹ đọc 2 lần, hỏi bé: “Quả chuối con ăn hôm nay, ai trồng nhỉ?”. Bé nói lời cảm ơn bác nông dân.",
   "lyr": "Ăn quả nhớ kẻ trồng cây"
  },
  {
   "chuyen": "Bé giải thích cho gấu bông",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé làm cô giáo: xem lại video SciShow Kids lần cuối của tuần, rồi tắt màn hình. Bé giảng cho gấu bông: “A seed needs water and sun. It can grow.” (mẹ nhắc từng nửa câu).",
    "b": "It can grow!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3: bé dẫn bài 拔萝卜, hô “嘿哟” trước, mẹ kéo theo. Cuối cùng bé nói “萝卜长大了” (luóbo zhǎngdà le – củ cải lớn rồi).",
    "b": "萝卜长大了！(luóbo zhǎngdà le!)"
   },
   "words": {
    "en": [
     0,
     5,
     4,
     7
    ],
    "zh": [
     7,
     6
    ]
   },
   "doi": "Kiểm tra thí nghiệm: đo rễ hành bằng một dải giấy, cắt dải giấy đúng chiều dài và dán vào sổ theo ngày. Xem đĩa cà rốt ngoài nắng đã mọc lá chưa (chưa mở tủ). Bé vẽ lại những gì thấy. Gom chăn gối cho pháo đài ngày mai.",
   "ob": "Ông bà xem bé đo rễ hành và dán dải giấy vào sổ.",
   "toi": "Bé kể lại “Sự tích dưa hấu” bằng cơ thể: ngồi cuộn tròn làm hạt, vươn dần lên làm cây, dang tay tròn làm quả dưa to. Mẹ hỏi “Quả dưa màu gì?”."
  },
  {
   "chuyen": "Thử thách lớn: pháo đài trong rừng",
   "en": {
    "v": 1,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng = 1 sao, nói tên = 1 sao, nói câu “The seed needs water.” = 2 sao. Xong, bé chọn video thích nhất tuần để xem lại.",
    "b": "Great job, little gardener!"
   },
   "zh": {
    "v": 1,
    "t": "Bé xem lại 拔萝卜 rồi mời cả nhà vào pháo đài cùng “kéo củ cải”."
   },
   "special": "Xây pháo đài chăn gối, kể chuyện trong pháo đài",
   "doi": "Xây pháo đài thành “túp lều trong rừng”: phủ chăn xanh lên ghế, bày chậu cây thật hoặc lá cây quanh lều. Trong lều bé kể lại Sự tích dưa hấu bằng đèn pin; dùng bóng tay chiếu lên vách làm cây lớn lên, chim bay qua. Mẹ đố bé tên tiếng Anh, tiếng Trung của những thứ trong rừng: tree, leaf, flower, 树, 叶子, 花.",
   "ob": "Ông bà vào lều nghe bé kể chuyện An Tiêm.",
   "toi": "Đọc lại ca dao Tháng giêng là tháng ăn chơi trong lều, rồi bé ngủ.",
   "lyr": "Tháng giêng là tháng ăn chơi"
  },
  {
   "chuyen": "Ôn tuần 1: trồng một chậu cây",
   "en": {
    "v": 1,
    "t": "Ôn: bé hát The Seasons Song một lần, làm cây lớn lên.",
    "b": "Let's plant a flower!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: xem lại 大自然, bé chỉ cây và hoa ngoài cửa sổ."
   },
   "doi": "Cả nhà trồng một chậu cây nhỏ (rau thơm hoặc hoa) hoặc ghé chợ hoa gần nhà. Bé đeo găng tay, xúc đất bằng xẻng nhựa, mẹ đặt cây vào chậu, bé tưới nước. Bé nói “I plant a flower.” và “种花” (zhòng huā). Rửa tay sạch sau khi làm.",
   "ob": "Ông bà cùng bé trồng chậu cây, nhắc bé tưới nước.",
   "toi": "Mẹ kể ngày xưa ở quê có cây gì to nhất. Bé đặt tên cho chậu cây mới trồng."
  },
  {
   "chuyen": "Ông Mặt Trời ơi",
   "en": {
    "v": 2,
    "t": "Lần 1 – thử thách: bài Mr. Golden Sun. Hai tay vòng tròn làm mặt trời; nghe chữ “sun” ai giơ tay trước được 1 sao. Hết bài mẹ hỏi “Is the sun hot?” – bé trả lời “Yes!”.",
    "b": "Oh Mr. Sun, please shine on me!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: bài 春天在哪里 (mùa xuân ở đâu). Mỗi khi thấy hoa trong video, bé chỉ và nói “花！”. Ai chỉ trước được 1 sao.",
    "b": "花在哪儿？(huā zài nǎr?)"
   },
   "words": {
    "en": [
     4,
     2,
     7
    ],
    "zh": [
     0,
     3
    ]
   },
   "doi": "Bảng sao chăm cây: dán bảng 7 ô lên tường. Mỗi ngày bé tưới cây và nói với cây “Grow, grow!” thì vẽ một sao. Hôm nay thêm đố nhanh 5 câu, mỗi câu 1 sao: cây cần gì? (water, sun), lá màu gì?, cây mọc từ đâu? (seed).",
   "ob": "Ông bà hỏi bé “Hôm nay con tưới cây chưa?”.",
   "toi": "Kể truyện “Cây khế” bằng lời của mẹ, nhẹ nhàng: người em chỉ có cây khế, chăm cây rất tốt; chim lạ ăn khế và chở người em ra đảo lấy một túi nhỏ vừa đủ. Người anh may túi thật to, lấy quá nhiều nên chim bay không nổi, anh phải bỏ bớt và hiểu ra không nên tham. Hỏi bé: “Ai đúng?”."
  },
  {
   "chuyen": "Ai tìm nhanh hơn?",
   "en": {
    "v": 3,
    "t": "Lần 1 trong tuần – tập trung vào chữ “grow”: xem lại The Very Hungry Caterpillar (5 phút đầu). Khi sâu ăn và to dần, bé từ từ đứng lên “lớn” theo. Mẹ dừng hỏi “Is he small or big?”.",
    "b": "He is small. Now he is big!"
   },
   "zh": {
    "v": 0,
    "t": "Thi nhanh với 大自然: mẹ nói 花, 树 hoặc 叶子, ai chỉ đúng vật thật trong nhà trước được 1 sao. Rồi xem bài một lần.",
    "b": "叶子在哪儿？(yèzi zài nǎr?)"
   },
   "words": {
    "en": [
     7,
     3,
     0
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Đi tìm ai nhanh hơn: ở sân hoặc ban công, mẹ gọi một thứ: “A green leaf!”, “Something yellow!”, “一朵花!” (yì duǒ huā – một bông hoa). Bé tìm và chỉ trong lúc mẹ đếm đến 10. Mỗi lần kịp được 1 sao. Không hái hoa của nhà người khác.",
   "ob": "Ông bà đếm đến 10 cho bé chạy tìm lá, tìm hoa.",
   "toi": "Đồng dao “Lạy trời mưa xuống”: mẹ đọc 2 lần, bé làm mưa rơi bằng ngón tay ở đoạn đầu và giơ tay đón nắng ở đoạn sau.",
   "lyr": "Lạy trời mưa xuống"
  },
  {
   "chuyen": "Đúng hay sai về cây?",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé hát trước: mở Mr. Golden Sun, mẹ tắt tiếng ở câu đầu, bé tự hát “Oh Mr. Sun, Sun”. Mẹ hỏi thêm “Do plants need the sun?” – bé trả lời “Yes, they do!”.",
    "b": "Do plants need the sun?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại 春天在哪里. Chuyển ngữ: mẹ nói tiếng Anh “flower”, bé nói “花”; “tree” → “树”; “sun” → “太阳”.",
    "b": "Sun – 太阳 (tàiyáng)!"
   },
   "words": {
    "en": [
     4,
     2,
     1
    ],
    "zh": [
     3,
     0,
     1
    ]
   },
   "doi": "Đố đúng – sai 6 câu, mỗi câu 1 sao: “A plant needs water.” (Yes!), “A tree is small.” (No!), “A seed can grow.” (Yes!), rồi tiếng Trung: “花要喝水吗？” (huā yào hē shuǐ ma) – “要！”. Lấy đĩa cà rốt trong tủ ra so với đĩa ngoài nắng: lá đĩa nào xanh hơn, đúng như bé đoán không?",
   "ob": "Ông bà cùng bé so 2 đĩa cà rốt, hỏi “Đĩa nào lá xanh hơn?”.",
   "toi": "Đọc một bài ngắn trong tập thơ “Góc sân và khoảng trời” (Trần Đăng Khoa, NXB Kim Đồng). Hỏi bé: “Ở góc sân nhà mình có gì?”."
  },
  {
   "chuyen": "Kéo củ cải khổng lồ",
   "en": {
    "v": 3,
    "t": "Lần 2 – chuyển ngữ: mẹ nói tiếng Trung, bé nói tiếng Anh: “叶子” → “leaf”, “长大” → “grow”. Rồi xem lại The Very Hungry Caterpillar, bé nói “big” hoặc “small” mỗi khi mẹ dừng.",
    "b": "长大 – grow!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 trong tuần: 拔萝卜 – cả nhà đóng vai. Mỗi người là một nhân vật trong bài, xếp hàng ôm eo nhau và đếm “一、二、三，拔！”.",
    "b": "我们一起拔！(wǒmen yìqǐ bá!)"
   },
   "words": {
    "en": [
     3,
     7,
     9
    ],
    "zh": [
     7,
     6
    ]
   },
   "doi": "Kéo củ cải khổng lồ: đặt một chiếc gối to dưới đệm ghế sofa làm củ cải. Một người kéo không ra, thêm người thứ hai, thứ ba, thêm cả gấu bông… Cả nhà ôm eo nhau, đếm tiếng Trung rồi cùng kéo. Kéo ra thì ngã nhẹ xuống đệm. Bé nói “Pull! Pull!”.",
   "ob": "Ông bà ôm eo bé cùng kéo củ cải gối.",
   "toi": "Câu đố “quả na”: mẹ đọc 2 lần, bé đoán. Nếu có quả na, cho bé xem hạt đen bên trong (mẹ bỏ hạt trước khi bé ăn).",
   "lyr": "Câu đố quả na"
  },
  {
   "chuyen": "Chuẩn bị ngày hoá trang",
   "en": {
    "v": 3,
    "t": "Lần 3 – bé kể trước: mở The Very Hungry Caterpillar, tắt tiếng. Bé kể chú sâu lớn lên thế nào, kết thúc bằng câu “I can grow, too!”.",
    "b": "I can grow, too!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại 拔萝卜 để chọn vai cho ngày mai: ông, bà, bé gái, chó, mèo, chuột. Bé nói tên vai mình chọn và tập hô “嘿哟”.",
    "b": "我是萝卜！(wǒ shì luóbo!)"
   },
   "words": {
    "en": [
     7,
     0,
     2
    ],
    "zh": [
     7,
     6
    ]
   },
   "doi": "Làm đồ hoá trang: bé chọn đóng chú sâu háu ăn, ông Mặt Trời hoặc một nhân vật trong bài nhổ củ cải. Mẹ giúp làm mũ giấy (mũ lá xanh cho củ cải, vòng tia nắng vàng cho mặt trời). Kiểm tra lần cuối rễ hành và ngọn cà rốt, bé vẽ kết quả.",
   "ob": "Ông bà nhận một vai để cùng diễn nhổ củ cải ngày mai.",
   "toi": "Bé kể lại truyện “Cây khế”: bé làm chim, giang tay chở mẹ (người em) ra đảo. Mẹ hỏi: “Túi nhỏ hay túi to thì tốt hơn?”."
  },
  {
   "chuyen": "Thử thách lớn: ngày hoá trang",
   "en": {
    "v": 2,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng = 1 sao, nói đúng lời của nhân vật = 2 sao, diễn trọn một bài = 3 sao. Sau đó bé chọn xem lại Mr. Golden Sun hoặc The Very Hungry Caterpillar.",
    "b": "Look at you! You are the sun!"
   },
   "zh": {
    "v": 1,
    "t": "Cả nhà mặc đồ hoá trang, mở 拔萝卜 và diễn theo."
   },
   "special": "Ngày hoá trang: bé đóng vai nhân vật trong video",
   "doi": "Ngày hoá trang: bé mặc đồ nhân vật đã làm. Diễn 2 tiết mục: (1) nhổ củ cải cùng cả nhà, hô “一、二、三，拔！”; (2) bé đóng sâu háu ăn, bò ăn quả giấy rồi chui vào kén chăn và bay ra thành bướm, nói “I can grow!”. Mẹ quay clip ngắn.",
   "ob": "Ông bà đóng một vai trong bài nhổ củ cải và vỗ tay cho bé.",
   "toi": "Xem lại clip. Mẹ đọc lại đồng dao Lạy trời mưa xuống, bé đọc theo câu “Lạy ông nắng lên”.",
   "lyr": "Lạy trời mưa xuống"
  },
  {
   "chuyen": "Ôn nhẹ: chậu cây của bé",
   "en": {
    "v": 2,
    "t": "Ôn nhẹ, không học từ mới: hát Mr. Golden Sun bên cửa sổ có nắng.",
    "b": "Good night, little plant!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại 大自然 một lần."
   },
   "doi": "Bé tưới chậu cây và cốc hành, kể cho mẹ nghe cây đã lớn thế nào trong 2 tuần. Bé chỉ và nói các từ còn nhớ: seed, leaf, flower, tree; 花, 树, 叶子. Mẹ chụp ảnh chậu cây.",
   "ob": "Ông bà xem chậu cây và khen bé chăm cây giỏi.",
   "toi": "Kể ngắn lại Sự tích dưa hấu. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[129] = {
 "sub": "Bác sĩ, cô giáo, công an, đầu bếp",
 "vocab": {
  "en": [
   [
    "doctor",
    "🩺",
    "bác sĩ",
    false
   ],
   [
    "teacher",
    "🧑‍🏫",
    "cô giáo",
    false
   ],
   [
    "police officer",
    "👮",
    "chú công an",
    false
   ],
   [
    "cook",
    "🧑‍🍳",
    "đầu bếp",
    false
   ],
   [
    "baker",
    "🥐",
    "thợ làm bánh",
    false
   ],
   [
    "sick",
    "🤒",
    "bị ốm",
    false
   ],
   [
    "listen",
    "👂",
    "nghe",
    true
   ],
   [
    "stir",
    "🥄",
    "khuấy",
    true
   ],
   [
    "stop",
    "🛑",
    "dừng lại",
    true
   ],
   [
    "help",
    "🤝",
    "giúp đỡ",
    true
   ]
  ],
  "zh": [
   [
    "医生",
    "yīshēng",
    "bác sĩ",
    "🩺"
   ],
   [
    "老师",
    "lǎoshī",
    "cô giáo",
    "🧑‍🏫"
   ],
   [
    "警察",
    "jǐngchá",
    "công an",
    "👮"
   ],
   [
    "厨师",
    "chúshī",
    "đầu bếp",
    "🧑‍🍳"
   ],
   [
    "病了",
    "bìng le",
    "bị ốm rồi",
    "🤒"
   ],
   [
    "帮助",
    "bāngzhù",
    "giúp đỡ",
    "🤝"
   ],
   [
    "做饭",
    "zuòfàn",
    "nấu cơm",
    "🍳"
   ]
  ],
  "en_phr": [
   [
    "I want to be a doctor.",
    "doctor",
    "🩺"
   ],
   [
    "The cook can make soup.",
    "cook",
    "🧑‍🍳"
   ],
   [
    "Stop! says the police officer.",
    "police officer",
    "👮"
   ],
   [
    "My teacher helps me.",
    "teacher",
    "🧑‍🏫"
   ]
  ],
  "zh_phr": [
   [
    "我是医生。",
    "医生",
    "wǒ shì yīshēng",
    "con là bác sĩ",
    "🩺"
   ],
   [
    "警察叔叔，你好！",
    "警察",
    "jǐngchá shūshu, nǐ hǎo!",
    "chào chú công an!",
    "👮"
   ],
   [
    "厨师做饭。",
    "厨师",
    "chúshī zuòfàn",
    "đầu bếp nấu cơm",
    "🧑‍🍳"
   ]
  ],
  "seq": [
   [
    "🤒",
    "feel sick",
    "病了"
   ],
   [
    "🏥",
    "go to the doctor",
    "看医生"
   ],
   [
    "🩺",
    "the doctor listens",
    "医生听一听"
   ],
   [
    "😊",
    "feel better",
    "好了"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "When I Grow Up",
    "u": "https://www.youtube.com/watch?v=5rdlXji2jR0",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The Muffin Man",
    "u": "https://www.youtube.com/watch?v=fXFg5QsTcLQ",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Five Little Monkeys Jumping on the Bed",
    "u": "https://www.youtube.com/watch?v=VTmmoaO2M_U",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Tìm một truyện tranh về người giúp đỡ mọi người (bác sĩ, lính cứu hoả, đầu bếp) trên kênh Brightly Storytime – xem 5 phút đầu",
    "u": "https://www.youtube.com/channel/UCvQagFNHMrGgQpYunk4rHXg",
    "kind": "story",
    "min": 5,
    "ch": "Brightly Storytime"
   }
  ],
  "zh": [
   {
    "t": "职业 – 小警察 & 小医生 宝贝中文小课堂 (nghề nghiệp: cảnh sát nhí, bác sĩ nhí)",
    "u": "https://www.youtube.com/watch?v=KXUQKIClmW0&vl=en",
    "kind": "lesson",
    "min": 4,
    "ch": "宝贝中文 Baobei Chinese"
   },
   {
    "t": "Occupations in Mandarin Chinese | 中文职业 | Talking Flashcards",
    "u": "https://www.youtube.com/watch?v=ZScMLP4J8E4",
    "kind": "lesson",
    "min": 3,
    "ch": "YEAH CHINESE"
   },
   {
    "t": "【职业1】 Occupation in Chinese | Jobs in Chinese",
    "u": "https://www.youtube.com/watch?v=4h-iBSqVGx8",
    "kind": "lesson",
    "min": 3,
    "ch": "ChineseClass365 中文加油站"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: lớn lên con muốn làm gì?",
   "toi_vi": [
    {
     "t": "Gánh gánh gồng gồng",
     "type": "dong_dao",
     "lyr": "Gánh gánh gồng gồng\nGánh sông gánh núi\nGánh củi gánh cành\nTa chạy cho nhanh\nVề xây nhà bếp\nNấu nồi cơm nếp\nChia ra năm phần\nMột phần cho mẹ\nMột phần cho cha\nMột phần cho bà\nMột phần cho chị\nMột phần cho anh"
    },
    {
     "t": "Câu đố cái thìa",
     "type": "cau_do",
     "lyr": "Tôi thường làm bạn\nVới em bé thôi\nKhi ăn cầm tôi\nDễ hơn cầm đũa\nLà cái gì?"
    },
    {
     "t": "Kéo cưa lừa xẻ",
     "type": "dong_dao"
    }
   ],
   "book_vi": {
    "t": "Đến thăm thành phố của em (bộ: Sapa mù sương, Huế miền đẹp miền thơ, …)",
    "author": "(chưa rõ tên)",
    "publisher": "NXB Trẻ"
   }
  },
  {
   "title": "Tuần Kể chuyện: những người giúp đỡ chúng ta",
   "toi_vi": [
    {
     "t": "Con gà cục tác lá chanh",
     "type": "ca_dao",
     "lyr": "Con gà cục tác lá chanh\nCon lợn ủn ỉn mua hành cho tôi\nCon chó khóc đứng khóc ngồi\nBà ơi đi chợ mua tôi đồng riềng"
    },
    {
     "t": "Câu đố cái nón",
     "type": "cau_do",
     "lyr": "Cái gì bằng lá\nChóp nhọn, vành tròn\nNgười lớn, trẻ con\nNắng, mưa đều đội?"
    }
   ],
   "book_vi": {
    "t": "Bé tập kể chuyện – Mỗi tuần một câu chuyện",
    "author": "(chưa rõ tên)",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Gọi tên được doctor, teacher, police officer, cook khi nhìn tranh hoặc đồ nghề"
  ],
  [
   "en",
   "Nói được câu “When I grow up, I want to be a …”"
  ],
  [
   "zh",
   "Nói được 医生, 老师, 警察, 厨师 và câu “我是…”"
  ],
  [
   "vi",
   "Kể lại Bánh chưng, bánh giầy: Lang Liêu làm bánh gì, vì sao vua khen"
  ],
  [
   "td",
   "Ghép đúng “việc cần giúp” với người giúp (ốm – bác sĩ, lạc – công an)"
  ],
  [
   "xh",
   "Nói được tên mình và số điện thoại của mẹ khi đóng vai bị lạc"
  ],
  [
   "vd",
   "Làm động tác nghề nghiệp: khuấy nồi, nghe tim, giơ tay ra hiệu dừng"
  ]
 ],
 "days": [
  {
   "chuyen": "Lớn lên con muốn làm gì?",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – xem và làm theo: bài When I Grow Up. Mỗi nghề bé làm động tác: bác sĩ nghe tim, cô giáo cầm sách, lính cứu hoả cầm vòi nước. Mẹ dừng hỏi “Who is this?” – bé trả lời “A doctor!”.",
    "b": "Who is this? A doctor!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài học 小警察 & 小医生 (công an nhí, bác sĩ nhí). Khi thấy công an, bé đứng nghiêm chào; khi thấy bác sĩ, bé làm động tác nghe tim. Mẹ nhắc tên: 警察 (jǐngchá), 医生 (yīshēng).",
    "b": "我是警察！(wǒ shì jǐngchá!)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     2
    ]
   },
   "doi": "Hộp nghề nghiệp: gom đồ trong nhà làm đồ nghề: nồi và thìa (đầu bếp), ống giấy làm ống nghe (bác sĩ), quyển sách (cô giáo), mũ và tấm bìa đỏ (công an). Bé bốc một món, làm động tác, mẹ đoán nghề bằng tiếng Anh. Đổi vai cho mẹ làm, bé đoán.",
   "ob": "Ông bà đoán nghề khi bé cầm đồ nghề và làm động tác.",
   "toi": "Kể truyện “Bánh chưng, bánh giầy” bằng lời của mẹ: Vua Hùng bảo các con dâng lễ vật; Lang Liêu nghèo dùng gạo nếp làm bánh vuông như đất, bánh tròn như trời. Vua khen Lang Liêu quý hạt gạo, hiếu thảo. Hỏi bé: “Lang Liêu là đầu bếp giỏi không?”."
  },
  {
   "chuyen": "Bác làm bánh",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và trả lời: bài The Muffin Man. Khi bài hỏi “Do you know the muffin man?”, mẹ dừng, bé trả lời “Yes, I know the muffin man!”. Sau bài, cả hai giả vờ nhào bột và nặn bánh.",
    "b": "Do you know the muffin man?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: thẻ nghề nghiệp. Mẹ dừng ở mỗi thẻ, bé làm động tác của nghề đó: 医生 nghe tim, 老师 cầm sách, 厨师 (chúshī) khuấy nồi. Mẹ nhắc tên tiếng Trung.",
    "b": "厨师做饭。(chúshī zuòfàn)"
   },
   "words": {
    "en": [
     4,
     3,
     7
    ],
    "zh": [
     3,
     6,
     0,
     1
    ]
   },
   "doi": "Đầu bếp nhí (chơi giả vờ, không bật bếp): bé đội mũ giấy, dùng nồi và thìa thật, “nấu súp” bằng rau củ giấy hoặc rau thật mẹ đã rửa. Bé khuấy và nói “I'm a cook. Stir, stir!”, rồi mời mẹ: “Here you are!”. Mẹ nếm giả vờ và nói “Yummy! Thank you, cook!”.",
   "ob": "Ông bà ăn giả vờ món súp của bé và khen ngon.",
   "toi": "Đồng dao “Gánh gánh gồng gồng”: mẹ đọc 2 lần, bé làm động tác gánh, chạy tại chỗ ở câu “Ta chạy cho nhanh”, rồi chia “cơm nếp” cho từng người trong nhà.",
   "lyr": "Gánh gánh gồng gồng"
  },
  {
   "chuyen": "Chú công an giao thông",
   "en": {
    "v": 0,
    "t": "Lần 2 – bé làm trước: xem lại When I Grow Up. Mẹ dừng trước mỗi nghề, bé làm động tác trước khi bài hát nói tên. Mẹ bấm dừng bất chợt: cả hai đứng im như tượng.",
    "b": "Freeze! What are you?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại 小警察 & 小医生. Bé đội mũ, đứng nghiêm và nói “我是警察”. Mẹ nói “警察叔叔，你好！” (jǐngchá shūshu, nǐ hǎo – chào chú công an).",
    "b": "警察叔叔，你好！(jǐngchá shūshu, nǐ hǎo!)"
   },
   "words": {
    "en": [
     2,
     8,
     0,
     1
    ],
    "zh": [
     2,
     0
    ]
   },
   "doi": "Chú công an giao thông: cắt 2 hình tròn đỏ và xanh. Bé làm police officer: giơ đỏ hô “Stop!”, giơ xanh hô “Go!”. Cả nhà làm ô tô đi quanh phòng. Mẹ nói thêm: “Ra đường mình luôn nắm tay người lớn.”",
   "ob": "Ông bà làm ô tô, dừng lại khi bé giơ tay hô “Stop!”.",
   "toi": "Đọc một quyển trong bộ “Đến thăm thành phố của em” (NXB Trẻ). Hỏi bé: “Ở thành phố này con thấy những ai đang làm việc?”."
  },
  {
   "chuyen": "Bác sĩ nhí",
   "en": {
    "v": 1,
    "t": "Lần 2 – đổi lời: xem lại The Muffin Man, rồi mẹ hát cùng giai điệu nhưng đổi nghề: “Do you know the doctor?”, “Do you know the cook?”. Bé trả lời “Yes, I know the doctor!” và làm động tác nghề đó.",
    "b": "Do you know the doctor? Yes, I do!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại thẻ nghề nghiệp, mẹ tắt tiếng. Bé nói tên nghề tiếng Trung trước, bật tiếng để kiểm tra.",
    "b": "这是医生。(zhè shì yīshēng)"
   },
   "words": {
    "en": [
     0,
     5,
     6,
     9
    ],
    "zh": [
     0,
     4,
     5
    ]
   },
   "doi": "Phòng khám bác sĩ nhí: gấu bông bị ốm. Bé đeo ống nghe đồ chơi (hoặc ống giấy), nghe tim gấu, bảo “Open your mouth!”, dán một miếng băng dán lên chân gấu. Bé hỏi “Are you sick?” và an ủi “You are OK now.” Không dùng thuốc thật.",
   "ob": "Ông bà đóng người ốm, để bé làm bác sĩ khám.",
   "toi": "Câu đố “cái thìa”: mẹ đọc 2 lần, bé đoán. Bé kể đầu bếp dùng thìa để làm gì.",
   "lyr": "Câu đố cái thìa"
  },
  {
   "chuyen": "Con muốn làm nghề gì?",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé hát trước: mở When I Grow Up, tắt tiếng ở câu “When I grow up I want to be a…”. Bé tự nói tên nghề mình muốn. Mẹ hỏi “What do you want to be?” – bé trả lời cả câu.",
    "b": "What do you want to be?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: bé nói tên nghề trước video. Cuối cùng mẹ dạy câu “我想当医生” (wǒ xiǎng dāng yīshēng – con muốn làm bác sĩ), bé đổi nghề mình thích vào câu.",
    "b": "我想当医生。(wǒ xiǎng dāng yīshēng)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Tập cho ngày hội nghề nghiệp Thứ Bảy: bé chọn một nghề, mẹ cùng làm đồ hoá trang từ đồ có sẵn (áo sơ mi trắng của bố làm áo bác sĩ, mũ giấy đầu bếp). Bé tập giới thiệu: “Hello! I'm a cook. When I grow up, I want to be a cook.”",
   "ob": "Ông bà giúp bé chọn đồ hoá trang nghề con thích.",
   "toi": "Bé kể lại “Bánh chưng, bánh giầy”: bé gói một hộp nhỏ bằng khăn vuông làm bánh chưng, nặn một cục đất nặn tròn làm bánh giầy. Mẹ hỏi: “Bánh nào vuông, bánh nào tròn?”."
  },
  {
   "chuyen": "Thử thách lớn: ngày hội nghề nghiệp",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng nghề = 1 sao, nói tên = 1 sao, nói câu “I want to be a…” = 2 sao. Xong, bé chọn bài thích nhất tuần (When I Grow Up hoặc The Muffin Man) để hát lại.",
    "b": "You are a great cook!"
   },
   "zh": {
    "v": 0,
    "t": "Bé xem lại 小警察 & 小医生 rồi nói câu “我是…” với nghề đang hoá trang."
   },
   "special": "Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip",
   "doi": "Ngày hội nghề nghiệp: bé mặc đồ hoá trang, đứng trên sân khấu khăn trải sàn. Bé chào, hát một đoạn When I Grow Up hoặc kể 1 phút “Con là bác sĩ, con làm…”, nói câu “When I grow up, I want to be a…” và “我想当…”. Mẹ quay clip. Cả nhà hỏi bé 1 câu về nghề đó.",
   "ob": "Ông bà xem bé biểu diễn và hỏi “Bác sĩ làm gì hả cháu?”.",
   "toi": "Xem lại clip. Mẹ đọc lại đồng dao Gánh gánh gồng gồng cho bé ngủ.",
   "lyr": "Gánh gánh gồng gồng"
  },
  {
   "chuyen": "Ôn tuần 1: cảm ơn người làm việc",
   "en": {
    "v": 1,
    "t": "Ôn: bé chọn một bài của tuần, hát 1 lần và làm động tác.",
    "b": "Thank you for your help!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn: xem lại thẻ nghề nghiệp, bé chỉ nghề của người thân."
   },
   "doi": "Cả nhà đi dạo và quan sát người đang làm việc: cô bán bánh mì, bác bảo vệ, chú công an giao thông (đứng xa, nắm tay bé), cô lao công. Bé nói nghề bằng tiếng Việt, rồi từ tiếng Anh nếu biết. Bé nói “Cảm ơn ạ!” với một người đang làm việc.",
   "ob": "Ông bà dẫn bé đi dạo, chỉ cho bé người đang làm việc.",
   "toi": "Mẹ kể bé nghe mẹ và bố làm nghề gì, một ngày đi làm thế nào. Hỏi bé: “Con muốn làm nghề của ai?”."
  },
  {
   "chuyen": "Bác sĩ nói gì?",
   "en": {
    "v": 2,
    "t": "Lần 1 – nghe chuyện: bài Five Little Monkeys Jumping on the Bed. Khi khỉ mẹ gọi bác sĩ, mẹ dừng hỏi “What did the doctor say?” – bé đoán. Xem tiếp, bé lắc ngón tay nói “No more monkeys jumping on the bed!”.",
    "b": "What did the doctor say?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: video 职业 (nghề nghiệp). Sau video mẹ làm động tác một nghề, bé đoán bằng tiếng Trung. Đoán đúng được 1 sao.",
    "b": "他是谁？(tā shì shéi?)"
   },
   "words": {
    "en": [
     0,
     5,
     8
    ],
    "zh": [
     0,
     4
    ]
   },
   "doi": "Phòng khám khỉ con: kể bằng thú bông – một chú khỉ nhảy trên gối rồi ngã. Bé làm bác sĩ: “Where does it hurt?” (mẹ nhắc), xoa đầu khỉ, rồi dặn “No more jumping on the bed!”. Bé nói thêm bằng tiếng Trung “你病了吗？” (nǐ bìng le ma – con ốm à?).",
   "ob": "Ông bà làm khỉ mẹ gọi điện cho bác sĩ nhí.",
   "toi": "Kể truyện “Nàng tiên Ốc” bằng lời của mẹ: bà cụ thả con ốc xinh vào chum nước; từ đó mỗi lần đi làm về, nhà đã sạch và có cơm canh. Bà rình xem thì thấy một cô gái hiền bước ra từ vỏ ốc, và hai bà cháu sống vui với nhau."
  },
  {
   "chuyen": "Ai giúp chúng ta?",
   "en": {
    "v": 3,
    "t": "Lần 1 – xem truyện: mẹ tìm trên kênh Brightly Storytime một truyện tranh về người giúp đỡ mọi người, xem 5 phút đầu. Mẹ dừng ở mỗi nhân vật hỏi “Who is this? What does he do?” và “Chuyện gì xảy ra tiếp?”.",
    "b": "Who helps us?"
   },
   "zh": {
    "v": 0,
    "t": "Kể chuyện với bài 小警察 & 小医生: xem lại, mẹ hỏi “谁帮助我们？” (shéi bāngzhù wǒmen – ai giúp chúng ta?), bé trả lời “警察！” hoặc “医生！”.",
    "b": "谁帮助我们？(shéi bāngzhù wǒmen?)"
   },
   "words": {
    "en": [
     0,
     2,
     3,
     9
    ],
    "zh": [
     0,
     2,
     5
    ]
   },
   "doi": "Ai giúp chúng ta: mẹ vẽ 4 thẻ người giúp (bác sĩ, công an, đầu bếp, cô giáo) và 4 thẻ việc cần giúp (bị ốm, bị lạc, đói bụng, muốn học hát). Bé ghép đúng từng cặp và nói “When I'm sick, the doctor helps me.” (mẹ nhắc nửa câu).",
   "ob": "Ông bà hỏi “Khi con ốm, ai giúp con?” và nghe bé trả lời.",
   "toi": "Ca dao “Con gà cục tác lá chanh”: mẹ đọc vui, đổi giọng cho gà, lợn, chó. Hỏi bé: “Đầu bếp nấu món gì cần lá chanh, hành, riềng?”.",
   "lyr": "Con gà cục tác lá chanh"
  },
  {
   "chuyen": "Chuyện một ngày của bác sĩ",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai: xem lại Five Little Monkeys. Bé làm bác sĩ cầm điện thoại đồ chơi, mẹ làm khỉ mẹ gọi: “Hello, doctor!”. Bé trả lời đúng lúc trong bài: “No more monkeys jumping on the bed!”.",
    "b": "Hello, doctor! Can you help?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại 职业. Mẹ dừng ở mỗi nghề hỏi câu Yes/No “他是医生吗？” (tā shì yīshēng ma – người này là bác sĩ à?), bé trả lời “是” hoặc “不是，他是警察”.",
    "b": "他是医生吗？(tā shì yīshēng ma?)"
   },
   "words": {
    "en": [
     0,
     5,
     9
    ],
    "zh": [
     0,
     2,
     3
    ]
   },
   "doi": "Kể chuyện 3 tranh “Một ngày của bác sĩ”: mẹ vẽ khung, bé vẽ: (1) bác sĩ thức dậy đi làm, (2) bác sĩ khám cho em bé ốm, (3) em bé khỏe lại vui vẻ. Bé kể theo tranh, mỗi tranh một câu, dùng từ doctor, sick, help.",
   "ob": "Ông bà nghe bé kể chuyện bác sĩ theo 3 tranh.",
   "toi": "Đọc một truyện trong “Bé tập kể chuyện – Mỗi tuần một câu chuyện” (NXB Trẻ). Bé kể lại bằng 3 câu: đầu, giữa, cuối."
  },
  {
   "chuyen": "Bị lạc thì hỏi ai?",
   "en": {
    "v": 3,
    "t": "Lần 2 – chuyển ngữ: trước khi xem, mẹ nói tiếng Trung, bé nói tiếng Anh: “医生” → “doctor”, “警察” → “police officer”, “厨师” → “cook”. Rồi xem lại truyện trên kênh Brightly, bé giơ tay khi thấy một người giúp đỡ.",
    "b": "医生 – doctor!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ ngược lại với thẻ nghề nghiệp: mẹ nói “teacher”, bé nói “老师”; “cook” → “厨师”; “doctor” → “医生”. Xem lại thẻ để kiểm tra.",
    "b": "Teacher – 老师!"
   },
   "words": {
    "en": [
     0,
     2,
     3,
     1
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Tập gọi giúp đỡ: bằng điện thoại đồ chơi, bé gọi “bác sĩ”: “Hello, doctor! My teddy is sick.” và “医生，我的熊病了” (yīshēng, wǒ de xióng bìng le). Rồi tập việc thật: nếu bị lạc ở chợ, con đứng yên, tìm chú công an hoặc cô bán hàng, nói tên mình và số điện thoại của mẹ. Bé đọc thuộc số điện thoại của mẹ.",
   "ob": "Ông bà hỏi bé số điện thoại của mẹ và tên đầy đủ của bé.",
   "toi": "Bé kể lại “Nàng tiên Ốc” bằng việc thật: khi mẹ “đi làm” ra khỏi phòng 3 phút, bé làm nàng tiên Ốc dọn gọn đồ chơi. Mẹ quay lại ngạc nhiên và cảm ơn."
  },
  {
   "chuyen": "Bé kể chuyện năm chú khỉ",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước: mở Five Little Monkeys, tắt tiếng. Bé dùng 5 ngón tay kể lại câu chuyện, nói trước lời bác sĩ. Bật tiếng đoạn cuối để kiểm tra.",
    "b": "Five little monkeys... then four!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3: bé làm động tác một nghề trước video, rồi nói câu “我是厨师” hoặc “我是老师”. Xem video để so.",
    "b": "我是厨师。(wǒ shì chúshī)"
   },
   "words": {
    "en": [
     0,
     5,
     8
    ],
    "zh": [
     3,
     0,
     1
    ]
   },
   "doi": "Chuẩn bị picnic của đầu bếp nhí: bé lên thực đơn bằng hình (bánh mì kẹp, dưa chuột, chuối, nước). Bé rửa dưa chuột, đếm lát bánh mì. Mẹ làm mũ đầu bếp bằng giấy. Phần thái do mẹ làm.",
   "ob": "Ông bà cùng bé vẽ thực đơn picnic.",
   "toi": "Câu đố “cái nón”: mẹ đọc 2 lần, bé đoán. Ngày mai đi picnic nhớ mang nón hoặc mũ.",
   "lyr": "Câu đố cái nón"
  },
  {
   "chuyen": "Thử thách lớn: picnic của đầu bếp nhí",
   "en": {
    "v": 3,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: trả lời Yes/No đúng = 1 sao, nói câu “I'm a cook.” = 2 sao, kể lại 1 đoạn chuyện = 3 sao. Sau đó bé chọn xem lại Five Little Monkeys hoặc truyện trên kênh Brightly.",
    "b": "What's for lunch, cook?"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhanh: xem lại thẻ nghề nghiệp, dừng ở 厨师 và nói “我是厨师”."
   },
   "special": "Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung",
   "doi": "Picnic của đầu bếp nhí: bé đội mũ đầu bếp, trải khăn ở sân. Mẹ thái sẵn dưa chuột, bé tự kẹp bánh mì với dưa chuột và trứng luộc (mẹ bóc). Bé phục vụ từng người: “Here you are!” và “给你！”, người nhận nói “Thank you, cook!”. Gọi tên món: bread, egg, 面包, 鸡蛋 (jīdàn). Rửa tay trước khi làm và ăn.",
   "ob": "Ông bà nhận bánh bé làm, khen “đầu bếp giỏi quá”.",
   "toi": "Kể lại buổi picnic: con làm mấy cái bánh, ai khen con. Mẹ đọc lại ca dao Con gà cục tác lá chanh.",
   "lyr": "Con gà cục tác lá chanh"
  },
  {
   "chuyen": "Ôn nhẹ: hộp nghề nghiệp",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ, không học từ mới: hát When I Grow Up một lần, bé chọn nghề cho từng người trong nhà.",
    "b": "Good night, doctor!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại 小警察 & 小医生 một lần."
   },
   "doi": "Mở lại hộp nghề nghiệp, bé chọn 3 món và nói nghề bằng tiếng Anh hoặc tiếng Trung. Mẹ hỏi: “Tuần tới mình học lính cứu hoả, nông dân, phi công – con thích nghề nào?”.",
   "ob": "Ông bà nghe bé kể con muốn làm nghề gì.",
   "toi": "Kể ngắn lại truyện Bánh chưng, bánh giầy. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[130] = {
 "sub": "Lính cứu hoả, nông dân, phi công",
 "vocab": {
  "en": [
   [
    "firefighter",
    "🧑‍🚒",
    "lính cứu hoả",
    false
   ],
   [
    "fire truck",
    "🚒",
    "xe cứu hoả",
    false
   ],
   [
    "ladder",
    "🪜",
    "cái thang",
    false
   ],
   [
    "farmer",
    "🧑‍🌾",
    "bác nông dân",
    false
   ],
   [
    "cow",
    "🐄",
    "con bò",
    false
   ],
   [
    "pilot",
    "🧑‍✈️",
    "phi công",
    false
   ],
   [
    "plane",
    "✈️",
    "máy bay",
    false
   ],
   [
    "climb",
    "🧗",
    "leo, trèo",
    true
   ],
   [
    "spray",
    "💦",
    "phun nước",
    true
   ],
   [
    "siren",
    "🚨",
    "còi báo",
    false
   ]
  ],
  "zh": [
   [
    "消防员",
    "xiāofángyuán",
    "lính cứu hoả",
    "🧑‍🚒"
   ],
   [
    "消防车",
    "xiāofángchē",
    "xe cứu hoả",
    "🚒"
   ],
   [
    "农民",
    "nóngmín",
    "nông dân",
    "🧑‍🌾"
   ],
   [
    "牛",
    "niú",
    "con bò",
    "🐄"
   ],
   [
    "飞机",
    "fēijī",
    "máy bay",
    "✈️"
   ],
   [
    "医生",
    "yīshēng",
    "bác sĩ",
    "🩺"
   ],
   [
    "警察",
    "jǐngchá",
    "công an",
    "👮"
   ]
  ],
  "en_phr": [
   [
    "The firefighter can climb the ladder.",
    "ladder",
    "🪜"
   ],
   [
    "The farmer has a cow.",
    "farmer",
    "🧑‍🌾"
   ],
   [
    "I am a pilot. Let's fly!",
    "pilot",
    "🧑‍✈️"
   ],
   [
    "Here comes the fire truck!",
    "fire truck",
    "🚒"
   ]
  ],
  "zh_phr": [
   [
    "我是消防员。",
    "消防员",
    "wǒ shì xiāofángyuán",
    "con là lính cứu hoả",
    "🧑‍🚒"
   ],
   [
    "农民种菜。",
    "农民",
    "nóngmín zhòng cài",
    "bác nông dân trồng rau",
    "🧑‍🌾"
   ],
   [
    "飞机飞得高。",
    "飞机",
    "fēijī fēi de gāo",
    "máy bay bay cao",
    "✈️"
   ]
  ],
  "seq": [
   [
    "🚨",
    "hear the siren",
    "呜呜呜"
   ],
   [
    "🚒",
    "drive the fire truck",
    "开消防车"
   ],
   [
    "🪜",
    "climb the ladder",
    "爬梯子"
   ],
   [
    "💦",
    "spray water",
    "喷水"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Jobs Song | When I Grow Up | Dream Jobs for Kids",
    "u": "https://www.youtube.com/watch?v=-t_yns2sMB0",
    "kind": "explainer",
    "min": 2.7,
    "ch": "Kiddy Sings - Educational Songs for Kids"
   },
   {
    "t": "Here Comes The Fire Truck | + More Kids Songs – chỉ xem bài đầu (khoảng 3 phút), dừng trước các bài sau",
    "u": "https://www.youtube.com/watch?v=zk5HGN8JXXk",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The Farmer in the Dell",
    "u": "https://www.youtube.com/watch?v=E-krsNziXEw",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "When I Grow Up",
    "u": "https://www.youtube.com/watch?v=5rdlXji2jR0",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "Community helpers | people who help us | Jobs in Chinese 【ENG SUB】 – xem 5 phút đầu",
    "u": "https://www.youtube.com/watch?v=p6exUdRDFJE",
    "kind": "lesson",
    "min": 5,
    "ch": "ChineseClass365 中文加油站"
   },
   {
    "t": "交通工具 中文 | Learn Transportation in Chinese (phương tiện giao thông)",
    "u": "https://www.youtube.com/watch?v=DfGWiJ0a_-g",
    "kind": "lesson",
    "min": 4,
    "ch": "ChineseClass365 中文加油站"
   },
   {
    "t": "Learn to sing《王老先生有块地》Old MacDonald Had A Farm — lyrics in characters, English and pinyin – xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=e3PZlUbeAR8",
    "kind": "lesson",
    "min": 8.7,
    "ch": "ChineseWithPing 跟萍学中文"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: nước, thang và máy bay giấy",
   "toi_vi": [
    {
     "t": "Rủ nhau đi cấy đi cày",
     "type": "ca_dao",
     "lyr": "Rủ nhau đi cấy đi cày\nBây giờ khó nhọc có ngày phong lưu\nTrên đồng cạn, dưới đồng sâu\nChồng cày vợ cấy, con trâu đi bừa"
    },
    {
     "t": "Câu đố con trâu",
     "type": "cau_do",
     "lyr": "Con gì ăn cỏ\nĐầu có 2 sừng\nLỗ mũi buộc thừng\nKéo cày rất giỏi."
    }
   ],
   "book_vi": {
    "t": "Tập tục quê em",
    "author": "(nhóm tác giả Việt, chưa rõ tên)",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Thử thách: nghề bí mật",
   "toi_vi": [
    {
     "t": "Trâu ơi ta bảo trâu này",
     "type": "ca_dao",
     "lyr": "Trâu ơi ta bảo trâu này\nTrâu ra ngoài ruộng trâu cày với ta\nCấy cày vốn nghiệp nông gia\nTa đây trâu đấy ai mà quản công\nBao giờ cây lúa còn bông\nThì còn ngọn cỏ ngoài đồng trâu ăn"
    },
    {
     "t": "Thằng Cuội ngồi gốc cây đa",
     "type": "dong_dao",
     "lyr": "Thằng Cuội ngồi gốc cây đa\nĐể trâu ăn lúa gọi cha ời ời\nCha còn cắt cỏ trên trời\nMẹ còn cưỡi ngựa đi mời quan viên\nÔng thì cầm bút cầm nghiên\nÔng thì cầm tiền đi chuộc lá đa"
    }
   ],
   "book_vi": {
    "t": "Vòng quanh thế giới",
    "author": "(chưa rõ tên)",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Gọi tên được firefighter, farmer, pilot và đồ nghề fire truck, ladder, plane"
  ],
  [
   "en",
   "Nói được câu “The farmer has a cow.” / “I am a pilot.”"
  ],
  [
   "zh",
   "Nói được 消防员, 农民, 飞机 và câu “我是消防员”"
  ],
  [
   "vi",
   "Kể lại Cây tre trăm đốt với câu thần chú “khắc nhập, khắc xuất”"
  ],
  [
   "td",
   "Thử và so sánh: máy bay giấy nào bay xa hơn, bình xịt nào phun xa hơn"
  ],
  [
   "xh",
   "Hỏi ông bà “Ngày xưa ông bà làm nghề gì?” khi gọi video"
  ],
  [
   "vd",
   "Bước đúng từng bậc thang dán trên sàn, đếm đến 10"
  ]
 ],
 "days": [
  {
   "chuyen": "Máy bay giấy bay xa",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Lần 1 – xem và làm: Jobs Song. Mẹ dừng ở mỗi nghề, bé làm một động tác cho người đó (phi công dang tay bay, nông dân cuốc đất, đầu bếp khuấy nồi). Mẹ nhắc tên tiếng Anh.",
    "b": "Look! A pilot!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài học người giúp đỡ cộng đồng (xem 5 phút đầu, có phụ đề tiếng Anh). Mẹ dừng ở mỗi nghề, bé nhắc tên tiếng Trung: 消防员 (xiāofángyuán), 警察, 医生.",
    "b": "这是消防员。(zhè shì xiāofángyuán)"
   },
   "words": {
    "en": [
     5,
     3,
     0,
     6
    ],
    "zh": [
     0,
     6,
     5
    ]
   },
   "doi": "Thí nghiệm máy bay giấy: mẹ gấp 2 chiếc máy bay giấy, một chiếc cánh rộng, một chiếc cánh hẹp. Bé làm phi công phóng từng chiếc từ cùng một vạch, đếm bước xem chiếc nào bay xa hơn. Bé nói “I'm a pilot! Let's fly!”. Không phóng vào mặt người.",
   "ob": "Ông bà cùng bé phóng máy bay giấy và đếm bước chân.",
   "toi": "Kể truyện “Cây tre trăm đốt” bằng lời của mẹ: anh nông dân chăm chỉ được hứa gả con gái, nhưng phú ông bắt đi tìm cây tre trăm đốt. Ông Bụt dạy câu thần chú “khắc nhập” để các đốt tre dính lại, “khắc xuất” để tách ra. Phú ông tò mò chạm vào thì dính chặt, đành giữ lời hứa."
  },
  {
   "chuyen": "Xe cứu hoả đến rồi",
   "en": {
    "v": 1,
    "t": "Lần 1 – làm theo: bài Here Comes The Fire Truck, chỉ xem bài đầu. Bé kêu còi “nee-naw”, leo thang tại chỗ (climb), cầm vòi phun nước (spray). Hết bài đầu là mẹ tắt.",
    "b": "Here comes the fire truck!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: bài học phương tiện 交通工具. Mỗi xe hiện ra, bé chỉ và nhắc tên; dừng lâu ở 飞机 (fēijī): bé dang tay làm máy bay.",
    "b": "飞机！(fēijī!)"
   },
   "words": {
    "en": [
     1,
     0,
     2,
     7,
     8,
     9
    ],
    "zh": [
     4
    ]
   },
   "doi": "Thang của lính cứu hoả: dán băng dính giấy trên sàn thành một chiếc thang 10 bậc. Bé bước vào từng ô, đếm bằng tiếng Anh khi đi lên, đếm tiếng Trung khi đi xuống. Đến đỉnh thang bé “cứu” một gấu bông và nói “I can climb!”.",
   "ob": "Ông bà đếm cùng bé khi bé bước trên thang băng dính.",
   "toi": "Ca dao “Rủ nhau đi cấy đi cày”: mẹ đọc 2 lần, bé làm động tác cấy lúa (cúi xuống cắm tay), cày ruộng (đẩy hai tay). Hỏi: “Bác nông dân làm việc ở đâu?”.",
   "lyr": "Rủ nhau đi cấy đi cày"
  },
  {
   "chuyen": "Phun nước xa bao nhiêu?",
   "en": {
    "v": 0,
    "t": "Lần 2 – bé nói trước: xem lại Jobs Song. Mẹ dừng trước mỗi nghề, bé đoán tên tiếng Anh. Mẹ hỏi “What does a farmer do?” – bé làm động tác trả lời.",
    "b": "What does a farmer do?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại bài người giúp đỡ cộng đồng (5 phút đầu). Mẹ hỏi câu Yes/No “他是消防员吗？” (tā shì xiāofángyuán ma), bé trả lời “是！” hoặc “不是，他是警察”.",
    "b": "他是消防员吗？(tā shì xiāofángyuán ma?)"
   },
   "words": {
    "en": [
     0,
     3,
     5,
     8
    ],
    "zh": [
     0,
     6,
     5
    ]
   },
   "doi": "Thí nghiệm phun nước ở sân (không dùng lửa thật): bé vẽ ngọn lửa bằng sáp lên tấm bìa, dựng vào tường. Bé làm firefighter, dùng bình xịt nước phun từ 3 khoảng cách: gần, vừa, xa. Đứng ở đâu thì nước tới được? Mẹ luôn đứng cạnh. Bé nói “Spray! Spray!”.",
   "ob": "Ông bà đứng cạnh khi bé dùng bình xịt nước “dập lửa” bằng bìa.",
   "toi": "Đọc sách “Tập tục quê em” (NXB Kim Đồng), chọn trang có cảnh làng quê, đồng ruộng. Hỏi bé: “Ở quê, mọi người làm những việc gì?”."
  },
  {
   "chuyen": "Sữa từ đâu ra?",
   "en": {
    "v": 1,
    "t": "Lần 2 – trả lời Yes/No: xem lại bài đầu Here Comes The Fire Truck. Mẹ dừng hỏi: “Is the fire truck red?”, “Can the firefighter climb?” – bé trả lời trước và làm động tác.",
    "b": "Is the fire truck red? Yes!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại 交通工具, mẹ tắt tiếng. Bé thử nói tên xe trước, bật tiếng kiểm tra. Mẹ hỏi “飞机飞得高吗？” (fēijī fēi de gāo ma – máy bay bay cao không?), bé trả lời “高！” (gāo – cao).",
    "b": "飞机飞得高。(fēijī fēi de gāo)"
   },
   "words": {
    "en": [
     1,
     7,
     2,
     9
    ],
    "zh": [
     4,
     1
    ]
   },
   "doi": "Khám phá sữa: bày 3 cốc nhỏ: sữa tươi, sữa chua, một miếng phô mai. Mẹ kể: bác nông dân nuôi bò, bò cho sữa, từ sữa làm ra sữa chua và phô mai. Bé nếm từng thứ và nói “I like milk.” Mẹ dạy: sữa tiếng Trung là 牛奶 (niúnǎi) – có chữ 牛 là con bò.",
   "ob": "Ông bà cùng bé nếm sữa, sữa chua và kể về con bò.",
   "toi": "Câu đố “con trâu”: mẹ đọc 2 lần, bé đoán. Mẹ hỏi: “Ngày xưa ai giúp bác nông dân cày ruộng?”.",
   "lyr": "Câu đố con trâu"
  },
  {
   "chuyen": "Bé giới thiệu các nghề",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé làm cô giáo: xem Jobs Song lần cuối của tuần, rồi tắt màn hình. Bé giới thiệu với gấu bông: “A farmer has a cow. A pilot flies a plane.” (mẹ nhắc nửa câu đầu).",
    "b": "A pilot flies a plane."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: bé nói tên nghề tiếng Trung trước video. Rồi mẹ dạy “我想当消防员” (wǒ xiǎng dāng xiāofángyuán – con muốn làm lính cứu hoả), bé thay bằng nghề mình thích.",
    "b": "我想当飞行员。(wǒ xiǎng dāng fēixíngyuán)"
   },
   "words": {
    "en": [
     3,
     4,
     5,
     6
    ],
    "zh": [
     0,
     2,
     4
    ]
   },
   "doi": "Chuẩn bị sách nhỏ “When I grow up”: mẹ gấp 2 tờ A4 thành sách 8 trang. Bé vẽ 6 nghề đã học (bác sĩ, cô giáo, công an, đầu bếp, lính cứu hoả, nông dân, phi công – chọn 6). Trang cuối bé vẽ chính mình khi lớn lên.",
   "ob": "Ông bà hỏi bé “Lớn lên con muốn làm gì?” khi bé vẽ.",
   "toi": "Bé kể lại “Cây tre trăm đốt” bằng đồ chơi lắp ghép: nói “khắc nhập” thì ghép các khối thành cây tre dài, nói “khắc xuất” thì tách ra. Mẹ đóng phú ông bị dính vào cây tre."
  },
  {
   "chuyen": "Thử thách lớn: sách nghề nghiệp",
   "en": {
    "v": 1,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: chọn đúng = 1 sao, nói tên nghề = 1 sao, nói câu “The farmer has a cow.” = 2 sao. Xong, bé chọn video thích nhất tuần để xem lại.",
    "b": "What a great book!"
   },
   "zh": {
    "v": 1,
    "t": "Bé xem lại 交通工具, dừng ở 飞机 và nói trang phi công trong sách: “这是飞机”."
   },
   "special": "Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần",
   "doi": "Hoàn thành sách “When I grow up – 我长大了”: mỗi trang một nghề, mẹ viết tên tiếng Anh và tiếng Trung. Bé dán thêm hình từ báo cũ (máy bay, xe cứu hoả, con bò). Bé đọc cả quyển cho cả nhà: “This is a firefighter. 这是消防员.”",
   "ob": "Ông bà nghe bé đọc sách nghề nghiệp.",
   "toi": "Đặt sách cạnh gối. Mẹ đố lại câu đố con trâu, bé trả lời nhanh.",
   "lyr": "Câu đố con trâu"
  },
  {
   "chuyen": "Ôn tuần 1: nhìn máy bay, xe cứu hoả",
   "en": {
    "v": 0,
    "t": "Ôn: bé chọn một video của tuần, xem 1 lần rồi mở sách nghề nghiệp chỉ theo.",
    "b": "Look! A plane in the sky!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: xem lại bài người giúp đỡ cộng đồng 3 phút."
   },
   "doi": "Cả nhà đi dạo: đi ngang trạm cứu hoả (đứng ngoài xem xe đỏ), ngước nhìn máy bay trên trời, hoặc ghé ruộng rau, chợ có hàng rau của bác nông dân. Nắm tay bé khi qua đường. Bé nói từ tiếng Anh, tiếng Trung cho mỗi thứ thấy được.",
   "ob": "Ông bà chỉ cho bé xe cứu hoả hoặc máy bay khi đi dạo.",
   "toi": "Mẹ kể một chuyện thật: mẹ đã đi máy bay lần nào chưa, hoặc mẹ từng thấy lính cứu hoả làm việc. Bé đặt một câu hỏi cho mẹ."
  },
  {
   "chuyen": "Bác nông dân trên đồng",
   "en": {
    "v": 2,
    "t": "Lần 1 – vòng tròn ai nhanh: bài The Farmer in the Dell. Bé bày thú bông và búp bê làm các nhân vật. Mẹ dừng trước mỗi câu hỏi “Who's next?”; bé chọn đúng con vật trước được 1 sao.",
    "b": "The farmer in the dell!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: bài 王老先生有块地 (xem đoạn đầu 5 phút). Mỗi con vật trong bài, bé kêu tiếng của con đó trước video. Mẹ nhắc 牛 (niú) khi đến con bò.",
    "b": "牛，哞哞哞！(niú, mōu mōu mōu!)"
   },
   "words": {
    "en": [
     3,
     4
    ],
    "zh": [
     2,
     3
    ]
   },
   "doi": "Đố nghề có tính sao: mẹ làm 6 động tác (phun nước, lái máy bay, cuốc đất, khuấy nồi, nghe tim, giơ tay ra hiệu dừng). Bé đoán nghề: nói tiếng Anh được 1 sao, thêm tiếng Trung được 2 sao. Đổi vai: bé làm, mẹ đoán.",
   "ob": "Ông bà làm động tác nghề cho bé đoán.",
   "toi": "Kể truyện “Sự tích chú Cuội” bằng lời của mẹ: Cuội tìm được cây đa lá chữa lành vết thương, đem về trồng và dặn chỉ tưới nước sạch. Một hôm cây đa bật gốc bay lên trời, Cuội níu rễ bay theo lên tận cung trăng. Hỏi bé: “Cuội lên trăng mà không cần máy bay, lạ không?”."
  },
  {
   "chuyen": "Ai nhanh hơn: chạy lấy đồ nghề",
   "en": {
    "v": 3,
    "t": "Lần 1 trong tuần – thi làm nhanh: bài When I Grow Up. Mỗi nghề vang lên, ai làm động tác đúng trước được 1 sao. Mẹ cố tình chậm để bé thắng nhiều.",
    "b": "Who is faster?"
   },
   "zh": {
    "v": 0,
    "t": "Thi nhanh với bài người giúp đỡ cộng đồng (5 phút đầu): mỗi nghề hiện ra, ai nói tên tiếng Trung trước được 1 sao.",
    "b": "你真快！(nǐ zhēn kuài!)"
   },
   "words": {
    "en": [
     0,
     5,
     3
    ],
    "zh": [
     0,
     6,
     5
    ]
   },
   "doi": "Chạy tiếp sức đồ nghề: đặt ở cuối phòng: ống giấy làm vòi nước (lính cứu hoả), máy bay đồ chơi (phi công), mũ (công an), nồi (đầu bếp), bó rau (nông dân). Mẹ hô nghề bằng tiếng Anh hoặc tiếng Trung, bé chạy lấy đúng đồ mang về. Dọn đường chạy, mẹ đứng gần.",
   "ob": "Ông bà hô tên nghề cho bé chạy lấy đồ nghề.",
   "toi": "Ca dao “Trâu ơi ta bảo trâu này”: mẹ đọc chậm 2 lần, bé làm con trâu đi cày. Mẹ nói: “Bác nông dân và con trâu là bạn làm việc cùng nhau.”",
   "lyr": "Trâu ơi ta bảo trâu này"
  },
  {
   "chuyen": "Đúng hay sai?",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé hát trước: mở The Farmer in the Dell, tắt tiếng câu đầu, bé tự hát “The farmer in the dell”. Mẹ hỏi Yes/No: “Does the farmer have a cow?” – bé trả lời “Yes, he does!”.",
    "b": "Does the farmer have a cow?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại đoạn đầu 王老先生有块地. Dừng ở con bò, mẹ hỏi “这是牛吗？” (zhè shì niú ma), bé trả lời “是！这是牛”.",
    "b": "这是牛吗？(zhè shì niú ma?)"
   },
   "words": {
    "en": [
     3,
     4
    ],
    "zh": [
     3,
     2
    ]
   },
   "doi": "Đúng hay sai 6 câu, mỗi câu 1 sao: “A pilot flies a plane.” (Yes!), “A firefighter cooks soup.” (No!), “A farmer has a cow.” (Yes!), rồi tiếng Trung: “消防员开飞机吗？” (xiāofángyuán kāi fēijī ma) – “不！”. Đổi vai để bé nói câu đúng – sai cho mẹ.",
   "ob": "Ông bà nói câu đúng – sai về các nghề cho bé sửa.",
   "toi": "Đọc sách “Vòng quanh thế giới” (NXB Kim Đồng). Mẹ hỏi: “Muốn đi vòng quanh thế giới, mình cần ai lái máy bay?” – “Pilot! 飞行员!”."
  },
  {
   "chuyen": "Tập 3 câu cho ông bà",
   "en": {
    "v": 3,
    "t": "Lần 2 – chuyển ngữ: mẹ nói tiếng Trung, bé nói tiếng Anh: “飞机” → “plane”, “农民” → “farmer”, “消防员” → “firefighter”. Rồi xem lại When I Grow Up, bé nói nghề trước bài hát.",
    "b": "飞机 – plane!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ ngược lại với 交通工具: mẹ nói “plane”, bé nói “飞机”; “fire truck” → “消防车”. Xem lại video để kiểm tra.",
    "b": "Plane – 飞机!"
   },
   "words": {
    "en": [
     6,
     3,
     0,
     5
    ],
    "zh": [
     4,
     2,
     0,
     1
    ]
   },
   "doi": "Tập cho buổi gọi video ông bà: 3 câu tiếng Anh (“I want to be a pilot.”, “The fire truck is red.”, “I can climb.”) và 3 câu tiếng Trung (“我想当医生”, “这是飞机”, “谢谢”). Bé chuẩn bị một câu hỏi cho ông bà bằng tiếng Việt: “Ngày xưa ông bà làm nghề gì ạ?”.",
   "ob": "Ông bà nghĩ trước câu trả lời: ngày xưa ông bà làm nghề gì.",
   "toi": "Đồng dao “Thằng Cuội ngồi gốc cây đa”: mẹ đọc vui 2 lần, bé làm động tác: ngồi gốc đa, gọi “ời ời”, cưỡi ngựa, cầm bút. Hỏi bé: “Trong bài có những ai làm việc gì?”.",
   "lyr": "Thằng Cuội ngồi gốc cây đa"
  },
  {
   "chuyen": "Nghề bí mật",
   "en": {
    "v": 0,
    "t": "Thử thách ai nói trước: xem lại Jobs Song (lần 1 trong tuần này). Trước mỗi nghề, bé nói một từ về việc người đó làm (“fly!”, “cook!”, “help!”) trước video.",
    "b": "Fly! The pilot can fly!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 trong tuần: xem lại bài người giúp đỡ cộng đồng, bé đố mẹ: bé bấm dừng và hỏi “他是谁？”, mẹ trả lời bằng tiếng Trung.",
    "b": "他是谁？(tā shì shéi?)"
   },
   "words": {
    "en": [
     5,
     6,
     0,
     3
    ],
    "zh": [
     0,
     6,
     5
    ]
   },
   "doi": "Nghề bí mật: mẹ nghĩ một nghề, bé hỏi câu Yes/No có từ tiếng Anh: “Do you fly a plane?”, “Do you have a cow?”, “Do you climb a ladder?”. Tối đa 5 câu thì đoán. Đổi vai: bé nghĩ, mẹ hỏi. Đoán đúng 1 sao.",
   "ob": "Ông bà nghĩ một nghề, trả lời có hoặc không để bé đoán.",
   "toi": "Bé kể lại “Sự tích chú Cuội”: bé đứng trên sàn giơ tay níu “rễ cây” (một chiếc khăn mẹ cầm), giả vờ bay lên trăng. Mẹ hỏi: “Trên trăng Cuội làm gì?”."
  },
  {
   "chuyen": "Thử thách lớn: gọi video ông bà",
   "en": {
    "v": 2,
    "t": "Thử thách lớn: mẹ chấm sao – nói được 1 câu = 1 sao, nói đủ 3 câu tiếng Anh = thêm 2 sao, hỏi được ông bà về nghề = thêm 1 sao. Sau đó bé chọn xem lại video thích nhất tuần (The Farmer in the Dell hoặc When I Grow Up).",
    "b": "Hello, Grandpa! I want to be a pilot!"
   },
   "zh": {
    "v": 0,
    "t": "Bé xem lại bài người giúp đỡ cộng đồng rồi đố ông bà: “他是谁？”."
   },
   "special": "Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung",
   "doi": "Gọi video ông bà 10 phút: bé mặc đồ một nghề, khoe sách nghề nghiệp, nói 3 câu tiếng Anh và 3 câu tiếng Trung. Bé hỏi “Ngày xưa ông bà làm nghề gì ạ?” và nghe ông bà kể. Bé thử nói tên nghề của ông bà bằng tiếng Anh nếu đã học (farmer, teacher, doctor…). Kết thúc: “Bye-bye! 再见！”.",
   "ob": "Ông bà kể cho bé nghe ngày xưa ông bà làm nghề gì.",
   "toi": "Bé kể lại ông bà ngày xưa làm nghề gì. Mẹ đọc lại ca dao Trâu ơi ta bảo trâu này.",
   "lyr": "Trâu ơi ta bảo trâu này"
  },
  {
   "chuyen": "Ôn nhẹ: sách nghề nghiệp",
   "en": {
    "v": 3,
    "t": "Ôn nhẹ, không học từ mới: hát When I Grow Up, mỗi người trong nhà chọn một nghề làm động tác.",
    "b": "Sweet dreams, little firefighter!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: xem lại 交通工具 một lần, bé dang tay bay khi thấy 飞机."
   },
   "doi": "Mở lại sách nghề nghiệp, bé đọc cho gấu bông. Mẹ hỏi: “Trong các nghề, nghề nào giúp người ốm? Nghề nào trồng rau?”. Chỉ khen, không sửa.",
   "ob": "Ông bà nghe bé đọc sách nghề nghiệp.",
   "toi": "Kể ngắn lại truyện Cây tre trăm đốt. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[131] = {
 "sub": "Đá bóng, bơi, chạy",
 "vocab": {
  "en": [
   [
    "football",
    "⚽",
    "bóng đá",
    false
   ],
   [
    "swim",
    "🏊",
    "bơi",
    true
   ],
   [
    "run",
    "🏃",
    "chạy",
    true
   ],
   [
    "kick",
    "🦵",
    "đá",
    true
   ],
   [
    "throw",
    "🤾",
    "ném",
    true
   ],
   [
    "catch",
    "🧤",
    "bắt",
    true
   ],
   [
    "ride a bike",
    "🚲",
    "đạp xe",
    true
   ],
   [
    "walk",
    "🚶",
    "đi bộ",
    true
   ],
   [
    "tiptoe",
    "🩰",
    "đi nhón chân",
    true
   ],
   [
    "stop",
    "🛑",
    "dừng lại",
    true
   ]
  ],
  "zh": [
   [
    "踢足球",
    "tī zúqiú",
    "đá bóng",
    "⚽"
   ],
   [
    "游泳",
    "yóuyǒng",
    "bơi",
    "🏊"
   ],
   [
    "跑步",
    "pǎobù",
    "chạy bộ",
    "🏃"
   ],
   [
    "跳",
    "tiào",
    "nhảy",
    "🦘"
   ],
   [
    "走",
    "zǒu",
    "đi bộ",
    "🚶"
   ],
   [
    "爬",
    "pá",
    "bò, leo",
    "🐢"
   ],
   [
    "我会",
    "wǒ huì",
    "con biết (làm)",
    "💪"
   ],
   [
    "球",
    "qiú",
    "quả bóng",
    "🏐"
   ]
  ],
  "en_phr": [
   [
    "I can kick the ball.",
    "kick",
    "⚽"
   ],
   [
    "Let's run!",
    "run",
    "🏃"
   ],
   [
    "Can you swim? Yes, I can.",
    "swim",
    "🏊"
   ],
   [
    "Catch the ball!",
    "Catch",
    "🧤"
   ]
  ],
  "zh_phr": [
   [
    "我会游泳。",
    "游泳",
    "wǒ huì yóuyǒng",
    "con biết bơi",
    "🏊"
   ],
   [
    "我们踢足球吧！",
    "踢足球",
    "wǒmen tī zúqiú ba!",
    "mình đá bóng nhé!",
    "⚽"
   ],
   [
    "跑，跑，跑！",
    "跑",
    "pǎo, pǎo, pǎo!",
    "chạy, chạy, chạy!",
    "🏃"
   ]
  ],
  "seq": [
   [
    "👟",
    "put on shoes",
    "穿鞋"
   ],
   [
    "🤸",
    "warm up",
    "热身"
   ],
   [
    "⚽",
    "kick the ball",
    "踢球"
   ],
   [
    "💧",
    "drink water",
    "喝水"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Walking Walking",
    "u": "https://www.youtube.com/watch?v=fPMjnlTEZwU",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Let's Get Fit Version 2 | Count to 100 – xem 5 phút đầu",
    "u": "https://www.youtube.com/watch?v=MiUw36s9V_g",
    "kind": "song_action",
    "min": 5,
    "ch": "Jack Hartmann Kids Music Channel"
   },
   {
    "t": "Michael Rosen's - We're going on a bear hunt",
    "u": "https://www.youtube.com/watch?v=LrWmTQz5yYc",
    "kind": "story",
    "min": 5,
    "ch": "Jon Robson (Digital Schools) - re-upload of Michael Rosen performance"
   },
   {
    "t": "Bluey 5-Minute Stories (see theme 2) – chỉ xem 1 truyện, khoảng 5 phút đầu",
    "u": "https://www.youtube.com/watch?v=DKQUhWNKGOs",
    "kind": "story",
    "min": 5,
    "ch": "Brightly Storytime"
   }
  ],
  "zh": [
   {
    "t": "Simple Chinese Songs for Kids: The Sports Song 运动歌 (bài hát thể thao)",
    "u": "https://www.youtube.com/watch?v=2PFBAPQnHrw",
    "kind": "song_action",
    "min": 1,
    "ch": "Cool Panda Chinese Learning"
   },
   {
    "t": "Chinese for kids | 幸福运动歌 | 4 sports in Chinese",
    "u": "https://www.youtube.com/watch?v=FQoOI_myRkE",
    "kind": "song_action",
    "min": 1.3,
    "ch": "牛旺旺一家人"
   },
   {
    "t": "【14】运动会 Sports Meet | 走、爬、跳、跑、飞 Action Words in Chinese",
    "u": "https://www.youtube.com/watch?v=K1AKsbq3EOM",
    "kind": "story",
    "min": 0.9,
    "ch": "ChineseClass365 中文加油站"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: đi, chạy, nhón chân, dừng!",
   "toi_vi": [
    {
     "t": "Lộn cầu vồng",
     "type": "dong_dao",
     "lyr": "Lộn cầu vồng\nNước trong nước chảy\nCó cô mười bảy\nCó chị mười ba\nHai chị em ta\nCùng lộn cầu vồng"
    },
    {
     "t": "Câu đố bàn chân",
     "type": "cau_do",
     "lyr": "Lưng trước bụng sau\nCon mắt ở dưới cái đầu ở trên"
    },
    {
     "t": "Rồng rắn lên mây",
     "type": "dong_dao"
    }
   ],
   "book_vi": {
    "t": "Thỏ con đi ngủ",
    "author": "Quỳnh Lê",
    "publisher": "Crabit Kidbooks"
   }
  },
  {
   "title": "Tuần Kể chuyện: đi săn gấu",
   "toi_vi": [
    {
     "t": "Nhong nhong ngựa ông đã về",
     "type": "dong_dao",
     "lyr": "Nhong nhong ngựa ông đã về\nCắt cỏ Bồ Đề cho ngựa ông ăn"
    },
    {
     "t": "Câu đố quả dứa",
     "type": "cau_do",
     "lyr": "Quả gì nhiều mắt\nMuốn ăn phải bỏ mắt đi?"
    }
   ],
   "book_vi": {
    "t": "Những mùa ấm êm của em",
    "author": "Thu Dương (minh họa: Thạch Thảo)",
    "publisher": "Crabit Kidbooks"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Làm đúng lệnh walk, run, tiptoe, kick, throw, catch, stop"
  ],
  [
   "en",
   "Nói được câu “I can kick.” / “Can you swim? Yes, I can.”"
  ],
  [
   "zh",
   "Nói được 踢足球, 游泳, 跑步 và câu “我会…”"
  ],
  [
   "vi",
   "Kể lại truyện Rùa và Thỏ, nói được vì sao Rùa thắng"
  ],
  [
   "td",
   "Đếm to đến 20 bằng tiếng Anh khi tập thể dục"
  ],
  [
   "xh",
   "Chơi trò đuổi bắt, ném bắt theo luật, biết chờ lượt"
  ],
  [
   "vd",
   "Bắt được bóng mềm ném từ 2 mét, đá bóng vào khung thành giày"
  ]
 ],
 "days": [
  {
   "chuyen": "Đi, chạy, nhón chân, dừng!",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Dọn chỗ rộng, không có cạnh bàn sắc. Lần 1 – làm theo: bài Walking Walking. Bé làm đúng từng lệnh: walk, hop, run, tiptoe; nghe “stop” thì đứng im. Mẹ làm cùng bé.",
    "b": "Walk, walk! Now stop!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1: bài 运动歌 (bài hát thể thao). Mỗi môn vang lên, bé làm động tác: 踢足球 (tī zúqiú) đá chân, 游泳 (yóuyǒng) quạt tay bơi, 跑步 (pǎobù) chạy tại chỗ.",
    "b": "我们跑步吧！(wǒmen pǎobù ba!)"
   },
   "words": {
    "en": [
     7,
     2,
     8,
     9
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Sân bóng trong nhà: dọn trống một góc phòng, đặt 2 chiếc giày làm khung thành. Bé dùng bóng mềm (hoặc đôi tất cuộn tròn) đá vào khung thành từ 2 mét. Đá vào thì hô “Goal!” và đếm số bàn. Bé nói “I can kick!”. Mẹ ngồi gần, không chơi gần cửa kính.",
   "ob": "Ông bà làm thủ môn, khen mỗi khi bé đá vào khung thành.",
   "toi": "Kể truyện “Rùa và Thỏ” bằng lời của mẹ: Thỏ chạy nhanh nên chê Rùa chậm, hai bạn thi chạy. Thỏ chạy một đoạn rồi nằm ngủ dưới gốc cây; Rùa cứ bò đều không nghỉ và về đích trước. Hỏi bé: “Vì sao Rùa thắng?”."
  },
  {
   "chuyen": "Tập thể dục và đếm",
   "en": {
    "v": 1,
    "t": "Lần 1 – tập theo: Let's Get Fit (xem 5 phút đầu). Bé tập theo từng động tác: nhảy, chạy tại chỗ, đá chân. Mẹ đếm to bằng tiếng Anh, bé đếm cùng đến 20 (5 tuổi chưa cần đếm tới 100).",
    "b": "Let's get fit! One, two, three..."
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: bài 幸福运动歌 (4 môn thể thao). Hết bài, bé chọn một môn và làm cho mẹ xem; mẹ nói câu “你会踢足球！” (nǐ huì tī zúqiú – con biết đá bóng).",
    "b": "你会踢足球！(nǐ huì tī zúqiú!)"
   },
   "words": {
    "en": [
     2,
     3,
     7
    ],
    "zh": [
     0,
     6
    ]
   },
   "doi": "Ném và bắt: dùng bóng mềm hoặc đôi tất cuộn. Đứng cách nhau 1 mét: mẹ hô “Throw!” bé ném, “Catch!” bé bắt. Bắt được 5 lần liền thì lùi ra 2 mét. Đếm số lần bắt được bằng tiếng Anh và tiếng Trung.",
   "ob": "Ông bà ném bóng mềm nhẹ cho bé bắt và đếm cùng bé.",
   "toi": "Đồng dao “Lộn cầu vồng”: mẹ và bé nắm hai tay, vừa đọc vừa đung đưa; đến câu cuối cùng lộn người qua tay nhau (chơi ở chỗ rộng, làm chậm). Đọc 2 lần.",
   "lyr": "Lộn cầu vồng"
  },
  {
   "chuyen": "Bơi trên cạn",
   "en": {
    "v": 0,
    "t": "Lần 2 – bé gọi lệnh trước: xem lại Walking Walking. Trước mỗi đoạn, bé hô trước lệnh sẽ làm (walk / tiptoe / run). Mẹ bấm dừng bất chợt: ai đứng im lâu nhất thắng.",
    "b": "Tiptoe, tiptoe, shh!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại 运动歌. Mẹ hỏi câu Yes/No “你会游泳吗？” (nǐ huì yóuyǒng ma – con biết bơi không?). Bé trả lời “我会！” hoặc “不会” (bú huì – chưa biết).",
    "b": "你会游泳吗？(nǐ huì yóuyǒng ma?)"
   },
   "words": {
    "en": [
     7,
     8,
     2,
     9
    ],
    "zh": [
     1,
     6
    ]
   },
   "doi": "Bơi trên cạn: bé nằm sấp trên tấm thảm (sát sàn), quạt tay và đạp chân như bơi. So sánh kiểu bơi ếch và kiểu bơi chó, đếm số lần quạt tay. Mẹ nói rõ: bơi thật chỉ ở bể bơi, luôn có người lớn ở dưới nước cạnh con. Bé nói “I can swim!” – “我会游泳！”.",
   "ob": "Ông bà xem bé bơi trên thảm, nhắc bé chỉ xuống nước khi có người lớn.",
   "toi": "Đọc truyện tranh “Thỏ con đi ngủ” (Quỳnh Lê, Crabit Kidbooks). Hỏi bé: “Chơi thể thao cả ngày xong, cơ thể cần gì?” – ngủ thật ngon."
  },
  {
   "chuyen": "Chạy nhanh, chạy chậm",
   "en": {
    "v": 1,
    "t": "Lần 2 – bé đếm trước: xem lại Let's Get Fit (5 phút đầu). Ở mỗi động tác, bé đếm to trước video. Cuối cùng bé nói “I can jump ten times!” và nhảy đủ 10 cái.",
    "b": "Can you jump ten times?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại 幸福运动歌, mẹ tắt tiếng. Bé nói tên môn tiếng Trung trước khi bài hát nói, rồi bật tiếng kiểm tra.",
    "b": "我会跑步！(wǒ huì pǎobù!)"
   },
   "words": {
    "en": [
     2,
     9,
     3
    ],
    "zh": [
     2,
     0,
     6
    ]
   },
   "doi": "Chạy nhanh – chạy chậm ở sân hoặc hành lang (không chạy gần cầu thang): mẹ hô “Fast!” bé chạy nhanh, “Slow!” bé chạy chậm như rùa, “Stop!” bé đứng im. Rồi tính giờ một đoạn chạy ngắn, nghỉ uống nước, thử lại xem có nhanh hơn không.",
   "ob": "Ông bà hô nhanh, chậm, dừng cho bé chạy ở sân.",
   "toi": "Câu đố “bàn chân”: mẹ đọc 2 lần, bé đoán. Bé đứng lên chỉ: mắt cá ở dưới, đầu gối ở trên.",
   "lyr": "Câu đố bàn chân"
  },
  {
   "chuyen": "Bé làm huấn luyện viên",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé dẫn bài: mở Walking Walking, tắt tiếng. Bé hô lệnh cho mẹ làm (walk, hop, run, tiptoe, stop). Cuối bài bé nói 2 câu: “I can run. I can hop.”",
    "b": "I can run. I can hop."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: bé dẫn bài 运动歌, hô môn thể thao trước video. Rồi nói câu “我会踢足球” và làm động tác đá bóng.",
    "b": "我会踢足球。(wǒ huì tī zúqiú)"
   },
   "words": {
    "en": [
     2,
     7,
     8,
     9
    ],
    "zh": [
     0,
     1,
     2,
     6
    ]
   },
   "doi": "Chuẩn bị vào bếp ngày mai: nói chuyện về đồ ăn cho vận động viên (quả, sữa chua, nước). Bé chọn 2 loại quả, cùng mẹ rửa sạch. Chơi trò Rồng rắn lên mây cùng cả nhà 10 phút ở chỗ rộng.",
   "ob": "Ông bà cùng chơi Rồng rắn lên mây với bé.",
   "toi": "Bé kể lại “Rùa và Thỏ” bằng 2 con thú đồ chơi đua trên sàn: bé kể Thỏ chạy, Thỏ ngủ, Rùa bò đều về đích. Mẹ hỏi: “Con muốn giống Rùa ở điểm nào?”."
  },
  {
   "chuyen": "Thử thách lớn: bữa phụ của vận động viên",
   "en": {
    "v": 1,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: làm đúng lệnh = 1 sao, nói tên môn = 1 sao, nói câu “I can…” = 2 sao. Xong, bé chọn bài thích nhất tuần (Walking Walking hoặc Let's Get Fit) để tập lại.",
    "b": "Great workout! Now drink water."
   },
   "zh": {
    "v": 1,
    "t": "Bé xem lại 幸福运动歌, rồi “thi đấu” một môn trước khi ăn."
   },
   "special": "Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu",
   "doi": "Vào bếp làm cốc sữa chua trái cây cho vận động viên: mẹ thái sẵn chuối, xoài (bé không dùng dao, không đứng gần bếp). Bé múc sữa chua vào cốc bằng thìa, xếp quả lên trên, rắc một chút ngũ cốc giòn. Gọi tên: yogurt – 酸奶 (suānnǎi), banana – 香蕉, water – 水. Trước khi ăn, cả nhà tập 1 bài Walking Walking rồi uống nước.",
   "ob": "Ông bà cùng bé làm cốc sữa chua và gọi tên các loại quả.",
   "toi": "Kể lại hôm nay con tập môn gì, ăn món gì. Mẹ đọc lại đồng dao Lộn cầu vồng thật chậm.",
   "lyr": "Lộn cầu vồng"
  },
  {
   "chuyen": "Ôn tuần 1: thể thao ở công viên",
   "en": {
    "v": 0,
    "t": "Ôn: bé chọn một bài của tuần, tập 1 lần trước khi ra công viên.",
    "b": "Let's play football!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn: hát 运动歌 trên đường đi."
   },
   "doi": "Cả nhà ra công viên: đá bóng, chạy đuổi, ném bắt bóng mềm. Nếu bé đạp xe: đội mũ bảo hiểm, chỉ đạp trong khu vui chơi, người lớn đi cạnh. Bé nói “I can ride a bike!” hoặc “I can kick!”. Nghỉ uống nước giữa giờ.",
   "ob": "Ông bà đi cạnh khi bé đạp xe, nhắc bé đội mũ bảo hiểm.",
   "toi": "Mẹ kể hồi bé mẹ thích chơi trò gì ngoài sân. Bé kể hôm nay con thích môn nào nhất."
  },
  {
   "chuyen": "Đi săn gấu",
   "en": {
    "v": 2,
    "t": "Lần 1 – nghe chuyện và làm động tác: We're Going on a Bear Hunt (Michael Rosen kể). Qua cỏ bé gạt tay “swishy swashy”, qua sông giả vờ bơi “splash splosh”, qua bùn dậm chân. Mẹ dừng trước cái hang hỏi “Chuyện gì xảy ra tiếp?”.",
    "b": "We're going on a bear hunt!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: truyện 运动会 (hội thao) rất ngắn. Mẹ dừng ở mỗi động tác, bé nhắc và làm: 走 (zǒu) đi, 爬 (pá) bò, 跳 (tiào) nhảy, 跑 (pǎo) chạy.",
    "b": "跳！跑！(tiào! pǎo!)"
   },
   "words": {
    "en": [
     1,
     2,
     8
    ],
    "zh": [
     4,
     5,
     3
    ]
   },
   "doi": "Đi săn gấu trong nhà: làm đường vượt chướng ngại: “cỏ” (giấy cắt sợi), “sông” (khăn xanh – bé bơi qua), “bùn” (gối – bé dậm qua), “hang” (gầm bàn phủ chăn có gấu bông). Gặp gấu thì cả nhà chạy về trùm chăn. Dọn cạnh sắc, mẹ đi cạnh.",
   "ob": "Ông bà cùng bé đi săn gấu, đến hang thì cùng chạy về.",
   "toi": "Kể truyện “Thánh Gióng” bằng lời của mẹ, nhẹ nhàng: cậu bé làng Gióng lên ba chưa biết nói, nghe tin đất nước cần người giúp thì cất tiếng xin đi. Cậu ăn bao nhiêu cũng không no, cả làng góp gạo nuôi, cậu lớn nhanh như thổi, cưỡi ngựa sắt đuổi kẻ xấu đi rồi bay về trời."
  },
  {
   "chuyen": "Bluey chơi trò gì?",
   "en": {
    "v": 3,
    "t": "Lần 1 – xem một truyện Bluey (khoảng 5 phút). Mẹ dừng hỏi “What game are they playing?” và Yes/No: “Can she catch?”, “Is it fun?”. Giữa truyện hỏi bằng tiếng Việt: “Chuyện gì xảy ra tiếp?”.",
    "b": "What game are they playing?"
   },
   "zh": {
    "v": 0,
    "t": "Kể chuyện bằng bài hát: xem lại 运动歌, rồi bé kể lại bằng tiếng Việt thứ tự các môn trong bài, nói tên tiếng Trung từng môn.",
    "b": "先踢足球，再游泳。(xiān tī zúqiú, zài yóuyǒng)"
   },
   "words": {
    "en": [
     4,
     5,
     2
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Chơi lại trò của Bluey: bé kể trong truyện Bluey chơi trò gì, rồi cả nhà chơi đúng trò đó 10 phút (nếu là ném bắt thì dùng bóng mềm; nếu là đuổi bắt thì chơi ở chỗ rộng). Bé tự giải thích luật chơi cho mẹ, chen từ tiếng Anh: run, catch, stop.",
   "ob": "Ông bà nghe bé giải thích luật chơi rồi chơi cùng bé.",
   "toi": "Đồng dao “Nhong nhong ngựa ông đã về”: bé ngồi lên đùi mẹ làm cưỡi ngựa, mẹ nhún nhẹ theo nhịp. Mẹ nói: “Thánh Gióng cũng cưỡi ngựa đấy!”.",
   "lyr": "Nhong nhong ngựa ông đã về"
  },
  {
   "chuyen": "Không vòng qua được!",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé nói trước: xem lại We're Going on a Bear Hunt. Trước mỗi chặng, bé nói trước tiếng động (“Swishy swashy!”, “Splash splosh!”). Mẹ dừng hỏi Yes/No: “Is it a bear?”, “Are they scared?”.",
    "b": "We can't go over it. We can't go under it."
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại 运动会. Mẹ hỏi câu Yes/No “他们跑吗？” (tāmen pǎo ma – các bạn có chạy không?), bé trả lời “跑！” và chạy tại chỗ.",
    "b": "他们跑吗？(tāmen pǎo ma?)"
   },
   "words": {
    "en": [
     1,
     2,
     9
    ],
    "zh": [
     2,
     3,
     4
    ]
   },
   "doi": "Kể chuyện bằng 4 tranh: mẹ vẽ nhanh 4 khung (cỏ, sông, bùn, hang gấu). Mẹ xáo lộn, bé xếp đúng thứ tự rồi kể lại, cả nhà cùng đọc câu “We can't go over it. We can't go under it. We've got to go through it!”.",
   "ob": "Ông bà nghe bé kể chuyện đi săn gấu theo 4 tranh.",
   "toi": "Đọc truyện tranh “Những mùa ấm êm của em” (Thu Dương, Crabit Kidbooks). Hỏi bé: “Mùa nào con thích ra ngoài chơi nhất?”."
  },
  {
   "chuyen": "Huấn luyện viên hai thứ tiếng",
   "en": {
    "v": 3,
    "t": "Lần 2 – chuyển ngữ: trước khi xem, mẹ nói tiếng Trung, bé nói tiếng Anh: “跑” → “run”, “游泳” → “swim”, “踢足球” → “football”. Rồi xem lại truyện Bluey, bé giơ tay mỗi khi nghe run hoặc catch.",
    "b": "跑 – run!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ ngược lại: mẹ nói tiếng Anh “swim”, bé nói “游泳” và quạt tay; “run” → “跑步”. Rồi xem lại 幸福运动歌 một lần để thưởng.",
    "b": "Swim – 游泳!"
   },
   "words": {
    "en": [
     2,
     1,
     0,
     5
    ],
    "zh": [
     2,
     1,
     0
    ]
   },
   "doi": "Huấn luyện viên hai thứ tiếng: bé làm huấn luyện viên, mẹ làm vận động viên. Bé ra 5 lệnh tiếng Anh (run, stop, kick, throw, tiptoe), mẹ làm; rồi 3 lệnh tiếng Trung (跑, 跳, 走). Mẹ cố tình làm sai một lần để bé sửa.",
   "ob": "Ông bà làm vận động viên, làm theo lệnh bé hô.",
   "toi": "Bé kể lại “Thánh Gióng”: bé ngồi thụp làm cậu bé nhỏ, rồi đứng dần lên, nhón chân thật cao làm Gióng lớn, rồi cưỡi ngựa “nhong nhong” quanh phòng."
  },
  {
   "chuyen": "Bé kể chuyện đi săn gấu",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước: mở We're Going on a Bear Hunt, tắt tiếng. Bé dẫn cả nhà đi từng chặng, nói trước lời truyện và tiếng động. Bật tiếng đoạn cuối để nghe.",
    "b": "We're not scared!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3: bé làm động tác và nói 走, 爬, 跳, 跑 trước video. Rồi nói câu “我会跳” (wǒ huì tiào).",
    "b": "我会跳！(wǒ huì tiào!)"
   },
   "words": {
    "en": [
     1,
     2,
     8,
     9
    ],
    "zh": [
     4,
     5,
     3,
     2
    ]
   },
   "doi": "Chuẩn bị đi siêu thị ngày mai: bé vẽ danh sách hình gồm quả bóng, đôi giày thể thao, xe đạp, mũ bảo hiểm và 2 loại quả. Bé tập câu “I can kick a ball.” và “这是球” (zhè shì qiú – đây là quả bóng).",
   "ob": "Ông bà giúp bé vẽ danh sách đồ thể thao để đi siêu thị.",
   "toi": "Câu đố “quả dứa”: mẹ đọc 2 lần, bé đoán. Ngày mai ở chợ tìm xem quả dứa có bao nhiêu “mắt”.",
   "lyr": "Câu đố quả dứa"
  },
  {
   "chuyen": "Thử thách lớn: săn đồ thể thao ở siêu thị",
   "en": {
    "v": 2,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: trả lời Yes/No đúng = 1 sao, nói câu “I can…” = 2 sao, kể lại một chặng đi săn gấu = 3 sao. Sau đó bé chọn xem lại We're Going on a Bear Hunt hoặc truyện Bluey.",
    "b": "Let's go! What can you find?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhanh: hát 运动歌 trước khi đi."
   },
   "special": "Săn từ ở chợ hoặc siêu thị",
   "doi": "Đi siêu thị hoặc chợ, nắm tay bé ở chỗ đông. Bé cầm danh sách hình và tìm: quả bóng (“ball – 球”), giày thể thao, xe đạp, mũ bảo hiểm; mỗi món bé nói “I can kick a ball!” hoặc “我会…”. Ghé quầy quả tìm quả dứa và đếm mắt dứa. Bé tự đưa tiền và nói “Thank you – 谢谢”.",
   "ob": "Ông bà dẫn bé tìm quả bóng và đồ thể thao ở chợ.",
   "toi": "Kể lại chuyến đi: tìm được món nào. Mẹ đọc lại đồng dao Nhong nhong ngựa ông đã về.",
   "lyr": "Nhong nhong ngựa ông đã về"
  },
  {
   "chuyen": "Ôn nhẹ: vận động viên nhí",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ, không học từ mới: tập Walking Walking một lần thật chậm, kết thúc bằng nằm duỗi người.",
    "b": "Good night, little champion!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: hát 运动歌 một lần."
   },
   "doi": "Bé kể cho mẹ nghe các môn đã chơi trong 2 tuần và chọn môn thích nhất. Bé nói các từ còn nhớ: kick, throw, catch, swim; 踢足球, 游泳, 跑步. Mẹ chỉ khen, không sửa. Kiểm tra giày thể thao cho tuần sau.",
   "ob": "Ông bà hỏi bé “Con thích chơi môn gì nhất?”.",
   "toi": "Kể ngắn lại truyện Rùa và Thỏ. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[132] = {
 "sub": "Bé làm được gì: I can …",
 "vocab": {
  "en": [
   [
    "I can",
    "💪",
    "con làm được",
    false
   ],
   [
    "clap",
    "👏",
    "vỗ tay",
    true
   ],
   [
    "jump",
    "🦘",
    "nhảy",
    true
   ],
   [
    "stomp",
    "🦶",
    "dậm chân",
    true
   ],
   [
    "turn around",
    "🔄",
    "xoay một vòng",
    true
   ],
   [
    "kick",
    "🦵",
    "đá",
    true
   ],
   [
    "throw",
    "🤾",
    "ném",
    true
   ],
   [
    "catch",
    "🧤",
    "bắt",
    true
   ],
   [
    "count",
    "🔢",
    "đếm",
    false
   ],
   [
    "touch",
    "☝️",
    "chạm vào",
    true
   ]
  ],
  "zh": [
   [
    "我会",
    "wǒ huì",
    "con biết (làm)",
    "💪"
   ],
   [
    "跳",
    "tiào",
    "nhảy",
    "🦘"
   ],
   [
    "拍手",
    "pāishǒu",
    "vỗ tay",
    "👏"
   ],
   [
    "跑",
    "pǎo",
    "chạy",
    "🏃"
   ],
   [
    "来",
    "lái",
    "lại đây",
    "👉"
   ],
   [
    "去",
    "qù",
    "đi ra kia",
    "👈"
   ],
   [
    "头",
    "tóu",
    "đầu",
    "🙆"
   ],
   [
    "脚",
    "jiǎo",
    "bàn chân",
    "👣"
   ]
  ],
  "en_phr": [
   [
    "I can clap my hands.",
    "clap",
    "👏"
   ],
   [
    "Can you do it? I can do it!",
    "do it",
    "💪"
   ],
   [
    "I can jump high.",
    "jump",
    "🦘"
   ],
   [
    "I can count to twenty.",
    "count",
    "🔢"
   ]
  ],
  "zh_phr": [
   [
    "我会跳。",
    "跳",
    "wǒ huì tiào",
    "con biết nhảy",
    "🦘"
   ],
   [
    "你会踢球吗？我会！",
    "踢球",
    "nǐ huì tī qiú ma? wǒ huì!",
    "con biết đá bóng không? con biết!",
    "⚽"
   ],
   [
    "来，跑过来！",
    "来",
    "lái, pǎo guòlái!",
    "lại đây, chạy lại đây!",
    "👉"
   ]
  ],
  "seq": [
   [
    "👶",
    "I can crawl",
    "我会爬"
   ],
   [
    "🚶",
    "I can walk",
    "我会走"
   ],
   [
    "🏃",
    "I can run",
    "我会跑"
   ],
   [
    "🚲",
    "I can ride a bike",
    "我会骑车"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Hello Hello! Can You Clap Your Hands?",
    "u": "https://www.youtube.com/watch?v=fN1Cyr0ZK9M",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Count & Move | Count Up To Twenty",
    "u": "https://www.youtube.com/watch?v=g9EgE_JtEAw",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Tìm một bài Simon Says hoặc freeze dance trên kênh Jack Hartmann Kids Music Channel – xem 5 phút đầu",
    "u": "https://www.youtube.com/channel/UCVcQH8A634mauPrGbWs7QlQ",
    "kind": "game",
    "min": 5,
    "ch": "Jack Hartmann Kids Music Channel"
   },
   {
    "t": "Head Shoulders Knees & Toes",
    "u": "https://www.youtube.com/watch?v=ZanHgPprl-0",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "Chinese for kids | 幸福运动歌 | 4 sports in Chinese",
    "u": "https://www.youtube.com/watch?v=FQoOI_myRkE",
    "kind": "song_action",
    "min": 1.3,
    "ch": "牛旺旺一家人"
   },
   {
    "t": "Chinese Songs for Kids – Come and Go 来来去去 | Level 1 Song",
    "u": "https://www.youtube.com/watch?v=okbxOHnqFGc",
    "kind": "song_action",
    "min": 2.1,
    "ch": "简中 Little Chinese Learners [Simplified Chinese]"
   },
   {
    "t": "头发肩膀膝盖脚 Head, Shoulders, Knees and Toes (đầu vai gối chân)",
    "u": "https://www.youtube.com/watch?v=CUxUGNdl5oc",
    "kind": "song_action",
    "min": 2,
    "ch": "Little Baby Bum – 小寶貝布姆 (official Mandarin)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: con làm được bao nhiêu?",
   "toi_vi": [
    {
     "t": "Ông sảo ông sao",
     "type": "dong_dao",
     "lyr": "Ông sảo ông sao\nÔng vào cửa sổ\nÔng ở với tôi\nÔng ngồi lên chiếu\nTôi biếu củ khoai\nÔng nhai nhóp nhép\nCái tôm cái tép\nÔng ghém với rau\nĂn mau chóng lớn\nÔng ngồi dậy\nÔng về trời"
    },
    {
     "t": "Câu đố cái mũi",
     "type": "cau_do",
     "lyr": "Một nhà hai cửa như nhau\nCùng vào cùng ra?"
    }
   ],
   "book_vi": {
    "t": "Một miếng trăng ngon",
    "author": "May (minh họa: Thảo Võ)",
    "publisher": "NXB Hà Nội & Crabit Kidbooks"
   }
  },
  {
   "title": "Tuần Thử thách: đại hội thể thao gia đình",
   "toi_vi": [
    {
     "t": "Con gà cục tác cục te",
     "type": "ve",
     "lyr": "Con gà cục tác cục te\nHay đỗ đầu hè hay chạy rông rông\nMá gà thì đỏ hồng hồng\nCái mỏ thì nhọn cái mồng thì tươi\nCái chân hay đạp, hay bươi\nCái cánh hay vỗ lên trời gió bay"
    },
    {
     "t": "Bồ các là bác chim ri",
     "type": "dong_dao",
     "lyr": "Bồ các là bác chim ri\nChim ri là dì sáo sậu\nSáo sậu là cậu sáo đen\nSáo đen là em tu hú\nTu hú là chú bồ các"
    }
   ],
   "book_vi": {
    "t": "Chuyện ở rừng Vi vu (bộ sách tranh)",
    "author": "Trương Huỳnh Như Trân",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Trả lời “Can you…?” bằng “Yes, I can!” hoặc “No, I can't.”"
  ],
  [
   "en",
   "Tự nói 3 câu “I can …” về mình (I can jump / clap / count to twenty)"
  ],
  [
   "zh",
   "Nói được câu “我会…” với 3 động tác và trả lời “你会…吗？”"
  ],
  [
   "zh",
   "Làm đúng 来 / 去 và chạm đúng 头, 脚 khi mẹ hô"
  ],
  [
   "vi",
   "Kể lại Con Rồng cháu Tiên: năm mươi con lên núi, năm mươi con xuống biển"
  ],
  [
   "td",
   "Đếm và ghi lại số lần nhảy trong 30 giây, so sánh hôm trước – hôm sau"
  ],
  [
   "xh",
   "Chơi Simon says đúng luật, chấp nhận khi bị loại"
  ],
  [
   "vd",
   "Đứng một chân đếm đến 10; ném bóng vào rổ từ 2 mét"
  ]
 ],
 "days": [
  {
   "chuyen": "Con làm được không?",
   "en": {
    "v": 0,
    "t": "Mở YouTube Kids, tắt tự phát. Dọn chỗ rộng. Lần 1 – làm và trả lời: bài Hello Hello! Can You Clap Your Hands?. Mỗi lần bài hỏi “Can you…?”, bé làm động tác rồi trả lời to “Yes, I can!”.",
    "b": "Can you clap your hands? Yes, I can!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 của vòng này: bài 幸福运动歌. Lần này tập trung vào câu 我会 (wǒ huì – con biết): sau bài, bé chọn một môn và nói “我会…” kèm động tác, mẹ nhắc nửa câu.",
    "b": "我会…！(wǒ huì…!)"
   },
   "words": {
    "en": [
     0,
     1,
     4
    ],
    "zh": [
     0
    ]
   },
   "doi": "Bảng “Bé làm được”: kẻ bảng 6 ô: nhảy xa, đứng một chân, bắt bóng, ném bóng, đá bóng, đếm đến 20. Bé thử từng việc; làm được thì vẽ một ngôi sao và nói “I can…”. Đo nhảy xa: dán băng dính ở vạch xuất phát, đánh dấu chỗ bé tiếp đất.",
   "ob": "Ông bà xem bé thử từng việc và vẽ sao lên bảng.",
   "toi": "Kể truyện “Đeo nhạc cho mèo” bằng lời của mẹ: họ nhà chuột bàn nhau đeo chuông vào cổ mèo để nghe tiếng mà tránh. Ai cũng khen kế hay, nhưng đến lúc chọn người đi đeo thì không ai dám nhận. Hỏi bé: “Nói thì dễ, làm thì sao? Có việc gì con nói được và làm được?”."
  },
  {
   "chuyen": "30 giây làm được bao nhiêu?",
   "en": {
    "v": 1,
    "t": "Lần 1 – vừa đếm vừa vận động: bài Count & Move. Bé đếm cùng video đến 20, mỗi số làm một động tác (nhảy, vỗ tay, dậm chân, xoay). Mẹ dừng ở số 10 hỏi “What number is next?”.",
    "b": "What number is next?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1: bài 来来去去 (lại đây, đi ra kia). Nghe 来 (lái) bé đi về phía mẹ, nghe 去 (qù) bé đi ra xa. Mẹ đứng yên ở giữa phòng.",
    "b": "来！去！(lái! qù!)"
   },
   "words": {
    "en": [
     8,
     2,
     1,
     3,
     4
    ],
    "zh": [
     4,
     5
    ]
   },
   "doi": "Thí nghiệm 30 giây: mẹ bấm đồng hồ 30 giây, bé nhảy tại chỗ, mẹ đếm số lần bằng tiếng Anh. Ghi số lên bảng. Nghỉ uống nước, rồi thử 30 giây vỗ tay. Mai thử lại xem có nhiều hơn không. Bé nói “I can jump … times!”.",
   "ob": "Ông bà bấm giờ và đếm số lần bé nhảy.",
   "toi": "Đồng dao “Ông sảo ông sao”: mẹ đọc 2 lần, bé làm động tác: ông vào cửa sổ, ngồi lên chiếu, nhai nhóp nhép, đứng dậy về trời.",
   "lyr": "Ông sảo ông sao"
  },
  {
   "chuyen": "Bóng nào lăn xa hơn?",
   "en": {
    "v": 0,
    "t": "Lần 2 – trả lời Yes/No vui: xem lại Hello Hello! Can You Clap Your Hands?. Sau bài, mẹ hỏi thêm câu đùa: “Can you fly?” – bé trả lời “No, I can't!”; “Can you jump?” – “Yes, I can!”.",
    "b": "Can you fly? No, I can't!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2: xem lại 幸福运动歌. Mẹ hỏi câu Yes/No “你会跳吗？” (nǐ huì tiào ma – con biết nhảy không?), bé trả lời “我会！” và nhảy.",
    "b": "你会跳吗？(nǐ huì tiào ma?)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     4
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Thí nghiệm bóng lăn: kê một tấm bìa cứng lên chồng sách làm dốc. Thả bóng to và bóng nhỏ (to hơn quả trứng) từ đỉnh dốc. Bé đoán quả nào lăn xa hơn, rồi đếm bước kiểm tra. Đổi độ cao dốc và thử lại. Bé nói “The big ball can roll far!”.",
   "ob": "Ông bà cùng bé thả bóng xuống dốc và đếm bước.",
   "toi": "Đọc truyện tranh “Một miếng trăng ngon” (May, NXB Hà Nội & Crabit Kidbooks). Hỏi bé: “Nhân vật trong truyện làm được điều gì?”."
  },
  {
   "chuyen": "Đứng một chân",
   "en": {
    "v": 1,
    "t": "Lần 2 – bé đếm trước: xem lại Count & Move. Bé đếm to trước video, đúng đến 20 được 2 sao. Cuối cùng bé nói “I can count to twenty!”.",
    "b": "I can count to twenty!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2: xem lại 来来去去. Sau video mẹ hô 来 / 去 bất chợt không theo bài, bé phải nghe kỹ mới làm đúng.",
    "b": "来，跑过来！(lái, pǎo guòlái!)"
   },
   "words": {
    "en": [
     8,
     0,
     2
    ],
    "zh": [
     4,
     5,
     3
    ]
   },
   "doi": "Thử thách thăng bằng: bé đứng một chân, mẹ đếm bằng tiếng Anh; đổi chân, mẹ đếm bằng tiếng Trung. Chân nào đứng lâu hơn? Thử dang tay ra – có dễ hơn không? Mẹ đứng sát bên. Bé nói “I can stand on one foot!”.",
   "ob": "Ông bà đứng cạnh, đếm cho bé đứng một chân.",
   "toi": "Câu đố “cái mũi”: mẹ đọc 2 lần, bé đoán. Bé chỉ mũi mình, rồi thử hít vào bằng mũi, thở ra bằng miệng 3 lần.",
   "lyr": "Câu đố cái mũi"
  },
  {
   "chuyen": "Hôm nay giỏi hơn hôm qua",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé hát trước: mở Hello Hello!, tắt tiếng. Bé tự nghĩ câu hỏi mới cho mẹ: “Can you stomp your feet?”, “Can you turn around?”. Mẹ làm và trả lời “Yes, I can!”.",
    "b": "Can you turn around?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3: bé nói 3 câu “我会…” với 3 động tác khác nhau trước khi mở video, rồi xem để so với bài hát.",
    "b": "我会跳，我会跑！(wǒ huì tiào, wǒ huì pǎo!)"
   },
   "words": {
    "en": [
     0,
     4,
     3,
     1
    ],
    "zh": [
     0,
     1,
     3
    ]
   },
   "doi": "Thử lại 30 giây nhảy như hôm thứ Ba. Ghi số mới cạnh số cũ: nhiều hơn hay ít hơn? Mẹ khen sự cố gắng: “Yesterday 15, today 18!”. Gom chăn gối cho pháo đài ngày mai.",
   "ob": "Ông bà so số lần nhảy hôm nay với hôm trước và khen bé.",
   "toi": "Bé kể lại “Đeo nhạc cho mèo”, rồi nghĩ cách vui: nếu không ai dám, cả nhà chuột cùng làm thì sao? Mẹ khen ý của bé."
  },
  {
   "chuyen": "Thử thách lớn: pháo đài nhà vô địch",
   "en": {
    "v": 1,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: làm đúng = 1 sao, nói câu “I can…” = 2 sao, đếm đến 20 = 2 sao. Xong, bé chọn video thích nhất tuần để tập lại.",
    "b": "You can do it! Hooray!"
   },
   "zh": {
    "v": 0,
    "t": "Bé xem lại 幸福运动歌 rồi khoe với gấu bông “我会…” trong pháo đài."
   },
   "special": "Xây pháo đài chăn gối, kể chuyện trong pháo đài",
   "doi": "Xây pháo đài chăn gối của nhà vô địch: dán bảng “Bé làm được” lên vách pháo đài. Trong pháo đài, bé kể cho cả nhà nghe những việc con làm được tuần này, mỗi việc một câu “I can…”. Dùng đèn pin chiếu bóng: bóng của bé nhảy, vỗ tay, xoay vòng trên vách chăn.",
   "ob": "Ông bà vào pháo đài nghe bé kể những việc bé làm được.",
   "toi": "Trong pháo đài, mẹ đọc lại đồng dao Ông sảo ông sao, chiếu đèn pin lên trần làm ông sao.",
   "lyr": "Ông sảo ông sao"
  },
  {
   "chuyen": "Ôn tuần 1: thử sức ở sân chơi",
   "en": {
    "v": 0,
    "t": "Ôn: bé chọn một bài của tuần, tập 1 lần.",
    "b": "Look! I can climb!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn: chơi 来来去去 ở sân, mẹ hô, bé chạy lại hoặc chạy ra."
   },
   "doi": "Cả nhà ra sân chơi: bé thử leo thang cầu trượt (người lớn đứng ngay sau), đi thăng bằng trên bờ thấp (nắm tay mẹ), đạp xe có mũ bảo hiểm. Mỗi việc làm được, bé nói “I can…” hoặc “我会…”. Nghỉ uống nước.",
   "ob": "Ông bà đứng sát khi bé leo cầu trượt, khen bé dũng cảm.",
   "toi": "Mẹ kể việc đầu tiên mẹ học làm được hồi bé (đi xe đạp, bơi…). Bé kể việc con mới làm được."
  },
  {
   "chuyen": "Simon bảo…",
   "en": {
    "v": 2,
    "t": "Lần 1 – trò Simon Says: mẹ tìm trên kênh Jack Hartmann một bài Simon Says hoặc freeze dance, xem 5 phút đầu. Bé chỉ làm khi nghe “Simon says…”. Làm đúng mỗi lệnh được 1 sao.",
    "b": "Simon says jump!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1: bài 头发肩膀膝盖脚 (đầu, vai, gối, chân). Bé chạm theo bài hát; mẹ nhấn mạnh 头 (tóu) và 脚 (jiǎo).",
    "b": "头！脚！(tóu! jiǎo!)"
   },
   "words": {
    "en": [
     2,
     1,
     9,
     4
    ],
    "zh": [
     6,
     7
    ]
   },
   "doi": "Simon says tại nhà có tính sao: mẹ ra 10 lệnh trộn tiếng Anh và tiếng Trung, có lệnh có “Simon says”, có lệnh không. Bé làm sai thì ngồi xuống một lượt rồi chơi tiếp. Đổi vai: bé làm Simon. Bé tập nói “OK, I'm out!” khi bị loại.",
   "ob": "Ông bà chơi Simon says cùng bé, vui vẻ khi bị loại.",
   "toi": "Kể truyện “Con Rồng cháu Tiên” bằng lời của mẹ: Lạc Long Quân ở biển, Âu Cơ ở núi. Âu Cơ sinh một bọc trăm trứng nở trăm người con: năm mươi con theo cha xuống biển, năm mươi con theo mẹ lên núi. Vì thế người Việt gọi nhau là đồng bào."
  },
  {
   "chuyen": "Ai nhanh hơn: đầu, vai, gối, chân",
   "en": {
    "v": 3,
    "t": "Lần 1 – thử thách tốc độ: Head Shoulders Knees & Toes. Bài hát nhanh dần; ai theo kịp đến cuối? Mẹ và bé thi, chạm sai thì cười và làm tiếp.",
    "b": "Faster! Head, shoulders, knees and toes!"
   },
   "zh": {
    "v": 0,
    "t": "Thi nhanh với 幸福运动歌: mỗi môn vang lên, ai nói “我会…” với môn đó trước được 1 sao.",
    "b": "我会踢足球！(wǒ huì tī zúqiú!)"
   },
   "words": {
    "en": [
     9,
     8
    ],
    "zh": [
     0
    ]
   },
   "doi": "Ai chạm nhanh hơn: mẹ hô một bộ phận bằng tiếng Anh hoặc tiếng Trung (head, toes, 头, 脚), bé chạm thật nhanh. Đổi vai: bé hô, mẹ chạm. Ai chạm đúng trước được 1 sao; 10 lượt thì đếm sao.",
   "ob": "Ông bà hô đầu, vai, gối, chân cho bé chạm nhanh.",
   "toi": "Vè “Con gà cục tác cục te”: mẹ đọc 2 lần, bé làm gà: đạp chân, bươi đất, vỗ cánh. Hỏi bé: “Con gà làm được những gì?”.",
   "lyr": "Con gà cục tác cục te"
  },
  {
   "chuyen": "Đúng hay sai: con làm được không?",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé làm Simon: xem lại bài Simon Says (5 phút đầu) rồi tắt. Bé ra lệnh cho mẹ, cố tình có lệnh không “Simon says” để bắt mẹ sai.",
    "b": "Simon says clap! Stomp! Oh, you're out!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2: xem lại 头发肩膀膝盖脚, mẹ tắt tiếng ở chữ 头 và 脚, bé tự hát và chạm.",
    "b": "这是头，这是脚。(zhè shì tóu, zhè shì jiǎo)"
   },
   "words": {
    "en": [
     1,
     3,
     9
    ],
    "zh": [
     6,
     7
    ]
   },
   "doi": "Đúng hay sai 6 câu, mỗi câu 1 sao: mẹ nói “I can fly!” – bé: “No, you can't!”; “I can jump!” – “Yes, you can!”; rồi tiếng Trung “我会游泳” – bé gật hoặc lắc. Đổi vai: bé nói câu về mình, mẹ đoán đúng hay sai.",
   "ob": "Ông bà nói “ông/bà bay được” để bé sửa “không đâu ạ”.",
   "toi": "Đọc một truyện trong bộ “Chuyện ở rừng Vi vu” (NXB Kim Đồng). Hỏi bé: “Mỗi con vật trong truyện làm được việc gì giỏi?”."
  },
  {
   "chuyen": "Đại hội ba môn",
   "en": {
    "v": 3,
    "t": "Lần 2 – chuyển ngữ: mẹ nói tiếng Trung, bé nói tiếng Anh: “头” → “head”, “脚” → “feet”, “跳” → “jump”. Rồi xem lại Head Shoulders Knees & Toes ở tốc độ thường.",
    "b": "头 – head!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ với 来来去去: mẹ nói tiếng Anh “come”, bé nói “来” và chạy lại; “go” → “去” và chạy ra. Xem lại bài một lần để thưởng.",
    "b": "Come – 来!"
   },
   "words": {
    "en": [
     9,
     2,
     5,
     6,
     7
    ],
    "zh": [
     4,
     5,
     6,
     7
    ]
   },
   "doi": "Đại hội ba môn ở sân hoặc phòng rộng: trạm 1 nhảy 5 cái, trạm 2 ném bóng mềm vào rổ từ 2 mét, trạm 3 chạy đến cửa rồi chạy về. Bé tự đếm và tự nói “I can…” ở mỗi trạm. Mẹ hô lệnh tiếng Trung ở trạm 3: “去！” rồi “来！”. Nghỉ uống nước giữa các lượt.",
   "ob": "Ông bà làm trọng tài, đếm và vỗ tay ở mỗi trạm.",
   "toi": "Bé kể lại “Con Rồng cháu Tiên”: bé làm con theo cha xuống biển (bơi trên thảm) rồi làm con theo mẹ lên núi (leo qua gối). Bé nói “I can swim! I can climb!”."
  },
  {
   "chuyen": "Chuẩn bị ngày hoá trang",
   "en": {
    "v": 1,
    "t": "Thử thách tự đếm: xem lại Count & Move. Lần này bé tắt tiếng và tự đếm đến 20 kèm động tác, chỉ bật tiếng khi bé quên số.",
    "b": "Can you count by yourself?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3: bé dẫn bài 头发肩膀膝盖脚, hát và chạm trước, mẹ làm theo bé.",
    "b": "我会唱！(wǒ huì chàng!)"
   },
   "words": {
    "en": [
     8,
     0,
     2,
     1
    ],
    "zh": [
     6,
     7,
     0
    ]
   },
   "doi": "Chuẩn bị ngày hoá trang: bé chọn đóng một nhân vật trong video đã xem 2 vòng gần đây (chú gấu hoặc một người trong gia đình đi săn gấu, bạn Bluey, hoặc huấn luyện viên dẫn bài tập). Làm đồ hoá trang từ đồ có sẵn: tai gấu bằng giấy, băng đô vận động viên. Làm thêm huy chương bằng bìa cho đại hội thể thao gia đình.",
   "ob": "Ông bà giúp bé làm huy chương bằng bìa.",
   "toi": "Đồng dao “Bồ các là bác chim ri”: mẹ đọc 2 lần, bé thấy vui vì các tên nối vòng tròn. Thử đọc nhanh dần mà không vấp.",
   "lyr": "Bồ các là bác chim ri"
  },
  {
   "chuyen": "Thử thách lớn: ngày hoá trang thể thao",
   "en": {
    "v": 3,
    "t": "Thử thách lớn: web ghép 3 trò. Mẹ chấm sao: làm đúng = 1 sao, nói câu “I can…” = 2 sao, hoàn thành đại hội thể thao = 3 sao. Sau đó bé chọn xem lại video thích nhất tuần (Head Shoulders Knees & Toes hoặc bài Simon Says).",
    "b": "Ladies and gentlemen, here is our champion!"
   },
   "zh": {
    "v": 0,
    "t": "Bé trong đồ hoá trang xem lại 幸福运动歌 rồi nói 3 câu “我会…”."
   },
   "special": "Ngày hoá trang: bé đóng vai nhân vật trong video",
   "doi": "Ngày hoá trang thể thao: bé mặc đồ nhân vật đã chọn và dẫn “đại hội thể thao gia đình”: nhảy xa, ném bóng vào rổ, đứng một chân, chạy tiếp sức. Mỗi môn bé giới thiệu bằng 1 câu tiếng Anh (“I can jump far!”) và cả nhà cùng làm. Kết thúc trao huy chương bìa cho mọi người, bé nói 3 câu “我会…”. Mẹ quay clip.",
   "ob": "Ông bà thi cùng bé và nhận huy chương bìa.",
   "toi": "Xem lại clip. Mẹ đọc lại vè Con gà cục tác cục te, bé vỗ cánh rồi nằm ngủ.",
   "lyr": "Con gà cục tác cục te"
  },
  {
   "chuyen": "Ôn nhẹ: bảng Bé làm được",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ, không học từ mới: hát Hello Hello! Can You Clap Your Hands? một lần thật nhẹ nhàng.",
    "b": "I can sleep now. Good night!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: chơi 来来去去 một lần, bé “đi” về giường ở chữ cuối."
   },
   "doi": "Mẹ và bé nhìn lại bảng “Bé làm được” và số lần nhảy 30 giây. Bé chọn việc con tự hào nhất và nói “I can…” – “我会…”. Mẹ chụp ảnh bảng để lưu kỷ niệm.",
   "ob": "Ông bà xem bảng “Bé làm được” và khen bé.",
   "toi": "Kể ngắn lại Con Rồng cháu Tiên. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};

/* ---- gd7b ---- */
// Vòng 133–144 (5 tuổi, chủ đề 19–24). Sinh từ src7b/*.js bằng src7b/build.js
window.CT_DETAIL45 = window.CT_DETAIL45 || {};
window.CT_DETAIL45[133] = {
 "sub": "Buổi sáng: thức dậy, đánh răng, ăn sáng",
 "vocab": {
  "en": [
   [
    "wake up",
    "⏰",
    "thức dậy",
    true
   ],
   [
    "brush teeth",
    "🪥",
    "đánh răng",
    true
   ],
   [
    "wash face",
    "🧼",
    "rửa mặt",
    true
   ],
   [
    "get dressed",
    "👕",
    "mặc quần áo",
    true
   ],
   [
    "eat breakfast",
    "🍳",
    "ăn sáng",
    true
   ],
   [
    "go to school",
    "🎒",
    "đi học",
    true
   ],
   [
    "morning",
    "🌅",
    "buổi sáng",
    false
   ],
   [
    "comb hair",
    "💇",
    "chải tóc",
    true
   ],
   [
    "milk",
    "🥛",
    "sữa",
    false
   ]
  ],
  "zh": [
   [
    "起床",
    "qǐchuáng",
    "thức dậy",
    "⏰"
   ],
   [
    "刷牙",
    "shuāyá",
    "đánh răng",
    "🪥"
   ],
   [
    "洗脸",
    "xǐ liǎn",
    "rửa mặt",
    "🧼"
   ],
   [
    "吃早饭",
    "chī zǎofàn",
    "ăn sáng",
    "🍳"
   ],
   [
    "上学",
    "shàngxué",
    "đi học",
    "🎒"
   ],
   [
    "早上",
    "zǎoshang",
    "buổi sáng",
    "🌅"
   ],
   [
    "牛奶",
    "niúnǎi",
    "sữa",
    "🥛"
   ]
  ],
  "en_phr": [
   [
    "I wake up in the morning.",
    "wake up",
    "⏰"
   ],
   [
    "I brush my teeth.",
    "brush",
    "🪥"
   ],
   [
    "I eat breakfast.",
    "breakfast",
    "🍳"
   ],
   [
    "I like milk.",
    "milk",
    "🥛"
   ],
   [
    "I go to school.",
    "school",
    "🎒"
   ]
  ],
  "zh_phr": [
   [
    "早上好！",
    "早上",
    "zǎoshang hǎo",
    "chào buổi sáng",
    "🌅"
   ],
   [
    "我刷牙。",
    "刷牙",
    "wǒ shuāyá",
    "con đánh răng",
    "🪥"
   ],
   [
    "我吃早饭。",
    "早饭",
    "wǒ chī zǎofàn",
    "con ăn sáng",
    "🍳"
   ],
   [
    "我喜欢牛奶。",
    "牛奶",
    "wǒ xǐhuan niúnǎi",
    "con thích sữa",
    "🥛"
   ]
  ],
  "seq": [
   [
    "⏰",
    "wake up",
    "起床"
   ],
   [
    "🪥",
    "brush teeth",
    "刷牙"
   ],
   [
    "🍳",
    "eat breakfast",
    "吃早饭"
   ],
   [
    "🎒",
    "go to school",
    "上学"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "This Is The Way (We Wash Our Face)",
    "u": "https://www.youtube.com/watch?v=4XLQpRI_wOQ",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Brush Your Teeth",
    "u": "https://www.youtube.com/watch?v=wCio_xVlgQ0",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The Very Hungry Caterpillar (Eric Carle đọc truyện)",
    "u": "https://www.youtube.com/watch?v=vkYmvxP0AJI",
    "kind": "story",
    "min": 5,
    "ch": "Puffin Books / Eric Carle"
   },
   {
    "t": "Tìm bài “Peppa Pig” một tập ngắn về buổi sáng hoặc bữa sáng trên kênh Peppa Pig - Official Channel; xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/channel/UCAOtE1V7Ots4DjM8JLlrYgg",
    "kind": "channel",
    "min": 5,
    "ch": "Peppa Pig - Official Channel"
   }
  ],
  "zh": [
   {
    "t": "作息歌 The Routine Song (bài hát nếp sinh hoạt)",
    "u": "https://www.youtube.com/watch?v=Bwe270KKULY",
    "kind": "song_action",
    "min": 1.5,
    "ch": "Cool Panda Chinese Learning"
   },
   {
    "t": "好习惯儿歌 Daily Routine Song (bài hát thói quen tốt)",
    "u": "https://www.youtube.com/watch?v=X20DyIKZKCs",
    "kind": "song_action",
    "min": 2.3,
    "ch": "小苹果 – 儿童中文歌曲 Xiao Ping Guo"
   },
   {
    "t": "Tìm bài “小猪佩奇” một tập ngắn về buổi sáng hoặc bữa sáng trên kênh 小猪佩奇 中文官方; xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/channel/UCRi0sw4PDw-C2C7fS9hrx5Q",
    "kind": "channel",
    "min": 5,
    "ch": "小猪佩奇 中文官方 Peppa Pig (Mandarin official)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: hát theo buổi sáng của bé",
   "toi_vi": [
    {
     "t": "Câu đố con gà trống",
     "type": "cau_do",
     "lyr": "Con gì mào đỏ\nGáy ò ó o\nTừ sáng tinh mơ\nGọi người thức giấc"
    },
    {
     "t": "Câu đố cái gương (lấp lánh)",
     "type": "cau_do",
     "lyr": "Lấp la lấp lánh\nTreo ở trên tường\nTrước khi đến trường\nBé soi chải tóc\nLà cái gì?"
    }
   ],
   "book_vi": {
    "t": "Bé tập kể chuyện – Mỗi tuần một câu chuyện",
    "author": "chưa rõ tên tác giả",
    "publisher": "NXB Trẻ"
   }
  },
  {
   "title": "Tuần Kể chuyện: một buổi sáng có đầu có cuối",
   "toi_vi": [
    {
     "t": "Câu đố cái thìa",
     "type": "cau_do",
     "lyr": "Tôi thường làm bạn\nVới em bé thôi\nKhi ăn cầm tôi\nDễ hơn cầm đũa\nLà cái gì?"
    },
    {
     "t": "Câu đố bàn tay",
     "type": "cau_do",
     "lyr": "Năm ông cùng ở một nhà\nTình huynh nghĩa đệ vào ra thuận hòa"
    }
   ],
   "book_vi": {
    "t": "Những bài học nhỏ (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được 3 việc buổi sáng bằng tiếng Anh: wake up, brush teeth, eat breakfast"
  ],
  [
   "en",
   "Nói được câu ngắn “I brush my teeth.” hoặc “I like milk.”"
  ],
  [
   "zh",
   "Nói được 起床, 刷牙, 吃早饭 khi mẹ chỉ tranh"
  ],
  [
   "zh",
   "Chào buổi sáng 早上好 không cần mẹ nhắc"
  ],
  [
   "vi",
   "Kể lại được buổi sáng của mình theo thứ tự: trước, sau, cuối cùng"
  ],
  [
   "td",
   "Xếp đúng 4 tranh việc buổi sáng theo thứ tự"
  ],
  [
   "xh",
   "Tự làm được 2 việc buổi sáng (rửa mặt, cất bàn chải) và nói cho mẹ biết"
  ],
  [
   "vd",
   "Làm đúng động tác khi nghe lệnh “wake up, wash face, comb hair”"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này nhà mình có một đồng hồ báo thức đặc biệt: bài hát. Sáng nay mẹ thử gọi bé dậy bằng tiếng hát.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Ngồi cạnh bé, xem hết bài. Mỗi lần trong video rửa mặt, chải tóc, đánh răng, mẹ bấm dừng, hỏi “Con chỉ cho mẹ: bạn đang làm gì?” Bé chỉ vào tay mình rồi làm thử. Câu hỏi Yes/No: dừng ở cảnh rửa mặt, mẹ hỏi “Wash face? Yes or no?”, bé gật đầu nói “Yes!”.",
    "b": "This is the way we wash our face!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Bài rất ngắn, cho xem 2 lần liền. Lần đầu chỉ nghe. Lần hai, mỗi khi nghe 起床 (qǐchuáng) bé vươn vai, nghe 刷牙 (shuāyá) bé làm động tác chải răng. Mẹ không cần nói đúng, chỉ cần làm động tác cùng con.",
    "b": "起床啦！(qǐchuáng la)"
   },
   "words": {
    "en": [
     2,
     7,
     1,
     6
    ],
    "zh": [
     0,
     1,
     5
    ]
   },
   "doi": "Làm “bảng buổi sáng” (10 phút): mẹ và bé vẽ 4 ô lên tờ giấy A4: đồng hồ, bàn chải, bát cơm, cặp sách. Bé tô màu. Dán bảng cạnh bồn rửa mặt. Mỗi ô mẹ đọc tên tiếng Việt, rồi bé thử nói tiếng Anh: wake up, brush teeth, eat breakfast, go to school.",
   "ob": "Ông bà cùng cháu vẽ bốn việc buổi sáng lên giấy và dán cạnh chỗ rửa mặt.",
   "toi": "Mẹ kể truyện “Chân, Tay, Tai, Mắt, Miệng” bằng lời của mẹ: một buổi sáng, Chân, Tay, Tai, Mắt giận Miệng vì nghĩ Miệng chỉ ngồi ăn, nên rủ nhau nghỉ làm. Mấy hôm sau cả bọn mệt lả, không ai nhấc nổi mình. Cả nhóm hiểu ra Miệng ăn là để nuôi tất cả, nên lại làm lành. Vừa kể vừa chỉ vào từng bộ phận trên người bé. Cuối truyện hỏi: “Sáng mai, tay con sẽ làm việc gì? Mắt con làm việc gì?”"
  },
  {
   "chuyen": "Hôm nay là ngày của bàn chải đánh răng. Bài hát sẽ cùng bé chải răng thật.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Mẹ dừng video ở đầu bài, hỏi “Where is your toothbrush?” (bàn chải của con đâu?). Bé chạy đi lấy bàn chải thật (chưa cần kem). Xem tiếp, bé cầm bàn chải làm theo “up and down”. Mẹ đếm cùng: một, hai, ba lần lên xuống.",
    "b": "Brush your teeth, up and down!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Xem bài cùng bé, dừng ở cảnh buổi sáng, hỏi “Bạn nhỏ đang làm gì?” Bé trả lời bằng tiếng Việt cũng được. Mẹ nói lại từ trong bài: 早上 (zǎoshang), 刷牙 (shuāyá). Lần sau bé sẽ nói thay mẹ.",
    "b": "早上好！(zǎoshang hǎo)"
   },
   "words": {
    "en": [
     1,
     6,
     0
    ],
    "zh": [
     5,
     1,
     3
    ]
   },
   "doi": "Đánh răng có nhạc (tối nay, 10 phút): mẹ bật lại bài “Brush Your Teeth” bằng tiếng (không cần nhìn màn hình) khi bé đánh răng thật. Mẹ đứng cạnh bé, nói “up and down, up and down”. Đánh xong, bé há miệng cho mẹ xem, mẹ khen: “Clean teeth! Răng sạch rồi!”",
   "ob": "Ông bà đứng cạnh cháu khi cháu đánh răng, cùng đếm một đến mười.",
   "toi": "Câu đố dân gian “Câu đố con gà trống”. Mẹ đọc chậm từng câu, đến câu cuối dừng lại cho bé đoán. Bé đoán xong, hai mẹ con cùng gáy “ò ó o” thật to rồi giả vờ thức dậy. Hỏi thêm: “Sáng nay ai gọi con dậy? Mẹ, đồng hồ hay gà trống?”",
   "lyr": "Câu đố con gà trống"
  },
  {
   "chuyen": "Nhà mình chơi “buổi sáng giả vờ”: mẹ tắt đèn, bé nằm ngủ, nhạc lên thì bé dậy.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bé nằm trên thảm giả vờ ngủ. Mẹ bật video, bé dậy và làm hết các động tác theo bài: rửa mặt, chải tóc, mặc áo. Chơi freeze dance: mẹ bấm dừng bất chợt, bé đứng im như tượng. Mẹ hỏi “What are you doing?” và gợi ý bé nói “Wash face!” hoặc “Comb hair!”.",
    "b": "Freeze! What are you doing?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật lại 作息歌. Mẹ và bé đứng đối diện, làm động tác thật to theo từng từ. Mẹ dừng nhạc giữa bài, hỏi “下一个是什么？” (xià yí gè shì shénme – tiếp theo là gì?). Bé làm động tác của việc tiếp theo, mẹ nói từ tiếng Trung.",
    "b": "我们洗脸。(wǒmen xǐ liǎn)"
   },
   "words": {
    "en": [
     0,
     2,
     7,
     3
    ],
    "zh": [
     0,
     2,
     1
    ]
   },
   "doi": "Tự rửa mặt như người lớn (10 phút): sáng mai hoặc chiều nay, mẹ để khăn mặt và cốc nước ngay tầm tay bé. Bé tự vặn vòi nhỏ, tự vắt khăn, lau mặt theo thứ tự trán – má – cằm. Mẹ đứng cạnh, mỗi bước nói một từ: “wash” – “dry” (lau khô). Xong bé tự treo khăn lên móc.",
   "ob": "Ông bà để khăn và cốc nước vừa tầm, để cháu tự rửa mặt, ông bà chỉ đứng cạnh khen.",
   "toi": "Mẹ đọc cho bé một truyện ngắn trong bộ sách “Bé tập kể chuyện – Mỗi tuần một câu chuyện” (NXB Trẻ). Chọn truyện có cảnh buổi sáng hoặc có bạn nhỏ tự làm việc. Đọc xong, hỏi bé: “Bạn nhỏ dậy rồi làm gì đầu tiên? Con có làm giống bạn không?”"
  },
  {
   "chuyen": "Hôm nay bé là “thầy dạy đánh răng” cho gấu bông.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Đặt gấu bông ngồi cạnh. Mẹ bật video, bé cầm một bàn chải cũ “đánh răng” cho gấu theo bài. Mẹ dừng giữa chừng, hỏi “Is Teddy brushing? Yes or no?” Bé trả lời “Yes!” hoặc “No!”, rồi tiếp tục. Cuối bài bé nói với gấu “Good job!”.",
    "b": "Teddy, brush your teeth!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Xem bài 好习惯儿歌, mẹ dán tờ “bảng buổi sáng” hôm thứ Hai ra trước mặt. Mỗi khi bài hát đến một việc, bé chạy đến chạm vào ô đúng trên bảng. Mẹ dừng ở cảnh ăn sáng, nói 吃早饭 (chī zǎofàn), bé làm động tác cầm thìa ăn.",
    "b": "吃早饭啦！(chī zǎofàn la)"
   },
   "words": {
    "en": [
     1,
     4,
     8
    ],
    "zh": [
     1,
     3,
     5,
     6
    ]
   },
   "doi": "Bữa sáng có tên gọi (15 phút): sáng mai, khi ăn sáng, mẹ chỉ vào từng thứ trên bàn và hai mẹ con thi gọi tên: sữa – milk – 牛奶 (niúnǎi), bát, thìa. Bé tự rót sữa từ hộp nhỏ ra cốc (mẹ giữ cốc). Ăn xong, bé nói một câu: “I like milk.” hoặc “我喜欢牛奶。”",
   "ob": "Ông bà cho cháu tự rót sữa ra cốc và gọi tên đồ ăn sáng trên bàn.",
   "toi": "Bé kể lại truyện “Chân, Tay, Tai, Mắt, Miệng”. Mẹ chỉ gợi bằng câu hỏi: “Ai giận Miệng? Rồi chuyện gì xảy ra? Cuối cùng các bạn làm gì?” Mỗi khi bé nhắc tên một bộ phận, bé chỉ vào bộ phận đó trên người mẹ. Bé kể đúng thứ tự, mẹ thưởng một cái ôm thật chặt."
  },
  {
   "chuyen": "Hôm nay bé hát trước, video hát sau. Ai nhanh hơn?",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Mẹ bật bài, ngay trước mỗi đoạn mới mẹ bấm dừng và hỏi “What's next?” (tiếp theo là gì?). Bé nói trước: “Wash face!”, “Comb hair!”, rồi mới bật cho video nói. Đúng thì bé tự vỗ tay một cái. Cuối bài, bé nói cả câu “This is the way we wash our face.” theo nhạc.",
    "b": "What's next? You say it!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – bé nói trước video. Bật 好习惯儿歌, mỗi lần đổi cảnh mẹ dừng lại, chỉ vào màn hình hỏi “这是什么？” (zhè shì shénme – đây là gì?). Bé trả lời trước: 刷牙, 洗脸 hoặc 吃早饭. Nếu bé quên, mẹ làm động tác gợi ý, không nói thay.",
    "b": "这是刷牙。(zhè shì shuāyá)"
   },
   "words": {
    "en": [
     2,
     7,
     3,
     0
    ],
    "zh": [
     1,
     2,
     3,
     0
    ]
   },
   "doi": "Tập tiết mục cho ngày mai (10 phút): mẹ và bé chọn một bài trong tuần (bài rửa mặt hoặc bài đánh răng) để bé biểu diễn. Tập 2 lần: lần 1 bé hát và làm động tác theo nhạc, lần 2 tắt nhạc, bé tự hát câu đầu. Bé chọn “trang phục”: một chiếc khăn mặt vắt vai cho vui.",
   "ob": "Ông bà nghe cháu tập hát bài buổi sáng, vỗ tay theo nhịp.",
   "toi": "Câu đố dân gian “Câu đố cái gương (lấp lánh)”. Mẹ đọc câu đố, bé đoán. Đoán xong, hai mẹ con ra đứng trước gương thật: bé chải tóc, mẹ hỏi “Trong gương là ai?” Bé trả lời: “Là con!” Thêm câu tiếng Anh vui: “This is me!”",
   "lyr": "Câu đố cái gương (lấp lánh)"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và buổi biểu diễn nhỏ của bé.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: mẹ chuẩn bị 3 ngôi sao giấy. Sao 1: bé nói đúng 3 việc buổi sáng bằng tiếng Anh. Sao 2: bé làm đúng động tác khi mẹ đọc “wake up – brush teeth – comb hair”. Sao 3: bé chơi xong chuỗi trò chơi trên web. Sau đó bé chọn 1 video yêu thích nhất của tuần để xem lại, vừa xem vừa hát to.",
    "b": "You did it! Three stars!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 作息歌 một lần. Bé làm động tác thật đẹp như đang biểu diễn. Mẹ giơ thẻ sao khi bé nói được 起床 hoặc 刷牙 trước khi bài hát nói.",
    "b": "你真棒！(nǐ zhēn bàng)"
   },
   "special": "Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip",
   "doi": "Buổi biểu diễn “Buổi sáng của con” (15 phút): kê một chiếc ghế làm sân khấu, cả nhà ngồi làm khán giả. Bé giới thiệu: “Xin chào, con là… Con hát bài buổi sáng.” Bé hát và làm động tác bài đã tập (tắt nhạc, mẹ chỉ hát nhẩm cùng nếu bé quên). Cuối tiết mục bé nói 1 câu tiếng Anh: “I brush my teeth!” và 1 câu tiếng Trung: “早上好！”. Mẹ quay clip 1 phút, gửi ông bà.",
   "ob": "Ông bà ngồi làm khán giả, vỗ tay và xin cháu hát lại câu mình thích.",
   "toi": "Buổi tối nhẹ nhàng: cả nhà xem lại clip biểu diễn một lần. Mẹ hỏi bé: “Lúc đứng hát con thấy thế nào? Lần sau con muốn hát bài gì?” Mẹ kể cho bé nghe hồi nhỏ mẹ dậy sớm làm việc gì đầu tiên."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và đi một vòng buổi sáng cùng cả nhà.",
   "en": {
    "v": 1,
    "t": "Ôn tập: bé chọn bài thích nhất trong tuần (rửa mặt hoặc đánh răng) để xem lại. Lần này bé làm “cô giáo”: bé ra lệnh cho mẹ làm động tác bằng tiếng Anh, mẹ làm sai một chút cho bé sửa. Rồi chơi lại một trò trên web bé thích.",
    "b": "Good morning, teacher!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn tập: xem lại 作息歌, bé hát to những từ đã thuộc. Mẹ hỏi một câu Yes/No bằng tiếng Việt: “Bạn trong bài có ăn sáng không?” Bé trả lời rồi nói từ tiếng Trung 吃早饭.",
    "b": "早上好，宝贝！(zǎoshang hǎo, bǎobèi)"
   },
   "doi": "Buổi sáng đi chợ sớm hoặc đi bộ quanh nhà cùng cả nhà (15 phút): trên đường, bé đếm xem thấy bao nhiêu người đang ăn sáng, bao nhiêu bạn nhỏ đang đi học. Mỗi lần thấy, bé nói nhỏ: “Eat breakfast!” hoặc “Go to school!”. Về nhà bé kể với bố: “Sáng nay con thấy…”",
   "ob": "Ông bà dắt tay cháu đi dạo buổi sáng, chỉ cho cháu những người đang ăn sáng, đi học.",
   "toi": "Mẹ và bé ôn lại: bé chọn câu đố thích nhất trong tuần (gà trống hay cái gương) để đố bố. Sau đó mẹ hỏi: “Tuần sau mình sẽ nghe một câu chuyện về chú sâu ăn rất nhiều. Con đoán chú sâu ăn gì?”"
  },
  {
   "chuyen": "Tuần kể chuyện bắt đầu: chú sâu háu ăn đi qua từng ngày trong tuần.",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và dừng hỏi. Xem truyện “The Very Hungry Caterpillar”. Sau mỗi ngày trong truyện (Monday, Tuesday…), mẹ dừng và hỏi “What does he eat?” Bé chỉ vào quả trong hình. Trước khi lật sang ngày mới, hỏi “Chuyện gì xảy ra tiếp? Chú sâu còn đói không?” Bé đoán rồi xem tiếp.",
    "b": "What happens next?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem và dừng hỏi. Mẹ tìm một tập 小猪佩奇 ngắn về buổi sáng (theo hướng dẫn trong danh sách video). Xem 5 phút đầu. Dừng ở cảnh nhà Peppa ăn sáng, hỏi “Peppa đang ăn gì?” rồi nói từ 早上 (zǎoshang), 吃早饭 (chī zǎofàn).",
    "b": "佩奇吃早饭。(Pèiqí chī zǎofàn)"
   },
   "words": {
    "en": [
     4,
     6,
     8
    ],
    "zh": [
     5,
     3,
     0
    ]
   },
   "doi": "Làm “sâu ăn bữa sáng” (15 phút): mẹ cắt 5 hình tròn bằng giấy màu, bé dán nối nhau thành chú sâu. Mỗi đốt bé vẽ một món ăn sáng nhà mình (bánh mì, phở, xôi, sữa, trứng). Mẹ hỏi: “Thứ Hai con ăn gì? Thứ Ba con ăn gì?” Bé chỉ vào đốt sâu và trả lời, mẹ gợi câu “On Monday, I eat…”.",
   "ob": "Ông bà cùng cháu dán chú sâu giấy và kể mỗi ngày cháu ăn sáng món gì.",
   "toi": "Mẹ kể truyện “Loài chim học xây tổ” bằng lời của mẹ: Phượng Hoàng mở lớp dạy các loài chim xây tổ từ sáng sớm. Có chú mới học một chút đã bay về, có chú ở lại học đến cuối buổi. Vì vậy mỗi loài có một kiểu tổ khác nhau, tổ sơ sài hoặc tổ rất khéo. Kể xong hỏi bé: “Nếu con là chim, con học đến cuối buổi hay bay về sớm?”"
  },
  {
   "chuyen": "Hôm nay bé làm thám tử: tìm xem buổi sáng nhà Peppa có giống nhà mình không.",
   "en": {
    "v": 3,
    "t": "Lần 1 – xem và dừng hỏi. Mẹ tìm một tập Peppa Pig ngắn về buổi sáng (xem đoạn đầu 5 phút). Dừng 3 lần, mỗi lần hỏi một câu What/Where: “What is Peppa doing?”, “Where is Daddy Pig?”. Bé trả lời bằng tiếng Việt cũng được, mẹ nói lại 1 từ tiếng Anh: breakfast, morning, school.",
    "b": "Where is Peppa? What is she doing?"
   },
   "zh": {
    "v": 0,
    "t": "Kể lại bài hát như một câu chuyện. Mẹ vẽ nhanh 3 tranh: giường, bàn chải, bát. Xem 作息歌, sau đó mẹ đặt 3 tranh lộn xộn, bé xếp lại đúng thứ tự như trong bài và nói: 起床 – 刷牙 – 吃早饭.",
    "b": "先起床，再刷牙。(xiān qǐchuáng, zài shuāyá)"
   },
   "words": {
    "en": [
     6,
     4,
     5,
     0
    ],
    "zh": [
     0,
     1,
     3
    ]
   },
   "doi": "So sánh hai buổi sáng (10 phút): mẹ và bé ngồi kể: buổi sáng nhà Peppa có những việc gì, buổi sáng nhà mình có những việc gì. Mẹ vẽ hai cột trên giấy, bé đánh dấu việc nào giống nhau. Cuối cùng bé nói: “Peppa eats breakfast. I eat breakfast too!”",
   "ob": "Ông bà hỏi cháu sáng nay cháu làm gì trước, làm gì sau, rồi khen cháu nhớ giỏi.",
   "toi": "Câu đố dân gian “Câu đố cái thìa”. Mẹ đọc chậm, đến câu cuối để bé đoán. Sau đó mẹ đưa cho bé cầm một chiếc thìa và một đôi đũa, hỏi: “Con thấy cầm cái nào dễ hơn? Sáng mai con muốn ăn bằng thìa hay đũa?”",
   "lyr": "Câu đố cái thìa"
  },
  {
   "chuyen": "Nhà mình biến thành sân khấu: bé đóng vai chú sâu háu ăn.",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Bé nằm cuộn tròn trong chăn làm quả trứng. Mẹ bật truyện, đến đoạn sâu nở, bé chui ra. Mỗi ngày trong truyện, bé bò đến “ăn” quả mẹ đặt sẵn (quả thật hoặc tranh). Mẹ dừng hỏi “Is he hungry? Yes or no?” Bé xoa bụng nói “Yes, I am hungry!”. Cuối truyện bé dang tay thành bướm.",
    "b": "I am hungry! I eat an apple."
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại tập 小猪佩奇 lần trước (5 phút). Bé đóng vai Peppa, mẹ đóng vai mẹ Peppa. Dừng ở cảnh buổi sáng, hai mẹ con nói thay nhân vật: mẹ nói “早上好！”, bé đáp “妈妈早上好！”.",
    "b": "妈妈早上好！(māma zǎoshang hǎo)"
   },
   "words": {
    "en": [
     4,
     6,
     8
    ],
    "zh": [
     5,
     3,
     6
    ]
   },
   "doi": "Bé tự chuẩn bị bữa sáng nhỏ (15 phút): mẹ chuẩn bị sẵn chuối đã bóc, bánh mì cắt sẵn, sữa hộp. Bé tự xếp lên đĩa, tự cắm ống hút. Mẹ hỏi bằng 2 thứ tiếng: “What do you eat?” – bé đáp “I eat bread.”; “你喝什么？” – bé đáp “牛奶！”. Dao kéo do mẹ cầm.",
   "ob": "Ông bà để cháu tự xếp bữa sáng lên đĩa, ông bà cầm dao cắt bánh.",
   "toi": "Mẹ đọc cho bé một truyện trong bộ “Những bài học nhỏ” (NXB Trẻ), chọn truyện về thói quen tốt hoặc tự lập. Đọc đến giữa truyện, dừng hỏi: “Con đoán bạn nhỏ sẽ làm gì tiếp?” rồi đọc tiếp để xem bé đoán đúng không."
  },
  {
   "chuyen": "Hôm nay bé kể chuyện bằng tranh, mẹ là người nghe.",
   "en": {
    "v": 3,
    "t": "Lần 2 – kể lại bằng tranh. Xem lại tập Peppa (5 phút). Trước khi xem, mẹ dặn: “Con nhớ 3 việc Peppa làm nhé.” Xem xong, bé vẽ 3 việc đó vào 3 ô giấy và kể lại. Mẹ hỏi thêm câu tiếng Anh: “What does Peppa do first?” Bé trả lời bằng một từ: “Wake up!”, “Breakfast!”.",
    "b": "First, wake up. Then, eat breakfast."
   },
   "zh": {
    "v": 1,
    "t": "Kể lại bài hát thành câu chuyện. Xem 好习惯儿歌, rồi mẹ hỏi: “Bạn nhỏ trong bài làm gì đầu tiên? Cuối cùng làm gì?” Bé vừa kể bằng tiếng Việt vừa chèn từ tiếng Trung: 起床, 刷牙, 洗脸, 上学.",
    "b": "我去上学！(wǒ qù shàngxué)"
   },
   "words": {
    "en": [
     0,
     4,
     5,
     6
    ],
    "zh": [
     0,
     1,
     2,
     4
    ]
   },
   "doi": "Chuyển ngữ ở bồn rửa mặt (10 phút): mẹ nói tiếng Anh, bé nói tiếng Trung. Mẹ nói “brush teeth”, bé đáp “刷牙” và làm động tác. Mẹ nói “wash face”, bé đáp “洗脸”. Đổi vai: mẹ nói tiếng Việt “thức dậy”, bé nói cả hai: “wake up – 起床”. Đúng mỗi từ được một ngôi sao vẽ trên tay.",
   "ob": "Ông bà nói tên việc bằng tiếng Việt, cháu nói lại bằng tiếng Anh hoặc tiếng Trung.",
   "toi": "Bé kể lại truyện “Loài chim học xây tổ” bằng 3 tranh: mẹ vẽ (hoặc bé vẽ) ba khung: lớp học của Phượng Hoàng, chú chim bay về sớm, chú chim học đến cuối. Bé chỉ từng khung và kể. Mẹ hỏi: “Tổ của chú nào chắc hơn? Vì sao?”"
  },
  {
   "chuyen": "Bé là người kể chuyện chính: video chỉ giúp bé nhớ.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước video. Mẹ tắt tiếng video, chỉ cho xem hình. Đến mỗi ngày trong tuần, bé tự kể: “On Monday, he eats one apple.” (mẹ gợi từ nếu cần). Sau đó bật tiếng nghe lại đoạn đó xem bé kể có giống không. Cuối cùng bé nói câu của mình: “On Monday, I eat…”",
    "b": "You tell the story! On Monday…"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé nói trước. Xem lại tập 小猪佩奇 (5 phút), mẹ dừng trước mỗi cảnh quen, bé nói trước một từ: 早上, 吃早饭, 上学. Thêm câu hỏi chuyển ngữ: mẹ nói “breakfast” bằng tiếng Anh, bé nói từ tiếng Trung tương ứng.",
    "b": "我喜欢吃早饭。(wǒ xǐhuan chī zǎofàn)"
   },
   "words": {
    "en": [
     4,
     6,
     8,
     5
    ],
    "zh": [
     5,
     3,
     4,
     6
    ]
   },
   "doi": "Chuẩn bị picnic ngày mai (10 phút): bé và mẹ lên danh sách đồ ăn sáng mang ra sân. Bé vẽ từng món vào giấy. Mỗi món bé nói tên tiếng Anh hoặc tiếng Trung nếu biết: milk – 牛奶, bread – 面包 (miànbāo), egg. Bé tự chọn chiếc khăn trải và cái giỏ.",
   "ob": "Ông bà cùng cháu chọn đồ ăn sáng để mang đi picnic, cháu đọc tên từng món.",
   "toi": "Câu đố dân gian “Câu đố bàn tay”. Mẹ đọc câu đố, cho bé đoán. Sau đó hai mẹ con đếm năm ngón tay bằng ba thứ tiếng: một – one – 一 (yī)… Mẹ nhắc: “Sáng nào năm ông này cũng làm việc gì cho con?” (rửa mặt, cầm bàn chải, cầm thìa).",
   "lyr": "Câu đố bàn tay"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và picnic bữa sáng ngoài sân.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: mẹ chấm sao. Sao 1: bé kể lại 3 ngày của chú sâu (Monday, Tuesday, Wednesday). Sao 2: bé nói câu “I eat…” hoặc “I like…” về bữa sáng. Sao 3: bé hoàn thành chuỗi trò chơi trên web. Xong, bé chọn 1 video yêu thích của tuần xem lại và kể cho mẹ nghe đoạn bé thích nhất.",
    "b": "Tell me your favourite part!"
   },
   "zh": {
    "v": 2,
    "t": "Xem lại cảnh ăn sáng trong tập 小猪佩奇. Bé đóng vai Peppa nói “早上好！”. Mẹ chấm thêm một sao nếu bé tự nói được 吃早饭.",
    "b": "我们去野餐！(wǒmen qù yěcān)"
   },
   "special": "Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung",
   "doi": "Picnic bữa sáng (15 phút): trải khăn ở sân hoặc ban công, bày đồ ăn bé đã chọn hôm qua. Trước khi ăn, bé làm “người phục vụ”: mẹ hỏi “Milk, please!”, bé đưa hộp sữa và nói “Here you are!”. Mẹ hỏi bằng tiếng Trung “牛奶呢？” (niúnǎi ne – sữa đâu?), bé chỉ và nói “这是牛奶。”. Ăn xong, bé tự gấp khăn, nhặt rác bỏ vào túi.",
   "ob": "Ông bà ngồi picnic cùng cháu, xin cháu đưa từng món và gọi tên món đó.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé về buổi picnic: “Con thích món nào nhất? Con đưa đồ cho ai?” Mẹ kể bé nghe bữa sáng hồi mẹ còn nhỏ ở quê (xôi, khoai, cơm nắm), để bé thấy mỗi nhà mỗi thời ăn sáng khác nhau."
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới, cả nhà nghỉ ngơi.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: bé chọn một video bất kỳ của vòng này để xem lại (bài rửa mặt, bài đánh răng hay truyện chú sâu). Mẹ để bé tự hát, tự kể, không hỏi bài. Chỉ cuối video mẹ hỏi một câu: “What do you do in the morning?”",
    "b": "What do you do in the morning?"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: xem lại 好习惯儿歌 một lần, bé hát theo những từ đã thuộc. Mẹ không sửa lỗi, chỉ khen.",
    "b": "明天早上见！(míngtiān zǎoshang jiàn)"
   },
   "doi": "Chơi lại một trò web bé thích nhất trong vòng. Sau đó bé tự sửa lại “bảng buổi sáng” dán ở bồn rửa mặt: thêm ô mới cho việc bé tự làm được (gấp chăn, cất dép).",
   "ob": "Ông bà khen những việc buổi sáng cháu đã tự làm được trong hai tuần.",
   "toi": "Mẹ và bé nằm cạnh nhau, ôn lại hai tuần: bé kể buổi sáng của mình từ lúc thức dậy đến lúc đi học, mẹ chỉ lắng nghe và gật đầu. Mẹ đọc lại câu đố bé thích nhất. Chúc bé ngủ ngon bằng ba thứ tiếng. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[134] = {
 "sub": "Buổi tối: tắm, đọc sách, đi ngủ",
 "vocab": {
  "en": [
   [
    "take a bath",
    "🛁",
    "tắm",
    true
   ],
   [
    "wash hands",
    "🧼",
    "rửa tay",
    true
   ],
   [
    "brush teeth",
    "🪥",
    "đánh răng",
    true
   ],
   [
    "read a book",
    "📖",
    "đọc sách",
    true
   ],
   [
    "sleep",
    "😴",
    "ngủ",
    true
   ],
   [
    "bed",
    "🛏️",
    "cái giường",
    false
   ],
   [
    "night",
    "🌙",
    "buổi tối, ban đêm",
    false
   ],
   [
    "good night",
    "🌃",
    "chúc ngủ ngon",
    false
   ],
   [
    "star",
    "⭐",
    "ngôi sao",
    false
   ]
  ],
  "zh": [
   [
    "洗澡",
    "xǐzǎo",
    "tắm",
    "🛁"
   ],
   [
    "洗手",
    "xǐshǒu",
    "rửa tay",
    "🧼"
   ],
   [
    "刷牙",
    "shuāyá",
    "đánh răng",
    "🪥"
   ],
   [
    "看书",
    "kàn shū",
    "đọc sách",
    "📖"
   ],
   [
    "睡觉",
    "shuìjiào",
    "đi ngủ",
    "😴"
   ],
   [
    "晚上",
    "wǎnshang",
    "buổi tối",
    "🌙"
   ],
   [
    "晚安",
    "wǎn'ān",
    "chúc ngủ ngon",
    "🌃"
   ]
  ],
  "en_phr": [
   [
    "I take a bath at night.",
    "bath",
    "🛁"
   ],
   [
    "I can wash my hands.",
    "wash",
    "🧼"
   ],
   [
    "I read a book with Mum.",
    "book",
    "📖"
   ],
   [
    "Good night, Mum!",
    "night",
    "🌃"
   ]
  ],
  "zh_phr": [
   [
    "我洗澡。",
    "洗澡",
    "wǒ xǐzǎo",
    "con tắm",
    "🛁"
   ],
   [
    "我看书。",
    "看书",
    "wǒ kàn shū",
    "con đọc sách",
    "📖"
   ],
   [
    "妈妈，晚安！",
    "晚安",
    "māma, wǎn'ān",
    "mẹ ơi, chúc mẹ ngủ ngon",
    "🌃"
   ],
   [
    "我睡觉了。",
    "睡觉",
    "wǒ shuìjiào le",
    "con đi ngủ đây",
    "😴"
   ]
  ],
  "seq": [
   [
    "🛁",
    "take a bath",
    "洗澡"
   ],
   [
    "🪥",
    "brush teeth",
    "刷牙"
   ],
   [
    "📖",
    "read a book",
    "看书"
   ],
   [
    "😴",
    "go to sleep",
    "睡觉"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "The Hand Washing Song",
    "u": "https://www.youtube.com/watch?v=8lu587o8T3c",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The Bath Song",
    "u": "https://www.youtube.com/watch?v=aUgy3u5Mvzk",
    "kind": "song_action",
    "min": 3,
    "ch": "Tobee & Friends (Super Simple Puppets)"
   },
   {
    "t": "Ten In The Bed",
    "u": "https://www.youtube.com/watch?v=TdDypyS_5zE",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Twinkle Twinkle Little Star",
    "u": "https://www.youtube.com/watch?v=yCjJyiqpAuU",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "洗手歌 Hand-washing song (bài hát rửa tay)",
    "u": "https://www.youtube.com/watch?v=WLStE6FTc2U",
    "kind": "song_action",
    "min": 2,
    "ch": "Little Baby Bum – 小寶貝布姆"
   },
   {
    "t": "刷牙歌 Brush teeth song (bài hát đánh răng)",
    "u": "https://www.youtube.com/watch?v=-gl9Fj-_DTQ",
    "kind": "song_action",
    "min": 2,
    "ch": "Little Baby Bum – 小寶貝布姆"
   },
   {
    "t": "睡吧，月亮！Go to Sleep, Moon! (ngủ đi, mặt trăng)",
    "u": "https://www.youtube.com/watch?v=gLcWMl4Aq0A",
    "kind": "song_action",
    "min": 1.5,
    "ch": "Cool Panda Chinese Learning"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: nước, xà phòng và bóng tối",
   "toi_vi": [
    {
     "t": "Con rùa",
     "type": "ve",
     "lyr": "Rì rà rì rà\nĐội nhà đi chơi\nĐến khi tối trời\nÚp nhà nằm ngủ."
    },
    {
     "t": "Gió mùa thu mẹ ru con ngủ",
     "type": "hat_ru",
     "lyr": "Gió mùa thu mẹ ru con ngủ\nNăm canh dài mẹ thức đủ năm canh"
    }
   ],
   "book_vi": {
    "t": "Thỏ con đi ngủ",
    "author": "Quỳnh Lê",
    "publisher": "Crabit Kidbooks"
   }
  },
  {
   "title": "Tuần Thử thách: ai đi ngủ đúng giờ nhanh nhất",
   "toi_vi": [
    {
     "t": "Đố ai đếm được lá rừng",
     "type": "ca_dao",
     "lyr": "Đố ai đếm được lá rừng\nĐố ai đếm được mấy tầng trời cao\nĐố ai đếm được vì sao\nĐố ai đếm được công lao mẹ già"
    },
    {
     "t": "Ru con con ngủ cho lành",
     "type": "hat_ru",
     "lyr": "Ru con con ngủ cho lành\nĐể mẹ gánh nước rửa bành con voi\nMuốn coi lên núi mà coi\nCoi Bà Triệu tướng cưỡi voi đánh cồng"
    }
   ],
   "book_vi": {
    "t": "Một cái ôm thật to (thơ)",
    "author": "Hoàng Ngọc Diệp",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được take a bath, brush teeth, read a book, sleep khi mẹ chỉ tranh"
  ],
  [
   "en",
   "Tự nói “Good night, Mum!” trước khi ngủ"
  ],
  [
   "zh",
   "Nói được 洗澡, 刷牙, 睡觉 và 晚安"
  ],
  [
   "zh",
   "Nói được cả câu 我睡觉了。 trước khi đi ngủ"
  ],
  [
   "vi",
   "Kể lại được việc buổi tối theo thứ tự bằng 3–4 câu"
  ],
  [
   "td",
   "Đếm ngược được từ 10 về 1 bằng tiếng Anh với bài Ten In The Bed"
  ],
  [
   "xh",
   "Tự rửa tay đủ 20 giây và tự chọn sách trước khi ngủ"
  ],
  [
   "vd",
   "Làm đúng động tác chà tay, xoa xà phòng, lăn người (roll over)"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này bé là nhà khoa học nhỏ của buổi tối: khám phá nước, xà phòng và bóng tối.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem “The Hand Washing Song” cùng bé. Dừng ở chỗ xoa xà phòng, hỏi “Where is the soap?” Bé chỉ vào màn hình. Dừng ở chỗ xả nước, hỏi “Is it water? Yes or no?” Bé trả lời “Yes!”. Mẹ đếm cùng video thời gian chà tay.",
    "b": "Wash your hands with soap and water."
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem 洗手歌, mỗi lần nghe 洗手 (xǐshǒu) bé xoa hai tay vào nhau. Mẹ dừng giữa bài, chỉ vào tay bé, nói 手 (shǒu). Bé nhắc lại.",
    "b": "我们洗手吧。(wǒmen xǐshǒu ba)"
   },
   "words": {
    "en": [
     1,
     6
    ],
    "zh": [
     1,
     5
    ]
   },
   "doi": "Thí nghiệm “tiêu chạy trốn” (10 phút): mẹ đổ nước vào một cái bát, rắc một chút bột tiêu lên mặt nước. Bé chạm một ngón tay khô vào giữa bát: tiêu không chạy. Bé xoa một chút xà phòng lên ngón tay rồi chạm lại: tiêu chạy dạt ra mép bát. Mẹ nói: “Soap! Xà phòng làm vi khuẩn chạy mất.” Nhắc bé không dụi mắt, xong thí nghiệm rửa tay ngay. Mẹ luôn ngồi cạnh khi có nước.",
   "ob": "Ông bà làm cùng cháu thí nghiệm bát nước rắc tiêu và ngón tay có xà phòng.",
   "toi": "Mẹ kể truyện “Nàng tiên Ốc” bằng lời của mẹ: bà cụ nghèo bắt được con ốc xinh, không nỡ bán nên thả vào chum nước. Từ hôm ấy, chiều nào bà đi làm về cũng thấy nhà sạch tinh, cơm canh nóng sẵn. Một hôm bà rình xem, thấy cô gái hiền lành bước ra từ vỏ ốc. Bà giữ cô lại, hai bà cháu sống vui vẻ, thương nhau. Hỏi bé: “Buổi tối nhà mình, con giúp mẹ được việc gì?”"
  },
  {
   "chuyen": "Giờ tắm hôm nay là giờ khám phá: đồ gì nổi, đồ gì chìm?",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Xem “The Bath Song”. Mỗi khi bài hát rửa một bộ phận (hair, face, arms, tummy, toes), mẹ dừng và hỏi “Where is your tummy?” Bé chỉ vào bụng mình. Câu hỏi What: dừng ở bồn tắm, hỏi “What is this?” – “Bath!”.",
    "b": "Splash, splash! Bath time!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Xem 刷牙歌, bé cầm bàn chải giả vờ chải theo nhạc. Mẹ dừng lại, chỉ vào miệng nói 刷牙 (shuāyá), bé nhắc lại và cười thật to để khoe răng.",
    "b": "晚上要刷牙。(wǎnshang yào shuāyá)"
   },
   "words": {
    "en": [
     0,
     6,
     2
    ],
    "zh": [
     2,
     5
    ]
   },
   "doi": "Nổi hay chìm trong giờ tắm (15 phút): mẹ chuẩn bị 5 đồ vật to bằng nắm tay trở lên: vịt nhựa, cốc nhựa, thìa inox to, quả bóng nhựa, miếng bọt biển. Trước khi thả, bé đoán “nổi” hay “chìm”, mẹ ghi ra giấy. Thả từng món vào chậu, xem đúng không. Mẹ ngồi sát bên cạnh suốt lúc có nước, nước chỉ ngập đến bụng bé.",
   "ob": "Ông bà cho cháu thả đồ nhựa to vào chậu tắm, đoán xem đồ gì nổi, ông bà luôn ngồi cạnh.",
   "toi": "Đồng dao “Con rùa”. Mẹ đọc chậm, bé bò trên giường làm rùa “đội nhà đi chơi”. Đến câu cuối “úp nhà nằm ngủ”, bé chui vào chăn nằm im. Đọc 2–3 lần, lần cuối để bé tự đọc câu cuối. Hỏi: “Rùa ngủ trong nhà của rùa, còn con ngủ ở đâu?”",
   "lyr": "Con rùa"
  },
  {
   "chuyen": "Hôm nay mình đo xem rửa tay “đủ lâu” là bao lâu.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bé đứng cạnh bồn rửa (chưa mở nước), bật lại video và chà tay theo đúng từng bước trong bài: lòng tay, mu tay, kẽ ngón. Mẹ dừng video bất chợt, bé dừng tay ngay (freeze). Mẹ hỏi “What are you doing?” Bé trả lời “Wash hands!”.",
    "b": "Rub, rub, rub! Wash your hands."
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật 洗手歌, lần này bé ra bồn rửa tay thật, mở nước nhỏ, rửa đúng theo bài. Mẹ đứng cạnh, mỗi bước nói một từ: 洗手 (xǐshǒu), 手 (shǒu). Rửa xong bé tự lau tay.",
    "b": "手洗干净了！(shǒu xǐ gānjìng le)"
   },
   "words": {
    "en": [
     1,
     6,
     4
    ],
    "zh": [
     1,
     5,
     4
    ]
   },
   "doi": "Đếm 20 giây rửa tay (10 phút): mẹ và bé thử rửa tay vừa đếm. Lần 1 đếm tiếng Việt từ 1 đến 20. Lần 2 đếm tiếng Anh đến 10 hai lần. Lần 3 hát bài “Happy birthday” nhẩm 2 lần (khoảng 20 giây). Bé chọn cách bé thích, dán tờ giấy nhắc ở bồn rửa.",
   "ob": "Ông bà cùng cháu rửa tay và đếm đến 20 trước bữa tối.",
   "toi": "Mẹ đọc sách “Thỏ con đi ngủ” (Quỳnh Lê, Crabit Kidbooks). Đọc xong, hỏi bé: “Thỏ con làm gì trước khi ngủ? Con làm gì trước khi ngủ?” Bé kể theo thứ tự, mẹ đếm trên ngón tay: một tắm, hai đánh răng, ba đọc sách, bốn đi ngủ."
  },
  {
   "chuyen": "Khám phá bóng tối: tắt đèn rồi, mình nhìn thấy gì?",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật lại “The Bath Song” (không cần nước). Bé đứng, nghe tên bộ phận nào thì giả vờ kỳ cọ bộ phận đó thật nhanh. Mẹ chơi đổi tốc độ: “Fast!” bé chà nhanh, “Slow!” bé chà chậm. Cuối bài bé nói “I take a bath!”.",
    "b": "Wash your hair! Wash your toes!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem và chỉ. Xem 睡吧，月亮！. Dừng ở cảnh mặt trăng, hỏi “Đây là gì?” mẹ nói 月亮 (yuèliang); dừng ở cảnh ngôi sao, mẹ nói 星星 (xīngxing). Cuối bài cả hai cùng nói 睡觉 (shuìjiào) và giả vờ ngáy.",
    "b": "月亮睡觉了。(yuèliang shuìjiào le)"
   },
   "words": {
    "en": [
     0,
     6
    ],
    "zh": [
     4,
     5,
     6
    ]
   },
   "doi": "Đèn pin trong phòng tối (10 phút): tắt đèn phòng ngủ, mẹ bật đèn pin. Bé chiếu lên tường, mẹ dùng tay làm bóng con thỏ, con chim. Bé đếm có mấy cái bóng. Đặt gấu bông ở gần và xa đèn: bóng to hay nhỏ? Mẹ nói “Big! Small!”. Tắt đèn pin, hai mẹ con thì thầm “Good night!”.",
   "ob": "Ông bà tắt đèn, dùng đèn pin làm bóng tay con vật cho cháu đoán.",
   "toi": "Bé kể lại truyện “Nàng tiên Ốc”. Mẹ đưa ra 3 đồ vật gợi ý: một cái bát (chum nước), một cái chổi (nhà sạch), một cái thìa (cơm canh). Bé cầm từng món và kể đoạn đó. Mẹ hỏi: “Nếu nhà mình có nàng tiên Ốc, con muốn cô làm gì? Con có thể tự làm việc đó không?”"
  },
  {
   "chuyen": "Hôm nay bé là người nói trước, video nói sau.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Bật “The Hand Washing Song”, mẹ dừng ngay trước mỗi lời quen thuộc. Bé nói trước: “Soap!”, “Water!”, “Wash hands!”. Bật tiếp nghe video có nói giống không. Cuối cùng bé nói cả câu: “I can wash my hands.”",
    "b": "Say it first! What's next?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – làm động tác. Bật 睡吧，月亮！, bé giơ tay làm mặt trăng tròn, xòe tay lấp lánh khi nghe 星星. Mẹ dừng giữa bài hỏi “月亮在哪儿？” (yuèliang zài nǎr – mặt trăng đâu?), bé chỉ lên trần nhà hoặc ra cửa sổ.",
    "b": "星星在天上。(xīngxing zài tiān shang)"
   },
   "words": {
    "en": [
     1,
     6,
     7
    ],
    "zh": [
     4,
     5,
     6
    ]
   },
   "doi": "Chuẩn bị “sách nhỏ” cho ngày mai (10 phút): gấp đôi 2 tờ giấy A4, dập ghim làm cuốn sách 8 trang. Bé chọn 4 việc buổi tối sẽ vẽ: bồn tắm, bàn chải, quyển sách, cái giường. Mẹ viết tên tiếng Việt nhỏ ở góc mỗi trang, để trống chỗ cho bé vẽ ngày mai.",
   "ob": "Ông bà gấp giấy làm cuốn sách nhỏ cùng cháu, cho cháu chọn việc sẽ vẽ.",
   "toi": "Hát ru dân gian “Gió mùa thu mẹ ru con ngủ”. Mẹ tắt đèn, ngồi cạnh giường, ru chậm hai câu này 3 lần theo giọng ru quen thuộc. Mẹ kể: “Ngày xưa bà ru mẹ bằng câu này đấy.” Bé có thể ru lại cho gấu bông.",
   "lyr": "Gió mùa thu mẹ ru con ngủ"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và làm sách nhỏ “Buổi tối của con”.",
   "en": {
    "v": 1,
    "t": "Thử thách lớn: mẹ chuẩn bị bảng 3 sao. Sao 1: bé nói đúng 3 việc buổi tối bằng tiếng Anh (bath, brush teeth, sleep). Sao 2: bé rửa tay đủ 20 giây vừa đếm tiếng Anh. Sao 3: bé chơi xong chuỗi trò trên web. Xong, bé chọn 1 video yêu thích của tuần để xem lại và làm động tác thật đẹp.",
    "b": "Great job! You get a star!"
   },
   "zh": {
    "v": 2,
    "t": "Xem lại 睡吧，月亮！. Bé nói 晚安 với mặt trăng trong video. Mẹ thưởng một sao nếu bé tự nói 睡觉.",
    "b": "宝贝，晚安！(bǎobèi, wǎn'ān)"
   },
   "special": "Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần",
   "doi": "Sách nhỏ “Buổi tối của con” (15 phút): mở cuốn sách gấp hôm qua. Mỗi trang bé vẽ một việc: tắm, đánh răng, đọc sách, đi ngủ. Bé có thể dán thêm hình cắt từ tờ rơi siêu thị (bàn chải, xà phòng). Mẹ viết dưới mỗi tranh từ tiếng Anh và tiếng Trung: bath – 洗澡, brush teeth – 刷牙, read a book – 看书, sleep – 睡觉. Cuối cùng bé “đọc” cả cuốn sách cho bố nghe.",
   "ob": "Ông bà nghe cháu đọc cuốn sách nhỏ và hỏi cháu từng trang vẽ việc gì.",
   "toi": "Buổi tối nhẹ nhàng: đọc cuốn sách nhỏ bé vừa làm thay sách mua. Mẹ hỏi: “Trang nào con vẽ đẹp nhất? Mai con muốn thêm trang nào?” Đặt cuốn sách ở đầu giường."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và một buổi tối đúng giờ cùng cả nhà.",
   "en": {
    "v": 0,
    "t": "Ôn tập: bé chọn video thích nhất (bài rửa tay hay bài tắm) để xem lại. Lần này bé hát cùng bố. Mẹ hỏi một câu Yes/No cuối bài: “Do you like bath time?” Bé trả lời “Yes, I do!” hoặc “No!”.",
    "b": "Do you like bath time?"
   },
   "zh": {
    "v": 1,
    "t": "Ôn tập: xem lại 刷牙歌, cả nhà cùng chải răng giả vờ theo nhạc. Bé làm “cô giáo”, nói 刷牙 cho cả nhà làm theo.",
    "b": "大家一起刷牙！(dàjiā yìqǐ shuāyá)"
   },
   "doi": "Buổi tối cả nhà đúng giờ (15 phút): cả nhà cùng làm việc buổi tối theo thứ tự bé đã vẽ trong sách nhỏ. Bé cầm sách đi trước, đến mỗi việc bé đọc to: “Bath time!”, “Brush teeth!”, “Read a book!”. Bố mẹ làm theo lệnh của bé. Lên giường, bé nói “Good night!” với từng người.",
   "ob": "Ông bà làm theo lệnh của cháu: tắm, đánh răng, đọc sách, đi ngủ.",
   "toi": "Ôn lại cả tuần: bé chọn đọc lại đồng dao “Con rùa” hoặc nghe mẹ ru “Gió mùa thu”. Mẹ hỏi: “Tuần sau mình chơi thử thách. Con nghĩ con có thể tự đi ngủ đúng giờ không?”"
  },
  {
   "chuyen": "Tuần Thử thách: mỗi ngày một cuộc thi nhỏ, ai nhanh hơn được sao.",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và đếm. Xếp 10 thú bông (hoặc 10 cái gối, khăn) thành hàng trên giường. Xem “Ten In The Bed”, mỗi lần bài hát “roll over”, bé lấy bớt một con và đếm còn mấy. Câu hỏi What/How many: mẹ dừng hỏi “How many in the bed?” Bé trả lời bằng số tiếng Anh.",
    "b": "How many in the bed?"
   },
   "zh": {
    "v": 2,
    "t": "Thử thách “ai nhanh hơn”: xem 睡吧，月亮！. Mẹ và bé thi nhau chỉ: nghe 月亮 chỉ lên trên, nghe 星星 xòe tay, nghe 睡觉 áp tay vào má. Ai làm đúng trước được một sao.",
    "b": "谁最快？(shéi zuì kuài)"
   },
   "words": {
    "en": [
     5,
     4,
     6
    ],
    "zh": [
     4,
     5,
     6
    ]
   },
   "doi": "Đua đếm ngược trước giờ ngủ (10 phút): bé nằm trên giường cùng 10 thú bông. Mẹ đếm ngược tiếng Anh từ ten, nine, eight… mỗi số bé đẩy một con xuống thảm. Đến “one”, bé nói “Good night!” và nằm im. Lần 2 bé đếm, mẹ đẩy. Ai đếm không vấp được một sao.",
   "ob": "Ông bà xếp thú bông lên giường, cháu đếm và lấy bớt từng con.",
   "toi": "Mẹ kể truyện “Tích Chu” bằng lời của mẹ: Tích Chu được bà thương nhất nhà nhưng mải chơi, không để ý đến bà. Một tối bà ốm, khát nước mà không có ai mang cho, bà hóa thành chim bay đi. Tích Chu hối hận, đi đường xa tìm nước suối mang về, và bà trở lại làm người với cháu. Hỏi bé: “Tối nay con có thể làm gì cho bà, cho mẹ?” (lấy cốc nước, chúc ngủ ngon)."
  },
  {
   "chuyen": "Đố vui buổi tối: mẹ đố, bé trả lời bằng tiếng Anh hoặc tiếng Trung.",
   "en": {
    "v": 3,
    "t": "Lần 1 – xem và hỏi. Xem “Twinkle Twinkle Little Star”, tắt đèn bớt cho giống buổi tối. Mẹ dừng ở câu “up above the world so high”, hỏi “Where is the star? Up or down?” Bé chỉ lên và nói “Up!”. Đố tiếp: “Is it night? Yes or no?”",
    "b": "Where is the star? Up high!"
   },
   "zh": {
    "v": 0,
    "t": "Thử thách bé nói trước: bật 洗手歌, mẹ dừng trước mỗi chữ 洗手, bé nói trước rồi mới bật cho video nói. Nói đúng 3 lần liên tiếp được một sao.",
    "b": "你先说！(nǐ xiān shuō)"
   },
   "words": {
    "en": [
     8,
     6,
     7
    ],
    "zh": [
     1,
     5
    ]
   },
   "doi": "Hộp đố buổi tối (10 phút): mẹ bỏ vào một cái túi vải 5 đồ thật: bàn chải, khăn mặt, quyển sách, cái gối nhỏ, chai sữa tắm (đậy kín). Bé thò tay sờ, đoán đồ gì trước khi lấy ra, rồi nói tên tiếng Anh hoặc tiếng Trung và việc dùng nó: “Book – read a book – 看书”. Đúng mỗi món được một sao.",
   "ob": "Ông bà cho đồ dùng buổi tối vào túi, cháu sờ đoán và gọi tên.",
   "toi": "Ca dao “Đố ai đếm được lá rừng”. Mẹ đọc chậm, bé nhìn ra cửa sổ tìm sao. Mẹ hỏi: “Con đếm được mấy ngôi sao?” Đếm cùng bé bằng ba thứ tiếng đến năm. Mẹ giải thích ngắn: câu cuối nói công mẹ nhiều như sao trên trời, không đếm hết được.",
   "lyr": "Đố ai đếm được lá rừng"
  },
  {
   "chuyen": "Hôm nay bé thi “đúng thứ tự”: làm việc buổi tối không sai bước nào.",
   "en": {
    "v": 2,
    "t": "Lần 2 – làm động tác. Bật “Ten In The Bed”, lần này bé nằm trên thảm cùng mẹ. Mỗi lần “roll over”, bé lăn một vòng, mẹ đếm số còn lại. Mẹ dừng giữa bài hỏi “How many now?” Bé trả lời trước rồi bật xem đúng không. Đúng được một sao.",
    "b": "Roll over! Roll over!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ một từ: xem 刷牙歌. Sau bài hát, mẹ nói tiếng Anh “brush teeth”, bé nói tiếng Trung “刷牙”. Mẹ nói “sleep”, bé nói “睡觉”. Mỗi từ đúng được một sao.",
    "b": "English “sleep”, 中文是“睡觉”。(zhōngwén shì shuìjiào)"
   },
   "words": {
    "en": [
     5,
     4,
     6
    ],
    "zh": [
     2,
     4,
     0
    ]
   },
   "doi": "Thi xếp tranh buổi tối (10 phút): mẹ cắt rời 4 trang trong cuốn sách nhỏ của bé (hoặc vẽ lại 4 tranh). Đặt lộn xộn trên bàn. Bé xếp đúng thứ tự trong 1 phút (mẹ đếm). Xếp xong bé đọc to bằng tiếng Anh: “Bath, brush teeth, read a book, sleep.” Thử lại bằng tiếng Trung: 洗澡, 刷牙, 看书, 睡觉.",
   "ob": "Ông bà đặt bốn tranh lộn xộn, cháu xếp lại theo thứ tự việc buổi tối.",
   "toi": "Mẹ đọc tập thơ “Một cái ôm thật to” (Hoàng Ngọc Diệp, NXB Kim Đồng). Chọn 1–2 bài ngắn. Đọc xong, mẹ và bé ôm nhau thật chặt, bé nói: “Con thương mẹ!” rồi nói thêm “I love you, Mum!”"
  },
  {
   "chuyen": "Thi “ai nhanh tay hơn” với bài hát giờ tắm.",
   "en": {
    "v": 1,
    "t": "Lần 3 – thi nói trước. Mẹ và bé ngồi đối diện, bật “The Bath Song”. Mẹ dừng ngay trước tên mỗi bộ phận; ai nói tên bộ phận tiếp theo bằng tiếng Anh trước (hair, face, arms, tummy, toes) và chạm đúng chỗ thì được một sao. Mẹ cố tình chậm một chút để bé thắng nhiều hơn.",
    "b": "Who is faster? Tummy!"
   },
   "zh": {
    "v": 0,
    "t": "Thử thách mới với 洗手歌: mẹ tắt tiếng video, chỉ cho bé xem hình. Bé tự hát hoặc nói từ 洗手 vào đúng lúc tay trong video bắt đầu xoa. Đúng lúc được một sao.",
    "b": "洗洗小手。(xǐxi xiǎo shǒu)"
   },
   "words": {
    "en": [
     0,
     1,
     6
    ],
    "zh": [
     1,
     0
    ]
   },
   "doi": "Cuộc đua giờ tắm (15 phút): trước khi tắm, mẹ đặt đồng hồ 5 phút. Bé tự cởi quần áo bỏ vào giỏ, tự lấy khăn, tự xoa xà phòng lên tay chân. Mỗi việc làm xong bé hô một từ: “Clothes!”, “Towel!”, “Soap!”. Mẹ điều chỉnh nước, luôn đứng cạnh bé trong nhà tắm. Xong trước khi đồng hồ kêu được hai sao.",
   "ob": "Ông bà pha nước tắm, đứng cạnh cháu và để cháu tự xoa xà phòng.",
   "toi": "Mẹ tự nghĩ 3 câu đố vui về đồ vật buổi tối, ví dụ: “Cái gì có lông mềm, đêm nào cũng nằm cạnh con?” (gấu bông, cái gối), “Cái gì có nhiều trang, mẹ đọc cho con mỗi tối?” (quyển sách). Bé đoán xong lại đố mẹ một câu do bé tự nghĩ. Mẹ khen bé đặt câu đố hay."
  },
  {
   "chuyen": "Thử thách câu dài: bé nói cả câu, không chỉ một từ.",
   "en": {
    "v": 3,
    "t": "Lần 2 – làm động tác và nói câu. Bật “Twinkle Twinkle Little Star”, bé xòe tay lấp lánh và chỉ lên cao. Hết bài, mẹ hỏi “What can you see at night?” Bé trả lời cả câu “I can see a star.” Mẹ giúp từng chữ nếu cần. Nói đủ câu được hai sao.",
    "b": "I can see a star."
   },
   "zh": {
    "v": 2,
    "t": "Câu dài tiếng Trung: xem 睡吧，月亮！, cuối bài mẹ dạy câu “我睡觉了。” (wǒ shuìjiào le – con đi ngủ đây). Bé nói câu này với gấu bông, rồi với mẹ.",
    "b": "我睡觉了。(wǒ shuìjiào le)"
   },
   "words": {
    "en": [
     8,
     6,
     7,
     4
    ],
    "zh": [
     4,
     6,
     5
    ]
   },
   "doi": "Tập 3 câu cho cuộc gọi ông bà ngày mai (10 phút): mẹ và bé chọn 3 câu: “I take a bath.”, “Good night!”, “晚安！”. Tập nói trước gương, mỗi câu kèm một động tác: chà tay, vẫy tay, áp má vào tay. Bé tự chọn câu nào nói đầu tiên.",
   "ob": "Ông bà nghe cháu tập 3 câu chào buổi tối, khen và nhắc cháu cười tươi.",
   "toi": "Bé kể lại truyện “Tích Chu” theo cách mới: bé đóng vai Tích Chu, mẹ đóng vai bà. Đến đoạn bà khát nước, bé chạy đi lấy cốc nước thật cho mẹ. Kết truyện hai bà cháu ôm nhau. Mẹ hỏi: “Vì sao Tích Chu lại đi tìm nước?”"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và gọi video cho ông bà.",
   "en": {
    "v": 3,
    "t": "Thử thách lớn tuần 2: bảng 3 sao. Sao 1: bé đếm ngược 10 về 1 bằng tiếng Anh. Sao 2: bé nói một câu đủ: “I take a bath.” hoặc “I can see a star.” Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất trong hai tuần để xem lại.",
    "b": "Ten, nine, eight… you did it!"
   },
   "zh": {
    "v": 2,
    "t": "Xem lại 睡吧，月亮！, bé hát theo và tự nói 晚安 cuối bài. Một sao nếu bé nói được cả câu 我睡觉了.",
    "b": "爷爷奶奶，晚安！(yéye nǎinai, wǎn'ān)"
   },
   "special": "Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung",
   "doi": "Cuộc gọi buổi tối với ông bà (10–15 phút): bé cầm cuốn sách nhỏ “Buổi tối của con” lên trước camera, lật từng trang và kể bằng tiếng Việt. Sau đó bé nói 3 câu đã tập: “I take a bath.”, “Good night!”, “晚安！”. Mẹ nhờ ông bà hỏi lại bé một câu bằng tiếng Việt: “Cháu tắm xong làm gì?” để bé trả lời. Cuối cuộc gọi bé ru ông bà bằng câu “Gió mùa thu mẹ ru con ngủ”.",
   "ob": "Ông bà gọi video, nghe cháu kể sách nhỏ và nói 3 câu, hỏi lại cháu một câu tiếng Việt.",
   "toi": "Buổi tối nhẹ nhàng: mẹ kể lại cho bé nghe ông bà vui thế nào khi nghe bé nói. Hỏi bé: “Con muốn lần sau nói gì với ông bà?” Ghi lại ý của bé vào cuốn sách nhỏ."
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ: bé tự chọn một video của vòng này để xem lại (bài tắm, rửa tay, đếm hay ngôi sao). Mẹ để bé hát tự do, không hỏi bài. Cuối cùng mẹ hỏi: “What do you do at night?”",
    "b": "What do you do at night?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại 洗手歌 một lần trước bữa tối, rồi bé đi rửa tay thật.",
    "b": "吃饭前洗手。(chīfàn qián xǐshǒu)"
   },
   "doi": "Chơi lại một trò web bé thích nhất. Sau đó bé tự chuẩn bị “góc đi ngủ”: chọn một cuốn sách, xếp gối, đặt cốc nước ở bàn đầu giường.",
   "ob": "Ông bà khen cháu tự chuẩn bị chỗ ngủ gọn gàng.",
   "toi": "Mẹ ru bé bằng câu hát ru “Ru con con ngủ cho lành”, giọng thật chậm. Sau đó hỏi bé một câu: “Hai tuần qua, việc buổi tối nào con tự làm được rồi?” Chúc bé ngủ ngon bằng ba thứ tiếng. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Ru con con ngủ cho lành",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[135] = {
 "sub": "Rau, thịt, cá, trứng",
 "vocab": {
  "en": [
   [
    "shop",
    "🏪",
    "cửa hàng",
    false
   ],
   [
    "buy",
    "🛒",
    "mua",
    false
   ],
   [
    "egg",
    "🥚",
    "quả trứng",
    false
   ],
   [
    "carrot",
    "🥕",
    "cà rốt",
    false
   ],
   [
    "bread",
    "🍞",
    "bánh mì",
    false
   ],
   [
    "fish",
    "🐟",
    "con cá",
    false
   ],
   [
    "meat",
    "🥩",
    "thịt",
    false
   ],
   [
    "tomato",
    "🍅",
    "cà chua",
    false
   ],
   [
    "basket",
    "🧺",
    "cái giỏ",
    false
   ],
   [
    "please",
    "🙏",
    "làm ơn, xin",
    false
   ]
  ],
  "zh": [
   [
    "商店",
    "shāngdiàn",
    "cửa hàng",
    "🏪"
   ],
   [
    "买",
    "mǎi",
    "mua",
    "🛒"
   ],
   [
    "鸡蛋",
    "jīdàn",
    "trứng gà",
    "🥚"
   ],
   [
    "面包",
    "miànbāo",
    "bánh mì",
    "🍞"
   ],
   [
    "鱼",
    "yú",
    "con cá",
    "🐟"
   ],
   [
    "肉",
    "ròu",
    "thịt",
    "🥩"
   ],
   [
    "菜",
    "cài",
    "rau",
    "🥬"
   ],
   [
    "请",
    "qǐng",
    "xin mời, làm ơn",
    "🙏"
   ]
  ],
  "en_phr": [
   [
    "I want to buy eggs.",
    "eggs",
    "🥚"
   ],
   [
    "A carrot, please.",
    "please",
    "🥕"
   ],
   [
    "I like bread.",
    "bread",
    "🍞"
   ],
   [
    "This is a fish.",
    "fish",
    "🐟"
   ]
  ],
  "zh_phr": [
   [
    "我要买鸡蛋。",
    "鸡蛋",
    "wǒ yào mǎi jīdàn",
    "con muốn mua trứng gà",
    "🥚"
   ],
   [
    "请给我面包。",
    "面包",
    "qǐng gěi wǒ miànbāo",
    "cho con xin bánh mì",
    "🍞"
   ],
   [
    "这是鱼。",
    "鱼",
    "zhè shì yú",
    "đây là con cá",
    "🐟"
   ]
  ],
  "seq": [
   [
    "🏪",
    "go to the shop",
    "去商店"
   ],
   [
    "🧺",
    "take a basket",
    "拿篮子"
   ],
   [
    "🥕",
    "buy carrots",
    "买胡萝卜"
   ],
   [
    "🏠",
    "go home",
    "回家"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Salad Song for Kids",
    "u": "https://www.youtube.com/watch?v=yd4VLlVlWUU",
    "kind": "song_action",
    "min": 2,
    "ch": "Maple Leaf Learning"
   },
   {
    "t": "Do You Like Broccoli Ice Cream?",
    "u": "https://www.youtube.com/watch?v=frN3nvhIHUk",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Tìm bài “Peppa Pig” một tập ngắn về đi siêu thị, mua đồ trên kênh Peppa Pig - Official Channel; xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/channel/UCAOtE1V7Ots4DjM8JLlrYgg",
    "kind": "channel",
    "min": 5,
    "ch": "Peppa Pig - Official Channel"
   }
  ],
  "zh": [
   {
    "t": "鸡蛋在哪里 Where are the eggs (trứng ở đâu?)",
    "u": "https://www.youtube.com/watch?v=Vy252ww-Dgk",
    "kind": "song_action",
    "min": 1.5,
    "ch": "Cool Panda Chinese Learning"
   },
   {
    "t": "拔萝卜 Nhổ củ cải",
    "u": "https://www.youtube.com/watch?v=gnD1zHblo0Q",
    "kind": "song_action",
    "min": 3,
    "ch": "貝瓦兒歌 Beva Kids Song"
   },
   {
    "t": "【36】去超市 Going to the Supermarket 《快乐幼儿华语》",
    "u": "https://www.youtube.com/watch?v=A72lgZIKBAQ",
    "kind": "story",
    "min": 2,
    "ch": "ChineseClass365 中文加油站"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: hát trong giỏ đi chợ",
   "toi_vi": [
    {
     "t": "Con gà cục tác lá chanh",
     "type": "ca_dao",
     "lyr": "Con gà cục tác lá chanh\nCon lợn ủn ỉn mua hành cho tôi\nCon chó khóc đứng khóc ngồi\nBà ơi đi chợ mua tôi đồng riềng"
    },
    {
     "t": "Câu đố củ cà rốt",
     "type": "cau_do",
     "lyr": "Củ gì da cam\nThịt lại giòn giòn\nĂn thì ngon lắm?"
    }
   ],
   "book_vi": {
    "t": "Đỗ trắng, đỗ đen (thơ)",
    "author": "Phạm Hổ",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Kể chuyện: chuyến đi chợ của nhà Peppa và ông cụ nhổ củ cải",
   "toi_vi": [
    {
     "t": "Đi cầu đi quán",
     "type": "dong_dao",
     "lyr": "Đi cầu đi quán\nĐi bán lợn con\nĐi mua cái xoong\nĐem về đun nấu\nMua quả dưa hấu\nVề biếu ông bà\nMua một đàn gà\nVề cho ăn thóc\nMua lược chải tóc\nMua cặp gài đầu\nĐi mau về mau\nKẻo trời sắp tối"
    },
    {
     "t": "Câu đố quả dưa hấu",
     "type": "cau_do",
     "lyr": "Quả tròn to, da xanh xanh\nRuột trong đỏ chót mát lành"
    }
   ],
   "book_vi": {
    "t": "Tết là nhất – 100 từ vựng đầu đời",
    "author": "Thư Nhiên (minh họa: Thùy Cốm)",
    "publisher": "Crabit Kidbooks"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Gọi tên được 5 thứ ở chợ bằng tiếng Anh: egg, carrot, bread, fish, meat"
  ],
  [
   "en",
   "Nói được câu “A carrot, please.” hoặc “I want to buy eggs.”"
  ],
  [
   "zh",
   "Nói được 鸡蛋, 面包, 鱼, 肉 khi nhìn đồ thật"
  ],
  [
   "zh",
   "Nói được câu 我要买… với một món"
  ],
  [
   "vi",
   "Kể lại được truyện Nhổ củ cải theo thứ tự các nhân vật"
  ],
  [
   "td",
   "Phân loại được rau, thịt, cá, trứng vào đúng giỏ"
  ],
  [
   "xh",
   "Biết chào, nói “xin” và “cảm ơn” khi mua bán (chơi và thật)"
  ],
  [
   "vd",
   "Làm động tác kéo, ngả người, nhảy theo nhạc đúng nhịp"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này bếp nhà mình thành chợ nhỏ. Bài hát đầu tiên là món salad.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem “Salad Song”, mỗi khi một loại rau xuất hiện mẹ bấm dừng, hỏi “What is this?” Bé chỉ và nói tên tiếng Việt, mẹ nói tiếng Anh: carrot, tomato. Câu Yes/No: “Is it a carrot? Yes or no?” – mẹ cố tình chỉ sai một lần để bé cười và nói “No!”.",
    "b": "What is this? It's a carrot!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và tìm. Bài ngắn, xem 2 lần. Lần 1 nghe. Lần 2, mỗi khi nghe 鸡蛋 (jīdàn), bé giơ hai tay chụm lại thành quả trứng. Mẹ dừng hỏi “鸡蛋在哪里？” (jīdàn zài nǎlǐ – trứng đâu?), bé chỉ trên màn hình.",
    "b": "鸡蛋在这里！(jīdàn zài zhèlǐ)"
   },
   "words": {
    "en": [
     3,
     7
    ],
    "zh": [
     2
    ]
   },
   "doi": "Mở “chợ trong bếp” (15 phút): mẹ bày ra mâm 5–6 thứ thật: cà rốt, cà chua, quả trứng (để trong khay), ổ bánh mì, một gói thịt hoặc cá đóng hộp kín. Bé chạm từng thứ và nói tên tiếng Việt. Mẹ đọc tên tiếng Anh, bé nhắc lại. Bé xếp vào 2 nhóm: “rau” và “không phải rau”.",
   "ob": "Ông bà bày rau, trứng, bánh mì ra mâm cho cháu gọi tên và chia nhóm.",
   "toi": "Mẹ kể truyện “Sự tích dưa hấu” bằng lời của mẹ: Mai An Tiêm và gia đình bị đưa ra hòn đảo hoang. Anh không than thở, chăm chỉ dựng nhà, tìm thức ăn và gieo những hạt lạ chim thả xuống. Hạt mọc thành quả dưa vỏ xanh, ruột đỏ, ngọt mát. Anh khắc tên lên quả, thả xuống biển, người trong đất liền đổi gạo lấy dưa, và cả nhà được đón về. Hỏi bé: “Nếu con có nhiều dưa hấu, con sẽ đổi lấy gì?”"
  },
  {
   "chuyen": "Hôm nay mình hỏi nhau: con có thích món này không?",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và trả lời. Xem “Do You Like Broccoli Ice Cream?”. Mỗi câu hỏi “Do you like…?”, mẹ dừng lại, bé giơ ngón cái lên (thích) hoặc chúc xuống (không thích). Mẹ nói giúp “Yes, I do!” hoặc “No, I don't!”. Bé cười với các món kỳ lạ.",
    "b": "Do you like carrots? Yes, I do!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và làm động tác. Xem 拔萝卜. Mỗi lần nghe “嘿哟嘿哟” (hēi yō hēi yō), mẹ và bé nắm tay nhau giả kéo củ cải, ngả người ra sau. Mẹ chỉ củ cải nói 萝卜 (luóbo) và 菜 (cài – rau).",
    "b": "嘿哟，嘿哟！(hēi yō, hēi yō)"
   },
   "words": {
    "en": [
     3,
     7,
     4
    ],
    "zh": [
     6
    ]
   },
   "doi": "Bảng “thích – không thích” (10 phút): mẹ chia tờ giấy làm hai cột: mặt cười và mặt mếu. Bé lấy tranh hoặc đồ thật (cà rốt, cá, trứng, bánh mì…), đặt vào cột mình thích hay không thích. Mỗi món bé nói một câu: “I like bread.” hoặc “我喜欢面包。” (wǒ xǐhuan miànbāo).",
   "ob": "Ông bà hỏi cháu thích món nào ở chợ, cháu xếp tranh vào ô thích hoặc không thích.",
   "toi": "Ca dao “Con gà cục tác lá chanh”. Mẹ đọc chậm, mỗi con vật bé làm tiếng kêu: gà cục tác, lợn ủn ỉn, chó khóc. Mẹ hỏi: “Gà muốn mua gì? Lợn muốn mua gì? Chó muốn bà mua gì?” Bé nhớ lại: lá chanh, hành, riềng. Mẹ cho bé ngửi một lá chanh thật nếu nhà có.",
   "lyr": "Con gà cục tác lá chanh"
  },
  {
   "chuyen": "Chợ trong bếp mở cửa lại, hôm nay có nhạc: hát đến món nào, bé bỏ món đó vào giỏ.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bé cầm giỏ, mẹ đặt rau thật hoặc tranh rau quanh phòng. Bật “Salad Song”, nghe tên rau nào bé chạy đi lấy bỏ vào giỏ. Dừng nhạc bất chợt (freeze dance): bé đứng im ôm giỏ. Mẹ hỏi “How many carrots?” Bé đếm trong giỏ.",
    "b": "Put the carrot in the basket!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – trò trốn tìm trứng. Trước khi bật bài, mẹ giấu 3 quả trứng nhựa (hoặc trứng làm bằng giấy vo tròn to bằng nắm tay) quanh phòng. Bật 鸡蛋在哪里, bé đi tìm. Tìm thấy quả nào, bé hô “鸡蛋！”.",
    "b": "找到鸡蛋了！(zhǎodào jīdàn le)"
   },
   "words": {
    "en": [
     3,
     7,
     8
    ],
    "zh": [
     2,
     1
    ]
   },
   "doi": "Đi chợ có danh sách tranh (15 phút): mẹ cùng bé vẽ danh sách 3 thứ cần mua cho bữa tối (ví dụ trứng, cà chua, cá). Mẹ dẫn bé ra chợ gần nhà hoặc cửa hàng tạp hóa, nắm tay bé suốt lúc đi đường. Bé cầm danh sách tìm từng món, thấy món nào bé gạch món đó và nói tên tiếng Anh. Mẹ trả tiền, bé nói “Cảm ơn ạ”.",
   "ob": "Ông bà dắt tay cháu đi chợ, cháu cầm danh sách tranh tìm từng món.",
   "toi": "Mẹ đọc 1–2 bài trong tập thơ “Đỗ trắng, đỗ đen” (Phạm Hổ, NXB Kim Đồng). Chọn bài về rau quả hoặc con vật ở vườn. Đọc xong, mẹ hỏi: “Trong bài có món gì mình thấy ở chợ hôm nay?”"
  },
  {
   "chuyen": "Hôm nay bé làm “người hỏi” trong bài hát.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác và đổi vai. Bật lại bài “Broccoli Ice Cream”. Lần này bé hỏi, mẹ trả lời: mẹ dừng video, bé nói “Do you like…?” và chỉ vào một món trên màn hình. Mẹ trả lời “Yes, I do!” bằng giọng vui, hoặc “No, I don't!” kèm mặt nhăn để bé cười.",
    "b": "Yes, I do! No, I don't!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – đóng vai. Xem lại 拔萝卜. Mẹ là ông cụ, bé là bà cụ, gấu bông là bạn nhỏ, mèo bông là chú mèo. Mỗi lần trong bài có người mới đến kéo, bé đặt thêm một thú bông vào hàng. Cuối bài cả nhà ngã ra và hô “拔出来了！” (bá chūlái le – nhổ được rồi!).",
    "b": "拔出来了！(bá chūlái le)"
   },
   "words": {
    "en": [
     3,
     7,
     4,
     9
    ],
    "zh": [
     6,
     1
    ]
   },
   "doi": "Phân loại đồ đi chợ (10 phút): mẹ chuẩn bị 3 cái rổ dán tranh: rau, thịt cá, trứng bánh mì. Lấy đồ vừa mua (hoặc đồ trong tủ lạnh, đã rửa sạch, đóng gói kín) để bé xếp vào đúng rổ. Mỗi lần xếp bé nói một từ tiếng Anh hoặc tiếng Trung: “Fish – 鱼 (yú)”, “Meat – 肉 (ròu)”. Rửa tay sau khi chơi với thịt cá.",
   "ob": "Ông bà cho cháu xếp đồ đi chợ vào ba rổ: rau, thịt cá, trứng bánh mì.",
   "toi": "Câu đố dân gian “Câu đố củ cà rốt”. Mẹ đọc, bé đoán. Mẹ đưa củ cà rốt thật cho bé sờ: da cam, cứng. Mẹ gọt sẵn một khoanh để bé cắn thử nghe “giòn giòn”. Hỏi: “Con thỏ có thích cà rốt không?”",
   "lyr": "Câu đố củ cà rốt"
  },
  {
   "chuyen": "Bé hát trước, video hát sau. Ai nhớ tên rau nhiều hơn?",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Bật “Salad Song”, mẹ bấm dừng ngay trước khi tên rau được hát. Bé nói trước: “Carrot!”, “Tomato!”. Bật tiếp xem đúng không. Cuối bài bé nói cả câu: “I like tomatoes.” hoặc “I like carrots.”",
    "b": "You first! What's next?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật 鸡蛋在哪里, mẹ dừng trước mỗi chữ 鸡蛋, bé nói trước rồi mới cho video nói. Thêm câu: mẹ chỉ vào quả trứng thật, bé nói “这是鸡蛋。” (zhè shì jīdàn).",
    "b": "这是鸡蛋。(zhè shì jīdàn)"
   },
   "words": {
    "en": [
     3,
     7,
     2
    ],
    "zh": [
     2,
     1,
     7
    ]
   },
   "doi": "Chuẩn bị cho “Vào bếp cùng mẹ” ngày mai (10 phút): mẹ và bé chọn món bánh mì kẹp trứng và rau. Bé vẽ danh sách nguyên liệu: bánh mì, trứng, cà chua, xà lách. Bé tự kiểm tra trong bếp xem còn thiếu gì, đánh dấu món cần mua. Mỗi món bé nói tên tiếng Anh hoặc tiếng Trung.",
   "ob": "Ông bà cùng cháu kiểm tra trong bếp xem còn trứng, bánh mì, rau chưa.",
   "toi": "Bé tự kể lại truyện “Sự tích dưa hấu” bằng tranh: mẹ đưa giấy, bé vẽ 3 cảnh: hòn đảo, quả dưa hấu, chiếc thuyền đón cả nhà về. Bé chỉ từng tranh và kể. Mẹ hỏi: “Vì sao An Tiêm không buồn mà vẫn chăm chỉ?”"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và vào bếp làm bánh mì kẹp trứng.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé gọi đúng tên 4 món bằng tiếng Anh (egg, carrot, bread, tomato). Sao 2: bé nói được câu “… please.” khi xin một món. Sao 3: bé chơi xong chuỗi trò trên web. Xong, bé chọn 1 video thích nhất của tuần xem lại, vừa xem vừa nhảy.",
    "b": "Three stars! Well done!"
   },
   "zh": {
    "v": 1,
    "t": "Xem lại 拔萝卜, cả nhà cùng “kéo củ cải”. Mẹ thưởng sao nếu bé tự nói được 鸡蛋 hoặc 面包 khi chuẩn bị nguyên liệu.",
    "b": "我们做饭吧！(wǒmen zuò fàn ba)"
   },
   "special": "Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu",
   "doi": "Bánh mì kẹp trứng (20 phút): mẹ luộc trứng trước và để nguội; mẹ cắt cà chua và bánh mì. Bé rửa tay, bóc vỏ trứng nguội, xé lá xà lách, xếp cà chua và trứng vào bánh mì. Mỗi nguyên liệu bé gọi tên: “Egg – 鸡蛋”, “Bread – 面包”, “Tomato”. Khi đưa bánh cho bố, bé nói “Here you are!” và bố đáp “Thank you!”. Bếp, dao do mẹ làm.",
   "ob": "Ông bà luộc trứng, cắt bánh; cháu bóc trứng, xé rau, xếp bánh và gọi tên nguyên liệu.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé: “Hôm nay con làm được việc gì trong bếp? Món nào con thích nhất?” Mẹ kể chuyện ngày xưa bà dắt mẹ đi chợ quê, có những gánh rau, rổ trứng."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và đi chợ thật cùng cả nhà.",
   "en": {
    "v": 1,
    "t": "Ôn tập: bé chọn bài thích nhất (Salad hoặc Broccoli Ice Cream) để xem lại. Lần này bé hát cùng bố, bố là người trả lời “Yes, I do!”. Rồi bé chơi lại một trò web thích nhất.",
    "b": "Do you like fish, Daddy?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn tập: xem lại 鸡蛋在哪里 một lần, bé giấu trứng cho bố tìm, bé hô 鸡蛋在哪里？.",
    "b": "爸爸，鸡蛋在哪里？(bàba, jīdàn zài nǎlǐ)"
   },
   "doi": "Đi chợ cuối tuần cùng cả nhà (20 phút): bé cầm một cái giỏ nhỏ. Ở mỗi hàng (rau, thịt, cá, trứng), bé chỉ và nói tên một món bằng tiếng Anh hoặc tiếng Trung. Mẹ mua một món cho bé chọn và bé tự cầm về. Nắm tay bé ở chỗ đông người và khi qua đường.",
   "ob": "Ông bà dắt cháu đi chợ, cho cháu chọn một món và tự cầm về.",
   "toi": "Mẹ và bé ôn lại tuần: bé đọc lại ca dao “Con gà cục tác lá chanh” cùng mẹ, mỗi người một câu. Mẹ hỏi: “Tuần sau mình xem nhà Peppa đi siêu thị. Con đoán Peppa mua gì?”"
  },
  {
   "chuyen": "Tuần kể chuyện: nhà Peppa đi siêu thị. Mỗi lần dừng là một lần đoán.",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và dừng hỏi. Mẹ tìm một tập Peppa Pig ngắn về đi siêu thị (xem đoạn đầu 5 phút). Dừng 3 lần, hỏi “Chuyện gì xảy ra tiếp?” và một câu What/Where: “What does Peppa buy?”, “Where is the trolley?”. Bé trả lời, mẹ nói lại 1 từ tiếng Anh: shop, buy, basket.",
    "b": "What does Peppa buy?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem truyện. Xem 去超市. Mẹ dừng ở mỗi món bạn nhỏ mua, hỏi “Bạn mua gì?”, rồi nói từ tiếng Trung: 面包 (miànbāo), 鸡蛋 (jīdàn). Trước cảnh cuối hỏi “Chuyện gì xảy ra tiếp?”",
    "b": "他们去超市。(tāmen qù chāoshì)"
   },
   "words": {
    "en": [
     0,
     1,
     8
    ],
    "zh": [
     0,
     3,
     2,
     1
    ]
   },
   "doi": "Vẽ “bản đồ siêu thị” (15 phút): mẹ và bé vẽ một siêu thị đơn giản trên tờ giấy to: quầy rau, quầy thịt cá, quầy trứng bánh mì. Bé vẽ hoặc dán tranh từng món vào đúng quầy. Mẹ chỉ một quầy hỏi “What can you buy here?”, bé trả lời một từ.",
   "ob": "Ông bà cùng cháu vẽ siêu thị trên giấy và dán tranh các món vào đúng quầy.",
   "toi": "Mẹ kể truyện “Sự tích cây thì là” bằng lời của mẹ: ngày xưa Trời đặt tên cho từng loài cây: cây cau, cây dừa, cây mít… Có một cây nhỏ đến muộn, Trời mệt quá ấp úng “thì… là… thì là…”. Cây nhỏ tưởng đó là tên mình, vui vẻ chạy về khoe: “Tôi là cây thì là!” Mẹ và bé cười, rồi hỏi: “Con đặt tên tiếng Anh cho củ cà rốt là gì nhỉ?”"
  },
  {
   "chuyen": "Hôm nay kể chuyện ông cụ nhổ củ cải, bé đóng vai.",
   "en": {
    "v": 1,
    "t": "Bài hát thành câu chuyện hỏi đáp. Xem lại “Broccoli Ice Cream” một lần. Sau đó mẹ và bé diễn “chuyện ở quầy hàng”: bé là người bán, mẹ là khách. Mẹ hỏi “Do you have carrots?” bé trả lời “Yes! Here you are.” Đổi vai, bé là khách hỏi mẹ.",
    "b": "Do you have carrots? Yes! Here you are."
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – kể chuyện bằng tranh. Xem 拔萝卜, rồi mẹ đưa 6 tranh nhỏ (ông, bà, bạn nhỏ, chó, mèo, chuột). Bé xếp đúng thứ tự người đến giúp. Mẹ hỏi “接下来是谁？” (jiē xiàlái shì shéi – tiếp theo là ai?), bé chỉ tranh.",
    "b": "小猫也来了！(xiǎo māo yě lái le)"
   },
   "words": {
    "en": [
     3,
     9,
     0
    ],
    "zh": [
     6,
     1
    ]
   },
   "doi": "Kéo củ cải cả nhà (10 phút): mẹ buộc một chiếc khăn vào chân ghế làm “củ cải”. Mọi người xếp hàng ôm eo nhau theo thứ tự trong truyện, bé làm chú chuột nhỏ cuối cùng. Cùng hô “嘿哟嘿哟”, kéo nhẹ cho đến khi khăn tuột ra. Bé kể: “Ông kéo, bà kéo, … cuối cùng chuột kéo, nhổ được rồi!”",
   "ob": "Ông bà xếp hàng ôm eo cùng cháu chơi kéo củ cải bằng chiếc khăn.",
   "toi": "Đồng dao “Đi cầu đi quán”. Mẹ đọc, bé đếm trên ngón tay những thứ được mua: cái xoong, quả dưa hấu, đàn gà, lược, cặp gài đầu. Mẹ hỏi: “Mua dưa hấu để biếu ai? Vì sao phải đi mau về mau?”",
   "lyr": "Đi cầu đi quán"
  },
  {
   "chuyen": "Nhà Peppa đi siêu thị lần 2: hôm nay bé đóng vai Peppa.",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại tập Peppa đi siêu thị (5 phút). Bé đẩy một cái thùng carton làm xe đẩy, mẹ làm Mẹ Peppa. Dừng video ở cảnh chọn đồ, hai mẹ con diễn lại: bé bỏ đồ vào thùng và nói “I want to buy…”. Mẹ hỏi “What's next?” trước khi bật tiếp.",
    "b": "I want to buy bread, please."
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại 去超市, dừng ở cảnh mua hàng. Bé là người mua, mẹ là người bán. Bé nói câu ngắn: “我要买面包。” (wǒ yào mǎi miànbāo). Mẹ đưa ổ bánh mì đồ chơi hoặc thật.",
    "b": "我要买面包。(wǒ yào mǎi miànbāo)"
   },
   "words": {
    "en": [
     1,
     4,
     8,
     9
    ],
    "zh": [
     1,
     3,
     0
    ]
   },
   "doi": "Siêu thị đồ chơi tại nhà (15 phút): bày đồ chơi nhà bếp, hộp rỗng, rau thật lên kệ. Bé đi “mua sắm” bằng xe đẩy carton, mẹ là người bán. Tiền là tiền giấy mẹ và bé tự vẽ (không dùng tiền thật). Bé phải nói được tên món và “please” thì mẹ mới bán. Mẹ đáp “Here you are!”.",
   "ob": "Ông bà làm người bán hàng, cháu mua đồ bằng tiền giấy tự vẽ và nói tên món.",
   "toi": "Mẹ đọc sách “Tết là nhất – 100 từ vựng đầu đời” (Crabit Kidbooks), chọn những trang có đồ ăn, chợ Tết. Mẹ chỉ một món, bé nói tên tiếng Việt rồi thử nói tiếng Anh hoặc tiếng Trung nếu bé biết."
  },
  {
   "chuyen": "Bé kể lại chuyện bằng lời của bé, video chỉ để kiểm tra.",
   "en": {
    "v": 1,
    "t": "Chuyển ngữ một từ: bật “Broccoli Ice Cream”, mỗi khi một món xuất hiện, mẹ dừng và nói tên tiếng Anh, bé thử nói tên tiếng Trung nếu biết (carrot thì bé chỉ cần nói 菜 – rau, bread thì 面包). Rồi đổi lại: mẹ nói tiếng Việt, bé nói tiếng Anh.",
    "b": "Bread! In Chinese?"
   },
   "zh": {
    "v": 1,
    "t": "Bé kể chuyện trước: tắt tiếng video 拔萝卜, chỉ xem hình. Bé tự kể: “Ông kéo… bà kéo…” và chèn từ 萝卜, 嘿哟. Sau đó bật tiếng xem lại đoạn cuối.",
    "b": "萝卜很大！(luóbo hěn dà)"
   },
   "words": {
    "en": [
     4,
     2,
     3
    ],
    "zh": [
     3,
     6
    ]
   },
   "doi": "Đổi tiếng ở bữa tối (10 phút): khi dọn mâm cơm, mẹ chỉ vào từng món, bé nói tiếng Anh, bố nói tiếng Việt, mẹ nói tiếng Trung (đọc theo pinyin trên web). Bé làm “trọng tài” xem ai nói đúng. Món nào bé nói đúng ba thứ tiếng được thêm một miếng.",
   "ob": "Ông bà chỉ từng món trên mâm cơm, cháu nói tên bằng tiếng Anh hoặc tiếng Trung.",
   "toi": "Bé kể lại truyện “Sự tích cây thì là” bằng cách đóng vai: bé làm Trời ngồi trên ghế, mẹ đóng các cây đến xin tên. Bé đặt tên cho cây (có thể đặt tên tiếng Anh vui như “Carrot tree”). Đến cây cuối, bé ấp úng “thì… là…” cho cả nhà cùng cười."
  },
  {
   "chuyen": "Kể chuyện lần 3: bé là người dẫn chuyện cho cả tập Peppa.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước video. Mẹ tắt tiếng tập Peppa (5 phút), bé xem hình và kể theo bằng tiếng Việt, chèn từ tiếng Anh: shop, buy, basket, please. Sau đó bật tiếng xem đoạn cuối để biết bé đoán đúng không. Kết thúc bé nói câu dài: “Peppa goes to the shop. She buys…”",
    "b": "Peppa goes to the shop."
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé nói trước. Xem lại 去超市, mẹ dừng trước mỗi món, bé nói trước tên món bằng tiếng Trung. Thêm câu hỏi: “你要买什么？” (nǐ yào mǎi shénme – con muốn mua gì?), bé trả lời “我要买…”.",
    "b": "你要买什么？(nǐ yào mǎi shénme)"
   },
   "words": {
    "en": [
     0,
     1,
     8,
     9
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Chuẩn bị “thẻ săn từ” cho ngày mai (10 phút): mẹ vẽ 6 ô tranh trên tờ giấy nhỏ: trứng, cà rốt, cá, thịt, bánh mì, cà chua. Bé tô màu và tập nói tên từng ô bằng tiếng Anh, chọn 3 ô để nói thêm tiếng Trung. Gấp tờ giấy bỏ vào túi áo để mai mang đi chợ.",
   "ob": "Ông bà giúp cháu tô màu thẻ tranh để mai mang đi chợ săn từ.",
   "toi": "Câu đố dân gian “Câu đố quả dưa hấu”. Mẹ đọc, bé đoán. Mẹ nhắc lại truyện Mai An Tiêm tuần trước: “Quả này ai trồng trên đảo nhỉ?” Nếu có dưa hấu, mẹ bổ (mẹ cầm dao), bé đếm hạt đen trên miếng dưa của mình.",
   "lyr": "Câu đố quả dưa hấu"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và đi săn từ ở chợ.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: 3 sao. Sao 1: bé kể lại 3 việc Peppa làm ở siêu thị. Sao 2: bé nói một câu dài “I want to buy … , please.” Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video yêu thích của tuần xem lại và kể cho mẹ đoạn hay nhất.",
    "b": "I want to buy eggs, please."
   },
   "zh": {
    "v": 2,
    "t": "Xem lại 去超市 trước khi ra chợ. Một sao nếu bé tự nói 我要买 + một món.",
    "b": "我们去商店！(wǒmen qù shāngdiàn)"
   },
   "special": "Săn từ ở chợ hoặc siêu thị",
   "doi": "Săn từ ở chợ (20 phút): mang theo thẻ săn từ bé đã tô. Đến chợ hoặc siêu thị, bé tìm từng món trên thẻ. Tìm thấy món nào, bé chỉ vào và nói tên tiếng Anh (và tiếng Trung nếu được), rồi gạch ô đó. Đủ 6 ô, mẹ mua cho bé một món bé chọn. Bé nói với người bán “Cảm ơn ạ” và với mẹ “Thank you!”. Nắm tay bé suốt ở chỗ đông và khi qua đường.",
   "ob": "Ông bà dắt cháu đi chợ, cháu tìm món trên thẻ tranh và nói tên.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé tìm được món nào khó nhất, món nào dễ nhất. Bé kể lại cho bố nghe chuyến săn từ, mẹ chỉ gợi ý bằng câu hỏi “Rồi sao nữa?”."
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: bé tự chọn một video trong vòng để xem lại. Mẹ để bé hát và nhảy tự do. Cuối cùng mẹ hỏi: “What do you like at the market?”",
    "b": "What do you like at the market?"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: xem lại 拔萝卜, cả nhà kéo củ cải lần cuối của vòng này.",
    "b": "大家一起拔萝卜！(dàjiā yìqǐ bá luóbo)"
   },
   "doi": "Chơi lại một trò web bé thích. Sau đó bé tự sắp xếp lại “siêu thị đồ chơi” và cất đồ vào đúng chỗ, mỗi món nói tên một lần.",
   "ob": "Ông bà khen cháu cất đồ chơi đi chợ gọn gàng, đúng chỗ.",
   "toi": "Mẹ và bé ôn lại hai tuần: bé chọn đọc lại đồng dao “Đi cầu đi quán” hoặc kể chuyện cây thì là. Mẹ hỏi: “Tuần sau mình chơi bán hàng có đếm tiền. Con muốn bán gì?” Chúc bé ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[136] = {
 "sub": "Bao nhiêu? Mua, trả tiền",
 "vocab": {
  "en": [
   [
    "how many",
    "🔢",
    "bao nhiêu (đếm)",
    false
   ],
   [
    "money",
    "💵",
    "tiền",
    false
   ],
   [
    "buy",
    "🛒",
    "mua",
    false
   ],
   [
    "here you are",
    "🤲",
    "của bạn đây",
    false
   ],
   [
    "thank you",
    "🙏",
    "cảm ơn",
    false
   ],
   [
    "bun",
    "🥐",
    "bánh mì nhỏ",
    false
   ],
   [
    "apple",
    "🍎",
    "quả táo",
    false
   ],
   [
    "count",
    "🧮",
    "đếm",
    true
   ],
   [
    "shop",
    "🏪",
    "cửa hàng",
    false
   ]
  ],
  "zh": [
   [
    "多少",
    "duōshao",
    "bao nhiêu",
    "🔢"
   ],
   [
    "钱",
    "qián",
    "tiền",
    "💵"
   ],
   [
    "买",
    "mǎi",
    "mua",
    "🛒"
   ],
   [
    "谢谢",
    "xièxie",
    "cảm ơn",
    "🙏"
   ],
   [
    "苹果",
    "píngguǒ",
    "quả táo",
    "🍎"
   ],
   [
    "超市",
    "chāoshì",
    "siêu thị",
    "🏪"
   ],
   [
    "给你",
    "gěi nǐ",
    "đưa bạn, của bạn đây",
    "🤲"
   ]
  ],
  "en_phr": [
   [
    "How many apples?",
    "How many",
    "🍎"
   ],
   [
    "Here you are.",
    "Here",
    "🤲"
   ],
   [
    "I want to buy a bun.",
    "buy",
    "🥐"
   ],
   [
    "Thank you!",
    "Thank",
    "🙏"
   ]
  ],
  "zh_phr": [
   [
    "多少钱？",
    "多少",
    "duōshao qián",
    "bao nhiêu tiền?",
    "💵"
   ],
   [
    "我买苹果。",
    "苹果",
    "wǒ mǎi píngguǒ",
    "con mua táo",
    "🍎"
   ],
   [
    "给你。",
    "给你",
    "gěi nǐ",
    "của bạn đây",
    "🤲"
   ],
   [
    "谢谢你！",
    "谢谢",
    "xièxie nǐ",
    "cảm ơn bạn",
    "🙏"
   ]
  ],
  "seq": [
   [
    "🛒",
    "choose",
    "选"
   ],
   [
    "🔢",
    "count",
    "数"
   ],
   [
    "💵",
    "pay",
    "付钱"
   ],
   [
    "🙏",
    "say thank you",
    "说谢谢"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Numberblock 1 Counts Summer Smoothies – video tổng hợp dài, chỉ xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=sB4hgBdPSfk",
    "kind": "explainer",
    "min": 5,
    "ch": "Numberblocks"
   },
   {
    "t": "Hot Cross Buns",
    "u": "https://www.youtube.com/watch?v=re3gXNTtwig",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The Muffin Man",
    "u": "https://www.youtube.com/watch?v=fXFg5QsTcLQ",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Count & Move (Count Up To Twenty)",
    "u": "https://www.youtube.com/watch?v=g9EgE_JtEAw",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   }
  ],
  "zh": [
   {
    "t": "Chinese Speaking Lesson for Kids: 超市 Supermarket",
    "u": "https://www.youtube.com/watch?v=3xrpK38l_tE",
    "kind": "lesson",
    "min": 1.8,
    "ch": "eChineseLearning"
   },
   {
    "t": "《多少钱？》How much money? (bao nhiêu tiền?)",
    "u": "https://www.youtube.com/watch?v=86Q-nMBliX8",
    "kind": "song_action",
    "min": 2.6,
    "ch": "AnnaMae Chinese Creations / 爱美创艺中文"
   },
   {
    "t": "【9】买东西 Buying food in the store 《快乐幼儿华语》",
    "u": "https://www.youtube.com/watch?v=H6i6prNRuMs",
    "kind": "story",
    "min": 2,
    "ch": "ChineseClass365 中文加油站"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: đếm, so sánh và tiền giấy tự vẽ",
   "toi_vi": [
    {
     "t": "Thằng Bờm có cái quạt mo",
     "type": "dong_dao",
     "lyr": "Thằng Bờm có cái quạt mo\nPhú ông xin đổi ba bò chín trâu\nBờm rằng Bờm chẳng lấy trâu\nPhú ông xin đổi một xâu cá mè\nBờm rằng Bờm chẳng lấy mè\nPhú ông xin đổi một bè gỗ lim\nBờm rằng Bờm chẳng lấy lim\nPhú ông xin đổi con chim đồi mồi\nBờm rằng Bờm chẳng lấy mồi\nPhú ông xin đổi nắm xôi Bờm cười"
    },
    {
     "t": "Câu đố quả mít",
     "type": "cau_do",
     "lyr": "Da cóc mà bọc trứng gà\nBổ ra thơm phức cả nhà muốn ăn\nLà quả gì?"
    }
   ],
   "book_vi": {
    "t": "Chuyện ly kỳ về hình khối, màu sắc, số đếm (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  },
  {
   "title": "Tuần Thử thách: cửa hàng của bé, ai bán nhanh hơn",
   "toi_vi": [
    {
     "t": "Ba bà đi bán lợn con",
     "type": "dong_dao",
     "lyr": "Ba bà đi bán lợn con\nBán đi chẳng được lon xon chạy về\nBa bà đi bán lợn sề\nBán đi chẳng được chạy về lon xon"
    },
    {
     "t": "Câu đố quả nhãn",
     "type": "cau_do",
     "lyr": "Da cóc mà bọc bột lọc\nBột lọc mà bọc hòn than"
    }
   ],
   "book_vi": {
    "t": "Bé học yêu thương và chia sẻ (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Hỏi được “How many?” và trả lời bằng số tiếng Anh đến 10"
  ],
  [
   "en",
   "Nói đúng lúc “Here you are.” và “Thank you!” khi chơi bán hàng"
  ],
  [
   "zh",
   "Hỏi được 多少钱？ và nói 给你、谢谢"
  ],
  [
   "zh",
   "Nói được câu 我买苹果。 hoặc thay một món khác"
  ],
  [
   "td",
   "Đếm đúng số tờ tiền giấy (đến 10) và so sánh được bên nào nhiều hơn"
  ],
  [
   "vi",
   "Kể lại được bài đồng dao Thằng Bờm: phú ông đổi những gì"
  ],
  [
   "xh",
   "Chờ đến lượt khi mua bán, nói xin và cảm ơn"
  ],
  [
   "vd",
   "Đếm và làm động tác (nhảy, vỗ tay) đến 20 theo bài Count & Move"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này bé là nhà khoa học đếm số: đếm quả, đếm tiền giấy, so sánh nhiều – ít.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và đếm. Xem đoạn đầu 5 phút của Numberblocks (dừng đúng 5 phút, đây là video tổng hợp dài). Mỗi khi Numberblock 1 cho trái cây vào máy xay, mẹ dừng và hỏi “How many?” Bé đếm trên màn hình bằng tiếng Việt, mẹ đếm lại bằng tiếng Anh: one, two, three.",
    "b": "How many? Let's count!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem bài học ngắn 超市. Dừng ở mỗi món đồ, mẹ chỉ vào và nói từ trong video. Câu hỏi Yes/No: “Đây có phải siêu thị không?” Bé gật và nói 超市 (chāoshì).",
    "b": "这是超市。(zhè shì chāoshì)"
   },
   "words": {
    "en": [
     0,
     7,
     6
    ],
    "zh": [
     5,
     2
    ]
   },
   "doi": "In “tiền giấy của nhà mình” (15 phút): mẹ cắt giấy thành 20 tờ nhỏ bằng bàn tay. Bé vẽ lên mỗi tờ một ngôi sao (tờ 1) hoặc hai ngôi sao (tờ 2). Đây là tiền chơi của cả vòng, không dùng tiền thật. Bé đếm có bao nhiêu tờ 1 sao, bao nhiêu tờ 2 sao bằng tiếng Anh, rồi cất vào một cái ví hoặc phong bì.",
   "ob": "Ông bà cùng cháu vẽ tiền giấy để chơi bán hàng, không dùng tiền thật.",
   "toi": "Mẹ kể truyện “Cây khế” bằng lời của mẹ: người anh tham lấy hết của cải, chỉ để lại cho em túp lều và cây khế. Một con chim lạ đến ăn khế, hứa trả vàng, bảo người em may túi ba gang mang theo. Người em lấy vừa đủ một túi nhỏ, nhờ vậy đỡ nghèo. Người anh đổi lấy cây khế, may túi thật to, lấy quá nhiều vàng, chim nghiêng cánh, vàng rơi hết xuống biển, người anh ướt sũng bơi vào bờ và hối hận. Hỏi bé: “Vì sao người em lấy túi nhỏ thôi?”"
  },
  {
   "chuyen": "Bài hát hôm nay đến từ nước Anh: bánh mì nhỏ bán theo tiền.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và tìm hiểu. Xem “Hot Cross Buns”. Dừng ở câu “one a penny, two a penny”, mẹ giải thích: penny là tiền nhỏ của nước Anh; nhà mình dùng tiền giấy tự vẽ. Mẹ hỏi “How many buns?” Bé giơ một hoặc hai ngón tay theo bài.",
    "b": "One a penny, two a penny!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – nghe và chỉ. Xem 《多少钱？》. Mỗi lần nghe “多少钱” (duōshao qián), bé xòe tay hỏi như người đi mua. Mẹ chỉ vào tờ tiền giấy hôm qua nói 钱 (qián).",
    "b": "多少钱？(duōshao qián)"
   },
   "words": {
    "en": [
     5,
     1,
     0
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Thí nghiệm “nhiều hay ít” (10 phút): mẹ bày hai đĩa: đĩa A có 3 quả (táo hoặc quýt), đĩa B có 5 quả. Bé đoán đĩa nào nhiều hơn, rồi đếm thử bằng tiếng Anh. Mẹ đổi: chia 4 quả to cách xa nhau và 6 quả nhỏ dồn sát nhau. Hỏi lại: “Which has more?” Bé đếm để kiểm tra, không đoán bằng mắt.",
   "ob": "Ông bà bày hai đĩa quả, cháu đếm xem đĩa nào nhiều hơn.",
   "toi": "Đồng dao “Thằng Bờm có cái quạt mo”. Mẹ đọc chậm, đến mỗi lần phú ông xin đổi, bé lắc đầu nói “Bờm chẳng lấy!”. Đến câu cuối, bé cười thật to như Bờm. Mẹ hỏi: “Phú ông đổi mấy thứ? Bờm chọn đổi cái gì? Vì sao?”",
   "lyr": "Thằng Bờm có cái quạt mo"
  },
  {
   "chuyen": "Khám phá máy xay trái cây của Numberblocks: một quả, hai quả, ba quả.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại đoạn đầu 5 phút. Trước khi xem, mẹ đặt 5 quả (hoặc tranh) cạnh bé. Mỗi khi trong video thêm một quả, bé cũng bỏ một quả vào bát của mình và hô số tiếng Anh. Mẹ dừng hỏi “How many in the bowl?” Bé đếm lại.",
    "b": "One more! How many now?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại 超市. Bé cầm giỏ, mẹ bày đồ chơi quanh phòng. Nghe từ nào trong video, bé đi lấy đúng món bỏ vào giỏ. Mẹ hỏi “你买什么？” (nǐ mǎi shénme), bé giơ món đó lên.",
    "b": "我买苹果。(wǒ mǎi píngguǒ)"
   },
   "words": {
    "en": [
     0,
     7,
     6
    ],
    "zh": [
     2,
     4,
     5
    ]
   },
   "doi": "Cân bằng móc áo (15 phút): mẹ treo một cái móc áo lên tay nắm cửa, hai đầu móc treo hai túi ni lông nhỏ. Bé bỏ 2 quả quýt vào túi trái, 1 quả vào túi phải: bên nào nặng hơn thì chúi xuống. Thêm bớt quả cho đến khi hai bên bằng nhau. Mẹ nói “Same! Bằng nhau!”. Bé đếm số quả mỗi bên bằng tiếng Anh. Chơi xong mẹ cất túi ni lông, không để bé trùm lên đầu.",
   "ob": "Ông bà làm cân bằng móc áo, cháu bỏ quả vào hai bên và đếm.",
   "toi": "Mẹ đọc một cuốn trong bộ “Chuyện ly kỳ về hình khối, màu sắc, số đếm” (NXB Trẻ), chọn cuốn về số đếm. Đọc đến đâu, bé đếm đồ vật trong tranh đến đó. Cuối truyện hỏi: “Con thích con số nào nhất? Vì sao?”"
  },
  {
   "chuyen": "Hôm nay bé mở tiệm bánh nhỏ, giá là tiền giấy tự vẽ.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật “Hot Cross Buns”, bé cầm 2 cái bánh (bánh thật hoặc giấy vo tròn). Câu “one a penny” bé đưa mẹ 1 cái, “two a penny” bé đưa 2 cái. Mẹ đưa lại 1 tờ tiền giấy và nói “Here you are!”. Dừng nhạc bất chợt, hỏi “How many buns now?”",
    "b": "Here you are! One bun."
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – đóng vai. Bật lại 《多少钱？》. Mẹ là người bán, bé là người mua. Mỗi lần bài hát hỏi 多少钱, mẹ giơ số ngón tay, bé đếm tiền giấy đúng số đó đưa mẹ và nói 给你 (gěi nǐ).",
    "b": "给你。(gěi nǐ)"
   },
   "words": {
    "en": [
     5,
     1,
     3,
     0
    ],
    "zh": [
     0,
     1,
     6
    ]
   },
   "doi": "So sánh giá tiền (10 phút): mẹ dán “giá” lên 4 đồ vật: quả chuối 1 sao, quả táo 2 sao, hộp sữa 3 sao, bánh 1 sao. Bé có 5 sao tiền giấy. Mẹ hỏi: “Con mua được những gì?” Bé thử chọn, đếm tiền, xem đủ hay thiếu. Mỗi lần trả, bé nói “Here you are.”, mẹ đáp “Thank you!”.",
   "ob": "Ông bà dán giá bằng ngôi sao lên đồ vật, cháu đếm tiền giấy để mua.",
   "toi": "Bé kể lại truyện “Cây khế”. Mẹ đưa cho bé hai cái túi: một túi nhỏ, một túi to. Bé cầm túi nhỏ kể đoạn người em, cầm túi to kể đoạn người anh. Mẹ hỏi: “Con thích làm người em hay người anh? Vì sao?”"
  },
  {
   "chuyen": "Bé nói trước, video nói sau: ai đếm nhanh hơn?",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Xem lại đoạn đầu 5 phút, mẹ bấm dừng trước mỗi lần video đếm. Bé nói số trước rồi mới bật cho video đếm. Câu hỏi What: “What fruit is it?” Bé trả lời “Apple!” hoặc tên quả khác. Kết thúc bé nói câu “I can count to ten.”",
    "b": "I can count to ten!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – bé nói trước. Bật 《多少钱？》, mẹ dừng ngay trước câu 多少钱, bé hỏi trước. Mẹ trả lời bằng số tiếng Trung đơn giản: 一 (yī), 两 (liǎng), 三 (sān), bé đưa đúng số tờ tiền giấy.",
    "b": "三块钱。(sān kuài qián)"
   },
   "words": {
    "en": [
     0,
     7,
     6
    ],
    "zh": [
     0,
     1,
     6,
     3
    ]
   },
   "doi": "Chuẩn bị pháo đài cho ngày mai (10 phút): mẹ và bé chọn chỗ dựng pháo đài chăn gối (giữa hai chiếc ghế hoặc cạnh giường). Bé gom 4 gối, 2 tấm chăn, một đèn pin. Bé nghĩ trước: trong pháo đài sẽ mở “cửa hàng” bán gì, vẽ biển tên cửa hàng.",
   "ob": "Ông bà cùng cháu gom chăn gối để mai dựng pháo đài.",
   "toi": "Câu đố dân gian “Câu đố quả mít”. Mẹ đọc, bé đoán. Mẹ kể: ở chợ, quả mít thường được bán theo cân, rất nặng. Hỏi bé: “Một quả mít với một quả táo, quả nào nặng hơn? Mình cân bằng móc áo được không?” (không được, mít nặng quá!)",
   "lyr": "Câu đố quả mít"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và cửa hàng trong pháo đài chăn gối.",
   "en": {
    "v": 1,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé đếm đúng 10 tờ tiền giấy bằng tiếng Anh. Sao 2: bé nói “Here you are.” và “Thank you!” đúng lúc khi mua bán. Sao 3: bé chơi xong chuỗi trò trên web. Xong, bé chọn video yêu thích của tuần xem lại.",
    "b": "You counted to ten! Super!"
   },
   "zh": {
    "v": 1,
    "t": "Xem lại 《多少钱？》 và hát theo câu 多少钱. Một sao nếu bé tự nói 谢谢 khi nhận đồ.",
    "b": "谢谢你！(xièxie nǐ)"
   },
   "special": "Xây pháo đài chăn gối, kể chuyện trong pháo đài",
   "doi": "Pháo đài “Cửa hàng bé con” (20 phút): bé và mẹ dựng pháo đài bằng chăn gối, treo biển tên cửa hàng ở cửa. Trong pháo đài, bé bày 5 món hàng (quả, bánh, đồ chơi). Cả nhà lần lượt chui vào mua: hỏi “How many?”, bé đếm, khách trả tiền giấy, bé nói “Here you are!”. Sau đó tắt đèn, bật đèn pin, bé kể lại chuyện Thằng Bờm đổi quạt lấy xôi cho cả nhà nghe trong pháo đài.",
   "ob": "Ông bà chui vào pháo đài mua hàng của cháu bằng tiền giấy và nghe cháu kể chuyện.",
   "toi": "Buổi tối nhẹ nhàng: mẹ và bé nằm trong pháo đài thêm 5 phút. Mẹ hỏi: “Hôm nay con bán được mấy món? Ai mua nhiều nhất?” Mẹ khen bé bán hàng lễ phép."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và đi mua một món thật cùng cả nhà.",
   "en": {
    "v": 0,
    "t": "Ôn tập: bé chọn bài thích nhất (Numberblocks hoặc Hot Cross Buns) để xem lại. Với Numberblocks nhớ dừng sau 5 phút. Bé đếm cùng bố, bố đếm sai một lần cho bé sửa. Chơi lại một trò web bé thích.",
    "b": "Oops! Daddy, count again!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn tập: xem lại 超市, bé chỉ và nói tên các món bé nhớ. Mẹ hỏi một câu: “超市在哪儿？” và bé chỉ ra cửa.",
    "b": "我们去超市吧！(wǒmen qù chāoshì ba)"
   },
   "doi": "Mua một món thật (15 phút): cả nhà đi siêu thị hoặc tạp hóa. Bé được chọn một món nhỏ (một quả táo, một hộp sữa). Bé tự đặt món lên quầy, nói “Xin cô tính tiền ạ”. Mẹ trả tiền, bé cầm túi và nói “Cảm ơn ạ”. Về nhà, bé kể bằng tiếng Anh: “I buy an apple.”",
   "ob": "Ông bà cho cháu chọn một món, cháu tự đặt lên quầy và cảm ơn người bán.",
   "toi": "Ôn lại tuần: mẹ đọc lại đồng dao “Thằng Bờm”, bé đọc nối câu “Bờm rằng Bờm chẳng lấy…”. Hỏi: “Tuần sau mình thi bán hàng nhanh. Con muốn làm người bán hay người mua?”"
  },
  {
   "chuyen": "Tuần Thử thách: mỗi ngày một cuộc thi ở tiệm bánh.",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và đố. Xem “The Muffin Man”. Dừng ở câu hỏi “Do you know the muffin man?”, bé trả lời “Yes, I know the muffin man!”. Đố vui: “Where does he live?” (bé chỉ vào màn hình), “What does he make?” (bé nói “Muffins!”). Mỗi câu đúng một sao.",
    "b": "Do you know the muffin man?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem truyện và đố. Xem 买东西. Dừng ở mỗi lượt mua, đố bé: “Bạn ấy nói gì để xin?” Mẹ nhắc từ 请 (qǐng). Một sao nếu bé nhắc lại được 请.",
    "b": "请给我苹果。(qǐng gěi wǒ píngguǒ)"
   },
   "words": {
    "en": [
     5,
     8,
     2
    ],
    "zh": [
     2,
     4,
     3
    ]
   },
   "doi": "Thi “tiệm bánh nhanh tay” (10 phút): mẹ vo 10 “bánh” bằng giấy hoặc dùng bánh quy to. Mẹ là khách, gọi “Three buns, please!”. Bé đếm đủ bánh bỏ vào đĩa trong 10 giây (mẹ đếm). Đúng và kịp được một sao. Đổi vai, bé gọi bánh cho mẹ đếm.",
   "ob": "Ông bà gọi số bánh, cháu đếm đủ bánh bỏ vào đĩa thật nhanh.",
   "toi": "Mẹ kể truyện “Ba lưỡi rìu” bằng lời của mẹ: chàng tiều phu nghèo làm rơi chiếc rìu sắt xuống sông. Ông tiên vớt lên rìu vàng, chàng nói không phải của mình. Ông vớt lên rìu bạc, chàng cũng nói không phải. Đến chiếc rìu sắt, chàng mới nhận. Ông tiên khen chàng thật thà và tặng cả ba chiếc rìu. Hỏi bé: “Nếu cô bán hàng đưa thừa tiền cho mẹ, mẹ nên làm gì?”"
  },
  {
   "chuyen": "Thử thách vận động: đếm đến 20 và làm động tác thật nhanh.",
   "en": {
    "v": 3,
    "t": "Lần 1 – thi vận động. Xem “Count & Move”. Bé làm theo mỗi động tác (jump, clap, stomp, spin) và đếm theo video. Mẹ chấm sao: bé đếm đến 10 không vấp được một sao, đếm tiếp đến 20 được thêm sao. Dừng giữa bài hỏi “What number is next?”",
    "b": "Jump and count! Eleven, twelve…"
   },
   "zh": {
    "v": 1,
    "t": "Thử thách “ai hỏi trước”: bật 《多少钱？》. Mỗi lần sắp đến câu 多少钱, ai hỏi trước (mẹ hay bé) được một sao. Mẹ cố tình chậm để bé thắng.",
    "b": "我先问！多少钱？(wǒ xiān wèn)"
   },
   "words": {
    "en": [
     7,
     0
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Đường đua tiền giấy (10 phút): mẹ xếp 20 tờ tiền giấy thành một đường trên sàn. Bé nhảy lò cò từ tờ này sang tờ khác, mỗi bước hô một số tiếng Anh. Đến cuối đường, bé quay lại nhặt tiền và đếm lại có đủ 20 tờ không. Lần 2, đếm tiếng Trung đến 10.",
   "ob": "Ông bà xếp tiền giấy thành đường, cháu nhảy và đếm từng bước.",
   "toi": "Đồng dao “Ba bà đi bán lợn con”. Mẹ đọc, bé chạy “lon xon” tại chỗ ở câu cuối. Đọc lần 2, mẹ hỏi: “Ba bà có bán được lợn không? Lợn con chạy đi đâu?” Bé đáp “Chạy về!” rồi cả hai cùng cười.",
   "lyr": "Ba bà đi bán lợn con"
  },
  {
   "chuyen": "Đố vui lần 3 với bài bánh mì: bé là người hát trước.",
   "en": {
    "v": 1,
    "t": "Lần 3 – bé hát trước video. Bật “Hot Cross Buns”, mẹ tắt tiếng ở câu “one a penny, two a penny”, bé tự hát câu đó. Thử thách thêm: mẹ hỏi “How many buns for two pennies?” Bé trả lời “Two!”. Đúng được hai sao.",
    "b": "You sing! One a penny…"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – đóng vai thi đua. Xem lại 买东西, rồi mẹ và bé diễn lại. Ai nói được câu 请给我… (qǐng gěi wǒ) với một món khác trong video trước được một sao.",
    "b": "请给我面包。(qǐng gěi wǒ miànbāo)"
   },
   "words": {
    "en": [
     5,
     1,
     0,
     3
    ],
    "zh": [
     2,
     3,
     6
    ]
   },
   "doi": "Chuyển ngữ ở quầy hàng (10 phút): mẹ hỏi bằng tiếng Anh “How many apples?”, bé trả lời bằng tiếng Trung “三个” (sān gè) hoặc bằng số tiếng Trung mẹ đọc theo web. Mẹ hỏi tiếng Trung “多少钱？”, bé trả lời bằng tiếng Anh “Two!”. Mỗi lần đổi tiếng đúng được một sao.",
   "ob": "Ông bà hỏi giá bằng tiếng Việt, cháu trả lời bằng số tiếng Anh hoặc tiếng Trung.",
   "toi": "Mẹ đọc một cuốn trong bộ “Bé học yêu thương và chia sẻ” (NXB Trẻ). Chọn truyện về chia sẻ đồ ăn hoặc đồ chơi. Đọc xong, hỏi: “Nếu con có 4 cái bánh và 2 bạn, con chia thế nào?” Bé chia bằng bánh giấy và đếm."
  },
  {
   "chuyen": "Thi “siêu thị tốc độ”: đếm và vận động cùng lúc.",
   "en": {
    "v": 3,
    "t": "Lần 2 – thi đếm có động tác. Bật lại “Count & Move”, lần này mẹ đổi động tác: video bảo jump thì bé phải clap (vỗ tay), video bảo clap thì bé jump. Ai làm nhầm thì đổi lượt. Mẹ dừng hỏi “How many claps?” Bé đếm lại số lần vỗ tay.",
    "b": "Clap, clap! How many claps?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – đố từ. Xem lại 超市, mẹ tắt tiếng. Mẹ chỉ một món trên màn hình, bé nói tên tiếng Trung. Mỗi từ đúng được một sao. Đủ 3 sao, bé hô “超市，我来了！” (chāoshì, wǒ lái le).",
    "b": "超市，我来了！(chāoshì, wǒ lái le)"
   },
   "words": {
    "en": [
     7,
     0
    ],
    "zh": [
     5,
     2,
     4
    ]
   },
   "doi": "Siêu thị tốc độ (15 phút): mẹ bày 8 món quanh phòng, mỗi món gắn giá 1–3 sao. Mẹ đọc một “đơn hàng”: “Two apples and one bun.” Bé chạy lấy đủ, đem về quầy, đếm tiền giấy trả đúng. Mẹ bấm giờ. Lần 2, bé đọc đơn cho mẹ chạy. Chọn hoá trang cho ngày mai: bé muốn làm Muffin Man hay cô bán hàng?",
   "ob": "Ông bà đọc đơn hàng, cháu chạy lấy đủ món và trả bằng tiền giấy.",
   "toi": "Bé kể lại truyện “Ba lưỡi rìu” bằng đồ vật: mẹ đưa ba chiếc thìa (một thìa vàng giấy, một thìa bạc giấy, một thìa thật) làm ba lưỡi rìu. Bé làm ông tiên đưa từng chiếc, mẹ làm tiều phu trả lời. Đổi vai một lần."
  },
  {
   "chuyen": "Bé làm “Muffin Man” lần cuối: thi hát nhanh và đúng.",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé hát trước video. Bật “The Muffin Man”, mẹ dừng trước câu trả lời, bé hát trước: “Yes, I know the muffin man!”. Thử thách câu dài: mẹ hỏi “What can you buy at the bakery?” Bé trả lời “I can buy a muffin.” Câu đủ được hai sao.",
    "b": "I can buy a muffin."
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé kể trước. Mẹ tắt tiếng 买东西, bé xem hình và nói thay nhân vật: “请给我…”, “多少钱？”, “谢谢！”. Bật tiếng kiểm tra.",
    "b": "谢谢！再见！(xièxie, zàijiàn)"
   },
   "words": {
    "en": [
     5,
     8,
     2,
     4
    ],
    "zh": [
     0,
     1,
     3,
     6
    ]
   },
   "doi": "Chuẩn bị trang phục hoá trang (10 phút): nếu làm Muffin Man, mẹ và bé làm mũ đầu bếp bằng giấy trắng cuộn tròn dán băng dính, tạp dề là chiếc khăn buộc ngang hông. Nếu làm cô bán hàng, bé làm bảng tên và một hộp tiền bằng hộp giày. Bé tập câu chào: “Hello! Do you want a muffin?”",
   "ob": "Ông bà giúp cháu làm mũ đầu bếp hoặc hộp tiền bằng hộp giày.",
   "toi": "Câu đố dân gian “Câu đố quả nhãn”. Mẹ đọc, bé đoán. Nếu có nhãn, mẹ bóc một quả, bé nhìn: “da cóc”, “bột lọc”, “hòn than” là phần nào. Mẹ bỏ hạt ra trước khi bé ăn.",
   "lyr": "Câu đố quả nhãn"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và ngày hoá trang ở tiệm bánh.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: 3 sao. Sao 1: bé đếm đến 20 theo bài Count & Move. Sao 2: bé nói một câu dài khi bán hàng: “Here you are. Thank you!”. Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần để xem lại trong bộ trang phục hoá trang.",
    "b": "Hello, Muffin Man!"
   },
   "zh": {
    "v": 2,
    "t": "Xem lại 买东西 và bé nói thay người bán. Một sao nếu bé tự nói 多少钱？ và 给你。",
    "b": "欢迎光临！(huānyíng guānglín)"
   },
   "special": "Ngày hoá trang: bé đóng vai nhân vật trong video",
   "doi": "Ngày hoá trang “Tiệm bánh của Muffin Man” (20 phút): bé đội mũ đầu bếp, đứng sau quầy (bàn nhỏ). Cả nhà lần lượt làm khách. Bé chào “Hello!”, khách hỏi “How many muffins?” hoặc “多少钱？”. Bé đếm bánh, nhận tiền giấy, nói “Here you are!” và “谢谢！”. Cuối buổi bé đếm tổng số tiền giấy thu được, mẹ quay clip 1 phút gửi ông bà.",
   "ob": "Ông bà làm khách mua bánh, hỏi giá và trả tiền giấy cho cháu.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé: “Hôm nay con bán được bao nhiêu bánh? Con thích làm người bán hay người mua?” Mẹ kể cho bé nghe ngày xưa bà đi bán hàng ở chợ phải dậy sớm thế nào."
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 3,
    "t": "Ôn nhẹ: bé tự chọn một video của vòng này để xem lại (nhớ Numberblocks chỉ xem 5 phút). Mẹ để bé vận động, hát tự do. Cuối cùng hỏi: “How many stars did you get this week?”",
    "b": "How many stars did you get?"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: xem lại 《多少钱？》 một lần, bé hát to câu 多少钱.",
    "b": "我们数一数。(wǒmen shǔ yi shǔ)"
   },
   "doi": "Chơi lại một trò web bé thích. Sau đó bé đếm toàn bộ ngôi sao thưởng của vòng, xếp thành hàng 10, nói số bằng tiếng Anh. Cất tiền giấy vào phong bì để dành cho các trò sau.",
   "ob": "Ông bà cùng cháu đếm ngôi sao thưởng và khen cháu.",
   "toi": "Mẹ và bé ôn lại: bé chọn đọc lại “Ba bà đi bán lợn con” hoặc kể truyện “Cây khế”. Mẹ hỏi: “Tuần sau mình gặp khủng long. Con nghĩ khủng long to bằng cái gì?” Chúc bé ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[137] = {
 "sub": "Khủng long to, nhỏ, ăn cỏ – ăn thịt",
 "vocab": {
  "en": [
   [
    "dinosaur",
    "🦕",
    "khủng long",
    false
   ],
   [
    "T. rex",
    "🦖",
    "khủng long bạo chúa",
    false
   ],
   [
    "big",
    "🏔️",
    "to",
    false
   ],
   [
    "small",
    "🐜",
    "nhỏ",
    false
   ],
   [
    "long",
    "📏",
    "dài",
    false
   ],
   [
    "tall",
    "🦒",
    "cao",
    false
   ],
   [
    "roar",
    "🗣️",
    "gầm",
    true
   ],
   [
    "stomp",
    "🦶",
    "dậm chân",
    true
   ],
   [
    "plants",
    "🌿",
    "cây cỏ",
    false
   ],
   [
    "meat",
    "🍖",
    "thịt",
    false
   ]
  ],
  "zh": [
   [
    "恐龙",
    "kǒnglóng",
    "khủng long",
    "🦕"
   ],
   [
    "大",
    "dà",
    "to",
    "🏔️"
   ],
   [
    "小",
    "xiǎo",
    "nhỏ",
    "🐜"
   ],
   [
    "长",
    "cháng",
    "dài",
    "📏"
   ],
   [
    "高",
    "gāo",
    "cao",
    "🦒"
   ],
   [
    "吃草",
    "chī cǎo",
    "ăn cỏ",
    "🌿"
   ],
   [
    "吃肉",
    "chī ròu",
    "ăn thịt",
    "🍖"
   ]
  ],
  "en_phr": [
   [
    "The dinosaur is big.",
    "big",
    "🦕"
   ],
   [
    "I can stomp!",
    "stomp",
    "🦶"
   ],
   [
    "T. rex can roar.",
    "roar",
    "🦖"
   ],
   [
    "It eats plants.",
    "plants",
    "🌿"
   ]
  ],
  "zh_phr": [
   [
    "恐龙很大。",
    "大",
    "kǒnglóng hěn dà",
    "khủng long rất to",
    "🦕"
   ],
   [
    "它的脖子很长。",
    "长",
    "tā de bózi hěn cháng",
    "cổ nó rất dài",
    "📏"
   ],
   [
    "我喜欢恐龙。",
    "恐龙",
    "wǒ xǐhuan kǒnglóng",
    "con thích khủng long",
    "🦖"
   ]
  ],
  "seq": [
   [
    "🥚",
    "egg",
    "蛋"
   ],
   [
    "🐣",
    "baby dinosaur",
    "小恐龙"
   ],
   [
    "🌿",
    "eat plants",
    "吃草"
   ],
   [
    "🦕",
    "big dinosaur",
    "大恐龙"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Ten Little Dinosaurs",
    "u": "https://www.youtube.com/watch?v=sLO7ZOCGZqI",
    "kind": "song_action",
    "min": 2.5,
    "ch": "Little Fox - Kids Stories and Songs"
   },
   {
    "t": "Dinosaur Stomp (đọc truyện)",
    "u": "https://www.youtube.com/watch?v=9z_jxSdaiMg",
    "kind": "story",
    "min": 3.5,
    "ch": "Mindy Colucci"
   },
   {
    "t": "Dinosaur Roar! (đọc truyện)",
    "u": "https://www.youtube.com/watch?v=vTtQ_qkXpaA",
    "kind": "story",
    "min": 6.8,
    "ch": "Bri Reads"
   }
  ],
  "zh": [
   {
    "t": "恐龙歌 Dinosaur Song (bản ngắn)",
    "u": "https://www.youtube.com/shorts/J7fRp-GFUs4",
    "kind": "song_action",
    "min": 1,
    "ch": "小不點中文 A Little Chinese"
   },
   {
    "t": "恐龙 – 宝贝中文小课堂 (bài học khủng long; xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=2Z5qLwaRpLQ",
    "kind": "lesson",
    "min": 5,
    "ch": "宝贝中文 Baobei Chinese"
   },
   {
    "t": "小恐龙朋友们 Little dinosaur friends (video tổng hợp dài: mỗi ngày chỉ xem 1 tập, đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=-u3BL4iaK0U",
    "kind": "story",
    "min": 5,
    "ch": "Little Fox Chinese – Stories & Songs for Learners"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: khủng long dậm chân, gầm vang",
   "toi_vi": [
    {
     "t": "Con vỏi con voi",
     "type": "ve",
     "lyr": "Con vỏi con voi\nCái vòi đi trước,\nHai chân trước đi trước,\nHai chân sau đi sau\nCòn cái đuôi đi sau rốt\nTôi xin kể nốt\nCái chuyện con voi\nCon vỏi con voi\nCái vòi đi trước…"
    },
    {
     "t": "Câu đố con voi",
     "type": "cau_do",
     "lyr": "Bốn cột tứ trụ\nNgười ngự lên trên\nGươm bạc hai bên\nChầu vua thượng đế\nLà con gì?"
    }
   ],
   "book_vi": {
    "t": "Chuyện ở rừng Vi vu (bộ sách tranh)",
    "author": "Trương Huỳnh Như Trân",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Kể chuyện: khủng long to, khủng long nhỏ",
   "toi_vi": [
    {
     "t": "Con cua mà có hai càng",
     "type": "ve",
     "lyr": "Con cua mà có hai càng\nĐầu, tai không có bò ngang cả đời\nCon cá mà có cái đuôi\nHai vây ve vẩy nó bơi rất tài\nCon rùa mà có cái mai\nCái cổ thụt ngắn, thụt dài vào ra\nCon voi mà có hai ngà\nCái vòi nó cuốn đổ nhà, đổ cây\nCon chim mà có cánh bay\nBay cùng Nam, Bắc, Đông, Tây tỏ tường."
    },
    {
     "t": "Con công hay múa",
     "type": "dong_dao",
     "lyr": "Con công hay múa\nNó múa làm sao\nNó rụt cổ vào\nNó xoè cánh ra\nNó đậu cành đa\nNó kêu ríu rít\nNó đậu cành mít\nNó kêu vịt chè\nNó đậu cành tre\nNó kêu bè muống\nNó đỗ dưới ruộng\nNó kêu tầm vông"
    }
   ],
   "book_vi": {
    "t": "Truyện đồng thoại Võ Quảng (có tranh màu)",
    "author": "Võ Quảng",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được dinosaur, big, small, long, tall khi chỉ vào tranh"
  ],
  [
   "en",
   "Nói được câu “The dinosaur is big.” hoặc “I can stomp!”"
  ],
  [
   "zh",
   "Nói được 恐龙, 大, 小, 长 và dùng đúng khi so sánh hai con"
  ],
  [
   "zh",
   "Nói được câu 我喜欢恐龙。"
  ],
  [
   "td",
   "Phân loại được khủng long ăn cỏ và ăn thịt bằng tranh hoặc đồ chơi"
  ],
  [
   "td",
   "Xếp được 5 đồ vật từ to đến nhỏ"
  ],
  [
   "vi",
   "Kể lại được một đoạn truyện bằng lời của mình, có chi tiết to – nhỏ"
  ],
  [
   "vd",
   "Dậm chân, gầm, đi chậm – nhanh theo nhạc đúng hiệu lệnh"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này cả nhà biến thành khủng long. Hôm nay đếm 10 chú khủng long nhỏ.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và đếm. Xem “Ten Little Dinosaurs”. Mỗi chú khủng long xuất hiện, bé giơ thêm một ngón tay. Mẹ dừng ở giữa bài, hỏi “How many dinosaurs?” Bé đếm ngón tay bằng tiếng Anh. Câu Yes/No: “Is it a dinosaur? Yes or no?”",
    "b": "One little, two little, three little dinosaurs!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và làm. Bài rất ngắn, xem 3 lần liền. Lần 1 nghe. Lần 2 bé dậm chân theo nhịp. Lần 3, mỗi lần nghe 恐龙 (kǒnglóng) bé giơ hai tay làm móng vuốt, nghe 大 (dà) bé dang tay thật rộng.",
    "b": "大恐龙来了！(dà kǒnglóng lái le)"
   },
   "words": {
    "en": [
     0,
     7
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Đội khủng long đồ chơi (10 phút): mẹ và bé tìm trong nhà 10 thứ làm “khủng long” (thú nhựa, khối gỗ, lõi giấy vệ sinh vẽ mắt). Xếp thành hàng, đếm bằng tiếng Anh từ 1 đến 10, rồi đếm ngược. Bé đặt tên cho con to nhất và con nhỏ nhất.",
   "ob": "Ông bà cùng cháu xếp 10 con khủng long đồ chơi thành hàng và đếm.",
   "toi": "Mẹ kể truyện “Thầy bói xem voi” bằng lời của mẹ: năm ông thầy bói không nhìn thấy, mỗi người sờ một chỗ trên con voi. Ông sờ vòi bảo voi như con đỉa, ông sờ tai bảo như cái quạt, ông sờ chân bảo như cái cột, ông sờ đuôi bảo như cái chổi. Ai cũng cho mình đúng. Rồi một bạn nhỏ dắt các ông đi sờ cả con voi, mọi người cùng bật cười: voi to quá, có đủ cả! Hỏi bé: “Muốn biết con khủng long trông thế nào, mình phải nhìn những chỗ nào?”"
  },
  {
   "chuyen": "Hôm nay là ngày nhảy múa kiểu khủng long.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Xem truyện nhảy múa “Dinosaur Stomp”. Mẹ dừng ở mỗi kiểu nhảy mới, hỏi “What is the dinosaur doing?” Bé làm thử động tác. Mẹ nói lại từ: stomp, roar, dance. Câu hỏi Where: “Where is the big dinosaur?” Bé chỉ.",
    "b": "Stomp, stomp! Let's dance!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Xem đoạn đầu 5 phút bài học 恐龙. Dừng ở mỗi con khủng long, mẹ hỏi “大还是小？” (dà háishì xiǎo – to hay nhỏ?). Bé dang tay (大) hoặc chụm tay (小) rồi nói từ.",
    "b": "这个恐龙很大。(zhège kǒnglóng hěn dà)"
   },
   "words": {
    "en": [
     7,
     6,
     0
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Dấu chân khủng long to – nhỏ (10 phút): mẹ cắt 2 dấu chân bằng giấy báo: một cái to bằng chiếc khay, một cái nhỏ bằng bàn tay. Dán xuống sàn cách nhau. Mẹ nói “Big!” bé nhảy lên dấu to và dậm mạnh; mẹ nói “Small!” bé nhón chân lên dấu nhỏ. Đổi sang tiếng Trung: 大 – 小.",
   "ob": "Ông bà nói to hoặc nhỏ, cháu nhảy lên dấu chân giấy to hoặc nhỏ.",
   "toi": "Đồng vè “Con vỏi con voi”. Mẹ đọc, bé đi bằng hai tay hai chân như voi, một tay giơ lên làm vòi. Đọc đến “cái vòi đi trước”, bé đưa tay ra trước; “hai chân sau đi sau”, bé lắc mông. Mẹ hỏi: “Voi to hay khủng long to hơn?”",
   "lyr": "Con vỏi con voi"
  },
  {
   "chuyen": "Bé dậm chân theo nhạc, nhạc dừng thì khủng long đứng im.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật “Ten Little Dinosaurs”, bé làm khủng long đi dậm chân quanh phòng. Freeze dance: mẹ dừng nhạc bất chợt, bé đứng im như tượng khủng long. Mẹ hỏi “Big dinosaur or small dinosaur?” Bé biến thành khủng long to (đứng thẳng, giơ tay) hoặc nhỏ (ngồi thu lu).",
    "b": "Freeze! Big or small?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật 恐龙歌, mẹ và bé thi gầm: nghe 恐龙 thì gầm nhỏ, nghe 大 thì gầm thật to. Dừng nhạc, mẹ hỏi “恐龙怎么叫？” (kǒnglóng zěnme jiào – khủng long kêu thế nào?), bé gầm.",
    "b": "恐龙怎么叫？(kǒnglóng zěnme jiào)"
   },
   "words": {
    "en": [
     0,
     2,
     3,
     7
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Xếp hàng từ to đến nhỏ (10 phút): mẹ đưa 5 đồ vật khác cỡ (gối, hộp giày, cuốn sách, cái cốc, nắp chai to). Bé xếp từ to nhất đến nhỏ nhất, chỉ vào từng cái nói “big… small”. Sau đó xếp ngược lại. Mẹ hỏi bằng tiếng Trung: “哪个大？” (nǎge dà – cái nào to?), bé chỉ.",
   "ob": "Ông bà đưa năm đồ vật to nhỏ khác nhau, cháu xếp từ to đến nhỏ.",
   "toi": "Mẹ đọc một cuốn trong bộ “Chuyện ở rừng Vi vu” (Trương Huỳnh Như Trân, NXB Kim Đồng). Trong lúc đọc, mỗi con vật xuất hiện, bé nói con đó to hay nhỏ. Đọc xong hỏi: “Nếu có khủng long đến rừng Vi vu, các bạn sẽ thế nào?”"
  },
  {
   "chuyen": "Hôm nay phân biệt khủng long ăn cỏ và khủng long ăn thịt.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật lại “Dinosaur Stomp”, bé nhảy theo từng kiểu trong truyện. Lần này mẹ chia: khi thấy khủng long cổ dài, bé vươn cổ giả vờ ăn lá (“plants”); khi thấy khủng long răng nhọn, bé há miệng gầm (“roar”). Mẹ dừng hỏi “Plants or meat?”",
    "b": "It eats plants. Yum!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – xem và phân loại. Xem lại đoạn đầu 5 phút bài học 恐龙. Mẹ dạy hai từ mới: 吃草 (chī cǎo – ăn cỏ) và 吃肉 (chī ròu – ăn thịt). Dừng ở mỗi con, bé đoán con đó 吃草 hay 吃肉.",
    "b": "它吃草。(tā chī cǎo)"
   },
   "words": {
    "en": [
     8,
     9,
     6,
     7
    ],
    "zh": [
     5,
     6,
     0
    ]
   },
   "doi": "Hai hồ ăn của khủng long (15 phút): mẹ đặt 2 cái đĩa: đĩa xanh dán hình lá cây (ăn cỏ), đĩa đỏ dán hình miếng thịt (ăn thịt). Bé xem tranh khủng long (vẽ hoặc in) rồi đặt vào đúng đĩa: con cổ dài vào đĩa lá, con răng nhọn vào đĩa thịt. Mỗi lần đặt, bé nói “It eats plants.” hoặc “It eats meat.”",
   "ob": "Ông bà cùng cháu chia tranh khủng long vào đĩa lá cây và đĩa thịt.",
   "toi": "Bé kể lại truyện “Thầy bói xem voi” bằng trò chơi: bé nhắm mắt, mẹ đưa cho bé sờ một chỗ của đồ vật to (cái gối, cái ghế). Bé đoán đó là gì. Rồi bé mở mắt nhìn cả đồ vật. Mẹ hỏi: “Sờ một chỗ thì có đoán đúng không? Vì sao các ông thầy bói cãi nhau?”"
  },
  {
   "chuyen": "Bé là ca sĩ khủng long: hát trước, video hát sau.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Bật “Ten Little Dinosaurs”, mẹ dừng trước mỗi số, bé đếm trước. Cuối bài, bé nói câu dài: “I can stomp like a dinosaur!” Mẹ khen và đếm xem bé hát được bao nhiêu số đúng.",
    "b": "I can stomp like a dinosaur!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé hát trước. Bật 恐龙歌, mẹ tắt tiếng một đoạn, bé tự hát hoặc nói 恐龙 đúng nhịp. Thêm câu mới: “我喜欢恐龙。” (wǒ xǐhuan kǒnglóng – con thích khủng long).",
    "b": "我喜欢恐龙！(wǒ xǐhuan kǒnglóng)"
   },
   "words": {
    "en": [
     0,
     7,
     2
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Tập tiết mục biểu diễn (10 phút): mẹ và bé chọn bài “Ten Little Dinosaurs” hoặc bài nhảy “Dinosaur Stomp”. Tập 2 lần: lần 1 theo nhạc, lần 2 tắt nhạc bé tự hát đếm. Bé làm “đuôi khủng long” bằng một chiếc khăn dài vừa phải nhét vào cạp quần.",
   "ob": "Ông bà xem cháu tập hát bài khủng long và vỗ tay theo nhịp.",
   "toi": "Câu đố dân gian “Câu đố con voi”. Mẹ đọc chậm, giải thích “bốn cột tứ trụ” là bốn chân, “gươm bạc hai bên” là hai ngà. Bé đoán. Sau đó bé tự đố mẹ: “Con gì cổ dài, ăn lá cây trên cao?” (khủng long cổ dài hoặc hươu cao cổ).",
   "lyr": "Câu đố con voi"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và buổi biểu diễn của khủng long nhí.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé đếm 10 chú khủng long bằng tiếng Anh. Sao 2: bé nói đúng big hoặc small khi mẹ chỉ hai đồ vật. Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần để xem lại.",
    "b": "Roar! You did it!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 恐龙歌 và cả nhà cùng gầm. Một sao nếu bé tự nói 大 và 小 đúng lúc.",
    "b": "恐龙宝宝真棒！(kǒnglóng bǎobao zhēn bàng)"
   },
   "special": "Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip",
   "doi": "Biểu diễn “Khủng long nhí” (15 phút): bé đeo đuôi khăn, đứng trên “sân khấu” là tấm thảm. Bé giới thiệu: “Con là khủng long… Con ăn cỏ (hoặc ăn thịt).” Bé hát và dậm chân bài đã tập. Cuối tiết mục, bé nói một câu tiếng Anh: “I can roar!” và một câu tiếng Trung: “我喜欢恐龙！”. Mẹ quay clip 1 phút, cả nhà vỗ tay.",
   "ob": "Ông bà làm khán giả xem cháu biểu diễn khủng long, hỏi cháu khủng long ăn gì.",
   "toi": "Buổi tối nhẹ nhàng: cả nhà xem lại clip. Mẹ hỏi: “Con thích đoạn nào nhất? Lần sau con muốn làm khủng long gì?” Mẹ kể: khủng long sống từ rất lâu, lâu hơn cả thời ông bà của ông bà."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và đi tìm “khủng long” ngoài công viên.",
   "en": {
    "v": 1,
    "t": "Ôn tập: bé chọn bài thích nhất (đếm khủng long hoặc nhảy khủng long) để xem lại. Lần này bé ra lệnh cho bố mẹ: “Stomp!”, “Roar!”, cả nhà làm theo. Chơi lại một trò web bé thích.",
    "b": "Daddy, stomp! Mummy, roar!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn tập: xem lại 5 phút đầu bài học 恐龙. Bé chỉ và nói 大 hoặc 小 với từng con trước khi mẹ hỏi.",
    "b": "大恐龙，小恐龙。(dà kǒnglóng, xiǎo kǒnglóng)"
   },
   "doi": "Đi công viên tìm “đồ to – đồ nhỏ” (20 phút): cả nhà đi dạo, bé tìm 3 thứ to như khủng long (cây to, cầu trượt, ô tô) và 3 thứ nhỏ (chiếc lá, con kiến, viên gạch). Mỗi lần tìm thấy, bé nói “Big!” hoặc “Small!”, rồi thử nói tiếng Trung 大 – 小. Nắm tay bé khi gần đường xe chạy.",
   "ob": "Ông bà dẫn cháu đi dạo, cháu tìm ba thứ to và ba thứ nhỏ.",
   "toi": "Ôn lại tuần: bé đọc lại “Con vỏi con voi” cùng mẹ, vừa đọc vừa đi như voi. Mẹ hỏi: “Tuần sau mình nghe truyện khủng long gầm. Con nghĩ khủng long nhỏ gầm thế nào?”"
  },
  {
   "chuyen": "Tuần kể chuyện: khủng long gầm to, khủng long kêu nhỏ.",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và dừng hỏi. Xem “Dinosaur Roar!”. Truyện có nhiều cặp trái nghĩa. Mỗi trang, mẹ dừng và hỏi “Chuyện gì xảy ra tiếp?” và một câu Yes/No: “Is this dinosaur big? Yes or no?” Bé trả lời rồi dùng giọng và thân người diễn: gầm to (big), kêu chít chít (small).",
    "b": "Big roar! Small squeak!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem truyện. Xem một tập ngắn 小恐龙朋友们 (đoạn đầu 5 phút). Dừng 2 lần, hỏi “Chuyện gì xảy ra tiếp?” Mẹ chỉ vào các bạn khủng long, nói 长 (cháng) cho con cổ dài, 高 (gāo) cho con cao.",
    "b": "它的脖子很长。(tā de bózi hěn cháng)"
   },
   "words": {
    "en": [
     2,
     3,
     4,
     6
    ],
    "zh": [
     0,
     3,
     4
    ]
   },
   "doi": "Đo “dài” bằng bước chân (15 phút): mẹ kể khủng long cổ dài dài bằng mấy chiếc ô tô. Ở hành lang, mẹ và bé đo bằng bước chân: từ cửa đến bàn bao nhiêu bước, từ tường đến tủ bao nhiêu bước. Cái nào dài hơn? Bé nói “Long!” và đếm số bước bằng tiếng Anh.",
   "ob": "Ông bà cùng cháu đếm bước chân đo hành lang, xem chỗ nào dài hơn.",
   "toi": "Mẹ kể truyện “Sư Tử và Chuột Nhắt” bằng lời của mẹ: Sư Tử to lớn bắt được Chuột Nhắt bé xíu, nhưng thương tình thả ra. Chuột hứa sẽ trả ơn, Sư Tử bật cười. Ít lâu sau, Sư Tử bị mắc lưới, gầm mãi không thoát. Chuột Nhắt chạy đến gặm đứt từng mắt lưới cứu bạn. Hỏi bé: “Ai to, ai nhỏ? Bạn nhỏ có giúp được bạn to không?”"
  },
  {
   "chuyen": "Hôm nay bé kể chuyện nhảy múa của khủng long bằng tranh.",
   "en": {
    "v": 1,
    "t": "Kể lại bằng tranh. Xem lại “Dinosaur Stomp”. Trước khi xem, mẹ dặn “Con nhớ 3 kiểu nhảy nhé.” Xem xong, bé vẽ 3 kiểu nhảy vào 3 ô giấy và kể theo thứ tự: “First… then… last…”. Mẹ hỏi “What happens at the end?”",
    "b": "First stomp, then roar!"
   },
   "zh": {
    "v": 1,
    "t": "Kể lại bài học thành câu chuyện. Xem lại đoạn đầu 5 phút 恐龙. Rồi mẹ đưa 3 đồ chơi khủng long (hoặc tranh), bé kể một câu chuyện ngắn: con 大 gặp con 小, chúng 吃草 hay 吃肉.",
    "b": "大恐龙和小恐龙是朋友。(dà kǒnglóng hé xiǎo kǒnglóng shì péngyou)"
   },
   "words": {
    "en": [
     7,
     6,
     0
    ],
    "zh": [
     1,
     2,
     5,
     6
    ]
   },
   "doi": "Rối tay khủng long (15 phút): mẹ và bé làm rối từ chiếc tất cũ: dán mắt giấy, cắt răng giấy hình tam giác (mẹ cầm kéo). Một con là khủng long to (tất của bố), một con khủng long nhỏ (tất của bé). Hai con nói chuyện: con to gầm “Roar!”, con nhỏ nói “Hello, I am small.”",
   "ob": "Ông bà làm rối tất khủng long với cháu, cho hai con rối chào nhau.",
   "toi": "Đồng vè “Con cua mà có hai càng”. Mẹ đọc từng đoạn, bé làm động tác: cua bò ngang, cá vẫy đuôi, rùa thụt cổ, voi cuốn vòi, chim vỗ cánh. Mẹ hỏi: “Nếu khủng long có một câu, khủng long có gì nhỉ?” Bé tự nghĩ: cổ dài, đuôi to…",
   "lyr": "Con cua mà có hai càng"
  },
  {
   "chuyen": "Đóng vai truyện “Dinosaur Roar!”: bé là khủng long gầm to.",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại “Dinosaur Roar!”. Mẹ và bé chia vai: bé làm con to, mẹ làm con nhỏ; trang sau đổi lại. Dừng ở mỗi trang, hai mẹ con nói thay khủng long bằng giọng to – nhỏ, nhanh – chậm. Mẹ hỏi “What happens next?” trước khi lật trang.",
    "b": "I am big! I can roar!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại tập 小恐龙朋友们 hôm thứ Hai (5 phút). Bé dùng rối tất đóng một bạn khủng long, nói câu ngắn: “我是恐龙。” (wǒ shì kǒnglóng), “我很高。” (wǒ hěn gāo).",
    "b": "我是恐龙，我很高！(wǒ shì kǒnglóng, wǒ hěn gāo)"
   },
   "words": {
    "en": [
     2,
     3,
     6,
     1
    ],
    "zh": [
     0,
     4,
     3
    ]
   },
   "doi": "Khủng long cao – thấp (10 phút): bé đứng sát tường, mẹ đánh dấu chiều cao bằng giấy dán. Đo cả nhà: bố, mẹ, bé, gấu bông. Ai cao nhất? Bé nói “Daddy is tall.”, “Teddy is small.” Thử tiếng Trung: “爸爸很高。” (bàba hěn gāo).",
   "ob": "Ông bà cùng cháu đo chiều cao cả nhà bằng giấy dán trên tường.",
   "toi": "Mẹ đọc một truyện trong “Truyện đồng thoại Võ Quảng” (NXB Kim Đồng). Chọn truyện ngắn có con vật to và con vật nhỏ. Đọc đến giữa, dừng hỏi: “Con đoán chuyện gì xảy ra tiếp?” Đọc tiếp để kiểm tra."
  },
  {
   "chuyen": "Chuyển ngữ: khủng long nói tiếng Anh, khủng long nói tiếng Trung.",
   "en": {
    "v": 1,
    "t": "Bé kể trước video. Mẹ tắt tiếng “Dinosaur Stomp”, chỉ cho xem hình. Bé tự kể: “The dinosaur stomps. The dinosaur dances.” (mẹ gợi từ nếu cần). Bật tiếng kiểm tra đoạn cuối. Cuối cùng bé chọn kiểu nhảy thích nhất và dạy mẹ.",
    "b": "You tell the story!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ một từ: xem lại 5 phút đầu bài 恐龙. Dừng ở mỗi con, mẹ nói tiếng Anh “big”, bé nói tiếng Trung “大”; mẹ nói “small”, bé nói “小”; mẹ nói “dinosaur”, bé nói “恐龙”.",
    "b": "Big 是“大”。(big shì dà)"
   },
   "words": {
    "en": [
     7,
     0,
     6
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Hai con rối, hai thứ tiếng (10 phút): rối tất khủng long to chỉ nói tiếng Anh, rối nhỏ chỉ nói tiếng Trung. Mẹ cầm rối to nói “I am big.”, bé cầm rối nhỏ trả lời “我很小。” (wǒ hěn xiǎo). Đổi rối: bé nói tiếng Anh, mẹ đọc tiếng Trung theo pinyin trên web.",
   "ob": "Ông bà cầm một con rối nói tiếng Việt, cháu cầm con rối kia trả lời bằng tiếng Anh hoặc tiếng Trung.",
   "toi": "Bé kể lại truyện “Sư Tử và Chuột Nhắt”. Mẹ đóng Sư Tử nằm trong “lưới” là chiếc chăn mỏng. Bé làm Chuột Nhắt “gặm” từng góc chăn để mẹ chui ra. Mẹ hỏi: “Vì sao Sư Tử lúc đầu bật cười? Sau đó Sư Tử nghĩ gì?”"
  },
  {
   "chuyen": "Bé là người dẫn chuyện “Dinosaur Roar!”.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước video. Mẹ dừng trước mỗi trang, bé nói trước khủng long trang này thế nào: “Big!”, “Small!”, “Long!”. Bật tiếp để kiểm tra. Cuối truyện bé nói câu dài: “The big dinosaur can roar.”",
    "b": "The big dinosaur can roar."
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé nói trước. Xem lại tập 小恐龙朋友们 (5 phút), mẹ dừng trước cảnh quen, bé nói trước một từ: 恐龙, 长, 高. Thêm câu hỏi: “谁最高？” (shéi zuì gāo – ai cao nhất?), bé chỉ.",
    "b": "谁最高？(shéi zuì gāo)"
   },
   "words": {
    "en": [
     2,
     3,
     4,
     6
    ],
    "zh": [
     0,
     3,
     4
    ]
   },
   "doi": "Chuẩn bị picnic khủng long (10 phút): bé và mẹ lên thực đơn cho ngày mai: “đồ ăn khủng long ăn cỏ” (rau, dưa chuột, bánh mì kẹp rau) và “đồ ăn khủng long ăn thịt” (thịt gà luộc xé). Bé vẽ thực đơn và nói tên tiếng Anh hoặc tiếng Trung mỗi món.",
   "ob": "Ông bà cùng cháu chọn đồ ăn cho picnic khủng long ngày mai.",
   "toi": "Đồng dao “Con công hay múa”. Mẹ đọc, bé múa như con công: rụt cổ vào, xòe cánh ra. Đọc lần 2, bé múa như khủng long thay vì công cho vui. Mẹ hỏi: “Công múa đẹp hay khủng long múa đẹp?”",
   "lyr": "Con công hay múa"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và picnic khủng long.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: 3 sao. Sao 1: bé kể lại 3 cặp khủng long trong “Dinosaur Roar!” (big – small, long – short…). Sao 2: bé nói câu “It eats plants.” hoặc “It eats meat.” Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần xem lại.",
    "b": "Plants or meat? Tell me!"
   },
   "zh": {
    "v": 2,
    "t": "Xem lại tập 小恐龙朋友们. Một sao nếu bé tự nói 吃草 hoặc 吃肉 khi ăn picnic.",
    "b": "恐龙吃草。(kǒnglóng chī cǎo)"
   },
   "special": "Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung",
   "doi": "Picnic khủng long (20 phút): trải khăn ở sân hoặc ban công, đặt các con khủng long đồ chơi quanh khăn. Bé chia đồ ăn: rau, dưa chuột cho “khủng long ăn cỏ”, thịt gà xé cho “khủng long ăn thịt”. Mỗi lần đưa, bé nói “It eats plants.” hoặc “它吃肉。” (tā chī ròu). Cả nhà ăn cùng, ai muốn ăn phải gầm “Roar!” trước. Ăn xong bé tự gấp khăn, nhặt rác.",
   "ob": "Ông bà ngồi picnic cùng cháu, cho khủng long đồ chơi ăn rau hoặc thịt.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé: “Hôm nay khủng long nào ăn nhiều nhất?” Mẹ kể cho bé nghe về khủng long trong viện bảo tàng: chỉ còn lại xương to, người ta ráp lại."
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: bé tự chọn một video trong vòng (đếm khủng long, nhảy khủng long hoặc truyện gầm) để xem lại. Mẹ để bé nhảy tự do. Cuối cùng hỏi: “Which dinosaur do you like?”",
    "b": "Which dinosaur do you like?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại 恐龙歌 một lần, cả nhà dậm chân theo.",
    "b": "恐龙，再见！(kǒnglóng, zàijiàn)"
   },
   "doi": "Chơi lại một trò web bé thích. Sau đó bé cất khủng long đồ chơi vào hộp, xếp từ to đến nhỏ.",
   "ob": "Ông bà khen cháu cất đồ chơi khủng long gọn, xếp từ to đến nhỏ.",
   "toi": "Mẹ và bé ôn lại: bé chọn kể lại một truyện (Thầy bói xem voi hoặc Sư Tử và Chuột Nhắt). Mẹ hỏi: “Tuần sau mình tìm trứng khủng long và dấu chân. Con nghĩ trứng khủng long to bằng gì?” Chúc bé ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[138] = {
 "sub": "Trứng khủng long, dấu chân, hoá thạch",
 "vocab": {
  "en": [
   [
    "egg",
    "🥚",
    "quả trứng",
    false
   ],
   [
    "footprint",
    "👣",
    "dấu chân",
    false
   ],
   [
    "fossil",
    "🦴",
    "hoá thạch, xương cổ",
    false
   ],
   [
    "dig",
    "⛏️",
    "đào",
    true
   ],
   [
    "nest",
    "🪺",
    "cái tổ",
    false
   ],
   [
    "hatch",
    "🐣",
    "nở ra",
    true
   ],
   [
    "brush",
    "🖌️",
    "chải, quét nhẹ",
    true
   ],
   [
    "dinosaur",
    "🦕",
    "khủng long",
    false
   ],
   [
    "tail",
    "🦎",
    "cái đuôi",
    false
   ]
  ],
  "zh": [
   [
    "恐龙",
    "kǒnglóng",
    "khủng long",
    "🦕"
   ],
   [
    "蛋",
    "dàn",
    "quả trứng",
    "🥚"
   ],
   [
    "脚印",
    "jiǎoyìn",
    "dấu chân",
    "👣"
   ],
   [
    "骨头",
    "gǔtou",
    "khúc xương",
    "🦴"
   ],
   [
    "挖",
    "wā",
    "đào",
    "⛏️"
   ],
   [
    "大",
    "dà",
    "to",
    "🏔️"
   ],
   [
    "小",
    "xiǎo",
    "nhỏ",
    "🐜"
   ]
  ],
  "en_phr": [
   [
    "This is a dinosaur egg.",
    "egg",
    "🥚"
   ],
   [
    "I can see a footprint.",
    "footprint",
    "👣"
   ],
   [
    "Let's dig!",
    "dig",
    "⛏️"
   ],
   [
    "The baby dinosaur can hatch.",
    "hatch",
    "🐣"
   ]
  ],
  "zh_phr": [
   [
    "这是恐龙蛋。",
    "蛋",
    "zhè shì kǒnglóng dàn",
    "đây là trứng khủng long",
    "🥚"
   ],
   [
    "这个脚印很大。",
    "脚印",
    "zhège jiǎoyìn hěn dà",
    "dấu chân này rất to",
    "👣"
   ],
   [
    "我们挖一挖！",
    "挖",
    "wǒmen wā yi wā",
    "mình đào thử nào",
    "⛏️"
   ]
  ],
  "seq": [
   [
    "🦕",
    "dinosaur walks",
    "恐龙走路"
   ],
   [
    "👣",
    "footprint",
    "脚印"
   ],
   [
    "🦴",
    "bones",
    "骨头"
   ],
   [
    "⛏️",
    "we dig",
    "挖"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Diplodocus Facts – Andy's Dinosaur Adventures",
    "u": "https://www.youtube.com/watch?v=xpjc3BvhKTM",
    "kind": "explainer",
    "min": 5.6,
    "ch": "CBeebies"
   },
   {
    "t": "Dinosaur Raps – Andy's Dinosaur Adventures (video dài, chỉ xem đoạn đầu 5 phút: 2 bài rap)",
    "u": "https://www.youtube.com/watch?v=IYzE-9Ng2oE",
    "kind": "song_action",
    "min": 5,
    "ch": "CBeebies"
   },
   {
    "t": "Ten Little Dinosaurs",
    "u": "https://www.youtube.com/watch?v=sLO7ZOCGZqI",
    "kind": "song_action",
    "min": 2.5,
    "ch": "Little Fox - Kids Stories and Songs"
   }
  ],
  "zh": [
   {
    "t": "恐龙 – 宝贝中文小课堂 (bài học khủng long; xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=2Z5qLwaRpLQ",
    "kind": "lesson",
    "min": 5,
    "ch": "宝贝中文 Baobei Chinese"
   },
   {
    "t": "比一比大小长短 Big, small, long, short (video dài, chỉ xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=M7Fhu6qGjuQ",
    "kind": "lesson",
    "min": 5,
    "ch": "悦儿姐姐 Tiny Mandarin Stars"
   },
   {
    "t": "恐龙歌 Dinosaur Song (bản ngắn)",
    "u": "https://www.youtube.com/shorts/J7fRp-GFUs4",
    "kind": "song_action",
    "min": 1,
    "ch": "小不點中文 A Little Chinese"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: nhà khảo cổ nhí",
   "toi_vi": [
    {
     "t": "Câu đố con gà mái",
     "type": "cau_do",
     "lyr": "Con gì quang quác\nCục tác cục te\nĐẻ trứng tròn xoe\nGọi người đến lấy."
    },
    {
     "t": "Câu đố bàn chân",
     "type": "cau_do",
     "lyr": "Lưng trước bụng sau\nCon mắt ở dưới cái đầu ở trên"
    }
   ],
   "book_vi": {
    "t": "Hành trình khám phá (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  },
  {
   "title": "Tuần Thử thách: săn trứng và dấu chân",
   "toi_vi": [
    {
     "t": "Một cây làm chẳng nên non",
     "type": "ca_dao",
     "lyr": "Một cây làm chẳng nên non\nBa cây chụm lại nên hòn núi cao"
    },
    {
     "t": "Câu đố con vịt (mỏ bẹt)",
     "type": "cau_do",
     "lyr": "Con gì chân ngắn\nMà lại có màng\nMỏ bẹt màu vàng\nHay kêu cạp cạp?"
    }
   ],
   "book_vi": {
    "t": "Từ những hạt mầm",
    "author": "nhóm tác giả Việt (chưa rõ tên)",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được egg, footprint, dig, hatch khi làm hoạt động thật"
  ],
  [
   "en",
   "Nói được câu “I can see a footprint.” hoặc “Let's dig!”"
  ],
  [
   "zh",
   "Nói được 蛋, 脚印, 骨头, 挖"
  ],
  [
   "zh",
   "So sánh được hai dấu chân bằng câu 这个大 / 这个小"
  ],
  [
   "td",
   "Đoán trước rồi kiểm tra kết quả thí nghiệm (trứng nổi, băng tan)"
  ],
  [
   "td",
   "Ghép được dấu chân với đúng người hoặc đồ chơi"
  ],
  [
   "vi",
   "Kể lại truyện Cây tre trăm đốt có câu “khắc nhập, khắc xuất”"
  ],
  [
   "vd",
   "Dùng cọ quét nhẹ, đào cẩn thận không làm hỏng “hoá thạch”"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này bé là nhà khảo cổ nhí: tìm trứng, dấu chân và xương khủng long.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem “Diplodocus Facts”. Dừng ở cảnh cổ dài, hỏi “Is the neck long? Yes or no?”; dừng ở cảnh trứng, hỏi “What is this?” – “Egg!”; dừng ở dấu chân, hỏi “Where is the footprint?” Bé chỉ vào màn hình.",
    "b": "Look! A long neck and a long tail!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem đoạn đầu 5 phút 恐龙. Dừng ở cảnh có trứng, mẹ nói 蛋 (dàn), bé chụm hai tay thành quả trứng. Dừng ở con to, mẹ hỏi “大还是小？”, bé trả lời.",
    "b": "这是恐龙蛋！(zhè shì kǒnglóng dàn)"
   },
   "words": {
    "en": [
     0,
     1,
     7,
     8
    ],
    "zh": [
     0,
     1,
     5
    ]
   },
   "doi": "Trứng nổi hay chìm (10 phút): mẹ đổ nước vào một cốc thủy tinh dày hoặc bát to, thả nhẹ một quả trứng sống vào: trứng chìm. Bé đoán: thêm muối thì sao? Bé cho 3–4 thìa muối, mẹ khuấy, thả lại: trứng nổi lên. Bé nói “Egg! Up!” Mẹ luôn ngồi cạnh, xong rửa tay.",
   "ob": "Ông bà làm cùng cháu thí nghiệm thả trứng vào nước muối xem trứng nổi lên.",
   "toi": "Mẹ kể truyện “Cây tre trăm đốt” bằng lời của mẹ: anh nông dân chăm chỉ làm thuê cho phú ông, được hứa gả con gái. Đến hạn, phú ông lật lọng, bắt anh tìm cây tre trăm đốt. Ông Bụt dạy anh câu thần chú “Khắc nhập, khắc nhập” để ráp các đốt tre thành cây, “Khắc xuất” để tách ra. Phú ông tò mò chạm vào thì bị dính chặt, đành giữ lời hứa. Mẹ nói thêm: “Các nhà khoa học cũng ráp từng khúc xương khủng long lại như ráp đốt tre đấy!”"
  },
  {
   "chuyen": "Hôm nay khám phá dấu chân: chân to để lại dấu to, chân nhỏ để lại dấu nhỏ.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và nghe. Xem đoạn đầu 5 phút (2 bài rap) của Dinosaur Raps. Mẹ dừng mỗi khi có khủng long mới, hỏi “Big or small?” Bé trả lời. Cuối đoạn hỏi “What can it do?” Bé làm động tác: stomp, roar.",
    "b": "Stomp, stomp! Big footprints!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và so sánh. Xem đoạn đầu 5 phút 比一比大小长短. Mỗi lần cô giáo so sánh hai thứ, mẹ dừng, bé chỉ cái 大 và cái 小 rồi nói từ.",
    "b": "这个大，那个小。(zhège dà, nàge xiǎo)"
   },
   "words": {
    "en": [
     1,
     7
    ],
    "zh": [
     5,
     6,
     2
    ]
   },
   "doi": "Dấu chân trên giấy (15 phút): trải mấy tờ giấy báo trên sàn nhà tắm. Mẹ cho bé nhúng bàn chân vào khay nước có pha một ít màu nước, rồi bước lên giấy. Cả nhà cùng in dấu chân. Bé so sánh: dấu chân ai to nhất, ai nhỏ nhất. Bé nói “Big footprint!” – “这个脚印很大！”. Mẹ đứng cạnh để bé không trượt, xong rửa chân ngay.",
   "ob": "Ông bà cùng cháu in dấu chân trên giấy báo và so xem dấu chân ai to.",
   "toi": "Câu đố dân gian “Câu đố con gà mái”. Mẹ đọc, bé đoán. Mẹ kể: gà mái đẻ trứng, khủng long ngày xưa cũng đẻ trứng. Hỏi bé: “Trứng gà to hay trứng khủng long to? Trứng gà nở ra con gì?”",
   "lyr": "Câu đố con gà mái"
  },
  {
   "chuyen": "Khám phá trứng băng: chú khủng long bị đóng băng trong trứng.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật lại “Diplodocus Facts”. Bé vươn cổ thật dài như khủng long cổ dài, vẫy tay sau lưng làm đuôi. Mẹ dừng ở mỗi thông tin mới, hỏi “What is it doing?” Bé làm động tác: eat plants, walk, lay eggs (ngồi xổm giả vờ đẻ trứng cho vui).",
    "b": "I have a long neck!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại 5 phút đầu bài 恐龙. Mẹ đặt 2 đồ chơi khủng long to – nhỏ cạnh màn hình. Mỗi khi video nói 大 hay 小, bé giơ đúng con đó lên.",
    "b": "大恐龙在这儿。(dà kǒnglóng zài zhèr)"
   },
   "words": {
    "en": [
     7,
     8,
     0
    ],
    "zh": [
     0,
     5,
     6
    ]
   },
   "doi": "Cứu khủng long khỏi trứng băng (15 phút): tối hôm trước mẹ cho một con khủng long đồ chơi (to hơn nắm tay bé) vào cốc nhựa đầy nước, để ngăn đá qua đêm. Hôm nay lấy ra, bé đoán cách nào làm băng tan nhanh: để ngoài nắng, rắc muối, hay dội nước ấm (mẹ pha nước ấm vừa tay). Thử từng cách, xem cách nào nhanh nhất. Khi chú khủng long thoát ra, bé hô “Hatch!”.",
   "ob": "Ông bà cho cháu thử làm tan trứng băng có khủng long đồ chơi bên trong, ông bà pha nước ấm.",
   "toi": "Mẹ đọc một cuốn trong bộ “Hành trình khám phá” (NXB Trẻ). Chọn trang có đất, đá, động vật hoặc bầu trời. Mẹ hỏi: “Nếu được đi khám phá, con muốn tìm gì đầu tiên?”"
  },
  {
   "chuyen": "Hôm nay là ngày làm hoá thạch bằng đất nặn.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Xem lại đoạn đầu 5 phút của Dinosaur Raps. Bé dậm chân, gầm theo nhịp rap. Freeze: mẹ dừng nhạc, bé đứng im như hoá thạch. Mẹ hỏi “Are you a fossil? Yes or no?” Bé nói “Yes!” và đứng im thêm 3 giây.",
    "b": "Freeze like a fossil!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – thí nghiệm so sánh. Xem lại 5 phút đầu 比一比大小长短. Sau đó mẹ đưa 2 sợi dây len (một dài, một ngắn, cả hai không quá 30 cm). Bé so sánh và nói 长 (cháng) cho sợi dài.",
    "b": "这个长。(zhège cháng)"
   },
   "words": {
    "en": [
     2,
     1,
     7
    ],
    "zh": [
     5,
     6,
     3
    ]
   },
   "doi": "Làm hoá thạch (15 phút): mẹ và bé nặn đất nặn thành 3 miếng tròn dẹt to bằng lòng bàn tay. Bé ấn chân khủng long đồ chơi, một chiếc lá, và bàn tay mình vào từng miếng. Để khô. Mẹ hỏi: “Which one is the footprint?” Bé chỉ và nói. Mẹ kể: hoá thạch là dấu vết khủng long để lại trong đá từ rất lâu.",
   "ob": "Ông bà nặn đất cùng cháu, ấn chân khủng long đồ chơi làm dấu hoá thạch.",
   "toi": "Bé kể lại truyện “Cây tre trăm đốt”. Mẹ đưa 10 cái ống hút hoặc lõi giấy làm đốt tre. Khi bé hô “Khắc nhập!”, bé nối các đốt thành cây; hô “Khắc xuất!”, bé tách ra. Mẹ hỏi: “Anh nông dân có buồn khi phú ông lật lọng không? Ai giúp anh?”"
  },
  {
   "chuyen": "Bé là nhà khoa học nói trước, video nói sau.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Xem lại “Diplodocus Facts”, mẹ dừng ngay trước các từ quen: “neck”, “tail”, “egg”, bé nói trước. Thêm câu hỏi What: “What does it eat?” Bé trả lời “Plants!”. Cuối cùng bé nói câu dài: “This is a dinosaur egg.” khi chỉ vào cảnh trứng.",
    "b": "What does it eat? Plants!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Xem lại 5 phút đầu bài 恐龙, mẹ dừng trước cảnh trứng và cảnh con to, bé nói trước 蛋 hoặc 大. Mẹ dạy câu “这是恐龙蛋。”, bé nói khi chỉ quả trứng thật.",
    "b": "这是恐龙蛋。(zhè shì kǒnglóng dàn)"
   },
   "words": {
    "en": [
     0,
     7,
     8
    ],
    "zh": [
     0,
     1,
     5
    ]
   },
   "doi": "Chuẩn bị “Sách nhỏ nhà khảo cổ” (10 phút): mẹ gấp 2 tờ A4 làm sách 8 trang. Bé chụp ảnh (mẹ giúp) hoặc vẽ lại các việc trong tuần: trứng nổi, dấu chân, trứng băng, hoá thạch đất nặn. Chọn sẵn 4 tranh để mai dán.",
   "ob": "Ông bà gấp giấy làm sách nhỏ với cháu, cháu chọn tranh sẽ dán.",
   "toi": "Câu đố dân gian “Câu đố bàn chân”. Mẹ đọc, bé đoán (bàn chân). Mẹ và bé nhìn bàn chân mình: “lưng” ở đâu, “bụng” ở đâu. Hỏi: “Chân con để lại dấu chân to hay nhỏ? Chân khủng long thì sao?”",
   "lyr": "Câu đố bàn chân"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và làm sách nhỏ của nhà khảo cổ.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé nói đúng 3 từ egg, footprint, fossil khi mẹ chỉ đồ thật. Sao 2: bé kể kết quả một thí nghiệm (trứng nổi hoặc trứng băng). Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần xem lại.",
    "b": "You are a dinosaur scientist!"
   },
   "zh": {
    "v": 1,
    "t": "Xem lại 5 phút đầu 比一比大小长短. Một sao nếu bé tự so sánh được 大 – 小 với hai dấu chân in trên giấy.",
    "b": "这个脚印很小。(zhège jiǎoyìn hěn xiǎo)"
   },
   "special": "Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần",
   "doi": "Sách nhỏ “Nhà khảo cổ nhí” (15 phút): bé dán hoặc vẽ vào 4 trang: quả trứng (egg – 蛋), dấu chân (footprint – 脚印), xương (fossil – 骨头), cái xẻng (dig – 挖). Mẹ viết từ tiếng Anh và tiếng Trung dưới mỗi tranh. Trang bìa bé vẽ chân dung mình đội mũ khảo cổ. Bé “đọc” sách cho bố nghe, mỗi trang nói một câu ngắn.",
   "ob": "Ông bà nghe cháu đọc sách nhỏ về trứng, dấu chân, xương khủng long.",
   "toi": "Buổi tối nhẹ nhàng: đọc lại cuốn sách nhỏ bé vừa làm. Mẹ hỏi: “Thí nghiệm nào con thích nhất? Vì sao?” Đặt sách ở góc học tập của bé."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và tìm dấu chân ngoài công viên.",
   "en": {
    "v": 1,
    "t": "Ôn tập: bé chọn video thích nhất (Diplodocus hoặc Dinosaur Raps 5 phút đầu) để xem lại cùng bố. Bé chỉ cho bố cổ dài, đuôi dài, dấu chân. Chơi lại một trò web bé thích.",
    "b": "Daddy, look! A footprint!"
   },
   "zh": {
    "v": 0,
    "t": "Ôn tập: xem lại 5 phút đầu 恐龙, bé giải thích cho bố bằng tiếng Việt, chèn từ tiếng Trung 蛋, 大, 小.",
    "b": "爸爸，你看！(bàba, nǐ kàn)"
   },
   "doi": "Săn dấu chân ngoài trời (20 phút): cả nhà ra công viên hoặc bãi cát, tìm dấu chân trên cát, đất ẩm: dấu giày người, dấu chân chó, chân chim. Bé đoán “Whose footprint?” (dấu chân của ai?). Bé tự in dấu giày mình cạnh dấu giày bố để so sánh. Nắm tay bé khi gần đường hoặc nước.",
   "ob": "Ông bà dắt cháu ra bãi đất, cát tìm dấu chân người và con vật.",
   "toi": "Ôn tuần: mẹ và bé đọc lại hai câu đố (gà mái, bàn chân), bé đố bố. Mẹ hỏi: “Tuần sau mình chơi thử thách săn trứng. Con muốn giấu trứng ở đâu?”"
  },
  {
   "chuyen": "Tuần Thử thách: cuộc săn trứng khủng long bắt đầu.",
   "en": {
    "v": 2,
    "t": "Lần 1 – thử thách đếm. Xem “Ten Little Dinosaurs”. Mẹ giấu 10 “trứng” (giấy vo tròn to bằng nắm tay hoặc trứng nhựa) quanh phòng trước khi xem. Hết bài, bé đi tìm và đếm bằng tiếng Anh. Mẹ hỏi “How many eggs?” Tìm đủ 10 được một sao.",
    "b": "How many eggs? Ten eggs!"
   },
   "zh": {
    "v": 2,
    "t": "Thử thách “ai nhanh hơn”: bật 恐龙歌, mẹ và bé ngồi cạnh nhau. Nghe 恐龙, ai đứng dậy gầm trước được một sao. Mẹ cố tình chậm một chút.",
    "b": "谁先站起来？(shéi xiān zhàn qǐlái)"
   },
   "words": {
    "en": [
     7,
     0
    ],
    "zh": [
     0,
     5
    ]
   },
   "doi": "Tổ trứng khủng long (15 phút): bé làm “tổ” bằng một chiếc chậu và giấy báo xé. Mẹ đọc số tiếng Anh “Four eggs!”, bé đặt đúng 4 trứng giấy vào tổ trong 10 giây. Mẹ hỏi tiếng Trung “几个蛋？” (jǐ gè dàn – mấy quả trứng?), bé đếm. Đúng mỗi lượt được một sao.",
   "ob": "Ông bà đọc số, cháu đặt đúng số trứng giấy vào tổ.",
   "toi": "Mẹ kể truyện “Rùa và Thỏ” bằng lời của mẹ: Thỏ chạy nhanh nên chê Rùa chậm chạp, hai bạn thi chạy. Thỏ chạy một đoạn rồi nằm ngủ dưới gốc cây. Rùa cứ bò đều, không nghỉ, để lại dấu chân nhỏ đều đều trên đường, và về đích trước khi Thỏ tỉnh dậy. Hỏi bé: “Nếu nhìn dấu chân trên đường, con biết bạn nào đi qua không?”"
  },
  {
   "chuyen": "Thử thách đào hoá thạch: ai đào cẩn thận nhất?",
   "en": {
    "v": 0,
    "t": "Lần 1 tuần này – đố vui. Xem lại “Diplodocus Facts”. Mẹ dừng 3 lần, mỗi lần đố một câu: “Is the tail long or short?”, “What does it eat?”, “Where are the eggs?” Bé trả lời đúng mỗi câu được một sao.",
    "b": "Quiz time! Long or short?"
   },
   "zh": {
    "v": 1,
    "t": "Thử thách so sánh: xem lại 5 phút đầu 比一比大小长短. Sau đó mẹ đưa 3 cặp đồ, bé nói nhanh cái nào 大, cái nào 小, cái nào 长. Trả lời trong 3 giây được một sao.",
    "b": "哪个大？快说！(nǎge dà? kuài shuō)"
   },
   "words": {
    "en": [
     8,
     0,
     7
    ],
    "zh": [
     5,
     6,
     3
    ]
   },
   "doi": "Đào hoá thạch trong khay cát (15 phút): mẹ chôn 3 “hoá thạch” (miếng đất nặn hôm trước, đã khô) và 2 khủng long đồ chơi to vào một khay cát hoặc khay giấy vụn. Bé dùng thìa to đào và cọ sơn quét nhẹ. Mỗi lần thấy một món, bé hô “Fossil!” hoặc “骨头！”. Đào không làm vỡ được hai sao.",
   "ob": "Ông bà chôn khủng long đồ chơi trong khay cát, cháu dùng thìa và cọ đào ra.",
   "toi": "Ca dao “Một cây làm chẳng nên non”. Mẹ đọc, rồi làm thử: bé dựng một cây bút đứng một mình, đổ. Ba cây bút chụm vào nhau thì đứng được. Mẹ giải thích: các nhà khoa học cũng làm việc cùng nhau mới tìm được hoá thạch to.",
   "lyr": "Một cây làm chẳng nên non"
  },
  {
   "chuyen": "Thử thách đếm ngược: khủng long biến mất từng con.",
   "en": {
    "v": 2,
    "t": "Lần 2 – thử thách bé nói trước. Bật “Ten Little Dinosaurs”, mẹ dừng trước mỗi số, bé nói trước số đó. Thử thách mới: hết bài, bé đếm ngược từ ten về one trong khi mẹ cất từng khủng long đồ chơi. Không vấp được hai sao.",
    "b": "Ten, nine, eight… one!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – bé hát trước. Bật 恐龙歌, mẹ tắt tiếng đoạn đầu, bé hát hoặc nói 恐龙 đúng nhịp. Thêm thử thách: mẹ nói “dinosaur” bằng tiếng Anh, bé nói tiếng Trung “恐龙”.",
    "b": "Dinosaur，中文叫“恐龙”。(zhōngwén jiào kǒnglóng)"
   },
   "words": {
    "en": [
     7,
     0
    ],
    "zh": [
     0
    ]
   },
   "doi": "Dấu chân của ai? (10 phút): mẹ đặt 4 dấu chân in hôm thứ Ba (của bố, mẹ, bé, và một dấu chân khủng long đồ chơi in bằng màu) lên sàn. Bé ghép mỗi dấu chân với đúng chủ nhân. Mỗi lần ghép bé nói: “This is Daddy's footprint.” hoặc “这是妈妈的脚印。” (zhè shì māma de jiǎoyìn). Ghép đúng hết được ba sao.",
   "ob": "Ông bà đặt các dấu chân giấy, cháu ghép với đúng người trong nhà.",
   "toi": "Mẹ đọc sách “Từ những hạt mầm” (NXB Kim Đồng). Đọc xong, mẹ so sánh: hạt mầm nằm trong đất rồi nảy mầm, trứng nằm trong tổ rồi nở ra. Hỏi bé: “Cái gì nở ra từ trứng? Cái gì mọc lên từ hạt?”"
  },
  {
   "chuyen": "Thử thách bản đồ kho báu: hoá thạch bí ẩn trốn ở đâu?",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé hát một mình. Mẹ tắt tiếng hoàn toàn “Ten Little Dinosaurs”, chỉ để hình. Bé tự hát đếm theo hình từ one đến ten. Sau đó chơi “ai nhanh hơn”: mẹ nói một số tiếng Anh, ai chạm vào đúng số khủng long đồ chơi trước được một sao.",
    "b": "Seven! Who is faster?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé làm cô giáo. Bật 恐龙歌, bé dạy gấu bông: mỗi lần nghe 恐龙, bé giơ chân gấu lên dậm. Hết bài, bé hỏi gấu “你喜欢恐龙吗？” (nǐ xǐhuan kǒnglóng ma – bạn thích khủng long không?) rồi tự trả lời thay gấu “喜欢！”.",
    "b": "你喜欢恐龙吗？(nǐ xǐhuan kǒnglóng ma)"
   },
   "words": {
    "en": [
     7,
     0
    ],
    "zh": [
     0,
     5,
     6
    ]
   },
   "doi": "Bản đồ kho báu (15 phút): mẹ vẽ sơ đồ phòng khách lên giấy, đánh dấu X ở chỗ giấu “hộp hoá thạch” (hộp giày có khủng long đồ chơi và miếng đất nặn in dấu chân). Bé cầm bản đồ đi tìm. Mẹ chỉ đường bằng tiếng Anh: “Go!”, “Stop!”, “Turn around!”. Tìm thấy hộp, bé mở ra và gọi tên từng thứ: “Fossil! Footprint! Dinosaur!”.",
   "ob": "Ông bà giấu hộp đồ chơi khủng long, cháu cầm sơ đồ đi tìm.",
   "toi": "Kể chuyện nối tiếp: mẹ bắt đầu “Một buổi sáng, nhà mình tìm thấy một quả trứng to ở góc vườn…”, bé nói câu tiếp theo, mẹ nói tiếp, cứ thế 6–8 câu. Câu chuyện có thể kết là quả trứng nở ra một chú khủng long con thích ăn rau. Cuối cùng bé đặt tên cho chú khủng long."
  },
  {
   "chuyen": "Đố vui lần 3: bé là người đặt câu đố về khủng long cổ dài.",
   "en": {
    "v": 0,
    "t": "Lần 2 tuần này – bé nói trước và đố lại mẹ. Xem lại “Diplodocus Facts”, mẹ dừng trước các từ, bé nói trước. Sau đó đổi vai: bé dừng video và đố mẹ một câu (“Mummy, what is this?”). Mẹ trả lời đúng hoặc giả vờ sai để bé sửa.",
    "b": "Mummy, what is this?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 – bé tự so sánh. Xem lại 5 phút đầu 比一比大小长短, rồi bé làm “cô giáo”: cầm hai đồ vật, hỏi mẹ “哪个大？”. Mẹ trả lời, bé chấm đúng sai.",
    "b": "老师问：哪个长？(lǎoshī wèn: nǎge cháng)"
   },
   "words": {
    "en": [
     7,
     8,
     0,
     1
    ],
    "zh": [
     5,
     6,
     3
    ]
   },
   "doi": "Tập 3 câu cho cuộc gọi ông bà ngày mai (10 phút): bé chọn 3 câu: “This is a dinosaur egg.”, “I can see a footprint.”, “这是恐龙蛋。”. Tập nói trước gương, mỗi câu cầm một đồ vật minh họa (trứng giấy, tờ dấu chân, cuốn sách nhỏ).",
   "ob": "Ông bà nghe cháu tập ba câu và cầm đồ vật minh họa.",
   "toi": "Bé kể lại truyện “Rùa và Thỏ” bằng dấu chân: mẹ cắt dấu chân rùa nhỏ và dấu chân thỏ dài, xếp trên sàn thành hai đường. Bé đi theo đường của từng bạn và kể. Mẹ hỏi: “Vì sao Rùa thắng?”"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và gọi video kể cho ông bà nghe.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: 3 sao. Sao 1: bé đếm ngược từ 10 về 1 bằng tiếng Anh. Sao 2: bé nói một câu dài về hoá thạch hoặc dấu chân. Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất trong hai tuần để xem lại.",
    "b": "Super scientist! Three stars!"
   },
   "zh": {
    "v": 2,
    "t": "Xem lại 恐龙歌, cả nhà gầm theo. Một sao nếu bé tự nói 脚印 hoặc 骨头 khi gọi ông bà.",
    "b": "爷爷奶奶好！(yéye nǎinai hǎo)"
   },
   "special": "Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung",
   "doi": "Gọi video ông bà (10–15 phút): bé cầm cuốn sách nhỏ “Nhà khảo cổ nhí” và trứng giấy lên trước camera. Bé kể bằng tiếng Việt một thí nghiệm (trứng nổi trong nước muối hoặc trứng băng). Sau đó nói 3 câu đã tập. Mẹ nhờ ông bà hỏi bé một câu: “Khủng long đẻ trứng ở đâu?” để bé trả lời. Cuối cuộc gọi bé đố ông bà câu đố con gà mái.",
   "ob": "Ông bà gọi video nghe cháu kể thí nghiệm và trả lời câu đố của cháu.",
   "toi": "Buổi tối nhẹ nhàng: mẹ kể lại ông bà đã khen bé thế nào. Hỏi bé: “Lần sau con muốn kể cho ông bà chuyện gì?”"
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: bé tự chọn một video trong vòng để xem lại (Dinosaur Raps chỉ 5 phút đầu). Mẹ để bé vận động tự do. Cuối cùng hỏi: “What did you find this week?”",
    "b": "What did you find this week?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại 5 phút đầu 恐龙 một lần, bé chỉ trứng và nói 蛋.",
    "b": "恐龙蛋，再见！(kǒnglóng dàn, zàijiàn)"
   },
   "doi": "Chơi lại một trò web bé thích. Sau đó bé rửa sạch khủng long đồ chơi đã đào trong cát, phơi khô và cất vào hộp.",
   "ob": "Ông bà cùng cháu rửa đồ chơi khủng long và cất gọn.",
   "toi": "Câu đố dân gian “Câu đố con vịt (mỏ bẹt)”. Mẹ đọc, bé đoán. Mẹ kể một điều thú vị: các nhà khoa học nói chim là họ hàng của khủng long, vịt cũng đẻ trứng như khủng long. Hỏi bé điều bé thích nhất trong hai tuần khủng long. Chúc bé ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Câu đố con vịt (mỏ bẹt)",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[139] = {
 "sub": "Mặt trời, mặt trăng, ngôi sao",
 "vocab": {
  "en": [
   [
    "sun",
    "☀️",
    "mặt trời",
    false
   ],
   [
    "moon",
    "🌙",
    "mặt trăng",
    false
   ],
   [
    "star",
    "⭐",
    "ngôi sao",
    false
   ],
   [
    "sky",
    "🌌",
    "bầu trời",
    false
   ],
   [
    "night",
    "🌃",
    "ban đêm",
    false
   ],
   [
    "twinkle",
    "✨",
    "lấp lánh",
    true
   ],
   [
    "up",
    "⬆️",
    "lên trên",
    true
   ],
   [
    "down",
    "⬇️",
    "xuống dưới",
    true
   ],
   [
    "hot",
    "🔥",
    "nóng",
    false
   ]
  ],
  "zh": [
   [
    "太阳",
    "tàiyáng",
    "mặt trời",
    "☀️"
   ],
   [
    "月亮",
    "yuèliang",
    "mặt trăng",
    "🌙"
   ],
   [
    "星星",
    "xīngxing",
    "ngôi sao",
    "⭐"
   ],
   [
    "天",
    "tiān",
    "bầu trời",
    "🌌"
   ],
   [
    "晚上",
    "wǎnshang",
    "buổi tối",
    "🌃"
   ],
   [
    "上",
    "shàng",
    "trên",
    "⬆️"
   ],
   [
    "下",
    "xià",
    "dưới",
    "⬇️"
   ]
  ],
  "en_phr": [
   [
    "The sun is hot.",
    "hot",
    "☀️"
   ],
   [
    "I can see the moon.",
    "moon",
    "🌙"
   ],
   [
    "Twinkle, twinkle, little star.",
    "star",
    "⭐"
   ],
   [
    "Look up at the sky!",
    "up",
    "🌌"
   ]
  ],
  "zh_phr": [
   [
    "这是月亮。",
    "月亮",
    "zhè shì yuèliang",
    "đây là mặt trăng",
    "🌙"
   ],
   [
    "天上有星星。",
    "星星",
    "tiān shang yǒu xīngxing",
    "trên trời có ngôi sao",
    "⭐"
   ],
   [
    "我喜欢太阳。",
    "太阳",
    "wǒ xǐhuan tàiyáng",
    "con thích mặt trời",
    "☀️"
   ]
  ],
  "seq": [
   [
    "🌅",
    "sun comes up",
    "太阳出来"
   ],
   [
    "☀️",
    "sunny day",
    "白天"
   ],
   [
    "🌙",
    "moon comes out",
    "月亮出来"
   ],
   [
    "⭐",
    "stars twinkle",
    "星星亮"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Twinkle Twinkle Little Star",
    "u": "https://www.youtube.com/watch?v=yCjJyiqpAuU",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Mr. Golden Sun",
    "u": "https://www.youtube.com/watch?v=hlzvrEfyL2Y",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Tìm bài đọc sách tranh về mặt trăng hoặc ngôi sao trên kênh Brightly Storytime; chọn video dưới 8 phút, nếu dài thì xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/channel/UCvQagFNHMrGgQpYunk4rHXg",
    "kind": "channel",
    "min": 5,
    "ch": "Brightly Storytime (Penguin Random House)"
   }
  ],
  "zh": [
   {
    "t": "小星星 Twinkle Twinkle Little Star (ngôi sao nhỏ)",
    "u": "https://www.youtube.com/watch?v=-2pJNbroiv8",
    "kind": "song_action",
    "min": 2,
    "ch": "貝樂虎 BabyTiger (贝乐虎儿歌)"
   },
   {
    "t": "睡吧，月亮！Go to Sleep, Moon! (ngủ đi, mặt trăng)",
    "u": "https://www.youtube.com/watch?v=gLcWMl4Aq0A",
    "kind": "song_action",
    "min": 1.5,
    "ch": "Cool Panda Chinese Learning"
   },
   {
    "t": "太阳、地球和月亮 Sun, Earth, and Moon",
    "u": "https://www.youtube.com/watch?v=pPVVeZc9Wns",
    "kind": "song_action",
    "min": 2,
    "ch": "eChineseLearning"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: hát cho mặt trời và ngôi sao",
   "toi_vi": [
    {
     "t": "Câu đố ngôi sao",
     "type": "cau_do",
     "lyr": "Lấp la lấp lánh\nTreo tít trời cao\nĐêm tối lung linh\nSáng ngày biến mất."
    },
    {
     "t": "Ông sảo ông sao",
     "type": "dong_dao",
     "lyr": "Ông sảo ông sao\nÔng vào cửa sổ\nÔng ở với tôi\nÔng ngồi lên chiếu\nTôi biếu củ khoai\nÔng nhai nhóp nhép\nCái tôm cái tép\nÔng ghém với rau\nĂn mau chóng lớn\nÔng ngồi dậy\nÔng về trời"
    }
   ],
   "book_vi": {
    "t": "Vương miện của Mặt trời",
    "author": "Quỳnh Lê (minh họa: Hoàng Giang)",
    "publisher": "NXB Hà Nội & Crabit Kidbooks"
   }
  },
  {
   "title": "Tuần Kể chuyện: chuyện trên bầu trời",
   "toi_vi": [
    {
     "t": "Câu đố mặt trăng (bóng trăng)",
     "type": "cau_do",
     "lyr": "Bằng cái vung, vùng xuống ao\nĐào chẳng thấy, lấy chẳng được"
    },
    {
     "t": "Câu đố mặt trời, sấm, mưa",
     "type": "cau_do",
     "lyr": "Không sơn mà đỏ\nKhông gõ mà kêu\nKhông khều mà rụng"
    },
    {
     "t": "Trăng bao nhiêu tuổi trăng già",
     "type": "ca_dao",
     "lyr": "Trăng bao nhiêu tuổi trăng già\nNúi bao nhiêu tuổi gọi là núi non\nTrăng bao nhiêu tuổi trăng tròn\nNúi bao nhiêu tuổi núi còn trơ trơ"
    }
   ],
   "book_vi": {
    "t": "Một miếng trăng ngon",
    "author": "May (minh họa: Thảo Võ)",
    "publisher": "NXB Hà Nội & Crabit Kidbooks"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được sun, moon, star, sky khi chỉ tranh hoặc nhìn trời"
  ],
  [
   "en",
   "Hát được câu “Twinkle, twinkle, little star” và làm động tác"
  ],
  [
   "zh",
   "Nói được 太阳, 月亮, 星星"
  ],
  [
   "zh",
   "Nói được câu 天上有星星。 hoặc 这是月亮。"
  ],
  [
   "td",
   "Phân biệt được ban ngày có mặt trời, ban đêm có trăng và sao"
  ],
  [
   "vi",
   "Kể lại được truyện chú Cuội bằng 4–5 câu"
  ],
  [
   "xh",
   "Kiên nhẫn chờ đến lượt khi kể chuyện nối tiếp"
  ],
  [
   "vd",
   "Làm động tác lên – xuống, lấp lánh, mặt trời to theo bài hát"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này mình ngước nhìn bầu trời. Hôm nay hát cho ngôi sao nhỏ.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem “Twinkle Twinkle Little Star”. Mỗi lần nghe “star”, bé chỉ vào ngôi sao trên màn hình. Mẹ dừng ở câu “up above the world so high”, hỏi “Where is the star? Up or down?” Bé chỉ lên và nói “Up!”.",
    "b": "Where is the star? Up high!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và làm. Xem 小星星. Mỗi lần nghe 星星 (xīngxing), bé xòe – nắm tay như ngôi sao lấp lánh. Mẹ dừng giữa bài, chỉ lên trần nhà, nói 天上 (tiān shang – trên trời).",
    "b": "小星星，亮晶晶。(xiǎo xīngxing, liàng jīngjīng)"
   },
   "words": {
    "en": [
     2,
     3,
     5,
     6
    ],
    "zh": [
     2,
     3,
     5
    ]
   },
   "doi": "Bầu trời trên trần nhà (10 phút): mẹ cắt 5 ngôi sao bằng giấy màu vàng, bé dán lên một tờ giấy đen hoặc xanh đậm (giấy bìa cũ tô màu). Một mặt trăng lưỡi liềm, một mặt trời tròn ở góc kia. Bé chỉ và nói tên: “Star, moon, sun”. Dán tờ “bầu trời” cạnh giường.",
   "ob": "Ông bà cùng cháu cắt dán ngôi sao, mặt trăng lên tờ giấy làm bầu trời.",
   "toi": "Mẹ kể truyện “Sự tích chú Cuội cung trăng” bằng lời của mẹ, bắt đầu từ lúc Cuội tìm thấy cây đa lạ có lá chữa lành vết thương. Cuội mang cây về trồng, dặn vợ chỉ tưới nước sạch. Một hôm vợ quên lời dặn, cây đa bỗng bật gốc bay lên trời. Cuội níu lấy rễ cây và bay theo lên tận cung trăng. Đêm rằm nhìn lên trăng, người ta bảo thấy chú Cuội ngồi gốc cây đa. Hỏi bé: “Tối nay mình ra ban công tìm chú Cuội nhé?”"
  },
  {
   "chuyen": "Gọi ông mặt trời buổi sáng bằng một bài hát.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm. Xem “Mr. Golden Sun”. Bé giơ hai tay làm mặt trời tròn thật to. Mẹ dừng ở câu “please shine down on me”, hỏi “Is the sun hot? Yes or no?” Bé quạt tay nói “Yes, hot!”. Nhắc bé: không bao giờ nhìn thẳng vào mặt trời thật.",
    "b": "Mr. Golden Sun, please shine down on me!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Xem 睡吧，月亮！. Dừng ở cảnh mặt trăng, mẹ hỏi “月亮在哪儿？”, bé chỉ. Dừng ở cảnh ngôi sao, bé nói 星星. Cuối bài cả hai giả vờ ngủ.",
    "b": "月亮在天上。(yuèliang zài tiān shang)"
   },
   "words": {
    "en": [
     0,
     8,
     6
    ],
    "zh": [
     1,
     2,
     3
    ]
   },
   "doi": "Đồng hồ mặt trời (15 phút): buổi sáng, mẹ và bé cắm một cây bút hoặc que đũa vào cục đất nặn đặt giữa tờ giấy ngoài chỗ có nắng. Đánh dấu chỗ bóng que lúc 8 giờ. Buổi trưa và chiều ra xem lại: bóng đã dịch chuyển. Mẹ giải thích: vì mặt trời đi trên bầu trời. Bé nói “Sun! Shadow!” Nhắc bé đội mũ khi ra nắng và không nhìn thẳng mặt trời.",
   "ob": "Ông bà cùng cháu cắm que dưới nắng, đánh dấu bóng buổi sáng và buổi chiều.",
   "toi": "Câu đố dân gian “Câu đố ngôi sao”. Mẹ đọc, bé đoán. Tối nay mẹ dắt bé ra cửa sổ hoặc ban công tìm ngôi sao thật. Bé đếm được mấy ngôi sao? Nếu trời mây không thấy sao, bé đếm sao giấy trên tờ “bầu trời”.",
   "lyr": "Câu đố ngôi sao"
  },
  {
   "chuyen": "Nhạc dừng thì ngôi sao đứng im. Hôm nay chơi freeze dance lấp lánh.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Tắt bớt đèn, bật “Twinkle Twinkle”. Bé xòe tay lấp lánh, nghe “up” thì giơ tay lên, nghe “diamond in the sky” thì vẽ hình thoi trên không. Freeze dance: mẹ dừng nhạc, bé đứng im như ngôi sao. Mẹ hỏi “Are you a star?” Bé đáp “Yes, I am a star!”.",
    "b": "Freeze, little star!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật 小星星, mẹ và bé nằm ngửa trên thảm, giơ tay lấp lánh lên trần. Mẹ dừng nhạc hỏi “星星在上面还是下面？” (xīngxing zài shàngmiàn háishì xiàmiàn – sao ở trên hay ở dưới?), bé chỉ lên nói 上 (shàng).",
    "b": "星星在上面。(xīngxing zài shàngmiàn)"
   },
   "words": {
    "en": [
     2,
     5,
     6,
     3
    ],
    "zh": [
     2,
     5,
     6
    ]
   },
   "doi": "Ngôi sao bằng đèn pin (10 phút): mẹ lấy một tờ giấy bìa, dùng bút chì chọc 5–6 lỗ nhỏ thành hình ngôi sao (mẹ làm). Tắt đèn, mẹ áp tờ giấy lên đèn pin và chiếu lên trần: trần nhà có sao! Bé đếm sao bằng tiếng Anh. Mẹ di chuyển đèn: “Up!”, “Down!”, bé chỉ theo.",
   "ob": "Ông bà tắt đèn, chiếu đèn pin qua tờ giấy có lỗ thành ngôi sao lên trần cho cháu đếm.",
   "toi": "Mẹ đọc sách “Vương miện của Mặt trời” (Quỳnh Lê, NXB Hà Nội & Crabit Kidbooks). Đọc xong hỏi: “Mặt trời trong truyện thế nào? Nếu con là mặt trời, con muốn chiếu sáng cho ai?”"
  },
  {
   "chuyen": "Hôm nay mặt trời và mặt trăng thay phiên nhau trên bầu trời.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật “Mr. Golden Sun”, bé đứng trên ghế thấp (mẹ giữ) làm mặt trời mọc, giơ tay thật cao. Hết bài, bé ngồi xuống làm mặt trời lặn. Mẹ nói “Sun goes up!” bé đứng dậy, “Sun goes down!” bé ngồi xuống. Đổi nhanh dần.",
    "b": "The sun goes up. The sun goes down."
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật 睡吧，月亮！, bé cầm một chiếc đĩa giấy làm mặt trăng, đưa lên cao khi nghe 月亮, ôm vào lòng khi nghe 睡吧. Mẹ dừng giữa bài hỏi “月亮睡觉了吗？” (yuèliang shuìjiào le ma), bé lắc hoặc gật đầu.",
    "b": "月亮睡觉了。(yuèliang shuìjiào le)"
   },
   "words": {
    "en": [
     0,
     6,
     7,
     1
    ],
    "zh": [
     1,
     4,
     0
    ]
   },
   "doi": "Ngày và đêm (15 phút): mẹ chia tờ giấy làm hai nửa: nửa trái tô vàng (ban ngày), nửa phải tô đen (ban đêm). Bé dán hoặc vẽ những việc mình làm vào đúng nửa: đi học, ăn trưa ở nửa ngày; tắm, ngủ ở nửa đêm. Bé nói: “Day – sun”, “Night – moon”, thêm tiếng Trung 晚上 cho nửa đêm.",
   "ob": "Ông bà cùng cháu chia việc ban ngày và ban đêm lên tờ giấy hai màu.",
   "toi": "Bé kể lại truyện chú Cuội. Mẹ đưa một cành lá (cây đa giả) và một cái đĩa tròn (mặt trăng). Bé cầm cành lá kể đoạn Cuội tìm cây, rồi “bay” cành lá lên đặt cạnh đĩa tròn. Mẹ hỏi: “Vì sao cây đa bay lên trời? Vợ Cuội quên gì?”"
  },
  {
   "chuyen": "Bé hát trước, video hát sau: ai nhớ lời hơn?",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé hát trước video. Mẹ dừng trước câu “How I wonder what you are”, bé hát trước. Thử thêm: mẹ tắt tiếng đoạn cuối, bé hát cả câu “Twinkle, twinkle, little star”. Cuối bài mẹ hỏi “What can you see in the sky?” Bé trả lời “I can see a star.”",
    "b": "I can see a star."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé hát trước. Bật 小星星, mẹ tắt tiếng câu đầu, bé tự hát “小星星” hoặc nói 星星 đúng nhịp. Thêm câu mới: “天上有星星。” (tiān shang yǒu xīngxing – trên trời có ngôi sao).",
    "b": "天上有星星。(tiān shang yǒu xīngxing)"
   },
   "words": {
    "en": [
     2,
     3,
     5
    ],
    "zh": [
     2,
     3,
     5
    ]
   },
   "doi": "Chuẩn bị “bánh mì mặt trời” cho ngày mai (10 phút): bé và mẹ lên danh sách nguyên liệu: bánh mì tròn (mặt trời), chuối (cắt khoanh làm sao), sữa chua hoặc bơ (phết). Bé vẽ danh sách và nói tên tiếng Anh hoặc tiếng Trung mỗi món, kiểm tra trong bếp còn thiếu gì.",
   "ob": "Ông bà cùng cháu kiểm tra bánh mì, chuối, sữa chua cho món ăn ngày mai.",
   "toi": "Đồng dao “Ông sảo ông sao”. Mẹ đọc chậm, đến “ông vào cửa sổ” bé chỉ ra cửa sổ; “ông nhai nhóp nhép” bé làm động tác nhai; “ông về trời” bé vẫy tay lên cao. Đọc 2 lần, lần 2 bé đọc to câu cuối.",
   "lyr": "Ông sảo ông sao"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và vào bếp làm bánh mì mặt trời.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé nói đúng sun, moon, star khi mẹ chỉ tranh. Sao 2: bé hát được câu “Twinkle, twinkle, little star”. Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần xem lại.",
    "b": "Three stars for a little star!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 小星星 một lần. Một sao nếu bé tự nói 太阳 hoặc 星星 khi làm bánh.",
    "b": "我们做太阳面包！(wǒmen zuò tàiyáng miànbāo)"
   },
   "special": "Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu",
   "doi": "Bánh mì mặt trời và sao (20 phút): bé rửa tay. Mẹ cắt bánh mì thành hình tròn, cắt chuối thành khoanh, cắt dưa hấu hoặc khế thành hình sao (dao do mẹ cầm). Bé phết sữa chua lên bánh làm “mặt trời”, xếp khoanh chuối quanh làm tia nắng, đặt miếng sao lên đĩa thành “bầu trời đêm”. Mỗi nguyên liệu bé gọi tên: “Bread – 面包”, “Banana”, “Star!”. Khi mời bố, bé nói “Here you are!”.",
   "ob": "Ông bà cắt bánh mì, chuối; cháu phết sữa chua và xếp thành hình mặt trời, ngôi sao.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé: “Hôm nay con làm mặt trời hay ngôi sao đẹp hơn?” Mẹ kể: ở quê, ngày xưa trẻ con hay nằm trên chõng tre ngoài sân đếm sao."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và ngắm trời buổi tối cùng cả nhà.",
   "en": {
    "v": 1,
    "t": "Ôn tập: bé chọn bài thích nhất (Twinkle hoặc Mr. Golden Sun) để xem lại. Bé làm cô giáo, dạy bố động tác mặt trời mọc và ngôi sao lấp lánh. Chơi lại một trò web bé thích.",
    "b": "Daddy, twinkle like a star!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn tập: xem lại 睡吧，月亮！, cả nhà cùng giả vờ ngủ cuối bài. Bé nói 晚安 với mặt trăng.",
    "b": "月亮，晚安！(yuèliang, wǎn'ān)"
   },
   "doi": "Đi dạo buổi tối ngắm trời (15 phút): sau bữa tối, cả nhà đi dạo hoặc ra ban công. Bé tìm mặt trăng: trăng tròn hay khuyết? Bé đếm sao nhìn thấy. Bé nói “I can see the moon.” và “这是月亮。”. Về nhà, bé vẽ mặt trăng tối nay vào lịch. Nắm tay bé khi đi đường tối.",
   "ob": "Ông bà dắt cháu ra sân buổi tối tìm mặt trăng và đếm sao.",
   "toi": "Ôn lại tuần: bé đọc lại “Ông sảo ông sao” cùng mẹ. Mẹ hỏi: “Tuần sau mình nghe nhiều chuyện trên bầu trời. Con muốn nghe chuyện về mặt trăng hay ngôi sao?”"
  },
  {
   "chuyen": "Tuần kể chuyện trên bầu trời: bé nghe một cuốn sách tranh về mặt trăng.",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và dừng hỏi. Mẹ chọn một video đọc sách tranh về mặt trăng hoặc ngôi sao trên kênh Brightly Storytime (dưới 8 phút; nếu dài xem 5 phút đầu). Dừng 3 lần, hỏi “Chuyện gì xảy ra tiếp?” và một câu What/Where: “Where is the moon?”, “What can you see?”.",
    "b": "What happens next?"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem và nghe chuyện. Xem 太阳、地球和月亮. Bài hát kể chuyện Trái Đất đi quanh Mặt Trời, Mặt Trăng đi quanh Trái Đất. Mẹ dừng ở mỗi nhân vật, nói từ: 太阳 (tàiyáng), 月亮 (yuèliang), bé chỉ đúng.",
    "b": "太阳很大。(tàiyáng hěn dà)"
   },
   "words": {
    "en": [
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     3
    ]
   },
   "doi": "Mặt trăng thay hình (15 phút): mẹ chiếu đèn pin vào một quả cam trong phòng tối (đèn pin là mặt trời, quả cam là mặt trăng). Bé đi vòng quanh quả cam và nhìn: có lúc thấy sáng cả quả, có lúc chỉ thấy một nửa, có lúc chỉ một viền. Mẹ nói: “Đó là vì sao trăng có lúc tròn, lúc khuyết.” Bé nói “Moon!” mỗi lần thấy sáng.",
   "ob": "Ông bà chiếu đèn pin vào quả cam trong phòng tối, cháu đi vòng quanh xem phần sáng thay đổi.",
   "toi": "Mẹ kể truyện “Ếch ngồi đáy giếng” bằng lời của mẹ: chú ếch sống lâu dưới đáy giếng, ngước lên chỉ thấy khoảng trời bé bằng miệng giếng, nên nghĩ trời chỉ to như cái vung. Một ngày mưa to, nước dâng đưa ếch lên bờ. Ếch nhảy ra đồng, ngạc nhiên vì bầu trời rộng quá, có mặt trời, mây và cả đàn chim. Ếch kết bạn mới và vui vẻ học hỏi. Hỏi bé: “Bầu trời thật to hay nhỏ?”"
  },
  {
   "chuyen": "Hôm nay bé kể chuyện của một ngôi sao nhỏ.",
   "en": {
    "v": 0,
    "t": "Bài hát thành câu chuyện. Xem lại “Twinkle Twinkle”. Rồi mẹ hỏi: “Ngôi sao nhỏ ở trên cao nhìn thấy gì?” Bé vẽ 3 tranh: ngôi sao, ngôi nhà bé, bé đang ngủ, và kể bằng tiếng Việt, chèn từ tiếng Anh: star, night, sky. Mẹ hỏi “What does the star see?”",
    "b": "The star sees me!"
   },
   "zh": {
    "v": 1,
    "t": "Kể chuyện ru ngủ: xem lại 睡吧，月亮！. Bé kể lại câu chuyện trong bài: ai đi ngủ trước, ai ngủ sau. Mẹ chèn từ 月亮, 星星, 晚上 khi bé kể.",
    "b": "晚上，月亮出来了。(wǎnshang, yuèliang chūlái le)"
   },
   "words": {
    "en": [
     2,
     4,
     3
    ],
    "zh": [
     1,
     2,
     4
    ]
   },
   "doi": "Hộp kể chuyện bầu trời (10 phút): mẹ bỏ vào hộp 4 tranh: mặt trời, mặt trăng, ngôi sao, đám mây. Bé bốc lần lượt và nối thành một câu chuyện: “Ngày xưa có ông mặt trời…”. Mỗi tranh bé nói tên tiếng Anh hoặc tiếng Trung khi bốc lên.",
   "ob": "Ông bà cho cháu bốc tranh trong hộp và kể nối thành câu chuyện về bầu trời.",
   "toi": "Câu đố dân gian “Câu đố mặt trăng (bóng trăng)”. Mẹ đọc, bé đoán. Mẹ giải thích: bóng trăng in dưới ao, mình không bắt được. Nếu có chậu nước ngoài sân buổi tối, hai mẹ con nhìn bóng trăng trong chậu.",
   "lyr": "Câu đố mặt trăng (bóng trăng)"
  },
  {
   "chuyen": "Đóng vai truyện sách tranh: bé là mặt trăng.",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại video sách tranh hôm thứ Hai. Bé cầm đĩa giấy làm mặt trăng, mẹ làm nhân vật còn lại. Dừng ở mỗi cảnh, hai mẹ con nói thay nhân vật bằng câu ngắn: “Hello, Moon!”, “Good night, Moon!”. Mẹ hỏi “What happens next?” trước khi bật tiếp.",
    "b": "Good night, Moon!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Bật 太阳、地球和月亮. Mẹ làm 太阳 đứng giữa, bé làm 地球 (dìqiú – Trái Đất) đi vòng quanh mẹ, tay cầm một quả bóng nhựa vừa tay làm 月亮 xoay quanh mình. Vừa đi vừa nói từ.",
    "b": "我是地球！(wǒ shì dìqiú)"
   },
   "words": {
    "en": [
     1,
     4,
     3
    ],
    "zh": [
     0,
     1,
     3
    ]
   },
   "doi": "Mặt trời nóng, mặt trăng mát (10 phút): mẹ đặt hai cốc nước giống nhau, một cốc ra chỗ nắng, một cốc trong bóng râm. Sau 1 giờ, bé chạm tay vào hai cốc: cốc nào ấm hơn? Bé nói “Hot! The sun is hot.” Mẹ giải thích mặt trời cho ánh sáng và hơi ấm.",
   "ob": "Ông bà đặt một cốc nước ngoài nắng, một cốc trong râm, cháu sờ xem cốc nào ấm.",
   "toi": "Mẹ đọc sách “Một miếng trăng ngon” (May, NXB Hà Nội & Crabit Kidbooks). Đọc đến giữa, hỏi: “Con đoán ai sẽ ăn miếng trăng?” Đọc xong hỏi: “Nếu mặt trăng là một chiếc bánh, con muốn bánh vị gì?”"
  },
  {
   "chuyen": "Chuyển ngữ trên bầu trời: mẹ nói tiếng Anh, bé nói tiếng Trung.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé kể trước. Tắt tiếng “Twinkle Twinkle”, bé xem hình và hát hoặc kể theo. Sau đó chuyển ngữ: mẹ nói “star”, bé nói “星星”; mẹ nói “moon”, bé nói “月亮”; mẹ nói “sun”, bé nói “太阳”. Mỗi từ đúng bé được dán một ngôi sao giấy.",
    "b": "Star! In Chinese?"
   },
   "zh": {
    "v": 1,
    "t": "Bé nói trước: xem lại 睡吧，月亮！, mẹ dừng trước mỗi chữ quen, bé nói trước 月亮, 星星, 睡觉. Rồi bé dạy lại cho gấu bông câu “月亮，晚安！”.",
    "b": "你先说：月亮！(nǐ xiān shuō: yuèliang)"
   },
   "words": {
    "en": [
     0,
     1,
     2
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Kể chuyện nối tiếp có ba thứ tiếng (10 phút): mẹ kể câu đầu bằng tiếng Việt: “Một tối, ngôi sao nhỏ rơi xuống vườn nhà mình…”. Bé kể câu tiếp, trong câu phải có một từ tiếng Anh hoặc tiếng Trung (star, moon, 月亮, 星星). Mẹ và bé thay phiên 6 câu.",
   "ob": "Ông bà và cháu thay nhau kể chuyện về ngôi sao, mỗi người một câu.",
   "toi": "Bé kể lại truyện “Ếch ngồi đáy giếng”. Mẹ lấy một cái cốc to: bé nhìn qua miệng cốc lên trần nhà, chỉ thấy một khoảng nhỏ. Bỏ cốc ra, bé nhìn cả căn phòng. Mẹ hỏi: “Khi ở trong giếng, ếch nghĩ gì? Khi ra ngoài, ếch thấy gì?”"
  },
  {
   "chuyen": "Bé là người kể chuyện chính của cuốn sách tranh.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước video. Mẹ tắt tiếng video sách tranh, bé xem hình và kể bằng tiếng Việt, chèn từ tiếng Anh: moon, star, night, sky. Bật tiếng đoạn cuối để kiểm tra. Cuối cùng bé nói câu dài: “I can see the moon in the sky.”",
    "b": "I can see the moon in the sky."
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé kể trước. Tắt tiếng 太阳、地球和月亮, bé chỉ và nói: “太阳… 地球… 月亮…”. Mẹ hỏi “太阳大还是月亮大？” (tàiyáng dà háishì yuèliang dà), bé trả lời 太阳大.",
    "b": "太阳大，月亮小。(tàiyáng dà, yuèliang xiǎo)"
   },
   "words": {
    "en": [
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     3
    ]
   },
   "doi": "Thẻ săn hình trên trời (10 phút): chuẩn bị cho ngày mai đi chợ, mẹ và bé vẽ 4 ô: một thứ tròn như mặt trời (cam, bánh), một thứ cong như trăng khuyết (chuối), một thứ hình ngôi sao (quả khế cắt ngang), một thứ màu vàng như nắng. Bé tô màu và tập nói tên.",
   "ob": "Ông bà giúp cháu vẽ thẻ tìm đồ tròn như mặt trời, cong như mặt trăng, hình ngôi sao.",
   "toi": "Câu đố dân gian “Câu đố mặt trời, sấm, mưa”. Mẹ đọc từng câu, mỗi câu bé đoán một thứ: “không sơn mà đỏ” là mặt trời, “không gõ mà kêu” là sấm, “không khều mà rụng” là mưa. Bé làm tiếng sấm “ùng ùng” và mưa rơi bằng ngón tay.",
   "lyr": "Câu đố mặt trời, sấm, mưa"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và săn hình mặt trời, mặt trăng ở chợ.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: 3 sao. Sao 1: bé kể lại câu chuyện sách tranh bằng 3 câu. Sao 2: bé nói câu dài “I can see the moon in the sky.” Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất trong tuần xem lại.",
    "b": "You are a star storyteller!"
   },
   "zh": {
    "v": 2,
    "t": "Xem lại 太阳、地球和月亮 trước khi đi chợ. Một sao nếu bé tìm được quả tròn và nói “像太阳！” (xiàng tàiyáng – giống mặt trời).",
    "b": "像太阳！(xiàng tàiyáng)"
   },
   "special": "Săn từ ở chợ hoặc siêu thị",
   "doi": "Săn hình bầu trời ở chợ (20 phút): mang thẻ săn hình. Ở chợ, bé tìm: quả cam tròn như mặt trời (“Sun!”), quả chuối cong như trăng khuyết (“Moon!”), quả khế (mẹ nói: cắt ngang sẽ thành ngôi sao, “Star!”), một thứ màu vàng. Tìm đủ thì mẹ mua một quả khế. Về nhà mẹ cắt ngang, bé đếm cánh sao: one, two, three, four, five. Nắm tay bé suốt ở chợ.",
   "ob": "Ông bà dắt cháu đi chợ tìm quả tròn, quả cong, quả khế hình sao.",
   "toi": "Buổi tối nhẹ nhàng: mẹ nhắc lại truyện Cây khế tuần trước bé đã nghe. Hỏi bé: “Quả khế cắt ra giống gì? Con thích ăn khế không?”"
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ: bé tự chọn một video trong vòng để xem lại. Mẹ để bé hát và làm động tác tự do. Cuối cùng mẹ hỏi: “Do you like the sun or the moon?”",
    "b": "Do you like the sun or the moon?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại 小星星 trước giờ ngủ, bé lấp lánh tay theo.",
    "b": "小星星，晚安！(xiǎo xīngxing, wǎn'ān)"
   },
   "doi": "Chơi lại một trò web bé thích. Sau đó bé thêm vào tờ “bầu trời” cạnh giường một ngôi sao mới cho mỗi từ bé nhớ được.",
   "ob": "Ông bà khen tờ bầu trời của cháu và đếm sao cùng cháu.",
   "toi": "Ca dao “Trăng bao nhiêu tuổi trăng già”. Mẹ đọc chậm, hỏi bé: “Con nghĩ trăng bao nhiêu tuổi?” Bé đoán con số nào cũng được, mẹ cười và nói “Trăng già lắm, già hơn cả ông bà.” Chúc bé ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Trăng bao nhiêu tuổi trăng già",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[140] = {
 "sub": "Tên lửa, phi hành gia, Trái Đất",
 "vocab": {
  "en": [
   [
    "rocket",
    "🚀",
    "tên lửa",
    false
   ],
   [
    "astronaut",
    "👩‍🚀",
    "phi hành gia",
    false
   ],
   [
    "Earth",
    "🌍",
    "Trái Đất",
    false
   ],
   [
    "planet",
    "🪐",
    "hành tinh",
    false
   ],
   [
    "moon",
    "🌙",
    "mặt trăng",
    false
   ],
   [
    "space",
    "🌌",
    "vũ trụ",
    false
   ],
   [
    "blast off",
    "💥",
    "phóng lên",
    true
   ],
   [
    "float",
    "🪶",
    "lơ lửng",
    true
   ],
   [
    "countdown",
    "🔟",
    "đếm ngược",
    false
   ],
   [
    "up",
    "⬆️",
    "lên",
    true
   ]
  ],
  "zh": [
   [
    "火箭",
    "huǒjiàn",
    "tên lửa",
    "🚀"
   ],
   [
    "地球",
    "dìqiú",
    "Trái Đất",
    "🌍"
   ],
   [
    "月亮",
    "yuèliang",
    "mặt trăng",
    "🌙"
   ],
   [
    "太阳",
    "tàiyáng",
    "mặt trời",
    "☀️"
   ],
   [
    "飞",
    "fēi",
    "bay",
    "🛫"
   ],
   [
    "宇航员",
    "yǔhángyuán",
    "phi hành gia",
    "👩‍🚀"
   ]
  ],
  "en_phr": [
   [
    "I am an astronaut.",
    "astronaut",
    "👩‍🚀"
   ],
   [
    "The rocket goes up.",
    "up",
    "🚀"
   ],
   [
    "We live on Earth.",
    "Earth",
    "🌍"
   ],
   [
    "Ten, nine, eight… blast off!",
    "blast off",
    "💥"
   ]
  ],
  "zh_phr": [
   [
    "火箭飞上天。",
    "火箭",
    "huǒjiàn fēi shàng tiān",
    "tên lửa bay lên trời",
    "🚀"
   ],
   [
    "我们住在地球。",
    "地球",
    "wǒmen zhù zài dìqiú",
    "chúng ta sống trên Trái Đất",
    "🌍"
   ],
   [
    "我想去月亮。",
    "月亮",
    "wǒ xiǎng qù yuèliang",
    "con muốn lên mặt trăng",
    "🌙"
   ]
  ],
  "seq": [
   [
    "👩‍🚀",
    "put on a helmet",
    "戴头盔"
   ],
   [
    "🔟",
    "count down",
    "倒数"
   ],
   [
    "🚀",
    "blast off",
    "起飞"
   ],
   [
    "🌙",
    "land on the moon",
    "到月亮"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Let's Make the Solar System | Arts and Crafts! (xem tối đa 8 phút, dừng để làm cùng)",
    "u": "https://www.youtube.com/watch?v=K6dqHEoj-AU",
    "kind": "explainer",
    "min": 5,
    "ch": "SciShow Kids"
   },
   {
    "t": "Planets for Kids! Planets of the Solar System (xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=STaWWfv67XM",
    "kind": "explainer",
    "min": 5,
    "ch": "Twinkl Teaching Resources - United States"
   },
   {
    "t": "We're Going On A Rocket Ship",
    "u": "https://www.youtube.com/watch?v=wE0qcTPGCVs",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Tìm bài ngắn về tên lửa hoặc phi hành gia trong danh sách “Let's Go To Space!” trên kênh SciShow Kids; chọn một video dưới 8 phút",
    "u": "https://www.youtube.com/playlist?list=PLw2cuKNQvZ2c5UQcwMS4Fg05UdiT3-gs4",
    "kind": "playlist",
    "min": 5,
    "ch": "SciShow Kids"
   }
  ],
  "zh": [
   {
    "t": "太阳、地球和月亮 Sun, Earth, and Moon",
    "u": "https://www.youtube.com/watch?v=pPVVeZc9Wns",
    "kind": "song_action",
    "min": 2,
    "ch": "eChineseLearning"
   },
   {
    "t": "小星星 Twinkle Twinkle Little Star (ngôi sao nhỏ)",
    "u": "https://www.youtube.com/watch?v=-2pJNbroiv8",
    "kind": "song_action",
    "min": 2,
    "ch": "貝樂虎 BabyTiger (贝乐虎儿歌)"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: Trái Đất và các hành tinh",
   "toi_vi": [
    {
     "t": "Thằng Cuội ngồi gốc cây đa",
     "type": "dong_dao",
     "lyr": "Thằng Cuội ngồi gốc cây đa\nĐể trâu ăn lúa gọi cha ời ời\nCha còn cắt cỏ trên trời\nMẹ còn cưỡi ngựa đi mời quan viên\nÔng thì cầm bút cầm nghiên\nÔng thì cầm tiền đi chuộc lá đa"
    },
    {
     "t": "Ruộng đồng mặc sức chim bay",
     "type": "ca_dao",
     "lyr": "Ruộng đồng mặc sức chim bay,\nBiển hồ lai láng, cá bầy đua bơi."
    }
   ],
   "book_vi": {
    "t": "Góc sân và khoảng trời (thơ)",
    "author": "Trần Đăng Khoa (minh họa: Phan Hà)",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Thử thách: phi hành gia nhí bay lên vũ trụ",
   "toi_vi": [
    {
     "t": "Đi mô cũng nhớ quê mình",
     "type": "ca_dao",
     "lyr": "Đi mô cũng nhớ quê mình,\nNhớ Hương Giang gió mát, nhớ Ngự Bình trăng thanh."
    },
    {
     "t": "Ta về ta tắm ao ta",
     "type": "ca_dao",
     "lyr": "Ta về ta tắm ao ta\nDù trong dù đục ao nhà vẫn hơn"
    }
   ],
   "book_vi": {
    "t": "Hành trình khám phá (bộ)",
    "author": "Nhiều tác giả, họa sĩ Việt",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được rocket, astronaut, Earth, moon khi nhìn tranh"
  ],
  [
   "en",
   "Đếm ngược từ 10 về 1 và hô “Blast off!”"
  ],
  [
   "zh",
   "Nói được 火箭, 地球, 月亮, 太阳"
  ],
  [
   "zh",
   "Nói được câu 我想去月亮。 hoặc 火箭飞上天。"
  ],
  [
   "td",
   "Biết Trái Đất đi quanh Mặt Trời, Mặt Trăng đi quanh Trái Đất (diễn bằng trò chơi)"
  ],
  [
   "td",
   "So sánh được hành tinh to – nhỏ bằng mô hình giấy"
  ],
  [
   "vi",
   "Kể lại được truyện Cóc kiện Trời: ai cùng Cóc lên trời"
  ],
  [
   "vd",
   "Làm động tác ngồi thu mình, bật nhảy “phóng lên”, đi chậm “lơ lửng”"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này bé là nhà khoa học vũ trụ: làm mô hình hệ Mặt Trời.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem “Let's Make the Solar System”. Chỉ xem, chưa làm. Mẹ dừng mỗi khi một hành tinh xuất hiện, hỏi “What is this?” Mẹ nói tên: sun, Earth, moon, planet. Câu Yes/No: “Is the sun big? Yes or no?” Bé dang tay “Yes, big!”.",
    "b": "Look! This is the Earth."
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem 太阳、地球和月亮. Dừng ở mỗi nhân vật, mẹ nói từ: 太阳 (tàiyáng), 地球 (dìqiú), 月亮 (yuèliang). Bé chỉ đúng hình trên màn hình.",
    "b": "这是地球。(zhè shì dìqiú)"
   },
   "words": {
    "en": [
     2,
     3,
     4,
     5
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Tìm hình tròn trong nhà làm hành tinh (10 phút): bé đi khắp nhà tìm 5 đồ vật tròn khác cỡ: quả bóng nhựa, quả cam, nắp nồi, cái đĩa, cuộn băng dính. Xếp từ to đến nhỏ. Mẹ đặt tên vui: cái to nhất là “Sun”, cái màu xanh là “Earth”, cái nhỏ là “Moon”. Bé nói tên khi chỉ.",
   "ob": "Ông bà cùng cháu tìm đồ vật tròn trong nhà, xếp từ to đến nhỏ làm mặt trời, Trái Đất.",
   "toi": "Mẹ kể truyện “Ngưu Lang – Chức Nữ” bằng lời của mẹ: chàng chăn trâu Ngưu Lang và nàng dệt vải Chức Nữ thương nhau, nhưng mải vui nên quên việc. Ngọc Hoàng cho hai người ở hai bờ sông Ngân Hà, dòng sông sao sáng trên trời. Mỗi năm một lần, đàn quạ bắc cầu cho hai người gặp nhau, và những giọt nước mắt mừng rơi xuống thành mưa ngâu tháng Bảy. Mẹ hỏi: “Con có muốn tối nay tìm dòng sông sao trên trời không?”"
  },
  {
   "chuyen": "Hôm nay khám phá các hành tinh: hành tinh nào nóng, hành tinh nào lạnh?",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và nói một từ. Xem đoạn đầu 5 phút “Planets for Kids!”. Mỗi khi một hành tinh mới xuất hiện, mẹ dừng và hỏi bé chọn một từ: “Big or small?”, “Hot or cold?”. Bé trả lời một từ. Mẹ nhắc lại: “Earth – our home.”",
    "b": "Hot or cold? Big or small?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – nghe và làm. Xem 小星星. Mẹ nói: các ngôi sao rất xa, ở tận vũ trụ. Mỗi lần nghe 星星, bé lấp lánh tay. Mẹ dừng hỏi “星星在哪儿？”, bé chỉ lên trời.",
    "b": "星星在天上。(xīngxing zài tiān shang)"
   },
   "words": {
    "en": [
     3,
     2,
     5
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Thí nghiệm nóng – lạnh (10 phút): mẹ đặt hai miếng giấy bạc (hoặc hai cái thìa inox) cạnh nhau: một cái để dưới nắng hoặc dưới đèn bàn 15 phút, một cái để trong bóng râm. Bé chạm thử (mẹ chạm trước để kiểm tra không quá nóng). Mẹ giải thích: hành tinh ở gần Mặt Trời thì nóng, ở xa thì lạnh. Bé nói “Hot!” – “Cold!”.",
   "ob": "Ông bà để một chiếc thìa dưới nắng, một chiếc trong râm, cháu sờ xem cái nào nóng.",
   "toi": "Đồng dao “Thằng Cuội ngồi gốc cây đa”. Mẹ đọc chậm, bé làm động tác: Cuội ngồi, trâu ăn lúa, gọi cha “ời ời”. Mẹ hỏi: “Cha Cuội ở đâu? Mẹ Cuội đi đâu?” Bé cười với chi tiết “cắt cỏ trên trời”. Mẹ nói: “Ngày xưa người ta chỉ tưởng tượng lên trời, bây giờ phi hành gia bay lên thật bằng tên lửa.”",
   "lyr": "Thằng Cuội ngồi gốc cây đa"
  },
  {
   "chuyen": "Hôm nay mình làm mô hình hệ Mặt Trời bằng giấy.",
   "en": {
    "v": 0,
    "t": "Lần 2 – xem và làm cùng. Xem lại “Let's Make the Solar System”, lần này dừng từng bước để làm theo bằng giấy màu: cắt hình tròn (mẹ cắt), bé tô và dán. Mỗi khi xong một hình, bé nói tên: “Sun”, “Earth”, “Moon”. Mẹ hỏi “Where is the Earth?” Bé chỉ.",
    "b": "Where is the Earth? Here it is!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật 太阳、地球和月亮. Mẹ đứng giữa làm 太阳, bé làm 地球 đi vòng quanh mẹ. Gấu bông làm 月亮, bé ôm gấu xoay quanh mình. Mẹ dừng hỏi “谁是太阳？” (shéi shì tàiyáng – ai là mặt trời?), bé chỉ mẹ.",
    "b": "妈妈是太阳！(māma shì tàiyáng)"
   },
   "words": {
    "en": [
     2,
     4,
     3,
     5
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Mô hình hệ Mặt Trời (15 phút): dán mô hình vừa làm lên tờ giấy to tô đen. Mặt Trời ở giữa, vẽ các vòng tròn quanh, đặt Trái Đất trên một vòng. Bé dùng ngón tay đưa Trái Đất đi vòng quanh Mặt Trời và đếm số vòng bằng tiếng Anh. Mẹ nói: “Một vòng là một năm. Con năm tuổi, Trái Đất đã đi năm vòng từ khi con sinh ra!”",
   "ob": "Ông bà cùng cháu dán mô hình Mặt Trời, Trái Đất và đếm vòng quay.",
   "toi": "Mẹ đọc 1–2 bài ngắn trong tập thơ “Góc sân và khoảng trời” (Trần Đăng Khoa, NXB Kim Đồng). Chọn bài có bầu trời, trăng hoặc sao. Mẹ hỏi: “Nhà thơ nhìn thấy gì trên trời? Con nhìn thấy gì?”"
  },
  {
   "chuyen": "Phi hành gia lơ lửng: trên vũ trụ không có gì kéo mình xuống.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Xem lại đoạn đầu 5 phút “Planets for Kids!”. Bé làm phi hành gia: đi thật chậm như lơ lửng (“float”), tay dang ra. Mỗi khi mẹ dừng ở một hành tinh, bé “bay” đến chạm vào mô hình giấy tương ứng và nói một từ về nó (big, small, hot, cold).",
    "b": "Float, float, slowly!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật 小星星, bé nằm ngửa “trôi” trên thảm như phi hành gia, tay lấp lánh. Mẹ dừng nhạc, nói 飞 (fēi – bay), bé dang tay bay quanh phòng.",
    "b": "我们飞！(wǒmen fēi)"
   },
   "words": {
    "en": [
     7,
     1,
     3
    ],
    "zh": [
     4,
     5
    ]
   },
   "doi": "Thí nghiệm rơi chậm – rơi nhanh (10 phút): mẹ và bé thả cùng lúc từ độ cao ngang vai một tờ giấy phẳng và một tờ giấy vo tròn. Cái nào chạm đất trước? Thử thả một chiếc lông vũ to hoặc mảnh khăn giấy. Mẹ giải thích: Trái Đất kéo mọi thứ xuống; trên vũ trụ phi hành gia không bị kéo xuống nên lơ lửng. Bé nói “Down!” mỗi khi đồ vật rơi.",
   "ob": "Ông bà cùng cháu thả tờ giấy phẳng và giấy vo tròn, xem cái nào rơi nhanh hơn.",
   "toi": "Mẹ và bé ra cửa sổ hoặc ban công tìm sao. Mẹ kể lại ngắn truyện Ngưu Lang – Chức Nữ, rồi để bé kể tiếp đoạn đàn quạ bắc cầu. Hỏi: “Nếu con là chim quạ, con sẽ giúp hai người thế nào?”"
  },
  {
   "chuyen": "Bé nói trước video: hôm nay bé là người giới thiệu các hành tinh.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Xem lại “Let's Make the Solar System”, mẹ dừng trước mỗi hình, bé nói tên trước: “Sun!”, “Earth!”, “Moon!”. Cuối video, bé cầm mô hình và giới thiệu một câu: “This is the Earth. We live on Earth.”",
    "b": "We live on Earth."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé nói trước. Bật 太阳、地球和月亮, mẹ dừng trước mỗi từ, bé nói trước. Thêm câu: “我们住在地球。” (wǒmen zhù zài dìqiú – chúng ta sống trên Trái Đất).",
    "b": "我们住在地球。(wǒmen zhù zài dìqiú)"
   },
   "words": {
    "en": [
     2,
     4,
     3
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Chuẩn bị “phi thuyền” cho pháo đài ngày mai (10 phút): mẹ và bé vẽ bảng điều khiển phi thuyền lên một tấm bìa carton: nút bấm tròn, màn hình, cần lái. Bé đánh số các nút từ 10 về 1 để đếm ngược. Bé chọn tên cho phi thuyền.",
   "ob": "Ông bà cùng cháu vẽ bảng điều khiển phi thuyền lên bìa carton.",
   "toi": "Ca dao “Ruộng đồng mặc sức chim bay”. Mẹ đọc, bé dang tay bay như chim. Mẹ hỏi: “Chim bay trên đồng, cá bơi dưới hồ. Còn tên lửa bay ở đâu?” Bé trả lời: “Trên trời, lên vũ trụ!”",
   "lyr": "Ruộng đồng mặc sức chim bay"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và pháo đài – phi thuyền chăn gối.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé nói đúng sun, Earth, moon trên mô hình. Sao 2: bé kể kết quả một thí nghiệm (nóng – lạnh hoặc rơi nhanh – chậm). Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần xem lại.",
    "b": "Mission complete! Three stars!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 太阳、地球和月亮. Một sao nếu bé tự nói 地球 khi chỉ mô hình.",
    "b": "火箭准备好了！(huǒjiàn zhǔnbèi hǎo le)"
   },
   "special": "Xây pháo đài chăn gối, kể chuyện trong pháo đài",
   "doi": "Phi thuyền chăn gối (20 phút): bé và mẹ dựng pháo đài bằng chăn gối, gắn bảng điều khiển carton ở “cửa”. Cả nhà ngồi vào, bé làm cơ trưởng đếm ngược: “Ten, nine, eight… one, blast off!” Tắt đèn, bật đèn pin. Trong phi thuyền, bé kể chuyện “Con bay lên mặt trăng và thấy…” mỗi người góp một câu. Kết thúc, phi thuyền “hạ cánh” về Trái Đất, bé nói “We are home!”.",
   "ob": "Ông bà ngồi trong phi thuyền chăn gối, nghe cháu đếm ngược và kể chuyện bay lên mặt trăng.",
   "toi": "Buổi tối nhẹ nhàng: mẹ và bé nằm trong pháo đài thêm vài phút. Mẹ hỏi: “Nếu bay lên vũ trụ, con muốn mang theo gì? Con có nhớ nhà không?”"
  },
  {
   "chuyen": "Chủ nhật: ôn lại và ngắm trời buổi tối tìm Mặt Trăng.",
   "en": {
    "v": 1,
    "t": "Ôn tập: bé chọn video thích nhất (làm mô hình hoặc hành tinh – nhớ chỉ xem 5 phút đầu) để xem lại cùng bố. Bé giới thiệu cho bố tên các hành tinh bé nhớ. Chơi lại một trò web bé thích.",
    "b": "Daddy, this is a planet!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn tập: xem lại 小星星, cả nhà lấp lánh tay. Bé nói câu “星星在天上。”.",
    "b": "星星在天上。(xīngxing zài tiān shang)"
   },
   "doi": "Ngắm trời buổi tối cùng cả nhà (15 phút): ra ban công hoặc sân. Bé tìm Mặt Trăng và những ngôi sao sáng nhất. Bé chỉ và nói “Moon!”, “Star!”, rồi tiếng Trung 月亮, 星星. Bố hỏi: “Where is the Earth?” Bé chỉ xuống chân và cười: “Here!” Nắm tay bé khi ở ban công.",
   "ob": "Ông bà dắt cháu ra sân buổi tối tìm Mặt Trăng và ngôi sao sáng.",
   "toi": "Ôn tuần: mẹ và bé đọc lại “Thằng Cuội ngồi gốc cây đa”. Mẹ hỏi: “Tuần sau mình làm phi hành gia và phóng tên lửa. Con muốn bay đến đâu?”"
  },
  {
   "chuyen": "Tuần Thử thách: phi hành gia nhí tập huấn mỗi ngày.",
   "en": {
    "v": 2,
    "t": "Lần 1 – thử thách đếm ngược. Xem “We're Going On A Rocket Ship”. Bé ngồi thu mình, đếm ngược 10 về 1 cùng bài hát, rồi bật nhảy lên khi “blast off”. Mẹ chấm sao: đếm đúng cùng nhạc được một sao, nhảy đúng lúc được thêm một sao. Dừng hỏi “Where are we going?” – “To the moon!”",
    "b": "Ten, nine, eight… blast off!"
   },
   "zh": {
    "v": 1,
    "t": "Thử thách “ai nhanh hơn”: bật 小星星, ai lấp lánh tay đúng lúc nghe 星星 trước thì được một sao. Mẹ dạy từ mới 火箭 (huǒjiàn – tên lửa): sau bài, mẹ nói 火箭, bé giơ hai tay chụm trên đầu làm đầu tên lửa.",
    "b": "火箭，飞！(huǒjiàn, fēi)"
   },
   "words": {
    "en": [
     0,
     6,
     8,
     4
    ],
    "zh": [
     0,
     4
    ]
   },
   "doi": "Tên lửa ống hút (15 phút): mẹ cuộn một mẩu giấy quanh cây bút chì thành ống, dán kín một đầu, vẽ cánh tên lửa (mẹ cắt). Bé cắm ống giấy vào một ống hút, thổi mạnh: tên lửa bay! Thi xem tên lửa bay xa bao nhiêu bước chân. Mỗi lần thổi, bé đếm ngược “three, two, one, blast off!”. Không thổi về phía mặt người.",
   "ob": "Ông bà làm tên lửa giấy gắn ống hút, cháu thổi cho bay và đếm bước chân.",
   "toi": "Mẹ kể truyện “Cóc kiện Trời” bằng lời của mẹ: trời hạn hán lâu ngày, cây khô, muông thú khát nước. Chú Cóc bé nhỏ rủ Cua, Gấu, Cọp, Ong, Cáo cùng lên thiên đình đòi mưa. Cả nhóm bàn kế khéo, đuổi bắt vui với quân nhà Trời và thắng. Trời hứa hễ nghe Cóc nghiến răng là cho mưa ngay. Hỏi bé: “Đội của Cóc có những ai? Đội phi hành gia của con có những ai?”"
  },
  {
   "chuyen": "Đố vui phi hành gia: mỗi câu đúng được một ngôi sao.",
   "en": {
    "v": 3,
    "t": "Lần 1 – xem và đố. Mẹ chọn một video ngắn về tên lửa hoặc phi hành gia trong danh sách “Let's Go To Space!” (dưới 8 phút). Dừng 3 lần, mỗi lần đố một câu: “What is this?” (rocket), “Who is this?” (astronaut), “Where is the rocket going? Up or down?” Mỗi câu đúng một sao.",
    "b": "Who is this? An astronaut!"
   },
   "zh": {
    "v": 0,
    "t": "Thử thách bé nói trước: bật 太阳、地球和月亮, mẹ dừng trước mỗi từ, bé nói trước. Đúng 3 từ liền được một sao.",
    "b": "你先说！(nǐ xiān shuō)"
   },
   "words": {
    "en": [
     0,
     1,
     5,
     9
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Tập huấn phi hành gia (10 phút): mẹ làm “đường tập huấn” trong phòng: bò qua đường hầm (gầm bàn), đi thăng bằng trên vạch băng dính dài trên sàn, nhảy vào vòng tròn vẽ bằng phấn hoặc dây băng dính. Mỗi chặng mẹ ra lệnh bằng tiếng Anh: “Crawl!”, “Walk!”, “Jump!”. Bé hoàn thành trong 1 phút được hai sao.",
   "ob": "Ông bà làm đường tập: chui gầm bàn, đi trên vạch, nhảy vào vòng cho cháu luyện như phi hành gia.",
   "toi": "Ca dao “Đi mô cũng nhớ quê mình”. Mẹ đọc chậm, giải thích: Hương Giang là sông Hương, Ngự Bình là núi ở Huế. Mẹ hỏi: “Phi hành gia bay xa trên vũ trụ có nhớ nhà không? Nhìn từ trên cao, Trái Đất màu gì?” (xanh dương vì có nhiều biển).",
   "lyr": "Đi mô cũng nhớ quê mình"
  },
  {
   "chuyen": "Thử thách “nói cả câu”: phi hành gia báo cáo về Trái Đất.",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé hát trước video. Bật “Rocket Ship”, mẹ tắt tiếng đoạn đếm ngược, bé tự đếm từ 10 về 1. Thử thách câu dài: hạ cánh xong, mẹ hỏi “Where are you?” Bé trả lời “I am on the moon.” Đủ câu được hai sao.",
    "b": "I am on the moon!"
   },
   "zh": {
    "v": 1,
    "t": "Chuyển ngữ: xem lại 小星星. Sau bài, mẹ nói tiếng Anh “rocket”, bé nói tiếng Trung “火箭”; mẹ nói “star”, bé nói “星星”; mẹ nói “moon”, bé nói “月亮”. Mỗi từ đúng một sao.",
    "b": "Rocket，中文叫“火箭”。(zhōngwén jiào huǒjiàn)"
   },
   "words": {
    "en": [
     0,
     6,
     8,
     4
    ],
    "zh": [
     0,
     2
    ]
   },
   "doi": "Mũ phi hành gia (15 phút): mẹ khoét một lỗ to trên thùng carton nhỏ hoặc dùng một chiếc mũ bảo hiểm xe đạp, bé dán giấy bạc và vẽ cờ lên. Bé đội thử, tập câu giới thiệu cho ngày hoá trang: “Hello! I am an astronaut. I can fly to the moon.” và “我是宇航员！” (wǒ shì yǔhángyuán).",
   "ob": "Ông bà cùng cháu làm mũ phi hành gia bằng thùng carton hoặc mũ xe đạp.",
   "toi": "Mẹ đọc một cuốn trong bộ “Hành trình khám phá” (NXB Trẻ), chọn cuốn hoặc trang có bầu trời, vũ trụ. Mẹ hỏi: “Trong sách có gì mình đã học trên video? Có gì mới?”"
  },
  {
   "chuyen": "Đố vui lần 2: bé làm “trạm điều khiển mặt đất”.",
   "en": {
    "v": 3,
    "t": "Lần 2 – bé đố mẹ. Xem lại video ngắn về tên lửa hôm thứ Ba. Lần này bé là trạm điều khiển: bé dừng video và hỏi mẹ “What is this?” hoặc “Where is the astronaut?”. Mẹ trả lời, đôi lúc trả lời sai để bé sửa. Bé sửa đúng được một sao.",
    "b": "Mummy, where is the astronaut?"
   },
   "zh": {
    "v": 0,
    "t": "Thử thách đóng vai nhanh: bật 太阳、地球和月亮, mẹ hô một từ 太阳, 地球 hoặc 月亮, bé chạy đến đúng mô hình giấy trong 3 giây. Đúng được một sao.",
    "b": "地球在哪儿？快！(dìqiú zài nǎr? kuài)"
   },
   "words": {
    "en": [
     1,
     0,
     5
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Bữa ăn phi hành gia (10 phút): mẹ giải thích phi hành gia ăn đồ đóng gói, uống nước bằng ống hút để nước không bay lơ lửng. Bé thử uống nước bằng ống hút từ một túi đựng nước có khóa kéo (mẹ cầm túi), ăn bánh quy to trong túi. Bé nói “I am an astronaut. I eat in space.”",
   "ob": "Ông bà cho cháu thử uống nước bằng ống hút từ túi như phi hành gia, ông bà cầm túi.",
   "toi": "Bé kể lại truyện “Cóc kiện Trời” bằng trò chơi: mỗi người trong nhà đóng một con vật trong đội Cóc (Cua, Gấu, Cọp, Ong, Cáo). Bé làm Cóc dẫn đầu đi “lên trời” (lên giường). Mẹ hỏi: “Khi nào Trời cho mưa?” Bé nghiến răng “két két” cho cả nhà cười."
  },
  {
   "chuyen": "Thử thách cuối tuần: phi hành gia hoàn thành nhiệm vụ.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé hát cả bài. Bật “Rocket Ship”, bé hát và làm động tác trước video ở mọi đoạn quen: crouch (ngồi thu), countdown, blast off, float. Mẹ chấm: làm đúng 4 động tác được bốn sao. Cuối bài, bé nói “The rocket goes up!”",
    "b": "The rocket goes up!"
   },
   "zh": {
    "v": 1,
    "t": "Bé hát trước: tắt tiếng 小星星, bé tự hát câu đầu. Sau đó bé nói câu mới: “我想去月亮。” (wǒ xiǎng qù yuèliang – con muốn lên mặt trăng).",
    "b": "我想去月亮。(wǒ xiǎng qù yuèliang)"
   },
   "words": {
    "en": [
     0,
     6,
     7,
     9
    ],
    "zh": [
     2,
     4,
     5
    ]
   },
   "doi": "Chuẩn bị ngày hoá trang (10 phút): bé kiểm tra bộ đồ phi hành gia: mũ, “bình oxy” bằng hai chai nhựa rỗng dán vào lưng áo (mẹ dán), găng tay. Bé tập đi chậm “lơ lửng” và nói 3 câu giới thiệu đã tập. Chọn chỗ làm “mặt trăng” (tấm chăn trắng trải sàn).",
   "ob": "Ông bà giúp cháu dán hai chai nhựa rỗng làm bình oxy và tập đi chậm như trên mặt trăng.",
   "toi": "Ca dao “Ta về ta tắm ao ta”. Mẹ đọc, giải thích: dù đi đâu xa, nhà mình vẫn là nơi yêu nhất. Mẹ hỏi: “Phi hành gia bay lên vũ trụ xong rồi về đâu?” Bé trả lời: “Về Trái Đất, về nhà!”",
   "lyr": "Ta về ta tắm ao ta"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và ngày hoá trang phi hành gia.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: 3 sao. Sao 1: bé đếm ngược từ 10 về 1 không vấp. Sao 2: bé nói câu dài “I am an astronaut. I can fly to the moon.” Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất trong tuần xem lại trong bộ đồ phi hành gia.",
    "b": "Hello, astronaut! Ready?"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 太阳、地球和月亮 trong bộ đồ hoá trang. Một sao nếu bé tự nói 我是宇航员。",
    "b": "我是宇航员！(wǒ shì yǔhángyuán)"
   },
   "special": "Ngày hoá trang: bé đóng vai nhân vật trong video",
   "doi": "Ngày hoá trang “Phi hành gia lên mặt trăng” (20 phút): bé mặc bộ đồ đã chuẩn bị, ngồi trong “tên lửa” (thùng carton hoặc ghế). Cả nhà đếm ngược cùng bé, bé “phóng lên” rồi đi chậm trên “mặt trăng” (chăn trắng). Bé cắm một lá cờ giấy, nói “I am on the moon!”. Mẹ phỏng vấn: “What can you see?” – bé trả lời “I can see the Earth.” Bé chào bằng tiếng Trung “地球，你好！”. Mẹ quay clip 1 phút.",
   "ob": "Ông bà xem cháu hoá trang phi hành gia, hỏi cháu thấy gì trên mặt trăng.",
   "toi": "Buổi tối nhẹ nhàng: cả nhà xem lại clip. Mẹ hỏi: “Lên mặt trăng con thấy Trái Đất thế nào? Con có nhớ nhà không?” Mẹ ôm bé: “Mừng phi hành gia về nhà!”"
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: bé tự chọn một video trong vòng để xem lại (video hành tinh chỉ 5 phút đầu). Mẹ để bé xem và kể tự do. Cuối cùng hỏi: “Where do we live?” Bé trả lời “On Earth!”",
    "b": "Where do we live? On Earth!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: xem lại 小星星 trước giờ ngủ, bé lấp lánh tay.",
    "b": "星星，再见！(xīngxing, zàijiàn)"
   },
   "doi": "Chơi lại một trò web bé thích. Sau đó bé cất bộ đồ phi hành gia, mô hình hệ Mặt Trời vào một hộp “Vũ trụ của con” để dành.",
   "ob": "Ông bà khen bộ đồ phi hành gia của cháu và giúp cháu cất vào hộp.",
   "toi": "Mẹ và bé ôn hai tuần: bé chọn kể lại truyện Ngưu Lang – Chức Nữ hoặc Cóc kiện Trời. Mẹ hỏi: “Tuần sau mình học về bốn mùa. Con thích trời nóng hay trời lạnh?” Chúc bé ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[141] = {
 "sub": "Xuân, hạ, thu, đông",
 "vocab": {
  "en": [
   [
    "spring",
    "🌱",
    "mùa xuân",
    false
   ],
   [
    "summer",
    "🏖️",
    "mùa hè",
    false
   ],
   [
    "autumn",
    "🍂",
    "mùa thu",
    false
   ],
   [
    "winter",
    "⛄",
    "mùa đông",
    false
   ],
   [
    "flower",
    "🌸",
    "bông hoa",
    false
   ],
   [
    "hot",
    "🥵",
    "nóng",
    false
   ],
   [
    "cold",
    "🥶",
    "lạnh",
    false
   ],
   [
    "grow",
    "🌿",
    "lớn lên, mọc",
    true
   ],
   [
    "swim",
    "🏊",
    "bơi",
    true
   ]
  ],
  "zh": [
   [
    "春天",
    "chūntiān",
    "mùa xuân",
    "🌱"
   ],
   [
    "夏天",
    "xiàtiān",
    "mùa hè",
    "🏖️"
   ],
   [
    "秋天",
    "qiūtiān",
    "mùa thu",
    "🍂"
   ],
   [
    "冬天",
    "dōngtiān",
    "mùa đông",
    "⛄"
   ],
   [
    "花",
    "huā",
    "bông hoa",
    "🌸"
   ],
   [
    "热",
    "rè",
    "nóng",
    "🥵"
   ],
   [
    "冷",
    "lěng",
    "lạnh",
    "🥶"
   ]
  ],
  "en_phr": [
   [
    "I like summer.",
    "summer",
    "🏖️"
   ],
   [
    "It is cold in winter.",
    "cold",
    "⛄"
   ],
   [
    "Flowers grow in spring.",
    "spring",
    "🌸"
   ],
   [
    "Leaves fall in autumn.",
    "autumn",
    "🍂"
   ]
  ],
  "zh_phr": [
   [
    "春天来了！",
    "春天",
    "chūntiān lái le",
    "mùa xuân đến rồi",
    "🌱"
   ],
   [
    "夏天很热。",
    "热",
    "xiàtiān hěn rè",
    "mùa hè rất nóng",
    "🥵"
   ],
   [
    "我喜欢秋天。",
    "秋天",
    "wǒ xǐhuan qiūtiān",
    "con thích mùa thu",
    "🍂"
   ],
   [
    "冬天很冷。",
    "冷",
    "dōngtiān hěn lěng",
    "mùa đông rất lạnh",
    "🥶"
   ]
  ],
  "seq": [
   [
    "🌸",
    "spring",
    "春天"
   ],
   [
    "🏖️",
    "summer",
    "夏天"
   ],
   [
    "🍂",
    "autumn",
    "秋天"
   ],
   [
    "⛄",
    "winter",
    "冬天"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "The Seasons Song",
    "u": "https://www.youtube.com/watch?v=C_Sc5ZjdfFI",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Hello Reindeer, Goodbye Snowman",
    "u": "https://www.youtube.com/watch?v=1uz2o6pCcjo",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "We're Going on a Bear Hunt – Read Aloud (xem tối đa 8 phút)",
    "u": "https://www.youtube.com/watch?v=7Vtbk4Jyk0w",
    "kind": "story",
    "min": 6,
    "ch": "Love2Read with Miss Ellis"
   }
  ],
  "zh": [
   {
    "t": "四季歌 Four Seasons Song (bài hát bốn mùa)",
    "u": "https://www.youtube.com/watch?v=MDyZ6XzWFCE",
    "kind": "song_action",
    "min": 1.7,
    "ch": "GIGGLING PANDA"
   },
   {
    "t": "春天在哪里 Looking for Spring (mùa xuân ở đâu)",
    "u": "https://www.youtube.com/watch?v=YCGVuC_629E",
    "kind": "song_action",
    "min": 3,
    "ch": "小蓓蕾组合"
   },
   {
    "t": "大自然 The Nature Song (thiên nhiên)",
    "u": "https://www.youtube.com/watch?v=H2L43Sb7VSY",
    "kind": "song_action",
    "min": 1.5,
    "ch": "Cool Panda Chinese Learning"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: mỗi mùa một điệu nhảy",
   "toi_vi": [
    {
     "t": "Câu đố cái quạt nan",
     "type": "cau_do",
     "lyr": "Thân em xưa ở bụi tre\nMùa đông xếp lại mùa hè mở ra"
    },
    {
     "t": "Tháng giêng là tháng ăn chơi",
     "type": "ca_dao",
     "lyr": "Tháng giêng là tháng ăn chơi\nTháng hai trồng đậu, trồng khoai, trồng cà\nTháng ba thì đậu đã già\nTa đi ta hái về nhà phơi khô"
    }
   ],
   "book_vi": {
    "t": "Những mùa ấm êm của em",
    "author": "Thu Dương (minh họa: Thạch Thảo)",
    "publisher": "Crabit Kidbooks"
   }
  },
  {
   "title": "Tuần Kể chuyện: chuyện của cây qua bốn mùa",
   "toi_vi": [
    {
     "t": "Chuồn chuồn bay thấp thì mưa",
     "type": "ca_dao",
     "lyr": "Chuồn chuồn bay thấp thì mưa\nBay cao thì nắng, bay vừa thì râm"
    },
    {
     "t": "Gió đưa gió đẩy, về rẫy ăn còng",
     "type": "hat_ru",
     "lyr": "Gió đưa gió đẩy, về rẫy ăn còng\nVề sông ăn cá, về đồng ăn cua"
    }
   ],
   "book_vi": {
    "t": "Những chiếc áo ấm (bộ 'Những truyện hay viết cho thiếu nhi – phiên bản sách tranh')",
    "author": "Võ Quảng",
    "publisher": "NXB Kim Đồng"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được tên 4 mùa bằng tiếng Anh theo thứ tự"
  ],
  [
   "en",
   "Nói được câu “I like summer.” hoặc “It is cold in winter.”"
  ],
  [
   "zh",
   "Nói được 春天, 夏天, 秋天, 冬天"
  ],
  [
   "zh",
   "Nói được 热 và 冷 đúng với mùa"
  ],
  [
   "td",
   "Chọn đúng quần áo, đồ dùng cho từng mùa"
  ],
  [
   "vi",
   "Kể lại được truyện Kiến và Châu Chấu: mùa hè ai làm gì, mùa đông thế nào"
  ],
  [
   "xh",
   "Biết chia sẻ, giúp bạn như Kiến giúp Châu Chấu (kể lại một việc thật)"
  ],
  [
   "vd",
   "Làm đúng động tác của từng mùa: mọc lên, bơi, lá rơi, run run"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này một năm có bốn mùa, mỗi mùa bé làm một động tác.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem “The Seasons Song”. Mỗi mùa mới, mẹ dừng và hỏi “What season is it?” Mẹ nói tên: spring, summer, autumn, winter. Bé chỉ vào hình: hoa, mặt trời, lá vàng, tuyết. Câu Yes/No: “Is it hot in winter? Yes or no?” Bé lắc đầu “No!”.",
    "b": "What season is it?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và làm. Xem 四季歌 (bài ngắn, xem 2 lần). Mẹ làm động tác cho mỗi mùa: 春天 mở tay như hoa nở, 夏天 quạt tay, 秋天 tay rơi như lá, 冬天 run người. Bé làm theo.",
    "b": "春天来了！(chūntiān lái le)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Vòng tròn bốn mùa (15 phút): mẹ vẽ một vòng tròn to trên giấy, chia 4 phần. Bé vẽ vào mỗi phần: bông hoa (xuân), mặt trời và biển (hè), lá vàng (thu), người mặc áo ấm (đông). Mẹ viết tên tiếng Anh và tiếng Trung. Mẹ kể: miền Bắc nước mình có bốn mùa rõ, miền Nam có mùa mưa và mùa khô.",
   "ob": "Ông bà cùng cháu vẽ vòng tròn bốn mùa và kể mùa nào ông bà thích.",
   "toi": "Mẹ kể truyện “Kiến và Châu Chấu” bằng lời của mẹ: suốt mùa hè, Kiến chăm chỉ tha thức ăn về tổ, còn Châu Chấu chỉ ca hát rong chơi. Mùa đông tới, Châu Chấu đói và lạnh, gõ cửa nhà Kiến. Kiến mở cửa cho bạn vào sưởi ấm, chia thức ăn và nhắc bạn năm sau cùng chuẩn bị. Hỏi bé: “Mùa hè Kiến làm gì? Mùa đông Kiến làm gì cho bạn?”"
  },
  {
   "chuyen": "Hôm nay chào tạm biệt mùa đông, chào đón mùa xuân.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm. Xem “Hello Reindeer, Goodbye Snowman”. Mỗi lần “hello” bé vẫy tay chào, “goodbye” bé vẫy tay tạm biệt. Mẹ dừng ở người tuyết, hỏi “Is it cold? Yes or no?” Bé ôm người run “Yes, cold!”. Mẹ giải thích: người tuyết chỉ có ở nơi có tuyết mùa đông.",
    "b": "Goodbye, snowman! Hello, spring!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Xem 春天在哪里. Mỗi khi có hoa, mẹ dừng và nói 花 (huā), bé chỉ hoa. Mẹ nói 春天 (chūntiān), bé mở hai tay như hoa nở.",
    "b": "春天在哪里？(chūntiān zài nǎlǐ)"
   },
   "words": {
    "en": [
     3,
     6,
     0
    ],
    "zh": [
     0,
     4
    ]
   },
   "doi": "Tủ đồ bốn mùa (10 phút): mẹ lấy ra một số đồ: áo len, mũ len, áo cộc tay, quần soóc, kính râm, áo mưa. Bé xếp vào 4 rổ dán tranh 4 mùa. Mỗi món bé nói: “Winter – cold!” hoặc “Summer – hot!”. Mẹ hỏi tiếng Trung: “冷还是热？” (lěng háishì rè – lạnh hay nóng?), bé trả lời.",
   "ob": "Ông bà lấy quần áo mùa hè, mùa đông để cháu chia vào đúng rổ.",
   "toi": "Câu đố dân gian “Câu đố cái quạt nan”. Mẹ đọc, bé đoán. Nếu nhà có quạt nan hoặc quạt giấy, bé xòe ra quạt (mùa hè) và gấp lại (mùa đông). Mẹ hỏi: “Bây giờ là mùa gì? Con cần quạt không?”",
   "lyr": "Câu đố cái quạt nan"
  },
  {
   "chuyen": "Freeze dance bốn mùa: nhạc dừng ở mùa nào, bé hóa thành mùa đó.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật “The Seasons Song”, bé làm động tác từng mùa: mọc lên như cây (spring – grow), bơi (summer – swim), xoay tròn như lá rơi (autumn), run run (winter). Freeze dance: mẹ dừng bất chợt, bé đứng im, mẹ hỏi “What season?” Bé nói tên mùa.",
    "b": "Freeze! What season?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật lại 四季歌, mẹ dừng giữa bài, hỏi “现在是什么季节？” (xiànzài shì shénme jìjié – bây giờ là mùa gì?). Bé làm động tác và nói tên mùa tiếng Trung.",
    "b": "现在是夏天。(xiànzài shì xiàtiān)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     7,
     8
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Trồng lại hành mùa xuân (15 phút): mẹ cắt sẵn 3–4 gốc hành lá còn rễ (dài khoảng 3 cm, mẹ cầm dao). Bé cắm gốc hành đứng trong một cốc nhựa trong có chút nước, rễ ngập nước. Để cạnh cửa sổ. Mỗi ngày bé xem lá non mọc lên và thay nước cùng mẹ. Mẹ nói “Grow, grow!” Bé vẽ ngày 1 vào sổ quan sát.",
   "ob": "Ông bà cắm gốc hành vào cốc nước cùng cháu, cháu xem lá mọc mỗi ngày.",
   "toi": "Mẹ đọc sách “Những mùa ấm êm của em” (Thu Dương, Crabit Kidbooks). Mỗi trang, bé đoán mùa trong tranh. Đọc xong hỏi: “Con thích mùa nào nhất? Vì sao?”"
  },
  {
   "chuyen": "Hôm nay bé làm người tuyết bằng giấy và chào mùa xuân.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật lại “Hello Reindeer, Goodbye Snowman”. Bé làm tuần lộc nhảy (“hello, reindeer”), rồi làm người tuyết tan chảy từ từ xuống sàn (“goodbye, snowman”). Cuối bài, bé đứng dậy làm bông hoa mùa xuân nở. Mẹ hỏi “Hello or goodbye?”",
    "b": "Hello, reindeer! Goodbye, snowman!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – đi tìm mùa xuân. Bật 春天在哪里, mẹ và bé đi quanh nhà tìm “mùa xuân”: chậu cây, bông hoa, tranh hoa. Thấy thứ gì, bé nói “春天在这里！” (chūntiān zài zhèlǐ).",
    "b": "春天在这里！(chūntiān zài zhèlǐ)"
   },
   "words": {
    "en": [
     3,
     0,
     6
    ],
    "zh": [
     0,
     4
    ]
   },
   "doi": "Đá tan nhanh hay chậm (10 phút): mẹ lấy 3 viên đá to từ tủ lạnh, đặt vào 3 đĩa: một đĩa ngoài nắng, một đĩa trong nhà, một đĩa trong tủ lạnh. Bé đoán viên nào tan trước. Sau 20 phút ra xem. Mẹ nói: “Summer – hot – melt! Winter – cold!” Bé nhắc lại.",
   "ob": "Ông bà đặt ba viên đá ở ba chỗ khác nhau, cháu đoán và xem viên nào tan trước.",
   "toi": "Bé kể lại truyện “Kiến và Châu Chấu”. Mẹ đưa 2 tranh: mùa hè (mặt trời) và mùa đông (tuyết). Bé cầm tranh mùa hè kể đoạn đầu, cầm tranh mùa đông kể đoạn sau. Mẹ hỏi: “Nếu con là Kiến, con có mở cửa cho Châu Chấu không?”"
  },
  {
   "chuyen": "Bé hát trước, video hát sau: ai nhớ thứ tự bốn mùa?",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Bật “The Seasons Song”, mẹ dừng trước mỗi mùa, bé nói tên mùa tiếp theo trước. Bật tiếp xem đúng không. Cuối bài, bé nói câu: “I like summer.” (hoặc mùa bé thích).",
    "b": "I like summer!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé hát trước. Tắt tiếng 四季歌 sau khi nghe một lần, bé tự nói 4 mùa theo thứ tự: 春天、夏天、秋天、冬天. Thêm câu: “我喜欢夏天。” hoặc mùa bé thích.",
    "b": "我喜欢春天。(wǒ xǐhuan chūntiān)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Tập tiết mục “Bốn mùa” (10 phút): bé chọn biểu diễn “The Seasons Song” bằng động tác. Mẹ làm 4 tấm bảng giấy nhỏ có tranh 4 mùa để bé giơ lên khi hát đến. Tập 2 lần: có nhạc và không nhạc. Bé xem lại cốc hành trồng hôm thứ Tư, vẽ ngày 3.",
   "ob": "Ông bà xem cháu tập bài bốn mùa, giơ bảng tranh giúp cháu.",
   "toi": "Ca dao “Tháng giêng là tháng ăn chơi”. Mẹ đọc, giải thích: tháng giêng là Tết, tháng hai trồng đậu, khoai, cà, tháng ba thì thu hoạch. Mẹ hỏi: “Cốc hành của con đang mọc, giống tháng nào trong bài?” (tháng hai, tháng trồng cây).",
   "lyr": "Tháng giêng là tháng ăn chơi"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và buổi biểu diễn “Bốn mùa”.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé nói đúng 4 mùa theo thứ tự bằng tiếng Anh. Sao 2: bé làm đúng động tác mỗi mùa. Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần xem lại.",
    "b": "Spring, summer, autumn, winter! Bravo!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 四季歌. Một sao nếu bé tự nói được 3 mùa bằng tiếng Trung.",
    "b": "四季真美！(sìjì zhēn měi)"
   },
   "special": "Buổi biểu diễn nhỏ: bé hát hoặc kể 1 phút, mẹ quay clip",
   "doi": "Biểu diễn “Bốn mùa của con” (15 phút): bé đứng trên “sân khấu”, giới thiệu: “Con là… Con biểu diễn bài bốn mùa.” Bé làm động tác từng mùa, mẹ hoặc bố giơ bảng tranh. Cuối tiết mục, bé nói một câu tiếng Anh: “I like summer.” và một câu tiếng Trung: “冬天很冷。”. Mẹ quay clip 1 phút, gửi ông bà.",
   "ob": "Ông bà làm khán giả, hỏi cháu thích mùa nào và vì sao.",
   "toi": "Buổi tối nhẹ nhàng: cả nhà xem lại clip. Mẹ kể cho bé nghe mùa mẹ thích nhất khi còn nhỏ và một kỷ niệm của mùa đó (tắm mưa mùa hè, ăn cốm mùa thu…)."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và đi dạo tìm dấu hiệu của mùa.",
   "en": {
    "v": 1,
    "t": "Ôn tập: bé chọn bài thích nhất để xem lại. Lần này bé dạy bố động tác của từng mùa. Chơi lại một trò web bé thích.",
    "b": "Daddy, grow like a flower!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn tập: xem lại 春天在哪里, cả nhà đi tìm “mùa xuân” trong nhà, bé nói 春天在这里.",
    "b": "春天在这里！(chūntiān zài zhèlǐ)"
   },
   "doi": "Đi dạo tìm dấu hiệu của mùa (20 phút): cả nhà ra công viên. Bé tìm: lá xanh hay lá vàng? Có hoa không? Trời nóng hay mát? Bé nhặt 3 chiếc lá khác màu mang về. Mẹ hỏi: “What season is it now?” Bé đoán mùa hiện tại. Nắm tay bé khi qua đường.",
   "ob": "Ông bà dắt cháu đi dạo, nhặt lá và đoán bây giờ là mùa gì.",
   "toi": "Ôn lại tuần: bé đố bố câu đố cái quạt nan. Mẹ hỏi: “Tuần sau mình nghe chuyện đi săn gấu qua cỏ, sông, bùn, rừng và bão tuyết. Con đoán có những gì?”"
  },
  {
   "chuyen": "Tuần kể chuyện: cả nhà đi “săn gấu” qua đủ loại thời tiết.",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và dừng hỏi. Xem “We're Going on a Bear Hunt” (Miss Ellis đọc, xem tối đa 8 phút). Trước mỗi chặng (cỏ, sông, bùn, rừng, bão tuyết), mẹ dừng và hỏi “Chuyện gì xảy ra tiếp?” Bé đoán. Câu hỏi What: “What can you see?” Bé chỉ và nói tiếng Việt, mẹ nói lại tiếng Anh: grass, river, snow.",
    "b": "We can't go over it. We have to go through it!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem và chỉ. Xem 大自然. Dừng ở mỗi thứ, mẹ nói từ: 花 (huā), 树 (shù – cây), 彩虹 (cǎihóng – cầu vồng). Bé chỉ đúng và kể bằng tiếng Việt: “Ở mùa nào thì có hoa?”",
    "b": "春天有花。(chūntiān yǒu huā)"
   },
   "words": {
    "en": [
     3,
     6,
     1
    ],
    "zh": [
     4,
     0
    ]
   },
   "doi": "Âm thanh của thiên nhiên (10 phút): mẹ và bé làm âm thanh cho mỗi chặng trong truyện: vò giấy (cỏ “swishy swashy”), vỗ nước trong chậu (sông “splash”), dậm chân lên khăn ướt (bùn “squelch”), thổi “hoooo” (gió tuyết). Mẹ đọc tên chặng, bé làm âm thanh. Mẹ ngồi cạnh khi có nước.",
   "ob": "Ông bà cùng cháu làm tiếng cỏ, tiếng nước, tiếng gió bằng giấy và chậu nước.",
   "toi": "Mẹ kể truyện “Cáo, Thỏ và Gà trống” bằng lời của mẹ: Cáo có nhà băng, Thỏ có nhà gỗ. Mùa xuân tới, nắng ấm làm nhà băng của Cáo tan ra. Cáo xin sang ở nhờ rồi đuổi Thỏ ra ngoài. Chó và Gấu đến giúp nhưng sợ quá bỏ đi. Chỉ có Gà trống dũng cảm vỗ cánh gáy thật to, Cáo giật mình chạy mất, Thỏ được về nhà. Hỏi bé: “Vì sao nhà băng của Cáo bị tan?”"
  },
  {
   "chuyen": "Hôm nay bé kể chuyện một cái cây qua bốn mùa.",
   "en": {
    "v": 0,
    "t": "Bài hát thành câu chuyện. Xem lại “The Seasons Song”. Sau đó mẹ vẽ một cái cây không lá. Bé kể chuyện cái cây qua 4 mùa và vẽ thêm: mùa xuân mọc hoa, mùa hè lá xanh, mùa thu lá vàng rơi, mùa đông cây trơ cành. Mỗi mùa bé nói tên tiếng Anh. Mẹ hỏi “What happens in autumn?”",
    "b": "In autumn, the leaves fall."
   },
   "zh": {
    "v": 0,
    "t": "Kể lại bằng tranh. Xem 四季歌, rồi bé xếp 4 tranh mùa theo đúng thứ tự trong bài và kể: “春天… 夏天… 秋天… 冬天…”, mỗi mùa thêm một từ: 花, 热, 冷.",
    "b": "冬天很冷。(dōngtiān hěn lěng)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3,
     6
    ]
   },
   "doi": "Cây bốn mùa bằng tay (15 phút): bé in bàn tay và cánh tay lên giấy làm thân cây (màu nâu). Chia tờ giấy làm 4, mỗi phần bé chấm ngón tay màu khác nhau: hồng (hoa xuân), xanh (lá hè), vàng cam (lá thu), trắng (tuyết đông). Bé kể lại câu chuyện cái cây. Xem cốc hành: lá non cao bao nhiêu rồi?",
   "ob": "Ông bà cùng cháu in tay làm cây bốn mùa và xem cốc hành mọc lá.",
   "toi": "Ca dao “Chuồn chuồn bay thấp thì mưa”. Mẹ đọc, bé làm chuồn chuồn bay thấp (ngồi), bay cao (nhón chân), bay vừa (đứng). Mẹ giải thích: ông bà ngày xưa nhìn chuồn chuồn để đoán thời tiết. Hỏi bé: “Hôm nay chuồn chuồn sẽ bay thế nào?”",
   "lyr": "Chuồn chuồn bay thấp thì mưa"
  },
  {
   "chuyen": "Đóng vai “săn gấu”: cả nhà đi qua cỏ, sông, bùn, rừng, bão tuyết.",
   "en": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại truyện săn gấu. Lần này cả nhà vừa xem vừa diễn: đi trên “cỏ” (thảm), “bơi” qua sông (tấm chăn xanh), lội “bùn” (gối), luồn qua “rừng” (ghế), đi trong “bão tuyết” (run người). Mẹ dừng trước mỗi chặng hỏi “What's next?” Bé đoán trước.",
    "b": "Uh-oh! A snowstorm!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – kể chuyện thiên nhiên. Xem lại 大自然, rồi mẹ và bé đóng vai một cái cây (树) và một bông hoa (花) nói chuyện với nhau bằng câu ngắn: “我是树。” (wǒ shì shù), “我是花。” (wǒ shì huā).",
    "b": "我是花，你是树。(wǒ shì huā, nǐ shì shù)"
   },
   "words": {
    "en": [
     3,
     6,
     8
    ],
    "zh": [
     4,
     6
    ]
   },
   "doi": "Đường săn gấu trong nhà (15 phút): mẹ bày một đường đi qua 5 chặng bằng đồ trong nhà: thảm (cỏ), khăn xanh (sông), gối (bùn), ghế xếp hàng (rừng), quạt bật nhẹ (bão tuyết). Cuối đường là “hang gấu” dưới gầm bàn có gấu bông. Bé đi hết đường, thấy gấu thì chạy ngược về và trốn dưới chăn như trong truyện.",
   "ob": "Ông bà cùng cháu bày đường săn gấu bằng thảm, gối, ghế và chơi trốn dưới chăn.",
   "toi": "Mẹ đọc sách “Những chiếc áo ấm” (Võ Quảng, NXB Kim Đồng). Đọc xong hỏi: “Mùa nào mình cần mặc áo ấm? Con có mấy chiếc áo ấm?” Bé kể tên áo của mình."
  },
  {
   "chuyen": "Chuyển ngữ bốn mùa: mẹ nói tiếng Anh, bé nói tiếng Trung.",
   "en": {
    "v": 0,
    "t": "Lần 3 tuần này – chuyển ngữ. Bật “The Seasons Song”, mỗi khi một mùa xuất hiện, mẹ dừng và nói tên tiếng Anh, bé nói tên tiếng Trung (spring – 春天, summer – 夏天…). Đổi lại: mẹ nói tiếng Trung, bé nói tiếng Anh.",
    "b": "Spring! In Chinese?"
   },
   "zh": {
    "v": 0,
    "t": "Bé kể trước: tắt tiếng 四季歌, bé tự nói tên mùa khi hình hiện ra. Thêm câu dài: “夏天很热，冬天很冷。” (xiàtiān hěn rè, dōngtiān hěn lěng).",
    "b": "夏天很热，冬天很冷。(xiàtiān hěn rè, dōngtiān hěn lěng)"
   },
   "words": {
    "en": [
     0,
     1,
     2,
     3
    ],
    "zh": [
     0,
     1,
     2,
     3,
     5,
     6
    ]
   },
   "doi": "Hộp thư bốn mùa (10 phút): mẹ dán tranh 4 mùa lên 4 cái hộp. Mẹ đưa cho bé những “lá thư” là tranh nhỏ (cái quạt, áo len, bông hoa, lá vàng, kem, áo mưa). Bé bỏ mỗi lá thư vào đúng hộp mùa và nói bằng tiếng Anh hoặc tiếng Trung: “Ice cream – summer – 夏天!”.",
   "ob": "Ông bà đưa tranh đồ vật, cháu bỏ vào hộp đúng mùa.",
   "toi": "Bé kể lại truyện “Cáo, Thỏ và Gà trống” bằng rối tay: bé làm Gà trống gáy “ò ó o” thật to. Mẹ hỏi: “Ai giúp Thỏ? Vì sao Chó và Gấu bỏ đi? Gà trống có sợ không?”"
  },
  {
   "chuyen": "Bé là người kể chuyện săn gấu cho cả nhà.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé kể trước video. Mẹ tắt tiếng truyện săn gấu, bé xem hình và kể, nói câu lặp lại “We're going on a bear hunt!” và âm thanh mỗi chặng. Bật tiếng xem đoạn cuối. Bé nói câu dài: “It is cold in the snowstorm.”",
    "b": "We're going on a bear hunt!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé nói trước. Xem lại 大自然, mẹ dừng trước mỗi hình, bé nói trước 花, 树 hoặc 彩虹. Mẹ hỏi “你喜欢什么？” (nǐ xǐhuan shénme), bé trả lời “我喜欢花。”.",
    "b": "我喜欢花。(wǒ xǐhuan huā)"
   },
   "words": {
    "en": [
     3,
     6,
     1,
     8
    ],
    "zh": [
     4,
     0
    ]
   },
   "doi": "Chuẩn bị picnic bốn mùa (10 phút): bé và mẹ chọn đồ ăn cho picnic ngày mai theo mùa: quả của mùa hè (dưa hấu, xoài), bánh của mùa thu (bánh, cốm nếu có), đồ uống ấm cho mùa đông (sữa ấm). Bé vẽ thực đơn và nói tên món, ghép với mùa.",
   "ob": "Ông bà cùng cháu chọn đồ ăn của từng mùa cho picnic ngày mai.",
   "toi": "Hát ru “Gió đưa gió đẩy, về rẫy ăn còng”. Mẹ ru chậm, bé nằm nghe. Mẹ hỏi: “Gió đưa mình đi đâu? Về sông ăn gì, về đồng ăn gì?” Bé trả lời: cá, cua.",
   "lyr": "Gió đưa gió đẩy, về rẫy ăn còng"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và picnic bốn mùa.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn tuần 2: 3 sao. Sao 1: bé kể lại 3 chặng trong truyện săn gấu. Sao 2: bé nói câu dài về một mùa (“It is cold in winter.”). Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần xem lại.",
    "b": "What a brave bear hunter!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 四季歌. Một sao nếu bé gọi được mùa của món ăn bằng tiếng Trung khi picnic.",
    "b": "我们去野餐！(wǒmen qù yěcān)"
   },
   "special": "Picnic từ vựng: mang đồ ăn ra sân, gọi tên Anh – Trung",
   "doi": "Picnic bốn mùa (20 phút): trải khăn ở sân, chia 4 góc khăn là 4 mùa (đặt tranh mùa ở mỗi góc). Bé bày đồ ăn vào đúng góc: dưa hấu ở góc hè, cốm hoặc bánh ở góc thu, sữa ấm ở góc đông, một bông hoa ở góc xuân. Ăn đến món nào, bé nói tên món và mùa bằng tiếng Anh hoặc tiếng Trung: “Watermelon – summer – 夏天”. Ăn xong bé tự gấp khăn, nhặt rác.",
   "ob": "Ông bà ngồi picnic với cháu, hỏi món này ăn vào mùa nào.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé: “Góc mùa nào trên khăn picnic con thích nhất?” Mẹ kể ở miền Nam có mùa mưa và mùa nắng; ở Trung Quốc, phía Bắc mùa đông có tuyết."
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ: bé tự chọn một video trong vòng để xem lại. Mẹ để bé hát và nhảy tự do. Cuối cùng hỏi: “What is your favourite season?”",
    "b": "What is your favourite season?"
   },
   "zh": {
    "v": 1,
    "t": "Ôn nhẹ: xem lại 春天在哪里, bé đi tìm một bông hoa trong nhà.",
    "b": "我找到春天了！(wǒ zhǎodào chūntiān le)"
   },
   "doi": "Chơi lại một trò web bé thích. Sau đó bé xem cốc hành lần cuối của vòng, đo lá non bằng ngón tay và vẽ vào sổ quan sát.",
   "ob": "Ông bà cùng cháu xem lá hành đã cao bao nhiêu.",
   "toi": "Mẹ và bé ôn hai tuần: bé chọn kể lại truyện Kiến và Châu Chấu hoặc Cáo, Thỏ và Gà trống. Mẹ hỏi: “Tuần sau mình học về mưa, gió, cầu vồng. Con đã thấy cầu vồng chưa?” Chúc bé ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[142] = {
 "sub": "Mưa, gió, cầu vồng, tuyết",
 "vocab": {
  "en": [
   [
    "rain",
    "🌧️",
    "mưa",
    false
   ],
   [
    "wind",
    "🌬️",
    "gió",
    false
   ],
   [
    "rainbow",
    "🌈",
    "cầu vồng",
    false
   ],
   [
    "snow",
    "❄️",
    "tuyết",
    false
   ],
   [
    "cloud",
    "☁️",
    "đám mây",
    false
   ],
   [
    "sun",
    "☀️",
    "mặt trời",
    false
   ],
   [
    "umbrella",
    "☂️",
    "cái ô",
    false
   ],
   [
    "splash",
    "💦",
    "té nước, lội bì bõm",
    true
   ],
   [
    "blow",
    "💨",
    "thổi",
    true
   ]
  ],
  "zh": [
   [
    "下雨",
    "xià yǔ",
    "trời mưa",
    "🌧️"
   ],
   [
    "刮风",
    "guā fēng",
    "có gió",
    "🌬️"
   ],
   [
    "彩虹",
    "cǎihóng",
    "cầu vồng",
    "🌈"
   ],
   [
    "下雪",
    "xià xuě",
    "tuyết rơi",
    "❄️"
   ],
   [
    "太阳",
    "tàiyáng",
    "mặt trời",
    "☀️"
   ],
   [
    "天气",
    "tiānqì",
    "thời tiết",
    "☁️"
   ],
   [
    "雨伞",
    "yǔsǎn",
    "cái ô",
    "☂️"
   ]
  ],
  "en_phr": [
   [
    "It is rainy today.",
    "rainy",
    "🌧️"
   ],
   [
    "I can see a rainbow!",
    "rainbow",
    "🌈"
   ],
   [
    "The wind can blow.",
    "blow",
    "🌬️"
   ],
   [
    "Snow is cold.",
    "Snow",
    "❄️"
   ]
  ],
  "zh_phr": [
   [
    "下雨了！",
    "下雨",
    "xià yǔ le",
    "trời mưa rồi",
    "🌧️"
   ],
   [
    "我看见彩虹。",
    "彩虹",
    "wǒ kànjiàn cǎihóng",
    "con nhìn thấy cầu vồng",
    "🌈"
   ],
   [
    "今天天气怎么样？",
    "天气",
    "jīntiān tiānqì zěnmeyàng",
    "hôm nay thời tiết thế nào?",
    "☁️"
   ],
   [
    "下雪了！",
    "下雪",
    "xià xuě le",
    "tuyết rơi rồi",
    "❄️"
   ]
  ],
  "seq": [
   [
    "☁️",
    "clouds come",
    "云来了"
   ],
   [
    "🌧️",
    "it rains",
    "下雨"
   ],
   [
    "☀️",
    "sun comes out",
    "太阳出来"
   ],
   [
    "🌈",
    "rainbow",
    "彩虹"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Weather – Sing-Along Show (Caitie) – chỉ xem đoạn đầu 5 phút",
    "u": "https://www.youtube.com/watch?v=DJOiSbVHcpg",
    "kind": "explainer",
    "min": 5,
    "ch": "Super Simple"
   },
   {
    "t": "Rain Rain Go Away",
    "u": "https://www.youtube.com/watch?v=Bkuy8OuqAYI",
    "kind": "song_action",
    "min": 2,
    "ch": "Little Baby Bum"
   },
   {
    "t": "How's The Weather?",
    "u": "https://www.youtube.com/watch?v=rD6FRDd9Hew",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Michael Rosen – We're Going on a Bear Hunt (xem tối đa 8 phút)",
    "u": "https://www.youtube.com/watch?v=LrWmTQz5yYc",
    "kind": "story",
    "min": 5,
    "ch": "Jon Robson (Digital Schools)"
   }
  ],
  "zh": [
   {
    "t": "今天天气怎么样? Chinese weather song (bài hát thời tiết)",
    "u": "https://www.youtube.com/watch?v=ML_h4DdThAw",
    "kind": "song_action",
    "min": 2,
    "ch": "Coolong Chinese"
   },
   {
    "t": "Kids Learn Chinese with Miaomiao Ep.93 – Snow Day (xem đoạn đầu 5 phút)",
    "u": "https://m.youtube.com/watch?v=U--NEA8PUd4",
    "kind": "lesson",
    "min": 5,
    "ch": "Miaomiao Kidz"
   },
   {
    "t": "大自然 The Nature Song (thiên nhiên)",
    "u": "https://www.youtube.com/watch?v=H2L43Sb7VSY",
    "kind": "song_action",
    "min": 1.5,
    "ch": "Cool Panda Chinese Learning"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: làm mưa, đón gió, bắt cầu vồng",
   "toi_vi": [
    {
     "t": "Ếch dưới ao",
     "type": "ve",
     "lyr": "Ếch ở dưới ao\nVừa ngớt mưa rào\nNhảy ra bì bõm\nẾch kêu \"ộp ộp\"\nẾch kêu \"ặp ặp\"\nThấy bác đi câu\nRủ nhau trốn mau\nẾch kêu \"ộp ộp\"\nẾch kêu \"ặp ặp\"."
    },
    {
     "t": "Câu đố cái ô",
     "type": "cau_do",
     "lyr": "Cầm chiếc cán bật lên\nNấm xòe hoa phía trên\nChe trời mưa cho bé\nChe cả đầu của mẹ\nCái gì thế, bé ơi?"
    }
   ],
   "book_vi": {
    "t": "Chú sẻ con và bông hoa bằng lăng (phiên bản sách tranh)",
    "author": "Phạm Hổ",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Thử thách: dự báo thời tiết nhí",
   "toi_vi": [
    {
     "t": "Lộn cầu vồng",
     "type": "dong_dao",
     "lyr": "Lộn cầu vồng\nNước trong nước chảy\nCó cô mười bảy\nCó chị mười ba\nHai chị em ta\nCùng lộn cầu vồng"
    },
    {
     "t": "Lạy trời mưa xuống",
     "type": "dong_dao",
     "lyr": "Lạy trời mưa xuống\nLấy nước tôi uống\nLấy ruộng tôi cày\nLấy đầy bát cơm\nLấy rơm đun bếp\nLạy ông nắng lên\nCho trẻ con chơi\nCho già bắt rận\nCho tôi đi cày"
    },
    {
     "t": "Con bò ngủ gốc cây đa",
     "type": "ve",
     "lyr": "Con bò ngủ gốc cây đa\nTrời mưa mát mẻ bò ta ca cười\nCon chim bay ở trên trời\nTrời mưa ướt cánh chim rơi xuống hồ\nCái bánh nằm ở trong lò\nTrời mưa tắt lửa vừa lo vừa buồn"
    }
   ],
   "book_vi": {
    "t": "Khu vườn trong tim ta",
    "author": "Phạm Quang Phúc (tác giả – họa sĩ)",
    "publisher": "chưa rõ NXB"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được rain, wind, rainbow, snow, cloud khi nhìn trời hoặc tranh"
  ],
  [
   "en",
   "Trả lời được “How's the weather?” bằng “It's rainy / sunny / windy.”"
  ],
  [
   "zh",
   "Nói được 下雨, 刮风, 彩虹, 下雪"
  ],
  [
   "zh",
   "Trả lời được 今天天气怎么样？ bằng một từ"
  ],
  [
   "td",
   "Đoán trước rồi kiểm tra được kết quả thí nghiệm mưa, gió, cầu vồng"
  ],
  [
   "td",
   "Ghi được bảng thời tiết 5 ngày bằng tranh"
  ],
  [
   "vi",
   "Đọc thuộc được một bài đồng dao về mưa hoặc cầu vồng"
  ],
  [
   "vd",
   "Làm động tác mưa rơi, gió thổi, lội nước, run vì lạnh theo lệnh"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này bé là nhà khoa học thời tiết. Hôm nay làm một đám mây mưa.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem đoạn đầu 5 phút “Weather – Sing-Along Show”. Dừng ở mỗi kiểu thời tiết, hỏi “What's the weather?” Mẹ nói: sunny, rainy, windy, snowy. Bé chỉ hình. Câu Yes/No: “Is it rainy? Yes or no?”",
    "b": "What's the weather like?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Xem 今天天气怎么样. Mỗi kiểu thời tiết, mẹ dừng và nói từ: 下雨 (xià yǔ), 太阳 (tàiyáng). Bé làm động tác: mưa rơi bằng ngón tay, mặt trời bằng hai tay tròn.",
    "b": "今天天气怎么样？(jīntiān tiānqì zěnmeyàng)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     5
    ],
    "zh": [
     0,
     4,
     5
    ]
   },
   "doi": "Đám mây mưa bằng bọt biển (10 phút): mẹ treo một miếng bọt biển khô trên miệng cốc. Bé dùng thìa nhỏ giọt nước lên bọt biển (bọt biển là đám mây). Lúc đầu không có gì rơi. Bé nhỏ tiếp, đến khi bọt biển đầy nước thì nước nhỏ xuống cốc: trời mưa! Mẹ nói: “Cloud – full – rain!” Bé nhắc lại “Rain!”. Mẹ ngồi cạnh, lau nước trên sàn.",
   "ob": "Ông bà cùng cháu nhỏ nước lên miếng bọt biển cho đến khi nước nhỏ xuống như mưa.",
   "toi": "Mẹ kể truyện “Sơn Tinh, Thủy Tinh” bằng lời của mẹ: Vua Hùng kén rể cho công chúa Mị Nương. Có hai chàng đến: Sơn Tinh thần núi và Thủy Tinh thần nước. Sơn Tinh mang lễ vật đến trước nên cưới được công chúa. Thủy Tinh giận, dâng nước lên cao, Sơn Tinh dời núi cao hơn nữa để chặn. Năm nào Thủy Tinh cũng dâng nước, nên nước mình có mùa mưa lũ. Chơi “nước dâng – núi cao”: mẹ giơ tay làm nước dâng, bé chồng gối làm núi cao hơn."
  },
  {
   "chuyen": "Hôm nay hát gọi mưa đi chỗ khác, rồi khám phá cái ô.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm. Xem “Rain Rain Go Away”. Bé ngọ nguậy ngón tay làm mưa rơi, vẫy tay “go away”. Mẹ dừng ở cảnh bạn nhỏ, hỏi “What do you need? An umbrella?” Bé giả vờ bung ô. Câu hỏi Where: “Where is the rain?” Bé chỉ lên.",
    "b": "Rain, rain, go away!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Xem đoạn đầu 5 phút Miaomiao “Snow Day”. Mẹ nói: nước mình hầu như không có tuyết, ở phía bắc Trung Quốc mùa đông có tuyết. Dừng ở cảnh tuyết rơi, mẹ nói 下雪 (xià xuě), bé xòe tay hứng tuyết.",
    "b": "下雪了！(xià xuě le)"
   },
   "words": {
    "en": [
     0,
     6,
     4
    ],
    "zh": [
     3,
     5
    ]
   },
   "doi": "Cái gì chống được mưa? (15 phút): mẹ chuẩn bị 4 miếng vật liệu: khăn giấy, vải cotton, túi ni lông (bé không trùm lên đầu), giấy bạc. Đặt từng miếng lên miệng cốc, bé dùng thìa “làm mưa” lên trên. Miếng nào nước không xuyên qua? Bé đoán trước rồi thử. Mẹ nói: “Umbrella is like this! Ô làm bằng vải không thấm nước.”",
   "ob": "Ông bà cùng cháu thử giội nước lên giấy, vải, túi ni lông xem cái nào không thấm.",
   "toi": "Đồng vè “Ếch dưới ao”. Mẹ đọc, bé nhảy như ếch và kêu “ộp ộp”, “ặp ặp”. Đến câu “thấy bác đi câu, rủ nhau trốn mau”, bé chui vào chăn. Mẹ hỏi: “Ếch nhảy ra khi nào? Khi trời mưa hay trời nắng?”",
   "lyr": "Ếch dưới ao"
  },
  {
   "chuyen": "Khám phá gió: gió không nhìn thấy, nhưng làm được nhiều việc.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại đoạn đầu 5 phút Weather Show. Mỗi kiểu thời tiết bé làm một động tác: sunny (giơ tay tròn), rainy (ngón tay rơi), windy (thổi “whoosh” và lắc lư), snowy (run run). Mẹ dừng bất chợt, bé đứng im, mẹ hỏi “Windy or sunny?”",
    "b": "It's windy! Whoosh!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật lại 今天天气怎么样, bé làm động tác từng kiểu thời tiết. Mẹ dạy từ mới 刮风 (guā fēng – có gió): mẹ thổi, bé lắc lư như cây trong gió.",
    "b": "刮风了！(guā fēng le)"
   },
   "words": {
    "en": [
     1,
     8,
     0,
     5
    ],
    "zh": [
     1,
     0,
     4
    ]
   },
   "doi": "Cuộc đua bằng hơi gió (10 phút): bé thổi qua ống hút để đẩy một quả bóng bàn hoặc một mẩu giấy vo tròn to bằng quả mận trên bàn. Thử thổi cái lá, cái thìa nhựa: cái nào đi xa? Cái nào không nhúc nhích? Mẹ nói: “Blow! The wind can blow.” Ra cửa sổ, buộc một dải giấy dài 20 cm vào cây bút, xem gió có làm dải giấy bay không.",
   "ob": "Ông bà cùng cháu thổi giấy vo tròn bằng ống hút và xem dải giấy bay trong gió.",
   "toi": "Mẹ đọc sách “Chú sẻ con và bông hoa bằng lăng” (Phạm Hổ, NXB Kim Đồng). Đọc xong hỏi: “Hoa bằng lăng nở vào mùa nào? Nếu có mưa, có gió, chú sẻ làm gì?”"
  },
  {
   "chuyen": "Hôm nay mình bắt cầu vồng trong nhà!",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật “Rain Rain Go Away”, bé cầm ô thật (đã gập) hoặc ô giấy, bung ô đúng lúc nghe “rain”. Hết bài, bé đổi lời: mẹ hát “Sun, sun, come and play”, bé giơ tay làm mặt trời. Mẹ hỏi “Rain or sun?”",
    "b": "Rain, rain, go away. Come again another day!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – thí nghiệm nhỏ. Xem lại đoạn đầu Snow Day, rồi mẹ lấy một viên đá: bé cầm thử nói 冷 (lěng – lạnh). Mẹ nói tuyết cũng là nước đông lại như đá. Bé nói “下雪了！” khi rắc giấy trắng xé nhỏ (mảnh to) từ trên cao.",
    "b": "雪很冷。(xuě hěn lěng)"
   },
   "words": {
    "en": [
     0,
     6,
     5
    ],
    "zh": [
     3,
     5
    ]
   },
   "doi": "Bắt cầu vồng (15 phút): buổi sáng có nắng, mẹ đặt một cốc thủy tinh đầy nước lên bậu cửa sổ chỗ có nắng chiếu, đặt tờ giấy trắng dưới sàn. Xoay cốc từ từ cho đến khi thấy dải màu trên giấy: cầu vồng! (Nếu không có nắng, dùng đèn pin chiếu qua cốc nước hoặc chiếc đĩa CD.) Bé đếm màu bằng tiếng Anh và nói “I can see a rainbow!”. Mẹ cầm cốc thủy tinh.",
   "ob": "Ông bà cầm cốc nước đặt chỗ nắng chiếu lên giấy trắng, cháu tìm cầu vồng và đếm màu.",
   "toi": "Bé kể lại truyện “Sơn Tinh, Thủy Tinh”. Mẹ đưa bé một cái gối (núi) và một cái khăn xanh (nước). Bé kể và dùng đồ vật diễn lại. Mẹ hỏi: “Vì sao năm nào cũng có mùa mưa lũ? Ai thắng?”"
  },
  {
   "chuyen": "Bé nói trước video: hôm nay bé là người dẫn chương trình thời tiết.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Xem lại đoạn đầu 5 phút Weather Show, mẹ dừng trước mỗi kiểu thời tiết, bé nói trước: “Sunny!”, “Rainy!”, “Windy!”. Sau đó bé nhìn ra cửa sổ và nói câu dự báo: “Today, it is sunny.” (hoặc thời tiết thật hôm nay).",
    "b": "Today, it is sunny."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé trả lời trước. Bật 今天天气怎么样, mẹ dừng ngay sau câu hỏi trong bài, bé trả lời trước bằng thời tiết thật hôm nay: 下雨, 刮风 hoặc 太阳.",
    "b": "今天下雨。(jīntiān xià yǔ)"
   },
   "words": {
    "en": [
     0,
     1,
     3,
     5
    ],
    "zh": [
     0,
     1,
     4,
     5
    ]
   },
   "doi": "Chuẩn bị sách nhỏ “Thời tiết của con” (10 phút): mẹ gấp 2 tờ A4 thành sách 8 trang. Bé chọn 4 tranh sẽ vẽ ngày mai: mưa, gió, cầu vồng, tuyết. Mẹ cắt sẵn bông tuyết giấy (gấp giấy, mẹ cắt) để bé dán vào trang tuyết.",
   "ob": "Ông bà gấp sách nhỏ với cháu và cắt bông tuyết giấy.",
   "toi": "Câu đố dân gian “Câu đố cái ô”. Mẹ đọc, bé đoán. Mẹ bung một chiếc ô thật trong nhà (cẩn thận gọng ô), hai mẹ con ngồi dưới ô kể chuyện một ngày mưa. Bé nói “Umbrella!” và “雨伞！” (yǔsǎn).",
   "lyr": "Câu đố cái ô"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và làm sách nhỏ “Thời tiết của con”.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé nói đúng 4 kiểu thời tiết bằng tiếng Anh. Sao 2: bé kể kết quả một thí nghiệm (mây bọt biển, ô, gió, cầu vồng). Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần xem lại.",
    "b": "Weather scientist! Three stars!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 今天天气怎么样. Một sao nếu bé trả lời đúng thời tiết hôm nay bằng tiếng Trung.",
    "b": "今天天气很好！(jīntiān tiānqì hěn hǎo)"
   },
   "special": "Làm sách nhỏ của bé: vẽ, dán tranh các từ của tuần",
   "doi": "Sách nhỏ “Thời tiết của con” (15 phút): bé vẽ hoặc dán vào 4 trang: mây mưa (rain – 下雨), chiếc lá bay (wind – 刮风), cầu vồng 7 màu (rainbow – 彩虹), bông tuyết giấy (snow – 下雪). Mẹ viết tên tiếng Anh và tiếng Trung dưới tranh. Trang cuối bé vẽ mình cầm ô. Bé đọc sách cho bố nghe, mỗi trang một câu.",
   "ob": "Ông bà nghe cháu đọc sách nhỏ về mưa, gió, cầu vồng, tuyết.",
   "toi": "Buổi tối nhẹ nhàng: đọc lại cuốn sách nhỏ. Mẹ hỏi: “Con thích thời tiết nào nhất? Vì sao?” Mẹ kể một ngày mưa to hồi mẹ còn nhỏ."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và đi dạo xem mây.",
   "en": {
    "v": 1,
    "t": "Ôn tập: bé chọn video thích nhất (Weather Show 5 phút đầu hoặc Rain Rain Go Away) để xem lại cùng bố. Bé dạy bố động tác. Chơi lại một trò web bé thích.",
    "b": "Daddy, it's rainy! Open the umbrella!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn tập: xem lại đoạn đầu Snow Day, bé kể cho bố về tuyết, chèn từ 下雪, 冷.",
    "b": "爸爸，下雪了！(bàba, xià xuě le)"
   },
   "doi": "Ngắm mây (15 phút): cả nhà ra sân hoặc công viên, nằm hoặc ngồi nhìn mây. Bé tìm mây hình con vật, hình khủng long. Mây trắng hay mây đen? Mây đen có thể sắp mưa. Bé nói “Cloud!” và đoán “Rain? Yes or no?”. Không nhìn thẳng vào mặt trời.",
   "ob": "Ông bà cùng cháu ngắm mây, đoán mây giống con gì và có mưa không.",
   "toi": "Ôn tuần: bé đọc lại “Ếch dưới ao” cùng mẹ, nhảy như ếch. Mẹ hỏi: “Tuần sau mình làm người dự báo thời tiết. Con muốn dự báo cho ai nghe?”"
  },
  {
   "chuyen": "Tuần Thử thách: mỗi sáng bé là người dự báo thời tiết.",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và đố. Trước khi xem, bé nhìn ra cửa sổ. Xem “How's The Weather?”. Mẹ dừng ở mỗi câu hỏi “How's the weather?”, bé trả lời trước khi video trả lời: “It's sunny!” hoặc thời tiết bé thấy. Đúng được một sao.",
    "b": "How's the weather? It's sunny!"
   },
   "zh": {
    "v": 2,
    "t": "Thử thách “ai chỉ nhanh hơn”: xem 大自然. Mẹ và bé thi nhau chỉ: nghe 彩虹 chỉ vào cầu vồng, nghe 花 chỉ hoa. Ai chỉ đúng trước được một sao.",
    "b": "彩虹在这儿！(cǎihóng zài zhèr)"
   },
   "words": {
    "en": [
     0,
     1,
     4,
     5
    ],
    "zh": [
     2,
     4
    ]
   },
   "doi": "Bảng thời tiết 5 ngày (10 phút): mẹ kẻ bảng 5 ô (thứ Hai đến thứ Sáu) dán cạnh cửa sổ. Mỗi sáng bé nhìn trời, vẽ ký hiệu vào ô: mặt trời, mây, mưa, gió. Bé nói bằng tiếng Anh: “Monday – sunny.” và tiếng Trung một từ. Hôm nay ô đầu tiên được một sao.",
   "ob": "Ông bà nhắc cháu mỗi sáng nhìn trời và vẽ ký hiệu thời tiết vào bảng.",
   "toi": "Bé kể lại truyện “Cóc kiện Trời” đã nghe ở vòng trước. Mẹ chỉ gợi bằng câu hỏi: “Vì sao Cóc lên trời? Ai đi cùng Cóc? Bây giờ khi nào Trời cho mưa?” Bé nghiến răng “két két” làm Cóc gọi mưa."
  },
  {
   "chuyen": "Thử thách săn gấu trong thời tiết xấu: ai dũng cảm hơn?",
   "en": {
    "v": 3,
    "t": "Lần 1 – xem và làm theo. Xem Michael Rosen đọc “We're Going on a Bear Hunt” (tối đa 8 phút). Bé làm theo mọi động tác: lội nước “splash”, đi trong bão tuyết, gió “hoooo”. Mẹ chấm sao: mỗi chặng bé làm đúng âm thanh và động tác được một sao.",
    "b": "Splash, splosh! Splash, splosh!"
   },
   "zh": {
    "v": 0,
    "t": "Thử thách bé nói trước: bật 今天天气怎么样, mẹ dừng trước mỗi từ thời tiết, bé nói trước. Đúng 3 lần liền được một sao.",
    "b": "你先说！下雨！(nǐ xiān shuō: xià yǔ)"
   },
   "words": {
    "en": [
     3,
     1,
     7
    ],
    "zh": [
     0,
     1,
     4
    ]
   },
   "doi": "Đường đua thời tiết (15 phút): mẹ dán 4 tấm thẻ thời tiết ở 4 góc phòng. Mẹ hô bằng tiếng Anh “Rainy!”, bé chạy đến góc mưa và làm động tác mưa rơi; “Windy!”, chạy đến góc gió và thổi; “Snowy!”, chạy đến góc tuyết và run. Đổi sang tiếng Trung: 下雨, 刮风, 下雪. Đúng và nhanh được sao.",
   "ob": "Ông bà hô tên thời tiết, cháu chạy đến đúng góc và làm động tác.",
   "toi": "Đồng dao “Lộn cầu vồng”. Mẹ và bé đứng đối diện, nắm hai tay nhau, đọc đồng dao và đung đưa tay. Đến câu cuối “cùng lộn cầu vồng”, cả hai cùng xoay người qua tay (làm chậm, cẩn thận). Đọc 2 lần, lần 2 bé đọc to.",
   "lyr": "Lộn cầu vồng"
  },
  {
   "chuyen": "Đố vui thời tiết: mẹ đố bằng động tác, bé trả lời bằng từ.",
   "en": {
    "v": 2,
    "t": "Lần 2 – thi trả lời nhanh. Bật “How's The Weather?”, mẹ tắt tiếng phần trả lời, bé nói thay video: “It's rainy!”, “It's windy!”. Thử thách câu dài: mẹ hỏi “What do you need on a rainy day?” Bé trả lời “I need an umbrella.” Đủ câu được hai sao.",
    "b": "I need an umbrella."
   },
   "zh": {
    "v": 2,
    "t": "Chuyển ngữ một từ: xem lại 大自然. Sau bài, mẹ nói tiếng Anh “rainbow”, bé nói “彩虹”; mẹ nói “rain”, bé nói “下雨”; mẹ nói “snow”, bé nói “下雪”. Mỗi từ đúng một sao.",
    "b": "Rainbow，中文是“彩虹”。(zhōngwén shì cǎihóng)"
   },
   "words": {
    "en": [
     0,
     6,
     1,
     5
    ],
    "zh": [
     2,
     0,
     3
    ]
   },
   "doi": "Đoán thời tiết bằng động tác (10 phút): mẹ làm động tác (che ô, quạt nóng, run lạnh, tóc bay trong gió), bé đoán thời tiết bằng tiếng Anh hoặc tiếng Trung. Đổi vai: bé làm, mẹ đoán. Ghi bảng thời tiết ô thứ Tư.",
   "ob": "Ông bà làm động tác che ô, quạt, run lạnh, cháu đoán thời tiết.",
   "toi": "Mẹ đọc sách “Khu vườn trong tim ta” (Phạm Quang Phúc). Mẹ hỏi: “Trong khu vườn có những gì? Khi trời mưa, khu vườn thế nào? Khi có cầu vồng thì sao?”"
  },
  {
   "chuyen": "Thử thách săn gấu lần 2: bé dẫn đường cho cả nhà.",
   "en": {
    "v": 3,
    "t": "Lần 2 – bé nói trước video. Xem lại “Bear Hunt”, mẹ dừng trước mỗi chặng, bé nói trước: “Grass!”, “River!”, “Mud!”, “Snowstorm!”. Thử thách: bé nói câu lặp “We can't go over it. We can't go under it.” cùng Michael Rosen. Nói đủ được hai sao.",
    "b": "We can't go over it!"
   },
   "zh": {
    "v": 0,
    "t": "Thử thách câu hỏi: bật 今天天气怎么样, bé hỏi mẹ câu “今天天气怎么样？”, mẹ trả lời. Đổi vai. Hỏi đúng câu được một sao.",
    "b": "今天天气怎么样？(jīntiān tiānqì zěnmeyàng)"
   },
   "words": {
    "en": [
     3,
     1,
     7,
     0
    ],
    "zh": [
     5,
     0,
     1
    ]
   },
   "doi": "Tập 3 câu cho cuộc gọi ông bà (10 phút): bé chọn 3 câu: “It is rainy today.” (hoặc thời tiết thật), “I can see a rainbow!”, “今天天气怎么样？” để hỏi ông bà. Tập trước gương, cầm cuốn sách nhỏ minh họa. Ghi bảng thời tiết ô thứ Năm.",
   "ob": "Ông bà nghe cháu tập ba câu về thời tiết.",
   "toi": "Đồng dao “Lạy trời mưa xuống”. Mẹ đọc chậm, giải thích: ngày xưa người nông dân cần mưa để có nước tưới lúa, cần nắng để trẻ con đi chơi. Bé làm động tác: mưa rơi, cày ruộng, nắng lên. Hỏi: “Con thích mưa hay nắng?”",
   "lyr": "Lạy trời mưa xuống"
  },
  {
   "chuyen": "Thử thách cuối tuần: bé đọc bản tin thời tiết cả tuần.",
   "en": {
    "v": 2,
    "t": "Lần 3 – bé làm phát thanh viên. Xem lại “How's The Weather?” một lần. Rồi bé đứng cạnh bảng thời tiết 5 ngày, đọc “bản tin”: “Monday – sunny. Tuesday – rainy…” Mẹ quay video ngắn. Đọc đủ 5 ngày được ba sao.",
    "b": "Here is the weather report!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé nói trước. Xem lại 大自然, mẹ dừng trước mỗi hình, bé nói trước. Thêm câu: “我看见彩虹。” (wǒ kànjiàn cǎihóng) khi chỉ cầu vồng.",
    "b": "我看见彩虹！(wǒ kànjiàn cǎihóng)"
   },
   "words": {
    "en": [
     0,
     1,
     4,
     5
    ],
    "zh": [
     2,
     4,
     0
    ]
   },
   "doi": "Ghi ô cuối của bảng thời tiết (10 phút): bé vẽ ô thứ Sáu, đếm xem tuần này có mấy ngày nắng, mấy ngày mưa, nói bằng tiếng Anh: “Three sunny days!”. Bé chọn đồ để mang lên cuộc gọi ngày mai: bảng thời tiết và sách nhỏ.",
   "ob": "Ông bà cùng cháu đếm số ngày nắng, ngày mưa trong tuần.",
   "toi": "Đồng vè “Con bò ngủ gốc cây đa”. Mẹ đọc, bé diễn: bò ngủ mát mẻ, chim bay ướt cánh rơi xuống hồ, bánh trong lò tắt lửa. Mẹ hỏi: “Trời mưa ai vui, ai buồn?” Bé đếm: bò vui, chim và cái bánh buồn.",
   "lyr": "Con bò ngủ gốc cây đa"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và gọi video kể thời tiết cho ông bà.",
   "en": {
    "v": 3,
    "t": "Thử thách lớn tuần 2: 3 sao. Sao 1: bé nói đủ câu trả lời “It's rainy / sunny / windy.” Sao 2: bé đọc bản tin thời tiết 5 ngày. Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất trong tuần xem lại.",
    "b": "Great weather report!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 今天天气怎么样 trước khi gọi ông bà. Một sao nếu bé tự hỏi ông bà câu 今天天气怎么样？",
    "b": "爷爷奶奶，今天天气怎么样？(yéye nǎinai, jīntiān tiānqì zěnmeyàng)"
   },
   "special": "Gọi video ông bà: bé nói 3 câu tiếng Anh, tiếng Trung",
   "doi": "Gọi video ông bà (10–15 phút): bé giơ bảng thời tiết và sách nhỏ lên camera, kể bằng tiếng Việt thí nghiệm bắt cầu vồng. Bé nói 3 câu đã tập, rồi hỏi ông bà: “Ở quê hôm nay trời thế nào ạ?” và câu tiếng Trung “今天天气怎么样？”. Ông bà trả lời, bé nói lại thời tiết ở quê bằng tiếng Anh nếu được (rainy, sunny).",
   "ob": "Ông bà gọi video, kể thời tiết ở quê cho cháu và nghe cháu đọc bản tin.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé thời tiết ở chỗ ông bà có giống nhà mình không. Mẹ kể: cùng một ngày, nơi này mưa, nơi kia nắng, Việt Nam và Trung Quốc cũng vậy."
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 1,
    "t": "Ôn nhẹ: bé tự chọn một video trong vòng để xem lại (Weather Show chỉ 5 phút đầu). Mẹ để bé vận động tự do. Cuối cùng hỏi: “How's the weather today?”",
    "b": "How's the weather today?"
   },
   "zh": {
    "v": 2,
    "t": "Ôn nhẹ: xem lại 大自然 một lần, bé chỉ cầu vồng.",
    "b": "彩虹真美！(cǎihóng zhēn měi)"
   },
   "doi": "Chơi lại một trò web bé thích. Sau đó bé gỡ bảng thời tiết, cất vào hộp cùng sách nhỏ, dán một ngôi sao lên bìa.",
   "ob": "Ông bà khen bảng thời tiết của cháu và giúp cháu cất gọn.",
   "toi": "Mẹ và bé ôn hai tuần: bé chọn đọc lại một bài đồng dao (Lộn cầu vồng hoặc Ếch dưới ao). Mẹ hỏi: “Tuần sau mình đi vòng quanh thế giới: Việt Nam, Trung Quốc và các nước. Con biết nước nào?” Chúc bé ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[143] = {
 "sub": "Việt Nam quê em, Trung Quốc, các nước",
 "vocab": {
  "en": [
   [
    "Vietnam",
    "🇻🇳",
    "Việt Nam",
    false
   ],
   [
    "China",
    "🇨🇳",
    "Trung Quốc",
    false
   ],
   [
    "flag",
    "🚩",
    "lá cờ",
    false
   ],
   [
    "map",
    "🗺️",
    "bản đồ",
    false
   ],
   [
    "world",
    "🌏",
    "thế giới",
    false
   ],
   [
    "country",
    "🏞️",
    "đất nước",
    false
   ],
   [
    "I live in",
    "🏠",
    "con sống ở",
    false
   ],
   [
    "goodbye",
    "👋",
    "tạm biệt",
    false
   ],
   [
    "see you",
    "🔜",
    "hẹn gặp lại",
    false
   ],
   [
    "wave",
    "🙋",
    "vẫy tay",
    true
   ]
  ],
  "zh": [
   [
    "越南",
    "Yuènán",
    "Việt Nam",
    "🇻🇳"
   ],
   [
    "中国",
    "Zhōngguó",
    "Trung Quốc",
    "🇨🇳"
   ],
   [
    "国旗",
    "guóqí",
    "quốc kỳ",
    "🚩"
   ],
   [
    "你好",
    "nǐ hǎo",
    "xin chào",
    "👋"
   ],
   [
    "再见",
    "zàijiàn",
    "tạm biệt",
    "🔜"
   ],
   [
    "朋友",
    "péngyou",
    "bạn bè",
    "🤝"
   ],
   [
    "地图",
    "dìtú",
    "bản đồ",
    "🗺️"
   ]
  ],
  "en_phr": [
   [
    "I live in Vietnam.",
    "Vietnam",
    "🇻🇳"
   ],
   [
    "This is the flag of China.",
    "China",
    "🇨🇳"
   ],
   [
    "Look at the map!",
    "map",
    "🗺️"
   ],
   [
    "Goodbye! See you!",
    "See you",
    "👋"
   ]
  ],
  "zh_phr": [
   [
    "我是越南人。",
    "越南",
    "wǒ shì Yuènán rén",
    "con là người Việt Nam",
    "🇻🇳"
   ],
   [
    "这是中国国旗。",
    "国旗",
    "zhè shì Zhōngguó guóqí",
    "đây là quốc kỳ Trung Quốc",
    "🇨🇳"
   ],
   [
    "你是哪国人？",
    "哪国",
    "nǐ shì nǎ guó rén",
    "bạn là người nước nào?",
    "🌏"
   ]
  ],
  "seq": [
   [
    "🗺️",
    "look at the map",
    "看地图"
   ],
   [
    "🇻🇳",
    "find Vietnam",
    "找越南"
   ],
   [
    "🇨🇳",
    "find China",
    "找中国"
   ],
   [
    "👋",
    "say hello",
    "说你好"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "Bye Bye Goodbye",
    "u": "https://www.youtube.com/watch?v=PraN5ZoSjiY",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "The More We Get Together",
    "u": "https://www.youtube.com/watch?v=SpzLA-w1I8s",
    "kind": "song_action",
    "min": 2,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "Everyone Belongs – Read Aloud Picture Book (xem tối đa 8 phút)",
    "u": "https://www.youtube.com/watch?v=ajd_XQ2sk2Q",
    "kind": "story",
    "min": 6,
    "ch": "Brightly Storytime"
   },
   {
    "t": "Celebrating Chinese New Year with Peppa",
    "u": "https://www.youtube.com/watch?v=cIZeBnX9pJo",
    "kind": "story",
    "min": 3.6,
    "ch": "Peppa Pig - Official Channel"
   }
  ],
  "zh": [
   {
    "t": "你是哪国人？What's your nationality? (con là người nước nào?)",
    "u": "https://www.youtube.com/watch?v=CLuDpdt5Ry8",
    "kind": "song_action",
    "min": 2,
    "ch": "Groovi Pauli"
   },
   {
    "t": "十二生肖 Chinese Zodiacs (12 con giáp; xem đoạn đầu 5 phút)",
    "u": "https://m.youtube.com/watch?v=Ov0jKQb2yhI",
    "kind": "lesson",
    "min": 5,
    "ch": "Little Chinese Learners"
   },
   {
    "t": "【7】你是哪国人？What Is Your Nationality? 《快乐幼儿华语》",
    "u": "https://www.youtube.com/watch?v=LxEqr5Kpj8A",
    "kind": "story",
    "min": 1.6,
    "ch": "ChineseClass365 中文加油站"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Ca nhạc: hát chào các bạn khắp thế giới",
   "toi_vi": [
    {
     "t": "Thăng Long Hà Nội đô thành",
     "type": "ca_dao",
     "lyr": "Thăng Long Hà Nội đô thành\nNước non ai vẽ nên tranh họa đồ."
    },
    {
     "t": "Nhiễu điều phủ lấy giá gương",
     "type": "ca_dao",
     "lyr": "Nhiễu điều phủ lấy giá gương\nNgười trong một nước phải thương nhau cùng"
    }
   ],
   "book_vi": {
    "t": "Vòng quanh thế giới",
    "author": "chưa rõ tên tác giả",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Kể chuyện: chuyện của Việt Nam, Trung Quốc và bạn bè",
   "toi_vi": [
    {
     "t": "Bầu ơi thương lấy bí cùng",
     "type": "ca_dao",
     "lyr": "Bầu ơi thương lấy bí cùng\nTuy rằng khác giống nhưng chung một giàn"
    },
    {
     "t": "Đường vô xứ Nghệ quanh quanh",
     "type": "ca_dao",
     "lyr": "Đường vô xứ Nghệ quanh quanh\nNon xanh nước biếc như tranh họa đồ"
    },
    {
     "t": "Cần Thơ gạo trắng nước trong",
     "type": "ca_dao",
     "lyr": "Cần Thơ gạo trắng nước trong\nAi đi đến đó lòng không muốn về."
    }
   ],
   "book_vi": {
    "t": "Đến thăm thành phố của em (bộ: Sapa mù sương, Huế miền đẹp miền thơ, …)",
    "author": "chưa rõ tên tác giả",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Nói được câu “I live in Vietnam.”"
  ],
  [
   "en",
   "Chỉ được Việt Nam và Trung Quốc trên bản đồ và nói tên tiếng Anh"
  ],
  [
   "zh",
   "Nói được câu 我是越南人。 và trả lời 你是哪国人？"
  ],
  [
   "zh",
   "Nói được 越南, 中国, 国旗"
  ],
  [
   "vi",
   "Kể lại được truyện Con Rồng cháu Tiên bằng 4–5 câu"
  ],
  [
   "td",
   "Đếm và so sánh số sao trên cờ Việt Nam và cờ Trung Quốc"
  ],
  [
   "xh",
   "Biết mỗi nước có tiếng nói, món ăn, lá cờ riêng và tôn trọng bạn khác mình"
  ],
  [
   "vd",
   "Vẫy tay, nắm tay bạn đi vòng tròn, múa lân theo nhạc"
  ]
 ],
 "days": [
  {
   "chuyen": "Tuần này bé đi vòng quanh thế giới: bắt đầu từ Việt Nam.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và vẫy tay. Xem “Bye Bye Goodbye”. Mỗi lần nghe “bye bye”, bé vẫy tay. Mẹ dừng giữa bài, hỏi “Goodbye or hello?” Bé trả lời. Hết bài mẹ mở bản đồ thế giới (sách, tờ in hoặc quả địa cầu) và chỉ: “This is Vietnam. We live in Vietnam.”",
    "b": "Bye bye! See you!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và chỉ. Xem 你是哪国人？. Mỗi lần nghe 中国 (Zhōngguó), mẹ chỉ vào Trung Quốc trên bản đồ; nghe tên nước khác, mẹ chỉ chỗ khác. Mẹ nói: “Còn mình là 越南 (Yuènán).”",
    "b": "我是越南人。(wǒ shì Yuènán rén)"
   },
   "words": {
    "en": [
     0,
     3,
     7,
     9
    ],
    "zh": [
     0,
     1,
     6
    ]
   },
   "doi": "Tìm nhà mình trên bản đồ (15 phút): mẹ mở bản đồ Việt Nam (sách, tờ in hoặc điện thoại xem cùng mẹ trong 2 phút). Bé tìm hình chữ S, chỉ chỗ Hà Nội và chỗ nhà mình (hoặc quê ông bà). Mẹ dán một ngôi sao giấy lên chỗ đó. Bé nói “I live in Vietnam.” và “我是越南人。”.",
   "ob": "Ông bà chỉ cho cháu quê ông bà trên bản đồ Việt Nam hình chữ S.",
   "toi": "Mẹ kể truyện “Con Rồng cháu Tiên” bằng lời của mẹ: Lạc Long Quân là con thần biển, Âu Cơ là tiên trên núi. Hai người lấy nhau, Âu Cơ sinh ra một bọc trăm trứng, nở thành trăm người con khỏe mạnh. Năm mươi con theo cha xuống biển, năm mươi con theo mẹ lên núi, cùng giữ gìn đất nước. Vì thế người Việt gọi nhau là “đồng bào”, con Rồng cháu Tiên. Hỏi bé: “Một bọc có bao nhiêu trứng? Con là con Rồng cháu Tiên đấy!”"
  },
  {
   "chuyen": "Hôm nay nắm tay nhau hát: bạn của con là bạn của mẹ.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm. Xem “The More We Get Together”. Mẹ và bé nắm tay đung đưa. Ở câu “your friends are my friends”, bé chỉ vào mẹ rồi chỉ vào mình. Mẹ dừng hỏi “Are we friends? Yes or no?” Bé đáp “Yes!” và ôm mẹ.",
    "b": "The more we get together, the happier we'll be!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem và chỉ. Xem đoạn đầu 5 phút 十二生肖 (12 con giáp). Mẹ dừng ở mỗi con vật, bé gọi tên tiếng Việt. Mẹ nói: Trung Quốc có con thỏ, Việt Nam có con mèo, còn lại rất giống nhau. Bé tìm con giáp của mình.",
    "b": "这是中国。(zhè shì Zhōngguó)"
   },
   "words": {
    "en": [
     4,
     9
    ],
    "zh": [
     1,
     5
    ]
   },
   "doi": "Vẽ hai lá cờ (15 phút): mẹ và bé vẽ cờ Việt Nam (nền đỏ, một ngôi sao vàng) và cờ Trung Quốc (nền đỏ, một sao vàng to và bốn sao nhỏ). Bé đếm sao: Việt Nam có 1, Trung Quốc có 5. Mẹ hỏi: “Which flag has more stars?” Bé chỉ và nói “China!” Dán hai lá cờ lên tường.",
   "ob": "Ông bà cùng cháu vẽ cờ Việt Nam và cờ Trung Quốc, đếm số ngôi sao.",
   "toi": "Ca dao “Thăng Long Hà Nội đô thành”. Mẹ đọc chậm, giải thích: Thăng Long là tên cũ của Hà Nội, thủ đô của nước mình, đẹp như một bức tranh. Mẹ hỏi: “Con đã đến Hà Nội chưa? Con nhớ chỗ nào?” Nếu nhà ở nơi khác, mẹ kể một điều đẹp của quê mình.",
   "lyr": "Thăng Long Hà Nội đô thành"
  },
  {
   "chuyen": "Vòng quanh thế giới bằng bài hát: nhạc dừng ở nước nào, bé chào nước đó.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật “Bye Bye Goodbye”, mẹ đặt 4 thú bông quanh phòng, mỗi con cầm một lá cờ giấy (Việt Nam, Trung Quốc và hai nước khác bé biết). Bé đi vòng quanh, vẫy tay chào từng con theo bài hát. Freeze: mẹ dừng nhạc, bé đứng cạnh con nào thì nói “Goodbye, China!” hoặc tên nước đó.",
    "b": "Goodbye, China! See you!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật lại 你是哪国人？, mẹ hỏi theo bài “你是哪国人？” và bé giơ cờ Việt Nam trả lời “我是越南人！”. Mẹ giơ cờ Trung Quốc, bé nói “中国！”.",
    "b": "你是哪国人？(nǐ shì nǎ guó rén)"
   },
   "words": {
    "en": [
     1,
     0,
     7,
     8
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Chào bằng nhiều thứ tiếng (10 phút): mẹ và bé tập chào bằng 3 thứ tiếng kèm động tác: “Xin chào” (khoanh tay cúi đầu), “Hello” (vẫy tay), “你好” (cười, gật đầu). Bé chào từng người trong nhà bằng một thứ tiếng khác nhau. Mẹ hỏi: “Ở Trung Quốc người ta chào thế nào?” Bé đáp “你好！”.",
   "ob": "Ông bà nghe cháu chào bằng tiếng Việt, tiếng Anh, tiếng Trung và chào lại cháu.",
   "toi": "Mẹ đọc sách “Vòng quanh thế giới” (NXB Kim Đồng). Mỗi trang một nước, bé chỉ lá cờ hoặc con vật nổi tiếng. Mẹ hỏi: “Con muốn đi thăm nước nào? Ở đó con sẽ chào thế nào?”"
  },
  {
   "chuyen": "Hôm nay bé làm “hướng dẫn viên” giới thiệu 12 con giáp.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật “The More We Get Together”, cả nhà nắm tay đi vòng tròn. Mỗi lần nghe “together”, mọi người đứng sát lại; “happier”, mọi người cười thật to. Mẹ dừng hỏi “Who are your friends?” Bé nói tên bạn ở lớp.",
    "b": "Who are your friends?"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Xem lại đoạn đầu 5 phút 十二生肖. Mỗi con giáp, bé làm động tác: chuột rúc, trâu húc, hổ gầm, thỏ nhảy. Mẹ dừng hỏi “这是什么？”, bé nói tên tiếng Việt, mẹ nói tên tiếng Trung trong video.",
    "b": "我属…（wǒ shǔ…）"
   },
   "words": {
    "en": [
     4,
     9
    ],
    "zh": [
     1,
     5,
     3
    ]
   },
   "doi": "Hai bàn ăn, hai đất nước (15 phút): mẹ chuẩn bị 2 khay: khay Việt Nam có bát, đũa, một chiếc bánh chưng nhỏ hoặc tranh phở; khay Trung Quốc có bát, đũa, một chiếc bánh bao (包子 bāozi). Bé so sánh: giống gì (đều dùng đũa), khác gì (món ăn). Bé nói “Vietnam – phở”, “China – 包子”. Ăn thử bánh bao cùng nhau.",
   "ob": "Ông bà cho cháu ăn thử bánh bao và kể món ăn Việt Nam ông bà thích.",
   "toi": "Bé kể lại truyện “Con Rồng cháu Tiên”. Mẹ đưa 10 quả trứng giấy (tượng trưng trăm trứng), bé chia một nửa đi “biển” (khăn xanh), một nửa lên “núi” (gối). Bé đếm mỗi bên 5 quả bằng tiếng Anh. Mẹ hỏi: “Vì sao người Việt gọi nhau là đồng bào?”"
  },
  {
   "chuyen": "Bé hát trước, video hát sau: hôm nay bé là ca sĩ của thế giới.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé hát trước video. Bật “Bye Bye Goodbye”, mẹ tắt tiếng câu cuối, bé tự hát “Bye bye, goodbye!” và vẫy tay. Sau đó bé nói câu dài: “Goodbye! See you!” với từng thú bông có cờ.",
    "b": "Goodbye! See you!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé trả lời trước. Bật 你是哪国人？, mẹ dừng ngay sau câu hỏi trong bài, bé trả lời trước: “我是越南人。”. Mẹ hỏi thêm “他是哪国人？” (tā shì nǎ guó rén – bạn ấy là người nước nào?) và chỉ thú bông cầm cờ Trung Quốc, bé đáp “中国人”.",
    "b": "他是中国人。(tā shì Zhōngguó rén)"
   },
   "words": {
    "en": [
     7,
     8,
     9,
     0
    ],
    "zh": [
     0,
     1,
     3,
     4
    ]
   },
   "doi": "Chuẩn bị “Vào bếp” cho ngày mai (10 phút): mẹ và bé chọn món cuốn kiểu Việt Nam: bánh tráng, rau xà lách, trứng chiên thái sợi, bún. Bé vẽ danh sách nguyên liệu, kiểm tra trong bếp còn thiếu gì. Mẹ kể: ở Trung Quốc người ta hay gói 饺子 (jiǎozi – sủi cảo), ở Việt Nam mình cuốn bánh tráng.",
   "ob": "Ông bà cùng cháu kiểm tra bánh tráng, rau, trứng cho món cuốn ngày mai.",
   "toi": "Ca dao “Nhiễu điều phủ lấy giá gương”. Mẹ đọc chậm, giải thích: người cùng một nước phải thương nhau, giúp nhau. Mẹ hỏi: “Hôm nay con đã giúp ai trong nhà?”",
   "lyr": "Nhiễu điều phủ lấy giá gương"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và vào bếp làm món cuốn Việt Nam.",
   "en": {
    "v": 0,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé chỉ đúng Việt Nam và Trung Quốc trên bản đồ, nói tên tiếng Anh. Sao 2: bé nói câu “I live in Vietnam.” Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần xem lại.",
    "b": "You live in Vietnam! Three stars!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 你是哪国人？. Một sao nếu bé tự nói 我是越南人 khi mời khách ăn món cuốn.",
    "b": "请吃！(qǐng chī)"
   },
   "special": "Vào bếp cùng mẹ: làm món đơn giản, gọi tên nguyên liệu",
   "doi": "Cuốn bánh tráng (20 phút): mẹ luộc bún, chiên trứng thái sợi, rửa rau sẵn (bếp, dao do mẹ làm). Bé rửa tay, nhúng bánh tráng qua nước (mẹ giữ bát), đặt rau, bún, trứng lên rồi cuốn. Mỗi nguyên liệu bé gọi tên tiếng Anh hoặc tiếng Trung: “Egg – 鸡蛋”, “Rice paper – bánh tráng”. Khi mời bố, bé nói “Here you are! Vietnamese food!” và “请吃！”.",
   "ob": "Ông bà chuẩn bị bún, rau, trứng; cháu cuốn bánh tráng và mời mọi người.",
   "toi": "Mẹ kể ngắn truyện “Bánh chưng, bánh giầy”: Vua Hùng muốn các con dâng lễ vật ý nghĩa nhất. Lang Liêu nghèo được thần mách dùng gạo nếp làm bánh vuông tượng trưng cho đất, bánh tròn tượng trưng cho trời. Vua khen Lang Liêu hiếu thảo, từ đó Tết có bánh chưng, bánh giầy. Hỏi bé: “Bánh chưng hình gì? Bánh giầy hình gì?”"
  },
  {
   "chuyen": "Chủ nhật: ôn lại và đi tìm cờ, tìm chữ Trung Quốc quanh khu phố.",
   "en": {
    "v": 1,
    "t": "Ôn tập: bé chọn bài thích nhất (Bye Bye Goodbye hoặc The More We Get Together) để xem lại cùng cả nhà. Cả nhà nắm tay đi vòng tròn. Chơi lại một trò web bé thích.",
    "b": "Let's get together!"
   },
   "zh": {
    "v": 1,
    "t": "Ôn tập: xem lại 5 phút đầu 十二生肖, bé chỉ con giáp của từng người trong nhà (mẹ giúp).",
    "b": "妈妈属什么？(māma shǔ shénme)"
   },
   "doi": "Đi dạo tìm cờ và chữ (15 phút): cả nhà đi dạo phố. Bé tìm cờ Việt Nam treo trước nhà, cổng trường; tìm biển hiệu có chữ Hán (quán ăn, hiệu thuốc) nếu có. Mỗi lần thấy cờ, bé nói “Vietnam! Flag!” hoặc “国旗！”. Nắm tay bé khi qua đường.",
   "ob": "Ông bà dắt cháu đi dạo tìm cờ Việt Nam treo trên phố.",
   "toi": "Ôn tuần: bé đọc lại “Thăng Long Hà Nội đô thành” cùng mẹ. Mẹ hỏi: “Tuần sau mình xem nhà Peppa đón Tết Trung Quốc. Con đoán người Trung Quốc ăn Tết có giống mình không?”"
  },
  {
   "chuyen": "Tuần kể chuyện: nhà Peppa đón Tết Nguyên đán kiểu Trung Quốc.",
   "en": {
    "v": 3,
    "t": "Lần 1 – xem và dừng hỏi. Xem “Celebrating Chinese New Year with Peppa” (khoảng 4 phút). Dừng 3 lần, hỏi “Chuyện gì xảy ra tiếp?” và một câu What/Where: “What colour is it?” (red), “Where is the dragon?”. Mẹ hỏi thêm: “Tết Việt Nam có màu đỏ không?”",
    "b": "Happy New Year! What colour is it? Red!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 1 – xem truyện. Xem 你是哪国人？ (《快乐幼儿华语》, khoảng 2 phút). Dừng ở mỗi nhân vật, hỏi “Bạn ấy là người nước nào?” Mẹ nói theo video: 中国, 越南. Mẹ chỉ quốc kỳ, nói 国旗 (guóqí).",
    "b": "这是越南国旗。(zhè shì Yuènán guóqí)"
   },
   "words": {
    "en": [
     1,
     5,
     4
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Múa lân giấy (15 phút): mẹ và bé làm đầu lân từ một hộp giấy (hộp giày) tô đỏ vàng, dán mắt to, dán dải giấy làm râu (dải giấy ngắn). Bé đội hoặc cầm múa theo nhạc trống mẹ gõ bằng nồi úp ngược. Mẹ kể: Tết ở Việt Nam và Trung Quốc đều có múa lân. Bé nói “Happy New Year!” và “新年好！” (xīnnián hǎo).",
   "ob": "Ông bà gõ trống bằng nồi úp, cháu múa lân giấy và chúc Tết.",
   "toi": "Mẹ kể truyện “Sự tích Hồ Gươm” bằng lời của mẹ: Lê Lợi được Long Quân cho mượn thanh gươm thần để đánh giặc giữ nước. Khi đất nước yên bình, vua đi thuyền chơi hồ thì Rùa Vàng nổi lên xin lại gươm. Vua trả gươm, và từ đó hồ được gọi là Hồ Hoàn Kiếm, Hồ Gươm. Hỏi bé: “Ai mượn gươm? Ai lấy lại gươm? Vua có giữ lời hứa không?”"
  },
  {
   "chuyen": "Hôm nay nghe chuyện “ai cũng có chỗ của mình”.",
   "en": {
    "v": 2,
    "t": "Lần 1 – xem và dừng hỏi. Xem “Everyone Belongs” (tối đa 8 phút). Mỗi khi có bạn mới xuất hiện, mẹ dừng và hỏi “Chuyện gì xảy ra tiếp? Bạn ấy có được chơi cùng không?” Mẹ nói: mỗi bạn đến từ một nơi, nói tiếng khác nhau nhưng ai cũng là bạn. Bé nói “Hello, friend!” với bạn mới.",
    "b": "Hello, friend! Welcome!"
   },
   "zh": {
    "v": 1,
    "t": "Kể chuyện 12 con giáp: xem lại 5 phút đầu 十二生肖. Sau đó mẹ kể ngắn chuyện “Cuộc đua của 12 con giáp”: các con vật thi qua sông, con nào đến trước được xếp trước. Bé đoán con nào về nhất. Mẹ nói 中国 khi nhắc đây là chuyện kể của Trung Quốc.",
    "b": "谁是第一？(shéi shì dì yī)"
   },
   "words": {
    "en": [
     4,
     5,
     9
    ],
    "zh": [
     1,
     5
    ]
   },
   "doi": "Vòng tròn bạn bè thế giới (10 phút): mẹ in hoặc vẽ 6 bạn nhỏ mặc trang phục khác nhau (áo dài Việt Nam, sườn xám Trung Quốc, kimono Nhật, váy…). Bé đặt tên cho các bạn, xếp thành vòng tròn nắm tay. Bé giới thiệu từng bạn: “This is my friend. She lives in China.”",
   "ob": "Ông bà cùng cháu xếp tranh các bạn nhỏ nhiều nước thành vòng tròn nắm tay.",
   "toi": "Ca dao “Bầu ơi thương lấy bí cùng”. Mẹ đọc chậm, giải thích: bầu và bí khác giống nhưng sống chung một giàn, phải thương nhau. Mẹ hỏi: “Bạn ở lớp con có ai khác con không? Mình vẫn chơi chung chứ?”",
   "lyr": "Bầu ơi thương lấy bí cùng"
  },
  {
   "chuyen": "Đóng vai Tết Trung Quốc của nhà Peppa.",
   "en": {
    "v": 3,
    "t": "Lần 2 – đóng vai. Xem lại video Tết của Peppa. Bé làm Peppa, mẹ làm nhân vật khác. Dừng ở mỗi cảnh, hai mẹ con nói thay nhân vật: “Happy New Year!”, “Look, a dragon!”. Mẹ hỏi “What happens next?” trước khi bật tiếp.",
    "b": "Look! A dragon! Happy New Year!"
   },
   "zh": {
    "v": 2,
    "t": "Lần 2 – đóng vai. Xem lại 你是哪国人？. Mẹ đóng một bạn Trung Quốc, bé đóng bạn Việt Nam. Hai người chào: “你好！你是哪国人？” – “我是越南人。你呢？” (nǐ ne – còn bạn?) – “我是中国人。”.",
    "b": "我是越南人。你呢？(wǒ shì Yuènán rén. nǐ ne?)"
   },
   "words": {
    "en": [
     1,
     2,
     4
    ],
    "zh": [
     0,
     1,
     3
    ]
   },
   "doi": "Bao lì xì và lời chúc (10 phút): mẹ và bé làm 3 phong bao đỏ bằng giấy, bên trong bé vẽ một lời chúc (bông hoa, ngôi sao, trái tim), không bỏ tiền. Bé tặng từng người và chúc bằng 3 thứ tiếng: “Chúc mừng năm mới!”, “Happy New Year!”, “新年好！”.",
   "ob": "Ông bà nhận phong bao giấy cháu tự làm và chúc lại cháu.",
   "toi": "Mẹ nhắc lại truyện Ngưu Lang – Chức Nữ bé đã nghe ở vòng Vũ trụ và kể thêm: ở Trung Quốc cũng có câu chuyện này, gọi là 七夕 (qīxī). Hai nước có nhiều chuyện kể giống nhau. Hỏi bé: “Con còn nhớ ai bắc cầu cho hai người không?”"
  },
  {
   "chuyen": "Bé kể lại chuyện “ai cũng có chỗ” bằng tranh và bằng tên các nước.",
   "en": {
    "v": 2,
    "t": "Lần 2 – kể lại bằng tranh. Xem lại “Everyone Belongs”. Trước khi xem, mẹ dặn “Con nhớ 3 bạn nhỏ trong truyện nhé.” Xem xong, bé vẽ 3 bạn và kể: bạn ấy làm gì, bạn ấy đóng góp gì. Mẹ hỏi “Who is your favourite friend?”",
    "b": "Everyone belongs!"
   },
   "zh": {
    "v": 1,
    "t": "Bé kể lại chuyện cuộc đua 12 con giáp hôm thứ Ba, mẹ chỉ gợi: “谁第一？” (con nào nhất?). Xem lại 5 phút đầu 十二生肖 để kiểm tra thứ tự 3 con đầu.",
    "b": "老鼠第一！(lǎoshǔ dì yī)"
   },
   "words": {
    "en": [
     4,
     5,
     6
    ],
    "zh": [
     1,
     5
    ]
   },
   "doi": "Chuyển ngữ trên bản đồ (10 phút): mẹ chỉ một nước trên bản đồ và nói tên tiếng Anh, bé nói tên tiếng Trung (Vietnam – 越南, China – 中国). Đổi lại: mẹ nói tiếng Trung, bé nói tiếng Anh. Thêm ôn tập trước lớp 1: bé đếm số nước mẹ chỉ bằng tiếng Anh đến 10.",
   "ob": "Ông bà chỉ Việt Nam, Trung Quốc trên bản đồ, cháu nói tên bằng tiếng Anh hoặc tiếng Trung.",
   "toi": "Bé kể lại truyện “Sự tích Hồ Gươm”. Mẹ đưa một chiếc thìa (thanh gươm) và một chiếc nắp nồi (Rùa Vàng). Bé diễn lại cảnh trả gươm. Mẹ hỏi: “Nếu được đến Hồ Gươm, con muốn tìm gì?” (tháp Rùa)."
  },
  {
   "chuyen": "Bé là người kể chuyện chính: Tết của Peppa, Tết của nhà mình.",
   "en": {
    "v": 3,
    "t": "Lần 3 – bé kể trước video. Mẹ tắt tiếng video Tết của Peppa, bé xem hình và kể bằng tiếng Việt, chèn từ tiếng Anh: red, dragon, Happy New Year, China. Bật tiếng đoạn cuối để kiểm tra. Bé nói câu dài: “I live in Vietnam. Peppa learns about China.”",
    "b": "I live in Vietnam."
   },
   "zh": {
    "v": 2,
    "t": "Lần 3 – bé nói trước. Xem lại 你是哪国人？, mẹ dừng trước mỗi câu trả lời, bé nói trước. Mẹ hỏi “你是哪国人？” bất ngờ trong ngày (lúc ăn, lúc chơi), bé trả lời ngay.",
    "b": "你是哪国人？(nǐ shì nǎ guó rén)"
   },
   "words": {
    "en": [
     0,
     1,
     6,
     4
    ],
    "zh": [
     0,
     1,
     2,
     3
    ]
   },
   "doi": "Ôn tập “sẵn sàng vào lớp 1” – thẻ săn từ (10 phút): bé tập tự giới thiệu: “My name is… I am five. I live in Vietnam.” và “我叫… 我是越南人。”. Sau đó mẹ và bé vẽ thẻ săn từ cho ngày mai: lá cờ đỏ, một món ăn Việt Nam, một món ăn Trung Quốc (bánh bao, mì), một thứ màu đỏ của Tết.",
   "ob": "Ông bà nghe cháu tự giới thiệu tên, tuổi, nơi ở và giúp cháu vẽ thẻ săn từ.",
   "toi": "Ca dao “Đường vô xứ Nghệ quanh quanh”. Mẹ đọc chậm, chỉ trên bản đồ: xứ Nghệ ở miền Trung, đường đi quanh co qua núi xanh, nước biếc đẹp như tranh. Mẹ hỏi: “Nước mình dài từ Bắc vào Nam, con muốn đi thăm nơi nào?”",
   "lyr": "Đường vô xứ Nghệ quanh quanh"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và săn từ “Việt Nam – Trung Quốc” ở chợ.",
   "en": {
    "v": 3,
    "t": "Thử thách lớn tuần 2: 3 sao. Sao 1: bé kể lại 3 việc trong video Tết của Peppa. Sao 2: bé tự giới thiệu được 3 câu (name, age, I live in Vietnam). Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất trong tuần xem lại.",
    "b": "My name is… I live in Vietnam."
   },
   "zh": {
    "v": 2,
    "t": "Xem lại 你是哪国人？ trước khi đi chợ. Một sao nếu bé nói được 我是越南人 với người bán (nói vui với mẹ cũng được).",
    "b": "我们去商店！(wǒmen qù shāngdiàn)"
   },
   "special": "Săn từ ở chợ hoặc siêu thị",
   "doi": "Săn từ ở chợ (20 phút): mang theo thẻ săn từ. Bé tìm: lá cờ đỏ (cờ treo ở chợ), một món ăn Việt Nam (bánh chưng, bánh mì, phở), một món ăn gốc Trung Quốc (bánh bao, mì, sủi cảo), một thứ màu đỏ. Thấy món nào bé chỉ và nói tên tiếng Anh hoặc tiếng Trung (国旗, 包子). Mẹ mua một chiếc bánh bao cho bé. Nắm tay bé suốt ở chợ.",
   "ob": "Ông bà dắt cháu đi chợ tìm cờ, món ăn Việt Nam và món ăn Trung Quốc.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé tìm được món nào. Mẹ kể: nước mình và Trung Quốc ở cạnh nhau, có nhiều món ăn giống nhau, nhưng mỗi nước có cách nói, cách nấu riêng."
  },
  {
   "chuyen": "Chủ nhật: ôn nhẹ, không bài mới.",
   "en": {
    "v": 0,
    "t": "Ôn nhẹ: bé tự chọn một video trong vòng để xem lại. Mẹ để bé hát và vẫy tay tự do. Cuối cùng hỏi: “Where do you live?” Bé trả lời “I live in Vietnam.”",
    "b": "Where do you live?"
   },
   "zh": {
    "v": 0,
    "t": "Ôn nhẹ: xem lại 你是哪国人？ một lần, bé trả lời câu hỏi của bài.",
    "b": "我是越南人！(wǒ shì Yuènán rén)"
   },
   "doi": "Chơi lại một trò web bé thích. Sau đó bé chọn 3 món đồ “đáng nhớ nhất” của chương trình (sách nhỏ, cờ giấy, mũ phi hành gia…) để chuẩn bị cho buổi biểu diễn tốt nghiệp ở vòng sau.",
   "ob": "Ông bà cùng cháu chọn đồ đáng nhớ để chuẩn bị buổi biểu diễn tốt nghiệp.",
   "toi": "Ca dao “Cần Thơ gạo trắng nước trong”. Mẹ đọc, chỉ Cần Thơ ở miền Nam trên bản đồ, bé nói lại câu đầu. Mẹ hỏi: “Hai tuần qua con đi thăm những nước nào trên bản đồ?” Bé kể. Chúc bé ngủ ngon. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Cần Thơ gạo trắng nước trong",
   "diary": true
  }
 ]
};
window.CT_DETAIL45[144] = {
 "sub": "Sẵn sàng vào lớp 1: chữ cái, số, tự giới thiệu",
 "vocab": {
  "en": [
   [
    "letter",
    "🔤",
    "chữ cái",
    false
   ],
   [
    "number",
    "🔢",
    "con số",
    false
   ],
   [
    "my name",
    "📛",
    "tên của con",
    false
   ],
   [
    "five",
    "🖐️",
    "năm (tuổi)",
    false
   ],
   [
    "school",
    "🏫",
    "trường học",
    false
   ],
   [
    "teacher",
    "👩‍🏫",
    "cô giáo, thầy giáo",
    false
   ],
   [
    "pencil",
    "✏️",
    "bút chì",
    false
   ],
   [
    "write",
    "✍️",
    "viết",
    true
   ],
   [
    "read",
    "📚",
    "đọc",
    true
   ],
   [
    "goodbye",
    "👋",
    "tạm biệt",
    false
   ]
  ],
  "zh": [
   [
    "我叫",
    "wǒ jiào",
    "con tên là",
    "📛"
   ],
   [
    "五岁",
    "wǔ suì",
    "năm tuổi",
    "🖐️"
   ],
   [
    "学校",
    "xuéxiào",
    "trường học",
    "🏫"
   ],
   [
    "老师",
    "lǎoshī",
    "cô giáo, thầy giáo",
    "👩‍🏫"
   ],
   [
    "书",
    "shū",
    "quyển sách",
    "📚"
   ],
   [
    "写",
    "xiě",
    "viết",
    "✍️"
   ],
   [
    "数字",
    "shùzì",
    "con số",
    "🔢"
   ],
   [
    "再见",
    "zàijiàn",
    "tạm biệt",
    "👋"
   ]
  ],
  "en_phr": [
   [
    "My name is An.",
    "name",
    "📛"
   ],
   [
    "I am five.",
    "five",
    "🖐️"
   ],
   [
    "I can write my name.",
    "write",
    "✍️"
   ],
   [
    "I live in Vietnam.",
    "live",
    "🏠"
   ],
   [
    "I like school.",
    "school",
    "🏫"
   ]
  ],
  "zh_phr": [
   [
    "我叫小安。",
    "我叫",
    "wǒ jiào Xiǎo Ān",
    "con tên là An",
    "📛"
   ],
   [
    "我五岁。",
    "五岁",
    "wǒ wǔ suì",
    "con năm tuổi",
    "🖐️"
   ],
   [
    "我是越南人。",
    "越南人",
    "wǒ shì Yuènán rén",
    "con là người Việt Nam",
    "🇻🇳"
   ],
   [
    "老师好！",
    "老师",
    "lǎoshī hǎo",
    "con chào cô ạ",
    "👩‍🏫"
   ]
  ],
  "seq": [
   [
    "🎒",
    "pack the school bag",
    "收书包"
   ],
   [
    "🏫",
    "go to school",
    "上学"
   ],
   [
    "👩‍🏫",
    "say hello to the teacher",
    "老师好"
   ],
   [
    "✏️",
    "write my name",
    "写名字"
   ]
  ]
 },
 "media": {
  "en": [
   {
    "t": "ABC | Alphablocks Full Episode S2 E25",
    "u": "https://www.youtube.com/watch?v=IdIP3BGx11M",
    "kind": "explainer",
    "min": 5,
    "ch": "Alphablocks"
   },
   {
    "t": "Count & Move (Count Up To Twenty)",
    "u": "https://www.youtube.com/watch?v=g9EgE_JtEAw",
    "kind": "song_action",
    "min": 3,
    "ch": "Super Simple Songs - Kids Songs"
   },
   {
    "t": "ABC Song for Kids",
    "u": "https://www.youtube.com/watch?v=Bd3cjL1NSjo",
    "kind": "song_action",
    "min": 1.6,
    "ch": "Maple Leaf Learning"
   },
   {
    "t": "The Day You Begin – Read Aloud Picture Book (xem tối đa 8 phút, nếu dài thì xem đoạn đầu 5 phút)",
    "u": "https://www.youtube.com/watch?v=-XUkWoRpeR4",
    "kind": "story",
    "min": 7,
    "ch": "Brightly Storytime"
   }
  ],
  "zh": [
   {
    "t": "数字歌 Numbers 1–10 (bài hát số đếm)",
    "u": "https://www.youtube.com/watch?v=w67iWL5N188",
    "kind": "song_action",
    "min": 2,
    "ch": "LiveandLearnCan"
   },
   {
    "t": "【4】你几岁？How old are you? (đọc sách tranh: con mấy tuổi?)",
    "u": "https://www.youtube.com/watch?v=2hbOwFDHMTY",
    "kind": "story",
    "min": 2,
    "ch": "ChineseClass365 中文加油站"
   },
   {
    "t": "你好歌 Nǐ Hǎo Gē (bài hát chào hỏi)",
    "u": "https://www.youtube.com/watch?v=joKEWUA7Ujc",
    "kind": "song_action",
    "min": 1.2,
    "ch": "LiveandLearnCan"
   }
  ]
 },
 "weeks": [
  {
   "title": "Tuần Khám phá: chữ cái, con số và cái tên của con",
   "toi_vi": [
    {
     "t": "Ăn quả nhớ kẻ trồng cây",
     "type": "ca_dao",
     "lyr": "Ăn quả nhớ kẻ trồng cây\nĂn khoai nhớ kẻ cho dây mà trồng"
    },
    {
     "t": "Anh em như thể tay chân",
     "type": "ca_dao",
     "lyr": "Anh em như thể tay chân\nRách lành đùm bọc, dở hay đỡ đần"
    }
   ],
   "book_vi": {
    "t": "Tập tục quê em",
    "author": "nhóm tác giả Việt (chưa rõ tên)",
    "publisher": "NXB Kim Đồng"
   }
  },
  {
   "title": "Tuần Thử thách: sẵn sàng vào lớp 1 và buổi biểu diễn tốt nghiệp",
   "toi_vi": [
    {
     "t": "Công cha như núi Thái Sơn",
     "type": "ca_dao",
     "lyr": "Công cha như núi Thái Sơn\nNghĩa mẹ như nước trong nguồn chảy ra\nMột lòng thờ mẹ kính cha\nCho tròn chữ hiếu mới là đạo con"
    },
    {
     "t": "Con người có tổ có tông",
     "type": "ca_dao",
     "lyr": "Con người có tổ có tông\nNhư cây có cội, như sông có nguồn"
    }
   ],
   "book_vi": {
    "t": "Bé tập kể chuyện – Mỗi tuần một câu chuyện",
    "author": "chưa rõ tên tác giả",
    "publisher": "NXB Trẻ"
   }
  }
 ],
 "obs": [
  [
   "en",
   "Tự giới thiệu được 3 câu: “My name is… I am five. I live in Vietnam.”"
  ],
  [
   "en",
   "Hát được bài ABC và nhận ra chữ cái đầu trong tên mình"
  ],
  [
   "zh",
   "Tự giới thiệu được: 我叫…, 我五岁, 我是越南人"
  ],
  [
   "zh",
   "Đếm được 1–10 bằng tiếng Trung"
  ],
  [
   "td",
   "Đếm đến 20 bằng tiếng Anh, nhận ra số 1–10 viết trên thẻ"
  ],
  [
   "vi",
   "Kể lại được một truyện cổ tích đã học bằng 4–5 câu trước cả nhà"
  ],
  [
   "xh",
   "Tự xếp cặp sách, ngồi nghe 10 phút, làm theo lệnh 2 bước"
  ],
  [
   "vd",
   "Cầm bút chì đúng cách, tô theo nét chấm tên mình"
  ]
 ],
 "days": [
  {
   "chuyen": "Vòng cuối cùng: tuần này bé khám phá chữ cái, con số để sẵn sàng vào lớp 1.",
   "en": {
    "v": 0,
    "t": "Lần 1 – xem và chỉ. Xem tập Alphablocks “ABC”. Mỗi khi một chữ cái xuất hiện, mẹ dừng và hỏi “What letter is it?” Mẹ đọc theo video, bé chỉ vào chữ. Câu Yes/No: mẹ viết chữ đầu tên bé lên giấy, hỏi “Is this your letter? Yes or no?”",
    "b": "What letter is it?"
   },
   "zh": {
    "v": 0,
    "t": "Lần 1 – nghe và giơ ngón tay. Xem 数字歌. Mỗi số, bé giơ đúng số ngón tay: 一 (yī), 二 (èr), 三 (sān)… Đến 十 (shí), bé nhảy lên một cái.",
    "b": "一二三四五！(yī èr sān sì wǔ)"
   },
   "words": {
    "en": [
     0,
     2,
     8
    ],
    "zh": [
     6
    ]
   },
   "doi": "Chữ cái trong tên con (15 phút): mẹ viết tên bé thật to bằng chữ in hoa lên giấy. Bé tìm các chữ đó trên hộp sữa, bìa sách, tờ lịch, mỗi chữ tìm thấy dán một ngôi sao. Mẹ nói: “This is the letter A. A for An.” Bé tô theo nét chấm tên mình bằng bút chì, mẹ chỉ cách cầm bút ba ngón.",
   "ob": "Ông bà viết tên cháu thật to, cháu tìm chữ cái đó trên hộp, sách, lịch.",
   "toi": "Mẹ kể truyện “Thánh Gióng” bằng lời của mẹ: cậu bé làng Gióng lên ba vẫn chưa biết nói, biết cười. Khi nghe sứ giả đi tìm người giúp nước, cậu bỗng cất tiếng xin đi, rồi ăn bao nhiêu cũng không no, lớn nhanh như thổi; cả làng góp gạo nuôi cậu. Gióng cưỡi ngựa sắt đi giúp nước, rồi bay về trời. Mẹ nói: “Con cũng lớn nhanh lắm, sắp vào lớp 1 rồi!” Hỏi bé: “Cả làng đã giúp Gióng thế nào?”"
  },
  {
   "chuyen": "Khám phá con số: đếm và vận động đến 20.",
   "en": {
    "v": 1,
    "t": "Lần 1 – xem và làm. Xem “Count & Move”. Bé làm theo động tác và đếm theo video. Mẹ dừng ở số 10, hỏi “What number is next?” Bé đoán “Eleven!”. Lần đầu chỉ cần bé đếm tốt đến 10, mẹ đếm tiếp phần sau.",
    "b": "Count with me! One, two, three…"
   },
   "zh": {
    "v": 1,
    "t": "Lần 1 – xem truyện. Xem 你几岁？. Dừng ở câu hỏi 你几岁？ (nǐ jǐ suì – con mấy tuổi?), mẹ hỏi bé. Bé giơ 5 ngón tay, mẹ nói “我五岁。” (wǒ wǔ suì), bé nhắc lại.",
    "b": "你几岁？我五岁。(nǐ jǐ suì? wǒ wǔ suì)"
   },
   "words": {
    "en": [
     1,
     3
    ],
    "zh": [
     1,
     6
    ]
   },
   "doi": "Thẻ số và đồ vật (15 phút): mẹ viết số 1 đến 10 lên 10 tấm thẻ giấy. Bé đặt bên cạnh mỗi thẻ đúng số đồ vật (1 cái thìa, 2 cái cốc, 3 cái bút…). Mẹ chỉ thẻ, bé đọc số bằng tiếng Anh, rồi thử tiếng Trung với số 1–5. Mẹ xáo thẻ, bé xếp lại theo thứ tự.",
   "ob": "Ông bà viết số từ 1 đến 10, cháu đặt đúng số đồ vật cạnh mỗi thẻ.",
   "toi": "Ca dao “Ăn quả nhớ kẻ trồng cây”. Mẹ đọc, giải thích: khi được ăn quả ngon, mình nhớ ơn người đã trồng cây. Mẹ hỏi: “Ai đã dạy con hát, dạy con đọc? Con muốn cảm ơn ai?” (cô giáo mầm non, ông bà, bố mẹ).",
   "lyr": "Ăn quả nhớ kẻ trồng cây"
  },
  {
   "chuyen": "Mỗi chữ cái có một âm thanh. Hôm nay bé nghe và nói âm của chữ.",
   "en": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Xem lại Alphablocks “ABC”. Mỗi khi một chữ nói âm của mình, bé nói theo và tạo hình chữ bằng cơ thể (A: dang hai chân, chụm tay trên đầu; B: tay chống hông; C: cong người). Mẹ dừng, bé đứng im giữ dáng chữ, mẹ hỏi “What letter are you?”",
    "b": "I am the letter A!"
   },
   "zh": {
    "v": 0,
    "t": "Lần 2 – làm động tác. Bật 数字歌, bé nhảy lò cò đúng số lần của mỗi số (三 nhảy 3 cái). Mẹ dừng giữa bài hỏi “这是几？” (zhè shì jǐ – đây là số mấy?), chỉ thẻ số, bé trả lời bằng tiếng Trung.",
    "b": "这是五。(zhè shì wǔ)"
   },
   "words": {
    "en": [
     0,
     8,
     2
    ],
    "zh": [
     6
    ]
   },
   "doi": "Hộp chữ cái bí mật (10 phút): mẹ bỏ vào hộp 5 đồ vật có tên tiếng Anh bé đã học trong năm: apple, ball, cat (mèo bông), dog (chó bông), egg (trứng nhựa). Bé bốc từng món, nói tên tiếng Anh, mẹ nói chữ cái đầu: “Apple – A!” Bé xếp các món theo thứ tự A, B, C, D, E.",
   "ob": "Ông bà cho cháu bốc đồ vật trong hộp và nói tên bằng tiếng Anh.",
   "toi": "Mẹ đọc một cuốn trong bộ “Tập tục quê em” (NXB Kim Đồng). Mẹ hỏi: “Ở quê mình có tập tục gì? Khi vào lớp 1, con muốn kể cho bạn nghe về quê mình điều gì?”"
  },
  {
   "chuyen": "Hôm nay bé tập làm học sinh lớp 1: xếp cặp, ngồi học, đếm số.",
   "en": {
    "v": 1,
    "t": "Lần 2 – làm động tác. Bật lại “Count & Move”, lần này bé tự hô động tác trước khi video nói (jump, clap, stomp). Mẹ thử thách: đếm tiếp đến 20 cùng video. Mẹ dừng ở số 15, hỏi “How many jumps?” Bé đếm lại.",
    "b": "Fifteen, sixteen… you can do it!"
   },
   "zh": {
    "v": 1,
    "t": "Lần 2 – đóng vai. Xem lại 你几岁？, rồi bé hỏi gấu bông “你几岁？” và trả lời thay gấu. Sau đó mẹ hỏi bé, bé trả lời cả hai câu: “我叫…。我五岁。” (wǒ jiào…, wǒ wǔ suì).",
    "b": "我叫…。我五岁。(wǒ jiào… wǒ wǔ suì)"
   },
   "words": {
    "en": [
     1,
     3,
     4
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Tập làm học sinh (15 phút): mẹ đặt cặp sách, hộp bút, 2 quyển vở trên bàn. Mẹ ra lệnh 2 bước bằng tiếng Việt: “Con lấy quyển vở xanh rồi cất vào cặp.”, “Con lấy bút chì rồi đặt cạnh vở.” Bé làm đúng thứ tự. Sau đó bé ngồi vào bàn 10 phút tô màu hoặc tô nét tên mình, mẹ đặt đồng hồ. Ngồi đủ giờ, bé nói “I can write my name!”.",
   "ob": "Ông bà cho cháu tập xếp cặp sách theo lời dặn hai bước và ngồi tô màu 10 phút.",
   "toi": "Bé kể lại truyện “Thánh Gióng”. Mẹ chỉ gợi: “Lúc đầu cậu bé thế nào? Khi nghe sứ giả, cậu nói gì? Cả làng làm gì?” Bé đứng lên ghế thấp làm Gióng lớn nhanh. Mẹ hỏi: “Con lớn thêm, con làm được những việc gì mới?”"
  },
  {
   "chuyen": "Bé nói trước video: hôm nay bé là cô giáo dạy chữ.",
   "en": {
    "v": 0,
    "t": "Lần 3 – bé nói trước video. Xem lại Alphablocks, mẹ dừng trước khi mỗi chữ xuất hiện, bé đoán chữ tiếp theo theo thứ tự A, B, C. Bật tiếp để kiểm tra. Cuối cùng bé chỉ chữ đầu tên mình và nói câu: “My name is… It starts with…”",
    "b": "My name starts with A."
   },
   "zh": {
    "v": 0,
    "t": "Lần 3 – bé đếm trước. Tắt tiếng 数字歌, bé tự đếm 一 đến 十 theo hình. Thêm câu mới: “我会数数！” (wǒ huì shǔ shù – con biết đếm!).",
    "b": "我会数数！(wǒ huì shǔ shù)"
   },
   "words": {
    "en": [
     0,
     2,
     8
    ],
    "zh": [
     6,
     1
    ]
   },
   "doi": "Chuẩn bị pháo đài “Lớp học bí mật” cho ngày mai (10 phút): bé và mẹ chọn 3 cuốn sách đã đọc trong năm, cuốn sách nhỏ bé tự làm, thẻ chữ, thẻ số. Bé tập trước một câu chuyện ngắn sẽ kể trong pháo đài (truyện Thánh Gióng hoặc truyện bé thích nhất trong năm).",
   "ob": "Ông bà giúp cháu chọn sách và thẻ chữ để mai mang vào pháo đài.",
   "toi": "Ca dao “Anh em như thể tay chân”. Mẹ đọc, giải thích: anh chị em, bạn bè thương nhau như tay với chân, giúp nhau lúc khó. Mẹ hỏi: “Vào lớp 1, nếu bạn quên bút, con làm gì?”",
   "lyr": "Anh em như thể tay chân"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn và lớp học bí mật trong pháo đài chăn gối.",
   "en": {
    "v": 1,
    "t": "Thử thách lớn: mẹ chấm 3 sao. Sao 1: bé đếm đến 20 bằng tiếng Anh theo Count & Move. Sao 2: bé nhận ra và nói đúng 5 chữ cái mẹ chỉ. Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn video thích nhất của tuần xem lại.",
    "b": "Twenty! Super star!"
   },
   "zh": {
    "v": 0,
    "t": "Xem lại 数字歌. Một sao nếu bé đếm 1 đến 10 bằng tiếng Trung không cần nhạc.",
    "b": "一到十，真棒！(yī dào shí, zhēn bàng)"
   },
   "special": "Xây pháo đài chăn gối, kể chuyện trong pháo đài",
   "doi": "Lớp học bí mật trong pháo đài (20 phút): bé và mẹ dựng pháo đài chăn gối, treo biển “Lớp 1 của con”. Trong pháo đài bật đèn pin, bé làm cô giáo: giơ thẻ chữ cho cả nhà đọc, giơ thẻ số cho cả nhà đếm bằng tiếng Anh và tiếng Trung. Sau đó bé kể câu chuyện đã tập trong 1–2 phút. Cả nhà vỗ tay, hỏi bé một câu về truyện.",
   "ob": "Ông bà chui vào pháo đài làm học sinh, đọc thẻ chữ và nghe cháu kể chuyện.",
   "toi": "Buổi tối nhẹ nhàng: mẹ hỏi bé: “Làm cô giáo có vui không? Con thích dạy chữ hay dạy số?” Mẹ kể cho bé nghe ngày đầu tiên mẹ đi học lớp 1."
  },
  {
   "chuyen": "Chủ nhật: ôn lại và đi thăm một trường tiểu học.",
   "en": {
    "v": 0,
    "t": "Ôn tập: bé chọn video thích nhất (Alphablocks hoặc Count & Move) để xem lại cùng bố. Bé đố bố: “What letter is it?” Chơi lại một trò web bé thích.",
    "b": "Daddy, what letter is it?"
   },
   "zh": {
    "v": 1,
    "t": "Ôn tập: xem lại 你几岁？, bé hỏi bố “爸爸，你几岁？” và cả nhà cười.",
    "b": "爸爸，你几岁？(bàba, nǐ jǐ suì)"
   },
   "doi": "Đi qua trường tiểu học (20 phút): cả nhà đi bộ hoặc đi xe qua trường tiểu học bé sẽ học (hoặc một trường gần nhà). Bé nhìn cổng trường, sân trường, lá cờ. Bé nói “School!” và “学校！” (xuéxiào). Mẹ hỏi: “Con muốn học lớp 1 ở đây không? Con sẽ chào cô giáo thế nào?” Bé tập: “Con chào cô ạ!”, “Hello, teacher!”, “老师好！”. Nắm tay bé khi qua đường.",
   "ob": "Ông bà dắt cháu đi qua trường tiểu học, tập chào cô giáo.",
   "toi": "Ôn tuần: bé đọc lại “Anh em như thể tay chân” cùng mẹ. Mẹ hỏi: “Tuần sau là tuần cuối của chương trình. Mình sẽ có buổi biểu diễn tốt nghiệp. Con muốn biểu diễn gì?”"
  },
  {
   "chuyen": "Tuần cuối: mỗi ngày một thử thách “sẵn sàng vào lớp 1”.",
   "en": {
    "v": 2,
    "t": "Lần 1 – thử thách hát. Xem “ABC Song”. Bé chỉ vào bảng chữ cái (mẹ viết hoặc in) khi hát. Mẹ dừng giữa bài, hỏi “What comes after D?” Bé trả lời “E!”. Hát đúng đến hết bài được một sao.",
    "b": "A, B, C, D, E, F, G…"
   },
   "zh": {
    "v": 2,
    "t": "Thử thách chào hỏi: xem 你好歌. Mỗi lần nghe 你好, ai vẫy tay và nói 你好 trước được một sao. Sau đó bé chào từng người: “老师好！” với mẹ (đóng vai cô giáo).",
    "b": "老师好！(lǎoshī hǎo)"
   },
   "words": {
    "en": [
     0,
     8
    ],
    "zh": [
     3
    ]
   },
   "doi": "Thi “nhanh tay xếp cặp” (10 phút): mẹ bày 6 đồ dùng học tập lẫn với 4 đồ chơi trên sàn. Bé chỉ chọn đồ dùng học tập cho vào cặp trong 1 phút (mẹ đếm). Mỗi món bé nói tên: “Pencil!”, “Book – 书 (shū)!”. Đúng và kịp được hai sao.",
   "ob": "Ông bà bày đồ học tập lẫn đồ chơi, cháu chọn đúng đồ cho vào cặp.",
   "toi": "Mẹ kể truyện “Câu chuyện bó đũa” bằng lời của mẹ: các anh em trong nhà hay cãi nhau. Người cha đưa một bó đũa và bảo bẻ, không ai bẻ gãy được cả bó. Khi tháo ra bẻ từng chiếc thì gãy dễ dàng. Người cha dạy: đoàn kết như bó đũa thì không gì làm gãy được. Làm thật với một bó đũa, bé đếm số đũa bằng tiếng Anh và tiếng Trung. Mẹ nói: “Vào lớp 1, cả lớp cũng như bó đũa.”"
  },
  {
   "chuyen": "Thử thách nghe hiểu: ngày đầu đi học của các bạn nhỏ.",
   "en": {
    "v": 3,
    "t": "Lần 1 – xem và đố. Xem “The Day You Begin” (tối đa 8 phút). Mẹ dừng 3 lần, đố: “Is she happy or sad?”, “Where is she?” (at school), “What will happen next?”. Mỗi câu đúng một sao. Mẹ nói: ngày đầu đi học ai cũng hơi lo, rồi sẽ có bạn mới.",
    "b": "Is she happy or sad?"
   },
   "zh": {
    "v": 1,
    "t": "Thử thách tự giới thiệu: xem lại 你几岁？. Sau đó mẹ hỏi liền 3 câu: “你叫什么？” (nǐ jiào shénme), “你几岁？”, “你是哪国人？”. Bé trả lời đủ 3 câu được ba sao.",
    "b": "你叫什么名字？(nǐ jiào shénme míngzi)"
   },
   "words": {
    "en": [
     4,
     5,
     2
    ],
    "zh": [
     0,
     1,
     2
    ]
   },
   "doi": "Tập ngày đầu tiên đi học (15 phút): mẹ đóng vai cô giáo lớp 1 ngồi sau bàn. Bé đeo cặp vào “lớp”, chào cô, ngồi vào chỗ. Cô hỏi bằng tiếng Việt: “Con tên là gì? Con mấy tuổi?” Bé trả lời bằng tiếng Việt, rồi nói thêm 1 câu tiếng Anh “My name is…” và 1 câu tiếng Trung “我叫…”. Đổi vai: bé làm cô giáo hỏi mẹ.",
   "ob": "Ông bà đóng vai cô giáo, hỏi tên tuổi, cháu chào cô và trả lời.",
   "toi": "Ca dao “Công cha như núi Thái Sơn”. Mẹ đọc chậm hai câu đầu, giải thích: công cha mẹ to như núi, nhiều như nước suối chảy mãi. Mẹ hỏi: “Con muốn nói gì với bố mẹ khi con vào lớp 1?” Bé nói “Con cảm ơn bố mẹ!” và “Thank you, Mum and Dad!”.",
   "lyr": "Công cha như núi Thái Sơn"
  },
  {
   "chuyen": "Thử thách bé hát trước: chữ cái nào cũng thuộc.",
   "en": {
    "v": 2,
    "t": "Lần 2 – bé hát trước video. Bật “ABC Song”, mẹ tắt tiếng đoạn từ H đến P, bé tự hát tiếp. Bật tiếng kiểm tra đoạn cuối. Thử thách: mẹ chỉ ngẫu nhiên 5 chữ trên bảng, bé đọc tên chữ. Đúng 5 chữ được hai sao.",
    "b": "Now I know my ABCs!"
   },
   "zh": {
    "v": 2,
    "t": "Chuyển ngữ một từ: xem lại 你好歌. Sau bài, mẹ nói tiếng Anh, bé nói tiếng Trung: “hello – 你好”, “goodbye – 再见”, “teacher – 老师”, “school – 学校”. Mỗi từ đúng một sao.",
    "b": "Hello，中文是“你好”。(zhōngwén shì nǐ hǎo)"
   },
   "words": {
    "en": [
     0,
     8,
     2
    ],
    "zh": [
     3,
     2,
     7
    ]
   },
   "doi": "Viết tên mình (10 phút): mẹ viết tên bé bằng nét chấm. Bé cầm bút chì đúng cách tô theo 3 lần. Lần 4, bé thử tự viết (không cần đẹp). Mẹ khen từng nét. Bé nói “I can write my name!” và “我会写名字！” (wǒ huì xiě míngzi). Cất tờ giấy để dán vào “giấy khen” ngày thứ Bảy.",
   "ob": "Ông bà viết tên cháu bằng nét chấm, cháu tô theo và thử tự viết.",
   "toi": "Mẹ đọc một truyện trong “Bé tập kể chuyện – Mỗi tuần một câu chuyện” (NXB Trẻ). Đọc xong, bé kể lại truyện cho mẹ nghe bằng 4–5 câu. Mẹ hỏi: “Trong năm qua, truyện nào con thích nhất? Thứ Bảy con kể truyện đó nhé.”"
  },
  {
   "chuyen": "Thử thách ôn số và cảm xúc ngày đầu đi học.",
   "en": {
    "v": 3,
    "t": "Lần 2 – kể lại bằng tranh. Xem lại “The Day You Begin”. Trước khi xem, mẹ dặn: “Con nhớ lúc đầu bạn nhỏ thấy thế nào, lúc cuối thấy thế nào nhé.” Xem xong, bé vẽ 2 khuôn mặt: lúc đầu và lúc cuối, rồi kể lại. Mẹ đố: “At the end, is she happy? Yes or no?” Trả lời đúng và kể được được hai sao.",
    "b": "At the end, she is happy."
   },
   "zh": {
    "v": 0,
    "t": "Thử thách số: bật 数字歌, rồi mẹ giơ ngẫu nhiên thẻ số 1–10, ai nói đúng tên số tiếng Trung trước được một sao. Thử đếm ngược 十 về 一.",
    "b": "十，九，八…一！(shí, jiǔ, bā… yī)"
   },
   "words": {
    "en": [
     4,
     5,
     2
    ],
    "zh": [
     6
    ]
   },
   "doi": "Chợ toán lớp 1 (15 phút): lấy lại tiền giấy tự vẽ từ vòng đi chợ. Mẹ bày 5 món, mỗi món dán thẻ số giá từ 1 đến 5. Bé đọc số trên thẻ bằng tiếng Anh, đếm đủ tiền giấy để mua, nói “Here you are.”. Mẹ hỏi “How many left?” (còn lại mấy tờ?), bé đếm lại. Thử một lượt bằng tiếng Trung: “多少钱？” – “三！”.",
   "ob": "Ông bà làm người bán, cháu đọc số trên thẻ giá và đếm tiền giấy để mua.",
   "toi": "Nhìn lại một năm: mẹ và bé mở các cuốn sách nhỏ bé tự làm trong năm (buổi tối, khảo cổ, thời tiết…). Bé chọn trang thích nhất và kể lại hôm đó đã làm gì. Mẹ hỏi: “Năm nay con học được điều gì con thích nhất?” Mẹ ghi lại câu trả lời của bé vào mặt sau giấy khen."
  },
  {
   "chuyen": "Thử thách tập dượt buổi biểu diễn tốt nghiệp.",
   "en": {
    "v": 3,
    "t": "Lần 3 – bé nói trước video. Xem lại “The Day You Begin”, mẹ dừng trước mỗi cảnh quen, bé đoán bạn nhỏ sẽ làm gì. Rồi bé tập câu giới thiệu dài cho buổi biểu diễn: “Hello! My name is… I am five. I live in Vietnam. I like school.” Nói đủ được ba sao.",
    "b": "Hello! My name is… I am five."
   },
   "zh": {
    "v": 1,
    "t": "Lần 3 tuần này – bé nói trước. Xem lại 你几岁？, mẹ dừng trước mỗi câu trả lời, bé nói trước. Bé tập câu giới thiệu tiếng Trung: “大家好！我叫…。我五岁。我是越南人。” (dàjiā hǎo – chào mọi người).",
    "b": "大家好！我叫…。(dàjiā hǎo! wǒ jiào…)"
   },
   "words": {
    "en": [
     2,
     3,
     4
    ],
    "zh": [
     0,
     1
    ]
   },
   "doi": "Tập dượt tốt nghiệp (15 phút): mẹ và bé lên chương trình 5 tiết mục: (1) chào bằng 3 thứ tiếng; (2) tự giới thiệu tiếng Anh và tiếng Trung; (3) một bài hát tiếng Anh bé thích nhất trong năm; (4) một bài hát tiếng Trung; (5) kể một truyện cổ tích 1 phút. Tập 1 lượt. Chọn trang phục hoá trang: nhân vật bé thích nhất trong các video cả năm (phi hành gia, khủng long, Muffin Man, Peppa…).",
   "ob": "Ông bà xem cháu tập năm tiết mục và giúp cháu chọn trang phục hoá trang.",
   "toi": "Bé kể lại “Câu chuyện bó đũa” bằng bó đũa thật: bé thử bẻ cả bó (không gãy), tháo ra từng chiếc (mẹ bẻ giúp một chiếc). Mẹ hỏi: “Cả nhà mình giống bó đũa ở chỗ nào?”"
  },
  {
   "chuyen": "Thứ Bảy: Thử thách lớn cuối cùng, ngày hoá trang và buổi biểu diễn tốt nghiệp.",
   "en": {
    "v": 2,
    "t": "Thử thách lớn cuối cùng: 3 sao. Sao 1: bé hát trọn bài ABC. Sao 2: bé tự giới thiệu 4 câu tiếng Anh. Sao 3: bé chơi xong chuỗi trò trên web. Rồi bé chọn 1 video yêu thích nhất của cả năm (có thể từ vòng trước) để cả nhà cùng xem trước buổi biểu diễn.",
    "b": "Congratulations! You are ready for Grade 1!"
   },
   "zh": {
    "v": 2,
    "t": "Xem lại 你好歌, bé hát và vẫy tay chào khán giả. Một sao nếu bé tự nói câu giới thiệu tiếng Trung đủ 3 ý.",
    "b": "大家好！(dàjiā hǎo)"
   },
   "special": "Ngày hoá trang: bé đóng vai nhân vật trong video",
   "doi": "Buổi biểu diễn tốt nghiệp nhỏ (25 phút): bé mặc trang phục hoá trang nhân vật yêu thích. Cả nhà ngồi làm khán giả, mời ông bà xem trực tiếp hoặc gọi video. Bé biểu diễn 5 tiết mục đã tập: chào 3 thứ tiếng; tự giới thiệu “My name is… I am five. I live in Vietnam.” và “我叫…。我五岁。我是越南人。”; một bài hát tiếng Anh; bài 你好歌; kể một truyện cổ tích 1 phút. Cuối buổi, mẹ trao “giấy khen” tự làm (dán tờ bé tập viết tên), đọc to 3 điều bé đã làm được trong năm. Mẹ quay clip giữ làm kỷ niệm.",
   "ob": "Ông bà xem cháu biểu diễn tốt nghiệp, vỗ tay và nói một lời khen cho cháu.",
   "toi": "Buổi tối nhẹ nhàng: cả nhà xem lại clip tốt nghiệp. Mẹ hỏi: “Tiết mục nào con tự hào nhất?” Mẹ ôm bé và nói: “Mẹ tự hào về con. Con đã sẵn sàng vào lớp 1.”"
  },
  {
   "chuyen": "Chủ nhật cuối cùng: ôn nhẹ, nói lời cảm ơn và hẹn gặp lại.",
   "en": {
    "v": 2,
    "t": "Ôn nhẹ: bé tự chọn một video bất kỳ trong vòng này để xem lại. Mẹ để bé hát tự do. Cuối cùng mẹ hỏi: “What do you like about English?” Bé trả lời bằng tiếng Việt hoặc một câu “I like…”",
    "b": "Goodbye! See you in Grade 1!"
   },
   "zh": {
    "v": 2,
    "t": "Ôn nhẹ: xem lại 你好歌 một lần, cuối bài bé vẫy tay nói “再见！” (zàijiàn) với video.",
    "b": "再见！(zàijiàn)"
   },
   "doi": "Chơi lại một trò web bé thích nhất. Sau đó bé làm một “hộp kỷ niệm”: cho vào hộp giấy khen, sách nhỏ tự làm, cờ giấy, mũ phi hành gia… Bé vẽ lên nắp hộp chân dung mình đeo cặp đi học.",
   "ob": "Ông bà cùng cháu xếp đồ kỷ niệm vào hộp và khen cháu.",
   "toi": "Ca dao “Con người có tổ có tông”. Mẹ đọc, giải thích: mình có ông bà, tổ tiên, như cây có gốc, như sông có nguồn. Mẹ nhắc lại truyện Con Rồng cháu Tiên bé đã nghe. Mẹ và bé nằm cạnh nhau, bé chúc ngủ ngon bằng ba thứ tiếng: “Chúc mẹ ngủ ngon”, “Good night”, “晚安”. Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).",
   "lyr": "Con người có tổ có tông",
   "diary": true
  }
 ]
};

