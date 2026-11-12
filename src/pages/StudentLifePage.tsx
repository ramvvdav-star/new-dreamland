import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Trophy,
  Palette,
  Compass,
  Sparkles,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';

export const StudentLifePage: React.FC = () => {
  const { achievements, setActiveTab } = useSchool();

  const clubs = [
    {
      name: 'Computational Robotics & AI Circle',
      mentor: 'Department of Computer Science',
      desc: 'Hands-on programming with microcontrollers, autonomous rovers, and sensor telemetry competing in regional innovation challenges.'
    },
    {
      name: 'The Veritas Rhetoric & Parliamentary Debate Society',
      mentor: 'Department of Humanities',
      desc: 'Developing persuasive argumentation, public speaking poise, and international relations diplomacy through Model UN and inter-school trophies.'
    },
    {
      name: 'Eco-Warriors Environmental Conservation Society',
      mentor: 'Department of Biology',
      desc: 'Managing campus botanical nurseries, native tree planting drives, rainwater harvesting oversight, and community plastic-reduction drives.'
    },
    {
      name: 'Chamber Symphony & Fine Arts Guild',
      mentor: 'Performing & Visual Arts Wing',
      desc: 'Instruction in classical string instruments, choral vocal harmonies, landscape oil painting, and ceramic pottery sculpting.'
    },
    {
      name: 'Young Entrepreneurs & Commerce Forum',
      mentor: 'Department of Commerce & Economics',
      desc: 'Simulating business plan pitches, micro-equity management, and case study competitions analyzing sustainable enterprise models.'
    },
    {
      name: 'Heritage & Historical Research Club',
      mentor: 'Department of Social Sciences',
      desc: 'Field visits to local historical monuments, oral history documentation, archival preservation, and student-published chronicles.'
    }
  ];

  const sportsDisciplines = [
    { name: 'Cricket & Turf Practice', coach: 'NIS Certified Coach', venue: 'Main Turf Oval' },
    { name: 'Basketball & Streetball', coach: 'State Champion Trainer', venue: 'Floodlit Synthetic Courts' },
    { name: 'Football (Soccer)', coach: 'AFC Licensed Instructor', venue: 'Full Regulation Grass Pitch' },
    { name: 'Track & Field Athletics', coach: 'Athletics Federation Certified', venue: '400m 6-Lane Running Track' },
    { name: 'Table Tennis & Badminton', coach: 'National Rank Coach', venue: 'Indoor Gymnasium Hall' },
    { name: 'Martial Arts & Self-Defense', coach: 'Black Belt 4th Dan', venue: 'Dedicated Dojo Studio' }
  ];

  return (
    <div className="w-full bg-[#FAFAF7]">
      {/* Header */}
      <section className="bg-[#102A43] text-white py-16 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-teal-300">
            Beyond the Classroom
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Student Life, Sports & Cultural Vibrancy
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            Nurturing athletic resilience, artistic expression, scientific curiosity, and camaraderie through dynamic clubs, inter-house competitions, and leadership councils.
          </p>
        </div>
      </section>

      {/* House System & Ethos */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
              The Four Houses
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#102A43] leading-tight">
              Fostering Team Spirit, Healthy Rivalry & Lifelong Bonds
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Every student upon enrollment joins one of four historic school houses. Guided by House Masters and elected student captains, the house system cultivates leadership, sportsmanship, and mutual accountability through year-round athletic leagues, academic quizzes, and theatrical cups.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 bg-white border border-stone-200 rounded-xl text-center space-y-1 shadow-sm">
                <div className="w-4 h-4 rounded-full bg-blue-600 mx-auto" />
                <h4 className="font-serif text-sm font-bold text-stone-900">Tagore House</h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-wider">Creativity & Wisdom</p>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-xl text-center space-y-1 shadow-sm">
                <div className="w-4 h-4 rounded-full bg-emerald-600 mx-auto" />
                <h4 className="font-serif text-sm font-bold text-stone-900">Iqbal House</h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-wider">Vision & Endeavor</p>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-xl text-center space-y-1 shadow-sm">
                <div className="w-4 h-4 rounded-full bg-amber-600 mx-auto" />
                <h4 className="font-serif text-sm font-bold text-stone-900">Kalam House</h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-wider">Inquiry & Courage</p>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-xl text-center space-y-1 shadow-sm">
                <div className="w-4 h-4 rounded-full bg-rose-600 mx-auto" />
                <h4 className="font-serif text-sm font-bold text-stone-900">Raman House</h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-wider">Discovery & Truth</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 bg-[#102A43] text-white rounded-2xl space-y-4">
            <h3 className="font-serif text-xl font-bold text-teal-300">
              Student Leadership Council
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Democratic student leadership is central to our values. The Head Boy, Head Girl, Sports Captain, Cultural Secretary, and House Captains represent the student voice, organize morning assemblies, lead peer mentoring, and liaise with the administrative board.
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-stone-300 space-y-1">
              <div className="font-semibold text-white">Elected Council Responsibilities:</div>
              <div>• Organization of Annual Sports & Literary Festivals</div>
              <div>• Student Welfare and Anti-Bullying Peer Support</div>
              <div>• Clean Campus and Eco-Friendly Initiatives</div>
            </div>
          </div>
        </div>

        {/* Clubs and Societies Grid */}
        <div className="space-y-6 pt-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
              Co-Curricular Circles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43]">
              Student Clubs & Societies
            </h3>
            <p className="text-xs text-stone-600">
              Every student participates in at least two clubs per session, encouraging diverse passions alongside core academic subjects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((c, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-stone-200 space-y-3 shadow-sm hover:border-stone-400 transition-all">
                <div className="text-[11px] font-semibold text-[#138A8A]">{c.mentor}</div>
                <h4 className="font-serif text-base font-bold text-stone-900">{c.name}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sports & Athletics Showcase */}
        <div className="space-y-6 pt-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
              Athletics & Physical Conditioning
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43]">
              Sports Disciplines & Coaching Academy
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsDisciplines.map((sp, idx) => (
              <div key={idx} className="p-5 bg-white rounded-xl border border-stone-200 space-y-2 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#138A8A] flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-bold text-stone-900">{sp.name}</h4>
                  <div className="text-xs text-stone-600">{sp.coach}</div>
                  <div className="text-[11px] text-stone-400 font-mono">{sp.venue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Achievements Roster */}
        <div className="space-y-6 pt-10">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
                Wall of Fame
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43]">
                Recent Student Accolades
              </h3>
            </div>
            <button
              onClick={() => setActiveTab('admissions')}
              className="text-xs font-semibold text-[#174A7E] hover:underline"
            >
              Enroll Your Child
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map(a => (
              <div key={a.id} className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
                <div className="flex justify-between items-center text-xs text-stone-500">
                  <span className="font-semibold text-[#138A8A]">{a.category}</span>
                  <span className="font-mono">{a.date}</span>
                </div>
                <h4 className="font-serif text-base font-bold text-stone-900">{a.title}</h4>
                <div className="text-xs text-stone-700 font-medium">{a.studentName} · {a.classGrade}</div>
                <p className="text-xs text-stone-600 leading-relaxed">{a.description}</p>
                <div className="pt-2 text-[11px] font-semibold text-[#174A7E] border-t border-stone-100">
                  {a.award}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
