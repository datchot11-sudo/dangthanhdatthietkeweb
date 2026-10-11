import { Costume, QuizQuestion } from '../types/costume';
import { NORTHWEST_COSTUMES } from './costumesNorthWest';
import { NORTHEAST_DELTA_COSTUMES } from './costumesNorthEastAndDelta';
import { HIGHLANDS_SOUTH_COSTUMES } from './costumesHighlandsAndSouth';

export const ALL_COSTUMES: Costume[] = [
  ...NORTHWEST_COSTUMES,
  ...NORTHEAST_DELTA_COSTUMES,
  ...HIGHLANDS_SOUTH_COSTUMES,
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Hàng cúc bướm "Mák Pém" trên chiếc Áo Cóm của người phụ nữ Thái có ý nghĩa triết lý sâu sắc nào?',
    options: [
      'Chỉ dùng để trang trí cho áo thêm bắt mắt',
      'Tượng trưng cho sự giao hòa âm dương (bướm đực - bướm cái) và phân biệt tình trạng hôn nhân (số cúc lẻ/chẵn)',
      'Để đo chiều cao và cân nặng của người mặc',
      'Đại diện cho số lượng của cải gia đình sở hữu'
    ],
    correctAnswer: 1,
    explanation: 'Hàng cúc bướm bạc (Mák Pém) của áo cóm gồm hai hàng: một bên là bướm đực, một bên là bướm cái. Khi cài lại biểu thị âm dương hòa hợp. Số cúc lẻ dành cho thiếu nữ chưa chồng, số cúc chẵn dành cho phụ nữ đã có gia đình.',
    ethnicGroupId: 'thai_ao_com_khan_pieu',
    culturalContext: 'Văn hóa Dân tộc Thái Tây Bắc'
  },
  {
    id: 2,
    question: 'Váy xòe của phụ nữ H\'Mông Hoa được tạo nếp gấp bằng phương pháp truyền thống nào?',
    options: [
      'Dùng bàn ủi hơi nước hiện đại',
      'Dập nếp thủ công bằng đá cuội hoặc thanh gỗ lăn sau khi nhuộm chàm và vẽ sáp ong',
      'Khâu chỉ viền cố định vĩnh viễn',
      'Ngâm trong nhựa cây cao su'
    ],
    correctAnswer: 1,
    explanation: 'Phụ nữ H\'Mông dùng kỹ thuật dập nếp thủ công bằng đá lăn hoặc thanh gỗ miết từng đường ly trên phiến đá phẳng, tạo nên hàng trăm nếp gấp bồng bềnh như đóa hoa rừng khi xoay người.',
    ethnicGroupId: 'hmong_hoa',
    culturalContext: 'Văn hóa Dân tộc H\'Mông'
  },
  {
    id: 3,
    question: 'Trên chiếc áo dài Dao Đỏ, chùm 5 quả bông len đỏ rực rỡ trước ngực tượng trưng cho điều gì?',
    options: [
      'Năm châu bốn biển',
      'Năm người con trong gia đình',
      'Quy luật Ngũ Hành (Kim - Mộc - Thủy - Hỏa - Thổ) che chở lồng ngực và xua đuổi tà khí',
      'Năm mùa trong năm của vùng núi cao'
    ],
    correctAnswer: 2,
    explanation: 'Năm quả bông len đỏ trước ngực người Dao Đỏ tượng trưng cho Ngũ hành tương sinh tương khắc, bảo vệ sức khỏe và mang lại vượng khí tốt lành cho người phụ nữ.',
    ethnicGroupId: 'dao_do',
    culturalContext: 'Văn hóa Dân tộc Dao Đỏ Sa Pa'
  },
  {
    id: 4,
    question: 'Điểm độc nhất vô nhị của kiệt tác Dệt Dèng (Di sản Quốc gia của dân tộc Tà Ôi) là gì?',
    options: [
      'Thêu hoa văn bằng máy công nghiệp',
      'Cài và đính trực tiếp hạt cườm chì vào sợi dọc trong quá trình dệt trên khung cửi luồn chân',
      'Chỉ dùng duy nhất một màu chỉ trắng',
      'In nhiệt hoa văn lên mặt vải'
    ],
    correctAnswer: 1,
    explanation: 'Dệt Dèng Tà Ôi là di sản thế giới độc đáo: phụ nữ Tà Ôi luồn trực tiếp từng hạt cườm chì đúc thủ công vào sợi chỉ dệt ngay từ lúc đan trên khung cửi, tạo nên hoa văn nổi 3D chắc chắn liền khối với tấm vải.',
    ethnicGroupId: 'ta_oi_det_deng',
    culturalContext: 'Di sản Văn hóa Phi vật thể Quốc gia Tà Ôi A Lưới'
  },
  {
    id: 5,
    question: 'Áo Nhật Bình cung đình triều Nguyễn có tên gọi "Nhật Bình" bắt nguồn từ đặc điểm nào?',
    options: [
      'Áo chỉ được mặc vào ban ngày khi mặt trời lên cao',
      'Phần cổ áo khi gập cài lại tạo thành hình chữ nhật to bản trước ngực',
      'Áo có nguồn gốc từ Nhật Bản du nhập sang',
      'Áo được dệt từ sợi cây hoa hướng dương'
    ],
    correctAnswer: 1,
    explanation: 'Áo Nhật Bình có tên gọi xuất phát từ dạng cổ áo khoét hình chữ nhật lớn chạy từ cổ xuống ngực, viền dải Ngũ hành ngũ sắc biểu trưng cho trời tròn đất vuông và quy chế hoàng gia tôn nghiêm.',
    ethnicGroupId: 'kinh_ao_nhat_binh_ngu_than',
    culturalContext: 'Mỹ thuật Cung đình Triều Nguyễn Cố đô Huế'
  },
  {
    id: 6,
    question: 'Cầu thang lên ngôi nhà dài và trang phục thổ cẩm Ê Đê luôn gắn liền với biểu tượng thiêng liêng nào của chế độ Mẫu hệ?',
    options: [
      'Đôi bầu ngực phụ nữ và vầng trăng khuyết',
      'Hình cây gậy của tù trưởng nam',
      'Hình con sư tử đá',
      'Hình thanh kiếm bằng đồng'
    ],
    correctAnswer: 0,
    explanation: 'Trong chế độ Mẫu hệ Ê Đê, hình tượng đôi bầu ngực mẹ và vầng trăng khuyết được khắc trang trọng trên cầu thang cái lên nhà dài, tôn vinh thiên chức người mẹ gìn giữ sự sinh sôi của dòng tộc.',
    ethnicGroupId: 'ede_tho_cam',
    culturalContext: 'Không gian Văn hóa Cồng Chiêng Tây Nguyên'
  },
  {
    id: 7,
    question: 'Trong đám cưới truyền thống Khmer Nam Bộ, nghi thức thiêng liêng nào gắn liền với chiếc khăn Sbai?',
    options: [
      'Cô dâu đội khăn Sbai lên đầu chú rể',
      'Chú rể nắm vạt đuôi khăn Sbai của cô dâu để được dẫn vào phòng tân hôn theo tích xưa chàng Preah Thong',
      'Cắt đôi khăn Sbai chia cho hai họ',
      'Thả khăn Sbai xuống dòng sông Cửu Long'
    ],
    correctAnswer: 1,
    explanation: 'Theo truyền thuyết Preah Thong và Neang Neak, chú rể nắm vạt khăn Sbai của cô dâu tái hiện tích chàng hoàng tử theo công chúa Rồng xuống long cung lập nghiệp, tượng trưng cho sự chung thủy đồng lòng vợ chồng.',
    ethnicGroupId: 'khmer_sampot_tamvong',
    culturalContext: 'Văn hóa Khmer Nam Bộ'
  },
  {
    id: 8,
    question: 'Nghệ thuật dệt "Lãnh Mỹ A" - chất liệu may Áo Bà Ba huyền thoại của đất Tân Châu (An Giang) sử dụng loại quả rừng nào để nhuộm đen bóng?',
    options: [
      'Quả bồ kết',
      'Trái mặc nưa (mặc nưa rừng)',
      'Quả sim tím',
      'Quả cau kiểng'
    ],
    correctAnswer: 1,
    explanation: 'Lãnh Mỹ A Tân Châu nổi danh toàn cầu nhờ mủ trái mặc nưa. Trái mặc nưa giã lấy nước nhúng tơ tằm hàng trăm lần phơi nắng gắt tạo nên màu đen huyền bí, mùa hè mặc mát lạnh, mùa đông ấm áp lạ kỳ.',
    ethnicGroupId: 'kinh_nam_bo_ao_ba_ba',
    culturalContext: 'Văn hóa Miệt Vườn Phương Nam'
  }
];

