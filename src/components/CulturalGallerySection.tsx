import React, { useState, useMemo } from 'react';
import { GalleryItem } from '../types/costume';
import { Image as ImageIcon, ZoomIn, X, Sparkles, Filter, Info, ShieldCheck } from 'lucide-react';

interface CulturalGallerySectionProps {
  items?: GalleryItem[];
  onOpenCostume?: (costumeId: string) => void;
}

export const CulturalGallerySection: React.FC<CulturalGallerySectionProps> = ({
  items = [],
  onOpenCostume,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const safeItems = items || [];

  const categories = [
    { id: 'all', label: 'Tất Cả Hiện Vật' },
    { id: 'hoa_van', label: 'Hoa Văn & Họa Tiết Cổ' },
    { id: 'trang_suc', label: 'Trang Sức Kim Hoàn' },
    { id: 'det_nhuom', label: 'Kỹ Thuật Dệt & Nhuộm' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return safeItems;
    return safeItems.filter((item) => item.category === selectedCategory);
  }, [safeItems, selectedCategory]);

  return (
    <div id="cultural_gallery_section" className="space-y-6">
      {/* Introduction Header */}
      <div className="bg-gradient-to-r from-stone-900 via-emerald-950 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-emerald-900/40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3 border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tinh Hoa Chế Tác Thủ Công</span>
          </div>
          <h2 className="font-serif-cultural text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Thư Viện Cận Cảnh & Kỹ Thuật Chế Tác Di Sản
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Mỗi đường kim mũi chỉ, từng nét vẽ sáp ong hay vòng bạc chạm khắc đều ẩn chứa cả một thế giới quan và triết lý sống của tổ tiên các dân tộc Việt Nam.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-60 overflow-hidden bg-stone-100">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors" />

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center border border-white/30 scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5 text-emerald-300" />
                </div>
              </div>

              {/* Ethnic Group Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-emerald-200 border border-emerald-500/30 text-xs font-semibold">
                {item.ethnicGroup}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-cultural font-bold text-base text-stone-900 leading-snug group-hover:text-emerald-800 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              {item.authorOrSource && (
                <p className="text-[11px] text-stone-400 mt-3 pt-2 border-t border-stone-100 flex items-center gap-1">
                  <span>Nguồn/Nghệ nhân:</span>
                  <span className="font-medium text-stone-600">{item.authorOrSource}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Zoom Details */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[500px] overflow-hidden bg-stone-950 flex items-center justify-center">
              <img
                src={activeModalItem.url}
                alt={activeModalItem.title}
                className="w-full h-auto max-h-[480px] object-contain"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs">
                  Dân tộc {activeModalItem.ethnicGroup}
                </span>
                {activeModalItem.authorOrSource && (
                  <span className="text-xs text-stone-500 italic">
                    Tư liệu: {activeModalItem.authorOrSource}
                  </span>
                )}
              </div>

              <h3 className="font-serif-cultural text-xl font-bold text-stone-900 mb-3">
                {activeModalItem.title}
              </h3>

              <p className="text-sm text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200">
                {activeModalItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
