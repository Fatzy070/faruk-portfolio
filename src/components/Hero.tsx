import type { CSSProperties } from 'react';
import { containerClass, eyebrowClass, textLinkClass } from './styles';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '../content/portfolio';
import { ExternalLink } from './Primitives';
import { SystemsSculpture } from './SystemsSculpture';

function renderTypedChars(text: string, startDelay: number, step = 0.022) {
  return Array.from(text).map((char, index) => {
    const delay = (startDelay + index * step).toFixed(3);
    return (
      <span
        key={`${index}-${char}`}
        className="hero-char"
        style={{ '--char-delay': `${delay}s` } as CSSProperties}
      >
        {char}
      </span>
    );
  });
}

export function Hero() {
  // Coordinated typewriter cadence:
  // 1. "Real products." (14 chars, 0.04s -> 0.35s)
  // 2. "From " (5 chars, 0.44s -> 0.55s) + "interface" (9 chars, 0.56s -> 0.76s)
  // 3. "to infrastructure" (17 chars, 0.80s -> 1.14s) + "." (1.16s)
  return (
    <section
      className={`${containerClass} relative z-[2] pt-[48px] [&_h1]:font-display [&_h1]:text-[clamp(50px,_5.85vw,_92px)] [&_h1]:font-medium [&_h1]:leading-[1.07] [&_h1]:tracking-[-5.2px] [&_em]:font-editorial [&_em]:font-normal [&_em]:text-accent wide:pt-[64px] wide:[&_h1]:text-[100px] tablet:[&_h1]:text-[clamp(44px,_5.6vw,_68px)] tablet:[&_h1]:tracking-[-3.8px] stack:[&_h1]:text-[clamp(46px,_8.2vw,_76px)] mobile:pt-[32px] mobile:[&_h1]:text-[clamp(39px,_7.85vw,_60px)] mobile:[&_h1]:tracking-[-2.7px] mobile:[&_h1]:leading-[1.14] compact:[&_h1]:text-[9.25vw] compact:[&_h1]:tracking-[-1.8px] print:py-[20px]! print:[&_h1]:text-[50px]! print:[&_h1]:tracking-[-2px]!`}
      aria-labelledby="hero-title"
    >
      <div className="hero-eyebrow-row flex justify-between items-center mb-[34px] mobile:mb-[26px]">
        <p className={eyebrowClass}>
          <span className="w-[6px] h-[6px] bg-accent rounded-[50%]" />
          {profile.role}
        </p>
        <p className="text-[11px] font-medium tracking-[0.3px] normal-case text-muted mobile:hidden">
          Independent thinking. End-to-end building.
        </p>
      </div>

      <div className="relative z-[1] grid grid-cols-[1.06fr_0.94fr] gap-[44px] items-start pb-[48px] wide:gap-[58px] tablet:gap-[32px] stack:grid-cols-[1fr] stack:gap-[36px] mobile:gap-[28px] mobile:pb-[34px]">
        <div className="flex flex-col justify-between">
          <div className="relative">
            <h1 id="hero-title" aria-label="Real products. From interface to infrastructure.">
              <span className="block relative">
                {renderTypedChars('Real products.', 0.04, 0.022)}
                <span
                  className="hero-caret hero-caret-line1"
                  aria-hidden="true"
                />
              </span>
              <span className="block relative">
                {renderTypedChars('From ', 0.44, 0.022)}
                <em className="hero-italic-word relative inline">
                  {renderTypedChars('interface', 0.55, 0.023)}
                </em>
                <span
                  className="hero-caret hero-caret-line2"
                  aria-hidden="true"
                />
              </span>
              <span className="block relative">
                {renderTypedChars('to infrastructure', 0.8, 0.02)}
                <span
                  className="hero-char text-accent"
                  style={{ '--char-delay': '1.145s' } as CSSProperties}
                >
                  .
                </span>
                <span
                  className="hero-caret hero-caret-final"
                  aria-hidden="true"
                />
              </span>
            </h1>
          </div>

          <div className="hero-support-grid grid grid-cols-[auto_1fr] gap-[34px] mt-[42px] pt-[28px] [border-top:1px_solid_var(--line)] wide:mt-[52px] tablet:gap-[24px] mobile:grid-cols-[1fr] mobile:gap-[20px] mobile:mt-[26px] mobile:pt-[22px]">
            {/* <div
              className="hero-follow-item flex gap-[16px] items-start pt-[4px] [&_div_>_span]:block [&_div_>_span]:text-[12px] [&_div_>_span]:font-medium [&_div_>_span]:text-muted [&_div_>_span]:mt-[5px] mobile:gap-[12px] mobile:items-center mobile:pt-0 mobile:[&_div_>_span]:text-[11px] mobile:[&_div_>_span]:mt-[2px]"
              style={{ '--follow-delay': '0.88s' } as CSSProperties}
            >
              <span
                className="hero-asterisk text-[32px] text-accent leading-[1.1] mobile:text-[25px]"
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
            </div> */}

            <div className="max-w-[460px] mobile:max-w-[450px]">
              <p
                className="hero-follow-item text-[16px] text-muted leading-[1.68] tablet:text-[15px] mobile:text-[14px]"
                style={{ '--follow-delay': '0.98s' } as CSSProperties}
              >
                I build web and mobile applications and the systems behind them. From a first
                interaction to APIs, payments and production.
              </p>
              <div
                className="hero-follow-item flex gap-[28px] items-center mt-[24px] mobile:gap-[24px] mobile:mt-[20px]"
                style={{ '--follow-delay': '1.08s' } as CSSProperties}
              >
                <a
                  className="hero-cta-primary min-h-[49px] py-[14px] px-[21px] inline-flex items-center justify-center gap-[24px] text-[12px] font-medium rounded-[2px] bg-ink text-paper [&:hover]:bg-accent [&:hover]:text-white mobile:py-[13px] mobile:px-[17px] mobile:gap-[20px] mobile:text-[11px]"
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
        </div>

        <div className="animate-sculpture-in">
          <SystemsSculpture />
        </div>
      </div>

      <div
        className="hero-follow-item relative z-[1] text-[9px] font-medium tracking-[0.9px] uppercase flex justify-between items-center [border-top:1px_solid_var(--line)] py-[20px] px-0 text-muted wide:py-[24px] mobile:text-[8px] mobile:tracking-[0.5px] mobile:gap-[12px] mobile:py-[16px] mobile:px-0 compact:text-[7px] print:hidden!"
        style={{ '--follow-delay': '1.16s' } as CSSProperties}
      >
        <span>WEB / MOBILE / BACKEND</span>
        <a
          className="flex items-center gap-[7px] tracking-[0px] normal-case text-[11px] [&:hover]:text-accent mobile:hidden"
          href="#work"
        >
          A closer look at the work <ArrowUpRight size={14} />
        </a>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>

      {/* Scroll-linked unfolding architectural bridge connecting Hero to Selected Work */}
      <div
        className="hero-scroll-bridge relative overflow-hidden pt-[18px] pb-[6px] print:hidden!"
        aria-hidden="true"
      >
        <div className="hero-bridge-planes grid grid-cols-3 gap-[18px] mobile:gap-[8px]">
          <div className="hero-bridge-plane hero-bridge-plane-1 [border-top:1px_dashed_var(--line)] pt-[8px] flex items-center justify-between text-[8px] tracking-[1px] uppercase text-muted">
            <span>01 · Interface Layer</span>
            <span className="w-[5px] h-[5px] rounded-[50%] bg-accent opacity-80" />
          </div>
          <div className="hero-bridge-plane hero-bridge-plane-2 [border-top:1px_dashed_var(--line)] pt-[8px] flex items-center justify-between text-[8px] tracking-[1px] uppercase text-muted">
            <span>02 · API & Runtime</span>
            <span className="w-[5px] h-[5px] rounded-[50%] bg-current opacity-50" />
          </div>
          <div className="hero-bridge-plane hero-bridge-plane-3 [border-top:1px_dashed_var(--line)] pt-[8px] flex items-center justify-between text-[8px] tracking-[1px] uppercase text-muted">
            <span>03 · Data & Cloud</span>
            <span className="w-[5px] h-[5px] rounded-[50%] bg-accent opacity-80" />
          </div>
        </div>
        <div className="relative mx-auto mt-[10px] h-[44px] w-[1px] bg-[var(--line)] overflow-hidden mobile:h-[30px]">
          <span className="hero-conduit-pulse block w-full h-[22px] bg-[linear-gradient(to_bottom,_transparent,_var(--accent),_transparent)]" />
        </div>
      </div>
    </section>
  );
}
