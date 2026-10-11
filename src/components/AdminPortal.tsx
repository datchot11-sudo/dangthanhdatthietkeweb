import React, { useState } from 'react';
import {
  Costume,
  Article,
  Accessory,
  RegionInfo,
  CulturalRegionKey,
  OccasionType,
  GenderType,
  Spotlight,
  Festival,
  GalleryItem,
  UserProfile,
  UserRole
} from '../types/costume';
import { AdminPromotionalManager } from './AdminPromotionalManager';
import { ImageInputWithPreview } from './ImageInputWithPreview';
import { ProfileEditModal } from './ProfileEditModal';
import {
  FALLBACK_ADMIN_AVATAR,
  FALLBACK_AVATAR,
  FALLBACK_HERITAGE_IMAGE,
  handleImageFallback,
  cleanImageUrl,
  DEFAULT_ANIMAL_ADMIN_AVATAR,
  DEFAULT_ANIMAL_USER_AVATAR
} from '../utils/imageUtils';
import {
  ShieldCheck,
  Edit,
  Trash2,
  Plus,
  Save,
  RotateCcw,
  Sparkles,
  BookOpen,
  Gem,
  Layers,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Eye,
  FileText,
  Search,
  X,
  LogOut,
  User,
  Calendar,
  Users,
  Shield,
  Phone,
  Mail
} from 'lucide-react';

