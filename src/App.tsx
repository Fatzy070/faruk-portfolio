import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Expertise } from './components/Expertise';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LivingBlueprint } from './components/BlueprintGraphics';
import { useScrollEffects } from './hooks/useScrollEffects';

export default function App() {
  useScrollEffects();
  return (
    <>
      <a
        className="fixed top-[8px] left-[16px] z-[100] [transform:translateY(-160%)] bg-ink text-paper py-[14px] px-[20px] [&:focus]:[transform:translateY(0)]"
        href="#main"
      >
        Skip to content
      </a>
      <Navigation />
      <div className="relative overflow-x-clip">
        <LivingBlueprint />
        <main id="main">
          <Hero />
          <SelectedWork />
          <Expertise />
          {/* <AboutSection /> */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
