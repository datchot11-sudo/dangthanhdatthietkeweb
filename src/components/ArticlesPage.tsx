import React, { useState, useMemo } from 'react';
import { Article, ArticleComment } from '../types/costume';
import { FALLBACK_HERITAGE_IMAGE, handleImageFallback } from '../utils/imageUtils';
import {
  BookOpen,
  Sparkles,
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  MessageSquare,
  Share2,
  Tag,
  Eye,
  CheckCircle2,
  Heart,
  ChevronLeft
} from 'lucide-react';

interface ArticlesPageProps {
  articles: Article[];
  onOpenArticleDetail?: (article: Article) => void;
  onAddComment?: (articleId: string, comment: string, userName: string) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  articles,
  onOpenArticleDetail,
  onAddComment,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [commentText, setCommentText] = useState<string>('');
  const [commentAuthor, setCommentAuthor] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Tất Cả Bài Viết' },
    { id: 'ky_thuat_det', label: 'Kỹ Thuật Dệt & Nhuộm' },
    { id: 'nghien_cuu', label: 'Nghiên Cứu Di Sản' },
    { id: 'nghe_nhan', label: 'Nghệ Nhân Làng Nghề' },
    { id: 'bao_ton', label: 'Bảo Tồn Cổ Phục' },
    { id: 'le_hoi', label: 'Lễ Hội & Phong Tục' },
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      if (selectedCategory !== 'all' && art.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = art.title.toLowerCase().includes(q);
        const matchSummary = art.summary.toLowerCase().includes(q);
        const matchAuthor = art.author.toLowerCase().includes(q);
        const matchTags = art.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchSummary && !matchAuthor && !matchTags) {
          return false;
        }
      }
      return true;
    });
  }, [articles, selectedCategory, searchQuery]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !activeArticle) return;

    if (onAddComment) {
      onAddComment(activeArticle.id, commentText, commentAuthor || 'Độc giả yêu di sản');
    }

    // Local append for preview
    const newComment: ArticleComment = {
      id: `c_${Date.now()}`,
      userName: commentAuthor || 'Độc giả yêu di sản',
      comment: commentText,
      createdAt: 'Vừa xong',
    };

    activeArticle.comments = [...(activeArticle.comments || []), newComment];
    setCommentText('');
    setCommentAuthor('');
  };

  // If reading an article in full view
  if (activeArticle) {
    return (
      <section className="py-8 sm:py-12 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back button */}
          <button
            onClick={() => setActiveArticle(null)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quay Lại Danh Sách Bài Viết</span>
          </button>

          {/* Article Header */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900">
                {activeArticle.category === 'ky_thuat_det'
                  ? 'Kỹ Thuật Dệt & Nhuộm'
                  : activeArticle.category === 'nghien_cuu'
                  ? 'Nghiên Cứu Di Sản'
                  : activeArticle.category === 'nghe_nhan'
                  ? 'Nghệ Nhân Làng Nghề'
                  : activeArticle.category === 'bao_ton'
                  ? 'Bảo Tồn Cổ Phục'
                  : 'Lễ Hội & Phong Tục'}
              </span>
              {activeArticle.ethnicGroupId && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700">
                  Dân tộc: {activeArticle.ethnicGroupId}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif-cultural font-bold text-stone-900 leading-tight">
              {activeArticle.title}
            </h1>

            {/* Author info & Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-stone-200 text-xs text-stone-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center font-serif text-base border border-emerald-300">
                  {activeArticle.author.charAt(0)}
                </div>
                <div>
                  <strong className="text-stone-900 block font-sans">{activeArticle.author}</strong>
                  <span>{activeArticle.authorRole}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeArticle.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle.readTime}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-semibold cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{isCopied ? 'Đã sao chép link!' : 'Chia sẻ'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Cover Image */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-stone-200 h-80 sm:h-96 mb-8 relative bg-stone-100">
            <img
              src={activeArticle.coverImage}
              alt={activeArticle.title}
              referrerPolicy="no-referrer"
              onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Summary Quote Box */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border-l-4 border-emerald-700 text-stone-800 text-sm font-serif italic mb-8 leading-relaxed">
            "{activeArticle.summary}"
          </div>

          {/* Main Article Body (Formatted Markdown / Clean Paragraphs) */}
          <div className="prose prose-stone max-w-none text-sm sm:text-base text-stone-800 leading-relaxed space-y-4 mb-10 font-sans">
            {activeArticle.content.split('\n\n').map((para, idx) => {
              if (para.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg sm:text-xl font-serif-cultural font-bold text-emerald-950 mt-6 mb-3">
                    {para.replace('### ', '')}
                  </h3>
                );
              }
              if (para.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-1.5 text-stone-700 text-xs sm:text-sm">
                    {para.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-stone-700 leading-relaxed text-xs sm:text-sm">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-stone-200 mb-10">
            <Tag className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-xs font-semibold text-stone-500">Từ khóa di sản:</span>
            {activeArticle.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Comments Section */}
          <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 space-y-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-800" />
              <h3 className="font-serif-cultural font-bold text-lg text-stone-900">
                Bình Luận & Trao Đổi Di Sản ({activeArticle.comments?.length || 0})
              </h3>
            </div>

            {/* Existing Comments */}
            {activeArticle.comments && activeArticle.comments.length > 0 ? (
              <div className="space-y-3">
                {activeArticle.comments.map((c) => (
                  <div key={c.id} className="bg-white p-4 rounded-2xl border border-stone-200 text-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-stone-900">{c.userName}</span>
                      <span className="text-[11px] text-stone-400">{c.createdAt}</span>
                    </div>
                    <p className="text-stone-700 leading-relaxed">{c.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-stone-500 italic">
                Chưa có bình luận nào. Hãy là người đầu tiên chia sẻ cảm nghĩ về bài viết này!
              </p>
            )}

            {/* Add Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-3 pt-4 border-t border-stone-200">
              <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Gửi Ý Kiến / Đóng Góp
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  placeholder="Tên của bạn (VD: Minh Châu)"
                  className="px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 bg-white"
                  required
                />
              </div>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Viết cảm nghĩ, góc nhìn hoặc tư liệu bổ sung của bạn..."
                rows={3}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 bg-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Gửi Bình Luận</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // Listing View of all articles
  return (
    <section id="heritage_articles_section" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>Chuyên Mục Nghiên Cứu & Bút Ký</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-cultural font-bold text-stone-900">
              Bài Viết & Di Sản Trang Phục
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Nơi hội tụ những công trình nghiên cứu công phu, ký sự làng nghề, bí quyết dệt nhuộm cổ truyền và câu chuyện gìn giữ hồn thiêng y phục 54 dân tộc.
            </p>
          </div>

          <div className="text-xs font-medium text-stone-500 bg-stone-50 px-4 py-2 rounded-xl border border-stone-200 shrink-0">
            Tổng số: <strong className="text-emerald-900 font-bold text-sm">{filteredArticles.length}</strong> bài viết
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-stone-50 p-4 rounded-3xl border border-stone-200 space-y-3 mb-8 shadow-2xs">
          {/* Search Input */}
          <div className="relative flex items-center shadow-xs rounded-2xl bg-white border border-stone-200 focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all p-1">
            <Search className="w-4 h-4 text-stone-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết theo tiêu đề, tác giả, làng nghề hoặc từ khóa (vẽ sáp ong, cúc bướm, áo nhật bình, dệt dèng...)"
              className="w-full bg-transparent border-0 px-3 py-2 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-2 py-1 text-xs text-stone-400 hover:text-stone-600 font-medium"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-300 hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article Top Highlight (if available) */}
        {filteredArticles.length > 0 && selectedCategory === 'all' && !searchQuery && (
          <div
            onClick={() => setActiveArticle(filteredArticles[0])}
            className="mb-8 rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-stone-900 text-white cursor-pointer group relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-80">
              <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden bg-stone-800">
                <img
                  src={filteredArticles[0].coverImage}
                  alt={filteredArticles[0].title}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-stone-900 hidden lg:block" />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-stone-900">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-stone-950">
                      Bài Viết Nổi Bật
                    </span>
                    <span className="text-xs text-emerald-300 font-medium">
                      {filteredArticles[0].readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-cultural font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight mb-3">
                    {filteredArticles[0].title}
                  </h3>

                  <p className="text-xs text-stone-300 leading-relaxed line-clamp-3 mb-4">
                    {filteredArticles[0].summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                  <div className="text-xs text-stone-400">
                    <strong className="text-stone-200 block font-sans">{filteredArticles[0].author}</strong>
                    <span>{filteredArticles[0].publishedAt}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>Đọc tiếp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                {/* Cover Image */}
                <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageFallback(e, FALLBACK_HERITAGE_IMAGE)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500 text-stone-950 shadow-xs">
                      {art.category === 'ky_thuat_det'
                        ? 'Kỹ Thuật Dệt'
                        : art.category === 'nghien_cuu'
                        ? 'Nghiên Cứu'
                        : art.category === 'nghe_nhan'
                        ? 'Nghệ Nhân'
                        : art.category === 'bao_ton'
                        ? 'Bảo Tồn'
                        : 'Lễ Hội'}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between text-[11px] text-emerald-200">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                    <span>{art.publishedAt}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif-cultural font-bold text-base text-stone-900 group-hover:text-emerald-900 transition-colors leading-snug line-clamp-2 mb-2">
                      {art.title}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                      {art.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tags preview */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {art.tags.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-stone-100 text-[10px] text-stone-600 font-medium"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-stone-500 font-medium line-clamp-1">{art.author}</span>
                      <span className="text-emerald-800 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Đọc bài</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-stone-50 rounded-3xl border border-stone-200 p-8">
            <BookOpen className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="font-serif-cultural font-bold text-stone-800 text-lg mb-1">
              Không tìm thấy bài viết phù hợp
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Không có bài viết nào khớp với từ khóa "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold shadow-xs"
            >
              Xem Tất Cả Bài Viết
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
