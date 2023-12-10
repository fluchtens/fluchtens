import { About } from "@/components/categories/About";
import { Projects } from "@/components/categories/Projects";
import { Skills } from "@/components/categories/Skills";

export default function Home() {
  return (
    <main className="px-4 py-5">
      <div className="max-w-screen-lg m-auto flex-col flex gap-10">
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
