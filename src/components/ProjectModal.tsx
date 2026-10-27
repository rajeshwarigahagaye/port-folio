import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Check } from 'lucide-react';
import type { Project } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  index: number;
  total: number;
};

export function ProjectModal({ project, onClose, onPrev, onNext, index, total }: ProjectModalProps) {
  const reduced = useReducedMotion();

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const panel = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-500/60 backdrop-blur-sm"
        style={reduced ? undefined : { animation: 'fade-in 0.2s ease-out both' }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-cream-50 shadow-2xl"
        style={reduced ? undefined : { animation: 'scale-in 0.25s ease-out both' }}
      >
        {/* Image */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-72">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-500/50 to-transparent" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-cream-50/90 p-2 text-ink-300 shadow-sm transition-all hover:bg-cream-50 hover:text-terracotta-500 active:scale-95"
            aria-label="Close project details"
          >
            <X size={20} />
          </button>

          {/* Prev / Next over image on larger screens */}
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3">
            <button
              onClick={onPrev}
              className="rounded-full bg-cream-50/90 p-2 text-ink-300 shadow-sm transition-all hover:bg-cream-50 hover:text-terracotta-500 active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="rounded-full bg-cream-50/90 px-3 py-1 text-xs font-medium text-ink-200">
              {index + 1} / {total}
            </span>
            <button
              onClick={onNext}
              className="rounded-full bg-cream-50/90 p-2 text-ink-300 shadow-sm transition-all hover:bg-cream-50 hover:text-terracotta-500 active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <h2 id="project-modal-title" className="font-display text-2xl font-bold text-ink-400 sm:text-3xl">
            {project.title}
          </h2>
          <p className="mt-1 font-serif text-lg text-terracotta-600">{project.blurb}</p>

          {/* Tags */}
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-terracotta-500/10 px-3 py-1 text-xs font-medium text-terracotta-600"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Description */}
          <div className="mt-6">
            <h3 className="section-eyebrow">Overview</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-100 sm:text-base">{project.description}</p>
          </div>

          {/* Features */}
          <div className="mt-6">
            <h3 className="section-eyebrow">Key Features</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-ink-100">
                  <Check size={16} className="mt-0.5 shrink-0 text-terracotta-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={16} />
                View Code
              </a>
            )}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-cream-300 px-5 py-2.5 text-sm text-ink-50">
                Live demo not available
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(panel, document.body);
}
