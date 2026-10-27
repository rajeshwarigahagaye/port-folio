import { Briefcase, ChevronRight } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ScrollReveal';

export function ExperiencePage() {
  return (
    <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
      <ScrollReveal>
        <p className="section-eyebrow">Journey</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Experience</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-100 sm:text-lg">
          Roles where I&apos;ve designed, built, and learned — from cyber security fundamentals to production frontend work.
        </p>
      </ScrollReveal>

      {/* Timeline */}
      <ol className="mt-14 space-y-8">
        {experiences.map((exp, i) => (
          <ScrollReveal as="li" key={`${exp.company}-${exp.role}`} delay={i * 100}>
            <div className="relative card p-6 sm:p-8 hover:-translate-y-1 hover:shadow-md hover:shadow-terracotta-500/5">
              {/* Current badge */}
              {exp.current && (
                <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-terracotta-500 px-3 py-1 text-xs font-medium text-cream-50">
                  <span className="h-1.5 w-1.5 rounded-full bg-cream-50" />
                  Current
                </span>
              )}

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta-500/10 text-terracotta-500">
                  <Briefcase size={22} />
                </span>
                <div className="flex-1">
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-50">{exp.period}</p>
                  <h2 className="mt-1 font-display text-xl font-semibold leading-snug sm:text-2xl">
                    {exp.role}
                  </h2>
                  <p className="font-serif text-lg text-terracotta-600">{exp.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-100 sm:text-base">{exp.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-ink-100">
                        <ChevronRight size={16} className="mt-0.5 shrink-0 text-terracotta-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </ol>
    </div>
  );
}
