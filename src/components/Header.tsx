import React, { useState, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Phone,
  Mail,
  Search,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  ShieldCheck,
  CreditCard,
  FileDown,
  Lock,
  Compass
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    setIsSearchModalOpen,
    openPortalModal,
    announcements,
    isAdminLoggedIn
  } = useSchool();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);

  // Monitor scroll for header background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'campus', label: 'Campus & Facilities' },
    { id: 'student-life', label: 'Student Life' },
    { id: 'news-events', label: 'News & Events' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'contact', label: 'Contact' }
  ];

  const urgentAnnouncement = announcements.find(a => a.active && a.priority === 'urgent') || announcements[0];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Slim Institutional Utility Ribbon */}
      <div className="bg-[#102A43] text-stone-200 border-b border-white/10 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Contact and Session */}
          <div className="flex items-center gap-4 flex-wrap text-stone-300">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>+91 194 2490123 / +91 94190 00123</span>
            </span>
            <span className="hidden sm:inline text-stone-500">|</span>
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>admissions@newdreamland.edu.in</span>
            </span>
            <span className="hidden lg:inline text-stone-500">|</span>
            <span className="hidden lg:inline text-stone-400">
              Affiliated & Recognised · Est. 1998
            </span>
          </div>

          {/* Right: Quick actions & ticker hint */}
          <div className="flex items-center gap-3 text-stone-300 shrink-0">
            {urgentAnnouncement && (
              <button
                onClick={() => handleNavClick(urgentAnnouncement.link === '#admissions' ? 'admissions' : 'news-events')}
                className="hidden md:flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors text-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block" />
                <span className="max-w-[260px] truncate font-medium">
                  {urgentAnnouncement.title}
                </span>
              </button>
            )}

            <button
              onClick={() => openPortalModal('Accounts')}
              className="hover:text-white transition-colors flex items-center gap-1 text-xs"
            >
              <CreditCard className="w-3 h-3 text-teal-400" />
              <span>Pay Fees</span>
            </button>

            <button
              onClick={() => handleNavClick('downloads')}
              className="hover:text-white transition-colors flex items-center gap-1 text-xs"
            >
              <FileDown className="w-3 h-3 text-teal-400" />
              <span>Downloads</span>
            </button>

            <button
              onClick={() => handleNavClick('admin')}
              className={`hover:text-white transition-colors flex items-center gap-1 text-xs px-2 py-0.5 rounded ${
                isAdminLoggedIn ? 'bg-teal-700/60 text-white' : 'text-stone-400'
              }`}
            >
              <Lock className="w-3 h-3" />
              <span>{isAdminLoggedIn ? 'CMS Portal' : 'Admin'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main High-Elegance Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-stone-200 py-3'
            : 'bg-white border-stone-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
          {/* Brand Wordmark & Official Crest */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group shrink-0"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-stone-200 shadow-sm transition-transform group-hover:scale-105 shrink-0 flex items-center justify-center p-0.5">
              <img
                src="/assets/aistudio/images_7999f962.jpg"
                alt="New Dreamland Educational Institute Official Emblem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#102A43] leading-none">
                New Dreamland
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] text-[#138A8A] font-semibold mt-1">
                Educational Institute · Ganderbal Kmr
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map(item => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-medium transition-colors whitespace-nowrap py-1 ${
                    isActive
                      ? 'text-[#174A7E] font-semibold'
                      : 'text-stone-600 hover:text-[#102A43]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#174A7E] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone (Search, Portals, Admission CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Global Search Button */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2 text-stone-600 hover:text-[#102A43] hover:bg-stone-100 rounded-lg transition-colors"
              title="Search school archives and announcements"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Portals Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#102A43] bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors border border-stone-200"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#138A8A]" />
                <span>Portals</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${portalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {portalDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-stone-200 py-2 z-50 text-xs"
                  onMouseLeave={() => setPortalDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      openPortalModal('Student');
                      setPortalDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 flex items-center gap-2 text-stone-700"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    <span>Student Portal</span>
                  </button>
                  <button
                    onClick={() => {
                      openPortalModal('Parent');
                      setPortalDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 flex items-center gap-2 text-stone-700"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Parent Portal</span>
                  </button>
                  <button
                    onClick={() => {
                      openPortalModal('Teacher');
                      setPortalDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 flex items-center gap-2 text-stone-700"
                  >
                    <Compass className="w-3.5 h-3.5 text-amber-600" />
                    <span>Teacher Login</span>
                  </button>
                  <div className="border-t border-stone-100 my-1" />
                  <button
                    onClick={() => {
                      openPortalModal('Accounts');
                      setPortalDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-stone-50 flex items-center gap-2 text-stone-700"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-purple-600" />
                    <span>Fee Management Portal</span>
                  </button>
                </div>
              )}
            </div>

            {/* Primary Action: Apply / Enquiry CTA */}
            <button
              onClick={() => handleNavClick('admissions')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#174A7E] hover:bg-[#102A43] rounded-lg shadow-sm transition-all hover:shadow active:scale-95 whitespace-nowrap"
            >
              Apply for Admission
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-[#102A43] hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-6 py-4 shadow-xl">
          <div className="flex flex-col gap-1 pb-4 border-b border-stone-100">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-stone-100 text-[#174A7E] font-semibold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Portals Strip */}
          <div className="pt-4 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                openPortalModal('Student');
                setMobileMenuOpen(false);
              }}
              className="py-2 px-3 bg-stone-100 rounded-lg text-stone-800 font-medium text-left flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Student Portal</span>
            </button>
            <button
              onClick={() => {
                openPortalModal('Parent');
                setMobileMenuOpen(false);
              }}
              className="py-2 px-3 bg-stone-100 rounded-lg text-stone-800 font-medium text-left flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Parent Portal</span>
            </button>
            <button
              onClick={() => {
                openPortalModal('Teacher');
                setMobileMenuOpen(false);
              }}
              className="py-2 px-3 bg-stone-100 rounded-lg text-stone-800 font-medium text-left flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-600" />
              <span>Teacher Portal</span>
            </button>
            <button
              onClick={() => {
                openPortalModal('Accounts');
                setMobileMenuOpen(false);
              }}
              className="py-2 px-3 bg-stone-100 rounded-lg text-stone-800 font-medium text-left flex items-center gap-2"
            >
              <CreditCard className="w-4 h-4 text-purple-600" />
              <span>Pay Fees</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
