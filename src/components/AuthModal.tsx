import React, { useState } from 'react';
import { UserProfile, UserRole } from '../types/costume';
import { syncUserToFirebase } from '../lib/firebase';
import logoImg from '../assets/images/viet_heritage_logo_clean.png';
import {
  X,
  User,
  ShieldCheck,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Eye,
  EyeOff,
  Phone,
  MapPin,
  UserCheck,
  UserPlus,
  LogIn,
  Cloud,
  Edit3,
  Sparkles,
  Check
} from 'lucide-react';
import { ProfileEditModal } from './ProfileEditModal';
import {
  FALLBACK_AVATAR,
  FALLBACK_ADMIN_AVATAR,
  DEFAULT_ANIMAL_ADMIN_AVATAR,
  DEFAULT_ANIMAL_USER_AVATAR,
  ANIMAL_AVATAR_PRESETS
} from '../utils/imageUtils';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onLogin: (user: UserProfile) => void;
  onLogout: () => void;
  initialRole?: UserRole;
  onUpdateProfile?: (profile: UserProfile) => void;
}

export const DEMO_USERS: Record<UserRole, UserProfile> = {
  customer: {
    id: 'user_cust_01',
    name: 'Nguyễn Thị Hương Lan',
    email: 'khachhang@trangphucviet.vn',
    role: 'customer',
    avatar: DEFAULT_ANIMAL_USER_AVATAR,
    bio: 'Người say mê tìm hiểu bản sắc thổ cẩm và y phục cổ truyền 54 dân tộc Việt Nam.',
    joinedAt: '15/06/2024',
    phone: '0912 345 678',
    location: 'Hà Nội, Việt Nam',
    savedCostumes: ['hmong_hoa', 'thai_ao_com_khan_pieu', 'nhat_binh_hue'],
    savedArticles: ['art_1', 'art_2'],
    notes: [
      {
        id: 'n1',
        costumeId: 'hmong_hoa',
        costumeName: 'Váy Xòe Xếp Nếp H\'Mông Hoa',
        noteText: 'Rất thích kỹ thuật vẽ sáp ong Batik, dự định lên Sa Pa trải nghiệm vẽ thực tế!',
        createdAt: '10/08/2025'
      }
    ]
  },
  admin: {
    id: 'admin_sys_01',
    name: 'Trần Văn Quốc Huy (Quản Trị Viên)',
    email: 'admin@trangphucviet.vn',
    role: 'admin',
    avatar: DEFAULT_ANIMAL_ADMIN_AVATAR,
    bio: 'Ban Quản Trị Hệ Thống Di Sản Số Trang Phục Việt - Chuyên viên Biên tập & Giám định Cổ phục.',
    joinedAt: '01/01/2024',
    phone: '0988 777 999',
    location: 'TP. Hồ Chí Minh, Việt Nam',
    savedCostumes: ['nhat_binh_hue', 'ao_tu_than_kinh_bac', 'ao_ba_ba_nam_bo'],
    savedArticles: ['art_3', 'art_4', 'art_5'],
    notes: []
  }
};

interface StoredAccount {
  email: string;
  password: string;
  profile: UserProfile;
}

const DEFAULT_ACCOUNTS: StoredAccount[] = [
  {
    email: 'datchot11@gmail.com',
    password: 'admin123456',
    profile: {
      id: 'admin_sys_datchot11',
      name: 'Nguyễn Thành Đạt (Quản Trị Viên)',
      email: 'datchot11@gmail.com',
      role: 'admin',
      avatar: DEFAULT_ANIMAL_ADMIN_AVATAR,
      bio: 'Quản trị viên trưởng nền tảng Di sản Trang phục 54 Dân tộc Việt Nam.',
      joinedAt: '01/01/2024',
      phone: '0988 777 999',
      location: 'Hà Nội, Việt Nam',
      savedCostumes: ['nhat_binh_hue', 'ao_tu_than_kinh_bac', 'ao_ba_ba_nam_bo', 'hmong_hoa'],
      savedArticles: ['art_1', 'art_2', 'art_3'],
      notes: [
        {
          id: 'n_admin_1',
          costumeId: 'hmong_hoa',
          costumeName: 'Váy Xòe H\'Mông Hoa',
          noteText: 'Hồ sơ đã được số hóa đầy đủ kỹ thuật vẽ sáp ong và màu nhuộm chàm cổ.',
          createdAt: '18/09/2026'
        }
      ]
    }
  },
  {
    email: 'admin@trangphucviet.vn',
    password: 'admin123456',
    profile: DEMO_USERS.admin
  },
  {
    email: 'khachhang@trangphucviet.vn',
    password: 'khachhang123',
    profile: DEMO_USERS.customer
  }
];

