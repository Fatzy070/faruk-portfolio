import type { CSSProperties } from 'react';
import { containerClass, sectionIntroClass, sectionTitleClass } from './styles';
import { ArrowDownRight } from 'lucide-react';
import { capabilities } from '../content/portfolio';
import { SectionLabel, Tags } from './Primitives';

export function Expertise() {
  return (
    <section
      id="expertise"
      className="expertise-section bg-[#272e26] text-[#f2f2e7] pt-[85px] pb-[90px] px-0 [--muted:#b8bdaf] [--line:#4a5145] [--accent:#e89a7b] mobile:py-[55px] mobile:px-0 print:bg-[#eee]! print:text-[#111]! print:py-[25px]! print:px-0!"
      aria-labelledby="expertise-title"
    >
      <div className={`${containerClass} relative z-[2]`}>
        <div className={sectionIntroClass} data-reveal>
          <div>
            <SectionLabel number="02">Engineering range</SectionLabel>
            <h2 className={sectionTitleClass} id="expertise-title">
              <span className="mask-line">
                <span
                  className="mask-line-inner"
                  style={{ '--line-delay': '0.04s' } as CSSProperties}
                >
                  Across the stack.
                </span>
              </span>
              <span className="mask-line">
                <span
                  className="mask-line-inner"
                  style={{ '--line-delay': '0.16s' } as CSSProperties}
                >
                  Close to the product.
                </span>
              </span>
            </h2>
          </div>
          <ArrowDownRight
            className="expertise-arrow w-[90px] h-[90px] text-[#bec6ac] mobile:hidden"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>
        <div className="grid grid-cols-[repeat(3,_1fr)] gap-[42px] mt-[56px] [&_article_>_p]:text-muted [&_article_>_p]:text-[13px] [&_article_>_p]:min-h-[90px] [&_article_>_p]:leading-[1.85] [&_.tags]:mt-[23px] [&_.tags]:gap-[7px] [&_.tags_li]:border-[#4c5545] [&_.tags_li]:text-[#c6cbbb] [&_.tags_li]:text-[10px] tablet:gap-[26px] tablet:[&_article_>_p]:min-h-[110px] mobile:grid-cols-[1fr] mobile:gap-[30px] mobile:mt-[30px] mobile:[&_article_>_p]:col-[2] mobile:[&_article_>_p]:min-h-0 mobile:[&_article_>_p]:text-[12px] mobile:[&_.tags]:col-[2] mobile:[&_.tags]:mt-[17px]">
          {capabilities.map((item, index) => (
            <article
              className="capability-card relative [border-top:1px_solid_var(--line)] pt-[22px] [transition:border-color_0.35s_ease] [&:hover]:border-[#e89a7b] mobile:pt-[18px] mobile:grid mobile:grid-cols-[40px_1fr] mobile:gap-x-[7px]"
              key={item.number}
              data-reveal
              style={{ '--reveal-delay': `${(index * 0.12).toFixed(2)}s` } as CSSProperties}
            >
              <span className="text-[10px] font-medium tracking-[1.1px] uppercase text-[#a5ae9b] mobile:pt-[5px]">
                /{item.number}
              </span>
              <h3 className="text-[23px] font-normal tracking-[-0.7px] mt-[32px] mb-[15px] mx-0 mobile:text-[24px] mobile:mt-0 mobile:mb-[13px] mobile:mx-0">
                {item.title}
              </h3>
              <p>{item.description}</p>
              <Tags items={item.tools} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
