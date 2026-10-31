# Implementation roadmap and status

| Step | Scope | Acceptance and validation | Status |
| --- | --- | --- | --- |
| 1. Initialize | Next.js, TypeScript, Tailwind, npm config | Dependencies install; build starts | Complete |
| 2. Foundation | Root layout, tokens, paper surface | Readable document layout | Complete |
| 3. Navigation | Desktop index and mobile menu | All anchors reach sections; keyboard usable | Complete |
| 4. Content | Typed profile, experience, projects, skills, education, awards | Matches supplied resume facts; conflicts excluded | Complete |
| 5. Sections | Hero, profile, timeline, project cards, skills, contact | Responsive and semantic HTML | Complete |
| 6. Quality | Metadata, focus styles, reduced motion, static export | Typecheck, build, visual review | Complete: typecheck and build passed; desktop and 390 px mobile reviewed; mobile menu and anchor verified |
| 7. Repository handover | Push source to supplied GitHub repository | Source available on `main` | Complete |
| 8. Hosting | Connect repository to a static Next.js host | Live URL and domain verified | Pending host selection |

## Remaining content review

Before a public launch, confirm that both current roles and the named projects may be shown, provide any approved project links or images, and resolve the FEU placement conflict. A public resume download should use a version approved for disclosure. These gaps do not prevent a functional portfolio, but they limit the public claims and available outbound links.
