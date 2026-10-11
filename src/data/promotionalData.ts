import { Festival, Spotlight, GalleryItem, QuizQuestion } from '../types/costume';

export const INITIAL_SPOTLIGHTS: Spotlight[] = [
  {
    id: 'spotlight_1',
    title: 'Sắc Chàm & Váy Xòe Thổ Cẩm Vùng Cao',
    subtitle: 'Khám phá bí quyết nghệ thuật vẽ sáp ong Batik và kỹ thuật nhuộm chàm cổ truyền lưu giữ qua ngàn đời của đồng bào H\'Mông và Dao Đỏ.',
    badge: 'Chuyên Đề Tiêu Điểm',
    costumeId: 'hmong_hoa',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 1
  },
  {
    id: 'spotlight_2',
    title: 'Huyền Bí Dệt Thổ Cẩm Dèng Tà Ôi & Chăm Mỹ Nghiệp',
    subtitle: 'Nghệ thuật xỏ hạt cườm trực tiếp vào sợi dệt của người Tà Ôi và kỹ thuật dệt hoa văn hình thoi bí ẩn trên khung cửi Champa.',
    badge: 'Di Sản Quốc Gia',
    costumeId: 'cham_roi',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 2
  },
  {
    id: 'spotlight_3',
    title: 'Màu Nắng Cồng Chiêng & Y Phục Núi Rừng Tây Nguyên',
    subtitle: 'Bản trường ca trên nền vải thổ cẩm đen - đỏ sẫm của người Ê-đê, Ba-na cùng những đường thêu dải hoa văn mặt trời rực rỡ.',
    badge: 'Hùng Thiêng Đại Ngàn',
    costumeId: 'ede_nu',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 3
  }
];

