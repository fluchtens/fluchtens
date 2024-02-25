import { CategoryTitle } from "@/components/ui/CategoryTitle";
import { Language, LanguageElement } from "../ui/LanguageElement";
import { ProjetPicture } from "../ui/ProjecPicture";
import { SoureCodeBtn } from "../ui/SoureCodeBtn";
import { ViewProjectBtn } from "../ui/ViewProjectBtn";
import { Config } from "@/types/config.interface";
const config: Config = require("@/config.json");

interface ProjectElementProps {
  name: string;
  desc: string;
  link: string;
  source: string;
  languages: Language[];
}

const ProjectElement = ({
  name,
  desc,
  link,
  source,
  languages,
}: ProjectElementProps) => (
  <li className="max-w-[20rem] h-auto p-3 sm:p-4 rounded-lg bg-secondary">
    <div className="flex-col flex justify-center items-center sm:items-start gap-3 text-center sm:text-left">
      <ProjetPicture name={name} />
      <div className="flex-col flex gap-1">
        <div className="flex justify-center sm:justify-between items-center gap-2">
          <label className="text-lg font-semibold">{name}</label>
          <div className="flex items-center gap-2">
            {link && <ViewProjectBtn link={link} />}
            <SoureCodeBtn link={source} />
          </div>
        </div>
        <p className="text-sm font-normal text-zinc-400">{desc}</p>
        <ul className="mt-2 flex-wrap flex justify-center sm:justify-normal items-center gap-2">
          {languages.map((language, index) => (
            <LanguageElement key={index} language={language} />
          ))}
        </ul>
      </div>
    </div>
  </li>
);

export const Projects = () => (
  <section id="projects" className="flex-col flex gap-4 md:gap-5">
    <CategoryTitle title="Projects" />
    <ul className="flex-wrap flex justify-center gap-3">
      {config.projects.map((project, index) => (
        <ProjectElement
          key={index}
          name={project.name}
          desc={project.desc}
          link={project.link}
          source={project.source}
          languages={project.languages}
        />
      ))}
    </ul>
  </section>
);
