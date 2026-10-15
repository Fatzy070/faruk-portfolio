import { containerClass, sectionTitleClass } from './styles';
import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { profile } from '../content/portfolio';
import { SectionLabel } from './Primitives';
export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  }
  return (
    <>
      <section
        id="contact"
        className="bg-[#e6e9dd] pt-[68px] pb-[65px] px-0 text-[#2a3125] [--line:#c5cbb9] [--accent:#a53e2d] mobile:pt-[47px] mobile:pb-[39px] mobile:px-0 print:bg-[#eee]! print:text-[#111]! print:py-[25px]! print:px-0!"
        aria-labelledby="contact-title"
      >
        <div className={containerClass}>
          <SectionLabel number="05">What’s next?</SectionLabel>
          <div className="flex justify-between items-center gap-[50px] [&_h2]:text-[clamp(38px,_5.25vw,_75px)] [&_h2]:tracking-[-3.7px] [&_h2_>_span]:text-accent [&_>_svg]:w-[115px] [&_>_svg]:h-[115px] [&_>_svg]:text-[#a3402c] tablet:[&_h2]:tracking-[-2.7px] mobile:[&_h2]:text-[38px] mobile:[&_h2]:tracking-[-2px] mobile:[&_>_svg]:hidden compact:[&_h2]:text-[34px]">
            <h2 className={sectionTitleClass} id="contact-title">
              Good software starts
              <br />
              with a conversation<span>.</span>
            </h2>
            <ArrowUpRight strokeWidth={1} aria-hidden="true" />
          </div>
          <div className="grid grid-cols-[1fr_1.1fr] gap-[35px] [border-top:1px_solid_var(--line)] pt-[32px] mt-[40px] items-center tablet:grid-cols-[1fr_1.2fr] mobile:grid-cols-[1fr] mobile:gap-[25px] mobile:mt-[28px] mobile:pt-[23px]">
            <p className="text-[13px] text-[#5a6352] mobile:text-[12px]">
              Have a product to build or a team to grow?
              <br />
              I’m open to opportunities and collaborations.
            </p>
            <div>
              <div className="flex items-center gap-[20px] [&_>_a:hover]:text-accent [&_.icon-button]:border-[#bcc5ad] [&_.icon-button]:[flex-shrink:0] [&_.icon-button:hover]:bg-[#d8dfcc] tablet:gap-[12px] mobile:justify-between mobile:gap-[8px] mobile:[&_>_a_svg]:w-[18px]">
                <a
                  className="text-[clamp(14px,_1.65vw,_24px)] tracking-[-0.5px] flex items-center gap-[15px] py-[9px] mobile:text-[18px] mobile:gap-[10px] compact:text-[16px]"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                  <ArrowUpRight size={24} aria-hidden="true" />
                </a>
                <button
                  className="icon-button w-[44px] h-[44px] grid place-items-center [border:1px_solid_var(--line)] rounded-[50%] [&:hover]:bg-surface print:hidden!"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copyStatus === 'copied' ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
              <p
                className="text-[10px] mt-[7px] text-[#5a6352] min-h-[17px] mobile:text-[9px] print:hidden!"
                role="status"
              >
                {copyStatus === 'copied'
                  ? 'Email address copied.'
                  : copyStatus === 'error'
                    ? 'Could not copy. Select the email address or open the email link.'
                    : 'Email me directly. No forms, no friction.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