export const INITIAL_FESTIVALS: Festival[] = [
  {
    id: 'fest_gau_tao',
    name: 'Lễ Hội Gầu Tào (Cầu Phúc, Cầu Mệnh)',
    ethnicGroup: 'H\'Mông',
    location: 'Hà Giang, Lào Cai, Yên Bái',
    timeOfYear: 'Mùng 1 đến mùng 15 tháng Giêng',
    monthLunar: 'Tháng Giêng Âm lịch',
    description: 'Lễ hội lớn nhất trong năm của người H\'Mông cầu trời đất ban cho con cháu sức khỏe, mùa màng bội thu. Các thiếu nữ H\'Mông diện những bộ váy xòe sặc sỡ nhất cùng ô dù hoa che nắng và tiếng khèn Mông vang vọng khắp thung lũng.',
    costumeHighlights: 'Váy xòe xếp nếp hoa văn sáp ong Batik, áo yếm thêu chỉ đỏ tơ tằm, xà tích bạc lách cách theo từng bước múa.',
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80',
    tags: ['Tây Bắc', 'H\'Mông', 'Mùa Xuân', 'Cầu Mùa']
  },
  {
    id: 'fest_cap_sac',
    name: 'Đại Lễ Cấp Sắc (Tết Nhảy)',
    ethnicGroup: 'Dao Đỏ & Dao Tiền',
    location: 'Sa Pa, Bắc Hà (Lào Cai), Tuyên Quang',
    timeOfYear: 'Tháng 11 đến tháng 12 Âm lịch',
    monthLunar: 'Tháng 11 - 12 Âm lịch',
    description: 'Nghi lễ đánh dấu sự trưởng thành của người đàn ông Dao để được tổ tiên công nhận. Trang phục trong ngày lễ được chuẩn bị công phu cả năm trời với khăn đội đầu xếp nhiều tầng màu đỏ chói lọi.',
    costumeHighlights: 'Khăn đỏ tua rua thêu chỉ vàng, áo chàm viền họa tiết hoa thông, lục lạc đồng và chuông bạc phát ra âm thanh linh thiêng.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    tags: ['Đông Bắc', 'Dao Đỏ', 'Nghi Lễ', 'Trưởng Thành']
  },
  {
    id: 'fest_kate',
    name: 'Lễ Hội Ka-tê (Tết Chăm Dân Gian)',
    ethnicGroup: 'Chăm',
    location: 'Tháp Po Klong Garai (Ninh Thuận), Bình Thuận',
    timeOfYear: 'Tháng 7 lịch Chăm (Khoảng tháng 9 - 10 Dương lịch)',
    monthLunar: 'Tháng 7 lịch Chăm',
    description: 'Lễ hội lớn nhất tưởng nhớ các vị thần linh, vua Chăm và ông bà tổ tiên. Đồng bào Chăm tề tựu tại các cụm tháp cổ uy nghiêm trong trang phục áo dài Chăm truyền thống rực rỡ.',
    costumeHighlights: 'Áo dài Chăm (Aw Dwa Ba-nưng) kết hợp thắt lưng thổ cẩm Talei Kabak dệt hạt nổi, khăn vấn đầu Mạthơ trắng tinh khôi.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    tags: ['Nam Trung Bộ', 'Chăm', 'Tháp Cổ', 'Lễ Hội']
  },
  {
    id: 'fest_cong_chieng',
    name: 'Lễ Hội Văn Hóa Cồng Chiêng Đại Ngàn',
    ethnicGroup: 'Ê-đê, Ba-na, Gia-rai, M\'Nông',
    location: 'Đắk Lắk, Gia Lai, Kon Tum, Lâm Đồng',
    timeOfYear: 'Tháng 3 (Mùa con ong đi lấy mật)',
    monthLunar: 'Mùa khô Tây Nguyên',
    description: 'Không gian văn hóa Cồng Chiêng Tây Nguyên - Kiệt tác truyền khẩu và phi vật thể của nhân loại. Dưới ánh lửa bập bùng, các chàng trai cô gái đóng khố, mặc áo chui đầu thổ cẩm hòa theo nhịp xoang.',
    costumeHighlights: 'Váy quấn Myeng thổ cẩm đen - đỏ, khố hoa văn mặt trời và chim muông, hoa tai ngà voi và vòng tay đồng xoắn ốc.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    tags: ['Tây Nguyên', 'Cồng Chiêng', 'UNESCO', 'Thổ Cẩm']
  },
  {
    id: 'fest_hoi_lim',
    name: 'Hội Lim Quan Họ Bắc Ninh',
    ethnicGroup: 'Kinh (Việt)',
    location: 'Đồi Lim, Tiên Du, Bắc Ninh',
    timeOfYear: 'Ngày 12 - 13 tháng Giêng',
    monthLunar: 'Tháng Giêng Âm lịch',
    description: 'Không gian giao duyên của các liền anh, liền chị quan họ Kinh Bắc. Những câu ca mộc mạc cất lên bên mái đình, mạn thuyền rồng cùng tà áo tứ thân thướt tha.',
    costumeHighlights: 'Áo tứ thân mớ ba mớ bảy lụa tơ tằm, yếm đào sen, dải thắt lưng hoa lý, nón quai thao thắt quai thao đung đưa duyên dáng.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
    tags: ['Đồng Bằng Bắc Bộ', 'Quan Họ', 'Áo Tứ Thân', 'Nón Quai Thao']
  },
  {
    id: 'fest_ok_om_bok',
    name: 'Lễ Hội Oóc Om Bóc (Cúng Trăng) & Đua Ghe Ngo',
    ethnicGroup: 'Khmer Nam Bộ',
    location: 'Sóc Trăng, Trà Vinh, An Giang',
    timeOfYear: 'Rằm tháng 10 Âm lịch (15/10)',
    monthLunar: 'Tháng 10 Âm lịch',
    description: 'Lễ tạ ơn thần Mặt Trăng đã ban mưa thuận gió hòa, bảo vệ mùa màng tươi tốt. Người Khmer mặc trang phục lễ hội truyền thống óng ánh dệt tơ vàng, tụ hội xem hội đua ghe Ngo rộn rã trên sông.',
    costumeHighlights: 'Trang phục Săm-pốt (Sampot) vải tơ tằm óng ả màu vàng nghệ, khăn chéo vai Sbay dát chỉ kim tuyến lấp lánh.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    tags: ['Nam Bộ', 'Khmer', 'Cúng Trăng', 'Ghe Ngo']
  }
];

