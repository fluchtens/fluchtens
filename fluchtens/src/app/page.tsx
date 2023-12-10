import { About } from "@/components/categories/About";
import { Projects } from "@/components/categories/Projects";
import { Skills } from "@/components/categories/Skills";

export default function Home() {
  return (
    <main className="px-4 py-5">
      <div className="max-w-screen-lg m-auto flex-col flex gap-5 md:gap-10">
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </main>
  );
}
