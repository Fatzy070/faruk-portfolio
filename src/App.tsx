import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Expertise } from './components/Expertise';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useScrollEffects } from './hooks/useScrollEffects';
export default function App() {
  useScrollEffects();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Expertise />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
