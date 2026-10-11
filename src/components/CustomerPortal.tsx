import React, { useState } from 'react';
import { UserProfile, Costume, Article, UserNote, UserContribution } from '../types/costume';
import {
  User,
  Heart,
  Bookmark,
  FileText,
  Clock,
  Sparkles,
  Send,
  Trash2,
  Edit3,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Calendar,
  Layers,
  Plus,
  LogOut,
  ShieldCheck,
  Cloud
} from 'lucide-react';
import { ProfileEditModal } from './ProfileEditModal';
import { FALLBACK_AVATAR } from '../utils/imageUtils';

interface CustomerPortalProps {
  user: UserProfile;
  costumes: Costume[];
  articles: Article[];
  onSelectCostume: (costume: Costume) => void;
  onOpenArticle: (article: Article) => void;
  onAddNote: (costumeId: string, costumeName: string, text: string) => void;
  onDeleteNote: (noteId: string) => void;
  onSubmitContribution?: (contrib: Omit<UserContribution, 'id' | 'createdAt' | 'status'>) => void;
  onUpdateBio?: (newBio: string) => void;
  onLogout?: () => void;
  onSwitchToAdmin?: () => void;
  onUpdateProfile?: (profile: UserProfile) => void;
}

export const CustomerPortal: React.FC<CustomerPortalProps> = ({
  user,
  costumes,
  articles,
  onSelectCostume,
  onOpenArticle,
  onAddNote,
  onDeleteNote,
  onSubmitContribution,
  onUpdateBio,
  onLogout,
  onSwitchToAdmin,
  onUpdateProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'favorites' | 'notes' | 'articles' | 'contribute'>('favorites');
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [newNoteCostumeId, setNewNoteCostumeId] = useState<string>('');
  const [newNoteText, setNewNoteText] = useState<string>('');

  // Contribution Form State
  const [contribTitle, setContribTitle] = useState('');
  const [contribEthnic, setContribEthnic] = useState('');
  const [contribContent, setContribContent] = useState('');
  const [contribSuccess, setContribSuccess] = useState(false);

  // Saved items lookup
  const safeCostumes = costumes || [];
  const safeArticles = articles || [];
  const savedCostumesList = safeCostumes.filter((c) => user?.savedCostumes?.includes(c.id));
  const savedArticlesList = safeArticles.filter((a) => user?.savedArticles?.includes(a.id));

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim() || !newNoteCostumeId) return;
    const targetCostume = safeCostumes.find((c) => c.id === newNoteCostumeId);
    if (targetCostume) {
      onAddNote(targetCostume.id, targetCostume.name, newNoteText);
      setNewNoteText('');
      setNewNoteCostumeId('');
    }
  };

  const handleContributionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contribTitle.trim() || !contribContent.trim()) return;

    if (onSubmitContribution) {
      onSubmitContribution({
        userId: user.id,
        userName: user.name,
        title: contribTitle,
        content: contribContent,
        ethnicGroup: contribEthnic || 'Toàn quốc',
      });
    }

    setContribSuccess(true);
    setContribTitle('');
    setContribEthnic('');
    setContribContent('');
    setTimeout(() => setContribSuccess(false), 4000);
  };

  return (
    <div className="py-8 sm:py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Card Top Banner */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-emerald-800 via-stone-800 to-rose-900 relative">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          <div className="px-6 pb-6 pt-0 relative flex flex-col md:flex-row items-start md:items-end justify-between gap-4 -mt-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-stone-100 shrink-0 group">
                <img
                  src={user.avatar}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_AVATAR;
                  }}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setIsEditProfileOpen(true)}
                  className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs font-semibold cursor-pointer"
                  title="Thay đổi ảnh đại diện & tên"
                >
                  <Edit3 className="w-5 h-5" />
                </button>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 mb-1">
                  <User className="w-3 h-3 text-emerald-700" />
                  <span>Trang Khách Hàng (Thành Viên Nghiên Cứu)</span>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-serif-cultural font-bold text-stone-900">
                    {user.name}
                  </h1>
                  <button
                    type="button"
                    onClick={() => setIsEditProfileOpen(true)}
                    className="p-1 rounded-lg text-stone-400 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                    title="Chỉnh sửa tên và ảnh đại diện"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-stone-500 flex items-center gap-3 mt-0.5">
                  <span>{user.email}</span>
                  {user.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      {user.location}
                    </span>
                  )}
                  {user.phone && (
                    <span>SĐT: {user.phone}</span>
                  )}
                  <span>Tham gia từ {user.joinedAt}</span>
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] font-medium">
                    <Cloud className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Đồng bộ Đám mây Firebase:</span>
                    <span className="text-emerald-700 font-semibold">Đã lưu trữ email & dữ liệu</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsEditProfileOpen(true)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-stone-300 hover:border-emerald-600 text-stone-700 hover:text-emerald-900 text-[11px] font-bold shadow-2xs transition-all cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3 text-emerald-600" />
                    <span>Sửa Thông Tin & Đổi Ảnh</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <div className="bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-200 text-center flex-1 sm:flex-initial">
                <span className="text-base font-bold text-emerald-900 block">{user.savedCostumes?.length || 0}</span>
                <span className="text-[10px] text-stone-500 font-medium uppercase">Y Phục Đã Lưu</span>
              </div>
              <div className="bg-stone-100 px-4 py-2 rounded-2xl border border-stone-200 text-center flex-1 sm:flex-initial">
                <span className="text-base font-bold text-stone-800 block">{user.notes?.length || 0}</span>
                <span className="text-[10px] text-stone-500 font-medium uppercase">Ghi Chú</span>
              </div>

              {onSwitchToAdmin && (
                <button
                  onClick={onSwitchToAdmin}
                  className="px-3 py-2 rounded-2xl bg-stone-900 hover:bg-black text-emerald-300 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all border border-emerald-500/40"
                  title="Chuyển sang quyền Quản Trị Viên"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sang Quản Trị</span>
                </button>
              )}

              {onLogout && (
                <button
                  onClick={onLogout}
                  className="px-3 py-2 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all"
                  title="Đăng xuất khỏi tài khoản"
                >
                  <LogOut className="w-3.5 h-3.5 text-rose-600" />
                  <span>Đăng Xuất</span>
                </button>
              )}
            </div>
          </div>

          {/* Profile Edit Modal */}
          {isEditProfileOpen && (
            <ProfileEditModal
              isOpen={isEditProfileOpen}
              onClose={() => setIsEditProfileOpen(false)}
              user={user}
              onSave={(updated) => {
                if (onUpdateProfile) {
                  onUpdateProfile(updated);
                }
              }}
              title="Chỉnh Sửa Hồ Sơ Khách Hàng (Tên & Ảnh Đại Diện)"
            />
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-stone-200 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('favorites')}
            className={`pb-3 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'favorites'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Bộ Sưu Tập Y Phục Đã Lưu ({savedCostumesList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`pb-3 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'notes'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>Sổ Tay & Ghi Chú Văn Hóa ({user.notes?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`pb-3 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'articles'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Bài Viết Quan Tâm ({savedArticlesList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('contribute')}
            className={`pb-3 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'contribute'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Đóng Góp Tài Liệu / Ảnh Cổ Phục</span>
          </button>
        </div>

        {/* TAB 1: SAVED COSTUMES */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            {savedCostumesList.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedCostumesList.map((costume) => (
                  <div
                    key={costume.id}
                    className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="h-56 relative overflow-hidden bg-stone-100">
                      <img
                        src={costume.coverImage}
                        alt={costume.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-stone-950 shadow-xs">
                          {costume.ethnicGroup}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-900/80 text-emerald-200 backdrop-blur-xs">
                          {costume.regionName}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif-cultural font-bold text-base text-stone-900 mb-1">
                          {costume.name}
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                          {costume.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                        <button
                          onClick={() => onSelectCostume(costume)}
                          className="px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center gap-1 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Mở Chi Tiết</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl border border-stone-200 text-center">
                <Heart className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h3 className="font-serif-cultural font-bold text-stone-800 text-lg mb-1">
                  Chưa có trang phục nào trong danh sách lưu
                </h3>
                <p className="text-xs text-stone-500 max-w-md mx-auto mb-4">
                  Khi xem các bộ y phục 54 dân tộc, nhấn vào biểu tượng trái tim để lưu lại vào không gian nghiên cứu riêng của bạn.
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: NOTES */}
        {activeTab === 'notes' && (
          <div className="space-y-6">
            {/* Create New Note Form */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs">
              <h3 className="font-serif-cultural font-bold text-base text-stone-900 mb-3 flex items-center gap-1.5">
                <Plus className="w-4 h-4 text-emerald-700" /> Thêm Ghi Chú Văn Hóa Mới
              </h3>
              <form onSubmit={handleCreateNote} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Chọn bộ trang phục liên quan:
                  </label>
                  <select
                    value={newNoteCostumeId}
                    onChange={(e) => setNewNoteCostumeId(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                    required
                  >
                    <option value="">-- Chọn trang phục --</option>
                    {costumes.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.ethnicGroup})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Nội dung ghi chép, cảm nhận hoặc tư liệu:
                  </label>
                  <textarea
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    rows={3}
                    placeholder="VD: Cần tìm hiểu thêm về loại cúc bạc Mák Pém của người Thái Đen vùng Sơn La..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 bg-stone-50"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Lưu Ghi Chú</span>
                </button>
              </form>
            </div>

            {/* Existing Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.notes && user.notes.length > 0 ? (
                user.notes.map((note) => (
                  <div
                    key={note.id}
                    className="bg-white p-5 rounded-3xl border border-stone-200 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900">
                          {note.costumeName}
                        </span>
                        <button
                          onClick={() => onDeleteNote(note.id)}
                          className="p-1 rounded-md text-stone-400 hover:text-rose-600 transition-colors"
                          title="Xóa ghi chú"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-xs text-stone-700 leading-relaxed font-sans mt-2">
                        "{note.noteText}"
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-stone-100 text-[11px] text-stone-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{note.createdAt}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 bg-white p-8 rounded-3xl border border-stone-200 text-center text-xs text-stone-500">
                  Chưa có ghi chú nào. Hãy viết lại các suy nghĩ của bạn khi tìm hiểu y phục truyền thống!
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: ARTICLES */}
        {activeTab === 'articles' && (
          <div className="space-y-6">
            {savedArticlesList.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {savedArticlesList.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => onOpenArticle(art)}
                    className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xs hover:border-emerald-400 transition-all flex flex-col justify-between cursor-pointer group"
                  >
                    <div className="h-44 bg-stone-100 overflow-hidden relative">
                      <img
                        src={art.coverImage}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="font-serif-cultural font-bold text-base text-stone-900 group-hover:text-emerald-800 transition-colors mb-2">
                        {art.title}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-2 mb-3">{art.summary}</p>
                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                        <span>{art.author}</span>
                        <span className="text-emerald-800 font-bold">Đọc ngay →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl border border-stone-200 text-center text-xs text-stone-500">
                Chưa có bài viết quan tâm nào được lưu.
              </div>
            )}
          </div>
        )}

        {/* TAB 4: CONTRIBUTE */}
        {activeTab === 'contribute' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs max-w-3xl mx-auto space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Cùng Chung Tay Bảo Tồn Di Sản</span>
              </div>
              <h3 className="text-xl font-serif-cultural font-bold text-stone-900">
                Gửi Tư Liệu & Hình Ảnh Trang Phục Cho Ban Biên Tập
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Bạn có ảnh chụp y phục truyền thống tại quê hương, câu chuyện về người nghệ nhân dệt thổ cẩm, hay một góc nhìn lịch sử chưa được ghi nhận? Hãy gửi cho chúng tôi để cùng bổ sung vào kho tàng 54 dân tộc.
              </p>
            </div>

            {contribSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cảm ơn bạn! Tư liệu đã được chuyển đến Ban Quản Trị để thẩm định và xuất bản.</span>
              </div>
            )}

            <form onSubmit={handleContributionSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    Tiêu đề tư liệu / Hiện vật:
                  </label>
                  <input
                    type="text"
                    value={contribTitle}
                    onChange={(e) => setContribTitle(e.target.value)}
                    placeholder="VD: Bộ sưu tập khuyên tai bạc người Dao Tiền"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    Dân tộc / Địa phương:
                  </label>
                  <input
                    type="text"
                    value={contribEthnic}
                    onChange={(e) => setContribEthnic(e.target.value)}
                    placeholder="VD: Dân tộc Dao (Hà Giang, Tuyên Quang)"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">
                  Mô tả chi tiết & Nguồn gốc xuất xứ:
                </label>
                <textarea
                  value={contribContent}
                  onChange={(e) => setContribContent(e.target.value)}
                  rows={4}
                  placeholder="Ghi rõ chi tiết về quy trình chế tác, người mặc, ý nghĩa văn hóa và dịp sử dụng..."
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold flex items-center gap-2 shadow-xs transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi Tư Liệu Đóng Góp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
