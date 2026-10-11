import React from 'react';
import { CulturalRegionKey } from '../types/costume';
import { CULTURAL_REGIONS } from '../data/regionsData';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

interface RegionalMapSectionProps {
  selectedRegion: CulturalRegionKey;
  onSelectRegion: (region: CulturalRegionKey) => void;
}

export const RegionalMapSection: React.FC<RegionalMapSectionProps> = ({
  selectedRegion,
  onSelectRegion,
}) => {
  return (
    <section id="regional_heritage_map_section" className="py-8 sm:py-12 my-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with crisp white card */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300/60 text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>Địa Lý Văn Hóa Dân Tộc</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-cultural font-bold text-stone-900">
              Bản Đồ Y Phục 8 Vùng Miền Non Nước
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Từ đỉnh Fansipan quanh năm mây phủ đến đất mũi Cà Mau bạt ngàn rừng đước, mỗi vùng miền mang một bản sắc y phục riêng biệt gắn liền với phong cảnh quê hương.
            </p>
          </div>

          <button
            onClick={() => onSelectRegion('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border shrink-0 ${
              selectedRegion === 'all'
                ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm'
                : 'bg-white text-stone-700 border-stone-300 hover:border-emerald-700 hover:text-emerald-900 hover:bg-stone-50'
            }`}
          >
            Tất Cả Vùng Miền (54 Dân Tộc)
          </button>
        </div>

        {/* Region Cards Grid with clean white cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CULTURAL_REGIONS.map((region) => {
            const isSelected = selectedRegion === region.id;
            return (
              <div
                key={region.id}
                id={`region_card_${region.id}`}
                onClick={() => onSelectRegion(region.id)}
                className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-emerald-600 shadow-lg ring-2 ring-emerald-500/30'
                    : 'bg-white/95 backdrop-blur-sm border-stone-200 hover:border-emerald-400 hover:shadow-md text-stone-900'
                }`}
              >
                {/* Top color accent strip */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${region.color}`} />

                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-serif-cultural font-bold text-base text-stone-900 group-hover:text-emerald-800 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                      {region.provincesCount} Tỉnh
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {region.tagline}
                  </p>

                  {/* Highlight Features Tags */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Đặc trưng nổi bật:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {region.highlightFeatures.slice(0, 3).map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-stone-700"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-emerald-800 font-bold' : 'text-stone-500 group-hover:text-emerald-800'}>
                    {isSelected ? 'Đang lọc theo vùng này' : 'Khám phá trang phục'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-emerald-800 translate-x-1' : 'text-stone-400 group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
