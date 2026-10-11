import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Compass, Gem, BookOpen, ShieldCheck, Layers, Play, Pause } from 'lucide-react';
import { CulturalRegionKey, Costume } from '../types/costume';

interface HomeHeroBannerProps {
  onExploreCatalog: () => void;
  onExploreAccessories: () => void;
  onExploreMap: () => void;
  onSelectRegion?: (region: CulturalRegionKey) => void;
  onOpenCostumeDetail?: (costumeId: string) => void;
}

interface BannerSlide {
  id: string;
  tag: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  ethnicGroup: string;
  region: CulturalRegionKey;
  regionLabel: string;
  image: string;
  highlights: string[];
  ctaLabel: string;
  costumeId?: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'slide_hmong',
    tag: 'Di Sản Vùng Núi Cao Phía Bắc',
    badgeColor: 'bg-rose-600 text-white',
    title: 'Hồn Thiêng Thổ Cẩm & Sáp Ong H’Mông',
    subtitle: 'Váy Xòe Xếp Nếp Ngũ Sắc & Trang Sức Bạc Sa Pa',
    description: 'Nghệ thuật vẽ hoa văn sáp ong Batik cổ truyền kết hợp kỹ thuật thêu luồn sợi lanh và bộ kiềng bạc chạm khắc tinh vi của phụ nữ H’Mông Hoa trên các nương mây Mù Cang Chải.',
    ethnicGroup: 'Dân tộc H’Mông',
    region: 'tay_bac',
    regionLabel: 'Tây Bắc - Lào Cai, Yên Bái',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Vẽ sáp ong Batik', 'Kiềng bạc 5 tầng', 'Vải lanh dệt tay'],
    ctaLabel: 'Khám Phá Y Phục H’Mông',
    costumeId: 'hmong_hoa',
  },
  {
    id: 'slide_nhatbinh',
    tag: 'Kiệt Tác Cổ Phục Cung Đình',
    badgeColor: 'bg-emerald-600 text-white',
    title: 'Áo Nhật Bình & Tinh Hoa Quý Tộc Huế',
    subtitle: 'Y Phục Hoàng Tộc Triều Nguyễn Triều Đại Cố Đô',
    description: 'Dải cổ áo chữ nhật viền chỉ kim tuyến thêu Loan Phượng, kết hợp kỹ thuật dệt lụa gấm Bát Bảo cùng khăn vành dây vàng son lộng lẫy bên dòng sông Hương thơ mộng.',
    ethnicGroup: 'Dân tộc Kinh (Cung Đình Huế)',
    region: 'bac_trung_bo',
    regionLabel: 'Bắc Trung Bộ - Cố Đô Huế',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Thêu tay kim tuyến', 'Lụa gấm Bát Bảo', 'Khăn Vành Dây Hoàng Tộc'],
    ctaLabel: 'Chiêm Ngưỡng Nhật Bình',
    costumeId: 'nhat_binh_hue',
  },
  {
    id: 'slide_thai',
    tag: 'Duyên Dáng Điệu Xòe Miền Sơn Cước',
    badgeColor: 'bg-emerald-600 text-white',
    title: 'Áo Cóm Tôn Dáng & Khăn Piêu Đầy Nắng',
    subtitle: 'Nét Thanh Lịch Của Thiếu Nữ Thái Tây Bắc',
    description: 'Hàng cúc bướm bạc Mák Pém đính dọc ngực áo tượng trưng cho sự gắn kết âm dương, phối cùng thắt lưng lụa xanh ngọc và khăn Piêu thêu hoa văn chỉ ngũ sắc huyền bí.',
    ethnicGroup: 'Dân tộc Thái',
    region: 'tay_bac',
    regionLabel: 'Tây Bắc - Sơn La, Điện Biên',
    image: 'https://images.unsplash.com/photo-1509803874385-db7c23652552?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Hàng cúc bạc Mák Pém', 'Khăn Piêu thêu ngũ sắc', 'Thắt lưng lụa xanh'],
    ctaLabel: 'Tìm Hiểu Áo Cóm Thái',
    costumeId: 'thai_ao_com_khan_pieu',
  },
  {
    id: 'slide_ede',
    tag: 'Đại Ngàn Hùng Vĩ & Lễ Hội Cồng Chiêng',
    badgeColor: 'bg-indigo-600 text-white',
    title: 'Thổ Cẩm Dệt Dèng & Bản Sắc Tây Nguyên',
    subtitle: 'Họa Tiết Mặt Trời & Chim Chư Rao Trên Nền Chàm Đỏ',
    description: 'Sự kết hợp giữa gam màu đỏ lửa và đen tuyền huyền bí của núi rừng, dệt thủ công hạt cườm chì và hoa văn biểu tượng rùa thần, chim muông bảo hộ buôn làng.',
    ethnicGroup: 'Dân tộc Ê Đê & Ba Na',
    region: 'tay_nguyen',
    regionLabel: 'Tây Nguyên - Đắk Lắk, Gia Lai',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Dệt cườm thủ công', 'Hoa văn thần thoại', 'Vòng đồng hộ mệnh'],
    ctaLabel: 'Khám Phá Y Phục Tây Nguyên',
    costumeId: 'ede_nu_ao_chui',
  },
  {
    id: 'slide_cham',
    tag: 'Văn Khố Ngàn Năm & Tháp Cổ Champa',
    badgeColor: 'bg-teal-600 text-white',
    title: 'Áo Dài Chăm & Kỹ Thuật Dệt Mỹ Nghiệp',
    subtitle: 'Vương Miện Pkham & Khăn Vàng Lấp Lánh Trong Lễ Katê',
    description: 'Tà áo dài kín đáo quý phái màu trắng ngà hoặc xanh ngọc, kết hợp dây thắt lưng Talei Ka-in dệt hoa văn mắt rồng tinh xảo trong tiếng trống Paranưng rộn rã.',
    ethnicGroup: 'Dân tộc Chăm',
    region: 'nam_trung_bo',
    regionLabel: 'Nam Trung Bộ - Ninh Thuận, Bình Thuận',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Dệt gấm Mỹ Nghiệp', 'Thắt lưng Talei Ka-in', 'Lễ hội Katê'],
    ctaLabel: 'Khám Phá Y Phục Chăm',
    costumeId: 'cham_ao_dai_khan_champa',
  }
];

