import React, { useState, useEffect } from 'react';
import { Costume, Accessory } from '../types/costume';
import { FALLBACK_HERITAGE_IMAGE, handleImageFallback } from '../utils/imageUtils';
import {
  X,
  MapPin,
  Sparkles,
  Layers,
  Gem,
  BookOpen,
  Volume2,
  VolumeX,
  Hammer,
  Heart,
  Scale,
  CheckCircle2,
  Palette,
  Info,
  Mountain,
  Eye,
  Shield,
  Tag
} from 'lucide-react';

interface CostumeDetailModalProps {
  costume: Costume | null;
  initialTab?: string;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  isCompared: boolean;
  onToggleCompare: (id: string) => void;
}

export const CostumeDetailModal: React.FC<CostumeDetailModalProps> = ({
  costume,
  initialTab = 'overview',
  onClose,
  isFavorite,
  onToggleFavorite,
  isCompared,
  onToggleCompare,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [isReadingStory, setIsReadingStory] = useState(false);
  const [selectedAccessoryModal, setSelectedAccessoryModal] = useState<Accessory | null>(null);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, costume]);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [costume]);

  if (!costume) return null;

  const handleToggleVoiceReader = () => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn không hỗ trợ đọc giọng nói tự động.');
      return;
    }

    if (isReadingStory) {
      window.speechSynthesis.cancel();
      setIsReadingStory(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = costume.folkStory.audioNarratorText || costume.folkStory.fullStory;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      utterance.onend = () => setIsReadingStory(false);
      utterance.onerror = () => setIsReadingStory(false);

      window.speechSynthesis.speak(utterance);
      setIsReadingStory(true);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Tổng Quan & Phong Cảnh', icon: Info },
    { id: 'accessories', label: `Phụ Kiện Đi Kèm (${costume.accessories.length})`, icon: Gem },
    { id: 'layers', label: 'Tầng Lớp Trang Phục', icon: Layers },
    { id: 'motifs', label: 'Ý Nghĩa Hoa Văn', icon: Palette },
    { id: 'story', label: 'Huyền Tích & Chuyện Kể', icon: BookOpen },
    { id: 'techniques', label: 'Kỹ Thuật Chế Tác', icon: Hammer },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div
        id="costume_detail_modal_container"
        className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden relative"
      >
        {/* Modal Header */}
        <div className="relative bg-stone-900 text-white p-6 pb-5 shrink-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${costume.landscapeImage || costume.coverImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-stone-900/60" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-stone-950">
                  {costume.ethnicGroup}
                </span>
                <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-stone-800 text-emerald-200 border border-emerald-400/30">
                  {costume.regionName}
                </span>
                <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-stone-800/80 text-stone-300">
                  Ngữ hệ: {costume.languageFamily}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-cultural font-bold text-white tracking-tight">
                {costume.name}
              </h2>
            </div>

            {/* Top Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onToggleCompare(costume.id)}
                title={isCompared ? 'Bỏ so sánh' : 'So sánh'}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                  isCompared
                    ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Scale className="w-4 h-4" />
              </button>

              <button
                onClick={() => onToggleFavorite(costume.id)}
                title={isFavorite ? 'Bỏ yêu thích' : 'Lưu yêu thích'}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                  isFavorite
                    ? 'bg-rose-600 text-white ring-2 ring-rose-300'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-stone-800/80 text-stone-300 hover:bg-rose-900 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mt-5 pt-3 border-t border-stone-800">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab_btn_${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-emerald-100 text-emerald-950 shadow-xs'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-stone-50/50">
          {/* TAB 1: OVERVIEW & GEOGRAPHY & LANDSCAPE */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Costume Cover Image */}
                <div className="md:col-span-1 rounded-2xl overflow-hidden shadow-md border border-stone-200 h-80 relative bg-stone-100">
                  <img
                    src={costume.coverImage}
                    alt={costume.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950 p-3 text-white text-xs">
                    <span className="font-semibold text-emerald-300 block">{costume.badge}</span>
                    <span className="text-stone-300 text-[11px]">{costume.ethnicGroup}</span>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs">
                    <h3 className="font-serif-cultural font-bold text-lg text-stone-900 mb-2">
                      Ý Nghĩa Tổng Quan & Căn Cước Văn Hóa
                    </h3>
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {costume.summary}
                    </p>
                    {costume.culturalQuotes && (
                      <blockquote className="mt-4 p-3 bg-emerald-50 rounded-xl border-l-4 border-emerald-600 text-xs italic font-serif text-emerald-900">
                        "{costume.culturalQuotes}"
                      </blockquote>
                    )}
                  </div>

                  {/* Regional & Geographical Distribution */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-700" /> Nơi Phân Bố & Địa Bàn Cư Trú
                    </h4>
                    <p className="text-xs text-stone-600 mb-3">
                      Trang phục này gắn bó mật thiết với địa bàn sinh sống của đồng bào dân tộc <strong className="text-stone-900">{costume.ethnicGroup}</strong> tại các tỉnh thành:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {costume.provinces.map((prov, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium rounded-lg"
                        >
                          {prov}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Accessories Highlight banner inside Overview */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <Gem className="w-4 h-4 text-emerald-700" /> Điểm Nhấn Phụ Kiện Cổ Truyền Đi Kèm
                  </h4>
                  <button
                    onClick={() => setActiveTab('accessories')}
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline"
                  >
                    Xem chi tiết {costume.accessories.length} món →
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {costume.accessories.slice(0, 4).map((acc) => (
                    <div
                      key={acc.id}
                      onClick={() => setActiveTab('accessories')}
                      className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all cursor-pointer text-center"
                    >
                      {acc.image ? (
                        <div className="w-12 h-12 mx-auto rounded-lg overflow-hidden mb-2 bg-stone-200">
                          <img
                            src={acc.image}
                            alt={acc.name}
                            referrerPolicy="no-referrer"
                            onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 mx-auto rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                          <Gem className="w-5 h-5" />
                        </div>
                      )}
                      <p className="text-xs font-bold text-stone-800 truncate">{acc.name}</p>
                      <p className="text-[10px] text-stone-500 truncate">{acc.localName || 'Cổ truyền'}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landscape Showcase */}
              {costume.landscapeImage && (
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                      <Mountain className="w-4 h-4 text-emerald-700" /> Không Gian Phong Cảnh & Địa Danh Gắn Liền
                    </h4>
                    <span className="text-xs text-stone-500 font-medium">{costume.landscapeName}</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-56 md:h-64 border border-stone-200">
                    <img
                      src={costume.landscapeImage}
                      alt={costume.landscapeName || 'Phong cảnh'}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <p className="text-sm font-semibold text-emerald-200">{costume.landscapeName}</p>
                      <p className="text-xs text-stone-300">Vùng đất cội nguồn nuôi dưỡng những nét hoa văn tinh hoa và bản sắc văn hóa dân tộc</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Color & Material */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-4 flex items-center gap-1.5">
                    <Palette className="w-4 h-4 text-rose-700" /> Triết Lý Màu Sắc Trên Y Phục
                  </h4>
                  <div className="space-y-3">
                    {costume.mainColors.map((color, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs">
                        <span
                          className="w-5 h-5 rounded-md border border-stone-300 shrink-0 shadow-2xs mt-0.5"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div>
                          <span className="font-bold text-stone-900 block">{color.name}</span>
                          <span className="text-stone-600 leading-relaxed">{color.meaning}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-4 flex items-center gap-1.5">
                    <Hammer className="w-4 h-4 text-emerald-700" /> Chất Liệu Cổ Truyền Độc Bản
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {costume.material.map((mat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-stone-100 border border-stone-200 text-stone-800 text-xs font-medium rounded-xl flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {mat}
                      </span>
                    ))}
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600 leading-relaxed border border-stone-200/60">
                    <strong className="text-stone-800">Thú vị:</strong> Tất cả nguyên liệu đều được khai thác hoàn toàn từ cỏ cây, hoa lá, đất đá thiên nhiên như vỏ cây rừng, củ nâu, chàm núi và bạc trắng nguyên chất.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RICH ACCESSORIES SHOWCASE (SPECIALLY REQUESTED Ô GIỚI THIỆU PHỤ KIỆN VÀ HÌNH ẢNH) */}
          {activeTab === 'accessories' && (
            <div className="space-y-6 animate-fade-in">
              {/* Highlight Banner */}
              <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white p-6 rounded-3xl shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider mb-2">
                    <Gem className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Bộ Sưu Tập Trang Sức & Báu Vật Đi Kèm</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-cultural font-bold text-white mb-2">
                    Không Gian Trưng Bày Phụ Kiện Y Phục ({costume.accessories.length} Món Đi Kèm)
                  </h3>
                  <p className="text-xs text-stone-300 max-w-2xl leading-relaxed">
                    Trang sức bạc, xà tích đúc hoa, khăn vấn, mũ đồng xu, hài thêu và gùi thổ cẩm không chỉ là điểm xuyết làm đẹp mà còn là linh vật bảo hộ, gắn kết con người với tổ tiên thần linh và khẳng định phẩm giá tộc người.
                  </p>
                </div>
              </div>

              {/* Accessories Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {costume.accessories.map((acc, idx) => (
                  <div
                    key={acc.id}
                    className="bg-white rounded-3xl border border-stone-200 shadow-2xs overflow-hidden hover:border-emerald-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    {/* Top Image Showcase */}
                    <div className="h-56 w-full bg-stone-100 overflow-hidden relative">
                      {acc.image ? (
                        <img
                          src={acc.image}
                          alt={acc.name}
                          referrerPolicy="no-referrer"
                          onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-800">
                          <Gem className="w-12 h-12 text-emerald-600/60" />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500 text-stone-950 shadow-xs">
                          Món #{idx + 1}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-stone-900/80 text-emerald-200 backdrop-blur-xs">
                          {acc.category === 'khan_mu'
                            ? 'Khăn & Mũ Cổ Truyền'
                            : acc.category === 'trang_suc_bac_dong'
                            ? 'Trang Sức Bạc / Đồng'
                            : acc.category === 'that_lung_xa_tich'
                            ? 'Thắt Lưng & Xà Tích'
                            : acc.category === 'tui_guoi'
                            ? 'Gùi & Túi Thổ Cẩm'
                            : 'Phụ Kiện Đặc Biệt'}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h4 className="font-serif-cultural font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                          {acc.name}
                        </h4>
                        {acc.localName && (
                          <p className="text-xs text-emerald-200 font-serif italic">
                            Tên gọi bản địa: {acc.localName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      {/* Description Box */}
                      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                          📖 Đặc Điểm & Kiểu Dáng Chế Tác
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {acc.description}
                        </p>
                      </div>

                      {/* Spiritual Meaning & Wearing Style */}
                      <div className="space-y-3">
                        <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200/80">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5 mb-1">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                            Ý Nghĩa Tâm Linh & Tục Lệ Thiêng
                          </span>
                          <p className="text-xs text-stone-800 leading-relaxed">
                            {acc.spiritualMeaning}
                          </p>
                        </div>

                        <div className="bg-stone-100/80 p-3.5 rounded-2xl border border-stone-200 text-xs flex items-start gap-2">
                          <span className="font-bold text-stone-800 shrink-0">Quy cách mang/đeo:</span>
                          <span className="text-stone-600">{acc.wearingStyle}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LAYERS */}
          {activeTab === 'layers' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-white p-4 rounded-2xl border border-stone-200">
                <p className="text-xs text-stone-600">
                  Khám phá cấu trúc từng lớp của bộ trang phục truyền thống từ đầu đến chân:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {costume.costumeLayers.map((layer, idx) => (
                  <div
                    key={layer.id}
                    className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden hover:border-emerald-400 transition-all flex flex-col justify-between"
                  >
                    {layer.image && (
                      <div className="h-44 w-full bg-stone-100 overflow-hidden relative">
                        <img
                          src={layer.image}
                          alt={layer.partName}
                          referrerPolicy="no-referrer"
                          onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-stone-900/80 text-emerald-200 backdrop-blur-xs">
                          {layer.position === 'dau' ? 'Đầu & Tóc' : layer.position === 'than_tren' ? 'Thân Trên' : layer.position === 'than_duoi' ? 'Thân Dưới' : layer.position === 'toan_than' ? 'Toàn Thân' : 'Chân & Xà Cạp'}
                        </div>
                      </div>
                    )}

                    <div className="p-5 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        {layer.localName && (
                          <span className="text-xs italic text-emerald-800 font-medium font-serif ml-auto">
                            Tên bản địa: {layer.localName}
                          </span>
                        )}
                      </div>

                      <h4 className="font-serif-cultural font-bold text-base text-stone-900 mb-2">
                        {idx + 1}. {layer.partName}
                      </h4>

                      <p className="text-xs text-stone-700 leading-relaxed mb-3">
                        {layer.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-stone-100 text-xs">
                        <div>
                          <span className="font-semibold text-stone-800">Kỹ thuật chế tác: </span>
                          <span className="text-stone-600">{layer.craftTechnique}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-emerald-900">Ý nghĩa biểu tượng: </span>
                          <span className="text-stone-600">{layer.symbolism}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MOTIFS */}
          {activeTab === 'motifs' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-white p-4 rounded-2xl border border-stone-200">
                <h3 className="font-serif-cultural font-bold text-base text-stone-900">
                  Mật Mã Hoa Văn & Biểu Tượng Vũ Trụ Quan
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Mỗi đường kim mũi chỉ, hoa văn kỷ hà, hình tượng mặt trời hay con chim rừng đều là ngôn ngữ kể chuyện bí mật của các thế hệ tổ tiên.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {costume.patternsAndMotifs.map((motif, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                      <h4 className="font-serif-cultural font-bold text-base text-stone-900">
                        {motif.name}
                      </h4>
                    </div>

                    <div className="space-y-3 text-xs mt-3">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
                        <strong className="text-stone-900 block mb-1">Ý nghĩa triết lý:</strong>
                        <p className="text-stone-700 leading-relaxed">{motif.symbolMeaning}</p>
                      </div>

                      <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/60">
                        <strong className="text-emerald-900 block mb-1">Nguồn gốc lịch sử & huyền thoại:</strong>
                        <p className="text-stone-700 leading-relaxed">{motif.historicalOrigin}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: STORY */}
          {activeTab === 'story' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-gradient-to-br from-emerald-900 to-stone-900 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Huyền Tích Dân Gian
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif-cultural font-bold text-white mt-2">
                        {costume.folkStory.title}
                      </h3>
                    </div>

                    <button
                      onClick={handleToggleVoiceReader}
                      className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shadow-md ${
                        isReadingStory
                          ? 'bg-rose-600 text-white animate-pulse'
                          : 'bg-emerald-400 hover:bg-emerald-300 text-stone-950'
                      }`}
                    >
                      {isReadingStory ? (
                        <>
                          <VolumeX className="w-4 h-4" />
                          <span>Dừng Đọc Huyền Tích</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4" />
                          <span>Nghe Giọng Đọc Truyền Thuyết</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-emerald-200/90 font-medium mb-4 italic">
                    Tóm tắt: "{costume.folkStory.summary}"
                  </p>

                  <div className="bg-stone-950/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-sm text-stone-200 leading-relaxed space-y-3 font-serif">
                    <p>{costume.folkStory.fullStory}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                    <span>Bài học nhân văn:</span>
                    <span className="text-stone-300 font-normal font-sans">{costume.folkStory.culturalMoral}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: TECHNIQUES */}
          {activeTab === 'techniques' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-white p-4 rounded-2xl border border-stone-200">
                <h3 className="font-serif-cultural font-bold text-base text-stone-900">
                  Bí Quyết Kỹ Thuật Chế Tác Cổ Truyền
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Quy trình dệt thủ công, vẽ sáp ong Batik, nhuộm chàm tự nhiên và rèn bạc bí truyền được truyền qua nhiều đời mẹ sang con gái.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {costume.techniques.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </div>
                      <h4 className="font-serif-cultural font-bold text-base text-stone-900">
                        {tech.name}
                      </h4>
                    </div>

                    <p className="text-xs text-stone-700 leading-relaxed mb-3 pl-10">
                      {tech.description}
                    </p>

                    <div className="ml-10 p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/60 text-xs">
                      <strong className="text-emerald-900">Tính độc bản & giá trị bảo tồn: </strong>
                      <span className="text-stone-700">{tech.uniqueness}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">
            S Trang Phục Việt • Di sản Y Phục & Bản Sắc 54 Dân Tộc Việt Nam
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors"
          >
            Đóng Lại
          </button>
        </div>
      </div>
    </div>
  );
};
