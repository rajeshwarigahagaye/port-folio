/*
# Create public portfolio projects table

1. New tables
- `portfolio_projects` stores the public project cards displayed in the portfolio.
- `slug` is a stable text identifier for each project and the primary key.
- `title` stores the project name.
- `blurb` stores the short card description.
- `description` stores the longer project overview shown in the modal.
- `image_url` stores the project image URL.
- `image_alt` stores accessible image text.
- `tags` stores the technology labels shown on the card and modal.
- `features` stores the project feature list shown in the modal.
- `github_url` stores an optional code repository URL.
- `demo_url` stores an optional live demo URL.
- `sort_order` controls the order in which projects are displayed.
- `created_at` and `updated_at` record when each row was created or changed.

2. Security
- Row-level security is enabled on `portfolio_projects`.
- Anonymous and signed-in visitors can read public project content.
- No public write access is granted; content changes require a trusted database role.

3. Important notes
- This portfolio has no sign-in screen, so the public read policy includes both `anon` and `authenticated`.
- The table is intentionally read-only from the browser because project content is published portfolio material.
- No existing tables or user data are modified.
*/

CREATE TABLE IF NOT EXISTS public.portfolio_projects (
  slug text PRIMARY KEY,
  title text NOT NULL,
  blurb text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  image_alt text NOT NULL,
  tags text[] NOT NULL DEFAULT '{}',
  features text[] NOT NULL DEFAULT '{}',
  github_url text,
  demo_url text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON public.portfolio_projects TO anon, authenticated;

DROP POLICY IF EXISTS "Public can read portfolio projects" ON public.portfolio_projects;
CREATE POLICY "Public can read portfolio projects"
  ON public.portfolio_projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS portfolio_projects_sort_order_idx
  ON public.portfolio_projects (sort_order, title);
