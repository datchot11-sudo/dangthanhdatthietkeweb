import React, { useState } from 'react';
import { Costume, CulturalRegionKey } from '../types/costume';
import { CULTURAL_REGIONS } from '../data/regionsData';
import {
  MapPin,
  Sparkles,
  Mountain,
  Heart,
  Scale,
  ArrowRight,
  Filter,
  CheckCircle2,
  Gem,
  Layers,
  Compass
} from 'lucide-react';

interface RegionCostumeExplorerProps {
  costumes: Costume[];
  selectedRegion: CulturalRegionKey;
  onSelectRegion: (region: CulturalRegionKey) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  comparedIds: string[];
  toggleCompare: (id: string) => void;
  onOpenCostume: (costume: Costume, initialTab?: string) => void;
}

export const RegionCostumeExplorer: React.FC<RegionCostumeExplorerProps> = ({
  costumes,
  selectedRegion,
  onSelectRegion,
  favorites,
  toggleFavorite,
  comparedIds,
  toggleCompare,
  onOpenCostume,
}) => {
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');

  // Find info of currently selected region
  const activeRegionInfo = CULTURAL_REGIONS.find((r) => r.id === selectedRegion);

  const regionLandscapes: Record<string, { img: string; landscapeName: string; description: string }> = {
    tay_bac: {
      img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
      landscapeName: 'Ruộng Bậc Thang Mù Cang Chải & Dãy Hoàng Liên Sơn',
      description: 'Nơi mây ngàn ôm ấp những bản làng của đồng bào H\'Mông, Thái, Dao, Lô Lô với váy hoa xòe và sắc chàm cổ thụ.',
    },
    dong_bac: {
      img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
      landscapeName: 'Thác Bản Giốc & Non Nước Cao Bằng',
      description: 'Miền sơn cước hữu tình, nơi vang vọng câu Then đàn Tính của người Tày và sắc áo chàm Nùng tinh khôi.',
    },
    dong_bang_bac_bo: {
      img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      landscapeName: 'Quần Thể Danh Thắng Tràng An & Hội Lim Xứ Kinh Bắc',
      description: 'Cái nôi văn minh lúa nước sông Hồng với tà áo Tứ Thân đằm thắm, nón quai thao và chiếc yếm đào duyên dáng.',
    },
    bac_trung_bo: {
      img: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80',
      landscapeName: 'Cố Đô Huế & Dãy Trường Sơn Hùng Vĩ',
      description: 'Sự giao thoa giữa mỹ thuật cung đình triều Nguyễn (Áo Nhật Bình) và nghệ thuật Dệt Dèng cườm chì Tà Ôi độc bản.',
    },
    nam_trung_bo: {
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      landscapeName: 'Tháp Chàm Po Klong Garai & Bờ Biển Nam Trung Bộ',
      description: 'Không gian văn hóa Chăm pa với dải thắt lưng kim tuyến, khăn Mat\'ra kiêu sa trong tiếng trống Paranưng lễ hội Katê.',
    },
    tay_nguyen: {
      img: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80',
      landscapeName: 'Đại Ngàn Tây Nguyên & Nhà Rông Kon Klor',
      description: 'Xứ sở sử thi Dam Sán, không gian văn hóa cồng chiêng và vũ điệu thổ cẩm đen - đỏ rực lửa mẫu hệ Ê Đê, Ba Na.',
    },
    nam_bo: {
      img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
      landscapeName: 'Sông Nước Cửu Long & Chùa Dơi Khmer Sóc Trăng',
      description: 'Vùng đất phương Nam phóng khoáng với chiếc Áo Bà Ba bình dị, Khăn Rằn thắm tình và điệu múa Rom-vong Khmer lộng lẫy.',
    },
  };

  const currentLandscape = selectedRegion !== 'all' ? regionLandscapes[selectedRegion] : null;

  // Filter costumes by region, occasion and gender
  const filteredCostumes = costumes.filter((c) => {
    if (selectedRegion !== 'all' && c.region !== selectedRegion) return false;
    if (selectedOccasion !== 'all' && !c.occasions.includes(selectedOccasion as any)) return false;
    if (selectedGender !== 'all') {
      if (selectedGender === 'nu' && c.gender !== 'nu') return false;
      if (selectedGender === 'ca_hai' && c.gender === 'nu') return false;
    }
    return true;
  });

  return (
    <section id="region_costume_explorer_section" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phân Vùng Địa Lý Văn Hóa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-cultural font-bold text-stone-900">
            Tìm Trang Phục Theo Từng Miền
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Chọn vùng đất để khám phá không gian địa lý, cảnh sắc cội nguồn và những kiệt tác y phục cổ truyền của các dân tộc anh em sinh sống tại đó.
          </p>
        </div>

        {/* Region Selector Cards Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
          {/* All button */}
          <button
            onClick={() => onSelectRegion('all')}
            className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
              selectedRegion === 'all'
                ? 'bg-emerald-800 text-white border-emerald-800 shadow-md ring-2 ring-emerald-400/30'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
            }`}
          >
            <span className="text-xs font-bold font-serif-cultural">Toàn Quốc</span>
            <span className="text-[10px] opacity-80">54 Dân Tộc</span>
          </button>

          {CULTURAL_REGIONS.map((reg) => {
            const isSelected = selectedRegion === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => onSelectRegion(reg.id)}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 relative overflow-hidden ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-md ring-2 ring-emerald-400/30'
                    : 'bg-white hover:bg-emerald-50/50 text-stone-700 border-stone-200 hover:border-emerald-300'
                }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reg.color}`} />
                <span className="text-xs font-bold font-serif-cultural line-clamp-1">{reg.name}</span>
                <span className={`text-[10px] ${isSelected ? 'text-emerald-200' : 'text-stone-500'}`}>
                  {reg.provincesCount} Tỉnh
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Region Spotlight Banner */}
        {activeRegionInfo && currentLandscape && (
          <div className="mb-8 rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-stone-900 text-white relative">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={currentLandscape.img}
                alt={currentLandscape.landscapeName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-stone-950">
                    Vùng Văn Hóa: {activeRegionInfo.name}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-800/80 text-emerald-200 border border-emerald-400/30">
                    {activeRegionInfo.provincesCount} Tỉnh Thành
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-cultural font-bold text-white mb-2">
                  {currentLandscape.landscapeName}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 max-w-3xl leading-relaxed">
                  {currentLandscape.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/20">
                  {activeRegionInfo.highlightFeatures.map((f, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-white/10 backdrop-blur-md text-[11px] text-emerald-200 font-medium"
                    >
                      ✦ {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Controls: Occasions & Gender */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-200 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-emerald-700" /> Dịp mặc:
            </span>
            {[
              { id: 'all', label: 'Tất Cả' },
              { id: 'le_hoi', label: 'Lễ Hội Truyền Thống' },
              { id: 'le_cuoi', label: 'Lễ Cưới' },
              { id: 'doi_thuong', label: 'Đời Thường' },
              { id: 'nghi_le_tam_linh', label: 'Nghi Lễ Tâm Linh' },
            ].map((occ) => (
              <button
                key={occ.id}
                onClick={() => setSelectedOccasion(occ.id)}
                className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                  selectedOccasion === occ.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-300'
                }`}
              >
                {occ.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Giới tính:</span>
            {[
              { id: 'all', label: 'Tất Cả' },
              { id: 'nu', label: 'Trang Phục Nữ' },
              { id: 'ca_hai', label: 'Nam & Nữ' },
            ].map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGender(g.id)}
                className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                  selectedGender === g.id
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-300'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Costumes Grid of the selected region */}
        {filteredCostumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCostumes.map((costume) => {
              const isFav = favorites.includes(costume.id);
              const isComp = comparedIds.includes(costume.id);

              return (
                <div
                  key={costume.id}
                  className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Card Image Cover */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                    <img
                      src={costume.coverImage}
                      alt={costume.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                    {/* Top Badges & Actions */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-stone-950 shadow-xs">
                        {costume.ethnicGroup}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCompare(costume.id);
                          }}
                          title={isComp ? 'Bỏ so sánh' : 'So sánh trang phục'}
                          className={`p-2 rounded-full backdrop-blur-md transition-all ${
                            isComp
                              ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                              : 'bg-stone-900/60 text-white hover:bg-stone-900/90'
                          }`}
                        >
                          <Scale className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(costume.id);
                          }}
                          title={isFav ? 'Bỏ yêu thích' : 'Lưu yêu thích'}
                          className={`p-2 rounded-full backdrop-blur-md transition-all ${
                            isFav
                              ? 'bg-rose-600 text-white ring-2 ring-rose-300'
                              : 'bg-stone-900/60 text-white hover:bg-stone-900/90'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-1 text-[11px] text-emerald-300 font-medium mb-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{costume.regionName}</span>
                        <span>•</span>
                        <span>{costume.provinces.slice(0, 2).join(', ')}</span>
                      </div>
                      <h4 className="font-serif-cultural font-bold text-lg text-white leading-tight">
                        {costume.name}
                      </h4>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                        {costume.summary}
                      </p>

                      {/* Color Palette Indicators */}
                      <div className="flex items-center gap-1.5 mb-4">
                        <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">Sắc màu:</span>
                        <div className="flex items-center gap-1">
                          {costume.mainColors.map((color, idx) => (
                            <span
                              key={idx}
                              title={`${color.name}: ${color.meaning}`}
                              className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs"
                              style={{ backgroundColor: color.hex }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200/60 mb-4">
                        <div>
                          <span className="font-semibold text-stone-900 block">Tầng lớp:</span>
                          <span className="text-stone-600">{costume.costumeLayers.length} bộ phận</span>
                        </div>
                        <div>
                          <span className="font-semibold text-stone-900 block">Phụ kiện:</span>
                          <span className="text-stone-600">{costume.accessories.length} món cổ truyền</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <button
                      onClick={() => onOpenCostume(costume, 'overview')}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Xem Chi Tiết & Huyền Tích</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-stone-50 rounded-3xl border border-stone-200 p-6">
            <Mountain className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h3 className="font-serif-cultural font-bold text-stone-800 text-base">Không tìm thấy trang phục phù hợp</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">Hãy thử chọn vùng khác hoặc bỏ bớt các tiêu chí lọc dịp mặc/giới tính.</p>
            <button
              onClick={() => {
                onSelectRegion('all');
                setSelectedOccasion('all');
                setSelectedGender('all');
              }}
              className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold"
            >
              Xem Toàn Bộ 54 Dân Tộc
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
