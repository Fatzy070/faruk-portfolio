import { ArrowDownRight, ArrowRight, Plus, Smartphone } from 'lucide-react';
import { archive, mobileProject, projects, type Project } from '../content/portfolio';
import { ExternalLink, SectionLabel, Tags } from './Primitives';
function ProjectFeature({ project }: { project: Project }) {
  return (
    <article className={`project-feature ${project.theme}`} data-reveal id={project.id}>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-visual"
        aria-label={`Visit ${project.name} (opens in a new tab)`}
      >
        <div className="visual-heading">
          <span>
            {project.name.toLowerCase()}
            <span className="brand-period">.</span>
          </span>
          <span className="project-live">
            <span />
            LIVE PRODUCT
          </span>
        </div>
        <div className="browser-frame">
          <div className="browser-chrome">
            <span className="browser-dots">● ● ●</span>
            <span>{project.liveUrl?.replace('https://', '')}</span>
            <span>↗</span>
          </div>
          <img
            src={project.image}
            alt={project.imageAlt}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="visual-open">
          <ArrowDownRight aria-hidden="true" />
        </span>
      </a>
      <div className="project-content">
        <div className="project-meta">
          <span>
            {project.number} / {project.category}
          </span>
          <span>{project.role}</span>
        </div>
        <div className="project-description">
          <div>
            <h3>{project.name}</h3>
            <p className="project-headline">{project.headline}</p>
          </div>
          <div>
            <p className="body-copy">{project.description}</p>
            <Tags items={project.technologies} />
            <div className="project-links">
              <ExternalLink href={project.liveUrl}>Open product</ExternalLink>
              <ExternalLink href={project.githubUrl}>Source code</ExternalLink>
            </div>
          </div>
        </div>
        <details className="case-study">
          <summary>
            <span>Inside the engineering</span>
            <span className="details-hint">Architecture & decisions</span>
            <Plus size={20} aria-hidden="true" />
          </summary>
          <div className="case-study-body">
            <div className="architecture" aria-label="Architecture">
              {project.architecture.map((layer, index) => (
                <div key={layer}>
                  <span>0{index + 1}</span>
                  {layer}
                  {index < project.architecture.length - 1 && (
                    <ArrowRight size={16} aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
            <div className="engineering-grid">
              {project.highlights.map((item) => (
                <section key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </section>
              ))}
            </div>
            {project.note && <p className="engineering-note">{project.note}</p>}
          </div>
        </details>
      </div>
    </article>
  );
}
export function SelectedWork() {
  return (
    <section id="work" className="work-section wrap" aria-labelledby="work-title">
      <div className="section-intro" data-reveal>
        <div>
          <SectionLabel number="01">Selected work</SectionLabel>
          <h2 id="work-title">
            The product is
            <br />
            the proof<span className="period">.</span>
          </h2>
        </div>
        <p>
          Real applications. Connected systems.
          <br />A look at what I build—and how it works.
        </p>
      </div>
      {projects.map((project) => (
        <ProjectFeature project={project} key={project.id} />
      ))}
      <article className="mobile-project" data-reveal>
        <div className="mobile-copy">
          <p className="eyebrow">
            <Smartphone size={16} />
            03 / {mobileProject.label}
          </p>
          <h3>
            One product.
            <br />
            <em>More than one screen.</em>
          </h3>
          <p className="body-copy">{mobileProject.description}</p>
          <div className="mobile-capabilities">
            {mobileProject.capabilities.map((item) => (
              <div key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <Tags items={mobileProject.technologies} />
          <div className="project-links">
            {mobileProject.links.map((link) => (
              <ExternalLink key={link.label} href={link.url}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
        <div className="nexus-visual">
          <div className="nexus-title">
            nexus<span>Connected, across platforms.</span>
          </div>
          <img
            src="/images/nexus.webp"
            alt="Nexus social web application with feed, conversations and community navigation"
            width="1200"
            height="617"
            loading="lazy"
            decoding="async"
          />
          <div className="mobile-repo-note">
            <Smartphone size={22} />
            <div>
              <strong>React Native + Expo</strong>
              <span>Mobile app · source available</span>
            </div>
            <ArrowDownRight size={28} />
          </div>
        </div>
      </article>
      <details className="archive" data-reveal>
        <summary>
          <span>
            Earlier explorations
            <span className="archive-count">{archive.length.toString().padStart(2, '0')}</span>
          </span>
          <span className="archive-summary">
            A few foundations along the way <Plus size={19} />
          </span>
        </summary>
        <div>
          {archive.map((project) => (
            <ExternalLink className="archive-row" key={project.name} href={project.url}>
              <strong>{project.name}</strong>
              <span>{project.category}</span>
              <small>{project.technologies}</small>
            </ExternalLink>
          ))}
        </div>
      </details>
    </section>
  );
}
