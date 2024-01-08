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

const HorizontalProjectElement = ({
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
            <LanguageElement key={language} language={language} />
          ))}
        </ul>
      </div>
    </div>
  </li>
);

const VerticalProjectElement = ({
  name,
  desc,
  source,
  languages,
}: ProjectElementProps) => (
  <li className="p-4 rounded-lg bg-secondary">
    <div className="flex-col flex justify-center items-center gap-4 text-center ">
      <ProjetPicture name={name} vertical={true} />
      <div className="flex-col flex gap-1">
        <div className="flex justify-center items-center gap-2">
          <label className="text-xl md:text-2xl font-semibold">{name}</label>
          <SoureCodeBtn link={source} />
        </div>
        <p className="text-sm md:text-base font-normal text-zinc-400">{desc}</p>
        <ul className="mt-2 flex-wrap flex justify-center items-center gap-2">
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
      <HorizontalProjectElement
        name="ft_transcendence"
        desc="Modern multiplayer pong game web application in React and NestJS. This is
        the latest project of the 42 common core, involving the creation of a full
        stack application with multiplayer online pong as its main objective. It
        includes many features such as a matchmaking system, statistics, game
        history, friendship system and real-time chat."
        source="https://github.com/fluchtens/ft_transcendence"
        languages={[
          Language.React,
          Language.TypeScript,
          Language.Sass,
          Language.NestJS,
          Language.Prisma,
        ]}
      />
      <HorizontalProjectElement
        name="react-weather-app"
        desc="An interactive weather application created in React and Tailwind that lets you
          check the weather forecast in real time. I created this application to learn react."
        source="https://github.com/fluchtens/react-weather-app"
        languages={[Language.React, Language.TypeScript, Language.Tailwind]}
      />
      <ul className="flex gap-4">
        <VerticalProjectElement
          name="webserv"
          desc="Basic HTTP server written from scratch in C++98. Created during the common
          core of 42, it implements POST, GET and DELETE methods and integrates CGI
          for dynamic pages."
          source="https://github.com/fluchtens/webserv"
          languages={[Language.CPlusPlus]}
        />
        <VerticalProjectElement
          name="cub3d"
          desc="A simple 3D raycasting rendering in C using the MiniLibX library.
          Produced during the common core of 42, this project was inspired by
          the world-famous Wolfenstein 3D game, which was the first FPS ever."
          source="https://github.com/fluchtens/cub3d"
          languages={[Language.C]}
        />
      </ul>
    </ul>
  </section>
);
