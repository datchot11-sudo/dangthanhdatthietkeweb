import React, { useState, useMemo } from 'react';
import { Costume } from '../types/costume';
import {
  Sparkles,
  Search,
  MapPin,
  Heart,
  Scale,
  ArrowRight,
  Filter,
  CheckCircle2,
  Gem,
  Layers,
  BookOpen,
  Palette
} from 'lucide-react';

interface EthnicCostumesCatalogProps {
  costumes: Costume[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
  comparedIds: string[];
  toggleCompare: (id: string) => void;
  onOpenCostume: (costume: Costume, initialTab?: string) => void;
}

export const EthnicCostumesCatalog: React.FC<EthnicCostumesCatalogProps> = ({
  costumes,
  favorites,
  toggleFavorite,
  comparedIds,
  toggleCompare,
  onOpenCostume,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLanguageFamily, setSelectedLanguageFamily] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');

  const languageFamilies = [
    { id: 'all', label: 'Tất Cả Ngữ Hệ (54 Dân Tộc)' },
    { id: 'H\'Mông - Dao', label: 'Ngữ Hệ H\'Mông - Dao' },
    { id: 'Thái - Kadai', label: 'Ngữ Hệ Thái - Kadai' },
    { id: 'Nam Á', label: 'Ngữ Hệ Nam Á (Việt - Mường - Khmer)' },
    { id: 'Nam Đảo', label: 'Ngữ Hệ Nam Đảo (Chăm, Ê Đê, Gia Rai)' },
    { id: 'Hán - Tạng', label: 'Ngữ Hệ Hán - Tạng' },
  ];

  const occasionsList = [
    { id: 'all', label: 'Mọi Dịp' },
    { id: 'le_hoi', label: 'Lễ Hội Mùa Xuân' },
    { id: 'le_cuoi', label: 'Lễ Cưới & Vu Quy' },
    { id: 'doi_thuong', label: 'Sinh Hoạt Hàng Ngày' },
    { id: 'nghi_le_tam_linh', label: 'Nghi Lễ Tâm Linh' },
  ];

  // Filter costumes based on search query, language family, occasion, and gender
  const filteredList = useMemo(() => {
    return costumes.filter((costume) => {
      // Language family filter
      if (selectedLanguageFamily !== 'all') {
        if (selectedLanguageFamily === 'Nam Á') {
          if (!costume.languageFamily.includes('Nam Á') && !costume.languageFamily.includes('Việt - Mường') && !costume.languageFamily.includes('Môn - Khmer')) {
            return false;
          }
        } else if (!costume.languageFamily.includes(selectedLanguageFamily)) {
          return false;
        }
      }

      // Occasion filter
      if (selectedOccasion !== 'all' && !costume.occasions.includes(selectedOccasion as any)) {
        return false;
      }

      // Gender filter
      if (selectedGender !== 'all') {
        if (selectedGender === 'nu' && costume.gender !== 'nu') return false;
        if (selectedGender === 'ca_hai' && costume.gender === 'nu') return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = costume.name.toLowerCase().includes(q);
        const matchesEthnic = costume.ethnicGroup.toLowerCase().includes(q);
        const matchesRegion = costume.regionName.toLowerCase().includes(q);
        const matchesLanguage = costume.languageFamily.toLowerCase().includes(q);
        const matchesProvinces = costume.provinces.some((p) => p.toLowerCase().includes(q));
        const matchesSummary = costume.summary.toLowerCase().includes(q);
        const matchesAccessories = costume.accessories.some(
          (a) => a.name.toLowerCase().includes(q) || (a.localName && a.localName.toLowerCase().includes(q))
        );

        if (
          !matchesName &&
          !matchesEthnic &&
          !matchesRegion &&
          !matchesLanguage &&
          !matchesProvinces &&
          !matchesSummary &&
          !matchesAccessories
        ) {
          return false;
        }
      }

      return true;
    });
  }, [costumes, selectedLanguageFamily, selectedOccasion, selectedGender, searchQuery]);

  return (
    <section id="ethnic_costumes_catalog_section" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-700" />
              <span>Kho Tàng Di Sản Y Phục</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-cultural font-bold text-stone-900">
              Danh Mục Trang Phục Các Dân Tộc
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Tra cứu toàn diện các bộ trang phục truyền thống của 54 dân tộc Việt Nam với đầy đủ cấu trúc tầng lớp, họa tiết sáp ong, trang sức bạc và truyện kể huyền tích dân gian.
            </p>
          </div>

          <div className="text-xs font-medium text-stone-500 bg-stone-50 px-4 py-2 rounded-xl border border-stone-200 shrink-0">
            Hiển thị: <strong className="text-emerald-900 font-bold text-sm">{filteredList.length}</strong> bộ y phục
          </div>
        </div>

        {/* Search & Filters Bar */}
        <div className="bg-stone-50 p-4 rounded-3xl border border-stone-200 space-y-3.5 mb-8 shadow-2xs">
          {/* Search Input Bar */}
          <div className="relative">
            <div className="relative flex items-center shadow-xs rounded-2xl bg-white border border-stone-200 focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all p-1">
              <Search className="w-4 h-4 text-stone-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm nhanh theo tên dân tộc, y phục, tỉnh thành hoặc phụ kiện (H'Mông, Thái, Dao Đỏ, Khăn Piêu, Áo Cóm, Áo Nhật Bình...)"
                className="w-full bg-transparent border-0 px-3 py-2 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-2 py-1 text-xs text-stone-400 hover:text-stone-600 font-medium"
                >
                  Xóa
                </button>
              )}
            </div>
          </div>

