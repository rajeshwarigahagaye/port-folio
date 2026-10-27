import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '@/data/portfolio';

export type PageId = 'home' | 'education' | 'experience' | 'projects';

type NavbarProps = {
  active: PageId;
  onNavigate: (page: PageId) => void;
};

const links: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education & Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export function Navbar({ active, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md shadow-sm shadow-ink-400/5 border-b border-cream-300/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8" aria-label="Primary">
        <button
          onClick={() => handleNav('home')}
          className="font-display text-lg font-semibold tracking-tight text-ink-400 transition-colors hover:text-terracotta-500"
          aria-label="Go to home"
        >
          {personal.name.split(' ')[0]}<span className="text-terracotta-500">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.id
                    ? 'text-terracotta-600'
                    : 'text-ink-200 hover:text-terracotta-500'
                }`}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-terracotta-500 transition-all duration-300 ${
                    active === link.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-full p-2 text-ink-300 transition-colors hover:bg-cream-200 hover:text-terracotta-500 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-cream-300/60 bg-cream-100/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`block w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                  active === link.id
                    ? 'bg-terracotta-500/10 text-terracotta-600'
                    : 'text-ink-200 hover:bg-cream-200'
                }`}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
