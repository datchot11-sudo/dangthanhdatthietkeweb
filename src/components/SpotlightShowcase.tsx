import React, { useState, useEffect } from 'react';
import { Spotlight, Costume } from '../types/costume';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface SpotlightShowcaseProps {
  spotlights?: Spotlight[];
  costumes?: Costume[];
  onSelectCostume?: (costume: Costume) => void;
  onOpenCostumeDetail?: (costumeId: string) => void;
  onExploreCatalog?: () => void;
}

export const SpotlightShowcase: React.FC<SpotlightShowcaseProps> = ({
  spotlights = [],
  costumes = [],
  onSelectCostume,
  onOpenCostumeDetail,
  onExploreCatalog,
}) => {
  const activeSpotlights = (spotlights || []).filter((s) => s.active);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activeSpotlights.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeSpotlights.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSpotlights.length]);

  if (activeSpotlights.length === 0) return null;

  const current = activeSpotlights[currentIndex] || activeSpotlights[0];
  if (!current) return null;

  const linkedCostume = current.costumeId && Array.isArray(costumes)
    ? costumes.find((c) => c.id === current.costumeId)
    : null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeSpotlights.length) % activeSpotlights.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeSpotlights.length);
  };

  const handleCostumeAction = () => {
    if (linkedCostume && onSelectCostume) {
      onSelectCostume(linkedCostume);
    } else if (current.costumeId && onOpenCostumeDetail) {
      onOpenCostumeDetail(current.costumeId);
    } else if (onExploreCatalog) {
      onExploreCatalog();
    }
  };

  return (
    <section id="spotlight_showcase_section" className="relative mb-8 rounded-3xl overflow-hidden shadow-xl border border-emerald-900/30 bg-stone-950">
      <div className="relative min-h-[360px] md:min-h-[420px] flex items-center">
        {/* Background Image with warm gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={current.imageUrl}
            alt={current.title}
            className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-stone-950/75 to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/90" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-4xl px-6 py-10 sm:px-10 md:px-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{current.badge}</span>
          </div>

          <h2 className="font-serif-cultural text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
            {current.title}
          </h2>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-6">
            {current.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {linkedCostume ? (
              <button
                id="spotlight_view_costume_btn"
                onClick={handleCostumeAction}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-900/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <Eye className="w-4 h-4" />
                <span>Khám Phá Y Phục {linkedCostume.ethnicGroup}</span>
              </button>
            ) : (
              <button
                onClick={handleCostumeAction}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-900/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Xem Toàn Bộ 54 Dân Tộc</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => {
                if (onExploreCatalog) onExploreCatalog();
              }}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-emerald-200 border border-emerald-500/30 font-medium text-sm transition-all cursor-pointer"
            >
              <span>Xem Thư Viện Văn Hóa</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>

        {/* Carousel controls */}
        {activeSpotlights.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Chuyên đề trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Chuyên đề sau"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {activeSpotlights.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-7 bg-emerald-400'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Đi tới banner ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
