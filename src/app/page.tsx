import { experience, profile, projects, recognitions, skillGroups } from "@/content/portfolio";
import { MobileNavigation } from "@/components/mobile-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { MotionProvider, ReadingProgress, Reveal, RevealArticle } from "@/components/motion-effects";
import { SectionNavigation } from "@/components/section-navigation";
import { ProjectGallery } from "@/components/project-gallery";

const navigation = [
  { href: "#about", label: "Profile", number: "01" },
  { href: "#experience", label: "Experience", number: "02" },
  { href: "#work", label: "Selected work", number: "03" },
  { href: "#expertise", label: "Expertise", number: "04" },
  { href: "#education", label: "Education", number: "05" },
  { href: "#contact", label: "Contact", number: "06" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function SectionHeading({
  id,
  number,
  eyebrow,
  title,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="section-heading" id={id}>
      <div className="section-heading__meta">
        <span>{number} / 06</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <MotionProvider>
      <ReadingProgress />
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-shell">
        <aside className="sidebar" aria-label="Site navigation">
          <a className="sidebar__brand" href="#top" aria-label="Nicko Balmes, back to top">
            <span className="brand-mark">NB<span className="brand-mark__dot">.</span></span>
            <span className="sidebar__brand-caption">PORTFOLIO / 2026</span>
          </a>
          <div className="sidebar__rule" />
          <p className="sidebar__label">CONTENTS</p>
          <SectionNavigation items={navigation} />
          <ThemeToggle />
          <div className="sidebar__bottom">
            <p>AVAILABLE FOR CONNECTIONS</p>
            <a href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a>
            <span>QUEZON, PHILIPPINES</span>
          </div>
        </aside>

        <MobileNavigation items={navigation} />

        <main id="main" className="paper" >
          <div id="top" className="paper__topline"><span>CURRICULUM / PERSONAL PORTFOLIO</span><span>EST. 2026 · PH</span></div>
          <header className="hero">
            <Reveal className="hero__intro">
              <p className="eyebrow"><span className="status-dot" /> HELLO, I’M</p>
              <h1>Nicko<br /><em>Balmes.</em></h1>
              <p className="hero__title">{profile.title}</p>
            </Reveal>
            <Reveal className="hero__aside" delay={0.16}>
              <div className="hero__seal" aria-hidden="true"><span>N</span><small>ENGINEER<br />& MAKER</small></div>
              <p>{profile.introduction}</p>
              <div className="hero__links">
                <a href={`mailto:${profile.email}`}>Get in touch <Arrow diagonal /></a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
              </div>
            </Reveal>
          </header>

          <div className="identity-strip" aria-label="Professional details">
            <Reveal><span>BASED IN</span><strong>{profile.location}</strong></Reveal>
            <Reveal delay={0.08}><span>FOCUS</span><strong>Full-stack development</strong></Reveal>
            <Reveal delay={0.16}><span>CURRENTLY</span><strong>Engineering useful products</strong></Reveal>
          </div>

          <section className="content-section about-section" aria-labelledby="about">
            <SectionHeading id="about" number="01" eyebrow="A SHORT INTRODUCTION" title="A little about me" />
            <Reveal className="section-body about-grid">
              <p className="about-lead">Curiosity drives the work. Clarity makes it last.</p>
              <p>{profile.about}</p>
            </Reveal>
          </section>

          <section className="content-section" aria-labelledby="experience">
            <SectionHeading id="experience" number="02" eyebrow="WHERE I’VE WORKED" title="Experience" />
            <div className="section-body experience-list">
              {experience.map((job) => (
                <RevealArticle className="experience-item" key={job.company}>
                  <div className="experience-item__date">{job.period}</div>
                  <div>
                    <div className="experience-item__header"><h3>{job.role}</h3><span>{job.arrangement}</span></div>
                    <p className="experience-item__company">{job.company}</p>
                    <p className="experience-item__summary">{job.summary}</p>
                    <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                </RevealArticle>
              ))}
            </div>
          </section>

          <section className="content-section" aria-labelledby="work">
            <SectionHeading id="work" number="03" eyebrow="A FEW THINGS I’VE BUILT" title="Selected work" />
            <Reveal className="section-body"><ProjectGallery projects={projects} /></Reveal>
          </section>

          <section className="content-section" aria-labelledby="expertise">
            <SectionHeading id="expertise" number="04" eyebrow="TOOLS OF THE TRADE" title="Expertise" />
            <div className="section-body skills-grid">
              {skillGroups.map((group, index) => (
                <Reveal className="skill-group" key={group.name} delay={index * 0.08}>
                  <span className="skill-group__index">0{index + 1}</span>
                  <h3>{group.name}</h3>
                  <p>{group.items.join(" · ")}</p>
                </Reveal>
              ))}
              <div className="skill-note">Also exploring AI-assisted development, agent collaboration, and more effective engineering workflows.</div>
            </div>
          </section>

          <section className="content-section" aria-labelledby="education">
            <SectionHeading id="education" number="05" eyebrow="FOUNDATIONS & RECOGNITION" title="Education & honors" />
            <div className="section-body education-grid">
              <Reveal className="education-feature">
                <span className="mini-label">EDUCATION</span>
                <h3>Bachelor of Science<br />in Computer Science</h3>
                <p>STI College Lucena</p>
                <span>2022 — July 2026</span>
              </Reveal>
              <Reveal className="recognition-list" delay={0.1}>
                <span className="mini-label">SELECTED RECOGNITION</span>
                {recognitions.map((item) => (
                  <div key={item.title}><strong>{item.title}</strong><span>{item.detail}</span></div>
                ))}
              </Reveal>
            </div>
          </section>

          <section className="contact-section" aria-labelledby="contact">
            <div className="contact-section__top"><span>06 / 06</span><span>LET’S CONNECT</span></div>
            <Reveal className="contact-section__content">
              <h2 id="contact">Let’s make<br /><em>something useful.</em></h2>
              <p>Have a project, role, or idea in mind? I’d be glad to hear about it.</p>
              <a className="contact-section__email" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a>
            </Reveal>
            <div className="contact-section__bottom"><span>© {new Date().getFullYear()} NICKO BALMES</span><a href={profile.github} target="_blank" rel="noopener noreferrer">GITHUB <Arrow diagonal /></a><a href="#top">BACK TO TOP ↑</a></div>
          </section>
        </main>
      </div>
    </MotionProvider>
  );
}
