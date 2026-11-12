import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Lock,
  Plus,
  Trash2,
  Edit2,
  FileText,
  Calendar,
  Award,
  Users,
  Settings,
  ShieldCheck,
  CheckCircle,
  FileDown,
  LogOut,
  RefreshCw
} from 'lucide-react';

export const AdminCMSPage: React.FC = () => {
  const {
    isAdminLoggedIn,
    setIsAdminLoggedIn,
    stats,
    updateStats,
    announcements,
    addAnnouncement,
    deleteAnnouncement,
    news,
    addNews,
    deleteNews,
    events,
    addEvent,
    deleteEvent,
    enquiries,
    updateEnquiryStatus,
    downloads,
    addDownload,
    achievements,
    addAchievement
  } = useSchool();

  const [activeSection, setActiveSection] = useState<
    'overview' | 'announcements' | 'news' | 'events' | 'enquiries' | 'downloads' | 'achievements' | 'stats'
  >('overview');

  // Login form state
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [loginError, setLoginError] = useState('');

  // Announcement Form State
  const [newAnn, setNewAnn] = useState({
    title: '',
    category: 'Admissions' as const,
    date: new Date().toISOString().split('T')[0],
    summary: '',
    content: '',
    priority: 'normal' as const,
    active: true
  });

  // News Form State
  const [newNews, setNewNews] = useState({
    title: '',
    category: 'Campus News' as const,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    readTime: '3 min read',
    summary: '',
    content: '',
    featured: false,
    author: 'Principal Secretariat'
  });

  // Event Form State
  const [newEvent, setNewEvent] = useState({
    title: '',
    category: 'Academic' as const,
    date: 'Dec 12, 2026',
    time: '10:00 AM – 02:00 PM',
    venue: 'Central Auditorium',
    description: '',
    status: 'Upcoming' as const,
    audience: 'All Students & Parents'
  });

  // Stats Form State
  const [editStats, setEditStats] = useState(stats);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Authorized default credentials: admin / dreamland2026
    if (adminUser === 'admin' && adminPass === 'dreamland2026') {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('nds_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid administrative credentials. Use admin / dreamland2026');
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('nds_admin_auth');
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4 bg-[#FAFAF7]">
        <div className="w-full max-w-md bg-white rounded-2xl border border-stone-200 shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-[#102A43] text-teal-300 flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#102A43]">
              Administrative CMS Portal
            </h2>
            <p className="text-xs text-stone-500">
              Authorized content management console for New Dreamland School
            </p>
          </div>

          {loginError && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Admin Username
              </label>
              <input
                type="text"
                required
                value={adminUser}
                onChange={e => setAdminUser(e.target.value)}
                placeholder="admin"
                className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Security Password
              </label>
              <input
                type="password"
                required
                value={adminPass}
                onChange={e => setAdminPass(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#174A7E]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#174A7E] hover:bg-[#102A43] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
            >
              Authenticate & Access CMS
            </button>

            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-center text-[11px] text-stone-500">
              Demo Access Credentials: <br />
              Username: <code className="font-bold text-stone-800">admin</code> · Password: <code className="font-bold text-stone-800">dreamland2026</code>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAFAF7] min-h-screen">
      {/* Top CMS Header */}
      <div className="bg-[#102A43] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-800/80 text-teal-300 flex items-center justify-center font-bold">
            CMS
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold text-white">New Dreamland School · CMS Console</h1>
            <p className="text-[11px] text-teal-300">Signed in as Super Administrator</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-stone-300 font-mono hidden sm:inline">Session Active</span>
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-1">
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: Settings },
              { id: 'enquiries', label: `Admission Enquiries (${enquiries.length})`, icon: Users },
              { id: 'announcements', label: `Announcements (${announcements.length})`, icon: FileText },
              { id: 'news', label: `News Dispatches (${news.length})`, icon: FileText },
              { id: 'events', label: `Events & Calendar (${events.length})`, icon: Calendar },
              { id: 'downloads', label: `Download Documents (${downloads.length})`, icon: FileDown },
              { id: 'achievements', label: `Student Honors (${achievements.length})`, icon: Award },
              { id: 'stats', label: 'Institutional Stats', icon: RefreshCw }
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all ${
                    isActive
                      ? 'bg-[#174A7E] text-white shadow-sm'
                      : 'text-stone-700 hover:bg-stone-200/60'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Work Area */}
          <div className="lg:col-span-9 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm min-h-[500px]">
            {/* 1. OVERVIEW DASHBOARD */}
            {activeSection === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#102A43]">Executive CMS Overview</h3>
                  <p className="text-xs text-stone-500">Live operational counters for New Dreamland School digital presence</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                    <span className="text-[11px] font-bold uppercase text-stone-500">Pending Enquiries</span>
                    <div className="font-serif text-2xl font-bold text-[#174A7E]">
                      {enquiries.filter(e => e.status === 'New').length}
                    </div>
                  </div>
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                    <span className="text-[11px] font-bold uppercase text-stone-500">Active Notices</span>
                    <div className="font-serif text-2xl font-bold text-amber-700">
                      {announcements.filter(a => a.active).length}
                    </div>
                  </div>
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                    <span className="text-[11px] font-bold uppercase text-stone-500">Published News</span>
                    <div className="font-serif text-2xl font-bold text-emerald-700">
                      {news.length}
                    </div>
                  </div>
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                    <span className="text-[11px] font-bold uppercase text-stone-500">Upcoming Events</span>
                    <div className="font-serif text-2xl font-bold text-purple-700">
                      {events.length}
                    </div>
                  </div>
                </div>

                {/* Recent Admission Enquiries Mini Table */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-base font-bold text-stone-900">Recent Parent Enquiries</h4>
                    <button
                      onClick={() => setActiveSection('enquiries')}
                      className="text-xs font-semibold text-[#174A7E] hover:underline"
                    >
                      Manage All
                    </button>
                  </div>

                  <div className="space-y-2">
                    {enquiries.slice(0, 3).map(enq => (
                      <div
                        key={enq.id}
                        className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-center justify-between text-xs"
                      >
                        <div>
                          <span className="font-bold text-stone-900">{enq.studentName}</span>
                          <span className="text-stone-500"> ({enq.classApplyingFor}) · Parent: {enq.parentName}</span>
                          <div className="text-stone-400 text-[11px]">{enq.phone} · {enq.submittedAt}</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          enq.status === 'New' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {enq.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. ADMISSION ENQUIRIES MANAGEMENT */}
            {activeSection === 'enquiries' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#102A43]">
                    Incoming Admission Enquiries ({enquiries.length})
                  </h3>
                  <p className="text-xs text-stone-500">Review parent submissions and update follow-up statuses</p>
                </div>

                <div className="space-y-3">
                  {enquiries.map(enq => (
                    <div
                      key={enq.id}
                      className="p-5 border border-stone-200 rounded-xl space-y-3 bg-stone-50/50"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-2">
                        <div>
                          <span className="font-serif text-base font-bold text-stone-900">{enq.studentName}</span>
                          <span className="text-xs text-stone-600 font-medium"> — Applying for {enq.classApplyingFor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-stone-400 font-mono">{enq.submittedAt}</span>
                          <select
                            value={enq.status}
                            onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                            className="text-xs px-2 py-1 rounded bg-white border border-stone-300 font-semibold text-stone-800 focus:outline-none"
                          >
                            <option value="New">New</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-700">
                        <div>Parent: <strong className="font-semibold text-stone-900">{enq.parentName}</strong></div>
                        <div>Phone: <strong className="font-mono text-stone-900">{enq.phone}</strong></div>
                        <div>Email: <strong className="text-stone-900">{enq.email || 'None'}</strong></div>
                      </div>

                      {enq.message && (
                        <p className="text-xs text-stone-600 bg-white p-3 rounded-lg border border-stone-100 italic">
                          "{enq.message}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. ANNOUNCEMENTS CMS */}
            {activeSection === 'announcements' && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#102A43]">Manage Official Announcements</h3>
                  <p className="text-xs text-stone-500">Publish urgent notices to the header banner and archive</p>
                </div>

                {/* Form to add announcement */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newAnn.title || !newAnn.summary) return;
                    addAnnouncement(newAnn);
                    setNewAnn({
                      title: '',
                      category: 'Admissions',
                      date: new Date().toISOString().split('T')[0],
                      summary: '',
                      content: '',
                      priority: 'normal',
                      active: true
                    });
                  }}
                  className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">Create New Announcement</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Title *</label>
                      <input
                        type="text"
                        required
                        value={newAnn.title}
                        onChange={e => setNewAnn({ ...newAnn, title: e.target.value })}
                        placeholder="e.g. Winter Break Schedule Notification"
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Category</label>
                      <select
                        value={newAnn.category}
                        onChange={e => setNewAnn({ ...newAnn, category: e.target.value as any })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      >
                        <option value="Admissions">Admissions</option>
                        <option value="Academic">Academic</option>
                        <option value="Examination">Examination</option>
                        <option value="Notice">Notice</option>
                        <option value="Events">Events</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Priority</label>
                      <select
                        value={newAnn.priority}
                        onChange={e => setNewAnn({ ...newAnn, priority: e.target.value as any })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      >
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent (Shows on Homepage Ticker)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Date</label>
                      <input
                        type="date"
                        value={newAnn.date}
                        onChange={e => setNewAnn({ ...newAnn, date: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">Summary / Ticker Text *</label>
                    <input
                      type="text"
                      required
                      value={newAnn.summary}
                      onChange={e => setNewAnn({ ...newAnn, summary: e.target.value })}
                      placeholder="Concise 1-line announcement statement"
                      className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#174A7E] hover:bg-[#102A43] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Publish Announcement</span>
                  </button>
                </form>

                {/* Existing announcements list */}
                <div className="space-y-3">
                  {announcements.map(ann => (
                    <div
                      key={ann.id}
                      className="p-4 border border-stone-200 rounded-xl flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700 uppercase">
                            {ann.category}
                          </span>
                          <span className="text-xs font-mono text-stone-400">{ann.date}</span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-stone-900">{ann.title}</h4>
                        <p className="text-xs text-stone-600">{ann.summary}</p>
                      </div>

                      <button
                        onClick={() => deleteAnnouncement(ann.id)}
                        className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Delete announcement"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. NEWS CMS */}
            {activeSection === 'news' && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#102A43]">Publish Campus News & Articles</h3>
                  <p className="text-xs text-stone-500">Manage press releases and institutional dispatches</p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newNews.title || !newNews.summary) return;
                    addNews(newNews);
                    setNewNews({
                      title: '',
                      category: 'Campus News',
                      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                      readTime: '3 min read',
                      summary: '',
                      content: '',
                      featured: false,
                      author: 'Principal Secretariat'
                    });
                  }}
                  className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">Add News Article</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Headline *</label>
                      <input
                        type="text"
                        required
                        value={newNews.title}
                        onChange={e => setNewNews({ ...newNews, title: e.target.value })}
                        placeholder="Article Headline"
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Category</label>
                      <select
                        value={newNews.category}
                        onChange={e => setNewNews({ ...newNews, category: e.target.value as any })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      >
                        <option value="Campus News">Campus News</option>
                        <option value="Academic">Academic</option>
                        <option value="Sports">Sports</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Achievements">Achievements</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">Summary *</label>
                    <textarea
                      rows={2}
                      required
                      value={newNews.summary}
                      onChange={e => setNewNews({ ...newNews, summary: e.target.value })}
                      placeholder="Brief excerpt for cards"
                      className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">Full Article Body</label>
                    <textarea
                      rows={4}
                      value={newNews.content}
                      onChange={e => setNewNews({ ...newNews, content: e.target.value })}
                      placeholder="Detailed report text..."
                      className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#174A7E] hover:bg-[#102A43] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Publish News Article</span>
                  </button>
                </form>

                <div className="space-y-3">
                  {news.map(art => (
                    <div
                      key={art.id}
                      className="p-4 border border-stone-200 rounded-xl flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-stone-400">
                          <span className="font-semibold text-[#138A8A]">{art.category}</span>
                          <span>·</span>
                          <span>{art.date}</span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-stone-900 mt-0.5">{art.title}</h4>
                      </div>

                      <button
                        onClick={() => deleteNews(art.id)}
                        className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Delete article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. EVENTS CMS */}
            {activeSection === 'events' && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#102A43]">Schedule School Events</h3>
                  <p className="text-xs text-stone-500">Add dates, times, and venues to the official calendar</p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newEvent.title) return;
                    addEvent(newEvent);
                    setNewEvent({
                      title: '',
                      category: 'Academic',
                      date: 'Dec 12, 2026',
                      time: '10:00 AM – 02:00 PM',
                      venue: 'Central Auditorium',
                      description: '',
                      status: 'Upcoming',
                      audience: 'All Students & Parents'
                    });
                  }}
                  className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">Add School Event</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Event Title *</label>
                      <input
                        type="text"
                        required
                        value={newEvent.title}
                        onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                        placeholder="e.g. Winter Carnival 2026"
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Category</label>
                      <select
                        value={newEvent.category}
                        onChange={e => setNewEvent({ ...newEvent, category: e.target.value as any })}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      >
                        <option value="Academic">Academic</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Sports">Sports</option>
                        <option value="Competitions">Competitions</option>
                        <option value="Parent-Teacher Meeting">Parent-Teacher Meeting</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Date</label>
                      <input
                        type="text"
                        value={newEvent.date}
                        onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
                        placeholder="Dec 12, 2026"
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Time</label>
                      <input
                        type="text"
                        value={newEvent.time}
                        onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
                        placeholder="10:00 AM – 02:00 PM"
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Venue</label>
                      <input
                        type="text"
                        value={newEvent.venue}
                        onChange={e => setNewEvent({ ...newEvent, venue: e.target.value })}
                        placeholder="Auditorium"
                        className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#174A7E] hover:bg-[#102A43] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Event</span>
                  </button>
                </form>

                <div className="space-y-3">
                  {events.map(ev => (
                    <div
                      key={ev.id}
                      className="p-4 border border-stone-200 rounded-xl flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-[11px] text-stone-400 font-mono">{ev.date} · {ev.time}</div>
                        <h4 className="font-serif text-sm font-bold text-stone-900">{ev.title}</h4>
                        <div className="text-xs text-stone-500">{ev.venue}</div>
                      </div>

                      <button
                        onClick={() => deleteEvent(ev.id)}
                        className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Delete event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. STATS CMS */}
            {activeSection === 'stats' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#102A43]">Institutional Metric Counters</h3>
                  <p className="text-xs text-stone-500">Update verified facts and statistics presented on the homepage</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Years of Educational Excellence
                    </label>
                    <input
                      type="number"
                      value={editStats.yearsOfExcellence}
                      onChange={e => setEditStats({ ...editStats, yearsOfExcellence: parseInt(e.target.value) || 0 })}
                      className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Total Scholars Enrolled
                    </label>
                    <input
                      type="number"
                      value={editStats.studentsEnrolled}
                      onChange={e => setEditStats({ ...editStats, studentsEnrolled: parseInt(e.target.value) || 0 })}
                      className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Faculty Members
                    </label>
                    <input
                      type="number"
                      value={editStats.facultyMembers}
                      onChange={e => setEditStats({ ...editStats, facultyMembers: parseInt(e.target.value) || 0 })}
                      className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Student-to-Teacher Ratio
                    </label>
                    <input
                      type="text"
                      value={editStats.studentTeacherRatio}
                      onChange={e => setEditStats({ ...editStats, studentTeacherRatio: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg"
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    updateStats(editStats);
                    alert('Institutional statistics updated successfully and saved to local storage.');
                  }}
                  className="px-5 py-2.5 bg-[#174A7E] hover:bg-[#102A43] text-white text-xs font-bold uppercase rounded-lg transition-colors"
                >
                  Save Statistics Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
