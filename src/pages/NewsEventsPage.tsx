import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Calendar,
  Clock,
  MapPin,
  FileText,
  Search,
  Filter,
  Users,
  ChevronRight,
  Share2
} from 'lucide-react';

export const NewsEventsPage: React.FC = () => {
  const { news, events, announcements } = useSchool();
  const [activeTabSub, setActiveTabSub] = useState<'news' | 'events' | 'announcements'>('news');
  const [selectedNewsCategory, setSelectedNewsCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const newsCategories = ['All', 'Campus News', 'Academic', 'Sports', 'Cultural', 'Achievements'];

  const filteredNews = news.filter(n => {
    const matchCategory = selectedNewsCategory === 'All' || n.category === selectedNewsCategory;
    const matchSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full bg-[#FAFAF7]">
      {/* Header */}
      <section className="bg-[#102A43] text-white py-16 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-teal-300">
            Institutional Communications
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            News, Events & Official Bulletins
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            Stay informed with verified academic notices, event schedules, institutional milestones, and campus activities.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        {/* Sub-Navigation Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2 p-1.5 bg-stone-200/70 rounded-xl">
            <button
              onClick={() => setActiveTabSub('news')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTabSub === 'news'
                  ? 'bg-white text-[#102A43] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              School News ({news.length})
            </button>
            <button
              onClick={() => setActiveTabSub('events')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTabSub === 'events'
                  ? 'bg-white text-[#102A43] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Upcoming Events ({events.length})
            </button>
            <button
              onClick={() => setActiveTabSub('announcements')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTabSub === 'announcements'
                  ? 'bg-white text-[#102A43] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Official Notices ({announcements.length})
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search in publications..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#174A7E]"
            />
          </div>
        </div>

        {/* 1. NEWS TAB CONTENT */}
        {activeTabSub === 'news' && (
          <div className="space-y-8">
            {/* Category Pill Filters */}
            <div className="flex flex-wrap gap-2">
              {newsCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedNewsCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                    selectedNewsCategory === cat
                      ? 'bg-[#102A43] text-white border-[#102A43]'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* News Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map(article => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
                >
                  {article.imageUrl && (
                    <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm">
                        {article.category}
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 font-mono">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#174A7E] leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-stone-500 font-medium">{article.author}</span>
                      <button
                        onClick={() => alert(`Full article content:\n\n${article.title}\n\n${article.content}`)}
                        className="font-semibold text-[#174A7E] hover:underline flex items-center gap-1"
                      >
                        <span>Read Full Dispatch</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* 2. EVENTS TAB CONTENT */}
        {activeTabSub === 'events' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map(event => (
                <div
                  key={event.id}
                  className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 bg-amber-50 text-amber-900 text-xs font-semibold rounded border border-amber-200">
                        {event.category}
                      </span>
                      <span className="text-xs text-stone-400 font-mono">
                        Audience: {event.audience}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug">
                      {event.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. ANNOUNCEMENTS TAB CONTENT */}
        {activeTabSub === 'announcements' && (
          <div className="space-y-4">
            {announcements.map(ann => (
              <div
                key={ann.id}
                className="p-6 bg-white rounded-xl border border-stone-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                      ann.priority === 'urgent'
                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                        : ann.priority === 'high'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-stone-100 text-stone-700 border border-stone-200'
                    }`}>
                      {ann.category}
                    </span>
                    <span className="text-xs text-stone-400 font-mono">{ann.date}</span>
                  </div>
                  {ann.priority === 'urgent' && (
                    <span className="text-xs font-bold text-rose-700 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
                      <span>Active Notice</span>
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                  {ann.title}
                </h3>

                <p className="text-xs text-stone-700 leading-relaxed">
                  {ann.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
