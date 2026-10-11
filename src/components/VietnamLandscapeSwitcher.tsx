import React, { useState } from 'react';
import { VietnamLandscape, VIETNAM_LANDSCAPES } from '../data/landscapesData';
import { Mountain, Sparkles, Check, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';

interface VietnamLandscapeSwitcherProps {
  currentLandscape: VietnamLandscape;
  onSelectLandscape: (landscape: VietnamLandscape) => void;
}

export const VietnamLandscapeSwitcher: React.FC<VietnamLandscapeSwitcherProps> = ({
  currentLandscape,
  onSelectLandscape,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      {/* Mini Scenery Info Bar with Switch Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 sm:p-3 rounded-2xl bg-white border border-stone-200 text-stone-900 shadow-sm">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-emerald-300/80 shadow-2xs">
            <img
              src={currentLandscape.thumbnail}
              alt={currentLandscape.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="truncate">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                <Mountain className="w-3 h-3 text-emerald-700" /> Cảnh Sắc Danh Thắng:
              </span>
              <span className="text-xs font-bold text-stone-900 truncate font-serif-cultural">
                {currentLandscape.name}
              </span>
            </div>
            <p className="text-[11px] text-stone-500 truncate hidden sm:block">
              {currentLandscape.location} • {currentLandscape.culturalNote}
            </p>
          </div>
        </div>

        {/* Action Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 shadow-2xs"
        >
          <ImageIcon className="w-3.5 h-3.5 text-emerald-700" />
          <span>Đổi Cảnh Sắc ({VIETNAM_LANDSCAPES.length})</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expanded Landscape Selector Grid */}
      {isOpen && (
        <div className="mt-3 p-5 rounded-3xl bg-white border border-stone-200 shadow-xl animate-fade-in text-stone-900">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
            <div>
              <h4 className="text-sm font-serif-cultural font-bold text-emerald-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700" /> Bộ Sưu Tập Danh Thắng Non Nước Việt Nam
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Các vùng danh thắng hùng vĩ nuôi dưỡng cội nguồn văn hóa và tà y phục 54 dân tộc.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-stone-500 hover:text-stone-900 px-2.5 py-1 rounded-lg hover:bg-stone-100 transition-colors"
            >
              ✕ Thu gọn
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 max-h-[360px] overflow-y-auto pr-1 no-scrollbar">
            {VIETNAM_LANDSCAPES.map((land) => {
              const isSelected = land.id === currentLandscape.id;
              return (
                <div
                  key={land.id}
                  onClick={() => {
                    onSelectLandscape(land);
                  }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all h-28 flex flex-col justify-end p-2.5 ${
                    isSelected
                      ? 'border-emerald-600 ring-2 ring-emerald-500/40 shadow-md scale-[1.02]'
                      : 'border-stone-200 hover:border-emerald-400 hover:shadow-md'
                  }`}
                >
                  <img
                    src={land.thumbnail}
                    alt={land.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center shadow-md">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}

                  <div className="relative z-10 text-white">
                    <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider truncate">
                      {land.location}
                    </p>
                    <h5 className="font-serif-cultural font-bold text-xs leading-tight line-clamp-1">
                      {land.name}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
