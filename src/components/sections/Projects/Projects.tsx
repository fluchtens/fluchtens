"use server";

import { CategoryTitle } from "@/components/ui/CategoryTitle";
import { Config } from "@/types/config.interface";
import { Language, LanguageElement } from "./ui/LanguageElement";
import { ProjectModal } from "./ui/ProjectModal";
import { SoureCodeBtn } from "./ui/SoureCodeBtn";
import { ViewProjectBtn } from "./ui/ViewProjectBtn";

const config: Config = require("@/config.json");

interface ProjectElementProps {
  name: string;
  desc: string;
  fullDesc: string;
  link: string;
  source: string;
  languages: Language[];
}

const ProjectElement = ({ name, desc, fullDesc, link, source, languages }: ProjectElementProps) => (
  <li className="max-w-[20rem] h-auto p-4 rounded-lg bg-card overflow-hidden">
    <div className="flex-col flex gap-3">
      <ProjectModal name={name} desc={fullDesc} languages={languages} />
      <div className="flex-col flex gap-1">
        <div className="flex justify-between items-center gap-2">
          <label className="text-lg font-semibold">{name}</label>
          <div className="flex items-center gap-2">
            {link && <ViewProjectBtn link={link} />}
            <SoureCodeBtn link={source} />
          </div>
        </div>
        <p className="text-sm font-normal text-zinc-400">{desc}</p>
        <ul className="mt-2 flex-wrap flex items-center gap-2">
          {languages.map((language, index) => (
            <LanguageElement key={index} language={language} />
          ))}
        </ul>
      </div>
    </div>
  </li>
);

export const Projects = () => (
  <section id="projects" className="flex-col flex items-center gap-4 md:gap-5">
    <CategoryTitle title="Projects" />
    <ul className="flex-wrap flex justify-center gap-3">
      {config.projects.map((project, index) => (
        <ProjectElement
          key={index}
          name={project.name}
          desc={project.desc}
          fullDesc={project.full_desc}
          link={project.link}
          source={project.source}
          languages={project.languages}
        />
      ))}
    </ul>
    <a
      href="https://github.com/fluchtens?tab=repositories"
      target="_blank"
      className="px-3 py-2 rounded-xl bg-zinc-700 hover:bg-zinc-600 text-sm font-normal"
    >
      See more
    </a>
  </section>
);
