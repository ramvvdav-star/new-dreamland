import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, openPortalModal } = useSchool();

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102A43] text-stone-300 border-t border-stone-800">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Institutional Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-stone-700 shadow-md flex items-center justify-center p-1 shrink-0">
                <img
                  src="/assets/aistudio/images_7999f962.jpg"
                  alt="New Dreamland Educational Institute Crest"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  New Dreamland
                </span>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#138A8A] font-semibold block">
                  Educational Institute · Ganderbal Kmr
                </span>
                <span className="text-[11px] font-serif italic text-stone-300 block">
                  "Teach Man Which He Knew Not" · Govt. Recognised
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-md pt-2">
              Established in 1998 in Ganderbal, Kashmir, New Dreamland Educational Institute is dedicated to holistic learning,
              intellectual inquiry, ethical discipline, and character development, empowering students with modern education grounded in strong values.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div>Govt. Recognition & Affiliation: <span className="font-mono text-stone-300">Govt. Recognised / J&K Board</span></div>
              <div>District Registration: <span className="font-mono text-stone-300">NDEI-GBL-1998</span></div>
            </div>
          </div>

          {/* Col 2: Academic Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-sans">
              Academics
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Foundational Stage</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Preparatory Wing</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Middle School</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Secondary & XI–XII</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Faculty Directory</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-sans">
              Admissions & Portals
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Admission Criteria</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Fee Schedules</span>
                </button>
              </li>
              <li>
                <button onClick={() => openPortalModal('Parent')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Parent Portal Login</span>
                </button>
              </li>
              <li>
                <button onClick={() => openPortalModal('Student')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Student Workspace</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('downloads')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal-500" />
                  <span>Official Downloads</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-sans">
              Campus & Office
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>New Dreamland Educational Enclave, Ganderbal, Kashmir (J&K) 191201</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+91 194 2490123 / 2490124</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>info@newdreamland.edu.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Mon – Sat: 08:30 AM – 03:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Strip */}
      <div className="border-t border-white/10 bg-[#091A2B] text-stone-400 text-xs py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-stone-400">
            <span>© 1998–2026 New Dreamland School. All rights reserved.</span>
            <span>·</span>
            <span>Accredited Institution</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('contact')} className="hover:text-stone-200 transition-colors">
              Campus Visit
            </button>
            <button onClick={() => handleNav('downloads')} className="hover:text-stone-200 transition-colors">
              School Code of Conduct
            </button>
            <button onClick={() => handleNav('downloads')} className="hover:text-stone-200 transition-colors">
              Safeguarding Policy
            </button>
            <button onClick={() => handleNav('admin')} className="text-teal-400 hover:text-teal-300 font-medium">
              Staff CMS Login
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
