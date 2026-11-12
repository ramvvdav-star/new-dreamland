import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  X,
  Search,
  Calendar,
  FileText,
  FileDown,
  Building,
  ArrowRight
} from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    setIsSearchModalOpen,
    setActiveTab,
    announcements,
    news,
    events,
    downloads,
    facilities
  } = useSchool();

  const [term, setTerm] = useState('');

  if (!isSearchModalOpen) return null;

  const cleanTerm = term.trim().toLowerCase();

  // Filter items matching term
  const matchedAnnouncements = cleanTerm
    ? announcements.filter(a => a.title.toLowerCase().includes(cleanTerm) || a.summary.toLowerCase().includes(cleanTerm))
    : [];

  const matchedNews = cleanTerm
    ? news.filter(n => n.title.toLowerCase().includes(cleanTerm) || n.summary.toLowerCase().includes(cleanTerm))
    : [];

  const matchedEvents = cleanTerm
    ? events.filter(e => e.title.toLowerCase().includes(cleanTerm) || e.description.toLowerCase().includes(cleanTerm))
    : [];

  const matchedDownloads = cleanTerm
    ? downloads.filter(d => d.title.toLowerCase().includes(cleanTerm) || d.category.toLowerCase().includes(cleanTerm))
    : [];

  const matchedFacilities = cleanTerm
    ? facilities.filter(f => f.name.toLowerCase().includes(cleanTerm) || f.description.toLowerCase().includes(cleanTerm))
    : [];

  const totalResults = matchedAnnouncements.length + matchedNews.length + matchedEvents.length + matchedDownloads.length + matchedFacilities.length;

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    setIsSearchModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-200 bg-stone-50">
          <Search className="w-5 h-5 text-stone-500 shrink-0" />
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search news, circulars, admission details, facilities, events..."
            autoFocus
            className="w-full bg-transparent text-base text-stone-900 placeholder-stone-400 focus:outline-none"
          />
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-5 overflow-y-auto space-y-6">
          {!cleanTerm ? (
            <div className="text-center py-8 text-stone-400 space-y-2">
              <p className="text-sm">Type any keyword to search across New Dreamland School archives</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs">
                {['Admissions', 'Examination', 'Curriculum', 'Transport', 'Sports', 'Laboratories'].map(kw => (
                  <button
                    key={kw}
                    onClick={() => setTerm(kw)}
                    className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-md transition-colors"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-10 text-stone-500">
              <p className="text-sm">No matches found for "{term}". Try checking your spelling or searching for general topics.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Announcements results */}
              {matchedAnnouncements.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#138A8A] mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Official Announcements ({matchedAnnouncements.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedAnnouncements.map(item => (
                      <div
                        key={item.id}
                        onClick={() => navigateTo('news-events')}
                        className="p-3 rounded-xl border border-stone-100 hover:border-stone-300 hover:bg-stone-50/80 cursor-pointer transition-all group"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-sm font-semibold text-stone-900 group-hover:text-[#174A7E]">
                            {item.title}
                          </p>
                          <span className="text-xs text-stone-400 font-mono shrink-0">{item.date}</span>
                        </div>
                        <p className="text-xs text-stone-600 line-clamp-1 mt-1">{item.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News Articles */}
              {matchedNews.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#174A7E] mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>News & Bulletins ({matchedNews.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedNews.map(item => (
                      <div
                        key={item.id}
                        onClick={() => navigateTo('news-events')}
                        className="p-3 rounded-xl border border-stone-100 hover:border-stone-300 hover:bg-stone-50/80 cursor-pointer transition-all group"
                      >
                        <p className="text-sm font-semibold text-stone-900 group-hover:text-[#174A7E]">
                          {item.title}
                        </p>
                        <p className="text-xs text-stone-600 line-clamp-1 mt-1">{item.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Events */}
              {matchedEvents.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Events & Calendar ({matchedEvents.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedEvents.map(item => (
                      <div
                        key={item.id}
                        onClick={() => navigateTo('news-events')}
                        className="p-3 rounded-xl border border-stone-100 hover:border-stone-300 hover:bg-stone-50/80 cursor-pointer transition-all group"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-sm font-semibold text-stone-900 group-hover:text-[#174A7E]">
                            {item.title}
                          </p>
                          <span className="text-xs text-stone-500 font-mono shrink-0">{item.date}</span>
                        </div>
                        <p className="text-xs text-stone-600 mt-0.5">{item.venue} · {item.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Downloads */}
              {matchedDownloads.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Centre Documents ({matchedDownloads.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedDownloads.map(item => (
                      <div
                        key={item.id}
                        onClick={() => navigateTo('downloads')}
                        className="p-3 rounded-xl border border-stone-100 hover:border-stone-300 hover:bg-stone-50/80 cursor-pointer transition-all flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-semibold text-stone-900">{item.title}</p>
                          <p className="text-xs text-stone-500">{item.category} · {item.fileSize}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Facilities */}
              {matchedFacilities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    <span>Campus Facilities ({matchedFacilities.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedFacilities.map(item => (
                      <div
                        key={item.id}
                        onClick={() => navigateTo('campus')}
                        className="p-3 rounded-xl border border-stone-100 hover:border-stone-300 hover:bg-stone-50/80 cursor-pointer transition-all"
                      >
                        <p className="text-sm font-semibold text-stone-900">{item.name}</p>
                        <p className="text-xs text-stone-600 line-clamp-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-500 flex justify-between items-center px-5">
          <span>Click any result to jump directly to the relevant department</span>
          <span className="font-mono text-[11px]">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
