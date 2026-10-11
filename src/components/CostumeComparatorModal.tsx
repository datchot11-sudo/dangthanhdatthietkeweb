import React, { useState } from 'react';
import { Costume } from '../types/costume';
import { X, Scale, ArrowRightLeft, Check, Sparkles, MapPin } from 'lucide-react';

interface CostumeComparatorModalProps {
  allCostumes: Costume[];
  comparedIds: string[];
  onClose: () => void;
  onSelectCostumeDetail: (costume: Costume) => void;
}

export const CostumeComparatorModal: React.FC<CostumeComparatorModalProps> = ({
  allCostumes,
  comparedIds,
  onClose,
  onSelectCostumeDetail,
}) => {
  const safeCostumes = allCostumes || [];
  const initialCostume1 = safeCostumes.find((c) => c.id === (comparedIds && comparedIds[0])) || safeCostumes[0];
  const initialCostume2 = safeCostumes.find((c) => c.id === (comparedIds && comparedIds[1])) || safeCostumes[1] || initialCostume1;

  const [costume1, setCostume1] = useState<Costume>(initialCostume1);
  const [costume2, setCostume2] = useState<Costume>(initialCostume2);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-stone-950 flex items-center justify-center font-bold">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-cultural font-bold text-lg text-white">
                Bàn So Sánh Đối Chiếu Y Phục Dân Tộc
              </h2>
              <p className="text-xs text-stone-400">
                Tìm hiểu sự tương đồng và nét dị biệt tinh hoa giữa 2 nền văn hóa
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Costume Selectors */}
        <div className="p-4 bg-stone-100 border-b border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0">
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
              Trang phục thứ nhất:
            </label>
            <select
              value={costume1.id}
              onChange={(e) => {
                const found = allCostumes.find((c) => c.id === e.target.value);
                if (found) setCostume1(found);
              }}
              className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {allCostumes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.ethnicGroup} - {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
              Trang phục thứ hai:
            </label>
            <select
              value={costume2.id}
              onChange={(e) => {
                const found = allCostumes.find((c) => c.id === e.target.value);
                if (found) setCostume2(found);
              }}
              className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {allCostumes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.ethnicGroup} - {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Side-by-Side Comparison Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Card Headers Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Costume 1 Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs">
              <div className="h-44 rounded-xl overflow-hidden mb-3 relative">
                <img src={costume1.coverImage} alt={costume1.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-stone-950">
                  {costume1.ethnicGroup}
                </span>
              </div>
              <h3 className="font-serif-cultural font-bold text-base text-stone-900">{costume1.name}</h3>
              <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-700" /> {costume1.regionName} ({costume1.languageFamily})
              </p>
            </div>

            {/* Costume 2 Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs">
              <div className="h-44 rounded-xl overflow-hidden mb-3 relative">
                <img src={costume2.coverImage} alt={costume2.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-stone-950">
                  {costume2.ethnicGroup}
                </span>
              </div>
              <h3 className="font-serif-cultural font-bold text-base text-stone-900">{costume2.name}</h3>
              <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-700" /> {costume2.regionName} ({costume2.languageFamily})
              </p>
            </div>
          </div>

          {/* Detailed Criteria Comparison Table */}
          <div className="space-y-4 text-xs">
            {/* 1. Chất Liệu & Kỹ Thuật Dệt */}
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block mb-3">
                1. Chất Liệu Vải & Kỹ Thuật Nhuộm Dệt
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-stone-50 rounded-xl space-y-1.5">
                  <span className="font-semibold text-stone-800 block">{costume1.ethnicGroup}:</span>
                  <div className="flex flex-wrap gap-1">
                    {costume1.material.map((m, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-stone-200 rounded-md text-[11px]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl space-y-1.5">
                  <span className="font-semibold text-stone-800 block">{costume2.ethnicGroup}:</span>
                  <div className="flex flex-wrap gap-1">
                    {costume2.material.map((m, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-stone-200 rounded-md text-[11px]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Hệ Thống Phụ Kiện */}
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block mb-3">
                2. Hệ Thống Phụ Kiện Bạc / Đồng / Khăn Vấn
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-stone-50 rounded-xl space-y-2">
                  <span className="font-semibold text-stone-800 block">{costume1.ethnicGroup} ({costume1.accessories.length} món):</span>
                  <ul className="space-y-1 text-stone-600">
                    {costume1.accessories.map((a, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <strong>{a.name}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl space-y-2">
                  <span className="font-semibold text-stone-800 block">{costume2.ethnicGroup} ({costume2.accessories.length} món):</span>
                  <ul className="space-y-1 text-stone-600">
                    {costume2.accessories.map((a, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <strong>{a.name}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Triết Lý Hoa Văn */}
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block mb-3">
                3. Triết Lý & Ngôn Ngữ Hoa Văn
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-stone-50 rounded-xl">
                  <span className="font-semibold text-stone-800 block mb-1">{costume1.ethnicGroup}:</span>
                  <p className="text-stone-600 leading-relaxed">
                    {costume1.patternsAndMotifs.map((p) => p.symbolMeaning).join('. ')}
                  </p>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl">
                  <span className="font-semibold text-stone-800 block mb-1">{costume2.ethnicGroup}:</span>
                  <p className="text-stone-600 leading-relaxed">
                    {costume2.patternsAndMotifs.map((p) => p.symbolMeaning).join('. ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">So sánh đối chiếu 54 Dân tộc Việt Nam</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800"
          >
            Xong
          </button>
        </div>
      </div>
    </div>
  );
};
