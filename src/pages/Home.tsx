import { ArrowRight, Download, Code2, Sparkles, Smartphone } from 'lucide-react';
import { personal } from '@/data/portfolio';
import type { PageId } from '@/components/Navbar';
import { ScrollReveal } from '@/components/ScrollReveal';

type HomeProps = {
  onNavigate: (page: PageId) => void;
};

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="relative">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-terracotta-500/5 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-sage-500/5 blur-3xl" />
      </div>

      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-content flex-col justify-center px-5 py-24 sm:px-8 sm:py-32">
        <ScrollReveal>
          <p className="section-eyebrow">Hello, I&apos;m</p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink-400 sm:text-6xl lg:text-7xl">
            {personal.name}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2 className="mt-4 font-serif text-2xl font-medium text-terracotta-600 sm:text-3xl">
            Frontend Developer
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-100 sm:text-lg">
            {personal.tagline} {personal.summary}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => onNavigate('projects')} className="btn-primary group">
              Explore My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a href={personal.resumePath} download className="btn-secondary group">
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </ScrollReveal>

        {/* Highlight cards */}
        <ScrollReveal delay={400}>
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Code2, title: 'Clean Code', text: 'Component-driven, maintainable React.' },
              { icon: Smartphone, title: 'Responsive', text: 'Mobile-first layouts that adapt.' },
              { icon: Sparkles, title: 'Accessible', text: 'Keyboard-friendly, a11y-minded.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-5 hover:-translate-y-1 hover:shadow-md hover:shadow-terracotta-500/5">
                <Icon size={22} className="text-terracotta-500" />
                <h3 className="mt-3 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-ink-100">{text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
