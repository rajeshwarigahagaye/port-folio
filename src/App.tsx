import { useEffect, useState } from 'react';
import { Navbar, type PageId } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { EducationPage } from '@/pages/Education';
import { ExperiencePage } from '@/pages/Experience';
import { ProjectsPage } from '@/pages/Projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function App() {
  const [page, setPage] = useState<PageId>('home');
  const reduced = useReducedMotion();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }, [page, reduced]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={setPage} />;
      case 'education':
        return <EducationPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      default:
        return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar active={page} onNavigate={setPage} />

      <main
        key={page}
        className="flex-1"
        style={reduced ? undefined : { animation: 'fade-in 0.4s ease-out both' }}
      >
        {renderPage()}
      </main>

      <Footer onNavigate={setPage} />
    </div>
  );
}