export const HomeHeroBanner: React.FC<HomeHeroBannerProps> = ({
  onExploreCatalog,
  onExploreAccessories,
  onExploreMap,
  onSelectRegion,
  onOpenCostumeDetail,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentSlide = BANNER_SLIDES[currentSlideIndex];

  // Auto slide rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? BANNER_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  return (
    <section id="home_heritage_showcase_banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Banner Container with refined crisp white elevation */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-950 text-white min-h-[420px] sm:min-h-[460px] md:min-h-[500px] flex flex-col justify-between">
        {/* Background Image Layer with smooth fade & zoom effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            key={currentSlide.id}
            className="w-full h-full object-cover object-center animate-fade-in transition-all duration-1000 scale-105"
          />
          {/* Multi-layered cultural atmospheric overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/40 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-stone-950/30" />
          <div className="absolute inset-0 bg-radial-at-top from-emerald-500/10 via-transparent to-stone-950/60" />
        </div>

        {/* Top Header of Banner: Live Category Badges & Autoplay Toggle */}
        <div className="relative z-10 p-5 sm:p-7 flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 ${currentSlide.badgeColor}`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentSlide.tag}</span>
            </span>

            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold">
              {currentSlide.regionLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Play/Pause Autoplay Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white/80 hover:text-white transition-all text-xs flex items-center gap-1"
              title={isAutoPlaying ? 'Tạm dừng tự động chạy' : 'Tiếp tục tự động chạy'}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span className="text-[10px] hidden sm:inline">{isAutoPlaying ? 'Tự Động' : 'Tạm Dừng'}</span>
            </button>

            {/* Slide Index Pill */}
            <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-stone-300 text-xs font-mono">
              <span className="text-emerald-400 font-bold">{currentSlideIndex + 1}</span>
              <span> / {BANNER_SLIDES.length}</span>
            </div>
          </div>
        </div>

        {/* Middle Body: Rich Typography & Heritage Summary */}
        <div className="relative z-10 px-5 sm:px-8 md:px-10 py-4 max-w-3xl">
          <p className="text-emerald-400 text-sm sm:text-base font-semibold tracking-wide mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            {currentSlide.subtitle}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-3 drop-shadow-md">
            {currentSlide.title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-stone-200 leading-relaxed font-normal mb-5 max-w-2xl line-clamp-3 sm:line-clamp-none drop-shadow-sm">
            {currentSlide.description}
          </p>

          {/* Highlights Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-emerald-200 font-bold uppercase tracking-wider mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-emerald-400" /> Điểm Nhấn:
            </span>
            {currentSlide.highlights.map((item, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-emerald-100 font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                if (currentSlide.costumeId && onOpenCostumeDetail) {
                  onOpenCostumeDetail(currentSlide.costumeId);
                } else {
                  onExploreCatalog();
                }
              }}
              className="py-2.5 sm:py-3 px-5 sm:px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-500 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5"
            >
              <span>{currentSlide.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (onSelectRegion) {
                  onSelectRegion(currentSlide.region);
                } else {
                  onExploreMap();
                }
              }}
              className="py-2.5 sm:py-3 px-4 sm:px-5 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <Compass className="w-4 h-4 text-emerald-300" />
              <span>Xem Bản Đồ Vùng Này</span>
            </button>

            <button
              onClick={onExploreAccessories}
              className="py-2.5 sm:py-3 px-4 sm:px-5 rounded-2xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-stone-200 hover:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hidden md:flex"
            >
              <Gem className="w-4 h-4 text-emerald-300" />
              <span>Kho Phụ Kiện Bạc</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Slide Indicators & Next/Prev Controls */}
        <div className="relative z-10 p-5 sm:p-7 border-t border-white/15 bg-black/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quick Slide Switcher Thumbnails / Dots */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {BANNER_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs transition-all text-left whitespace-nowrap ${
                  idx === currentSlideIndex
                    ? 'bg-emerald-600 text-white border-emerald-400 font-bold shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-stone-300 border-white/10'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                <span>{slide.ethnicGroup}</span>
              </button>
            ))}
          </div>

          {/* Prev / Next Arrow Controls */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Slide trước"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Slide tiếp theo"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-all shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
