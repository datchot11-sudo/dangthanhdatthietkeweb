import { Costume } from '../types/costume';

export const NORTHEAST_DELTA_COSTUMES: Costume[] = [
  {
    id: 'tay_ao_cham',
    name: 'Trang Phục Áo Chàm Dân Tộc Tày',
    ethnicGroup: 'Tày',
    subGroup: 'Thổ / Ngạn / Phén',
    languageFamily: 'Tày - Thái',
    region: 'dong_bac',
    regionName: 'Đông Bắc (Việt Bắc)',
    provinces: ['Cao Bằng', 'Lạng Sơn', 'Bắc Kạn', 'Tuyên Quang', 'Hà Giang', 'Thái Nguyên'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'doi_thuong', 'nghi_le_tam_linh'],
    summary: 'Vẻ đẹp thanh tao, thuần khiết và trang nhã bậc nhất núi rừng Đông Bắc với tà áo dài 5 thân nhuộm chàm thâm tuyền, chiếc vòng bạc tròn sáng lấp lánh hòa cùng tiếng đàn Tính hát Then say đắm lòng người.',
    badge: 'Di Sản Áo Chàm Thanh Tao & Tiếng Then Đàn Tính',
    coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Thác Bản Giốc & Dòng Sông Quây Sơn (Cao Bằng)',
    galleryImages: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Vải bông tự dệt nhuộm chàm cổ truyền', 'Bạc nguyên chất dát tròn', 'Dải lụa tơ tằm màu xanh cốm hoặc hồng'],
    mainColors: [
      { name: 'Xanh Chàm Thâm Tuyền', hex: '#1e293b', meaning: 'Màu của sự bền chặt, chung thủy, khiêm nhường và đằm thắm của người phụ nữ Tày' },
      { name: 'Ánh Bạc Sáng Trắng', hex: '#e2e8f0', meaning: 'Biểu trưng cho ánh trăng soi bóng dòng sông Gâm và sông Bằng Giang' },
      { name: 'Xanh Cốm Dải Thắt Lưng', hex: '#16a34a', meaning: 'Màu của mầm non lúa mới và sức sống phơi phới của mùa xuân Việt Bắc' }
    ],
    costumeLayers: [
      {
        id: 'tay_ao_dai',
        partName: 'Áo Dài 5 Thân Nhuộm Chàm Cài Khuy Nách',
        localName: 'Sửa Dài Tày',
        position: 'than_tren',
        description: 'Áo dài quá đầu gối, xẻ tà hai bên, cổ áo đứng tròn, vạt áo bên phải cài hàng cúc vải hoặc cúc đồng tinh tế.',
        craftTechnique: 'Nhuộm nước chàm tự nhiên từ cây chàm rừng, ngâm và phơi nắng cả chục lần để màu chàm ngấm sâu vào từng thớ vải bóng mượt.',
        symbolism: '5 thân áo tượng trưng cho Tứ thân phụ mẫu và chính bản thân người mặc, biểu thị đạo hiếu kính gia đình.',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'tay_quan_cham',
        partName: 'Quần Chàm Ống Rộng',
        localName: 'Quần Tày',
        position: 'than_duoi',
        description: 'Quần may bằng vải chàm cùng chất liệu với áo, ống rộng vừa phải, đũng rộng thoải mái khi ngồi dệt cửi và làm ruộng.',
        craftTechnique: 'May thủ công giấu đường chỉ tinh xảo.',
        symbolism: 'Sự giản dị, thuận tiện trong nếp sinh hoạt đời thường gắn với nương rẫy.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'tay_that_lung',
        partName: 'Dải Thắt Lưng Lụa Màu',
        localName: 'Xài Bó',
        position: 'than_tren',
        description: 'Dải lụa mềm mại màu xanh cốm, xanh ngọc hoặc màu hồng thắt hờ quanh eo, buông rủ hai dải mềm mại bên hông.',
        craftTechnique: 'Dệt tơ tằm nhuộm màu tương phản nhẹ nhàng trên nền áo chàm đen.',
        symbolism: 'Điểm xuyết nét duyên dáng, tươi trẻ của thiếu nữ tuổi trăng tròn trẩy hội Lồng Tồng.',
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'tay_vong_bac',
        name: 'Kiềng Bạc Cổ Tròn Bản To',
        localName: 'Kiềng Bạc Tày',
        category: 'trang_suc_bac_dong',
        description: 'Vòng bạc nguyên khối uốn cong hình tròn trơn hoặc chạm trổ nhẹ ở hai đầu, ôm sát lấy vầng cổ trắng ngần.',
        spiritualMeaning: 'Vật báu gia truyền của mẹ trao cho con gái khi về nhà chồng, xua đuổi tà ma và giữ ấm cơ thể.',
        wearingStyle: 'Đeo đơn chiếc hoặc đeo lồng 2 chiếc thanh thoát trước cổ áo chàm.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'tay_non_la',
        name: 'Nón Lá Chóp Nhọn Khâu Tay',
        localName: 'Nón Tày',
        category: 'khan_mu',
        description: 'Nón làm bằng lá cọ rừng hoặc lá giang, chóp nhọn cao hơn nón lá xuôi, thắt quai lụa đỏ son.',
        spiritualMeaning: 'Che nắng che mưa và chở che nét duyên e ấp của thiếu nữ khi đi chợ phiên.',
        wearingStyle: 'Đội ngay ngắn kết hợp buộc quai lụa thướt tha.',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Họa Tiết Mặt Đàn Tính & Hoa Sen Chàm',
        symbolMeaning: 'Âm thanh của đàn Tính đưa lời hát Then lên cõi Mường Trời cầu mưa thuận gió hòa.',
        historicalOrigin: 'Tín ngưỡng Then Tày - Di sản văn hóa phi vật thể đại diện của nhân loại được UNESCO công nhận.'
      }
    ],
    techniques: [
      {
        name: 'Nghệ Thuật Nhuộm Chàm Lên Men Tự Nhiên',
        description: 'Lá cây chàm rừng ủ trong thùng gỗ lớn với vôi tôi, rượu gạo và nước tro bếp để lên men tạo màu xanh thẫm không phai theo năm tháng.',
        uniqueness: 'Vải nhuộm chàm càng giặt càng bóng và có mùi thơm thảo mộc đặc trưng chống côn trùng cắn.'
      }
    ],
    folkStory: {
      title: 'Huyền Tích Tiếng Đàn Tính Then Của Chàng Xiên Cân',
      summary: 'Truyền thuyết về cây đàn Tính có bầu đàn làm bằng quả bầu khô và chiếc áo chàm mang lời ca xoa dịu nỗi buồn trần gian.',
      fullStory: 'Xưa kia chàng Xiên Cân thấy dân làng chịu nhiều khổ ải nên đã chế tác ra cây đàn Tính có 12 dây từ quả bầu khô bên suối. Tiếng đàn du dương kết hợp cùng tà áo chàm thanh thoát của các thiếu nữ làm rung động muôn loài, chim ngừng hót để nghe, suối ngừng reo để lắng lại. Vì tiếng đàn quá mê đắm đến mức thần tiên cũng quên cả lối về, Ngọc Hoàng đã bảo chàng bớt dây lại còn 2 hoặc 3 dây để trần gian cân bằng âm dương.',
      culturalMoral: 'Ca ngợi vẻ đẹp tao nhã của nghệ thuật Then Tày và sự gắn kết thiêng liêng giữa con người và thiên nhiên.',
      audioNarratorText: 'Cây đàn Tính làm từ quả bầu khô hòa cùng tà áo chàm Tày đã trở thành Di sản UNESCO, đưa lời ca Then bay bổng đến chín tầng mây.'
    },
    interestingFacts: [
      'Trang phục Tày tuy không nhiều hoa văn sặc sỡ nhưng tập trung tối đa vào độ tinh xảo của chất liệu chàm bóng và sự tinh khiết của bạc trắng.',
      'Lễ hội Lồng Tồng (Xuống đồng) đầu xuân là dịp rực rỡ nhất để chiêm ngưỡng những tà áo chàm Tày cùng những điệu then đắm say lòng người.'
    ],
    culturalQuotes: 'Áo chàm đượm sắc hương rừng, Tiếng Then đàn Tính lay lừng non sông.'
  },
  {
    id: 'kinh_tu_than',
    name: 'Áo Tứ Thân & Nón Quai Thao Bắc Bộ',
    ethnicGroup: 'Kinh (Việt)',
    subGroup: 'Đồng Bằng Bắc Bộ',
    languageFamily: 'Việt - Mường',
    region: 'dong_bang_bac_bo',
    regionName: 'Đồng Bằng Bắc Bộ (Kinh Bắc)',
    provinces: ['Bắc Ninh', 'Hà Nội', 'Hưng Yên', 'Hải Dương', 'Nam Định', 'Ninh Bình', 'Thái Bình'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'doi_thuong'],
    summary: 'Biểu tượng kinh điển của vẻ đẹp phụ nữ Kinh Bắc ngàn năm văn hiến với yếm đào thắm đượm, áo tứ thân mớ ba mớ bảy, chiếc nón quai thao tròn vành vạnh và dải yếm lụa Hà Đông thướt tha.',
    badge: 'Di Sản Áo Tứ Thân & Dân Ca Quan Họ Bắc Ninh',
    coverImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Quần Thể Danh Thắng Tràng An & Làng Cổ Đường Lâm',
    galleryImages: [
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Lụa Vạn Phúc (Lụa Hà Đông)', 'Vải đũi tơ tằm', 'Sợi tơ chuối, lá cọ rừng làm nón', 'Bạc đúc làm xà tích'],
    mainColors: [
      { name: 'Nâu Củ Nâu & Đen Chàm', hex: '#451a03', meaning: 'Màu của đất phù sa màu mỡ, sự tần tảo chịu thương chịu khó của người mẹ Việt Nam' },
      { name: 'Hồng Sen / Yếm Đào', hex: '#f43f5e', meaning: 'Nét duyên dáng, sức sống thanh tân e ấp của người con gái Quan họ' },
      { name: 'Vàng Mỡ Gà', hex: '#fde047', meaning: 'Màu của ánh trăng rằm hội Lim và hạt lúa mùa trĩu hạt' },
      { name: 'Xanh Lý / Xanh Cốm', hex: '#84cc16', meaning: 'Màu của mạ non bờ đê sông Đuống và sông Cầu' }
    ],
    costumeLayers: [
      {
        id: 'kinh_yem_dao',
        partName: 'Yếm Đào Lụa Tơ Tằm Cổ Xây',
        localName: 'Yếm Cánh Sen',
        position: 'than_tren',
        description: 'Mảnh lụa hình thoi che ngực, cổ khoét tròn (cổ xây) hoặc xẻ chữ V, bốn dải lụa buộc sau gáy và sau lưng.',
        craftTechnique: 'Dệt lụa tơ tằm Vạn Phúc mềm mại, nhuộm màu cánh sen hoặc mỡ gà.',
        symbolism: 'Biểu tượng của nét xuân thì, vẻ đẹp kín đáo và nữ tính nhất của người phụ nữ Việt cổ truyền.',
        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'kinh_ao_tu_than',
        partName: 'Áo Tứ Thân Buộc Vạt',
        localName: 'Áo Tứ Thân',
        position: 'than_tren',
        description: 'Áo gồm 4 vạt: hai vạt sau may liền thành sống áo, hai vạt trước buông rời để buộc thắt nút trước bụng tạo dáng cánh bướm duyên dáng.',
        craftTechnique: 'May can sống lưng tỉ mỉ bằng vải lụa tơ tằm hoặc the mỏng.',
        symbolism: 'Bốn vạt áo tượng trưng cho Tứ thân phụ mẫu (cha mẹ mình và cha mẹ chồng), hai vạt trước buộc vào nhau tượng trưng cho tình nghĩa vợ chồng son sắt.',
        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'kinh_vay_linh',
        partName: 'Váy Đen Lĩnh Bưởi Xòe Chân',
        localName: 'Váy Lĩnh',
        position: 'than_duoi',
        description: 'Váy hình ống may bằng vải đũi hoặc lĩnh Bưởi đen nhánh bóng bẩy, buông rủ tha thướt theo từng bước đi.',
        craftTechnique: 'Nhuộm bùn và củ nâu nước thứ mười để mặt lụa đanh bóng.',
        symbolism: 'Sự giản dị, đoan trang và nền nã của phụ nữ nông thôn Bắc Bộ.',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'kinh_khan_mo_qua',
        partName: 'Khăn Mỏ Quạ & Khăn Vuông Đen',
        localName: 'Khăn Mỏ Quạ',
        position: 'dau',
        description: 'Khăn vuông đen gấp chéo hình tam giác, quấn quanh đầu và thắt nút sau gáy, đỉnh khăn nhô ra trước trán như mỏ chim quạ.',
        craftTechnique: 'Gấp nếp cân đối ôm sát khuôn mặt chữ xoan.',
        symbolism: 'Tôn lên khuôn mặt phúc hậu, hàm răng đen nhánh hạt huyền và nụ cười duyên.',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'kinh_non_quai_thao',
        name: 'Nón Quai Thao (Nón Ba Tầm)',
        localName: 'Nón Thao',
        category: 'khan_mu',
        description: 'Nón hình tròn phẳng đường kính khoảng 70-80cm, khâu bằng lá cọ rừng tỉ mỉ, quai nón bện bằng sợi tơ tằm màu tím than có đính tua rua lụa.',
        spiritualMeaning: 'Chiếc nón nghiêng che giấu nụ cười bẽn lẽn của liền chị Quan họ trong những câu ca "Người ơi người ở đừng về".',
        wearingStyle: 'Cầm tay hoặc đội nghiêng đầu trong các dịp lễ hội chùa Dâu, hội Lim.',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'kinh_xa_tich_bac',
        name: 'Dây Xà Tích Bạc Đeo Hông Đính Quả Đào',
        localName: 'Xà Tích Bắc Bộ',
        category: 'that_lung_xa_tich',
        description: 'Bộ dây xích bạc đúc từ 3 đến 5 dây treo lủng lẳng ống vôi hình quả đào, móng vuốt bạc và con dao nhíp chạm khắc tinh xảo.',
        spiritualMeaning: 'Thể hiện gia cảnh ấm êm, nếp gia phong gia giáo của các cô gái Kinh thành.',
        wearingStyle: 'Gài bên hông rủ xuống trên nền dải thắt lưng xanh đỏ.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Hoa Văn Mớ Ba Mớ Bảy & Sóng Lụa',
        symbolMeaning: 'Sự phong phú, đa tầng của tâm hồn người phụ nữ Việt: bên ngoài giản dị mộc mạc (áo nâu, áo đen) nhưng bên trong ẩn chứa muôn vàn sắc màu tươi thắm (áo hồng, áo xanh).',
        historicalOrigin: 'Tập quán may mặc truyền thống vùng văn hóa Kinh Bắc.'
      }
    ],
    techniques: [
      {
        name: 'Nghệ Thuật Dệt Lụa Vạn Phúc & Nhuộm Củ Nâu Lĩnh Bưởi',
        description: 'Nghề dệt lụa tơ tằm cổ truyền nghìn năm đất kinh kỳ, tạo nên chất lụa "mùa đông ấm áp, mùa hè mát rượi".',
        uniqueness: 'Từng mét lụa sáng bóng tự nhiên, không nhăn nhúm và bền chắc cùng thời gian.'
      }
    ],
    folkStory: {
      title: 'Huyền Thoại Hội Lim & Tà Áo Nón Thao Người Liền Chị',
      summary: 'Chuyện tình duyên đằm thắm của người Quan họ Kinh Bắc trao duyên qua câu hát và chiếc nón quai thao.',
      fullStory: 'Vào ngày rằm tháng Giêng trên đồi Lim, những liền anh áo the khăn xếp cùng các liền chị nón quai thao áo tứ thân dập dìu trẩy hội. Chiếc nón thao nghiêng nghiêng giấu đi giọt nước mắt bâng khuâng lúc chia tay khi câu hát "Người ơi người ở đừng về" cất lên trên bến sông Cầu. Tà áo tứ thân thắt vạt chính là biểu tượng cho lời thề son sắt kết tóc xe duyên của bao lứa đôi.',
      culturalMoral: 'Ca ngợi vẻ đẹp văn hiến tao nhã, tình nghĩa thủy chung son sắt của con người Việt Nam.',
      audioNarratorText: 'Chiếc nón quai thao tròn vành vạnh và tà áo tứ thân mớ ba mớ bảy đã cùng Dân ca Quan họ Bắc Ninh bước vào kho tàng Di sản văn hóa thế giới UNESCO.'
    },
    interestingFacts: [
      'Nón quai thao ngày xưa có kích thước rất lớn (đường kính gần 1 mét) được đan từ những ngọn lá cọ non phơi sương sớm.',
      'Tục ngữ có câu "Áo rách thay vạt, bụng đói chẳng thèm than", nhắc đến vạt áo tứ thân luôn được may ghép cẩn thận giữ nếp gia phong.'
    ],
    culturalQuotes: 'Thắt lưng xanh thắm yếm đào, Nón nghiêng quai thao ngọt ngào câu then.'
  },
  {
    id: 'kinh_nhat_binh',
    name: 'Áo Nhật Bình Cung Đình Huế',
    ethnicGroup: 'Kinh (Việt)',
    subGroup: 'Cung Đình Triều Nguyễn',
    languageFamily: 'Việt - Mường',
    region: 'bac_trung_bo',
    regionName: 'Bắc Trung Bộ (Cố Đô Huế)',
    provinces: ['Thừa Thiên Huế', 'Quảng Trị', 'Đà Nẵng'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'nghi_le_tam_linh'],
    summary: 'Đỉnh cao của lễ phục cung đình Việt Nam thời phong kiến dành cho Hoàng hậu, Công chúa và Quý tộc triều Nguyễn với cổ áo hình chữ nhật viền hoa văn Loan Phượng, ngũ sắc Ngũ hành và dải ngũ sắc Ngũ thường.',
    badge: 'Tuyệt Phẩm Lễ Phục Hoàng Cung Triều Nguyễn',
    coverImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Đại Nội Kinh Thành Huế & Dòng Sông Hương',
    galleryImages: [
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Gấm đoạn thượng hạng cung đình', 'Lụa tơ tằm thêu chỉ kim tuyến, ngân tuyến', 'Đá quý, ngọc trai, vàng ròng'],
    mainColors: [
      { name: 'Vàng Chính Sắc (Hoàng Hậu)', hex: '#eab308', meaning: 'Màu tôn quý tối thượng của bậc Mẫu nghi thiên hạ' },
      { name: 'Đỏ Tươi (Công Chúa & Quý Phi)', hex: '#dc2626', meaning: 'Quyền quý, vinh hoa phú quý của các bậc cung phi' },
      { name: 'Tím Hoa Cà (Huế Thơ)', hex: '#9333ea', meaning: 'Sự trầm mặc, quý phái đặc trưng của đất Cố đô' }
    ],
    costumeLayers: [
      {
        id: 'nhatbinh_ao_chinh',
        partName: 'Áo Nhật Bình Cổ Hình Chữ Nhật Thêu Loan Phượng',
        localName: 'Áo Nhật Bình',
        position: 'than_tren',
        description: 'Áo xẻ ngực vạt lớn đối khâm, cổ áo viền to bản ghép lại tạo thành hình chữ nhật trước ngực, tay áo đính dải vải ngũ sắc rực rỡ.',
        craftTechnique: 'Thêu nổi kim tuyến đồ án rồng phượng, thủy ba (sóng nước), nhật nguyệt cực kỳ công phu.',
        symbolism: 'Cổ áo hình chữ nhật tượng trưng cho chữ "Nhật" (Mặt trời) và "Bình" (Bình an, thái bình thịnh trị).',
        image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'nhatbinh_khan_van',
        partName: 'Khăn Vành Dây Mạ Vàng',
        localName: 'Khăn Vành Dây',
        position: 'dau',
        description: 'Dải lụa dài cả chục mét quấn nhiều vòng đều tăm tắp quanh đầu tạo thành vành mũ xòe như đóa sen đang nở.',
        craftTechnique: 'Quấn tay thủ công đòi hỏi sự cân xứng hoàn hảo.',
        symbolism: 'Tôn vinh khí chất vương giả, uy nghiêm của các bậc mệnh phụ triều đình.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'nhatbinh_tram_cai',
        name: 'Trâm Phượng Hoàng Nạm Ngọc Cung Đình',
        localName: 'Kim Trâm',
        category: 'khan_mu',
        description: 'Trâm cài bằng vàng hoặc bạc mạ vàng, chạm hình chim phụng ngậm chuỗi ngọc rủ xuống.',
        spiritualMeaning: 'Biểu tượng của quyền lực và đức hạnh cao quý.',
        wearingStyle: 'Cài nghiêng bên vành khăn vành dây.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Hoa Văn Loan Phượng Cát Tường & Thủy Ba Tam Sơn',
        symbolMeaning: 'Non sông bền vững, thái bình muôn năm và sự cát tường như ý.',
        historicalOrigin: 'Điển chế lễ phục triều Nguyễn quy định nghiêm ngặt trong "Khâm định Đại Nam hội điển sự lệ".'
      }
    ],
    techniques: [
      {
        name: 'Kỹ Thuật Thêu Chỉ Vàng (Kim Tuyến) Thêu Cung Đình',
        description: 'Các nghệ nhân cung đình thuộc Cục Thượng Y tỉ mẩn thêu từng mũi chỉ kim ngân tuyến trên nền gấm tơ tằm thượng hạng.',
        uniqueness: 'Từng hoa văn phượng hoàng có độ óng ánh biến ảo theo từng góc độ ánh sáng mặt trời.'
      }
    ],
    folkStory: {
      title: 'Huyền Thoại Về Hoàng Thái Hậu Từ Dụ & Nếp Áo Nhật Bình Cần Kiệm',
      summary: 'Giai thoại về đức tính cần kiệm, thương dân như con của bậc mẫu nghi thiên hạ triều Nguyễn.',
      fullStory: 'Hoàng Thái hậu Từ Dụ - người mẹ đức hạnh của vua Tự Đức luôn răn dạy cung tần mỹ nữ phải giữ nếp sống giản dị. Dù mặc trên mình chiếc áo Nhật Bình quyền quý bậc nhất triều đình, bà vẫn luôn trân trọng từng đường kim mũi chỉ của người thợ thêu, không cho phép may áo quá xa hoa lãng phí. Chiếc áo Nhật Bình từ đó không chỉ biểu thị sự giàu sang mà còn là biểu tượng của lòng nhân từ và đức độ bao la.',
      culturalMoral: 'Bài học sâu sắc về lối sống nhân đức, thanh liêm và giữ gìn phẩm hạnh gia giáo.',
      audioNarratorText: 'Áo Nhật Bình cung đình Huế - biểu tượng vàng son của mỹ thuật cung đình triều Nguyễn với cổ hình chữ nhật tượng trưng cho thái bình thịnh trị.'
    },
    interestingFacts: [
      'Thời Nguyễn, màu sắc của áo Nhật Bình phân định cấp bậc rất nghiêm ngặt: Hoàng hậu mặc màu vàng, Công chúa mặc màu đỏ, Cung tần mặc màu tím hoặc xanh.',
      'Ngày nay, áo Nhật Bình đang hồi sinh mạnh mẽ và trở thành lễ phục cưới truyền thống được hàng triệu bạn trẻ Việt Nam yêu thích.'
    ],
    culturalQuotes: 'Vàng son cung cấm bóng kinh kỳ, Nhật Bình rạng rỡ nét phương phi.'
  },
  {
    id: 'muong_ao_panh',
    name: 'Trang Phục Nữ Mường & Nghệ Thuật Cạp Váy',
    ethnicGroup: 'Mường',
    subGroup: 'Mường Bi, Mường Vang, Mường Thàng, Mường Động',
    languageFamily: 'Việt - Mường',
    region: 'tay_bac',
    regionName: 'Hòa Bình & Thanh Hóa (Đất Mường)',
    provinces: ['Hòa Bình', 'Thanh Hóa', 'Phú Thọ', 'Sơn La', 'Ninh Bình'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'doi_thuong'],
    summary: 'Nổi tiếng với chiếc cạp váy dệt thổ cẩm rồng, hươu, rùa kỳ ảo - kiệt tác dệt hoa văn hình học cổ truyền chứa đựng cả vũ trụ quan và sử thi "Đẻ Đất Đẻ Nước" của người Mường.',
    badge: 'Kiệt Tác Cạp Váy Thổ Cẩm & Sử Thi Mường',
    coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Thung Lũng Mai Châu & Đất Mường Hòa Bình',
    galleryImages: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Vải lụa tơ tằm dệt tay', 'Sợi bông nhuộm màu thiên nhiên', 'Bạc xà tích', 'Vải trắng đội đầu'],
    mainColors: [
      { name: 'Trắng Tinh Khôi (Khăn Bịt Đầu)', hex: '#ffffff', meaning: 'Sự trong trắng, thanh bạch của người phụ nữ Mường' },
      { name: 'Đen Chàm (Thân Váy)', hex: '#18181b', meaning: 'Màu của đất mường và cội nguồn tổ tiên' },
      { name: 'Đỏ, Vàng, Xanh (Hoa Văn Cạp Váy)', hex: '#e11d48', meaning: 'Vũ trụ quan sinh sôi, rồng phượng và muông thú hòa hợp' }
    ],
    costumeLayers: [
      {
        id: 'muong_ao_panh',
        partName: 'Áo Pắn (Áo Ngắn Xẻ Ngực)',
        localName: 'Áo Pắn',
        position: 'than_tren',
        description: 'Áo may ngắn ngang chấm thắt lưng, may bằng vải lụa trắng hoặc hồng, bên trong mặc yếm trắng kín đáo.',
        craftTechnique: 'Cắt may vừa vặn tôn dáng thanh thoát.',
        symbolism: 'Để lộ ra phần cạp váy dệt hoa văn rực rỡ nhất ngay sát chân ngực.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'muong_cap_vay',
        partName: 'Cạp Váy Mường Thổ Cẩm Độc Bản',
        localName: 'Răng Bến & Rang Cao',
        position: 'than_duoi',
        description: 'Đầu váy ôm sát ngực dệt hoa văn hình con rồng Mường, con hươu sao, hoa sen và các biểu tượng vũ trụ đa sắc.',
        craftTechnique: 'Dệt sợi nổi trên khung cửi luồn thẻ gỗ bí truyền.',
        symbolism: 'Chiếc cạp váy như chiếc cầu vồng ngăn cách giữa trời và đất, bảo vệ tính mạng và sinh khí của người phụ nữ.',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'muong_khan_trang',
        name: 'Khăn Trắng Đội Đầu Thắt Nút Sau Gáy',
        localName: 'Khăn Vạt',
        category: 'khan_mu',
        description: 'Dải vải bông trắng mịn quấn ôm quanh trán, thắt nút nhô ra sau gáy.',
        spiritualMeaning: 'Tượng trưng cho sự trong sạch, lòng hiếu thảo và kiên trinh.',
        wearingStyle: 'Đội ngay ngắn trên trán tạo góc nhọn thanh tú.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Hoa Văn Con Rồng Mường (Rồng Cụt Đuôi)',
        symbolMeaning: 'Vật tổ thiêng liêng mang lại nguồn nước dồi dào cho ruộng nương bản mường.',
        historicalOrigin: 'Sử thi "Đẻ Đất Đẻ Nước" của dân tộc Mường.'
      }
    ],
    techniques: [
      {
        name: 'Kỹ Thuật Dệt Cạp Váy Luồn Que Tre',
        description: 'Dùng hàng trăm que tre nhỏ như que tăm luồn từng sợi chỉ màu tơ tằm theo sơ đồ tư duy trong đầu người thợ dệt.',
        uniqueness: 'Mặt trái và mặt phải của cạp váy đều mịn màng và không hề có sợi chỉ thừa.'
      }
    ],
    folkStory: {
      title: 'Sử Thi Đẻ Đất Đẻ Nước & Vẻ Đẹp Chiếc Cạp Váy Mường',
      summary: 'Cạp váy Mường là cuốn sách ghi lại lịch sử khai thiên lập địa của bốn vùng mường trù phú: Bi, Vang, Thàng, Động.',
      fullStory: 'Trong sử thi Đẻ Đất Đẻ Nước, cây Chu Đồng khổng lồ sinh ra muôn loài và thần Rồng mang lại sự sống cho loài người. Người phụ nữ Mường đã dệt toàn bộ hình ảnh cây si, con rồng, hoa cỏ của buổi đầu sơ khai lên chính chiếc cạp váy ôm lấy lồng ngực mình, như mang theo linh hồn bất diệt của đất Mường nghìn năm.',
      culturalMoral: 'Tôn kính thiên nhiên cội nguồn và trân trọng di sản văn hóa của tổ tiên.',
      audioNarratorText: 'Cạp váy Mường ôm sát ngực với hoa văn Rồng thiêng dệt bằng que tre chính là kiệt tác sống của sử thi Đẻ Đất Đẻ Nước.'
    },
    interestingFacts: [
      'Một cô gái Mường khi đi lấy chồng phải chuẩn bị từ 6 đến 12 chiếc váy tự tay dệt cạp để biếu mẹ chồng và người thân trong họ.',
      'Cạp váy Mường được chia làm 3 phần: Rang trên, Rang dưới và Cao, mỗi phần có một hệ thống hoa văn biểu tượng riêng biệt.'
    ],
    culturalQuotes: 'Khăn trắng thắt ngang đầu đoan trang, Cạp váy hoa văn sáng đất Mường.'
  }
];
