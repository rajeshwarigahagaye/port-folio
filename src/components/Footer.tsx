import { Mail, Phone, MapPin, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { personal } from '@/data/portfolio';
import type { PageId } from './Navbar';

type FooterProps = {
  onNavigate: (page: PageId) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-300/70 bg-cream-50">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Intro */}
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="font-display text-2xl font-semibold text-ink-400 transition-colors hover:text-terracotta-500"
            >
              {personal.name}
            </button>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-100">
              {personal.title} based in {personal.location}, building clean, responsive, and accessible web experiences.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="section-eyebrow">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-center gap-3 text-ink-100 transition-colors hover:text-terracotta-500"
                >
                  <Mail size={16} className="text-terracotta-500" />
                  <span>{personal.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-3 text-ink-100 transition-colors hover:text-terracotta-500"
                >
                  <Phone size={16} className="text-terracotta-500" />
                  <span>{personal.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink-100">
                <MapPin size={16} className="text-terracotta-500" />
                <span>{personal.location}</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="section-eyebrow">Elsewhere</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {personal.github && (
                <li>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-ink-100 transition-colors hover:text-terracotta-500"
                  >
                    <Github size={16} className="text-terracotta-500" />
                    <span>GitHub</span>
                    <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              )}
              {personal.linkedin && (
                <li>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-ink-100 transition-colors hover:text-terracotta-500"
                  >
                    <Linkedin size={16} className="text-terracotta-500" />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={personal.resumePath}
                  download
                  className="group flex items-center gap-3 text-ink-100 transition-colors hover:text-terracotta-500"
                >
                  <FileText size={16} className="text-terracotta-500" />
                  <span>Download Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream-300/60 pt-6 text-xs text-ink-50 sm:flex-row sm:items-center">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p>Designed and built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
