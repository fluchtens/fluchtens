import { CategoryTitle } from "@/components/ui/CategoryTitle";
import { Language, LanguageElement } from "../ui/LanguageElement";
import { ProjetPicture } from "../ui/ProjecPicture";
import { SoureCodeBtn } from "../ui/SoureCodeBtn";
import { Config } from "@/types/config.interface";
const config: Config = require("@/config.json");

interface ProjectElementProps {
  name: string;
  desc: string;
  source: string;
  languages: Language[];
}

const ProjectElement = ({
  name,
  desc,
  source,
  languages,
}: ProjectElementProps) => (
  <li className="p-4 rounded-lg bg-secondary">
    <div className="flex-col md:flex-row flex justify-center items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
      <ProjetPicture name={name} />
      <div className="flex-col flex gap-1">
        <div className="flex justify-center md:justify-between items-center gap-2">
          <label className="text-xl md:text-2xl font-semibold">{name}</label>
          <SoureCodeBtn link={source} />
        </div>
        <p className="text-sm md:text-base font-normal text-zinc-400">{desc}</p>
        <ul className="mt-2 flex-wrap flex justify-center md:justify-normal items-center gap-2">
          {languages.map((language) => (
            <LanguageElement language={language} />
          ))}
        </ul>
      </div>
    </div>
  </li>
);

export const Projects = () => (
  <section id="projects" className="flex-col flex gap-2 md:gap-5">
    <CategoryTitle title="Projects" />
    <ul className="flex-col flex gap-4">
      {config.projects.map((project) => (
        <ProjectElement
          name={project.name}
          desc={project.desc}
          source={project.source}
          languages={project.languages}
        />
      ))}
    </ul>
  </section>
);
