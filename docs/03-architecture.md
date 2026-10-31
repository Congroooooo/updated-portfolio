# Architecture

## Decision

Use Next.js App Router, TypeScript, Tailwind CSS v4, and a static export. The site is informational and requires no server, database, authentication, or form processing. Npm is the package manager because it ships with the installed Node environment and requires no additional setup.

## Structure

```text
src/
  app/
    globals.css       Paper design tokens and responsive styling
    layout.tsx        Root HTML and SEO metadata
    page.tsx          Single-page portfolio composition
  content/
    portfolio.ts      Typed public-facing resume content
docs/                 Project research and decisions
public/               Static assets, if approved later
```

The page renders as static HTML. Data types and content live in `portfolio.ts`, making it easier to revise resume facts without changing layout logic. The CSS contains the design tokens and small number of component styles; Tailwind is available for future utility use without requiring a UI kit. No runtime icon package is needed for the few typographic arrows in the page.

## SEO, deployment, and validation

Metadata is declared in the root layout. `output: "export"` produces `out/`, suitable for static hosting. The supplied GitHub repository is the source destination; deployment is not assumed because no hosting target or domain was provided. Validate with TypeScript and a production build, then inspect desktop and mobile renderings in a browser. Maintain content accuracy and public-disclosure review as a pre-publication gate.

## Trade-offs

Static export makes hosting and maintenance simple but precludes server-side features without changing deployment. The current page has no project screenshots or live project URLs because those assets and links were not supplied. The mobile navigation uses native `details` to avoid JavaScript, trading custom menu behavior for simplicity and keyboard support.
