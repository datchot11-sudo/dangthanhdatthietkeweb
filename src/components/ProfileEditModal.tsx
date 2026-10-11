import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types/costume';
import { X, Check, User, Phone, MapPin, FileText, Sparkles, ShieldCheck, Shield } from 'lucide-react';
import { ImageInputWithPreview } from './ImageInputWithPreview';
import {
  ANIMAL_AVATAR_PRESETS,
  FALLBACK_AVATAR,
  FALLBACK_ADMIN_AVATAR,
  cleanImageUrl
} from '../utils/imageUtils';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onSave: (updated: UserProfile) => void;
  title?: string;
}

export const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  onClose,
  user,
  onSave,
  title
}) => {
  const [name, setName] = useState(user.name || '');
  const [role, setRole] = useState<'admin' | 'customer'>(user.role || 'customer');
  const [avatar, setAvatar] = useState(user.avatar || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [location, setLocation] = useState(user.location || '');
  const [bio, setBio] = useState(user.bio || '');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [avatarCategory, setAvatarCategory] = useState<'all' | 'cute' | 'royal' | 'brave'>('all');

  // Keep form fields synchronized when user or modal visibility changes
  useEffect(() => {
    if (isOpen) {
      setName(user.name || '');
      setRole(user.role || 'customer');
      setAvatar(user.avatar || '');
      setPhone(user.phone || '');
      setLocation(user.location || '');
      setBio(user.bio || '');
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const currentSelectedAnimal = ANIMAL_AVATAR_PRESETS.find((p) => p.url === avatar);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const cleanedAvatar = cleanImageUrl(avatar.trim()) || (role === 'admin' ? FALLBACK_ADMIN_AVATAR : FALLBACK_AVATAR);

    const updatedProfile: UserProfile = {
      ...user,
      name: name.trim(),
      role,
      avatar: cleanedAvatar,
      phone: phone.trim(),
      location: location.trim(),
      bio: bio.trim()
    };

    onSave(updatedProfile);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 600);
  };

  const modalTitle =
    title ||
    (role === 'admin'
      ? 'Chỉnh Sửa Hồ Sơ Quản Trị Viên (Admin)'
      : 'Chỉnh Sửa Thông Tin Cá Nhân (Khách Hàng)');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-lg overflow-hidden relative text-stone-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-teal-950 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Đóng"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-700/80 border border-emerald-400/50 flex items-center justify-center text-white shrink-0">
              {role === 'admin' ? <ShieldCheck className="w-5 h-5 text-emerald-200" /> : <User className="w-5 h-5 text-emerald-200" />}
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                {modalTitle}
              </h3>
              <p className="text-xs text-emerald-200">
                Cập nhật ảnh đại diện icon động vật, tên người dùng và quyền hạn
              </p>
            </div>
          </div>
        </div>

        {/* Success Alert */}
        {saveSuccess && (
          <div className="bg-emerald-50 border-b border-emerald-200 p-3 px-5 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-fade-in">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Đã lưu thông tin người dùng, ảnh đại diện và vai trò thành công!</span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Họ và Tên / Tên Người Dùng <span className="text-rose-500">*</span>
            </label>
            <div className="relative flex items-center">
              <User className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ví dụ: Nguyễn Thành Đạt hoặc Ban Quản Trị Di Sản"
                className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
              />
            </div>
          </div>

          {/* Role Selection (Admin vs Customer) */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Vai Trò & Quyền Hạn Tài Khoản <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('customer')}
                className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  role === 'customer'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-2 ring-emerald-500/20 shadow-xs'
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <User className="w-4 h-4 text-emerald-600" />
                <span>Khách Hàng (User)</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  role === 'admin'
                    ? 'bg-emerald-900 border-emerald-950 text-white font-bold ring-2 ring-emerald-500/30 shadow-xs'
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Quản Trị Viên (Admin)</span>
              </button>
            </div>
          </div>

          {/* Animal Avatar Showcase & Selection Gallery */}
          <div className="bg-stone-50/90 p-3.5 rounded-2xl border border-stone-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <label className="block text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Bộ Sưu Tập Icon Động Vật (14 Mẫu Đáng Yêu & Uy Nghi)
                </label>
                <p className="text-[11px] text-stone-500">
                  Bấm chọn trực tiếp icon động vật bên dưới làm ảnh đại diện cho tài khoản:
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
                {[
                  { key: 'all', label: 'Tất cả (14)' },
                  { key: 'royal', label: '👑 Admin / Uy nghi' },
                  { key: 'cute', label: '💖 Đáng yêu' },
                  { key: 'brave', label: '🌿 Dũng mãnh / Hiền hòa' }
                ].map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setAvatarCategory(cat.key as any)}
                    className={`text-[10px] px-2 py-0.5 rounded-lg border whitespace-nowrap transition-all cursor-pointer ${
                      avatarCategory === cat.key
                        ? 'bg-emerald-800 text-white border-emerald-950 font-bold shadow-2xs'
                        : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Animal Notice */}
            {currentSelectedAnimal && (
              <div className="bg-emerald-100/70 border border-emerald-300/80 px-3 py-1.5 rounded-xl flex items-center justify-between text-xs text-emerald-950 font-medium">
                <span className="flex items-center gap-1.5 truncate">
                  <span className="text-base">{currentSelectedAnimal.emoji}</span>
                  <span>Đang chọn icon: <strong>{currentSelectedAnimal.name}</strong></span>
                </span>
                <span className="text-[10px] bg-emerald-800 text-white px-2 py-0.5 rounded-md shrink-0">
                  Đã áp dụng
                </span>
              </div>
            )}

            {/* Animal Avatars Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 max-h-48 overflow-y-auto p-1.5 bg-white rounded-xl border border-stone-200">
              {ANIMAL_AVATAR_PRESETS.filter((p) => {
                if (avatarCategory === 'all') return true;
                if (avatarCategory === 'royal') return p.category === 'royal';
                if (avatarCategory === 'cute') return p.category === 'cute';
                if (avatarCategory === 'brave') return p.category === 'brave' || p.category === 'gentle';
                return true;
              }).map((preset) => {
                const isSelected = avatar === preset.url;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setAvatar(preset.url)}
                    className={`flex flex-col items-center p-1.5 rounded-xl border transition-all cursor-pointer group relative ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500/30 shadow-xs'
                        : 'border-transparent hover:border-stone-200 hover:bg-stone-50'
                    }`}
                    title={preset.name}
                  >
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-stone-200 group-hover:scale-105 transition-transform shadow-2xs">
                      <img
                        src={preset.url}
                        alt={preset.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-emerald-900/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white drop-shadow-md stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-stone-700 text-center truncate max-w-[60px] mt-1 font-medium leading-tight">
                      {preset.name.split(' ')[0]} {preset.name.split(' ')[1] || ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Avatar with Live Preview, File Upload and Presets */}
          <div>
            <ImageInputWithPreview
              label="Đường Dẫn Hoặc Tải Ảnh Riêng (Tùy Chọn)"
              value={avatar}
              onChange={setAvatar}
              placeholder="Dán link ảnh đại diện (https://...) hoặc tải ảnh từ máy"
              aspectRatio="square"
              helpText="Bạn có thể bấm chọn icon động vật ở bảng trên, hoặc dán link ảnh cá nhân / bấm 'Tải Từ Máy' để tải ảnh trực tiếp."
            />
          </div>

          {/* Phone & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Số Điện Thoại
              </label>
              <div className="relative flex items-center">
                <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0912 345 678"
                  className="w-full pl-8 pr-2 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Tỉnh / Thành Phố
              </label>
              <div className="relative flex items-center">
                <MapPin className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Hà Nội, TP.HCM, Huế..."
                  className="w-full pl-8 pr-2 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Giới Thiệu Bản Thân / Chức Danh
            </label>
            <div className="relative">
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={2}
                placeholder="Ví dụ: Người say mê tìm hiểu bản sắc y phục 54 dân tộc Việt Nam..."
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex items-center justify-end gap-2 border-t border-stone-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-all cursor-pointer"
            >
              Hủy Bỏ
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Lưu Thay Đổi</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
