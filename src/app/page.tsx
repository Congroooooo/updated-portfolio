import { experience, profile, projects, recognitions, skillGroups } from "@/content/portfolio";
import { MobileNavigation } from "@/components/mobile-navigation";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <div className="section-heading" id={id}>
      <div className="section-heading__meta">
        <span>{number} / 06</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-shell">
        <aside className="sidebar" aria-label="Site navigation">
          <a className="sidebar__brand" href="#top" aria-label="Nicko Balmes, back to top">
            <span className="brand-mark">NB<span className="brand-mark__dot">.</span></span>
            <span className="sidebar__brand-caption">PORTFOLIO / 2026</span>
          </a>
          <div className="sidebar__rule" />
          <p className="sidebar__label">CONTENTS</p>
          <nav className="sidebar__nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                <span>{item.number}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
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
            <div className="hero__intro">
              <p className="eyebrow"><span className="status-dot" /> HELLO, I’M</p>
              <h1>Nicko<br /><em>Balmes.</em></h1>
              <p className="hero__title">{profile.title}</p>
            </div>
            <div className="hero__aside">
              <div className="hero__seal" aria-hidden="true"><span>N</span><small>ENGINEER<br />& MAKER</small></div>
              <p>{profile.introduction}</p>
              <div className="hero__links">
                <a href={`mailto:${profile.email}`}>Get in touch <Arrow diagonal /></a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
              </div>
            </div>
          </header>

          <div className="identity-strip" aria-label="Professional details">
            <div><span>BASED IN</span><strong>{profile.location}</strong></div>
            <div><span>FOCUS</span><strong>Full-stack development</strong></div>
            <div><span>CURRENTLY</span><strong>Engineering useful products</strong></div>
          </div>

          <section className="content-section about-section" aria-labelledby="about">
            <SectionHeading id="about" number="01" eyebrow="A SHORT INTRODUCTION" title="A little about me" />
            <div className="section-body about-grid">
              <p className="about-lead">Curiosity drives the work. Clarity makes it last.</p>
              <p>{profile.about}</p>
            </div>
          </section>

          <section className="content-section" aria-labelledby="experience">
            <SectionHeading id="experience" number="02" eyebrow="WHERE I’VE WORKED" title="Experience" />
            <div className="section-body experience-list">
              {experience.map((job) => (
                <article className="experience-item" key={job.company}>
                  <div className="experience-item__date">{job.period}</div>
                  <div>
                    <div className="experience-item__header"><h3>{job.role}</h3><span>{job.arrangement}</span></div>
                    <p className="experience-item__company">{job.company}</p>
                    <p className="experience-item__summary">{job.summary}</p>
                    <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" aria-labelledby="work">
            <SectionHeading id="work" number="03" eyebrow="A FEW THINGS I’VE BUILT" title="Selected work" />
            <div className="section-body project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-card__top"><span>PROJECT / {project.number}</span><span>{project.period}</span></div>
                  <div className="project-card__body">
                    <div className="project-card__monogram" aria-hidden="true">{project.name.slice(0, 1)}</div>
                    <div>
                      <p className="project-card__category">{project.category}</p>
                      <h3>{project.name}</h3>
                      <p className="project-card__role">{project.role}</p>
                      <p className="project-card__description">{project.description}</p>
                    </div>
                  </div>
                  <div className="project-card__tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" aria-labelledby="expertise">
            <SectionHeading id="expertise" number="04" eyebrow="TOOLS OF THE TRADE" title="Expertise" />
            <div className="section-body skills-grid">
              {skillGroups.map((group, index) => (
                <div className="skill-group" key={group.name}>
                  <span className="skill-group__index">0{index + 1}</span>
                  <h3>{group.name}</h3>
                  <p>{group.items.join(" · ")}</p>
                </div>
              ))}
              <div className="skill-note">Also exploring AI-assisted development, agent collaboration, and more effective engineering workflows.</div>
            </div>
          </section>

          <section className="content-section" aria-labelledby="education">
            <SectionHeading id="education" number="05" eyebrow="FOUNDATIONS & RECOGNITION" title="Education & honors" />
            <div className="section-body education-grid">
              <div className="education-feature">
                <span className="mini-label">EDUCATION</span>
                <h3>Bachelor of Science<br />in Computer Science</h3>
                <p>STI College Lucena</p>
                <span>2022 — July 2026</span>
              </div>
              <div className="recognition-list">
                <span className="mini-label">SELECTED RECOGNITION</span>
                {recognitions.map((item) => (
                  <div key={item.title}><strong>{item.title}</strong><span>{item.detail}</span></div>
                ))}
              </div>
            </div>
          </section>

          <section className="contact-section" aria-labelledby="contact">
            <div className="contact-section__top"><span>06 / 06</span><span>LET’S CONNECT</span></div>
            <h2 id="contact">Let’s make<br /><em>something useful.</em></h2>
            <p>Have a project, role, or idea in mind? I’d be glad to hear about it.</p>
            <a className="contact-section__email" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a>
            <div className="contact-section__bottom"><span>© {new Date().getFullYear()} NICKO BALMES</span><a href={profile.github} target="_blank" rel="noopener noreferrer">GITHUB <Arrow diagonal /></a><a href="#top">BACK TO TOP ↑</a></div>
          </section>
        </main>
      </div>
    </>
  );
}
