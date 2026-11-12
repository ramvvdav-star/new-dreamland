import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Announcement,
  NewsArticle,
  SchoolEvent,
  Achievement,
  AlumniStory,
  Facility,
  FacultyMember,
  DownloadItem,
  AdmissionEnquiry,
  Testimonial,
  SchoolStats
} from '../types';
import {
  initialStats,
  initialAnnouncements,
  initialNews,
  initialEvents,
  initialAchievements,
  initialAlumni,
  initialFacilities,
  initialFaculty,
  initialDownloads,
  initialTestimonials,
  initialEnquiries
} from '../data/mockData';

interface SchoolContextType {
  stats: SchoolStats;
  updateStats: (newStats: SchoolStats) => void;
  announcements: Announcement[];
  addAnnouncement: (announcement: Omit<Announcement, 'id'>) => void;
  updateAnnouncement: (id: string, updated: Partial<Announcement>) => void;
  deleteAnnouncement: (id: string) => void;
  news: NewsArticle[];
  addNews: (newsItem: Omit<NewsArticle, 'id'>) => void;
  deleteNews: (id: string) => void;
  events: SchoolEvent[];
  addEvent: (eventItem: Omit<SchoolEvent, 'id'>) => void;
  deleteEvent: (id: string) => void;
  achievements: Achievement[];
  addAchievement: (achievement: Omit<Achievement, 'id'>) => void;
  alumni: AlumniStory[];
  addAlumni: (alumni: Omit<AlumniStory, 'id'>) => void;
  facilities: Facility[];
  faculty: FacultyMember[];
  downloads: DownloadItem[];
  addDownload: (item: Omit<DownloadItem, 'id'>) => void;
  testimonials: Testimonial[];
  enquiries: AdmissionEnquiry[];
  submitEnquiry: (enquiry: Omit<AdmissionEnquiry, 'id' | 'submittedAt' | 'status'>) => void;
  updateEnquiryStatus: (id: string, status: AdmissionEnquiry['status']) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (logged: boolean) => void;
  portalModal: { isOpen: boolean; type: 'Student' | 'Parent' | 'Teacher' | 'Accounts' | null };
  openPortalModal: (type: 'Student' | 'Parent' | 'Teacher' | 'Accounts') => void;
  closePortalModal: () => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load stored state or fallbacks
  const [stats, setStats] = useState<SchoolStats>(() => {
    const saved = localStorage.getItem('nds_stats');
    return saved ? JSON.parse(saved) : initialStats;
  });

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem('nds_announcements');
    return saved ? JSON.parse(saved) : initialAnnouncements;
  });

  const [news, setNews] = useState<NewsArticle[]>(() => {
    const saved = localStorage.getItem('nds_news');
    return saved ? JSON.parse(saved) : initialNews;
  });

  const [events, setEvents] = useState<SchoolEvent[]>(() => {
    const saved = localStorage.getItem('nds_events');
    return saved ? JSON.parse(saved) : initialEvents;
  });

  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem('nds_achievements');
    return saved ? JSON.parse(saved) : initialAchievements;
  });

  const [alumni, setAlumni] = useState<AlumniStory[]>(() => {
    const saved = localStorage.getItem('nds_alumni');
    return saved ? JSON.parse(saved) : initialAlumni;
  });

  const [facilities] = useState<Facility[]>(initialFacilities);
  const [faculty] = useState<FacultyMember[]>(initialFaculty);

  const [downloads, setDownloads] = useState<DownloadItem[]>(() => {
    const saved = localStorage.getItem('nds_downloads');
    return saved ? JSON.parse(saved) : initialDownloads;
  });

  const [testimonials] = useState<Testimonial[]>(initialTestimonials);

  const [enquiries, setEnquiries] = useState<AdmissionEnquiry[]>(() => {
    const saved = localStorage.getItem('nds_enquiries');
    return saved ? JSON.parse(saved) : initialEnquiries;
  });

  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('nds_admin_auth') === 'true';
  });

  const [portalModal, setPortalModal] = useState<{
    isOpen: boolean;
    type: 'Student' | 'Parent' | 'Teacher' | 'Accounts' | null;
  }>({
    isOpen: false,
    type: null
  });

  // Sync to local storage for persistence
  useEffect(() => {
    localStorage.setItem('nds_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('nds_announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem('nds_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('nds_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('nds_achievements', JSON.stringify(achievements));
  }, [achievements]);

  useEffect(() => {
    localStorage.setItem('nds_alumni', JSON.stringify(alumni));
  }, [alumni]);

  useEffect(() => {
    localStorage.setItem('nds_downloads', JSON.stringify(downloads));
  }, [downloads]);

  useEffect(() => {
    localStorage.setItem('nds_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  const updateStats = (newStats: SchoolStats) => {
    setStats(newStats);
  };

  const addAnnouncement = (item: Omit<Announcement, 'id'>) => {
    const newAnn: Announcement = { ...item, id: `ann-${Date.now()}` };
    setAnnouncements(prev => [newAnn, ...prev]);
  };

  const updateAnnouncement = (id: string, updated: Partial<Announcement>) => {
    setAnnouncements(prev => prev.map(a => a.id === id ? { ...a, ...updated } : a));
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements(prev => prev.filter(a => a.id !== id));
  };

  const addNews = (item: Omit<NewsArticle, 'id'>) => {
    const newNewsItem: NewsArticle = { ...item, id: `news-${Date.now()}` };
    setNews(prev => [newNewsItem, ...prev]);
  };

  const deleteNews = (id: string) => {
    setNews(prev => prev.filter(n => n.id !== id));
  };

  const addEvent = (item: Omit<SchoolEvent, 'id'>) => {
    const newEvent: SchoolEvent = { ...item, id: `evt-${Date.now()}` };
    setEvents(prev => [newEvent, ...prev]);
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const addAchievement = (item: Omit<Achievement, 'id'>) => {
    const newAch: Achievement = { ...item, id: `ach-${Date.now()}` };
    setAchievements(prev => [newAch, ...prev]);
  };

  const addAlumni = (item: Omit<AlumniStory, 'id'>) => {
    const newAlumni: AlumniStory = { ...item, id: `alm-${Date.now()}` };
    setAlumni(prev => [newAlumni, ...prev]);
  };

  const addDownload = (item: Omit<DownloadItem, 'id'>) => {
    const newDl: DownloadItem = { ...item, id: `dl-${Date.now()}` };
    setDownloads(prev => [newDl, ...prev]);
  };

  const submitEnquiry = (enquiry: Omit<AdmissionEnquiry, 'id' | 'submittedAt' | 'status'>) => {
    const newEnq: AdmissionEnquiry = {
      ...enquiry,
      id: `enq-${Date.now()}`,
      submittedAt: new Date().toLocaleString([], {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'New'
    };
    setEnquiries(prev => [newEnq, ...prev]);
  };

  const updateEnquiryStatus = (id: string, status: AdmissionEnquiry['status']) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const openPortalModal = (type: 'Student' | 'Parent' | 'Teacher' | 'Accounts') => {
    setPortalModal({ isOpen: true, type });
  };

  const closePortalModal = () => {
    setPortalModal({ isOpen: false, type: null });
  };

  return (
    <SchoolContext.Provider
      value={{
        stats,
        updateStats,
        announcements,
        addAnnouncement,
        updateAnnouncement,
        deleteAnnouncement,
        news,
        addNews,
        deleteNews,
        events,
        addEvent,
        deleteEvent,
        achievements,
        addAchievement,
        alumni,
        addAlumni,
        facilities,
        faculty,
        downloads,
        addDownload,
        testimonials,
        enquiries,
        submitEnquiry,
        updateEnquiryStatus,
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        isSearchModalOpen,
        setIsSearchModalOpen,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        portalModal,
        openPortalModal,
        closePortalModal
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
