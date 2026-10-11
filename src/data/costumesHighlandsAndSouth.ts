import { Costume } from '../types/costume';

export const HIGHLANDS_SOUTH_COSTUMES: Costume[] = [
  {
    id: 'ede_tho_cam',
    name: 'Trang Phục Thổ Cẩm Dân Tộc Ê Đê',
    ethnicGroup: 'Ê Đê',
    subGroup: 'Kpă / Mđhur / Adham',
    languageFamily: 'Nam Đảo (Austronesian)',
    region: 'tay_nguyen',
    regionName: 'Tây Nguyên (Đắk Lắk)',
    provinces: ['Đắk Lắk (Buôn Ma Thuột)', 'Gia Lai', 'Đắk Nông', 'Phú Yên'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'doi_thuong', 'nghi_le_tam_linh'],
    summary: 'Biểu tượng uy quyền của chế độ Mẫu hệ và Không gian Văn hóa Cồng chiêng Tây Nguyên với áo chui đầu viền đỏ vàng Ktêh rực rỡ, váy tấm thổ cẩm và chiếc vòng đồng đúc kết nối với các đấng thần linh (Yang).',
    badge: 'Quyền Uy Mẫu Hệ & Không Gian Cồng Chiêng',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Nhà Rông Cao Nguyên & Thác Nước Dray Nur (Đắk Lắk)',
    galleryImages: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Vải bông tự dệt trên khung cửi Indo-Malayan', 'Vỏ cây rừng nhuộm màu tự nhiên', 'Đồng đúc', 'Ngà voi'],
    mainColors: [
      { name: 'Đen Chàm Sẫm (Màu Thống Trị)', hex: '#0a0a0a', meaning: 'Màu của đất bazan màu mỡ và sự huyền bí của rừng già Tây Nguyên' },
      { name: 'Đỏ Thổ Cẩm Rực Lửa', hex: '#dc2626', meaning: 'Màu của ngọn lửa thiêng bập bùng trong nhà dài và lòng quả cảm' },
      { name: 'Vàng Hoàng Yến', hex: '#eab308', meaning: 'Màu của mặt trời Yang, hạt lúa rẫy và sự thịnh vượng no ấm' },
      { name: 'Trắng Bông Rẫy', hex: '#fafaf9', meaning: 'Sự trong sáng và tinh khôi của nguồn nước buôn làng' }
    ],
    costumeLayers: [
      {
        id: 'ede_ao_deh',
        partName: 'Áo Chui Đầu Xẻ Ngang Cổ (Áo Đế)',
        localName: 'Áo Đế (Ktêh)',
        position: 'than_tren',
        description: 'Áo chui đầu khoét cổ hình thuyền nằm ngang từ vai này sang vai kia, không có cúc. Dọc vai và gấu áo dệt dải hoa văn đỏ vàng "Drai" rực rỡ.',
        craftTechnique: 'Dệt sợi bông thủ công và thêu dải viền sợi len đỏ vàng nổi bật.',
        symbolism: 'Đường xẻ ngang cổ áo rộng rãi thể hiện sự phóng khoáng, dũng mãnh và tự do của người phụ nữ chủ gia đình trong nhà dài.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ede_vay_tam',
        partName: 'Váy Tấm Quấn Dài Thổ Cẩm',
        localName: 'Myêng Thổ Cẩm',
        position: 'than_duoi',
        description: 'Tấm vải dệt thổ cẩm hình chữ nhật dài khoảng 1.3m x 1m quấn quanh thân từ eo xuống mắt cá chân, cố định bằng cách giắt mép vải.',
        craftTechnique: 'Dệt dải hoa văn dải ngân hà và muông thú chạy ngang gấu váy.',
        symbolism: 'Mỗi dải hoa văn biểu trưng cho một thế hệ con cháu nối tiếp dòng dõi mẹ trong chế độ Mẫu hệ.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'ede_vong_dong',
        name: 'Bộ Vòng Đồng Khắc Hình Học (Vòng Kết Giao)',
        localName: 'Vòng Yang Ê Đê',
        category: 'trang_suc_bac_dong',
        description: 'Vòng đồng đúc đeo kín từ cổ tay lên đến khuỷu tay, hai đầu uốn cong có chạm khắc hoa văn mắt chim kơ-tia.',
        spiritualMeaning: 'Vòng đồng là cầu nối thiêng liêng với thần Yang, trao cho nhau trong lễ kết nghĩa anh em và lễ cúng sức khỏe.',
        wearingStyle: 'Đeo nhiều chiếc xếp tầng trên cả hai cổ tay.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ede_hoa_tai_nga',
        name: 'Hoa Tai Ngà Voi Xuyên Tai',
        localName: 'Tua Tai Ê Đê',
        category: 'trang_suc_bac_dong',
        description: 'Khoanh ngà voi hoặc gỗ quý hình trụ tròn xuyên qua dái tai mở rộng.',
        spiritualMeaning: 'Biểu hiện cho sự trưởng thành, uy quyền của nữ tù trưởng và sự gắn bó với loài voi đại ngàn Bản Đôn.',
        wearingStyle: 'Xỏ trực tiếp vào lỗ tai đã nong rộng theo phong tục.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ede_guoi_may',
        name: 'Gùi Mây Thổ Cẩm Có Nắp',
        localName: 'Gùi Ê Đê',
        category: 'tui_guoi',
        description: 'Gùi đan bằng mây tre rừng kết hợp dây đeo dệt thổ cẩm đỏ đen bền chắc.',
        spiritualMeaning: 'Người bạn thủy chung theo người phụ nữ Ê Đê lên nương, ra bến nước rước giọt nước trong lành về nhà dài.',
        wearingStyle: 'Đeo trên lưng bằng hai quai thổ cẩm.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Họa Tiết Chim Kơ-tia, Con Kỳ Đà & Rùa Vàng',
        symbolMeaning: 'Kỳ đà báo trước cơn mưa, rùa vàng tượng trưng cho sự trường thọ và chim Kơ-tia mang lại tin vui mùa màng.',
        historicalOrigin: 'Tín ngưỡng vạn vật hữu linh (Animism) và sử thi Đăm Săn huyền thoại.'
      }
    ],
    techniques: [
      {
        name: 'Kỹ Thuật Dệt Thổ Cẩm Khung Dệt Cài Chân Cổ Xưa',
        description: 'Người phụ nữ ngồi duỗi thẳng hai chân trên sàn gỗ nhà dài, dùng lực của lưng và chân căng khung dệt luồn từng sợi chỉ màu một cách chuẩn xác.',
        uniqueness: 'Không cần đòn lăn cơ giới, từng nhịp dệt tạo nên độ dày dặn và độ bền thách thức hàng trăm năm của thổ cẩm Tây Nguyên.'
      }
    ],
    folkStory: {
      title: 'Huyền Thoại Nàng H\'Bia & Sức Mạnh Nữ Quyền Nhà Dài',
      summary: 'Trang phục thổ cẩm Ê Đê gắn liền với hình tượng người phụ nữ chủ nhân ngôi nhà dài trong thiên sử thi Đăm Săn.',
      fullStory: 'Trong sử thi Đăm Săn, người phụ nữ Ê Đê như nữ tù trưởng H\'Bia là hiện thân của vẻ đẹp quyền uy, sự phì nhiêu và lòng nhân ái. Chiếc áo chui đầu Ktêh dệt sắc đỏ như mặt trời soi sáng bếp lửa nhà dài hàng chục gian, nơi tiếng cồng chiêng ngân vang gọi mùa lúa mới và bảo bọc buôn làng qua bao mùa giông bão.',
      culturalMoral: 'Ca ngợi sự bình đẳng, vai trò cao cả của người phụ nữ trong việc giữ gìn dòng họ và văn hóa buôn làng.',
      audioNarratorText: 'Trong tiếng cồng chiêng vang vọng đại ngàn, tà áo Ktêh và váy thổ cẩm của người phụ nữ Ê Đê rực sáng như ngọn lửa thiêng trong ngôi nhà dài Mẫu hệ.'
    },
    interestingFacts: [
      'Ngôi nhà dài của người Ê Đê có thể dài tới hơn 100 mét, và mỗi khi một cô con gái trong gia đình lấy chồng, ngôi nhà lại được nối dài thêm một gian.',
      'Cầu thang lên nhà dài của người Ê Đê luôn được đẽo khắc đôi bầu ngực phụ nữ và vầng trăng khuyết - biểu tượng thiêng liêng của Mẫu hệ.'
    ],
    culturalQuotes: 'Nghe tiếng cồng chiêng vọng vách rừng, Áo Ktêh rực lửa sáng buôn rẫy.'
  },
  {
    id: 'cham_ao_dai_khan_matika',
    name: 'Áo Dài & Khăn Matile Dân Tộc Chăm',
    ethnicGroup: 'Chăm (Champa)',
    subGroup: 'Chăm Bà La Môn & Chăm Hồi Giáo (Bà Ni / Islam)',
    languageFamily: 'Nam Đảo (Austronesian)',
    region: 'nam_trung_bo',
    regionName: 'Nam Trung Bộ (Ninh Thuận, Bình Thuận, An Giang)',
    provinces: ['Ninh Thuận (Phan Rang)', 'Bình Thuận', 'An Giang (Châu Đốc)', 'Tây Ninh'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'nghi_le_tam_linh'],
    summary: 'Nét đẹp kiêu sa, kín đáo và huyền bí của nền văn minh Champa cổ kính với chiếc áo dài chui đầu không xẻ tà (Aw Dôi), tấm khăn choàng Matile bay bổng trong điệu múa quạt lễ hội Katê và dải thắt lưng dệt hoa văn Mẫu thần Poh Nagar.',
    badge: 'Huyền Bí Champa & Di Sản Lễ Hội Katê',
    coverImage: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Quần Thể Tháp Chàm Po Klong Garai (Ninh Thuận)',
    galleryImages: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Vải lụa Chăm tự dệt làng Mỹ Nghiệp', 'Sợi tơ bóng kim tuyến', 'Hạt chuỗi mã não, ngọc trai', 'Bông trắng tinh khôi'],
    mainColors: [
      { name: 'Trắng Tinh Khiết (Màu Lễ Phục)', hex: '#ffffff', meaning: 'Sự thánh thiện, trong sạch khi dâng lễ vật lên các vị thần linh trên tháp cổ' },
      { name: 'Xanh Ngọc Bích & Đỏ Thẫm', hex: '#0f766e', meaning: 'Sự vương giả và màu của đất nung gạch tháp Chàm' },
      { name: 'Vàng Kim Tuyến (Dải Thắt Lưng)', hex: '#eab308', meaning: 'Ánh sáng của thần Shiva và Mẫu thần Xứ Sở Poh Nagar' }
    ],
    costumeLayers: [
      {
        id: 'cham_ao_dai_chui',
        partName: 'Áo Dài Chui Đầu Không Xẻ Tà (Aw Dôi)',
        localName: 'Aw Dôi / Aw Kâm',
        position: 'than_tren',
        description: 'Áo dài chấm gót may kín hai bên hông không xẻ tà, chui đầu, cổ khoét tròn hoặc xẻ chữ V nhỏ, ôm sát vòng eo thon thả.',
        craftTechnique: 'Dệt vải lụa hoa văn chìm tại làng dệt Mỹ Nghiệp danh tiếng nghìn năm.',
        symbolism: 'Sự kín đáo, đoan trang tuyệt đối và lòng thành kính thiêng liêng của người con gái Chăm.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cham_that_lung_talei',
        partName: 'Dải Thắt Lưng Hoa Văn Dệt Nổi (Talei Kabak)',
        localName: 'Talei Kabak',
        position: 'than_tren',
        description: 'Dải thắt lưng dệt hoa văn hình thoi, móc câu màu đỏ vàng rực rỡ, hai đầu thắt nút có chùm tua rua buông dài trước đùi.',
        craftTechnique: 'Dệt bằng kỹ thuật luồn sợi phức tạp nhất của làng dệt cổ.',
        symbolism: 'Đại diện cho sợi dây liên kết giữa thế giới con người và thế giới thần linh Champa.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'cham_khan_matile',
        name: 'Khăn Choàng Đầu & Vai Matile Thêu Viền',
        localName: 'Khăn Khan / Matile',
        category: 'khan_mu',
        description: 'Tấm khăn voan mỏng trắng muốt dài hơn 1 mét, viền thêu hoa văn hoa Chăm, phủ từ đỉnh đầu rủ mềm mại qua hai bờ vai.',
        spiritualMeaning: 'Tượng trưng cho mây trắng bay quanh đỉnh tháp thiêng và che chở nét e lệ khi múa dâng lễ vật.',
        wearingStyle: 'Choàng trùm qua đầu, hai tay cầm hai mép khăn uốn lượn khi múa quạt.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cham_quat_mua',
        name: 'Cặp Quạt Múa Lễ Hội Katê',
        localName: 'Tua Katê',
        category: 'khac',
        description: 'Đôi quạt nan tre bọc vải lụa đỏ hoặc xanh dệt hoa văn tháp Chàm.',
        spiritualMeaning: 'Điệu múa xòe quạt mô phỏng cánh chim thần Garuda và sự uyển chuyển của các vũ nữ Apsara.',
        wearingStyle: 'Cầm hai tay khi thực hiện các điệu múa cổ truyền Katê.',
        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Hoa Văn Răng Rồng, Mắt Công & Tháp Cổ',
        symbolMeaning: 'Sức mạnh bảo hộ của thần linh và vẻ đẹp lộng lẫy bất tử của các nàng tiên Apsara.',
        historicalOrigin: 'Chạm khắc trên các phù điêu đá bảo tàng Chăm Đà Nẵng và tháp Po Klong Garai.'
      }
    ],
    techniques: [
      {
        name: 'Nghệ Thuật Dệt Thổ Cẩm Làng Cổ Mỹ Nghiệp',
        description: 'Làng nghề dệt thổ cẩm Chăm cổ xưa nhất Đông Nam Á còn bảo tồn nguyên vẹn quy trình quay tơ, nhuộm vỏ cây rừng và dệt hoa văn nổi 3D.',
        uniqueness: 'Vải mềm mịn, không phai màu và hoa văn dệt nổi cả hai mặt vải.'
      }
    ],
    folkStory: {
      title: 'Huyền Thoại Mẫu Thần Poh Nagar & Nghề Dệt Lụa Chăm',
      summary: 'Mẫu thần Xứ Sở Poh Nagar giáng trần dạy đồng bào Chăm trồng lúa, trồng bông và dệt nên những dải lụa ngàn hoa.',
      fullStory: 'Theo truyền thuyết Champa, Mẫu thần Poh Nagar sinh ra từ mây trời và bọt biển. Thấy dân chúng chưa biết may mặc, bà đã dạy cho phụ nữ cách trồng dâu nuôi tằm, lấy sợi bông xe chỉ và dệt nên chiếc áo Aw Dôi kín đáo cùng chiếc khăn Matile trong trắng. Mỗi độ lễ hội Katê về, hàng ngàn thiếu nữ Chăm lại khoác lên mình bộ lễ phục thiêng liêng để dâng hương tạ ơn Mẫu thần phù hộ mùa màng bội thu.',
      culturalMoral: 'Lòng biết ơn sâu sắc đối với người khai sáng văn minh và bảo tồn nghề truyền thống dân tộc.',
      audioNarratorText: 'Dưới chân tháp Po Klong Garai cổ kính, tà áo dài Aw Dôi và chiếc khăn Matile người Chăm bay bổng theo nhịp trống Ghinăng và kèn Saranai trong ngày hội Katê.'
    },
    interestingFacts: [
      'Áo dài Chăm Aw Dôi không xẻ tà là một trong những mẫu áo dài cổ xưa nhất tại Việt Nam còn giữ nguyên vẹn cấu trúc may mặc từ hàng nghìn năm trước.',
      'Làng dệt Mỹ Nghiệp (Ninh Thuận) được xem là bảo tàng sống về nghề dệt thủ công của vương quốc Champa cổ đại.'
    ],
    culturalQuotes: 'Tháp cổ rêu phong trầm mặc đứng, Khăn Matile bay đón hội Katê.'
  },
  {
    id: 'khmer_sampot_le_cuoi',
    name: 'Lễ Phục Cưới Truyền Thống Kh\'mer Nam Bộ',
    ethnicGroup: 'Kh\'mer Nam Bộ',
    subGroup: 'Kh\'mer Crom',
    languageFamily: 'Môn - Kh\'mer',
    region: 'nam_bo',
    regionName: 'Tây Nam Bộ (Đồng Bằng Sông Cửu Long)',
    provinces: ['Sóc Trăng', 'Trà Vinh', 'An Giang', 'Kiên Giang', 'Bạc Liêu', 'Cà Mau'],
    gender: 'ca_hai',
    occasions: ['le_cuoi', 'le_hoi', 'nghi_le_tam_linh'],
    summary: 'Rực rỡ, lộng lẫy và uy nghi tựa các bậc hoàng gia thần thoại Angkor với váy Sămpót dệt tơ vàng, dải khăn Sbay vắt chéo qua vai dát ngọc và chiếc vương miện Pkham mạ vàng lấp lánh trong lễ cưới chùa Khmer.',
    badge: 'Tuyệt Tác Lễ Cưới Hoàng Gia Angkor',
    coverImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Chùa Dơi Sóc Trăng & Chùa Hang Trà Vinh',
    galleryImages: [
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Tơ tằm dệt lụa Hol & Sămpót Phamuong', 'Chỉ kim tuyến vàng óng', 'Hạt kim sa, ngọc đá đính thủ công', 'Vàng và đồng chạm khắc'],
    mainColors: [
      { name: 'Vàng Hoàng Gia (Màu Thống Trị)', hex: '#f59e0b', meaning: 'Màu của ánh đạo vàng Phật giáo Nam truyền, sự phồn vinh và may mắn tối thượng' },
      { name: 'Đỏ Sen & Hồng Phấn', hex: '#ec4899', meaning: 'Tình yêu đôi lứa son sắt và sự hạnh phúc đơm hoa kết trái' },
      { name: 'Xanh Cổ Vịt Lấp Lánh', hex: '#0284c7', meaning: 'Màu của dòng sông Mekong chở nặng phù sa nuôi dưỡng vạn vật' }
    ],
    costumeLayers: [
      {
        id: 'khmer_sampot_nu',
        partName: 'Váy Sămpót Dệt Tơ Vàng Đính Kim Sa',
        localName: 'Sămpót Hol',
        position: 'than_duoi',
        description: 'Tấm vải lụa tơ tằm dệt hoa văn hình thoi tinh xảo quấn quanh eo rủ xuống mắt cá, đính hàng ngàn hạt kim sa vàng lấp lánh.',
        craftTechnique: 'Kỹ thuật dệt Ikat nhuộm sợi trước khi dệt truyền thống.',
        symbolism: 'Tôn vinh vẻ đẹp đài các, sang trọng của cô dâu trong ngày trọng đại nhất cuộc đời.',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'khmer_khan_sbay',
        partName: 'Dải Khăn Sbay Vắt Vai Mạ Vàng',
        localName: 'Sbay Kh\'mer',
        position: 'than_tren',
        description: 'Dải lụa màu vàng hoàng yến hoặc đỏ thẫm vắt chéo từ vai trái qua ngực phải rủ thướt tha xuống gót chân.',
        craftTechnique: 'Thêu đính hạt cườm và hoa văn đền tháp Angkor kỳ công.',
        symbolism: 'Đại diện cho đôi cánh của chim thần Kinnari trong thần thoại Phật giáo.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'khmer_vuong_mien',
        name: 'Vương Miện Pkham Mạ Vàng Cỡ Lớn',
        localName: 'Pkham / Mũ Makot',
        category: 'khan_mu',
        description: 'Mũ hình tháp nhọn nhiều tầng chạm trổ rồng rắn thần Naga và hoa sen, dát vàng óng ánh đội trên đầu cô dâu.',
        spiritualMeaning: 'Biểu tượng của đức hạnh cao quý và phước lành của các vị Phật chư thiên ban tặng.',
        wearingStyle: 'Đội ngay ngắn trên đỉnh đầu kết hợp búi tóc cao quý phái.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'khmer_trang_suc_vang',
        name: 'Bộ Vòng Cổ & Thắt Lưng Bạc Mạ Vàng',
        localName: 'Trang Sức Cưới Kh\'mer',
        category: 'that_lung_xa_tich',
        description: 'Dây thắt lưng kim loại chạm nổi hoa văn hoa cúc và chuỗi vòng cổ nhiều tầng che kín trước ngực.',
        spiritualMeaning: 'Minh chứng cho sự gắn kết bền vững của đôi tân lang tân nương trước bàn thờ Phật.',
        wearingStyle: 'Đeo kết hợp trọn bộ trong nghi lễ bái lạy cha mẹ và nhà sư.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Rắn Thần Naga 5 Đầu & Hoa Sen Phật Giáo',
        symbolMeaning: 'Naga là thần hộ pháp mang lại mưa thuận gió hòa và bảo vệ hạnh phúc lứa đôi.',
        historicalOrigin: 'Kiến trúc đền chùa Phật giáo Nam tông Khmer nghìn năm.'
      }
    ],
    techniques: [
      {
        name: 'Nghệ Thuật Dệt Lụa Ikat (Chong Kiet) Sóc Trăng',
        description: 'Nghệ thuật cột nút nhuộm màu từng đoạn sợi tơ tằm trước khi đưa lên khung dệt để tạo nên hoa văn thoi ảo ảnh đa chiều.',
        uniqueness: 'Mỗi mét vải lụa Ikat là một tác phẩm hội họa độc bản không bao giờ trùng lặp.'
      }
    ],
    folkStory: {
      title: 'Chuyện Tình Hoàng Tử Thần Thoại Preah Thong & Nàng Tiên Rắn Neang Neak',
      summary: 'Nguồn gốc của lễ phục cưới Khmer bắt nguồn từ cuộc hôn nhân mở cõi thần thoại của công chúa Naga.',
      fullStory: 'Truyền thuyết kể rằng Hoàng tử Preah Thong kết duyên cùng công chúa Thủy tề Neang Neak. Trong ngày cưới, hoàng tử đã nắm lấy vạt khăn Sbay của công chúa để cùng nàng rẽ sóng nước bước xuống long cung bái yết vua cha. Nghi thức nắm vạt khăn Sbay này đã trở thành linh hồn trong mọi đám cưới Khmer Nam Bộ ngày nay, biểu trưng cho sự đồng cam cộng khổ và tình yêu son sắt của vợ chồng.',
      culturalMoral: 'Bài học thiêng liêng về lòng chung thủy, sự hòa hợp giữa con người và thế giới tự nhiên.',
      audioNarratorText: 'Dưới bóng mái chùa tháp vàng rực Nam Bộ, bộ lễ phục cưới Khmer với vương miện Makot và tà khăn Sbay tái hiện thiên sử thi tình yêu nghìn năm.'
    },
    interestingFacts: [
      'Một đám cưới truyền thống của người Khmer Nam Bộ thường kéo dài 3 ngày đêm với hơn 10 lần thay đổi trang phục cho cô dâu và chú rể.',
      'Người Khmer Nam Bộ coi ngôi chùa là trung tâm văn hóa và tâm linh, mọi nghi lễ cưới hỏi trang trọng nhất đều phải được làm lễ chúc phúc trước chư tăng.'
    ],
    culturalQuotes: 'Sbay vàng óng ánh sắc cờ hoa, Vương miện lung linh sáng mái chùa.'
  },
  {
    id: 'kinh_ao_ba_ba',
    name: 'Áo Bà Ba & Khăn Rằn Miền Tây Sông Nước',
    ethnicGroup: 'Kinh (Việt)',
    subGroup: 'Nam Bộ (Tây Nam Bộ & Đông Nam Bộ)',
    languageFamily: 'Việt - Mường',
    region: 'nam_bo',
    regionName: 'Nam Bộ (Đồng Bằng Sông Cửu Long)',
    provinces: ['Cần Thơ', 'Đồng Tháp', 'An Giang', 'Bến Tre', 'Vĩnh Long', 'Tiền Giang', 'Cà Mau'],
    gender: 'ca_hai',
    occasions: ['doi_thuong', 'le_hoi'],
    summary: 'Biểu tượng bất hủ của tính cách hào sảng, chất phác, đôn hậu và phóng khoáng của người dân phương Nam mở cõi với tà áo bà ba chẻ tà bay nhẹ bên mái chèo và chiếc khăn rằn sọc ca rô thấm đượm phù sa.',
    badge: 'Hồn Hậu Phương Nam & Khăn Rằn Sông Nước',
    coverImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Chợ Nổi Cái Răng Cần Thơ & Rừng Tràm Trà Sư',
    galleryImages: [
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Lụa Tân Châu (Lãnh Mỹ A đen tuyền)', 'Vải kate, vải lụa tơ tằm', 'Sợi bông dệt khăn rằn', 'Lá thốt nốt khâu nón lá'],
    mainColors: [
      { name: 'Đen Tuyển Lãnh Mỹ A', hex: '#09090b', meaning: 'Màu đen huyền thoại nhuộm trái mặc nưa danh tiếng xứ lụa Tân Châu' },
      { name: 'Nâu Đất Phù Sa', hex: '#78350f', meaning: 'Màu của đất cù lao, sông nước Cửu Long cần lao mộc mạc' },
      { name: 'Trắng & Hồng Sen Dạo Phố', hex: '#f472b6', meaning: 'Sự tươi tắn, thanh xuân của thiếu nữ miền Tây chèo xuồng ba lá' }
    ],
    costumeLayers: [
      {
        id: 'baba_ao_chinh',
        partName: 'Áo Bà Ba Chẻ Tà Cổ Tròn Xẻ Nách',
        localName: 'Áo Bà Ba',
        position: 'than_tren',
        description: 'Áo may không cổ hoặc cổ tròn thanh thoát, thân áo xẻ hai bên hông tạo thành hai vạt trước sau, có hai túi nhỏ phía trước để đựng cau trầu hoặc tiền lẻ.',
        craftTechnique: 'Chiết eo nhẹ nhàng tôn lên nét đẫy đà thắt đáy lưng ong.',
        symbolism: 'Sự tự do, năng động, tiện lợi khi chèo ghe, cấy lúa mà vẫn giữ trọn nét duyên thầm.',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'baba_quan_lua',
        partName: 'Quần Lụa Đen Ống Rộng',
        localName: 'Quần Đen Nam Bộ',
        position: 'than_duoi',
        description: 'Quần may bằng lụa mềm màu đen hoặc trắng, ống rộng thoáng mát buông rủ tha thướt.',
        craftTechnique: 'May lưng thun hoặc buộc dây rút thoải mái.',
        symbolism: 'Sự nhẹ nhàng, thoáng đãng phù hợp khí hậu nhiệt đới nắng gió phương Nam.',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'baba_khan_ran',
        name: 'Khăn Rằn Sọc Ca Rô Đen Trắng / Đỏ Trắng',
        localName: 'Khăn Rằn Nam Bộ',
        category: 'khan_mu',
        description: 'Khăn dệt sợi bông hình chữ nhật kẻ ô vuông đen trắng hoặc đỏ trắng, hai đầu thắt nút sợi chỉ tua rua.',
        spiritualMeaning: 'Người bạn đường thủy chung lau giọt mồ hôi trên nương rẫy, che nắng che mưa và biểu tượng của tinh thần quật cường người phương Nam.',
        wearingStyle: 'Quàng hờ qua cổ hoặc quấn quanh đầu khi chèo thuyền.',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'baba_non_la_nam_bo',
        name: 'Nón Lá Chóp Tròn Duyên Dáng',
        localName: 'Nón Lá Miền Tây',
        category: 'khan_mu',
        description: 'Nón lá chóp tròn vừa phải chằm bằng lá buông hoặc lá thốt nốt, thắt quai lụa hồng.',
        spiritualMeaning: 'Bóng mát chở che người mẹ, người chị giữa mênh mông sông nước miệt vườn.',
        wearingStyle: 'Đội đầu kết hợp buộc quai lụa buông hờ bên cằm.',
        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Hoa Văn Sọc Ca Rô Khăn Rằn & Sóng Nước Cửu Long',
        symbolMeaning: 'Sự giản đơn, ngay thẳng, phóng khoáng và bình dị của con người miền Tây Nam Bộ.',
        historicalOrigin: 'Sự giao thoa văn hóa Việt - Kh\'mer - Hoa trong quá trình khai hoang mở cõi phương Nam 300 năm.'
      }
    ],
    techniques: [
      {
        name: 'Nghề Nhuộm Trái Mặc Nưa Lãnh Mỹ A Tân Châu',
        description: 'Vải tơ tằm được nhúng vào nước ép trái mặc nưa hàng trăm lần rồi phơi trên cỏ xanh dưới nắng gắt Nam Bộ để tạo nên sắc đen tuyền óng ả huyền thoại.',
        uniqueness: 'Càng mặc càng bóng mượt, không bao giờ phai màu và được mệnh danh là "nữ hoàng của các loại lụa".'
      }
    ],
    folkStory: {
      title: 'Huyền Thoại Về Người Khai Hoang Mở Cõi & Chiếc Áo Bà Ba',
      summary: 'Hình ảnh chiếc áo bà ba gắn liền với những ngày đầu cha ông đi mở cõi phương Nam đất rừng phương Nam.',
      fullStory: 'Thuở tiền nhân đi mở cõi phương Nam, giữa rừng tràm bạt ngàn và kênh rạch chằng chịt, chiếc áo bà ba cùng chiếc khăn rằn đã đồng hành qua bao gian lao khai khẩn đất đai. Tà áo gọn gàng theo chân những người phụ nữ kiên cường chèo ghe đưa đò, vừa lo việc gia đình vừa đánh giặc giữ làng. Chiếc áo bà ba từ đó trở thành biểu tượng sống động của tâm hồn đôn hậu, kiên trung và hào sảng của con người miền Nam.',
      culturalMoral: 'Tri ân công ơn mở cõi của các thế hệ tiền nhân và tinh thần đoàn kết tình làng nghĩa xóm.',
      audioNarratorText: 'Chiếc áo bà ba chẻ tà mềm mại và chiếc khăn rằn ca rô phơ phất bên mái chèo đã khắc sâu vào hồn thiêng sông nước Cửu Long.'
    },
    interestingFacts: [
      'Nguồn gốc tên gọi "Áo Bà Ba" có nhiều giả thuyết, phổ biến nhất là chiếc áo xuất phát từ người Ba Ba (người gốc Phúc Kiến - Mã Lai) du nhập vào Nam Bộ rồi được người Việt cách tân hoàn hảo.',
      'Khăn rằn Nam Bộ được coi là phụ kiện đa năng nhất thế giới: dùng che nắng, lau mồ hôi, đùm cơm nắm, làm dây buộc xuồng và làm vật kỷ niệm trao duyên.'
    ],
    culturalQuotes: 'Chiếc áo bà ba trên dòng sông xanh thẳm, Khăn rằn vắt vai chở nặng nghĩa phù sa.'
  },
  {
    id: 'ta_oi_det_deng',
    name: 'Trang Phục Thổ Cẩm Dệt Dèng Dân Tộc Tà Ôi',
    ethnicGroup: 'Tà Ôi',
    subGroup: 'Pa Cô / Pa Hi / Kan Tua',
    languageFamily: 'Môn - Kh\'mer',
    region: 'bac_trung_bo',
    regionName: 'Bắc Trung Bộ (Đại Ngàn Trường Sơn A Lưới)',
    provinces: ['Thừa Thiên Huế (Huyện A Lưới)', 'Quảng Trị (Hướng Hóa)'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'nghi_le_tam_linh'],
    summary: 'Di sản Quốc gia dệt cườm trực tiếp vào sợi chỉ Dèng trên dãy Trường Sơn hùng vĩ, tái hiện linh hồn của thần núi, con chim Trĩ và cội nguồn sông suối.',
    badge: 'Di Sản Quốc Gia Nghệ Thuật Dệt Dèng Luồn Cườm',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Đại Ngàn Trường Sơn & Thung Lũng A Lưới (Thừa Thiên Huế)',
    galleryImages: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Sợi bông rừng tự nhiên', 'Hạt cườm chì, cườm thủy tinh luồn sợi', 'Vỏ cây ta-đưng nhuộm màu', 'Bạc đúc làm vòng cổ'],
    mainColors: [
      { name: 'Đen Chàm Nền (Màu Của Đất Rừng)', hex: '#0f172a', meaning: 'Màu của đại ngàn Trường Sơn hùng vĩ và lòng kiên định' },
      { name: 'Đỏ Lửa & Trắng Cườm', hex: '#ef4444', meaning: 'Sự sống rực cháy và sự lung linh của sao trời giữa đêm rừng' },
      { name: 'Vàng Nắng Núi', hex: '#eab308', meaning: 'Màu ánh nắng xua tan sương mù thung lũng A Lưới' }
    ],
    costumeLayers: [
      {
        id: 'taoi_vay_deng',
        partName: 'Váy Tấm Dệt Dèng Đính Hạt Cườm Chì',
        localName: 'Váy Dèng',
        position: 'than_duoi',
        description: 'Tấm thổ cẩm dệt dày dặn quấn ngang thân, hàng ngàn hạt cườm trắng đan xen trực tiếp vào từng thớ vải tạo thành hoa văn hình học độc nhất vô nhị.',
        craftTechnique: 'Kỹ thuật dệt luồn hạt cườm vào sợi canh trước khi dệt.',
        symbolism: 'Hạt cườm tượng trưng cho những giọt mồ hôi và sương mai trên lá rừng A Lưới.',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'taoi_chuoi_cuom',
        name: 'Chuỗi Hạt Cườm Mã Não Nhiều Tầng',
        localName: 'Cườm Tà Ôi',
        category: 'trang_suc_bac_dong',
        description: 'Nhiều chuỗi cườm nhiều màu quấn quanh cổ và dải băng trán.',
        spiritualMeaning: 'Bùa hộ mệnh che chở người phụ nữ đi rừng an toàn.',
        wearingStyle: 'Đeo kín trước ngực tạo điểm nhấn lấp lánh.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Hoa Văn Chữ X, Con Thằn Lằn & Ngôi Sao Trường Sơn',
        symbolMeaning: 'Cầu nối giữa tổ tiên và con cháu, ước vọng mưa thuận gió hòa.',
        historicalOrigin: 'Tín ngưỡng sùng bái thiên nhiên dãy Trường Sơn.'
      }
    ],
    techniques: [
      {
        name: 'Nghệ Thuật Dệt Dèng Cài Cườm Độc Nhất Việt Nam',
        description: 'Người phụ nữ Tà Ôi dùng ngón tay thoăn thoắt xếp từng hạt cườm vào khe sợi chỉ dệt, nhịp khung cửi đập chặt giữ hạt cườm cố định vĩnh viễn trên mặt vải.',
        uniqueness: 'Không phải thêu đính sau mà hạt cườm được dệt trực tiếp vào thớ vải từ lúc sơ khai.'
      }
    ],
    folkStory: {
      title: 'Huyền Thoại Về Đóa Hoa Dèng & Đôi Bàn Tay Người Mẹ Tà Ôi',
      summary: 'Truyền thuyết ca ngợi sự nhẫn nại phi thường của người phụ nữ Tà Ôi dệt nên những tấm Dèng quý giá như sinh mệnh.',
      fullStory: 'Theo tích xưa, người Tà Ôi tin rằng tấm Dèng càng nhiều hạt cườm thì gia đình càng hạnh phúc và mùa màng càng bội thu. Để chuẩn bị một tấm Dèng cưới, người mẹ Pa Cô - Tà Ôi phải gom từng hạt cườm chì bên suối, ngồi dệt ròng rã suốt nhiều mùa trăng để gửi gắm tình yêu thương vô bờ cho con gái về nhà chồng.',
      culturalMoral: 'Ca ngợi tình mẫu tử thiêng liêng và đức tính kiên trì gìn giữ di sản dân tộc.',
      audioNarratorText: 'Dệt Dèng A Lưới - Di sản văn hóa phi vật thể Quốc gia nơi từng hạt cườm lấp lánh như ngàn vì sao sáng trên đỉnh Trường Sơn huyền thoại.'
    },
    interestingFacts: [
      'Nghề dệt Dèng của người Tà Ôi tại huyện A Lưới đã được Bộ Văn hóa, Thể thao và Du lịch công nhận là Di sản văn hóa phi vật thể Quốc gia.',
      'Tấm Dèng cổ quý giá nhất có thể đổi được nhiều con trâu mộng và là sính lễ bắt buộc trong tục cưới xin của người Tà Ôi.'
    ],
    culturalQuotes: 'Hạt cườm luồn sợi Dèng thiêng, Đẹp như sao sáng đỉnh Trường Sơn xanh.'
  }
];
