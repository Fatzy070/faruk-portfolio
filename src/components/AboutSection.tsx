import { Download } from 'lucide-react';
import { education, experience, profile } from '../content/portfolio';
import { ExternalLink, SectionLabel } from './Primitives';
export function AboutSection() {
  return (
    <>
      <section id="about" className="about-section wrap" aria-labelledby="about-title">
        <div className="about-copy" data-reveal>
          <div className="about-heading">
            <SectionLabel number="03">A little context</SectionLabel>
            <h2 id="about-title">
              I like knowing
              <br />
              how the whole
              <br />
              <em>thing works.</em>
            </h2>
          </div>
          <div className="about-body">
            <p>
              That’s why my work spans the interface, the API and the systems underneath. I build
              with React and React Native, and work through the backend, integrations and deployment
              that turn an application into a usable product.
            </p>
            <p>
              My projects are where that approach becomes concrete: learning tools in Parvis, a
              document engine in Papertrail, and connected experiences across web and mobile in
              Nexus.
            </p>
            <div className="about-links">
              <ExternalLink href={profile.cvUrl}>View my CV</ExternalLink>
              <a
                href={profile.cvDownloadUrl}
                download="Ogunsola-Faruk-CV.pdf"
                className="text-link"
              >
                Download PDF <Download size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="experience-section wrap"
        aria-labelledby="experience-title"
      >
        <div className="experience-heading" data-reveal>
          <SectionLabel number="04">Experience</SectionLabel>
          <h2 id="experience-title">
            Building.
            <br />
            Contributing.
            <br />
            Getting better.
          </h2>
          <div className="education">
            <span className="eyebrow">Education / {education.year}</span>
            <h3>{education.title}</h3>
            <p>{education.institution}</p>
          </div>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article key={item.company} className="experience-entry" data-reveal>
              <div className="experience-date">
                <span>{item.date}</span>
                {index === 0 && <span className="current-role">Current</span>}
              </div>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
              <ul>
                {item.contributions.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
