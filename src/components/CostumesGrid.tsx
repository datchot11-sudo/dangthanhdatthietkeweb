import React from 'react';
import { Costume, CulturalRegionKey } from '../types/costume';
import { CULTURAL_REGIONS } from '../data/regionsData';
import { FALLBACK_HERITAGE_IMAGE, handleImageFallback } from '../utils/imageUtils';
import {
  Sparkles,
  MapPin,
  Heart,
  Scale,
  BookOpen,
  ArrowUpRight,
  Filter,
  Gem,
} from 'lucide-react';

interface CostumesGridProps {
  costumes: Costume[];
  selectedRegion: CulturalRegionKey;
  setSelectedRegion: (region: CulturalRegionKey) => void;
  selectedOccasion: string;
  setSelectedOccasion: (occ: string) => void;
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  comparedIds: string[];
  toggleCompare: (id: string) => void;
  onOpenCostume: (costume: Costume, initialTab?: string) => void;
}

export const CostumesGrid: React.FC<CostumesGridProps> = ({
  costumes,
  selectedRegion,
  setSelectedRegion,
  selectedOccasion,
  setSelectedOccasion,
  selectedGender,
  setSelectedGender,
  favorites,
  toggleFavorite,
  comparedIds,
  toggleCompare,
  onOpenCostume,
}) => {
  const occasionsList = [
    { id: 'all', label: 'Tất Cả Dịp' },
    { id: 'le_hoi', label: 'Lễ Hội Truyền Thống' },
    { id: 'le_cuoi', label: 'Lễ Cưới & Vu Quy' },
    { id: 'doi_thuong', label: 'Sinh Hoạt Đời Thường' },
    { id: 'nghi_le_tam_linh', label: 'Nghi Lễ Tâm Linh' }
  ];

  const genderList = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'nu', label: 'Trang Phục Nữ' },
    { id: 'ca_hai', label: 'Nam & Nữ / Toàn Bộ' }
  ];

  return (
    <section id="costumes_explorer_section" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title & Filter Controls with clean white card */}
      <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-rose-700" />
              <span>Kho Tàng Y Phục Cổ Truyền</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-cultural font-bold text-stone-900">
              Danh Mục Trang Phục Các Dân Tộc
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Hiển thị <span className="font-bold text-emerald-800">{costumes.length}</span> bộ trang phục truyền thống tiêu biểu trên nền cảnh sắc quê hương
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Occasion Filter */}
            <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
              {occasionsList.map((occ) => (
                <button
                  key={occ.id}
                  onClick={() => setSelectedOccasion(occ.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    selectedOccasion === occ.id
                      ? 'bg-emerald-800 text-white shadow-xs font-bold'
                      : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  {occ.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Region & Gender Pills Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-200">
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-emerald-700" /> Vùng:
            </span>
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-1 text-xs rounded-full font-semibold whitespace-nowrap transition-all border ${
                selectedRegion === 'all'
                  ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              Tất Cả
            </button>
            {CULTURAL_REGIONS.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-3 py-1 text-xs rounded-full font-semibold whitespace-nowrap transition-all border ${
                  selectedRegion === reg.id
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {reg.name}
              </button>
            ))}
          </div>

          {/* Gender Filter */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200">
            {genderList.map((gen) => (
              <button
                key={gen.id}
                onClick={() => setSelectedGender(gen.id)}
                className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
                  selectedGender === gen.id
                    ? 'bg-emerald-800 text-white font-bold'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                }`}
              >
                {gen.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Costumes */}
      {costumes.length === 0 ? (
        <div className="text-center py-16 bg-white/95 backdrop-blur-md rounded-3xl border border-stone-200 p-8 shadow-sm">
          <Sparkles className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
          <h3 className="font-serif-cultural font-bold text-lg text-stone-900">Không tìm thấy trang phục phù hợp</h3>
          <p className="text-sm text-stone-600 mt-1 max-w-md mx-auto">
            Vui lòng thử tìm kiếm với từ khóa khác hoặc điều chỉnh lại bộ lọc vùng miền và dịp lễ hội.
          </p>
          <button
            onClick={() => {
              setSelectedRegion('all');
              setSelectedOccasion('all');
              setSelectedGender('all');
            }}
            className="mt-4 px-5 py-2.5 bg-emerald-800 text-white rounded-xl text-xs font-semibold hover:bg-emerald-900 transition-colors shadow-sm"
          >
            Đặt lại tất cả bộ lọc
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {costumes.map((costume) => {
            const isFav = favorites.includes(costume.id);
            const isComp = comparedIds.includes(costume.id);

            return (
              <div
                key={costume.id}
                id={`costume_card_${costume.id}`}
                className="group bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <img
                      src={costume.coverImage}
                      alt={costume.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/20 to-transparent" />

                    {/* Top Craft Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-stone-900/80 backdrop-blur-md text-emerald-200 border border-emerald-300/30">
                        {costume.badge}
                      </span>

                      {/* Action buttons (Fav & Compare) */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCompare(costume.id);
                          }}
                          title={isComp ? 'Đã thêm vào so sánh' : 'So sánh với trang phục khác'}
                          className={`p-2 rounded-full backdrop-blur-md transition-all ${
                            isComp
                              ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                              : 'bg-stone-900/60 text-white hover:bg-stone-900'
                          }`}
                        >
                          <Scale className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(costume.id);
                          }}
                          title={isFav ? 'Bỏ yêu thích' : 'Lưu vào yêu thích'}
                          className={`p-2 rounded-full backdrop-blur-md transition-all ${
                            isFav
                              ? 'bg-rose-600 text-white ring-2 ring-rose-300'
                              : 'bg-stone-900/60 text-white hover:bg-stone-900'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom overlay info on image */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-2 text-xs text-emerald-200 font-medium mb-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                        <span>{costume.regionName}</span>
                        <span>•</span>
                        <span>{costume.languageFamily}</span>
                      </div>
                      <h3 className="font-serif-cultural font-bold text-lg leading-snug text-white group-hover:text-emerald-200 transition-colors">
                        {costume.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-2">
                      {costume.summary}
                    </p>

                    {/* Key Attributes */}
                    <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
                      {/* Dominant Colors preview */}
                      <div className="flex items-center justify-between">
                        <span className="text-stone-500">Sắc màu chủ đạo:</span>
                        <div className="flex items-center gap-1.5">
                          {costume.mainColors.map((c, i) => (
                            <span
                              key={i}
                              title={`${c.name} (${c.meaning})`}
                              className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs"
                              style={{ backgroundColor: c.hex }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Associated Accessories count */}
                      <div className="flex items-center justify-between">
                        <span className="text-stone-500 flex items-center gap-1">
                          <Gem className="w-3.5 h-3.5 text-emerald-700" /> Phụ kiện đi kèm:
                        </span>
                        <span className="font-semibold text-stone-800">
                          {costume.accessories?.length || 0} món trang sức
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenCostume(costume, 'overview')}
                      className="py-2.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-2xs"
                    >
                      <span>Xem Chi Tiết</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenCostume(costume, 'accessories')}
                      className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300/80 text-xs font-bold transition-all flex items-center justify-center gap-1"
                    >
                      <Gem className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Xem Phụ Kiện</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
