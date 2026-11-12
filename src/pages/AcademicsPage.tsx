import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { academicStages } from '../data/mockData';
import {
  BookOpen,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  FileDown
} from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  const { setActiveTab } = useSchool();
  const [selectedStageId, setSelectedStageId] = useState(academicStages[0].id);

  const currentStage = academicStages.find(s => s.id === selectedStageId) || academicStages[0];

  return (
    <div className="w-full bg-[#FAFAF7]">
      {/* Header */}
      <section className="bg-[#102A43] text-white py-16 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-teal-300">
            Curriculum & Pedagogy
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Academic Excellence & Intellectual Inquiry
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            A comprehensive, sequential curriculum designed to cultivate disciplined curiosity, deep conceptual understanding, and critical problem-solving from early years through Grade XII.
          </p>
        </div>
      </section>

      {/* Main Framework Section */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        {/* Stage Tabs Navigation */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/70 rounded-xl max-w-fit">
          {academicStages.map(stage => (
            <button
              key={stage.id}
              onClick={() => setSelectedStageId(stage.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedStageId === stage.id
                  ? 'bg-white text-[#102A43] shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {stage.stage}
            </button>
          ))}
        </div>

        {/* Selected Stage Detail Presentation */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-stone-100 pb-6">
            <div>
              <span className="text-xs font-mono font-semibold text-[#138A8A]">
                {currentStage.grades} · {currentStage.ageGroup}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43] mt-1">
                {currentStage.stage}
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('admissions')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#174A7E] hover:bg-[#102A43] rounded-lg transition-colors whitespace-nowrap self-start"
            >
              Enquire for this Stage
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Curricular Overview
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                {currentStage.overview}
              </p>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 pt-2">
                Pedagogical Approach
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                {currentStage.pedagogy}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Core Subjects & Domains
                </h3>
                <ul className="space-y-2">
                  {currentStage.keySubjects.map((sub, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-[#138A8A] shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Co-Curricular Enrichment
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentStage.enrichment.map((enr, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-stone-100 text-stone-700 rounded-md border border-stone-200"
                    >
                      {enr}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Examination & Assessment System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#138A8A] flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Formative & Continuous Assessment
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Regular rubric-based assessments, project presentations, and diagnostic quizzes designed to identify conceptual gaps early without test anxiety.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#174A7E] flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Practical Science & Research Projects
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hands-on lab experimentation from Grade VI onwards, where students write scientific hypotheses, record empirical data, and defend their conclusions.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Transparent Parent Dialogues
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Structured parent-educator conferences held after every term, complete with qualitative portfolios and individual learning goal setting.
            </p>
          </div>
        </div>

        {/* Download Curricular Documents CTA */}
        <div className="p-8 bg-stone-100 rounded-2xl border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Need the Full Syllabus Blueprint or Academic Calendar?
            </h4>
            <p className="text-xs text-stone-600">
              Download approved course breakdowns, booklists, and holiday schedules from our document repository.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('downloads')}
            className="px-5 py-2.5 bg-[#102A43] hover:bg-[#174A7E] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shrink-0"
          >
            <FileDown className="w-4 h-4" />
            <span>Go to Download Centre</span>
          </button>
        </div>
      </section>
    </div>
  );
};
