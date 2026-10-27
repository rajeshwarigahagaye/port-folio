import { useEffect, useState } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects as localProjects, type Project } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ProjectModal } from '@/components/ProjectModal';
import { supabase } from '@/lib/supabase';

type PortfolioProjectRow = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  image_url: string;
  image_alt: string;
  tags: string[];
  features: string[];
  github_url: string | null;
  demo_url: string | null;
};

function toProject(row: PortfolioProjectRow): Project {
  return {
    id: row.slug,
    title: row.title,
    blurb: row.blurb,
    description: row.description,
    image: row.image_url,
    imageAlt: row.image_alt,
    tags: row.tags,
    features: row.features,
    github: row.github_url ?? undefined,
    demo: row.demo_url ?? undefined,
  };
}

export function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<Project[]>(localProjects);
  const [databaseError, setDatabaseError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadProjects = async () => {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('slug, title, blurb, description, image_url, image_alt, tags, features, github_url, demo_url')
        .order('sort_order', { ascending: true });

      if (!mounted) return;

      if (error || !data?.length) {
        setDatabaseError(Boolean(error));
        return;
      }

      setProjects((data as PortfolioProjectRow[]).map(toProject));
    };

    void loadProjects();
    return () => {
      mounted = false;
    };
  }, []);

  const current: Project | null = activeIndex !== null ? projects[activeIndex] : null;

  const goTo = (i: number) => {
    const n = projects.length;
    setActiveIndex(((i % n) + n) % n);
  };

  return (
    <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
      <ScrollReveal>
        <p className="section-eyebrow">Selected Work</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-100 sm:text-lg">
          A collection of things I&apos;ve designed and built. Click any card to see the full case.
        </p>
        {databaseError && (
          <p className="mt-4 text-sm text-terracotta-600" role="status">
            Saved project details are temporarily unavailable, so the local project list is shown instead.
          </p>
        )}
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} delay={(i % 3) * 90}>
            <button
              onClick={() => setActiveIndex(i)}
              className="group card flex h-full w-full flex-col overflow-hidden p-0 text-left hover:-translate-y-1.5 hover:shadow-lg hover:shadow-terracotta-500/10"
              aria-label={`View details for ${project.title}`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cream-50/90 text-ink-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-lg font-semibold leading-snug group-hover:text-terracotta-600">
                  {project.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-100">{project.blurb}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-terracotta-500/10 px-2.5 py-1 text-xs font-medium text-terracotta-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-3 text-xs text-ink-50">
                  {project.github && (
                    <span className="flex items-center gap-1">
                      <Github size={13} /> Code
                    </span>
                  )}
                  {project.demo ? (
                    <span className="flex items-center gap-1 text-terracotta-600">
                      <ExternalLink size={13} /> Live
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">No live demo</span>
                  )}
                </div>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {current && (
        <ProjectModal
          project={current}
          index={activeIndex!}
          total={projects.length}
          onClose={() => setActiveIndex(null)}
          onPrev={() => goTo(activeIndex! - 1)}
          onNext={() => goTo(activeIndex! + 1)}
        />
      )}
    </div>
  );
}
