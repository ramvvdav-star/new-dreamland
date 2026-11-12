import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Building
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FAFAF7]">
      {/* Header */}
      <section className="bg-[#102A43] text-white py-16 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-teal-300">
            Connect With Us
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Campus Location & Contact Directory
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            Our admissions counselors, academic coordinators, and administrative officers are available to assist you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Office Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-stone-200 shadow-sm p-0.5 shrink-0 flex items-center justify-center">
                <img
                  src="/assets/aistudio/images_7999f962.jpg"
                  alt="New Dreamland Educational Institute Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#138A8A]">
                  Head Office & Main Campus
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#102A43]">
                  New Dreamland Educational Institute
                </h2>
                <p className="text-[11px] font-serif italic text-stone-500">
                  "Teach Man Which He Knew Not" · Govt. Recognised
                </p>
              </div>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm space-y-4 text-xs text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#138A8A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-stone-900 text-sm mb-0.5">Campus Address</div>
                  <p className="leading-relaxed">
                    New Dreamland Educational Enclave, Ganderbal, Kashmir (J&K) 191201
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                <Phone className="w-5 h-5 text-[#138A8A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-stone-900 text-sm mb-0.5">Telephone & Helpline</div>
                  <p>Admissions: +91 194 2490123</p>
                  <p>General Office: +91 194 2490124</p>
                  <p>Transport Cell: +91 94190 00123</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                <Mail className="w-5 h-5 text-[#138A8A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-stone-900 text-sm mb-0.5">Official Inquiries</div>
                  <p>Admissions: admissions@newdreamland.edu.in</p>
                  <p>Principal: principal@newdreamland.edu.in</p>
                  <p>General Secretariat: info@newdreamland.edu.in</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                <Clock className="w-5 h-5 text-[#138A8A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-stone-900 text-sm mb-0.5">Visiting & Office Timings</div>
                  <p>Monday to Saturday: 08:30 AM – 03:30 PM</p>
                  <p className="text-stone-500">Sunday & Designated Public Holidays: Closed</p>
                </div>
              </div>
            </div>

            {/* Public Transport Guidance */}
            <div className="p-6 bg-[#102A43] text-white rounded-2xl space-y-2">
              <h4 className="font-serif text-base font-bold text-teal-300">Directions & Landmarks</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Located approximately 3.2 kilometers from the city transit junction along the main airport boulevard. Ample visitor parking available at Gate 1 with designated accessibility ramps.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive General Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-1 border-b border-stone-100 pb-4">
              <h3 className="font-serif text-2xl font-bold text-[#102A43]">
                Send an Official Correspondence
              </h3>
              <p className="text-xs text-stone-500">
                Submit an inquiry, feedback, or appointment request with school administration.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-emerald-950">
                  Message Dispatched to Secretariat
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Your correspondence regarding{' '}
                  <span className="font-semibold">{formData.subject}</span> has been securely logged. The administrative office will respond to <span className="font-semibold">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'General Enquiry',
                      message: ''
                    });
                  }}
                  className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Ayesha Kaul"
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94190 00000"
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Department / Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                    >
                      <option value="General Enquiry">General Information</option>
                      <option value="Admissions Office">Admissions Office</option>
                      <option value="Principal Office">Appointment with Principal</option>
                      <option value="Accounts & Fees">Accounts & Fee Collection</option>
                      <option value="Transport Cell">Transport & Bus Routes</option>
                      <option value="Alumni Relations">Alumni Society</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message / Query *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify your query or meeting requirement in detail..."
                    className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#174A7E] hover:bg-[#102A43] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Interactive Map Container */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-[#174A7E]" />
              <h3 className="font-serif text-lg font-bold text-stone-900">Interactive Campus Map & Aerial Overview</h3>
            </div>
            <span className="text-xs text-stone-500 font-mono">GPS Coordinates: 34.0289° N, 74.8021° E</span>
          </div>

          <div className="h-64 sm:h-80 w-full bg-stone-100 rounded-xl overflow-hidden relative border border-stone-200 flex items-center justify-center">
            {/* Visual stylised educational campus map placeholder */}
            <div className="absolute inset-0 bg-[#EBEFEA] opacity-90 flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#102A43] text-teal-300 flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-[#102A43]">New Dreamland School Main Campus</h4>
                <p className="text-xs text-stone-600 max-w-md">
                  Dreamland Academic Enclave, Gulshan Nagar / Airport Road, Srinagar, J&K 190014
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1 bg-white border border-stone-300 text-stone-700 rounded font-medium">Gate 1: Main Reception & Visitor Entry</span>
                <span className="px-3 py-1 bg-white border border-stone-300 text-stone-700 rounded font-medium">Gate 2: Transport & Buses Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
