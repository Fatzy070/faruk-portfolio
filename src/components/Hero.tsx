import { ArrowDown, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { profile } from '../content/portfolio';
import { ExternalLink } from './Primitives';
export function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-top">
        <p className="eyebrow">
          <span className="status-dot" />
          {profile.role}
        </p>
        <p className="hero-index">Independent thinking. End-to-end building.</p>
      </div>
      <div className="hero-composition">
        <h1 id="hero-title">
          <span className="hero-line">Real products.</span>
          <span className="hero-line">
            From <em>interface</em>
          </span>
          <span className="hero-line">
            to infrastructure<span className="period">.</span>
          </span>
        </h1>
        <a className="hero-stamp" href="#work" aria-label="Explore selected work">
          <ArrowDownRight strokeWidth={1.15} />
          <span>
            BUILT TO
            <br />
            BE USED
          </span>
        </a>
      </div>
      <div className="hero-bottom">
        <div className="hero-person">
          <span className="small-cross" aria-hidden="true">
            ✳
          </span>
          <div>
            <strong>Ogunsola Faruk</strong>
            <span>Software, from end to end.</span>
          </div>
        </div>
        <div className="hero-intro">
          <p>
            I build web and mobile applications—and the systems behind them. From a first
            interaction to APIs, payments and production.
          </p>
          <div className="hero-ctas">
            <a className="button primary" href="#work">
              Explore my work <ArrowDown size={18} aria-hidden="true" />
            </a>
            <ExternalLink className="text-link" href={profile.cvUrl}>
              View CV
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="hero-footnote">
        <span>WEB / MOBILE / BACKEND</span>
        <a href="#work">
          A closer look at the work <ArrowUpRight size={14} />
        </a>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
