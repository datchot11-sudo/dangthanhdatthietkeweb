import React from 'react';
import { Sparkles, Compass, MapPin, Layers, Gem, Bot } from 'lucide-react';
import logoImg from '../assets/images/viet_heritage_logo_clean.png';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenAI: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAI }) => {
  return (
    <footer id="main_cultural_footer" className="bg-stone-900 text-stone-300 border-t border-emerald-900/30 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-8 border-b border-stone-800">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Logo Trang Phục Việt"
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif-cultural font-bold text-lg text-white block">
                  Trang Phục Việt
                </span>
                <span className="text-[11px] text-stone-400 font-normal italic font-sans block">
                  Di sản y phục & bản sắc văn hóa
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Nền tảng số lưu trữ, tôn vinh và lan tỏa vẻ đẹp trang phục truyền thống, bộ phụ kiện cổ truyền và cảnh sắc quê hương của 54 dân tộc anh em khắp dải đất hình chữ S.
            </p>
          </div>

          {/* Column 2: Danh Mục Di Sản Navigation */}
          <div>
            <h4 className="font-serif-cultural font-bold text-sm text-emerald-200 uppercase tracking-wider mb-3">
              Thanh Danh Mục Di Sản
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Trang Chủ</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('map')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-emerald-500" />
                  <span>Bản Đồ Trang Phục</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('region_search')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <Compass className="w-3 h-3 text-emerald-500" />
                  <span>Tìm Trang Phục Theo Từng Miền</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-emerald-500" />
                  <span>Danh Mục Trang Phục Các Dân Tộc</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('accessories')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <Gem className="w-3 h-3 text-emerald-500" />
                  <span>Bộ Sưu Tập Phụ Kiện</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-500" />
                  <span>Bài Viết & Bút Ký Di Sản</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Tiện Ích & Trợ Lý */}
          <div>
            <h4 className="font-serif-cultural font-bold text-sm text-emerald-200 uppercase tracking-wider mb-3">
              Tiện Ích & Quản Trị
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button onClick={onOpenAI} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Hỏi Đáp Trợ Lý AI Văn Hóa</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('customer_portal')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Trang Cá Nhân & Sổ Tay Nghiên Cứu</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin_portal')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Bảng Điều Khiển Quản Trị Viên (CMS)</span>
                </button>
              </li>
              <li>
                <span className="text-stone-400">So Sánh Đa Chiều Giữa Các Dân Tộc</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Sứ Mệnh Bảo Tồn */}
          <div className="space-y-3">
            <h4 className="font-serif-cultural font-bold text-sm text-emerald-200 uppercase tracking-wider mb-2">
              Sứ Mệnh Bảo Tồn
            </h4>
            <div className="p-3.5 bg-stone-800/90 rounded-2xl border border-stone-700/60 text-xs text-stone-300 leading-relaxed">
              <span className="font-semibold text-emerald-400 block mb-1">Tôn Vinh Hồn Dân Tộc:</span>
              Mỗi đường kim, mũi chỉ, hoa văn sáp ong hay chiếc kiềng bạc là một câu chuyện lịch sử. Cùng gìn giữ và lan tỏa tinh hoa văn hóa Việt Nam trường tồn.
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© 2025 S Trang Phục Việt. Tinh hoa di sản 54 dân tộc Việt Nam.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Dải đất hình chữ S • Bản sắc ngàn năm</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
