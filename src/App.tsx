import { Layout } from "./components/layout";
import { Hero } from "./components/hero";
import { ProjectGrid, ProjectTimeline } from "./components/projects";
import { SkillsSection } from "./components/skills";
import { ProcessSection } from "./components/process";
import { CurrentlyBuilding } from "./components/building";
import { AboutSection } from "./components/about";
import { ContactSection } from "./components/contact";


function SignalStrip() {
  const items = [
    ["08+", "projects explored"],
    ["AI", "local-first experiments"],
    ["WEB", "full-stack builds"],
    ["IOT", "hardware experiments"],
    ["SYS", "servers + self-hosting"],
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-4" aria-label="Portfolio snapshot">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-white/10">
          {items.map(([value, label]) => (
            <div key={label} className="group relative px-4 py-4 sm:px-5">
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
              <div className="font-mono text-sm text-accent">{value}</div>
              <div className="mt-1 font-ui text-xs uppercase tracking-[0.12em] text-fg-subtle">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <Layout>
      <Hero />
      <SignalStrip />
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