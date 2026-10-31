# Nicko Balmes — Portfolio

A paper-inspired, responsive personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

The light and dark paper themes follow the visitor's system preference on first load. The theme button in the desktop sidebar or mobile header saves an explicit choice in the browser.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Check and build

```bash
npm run typecheck
npm run build
```

The production build is exported to `out/` for static hosting. No environment variables are required.

## Deploy

Import the GitHub repository into Vercel as a Next.js project. Keep the default build command (`npm run build`); the static export requires no server or environment variables. Alternatively, host the contents of `out/` on a static web host configured to serve the root path. After deployment, verify the home page, section navigation, favicon, email action, and mobile menu at the live URL. Set the final public URL in `metadataBase` in `src/app/layout.tsx` when a domain is chosen.

## Edit content

Public content and its TypeScript types are in `src/content/portfolio.ts`. Global design tokens and responsive rules are in `src/app/globals.css`. Page metadata is in `src/app/layout.tsx`.

The portfolio intentionally omits private contact information, unverified FEU placement details, project URLs that were not supplied, and a resume download. Review public content before deployment.

## Project notes

See `docs/` for discovery, design, architecture, and implementation decisions.
