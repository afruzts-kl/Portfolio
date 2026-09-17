import { Layout } from "./components/layout";
import { Hero } from "./components/hero";
import { ProjectGrid, ProjectTimeline } from "./components/projects";
import { SkillsSection } from "./components/skills";
import { ProcessSection } from "./components/process";
import { CurrentlyBuilding } from "./components/building";
import { AboutSection } from "./components/about";
import { ContactSection } from "./components/contact";

function App() {
  return (
    <Layout>
      <Hero />
      <ProjectGrid featuredOnly={true} />
      <ProjectTimeline />
      <SkillsSection />
      <ProcessSection />
      <CurrentlyBuilding />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

export default App;