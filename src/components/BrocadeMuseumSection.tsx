import React, { useState } from 'react';
import { BROCADE_MUSEUM_ITEMS, BrocadeMuseumItem } from '../data/costumesData';
import { Sparkles, Hammer, Palette, ArrowRight, Layers } from 'lucide-react';

export const BrocadeMuseumSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<BrocadeMuseumItem>(BROCADE_MUSEUM_ITEMS[0]);

  return (
    <section id="brocade_textile_museum_section" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      {/* Header with clean white card */}
      <div className="text-center max-w-3xl mx-auto mb-8 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>Kho Tàng Kỹ Thuật Cổ Truyền</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif-cultural font-bold text-stone-900">
          Bảo Tàng Hoa Văn & Kỹ Thuật Dệt Độc Bản
        </h2>
        <p className="text-sm text-stone-600 mt-2">
          Khám phá những phương pháp chế tác vải, nhuộm thảo mộc và luồn chỉ thủ công nghìn năm không thể thay thế bởi máy móc công nghiệp.
        </p>
      </div>

      {/* Main Museum Interactive Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column: Technique Selector List */}
        <div className="lg:col-span-5 space-y-3">
          {BROCADE_MUSEUM_ITEMS.map((item) => {
            const isSelected = selectedItem.id === item.id;
            return (
              <div
                key={item.id}
                id={`museum_item_${item.id}`}
                onClick={() => setSelectedItem(item)}
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-950 shadow-md ring-2 ring-emerald-500/40'
                    : 'bg-white text-stone-900 border-stone-200 hover:border-emerald-400 hover:bg-stone-50 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-emerald-300' : 'text-emerald-800'}`}>
                    {item.ethnicGroup}
                  </span>
                  <div className="flex items-center gap-1">
                    {item.colorPalette.map((hex, i) => (
                      <span
                        key={i}
                        className="w-2.5 h-2.5 rounded-full border border-black/20"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className={`font-serif-cultural font-bold text-base ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                  {item.name}
                </h3>
                <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-stone-200' : 'text-stone-500'}`}>
                  {item.technique}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Showcase Box */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                {selectedItem.ethnicGroup}
              </span>
              <span className="text-xs text-stone-500 font-medium">
                Vùng: {selectedItem.region}
              </span>
            </div>

            <h3 className="font-serif-cultural font-bold text-2xl text-stone-900 mb-2">
              {selectedItem.name}
            </h3>

            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              {selectedItem.description}
            </p>

            {/* Technique & Symbolism Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1.5">
                  <Hammer className="w-4 h-4 text-emerald-700" /> Kỹ Thuật Chế Tác
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {selectedItem.technique}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1.5">
                  <Palette className="w-4 h-4 text-emerald-700" /> Biểu Tượng & Triết Lý
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {selectedItem.symbolism}
                </p>
              </div>
            </div>

            {/* Natural dyes info */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
                <Layers className="w-4 h-4 text-emerald-700" /> Nguyên Liệu Tự Nhiên & Nhuộm Thảo Mộc
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedItem.naturalDyes}
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-stone-600">Bảng màu tự nhiên:</span>
              <div className="flex items-center gap-1.5">
                {selectedItem.colorPalette.map((hex, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border border-stone-300 shadow-2xs"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
