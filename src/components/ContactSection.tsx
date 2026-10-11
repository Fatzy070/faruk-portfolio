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
      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="wrap">
          <SectionLabel number="05">What’s next?</SectionLabel>
          <div className="contact-heading">
            <h2 id="contact-title">
              Good software starts
              <br />
              with a conversation<span>.</span>
            </h2>
            <ArrowUpRight strokeWidth={1} aria-hidden="true" />
          </div>
          <div className="contact-bottom">
            <p>
              Have a product to build or a team to grow?
              <br />
              I’m open to opportunities and collaborations.
            </p>
            <div className="email-block">
              <div className="email-actions">
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                  <ArrowUpRight size={24} aria-hidden="true" />
                </a>
                <button className="icon-button" onClick={copyEmail} aria-label="Copy email address">
                  {copyStatus === 'copied' ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
              <p className="copy-status" role="status">
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