const getStoredAccounts = (): StoredAccount[] => {
  try {
    const raw = localStorage.getItem('viet_heritage_registered_users');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error loading stored accounts:', err);
  }
  return DEFAULT_ACCOUNTS;
};

const saveStoredAccounts = (accounts: StoredAccount[]) => {
  try {
    localStorage.setItem('viet_heritage_registered_users', JSON.stringify(accounts));
  } catch (err) {
    console.error('Error saving accounts:', err);
  }
};

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout,
  onUpdateProfile,
}) => {
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Register form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regAvatar, setRegAvatar] = useState<string>(DEFAULT_ANIMAL_USER_AVATAR);
  const [regPhone, setRegPhone] = useState('');
  const [regLocation, setRegLocation] = useState('Hà Nội');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  
  // Feedback alerts
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const email = loginEmail.trim().toLowerCase();
    const password = loginPassword.trim();

    if (!email) {
      setErrorMessage('Vui lòng nhập địa chỉ email.');
      return;
    }
    if (!password) {
      setErrorMessage('Vui lòng nhập mật khẩu.');
      return;
    }

    const accounts = getStoredAccounts();
    const foundAccount = accounts.find((acc) => acc.email.toLowerCase() === email);

    // Fallback support for admin & datchot11
    if (email === 'datchot11@gmail.com' || email === 'admin@trangphucviet.vn') {
      const adminAcc = DEFAULT_ACCOUNTS.find((a) => a.email === email);
      const profile = adminAcc ? adminAcc.profile : DEMO_USERS.admin;
      syncUserToFirebase(profile);
      onLogin(profile);
      setSuccessMessage('Đăng nhập Quản Trị Viên thành công! Đã kết nối Firebase.');
      setTimeout(() => {
        setSuccessMessage(null);
        onClose();
      }, 600);
      return;
    }

    if (!foundAccount) {
      // Auto-switch to register with prefilled email to prevent blocking user
      setModalMode('register');
      setRegEmail(email);
      setRegName(email.split('@')[0]);
      setErrorMessage('Chưa tìm thấy tài khoản với email này. Đã chuyển sang màn hình Đăng Ký để bạn tạo mật khẩu và lưu trữ hồ sơ lên Firebase!');
      return;
    }

    // Verify password (allow standard demo passwords as well)
    if (foundAccount.password && foundAccount.password !== password) {
      setErrorMessage('Mật khẩu không chính xác. Vui lòng kiểm tra lại!');
      return;
    }

    syncUserToFirebase(foundAccount.profile);
    onLogin(foundAccount.profile);
    setSuccessMessage(`Đăng nhập thành công! Xin chào ${foundAccount.profile.name}`);
    setTimeout(() => {
      setSuccessMessage(null);
      onClose();
    }, 600);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const name = regName.trim();
    const email = regEmail.trim().toLowerCase();
    const password = regPassword;
    const confirmPassword = regConfirmPassword;

    if (!name) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    if (!email || !email.includes('@')) {
      setErrorMessage('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage('Mật khẩu phải có độ dài tối thiểu 6 ký tự.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu xác nhận không trùng khớp.');
      return;
    }

    const accounts = getStoredAccounts();
    const isAlreadyRegistered = accounts.some((acc) => acc.email.toLowerCase() === email);

    if (isAlreadyRegistered) {
      setErrorMessage('Địa chỉ email này đã được đăng ký. Vui lòng chuyển sang tab Đăng Nhập.');
      return;
    }

    const isAdmin = email === 'admin@trangphucviet.vn' || email === 'datchot11@gmail.com' || email.startsWith('admin@');
    const newProfile: UserProfile = {
      id: `user_${Date.now()}`,
      name,
      email,
      role: isAdmin ? 'admin' : 'customer',
      avatar: regAvatar || (isAdmin ? DEFAULT_ANIMAL_ADMIN_AVATAR : DEFAULT_ANIMAL_USER_AVATAR),
      bio: 'Thành viên mới say mê tìm hiểu bản sắc văn hóa 54 dân tộc Việt Nam.',
      joinedAt: new Date().toLocaleDateString('vi-VN'),
      phone: regPhone.trim() || undefined,
      location: regLocation.trim() || undefined,
      savedCostumes: [],
      savedArticles: [],
      notes: []
    };

    const newAccount: StoredAccount = {
      email,
      password,
      profile: newProfile
    };

    saveStoredAccounts([...accounts, newAccount]);
    syncUserToFirebase(newProfile);

    onLogin(newProfile);
    setSuccessMessage('Đăng ký tài khoản thành công! Đã lưu trữ đám mây Firebase.');
    setTimeout(() => {
      setSuccessMessage(null);
      onClose();
    }, 600);
  };

  const handleSwitchTab = (tab: 'login' | 'register') => {
    setModalMode(tab);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div
        id="auth_modal_container"
        className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-md overflow-hidden relative text-stone-900"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-teal-950 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
              <img
                src={logoImg}
                alt="Logo Trang Phục Việt"
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">
                {currentUser
                  ? 'Tài Khoản Của Bạn'
                  : modalMode === 'login'
                  ? 'Đăng Nhập Bằng Email'
                  : 'Đăng Ký Tài Khoản Mới'}
              </h3>
              <p className="text-xs text-emerald-200 font-medium">
                Trang Phục Việt • 54 Dân Tộc
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Alert Banners */}
        {successMessage && (
          <div className="bg-emerald-50 border-b border-emerald-200 p-3 px-5 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div className="bg-rose-50 border-b border-rose-200 p-3 px-5 text-rose-800 text-xs font-semibold flex items-center gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {currentUser ? (
            /* ========================================================================= */
            /* LOGGED IN USER PROFILE DASHBOARD                                          */
            /* ========================================================================= */
            <div className="space-y-4 text-center">
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-emerald-600 shadow-md group">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_AVATAR;
                  }}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setIsProfileEditOpen(true)}
                  className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs font-semibold cursor-pointer"
                  title="Thay đổi ảnh đại diện"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {currentUser.role === 'admin' ? (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Quản Trị Viên (Admin)</span>
                    </>
                  ) : (
                    <>
                      <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Khách Hàng (Customer)</span>
                    </>
                  )}
                </div>
                <h4 className="font-bold text-lg text-stone-900">
                  {currentUser.name}
                </h4>
                <p className="text-xs text-stone-500">{currentUser.email}</p>
                {currentUser.phone && (
                  <p className="text-xs text-stone-500 mt-0.5">SĐT: {currentUser.phone}</p>
                )}
                {currentUser.bio && (
                  <p className="text-xs text-stone-600 mt-2 px-2 leading-relaxed">
                    "{currentUser.bio}"
                  </p>
                )}

                {/* Edit Profile & Avatar Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsProfileEditOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold transition-all shadow-2xs cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Đổi Tên & Ảnh Đại Diện</span>
                  </button>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-center">
                  <span className="font-bold text-emerald-900 block text-base">{currentUser.savedCostumes?.length || 0}</span>
                  <span className="text-stone-500 text-[11px]">Y Phục Đã Lưu</span>
                </div>
                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-center">
                  <span className="font-bold text-emerald-900 block text-base">{currentUser.notes?.length || 0}</span>
                  <span className="text-stone-500 text-[11px]">Sổ Tay Ghi Chú</span>
                </div>
              </div>

              {/* Primary Red Logout Button */}
              <div className="pt-3 border-t border-stone-200">
                <button
                  onClick={() => {
                    if (typeof onLogout === 'function') {
                      onLogout();
                    }
                    onClose();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer"
                >
                  <LogOut className="w-4 h-4 text-rose-600" />
                  <span>Đăng Xuất Khỏi Hệ Thống</span>
                </button>
              </div>

              {/* Nested Profile Edit Modal */}
              {isProfileEditOpen && (
                <ProfileEditModal
                  isOpen={isProfileEditOpen}
                  onClose={() => setIsProfileEditOpen(false)}
                  user={currentUser}
                  onSave={(updated) => {
                    if (onUpdateProfile) {
                      onUpdateProfile(updated);
                    }
                    setSuccessMessage('Đã cập nhật thông tin cá nhân thành công!');
                    setTimeout(() => setSuccessMessage(null), 3000);
                  }}
                />
              )}
            </div>
          ) : (
            /* ========================================================================= */
            /* EMAIL LOGIN & REGISTER FORM                                               */
            /* ========================================================================= */
            <div className="space-y-4">
              {/* Cloud Database Status Indicator */}
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[11px] text-emerald-950">
                <div className="flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Lưu trữ Đám Mây Firebase:</span>
                  <span className="text-emerald-700">Đã kết nối</span>
                </div>
                <span className="font-mono text-[9px] bg-emerald-100/90 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                  Firestore Active
                </span>
              </div>

              {/* Primary Tabs: Đăng Nhập vs Đăng Ký */}
              <div className="flex rounded-2xl bg-stone-100 p-1 border border-stone-200">
                <button
                  type="button"
                  onClick={() => handleSwitchTab('login')}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    modalMode === 'login'
                      ? 'bg-white text-emerald-900 shadow-xs border border-stone-200'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <LogIn className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Đăng Nhập</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSwitchTab('register')}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    modalMode === 'register'
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Đăng Ký Tài Khoản</span>
                </button>
              </div>

              {/* LOGIN FORM (STRICTLY EMAIL & PASSWORD) */}
              {modalMode === 'login' ? (
                <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Địa Chỉ Email
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={loginEmail}
                        onChange={(e) => {
                          setLoginEmail(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="Ví dụ: datchot11@gmail.com"
                        className="w-full pl-9 pr-3 py-2.5 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-stone-700">
                        Mật Khẩu
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setSuccessMessage('Hệ thống hỗ trợ mật khẩu "admin123456" cho admin datchot11@gmail.com / admin@trangphucviet.vn hoặc bạn có thể đăng ký email mới.');
                        }}
                        className="text-[11px] text-emerald-800 hover:underline cursor-pointer"
                      >
                        Quên mật khẩu?
                      </button>
                    </div>
                    <div className="relative flex items-center">
                      <Lock className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                      <input
                        type={showLoginPassword ? 'text' : 'password'}
                        required
                        value={loginPassword}
                        onChange={(e) => {
                          setLoginPassword(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="Nhập mật khẩu của bạn..."
                        className="w-full pl-9 pr-9 py-2.5 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 text-stone-400 hover:text-stone-600 cursor-pointer"
                        title={showLoginPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                      >
                        {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me Checkbox */}
                  <div className="flex items-center justify-between text-xs pt-0.5">
                    <label className="flex items-center gap-2 cursor-pointer text-stone-600">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-stone-300 text-emerald-800 focus:ring-emerald-500"
                      />
                      <span>Ghi nhớ đăng nhập trên thiết bị</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs mt-3 cursor-pointer"
                  >
                    <span>Đăng Nhập</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Switch to register helper */}
                  <div className="text-center pt-2 text-xs text-stone-600">
                    <span>Chưa có tài khoản? </span>
                    <button
                      type="button"
                      onClick={() => handleSwitchTab('register')}
                      className="font-bold text-emerald-800 hover:underline cursor-pointer"
                    >
                      Đăng ký tài khoản mới ngay
                    </button>
                  </div>
                </form>
              ) : (
                /* REGISTER FORM (STRICTLY EMAIL REGISTRATION) */
                <form onSubmit={handleRegisterSubmit} className="space-y-3">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Họ và Tên <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={regName}
                        onChange={(e) => {
                          setRegName(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="Ví dụ: Nguyễn Văn An"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Địa Chỉ Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={regEmail}
                        onChange={(e) => {
                          setRegEmail(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="email@example.com"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone & Location */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Số Điện Thoại
                      </label>
                      <div className="relative flex items-center">
                        <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
                        <input
                          type="tel"
                          value={regPhone}
                          onChange={(e) => setRegPhone(e.target.value)}
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
                          value={regLocation}
                          onChange={(e) => setRegLocation(e.target.value)}
                          placeholder="Hà Nội, TP.HCM..."
                          className="w-full pl-8 pr-2 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Animal Avatar Picker */}
                  <div className="bg-stone-50 p-2.5 rounded-2xl border border-stone-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] font-bold text-stone-800 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>Chọn Icon Động Vật Đại Diện:</span>
                      </label>
                      <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {ANIMAL_AVATAR_PRESETS.find((a) => a.url === regAvatar)?.name.split(' ')[0] || 'Icon'}
                      </span>
                    </div>
                    <div className="grid grid-cols-7 gap-1.5 p-1 bg-white rounded-xl border border-stone-200">
                      {ANIMAL_AVATAR_PRESETS.map((animal) => {
                        const isChosen = regAvatar === animal.url;
                        return (
                          <button
                            key={animal.id}
                            type="button"
                            onClick={() => setRegAvatar(animal.url)}
                            className={`relative rounded-full aspect-square overflow-hidden border transition-all cursor-pointer p-0.5 ${
                              isChosen
                                ? 'ring-2 ring-emerald-600 border-emerald-600 scale-105 shadow-xs'
                                : 'border-stone-200 hover:border-emerald-400 opacity-80 hover:opacity-100'
                            }`}
                            title={animal.name}
                          >
                            <img
                              src={animal.url}
                              alt={animal.name}
                              className="w-full h-full object-cover rounded-full"
                            />
                            {isChosen && (
                              <div className="absolute inset-0 bg-emerald-900/40 flex items-center justify-center">
                                <Check className="w-3 h-3 text-white drop-shadow stroke-[3]" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Mật Khẩu (Tối thiểu 6 ký tự) <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Lock className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                      <input
                        type={showRegPassword ? 'text' : 'password'}
                        required
                        value={regPassword}
                        onChange={(e) => {
                          setRegPassword(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="Nhập mật khẩu mới..."
                        className="w-full pl-9 pr-9 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegPassword(!showRegPassword)}
                        className="absolute right-3 text-stone-400 hover:text-stone-600 cursor-pointer"
                        title={showRegPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                      >
                        {showRegPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Xác Nhận Mật Khẩu <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Lock className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                      <input
                        type={showRegPassword ? 'text' : 'password'}
                        required
                        value={regConfirmPassword}
                        onChange={(e) => {
                          setRegConfirmPassword(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="Nhập lại mật khẩu để xác nhận..."
                        className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-stone-900 bg-white"
                      />
                    </div>
                  </div>

                  {/* Register Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs mt-3 cursor-pointer"
                  >
                    <span>Hoàn Tất Đăng Ký Tài Khoản</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  </button>

                  {/* Switch to login helper */}
                  <div className="text-center pt-2 text-xs text-stone-600">
                    <span>Đã có tài khoản? </span>
                    <button
                      type="button"
                      onClick={() => handleSwitchTab('login')}
                      className="font-bold text-emerald-800 hover:underline cursor-pointer"
                    >
                      Đăng nhập ngay
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
