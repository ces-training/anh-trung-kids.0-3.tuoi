/* =====================================================================
   CHƯƠNG TRÌNH 0–36 THÁNG · 72 vòng × 14 ngày
   18 chủ đề (mỗi chủ đề 2 tháng = 4 vòng), 12 chặng (mỗi chặng 6 vòng),
   5 giai đoạn phát triển. Lịch từng ngày được sinh từ dữ liệu này;
   riêng C07-V3 (vòng 39) dùng bản soạn tay trong trang.
   Lời bài: chỉ ghi lời đồng dao, ca dao dân gian; thơ có tác giả và bài hát
   chỉ ghi tên, lời nằm trong gói học liệu do CES biên soạn.
   ===================================================================== */
window.CT = (function(){
var SSS = "https://www.youtube.com/channel/UCLsooMJoIpl_7ux2jvdPB-Q";
var BEVA = "https://www.youtube.com/@bevasongs";
var YT = {
  ska:{t:"Skidamarink",u:"https://www.youtube.com/watch?v=6916kVhbEZw"},
  open:{t:"Open Shut Them",u:"https://www.youtube.com/watch?v=RNUZBHlRH4Y"},
  happy:{t:"If You're Happy",u:"https://www.youtube.com/watch?v=l4WNrvVjiTw"},
  alli:{t:"See You Later, Alligator",u:"https://www.youtube.com/watch?v=1_rZPNhVDww"},
  sleep:{t:"Are You Sleeping?",u:"https://www.youtube.com/watch?v=chxQb4YRC2U"}
};
var LYR = {
  audau:"Ầu ơ ví dầu cầu ván đóng đinh\nCầu tre lắc lẻo gập ghềnh khó đi",
  chichi:"Chi chi chành chành\nCái đanh thổi lửa\nCon ngựa chết trương\nBa vương ngũ đế\nBắt dế đi tìm\nÙ à ù ập\nĐóng sập cửa vào",
  taptam:"Tập tầm vông\nTay không tay có\nTập tầm vó\nTay có tay không\nTay nào có\nTay nào không?",
  keocua:"Kéo cưa lừa xẻ\nÔng thợ nào khỏe\nVề ăn cơm vua\nÔng thợ nào thua\nVề bú tí mẹ",
  nuna:"Nu na nu nống\nCái cống nằm trong\nCái ong nằm ngoài\nCủ khoai chấm mật\nPhật ngồi phật khóc\nCon cóc nhảy ra\nCon gà ú ụ\nNhà mụ thổi xôi\nNhà tôi nấu chè\nTay xòe chân rụt",
  conmeo:"Con mèo mà trèo cây cau\nHỏi thăm chú chuột đi đâu vắng nhà\nChú chuột đi chợ đường xa\nMua mắm mua muối giỗ cha chú mèo",
  caibong:"Cái bống là cái bống bang\nKhéo sảy khéo sàng cho mẹ nấu cơm\nMẹ bống đi chợ đường trơn\nBống ra gánh đỡ chạy cơn mưa ròng",
  conga:"Con gà cục tác lá chanh\nCon lợn ủn ỉn mua hành cho tôi\nCon chó khóc đứng khóc ngồi\nMẹ ơi đi chợ mua tôi đồng riềng",
  conkien:"Con kiến mà leo cành đa\nLeo phải cành cụt leo ra leo vào\nCon kiến mà leo cành đào\nLeo phải cành cụt leo vào leo ra",
  convoi:"Con vỏi con voi\nCái vòi đi trước\nHai chân trước đi trước\nHai chân sau đi sau\nCòn cái đuôi đi sau rốt\nTôi xin kể nốt\nCái chuyện con voi",
  bacong:"Bà còng đi chợ trời mưa\nCái tôm cái tép đi đưa bà còng\nĐưa bà đến quãng đường cong\nĐưa bà vào tận ngõ trong nhà bà\nTiền bà trong túi rơi ra\nTép tôm nhặt được trả bà mua rau",
  dungdang:"Dung dăng dung dẻ\nDắt trẻ đi chơi\nĐến ngõ nhà trời\nLạy cậu lạy mợ\nCho cháu về quê\nCho dê đi học\nCho cóc ở nhà\nCho gà bới bếp\nNgồi xệp xuống đây"
};
/* kiểu bài: d = đồng dao/ca dao (có lời), r = hát ru, t = thơ (lời trong gói), h = bài hát (mẹ hát, lời trong gói) */
function D(t,k){return {t:t,k:k,ty:"d"};} function R(t,k){return {t:t,k:k||null,ty:"r"};}
function T(t){return {t:t,k:null,ty:"t"};} function H(t){return {t:t,k:null,ty:"h"};}
function G(t,d){return {t:t,d:d};}

var GD = [
 {id:1,ten:"Gieo âm thanh",tu:0,den:6,from:1,to:12,be:"sosinh",color:"#1FA5A0",
  min:["3 phút","5 phút, 2–3 lần","5 phút","10 phút"],
  nn:["en","none","en","none","en","none","none"],
  toi:"Tắm, bú, rồi bế bé hát ru. Kể nhỏ cho bé nghe hôm nay con đã làm gì.",
  sang:function(t){return "Mẹ hát hoặc đọc “"+t+"” khi bế bé, nhìn vào mắt bé.";},
  obs:[["vi","Quay về phía giọng mẹ"],["vi","Ê a đáp lại khi mẹ nói"],["td","Nhìn theo thẻ tương phản"],["td","Nắm đồ chơi đặt vào tay"],["en","Chú ý khi bật bài ru quen"],["tc","Cười đáp lại khi mẹ cười"]]},
 {id:2,ten:"Lắng nghe & khám phá",tu:6,den:12,from:13,to:24,be:"ngoi",color:"#3BB273",
  min:["5 phút","10 phút","5 phút","10 phút"],
  nn:["en","none","en","zh","en","none","none"],
  toi:"Đọc 1 cuốn sách vải hoặc bìa cứng, chỉ tranh, gọi tên. Hát ru.",
  sang:function(t){return "Mẹ đọc “"+t+"”, cầm tay bé làm động tác theo nhịp.";},
  obs:[["vi","Bập bẹ “bà, mà”"],["vi","Làm động tác khi nghe đồng dao quen"],["td","Tìm đồ mẹ giấu dưới khăn"],["td","Nhặt vật bằng hai ngón"],["en","Vẫy tay khi nghe “bye-bye”"],["tc","Chỉ tay vào thứ mình muốn"]]},
 {id:3,ten:"Những từ đầu tiên",tu:12,den:18,from:25,to:36,be:"tapdi",color:"#2F6FD6",
  min:["5 phút","10 phút","5–10 phút","10 phút"],
  nn:["en","zh","en","none","en","both","none"],
  toi:"Sách tranh bìa cứng: mẹ chỉ, bé chỉ theo. Hát ru.",
  sang:function(t){return "Mẹ đọc chậm “"+t+"”, ngừng ở tiếng cuối để bé điền.";},
  obs:[["vi","Nói được vài từ có nghĩa"],["vi","Điền tiếng cuối câu thơ"],["td","Chồng 2–3 khối"],["td","Vẽ nguệch ngoạc"],["en","Làm theo “clap”, “come here”"],["tc","Làm theo yêu cầu ngắn như “đưa mẹ quả bóng”"]]},
 {id:4,ten:"Ghép từ – giao tiếp",tu:18,den:24,from:37,to:48,be:"tapdi",color:"#7B5CD6",
  min:["5 phút","10–15 phút","5–10 phút","10 phút"],
  nn:["en","zh","en","zh","en","both","none"],
  toi:"Truyện tranh hoặc album gia đình. Hát ru.",
  sang:function(t){return "“"+t+"”: mẹ đọc, bé đọc tiếp tiếng cuối mỗi câu.";},
  obs:[["vi","Ghép 2 từ (“mẹ bế”, “bà ơi”)"],["vi","Đọc tiếp 1 câu thơ quen"],["td","Nối đúng hình với bóng"],["td","Xây tháp 4–6 khối, lật trang sách"],["en","Chỉ đúng vật khi nghe từ tiếng Anh quen"],["zh","Chỉ đúng vật khi nghe từ tiếng Trung quen"],["tc","Chơi giả vờ (cho búp bê ăn)"]]},
 {id:5,ten:"Sẵn sàng đa ngữ",tu:24,den:36,from:49,to:72,be:"tapdi",color:"#E3262E",
  min:["5 phút","15 phút","10 phút","10–15 phút"],
  nn:["en","zh","en","zh","en","both","none"],
  toi:"Đọc truyện, hỏi bé 1 câu về tranh. Hát ru.",
  sang:function(t){return "“"+t+"”: bé đọc theo mẹ từng câu, rồi tự đọc 2 câu đầu.";},
  obs:[["vi","Nói câu 5–7 tiếng"],["vi","Kể lại truyện quen có gợi ý"],["td","Nhớ vị trí 2–3 hình"],["td","Xâu hạt to, vặn nắp"],["en","Trả lời “What's this?” bằng 1–3 từ"],["zh","Đếm 一二三 theo bài hát"],["tc","Nói được mình vui, buồn"]]}
];

var TH = [
 {ten:"Giọng mẹ, vòng tay mẹ",bg:"home",
  games:[G("Nhìn mặt mẹ","Bế bé cách mặt mẹ 20–30 cm, nói chậm, chờ bé nhìn lại."),G("Thẻ đen – trắng","Giơ thẻ tương phản cách mắt bé 20–30 cm, đưa chầm chậm sang trái, sang phải."),G("Nằm sấp trên ngực mẹ","Mẹ ngả lưng, cho bé nằm sấp trên ngực vài phút, vừa nói chuyện với bé."),G("Xoa bóp kèm hát","Xoa tay, chân bé nhẹ nhàng trong lúc hát ru."),G("Nghe tiếng lục lạc","Lắc lục lạc nhẹ ở một bên tai bé, chờ bé quay đầu tìm."),G("Bắt chước nét mặt","Mẹ thè lưỡi, chu môi thật chậm, chờ bé bắt chước.")],
  out:G("Đi dạo quanh nhà","Bế bé đi quanh nhà, gọi tên từng phòng, từng đồ vật."),
  en:{s:"Twinkle Twinkle Little Star",u:SSS,sb:"You're my little star."},zh:{s:"",sb:""},
  v:[{sub:"Mẹ ở đây",vi:[R("Hát ru “À ơi”"),R("Ầu ơ ví dầu","audau")],en:["hello","mommy"],zh:[]},
     {sub:"Bú no, ngủ ngon",vi:[R("Ầu ơ ví dầu","audau"),R("Hát ru “À ơi”")],en:["milk","sleep"],zh:[]},
     {sub:"Bé tắm",vi:[D("Chi chi chành chành","chichi"),R("Hát ru “À ơi”")],en:["bath","water"],zh:[]},
     {sub:"Ôm con",vi:[R("Ầu ơ ví dầu","audau"),D("Chi chi chành chành","chichi")],en:["hug","love"],zh:[]}]},
 {ten:"Gương mặt và tiếng ru",bg:"home",
  games:[G("Soi gương cùng mẹ","Bế bé trước gương, chỉ: mắt mẹ, mắt con."),G("Thẻ đen – trắng – đỏ","Cho bé xem thẻ khuôn mặt và hình tròn, mỗi lần 2–3 thẻ."),G("Nằm sấp với đồ chơi","Đặt đồ chơi màu phía trước khi bé nằm sấp, 3–5 phút mỗi lần."),G("Đạp chân vào chuông","Treo vật kêu gần chân khi bé nằm ngửa; mẹ ngồi ngay cạnh."),G("Theo dõi đồ chơi","Đưa đồ chơi màu thật chậm qua tầm mắt bé."),G("Trò chuyện ê a","Bé ê a, mẹ đáp lại, rồi chờ lượt bé.")],
  out:G("Nghe tiếng ngoài sân","Bế bé ra sân hoặc ban công, gọi tên tiếng chim, tiếng xe."),
  en:{s:"Rock-a-Bye Baby",u:SSS,sb:"Look at mommy."},zh:{s:"",sb:""},
  v:[{sub:"Mắt mẹ, mắt con",vi:[D("Chi chi chành chành","chichi"),R("Hát ru “À ơi”")],en:["eyes","smile"],zh:[]},
     {sub:"Tiếng ru ba miền",vi:[R("Ầu ơ ví dầu","audau"),R("Ru em (Huế)")],en:["sleep","night night"],zh:[]},
     {sub:"Bàn tay bé",vi:[D("Chi chi chành chành","chichi"),D("Tập tầm vông","taptam")],en:["hands","clap"],zh:[]},
     {sub:"Mẹ cười, bé cười",vi:[R("Ầu ơ ví dầu","audau"),D("Tập tầm vông","taptam")],en:["happy","smile"],zh:[]}]},
 {ten:"Cơ thể và cảm giác",bg:"home",
  games:[G("Với lấy đồ chơi","Đặt đồ chơi vừa tầm với, chờ bé với lấy."),G("Chuyền đồ chơi","Đưa vòng gỗ to vào tay, xem bé chuyển sang tay kia."),G("Ú òa với khăn","Mẹ che mặt bằng khăn mỏng rồi mở ra: “Ú òa!”"),G("Sờ chất liệu","Cho bé sờ khăn bông, vải lụa; mẹ nói “mềm”, “trơn”."),G("Tập lẫy","Đặt đồ chơi chếch một bên để bé lẫy, lăn người."),G("Đập trống","Úp nồi nhựa, cho bé đập tay lên.")],
  out:G("Ngắm lá cây","Bế bé dưới tán cây, cho bé nhìn lá đung đưa, sờ chiếc lá to."),
  en:{s:"Open Shut Them",u:YT.open.u,sb:"Can you reach it?"},zh:{s:"",sb:""},
  v:[{sub:"Tay bé nắm",vi:[D("Tập tầm vông","taptam"),D("Chi chi chành chành","chichi")],en:["hands","hold"],zh:[]},
     {sub:"Chân bé đạp",vi:[D("Kéo cưa lừa xẻ","keocua"),R("Ầu ơ ví dầu","audau")],en:["feet","kick"],zh:[]},
     {sub:"Ú òa",vi:[D("Kéo cưa lừa xẻ","keocua"),D("Tập tầm vông","taptam")],en:["peekaboo","hello"],zh:[]},
     {sub:"Mềm và cứng",vi:[D("Nu na nu nống","nuna"),R("Hát ru “À ơi”")],en:["soft","ball"],zh:[]}]},
 {ten:"Mẹ và bé, ú òa",bg:"home",
  games:[G("Giấu đồ dưới khăn","Giấu đồ chơi quen dưới khăn khi bé đang nhìn, hỏi “Đâu rồi?”"),G("Cho vào – lấy ra","Hộp to và 3 khối to; mẹ làm mẫu, bé làm theo."),G("Gõ hai vật","Gõ 2 cốc nhựa vào nhau theo nhịp đồng dao."),G("Ú òa sau rèm","Mẹ nấp sau rèm rồi ló ra gọi tên bé."),G("Sách vải","Lật sách vải, chỉ hình, gọi tên."),G("Lăn bóng","Ngồi đối diện, lăn bóng to qua lại.")],
  out:G("Chào hàng xóm","Bế bé đi quanh xóm, vẫy tay chào mọi người."),
  en:{s:"Skidamarink",u:YT.ska.u,sb:"Where's mommy? Peekaboo!"},zh:{s:"小星星",u:BEVA,sb:"妈妈在这儿！Māma zài zhèr!"},
  v:[{sub:"Ú òa",vi:[D("Kéo cưa lừa xẻ","keocua"),T("Yêu mẹ")],en:["peekaboo","mommy"],zh:[["妈妈","māma","mẹ"]]},
     {sub:"Đâu rồi?",vi:[D("Tập tầm vông","taptam"),T("Bé ơi")],en:["where","here"],zh:[["在这儿","zài zhèr","ở đây"]]},
     {sub:"Vỗ tay",vi:[D("Nu na nu nống","nuna"),T("Yêu mẹ")],en:["clap","more"],zh:[["拍拍手","pāi pāi shǒu","vỗ tay"]]},
     {sub:"Bye-bye",vi:[D("Chi chi chành chành","chichi"),T("Bé ơi")],en:["bye-bye","hello"],zh:[["再见","zàijiàn","tạm biệt"]]}]},
 {ten:"Gia đình nhà mình",bg:"home",x:"ongba",
  games:[G("Xem album gia đình","Ảnh in bố, mẹ, ông, bà; mẹ gọi tên, bé chỉ."),G("Gõ nồi theo nhạc","Úp nồi nhựa, gõ theo nhịp bài hát."),G("Nhặt bằng hai ngón","Miếng chuối mềm hoặc bánh tan trong miệng; bé ngồi ghế ăn, có người lớn."),G("Lật sách bìa cứng","Mẹ lật mẫu, bé lật theo từng trang dày."),G("Ai đây?","Mẹ hỏi “Bố đâu?”, “Bà đâu?” khi cả nhà ngồi cùng."),G("Cho vào hộp có lỗ","Thả bóng to qua lỗ khoét trên nắp hộp.")],
  out:G("Thăm ông bà","Đến nhà ông bà hoặc gọi video, bé vẫy tay chào."),
  en:{s:"Skidamarink",u:YT.ska.u,sb:"Where's daddy?"},zh:{s:"世上只有妈妈好",u:BEVA,sb:"爸爸在哪儿？Bàba zài nǎr?"},
  v:[{sub:"Bố và mẹ",vi:[H("Cả nhà thương nhau"),T("Yêu mẹ")],en:["mommy","daddy"],zh:[["爸爸","bàba","bố"],["妈妈","māma","mẹ"]]},
     {sub:"Ông và bà",vi:[D("Bà còng đi chợ","bacong"),H("Cả nhà thương nhau")],en:["grandma","grandpa"],zh:[["奶奶","nǎinai","bà nội"]]},
     {sub:"Em bé nhà mình",vi:[D("Kéo cưa lừa xẻ","keocua"),D("Bà còng đi chợ","bacong")],en:["baby","family"],zh:[["宝宝","bǎobao","em bé"]]},
     {sub:"Nhà mình",vi:[H("Cả nhà thương nhau"),T("Bé ơi")],en:["home","love"],zh:[["家","jiā","nhà"]]}]},
 {ten:"Con vật quanh nhà",bg:"vuon",x:"pets",
  games:[G("Tìm con vật trong sách","Mẹ hỏi “Con mèo đâu?”, bé chỉ vào tranh."),G("Bắt chước tiếng kêu","Gâu gâu, meo meo, ò ó o: mẹ kêu, bé kêu theo."),G("Thả vật vào hộp có lỗ","Thả con vật nhựa to qua lỗ trên nắp hộp."),G("Đuổi theo bóng","Lăn bóng để bé bò hoặc vịn đi theo."),G("Đẩy xe con vật","Đẩy xe đồ chơi chở con vật qua lại."),G("Tiếng kêu là con gì?","Mẹ kêu, bé chỉ vào hình con vật.")],
  out:G("Đi xem con vật thật","Xem gà, chó, mèo, cá trong xóm hoặc công viên."),
  en:{s:"Old MacDonald",u:SSS,sb:"What does the dog say?"},zh:{s:"两只老虎",u:BEVA,sb:"小狗汪汪。Xiǎogǒu wāngwāng."},
  v:[{sub:"Con chó, con mèo",vi:[D("Con mèo mà trèo cây cau","conmeo"),T("Mèo con đi học")],en:["dog","cat"],zh:[["狗","gǒu","chó"],["猫","māo","mèo"]]},
     {sub:"Con gà, con vịt",vi:[D("Con gà cục tác lá chanh","conga"),H("Một con vịt")],en:["duck","chicken"],zh:[["鸭子","yāzi","vịt"]]},
     {sub:"Con cá",vi:[D("Con mèo mà trèo cây cau","conmeo"),T("Gà mẹ đếm con")],en:["fish","swim"],zh:[["鱼","yú","cá"]]},
     {sub:"Con chim, con kiến",vi:[D("Con kiến mà leo cành đa","conkien"),H("Một con vịt")],en:["bird","ant"],zh:[["小鸟","xiǎoniǎo","chim"]]}]},
 {ten:"Cơ thể bé",bg:"home",
  games:[G("Mũi đâu? Tai đâu?","Mẹ hỏi, bé chỉ trên mặt mình, rồi trên mặt mẹ."),G("Chồng 2 khối","Mẹ chồng mẫu, bé chồng theo rồi đẩy đổ."),G("Tự bốc ăn","Miếng nhỏ mềm, bé ngồi ghế ăn, mẹ ngồi cạnh."),G("Vẽ nguệch ngoạc","Bút sáp to, giấy dán xuống bàn."),G("Rửa tay cùng mẹ","Xoa xà phòng, đếm “một, hai”, xả nước."),G("Đi men đẩy xe","Bé vịn xe đẩy đồ chơi đi từ phòng này sang phòng kia.")],
  out:G("Đi chân trần trên cỏ","Cho bé đứng, đi chân trần trên cỏ sạch; mẹ nói “mát”, “nhột”."),
  en:{s:"Head, Shoulders, Knees and Toes",u:SSS,sb:"Where's your nose?"},zh:{s:"头发肩膀膝盖脚",u:BEVA,sb:"鼻子在哪儿？Bízi zài nǎr?"},
  v:[{sub:"Mắt, mũi, miệng",vi:[T("Đôi bàn tay nhỏ"),D("Chi chi chành chành","chichi")],en:["eyes","nose","mouth"],zh:[["鼻子","bízi","mũi"]]},
     {sub:"Bàn tay",vi:[D("Tập tầm vông","taptam"),T("Đôi bàn tay nhỏ")],en:["hands","clap"],zh:[["手","shǒu","tay"]]},
     {sub:"Bàn chân",vi:[D("Dung dăng dung dẻ","dungdang"),D("Tập tầm vông","taptam")],en:["feet","walk"],zh:[["脚","jiǎo","chân"]]},
     {sub:"Rửa mặt",vi:[H("Rửa mặt như mèo"),T("Đôi bàn tay nhỏ")],en:["wash","face"],zh:[["洗手","xǐshǒu","rửa tay"]]}]},
 {ten:"Ăn, tắm, ngủ",bg:"home",
  games:[G("Thả hình vào hộp khuôn","Hình tròn trước, rồi vuông, rồi tam giác."),G("Chuyển khăn","Chuyển khăn từ rổ này sang rổ kia, đếm “một, hai”."),G("Tắm cho búp bê","Chậu nước ấm, khăn nhỏ; bé lau tay, chân búp bê."),G("Rót nước khi tắm","Cốc nhựa trong chậu tắm: múc, rót, nhìn nước chảy."),G("Đắp chăn cho gấu","Bé đặt gấu nằm, đắp khăn, hát ru gấu."),G("Mở nắp hộp","Hộp nhựa nắp lỏng, bên trong có đồ chơi bé thích.")],
  out:G("Đi chợ mua rau","Bé cầm 1 bó rau, mẹ gọi tên rau."),
  en:{s:"Bath song",u:SSS,sb:"Time for bath!"},zh:{s:"",u:"",sb:"我们吃饭吧。Wǒmen chīfàn ba."},
  v:[{sub:"Giờ ăn",vi:[T("Giúp mẹ"),D("Cái bống","caibong")],en:["eat","spoon"],zh:[["吃饭","chīfàn","ăn cơm"]]},
     {sub:"Giờ tắm",vi:[D("Nu na nu nống","nuna"),T("Giúp mẹ")],en:["bath","water"],zh:[["水","shuǐ","nước"]]},
     {sub:"Giờ ngủ",vi:[R("Hát ru “À ơi”"),D("Cái bống","caibong")],en:["sleep","night night"],zh:[["睡觉","shuìjiào","ngủ"]]},
     {sub:"Cốc, thìa, bát",vi:[D("Cái bống","caibong"),T("Giúp mẹ")],en:["cup","bowl"],zh:[["杯子","bēizi","cốc"]]}]},
 {ten:"Màu sắc, hoa quả",bg:"home",
  games:[G("Chồng 3–4 khối","Xây tháp, đếm “một, hai, ba”, rồi đẩy đổ."),G("Lật trang sách bìa cứng","Bé tự lật, mẹ gọi tên quả trong tranh."),G("Chia quả vào 2 rổ","Cam vào rổ này, chuối vào rổ kia."),G("Nếm và gọi tên quả","Miếng quả mềm, cắt nhỏ; mẹ nói tên và vị."),G("Tìm đồ màu đỏ","Đi quanh nhà tìm 3 đồ màu đỏ."),G("Bóc vỏ chuối","Mẹ bóc mở đầu, bé bóc tiếp.")],
  out:G("Đi chợ hoa quả","Chỉ và gọi tên 3 loại quả."),
  en:{s:"Colors song",u:SSS,sb:"Red apple! Yellow banana!"},zh:{s:"拔萝卜",u:BEVA,sb:"红色的苹果。Hóngsè de píngguǒ."},
  v:[{sub:"Quả chuối, quả cam",vi:[T("Bắp cải xanh"),H("Quả")],en:["banana","orange"],zh:[["香蕉","xiāngjiāo","chuối"]]},
     {sub:"Màu đỏ",vi:[T("Con công hay múa"),T("Bắp cải xanh")],en:["red","apple"],zh:[["红色","hóngsè","màu đỏ"],["苹果","píngguǒ","táo"]]},
     {sub:"Màu vàng",vi:[H("Quả"),T("Con công hay múa")],en:["yellow","sun"],zh:[["黄色","huángsè","màu vàng"]]},
     {sub:"Rau xanh",vi:[T("Bắp cải xanh"),D("Cái bống","caibong")],en:["green","leaf"],zh:[["绿色","lǜsè","màu xanh lá"]]}]},
 {ten:"Ông bà, quê nội – quê ngoại",bg:"home",x:"ongba",
  games:[G("Nối hình với bóng","Phiếu 02: đồ của ông bà (kính, gậy, quạt, nón); 3 cặp là đủ."),G("Chia 2 màu","Chia khăn đỏ, khăn vàng vào 2 rổ."),G("Nặn bánh biếu bà","Lăn viên to, ấn dẹt thành “bánh”."),G("Xúc thìa","Chuyển 3–4 quả bóng nhựa to từ bát này sang bát kia."),G("Xâu vòng tặng bà","Xâu 3 vòng to vào dây cứng."),G("Mời ông uống trà","Rót nước nguội từ cốc sang chậu, trải khăn bên dưới.")],
  out:G("Gọi video ông bà","Bé chào, “đọc” đồng dao cho ông bà nghe."),
  en:{s:"Skidamarink",u:YT.ska.u,sb:"Where's grandma?"},zh:{s:"",u:"",sb:"跟爷爷说你好。Gēn yéye shuō nǐ hǎo."},
  v:[{sub:"Ông bà nội",vi:[D("Bà còng đi chợ","bacong"),H("Cả nhà thương nhau")],en:["grandma","grandpa"],zh:[["奶奶","nǎinai","bà nội"],["爷爷","yéye","ông nội"]]},
     {sub:"Ông bà ngoại",vi:[D("Bà còng đi chợ","bacong"),T("Thăm nhà bà")],en:["hello","bye-bye"],zh:[["外婆","wàipó","bà ngoại"],["外公","wàigōng","ông ngoại"]]},
     {sub:"Ông bà, quê nội – quê ngoại",vi:[D("Bà còng đi chợ","bacong"),D("Dung dăng dung dẻ","dungdang")],en:["grandma","grandpa","hug"],zh:[["奶奶","nǎinai","bà nội"],["外婆","wàipó","bà ngoại"]]},
     {sub:"Quà cho bà",vi:[D("Dung dăng dung dẻ","dungdang"),T("Bà và cháu")],en:["hug","love"],zh:[["抱抱","bàobao","ôm"]]}]},
 {ten:"Bạn bè và cảm xúc",bg:"park",
  games:[G("Mặt vui – mặt buồn","Thẻ cảm xúc: mẹ làm mặt theo, bé làm theo mẹ."),G("Nặn đất","Nặn viên tròn tặng bạn."),G("Xâu vòng to","Xâu 3–4 vòng làm vòng tặng bạn."),G("Chia đồ chơi cho búp bê","“Một cái cho gấu, một cái cho bé.”"),G("Ôm gấu khi buồn","Đóng vai gấu buồn, bé ôm gấu."),G("Xúc thìa","Xúc bóng nhựa to mời búp bê “ăn”.")],
  out:G("Chơi cạnh bạn ở sân","Chơi gần bạn, chào bạn, cho bạn mượn đồ."),
  en:{s:"If You're Happy",u:YT.happy.u,sb:"Are you happy?"},zh:{s:"找朋友",u:BEVA,sb:"你好，朋友！Nǐ hǎo, péngyou!"},
  v:[{sub:"Vui",vi:[T("Mèo con đi học"),T("Lời chào")],en:["happy","smile"],zh:[["开心","kāixīn","vui"]]},
     {sub:"Buồn",vi:[T("Lời chào"),D("Con vỏi con voi","convoi")],en:["sad","hug"],zh:[["抱抱","bàobao","ôm"]]},
     {sub:"Bạn của bé",vi:[D("Dung dăng dung dẻ","dungdang"),T("Mèo con đi học")],en:["friend","hello"],zh:[["朋友","péngyou","bạn"]]},
     {sub:"Chia đồ chơi",vi:[D("Con vỏi con voi","convoi"),T("Lời chào")],en:["share","thank you"],zh:[["谢谢","xièxie","cảm ơn"]]}]},
 {ten:"Trời đất, nắng mưa",bg:"vuon",
  games:[G("To – nhỏ","Nón to/nón nhỏ, ô to/ô nhỏ: “Đưa mẹ cái to.”"),G("Rót nước","Rót nước nguội từ cốc sang chậu."),G("Xé giấy làm mưa","Xé giấy xanh thành mảnh, thả xuống như mưa."),G("Phân loại 2 màu","Vàng (nắng) và xanh (mưa) vào 2 rổ."),G("Thả lá vào chậu nước","Xem lá nổi, thổi lá đi."),G("Vẽ mặt trời","Mẹ vẽ hình tròn, bé vẽ tia nắng.")],
  out:G("Ngắm trời","Ra sân xem mây, nắng; trời mưa thì nghe tiếng mưa từ hiên nhà."),
  en:{s:"Rain, Rain, Go Away",u:SSS,sb:"Look! It's raining."},zh:{s:"小星星",u:BEVA,sb:"下雨了！Xià yǔ le!"},
  v:[{sub:"Mặt trời",vi:[T("Ông giẳng ông giăng"),H("Trời nắng trời mưa")],en:["sun","hot"],zh:[["太阳","tàiyáng","mặt trời"]]},
     {sub:"Mưa",vi:[H("Trời nắng trời mưa"),D("Con kiến mà leo cành đa","conkien")],en:["rain","wet"],zh:[["下雨","xià yǔ","mưa"]]},
     {sub:"Mây và gió",vi:[T("Ông giẳng ông giăng"),D("Con kiến mà leo cành đa","conkien")],en:["cloud","wind"],zh:[["风","fēng","gió"]]},
     {sub:"Trăng sao",vi:[T("Ông giẳng ông giăng"),R("Hát ru “À ơi”")],en:["moon","star"],zh:[["月亮","yuèliang","trăng"]]}]},
 {ten:"Đường phố và xe cộ",bg:"park",
  games:[G("Ghi nhớ vị trí hình","Úp 3 thẻ xe, mở 1 thẻ, bé tìm thẻ giống."),G("Vặn nắp chai","Chai nhựa to, nắp to, vặn mở rồi vặn đóng; mẹ ngồi cạnh, chơi xong cất cả chai."),G("Xếp ghế làm xe buýt","Bé lái, búp bê làm khách."),G("Xe to – xe nhỏ","Chia ô tô đồ chơi to, nhỏ vào 2 bãi."),G("Xé dán đường đi","Xé giấy đen dán thành con đường cho ô tô."),G("Đèn xanh – đèn đỏ","Giơ thẻ đỏ thì dừng, thẻ xanh thì đi.")],
  out:G("Xem xe ở đầu ngõ","Đếm 1–3 chiếc xe, gọi tên xe máy, ô tô, xe buýt."),
  en:{s:"The Wheels on the Bus",u:SSS,sb:"Beep beep! Here comes the bus."},zh:{s:"",u:"",sb:"汽车来了！Qìchē lái le!"},
  v:[{sub:"Xe máy, ô tô",vi:[T("Gánh gánh gồng gồng"),T("Lộn cầu vồng")],en:["car","bus"],zh:[["汽车","qìchē","ô tô"]]},
     {sub:"Đèn giao thông",vi:[T("Lộn cầu vồng"),T("Gánh gánh gồng gồng")],en:["stop","go"],zh:[["红灯","hóngdēng","đèn đỏ"]]},
     {sub:"Xe đạp",vi:[D("Dung dăng dung dẻ","dungdang"),T("Lộn cầu vồng")],en:["bike","ride"],zh:[["自行车","zìxíngchē","xe đạp"]]},
     {sub:"Tàu và thuyền",vi:[T("Gánh gánh gồng gồng"),H("Con cò bé bé")],en:["train","boat"],zh:[["船","chuán","thuyền"]]}]},
 {ten:"Đồng quê Việt Nam",bg:"vuon",x:"pets",
  games:[G("Chia rau, củ, quả","Rau vào rổ này, củ quả vào rổ kia."),G("Xếp tranh 2 bước","Hạt gieo xuống → cây mọc lên."),G("Gieo hạt vào cốc đất","Mẹ cầm hạt (bé không cầm), bé lấp đất, tưới nước."),G("Nặn con trâu","Nặn thân, gắn 4 chân, 2 sừng."),G("Đếm gà 1–3","Đếm gà trong tranh hoặc gà thật."),G("Ghép tranh 3 mảnh","Tranh con trâu cắt 3 mảnh to.")],
  out:G("Về quê hoặc đi công viên","Xem lúa, trâu, cò hoặc cây, hoa, ao cá."),
  en:{s:"Old MacDonald",u:SSS,sb:"Moo! It's a cow."},zh:{s:"拔萝卜",u:BEVA,sb:"小鸭子，嘎嘎嘎。Xiǎo yāzi, gā gā gā."},
  v:[{sub:"Cánh đồng lúa",vi:[D("Cái bống","caibong"),H("Con cò bé bé")],en:["rice","field"],zh:[["米饭","mǐfàn","cơm"]]},
     {sub:"Con trâu",vi:[D("Con gà cục tác lá chanh","conga"),D("Cái bống","caibong")],en:["cow","farm"],zh:[["牛","niú","trâu, bò"]]},
     {sub:"Con cò",vi:[H("Con cò bé bé"),D("Con kiến mà leo cành đa","conkien")],en:["bird","fly"],zh:[["鸟","niǎo","chim"]]},
     {sub:"Ao cá",vi:[D("Con mèo mà trèo cây cau","conmeo"),T("Gánh gánh gồng gồng")],en:["fish","pond"],zh:[["鱼","yú","cá"]]}]},
 {ten:"Nghề nghiệp, giúp đỡ",bg:"home",
  games:[G("Đóng vai bác sĩ","Khám cho gấu: nghe tim, dán băng."),G("Chép nét thẳng","Mẹ kẻ nét đứt to, bé tô theo."),G("Phụ mẹ nhặt rau","Bé nhặt lá rau vào rổ."),G("Cất đồ chơi vào hộp","Hát bài dọn dẹp, cất từng món."),G("Đóng vai bán hàng","Bé bán quả, mẹ mua, nói “cảm ơn”."),G("Gấp khăn nhỏ","Gấp đôi khăn vuông nhỏ.")],
  out:G("Chào người làm việc quanh xóm","Chào bác bán hàng, chú bảo vệ, cô lao công."),
  en:{s:"Clean Up song",u:SSS,sb:"Can you help me?"},zh:{s:"",u:"",sb:"谢谢你帮我。Xièxie nǐ bāng wǒ."},
  v:[{sub:"Bác sĩ",vi:[T("Làm bác sĩ"),T("Cô dạy")],en:["doctor","sick"],zh:[["医生","yīshēng","bác sĩ"]]},
     {sub:"Cô giáo",vi:[T("Cô dạy"),T("Lời chào")],en:["teacher","book"],zh:[["老师","lǎoshī","cô giáo"]]},
     {sub:"Giúp mẹ",vi:[T("Giúp mẹ"),D("Cái bống","caibong")],en:["help","clean"],zh:[["帮忙","bāngmáng","giúp"]]},
     {sub:"Bác nông dân",vi:[D("Con gà cục tác lá chanh","conga"),T("Làm bác sĩ")],en:["farmer","plant"],zh:[["种","zhòng","trồng"]]}]},
 {ten:"Lễ hội Việt (đẩy theo lịch)",bg:"home",x:"ongba",
  games:[G("Xé dán đèn ông sao","Dán giấy màu lên khung sao bìa cứng mẹ cắt sẵn."),G("Dán sticker thiệp Tết","Thiệp tặng ông bà."),G("Gói bánh chưng giả","Gói hộp vuông bằng khăn xanh."),G("Nặn bánh trung thu","Nặn tròn, ấn hoa văn bằng đáy cốc nhựa."),G("Rước đèn quanh nhà","Cầm đèn, hát, đi một vòng quanh nhà."),G("Bày mâm ngũ quả","Bày quả thật lên đĩa, đếm 1–3.")],
  out:G("Xem phố lễ hội","Xem đèn lồng, hoa đào, hoa mai."),
  en:{s:"Happy New Year song",u:SSS,sb:"Happy New Year!"},zh:{s:"新年好",u:BEVA,sb:"新年快乐！Xīnnián kuàilè!"},
  v:[{sub:"Trung thu",vi:[H("Chiếc đèn ông sao"),T("Ông giẳng ông giăng")],en:["moon","lantern"],zh:[["月亮","yuèliang","trăng"]]},
     {sub:"Rước đèn",vi:[H("Rước đèn tháng tám"),H("Chiếc đèn ông sao")],en:["light","walk"],zh:[["灯笼","dēnglong","đèn lồng"]]},
     {sub:"Tết",vi:[H("Sắp đến Tết rồi"),H("Cả nhà thương nhau")],en:["New Year","flower"],zh:[["新年","xīnnián","năm mới"]]},
     {sub:"Lì xì, chúc Tết",vi:[H("Sắp đến Tết rồi"),D("Bà còng đi chợ","bacong")],en:["thank you","family"],zh:[["红包","hóngbāo","lì xì"]]}]},
 {ten:"Đất nước Việt Nam",bg:"vuon",
  games:[G("Ghép tranh 3–4 mảnh","Tranh lá cờ, tranh biển cắt mảnh to."),G("Đếm 1–3","Đếm sao, đếm thuyền trong tranh."),G("Tô màu lá cờ","Nền đỏ, sao vàng, bút sáp to."),G("Xếp tranh 3 bước","Mây kéo đến → mưa → cây lớn."),G("Nhớ vị trí 3 hình","Úp 3 thẻ, mở thẻ, bé nhớ chỗ."),G("Nặn núi, sông","Nặn núi nâu, sông xanh.")],
  out:G("Đi công viên, bờ hồ","Tìm lá cờ đỏ sao vàng, cây, hồ nước."),
  en:{s:"Ten Little Fingers",u:SSS,sb:"One, two, three!"},zh:{s:"数鸭子",u:BEVA,sb:"一、二、三！Yī, èr, sān!"},
  v:[{sub:"Lá cờ",vi:[H("Lá cờ Việt Nam"),T("Ông giẳng ông giăng")],en:["flag","red"],zh:[["红色","hóngsè","màu đỏ"]]},
     {sub:"Biển",vi:[H("Con cò bé bé"),H("Lá cờ Việt Nam")],en:["sea","boat"],zh:[["大海","dàhǎi","biển"]]},
     {sub:"Núi và sông",vi:[H("Quê hương tươi đẹp"),D("Con kiến mà leo cành đa","conkien")],en:["mountain","river"],zh:[["山","shān","núi"]]},
     {sub:"Hà Nội của bé",vi:[H("Quê hương tươi đẹp"),H("Lá cờ Việt Nam")],en:["city","home"],zh:[["一二三","yī èr sān","một hai ba"]]}]},
 {ten:"Bé kể – sẵn sàng đi lớp",bg:"park",
  games:[G("Xâu hạt to","Hạt gỗ to hơn lòng bàn tay mẹ, dây cứng."),G("Tháp 8–10 khối","Xây tháp, đếm, rồi đẩy đổ."),G("Kể theo 3 tranh","Bé xếp 3 tranh, kể mỗi tranh 1 câu."),G("Đóng vai đi lớp","Đeo balo, chào mẹ, chào cô."),G("Tự cất giày dép","Đặt giày đúng chỗ, đúng đôi."),G("Phân loại theo hình","Tròn, vuông, tam giác vào 3 hộp.")],
  out:G("Thăm trường mầm non","Đi ngang trường, xem sân chơi, nói về lớp học."),
  en:{s:"Hello song",u:SSS,sb:"Hello! What's your name?"},zh:{s:"找朋友",u:BEVA,sb:"你叫什么名字？Nǐ jiào shénme míngzi?"},
  v:[{sub:"Bé kể về mình",vi:[T("Đôi bàn tay nhỏ"),T("Lời chào")],en:["my name","hello"],zh:[["我","wǒ","tôi, con"]]},
     {sub:"Bé kể về nhà",vi:[H("Cả nhà thương nhau"),T("Yêu mẹ")],en:["home","family"],zh:[["家","jiā","nhà"]]},
     {sub:"Đi lớp",vi:[T("Cô dạy"),T("Mèo con đi học")],en:["school","friend"],zh:[["老师","lǎoshī","cô giáo"]]},
     {sub:"Ôn 10 bài yêu thích",vi:[D("Bà còng đi chợ","bacong"),D("Dung dăng dung dẻ","dungdang")],en:["I love you","thank you"],zh:[["我爱你","wǒ ài nǐ","con yêu mẹ"]]}]}
];

function gdOf(g){ for(var i=0;i<GD.length;i++){ if(g>=GD[i].from&&g<=GD[i].to) return GD[i]; } return GD[0]; }
/* nội dung soạn tay (noi-dung.js) ghi đè khung tự động khi có */
var TYMAP={dong_dao:"d",ca_dao:"d",ve:"d",cau_do:"d",hat_ru:"r",tho:"t",bai_hat:"h"};
function det(g){ var D=window.CT_DETAIL; return D&&D[g]&&D[g].days&&D[g].days.length===14?D[g]:null; }
function lyrKey(g,title){ return "g"+g+":"+title; }
function detVi(g,v){ var ty=TYMAP[v.type]||"t"; if(v.lyr){ LYR[lyrKey(g,v.t)]=v.lyr; } return {t:v.t,k:v.lyr?lyrKey(g,v.t):null,ty:ty,author:v.author||null}; }
function info(g){
  var t=Math.floor((g-1)/4), th=TH[t], vo=th.v[(g-1)%4], gd=gdOf(g), D=det(g);
  if(D){ vo={sub:D.sub||vo.sub, vi:[detVi(g,D.weeks[0].vi[0]),detVi(g,(D.weeks[1].vi[0]||D.weeks[0].vi[0]))], en:(D.en&&D.en.words)||vo.en, zh:(D.zh&&D.zh.words)||[]}; }
  return {g:g, chang:Math.ceil(g/6), vInChang:(g-1)%6+1, thang:Math.floor((g-1)/2)+1, theme:th, themeIdx:t, vong:vo, gd:gd, under18:g<=36, det:D};
}
function detDays(g,D){
  D.weeks.forEach(function(w){ (w.vi||[]).forEach(function(v){ detVi(g,v); }); });
  return D.days.map(function(d,i){
    var o={}; for(var k in d) o[k]=d[k];
    o.w=i<7?1:2; o.wd=i%7; o.diary=i===13||!!d.diary;
    o.lyr=(d.lyr&&LYR[lyrKey(g,d.lyr)])?lyrKey(g,d.lyr):null;
    if(!o.nn) o.nn={l:"none",t:"Nghỉ. Chỉ gắn 1–2 từ khi tắm, khi ăn."};
    if(o.short&&o.short.nn===undefined) o.short.nn=null;
    return o; });
}
function zhFmt(arr){ return arr.map(function(z){return z[0]+" "+z[1]+" ("+z[2]+")";}).join(", "); }

/* sinh 14 ngày cho vòng g */
function days(g){
  var DD=det(g); if(DD) return detDays(g,DD);
  var I=info(g), th=I.theme, vo=I.vong, gd=I.gd, out=[];
  var gm=th.games, order1=[0,1,2,3,4], order2=[5,0,1,2,3];
  for(var n=1;n<=14;n++){
    var w=n<=7?1:2, wd=(n-1)%7, vi=vo.vi[w-1], viOther=vo.vi[0];
    var d={w:w,wd:wd};
    var sang=gd.sang(vi.t); if(w===2&&wd>=2&&viOther.t!==vi.t) sang+=" Ôn “"+viOther.t+"”.";
    if(vi.ty==="t") sang+=" (Lời trong gói học liệu.)";
    d.sang=sang; d.lyr=vi.k; d.viTitle=vi.t;
    var game=null;
    if(wd<5){ game=gm[(w===1?order1:order2)[wd]]; d.chuyen=game.t; d.choi=game.d; d.ob="Cùng bé: "+game.d; }
    else if(wd===5){ if(w===1){ d.chuyen=th.out.t; d.choi=th.out.d; } else { d.chuyen="Chơi lại trò bé thích"; d.choi="Chọn lại 2 trò bé thích nhất trong vòng: "+gm[0].t+", "+gm[5].t+"."; } }
    else { d.chuyen=w===1?"Ngày nghỉ, ôn bài cũ":(gd.id<=2?"Một ngày bên con":"Kể lại cho bố nghe"); d.choi="Không bài mới. Chơi lại trò bé thích nhất trong tuần."; }
    var lang=gd.nn[wd]; var en=vo.en, zh=vo.zh;
    if(lang==="zh"&&!zh.length) lang="none";
    var aud=I.under18?" Chỉ bật âm thanh, không cho bé xem màn hình.":" Xem cùng mẹ, dưới 10 phút.";
    if(lang==="en"){ var first=(wd===0);
      d.nn={l:"en",t:(gd.id===1?"Bật nhỏ tiếng 1 bài tiếng Anh khi bế bé. Từ của vòng: ":"Từ của vòng: ")+en.join(", ")+"."+(first||wd===4?aud:" Nói từ đúng lúc làm việc đó."),
        song:(first||wd===4||gd.id===1)?{t:th.en.s,u:th.en.u}:null,b:th.en.sb}; }
    else if(lang==="zh"){ var withSong=(wd===3||gd.nn.indexOf("zh")===wd&&gd.id===2)&&th.zh.s;
      d.nn={l:"zh",t:zhFmt(zh)+": nghe audio A3, chỉ vào vật thật."+(withSong?aud:""),song:withSong?{t:th.zh.s,u:th.zh.u}:null,b:th.zh.sb||null}; }
    else if(lang==="both"){ d.nn={l:"both",t:"Ôn: "+en.join(", ")+(zh.length?" · "+zhFmt(zh):"")+".",b:(th.en.sb+(th.zh.sb?" · "+th.zh.sb:""))}; }
    else d.nn={l:"none",t:"Nghỉ. Chỉ gắn 1–2 từ khi tắm, khi ăn."};
    d.toi=gd.toi+(n===14?" Sau khi bé ngủ, mẹ điền nhật ký vòng (10 phút, hạn 21:00).":"");
    d.diary=n===14;
    if(wd===5) d.short={choi:"2 trò của tuần: "+gm[(w===1?0:5)].t+", "+gm[(w===1?2:3)].t+". "+(w===1?th.out.t+".":""),nn:th.en.s,u:th.en.u};
    if(wd===6) d.short={choi:(w===1?th.out.d:"Chơi lại trò bé thích nhất trong vòng."),nn:null};
    out.push(d);
  }
  return out;
}
function detFiles(g,w,D){
  var wk=D.weeks[w-1], small=g<=24, pr=(D.printables||[]).map(function(p){return p.name;}).slice(0,3).join(", ");
  var list=[["PDF","var(--red)","00_HuongDan.pdf","Kế hoạch 7 ngày: "+wk.title+", ô tick “đã làm”"],
    ["PDF","var(--red)","01_Tho.pdf",wk.vi.map(function(v){return v.t+(v.author?" ("+v.author+")":"");}).join(" · ")],
    ["PDF","var(--red)",small?"02_TheTranh.pdf":"02_TuDuy.pdf",pr||(small?"Thẻ tranh cho mẹ giơ":"Phiếu chơi của tuần")],
    ["PDF","var(--red)","03_VanDongTinh.pdf","Ảnh mẫu, đồ cần chuẩn bị, nhắc an toàn"],
    ["PDF","var(--red)","04_AnhTrung.pdf",(D.en.words||[]).join(", ")+((D.zh&&D.zh.words&&D.zh.words.length)?" · "+D.zh.words.map(function(z){return z[0];}).join(", "):"")],
    ["MP3","var(--green)","A1_Tho_Cham.mp3","Cô đọc chậm "+wk.vi[0].t+", có chỗ ngừng để bé điền",wk.vi[0].lyr?"tts":null],
    ["MP3","var(--green)","A2_HatRu_DongDao.mp3","Hát ru + đồng dao của tuần"],
    ["MP3","var(--green)","A3_TuVung_AnhTrung.mp3","Mỗi từ 3 lần + 1 câu, giọng người thật"],
    ["LINK","var(--blue)","05_Link.pdf","Bài hát: "+(D.en.songs||[]).map(function(x){return x.t;}).concat(((D.zh&&D.zh.songs)||[]).map(function(x){return x.t;})).join(" · ")]];
  if(wk.book&&wk.book.vi) list.splice(2,0,["BOOK","var(--purple)","Sach_tuan.pdf","Sách gợi ý: "+wk.book.vi.t+(wk.book.vi.author?" – "+wk.book.vi.author:"")+(wk.book.en?" · "+wk.book.en.t+(wk.book.en.author?" – "+wk.book.en.author:""):"")]);
  if(w===2) list.push(["PDF","var(--pink)","06_NhatKy.pdf","Mẫu nhật ký vòng (bản in)"]);
  return list;
}
function files(g,w){
  var DD=det(g); if(DD) return detFiles(g,w,DD);
  var I=info(g), vo=I.vong, th=I.theme, gm=th.games, vi=vo.vi[w-1], small=I.gd.id<=2;
  var gNames=(w===1?[gm[0],gm[1],gm[2]]:[gm[5],gm[0],gm[1]]).map(function(x){return x.t;}).join(", ");
  var list=[
    ["PDF","var(--red)","00_HuongDan.pdf","Kế hoạch 7 ngày, ô tick “đã làm”"],
    ["PDF","var(--red)","01_Tho.pdf",vi.t+(vi.ty==="d"?" (lời đồng dao)":"")],
    ["PDF","var(--red)",small?"02_TheTranh.pdf":"02_TuDuy.pdf",(small?"Thẻ tranh to cho mẹ giơ: ":"Phiếu chơi: ")+gNames],
    ["PDF","var(--red)","03_VanDongTinh.pdf","Ảnh mẫu, đồ cần chuẩn bị, nhắc an toàn"],
    ["PDF","var(--red)","04_AnhTrung.pdf",vo.en.join(", ")+(vo.zh.length?" · "+vo.zh.map(function(z){return z[0];}).join(", "):"")],
    ["MP3","var(--green)","A1_Tho_Cham.mp3","Cô đọc chậm, có chỗ ngừng để bé điền",vi.k?"tts":null],
    ["MP3","var(--green)","A2_HatRu_DongDao.mp3","Hát ru + đồng dao của tuần"],
    ["MP3","var(--green)","A3_TuVung_AnhTrung.mp3","Mỗi từ 3 lần + 1 câu, giọng người thật"],
    ["LINK","var(--blue)","05_Link.pdf","Bài hát của tuần: "+th.en.s+(th.zh.s?" · "+th.zh.s:"")]
  ];
  if(w===2) list.push(["PDF","var(--pink)","06_NhatKy.pdf","Mẫu nhật ký vòng (bản in)"]);
  return list;
}
return {GD:GD, TH:TH, LYR:LYR, YT:YT, info:info, days:days, files:files, zhFmt:zhFmt, TOTAL:72};
})();