interface AdminPortalProps {
  costumes: Costume[];
  articles: Article[];
  spotlights?: Spotlight[];
  festivals?: Festival[];
  galleryItems?: GalleryItem[];
  currentUser?: UserProfile | null;
  onUpdateProfile?: (profile: UserProfile) => void;
  onUpdateCostumes: (updated: Costume[]) => void;
  onUpdateArticles: (updated: Article[]) => void;
  onUpdateSpotlights?: (updated: Spotlight[]) => void;
  onUpdateFestivals?: (updated: Festival[]) => void;
  onUpdateGalleryItems?: (updated: GalleryItem[]) => void;
  onResetToDefault: () => void;
  onLogout?: () => void;
  onSwitchToCustomer?: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  costumes,
  articles,
  spotlights = [],
  festivals = [],
  galleryItems = [],
  currentUser,
  onUpdateProfile,
  onUpdateCostumes,
  onUpdateArticles,
  onUpdateSpotlights,
  onUpdateFestivals,
  onUpdateGalleryItems,
  onResetToDefault,
  onLogout,
  onSwitchToCustomer,
}) => {
  const [activeTab, setActiveTab] = useState<'costumes' | 'promotions' | 'articles' | 'users' | 'accessories' | 'system'>('costumes');
  const [searchQuery, setSearchQuery] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // In-app confirmation dialog (replaces window.confirm for iframe resilience)
  const [confirmAction, setConfirmAction] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  // Profile Edit modal for Admin
  const [isEditAdminProfileOpen, setIsEditAdminProfileOpen] = useState(false);
  const [editingAccountProfile, setEditingAccountProfile] = useState<UserProfile | null>(null);

  // Accounts state
  const [registeredAccounts, setRegisteredAccounts] = useState<Array<{ email: string; profile: UserProfile }>>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_registered_users');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return [
      {
        email: 'datchot11@gmail.com',
        profile: {
          id: 'admin_sys_datchot11',
          name: 'Nguyễn Thành Đạt (Quản Trị Viên)',
          email: 'datchot11@gmail.com',
          role: 'admin',
          avatar: currentUser?.avatar || DEFAULT_ANIMAL_ADMIN_AVATAR,
          bio: 'Quản trị viên trưởng nền tảng Di sản Trang phục 54 Dân tộc Việt Nam.',
          joinedAt: '01/01/2024',
          phone: '0988 777 999',
          location: 'Hà Nội, Việt Nam'
        }
      },
      {
        email: 'admin@trangphucviet.vn',
        profile: {
          id: 'admin_sys_01',
          name: 'Trần Văn Quốc Huy (Quản Trị Viên)',
          email: 'admin@trangphucviet.vn',
          role: 'admin',
          avatar: DEFAULT_ANIMAL_ADMIN_AVATAR,
          bio: 'Ban Quản Trị Hệ Thống Di Sản Số Trang Phục Việt - Chuyên viên Biên tập & Giám định Cổ phục.',
          joinedAt: '01/01/2024',
          phone: '0988 777 999',
          location: 'TP. Hồ Chí Minh, Việt Nam'
        }
      },
      {
        email: 'khachhang@trangphucviet.vn',
        profile: {
          id: 'user_cust_01',
          name: 'Nguyễn Thị Hương Lan',
          email: 'khachhang@trangphucviet.vn',
          role: 'customer',
          avatar: DEFAULT_ANIMAL_USER_AVATAR,
          bio: 'Người say mê tìm hiểu bản sắc thổ cẩm và y phục cổ truyền 54 dân tộc Việt Nam.',
          joinedAt: '15/06/2024',
          phone: '0912 345 678',
          location: 'Hà Nội, Việt Nam'
        }
      }
    ];
  });

  const saveAccounts = (newAccounts: Array<{ email: string; profile: UserProfile }>) => {
    setRegisteredAccounts(newAccounts);
    try {
      localStorage.setItem('viet_heritage_registered_users', JSON.stringify(newAccounts));
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleUserRole = (email: string) => {
    const updated = registeredAccounts.map((acc) => {
      if (acc.email === email) {
        const nextRole: UserRole = acc.profile.role === 'admin' ? 'customer' : 'admin';
        const updatedProf: UserProfile = { ...acc.profile, role: nextRole };
        if (currentUser && currentUser.email === email && onUpdateProfile) {
          onUpdateProfile(updatedProf);
        }
        return { ...acc, profile: updatedProf };
      }
      return acc;
    });
    saveAccounts(updated);
    showToast(`Đã thay đổi quyền hạn tài khoản "${email}" thành công!`);
  };

  // Editing state for Costume
  const [editingCostume, setEditingCostume] = useState<Costume | null>(null);
  const [isCreatingNewCostume, setIsCreatingNewCostume] = useState(false);

  // Editing state for Article
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isCreatingNewArticle, setIsCreatingNewArticle] = useState(false);

  const showToast = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  // Costume CRUD Handlers
  const handleSaveCostume = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCostume) return;

    if (isCreatingNewCostume) {
      onUpdateCostumes([editingCostume, ...costumes]);
      showToast(`Đã thêm thành công trang phục: "${editingCostume.name}"`);
    } else {
      const updated = costumes.map((c) => (c.id === editingCostume.id ? editingCostume : c));
      onUpdateCostumes(updated);
      showToast(`Đã lưu cập nhật cho: "${editingCostume.name}"`);
    }
    setEditingCostume(null);
    setIsCreatingNewCostume(false);
  };

  const handleDeleteCostume = (id: string, name: string) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa trang phục "${name}" khỏi hệ thống?`)) {
      const updated = costumes.filter((c) => c.id !== id);
      onUpdateCostumes(updated);
      showToast(`Đã xóa trang phục: "${name}"`);
    }
  };

  const handleStartNewCostume = () => {
    const newId = `costume_custom_${Date.now()}`;
    const newCostume: Costume = {
      id: newId,
      name: 'Bộ Y Phục Mới',
      ethnicGroup: 'Dân Tộc Mới',
      languageFamily: 'H\'Mông - Dao',
      region: 'tay_bac',
      regionName: 'Vùng Tây Bắc',
      provinces: ['Hà Giang', 'Lào Cai'],
      gender: 'nu',
      occasions: ['le_hoi', 'le_cuoi'],
      summary: 'Mô tả chi tiết về nguồn gốc, giá trị văn hóa và đặc trưng mỹ thuật của bộ trang phục...',
      coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      badge: 'Di Sản Văn Hóa Cổ Truyền',
      material: ['Vải lanh tự nhiên', 'Sợi tơ tằm', 'Chàm rừng'],
      mainColors: [
        { name: 'Xanh Chàm Thẳm', hex: '#1E293B', meaning: 'Màu của rừng già và sự bền bỉ' },
        { name: 'Đỏ Thổ Cẩm', hex: '#BE123C', meaning: 'Màu của sự sống và may mắn' }
      ],
      costumeLayers: [
        {
          id: 'l1',
          partName: 'Áo Ngắn / Áo Thân Trên',
          position: 'than_tren',
          description: 'Áo may thủ công thêu hoa văn chỉ ngũ sắc',
          craftTechnique: 'Thêu tay truyền thống',
          symbolism: 'Biểu trưng cho sự che chở của gia đình'
        }
      ],
      accessories: [
        {
          id: 'acc1',
          name: 'Khăn Vấn Thổ Cẩm',
          category: 'khan_mu',
          description: 'Khăn cuốn quanh đầu đính đồng xu bạc',
          spiritualMeaning: 'Xua đuổi điềm xấu, che chở linh hồn',
          wearingStyle: 'Quấn tròn nhiều lớp trên đỉnh đầu'
        }
      ],
      patternsAndMotifs: [
        {
          name: 'Hoa Văn Mặt Trời & Kỷ Hà',
          symbolMeaning: 'Ước vọng mùa màng tươi tốt và ánh sáng vũ trụ',
          historicalOrigin: 'Tích cổ ngàn năm lưu truyền'
        }
      ],
      techniques: [
        {
          name: 'Nhuộm chàm tự nhiên',
          description: 'Ngâm ủ lá chàm với vôi và tro bếp trong chum sành',
          uniqueness: 'Không phai màu theo thời gian'
        }
      ],
      folkStory: {
        title: 'Truyền Thuyết Về Chiếc Áo Di Sản',
        summary: 'Câu chuyện cổ tích giải thích sự ra đời của hoa văn trên trang phục.',
        fullStory: 'Ngày xửa ngày xưa, một cô gái tài giỏi đã dệt nên tấm vải kỳ diệu bảo vệ buôn làng...',
        culturalMoral: 'Ca ngợi sự siêng năng và lòng hiếu thảo.'
      },
      interestingFacts: [
        'Trang phục được chế tác hoàn toàn thủ công',
        'Mỗi đường thêu mất từ 6 tháng đến 1 năm hoàn thiện'
      ]
    };

    setEditingCostume(newCostume);
    setIsCreatingNewCostume(true);
  };

  // Article CRUD Handlers
  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;

    if (isCreatingNewArticle) {
      onUpdateArticles([editingArticle, ...articles]);
      showToast(`Đã xuất bản bài viết: "${editingArticle.title}"`);
    } else {
      const updated = articles.map((a) => (a.id === editingArticle.id ? editingArticle : a));
      onUpdateArticles(updated);
      showToast(`Đã lưu bài viết: "${editingArticle.title}"`);
    }
    setEditingArticle(null);
    setIsCreatingNewArticle(false);
  };

  const handleDeleteArticle = (id: string, title: string) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa bài viết "${title}"?`)) {
      const updated = articles.filter((a) => a.id !== id);
      onUpdateArticles(updated);
      showToast(`Đã xóa bài viết: "${title}"`);
    }
  };

  const handleStartNewArticle = () => {
    const newArt: Article = {
      id: `art_custom_${Date.now()}`,
      title: 'Tiêu Đề Bài Viết Mới Về Di Sản Y Phục',
      slug: `bai-viet-moi-${Date.now()}`,
      category: 'nghien_cuu',
      summary: 'Tóm tắt ngắn gọn nội dung bài viết về di sản...',
      content: '### 1. Mở Đầu\nNội dung chi tiết phần mở đầu...\n\n### 2. Ý Nghĩa Văn Hóa\nNội dung phân tích sâu sắc...',
      coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      author: 'Ban Quản Trị S Trang Phục Việt',
      authorRole: 'Chuyên viên Biên tập',
      publishedAt: new Date().toLocaleDateString('vi-VN'),
      readTime: '5 phút đọc',
      tags: ['Di Sản', 'Cổ Phục', 'Văn Hóa'],
      comments: []
    };

    setEditingArticle(newArt);
    setIsCreatingNewArticle(true);
  };

  // Filtered lists
  const filteredCostumes = costumes.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.ethnicGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.regionName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-8 sm:py-12 bg-stone-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header Banner */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-md mb-8 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-stone-950 mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Trang Quản Trị Hệ Thống (Admin CMS)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif-cultural font-bold text-white">
                Bảng Điều Khiển & Biên Tập Nội Dung Di Sản
              </h1>
              <p className="text-xs text-stone-300 mt-1 max-w-2xl">
                Quản lý, chỉnh sửa trực tiếp thông tin các bộ trang phục, hình ảnh phụ kiện đi kèm, bài viết nghiên cứu và cơ sở dữ liệu văn hóa 54 dân tộc.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {onSwitchToCustomer && (
                <button
                  onClick={onSwitchToCustomer}
                  className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center gap-1.5 border border-stone-700 transition-all"
                  title="Chuyển sang giao diện Khách Hàng"
                >
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sang Khách Hàng</span>
                </button>
              )}

              <button
                onClick={() => {
                  if (window.confirm('Khôi phục lại toàn bộ dữ liệu gốc của trang web? Tất cả chỉnh sửa thử nghiệm sẽ được đặt lại.')) {
                    onResetToDefault();
                    showToast('Đã khôi phục dữ liệu gốc thành công!');
                  }
                }}
                className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold flex items-center gap-1.5 border border-stone-700 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Khôi Phục Dữ Liệu Gốc</span>
              </button>

              {onLogout && (
                <button
                  onClick={onLogout}
                  className="px-3.5 py-2 rounded-xl bg-rose-900/80 hover:bg-rose-900 text-rose-100 text-xs font-bold flex items-center gap-1.5 border border-rose-700/60 shadow-xs transition-all"
                  title="Đăng xuất quyền quản trị viên"
                >
                  <LogOut className="w-3.5 h-3.5 text-rose-300" />
                  <span>Đăng Xuất Quản Trị</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Admin Profile & Identity Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-600 shadow-sm shrink-0 bg-stone-100 group">
              <img
                src={currentUser?.avatar || FALLBACK_ADMIN_AVATAR}
                alt={currentUser?.name || 'Admin'}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageFallback(e, FALLBACK_ADMIN_AVATAR)}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setIsEditAdminProfileOpen(true)}
                className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs font-semibold cursor-pointer"
                title="Sửa ảnh đại diện Admin"
              >
                <Edit className="w-5 h-5" />
              </button>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-bold text-lg text-stone-900">
                  {currentUser?.name || 'Quản Trị Viên Di Sản'}
                </h2>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-900 text-emerald-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> Quản Trị Viên (Admin)
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1 flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  {currentUser?.email || 'admin@trangphucviet.vn'}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-stone-400" />
                  {currentUser?.phone || '0988 777 999'}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  {currentUser?.location || 'Hà Nội / TP.HCM'}
                </span>
              </p>
              {currentUser?.bio && (
                <p className="text-xs text-stone-600 italic mt-1.5 max-w-2xl line-clamp-1">
                  "{currentUser.bio}"
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setIsEditAdminProfileOpen(true)}
              className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Edit className="w-4 h-4" />
              <span>Sửa Tên & Ảnh Đại Diện Admin</span>
            </button>
          </div>
        </div>

        {/* Toast Alert */}
        {successMessage && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-900 text-emerald-100 text-xs flex items-center gap-2 shadow-md animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">{successMessage}</span>
          </div>
        )}

        {/* CMS Tabs */}
        <div className="flex items-center gap-2 border-b border-stone-300 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('costumes')}
            className={`pb-3 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'costumes'
                ? 'border-emerald-800 text-emerald-950 font-extrabold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-800" />
            <span>Quản Lý Y Phục 54 Dân Tộc ({costumes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('promotions')}
            className={`pb-3 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'promotions'
                ? 'border-emerald-800 text-emerald-950 font-extrabold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-800" />
            <span>Quảng Bá Di Sản & Lễ Hội ({spotlights.length + festivals.length + galleryItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`pb-3 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'articles'
                ? 'border-emerald-800 text-emerald-950 font-extrabold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-800" />
            <span>Quản Lý Bài Viết & Bút Ký ({articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('users')}
            className={`pb-3 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'users'
                ? 'border-emerald-800 text-emerald-950 font-extrabold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Users className="w-4 h-4 text-emerald-800" />
            <span>Quản Lý Tài Khoản & Phân Quyền ({registeredAccounts.length})</span>
          </button>
        </div>

        {/* TAB: PROMOTIONS CMS */}
        {activeTab === 'promotions' && (
          <AdminPromotionalManager
            spotlights={spotlights}
            festivals={festivals}
            galleryItems={galleryItems}
            costumes={costumes}
            onUpdateSpotlights={onUpdateSpotlights || (() => {})}
            onUpdateFestivals={onUpdateFestivals || (() => {})}
            onUpdateGalleryItems={onUpdateGalleryItems || (() => {})}
            showToast={showToast}
          />
        )}

        {/* TAB 1: COSTUMES CMS */}
        {activeTab === 'costumes' && (
          <div className="space-y-6">
            {/* Action Bar */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm theo tên trang phục, dân tộc, vùng..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                />
              </div>

              <button
                onClick={handleStartNewCostume}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm Trang Phục Mới</span>
              </button>
            </div>

            {/* Costume Table List */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Ảnh</th>
                      <th className="p-4">Tên Y Phục</th>
                      <th className="p-4">Dân Tộc</th>
                      <th className="p-4">Vùng Miền</th>
                      <th className="p-4">Số Phụ Kiện</th>
                      <th className="p-4">Số Tầng Lớp</th>
                      <th className="p-4 text-right">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {filteredCostumes.map((c) => (
                      <tr key={c.id} className="hover:bg-emerald-50/40 transition-colors">
                        <td className="p-4">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                            <img
                              src={c.coverImage}
                              alt={c.name}
                              referrerPolicy="no-referrer"
                              onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="p-4 font-semibold text-stone-900">
                          <div>{c.name}</div>
                          <span className="text-[10px] text-stone-400 font-normal">{c.id}</span>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-medium">
                            {c.ethnicGroup}
                          </span>
                        </td>
                        <td className="p-4 text-stone-600">{c.regionName}</td>
                        <td className="p-4 text-stone-600 font-medium">{c.accessories.length} món</td>
                        <td className="p-4 text-stone-600 font-medium">{c.costumeLayers.length} lớp</td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setEditingCostume({ ...c });
                                setIsCreatingNewCostume(false);
                              }}
                              className="p-2 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold"
                              title="Sửa tất cả thông tin"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteCostume(c.id, c.name)}
                              className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700"
                              title="Xóa"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ARTICLES CMS */}
        {activeTab === 'articles' && (
          <div className="space-y-6">
            {/* Action Bar */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm theo tiêu đề bài viết, tác giả..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                />
              </div>

              <button
                onClick={handleStartNewArticle}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Tạo Bài Viết Mới</span>
              </button>
            </div>

            {/* Articles Table */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Ảnh Bìa</th>
                      <th className="p-4">Tiêu Đề Bài Viết</th>
                      <th className="p-4">Chuyên Mục</th>
                      <th className="p-4">Tác Giả</th>
                      <th className="p-4">Ngày Đăng</th>
                      <th className="p-4 text-right">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {filteredArticles.map((art) => (
                      <tr key={art.id} className="hover:bg-emerald-50/40 transition-colors">
                        <td className="p-4">
                          <div className="w-14 h-10 rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                            <img
                              src={art.coverImage}
                              alt={art.title}
                              referrerPolicy="no-referrer"
                              onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="p-4 font-semibold text-stone-900 max-w-xs">
                          <div className="line-clamp-2">{art.title}</div>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 font-medium">
                            {art.category}
                          </span>
                        </td>
                        <td className="p-4 text-stone-600">{art.author}</td>
                        <td className="p-4 text-stone-500">{art.publishedAt}</td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setEditingArticle({ ...art });
                                setIsCreatingNewArticle(false);
                              }}
                              className="p-2 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold"
                              title="Chỉnh sửa bài viết"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteArticle(art.id, art.title)}
                              className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700"
                              title="Xóa bài viết"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: USERS & PERMISSIONS MANAGEMENT */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-800" />
                  <span>Danh Sách Tài Khoản & Phân Quyền Người Dùng</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Chỉnh sửa trực tiếp họ tên, ảnh đại diện (avatar), số điện thoại và chuyển đổi vai trò (Quản Trị Viên / Khách Hàng) cho bất kỳ tài khoản nào.
                </p>
              </div>

              <button
                onClick={() => {
                  const newUserId = `user_${Date.now()}`;
                  const newProfile: UserProfile = {
                    id: newUserId,
                    name: 'Người Dùng Mới',
                    email: `user_${Date.now()}@trangphucviet.vn`,
                    role: 'customer',
                    avatar: FALLBACK_AVATAR,
                    bio: 'Thành viên mới tham gia khám phá văn hóa trang phục Việt Nam.',
                    joinedAt: new Date().toLocaleDateString('vi-VN'),
                    phone: '',
                    location: 'Việt Nam',
                    savedCostumes: [],
                    savedArticles: [],
                    notes: []
                  };
                  const nextAccs = [
                    ...registeredAccounts,
                    { email: newProfile.email, profile: newProfile }
                  ];
                  saveAccounts(nextAccs);
                  setEditingAccountProfile(newProfile);
                  showToast('Đã tạo tài khoản mới. Vui lòng cập nhật tên và ảnh đại diện!');
                }}
                className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all shrink-0 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm Tài Khoản Mới</span>
              </button>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Ảnh Đại Diện</th>
                      <th className="p-4">Họ và Tên</th>
                      <th className="p-4">Email / Liên Hệ</th>
                      <th className="p-4">Vai Trò & Quyền Hạn</th>
                      <th className="p-4">Địa Chỉ</th>
                      <th className="p-4 text-right">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {registeredAccounts.map((acc, index) => {
                      const isCurrent = currentUser?.email === acc.email;
                      return (
                        <tr key={acc.email || index} className="hover:bg-stone-50/80 transition-colors">
                          <td className="p-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-stone-300 bg-stone-100 shadow-2xs">
                              <img
                                src={acc.profile.avatar}
                                alt={acc.profile.name}
                                referrerPolicy="no-referrer"
                                onError={(e) =>
                                  handleImageFallback(
                                    e,
                                    acc.profile.role === 'admin' ? FALLBACK_ADMIN_AVATAR : FALLBACK_AVATAR
                                  )
                                }
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="font-bold text-stone-900 block text-sm">
                              {acc.profile.name}
                            </span>
                            {isCurrent && (
                              <span className="inline-block mt-0.5 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                                (Tài khoản đang đăng nhập)
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-stone-600">
                            <span className="block font-medium">{acc.email}</span>
                            <span className="text-[11px] text-stone-400 block">{acc.profile.phone || 'Chưa có SĐT'}</span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <span
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                  acc.profile.role === 'admin'
                                    ? 'bg-emerald-900 text-emerald-100'
                                    : 'bg-emerald-50 text-emerald-950 border border-emerald-200'
                                }`}
                              >
                                {acc.profile.role === 'admin' ? (
                                  <>
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                                    <span>Quản Trị Viên (Admin)</span>
                                  </>
                                ) : (
                                  <>
                                    <User className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>Khách Hàng (Customer)</span>
                                  </>
                                )}
                              </span>
                              <button
                                onClick={() => handleToggleUserRole(acc.email)}
                                className="text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
                                title="Chuyển đổi giữa Admin và Khách Hàng"
                              >
                                Đổi vai trò
                              </button>
                            </div>
                          </td>
                          <td className="p-4 text-stone-600">
                            {acc.profile.location || 'Chưa cập nhật'}
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setEditingAccountProfile(acc.profile)}
                                className="px-2.5 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold flex items-center gap-1 cursor-pointer"
                                title="Chỉnh sửa tên và ảnh đại diện"
                              >
                                <Edit className="w-3.5 h-3.5" />
                                <span>Sửa Tên & Ảnh</span>
                              </button>
                              {!isCurrent && (
                                <button
                                  onClick={() => {
                                    if (window.confirm(`Bạn có chắc chắn muốn xóa tài khoản "${acc.profile.name}"?`)) {
                                      const next = registeredAccounts.filter((a) => a.email !== acc.email);
                                      saveAccounts(next);
                                      showToast(`Đã xóa tài khoản: "${acc.profile.name}"`);
                                    }
                                  }}
                                  className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 cursor-pointer"
                                  title="Xóa tài khoản"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: EDIT COSTUME (FULL FIELDS) */}
        {editingCostume && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
              <div className="bg-stone-900 text-white p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-cultural font-bold text-lg text-white">
                    {isCreatingNewCostume ? 'Thêm Mới Y Phục Di Sản' : `Chỉnh Sửa Toàn Diện: ${editingCostume.name}`}
                  </h3>
                  <p className="text-xs text-emerald-200/80">Biên tập mọi thông tin, hình ảnh phụ kiện và câu chuyện văn hóa</p>
                </div>
                <button
                  onClick={() => setEditingCostume(null)}
                  className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSaveCostume} className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
                {/* 1. Basic Info */}
                <div className="space-y-4">
                  <h4 className="font-bold uppercase tracking-wider text-emerald-900 text-xs border-b pb-1">
                    1. Thông Tin Nhận Diện Chính
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Tên bộ trang phục:</label>
                      <input
                        type="text"
                        value={editingCostume.name}
                        onChange={(e) => setEditingCostume({ ...editingCostume, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Tên dân tộc:</label>
                      <input
                        type="text"
                        value={editingCostume.ethnicGroup}
                        onChange={(e) => setEditingCostume({ ...editingCostume, ethnicGroup: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Ngữ hệ:</label>
                      <input
                        type="text"
                        value={editingCostume.languageFamily}
                        onChange={(e) => setEditingCostume({ ...editingCostume, languageFamily: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Vùng văn hóa:</label>
                      <select
                        value={editingCostume.region}
                        onChange={(e) => {
                          const reg = e.target.value as CulturalRegionKey;
                          const regNames: Record<string, string> = {
                            tay_bac: 'Vùng Tây Bắc',
                            dong_bac: 'Vùng Đông Bắc',
                            dong_bang_bac_bo: 'Đồng Bằng Bắc Bộ',
                            bac_trung_bo: 'Bắc Trung Bộ',
                            nam_trung_bo: 'Nam Trung Bộ',
                            tay_nguyen: 'Tây Nguyên',
                            nam_bo: 'Nam Bộ (Tây Nam Bộ)'
                          };
                          setEditingCostume({
                            ...editingCostume,
                            region: reg,
                            regionName: regNames[reg] || 'Toàn Quốc'
                          });
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white"
                      >
                        <option value="tay_bac">Tây Bắc</option>
                        <option value="dong_bac">Đông Bắc</option>
                        <option value="dong_bang_bac_bo">Đồng Bằng Bắc Bộ</option>
                        <option value="bac_trung_bo">Bắc Trung Bộ</option>
                        <option value="nam_trung_bo">Nam Trung Bộ</option>
                        <option value="tay_nguyen">Tây Nguyên</option>
                        <option value="nam_bo">Nam Bộ</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Tỉnh thành phân bố (cách nhau dấu phẩy):</label>
                      <input
                        type="text"
                        value={editingCostume.provinces.join(', ')}
                        onChange={(e) =>
                          setEditingCostume({
                            ...editingCostume,
                            provinces: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-stone-300"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Huy hiệu / Điểm nhấn:</label>
                      <input
                        type="text"
                        value={editingCostume.badge}
                        onChange={(e) => setEditingCostume({ ...editingCostume, badge: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Tóm tắt ý nghĩa & Căn cước văn hóa:</label>
                    <textarea
                      value={editingCostume.summary}
                      onChange={(e) => setEditingCostume({ ...editingCostume, summary: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300"
                      required
                    />
                  </div>
                </div>

                {/* 2. Images & Landscape */}
                <div className="space-y-4">
                  <h4 className="font-bold uppercase tracking-wider text-emerald-900 text-xs border-b pb-1">
                    2. Hình Ảnh Y Phục & Cảnh Quan Gắn Liền
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-1">
                      <ImageInputWithPreview
                        label="Ảnh Bìa Trang Phục (Cover Image)"
                        value={editingCostume.coverImage}
                        onChange={(url) => setEditingCostume({ ...editingCostume, coverImage: url })}
                        aspectRatio="portrait"
                        required
                        helpText="Hệ thống tự động sửa link Google Drive, Unsplash, Imgur... hoặc bấm 'Tải Từ Máy' để tải ảnh trực tiếp."
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <ImageInputWithPreview
                        label="Ảnh Cảnh Sắc / Địa Danh Gắn Liền"
                        value={editingCostume.landscapeImage || ''}
                        onChange={(url) => setEditingCostume({ ...editingCostume, landscapeImage: url })}
                        aspectRatio="video"
                        helpText="Ảnh phong cảnh quê hương của trang phục. Hỗ trợ dán link hoặc tải từ máy."
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Tên Địa Danh Cảnh Sắc:</label>
                      <input
                        type="text"
                        value={editingCostume.landscapeName || ''}
                        onChange={(e) => setEditingCostume({ ...editingCostume, landscapeName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Câu nói / Trích dẫn văn hóa:</label>
                      <input
                        type="text"
                        value={editingCostume.culturalQuotes || ''}
                        onChange={(e) => setEditingCostume({ ...editingCostume, culturalQuotes: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Accessories Editing */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-1">
                    <h4 className="font-bold uppercase tracking-wider text-emerald-900 text-xs">
                      3. Danh Sách Phụ Kiện Đi Kèm ({editingCostume.accessories.length} món)
                    </h4>
                    <button
                      type="button"
                      onClick={() => {
                        const newAcc: Accessory = {
                          id: `acc_${Date.now()}`,
                          name: 'Phụ Kiện Mới',
                          category: 'trang_suc_bac_dong',
                          description: 'Mô tả hình dáng và chất liệu của món phụ kiện...',
                          spiritualMeaning: 'Ý nghĩa trừ tà, cầu bình an hoặc biểu thị vị thế...',
                          wearingStyle: 'Đeo ở cổ / thắt lưng / quấn đầu...',
                          image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80'
                        };
                        setEditingCostume({
                          ...editingCostume,
                          accessories: [...editingCostume.accessories, newAcc]
                        });
                      }}
                      className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 font-semibold text-[11px] flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Thêm Phụ Kiện</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {editingCostume.accessories.map((acc, idx) => (
                      <div key={acc.id} className="p-3 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-stone-800">Món #{idx + 1}: {acc.name}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updatedAccs = editingCostume.accessories.filter((_, i) => i !== idx);
                              setEditingCostume({ ...editingCostume, accessories: updatedAccs });
                            }}
                            className="p-1 text-rose-600 hover:bg-rose-50 rounded-md"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div>
                            <label className="block text-[11px] font-medium text-stone-600">Tên phụ kiện:</label>
                            <input
                              type="text"
                              value={acc.name}
                              onChange={(e) => {
                                const accs = [...editingCostume.accessories];
                                accs[idx].name = e.target.value;
                                setEditingCostume({ ...editingCostume, accessories: accs });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-medium text-stone-600">Tên bản địa:</label>
                            <input
                              type="text"
                              value={acc.localName || ''}
                              onChange={(e) => {
                                const accs = [...editingCostume.accessories];
                                accs[idx].localName = e.target.value;
                                setEditingCostume({ ...editingCostume, accessories: accs });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <ImageInputWithPreview
                              label="Ảnh phụ kiện (URL hoặc tải từ máy)"
                              value={acc.image || ''}
                              onChange={(url) => {
                                const accs = [...editingCostume.accessories];
                                accs[idx].image = url;
                                setEditingCostume({ ...editingCostume, accessories: accs });
                              }}
                              aspectRatio="square"
                              helpText="Dán link ảnh hoặc bấm 'Tải Từ Máy' để tải ảnh trực tiếp."
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-stone-600">Mô tả phụ kiện:</label>
                          <textarea
                            value={acc.description}
                            onChange={(e) => {
                              const accs = [...editingCostume.accessories];
                              accs[idx].description = e.target.value;
                              setEditingCostume({ ...editingCostume, accessories: accs });
                            }}
                            rows={2}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[11px] font-medium text-stone-600">Ý nghĩa tâm linh / phong tục:</label>
                            <input
                              type="text"
                              value={acc.spiritualMeaning}
                              onChange={(e) => {
                                const accs = [...editingCostume.accessories];
                                accs[idx].spiritualMeaning = e.target.value;
                                setEditingCostume({ ...editingCostume, accessories: accs });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-medium text-stone-600">Quy cách đeo / phối đồ:</label>
                            <input
                              type="text"
                              value={acc.wearingStyle}
                              onChange={(e) => {
                                const accs = [...editingCostume.accessories];
                                accs[idx].wearingStyle = e.target.value;
                                setEditingCostume({ ...editingCostume, accessories: accs });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingCostume(null)}
                    className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold"
                  >
                    Hủy Bỏ
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <Save className="w-4 h-4" />
                    <span>Lưu Thay Đổi Trang Phục</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: EDIT ARTICLE */}
        {editingArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
              <div className="bg-stone-900 text-white p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-cultural font-bold text-lg text-white">
                    {isCreatingNewArticle ? 'Tạo Bài Viết & Bút Ký Mới' : `Chỉnh Sửa Bài Viết: ${editingArticle.title}`}
                  </h3>
                  <p className="text-xs text-emerald-200/80">Biên tập nội dung nghiên cứu, chuyên mục và tác giả</p>
                </div>
                <button
                  onClick={() => setEditingArticle(null)}
                  className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSaveArticle} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Tiêu đề bài viết:</label>
                  <input
                    type="text"
                    value={editingArticle.title}
                    onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm font-semibold"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Chuyên mục:</label>
                    <select
                      value={editingArticle.category}
                      onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="ky_thuat_det">Kỹ Thuật Dệt & Nhuộm</option>
                      <option value="nghien_cuu">Nghiên Cứu Di Sản</option>
                      <option value="nghe_nhan">Nghệ Nhân Làng Nghề</option>
                      <option value="bao_ton">Bảo Tồn Cổ Phục</option>
                      <option value="le_hoi">Lễ Hội & Phong Tục</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Tác giả:</label>
                    <input
                      type="text"
                      value={editingArticle.author}
                      onChange={(e) => setEditingArticle({ ...editingArticle, author: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Thời gian đọc (VD: 5 phút đọc):</label>
                    <input
                      type="text"
                      value={editingArticle.readTime}
                      onChange={(e) => setEditingArticle({ ...editingArticle, readTime: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <ImageInputWithPreview
                      label="Ảnh Bìa Bài Viết / Bút Ký Di Sản"
                      value={editingArticle.coverImage}
                      onChange={(url) => setEditingArticle({ ...editingArticle, coverImage: url })}
                      aspectRatio="video"
                      required
                      helpText="Dán link ảnh bìa hoặc bấm 'Tải Từ Máy' để tải ảnh trực tiếp."
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Từ khóa Tags (cách nhau dấu phẩy):</label>
                    <input
                      type="text"
                      value={editingArticle.tags.join(', ')}
                      onChange={(e) =>
                        setEditingArticle({
                          ...editingArticle,
                          tags: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-stone-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Tóm tắt ngắn gọn:</label>
                  <textarea
                    value={editingArticle.summary}
                    onChange={(e) => setEditingArticle({ ...editingArticle, summary: e.target.value })}
                    rows={2}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Nội dung bài viết (Hỗ trợ tiêu đề ### và danh sách -):</label>
                  <textarea
                    value={editingArticle.content}
                    onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                    rows={8}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 font-mono text-xs"
                    required
                  />
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingArticle(null)}
                    className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <Save className="w-4 h-4" />
                    <span>Lưu & Xuất Bản Bài Viết</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: EDIT ADMIN PROFILE */}
        {isEditAdminProfileOpen && (
          <ProfileEditModal
            isOpen={isEditAdminProfileOpen}
            onClose={() => setIsEditAdminProfileOpen(false)}
            user={currentUser || registeredAccounts[0].profile}
            onSave={(updated) => {
              if (onUpdateProfile) {
                onUpdateProfile(updated);
              }
              const updatedAccounts = registeredAccounts.map((acc) =>
                acc.email === updated.email || (currentUser && acc.email === currentUser.email)
                  ? { ...acc, profile: updated }
                  : acc
              );
              saveAccounts(updatedAccounts);
              showToast('Đã cập nhật hồ sơ Quản Trị Viên thành công!');
            }}
            title="Chỉnh Sửa Hồ Sơ Quản Trị Viên (Admin)"
          />
        )}

        {/* MODAL: EDIT ANY USER PROFILE FROM ADMIN TABLE */}
        {editingAccountProfile && (
          <ProfileEditModal
            isOpen={!!editingAccountProfile}
            onClose={() => setEditingAccountProfile(null)}
            user={editingAccountProfile}
            onSave={(updated) => {
              const updatedAccounts = registeredAccounts.map((acc) =>
                acc.email === editingAccountProfile.email ? { ...acc, profile: updated } : acc
              );
              saveAccounts(updatedAccounts);
              if (currentUser && currentUser.email === editingAccountProfile.email && onUpdateProfile) {
                onUpdateProfile(updated);
              }
              setEditingAccountProfile(null);
              showToast(`Đã cập nhật thông tin tài khoản "${updated.name}" thành công!`);
            }}
            title={`Chỉnh Sửa Tài Khoản: ${editingAccountProfile.name}`}
          />
        )}
      </div>
    </div>
  );
};