export interface BrocadeMuseumItem {
  id: string;
  name: string;
  ethnicGroup: string;
  technique: string;
  description: string;
  symbolism: string;
  colorPalette: string[];
}

export const BROCADE_MUSEUM_ITEMS: BrocadeMuseumItem[] = [
  {
    id: 'batik_hmong',
    name: 'Vẽ Sáp Ong (Batik) H\'Mông',
    ethnicGroup: 'H\'Mông',
    technique: 'Bút vẽ đồng kẹp, sáp ong rừng nóng chảy, nhuộm chàm thâm',
    description: 'Nghệ nhân dùng bút đồng chấm sáp ong vẽ hoa văn chữ Vạn, hình ốc sên, hoa hồi lên vải lanh trắng trước khi nhúng chàm.',
    symbolism: 'Ký ức ngàn năm về hành trình thiên di và trật tự vũ trụ hài hòa.',
    colorPalette: ['#1c2833', '#ffffff', '#e74c3c', '#f1c40f']
  },
  {
    id: 'det_deng_taoi',
    name: 'Dệt Dèng Cườm Chì Tà Ôi',
    ethnicGroup: 'Tà Ôi / Pa Cô',
    technique: 'Xâu cườm chì vào sợi dọc trước khi dệt ngang',
    description: 'Di sản thế giới độc bản: cườm chì đúc thủ công được kết hợp liền mạch tạo họa tiết 3D nổi bật trên nền vải chàm.',
    symbolism: 'Sức mạnh chế ngự rừng già Trường Sơn và lòng dũng cảm bảo vệ buôn làng.',
    colorPalette: ['#111827', '#e11d48', '#f8fafc', '#d97706']
  },
  {
    id: 'cap_vay_muong',
    name: 'Cạp Váy Rồng Phượng Mường',
    ethnicGroup: 'Mường',
    technique: 'Dệt tơ tằm đảo sợi ngược chiều trên khung dệt hẹp',
    description: 'Được các nhà nhân chủng học quốc tế xem là kiệt tác nghệ thuật dệt Đông Nam Á với các đồ án rồng thiêng và hươu sao.',
    symbolism: 'Triết lý sinh sôi trong sử thi Đẻ Đất Đẻ Nước nghìn năm.',
    colorPalette: ['#ea580c', '#0f172a', '#ca8a04', '#0284c7']
  },
  {
    id: 'tho_cam_ede',
    name: 'Thổ Cẩm Sọc Kỷ Hà Ktêh Ê Đê',
    ethnicGroup: 'Ê Đê',
    technique: 'Dệt căng chân Indo-Malayan, sợi bông nhuộm vỏ cây',
    description: 'Dải hoa văn đỏ vàng viền ngang ngực áo chui đầu xẻ cổ thuyền thể hiện tính dũng mãnh của mẫu hệ.',
    symbolism: 'Ngọn lửa thiêng sưởi ấm ngôi nhà dài và tiếng cồng chiêng đại ngàn.',
    colorPalette: ['#0a0a0a', '#dc2626', '#eab308', '#fafaf9']
  },
  {
    id: 'ikat_khmer',
    name: 'Dệt Tơ Tằm Ikat Kim Tuyến Khmer',
    ethnicGroup: 'Khmer Nam Bộ',
    technique: 'Nhuộm buộc từng sợi Hol Chăm Pua trước khi dệt',
    description: 'Kỹ thuật nhuộm buộc tơ tằm cổ xưa phối sợi chỉ vàng tạo ánh sắc lộng lẫy như vương miện thần thoại.',
    symbolism: 'Ánh sáng trí tuệ giác ngộ của Phật giáo Nam tông và rồng rắn Naga.',
    colorPalette: ['#f59e0b', '#dc2626', '#059669', '#7c3aed']
  }
];

