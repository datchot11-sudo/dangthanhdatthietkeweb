import { Costume } from '../types/costume';

export const NORTHWEST_COSTUMES: Costume[] = [
  {
    id: 'hmong_hoa',
    name: "Trang Phục Nữ H'Mông Hoa",
    ethnicGroup: "H'Mông (Mông Hoa)",
    subGroup: 'Mông Lềnh / Mông Pe',
    languageFamily: "H'Mông - Dao",
    region: 'tay_bac',
    regionName: 'Tây Bắc & Đông Bắc',
    provinces: ['Hà Giang', 'Lào Cai', 'Sơn La', 'Điện Biên', 'Lai Châu', 'Yên Bái'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'doi_thuong'],
    summary: 'Biểu tượng rực rỡ nhất của núi rừng Tây Bắc với váy xòe xếp nếp hàng trăm ly dập bằng đá cuội, kỹ thuật vẽ sáp ong Batik nghìn năm và trang sức bạc chạm khắc mặt trời xua đuổi tà khí.',
    badge: 'Tuyệt Tác Vẽ Sáp Ong & Váy Xếp Ly',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Ruộng Bậc Thang Mù Cang Chải & Sa Pa Mây Phủ',
    galleryImages: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570535146632-2d65db473133?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Vải lanh tự dệt (Lanh tay mộc)', 'Sáp ong rừng nguyên chất', 'Chàm tự nhiên', 'Chỉ tơ tằm nhuộm thảo mộc', 'Bạc trắng thủ công'],
    mainColors: [
      { name: 'Xanh Chàm Thâm', hex: '#1c2833', meaning: 'Màu của đất trời, sự thủy chung và bền bỉ kiên cường trước sương gió núi cao' },
      { name: 'Đỏ Thổ Cẩm', hex: '#c0392b', meaning: 'Màu của mặt trời, sự sống sinh sôi, nhiệt huyết và hạnh phúc viên mãn' },
      { name: 'Vàng Hoàng Yến', hex: '#f39c12', meaning: 'Màu của ánh sáng xua tan sương mù, biểu trưng cho mùa màng bội thu' },
      { name: 'Trắng Bạc Tinh Khiết', hex: '#ecf0f1', meaning: 'Ánh sáng bảo hộ của tổ tiên, xua đuổi tà khí bảo vệ linh hồn người phụ nữ' }
    ],
    costumeLayers: [
      {
        id: 'hmong_ao',
        partName: 'Áo Cánh Xẻ Ngực Cổ Thêu',
        localName: 'Tsho Hmong',
        position: 'than_tren',
        description: 'Áo xẻ ngực vạt chéo đè lên nhau, cổ áo phía sau lật ra thành tấm yếm hình chữ nhật thêu hoa văn chỉ màu rực rỡ và đính hạt cườm long lanh.',
        craftTechnique: 'Thêu chữ thập (cross-stitch) và luồn sợi tơ đa sắc trên nền vải lanh nhuộm chàm.',
        symbolism: 'Tấm yếm sau lưng như tấm bùa hộ mệnh chở che người phụ nữ khỏi gió độc và linh hồn xấu từ sau lưng khi đi nương rẫy.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'hmong_vay',
        partName: 'Váy Xòe Xếp Ly Dập Nếp',
        localName: 'Ta Hmong',
        position: 'than_duoi',
        description: 'Váy hình nón cụt, rộng bồng bềnh, khi bung ra tròn như một bông hoa rừng khổng lồ. Váy có hàng trăm nếp gấp tỉ mỉ được dập nếp bằng thanh gỗ hoặc đá lăn.',
        craftTechnique: 'Vẽ sáp ong thủ công bằng bút vẽ đồng (Tjanting), nhuộm chàm nhiều lần, thêu ghép vải hoa văn hình học.',
        symbolism: 'Đại diện cho những tầng ruộng bậc thang tầng tầng lớp lớp và những dãy núi trùng điệp ôm ấp bản làng.',
        image: 'https://images.unsplash.com/photo-1570535146632-2d65db473133?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'hmong_tap_de',
        partName: 'Tạp Dề Trước & Sau (Tấm Che Thân)',
        localName: 'Dơ Hmong',
        position: 'toan_than',
        description: 'Hai tấm vải chữ nhật buông rủ phía trước và sau váy, được nẹp viền chỉ màu hoa văn cầu kỳ, buộc bằng thắt lưng lụa.',
        craftTechnique: 'Ghép vải màu tương phản viền ren kim tuyến.',
        symbolism: 'Tượng trưng cho sự nết na, đoan trang và gìn giữ phẩm hạnh của người con gái Mông.',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'hmong_xa_cap',
        partName: 'Xà Cạp Bọc Chân',
        localName: 'Khang Hmong',
        position: 'chan',
        description: 'Hai dải vải chàm hoặc đen quấn chặt từ bắp chân xuống mắt cá, thắt bằng dây chỉ màu bện chặt.',
        craftTechnique: 'Vải lanh dệt dày dặn, chịu ma sát tốt.',
        symbolism: 'Giúp đôi chân leo núi thoăn thoắt, bảo vệ khỏi gai rừng, vắt và giữ ấm trong mùa đông khắc nghiệt.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'hmong_acc_kieng',
        name: 'Bộ Kiềng Cổ Bạc Tầng',
        localName: 'Hau Xau',
        category: 'trang_suc_bac_dong',
        description: 'Từ 3 đến 5 vòng kiềng bạc nguyên chất lồng vào nhau, bề mặt chạm trổ hoa văn hình học, hoa đào và các vì sao.',
        spiritualMeaning: 'Bạc trắng là hiện thân của mặt trời và mặt trăng, có khả năng kỵ gió, xua tà ma và định danh sự giàu có, đức hạnh của gia tộc.',
        wearingStyle: 'Đeo ôm sát cổ, từ vòng nhỏ đến vòng lớn xòe đều trước ngực.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'hmong_acc_mu',
        name: 'Mũ Đội Đầu Đính Đồng Xu & Dây Tua Rua',
        localName: 'Mu Hmong',
        category: 'khan_mu',
        description: 'Mũ có vành tròn xòe hoa văn dệt, đính hàng chục đồng xu bạc thật và những chùm hạt cườm rủ xuống trán phát ra tiếng leng keng khi bước đi.',
        spiritualMeaning: 'Tiếng leng keng của bạc dẫn đường cho người thương tìm đến trong ngày hội Gầu Tào và Chợ Tình.',
        wearingStyle: 'Đội ngay ngắn trên đỉnh đầu, tóc búi cao bên trong.',
        image: 'https://images.unsplash.com/photo-1570535146632-2d65db473133?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'hmong_acc_xa_tich',
        name: 'Xà Tích Bạc & Móc Khóa Bạc',
        localName: 'Xau Plai',
        category: 'that_lung_xa_tich',
        description: 'Dây xích bạc nhiều sợi móc vào thắt lưng, treo các biểu tượng hình con cá, quả chuông, hộp trầu tí hon.',
        spiritualMeaning: 'Cầu chúc sự sinh sôi nảy nở, con đàn cháu đống như cá bơi dưới suối.',
        wearingStyle: 'Móc bên hông phải rủ xuống theo nếp váy xòe.',
        image: 'https://images.unsplash.com/photo-1611591475152-47831130ab73?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Hoa Văn Chữ Vạn & Ngôi Sao 8 Cánh',
        symbolMeaning: 'Vũ trụ quan của người Mông: Tâm điểm là ngọn núi cội nguồn, 8 cánh sao là 8 phương trời đất che chở con người.',
        historicalOrigin: 'Tái hiện từ ký ức thiên di lịch sử từ ngàn xưa vượt qua các con sông lớn về phía Nam.'
      },
      {
        name: 'Hình Dấu Chân Chim & Móng Rùa',
        symbolMeaning: 'Biểu tượng của sự vững chãi, gắn bó mật thiết với muông thú và lòng biết ơn thiên nhiên hoang dã.',
        historicalOrigin: 'Truyền thuyết chim thần dẫn đường cho tổ tiên tìm thấy mảnh đất màu mỡ lập bản.'
      }
    ],
    techniques: [
      {
        name: 'Nghệ Thuật Vẽ Sáp Ong (Batik) Truyền Đời',
        description: 'Dùng bút vẽ bằng lá đồng kép nhúng sáp ong rừng nóng chảy, vẽ tay từng đường nét hoa văn hình học chính xác đến từng milimet trên vải lanh mộc trước khi nhúng vào thùng nhuộm chàm.',
        uniqueness: 'Khi sáp ong tan trong nước sôi, phần vải được sáp phủ giữ nguyên màu trắng ngà tương phản với nền xanh chàm đậm đà.'
      }
    ],
    folkStory: {
      title: 'Huyền Tích Hoa Văn Khắc Trên Váy Áo Tìm Về Cội Nguồn',
      summary: "Truyền thuyết về tấm váy hoa H'Mông như một tấm bản đồ ký ức lịch sử giúp thế hệ con cháu không bao giờ quên nguồn cội và tổ tiên.",
      fullStory: "Thuở xưa, người H'Mông phải trải qua những cuộc thiên di lịch sử dài đằng đẵng qua bao núi cao sông sâu để tìm miền đất mới. Vì không có chữ viết trên giấy, những người bà, người mẹ thông thái đã nghĩ ra cách bí mật: họ dùng chỉ màu thêu lại toàn bộ hành trình thiên di, con sông lớn, dãy núi hiểm trở, ruộng nương và các vì sao lên chính tà váy, vạt áo của mình. Nhờ đó, mỗi bước đi của thiếu nữ H'Mông hôm nay chính là đang mang theo cả pho sử thi hào hùng của dân tộc mình giữa đại ngàn.",
      culturalMoral: 'Trang phục không chỉ để làm đẹp mà chính là trang sử sống, nhắc nhở con cháu lòng hiếu đạo và tình yêu thiêng liêng với nguồn cội.',
      audioNarratorText: "Ngày xưa trong cuộc thiên di lịch sử, người H'Mông đã thêu toàn bộ con sông, ngọn núi và hành trình của tổ tiên lên tà váy xòe hoa văn. Nhờ đó, mỗi chiếc váy H'Mông chính là một pho sử thi sống giữa đất trời Tây Bắc."
    },
    interestingFacts: [
      "Để hoàn thành một bộ váy H'Mông Hoa truyền thống hoàn chỉnh, người phụ nữ phải mất từ 6 tháng đến 1 năm lao động thủ công liên tục.",
      "Người H'Mông tin rằng hạt lanh không chỉ dệt nên vải mà sợi lanh còn là cầu nối linh thiêng đưa linh hồn người đã khuất về với tổ tiên nguyên quán."
    ],
    culturalQuotes: 'Váy hoa xòe như cánh bướm đón xuân, tiếng bạc leng keng gọi bạn tình qua muôn vách đá.'
  },
  {
    id: 'thai_ao_com_khan_pieu',
    name: 'Áo Cóm & Khăn Piêu Dân Tộc Thái',
    ethnicGroup: 'Thái (Thái Đen & Thái Trắng)',
    subGroup: 'Tày Đăm / Tày Đón',
    languageFamily: 'Tày - Thái',
    region: 'tay_bac',
    regionName: 'Tây Bắc (Sơn La, Điện Biên, Lai Châu)',
    provinces: ['Sơn La', 'Điện Biên', 'Lai Châu', 'Hòa Bình', 'Yên Bái', 'Thanh Hóa'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'doi_thuong'],
    summary: 'Tuyệt đỉnh nét đẹp thanh thoát, duyên dáng tôn vinh đường cong thắt đáy lưng ong của phụ nữ Thái Tây Bắc với hàng cúc bướm âm dương hòa hợp và chiếc Khăn Piêu thêu tình sử huyền thoại.',
    badge: 'Di Sản Khăn Piêu & Cúc Bướm Âm Dương',
    coverImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Thung Lũng Mường Lò & Cánh Đồng Mường Thanh',
    galleryImages: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Vải lụa mỏng dệt tay', 'Vải tơ tằm nhuộm chàm đen', 'Bạc chạm khắc thủ công', 'Chỉ thêu tơ tằm 5 màu'],
    mainColors: [
      { name: 'Trắng Ngà Tinh Khôi', hex: '#fdfefe', meaning: 'Màu áo cóm người Thái Trắng biểu trưng cho sự trinh bạch, thanh khiết' },
      { name: 'Xanh Lá Mạ (Xài Eo)', hex: '#27ae60', meaning: 'Thắt lưng lụa xanh non như mầm cây rừng bên bờ suối Mường Thanh' },
      { name: 'Đen Chàm Thướt Tha', hex: '#17202a', meaning: 'Chân váy đen tuyền dài chấm gót tôn vinh dáng vẻ yêu kiều thướt tha' },
      { name: 'Hồng Đào & Đỏ (Chỉ Khăn Piêu)', hex: '#e74c3c', meaning: 'Ngọn lửa tình yêu đôi lứa nồng cháy son sắt' }
    ],
    costumeLayers: [
      {
        id: 'thai_ao_com',
        partName: 'Áo Cóm Xẻ Ngực Bó Sát',
        localName: 'Sửa Cóm',
        position: 'than_tren',
        description: 'Áo may ngắn vừa chấm thắt lưng, may bằng vải lụa mềm ôm sát lấy cơ thể tôn lên vẻ thon thả của người con gái Thái.',
        craftTechnique: 'Cắt may đo ni đóng giày ôm sát bờ vai và vòng eo.',
        symbolism: 'Tôn vinh vẻ đẹp hình thể tự nhiên của thiếu nữ Tây Bắc, biểu trưng cho sự mềm mại như dòng suối Nậm Rốm.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'thai_hang_cuc',
        partName: 'Hàng Cúc Bướm Bạc (Cúc Khảm Bạc)',
        localName: 'Mák Pém',
        position: 'than_tren',
        description: 'Dãy cúc bạc hình con bướm, con ve hoặc hoa lá đính dọc hai mép nẹp ngực áo với số lượng chẵn (người có chồng) hoặc lẻ (con gái chưa chồng).',
        craftTechnique: 'Đúc và chạm tỉa bạc thủ công tinh vi.',
        symbolism: 'Một bên là bướm đực, một bên là bướm cái, khi cài cúc lại biểu thị cho sự giao hòa âm dương, trời đất gắn kết phu thê.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'thai_vay_den',
        partName: 'Váy Đen Ống Dài',
        localName: 'Xỉn',
        position: 'than_duoi',
        description: 'Váy hình ống tròn may bằng vải tơ tằm nhuộm chàm đen nhánh bóng bẩy, bên trong gấu váy có nẹp một dải vải đỏ kín đáo.',
        craftTechnique: 'Nhuộm chàm nhiều nước rồi đánh nước tro bếp và lòng trắng trứng để tạo độ bóng mượt.',
        symbolism: 'Dải vải đỏ ẩn bên trong gấu váy chỉ hé lộ khi bước đi uyển chuyển, biểu trưng cho nét duyên thầm e ấp.',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'thai_that_lung',
        partName: 'Thắt Lưng Lụa Xanh',
        localName: 'Xài Eo',
        position: 'than_tren',
        description: 'Dải lụa xanh lá cây tươi non hoặc màu tím hoa cà thắt quanh eo giữ nếp váy và áo cóm gọn gàng.',
        craftTechnique: 'Dệt lụa tơ tằm bóng mượt.',
        symbolism: 'Tạo nên đường phân định tỷ lệ vàng cơ thể thắt đáy lưng ong.',
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'thai_khan_pieu',
        name: 'Khăn Piêu Thêu Hoa Văn Cút Piêu',
        localName: 'Khăn Piêu',
        category: 'khan_mu',
        description: 'Tấm khăn chàm đen được thêu hai đầu bằng chỉ màu rực rỡ với họa tiết "cút piêu" cuộn tròn hình ngọn cây, hoa mướp, con hươu.',
        spiritualMeaning: 'Vật định tình thiêng liêng của cô gái Thái trao tặng cho chàng trai mình thầm thương trộm nhớ.',
        wearingStyle: 'Đội vắt chéo qua đầu rủ hai đuôi hoa văn xuống hai bên vai.',
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'thai_xa_tich',
        name: 'Xà Tích Bạc & Hộp Quả Đào',
        localName: 'Dây Xà Tích',
        category: 'that_lung_xa_tich',
        description: 'Dây chuyền bạc gồm nhiều sợi dây bện gắn móc bạc, có treo hộp đựng kim chỉ hoặc ống vôi hình quả đào nhỏ xíu.',
        spiritualMeaning: 'Biểu trưng cho người phụ nữ khéo tay hay làm, chu toàn việc tề gia nội trợ.',
        wearingStyle: 'Móc bên hông buông rủ nhịp nhàng theo từng bước đi.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'thai_tang_cau',
        name: 'Trâm Bạc Búi Tóc Tẳng Cẩu',
        localName: 'Tẳng Cẩu',
        category: 'khan_mu',
        description: 'Búi tóc ngược trên đỉnh đầu gài chiếc trâm bạc nạm ngọc hoặc chạm khắc hoa lá.',
        spiritualMeaning: 'Nghi thức Tẳng Cẩu đánh dấu người con gái chính thức có chồng, nguyện một lòng chung thủy suốt đời.',
        wearingStyle: 'Búi chặt trên đỉnh đầu, cắm trâm bạc xuyên ngang.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Họa Tiết Cút Piêu (Cây Rau Dớn Núi Rừng)',
        symbolMeaning: 'Sự kiên định, lòng thủy chung bất diệt trước mọi phong ba bão táp cuộc đời.',
        historicalOrigin: 'Gắn liền với hình ảnh cây dương xỉ cuộn mình vươn lên đón ánh nắng sớm Tây Bắc.'
      },
      {
        name: 'Họa Tiết Răng Cưa & Tia Nắng',
        symbolMeaning: 'Sự ấm áp che chở của ánh dương soi rọi các thung lũng Mường Lò, Mường Thanh.',
        historicalOrigin: 'Biểu tượng thần thoại mặt trời ban phát sự sống cho muôn loài.'
      }
    ],
    techniques: [
      {
        name: 'Kỹ Thuật Thêu Luồn Chỉ Ngược (Thêu Piêu)',
        description: 'Cô gái thêu từ mặt trái của tấm vải chàm đen để nổi hoa văn màu sắc lên mặt phải mà không để lộ một mối nối chỉ nào.',
        uniqueness: 'Yêu cầu sự tính toán số lượng sợi vải cực kỳ chuẩn xác trong đầu mà không cần kẻ vẽ trước.'
      }
    ],
    folkStory: {
      title: 'Chuyện Tình Chàng Khun Lú - Nàng Ủa & Sự Ra Đời Của Chiếc Khăn Piêu',
      summary: 'Khăn Piêu là minh chứng cho tình yêu bất diệt vượt qua định kiến và ngăn cấm của đôi trai tài gái sắc vùng Tây Bắc.',
      fullStory: 'Truyền thuyết kể rằng nàng Ủa và chàng Khun Lú yêu nhau tha thiết nhưng bị gia đình ngăn cản gả nàng cho người khác. Nàng Ủa trốn vào rừng sâu khóc thương người yêu cho đến khi hóa thành loài chim Piêu cất tiếng gọi tình da diết. Chiếc khăn nàng đánh rơi bên bìa rừng nơi hai người từng hò hẹn sau này được các cô gái Thái mô phỏng lại, thêu dệt nên chiếc Khăn Piêu mang theo linh hồn và lời hẹn ước trăm năm không phai tàn.',
      culturalMoral: 'Ca ngợi tình yêu son sắt tự do và sự khéo léo thủy chung của người phụ nữ Tây Bắc.',
      audioNarratorText: 'Khăn Piêu không đơn thuần là chiếc khăn đội đầu, mà là lời thề nguyền son sắt của tình yêu đôi lứa. Nàng Ủa đánh rơi khăn bên bìa rừng, hóa thành cánh chim Piêu gọi bạn tình mãi mãi.'
    },
    interestingFacts: [
      'Cô gái Thái Đen khi lấy chồng bắt buộc phải làm lễ Tẳng Cẩu (búi tóc ngược lên đỉnh đầu) để báo hiệu cho cộng đồng biết mình đã có gia đình.',
      'Hàng cúc bướm Mák Pém nếu có số cúc lẻ là thiếu nữ son rỗi, còn số cúc chẵn là người phụ nữ đã có đôi có lứa.'
    ],
    culturalQuotes: 'Thắt đáy lưng ong áo cóm duyên, Khăn Piêu e ấp gửi niềm trao duyên.'
  },
  {
    id: 'dao_do',
    name: 'Trang Phục Dân Tộc Dao Đỏ',
    ethnicGroup: 'Dao (Dao Đỏ)',
    subGroup: 'Đại Bản / Kim Miền',
    languageFamily: "H'Mông - Dao",
    region: 'tay_bac',
    regionName: 'Tây Bắc & Đông Bắc',
    provinces: ['Hà Giang', 'Lào Cai (Sa Pa)', 'Yên Bái', 'Tuyên Quang', 'Lai Châu'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'nghi_le_tam_linh'],
    summary: 'Rực rỡ tựa như ngọn lửa sưởi ấm sương mù Sa Pa với chiếc khăn đỏ thắm khổng lồ, chùm 5 quả bông len đỏ rực trước ngực tượng trưng cho ngũ hành và hoa văn thần linh Bàn Vương.',
    badge: 'Ngọn Lửa Sương Mù & Quả Bông Ngũ Hành',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Đỉnh Đèo Ô Quy Hồ & Bản Tả Phìn Sa Pa',
    galleryImages: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Vải chàm đen tự dệt', 'Len đỏ tự nhiên', 'Bạc chạm khắc phù hiệu Bàn Vương', 'Hạt chuỗi cườm nhiều màu'],
    mainColors: [
      { name: 'Đỏ Rực Rỡ (Màu Thống Trị)', hex: '#b91c1c', meaning: 'Màu của lửa, sự may mắn, ấm áp và sức mạnh bảo vệ linh hồn khỏi ma rừng' },
      { name: 'Chàm Đen Thẳm', hex: '#0f172a', meaning: 'Nền tảng của sự trầm tĩnh, cội nguồn đất mẹ và lòng trung kiên' },
      { name: 'Vàng Hoàng Kim', hex: '#d97706', meaning: 'Ánh sáng trí tuệ, mùa lúa chín vàng trên nương' },
      { name: 'Trắng Tinh Khôi', hex: '#f8fafc', meaning: 'Sự trong sạch của tâm hồn người phụ nữ Dao' }
    ],
    costumeLayers: [
      {
        id: 'dao_ao_dai',
        partName: 'Áo Dài Chàm Xẻ Tà Đính Quả Bông',
        localName: 'Lui Cửu',
        position: 'than_tren',
        description: 'Áo chàm dài qua đầu gối, xẻ tà hai bên hông. Điểm nổi bật nhất là vạt ngực đính 5 đến 7 quả bông len màu đỏ rực rỡ và các dải chỉ thêu hoa văn chữ Vạn.',
        craftTechnique: 'Thêu chữ thập chỉ đỏ vàng nổi trên nền vải chàm dày.',
        symbolism: 'Quả bông len đỏ tượng trưng cho 5 yếu tố Ngũ hành (Kim - Mộc - Thủy - Hỏa - Thổ) che chở lồng ngực người mặc.',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'dao_yem_theu',
        partName: 'Yếm Thêu Hoa Văn Cây Thông',
        localName: 'Yếm Dao',
        position: 'than_tren',
        description: 'Tấm yếm thêu kín hình hoa thông, con chim, con chó thần Bàn Hồ, che kín phía trước ngực dưới lớp áo dài.',
        craftTechnique: 'Thêu luồn sợi hoa văn hình học cổ truyền.',
        symbolism: 'Bảo vệ trái tim và gìn giữ sự kín đáo, nết na của người con gái.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'dao_quan_theu',
        partName: 'Quần Chàm Thêu Hoa Văn Nửa Thân Dưới',
        localName: 'Hòa Dao',
        position: 'than_duoi',
        description: 'Quần thụng chàm đen, từ đầu gối xuống gấu chân được thêu kín đặc các tầng hoa văn hình vuông, hình thoi rực rỡ sắc màu.',
        craftTechnique: 'Thêu đếm sợi chỉ đòi hỏi sự kiên trì hàng tháng trời.',
        symbolism: 'Từng dải hoa văn như ruộng nương, chim muông trên mảnh đất bản làng sinh sống.',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'dao_khan_do',
        name: 'Khăn Trùm Đầu Đỏ Cỡ Lớn',
        localName: 'Tủ Đạu',
        category: 'khan_mu',
        description: 'Chiếc khăn đỏ xếp nhiều lớp vuông vức trên đầu, viền đính chuỗi hạt cườm và lục lạc bạc rủ xuống hai bên thái dương.',
        spiritualMeaning: 'Xua đuổi ma tà khi đi trong rừng rậm, đón nhận hồng phúc từ trời cao.',
        wearingStyle: 'Đội cân đối trên đỉnh đầu, gấp góc vuông vức uy nghiêm.',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'dao_trang_suc_ban_vuong',
        name: 'Bạc Chạm Khắc Thần Bàn Vương & Quán Tẩy',
        localName: 'Trang Sức Bạc Dao',
        category: 'trang_suc_bac_dong',
        description: 'Vòng cổ, hoa tai hình chùm quả chuông và lá bùa bạc khắc chữ Nôm Dao cầu phúc trừ tà.',
        spiritualMeaning: 'Gắn liền với tín ngưỡng thờ Long Khuyển Bàn Vương - thủy tổ khai sáng của người Dao.',
        wearingStyle: 'Đeo trang trọng trong các dịp Đại Lễ Cấp Sắc và đám cưới truyền thống.',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Họa Tiết Cây Thông & Hoa Cà',
        symbolMeaning: 'Sức sống dẻo dai của loài cây lá kim đứng vững giữa mùa đông băng giá Hoàng Liên Sơn.',
        historicalOrigin: 'Quan sát thiên nhiên vùng núi cao Sa Pa tuyết phủ.'
      },
      {
        name: 'Dấu Chân Thần Bàn Hồ',
        symbolMeaning: 'Tri ân tổ tiên Bàn Vương đã cứu giúp dân tộc Dao vượt qua biển lớn.',
        historicalOrigin: 'Sử thi truyền miệng nguồn gốc dân tộc Dao.'
      }
    ],
    techniques: [
      {
        name: 'Kỹ Thuật Thêu Đếm Sợi Không Cần Mẫu Vẽ',
        description: 'Phụ nữ Dao Đỏ thêu hoa văn trực tiếp vào mặt sau của tấm vải mà không cần vẽ phác thảo trước, dựa hoàn toàn vào trí nhớ cấu trúc từng thớ sợi dệt.',
        uniqueness: 'Mỗi chi tiết đều đối xứng tuyệt đối và sắc nét phi thường.'
      }
    ],
    folkStory: {
      title: 'Truyền Thuyết Thủy Tổ Bàn Vương & Màu Đỏ May Mắn Của Người Dao',
      summary: 'Nguồn gốc thiêng liêng của màu đỏ trên trang phục gắn liền với công ơn của thần Bàn Vương che chở bộ tộc vượt biển lớn.',
      fullStory: 'Theo truyện tích xưa của người Dao Đỏ, tổ tiên xưa kia vượt biển lớn gặp bão tố dữ dội đe dọa nhấn chìm thuyền bè. Tộc trưởng đã cầu xin Thần Bàn Vương che chở và hứa nếu vượt qua sóng gió bình an, con cháu muôn đời sau sẽ luôn mặc trang phục thêu chỉ đỏ rực như ánh lửa tri ân ơn cứu mạng. Bão tan mây tạnh, thuyền cập bờ bình an và từ đó chiếc khăn đỏ thắm, quả bông đỏ trước ngực luôn đồng hành cùng mọi thế hệ người Dao.',
      culturalMoral: 'Lòng biết ơn sâu sắc đối với tổ tiên và tinh thần đoàn kết vượt qua nghịch cảnh.',
      audioNarratorText: 'Màu đỏ rực rỡ trên trang phục người Dao Đỏ bắt nguồn từ lời hẹn ước tri ấn Thần Bàn Vương khi vượt biển nghìn năm trước. Màu đỏ như ngọn lửa soi đường sưởi ấm núi rừng.'
    },
    interestingFacts: [
      'Một bộ trang phục cô dâu Dao Đỏ đầy đủ có thể nặng từ 7 đến 10kg bao gồm cả khăn đỏ và trang sức bạc nguyên chất.',
      'Người Dao Đỏ nổi tiếng với bài thuốc tắm lá rừng thảo mộc bí truyền kết hợp hoàn hảo cùng lối sống gắn bó bền chặt với thiên nhiên.'
    ],
    culturalQuotes: 'Khăn đỏ như vầng dương sưởi ấm sương mù Sa Pa, bạc trắng như trăng rằm chở che bản Dao.'
  },
  {
    id: 'lo_lo_hoa',
    name: 'Trang Phục Dân Tộc Lô Lô',
    ethnicGroup: 'Lô Lô (Lô Lô Hoa & Lô Lô Đen)',
    subGroup: 'Mù Di / Màn Di',
    languageFamily: 'Tạng - Miến',
    region: 'tay_bac',
    regionName: 'Tây Bắc & Đông Bắc (Hà Giang)',
    provinces: ['Hà Giang (Lũng Cú, Mèo Vạc)', 'Cao Bằng (Bảo Lạc)'],
    gender: 'nu',
    occasions: ['le_hoi', 'le_cuoi', 'doi_thuong'],
    summary: 'Đỉnh cao của nghệ thuật ghép vải hình học (Patchwork) tam giác sắc màu tái hiện toàn bộ vũ trụ quan, các vì sao và chim muông nơi địa đầu cực Bắc Tổ quốc.',
    badge: 'Nghệ Thuật Ghép Vải Hình Học Độc Bản',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    landscapeImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    landscapeName: 'Cột Cờ Quốc Gia Lũng Cú & Bản Lô Lô Chải',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80'
    ],
    material: ['Vải bông tự dệt', 'Vải chàm đen', 'Chỉ màu thủ công', 'Khuy bạc cổ'],
    mainColors: [
      { name: 'Hồng Phấn & Cam', hex: '#f43f5e', meaning: 'Sự tươi trẻ của các thiếu nữ Lô Lô nơi đỉnh Lũng Cú' },
      { name: 'Xanh Da Trời & Lục', hex: '#0284c7', meaning: 'Bầu trời bao la vùng cao nguyên đá Đồng Văn' },
      { name: 'Đen Chàm', hex: '#18181b', meaning: 'Nền tảng vững chắc của đá núi tai mèo' }
    ],
    costumeLayers: [
      {
        id: 'lolo_ao_canh',
        partName: 'Áo Ngắn Cổ Tròn Xẻ Ngực Ghép Vải',
        localName: 'Áo Lô Lô',
        position: 'than_tren',
        description: 'Áo ngắn tay dài bó sát thân, toàn bộ hai ống tay áo và gấu áo được ghép từ hàng ngàn miếng vải tam giác nhỏ li ti nhiều màu sắc tạo thành hoa văn kỷ hà.',
        craftTechnique: 'Nghệ thuật cắt ghép vải tí hon (Patchwork) siêu chuẩn xác.',
        symbolism: 'Những hình tam giác đan xen tượng trưng cho những đỉnh núi đá tai mèo trập trùng nơi biên cương.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'lolo_quan_hoa',
        partName: 'Quần Ống Rộng Ghép Viền Hoa Văn',
        localName: 'Quần Lô Lô Hoa',
        position: 'than_duoi',
        description: 'Quần may rộng thoải mái, gấu quần có dải trang trí hoa văn mắt chim rừng và hình thoi ngũ sắc.',
        craftTechnique: 'Thêu và viền chỉ tương phản nổi bật.',
        symbolism: 'Thuận tiện di chuyển trên những triền đá tai mèo cheo leo.',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80'
      }
    ],
    accessories: [
      {
        id: 'lolo_khan_dau',
        name: 'Khăn Đội Đầu Bện Hạt Cườm & Tua Rua',
        localName: 'Khăn Lô Lô',
        category: 'khan_mu',
        description: 'Khăn vuông quấn quanh đầu, viền đính các dải hạt cườm nhiều tầng và chùm tua rua mềm mại rủ xuống hai bên tai.',
        spiritualMeaning: 'Biểu trưng cho bầu trời sao lấp lánh ban đêm trên cao nguyên đá.',
        wearingStyle: 'Quấn tròn nhiều lớp ôm quanh vầng trán.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
      }
    ],
    patternsAndMotifs: [
      {
        name: 'Họa Tiết Mắt Chim & Đỉnh Núi Tam Giác',
        symbolMeaning: 'Tầm nhìn xa trông rộng và sự kiên cường của con người trước thiên nhiên khắc nghiệt.',
        historicalOrigin: 'Tín ngưỡng sùng bái loài chim thần Mê Ba trong huyền thoại Lô Lô.'
      }
    ],
    techniques: [
      {
        name: 'Kỹ Thuật Ghép Vải Kỷ Hà (Geometric Appliqué)',
        description: 'Cắt hàng ngàn mảnh vải hình tam giác, hình thoi có kích thước chỉ vài milimet rồi khâu tay giấu mũi chỉ để tạo nên bức tranh thị giác sống động.',
        uniqueness: 'Không dùng keo dán hay dập máy, hoàn toàn làm bằng tay với độ chính xác tuyệt đối.'
      }
    ],
    folkStory: {
      title: 'Huyền Thoại Về Đôi Trống Đồng & Điệu Múa Lô Lô',
      summary: 'Trang phục rực rỡ của người Lô Lô hòa quyện cùng âm vang của cặp trống đồng đực cái trong lễ cúng thần rừng.',
      fullStory: 'Người Lô Lô là một trong số ít dân tộc còn lưu giữ và sử dụng trống đồng cổ trong các nghi lễ linh thiêng. Trang phục rực rỡ của các cô gái Lô Lô như những cánh bướm ngũ sắc uyển chuyển nhảy múa theo nhịp trống đồng vang vọng giữa thung lũng Lũng Cú, kết nối thế giới trần gian với các vị thần linh trên chín tầng trời cao.',
      culturalMoral: 'Gìn giữ báu vật văn hóa trống đồng và tình yêu tha thiết với từng tấc đất thiêng liêng nơi địa đầu Tổ quốc.',
      audioNarratorText: 'Dưới chân cột cờ Lũng Cú, trang phục Lô Lô với hàng ngàn mảnh ghép tam giác rực rỡ nhảy múa theo tiếng trống đồng cổ ngàn năm.'
    },
    interestingFacts: [
      'Ngôi làng Lô Lô Chải dưới chân cột cờ Lũng Cú được mệnh danh là một trong những ngôi làng cổ tích đẹp nhất Việt Nam với văn hóa giữ gìn nguyên vẹn.',
      'Người Lô Lô có lịch riêng gọi là lịch Lô Lô tính theo chu kỳ trăng và mùa hoa nở trên núi đá.'
    ],
    culturalQuotes: 'Muôn ngàn sắc hoa ghép trên tà áo, tiếng trống đồng thiêng vọng đá ngàn Lũng Cú.'
  }
];
