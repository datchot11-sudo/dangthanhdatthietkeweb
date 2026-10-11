export interface VietnamLandscape {
  id: string;
  name: string;
  location: string;
  regionName: string;
  url: string;
  thumbnail: string;
  description: string;
  culturalNote: string;
  associatedEthnics: string[];
}

export const VIETNAM_LANDSCAPES: VietnamLandscape[] = [
  {
    id: 'mu_cang_chai',
    name: 'Ruộng Bậc Thang Mù Cang Chải',
    location: 'Yên Bái • Tây Bắc',
    regionName: 'Tây Bắc Bộ',
    url: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2070&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=300&q=80',
    description: 'Tuyệt tác điêu khắc trên sườn núi di sản của người H’Mông, rực rỡ sắc vàng mùa lúa chín.',
    culturalNote: 'Không gian sống nuôi dưỡng kỹ thuật vẽ sáp ong Batik và tà váy thổ cẩm xòe hoa lộng lẫy.',
    associatedEthnics: ["H'Mông", 'Thái', 'Dao']
  },
  {
    id: 'trang_an_ninh_binh',
    name: 'Non Nước Tràng An & Tam Cốc',
    location: 'Ninh Bình • Đồng Bằng Bắc Bộ',
    regionName: 'Đồng Bằng Bắc Bộ',
    url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2070&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=300&q=80',
    description: 'Di sản Văn hóa và Thiên nhiên Thế giới với cảnh quan núi đá vôi karst sừng sững bên dòng sông xanh ngắt.',
    culturalNote: 'Cội nguồn của nón quai thao, tà áo Tứ Thân thắt bao xanh và làn điệu chèo quan họ.',
    associatedEthnics: ['Kinh', 'Mường']
  },
  {
    id: 'fansipan_sapa',
    name: 'Mây Phủ Fansipan & Thung Lũng Mường Hoa',
    location: 'Lào Cai • Hoàng Liên Sơn',
    regionName: 'Tây Bắc Bộ',
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=2070&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80',
    description: 'Nóc nhà Đông Dương quanh năm sương mây bao phủ, ôm trọn những bản làng bình yên.',
    culturalNote: 'Nơi phụ nữ Dao Đỏ gùi chàm nhuộm vải và người Giáy thêu tà áo viền màu bên bếp lửa.',
    associatedEthnics: ['Dao Đỏ', "H'Mông", 'Giáy', 'Tày']
  },
  {
    id: 'thac_ban_gioc',
    name: 'Thác Bản Giốc & Non Nước Cao Bằng',
    location: 'Trùng Khánh • Cao Bằng',
    regionName: 'Đông Bắc Bộ',
    url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=2070&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=300&q=80',
    description: 'Thác nước tự nhiên hùng vĩ bậc nhất Đông Nam Á, bọt tung trắng xóa giữa thung lũng đá vôi.',
    culturalNote: 'Gắn liền với điệu hát Then, cây đàn Tính và tà áo chàm cổ truyền duyên dáng của người Tày, Nùng.',
    associatedEthnics: ['Tày', 'Nùng', 'Sán Chay']
  },
  {
    id: 'vinh_ha_long',
    name: 'Kỳ Quan Thiên Nhiên Vịnh Hạ Long',
    location: 'Quảng Ninh • Đông Bắc',
    regionName: 'Đông Bắc Bộ',
    url: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=2070&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=300&q=80',
    description: 'Hàng nghìn đảo đá vôi kỳ vĩ nhô lên giữa mặt biển ngọc bích ngút ngàn của vịnh Bắc Bộ.',
    culturalNote: 'Không gian văn hóa làng chài cổ xưa và trang phục người Dao Thanh Phán, Sán Dìu miền duyên hải.',
    associatedEthnics: ['Kinh', 'Dao Thanh Phán', 'Sán Dìu']
  },
  {
    id: 'co_do_hue',
    name: 'Cố Đô Huế & Dòng Sông Hương',
    location: 'Thừa Thiên Huế • Bắc Trung Bộ',
    regionName: 'Bắc Trung Bộ',
    url: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=2070&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=300&q=80',
    description: 'Kinh đô hoàng triều Nguyễn cổ kính, soi bóng dòng Hương giang êm đềm và thành quách rêu phong.',
    culturalNote: 'Cái nôi của Áo Nhật Bình cung đình, Mãng bào hoàng tộc và tà Áo Dài tím xứ Huế.',
    associatedEthnics: ['Kinh', 'Tà Ôi', 'Cơ Tu']
  },
  {
    id: 'dong_van_ha_giang',
    name: 'Công Viên Địa Chất Cao Nguyên Đá Đồng Văn',
    location: 'Hà Giang • Cực Bắc',
    regionName: 'Đông Bắc Bộ',
    url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=2070&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=300&q=80',
    description: 'Vùng cao nguyên đá xám kỳ vĩ với đèo Mã Pí Lèng hiểm trở và dòng sông Nho Quế màu xanh lục bảo.',
    culturalNote: 'Địa bàn ngàn đời gìn giữ nghề dệt lanh Lùng Tám và trang phục Lô Lô Hoa rực rỡ.',
    associatedEthnics: ['Lô Lô', "H'Mông", 'Pà Thẻn', 'Cờ Lao']
  }
];
