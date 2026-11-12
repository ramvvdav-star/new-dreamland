import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  X,
  Lock,
  User,
  ShieldCheck,
  CreditCard,
  GraduationCap,
  Compass,
  ArrowRight,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export const PortalModal: React.FC = () => {
  const { portalModal, closePortalModal } = useSchool();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [simulatedLogin, setSimulatedLogin] = useState(false);

  if (!portalModal.isOpen || !portalModal.type) return null;

  const { type } = portalModal;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    setSimulatedLogin(true);
  };

  const portalDetails = {
    Student: {
      title: 'Student Digital Workspace',
      subtitle: 'Access daily homework, laboratory journals, timetables, and academic transcripts',
      icon: GraduationCap,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      idLabel: 'Student Enrollment ID (e.g. NDS/2026/0412)',
      sampleId: 'NDS/2024/0842'
    },
    Parent: {
      title: 'Parent Portal & Academic Oversight',
      subtitle: 'Monitor student attendance records, fee statements, progress reports, and teacher correspondence',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      idLabel: 'Registered Mobile Number or Parent ID',
      sampleId: '+91 94190 12345'
    },
    Teacher: {
      title: 'Faculty & Educator Console',
      subtitle: 'Enter attendance, upload lesson materials, grade assignments, and access curriculum plans',
      icon: Compass,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      idLabel: 'Staff Employee ID',
      sampleId: 'STAFF-NDS-104'
    },
    Accounts: {
      title: 'Online Fee Collection & Finance Portal',
      subtitle: 'Secure institutional payment gateway for term fees, transport charges, and receipt retrieval',
      icon: CreditCard,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      idLabel: 'Student Admission Number or Challan Reference',
      sampleId: 'NDS/FEE/2026-T1'
    }
  }[type];

  const IconComponent = portalDetails.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 bg-stone-50 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${portalDetails.bg} flex items-center justify-center`}>
              <IconComponent className={`w-5 h-5 ${portalDetails.color}`} />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-stone-900">{portalDetails.title}</h3>
              <p className="text-xs text-stone-500 mt-0.5 max-w-[260px]">{portalDetails.subtitle}</p>
            </div>
          </div>
          <button
            onClick={closePortalModal}
            className="p-1 text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {simulatedLogin ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Authentication Successful
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                Secure session established for <span className="font-mono font-medium text-stone-900">{username}</span>.
                Connecting to the school management ERP environment.
              </p>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-500 text-left space-y-1">
                <div className="font-semibold text-stone-700">Environment Integration Point:</div>
                <div>Status: <span className="text-emerald-600 font-medium">Ready for production ERP binding</span></div>
                <div>Target Endpoint: <code className="text-stone-700 font-mono text-[11px]">https://erp.newdreamland.edu.in/{type.toLowerCase()}</code></div>
              </div>
              <button
                onClick={() => {
                  setSimulatedLogin(false);
                  closePortalModal();
                }}
                className="w-full py-2.5 bg-[#102A43] hover:bg-[#174A7E] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
              >
                Close Session Simulation
              </button>
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  {portalDetails.idLabel}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={`e.g. ${portalDetails.sampleId}`}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-stone-700">
                    Security Password / PIN
                  </label>
                  <button
                    type="button"
                    onClick={() => alert('Password reset instructions will be dispatched to the mobile number registered in school records.')}
                    className="text-[11px] text-[#138A8A] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your confidential password"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#174A7E] hover:bg-[#102A43] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all hover:shadow flex items-center justify-center gap-2"
                >
                  <span>Sign In to {type} Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-stone-500 text-center pt-2 space-y-1">
                <div>First time user? Please obtain your initial credentials from the IT Administrative Cell.</div>
                <div className="text-stone-400">Encrypted 256-bit SSL Session Protection</div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
