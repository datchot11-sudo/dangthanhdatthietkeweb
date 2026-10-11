import React, { useState, useRef, useEffect } from 'react';
import {
  Home,
  MapPin,
  Compass,
  Layers,
  Gem,
  Bot,
  Heart,
  Scale,
  Search,
  BookOpen,
  User,
  ShieldCheck,
  UserCheck,
  LogIn,
  LogOut,
  ChevronDown,
  Sparkles,
  ArrowRightLeft,
  Calendar,
  Image as ImageIcon,
  Award,
  Edit3
} from 'lucide-react';
import { UserProfile, UserRole } from '../types/costume';
import logoImg from '../assets/images/viet_heritage_logo_clean.png';
import { FALLBACK_AVATAR, FALLBACK_ADMIN_AVATAR, handleImageFallback } from '../utils/imageUtils';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  favoritesCount: number;
  openFavoritesModal: () => void;
  compareCount: number;
  openCompareModal: () => void;
  openAIModal: () => void;
  globalSearchQuery: string;
  setGlobalSearchQuery: (query: string) => void;
  currentUser: UserProfile | null;
  openAuthModal: () => void;
  onLogout: () => void;
  onQuickLogin?: (role: UserRole) => void;
  onOpenProfileEdit?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  favoritesCount,
  openFavoritesModal,
  compareCount,
  openCompareModal,
  openAIModal,
  globalSearchQuery,
  setGlobalSearchQuery,
  currentUser,
  openAuthModal,
  onLogout,
  onQuickLogin,
  onOpenProfileEdit,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang Chủ', icon: Home },
    { id: 'festivals', label: 'Lịch Lễ Hội', icon: Calendar },
    { id: 'gallery', label: 'Thư Viện Cận Cảnh', icon: ImageIcon },
    { id: 'quiz', label: 'Đố Vui Di Sản', icon: Award },
    { id: 'map', label: 'Bản Đồ Trang Phục', icon: MapPin },
    { id: 'region_search', label: 'Tìm Theo Miền', icon: Compass },
    { id: 'catalog', label: '54 Dân Tộc', icon: Layers },
    { id: 'accessories', label: 'Phụ Kiện', icon: Gem },
    { id: 'articles', label: 'Bài Viết Di Sản', icon: BookOpen },
  ];

  // Dynamic additional tabs
  if (currentUser) {
    if (currentUser.role === 'admin') {
      navItems.push({ id: 'admin_portal', label: 'Trang Quản Trị Viên', icon: ShieldCheck });
    } else {
      navItems.push({ id: 'customer_portal', label: 'Trang Khách Hàng', icon: UserCheck });
    }
  }

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (globalSearchQuery.trim()) {
      if (activeTab !== 'catalog' && activeTab !== 'region_search' && activeTab !== 'accessories') {
        setActiveTab('catalog');
      }
    }
  };

  return (
    <header id="main_header" className="sticky top-0 z-40 bg-white shadow-xs border-b border-stone-200/90">
      {/* TIER 1: Top Bar (Logo, Search Bar, Fast Actions & Auth) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo Brand */}
          <div
            id="brand_logo_button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer shrink-0 group select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full group-hover:scale-105 transition-transform overflow-hidden shrink-0 flex items-center justify-center">
              <img
                src={logoImg}
                alt="Logo Trang Phục Việt"
                className="w-full h-full object-contain rounded-full drop-shadow-xs"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-cultural font-bold text-sm sm:text-base md:text-lg text-stone-900 tracking-tight whitespace-nowrap">
                  Trang Phục Việt
                </span>
                <span className="hidden xl:inline-block px-2 py-0.2 text-[9px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 rounded-full border border-emerald-300/50">
                  54 Dân Tộc
                </span>
              </div>
              <p className="text-xs text-stone-500 font-normal italic font-sans hidden sm:block">
                Di sản y phục & bản sắc văn hóa
              </p>
            </div>
          </div>

          {/* Direct Search Bar in Header */}
          <form
            onSubmit={handleSearchSubmit}
            className={`flex-1 max-w-md mx-2 relative transition-all duration-200 ${
              isSearchFocused ? 'ring-2 ring-emerald-600/30' : ''
            }`}
          >
            <div className="relative flex items-center bg-stone-100 hover:bg-stone-50 focus-within:bg-white rounded-full border border-stone-300/80 px-3 py-1.5 transition-colors">
              <Search className="w-4 h-4 text-stone-400 shrink-0 mr-2" />
              <input
                type="text"
                value={globalSearchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onChange={(e) => {
                  setGlobalSearchQuery(e.target.value);
                }}
                placeholder="Tìm dân tộc (H'Mông, Thái, Dao, Kinh, Chăm...), phụ kiện, vùng miền..."
                className="w-full bg-transparent border-0 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none"
              />
              {globalSearchQuery && (
                <button
                  type="button"
                  onClick={() => setGlobalSearchQuery('')}
                  className="text-xs text-stone-400 hover:text-stone-700 ml-1 px-1"
                >
                  ✕
                </button>
              )}
            </div>
          </form>

          {/* Header Action Buttons & Auth System */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Compare Button */}
            <button
              id="header_compare_btn"
              onClick={openCompareModal}
              title="So sánh trang phục"
              className="relative p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-all"
            >
              <Scale className="w-4 h-4" />
              {compareCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-700 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Favorites Button */}
            <button
              id="header_favorites_btn"
              onClick={openFavoritesModal}
              title="Bộ sưu tập đã lưu"
              className="relative p-2 rounded-full bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-700 transition-all"
            >
              <Heart className="w-4 h-4" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* AI Assistant Button */}
            <button
              id="header_ai_assistant_btn"
              onClick={openAIModal}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-800 to-teal-900 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all"
            >
              <Bot className="w-3.5 h-3.5 text-emerald-200" />
              <span>Trợ Lý AI</span>
            </button>

            {/* AUTH SECTION: Clear Login & Logout Controls for Customer & Admin */}
            {currentUser ? (
              /* LOGGED IN USER STATE */
              <div className="relative" ref={userMenuRef}>
                <button
                  id="header_user_profile_btn"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full border transition-all shadow-2xs ${
                    currentUser.role === 'admin'
                      ? 'bg-emerald-950 text-emerald-200 border-emerald-500/60 hover:bg-emerald-900'
                      : 'bg-emerald-50 text-emerald-950 border-emerald-300 hover:bg-emerald-100'
                  }`}
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    referrerPolicy="no-referrer"
                    onError={(e) =>
                      handleImageFallback(
                        e,
                        currentUser.role === 'admin' ? FALLBACK_ADMIN_AVATAR : FALLBACK_AVATAR
                      )
                    }
                    className="w-6 h-6 rounded-full object-cover border border-white"
                  />
                  <div className="text-left hidden sm:block">
                    <span className="text-xs font-bold block max-w-[100px] truncate leading-tight">
                      {currentUser.name}
                    </span>
                    <span className="text-[10px] block opacity-80 leading-none">
                      {currentUser.role === 'admin' ? 'Quản Trị Viên' : 'Khách Hàng'}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 ml-0.5" />
                </button>

                {/* User Dropdown Menu with Quick Logout & Role Switch */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 z-50 animate-fade-in text-stone-900">
                    <div className="px-4 py-2 border-b border-stone-100">
                      <p className="text-xs font-bold text-stone-900 truncate">{currentUser.name}</p>
                      <p className="text-[11px] text-stone-500 truncate">{currentUser.email}</p>
                      <span className={`inline-flex items-center gap-1 mt-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        currentUser.role === 'admin'
                          ? 'bg-emerald-900 text-emerald-100'
                          : 'bg-emerald-100 text-emerald-900'
                      }`}>
                        {currentUser.role === 'admin' ? (
                          <>
                            <ShieldCheck className="w-3 h-3 text-emerald-300" /> Quản Trị Viên (Admin)
                          </>
                        ) : (
                          <>
                            <User className="w-3 h-3 text-emerald-700" /> Khách Hàng (Customer)
                          </>
                        )}
                      </span>
                    </div>

                    <div className="py-1">
                      {/* Edit Profile & Avatar button */}
                      <button
                        onClick={() => {
                          if (onOpenProfileEdit) {
                            onOpenProfileEdit();
                          }
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-xs font-semibold hover:bg-emerald-50 flex items-center gap-2 text-emerald-800 border-b border-stone-100 cursor-pointer"
                      >
                        <Edit3 className="w-4 h-4 text-emerald-600" />
                        <span>
                          {currentUser.role === 'admin'
                            ? 'Sửa Tên & Ảnh Đại Diện Admin'
                            : 'Sửa Tên & Ảnh Đại Diện'}
                        </span>
                      </button>

                      {currentUser.role === 'admin' ? (
                        <button
                          onClick={() => {
                            setActiveTab('admin_portal');
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-xs font-semibold hover:bg-stone-50 flex items-center gap-2 text-emerald-950"
                        >
                          <ShieldCheck className="w-4 h-4 text-emerald-700" />
                          <span>Vào Trang Quản Trị Hệ Thống</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setActiveTab('customer_portal');
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-xs font-semibold hover:bg-stone-50 flex items-center gap-2 text-stone-800"
                        >
                          <User className="w-4 h-4 text-emerald-700" />
                          <span>Vào Trang Cá Nhân Khách Hàng</span>
                        </button>
                      )}

                      {/* Switch Role Fast Button */}
                      {onQuickLogin && (
                        <button
                          onClick={() => {
                            if (currentUser.role === 'admin') {
                              onQuickLogin('customer');
                              setActiveTab('customer_portal');
                            } else {
                              onQuickLogin('admin');
                              setActiveTab('admin_portal');
                            }
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-xs text-stone-700 hover:bg-stone-50 flex items-center gap-2"
                        >
                          <ArrowRightLeft className="w-4 h-4 text-stone-500" />
                          <span>
                            {currentUser.role === 'admin'
                              ? 'Đổi sang Khách Hàng'
                              : 'Đổi sang Quản Trị Viên'}
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Dedicated Logout Button */}
                    <div className="pt-1 border-t border-stone-100">
                      <button
                        onClick={() => {
                          if (typeof onLogout === 'function') {
                            onLogout();
                          }
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-xs font-semibold text-rose-700 hover:bg-rose-50 flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4 text-rose-600" />
                        <span>Đăng Xuất Khỏi Tài Khoản</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* LOGGED OUT STATE: Only "Đăng Nhập" button as requested */
              <div className="flex items-center">
                <button
                  id="header_login_btn"
                  onClick={openAuthModal}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-900 hover:from-emerald-600 hover:to-emerald-800 text-white text-xs font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer"
                >
                  <LogIn className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Đăng Nhập</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TIER 2: Dedicated Horizontal Sub-Navbar under the Logo Bar */}
      <div className="bg-stone-50 border-t border-stone-200 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 sm:gap-2 py-1.5 min-w-max">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeTab === item.id;
              const isAdminTab = item.id === 'admin_portal';
              const isCustomerTab = item.id === 'customer_portal';

              return (
                <button
                  key={item.id}
                  id={`subnav_${item.id}_btn`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? isAdminTab
                        ? 'bg-emerald-950 text-emerald-200 shadow-xs ring-1 ring-emerald-400'
                        : isCustomerTab
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'bg-emerald-800 text-white shadow-xs'
                      : isAdminTab
                      ? 'bg-emerald-100 text-emerald-950 hover:bg-emerald-200 border border-emerald-300'
                      : isCustomerTab
                      ? 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200'
                      : 'text-stone-700 hover:text-emerald-950 hover:bg-stone-200/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isAdminTab ? 'text-emerald-400' : ''}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Quick Auth Status Indicator & Switch Link in Nav Bar */}
            <div className="ml-auto flex items-center gap-2 pl-2">
              {currentUser ? (
                <div className="flex items-center gap-1.5 text-[11px] text-stone-600">
                  <span>Đang đăng nhập:</span>
                  <span className={`font-bold px-2 py-0.5 rounded-md ${
                    currentUser.role === 'admin'
                      ? 'bg-emerald-900 text-emerald-100'
                      : 'bg-emerald-100 text-emerald-900'
                  }`}>
                    {currentUser.role === 'admin' ? 'Quản Trị Viên' : 'Khách Hàng'}
                  </span>
                  <button
                    onClick={() => {
                      if (typeof onLogout === 'function') {
                        onLogout();
                      }
                    }}
                    className="text-rose-700 hover:text-rose-900 font-semibold hover:underline flex items-center gap-0.5 ml-1"
                    title="Đăng xuất khỏi hệ thống"
                  >
                    <LogOut className="w-3 h-3" />
                    <span>Đăng xuất</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={openAuthModal}
                  className="text-[11px] font-semibold text-emerald-900 hover:underline px-2 flex items-center gap-1 cursor-pointer"
                >
                  <span>Đăng Nhập</span>
                  <span className="text-emerald-600">→</span>
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
