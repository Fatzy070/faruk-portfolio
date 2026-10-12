import { containerClass } from './styles';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { navigation } from '../content/portfolio';
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark',
  );
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      /* Theme still works without storage. */
    }
  }, [dark]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className="sticky top-0 z-[30] bg-paper [border-bottom:1px_solid_var(--line)] print:hidden!">
      <div
        className={`${containerClass} h-[88px] flex justify-between items-center gap-[28px] mobile:h-[72px] mobile:gap-[10px]`}
      >
        <a
          className="flex relative items-center font-display text-[40px] tracking-[-3px] font-extrabold leading-[1] [&_>_span:first-child]:[font-family:Arial,_sans-serif] [&_>_span:first-child]:text-[12px] [&_>_span:first-child]:[align-self:flex-start] [&_>_span:first-child]:tracking-[0px] [&_>_span:first-child]:mt-[3px] [&_>_span:first-child]:mb-0 [&_>_span:first-child]:mx-[4px] mobile:text-[33px]"
          href="#top"
          aria-label="Ogunsola Faruk, back to top"
        >
          of<span aria-hidden="true">✳</span>
          <span className="ml-[17px] pl-[17px] [border-left:1px_solid_var(--line)] font-sans text-[12px] font-medium tracking-[0px] leading-[1.35] tablet:hidden mobile:block mobile:text-[10px] mobile:ml-[8px] mobile:pl-[10px] compact:hidden">
            Ogunsola
            <br />
            Faruk
          </span>
        </a>
        <nav
          aria-label="Main navigation"
          className="flex gap-[29px] ml-auto mr-[38px] [&_a:after]:[content:''] [&_a:after]:absolute [&_a:after]:bottom-[4px] [&_a:after]:left-0 [&_a:after]:w-full [&_a:after]:h-[1px] [&_a:after]:bg-accent [&_a:after]:[transform:scaleX(0)] [&_a:after]:origin-left [&_a:after]:[transition:transform_0.25s] [&_a:hover:after]:[transform:scaleX(1)] tablet:gap-[20px] tablet:mr-[8px] mobile:hidden"
        >
          {navigation.map((item) => (
            <a className="relative text-[13px] py-[12px] px-0" key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-[18px] items-center mobile:gap-[5px]">
          <button
            className="icon-button w-[44px] h-[44px] grid place-items-center [border:0] rounded-[50%] [&:hover]:bg-surface mobile:w-[36px] print:hidden!"
            onClick={() => setDark(!dark)}
            aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="flex gap-[19px] items-center text-[13px] [border:1px_solid_var(--line)] py-[12px] px-[18px] rounded-[2px] [&:hover]:border-ink mobile:py-[10px] mobile:px-[12px] mobile:text-[11px] mobile:gap-[9px] compact:px-[10px]"
          >
            Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button
            ref={trigger}
            className="icon-button w-[44px] h-[44px] hidden place-items-center [border:1px_solid_var(--line)] rounded-[50%] [&:hover]:bg-surface mobile:grid mobile:[border:0] print:hidden!"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className="hidden mobile:[&:not([hidden])]:block mobile:[&:not([hidden])]:absolute mobile:[&:not([hidden])]:left-0 mobile:[&:not([hidden])]:right-0 mobile:[&:not([hidden])]:top-[72px] mobile:[&:not([hidden])]:bg-paper mobile:[&:not([hidden])]:pt-[15px] mobile:[&:not([hidden])]:pb-[25px] mobile:[&:not([hidden])]:px-[20px] mobile:[&:not([hidden])]:[border-bottom:1px_solid_var(--line)] mobile:[&:not([hidden])]:shadow-[0_15px_20px_#0000000c] mobile:[&_a_>_span]:text-[10px] mobile:[&_a_>_span]:text-accent mobile:[&_a_>_svg]:ml-auto"
        hidden={!open}
      >
        {[...navigation, { id: 'contact', label: 'Let’s talk' }].map((item, index) => (
          <a
            className="mobile:flex mobile:gap-[20px] mobile:items-center mobile:text-[24px] mobile:py-[15px] mobile:px-[5px] mobile:[border-bottom:1px_solid_var(--line)]"
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
          >
            <span>0{index + 1}</span>
            {item.label}
            <ArrowUpRight size={20} />
          </a>
        ))}
      </nav>
      <div
        className="absolute left-0 bottom-[-1px] h-[2px] w-full [transform:scaleX(var(--progress))] origin-left bg-accent"
        aria-hidden="true"
      />
    </header>
  );
}
