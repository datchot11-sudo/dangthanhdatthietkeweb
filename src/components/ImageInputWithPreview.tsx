import React, { useState, useRef, useEffect } from 'react';
import { Upload, CheckCircle2, AlertCircle, RefreshCw, Sparkles, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { cleanImageUrl, readImageFileAsDataUrl } from '../utils/imageUtils';

interface ImageInputWithPreviewProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  aspectRatio?: 'square' | 'video' | 'portrait';
  presets?: { id: string; name: string; url: string; emoji?: string }[];
  presetTitle?: string;
}

export const ImageInputWithPreview: React.FC<ImageInputWithPreviewProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Dán link ảnh (https://...) hoặc tải ảnh từ máy',
  required = false,
  helpText,
  aspectRatio = 'video',
  presets,
  presetTitle
}) => {
  const [testStatus, setTestStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // When value changes, reset test status
  useEffect(() => {
    if (value && value.trim()) {
      setTestStatus('loading');
      setErrorMessage(null);
    } else {
      setTestStatus('idle');
      setErrorMessage(null);
    }
  }, [value]);

  const handleUrlChange = (raw: string) => {
    const cleaned = cleanImageUrl(raw);
    onChange(cleaned);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setTestStatus('loading');
      const dataUrl = await readImageFileAsDataUrl(file);
      onChange(dataUrl);
      setTestStatus('success');
      setErrorMessage(null);
    } catch (err) {
      setTestStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Lỗi khi tải ảnh từ máy');
    }
  };

  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square max-w-[120px]'
      : aspectRatio === 'portrait'
      ? 'aspect-[3/4] max-w-[140px]'
      : 'aspect-video max-w-[200px]';

  return (
    <div className="space-y-2 bg-stone-50/70 p-3 rounded-2xl border border-stone-200">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold text-stone-700">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        {testStatus === 'success' && (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Ảnh hiển thị tốt
          </span>
        )}
        {testStatus === 'error' && (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
            <AlertCircle className="w-3 h-3 text-rose-600" /> Link không tải được
          </span>
        )}
      </div>

      {/* Input bar with file upload button */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={value || ''}
            onChange={(e) => handleUrlChange(e.target.value)}
            onBlur={(e) => handleUrlChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 bg-white text-stone-900"
            required={required}
          />
        </div>

        {/* Upload file button */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept="image/*"
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="px-3 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all shrink-0 cursor-pointer"
          title="Chọn tệp ảnh từ máy tính hoặc điện thoại"
        >
          <Upload className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Tải Từ Máy</span>
        </button>
      </div>

      {/* Help text */}
      {helpText ? (
        <p className="text-[11px] text-stone-500 leading-normal">{helpText}</p>
      ) : (
        <p className="text-[11px] text-stone-400 leading-normal">
          Hỗ trợ link Unsplash, Google Drive (tự động nhận diện), Pinterest, Wikimedia hoặc tệp ảnh JPG/PNG/WEBP từ máy.
        </p>
      )}

      {/* Preset selector if available */}
      {presets && presets.length > 0 && (
        <div className="pt-1.5">
          <span className="text-[11px] font-bold text-stone-700 block mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {presetTitle || 'Chọn ảnh mẫu icon động vật cho tài khoản:'}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-48 overflow-y-auto pr-1">
            {presets.map((preset) => {
              const isSelected = value === preset.url;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => onChange(preset.url)}
                  className={`text-[11px] p-1.5 rounded-xl border transition-all flex items-center gap-2 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-emerald-800 text-white border-emerald-950 font-bold shadow-xs ring-2 ring-emerald-500/40'
                      : 'bg-white hover:bg-emerald-50 text-stone-700 border-stone-200 hover:border-emerald-300'
                  }`}
                >
                  <img
                    src={preset.url}
                    alt={preset.name}
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 rounded-full shrink-0 border border-stone-200/50 shadow-2xs"
                  />
                  <span className="truncate leading-tight">{preset.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Live Preview Box */}
      {value && value.trim() && (
        <div className="mt-2 pt-2 border-t border-stone-200">
          <div className="flex items-start gap-3">
            <div className={`relative rounded-xl overflow-hidden border border-stone-300 bg-stone-100 ${aspectClass} shrink-0 shadow-2xs flex items-center justify-center`}>
              <img
                src={value}
                alt="Xem trước ảnh"
                referrerPolicy="no-referrer"
                onLoad={() => {
                  setTestStatus('success');
                  setErrorMessage(null);
                }}
                onError={() => {
                  setTestStatus('error');
                  setErrorMessage('Không thể tải link ảnh này (có thể do bị chặn hotlink, sai đường dẫn, hoặc link riêng tư). Bạn hãy bấm "Tải Từ Máy" để chọn ảnh trực tiếp.');
                }}
                className="w-full h-full object-cover"
              />
              {testStatus === 'loading' && (
                <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-2xs flex items-center justify-center text-white">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                </div>
              )}
            </div>

            <div className="flex-1 text-xs">
              <span className="font-semibold text-stone-700 block mb-0.5">Khung Xem Trước Ảnh Trực Tiếp:</span>
              {testStatus === 'success' && (
                <p className="text-emerald-700 text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Ảnh tải hoàn hảo, sẽ hiển thị sắc nét trên website.
                </p>
              )}
              {testStatus === 'error' && (
                <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-[11px] leading-relaxed">
                  <p className="font-bold flex items-center gap-1 mb-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-600" />
                    Không thể hiển thị link ảnh này
                  </p>
                  <p className="text-rose-700">
                    {errorMessage || 'Đường dẫn ảnh bị lỗi hoặc máy chủ ảnh chặn hiển thị. Vui lòng bấm nút <strong>"Tải Từ Máy"</strong> để tải ảnh trực tiếp, hoặc dùng link khác.'}
                  </p>
                </div>
              )}
              {testStatus === 'loading' && (
                <p className="text-stone-500 text-[11px] animate-pulse">Đang kiểm tra và tải ảnh...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
