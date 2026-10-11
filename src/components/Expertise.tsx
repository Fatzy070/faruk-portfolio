import { ArrowDownRight } from 'lucide-react';
import { capabilities } from '../content/portfolio';
import { SectionLabel, Tags } from './Primitives';
export function Expertise() {
  return (
    <section id="expertise" className="expertise-section" aria-labelledby="expertise-title">
      <div className="wrap">
        <div className="section-intro" data-reveal>
          <div>
            <SectionLabel number="02">Engineering range</SectionLabel>
            <h2 id="expertise-title">
              Across the stack.
              <br />
              Close to the product.
            </h2>
          </div>
          <ArrowDownRight className="section-arrow" strokeWidth={1} aria-hidden="true" />
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.number} data-reveal>
              <span className="capability-number">/{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Tags items={item.tools} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
