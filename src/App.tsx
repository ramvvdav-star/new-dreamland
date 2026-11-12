import React from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { PortalModal } from './components/PortalModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { CampusPage } from './pages/CampusPage';
import { StudentLifePage } from './pages/StudentLifePage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminCMSPage } from './pages/AdminCMSPage';

const AppContent: React.FC = () => {
  const { activeTab } = useSchool();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'campus':
        return <CampusPage />;
      case 'student-life':
        return <StudentLifePage />;
      case 'news-events':
        return <NewsEventsPage />;
      case 'downloads':
        return <DownloadsPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminCMSPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#202B38]">
      <Header />
      <main className="flex-1">
        {renderActiveTab()}
      </main>
      <Footer />
      <GlobalSearchModal />
      <PortalModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <SchoolProvider>
      <AppContent />
    </SchoolProvider>
  );
};

export default App;
