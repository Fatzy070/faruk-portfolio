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
    <header className="header">
      <div className="header-inner wrap">
        <a className="wordmark" href="#top" aria-label="Ogunsola Faruk, back to top">
          of<span aria-hidden="true">✳</span>
          <span className="wordmark-name">
            Ogunsola
            <br />
            Faruk
          </span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="header-contact">
            Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button
            ref={trigger}
            className="icon-button menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label="Mobile navigation" className="mobile-nav" hidden={!open}>
        {[...navigation, { id: 'contact', label: 'Let’s talk' }].map((item, index) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>
            {item.label}
            <ArrowUpRight size={20} />
          </a>
        ))}
      </nav>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
