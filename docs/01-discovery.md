# Phase 1 — Discovery and requirements analysis

Date: 31 October 2026. Status: discovery complete; design and development await approval.

## Scope and sources

- Workspace `Updated-portfolio`: empty at inspection, with no Git repository, application files, configuration, or existing design system.
- Primary content source: `Nicko_Balmes_Resume_Refined.pdf` (2 pages; modified 31 October 2026).
- Context source: `Balmes Resume-BX3RXpxL.pdf` (2 pages; modified 18 September 2026).
- Layout reference: [bryllim.com](https://bryllim.com/), inspected at desktop and 390 px mobile width on 31 October 2026.
- Visual reference: supplied square image labeled “Linter 4K (detail)” from PaperTexture.co. It is a close-up of off-white, fibrous, slightly gray paper, rather than a complete page design.

## Audience and objective

The intended readers are engineering recruiters, hiring managers, collaborators, and peers. The site should establish Nicko's current professional identity quickly, show credible evidence through selected work and experience, and make contact easy. It should remain more focused than a full resume transcription.

## Reference website findings

At desktop width, the site has a persistent narrow left sidebar with branding, grouped links, controls, and contact details. The main content is a restrained column: a portrait and short introduction, then compact affiliation and statistic rows, followed by numbered sections. Projects appear as prominent cards, experience as a concise chronological list, and skills as a compact stack summary. Sections link to deeper dedicated pages. The page ends with contact and additional community and achievement content.

At 390 px, the sidebar becomes a small top bar with a menu button and expandable navigation; the hero stacks portrait above text. Content follows in a single scroll column. This is a useful structural pattern, though the proposed portfolio likely needs fewer links and no secondary pages at launch.

**Adapt:** strong hero, visible contact links, clear section rhythm, compact experience chronology, selected project cards, responsive navigation, and restrained content density. **Do not carry over:** dark palette, personal branding, portrait treatment, social metrics, chat, command menu, typing test, theme/sound controls, endorsements, commerce, or decorative interactions. Those serve the reference owner's content rather than this resume-focused portfolio.

## Paper reference findings

The image is an evenly lit close-up texture: warm off-white base, cool gray fibers, fine irregular grain, low contrast, and no strong stains or creases. It contains no typography, margins, borders, shadows, or section hierarchy, so those details must be designed rather than inferred from the image. The visible watermark and logo are reference-image content and must not appear in the interface. Use CSS color, delicate noise or layered gradients, hairline rules, and modest sheet shadows to suggest paper. Keep the texture subtle enough that selectable HTML text remains legible. A warmer paper foreground against a slightly darker desk/background could establish depth without imitating the reference site's colors.

## Resume comparison and content inventory

| Topic | Updated resume (primary) | Earlier resume (context) | Discovery decision |
| --- | --- | --- | --- |
| Positioning | Junior Software Engineer; full-stack development; CS graduate | Junior Frontend Developer / UI/UX Designer; fourth-year CS student | Use current title and graduate status. Design experience can inform project descriptions. |
| Employment | Kodecraft Technologies OPC, Junior Software Engineer, hybrid, May 2026–present; Protocode Digital Solutions Inc., Full Stack Developer, remote, Apr 2026–present; Mega Cellular Network Inc., Software Development Intern, onsite, Jan–Apr 2026 | No professional employment section | Use updated roles and dates. Confirm whether both current positions may be publicly shown and whether concurrent roles need context. |
| Education | BS Computer Science, STI College Lucena, 2022–July 2026; STEM senior high, 2022 | BSCS listed as ongoing; earlier schools listed | Use graduate status and higher education. Senior high is optional; earlier junior/elementary schools add little to the site. |
| Skills | Broader frontend, backend, databases, testing, deployment, AI-assisted engineering | Earlier frontend and UX emphasis | Curate a readable subset from the updated list. Avoid implying equal proficiency in every listed tool. |
| Projects | No selected-project details | PAMO; NailsByKheley; Alertify; Work Hive; Bayanimo; PreptalkAI | Candidate project pool only. Confirm current status, ownership, permissions, links, screenshots, and whether claims remain accurate before publishing. |
| Awards | Service Awardee; Excellence in CS Thesis; Innolympics top 10; Hack The Flood top 10; OpenIT champion; FEU Create & Conquer first place and Best in Working Prototype | OpeniT champion; FEU finalist/top 8 and second place; additional participation and project award | Prioritize updated awards. FEU placement conflicts materially and must be verified before display. Treat hackathon recognition as awards, not certifications. |
| Contact | Email and existing site URL; phone and general location | Same email/site/phone; precise barangay address | Email and verified profiles suit a public site. Omit phone and precise address by default. |

The newer resume mentions SelfView and AI-integrated engineering work but gives no public description or permission to disclose internal details. The older PAMO description asserts improved efficiency and reliability without measured evidence; present only verifiable scope and responsibilities if selected. The older NailsByKheley and hackathon descriptions include outcome claims that need confirmation before reuse. The prior resume's character reference and their contact details must not be published.

## Requirements

**Functional:** one accessible portfolio page with introduction, experience, curated skills, selected projects where verified, education, awards, and contact; responsive navigation; working section and external links; downloadable resume only if the public version is approved.

**Non-functional:** semantic and selectable content; keyboard operation; readable contrast; responsive layouts; fast static delivery; clear SEO/social metadata; limited dependencies; reusable sections; content separated from presentation; no invented metrics or private company information.

## Proposed high-level direction

Build a single-page, editorial resume layout with a slim document index on desktop and a compact menu on mobile. Use a central paper sheet, generous margins, quiet rules, and a strong typographic hierarchy. Start with a short professional statement and contact links. Follow with experience, 2–4 verified projects, grouped technical strengths, education and selected awards, then a direct contact footer. An “About” paragraph can be part of the hero unless there is enough distinct content to justify its own section. Omit certifications until actual credentials are supplied. Avoid empty sections and speculative project claims.

The requested Next.js App Router + TypeScript + Tailwind direction is suitable for a static informational site. Package manager, versions, component boundaries, detailed tokens, deployment, and test plan belong to Phase 2–4 decisions after this discovery is approved. No app or dependencies were initialized in this phase.

## Open questions before public content is finalized

1. May both concurrent current roles, employers, work arrangements, and the named SelfView initiative be shown publicly? Are any contributions confidential?
2. Which 2–4 older projects are still representative? For each, what public URL/repository, images, exact role, collaborators, and approved description are available?
3. Which FEU Create & Conquer result is correct: the updated resume's first place or the older resume's second place/finalist wording? Were these different categories or events?
4. Which GitHub, LinkedIn, and other profiles should be linked? Is `balmesnicko.vercel.app` still current?
5. Should the public site offer a resume download, and if so, should it use a version without the phone number and other personal details?
6. Is there an approved portrait or project imagery? A typographic hero works without either.

## Phase 1 outcome

Discovery supports a concise, paper-inspired, single-page portfolio. The updated resume establishes the current professional narrative; the older resume supplies candidate projects that require verification. The main risks are publishing conflicting award details, unapproved project claims, or internal work information. Proceed to Phase 2 design planning only after explicit approval, as requested.
