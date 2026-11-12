import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Compass,
  Award,
  BookOpen,
  Users,
  Target,
  Clock,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { faculty, alumni, setActiveTab } = useSchool();

  return (
    <div className="w-full bg-[#FAFAF7]">
      {/* Editorial Header */}
      <section className="bg-[#102A43] text-white py-16 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-300">
              <span>Govt. Recognised</span>
              <span>·</span>
              <span>Ganderbal, Kashmir</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Heritage, Institutional Philosophy & Vision
            </h1>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              Fostering academic excellence, moral integrity, and social responsibility in Ganderbal, Kashmir for over twenty-eight years under the guiding motto: <em className="text-teal-200">"Teach Man Which He Knew Not"</em>.
            </p>
          </div>

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-white border-2 border-teal-400 shadow-xl p-1 shrink-0 flex items-center justify-center self-start sm:self-auto">
            <img
              src="/assets/aistudio/images_7999f962.jpg"
              alt="New Dreamland Educational Institute Crest"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Narrative & History Section */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
              Our Foundation & Heritage · Est. 1998
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#102A43] leading-tight">
              An Enduring Commitment to Scholarly Rigour and Character Formation
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                Founded in 1998 in Ganderbal, Kashmir, New Dreamland Educational Institute was established with a singular
                conviction: that genuine education must harmonize rigorous modern scientific intellect with
                timeless humanistic values.
              </p>
              <p>
                What began as a modest academy of curious learners has blossomed into one of the region’s premier
                comprehensive institutions. Over the past three decades, New Dreamland has continuously expanded its
                laboratories, library archives, athletic facilities, and digital learning suites—always keeping the individual
                child at the center of institutional decisions.
              </p>
              <p>
                Our students graduate not merely with competitive board rankings, but with empathetic perspectives,
                resilience in the face of complexity, and an ingrained sense of civic stewardship.
              </p>
            </div>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#138A8A] flex items-center justify-center font-bold text-xs">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-bold text-stone-900">Our Vision</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To be an exemplary center of academic inquiry, cultivating enlightened scholars who act as compassionate agents of progress in an evolving world.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#174A7E] flex items-center justify-center font-bold text-xs">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-bold text-stone-900">Our Mission</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Empower students through experiential learning, personalized mentorship, state-of-the-art facilities, and strong moral foundations that nurture holistic growth.
                </p>
              </div>
            </div>
          </div>

          {/* Asymmetric Visual Column with Principal's Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm space-y-4">
              <div className="w-20 h-20 rounded-full bg-stone-200 overflow-hidden mx-auto border-2 border-[#138A8A]/40 flex items-center justify-center text-stone-500 font-serif text-2xl font-bold">
                SB
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-serif text-lg font-bold text-stone-900">Dr. Shahida Bano</h3>
                <p className="text-xs text-[#138A8A] font-semibold">Principal & Head of Institution</p>
                <p className="text-[11px] text-stone-500">Ph.D. in Educational Leadership · M.A. English (Gold Medalist)</p>
              </div>
              <blockquote className="font-serif italic text-xs text-stone-700 leading-relaxed border-t border-stone-100 pt-3">
                "Welcome to New Dreamland School. Here, every morning carries the promise of intellectual wonder.
                We see each child as an original thinker, and our dedicated educators work tirelessly to kindle
                that spark into a lifelong flame of inquiry and purpose."
              </blockquote>
            </div>

            <div className="p-6 bg-[#102A43] text-white rounded-2xl space-y-3">
              <h4 className="font-serif text-base font-bold text-teal-300">Our Core Principles</h4>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Uncompromising Academic Discipline & Integrity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Individual Mentorship & Low Student-Teacher Ratio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Ecological Responsibility & Campus Cleanliness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Inclusion, Respect & Empathy Across All Backgrounds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Milestones Section */}
      <section className="py-20 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
              Journey of Progress
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#102A43]">
              Institutional Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2">
              <span className="font-serif text-2xl font-bold text-[#102A43]">1998</span>
              <h4 className="text-sm font-bold text-stone-900">Inception</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Founded with 120 initial students and a passionate faculty of 12 educators committed to quality schooling.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2">
              <span className="font-serif text-2xl font-bold text-[#102A43]">2008</span>
              <h4 className="text-sm font-bold text-stone-900">Secondary Expansion</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Affiliated for board examinations; established modern physics, chemistry, and biology research laboratories.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2">
              <span className="font-serif text-2xl font-bold text-[#102A43]">2017</span>
              <h4 className="text-sm font-bold text-stone-900">Senior Secondary Wing</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Inaugurated dedicated academic blocks for Science, Commerce, and Humanities with competitive exam guidance.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2">
              <span className="font-serif text-2xl font-bold text-[#102A43]">2026</span>
              <h4 className="text-sm font-bold text-stone-900">Modern Digital Hub</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Implementation of integrated smart classrooms, digital library RFID, and expanded 14-acre sports facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Faculty Showcase */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
              Academic Faculty
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#102A43]">
              Senior Educational Mentors
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('academics')}
            className="text-xs font-semibold text-[#174A7E] hover:underline"
          >
            Review Curriculum Methodology
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map(m => (
            <div key={m.id} className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#138A8A]">{m.department}</span>
                <span className="text-[11px] font-mono text-stone-400">{m.experience}</span>
              </div>
              <h3 className="font-serif text-base font-bold text-stone-900">{m.name}</h3>
              <p className="text-xs font-medium text-stone-700">{m.designation}</p>
              <p className="text-xs text-stone-500 pt-2 border-t border-stone-100">
                {m.qualification}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
