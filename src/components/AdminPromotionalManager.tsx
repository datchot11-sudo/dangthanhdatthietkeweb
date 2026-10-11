import React, { useState } from 'react';
import { Spotlight, Festival, GalleryItem, Costume } from '../types/costume';
import { ImageInputWithPreview } from './ImageInputWithPreview';
import { FALLBACK_HERITAGE_IMAGE, handleImageFallback } from '../utils/imageUtils';
import {
  Sparkles,
  Calendar,
  Image as ImageIcon,
  Plus,
  Trash2,
  Save,
  CheckCircle2,
  X,
  ToggleLeft,
  ToggleRight,
  ExternalLink,
  MapPin,
  Clock
} from 'lucide-react';

interface AdminPromotionalManagerProps {
  spotlights?: Spotlight[];
  festivals?: Festival[];
  galleryItems?: GalleryItem[];
  costumes?: Costume[];
  onUpdateSpotlights: (updated: Spotlight[]) => void;
  onUpdateFestivals: (updated: Festival[]) => void;
  onUpdateGalleryItems: (updated: GalleryItem[]) => void;
  showToast: (msg: string) => void;
}

export const AdminPromotionalManager: React.FC<AdminPromotionalManagerProps> = ({
  spotlights = [],
  festivals = [],
  galleryItems = [],
  costumes = [],
  onUpdateSpotlights,
  onUpdateFestivals,
  onUpdateGalleryItems,
  showToast,
}) => {
  const [subTab, setSubTab] = useState<'spotlights' | 'festivals' | 'gallery'>('spotlights');

  // Spotlight form state
  const [isAddingSpotlight, setIsAddingSpotlight] = useState(false);
  const [spotTitle, setSpotTitle] = useState('');
  const [spotSubtitle, setSpotSubtitle] = useState('');
  const [spotBadge, setSpotBadge] = useState('Chuyên Đề Tiêu Điểm');
  const [spotImage, setSpotImage] = useState('');
  const [spotEthnic, setSpotEthnic] = useState('');
  const [spotRegion, setSpotRegion] = useState('Bắc Bộ');
  const [spotCostumeId, setSpotCostumeId] = useState('');

  // Festival form state
  const [isAddingFestival, setIsAddingFestival] = useState(false);
  const [festName, setFestName] = useState('');
  const [festEthnic, setFestEthnic] = useState('');
  const [festLunar, setFestLunar] = useState('');
  const [festSolar, setFestSolar] = useState('');
  const [festLocation, setFestLocation] = useState('');
  const [festDesc, setFestDesc] = useState('');
  const [festCostumeHighlight, setFestCostumeHighlight] = useState('');
  const [festImage, setFestImage] = useState('');

  // Gallery form state
  const [isAddingGallery, setIsAddingGallery] = useState(false);
  const [galTitle, setGalTitle] = useState('');
  const [galEthnic, setGalEthnic] = useState('');
  const [galCategory, setGalCategory] = useState<'hoa_van' | 'trang_suc' | 'det_nhuom'>('hoa_van');
  const [galUrl, setGalUrl] = useState('');
  const [galCaption, setGalCaption] = useState('');
  const [galAuthor, setGalAuthor] = useState('');

  // Spotlight handlers
  const handleToggleSpotlightActive = (id: string) => {
    const updated = spotlights.map((s) => (s.id === id ? { ...s, active: !s.active } : s));
    onUpdateSpotlights(updated);
    showToast('Đã cập nhật trạng thái hiển thị banner!');
  };

  const handleDeleteSpotlight = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa banner tiêu điểm này?')) {
      const updated = spotlights.filter((s) => s.id !== id);
      onUpdateSpotlights(updated);
      showToast('Đã xóa banner tiêu điểm.');
    }
  };

  const handleSaveSpotlight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!spotTitle.trim() || !spotImage.trim()) return;

    const newSpot: Spotlight = {
      id: `spot_${Date.now()}`,
      title: spotTitle.trim(),
      subtitle: spotSubtitle.trim(),
      badge: spotBadge.trim() || 'Tiêu Điểm Di Sản',
      imageUrl: spotImage.trim(),
      costumeId: spotCostumeId || undefined,
      active: true,
      order: spotlights.length + 1,
    };

    onUpdateSpotlights([newSpot, ...spotlights]);
    setIsAddingSpotlight(false);
    setSpotTitle('');
    setSpotSubtitle('');
    setSpotImage('');
    setSpotEthnic('');
    showToast('Đã thêm banner tiêu điểm mới thành công!');
  };

  // Festival handlers
  const handleDeleteFestival = (id: string, name: string) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa lễ hội "${name}" khỏi lịch?`)) {
      const updated = festivals.filter((f) => f.id !== id);
      onUpdateFestivals(updated);
      showToast(`Đã xóa lễ hội: "${name}"`);
    }
  };

  const handleSaveFestival = (e: React.FormEvent) => {
    e.preventDefault();
    if (!festName.trim() || !festLocation.trim()) return;

    const newFest: Festival = {
      id: `fest_${Date.now()}`,
      name: festName.trim(),
      ethnicGroup: festEthnic.trim() || 'Toàn quốc',
      location: festLocation.trim(),
      timeOfYear: festSolar.trim() || 'Hàng năm',
      monthLunar: festLunar.trim() || undefined,
      description: festDesc.trim(),
      costumeHighlights: festCostumeHighlight.trim(),
      image: festImage.trim() || 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
      tags: [festEthnic.trim() || '54 Dân Tộc', 'Lễ Hội']
    };

    onUpdateFestivals([newFest, ...festivals]);
    setIsAddingFestival(false);
    setFestName('');
    setFestEthnic('');
    setFestLunar('');
    setFestSolar('');
    setFestLocation('');
    setFestDesc('');
    setFestCostumeHighlight('');
    setFestImage('');
    showToast('Đã thêm lễ hội văn hóa mới vào niên lịch!');
  };

  // Gallery handlers
  const handleDeleteGalleryItem = (id: string, title: string) => {
    if (window.confirm(`Bạn có chắc muốn xóa hiện vật "${title}" khỏi thư viện?`)) {
      const updated = galleryItems.filter((g) => g.id !== id);
      onUpdateGalleryItems(updated);
      showToast(`Đã xóa hiện vật: "${title}"`);
    }
  };

  const handleSaveGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galTitle.trim() || !galUrl.trim()) return;

    const newItem: GalleryItem = {
      id: `gal_${Date.now()}`,
      title: galTitle.trim(),
      ethnicGroup: galEthnic.trim() || 'Việt Nam',
      category: galCategory,
      mediaType: 'image',
      url: galUrl.trim(),
      caption: galCaption.trim(),
      authorOrSource: galAuthor.trim() || undefined,
    };

    onUpdateGalleryItems([newItem, ...galleryItems]);
    setIsAddingGallery(false);
    setGalTitle('');
    setGalEthnic('');
    setGalUrl('');
    setGalCaption('');
    setGalAuthor('');
    showToast('Đã thêm tư liệu hiện vật mới vào Thư viện!');
  };

  return (
    <div className="space-y-6">
      {/* Sub tabs for promotional management */}
      <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-stone-200">
        <button
          onClick={() => setSubTab('spotlights')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            subTab === 'spotlights'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Banner & Tiêu Điểm ({spotlights.length})</span>
        </button>

        <button
          onClick={() => setSubTab('festivals')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            subTab === 'festivals'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Lịch Lễ Hội & Sự Kiện ({festivals.length})</span>
        </button>

        <button
          onClick={() => setSubTab('gallery')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            subTab === 'gallery'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Thư Viện Cận Cảnh ({galleryItems.length})</span>
        </button>
      </div>

      {/* SUBTAB 1: SPOTLIGHTS */}
      {subTab === 'spotlights' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif-cultural text-lg font-bold text-stone-900">
                Quản Lý Banner & Chuyên Đề Tiêu Điểm Trang Chủ
              </h3>
              <p className="text-xs text-stone-500">
                Các chuyên đề giới thiệu nổi bật luân phiên ở đầu trang chủ để quảng bá nét đẹp trang phục các dân tộc.
              </p>
            </div>
            <button
              onClick={() => setIsAddingSpotlight(true)}
              className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm Banner Mới</span>
            </button>
          </div>

          {/* List of spotlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {spotlights.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div className="relative h-44 bg-stone-900">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-stone-950 font-bold text-[10px]">
                      {item.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 text-white text-[10px]">
                      Thứ tự #{item.order}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                    <p className="text-[11px] text-stone-300 line-clamp-1">{item.subtitle}</p>
                  </div>
                </div>

                <div className="p-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => handleToggleSpotlightActive(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                      item.active
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {item.active ? <ToggleRight className="w-4 h-4 text-emerald-600" /> : <ToggleLeft className="w-4 h-4 text-stone-500" />}
                    <span>{item.active ? 'Đang Hiển Thị' : 'Tạm Ẩn'}</span>
                  </button>

                  <button
                    onClick={() => handleDeleteSpotlight(item.id)}
                    className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Xóa banner này"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Spotlight Modal */}
          {isAddingSpotlight && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200">
                <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
                  <h4 className="font-bold text-stone-900 text-base">Thêm Banner Tiêu Điểm Mới</h4>
                  <button onClick={() => setIsAddingSpotlight(false)} className="p-1 text-stone-400 hover:text-stone-700">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSaveSpotlight} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Nhãn Tag (Ví dụ: Chuyên Đề Tiêu Điểm):</label>
                    <input
                      type="text"
                      value={spotBadge}
                      onChange={(e) => setSpotBadge(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Tiêu Đề Lớn:</label>
                    <input
                      type="text"
                      value={spotTitle}
                      onChange={(e) => setSpotTitle(e.target.value)}
                      placeholder="Ví dụ: Nghệ Thuật Thổ Cẩm & Bạc Chạm Khắc"
                      className="w-full px-3 py-2 border rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Mô Tả Ngắn:</label>
                    <textarea
                      value={spotSubtitle}
                      onChange={(e) => setSpotSubtitle(e.target.value)}
                      placeholder="Tôn vinh vẻ đẹp tinh xảo qua bàn tay nghệ nhân..."
                      rows={2}
                      className="w-full px-3 py-2 border rounded-xl"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Dân Tộc:</label>
                      <input
                        type="text"
                        value={spotEthnic}
                        onChange={(e) => setSpotEthnic(e.target.value)}
                        placeholder="H'Mông, Dao, Thái..."
                        className="w-full px-3 py-2 border rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Khu Vực:</label>
                      <input
                        type="text"
                        value={spotRegion}
                        onChange={(e) => setSpotRegion(e.target.value)}
                        className="w-full px-3 py-2 border rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <ImageInputWithPreview
                      label="Ảnh Banner Quảng Bá (URL hoặc tải từ máy)"
                      value={spotImage}
                      onChange={setSpotImage}
                      placeholder="Dán link ảnh hoặc bấm Tải Từ Máy"
                      aspectRatio="video"
                      required
                      helpText="Hệ thống tự động sửa link Google Drive, Unsplash, Imgur... hoặc tải ảnh trực tiếp từ máy."
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Gắn Với Bộ Trang Phục (Tùy chọn):</label>
                    <select
                      value={spotCostumeId}
                      onChange={(e) => setSpotCostumeId(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl bg-white"
                    >
                      <option value="">-- Không liên kết trang phục cụ thể --</option>
                      {costumes.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.ethnicGroup})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-3 border-t flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingSpotlight(false)}
                      className="px-4 py-2 bg-stone-100 rounded-xl"
                    >
                      Hủy
                    </button>
                    <button type="submit" className="px-5 py-2 bg-emerald-800 text-white rounded-xl font-bold">
                      Lưu Banner
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUBTAB 2: FESTIVALS */}
      {subTab === 'festivals' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif-cultural text-lg font-bold text-stone-900">
                Quản Lý Lịch Lễ Hội & Không Gian Trình Diễn Y Phục
              </h3>
              <p className="text-xs text-stone-500">
                Cập nhật thông tin các lễ hội truyền thống, thời gian tổ chức và nét đặc sắc trang phục để người xem trải nghiệm thực tế.
              </p>
            </div>
            <button
              onClick={() => setIsAddingFestival(true)}
              className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm Lễ Hội Mới</span>
            </button>
          </div>

          <div className="space-y-3">
            {festivals.map((fest) => (
              <div
                key={fest.id}
                className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                    <img
                      src={fest.image}
                      alt={fest.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-[10px]">
                        Dân tộc {fest.ethnicGroup}
                      </span>
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-700" />
                        {fest.location}
                      </span>
                    </div>
                    <h4 className="font-bold text-stone-900 text-sm">{fest.name}</h4>
                    <p className="text-xs text-stone-600 line-clamp-1">{fest.costumeHighlights}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-stone-500 font-medium bg-stone-100 px-3 py-1.5 rounded-xl">
                    {fest.monthLunar || fest.timeOfYear}
                  </span>
                  <button
                    onClick={() => handleDeleteFestival(fest.id, fest.name)}
                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                    title="Xóa lễ hội này"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Festival Modal */}
          {isAddingFestival && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200">
                <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
                  <h4 className="font-bold text-stone-900 text-base">Thêm Lễ Hội Văn Hóa Mới</h4>
                  <button onClick={() => setIsAddingFestival(false)} className="p-1 text-stone-400 hover:text-stone-700">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSaveFestival} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Tên Lễ Hội:</label>
                    <input
                      type="text"
                      value={festName}
                      onChange={(e) => setFestName(e.target.value)}
                      placeholder="Ví dụ: Lễ Hội Gầu Tào"
                      className="w-full px-3 py-2 border rounded-xl"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Dân Tộc Chủ Thể:</label>
                      <input
                        type="text"
                        value={festEthnic}
                        onChange={(e) => setFestEthnic(e.target.value)}
                        placeholder="H'Mông"
                        className="w-full px-3 py-2 border rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Địa Điểm:</label>
                      <input
                        type="text"
                        value={festLocation}
                        onChange={(e) => setFestLocation(e.target.value)}
                        placeholder="Hà Giang, Lào Cai"
                        className="w-full px-3 py-2 border rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Thời Gian Âm Lịch:</label>
                      <input
                        type="text"
                        value={festLunar}
                        onChange={(e) => setFestLunar(e.target.value)}
                        placeholder="Mùng 1 đến mùng 15 tháng Giêng"
                        className="w-full px-3 py-2 border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Thời Gian Dương Lịch:</label>
                      <input
                        type="text"
                        value={festSolar}
                        onChange={(e) => setFestSolar(e.target.value)}
                        placeholder="Tháng 1 - Tháng 2"
                        className="w-full px-3 py-2 border rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Nét Nổi Bật Về Trang Phục:</label>
                    <input
                      type="text"
                      value={festCostumeHighlight}
                      onChange={(e) => setFestCostumeHighlight(e.target.value)}
                      placeholder="Phụ nữ diện váy xòe hoa văn sáp ong, kiềng bạc lấp lánh..."
                      className="w-full px-3 py-2 border rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Mô Tả Ý Nghĩa Lễ Hội:</label>
                    <textarea
                      value={festDesc}
                      onChange={(e) => setFestDesc(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <ImageInputWithPreview
                      label="Ảnh Lễ Hội (URL hoặc tải từ máy)"
                      value={festImage}
                      onChange={setFestImage}
                      placeholder="Dán link ảnh hoặc bấm Tải Từ Máy"
                      aspectRatio="video"
                      helpText="Hệ thống tự động sửa link Google Drive, Unsplash, Imgur... hoặc tải ảnh trực tiếp từ máy."
                    />
                  </div>

                  <div className="pt-3 border-t flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingFestival(false)}
                      className="px-4 py-2 bg-stone-100 rounded-xl"
                    >
                      Hủy
                    </button>
                    <button type="submit" className="px-5 py-2 bg-emerald-800 text-white rounded-xl font-bold">
                      Lưu Lễ Hội
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUBTAB 3: GALLERY */}
      {subTab === 'gallery' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif-cultural text-lg font-bold text-stone-900">
                Quản Lý Thư Viện Cận Cảnh & Kỹ Thuật Chế Tác
              </h3>
              <p className="text-xs text-stone-500">
                Ảnh tư liệu cận cảnh về hoa văn cổ, trang sức kim hoàn và kỹ thuật dệt nhuộm truyền thống.
              </p>
            </div>
            <button
              onClick={() => setIsAddingGallery(true)}
              className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm Tư Liệu Hiện Vật</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div className="relative h-40 bg-stone-100">
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px]">
                    {item.ethnicGroup}
                  </span>
                </div>

                <div className="p-3">
                  <h4 className="font-bold text-stone-900 text-xs mb-1">{item.title}</h4>
                  <p className="text-[11px] text-stone-500 line-clamp-2">{item.caption}</p>

                  <div className="mt-3 pt-2 border-t flex items-center justify-between">
                    <span className="text-[10px] text-emerald-800 font-semibold uppercase">
                      {item.category === 'hoa_van'
                        ? 'Hoa Văn Cổ'
                        : item.category === 'trang_suc'
                        ? 'Trang Sức'
                        : 'Dệt & Nhuộm'}
                    </span>
                    <button
                      onClick={() => handleDeleteGalleryItem(item.id, item.title)}
                      className="p-1 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Gallery Item Modal */}
          {isAddingGallery && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200">
                <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
                  <h4 className="font-bold text-stone-900 text-base">Thêm Tư Liệu Hiện Vật Mới</h4>
                  <button onClick={() => setIsAddingGallery(false)} className="p-1 text-stone-400 hover:text-stone-700">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSaveGalleryItem} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Tên Hiện Vật / Chi Tiết:</label>
                    <input
                      type="text"
                      value={galTitle}
                      onChange={(e) => setGalTitle(e.target.value)}
                      placeholder="Ví dụ: Vòng Bạc Chạm Khắc Chim Phượng"
                      className="w-full px-3 py-2 border rounded-xl"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Dân Tộc:</label>
                      <input
                        type="text"
                        value={galEthnic}
                        onChange={(e) => setGalEthnic(e.target.value)}
                        placeholder="Dao Đỏ"
                        className="w-full px-3 py-2 border rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Phân Loại:</label>
                      <select
                        value={galCategory}
                        onChange={(e) => setGalCategory(e.target.value as any)}
                        className="w-full px-3 py-2 border rounded-xl bg-white"
                      >
                        <option value="hoa_van">Hoa Văn & Họa Tiết Cổ</option>
                        <option value="trang_suc">Trang Sức Kim Hoàn</option>
                        <option value="det_nhuom">Kỹ Thuật Dệt & Nhuộm</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Link Ảnh Hiện Vật (URL):</label>
                    <input
                      type="text"
                      value={galUrl}
                      onChange={(e) => setGalUrl(e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 border rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Mô Tả Kỹ Thuật & Ý Nghĩa:</label>
                    <textarea
                      value={galCaption}
                      onChange={(e) => setGalCaption(e.target.value)}
                      rows={3}
                      placeholder="Chi tiết cách chế tác, chạm khắc hoặc ý nghĩa tâm linh..."
                      className="w-full px-3 py-2 border rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Nguồn Tư Liệu / Nghệ Nhân:</label>
                    <input
                      type="text"
                      value={galAuthor}
                      onChange={(e) => setGalAuthor(e.target.value)}
                      placeholder="Bảo tàng Dân tộc học hoặc Nghệ nhân..."
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>

                  <div className="pt-3 border-t flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingGallery(false)}
                      className="px-4 py-2 bg-stone-100 rounded-xl"
                    >
                      Hủy
                    </button>
                    <button type="submit" className="px-5 py-2 bg-emerald-800 text-white rounded-xl font-bold">
                      Lưu Vào Thư Viện
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
