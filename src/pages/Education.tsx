import { GraduationCap, Wrench, Layers, BookOpen } from 'lucide-react';
import { education, skillGroups } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ScrollReveal';

const categoryIcons = [Layers, Wrench, BookOpen, GraduationCap];

export function EducationPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
      {/* Heading */}
      <ScrollReveal>
        <p className="section-eyebrow">Background</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Education &amp; Skills
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-100 sm:text-lg">
          The foundation I built in computer science, and the tools I use every day to ship frontend work.
        </p>
      </ScrollReveal>

      {/* Education */}
      <ScrollReveal delay={120}>
        <section className="mt-14">
          <div className="card overflow-hidden">
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-terracotta-500/10 text-terracotta-500">
                <GraduationCap size={26} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="font-display text-xl font-semibold leading-snug sm:text-2xl">
                    {education.degree}
                  </h2>
                  <span className="inline-flex w-fit rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-700">
                    {education.period}
                  </span>
                </div>
                <p className="mt-1 font-serif text-lg text-terracotta-600">{education.institution}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-100 sm:text-base">{education.detail}</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Skills */}
      <section className="mt-16">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Technical Skills</h2>
          <p className="mt-2 text-sm text-ink-100 sm:text-base">
            Grouped by where I use them in the build process.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = categoryIcons[i % categoryIcons.length];
            return (
              <ScrollReveal key={group.category} delay={i * 80}>
                <div className="card h-full p-6 hover:-translate-y-1 hover:shadow-md hover:shadow-terracotta-500/5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-500/10 text-terracotta-500">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{group.category}</h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-cream-300/80 bg-cream-100 px-3 py-1.5 text-sm text-ink-200 transition-colors hover:border-terracotta-500/40 hover:text-terracotta-600"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
