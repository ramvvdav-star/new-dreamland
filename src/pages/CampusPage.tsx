import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Building2,
  FlaskConical,
  BookOpen,
  Trophy,
  Palette,
  Bus,
  CheckCircle2,
  Maximize2,
  X
} from 'lucide-react';

export const CampusPage: React.FC = () => {
  const { facilities, setActiveTab } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalImage, setActiveModalImage] = useState<{ url: string; title: string } | null>(null);

  const categories = ['All', 'Classrooms', 'Laboratories', 'Library', 'Sports & Fitness', 'Arts & Studios', 'Transport'];

  const filtered = selectedCategory === 'All'
    ? facilities
    : facilities.filter(f => f.category === selectedCategory);

  return (
    <div className="w-full bg-[#FAFAF7]">
      {/* Header */}
      <section className="bg-[#102A43] text-white py-16 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-teal-300">
            Infrastructure & Environment
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Campus Architecture & Modern Facilities
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            Spanning over 14 manicured acres, New Dreamland School is architected to optimize natural light, acoustic tranquility, safety, and experiential learning.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/60 rounded-xl max-w-fit">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-[#102A43] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(fac => {
            const displayImage = fac.imageUrl || '/src/assets/images/school_library_resource_1793888292246.jpg';

            return (
              <div
                key={fac.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                  <img
                    src={displayImage}
                    alt={fac.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => setActiveModalImage({ url: displayImage, title: fac.name })}
                      className="p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
                      title="Enlarge photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {fac.stats && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#102A43]/90 text-teal-300 text-[11px] font-mono font-medium backdrop-blur-sm">
                      {fac.stats}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#138A8A]">
                      {fac.category}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                      {fac.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="pt-3 border-t border-stone-100 space-y-1.5">
                    {fac.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#138A8A] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety & Safeguarding Notice */}
        <div className="p-8 bg-[#102A43] text-white rounded-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                Institutional Safety Architecture
              </span>
              <h3 className="font-serif text-2xl font-bold mt-1">
                Zero-Compromise Campus Security & Surveillance
              </h3>
            </div>
            <button
              onClick={() => setActiveTab('downloads')}
              className="px-4 py-2 bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold rounded-lg transition-colors shrink-0"
            >
              Read Safety Policy
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-300 pt-2 border-t border-white/10">
            <div>
              <div className="font-semibold text-white mb-1">CCTV Monitoring</div>
              <div>Over 180 high-resolution cameras covering perimeter walls, corridors, and transport vehicles.</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">Medical Infirmary</div>
              <div>Full-time registered nurse and emergency doctor-on-call with dedicated infirmary beds.</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">Access Control</div>
              <div>Biometric visitor verification and secure gated entry checkpoints manned 24 hours.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 rounded-full hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeModalImage.url}
              alt={activeModalImage.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[75vh] object-contain"
            />
            <div className="p-4 bg-stone-950 text-white text-center font-serif text-sm">
              {activeModalImage.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
