# Design system

## Direction

An editorial resume presented as a warm paper sheet on a muted desk. The desktop composition uses a narrow index rail and a wide document; mobile uses a compact top bar and a single content column. The paper reference informs color and subtle material texture, while the site layout is adapted from the reference portfolio's strong hero and ordered sections.

## Tokens and typography

Core colors live as CSS custom properties in `src/app/globals.css`: ink `#292a25`, paper `#f8f7f0`, desk `#e8e8e1`, rule `#d8d7cc`, muted text `#6e7067`, and rust accent `#8f4c36`. Georgia provides editorial display type; Arial provides legible body and navigation type. The design uses a small uppercase metadata scale, regular body text, and large serif section titles. Rules and restrained shadows suggest a physical sheet without reducing contrast.

## Layout specification

1. **Index:** fixed-width sticky rail at desktop widths; compact top bar and disclosure menu below 800 px.
2. **Hero:** oversized name, current title, short positioning statement, and email/GitHub links. Desktop splits into two columns; mobile stacks.
3. **Identity row:** location, professional focus, and current direction.
4. **Profile:** brief editorial statement and longer summary.
5. **Experience:** chronological entries with role, employer, dates, arrangement, summary, and concise responsibilities.
6. **Selected work:** three project cards; one wider lead card on desktop, single column on mobile.
7. **Expertise:** three skill groupings, followed by an AI-assisted workflow note.
8. **Education and honors:** degree and selected recognitions.
9. **Contact:** contrasting dark-paper footer with direct email action.

The site avoids decorative animation. Hover responses are brief and disabled under reduced-motion preferences. Navigation and content remain semantic HTML.

## Reusable elements

`SectionHeading` creates consistent numbering and titles. Resume data is stored outside the page markup. Project and experience cards share predictable structures and spacing, with responsive CSS layouts.
