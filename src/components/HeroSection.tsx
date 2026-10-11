import React from 'react';
import { Search, Compass, ShieldCheck, HeartHandshake, Mountain, Gem } from 'lucide-react';
import { CulturalRegionKey } from '../types/costume';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onExploreClick: () => void;
  onSelectRegion?: (region: CulturalRegionKey) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onExploreClick,
  onSelectRegion,
}) => {
  const quickSearchTags = [
    "H'Mông Hoa",
    "Áo Cóm Thái",
    "Khăn Piêu",
    "Dao Đỏ",
    "Áo Tứ Thân",
    "Áo Nhật Bình",
    "Thổ Cẩm Ê Đê",
    "Áo Dài Chăm",
    "Sămpót Khmer",
    "Cạp Váy Mường",
    "Dệt Dèng Tà Ôi",
    "Áo Bà Ba"
  ];

  const featuredLandscapes = [
    {
      name: 'Tây Bắc - Mù Cang Chải',
      desc: 'Ruộng bậc thang & Váy H’Mông rực rỡ',
      img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80',
      region: 'tay_bac' as CulturalRegionKey,
    },
    {
      name: 'Đông Bắc - Thác Bản Giốc',
      desc: 'Hát Then đàn Tính & Sắc chàm áo Tày',
      img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
      region: 'dong_bac' as CulturalRegionKey,
    },
    {
      name: 'Bắc Bộ - Tràng An Non Nước',
      desc: 'Nón quai thao & Tà áo Tứ Thân mộc mạc',
      img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
      region: 'dong_bang_bac_bo' as CulturalRegionKey,
    },
    {
      name: 'Bắc Trung Bộ - Cố Đô Huế',
      desc: 'Áo Nhật Bình cung đình & Tà áo dài tím',
      img: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=600&q=80',
      region: 'bac_trung_bo' as CulturalRegionKey,
    },
  ];

  return (
    <section id="hero_heritage_section" className="relative overflow-hidden pt-6 pb-10 sm:pt-8 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span>Trang Phục Việt • 54 Dân Tộc & Cảnh Sắc Non Nước Việt Nam</span>
          </div>

          {/* Master Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-cultural font-bold text-stone-950 leading-tight tracking-tight mb-3 drop-shadow-sm">
            Dấu Ấn Sắc Tộc Trên{' '}
            <span className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 bg-clip-text text-transparent font-black">
              Tà Y Phục Di Sản
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base md:text-lg text-stone-800 font-medium leading-relaxed mb-6 max-w-2xl mx-auto">
            Khám phá chiều sâu mỹ thuật, bộ sưu tập phụ kiện cổ truyền, ý nghĩa triết lý hoa văn sáp ong - nhuộm chàm và cảnh sắc quê hương nơi nuôi dưỡng hồn thiêng dân tộc.
          </p>

          {/* Integrated Search Input */}
          <div className="relative max-w-xl mx-auto mb-5">
            <div className="relative flex items-center shadow-lg rounded-2xl bg-white border border-stone-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all p-1.5">
              <Search className="w-5 h-5 text-emerald-800 ml-3.5 shrink-0" />
              <input
                id="hero_search_input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm dân tộc (H'Mông, Thái, Dao, Kinh, Chăm, Ê Đê...), phụ kiện, vùng miền..."
                className="w-full bg-transparent border-0 px-3 py-2.5 text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-2.5 py-1 text-xs text-stone-400 hover:text-stone-700 font-medium"
                >
                  Xóa
                </button>
              )}
              <button
                id="hero_search_submit_btn"
                onClick={onExploreClick}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-700 hover:to-emerald-900 text-emerald-100 font-semibold text-xs sm:text-sm shrink-0 transition-all shadow-sm"
              >
                Khám Phá
              </button>
            </div>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-2xl mx-auto mb-8">
            <span className="text-xs text-stone-800 font-bold mr-1 flex items-center gap-1">
              <Compass className="w-3 h-3 text-emerald-700" /> Gợi ý:
            </span>
            {quickSearchTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                  searchQuery === tag
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm font-semibold'
                    : 'bg-white/90 text-stone-800 border-stone-200 hover:border-emerald-600 hover:text-emerald-900 hover:bg-white shadow-2xs'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Landscapes Banner Strip */}
        <div className="mb-8 p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <Mountain className="w-4 h-4 text-emerald-700" /> Không Gian Danh Thắng & Cội Nguồn Y Phục
            </span>
            <span className="text-xs text-stone-500 font-medium">Chạm để lọc theo vùng văn hóa</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {featuredLandscapes.map((land, idx) => (
              <div
                key={idx}
                onClick={() => onSelectRegion && onSelectRegion(land.region)}
                className="group relative rounded-2xl overflow-hidden h-36 border border-stone-200 shadow-xs hover:border-emerald-600 hover:shadow-md cursor-pointer transition-all"
              >
                <img
                  src={land.img}
                  alt={land.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif-cultural font-bold text-sm text-emerald-200 leading-tight">
                    {land.name}
                  </h3>
                  <p className="text-[11px] text-stone-200 mt-0.5 line-clamp-1">
                    {land.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar with clean white cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2 border border-emerald-200">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-serif-cultural text-stone-900">54</span>
            <span className="text-xs text-stone-600 font-medium">Dân Tộc Việt Nam</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center mb-2 border border-rose-200">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-serif-cultural text-stone-900">8</span>
            <span className="text-xs text-stone-600 font-medium">Vùng Văn Hóa Địa Lý</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2 border border-emerald-200">
              <Gem className="w-4 h-4" />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-serif-cultural text-stone-900">100+</span>
            <span className="text-xs text-stone-600 font-medium">Phụ Kiện & Trang Sức Bạc</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center mb-2 border border-indigo-200">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-serif-cultural text-stone-900">UNESCO</span>
            <span className="text-xs text-stone-600 font-medium">Di Sản Dệt & Không Gian Sống</span>
          </div>
        </div>
      </div>
    </section>
  );
};