export const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal_1',
    title: 'Cận Cảnh Bút Vẽ Sáp Ong Trên Vải Lanh H\'Mông',
    ethnicGroup: 'H\'Mông Hoa',
    category: 'det_nhuom',
    mediaType: 'image',
    url: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    caption: 'Chiếc bút vẽ sáp ong làm từ lá đồng mỏng kẹp cán tre. Sáp ong rừng được đun nóng chảy rồi vẽ từng đường nét kỷ hà lên nền vải lanh trắng trước khi đem ngâm chàm.',
    authorOrSource: 'Bảo tàng Dân tộc học Việt Nam'
  },
  {
    id: 'gal_2',
    title: 'Khăn Piêu Thái Với Hàng Cút Piêu & Chỉ Tơ Tằm',
    ethnicGroup: 'Thái Đen',
    category: 'hoa_van',
    mediaType: 'image',
    url: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80',
    caption: 'Chiếc khăn Piêu người Thái thêu bằng chỉ tơ tằm nhuộm củ nâu, lá chàm. Bốn góc khăn đính những cuộn tròn bọc chỉ màu gọi là "cút piêu" thể hiện sự khéo léo của cô gái Thái.',
    authorOrSource: 'Nghệ nhân Lò Thị Mai'
  },
  {
    id: 'gal_3',
    title: 'Bộ Vòng Cổ Bạc Xoắn Ốc Đúc Thủ Công Dao Đỏ',
    ethnicGroup: 'Dao Đỏ',
    category: 'trang_suc',
    mediaType: 'image',
    url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    caption: 'Bạc trắng nguyên chất được nghệ nhân người Dao thổi lửa, chạm khắc hoa văn sóng nước, hoa thông. Người Dao quan niệm bạc trắng bảo vệ linh hồn khỏi gió dữ và tà ma.',
    authorOrSource: 'Làng Chạm Bạc Bản Khoang'
  },
  {
    id: 'gal_4',
    title: 'Kỹ Thuật Dệt Dèng Thổ Cẩm Xỏ Hạt Cườm Tà Ôi',
    ethnicGroup: 'Tà Ôi',
    category: 'det_nhuom',
    mediaType: 'image',
    url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    caption: 'Di sản phi vật thể quốc gia: Nghệ nhân dệt Dèng dùng khung cửi nhỏ cài từng hạt chì/cườm vào sợi chỉ dệt để tạo thành hoa văn sao trời và muông thú nổi lên bề mặt tấm vải.',
    authorOrSource: 'A Lưới, Thừa Thiên Huế'
  },
  {
    id: 'gal_5',
    title: 'Vạt Áo Nhật Bình Thêu Ngũ Phụng Triều Nguyễn',
    ethnicGroup: 'Kinh (Việt)',
    category: 'hoa_van',
    mediaType: 'image',
    url: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
    caption: 'Cận cảnh cổ áo hình chữ nhật viền chỉ ngũ sắc kết hợp họa tiết chim Phượng, hoa sen, mây bát bửu thêu kim tuyến tỉ mỉ của bậc Hoàng thái hậu và Công chúa Cung đình Huế.',
    authorOrSource: 'Cố Đô Huế'
  },
  {
    id: 'gal_6',
    title: 'Khuyên Tai Ngà Voi & Vòng Tay Đồng Thần Linh Ê-đê',
    ethnicGroup: 'Ê-đê',
    category: 'trang_suc',
    mediaType: 'image',
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    caption: 'Trang sức cổ truyền độc đáo của người Ê-đê: Đôi hoa tai xỏ lỗ tai rộng bằng mẩu ngà voi hoặc gỗ rừng quý, vòng đồng đeo tay tượng trưng cho lời thề ước và sự gắn kết cộng đồng.',
    authorOrSource: 'Buôn Ma Thuột'
  }
];

