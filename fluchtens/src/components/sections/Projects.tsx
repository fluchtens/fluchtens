import { CategoryTitle } from "@/components/ui/CategoryTitle";
import { Language, LanguageElement } from "../ui/LanguageElement";
import { ProjetPicture } from "../ui/ProjecPicture";
import { SoureCodeBtn } from "../ui/SoureCodeBtn";

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
    <div className="flex-col md:flex-row flex justify-center items-center md:items-start gap-6 text-center md:text-left">
      <ProjetPicture name={name} />
      <div className="flex-col flex gap-1">
        <div className="flex justify-center md:justify-between items-center gap-2">
          <label className="text-xl md:text-2xl font-semibold">{name}</label>
          <SoureCodeBtn link={source} />
        </div>
        <p className="text-sm md:text-base font-normal text-zinc-400">{desc}</p>
        <ul className="mt-2 flex-wrap flex justify-center md:justify-normal items-center gap-2">
          {languages.map((language) => (
            <LanguageElement key={language} language={language} />
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
      <ProjectElement
        name="ft_transcendence"
        desc="Modern multiplayer pong game web application in React and NestJS. This is
        the latest project of the 42 common core, involving the creation of a full
        stack application with multiplayer online pong as its main objective. It
        includes many features such as a matchmaking system, statistics, game
        history, friendship system and real-time chat."
        source="https://github.com/fluchtens/ft_transcendence"
        languages={[
          Language.TypeScript,
          Language.React,
          Language.Sass,
          Language.NestJS,
          Language.Prisma,
        ]}
      />
      <ProjectElement
        name="webserv"
        desc="Basic HTTP server written from scratch in C++98. Created during the common
        core of 42, it implements POST, GET and DELETE methods and integrates CGI
        for dynamic pages."
        source="https://github.com/fluchtens/webserv"
        languages={[Language.CPlusPlus]}
      />
      <ProjectElement
        name="cub3d"
        desc="A simple 3D raycasting rendering in C using the MiniLibX library.
          Produced during the common core of 42, this project was inspired by
          the world-famous Wolfenstein 3D game, which was the first FPS ever."
        source="https://github.com/fluchtens/cub3d"
        languages={[Language.C]}
      />
    </ul>
  </section>
);
