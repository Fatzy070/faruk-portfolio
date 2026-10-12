import {
  bodyCopyClass,
  projectLinksClass,
  containerClass,
  sectionIntroClass,
  sectionTitleClass,
  eyebrowClass,
} from './styles';
import { ArrowDownRight, ArrowRight, Plus, Smartphone } from 'lucide-react';
import { archive, mobileProject, projects, type Project } from '../content/portfolio';
import { ExternalLink, SectionLabel, Tags } from './Primitives';
function ProjectFeature({ project }: { project: Project }) {
  return (
    <article
      className={`mb-[64px] mobile:mb-[45px] print:break-inside-avoid! ${project.theme === 'lilac' ? '[&_.project-visual]:bg-[#e1e0ee] [&_.project-visual]:text-[#30364d] [&_.browser-frame]:max-w-[780px] mobile:[&_.browser-frame]:w-full mobile:[&_.browser-frame]:ml-0' : ''}`}
      data-reveal
      id={project.id}
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-visual relative block overflow-hidden pt-[35px] pb-0 px-[65px] bg-[#dfe6da] [aspect-ratio:2.13] rounded-[3px] text-[#253b32] [&:hover_.browser-frame]:[transform:translateY(-2px)] tablet:pt-[25px] tablet:pb-0 tablet:px-[40px] mobile:pt-[17px] mobile:pb-0 mobile:px-[20px] mobile:[aspect-ratio:1.6] motion-reduce:[&:hover_.browser-frame]:[transform:none]!"
        aria-label={`Visit ${project.name} (opens in a new tab)`}
      >
        <div className="[&_>_span:nth-child(2)]:text-[10px] [&_>_span:nth-child(2)]:font-medium [&_>_span:nth-child(2)]:tracking-[1.1px] [&_>_span:nth-child(2)]:uppercase flex justify-between items-center mb-[30px] [&_>_span:first-child]:text-[30px] [&_>_span:first-child]:font-bold [&_>_span:first-child]:tracking-[-1.4px] tablet:mb-[17px] mobile:mb-[13px] mobile:[&_>_span:first-child]:text-[25px]">
          <span>
            {project.name.toLowerCase()}
            <span className="text-[#36735b]">.</span>
          </span>
          <span className="text-[8px] font-medium tracking-[1px] uppercase flex gap-[7px] items-center mobile:text-[7px] mobile:tracking-[0.7px]">
            <span className="w-[5px] h-[5px] rounded-[50%] bg-current" />
            LIVE PRODUCT
          </span>
        </div>
        <div className="browser-frame relative mx-auto max-w-[900px] rounded-[6px_6px_0_0] overflow-hidden bg-[#fafbf8] [border:1px_solid_#ffffffc4] shadow-[0_14px_50px_#243a2424] [transform:translateY(8px)] [transition:transform_0.65s_cubic-bezier(0.2,_0.7,_0.2,_1)] mobile:w-[115%] mobile:max-w-none! mobile:ml-[-7.5%] mobile:[transform:translateY(8px)] motion-reduce:[transform:none]!">
          <div className="h-[29px] flex items-center justify-between py-0 px-[15px] bg-[#f8f9f6] [border-bottom:1px_solid_#dedfd8] text-[#767d70] text-[8px] tracking-[0.2px] mobile:h-[22px] mobile:px-[9px] mobile:text-[7px]">
            <span className="text-[7px] tracking-[3px] text-[#bec3b9] mobile:text-[5px] mobile:tracking-[2px]">
              ● ● ●
            </span>
            <span>{project.liveUrl?.replace('https://', '')}</span>
            <span>↗</span>
          </div>
          <img
            className="w-full h-auto"
            src={project.image}
            alt={project.imageAlt}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="absolute right-[24px] bottom-[24px] bg-[#f9faf7] grid place-items-center w-[44px] h-[44px] rounded-[50%] shadow-[0_2px_8px_#0000000a] mobile:w-[33px] mobile:h-[33px] mobile:right-[12px] mobile:bottom-[12px] mobile:[&_svg]:w-[18px]">
          <ArrowDownRight aria-hidden="true" />
        </span>
      </a>
      <div className="pt-[24px] mobile:pt-[18px]">
        <div className="text-[9px] font-medium tracking-[0.7px] uppercase flex justify-between gap-[16px] text-muted mb-[19px] [&_>_span:first-child]:text-accent mobile:text-[8px] mobile:tracking-[0.35px] mobile:mb-[14px] mobile:leading-[1.6] mobile:[&_>_span:last-child]:max-w-[115px] mobile:[&_>_span:last-child]:text-right">
          <span>
            {project.number} / {project.category}
          </span>
          <span>{project.role}</span>
        </div>
        <div className="grid grid-cols-[0.87fr_1.13fr] gap-[65px] tablet:gap-[35px] mobile:grid-cols-[1fr] mobile:gap-[16px]">
          <div>
            <h3 className="text-[35px] tracking-[-1.2px] font-medium mobile:text-[30px]">
              {project.name}
            </h3>
            <p className="text-[18px] leading-[1.5] max-w-[310px] mt-[8px] tracking-[-0.4px] mobile:text-[17px] mobile:max-w-none mobile:mt-[4px]">
              {project.headline}
            </p>
          </div>
          <div>
            <p className={bodyCopyClass}>{project.description}</p>
            <Tags items={project.technologies} />
            <div className={projectLinksClass}>
              <ExternalLink href={project.liveUrl}>Open product</ExternalLink>
              <ExternalLink href={project.githubUrl}>Source code</ExternalLink>
            </div>
          </div>
        </div>
        <details className="[border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)] mt-[27px] [&_summary::-webkit-details-marker]:hidden [&_summary_>_svg]:ml-auto [&_summary_>_svg]:[transition:transform_0.3s] [&[open]_summary_>_svg]:[transform:rotate(45deg)] [&[open]_.case-study-body]:[animation:detail-in_0.35s_ease-out] mobile:mt-[16px]">
          <summary className="flex items-center gap-[20px] min-h-[58px] cursor-pointer list-none text-[12px] mobile:min-h-[54px] mobile:text-[11px]">
            <span>Inside the engineering</span>
            <span className="text-[10px] text-muted ml-auto mobile:hidden">
              Architecture & decisions
            </span>
            <Plus size={20} aria-hidden="true" />
          </summary>
          <div className="case-study-body pt-[15px] pb-[30px] px-0">
            <div
              className="grid grid-cols-[repeat(4,_1fr)] gap-[10px] py-[20px] px-0 [border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)] [&_>_div_>_span]:text-accent [&_>_div_>_span]:text-[9px] [&_svg]:ml-auto [&_svg]:text-muted mobile:grid-cols-[1fr_1fr] mobile:gap-[17px] mobile:py-[17px] mobile:[&_svg]:hidden"
              aria-label="Architecture"
            >
              {project.architecture.map((layer, index) => (
                <div
                  className="text-[11px] flex items-center gap-[10px] leading-[1.5] mobile:text-[10px]"
                  key={layer}
                >
                  <span>0{index + 1}</span>
                  {layer}
                  {index < project.architecture.length - 1 && (
                    <ArrowRight size={16} aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-[repeat(3,_1fr)] gap-[28px] mt-[28px] mobile:grid-cols-[1fr] mobile:gap-[22px] mobile:mt-[22px]">
              {project.highlights.map((item) => (
                <section key={item.title}>
                  <h4 className="text-[14px] font-medium leading-[1.5] mb-[10px] mobile:text-[14px]">
                    {item.title}
                  </h4>
                  <p className="text-[12px] leading-[1.8] text-muted mobile:text-[12px]">
                    {item.description}
                  </p>
                </section>
              ))}
            </div>
            {project.note && (
              <p className="text-[11px] p-[16px] bg-surface mt-[20px] text-muted">{project.note}</p>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}
export function SelectedWork() {
  return (
    <section
      id="work"
      className={`${containerClass} pt-[93px] pb-[90px] mobile:pt-[58px] mobile:pb-[60px] print:py-[20px]!`}
      aria-labelledby="work-title"
    >
      <div className={sectionIntroClass} data-reveal>
        <div>
          <SectionLabel number="01">Selected work</SectionLabel>
          <h2 className={sectionTitleClass} id="work-title">
            The product is
            <br />
            the proof<span className="text-accent">.</span>
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
      <article
        className="grid grid-cols-[1fr_1fr] gap-[60px] pt-[24px] pb-[54px] px-0 tablet:gap-[35px] mobile:grid-cols-[1fr] mobile:gap-[27px] mobile:pt-0 mobile:pb-[36px] mobile:px-0"
        data-reveal
      >
        <div className="">
          <p className={eyebrowClass}>
            <Smartphone size={16} />
            03 / {mobileProject.label}
          </p>
          <h3 className="text-[37px] font-medium tracking-[-1.3px] leading-[1.2] mt-[24px] mb-[22px] mx-0 tablet:text-[32px] mobile:text-[34px] mobile:mt-[18px]">
            One product.
            <br />
            <em className="font-editorial font-normal text-accent">More than one screen.</em>
          </h3>
          <p className={bodyCopyClass}>{mobileProject.description}</p>
          <div className="grid grid-cols-[1fr_1fr] gap-[20px] mt-[24px]">
            {mobileProject.capabilities.map((item) => (
              <div key={item.title}>
                <h4 className="text-[12px] font-medium mb-[7px]">{item.title}</h4>
                <p className="text-[11px] text-muted mobile:text-[11px]">{item.description}</p>
              </div>
            ))}
          </div>
          <Tags items={mobileProject.technologies} />
          <div className={projectLinksClass}>
            {mobileProject.links.map((link) => (
              <ExternalLink key={link.label} href={link.url}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden bg-[#e9e5dd] py-[36px] pr-0 pl-[32px] flex flex-col justify-between min-h-[430px] rounded-[3px] text-[#34372f] tablet:pl-[25px] mobile:min-h-[350px] mobile:py-[25px] mobile:pr-0 mobile:pl-[25px]">
          <div className="text-[35px] tracking-[-1.5px] font-semibold mobile:text-[30px]">
            nexus
            <span className="block text-[10px] font-normal tracking-[0px] mt-[5px]">
              Connected, across platforms.
            </span>
          </div>
          <img
            className="w-[115%] max-w-none my-[30px] mx-0 [transform:rotate(-3deg)] rounded-[5px] shadow-[0_12px_30px_#332b1d20] mobile:my-[22px] mobile:max-h-[220px] mobile:object-cover mobile:object-top"
            src="/images/nexus.webp"
            alt="Nexus social web application with feed, conversations and community navigation"
            width="1200"
            height="617"
            loading="lazy"
            decoding="async"
          />
          <div className="flex items-center gap-[13px] mr-[30px] p-[16px] bg-[#f8f7f2] [border:1px_solid_#d8d8cb] rounded-[3px] [&_>_svg:last-child]:ml-auto mobile:max-w-[350px]">
            <Smartphone size={22} />
            <div>
              <strong className="block text-[11px] font-medium">React Native + Expo</strong>
              <span className="block text-[9px] font-medium text-[#666c5e] mt-[4px]">
                Mobile app · source available
              </span>
            </div>
            <ArrowDownRight size={28} />
          </div>
        </div>
      </article>
      <details
        className="[&_summary::-webkit-details-marker]:hidden [&[open]_summary_svg]:[transform:rotate(45deg)] [border-block:1px_solid_var(--line)]"
        data-reveal
      >
        <summary className="flex items-center justify-between gap-[20px] py-[23px] px-0 cursor-pointer list-none text-[17px] tracking-[-0.4px] mobile:text-[15px] mobile:py-[20px]">
          <span>
            Earlier explorations
            <span className="text-[10px] align-super text-accent ml-[10px]">
              {archive.length.toString().padStart(2, '0')}
            </span>
          </span>
          <span className="text-[11px] text-muted flex items-center gap-[30px] tracking-[0px] [&_svg]:[transition:transform_0.3s] mobile:text-[0px] mobile:gap-0">
            A few foundations along the way <Plus size={19} />
          </span>
        </summary>
        <div>
          {archive.map((project) => (
            <ExternalLink
              className="grid grid-cols-[1fr_1.2fr_1fr_auto] gap-[15px] items-center min-h-[70px] [border-top:1px_solid_var(--line)] text-[12px] [&:hover]:text-accent mobile:grid-cols-[1fr_auto] mobile:py-[18px] mobile:gap-y-[6px] mobile:[&_>_svg]:col-[2] mobile:[&_>_svg]:row-[1/3]"
              key={project.name}
              href={project.url}
            >
              <strong className="font-medium">{project.name}</strong>
              <span className="text-muted text-[11px] mobile:col-[1] mobile:row-[2] mobile:text-[10px]">
                {project.category}
              </span>
              <small className="text-muted text-[11px] mobile:hidden">{project.technologies}</small>
            </ExternalLink>
          ))}
        </div>
      </details>
    </section>
  );
}
