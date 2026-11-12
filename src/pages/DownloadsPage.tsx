import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  FileDown,
  FileText,
  Search,
  Filter,
  CheckCircle,
  Clock,
  ShieldAlert
} from 'lucide-react';

export const DownloadsPage: React.FC = () => {
  const { downloads } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const categories = [
    'All',
    'Admission Forms',
    'Academic Calendars',
    'Circulars',
    'Syllabus & Curriculum',
    'School Policies'
  ];

  const filtered = downloads.filter(d => {
    const matchCategory = selectedCategory === 'All' || d.category === selectedCategory;
    const matchSearch = d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleDownload = (title: string) => {
    setDownloadSuccessToast(title);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 4000);
  };

  return (
    <div className="w-full bg-[#FAFAF7]">
      {/* Header */}
      <section className="bg-[#102A43] text-white py-16 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-teal-300">
            Document Repository
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Official Download Centre
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            Central repository for verified school admission applications, academic calendars, syllabi blueprints, examination circulars, and institutional policy documents.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#102A43] text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search document by title..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#174A7E]"
            />
          </div>
        </div>

        {/* Download Success Toast Notice */}
        {downloadSuccessToast && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between animate-fadeIn text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Initiating authenticated retrieval for: <strong className="font-semibold">{downloadSuccessToast}</strong>
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-700">Digital Seal Verified</span>
          </div>
        )}

        {/* Documents Table / Card List */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-stone-200 text-stone-500 text-sm">
              No official documents match your selected filters. Try choosing "All" or clearing search terms.
            </div>
          ) : (
            filtered.map(doc => (
              <div
                key={doc.id}
                className="p-5 bg-white rounded-xl border border-stone-200 hover:border-stone-400 shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 text-[#174A7E] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-bold text-stone-900 leading-snug">
                      {doc.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-500">
                      <span className="font-medium text-[#138A8A]">{doc.category}</span>
                      <span>·</span>
                      <span className="font-mono">{doc.fileType}</span>
                      <span>·</span>
                      <span className="font-mono">{doc.fileSize}</span>
                      <span>·</span>
                      <span>Uploaded {doc.uploadDate}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(doc.title)}
                  className="px-4 py-2 bg-[#174A7E] hover:bg-[#102A43] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shrink-0 self-start sm:self-auto"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Document</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Security & Verification Note */}
        <div className="p-6 bg-stone-100 rounded-xl border border-stone-200 flex items-start gap-3 text-xs text-stone-600">
          <ShieldAlert className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            All downloadable publications provided above bear the official watermark and digital signature of the New Dreamland School Administrative Cell. For custom educational verifications, transcripts, or bonafide certificates, please submit an in-person request at the academic registry.
          </p>
        </div>
      </section>
    </div>
  );
};