export const CULTURAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Chiếc khăn Piêu thêu hoa văn tinh xảo với bốn góc đính "cút piêu" là biểu tượng đặc trưng của phụ nữ dân tộc nào?',
    options: ['Người Thái Đen', 'Người Tày', 'Người H\'Mông', 'Người Dao Đỏ'],
    correctAnswer: 0,
    explanation: 'Khăn Piêu là tác phẩm nghệ thuật thêu tay đỉnh cao của thiếu nữ Thái Đen Tây Bắc. Mỗi chiếc khăn vừa che đầu, giữ ấm, vừa là vật trao duyên gửi gắm tình yêu chung thủy cho người bạn đời.',
    ethnicGroup: 'Thái',
    culturalContext: 'Tây Bắc Việt Nam'
  },
  {
    id: 2,
    question: 'Kỹ thuật dùng bút đồng nung nóng để vẽ hoa văn bằng sáp ong rừng lên vải lanh trước khi nhuộm chàm (Batik) nổi tiếng của dân tộc nào?',
    options: ['Người Chăm', 'Người H\'Mông', 'Người Khmer', 'Người Kinh'],
    correctAnswer: 1,
    explanation: 'Nghệ thuật vẽ sáp ong Batik là bí quyết cha truyền con nối của phụ nữ H\'Mông. Sáp ong bảo vệ các hoa văn khỏi thuốc nhuộm chàm, khi luộc sôi sáp chảy ra để lộ hoa văn trắng tinh khôi.',
    ethnicGroup: 'H\'Mông',
    culturalContext: 'Mù Cang Chải, Sa Pa, Đồng Văn'
  },
  {
    id: 3,
    question: 'Trang phục "Áo mớ ba mớ bảy", yếm đào, thắt lưng hoa lý và nón quai thao gắn liền với nét đẹp văn hóa của vùng miền nào?',
    options: ['Vùng đất Cố đô Huế', 'Quan họ Kinh Bắc (Bắc Ninh - Bắc Giang)', 'Nam Bộ sông nước', 'Tây Nguyên đại ngàn'],
    correctAnswer: 1,
    explanation: 'Trang phục áo tứ thân mớ ba mớ bảy kết hợp nón quai thao là hình ảnh biểu trưng của các "liền chị" dân ca Quan họ Bắc Ninh - di sản phi vật thể đại diện của nhân loại.',
    ethnicGroup: 'Kinh',
    culturalContext: 'Đồng bằng sông Hồng'
  },
  {
    id: 4,
    question: 'Tại sao trang phục của phụ nữ Dao Đỏ lại có những chùm quả bông đỏ rực rỡ và chuông bạc đính quanh cổ và ngực áo?',
    options: [
      'Để xua đuổi thú dữ, tà ma và tượng trưng cho sự ấm áp, may mắn của ngọn lửa',
      'Chỉ để trang trí cho nổi bật khi chụp ảnh',
      'Để đánh dấu thứ bậc giàu nghèo trong bản',
      'Để báo hiệu thời tiết thay đổi'
    ],
    correctAnswer: 0,
    explanation: 'Màu đỏ rực rỡ của quả bông trên áo người Dao tượng trưng cho ngọn lửa sưởi ấm vùng núi cao lạnh giá, mang lại sinh khí tốt lành; còn chuông bạc và lục lạc phát ra âm thanh thanh tẩy tà khí.',
    ethnicGroup: 'Dao Đỏ',
    culturalContext: 'Vùng cao Đông Bắc & Tây Bắc'
  },
  {
    id: 5,
    question: 'Trang phục nữ dệt thổ cẩm hạt cườm (Dèng) của dân tộc Tà Ôi ở vùng núi A Lưới (Huế) đã được công nhận là gì?',
    options: [
      'Kỷ lục Guinness thế giới',
      'Di sản văn hóa phi vật thể quốc gia',
      'Trang phục may mặc công nghiệp',
      'Tác phẩm điêu khắc gỗ'
    ],
    correctAnswer: 1,
    explanation: 'Nghề dệt Dèng của người Tà Ôi được Bộ Văn hóa, Thể thao và Du lịch công nhận là Di sản văn hóa phi vật thể quốc gia nhờ kỹ thuật đan cài hạt cườm vào từng thớ vải vô cùng độc đáo.',
    ethnicGroup: 'Tà Ôi',
    culturalContext: 'Miền Tây Thừa Thiên Huế'
  }
];
