import React, { useState } from 'react';
import { ALL_COSTUMES } from '../data/costumesData';
import { Costume } from '../types/costume';
import { Gem, ArrowRight, Eye } from 'lucide-react';

interface AccessoriesGallerySectionProps {
  onOpenCostumeDetail: (costume: Costume, initialTab: string) => void;
}

export const AccessoriesGallerySection: React.FC<AccessoriesGallerySectionProps> = ({
  onOpenCostumeDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Flatten all accessories with their parent costume reference
  const allAccessoriesWithCostume = ALL_COSTUMES.flatMap((costume) =>
    costume.accessories.map((acc) => ({
      ...acc,
      costume,
    }))
  );

  const categories = [
    { id: 'all', label: 'Tất Cả Phụ Kiện' },
    { id: 'khan_mu', label: 'Khăn Vấn & Mũ Nón' },
    { id: 'trang_suc_bac_dong', label: 'Trang Sức Bạc & Đồng' },
    { id: 'that_lung_xa_tich', label: 'Thắt Lưng & Dây Xà Tích' },
    { id: 'tui_guoi', label: 'Gùi & Túi Thổ Cẩm' },
    { id: 'khac', label: 'Phụ Kiện Cầm Tay & Khác' },
  ];

  const filteredAccessories = allAccessoriesWithCostume.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="accessories_gallery_section" className="py-8 sm:py-12 my-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title with clean white card */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Gem className="w-3.5 h-3.5 text-emerald-700" />
              <span>Bảo Vật Trang Sức Cổ Truyền</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-cultural font-bold text-stone-900">
              Bộ Sưu Tập Phụ Kiện Độc Bản 54 Dân Tộc
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Từ kiềng bạc chạm khắc chim muông, cúc bướm Mák Pém, khăn Piêu thêu ngũ sắc đến vương miện Pkham – tinh hoa chế tác thủ công tinh xảo của đồng bào các dân tộc.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-stone-50 p-1.5 rounded-2xl border border-stone-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white font-bold shadow-xs'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Accessories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredAccessories.map((item) => (
            <div
              key={`${item.costume.id}-${item.id}`}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Accessory Image */}
                <div className="h-44 w-full bg-stone-100 relative overflow-hidden">
                  <img
                    src={item.image || item.costume.coverImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-stone-900/80 text-emerald-200 backdrop-blur-xs border border-emerald-400/30">
                    {item.costume.ethnicGroup}
                  </div>
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-800 text-white">
                    {item.category === 'khan_mu'
                      ? 'Khăn & Mũ'
                      : item.category === 'trang_suc_bac_dong'
                      ? 'Trang Sức Bạc/Đồng'
                      : item.category === 'that_lung_xa_tich'
                      ? 'Thắt Lưng & Xà Tích'
                      : item.category === 'tui_guoi'
                      ? 'Gùi & Túi Thổ Cẩm'
                      : 'Phụ Kiện Cầm Tay'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-serif-cultural font-bold text-stone-900 text-base mb-0.5 line-clamp-1 group-hover:text-emerald-800 transition-colors">
                    {item.name}
                  </h3>
                  {item.localName && (
                    <p className="text-xs italic text-emerald-800 font-serif mb-2">
                      Tên bản địa: {item.localName}
                    </p>
                  )}
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200/80 text-[11px] text-stone-700">
                    <strong className="text-emerald-900 font-bold block mb-0.5">Ý nghĩa văn hóa:</strong>
                    <span className="line-clamp-2">{item.spiritualMeaning}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => onOpenCostumeDetail(item.costume, 'accessories')}
                  className="w-full py-2 px-3 rounded-xl bg-stone-50 hover:bg-emerald-100 border border-stone-200 hover:border-emerald-300 text-stone-800 hover:text-emerald-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Xem Trong Bộ Y Phục</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
