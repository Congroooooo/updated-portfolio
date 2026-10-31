# Motion and interaction design

## Research and decision

The portfolio needs motion that helps visitors follow a long document. [Motion for React](https://motion.dev/docs/react) provides scroll-triggered entrances, scroll-linked progress, and accessible reduced-motion behavior. [Remotion](https://www.remotion.dev/docs/idea) is built around frame-based video compositions and its [Player](https://www.remotion.dev/docs/player) embeds video in React; that is a different use case from interactive page motion. CSS scroll-driven animations are promising, but Motion offers a consistent React API for the current browser range and project filters. The implementation adds one dependency, `motion`.

## Applied interactions

1. Hero, document details, section headings, experience entries, skills, education, and contact content rise and fade in once when entering the viewport. The distance is small and the timing is restrained.
2. A three-pixel reading line at the top follows scroll progress.
3. The desktop index highlights the section currently being read.
4. Selected work can be filtered between all, academic, and hackathon projects. Cards animate between states while preserving their content as accessible HTML.
5. Existing theme and navigation controls remain available.

The page remains a static Next.js export. The content stays in server-rendered HTML; small client components handle motion, active navigation, and filtering. `MotionConfig reducedMotion="user"` disables transform and layout movement for visitors requesting reduced motion, and CSS hides the reading line and removes decorative transitions. Motion is designed to help orientation and feedback rather than run continuously.

## Verification

Run `npm run typecheck` and `npm run build`. In the browser, check section entrances, scroll progress, active index updates, all three project filters, theme switching, keyboard focus, mobile layout, and reduced-motion settings.
