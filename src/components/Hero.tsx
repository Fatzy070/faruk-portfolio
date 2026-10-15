import { containerClass, eyebrowClass, textLinkClass } from './styles';
import { ArrowDown, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { profile } from '../content/portfolio';
import { ExternalLink } from './Primitives';
export function Hero() {
  return (
    <section
      className={`${containerClass} pt-[58px] [&_h1]:font-display [&_h1]:text-[clamp(55px,_7.5vw,_108px)] [&_h1]:font-medium [&_h1]:leading-[1.09] [&_h1]:tracking-[-6.3px] [&_em]:font-editorial [&_em]:font-normal [&_em]:text-accent wide:pt-[75px] wide:[&_h1]:text-[116px] tablet:[&_h1]:text-[8.1vw] tablet:[&_h1]:tracking-[-4.6px] mobile:pt-[36px] mobile:[&_h1]:text-[clamp(39px,_7.85vw,_60px)] mobile:[&_h1]:tracking-[-2.7px] mobile:[&_h1]:leading-[1.14] compact:[&_h1]:text-[9.25vw] compact:[&_h1]:tracking-[-1.8px] print:py-[20px]! print:[&_h1]:text-[50px]! print:[&_h1]:tracking-[-2px]!`}
      aria-labelledby="hero-title"
    >
      <div className="flex justify-between items-center mb-[40px] mobile:mb-[33px]">
        <p className={eyebrowClass}>
          <span className="w-[6px] h-[6px] bg-accent rounded-[50%]" />
          {profile.role}
        </p>
        <p className="text-[11px] font-medium tracking-[0.3px] normal-case text-muted mobile:hidden">
          Independent thinking. End-to-end building.
        </p>
      </div>
      <div className="relative">
        <h1 id="hero-title">
          <span className="block animate-hero-in [&:nth-child(2)]:[animation-delay:0.1s] [&:nth-child(3)]:[animation-delay:0.2s]">
            Real products.
          </span>
          <span className="block animate-hero-in [&:nth-child(2)]:[animation-delay:0.1s] [&:nth-child(3)]:[animation-delay:0.2s]">
            From <em>interface</em>
          </span>
          <span className="block animate-hero-in [&:nth-child(2)]:[animation-delay:0.1s] [&:nth-child(3)]:[animation-delay:0.2s]">
            to infrastructure<span className="text-accent">.</span>
          </span>
        </h1>
        <a
          className="absolute right-[40px] top-[14px] w-[132px] h-[132px] [border:1px_solid_var(--line)] rounded-[50%] flex items-center justify-center gap-[8px] [transform:rotate(-12deg)] [transition:transform_0.4s,border-color_0.3s] [&:hover]:[transform:rotate(0)] [&:hover]:border-accent [&_>_svg]:w-[40px] [&_>_svg]:h-[40px] [&_>_svg]:text-accent wide:right-[15px] wide:top-[12px] tablet:right-[10px] tablet:w-[108px] tablet:h-[108px] tablet:top-0 tablet:[&_>_svg]:w-[30px] mobile:hidden print:hidden!"
          href="#work"
          aria-label="Explore selected work"
        >
          <ArrowDownRight strokeWidth={1.15} />
          <span className="text-[9px] leading-[1.55] tracking-[1.3px] tablet:text-[8px]">
            BUILT TO
            <br />
            BE USED
          </span>
        </a>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-[48px] mt-[47px] pb-[57px] wide:mt-[58px] mobile:grid-cols-[1fr] mobile:gap-[24px] mobile:mt-[30px] mobile:pb-[37px]">
        <div className="flex gap-[20px] items-start pt-[8px] [&_div_>_span]:block [&_div_>_span]:text-[12px] [&_div_>_span]:font-medium [&_div_>_span]:text-muted [&_div_>_span]:mt-[5px] mobile:gap-[12px] mobile:items-center mobile:pt-0 mobile:[&_div_>_span]:text-[11px] mobile:[&_div_>_span]:mt-[2px]">
          <span
            className="text-[34px] text-accent leading-[1.2] mobile:text-[25px]"
            aria-hidden="true"
          >
            ✳
          </span>
          <div>
            <strong className="block text-[13px] font-medium mobile:text-[12px]">
              Ogunsola Faruk
            </strong>
            <span>Software, from end to end.</span>
          </div>
        </div>
        <div className="max-w-[480px] mobile:max-w-[450px]">
          <p className="text-[17px] text-muted leading-[1.65] tablet:text-[15px] mobile:text-[14px]">
            I build web and mobile applications—and the systems behind them. From a first
            interaction to APIs, payments and production.
          </p>
          <div className="flex gap-[30px] items-center mt-[26px] mobile:gap-[27px] mobile:mt-[23px]">
            <a
              className="min-h-[49px] py-[14px] px-[21px] inline-flex items-center justify-center gap-[27px] text-[12px] font-medium rounded-[2px] bg-ink text-paper [&:hover]:bg-accent [&:hover]:text-white mobile:py-[13px] mobile:px-[17px] mobile:gap-[22px] mobile:text-[11px]"
              href="#work"
            >
              Explore my work <ArrowDown size={18} aria-hidden="true" />
            </a>
            <ExternalLink className={textLinkClass} href={profile.cvUrl}>
              View CV
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="text-[9px] font-medium tracking-[0.9px] uppercase flex justify-between items-center [border-top:1px_solid_var(--line)] py-[20px] px-0 text-muted wide:py-[26px] mobile:text-[8px] mobile:tracking-[0.5px] mobile:gap-[12px] mobile:py-[18px] mobile:px-0 compact:text-[7px] print:hidden!">
        <span>WEB / MOBILE / BACKEND</span>
        <a
          className="flex items-center gap-[7px] tracking-[0px] normal-case text-[11px] mobile:hidden"
          href="#work"
        >
          A closer look at the work <ArrowUpRight size={14} />
        </a>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
