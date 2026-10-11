import React, { useState, useMemo } from 'react';
import { Festival } from '../types/costume';
import { Calendar, MapPin, Sparkles, Filter, Search, Tag, Users } from 'lucide-react';

interface FestivalsCalendarSectionProps {
  festivals?: Festival[];
  onExploreCostumesByGroup?: (ethnicGroup: string) => void;
  onSelectCostume?: (costumeId: string) => void;
}

export const FestivalsCalendarSection: React.FC<FestivalsCalendarSectionProps> = ({
  festivals = [],
  onExploreCostumesByGroup,
  onSelectCostume,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const safeFestivals = festivals || [];

  const allTags = useMemo(() => {
    const set = new Set<string>();
    safeFestivals.forEach((f) => (f.tags || []).forEach((t) => set.add(t)));
    return Array.from(set);
  }, [safeFestivals]);

  const filteredFestivals = useMemo(() => {
    return safeFestivals.filter((item) => {
      const matchTag = selectedTag === 'all' || (item.tags || []).includes(selectedTag);
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        (item.name || '').toLowerCase().includes(q) ||
        (item.ethnicGroup || '').toLowerCase().includes(q) ||
        (item.location || '').toLowerCase().includes(q) ||
        (item.description || '').toLowerCase().includes(q);
      return matchTag && matchSearch;
    });
  }, [safeFestivals, selectedTag, searchQuery]);

  return (
    <div id="festivals_calendar_section" className="space-y-6">
      {/* Header Introduction */}
      <div className="bg-gradient-to-r from-emerald-900/90 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-emerald-800/30">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3 border border-emerald-400/30">
            <Calendar className="w-3.5 h-3.5" />
            <span>Di Sản Sống Trong Lễ Hội Truyền Thống</span>
          </div>
          <h2 className="font-serif-cultural text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Lịch Lễ Hội & Sự Kiện Trang Phục 54 Dân Tộc
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Trang phục cổ truyền Việt Nam tỏa sáng rực rỡ và chân thực nhất khi được khoác lên trong các mùa lễ hội văn hóa. Hãy cùng khám phá thời điểm các dân tộc cùng nhau dệt nên những vũ điệu sắc màu.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-stone-50 p-4 rounded-2xl border border-stone-200">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm tên lễ hội, dân tộc, địa phương..."
            className="w-full pl-9 pr-3 py-2 text-sm bg-white rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30 text-stone-800 placeholder-stone-400"
          />
        </div>

        {/* Tag Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedTag === 'all'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            Tất Cả ({festivals.length})
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Festival Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFestivals.map((fest) => (
          <div
            key={fest.id}
            className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col"
          >
            {/* Image banner */}
            <div className="relative h-48 overflow-hidden bg-stone-100">
              <img
                src={fest.image}
                alt={fest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Dân tộc {fest.ethnicGroup}</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center gap-1.5 text-xs text-emerald-200 font-medium mb-1">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>{fest.timeOfYear}</span>
                </div>
                <h3 className="font-serif-cultural font-bold text-base leading-tight text-white drop-shadow-xs">
                  {fest.name}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{fest.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                  {fest.description}
                </p>

                {/* Costume Highlight Box */}
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Nét Nổi Bật Trang Phục:</span>
                  </div>
                  <p className="text-xs text-emerald-800/90 leading-relaxed italic">
                    "{fest.costumeHighlights}"
                  </p>
                </div>
              </div>

              {/* Tags & Action */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {fest.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[11px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {onExploreCostumesByGroup && (
                  <button
                    onClick={() => onExploreCostumesByGroup(fest.ethnicGroup)}
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-900 underline transition-colors cursor-pointer"
                  >
                    Xem Y Phục &rarr;
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFestivals.length === 0 && (
        <div className="text-center py-12 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
          <Calendar className="w-10 h-10 text-stone-400 mx-auto mb-2" />
          <p className="text-sm font-medium text-stone-600">Không tìm thấy lễ hội phù hợp</p>
          <p className="text-xs text-stone-400 mt-1">Hãy thử xóa bộ lọc tìm kiếm hoặc chọn chủ đề khác.</p>
        </div>
      )}
    </div>
  );
};
