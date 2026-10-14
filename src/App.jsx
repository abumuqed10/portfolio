import { useState } from "react";
import { useLang } from "./i18n/LanguageContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { About, Certifications, Education, Experience, Languages, Projects, Skills } from "./components/Sections.jsx";
import Contact, { Footer } from "./components/Contact.jsx";
import ProjectDialog from "./components/ProjectDialog.jsx";
import { SaduDefs, SampleTag } from "./components/ui.jsx";

export default function App() {
  const { t } = useLang();
  const [openProject, setOpenProject] = useState(null);

  return (
    <>
      <SaduDefs />
      <a href="#main" className="absolute start-4 -top-24 z-[100] bg-primary px-4 py-2.5 text-cream no-underline focus:top-[calc(env(safe-area-inset-top,0px)+8px)]">
        {t.skip}
      </a>
      <Header />
      <main id="main">
        {/* Remove this bar once all "Sample" items are replaced with real details */}
        <div role="note" className="border-b border-line bg-surface text-sm ar:text-[.9375rem]">
          <div className="wrap flex items-center gap-3 py-2.5">
            <SampleTag />
            <span>{t.sampleNote}</span>
          </div>
        </div>
        <Hero onOpenProject={setOpenProject} />
        <About />
        <Projects onOpenProject={setOpenProject} />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <ProjectDialog index={openProject} onClose={() => setOpenProject(null)} />
    </>
  );
}
