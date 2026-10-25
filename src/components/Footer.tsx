import { containerClass } from './styles';
import { ArrowUp } from 'lucide-react';
import { socials } from '../content/portfolio';
import { ExternalLink } from './Primitives';

export function Footer() {
  return (
    <footer
      data-reveal
      className={`${containerClass} relative z-[2] footer-reveal grid grid-cols-[1fr_auto_auto] gap-[35px] items-center pt-[45px] [&_nav]:flex [&_nav]:gap-[24px] [&_nav_a]:relative [&_nav_a]:flex [&_nav_a]:items-center [&_nav_a]:gap-[7px] [&_nav_a]:text-[11px] [&_nav_a]:min-h-[44px] [&_nav_a:hover]:text-accent mobile:grid-cols-[1fr_auto] mobile:gap-[23px] mobile:pt-[30px] mobile:[&_nav]:col-[1] mobile:[&_nav]:row-[2] mobile:[&_nav]:gap-[20px] mobile:[&_nav_a]:text-[10px] compact:[&_nav]:gap-[15px]`}
    >
      <a className="text-[16px] font-medium [&:hover]:text-accent mobile:text-[14px]" href="#top">
        Ogunsola Faruk
        <span className="block text-[10px] text-muted font-normal mt-[5px]">
          Software Developer — Web & Mobile
        </span>
      </a>
      <nav aria-label="Social links" className="footer-social-nav">
        {socials.map((item) => (
          <ExternalLink href={item.url} key={item.name}>
            {item.name}
          </ExternalLink>
        ))}
      </nav>
      <a
        className="footer-top-btn w-[40px] h-[40px] [border:1px_solid_var(--line)] grid place-items-center rounded-[50%] [&:hover]:border-accent [&:hover]:text-accent mobile:col-[2] mobile:row-[1] print:hidden!"
        href="#top"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </a>
      <div className="col-[1/-1] flex justify-between text-[9px] text-muted [border-top:1px_solid_var(--line)] py-[20px_23px] mobile:text-[8px] mobile:py-[18px] mobile:gap-[15px]">
        <span>© {new Date().getFullYear()} Ogunsola Faruk</span>
        <span>Built with intent. Always evolving.</span>
      </div>
    </footer>
  );
}
