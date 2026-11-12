import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  CheckCircle,
  FileText,
  Calendar,
  AlertCircle,
  HelpCircle,
  Send,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const { submitEnquiry, setActiveTab } = useSchool();

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    dob: '',
    currentSchool: '',
    classApplyingFor: 'Grade I',
    phone: '',
    email: '',
    preferredContact: 'Phone' as 'Phone' | 'Email' | 'WhatsApp',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.studentName || !formData.phone) {
      setFormError('Please enter parent name, student name, and a valid contact phone number.');
      return;
    }
    setFormError('');
    submitEnquiry(formData);
    setSubmitted(true);
  };

  const steps = [
    {
      step: '01',
      title: 'Online Enquiry & School Prospectus',
      desc: 'Submit the admission enquiry form below or download the prospectus to understand grade-wise eligibility and requirements.'
    },
    {
      step: '02',
      title: 'Campus Walk-Through & Interaction',
      desc: 'Prospective parents and students are invited for an informal campus orientation, classroom visit, and meeting with the academic counselor.'
    },
    {
      step: '03',
      title: 'Document Verification & Assessment',
      desc: 'Submission of birth certificate, previous school records, and diagnostic foundational evaluation (for Grade III and above).'
    },
    {
      step: '04',
      title: 'Admission Offer & Enrollment',
      desc: 'Formal offer issued by the admissions committee followed by fee remittance and student ID card issuance via the digital portal.'
    }
  ];

  const faqs = [
    {
      q: 'What is the minimum age criterion for Nursery and Kindergarten admissions?',
      a: 'For Nursery admission in Session 2026–27, the child should have completed 3 years of age as of March 31, 2026. For Kindergarten, the child should be 4+ years old.'
    },
    {
      q: 'Is transport facility guaranteed across all residential areas?',
      a: 'Yes, New Dreamland operates an extensive fleet of GPS-tracked, CCTV-enabled school buses covering major sectors and adjacent suburban routes. Detailed route stops can be reviewed in the Transport Circular.'
    },
    {
      q: 'Are mid-session admissions permitted for transferring families?',
      a: 'Mid-term admissions are considered on a case-by-case basis subject to seat availability in the desired grade and submission of an official Transfer Certificate (TC).'
    },
    {
      q: 'What documents are required at the time of admission submission?',
      a: 'Original Birth Certificate (for verification), Transfer Certificate from previous recognized school (Grade II onwards), past two years’ report cards, 4 passport photos, and immunization record.'
    }
  ];

  return (
    <div className="w-full bg-[#FAFAF7]">
      {/* Header */}
      <section className="bg-[#102A43] text-white py-16 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-teal-300">
            Admissions Session 2026–2027
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Begin Your Child’s Journey at New Dreamland
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            Transparent, merit-based, and student-centered admissions open for Pre-Primary, Primary, Middle, and Senior Secondary stages.
          </p>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
            Clear & Transparent Process
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#102A43]">
            Step-by-Step Admission Procedure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.step} className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
              <span className="font-serif text-3xl font-bold text-[#138A8A] block">
                {s.step}
              </span>
              <h3 className="font-serif text-base font-bold text-stone-900 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Two-Column Form & Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          {/* Left Column: Official Admission Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-1 border-b border-stone-100 pb-4">
              <h3 className="font-serif text-2xl font-bold text-[#102A43]">
                Official Admission Enquiry Form
              </h3>
              <p className="text-xs text-stone-500">
                Please complete this form. Our admissions office will contact you within 24 business hours to arrange counseling.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-emerald-950">
                  Enquiry Submitted Successfully
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{formData.parentName}</span>. Your enquiry for{' '}
                  <span className="font-semibold">{formData.studentName}</span> ({formData.classApplyingFor}) has been registered in our admissions system.
                </p>
                <div className="text-xs text-emerald-700 font-mono">
                  Reference ID: NDS/ADM-2026/ENQ-892
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      parentName: '',
                      studentName: '',
                      dob: '',
                      currentSchool: '',
                      classApplyingFor: 'Grade I',
                      phone: '',
                      email: '',
                      preferredContact: 'Phone',
                      message: ''
                    });
                  }}
                  className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Farooq Ahmad Mir"
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={e => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Mehak Mir"
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Student Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={e => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Class / Grade Applying For *
                    </label>
                    <select
                      value={formData.classApplyingFor}
                      onChange={e => setFormData({ ...formData, classApplyingFor: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    >
                      <option value="Nursery">Nursery (Early Years)</option>
                      <option value="Kindergarten">Kindergarten (KG)</option>
                      <option value="Grade I">Grade I</option>
                      <option value="Grade II">Grade II</option>
                      <option value="Grade III">Grade III</option>
                      <option value="Grade IV">Grade IV</option>
                      <option value="Grade V">Grade V</option>
                      <option value="Grade VI">Grade VI</option>
                      <option value="Grade VII">Grade VII</option>
                      <option value="Grade VIII">Grade VIII</option>
                      <option value="Grade IX">Grade IX</option>
                      <option value="Grade X">Grade X</option>
                      <option value="Grade XI - Science">Grade XI (Medical / Non-Medical Science)</option>
                      <option value="Grade XI - Commerce">Grade XI (Commerce with Mathematics)</option>
                      <option value="Grade XI - Humanities">Grade XI (Humanities & Social Sciences)</option>
                      <option value="Grade XII">Grade XII (Transfer)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Parent Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94190 00000"
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Current School (if applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.currentSchool}
                      onChange={e => setFormData({ ...formData, currentSchool: e.target.value })}
                      placeholder="e.g. Previous Institution name"
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Preferred Mode of Contact
                    </label>
                    <select
                      value={formData.preferredContact}
                      onChange={e => setFormData({ ...formData, preferredContact: e.target.value as any })}
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    >
                      <option value="Phone">Phone Call</option>
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Email">Email Communication</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Specific Queries / Special Considerations
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Inquire about transport routes, sports training, hostel, or schedule a campus visit..."
                    className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#174A7E] hover:bg-[#102A43] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Admission Criteria & Helpdesk */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-3">
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Required Documentation Checklist
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A] mt-1.5 shrink-0" />
                  <span>Original Municipal or Hospital Birth Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A] mt-1.5 shrink-0" />
                  <span>Countersigned School Transfer Certificate (TC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A] mt-1.5 shrink-0" />
                  <span>Certified academic transcript of the preceding two sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A] mt-1.5 shrink-0" />
                  <span>Four recent passport photographs of the student</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#138A8A] mt-1.5 shrink-0" />
                  <span>Residential address proof (Aadhaar / Utility Bill)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#102A43] text-white rounded-xl space-y-3">
              <h4 className="font-serif text-base font-bold text-teal-300">
                Admissions Counseling Desk
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Parents are warmly encouraged to visit the campus during office working hours. Our counselors are happy to guide you through course selection and campus tours.
              </p>
              <div className="text-xs space-y-1 pt-2 border-t border-white/10 text-stone-300">
                <div>Timings: <span className="font-medium text-white">Mon–Sat: 08:30 AM – 03:30 PM</span></div>
                <div>Direct Helpline: <span className="font-medium text-white">+91 194 2490123</span></div>
                <div>Email: <span className="font-medium text-teal-300">admissions@newdreamland.edu.in</span></div>
              </div>
            </div>

            {/* Quick Link to Downloads */}
            <div className="p-4 bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-stone-800">
                Official Fee Structure Schedule (PDF)
              </span>
              <button
                onClick={() => setActiveTab('downloads')}
                className="text-xs font-bold text-[#174A7E] hover:underline flex items-center gap-1"
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-12 space-y-6">
          <div className="max-w-xl space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
              Clarifications
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#102A43]">
              Frequently Asked Questions on Admissions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-xl space-y-2">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#138A8A] shrink-0 mt-0.5" />
                  <h4 className="font-serif text-sm font-bold text-stone-900 leading-snug">
                    {faq.q}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
