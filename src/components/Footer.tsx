import { ArrowUp } from 'lucide-react';
import { socials } from '../content/portfolio';
import { ExternalLink } from './Primitives';
export function Footer() {
  return (
    <footer className="footer wrap">
      <a className="footer-name" href="#top">
        Ogunsola Faruk<span>Software Developer — Web & Mobile</span>
      </a>
      <nav aria-label="Social links">
        {socials.map((item) => (
          <ExternalLink href={item.url} key={item.name}>
            {item.name}
          </ExternalLink>
        ))}
      </nav>
      <a className="back-top" href="#top" aria-label="Back to top">
        <ArrowUp size={18} />
      </a>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ogunsola Faruk</span>
        <span>Built with intent. Always evolving.</span>
      </div>
    </footer>
  );
}
