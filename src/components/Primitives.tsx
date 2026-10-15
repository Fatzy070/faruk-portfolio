import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
export function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden [clip:rect(0,_0,_0,_0)] whitespace-nowrap [border:0]">
        {' '}
        (opens in a new tab)
      </span>
    </a>
  );
}
export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <p className="text-[10px] font-medium tracking-[1.1px] uppercase flex gap-[16px] items-center mb-[26px] mobile:text-[9px] mobile:mb-[20px] mobile:gap-[12px]">
      <span className="text-accent text-[10px] pr-[15px] [border-right:1px_solid_var(--line)] mobile:pr-[12px] mobile:text-[9px]">
        {number}
      </span>
      {children}
    </p>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <ul
      className="tags list-none flex flex-wrap gap-[7px] mt-[19px] mobile:gap-[6px] mobile:mt-[15px]"
      aria-label="Technologies"
    >
      {items.map((item) => (
        <li
          className="text-[10px] leading-[1.4] py-[6px] px-[10px] [border:1px_solid_var(--line)] rounded-[3px] whitespace-nowrap text-muted mobile:text-[9px] mobile:py-[5px] mobile:px-[8px]"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