export interface WardrobePiece {
  id: string;
  name: string;
  category: 'headwear' | 'top' | 'bottom' | 'accessory';
  ethnicGroup: string;
  imageIcon: string;
  description: string;
}

export const WARDROBE_PIECES: WardrobePiece[] = [
  // Headwear
  {
    id: 'h_hmong_hat',
    name: 'Mũ Vành Bạc H\'Mông Hoa',
    category: 'headwear',
    ethnicGroup: 'H\'Mông',
    imageIcon: '👑',
    description: 'Mũ đính đồng xu bạc và tua rua đỏ leng keng'
  },
  {
    id: 'h_khan_pieu',
    name: 'Khăn Piêu Thêu Tay Dân Tộc Thái',
    category: 'headwear',
    ethnicGroup: 'Thái',
    imageIcon: '🧣',
    description: 'Khăn chàm thêu họa tiết cút piêu định tình'
  },
  {
    id: 'h_khan_dao_do',
    name: 'Khăn Trùm Đỏ Sa Pa Dao Đỏ',
    category: 'headwear',
    ethnicGroup: 'Dao Đỏ',
    imageIcon: '🧢',
    description: 'Khăn đỏ vuông vức như ngọn lửa sương mù'
  },
  {
    id: 'h_non_quai_thao',
    name: 'Nón Quai Thao Ba Tầm Kinh Bắc',
    category: 'headwear',
    ethnicGroup: 'Kinh (Bắc Bộ)',
    imageIcon: '👒',
    description: 'Nón phẳng tròn thắt dải tơ tua rua hội Lim'
  },
  {
    id: 'h_khan_vanh_day',
    name: 'Khăn Vành Dây Gấm Cung Đình Huế',
    category: 'headwear',
    ethnicGroup: 'Kinh (Huế)',
    imageIcon: '👑',
    description: 'Dải gấm hoàng gia quấn nhiều vòng uy nghiêm'
  },
  {
    id: 'h_khan_ran',
    name: 'Khăn Rằn Ca-rô Nam Bộ',
    category: 'headwear',
    ethnicGroup: 'Kinh (Nam Bộ)',
    imageIcon: '🧣',
    description: 'Khăn sọc đen trắng phóng khoáng đất phương Nam'
  },

  // Tops
  {
    id: 't_ao_com_thai',
    name: 'Áo Cóm Cúc Bướm Bạc Dân Tộc Thái',
    category: 'top',
    ethnicGroup: 'Thái',
    imageIcon: '👘',
    description: 'Áo lụa bó sát eo cài hàng cúc bướm âm dương'
  },
  {
    id: 't_ao_hmong_theu',
    name: 'Áo Cánh Xẻ Ngực Hoa Văn Lanh H\'Mông',
    category: 'top',
    ethnicGroup: 'H\'Mông',
    imageIcon: '🥋',
    description: 'Áo lanh thêu chữ thập nẹp viền chỉ màu'
  },
  {
    id: 't_ao_tu_than_yem',
    name: 'Áo Tứ Thân Bốn Vạt & Yếm Đào',
    category: 'top',
    ethnicGroup: 'Kinh (Bắc Bộ)',
    imageIcon: '👘',
    description: 'Áo the nâu buông tà kết hợp yếm thắm'
  },
  {
    id: 't_ao_nhat_binh',
    name: 'Áo Nhật Bình Cổ Chữ Nhật Ngũ Hành',
    category: 'top',
    ethnicGroup: 'Kinh (Huế)',
    imageIcon: '🥻',
    description: 'Áo cung đình thêu Phượng hoàng ngũ sắc'
  },
  {
    id: 't_ao_deh_ede',
    name: 'Áo Chui Đầu Thổ Cẩm Ktêh Ê Đê',
    category: 'top',
    ethnicGroup: 'Ê Đê',
    imageIcon: '👕',
    description: 'Áo đen dệt dải hoa văn đỏ vàng quyền uy'
  },
  {
    id: 't_ao_ba_ba',
    name: 'Áo Bà Ba Lụa Xẻ Tà Nam Bộ',
    category: 'top',
    ethnicGroup: 'Kinh (Nam Bộ)',
    imageIcon: '👚',
    description: 'Áo lụa mềm mại xẻ hông hai túi duyên dáng'
  },

  // Bottoms
  {
    id: 'b_vay_xoe_hmong',
    name: 'Váy Xòe Xếp Ly Dập Nếp Sáp Ong',
    category: 'bottom',
    ethnicGroup: 'H\'Mông',
    imageIcon: '👗',
    description: 'Váy tròn xòe hoa văn Batik bồng bềnh'
  },
  {
    id: 'b_vay_den_thai',
    name: 'Váy Đen Ống Tơ Tằm Dân Tộc Thái',
    category: 'bottom',
    ethnicGroup: 'Thái',
    imageIcon: '🥻',
    description: 'Váy đen dài thướt tha chấm gót giấu viền đỏ'
  },
  {
    id: 'b_vay_cap_muong',
    name: 'Váy Ống Đen Cạp Thêu Rồng Mường',
    category: 'bottom',
    ethnicGroup: 'Mường',
    imageIcon: '👗',
    description: 'Cạp dệt hoa văn rồng phượng tinh xảo'
  },
  {
    id: 'b_vay_achong_taoi',
    name: 'Váy A-chơng Đính Cườm Chì Tà Ôi',
    category: 'bottom',
    ethnicGroup: 'Tà Ôi',
    imageIcon: '🩳',
    description: 'Váy cườm chì 3D chắc chắn giữa Trường Sơn'
  },
  {
    id: 'b_vay_sampot_khmer',
    name: 'Váy Sămpót Dệt Kim Tuyến Khmer',
    category: 'bottom',
    ethnicGroup: 'Khmer',
    imageIcon: '🥻',
    description: 'Váy lụa vàng gấp nếp trước bụng quý phái'
  },
  {
    id: 'b_quan_lua_nam_bo',
    name: 'Quần Lụa Đen Ống Rộng Nam Bộ',
    category: 'bottom',
    ethnicGroup: 'Kinh (Nam Bộ)',
    imageIcon: '👖',
    description: 'Quần lụa đen mềm mát chèo xuồng miệt vườn'
  },

  // Accessories
  {
    id: 'a_kieng_bac_hmong',
    name: 'Bộ Kiềng Bạc Nhiều Tầng Tây Bắc',
    category: 'accessory',
    ethnicGroup: 'H\'Mông',
    imageIcon: '📿',
    description: 'Vòng bạc nguyên chất chạm hình mặt trời'
  },
  {
    id: 'a_xa_tich_bac',
    name: 'Dây Xà Tích Bạc Đính Quả Đào',
    category: 'accessory',
    ethnicGroup: 'Kinh / Thái',
    imageIcon: '🔗',
    description: 'Dây chuyền bạc đeo hông leng keng'
  },
  {
    id: 'a_vong_dong_ede',
    name: 'Bộ Vòng Đồng Kết Nối Thần Yang',
    category: 'accessory',
    ethnicGroup: 'Ê Đê',
    imageIcon: '🪙',
    description: 'Vòng đồng đúc đeo kín hai cổ tay'
  },
  {
    id: 'a_day_taleik_cham',
    name: 'Dây Vắt Chéo Taleik Kim Tuyến Chăm',
    category: 'accessory',
    ethnicGroup: 'Chăm',
    imageIcon: '🎗️',
    description: 'Dây dệt sợi vàng lấp lánh điệu múa Katê'
  }
];
