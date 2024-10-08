"use server";

import { About } from "@/components/sections/about/about";
import { Education } from "@/components/sections/education/education";
import { Projects } from "@/components/sections/projects/projects";
import { Skills } from "@/components/sections/skills/skills";

export default async function Home() {
  return (
    <main className="px-4 sm:px-6 py-16 flex-1">
      <div className="max-w-screen-lg m-auto flex-col flex gap-5 md:gap-10">
        <About />
        <Projects />
        <Education />
        <Skills />
      </div>
    </main>
  );
}