          {/* Language Family Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-1 shrink-0">
              Ngữ Hệ:
            </span>
            {languageFamilies.map((fam) => (
              <button
                key={fam.id}
                onClick={() => setSelectedLanguageFamily(fam.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedLanguageFamily === fam.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-300 hover:bg-stone-100'
                }`}
              >
                {fam.label}
              </button>
            ))}
          </div>

          {/* Secondary Filters: Occasion & Gender */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-200/80">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-1">
                Dịp Mặc:
              </span>
              {occasionsList.map((occ) => (
                <button
                  key={occ.id}
                  onClick={() => setSelectedOccasion(occ.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedOccasion === occ.id
                      ? 'bg-stone-900 text-white'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {occ.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-1">
                Giới Tính:
              </span>
              {[
                { id: 'all', label: 'Tất Cả' },
                { id: 'nu', label: 'Trang Phục Nữ' },
                { id: 'ca_hai', label: 'Nam & Nữ' },
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGender(g.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedGender === g.id
                      ? 'bg-stone-900 text-white'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Costumes Grid */}
        {filteredList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredList.map((costume) => {
              const isFav = favorites.includes(costume.id);
              const isComp = comparedIds.includes(costume.id);

              return (
                <div
                  key={costume.id}
                  className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Card Cover Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                    <img
                      src={costume.coverImage}
                      alt={costume.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500 text-stone-950 shadow-xs">
                        {costume.ethnicGroup}
                      </span>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCompare(costume.id);
                          }}
                          title={isComp ? 'Bỏ so sánh' : 'So sánh'}
                          className={`p-1.5 rounded-full backdrop-blur-md transition-all ${
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
                          title={isFav ? 'Bỏ yêu thích' : 'Lưu yêu thích'}
                          className={`p-1.5 rounded-full backdrop-blur-md transition-all ${
                            isFav
                              ? 'bg-rose-600 text-white ring-2 ring-rose-300'
                              : 'bg-stone-900/60 text-white hover:bg-stone-900'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <span className="text-[10px] font-medium text-emerald-300 block">
                        {costume.regionName} • Ngữ hệ: {costume.languageFamily}
                      </span>
                      <h4 className="font-serif-cultural font-bold text-base text-white line-clamp-1">
                        {costume.name}
                      </h4>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 mb-3">
                        {costume.summary}
                      </p>

                      {/* Quick Details Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        <span className="px-2 py-0.5 rounded-md bg-stone-100 text-[10px] text-stone-700 font-medium">
                          {costume.costumeLayers.length} Tầng lớp y phục
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-[10px] text-emerald-900 font-medium border border-emerald-200/50">
                          {costume.accessories.length} Phụ kiện cổ truyền
                        </span>
                      </div>

                      {/* Color Palette preview */}
                      <div className="flex items-center gap-1 mb-4">
                        <span className="text-[10px] text-stone-400 font-medium mr-1">Sắc:</span>
                        {costume.mainColors.map((col, idx) => (
                          <span
                            key={idx}
                            title={col.name}
                            className="w-3 h-3 rounded-full border border-stone-300"
                            style={{ backgroundColor: col.hex }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="space-y-1.5">
                      <button
                        onClick={() => onOpenCostume(costume, 'overview')}
                        className="w-full py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Xem Chi Tiết Y Phục</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                        <button
                          onClick={() => onOpenCostume(costume, 'layers')}
                          className="py-1 px-2 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-700 font-medium flex items-center justify-center gap-1 border border-stone-200/80"
                        >
                          <Layers className="w-3 h-3 text-stone-500" />
                          <span>Tầng Lớp</span>
                        </button>
                        <button
                          onClick={() => onOpenCostume(costume, 'accessories')}
                          className="py-1 px-2 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-700 font-medium flex items-center justify-center gap-1 border border-stone-200/80"
                        >
                          <Gem className="w-3 h-3 text-emerald-700" />
                          <span>Phụ Kiện</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-stone-50 rounded-3xl border border-stone-200 p-8">
            <Search className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="font-serif-cultural font-bold text-stone-800 text-lg mb-1">
              Không tìm thấy trang phục dân tộc phù hợp
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Không có kết quả nào khớp với từ khóa "{searchQuery}". Hãy thử tìm kiếm dân tộc khác.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLanguageFamily('all');
                setSelectedOccasion('all');
                setSelectedGender('all');
              }}
              className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold shadow-xs"
            >
              Xem Tất Cả 54 Dân Tộc
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
