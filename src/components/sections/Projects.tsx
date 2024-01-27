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
  <li className="max-w-[25rem] lg:max-w-none p-4 rounded-lg bg-secondary">
    <div className="flex-col lg:flex-row flex justify-center items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left">
      <ProjetPicture name={name} />
      <div className="flex-col flex gap-1">
        <div className="flex justify-center lg:justify-between items-center gap-2">
          <label className="text-xl lg:text-2xl font-semibold">{name}</label>
          <div className="flex items-center gap-2">
            {link && <ViewProjectBtn link={link} />}
            <SoureCodeBtn link={source} />
          </div>
        </div>
        <p className="text-sm lg:text-base font-normal text-zinc-400">{desc}</p>
        <ul className="mt-2 flex-wrap flex justify-center lg:justify-normal items-center gap-2">
          {languages.map((language, index) => (
            <LanguageElement key={index} language={language} />
          ))}
        </ul>
      </div>
    </div>
  </li>
);

export const Projects = () => (
  <section id="projects" className="flex-col flex gap-2 md:gap-5">
    <CategoryTitle title="Projects" />
    <ul className="flex-wrap lg:flex-col flex justify-center gap-4">
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
