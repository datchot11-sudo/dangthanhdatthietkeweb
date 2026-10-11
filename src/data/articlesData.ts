import { Article } from '../types/costume';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art_1',
    title: 'Nghệ Thuật Vẽ Sáp Ong & Nhuộm Chàm Tự Nhiên Của Người H\'Mông Hoa',
    slug: 'nghe-thuat-ve-sap-ong-nhuom-cham-hmong-hoa',
    category: 'ky_thuat_det',
    summary: 'Quy trình kỳ công từ việc đun chảy sáp ong rừng, dùng bút đồng cán tre vẽ hoa văn kỷ hà trên nền vải lanh thô đến hàng chục lần dìm trong chum chàm đại ngàn.',
    coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    author: 'TS. Nguyễn Văn Hùng',
    authorRole: 'Nhà Nghiên cứu Viện Văn hóa Dân tộc học',
    publishedAt: '18/08/2025',
    readTime: '6 phút đọc',
    ethnicGroupId: 'H\'Mông',
    tags: ['Vẽ Sáp Ong', 'Nhuộm Chàm', 'Vải Lanh', 'Tây Bắc', 'Bảo Tồn'],
    viewsCount: 1420,
    content: `
### 1. Nguồn Gốc và Ý Nghĩa Biểu Tượng Của Kỹ Thuật Vẽ Sáp Ong

Đối với người H'Mông Hoa vùng núi cao Hà Giang, Lào Cai, Yên Bái, cây lanh và chùm sáp ong là biểu tượng thiêng liêng của cội nguồn. Người phụ nữ H'Mông từ khi còn là thiếu nữ 12, 13 tuổi đã được bà và mẹ dạy cách tước vỏ lanh, se sợi, dệt vải và cầm bút vẽ sáp ong.

Mỗi tấm vải lanh không chỉ là trang phục thường ngày hay bộ váy cưới lộng lẫy, mà còn là "tấm thẻ căn cước" tâm linh để tổ tiên nhận diện con cháu khi về với thế giới bên kia.

### 2. Dụng Cụ Vẽ Sáp Ong "Tj Cho": Sự Tinh Xảo Của Bàn Tay Thủ Công

Dụng cụ vẽ hoa văn sáp ong gồm:
- **Bút vẽ (Tj Cho):** Đầu ngòi làm bằng hai lá đồng mỏng kẹp lại tạo khe hở nhỏ, cán bằng gỗ trúc thanh mảnh dài khoảng 10-15cm.
- **Sáp ong:** Kết hợp giữa sáp ong khoái (màu vàng đậm tạo độ bám dính) và sáp ong mật (màu sáng giúp đường vẽ mềm mại). Sáp được đun chảy liu riu trên một chiếc bát than hồng.

Khi vẽ, người thợ dệt phải giữ nhịp thở đều, độ nghiêng của ngòi bút chính xác từng milimet để sáp ong chảy đều thành các đường kỷ hà, hình ốc sên, hoa hồi, chữ vạn hay vết chân hổ.

### 3. Quy Trình Nhuộm Chàm: 20 Ngày Thẩm Thấu Hồn Đại Ngàn

Sau khi vẽ xong sáp ong, tấm vải được đem đi ngâm và nhuộm trong chum nước chàm. 
- Nước chàm được lên men từ lá cây chàm rừng tươi, vôi tôi, tro bếp và rượu ngô nguyên chất.
- Vải được nhúng chàm rồi phơi nắng mỗi ngày từ 20 đến 30 lần cho đến khi sắc chàm ngả sang màu tím than ánh kim tuyền tuyệt đẹp.
- Cuối cùng, tấm vải được nhúng vào nồi nước sôi để sáp ong tan chảy, làm lộ ra những đường hoa văn màu trắng nguyên sơ của sợi lanh trên nền chàm thăm thẳm.

### 4. Giá Trị Bảo Tồn & Hướng Đi Hiện Đại

Ngày nay, nghệ thuật vẽ sáp ong và dệt lanh H'Mông đã được công nhận là Di sản Văn hóa Phi vật thể Quốc gia. Nhiều hợp tác xã thổ cẩm tại Lùng Tám (Quản Bạ) hay Mù Cang Chải đang kết hợp di sản cổ truyền này vào thời trang ứng dụng đương đại, đưa tinh hoa dân tộc Việt vươn tầm thế giới.
    `,
    comments: [
      {
        id: 'c1',
        userName: 'Lê Minh Trang (Hà Nội)',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        comment: 'Bài viết rất công phu và giàu kiến thức! Tôi từng lên Hà Giang xem các chị em H\'Mông vẽ sáp ong, quả thực từng đường nét đều như một tác phẩm hội họa kỷ hà chuẩn mực.',
        createdAt: '19/08/2025'
      }
    ]
  },
  {
    id: 'art_2',
    title: 'Bí Mật Đằng Sau Hàng Cúc Bướm Bạc Mák Pém Và Chiếc Khăn Piêu Người Thái',
    slug: 'bi-mat-hang-cuc-buom-mak-pem-khan-pieu-nguoi-thai',
    category: 'nghien_cuu',
    summary: 'Hàng cúc bạc hình đôi bướm, ve sầu, lá cây trên áo Cóm cùng chiếc Khăn Piêu thêu hoa cút piêu biểu trưng cho tình yêu chung thủy, trật tự gia đình và vũ trụ quan Mường Trời.',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    author: 'Cầm Văn Quyết',
    authorRole: 'Chuyên gia Ngôn ngữ & Văn hóa Dân tộc Thái',
    publishedAt: '15/08/2025',
    readTime: '5 phút đọc',
    ethnicGroupId: 'Thái',
    tags: ['Áo Cóm', 'Khăn Piêu', 'Mák Pém', 'Trang Sức Bạc', 'Tây Bắc'],
    viewsCount: 1980,
    content: `
### 1. Chiếc Áo Cóm: Tôn Vinh Đường Nét Thanh Tân Của Người Con Gái Thái

Áo Cóm (xửa cóm) của phụ nữ Thái Đen và Thái Trắng bó sát lấy thân hình mảnh mai, cổ áo xẻ hình chữ V khoe chiếc cổ thon cao. Sự kết hợp giữa áo ngắn bó sát và chiếc váy đen (xỉn) dài chấm gót, thắt dải lụa xanh (xài eo) tạo nên tỷ lệ vàng duyên dáng bậc nhất trong trang phục truyền thống Việt Nam.

### 2. Biểu Tượng Cúc Bướm Bạc "Mák Pém"

Điểm nhấn linh hồn của chiếc áo Cóm chính là hai hàng cúc bạc tinh xảo mang tên **Mák Pém**:
- **Cặp đôi âm dương:** Một bên hàng cúc là biểu tượng giống đực (dương), một bên là giống cái (âm). Khi cài cúc lại, hai hàng đan xen nhau biểu thị cho sự hòa hợp âm dương, đất trời và khát vọng lứa đôi son sắt.
- **Số lượng hạt cúc:** Phụ nữ chưa chồng thường cài hàng cúc số lẻ, phụ nữ đã lập gia đình cài hàng cúc số chẵn để thông báo tình trạng hôn nhân một cách tinh tế.
- **Hình dáng chế tác:** Đa phần cúc được thợ rèn bạc chạm khắc hình con bướm (mák pém), con ong, con nhện, bọ ngựa hoặc lá cây rừng.

### 3. Khăn Piêu: Bức Thư Tình Thêu Chỉ Ngũ Sắc

Khăn Piêu không chỉ để che nắng, giữ ấm mà còn là món quà cưới vô giá người con gái Thái thêu dâng tặng mẹ chồng và chồng trong ngày vu quy:
- Bốn góc khăn đính những bông **"cút piêu"** kết bằng vải đỏ hình chóp nón, biểu tượng cho sao trời và sự may mắn.
- Các đường thêu chỉ tơ tằm sắc màu cam, đỏ, xanh, vàng tái hiện các hình ảnh muông thú, hoa ban, hoa mướp gắn bó với đời sống làm nương dệt vải ven suối.
    `,
    comments: []
  },
  {
    id: 'art_3',
    title: 'Huyền Thoại Áo Nhật Bình Triều Nguyễn: Đỉnh Cao Mỹ Thuật Cung Đình Xứ Huế',
    slug: 'huyen-thoai-ao-nhat-binh-trieu-nguyen-cung-dinh-hue',
    category: 'bao_ton',
    summary: 'Tìm hiểu quy chế thêu phượng, viền ngũ hành, ngọc bội vàng bạc và dải dây ngũ sắc trên tà áo Nhật Bình của Hoàng Thái hậu, Hoàng hậu và Công chúa triều đình nhà Nguyễn.',
    coverImage: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80',
    author: 'Trần Đoàn Lâm',
    authorRole: 'Nhà nghiên cứu Mỹ thuật Cổ Triều Nguyễn',
    publishedAt: '10/08/2025',
    readTime: '7 phút đọc',
    ethnicGroupId: 'Kinh (Việt)',
    tags: ['Áo Nhật Bình', 'Triều Nguyễn', 'Cung Đình Huế', 'Di Sản Lịch Sử', 'Thêu Tay'],
    viewsCount: 2310,
    content: `
### 1. Nguồn Gốc và Định Danh Áo Nhật Bình

Áo Nhật Bình là thường phục của bậc Hoàng Thái Hậu, Hoàng Hậu, Hoàng Quý Phi, Công Chúa và là lễ phục của các bậc Mệnh phụ quan lại thời nhà Nguyễn (1802 – 1945). Tên gọi "Nhật Bình" bắt nguồn từ chiếc cổ áo hình chữ nhật bản to vòng qua cổ và buông thẳng xuống trước ngực.

### 2. Quy Chế Màu Sắc & Cấp Bậc Nghiêm Ngặt

Trong Khâm Định Đại Nam Hội Điển Sự Lệ, màu sắc của áo Nhật Bình phản ánh vị trí tôn quý:
- **Màu vàng chính sắc (Chính hoàng):** Dành riêng cho Hoàng Thái Hậu và Hoàng Hậu.
- **Màu đỏ cam / Xích đào:** Dành cho Công chúa và Thái tử phi.
- **Màu tím chính sắc / Tím than:** Dành cho Nhất giai, Nhị giai Phi tần.
- **Màu xanh dương, xanh lục:** Dành cho Tam giai, Tứ giai và các bậc mệnh phụ quý tộc.

### 3. Nghệ Thuật Thêu Tay Đỉnh Cao: Phượng Ổ & Hoa Văn Ngũ Hành

- Thân áo thêu kín các đóa hoa cúc chữ vạn (vạn thọ), đàn bướm lượn, mây ngũ sắc và các hình tròn phượng ổ ngậm hoa sen.
- Tay áo có dải **ngũ hành (Ngũ sắc)** gồm 5 dải lụa viền màu Lục, Vàng, Xanh, Trắng, Đỏ đại diện cho Kim - Mộc - Thủy - Hỏa - Thổ, mang ước nguyện thái bình thịnh trị cho muôn dân.

### 4. Sự Hồi Sinh Mạnh Mẽ Trong Đời Sống Giới Trẻ Ngày Nay

Những năm gần đây, phong trào Cổ phục Việt Nam đã đưa áo Nhật Bình trở lại rực rỡ trong các bộ ảnh cưới cổ truyền, lễ tốt nghiệp và các tuần lễ di sản văn hóa Festival Huế.
    `,
    comments: []
  },
  {
    id: 'art_4',
    title: 'Nghệ Thuật Dệt Dèng Cườm Chì Tà Ôi: Báu Vật Rừng Xanh Vang Vọng Sử Thi Trường Sơn',
    slug: 'nghe-thuat-det-deng-cuom-chi-ta-oi',
    category: 'nghe_nhan',
    summary: 'Nghệ nhân Tà Ôi dùng khung cửi thô sơ dệt nên những dải Dèng đính cườm chì và vỏ ốc độc nhất vô nhị trên thế giới, biểu trưng cho lòng trung trinh và tinh thần đại ngàn.',
    coverImage: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80',
    author: 'Hồ Thị Mai',
    authorRole: 'Nghệ nhân Ưu tú Làng A Hơi, A Lưới',
    publishedAt: '05/08/2025',
    readTime: '4 phút đọc',
    ethnicGroupId: 'Tà Ôi',
    tags: ['Dệt Dèng', 'A Lưới', 'Hạt Cườm Chì', 'Thổ Cẩm Trường Sơn', 'Di Sản'],
    viewsCount: 1150,
    content: `
### 1. Dệt Dèng: Niềm Kiêu Hãnh Của Phụ Nữ Tà Ôi

Dèng là loại thổ cẩm đặc sắc của người Tà Ôi (huyện A Lưới, tỉnh Thừa Thiên Huế). Không dùng con thoi trên khung cửi lớn, người phụ nữ Tà Ôi ngồi bệt dưới sàn nhà rông, căng các sợi chỉ bằng hai bàn chân và lưng để dệt từng đường chỉ.

### 2. Kỹ Thuật Đính Hạt Cườm Chì & Thủy Tinh Ngay Trong Khi Dệt

Điểm làm nên sự khác biệt tuyệt đối của Dệt Dèng Tà Ôi với các dân tộc khác là kỹ thuật **luồn hạt cườm trực tiếp vào sợi chỉ dọc trước khi đan**:
- Những hạt cườm chì màu trắng, xám hoặc cườm thủy tinh màu đỏ được xỏ tỉ mỉ theo đúng sơ đồ hoa văn trong trí nhớ của nghệ nhân.
- Khi dệt, hạt cườm nổi lên bề mặt vải tạo thành hình cây cút (cây nêu), hình mũi tên săn bắn, con sao biển hay dấu chân muông thú rừng già.

### 3. Vị Trí Của Dèng Trong Nghi Lễ Gia Tộc

Tấm Dèng là sính lễ không thể thiếu trong lễ cưới hỏi, vật cúng tế tạ ơn thần rừng (Giàng) trong lễ Ariêu Ping và là của hồi môn quý báu lưu truyền đời đời.
    `,
    comments: []
  },
  {
    id: 'art_5',
    title: 'Áo Tứ Thân & Nón Quai Thao: Nét Duyên Thầm Kinh Bắc Trong Làn Điệu Quan Họ',
    slug: 'ao-tu-than-non-quai-thao-duyen-tham-kinh-bac',
    category: 'le_hoi',
    summary: 'Chiếc áo bốn vạt buộc mối tình thắm, chiếc yếm đào dải lụa sồi và chiếc nón ba tầm rợp bóng hội Lim - biểu tượng thuần hậu của người phụ nữ châu thổ sông Hồng.',
    coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    author: 'Nguyễn Thị Bích Thủy',
    authorRole: 'Nhà Nghiên cứu Dân ca & Dân tộc học Bắc Bộ',
    publishedAt: '01/08/2025',
    readTime: '5 phút đọc',
    ethnicGroupId: 'Kinh (Việt)',
    tags: ['Áo Tứ Thân', 'Nón Quai Thao', 'Quan Họ Bắc Ninh', 'Hội Lim', 'Yếm Đào'],
    viewsCount: 2840,
    content: `
### 1. Ý Nghĩa Cấu Trúc Áo Tứ Thân Bốn Vạt

Áo Tứ Thân gồm 4 vạt vải:
- Hai vạt sau may liền vào nhau dọc giữa sống lưng (gọi là sống áo), tượng trưng cho người cha và người mẹ.
- Hai vạt trước để buông dài, khi mặc thì buộc thắt múi trước bụng, tượng trưng cho tình nghĩa vợ chồng son sắt keo sơn gắn bó keo kết.
- Bốn vạt áo còn tượng trưng cho **tứ thân phụ mẫu** (bố mẹ mình và bố mẹ chồng/vợ).

### 2. Sự Kết Hợp Tinh Tế Cùng Yếm Đào Và Thắt Lưng Bao

Bên trong áo tứ thân là chiếc yếm cổ xây hoặc yếm cánh sen màu hồng điều, màu đào hoặc trắng ngà. Đi cùng là chiếc dải lụa thắt lưng xanh (ruột tượng) thắt hờ ngang eo, vừa kín đáo vừa khoe trọn nét thắt đáy lưng ong đoan trang thuần Việt.

### 3. Nón Quai Thao (Nón Ba Tầm)

Nón có đường kính rộng từ 70-80cm, đan bằng lá cọ hoặc lá hồ phẳng phiu. Quai nón làm bằng thao tơ tằm dệt dày dặn đính kèm hai túm tua chỉ buông dài xuống hai bờ vai, tạo nên nét e ấp duyên dáng khó quên của các liền chị quan họ trong ngày trẩy hội mùa xuân.
    `,
    comments: []
  }
];
