/*
# Restrict portfolio project writes

1. Security changes
- Removes INSERT, UPDATE, and DELETE privileges on `portfolio_projects` from `anon` and `authenticated`.
- Keeps SELECT access for both visitor roles so the portfolio can display projects.

2. Important notes
- Project content remains readable by the public portfolio.
- Browser clients cannot publish, edit, or remove project content.
- No rows, columns, or existing data are modified.
*/

REVOKE INSERT, UPDATE, DELETE ON public.portfolio_projects FROM anon, authenticated;
GRANT SELECT ON public.portfolio_projects TO anon, authenticated;
