import type { CSSProperties } from 'react';
import { containerClass, sectionTitleClass, textLinkClass, eyebrowClass } from './styles';
import { Download } from 'lucide-react';
import { education, experience, profile } from '../content/portfolio';
import { ExternalLink, SectionLabel } from './Primitives';

export function AboutSection() {
  return (
    <>
      <section
        id="about"
        className={`${containerClass} relative z-[2] py-[118px] tablet:py-[96px] mobile:py-[60px] print:py-[20px]!`}
        aria-labelledby="about-title"
      >
        <div
          className="grid grid-cols-[minmax(0,_1.15fr)_minmax(0,_0.85fr)] [align-items:end] gap-x-[clamp(48px,_7vw,_120px)] [&_h2]:text-[clamp(44px,_4.5vw,_64px)] tablet:gap-x-[42px] tablet:[&_h2]:text-[clamp(44px,_4.25vw,_54px)] stack:grid-cols-[1fr] stack:gap-y-[30px] mobile:gap-y-[22px] mobile:[&_h2]:text-[clamp(37px,_8.4vw,_44px)]"
          data-reveal
        >
          <div>
            <SectionLabel number="03">A little context</SectionLabel>
            <h2 className={sectionTitleClass} id="about-title">
              <span className="mask-line">
                <span
                  className="mask-line-inner"
                  style={{ '--line-delay': '0.04s' } as CSSProperties}
                >
                  I like knowing
                </span>
              </span>
              <span className="mask-line">
                <span
                  className="mask-line-inner"
                  style={{ '--line-delay': '0.14s' } as CSSProperties}
                >
                  how the whole
                </span>
              </span>
              <span className="mask-line">
                <span
                  className="mask-line-inner"
                  style={{ '--line-delay': '0.24s' } as CSSProperties}
                >
                  <em className="font-editorial font-normal text-accent">thing works.</em>
                </span>
              </span>
            </h2>
          </div>
          <div
            className="stagger-item pb-[5px] [&_>_p_+_p]:mt-[18px] stack:max-w-[640px] stack:ml-auto mobile:ml-0"
            style={{ '--stagger-delay': '0.26s' } as CSSProperties}
          >
            <p className="text-[15px] text-muted leading-[1.85] mobile:text-[13px]">
              That’s why my work spans the interface, the API and the systems underneath. I build
              with React and React Native, and work through the backend, integrations and deployment
              that turn an application into a usable product.
            </p>
            <p className="text-[15px] text-muted leading-[1.85] mobile:text-[13px]">
              My projects are where that approach becomes concrete: learning tools in Parvis, a
              document engine in Papertrail, 3D digital letters in WithWords, and connected
              experiences across web and mobile in Nexus.
            </p>
            <div className="[&_>_a]:inline-flex [&_>_a]:gap-[12px] [&_>_a]:items-center [&_>_a]:text-[12px] [&_>_a]:font-medium [&_>_a]:min-h-[44px] [&_>_a:hover]:text-accent flex flex-wrap gap-[26px] mt-[25px] mobile:mt-[14px]">
              <ExternalLink href={profile.cvUrl}>View my CV</ExternalLink>
              <a
                href={profile.cvDownloadUrl}
                download="Ogunsola-Faruk-CV.pdf"
                className={textLinkClass}
              >
                Download PDF <Download size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className={`${containerClass} relative z-[2] [border-top:1px_solid_var(--line)] pt-[84px] pb-[105px] grid grid-cols-[0.8fr_1.2fr] gap-[90px] tablet:gap-[55px] mobile:grid-cols-[1fr] mobile:pt-[50px] mobile:pb-[60px] mobile:gap-[35px] print:py-[20px]!`}
        aria-labelledby="experience-title"
      >
        <div className="[&_h2]:text-[43px] mobile:[&_h2]:text-[37px]" data-reveal>
          <SectionLabel number="04">Experience</SectionLabel>
          <h2 className={sectionTitleClass} id="experience-title">
            <span className="mask-line">
              <span
                className="mask-line-inner"
                style={{ '--line-delay': '0.04s' } as CSSProperties}
              >
                Building.
              </span>
            </span>
            <span className="mask-line">
              <span
                className="mask-line-inner"
                style={{ '--line-delay': '0.13s' } as CSSProperties}
              >
                Contributing.
              </span>
            </span>
            <span className="mask-line">
              <span
                className="mask-line-inner"
                style={{ '--line-delay': '0.22s' } as CSSProperties}
              >
                Getting better.
              </span>
            </span>
          </h2>
          <div
            className="stagger-item mt-[45px] max-w-[250px] [border-top:1px_solid_var(--line)] pt-[24px] [&_.eyebrow]:text-[9px] [&_.eyebrow]:text-muted mobile:mt-[25px] mobile:max-w-none mobile:pt-[18px]"
            style={{ '--stagger-delay': '0.28s' } as CSSProperties}
          >
            <span className={eyebrowClass}>Education / {education.year}</span>
            <h3 className="text-[14px] font-medium mt-[13px] leading-[1.6] mobile:text-[13px] mobile:mt-[10px]">
              {education.title}
            </h3>
            <p className="text-[12px] text-muted mt-[3px]">{education.institution}</p>
          </div>
        </div>
        <div>
          {experience.map((item, index) => (
            <article
              key={item.company}
              className="relative pt-0 pb-[34px] pr-0 pl-[27px] [border-left:1px_solid_var(--line)] ml-[4px] [&:last-child]:pb-0 [&:before]:[content:''] [&:before]:absolute [&:before]:top-[5px] [&:before]:left-[-4px] [&:before]:w-[7px] [&:before]:h-[7px] [&:before]:bg-paper [&:before]:[border:1px_solid_var(--muted)] [&:before]:rounded-[50%] [&:first-child:before]:bg-accent [&:first-child:before]:border-accent [&_li:before]:[content:'—'] [&_li:before]:absolute [&_li:before]:left-0 [&_li:before]:text-accent mobile:pl-[22px] mobile:pb-[30px] print:break-inside-avoid!"
              data-reveal
              style={{ '--reveal-delay': `${(index * 0.1).toFixed(2)}s` } as CSSProperties}
            >
              <div className="text-[9px] font-medium tracking-[0.4px] uppercase flex items-center gap-[14px] flex-wrap text-muted mb-[17px] mobile:text-[8px]">
                <span>{item.date}</span>
                {index === 0 && (
                  <span className="py-[4px] px-[8px] [border:1px_solid_var(--line)] text-accent text-[8px] uppercase">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-[23px] tracking-[-0.6px] font-medium mobile:text-[22px]">
                {item.role}
              </h3>
              <h4 className="text-[12px] font-medium mt-[8px]">{item.company}</h4>
              <p className="text-[13px] text-muted mt-[15px] mobile:text-[12px]">
                {item.description}
              </p>
              <ul className="list-none mt-[12px]">
                {item.contributions.map((text) => (
                  <li
                    className="text-[12px] leading-[1.85] text-muted pl-[15px] relative mt-[8px] mobile:text-[11px]"
                    key={text}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
