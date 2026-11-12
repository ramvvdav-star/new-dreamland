import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Award,
  Users,
  Compass,
  CheckCircle,
  Clock,
  Sparkles,
  ChevronRight,
  FileText
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    stats,
    announcements,
    news,
    events,
    achievements,
    alumni,
    facilities,
    testimonials,
    setActiveTab,
    openPortalModal
  } = useSchool();

  const [activeFacilityIdx, setActiveFacilityIdx] = useState(0);

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeAnnouncements = announcements.filter(a => a.active);

  return (
    <div className="w-full">
      {/* ---------------- SECTION 1: EDITORIAL HERO EXPERIENCE ---------------- */}
      <section className="relative w-full bg-[#102A43] text-white overflow-hidden min-h-[580px] lg:min-h-[680px] flex items-center">
        {/* Campus Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_school_campus_1793888289122.jpg"
            alt="New Dreamland School Campus and Hauptman Quadrangle"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102A43]/95 via-[#102A43]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
          <div className="max-w-2xl space-y-6">
            {/* Architectural Sub-Kicker with Official Logo Crest */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/95 border border-white/40 shadow-lg p-0.5 shrink-0 flex items-center justify-center">
                <img
                  src="/assets/aistudio/images_7999f962.jpg"
                  alt="New Dreamland Educational Institute Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-teal-300">
                  <span>Govt. Recognised</span>
                  <span aria-hidden="true">·</span>
                  <span>Est. 1998</span>
                  <span aria-hidden="true">·</span>
                  <span>Ganderbal, Kmr</span>
                </div>
                <div className="text-[11px] font-serif italic text-stone-200">
                  "Teach Man Which He Knew Not"
                </div>
              </div>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] text-balance">
              Where Learning Inspires. <br />
              <span className="italic font-normal text-stone-200">Where Futures Begin.</span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-xl font-normal">
              At New Dreamland Educational Institute, education transcends four walls. We nurture rigorous intellect,
              grounded character, and creative confidence to prepare students for an interconnected global society.
            </p>

            {/* Direct Action Pair */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigateTo('admissions')}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#102A43] bg-white hover:bg-stone-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Admission Enquiry 2026–27</span>
                <ArrowRight className="w-4 h-4 text-[#102A43] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigateTo('about')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-stone-100 border border-white/40 hover:border-white rounded-lg transition-all backdrop-blur-sm"
              >
                Explore Institutional Vision
              </button>
            </div>

            {/* Subtle Operational Badge */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-stone-300">
              <div>
                <span className="font-serif text-xl font-bold text-white block">100%</span>
                <span className="text-stone-300">Board Distinction Rate</span>
              </div>
              <div className="h-8 w-px bg-white/20 hidden sm:block" />
              <div>
                <span className="font-serif text-xl font-bold text-white block">18:1</span>
                <span className="text-stone-300">Student-Teacher Ratio</span>
              </div>
              <div className="h-8 w-px bg-white/20 hidden sm:block" />
              <div>
                <span className="font-serif text-xl font-bold text-white block">14+ Acres</span>
                <span className="text-stone-300">Eco-Friendly Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TICKER: LIVE URGENT ANNOUNCEMENT STRIP ---------------- */}
      {activeAnnouncements.length > 0 && (
        <section className="bg-amber-500 text-stone-950 px-4 sm:px-8 py-2.5 border-b border-amber-600">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="px-2 py-0.5 bg-stone-950 text-amber-300 text-[10px] font-bold uppercase tracking-wider rounded shrink-0">
                Notice
              </span>
              <p className="text-xs font-medium truncate">
                {activeAnnouncements[0].title}
              </p>
            </div>
            <button
              onClick={() => navigateTo('news-events')}
              className="text-xs font-bold underline hover:text-stone-900 shrink-0 whitespace-nowrap"
            >
              Read Notice
            </button>
          </div>
        </section>
      )}

      {/* ---------------- SECTION 2: EDITORIAL INTRODUCTION & PRINCIPAL'S WELCOME ---------------- */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Asymmetric Text Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
                The Institutional Promise
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#102A43] leading-tight text-balance">
                Building Knowledge. <br />
                Shaping Character. <br />
                Creating Tomorrow.
              </h2>

              <div className="space-y-4 text-stone-700 text-base leading-relaxed max-w-2xl">
                <p>
                  Since its foundation in 1998, New Dreamland School has stood as an intellectual
                  and cultural beacon, championing educational inquiry that honors traditional values
                  while embracing modern scientific pedagogy.
                </p>
                <p>
                  We believe that childhood and adolescence are not rehearsal stages for life, but vital
                  foundations of self-discovery. From early sensory foundations to senior secondary research
                  laboratories, our educators guide students to become discerning scholars, compassionate citizens,
                  and forward-thinking leaders.
                </p>
              </div>

              {/* Leadership Quote Card */}
              <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-3 shadow-sm">
                <p className="font-serif italic text-base text-stone-800 leading-relaxed">
                  "Our mission is simple yet profound: to ignite within every young person the curiosity to question,
                  the empathy to understand, and the courage to act with unyielding integrity."
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Dr. Shahida Bano</h4>
                    <p className="text-[11px] text-stone-500">Principal & Head of Institution · Ph.D., M.A. (Gold Medalist)</p>
                  </div>
                  <button
                    onClick={() => navigateTo('about')}
                    className="text-xs font-semibold text-[#174A7E] hover:underline"
                  >
                    Read Principal's Letter
                  </button>
                </div>
              </div>
            </div>

            {/* Asymmetric Visual Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-[4/3]">
                <img
                  src="/src/assets/images/academic_smart_classroom_1793888291259.jpg"
                  alt="Students engaged in collaborative inquiry in a modern classroom"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
                  <div className="font-semibold">Collaborative Academic Studios</div>
                  <div className="text-stone-300 text-[11px]">Fostering analytical discussions and team problem-solving</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-4 bg-white border border-stone-200 rounded-xl">
                  <div className="font-serif text-2xl font-bold text-[#102A43]">28+</div>
                  <div className="font-semibold text-stone-800 mt-0.5">Years of Service</div>
                  <div className="text-stone-500 text-[11px] mt-1">Sustained institutional growth since 1998</div>
                </div>
                <div className="p-4 bg-white border border-stone-200 rounded-xl">
                  <div className="font-serif text-2xl font-bold text-[#138A8A]">140+</div>
                  <div className="font-semibold text-stone-800 mt-0.5">Specialized Faculty</div>
                  <div className="text-stone-500 text-[11px] mt-1">Postgraduate mentors across faculties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: INSTITUTIONAL HIGHLIGHTS & STATS ---------------- */}
      <section className="py-14 bg-[#102A43] text-white border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-teal-300 tabular-nums">
                {stats.yearsOfExcellence}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-300 mt-1">
                Years of Heritage
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5">Founded in 1998</p>
            </div>

            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-white tabular-nums">
                {stats.studentsEnrolled.toLocaleString()}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-300 mt-1">
                Scholars Enrolled
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5">Pre-Primary to Grade XII</p>
            </div>

            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-teal-300 tabular-nums">
                {stats.facultyMembers}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-300 mt-1">
                Faculty Educators
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5">Certified Mentors</p>
            </div>

            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-white tabular-nums">
                {stats.studentTeacherRatio}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-300 mt-1">
                Classroom Ratio
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5">Personalized Guidance</p>
            </div>

            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-teal-300 tabular-nums">
                {stats.boardPassPercentage}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-300 mt-1">
                Board Pass Rate
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5">Consistent Accolades</p>
            </div>

            <div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-white tabular-nums">
                {stats.campusAcres}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-300 mt-1">
                Campus Grounds
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5">Lush Academic Enclave</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: WHY CHOOSE NEW DREAMLAND SCHOOL ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
              Distinctive Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#102A43] tracking-tight text-balance">
              Why Discerning Parents Entrust Us With Their Children
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              We cultivate a balanced learning culture where academic rigor, ethical grounding,
              physical fitness, and artistic exploration are given equal prominence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#102A43] text-white flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-teal-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Rigorous Academic Foundation
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Interdisciplinary curriculum fostering deep conceptual mastery in mathematics,
                humanities, languages, and laboratory sciences, validated by 100% board excellence.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#102A43] text-white flex items-center justify-center">
                <Users className="w-5 h-5 text-teal-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Individual Student Care
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                With a low 18:1 pupil-to-teacher ratio, mentors monitor each child’s intellectual
                trajectory, emotional wellbeing, and unique talents through structured progress reviews.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#102A43] text-white flex items-center justify-center">
                <Compass className="w-5 h-5 text-teal-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Modern Research Infrastructure
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                From digital smartboards and RFID-enabled central library to advanced physics,
                chemistry, and AI-enabled computer suites built for experiential discovery.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#102A43] text-white flex items-center justify-center">
                <Award className="w-5 h-5 text-teal-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Values, Character & Leadership
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Civic responsibility, ecological stewardship, and mutual respect are woven into
                daily school life through community outreach, student governance, and assemblies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: ACADEMIC STAGES PREVIEW ---------------- */}
      <section className="py-20 bg-[#FAFAF7] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
                Educational Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#102A43] tracking-tight">
                Academic Stages from Nursery to Senior Secondary
              </h2>
            </div>
            <button
              onClick={() => navigateTo('academics')}
              className="text-xs font-semibold text-[#174A7E] hover:underline flex items-center gap-1.5"
            >
              <span>View Full Academic Framework</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-4 hover:border-stone-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono font-medium text-[#138A8A]">Stage 01</span>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Foundational Stage
                </h3>
                <div className="text-xs text-stone-500">Nursery to Grade II · Ages 3–8</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Experiential, sensory, and play-based inquiry developing foundational literacy,
                  speech clarity, numbers, and emotional confidence in joyful learning stations.
                </p>
              </div>
              <button
                onClick={() => navigateTo('academics')}
                className="text-xs font-semibold text-[#174A7E] hover:underline pt-4 border-t border-stone-100 flex items-center justify-between"
              >
                <span>Curriculum Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-4 hover:border-stone-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono font-medium text-[#138A8A]">Stage 02</span>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Preparatory Wing
                </h3>
                <div className="text-xs text-stone-500">Grades III to V · Ages 8–11</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Transition into structured study, reading fluency, mathematical logic, science
                  workshops, language arts, and collaborative group investigations.
                </p>
              </div>
              <button
                onClick={() => navigateTo('academics')}
                className="text-xs font-semibold text-[#174A7E] hover:underline pt-4 border-t border-stone-100 flex items-center justify-between"
              >
                <span>Curriculum Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-4 hover:border-stone-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono font-medium text-[#138A8A]">Stage 03</span>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Middle School
                </h3>
                <div className="text-xs text-stone-500">Grades VI to VIII · Ages 11–14</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Critical thinking, structured laboratory experimentation, debate societies,
                  computational thinking, coding fundamentals, and independent research projects.
                </p>
              </div>
              <button
                onClick={() => navigateTo('academics')}
                className="text-xs font-semibold text-[#174A7E] hover:underline pt-4 border-t border-stone-100 flex items-center justify-between"
              >
                <span>Curriculum Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-4 hover:border-stone-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono font-medium text-[#138A8A]">Stage 04</span>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Senior Secondary (IX–XII)
                </h3>
                <div className="text-xs text-stone-500">Science, Commerce & Humanities</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Rigorous preparation for board examinations and national entrance tests, paired
                  with personalized university counseling and academic fellowship tracks.
                </p>
              </div>
              <button
                onClick={() => navigateTo('academics')}
                className="text-xs font-semibold text-[#174A7E] hover:underline pt-4 border-t border-stone-100 flex items-center justify-between"
              >
                <span>Curriculum Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: CAMPUS & INFRASTRUCTURE SHOWCASE ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
                Environment for Growth
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#102A43] tracking-tight">
                World-Class Campus & Infrastructure
              </h2>
            </div>
            <button
              onClick={() => navigateTo('campus')}
              className="text-xs font-semibold text-[#174A7E] hover:underline flex items-center gap-1.5"
            >
              <span>Explore All 6 Campus Facilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Facility Feature Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
            {/* Facility Selector List */}
            <div className="lg:col-span-5 space-y-2">
              {facilities.slice(0, 4).map((fac, idx) => (
                <button
                  key={fac.id}
                  onClick={() => setActiveFacilityIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeFacilityIdx === idx
                      ? 'bg-white shadow-sm border border-stone-200 text-[#102A43]'
                      : 'hover:bg-stone-100/80 text-stone-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base font-bold">{fac.name}</span>
                    {fac.stats && (
                      <span className="text-[11px] font-mono text-[#138A8A] font-medium">
                        {fac.stats}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-1">{fac.description}</p>
                </button>
              ))}
            </div>

            {/* Active Facility Preview Display */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-xl overflow-hidden aspect-[16/10] bg-stone-900 relative shadow-md">
                <img
                  src={
                    facilities[activeFacilityIdx]?.imageUrl ||
                    '/src/assets/images/school_library_resource_1793888292246.jpg'
                  }
                  alt={facilities[activeFacilityIdx]?.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-xl font-bold text-stone-900">
                  {facilities[activeFacilityIdx]?.name}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {facilities[activeFacilityIdx]?.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {facilities[activeFacilityIdx]?.features.map((feat, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-stone-700 bg-white border border-stone-200 px-2.5 py-1 rounded"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 7: NEWS & UPCOMING EVENTS SPLIT ---------------- */}
      <section className="py-20 bg-[#FAFAF7] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col (7 Cols): Latest News & Bulletins */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
                    Campus Dispatches
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#102A43]">
                    Latest News & Insights
                  </h3>
                </div>
                <button
                  onClick={() => navigateTo('news-events')}
                  className="text-xs font-semibold text-[#174A7E] hover:underline"
                >
                  View All News
                </button>
              </div>

              <div className="space-y-4">
                {news.slice(0, 3).map(article => (
                  <div
                    key={article.id}
                    onClick={() => navigateTo('news-events')}
                    className="p-5 bg-white rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all flex flex-col sm:flex-row gap-5 group"
                  >
                    {article.imageUrl && (
                      <div className="sm:w-36 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-stone-100">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 text-[11px] text-stone-500">
                        <span className="font-medium text-[#138A8A]">{article.category}</span>
                        <span>·</span>
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#174A7E] leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col (5 Cols): Upcoming Calendar & Events */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    Institutional Diary
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#102A43]">
                    Upcoming Events
                  </h3>
                </div>
                <button
                  onClick={() => navigateTo('news-events')}
                  className="text-xs font-semibold text-amber-800 hover:underline"
                >
                  Calendar
                </button>
              </div>

              <div className="space-y-3">
                {events.slice(0, 4).map(evt => (
                  <div
                    key={evt.id}
                    className="p-4 bg-white rounded-xl border border-stone-200 space-y-2 hover:border-amber-300 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg text-center shrink-0">
                        <div className="text-[10px] uppercase font-bold text-amber-800">
                          {evt.date.split(' ')[0]}
                        </div>
                        <div className="font-serif text-lg font-bold text-amber-950">
                          {evt.date.split(' ')[1]?.replace(',', '') || '18'}
                        </div>
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="text-[11px] font-semibold text-amber-800">
                          {evt.category} · {evt.time}
                        </div>
                        <h4 className="font-serif text-sm font-bold text-stone-900 leading-snug">
                          {evt.title}
                        </h4>
                        <p className="text-xs text-stone-500 line-clamp-1">
                          {evt.venue}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 8: STUDENT ACHIEVEMENTS & ALUMNI SUCCESS ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
                Honors & Legacy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#102A43] tracking-tight">
                Student Distinctions & Alumni Footprints
              </h2>
            </div>
            <button
              onClick={() => navigateTo('student-life')}
              className="text-xs font-semibold text-[#174A7E] hover:underline flex items-center gap-1.5"
            >
              <span>Explore Student Life</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map(ach => (
              <div
                key={ach.id}
                className="p-6 rounded-xl border border-stone-200 bg-stone-50/40 space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-semibold text-[#138A8A]">{ach.category}</span>
                  <span className="font-mono">{ach.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                  {ach.title}
                </h3>
                <div className="text-xs font-medium text-stone-700">
                  Student: <span className="font-semibold text-stone-900">{ach.studentName}</span> ({ach.classGrade})
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {ach.description}
                </p>
                <div className="pt-2 text-[11px] font-semibold text-[#102A43] border-t border-stone-200">
                  Award: {ach.award}
                </div>
              </div>
            ))}
          </div>

          {/* Alumni Voices Card */}
          <div className="p-8 bg-[#102A43] text-white rounded-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                  Alumni Society
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Voices Across the Globe
                </h3>
              </div>
              <button
                onClick={() => navigateTo('about')}
                className="text-xs text-stone-300 hover:text-white underline hidden sm:inline"
              >
                Alumni Network Directory
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alumni.map(alm => (
                <div key={alm.id} className="space-y-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-serif italic text-xs text-stone-200 leading-relaxed">
                    "{alm.testimonial}"
                  </p>
                  <div>
                    <h4 className="text-xs font-bold text-white">{alm.name}</h4>
                    <p className="text-[11px] text-teal-300">{alm.currentRole} · {alm.organization}</p>
                    <p className="text-[10px] text-stone-400 font-mono mt-0.5">{alm.graduationYear} · {alm.higherEducation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 9: PARENT TESTIMONIALS ---------------- */}
      <section className="py-20 bg-[#FAFAF7] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
              Parent Perspectives
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#102A43]">
              Words of Trust from School Families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div
                key={t.id}
                className="p-6 bg-white rounded-xl border border-stone-200 space-y-4 shadow-sm"
              >
                <p className="font-serif italic text-sm text-stone-700 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-stone-100">
                  <h4 className="text-xs font-bold text-stone-900">{t.author}</h4>
                  <p className="text-[11px] text-stone-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 10: ADMISSION CALL TO ACTION ---------------- */}
      <section className="py-20 bg-[#174A7E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
              Session 2026–2027 Admissions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Your Child’s Journey Towards a Brighter Future Begins Here.
            </h2>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
              We invite parents to submit an admission enquiry, schedule an interactive campus walk-through,
              and discover our values-driven academic environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => navigateTo('admissions')}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#102A43] bg-white hover:bg-stone-100 rounded-lg shadow-lg transition-all"
              >
                Start Online Admission Enquiry
              </button>
              <button
                onClick={() => navigateTo('downloads')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/40 hover:border-white rounded-lg transition-all"
              >
                Download School Prospectus
              </button>
            </div>
            <p className="text-xs text-stone-300 pt-2">
              Admissions Helpdesk: +91 194 2490123 · Monday to Saturday 08:30 AM – 03:30 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
