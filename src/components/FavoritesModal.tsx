import React from 'react';
import { Costume } from '../types/costume';
import { X, Heart, Sparkles, ArrowUpRight, Trash2 } from 'lucide-react';

interface FavoritesModalProps {
  favorites: string[];
  allCostumes: Costume[];
  onClose: () => void;
  onSelectCostume: (costume: Costume) => void;
  onRemoveFavorite: (id: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  favorites,
  allCostumes,
  onClose,
  onSelectCostume,
  onRemoveFavorite,
}) => {
  const favoriteCostumes = allCostumes.filter((c) => favorites.includes(c.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h2 className="font-serif-cultural font-bold text-base text-white">
                Bộ Sưu Tập Y Phục Yêu Thích
              </h2>
              <p className="text-xs text-stone-400">
                Đã lưu {favoriteCostumes.length} bộ trang phục truyền thống
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

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {favoriteCostumes.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h3 className="font-serif-cultural font-bold text-base text-stone-800">
                Chưa có trang phục nào trong danh sách yêu thích
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                Nhấn vào biểu tượng trái tim trên các thẻ trang phục để lưu lại những tác phẩm di sản bạn yêu mến nhất.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {favoriteCostumes.map((costume) => (
                <div
                  key={costume.id}
                  className="bg-white rounded-2xl border border-stone-200 p-3 shadow-2xs hover:border-emerald-400 transition-all flex items-center gap-3"
                >
                  <img
                    src={costume.coverImage}
                    alt={costume.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase block truncate">
                      {costume.ethnicGroup}
                    </span>
                    <h4 className="font-serif-cultural font-bold text-xs text-stone-900 truncate">
                      {costume.name}
                    </h4>
                    <span className="text-[11px] text-stone-500 block truncate">
                      {costume.regionName}
                    </span>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          onSelectCostume(costume);
                          onClose();
                        }}
                        className="px-2 py-1 rounded-lg bg-stone-900 text-white text-[11px] font-semibold flex items-center gap-1 hover:bg-emerald-900"
                      >
                        <span>Chi Tiết</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => onRemoveFavorite(costume.id)}
                        className="p-1 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Xóa khỏi yêu thích"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
